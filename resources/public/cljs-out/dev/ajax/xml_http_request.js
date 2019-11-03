// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('ajax.protocols');
goog.require('goog.string');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
var G__13509 = e.target.readyState;
var fexpr__13508 = new cljs.core.PersistentArrayMap(null, 5, [(0),cljs.core.cst$kw$not_DASH_initialized,(1),cljs.core.cst$kw$connection_DASH_established,(2),cljs.core.cst$kw$request_DASH_received,(3),cljs.core.cst$kw$processing_DASH_request,(4),cljs.core.cst$kw$response_DASH_ready], null);
return (fexpr__13508.cljs$core$IFn$_invoke$arity$1 ? fexpr__13508.cljs$core$IFn$_invoke$arity$1(G__13509) : fexpr__13508.call(null,G__13509));
});
ajax.xml_http_request.append = (function ajax$xml_http_request$append(current,next){
if(cljs.core.truth_(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(next)].join('');
} else {
return next;
}
});
ajax.xml_http_request.process_headers = (function ajax$xml_http_request$process_headers(header_str){
if(cljs.core.truth_(header_str)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (headers,header_line){
if(cljs.core.truth_(goog.string.isEmptyOrWhitespace(header_line))){
return headers;
} else {
var key_value = goog.string.splitLimit(header_line,": ",(2));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(headers,(key_value[(0)]),ajax.xml_http_request.append,(key_value[(1)]));
}
}),cljs.core.PersistentArrayMap.EMPTY,header_str.split("\r\n"));
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
ajax.xml_http_request.xmlhttprequest = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_target_STAR_,"nodejs"))?(function (){var xmlhttprequest = require("xmlhttprequest").XMLHttpRequest;
goog.object.set(global,"XMLHttpRequest",xmlhttprequest);

return xmlhttprequest;
})():XMLHttpRequest);
ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__13511,handler){
var map__13512 = p__13511;
var map__13512__$1 = ((((!((map__13512 == null)))?(((((map__13512.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13512.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13512):map__13512);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13512__$1,cljs.core.cst$kw$uri);
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13512__$1,cljs.core.cst$kw$method);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13512__$1,cljs.core.cst$kw$body);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13512__$1,cljs.core.cst$kw$headers);
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__13512__$1,cljs.core.cst$kw$timeout,(0));
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__13512__$1,cljs.core.cst$kw$with_DASH_credentials,false);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13512__$1,cljs.core.cst$kw$response_DASH_format);
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__13512,map__13512__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__13510_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$response_DASH_ready,ajax.xml_http_request.ready_state(p1__13510_SHARP_))){
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(this$__$1) : handler.call(null,this$__$1));
} else {
return null;
}
});})(this$__$1,map__13512,map__13512__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__5457__auto___13524 = cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5457__auto___13524)){
var response_type_13525 = temp__5457__auto___13524;
this$__$1.responseType = cljs.core.name(response_type_13525);
} else {
}

var seq__13514_13526 = cljs.core.seq(headers);
var chunk__13515_13527 = null;
var count__13516_13528 = (0);
var i__13517_13529 = (0);
while(true){
if((i__13517_13529 < count__13516_13528)){
var vec__13518_13530 = chunk__13515_13527.cljs$core$IIndexed$_nth$arity$2(null,i__13517_13529);
var k_13531 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13518_13530,(0),null);
var v_13532 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13518_13530,(1),null);
this$__$1.setRequestHeader(k_13531,v_13532);


var G__13533 = seq__13514_13526;
var G__13534 = chunk__13515_13527;
var G__13535 = count__13516_13528;
var G__13536 = (i__13517_13529 + (1));
seq__13514_13526 = G__13533;
chunk__13515_13527 = G__13534;
count__13516_13528 = G__13535;
i__13517_13529 = G__13536;
continue;
} else {
var temp__5457__auto___13537 = cljs.core.seq(seq__13514_13526);
if(temp__5457__auto___13537){
var seq__13514_13538__$1 = temp__5457__auto___13537;
if(cljs.core.chunked_seq_QMARK_(seq__13514_13538__$1)){
var c__4351__auto___13539 = cljs.core.chunk_first(seq__13514_13538__$1);
var G__13540 = cljs.core.chunk_rest(seq__13514_13538__$1);
var G__13541 = c__4351__auto___13539;
var G__13542 = cljs.core.count(c__4351__auto___13539);
var G__13543 = (0);
seq__13514_13526 = G__13540;
chunk__13515_13527 = G__13541;
count__13516_13528 = G__13542;
i__13517_13529 = G__13543;
continue;
} else {
var vec__13521_13544 = cljs.core.first(seq__13514_13538__$1);
var k_13545 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13521_13544,(0),null);
var v_13546 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13521_13544,(1),null);
this$__$1.setRequestHeader(k_13545,v_13546);


var G__13547 = cljs.core.next(seq__13514_13538__$1);
var G__13548 = null;
var G__13549 = (0);
var G__13550 = (0);
seq__13514_13526 = G__13547;
chunk__13515_13527 = G__13548;
count__13516_13528 = G__13549;
i__13517_13529 = G__13550;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__3949__auto__ = body;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return "";
}
})());

return this$__$1;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$ = cljs.core.PROTOCOL_SENTINEL;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$ = cljs.core.PROTOCOL_SENTINEL;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_all_headers$arity$1 = (function (this$){
var this$__$1 = this;
return ajax.xml_http_request.process_headers(this$__$1.getAllResponseHeaders());
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),this$__$1.readyState);
});
