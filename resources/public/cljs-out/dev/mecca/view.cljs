(ns ^:figwheel-hooks mecca.view
  (:require [mecca.subs :as subs]
            [re-frame.core :as rf :refer [subscribe dispatch]]
            [mecca.events :as events]
            [goog.object :as o]
            [goog.crypt :as crypt]))

(defn get-offset [n]
  (let [file (subscribe [:file-upload])]
    (apply str (first (drop n (partition 2 @file))))))

(defn hex->ascii [s]
  (crypt/byteArrayToString
   (crypt/hexToByteArray s)))

(defn mecca []
  [:div
   [:h1 "Import NSF file"]
   [:p]
   [:div
    [:input#input
     {:type "file"
      :on-change
      (fn [event]
        (let [dom  (o/get event "target")
               file (o/getValueByKeys dom #js ["files" 0])
               reader (js/FileReader.)]
          (.readAsArrayBuffer reader file)
          (set! (.-onload reader)
            (fn [e]
              (dispatch [:file-upload
                         (-> e .-target .-result
                           (js/Uint8Array.)
                           crypt/byteArrayToHex)])))))}]]
   (let [file (subscribe [:file-upload])]
     [:div
      [:h2 "Hex dump:"]
      [:p (str @file)]
      [:h2 "Header:"]
      [:p (partition 2 (apply str (take 10 @file)))]
      [:h3 "ASCII:"]
      [:p (hex->ascii (apply str (take 8 @file)))]
      (if (= (apply str (take 10 @file)) "4e45534d1a")
        [:h3.green "This is an NSF file :)"])])
   ])
