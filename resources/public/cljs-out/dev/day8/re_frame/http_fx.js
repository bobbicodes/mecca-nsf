// Compiled by ClojureScript 1.10.339 {}
goog.provide('day8.re_frame.http_fx');
goog.require('cljs.core');
goog.require('goog.net.ErrorCode');
goog.require('re_frame.core');
goog.require('ajax.core');
/**
 * ajax-request only provides a single handler for success and errors
 */
day8.re_frame.http_fx.ajax_xhrio_handler = (function day8$re_frame$http_fx$ajax_xhrio_handler(on_success,on_failure,xhrio,p__20606){
var vec__20607 = p__20606;
var success_QMARK_ = cljs.core.nth.call(null,vec__20607,(0),null);
var response = cljs.core.nth.call(null,vec__20607,(1),null);
if(cljs.core.truth_(success_QMARK_)){
return on_success.call(null,response);
} else {
var details = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"uri","uri",-774711847),xhrio.getLastUri(),new cljs.core.Keyword(null,"last-method","last-method",-563909920),xhrio.lastMethod_,new cljs.core.Keyword(null,"last-error","last-error",1848699973),xhrio.getLastError(),new cljs.core.Keyword(null,"last-error-code","last-error-code",276598110),xhrio.getLastErrorCode(),new cljs.core.Keyword(null,"debug-message","debug-message",-502855302),goog.net.ErrorCode.getDebugMessage(xhrio.getLastErrorCode())], null),response);
return on_failure.call(null,details);
}
});
day8.re_frame.http_fx.request__GT_xhrio_options = (function day8$re_frame$http_fx$request__GT_xhrio_options(p__20612){
var map__20613 = p__20612;
var map__20613__$1 = ((((!((map__20613 == null)))?(((((map__20613.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20613.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20613):map__20613);
var request = map__20613__$1;
var on_success = cljs.core.get.call(null,map__20613__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"http-no-on-success","http-no-on-success",-1593227158)], null));
var on_failure = cljs.core.get.call(null,map__20613__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"http-no-on-failure","http-no-on-failure",962976084)], null));
var api = (new goog.net.XhrIo());
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,request,new cljs.core.Keyword(null,"api","api",-899839580),api,new cljs.core.Keyword(null,"handler","handler",-195596612),cljs.core.partial.call(null,day8.re_frame.http_fx.ajax_xhrio_handler,((function (api,map__20613,map__20613__$1,request,on_success,on_failure){
return (function (p1__20610_SHARP_){
return re_frame.core.dispatch.call(null,cljs.core.conj.call(null,on_success,p1__20610_SHARP_));
});})(api,map__20613,map__20613__$1,request,on_success,on_failure))
,((function (api,map__20613,map__20613__$1,request,on_success,on_failure){
return (function (p1__20611_SHARP_){
return re_frame.core.dispatch.call(null,cljs.core.conj.call(null,on_failure,p1__20611_SHARP_));
});})(api,map__20613,map__20613__$1,request,on_success,on_failure))
,api)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.Keyword(null,"on-failure","on-failure",842888245));
});
day8.re_frame.http_fx.http_effect = (function day8$re_frame$http_fx$http_effect(request){
var seq_request_maps = ((cljs.core.sequential_QMARK_.call(null,request))?request:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [request], null));
var seq__20615 = cljs.core.seq.call(null,seq_request_maps);
var chunk__20616 = null;
var count__20617 = (0);
var i__20618 = (0);
while(true){
if((i__20618 < count__20617)){
var request__$1 = cljs.core._nth.call(null,chunk__20616,i__20618);
ajax.core.ajax_request.call(null,day8.re_frame.http_fx.request__GT_xhrio_options.call(null,request__$1));


var G__20619 = seq__20615;
var G__20620 = chunk__20616;
var G__20621 = count__20617;
var G__20622 = (i__20618 + (1));
seq__20615 = G__20619;
chunk__20616 = G__20620;
count__20617 = G__20621;
i__20618 = G__20622;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__20615);
if(temp__5457__auto__){
var seq__20615__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20615__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__20615__$1);
var G__20623 = cljs.core.chunk_rest.call(null,seq__20615__$1);
var G__20624 = c__4351__auto__;
var G__20625 = cljs.core.count.call(null,c__4351__auto__);
var G__20626 = (0);
seq__20615 = G__20623;
chunk__20616 = G__20624;
count__20617 = G__20625;
i__20618 = G__20626;
continue;
} else {
var request__$1 = cljs.core.first.call(null,seq__20615__$1);
ajax.core.ajax_request.call(null,day8.re_frame.http_fx.request__GT_xhrio_options.call(null,request__$1));


var G__20627 = cljs.core.next.call(null,seq__20615__$1);
var G__20628 = null;
var G__20629 = (0);
var G__20630 = (0);
seq__20615 = G__20627;
chunk__20616 = G__20628;
count__20617 = G__20629;
i__20618 = G__20630;
continue;
}
} else {
return null;
}
}
break;
}
});
re_frame.core.reg_fx.call(null,new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),day8.re_frame.http_fx.http_effect);

//# sourceMappingURL=http_fx.js.map
