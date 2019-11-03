// Compiled by ClojureScript 1.10.339 {}
goog.provide('re_frame.trace');
goog.require('cljs.core');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
goog.require('goog.functions');
re_frame.trace.id = cljs.core.atom.call(null,(0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_.call(null,re_frame.trace.id,(0));
});

/** @define {boolean} */
goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.call(null,(0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.call(null,re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/Day8/re-frame-10x#installation.");
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.call(null,re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.call(null,re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__10691){
var map__10692 = p__10691;
var map__10692__$1 = ((((!((map__10692 == null)))?(((((map__10692.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10692.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10692):map__10692);
var operation = cljs.core.get.call(null,map__10692__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.call(null,map__10692__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.call(null,map__10692__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.call(null,map__10692__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id.call(null),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__3949__auto__ = child_of;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now.call(null)], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce.call(null,(function re_frame$trace$tracing_cb_debounced(){
var seq__10694_10706 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__10695_10707 = null;
var count__10696_10708 = (0);
var i__10697_10709 = (0);
while(true){
if((i__10697_10709 < count__10696_10708)){
var vec__10698_10710 = cljs.core._nth.call(null,chunk__10695_10707,i__10697_10709);
var k_10711 = cljs.core.nth.call(null,vec__10698_10710,(0),null);
var cb_10712 = cljs.core.nth.call(null,vec__10698_10710,(1),null);
try{cb_10712.call(null,cljs.core.deref.call(null,re_frame.trace.traces));
}catch (e10701){var e_10713 = e10701;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_10711,"while storing",cljs.core.deref.call(null,re_frame.trace.traces),e_10713);
}

var G__10714 = seq__10694_10706;
var G__10715 = chunk__10695_10707;
var G__10716 = count__10696_10708;
var G__10717 = (i__10697_10709 + (1));
seq__10694_10706 = G__10714;
chunk__10695_10707 = G__10715;
count__10696_10708 = G__10716;
i__10697_10709 = G__10717;
continue;
} else {
var temp__5457__auto___10718 = cljs.core.seq.call(null,seq__10694_10706);
if(temp__5457__auto___10718){
var seq__10694_10719__$1 = temp__5457__auto___10718;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10694_10719__$1)){
var c__4351__auto___10720 = cljs.core.chunk_first.call(null,seq__10694_10719__$1);
var G__10721 = cljs.core.chunk_rest.call(null,seq__10694_10719__$1);
var G__10722 = c__4351__auto___10720;
var G__10723 = cljs.core.count.call(null,c__4351__auto___10720);
var G__10724 = (0);
seq__10694_10706 = G__10721;
chunk__10695_10707 = G__10722;
count__10696_10708 = G__10723;
i__10697_10709 = G__10724;
continue;
} else {
var vec__10702_10725 = cljs.core.first.call(null,seq__10694_10719__$1);
var k_10726 = cljs.core.nth.call(null,vec__10702_10725,(0),null);
var cb_10727 = cljs.core.nth.call(null,vec__10702_10725,(1),null);
try{cb_10727.call(null,cljs.core.deref.call(null,re_frame.trace.traces));
}catch (e10705){var e_10728 = e10705;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_10726,"while storing",cljs.core.deref.call(null,re_frame.trace.traces),e_10728);
}

var G__10729 = cljs.core.next.call(null,seq__10694_10719__$1);
var G__10730 = null;
var G__10731 = (0);
var G__10732 = (0);
seq__10694_10706 = G__10729;
chunk__10695_10707 = G__10730;
count__10696_10708 = G__10731;
i__10697_10709 = G__10732;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_.call(null,re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref.call(null,re_frame.trace.next_delivery) - (25)) < now)){
re_frame.trace.schedule_debounce.call(null);

return cljs.core.reset_BANG_.call(null,re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=trace.js.map
