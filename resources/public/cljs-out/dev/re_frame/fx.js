// Compiled by ClojureScript 1.10.339 {}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.fx.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler.call(null,re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_11039 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));

try{try{var seq__11040 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__11041 = null;
var count__11042 = (0);
var i__11043 = (0);
while(true){
if((i__11043 < count__11042)){
var vec__11044 = cljs.core._nth.call(null,chunk__11041,i__11043);
var effect_key = cljs.core.nth.call(null,vec__11044,(0),null);
var effect_value = cljs.core.nth.call(null,vec__11044,(1),null);
var temp__5455__auto___11060 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___11060)){
var effect_fn_11061 = temp__5455__auto___11060;
effect_fn_11061.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__11062 = seq__11040;
var G__11063 = chunk__11041;
var G__11064 = count__11042;
var G__11065 = (i__11043 + (1));
seq__11040 = G__11062;
chunk__11041 = G__11063;
count__11042 = G__11064;
i__11043 = G__11065;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__11040);
if(temp__5457__auto__){
var seq__11040__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11040__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__11040__$1);
var G__11066 = cljs.core.chunk_rest.call(null,seq__11040__$1);
var G__11067 = c__4351__auto__;
var G__11068 = cljs.core.count.call(null,c__4351__auto__);
var G__11069 = (0);
seq__11040 = G__11066;
chunk__11041 = G__11067;
count__11042 = G__11068;
i__11043 = G__11069;
continue;
} else {
var vec__11047 = cljs.core.first.call(null,seq__11040__$1);
var effect_key = cljs.core.nth.call(null,vec__11047,(0),null);
var effect_value = cljs.core.nth.call(null,vec__11047,(1),null);
var temp__5455__auto___11070 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___11070)){
var effect_fn_11071 = temp__5455__auto___11070;
effect_fn_11071.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__11072 = cljs.core.next.call(null,seq__11040__$1);
var G__11073 = null;
var G__11074 = (0);
var G__11075 = (0);
seq__11040 = G__11072;
chunk__11041 = G__11073;
count__11042 = G__11074;
i__11043 = G__11075;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__10622__auto___11076 = re_frame.interop.now.call(null);
var duration__10623__auto___11077 = (end__10622__auto___11076 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__10623__auto___11077,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null)));

re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__10622__auto___11076);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_11039;
}} else {
var seq__11050 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__11051 = null;
var count__11052 = (0);
var i__11053 = (0);
while(true){
if((i__11053 < count__11052)){
var vec__11054 = cljs.core._nth.call(null,chunk__11051,i__11053);
var effect_key = cljs.core.nth.call(null,vec__11054,(0),null);
var effect_value = cljs.core.nth.call(null,vec__11054,(1),null);
var temp__5455__auto___11078 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___11078)){
var effect_fn_11079 = temp__5455__auto___11078;
effect_fn_11079.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__11080 = seq__11050;
var G__11081 = chunk__11051;
var G__11082 = count__11052;
var G__11083 = (i__11053 + (1));
seq__11050 = G__11080;
chunk__11051 = G__11081;
count__11052 = G__11082;
i__11053 = G__11083;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__11050);
if(temp__5457__auto__){
var seq__11050__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11050__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__11050__$1);
var G__11084 = cljs.core.chunk_rest.call(null,seq__11050__$1);
var G__11085 = c__4351__auto__;
var G__11086 = cljs.core.count.call(null,c__4351__auto__);
var G__11087 = (0);
seq__11050 = G__11084;
chunk__11051 = G__11085;
count__11052 = G__11086;
i__11053 = G__11087;
continue;
} else {
var vec__11057 = cljs.core.first.call(null,seq__11050__$1);
var effect_key = cljs.core.nth.call(null,vec__11057,(0),null);
var effect_value = cljs.core.nth.call(null,vec__11057,(1),null);
var temp__5455__auto___11088 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___11088)){
var effect_fn_11089 = temp__5455__auto___11088;
effect_fn_11089.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__11090 = cljs.core.next.call(null,seq__11050__$1);
var G__11091 = null;
var G__11092 = (0);
var G__11093 = (0);
seq__11050 = G__11090;
chunk__11051 = G__11091;
count__11052 = G__11092;
i__11053 = G__11093;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__11094 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__11095 = null;
var count__11096 = (0);
var i__11097 = (0);
while(true){
if((i__11097 < count__11096)){
var map__11098 = cljs.core._nth.call(null,chunk__11095,i__11097);
var map__11098__$1 = ((((!((map__11098 == null)))?(((((map__11098.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11098.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11098):map__11098);
var effect = map__11098__$1;
var ms = cljs.core.get.call(null,map__11098__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__11098__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number')))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__11094,chunk__11095,count__11096,i__11097,map__11098,map__11098__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__11094,chunk__11095,count__11096,i__11097,map__11098,map__11098__$1,effect,ms,dispatch))
,ms);
}


var G__11102 = seq__11094;
var G__11103 = chunk__11095;
var G__11104 = count__11096;
var G__11105 = (i__11097 + (1));
seq__11094 = G__11102;
chunk__11095 = G__11103;
count__11096 = G__11104;
i__11097 = G__11105;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__11094);
if(temp__5457__auto__){
var seq__11094__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11094__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__11094__$1);
var G__11106 = cljs.core.chunk_rest.call(null,seq__11094__$1);
var G__11107 = c__4351__auto__;
var G__11108 = cljs.core.count.call(null,c__4351__auto__);
var G__11109 = (0);
seq__11094 = G__11106;
chunk__11095 = G__11107;
count__11096 = G__11108;
i__11097 = G__11109;
continue;
} else {
var map__11100 = cljs.core.first.call(null,seq__11094__$1);
var map__11100__$1 = ((((!((map__11100 == null)))?(((((map__11100.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11100.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11100):map__11100);
var effect = map__11100__$1;
var ms = cljs.core.get.call(null,map__11100__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__11100__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number')))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__11094,chunk__11095,count__11096,i__11097,map__11100,map__11100__$1,effect,ms,dispatch,seq__11094__$1,temp__5457__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__11094,chunk__11095,count__11096,i__11097,map__11100,map__11100__$1,effect,ms,dispatch,seq__11094__$1,temp__5457__auto__))
,ms);
}


var G__11110 = cljs.core.next.call(null,seq__11094__$1);
var G__11111 = null;
var G__11112 = (0);
var G__11113 = (0);
seq__11094 = G__11110;
chunk__11095 = G__11111;
count__11096 = G__11112;
i__11097 = G__11113;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if(!(cljs.core.vector_QMARK_.call(null,value))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value);
} else {
return re_frame.router.dispatch.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if(!(cljs.core.sequential_QMARK_.call(null,value))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value);
} else {
var seq__11114 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__11115 = null;
var count__11116 = (0);
var i__11117 = (0);
while(true){
if((i__11117 < count__11116)){
var event = cljs.core._nth.call(null,chunk__11115,i__11117);
re_frame.router.dispatch.call(null,event);


var G__11118 = seq__11114;
var G__11119 = chunk__11115;
var G__11120 = count__11116;
var G__11121 = (i__11117 + (1));
seq__11114 = G__11118;
chunk__11115 = G__11119;
count__11116 = G__11120;
i__11117 = G__11121;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__11114);
if(temp__5457__auto__){
var seq__11114__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11114__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__11114__$1);
var G__11122 = cljs.core.chunk_rest.call(null,seq__11114__$1);
var G__11123 = c__4351__auto__;
var G__11124 = cljs.core.count.call(null,c__4351__auto__);
var G__11125 = (0);
seq__11114 = G__11122;
chunk__11115 = G__11123;
count__11116 = G__11124;
i__11117 = G__11125;
continue;
} else {
var event = cljs.core.first.call(null,seq__11114__$1);
re_frame.router.dispatch.call(null,event);


var G__11126 = cljs.core.next.call(null,seq__11114__$1);
var G__11127 = null;
var G__11128 = (0);
var G__11129 = (0);
seq__11114 = G__11126;
chunk__11115 = G__11127;
count__11116 = G__11128;
i__11117 = G__11129;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
var seq__11130 = cljs.core.seq.call(null,value);
var chunk__11131 = null;
var count__11132 = (0);
var i__11133 = (0);
while(true){
if((i__11133 < count__11132)){
var event = cljs.core._nth.call(null,chunk__11131,i__11133);
clear_event.call(null,event);


var G__11134 = seq__11130;
var G__11135 = chunk__11131;
var G__11136 = count__11132;
var G__11137 = (i__11133 + (1));
seq__11130 = G__11134;
chunk__11131 = G__11135;
count__11132 = G__11136;
i__11133 = G__11137;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__11130);
if(temp__5457__auto__){
var seq__11130__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11130__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__11130__$1);
var G__11138 = cljs.core.chunk_rest.call(null,seq__11130__$1);
var G__11139 = c__4351__auto__;
var G__11140 = cljs.core.count.call(null,c__4351__auto__);
var G__11141 = (0);
seq__11130 = G__11138;
chunk__11131 = G__11139;
count__11132 = G__11140;
i__11133 = G__11141;
continue;
} else {
var event = cljs.core.first.call(null,seq__11130__$1);
clear_event.call(null,event);


var G__11142 = cljs.core.next.call(null,seq__11130__$1);
var G__11143 = null;
var G__11144 = (0);
var G__11145 = (0);
seq__11130 = G__11142;
chunk__11131 = G__11143;
count__11132 = G__11144;
i__11133 = G__11145;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if(!((cljs.core.deref.call(null,re_frame.db.app_db) === value))){
return cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=fx.js.map
