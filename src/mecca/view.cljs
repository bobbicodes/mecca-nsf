(ns ^:figwheel-hooks mecca.view
  (:require [mecca.subs :as subs]
            [re-frame.core :as rf :refer [subscribe dispatch]]
            [mecca.events :as events]
            [goog.object :as o]
            [goog.crypt :as crypt]
            [mecca.asterix :refer [asterix-hex]]))

(defn offsets
  ([n] (offsets n (inc n)))
  ([from to]
     (map #(apply str %)
          (partition 2 (take (- (* 2 to) (* 2 from))
                             (drop (* 2 from) @(subscribe [:file-upload])))))))

(defn word [offset]
  (str "0x" (first (offsets (inc offset)))
       (first (offsets offset))))

(defn hex->ascii [s]
  (crypt/byteArrayToString
   (crypt/hexToByteArray (apply str s))))
  
(def header 
  [[0x00 0x05] [0x05 0x06] [0x06 0x07] [0x07 0x08]
   [0x08 0x0a] [0x0a 0x0c] [0x0c 0x0e] [0x0e 0x2e]
   [0x2e 0x4e] [0x4e 0x6e] [0x6e 0x70] [0x70 0x78]
   [0x7a 0x7b] [0x7b 0x7c] [0x7c 0x7d] [0x7d 0x7e]])

(defn offsets-table []
  [:table.tg
   [:tbody
    [:tr [:th.tg-0pky "Offset"] [:th.tg-0lax "Hex"] [:th.tg-0lax "ASCII"]]
    (doall (for [[from to] header]
             ^{:key [from to]}
             [:tr
              [:td.tg-hmp3 (str "0x" (.toString from 16))]
              [:td.tg-hmp3 (apply str (interpose " " (offsets from to)))]
              [:td.tg-hmp3 (hex->ascii (offsets from to))]]))]])

(defn file-info []
  (let [file   (subscribe [:file-upload])
        valid? (= (apply str (take 10 @file)) "4E45534D1A")]
    [:div
     (if valid?
       [:div 
        [:h2 "Header:"]
        [:p (str "Version number: " (first (offsets 0x05)))]
        [:p (str "Total songs: " (js/parseInt (str "0x" (first (offsets 0x06)))))]
        [:p (str "Starting song: " (js/parseInt (str "0x" (first (offsets 0x07)))))]
        [:p (str "Load address: " (word 0x08))]
        [:p (str "Init address: " (word 0x0a))]
        [:p (str "Play address: " (word 0x0c))]
        [:p (str "Song name: " (hex->ascii (offsets 0x0e 0x2e)))]
        [:p (str "Artist: " (hex->ascii (offsets 0x2e 0x4e)))]
        [:p (str "Copyright: " (hex->ascii (offsets 0x4e 0x6e)))]
        [:p (str "Play speed (NTSC): " (js/parseInt (word 0x6e)) " (in 1/1000000th sec ticks)")]
        [:p (str "Bankswitch init values: " (offsets 0x70 0x78))]
        [:p (str "Play speed (PAL): " (js/parseInt (word 0x78)) " (in 1/1000000th sec ticks)")]
        [:p (str "PAL/NTSC: " (first (offsets 0x7a)))]
        [:p (str "Extra Sound Chip Support: "
                 (let [byte (first (offsets 0x7b))]
                   (case byte
                     "01" "This song uses VRC6 audio"
                     "02" "This song uses VRC7 audio"
                     "04" "This song uses FDS audio"
                     "08" "This song uses MMC5 audio"
                     "10" "This song uses Namco 163 audio"
                     "20" "This song uses Sunsoft 5B audio"
                     byte)))]
        [:p]
        [:h2 "Offsets:"]
        [offsets-table]
        [:h2 "Music data:"]
        [:p (interpose " " (partition 2 (take 1000 (drop 256 @file))))]])]))

(defn file-import []
  [:div
   [:h1 "Import NSF file"]
   [:h4 "Web parser for NES Sound Format"]
   [:p]
   [:div
    [:input#input
     {:type      "file"
      :on-change 
      (fn [event]
        (let [dom    (o/get event "target")
              file   (o/getValueByKeys dom #js ["files" 0])
              reader (js/FileReader.)]
          (.readAsArrayBuffer reader file)
          (set! (.-onload reader)
                (fn [e]
                  (dispatch [:file-upload
                             (-> e .-target .-result
                                 (js/Uint8Array.)
                                 crypt/byteArrayToHex
                                 .toUpperCase)])))))}]
    [:button
     {:on-click
      (fn [e]
        (dispatch [:file-upload asterix-hex]))}
     "Load example file"]
    [:p]]])

(defn mecca []
  [:div
   [file-import]
   [file-info]])
