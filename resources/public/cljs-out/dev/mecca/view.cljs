(ns ^:figwheel-hooks mecca.view
  (:require [mecca.subs :as subs]
            [re-frame.core :as rf :refer [subscribe dispatch]]
            [mecca.events :as events]
            [goog.object :as o]
            [goog.crypt :as crypt]
            [mecca.asterix :refer [asterix-hex]]))

(defn offset [n]
  (let [file (subscribe [:file-upload])]
    (apply str (first (drop n (partition 2 @file))))))

(defn offsets [from to]
  (let [file (subscribe [:file-upload])]
    (map #(apply str %)
         (partition 2 (take (- (* 2 to) (* 2 from)) (drop (* 2 from) @file))))))

(defn hex->ascii [s]
  (crypt/byteArrayToString
   (crypt/hexToByteArray (apply str s))))
  
(def header 
  [[0x00 0x04]
   [0x05 0x06] 
   [0x06 0x07] 
   [0x07 0x08] 
   [0x08 0x0a]
   [0x0a 0x0c]
   [0x0c 0x0e]
   [0x0e 0x2e]
   [0x2e 0x4e]
   [0x4e 0x6e]
   [0x6e 0x70]
   [0x70 0x78]
   [0x7a 0x7b]
   [0x7b 0x7c]
   [0x7c 0x7d]
   [0x7d 0x7e]
   [0x80 0x81]
   ])

(defn offsets-table []
  [:table.tg
   [:tr [:th.tg-0pky "Offset"] [:th.tg-0lax "Hex"] [:th.tg-0lax "ASCII"]]
   (for [[from to] header]
     [:tr
      [:td.tg-hmp3 (str "0x" (.toString from 16))]
      [:td.tg-hmp3 (apply str (interpose " " (offsets from to)))]
      [:td.tg-hmp3 (hex->ascii (offsets from to))]])])

(defn file-info []
  (let [file   (subscribe [:file-upload])
        valid? (= (apply str (take 10 @file)) "4E45534D1A")]
    [:div
     (if valid?
       [:h4.green "Valid NSF file :)"])
     [:h2 "Header:"]
     [:p (str "Version number: " (offset 5))]
     [:p (str "Total songs: " (js/parseInt (str "0x" (offset 6))))]
     [:p (str "Starting song: " (js/parseInt (str "0x" (offset 7))))]
     [:p (str "Load address: " (offsets 0x08 0x0a))]
     [:p (str "Init address: " (offsets 0x0a 0x0c))]
     [:p (str "Play address: " (offsets 0x0c 0x0e))]
     [:p (str "Song name: " (hex->ascii (offsets 0x0e 0x2e)))]
     [:p (str "Artist: " (hex->ascii (offsets 0x2e 0x4e)))]
     [:p (str "Copyright: " (hex->ascii (offsets 0x4e 0x6e)))]
     [:p (str "Play speed (NTSC): " (offsets 0x6e 0x70))]
     [:p (str "Bankswitch init values: " (offsets 0x70 0x78))]
     [:p (str "Play speed (PAL): " (offsets 0x78 0x7a))]
     [:p (str "PAL/NTSC: " (offsets 0x7a 0x7b))]
     [:p (str "Extra Sound Chip Support: " (offsets 0x7b 0x7c))]
     [:p]
     [offsets-table]
      [:h2 "Hex dump:"]
      [:p (str @file)]]))

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
