// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('mecca.view');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('mecca.subs');
goog.require('re_frame.core');
goog.require('mecca.events');
goog.require('goog.object');
goog.require('goog.crypt');
goog.require('mecca.asterix');
mecca.view.offset = (function mecca$view$offset(n){
var file = (function (){var G__19630 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$file_DASH_upload], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__19630) : re_frame.core.subscribe.call(null,G__19630));
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.first(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(n,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),cljs.core.deref(file)))));
});
mecca.view.offsets = (function mecca$view$offsets(from,to){
var file = (function (){var G__19632 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$file_DASH_upload], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__19632) : re_frame.core.subscribe.call(null,G__19632));
})();
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (file){
return (function (p1__19631_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,p1__19631_SHARP_);
});})(file))
,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),cljs.core.take.cljs$core$IFn$_invoke$arity$2((((2) * to) - ((2) * from)),cljs.core.drop.cljs$core$IFn$_invoke$arity$2(((2) * from),cljs.core.deref(file)))));
});
mecca.view.hex__GT_ascii = (function mecca$view$hex__GT_ascii(s){
var G__19633 = (function (){var G__19634 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,s);
return goog.crypt.hexToByteArray(G__19634);
})();
return goog.crypt.byteArrayToString(G__19633);
});
mecca.view.header = new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(4)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),(6)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),(7)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7),(8)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(8),(10)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),(12)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12),(14)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(14),(46)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(46),(78)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(78),(110)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(110),(112)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(112),(120)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(122),(123)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(123),(124)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(124),(125)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(125),(126)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(128),(129)], null)], null);
mecca.view.offsets_table = (function mecca$view$offsets_table(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$table$tg,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$th$tg_DASH_0pky,"Offset"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$th$tg_DASH_0lax,"Hex"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$th$tg_DASH_0lax,"ASCII"], null)], null),(function (){var iter__4324__auto__ = (function mecca$view$offsets_table_$_iter__19635(s__19636){
return (new cljs.core.LazySeq(null,(function (){
var s__19636__$1 = s__19636;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__19636__$1);
if(temp__5457__auto__){
var s__19636__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__19636__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__19636__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__19638 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__19637 = (0);
while(true){
if((i__19637 < size__4323__auto__)){
var vec__19639 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__19637);
var from = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19639,(0),null);
var to = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19639,(1),null);
cljs.core.chunk_append(b__19638,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td$tg_DASH_hmp3,["0x",cljs.core.str.cljs$core$IFn$_invoke$arity$1(from.toString((16)))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td$tg_DASH_hmp3,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",mecca.view.offsets(from,to)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td$tg_DASH_hmp3,mecca.view.hex__GT_ascii(mecca.view.offsets(from,to))], null)], null));

var G__19645 = (i__19637 + (1));
i__19637 = G__19645;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19638),mecca$view$offsets_table_$_iter__19635(cljs.core.chunk_rest(s__19636__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19638),null);
}
} else {
var vec__19642 = cljs.core.first(s__19636__$2);
var from = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19642,(0),null);
var to = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19642,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td$tg_DASH_hmp3,["0x",cljs.core.str.cljs$core$IFn$_invoke$arity$1(from.toString((16)))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td$tg_DASH_hmp3,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",mecca.view.offsets(from,to)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td$tg_DASH_hmp3,mecca.view.hex__GT_ascii(mecca.view.offsets(from,to))], null)], null),mecca$view$offsets_table_$_iter__19635(cljs.core.rest(s__19636__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__(mecca.view.header);
})()], null);
});
mecca.view.file_info = (function mecca$view$file_info(){
var file = (function (){var G__19646 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$file_DASH_upload], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__19646) : re_frame.core.subscribe.call(null,G__19646));
})();
var valid_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.take.cljs$core$IFn$_invoke$arity$2((10),cljs.core.deref(file))),"4E45534D1A");
return new cljs.core.PersistentVector(null, 21, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,((valid_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h4$green,"Valid NSF file :)"], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2,"Header:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["Version number: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mecca.view.offset((5)))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["Total songs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(parseInt(["0x",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mecca.view.offset((6)))].join('')))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["Starting song: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(parseInt(["0x",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mecca.view.offset((7)))].join('')))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["Load address: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mecca.view.offsets((8),(10)))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["Init address: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mecca.view.offsets((10),(12)))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["Play address: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mecca.view.offsets((12),(14)))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["Song name: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mecca.view.hex__GT_ascii(mecca.view.offsets((14),(46))))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["Artist: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mecca.view.hex__GT_ascii(mecca.view.offsets((46),(78))))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["Copyright: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mecca.view.hex__GT_ascii(mecca.view.offsets((78),(110))))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["Play speed (NTSC): ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mecca.view.offsets((110),(112)))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["Bankswitch init values: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mecca.view.offsets((112),(120)))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["Play speed (PAL): ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mecca.view.offsets((120),(122)))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["PAL/NTSC: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mecca.view.offsets((122),(123)))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["Extra Sound Chip Support: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mecca.view.offsets((123),(124)))].join('')], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.offsets_table], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2,"Hex dump:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(file))].join('')], null)], null);
});
mecca.view.file_import = (function mecca$view$file_import(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1,"Import NSF file"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h4,"Web parser for NES Sound Format"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input_SHARP_input,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"file",cljs.core.cst$kw$on_DASH_change,(function (event){
var dom = goog.object.get(event,"target");
var file = (function (){var G__19647 = dom;
var G__19648 = ["files",(0)];
return goog.object.getValueByKeys(G__19647,G__19648);
})();
var reader = (new FileReader());
reader.readAsArrayBuffer(file);

return reader.onload = ((function (dom,file,reader){
return (function (e){
var G__19649 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$file_DASH_upload,(function (){var G__19650 = (new Uint8Array(e.target.result));
return goog.crypt.byteArrayToHex(G__19650);
})().toUpperCase()], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__19649) : re_frame.core.dispatch.call(null,G__19649));
});})(dom,file,reader))
;
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (e){
var G__19651 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$file_DASH_upload,mecca.asterix.asterix_hex], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__19651) : re_frame.core.dispatch.call(null,G__19651));
})], null),"Load example file"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p], null)], null)], null);
});
mecca.view.mecca = (function mecca$view$mecca(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.file_import], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.file_info], null)], null);
});
