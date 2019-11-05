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
mecca.view.offsets = (function mecca$view$offsets(var_args){
var G__12546 = arguments.length;
switch (G__12546) {
case 1:
return mecca.view.offsets.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return mecca.view.offsets.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

mecca.view.offsets.cljs$core$IFn$_invoke$arity$1 = (function (n){
return mecca.view.offsets.cljs$core$IFn$_invoke$arity$2(n,(n + (1)));
});

mecca.view.offsets.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__12544_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,p1__12544_SHARP_);
}),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),cljs.core.take.cljs$core$IFn$_invoke$arity$2((((2) * to) - ((2) * from)),cljs.core.drop.cljs$core$IFn$_invoke$arity$2(((2) * from),cljs.core.deref((function (){var G__12547 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$file_DASH_upload], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__12547) : re_frame.core.subscribe.call(null,G__12547));
})())))));
});

mecca.view.offsets.cljs$lang$maxFixedArity = 2;

mecca.view.word = (function mecca$view$word(offset){
return ["0x",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(mecca.view.offsets.cljs$core$IFn$_invoke$arity$1((offset + (1))))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(mecca.view.offsets.cljs$core$IFn$_invoke$arity$1(offset)))].join('');
});
mecca.view.hex__GT_ascii = (function mecca$view$hex__GT_ascii(s){
var G__12549 = (function (){var G__12550 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,s);
return goog.crypt.hexToByteArray(G__12550);
})();
return goog.crypt.byteArrayToString(G__12549);
});
mecca.view.header = new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(5)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),(6)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),(7)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7),(8)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(8),(10)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),(12)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12),(14)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(14),(46)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(46),(78)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(78),(110)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(110),(112)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(112),(120)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(122),(123)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(123),(124)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(124),(125)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(125),(126)], null)], null);
mecca.view.offsets_table = (function mecca$view$offsets_table(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$table$tg,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tbody,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$th$tg_DASH_0pky,"Offset"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$th$tg_DASH_0lax,"Hex"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$th$tg_DASH_0lax,"ASCII"], null)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4324__auto__ = (function mecca$view$offsets_table_$_iter__12551(s__12552){
return (new cljs.core.LazySeq(null,(function (){
var s__12552__$1 = s__12552;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__12552__$1);
if(temp__5457__auto__){
var s__12552__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__12552__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__12552__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__12554 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__12553 = (0);
while(true){
if((i__12553 < size__4323__auto__)){
var vec__12555 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__12553);
var from = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12555,(0),null);
var to = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12555,(1),null);
cljs.core.chunk_append(b__12554,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td$tg_DASH_hmp3,["0x",cljs.core.str.cljs$core$IFn$_invoke$arity$1(from.toString((16)))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td$tg_DASH_hmp3,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",mecca.view.offsets.cljs$core$IFn$_invoke$arity$2(from,to)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td$tg_DASH_hmp3,mecca.view.hex__GT_ascii(mecca.view.offsets.cljs$core$IFn$_invoke$arity$2(from,to))], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [from,to], null)], null)));

var G__12561 = (i__12553 + (1));
i__12553 = G__12561;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__12554),mecca$view$offsets_table_$_iter__12551(cljs.core.chunk_rest(s__12552__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__12554),null);
}
} else {
var vec__12558 = cljs.core.first(s__12552__$2);
var from = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12558,(0),null);
var to = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12558,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td$tg_DASH_hmp3,["0x",cljs.core.str.cljs$core$IFn$_invoke$arity$1(from.toString((16)))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td$tg_DASH_hmp3,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",mecca.view.offsets.cljs$core$IFn$_invoke$arity$2(from,to)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td$tg_DASH_hmp3,mecca.view.hex__GT_ascii(mecca.view.offsets.cljs$core$IFn$_invoke$arity$2(from,to))], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [from,to], null)], null)),mecca$view$offsets_table_$_iter__12551(cljs.core.rest(s__12552__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__(mecca.view.header);
})())], null)], null);
});
mecca.view.file_info = (function mecca$view$file_info(){
var file = (function (){var G__12562 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$file_DASH_upload], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__12562) : re_frame.core.subscribe.call(null,G__12562));
})();
var valid_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.take.cljs$core$IFn$_invoke$arity$2((10),cljs.core.deref(file))),"4E45534D1A");
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,((valid_QMARK_)?new cljs.core.PersistentVector(null, 21, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2,"Header:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["Version number: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(mecca.view.offsets.cljs$core$IFn$_invoke$arity$1((5))))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["Total songs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(parseInt(["0x",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(mecca.view.offsets.cljs$core$IFn$_invoke$arity$1((6))))].join('')))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["Starting song: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(parseInt(["0x",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(mecca.view.offsets.cljs$core$IFn$_invoke$arity$1((7))))].join('')))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["Load address: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mecca.view.word((8)))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["Init address: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mecca.view.word((10)))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["Play address: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mecca.view.word((12)))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["Song name: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mecca.view.hex__GT_ascii(mecca.view.offsets.cljs$core$IFn$_invoke$arity$2((14),(46))))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["Artist: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mecca.view.hex__GT_ascii(mecca.view.offsets.cljs$core$IFn$_invoke$arity$2((46),(78))))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["Copyright: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mecca.view.hex__GT_ascii(mecca.view.offsets.cljs$core$IFn$_invoke$arity$2((78),(110))))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["Play speed (NTSC): ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(parseInt(mecca.view.word((110))))," (in 1/1000000th sec ticks)"].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["Bankswitch init values: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mecca.view.offsets.cljs$core$IFn$_invoke$arity$2((112),(120)))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["Play speed (PAL): ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(parseInt(mecca.view.word((120))))," (in 1/1000000th sec ticks)"].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["PAL/NTSC: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(mecca.view.offsets.cljs$core$IFn$_invoke$arity$1((122))))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["Extra Sound Chip Support: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var byte$ = cljs.core.first(mecca.view.offsets.cljs$core$IFn$_invoke$arity$1((123)));
var G__12563 = byte$;
switch (G__12563) {
case "01":
return "This song uses VRC6 audio";

break;
case "02":
return "This song uses VRC7 audio";

break;
case "04":
return "This song uses FDS audio";

break;
case "08":
return "This song uses MMC5 audio";

break;
case "10":
return "This song uses Namco 163 audio";

break;
case "20":
return "This song uses Sunsoft 5B audio";

break;
default:
return byte$;

}
})())].join('')], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2,"Offsets:"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.offsets_table], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2,"Music data:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),cljs.core.take.cljs$core$IFn$_invoke$arity$2((1000),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((256),cljs.core.deref(file)))))], null)], null):null)], null);
});
mecca.view.file_import = (function mecca$view$file_import(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1,"Import NSF file"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h4,"Web parser for NES Sound Format"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input_SHARP_input,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"file",cljs.core.cst$kw$on_DASH_change,(function (event){
var dom = goog.object.get(event,"target");
var file = (function (){var G__12565 = dom;
var G__12566 = ["files",(0)];
return goog.object.getValueByKeys(G__12565,G__12566);
})();
var reader = (new FileReader());
reader.readAsArrayBuffer(file);

return reader.onload = ((function (dom,file,reader){
return (function (e){
var G__12567 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$file_DASH_upload,(function (){var G__12568 = (new Uint8Array(e.target.result));
return goog.crypt.byteArrayToHex(G__12568);
})().toUpperCase()], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__12567) : re_frame.core.dispatch.call(null,G__12567));
});})(dom,file,reader))
;
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (e){
var G__12569 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$file_DASH_upload,mecca.asterix.asterix_hex], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__12569) : re_frame.core.dispatch.call(null,G__12569));
})], null),"Load example file"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p], null)], null)], null);
});
mecca.view.mecca = (function mecca$view$mecca(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.file_import], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.file_info], null)], null);
});
