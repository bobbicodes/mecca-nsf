(ns ^:figwheel-hooks mecca.view
  (:require [mecca.subs :as subs]
            [re-frame.core :as rf :refer [subscribe dispatch]]
            [mecca.events :as events]
            [goog.object :as o]
            [goog.crypt :as crypt]
            [mecca.asterix :refer [asterix-hex]]))

(defn get-offset [n]
  (let [file (subscribe [:file-upload])]
    (apply str (first (drop n (partition 2 @file))))))

(defn hex->ascii [s]
  (crypt/byteArrayToString
   (crypt/hexToByteArray s)))

(defn file-info []
  (let [file (subscribe [:file-upload])
        valid? (= (apply str (take 10 @file)) "4e45534d1a")]
    [:div
     (if valid?
       [:h3.green "This is an NSF file :)"])
     [:h2 "Hex dump:"]
     [:p (str @file)]
     [:div.container
      [:div.item
       [:h3 "Offsets"]
       [:p "$000 - $004"]]
      [:div.item
       [:h3 "Hex:"]
       [:p (str (apply str (first (partition 2 @file)))
                " " (get-offset 1)
                " " (get-offset 2)
                " " (get-offset 3)
                " " (get-offset 4))]]
      [:div.item 
       [:h3 "ASCII:"]
       [:p (hex->ascii (apply str (take 8 @file)))]]]]))

(defn file-import []
  [:div
   [:h1 "Import NSF file"]
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
                                 crypt/byteArrayToHex)])))))}]
    [:button
     {:on-click
      (fn [e]
        (dispatch [:file-upload asterix-hex]))}
     "Load sample"]]])

(defn mecca []
  [:div
   [file-import]
   [file-info]])
