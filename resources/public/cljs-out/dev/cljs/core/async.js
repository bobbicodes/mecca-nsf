// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__17764 = arguments.length;
switch (G__17764) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17765 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17765 = (function (f,blockable,meta17766){
this.f = f;
this.blockable = blockable;
this.meta17766 = meta17766;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17765.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17767,meta17766__$1){
var self__ = this;
var _17767__$1 = this;
return (new cljs.core.async.t_cljs$core$async17765(self__.f,self__.blockable,meta17766__$1));
});

cljs.core.async.t_cljs$core$async17765.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17767){
var self__ = this;
var _17767__$1 = this;
return self__.meta17766;
});

cljs.core.async.t_cljs$core$async17765.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17765.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async17765.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async17765.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async17765.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$blockable,cljs.core.cst$sym$meta17766], null);
});

cljs.core.async.t_cljs$core$async17765.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17765.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17765";

cljs.core.async.t_cljs$core$async17765.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async17765");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17765.
 */
cljs.core.async.__GT_t_cljs$core$async17765 = (function cljs$core$async$__GT_t_cljs$core$async17765(f__$1,blockable__$1,meta17766){
return (new cljs.core.async.t_cljs$core$async17765(f__$1,blockable__$1,meta17766));
});

}

return (new cljs.core.async.t_cljs$core$async17765(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__17771 = arguments.length;
switch (G__17771) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__17774 = arguments.length;
switch (G__17774) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__17777 = arguments.length;
switch (G__17777) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_17779 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_17779) : fn1.call(null,val_17779));
} else {
cljs.core.async.impl.dispatch.run(((function (val_17779,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_17779) : fn1.call(null,val_17779));
});})(val_17779,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__17781 = arguments.length;
switch (G__17781) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5455__auto__)){
var ret = temp__5455__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5455__auto__)){
var retb = temp__5455__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__5455__auto__){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
});})(ret,retb,temp__5455__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4408__auto___17783 = n;
var x_17784 = (0);
while(true){
if((x_17784 < n__4408__auto___17783)){
(a[x_17784] = x_17784);

var G__17785 = (x_17784 + (1));
x_17784 = G__17785;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17786 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17786 = (function (flag,meta17787){
this.flag = flag;
this.meta17787 = meta17787;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17786.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_17788,meta17787__$1){
var self__ = this;
var _17788__$1 = this;
return (new cljs.core.async.t_cljs$core$async17786(self__.flag,meta17787__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async17786.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_17788){
var self__ = this;
var _17788__$1 = this;
return self__.meta17787;
});})(flag))
;

cljs.core.async.t_cljs$core$async17786.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17786.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async17786.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async17786.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async17786.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$meta17787], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async17786.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17786.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17786";

cljs.core.async.t_cljs$core$async17786.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async17786");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17786.
 */
cljs.core.async.__GT_t_cljs$core$async17786 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async17786(flag__$1,meta17787){
return (new cljs.core.async.t_cljs$core$async17786(flag__$1,meta17787));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async17786(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17789 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17789 = (function (flag,cb,meta17790){
this.flag = flag;
this.cb = cb;
this.meta17790 = meta17790;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17789.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17791,meta17790__$1){
var self__ = this;
var _17791__$1 = this;
return (new cljs.core.async.t_cljs$core$async17789(self__.flag,self__.cb,meta17790__$1));
});

cljs.core.async.t_cljs$core$async17789.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17791){
var self__ = this;
var _17791__$1 = this;
return self__.meta17790;
});

cljs.core.async.t_cljs$core$async17789.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17789.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async17789.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async17789.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async17789.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$cb,cljs.core.cst$sym$meta17790], null);
});

cljs.core.async.t_cljs$core$async17789.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17789.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17789";

cljs.core.async.t_cljs$core$async17789.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async17789");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17789.
 */
cljs.core.async.__GT_t_cljs$core$async17789 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async17789(flag__$1,cb__$1,meta17790){
return (new cljs.core.async.t_cljs$core$async17789(flag__$1,cb__$1,meta17790));
});

}

return (new cljs.core.async.t_cljs$core$async17789(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = cljs.core.cst$kw$priority.cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__17792_SHARP_){
var G__17794 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17792_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__17794) : fret.call(null,G__17794));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__17793_SHARP_){
var G__17795 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17793_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__17795) : fret.call(null,G__17795));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__3949__auto__ = wport;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return port;
}
})()], null));
} else {
var G__17796 = (i + (1));
i = G__17796;
continue;
}
} else {
return null;
}
break;
}
})();
var or__3949__auto__ = ret;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,cljs.core.cst$kw$default)){
var temp__5457__auto__ = (function (){var and__3938__auto__ = cljs.core.async.impl.protocols.active_QMARK_(flag);
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.async.impl.protocols.commit(flag);
} else {
return and__3938__auto__;
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var got = temp__5457__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$default.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.cst$kw$default], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___17802 = arguments.length;
var i__4532__auto___17803 = (0);
while(true){
if((i__4532__auto___17803 < len__4531__auto___17802)){
args__4534__auto__.push((arguments[i__4532__auto___17803]));

var G__17804 = (i__4532__auto___17803 + (1));
i__4532__auto___17803 = G__17804;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__17799){
var map__17800 = p__17799;
var map__17800__$1 = ((((!((map__17800 == null)))?(((((map__17800.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17800.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17800):map__17800);
var opts = map__17800__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq17797){
var G__17798 = cljs.core.first(seq17797);
var seq17797__$1 = cljs.core.next(seq17797);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17798,seq17797__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__17806 = arguments.length;
switch (G__17806) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__15837__auto___17852 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15837__auto___17852){
return (function (){
var f__15838__auto__ = (function (){var switch__15654__auto__ = ((function (c__15837__auto___17852){
return (function (state_17830){
var state_val_17831 = (state_17830[(1)]);
if((state_val_17831 === (7))){
var inst_17826 = (state_17830[(2)]);
var state_17830__$1 = state_17830;
var statearr_17832_17853 = state_17830__$1;
(statearr_17832_17853[(2)] = inst_17826);

(statearr_17832_17853[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17831 === (1))){
var state_17830__$1 = state_17830;
var statearr_17833_17854 = state_17830__$1;
(statearr_17833_17854[(2)] = null);

(statearr_17833_17854[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17831 === (4))){
var inst_17809 = (state_17830[(7)]);
var inst_17809__$1 = (state_17830[(2)]);
var inst_17810 = (inst_17809__$1 == null);
var state_17830__$1 = (function (){var statearr_17834 = state_17830;
(statearr_17834[(7)] = inst_17809__$1);

return statearr_17834;
})();
if(cljs.core.truth_(inst_17810)){
var statearr_17835_17855 = state_17830__$1;
(statearr_17835_17855[(1)] = (5));

} else {
var statearr_17836_17856 = state_17830__$1;
(statearr_17836_17856[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17831 === (13))){
var state_17830__$1 = state_17830;
var statearr_17837_17857 = state_17830__$1;
(statearr_17837_17857[(2)] = null);

(statearr_17837_17857[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17831 === (6))){
var inst_17809 = (state_17830[(7)]);
var state_17830__$1 = state_17830;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17830__$1,(11),to,inst_17809);
} else {
if((state_val_17831 === (3))){
var inst_17828 = (state_17830[(2)]);
var state_17830__$1 = state_17830;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17830__$1,inst_17828);
} else {
if((state_val_17831 === (12))){
var state_17830__$1 = state_17830;
var statearr_17838_17858 = state_17830__$1;
(statearr_17838_17858[(2)] = null);

(statearr_17838_17858[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17831 === (2))){
var state_17830__$1 = state_17830;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17830__$1,(4),from);
} else {
if((state_val_17831 === (11))){
var inst_17819 = (state_17830[(2)]);
var state_17830__$1 = state_17830;
if(cljs.core.truth_(inst_17819)){
var statearr_17839_17859 = state_17830__$1;
(statearr_17839_17859[(1)] = (12));

} else {
var statearr_17840_17860 = state_17830__$1;
(statearr_17840_17860[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17831 === (9))){
var state_17830__$1 = state_17830;
var statearr_17841_17861 = state_17830__$1;
(statearr_17841_17861[(2)] = null);

(statearr_17841_17861[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17831 === (5))){
var state_17830__$1 = state_17830;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17842_17862 = state_17830__$1;
(statearr_17842_17862[(1)] = (8));

} else {
var statearr_17843_17863 = state_17830__$1;
(statearr_17843_17863[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17831 === (14))){
var inst_17824 = (state_17830[(2)]);
var state_17830__$1 = state_17830;
var statearr_17844_17864 = state_17830__$1;
(statearr_17844_17864[(2)] = inst_17824);

(statearr_17844_17864[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17831 === (10))){
var inst_17816 = (state_17830[(2)]);
var state_17830__$1 = state_17830;
var statearr_17845_17865 = state_17830__$1;
(statearr_17845_17865[(2)] = inst_17816);

(statearr_17845_17865[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17831 === (8))){
var inst_17813 = cljs.core.async.close_BANG_(to);
var state_17830__$1 = state_17830;
var statearr_17846_17866 = state_17830__$1;
(statearr_17846_17866[(2)] = inst_17813);

(statearr_17846_17866[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__15837__auto___17852))
;
return ((function (switch__15654__auto__,c__15837__auto___17852){
return (function() {
var cljs$core$async$state_machine__15655__auto__ = null;
var cljs$core$async$state_machine__15655__auto____0 = (function (){
var statearr_17847 = [null,null,null,null,null,null,null,null];
(statearr_17847[(0)] = cljs$core$async$state_machine__15655__auto__);

(statearr_17847[(1)] = (1));

return statearr_17847;
});
var cljs$core$async$state_machine__15655__auto____1 = (function (state_17830){
while(true){
var ret_value__15656__auto__ = (function (){try{while(true){
var result__15657__auto__ = switch__15654__auto__(state_17830);
if(cljs.core.keyword_identical_QMARK_(result__15657__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15657__auto__;
}
break;
}
}catch (e17848){if((e17848 instanceof Object)){
var ex__15658__auto__ = e17848;
var statearr_17849_17867 = state_17830;
(statearr_17849_17867[(5)] = ex__15658__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17830);

return cljs.core.cst$kw$recur;
} else {
throw e17848;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15656__auto__,cljs.core.cst$kw$recur)){
var G__17868 = state_17830;
state_17830 = G__17868;
continue;
} else {
return ret_value__15656__auto__;
}
break;
}
});
cljs$core$async$state_machine__15655__auto__ = function(state_17830){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15655__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15655__auto____1.call(this,state_17830);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15655__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15655__auto____0;
cljs$core$async$state_machine__15655__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15655__auto____1;
return cljs$core$async$state_machine__15655__auto__;
})()
;})(switch__15654__auto__,c__15837__auto___17852))
})();
var state__15839__auto__ = (function (){var statearr_17850 = (f__15838__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15838__auto__.cljs$core$IFn$_invoke$arity$0() : f__15838__auto__.call(null));
(statearr_17850[(6)] = c__15837__auto___17852);

return statearr_17850;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15839__auto__);
});})(c__15837__auto___17852))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__17869){
var vec__17870 = p__17869;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17870,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17870,(1),null);
var job = vec__17870;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__15837__auto___18041 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15837__auto___18041,res,vec__17870,v,p,job,jobs,results){
return (function (){
var f__15838__auto__ = (function (){var switch__15654__auto__ = ((function (c__15837__auto___18041,res,vec__17870,v,p,job,jobs,results){
return (function (state_17877){
var state_val_17878 = (state_17877[(1)]);
if((state_val_17878 === (1))){
var state_17877__$1 = state_17877;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17877__$1,(2),res,v);
} else {
if((state_val_17878 === (2))){
var inst_17874 = (state_17877[(2)]);
var inst_17875 = cljs.core.async.close_BANG_(res);
var state_17877__$1 = (function (){var statearr_17879 = state_17877;
(statearr_17879[(7)] = inst_17874);

return statearr_17879;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17877__$1,inst_17875);
} else {
return null;
}
}
});})(c__15837__auto___18041,res,vec__17870,v,p,job,jobs,results))
;
return ((function (switch__15654__auto__,c__15837__auto___18041,res,vec__17870,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15655__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15655__auto____0 = (function (){
var statearr_17880 = [null,null,null,null,null,null,null,null];
(statearr_17880[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15655__auto__);

(statearr_17880[(1)] = (1));

return statearr_17880;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15655__auto____1 = (function (state_17877){
while(true){
var ret_value__15656__auto__ = (function (){try{while(true){
var result__15657__auto__ = switch__15654__auto__(state_17877);
if(cljs.core.keyword_identical_QMARK_(result__15657__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15657__auto__;
}
break;
}
}catch (e17881){if((e17881 instanceof Object)){
var ex__15658__auto__ = e17881;
var statearr_17882_18042 = state_17877;
(statearr_17882_18042[(5)] = ex__15658__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17877);

return cljs.core.cst$kw$recur;
} else {
throw e17881;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15656__auto__,cljs.core.cst$kw$recur)){
var G__18043 = state_17877;
state_17877 = G__18043;
continue;
} else {
return ret_value__15656__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15655__auto__ = function(state_17877){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15655__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15655__auto____1.call(this,state_17877);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15655__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15655__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15655__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15655__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15655__auto__;
})()
;})(switch__15654__auto__,c__15837__auto___18041,res,vec__17870,v,p,job,jobs,results))
})();
var state__15839__auto__ = (function (){var statearr_17883 = (f__15838__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15838__auto__.cljs$core$IFn$_invoke$arity$0() : f__15838__auto__.call(null));
(statearr_17883[(6)] = c__15837__auto___18041);

return statearr_17883;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15839__auto__);
});})(c__15837__auto___18041,res,vec__17870,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__17884){
var vec__17885 = p__17884;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17885,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17885,(1),null);
var job = vec__17885;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__4408__auto___18044 = n;
var __18045 = (0);
while(true){
if((__18045 < n__4408__auto___18044)){
var G__17888_18046 = type;
var G__17888_18047__$1 = (((G__17888_18046 instanceof cljs.core.Keyword))?G__17888_18046.fqn:null);
switch (G__17888_18047__$1) {
case "compute":
var c__15837__auto___18049 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__18045,c__15837__auto___18049,G__17888_18046,G__17888_18047__$1,n__4408__auto___18044,jobs,results,process,async){
return (function (){
var f__15838__auto__ = (function (){var switch__15654__auto__ = ((function (__18045,c__15837__auto___18049,G__17888_18046,G__17888_18047__$1,n__4408__auto___18044,jobs,results,process,async){
return (function (state_17901){
var state_val_17902 = (state_17901[(1)]);
if((state_val_17902 === (1))){
var state_17901__$1 = state_17901;
var statearr_17903_18050 = state_17901__$1;
(statearr_17903_18050[(2)] = null);

(statearr_17903_18050[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17902 === (2))){
var state_17901__$1 = state_17901;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17901__$1,(4),jobs);
} else {
if((state_val_17902 === (3))){
var inst_17899 = (state_17901[(2)]);
var state_17901__$1 = state_17901;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17901__$1,inst_17899);
} else {
if((state_val_17902 === (4))){
var inst_17891 = (state_17901[(2)]);
var inst_17892 = process(inst_17891);
var state_17901__$1 = state_17901;
if(cljs.core.truth_(inst_17892)){
var statearr_17904_18051 = state_17901__$1;
(statearr_17904_18051[(1)] = (5));

} else {
var statearr_17905_18052 = state_17901__$1;
(statearr_17905_18052[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17902 === (5))){
var state_17901__$1 = state_17901;
var statearr_17906_18053 = state_17901__$1;
(statearr_17906_18053[(2)] = null);

(statearr_17906_18053[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17902 === (6))){
var state_17901__$1 = state_17901;
var statearr_17907_18054 = state_17901__$1;
(statearr_17907_18054[(2)] = null);

(statearr_17907_18054[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17902 === (7))){
var inst_17897 = (state_17901[(2)]);
var state_17901__$1 = state_17901;
var statearr_17908_18055 = state_17901__$1;
(statearr_17908_18055[(2)] = inst_17897);

(statearr_17908_18055[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(__18045,c__15837__auto___18049,G__17888_18046,G__17888_18047__$1,n__4408__auto___18044,jobs,results,process,async))
;
return ((function (__18045,switch__15654__auto__,c__15837__auto___18049,G__17888_18046,G__17888_18047__$1,n__4408__auto___18044,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15655__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15655__auto____0 = (function (){
var statearr_17909 = [null,null,null,null,null,null,null];
(statearr_17909[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15655__auto__);

(statearr_17909[(1)] = (1));

return statearr_17909;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15655__auto____1 = (function (state_17901){
while(true){
var ret_value__15656__auto__ = (function (){try{while(true){
var result__15657__auto__ = switch__15654__auto__(state_17901);
if(cljs.core.keyword_identical_QMARK_(result__15657__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15657__auto__;
}
break;
}
}catch (e17910){if((e17910 instanceof Object)){
var ex__15658__auto__ = e17910;
var statearr_17911_18056 = state_17901;
(statearr_17911_18056[(5)] = ex__15658__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17901);

return cljs.core.cst$kw$recur;
} else {
throw e17910;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15656__auto__,cljs.core.cst$kw$recur)){
var G__18057 = state_17901;
state_17901 = G__18057;
continue;
} else {
return ret_value__15656__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15655__auto__ = function(state_17901){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15655__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15655__auto____1.call(this,state_17901);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15655__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15655__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15655__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15655__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15655__auto__;
})()
;})(__18045,switch__15654__auto__,c__15837__auto___18049,G__17888_18046,G__17888_18047__$1,n__4408__auto___18044,jobs,results,process,async))
})();
var state__15839__auto__ = (function (){var statearr_17912 = (f__15838__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15838__auto__.cljs$core$IFn$_invoke$arity$0() : f__15838__auto__.call(null));
(statearr_17912[(6)] = c__15837__auto___18049);

return statearr_17912;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15839__auto__);
});})(__18045,c__15837__auto___18049,G__17888_18046,G__17888_18047__$1,n__4408__auto___18044,jobs,results,process,async))
);


break;
case "async":
var c__15837__auto___18058 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__18045,c__15837__auto___18058,G__17888_18046,G__17888_18047__$1,n__4408__auto___18044,jobs,results,process,async){
return (function (){
var f__15838__auto__ = (function (){var switch__15654__auto__ = ((function (__18045,c__15837__auto___18058,G__17888_18046,G__17888_18047__$1,n__4408__auto___18044,jobs,results,process,async){
return (function (state_17925){
var state_val_17926 = (state_17925[(1)]);
if((state_val_17926 === (1))){
var state_17925__$1 = state_17925;
var statearr_17927_18059 = state_17925__$1;
(statearr_17927_18059[(2)] = null);

(statearr_17927_18059[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17926 === (2))){
var state_17925__$1 = state_17925;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17925__$1,(4),jobs);
} else {
if((state_val_17926 === (3))){
var inst_17923 = (state_17925[(2)]);
var state_17925__$1 = state_17925;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17925__$1,inst_17923);
} else {
if((state_val_17926 === (4))){
var inst_17915 = (state_17925[(2)]);
var inst_17916 = async(inst_17915);
var state_17925__$1 = state_17925;
if(cljs.core.truth_(inst_17916)){
var statearr_17928_18060 = state_17925__$1;
(statearr_17928_18060[(1)] = (5));

} else {
var statearr_17929_18061 = state_17925__$1;
(statearr_17929_18061[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17926 === (5))){
var state_17925__$1 = state_17925;
var statearr_17930_18062 = state_17925__$1;
(statearr_17930_18062[(2)] = null);

(statearr_17930_18062[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17926 === (6))){
var state_17925__$1 = state_17925;
var statearr_17931_18063 = state_17925__$1;
(statearr_17931_18063[(2)] = null);

(statearr_17931_18063[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17926 === (7))){
var inst_17921 = (state_17925[(2)]);
var state_17925__$1 = state_17925;
var statearr_17932_18064 = state_17925__$1;
(statearr_17932_18064[(2)] = inst_17921);

(statearr_17932_18064[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(__18045,c__15837__auto___18058,G__17888_18046,G__17888_18047__$1,n__4408__auto___18044,jobs,results,process,async))
;
return ((function (__18045,switch__15654__auto__,c__15837__auto___18058,G__17888_18046,G__17888_18047__$1,n__4408__auto___18044,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15655__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15655__auto____0 = (function (){
var statearr_17933 = [null,null,null,null,null,null,null];
(statearr_17933[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15655__auto__);

(statearr_17933[(1)] = (1));

return statearr_17933;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15655__auto____1 = (function (state_17925){
while(true){
var ret_value__15656__auto__ = (function (){try{while(true){
var result__15657__auto__ = switch__15654__auto__(state_17925);
if(cljs.core.keyword_identical_QMARK_(result__15657__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15657__auto__;
}
break;
}
}catch (e17934){if((e17934 instanceof Object)){
var ex__15658__auto__ = e17934;
var statearr_17935_18065 = state_17925;
(statearr_17935_18065[(5)] = ex__15658__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17925);

return cljs.core.cst$kw$recur;
} else {
throw e17934;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15656__auto__,cljs.core.cst$kw$recur)){
var G__18066 = state_17925;
state_17925 = G__18066;
continue;
} else {
return ret_value__15656__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15655__auto__ = function(state_17925){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15655__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15655__auto____1.call(this,state_17925);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15655__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15655__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15655__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15655__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15655__auto__;
})()
;})(__18045,switch__15654__auto__,c__15837__auto___18058,G__17888_18046,G__17888_18047__$1,n__4408__auto___18044,jobs,results,process,async))
})();
var state__15839__auto__ = (function (){var statearr_17936 = (f__15838__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15838__auto__.cljs$core$IFn$_invoke$arity$0() : f__15838__auto__.call(null));
(statearr_17936[(6)] = c__15837__auto___18058);

return statearr_17936;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15839__auto__);
});})(__18045,c__15837__auto___18058,G__17888_18046,G__17888_18047__$1,n__4408__auto___18044,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17888_18047__$1)].join('')));

}

var G__18067 = (__18045 + (1));
__18045 = G__18067;
continue;
} else {
}
break;
}

var c__15837__auto___18068 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15837__auto___18068,jobs,results,process,async){
return (function (){
var f__15838__auto__ = (function (){var switch__15654__auto__ = ((function (c__15837__auto___18068,jobs,results,process,async){
return (function (state_17958){
var state_val_17959 = (state_17958[(1)]);
if((state_val_17959 === (1))){
var state_17958__$1 = state_17958;
var statearr_17960_18069 = state_17958__$1;
(statearr_17960_18069[(2)] = null);

(statearr_17960_18069[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17959 === (2))){
var state_17958__$1 = state_17958;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17958__$1,(4),from);
} else {
if((state_val_17959 === (3))){
var inst_17956 = (state_17958[(2)]);
var state_17958__$1 = state_17958;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17958__$1,inst_17956);
} else {
if((state_val_17959 === (4))){
var inst_17939 = (state_17958[(7)]);
var inst_17939__$1 = (state_17958[(2)]);
var inst_17940 = (inst_17939__$1 == null);
var state_17958__$1 = (function (){var statearr_17961 = state_17958;
(statearr_17961[(7)] = inst_17939__$1);

return statearr_17961;
})();
if(cljs.core.truth_(inst_17940)){
var statearr_17962_18070 = state_17958__$1;
(statearr_17962_18070[(1)] = (5));

} else {
var statearr_17963_18071 = state_17958__$1;
(statearr_17963_18071[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17959 === (5))){
var inst_17942 = cljs.core.async.close_BANG_(jobs);
var state_17958__$1 = state_17958;
var statearr_17964_18072 = state_17958__$1;
(statearr_17964_18072[(2)] = inst_17942);

(statearr_17964_18072[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17959 === (6))){
var inst_17944 = (state_17958[(8)]);
var inst_17939 = (state_17958[(7)]);
var inst_17944__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_17945 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_17946 = [inst_17939,inst_17944__$1];
var inst_17947 = (new cljs.core.PersistentVector(null,2,(5),inst_17945,inst_17946,null));
var state_17958__$1 = (function (){var statearr_17965 = state_17958;
(statearr_17965[(8)] = inst_17944__$1);

return statearr_17965;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17958__$1,(8),jobs,inst_17947);
} else {
if((state_val_17959 === (7))){
var inst_17954 = (state_17958[(2)]);
var state_17958__$1 = state_17958;
var statearr_17966_18073 = state_17958__$1;
(statearr_17966_18073[(2)] = inst_17954);

(statearr_17966_18073[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17959 === (8))){
var inst_17944 = (state_17958[(8)]);
var inst_17949 = (state_17958[(2)]);
var state_17958__$1 = (function (){var statearr_17967 = state_17958;
(statearr_17967[(9)] = inst_17949);

return statearr_17967;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17958__$1,(9),results,inst_17944);
} else {
if((state_val_17959 === (9))){
var inst_17951 = (state_17958[(2)]);
var state_17958__$1 = (function (){var statearr_17968 = state_17958;
(statearr_17968[(10)] = inst_17951);

return statearr_17968;
})();
var statearr_17969_18074 = state_17958__$1;
(statearr_17969_18074[(2)] = null);

(statearr_17969_18074[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__15837__auto___18068,jobs,results,process,async))
;
return ((function (switch__15654__auto__,c__15837__auto___18068,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15655__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15655__auto____0 = (function (){
var statearr_17970 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17970[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15655__auto__);

(statearr_17970[(1)] = (1));

return statearr_17970;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15655__auto____1 = (function (state_17958){
while(true){
var ret_value__15656__auto__ = (function (){try{while(true){
var result__15657__auto__ = switch__15654__auto__(state_17958);
if(cljs.core.keyword_identical_QMARK_(result__15657__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15657__auto__;
}
break;
}
}catch (e17971){if((e17971 instanceof Object)){
var ex__15658__auto__ = e17971;
var statearr_17972_18075 = state_17958;
(statearr_17972_18075[(5)] = ex__15658__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17958);

return cljs.core.cst$kw$recur;
} else {
throw e17971;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15656__auto__,cljs.core.cst$kw$recur)){
var G__18076 = state_17958;
state_17958 = G__18076;
continue;
} else {
return ret_value__15656__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15655__auto__ = function(state_17958){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15655__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15655__auto____1.call(this,state_17958);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15655__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15655__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15655__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15655__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15655__auto__;
})()
;})(switch__15654__auto__,c__15837__auto___18068,jobs,results,process,async))
})();
var state__15839__auto__ = (function (){var statearr_17973 = (f__15838__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15838__auto__.cljs$core$IFn$_invoke$arity$0() : f__15838__auto__.call(null));
(statearr_17973[(6)] = c__15837__auto___18068);

return statearr_17973;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15839__auto__);
});})(c__15837__auto___18068,jobs,results,process,async))
);


var c__15837__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15837__auto__,jobs,results,process,async){
return (function (){
var f__15838__auto__ = (function (){var switch__15654__auto__ = ((function (c__15837__auto__,jobs,results,process,async){
return (function (state_18011){
var state_val_18012 = (state_18011[(1)]);
if((state_val_18012 === (7))){
var inst_18007 = (state_18011[(2)]);
var state_18011__$1 = state_18011;
var statearr_18013_18077 = state_18011__$1;
(statearr_18013_18077[(2)] = inst_18007);

(statearr_18013_18077[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18012 === (20))){
var state_18011__$1 = state_18011;
var statearr_18014_18078 = state_18011__$1;
(statearr_18014_18078[(2)] = null);

(statearr_18014_18078[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18012 === (1))){
var state_18011__$1 = state_18011;
var statearr_18015_18079 = state_18011__$1;
(statearr_18015_18079[(2)] = null);

(statearr_18015_18079[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18012 === (4))){
var inst_17976 = (state_18011[(7)]);
var inst_17976__$1 = (state_18011[(2)]);
var inst_17977 = (inst_17976__$1 == null);
var state_18011__$1 = (function (){var statearr_18016 = state_18011;
(statearr_18016[(7)] = inst_17976__$1);

return statearr_18016;
})();
if(cljs.core.truth_(inst_17977)){
var statearr_18017_18080 = state_18011__$1;
(statearr_18017_18080[(1)] = (5));

} else {
var statearr_18018_18081 = state_18011__$1;
(statearr_18018_18081[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18012 === (15))){
var inst_17989 = (state_18011[(8)]);
var state_18011__$1 = state_18011;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18011__$1,(18),to,inst_17989);
} else {
if((state_val_18012 === (21))){
var inst_18002 = (state_18011[(2)]);
var state_18011__$1 = state_18011;
var statearr_18019_18082 = state_18011__$1;
(statearr_18019_18082[(2)] = inst_18002);

(statearr_18019_18082[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18012 === (13))){
var inst_18004 = (state_18011[(2)]);
var state_18011__$1 = (function (){var statearr_18020 = state_18011;
(statearr_18020[(9)] = inst_18004);

return statearr_18020;
})();
var statearr_18021_18083 = state_18011__$1;
(statearr_18021_18083[(2)] = null);

(statearr_18021_18083[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18012 === (6))){
var inst_17976 = (state_18011[(7)]);
var state_18011__$1 = state_18011;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18011__$1,(11),inst_17976);
} else {
if((state_val_18012 === (17))){
var inst_17997 = (state_18011[(2)]);
var state_18011__$1 = state_18011;
if(cljs.core.truth_(inst_17997)){
var statearr_18022_18084 = state_18011__$1;
(statearr_18022_18084[(1)] = (19));

} else {
var statearr_18023_18085 = state_18011__$1;
(statearr_18023_18085[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18012 === (3))){
var inst_18009 = (state_18011[(2)]);
var state_18011__$1 = state_18011;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18011__$1,inst_18009);
} else {
if((state_val_18012 === (12))){
var inst_17986 = (state_18011[(10)]);
var state_18011__$1 = state_18011;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18011__$1,(14),inst_17986);
} else {
if((state_val_18012 === (2))){
var state_18011__$1 = state_18011;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18011__$1,(4),results);
} else {
if((state_val_18012 === (19))){
var state_18011__$1 = state_18011;
var statearr_18024_18086 = state_18011__$1;
(statearr_18024_18086[(2)] = null);

(statearr_18024_18086[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18012 === (11))){
var inst_17986 = (state_18011[(2)]);
var state_18011__$1 = (function (){var statearr_18025 = state_18011;
(statearr_18025[(10)] = inst_17986);

return statearr_18025;
})();
var statearr_18026_18087 = state_18011__$1;
(statearr_18026_18087[(2)] = null);

(statearr_18026_18087[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18012 === (9))){
var state_18011__$1 = state_18011;
var statearr_18027_18088 = state_18011__$1;
(statearr_18027_18088[(2)] = null);

(statearr_18027_18088[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18012 === (5))){
var state_18011__$1 = state_18011;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18028_18089 = state_18011__$1;
(statearr_18028_18089[(1)] = (8));

} else {
var statearr_18029_18090 = state_18011__$1;
(statearr_18029_18090[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18012 === (14))){
var inst_17991 = (state_18011[(11)]);
var inst_17989 = (state_18011[(8)]);
var inst_17989__$1 = (state_18011[(2)]);
var inst_17990 = (inst_17989__$1 == null);
var inst_17991__$1 = cljs.core.not(inst_17990);
var state_18011__$1 = (function (){var statearr_18030 = state_18011;
(statearr_18030[(11)] = inst_17991__$1);

(statearr_18030[(8)] = inst_17989__$1);

return statearr_18030;
})();
if(inst_17991__$1){
var statearr_18031_18091 = state_18011__$1;
(statearr_18031_18091[(1)] = (15));

} else {
var statearr_18032_18092 = state_18011__$1;
(statearr_18032_18092[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18012 === (16))){
var inst_17991 = (state_18011[(11)]);
var state_18011__$1 = state_18011;
var statearr_18033_18093 = state_18011__$1;
(statearr_18033_18093[(2)] = inst_17991);

(statearr_18033_18093[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18012 === (10))){
var inst_17983 = (state_18011[(2)]);
var state_18011__$1 = state_18011;
var statearr_18034_18094 = state_18011__$1;
(statearr_18034_18094[(2)] = inst_17983);

(statearr_18034_18094[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18012 === (18))){
var inst_17994 = (state_18011[(2)]);
var state_18011__$1 = state_18011;
var statearr_18035_18095 = state_18011__$1;
(statearr_18035_18095[(2)] = inst_17994);

(statearr_18035_18095[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18012 === (8))){
var inst_17980 = cljs.core.async.close_BANG_(to);
var state_18011__$1 = state_18011;
var statearr_18036_18096 = state_18011__$1;
(statearr_18036_18096[(2)] = inst_17980);

(statearr_18036_18096[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__15837__auto__,jobs,results,process,async))
;
return ((function (switch__15654__auto__,c__15837__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15655__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15655__auto____0 = (function (){
var statearr_18037 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18037[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15655__auto__);

(statearr_18037[(1)] = (1));

return statearr_18037;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15655__auto____1 = (function (state_18011){
while(true){
var ret_value__15656__auto__ = (function (){try{while(true){
var result__15657__auto__ = switch__15654__auto__(state_18011);
if(cljs.core.keyword_identical_QMARK_(result__15657__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15657__auto__;
}
break;
}
}catch (e18038){if((e18038 instanceof Object)){
var ex__15658__auto__ = e18038;
var statearr_18039_18097 = state_18011;
(statearr_18039_18097[(5)] = ex__15658__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18011);

return cljs.core.cst$kw$recur;
} else {
throw e18038;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15656__auto__,cljs.core.cst$kw$recur)){
var G__18098 = state_18011;
state_18011 = G__18098;
continue;
} else {
return ret_value__15656__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15655__auto__ = function(state_18011){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15655__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15655__auto____1.call(this,state_18011);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15655__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15655__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15655__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15655__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15655__auto__;
})()
;})(switch__15654__auto__,c__15837__auto__,jobs,results,process,async))
})();
var state__15839__auto__ = (function (){var statearr_18040 = (f__15838__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15838__auto__.cljs$core$IFn$_invoke$arity$0() : f__15838__auto__.call(null));
(statearr_18040[(6)] = c__15837__auto__);

return statearr_18040;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15839__auto__);
});})(c__15837__auto__,jobs,results,process,async))
);

return c__15837__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__18100 = arguments.length;
switch (G__18100) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,cljs.core.cst$kw$async);
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__18103 = arguments.length;
switch (G__18103) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,cljs.core.cst$kw$compute);
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__18106 = arguments.length;
switch (G__18106) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__15837__auto___18155 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15837__auto___18155,tc,fc){
return (function (){
var f__15838__auto__ = (function (){var switch__15654__auto__ = ((function (c__15837__auto___18155,tc,fc){
return (function (state_18132){
var state_val_18133 = (state_18132[(1)]);
if((state_val_18133 === (7))){
var inst_18128 = (state_18132[(2)]);
var state_18132__$1 = state_18132;
var statearr_18134_18156 = state_18132__$1;
(statearr_18134_18156[(2)] = inst_18128);

(statearr_18134_18156[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18133 === (1))){
var state_18132__$1 = state_18132;
var statearr_18135_18157 = state_18132__$1;
(statearr_18135_18157[(2)] = null);

(statearr_18135_18157[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18133 === (4))){
var inst_18109 = (state_18132[(7)]);
var inst_18109__$1 = (state_18132[(2)]);
var inst_18110 = (inst_18109__$1 == null);
var state_18132__$1 = (function (){var statearr_18136 = state_18132;
(statearr_18136[(7)] = inst_18109__$1);

return statearr_18136;
})();
if(cljs.core.truth_(inst_18110)){
var statearr_18137_18158 = state_18132__$1;
(statearr_18137_18158[(1)] = (5));

} else {
var statearr_18138_18159 = state_18132__$1;
(statearr_18138_18159[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18133 === (13))){
var state_18132__$1 = state_18132;
var statearr_18139_18160 = state_18132__$1;
(statearr_18139_18160[(2)] = null);

(statearr_18139_18160[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18133 === (6))){
var inst_18109 = (state_18132[(7)]);
var inst_18115 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_18109) : p.call(null,inst_18109));
var state_18132__$1 = state_18132;
if(cljs.core.truth_(inst_18115)){
var statearr_18140_18161 = state_18132__$1;
(statearr_18140_18161[(1)] = (9));

} else {
var statearr_18141_18162 = state_18132__$1;
(statearr_18141_18162[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18133 === (3))){
var inst_18130 = (state_18132[(2)]);
var state_18132__$1 = state_18132;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18132__$1,inst_18130);
} else {
if((state_val_18133 === (12))){
var state_18132__$1 = state_18132;
var statearr_18142_18163 = state_18132__$1;
(statearr_18142_18163[(2)] = null);

(statearr_18142_18163[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18133 === (2))){
var state_18132__$1 = state_18132;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18132__$1,(4),ch);
} else {
if((state_val_18133 === (11))){
var inst_18109 = (state_18132[(7)]);
var inst_18119 = (state_18132[(2)]);
var state_18132__$1 = state_18132;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18132__$1,(8),inst_18119,inst_18109);
} else {
if((state_val_18133 === (9))){
var state_18132__$1 = state_18132;
var statearr_18143_18164 = state_18132__$1;
(statearr_18143_18164[(2)] = tc);

(statearr_18143_18164[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18133 === (5))){
var inst_18112 = cljs.core.async.close_BANG_(tc);
var inst_18113 = cljs.core.async.close_BANG_(fc);
var state_18132__$1 = (function (){var statearr_18144 = state_18132;
(statearr_18144[(8)] = inst_18112);

return statearr_18144;
})();
var statearr_18145_18165 = state_18132__$1;
(statearr_18145_18165[(2)] = inst_18113);

(statearr_18145_18165[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18133 === (14))){
var inst_18126 = (state_18132[(2)]);
var state_18132__$1 = state_18132;
var statearr_18146_18166 = state_18132__$1;
(statearr_18146_18166[(2)] = inst_18126);

(statearr_18146_18166[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18133 === (10))){
var state_18132__$1 = state_18132;
var statearr_18147_18167 = state_18132__$1;
(statearr_18147_18167[(2)] = fc);

(statearr_18147_18167[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18133 === (8))){
var inst_18121 = (state_18132[(2)]);
var state_18132__$1 = state_18132;
if(cljs.core.truth_(inst_18121)){
var statearr_18148_18168 = state_18132__$1;
(statearr_18148_18168[(1)] = (12));

} else {
var statearr_18149_18169 = state_18132__$1;
(statearr_18149_18169[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__15837__auto___18155,tc,fc))
;
return ((function (switch__15654__auto__,c__15837__auto___18155,tc,fc){
return (function() {
var cljs$core$async$state_machine__15655__auto__ = null;
var cljs$core$async$state_machine__15655__auto____0 = (function (){
var statearr_18150 = [null,null,null,null,null,null,null,null,null];
(statearr_18150[(0)] = cljs$core$async$state_machine__15655__auto__);

(statearr_18150[(1)] = (1));

return statearr_18150;
});
var cljs$core$async$state_machine__15655__auto____1 = (function (state_18132){
while(true){
var ret_value__15656__auto__ = (function (){try{while(true){
var result__15657__auto__ = switch__15654__auto__(state_18132);
if(cljs.core.keyword_identical_QMARK_(result__15657__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15657__auto__;
}
break;
}
}catch (e18151){if((e18151 instanceof Object)){
var ex__15658__auto__ = e18151;
var statearr_18152_18170 = state_18132;
(statearr_18152_18170[(5)] = ex__15658__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18132);

return cljs.core.cst$kw$recur;
} else {
throw e18151;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15656__auto__,cljs.core.cst$kw$recur)){
var G__18171 = state_18132;
state_18132 = G__18171;
continue;
} else {
return ret_value__15656__auto__;
}
break;
}
});
cljs$core$async$state_machine__15655__auto__ = function(state_18132){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15655__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15655__auto____1.call(this,state_18132);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15655__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15655__auto____0;
cljs$core$async$state_machine__15655__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15655__auto____1;
return cljs$core$async$state_machine__15655__auto__;
})()
;})(switch__15654__auto__,c__15837__auto___18155,tc,fc))
})();
var state__15839__auto__ = (function (){var statearr_18153 = (f__15838__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15838__auto__.cljs$core$IFn$_invoke$arity$0() : f__15838__auto__.call(null));
(statearr_18153[(6)] = c__15837__auto___18155);

return statearr_18153;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15839__auto__);
});})(c__15837__auto___18155,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__15837__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15837__auto__){
return (function (){
var f__15838__auto__ = (function (){var switch__15654__auto__ = ((function (c__15837__auto__){
return (function (state_18192){
var state_val_18193 = (state_18192[(1)]);
if((state_val_18193 === (7))){
var inst_18188 = (state_18192[(2)]);
var state_18192__$1 = state_18192;
var statearr_18194_18212 = state_18192__$1;
(statearr_18194_18212[(2)] = inst_18188);

(statearr_18194_18212[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18193 === (1))){
var inst_18172 = init;
var state_18192__$1 = (function (){var statearr_18195 = state_18192;
(statearr_18195[(7)] = inst_18172);

return statearr_18195;
})();
var statearr_18196_18213 = state_18192__$1;
(statearr_18196_18213[(2)] = null);

(statearr_18196_18213[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18193 === (4))){
var inst_18175 = (state_18192[(8)]);
var inst_18175__$1 = (state_18192[(2)]);
var inst_18176 = (inst_18175__$1 == null);
var state_18192__$1 = (function (){var statearr_18197 = state_18192;
(statearr_18197[(8)] = inst_18175__$1);

return statearr_18197;
})();
if(cljs.core.truth_(inst_18176)){
var statearr_18198_18214 = state_18192__$1;
(statearr_18198_18214[(1)] = (5));

} else {
var statearr_18199_18215 = state_18192__$1;
(statearr_18199_18215[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18193 === (6))){
var inst_18175 = (state_18192[(8)]);
var inst_18179 = (state_18192[(9)]);
var inst_18172 = (state_18192[(7)]);
var inst_18179__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_18172,inst_18175) : f.call(null,inst_18172,inst_18175));
var inst_18180 = cljs.core.reduced_QMARK_(inst_18179__$1);
var state_18192__$1 = (function (){var statearr_18200 = state_18192;
(statearr_18200[(9)] = inst_18179__$1);

return statearr_18200;
})();
if(inst_18180){
var statearr_18201_18216 = state_18192__$1;
(statearr_18201_18216[(1)] = (8));

} else {
var statearr_18202_18217 = state_18192__$1;
(statearr_18202_18217[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18193 === (3))){
var inst_18190 = (state_18192[(2)]);
var state_18192__$1 = state_18192;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18192__$1,inst_18190);
} else {
if((state_val_18193 === (2))){
var state_18192__$1 = state_18192;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18192__$1,(4),ch);
} else {
if((state_val_18193 === (9))){
var inst_18179 = (state_18192[(9)]);
var inst_18172 = inst_18179;
var state_18192__$1 = (function (){var statearr_18203 = state_18192;
(statearr_18203[(7)] = inst_18172);

return statearr_18203;
})();
var statearr_18204_18218 = state_18192__$1;
(statearr_18204_18218[(2)] = null);

(statearr_18204_18218[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18193 === (5))){
var inst_18172 = (state_18192[(7)]);
var state_18192__$1 = state_18192;
var statearr_18205_18219 = state_18192__$1;
(statearr_18205_18219[(2)] = inst_18172);

(statearr_18205_18219[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18193 === (10))){
var inst_18186 = (state_18192[(2)]);
var state_18192__$1 = state_18192;
var statearr_18206_18220 = state_18192__$1;
(statearr_18206_18220[(2)] = inst_18186);

(statearr_18206_18220[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18193 === (8))){
var inst_18179 = (state_18192[(9)]);
var inst_18182 = cljs.core.deref(inst_18179);
var state_18192__$1 = state_18192;
var statearr_18207_18221 = state_18192__$1;
(statearr_18207_18221[(2)] = inst_18182);

(statearr_18207_18221[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__15837__auto__))
;
return ((function (switch__15654__auto__,c__15837__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__15655__auto__ = null;
var cljs$core$async$reduce_$_state_machine__15655__auto____0 = (function (){
var statearr_18208 = [null,null,null,null,null,null,null,null,null,null];
(statearr_18208[(0)] = cljs$core$async$reduce_$_state_machine__15655__auto__);

(statearr_18208[(1)] = (1));

return statearr_18208;
});
var cljs$core$async$reduce_$_state_machine__15655__auto____1 = (function (state_18192){
while(true){
var ret_value__15656__auto__ = (function (){try{while(true){
var result__15657__auto__ = switch__15654__auto__(state_18192);
if(cljs.core.keyword_identical_QMARK_(result__15657__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15657__auto__;
}
break;
}
}catch (e18209){if((e18209 instanceof Object)){
var ex__15658__auto__ = e18209;
var statearr_18210_18222 = state_18192;
(statearr_18210_18222[(5)] = ex__15658__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18192);

return cljs.core.cst$kw$recur;
} else {
throw e18209;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15656__auto__,cljs.core.cst$kw$recur)){
var G__18223 = state_18192;
state_18192 = G__18223;
continue;
} else {
return ret_value__15656__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__15655__auto__ = function(state_18192){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__15655__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__15655__auto____1.call(this,state_18192);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__15655__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__15655__auto____0;
cljs$core$async$reduce_$_state_machine__15655__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__15655__auto____1;
return cljs$core$async$reduce_$_state_machine__15655__auto__;
})()
;})(switch__15654__auto__,c__15837__auto__))
})();
var state__15839__auto__ = (function (){var statearr_18211 = (f__15838__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15838__auto__.cljs$core$IFn$_invoke$arity$0() : f__15838__auto__.call(null));
(statearr_18211[(6)] = c__15837__auto__);

return statearr_18211;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15839__auto__);
});})(c__15837__auto__))
);

return c__15837__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__15837__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15837__auto__,f__$1){
return (function (){
var f__15838__auto__ = (function (){var switch__15654__auto__ = ((function (c__15837__auto__,f__$1){
return (function (state_18229){
var state_val_18230 = (state_18229[(1)]);
if((state_val_18230 === (1))){
var inst_18224 = cljs.core.async.reduce(f__$1,init,ch);
var state_18229__$1 = state_18229;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18229__$1,(2),inst_18224);
} else {
if((state_val_18230 === (2))){
var inst_18226 = (state_18229[(2)]);
var inst_18227 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_18226) : f__$1.call(null,inst_18226));
var state_18229__$1 = state_18229;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18229__$1,inst_18227);
} else {
return null;
}
}
});})(c__15837__auto__,f__$1))
;
return ((function (switch__15654__auto__,c__15837__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__15655__auto__ = null;
var cljs$core$async$transduce_$_state_machine__15655__auto____0 = (function (){
var statearr_18231 = [null,null,null,null,null,null,null];
(statearr_18231[(0)] = cljs$core$async$transduce_$_state_machine__15655__auto__);

(statearr_18231[(1)] = (1));

return statearr_18231;
});
var cljs$core$async$transduce_$_state_machine__15655__auto____1 = (function (state_18229){
while(true){
var ret_value__15656__auto__ = (function (){try{while(true){
var result__15657__auto__ = switch__15654__auto__(state_18229);
if(cljs.core.keyword_identical_QMARK_(result__15657__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15657__auto__;
}
break;
}
}catch (e18232){if((e18232 instanceof Object)){
var ex__15658__auto__ = e18232;
var statearr_18233_18235 = state_18229;
(statearr_18233_18235[(5)] = ex__15658__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18229);

return cljs.core.cst$kw$recur;
} else {
throw e18232;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15656__auto__,cljs.core.cst$kw$recur)){
var G__18236 = state_18229;
state_18229 = G__18236;
continue;
} else {
return ret_value__15656__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__15655__auto__ = function(state_18229){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__15655__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__15655__auto____1.call(this,state_18229);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__15655__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__15655__auto____0;
cljs$core$async$transduce_$_state_machine__15655__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__15655__auto____1;
return cljs$core$async$transduce_$_state_machine__15655__auto__;
})()
;})(switch__15654__auto__,c__15837__auto__,f__$1))
})();
var state__15839__auto__ = (function (){var statearr_18234 = (f__15838__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15838__auto__.cljs$core$IFn$_invoke$arity$0() : f__15838__auto__.call(null));
(statearr_18234[(6)] = c__15837__auto__);

return statearr_18234;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15839__auto__);
});})(c__15837__auto__,f__$1))
);

return c__15837__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__18238 = arguments.length;
switch (G__18238) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__15837__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15837__auto__){
return (function (){
var f__15838__auto__ = (function (){var switch__15654__auto__ = ((function (c__15837__auto__){
return (function (state_18263){
var state_val_18264 = (state_18263[(1)]);
if((state_val_18264 === (7))){
var inst_18245 = (state_18263[(2)]);
var state_18263__$1 = state_18263;
var statearr_18265_18286 = state_18263__$1;
(statearr_18265_18286[(2)] = inst_18245);

(statearr_18265_18286[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18264 === (1))){
var inst_18239 = cljs.core.seq(coll);
var inst_18240 = inst_18239;
var state_18263__$1 = (function (){var statearr_18266 = state_18263;
(statearr_18266[(7)] = inst_18240);

return statearr_18266;
})();
var statearr_18267_18287 = state_18263__$1;
(statearr_18267_18287[(2)] = null);

(statearr_18267_18287[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18264 === (4))){
var inst_18240 = (state_18263[(7)]);
var inst_18243 = cljs.core.first(inst_18240);
var state_18263__$1 = state_18263;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18263__$1,(7),ch,inst_18243);
} else {
if((state_val_18264 === (13))){
var inst_18257 = (state_18263[(2)]);
var state_18263__$1 = state_18263;
var statearr_18268_18288 = state_18263__$1;
(statearr_18268_18288[(2)] = inst_18257);

(statearr_18268_18288[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18264 === (6))){
var inst_18248 = (state_18263[(2)]);
var state_18263__$1 = state_18263;
if(cljs.core.truth_(inst_18248)){
var statearr_18269_18289 = state_18263__$1;
(statearr_18269_18289[(1)] = (8));

} else {
var statearr_18270_18290 = state_18263__$1;
(statearr_18270_18290[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18264 === (3))){
var inst_18261 = (state_18263[(2)]);
var state_18263__$1 = state_18263;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18263__$1,inst_18261);
} else {
if((state_val_18264 === (12))){
var state_18263__$1 = state_18263;
var statearr_18271_18291 = state_18263__$1;
(statearr_18271_18291[(2)] = null);

(statearr_18271_18291[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18264 === (2))){
var inst_18240 = (state_18263[(7)]);
var state_18263__$1 = state_18263;
if(cljs.core.truth_(inst_18240)){
var statearr_18272_18292 = state_18263__$1;
(statearr_18272_18292[(1)] = (4));

} else {
var statearr_18273_18293 = state_18263__$1;
(statearr_18273_18293[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18264 === (11))){
var inst_18254 = cljs.core.async.close_BANG_(ch);
var state_18263__$1 = state_18263;
var statearr_18274_18294 = state_18263__$1;
(statearr_18274_18294[(2)] = inst_18254);

(statearr_18274_18294[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18264 === (9))){
var state_18263__$1 = state_18263;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18275_18295 = state_18263__$1;
(statearr_18275_18295[(1)] = (11));

} else {
var statearr_18276_18296 = state_18263__$1;
(statearr_18276_18296[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18264 === (5))){
var inst_18240 = (state_18263[(7)]);
var state_18263__$1 = state_18263;
var statearr_18277_18297 = state_18263__$1;
(statearr_18277_18297[(2)] = inst_18240);

(statearr_18277_18297[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18264 === (10))){
var inst_18259 = (state_18263[(2)]);
var state_18263__$1 = state_18263;
var statearr_18278_18298 = state_18263__$1;
(statearr_18278_18298[(2)] = inst_18259);

(statearr_18278_18298[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18264 === (8))){
var inst_18240 = (state_18263[(7)]);
var inst_18250 = cljs.core.next(inst_18240);
var inst_18240__$1 = inst_18250;
var state_18263__$1 = (function (){var statearr_18279 = state_18263;
(statearr_18279[(7)] = inst_18240__$1);

return statearr_18279;
})();
var statearr_18280_18299 = state_18263__$1;
(statearr_18280_18299[(2)] = null);

(statearr_18280_18299[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__15837__auto__))
;
return ((function (switch__15654__auto__,c__15837__auto__){
return (function() {
var cljs$core$async$state_machine__15655__auto__ = null;
var cljs$core$async$state_machine__15655__auto____0 = (function (){
var statearr_18281 = [null,null,null,null,null,null,null,null];
(statearr_18281[(0)] = cljs$core$async$state_machine__15655__auto__);

(statearr_18281[(1)] = (1));

return statearr_18281;
});
var cljs$core$async$state_machine__15655__auto____1 = (function (state_18263){
while(true){
var ret_value__15656__auto__ = (function (){try{while(true){
var result__15657__auto__ = switch__15654__auto__(state_18263);
if(cljs.core.keyword_identical_QMARK_(result__15657__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15657__auto__;
}
break;
}
}catch (e18282){if((e18282 instanceof Object)){
var ex__15658__auto__ = e18282;
var statearr_18283_18300 = state_18263;
(statearr_18283_18300[(5)] = ex__15658__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18263);

return cljs.core.cst$kw$recur;
} else {
throw e18282;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15656__auto__,cljs.core.cst$kw$recur)){
var G__18301 = state_18263;
state_18263 = G__18301;
continue;
} else {
return ret_value__15656__auto__;
}
break;
}
});
cljs$core$async$state_machine__15655__auto__ = function(state_18263){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15655__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15655__auto____1.call(this,state_18263);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15655__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15655__auto____0;
cljs$core$async$state_machine__15655__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15655__auto____1;
return cljs$core$async$state_machine__15655__auto__;
})()
;})(switch__15654__auto__,c__15837__auto__))
})();
var state__15839__auto__ = (function (){var statearr_18284 = (f__15838__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15838__auto__.cljs$core$IFn$_invoke$arity$0() : f__15838__auto__.call(null));
(statearr_18284[(6)] = c__15837__auto__);

return statearr_18284;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15839__auto__);
});})(c__15837__auto__))
);

return c__15837__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if(((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4243__auto__ = (((_ == null))?null:_);
var m__4244__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4244__auto__.call(null,_));
} else {
var m__4244__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__4244__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4244__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4244__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4244__auto____$1.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4244__auto__.call(null,m,ch));
} else {
var m__4244__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4244__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4244__auto__.call(null,m));
} else {
var m__4244__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__4244__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18302 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18302 = (function (ch,cs,meta18303){
this.ch = ch;
this.cs = cs;
this.meta18303 = meta18303;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async18302.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_18304,meta18303__$1){
var self__ = this;
var _18304__$1 = this;
return (new cljs.core.async.t_cljs$core$async18302(self__.ch,self__.cs,meta18303__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async18302.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_18304){
var self__ = this;
var _18304__$1 = this;
return self__.meta18303;
});})(cs))
;

cljs.core.async.t_cljs$core$async18302.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18302.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async18302.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18302.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async18302.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async18302.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async18302.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$cs,cljs.core.cst$sym$meta18303], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async18302.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18302.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18302";

cljs.core.async.t_cljs$core$async18302.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async18302");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18302.
 */
cljs.core.async.__GT_t_cljs$core$async18302 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async18302(ch__$1,cs__$1,meta18303){
return (new cljs.core.async.t_cljs$core$async18302(ch__$1,cs__$1,meta18303));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async18302(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__15837__auto___18524 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15837__auto___18524,cs,m,dchan,dctr,done){
return (function (){
var f__15838__auto__ = (function (){var switch__15654__auto__ = ((function (c__15837__auto___18524,cs,m,dchan,dctr,done){
return (function (state_18439){
var state_val_18440 = (state_18439[(1)]);
if((state_val_18440 === (7))){
var inst_18435 = (state_18439[(2)]);
var state_18439__$1 = state_18439;
var statearr_18441_18525 = state_18439__$1;
(statearr_18441_18525[(2)] = inst_18435);

(statearr_18441_18525[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18440 === (20))){
var inst_18338 = (state_18439[(7)]);
var inst_18350 = cljs.core.first(inst_18338);
var inst_18351 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18350,(0),null);
var inst_18352 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18350,(1),null);
var state_18439__$1 = (function (){var statearr_18442 = state_18439;
(statearr_18442[(8)] = inst_18351);

return statearr_18442;
})();
if(cljs.core.truth_(inst_18352)){
var statearr_18443_18526 = state_18439__$1;
(statearr_18443_18526[(1)] = (22));

} else {
var statearr_18444_18527 = state_18439__$1;
(statearr_18444_18527[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18440 === (27))){
var inst_18380 = (state_18439[(9)]);
var inst_18387 = (state_18439[(10)]);
var inst_18382 = (state_18439[(11)]);
var inst_18307 = (state_18439[(12)]);
var inst_18387__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_18380,inst_18382);
var inst_18388 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_18387__$1,inst_18307,done);
var state_18439__$1 = (function (){var statearr_18445 = state_18439;
(statearr_18445[(10)] = inst_18387__$1);

return statearr_18445;
})();
if(cljs.core.truth_(inst_18388)){
var statearr_18446_18528 = state_18439__$1;
(statearr_18446_18528[(1)] = (30));

} else {
var statearr_18447_18529 = state_18439__$1;
(statearr_18447_18529[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18440 === (1))){
var state_18439__$1 = state_18439;
var statearr_18448_18530 = state_18439__$1;
(statearr_18448_18530[(2)] = null);

(statearr_18448_18530[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18440 === (24))){
var inst_18338 = (state_18439[(7)]);
var inst_18357 = (state_18439[(2)]);
var inst_18358 = cljs.core.next(inst_18338);
var inst_18316 = inst_18358;
var inst_18317 = null;
var inst_18318 = (0);
var inst_18319 = (0);
var state_18439__$1 = (function (){var statearr_18449 = state_18439;
(statearr_18449[(13)] = inst_18318);

(statearr_18449[(14)] = inst_18317);

(statearr_18449[(15)] = inst_18316);

(statearr_18449[(16)] = inst_18319);

(statearr_18449[(17)] = inst_18357);

return statearr_18449;
})();
var statearr_18450_18531 = state_18439__$1;
(statearr_18450_18531[(2)] = null);

(statearr_18450_18531[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18440 === (39))){
var state_18439__$1 = state_18439;
var statearr_18454_18532 = state_18439__$1;
(statearr_18454_18532[(2)] = null);

(statearr_18454_18532[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18440 === (4))){
var inst_18307 = (state_18439[(12)]);
var inst_18307__$1 = (state_18439[(2)]);
var inst_18308 = (inst_18307__$1 == null);
var state_18439__$1 = (function (){var statearr_18455 = state_18439;
(statearr_18455[(12)] = inst_18307__$1);

return statearr_18455;
})();
if(cljs.core.truth_(inst_18308)){
var statearr_18456_18533 = state_18439__$1;
(statearr_18456_18533[(1)] = (5));

} else {
var statearr_18457_18534 = state_18439__$1;
(statearr_18457_18534[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18440 === (15))){
var inst_18318 = (state_18439[(13)]);
var inst_18317 = (state_18439[(14)]);
var inst_18316 = (state_18439[(15)]);
var inst_18319 = (state_18439[(16)]);
var inst_18334 = (state_18439[(2)]);
var inst_18335 = (inst_18319 + (1));
var tmp18451 = inst_18318;
var tmp18452 = inst_18317;
var tmp18453 = inst_18316;
var inst_18316__$1 = tmp18453;
var inst_18317__$1 = tmp18452;
var inst_18318__$1 = tmp18451;
var inst_18319__$1 = inst_18335;
var state_18439__$1 = (function (){var statearr_18458 = state_18439;
(statearr_18458[(13)] = inst_18318__$1);

(statearr_18458[(14)] = inst_18317__$1);

(statearr_18458[(18)] = inst_18334);

(statearr_18458[(15)] = inst_18316__$1);

(statearr_18458[(16)] = inst_18319__$1);

return statearr_18458;
})();
var statearr_18459_18535 = state_18439__$1;
(statearr_18459_18535[(2)] = null);

(statearr_18459_18535[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18440 === (21))){
var inst_18361 = (state_18439[(2)]);
var state_18439__$1 = state_18439;
var statearr_18463_18536 = state_18439__$1;
(statearr_18463_18536[(2)] = inst_18361);

(statearr_18463_18536[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18440 === (31))){
var inst_18387 = (state_18439[(10)]);
var inst_18391 = done(null);
var inst_18392 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_18387);
var state_18439__$1 = (function (){var statearr_18464 = state_18439;
(statearr_18464[(19)] = inst_18391);

return statearr_18464;
})();
var statearr_18465_18537 = state_18439__$1;
(statearr_18465_18537[(2)] = inst_18392);

(statearr_18465_18537[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18440 === (32))){
var inst_18380 = (state_18439[(9)]);
var inst_18382 = (state_18439[(11)]);
var inst_18381 = (state_18439[(20)]);
var inst_18379 = (state_18439[(21)]);
var inst_18394 = (state_18439[(2)]);
var inst_18395 = (inst_18382 + (1));
var tmp18460 = inst_18380;
var tmp18461 = inst_18381;
var tmp18462 = inst_18379;
var inst_18379__$1 = tmp18462;
var inst_18380__$1 = tmp18460;
var inst_18381__$1 = tmp18461;
var inst_18382__$1 = inst_18395;
var state_18439__$1 = (function (){var statearr_18466 = state_18439;
(statearr_18466[(9)] = inst_18380__$1);

(statearr_18466[(11)] = inst_18382__$1);

(statearr_18466[(20)] = inst_18381__$1);

(statearr_18466[(21)] = inst_18379__$1);

(statearr_18466[(22)] = inst_18394);

return statearr_18466;
})();
var statearr_18467_18538 = state_18439__$1;
(statearr_18467_18538[(2)] = null);

(statearr_18467_18538[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18440 === (40))){
var inst_18407 = (state_18439[(23)]);
var inst_18411 = done(null);
var inst_18412 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_18407);
var state_18439__$1 = (function (){var statearr_18468 = state_18439;
(statearr_18468[(24)] = inst_18411);

return statearr_18468;
})();
var statearr_18469_18539 = state_18439__$1;
(statearr_18469_18539[(2)] = inst_18412);

(statearr_18469_18539[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18440 === (33))){
var inst_18398 = (state_18439[(25)]);
var inst_18400 = cljs.core.chunked_seq_QMARK_(inst_18398);
var state_18439__$1 = state_18439;
if(inst_18400){
var statearr_18470_18540 = state_18439__$1;
(statearr_18470_18540[(1)] = (36));

} else {
var statearr_18471_18541 = state_18439__$1;
(statearr_18471_18541[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18440 === (13))){
var inst_18328 = (state_18439[(26)]);
var inst_18331 = cljs.core.async.close_BANG_(inst_18328);
var state_18439__$1 = state_18439;
var statearr_18472_18542 = state_18439__$1;
(statearr_18472_18542[(2)] = inst_18331);

(statearr_18472_18542[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18440 === (22))){
var inst_18351 = (state_18439[(8)]);
var inst_18354 = cljs.core.async.close_BANG_(inst_18351);
var state_18439__$1 = state_18439;
var statearr_18473_18543 = state_18439__$1;
(statearr_18473_18543[(2)] = inst_18354);

(statearr_18473_18543[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18440 === (36))){
var inst_18398 = (state_18439[(25)]);
var inst_18402 = cljs.core.chunk_first(inst_18398);
var inst_18403 = cljs.core.chunk_rest(inst_18398);
var inst_18404 = cljs.core.count(inst_18402);
var inst_18379 = inst_18403;
var inst_18380 = inst_18402;
var inst_18381 = inst_18404;
var inst_18382 = (0);
var state_18439__$1 = (function (){var statearr_18474 = state_18439;
(statearr_18474[(9)] = inst_18380);

(statearr_18474[(11)] = inst_18382);

(statearr_18474[(20)] = inst_18381);

(statearr_18474[(21)] = inst_18379);

return statearr_18474;
})();
var statearr_18475_18544 = state_18439__$1;
(statearr_18475_18544[(2)] = null);

(statearr_18475_18544[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18440 === (41))){
var inst_18398 = (state_18439[(25)]);
var inst_18414 = (state_18439[(2)]);
var inst_18415 = cljs.core.next(inst_18398);
var inst_18379 = inst_18415;
var inst_18380 = null;
var inst_18381 = (0);
var inst_18382 = (0);
var state_18439__$1 = (function (){var statearr_18476 = state_18439;
(statearr_18476[(9)] = inst_18380);

(statearr_18476[(11)] = inst_18382);

(statearr_18476[(27)] = inst_18414);

(statearr_18476[(20)] = inst_18381);

(statearr_18476[(21)] = inst_18379);

return statearr_18476;
})();
var statearr_18477_18545 = state_18439__$1;
(statearr_18477_18545[(2)] = null);

(statearr_18477_18545[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18440 === (43))){
var state_18439__$1 = state_18439;
var statearr_18478_18546 = state_18439__$1;
(statearr_18478_18546[(2)] = null);

(statearr_18478_18546[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18440 === (29))){
var inst_18423 = (state_18439[(2)]);
var state_18439__$1 = state_18439;
var statearr_18479_18547 = state_18439__$1;
(statearr_18479_18547[(2)] = inst_18423);

(statearr_18479_18547[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18440 === (44))){
var inst_18432 = (state_18439[(2)]);
var state_18439__$1 = (function (){var statearr_18480 = state_18439;
(statearr_18480[(28)] = inst_18432);

return statearr_18480;
})();
var statearr_18481_18548 = state_18439__$1;
(statearr_18481_18548[(2)] = null);

(statearr_18481_18548[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18440 === (6))){
var inst_18371 = (state_18439[(29)]);
var inst_18370 = cljs.core.deref(cs);
var inst_18371__$1 = cljs.core.keys(inst_18370);
var inst_18372 = cljs.core.count(inst_18371__$1);
var inst_18373 = cljs.core.reset_BANG_(dctr,inst_18372);
var inst_18378 = cljs.core.seq(inst_18371__$1);
var inst_18379 = inst_18378;
var inst_18380 = null;
var inst_18381 = (0);
var inst_18382 = (0);
var state_18439__$1 = (function (){var statearr_18482 = state_18439;
(statearr_18482[(9)] = inst_18380);

(statearr_18482[(11)] = inst_18382);

(statearr_18482[(30)] = inst_18373);

(statearr_18482[(29)] = inst_18371__$1);

(statearr_18482[(20)] = inst_18381);

(statearr_18482[(21)] = inst_18379);

return statearr_18482;
})();
var statearr_18483_18549 = state_18439__$1;
(statearr_18483_18549[(2)] = null);

(statearr_18483_18549[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18440 === (28))){
var inst_18398 = (state_18439[(25)]);
var inst_18379 = (state_18439[(21)]);
var inst_18398__$1 = cljs.core.seq(inst_18379);
var state_18439__$1 = (function (){var statearr_18484 = state_18439;
(statearr_18484[(25)] = inst_18398__$1);

return statearr_18484;
})();
if(inst_18398__$1){
var statearr_18485_18550 = state_18439__$1;
(statearr_18485_18550[(1)] = (33));

} else {
var statearr_18486_18551 = state_18439__$1;
(statearr_18486_18551[(1)] = (34));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18440 === (25))){
var inst_18382 = (state_18439[(11)]);
var inst_18381 = (state_18439[(20)]);
var inst_18384 = (inst_18382 < inst_18381);
var inst_18385 = inst_18384;
var state_18439__$1 = state_18439;
if(cljs.core.truth_(inst_18385)){
var statearr_18487_18552 = state_18439__$1;
(statearr_18487_18552[(1)] = (27));

} else {
var statearr_18488_18553 = state_18439__$1;
(statearr_18488_18553[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18440 === (34))){
var state_18439__$1 = state_18439;
var statearr_18489_18554 = state_18439__$1;
(statearr_18489_18554[(2)] = null);

(statearr_18489_18554[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18440 === (17))){
var state_18439__$1 = state_18439;
var statearr_18490_18555 = state_18439__$1;
(statearr_18490_18555[(2)] = null);

(statearr_18490_18555[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18440 === (3))){
var inst_18437 = (state_18439[(2)]);
var state_18439__$1 = state_18439;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18439__$1,inst_18437);
} else {
if((state_val_18440 === (12))){
var inst_18366 = (state_18439[(2)]);
var state_18439__$1 = state_18439;
var statearr_18491_18556 = state_18439__$1;
(statearr_18491_18556[(2)] = inst_18366);

(statearr_18491_18556[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18440 === (2))){
var state_18439__$1 = state_18439;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18439__$1,(4),ch);
} else {
if((state_val_18440 === (23))){
var state_18439__$1 = state_18439;
var statearr_18492_18557 = state_18439__$1;
(statearr_18492_18557[(2)] = null);

(statearr_18492_18557[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18440 === (35))){
var inst_18421 = (state_18439[(2)]);
var state_18439__$1 = state_18439;
var statearr_18493_18558 = state_18439__$1;
(statearr_18493_18558[(2)] = inst_18421);

(statearr_18493_18558[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18440 === (19))){
var inst_18338 = (state_18439[(7)]);
var inst_18342 = cljs.core.chunk_first(inst_18338);
var inst_18343 = cljs.core.chunk_rest(inst_18338);
var inst_18344 = cljs.core.count(inst_18342);
var inst_18316 = inst_18343;
var inst_18317 = inst_18342;
var inst_18318 = inst_18344;
var inst_18319 = (0);
var state_18439__$1 = (function (){var statearr_18494 = state_18439;
(statearr_18494[(13)] = inst_18318);

(statearr_18494[(14)] = inst_18317);

(statearr_18494[(15)] = inst_18316);

(statearr_18494[(16)] = inst_18319);

return statearr_18494;
})();
var statearr_18495_18559 = state_18439__$1;
(statearr_18495_18559[(2)] = null);

(statearr_18495_18559[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18440 === (11))){
var inst_18338 = (state_18439[(7)]);
var inst_18316 = (state_18439[(15)]);
var inst_18338__$1 = cljs.core.seq(inst_18316);
var state_18439__$1 = (function (){var statearr_18496 = state_18439;
(statearr_18496[(7)] = inst_18338__$1);

return statearr_18496;
})();
if(inst_18338__$1){
var statearr_18497_18560 = state_18439__$1;
(statearr_18497_18560[(1)] = (16));

} else {
var statearr_18498_18561 = state_18439__$1;
(statearr_18498_18561[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18440 === (9))){
var inst_18368 = (state_18439[(2)]);
var state_18439__$1 = state_18439;
var statearr_18499_18562 = state_18439__$1;
(statearr_18499_18562[(2)] = inst_18368);

(statearr_18499_18562[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18440 === (5))){
var inst_18314 = cljs.core.deref(cs);
var inst_18315 = cljs.core.seq(inst_18314);
var inst_18316 = inst_18315;
var inst_18317 = null;
var inst_18318 = (0);
var inst_18319 = (0);
var state_18439__$1 = (function (){var statearr_18500 = state_18439;
(statearr_18500[(13)] = inst_18318);

(statearr_18500[(14)] = inst_18317);

(statearr_18500[(15)] = inst_18316);

(statearr_18500[(16)] = inst_18319);

return statearr_18500;
})();
var statearr_18501_18563 = state_18439__$1;
(statearr_18501_18563[(2)] = null);

(statearr_18501_18563[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18440 === (14))){
var state_18439__$1 = state_18439;
var statearr_18502_18564 = state_18439__$1;
(statearr_18502_18564[(2)] = null);

(statearr_18502_18564[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18440 === (45))){
var inst_18429 = (state_18439[(2)]);
var state_18439__$1 = state_18439;
var statearr_18503_18565 = state_18439__$1;
(statearr_18503_18565[(2)] = inst_18429);

(statearr_18503_18565[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18440 === (26))){
var inst_18371 = (state_18439[(29)]);
var inst_18425 = (state_18439[(2)]);
var inst_18426 = cljs.core.seq(inst_18371);
var state_18439__$1 = (function (){var statearr_18504 = state_18439;
(statearr_18504[(31)] = inst_18425);

return statearr_18504;
})();
if(inst_18426){
var statearr_18505_18566 = state_18439__$1;
(statearr_18505_18566[(1)] = (42));

} else {
var statearr_18506_18567 = state_18439__$1;
(statearr_18506_18567[(1)] = (43));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18440 === (16))){
var inst_18338 = (state_18439[(7)]);
var inst_18340 = cljs.core.chunked_seq_QMARK_(inst_18338);
var state_18439__$1 = state_18439;
if(inst_18340){
var statearr_18507_18568 = state_18439__$1;
(statearr_18507_18568[(1)] = (19));

} else {
var statearr_18508_18569 = state_18439__$1;
(statearr_18508_18569[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18440 === (38))){
var inst_18418 = (state_18439[(2)]);
var state_18439__$1 = state_18439;
var statearr_18509_18570 = state_18439__$1;
(statearr_18509_18570[(2)] = inst_18418);

(statearr_18509_18570[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18440 === (30))){
var state_18439__$1 = state_18439;
var statearr_18510_18571 = state_18439__$1;
(statearr_18510_18571[(2)] = null);

(statearr_18510_18571[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18440 === (10))){
var inst_18317 = (state_18439[(14)]);
var inst_18319 = (state_18439[(16)]);
var inst_18327 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_18317,inst_18319);
var inst_18328 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18327,(0),null);
var inst_18329 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18327,(1),null);
var state_18439__$1 = (function (){var statearr_18511 = state_18439;
(statearr_18511[(26)] = inst_18328);

return statearr_18511;
})();
if(cljs.core.truth_(inst_18329)){
var statearr_18512_18572 = state_18439__$1;
(statearr_18512_18572[(1)] = (13));

} else {
var statearr_18513_18573 = state_18439__$1;
(statearr_18513_18573[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18440 === (18))){
var inst_18364 = (state_18439[(2)]);
var state_18439__$1 = state_18439;
var statearr_18514_18574 = state_18439__$1;
(statearr_18514_18574[(2)] = inst_18364);

(statearr_18514_18574[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18440 === (42))){
var state_18439__$1 = state_18439;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18439__$1,(45),dchan);
} else {
if((state_val_18440 === (37))){
var inst_18398 = (state_18439[(25)]);
var inst_18307 = (state_18439[(12)]);
var inst_18407 = (state_18439[(23)]);
var inst_18407__$1 = cljs.core.first(inst_18398);
var inst_18408 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_18407__$1,inst_18307,done);
var state_18439__$1 = (function (){var statearr_18515 = state_18439;
(statearr_18515[(23)] = inst_18407__$1);

return statearr_18515;
})();
if(cljs.core.truth_(inst_18408)){
var statearr_18516_18575 = state_18439__$1;
(statearr_18516_18575[(1)] = (39));

} else {
var statearr_18517_18576 = state_18439__$1;
(statearr_18517_18576[(1)] = (40));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18440 === (8))){
var inst_18318 = (state_18439[(13)]);
var inst_18319 = (state_18439[(16)]);
var inst_18321 = (inst_18319 < inst_18318);
var inst_18322 = inst_18321;
var state_18439__$1 = state_18439;
if(cljs.core.truth_(inst_18322)){
var statearr_18518_18577 = state_18439__$1;
(statearr_18518_18577[(1)] = (10));

} else {
var statearr_18519_18578 = state_18439__$1;
(statearr_18519_18578[(1)] = (11));

}

return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__15837__auto___18524,cs,m,dchan,dctr,done))
;
return ((function (switch__15654__auto__,c__15837__auto___18524,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__15655__auto__ = null;
var cljs$core$async$mult_$_state_machine__15655__auto____0 = (function (){
var statearr_18520 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18520[(0)] = cljs$core$async$mult_$_state_machine__15655__auto__);

(statearr_18520[(1)] = (1));

return statearr_18520;
});
var cljs$core$async$mult_$_state_machine__15655__auto____1 = (function (state_18439){
while(true){
var ret_value__15656__auto__ = (function (){try{while(true){
var result__15657__auto__ = switch__15654__auto__(state_18439);
if(cljs.core.keyword_identical_QMARK_(result__15657__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15657__auto__;
}
break;
}
}catch (e18521){if((e18521 instanceof Object)){
var ex__15658__auto__ = e18521;
var statearr_18522_18579 = state_18439;
(statearr_18522_18579[(5)] = ex__15658__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18439);

return cljs.core.cst$kw$recur;
} else {
throw e18521;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15656__auto__,cljs.core.cst$kw$recur)){
var G__18580 = state_18439;
state_18439 = G__18580;
continue;
} else {
return ret_value__15656__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__15655__auto__ = function(state_18439){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__15655__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__15655__auto____1.call(this,state_18439);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__15655__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__15655__auto____0;
cljs$core$async$mult_$_state_machine__15655__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__15655__auto____1;
return cljs$core$async$mult_$_state_machine__15655__auto__;
})()
;})(switch__15654__auto__,c__15837__auto___18524,cs,m,dchan,dctr,done))
})();
var state__15839__auto__ = (function (){var statearr_18523 = (f__15838__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15838__auto__.cljs$core$IFn$_invoke$arity$0() : f__15838__auto__.call(null));
(statearr_18523[(6)] = c__15837__auto___18524);

return statearr_18523;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15839__auto__);
});})(c__15837__auto___18524,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__18582 = arguments.length;
switch (G__18582) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4244__auto__.call(null,m,ch));
} else {
var m__4244__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4244__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4244__auto__.call(null,m,ch));
} else {
var m__4244__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4244__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4244__auto__.call(null,m));
} else {
var m__4244__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__4244__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4244__auto__.call(null,m,state_map));
} else {
var m__4244__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4244__auto____$1.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4244__auto__.call(null,m,mode));
} else {
var m__4244__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4244__auto____$1.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___18594 = arguments.length;
var i__4532__auto___18595 = (0);
while(true){
if((i__4532__auto___18595 < len__4531__auto___18594)){
args__4534__auto__.push((arguments[i__4532__auto___18595]));

var G__18596 = (i__4532__auto___18595 + (1));
i__4532__auto___18595 = G__18596;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((3) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4535__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__18588){
var map__18589 = p__18588;
var map__18589__$1 = ((((!((map__18589 == null)))?(((((map__18589.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18589.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18589):map__18589);
var opts = map__18589__$1;
var statearr_18591_18597 = state;
(statearr_18591_18597[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts(((function (map__18589,map__18589__$1,opts){
return (function (val){
var statearr_18592_18598 = state;
(statearr_18592_18598[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__18589,map__18589__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_18593_18599 = state;
(statearr_18593_18599[(2)] = cljs.core.deref(cb));


return cljs.core.cst$kw$recur;
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq18584){
var G__18585 = cljs.core.first(seq18584);
var seq18584__$1 = cljs.core.next(seq18584);
var G__18586 = cljs.core.first(seq18584__$1);
var seq18584__$2 = cljs.core.next(seq18584__$1);
var G__18587 = cljs.core.first(seq18584__$2);
var seq18584__$3 = cljs.core.next(seq18584__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18585,G__18586,G__18587,seq18584__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$pause,null,cljs.core.cst$kw$mute,null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.cst$kw$solo);
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$mute);
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(cljs.core.cst$kw$solo,chs);
var pauses = pick(cljs.core.cst$kw$pause,chs);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$solos,solos,cljs.core.cst$kw$mutes,pick(cljs.core.cst$kw$mute,chs),cljs.core.cst$kw$reads,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.cst$kw$pause)) && (!(cljs.core.empty_QMARK_(solos)))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18600 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18600 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta18601){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta18601 = meta18601;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async18600.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_18602,meta18601__$1){
var self__ = this;
var _18602__$1 = this;
return (new cljs.core.async.t_cljs$core$async18600(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta18601__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18600.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_18602){
var self__ = this;
var _18602__$1 = this;
return self__.meta18601;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18600.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18600.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18600.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18600.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18600.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18600.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18600.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18600.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18600.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$out,cljs.core.cst$sym$cs,cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$attrs,cljs.core.cst$sym$solo_DASH_mode,cljs.core.cst$sym$change,cljs.core.cst$sym$changed,cljs.core.cst$sym$pick,cljs.core.cst$sym$calc_DASH_state,cljs.core.cst$sym$meta18601], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18600.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18600.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18600";

cljs.core.async.t_cljs$core$async18600.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async18600");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18600.
 */
cljs.core.async.__GT_t_cljs$core$async18600 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async18600(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta18601){
return (new cljs.core.async.t_cljs$core$async18600(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta18601));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async18600(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__15837__auto___18764 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15837__auto___18764,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__15838__auto__ = (function (){var switch__15654__auto__ = ((function (c__15837__auto___18764,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_18704){
var state_val_18705 = (state_18704[(1)]);
if((state_val_18705 === (7))){
var inst_18619 = (state_18704[(2)]);
var state_18704__$1 = state_18704;
var statearr_18706_18765 = state_18704__$1;
(statearr_18706_18765[(2)] = inst_18619);

(statearr_18706_18765[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18705 === (20))){
var inst_18631 = (state_18704[(7)]);
var state_18704__$1 = state_18704;
var statearr_18707_18766 = state_18704__$1;
(statearr_18707_18766[(2)] = inst_18631);

(statearr_18707_18766[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18705 === (27))){
var state_18704__$1 = state_18704;
var statearr_18708_18767 = state_18704__$1;
(statearr_18708_18767[(2)] = null);

(statearr_18708_18767[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18705 === (1))){
var inst_18606 = (state_18704[(8)]);
var inst_18606__$1 = calc_state();
var inst_18608 = (inst_18606__$1 == null);
var inst_18609 = cljs.core.not(inst_18608);
var state_18704__$1 = (function (){var statearr_18709 = state_18704;
(statearr_18709[(8)] = inst_18606__$1);

return statearr_18709;
})();
if(inst_18609){
var statearr_18710_18768 = state_18704__$1;
(statearr_18710_18768[(1)] = (2));

} else {
var statearr_18711_18769 = state_18704__$1;
(statearr_18711_18769[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18705 === (24))){
var inst_18678 = (state_18704[(9)]);
var inst_18664 = (state_18704[(10)]);
var inst_18655 = (state_18704[(11)]);
var inst_18678__$1 = (inst_18655.cljs$core$IFn$_invoke$arity$1 ? inst_18655.cljs$core$IFn$_invoke$arity$1(inst_18664) : inst_18655.call(null,inst_18664));
var state_18704__$1 = (function (){var statearr_18712 = state_18704;
(statearr_18712[(9)] = inst_18678__$1);

return statearr_18712;
})();
if(cljs.core.truth_(inst_18678__$1)){
var statearr_18713_18770 = state_18704__$1;
(statearr_18713_18770[(1)] = (29));

} else {
var statearr_18714_18771 = state_18704__$1;
(statearr_18714_18771[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18705 === (4))){
var inst_18622 = (state_18704[(2)]);
var state_18704__$1 = state_18704;
if(cljs.core.truth_(inst_18622)){
var statearr_18715_18772 = state_18704__$1;
(statearr_18715_18772[(1)] = (8));

} else {
var statearr_18716_18773 = state_18704__$1;
(statearr_18716_18773[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18705 === (15))){
var inst_18649 = (state_18704[(2)]);
var state_18704__$1 = state_18704;
if(cljs.core.truth_(inst_18649)){
var statearr_18717_18774 = state_18704__$1;
(statearr_18717_18774[(1)] = (19));

} else {
var statearr_18718_18775 = state_18704__$1;
(statearr_18718_18775[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18705 === (21))){
var inst_18654 = (state_18704[(12)]);
var inst_18654__$1 = (state_18704[(2)]);
var inst_18655 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18654__$1,cljs.core.cst$kw$solos);
var inst_18656 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18654__$1,cljs.core.cst$kw$mutes);
var inst_18657 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18654__$1,cljs.core.cst$kw$reads);
var state_18704__$1 = (function (){var statearr_18719 = state_18704;
(statearr_18719[(11)] = inst_18655);

(statearr_18719[(12)] = inst_18654__$1);

(statearr_18719[(13)] = inst_18656);

return statearr_18719;
})();
return cljs.core.async.ioc_alts_BANG_(state_18704__$1,(22),inst_18657);
} else {
if((state_val_18705 === (31))){
var inst_18686 = (state_18704[(2)]);
var state_18704__$1 = state_18704;
if(cljs.core.truth_(inst_18686)){
var statearr_18720_18776 = state_18704__$1;
(statearr_18720_18776[(1)] = (32));

} else {
var statearr_18721_18777 = state_18704__$1;
(statearr_18721_18777[(1)] = (33));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18705 === (32))){
var inst_18663 = (state_18704[(14)]);
var state_18704__$1 = state_18704;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18704__$1,(35),out,inst_18663);
} else {
if((state_val_18705 === (33))){
var inst_18654 = (state_18704[(12)]);
var inst_18631 = inst_18654;
var state_18704__$1 = (function (){var statearr_18722 = state_18704;
(statearr_18722[(7)] = inst_18631);

return statearr_18722;
})();
var statearr_18723_18778 = state_18704__$1;
(statearr_18723_18778[(2)] = null);

(statearr_18723_18778[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18705 === (13))){
var inst_18631 = (state_18704[(7)]);
var inst_18638 = inst_18631.cljs$lang$protocol_mask$partition0$;
var inst_18639 = (inst_18638 & (64));
var inst_18640 = inst_18631.cljs$core$ISeq$;
var inst_18641 = (cljs.core.PROTOCOL_SENTINEL === inst_18640);
var inst_18642 = ((inst_18639) || (inst_18641));
var state_18704__$1 = state_18704;
if(cljs.core.truth_(inst_18642)){
var statearr_18724_18779 = state_18704__$1;
(statearr_18724_18779[(1)] = (16));

} else {
var statearr_18725_18780 = state_18704__$1;
(statearr_18725_18780[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18705 === (22))){
var inst_18664 = (state_18704[(10)]);
var inst_18663 = (state_18704[(14)]);
var inst_18662 = (state_18704[(2)]);
var inst_18663__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18662,(0),null);
var inst_18664__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18662,(1),null);
var inst_18665 = (inst_18663__$1 == null);
var inst_18666 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18664__$1,change);
var inst_18667 = ((inst_18665) || (inst_18666));
var state_18704__$1 = (function (){var statearr_18726 = state_18704;
(statearr_18726[(10)] = inst_18664__$1);

(statearr_18726[(14)] = inst_18663__$1);

return statearr_18726;
})();
if(cljs.core.truth_(inst_18667)){
var statearr_18727_18781 = state_18704__$1;
(statearr_18727_18781[(1)] = (23));

} else {
var statearr_18728_18782 = state_18704__$1;
(statearr_18728_18782[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18705 === (36))){
var inst_18654 = (state_18704[(12)]);
var inst_18631 = inst_18654;
var state_18704__$1 = (function (){var statearr_18729 = state_18704;
(statearr_18729[(7)] = inst_18631);

return statearr_18729;
})();
var statearr_18730_18783 = state_18704__$1;
(statearr_18730_18783[(2)] = null);

(statearr_18730_18783[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18705 === (29))){
var inst_18678 = (state_18704[(9)]);
var state_18704__$1 = state_18704;
var statearr_18731_18784 = state_18704__$1;
(statearr_18731_18784[(2)] = inst_18678);

(statearr_18731_18784[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18705 === (6))){
var state_18704__$1 = state_18704;
var statearr_18732_18785 = state_18704__$1;
(statearr_18732_18785[(2)] = false);

(statearr_18732_18785[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18705 === (28))){
var inst_18674 = (state_18704[(2)]);
var inst_18675 = calc_state();
var inst_18631 = inst_18675;
var state_18704__$1 = (function (){var statearr_18733 = state_18704;
(statearr_18733[(15)] = inst_18674);

(statearr_18733[(7)] = inst_18631);

return statearr_18733;
})();
var statearr_18734_18786 = state_18704__$1;
(statearr_18734_18786[(2)] = null);

(statearr_18734_18786[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18705 === (25))){
var inst_18700 = (state_18704[(2)]);
var state_18704__$1 = state_18704;
var statearr_18735_18787 = state_18704__$1;
(statearr_18735_18787[(2)] = inst_18700);

(statearr_18735_18787[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18705 === (34))){
var inst_18698 = (state_18704[(2)]);
var state_18704__$1 = state_18704;
var statearr_18736_18788 = state_18704__$1;
(statearr_18736_18788[(2)] = inst_18698);

(statearr_18736_18788[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18705 === (17))){
var state_18704__$1 = state_18704;
var statearr_18737_18789 = state_18704__$1;
(statearr_18737_18789[(2)] = false);

(statearr_18737_18789[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18705 === (3))){
var state_18704__$1 = state_18704;
var statearr_18738_18790 = state_18704__$1;
(statearr_18738_18790[(2)] = false);

(statearr_18738_18790[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18705 === (12))){
var inst_18702 = (state_18704[(2)]);
var state_18704__$1 = state_18704;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18704__$1,inst_18702);
} else {
if((state_val_18705 === (2))){
var inst_18606 = (state_18704[(8)]);
var inst_18611 = inst_18606.cljs$lang$protocol_mask$partition0$;
var inst_18612 = (inst_18611 & (64));
var inst_18613 = inst_18606.cljs$core$ISeq$;
var inst_18614 = (cljs.core.PROTOCOL_SENTINEL === inst_18613);
var inst_18615 = ((inst_18612) || (inst_18614));
var state_18704__$1 = state_18704;
if(cljs.core.truth_(inst_18615)){
var statearr_18739_18791 = state_18704__$1;
(statearr_18739_18791[(1)] = (5));

} else {
var statearr_18740_18792 = state_18704__$1;
(statearr_18740_18792[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18705 === (23))){
var inst_18663 = (state_18704[(14)]);
var inst_18669 = (inst_18663 == null);
var state_18704__$1 = state_18704;
if(cljs.core.truth_(inst_18669)){
var statearr_18741_18793 = state_18704__$1;
(statearr_18741_18793[(1)] = (26));

} else {
var statearr_18742_18794 = state_18704__$1;
(statearr_18742_18794[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18705 === (35))){
var inst_18689 = (state_18704[(2)]);
var state_18704__$1 = state_18704;
if(cljs.core.truth_(inst_18689)){
var statearr_18743_18795 = state_18704__$1;
(statearr_18743_18795[(1)] = (36));

} else {
var statearr_18744_18796 = state_18704__$1;
(statearr_18744_18796[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18705 === (19))){
var inst_18631 = (state_18704[(7)]);
var inst_18651 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_18631);
var state_18704__$1 = state_18704;
var statearr_18745_18797 = state_18704__$1;
(statearr_18745_18797[(2)] = inst_18651);

(statearr_18745_18797[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18705 === (11))){
var inst_18631 = (state_18704[(7)]);
var inst_18635 = (inst_18631 == null);
var inst_18636 = cljs.core.not(inst_18635);
var state_18704__$1 = state_18704;
if(inst_18636){
var statearr_18746_18798 = state_18704__$1;
(statearr_18746_18798[(1)] = (13));

} else {
var statearr_18747_18799 = state_18704__$1;
(statearr_18747_18799[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18705 === (9))){
var inst_18606 = (state_18704[(8)]);
var state_18704__$1 = state_18704;
var statearr_18748_18800 = state_18704__$1;
(statearr_18748_18800[(2)] = inst_18606);

(statearr_18748_18800[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18705 === (5))){
var state_18704__$1 = state_18704;
var statearr_18749_18801 = state_18704__$1;
(statearr_18749_18801[(2)] = true);

(statearr_18749_18801[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18705 === (14))){
var state_18704__$1 = state_18704;
var statearr_18750_18802 = state_18704__$1;
(statearr_18750_18802[(2)] = false);

(statearr_18750_18802[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18705 === (26))){
var inst_18664 = (state_18704[(10)]);
var inst_18671 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_18664);
var state_18704__$1 = state_18704;
var statearr_18751_18803 = state_18704__$1;
(statearr_18751_18803[(2)] = inst_18671);

(statearr_18751_18803[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18705 === (16))){
var state_18704__$1 = state_18704;
var statearr_18752_18804 = state_18704__$1;
(statearr_18752_18804[(2)] = true);

(statearr_18752_18804[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18705 === (38))){
var inst_18694 = (state_18704[(2)]);
var state_18704__$1 = state_18704;
var statearr_18753_18805 = state_18704__$1;
(statearr_18753_18805[(2)] = inst_18694);

(statearr_18753_18805[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18705 === (30))){
var inst_18664 = (state_18704[(10)]);
var inst_18655 = (state_18704[(11)]);
var inst_18656 = (state_18704[(13)]);
var inst_18681 = cljs.core.empty_QMARK_(inst_18655);
var inst_18682 = (inst_18656.cljs$core$IFn$_invoke$arity$1 ? inst_18656.cljs$core$IFn$_invoke$arity$1(inst_18664) : inst_18656.call(null,inst_18664));
var inst_18683 = cljs.core.not(inst_18682);
var inst_18684 = ((inst_18681) && (inst_18683));
var state_18704__$1 = state_18704;
var statearr_18754_18806 = state_18704__$1;
(statearr_18754_18806[(2)] = inst_18684);

(statearr_18754_18806[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18705 === (10))){
var inst_18606 = (state_18704[(8)]);
var inst_18627 = (state_18704[(2)]);
var inst_18628 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18627,cljs.core.cst$kw$solos);
var inst_18629 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18627,cljs.core.cst$kw$mutes);
var inst_18630 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18627,cljs.core.cst$kw$reads);
var inst_18631 = inst_18606;
var state_18704__$1 = (function (){var statearr_18755 = state_18704;
(statearr_18755[(16)] = inst_18629);

(statearr_18755[(17)] = inst_18628);

(statearr_18755[(7)] = inst_18631);

(statearr_18755[(18)] = inst_18630);

return statearr_18755;
})();
var statearr_18756_18807 = state_18704__$1;
(statearr_18756_18807[(2)] = null);

(statearr_18756_18807[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18705 === (18))){
var inst_18646 = (state_18704[(2)]);
var state_18704__$1 = state_18704;
var statearr_18757_18808 = state_18704__$1;
(statearr_18757_18808[(2)] = inst_18646);

(statearr_18757_18808[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18705 === (37))){
var state_18704__$1 = state_18704;
var statearr_18758_18809 = state_18704__$1;
(statearr_18758_18809[(2)] = null);

(statearr_18758_18809[(1)] = (38));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18705 === (8))){
var inst_18606 = (state_18704[(8)]);
var inst_18624 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_18606);
var state_18704__$1 = state_18704;
var statearr_18759_18810 = state_18704__$1;
(statearr_18759_18810[(2)] = inst_18624);

(statearr_18759_18810[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__15837__auto___18764,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__15654__auto__,c__15837__auto___18764,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__15655__auto__ = null;
var cljs$core$async$mix_$_state_machine__15655__auto____0 = (function (){
var statearr_18760 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18760[(0)] = cljs$core$async$mix_$_state_machine__15655__auto__);

(statearr_18760[(1)] = (1));

return statearr_18760;
});
var cljs$core$async$mix_$_state_machine__15655__auto____1 = (function (state_18704){
while(true){
var ret_value__15656__auto__ = (function (){try{while(true){
var result__15657__auto__ = switch__15654__auto__(state_18704);
if(cljs.core.keyword_identical_QMARK_(result__15657__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15657__auto__;
}
break;
}
}catch (e18761){if((e18761 instanceof Object)){
var ex__15658__auto__ = e18761;
var statearr_18762_18811 = state_18704;
(statearr_18762_18811[(5)] = ex__15658__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18704);

return cljs.core.cst$kw$recur;
} else {
throw e18761;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15656__auto__,cljs.core.cst$kw$recur)){
var G__18812 = state_18704;
state_18704 = G__18812;
continue;
} else {
return ret_value__15656__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__15655__auto__ = function(state_18704){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__15655__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__15655__auto____1.call(this,state_18704);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__15655__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__15655__auto____0;
cljs$core$async$mix_$_state_machine__15655__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__15655__auto____1;
return cljs$core$async$mix_$_state_machine__15655__auto__;
})()
;})(switch__15654__auto__,c__15837__auto___18764,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__15839__auto__ = (function (){var statearr_18763 = (f__15838__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15838__auto__.cljs$core$IFn$_invoke$arity$0() : f__15838__auto__.call(null));
(statearr_18763[(6)] = c__15837__auto___18764);

return statearr_18763;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15839__auto__);
});})(c__15837__auto___18764,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4244__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4244__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4244__auto____$1.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4244__auto__.call(null,p,v,ch));
} else {
var m__4244__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4244__auto____$1.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__18814 = arguments.length;
switch (G__18814) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4244__auto__.call(null,p));
} else {
var m__4244__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(p) : m__4244__auto____$1.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4244__auto__.call(null,p,v));
} else {
var m__4244__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(p,v) : m__4244__auto____$1.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__18818 = arguments.length;
switch (G__18818) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__3949__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__3949__auto__,mults){
return (function (p1__18816_SHARP_){
if(cljs.core.truth_((p1__18816_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__18816_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__18816_SHARP_.call(null,topic)))){
return p1__18816_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__18816_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__3949__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18819 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18819 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta18820){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta18820 = meta18820;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async18819.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_18821,meta18820__$1){
var self__ = this;
var _18821__$1 = this;
return (new cljs.core.async.t_cljs$core$async18819(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta18820__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18819.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_18821){
var self__ = this;
var _18821__$1 = this;
return self__.meta18820;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18819.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18819.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18819.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18819.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18819.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5457__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5457__auto__)){
var m = temp__5457__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18819.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18819.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18819.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$topic_DASH_fn,cljs.core.cst$sym$buf_DASH_fn,cljs.core.cst$sym$mults,cljs.core.cst$sym$ensure_DASH_mult,cljs.core.cst$sym$meta18820], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18819.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18819.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18819";

cljs.core.async.t_cljs$core$async18819.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async18819");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18819.
 */
cljs.core.async.__GT_t_cljs$core$async18819 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async18819(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta18820){
return (new cljs.core.async.t_cljs$core$async18819(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta18820));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async18819(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__15837__auto___18939 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15837__auto___18939,mults,ensure_mult,p){
return (function (){
var f__15838__auto__ = (function (){var switch__15654__auto__ = ((function (c__15837__auto___18939,mults,ensure_mult,p){
return (function (state_18893){
var state_val_18894 = (state_18893[(1)]);
if((state_val_18894 === (7))){
var inst_18889 = (state_18893[(2)]);
var state_18893__$1 = state_18893;
var statearr_18895_18940 = state_18893__$1;
(statearr_18895_18940[(2)] = inst_18889);

(statearr_18895_18940[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18894 === (20))){
var state_18893__$1 = state_18893;
var statearr_18896_18941 = state_18893__$1;
(statearr_18896_18941[(2)] = null);

(statearr_18896_18941[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18894 === (1))){
var state_18893__$1 = state_18893;
var statearr_18897_18942 = state_18893__$1;
(statearr_18897_18942[(2)] = null);

(statearr_18897_18942[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18894 === (24))){
var inst_18872 = (state_18893[(7)]);
var inst_18881 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_18872);
var state_18893__$1 = state_18893;
var statearr_18898_18943 = state_18893__$1;
(statearr_18898_18943[(2)] = inst_18881);

(statearr_18898_18943[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18894 === (4))){
var inst_18824 = (state_18893[(8)]);
var inst_18824__$1 = (state_18893[(2)]);
var inst_18825 = (inst_18824__$1 == null);
var state_18893__$1 = (function (){var statearr_18899 = state_18893;
(statearr_18899[(8)] = inst_18824__$1);

return statearr_18899;
})();
if(cljs.core.truth_(inst_18825)){
var statearr_18900_18944 = state_18893__$1;
(statearr_18900_18944[(1)] = (5));

} else {
var statearr_18901_18945 = state_18893__$1;
(statearr_18901_18945[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18894 === (15))){
var inst_18866 = (state_18893[(2)]);
var state_18893__$1 = state_18893;
var statearr_18902_18946 = state_18893__$1;
(statearr_18902_18946[(2)] = inst_18866);

(statearr_18902_18946[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18894 === (21))){
var inst_18886 = (state_18893[(2)]);
var state_18893__$1 = (function (){var statearr_18903 = state_18893;
(statearr_18903[(9)] = inst_18886);

return statearr_18903;
})();
var statearr_18904_18947 = state_18893__$1;
(statearr_18904_18947[(2)] = null);

(statearr_18904_18947[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18894 === (13))){
var inst_18848 = (state_18893[(10)]);
var inst_18850 = cljs.core.chunked_seq_QMARK_(inst_18848);
var state_18893__$1 = state_18893;
if(inst_18850){
var statearr_18905_18948 = state_18893__$1;
(statearr_18905_18948[(1)] = (16));

} else {
var statearr_18906_18949 = state_18893__$1;
(statearr_18906_18949[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18894 === (22))){
var inst_18878 = (state_18893[(2)]);
var state_18893__$1 = state_18893;
if(cljs.core.truth_(inst_18878)){
var statearr_18907_18950 = state_18893__$1;
(statearr_18907_18950[(1)] = (23));

} else {
var statearr_18908_18951 = state_18893__$1;
(statearr_18908_18951[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18894 === (6))){
var inst_18874 = (state_18893[(11)]);
var inst_18824 = (state_18893[(8)]);
var inst_18872 = (state_18893[(7)]);
var inst_18872__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_18824) : topic_fn.call(null,inst_18824));
var inst_18873 = cljs.core.deref(mults);
var inst_18874__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18873,inst_18872__$1);
var state_18893__$1 = (function (){var statearr_18909 = state_18893;
(statearr_18909[(11)] = inst_18874__$1);

(statearr_18909[(7)] = inst_18872__$1);

return statearr_18909;
})();
if(cljs.core.truth_(inst_18874__$1)){
var statearr_18910_18952 = state_18893__$1;
(statearr_18910_18952[(1)] = (19));

} else {
var statearr_18911_18953 = state_18893__$1;
(statearr_18911_18953[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18894 === (25))){
var inst_18883 = (state_18893[(2)]);
var state_18893__$1 = state_18893;
var statearr_18912_18954 = state_18893__$1;
(statearr_18912_18954[(2)] = inst_18883);

(statearr_18912_18954[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18894 === (17))){
var inst_18848 = (state_18893[(10)]);
var inst_18857 = cljs.core.first(inst_18848);
var inst_18858 = cljs.core.async.muxch_STAR_(inst_18857);
var inst_18859 = cljs.core.async.close_BANG_(inst_18858);
var inst_18860 = cljs.core.next(inst_18848);
var inst_18834 = inst_18860;
var inst_18835 = null;
var inst_18836 = (0);
var inst_18837 = (0);
var state_18893__$1 = (function (){var statearr_18913 = state_18893;
(statearr_18913[(12)] = inst_18834);

(statearr_18913[(13)] = inst_18836);

(statearr_18913[(14)] = inst_18859);

(statearr_18913[(15)] = inst_18835);

(statearr_18913[(16)] = inst_18837);

return statearr_18913;
})();
var statearr_18914_18955 = state_18893__$1;
(statearr_18914_18955[(2)] = null);

(statearr_18914_18955[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18894 === (3))){
var inst_18891 = (state_18893[(2)]);
var state_18893__$1 = state_18893;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18893__$1,inst_18891);
} else {
if((state_val_18894 === (12))){
var inst_18868 = (state_18893[(2)]);
var state_18893__$1 = state_18893;
var statearr_18915_18956 = state_18893__$1;
(statearr_18915_18956[(2)] = inst_18868);

(statearr_18915_18956[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18894 === (2))){
var state_18893__$1 = state_18893;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18893__$1,(4),ch);
} else {
if((state_val_18894 === (23))){
var state_18893__$1 = state_18893;
var statearr_18916_18957 = state_18893__$1;
(statearr_18916_18957[(2)] = null);

(statearr_18916_18957[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18894 === (19))){
var inst_18874 = (state_18893[(11)]);
var inst_18824 = (state_18893[(8)]);
var inst_18876 = cljs.core.async.muxch_STAR_(inst_18874);
var state_18893__$1 = state_18893;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18893__$1,(22),inst_18876,inst_18824);
} else {
if((state_val_18894 === (11))){
var inst_18834 = (state_18893[(12)]);
var inst_18848 = (state_18893[(10)]);
var inst_18848__$1 = cljs.core.seq(inst_18834);
var state_18893__$1 = (function (){var statearr_18917 = state_18893;
(statearr_18917[(10)] = inst_18848__$1);

return statearr_18917;
})();
if(inst_18848__$1){
var statearr_18918_18958 = state_18893__$1;
(statearr_18918_18958[(1)] = (13));

} else {
var statearr_18919_18959 = state_18893__$1;
(statearr_18919_18959[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18894 === (9))){
var inst_18870 = (state_18893[(2)]);
var state_18893__$1 = state_18893;
var statearr_18920_18960 = state_18893__$1;
(statearr_18920_18960[(2)] = inst_18870);

(statearr_18920_18960[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18894 === (5))){
var inst_18831 = cljs.core.deref(mults);
var inst_18832 = cljs.core.vals(inst_18831);
var inst_18833 = cljs.core.seq(inst_18832);
var inst_18834 = inst_18833;
var inst_18835 = null;
var inst_18836 = (0);
var inst_18837 = (0);
var state_18893__$1 = (function (){var statearr_18921 = state_18893;
(statearr_18921[(12)] = inst_18834);

(statearr_18921[(13)] = inst_18836);

(statearr_18921[(15)] = inst_18835);

(statearr_18921[(16)] = inst_18837);

return statearr_18921;
})();
var statearr_18922_18961 = state_18893__$1;
(statearr_18922_18961[(2)] = null);

(statearr_18922_18961[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18894 === (14))){
var state_18893__$1 = state_18893;
var statearr_18926_18962 = state_18893__$1;
(statearr_18926_18962[(2)] = null);

(statearr_18926_18962[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18894 === (16))){
var inst_18848 = (state_18893[(10)]);
var inst_18852 = cljs.core.chunk_first(inst_18848);
var inst_18853 = cljs.core.chunk_rest(inst_18848);
var inst_18854 = cljs.core.count(inst_18852);
var inst_18834 = inst_18853;
var inst_18835 = inst_18852;
var inst_18836 = inst_18854;
var inst_18837 = (0);
var state_18893__$1 = (function (){var statearr_18927 = state_18893;
(statearr_18927[(12)] = inst_18834);

(statearr_18927[(13)] = inst_18836);

(statearr_18927[(15)] = inst_18835);

(statearr_18927[(16)] = inst_18837);

return statearr_18927;
})();
var statearr_18928_18963 = state_18893__$1;
(statearr_18928_18963[(2)] = null);

(statearr_18928_18963[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18894 === (10))){
var inst_18834 = (state_18893[(12)]);
var inst_18836 = (state_18893[(13)]);
var inst_18835 = (state_18893[(15)]);
var inst_18837 = (state_18893[(16)]);
var inst_18842 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_18835,inst_18837);
var inst_18843 = cljs.core.async.muxch_STAR_(inst_18842);
var inst_18844 = cljs.core.async.close_BANG_(inst_18843);
var inst_18845 = (inst_18837 + (1));
var tmp18923 = inst_18834;
var tmp18924 = inst_18836;
var tmp18925 = inst_18835;
var inst_18834__$1 = tmp18923;
var inst_18835__$1 = tmp18925;
var inst_18836__$1 = tmp18924;
var inst_18837__$1 = inst_18845;
var state_18893__$1 = (function (){var statearr_18929 = state_18893;
(statearr_18929[(12)] = inst_18834__$1);

(statearr_18929[(13)] = inst_18836__$1);

(statearr_18929[(15)] = inst_18835__$1);

(statearr_18929[(16)] = inst_18837__$1);

(statearr_18929[(17)] = inst_18844);

return statearr_18929;
})();
var statearr_18930_18964 = state_18893__$1;
(statearr_18930_18964[(2)] = null);

(statearr_18930_18964[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18894 === (18))){
var inst_18863 = (state_18893[(2)]);
var state_18893__$1 = state_18893;
var statearr_18931_18965 = state_18893__$1;
(statearr_18931_18965[(2)] = inst_18863);

(statearr_18931_18965[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18894 === (8))){
var inst_18836 = (state_18893[(13)]);
var inst_18837 = (state_18893[(16)]);
var inst_18839 = (inst_18837 < inst_18836);
var inst_18840 = inst_18839;
var state_18893__$1 = state_18893;
if(cljs.core.truth_(inst_18840)){
var statearr_18932_18966 = state_18893__$1;
(statearr_18932_18966[(1)] = (10));

} else {
var statearr_18933_18967 = state_18893__$1;
(statearr_18933_18967[(1)] = (11));

}

return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__15837__auto___18939,mults,ensure_mult,p))
;
return ((function (switch__15654__auto__,c__15837__auto___18939,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__15655__auto__ = null;
var cljs$core$async$state_machine__15655__auto____0 = (function (){
var statearr_18934 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18934[(0)] = cljs$core$async$state_machine__15655__auto__);

(statearr_18934[(1)] = (1));

return statearr_18934;
});
var cljs$core$async$state_machine__15655__auto____1 = (function (state_18893){
while(true){
var ret_value__15656__auto__ = (function (){try{while(true){
var result__15657__auto__ = switch__15654__auto__(state_18893);
if(cljs.core.keyword_identical_QMARK_(result__15657__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15657__auto__;
}
break;
}
}catch (e18935){if((e18935 instanceof Object)){
var ex__15658__auto__ = e18935;
var statearr_18936_18968 = state_18893;
(statearr_18936_18968[(5)] = ex__15658__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18893);

return cljs.core.cst$kw$recur;
} else {
throw e18935;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15656__auto__,cljs.core.cst$kw$recur)){
var G__18969 = state_18893;
state_18893 = G__18969;
continue;
} else {
return ret_value__15656__auto__;
}
break;
}
});
cljs$core$async$state_machine__15655__auto__ = function(state_18893){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15655__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15655__auto____1.call(this,state_18893);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15655__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15655__auto____0;
cljs$core$async$state_machine__15655__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15655__auto____1;
return cljs$core$async$state_machine__15655__auto__;
})()
;})(switch__15654__auto__,c__15837__auto___18939,mults,ensure_mult,p))
})();
var state__15839__auto__ = (function (){var statearr_18937 = (f__15838__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15838__auto__.cljs$core$IFn$_invoke$arity$0() : f__15838__auto__.call(null));
(statearr_18937[(6)] = c__15837__auto___18939);

return statearr_18937;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15839__auto__);
});})(c__15837__auto___18939,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__18971 = arguments.length;
switch (G__18971) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__18974 = arguments.length;
switch (G__18974) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__18977 = arguments.length;
switch (G__18977) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__15837__auto___19044 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15837__auto___19044,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__15838__auto__ = (function (){var switch__15654__auto__ = ((function (c__15837__auto___19044,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_19016){
var state_val_19017 = (state_19016[(1)]);
if((state_val_19017 === (7))){
var state_19016__$1 = state_19016;
var statearr_19018_19045 = state_19016__$1;
(statearr_19018_19045[(2)] = null);

(statearr_19018_19045[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19017 === (1))){
var state_19016__$1 = state_19016;
var statearr_19019_19046 = state_19016__$1;
(statearr_19019_19046[(2)] = null);

(statearr_19019_19046[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19017 === (4))){
var inst_18980 = (state_19016[(7)]);
var inst_18982 = (inst_18980 < cnt);
var state_19016__$1 = state_19016;
if(cljs.core.truth_(inst_18982)){
var statearr_19020_19047 = state_19016__$1;
(statearr_19020_19047[(1)] = (6));

} else {
var statearr_19021_19048 = state_19016__$1;
(statearr_19021_19048[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19017 === (15))){
var inst_19012 = (state_19016[(2)]);
var state_19016__$1 = state_19016;
var statearr_19022_19049 = state_19016__$1;
(statearr_19022_19049[(2)] = inst_19012);

(statearr_19022_19049[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19017 === (13))){
var inst_19005 = cljs.core.async.close_BANG_(out);
var state_19016__$1 = state_19016;
var statearr_19023_19050 = state_19016__$1;
(statearr_19023_19050[(2)] = inst_19005);

(statearr_19023_19050[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19017 === (6))){
var state_19016__$1 = state_19016;
var statearr_19024_19051 = state_19016__$1;
(statearr_19024_19051[(2)] = null);

(statearr_19024_19051[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19017 === (3))){
var inst_19014 = (state_19016[(2)]);
var state_19016__$1 = state_19016;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19016__$1,inst_19014);
} else {
if((state_val_19017 === (12))){
var inst_19002 = (state_19016[(8)]);
var inst_19002__$1 = (state_19016[(2)]);
var inst_19003 = cljs.core.some(cljs.core.nil_QMARK_,inst_19002__$1);
var state_19016__$1 = (function (){var statearr_19025 = state_19016;
(statearr_19025[(8)] = inst_19002__$1);

return statearr_19025;
})();
if(cljs.core.truth_(inst_19003)){
var statearr_19026_19052 = state_19016__$1;
(statearr_19026_19052[(1)] = (13));

} else {
var statearr_19027_19053 = state_19016__$1;
(statearr_19027_19053[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19017 === (2))){
var inst_18979 = cljs.core.reset_BANG_(dctr,cnt);
var inst_18980 = (0);
var state_19016__$1 = (function (){var statearr_19028 = state_19016;
(statearr_19028[(7)] = inst_18980);

(statearr_19028[(9)] = inst_18979);

return statearr_19028;
})();
var statearr_19029_19054 = state_19016__$1;
(statearr_19029_19054[(2)] = null);

(statearr_19029_19054[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19017 === (11))){
var inst_18980 = (state_19016[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_19016,(10),Object,null,(9));
var inst_18989 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_18980) : chs__$1.call(null,inst_18980));
var inst_18990 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_18980) : done.call(null,inst_18980));
var inst_18991 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_18989,inst_18990);
var state_19016__$1 = state_19016;
var statearr_19030_19055 = state_19016__$1;
(statearr_19030_19055[(2)] = inst_18991);


cljs.core.async.impl.ioc_helpers.process_exception(state_19016__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_19017 === (9))){
var inst_18980 = (state_19016[(7)]);
var inst_18993 = (state_19016[(2)]);
var inst_18994 = (inst_18980 + (1));
var inst_18980__$1 = inst_18994;
var state_19016__$1 = (function (){var statearr_19031 = state_19016;
(statearr_19031[(10)] = inst_18993);

(statearr_19031[(7)] = inst_18980__$1);

return statearr_19031;
})();
var statearr_19032_19056 = state_19016__$1;
(statearr_19032_19056[(2)] = null);

(statearr_19032_19056[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19017 === (5))){
var inst_19000 = (state_19016[(2)]);
var state_19016__$1 = (function (){var statearr_19033 = state_19016;
(statearr_19033[(11)] = inst_19000);

return statearr_19033;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19016__$1,(12),dchan);
} else {
if((state_val_19017 === (14))){
var inst_19002 = (state_19016[(8)]);
var inst_19007 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_19002);
var state_19016__$1 = state_19016;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19016__$1,(16),out,inst_19007);
} else {
if((state_val_19017 === (16))){
var inst_19009 = (state_19016[(2)]);
var state_19016__$1 = (function (){var statearr_19034 = state_19016;
(statearr_19034[(12)] = inst_19009);

return statearr_19034;
})();
var statearr_19035_19057 = state_19016__$1;
(statearr_19035_19057[(2)] = null);

(statearr_19035_19057[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19017 === (10))){
var inst_18984 = (state_19016[(2)]);
var inst_18985 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_19016__$1 = (function (){var statearr_19036 = state_19016;
(statearr_19036[(13)] = inst_18984);

return statearr_19036;
})();
var statearr_19037_19058 = state_19016__$1;
(statearr_19037_19058[(2)] = inst_18985);


cljs.core.async.impl.ioc_helpers.process_exception(state_19016__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_19017 === (8))){
var inst_18998 = (state_19016[(2)]);
var state_19016__$1 = state_19016;
var statearr_19038_19059 = state_19016__$1;
(statearr_19038_19059[(2)] = inst_18998);

(statearr_19038_19059[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__15837__auto___19044,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__15654__auto__,c__15837__auto___19044,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__15655__auto__ = null;
var cljs$core$async$state_machine__15655__auto____0 = (function (){
var statearr_19039 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19039[(0)] = cljs$core$async$state_machine__15655__auto__);

(statearr_19039[(1)] = (1));

return statearr_19039;
});
var cljs$core$async$state_machine__15655__auto____1 = (function (state_19016){
while(true){
var ret_value__15656__auto__ = (function (){try{while(true){
var result__15657__auto__ = switch__15654__auto__(state_19016);
if(cljs.core.keyword_identical_QMARK_(result__15657__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15657__auto__;
}
break;
}
}catch (e19040){if((e19040 instanceof Object)){
var ex__15658__auto__ = e19040;
var statearr_19041_19060 = state_19016;
(statearr_19041_19060[(5)] = ex__15658__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19016);

return cljs.core.cst$kw$recur;
} else {
throw e19040;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15656__auto__,cljs.core.cst$kw$recur)){
var G__19061 = state_19016;
state_19016 = G__19061;
continue;
} else {
return ret_value__15656__auto__;
}
break;
}
});
cljs$core$async$state_machine__15655__auto__ = function(state_19016){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15655__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15655__auto____1.call(this,state_19016);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15655__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15655__auto____0;
cljs$core$async$state_machine__15655__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15655__auto____1;
return cljs$core$async$state_machine__15655__auto__;
})()
;})(switch__15654__auto__,c__15837__auto___19044,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__15839__auto__ = (function (){var statearr_19042 = (f__15838__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15838__auto__.cljs$core$IFn$_invoke$arity$0() : f__15838__auto__.call(null));
(statearr_19042[(6)] = c__15837__auto___19044);

return statearr_19042;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15839__auto__);
});})(c__15837__auto___19044,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__19064 = arguments.length;
switch (G__19064) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15837__auto___19118 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15837__auto___19118,out){
return (function (){
var f__15838__auto__ = (function (){var switch__15654__auto__ = ((function (c__15837__auto___19118,out){
return (function (state_19096){
var state_val_19097 = (state_19096[(1)]);
if((state_val_19097 === (7))){
var inst_19075 = (state_19096[(7)]);
var inst_19076 = (state_19096[(8)]);
var inst_19075__$1 = (state_19096[(2)]);
var inst_19076__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19075__$1,(0),null);
var inst_19077 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19075__$1,(1),null);
var inst_19078 = (inst_19076__$1 == null);
var state_19096__$1 = (function (){var statearr_19098 = state_19096;
(statearr_19098[(9)] = inst_19077);

(statearr_19098[(7)] = inst_19075__$1);

(statearr_19098[(8)] = inst_19076__$1);

return statearr_19098;
})();
if(cljs.core.truth_(inst_19078)){
var statearr_19099_19119 = state_19096__$1;
(statearr_19099_19119[(1)] = (8));

} else {
var statearr_19100_19120 = state_19096__$1;
(statearr_19100_19120[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19097 === (1))){
var inst_19065 = cljs.core.vec(chs);
var inst_19066 = inst_19065;
var state_19096__$1 = (function (){var statearr_19101 = state_19096;
(statearr_19101[(10)] = inst_19066);

return statearr_19101;
})();
var statearr_19102_19121 = state_19096__$1;
(statearr_19102_19121[(2)] = null);

(statearr_19102_19121[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19097 === (4))){
var inst_19066 = (state_19096[(10)]);
var state_19096__$1 = state_19096;
return cljs.core.async.ioc_alts_BANG_(state_19096__$1,(7),inst_19066);
} else {
if((state_val_19097 === (6))){
var inst_19092 = (state_19096[(2)]);
var state_19096__$1 = state_19096;
var statearr_19103_19122 = state_19096__$1;
(statearr_19103_19122[(2)] = inst_19092);

(statearr_19103_19122[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19097 === (3))){
var inst_19094 = (state_19096[(2)]);
var state_19096__$1 = state_19096;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19096__$1,inst_19094);
} else {
if((state_val_19097 === (2))){
var inst_19066 = (state_19096[(10)]);
var inst_19068 = cljs.core.count(inst_19066);
var inst_19069 = (inst_19068 > (0));
var state_19096__$1 = state_19096;
if(cljs.core.truth_(inst_19069)){
var statearr_19105_19123 = state_19096__$1;
(statearr_19105_19123[(1)] = (4));

} else {
var statearr_19106_19124 = state_19096__$1;
(statearr_19106_19124[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19097 === (11))){
var inst_19066 = (state_19096[(10)]);
var inst_19085 = (state_19096[(2)]);
var tmp19104 = inst_19066;
var inst_19066__$1 = tmp19104;
var state_19096__$1 = (function (){var statearr_19107 = state_19096;
(statearr_19107[(10)] = inst_19066__$1);

(statearr_19107[(11)] = inst_19085);

return statearr_19107;
})();
var statearr_19108_19125 = state_19096__$1;
(statearr_19108_19125[(2)] = null);

(statearr_19108_19125[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19097 === (9))){
var inst_19076 = (state_19096[(8)]);
var state_19096__$1 = state_19096;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19096__$1,(11),out,inst_19076);
} else {
if((state_val_19097 === (5))){
var inst_19090 = cljs.core.async.close_BANG_(out);
var state_19096__$1 = state_19096;
var statearr_19109_19126 = state_19096__$1;
(statearr_19109_19126[(2)] = inst_19090);

(statearr_19109_19126[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19097 === (10))){
var inst_19088 = (state_19096[(2)]);
var state_19096__$1 = state_19096;
var statearr_19110_19127 = state_19096__$1;
(statearr_19110_19127[(2)] = inst_19088);

(statearr_19110_19127[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19097 === (8))){
var inst_19077 = (state_19096[(9)]);
var inst_19075 = (state_19096[(7)]);
var inst_19066 = (state_19096[(10)]);
var inst_19076 = (state_19096[(8)]);
var inst_19080 = (function (){var cs = inst_19066;
var vec__19071 = inst_19075;
var v = inst_19076;
var c = inst_19077;
return ((function (cs,vec__19071,v,c,inst_19077,inst_19075,inst_19066,inst_19076,state_val_19097,c__15837__auto___19118,out){
return (function (p1__19062_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__19062_SHARP_);
});
;})(cs,vec__19071,v,c,inst_19077,inst_19075,inst_19066,inst_19076,state_val_19097,c__15837__auto___19118,out))
})();
var inst_19081 = cljs.core.filterv(inst_19080,inst_19066);
var inst_19066__$1 = inst_19081;
var state_19096__$1 = (function (){var statearr_19111 = state_19096;
(statearr_19111[(10)] = inst_19066__$1);

return statearr_19111;
})();
var statearr_19112_19128 = state_19096__$1;
(statearr_19112_19128[(2)] = null);

(statearr_19112_19128[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__15837__auto___19118,out))
;
return ((function (switch__15654__auto__,c__15837__auto___19118,out){
return (function() {
var cljs$core$async$state_machine__15655__auto__ = null;
var cljs$core$async$state_machine__15655__auto____0 = (function (){
var statearr_19113 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19113[(0)] = cljs$core$async$state_machine__15655__auto__);

(statearr_19113[(1)] = (1));

return statearr_19113;
});
var cljs$core$async$state_machine__15655__auto____1 = (function (state_19096){
while(true){
var ret_value__15656__auto__ = (function (){try{while(true){
var result__15657__auto__ = switch__15654__auto__(state_19096);
if(cljs.core.keyword_identical_QMARK_(result__15657__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15657__auto__;
}
break;
}
}catch (e19114){if((e19114 instanceof Object)){
var ex__15658__auto__ = e19114;
var statearr_19115_19129 = state_19096;
(statearr_19115_19129[(5)] = ex__15658__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19096);

return cljs.core.cst$kw$recur;
} else {
throw e19114;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15656__auto__,cljs.core.cst$kw$recur)){
var G__19130 = state_19096;
state_19096 = G__19130;
continue;
} else {
return ret_value__15656__auto__;
}
break;
}
});
cljs$core$async$state_machine__15655__auto__ = function(state_19096){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15655__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15655__auto____1.call(this,state_19096);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15655__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15655__auto____0;
cljs$core$async$state_machine__15655__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15655__auto____1;
return cljs$core$async$state_machine__15655__auto__;
})()
;})(switch__15654__auto__,c__15837__auto___19118,out))
})();
var state__15839__auto__ = (function (){var statearr_19116 = (f__15838__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15838__auto__.cljs$core$IFn$_invoke$arity$0() : f__15838__auto__.call(null));
(statearr_19116[(6)] = c__15837__auto___19118);

return statearr_19116;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15839__auto__);
});})(c__15837__auto___19118,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__19132 = arguments.length;
switch (G__19132) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15837__auto___19177 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15837__auto___19177,out){
return (function (){
var f__15838__auto__ = (function (){var switch__15654__auto__ = ((function (c__15837__auto___19177,out){
return (function (state_19156){
var state_val_19157 = (state_19156[(1)]);
if((state_val_19157 === (7))){
var inst_19138 = (state_19156[(7)]);
var inst_19138__$1 = (state_19156[(2)]);
var inst_19139 = (inst_19138__$1 == null);
var inst_19140 = cljs.core.not(inst_19139);
var state_19156__$1 = (function (){var statearr_19158 = state_19156;
(statearr_19158[(7)] = inst_19138__$1);

return statearr_19158;
})();
if(inst_19140){
var statearr_19159_19178 = state_19156__$1;
(statearr_19159_19178[(1)] = (8));

} else {
var statearr_19160_19179 = state_19156__$1;
(statearr_19160_19179[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19157 === (1))){
var inst_19133 = (0);
var state_19156__$1 = (function (){var statearr_19161 = state_19156;
(statearr_19161[(8)] = inst_19133);

return statearr_19161;
})();
var statearr_19162_19180 = state_19156__$1;
(statearr_19162_19180[(2)] = null);

(statearr_19162_19180[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19157 === (4))){
var state_19156__$1 = state_19156;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19156__$1,(7),ch);
} else {
if((state_val_19157 === (6))){
var inst_19151 = (state_19156[(2)]);
var state_19156__$1 = state_19156;
var statearr_19163_19181 = state_19156__$1;
(statearr_19163_19181[(2)] = inst_19151);

(statearr_19163_19181[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19157 === (3))){
var inst_19153 = (state_19156[(2)]);
var inst_19154 = cljs.core.async.close_BANG_(out);
var state_19156__$1 = (function (){var statearr_19164 = state_19156;
(statearr_19164[(9)] = inst_19153);

return statearr_19164;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_19156__$1,inst_19154);
} else {
if((state_val_19157 === (2))){
var inst_19133 = (state_19156[(8)]);
var inst_19135 = (inst_19133 < n);
var state_19156__$1 = state_19156;
if(cljs.core.truth_(inst_19135)){
var statearr_19165_19182 = state_19156__$1;
(statearr_19165_19182[(1)] = (4));

} else {
var statearr_19166_19183 = state_19156__$1;
(statearr_19166_19183[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19157 === (11))){
var inst_19133 = (state_19156[(8)]);
var inst_19143 = (state_19156[(2)]);
var inst_19144 = (inst_19133 + (1));
var inst_19133__$1 = inst_19144;
var state_19156__$1 = (function (){var statearr_19167 = state_19156;
(statearr_19167[(10)] = inst_19143);

(statearr_19167[(8)] = inst_19133__$1);

return statearr_19167;
})();
var statearr_19168_19184 = state_19156__$1;
(statearr_19168_19184[(2)] = null);

(statearr_19168_19184[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19157 === (9))){
var state_19156__$1 = state_19156;
var statearr_19169_19185 = state_19156__$1;
(statearr_19169_19185[(2)] = null);

(statearr_19169_19185[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19157 === (5))){
var state_19156__$1 = state_19156;
var statearr_19170_19186 = state_19156__$1;
(statearr_19170_19186[(2)] = null);

(statearr_19170_19186[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19157 === (10))){
var inst_19148 = (state_19156[(2)]);
var state_19156__$1 = state_19156;
var statearr_19171_19187 = state_19156__$1;
(statearr_19171_19187[(2)] = inst_19148);

(statearr_19171_19187[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19157 === (8))){
var inst_19138 = (state_19156[(7)]);
var state_19156__$1 = state_19156;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19156__$1,(11),out,inst_19138);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__15837__auto___19177,out))
;
return ((function (switch__15654__auto__,c__15837__auto___19177,out){
return (function() {
var cljs$core$async$state_machine__15655__auto__ = null;
var cljs$core$async$state_machine__15655__auto____0 = (function (){
var statearr_19172 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19172[(0)] = cljs$core$async$state_machine__15655__auto__);

(statearr_19172[(1)] = (1));

return statearr_19172;
});
var cljs$core$async$state_machine__15655__auto____1 = (function (state_19156){
while(true){
var ret_value__15656__auto__ = (function (){try{while(true){
var result__15657__auto__ = switch__15654__auto__(state_19156);
if(cljs.core.keyword_identical_QMARK_(result__15657__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15657__auto__;
}
break;
}
}catch (e19173){if((e19173 instanceof Object)){
var ex__15658__auto__ = e19173;
var statearr_19174_19188 = state_19156;
(statearr_19174_19188[(5)] = ex__15658__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19156);

return cljs.core.cst$kw$recur;
} else {
throw e19173;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15656__auto__,cljs.core.cst$kw$recur)){
var G__19189 = state_19156;
state_19156 = G__19189;
continue;
} else {
return ret_value__15656__auto__;
}
break;
}
});
cljs$core$async$state_machine__15655__auto__ = function(state_19156){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15655__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15655__auto____1.call(this,state_19156);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15655__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15655__auto____0;
cljs$core$async$state_machine__15655__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15655__auto____1;
return cljs$core$async$state_machine__15655__auto__;
})()
;})(switch__15654__auto__,c__15837__auto___19177,out))
})();
var state__15839__auto__ = (function (){var statearr_19175 = (f__15838__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15838__auto__.cljs$core$IFn$_invoke$arity$0() : f__15838__auto__.call(null));
(statearr_19175[(6)] = c__15837__auto___19177);

return statearr_19175;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15839__auto__);
});})(c__15837__auto___19177,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19191 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19191 = (function (f,ch,meta19192){
this.f = f;
this.ch = ch;
this.meta19192 = meta19192;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async19191.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19193,meta19192__$1){
var self__ = this;
var _19193__$1 = this;
return (new cljs.core.async.t_cljs$core$async19191(self__.f,self__.ch,meta19192__$1));
});

cljs.core.async.t_cljs$core$async19191.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19193){
var self__ = this;
var _19193__$1 = this;
return self__.meta19192;
});

cljs.core.async.t_cljs$core$async19191.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19191.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async19191.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async19191.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19191.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19194 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19194 = (function (f,ch,meta19192,_,fn1,meta19195){
this.f = f;
this.ch = ch;
this.meta19192 = meta19192;
this._ = _;
this.fn1 = fn1;
this.meta19195 = meta19195;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async19194.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_19196,meta19195__$1){
var self__ = this;
var _19196__$1 = this;
return (new cljs.core.async.t_cljs$core$async19194(self__.f,self__.ch,self__.meta19192,self__._,self__.fn1,meta19195__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async19194.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_19196){
var self__ = this;
var _19196__$1 = this;
return self__.meta19195;
});})(___$1))
;

cljs.core.async.t_cljs$core$async19194.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19194.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async19194.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async19194.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__19190_SHARP_){
var G__19197 = (((p1__19190_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__19190_SHARP_) : self__.f.call(null,p1__19190_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__19197) : f1.call(null,G__19197));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async19194.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta19192,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core$async_SLASH_t_cljs$core$async19191], null)),cljs.core.cst$sym$fn1,cljs.core.cst$sym$meta19195], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async19194.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19194.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19194";

cljs.core.async.t_cljs$core$async19194.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async19194");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19194.
 */
cljs.core.async.__GT_t_cljs$core$async19194 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async19194(f__$1,ch__$1,meta19192__$1,___$2,fn1__$1,meta19195){
return (new cljs.core.async.t_cljs$core$async19194(f__$1,ch__$1,meta19192__$1,___$2,fn1__$1,meta19195));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async19194(self__.f,self__.ch,self__.meta19192,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__3938__auto__ = ret;
if(cljs.core.truth_(and__3938__auto__)){
return !((cljs.core.deref(ret) == null));
} else {
return and__3938__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__19198 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__19198) : self__.f.call(null,G__19198));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async19191.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19191.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async19191.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta19192], null);
});

cljs.core.async.t_cljs$core$async19191.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19191.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19191";

cljs.core.async.t_cljs$core$async19191.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async19191");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19191.
 */
cljs.core.async.__GT_t_cljs$core$async19191 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async19191(f__$1,ch__$1,meta19192){
return (new cljs.core.async.t_cljs$core$async19191(f__$1,ch__$1,meta19192));
});

}

return (new cljs.core.async.t_cljs$core$async19191(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19199 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19199 = (function (f,ch,meta19200){
this.f = f;
this.ch = ch;
this.meta19200 = meta19200;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async19199.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19201,meta19200__$1){
var self__ = this;
var _19201__$1 = this;
return (new cljs.core.async.t_cljs$core$async19199(self__.f,self__.ch,meta19200__$1));
});

cljs.core.async.t_cljs$core$async19199.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19201){
var self__ = this;
var _19201__$1 = this;
return self__.meta19200;
});

cljs.core.async.t_cljs$core$async19199.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19199.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async19199.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19199.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async19199.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19199.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async19199.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta19200], null);
});

cljs.core.async.t_cljs$core$async19199.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19199.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19199";

cljs.core.async.t_cljs$core$async19199.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async19199");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19199.
 */
cljs.core.async.__GT_t_cljs$core$async19199 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async19199(f__$1,ch__$1,meta19200){
return (new cljs.core.async.t_cljs$core$async19199(f__$1,ch__$1,meta19200));
});

}

return (new cljs.core.async.t_cljs$core$async19199(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19202 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19202 = (function (p,ch,meta19203){
this.p = p;
this.ch = ch;
this.meta19203 = meta19203;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async19202.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19204,meta19203__$1){
var self__ = this;
var _19204__$1 = this;
return (new cljs.core.async.t_cljs$core$async19202(self__.p,self__.ch,meta19203__$1));
});

cljs.core.async.t_cljs$core$async19202.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19204){
var self__ = this;
var _19204__$1 = this;
return self__.meta19203;
});

cljs.core.async.t_cljs$core$async19202.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19202.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async19202.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async19202.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19202.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async19202.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19202.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async19202.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta19203], null);
});

cljs.core.async.t_cljs$core$async19202.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19202.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19202";

cljs.core.async.t_cljs$core$async19202.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async19202");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19202.
 */
cljs.core.async.__GT_t_cljs$core$async19202 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async19202(p__$1,ch__$1,meta19203){
return (new cljs.core.async.t_cljs$core$async19202(p__$1,ch__$1,meta19203));
});

}

return (new cljs.core.async.t_cljs$core$async19202(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__19206 = arguments.length;
switch (G__19206) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15837__auto___19246 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15837__auto___19246,out){
return (function (){
var f__15838__auto__ = (function (){var switch__15654__auto__ = ((function (c__15837__auto___19246,out){
return (function (state_19227){
var state_val_19228 = (state_19227[(1)]);
if((state_val_19228 === (7))){
var inst_19223 = (state_19227[(2)]);
var state_19227__$1 = state_19227;
var statearr_19229_19247 = state_19227__$1;
(statearr_19229_19247[(2)] = inst_19223);

(statearr_19229_19247[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19228 === (1))){
var state_19227__$1 = state_19227;
var statearr_19230_19248 = state_19227__$1;
(statearr_19230_19248[(2)] = null);

(statearr_19230_19248[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19228 === (4))){
var inst_19209 = (state_19227[(7)]);
var inst_19209__$1 = (state_19227[(2)]);
var inst_19210 = (inst_19209__$1 == null);
var state_19227__$1 = (function (){var statearr_19231 = state_19227;
(statearr_19231[(7)] = inst_19209__$1);

return statearr_19231;
})();
if(cljs.core.truth_(inst_19210)){
var statearr_19232_19249 = state_19227__$1;
(statearr_19232_19249[(1)] = (5));

} else {
var statearr_19233_19250 = state_19227__$1;
(statearr_19233_19250[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19228 === (6))){
var inst_19209 = (state_19227[(7)]);
var inst_19214 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_19209) : p.call(null,inst_19209));
var state_19227__$1 = state_19227;
if(cljs.core.truth_(inst_19214)){
var statearr_19234_19251 = state_19227__$1;
(statearr_19234_19251[(1)] = (8));

} else {
var statearr_19235_19252 = state_19227__$1;
(statearr_19235_19252[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19228 === (3))){
var inst_19225 = (state_19227[(2)]);
var state_19227__$1 = state_19227;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19227__$1,inst_19225);
} else {
if((state_val_19228 === (2))){
var state_19227__$1 = state_19227;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19227__$1,(4),ch);
} else {
if((state_val_19228 === (11))){
var inst_19217 = (state_19227[(2)]);
var state_19227__$1 = state_19227;
var statearr_19236_19253 = state_19227__$1;
(statearr_19236_19253[(2)] = inst_19217);

(statearr_19236_19253[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19228 === (9))){
var state_19227__$1 = state_19227;
var statearr_19237_19254 = state_19227__$1;
(statearr_19237_19254[(2)] = null);

(statearr_19237_19254[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19228 === (5))){
var inst_19212 = cljs.core.async.close_BANG_(out);
var state_19227__$1 = state_19227;
var statearr_19238_19255 = state_19227__$1;
(statearr_19238_19255[(2)] = inst_19212);

(statearr_19238_19255[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19228 === (10))){
var inst_19220 = (state_19227[(2)]);
var state_19227__$1 = (function (){var statearr_19239 = state_19227;
(statearr_19239[(8)] = inst_19220);

return statearr_19239;
})();
var statearr_19240_19256 = state_19227__$1;
(statearr_19240_19256[(2)] = null);

(statearr_19240_19256[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19228 === (8))){
var inst_19209 = (state_19227[(7)]);
var state_19227__$1 = state_19227;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19227__$1,(11),out,inst_19209);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__15837__auto___19246,out))
;
return ((function (switch__15654__auto__,c__15837__auto___19246,out){
return (function() {
var cljs$core$async$state_machine__15655__auto__ = null;
var cljs$core$async$state_machine__15655__auto____0 = (function (){
var statearr_19241 = [null,null,null,null,null,null,null,null,null];
(statearr_19241[(0)] = cljs$core$async$state_machine__15655__auto__);

(statearr_19241[(1)] = (1));

return statearr_19241;
});
var cljs$core$async$state_machine__15655__auto____1 = (function (state_19227){
while(true){
var ret_value__15656__auto__ = (function (){try{while(true){
var result__15657__auto__ = switch__15654__auto__(state_19227);
if(cljs.core.keyword_identical_QMARK_(result__15657__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15657__auto__;
}
break;
}
}catch (e19242){if((e19242 instanceof Object)){
var ex__15658__auto__ = e19242;
var statearr_19243_19257 = state_19227;
(statearr_19243_19257[(5)] = ex__15658__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19227);

return cljs.core.cst$kw$recur;
} else {
throw e19242;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15656__auto__,cljs.core.cst$kw$recur)){
var G__19258 = state_19227;
state_19227 = G__19258;
continue;
} else {
return ret_value__15656__auto__;
}
break;
}
});
cljs$core$async$state_machine__15655__auto__ = function(state_19227){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15655__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15655__auto____1.call(this,state_19227);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15655__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15655__auto____0;
cljs$core$async$state_machine__15655__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15655__auto____1;
return cljs$core$async$state_machine__15655__auto__;
})()
;})(switch__15654__auto__,c__15837__auto___19246,out))
})();
var state__15839__auto__ = (function (){var statearr_19244 = (f__15838__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15838__auto__.cljs$core$IFn$_invoke$arity$0() : f__15838__auto__.call(null));
(statearr_19244[(6)] = c__15837__auto___19246);

return statearr_19244;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15839__auto__);
});})(c__15837__auto___19246,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__19260 = arguments.length;
switch (G__19260) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__15837__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15837__auto__){
return (function (){
var f__15838__auto__ = (function (){var switch__15654__auto__ = ((function (c__15837__auto__){
return (function (state_19323){
var state_val_19324 = (state_19323[(1)]);
if((state_val_19324 === (7))){
var inst_19319 = (state_19323[(2)]);
var state_19323__$1 = state_19323;
var statearr_19325_19363 = state_19323__$1;
(statearr_19325_19363[(2)] = inst_19319);

(statearr_19325_19363[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19324 === (20))){
var inst_19289 = (state_19323[(7)]);
var inst_19300 = (state_19323[(2)]);
var inst_19301 = cljs.core.next(inst_19289);
var inst_19275 = inst_19301;
var inst_19276 = null;
var inst_19277 = (0);
var inst_19278 = (0);
var state_19323__$1 = (function (){var statearr_19326 = state_19323;
(statearr_19326[(8)] = inst_19300);

(statearr_19326[(9)] = inst_19276);

(statearr_19326[(10)] = inst_19277);

(statearr_19326[(11)] = inst_19275);

(statearr_19326[(12)] = inst_19278);

return statearr_19326;
})();
var statearr_19327_19364 = state_19323__$1;
(statearr_19327_19364[(2)] = null);

(statearr_19327_19364[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19324 === (1))){
var state_19323__$1 = state_19323;
var statearr_19328_19365 = state_19323__$1;
(statearr_19328_19365[(2)] = null);

(statearr_19328_19365[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19324 === (4))){
var inst_19264 = (state_19323[(13)]);
var inst_19264__$1 = (state_19323[(2)]);
var inst_19265 = (inst_19264__$1 == null);
var state_19323__$1 = (function (){var statearr_19329 = state_19323;
(statearr_19329[(13)] = inst_19264__$1);

return statearr_19329;
})();
if(cljs.core.truth_(inst_19265)){
var statearr_19330_19366 = state_19323__$1;
(statearr_19330_19366[(1)] = (5));

} else {
var statearr_19331_19367 = state_19323__$1;
(statearr_19331_19367[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19324 === (15))){
var state_19323__$1 = state_19323;
var statearr_19335_19368 = state_19323__$1;
(statearr_19335_19368[(2)] = null);

(statearr_19335_19368[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19324 === (21))){
var state_19323__$1 = state_19323;
var statearr_19336_19369 = state_19323__$1;
(statearr_19336_19369[(2)] = null);

(statearr_19336_19369[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19324 === (13))){
var inst_19276 = (state_19323[(9)]);
var inst_19277 = (state_19323[(10)]);
var inst_19275 = (state_19323[(11)]);
var inst_19278 = (state_19323[(12)]);
var inst_19285 = (state_19323[(2)]);
var inst_19286 = (inst_19278 + (1));
var tmp19332 = inst_19276;
var tmp19333 = inst_19277;
var tmp19334 = inst_19275;
var inst_19275__$1 = tmp19334;
var inst_19276__$1 = tmp19332;
var inst_19277__$1 = tmp19333;
var inst_19278__$1 = inst_19286;
var state_19323__$1 = (function (){var statearr_19337 = state_19323;
(statearr_19337[(9)] = inst_19276__$1);

(statearr_19337[(10)] = inst_19277__$1);

(statearr_19337[(11)] = inst_19275__$1);

(statearr_19337[(14)] = inst_19285);

(statearr_19337[(12)] = inst_19278__$1);

return statearr_19337;
})();
var statearr_19338_19370 = state_19323__$1;
(statearr_19338_19370[(2)] = null);

(statearr_19338_19370[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19324 === (22))){
var state_19323__$1 = state_19323;
var statearr_19339_19371 = state_19323__$1;
(statearr_19339_19371[(2)] = null);

(statearr_19339_19371[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19324 === (6))){
var inst_19264 = (state_19323[(13)]);
var inst_19273 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_19264) : f.call(null,inst_19264));
var inst_19274 = cljs.core.seq(inst_19273);
var inst_19275 = inst_19274;
var inst_19276 = null;
var inst_19277 = (0);
var inst_19278 = (0);
var state_19323__$1 = (function (){var statearr_19340 = state_19323;
(statearr_19340[(9)] = inst_19276);

(statearr_19340[(10)] = inst_19277);

(statearr_19340[(11)] = inst_19275);

(statearr_19340[(12)] = inst_19278);

return statearr_19340;
})();
var statearr_19341_19372 = state_19323__$1;
(statearr_19341_19372[(2)] = null);

(statearr_19341_19372[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19324 === (17))){
var inst_19289 = (state_19323[(7)]);
var inst_19293 = cljs.core.chunk_first(inst_19289);
var inst_19294 = cljs.core.chunk_rest(inst_19289);
var inst_19295 = cljs.core.count(inst_19293);
var inst_19275 = inst_19294;
var inst_19276 = inst_19293;
var inst_19277 = inst_19295;
var inst_19278 = (0);
var state_19323__$1 = (function (){var statearr_19342 = state_19323;
(statearr_19342[(9)] = inst_19276);

(statearr_19342[(10)] = inst_19277);

(statearr_19342[(11)] = inst_19275);

(statearr_19342[(12)] = inst_19278);

return statearr_19342;
})();
var statearr_19343_19373 = state_19323__$1;
(statearr_19343_19373[(2)] = null);

(statearr_19343_19373[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19324 === (3))){
var inst_19321 = (state_19323[(2)]);
var state_19323__$1 = state_19323;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19323__$1,inst_19321);
} else {
if((state_val_19324 === (12))){
var inst_19309 = (state_19323[(2)]);
var state_19323__$1 = state_19323;
var statearr_19344_19374 = state_19323__$1;
(statearr_19344_19374[(2)] = inst_19309);

(statearr_19344_19374[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19324 === (2))){
var state_19323__$1 = state_19323;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19323__$1,(4),in$);
} else {
if((state_val_19324 === (23))){
var inst_19317 = (state_19323[(2)]);
var state_19323__$1 = state_19323;
var statearr_19345_19375 = state_19323__$1;
(statearr_19345_19375[(2)] = inst_19317);

(statearr_19345_19375[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19324 === (19))){
var inst_19304 = (state_19323[(2)]);
var state_19323__$1 = state_19323;
var statearr_19346_19376 = state_19323__$1;
(statearr_19346_19376[(2)] = inst_19304);

(statearr_19346_19376[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19324 === (11))){
var inst_19275 = (state_19323[(11)]);
var inst_19289 = (state_19323[(7)]);
var inst_19289__$1 = cljs.core.seq(inst_19275);
var state_19323__$1 = (function (){var statearr_19347 = state_19323;
(statearr_19347[(7)] = inst_19289__$1);

return statearr_19347;
})();
if(inst_19289__$1){
var statearr_19348_19377 = state_19323__$1;
(statearr_19348_19377[(1)] = (14));

} else {
var statearr_19349_19378 = state_19323__$1;
(statearr_19349_19378[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19324 === (9))){
var inst_19311 = (state_19323[(2)]);
var inst_19312 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_19323__$1 = (function (){var statearr_19350 = state_19323;
(statearr_19350[(15)] = inst_19311);

return statearr_19350;
})();
if(cljs.core.truth_(inst_19312)){
var statearr_19351_19379 = state_19323__$1;
(statearr_19351_19379[(1)] = (21));

} else {
var statearr_19352_19380 = state_19323__$1;
(statearr_19352_19380[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19324 === (5))){
var inst_19267 = cljs.core.async.close_BANG_(out);
var state_19323__$1 = state_19323;
var statearr_19353_19381 = state_19323__$1;
(statearr_19353_19381[(2)] = inst_19267);

(statearr_19353_19381[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19324 === (14))){
var inst_19289 = (state_19323[(7)]);
var inst_19291 = cljs.core.chunked_seq_QMARK_(inst_19289);
var state_19323__$1 = state_19323;
if(inst_19291){
var statearr_19354_19382 = state_19323__$1;
(statearr_19354_19382[(1)] = (17));

} else {
var statearr_19355_19383 = state_19323__$1;
(statearr_19355_19383[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19324 === (16))){
var inst_19307 = (state_19323[(2)]);
var state_19323__$1 = state_19323;
var statearr_19356_19384 = state_19323__$1;
(statearr_19356_19384[(2)] = inst_19307);

(statearr_19356_19384[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19324 === (10))){
var inst_19276 = (state_19323[(9)]);
var inst_19278 = (state_19323[(12)]);
var inst_19283 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_19276,inst_19278);
var state_19323__$1 = state_19323;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19323__$1,(13),out,inst_19283);
} else {
if((state_val_19324 === (18))){
var inst_19289 = (state_19323[(7)]);
var inst_19298 = cljs.core.first(inst_19289);
var state_19323__$1 = state_19323;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19323__$1,(20),out,inst_19298);
} else {
if((state_val_19324 === (8))){
var inst_19277 = (state_19323[(10)]);
var inst_19278 = (state_19323[(12)]);
var inst_19280 = (inst_19278 < inst_19277);
var inst_19281 = inst_19280;
var state_19323__$1 = state_19323;
if(cljs.core.truth_(inst_19281)){
var statearr_19357_19385 = state_19323__$1;
(statearr_19357_19385[(1)] = (10));

} else {
var statearr_19358_19386 = state_19323__$1;
(statearr_19358_19386[(1)] = (11));

}

return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__15837__auto__))
;
return ((function (switch__15654__auto__,c__15837__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__15655__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__15655__auto____0 = (function (){
var statearr_19359 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19359[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__15655__auto__);

(statearr_19359[(1)] = (1));

return statearr_19359;
});
var cljs$core$async$mapcat_STAR__$_state_machine__15655__auto____1 = (function (state_19323){
while(true){
var ret_value__15656__auto__ = (function (){try{while(true){
var result__15657__auto__ = switch__15654__auto__(state_19323);
if(cljs.core.keyword_identical_QMARK_(result__15657__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15657__auto__;
}
break;
}
}catch (e19360){if((e19360 instanceof Object)){
var ex__15658__auto__ = e19360;
var statearr_19361_19387 = state_19323;
(statearr_19361_19387[(5)] = ex__15658__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19323);

return cljs.core.cst$kw$recur;
} else {
throw e19360;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15656__auto__,cljs.core.cst$kw$recur)){
var G__19388 = state_19323;
state_19323 = G__19388;
continue;
} else {
return ret_value__15656__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__15655__auto__ = function(state_19323){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__15655__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__15655__auto____1.call(this,state_19323);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__15655__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__15655__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__15655__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__15655__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__15655__auto__;
})()
;})(switch__15654__auto__,c__15837__auto__))
})();
var state__15839__auto__ = (function (){var statearr_19362 = (f__15838__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15838__auto__.cljs$core$IFn$_invoke$arity$0() : f__15838__auto__.call(null));
(statearr_19362[(6)] = c__15837__auto__);

return statearr_19362;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15839__auto__);
});})(c__15837__auto__))
);

return c__15837__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__19390 = arguments.length;
switch (G__19390) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__19393 = arguments.length;
switch (G__19393) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__19396 = arguments.length;
switch (G__19396) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15837__auto___19443 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15837__auto___19443,out){
return (function (){
var f__15838__auto__ = (function (){var switch__15654__auto__ = ((function (c__15837__auto___19443,out){
return (function (state_19420){
var state_val_19421 = (state_19420[(1)]);
if((state_val_19421 === (7))){
var inst_19415 = (state_19420[(2)]);
var state_19420__$1 = state_19420;
var statearr_19422_19444 = state_19420__$1;
(statearr_19422_19444[(2)] = inst_19415);

(statearr_19422_19444[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19421 === (1))){
var inst_19397 = null;
var state_19420__$1 = (function (){var statearr_19423 = state_19420;
(statearr_19423[(7)] = inst_19397);

return statearr_19423;
})();
var statearr_19424_19445 = state_19420__$1;
(statearr_19424_19445[(2)] = null);

(statearr_19424_19445[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19421 === (4))){
var inst_19400 = (state_19420[(8)]);
var inst_19400__$1 = (state_19420[(2)]);
var inst_19401 = (inst_19400__$1 == null);
var inst_19402 = cljs.core.not(inst_19401);
var state_19420__$1 = (function (){var statearr_19425 = state_19420;
(statearr_19425[(8)] = inst_19400__$1);

return statearr_19425;
})();
if(inst_19402){
var statearr_19426_19446 = state_19420__$1;
(statearr_19426_19446[(1)] = (5));

} else {
var statearr_19427_19447 = state_19420__$1;
(statearr_19427_19447[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19421 === (6))){
var state_19420__$1 = state_19420;
var statearr_19428_19448 = state_19420__$1;
(statearr_19428_19448[(2)] = null);

(statearr_19428_19448[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19421 === (3))){
var inst_19417 = (state_19420[(2)]);
var inst_19418 = cljs.core.async.close_BANG_(out);
var state_19420__$1 = (function (){var statearr_19429 = state_19420;
(statearr_19429[(9)] = inst_19417);

return statearr_19429;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_19420__$1,inst_19418);
} else {
if((state_val_19421 === (2))){
var state_19420__$1 = state_19420;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19420__$1,(4),ch);
} else {
if((state_val_19421 === (11))){
var inst_19400 = (state_19420[(8)]);
var inst_19409 = (state_19420[(2)]);
var inst_19397 = inst_19400;
var state_19420__$1 = (function (){var statearr_19430 = state_19420;
(statearr_19430[(10)] = inst_19409);

(statearr_19430[(7)] = inst_19397);

return statearr_19430;
})();
var statearr_19431_19449 = state_19420__$1;
(statearr_19431_19449[(2)] = null);

(statearr_19431_19449[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19421 === (9))){
var inst_19400 = (state_19420[(8)]);
var state_19420__$1 = state_19420;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19420__$1,(11),out,inst_19400);
} else {
if((state_val_19421 === (5))){
var inst_19400 = (state_19420[(8)]);
var inst_19397 = (state_19420[(7)]);
var inst_19404 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_19400,inst_19397);
var state_19420__$1 = state_19420;
if(inst_19404){
var statearr_19433_19450 = state_19420__$1;
(statearr_19433_19450[(1)] = (8));

} else {
var statearr_19434_19451 = state_19420__$1;
(statearr_19434_19451[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19421 === (10))){
var inst_19412 = (state_19420[(2)]);
var state_19420__$1 = state_19420;
var statearr_19435_19452 = state_19420__$1;
(statearr_19435_19452[(2)] = inst_19412);

(statearr_19435_19452[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19421 === (8))){
var inst_19397 = (state_19420[(7)]);
var tmp19432 = inst_19397;
var inst_19397__$1 = tmp19432;
var state_19420__$1 = (function (){var statearr_19436 = state_19420;
(statearr_19436[(7)] = inst_19397__$1);

return statearr_19436;
})();
var statearr_19437_19453 = state_19420__$1;
(statearr_19437_19453[(2)] = null);

(statearr_19437_19453[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__15837__auto___19443,out))
;
return ((function (switch__15654__auto__,c__15837__auto___19443,out){
return (function() {
var cljs$core$async$state_machine__15655__auto__ = null;
var cljs$core$async$state_machine__15655__auto____0 = (function (){
var statearr_19438 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19438[(0)] = cljs$core$async$state_machine__15655__auto__);

(statearr_19438[(1)] = (1));

return statearr_19438;
});
var cljs$core$async$state_machine__15655__auto____1 = (function (state_19420){
while(true){
var ret_value__15656__auto__ = (function (){try{while(true){
var result__15657__auto__ = switch__15654__auto__(state_19420);
if(cljs.core.keyword_identical_QMARK_(result__15657__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15657__auto__;
}
break;
}
}catch (e19439){if((e19439 instanceof Object)){
var ex__15658__auto__ = e19439;
var statearr_19440_19454 = state_19420;
(statearr_19440_19454[(5)] = ex__15658__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19420);

return cljs.core.cst$kw$recur;
} else {
throw e19439;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15656__auto__,cljs.core.cst$kw$recur)){
var G__19455 = state_19420;
state_19420 = G__19455;
continue;
} else {
return ret_value__15656__auto__;
}
break;
}
});
cljs$core$async$state_machine__15655__auto__ = function(state_19420){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15655__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15655__auto____1.call(this,state_19420);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15655__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15655__auto____0;
cljs$core$async$state_machine__15655__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15655__auto____1;
return cljs$core$async$state_machine__15655__auto__;
})()
;})(switch__15654__auto__,c__15837__auto___19443,out))
})();
var state__15839__auto__ = (function (){var statearr_19441 = (f__15838__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15838__auto__.cljs$core$IFn$_invoke$arity$0() : f__15838__auto__.call(null));
(statearr_19441[(6)] = c__15837__auto___19443);

return statearr_19441;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15839__auto__);
});})(c__15837__auto___19443,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__19457 = arguments.length;
switch (G__19457) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15837__auto___19523 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15837__auto___19523,out){
return (function (){
var f__15838__auto__ = (function (){var switch__15654__auto__ = ((function (c__15837__auto___19523,out){
return (function (state_19495){
var state_val_19496 = (state_19495[(1)]);
if((state_val_19496 === (7))){
var inst_19491 = (state_19495[(2)]);
var state_19495__$1 = state_19495;
var statearr_19497_19524 = state_19495__$1;
(statearr_19497_19524[(2)] = inst_19491);

(statearr_19497_19524[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19496 === (1))){
var inst_19458 = (new Array(n));
var inst_19459 = inst_19458;
var inst_19460 = (0);
var state_19495__$1 = (function (){var statearr_19498 = state_19495;
(statearr_19498[(7)] = inst_19459);

(statearr_19498[(8)] = inst_19460);

return statearr_19498;
})();
var statearr_19499_19525 = state_19495__$1;
(statearr_19499_19525[(2)] = null);

(statearr_19499_19525[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19496 === (4))){
var inst_19463 = (state_19495[(9)]);
var inst_19463__$1 = (state_19495[(2)]);
var inst_19464 = (inst_19463__$1 == null);
var inst_19465 = cljs.core.not(inst_19464);
var state_19495__$1 = (function (){var statearr_19500 = state_19495;
(statearr_19500[(9)] = inst_19463__$1);

return statearr_19500;
})();
if(inst_19465){
var statearr_19501_19526 = state_19495__$1;
(statearr_19501_19526[(1)] = (5));

} else {
var statearr_19502_19527 = state_19495__$1;
(statearr_19502_19527[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19496 === (15))){
var inst_19485 = (state_19495[(2)]);
var state_19495__$1 = state_19495;
var statearr_19503_19528 = state_19495__$1;
(statearr_19503_19528[(2)] = inst_19485);

(statearr_19503_19528[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19496 === (13))){
var state_19495__$1 = state_19495;
var statearr_19504_19529 = state_19495__$1;
(statearr_19504_19529[(2)] = null);

(statearr_19504_19529[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19496 === (6))){
var inst_19460 = (state_19495[(8)]);
var inst_19481 = (inst_19460 > (0));
var state_19495__$1 = state_19495;
if(cljs.core.truth_(inst_19481)){
var statearr_19505_19530 = state_19495__$1;
(statearr_19505_19530[(1)] = (12));

} else {
var statearr_19506_19531 = state_19495__$1;
(statearr_19506_19531[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19496 === (3))){
var inst_19493 = (state_19495[(2)]);
var state_19495__$1 = state_19495;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19495__$1,inst_19493);
} else {
if((state_val_19496 === (12))){
var inst_19459 = (state_19495[(7)]);
var inst_19483 = cljs.core.vec(inst_19459);
var state_19495__$1 = state_19495;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19495__$1,(15),out,inst_19483);
} else {
if((state_val_19496 === (2))){
var state_19495__$1 = state_19495;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19495__$1,(4),ch);
} else {
if((state_val_19496 === (11))){
var inst_19475 = (state_19495[(2)]);
var inst_19476 = (new Array(n));
var inst_19459 = inst_19476;
var inst_19460 = (0);
var state_19495__$1 = (function (){var statearr_19507 = state_19495;
(statearr_19507[(7)] = inst_19459);

(statearr_19507[(10)] = inst_19475);

(statearr_19507[(8)] = inst_19460);

return statearr_19507;
})();
var statearr_19508_19532 = state_19495__$1;
(statearr_19508_19532[(2)] = null);

(statearr_19508_19532[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19496 === (9))){
var inst_19459 = (state_19495[(7)]);
var inst_19473 = cljs.core.vec(inst_19459);
var state_19495__$1 = state_19495;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19495__$1,(11),out,inst_19473);
} else {
if((state_val_19496 === (5))){
var inst_19459 = (state_19495[(7)]);
var inst_19463 = (state_19495[(9)]);
var inst_19468 = (state_19495[(11)]);
var inst_19460 = (state_19495[(8)]);
var inst_19467 = (inst_19459[inst_19460] = inst_19463);
var inst_19468__$1 = (inst_19460 + (1));
var inst_19469 = (inst_19468__$1 < n);
var state_19495__$1 = (function (){var statearr_19509 = state_19495;
(statearr_19509[(12)] = inst_19467);

(statearr_19509[(11)] = inst_19468__$1);

return statearr_19509;
})();
if(cljs.core.truth_(inst_19469)){
var statearr_19510_19533 = state_19495__$1;
(statearr_19510_19533[(1)] = (8));

} else {
var statearr_19511_19534 = state_19495__$1;
(statearr_19511_19534[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19496 === (14))){
var inst_19488 = (state_19495[(2)]);
var inst_19489 = cljs.core.async.close_BANG_(out);
var state_19495__$1 = (function (){var statearr_19513 = state_19495;
(statearr_19513[(13)] = inst_19488);

return statearr_19513;
})();
var statearr_19514_19535 = state_19495__$1;
(statearr_19514_19535[(2)] = inst_19489);

(statearr_19514_19535[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19496 === (10))){
var inst_19479 = (state_19495[(2)]);
var state_19495__$1 = state_19495;
var statearr_19515_19536 = state_19495__$1;
(statearr_19515_19536[(2)] = inst_19479);

(statearr_19515_19536[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19496 === (8))){
var inst_19459 = (state_19495[(7)]);
var inst_19468 = (state_19495[(11)]);
var tmp19512 = inst_19459;
var inst_19459__$1 = tmp19512;
var inst_19460 = inst_19468;
var state_19495__$1 = (function (){var statearr_19516 = state_19495;
(statearr_19516[(7)] = inst_19459__$1);

(statearr_19516[(8)] = inst_19460);

return statearr_19516;
})();
var statearr_19517_19537 = state_19495__$1;
(statearr_19517_19537[(2)] = null);

(statearr_19517_19537[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__15837__auto___19523,out))
;
return ((function (switch__15654__auto__,c__15837__auto___19523,out){
return (function() {
var cljs$core$async$state_machine__15655__auto__ = null;
var cljs$core$async$state_machine__15655__auto____0 = (function (){
var statearr_19518 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19518[(0)] = cljs$core$async$state_machine__15655__auto__);

(statearr_19518[(1)] = (1));

return statearr_19518;
});
var cljs$core$async$state_machine__15655__auto____1 = (function (state_19495){
while(true){
var ret_value__15656__auto__ = (function (){try{while(true){
var result__15657__auto__ = switch__15654__auto__(state_19495);
if(cljs.core.keyword_identical_QMARK_(result__15657__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15657__auto__;
}
break;
}
}catch (e19519){if((e19519 instanceof Object)){
var ex__15658__auto__ = e19519;
var statearr_19520_19538 = state_19495;
(statearr_19520_19538[(5)] = ex__15658__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19495);

return cljs.core.cst$kw$recur;
} else {
throw e19519;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15656__auto__,cljs.core.cst$kw$recur)){
var G__19539 = state_19495;
state_19495 = G__19539;
continue;
} else {
return ret_value__15656__auto__;
}
break;
}
});
cljs$core$async$state_machine__15655__auto__ = function(state_19495){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15655__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15655__auto____1.call(this,state_19495);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15655__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15655__auto____0;
cljs$core$async$state_machine__15655__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15655__auto____1;
return cljs$core$async$state_machine__15655__auto__;
})()
;})(switch__15654__auto__,c__15837__auto___19523,out))
})();
var state__15839__auto__ = (function (){var statearr_19521 = (f__15838__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15838__auto__.cljs$core$IFn$_invoke$arity$0() : f__15838__auto__.call(null));
(statearr_19521[(6)] = c__15837__auto___19523);

return statearr_19521;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15839__auto__);
});})(c__15837__auto___19523,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__19541 = arguments.length;
switch (G__19541) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15837__auto___19611 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15837__auto___19611,out){
return (function (){
var f__15838__auto__ = (function (){var switch__15654__auto__ = ((function (c__15837__auto___19611,out){
return (function (state_19583){
var state_val_19584 = (state_19583[(1)]);
if((state_val_19584 === (7))){
var inst_19579 = (state_19583[(2)]);
var state_19583__$1 = state_19583;
var statearr_19585_19612 = state_19583__$1;
(statearr_19585_19612[(2)] = inst_19579);

(statearr_19585_19612[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19584 === (1))){
var inst_19542 = [];
var inst_19543 = inst_19542;
var inst_19544 = cljs.core.cst$kw$cljs$core$async_SLASH_nothing;
var state_19583__$1 = (function (){var statearr_19586 = state_19583;
(statearr_19586[(7)] = inst_19544);

(statearr_19586[(8)] = inst_19543);

return statearr_19586;
})();
var statearr_19587_19613 = state_19583__$1;
(statearr_19587_19613[(2)] = null);

(statearr_19587_19613[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19584 === (4))){
var inst_19547 = (state_19583[(9)]);
var inst_19547__$1 = (state_19583[(2)]);
var inst_19548 = (inst_19547__$1 == null);
var inst_19549 = cljs.core.not(inst_19548);
var state_19583__$1 = (function (){var statearr_19588 = state_19583;
(statearr_19588[(9)] = inst_19547__$1);

return statearr_19588;
})();
if(inst_19549){
var statearr_19589_19614 = state_19583__$1;
(statearr_19589_19614[(1)] = (5));

} else {
var statearr_19590_19615 = state_19583__$1;
(statearr_19590_19615[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19584 === (15))){
var inst_19573 = (state_19583[(2)]);
var state_19583__$1 = state_19583;
var statearr_19591_19616 = state_19583__$1;
(statearr_19591_19616[(2)] = inst_19573);

(statearr_19591_19616[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19584 === (13))){
var state_19583__$1 = state_19583;
var statearr_19592_19617 = state_19583__$1;
(statearr_19592_19617[(2)] = null);

(statearr_19592_19617[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19584 === (6))){
var inst_19543 = (state_19583[(8)]);
var inst_19568 = inst_19543.length;
var inst_19569 = (inst_19568 > (0));
var state_19583__$1 = state_19583;
if(cljs.core.truth_(inst_19569)){
var statearr_19593_19618 = state_19583__$1;
(statearr_19593_19618[(1)] = (12));

} else {
var statearr_19594_19619 = state_19583__$1;
(statearr_19594_19619[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19584 === (3))){
var inst_19581 = (state_19583[(2)]);
var state_19583__$1 = state_19583;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19583__$1,inst_19581);
} else {
if((state_val_19584 === (12))){
var inst_19543 = (state_19583[(8)]);
var inst_19571 = cljs.core.vec(inst_19543);
var state_19583__$1 = state_19583;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19583__$1,(15),out,inst_19571);
} else {
if((state_val_19584 === (2))){
var state_19583__$1 = state_19583;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19583__$1,(4),ch);
} else {
if((state_val_19584 === (11))){
var inst_19551 = (state_19583[(10)]);
var inst_19547 = (state_19583[(9)]);
var inst_19561 = (state_19583[(2)]);
var inst_19562 = [];
var inst_19563 = inst_19562.push(inst_19547);
var inst_19543 = inst_19562;
var inst_19544 = inst_19551;
var state_19583__$1 = (function (){var statearr_19595 = state_19583;
(statearr_19595[(11)] = inst_19561);

(statearr_19595[(12)] = inst_19563);

(statearr_19595[(7)] = inst_19544);

(statearr_19595[(8)] = inst_19543);

return statearr_19595;
})();
var statearr_19596_19620 = state_19583__$1;
(statearr_19596_19620[(2)] = null);

(statearr_19596_19620[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19584 === (9))){
var inst_19543 = (state_19583[(8)]);
var inst_19559 = cljs.core.vec(inst_19543);
var state_19583__$1 = state_19583;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19583__$1,(11),out,inst_19559);
} else {
if((state_val_19584 === (5))){
var inst_19544 = (state_19583[(7)]);
var inst_19551 = (state_19583[(10)]);
var inst_19547 = (state_19583[(9)]);
var inst_19551__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_19547) : f.call(null,inst_19547));
var inst_19552 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_19551__$1,inst_19544);
var inst_19553 = cljs.core.keyword_identical_QMARK_(inst_19544,cljs.core.cst$kw$cljs$core$async_SLASH_nothing);
var inst_19554 = ((inst_19552) || (inst_19553));
var state_19583__$1 = (function (){var statearr_19597 = state_19583;
(statearr_19597[(10)] = inst_19551__$1);

return statearr_19597;
})();
if(cljs.core.truth_(inst_19554)){
var statearr_19598_19621 = state_19583__$1;
(statearr_19598_19621[(1)] = (8));

} else {
var statearr_19599_19622 = state_19583__$1;
(statearr_19599_19622[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19584 === (14))){
var inst_19576 = (state_19583[(2)]);
var inst_19577 = cljs.core.async.close_BANG_(out);
var state_19583__$1 = (function (){var statearr_19601 = state_19583;
(statearr_19601[(13)] = inst_19576);

return statearr_19601;
})();
var statearr_19602_19623 = state_19583__$1;
(statearr_19602_19623[(2)] = inst_19577);

(statearr_19602_19623[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19584 === (10))){
var inst_19566 = (state_19583[(2)]);
var state_19583__$1 = state_19583;
var statearr_19603_19624 = state_19583__$1;
(statearr_19603_19624[(2)] = inst_19566);

(statearr_19603_19624[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19584 === (8))){
var inst_19543 = (state_19583[(8)]);
var inst_19551 = (state_19583[(10)]);
var inst_19547 = (state_19583[(9)]);
var inst_19556 = inst_19543.push(inst_19547);
var tmp19600 = inst_19543;
var inst_19543__$1 = tmp19600;
var inst_19544 = inst_19551;
var state_19583__$1 = (function (){var statearr_19604 = state_19583;
(statearr_19604[(14)] = inst_19556);

(statearr_19604[(7)] = inst_19544);

(statearr_19604[(8)] = inst_19543__$1);

return statearr_19604;
})();
var statearr_19605_19625 = state_19583__$1;
(statearr_19605_19625[(2)] = null);

(statearr_19605_19625[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__15837__auto___19611,out))
;
return ((function (switch__15654__auto__,c__15837__auto___19611,out){
return (function() {
var cljs$core$async$state_machine__15655__auto__ = null;
var cljs$core$async$state_machine__15655__auto____0 = (function (){
var statearr_19606 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19606[(0)] = cljs$core$async$state_machine__15655__auto__);

(statearr_19606[(1)] = (1));

return statearr_19606;
});
var cljs$core$async$state_machine__15655__auto____1 = (function (state_19583){
while(true){
var ret_value__15656__auto__ = (function (){try{while(true){
var result__15657__auto__ = switch__15654__auto__(state_19583);
if(cljs.core.keyword_identical_QMARK_(result__15657__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15657__auto__;
}
break;
}
}catch (e19607){if((e19607 instanceof Object)){
var ex__15658__auto__ = e19607;
var statearr_19608_19626 = state_19583;
(statearr_19608_19626[(5)] = ex__15658__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19583);

return cljs.core.cst$kw$recur;
} else {
throw e19607;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15656__auto__,cljs.core.cst$kw$recur)){
var G__19627 = state_19583;
state_19583 = G__19627;
continue;
} else {
return ret_value__15656__auto__;
}
break;
}
});
cljs$core$async$state_machine__15655__auto__ = function(state_19583){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15655__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15655__auto____1.call(this,state_19583);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15655__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15655__auto____0;
cljs$core$async$state_machine__15655__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15655__auto____1;
return cljs$core$async$state_machine__15655__auto__;
})()
;})(switch__15654__auto__,c__15837__auto___19611,out))
})();
var state__15839__auto__ = (function (){var statearr_19609 = (f__15838__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15838__auto__.cljs$core$IFn$_invoke$arity$0() : f__15838__auto__.call(null));
(statearr_19609[(6)] = c__15837__auto___19611);

return statearr_19609;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15839__auto__);
});})(c__15837__auto___19611,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

