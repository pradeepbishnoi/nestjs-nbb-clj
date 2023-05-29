(ns hello)

;; variation 1 tried
(defn someData []
  (print "Hi is this working?")
  "Hi, please show up in api response")

;; variation 2 tried
;; (defn someData []
;;   (print "Some map data")
;;  {:a "Hi, please show up in api response"})

#js {:someData someData}