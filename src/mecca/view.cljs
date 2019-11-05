(ns ^:figwheel-hooks mecca.view
  (:require [mecca.subs :as subs]
            [re-frame.core :as rf :refer [subscribe dispatch]]
            [mecca.events :as events]
            [goog.object :as o]
            [goog.crypt :as crypt]
            [mecca.asterix :refer [asterix-hex]]))

(defn offset
  ([n] (offset n (inc n)))
  ([from to]
     (map #(apply str %)
          (partition 2 (take (- (* 2 to) (* 2 from))
                             (drop (* 2 from) @(subscribe [:file-upload])))))))

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
              [:td.tg-hmp3 (apply str (interpose " " (offset from to)))]
              [:td.tg-hmp3 (hex->ascii (offset from to))]]))]])

(defn file-info []
  (let [file   (subscribe [:file-upload])
        valid? (= (apply str (take 10 @file)) "4E45534D1A")]
    [:div
     (if valid?
       [:h4.green "Valid NSF file :)"])
     [:h2 "Header:"]
     [:p (str "Version number: " (first (offset 0x05)))]
     [:p (str "Total songs: " (js/parseInt (str "0x" (offset 0x06))))]
     [:p (str "Starting song: " (js/parseInt (str "0x" (offset 0x07))))]
     [:p (str "Load address: " (offset 0x08 0x0a))]
     [:p (str "Init address: " (offset 0x0a 0x0c))]
     [:p (str "Play address: " (offset 0x0c 0x0e))]
     [:p (str "Song name: " (hex->ascii (offset 0x0e 0x2e)))]
     [:p (str "Artist: " (hex->ascii (offset 0x2e 0x4e)))]
     [:p (str "Copyright: " (hex->ascii (offset 0x4e 0x6e)))]
     [:p (str "Play speed (NTSC): " (offset 0x6e 0x70))]
     [:p (str "Bankswitch init values: " (offset 0x70 0x78))]
     [:p (str "Play speed (PAL): " (offset 0x78 0x7a))]
     [:p (str "PAL/NTSC: " (first (offset 0x7a)))]
     [:p (str "Extra Sound Chip Support: " (let [byte (first (offset 0x7b))]
                                             (case byte
                                               "01" "This song uses VRC6 audio"
                                               "N/A")))]
     [:p]
     [offsets-table]
      [:h2 "Music data:"]
     [:p (interpose " " (partition 2 (take 1000 (drop 256 @file))))]]))

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
