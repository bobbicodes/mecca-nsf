// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('re_frame.trace');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
goog.require('goog.functions');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});

/** @define {boolean} */
goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/Day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__11413){
var map__11414 = p__11413;
var map__11414__$1 = ((((!((map__11414 == null)))?(((((map__11414.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11414.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11414):map__11414);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11414__$1,cljs.core.cst$kw$operation);
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11414__$1,cljs.core.cst$kw$op_DASH_type);
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11414__$1,cljs.core.cst$kw$tags);
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11414__$1,cljs.core.cst$kw$child_DASH_of);
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$id,re_frame.trace.next_id(),cljs.core.cst$kw$operation,operation,cljs.core.cst$kw$op_DASH_type,op_type,cljs.core.cst$kw$tags,tags,cljs.core.cst$kw$child_DASH_of,(function (){var or__3949__auto__ = child_of;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),cljs.core.cst$kw$start,re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__11416_11430 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__11417_11431 = null;
var count__11418_11432 = (0);
var i__11419_11433 = (0);
while(true){
if((i__11419_11433 < count__11418_11432)){
var vec__11420_11434 = chunk__11417_11431.cljs$core$IIndexed$_nth$arity$2(null,i__11419_11433);
var k_11435 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11420_11434,(0),null);
var cb_11436 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11420_11434,(1),null);
try{var G__11424_11437 = cljs.core.deref(re_frame.trace.traces);
(cb_11436.cljs$core$IFn$_invoke$arity$1 ? cb_11436.cljs$core$IFn$_invoke$arity$1(G__11424_11437) : cb_11436.call(null,G__11424_11437));
}catch (e11423){var e_11438 = e11423;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_11435,"while storing",cljs.core.deref(re_frame.trace.traces),e_11438], 0));
}

var G__11439 = seq__11416_11430;
var G__11440 = chunk__11417_11431;
var G__11441 = count__11418_11432;
var G__11442 = (i__11419_11433 + (1));
seq__11416_11430 = G__11439;
chunk__11417_11431 = G__11440;
count__11418_11432 = G__11441;
i__11419_11433 = G__11442;
continue;
} else {
var temp__5457__auto___11443 = cljs.core.seq(seq__11416_11430);
if(temp__5457__auto___11443){
var seq__11416_11444__$1 = temp__5457__auto___11443;
if(cljs.core.chunked_seq_QMARK_(seq__11416_11444__$1)){
var c__4351__auto___11445 = cljs.core.chunk_first(seq__11416_11444__$1);
var G__11446 = cljs.core.chunk_rest(seq__11416_11444__$1);
var G__11447 = c__4351__auto___11445;
var G__11448 = cljs.core.count(c__4351__auto___11445);
var G__11449 = (0);
seq__11416_11430 = G__11446;
chunk__11417_11431 = G__11447;
count__11418_11432 = G__11448;
i__11419_11433 = G__11449;
continue;
} else {
var vec__11425_11450 = cljs.core.first(seq__11416_11444__$1);
var k_11451 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11425_11450,(0),null);
var cb_11452 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11425_11450,(1),null);
try{var G__11429_11453 = cljs.core.deref(re_frame.trace.traces);
(cb_11452.cljs$core$IFn$_invoke$arity$1 ? cb_11452.cljs$core$IFn$_invoke$arity$1(G__11429_11453) : cb_11452.call(null,G__11429_11453));
}catch (e11428){var e_11454 = e11428;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_11451,"while storing",cljs.core.deref(re_frame.trace.traces),e_11454], 0));
}

var G__11455 = cljs.core.next(seq__11416_11444__$1);
var G__11456 = null;
var G__11457 = (0);
var G__11458 = (0);
seq__11416_11430 = G__11455;
chunk__11417_11431 = G__11456;
count__11418_11432 = G__11457;
i__11419_11433 = G__11458;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});
