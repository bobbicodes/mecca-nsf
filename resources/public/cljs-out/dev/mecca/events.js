// Compiled by ClojureScript 1.10.339 {}
goog.provide('mecca.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('re_pressed.core');
goog.require('day8.re_frame.undo');
goog.require('goog.events');
goog.require('goog.events.EventType');
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"file-upload","file-upload",-1929678130),null], null);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"file-upload","file-upload",-1929678130),(function (db,p__12195){
var vec__12196 = p__12195;
var _ = cljs.core.nth.call(null,vec__12196,(0),null);
var file = cljs.core.nth.call(null,vec__12196,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"file-upload","file-upload",-1929678130),file);
}));

//# sourceMappingURL=events.js.map
