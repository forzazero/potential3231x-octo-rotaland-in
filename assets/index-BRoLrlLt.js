(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var Md={exports:{}},jo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var i_;function EM(){if(i_)return jo;i_=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,c){var u=null;if(c!==void 0&&(u=""+c),l.key!==void 0&&(u=""+l.key),"key"in l){c={};for(var h in l)h!=="key"&&(c[h]=l[h])}else c=l;return l=c.ref,{$$typeof:s,type:r,key:u,ref:l!==void 0?l:null,props:c}}return jo.Fragment=e,jo.jsx=i,jo.jsxs=i,jo}var a_;function bM(){return a_||(a_=1,Md.exports=EM()),Md.exports}var B=bM(),yd={exports:{}},ot={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var s_;function TM(){if(s_)return ot;s_=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),u=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),g=Symbol.iterator;function S(N){return N===null||typeof N!="object"?null:(N=g&&N[g]||N["@@iterator"],typeof N=="function"?N:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,y={};function M(N,Z,Ee){this.props=N,this.context=Z,this.refs=y,this.updater=Ee||b}M.prototype.isReactComponent={},M.prototype.setState=function(N,Z){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,Z,"setState")},M.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function F(){}F.prototype=M.prototype;function z(N,Z,Ee){this.props=N,this.context=Z,this.refs=y,this.updater=Ee||b}var C=z.prototype=new F;C.constructor=z,w(C,M.prototype),C.isPureReactComponent=!0;var O=Array.isArray;function U(){}var P={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function L(N,Z,Ee){var Ce=Ee.ref;return{$$typeof:s,type:N,key:Z,ref:Ce!==void 0?Ce:null,props:Ee}}function Y(N,Z){return L(N.type,Z,N.props)}function V(N){return typeof N=="object"&&N!==null&&N.$$typeof===s}function Q(N){var Z={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(Ee){return Z[Ee]})}var pe=/\/+/g;function de(N,Z){return typeof N=="object"&&N!==null&&N.key!=null?Q(""+N.key):Z.toString(36)}function J(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(U,U):(N.status="pending",N.then(function(Z){N.status==="pending"&&(N.status="fulfilled",N.value=Z)},function(Z){N.status==="pending"&&(N.status="rejected",N.reason=Z)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function I(N,Z,Ee,Ce,Le){var ie=typeof N;(ie==="undefined"||ie==="boolean")&&(N=null);var Se=!1;if(N===null)Se=!0;else switch(ie){case"bigint":case"string":case"number":Se=!0;break;case"object":switch(N.$$typeof){case s:case e:Se=!0;break;case _:return Se=N._init,I(Se(N._payload),Z,Ee,Ce,Le)}}if(Se)return Le=Le(N),Se=Ce===""?"."+de(N,0):Ce,O(Le)?(Ee="",Se!=null&&(Ee=Se.replace(pe,"$&/")+"/"),I(Le,Z,Ee,"",function(nt){return nt})):Le!=null&&(V(Le)&&(Le=Y(Le,Ee+(Le.key==null||N&&N.key===Le.key?"":(""+Le.key).replace(pe,"$&/")+"/")+Se)),Z.push(Le)),1;Se=0;var Me=Ce===""?".":Ce+":";if(O(N))for(var ze=0;ze<N.length;ze++)Ce=N[ze],ie=Me+de(Ce,ze),Se+=I(Ce,Z,Ee,ie,Le);else if(ze=S(N),typeof ze=="function")for(N=ze.call(N),ze=0;!(Ce=N.next()).done;)Ce=Ce.value,ie=Me+de(Ce,ze++),Se+=I(Ce,Z,Ee,ie,Le);else if(ie==="object"){if(typeof N.then=="function")return I(J(N),Z,Ee,Ce,Le);throw Z=String(N),Error("Objects are not valid as a React child (found: "+(Z==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":Z)+"). If you meant to render a collection of children, use an array instead.")}return Se}function G(N,Z,Ee){if(N==null)return N;var Ce=[],Le=0;return I(N,Ce,"","",function(ie){return Z.call(Ee,ie,Le++)}),Ce}function ee(N){if(N._status===-1){var Z=N._result;Z=Z(),Z.then(function(Ee){(N._status===0||N._status===-1)&&(N._status=1,N._result=Ee)},function(Ee){(N._status===0||N._status===-1)&&(N._status=2,N._result=Ee)}),N._status===-1&&(N._status=0,N._result=Z)}if(N._status===1)return N._result.default;throw N._result}var _e=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Z=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent(Z))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)},be={map:G,forEach:function(N,Z,Ee){G(N,function(){Z.apply(this,arguments)},Ee)},count:function(N){var Z=0;return G(N,function(){Z++}),Z},toArray:function(N){return G(N,function(Z){return Z})||[]},only:function(N){if(!V(N))throw Error("React.Children.only expected to receive a single React element child.");return N}};return ot.Activity=v,ot.Children=be,ot.Component=M,ot.Fragment=i,ot.Profiler=l,ot.PureComponent=z,ot.StrictMode=r,ot.Suspense=p,ot.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=P,ot.__COMPILER_RUNTIME={__proto__:null,c:function(N){return P.H.useMemoCache(N)}},ot.cache=function(N){return function(){return N.apply(null,arguments)}},ot.cacheSignal=function(){return null},ot.cloneElement=function(N,Z,Ee){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var Ce=w({},N.props),Le=N.key;if(Z!=null)for(ie in Z.key!==void 0&&(Le=""+Z.key),Z)!T.call(Z,ie)||ie==="key"||ie==="__self"||ie==="__source"||ie==="ref"&&Z.ref===void 0||(Ce[ie]=Z[ie]);var ie=arguments.length-2;if(ie===1)Ce.children=Ee;else if(1<ie){for(var Se=Array(ie),Me=0;Me<ie;Me++)Se[Me]=arguments[Me+2];Ce.children=Se}return L(N.type,Le,Ce)},ot.createContext=function(N){return N={$$typeof:u,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:c,_context:N},N},ot.createElement=function(N,Z,Ee){var Ce,Le={},ie=null;if(Z!=null)for(Ce in Z.key!==void 0&&(ie=""+Z.key),Z)T.call(Z,Ce)&&Ce!=="key"&&Ce!=="__self"&&Ce!=="__source"&&(Le[Ce]=Z[Ce]);var Se=arguments.length-2;if(Se===1)Le.children=Ee;else if(1<Se){for(var Me=Array(Se),ze=0;ze<Se;ze++)Me[ze]=arguments[ze+2];Le.children=Me}if(N&&N.defaultProps)for(Ce in Se=N.defaultProps,Se)Le[Ce]===void 0&&(Le[Ce]=Se[Ce]);return L(N,ie,Le)},ot.createRef=function(){return{current:null}},ot.forwardRef=function(N){return{$$typeof:h,render:N}},ot.isValidElement=V,ot.lazy=function(N){return{$$typeof:_,_payload:{_status:-1,_result:N},_init:ee}},ot.memo=function(N,Z){return{$$typeof:m,type:N,compare:Z===void 0?null:Z}},ot.startTransition=function(N){var Z=P.T,Ee={};P.T=Ee;try{var Ce=N(),Le=P.S;Le!==null&&Le(Ee,Ce),typeof Ce=="object"&&Ce!==null&&typeof Ce.then=="function"&&Ce.then(U,_e)}catch(ie){_e(ie)}finally{Z!==null&&Ee.types!==null&&(Z.types=Ee.types),P.T=Z}},ot.unstable_useCacheRefresh=function(){return P.H.useCacheRefresh()},ot.use=function(N){return P.H.use(N)},ot.useActionState=function(N,Z,Ee){return P.H.useActionState(N,Z,Ee)},ot.useCallback=function(N,Z){return P.H.useCallback(N,Z)},ot.useContext=function(N){return P.H.useContext(N)},ot.useDebugValue=function(){},ot.useDeferredValue=function(N,Z){return P.H.useDeferredValue(N,Z)},ot.useEffect=function(N,Z){return P.H.useEffect(N,Z)},ot.useEffectEvent=function(N){return P.H.useEffectEvent(N)},ot.useId=function(){return P.H.useId()},ot.useImperativeHandle=function(N,Z,Ee){return P.H.useImperativeHandle(N,Z,Ee)},ot.useInsertionEffect=function(N,Z){return P.H.useInsertionEffect(N,Z)},ot.useLayoutEffect=function(N,Z){return P.H.useLayoutEffect(N,Z)},ot.useMemo=function(N,Z){return P.H.useMemo(N,Z)},ot.useOptimistic=function(N,Z){return P.H.useOptimistic(N,Z)},ot.useReducer=function(N,Z,Ee){return P.H.useReducer(N,Z,Ee)},ot.useRef=function(N){return P.H.useRef(N)},ot.useState=function(N){return P.H.useState(N)},ot.useSyncExternalStore=function(N,Z,Ee){return P.H.useSyncExternalStore(N,Z,Ee)},ot.useTransition=function(){return P.H.useTransition()},ot.version="19.2.7",ot}var r_;function sp(){return r_||(r_=1,yd.exports=TM()),yd.exports}var $t=sp(),Ed={exports:{}},Qo={},bd={exports:{}},Td={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var o_;function AM(){return o_||(o_=1,(function(s){function e(I,G){var ee=I.length;I.push(G);e:for(;0<ee;){var _e=ee-1>>>1,be=I[_e];if(0<l(be,G))I[_e]=G,I[ee]=be,ee=_e;else break e}}function i(I){return I.length===0?null:I[0]}function r(I){if(I.length===0)return null;var G=I[0],ee=I.pop();if(ee!==G){I[0]=ee;e:for(var _e=0,be=I.length,N=be>>>1;_e<N;){var Z=2*(_e+1)-1,Ee=I[Z],Ce=Z+1,Le=I[Ce];if(0>l(Ee,ee))Ce<be&&0>l(Le,Ee)?(I[_e]=Le,I[Ce]=ee,_e=Ce):(I[_e]=Ee,I[Z]=ee,_e=Z);else if(Ce<be&&0>l(Le,ee))I[_e]=Le,I[Ce]=ee,_e=Ce;else break e}}return G}function l(I,G){var ee=I.sortIndex-G.sortIndex;return ee!==0?ee:I.id-G.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var u=Date,h=u.now();s.unstable_now=function(){return u.now()-h}}var p=[],m=[],_=1,v=null,g=3,S=!1,b=!1,w=!1,y=!1,M=typeof setTimeout=="function"?setTimeout:null,F=typeof clearTimeout=="function"?clearTimeout:null,z=typeof setImmediate<"u"?setImmediate:null;function C(I){for(var G=i(m);G!==null;){if(G.callback===null)r(m);else if(G.startTime<=I)r(m),G.sortIndex=G.expirationTime,e(p,G);else break;G=i(m)}}function O(I){if(w=!1,C(I),!b)if(i(p)!==null)b=!0,U||(U=!0,Q());else{var G=i(m);G!==null&&J(O,G.startTime-I)}}var U=!1,P=-1,T=5,L=-1;function Y(){return y?!0:!(s.unstable_now()-L<T)}function V(){if(y=!1,U){var I=s.unstable_now();L=I;var G=!0;try{e:{b=!1,w&&(w=!1,F(P),P=-1),S=!0;var ee=g;try{t:{for(C(I),v=i(p);v!==null&&!(v.expirationTime>I&&Y());){var _e=v.callback;if(typeof _e=="function"){v.callback=null,g=v.priorityLevel;var be=_e(v.expirationTime<=I);if(I=s.unstable_now(),typeof be=="function"){v.callback=be,C(I),G=!0;break t}v===i(p)&&r(p),C(I)}else r(p);v=i(p)}if(v!==null)G=!0;else{var N=i(m);N!==null&&J(O,N.startTime-I),G=!1}}break e}finally{v=null,g=ee,S=!1}G=void 0}}finally{G?Q():U=!1}}}var Q;if(typeof z=="function")Q=function(){z(V)};else if(typeof MessageChannel<"u"){var pe=new MessageChannel,de=pe.port2;pe.port1.onmessage=V,Q=function(){de.postMessage(null)}}else Q=function(){M(V,0)};function J(I,G){P=M(function(){I(s.unstable_now())},G)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(I){I.callback=null},s.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<I?Math.floor(1e3/I):5},s.unstable_getCurrentPriorityLevel=function(){return g},s.unstable_next=function(I){switch(g){case 1:case 2:case 3:var G=3;break;default:G=g}var ee=g;g=G;try{return I()}finally{g=ee}},s.unstable_requestPaint=function(){y=!0},s.unstable_runWithPriority=function(I,G){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var ee=g;g=I;try{return G()}finally{g=ee}},s.unstable_scheduleCallback=function(I,G,ee){var _e=s.unstable_now();switch(typeof ee=="object"&&ee!==null?(ee=ee.delay,ee=typeof ee=="number"&&0<ee?_e+ee:_e):ee=_e,I){case 1:var be=-1;break;case 2:be=250;break;case 5:be=1073741823;break;case 4:be=1e4;break;default:be=5e3}return be=ee+be,I={id:_++,callback:G,priorityLevel:I,startTime:ee,expirationTime:be,sortIndex:-1},ee>_e?(I.sortIndex=ee,e(m,I),i(p)===null&&I===i(m)&&(w?(F(P),P=-1):w=!0,J(O,ee-_e))):(I.sortIndex=be,e(p,I),b||S||(b=!0,U||(U=!0,Q()))),I},s.unstable_shouldYield=Y,s.unstable_wrapCallback=function(I){var G=g;return function(){var ee=g;g=G;try{return I.apply(this,arguments)}finally{g=ee}}}})(Td)),Td}var l_;function RM(){return l_||(l_=1,bd.exports=AM()),bd.exports}var Ad={exports:{}},Hn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var c_;function CM(){if(c_)return Hn;c_=1;var s=sp();function e(p){var m="https://react.dev/errors/"+p;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)m+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+p+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(p,m,_){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:p,containerInfo:m,implementation:_}}var u=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(p,m){if(p==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return Hn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Hn.createPortal=function(p,m){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(e(299));return c(p,m,null,_)},Hn.flushSync=function(p){var m=u.T,_=r.p;try{if(u.T=null,r.p=2,p)return p()}finally{u.T=m,r.p=_,r.d.f()}},Hn.preconnect=function(p,m){typeof p=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,r.d.C(p,m))},Hn.prefetchDNS=function(p){typeof p=="string"&&r.d.D(p)},Hn.preinit=function(p,m){if(typeof p=="string"&&m&&typeof m.as=="string"){var _=m.as,v=h(_,m.crossOrigin),g=typeof m.integrity=="string"?m.integrity:void 0,S=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;_==="style"?r.d.S(p,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:v,integrity:g,fetchPriority:S}):_==="script"&&r.d.X(p,{crossOrigin:v,integrity:g,fetchPriority:S,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},Hn.preinitModule=function(p,m){if(typeof p=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var _=h(m.as,m.crossOrigin);r.d.M(p,{crossOrigin:_,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&r.d.M(p)},Hn.preload=function(p,m){if(typeof p=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var _=m.as,v=h(_,m.crossOrigin);r.d.L(p,_,{crossOrigin:v,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},Hn.preloadModule=function(p,m){if(typeof p=="string")if(m){var _=h(m.as,m.crossOrigin);r.d.m(p,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:_,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else r.d.m(p)},Hn.requestFormReset=function(p){r.d.r(p)},Hn.unstable_batchedUpdates=function(p,m){return p(m)},Hn.useFormState=function(p,m,_){return u.H.useFormState(p,m,_)},Hn.useFormStatus=function(){return u.H.useHostTransitionStatus()},Hn.version="19.2.7",Hn}var u_;function wM(){if(u_)return Ad.exports;u_=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Ad.exports=CM(),Ad.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f_;function DM(){if(f_)return Qo;f_=1;var s=RM(),e=sp(),i=wM();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function u(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function h(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function p(t){if(c(t)!==t)throw Error(r(188))}function m(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,o=n;;){var f=a.return;if(f===null)break;var d=f.alternate;if(d===null){if(o=f.return,o!==null){a=o;continue}break}if(f.child===d.child){for(d=f.child;d;){if(d===a)return p(f),t;if(d===o)return p(f),n;d=d.sibling}throw Error(r(188))}if(a.return!==o.return)a=f,o=d;else{for(var x=!1,R=f.child;R;){if(R===a){x=!0,a=f,o=d;break}if(R===o){x=!0,o=f,a=d;break}R=R.sibling}if(!x){for(R=d.child;R;){if(R===a){x=!0,a=d,o=f;break}if(R===o){x=!0,o=d,a=f;break}R=R.sibling}if(!x)throw Error(r(189))}}if(a.alternate!==o)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function _(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=_(t),n!==null)return n;t=t.sibling}return null}var v=Object.assign,g=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),w=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),M=Symbol.for("react.profiler"),F=Symbol.for("react.consumer"),z=Symbol.for("react.context"),C=Symbol.for("react.forward_ref"),O=Symbol.for("react.suspense"),U=Symbol.for("react.suspense_list"),P=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),L=Symbol.for("react.activity"),Y=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function Q(t){return t===null||typeof t!="object"?null:(t=V&&t[V]||t["@@iterator"],typeof t=="function"?t:null)}var pe=Symbol.for("react.client.reference");function de(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===pe?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case w:return"Fragment";case M:return"Profiler";case y:return"StrictMode";case O:return"Suspense";case U:return"SuspenseList";case L:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case b:return"Portal";case z:return t.displayName||"Context";case F:return(t._context.displayName||"Context")+".Consumer";case C:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case P:return n=t.displayName||null,n!==null?n:de(t.type)||"Memo";case T:n=t._payload,t=t._init;try{return de(t(n))}catch{}}return null}var J=Array.isArray,I=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ee={pending:!1,data:null,method:null,action:null},_e=[],be=-1;function N(t){return{current:t}}function Z(t){0>be||(t.current=_e[be],_e[be]=null,be--)}function Ee(t,n){be++,_e[be]=t.current,t.current=n}var Ce=N(null),Le=N(null),ie=N(null),Se=N(null);function Me(t,n){switch(Ee(ie,n),Ee(Le,t),Ee(Ce,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?Ag(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=Ag(n),t=Rg(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Z(Ce),Ee(Ce,t)}function ze(){Z(Ce),Z(Le),Z(ie)}function nt(t){t.memoizedState!==null&&Ee(Se,t);var n=Ce.current,a=Rg(n,t.type);n!==a&&(Ee(Le,t),Ee(Ce,a))}function Qe(t){Le.current===t&&(Z(Ce),Z(Le)),Se.current===t&&(Z(Se),qo._currentValue=ee)}var Yt,ct;function _t(t){if(Yt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Yt=n&&n[1]||"",ct=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Yt+t+ct}var Ye=!1;function Ze(t,n){if(!t||Ye)return"";Ye=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var xe=function(){throw Error()};if(Object.defineProperty(xe.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(xe,[])}catch(ce){var le=ce}Reflect.construct(t,[],xe)}else{try{xe.call()}catch(ce){le=ce}t.call(xe.prototype)}}else{try{throw Error()}catch(ce){le=ce}(xe=t())&&typeof xe.catch=="function"&&xe.catch(function(){})}}catch(ce){if(ce&&le&&typeof ce.stack=="string")return[ce.stack,le.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=o.DetermineComponentFrameRoot(),x=d[0],R=d[1];if(x&&R){var H=x.split(`
`),ae=R.split(`
`);for(f=o=0;o<H.length&&!H[o].includes("DetermineComponentFrameRoot");)o++;for(;f<ae.length&&!ae[f].includes("DetermineComponentFrameRoot");)f++;if(o===H.length||f===ae.length)for(o=H.length-1,f=ae.length-1;1<=o&&0<=f&&H[o]!==ae[f];)f--;for(;1<=o&&0<=f;o--,f--)if(H[o]!==ae[f]){if(o!==1||f!==1)do if(o--,f--,0>f||H[o]!==ae[f]){var ge=`
`+H[o].replace(" at new "," at ");return t.displayName&&ge.includes("<anonymous>")&&(ge=ge.replace("<anonymous>",t.displayName)),ge}while(1<=o&&0<=f);break}}}finally{Ye=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?_t(a):""}function rt(t,n){switch(t.tag){case 26:case 27:case 5:return _t(t.type);case 16:return _t("Lazy");case 13:return t.child!==n&&n!==null?_t("Suspense Fallback"):_t("Suspense");case 19:return _t("SuspenseList");case 0:case 15:return Ze(t.type,!1);case 11:return Ze(t.type.render,!1);case 1:return Ze(t.type,!0);case 31:return _t("Activity");default:return""}}function pt(t){try{var n="",a=null;do n+=rt(t,a),a=t,t=t.return;while(t);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var Ct=Object.prototype.hasOwnProperty,wt=s.unstable_scheduleCallback,ut=s.unstable_cancelCallback,gt=s.unstable_shouldYield,X=s.unstable_requestPaint,St=s.unstable_now,vt=s.unstable_getCurrentPriorityLevel,D=s.unstable_ImmediatePriority,E=s.unstable_UserBlockingPriority,j=s.unstable_NormalPriority,te=s.unstable_LowPriority,ue=s.unstable_IdlePriority,Re=s.log,De=s.unstable_setDisableYieldValue,fe=null,he=null;function Te(t){if(typeof Re=="function"&&De(t),he&&typeof he.setStrictMode=="function")try{he.setStrictMode(fe,t)}catch{}}var Be=Math.clz32?Math.clz32:Je,Ue=Math.log,Ne=Math.LN2;function Je(t){return t>>>=0,t===0?32:31-(Ue(t)/Ne|0)|0}var Ke=256,at=262144,W=4194304;function Ae(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function me(t,n,a){var o=t.pendingLanes;if(o===0)return 0;var f=0,d=t.suspendedLanes,x=t.pingedLanes;t=t.warmLanes;var R=o&134217727;return R!==0?(o=R&~d,o!==0?f=Ae(o):(x&=R,x!==0?f=Ae(x):a||(a=R&~t,a!==0&&(f=Ae(a))))):(R=o&~d,R!==0?f=Ae(R):x!==0?f=Ae(x):a||(a=o&~t,a!==0&&(f=Ae(a)))),f===0?0:n!==0&&n!==f&&(n&d)===0&&(d=f&-f,a=n&-n,d>=a||d===32&&(a&4194048)!==0)?n:f}function we(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function Pe(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ye(){var t=W;return W<<=1,(W&62914560)===0&&(W=4194304),t}function Xe(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function He(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Ht(t,n,a,o,f,d){var x=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var R=t.entanglements,H=t.expirationTimes,ae=t.hiddenUpdates;for(a=x&~a;0<a;){var ge=31-Be(a),xe=1<<ge;R[ge]=0,H[ge]=-1;var le=ae[ge];if(le!==null)for(ae[ge]=null,ge=0;ge<le.length;ge++){var ce=le[ge];ce!==null&&(ce.lane&=-536870913)}a&=~xe}o!==0&&Ut(t,o,0),d!==0&&f===0&&t.tag!==0&&(t.suspendedLanes|=d&~(x&~n))}function Ut(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var o=31-Be(n);t.entangledLanes|=n,t.entanglements[o]=t.entanglements[o]|1073741824|a&261930}function Wn(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var o=31-Be(a),f=1<<o;f&n|t[o]&n&&(t[o]|=n),a&=~f}}function Bn(t,n){var a=n&-n;return a=(a&42)!==0?1:Fa(a),(a&(t.suspendedLanes|n))!==0?0:a}function Fa(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function pn(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function En(){var t=G.p;return t!==0?t:(t=window.event,t===void 0?32:jg(t.type))}function ri(t,n){var a=G.p;try{return G.p=t,n()}finally{G.p=a}}var mn=Math.random().toString(36).slice(2),Lt="__reactFiber$"+mn,en="__reactProps$"+mn,Cn="__reactContainer$"+mn,Qn="__reactEvents$"+mn,Ms="__reactListeners$"+mn,Ba="__reactHandles$"+mn,Wi="__reactResources$"+mn,za="__reactMarker$"+mn;function Ha(t){delete t[Lt],delete t[en],delete t[Qn],delete t[Ms],delete t[Ba]}function oa(t){var n=t[Lt];if(n)return n;for(var a=t.parentNode;a;){if(n=a[Cn]||a[Lt]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=Og(t);t!==null;){if(a=t[Lt])return a;t=Og(t)}return n}t=a,a=t.parentNode}return null}function la(t){if(t=t[Lt]||t[Cn]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function ys(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function Ga(t){var n=t[Wi];return n||(n=t[Wi]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function gn(t){t[za]=!0}var _l=new Set,A={};function q(t,n){oe(t,n),oe(t+"Capture",n)}function oe(t,n){for(A[t]=n,t=0;t<n.length;t++)_l.add(n[t])}var se=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),re={},Ie={};function Ve(t){return Ct.call(Ie,t)?!0:Ct.call(re,t)?!1:se.test(t)?Ie[t]=!0:(re[t]=!0,!1)}function Oe(t,n,a){if(Ve(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function We(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function ke(t,n,a,o){if(o===null)t.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+o)}}function et(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ft(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function $e(t,n,a){var o=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var f=o.get,d=o.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return f.call(this)},set:function(x){a=""+x,d.call(this,x)}}),Object.defineProperty(t,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(x){a=""+x},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Ot(t){if(!t._valueTracker){var n=ft(t)?"checked":"value";t._valueTracker=$e(t,n,""+t[n])}}function an(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return t&&(o=ft(t)?t.checked?"true":"false":t.value),t=o,t!==a?(n.setValue(t),!0):!1}function Qt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Gt=/[\n"\\]/g;function Vt(t){return t.replace(Gt,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Ge(t,n,a,o,f,d,x,R){t.name="",x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?t.type=x:t.removeAttribute("type"),n!=null?x==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+et(n)):t.value!==""+et(n)&&(t.value=""+et(n)):x!=="submit"&&x!=="reset"||t.removeAttribute("value"),n!=null?Mt(t,x,et(n)):a!=null?Mt(t,x,et(a)):o!=null&&t.removeAttribute("value"),f==null&&d!=null&&(t.defaultChecked=!!d),f!=null&&(t.checked=f&&typeof f!="function"&&typeof f!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?t.name=""+et(R):t.removeAttribute("name")}function zn(t,n,a,o,f,d,x,R){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(t.type=d),n!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||n!=null)){Ot(t);return}a=a!=null?""+et(a):"",n=n!=null?""+et(n):a,R||n===t.value||(t.value=n),t.defaultValue=n}o=o??f,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=R?t.checked:!!o,t.defaultChecked=!!o,x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"&&(t.name=x),Ot(t)}function Mt(t,n,a){n==="number"&&Qt(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function bn(t,n,a,o){if(t=t.options,n){n={};for(var f=0;f<a.length;f++)n["$"+a[f]]=!0;for(a=0;a<t.length;a++)f=n.hasOwnProperty("$"+t[a].value),t[a].selected!==f&&(t[a].selected=f),f&&o&&(t[a].defaultSelected=!0)}else{for(a=""+et(a),n=null,f=0;f<t.length;f++){if(t[f].value===a){t[f].selected=!0,o&&(t[f].defaultSelected=!0);return}n!==null||t[f].disabled||(n=t[f])}n!==null&&(n.selected=!0)}}function oi(t,n,a){if(n!=null&&(n=""+et(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+et(a):""}function Li(t,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(r(92));if(J(o)){if(1<o.length)throw Error(r(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=et(n),t.defaultValue=a,o=t.textContent,o===a&&o!==""&&o!==null&&(t.value=o),Ot(t)}function li(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var kt=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function sn(t,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":o?t.setProperty(n,a):typeof a!="number"||a===0||kt.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Oi(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var f in n)o=n[f],n.hasOwnProperty(f)&&a[f]!==o&&sn(t,f,o)}else for(var d in n)n.hasOwnProperty(d)&&sn(t,d,n[d])}function zt(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var qi=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Va=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Es(t){return Va.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function ca(){}var _u=null;function vu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var tr=null,nr=null;function Tp(t){var n=la(t);if(n&&(t=n.stateNode)){var a=t[en]||null;e:switch(t=n.stateNode,n.type){case"input":if(Ge(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Vt(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==t&&o.form===t.form){var f=o[en]||null;if(!f)throw Error(r(90));Ge(o,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===t.form&&an(o)}break e;case"textarea":oi(t,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&bn(t,!!a.multiple,n,!1)}}}var xu=!1;function Ap(t,n,a){if(xu)return t(n,a);xu=!0;try{var o=t(n);return o}finally{if(xu=!1,(tr!==null||nr!==null)&&(ac(),tr&&(n=tr,t=nr,nr=tr=null,Tp(n),t)))for(n=0;n<t.length;n++)Tp(t[n])}}function lo(t,n){var a=t.stateNode;if(a===null)return null;var o=a[en]||null;if(o===null)return null;a=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var ua=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Su=!1;if(ua)try{var co={};Object.defineProperty(co,"passive",{get:function(){Su=!0}}),window.addEventListener("test",co,co),window.removeEventListener("test",co,co)}catch{Su=!1}var ka=null,Mu=null,vl=null;function Rp(){if(vl)return vl;var t,n=Mu,a=n.length,o,f="value"in ka?ka.value:ka.textContent,d=f.length;for(t=0;t<a&&n[t]===f[t];t++);var x=a-t;for(o=1;o<=x&&n[a-o]===f[d-o];o++);return vl=f.slice(t,1<o?1-o:void 0)}function xl(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Sl(){return!0}function Cp(){return!1}function Jn(t){function n(a,o,f,d,x){this._reactName=a,this._targetInst=f,this.type=o,this.nativeEvent=d,this.target=x,this.currentTarget=null;for(var R in t)t.hasOwnProperty(R)&&(a=t[R],this[R]=a?a(d):d[R]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?Sl:Cp,this.isPropagationStopped=Cp,this}return v(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Sl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Sl)},persist:function(){},isPersistent:Sl}),n}var bs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ml=Jn(bs),uo=v({},bs,{view:0,detail:0}),Mx=Jn(uo),yu,Eu,fo,yl=v({},uo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Tu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==fo&&(fo&&t.type==="mousemove"?(yu=t.screenX-fo.screenX,Eu=t.screenY-fo.screenY):Eu=yu=0,fo=t),yu)},movementY:function(t){return"movementY"in t?t.movementY:Eu}}),wp=Jn(yl),yx=v({},yl,{dataTransfer:0}),Ex=Jn(yx),bx=v({},uo,{relatedTarget:0}),bu=Jn(bx),Tx=v({},bs,{animationName:0,elapsedTime:0,pseudoElement:0}),Ax=Jn(Tx),Rx=v({},bs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Cx=Jn(Rx),wx=v({},bs,{data:0}),Dp=Jn(wx),Dx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ux={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Nx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Lx(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=Nx[t])?!!n[t]:!1}function Tu(){return Lx}var Ox=v({},uo,{key:function(t){if(t.key){var n=Dx[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=xl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Ux[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Tu,charCode:function(t){return t.type==="keypress"?xl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?xl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Px=Jn(Ox),Ix=v({},yl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Up=Jn(Ix),Fx=v({},uo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Tu}),Bx=Jn(Fx),zx=v({},bs,{propertyName:0,elapsedTime:0,pseudoElement:0}),Hx=Jn(zx),Gx=v({},yl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Vx=Jn(Gx),kx=v({},bs,{newState:0,oldState:0}),Xx=Jn(kx),Wx=[9,13,27,32],Au=ua&&"CompositionEvent"in window,ho=null;ua&&"documentMode"in document&&(ho=document.documentMode);var qx=ua&&"TextEvent"in window&&!ho,Np=ua&&(!Au||ho&&8<ho&&11>=ho),Lp=" ",Op=!1;function Pp(t,n){switch(t){case"keyup":return Wx.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ip(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ir=!1;function Yx(t,n){switch(t){case"compositionend":return Ip(n);case"keypress":return n.which!==32?null:(Op=!0,Lp);case"textInput":return t=n.data,t===Lp&&Op?null:t;default:return null}}function Zx(t,n){if(ir)return t==="compositionend"||!Au&&Pp(t,n)?(t=Rp(),vl=Mu=ka=null,ir=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Np&&n.locale!=="ko"?null:n.data;default:return null}}var Kx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Fp(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!Kx[t.type]:n==="textarea"}function Bp(t,n,a,o){tr?nr?nr.push(o):nr=[o]:tr=o,n=fc(n,"onChange"),0<n.length&&(a=new Ml("onChange","change",null,a,o),t.push({event:a,listeners:n}))}var po=null,mo=null;function jx(t){Sg(t,0)}function El(t){var n=ys(t);if(an(n))return t}function zp(t,n){if(t==="change")return n}var Hp=!1;if(ua){var Ru;if(ua){var Cu="oninput"in document;if(!Cu){var Gp=document.createElement("div");Gp.setAttribute("oninput","return;"),Cu=typeof Gp.oninput=="function"}Ru=Cu}else Ru=!1;Hp=Ru&&(!document.documentMode||9<document.documentMode)}function Vp(){po&&(po.detachEvent("onpropertychange",kp),mo=po=null)}function kp(t){if(t.propertyName==="value"&&El(mo)){var n=[];Bp(n,mo,t,vu(t)),Ap(jx,n)}}function Qx(t,n,a){t==="focusin"?(Vp(),po=n,mo=a,po.attachEvent("onpropertychange",kp)):t==="focusout"&&Vp()}function Jx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return El(mo)}function $x(t,n){if(t==="click")return El(n)}function eS(t,n){if(t==="input"||t==="change")return El(n)}function tS(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var ci=typeof Object.is=="function"?Object.is:tS;function go(t,n){if(ci(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var f=a[o];if(!Ct.call(n,f)||!ci(t[f],n[f]))return!1}return!0}function Xp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Wp(t,n){var a=Xp(t);t=0;for(var o;a;){if(a.nodeType===3){if(o=t+a.textContent.length,t<=n&&o>=n)return{node:a,offset:n-t};t=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Xp(a)}}function qp(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?qp(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Yp(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=Qt(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=Qt(t.document)}return n}function wu(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var nS=ua&&"documentMode"in document&&11>=document.documentMode,ar=null,Du=null,_o=null,Uu=!1;function Zp(t,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Uu||ar==null||ar!==Qt(o)||(o=ar,"selectionStart"in o&&wu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),_o&&go(_o,o)||(_o=o,o=fc(Du,"onSelect"),0<o.length&&(n=new Ml("onSelect","select",null,n,a),t.push({event:n,listeners:o}),n.target=ar)))}function Ts(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var sr={animationend:Ts("Animation","AnimationEnd"),animationiteration:Ts("Animation","AnimationIteration"),animationstart:Ts("Animation","AnimationStart"),transitionrun:Ts("Transition","TransitionRun"),transitionstart:Ts("Transition","TransitionStart"),transitioncancel:Ts("Transition","TransitionCancel"),transitionend:Ts("Transition","TransitionEnd")},Nu={},Kp={};ua&&(Kp=document.createElement("div").style,"AnimationEvent"in window||(delete sr.animationend.animation,delete sr.animationiteration.animation,delete sr.animationstart.animation),"TransitionEvent"in window||delete sr.transitionend.transition);function As(t){if(Nu[t])return Nu[t];if(!sr[t])return t;var n=sr[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in Kp)return Nu[t]=n[a];return t}var jp=As("animationend"),Qp=As("animationiteration"),Jp=As("animationstart"),iS=As("transitionrun"),aS=As("transitionstart"),sS=As("transitioncancel"),$p=As("transitionend"),em=new Map,Lu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Lu.push("scrollEnd");function Pi(t,n){em.set(t,n),q(n,[t])}var bl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},xi=[],rr=0,Ou=0;function Tl(){for(var t=rr,n=Ou=rr=0;n<t;){var a=xi[n];xi[n++]=null;var o=xi[n];xi[n++]=null;var f=xi[n];xi[n++]=null;var d=xi[n];if(xi[n++]=null,o!==null&&f!==null){var x=o.pending;x===null?f.next=f:(f.next=x.next,x.next=f),o.pending=f}d!==0&&tm(a,f,d)}}function Al(t,n,a,o){xi[rr++]=t,xi[rr++]=n,xi[rr++]=a,xi[rr++]=o,Ou|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function Pu(t,n,a,o){return Al(t,n,a,o),Rl(t)}function Rs(t,n){return Al(t,null,null,n),Rl(t)}function tm(t,n,a){t.lanes|=a;var o=t.alternate;o!==null&&(o.lanes|=a);for(var f=!1,d=t.return;d!==null;)d.childLanes|=a,o=d.alternate,o!==null&&(o.childLanes|=a),d.tag===22&&(t=d.stateNode,t===null||t._visibility&1||(f=!0)),t=d,d=d.return;return t.tag===3?(d=t.stateNode,f&&n!==null&&(f=31-Be(a),t=d.hiddenUpdates,o=t[f],o===null?t[f]=[n]:o.push(n),n.lane=a|536870912),d):null}function Rl(t){if(50<zo)throw zo=0,Wf=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var or={};function rS(t,n,a,o){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ui(t,n,a,o){return new rS(t,n,a,o)}function Iu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function fa(t,n){var a=t.alternate;return a===null?(a=ui(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function nm(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function Cl(t,n,a,o,f,d){var x=0;if(o=t,typeof t=="function")Iu(t)&&(x=1);else if(typeof t=="string")x=fM(t,a,Ce.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case L:return t=ui(31,a,n,f),t.elementType=L,t.lanes=d,t;case w:return Cs(a.children,f,d,n);case y:x=8,f|=24;break;case M:return t=ui(12,a,n,f|2),t.elementType=M,t.lanes=d,t;case O:return t=ui(13,a,n,f),t.elementType=O,t.lanes=d,t;case U:return t=ui(19,a,n,f),t.elementType=U,t.lanes=d,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case z:x=10;break e;case F:x=9;break e;case C:x=11;break e;case P:x=14;break e;case T:x=16,o=null;break e}x=29,a=Error(r(130,t===null?"null":typeof t,"")),o=null}return n=ui(x,a,n,f),n.elementType=t,n.type=o,n.lanes=d,n}function Cs(t,n,a,o){return t=ui(7,t,o,n),t.lanes=a,t}function Fu(t,n,a){return t=ui(6,t,null,n),t.lanes=a,t}function im(t){var n=ui(18,null,null,0);return n.stateNode=t,n}function Bu(t,n,a){return n=ui(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var am=new WeakMap;function Si(t,n){if(typeof t=="object"&&t!==null){var a=am.get(t);return a!==void 0?a:(n={value:t,source:n,stack:pt(n)},am.set(t,n),n)}return{value:t,source:n,stack:pt(n)}}var lr=[],cr=0,wl=null,vo=0,Mi=[],yi=0,Xa=null,Yi=1,Zi="";function da(t,n){lr[cr++]=vo,lr[cr++]=wl,wl=t,vo=n}function sm(t,n,a){Mi[yi++]=Yi,Mi[yi++]=Zi,Mi[yi++]=Xa,Xa=t;var o=Yi;t=Zi;var f=32-Be(o)-1;o&=~(1<<f),a+=1;var d=32-Be(n)+f;if(30<d){var x=f-f%5;d=(o&(1<<x)-1).toString(32),o>>=x,f-=x,Yi=1<<32-Be(n)+f|a<<f|o,Zi=d+t}else Yi=1<<d|a<<f|o,Zi=t}function zu(t){t.return!==null&&(da(t,1),sm(t,1,0))}function Hu(t){for(;t===wl;)wl=lr[--cr],lr[cr]=null,vo=lr[--cr],lr[cr]=null;for(;t===Xa;)Xa=Mi[--yi],Mi[yi]=null,Zi=Mi[--yi],Mi[yi]=null,Yi=Mi[--yi],Mi[yi]=null}function rm(t,n){Mi[yi++]=Yi,Mi[yi++]=Zi,Mi[yi++]=Xa,Yi=n.id,Zi=n.overflow,Xa=t}var Ln=null,tn=null,At=!1,Wa=null,Ei=!1,Gu=Error(r(519));function qa(t){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw xo(Si(n,t)),Gu}function om(t){var n=t.stateNode,a=t.type,o=t.memoizedProps;switch(n[Lt]=t,n[en]=o,a){case"dialog":Et("cancel",n),Et("close",n);break;case"iframe":case"object":case"embed":Et("load",n);break;case"video":case"audio":for(a=0;a<Go.length;a++)Et(Go[a],n);break;case"source":Et("error",n);break;case"img":case"image":case"link":Et("error",n),Et("load",n);break;case"details":Et("toggle",n);break;case"input":Et("invalid",n),zn(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":Et("invalid",n);break;case"textarea":Et("invalid",n),Li(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||bg(n.textContent,a)?(o.popover!=null&&(Et("beforetoggle",n),Et("toggle",n)),o.onScroll!=null&&Et("scroll",n),o.onScrollEnd!=null&&Et("scrollend",n),o.onClick!=null&&(n.onclick=ca),n=!0):n=!1,n||qa(t,!0)}function lm(t){for(Ln=t.return;Ln;)switch(Ln.tag){case 5:case 31:case 13:Ei=!1;return;case 27:case 3:Ei=!0;return;default:Ln=Ln.return}}function ur(t){if(t!==Ln)return!1;if(!At)return lm(t),At=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||rd(t.type,t.memoizedProps)),a=!a),a&&tn&&qa(t),lm(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));tn=Lg(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));tn=Lg(t)}else n===27?(n=tn,rs(t.type)?(t=fd,fd=null,tn=t):tn=n):tn=Ln?Ti(t.stateNode.nextSibling):null;return!0}function ws(){tn=Ln=null,At=!1}function Vu(){var t=Wa;return t!==null&&(ni===null?ni=t:ni.push.apply(ni,t),Wa=null),t}function xo(t){Wa===null?Wa=[t]:Wa.push(t)}var ku=N(null),Ds=null,ha=null;function Ya(t,n,a){Ee(ku,n._currentValue),n._currentValue=a}function pa(t){t._currentValue=ku.current,Z(ku)}function Xu(t,n,a){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===a)break;t=t.return}}function Wu(t,n,a,o){var f=t.child;for(f!==null&&(f.return=t);f!==null;){var d=f.dependencies;if(d!==null){var x=f.child;d=d.firstContext;e:for(;d!==null;){var R=d;d=f;for(var H=0;H<n.length;H++)if(R.context===n[H]){d.lanes|=a,R=d.alternate,R!==null&&(R.lanes|=a),Xu(d.return,a,t),o||(x=null);break e}d=R.next}}else if(f.tag===18){if(x=f.return,x===null)throw Error(r(341));x.lanes|=a,d=x.alternate,d!==null&&(d.lanes|=a),Xu(x,a,t),x=null}else x=f.child;if(x!==null)x.return=f;else for(x=f;x!==null;){if(x===t){x=null;break}if(f=x.sibling,f!==null){f.return=x.return,x=f;break}x=x.return}f=x}}function fr(t,n,a,o){t=null;for(var f=n,d=!1;f!==null;){if(!d){if((f.flags&524288)!==0)d=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var x=f.alternate;if(x===null)throw Error(r(387));if(x=x.memoizedProps,x!==null){var R=f.type;ci(f.pendingProps.value,x.value)||(t!==null?t.push(R):t=[R])}}else if(f===Se.current){if(x=f.alternate,x===null)throw Error(r(387));x.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(t!==null?t.push(qo):t=[qo])}f=f.return}t!==null&&Wu(n,t,a,o),n.flags|=262144}function Dl(t){for(t=t.firstContext;t!==null;){if(!ci(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Us(t){Ds=t,ha=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function On(t){return cm(Ds,t)}function Ul(t,n){return Ds===null&&Us(t),cm(t,n)}function cm(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},ha===null){if(t===null)throw Error(r(308));ha=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else ha=ha.next=n;return a}var oS=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,o){t.push(o)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},lS=s.unstable_scheduleCallback,cS=s.unstable_NormalPriority,_n={$$typeof:z,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function qu(){return{controller:new oS,data:new Map,refCount:0}}function So(t){t.refCount--,t.refCount===0&&lS(cS,function(){t.controller.abort()})}var Mo=null,Yu=0,dr=0,hr=null;function uS(t,n){if(Mo===null){var a=Mo=[];Yu=0,dr=Qf(),hr={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Yu++,n.then(um,um),n}function um(){if(--Yu===0&&Mo!==null){hr!==null&&(hr.status="fulfilled");var t=Mo;Mo=null,dr=0,hr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function fS(t,n){var a=[],o={status:"pending",value:null,reason:null,then:function(f){a.push(f)}};return t.then(function(){o.status="fulfilled",o.value=n;for(var f=0;f<a.length;f++)(0,a[f])(n)},function(f){for(o.status="rejected",o.reason=f,f=0;f<a.length;f++)(0,a[f])(void 0)}),o}var fm=I.S;I.S=function(t,n){Z0=St(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&uS(t,n),fm!==null&&fm(t,n)};var Ns=N(null);function Zu(){var t=Ns.current;return t!==null?t:Jt.pooledCache}function Nl(t,n){n===null?Ee(Ns,Ns.current):Ee(Ns,n.pool)}function dm(){var t=Zu();return t===null?null:{parent:_n._currentValue,pool:t}}var pr=Error(r(460)),Ku=Error(r(474)),Ll=Error(r(542)),Ol={then:function(){}};function hm(t){return t=t.status,t==="fulfilled"||t==="rejected"}function pm(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(ca,ca),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,gm(t),t;default:if(typeof n.status=="string")n.then(ca,ca);else{if(t=Jt,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(o){if(n.status==="pending"){var f=n;f.status="fulfilled",f.value=o}},function(o){if(n.status==="pending"){var f=n;f.status="rejected",f.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,gm(t),t}throw Os=n,pr}}function Ls(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Os=a,pr):a}}var Os=null;function mm(){if(Os===null)throw Error(r(459));var t=Os;return Os=null,t}function gm(t){if(t===pr||t===Ll)throw Error(r(483))}var mr=null,yo=0;function Pl(t){var n=yo;return yo+=1,mr===null&&(mr=[]),pm(mr,t,n)}function Eo(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Il(t,n){throw n.$$typeof===g?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function _m(t){function n(K,k){if(t){var ne=K.deletions;ne===null?(K.deletions=[k],K.flags|=16):ne.push(k)}}function a(K,k){if(!t)return null;for(;k!==null;)n(K,k),k=k.sibling;return null}function o(K){for(var k=new Map;K!==null;)K.key!==null?k.set(K.key,K):k.set(K.index,K),K=K.sibling;return k}function f(K,k){return K=fa(K,k),K.index=0,K.sibling=null,K}function d(K,k,ne){return K.index=ne,t?(ne=K.alternate,ne!==null?(ne=ne.index,ne<k?(K.flags|=67108866,k):ne):(K.flags|=67108866,k)):(K.flags|=1048576,k)}function x(K){return t&&K.alternate===null&&(K.flags|=67108866),K}function R(K,k,ne,ve){return k===null||k.tag!==6?(k=Fu(ne,K.mode,ve),k.return=K,k):(k=f(k,ne),k.return=K,k)}function H(K,k,ne,ve){var tt=ne.type;return tt===w?ge(K,k,ne.props.children,ve,ne.key):k!==null&&(k.elementType===tt||typeof tt=="object"&&tt!==null&&tt.$$typeof===T&&Ls(tt)===k.type)?(k=f(k,ne.props),Eo(k,ne),k.return=K,k):(k=Cl(ne.type,ne.key,ne.props,null,K.mode,ve),Eo(k,ne),k.return=K,k)}function ae(K,k,ne,ve){return k===null||k.tag!==4||k.stateNode.containerInfo!==ne.containerInfo||k.stateNode.implementation!==ne.implementation?(k=Bu(ne,K.mode,ve),k.return=K,k):(k=f(k,ne.children||[]),k.return=K,k)}function ge(K,k,ne,ve,tt){return k===null||k.tag!==7?(k=Cs(ne,K.mode,ve,tt),k.return=K,k):(k=f(k,ne),k.return=K,k)}function xe(K,k,ne){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=Fu(""+k,K.mode,ne),k.return=K,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case S:return ne=Cl(k.type,k.key,k.props,null,K.mode,ne),Eo(ne,k),ne.return=K,ne;case b:return k=Bu(k,K.mode,ne),k.return=K,k;case T:return k=Ls(k),xe(K,k,ne)}if(J(k)||Q(k))return k=Cs(k,K.mode,ne,null),k.return=K,k;if(typeof k.then=="function")return xe(K,Pl(k),ne);if(k.$$typeof===z)return xe(K,Ul(K,k),ne);Il(K,k)}return null}function le(K,k,ne,ve){var tt=k!==null?k.key:null;if(typeof ne=="string"&&ne!==""||typeof ne=="number"||typeof ne=="bigint")return tt!==null?null:R(K,k,""+ne,ve);if(typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case S:return ne.key===tt?H(K,k,ne,ve):null;case b:return ne.key===tt?ae(K,k,ne,ve):null;case T:return ne=Ls(ne),le(K,k,ne,ve)}if(J(ne)||Q(ne))return tt!==null?null:ge(K,k,ne,ve,null);if(typeof ne.then=="function")return le(K,k,Pl(ne),ve);if(ne.$$typeof===z)return le(K,k,Ul(K,ne),ve);Il(K,ne)}return null}function ce(K,k,ne,ve,tt){if(typeof ve=="string"&&ve!==""||typeof ve=="number"||typeof ve=="bigint")return K=K.get(ne)||null,R(k,K,""+ve,tt);if(typeof ve=="object"&&ve!==null){switch(ve.$$typeof){case S:return K=K.get(ve.key===null?ne:ve.key)||null,H(k,K,ve,tt);case b:return K=K.get(ve.key===null?ne:ve.key)||null,ae(k,K,ve,tt);case T:return ve=Ls(ve),ce(K,k,ne,ve,tt)}if(J(ve)||Q(ve))return K=K.get(ne)||null,ge(k,K,ve,tt,null);if(typeof ve.then=="function")return ce(K,k,ne,Pl(ve),tt);if(ve.$$typeof===z)return ce(K,k,ne,Ul(k,ve),tt);Il(k,ve)}return null}function qe(K,k,ne,ve){for(var tt=null,Pt=null,je=k,ht=k=0,Tt=null;je!==null&&ht<ne.length;ht++){je.index>ht?(Tt=je,je=null):Tt=je.sibling;var It=le(K,je,ne[ht],ve);if(It===null){je===null&&(je=Tt);break}t&&je&&It.alternate===null&&n(K,je),k=d(It,k,ht),Pt===null?tt=It:Pt.sibling=It,Pt=It,je=Tt}if(ht===ne.length)return a(K,je),At&&da(K,ht),tt;if(je===null){for(;ht<ne.length;ht++)je=xe(K,ne[ht],ve),je!==null&&(k=d(je,k,ht),Pt===null?tt=je:Pt.sibling=je,Pt=je);return At&&da(K,ht),tt}for(je=o(je);ht<ne.length;ht++)Tt=ce(je,K,ht,ne[ht],ve),Tt!==null&&(t&&Tt.alternate!==null&&je.delete(Tt.key===null?ht:Tt.key),k=d(Tt,k,ht),Pt===null?tt=Tt:Pt.sibling=Tt,Pt=Tt);return t&&je.forEach(function(fs){return n(K,fs)}),At&&da(K,ht),tt}function it(K,k,ne,ve){if(ne==null)throw Error(r(151));for(var tt=null,Pt=null,je=k,ht=k=0,Tt=null,It=ne.next();je!==null&&!It.done;ht++,It=ne.next()){je.index>ht?(Tt=je,je=null):Tt=je.sibling;var fs=le(K,je,It.value,ve);if(fs===null){je===null&&(je=Tt);break}t&&je&&fs.alternate===null&&n(K,je),k=d(fs,k,ht),Pt===null?tt=fs:Pt.sibling=fs,Pt=fs,je=Tt}if(It.done)return a(K,je),At&&da(K,ht),tt;if(je===null){for(;!It.done;ht++,It=ne.next())It=xe(K,It.value,ve),It!==null&&(k=d(It,k,ht),Pt===null?tt=It:Pt.sibling=It,Pt=It);return At&&da(K,ht),tt}for(je=o(je);!It.done;ht++,It=ne.next())It=ce(je,K,ht,It.value,ve),It!==null&&(t&&It.alternate!==null&&je.delete(It.key===null?ht:It.key),k=d(It,k,ht),Pt===null?tt=It:Pt.sibling=It,Pt=It);return t&&je.forEach(function(yM){return n(K,yM)}),At&&da(K,ht),tt}function jt(K,k,ne,ve){if(typeof ne=="object"&&ne!==null&&ne.type===w&&ne.key===null&&(ne=ne.props.children),typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case S:e:{for(var tt=ne.key;k!==null;){if(k.key===tt){if(tt=ne.type,tt===w){if(k.tag===7){a(K,k.sibling),ve=f(k,ne.props.children),ve.return=K,K=ve;break e}}else if(k.elementType===tt||typeof tt=="object"&&tt!==null&&tt.$$typeof===T&&Ls(tt)===k.type){a(K,k.sibling),ve=f(k,ne.props),Eo(ve,ne),ve.return=K,K=ve;break e}a(K,k);break}else n(K,k);k=k.sibling}ne.type===w?(ve=Cs(ne.props.children,K.mode,ve,ne.key),ve.return=K,K=ve):(ve=Cl(ne.type,ne.key,ne.props,null,K.mode,ve),Eo(ve,ne),ve.return=K,K=ve)}return x(K);case b:e:{for(tt=ne.key;k!==null;){if(k.key===tt)if(k.tag===4&&k.stateNode.containerInfo===ne.containerInfo&&k.stateNode.implementation===ne.implementation){a(K,k.sibling),ve=f(k,ne.children||[]),ve.return=K,K=ve;break e}else{a(K,k);break}else n(K,k);k=k.sibling}ve=Bu(ne,K.mode,ve),ve.return=K,K=ve}return x(K);case T:return ne=Ls(ne),jt(K,k,ne,ve)}if(J(ne))return qe(K,k,ne,ve);if(Q(ne)){if(tt=Q(ne),typeof tt!="function")throw Error(r(150));return ne=tt.call(ne),it(K,k,ne,ve)}if(typeof ne.then=="function")return jt(K,k,Pl(ne),ve);if(ne.$$typeof===z)return jt(K,k,Ul(K,ne),ve);Il(K,ne)}return typeof ne=="string"&&ne!==""||typeof ne=="number"||typeof ne=="bigint"?(ne=""+ne,k!==null&&k.tag===6?(a(K,k.sibling),ve=f(k,ne),ve.return=K,K=ve):(a(K,k),ve=Fu(ne,K.mode,ve),ve.return=K,K=ve),x(K)):a(K,k)}return function(K,k,ne,ve){try{yo=0;var tt=jt(K,k,ne,ve);return mr=null,tt}catch(je){if(je===pr||je===Ll)throw je;var Pt=ui(29,je,null,K.mode);return Pt.lanes=ve,Pt.return=K,Pt}finally{}}}var Ps=_m(!0),vm=_m(!1),Za=!1;function ju(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Qu(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ka(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function ja(t,n,a){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(Bt&2)!==0){var f=o.pending;return f===null?n.next=n:(n.next=f.next,f.next=n),o.pending=n,n=Rl(t),tm(t,null,a),n}return Al(t,o,n,a),Rl(t)}function bo(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,Wn(t,a)}}function Ju(t,n){var a=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var f=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var x={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?f=d=x:d=d.next=x,a=a.next}while(a!==null);d===null?f=d=n:d=d.next=n}else f=d=n;a={baseState:o.baseState,firstBaseUpdate:f,lastBaseUpdate:d,shared:o.shared,callbacks:o.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var $u=!1;function To(){if($u){var t=hr;if(t!==null)throw t}}function Ao(t,n,a,o){$u=!1;var f=t.updateQueue;Za=!1;var d=f.firstBaseUpdate,x=f.lastBaseUpdate,R=f.shared.pending;if(R!==null){f.shared.pending=null;var H=R,ae=H.next;H.next=null,x===null?d=ae:x.next=ae,x=H;var ge=t.alternate;ge!==null&&(ge=ge.updateQueue,R=ge.lastBaseUpdate,R!==x&&(R===null?ge.firstBaseUpdate=ae:R.next=ae,ge.lastBaseUpdate=H))}if(d!==null){var xe=f.baseState;x=0,ge=ae=H=null,R=d;do{var le=R.lane&-536870913,ce=le!==R.lane;if(ce?(bt&le)===le:(o&le)===le){le!==0&&le===dr&&($u=!0),ge!==null&&(ge=ge.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});e:{var qe=t,it=R;le=n;var jt=a;switch(it.tag){case 1:if(qe=it.payload,typeof qe=="function"){xe=qe.call(jt,xe,le);break e}xe=qe;break e;case 3:qe.flags=qe.flags&-65537|128;case 0:if(qe=it.payload,le=typeof qe=="function"?qe.call(jt,xe,le):qe,le==null)break e;xe=v({},xe,le);break e;case 2:Za=!0}}le=R.callback,le!==null&&(t.flags|=64,ce&&(t.flags|=8192),ce=f.callbacks,ce===null?f.callbacks=[le]:ce.push(le))}else ce={lane:le,tag:R.tag,payload:R.payload,callback:R.callback,next:null},ge===null?(ae=ge=ce,H=xe):ge=ge.next=ce,x|=le;if(R=R.next,R===null){if(R=f.shared.pending,R===null)break;ce=R,R=ce.next,ce.next=null,f.lastBaseUpdate=ce,f.shared.pending=null}}while(!0);ge===null&&(H=xe),f.baseState=H,f.firstBaseUpdate=ae,f.lastBaseUpdate=ge,d===null&&(f.shared.lanes=0),ts|=x,t.lanes=x,t.memoizedState=xe}}function xm(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function Sm(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)xm(a[t],n)}var gr=N(null),Fl=N(0);function Mm(t,n){t=Ea,Ee(Fl,t),Ee(gr,n),Ea=t|n.baseLanes}function ef(){Ee(Fl,Ea),Ee(gr,gr.current)}function tf(){Ea=Fl.current,Z(gr),Z(Fl)}var fi=N(null),bi=null;function Qa(t){var n=t.alternate;Ee(un,un.current&1),Ee(fi,t),bi===null&&(n===null||gr.current!==null||n.memoizedState!==null)&&(bi=t)}function nf(t){Ee(un,un.current),Ee(fi,t),bi===null&&(bi=t)}function ym(t){t.tag===22?(Ee(un,un.current),Ee(fi,t),bi===null&&(bi=t)):Ja()}function Ja(){Ee(un,un.current),Ee(fi,fi.current)}function di(t){Z(fi),bi===t&&(bi=null),Z(un)}var un=N(0);function Bl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||cd(a)||ud(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ma=0,dt=null,Zt=null,vn=null,zl=!1,_r=!1,Is=!1,Hl=0,Ro=0,vr=null,dS=0;function on(){throw Error(r(321))}function af(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!ci(t[a],n[a]))return!1;return!0}function sf(t,n,a,o,f,d){return ma=d,dt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,I.H=t===null||t.memoizedState===null?s0:Sf,Is=!1,d=a(o,f),Is=!1,_r&&(d=bm(n,a,o,f)),Em(t),d}function Em(t){I.H=Do;var n=Zt!==null&&Zt.next!==null;if(ma=0,vn=Zt=dt=null,zl=!1,Ro=0,vr=null,n)throw Error(r(300));t===null||xn||(t=t.dependencies,t!==null&&Dl(t)&&(xn=!0))}function bm(t,n,a,o){dt=t;var f=0;do{if(_r&&(vr=null),Ro=0,_r=!1,25<=f)throw Error(r(301));if(f+=1,vn=Zt=null,t.updateQueue!=null){var d=t.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}I.H=r0,d=n(a,o)}while(_r);return d}function hS(){var t=I.H,n=t.useState()[0];return n=typeof n.then=="function"?Co(n):n,t=t.useState()[0],(Zt!==null?Zt.memoizedState:null)!==t&&(dt.flags|=1024),n}function rf(){var t=Hl!==0;return Hl=0,t}function of(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function lf(t){if(zl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}zl=!1}ma=0,vn=Zt=dt=null,_r=!1,Ro=Hl=0,vr=null}function qn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return vn===null?dt.memoizedState=vn=t:vn=vn.next=t,vn}function fn(){if(Zt===null){var t=dt.alternate;t=t!==null?t.memoizedState:null}else t=Zt.next;var n=vn===null?dt.memoizedState:vn.next;if(n!==null)vn=n,Zt=t;else{if(t===null)throw dt.alternate===null?Error(r(467)):Error(r(310));Zt=t,t={memoizedState:Zt.memoizedState,baseState:Zt.baseState,baseQueue:Zt.baseQueue,queue:Zt.queue,next:null},vn===null?dt.memoizedState=vn=t:vn=vn.next=t}return vn}function Gl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Co(t){var n=Ro;return Ro+=1,vr===null&&(vr=[]),t=pm(vr,t,n),n=dt,(vn===null?n.memoizedState:vn.next)===null&&(n=n.alternate,I.H=n===null||n.memoizedState===null?s0:Sf),t}function Vl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Co(t);if(t.$$typeof===z)return On(t)}throw Error(r(438,String(t)))}function cf(t){var n=null,a=dt.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=dt.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(f){return f.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Gl(),dt.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),o=0;o<t;o++)a[o]=Y;return n.index++,a}function ga(t,n){return typeof n=="function"?n(t):n}function kl(t){var n=fn();return uf(n,Zt,t)}function uf(t,n,a){var o=t.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=a;var f=t.baseQueue,d=o.pending;if(d!==null){if(f!==null){var x=f.next;f.next=d.next,d.next=x}n.baseQueue=f=d,o.pending=null}if(d=t.baseState,f===null)t.memoizedState=d;else{n=f.next;var R=x=null,H=null,ae=n,ge=!1;do{var xe=ae.lane&-536870913;if(xe!==ae.lane?(bt&xe)===xe:(ma&xe)===xe){var le=ae.revertLane;if(le===0)H!==null&&(H=H.next={lane:0,revertLane:0,gesture:null,action:ae.action,hasEagerState:ae.hasEagerState,eagerState:ae.eagerState,next:null}),xe===dr&&(ge=!0);else if((ma&le)===le){ae=ae.next,le===dr&&(ge=!0);continue}else xe={lane:0,revertLane:ae.revertLane,gesture:null,action:ae.action,hasEagerState:ae.hasEagerState,eagerState:ae.eagerState,next:null},H===null?(R=H=xe,x=d):H=H.next=xe,dt.lanes|=le,ts|=le;xe=ae.action,Is&&a(d,xe),d=ae.hasEagerState?ae.eagerState:a(d,xe)}else le={lane:xe,revertLane:ae.revertLane,gesture:ae.gesture,action:ae.action,hasEagerState:ae.hasEagerState,eagerState:ae.eagerState,next:null},H===null?(R=H=le,x=d):H=H.next=le,dt.lanes|=xe,ts|=xe;ae=ae.next}while(ae!==null&&ae!==n);if(H===null?x=d:H.next=R,!ci(d,t.memoizedState)&&(xn=!0,ge&&(a=hr,a!==null)))throw a;t.memoizedState=d,t.baseState=x,t.baseQueue=H,o.lastRenderedState=d}return f===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function ff(t){var n=fn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var o=a.dispatch,f=a.pending,d=n.memoizedState;if(f!==null){a.pending=null;var x=f=f.next;do d=t(d,x.action),x=x.next;while(x!==f);ci(d,n.memoizedState)||(xn=!0),n.memoizedState=d,n.baseQueue===null&&(n.baseState=d),a.lastRenderedState=d}return[d,o]}function Tm(t,n,a){var o=dt,f=fn(),d=At;if(d){if(a===void 0)throw Error(r(407));a=a()}else a=n();var x=!ci((Zt||f).memoizedState,a);if(x&&(f.memoizedState=a,xn=!0),f=f.queue,pf(Cm.bind(null,o,f,t),[t]),f.getSnapshot!==n||x||vn!==null&&vn.memoizedState.tag&1){if(o.flags|=2048,xr(9,{destroy:void 0},Rm.bind(null,o,f,a,n),null),Jt===null)throw Error(r(349));d||(ma&127)!==0||Am(o,n,a)}return a}function Am(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=dt.updateQueue,n===null?(n=Gl(),dt.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function Rm(t,n,a,o){n.value=a,n.getSnapshot=o,wm(n)&&Dm(t)}function Cm(t,n,a){return a(function(){wm(n)&&Dm(t)})}function wm(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!ci(t,a)}catch{return!0}}function Dm(t){var n=Rs(t,2);n!==null&&ii(n,t,2)}function df(t){var n=qn();if(typeof t=="function"){var a=t;if(t=a(),Is){Te(!0);try{a()}finally{Te(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ga,lastRenderedState:t},n}function Um(t,n,a,o){return t.baseState=a,uf(t,Zt,typeof o=="function"?o:ga)}function pS(t,n,a,o,f){if(ql(t))throw Error(r(485));if(t=n.action,t!==null){var d={payload:f,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(x){d.listeners.push(x)}};I.T!==null?a(!0):d.isTransition=!1,o(d),a=n.pending,a===null?(d.next=n.pending=d,Nm(n,d)):(d.next=a.next,n.pending=a.next=d)}}function Nm(t,n){var a=n.action,o=n.payload,f=t.state;if(n.isTransition){var d=I.T,x={};I.T=x;try{var R=a(f,o),H=I.S;H!==null&&H(x,R),Lm(t,n,R)}catch(ae){hf(t,n,ae)}finally{d!==null&&x.types!==null&&(d.types=x.types),I.T=d}}else try{d=a(f,o),Lm(t,n,d)}catch(ae){hf(t,n,ae)}}function Lm(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Om(t,n,o)},function(o){return hf(t,n,o)}):Om(t,n,a)}function Om(t,n,a){n.status="fulfilled",n.value=a,Pm(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,Nm(t,a)))}function hf(t,n,a){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,Pm(n),n=n.next;while(n!==o)}t.action=null}function Pm(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Im(t,n){return n}function Fm(t,n){if(At){var a=Jt.formState;if(a!==null){e:{var o=dt;if(At){if(tn){t:{for(var f=tn,d=Ei;f.nodeType!==8;){if(!d){f=null;break t}if(f=Ti(f.nextSibling),f===null){f=null;break t}}d=f.data,f=d==="F!"||d==="F"?f:null}if(f){tn=Ti(f.nextSibling),o=f.data==="F!";break e}}qa(o)}o=!1}o&&(n=a[0])}}return a=qn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Im,lastRenderedState:n},a.queue=o,a=n0.bind(null,dt,o),o.dispatch=a,o=df(!1),d=xf.bind(null,dt,!1,o.queue),o=qn(),f={state:n,dispatch:null,action:t,pending:null},o.queue=f,a=pS.bind(null,dt,f,d,a),f.dispatch=a,o.memoizedState=t,[n,a,!1]}function Bm(t){var n=fn();return zm(n,Zt,t)}function zm(t,n,a){if(n=uf(t,n,Im)[0],t=kl(ga)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=Co(n)}catch(x){throw x===pr?Ll:x}else o=n;n=fn();var f=n.queue,d=f.dispatch;return a!==n.memoizedState&&(dt.flags|=2048,xr(9,{destroy:void 0},mS.bind(null,f,a),null)),[o,d,t]}function mS(t,n){t.action=n}function Hm(t){var n=fn(),a=Zt;if(a!==null)return zm(n,a,t);fn(),n=n.memoizedState,a=fn();var o=a.queue.dispatch;return a.memoizedState=t,[n,o,!1]}function xr(t,n,a,o){return t={tag:t,create:a,deps:o,inst:n,next:null},n=dt.updateQueue,n===null&&(n=Gl(),dt.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(o=a.next,a.next=t,t.next=o,n.lastEffect=t),t}function Gm(){return fn().memoizedState}function Xl(t,n,a,o){var f=qn();dt.flags|=t,f.memoizedState=xr(1|n,{destroy:void 0},a,o===void 0?null:o)}function Wl(t,n,a,o){var f=fn();o=o===void 0?null:o;var d=f.memoizedState.inst;Zt!==null&&o!==null&&af(o,Zt.memoizedState.deps)?f.memoizedState=xr(n,d,a,o):(dt.flags|=t,f.memoizedState=xr(1|n,d,a,o))}function Vm(t,n){Xl(8390656,8,t,n)}function pf(t,n){Wl(2048,8,t,n)}function gS(t){dt.flags|=4;var n=dt.updateQueue;if(n===null)n=Gl(),dt.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function km(t){var n=fn().memoizedState;return gS({ref:n,nextImpl:t}),function(){if((Bt&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function Xm(t,n){return Wl(4,2,t,n)}function Wm(t,n){return Wl(4,4,t,n)}function qm(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Ym(t,n,a){a=a!=null?a.concat([t]):null,Wl(4,4,qm.bind(null,n,t),a)}function mf(){}function Zm(t,n){var a=fn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&af(n,o[1])?o[0]:(a.memoizedState=[t,n],t)}function Km(t,n){var a=fn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&af(n,o[1]))return o[0];if(o=t(),Is){Te(!0);try{t()}finally{Te(!1)}}return a.memoizedState=[o,n],o}function gf(t,n,a){return a===void 0||(ma&1073741824)!==0&&(bt&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=j0(),dt.lanes|=t,ts|=t,a)}function jm(t,n,a,o){return ci(a,n)?a:gr.current!==null?(t=gf(t,a,o),ci(t,n)||(xn=!0),t):(ma&42)===0||(ma&1073741824)!==0&&(bt&261930)===0?(xn=!0,t.memoizedState=a):(t=j0(),dt.lanes|=t,ts|=t,n)}function Qm(t,n,a,o,f){var d=G.p;G.p=d!==0&&8>d?d:8;var x=I.T,R={};I.T=R,xf(t,!1,n,a);try{var H=f(),ae=I.S;if(ae!==null&&ae(R,H),H!==null&&typeof H=="object"&&typeof H.then=="function"){var ge=fS(H,o);wo(t,n,ge,mi(t))}else wo(t,n,o,mi(t))}catch(xe){wo(t,n,{then:function(){},status:"rejected",reason:xe},mi())}finally{G.p=d,x!==null&&R.types!==null&&(x.types=R.types),I.T=x}}function _S(){}function _f(t,n,a,o){if(t.tag!==5)throw Error(r(476));var f=Jm(t).queue;Qm(t,f,n,ee,a===null?_S:function(){return $m(t),a(o)})}function Jm(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:ee,baseState:ee,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ga,lastRenderedState:ee},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ga,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function $m(t){var n=Jm(t);n.next===null&&(n=t.alternate.memoizedState),wo(t,n.next.queue,{},mi())}function vf(){return On(qo)}function e0(){return fn().memoizedState}function t0(){return fn().memoizedState}function vS(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=mi();t=Ka(a);var o=ja(n,t,a);o!==null&&(ii(o,n,a),bo(o,n,a)),n={cache:qu()},t.payload=n;return}n=n.return}}function xS(t,n,a){var o=mi();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},ql(t)?i0(n,a):(a=Pu(t,n,a,o),a!==null&&(ii(a,t,o),a0(a,n,o)))}function n0(t,n,a){var o=mi();wo(t,n,a,o)}function wo(t,n,a,o){var f={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(ql(t))i0(n,f);else{var d=t.alternate;if(t.lanes===0&&(d===null||d.lanes===0)&&(d=n.lastRenderedReducer,d!==null))try{var x=n.lastRenderedState,R=d(x,a);if(f.hasEagerState=!0,f.eagerState=R,ci(R,x))return Al(t,n,f,0),Jt===null&&Tl(),!1}catch{}finally{}if(a=Pu(t,n,f,o),a!==null)return ii(a,t,o),a0(a,n,o),!0}return!1}function xf(t,n,a,o){if(o={lane:2,revertLane:Qf(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},ql(t)){if(n)throw Error(r(479))}else n=Pu(t,a,o,2),n!==null&&ii(n,t,2)}function ql(t){var n=t.alternate;return t===dt||n!==null&&n===dt}function i0(t,n){_r=zl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function a0(t,n,a){if((a&4194048)!==0){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,Wn(t,a)}}var Do={readContext:On,use:Vl,useCallback:on,useContext:on,useEffect:on,useImperativeHandle:on,useLayoutEffect:on,useInsertionEffect:on,useMemo:on,useReducer:on,useRef:on,useState:on,useDebugValue:on,useDeferredValue:on,useTransition:on,useSyncExternalStore:on,useId:on,useHostTransitionStatus:on,useFormState:on,useActionState:on,useOptimistic:on,useMemoCache:on,useCacheRefresh:on};Do.useEffectEvent=on;var s0={readContext:On,use:Vl,useCallback:function(t,n){return qn().memoizedState=[t,n===void 0?null:n],t},useContext:On,useEffect:Vm,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,Xl(4194308,4,qm.bind(null,n,t),a)},useLayoutEffect:function(t,n){return Xl(4194308,4,t,n)},useInsertionEffect:function(t,n){Xl(4,2,t,n)},useMemo:function(t,n){var a=qn();n=n===void 0?null:n;var o=t();if(Is){Te(!0);try{t()}finally{Te(!1)}}return a.memoizedState=[o,n],o},useReducer:function(t,n,a){var o=qn();if(a!==void 0){var f=a(n);if(Is){Te(!0);try{a(n)}finally{Te(!1)}}}else f=n;return o.memoizedState=o.baseState=f,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:f},o.queue=t,t=t.dispatch=xS.bind(null,dt,t),[o.memoizedState,t]},useRef:function(t){var n=qn();return t={current:t},n.memoizedState=t},useState:function(t){t=df(t);var n=t.queue,a=n0.bind(null,dt,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:mf,useDeferredValue:function(t,n){var a=qn();return gf(a,t,n)},useTransition:function(){var t=df(!1);return t=Qm.bind(null,dt,t.queue,!0,!1),qn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var o=dt,f=qn();if(At){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Jt===null)throw Error(r(349));(bt&127)!==0||Am(o,n,a)}f.memoizedState=a;var d={value:a,getSnapshot:n};return f.queue=d,Vm(Cm.bind(null,o,d,t),[t]),o.flags|=2048,xr(9,{destroy:void 0},Rm.bind(null,o,d,a,n),null),a},useId:function(){var t=qn(),n=Jt.identifierPrefix;if(At){var a=Zi,o=Yi;a=(o&~(1<<32-Be(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Hl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=dS++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:vf,useFormState:Fm,useActionState:Fm,useOptimistic:function(t){var n=qn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=xf.bind(null,dt,!0,a),a.dispatch=n,[t,n]},useMemoCache:cf,useCacheRefresh:function(){return qn().memoizedState=vS.bind(null,dt)},useEffectEvent:function(t){var n=qn(),a={impl:t};return n.memoizedState=a,function(){if((Bt&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},Sf={readContext:On,use:Vl,useCallback:Zm,useContext:On,useEffect:pf,useImperativeHandle:Ym,useInsertionEffect:Xm,useLayoutEffect:Wm,useMemo:Km,useReducer:kl,useRef:Gm,useState:function(){return kl(ga)},useDebugValue:mf,useDeferredValue:function(t,n){var a=fn();return jm(a,Zt.memoizedState,t,n)},useTransition:function(){var t=kl(ga)[0],n=fn().memoizedState;return[typeof t=="boolean"?t:Co(t),n]},useSyncExternalStore:Tm,useId:e0,useHostTransitionStatus:vf,useFormState:Bm,useActionState:Bm,useOptimistic:function(t,n){var a=fn();return Um(a,Zt,t,n)},useMemoCache:cf,useCacheRefresh:t0};Sf.useEffectEvent=km;var r0={readContext:On,use:Vl,useCallback:Zm,useContext:On,useEffect:pf,useImperativeHandle:Ym,useInsertionEffect:Xm,useLayoutEffect:Wm,useMemo:Km,useReducer:ff,useRef:Gm,useState:function(){return ff(ga)},useDebugValue:mf,useDeferredValue:function(t,n){var a=fn();return Zt===null?gf(a,t,n):jm(a,Zt.memoizedState,t,n)},useTransition:function(){var t=ff(ga)[0],n=fn().memoizedState;return[typeof t=="boolean"?t:Co(t),n]},useSyncExternalStore:Tm,useId:e0,useHostTransitionStatus:vf,useFormState:Hm,useActionState:Hm,useOptimistic:function(t,n){var a=fn();return Zt!==null?Um(a,Zt,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:cf,useCacheRefresh:t0};r0.useEffectEvent=km;function Mf(t,n,a,o){n=t.memoizedState,a=a(o,n),a=a==null?n:v({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var yf={enqueueSetState:function(t,n,a){t=t._reactInternals;var o=mi(),f=Ka(o);f.payload=n,a!=null&&(f.callback=a),n=ja(t,f,o),n!==null&&(ii(n,t,o),bo(n,t,o))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var o=mi(),f=Ka(o);f.tag=1,f.payload=n,a!=null&&(f.callback=a),n=ja(t,f,o),n!==null&&(ii(n,t,o),bo(n,t,o))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=mi(),o=Ka(a);o.tag=2,n!=null&&(o.callback=n),n=ja(t,o,a),n!==null&&(ii(n,t,a),bo(n,t,a))}};function o0(t,n,a,o,f,d,x){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,d,x):n.prototype&&n.prototype.isPureReactComponent?!go(a,o)||!go(f,d):!0}function l0(t,n,a,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==t&&yf.enqueueReplaceState(n,n.state,null)}function Fs(t,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(t=t.defaultProps){a===n&&(a=v({},a));for(var f in t)a[f]===void 0&&(a[f]=t[f])}return a}function c0(t){bl(t)}function u0(t){console.error(t)}function f0(t){bl(t)}function Yl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function d0(t,n,a){try{var o=t.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function Ef(t,n,a){return a=Ka(a),a.tag=3,a.payload={element:null},a.callback=function(){Yl(t,n)},a}function h0(t){return t=Ka(t),t.tag=3,t}function p0(t,n,a,o){var f=a.type.getDerivedStateFromError;if(typeof f=="function"){var d=o.value;t.payload=function(){return f(d)},t.callback=function(){d0(n,a,o)}}var x=a.stateNode;x!==null&&typeof x.componentDidCatch=="function"&&(t.callback=function(){d0(n,a,o),typeof f!="function"&&(ns===null?ns=new Set([this]):ns.add(this));var R=o.stack;this.componentDidCatch(o.value,{componentStack:R!==null?R:""})})}function SS(t,n,a,o,f){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&fr(n,a,f,!0),a=fi.current,a!==null){switch(a.tag){case 31:case 13:return bi===null?sc():a.alternate===null&&ln===0&&(ln=3),a.flags&=-257,a.flags|=65536,a.lanes=f,o===Ol?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Zf(t,o,f)),!1;case 22:return a.flags|=65536,o===Ol?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Zf(t,o,f)),!1}throw Error(r(435,a.tag))}return Zf(t,o,f),sc(),!1}if(At)return n=fi.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=f,o!==Gu&&(t=Error(r(422),{cause:o}),xo(Si(t,a)))):(o!==Gu&&(n=Error(r(423),{cause:o}),xo(Si(n,a))),t=t.current.alternate,t.flags|=65536,f&=-f,t.lanes|=f,o=Si(o,a),f=Ef(t.stateNode,o,f),Ju(t,f),ln!==4&&(ln=2)),!1;var d=Error(r(520),{cause:o});if(d=Si(d,a),Bo===null?Bo=[d]:Bo.push(d),ln!==4&&(ln=2),n===null)return!0;o=Si(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=f&-f,a.lanes|=t,t=Ef(a.stateNode,o,t),Ju(a,t),!1;case 1:if(n=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(ns===null||!ns.has(d))))return a.flags|=65536,f&=-f,a.lanes|=f,f=h0(f),p0(f,t,a,o),Ju(a,f),!1}a=a.return}while(a!==null);return!1}var bf=Error(r(461)),xn=!1;function Pn(t,n,a,o){n.child=t===null?vm(n,null,a,o):Ps(n,t.child,a,o)}function m0(t,n,a,o,f){a=a.render;var d=n.ref;if("ref"in o){var x={};for(var R in o)R!=="ref"&&(x[R]=o[R])}else x=o;return Us(n),o=sf(t,n,a,x,d,f),R=rf(),t!==null&&!xn?(of(t,n,f),_a(t,n,f)):(At&&R&&zu(n),n.flags|=1,Pn(t,n,o,f),n.child)}function g0(t,n,a,o,f){if(t===null){var d=a.type;return typeof d=="function"&&!Iu(d)&&d.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=d,_0(t,n,d,o,f)):(t=Cl(a.type,null,o,n,n.mode,f),t.ref=n.ref,t.return=n,n.child=t)}if(d=t.child,!Nf(t,f)){var x=d.memoizedProps;if(a=a.compare,a=a!==null?a:go,a(x,o)&&t.ref===n.ref)return _a(t,n,f)}return n.flags|=1,t=fa(d,o),t.ref=n.ref,t.return=n,n.child=t}function _0(t,n,a,o,f){if(t!==null){var d=t.memoizedProps;if(go(d,o)&&t.ref===n.ref)if(xn=!1,n.pendingProps=o=d,Nf(t,f))(t.flags&131072)!==0&&(xn=!0);else return n.lanes=t.lanes,_a(t,n,f)}return Tf(t,n,a,o,f)}function v0(t,n,a,o){var f=o.children,d=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(d=d!==null?d.baseLanes|a:a,t!==null){for(o=n.child=t.child,f=0;o!==null;)f=f|o.lanes|o.childLanes,o=o.sibling;o=f&~d}else o=0,n.child=null;return x0(t,n,d,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Nl(n,d!==null?d.cachePool:null),d!==null?Mm(n,d):ef(),ym(n);else return o=n.lanes=536870912,x0(t,n,d!==null?d.baseLanes|a:a,a,o)}else d!==null?(Nl(n,d.cachePool),Mm(n,d),Ja(),n.memoizedState=null):(t!==null&&Nl(n,null),ef(),Ja());return Pn(t,n,f,a),n.child}function Uo(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function x0(t,n,a,o,f){var d=Zu();return d=d===null?null:{parent:_n._currentValue,pool:d},n.memoizedState={baseLanes:a,cachePool:d},t!==null&&Nl(n,null),ef(),ym(n),t!==null&&fr(t,n,o,!0),n.childLanes=f,null}function Zl(t,n){return n=jl({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function S0(t,n,a){return Ps(n,t.child,null,a),t=Zl(n,n.pendingProps),t.flags|=2,di(n),n.memoizedState=null,t}function MS(t,n,a){var o=n.pendingProps,f=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(At){if(o.mode==="hidden")return t=Zl(n,o),n.lanes=536870912,Uo(null,t);if(nf(n),(t=tn)?(t=Ng(t,Ei),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Xa!==null?{id:Yi,overflow:Zi}:null,retryLane:536870912,hydrationErrors:null},a=im(t),a.return=n,n.child=a,Ln=n,tn=null)):t=null,t===null)throw qa(n);return n.lanes=536870912,null}return Zl(n,o)}var d=t.memoizedState;if(d!==null){var x=d.dehydrated;if(nf(n),f)if(n.flags&256)n.flags&=-257,n=S0(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(r(558));else if(xn||fr(t,n,a,!1),f=(a&t.childLanes)!==0,xn||f){if(o=Jt,o!==null&&(x=Bn(o,a),x!==0&&x!==d.retryLane))throw d.retryLane=x,Rs(t,x),ii(o,t,x),bf;sc(),n=S0(t,n,a)}else t=d.treeContext,tn=Ti(x.nextSibling),Ln=n,At=!0,Wa=null,Ei=!1,t!==null&&rm(n,t),n=Zl(n,o),n.flags|=4096;return n}return t=fa(t.child,{mode:o.mode,children:o.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Kl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function Tf(t,n,a,o,f){return Us(n),a=sf(t,n,a,o,void 0,f),o=rf(),t!==null&&!xn?(of(t,n,f),_a(t,n,f)):(At&&o&&zu(n),n.flags|=1,Pn(t,n,a,f),n.child)}function M0(t,n,a,o,f,d){return Us(n),n.updateQueue=null,a=bm(n,o,a,f),Em(t),o=rf(),t!==null&&!xn?(of(t,n,d),_a(t,n,d)):(At&&o&&zu(n),n.flags|=1,Pn(t,n,a,d),n.child)}function y0(t,n,a,o,f){if(Us(n),n.stateNode===null){var d=or,x=a.contextType;typeof x=="object"&&x!==null&&(d=On(x)),d=new a(o,d),n.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=yf,n.stateNode=d,d._reactInternals=n,d=n.stateNode,d.props=o,d.state=n.memoizedState,d.refs={},ju(n),x=a.contextType,d.context=typeof x=="object"&&x!==null?On(x):or,d.state=n.memoizedState,x=a.getDerivedStateFromProps,typeof x=="function"&&(Mf(n,a,x,o),d.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(x=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),x!==d.state&&yf.enqueueReplaceState(d,d.state,null),Ao(n,o,d,f),To(),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(t===null){d=n.stateNode;var R=n.memoizedProps,H=Fs(a,R);d.props=H;var ae=d.context,ge=a.contextType;x=or,typeof ge=="object"&&ge!==null&&(x=On(ge));var xe=a.getDerivedStateFromProps;ge=typeof xe=="function"||typeof d.getSnapshotBeforeUpdate=="function",R=n.pendingProps!==R,ge||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(R||ae!==x)&&l0(n,d,o,x),Za=!1;var le=n.memoizedState;d.state=le,Ao(n,o,d,f),To(),ae=n.memoizedState,R||le!==ae||Za?(typeof xe=="function"&&(Mf(n,a,xe,o),ae=n.memoizedState),(H=Za||o0(n,a,H,o,le,ae,x))?(ge||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(n.flags|=4194308)):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=ae),d.props=o,d.state=ae,d.context=x,o=H):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{d=n.stateNode,Qu(t,n),x=n.memoizedProps,ge=Fs(a,x),d.props=ge,xe=n.pendingProps,le=d.context,ae=a.contextType,H=or,typeof ae=="object"&&ae!==null&&(H=On(ae)),R=a.getDerivedStateFromProps,(ae=typeof R=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(x!==xe||le!==H)&&l0(n,d,o,H),Za=!1,le=n.memoizedState,d.state=le,Ao(n,o,d,f),To();var ce=n.memoizedState;x!==xe||le!==ce||Za||t!==null&&t.dependencies!==null&&Dl(t.dependencies)?(typeof R=="function"&&(Mf(n,a,R,o),ce=n.memoizedState),(ge=Za||o0(n,a,ge,o,le,ce,H)||t!==null&&t.dependencies!==null&&Dl(t.dependencies))?(ae||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(o,ce,H),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(o,ce,H)),typeof d.componentDidUpdate=="function"&&(n.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof d.componentDidUpdate!="function"||x===t.memoizedProps&&le===t.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||x===t.memoizedProps&&le===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=ce),d.props=o,d.state=ce,d.context=H,o=ge):(typeof d.componentDidUpdate!="function"||x===t.memoizedProps&&le===t.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||x===t.memoizedProps&&le===t.memoizedState||(n.flags|=1024),o=!1)}return d=o,Kl(t,n),o=(n.flags&128)!==0,d||o?(d=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:d.render(),n.flags|=1,t!==null&&o?(n.child=Ps(n,t.child,null,f),n.child=Ps(n,null,a,f)):Pn(t,n,a,f),n.memoizedState=d.state,t=n.child):t=_a(t,n,f),t}function E0(t,n,a,o){return ws(),n.flags|=256,Pn(t,n,a,o),n.child}var Af={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Rf(t){return{baseLanes:t,cachePool:dm()}}function Cf(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=pi),t}function b0(t,n,a){var o=n.pendingProps,f=!1,d=(n.flags&128)!==0,x;if((x=d)||(x=t!==null&&t.memoizedState===null?!1:(un.current&2)!==0),x&&(f=!0,n.flags&=-129),x=(n.flags&32)!==0,n.flags&=-33,t===null){if(At){if(f?Qa(n):Ja(),(t=tn)?(t=Ng(t,Ei),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Xa!==null?{id:Yi,overflow:Zi}:null,retryLane:536870912,hydrationErrors:null},a=im(t),a.return=n,n.child=a,Ln=n,tn=null)):t=null,t===null)throw qa(n);return ud(t)?n.lanes=32:n.lanes=536870912,null}var R=o.children;return o=o.fallback,f?(Ja(),f=n.mode,R=jl({mode:"hidden",children:R},f),o=Cs(o,f,a,null),R.return=n,o.return=n,R.sibling=o,n.child=R,o=n.child,o.memoizedState=Rf(a),o.childLanes=Cf(t,x,a),n.memoizedState=Af,Uo(null,o)):(Qa(n),wf(n,R))}var H=t.memoizedState;if(H!==null&&(R=H.dehydrated,R!==null)){if(d)n.flags&256?(Qa(n),n.flags&=-257,n=Df(t,n,a)):n.memoizedState!==null?(Ja(),n.child=t.child,n.flags|=128,n=null):(Ja(),R=o.fallback,f=n.mode,o=jl({mode:"visible",children:o.children},f),R=Cs(R,f,a,null),R.flags|=2,o.return=n,R.return=n,o.sibling=R,n.child=o,Ps(n,t.child,null,a),o=n.child,o.memoizedState=Rf(a),o.childLanes=Cf(t,x,a),n.memoizedState=Af,n=Uo(null,o));else if(Qa(n),ud(R)){if(x=R.nextSibling&&R.nextSibling.dataset,x)var ae=x.dgst;x=ae,o=Error(r(419)),o.stack="",o.digest=x,xo({value:o,source:null,stack:null}),n=Df(t,n,a)}else if(xn||fr(t,n,a,!1),x=(a&t.childLanes)!==0,xn||x){if(x=Jt,x!==null&&(o=Bn(x,a),o!==0&&o!==H.retryLane))throw H.retryLane=o,Rs(t,o),ii(x,t,o),bf;cd(R)||sc(),n=Df(t,n,a)}else cd(R)?(n.flags|=192,n.child=t.child,n=null):(t=H.treeContext,tn=Ti(R.nextSibling),Ln=n,At=!0,Wa=null,Ei=!1,t!==null&&rm(n,t),n=wf(n,o.children),n.flags|=4096);return n}return f?(Ja(),R=o.fallback,f=n.mode,H=t.child,ae=H.sibling,o=fa(H,{mode:"hidden",children:o.children}),o.subtreeFlags=H.subtreeFlags&65011712,ae!==null?R=fa(ae,R):(R=Cs(R,f,a,null),R.flags|=2),R.return=n,o.return=n,o.sibling=R,n.child=o,Uo(null,o),o=n.child,R=t.child.memoizedState,R===null?R=Rf(a):(f=R.cachePool,f!==null?(H=_n._currentValue,f=f.parent!==H?{parent:H,pool:H}:f):f=dm(),R={baseLanes:R.baseLanes|a,cachePool:f}),o.memoizedState=R,o.childLanes=Cf(t,x,a),n.memoizedState=Af,Uo(t.child,o)):(Qa(n),a=t.child,t=a.sibling,a=fa(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,t!==null&&(x=n.deletions,x===null?(n.deletions=[t],n.flags|=16):x.push(t)),n.child=a,n.memoizedState=null,a)}function wf(t,n){return n=jl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function jl(t,n){return t=ui(22,t,null,n),t.lanes=0,t}function Df(t,n,a){return Ps(n,t.child,null,a),t=wf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function T0(t,n,a){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),Xu(t.return,n,a)}function Uf(t,n,a,o,f,d){var x=t.memoizedState;x===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:f,treeForkCount:d}:(x.isBackwards=n,x.rendering=null,x.renderingStartTime=0,x.last=o,x.tail=a,x.tailMode=f,x.treeForkCount=d)}function A0(t,n,a){var o=n.pendingProps,f=o.revealOrder,d=o.tail;o=o.children;var x=un.current,R=(x&2)!==0;if(R?(x=x&1|2,n.flags|=128):x&=1,Ee(un,x),Pn(t,n,o,a),o=At?vo:0,!R&&t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&T0(t,a,n);else if(t.tag===19)T0(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(f){case"forwards":for(a=n.child,f=null;a!==null;)t=a.alternate,t!==null&&Bl(t)===null&&(f=a),a=a.sibling;a=f,a===null?(f=n.child,n.child=null):(f=a.sibling,a.sibling=null),Uf(n,!1,f,a,d,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,f=n.child,n.child=null;f!==null;){if(t=f.alternate,t!==null&&Bl(t)===null){n.child=f;break}t=f.sibling,f.sibling=a,a=f,f=t}Uf(n,!0,a,null,d,o);break;case"together":Uf(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function _a(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),ts|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(fr(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=fa(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=fa(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function Nf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&Dl(t)))}function yS(t,n,a){switch(n.tag){case 3:Me(n,n.stateNode.containerInfo),Ya(n,_n,t.memoizedState.cache),ws();break;case 27:case 5:nt(n);break;case 4:Me(n,n.stateNode.containerInfo);break;case 10:Ya(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,nf(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Qa(n),n.flags|=128,null):(a&n.child.childLanes)!==0?b0(t,n,a):(Qa(n),t=_a(t,n,a),t!==null?t.sibling:null);Qa(n);break;case 19:var f=(t.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(fr(t,n,a,!1),o=(a&n.childLanes)!==0),f){if(o)return A0(t,n,a);n.flags|=128}if(f=n.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),Ee(un,un.current),o)break;return null;case 22:return n.lanes=0,v0(t,n,a,n.pendingProps);case 24:Ya(n,_n,t.memoizedState.cache)}return _a(t,n,a)}function R0(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)xn=!0;else{if(!Nf(t,a)&&(n.flags&128)===0)return xn=!1,yS(t,n,a);xn=(t.flags&131072)!==0}else xn=!1,At&&(n.flags&1048576)!==0&&sm(n,vo,n.index);switch(n.lanes=0,n.tag){case 16:e:{var o=n.pendingProps;if(t=Ls(n.elementType),n.type=t,typeof t=="function")Iu(t)?(o=Fs(t,o),n.tag=1,n=y0(null,n,t,o,a)):(n.tag=0,n=Tf(null,n,t,o,a));else{if(t!=null){var f=t.$$typeof;if(f===C){n.tag=11,n=m0(null,n,t,o,a);break e}else if(f===P){n.tag=14,n=g0(null,n,t,o,a);break e}}throw n=de(t)||t,Error(r(306,n,""))}}return n;case 0:return Tf(t,n,n.type,n.pendingProps,a);case 1:return o=n.type,f=Fs(o,n.pendingProps),y0(t,n,o,f,a);case 3:e:{if(Me(n,n.stateNode.containerInfo),t===null)throw Error(r(387));o=n.pendingProps;var d=n.memoizedState;f=d.element,Qu(t,n),Ao(n,o,null,a);var x=n.memoizedState;if(o=x.cache,Ya(n,_n,o),o!==d.cache&&Wu(n,[_n],a,!0),To(),o=x.element,d.isDehydrated)if(d={element:o,isDehydrated:!1,cache:x.cache},n.updateQueue.baseState=d,n.memoizedState=d,n.flags&256){n=E0(t,n,o,a);break e}else if(o!==f){f=Si(Error(r(424)),n),xo(f),n=E0(t,n,o,a);break e}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(tn=Ti(t.firstChild),Ln=n,At=!0,Wa=null,Ei=!0,a=vm(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(ws(),o===f){n=_a(t,n,a);break e}Pn(t,n,o,a)}n=n.child}return n;case 26:return Kl(t,n),t===null?(a=Bg(n.type,null,n.pendingProps,null))?n.memoizedState=a:At||(a=n.type,t=n.pendingProps,o=dc(ie.current).createElement(a),o[Lt]=n,o[en]=t,In(o,a,t),gn(o),n.stateNode=o):n.memoizedState=Bg(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return nt(n),t===null&&At&&(o=n.stateNode=Pg(n.type,n.pendingProps,ie.current),Ln=n,Ei=!0,f=tn,rs(n.type)?(fd=f,tn=Ti(o.firstChild)):tn=f),Pn(t,n,n.pendingProps.children,a),Kl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&At&&((f=o=tn)&&(o=JS(o,n.type,n.pendingProps,Ei),o!==null?(n.stateNode=o,Ln=n,tn=Ti(o.firstChild),Ei=!1,f=!0):f=!1),f||qa(n)),nt(n),f=n.type,d=n.pendingProps,x=t!==null?t.memoizedProps:null,o=d.children,rd(f,d)?o=null:x!==null&&rd(f,x)&&(n.flags|=32),n.memoizedState!==null&&(f=sf(t,n,hS,null,null,a),qo._currentValue=f),Kl(t,n),Pn(t,n,o,a),n.child;case 6:return t===null&&At&&((t=a=tn)&&(a=$S(a,n.pendingProps,Ei),a!==null?(n.stateNode=a,Ln=n,tn=null,t=!0):t=!1),t||qa(n)),null;case 13:return b0(t,n,a);case 4:return Me(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=Ps(n,null,o,a):Pn(t,n,o,a),n.child;case 11:return m0(t,n,n.type,n.pendingProps,a);case 7:return Pn(t,n,n.pendingProps,a),n.child;case 8:return Pn(t,n,n.pendingProps.children,a),n.child;case 12:return Pn(t,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Ya(n,n.type,o.value),Pn(t,n,o.children,a),n.child;case 9:return f=n.type._context,o=n.pendingProps.children,Us(n),f=On(f),o=o(f),n.flags|=1,Pn(t,n,o,a),n.child;case 14:return g0(t,n,n.type,n.pendingProps,a);case 15:return _0(t,n,n.type,n.pendingProps,a);case 19:return A0(t,n,a);case 31:return MS(t,n,a);case 22:return v0(t,n,a,n.pendingProps);case 24:return Us(n),o=On(_n),t===null?(f=Zu(),f===null&&(f=Jt,d=qu(),f.pooledCache=d,d.refCount++,d!==null&&(f.pooledCacheLanes|=a),f=d),n.memoizedState={parent:o,cache:f},ju(n),Ya(n,_n,f)):((t.lanes&a)!==0&&(Qu(t,n),Ao(n,null,null,a),To()),f=t.memoizedState,d=n.memoizedState,f.parent!==o?(f={parent:o,cache:o},n.memoizedState=f,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=f),Ya(n,_n,o)):(o=d.cache,Ya(n,_n,o),o!==f.cache&&Wu(n,[_n],a,!0))),Pn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function va(t){t.flags|=4}function Lf(t,n,a,o,f){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(f&335544128)===f)if(t.stateNode.complete)t.flags|=8192;else if(eg())t.flags|=8192;else throw Os=Ol,Ku}else t.flags&=-16777217}function C0(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!kg(n))if(eg())t.flags|=8192;else throw Os=Ol,Ku}function Ql(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?ye():536870912,t.lanes|=n,Er|=n)}function No(t,n){if(!At)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function nn(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,o=0;if(n)for(var f=t.child;f!==null;)a|=f.lanes|f.childLanes,o|=f.subtreeFlags&65011712,o|=f.flags&65011712,f.return=t,f=f.sibling;else for(f=t.child;f!==null;)a|=f.lanes|f.childLanes,o|=f.subtreeFlags,o|=f.flags,f.return=t,f=f.sibling;return t.subtreeFlags|=o,t.childLanes=a,n}function ES(t,n,a){var o=n.pendingProps;switch(Hu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return nn(n),null;case 1:return nn(n),null;case 3:return a=n.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),pa(_n),ze(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(ur(n)?va(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Vu())),nn(n),null;case 26:var f=n.type,d=n.memoizedState;return t===null?(va(n),d!==null?(nn(n),C0(n,d)):(nn(n),Lf(n,f,null,o,a))):d?d!==t.memoizedState?(va(n),nn(n),C0(n,d)):(nn(n),n.flags&=-16777217):(t=t.memoizedProps,t!==o&&va(n),nn(n),Lf(n,f,t,o,a)),null;case 27:if(Qe(n),a=ie.current,f=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&va(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return nn(n),null}t=Ce.current,ur(n)?om(n):(t=Pg(f,o,a),n.stateNode=t,va(n))}return nn(n),null;case 5:if(Qe(n),f=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&va(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return nn(n),null}if(d=Ce.current,ur(n))om(n);else{var x=dc(ie.current);switch(d){case 1:d=x.createElementNS("http://www.w3.org/2000/svg",f);break;case 2:d=x.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;default:switch(f){case"svg":d=x.createElementNS("http://www.w3.org/2000/svg",f);break;case"math":d=x.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;case"script":d=x.createElement("div"),d.innerHTML="<script><\/script>",d=d.removeChild(d.firstChild);break;case"select":d=typeof o.is=="string"?x.createElement("select",{is:o.is}):x.createElement("select"),o.multiple?d.multiple=!0:o.size&&(d.size=o.size);break;default:d=typeof o.is=="string"?x.createElement(f,{is:o.is}):x.createElement(f)}}d[Lt]=n,d[en]=o;e:for(x=n.child;x!==null;){if(x.tag===5||x.tag===6)d.appendChild(x.stateNode);else if(x.tag!==4&&x.tag!==27&&x.child!==null){x.child.return=x,x=x.child;continue}if(x===n)break e;for(;x.sibling===null;){if(x.return===null||x.return===n)break e;x=x.return}x.sibling.return=x.return,x=x.sibling}n.stateNode=d;e:switch(In(d,f,o),f){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&va(n)}}return nn(n),Lf(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==o&&va(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(r(166));if(t=ie.current,ur(n)){if(t=n.stateNode,a=n.memoizedProps,o=null,f=Ln,f!==null)switch(f.tag){case 27:case 5:o=f.memoizedProps}t[Lt]=n,t=!!(t.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||bg(t.nodeValue,a)),t||qa(n,!0)}else t=dc(t).createTextNode(o),t[Lt]=n,n.stateNode=t}return nn(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(o=ur(n),a!==null){if(t===null){if(!o)throw Error(r(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[Lt]=n}else ws(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;nn(n),t=!1}else a=Vu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(di(n),n):(di(n),null);if((n.flags&128)!==0)throw Error(r(558))}return nn(n),null;case 13:if(o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(f=ur(n),o!==null&&o.dehydrated!==null){if(t===null){if(!f)throw Error(r(318));if(f=n.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(r(317));f[Lt]=n}else ws(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;nn(n),f=!1}else f=Vu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=f),f=!0;if(!f)return n.flags&256?(di(n),n):(di(n),null)}return di(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,t=t!==null&&t.memoizedState!==null,a&&(o=n.child,f=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(f=o.alternate.memoizedState.cachePool.pool),d=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(d=o.memoizedState.cachePool.pool),d!==f&&(o.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),Ql(n,n.updateQueue),nn(n),null);case 4:return ze(),t===null&&td(n.stateNode.containerInfo),nn(n),null;case 10:return pa(n.type),nn(n),null;case 19:if(Z(un),o=n.memoizedState,o===null)return nn(n),null;if(f=(n.flags&128)!==0,d=o.rendering,d===null)if(f)No(o,!1);else{if(ln!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(d=Bl(t),d!==null){for(n.flags|=128,No(o,!1),t=d.updateQueue,n.updateQueue=t,Ql(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)nm(a,t),a=a.sibling;return Ee(un,un.current&1|2),At&&da(n,o.treeForkCount),n.child}t=t.sibling}o.tail!==null&&St()>nc&&(n.flags|=128,f=!0,No(o,!1),n.lanes=4194304)}else{if(!f)if(t=Bl(d),t!==null){if(n.flags|=128,f=!0,t=t.updateQueue,n.updateQueue=t,Ql(n,t),No(o,!0),o.tail===null&&o.tailMode==="hidden"&&!d.alternate&&!At)return nn(n),null}else 2*St()-o.renderingStartTime>nc&&a!==536870912&&(n.flags|=128,f=!0,No(o,!1),n.lanes=4194304);o.isBackwards?(d.sibling=n.child,n.child=d):(t=o.last,t!==null?t.sibling=d:n.child=d,o.last=d)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=St(),t.sibling=null,a=un.current,Ee(un,f?a&1|2:a&1),At&&da(n,o.treeForkCount),t):(nn(n),null);case 22:case 23:return di(n),tf(),o=n.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(nn(n),n.subtreeFlags&6&&(n.flags|=8192)):nn(n),a=n.updateQueue,a!==null&&Ql(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),t!==null&&Z(Ns),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),pa(_n),nn(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function bS(t,n){switch(Hu(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return pa(_n),ze(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return Qe(n),null;case 31:if(n.memoizedState!==null){if(di(n),n.alternate===null)throw Error(r(340));ws()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(di(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));ws()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return Z(un),null;case 4:return ze(),null;case 10:return pa(n.type),null;case 22:case 23:return di(n),tf(),t!==null&&Z(Ns),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return pa(_n),null;case 25:return null;default:return null}}function w0(t,n){switch(Hu(n),n.tag){case 3:pa(_n),ze();break;case 26:case 27:case 5:Qe(n);break;case 4:ze();break;case 31:n.memoizedState!==null&&di(n);break;case 13:di(n);break;case 19:Z(un);break;case 10:pa(n.type);break;case 22:case 23:di(n),tf(),t!==null&&Z(Ns);break;case 24:pa(_n)}}function Lo(t,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var f=o.next;a=f;do{if((a.tag&t)===t){o=void 0;var d=a.create,x=a.inst;o=d(),x.destroy=o}a=a.next}while(a!==f)}}catch(R){Wt(n,n.return,R)}}function $a(t,n,a){try{var o=n.updateQueue,f=o!==null?o.lastEffect:null;if(f!==null){var d=f.next;o=d;do{if((o.tag&t)===t){var x=o.inst,R=x.destroy;if(R!==void 0){x.destroy=void 0,f=n;var H=a,ae=R;try{ae()}catch(ge){Wt(f,H,ge)}}}o=o.next}while(o!==d)}}catch(ge){Wt(n,n.return,ge)}}function D0(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{Sm(n,a)}catch(o){Wt(t,t.return,o)}}}function U0(t,n,a){a.props=Fs(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(o){Wt(t,n,o)}}function Oo(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof a=="function"?t.refCleanup=a(o):a.current=o}}catch(f){Wt(t,n,f)}}function Ki(t,n){var a=t.ref,o=t.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(f){Wt(t,n,f)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(f){Wt(t,n,f)}else a.current=null}function N0(t){var n=t.type,a=t.memoizedProps,o=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(f){Wt(t,t.return,f)}}function Of(t,n,a){try{var o=t.stateNode;qS(o,t.type,a,n),o[en]=n}catch(f){Wt(t,t.return,f)}}function L0(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&rs(t.type)||t.tag===4}function Pf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||L0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&rs(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function If(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=ca));else if(o!==4&&(o===27&&rs(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(If(t,n,a),t=t.sibling;t!==null;)If(t,n,a),t=t.sibling}function Jl(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(o!==4&&(o===27&&rs(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Jl(t,n,a),t=t.sibling;t!==null;)Jl(t,n,a),t=t.sibling}function O0(t){var n=t.stateNode,a=t.memoizedProps;try{for(var o=t.type,f=n.attributes;f.length;)n.removeAttributeNode(f[0]);In(n,o,a),n[Lt]=t,n[en]=a}catch(d){Wt(t,t.return,d)}}var xa=!1,Sn=!1,Ff=!1,P0=typeof WeakSet=="function"?WeakSet:Set,wn=null;function TS(t,n){if(t=t.containerInfo,ad=xc,t=Yp(t),wu(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var f=o.anchorOffset,d=o.focusNode;o=o.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break e}var x=0,R=-1,H=-1,ae=0,ge=0,xe=t,le=null;t:for(;;){for(var ce;xe!==a||f!==0&&xe.nodeType!==3||(R=x+f),xe!==d||o!==0&&xe.nodeType!==3||(H=x+o),xe.nodeType===3&&(x+=xe.nodeValue.length),(ce=xe.firstChild)!==null;)le=xe,xe=ce;for(;;){if(xe===t)break t;if(le===a&&++ae===f&&(R=x),le===d&&++ge===o&&(H=x),(ce=xe.nextSibling)!==null)break;xe=le,le=xe.parentNode}xe=ce}a=R===-1||H===-1?null:{start:R,end:H}}else a=null}a=a||{start:0,end:0}}else a=null;for(sd={focusedElem:t,selectionRange:a},xc=!1,wn=n;wn!==null;)if(n=wn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,wn=t;else for(;wn!==null;){switch(n=wn,d=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)f=t[a],f.ref.impl=f.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&d!==null){t=void 0,a=n,f=d.memoizedProps,d=d.memoizedState,o=a.stateNode;try{var qe=Fs(a.type,f);t=o.getSnapshotBeforeUpdate(qe,d),o.__reactInternalSnapshotBeforeUpdate=t}catch(it){Wt(a,a.return,it)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)ld(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":ld(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,wn=t;break}wn=n.return}}function I0(t,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:Ma(t,a),o&4&&Lo(5,a);break;case 1:if(Ma(t,a),o&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(x){Wt(a,a.return,x)}else{var f=Fs(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(f,n,t.__reactInternalSnapshotBeforeUpdate)}catch(x){Wt(a,a.return,x)}}o&64&&D0(a),o&512&&Oo(a,a.return);break;case 3:if(Ma(t,a),o&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Sm(t,n)}catch(x){Wt(a,a.return,x)}}break;case 27:n===null&&o&4&&O0(a);case 26:case 5:Ma(t,a),n===null&&o&4&&N0(a),o&512&&Oo(a,a.return);break;case 12:Ma(t,a);break;case 31:Ma(t,a),o&4&&z0(t,a);break;case 13:Ma(t,a),o&4&&H0(t,a),o&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=OS.bind(null,a),eM(t,a))));break;case 22:if(o=a.memoizedState!==null||xa,!o){n=n!==null&&n.memoizedState!==null||Sn,f=xa;var d=Sn;xa=o,(Sn=n)&&!d?ya(t,a,(a.subtreeFlags&8772)!==0):Ma(t,a),xa=f,Sn=d}break;case 30:break;default:Ma(t,a)}}function F0(t){var n=t.alternate;n!==null&&(t.alternate=null,F0(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Ha(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var rn=null,$n=!1;function Sa(t,n,a){for(a=a.child;a!==null;)B0(t,n,a),a=a.sibling}function B0(t,n,a){if(he&&typeof he.onCommitFiberUnmount=="function")try{he.onCommitFiberUnmount(fe,a)}catch{}switch(a.tag){case 26:Sn||Ki(a,n),Sa(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Sn||Ki(a,n);var o=rn,f=$n;rs(a.type)&&(rn=a.stateNode,$n=!1),Sa(t,n,a),ko(a.stateNode),rn=o,$n=f;break;case 5:Sn||Ki(a,n);case 6:if(o=rn,f=$n,rn=null,Sa(t,n,a),rn=o,$n=f,rn!==null)if($n)try{(rn.nodeType===9?rn.body:rn.nodeName==="HTML"?rn.ownerDocument.body:rn).removeChild(a.stateNode)}catch(d){Wt(a,n,d)}else try{rn.removeChild(a.stateNode)}catch(d){Wt(a,n,d)}break;case 18:rn!==null&&($n?(t=rn,Dg(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),Ur(t)):Dg(rn,a.stateNode));break;case 4:o=rn,f=$n,rn=a.stateNode.containerInfo,$n=!0,Sa(t,n,a),rn=o,$n=f;break;case 0:case 11:case 14:case 15:$a(2,a,n),Sn||$a(4,a,n),Sa(t,n,a);break;case 1:Sn||(Ki(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&U0(a,n,o)),Sa(t,n,a);break;case 21:Sa(t,n,a);break;case 22:Sn=(o=Sn)||a.memoizedState!==null,Sa(t,n,a),Sn=o;break;default:Sa(t,n,a)}}function z0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Ur(t)}catch(a){Wt(n,n.return,a)}}}function H0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Ur(t)}catch(a){Wt(n,n.return,a)}}function AS(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new P0),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new P0),n;default:throw Error(r(435,t.tag))}}function $l(t,n){var a=AS(t);n.forEach(function(o){if(!a.has(o)){a.add(o);var f=PS.bind(null,t,o);o.then(f,f)}})}function ei(t,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var f=a[o],d=t,x=n,R=x;e:for(;R!==null;){switch(R.tag){case 27:if(rs(R.type)){rn=R.stateNode,$n=!1;break e}break;case 5:rn=R.stateNode,$n=!1;break e;case 3:case 4:rn=R.stateNode.containerInfo,$n=!0;break e}R=R.return}if(rn===null)throw Error(r(160));B0(d,x,f),rn=null,$n=!1,d=f.alternate,d!==null&&(d.return=null),f.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)G0(n,t),n=n.sibling}var Ii=null;function G0(t,n){var a=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:ei(n,t),ti(t),o&4&&($a(3,t,t.return),Lo(3,t),$a(5,t,t.return));break;case 1:ei(n,t),ti(t),o&512&&(Sn||a===null||Ki(a,a.return)),o&64&&xa&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var f=Ii;if(ei(n,t),ti(t),o&512&&(Sn||a===null||Ki(a,a.return)),o&4){var d=a!==null?a.memoizedState:null;if(o=t.memoizedState,a===null)if(o===null)if(t.stateNode===null){e:{o=t.type,a=t.memoizedProps,f=f.ownerDocument||f;t:switch(o){case"title":d=f.getElementsByTagName("title")[0],(!d||d[za]||d[Lt]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=f.createElement(o),f.head.insertBefore(d,f.querySelector("head > title"))),In(d,o,a),d[Lt]=t,gn(d),o=d;break e;case"link":var x=Gg("link","href",f).get(o+(a.href||""));if(x){for(var R=0;R<x.length;R++)if(d=x[R],d.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){x.splice(R,1);break t}}d=f.createElement(o),In(d,o,a),f.head.appendChild(d);break;case"meta":if(x=Gg("meta","content",f).get(o+(a.content||""))){for(R=0;R<x.length;R++)if(d=x[R],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){x.splice(R,1);break t}}d=f.createElement(o),In(d,o,a),f.head.appendChild(d);break;default:throw Error(r(468,o))}d[Lt]=t,gn(d),o=d}t.stateNode=o}else Vg(f,t.type,t.stateNode);else t.stateNode=Hg(f,o,t.memoizedProps);else d!==o?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,o===null?Vg(f,t.type,t.stateNode):Hg(f,o,t.memoizedProps)):o===null&&t.stateNode!==null&&Of(t,t.memoizedProps,a.memoizedProps)}break;case 27:ei(n,t),ti(t),o&512&&(Sn||a===null||Ki(a,a.return)),a!==null&&o&4&&Of(t,t.memoizedProps,a.memoizedProps);break;case 5:if(ei(n,t),ti(t),o&512&&(Sn||a===null||Ki(a,a.return)),t.flags&32){f=t.stateNode;try{li(f,"")}catch(qe){Wt(t,t.return,qe)}}o&4&&t.stateNode!=null&&(f=t.memoizedProps,Of(t,f,a!==null?a.memoizedProps:f)),o&1024&&(Ff=!0);break;case 6:if(ei(n,t),ti(t),o&4){if(t.stateNode===null)throw Error(r(162));o=t.memoizedProps,a=t.stateNode;try{a.nodeValue=o}catch(qe){Wt(t,t.return,qe)}}break;case 3:if(mc=null,f=Ii,Ii=hc(n.containerInfo),ei(n,t),Ii=f,ti(t),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Ur(n.containerInfo)}catch(qe){Wt(t,t.return,qe)}Ff&&(Ff=!1,V0(t));break;case 4:o=Ii,Ii=hc(t.stateNode.containerInfo),ei(n,t),ti(t),Ii=o;break;case 12:ei(n,t),ti(t);break;case 31:ei(n,t),ti(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,$l(t,o)));break;case 13:ei(n,t),ti(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(tc=St()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,$l(t,o)));break;case 22:f=t.memoizedState!==null;var H=a!==null&&a.memoizedState!==null,ae=xa,ge=Sn;if(xa=ae||f,Sn=ge||H,ei(n,t),Sn=ge,xa=ae,ti(t),o&8192)e:for(n=t.stateNode,n._visibility=f?n._visibility&-2:n._visibility|1,f&&(a===null||H||xa||Sn||Bs(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){H=a=n;try{if(d=H.stateNode,f)x=d.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none";else{R=H.stateNode;var xe=H.memoizedProps.style,le=xe!=null&&xe.hasOwnProperty("display")?xe.display:null;R.style.display=le==null||typeof le=="boolean"?"":(""+le).trim()}}catch(qe){Wt(H,H.return,qe)}}}else if(n.tag===6){if(a===null){H=n;try{H.stateNode.nodeValue=f?"":H.memoizedProps}catch(qe){Wt(H,H.return,qe)}}}else if(n.tag===18){if(a===null){H=n;try{var ce=H.stateNode;f?Ug(ce,!0):Ug(H.stateNode,!1)}catch(qe){Wt(H,H.return,qe)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=t.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,$l(t,a))));break;case 19:ei(n,t),ti(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,$l(t,o)));break;case 30:break;case 21:break;default:ei(n,t),ti(t)}}function ti(t){var n=t.flags;if(n&2){try{for(var a,o=t.return;o!==null;){if(L0(o)){a=o;break}o=o.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var f=a.stateNode,d=Pf(t);Jl(t,d,f);break;case 5:var x=a.stateNode;a.flags&32&&(li(x,""),a.flags&=-33);var R=Pf(t);Jl(t,R,x);break;case 3:case 4:var H=a.stateNode.containerInfo,ae=Pf(t);If(t,ae,H);break;default:throw Error(r(161))}}catch(ge){Wt(t,t.return,ge)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function V0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;V0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function Ma(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)I0(t,n.alternate,n),n=n.sibling}function Bs(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:$a(4,n,n.return),Bs(n);break;case 1:Ki(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&U0(n,n.return,a),Bs(n);break;case 27:ko(n.stateNode);case 26:case 5:Ki(n,n.return),Bs(n);break;case 22:n.memoizedState===null&&Bs(n);break;case 30:Bs(n);break;default:Bs(n)}t=t.sibling}}function ya(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,f=t,d=n,x=d.flags;switch(d.tag){case 0:case 11:case 15:ya(f,d,a),Lo(4,d);break;case 1:if(ya(f,d,a),o=d,f=o.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(ae){Wt(o,o.return,ae)}if(o=d,f=o.updateQueue,f!==null){var R=o.stateNode;try{var H=f.shared.hiddenCallbacks;if(H!==null)for(f.shared.hiddenCallbacks=null,f=0;f<H.length;f++)xm(H[f],R)}catch(ae){Wt(o,o.return,ae)}}a&&x&64&&D0(d),Oo(d,d.return);break;case 27:O0(d);case 26:case 5:ya(f,d,a),a&&o===null&&x&4&&N0(d),Oo(d,d.return);break;case 12:ya(f,d,a);break;case 31:ya(f,d,a),a&&x&4&&z0(f,d);break;case 13:ya(f,d,a),a&&x&4&&H0(f,d);break;case 22:d.memoizedState===null&&ya(f,d,a),Oo(d,d.return);break;case 30:break;default:ya(f,d,a)}n=n.sibling}}function Bf(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&So(a))}function zf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&So(t))}function Fi(t,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)k0(t,n,a,o),n=n.sibling}function k0(t,n,a,o){var f=n.flags;switch(n.tag){case 0:case 11:case 15:Fi(t,n,a,o),f&2048&&Lo(9,n);break;case 1:Fi(t,n,a,o);break;case 3:Fi(t,n,a,o),f&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&So(t)));break;case 12:if(f&2048){Fi(t,n,a,o),t=n.stateNode;try{var d=n.memoizedProps,x=d.id,R=d.onPostCommit;typeof R=="function"&&R(x,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(H){Wt(n,n.return,H)}}else Fi(t,n,a,o);break;case 31:Fi(t,n,a,o);break;case 13:Fi(t,n,a,o);break;case 23:break;case 22:d=n.stateNode,x=n.alternate,n.memoizedState!==null?d._visibility&2?Fi(t,n,a,o):Po(t,n):d._visibility&2?Fi(t,n,a,o):(d._visibility|=2,Sr(t,n,a,o,(n.subtreeFlags&10256)!==0||!1)),f&2048&&Bf(x,n);break;case 24:Fi(t,n,a,o),f&2048&&zf(n.alternate,n);break;default:Fi(t,n,a,o)}}function Sr(t,n,a,o,f){for(f=f&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var d=t,x=n,R=a,H=o,ae=x.flags;switch(x.tag){case 0:case 11:case 15:Sr(d,x,R,H,f),Lo(8,x);break;case 23:break;case 22:var ge=x.stateNode;x.memoizedState!==null?ge._visibility&2?Sr(d,x,R,H,f):Po(d,x):(ge._visibility|=2,Sr(d,x,R,H,f)),f&&ae&2048&&Bf(x.alternate,x);break;case 24:Sr(d,x,R,H,f),f&&ae&2048&&zf(x.alternate,x);break;default:Sr(d,x,R,H,f)}n=n.sibling}}function Po(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,o=n,f=o.flags;switch(o.tag){case 22:Po(a,o),f&2048&&Bf(o.alternate,o);break;case 24:Po(a,o),f&2048&&zf(o.alternate,o);break;default:Po(a,o)}n=n.sibling}}var Io=8192;function Mr(t,n,a){if(t.subtreeFlags&Io)for(t=t.child;t!==null;)X0(t,n,a),t=t.sibling}function X0(t,n,a){switch(t.tag){case 26:Mr(t,n,a),t.flags&Io&&t.memoizedState!==null&&dM(a,Ii,t.memoizedState,t.memoizedProps);break;case 5:Mr(t,n,a);break;case 3:case 4:var o=Ii;Ii=hc(t.stateNode.containerInfo),Mr(t,n,a),Ii=o;break;case 22:t.memoizedState===null&&(o=t.alternate,o!==null&&o.memoizedState!==null?(o=Io,Io=16777216,Mr(t,n,a),Io=o):Mr(t,n,a));break;default:Mr(t,n,a)}}function W0(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function Fo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];wn=o,Y0(o,t)}W0(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)q0(t),t=t.sibling}function q0(t){switch(t.tag){case 0:case 11:case 15:Fo(t),t.flags&2048&&$a(9,t,t.return);break;case 3:Fo(t);break;case 12:Fo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,ec(t)):Fo(t);break;default:Fo(t)}}function ec(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];wn=o,Y0(o,t)}W0(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:$a(8,n,n.return),ec(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,ec(n));break;default:ec(n)}t=t.sibling}}function Y0(t,n){for(;wn!==null;){var a=wn;switch(a.tag){case 0:case 11:case 15:$a(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:So(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,wn=o;else e:for(a=t;wn!==null;){o=wn;var f=o.sibling,d=o.return;if(F0(o),o===a){wn=null;break e}if(f!==null){f.return=d,wn=f;break e}wn=d}}}var RS={getCacheForType:function(t){var n=On(_n),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return On(_n).controller.signal}},CS=typeof WeakMap=="function"?WeakMap:Map,Bt=0,Jt=null,yt=null,bt=0,Xt=0,hi=null,es=!1,yr=!1,Hf=!1,Ea=0,ln=0,ts=0,zs=0,Gf=0,pi=0,Er=0,Bo=null,ni=null,Vf=!1,tc=0,Z0=0,nc=1/0,ic=null,ns=null,Tn=0,is=null,br=null,ba=0,kf=0,Xf=null,K0=null,zo=0,Wf=null;function mi(){return(Bt&2)!==0&&bt!==0?bt&-bt:I.T!==null?Qf():En()}function j0(){if(pi===0)if((bt&536870912)===0||At){var t=at;at<<=1,(at&3932160)===0&&(at=262144),pi=t}else pi=536870912;return t=fi.current,t!==null&&(t.flags|=32),pi}function ii(t,n,a){(t===Jt&&(Xt===2||Xt===9)||t.cancelPendingCommit!==null)&&(Tr(t,0),as(t,bt,pi,!1)),He(t,a),((Bt&2)===0||t!==Jt)&&(t===Jt&&((Bt&2)===0&&(zs|=a),ln===4&&as(t,bt,pi,!1)),ji(t))}function Q0(t,n,a){if((Bt&6)!==0)throw Error(r(327));var o=!a&&(n&127)===0&&(n&t.expiredLanes)===0||we(t,n),f=o?US(t,n):Yf(t,n,!0),d=o;do{if(f===0){yr&&!o&&as(t,n,0,!1);break}else{if(a=t.current.alternate,d&&!wS(a)){f=Yf(t,n,!1),d=!1;continue}if(f===2){if(d=n,t.errorRecoveryDisabledLanes&d)var x=0;else x=t.pendingLanes&-536870913,x=x!==0?x:x&536870912?536870912:0;if(x!==0){n=x;e:{var R=t;f=Bo;var H=R.current.memoizedState.isDehydrated;if(H&&(Tr(R,x).flags|=256),x=Yf(R,x,!1),x!==2){if(Hf&&!H){R.errorRecoveryDisabledLanes|=d,zs|=d,f=4;break e}d=ni,ni=f,d!==null&&(ni===null?ni=d:ni.push.apply(ni,d))}f=x}if(d=!1,f!==2)continue}}if(f===1){Tr(t,0),as(t,n,0,!0);break}e:{switch(o=t,d=f,d){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:as(o,n,pi,!es);break e;case 2:ni=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(f=tc+300-St(),10<f)){if(as(o,n,pi,!es),me(o,0,!0)!==0)break e;ba=n,o.timeoutHandle=Cg(J0.bind(null,o,a,ni,ic,Vf,n,pi,zs,Er,es,d,"Throttled",-0,0),f);break e}J0(o,a,ni,ic,Vf,n,pi,zs,Er,es,d,null,-0,0)}}break}while(!0);ji(t)}function J0(t,n,a,o,f,d,x,R,H,ae,ge,xe,le,ce){if(t.timeoutHandle=-1,xe=n.subtreeFlags,xe&8192||(xe&16785408)===16785408){xe={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ca},X0(n,d,xe);var qe=(d&62914560)===d?tc-St():(d&4194048)===d?Z0-St():0;if(qe=hM(xe,qe),qe!==null){ba=d,t.cancelPendingCommit=qe(rg.bind(null,t,n,d,a,o,f,x,R,H,ge,xe,null,le,ce)),as(t,d,x,!ae);return}}rg(t,n,d,a,o,f,x,R,H)}function wS(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var f=a[o],d=f.getSnapshot;f=f.value;try{if(!ci(d(),f))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function as(t,n,a,o){n&=~Gf,n&=~zs,t.suspendedLanes|=n,t.pingedLanes&=~n,o&&(t.warmLanes|=n),o=t.expirationTimes;for(var f=n;0<f;){var d=31-Be(f),x=1<<d;o[d]=-1,f&=~x}a!==0&&Ut(t,a,n)}function ac(){return(Bt&6)===0?(Ho(0),!1):!0}function qf(){if(yt!==null){if(Xt===0)var t=yt.return;else t=yt,ha=Ds=null,lf(t),mr=null,yo=0,t=yt;for(;t!==null;)w0(t.alternate,t),t=t.return;yt=null}}function Tr(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,KS(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),ba=0,qf(),Jt=t,yt=a=fa(t.current,null),bt=n,Xt=0,hi=null,es=!1,yr=we(t,n),Hf=!1,Er=pi=Gf=zs=ts=ln=0,ni=Bo=null,Vf=!1,(n&8)!==0&&(n|=n&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=n;0<o;){var f=31-Be(o),d=1<<f;n|=t[f],o&=~d}return Ea=n,Tl(),a}function $0(t,n){dt=null,I.H=Do,n===pr||n===Ll?(n=mm(),Xt=3):n===Ku?(n=mm(),Xt=4):Xt=n===bf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,hi=n,yt===null&&(ln=1,Yl(t,Si(n,t.current)))}function eg(){var t=fi.current;return t===null?!0:(bt&4194048)===bt?bi===null:(bt&62914560)===bt||(bt&536870912)!==0?t===bi:!1}function tg(){var t=I.H;return I.H=Do,t===null?Do:t}function ng(){var t=I.A;return I.A=RS,t}function sc(){ln=4,es||(bt&4194048)!==bt&&fi.current!==null||(yr=!0),(ts&134217727)===0&&(zs&134217727)===0||Jt===null||as(Jt,bt,pi,!1)}function Yf(t,n,a){var o=Bt;Bt|=2;var f=tg(),d=ng();(Jt!==t||bt!==n)&&(ic=null,Tr(t,n)),n=!1;var x=ln;e:do try{if(Xt!==0&&yt!==null){var R=yt,H=hi;switch(Xt){case 8:qf(),x=6;break e;case 3:case 2:case 9:case 6:fi.current===null&&(n=!0);var ae=Xt;if(Xt=0,hi=null,Ar(t,R,H,ae),a&&yr){x=0;break e}break;default:ae=Xt,Xt=0,hi=null,Ar(t,R,H,ae)}}DS(),x=ln;break}catch(ge){$0(t,ge)}while(!0);return n&&t.shellSuspendCounter++,ha=Ds=null,Bt=o,I.H=f,I.A=d,yt===null&&(Jt=null,bt=0,Tl()),x}function DS(){for(;yt!==null;)ig(yt)}function US(t,n){var a=Bt;Bt|=2;var o=tg(),f=ng();Jt!==t||bt!==n?(ic=null,nc=St()+500,Tr(t,n)):yr=we(t,n);e:do try{if(Xt!==0&&yt!==null){n=yt;var d=hi;t:switch(Xt){case 1:Xt=0,hi=null,Ar(t,n,d,1);break;case 2:case 9:if(hm(d)){Xt=0,hi=null,ag(n);break}n=function(){Xt!==2&&Xt!==9||Jt!==t||(Xt=7),ji(t)},d.then(n,n);break e;case 3:Xt=7;break e;case 4:Xt=5;break e;case 7:hm(d)?(Xt=0,hi=null,ag(n)):(Xt=0,hi=null,Ar(t,n,d,7));break;case 5:var x=null;switch(yt.tag){case 26:x=yt.memoizedState;case 5:case 27:var R=yt;if(x?kg(x):R.stateNode.complete){Xt=0,hi=null;var H=R.sibling;if(H!==null)yt=H;else{var ae=R.return;ae!==null?(yt=ae,rc(ae)):yt=null}break t}}Xt=0,hi=null,Ar(t,n,d,5);break;case 6:Xt=0,hi=null,Ar(t,n,d,6);break;case 8:qf(),ln=6;break e;default:throw Error(r(462))}}NS();break}catch(ge){$0(t,ge)}while(!0);return ha=Ds=null,I.H=o,I.A=f,Bt=a,yt!==null?0:(Jt=null,bt=0,Tl(),ln)}function NS(){for(;yt!==null&&!gt();)ig(yt)}function ig(t){var n=R0(t.alternate,t,Ea);t.memoizedProps=t.pendingProps,n===null?rc(t):yt=n}function ag(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=M0(a,n,n.pendingProps,n.type,void 0,bt);break;case 11:n=M0(a,n,n.pendingProps,n.type.render,n.ref,bt);break;case 5:lf(n);default:w0(a,n),n=yt=nm(n,Ea),n=R0(a,n,Ea)}t.memoizedProps=t.pendingProps,n===null?rc(t):yt=n}function Ar(t,n,a,o){ha=Ds=null,lf(n),mr=null,yo=0;var f=n.return;try{if(SS(t,f,n,a,bt)){ln=1,Yl(t,Si(a,t.current)),yt=null;return}}catch(d){if(f!==null)throw yt=f,d;ln=1,Yl(t,Si(a,t.current)),yt=null;return}n.flags&32768?(At||o===1?t=!0:yr||(bt&536870912)!==0?t=!1:(es=t=!0,(o===2||o===9||o===3||o===6)&&(o=fi.current,o!==null&&o.tag===13&&(o.flags|=16384))),sg(n,t)):rc(n)}function rc(t){var n=t;do{if((n.flags&32768)!==0){sg(n,es);return}t=n.return;var a=ES(n.alternate,n,Ea);if(a!==null){yt=a;return}if(n=n.sibling,n!==null){yt=n;return}yt=n=t}while(n!==null);ln===0&&(ln=5)}function sg(t,n){do{var a=bS(t.alternate,t);if(a!==null){a.flags&=32767,yt=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){yt=t;return}yt=t=a}while(t!==null);ln=6,yt=null}function rg(t,n,a,o,f,d,x,R,H){t.cancelPendingCommit=null;do oc();while(Tn!==0);if((Bt&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));if(d=n.lanes|n.childLanes,d|=Ou,Ht(t,a,d,x,R,H),t===Jt&&(yt=Jt=null,bt=0),br=n,is=t,ba=a,kf=d,Xf=f,K0=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,IS(j,function(){return fg(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=I.T,I.T=null,f=G.p,G.p=2,x=Bt,Bt|=4;try{TS(t,n,a)}finally{Bt=x,G.p=f,I.T=o}}Tn=1,og(),lg(),cg()}}function og(){if(Tn===1){Tn=0;var t=is,n=br,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=I.T,I.T=null;var o=G.p;G.p=2;var f=Bt;Bt|=4;try{G0(n,t);var d=sd,x=Yp(t.containerInfo),R=d.focusedElem,H=d.selectionRange;if(x!==R&&R&&R.ownerDocument&&qp(R.ownerDocument.documentElement,R)){if(H!==null&&wu(R)){var ae=H.start,ge=H.end;if(ge===void 0&&(ge=ae),"selectionStart"in R)R.selectionStart=ae,R.selectionEnd=Math.min(ge,R.value.length);else{var xe=R.ownerDocument||document,le=xe&&xe.defaultView||window;if(le.getSelection){var ce=le.getSelection(),qe=R.textContent.length,it=Math.min(H.start,qe),jt=H.end===void 0?it:Math.min(H.end,qe);!ce.extend&&it>jt&&(x=jt,jt=it,it=x);var K=Wp(R,it),k=Wp(R,jt);if(K&&k&&(ce.rangeCount!==1||ce.anchorNode!==K.node||ce.anchorOffset!==K.offset||ce.focusNode!==k.node||ce.focusOffset!==k.offset)){var ne=xe.createRange();ne.setStart(K.node,K.offset),ce.removeAllRanges(),it>jt?(ce.addRange(ne),ce.extend(k.node,k.offset)):(ne.setEnd(k.node,k.offset),ce.addRange(ne))}}}}for(xe=[],ce=R;ce=ce.parentNode;)ce.nodeType===1&&xe.push({element:ce,left:ce.scrollLeft,top:ce.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<xe.length;R++){var ve=xe[R];ve.element.scrollLeft=ve.left,ve.element.scrollTop=ve.top}}xc=!!ad,sd=ad=null}finally{Bt=f,G.p=o,I.T=a}}t.current=n,Tn=2}}function lg(){if(Tn===2){Tn=0;var t=is,n=br,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=I.T,I.T=null;var o=G.p;G.p=2;var f=Bt;Bt|=4;try{I0(t,n.alternate,n)}finally{Bt=f,G.p=o,I.T=a}}Tn=3}}function cg(){if(Tn===4||Tn===3){Tn=0,X();var t=is,n=br,a=ba,o=K0;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Tn=5:(Tn=0,br=is=null,ug(t,t.pendingLanes));var f=t.pendingLanes;if(f===0&&(ns=null),pn(a),n=n.stateNode,he&&typeof he.onCommitFiberRoot=="function")try{he.onCommitFiberRoot(fe,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=I.T,f=G.p,G.p=2,I.T=null;try{for(var d=t.onRecoverableError,x=0;x<o.length;x++){var R=o[x];d(R.value,{componentStack:R.stack})}}finally{I.T=n,G.p=f}}(ba&3)!==0&&oc(),ji(t),f=t.pendingLanes,(a&261930)!==0&&(f&42)!==0?t===Wf?zo++:(zo=0,Wf=t):zo=0,Ho(0)}}function ug(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,So(n)))}function oc(){return og(),lg(),cg(),fg()}function fg(){if(Tn!==5)return!1;var t=is,n=kf;kf=0;var a=pn(ba),o=I.T,f=G.p;try{G.p=32>a?32:a,I.T=null,a=Xf,Xf=null;var d=is,x=ba;if(Tn=0,br=is=null,ba=0,(Bt&6)!==0)throw Error(r(331));var R=Bt;if(Bt|=4,q0(d.current),k0(d,d.current,x,a),Bt=R,Ho(0,!1),he&&typeof he.onPostCommitFiberRoot=="function")try{he.onPostCommitFiberRoot(fe,d)}catch{}return!0}finally{G.p=f,I.T=o,ug(t,n)}}function dg(t,n,a){n=Si(a,n),n=Ef(t.stateNode,n,2),t=ja(t,n,2),t!==null&&(He(t,2),ji(t))}function Wt(t,n,a){if(t.tag===3)dg(t,t,a);else for(;n!==null;){if(n.tag===3){dg(n,t,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(ns===null||!ns.has(o))){t=Si(a,t),a=h0(2),o=ja(n,a,2),o!==null&&(p0(a,o,n,t),He(o,2),ji(o));break}}n=n.return}}function Zf(t,n,a){var o=t.pingCache;if(o===null){o=t.pingCache=new CS;var f=new Set;o.set(n,f)}else f=o.get(n),f===void 0&&(f=new Set,o.set(n,f));f.has(a)||(Hf=!0,f.add(a),t=LS.bind(null,t,n,a),n.then(t,t))}function LS(t,n,a){var o=t.pingCache;o!==null&&o.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Jt===t&&(bt&a)===a&&(ln===4||ln===3&&(bt&62914560)===bt&&300>St()-tc?(Bt&2)===0&&Tr(t,0):Gf|=a,Er===bt&&(Er=0)),ji(t)}function hg(t,n){n===0&&(n=ye()),t=Rs(t,n),t!==null&&(He(t,n),ji(t))}function OS(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),hg(t,a)}function PS(t,n){var a=0;switch(t.tag){case 31:case 13:var o=t.stateNode,f=t.memoizedState;f!==null&&(a=f.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(r(314))}o!==null&&o.delete(n),hg(t,a)}function IS(t,n){return wt(t,n)}var lc=null,Rr=null,Kf=!1,cc=!1,jf=!1,ss=0;function ji(t){t!==Rr&&t.next===null&&(Rr===null?lc=Rr=t:Rr=Rr.next=t),cc=!0,Kf||(Kf=!0,BS())}function Ho(t,n){if(!jf&&cc){jf=!0;do for(var a=!1,o=lc;o!==null;){if(t!==0){var f=o.pendingLanes;if(f===0)var d=0;else{var x=o.suspendedLanes,R=o.pingedLanes;d=(1<<31-Be(42|t)+1)-1,d&=f&~(x&~R),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(a=!0,_g(o,d))}else d=bt,d=me(o,o===Jt?d:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(d&3)===0||we(o,d)||(a=!0,_g(o,d));o=o.next}while(a);jf=!1}}function FS(){pg()}function pg(){cc=Kf=!1;var t=0;ss!==0&&ZS()&&(t=ss);for(var n=St(),a=null,o=lc;o!==null;){var f=o.next,d=mg(o,n);d===0?(o.next=null,a===null?lc=f:a.next=f,f===null&&(Rr=a)):(a=o,(t!==0||(d&3)!==0)&&(cc=!0)),o=f}Tn!==0&&Tn!==5||Ho(t),ss!==0&&(ss=0)}function mg(t,n){for(var a=t.suspendedLanes,o=t.pingedLanes,f=t.expirationTimes,d=t.pendingLanes&-62914561;0<d;){var x=31-Be(d),R=1<<x,H=f[x];H===-1?((R&a)===0||(R&o)!==0)&&(f[x]=Pe(R,n)):H<=n&&(t.expiredLanes|=R),d&=~R}if(n=Jt,a=bt,a=me(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,a===0||t===n&&(Xt===2||Xt===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&ut(o),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||we(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(o!==null&&ut(o),pn(a)){case 2:case 8:a=E;break;case 32:a=j;break;case 268435456:a=ue;break;default:a=j}return o=gg.bind(null,t),a=wt(a,o),t.callbackPriority=n,t.callbackNode=a,n}return o!==null&&o!==null&&ut(o),t.callbackPriority=2,t.callbackNode=null,2}function gg(t,n){if(Tn!==0&&Tn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(oc()&&t.callbackNode!==a)return null;var o=bt;return o=me(t,t===Jt?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(Q0(t,o,n),mg(t,St()),t.callbackNode!=null&&t.callbackNode===a?gg.bind(null,t):null)}function _g(t,n){if(oc())return null;Q0(t,n,!0)}function BS(){jS(function(){(Bt&6)!==0?wt(D,FS):pg()})}function Qf(){if(ss===0){var t=dr;t===0&&(t=Ke,Ke<<=1,(Ke&261888)===0&&(Ke=256)),ss=t}return ss}function vg(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Es(""+t)}function xg(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function zS(t,n,a,o,f){if(n==="submit"&&a&&a.stateNode===f){var d=vg((f[en]||null).action),x=o.submitter;x&&(n=(n=x[en]||null)?vg(n.formAction):x.getAttribute("formAction"),n!==null&&(d=n,x=null));var R=new Ml("action","action",null,o,f);t.push({event:R,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(ss!==0){var H=x?xg(f,x):new FormData(f);_f(a,{pending:!0,data:H,method:f.method,action:d},null,H)}}else typeof d=="function"&&(R.preventDefault(),H=x?xg(f,x):new FormData(f),_f(a,{pending:!0,data:H,method:f.method,action:d},d,H))},currentTarget:f}]})}}for(var Jf=0;Jf<Lu.length;Jf++){var $f=Lu[Jf],HS=$f.toLowerCase(),GS=$f[0].toUpperCase()+$f.slice(1);Pi(HS,"on"+GS)}Pi(jp,"onAnimationEnd"),Pi(Qp,"onAnimationIteration"),Pi(Jp,"onAnimationStart"),Pi("dblclick","onDoubleClick"),Pi("focusin","onFocus"),Pi("focusout","onBlur"),Pi(iS,"onTransitionRun"),Pi(aS,"onTransitionStart"),Pi(sS,"onTransitionCancel"),Pi($p,"onTransitionEnd"),oe("onMouseEnter",["mouseout","mouseover"]),oe("onMouseLeave",["mouseout","mouseover"]),oe("onPointerEnter",["pointerout","pointerover"]),oe("onPointerLeave",["pointerout","pointerover"]),q("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),q("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),q("onBeforeInput",["compositionend","keypress","textInput","paste"]),q("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),q("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),q("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Go="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),VS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Go));function Sg(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var o=t[a],f=o.event;o=o.listeners;e:{var d=void 0;if(n)for(var x=o.length-1;0<=x;x--){var R=o[x],H=R.instance,ae=R.currentTarget;if(R=R.listener,H!==d&&f.isPropagationStopped())break e;d=R,f.currentTarget=ae;try{d(f)}catch(ge){bl(ge)}f.currentTarget=null,d=H}else for(x=0;x<o.length;x++){if(R=o[x],H=R.instance,ae=R.currentTarget,R=R.listener,H!==d&&f.isPropagationStopped())break e;d=R,f.currentTarget=ae;try{d(f)}catch(ge){bl(ge)}f.currentTarget=null,d=H}}}}function Et(t,n){var a=n[Qn];a===void 0&&(a=n[Qn]=new Set);var o=t+"__bubble";a.has(o)||(Mg(n,t,2,!1),a.add(o))}function ed(t,n,a){var o=0;n&&(o|=4),Mg(a,t,o,n)}var uc="_reactListening"+Math.random().toString(36).slice(2);function td(t){if(!t[uc]){t[uc]=!0,_l.forEach(function(a){a!=="selectionchange"&&(VS.has(a)||ed(a,!1,t),ed(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[uc]||(n[uc]=!0,ed("selectionchange",!1,n))}}function Mg(t,n,a,o){switch(jg(n)){case 2:var f=gM;break;case 8:f=_M;break;default:f=gd}a=f.bind(null,n,a,t),f=void 0,!Su||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(f=!0),o?f!==void 0?t.addEventListener(n,a,{capture:!0,passive:f}):t.addEventListener(n,a,!0):f!==void 0?t.addEventListener(n,a,{passive:f}):t.addEventListener(n,a,!1)}function nd(t,n,a,o,f){var d=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var x=o.tag;if(x===3||x===4){var R=o.stateNode.containerInfo;if(R===f)break;if(x===4)for(x=o.return;x!==null;){var H=x.tag;if((H===3||H===4)&&x.stateNode.containerInfo===f)return;x=x.return}for(;R!==null;){if(x=oa(R),x===null)return;if(H=x.tag,H===5||H===6||H===26||H===27){o=d=x;continue e}R=R.parentNode}}o=o.return}Ap(function(){var ae=d,ge=vu(a),xe=[];e:{var le=em.get(t);if(le!==void 0){var ce=Ml,qe=t;switch(t){case"keypress":if(xl(a)===0)break e;case"keydown":case"keyup":ce=Px;break;case"focusin":qe="focus",ce=bu;break;case"focusout":qe="blur",ce=bu;break;case"beforeblur":case"afterblur":ce=bu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ce=wp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ce=Ex;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ce=Bx;break;case jp:case Qp:case Jp:ce=Ax;break;case $p:ce=Hx;break;case"scroll":case"scrollend":ce=Mx;break;case"wheel":ce=Vx;break;case"copy":case"cut":case"paste":ce=Cx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ce=Up;break;case"toggle":case"beforetoggle":ce=Xx}var it=(n&4)!==0,jt=!it&&(t==="scroll"||t==="scrollend"),K=it?le!==null?le+"Capture":null:le;it=[];for(var k=ae,ne;k!==null;){var ve=k;if(ne=ve.stateNode,ve=ve.tag,ve!==5&&ve!==26&&ve!==27||ne===null||K===null||(ve=lo(k,K),ve!=null&&it.push(Vo(k,ve,ne))),jt)break;k=k.return}0<it.length&&(le=new ce(le,qe,null,a,ge),xe.push({event:le,listeners:it}))}}if((n&7)===0){e:{if(le=t==="mouseover"||t==="pointerover",ce=t==="mouseout"||t==="pointerout",le&&a!==_u&&(qe=a.relatedTarget||a.fromElement)&&(oa(qe)||qe[Cn]))break e;if((ce||le)&&(le=ge.window===ge?ge:(le=ge.ownerDocument)?le.defaultView||le.parentWindow:window,ce?(qe=a.relatedTarget||a.toElement,ce=ae,qe=qe?oa(qe):null,qe!==null&&(jt=c(qe),it=qe.tag,qe!==jt||it!==5&&it!==27&&it!==6)&&(qe=null)):(ce=null,qe=ae),ce!==qe)){if(it=wp,ve="onMouseLeave",K="onMouseEnter",k="mouse",(t==="pointerout"||t==="pointerover")&&(it=Up,ve="onPointerLeave",K="onPointerEnter",k="pointer"),jt=ce==null?le:ys(ce),ne=qe==null?le:ys(qe),le=new it(ve,k+"leave",ce,a,ge),le.target=jt,le.relatedTarget=ne,ve=null,oa(ge)===ae&&(it=new it(K,k+"enter",qe,a,ge),it.target=ne,it.relatedTarget=jt,ve=it),jt=ve,ce&&qe)t:{for(it=kS,K=ce,k=qe,ne=0,ve=K;ve;ve=it(ve))ne++;ve=0;for(var tt=k;tt;tt=it(tt))ve++;for(;0<ne-ve;)K=it(K),ne--;for(;0<ve-ne;)k=it(k),ve--;for(;ne--;){if(K===k||k!==null&&K===k.alternate){it=K;break t}K=it(K),k=it(k)}it=null}else it=null;ce!==null&&yg(xe,le,ce,it,!1),qe!==null&&jt!==null&&yg(xe,jt,qe,it,!0)}}e:{if(le=ae?ys(ae):window,ce=le.nodeName&&le.nodeName.toLowerCase(),ce==="select"||ce==="input"&&le.type==="file")var Pt=zp;else if(Fp(le))if(Hp)Pt=eS;else{Pt=Jx;var je=Qx}else ce=le.nodeName,!ce||ce.toLowerCase()!=="input"||le.type!=="checkbox"&&le.type!=="radio"?ae&&zt(ae.elementType)&&(Pt=zp):Pt=$x;if(Pt&&(Pt=Pt(t,ae))){Bp(xe,Pt,a,ge);break e}je&&je(t,le,ae),t==="focusout"&&ae&&le.type==="number"&&ae.memoizedProps.value!=null&&Mt(le,"number",le.value)}switch(je=ae?ys(ae):window,t){case"focusin":(Fp(je)||je.contentEditable==="true")&&(ar=je,Du=ae,_o=null);break;case"focusout":_o=Du=ar=null;break;case"mousedown":Uu=!0;break;case"contextmenu":case"mouseup":case"dragend":Uu=!1,Zp(xe,a,ge);break;case"selectionchange":if(nS)break;case"keydown":case"keyup":Zp(xe,a,ge)}var ht;if(Au)e:{switch(t){case"compositionstart":var Tt="onCompositionStart";break e;case"compositionend":Tt="onCompositionEnd";break e;case"compositionupdate":Tt="onCompositionUpdate";break e}Tt=void 0}else ir?Pp(t,a)&&(Tt="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(Tt="onCompositionStart");Tt&&(Np&&a.locale!=="ko"&&(ir||Tt!=="onCompositionStart"?Tt==="onCompositionEnd"&&ir&&(ht=Rp()):(ka=ge,Mu="value"in ka?ka.value:ka.textContent,ir=!0)),je=fc(ae,Tt),0<je.length&&(Tt=new Dp(Tt,t,null,a,ge),xe.push({event:Tt,listeners:je}),ht?Tt.data=ht:(ht=Ip(a),ht!==null&&(Tt.data=ht)))),(ht=qx?Yx(t,a):Zx(t,a))&&(Tt=fc(ae,"onBeforeInput"),0<Tt.length&&(je=new Dp("onBeforeInput","beforeinput",null,a,ge),xe.push({event:je,listeners:Tt}),je.data=ht)),zS(xe,t,ae,a,ge)}Sg(xe,n)})}function Vo(t,n,a){return{instance:t,listener:n,currentTarget:a}}function fc(t,n){for(var a=n+"Capture",o=[];t!==null;){var f=t,d=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||d===null||(f=lo(t,a),f!=null&&o.unshift(Vo(t,f,d)),f=lo(t,n),f!=null&&o.push(Vo(t,f,d))),t.tag===3)return o;t=t.return}return[]}function kS(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function yg(t,n,a,o,f){for(var d=n._reactName,x=[];a!==null&&a!==o;){var R=a,H=R.alternate,ae=R.stateNode;if(R=R.tag,H!==null&&H===o)break;R!==5&&R!==26&&R!==27||ae===null||(H=ae,f?(ae=lo(a,d),ae!=null&&x.unshift(Vo(a,ae,H))):f||(ae=lo(a,d),ae!=null&&x.push(Vo(a,ae,H)))),a=a.return}x.length!==0&&t.push({event:n,listeners:x})}var XS=/\r\n?/g,WS=/\u0000|\uFFFD/g;function Eg(t){return(typeof t=="string"?t:""+t).replace(XS,`
`).replace(WS,"")}function bg(t,n){return n=Eg(n),Eg(t)===n}function Kt(t,n,a,o,f,d){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||li(t,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&li(t,""+o);break;case"className":We(t,"class",o);break;case"tabIndex":We(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":We(t,a,o);break;case"style":Oi(t,o,d);break;case"data":if(n!=="object"){We(t,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=Es(""+o),t.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(n!=="input"&&Kt(t,n,"name",f.name,f,null),Kt(t,n,"formEncType",f.formEncType,f,null),Kt(t,n,"formMethod",f.formMethod,f,null),Kt(t,n,"formTarget",f.formTarget,f,null)):(Kt(t,n,"encType",f.encType,f,null),Kt(t,n,"method",f.method,f,null),Kt(t,n,"target",f.target,f,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=Es(""+o),t.setAttribute(a,o);break;case"onClick":o!=null&&(t.onclick=ca);break;case"onScroll":o!=null&&Et("scroll",t);break;case"onScrollEnd":o!=null&&Et("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(f.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}a=Es(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""+o):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":o===!0?t.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,o):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(a,o):t.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(a):t.setAttribute(a,o);break;case"popover":Et("beforetoggle",t),Et("toggle",t),Oe(t,"popover",o);break;case"xlinkActuate":ke(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":ke(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":ke(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":ke(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":ke(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":ke(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":ke(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":ke(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":ke(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Oe(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=qi.get(a)||a,Oe(t,a,o))}}function id(t,n,a,o,f,d){switch(a){case"style":Oi(t,o,d);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(f.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof o=="string"?li(t,o):(typeof o=="number"||typeof o=="bigint")&&li(t,""+o);break;case"onScroll":o!=null&&Et("scroll",t);break;case"onScrollEnd":o!=null&&Et("scrollend",t);break;case"onClick":o!=null&&(t.onclick=ca);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!A.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(f=a.endsWith("Capture"),n=a.slice(2,f?a.length-7:void 0),d=t[en]||null,d=d!=null?d[a]:null,typeof d=="function"&&t.removeEventListener(n,d,f),typeof o=="function")){typeof d!="function"&&d!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,o,f);break e}a in t?t[a]=o:o===!0?t.setAttribute(a,""):Oe(t,a,o)}}}function In(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Et("error",t),Et("load",t);var o=!1,f=!1,d;for(d in a)if(a.hasOwnProperty(d)){var x=a[d];if(x!=null)switch(d){case"src":o=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Kt(t,n,d,x,a,null)}}f&&Kt(t,n,"srcSet",a.srcSet,a,null),o&&Kt(t,n,"src",a.src,a,null);return;case"input":Et("invalid",t);var R=d=x=f=null,H=null,ae=null;for(o in a)if(a.hasOwnProperty(o)){var ge=a[o];if(ge!=null)switch(o){case"name":f=ge;break;case"type":x=ge;break;case"checked":H=ge;break;case"defaultChecked":ae=ge;break;case"value":d=ge;break;case"defaultValue":R=ge;break;case"children":case"dangerouslySetInnerHTML":if(ge!=null)throw Error(r(137,n));break;default:Kt(t,n,o,ge,a,null)}}zn(t,d,R,H,ae,x,f,!1);return;case"select":Et("invalid",t),o=x=d=null;for(f in a)if(a.hasOwnProperty(f)&&(R=a[f],R!=null))switch(f){case"value":d=R;break;case"defaultValue":x=R;break;case"multiple":o=R;default:Kt(t,n,f,R,a,null)}n=d,a=x,t.multiple=!!o,n!=null?bn(t,!!o,n,!1):a!=null&&bn(t,!!o,a,!0);return;case"textarea":Et("invalid",t),d=f=o=null;for(x in a)if(a.hasOwnProperty(x)&&(R=a[x],R!=null))switch(x){case"value":o=R;break;case"defaultValue":f=R;break;case"children":d=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(r(91));break;default:Kt(t,n,x,R,a,null)}Li(t,o,f,d);return;case"option":for(H in a)if(a.hasOwnProperty(H)&&(o=a[H],o!=null))switch(H){case"selected":t.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Kt(t,n,H,o,a,null)}return;case"dialog":Et("beforetoggle",t),Et("toggle",t),Et("cancel",t),Et("close",t);break;case"iframe":case"object":Et("load",t);break;case"video":case"audio":for(o=0;o<Go.length;o++)Et(Go[o],t);break;case"image":Et("error",t),Et("load",t);break;case"details":Et("toggle",t);break;case"embed":case"source":case"link":Et("error",t),Et("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ae in a)if(a.hasOwnProperty(ae)&&(o=a[ae],o!=null))switch(ae){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Kt(t,n,ae,o,a,null)}return;default:if(zt(n)){for(ge in a)a.hasOwnProperty(ge)&&(o=a[ge],o!==void 0&&id(t,n,ge,o,a,void 0));return}}for(R in a)a.hasOwnProperty(R)&&(o=a[R],o!=null&&Kt(t,n,R,o,a,null))}function qS(t,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,d=null,x=null,R=null,H=null,ae=null,ge=null;for(ce in a){var xe=a[ce];if(a.hasOwnProperty(ce)&&xe!=null)switch(ce){case"checked":break;case"value":break;case"defaultValue":H=xe;default:o.hasOwnProperty(ce)||Kt(t,n,ce,null,o,xe)}}for(var le in o){var ce=o[le];if(xe=a[le],o.hasOwnProperty(le)&&(ce!=null||xe!=null))switch(le){case"type":d=ce;break;case"name":f=ce;break;case"checked":ae=ce;break;case"defaultChecked":ge=ce;break;case"value":x=ce;break;case"defaultValue":R=ce;break;case"children":case"dangerouslySetInnerHTML":if(ce!=null)throw Error(r(137,n));break;default:ce!==xe&&Kt(t,n,le,ce,o,xe)}}Ge(t,x,R,H,ae,ge,d,f);return;case"select":ce=x=R=le=null;for(d in a)if(H=a[d],a.hasOwnProperty(d)&&H!=null)switch(d){case"value":break;case"multiple":ce=H;default:o.hasOwnProperty(d)||Kt(t,n,d,null,o,H)}for(f in o)if(d=o[f],H=a[f],o.hasOwnProperty(f)&&(d!=null||H!=null))switch(f){case"value":le=d;break;case"defaultValue":R=d;break;case"multiple":x=d;default:d!==H&&Kt(t,n,f,d,o,H)}n=R,a=x,o=ce,le!=null?bn(t,!!a,le,!1):!!o!=!!a&&(n!=null?bn(t,!!a,n,!0):bn(t,!!a,a?[]:"",!1));return;case"textarea":ce=le=null;for(R in a)if(f=a[R],a.hasOwnProperty(R)&&f!=null&&!o.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:Kt(t,n,R,null,o,f)}for(x in o)if(f=o[x],d=a[x],o.hasOwnProperty(x)&&(f!=null||d!=null))switch(x){case"value":le=f;break;case"defaultValue":ce=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(r(91));break;default:f!==d&&Kt(t,n,x,f,o,d)}oi(t,le,ce);return;case"option":for(var qe in a)if(le=a[qe],a.hasOwnProperty(qe)&&le!=null&&!o.hasOwnProperty(qe))switch(qe){case"selected":t.selected=!1;break;default:Kt(t,n,qe,null,o,le)}for(H in o)if(le=o[H],ce=a[H],o.hasOwnProperty(H)&&le!==ce&&(le!=null||ce!=null))switch(H){case"selected":t.selected=le&&typeof le!="function"&&typeof le!="symbol";break;default:Kt(t,n,H,le,o,ce)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var it in a)le=a[it],a.hasOwnProperty(it)&&le!=null&&!o.hasOwnProperty(it)&&Kt(t,n,it,null,o,le);for(ae in o)if(le=o[ae],ce=a[ae],o.hasOwnProperty(ae)&&le!==ce&&(le!=null||ce!=null))switch(ae){case"children":case"dangerouslySetInnerHTML":if(le!=null)throw Error(r(137,n));break;default:Kt(t,n,ae,le,o,ce)}return;default:if(zt(n)){for(var jt in a)le=a[jt],a.hasOwnProperty(jt)&&le!==void 0&&!o.hasOwnProperty(jt)&&id(t,n,jt,void 0,o,le);for(ge in o)le=o[ge],ce=a[ge],!o.hasOwnProperty(ge)||le===ce||le===void 0&&ce===void 0||id(t,n,ge,le,o,ce);return}}for(var K in a)le=a[K],a.hasOwnProperty(K)&&le!=null&&!o.hasOwnProperty(K)&&Kt(t,n,K,null,o,le);for(xe in o)le=o[xe],ce=a[xe],!o.hasOwnProperty(xe)||le===ce||le==null&&ce==null||Kt(t,n,xe,le,o,ce)}function Tg(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function YS(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var f=a[o],d=f.transferSize,x=f.initiatorType,R=f.duration;if(d&&R&&Tg(x)){for(x=0,R=f.responseEnd,o+=1;o<a.length;o++){var H=a[o],ae=H.startTime;if(ae>R)break;var ge=H.transferSize,xe=H.initiatorType;ge&&Tg(xe)&&(H=H.responseEnd,x+=ge*(H<R?1:(R-ae)/(H-ae)))}if(--o,n+=8*(d+x)/(f.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var ad=null,sd=null;function dc(t){return t.nodeType===9?t:t.ownerDocument}function Ag(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Rg(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function rd(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var od=null;function ZS(){var t=window.event;return t&&t.type==="popstate"?t===od?!1:(od=t,!0):(od=null,!1)}var Cg=typeof setTimeout=="function"?setTimeout:void 0,KS=typeof clearTimeout=="function"?clearTimeout:void 0,wg=typeof Promise=="function"?Promise:void 0,jS=typeof queueMicrotask=="function"?queueMicrotask:typeof wg<"u"?function(t){return wg.resolve(null).then(t).catch(QS)}:Cg;function QS(t){setTimeout(function(){throw t})}function rs(t){return t==="head"}function Dg(t,n){var a=n,o=0;do{var f=a.nextSibling;if(t.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"||a==="/&"){if(o===0){t.removeChild(f),Ur(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")ko(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,ko(a);for(var d=a.firstChild;d;){var x=d.nextSibling,R=d.nodeName;d[za]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&d.rel.toLowerCase()==="stylesheet"||a.removeChild(d),d=x}}else a==="body"&&ko(t.ownerDocument.body);a=f}while(a);Ur(n)}function Ug(t,n){var a=t;t=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=o}while(a)}function ld(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":ld(a),Ha(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function JS(t,n,a,o){for(;t.nodeType===1;){var f=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[za])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(d=t.getAttribute("rel"),d==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(d!==f.rel||t.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||t.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||t.getAttribute("title")!==(f.title==null?null:f.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(d=t.getAttribute("src"),(d!==(f.src==null?null:f.src)||t.getAttribute("type")!==(f.type==null?null:f.type)||t.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&d&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var d=f.name==null?null:""+f.name;if(f.type==="hidden"&&t.getAttribute("name")===d)return t}else return t;if(t=Ti(t.nextSibling),t===null)break}return null}function $S(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=Ti(t.nextSibling),t===null))return null;return t}function Ng(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=Ti(t.nextSibling),t===null))return null;return t}function cd(t){return t.data==="$?"||t.data==="$~"}function ud(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function eM(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function Ti(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var fd=null;function Lg(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return Ti(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function Og(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function Pg(t,n,a){switch(n=dc(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function ko(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Ha(t)}var Ai=new Map,Ig=new Set;function hc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Ta=G.d;G.d={f:tM,r:nM,D:iM,C:aM,L:sM,m:rM,X:lM,S:oM,M:cM};function tM(){var t=Ta.f(),n=ac();return t||n}function nM(t){var n=la(t);n!==null&&n.tag===5&&n.type==="form"?$m(n):Ta.r(t)}var Cr=typeof document>"u"?null:document;function Fg(t,n,a){var o=Cr;if(o&&typeof n=="string"&&n){var f=Vt(n);f='link[rel="'+t+'"][href="'+f+'"]',typeof a=="string"&&(f+='[crossorigin="'+a+'"]'),Ig.has(f)||(Ig.add(f),t={rel:t,crossOrigin:a,href:n},o.querySelector(f)===null&&(n=o.createElement("link"),In(n,"link",t),gn(n),o.head.appendChild(n)))}}function iM(t){Ta.D(t),Fg("dns-prefetch",t,null)}function aM(t,n){Ta.C(t,n),Fg("preconnect",t,n)}function sM(t,n,a){Ta.L(t,n,a);var o=Cr;if(o&&t&&n){var f='link[rel="preload"][as="'+Vt(n)+'"]';n==="image"&&a&&a.imageSrcSet?(f+='[imagesrcset="'+Vt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(f+='[imagesizes="'+Vt(a.imageSizes)+'"]')):f+='[href="'+Vt(t)+'"]';var d=f;switch(n){case"style":d=wr(t);break;case"script":d=Dr(t)}Ai.has(d)||(t=v({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),Ai.set(d,t),o.querySelector(f)!==null||n==="style"&&o.querySelector(Xo(d))||n==="script"&&o.querySelector(Wo(d))||(n=o.createElement("link"),In(n,"link",t),gn(n),o.head.appendChild(n)))}}function rM(t,n){Ta.m(t,n);var a=Cr;if(a&&t){var o=n&&typeof n.as=="string"?n.as:"script",f='link[rel="modulepreload"][as="'+Vt(o)+'"][href="'+Vt(t)+'"]',d=f;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=Dr(t)}if(!Ai.has(d)&&(t=v({rel:"modulepreload",href:t},n),Ai.set(d,t),a.querySelector(f)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Wo(d)))return}o=a.createElement("link"),In(o,"link",t),gn(o),a.head.appendChild(o)}}}function oM(t,n,a){Ta.S(t,n,a);var o=Cr;if(o&&t){var f=Ga(o).hoistableStyles,d=wr(t);n=n||"default";var x=f.get(d);if(!x){var R={loading:0,preload:null};if(x=o.querySelector(Xo(d)))R.loading=5;else{t=v({rel:"stylesheet",href:t,"data-precedence":n},a),(a=Ai.get(d))&&dd(t,a);var H=x=o.createElement("link");gn(H),In(H,"link",t),H._p=new Promise(function(ae,ge){H.onload=ae,H.onerror=ge}),H.addEventListener("load",function(){R.loading|=1}),H.addEventListener("error",function(){R.loading|=2}),R.loading|=4,pc(x,n,o)}x={type:"stylesheet",instance:x,count:1,state:R},f.set(d,x)}}}function lM(t,n){Ta.X(t,n);var a=Cr;if(a&&t){var o=Ga(a).hoistableScripts,f=Dr(t),d=o.get(f);d||(d=a.querySelector(Wo(f)),d||(t=v({src:t,async:!0},n),(n=Ai.get(f))&&hd(t,n),d=a.createElement("script"),gn(d),In(d,"link",t),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(f,d))}}function cM(t,n){Ta.M(t,n);var a=Cr;if(a&&t){var o=Ga(a).hoistableScripts,f=Dr(t),d=o.get(f);d||(d=a.querySelector(Wo(f)),d||(t=v({src:t,async:!0,type:"module"},n),(n=Ai.get(f))&&hd(t,n),d=a.createElement("script"),gn(d),In(d,"link",t),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(f,d))}}function Bg(t,n,a,o){var f=(f=ie.current)?hc(f):null;if(!f)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=wr(a.href),a=Ga(f).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=wr(a.href);var d=Ga(f).hoistableStyles,x=d.get(t);if(x||(f=f.ownerDocument||f,x={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(t,x),(d=f.querySelector(Xo(t)))&&!d._p&&(x.instance=d,x.state.loading=5),Ai.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Ai.set(t,a),d||uM(f,t,a,x.state))),n&&o===null)throw Error(r(528,""));return x}if(n&&o!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Dr(a),a=Ga(f).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function wr(t){return'href="'+Vt(t)+'"'}function Xo(t){return'link[rel="stylesheet"]['+t+"]"}function zg(t){return v({},t,{"data-precedence":t.precedence,precedence:null})}function uM(t,n,a,o){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=t.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),In(n,"link",a),gn(n),t.head.appendChild(n))}function Dr(t){return'[src="'+Vt(t)+'"]'}function Wo(t){return"script[async]"+t}function Hg(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=t.querySelector('style[data-href~="'+Vt(a.href)+'"]');if(o)return n.instance=o,gn(o),o;var f=v({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),gn(o),In(o,"style",f),pc(o,a.precedence,t),n.instance=o;case"stylesheet":f=wr(a.href);var d=t.querySelector(Xo(f));if(d)return n.state.loading|=4,n.instance=d,gn(d),d;o=zg(a),(f=Ai.get(f))&&dd(o,f),d=(t.ownerDocument||t).createElement("link"),gn(d);var x=d;return x._p=new Promise(function(R,H){x.onload=R,x.onerror=H}),In(d,"link",o),n.state.loading|=4,pc(d,a.precedence,t),n.instance=d;case"script":return d=Dr(a.src),(f=t.querySelector(Wo(d)))?(n.instance=f,gn(f),f):(o=a,(f=Ai.get(d))&&(o=v({},a),hd(o,f)),t=t.ownerDocument||t,f=t.createElement("script"),gn(f),In(f,"link",o),t.head.appendChild(f),n.instance=f);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,pc(o,a.precedence,t));return n.instance}function pc(t,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=o.length?o[o.length-1]:null,d=f,x=0;x<o.length;x++){var R=o[x];if(R.dataset.precedence===n)d=R;else if(d!==f)break}d?d.parentNode.insertBefore(t,d.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function dd(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function hd(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var mc=null;function Gg(t,n,a){if(mc===null){var o=new Map,f=mc=new Map;f.set(a,o)}else f=mc,o=f.get(a),o||(o=new Map,f.set(a,o));if(o.has(t))return o;for(o.set(t,null),a=a.getElementsByTagName(t),f=0;f<a.length;f++){var d=a[f];if(!(d[za]||d[Lt]||t==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var x=d.getAttribute(n)||"";x=t+x;var R=o.get(x);R?R.push(d):o.set(x,[d])}}return o}function Vg(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function fM(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function kg(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function dM(t,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var f=wr(o.href),d=n.querySelector(Xo(f));if(d){n=d._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=gc.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=d,gn(d);return}d=n.ownerDocument||n,o=zg(o),(f=Ai.get(f))&&dd(o,f),d=d.createElement("link"),gn(d);var x=d;x._p=new Promise(function(R,H){x.onload=R,x.onerror=H}),In(d,"link",o),a.instance=d}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=gc.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var pd=0;function hM(t,n){return t.stylesheets&&t.count===0&&vc(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var o=setTimeout(function(){if(t.stylesheets&&vc(t,t.stylesheets),t.unsuspend){var d=t.unsuspend;t.unsuspend=null,d()}},6e4+n);0<t.imgBytes&&pd===0&&(pd=62500*YS());var f=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&vc(t,t.stylesheets),t.unsuspend)){var d=t.unsuspend;t.unsuspend=null,d()}},(t.imgBytes>pd?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(o),clearTimeout(f)}}:null}function gc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)vc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var _c=null;function vc(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,_c=new Map,n.forEach(pM,t),_c=null,gc.call(t))}function pM(t,n){if(!(n.state.loading&4)){var a=_c.get(t);if(a)var o=a.get(null);else{a=new Map,_c.set(t,a);for(var f=t.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<f.length;d++){var x=f[d];(x.nodeName==="LINK"||x.getAttribute("media")!=="not all")&&(a.set(x.dataset.precedence,x),o=x)}o&&a.set(null,o)}f=n.instance,x=f.getAttribute("data-precedence"),d=a.get(x)||o,d===o&&a.set(null,f),a.set(x,f),this.count++,o=gc.bind(this),f.addEventListener("load",o),f.addEventListener("error",o),d?d.parentNode.insertBefore(f,d.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(f,t.firstChild)),n.state.loading|=4}}var qo={$$typeof:z,Provider:null,Consumer:null,_currentValue:ee,_currentValue2:ee,_threadCount:0};function mM(t,n,a,o,f,d,x,R,H){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Xe(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Xe(0),this.hiddenUpdates=Xe(null),this.identifierPrefix=o,this.onUncaughtError=f,this.onCaughtError=d,this.onRecoverableError=x,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=H,this.incompleteTransitions=new Map}function Xg(t,n,a,o,f,d,x,R,H,ae,ge,xe){return t=new mM(t,n,a,x,H,ae,ge,xe,R),n=1,d===!0&&(n|=24),d=ui(3,null,null,n),t.current=d,d.stateNode=t,n=qu(),n.refCount++,t.pooledCache=n,n.refCount++,d.memoizedState={element:o,isDehydrated:a,cache:n},ju(d),t}function Wg(t){return t?(t=or,t):or}function qg(t,n,a,o,f,d){f=Wg(f),o.context===null?o.context=f:o.pendingContext=f,o=Ka(n),o.payload={element:a},d=d===void 0?null:d,d!==null&&(o.callback=d),a=ja(t,o,n),a!==null&&(ii(a,t,n),bo(a,t,n))}function Yg(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function md(t,n){Yg(t,n),(t=t.alternate)&&Yg(t,n)}function Zg(t){if(t.tag===13||t.tag===31){var n=Rs(t,67108864);n!==null&&ii(n,t,67108864),md(t,67108864)}}function Kg(t){if(t.tag===13||t.tag===31){var n=mi();n=Fa(n);var a=Rs(t,n);a!==null&&ii(a,t,n),md(t,n)}}var xc=!0;function gM(t,n,a,o){var f=I.T;I.T=null;var d=G.p;try{G.p=2,gd(t,n,a,o)}finally{G.p=d,I.T=f}}function _M(t,n,a,o){var f=I.T;I.T=null;var d=G.p;try{G.p=8,gd(t,n,a,o)}finally{G.p=d,I.T=f}}function gd(t,n,a,o){if(xc){var f=_d(o);if(f===null)nd(t,n,o,Sc,a),Qg(t,o);else if(xM(f,t,n,a,o))o.stopPropagation();else if(Qg(t,o),n&4&&-1<vM.indexOf(t)){for(;f!==null;){var d=la(f);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var x=Ae(d.pendingLanes);if(x!==0){var R=d;for(R.pendingLanes|=2,R.entangledLanes|=2;x;){var H=1<<31-Be(x);R.entanglements[1]|=H,x&=~H}ji(d),(Bt&6)===0&&(nc=St()+500,Ho(0))}}break;case 31:case 13:R=Rs(d,2),R!==null&&ii(R,d,2),ac(),md(d,2)}if(d=_d(o),d===null&&nd(t,n,o,Sc,a),d===f)break;f=d}f!==null&&o.stopPropagation()}else nd(t,n,o,null,a)}}function _d(t){return t=vu(t),vd(t)}var Sc=null;function vd(t){if(Sc=null,t=oa(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=u(n),t!==null)return t;t=null}else if(a===31){if(t=h(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return Sc=t,null}function jg(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(vt()){case D:return 2;case E:return 8;case j:case te:return 32;case ue:return 268435456;default:return 32}default:return 32}}var xd=!1,os=null,ls=null,cs=null,Yo=new Map,Zo=new Map,us=[],vM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Qg(t,n){switch(t){case"focusin":case"focusout":os=null;break;case"dragenter":case"dragleave":ls=null;break;case"mouseover":case"mouseout":cs=null;break;case"pointerover":case"pointerout":Yo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Zo.delete(n.pointerId)}}function Ko(t,n,a,o,f,d){return t===null||t.nativeEvent!==d?(t={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:d,targetContainers:[f]},n!==null&&(n=la(n),n!==null&&Zg(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,f!==null&&n.indexOf(f)===-1&&n.push(f),t)}function xM(t,n,a,o,f){switch(n){case"focusin":return os=Ko(os,t,n,a,o,f),!0;case"dragenter":return ls=Ko(ls,t,n,a,o,f),!0;case"mouseover":return cs=Ko(cs,t,n,a,o,f),!0;case"pointerover":var d=f.pointerId;return Yo.set(d,Ko(Yo.get(d)||null,t,n,a,o,f)),!0;case"gotpointercapture":return d=f.pointerId,Zo.set(d,Ko(Zo.get(d)||null,t,n,a,o,f)),!0}return!1}function Jg(t){var n=oa(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=u(a),n!==null){t.blockedOn=n,ri(t.priority,function(){Kg(a)});return}}else if(n===31){if(n=h(a),n!==null){t.blockedOn=n,ri(t.priority,function(){Kg(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Mc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=_d(t.nativeEvent);if(a===null){a=t.nativeEvent;var o=new a.constructor(a.type,a);_u=o,a.target.dispatchEvent(o),_u=null}else return n=la(a),n!==null&&Zg(n),t.blockedOn=a,!1;n.shift()}return!0}function $g(t,n,a){Mc(t)&&a.delete(n)}function SM(){xd=!1,os!==null&&Mc(os)&&(os=null),ls!==null&&Mc(ls)&&(ls=null),cs!==null&&Mc(cs)&&(cs=null),Yo.forEach($g),Zo.forEach($g)}function yc(t,n){t.blockedOn===n&&(t.blockedOn=null,xd||(xd=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,SM)))}var Ec=null;function e_(t){Ec!==t&&(Ec=t,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){Ec===t&&(Ec=null);for(var n=0;n<t.length;n+=3){var a=t[n],o=t[n+1],f=t[n+2];if(typeof o!="function"){if(vd(o||a)===null)continue;break}var d=la(a);d!==null&&(t.splice(n,3),n-=3,_f(d,{pending:!0,data:f,method:a.method,action:o},o,f))}}))}function Ur(t){function n(H){return yc(H,t)}os!==null&&yc(os,t),ls!==null&&yc(ls,t),cs!==null&&yc(cs,t),Yo.forEach(n),Zo.forEach(n);for(var a=0;a<us.length;a++){var o=us[a];o.blockedOn===t&&(o.blockedOn=null)}for(;0<us.length&&(a=us[0],a.blockedOn===null);)Jg(a),a.blockedOn===null&&us.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var f=a[o],d=a[o+1],x=f[en]||null;if(typeof d=="function")x||e_(a);else if(x){var R=null;if(d&&d.hasAttribute("formAction")){if(f=d,x=d[en]||null)R=x.formAction;else if(vd(f)!==null)continue}else R=x.action;typeof R=="function"?a[o+1]=R:(a.splice(o,3),o-=3),e_(a)}}}function t_(){function t(d){d.canIntercept&&d.info==="react-transition"&&d.intercept({handler:function(){return new Promise(function(x){return f=x})},focusReset:"manual",scroll:"manual"})}function n(){f!==null&&(f(),f=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var d=navigation.currentEntry;d&&d.url!=null&&navigation.navigate(d.url,{state:d.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,f=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),f!==null&&(f(),f=null)}}}function Sd(t){this._internalRoot=t}bc.prototype.render=Sd.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,o=mi();qg(a,o,t,n,null,null)},bc.prototype.unmount=Sd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;qg(t.current,2,null,t,null,null),ac(),n[Cn]=null}};function bc(t){this._internalRoot=t}bc.prototype.unstable_scheduleHydration=function(t){if(t){var n=En();t={blockedOn:null,target:t,priority:n};for(var a=0;a<us.length&&n!==0&&n<us[a].priority;a++);us.splice(a,0,t),a===0&&Jg(t)}};var n_=e.version;if(n_!=="19.2.7")throw Error(r(527,n_,"19.2.7"));G.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=m(n),t=t!==null?_(t):null,t=t===null?null:t.stateNode,t};var MM={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:I,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Tc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Tc.isDisabled&&Tc.supportsFiber)try{fe=Tc.inject(MM),he=Tc}catch{}}return Qo.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,o="",f=c0,d=u0,x=f0;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(f=n.onUncaughtError),n.onCaughtError!==void 0&&(d=n.onCaughtError),n.onRecoverableError!==void 0&&(x=n.onRecoverableError)),n=Xg(t,1,!1,null,null,a,o,null,f,d,x,t_),t[Cn]=n.current,td(t),new Sd(n)},Qo.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var o=!1,f="",d=c0,x=u0,R=f0,H=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(f=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(x=a.onCaughtError),a.onRecoverableError!==void 0&&(R=a.onRecoverableError),a.formState!==void 0&&(H=a.formState)),n=Xg(t,1,!0,n,a??null,o,f,H,d,x,R,t_),n.context=Wg(null),a=n.current,o=mi(),o=Fa(o),f=Ka(o),f.callback=null,ja(a,f,o),a=o,n.current.lanes=a,He(n,a),ji(n),t[Cn]=n.current,td(t),new bc(n)},Qo.version="19.2.7",Qo}var d_;function UM(){if(d_)return Ed.exports;d_=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Ed.exports=DM(),Ed.exports}var NM=UM();const LM={BASE_URL:"/",DEV:!1,MODE:"production",PROD:!0,SSR:!1,VITE_APP_URL:"",VITE_DISCORD_URL:"",VITE_DOCS_URL:"",VITE_MANIFESTO_URL:"",VITE_TUTORIAL_VIDEO_URL:"",VITE_X_URL:""},Nr=(s,e="#")=>{var i;return((i=LM[s])==null?void 0:i.trim())||e},dn={app:Nr("VITE_APP_URL"),docs:Nr("VITE_DOCS_URL"),manifesto:Nr("VITE_MANIFESTO_URL"),discord:Nr("VITE_DISCORD_URL"),x:Nr("VITE_X_URL"),tutorialVideo:Nr("VITE_TUTORIAL_VIDEO_URL",""),explore:"#explore",exploreAgents:"#explore-agents",exploreVaults:"#explore-vaults"},Kc=[{id:"demo",label:"Demo",href:"#demo"},{id:"personas",label:"Personas",href:"#personas"},{id:"how",label:"How it works",href:"#how"},{id:"explore",label:"Explore",href:"#explore"}],Rd={text:"> The agent-native L1 DEX, for faster and safer trades.",href:dn.manifesto},Hs={eyebrow:{label:"A manifesto for verifiable agents",href:dn.manifesto},headline:["Agents you can trust.","Assets you can trade."],primaryCta:{label:"Launch Morpheum",href:dn.app},secondaryCta:{label:"Explore agents",href:dn.explore}},Cd={badChoices:[{title:"Buy random agent tokens",detail:"speculation without underwriting"},{title:"Run your own agent",detail:"automation without capital controls"}],payoff:"Morpheum gives every agent records, identity, proof, and markets, so it becomes a real capital asset you can verify, own, and trade.",close:"Capital funds proof."},h_=[{label:"MAEX indices",status:"LIVE",live:!0},{label:"Agents",status:"REPUTATION / SHARPE / ROI"},{label:"Risk level",status:"MANUAL / HITL / HANDS-OFF"},{label:"Agent notifications",status:"WANT-TO / ACTION / PAUSED / REJECTED"},{label:"Copy desks",status:"LIVE",live:!0},{label:"Buckets",status:"RISK-ISOLATED"},{label:"Vaults",status:"ONCHAIN"},{label:"Staking",status:"LIVE",live:!0}],hh={kicker:"Product tour",videoCaption:"See an agent discovered, copied, supervised, and isolated in ~60s.",verbs:[{verb:"Discover",description:"Reputation before you commit."},{verb:"Copy",description:"Mirror a proven agent into your desk."},{verb:"Supervise",description:"Approve gated moves on HITL."},{verb:"Isolate",description:"Risk contained in its own bucket."}]},wd={kicker:"Choose your path",title:"Become part of the agent economy",items:[{title:"Become an Operator",weight:"major",steps:["Mint an agent and set its mandate.","Choose a Risk Level: Manual · HITL · Hands-off.","Build a proven track record investors can underwrite."],cta:{label:"Run an agent",href:dn.exploreAgents}},{title:"Become a Copy Trader",weight:"major",steps:["Screen agents on real proof — receipts and risk scores.","Mirror the best into your own dedicated desk.","Track PnL and rebalance anytime."],cta:{label:"Start copying",href:dn.exploreAgents}},{title:"Provide Capital",weight:"light",steps:["Deposit into a vault or bucket.","Stake to earn.","Withdraw on your terms."],cta:{label:"Explore vaults",href:dn.exploreVaults}}]},Lr={kicker:"How it works",title:"Discover → Copy → Supervise → Isolate",outcome:"A proven, risk-isolated capital position — not a bet on a black box.",chips:[{label:"Risk level",value:"Manual · HITL · Hands-off"},{label:"Notifications",value:"Want-to · Action · Paused · Rejected"},{label:"Capital",value:"Bucket / Vault"}],steps:[{n:1,title:"Discover",feature:"Agents & Indices + proof",body:"Browse the MAEX roster and index catalog and read the proof before you commit a dollar.",example:"Open SharpeShark — fills land as receipts in the activity log before you commit."},{n:2,title:"Copy",feature:"Copy Trade",body:"Mirror a proven performer into your own desk in one click, sized to your capital, with spread / funding cost shown before you confirm.",example:"One click clones SharpeShark's strategy into a fresh desk bound to your wallet."},{n:3,title:"Supervise",feature:"Risk Level + Agent Notifications",body:"Set how much the agent may act on its own — Manual · HITL · Hands-off — and stay in the loop through Agent Notifications: Want to · Action · Paused · Rejected.",example:'On HITL, a "Want to open ETH long" notification waits for your inline Approve / Reject, and Explain shows why the agent wants the trade.'},{n:4,title:"Isolate",feature:"Buckets",body:"Every mirror lands in its own dedicated cross-margin bucket bound to a wallet executor agent, so risk is contained per strategy.",example:"SharpeShark runs in its own bucket with its own margin and exposure — if it draws down, only that bucket's capital is at risk; your other desks and spot balance are untouched."}]},Or={kicker:"Explore",title:"Agents. Indices. Buckets. Vaults.",cards:[{title:"Agents",verbs:["Browse","Compare","Copy"],agents:[{name:"SharpeShark",sharpe:"2.41",roi:"+38.2%",risk:"72",positive:!0},{name:"SortinoSloth",sharpe:"1.86",roi:"+21.4%",risk:"58",positive:!0},{name:"FundingFox",sharpe:"1.12",roi:"-4.1%",risk:"41",positive:!1}]},{title:"Indices",verbs:["Track","Weight","Hold"],blurb:"Curated agent baskets for one-click exposure to proven strategies.",sample:[{label:"MAEX Core",value:"+12.8%",positive:!0},{label:"Risk-Off Desk",value:"+4.2%",positive:!0}]},{title:"Buckets",verbs:["Isolate","Trade","Contain"],blurb:"Risk-isolated positions — each strategy in its own margin shell.",sample:[{label:"Desk A",value:"ISOLATED",positive:!1},{label:"Desk B",value:"ISOLATED",positive:!1}]},{title:"Vaults",verbs:["Deposit","Earn","Withdraw"],blurb:"Pooled onchain capital — graded vaults with live APR and TVL.",sample:[{label:"MLP (House Liq.)",value:"A · 18.4%",meta:"$9.8M TVL"},{label:"Basis Capture",value:"A · 14.2%",meta:"$2.1M TVL"}]}]},Ac={line:"Back agents you can prove. Own the upside.",primaryCta:{label:"Launch app",href:dn.app},social:[{label:"Join Discord",href:dn.discord},{label:"Join X",href:dn.x}]},OM={legal:"© 2026 Morpheum. Capital funds proof."};function eo({variant:s="primary",children:e,className:i="",...r}){const l=`cta cta--${s} terminal-interactive ${i}`.trim();if("href"in r&&r.href!==void 0){const{href:c,...u}=r;return B.jsx("a",{className:l,href:c,...u,children:e})}return B.jsx("button",{className:l,type:"button",...r,children:e})}function PM(){return B.jsx("section",{id:"join",className:"section community",children:B.jsxs("div",{className:"container community__inner",children:[B.jsx("h2",{className:"community__line",children:Ac.line}),B.jsxs("div",{className:"community__ctas",children:[B.jsx(eo,{href:Ac.primaryCta.href,variant:"primary",children:Ac.primaryCta.label}),Ac.social.map(s=>B.jsx(eo,{href:s.href,variant:"ghost",children:s.label},s.label))]})]})})}function IM(){const[s,e]=$t.useState(!1),i=!!dn.tutorialVideo;return B.jsx("section",{id:"demo",className:"section demo",children:B.jsxs("div",{className:"container",children:[B.jsx("p",{className:"section-kicker",children:hh.kicker}),B.jsxs("div",{className:"demo__video",children:[s&&i?B.jsx("video",{className:"demo__player",src:dn.tutorialVideo,controls:!0,autoPlay:!0,playsInline:!0}):B.jsxs("button",{type:"button",className:"demo__poster",onClick:()=>i&&e(!0),"aria-label":i?"Play tutorial video":"Tutorial video coming soon",children:[B.jsx("span",{className:"demo__play","aria-hidden":!0,children:"▶"}),B.jsx("span",{className:"demo__poster-label",children:"Tutorial"})]}),B.jsx("p",{className:"demo__caption",children:hh.videoCaption})]})]})})}const FM={receipt:"Receipt",riskScore:"Risk",credential:"Credential",verified:"Verified"};function Dd({type:s,value:e}){return B.jsxs("span",{className:`proof-chip proof-chip--${s}`,children:[B.jsx("span",{className:"proof-chip__dot","aria-hidden":!0}),B.jsx("span",{className:"proof-chip__label",children:FM[s]}),e?B.jsx("span",{className:"proof-chip__value",children:e}):null]})}function BM(){const s=Or.cards[0],e=Or.cards[1],i=Or.cards[2],r=Or.cards[3];return B.jsx("section",{id:"explore",className:"section explore",children:B.jsxs("div",{className:"container",children:[B.jsx("p",{className:"section-kicker",children:Or.kicker}),B.jsx("h2",{className:"section-title explore__title",children:Or.title}),B.jsxs("div",{className:"explore__grid",children:[B.jsxs("article",{id:"explore-agents",className:"explore-card explore-card--major",children:[B.jsxs("header",{className:"explore-card__header",children:[B.jsx("h3",{className:"explore-card__title",children:s.title}),B.jsx("p",{className:"explore-card__verbs",children:s.verbs.join(" · ").toUpperCase()})]}),B.jsx("ul",{className:"explore-roster",children:s.agents.map(l=>B.jsxs("li",{className:"explore-roster__row",children:[B.jsxs("div",{className:"explore-roster__top",children:[B.jsx("span",{className:"explore-roster__name",children:l.name}),B.jsx("span",{className:`terminal-value ${l.positive?"terminal-long":"terminal-short"}`,children:l.roi})]}),B.jsxs("div",{className:"explore-roster__proof",children:[B.jsx(Dd,{type:"verified"}),B.jsx(Dd,{type:"riskScore",value:l.risk}),B.jsx(Dd,{type:"receipt"}),B.jsxs("span",{className:"terminal-value explore-roster__sharpe",children:["Sharpe ",l.sharpe]})]})]},l.name))})]}),B.jsxs("article",{className:"explore-card explore-card--major",children:[B.jsxs("header",{className:"explore-card__header",children:[B.jsx("h3",{className:"explore-card__title",children:e.title}),B.jsx("p",{className:"explore-card__verbs",children:e.verbs.join(" · ").toUpperCase()})]}),B.jsx("p",{className:"explore-card__blurb",children:e.blurb}),B.jsx("ul",{className:"explore-sample",children:e.sample.map(l=>B.jsxs("li",{children:[B.jsx("span",{className:"terminal-label",children:l.label}),B.jsx("span",{className:`terminal-value ${l.positive?"terminal-long":""}`,children:l.value})]},l.label))})]}),B.jsxs("article",{id:"explore-buckets",className:"explore-card explore-card--major",children:[B.jsxs("header",{className:"explore-card__header",children:[B.jsx("h3",{className:"explore-card__title",children:i.title}),B.jsx("p",{className:"explore-card__verbs",children:i.verbs.join(" · ").toUpperCase()})]}),B.jsx("p",{className:"explore-card__blurb",children:i.blurb}),B.jsx("ul",{className:"explore-sample",children:i.sample.map(l=>B.jsxs("li",{children:[B.jsx("span",{className:"terminal-label",children:l.label}),B.jsx("span",{className:"terminal-value explore-sample__status",children:l.value})]},l.label))})]}),B.jsxs("article",{id:"explore-vaults",className:"explore-card explore-card--major",children:[B.jsxs("header",{className:"explore-card__header",children:[B.jsx("h3",{className:"explore-card__title",children:r.title}),B.jsx("p",{className:"explore-card__verbs",children:r.verbs.join(" · ").toUpperCase()})]}),B.jsx("p",{className:"explore-card__blurb",children:r.blurb}),B.jsx("ul",{className:"explore-sample",children:r.sample.map(l=>B.jsxs("li",{children:[B.jsx("span",{className:"terminal-label",children:l.label}),B.jsxs("span",{className:"explore-sample__metrics",children:[B.jsx("span",{className:"terminal-value terminal-long",children:l.value}),B.jsx("span",{className:"terminal-value explore-sample__meta",children:l.meta})]})]},l.label))})]})]})]})})}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const rp="185",zM=0,p_=1,HM=2,jc=1,GM=2,al=3,Oa=0,si=1,ea=2,Na=0,Qr=1,ph=2,m_=3,g_=4,VM=5,Ys=100,kM=101,XM=102,WM=103,qM=104,YM=200,ZM=201,KM=202,jM=203,mh=204,gh=205,QM=206,JM=207,$M=208,ey=209,ty=210,ny=211,iy=212,ay=213,sy=214,_h=0,vh=1,xh=2,to=3,Sh=4,Mh=5,yh=6,Eh=7,bv=0,ry=1,oy=2,ia=0,Tv=1,Av=2,Rv=3,Cv=4,wv=5,Dv=6,Uv=7,Nv=300,Qs=301,no=302,Ud=303,Nd=304,uu=306,bh=1e3,Vi=1001,Th=1002,Fn=1003,ly=1004,Rc=1005,yn=1006,Ld=1007,xs=1008,wi=1009,Lv=1010,Ov=1011,fl=1012,op=1013,ra=1014,ta=1015,Pa=1016,lp=1017,cp=1018,dl=1020,Pv=35902,Iv=35899,Fv=1021,Bv=1022,ki=1023,Ia=1026,Ks=1027,zv=1028,up=1029,Js=1030,fp=1031,dp=1033,Qc=33776,Jc=33777,$c=33778,eu=33779,Ah=35840,Rh=35841,Ch=35842,wh=35843,Dh=36196,Uh=37492,Nh=37496,Lh=37488,Oh=37489,nu=37490,Ph=37491,Ih=37808,Fh=37809,Bh=37810,zh=37811,Hh=37812,Gh=37813,Vh=37814,kh=37815,Xh=37816,Wh=37817,qh=37818,Yh=37819,Zh=37820,Kh=37821,jh=36492,Qh=36494,Jh=36495,$h=36283,ep=36284,iu=36285,tp=36286,cy=3200,__=0,uy=1,vs="",jn="srgb",au="srgb-linear",su="linear",qt="srgb",Pr=7680,v_=519,fy=512,dy=513,hy=514,hp=515,py=516,my=517,pp=518,gy=519,x_=35044,S_="300 es",na=2e3,ru=2001;function _y(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function ou(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function vy(){const s=ou("canvas");return s.style.display="block",s}const M_={};function y_(...s){const e="THREE."+s.shift();console.log(e,...s)}function Hv(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const i=s[1];i&&i.isStackTrace?s[0]+=" "+i.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function st(...s){s=Hv(s);const e="THREE."+s.shift();{const i=s[0];i&&i.isStackTrace?console.warn(i.getError(e)):console.warn(e,...s)}}function Nt(...s){s=Hv(s);const e="THREE."+s.shift();{const i=s[0];i&&i.isStackTrace?console.error(i.getError(e)):console.error(e,...s)}}function Jr(...s){const e=s.join(" ");e in M_||(M_[e]=!0,st(...s))}function xy(s,e,i){return new Promise(function(r,l){function c(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:l();break;case s.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:r()}}setTimeout(c,i)})}const Sy={[_h]:vh,[xh]:yh,[Sh]:Eh,[to]:Mh,[vh]:_h,[yh]:xh,[Eh]:Sh,[Mh]:to};class er{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const l=r[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let c=0,u=l.length;c<u;c++)l[c].call(this,e);e.target=null}}}const Gn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let E_=1234567;const ol=Math.PI/180,hl=180/Math.PI;function so(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Gn[s&255]+Gn[s>>8&255]+Gn[s>>16&255]+Gn[s>>24&255]+"-"+Gn[e&255]+Gn[e>>8&255]+"-"+Gn[e>>16&15|64]+Gn[e>>24&255]+"-"+Gn[i&63|128]+Gn[i>>8&255]+"-"+Gn[i>>16&255]+Gn[i>>24&255]+Gn[r&255]+Gn[r>>8&255]+Gn[r>>16&255]+Gn[r>>24&255]).toLowerCase()}function xt(s,e,i){return Math.max(e,Math.min(i,s))}function mp(s,e){return(s%e+e)%e}function My(s,e,i,r,l){return r+(s-e)*(l-r)/(i-e)}function yy(s,e,i){return s!==e?(i-s)/(e-s):0}function ll(s,e,i){return(1-i)*s+i*e}function Ey(s,e,i,r){return ll(s,e,1-Math.exp(-i*r))}function by(s,e=1){return e-Math.abs(mp(s,e*2)-e)}function Ty(s,e,i){return s<=e?0:s>=i?1:(s=(s-e)/(i-e),s*s*(3-2*s))}function Ay(s,e,i){return s<=e?0:s>=i?1:(s=(s-e)/(i-e),s*s*s*(s*(s*6-15)+10))}function Ry(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Cy(s,e){return s+Math.random()*(e-s)}function wy(s){return s*(.5-Math.random())}function Dy(s){s!==void 0&&(E_=s);let e=E_+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Uy(s){return s*ol}function Ny(s){return s*hl}function Ly(s){return(s&s-1)===0&&s!==0}function Oy(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Py(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Iy(s,e,i,r,l){const c=Math.cos,u=Math.sin,h=c(i/2),p=u(i/2),m=c((e+r)/2),_=u((e+r)/2),v=c((e-r)/2),g=u((e-r)/2),S=c((r-e)/2),b=u((r-e)/2);switch(l){case"XYX":s.set(h*_,p*v,p*g,h*m);break;case"YZY":s.set(p*g,h*_,p*v,h*m);break;case"ZXZ":s.set(p*v,p*g,h*_,h*m);break;case"XZX":s.set(h*_,p*b,p*S,h*m);break;case"YXY":s.set(p*S,h*_,p*b,h*m);break;case"ZYZ":s.set(p*b,p*S,h*_,h*m);break;default:st("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function Kr(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Yn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Un={DEG2RAD:ol,RAD2DEG:hl,generateUUID:so,clamp:xt,euclideanModulo:mp,mapLinear:My,inverseLerp:yy,lerp:ll,damp:Ey,pingpong:by,smoothstep:Ty,smootherstep:Ay,randInt:Ry,randFloat:Cy,randFloatSpread:wy,seededRandom:Dy,degToRad:Uy,radToDeg:Ny,isPowerOfTwo:Ly,ceilPowerOfTwo:Oy,floorPowerOfTwo:Py,setQuaternionFromProperEuler:Iy,normalize:Yn,denormalize:Kr},Sp=class Sp{constructor(e=0,i=0){this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=xt(this.x,e.x,i.x),this.y=xt(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=xt(this.x,e,i),this.y=xt(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(xt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(xt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),c=this.x-e.x,u=this.y-e.y;return this.x=c*r-u*l+e.x,this.y=c*l+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Sp.prototype.isVector2=!0;let Ft=Sp;class ro{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,c,u,h){let p=r[l+0],m=r[l+1],_=r[l+2],v=r[l+3],g=c[u+0],S=c[u+1],b=c[u+2],w=c[u+3];if(v!==w||p!==g||m!==S||_!==b){let y=p*g+m*S+_*b+v*w;y<0&&(g=-g,S=-S,b=-b,w=-w,y=-y);let M=1-h;if(y<.9995){const F=Math.acos(y),z=Math.sin(F);M=Math.sin(M*F)/z,h=Math.sin(h*F)/z,p=p*M+g*h,m=m*M+S*h,_=_*M+b*h,v=v*M+w*h}else{p=p*M+g*h,m=m*M+S*h,_=_*M+b*h,v=v*M+w*h;const F=1/Math.sqrt(p*p+m*m+_*_+v*v);p*=F,m*=F,_*=F,v*=F}}e[i]=p,e[i+1]=m,e[i+2]=_,e[i+3]=v}static multiplyQuaternionsFlat(e,i,r,l,c,u){const h=r[l],p=r[l+1],m=r[l+2],_=r[l+3],v=c[u],g=c[u+1],S=c[u+2],b=c[u+3];return e[i]=h*b+_*v+p*S-m*g,e[i+1]=p*b+_*g+m*v-h*S,e[i+2]=m*b+_*S+h*g-p*v,e[i+3]=_*b-h*v-p*g-m*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,c=e._z,u=e._order,h=Math.cos,p=Math.sin,m=h(r/2),_=h(l/2),v=h(c/2),g=p(r/2),S=p(l/2),b=p(c/2);switch(u){case"XYZ":this._x=g*_*v+m*S*b,this._y=m*S*v-g*_*b,this._z=m*_*b+g*S*v,this._w=m*_*v-g*S*b;break;case"YXZ":this._x=g*_*v+m*S*b,this._y=m*S*v-g*_*b,this._z=m*_*b-g*S*v,this._w=m*_*v+g*S*b;break;case"ZXY":this._x=g*_*v-m*S*b,this._y=m*S*v+g*_*b,this._z=m*_*b+g*S*v,this._w=m*_*v-g*S*b;break;case"ZYX":this._x=g*_*v-m*S*b,this._y=m*S*v+g*_*b,this._z=m*_*b-g*S*v,this._w=m*_*v+g*S*b;break;case"YZX":this._x=g*_*v+m*S*b,this._y=m*S*v+g*_*b,this._z=m*_*b-g*S*v,this._w=m*_*v-g*S*b;break;case"XZY":this._x=g*_*v-m*S*b,this._y=m*S*v-g*_*b,this._z=m*_*b+g*S*v,this._w=m*_*v+g*S*b;break;default:st("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],c=i[8],u=i[1],h=i[5],p=i[9],m=i[2],_=i[6],v=i[10],g=r+h+v;if(g>0){const S=.5/Math.sqrt(g+1);this._w=.25/S,this._x=(_-p)*S,this._y=(c-m)*S,this._z=(u-l)*S}else if(r>h&&r>v){const S=2*Math.sqrt(1+r-h-v);this._w=(_-p)/S,this._x=.25*S,this._y=(l+u)/S,this._z=(c+m)/S}else if(h>v){const S=2*Math.sqrt(1+h-r-v);this._w=(c-m)/S,this._x=(l+u)/S,this._y=.25*S,this._z=(p+_)/S}else{const S=2*Math.sqrt(1+v-r-h);this._w=(u-l)/S,this._x=(c+m)/S,this._y=(p+_)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(xt(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,c=e._z,u=e._w,h=i._x,p=i._y,m=i._z,_=i._w;return this._x=r*_+u*h+l*m-c*p,this._y=l*_+u*p+c*h-r*m,this._z=c*_+u*m+r*p-l*h,this._w=u*_-r*h-l*p-c*m,this._onChangeCallback(),this}slerp(e,i){let r=e._x,l=e._y,c=e._z,u=e._w,h=this.dot(e);h<0&&(r=-r,l=-l,c=-c,u=-u,h=-h);let p=1-i;if(h<.9995){const m=Math.acos(h),_=Math.sin(m);p=Math.sin(p*m)/_,i=Math.sin(i*m)/_,this._x=this._x*p+r*i,this._y=this._y*p+l*i,this._z=this._z*p+c*i,this._w=this._w*p+u*i,this._onChangeCallback()}else this._x=this._x*p+r*i,this._y=this._y*p+l*i,this._z=this._z*p+c*i,this._w=this._w*p+u*i,this.normalize();return this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Mp=class Mp{constructor(e=0,i=0,r=0){this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(b_.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(b_.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*r+c[6]*l,this.y=c[1]*i+c[4]*r+c[7]*l,this.z=c[2]*i+c[5]*r+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,c=e.elements,u=1/(c[3]*i+c[7]*r+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*l+c[12])*u,this.y=(c[1]*i+c[5]*r+c[9]*l+c[13])*u,this.z=(c[2]*i+c[6]*r+c[10]*l+c[14])*u,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,c=e.x,u=e.y,h=e.z,p=e.w,m=2*(u*l-h*r),_=2*(h*i-c*l),v=2*(c*r-u*i);return this.x=i+p*m+u*v-h*_,this.y=r+p*_+h*m-c*v,this.z=l+p*v+c*_-u*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*r+c[8]*l,this.y=c[1]*i+c[5]*r+c[9]*l,this.z=c[2]*i+c[6]*r+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=xt(this.x,e.x,i.x),this.y=xt(this.y,e.y,i.y),this.z=xt(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=xt(this.x,e,i),this.y=xt(this.y,e,i),this.z=xt(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(xt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,c=e.z,u=i.x,h=i.y,p=i.z;return this.x=l*p-c*h,this.y=c*u-r*p,this.z=r*h-l*u,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Od.copy(this).projectOnVector(e),this.sub(Od)}reflect(e){return this.sub(Od.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(xt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Mp.prototype.isVector3=!0;let $=Mp;const Od=new $,b_=new ro,yp=class yp{constructor(e,i,r,l,c,u,h,p,m){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,c,u,h,p,m)}set(e,i,r,l,c,u,h,p,m){const _=this.elements;return _[0]=e,_[1]=l,_[2]=h,_[3]=i,_[4]=c,_[5]=p,_[6]=r,_[7]=u,_[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,c=this.elements,u=r[0],h=r[3],p=r[6],m=r[1],_=r[4],v=r[7],g=r[2],S=r[5],b=r[8],w=l[0],y=l[3],M=l[6],F=l[1],z=l[4],C=l[7],O=l[2],U=l[5],P=l[8];return c[0]=u*w+h*F+p*O,c[3]=u*y+h*z+p*U,c[6]=u*M+h*C+p*P,c[1]=m*w+_*F+v*O,c[4]=m*y+_*z+v*U,c[7]=m*M+_*C+v*P,c[2]=g*w+S*F+b*O,c[5]=g*y+S*z+b*U,c[8]=g*M+S*C+b*P,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],u=e[4],h=e[5],p=e[6],m=e[7],_=e[8];return i*u*_-i*h*m-r*c*_+r*h*p+l*c*m-l*u*p}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],u=e[4],h=e[5],p=e[6],m=e[7],_=e[8],v=_*u-h*m,g=h*p-_*c,S=m*c-u*p,b=i*v+r*g+l*S;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/b;return e[0]=v*w,e[1]=(l*m-_*r)*w,e[2]=(h*r-l*u)*w,e[3]=g*w,e[4]=(_*i-l*p)*w,e[5]=(l*c-h*i)*w,e[6]=S*w,e[7]=(r*p-m*i)*w,e[8]=(u*i-r*c)*w,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,c,u,h){const p=Math.cos(c),m=Math.sin(c);return this.set(r*p,r*m,-r*(p*u+m*h)+u+e,-l*m,l*p,-l*(-m*u+p*h)+h+i,0,0,1),this}scale(e,i){return Jr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Pd.makeScale(e,i)),this}rotate(e){return Jr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Pd.makeRotation(-e)),this}translate(e,i){return Jr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Pd.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};yp.prototype.isMatrix3=!0;let lt=yp;const Pd=new lt,T_=new lt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),A_=new lt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Fy(){const s={enabled:!0,workingColorSpace:au,spaces:{},convert:function(l,c,u){return this.enabled===!1||c===u||!c||!u||(this.spaces[c].transfer===qt&&(l.r=La(l.r),l.g=La(l.g),l.b=La(l.b)),this.spaces[c].primaries!==this.spaces[u].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===qt&&(l.r=$r(l.r),l.g=$r(l.g),l.b=$r(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===vs?su:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,u){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return Jr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return Jr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(l,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[au]:{primaries:e,whitePoint:r,transfer:su,toXYZ:T_,fromXYZ:A_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:jn},outputColorSpaceConfig:{drawingBufferColorSpace:jn}},[jn]:{primaries:e,whitePoint:r,transfer:qt,toXYZ:T_,fromXYZ:A_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:jn}}}),s}const Rt=Fy();function La(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function $r(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Ir;class By{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Ir===void 0&&(Ir=ou("canvas")),Ir.width=e.width,Ir.height=e.height;const l=Ir.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),r=Ir}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=ou("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),c=l.data;for(let u=0;u<c.length;u++)c[u]=La(c[u]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(La(i[r]/255)*255):i[r]=La(i[r]);return{data:i,width:e.width,height:e.height}}else return st("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let zy=0;class gp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:zy++}),this.uuid=so(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayWidth,i.displayHeight,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let u=0,h=l.length;u<h;u++)l[u].isDataTexture?c.push(Id(l[u].image)):c.push(Id(l[u]))}else c=Id(l);r.url=c}return i||(e.images[this.uuid]=r),r}}function Id(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?By.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(st("Texture: Unable to serialize Texture."),{})}let Hy=0;const Fd=new $;class kn extends er{constructor(e=kn.DEFAULT_IMAGE,i=kn.DEFAULT_MAPPING,r=Vi,l=Vi,c=yn,u=xs,h=ki,p=wi,m=kn.DEFAULT_ANISOTROPY,_=vs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Hy++}),this.uuid=so(),this.name="",this.source=new gp(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=c,this.minFilter=u,this.anisotropy=m,this.format=h,this.internalFormat=null,this.type=p,this.offset=new Ft(0,0),this.repeat=new Ft(1,1),this.center=new Ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new lt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Fd).x}get height(){return this.source.getSize(Fd).y}get depth(){return this.source.getSize(Fd).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const r=e[i];if(r===void 0){st(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){st(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Nv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case bh:e.x=e.x-Math.floor(e.x);break;case Vi:e.x=e.x<0?0:1;break;case Th:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case bh:e.y=e.y-Math.floor(e.y);break;case Vi:e.y=e.y<0?0:1;break;case Th:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}kn.DEFAULT_IMAGE=null;kn.DEFAULT_MAPPING=Nv;kn.DEFAULT_ANISOTROPY=1;const Ep=class Ep{constructor(e=0,i=0,r=0,l=1){this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,c=this.w,u=e.elements;return this.x=u[0]*i+u[4]*r+u[8]*l+u[12]*c,this.y=u[1]*i+u[5]*r+u[9]*l+u[13]*c,this.z=u[2]*i+u[6]*r+u[10]*l+u[14]*c,this.w=u[3]*i+u[7]*r+u[11]*l+u[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,c;const p=e.elements,m=p[0],_=p[4],v=p[8],g=p[1],S=p[5],b=p[9],w=p[2],y=p[6],M=p[10];if(Math.abs(_-g)<.01&&Math.abs(v-w)<.01&&Math.abs(b-y)<.01){if(Math.abs(_+g)<.1&&Math.abs(v+w)<.1&&Math.abs(b+y)<.1&&Math.abs(m+S+M-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const z=(m+1)/2,C=(S+1)/2,O=(M+1)/2,U=(_+g)/4,P=(v+w)/4,T=(b+y)/4;return z>C&&z>O?z<.01?(r=0,l=.707106781,c=.707106781):(r=Math.sqrt(z),l=U/r,c=P/r):C>O?C<.01?(r=.707106781,l=0,c=.707106781):(l=Math.sqrt(C),r=U/l,c=T/l):O<.01?(r=.707106781,l=.707106781,c=0):(c=Math.sqrt(O),r=P/c,l=T/c),this.set(r,l,c,i),this}let F=Math.sqrt((y-b)*(y-b)+(v-w)*(v-w)+(g-_)*(g-_));return Math.abs(F)<.001&&(F=1),this.x=(y-b)/F,this.y=(v-w)/F,this.z=(g-_)/F,this.w=Math.acos((m+S+M-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=xt(this.x,e.x,i.x),this.y=xt(this.y,e.y,i.y),this.z=xt(this.z,e.z,i.z),this.w=xt(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=xt(this.x,e,i),this.y=xt(this.y,e,i),this.z=xt(this.z,e,i),this.w=xt(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(xt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Ep.prototype.isVector4=!0;let cn=Ep;class Gy extends er{constructor(e=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:yn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},r),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=r.depth,this.scissor=new cn(0,0,e,i),this.scissorTest=!1,this.viewport=new cn(0,0,e,i),this.textures=[];const l={width:e,height:i,depth:r.depth},c=new kn(l),u=r.count;for(let h=0;h<u;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview,this.useArrayDepthTexture=r.useArrayDepthTexture}_setTextureOptions(e={}){const i={minFilter:yn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new gp(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class aa extends Gy{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class Gv extends kn{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=Fn,this.minFilter=Fn,this.wrapR=Vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Vy extends kn{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=Fn,this.minFilter=Fn,this.wrapR=Vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const cu=class cu{constructor(e,i,r,l,c,u,h,p,m,_,v,g,S,b,w,y){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,c,u,h,p,m,_,v,g,S,b,w,y)}set(e,i,r,l,c,u,h,p,m,_,v,g,S,b,w,y){const M=this.elements;return M[0]=e,M[4]=i,M[8]=r,M[12]=l,M[1]=c,M[5]=u,M[9]=h,M[13]=p,M[2]=m,M[6]=_,M[10]=v,M[14]=g,M[3]=S,M[7]=b,M[11]=w,M[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new cu().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return this.determinantAffine()===0?(e.set(1,0,0),i.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const i=this.elements,r=e.elements,l=1/Fr.setFromMatrixColumn(e,0).length(),c=1/Fr.setFromMatrixColumn(e,1).length(),u=1/Fr.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*u,i[9]=r[9]*u,i[10]=r[10]*u,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,c=e.z,u=Math.cos(r),h=Math.sin(r),p=Math.cos(l),m=Math.sin(l),_=Math.cos(c),v=Math.sin(c);if(e.order==="XYZ"){const g=u*_,S=u*v,b=h*_,w=h*v;i[0]=p*_,i[4]=-p*v,i[8]=m,i[1]=S+b*m,i[5]=g-w*m,i[9]=-h*p,i[2]=w-g*m,i[6]=b+S*m,i[10]=u*p}else if(e.order==="YXZ"){const g=p*_,S=p*v,b=m*_,w=m*v;i[0]=g+w*h,i[4]=b*h-S,i[8]=u*m,i[1]=u*v,i[5]=u*_,i[9]=-h,i[2]=S*h-b,i[6]=w+g*h,i[10]=u*p}else if(e.order==="ZXY"){const g=p*_,S=p*v,b=m*_,w=m*v;i[0]=g-w*h,i[4]=-u*v,i[8]=b+S*h,i[1]=S+b*h,i[5]=u*_,i[9]=w-g*h,i[2]=-u*m,i[6]=h,i[10]=u*p}else if(e.order==="ZYX"){const g=u*_,S=u*v,b=h*_,w=h*v;i[0]=p*_,i[4]=b*m-S,i[8]=g*m+w,i[1]=p*v,i[5]=w*m+g,i[9]=S*m-b,i[2]=-m,i[6]=h*p,i[10]=u*p}else if(e.order==="YZX"){const g=u*p,S=u*m,b=h*p,w=h*m;i[0]=p*_,i[4]=w-g*v,i[8]=b*v+S,i[1]=v,i[5]=u*_,i[9]=-h*_,i[2]=-m*_,i[6]=S*v+b,i[10]=g-w*v}else if(e.order==="XZY"){const g=u*p,S=u*m,b=h*p,w=h*m;i[0]=p*_,i[4]=-v,i[8]=m*_,i[1]=g*v+w,i[5]=u*_,i[9]=S*v-b,i[2]=b*v-S,i[6]=h*_,i[10]=w*v+g}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ky,e,Xy)}lookAt(e,i,r){const l=this.elements;return gi.subVectors(e,i),gi.lengthSq()===0&&(gi.z=1),gi.normalize(),ds.crossVectors(r,gi),ds.lengthSq()===0&&(Math.abs(r.z)===1?gi.x+=1e-4:gi.z+=1e-4,gi.normalize(),ds.crossVectors(r,gi)),ds.normalize(),Cc.crossVectors(gi,ds),l[0]=ds.x,l[4]=Cc.x,l[8]=gi.x,l[1]=ds.y,l[5]=Cc.y,l[9]=gi.y,l[2]=ds.z,l[6]=Cc.z,l[10]=gi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,c=this.elements,u=r[0],h=r[4],p=r[8],m=r[12],_=r[1],v=r[5],g=r[9],S=r[13],b=r[2],w=r[6],y=r[10],M=r[14],F=r[3],z=r[7],C=r[11],O=r[15],U=l[0],P=l[4],T=l[8],L=l[12],Y=l[1],V=l[5],Q=l[9],pe=l[13],de=l[2],J=l[6],I=l[10],G=l[14],ee=l[3],_e=l[7],be=l[11],N=l[15];return c[0]=u*U+h*Y+p*de+m*ee,c[4]=u*P+h*V+p*J+m*_e,c[8]=u*T+h*Q+p*I+m*be,c[12]=u*L+h*pe+p*G+m*N,c[1]=_*U+v*Y+g*de+S*ee,c[5]=_*P+v*V+g*J+S*_e,c[9]=_*T+v*Q+g*I+S*be,c[13]=_*L+v*pe+g*G+S*N,c[2]=b*U+w*Y+y*de+M*ee,c[6]=b*P+w*V+y*J+M*_e,c[10]=b*T+w*Q+y*I+M*be,c[14]=b*L+w*pe+y*G+M*N,c[3]=F*U+z*Y+C*de+O*ee,c[7]=F*P+z*V+C*J+O*_e,c[11]=F*T+z*Q+C*I+O*be,c[15]=F*L+z*pe+C*G+O*N,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],c=e[12],u=e[1],h=e[5],p=e[9],m=e[13],_=e[2],v=e[6],g=e[10],S=e[14],b=e[3],w=e[7],y=e[11],M=e[15],F=p*S-m*g,z=h*S-m*v,C=h*g-p*v,O=u*S-m*_,U=u*g-p*_,P=u*v-h*_;return i*(w*F-y*z+M*C)-r*(b*F-y*O+M*U)+l*(b*z-w*O+M*P)-c*(b*C-w*U+y*P)}determinantAffine(){const e=this.elements,i=e[0],r=e[4],l=e[8],c=e[1],u=e[5],h=e[9],p=e[2],m=e[6],_=e[10];return i*(u*_-h*m)-r*(c*_-h*p)+l*(c*m-u*p)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],u=e[4],h=e[5],p=e[6],m=e[7],_=e[8],v=e[9],g=e[10],S=e[11],b=e[12],w=e[13],y=e[14],M=e[15],F=i*h-r*u,z=i*p-l*u,C=i*m-c*u,O=r*p-l*h,U=r*m-c*h,P=l*m-c*p,T=_*w-v*b,L=_*y-g*b,Y=_*M-S*b,V=v*y-g*w,Q=v*M-S*w,pe=g*M-S*y,de=F*pe-z*Q+C*V+O*Y-U*L+P*T;if(de===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const J=1/de;return e[0]=(h*pe-p*Q+m*V)*J,e[1]=(l*Q-r*pe-c*V)*J,e[2]=(w*P-y*U+M*O)*J,e[3]=(g*U-v*P-S*O)*J,e[4]=(p*Y-u*pe-m*L)*J,e[5]=(i*pe-l*Y+c*L)*J,e[6]=(y*C-b*P-M*z)*J,e[7]=(_*P-g*C+S*z)*J,e[8]=(u*Q-h*Y+m*T)*J,e[9]=(r*Y-i*Q-c*T)*J,e[10]=(b*U-w*C+M*F)*J,e[11]=(v*C-_*U-S*F)*J,e[12]=(h*L-u*V-p*T)*J,e[13]=(i*V-r*L+l*T)*J,e[14]=(w*z-b*O-y*F)*J,e[15]=(_*O-v*z+g*F)*J,this}scale(e){const i=this.elements,r=e.x,l=e.y,c=e.z;return i[0]*=r,i[4]*=l,i[8]*=c,i[1]*=r,i[5]*=l,i[9]*=c,i[2]*=r,i[6]*=l,i[10]*=c,i[3]*=r,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),c=1-r,u=e.x,h=e.y,p=e.z,m=c*u,_=c*h;return this.set(m*u+r,m*h-l*p,m*p+l*h,0,m*h+l*p,_*h+r,_*p-l*u,0,m*p-l*h,_*p+l*u,c*p*p+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,c,u){return this.set(1,r,c,0,e,1,u,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,c=i._x,u=i._y,h=i._z,p=i._w,m=c+c,_=u+u,v=h+h,g=c*m,S=c*_,b=c*v,w=u*_,y=u*v,M=h*v,F=p*m,z=p*_,C=p*v,O=r.x,U=r.y,P=r.z;return l[0]=(1-(w+M))*O,l[1]=(S+C)*O,l[2]=(b-z)*O,l[3]=0,l[4]=(S-C)*U,l[5]=(1-(g+M))*U,l[6]=(y+F)*U,l[7]=0,l[8]=(b+z)*P,l[9]=(y-F)*P,l[10]=(1-(g+w))*P,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;e.x=l[12],e.y=l[13],e.z=l[14];const c=this.determinantAffine();if(c===0)return r.set(1,1,1),i.identity(),this;let u=Fr.set(l[0],l[1],l[2]).length();const h=Fr.set(l[4],l[5],l[6]).length(),p=Fr.set(l[8],l[9],l[10]).length();c<0&&(u=-u),Bi.copy(this);const m=1/u,_=1/h,v=1/p;return Bi.elements[0]*=m,Bi.elements[1]*=m,Bi.elements[2]*=m,Bi.elements[4]*=_,Bi.elements[5]*=_,Bi.elements[6]*=_,Bi.elements[8]*=v,Bi.elements[9]*=v,Bi.elements[10]*=v,i.setFromRotationMatrix(Bi),r.x=u,r.y=h,r.z=p,this}makePerspective(e,i,r,l,c,u,h=na,p=!1){const m=this.elements,_=2*c/(i-e),v=2*c/(r-l),g=(i+e)/(i-e),S=(r+l)/(r-l);let b,w;if(p)b=c/(u-c),w=u*c/(u-c);else if(h===na)b=-(u+c)/(u-c),w=-2*u*c/(u-c);else if(h===ru)b=-u/(u-c),w=-u*c/(u-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return m[0]=_,m[4]=0,m[8]=g,m[12]=0,m[1]=0,m[5]=v,m[9]=S,m[13]=0,m[2]=0,m[6]=0,m[10]=b,m[14]=w,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,i,r,l,c,u,h=na,p=!1){const m=this.elements,_=2/(i-e),v=2/(r-l),g=-(i+e)/(i-e),S=-(r+l)/(r-l);let b,w;if(p)b=1/(u-c),w=u/(u-c);else if(h===na)b=-2/(u-c),w=-(u+c)/(u-c);else if(h===ru)b=-1/(u-c),w=-c/(u-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return m[0]=_,m[4]=0,m[8]=0,m[12]=g,m[1]=0,m[5]=v,m[9]=0,m[13]=S,m[2]=0,m[6]=0,m[10]=b,m[14]=w,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}};cu.prototype.isMatrix4=!0;let hn=cu;const Fr=new $,Bi=new hn,ky=new $(0,0,0),Xy=new $(1,1,1),ds=new $,Cc=new $,gi=new $,R_=new hn,C_=new ro;class $s{constructor(e=0,i=0,r=0,l=$s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,c=l[0],u=l[4],h=l[8],p=l[1],m=l[5],_=l[9],v=l[2],g=l[6],S=l[10];switch(i){case"XYZ":this._y=Math.asin(xt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-_,S),this._z=Math.atan2(-u,c)):(this._x=Math.atan2(g,m),this._z=0);break;case"YXZ":this._x=Math.asin(-xt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(h,S),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-v,c),this._z=0);break;case"ZXY":this._x=Math.asin(xt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-v,S),this._z=Math.atan2(-u,m)):(this._y=0,this._z=Math.atan2(p,c));break;case"ZYX":this._y=Math.asin(-xt(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(g,S),this._z=Math.atan2(p,c)):(this._x=0,this._z=Math.atan2(-u,m));break;case"YZX":this._z=Math.asin(xt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-_,m),this._y=Math.atan2(-v,c)):(this._x=0,this._y=Math.atan2(h,S));break;case"XZY":this._z=Math.asin(-xt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(g,m),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-_,S),this._y=0);break;default:st("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return R_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(R_,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return C_.setFromEuler(this),this.setFromQuaternion(C_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}$s.DEFAULT_ORDER="XYZ";class Vv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Wy=0;const w_=new $,Br=new ro,Aa=new hn,wc=new $,Jo=new $,qy=new $,Yy=new ro,D_=new $(1,0,0),U_=new $(0,1,0),N_=new $(0,0,1),L_={type:"added"},Zy={type:"removed"},zr={type:"childadded",child:null},Bd={type:"childremoved",child:null};class vi extends er{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Wy++}),this.uuid=so(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=vi.DEFAULT_UP.clone();const e=new $,i=new $s,r=new ro,l=new $(1,1,1);function c(){r.setFromEuler(i,!1)}function u(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new hn},normalMatrix:{value:new lt}}),this.matrix=new hn,this.matrixWorld=new hn,this.matrixAutoUpdate=vi.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=vi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Vv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return Br.setFromAxisAngle(e,i),this.quaternion.multiply(Br),this}rotateOnWorldAxis(e,i){return Br.setFromAxisAngle(e,i),this.quaternion.premultiply(Br),this}rotateX(e){return this.rotateOnAxis(D_,e)}rotateY(e){return this.rotateOnAxis(U_,e)}rotateZ(e){return this.rotateOnAxis(N_,e)}translateOnAxis(e,i){return w_.copy(e).applyQuaternion(this.quaternion),this.position.add(w_.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(D_,e)}translateY(e){return this.translateOnAxis(U_,e)}translateZ(e){return this.translateOnAxis(N_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Aa.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?wc.copy(e):wc.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Jo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Aa.lookAt(Jo,wc,this.up):Aa.lookAt(wc,Jo,this.up),this.quaternion.setFromRotationMatrix(Aa),l&&(Aa.extractRotation(l.matrixWorld),Br.setFromRotationMatrix(Aa),this.quaternion.premultiply(Br.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(Nt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(L_),zr.child=e,this.dispatchEvent(zr),zr.child=null):Nt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(Zy),Bd.child=e,this.dispatchEvent(Bd),Bd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Aa.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Aa.multiply(e.parent.matrixWorld)),e.applyMatrix4(Aa),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(L_),zr.child=e,this.dispatchEvent(zr),zr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const u=this.children[r].getObjectByProperty(e,i);if(u!==void 0)return u}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let c=0,u=l.length;c<u;c++)l[c].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Jo,e,qy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Jo,Yy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const i=e.x,r=e.y,l=e.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*r-c[8]*l,c[13]+=r-c[1]*i-c[5]*r-c[9]*l,c[14]+=l-c[2]*i-c[6]*r-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i,r=!1){const l=this.parent;if(e===!0&&l!==null&&l.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),i===!0){const c=this.children;for(let u=0,h=c.length;u<h;u++)c[u].updateWorldMatrix(!1,!0,r)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(h,p){return h[p.uuid]===void 0&&(h[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const p=h.shapes;if(Array.isArray(p))for(let m=0,_=p.length;m<_;m++){const v=p[m];c(e.shapes,v)}else c(e.shapes,p)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let p=0,m=this.material.length;p<m;p++)h.push(c(e.materials,this.material[p]));l.material=h}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const p=this.animations[h];l.animations.push(c(e.animations,p))}}if(i){const h=u(e.geometries),p=u(e.materials),m=u(e.textures),_=u(e.images),v=u(e.shapes),g=u(e.skeletons),S=u(e.animations),b=u(e.nodes);h.length>0&&(r.geometries=h),p.length>0&&(r.materials=p),m.length>0&&(r.textures=m),_.length>0&&(r.images=_),v.length>0&&(r.shapes=v),g.length>0&&(r.skeletons=g),S.length>0&&(r.animations=S),b.length>0&&(r.nodes=b)}return r.object=l,r;function u(h){const p=[];for(const m in h){const _=h[m];delete _.metadata,p.push(_)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}vi.DEFAULT_UP=new $(0,1,0);vi.DEFAULT_MATRIX_AUTO_UPDATE=!0;vi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class sl extends vi{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ky={type:"move"};class zd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new sl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new sl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new sl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,c=null,u=null;const h=this._targetRay,p=this._grip,m=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(m&&e.hand){u=!0;for(const w of e.hand.values()){const y=i.getJointPose(w,r),M=this._getHandJoint(m,w);y!==null&&(M.matrix.fromArray(y.transform.matrix),M.matrix.decompose(M.position,M.rotation,M.scale),M.matrixWorldNeedsUpdate=!0,M.jointRadius=y.radius),M.visible=y!==null}const _=m.joints["index-finger-tip"],v=m.joints["thumb-tip"],g=_.position.distanceTo(v.position),S=.02,b=.005;m.inputState.pinching&&g>S+b?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&g<=S-b&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,r),c!==null&&(p.matrix.fromArray(c.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,c.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(c.linearVelocity)):p.hasLinearVelocity=!1,c.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(c.angularVelocity)):p.hasAngularVelocity=!1,p.eventsEnabled&&p.dispatchEvent({type:"gripUpdated",data:e,target:this})));h!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&c!==null&&(l=c),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(Ky)))}return h!==null&&(h.visible=l!==null),p!==null&&(p.visible=c!==null),m!==null&&(m.visible=u!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new sl;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}const kv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hs={h:0,s:0,l:0},Dc={h:0,s:0,l:0};function Hd(s,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?s+(e-s)*6*i:i<1/2?e:i<2/3?s+(e-s)*6*(2/3-i):s}class Dt{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=jn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Rt.colorSpaceToWorking(this,i),this}setRGB(e,i,r,l=Rt.workingColorSpace){return this.r=e,this.g=i,this.b=r,Rt.colorSpaceToWorking(this,l),this}setHSL(e,i,r,l=Rt.workingColorSpace){if(e=mp(e,1),i=xt(i,0,1),r=xt(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,u=2*r-c;this.r=Hd(u,c,e+1/3),this.g=Hd(u,c,e),this.b=Hd(u,c,e-1/3)}return Rt.colorSpaceToWorking(this,l),this}setStyle(e,i=jn){function r(c){c!==void 0&&parseFloat(c)<1&&st("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const u=l[1],h=l[2];switch(u){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:st("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],u=c.length;if(u===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(u===6)return this.setHex(parseInt(c,16),i);st("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=jn){const r=kv[e.toLowerCase()];return r!==void 0?this.setHex(r,i):st("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=La(e.r),this.g=La(e.g),this.b=La(e.b),this}copyLinearToSRGB(e){return this.r=$r(e.r),this.g=$r(e.g),this.b=$r(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=jn){return Rt.workingToColorSpace(Vn.copy(this),e),Math.round(xt(Vn.r*255,0,255))*65536+Math.round(xt(Vn.g*255,0,255))*256+Math.round(xt(Vn.b*255,0,255))}getHexString(e=jn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Rt.workingColorSpace){Rt.workingToColorSpace(Vn.copy(this),i);const r=Vn.r,l=Vn.g,c=Vn.b,u=Math.max(r,l,c),h=Math.min(r,l,c);let p,m;const _=(h+u)/2;if(h===u)p=0,m=0;else{const v=u-h;switch(m=_<=.5?v/(u+h):v/(2-u-h),u){case r:p=(l-c)/v+(l<c?6:0);break;case l:p=(c-r)/v+2;break;case c:p=(r-l)/v+4;break}p/=6}return e.h=p,e.s=m,e.l=_,e}getRGB(e,i=Rt.workingColorSpace){return Rt.workingToColorSpace(Vn.copy(this),i),e.r=Vn.r,e.g=Vn.g,e.b=Vn.b,e}getStyle(e=jn){Rt.workingToColorSpace(Vn.copy(this),e);const i=Vn.r,r=Vn.g,l=Vn.b;return e!==jn?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(hs),this.setHSL(hs.h+e,hs.s+i,hs.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(hs),e.getHSL(Dc);const r=ll(hs.h,Dc.h,i),l=ll(hs.s,Dc.s,i),c=ll(hs.l,Dc.l,i);return this.setHSL(r,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*r+c[6]*l,this.g=c[1]*i+c[4]*r+c[7]*l,this.b=c[2]*i+c[5]*r+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Vn=new Dt;Dt.NAMES=kv;class jy extends vi{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $s,this.environmentIntensity=1,this.environmentRotation=new $s,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const zi=new $,Ra=new $,Gd=new $,Ca=new $,Hr=new $,Gr=new $,O_=new $,Vd=new $,kd=new $,Xd=new $,Wd=new cn,qd=new cn,Yd=new cn;class Gi{constructor(e=new $,i=new $,r=new $){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),zi.subVectors(e,i),l.cross(zi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,r,l,c){zi.subVectors(l,i),Ra.subVectors(r,i),Gd.subVectors(e,i);const u=zi.dot(zi),h=zi.dot(Ra),p=zi.dot(Gd),m=Ra.dot(Ra),_=Ra.dot(Gd),v=u*m-h*h;if(v===0)return c.set(0,0,0),null;const g=1/v,S=(m*p-h*_)*g,b=(u*_-h*p)*g;return c.set(1-S-b,b,S)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,Ca)===null?!1:Ca.x>=0&&Ca.y>=0&&Ca.x+Ca.y<=1}static getInterpolation(e,i,r,l,c,u,h,p){return this.getBarycoord(e,i,r,l,Ca)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(c,Ca.x),p.addScaledVector(u,Ca.y),p.addScaledVector(h,Ca.z),p)}static getInterpolatedAttribute(e,i,r,l,c,u){return Wd.setScalar(0),qd.setScalar(0),Yd.setScalar(0),Wd.fromBufferAttribute(e,i),qd.fromBufferAttribute(e,r),Yd.fromBufferAttribute(e,l),u.setScalar(0),u.addScaledVector(Wd,c.x),u.addScaledVector(qd,c.y),u.addScaledVector(Yd,c.z),u}static isFrontFacing(e,i,r,l){return zi.subVectors(r,i),Ra.subVectors(e,i),zi.cross(Ra).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return zi.subVectors(this.c,this.b),Ra.subVectors(this.a,this.b),zi.cross(Ra).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Gi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Gi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,c){return Gi.getInterpolation(e,this.a,this.b,this.c,i,r,l,c)}containsPoint(e){return Gi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Gi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,c=this.c;let u,h;Hr.subVectors(l,r),Gr.subVectors(c,r),Vd.subVectors(e,r);const p=Hr.dot(Vd),m=Gr.dot(Vd);if(p<=0&&m<=0)return i.copy(r);kd.subVectors(e,l);const _=Hr.dot(kd),v=Gr.dot(kd);if(_>=0&&v<=_)return i.copy(l);const g=p*v-_*m;if(g<=0&&p>=0&&_<=0)return u=p/(p-_),i.copy(r).addScaledVector(Hr,u);Xd.subVectors(e,c);const S=Hr.dot(Xd),b=Gr.dot(Xd);if(b>=0&&S<=b)return i.copy(c);const w=S*m-p*b;if(w<=0&&m>=0&&b<=0)return h=m/(m-b),i.copy(r).addScaledVector(Gr,h);const y=_*b-S*v;if(y<=0&&v-_>=0&&S-b>=0)return O_.subVectors(c,l),h=(v-_)/(v-_+(S-b)),i.copy(l).addScaledVector(O_,h);const M=1/(y+w+g);return u=w*M,h=g*M,i.copy(r).addScaledVector(Hr,u).addScaledVector(Gr,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class ml{constructor(e=new $(1/0,1/0,1/0),i=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(Hi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(Hi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=Hi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let u=0,h=c.count;u<h;u++)e.isMesh===!0?e.getVertexPosition(u,Hi):Hi.fromBufferAttribute(c,u),Hi.applyMatrix4(e.matrixWorld),this.expandByPoint(Hi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Uc.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Uc.copy(r.boundingBox)),Uc.applyMatrix4(e.matrixWorld),this.union(Uc)}const l=e.children;for(let c=0,u=l.length;c<u;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Hi),Hi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter($o),Nc.subVectors(this.max,$o),Vr.subVectors(e.a,$o),kr.subVectors(e.b,$o),Xr.subVectors(e.c,$o),ps.subVectors(kr,Vr),ms.subVectors(Xr,kr),Gs.subVectors(Vr,Xr);let i=[0,-ps.z,ps.y,0,-ms.z,ms.y,0,-Gs.z,Gs.y,ps.z,0,-ps.x,ms.z,0,-ms.x,Gs.z,0,-Gs.x,-ps.y,ps.x,0,-ms.y,ms.x,0,-Gs.y,Gs.x,0];return!Zd(i,Vr,kr,Xr,Nc)||(i=[1,0,0,0,1,0,0,0,1],!Zd(i,Vr,kr,Xr,Nc))?!1:(Lc.crossVectors(ps,ms),i=[Lc.x,Lc.y,Lc.z],Zd(i,Vr,kr,Xr,Nc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Hi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Hi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(wa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),wa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),wa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),wa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),wa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),wa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),wa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),wa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(wa),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const wa=[new $,new $,new $,new $,new $,new $,new $,new $],Hi=new $,Uc=new ml,Vr=new $,kr=new $,Xr=new $,ps=new $,ms=new $,Gs=new $,$o=new $,Nc=new $,Lc=new $,Vs=new $;function Zd(s,e,i,r,l){for(let c=0,u=s.length-3;c<=u;c+=3){Vs.fromArray(s,c);const h=l.x*Math.abs(Vs.x)+l.y*Math.abs(Vs.y)+l.z*Math.abs(Vs.z),p=e.dot(Vs),m=i.dot(Vs),_=r.dot(Vs);if(Math.max(-Math.max(p,m,_),Math.min(p,m,_))>h)return!1}return!0}const Mn=new $,Oc=new Ft;let Qy=0;class sa extends er{constructor(e,i,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Qy++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=x_,this.updateRanges=[],this.gpuType=ta,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)Oc.fromBufferAttribute(this,i),Oc.applyMatrix3(e),this.setXY(i,Oc.x,Oc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)Mn.fromBufferAttribute(this,i),Mn.applyMatrix3(e),this.setXYZ(i,Mn.x,Mn.y,Mn.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)Mn.fromBufferAttribute(this,i),Mn.applyMatrix4(e),this.setXYZ(i,Mn.x,Mn.y,Mn.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)Mn.fromBufferAttribute(this,i),Mn.applyNormalMatrix(e),this.setXYZ(i,Mn.x,Mn.y,Mn.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)Mn.fromBufferAttribute(this,i),Mn.transformDirection(e),this.setXYZ(i,Mn.x,Mn.y,Mn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=Kr(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=Yn(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Kr(i,this.array)),i}setX(e,i){return this.normalized&&(i=Yn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Kr(i,this.array)),i}setY(e,i){return this.normalized&&(i=Yn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Kr(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Yn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Kr(i,this.array)),i}setW(e,i){return this.normalized&&(i=Yn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=Yn(i,this.array),r=Yn(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=Yn(i,this.array),r=Yn(r,this.array),l=Yn(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,c){return e*=this.itemSize,this.normalized&&(i=Yn(i,this.array),r=Yn(r,this.array),l=Yn(l,this.array),c=Yn(c,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==x_&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class Xv extends sa{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class Wv extends sa{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class Di extends sa{constructor(e,i,r){super(new Float32Array(e),i,r)}}const Jy=new ml,el=new $,Kd=new $;class _p{constructor(e=new $,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):Jy.setFromPoints(e).getCenter(r);let l=0;for(let c=0,u=e.length;c<u;c++)l=Math.max(l,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;el.subVectors(e,this.center);const i=el.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(el,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Kd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(el.copy(e.center).add(Kd)),this.expandByPoint(el.copy(e.center).sub(Kd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let $y=0;const Ri=new hn,jd=new vi,Wr=new $,_i=new ml,tl=new ml,Dn=new $;class Ni extends er{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$y++}),this.uuid=so(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(_y(e)?Wv:Xv)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new lt().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Ri.makeRotationFromQuaternion(e),this.applyMatrix4(Ri),this}rotateX(e){return Ri.makeRotationX(e),this.applyMatrix4(Ri),this}rotateY(e){return Ri.makeRotationY(e),this.applyMatrix4(Ri),this}rotateZ(e){return Ri.makeRotationZ(e),this.applyMatrix4(Ri),this}translate(e,i,r){return Ri.makeTranslation(e,i,r),this.applyMatrix4(Ri),this}scale(e,i,r){return Ri.makeScale(e,i,r),this.applyMatrix4(Ri),this}lookAt(e){return jd.lookAt(e),jd.updateMatrix(),this.applyMatrix4(jd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Wr).negate(),this.translate(Wr.x,Wr.y,Wr.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,c=e.length;l<c;l++){const u=e[l];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new Di(r,3))}else{const r=Math.min(e.length,i.count);for(let l=0;l<r;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&st("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ml);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Nt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const c=i[r];_i.setFromBufferAttribute(c),this.morphTargetsRelative?(Dn.addVectors(this.boundingBox.min,_i.min),this.boundingBox.expandByPoint(Dn),Dn.addVectors(this.boundingBox.max,_i.max),this.boundingBox.expandByPoint(Dn)):(this.boundingBox.expandByPoint(_i.min),this.boundingBox.expandByPoint(_i.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Nt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _p);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Nt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(e){const r=this.boundingSphere.center;if(_i.setFromBufferAttribute(e),i)for(let c=0,u=i.length;c<u;c++){const h=i[c];tl.setFromBufferAttribute(h),this.morphTargetsRelative?(Dn.addVectors(_i.min,tl.min),_i.expandByPoint(Dn),Dn.addVectors(_i.max,tl.max),_i.expandByPoint(Dn)):(_i.expandByPoint(tl.min),_i.expandByPoint(tl.max))}_i.getCenter(r);let l=0;for(let c=0,u=e.count;c<u;c++)Dn.fromBufferAttribute(e,c),l=Math.max(l,r.distanceToSquared(Dn));if(i)for(let c=0,u=i.length;c<u;c++){const h=i[c],p=this.morphTargetsRelative;for(let m=0,_=h.count;m<_;m++)Dn.fromBufferAttribute(h,m),p&&(Wr.fromBufferAttribute(e,m),Dn.add(Wr)),l=Math.max(l,r.distanceToSquared(Dn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Nt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Nt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,c=i.uv;let u=this.getAttribute("tangent");(u===void 0||u.count!==r.count)&&(u=new sa(new Float32Array(4*r.count),4),this.setAttribute("tangent",u));const h=[],p=[];for(let T=0;T<r.count;T++)h[T]=new $,p[T]=new $;const m=new $,_=new $,v=new $,g=new Ft,S=new Ft,b=new Ft,w=new $,y=new $;function M(T,L,Y){m.fromBufferAttribute(r,T),_.fromBufferAttribute(r,L),v.fromBufferAttribute(r,Y),g.fromBufferAttribute(c,T),S.fromBufferAttribute(c,L),b.fromBufferAttribute(c,Y),_.sub(m),v.sub(m),S.sub(g),b.sub(g);const V=1/(S.x*b.y-b.x*S.y);isFinite(V)&&(w.copy(_).multiplyScalar(b.y).addScaledVector(v,-S.y).multiplyScalar(V),y.copy(v).multiplyScalar(S.x).addScaledVector(_,-b.x).multiplyScalar(V),h[T].add(w),h[L].add(w),h[Y].add(w),p[T].add(y),p[L].add(y),p[Y].add(y))}let F=this.groups;F.length===0&&(F=[{start:0,count:e.count}]);for(let T=0,L=F.length;T<L;++T){const Y=F[T],V=Y.start,Q=Y.count;for(let pe=V,de=V+Q;pe<de;pe+=3)M(e.getX(pe+0),e.getX(pe+1),e.getX(pe+2))}const z=new $,C=new $,O=new $,U=new $;function P(T){O.fromBufferAttribute(l,T),U.copy(O);const L=h[T];z.copy(L),z.sub(O.multiplyScalar(O.dot(L))).normalize(),C.crossVectors(U,L);const V=C.dot(p[T])<0?-1:1;u.setXYZW(T,z.x,z.y,z.z,V)}for(let T=0,L=F.length;T<L;++T){const Y=F[T],V=Y.start,Q=Y.count;for(let pe=V,de=V+Q;pe<de;pe+=3)P(e.getX(pe+0)),P(e.getX(pe+1)),P(e.getX(pe+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==i.count)r=new sa(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let g=0,S=r.count;g<S;g++)r.setXYZ(g,0,0,0);const l=new $,c=new $,u=new $,h=new $,p=new $,m=new $,_=new $,v=new $;if(e)for(let g=0,S=e.count;g<S;g+=3){const b=e.getX(g+0),w=e.getX(g+1),y=e.getX(g+2);l.fromBufferAttribute(i,b),c.fromBufferAttribute(i,w),u.fromBufferAttribute(i,y),_.subVectors(u,c),v.subVectors(l,c),_.cross(v),h.fromBufferAttribute(r,b),p.fromBufferAttribute(r,w),m.fromBufferAttribute(r,y),h.add(_),p.add(_),m.add(_),r.setXYZ(b,h.x,h.y,h.z),r.setXYZ(w,p.x,p.y,p.z),r.setXYZ(y,m.x,m.y,m.z)}else for(let g=0,S=i.count;g<S;g+=3)l.fromBufferAttribute(i,g+0),c.fromBufferAttribute(i,g+1),u.fromBufferAttribute(i,g+2),_.subVectors(u,c),v.subVectors(l,c),_.cross(v),r.setXYZ(g+0,_.x,_.y,_.z),r.setXYZ(g+1,_.x,_.y,_.z),r.setXYZ(g+2,_.x,_.y,_.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)Dn.fromBufferAttribute(e,i),Dn.normalize(),e.setXYZ(i,Dn.x,Dn.y,Dn.z)}toNonIndexed(){function e(h,p){const m=h.array,_=h.itemSize,v=h.normalized,g=new m.constructor(p.length*_);let S=0,b=0;for(let w=0,y=p.length;w<y;w++){h.isInterleavedBufferAttribute?S=p[w]*h.data.stride+h.offset:S=p[w]*_;for(let M=0;M<_;M++)g[b++]=m[S++]}return new sa(g,_,v)}if(this.index===null)return st("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Ni,r=this.index.array,l=this.attributes;for(const h in l){const p=l[h],m=e(p,r);i.setAttribute(h,m)}const c=this.morphAttributes;for(const h in c){const p=[],m=c[h];for(let _=0,v=m.length;_<v;_++){const g=m[_],S=e(g,r);p.push(S)}i.morphAttributes[h]=p}i.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let h=0,p=u.length;h<p;h++){const m=u[h];i.addGroup(m.start,m.count,m.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const p in r){const m=r[p];e.data.attributes[p]=m.toJSON(e.data)}const l={};let c=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],_=[];for(let v=0,g=m.length;v<g;v++){const S=m[v];_.push(S.toJSON(e.data))}_.length>0&&(l[p]=_,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const l=e.attributes;for(const m in l){const _=l[m];this.setAttribute(m,_.clone(i))}const c=e.morphAttributes;for(const m in c){const _=[],v=c[m];for(let g=0,S=v.length;g<S;g++)_.push(v[g].clone(i));this.morphAttributes[m]=_}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let m=0,_=u.length;m<_;m++){const v=u[m];this.addGroup(v.start,v.count,v.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let eE=0;class fu extends er{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:eE++}),this.uuid=so(),this.name="",this.type="Material",this.blending=Qr,this.side=Oa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=mh,this.blendDst=gh,this.blendEquation=Ys,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Dt(0,0,0),this.blendAlpha=0,this.depthFunc=to,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=v_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Pr,this.stencilZFail=Pr,this.stencilZPass=Pr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){st(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){st(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector2&&r&&r.isVector2||l&&l.isEuler&&r&&r.isEuler||l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Qr&&(r.blending=this.blending),this.side!==Oa&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==mh&&(r.blendSrc=this.blendSrc),this.blendDst!==gh&&(r.blendDst=this.blendDst),this.blendEquation!==Ys&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==to&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==v_&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Pr&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Pr&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Pr&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(c){const u=[];for(const h in c){const p=c[h];delete p.metadata,u.push(p)}return u}if(i){const c=l(e.textures),u=l(e.images);c.length>0&&(r.textures=c),u.length>0&&(r.images=u)}return r}fromJSON(e,i){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Dt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=i[e.map]||null),e.matcap!==void 0&&(this.matcap=i[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=i[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=i[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=i[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),this.normalScale=new Ft().fromArray(r)}return e.displacementMap!==void 0&&(this.displacementMap=i[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=i[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=i[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=i[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=i[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=i[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=i[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=i[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=i[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=i[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=i[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=i[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=i[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=i[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ft().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=i[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=i[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=i[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=i[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=i[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=i[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=i[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let c=0;c!==l;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Da=new $,Qd=new $,Pc=new $,gs=new $,Jd=new $,Ic=new $,$d=new $;class tE{constructor(e=new $,i=new $(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Da)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=Da.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(Da.copy(this.origin).addScaledVector(this.direction,i),Da.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){Qd.copy(e).add(i).multiplyScalar(.5),Pc.copy(i).sub(e).normalize(),gs.copy(this.origin).sub(Qd);const c=e.distanceTo(i)*.5,u=-this.direction.dot(Pc),h=gs.dot(this.direction),p=-gs.dot(Pc),m=gs.lengthSq(),_=Math.abs(1-u*u);let v,g,S,b;if(_>0)if(v=u*p-h,g=u*h-p,b=c*_,v>=0)if(g>=-b)if(g<=b){const w=1/_;v*=w,g*=w,S=v*(v+u*g+2*h)+g*(u*v+g+2*p)+m}else g=c,v=Math.max(0,-(u*g+h)),S=-v*v+g*(g+2*p)+m;else g=-c,v=Math.max(0,-(u*g+h)),S=-v*v+g*(g+2*p)+m;else g<=-b?(v=Math.max(0,-(-u*c+h)),g=v>0?-c:Math.min(Math.max(-c,-p),c),S=-v*v+g*(g+2*p)+m):g<=b?(v=0,g=Math.min(Math.max(-c,-p),c),S=g*(g+2*p)+m):(v=Math.max(0,-(u*c+h)),g=v>0?c:Math.min(Math.max(-c,-p),c),S=-v*v+g*(g+2*p)+m);else g=u>0?-c:c,v=Math.max(0,-(u*g+h)),S=-v*v+g*(g+2*p)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(Qd).addScaledVector(Pc,g),S}intersectSphere(e,i){Da.subVectors(e.center,this.origin);const r=Da.dot(this.direction),l=Da.dot(Da)-r*r,c=e.radius*e.radius;if(l>c)return null;const u=Math.sqrt(c-l),h=r-u,p=r+u;return p<0?null:h<0?this.at(p,i):this.at(h,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,c,u,h,p;const m=1/this.direction.x,_=1/this.direction.y,v=1/this.direction.z,g=this.origin;return m>=0?(r=(e.min.x-g.x)*m,l=(e.max.x-g.x)*m):(r=(e.max.x-g.x)*m,l=(e.min.x-g.x)*m),_>=0?(c=(e.min.y-g.y)*_,u=(e.max.y-g.y)*_):(c=(e.max.y-g.y)*_,u=(e.min.y-g.y)*_),r>u||c>l||((c>r||isNaN(r))&&(r=c),(u<l||isNaN(l))&&(l=u),v>=0?(h=(e.min.z-g.z)*v,p=(e.max.z-g.z)*v):(h=(e.max.z-g.z)*v,p=(e.min.z-g.z)*v),r>p||h>l)||((h>r||r!==r)&&(r=h),(p<l||l!==l)&&(l=p),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,Da)!==null}intersectTriangle(e,i,r,l,c){Jd.subVectors(i,e),Ic.subVectors(r,e),$d.crossVectors(Jd,Ic);let u=this.direction.dot($d),h;if(u>0){if(l)return null;h=1}else if(u<0)h=-1,u=-u;else return null;gs.subVectors(this.origin,e);const p=h*this.direction.dot(Ic.crossVectors(gs,Ic));if(p<0)return null;const m=h*this.direction.dot(Jd.cross(gs));if(m<0||p+m>u)return null;const _=-h*gs.dot($d);return _<0?null:this.at(_/u,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class lu extends fu{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $s,this.combine=bv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const P_=new hn,ks=new tE,Fc=new _p,I_=new $,Bc=new $,zc=new $,Hc=new $,eh=new $,Gc=new $,F_=new $,Vc=new $;class Ui extends vi{constructor(e=new Ni,i=new lu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=l.length;c<u;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,c=r.morphAttributes.position,u=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const h=this.morphTargetInfluences;if(c&&h){Gc.set(0,0,0);for(let p=0,m=c.length;p<m;p++){const _=h[p],v=c[p];_!==0&&(eh.fromBufferAttribute(v,e),u?Gc.addScaledVector(eh,_):Gc.addScaledVector(eh.sub(i),_))}i.add(Gc)}return i}raycast(e,i){const r=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Fc.copy(r.boundingSphere),Fc.applyMatrix4(c),ks.copy(e.ray).recast(e.near),!(Fc.containsPoint(ks.origin)===!1&&(ks.intersectSphere(Fc,I_)===null||ks.origin.distanceToSquared(I_)>(e.far-e.near)**2))&&(P_.copy(c).invert(),ks.copy(e.ray).applyMatrix4(P_),!(r.boundingBox!==null&&ks.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,ks)))}_computeIntersections(e,i,r){let l;const c=this.geometry,u=this.material,h=c.index,p=c.attributes.position,m=c.attributes.uv,_=c.attributes.uv1,v=c.attributes.normal,g=c.groups,S=c.drawRange;if(h!==null)if(Array.isArray(u))for(let b=0,w=g.length;b<w;b++){const y=g[b],M=u[y.materialIndex],F=Math.max(y.start,S.start),z=Math.min(h.count,Math.min(y.start+y.count,S.start+S.count));for(let C=F,O=z;C<O;C+=3){const U=h.getX(C),P=h.getX(C+1),T=h.getX(C+2);l=kc(this,M,e,r,m,_,v,U,P,T),l&&(l.faceIndex=Math.floor(C/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const b=Math.max(0,S.start),w=Math.min(h.count,S.start+S.count);for(let y=b,M=w;y<M;y+=3){const F=h.getX(y),z=h.getX(y+1),C=h.getX(y+2);l=kc(this,u,e,r,m,_,v,F,z,C),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(p!==void 0)if(Array.isArray(u))for(let b=0,w=g.length;b<w;b++){const y=g[b],M=u[y.materialIndex],F=Math.max(y.start,S.start),z=Math.min(p.count,Math.min(y.start+y.count,S.start+S.count));for(let C=F,O=z;C<O;C+=3){const U=C,P=C+1,T=C+2;l=kc(this,M,e,r,m,_,v,U,P,T),l&&(l.faceIndex=Math.floor(C/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const b=Math.max(0,S.start),w=Math.min(p.count,S.start+S.count);for(let y=b,M=w;y<M;y+=3){const F=y,z=y+1,C=y+2;l=kc(this,u,e,r,m,_,v,F,z,C),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function nE(s,e,i,r,l,c,u,h){let p;if(e.side===si?p=r.intersectTriangle(u,c,l,!0,h):p=r.intersectTriangle(l,c,u,e.side===Oa,h),p===null)return null;Vc.copy(h),Vc.applyMatrix4(s.matrixWorld);const m=i.ray.origin.distanceTo(Vc);return m<i.near||m>i.far?null:{distance:m,point:Vc.clone(),object:s}}function kc(s,e,i,r,l,c,u,h,p,m){s.getVertexPosition(h,Bc),s.getVertexPosition(p,zc),s.getVertexPosition(m,Hc);const _=nE(s,e,i,r,Bc,zc,Hc,F_);if(_){const v=new $;Gi.getBarycoord(F_,Bc,zc,Hc,v),l&&(_.uv=Gi.getInterpolatedAttribute(l,h,p,m,v,new Ft)),c&&(_.uv1=Gi.getInterpolatedAttribute(c,h,p,m,v,new Ft)),u&&(_.normal=Gi.getInterpolatedAttribute(u,h,p,m,v,new $),_.normal.dot(r.direction)>0&&_.normal.multiplyScalar(-1));const g={a:h,b:p,c:m,normal:new $,materialIndex:0};Gi.getNormal(Bc,zc,Hc,g.normal),_.face=g,_.barycoord=v}return _}class iE extends kn{constructor(e=null,i=1,r=1,l,c,u,h,p,m=Fn,_=Fn,v,g){super(null,u,h,p,m,_,l,c,v,g),this.isDataTexture=!0,this.image={data:e,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const th=new $,aE=new $,sE=new lt;class qs{constructor(e=new $(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=th.subVectors(r,i).cross(aE.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i,r=!0){const l=e.delta(th),c=this.normal.dot(l);if(c===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/c;return r===!0&&(u<0||u>1)?null:i.copy(e.start).addScaledVector(l,u)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||sE.getNormalMatrix(e),l=this.coplanarPoint(th).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Xs=new _p,rE=new Ft(.5,.5),Xc=new $;class qv{constructor(e=new qs,i=new qs,r=new qs,l=new qs,c=new qs,u=new qs){this.planes=[e,i,r,l,c,u]}set(e,i,r,l,c,u){const h=this.planes;return h[0].copy(e),h[1].copy(i),h[2].copy(r),h[3].copy(l),h[4].copy(c),h[5].copy(u),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=na,r=!1){const l=this.planes,c=e.elements,u=c[0],h=c[1],p=c[2],m=c[3],_=c[4],v=c[5],g=c[6],S=c[7],b=c[8],w=c[9],y=c[10],M=c[11],F=c[12],z=c[13],C=c[14],O=c[15];if(l[0].setComponents(m-u,S-_,M-b,O-F).normalize(),l[1].setComponents(m+u,S+_,M+b,O+F).normalize(),l[2].setComponents(m+h,S+v,M+w,O+z).normalize(),l[3].setComponents(m-h,S-v,M-w,O-z).normalize(),r)l[4].setComponents(p,g,y,C).normalize(),l[5].setComponents(m-p,S-g,M-y,O-C).normalize();else if(l[4].setComponents(m-p,S-g,M-y,O-C).normalize(),i===na)l[5].setComponents(m+p,S+g,M+y,O+C).normalize();else if(i===ru)l[5].setComponents(p,g,y,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Xs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Xs.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Xs)}intersectsSprite(e){Xs.center.set(0,0,0);const i=rE.distanceTo(e.center);return Xs.radius=.7071067811865476+i,Xs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Xs)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(Xc.x=l.normal.x>0?e.max.x:e.min.x,Xc.y=l.normal.y>0?e.max.y:e.min.y,Xc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Xc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Yv extends kn{constructor(e=[],i=Qs,r,l,c,u,h,p,m,_){super(e,i,r,l,c,u,h,p,m,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Zv extends kn{constructor(e,i,r,l,c,u,h,p,m){super(e,i,r,l,c,u,h,p,m),this.isCanvasTexture=!0,this.needsUpdate=!0}}class io extends kn{constructor(e,i,r=ra,l,c,u,h=Fn,p=Fn,m,_=Ia,v=1){if(_!==Ia&&_!==Ks)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:i,depth:v};super(g,l,c,u,h,p,_,r,m),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new gp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class oE extends io{constructor(e,i=ra,r=Qs,l,c,u=Fn,h=Fn,p,m=Ia){const _={width:e,height:e,depth:1},v=[_,_,_,_,_,_];super(e,e,i,r,l,c,u,h,p,m),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Kv extends kn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class gl extends Ni{constructor(e=1,i=1,r=1,l=1,c=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:c,depthSegments:u};const h=this;l=Math.floor(l),c=Math.floor(c),u=Math.floor(u);const p=[],m=[],_=[],v=[];let g=0,S=0;b("z","y","x",-1,-1,r,i,e,u,c,0),b("z","y","x",1,-1,r,i,-e,u,c,1),b("x","z","y",1,1,e,r,i,l,u,2),b("x","z","y",1,-1,e,r,-i,l,u,3),b("x","y","z",1,-1,e,i,r,l,c,4),b("x","y","z",-1,-1,e,i,-r,l,c,5),this.setIndex(p),this.setAttribute("position",new Di(m,3)),this.setAttribute("normal",new Di(_,3)),this.setAttribute("uv",new Di(v,2));function b(w,y,M,F,z,C,O,U,P,T,L){const Y=C/P,V=O/T,Q=C/2,pe=O/2,de=U/2,J=P+1,I=T+1;let G=0,ee=0;const _e=new $;for(let be=0;be<I;be++){const N=be*V-pe;for(let Z=0;Z<J;Z++){const Ee=Z*Y-Q;_e[w]=Ee*F,_e[y]=N*z,_e[M]=de,m.push(_e.x,_e.y,_e.z),_e[w]=0,_e[y]=0,_e[M]=U>0?1:-1,_.push(_e.x,_e.y,_e.z),v.push(Z/P),v.push(1-be/T),G+=1}}for(let be=0;be<T;be++)for(let N=0;N<P;N++){const Z=g+N+J*be,Ee=g+N+J*(be+1),Ce=g+(N+1)+J*(be+1),Le=g+(N+1)+J*be;p.push(Z,Ee,Le),p.push(Ee,Ce,Le),ee+=6}h.addGroup(S,ee,L),S+=ee,g+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class lE{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){st("Curve: .getPoint() not implemented.")}getPointAt(e,i){const r=this.getUtoTmapping(e);return this.getPoint(r,i)}getPoints(e=5){const i=[];for(let r=0;r<=e;r++)i.push(this.getPoint(r/e));return i}getSpacedPoints(e=5){const i=[];for(let r=0;r<=e;r++)i.push(this.getPointAt(r/e));return i}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const i=[];let r,l=this.getPoint(0),c=0;i.push(0);for(let u=1;u<=e;u++)r=this.getPoint(u/e),c+=r.distanceTo(l),i.push(c),l=r;return this.cacheArcLengths=i,i}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,i=null){const r=this.getLengths();let l=0;const c=r.length;let u;i?u=i:u=e*r[c-1];let h=0,p=c-1,m;for(;h<=p;)if(l=Math.floor(h+(p-h)/2),m=r[l]-u,m<0)h=l+1;else if(m>0)p=l-1;else{p=l;break}if(l=p,r[l]===u)return l/(c-1);const _=r[l],g=r[l+1]-_,S=(u-_)/g;return(l+S)/(c-1)}getTangent(e,i){let l=e-1e-4,c=e+1e-4;l<0&&(l=0),c>1&&(c=1);const u=this.getPoint(l),h=this.getPoint(c),p=i||(u.isVector2?new Ft:new $);return p.copy(h).sub(u).normalize(),p}getTangentAt(e,i){const r=this.getUtoTmapping(e);return this.getTangent(r,i)}computeFrenetFrames(e,i=!1){const r=new $,l=[],c=[],u=[],h=new $,p=new hn;for(let S=0;S<=e;S++){const b=S/e;l[S]=this.getTangentAt(b,new $)}c[0]=new $,u[0]=new $;let m=Number.MAX_VALUE;const _=Math.abs(l[0].x),v=Math.abs(l[0].y),g=Math.abs(l[0].z);_<=m&&(m=_,r.set(1,0,0)),v<=m&&(m=v,r.set(0,1,0)),g<=m&&r.set(0,0,1),h.crossVectors(l[0],r).normalize(),c[0].crossVectors(l[0],h),u[0].crossVectors(l[0],c[0]);for(let S=1;S<=e;S++){if(c[S]=c[S-1].clone(),u[S]=u[S-1].clone(),h.crossVectors(l[S-1],l[S]),h.length()>Number.EPSILON){h.normalize();const b=Math.acos(xt(l[S-1].dot(l[S]),-1,1));c[S].applyMatrix4(p.makeRotationAxis(h,b))}u[S].crossVectors(l[S],c[S])}if(i===!0){let S=Math.acos(xt(c[0].dot(c[e]),-1,1));S/=e,l[0].dot(h.crossVectors(c[0],c[e]))>0&&(S=-S);for(let b=1;b<=e;b++)c[b].applyMatrix4(p.makeRotationAxis(l[b],S*b)),u[b].crossVectors(l[b],c[b])}return{tangents:l,normals:c,binormals:u}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}function vp(){let s=0,e=0,i=0,r=0;function l(c,u,h,p){s=c,e=h,i=-3*c+3*u-2*h-p,r=2*c-2*u+h+p}return{initCatmullRom:function(c,u,h,p,m){l(u,h,m*(h-c),m*(p-u))},initNonuniformCatmullRom:function(c,u,h,p,m,_,v){let g=(u-c)/m-(h-c)/(m+_)+(h-u)/_,S=(h-u)/_-(p-u)/(_+v)+(p-h)/v;g*=_,S*=_,l(u,h,g,S)},calc:function(c){const u=c*c,h=u*c;return s+e*c+i*u+r*h}}}const B_=new $,z_=new $,nh=new vp,ih=new vp,ah=new vp;class cE extends lE{constructor(e=[],i=!1,r="centripetal",l=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=i,this.curveType=r,this.tension=l}getPoint(e,i=new $){const r=i,l=this.points,c=l.length,u=(c-(this.closed?0:1))*e;let h=Math.floor(u),p=u-h;this.closed?h+=h>0?0:(Math.floor(Math.abs(h)/c)+1)*c:p===0&&h===c-1&&(h=c-2,p=1);let m,_;this.closed||h>0?m=l[(h-1)%c]:(z_.subVectors(l[0],l[1]).add(l[0]),m=z_);const v=l[h%c],g=l[(h+1)%c];if(this.closed||h+2<c?_=l[(h+2)%c]:(B_.subVectors(l[c-1],l[c-2]).add(l[c-1]),_=B_),this.curveType==="centripetal"||this.curveType==="chordal"){const S=this.curveType==="chordal"?.5:.25;let b=Math.pow(m.distanceToSquared(v),S),w=Math.pow(v.distanceToSquared(g),S),y=Math.pow(g.distanceToSquared(_),S);w<1e-4&&(w=1),b<1e-4&&(b=w),y<1e-4&&(y=w),nh.initNonuniformCatmullRom(m.x,v.x,g.x,_.x,b,w,y),ih.initNonuniformCatmullRom(m.y,v.y,g.y,_.y,b,w,y),ah.initNonuniformCatmullRom(m.z,v.z,g.z,_.z,b,w,y)}else this.curveType==="catmullrom"&&(nh.initCatmullRom(m.x,v.x,g.x,_.x,this.tension),ih.initCatmullRom(m.y,v.y,g.y,_.y,this.tension),ah.initCatmullRom(m.z,v.z,g.z,_.z,this.tension));return r.set(nh.calc(p),ih.calc(p),ah.calc(p)),r}copy(e){super.copy(e),this.points=[];for(let i=0,r=e.points.length;i<r;i++){const l=e.points[i];this.points.push(l.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let i=0,r=this.points.length;i<r;i++){const l=this.points[i];e.points.push(l.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let i=0,r=e.points.length;i<r;i++){const l=e.points[i];this.points.push(new $().fromArray(l))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}class js extends Ni{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const c=e/2,u=i/2,h=Math.floor(r),p=Math.floor(l),m=h+1,_=p+1,v=e/h,g=i/p,S=[],b=[],w=[],y=[];for(let M=0;M<_;M++){const F=M*g-u;for(let z=0;z<m;z++){const C=z*v-c;b.push(C,-F,0),w.push(0,0,1),y.push(z/h),y.push(1-M/p)}}for(let M=0;M<p;M++)for(let F=0;F<h;F++){const z=F+m*M,C=F+m*(M+1),O=F+1+m*(M+1),U=F+1+m*M;S.push(z,C,U),S.push(C,O,U)}this.setIndex(S),this.setAttribute("position",new Di(b,3)),this.setAttribute("normal",new Di(w,3)),this.setAttribute("uv",new Di(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new js(e.width,e.height,e.widthSegments,e.heightSegments)}}function ao(s){const e={};for(const i in s){e[i]={};for(const r in s[i]){const l=s[i][r];if(H_(l))l.isRenderTargetTexture?(st("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone();else if(Array.isArray(l))if(H_(l[0])){const c=[];for(let u=0,h=l.length;u<h;u++)c[u]=l[u].clone();e[i][r]=c}else e[i][r]=l.slice();else e[i][r]=l}}return e}function Zn(s){const e={};for(let i=0;i<s.length;i++){const r=ao(s[i]);for(const l in r)e[l]=r[l]}return e}function H_(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function uE(s){const e=[];for(let i=0;i<s.length;i++)e.push(s[i].clone());return e}function jv(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Rt.workingColorSpace}const fE={clone:ao,merge:Zn};var dE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,hE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Xi extends fu{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=dE,this.fragmentShader=hE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ao(e.uniforms),this.uniformsGroups=uE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const u=this.uniforms[l].value;u&&u.isTexture?i.uniforms[l]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?i.uniforms[l]={type:"c",value:u.getHex()}:u&&u.isVector2?i.uniforms[l]={type:"v2",value:u.toArray()}:u&&u.isVector3?i.uniforms[l]={type:"v3",value:u.toArray()}:u&&u.isVector4?i.uniforms[l]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?i.uniforms[l]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?i.uniforms[l]={type:"m4",value:u.toArray()}:i.uniforms[l]={value:u}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}fromJSON(e,i){if(super.fromJSON(e,i),e.uniforms!==void 0)for(const r in e.uniforms){const l=e.uniforms[r];switch(this.uniforms[r]={},l.type){case"t":this.uniforms[r].value=i[l.value]||null;break;case"c":this.uniforms[r].value=new Dt().setHex(l.value);break;case"v2":this.uniforms[r].value=new Ft().fromArray(l.value);break;case"v3":this.uniforms[r].value=new $().fromArray(l.value);break;case"v4":this.uniforms[r].value=new cn().fromArray(l.value);break;case"m3":this.uniforms[r].value=new lt().fromArray(l.value);break;case"m4":this.uniforms[r].value=new hn().fromArray(l.value);break;default:this.uniforms[r].value=l.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)this.extensions[r]=e.extensions[r];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class pE extends Xi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class mE extends fu{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=cy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class gE extends fu{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Wc=new $,qc=new ro,Qi=new $;class Qv extends vi{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new hn,this.projectionMatrix=new hn,this.projectionMatrixInverse=new hn,this.coordinateSystem=na,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Wc,qc,Qi),Qi.x===1&&Qi.y===1&&Qi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Wc,qc,Qi.set(1,1,1)).invert()}updateWorldMatrix(e,i,r=!1){super.updateWorldMatrix(e,i,r),this.matrixWorld.decompose(Wc,qc,Qi),Qi.x===1&&Qi.y===1&&Qi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Wc,qc,Qi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const _s=new $,G_=new Ft,V_=new Ft;class Ci extends Qv{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=hl*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ol*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return hl*2*Math.atan(Math.tan(ol*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){_s.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(_s.x,_s.y).multiplyScalar(-e/_s.z),_s.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(_s.x,_s.y).multiplyScalar(-e/_s.z)}getViewSize(e,i){return this.getViewBounds(e,G_,V_),i.subVectors(V_,G_)}setViewOffset(e,i,r,l,c,u){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(ol*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,c=-.5*l;const u=this.view;if(this.view!==null&&this.view.enabled){const p=u.fullWidth,m=u.fullHeight;c+=u.offsetX*l/p,i-=u.offsetY*r/m,l*=u.width/p,r*=u.height/m}const h=this.filmOffset;h!==0&&(c+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class Jv extends Qv{constructor(e=-1,i=1,r=1,l=-1,c=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=c,this.far=u,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,c,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=r-e,u=r+e,h=l+i,p=l-i;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=m*this.view.offsetX,u=c+m*this.view.width,h-=_*this.view.offsetY,p=h-_*this.view.height}this.projectionMatrix.makeOrthographic(c,u,h,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const qr=-90,Yr=1;class _E extends vi{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Ci(qr,Yr,e,i);l.layers=this.layers,this.add(l);const c=new Ci(qr,Yr,e,i);c.layers=this.layers,this.add(c);const u=new Ci(qr,Yr,e,i);u.layers=this.layers,this.add(u);const h=new Ci(qr,Yr,e,i);h.layers=this.layers,this.add(h);const p=new Ci(qr,Yr,e,i);p.layers=this.layers,this.add(p);const m=new Ci(qr,Yr,e,i);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,c,u,h,p]=i;for(const m of i)this.remove(m);if(e===na)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===ru)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of i)this.add(m),m.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,u,h,p,m,_]=this.children,v=e.getRenderTarget(),g=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const w=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let y=!1;e.isWebGLRenderer===!0?y=e.state.buffers.depth.getReversed():y=e.reversedDepthBuffer,e.setRenderTarget(r,0,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,c),e.setRenderTarget(r,1,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,u),e.setRenderTarget(r,2,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,h),e.setRenderTarget(r,3,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,p),e.setRenderTarget(r,4,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,m),r.texture.generateMipmaps=w,e.setRenderTarget(r,5,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,_),e.setRenderTarget(v,g,S),e.xr.enabled=b,r.texture.needsPMREMUpdate=!0}}class vE extends Ci{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const bp=class bp{constructor(e,i,r,l){this.elements=[1,0,0,1],e!==void 0&&this.set(e,i,r,l)}identity(){return this.set(1,0,0,1),this}fromArray(e,i=0){for(let r=0;r<4;r++)this.elements[r]=e[r+i];return this}set(e,i,r,l){const c=this.elements;return c[0]=e,c[2]=i,c[1]=r,c[3]=l,this}};bp.prototype.isMatrix2=!0;let k_=bp;function X_(s,e,i,r){const l=xE(r);switch(i){case Fv:return s*e;case zv:return s*e/l.components*l.byteLength;case up:return s*e/l.components*l.byteLength;case Js:return s*e*2/l.components*l.byteLength;case fp:return s*e*2/l.components*l.byteLength;case Bv:return s*e*3/l.components*l.byteLength;case ki:return s*e*4/l.components*l.byteLength;case dp:return s*e*4/l.components*l.byteLength;case Qc:case Jc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case $c:case eu:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Rh:case wh:return Math.max(s,16)*Math.max(e,8)/4;case Ah:case Ch:return Math.max(s,8)*Math.max(e,8)/2;case Dh:case Uh:case Lh:case Oh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Nh:case nu:case Ph:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ih:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Fh:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Bh:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case zh:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Hh:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Gh:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Vh:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case kh:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Xh:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Wh:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case qh:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Yh:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Zh:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Kh:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case jh:case Qh:case Jh:return Math.ceil(s/4)*Math.ceil(e/4)*16;case $h:case ep:return Math.ceil(s/4)*Math.ceil(e/4)*8;case iu:case tp:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function xE(s){switch(s){case wi:case Lv:return{byteLength:1,components:1};case fl:case Ov:case Pa:return{byteLength:2,components:1};case lp:case cp:return{byteLength:2,components:4};case ra:case op:case ta:return{byteLength:4,components:1};case Pv:case Iv:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:rp}}));typeof window<"u"&&(window.__THREE__?st("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=rp);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function $v(){let s=null,e=!1,i=null,r=null;function l(c,u){i(c,u),r=s.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&s!==null&&(r=s.requestAnimationFrame(l),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){s=c}}}function SE(s){const e=new WeakMap;function i(h,p){const m=h.array,_=h.usage,v=m.byteLength,g=s.createBuffer();s.bindBuffer(p,g),s.bufferData(p,m,_),h.onUploadCallback();let S;if(m instanceof Float32Array)S=s.FLOAT;else if(typeof Float16Array<"u"&&m instanceof Float16Array)S=s.HALF_FLOAT;else if(m instanceof Uint16Array)h.isFloat16BufferAttribute?S=s.HALF_FLOAT:S=s.UNSIGNED_SHORT;else if(m instanceof Int16Array)S=s.SHORT;else if(m instanceof Uint32Array)S=s.UNSIGNED_INT;else if(m instanceof Int32Array)S=s.INT;else if(m instanceof Int8Array)S=s.BYTE;else if(m instanceof Uint8Array)S=s.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)S=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:g,type:S,bytesPerElement:m.BYTES_PER_ELEMENT,version:h.version,size:v}}function r(h,p,m){const _=p.array,v=p.updateRanges;if(s.bindBuffer(m,h),v.length===0)s.bufferSubData(m,0,_);else{v.sort((S,b)=>S.start-b.start);let g=0;for(let S=1;S<v.length;S++){const b=v[g],w=v[S];w.start<=b.start+b.count+1?b.count=Math.max(b.count,w.start+w.count-b.start):(++g,v[g]=w)}v.length=g+1;for(let S=0,b=v.length;S<b;S++){const w=v[S];s.bufferSubData(m,w.start*_.BYTES_PER_ELEMENT,_,w.start,w.count)}p.clearUpdateRanges()}p.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const p=e.get(h);p&&(s.deleteBuffer(p.buffer),e.delete(h))}function u(h,p){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const _=e.get(h);(!_||_.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const m=e.get(h);if(m===void 0)e.set(h,i(h,p));else if(m.version<h.version){if(m.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,h,p),m.version=h.version}}return{get:l,remove:c,update:u}}var ME=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,yE=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,EE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,bE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,TE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,AE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,RE=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,CE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,wE=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,DE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,UE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,NE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,LE=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,OE=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,PE=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,IE=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,FE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,BE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,zE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,HE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,GE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,VE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,kE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,XE=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,WE=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,qE=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,YE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ZE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,KE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,jE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,QE="gl_FragColor = linearToOutputTexel( gl_FragColor );",JE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,$E=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,eb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,tb=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,nb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ib=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ab=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,sb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,rb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ob=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,lb=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,cb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ub=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,fb=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,db=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,hb=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,pb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,mb=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,gb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,_b=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,vb=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,xb=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Sb=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Mb=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,yb=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Eb=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,bb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Tb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ab=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Rb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Cb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,wb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Db=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Ub=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Nb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Lb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ob=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Pb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ib=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Fb=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Bb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Hb=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Gb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Xb=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Wb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,qb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Yb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Zb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Kb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,jb=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Qb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Jb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$b=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,eT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,tT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,nT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,iT=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,aT=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,sT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,rT=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,oT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,lT=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,cT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,uT=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,fT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,dT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,hT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,pT=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,mT=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,gT=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,_T=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,vT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,xT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,ST=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const MT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,yT=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ET=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bT=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,TT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,AT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,RT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,CT=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,wT=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,DT=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,UT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,NT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,LT=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,OT=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,PT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,IT=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,FT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,BT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,HT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,GT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,VT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,kT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,XT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,WT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,qT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,YT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ZT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,KT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,jT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,QT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,JT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$T=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,e1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,mt={alphahash_fragment:ME,alphahash_pars_fragment:yE,alphamap_fragment:EE,alphamap_pars_fragment:bE,alphatest_fragment:TE,alphatest_pars_fragment:AE,aomap_fragment:RE,aomap_pars_fragment:CE,batching_pars_vertex:wE,batching_vertex:DE,begin_vertex:UE,beginnormal_vertex:NE,bsdfs:LE,iridescence_fragment:OE,bumpmap_pars_fragment:PE,clipping_planes_fragment:IE,clipping_planes_pars_fragment:FE,clipping_planes_pars_vertex:BE,clipping_planes_vertex:zE,color_fragment:HE,color_pars_fragment:GE,color_pars_vertex:VE,color_vertex:kE,common:XE,cube_uv_reflection_fragment:WE,defaultnormal_vertex:qE,displacementmap_pars_vertex:YE,displacementmap_vertex:ZE,emissivemap_fragment:KE,emissivemap_pars_fragment:jE,colorspace_fragment:QE,colorspace_pars_fragment:JE,envmap_fragment:$E,envmap_common_pars_fragment:eb,envmap_pars_fragment:tb,envmap_pars_vertex:nb,envmap_physical_pars_fragment:hb,envmap_vertex:ib,fog_vertex:ab,fog_pars_vertex:sb,fog_fragment:rb,fog_pars_fragment:ob,gradientmap_pars_fragment:lb,lightmap_pars_fragment:cb,lights_lambert_fragment:ub,lights_lambert_pars_fragment:fb,lights_pars_begin:db,lights_toon_fragment:pb,lights_toon_pars_fragment:mb,lights_phong_fragment:gb,lights_phong_pars_fragment:_b,lights_physical_fragment:vb,lights_physical_pars_fragment:xb,lights_fragment_begin:Sb,lights_fragment_maps:Mb,lights_fragment_end:yb,lightprobes_pars_fragment:Eb,logdepthbuf_fragment:bb,logdepthbuf_pars_fragment:Tb,logdepthbuf_pars_vertex:Ab,logdepthbuf_vertex:Rb,map_fragment:Cb,map_pars_fragment:wb,map_particle_fragment:Db,map_particle_pars_fragment:Ub,metalnessmap_fragment:Nb,metalnessmap_pars_fragment:Lb,morphinstance_vertex:Ob,morphcolor_vertex:Pb,morphnormal_vertex:Ib,morphtarget_pars_vertex:Fb,morphtarget_vertex:Bb,normal_fragment_begin:zb,normal_fragment_maps:Hb,normal_pars_fragment:Gb,normal_pars_vertex:Vb,normal_vertex:kb,normalmap_pars_fragment:Xb,clearcoat_normal_fragment_begin:Wb,clearcoat_normal_fragment_maps:qb,clearcoat_pars_fragment:Yb,iridescence_pars_fragment:Zb,opaque_fragment:Kb,packing:jb,premultiplied_alpha_fragment:Qb,project_vertex:Jb,dithering_fragment:$b,dithering_pars_fragment:eT,roughnessmap_fragment:tT,roughnessmap_pars_fragment:nT,shadowmap_pars_fragment:iT,shadowmap_pars_vertex:aT,shadowmap_vertex:sT,shadowmask_pars_fragment:rT,skinbase_vertex:oT,skinning_pars_vertex:lT,skinning_vertex:cT,skinnormal_vertex:uT,specularmap_fragment:fT,specularmap_pars_fragment:dT,tonemapping_fragment:hT,tonemapping_pars_fragment:pT,transmission_fragment:mT,transmission_pars_fragment:gT,uv_pars_fragment:_T,uv_pars_vertex:vT,uv_vertex:xT,worldpos_vertex:ST,background_vert:MT,background_frag:yT,backgroundCube_vert:ET,backgroundCube_frag:bT,cube_vert:TT,cube_frag:AT,depth_vert:RT,depth_frag:CT,distance_vert:wT,distance_frag:DT,equirect_vert:UT,equirect_frag:NT,linedashed_vert:LT,linedashed_frag:OT,meshbasic_vert:PT,meshbasic_frag:IT,meshlambert_vert:FT,meshlambert_frag:BT,meshmatcap_vert:zT,meshmatcap_frag:HT,meshnormal_vert:GT,meshnormal_frag:VT,meshphong_vert:kT,meshphong_frag:XT,meshphysical_vert:WT,meshphysical_frag:qT,meshtoon_vert:YT,meshtoon_frag:ZT,points_vert:KT,points_frag:jT,shadow_vert:QT,shadow_frag:JT,sprite_vert:$T,sprite_frag:e1},Fe={common:{diffuse:{value:new Dt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new lt}},envmap:{envMap:{value:null},envMapRotation:{value:new lt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new lt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new lt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new lt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new lt},normalScale:{value:new Ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new lt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new lt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new lt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new lt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Dt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new $},probesMax:{value:new $},probesResolution:{value:new $}},points:{diffuse:{value:new Dt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0},uvTransform:{value:new lt}},sprite:{diffuse:{value:new Dt(16777215)},opacity:{value:1},center:{value:new Ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}}},$i={basic:{uniforms:Zn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.fog]),vertexShader:mt.meshbasic_vert,fragmentShader:mt.meshbasic_frag},lambert:{uniforms:Zn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new Dt(0)},envMapIntensity:{value:1}}]),vertexShader:mt.meshlambert_vert,fragmentShader:mt.meshlambert_frag},phong:{uniforms:Zn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new Dt(0)},specular:{value:new Dt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:mt.meshphong_vert,fragmentShader:mt.meshphong_frag},standard:{uniforms:Zn([Fe.common,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.roughnessmap,Fe.metalnessmap,Fe.fog,Fe.lights,{emissive:{value:new Dt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag},toon:{uniforms:Zn([Fe.common,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.gradientmap,Fe.fog,Fe.lights,{emissive:{value:new Dt(0)}}]),vertexShader:mt.meshtoon_vert,fragmentShader:mt.meshtoon_frag},matcap:{uniforms:Zn([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,{matcap:{value:null}}]),vertexShader:mt.meshmatcap_vert,fragmentShader:mt.meshmatcap_frag},points:{uniforms:Zn([Fe.points,Fe.fog]),vertexShader:mt.points_vert,fragmentShader:mt.points_frag},dashed:{uniforms:Zn([Fe.common,Fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:mt.linedashed_vert,fragmentShader:mt.linedashed_frag},depth:{uniforms:Zn([Fe.common,Fe.displacementmap]),vertexShader:mt.depth_vert,fragmentShader:mt.depth_frag},normal:{uniforms:Zn([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,{opacity:{value:1}}]),vertexShader:mt.meshnormal_vert,fragmentShader:mt.meshnormal_frag},sprite:{uniforms:Zn([Fe.sprite,Fe.fog]),vertexShader:mt.sprite_vert,fragmentShader:mt.sprite_frag},background:{uniforms:{uvTransform:{value:new lt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:mt.background_vert,fragmentShader:mt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new lt}},vertexShader:mt.backgroundCube_vert,fragmentShader:mt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:mt.cube_vert,fragmentShader:mt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:mt.equirect_vert,fragmentShader:mt.equirect_frag},distance:{uniforms:Zn([Fe.common,Fe.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:mt.distance_vert,fragmentShader:mt.distance_frag},shadow:{uniforms:Zn([Fe.lights,Fe.fog,{color:{value:new Dt(0)},opacity:{value:1}}]),vertexShader:mt.shadow_vert,fragmentShader:mt.shadow_frag}};$i.physical={uniforms:Zn([$i.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new lt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new lt},clearcoatNormalScale:{value:new Ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new lt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new lt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new lt},sheen:{value:0},sheenColor:{value:new Dt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new lt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new lt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new lt},transmissionSamplerSize:{value:new Ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new lt},attenuationDistance:{value:0},attenuationColor:{value:new Dt(0)},specularColor:{value:new Dt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new lt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new lt},anisotropyVector:{value:new Ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new lt}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag};const Yc={r:0,b:0,g:0},t1=new hn,ex=new lt;ex.set(-1,0,0,0,1,0,0,0,1);function n1(s,e,i,r,l,c){const u=new Dt(0);let h=l===!0?0:1,p,m,_=null,v=0,g=null;function S(F){let z=F.isScene===!0?F.background:null;if(z&&z.isTexture){const C=F.backgroundBlurriness>0;z=e.get(z,C)}return z}function b(F){let z=!1;const C=S(F);C===null?y(u,h):C&&C.isColor&&(y(C,1),z=!0);const O=s.xr.getEnvironmentBlendMode();O==="additive"?i.buffers.color.setClear(0,0,0,1,c):O==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(s.autoClear||z)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function w(F,z){const C=S(z);C&&(C.isCubeTexture||C.mapping===uu)?(m===void 0&&(m=new Ui(new gl(1,1,1),new Xi({name:"BackgroundCubeMaterial",uniforms:ao($i.backgroundCube.uniforms),vertexShader:$i.backgroundCube.vertexShader,fragmentShader:$i.backgroundCube.fragmentShader,side:si,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(O,U,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(m)),m.material.uniforms.envMap.value=C,m.material.uniforms.backgroundBlurriness.value=z.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=z.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(t1.makeRotationFromEuler(z.backgroundRotation)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&m.material.uniforms.backgroundRotation.value.premultiply(ex),m.material.toneMapped=Rt.getTransfer(C.colorSpace)!==qt,(_!==C||v!==C.version||g!==s.toneMapping)&&(m.material.needsUpdate=!0,_=C,v=C.version,g=s.toneMapping),m.layers.enableAll(),F.unshift(m,m.geometry,m.material,0,0,null)):C&&C.isTexture&&(p===void 0&&(p=new Ui(new js(2,2),new Xi({name:"BackgroundMaterial",uniforms:ao($i.background.uniforms),vertexShader:$i.background.vertexShader,fragmentShader:$i.background.fragmentShader,side:Oa,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(p)),p.material.uniforms.t2D.value=C,p.material.uniforms.backgroundIntensity.value=z.backgroundIntensity,p.material.toneMapped=Rt.getTransfer(C.colorSpace)!==qt,C.matrixAutoUpdate===!0&&C.updateMatrix(),p.material.uniforms.uvTransform.value.copy(C.matrix),(_!==C||v!==C.version||g!==s.toneMapping)&&(p.material.needsUpdate=!0,_=C,v=C.version,g=s.toneMapping),p.layers.enableAll(),F.unshift(p,p.geometry,p.material,0,0,null))}function y(F,z){F.getRGB(Yc,jv(s)),i.buffers.color.setClear(Yc.r,Yc.g,Yc.b,z,c)}function M(){m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return u},setClearColor:function(F,z=1){u.set(F),h=z,y(u,h)},getClearAlpha:function(){return h},setClearAlpha:function(F){h=F,y(u,h)},render:b,addToRenderList:w,dispose:M}}function i1(s,e){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},l=g(null);let c=l,u=!1;function h(V,Q,pe,de,J){let I=!1;const G=v(V,de,pe,Q);c!==G&&(c=G,m(c.object)),I=S(V,de,pe,J),I&&b(V,de,pe,J),J!==null&&e.update(J,s.ELEMENT_ARRAY_BUFFER),(I||u)&&(u=!1,C(V,Q,pe,de),J!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(J).buffer))}function p(){return s.createVertexArray()}function m(V){return s.bindVertexArray(V)}function _(V){return s.deleteVertexArray(V)}function v(V,Q,pe,de){const J=de.wireframe===!0;let I=r[Q.id];I===void 0&&(I={},r[Q.id]=I);const G=V.isInstancedMesh===!0?V.id:0;let ee=I[G];ee===void 0&&(ee={},I[G]=ee);let _e=ee[pe.id];_e===void 0&&(_e={},ee[pe.id]=_e);let be=_e[J];return be===void 0&&(be=g(p()),_e[J]=be),be}function g(V){const Q=[],pe=[],de=[];for(let J=0;J<i;J++)Q[J]=0,pe[J]=0,de[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Q,enabledAttributes:pe,attributeDivisors:de,object:V,attributes:{},index:null}}function S(V,Q,pe,de){const J=c.attributes,I=Q.attributes;let G=0;const ee=pe.getAttributes();for(const _e in ee)if(ee[_e].location>=0){const N=J[_e];let Z=I[_e];if(Z===void 0&&(_e==="instanceMatrix"&&V.instanceMatrix&&(Z=V.instanceMatrix),_e==="instanceColor"&&V.instanceColor&&(Z=V.instanceColor)),N===void 0||N.attribute!==Z||Z&&N.data!==Z.data)return!0;G++}return c.attributesNum!==G||c.index!==de}function b(V,Q,pe,de){const J={},I=Q.attributes;let G=0;const ee=pe.getAttributes();for(const _e in ee)if(ee[_e].location>=0){let N=I[_e];N===void 0&&(_e==="instanceMatrix"&&V.instanceMatrix&&(N=V.instanceMatrix),_e==="instanceColor"&&V.instanceColor&&(N=V.instanceColor));const Z={};Z.attribute=N,N&&N.data&&(Z.data=N.data),J[_e]=Z,G++}c.attributes=J,c.attributesNum=G,c.index=de}function w(){const V=c.newAttributes;for(let Q=0,pe=V.length;Q<pe;Q++)V[Q]=0}function y(V){M(V,0)}function M(V,Q){const pe=c.newAttributes,de=c.enabledAttributes,J=c.attributeDivisors;pe[V]=1,de[V]===0&&(s.enableVertexAttribArray(V),de[V]=1),J[V]!==Q&&(s.vertexAttribDivisor(V,Q),J[V]=Q)}function F(){const V=c.newAttributes,Q=c.enabledAttributes;for(let pe=0,de=Q.length;pe<de;pe++)Q[pe]!==V[pe]&&(s.disableVertexAttribArray(pe),Q[pe]=0)}function z(V,Q,pe,de,J,I,G){G===!0?s.vertexAttribIPointer(V,Q,pe,J,I):s.vertexAttribPointer(V,Q,pe,de,J,I)}function C(V,Q,pe,de){w();const J=de.attributes,I=pe.getAttributes(),G=Q.defaultAttributeValues;for(const ee in I){const _e=I[ee];if(_e.location>=0){let be=J[ee];if(be===void 0&&(ee==="instanceMatrix"&&V.instanceMatrix&&(be=V.instanceMatrix),ee==="instanceColor"&&V.instanceColor&&(be=V.instanceColor)),be!==void 0){const N=be.normalized,Z=be.itemSize,Ee=e.get(be);if(Ee===void 0)continue;const Ce=Ee.buffer,Le=Ee.type,ie=Ee.bytesPerElement,Se=Le===s.INT||Le===s.UNSIGNED_INT||be.gpuType===op;if(be.isInterleavedBufferAttribute){const Me=be.data,ze=Me.stride,nt=be.offset;if(Me.isInstancedInterleavedBuffer){for(let Qe=0;Qe<_e.locationSize;Qe++)M(_e.location+Qe,Me.meshPerAttribute);V.isInstancedMesh!==!0&&de._maxInstanceCount===void 0&&(de._maxInstanceCount=Me.meshPerAttribute*Me.count)}else for(let Qe=0;Qe<_e.locationSize;Qe++)y(_e.location+Qe);s.bindBuffer(s.ARRAY_BUFFER,Ce);for(let Qe=0;Qe<_e.locationSize;Qe++)z(_e.location+Qe,Z/_e.locationSize,Le,N,ze*ie,(nt+Z/_e.locationSize*Qe)*ie,Se)}else{if(be.isInstancedBufferAttribute){for(let Me=0;Me<_e.locationSize;Me++)M(_e.location+Me,be.meshPerAttribute);V.isInstancedMesh!==!0&&de._maxInstanceCount===void 0&&(de._maxInstanceCount=be.meshPerAttribute*be.count)}else for(let Me=0;Me<_e.locationSize;Me++)y(_e.location+Me);s.bindBuffer(s.ARRAY_BUFFER,Ce);for(let Me=0;Me<_e.locationSize;Me++)z(_e.location+Me,Z/_e.locationSize,Le,N,Z*ie,Z/_e.locationSize*Me*ie,Se)}}else if(G!==void 0){const N=G[ee];if(N!==void 0)switch(N.length){case 2:s.vertexAttrib2fv(_e.location,N);break;case 3:s.vertexAttrib3fv(_e.location,N);break;case 4:s.vertexAttrib4fv(_e.location,N);break;default:s.vertexAttrib1fv(_e.location,N)}}}}F()}function O(){L();for(const V in r){const Q=r[V];for(const pe in Q){const de=Q[pe];for(const J in de){const I=de[J];for(const G in I)_(I[G].object),delete I[G];delete de[J]}}delete r[V]}}function U(V){if(r[V.id]===void 0)return;const Q=r[V.id];for(const pe in Q){const de=Q[pe];for(const J in de){const I=de[J];for(const G in I)_(I[G].object),delete I[G];delete de[J]}}delete r[V.id]}function P(V){for(const Q in r){const pe=r[Q];for(const de in pe){const J=pe[de];if(J[V.id]===void 0)continue;const I=J[V.id];for(const G in I)_(I[G].object),delete I[G];delete J[V.id]}}}function T(V){for(const Q in r){const pe=r[Q],de=V.isInstancedMesh===!0?V.id:0,J=pe[de];if(J!==void 0){for(const I in J){const G=J[I];for(const ee in G)_(G[ee].object),delete G[ee];delete J[I]}delete pe[de],Object.keys(pe).length===0&&delete r[Q]}}}function L(){Y(),u=!0,c!==l&&(c=l,m(c.object))}function Y(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:L,resetDefaultState:Y,dispose:O,releaseStatesOfGeometry:U,releaseStatesOfObject:T,releaseStatesOfProgram:P,initAttributes:w,enableAttribute:y,disableUnusedAttributes:F}}function a1(s,e,i){let r;function l(p){r=p}function c(p,m){s.drawArrays(r,p,m),i.update(m,r,1)}function u(p,m,_){_!==0&&(s.drawArraysInstanced(r,p,m,_),i.update(m,r,_))}function h(p,m,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,m,0,_);let g=0;for(let S=0;S<_;S++)g+=m[S];i.update(g,r,1)}this.setMode=l,this.render=c,this.renderInstances=u,this.renderMultiDraw=h}function s1(s,e,i,r){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");l=s.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function u(P){return!(P!==ki&&r.convert(P)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(P){const T=P===Pa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==wi&&r.convert(P)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==ta&&!T)}function p(P){if(P==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=i.precision!==void 0?i.precision:"highp";const _=p(m);_!==m&&(st("WebGLRenderer:",m,"not supported, using",_,"instead."),m=_);const v=i.logarithmicDepthBuffer===!0,g=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control");i.reversedDepthBuffer===!0&&g===!1&&st("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const S=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),b=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=s.getParameter(s.MAX_TEXTURE_SIZE),y=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),M=s.getParameter(s.MAX_VERTEX_ATTRIBS),F=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),z=s.getParameter(s.MAX_VARYING_VECTORS),C=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),O=s.getParameter(s.MAX_SAMPLES),U=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:p,textureFormatReadable:u,textureTypeReadable:h,precision:m,logarithmicDepthBuffer:v,reversedDepthBuffer:g,maxTextures:S,maxVertexTextures:b,maxTextureSize:w,maxCubemapSize:y,maxAttributes:M,maxVertexUniforms:F,maxVaryings:z,maxFragmentUniforms:C,maxSamples:O,samples:U}}function r1(s){const e=this;let i=null,r=0,l=!1,c=!1;const u=new qs,h=new lt,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(v,g){const S=v.length!==0||g||r!==0||l;return l=g,r=v.length,S},this.beginShadows=function(){c=!0,_(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(v,g){i=_(v,g,0)},this.setState=function(v,g,S){const b=v.clippingPlanes,w=v.clipIntersection,y=v.clipShadows,M=s.get(v);if(!l||b===null||b.length===0||c&&!y)c?_(null):m();else{const F=c?0:r,z=F*4;let C=M.clippingState||null;p.value=C,C=_(b,g,z,S);for(let O=0;O!==z;++O)C[O]=i[O];M.clippingState=C,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=F}};function m(){p.value!==i&&(p.value=i,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function _(v,g,S,b){const w=v!==null?v.length:0;let y=null;if(w!==0){if(y=p.value,b!==!0||y===null){const M=S+w*4,F=g.matrixWorldInverse;h.getNormalMatrix(F),(y===null||y.length<M)&&(y=new Float32Array(M));for(let z=0,C=S;z!==w;++z,C+=4)u.copy(v[z]).applyMatrix4(F,h),u.normal.toArray(y,C),y[C+3]=u.constant}p.value=y,p.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,y}}const Ss=4,W_=[.125,.215,.35,.446,.526,.582],Zs=20,o1=256,nl=new Jv,q_=new Dt;let sh=null,rh=0,oh=0,lh=!1;const l1=new $;class Y_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,r=.1,l=100,c={}){const{size:u=256,position:h=l1}=c;sh=this._renderer.getRenderTarget(),rh=this._renderer.getActiveCubeFace(),oh=this._renderer.getActiveMipmapLevel(),lh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(e,r,l,p,h),i>0&&this._blur(p,0,0,i),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=j_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=K_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(sh,rh,oh),this._renderer.xr.enabled=lh,e.scissorTest=!1,Zr(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Qs||e.mapping===no?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),sh=this._renderer.getRenderTarget(),rh=this._renderer.getActiveCubeFace(),oh=this._renderer.getActiveMipmapLevel(),lh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:yn,minFilter:yn,generateMipmaps:!1,type:Pa,format:ki,colorSpace:au,depthBuffer:!1},l=Z_(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Z_(e,i,r);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=c1(c)),this._blurMaterial=f1(c,e,i),this._ggxMaterial=u1(c,e,i)}return l}_compileMaterial(e){const i=new Ui(new Ni,e);this._renderer.compile(i,nl)}_sceneToCubeUV(e,i,r,l,c){const p=new Ci(90,1,i,r),m=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],v=this._renderer,g=v.autoClear,S=v.toneMapping;v.getClearColor(q_),v.toneMapping=ia,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(l),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ui(new gl,new lu({name:"PMREM.Background",side:si,depthWrite:!1,depthTest:!1})));const w=this._backgroundBox,y=w.material;let M=!1;const F=e.background;F?F.isColor&&(y.color.copy(F),e.background=null,M=!0):(y.color.copy(q_),M=!0);for(let z=0;z<6;z++){const C=z%3;C===0?(p.up.set(0,m[z],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x+_[z],c.y,c.z)):C===1?(p.up.set(0,0,m[z]),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y+_[z],c.z)):(p.up.set(0,m[z],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y,c.z+_[z]));const O=this._cubeSize;Zr(l,C*O,z>2?O:0,O,O),v.setRenderTarget(l),M&&v.render(w,p),v.render(e,p)}v.toneMapping=S,v.autoClear=g,e.background=F}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===Qs||e.mapping===no;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=j_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=K_());const c=l?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=c;const h=c.uniforms;h.envMap.value=e;const p=this._cubeSize;Zr(i,0,0,3*p,2*p),r.setRenderTarget(i),r.render(u,nl)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(e,c-1,c);i.autoClear=r}_applyGGXFilter(e,i,r){const l=this._renderer,c=this._pingPongRenderTarget,u=this._ggxMaterial,h=this._lodMeshes[r];h.material=u;const p=u.uniforms,m=r/(this._lodMeshes.length-1),_=i/(this._lodMeshes.length-1),v=Math.sqrt(m*m-_*_),g=0+m*1.25,S=v*g,{_lodMax:b}=this,w=this._sizeLods[r],y=3*w*(r>b-Ss?r-b+Ss:0),M=4*(this._cubeSize-w);p.envMap.value=e.texture,p.roughness.value=S,p.mipInt.value=b-i,Zr(c,y,M,3*w,2*w),l.setRenderTarget(c),l.render(h,nl),p.envMap.value=c.texture,p.roughness.value=0,p.mipInt.value=b-r,Zr(e,y,M,3*w,2*w),l.setRenderTarget(e),l.render(h,nl)}_blur(e,i,r,l,c){const u=this._pingPongRenderTarget;this._halfBlur(e,u,i,r,l,"latitudinal",c),this._halfBlur(u,e,r,r,l,"longitudinal",c)}_halfBlur(e,i,r,l,c,u,h){const p=this._renderer,m=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&Nt("blur direction must be either latitudinal or longitudinal!");const _=3,v=this._lodMeshes[l];v.material=m;const g=m.uniforms,S=this._sizeLods[r]-1,b=isFinite(c)?Math.PI/(2*S):2*Math.PI/(2*Zs-1),w=c/b,y=isFinite(c)?1+Math.floor(_*w):Zs;y>Zs&&st(`sigmaRadians, ${c}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Zs}`);const M=[];let F=0;for(let P=0;P<Zs;++P){const T=P/w,L=Math.exp(-T*T/2);M.push(L),P===0?F+=L:P<y&&(F+=2*L)}for(let P=0;P<M.length;P++)M[P]=M[P]/F;g.envMap.value=e.texture,g.samples.value=y,g.weights.value=M,g.latitudinal.value=u==="latitudinal",h&&(g.poleAxis.value=h);const{_lodMax:z}=this;g.dTheta.value=b,g.mipInt.value=z-r;const C=this._sizeLods[l],O=3*C*(l>z-Ss?l-z+Ss:0),U=4*(this._cubeSize-C);Zr(i,O,U,3*C,2*C),p.setRenderTarget(i),p.render(v,nl)}}function c1(s){const e=[],i=[],r=[];let l=s;const c=s-Ss+1+W_.length;for(let u=0;u<c;u++){const h=Math.pow(2,l);e.push(h);let p=1/h;u>s-Ss?p=W_[u-s+Ss-1]:u===0&&(p=0),i.push(p);const m=1/(h-2),_=-m,v=1+m,g=[_,_,v,_,v,v,_,_,v,v,_,v],S=6,b=6,w=3,y=2,M=1,F=new Float32Array(w*b*S),z=new Float32Array(y*b*S),C=new Float32Array(M*b*S);for(let U=0;U<S;U++){const P=U%3*2/3-1,T=U>2?0:-1,L=[P,T,0,P+2/3,T,0,P+2/3,T+1,0,P,T,0,P+2/3,T+1,0,P,T+1,0];F.set(L,w*b*U),z.set(g,y*b*U);const Y=[U,U,U,U,U,U];C.set(Y,M*b*U)}const O=new Ni;O.setAttribute("position",new sa(F,w)),O.setAttribute("uv",new sa(z,y)),O.setAttribute("faceIndex",new sa(C,M)),r.push(new Ui(O,null)),l>Ss&&l--}return{lodMeshes:r,sizeLods:e,sigmas:i}}function Z_(s,e,i){const r=new aa(s,e,i);return r.texture.mapping=uu,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Zr(s,e,i,r,l){s.viewport.set(e,i,r,l),s.scissor.set(e,i,r,l)}function u1(s,e,i){return new Xi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:o1,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:du(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Na,depthTest:!1,depthWrite:!1})}function f1(s,e,i){const r=new Float32Array(Zs),l=new $(0,1,0);return new Xi({name:"SphericalGaussianBlur",defines:{n:Zs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:du(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Na,depthTest:!1,depthWrite:!1})}function K_(){return new Xi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:du(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Na,depthTest:!1,depthWrite:!1})}function j_(){return new Xi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:du(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Na,depthTest:!1,depthWrite:!1})}function du(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class tx extends aa{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new Yv(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new gl(5,5,5),c=new Xi({name:"CubemapFromEquirect",uniforms:ao(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:si,blending:Na});c.uniforms.tEquirect.value=i;const u=new Ui(l,c),h=i.minFilter;return i.minFilter===xs&&(i.minFilter=yn),new _E(1,10,this).update(e,u),i.minFilter=h,u.geometry.dispose(),u.material.dispose(),this}clear(e,i=!0,r=!0,l=!0){const c=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(i,r,l);e.setRenderTarget(c)}}function d1(s){let e=new WeakMap,i=new WeakMap,r=null;function l(g,S=!1){return g==null?null:S?u(g):c(g)}function c(g){if(g&&g.isTexture){const S=g.mapping;if(S===Ud||S===Nd)if(e.has(g)){const b=e.get(g).texture;return h(b,g.mapping)}else{const b=g.image;if(b&&b.height>0){const w=new tx(b.height);return w.fromEquirectangularTexture(s,g),e.set(g,w),g.addEventListener("dispose",m),h(w.texture,g.mapping)}else return null}}return g}function u(g){if(g&&g.isTexture){const S=g.mapping,b=S===Ud||S===Nd,w=S===Qs||S===no;if(b||w){let y=i.get(g);const M=y!==void 0?y.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==M)return r===null&&(r=new Y_(s)),y=b?r.fromEquirectangular(g,y):r.fromCubemap(g,y),y.texture.pmremVersion=g.pmremVersion,i.set(g,y),y.texture;if(y!==void 0)return y.texture;{const F=g.image;return b&&F&&F.height>0||w&&F&&p(F)?(r===null&&(r=new Y_(s)),y=b?r.fromEquirectangular(g):r.fromCubemap(g),y.texture.pmremVersion=g.pmremVersion,i.set(g,y),g.addEventListener("dispose",_),y.texture):null}}}return g}function h(g,S){return S===Ud?g.mapping=Qs:S===Nd&&(g.mapping=no),g}function p(g){let S=0;const b=6;for(let w=0;w<b;w++)g[w]!==void 0&&S++;return S===b}function m(g){const S=g.target;S.removeEventListener("dispose",m);const b=e.get(S);b!==void 0&&(e.delete(S),b.dispose())}function _(g){const S=g.target;S.removeEventListener("dispose",_);const b=i.get(S);b!==void 0&&(i.delete(S),b.dispose())}function v(){e=new WeakMap,i=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:l,dispose:v}}function h1(s){const e={};function i(r){if(e[r]!==void 0)return e[r];const l=s.getExtension(r);return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&Jr("WebGLRenderer: "+r+" extension not supported."),l}}}function p1(s,e,i,r){const l={},c=new WeakMap;function u(v){const g=v.target;g.index!==null&&e.remove(g.index);for(const b in g.attributes)e.remove(g.attributes[b]);g.removeEventListener("dispose",u),delete l[g.id];const S=c.get(g);S&&(e.remove(S),c.delete(g)),r.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,i.memory.geometries--}function h(v,g){return l[g.id]===!0||(g.addEventListener("dispose",u),l[g.id]=!0,i.memory.geometries++),g}function p(v){const g=v.attributes;for(const S in g)e.update(g[S],s.ARRAY_BUFFER)}function m(v){const g=[],S=v.index,b=v.attributes.position;let w=0;if(b===void 0)return;if(S!==null){const F=S.array;w=S.version;for(let z=0,C=F.length;z<C;z+=3){const O=F[z+0],U=F[z+1],P=F[z+2];g.push(O,U,U,P,P,O)}}else{const F=b.array;w=b.version;for(let z=0,C=F.length/3-1;z<C;z+=3){const O=z+0,U=z+1,P=z+2;g.push(O,U,U,P,P,O)}}const y=new(b.count>=65535?Wv:Xv)(g,1);y.version=w;const M=c.get(v);M&&e.remove(M),c.set(v,y)}function _(v){const g=c.get(v);if(g){const S=v.index;S!==null&&g.version<S.version&&m(v)}else m(v);return c.get(v)}return{get:h,update:p,getWireframeAttribute:_}}function m1(s,e,i){let r;function l(v){r=v}let c,u;function h(v){c=v.type,u=v.bytesPerElement}function p(v,g){s.drawElements(r,g,c,v*u),i.update(g,r,1)}function m(v,g,S){S!==0&&(s.drawElementsInstanced(r,g,c,v*u,S),i.update(g,r,S))}function _(v,g,S){if(S===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,g,0,c,v,0,S);let w=0;for(let y=0;y<S;y++)w+=g[y];i.update(w,r,1)}this.setMode=l,this.setIndex=h,this.render=p,this.renderInstances=m,this.renderMultiDraw=_}function g1(s){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,u,h){switch(i.calls++,u){case s.TRIANGLES:i.triangles+=h*(c/3);break;case s.LINES:i.lines+=h*(c/2);break;case s.LINE_STRIP:i.lines+=h*(c-1);break;case s.LINE_LOOP:i.lines+=h*c;break;case s.POINTS:i.points+=h*c;break;default:Nt("WebGLInfo: Unknown draw mode:",u);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function _1(s,e,i){const r=new WeakMap,l=new cn;function c(u,h,p){const m=u.morphTargetInfluences,_=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,v=_!==void 0?_.length:0;let g=r.get(h);if(g===void 0||g.count!==v){let Y=function(){T.dispose(),r.delete(h),h.removeEventListener("dispose",Y)};var S=Y;g!==void 0&&g.texture.dispose();const b=h.morphAttributes.position!==void 0,w=h.morphAttributes.normal!==void 0,y=h.morphAttributes.color!==void 0,M=h.morphAttributes.position||[],F=h.morphAttributes.normal||[],z=h.morphAttributes.color||[];let C=0;b===!0&&(C=1),w===!0&&(C=2),y===!0&&(C=3);let O=h.attributes.position.count*C,U=1;O>e.maxTextureSize&&(U=Math.ceil(O/e.maxTextureSize),O=e.maxTextureSize);const P=new Float32Array(O*U*4*v),T=new Gv(P,O,U,v);T.type=ta,T.needsUpdate=!0;const L=C*4;for(let V=0;V<v;V++){const Q=M[V],pe=F[V],de=z[V],J=O*U*4*V;for(let I=0;I<Q.count;I++){const G=I*L;b===!0&&(l.fromBufferAttribute(Q,I),P[J+G+0]=l.x,P[J+G+1]=l.y,P[J+G+2]=l.z,P[J+G+3]=0),w===!0&&(l.fromBufferAttribute(pe,I),P[J+G+4]=l.x,P[J+G+5]=l.y,P[J+G+6]=l.z,P[J+G+7]=0),y===!0&&(l.fromBufferAttribute(de,I),P[J+G+8]=l.x,P[J+G+9]=l.y,P[J+G+10]=l.z,P[J+G+11]=de.itemSize===4?l.w:1)}}g={count:v,texture:T,size:new Ft(O,U)},r.set(h,g),h.addEventListener("dispose",Y)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)p.getUniforms().setValue(s,"morphTexture",u.morphTexture,i);else{let b=0;for(let y=0;y<m.length;y++)b+=m[y];const w=h.morphTargetsRelative?1:1-b;p.getUniforms().setValue(s,"morphTargetBaseInfluence",w),p.getUniforms().setValue(s,"morphTargetInfluences",m)}p.getUniforms().setValue(s,"morphTargetsTexture",g.texture,i),p.getUniforms().setValue(s,"morphTargetsTextureSize",g.size)}return{update:c}}function v1(s,e,i,r,l){let c=new WeakMap;function u(m){const _=l.render.frame,v=m.geometry,g=e.get(m,v);if(c.get(g)!==_&&(e.update(g),c.set(g,_)),m.isInstancedMesh&&(m.hasEventListener("dispose",p)===!1&&m.addEventListener("dispose",p),c.get(m)!==_&&(i.update(m.instanceMatrix,s.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,s.ARRAY_BUFFER),c.set(m,_))),m.isSkinnedMesh){const S=m.skeleton;c.get(S)!==_&&(S.update(),c.set(S,_))}return g}function h(){c=new WeakMap}function p(m){const _=m.target;_.removeEventListener("dispose",p),r.releaseStatesOfObject(_),i.remove(_.instanceMatrix),_.instanceColor!==null&&i.remove(_.instanceColor)}return{update:u,dispose:h}}const x1={[Tv]:"LINEAR_TONE_MAPPING",[Av]:"REINHARD_TONE_MAPPING",[Rv]:"CINEON_TONE_MAPPING",[Cv]:"ACES_FILMIC_TONE_MAPPING",[Dv]:"AGX_TONE_MAPPING",[Uv]:"NEUTRAL_TONE_MAPPING",[wv]:"CUSTOM_TONE_MAPPING"};function S1(s,e,i,r,l,c){const u=new aa(e,i,{type:s,depthBuffer:l,stencilBuffer:c,samples:r?4:0,depthTexture:l?new io(e,i):void 0}),h=new aa(e,i,{type:Pa,depthBuffer:!1,stencilBuffer:!1}),p=new Ni;p.setAttribute("position",new Di([-1,3,0,-1,-1,0,3,-1,0],3)),p.setAttribute("uv",new Di([0,2,0,0,2,0],2));const m=new pE({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),_=new Ui(p,m),v=new Jv(-1,1,1,-1,0,1);let g=null,S=null,b=!1,w,y=null,M=[],F=!1;this.setSize=function(z,C){u.setSize(z,C),h.setSize(z,C);for(let O=0;O<M.length;O++){const U=M[O];U.setSize&&U.setSize(z,C)}},this.setEffects=function(z){M=z,F=M.length>0&&M[0].isRenderPass===!0;const C=u.width,O=u.height;for(let U=0;U<M.length;U++){const P=M[U];P.setSize&&P.setSize(C,O)}},this.begin=function(z,C){if(b||z.toneMapping===ia&&M.length===0)return!1;if(y=C,C!==null){const O=C.width,U=C.height;(u.width!==O||u.height!==U)&&this.setSize(O,U)}return F===!1&&z.setRenderTarget(u),w=z.toneMapping,z.toneMapping=ia,!0},this.hasRenderPass=function(){return F},this.end=function(z,C){z.toneMapping=w,b=!0;let O=u,U=h;for(let P=0;P<M.length;P++){const T=M[P];if(T.enabled!==!1&&(T.render(z,U,O,C),T.needsSwap!==!1)){const L=O;O=U,U=L}}if(g!==z.outputColorSpace||S!==z.toneMapping){g=z.outputColorSpace,S=z.toneMapping,m.defines={},Rt.getTransfer(g)===qt&&(m.defines.SRGB_TRANSFER="");const P=x1[S];P&&(m.defines[P]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=O.texture,z.setRenderTarget(y),z.render(_,v),y=null,b=!1},this.isCompositing=function(){return b},this.dispose=function(){u.depthTexture&&u.depthTexture.dispose(),u.dispose(),h.dispose(),p.dispose(),m.dispose()}}const nx=new kn,np=new io(1,1),ix=new Gv,ax=new Vy,sx=new Yv,Q_=[],J_=[],$_=new Float32Array(16),ev=new Float32Array(9),tv=new Float32Array(4);function oo(s,e,i){const r=s[0];if(r<=0||r>0)return s;const l=e*i;let c=Q_[l];if(c===void 0&&(c=new Float32Array(l),Q_[l]=c),e!==0){r.toArray(c,0);for(let u=1,h=0;u!==e;++u)h+=i,s[u].toArray(c,h)}return c}function An(s,e){if(s.length!==e.length)return!1;for(let i=0,r=s.length;i<r;i++)if(s[i]!==e[i])return!1;return!0}function Rn(s,e){for(let i=0,r=e.length;i<r;i++)s[i]=e[i]}function hu(s,e){let i=J_[e];i===void 0&&(i=new Int32Array(e),J_[e]=i);for(let r=0;r!==e;++r)i[r]=s.allocateTextureUnit();return i}function M1(s,e){const i=this.cache;i[0]!==e&&(s.uniform1f(this.addr,e),i[0]=e)}function y1(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(An(i,e))return;s.uniform2fv(this.addr,e),Rn(i,e)}}function E1(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(An(i,e))return;s.uniform3fv(this.addr,e),Rn(i,e)}}function b1(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(An(i,e))return;s.uniform4fv(this.addr,e),Rn(i,e)}}function T1(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(An(i,e))return;s.uniformMatrix2fv(this.addr,!1,e),Rn(i,e)}else{if(An(i,r))return;tv.set(r),s.uniformMatrix2fv(this.addr,!1,tv),Rn(i,r)}}function A1(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(An(i,e))return;s.uniformMatrix3fv(this.addr,!1,e),Rn(i,e)}else{if(An(i,r))return;ev.set(r),s.uniformMatrix3fv(this.addr,!1,ev),Rn(i,r)}}function R1(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(An(i,e))return;s.uniformMatrix4fv(this.addr,!1,e),Rn(i,e)}else{if(An(i,r))return;$_.set(r),s.uniformMatrix4fv(this.addr,!1,$_),Rn(i,r)}}function C1(s,e){const i=this.cache;i[0]!==e&&(s.uniform1i(this.addr,e),i[0]=e)}function w1(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(An(i,e))return;s.uniform2iv(this.addr,e),Rn(i,e)}}function D1(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(An(i,e))return;s.uniform3iv(this.addr,e),Rn(i,e)}}function U1(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(An(i,e))return;s.uniform4iv(this.addr,e),Rn(i,e)}}function N1(s,e){const i=this.cache;i[0]!==e&&(s.uniform1ui(this.addr,e),i[0]=e)}function L1(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(An(i,e))return;s.uniform2uiv(this.addr,e),Rn(i,e)}}function O1(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(An(i,e))return;s.uniform3uiv(this.addr,e),Rn(i,e)}}function P1(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(An(i,e))return;s.uniform4uiv(this.addr,e),Rn(i,e)}}function I1(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l);let c;this.type===s.SAMPLER_2D_SHADOW?(np.compareFunction=i.isReversedDepthBuffer()?pp:hp,c=np):c=nx,i.setTexture2D(e||c,l)}function F1(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||ax,l)}function B1(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||sx,l)}function z1(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||ix,l)}function H1(s){switch(s){case 5126:return M1;case 35664:return y1;case 35665:return E1;case 35666:return b1;case 35674:return T1;case 35675:return A1;case 35676:return R1;case 5124:case 35670:return C1;case 35667:case 35671:return w1;case 35668:case 35672:return D1;case 35669:case 35673:return U1;case 5125:return N1;case 36294:return L1;case 36295:return O1;case 36296:return P1;case 35678:case 36198:case 36298:case 36306:case 35682:return I1;case 35679:case 36299:case 36307:return F1;case 35680:case 36300:case 36308:case 36293:return B1;case 36289:case 36303:case 36311:case 36292:return z1}}function G1(s,e){s.uniform1fv(this.addr,e)}function V1(s,e){const i=oo(e,this.size,2);s.uniform2fv(this.addr,i)}function k1(s,e){const i=oo(e,this.size,3);s.uniform3fv(this.addr,i)}function X1(s,e){const i=oo(e,this.size,4);s.uniform4fv(this.addr,i)}function W1(s,e){const i=oo(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,i)}function q1(s,e){const i=oo(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,i)}function Y1(s,e){const i=oo(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,i)}function Z1(s,e){s.uniform1iv(this.addr,e)}function K1(s,e){s.uniform2iv(this.addr,e)}function j1(s,e){s.uniform3iv(this.addr,e)}function Q1(s,e){s.uniform4iv(this.addr,e)}function J1(s,e){s.uniform1uiv(this.addr,e)}function $1(s,e){s.uniform2uiv(this.addr,e)}function eA(s,e){s.uniform3uiv(this.addr,e)}function tA(s,e){s.uniform4uiv(this.addr,e)}function nA(s,e,i){const r=this.cache,l=e.length,c=hu(i,l);An(r,c)||(s.uniform1iv(this.addr,c),Rn(r,c));let u;this.type===s.SAMPLER_2D_SHADOW?u=np:u=nx;for(let h=0;h!==l;++h)i.setTexture2D(e[h]||u,c[h])}function iA(s,e,i){const r=this.cache,l=e.length,c=hu(i,l);An(r,c)||(s.uniform1iv(this.addr,c),Rn(r,c));for(let u=0;u!==l;++u)i.setTexture3D(e[u]||ax,c[u])}function aA(s,e,i){const r=this.cache,l=e.length,c=hu(i,l);An(r,c)||(s.uniform1iv(this.addr,c),Rn(r,c));for(let u=0;u!==l;++u)i.setTextureCube(e[u]||sx,c[u])}function sA(s,e,i){const r=this.cache,l=e.length,c=hu(i,l);An(r,c)||(s.uniform1iv(this.addr,c),Rn(r,c));for(let u=0;u!==l;++u)i.setTexture2DArray(e[u]||ix,c[u])}function rA(s){switch(s){case 5126:return G1;case 35664:return V1;case 35665:return k1;case 35666:return X1;case 35674:return W1;case 35675:return q1;case 35676:return Y1;case 5124:case 35670:return Z1;case 35667:case 35671:return K1;case 35668:case 35672:return j1;case 35669:case 35673:return Q1;case 5125:return J1;case 36294:return $1;case 36295:return eA;case 36296:return tA;case 35678:case 36198:case 36298:case 36306:case 35682:return nA;case 35679:case 36299:case 36307:return iA;case 35680:case 36300:case 36308:case 36293:return aA;case 36289:case 36303:case 36311:case 36292:return sA}}class oA{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=H1(i.type)}}class lA{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=rA(i.type)}}class cA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let c=0,u=l.length;c!==u;++c){const h=l[c];h.setValue(e,i[h.id],r)}}}const ch=/(\w+)(\])?(\[|\.)?/g;function nv(s,e){s.seq.push(e),s.map[e.id]=e}function uA(s,e,i){const r=s.name,l=r.length;for(ch.lastIndex=0;;){const c=ch.exec(r),u=ch.lastIndex;let h=c[1];const p=c[2]==="]",m=c[3];if(p&&(h=h|0),m===void 0||m==="["&&u+2===l){nv(i,m===void 0?new oA(h,s,e):new lA(h,s,e));break}else{let v=i.map[h];v===void 0&&(v=new cA(h),nv(i,v)),i=v}}}class tu{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let u=0;u<r;++u){const h=e.getActiveUniform(i,u),p=e.getUniformLocation(i,h.name);uA(h,p,this)}const l=[],c=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?l.push(u):c.push(u);l.length>0&&(this.seq=l.concat(c))}setValue(e,i,r,l){const c=this.map[i];c!==void 0&&c.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let c=0,u=i.length;c!==u;++c){const h=i[c],p=r[h.id];p.needsUpdate!==!1&&h.setValue(e,p.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,c=e.length;l!==c;++l){const u=e[l];u.id in i&&r.push(u)}return r}}function iv(s,e,i){const r=s.createShader(e);return s.shaderSource(r,i),s.compileShader(r),r}const fA=37297;let dA=0;function hA(s,e){const i=s.split(`
`),r=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let u=l;u<c;u++){const h=u+1;r.push(`${h===e?">":" "} ${h}: ${i[u]}`)}return r.join(`
`)}const av=new lt;function pA(s){Rt._getMatrix(av,Rt.workingColorSpace,s);const e=`mat3( ${av.elements.map(i=>i.toFixed(4))} )`;switch(Rt.getTransfer(s)){case su:return[e,"LinearTransferOETF"];case qt:return[e,"sRGBTransferOETF"];default:return st("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function sv(s,e,i){const r=s.getShaderParameter(e,s.COMPILE_STATUS),c=(s.getShaderInfoLog(e)||"").trim();if(r&&c==="")return"";const u=/ERROR: 0:(\d+)/.exec(c);if(u){const h=parseInt(u[1]);return i.toUpperCase()+`

`+c+`

`+hA(s.getShaderSource(e),h)}else return c}function mA(s,e){const i=pA(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const gA={[Tv]:"Linear",[Av]:"Reinhard",[Rv]:"Cineon",[Cv]:"ACESFilmic",[Dv]:"AgX",[Uv]:"Neutral",[wv]:"Custom"};function _A(s,e){const i=gA[e];return i===void 0?(st("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Zc=new $;function vA(){Rt.getLuminanceCoefficients(Zc);const s=Zc.x.toFixed(4),e=Zc.y.toFixed(4),i=Zc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function xA(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(rl).join(`
`)}function SA(s){const e=[];for(const i in s){const r=s[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function MA(s,e){const i={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const c=s.getActiveAttrib(e,l),u=c.name;let h=1;c.type===s.FLOAT_MAT2&&(h=2),c.type===s.FLOAT_MAT3&&(h=3),c.type===s.FLOAT_MAT4&&(h=4),i[u]={type:c.type,location:s.getAttribLocation(e,u),locationSize:h}}return i}function rl(s){return s!==""}function rv(s,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ov(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const yA=/^[ \t]*#include +<([\w\d./]+)>/gm;function ip(s){return s.replace(yA,bA)}const EA=new Map;function bA(s,e){let i=mt[e];if(i===void 0){const r=EA.get(e);if(r!==void 0)i=mt[r],st('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return ip(i)}const TA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function lv(s){return s.replace(TA,AA)}function AA(s,e,i,r){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function cv(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const RA={[jc]:"SHADOWMAP_TYPE_PCF",[al]:"SHADOWMAP_TYPE_VSM"};function CA(s){return RA[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const wA={[Qs]:"ENVMAP_TYPE_CUBE",[no]:"ENVMAP_TYPE_CUBE",[uu]:"ENVMAP_TYPE_CUBE_UV"};function DA(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":wA[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const UA={[no]:"ENVMAP_MODE_REFRACTION"};function NA(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":UA[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const LA={[bv]:"ENVMAP_BLENDING_MULTIPLY",[ry]:"ENVMAP_BLENDING_MIX",[oy]:"ENVMAP_BLENDING_ADD"};function OA(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":LA[s.combine]||"ENVMAP_BLENDING_NONE"}function PA(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function IA(s,e,i,r){const l=s.getContext(),c=i.defines;let u=i.vertexShader,h=i.fragmentShader;const p=CA(i),m=DA(i),_=NA(i),v=OA(i),g=PA(i),S=xA(i),b=SA(c),w=l.createProgram();let y,M,F=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(rl).join(`
`),y.length>0&&(y+=`
`),M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(rl).join(`
`),M.length>0&&(M+=`
`)):(y=[cv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(rl).join(`
`),M=[cv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+m:"",i.envMap?"#define "+_:"",i.envMap?"#define "+v:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==ia?"#define TONE_MAPPING":"",i.toneMapping!==ia?mt.tonemapping_pars_fragment:"",i.toneMapping!==ia?_A("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",mt.colorspace_pars_fragment,mA("linearToOutputTexel",i.outputColorSpace),vA(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(rl).join(`
`)),u=ip(u),u=rv(u,i),u=ov(u,i),h=ip(h),h=rv(h,i),h=ov(h,i),u=lv(u),h=lv(h),i.isRawShaderMaterial!==!0&&(F=`#version 300 es
`,y=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,M=["#define varying in",i.glslVersion===S_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===S_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+M);const z=F+y+u,C=F+M+h,O=iv(l,l.VERTEX_SHADER,z),U=iv(l,l.FRAGMENT_SHADER,C);l.attachShader(w,O),l.attachShader(w,U),i.index0AttributeName!==void 0?l.bindAttribLocation(w,0,i.index0AttributeName):i.hasPositionAttribute===!0&&l.bindAttribLocation(w,0,"position"),l.linkProgram(w);function P(V){if(s.debug.checkShaderErrors){const Q=l.getProgramInfoLog(w)||"",pe=l.getShaderInfoLog(O)||"",de=l.getShaderInfoLog(U)||"",J=Q.trim(),I=pe.trim(),G=de.trim();let ee=!0,_e=!0;if(l.getProgramParameter(w,l.LINK_STATUS)===!1)if(ee=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(l,w,O,U);else{const be=sv(l,O,"vertex"),N=sv(l,U,"fragment");Nt("WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(w,l.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+J+`
`+be+`
`+N)}else J!==""?st("WebGLProgram: Program Info Log:",J):(I===""||G==="")&&(_e=!1);_e&&(V.diagnostics={runnable:ee,programLog:J,vertexShader:{log:I,prefix:y},fragmentShader:{log:G,prefix:M}})}l.deleteShader(O),l.deleteShader(U),T=new tu(l,w),L=MA(l,w)}let T;this.getUniforms=function(){return T===void 0&&P(this),T};let L;this.getAttributes=function(){return L===void 0&&P(this),L};let Y=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return Y===!1&&(Y=l.getProgramParameter(w,fA)),Y},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(w),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=dA++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=O,this.fragmentShader=U,this}let FA=0;class BA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,i,r){const l=this._getShaderCacheForMaterial(e);return l.has(i)===!1&&(l.add(i),i.usedTimes++),l.has(r)===!1&&(l.add(r),r.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new zA(e),i.set(e,r)),r}}class zA{constructor(e){this.id=FA++,this.code=e,this.usedTimes=0}}function HA(s){return s===Js||s===nu||s===iu}function GA(s,e,i,r,l,c){const u=new Vv,h=new BA,p=new Set,m=[],_=new Map,v=r.logarithmicDepthBuffer;let g=r.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(T){return p.add(T),T===0?"uv":`uv${T}`}function w(T,L,Y,V,Q,pe){const de=V.fog,J=Q.geometry,I=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?V.environment:null,G=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,ee=e.get(T.envMap||I,G),_e=ee&&ee.mapping===uu?ee.image.height:null,be=S[T.type];T.precision!==null&&(g=r.getMaxPrecision(T.precision),g!==T.precision&&st("WebGLProgram.getParameters:",T.precision,"not supported, using",g,"instead."));const N=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Z=N!==void 0?N.length:0;let Ee=0;J.morphAttributes.position!==void 0&&(Ee=1),J.morphAttributes.normal!==void 0&&(Ee=2),J.morphAttributes.color!==void 0&&(Ee=3);let Ce,Le,ie,Se;if(be){const He=$i[be];Ce=He.vertexShader,Le=He.fragmentShader}else{Ce=T.vertexShader,Le=T.fragmentShader;const He=h.getVertexShaderStage(T),Ht=h.getFragmentShaderStage(T);h.update(T,He,Ht),ie=He.id,Se=Ht.id}const Me=s.getRenderTarget(),ze=s.state.buffers.depth.getReversed(),nt=Q.isInstancedMesh===!0,Qe=Q.isBatchedMesh===!0,Yt=!!T.map,ct=!!T.matcap,_t=!!ee,Ye=!!T.aoMap,Ze=!!T.lightMap,rt=!!T.bumpMap&&T.wireframe===!1,pt=!!T.normalMap,Ct=!!T.displacementMap,wt=!!T.emissiveMap,ut=!!T.metalnessMap,gt=!!T.roughnessMap,X=T.anisotropy>0,St=T.clearcoat>0,vt=T.dispersion>0,D=T.iridescence>0,E=T.sheen>0,j=T.transmission>0,te=X&&!!T.anisotropyMap,ue=St&&!!T.clearcoatMap,Re=St&&!!T.clearcoatNormalMap,De=St&&!!T.clearcoatRoughnessMap,fe=D&&!!T.iridescenceMap,he=D&&!!T.iridescenceThicknessMap,Te=E&&!!T.sheenColorMap,Be=E&&!!T.sheenRoughnessMap,Ue=!!T.specularMap,Ne=!!T.specularColorMap,Je=!!T.specularIntensityMap,Ke=j&&!!T.transmissionMap,at=j&&!!T.thicknessMap,W=!!T.gradientMap,Ae=!!T.alphaMap,me=T.alphaTest>0,we=!!T.alphaHash,Pe=!!T.extensions;let ye=ia;T.toneMapped&&(Me===null||Me.isXRRenderTarget===!0)&&(ye=s.toneMapping);const Xe={shaderID:be,shaderType:T.type,shaderName:T.name,vertexShader:Ce,fragmentShader:Le,defines:T.defines,customVertexShaderID:ie,customFragmentShaderID:Se,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:g,batching:Qe,batchingColor:Qe&&Q._colorsTexture!==null,instancing:nt,instancingColor:nt&&Q.instanceColor!==null,instancingMorph:nt&&Q.morphTexture!==null,outputColorSpace:Me===null?s.outputColorSpace:Me.isXRRenderTarget===!0?Me.texture.colorSpace:Rt.workingColorSpace,alphaToCoverage:!!T.alphaToCoverage,map:Yt,matcap:ct,envMap:_t,envMapMode:_t&&ee.mapping,envMapCubeUVHeight:_e,aoMap:Ye,lightMap:Ze,bumpMap:rt,normalMap:pt,displacementMap:Ct,emissiveMap:wt,normalMapObjectSpace:pt&&T.normalMapType===uy,normalMapTangentSpace:pt&&T.normalMapType===__,packedNormalMap:pt&&T.normalMapType===__&&HA(T.normalMap.format),metalnessMap:ut,roughnessMap:gt,anisotropy:X,anisotropyMap:te,clearcoat:St,clearcoatMap:ue,clearcoatNormalMap:Re,clearcoatRoughnessMap:De,dispersion:vt,iridescence:D,iridescenceMap:fe,iridescenceThicknessMap:he,sheen:E,sheenColorMap:Te,sheenRoughnessMap:Be,specularMap:Ue,specularColorMap:Ne,specularIntensityMap:Je,transmission:j,transmissionMap:Ke,thicknessMap:at,gradientMap:W,opaque:T.transparent===!1&&T.blending===Qr&&T.alphaToCoverage===!1,alphaMap:Ae,alphaTest:me,alphaHash:we,combine:T.combine,mapUv:Yt&&b(T.map.channel),aoMapUv:Ye&&b(T.aoMap.channel),lightMapUv:Ze&&b(T.lightMap.channel),bumpMapUv:rt&&b(T.bumpMap.channel),normalMapUv:pt&&b(T.normalMap.channel),displacementMapUv:Ct&&b(T.displacementMap.channel),emissiveMapUv:wt&&b(T.emissiveMap.channel),metalnessMapUv:ut&&b(T.metalnessMap.channel),roughnessMapUv:gt&&b(T.roughnessMap.channel),anisotropyMapUv:te&&b(T.anisotropyMap.channel),clearcoatMapUv:ue&&b(T.clearcoatMap.channel),clearcoatNormalMapUv:Re&&b(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:De&&b(T.clearcoatRoughnessMap.channel),iridescenceMapUv:fe&&b(T.iridescenceMap.channel),iridescenceThicknessMapUv:he&&b(T.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&b(T.sheenColorMap.channel),sheenRoughnessMapUv:Be&&b(T.sheenRoughnessMap.channel),specularMapUv:Ue&&b(T.specularMap.channel),specularColorMapUv:Ne&&b(T.specularColorMap.channel),specularIntensityMapUv:Je&&b(T.specularIntensityMap.channel),transmissionMapUv:Ke&&b(T.transmissionMap.channel),thicknessMapUv:at&&b(T.thicknessMap.channel),alphaMapUv:Ae&&b(T.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(pt||X),vertexNormals:!!J.attributes.normal,vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:Q.isPoints===!0&&!!J.attributes.uv&&(Yt||Ae),fog:!!de,useFog:T.fog===!0,fogExp2:!!de&&de.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||J.attributes.normal===void 0&&pt===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:ze,skinning:Q.isSkinnedMesh===!0,hasPositionAttribute:J.attributes.position!==void 0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:Z,morphTextureStride:Ee,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numLightProbes:L.numLightProbes,numLightProbeGrids:pe.length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:T.dithering,shadowMapEnabled:s.shadowMap.enabled&&Y.length>0,shadowMapType:s.shadowMap.type,toneMapping:ye,decodeVideoTexture:Yt&&T.map.isVideoTexture===!0&&Rt.getTransfer(T.map.colorSpace)===qt,decodeVideoTextureEmissive:wt&&T.emissiveMap.isVideoTexture===!0&&Rt.getTransfer(T.emissiveMap.colorSpace)===qt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===ea,flipSided:T.side===si,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Pe&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Pe&&T.extensions.multiDraw===!0||Qe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Xe.vertexUv1s=p.has(1),Xe.vertexUv2s=p.has(2),Xe.vertexUv3s=p.has(3),p.clear(),Xe}function y(T){const L=[];if(T.shaderID?L.push(T.shaderID):(L.push(T.customVertexShaderID),L.push(T.customFragmentShaderID)),T.defines!==void 0)for(const Y in T.defines)L.push(Y),L.push(T.defines[Y]);return T.isRawShaderMaterial===!1&&(M(L,T),F(L,T),L.push(s.outputColorSpace)),L.push(T.customProgramCacheKey),L.join()}function M(T,L){T.push(L.precision),T.push(L.outputColorSpace),T.push(L.envMapMode),T.push(L.envMapCubeUVHeight),T.push(L.mapUv),T.push(L.alphaMapUv),T.push(L.lightMapUv),T.push(L.aoMapUv),T.push(L.bumpMapUv),T.push(L.normalMapUv),T.push(L.displacementMapUv),T.push(L.emissiveMapUv),T.push(L.metalnessMapUv),T.push(L.roughnessMapUv),T.push(L.anisotropyMapUv),T.push(L.clearcoatMapUv),T.push(L.clearcoatNormalMapUv),T.push(L.clearcoatRoughnessMapUv),T.push(L.iridescenceMapUv),T.push(L.iridescenceThicknessMapUv),T.push(L.sheenColorMapUv),T.push(L.sheenRoughnessMapUv),T.push(L.specularMapUv),T.push(L.specularColorMapUv),T.push(L.specularIntensityMapUv),T.push(L.transmissionMapUv),T.push(L.thicknessMapUv),T.push(L.combine),T.push(L.fogExp2),T.push(L.sizeAttenuation),T.push(L.morphTargetsCount),T.push(L.morphAttributeCount),T.push(L.numDirLights),T.push(L.numPointLights),T.push(L.numSpotLights),T.push(L.numSpotLightMaps),T.push(L.numHemiLights),T.push(L.numRectAreaLights),T.push(L.numDirLightShadows),T.push(L.numPointLightShadows),T.push(L.numSpotLightShadows),T.push(L.numSpotLightShadowsWithMaps),T.push(L.numLightProbes),T.push(L.shadowMapType),T.push(L.toneMapping),T.push(L.numClippingPlanes),T.push(L.numClipIntersection),T.push(L.depthPacking)}function F(T,L){u.disableAll(),L.instancing&&u.enable(0),L.instancingColor&&u.enable(1),L.instancingMorph&&u.enable(2),L.matcap&&u.enable(3),L.envMap&&u.enable(4),L.normalMapObjectSpace&&u.enable(5),L.normalMapTangentSpace&&u.enable(6),L.clearcoat&&u.enable(7),L.iridescence&&u.enable(8),L.alphaTest&&u.enable(9),L.vertexColors&&u.enable(10),L.vertexAlphas&&u.enable(11),L.vertexUv1s&&u.enable(12),L.vertexUv2s&&u.enable(13),L.vertexUv3s&&u.enable(14),L.vertexTangents&&u.enable(15),L.anisotropy&&u.enable(16),L.alphaHash&&u.enable(17),L.batching&&u.enable(18),L.dispersion&&u.enable(19),L.batchingColor&&u.enable(20),L.gradientMap&&u.enable(21),L.packedNormalMap&&u.enable(22),L.vertexNormals&&u.enable(23),T.push(u.mask),u.disableAll(),L.fog&&u.enable(0),L.useFog&&u.enable(1),L.flatShading&&u.enable(2),L.logarithmicDepthBuffer&&u.enable(3),L.reversedDepthBuffer&&u.enable(4),L.skinning&&u.enable(5),L.morphTargets&&u.enable(6),L.morphNormals&&u.enable(7),L.morphColors&&u.enable(8),L.premultipliedAlpha&&u.enable(9),L.shadowMapEnabled&&u.enable(10),L.doubleSided&&u.enable(11),L.flipSided&&u.enable(12),L.useDepthPacking&&u.enable(13),L.dithering&&u.enable(14),L.transmission&&u.enable(15),L.sheen&&u.enable(16),L.opaque&&u.enable(17),L.pointsUvs&&u.enable(18),L.decodeVideoTexture&&u.enable(19),L.decodeVideoTextureEmissive&&u.enable(20),L.alphaToCoverage&&u.enable(21),L.numLightProbeGrids>0&&u.enable(22),L.hasPositionAttribute&&u.enable(23),T.push(u.mask)}function z(T){const L=S[T.type];let Y;if(L){const V=$i[L];Y=fE.clone(V.uniforms)}else Y=T.uniforms;return Y}function C(T,L){let Y=_.get(L);return Y!==void 0?++Y.usedTimes:(Y=new IA(s,L,T,l),m.push(Y),_.set(L,Y)),Y}function O(T){if(--T.usedTimes===0){const L=m.indexOf(T);m[L]=m[m.length-1],m.pop(),_.delete(T.cacheKey),T.destroy()}}function U(T){h.remove(T)}function P(){h.dispose()}return{getParameters:w,getProgramCacheKey:y,getUniforms:z,acquireProgram:C,releaseProgram:O,releaseShaderCache:U,programs:m,dispose:P}}function VA(){let s=new WeakMap;function e(u){return s.has(u)}function i(u){let h=s.get(u);return h===void 0&&(h={},s.set(u,h)),h}function r(u){s.delete(u)}function l(u,h,p){s.get(u)[h]=p}function c(){s=new WeakMap}return{has:e,get:i,remove:r,update:l,dispose:c}}function kA(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function uv(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function fv(){const s=[];let e=0;const i=[],r=[],l=[];function c(){e=0,i.length=0,r.length=0,l.length=0}function u(g){let S=0;return g.isInstancedMesh&&(S+=2),g.isSkinnedMesh&&(S+=1),S}function h(g,S,b,w,y,M){let F=s[e];return F===void 0?(F={id:g.id,object:g,geometry:S,material:b,materialVariant:u(g),groupOrder:w,renderOrder:g.renderOrder,z:y,group:M},s[e]=F):(F.id=g.id,F.object=g,F.geometry=S,F.material=b,F.materialVariant=u(g),F.groupOrder=w,F.renderOrder=g.renderOrder,F.z=y,F.group=M),e++,F}function p(g,S,b,w,y,M){const F=h(g,S,b,w,y,M);b.transmission>0?r.push(F):b.transparent===!0?l.push(F):i.push(F)}function m(g,S,b,w,y,M){const F=h(g,S,b,w,y,M);b.transmission>0?r.unshift(F):b.transparent===!0?l.unshift(F):i.unshift(F)}function _(g,S,b){i.length>1&&i.sort(g||kA),r.length>1&&r.sort(S||uv),l.length>1&&l.sort(S||uv),b&&(i.reverse(),r.reverse(),l.reverse())}function v(){for(let g=e,S=s.length;g<S;g++){const b=s[g];if(b.id===null)break;b.id=null,b.object=null,b.geometry=null,b.material=null,b.group=null}}return{opaque:i,transmissive:r,transparent:l,init:c,push:p,unshift:m,finish:v,sort:_}}function XA(){let s=new WeakMap;function e(r,l){const c=s.get(r);let u;return c===void 0?(u=new fv,s.set(r,[u])):l>=c.length?(u=new fv,c.push(u)):u=c[l],u}function i(){s=new WeakMap}return{get:e,dispose:i}}function WA(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new $,color:new Dt};break;case"SpotLight":i={position:new $,direction:new $,color:new Dt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new $,color:new Dt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new $,skyColor:new Dt,groundColor:new Dt};break;case"RectAreaLight":i={color:new Dt,position:new $,halfWidth:new $,halfHeight:new $};break}return s[e.id]=i,i}}}function qA(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=i,i}}}let YA=0;function ZA(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function KA(s){const e=new WA,i=qA(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new $);const l=new $,c=new hn,u=new hn;function h(m){let _=0,v=0,g=0;for(let L=0;L<9;L++)r.probe[L].set(0,0,0);let S=0,b=0,w=0,y=0,M=0,F=0,z=0,C=0,O=0,U=0,P=0;m.sort(ZA);for(let L=0,Y=m.length;L<Y;L++){const V=m[L],Q=V.color,pe=V.intensity,de=V.distance;let J=null;if(V.shadow&&V.shadow.map&&(V.shadow.map.texture.format===Js?J=V.shadow.map.texture:J=V.shadow.map.depthTexture||V.shadow.map.texture),V.isAmbientLight)_+=Q.r*pe,v+=Q.g*pe,g+=Q.b*pe;else if(V.isLightProbe){for(let I=0;I<9;I++)r.probe[I].addScaledVector(V.sh.coefficients[I],pe);P++}else if(V.isDirectionalLight){const I=e.get(V);if(I.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const G=V.shadow,ee=i.get(V);ee.shadowIntensity=G.intensity,ee.shadowBias=G.bias,ee.shadowNormalBias=G.normalBias,ee.shadowRadius=G.radius,ee.shadowMapSize=G.mapSize,r.directionalShadow[S]=ee,r.directionalShadowMap[S]=J,r.directionalShadowMatrix[S]=V.shadow.matrix,F++}r.directional[S]=I,S++}else if(V.isSpotLight){const I=e.get(V);I.position.setFromMatrixPosition(V.matrixWorld),I.color.copy(Q).multiplyScalar(pe),I.distance=de,I.coneCos=Math.cos(V.angle),I.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),I.decay=V.decay,r.spot[w]=I;const G=V.shadow;if(V.map&&(r.spotLightMap[O]=V.map,O++,G.updateMatrices(V),V.castShadow&&U++),r.spotLightMatrix[w]=G.matrix,V.castShadow){const ee=i.get(V);ee.shadowIntensity=G.intensity,ee.shadowBias=G.bias,ee.shadowNormalBias=G.normalBias,ee.shadowRadius=G.radius,ee.shadowMapSize=G.mapSize,r.spotShadow[w]=ee,r.spotShadowMap[w]=J,C++}w++}else if(V.isRectAreaLight){const I=e.get(V);I.color.copy(Q).multiplyScalar(pe),I.halfWidth.set(V.width*.5,0,0),I.halfHeight.set(0,V.height*.5,0),r.rectArea[y]=I,y++}else if(V.isPointLight){const I=e.get(V);if(I.color.copy(V.color).multiplyScalar(V.intensity),I.distance=V.distance,I.decay=V.decay,V.castShadow){const G=V.shadow,ee=i.get(V);ee.shadowIntensity=G.intensity,ee.shadowBias=G.bias,ee.shadowNormalBias=G.normalBias,ee.shadowRadius=G.radius,ee.shadowMapSize=G.mapSize,ee.shadowCameraNear=G.camera.near,ee.shadowCameraFar=G.camera.far,r.pointShadow[b]=ee,r.pointShadowMap[b]=J,r.pointShadowMatrix[b]=V.shadow.matrix,z++}r.point[b]=I,b++}else if(V.isHemisphereLight){const I=e.get(V);I.skyColor.copy(V.color).multiplyScalar(pe),I.groundColor.copy(V.groundColor).multiplyScalar(pe),r.hemi[M]=I,M++}}y>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Fe.LTC_FLOAT_1,r.rectAreaLTC2=Fe.LTC_FLOAT_2):(r.rectAreaLTC1=Fe.LTC_HALF_1,r.rectAreaLTC2=Fe.LTC_HALF_2)),r.ambient[0]=_,r.ambient[1]=v,r.ambient[2]=g;const T=r.hash;(T.directionalLength!==S||T.pointLength!==b||T.spotLength!==w||T.rectAreaLength!==y||T.hemiLength!==M||T.numDirectionalShadows!==F||T.numPointShadows!==z||T.numSpotShadows!==C||T.numSpotMaps!==O||T.numLightProbes!==P)&&(r.directional.length=S,r.spot.length=w,r.rectArea.length=y,r.point.length=b,r.hemi.length=M,r.directionalShadow.length=F,r.directionalShadowMap.length=F,r.pointShadow.length=z,r.pointShadowMap.length=z,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=F,r.pointShadowMatrix.length=z,r.spotLightMatrix.length=C+O-U,r.spotLightMap.length=O,r.numSpotLightShadowsWithMaps=U,r.numLightProbes=P,T.directionalLength=S,T.pointLength=b,T.spotLength=w,T.rectAreaLength=y,T.hemiLength=M,T.numDirectionalShadows=F,T.numPointShadows=z,T.numSpotShadows=C,T.numSpotMaps=O,T.numLightProbes=P,r.version=YA++)}function p(m,_){let v=0,g=0,S=0,b=0,w=0;const y=_.matrixWorldInverse;for(let M=0,F=m.length;M<F;M++){const z=m[M];if(z.isDirectionalLight){const C=r.directional[v];C.direction.setFromMatrixPosition(z.matrixWorld),l.setFromMatrixPosition(z.target.matrixWorld),C.direction.sub(l),C.direction.transformDirection(y),v++}else if(z.isSpotLight){const C=r.spot[S];C.position.setFromMatrixPosition(z.matrixWorld),C.position.applyMatrix4(y),C.direction.setFromMatrixPosition(z.matrixWorld),l.setFromMatrixPosition(z.target.matrixWorld),C.direction.sub(l),C.direction.transformDirection(y),S++}else if(z.isRectAreaLight){const C=r.rectArea[b];C.position.setFromMatrixPosition(z.matrixWorld),C.position.applyMatrix4(y),u.identity(),c.copy(z.matrixWorld),c.premultiply(y),u.extractRotation(c),C.halfWidth.set(z.width*.5,0,0),C.halfHeight.set(0,z.height*.5,0),C.halfWidth.applyMatrix4(u),C.halfHeight.applyMatrix4(u),b++}else if(z.isPointLight){const C=r.point[g];C.position.setFromMatrixPosition(z.matrixWorld),C.position.applyMatrix4(y),g++}else if(z.isHemisphereLight){const C=r.hemi[w];C.direction.setFromMatrixPosition(z.matrixWorld),C.direction.transformDirection(y),w++}}}return{setup:h,setupView:p,state:r}}function dv(s){const e=new KA(s),i=[],r=[],l=[];function c(g){v.camera=g,i.length=0,r.length=0,l.length=0}function u(g){i.push(g)}function h(g){r.push(g)}function p(g){l.push(g)}function m(){e.setup(i)}function _(g){e.setupView(i,g)}const v={lightsArray:i,shadowsArray:r,lightProbeGridArray:l,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:v,setupLights:m,setupLightsView:_,pushLight:u,pushShadow:h,pushLightProbeGrid:p}}function jA(s){let e=new WeakMap;function i(l,c=0){const u=e.get(l);let h;return u===void 0?(h=new dv(s),e.set(l,[h])):c>=u.length?(h=new dv(s),u.push(h)):h=u[c],h}function r(){e=new WeakMap}return{get:i,dispose:r}}const QA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,JA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,$A=[new $(1,0,0),new $(-1,0,0),new $(0,1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1)],e2=[new $(0,-1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1),new $(0,-1,0),new $(0,-1,0)],hv=new hn,il=new $,uh=new $;function t2(s,e,i){let r=new qv;const l=new Ft,c=new Ft,u=new cn,h=new mE,p=new gE,m={},_=i.maxTextureSize,v={[Oa]:si,[si]:Oa,[ea]:ea},g=new Xi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ft},radius:{value:4}},vertexShader:QA,fragmentShader:JA}),S=g.clone();S.defines.HORIZONTAL_PASS=1;const b=new Ni;b.setAttribute("position",new sa(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new Ui(b,g),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=jc;let M=this.type;this.render=function(U,P,T){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||U.length===0)return;this.type===GM&&(st("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=jc);const L=s.getRenderTarget(),Y=s.getActiveCubeFace(),V=s.getActiveMipmapLevel(),Q=s.state;Q.setBlending(Na),Q.buffers.depth.getReversed()===!0?Q.buffers.color.setClear(0,0,0,0):Q.buffers.color.setClear(1,1,1,1),Q.buffers.depth.setTest(!0),Q.setScissorTest(!1);const pe=M!==this.type;pe&&P.traverse(function(de){de.material&&(Array.isArray(de.material)?de.material.forEach(J=>J.needsUpdate=!0):de.material.needsUpdate=!0)});for(let de=0,J=U.length;de<J;de++){const I=U[de],G=I.shadow;if(G===void 0){st("WebGLShadowMap:",I,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;l.copy(G.mapSize);const ee=G.getFrameExtents();l.multiply(ee),c.copy(G.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(c.x=Math.floor(_/ee.x),l.x=c.x*ee.x,G.mapSize.x=c.x),l.y>_&&(c.y=Math.floor(_/ee.y),l.y=c.y*ee.y,G.mapSize.y=c.y));const _e=s.state.buffers.depth.getReversed();if(G.camera._reversedDepth=_e,G.map===null||pe===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===al){if(I.isPointLight){st("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new aa(l.x,l.y,{format:Js,type:Pa,minFilter:yn,magFilter:yn,generateMipmaps:!1}),G.map.texture.name=I.name+".shadowMap",G.map.depthTexture=new io(l.x,l.y,ta),G.map.depthTexture.name=I.name+".shadowMapDepth",G.map.depthTexture.format=Ia,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Fn,G.map.depthTexture.magFilter=Fn}else I.isPointLight?(G.map=new tx(l.x),G.map.depthTexture=new oE(l.x,ra)):(G.map=new aa(l.x,l.y),G.map.depthTexture=new io(l.x,l.y,ra)),G.map.depthTexture.name=I.name+".shadowMap",G.map.depthTexture.format=Ia,this.type===jc?(G.map.depthTexture.compareFunction=_e?pp:hp,G.map.depthTexture.minFilter=yn,G.map.depthTexture.magFilter=yn):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Fn,G.map.depthTexture.magFilter=Fn);G.camera.updateProjectionMatrix()}const be=G.map.isWebGLCubeRenderTarget?6:1;for(let N=0;N<be;N++){if(G.map.isWebGLCubeRenderTarget)s.setRenderTarget(G.map,N),s.clear();else{N===0&&(s.setRenderTarget(G.map),s.clear());const Z=G.getViewport(N);u.set(c.x*Z.x,c.y*Z.y,c.x*Z.z,c.y*Z.w),Q.viewport(u)}if(I.isPointLight){const Z=G.camera,Ee=G.matrix,Ce=I.distance||Z.far;Ce!==Z.far&&(Z.far=Ce,Z.updateProjectionMatrix()),il.setFromMatrixPosition(I.matrixWorld),Z.position.copy(il),uh.copy(Z.position),uh.add($A[N]),Z.up.copy(e2[N]),Z.lookAt(uh),Z.updateMatrixWorld(),Ee.makeTranslation(-il.x,-il.y,-il.z),hv.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),G._frustum.setFromProjectionMatrix(hv,Z.coordinateSystem,Z.reversedDepth)}else G.updateMatrices(I);r=G.getFrustum(),C(P,T,G.camera,I,this.type)}G.isPointLightShadow!==!0&&this.type===al&&F(G,T),G.needsUpdate=!1}M=this.type,y.needsUpdate=!1,s.setRenderTarget(L,Y,V)};function F(U,P){const T=e.update(w);g.defines.VSM_SAMPLES!==U.blurSamples&&(g.defines.VSM_SAMPLES=U.blurSamples,S.defines.VSM_SAMPLES=U.blurSamples,g.needsUpdate=!0,S.needsUpdate=!0),U.mapPass===null&&(U.mapPass=new aa(l.x,l.y,{format:Js,type:Pa})),g.uniforms.shadow_pass.value=U.map.depthTexture,g.uniforms.resolution.value=U.mapSize,g.uniforms.radius.value=U.radius,s.setRenderTarget(U.mapPass),s.clear(),s.renderBufferDirect(P,null,T,g,w,null),S.uniforms.shadow_pass.value=U.mapPass.texture,S.uniforms.resolution.value=U.mapSize,S.uniforms.radius.value=U.radius,s.setRenderTarget(U.map),s.clear(),s.renderBufferDirect(P,null,T,S,w,null)}function z(U,P,T,L){let Y=null;const V=T.isPointLight===!0?U.customDistanceMaterial:U.customDepthMaterial;if(V!==void 0)Y=V;else if(Y=T.isPointLight===!0?p:h,s.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const Q=Y.uuid,pe=P.uuid;let de=m[Q];de===void 0&&(de={},m[Q]=de);let J=de[pe];J===void 0&&(J=Y.clone(),de[pe]=J,P.addEventListener("dispose",O)),Y=J}if(Y.visible=P.visible,Y.wireframe=P.wireframe,L===al?Y.side=P.shadowSide!==null?P.shadowSide:P.side:Y.side=P.shadowSide!==null?P.shadowSide:v[P.side],Y.alphaMap=P.alphaMap,Y.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,Y.map=P.map,Y.clipShadows=P.clipShadows,Y.clippingPlanes=P.clippingPlanes,Y.clipIntersection=P.clipIntersection,Y.displacementMap=P.displacementMap,Y.displacementScale=P.displacementScale,Y.displacementBias=P.displacementBias,Y.wireframeLinewidth=P.wireframeLinewidth,Y.linewidth=P.linewidth,T.isPointLight===!0&&Y.isMeshDistanceMaterial===!0){const Q=s.properties.get(Y);Q.light=T}return Y}function C(U,P,T,L,Y){if(U.visible===!1)return;if(U.layers.test(P.layers)&&(U.isMesh||U.isLine||U.isPoints)&&(U.castShadow||U.receiveShadow&&Y===al)&&(!U.frustumCulled||r.intersectsObject(U))){U.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,U.matrixWorld);const pe=e.update(U),de=U.material;if(Array.isArray(de)){const J=pe.groups;for(let I=0,G=J.length;I<G;I++){const ee=J[I],_e=de[ee.materialIndex];if(_e&&_e.visible){const be=z(U,_e,L,Y);U.onBeforeShadow(s,U,P,T,pe,be,ee),s.renderBufferDirect(T,null,pe,be,U,ee),U.onAfterShadow(s,U,P,T,pe,be,ee)}}}else if(de.visible){const J=z(U,de,L,Y);U.onBeforeShadow(s,U,P,T,pe,J,null),s.renderBufferDirect(T,null,pe,J,U,null),U.onAfterShadow(s,U,P,T,pe,J,null)}}const Q=U.children;for(let pe=0,de=Q.length;pe<de;pe++)C(Q[pe],P,T,L,Y)}function O(U){U.target.removeEventListener("dispose",O);for(const T in m){const L=m[T],Y=U.target.uuid;Y in L&&(L[Y].dispose(),delete L[Y])}}}function n2(s,e){function i(){let W=!1;const Ae=new cn;let me=null;const we=new cn(0,0,0,0);return{setMask:function(Pe){me!==Pe&&!W&&(s.colorMask(Pe,Pe,Pe,Pe),me=Pe)},setLocked:function(Pe){W=Pe},setClear:function(Pe,ye,Xe,He,Ht){Ht===!0&&(Pe*=He,ye*=He,Xe*=He),Ae.set(Pe,ye,Xe,He),we.equals(Ae)===!1&&(s.clearColor(Pe,ye,Xe,He),we.copy(Ae))},reset:function(){W=!1,me=null,we.set(-1,0,0,0)}}}function r(){let W=!1,Ae=!1,me=null,we=null,Pe=null;return{setReversed:function(ye){if(Ae!==ye){const Xe=e.get("EXT_clip_control");ye?Xe.clipControlEXT(Xe.LOWER_LEFT_EXT,Xe.ZERO_TO_ONE_EXT):Xe.clipControlEXT(Xe.LOWER_LEFT_EXT,Xe.NEGATIVE_ONE_TO_ONE_EXT),Ae=ye;const He=Pe;Pe=null,this.setClear(He)}},getReversed:function(){return Ae},setTest:function(ye){ye?Me(s.DEPTH_TEST):ze(s.DEPTH_TEST)},setMask:function(ye){me!==ye&&!W&&(s.depthMask(ye),me=ye)},setFunc:function(ye){if(Ae&&(ye=Sy[ye]),we!==ye){switch(ye){case _h:s.depthFunc(s.NEVER);break;case vh:s.depthFunc(s.ALWAYS);break;case xh:s.depthFunc(s.LESS);break;case to:s.depthFunc(s.LEQUAL);break;case Sh:s.depthFunc(s.EQUAL);break;case Mh:s.depthFunc(s.GEQUAL);break;case yh:s.depthFunc(s.GREATER);break;case Eh:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}we=ye}},setLocked:function(ye){W=ye},setClear:function(ye){Pe!==ye&&(Pe=ye,Ae&&(ye=1-ye),s.clearDepth(ye))},reset:function(){W=!1,me=null,we=null,Pe=null,Ae=!1}}}function l(){let W=!1,Ae=null,me=null,we=null,Pe=null,ye=null,Xe=null,He=null,Ht=null;return{setTest:function(Ut){W||(Ut?Me(s.STENCIL_TEST):ze(s.STENCIL_TEST))},setMask:function(Ut){Ae!==Ut&&!W&&(s.stencilMask(Ut),Ae=Ut)},setFunc:function(Ut,Wn,Bn){(me!==Ut||we!==Wn||Pe!==Bn)&&(s.stencilFunc(Ut,Wn,Bn),me=Ut,we=Wn,Pe=Bn)},setOp:function(Ut,Wn,Bn){(ye!==Ut||Xe!==Wn||He!==Bn)&&(s.stencilOp(Ut,Wn,Bn),ye=Ut,Xe=Wn,He=Bn)},setLocked:function(Ut){W=Ut},setClear:function(Ut){Ht!==Ut&&(s.clearStencil(Ut),Ht=Ut)},reset:function(){W=!1,Ae=null,me=null,we=null,Pe=null,ye=null,Xe=null,He=null,Ht=null}}}const c=new i,u=new r,h=new l,p=new WeakMap,m=new WeakMap;let _={},v={},g={},S=new WeakMap,b=[],w=null,y=!1,M=null,F=null,z=null,C=null,O=null,U=null,P=null,T=new Dt(0,0,0),L=0,Y=!1,V=null,Q=null,pe=null,de=null,J=null;const I=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,ee=0;const _e=s.getParameter(s.VERSION);_e.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(_e)[1]),G=ee>=1):_e.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(_e)[1]),G=ee>=2);let be=null,N={};const Z=s.getParameter(s.SCISSOR_BOX),Ee=s.getParameter(s.VIEWPORT),Ce=new cn().fromArray(Z),Le=new cn().fromArray(Ee);function ie(W,Ae,me,we){const Pe=new Uint8Array(4),ye=s.createTexture();s.bindTexture(W,ye),s.texParameteri(W,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(W,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Xe=0;Xe<me;Xe++)W===s.TEXTURE_3D||W===s.TEXTURE_2D_ARRAY?s.texImage3D(Ae,0,s.RGBA,1,1,we,0,s.RGBA,s.UNSIGNED_BYTE,Pe):s.texImage2D(Ae+Xe,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Pe);return ye}const Se={};Se[s.TEXTURE_2D]=ie(s.TEXTURE_2D,s.TEXTURE_2D,1),Se[s.TEXTURE_CUBE_MAP]=ie(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Se[s.TEXTURE_2D_ARRAY]=ie(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Se[s.TEXTURE_3D]=ie(s.TEXTURE_3D,s.TEXTURE_3D,1,1),c.setClear(0,0,0,1),u.setClear(1),h.setClear(0),Me(s.DEPTH_TEST),u.setFunc(to),rt(!1),pt(p_),Me(s.CULL_FACE),Ye(Na);function Me(W){_[W]!==!0&&(s.enable(W),_[W]=!0)}function ze(W){_[W]!==!1&&(s.disable(W),_[W]=!1)}function nt(W,Ae){return g[W]!==Ae?(s.bindFramebuffer(W,Ae),g[W]=Ae,W===s.DRAW_FRAMEBUFFER&&(g[s.FRAMEBUFFER]=Ae),W===s.FRAMEBUFFER&&(g[s.DRAW_FRAMEBUFFER]=Ae),!0):!1}function Qe(W,Ae){let me=b,we=!1;if(W){me=S.get(Ae),me===void 0&&(me=[],S.set(Ae,me));const Pe=W.textures;if(me.length!==Pe.length||me[0]!==s.COLOR_ATTACHMENT0){for(let ye=0,Xe=Pe.length;ye<Xe;ye++)me[ye]=s.COLOR_ATTACHMENT0+ye;me.length=Pe.length,we=!0}}else me[0]!==s.BACK&&(me[0]=s.BACK,we=!0);we&&s.drawBuffers(me)}function Yt(W){return w!==W?(s.useProgram(W),w=W,!0):!1}const ct={[Ys]:s.FUNC_ADD,[kM]:s.FUNC_SUBTRACT,[XM]:s.FUNC_REVERSE_SUBTRACT};ct[WM]=s.MIN,ct[qM]=s.MAX;const _t={[YM]:s.ZERO,[ZM]:s.ONE,[KM]:s.SRC_COLOR,[mh]:s.SRC_ALPHA,[ty]:s.SRC_ALPHA_SATURATE,[$M]:s.DST_COLOR,[QM]:s.DST_ALPHA,[jM]:s.ONE_MINUS_SRC_COLOR,[gh]:s.ONE_MINUS_SRC_ALPHA,[ey]:s.ONE_MINUS_DST_COLOR,[JM]:s.ONE_MINUS_DST_ALPHA,[ny]:s.CONSTANT_COLOR,[iy]:s.ONE_MINUS_CONSTANT_COLOR,[ay]:s.CONSTANT_ALPHA,[sy]:s.ONE_MINUS_CONSTANT_ALPHA};function Ye(W,Ae,me,we,Pe,ye,Xe,He,Ht,Ut){if(W===Na){y===!0&&(ze(s.BLEND),y=!1);return}if(y===!1&&(Me(s.BLEND),y=!0),W!==VM){if(W!==M||Ut!==Y){if((F!==Ys||O!==Ys)&&(s.blendEquation(s.FUNC_ADD),F=Ys,O=Ys),Ut)switch(W){case Qr:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ph:s.blendFunc(s.ONE,s.ONE);break;case m_:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case g_:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Nt("WebGLState: Invalid blending: ",W);break}else switch(W){case Qr:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ph:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case m_:Nt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case g_:Nt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Nt("WebGLState: Invalid blending: ",W);break}z=null,C=null,U=null,P=null,T.set(0,0,0),L=0,M=W,Y=Ut}return}Pe=Pe||Ae,ye=ye||me,Xe=Xe||we,(Ae!==F||Pe!==O)&&(s.blendEquationSeparate(ct[Ae],ct[Pe]),F=Ae,O=Pe),(me!==z||we!==C||ye!==U||Xe!==P)&&(s.blendFuncSeparate(_t[me],_t[we],_t[ye],_t[Xe]),z=me,C=we,U=ye,P=Xe),(He.equals(T)===!1||Ht!==L)&&(s.blendColor(He.r,He.g,He.b,Ht),T.copy(He),L=Ht),M=W,Y=!1}function Ze(W,Ae){W.side===ea?ze(s.CULL_FACE):Me(s.CULL_FACE);let me=W.side===si;Ae&&(me=!me),rt(me),W.blending===Qr&&W.transparent===!1?Ye(Na):Ye(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),u.setFunc(W.depthFunc),u.setTest(W.depthTest),u.setMask(W.depthWrite),c.setMask(W.colorWrite);const we=W.stencilWrite;h.setTest(we),we&&(h.setMask(W.stencilWriteMask),h.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),h.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),wt(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?Me(s.SAMPLE_ALPHA_TO_COVERAGE):ze(s.SAMPLE_ALPHA_TO_COVERAGE)}function rt(W){V!==W&&(W?s.frontFace(s.CW):s.frontFace(s.CCW),V=W)}function pt(W){W!==zM?(Me(s.CULL_FACE),W!==Q&&(W===p_?s.cullFace(s.BACK):W===HM?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ze(s.CULL_FACE),Q=W}function Ct(W){W!==pe&&(G&&s.lineWidth(W),pe=W)}function wt(W,Ae,me){W?(Me(s.POLYGON_OFFSET_FILL),(de!==Ae||J!==me)&&(de=Ae,J=me,u.getReversed()&&(Ae=-Ae),s.polygonOffset(Ae,me))):ze(s.POLYGON_OFFSET_FILL)}function ut(W){W?Me(s.SCISSOR_TEST):ze(s.SCISSOR_TEST)}function gt(W){W===void 0&&(W=s.TEXTURE0+I-1),be!==W&&(s.activeTexture(W),be=W)}function X(W,Ae,me){me===void 0&&(be===null?me=s.TEXTURE0+I-1:me=be);let we=N[me];we===void 0&&(we={type:void 0,texture:void 0},N[me]=we),(we.type!==W||we.texture!==Ae)&&(be!==me&&(s.activeTexture(me),be=me),s.bindTexture(W,Ae||Se[W]),we.type=W,we.texture=Ae)}function St(){const W=N[be];W!==void 0&&W.type!==void 0&&(s.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function vt(){try{s.compressedTexImage2D(...arguments)}catch(W){Nt("WebGLState:",W)}}function D(){try{s.compressedTexImage3D(...arguments)}catch(W){Nt("WebGLState:",W)}}function E(){try{s.texSubImage2D(...arguments)}catch(W){Nt("WebGLState:",W)}}function j(){try{s.texSubImage3D(...arguments)}catch(W){Nt("WebGLState:",W)}}function te(){try{s.compressedTexSubImage2D(...arguments)}catch(W){Nt("WebGLState:",W)}}function ue(){try{s.compressedTexSubImage3D(...arguments)}catch(W){Nt("WebGLState:",W)}}function Re(){try{s.texStorage2D(...arguments)}catch(W){Nt("WebGLState:",W)}}function De(){try{s.texStorage3D(...arguments)}catch(W){Nt("WebGLState:",W)}}function fe(){try{s.texImage2D(...arguments)}catch(W){Nt("WebGLState:",W)}}function he(){try{s.texImage3D(...arguments)}catch(W){Nt("WebGLState:",W)}}function Te(W){return v[W]!==void 0?v[W]:s.getParameter(W)}function Be(W,Ae){v[W]!==Ae&&(s.pixelStorei(W,Ae),v[W]=Ae)}function Ue(W){Ce.equals(W)===!1&&(s.scissor(W.x,W.y,W.z,W.w),Ce.copy(W))}function Ne(W){Le.equals(W)===!1&&(s.viewport(W.x,W.y,W.z,W.w),Le.copy(W))}function Je(W,Ae){let me=m.get(Ae);me===void 0&&(me=new WeakMap,m.set(Ae,me));let we=me.get(W);we===void 0&&(we=s.getUniformBlockIndex(Ae,W.name),me.set(W,we))}function Ke(W,Ae){const we=m.get(Ae).get(W);p.get(Ae)!==we&&(s.uniformBlockBinding(Ae,we,W.__bindingPointIndex),p.set(Ae,we))}function at(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),u.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),_={},v={},be=null,N={},g={},S=new WeakMap,b=[],w=null,y=!1,M=null,F=null,z=null,C=null,O=null,U=null,P=null,T=new Dt(0,0,0),L=0,Y=!1,V=null,Q=null,pe=null,de=null,J=null,Ce.set(0,0,s.canvas.width,s.canvas.height),Le.set(0,0,s.canvas.width,s.canvas.height),c.reset(),u.reset(),h.reset()}return{buffers:{color:c,depth:u,stencil:h},enable:Me,disable:ze,bindFramebuffer:nt,drawBuffers:Qe,useProgram:Yt,setBlending:Ye,setMaterial:Ze,setFlipSided:rt,setCullFace:pt,setLineWidth:Ct,setPolygonOffset:wt,setScissorTest:ut,activeTexture:gt,bindTexture:X,unbindTexture:St,compressedTexImage2D:vt,compressedTexImage3D:D,texImage2D:fe,texImage3D:he,pixelStorei:Be,getParameter:Te,updateUBOMapping:Je,uniformBlockBinding:Ke,texStorage2D:Re,texStorage3D:De,texSubImage2D:E,texSubImage3D:j,compressedTexSubImage2D:te,compressedTexSubImage3D:ue,scissor:Ue,viewport:Ne,reset:at}}function i2(s,e,i,r,l,c,u){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new Ft,_=new WeakMap,v=new Set;let g;const S=new WeakMap;let b=!1;try{b=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(D,E){return b?new OffscreenCanvas(D,E):ou("canvas")}function y(D,E,j){let te=1;const ue=vt(D);if((ue.width>j||ue.height>j)&&(te=j/Math.max(ue.width,ue.height)),te<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const Re=Math.floor(te*ue.width),De=Math.floor(te*ue.height);g===void 0&&(g=w(Re,De));const fe=E?w(Re,De):g;return fe.width=Re,fe.height=De,fe.getContext("2d").drawImage(D,0,0,Re,De),st("WebGLRenderer: Texture has been resized from ("+ue.width+"x"+ue.height+") to ("+Re+"x"+De+")."),fe}else return"data"in D&&st("WebGLRenderer: Image in DataTexture is too big ("+ue.width+"x"+ue.height+")."),D;return D}function M(D){return D.generateMipmaps}function F(D){s.generateMipmap(D)}function z(D){return D.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?s.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function C(D,E,j,te,ue,Re=!1){if(D!==null){if(s[D]!==void 0)return s[D];st("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let De;te&&(De=e.get("EXT_texture_norm16"),De||st("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let fe=E;if(E===s.RED&&(j===s.FLOAT&&(fe=s.R32F),j===s.HALF_FLOAT&&(fe=s.R16F),j===s.UNSIGNED_BYTE&&(fe=s.R8),j===s.UNSIGNED_SHORT&&De&&(fe=De.R16_EXT),j===s.SHORT&&De&&(fe=De.R16_SNORM_EXT)),E===s.RED_INTEGER&&(j===s.UNSIGNED_BYTE&&(fe=s.R8UI),j===s.UNSIGNED_SHORT&&(fe=s.R16UI),j===s.UNSIGNED_INT&&(fe=s.R32UI),j===s.BYTE&&(fe=s.R8I),j===s.SHORT&&(fe=s.R16I),j===s.INT&&(fe=s.R32I)),E===s.RG&&(j===s.FLOAT&&(fe=s.RG32F),j===s.HALF_FLOAT&&(fe=s.RG16F),j===s.UNSIGNED_BYTE&&(fe=s.RG8),j===s.UNSIGNED_SHORT&&De&&(fe=De.RG16_EXT),j===s.SHORT&&De&&(fe=De.RG16_SNORM_EXT)),E===s.RG_INTEGER&&(j===s.UNSIGNED_BYTE&&(fe=s.RG8UI),j===s.UNSIGNED_SHORT&&(fe=s.RG16UI),j===s.UNSIGNED_INT&&(fe=s.RG32UI),j===s.BYTE&&(fe=s.RG8I),j===s.SHORT&&(fe=s.RG16I),j===s.INT&&(fe=s.RG32I)),E===s.RGB_INTEGER&&(j===s.UNSIGNED_BYTE&&(fe=s.RGB8UI),j===s.UNSIGNED_SHORT&&(fe=s.RGB16UI),j===s.UNSIGNED_INT&&(fe=s.RGB32UI),j===s.BYTE&&(fe=s.RGB8I),j===s.SHORT&&(fe=s.RGB16I),j===s.INT&&(fe=s.RGB32I)),E===s.RGBA_INTEGER&&(j===s.UNSIGNED_BYTE&&(fe=s.RGBA8UI),j===s.UNSIGNED_SHORT&&(fe=s.RGBA16UI),j===s.UNSIGNED_INT&&(fe=s.RGBA32UI),j===s.BYTE&&(fe=s.RGBA8I),j===s.SHORT&&(fe=s.RGBA16I),j===s.INT&&(fe=s.RGBA32I)),E===s.RGB&&(j===s.UNSIGNED_SHORT&&De&&(fe=De.RGB16_EXT),j===s.SHORT&&De&&(fe=De.RGB16_SNORM_EXT),j===s.UNSIGNED_INT_5_9_9_9_REV&&(fe=s.RGB9_E5),j===s.UNSIGNED_INT_10F_11F_11F_REV&&(fe=s.R11F_G11F_B10F)),E===s.RGBA){const he=Re?su:Rt.getTransfer(ue);j===s.FLOAT&&(fe=s.RGBA32F),j===s.HALF_FLOAT&&(fe=s.RGBA16F),j===s.UNSIGNED_BYTE&&(fe=he===qt?s.SRGB8_ALPHA8:s.RGBA8),j===s.UNSIGNED_SHORT&&De&&(fe=De.RGBA16_EXT),j===s.SHORT&&De&&(fe=De.RGBA16_SNORM_EXT),j===s.UNSIGNED_SHORT_4_4_4_4&&(fe=s.RGBA4),j===s.UNSIGNED_SHORT_5_5_5_1&&(fe=s.RGB5_A1)}return(fe===s.R16F||fe===s.R32F||fe===s.RG16F||fe===s.RG32F||fe===s.RGBA16F||fe===s.RGBA32F)&&e.get("EXT_color_buffer_float"),fe}function O(D,E){let j;return D?E===null||E===ra||E===dl?j=s.DEPTH24_STENCIL8:E===ta?j=s.DEPTH32F_STENCIL8:E===fl&&(j=s.DEPTH24_STENCIL8,st("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===ra||E===dl?j=s.DEPTH_COMPONENT24:E===ta?j=s.DEPTH_COMPONENT32F:E===fl&&(j=s.DEPTH_COMPONENT16),j}function U(D,E){return M(D)===!0||D.isFramebufferTexture&&D.minFilter!==Fn&&D.minFilter!==yn?Math.log2(Math.max(E.width,E.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?E.mipmaps.length:1}function P(D){const E=D.target;E.removeEventListener("dispose",P),L(E),E.isVideoTexture&&_.delete(E),E.isHTMLTexture&&v.delete(E)}function T(D){const E=D.target;E.removeEventListener("dispose",T),V(E)}function L(D){const E=r.get(D);if(E.__webglInit===void 0)return;const j=D.source,te=S.get(j);if(te){const ue=te[E.__cacheKey];ue.usedTimes--,ue.usedTimes===0&&Y(D),Object.keys(te).length===0&&S.delete(j)}r.remove(D)}function Y(D){const E=r.get(D);s.deleteTexture(E.__webglTexture);const j=D.source,te=S.get(j);delete te[E.__cacheKey],u.memory.textures--}function V(D){const E=r.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),r.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(E.__webglFramebuffer[te]))for(let ue=0;ue<E.__webglFramebuffer[te].length;ue++)s.deleteFramebuffer(E.__webglFramebuffer[te][ue]);else s.deleteFramebuffer(E.__webglFramebuffer[te]);E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer[te])}else{if(Array.isArray(E.__webglFramebuffer))for(let te=0;te<E.__webglFramebuffer.length;te++)s.deleteFramebuffer(E.__webglFramebuffer[te]);else s.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&s.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let te=0;te<E.__webglColorRenderbuffer.length;te++)E.__webglColorRenderbuffer[te]&&s.deleteRenderbuffer(E.__webglColorRenderbuffer[te]);E.__webglDepthRenderbuffer&&s.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const j=D.textures;for(let te=0,ue=j.length;te<ue;te++){const Re=r.get(j[te]);Re.__webglTexture&&(s.deleteTexture(Re.__webglTexture),u.memory.textures--),r.remove(j[te])}r.remove(D)}let Q=0;function pe(){Q=0}function de(){return Q}function J(D){Q=D}function I(){const D=Q;return D>=l.maxTextures&&st("WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+l.maxTextures),Q+=1,D}function G(D){const E=[];return E.push(D.wrapS),E.push(D.wrapT),E.push(D.wrapR||0),E.push(D.magFilter),E.push(D.minFilter),E.push(D.anisotropy),E.push(D.internalFormat),E.push(D.format),E.push(D.type),E.push(D.generateMipmaps),E.push(D.premultiplyAlpha),E.push(D.flipY),E.push(D.unpackAlignment),E.push(D.colorSpace),E.join()}function ee(D,E){const j=r.get(D);if(D.isVideoTexture&&X(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&j.__version!==D.version){const te=D.image;if(te===null)st("WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)st("WebGLRenderer: Texture marked for update but image is incomplete");else{ze(j,D,E);return}}else D.isExternalTexture&&(j.__webglTexture=D.sourceTexture?D.sourceTexture:null);i.bindTexture(s.TEXTURE_2D,j.__webglTexture,s.TEXTURE0+E)}function _e(D,E){const j=r.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&j.__version!==D.version){ze(j,D,E);return}else D.isExternalTexture&&(j.__webglTexture=D.sourceTexture?D.sourceTexture:null);i.bindTexture(s.TEXTURE_2D_ARRAY,j.__webglTexture,s.TEXTURE0+E)}function be(D,E){const j=r.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&j.__version!==D.version){ze(j,D,E);return}i.bindTexture(s.TEXTURE_3D,j.__webglTexture,s.TEXTURE0+E)}function N(D,E){const j=r.get(D);if(D.isCubeDepthTexture!==!0&&D.version>0&&j.__version!==D.version){nt(j,D,E);return}i.bindTexture(s.TEXTURE_CUBE_MAP,j.__webglTexture,s.TEXTURE0+E)}const Z={[bh]:s.REPEAT,[Vi]:s.CLAMP_TO_EDGE,[Th]:s.MIRRORED_REPEAT},Ee={[Fn]:s.NEAREST,[ly]:s.NEAREST_MIPMAP_NEAREST,[Rc]:s.NEAREST_MIPMAP_LINEAR,[yn]:s.LINEAR,[Ld]:s.LINEAR_MIPMAP_NEAREST,[xs]:s.LINEAR_MIPMAP_LINEAR},Ce={[fy]:s.NEVER,[gy]:s.ALWAYS,[dy]:s.LESS,[hp]:s.LEQUAL,[hy]:s.EQUAL,[pp]:s.GEQUAL,[py]:s.GREATER,[my]:s.NOTEQUAL};function Le(D,E){if(E.type===ta&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===yn||E.magFilter===Ld||E.magFilter===Rc||E.magFilter===xs||E.minFilter===yn||E.minFilter===Ld||E.minFilter===Rc||E.minFilter===xs)&&st("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(D,s.TEXTURE_WRAP_S,Z[E.wrapS]),s.texParameteri(D,s.TEXTURE_WRAP_T,Z[E.wrapT]),(D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY)&&s.texParameteri(D,s.TEXTURE_WRAP_R,Z[E.wrapR]),s.texParameteri(D,s.TEXTURE_MAG_FILTER,Ee[E.magFilter]),s.texParameteri(D,s.TEXTURE_MIN_FILTER,Ee[E.minFilter]),E.compareFunction&&(s.texParameteri(D,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(D,s.TEXTURE_COMPARE_FUNC,Ce[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Fn||E.minFilter!==Rc&&E.minFilter!==xs||E.type===ta&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const j=e.get("EXT_texture_filter_anisotropic");s.texParameterf(D,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function ie(D,E){let j=!1;D.__webglInit===void 0&&(D.__webglInit=!0,E.addEventListener("dispose",P));const te=E.source;let ue=S.get(te);ue===void 0&&(ue={},S.set(te,ue));const Re=G(E);if(Re!==D.__cacheKey){ue[Re]===void 0&&(ue[Re]={texture:s.createTexture(),usedTimes:0},u.memory.textures++,j=!0),ue[Re].usedTimes++;const De=ue[D.__cacheKey];De!==void 0&&(ue[D.__cacheKey].usedTimes--,De.usedTimes===0&&Y(E)),D.__cacheKey=Re,D.__webglTexture=ue[Re].texture}return j}function Se(D,E,j){return Math.floor(Math.floor(D/j)/E)}function Me(D,E,j,te){const Re=D.updateRanges;if(Re.length===0)i.texSubImage2D(s.TEXTURE_2D,0,0,0,E.width,E.height,j,te,E.data);else{Re.sort((Be,Ue)=>Be.start-Ue.start);let De=0;for(let Be=1;Be<Re.length;Be++){const Ue=Re[De],Ne=Re[Be],Je=Ue.start+Ue.count,Ke=Se(Ne.start,E.width,4),at=Se(Ue.start,E.width,4);Ne.start<=Je+1&&Ke===at&&Se(Ne.start+Ne.count-1,E.width,4)===Ke?Ue.count=Math.max(Ue.count,Ne.start+Ne.count-Ue.start):(++De,Re[De]=Ne)}Re.length=De+1;const fe=i.getParameter(s.UNPACK_ROW_LENGTH),he=i.getParameter(s.UNPACK_SKIP_PIXELS),Te=i.getParameter(s.UNPACK_SKIP_ROWS);i.pixelStorei(s.UNPACK_ROW_LENGTH,E.width);for(let Be=0,Ue=Re.length;Be<Ue;Be++){const Ne=Re[Be],Je=Math.floor(Ne.start/4),Ke=Math.ceil(Ne.count/4),at=Je%E.width,W=Math.floor(Je/E.width),Ae=Ke,me=1;i.pixelStorei(s.UNPACK_SKIP_PIXELS,at),i.pixelStorei(s.UNPACK_SKIP_ROWS,W),i.texSubImage2D(s.TEXTURE_2D,0,at,W,Ae,me,j,te,E.data)}D.clearUpdateRanges(),i.pixelStorei(s.UNPACK_ROW_LENGTH,fe),i.pixelStorei(s.UNPACK_SKIP_PIXELS,he),i.pixelStorei(s.UNPACK_SKIP_ROWS,Te)}}function ze(D,E,j){let te=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(te=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(te=s.TEXTURE_3D);const ue=ie(D,E),Re=E.source;i.bindTexture(te,D.__webglTexture,s.TEXTURE0+j);const De=r.get(Re);if(Re.version!==De.__version||ue===!0){if(i.activeTexture(s.TEXTURE0+j),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){const me=Rt.getPrimaries(Rt.workingColorSpace),we=E.colorSpace===vs?null:Rt.getPrimaries(E.colorSpace),Pe=E.colorSpace===vs||me===we?s.NONE:s.BROWSER_DEFAULT_WEBGL;i.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe)}i.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment);let he=y(E.image,!1,l.maxTextureSize);he=St(E,he);const Te=c.convert(E.format,E.colorSpace),Be=c.convert(E.type);let Ue=C(E.internalFormat,Te,Be,E.normalized,E.colorSpace,E.isVideoTexture);Le(te,E);let Ne;const Je=E.mipmaps,Ke=E.isVideoTexture!==!0,at=De.__version===void 0||ue===!0,W=Re.dataReady,Ae=U(E,he);if(E.isDepthTexture)Ue=O(E.format===Ks,E.type),at&&(Ke?i.texStorage2D(s.TEXTURE_2D,1,Ue,he.width,he.height):i.texImage2D(s.TEXTURE_2D,0,Ue,he.width,he.height,0,Te,Be,null));else if(E.isDataTexture)if(Je.length>0){Ke&&at&&i.texStorage2D(s.TEXTURE_2D,Ae,Ue,Je[0].width,Je[0].height);for(let me=0,we=Je.length;me<we;me++)Ne=Je[me],Ke?W&&i.texSubImage2D(s.TEXTURE_2D,me,0,0,Ne.width,Ne.height,Te,Be,Ne.data):i.texImage2D(s.TEXTURE_2D,me,Ue,Ne.width,Ne.height,0,Te,Be,Ne.data);E.generateMipmaps=!1}else Ke?(at&&i.texStorage2D(s.TEXTURE_2D,Ae,Ue,he.width,he.height),W&&Me(E,he,Te,Be)):i.texImage2D(s.TEXTURE_2D,0,Ue,he.width,he.height,0,Te,Be,he.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Ke&&at&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Ae,Ue,Je[0].width,Je[0].height,he.depth);for(let me=0,we=Je.length;me<we;me++)if(Ne=Je[me],E.format!==ki)if(Te!==null)if(Ke){if(W)if(E.layerUpdates.size>0){const Pe=X_(Ne.width,Ne.height,E.format,E.type);for(const ye of E.layerUpdates){const Xe=Ne.data.subarray(ye*Pe/Ne.data.BYTES_PER_ELEMENT,(ye+1)*Pe/Ne.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,me,0,0,ye,Ne.width,Ne.height,1,Te,Xe)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,me,0,0,0,Ne.width,Ne.height,he.depth,Te,Ne.data)}else i.compressedTexImage3D(s.TEXTURE_2D_ARRAY,me,Ue,Ne.width,Ne.height,he.depth,0,Ne.data,0,0);else st("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ke?W&&i.texSubImage3D(s.TEXTURE_2D_ARRAY,me,0,0,0,Ne.width,Ne.height,he.depth,Te,Be,Ne.data):i.texImage3D(s.TEXTURE_2D_ARRAY,me,Ue,Ne.width,Ne.height,he.depth,0,Te,Be,Ne.data)}else{Ke&&at&&i.texStorage2D(s.TEXTURE_2D,Ae,Ue,Je[0].width,Je[0].height);for(let me=0,we=Je.length;me<we;me++)Ne=Je[me],E.format!==ki?Te!==null?Ke?W&&i.compressedTexSubImage2D(s.TEXTURE_2D,me,0,0,Ne.width,Ne.height,Te,Ne.data):i.compressedTexImage2D(s.TEXTURE_2D,me,Ue,Ne.width,Ne.height,0,Ne.data):st("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ke?W&&i.texSubImage2D(s.TEXTURE_2D,me,0,0,Ne.width,Ne.height,Te,Be,Ne.data):i.texImage2D(s.TEXTURE_2D,me,Ue,Ne.width,Ne.height,0,Te,Be,Ne.data)}else if(E.isDataArrayTexture)if(Ke){if(at&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Ae,Ue,he.width,he.height,he.depth),W)if(E.layerUpdates.size>0){const me=X_(he.width,he.height,E.format,E.type);for(const we of E.layerUpdates){const Pe=he.data.subarray(we*me/he.data.BYTES_PER_ELEMENT,(we+1)*me/he.data.BYTES_PER_ELEMENT);i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,we,he.width,he.height,1,Te,Be,Pe)}E.clearLayerUpdates()}else i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,he.width,he.height,he.depth,Te,Be,he.data)}else i.texImage3D(s.TEXTURE_2D_ARRAY,0,Ue,he.width,he.height,he.depth,0,Te,Be,he.data);else if(E.isData3DTexture)Ke?(at&&i.texStorage3D(s.TEXTURE_3D,Ae,Ue,he.width,he.height,he.depth),W&&i.texSubImage3D(s.TEXTURE_3D,0,0,0,0,he.width,he.height,he.depth,Te,Be,he.data)):i.texImage3D(s.TEXTURE_3D,0,Ue,he.width,he.height,he.depth,0,Te,Be,he.data);else if(E.isFramebufferTexture){if(at)if(Ke)i.texStorage2D(s.TEXTURE_2D,Ae,Ue,he.width,he.height);else{let me=he.width,we=he.height;for(let Pe=0;Pe<Ae;Pe++)i.texImage2D(s.TEXTURE_2D,Pe,Ue,me,we,0,Te,Be,null),me>>=1,we>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in s){const me=s.canvas;if(me.hasAttribute("layoutsubtree")||me.setAttribute("layoutsubtree","true"),he.parentNode!==me){me.appendChild(he),v.add(E),me.onpaint=we=>{const Pe=we.changedElements;for(const ye of v)Pe.includes(ye.image)&&(ye.needsUpdate=!0)},me.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,he);else{const Pe=s.RGBA,ye=s.RGBA,Xe=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,Pe,ye,Xe,he)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(Je.length>0){if(Ke&&at){const me=vt(Je[0]);i.texStorage2D(s.TEXTURE_2D,Ae,Ue,me.width,me.height)}for(let me=0,we=Je.length;me<we;me++)Ne=Je[me],Ke?W&&i.texSubImage2D(s.TEXTURE_2D,me,0,0,Te,Be,Ne):i.texImage2D(s.TEXTURE_2D,me,Ue,Te,Be,Ne);E.generateMipmaps=!1}else if(Ke){if(at){const me=vt(he);i.texStorage2D(s.TEXTURE_2D,Ae,Ue,me.width,me.height)}W&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,Te,Be,he)}else i.texImage2D(s.TEXTURE_2D,0,Ue,Te,Be,he);M(E)&&F(te),De.__version=Re.version,E.onUpdate&&E.onUpdate(E)}D.__version=E.version}function nt(D,E,j){if(E.image.length!==6)return;const te=ie(D,E),ue=E.source;i.bindTexture(s.TEXTURE_CUBE_MAP,D.__webglTexture,s.TEXTURE0+j);const Re=r.get(ue);if(ue.version!==Re.__version||te===!0){i.activeTexture(s.TEXTURE0+j);const De=Rt.getPrimaries(Rt.workingColorSpace),fe=E.colorSpace===vs?null:Rt.getPrimaries(E.colorSpace),he=E.colorSpace===vs||De===fe?s.NONE:s.BROWSER_DEFAULT_WEBGL;i.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);const Te=E.isCompressedTexture||E.image[0].isCompressedTexture,Be=E.image[0]&&E.image[0].isDataTexture,Ue=[];for(let ye=0;ye<6;ye++)!Te&&!Be?Ue[ye]=y(E.image[ye],!0,l.maxCubemapSize):Ue[ye]=Be?E.image[ye].image:E.image[ye],Ue[ye]=St(E,Ue[ye]);const Ne=Ue[0],Je=c.convert(E.format,E.colorSpace),Ke=c.convert(E.type),at=C(E.internalFormat,Je,Ke,E.normalized,E.colorSpace),W=E.isVideoTexture!==!0,Ae=Re.__version===void 0||te===!0,me=ue.dataReady;let we=U(E,Ne);Le(s.TEXTURE_CUBE_MAP,E);let Pe;if(Te){W&&Ae&&i.texStorage2D(s.TEXTURE_CUBE_MAP,we,at,Ne.width,Ne.height);for(let ye=0;ye<6;ye++){Pe=Ue[ye].mipmaps;for(let Xe=0;Xe<Pe.length;Xe++){const He=Pe[Xe];E.format!==ki?Je!==null?W?me&&i.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Xe,0,0,He.width,He.height,Je,He.data):i.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Xe,at,He.width,He.height,0,He.data):st("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?me&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Xe,0,0,He.width,He.height,Je,Ke,He.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Xe,at,He.width,He.height,0,Je,Ke,He.data)}}}else{if(Pe=E.mipmaps,W&&Ae){Pe.length>0&&we++;const ye=vt(Ue[0]);i.texStorage2D(s.TEXTURE_CUBE_MAP,we,at,ye.width,ye.height)}for(let ye=0;ye<6;ye++)if(Be){W?me&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,Ue[ye].width,Ue[ye].height,Je,Ke,Ue[ye].data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,at,Ue[ye].width,Ue[ye].height,0,Je,Ke,Ue[ye].data);for(let Xe=0;Xe<Pe.length;Xe++){const Ht=Pe[Xe].image[ye].image;W?me&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Xe+1,0,0,Ht.width,Ht.height,Je,Ke,Ht.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Xe+1,at,Ht.width,Ht.height,0,Je,Ke,Ht.data)}}else{W?me&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,Je,Ke,Ue[ye]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,at,Je,Ke,Ue[ye]);for(let Xe=0;Xe<Pe.length;Xe++){const He=Pe[Xe];W?me&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Xe+1,0,0,Je,Ke,He.image[ye]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Xe+1,at,Je,Ke,He.image[ye])}}}M(E)&&F(s.TEXTURE_CUBE_MAP),Re.__version=ue.version,E.onUpdate&&E.onUpdate(E)}D.__version=E.version}function Qe(D,E,j,te,ue,Re){const De=c.convert(j.format,j.colorSpace),fe=c.convert(j.type),he=C(j.internalFormat,De,fe,j.normalized,j.colorSpace),Te=r.get(E),Be=r.get(j);if(Be.__renderTarget=E,!Te.__hasExternalTextures){const Ue=Math.max(1,E.width>>Re),Ne=Math.max(1,E.height>>Re);ue===s.TEXTURE_3D||ue===s.TEXTURE_2D_ARRAY?i.texImage3D(ue,Re,he,Ue,Ne,E.depth,0,De,fe,null):i.texImage2D(ue,Re,he,Ue,Ne,0,De,fe,null)}i.bindFramebuffer(s.FRAMEBUFFER,D),gt(E)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,te,ue,Be.__webglTexture,0,ut(E)):(ue===s.TEXTURE_2D||ue>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ue<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,te,ue,Be.__webglTexture,Re),i.bindFramebuffer(s.FRAMEBUFFER,null)}function Yt(D,E,j){if(s.bindRenderbuffer(s.RENDERBUFFER,D),E.depthBuffer){const te=E.depthTexture,ue=te&&te.isDepthTexture?te.type:null,Re=O(E.stencilBuffer,ue),De=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;gt(E)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ut(E),Re,E.width,E.height):j?s.renderbufferStorageMultisample(s.RENDERBUFFER,ut(E),Re,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,Re,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,De,s.RENDERBUFFER,D)}else{const te=E.textures;for(let ue=0;ue<te.length;ue++){const Re=te[ue],De=c.convert(Re.format,Re.colorSpace),fe=c.convert(Re.type),he=C(Re.internalFormat,De,fe,Re.normalized,Re.colorSpace);gt(E)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ut(E),he,E.width,E.height):j?s.renderbufferStorageMultisample(s.RENDERBUFFER,ut(E),he,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,he,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ct(D,E,j){const te=E.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(s.FRAMEBUFFER,D),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ue=r.get(E.depthTexture);if(ue.__renderTarget=E,(!ue.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),te){if(ue.__webglInit===void 0&&(ue.__webglInit=!0,E.depthTexture.addEventListener("dispose",P)),ue.__webglTexture===void 0){ue.__webglTexture=s.createTexture(),i.bindTexture(s.TEXTURE_CUBE_MAP,ue.__webglTexture),Le(s.TEXTURE_CUBE_MAP,E.depthTexture);const Te=c.convert(E.depthTexture.format),Be=c.convert(E.depthTexture.type);let Ue;E.depthTexture.format===Ia?Ue=s.DEPTH_COMPONENT24:E.depthTexture.format===Ks&&(Ue=s.DEPTH24_STENCIL8);for(let Ne=0;Ne<6;Ne++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,0,Ue,E.width,E.height,0,Te,Be,null)}}else ee(E.depthTexture,0);const Re=ue.__webglTexture,De=ut(E),fe=te?s.TEXTURE_CUBE_MAP_POSITIVE_X+j:s.TEXTURE_2D,he=E.depthTexture.format===Ks?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(E.depthTexture.format===Ia)gt(E)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,he,fe,Re,0,De):s.framebufferTexture2D(s.FRAMEBUFFER,he,fe,Re,0);else if(E.depthTexture.format===Ks)gt(E)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,he,fe,Re,0,De):s.framebufferTexture2D(s.FRAMEBUFFER,he,fe,Re,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function _t(D){const E=r.get(D),j=D.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==D.depthTexture){const te=D.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),te){const ue=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,te.removeEventListener("dispose",ue)};te.addEventListener("dispose",ue),E.__depthDisposeCallback=ue}E.__boundDepthTexture=te}if(D.depthTexture&&!E.__autoAllocateDepthBuffer)if(j)for(let te=0;te<6;te++)ct(E.__webglFramebuffer[te],D,te);else{const te=D.texture.mipmaps;te&&te.length>0?ct(E.__webglFramebuffer[0],D,0):ct(E.__webglFramebuffer,D,0)}else if(j){E.__webglDepthbuffer=[];for(let te=0;te<6;te++)if(i.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[te]),E.__webglDepthbuffer[te]===void 0)E.__webglDepthbuffer[te]=s.createRenderbuffer(),Yt(E.__webglDepthbuffer[te],D,!1);else{const ue=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Re=E.__webglDepthbuffer[te];s.bindRenderbuffer(s.RENDERBUFFER,Re),s.framebufferRenderbuffer(s.FRAMEBUFFER,ue,s.RENDERBUFFER,Re)}}else{const te=D.texture.mipmaps;if(te&&te.length>0?i.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=s.createRenderbuffer(),Yt(E.__webglDepthbuffer,D,!1);else{const ue=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Re=E.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Re),s.framebufferRenderbuffer(s.FRAMEBUFFER,ue,s.RENDERBUFFER,Re)}}i.bindFramebuffer(s.FRAMEBUFFER,null)}function Ye(D,E,j){const te=r.get(D);E!==void 0&&Qe(te.__webglFramebuffer,D,D.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),j!==void 0&&_t(D)}function Ze(D){const E=D.texture,j=r.get(D),te=r.get(E);D.addEventListener("dispose",T);const ue=D.textures,Re=D.isWebGLCubeRenderTarget===!0,De=ue.length>1;if(De||(te.__webglTexture===void 0&&(te.__webglTexture=s.createTexture()),te.__version=E.version,u.memory.textures++),Re){j.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(E.mipmaps&&E.mipmaps.length>0){j.__webglFramebuffer[fe]=[];for(let he=0;he<E.mipmaps.length;he++)j.__webglFramebuffer[fe][he]=s.createFramebuffer()}else j.__webglFramebuffer[fe]=s.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){j.__webglFramebuffer=[];for(let fe=0;fe<E.mipmaps.length;fe++)j.__webglFramebuffer[fe]=s.createFramebuffer()}else j.__webglFramebuffer=s.createFramebuffer();if(De)for(let fe=0,he=ue.length;fe<he;fe++){const Te=r.get(ue[fe]);Te.__webglTexture===void 0&&(Te.__webglTexture=s.createTexture(),u.memory.textures++)}if(D.samples>0&&gt(D)===!1){j.__webglMultisampledFramebuffer=s.createFramebuffer(),j.__webglColorRenderbuffer=[],i.bindFramebuffer(s.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let fe=0;fe<ue.length;fe++){const he=ue[fe];j.__webglColorRenderbuffer[fe]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,j.__webglColorRenderbuffer[fe]);const Te=c.convert(he.format,he.colorSpace),Be=c.convert(he.type),Ue=C(he.internalFormat,Te,Be,he.normalized,he.colorSpace,D.isXRRenderTarget===!0),Ne=ut(D);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ne,Ue,D.width,D.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+fe,s.RENDERBUFFER,j.__webglColorRenderbuffer[fe])}s.bindRenderbuffer(s.RENDERBUFFER,null),D.depthBuffer&&(j.__webglDepthRenderbuffer=s.createRenderbuffer(),Yt(j.__webglDepthRenderbuffer,D,!0)),i.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Re){i.bindTexture(s.TEXTURE_CUBE_MAP,te.__webglTexture),Le(s.TEXTURE_CUBE_MAP,E);for(let fe=0;fe<6;fe++)if(E.mipmaps&&E.mipmaps.length>0)for(let he=0;he<E.mipmaps.length;he++)Qe(j.__webglFramebuffer[fe][he],D,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,he);else Qe(j.__webglFramebuffer[fe],D,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);M(E)&&F(s.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(De){for(let fe=0,he=ue.length;fe<he;fe++){const Te=ue[fe],Be=r.get(Te);let Ue=s.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Ue=D.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Ue,Be.__webglTexture),Le(Ue,Te),Qe(j.__webglFramebuffer,D,Te,s.COLOR_ATTACHMENT0+fe,Ue,0),M(Te)&&F(Ue)}i.unbindTexture()}else{let fe=s.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(fe=D.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(fe,te.__webglTexture),Le(fe,E),E.mipmaps&&E.mipmaps.length>0)for(let he=0;he<E.mipmaps.length;he++)Qe(j.__webglFramebuffer[he],D,E,s.COLOR_ATTACHMENT0,fe,he);else Qe(j.__webglFramebuffer,D,E,s.COLOR_ATTACHMENT0,fe,0);M(E)&&F(fe),i.unbindTexture()}D.depthBuffer&&_t(D)}function rt(D){const E=D.textures;for(let j=0,te=E.length;j<te;j++){const ue=E[j];if(M(ue)){const Re=z(D),De=r.get(ue).__webglTexture;i.bindTexture(Re,De),F(Re),i.unbindTexture()}}}const pt=[],Ct=[];function wt(D){if(D.samples>0){if(gt(D)===!1){const E=D.textures,j=D.width,te=D.height;let ue=s.COLOR_BUFFER_BIT;const Re=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,De=r.get(D),fe=E.length>1;if(fe)for(let Te=0;Te<E.length;Te++)i.bindFramebuffer(s.FRAMEBUFFER,De.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Te,s.RENDERBUFFER,null),i.bindFramebuffer(s.FRAMEBUFFER,De.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Te,s.TEXTURE_2D,null,0);i.bindFramebuffer(s.READ_FRAMEBUFFER,De.__webglMultisampledFramebuffer);const he=D.texture.mipmaps;he&&he.length>0?i.bindFramebuffer(s.DRAW_FRAMEBUFFER,De.__webglFramebuffer[0]):i.bindFramebuffer(s.DRAW_FRAMEBUFFER,De.__webglFramebuffer);for(let Te=0;Te<E.length;Te++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(ue|=s.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(ue|=s.STENCIL_BUFFER_BIT)),fe){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,De.__webglColorRenderbuffer[Te]);const Be=r.get(E[Te]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Be,0)}s.blitFramebuffer(0,0,j,te,0,0,j,te,ue,s.NEAREST),p===!0&&(pt.length=0,Ct.length=0,pt.push(s.COLOR_ATTACHMENT0+Te),D.depthBuffer&&D.resolveDepthBuffer===!1&&(pt.push(Re),Ct.push(Re),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Ct)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,pt))}if(i.bindFramebuffer(s.READ_FRAMEBUFFER,null),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),fe)for(let Te=0;Te<E.length;Te++){i.bindFramebuffer(s.FRAMEBUFFER,De.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Te,s.RENDERBUFFER,De.__webglColorRenderbuffer[Te]);const Be=r.get(E[Te]).__webglTexture;i.bindFramebuffer(s.FRAMEBUFFER,De.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Te,s.TEXTURE_2D,Be,0)}i.bindFramebuffer(s.DRAW_FRAMEBUFFER,De.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&p){const E=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[E])}}}function ut(D){return Math.min(l.maxSamples,D.samples)}function gt(D){const E=r.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function X(D){const E=u.render.frame;_.get(D)!==E&&(_.set(D,E),D.update())}function St(D,E){const j=D.colorSpace,te=D.format,ue=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||j!==au&&j!==vs&&(Rt.getTransfer(j)===qt?(te!==ki||ue!==wi)&&st("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Nt("WebGLTextures: Unsupported texture color space:",j)),E}function vt(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(m.width=D.naturalWidth||D.width,m.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(m.width=D.displayWidth,m.height=D.displayHeight):(m.width=D.width,m.height=D.height),m}this.allocateTextureUnit=I,this.resetTextureUnits=pe,this.getTextureUnits=de,this.setTextureUnits=J,this.setTexture2D=ee,this.setTexture2DArray=_e,this.setTexture3D=be,this.setTextureCube=N,this.rebindTextures=Ye,this.setupRenderTarget=Ze,this.updateRenderTargetMipmap=rt,this.updateMultisampleRenderTarget=wt,this.setupDepthRenderbuffer=_t,this.setupFrameBufferTexture=Qe,this.useMultisampledRTT=gt,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function a2(s,e){function i(r,l=vs){let c;const u=Rt.getTransfer(l);if(r===wi)return s.UNSIGNED_BYTE;if(r===lp)return s.UNSIGNED_SHORT_4_4_4_4;if(r===cp)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Pv)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===Iv)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===Lv)return s.BYTE;if(r===Ov)return s.SHORT;if(r===fl)return s.UNSIGNED_SHORT;if(r===op)return s.INT;if(r===ra)return s.UNSIGNED_INT;if(r===ta)return s.FLOAT;if(r===Pa)return s.HALF_FLOAT;if(r===Fv)return s.ALPHA;if(r===Bv)return s.RGB;if(r===ki)return s.RGBA;if(r===Ia)return s.DEPTH_COMPONENT;if(r===Ks)return s.DEPTH_STENCIL;if(r===zv)return s.RED;if(r===up)return s.RED_INTEGER;if(r===Js)return s.RG;if(r===fp)return s.RG_INTEGER;if(r===dp)return s.RGBA_INTEGER;if(r===Qc||r===Jc||r===$c||r===eu)if(u===qt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===Qc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Jc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===$c)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===eu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===Qc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Jc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===$c)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===eu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Ah||r===Rh||r===Ch||r===wh)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===Ah)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Rh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Ch)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===wh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Dh||r===Uh||r===Nh||r===Lh||r===Oh||r===nu||r===Ph)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===Dh||r===Uh)return u===qt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===Nh)return u===qt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(r===Lh)return c.COMPRESSED_R11_EAC;if(r===Oh)return c.COMPRESSED_SIGNED_R11_EAC;if(r===nu)return c.COMPRESSED_RG11_EAC;if(r===Ph)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===Ih||r===Fh||r===Bh||r===zh||r===Hh||r===Gh||r===Vh||r===kh||r===Xh||r===Wh||r===qh||r===Yh||r===Zh||r===Kh)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===Ih)return u===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Fh)return u===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Bh)return u===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===zh)return u===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Hh)return u===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Gh)return u===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Vh)return u===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===kh)return u===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Xh)return u===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Wh)return u===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===qh)return u===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Yh)return u===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Zh)return u===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Kh)return u===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===jh||r===Qh||r===Jh)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===jh)return u===qt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Qh)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Jh)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===$h||r===ep||r===iu||r===tp)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===$h)return c.COMPRESSED_RED_RGTC1_EXT;if(r===ep)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===iu)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===tp)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===dl?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:i}}const s2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,r2=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class o2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const r=new Kv(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new Xi({vertexShader:s2,fragmentShader:r2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Ui(new js(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class l2 extends er{constructor(e,i){super();const r=this;let l=null,c=1,u=null,h="local-floor",p=1,m=null,_=null,v=null,g=null,S=null,b=null;const w=typeof XRWebGLBinding<"u",y=new o2,M={},F=i.getContextAttributes();let z=null,C=null;const O=[],U=[],P=new Ft;let T=null;const L=new Ci;L.viewport=new cn;const Y=new Ci;Y.viewport=new cn;const V=[L,Y],Q=new vE;let pe=null,de=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ie){let Se=O[ie];return Se===void 0&&(Se=new zd,O[ie]=Se),Se.getTargetRaySpace()},this.getControllerGrip=function(ie){let Se=O[ie];return Se===void 0&&(Se=new zd,O[ie]=Se),Se.getGripSpace()},this.getHand=function(ie){let Se=O[ie];return Se===void 0&&(Se=new zd,O[ie]=Se),Se.getHandSpace()};function J(ie){const Se=U.indexOf(ie.inputSource);if(Se===-1)return;const Me=O[Se];Me!==void 0&&(Me.update(ie.inputSource,ie.frame,m||u),Me.dispatchEvent({type:ie.type,data:ie.inputSource}))}function I(){l.removeEventListener("select",J),l.removeEventListener("selectstart",J),l.removeEventListener("selectend",J),l.removeEventListener("squeeze",J),l.removeEventListener("squeezestart",J),l.removeEventListener("squeezeend",J),l.removeEventListener("end",I),l.removeEventListener("inputsourceschange",G);for(let ie=0;ie<O.length;ie++){const Se=U[ie];Se!==null&&(U[ie]=null,O[ie].disconnect(Se))}pe=null,de=null,y.reset();for(const ie in M)delete M[ie];e.setRenderTarget(z),S=null,g=null,v=null,l=null,C=null,Le.stop(),r.isPresenting=!1,e.setPixelRatio(T),e.setSize(P.width,P.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ie){c=ie,r.isPresenting===!0&&st("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ie){h=ie,r.isPresenting===!0&&st("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||u},this.setReferenceSpace=function(ie){m=ie},this.getBaseLayer=function(){return g!==null?g:S},this.getBinding=function(){return v===null&&w&&(v=new XRWebGLBinding(l,i)),v},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function(ie){if(l=ie,l!==null){if(z=e.getRenderTarget(),l.addEventListener("select",J),l.addEventListener("selectstart",J),l.addEventListener("selectend",J),l.addEventListener("squeeze",J),l.addEventListener("squeezestart",J),l.addEventListener("squeezeend",J),l.addEventListener("end",I),l.addEventListener("inputsourceschange",G),F.xrCompatible!==!0&&await i.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(P),w&&"createProjectionLayer"in XRWebGLBinding.prototype){let Me=null,ze=null,nt=null;F.depth&&(nt=F.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Me=F.stencil?Ks:Ia,ze=F.stencil?dl:ra);const Qe={colorFormat:i.RGBA8,depthFormat:nt,scaleFactor:c};v=this.getBinding(),g=v.createProjectionLayer(Qe),l.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),C=new aa(g.textureWidth,g.textureHeight,{format:ki,type:wi,depthTexture:new io(g.textureWidth,g.textureHeight,ze,void 0,void 0,void 0,void 0,void 0,void 0,Me),stencilBuffer:F.stencil,colorSpace:e.outputColorSpace,samples:F.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const Me={antialias:F.antialias,alpha:!0,depth:F.depth,stencil:F.stencil,framebufferScaleFactor:c};S=new XRWebGLLayer(l,i,Me),l.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),C=new aa(S.framebufferWidth,S.framebufferHeight,{format:ki,type:wi,colorSpace:e.outputColorSpace,stencilBuffer:F.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(p),m=null,u=await l.requestReferenceSpace(h),Le.setContext(l),Le.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function G(ie){for(let Se=0;Se<ie.removed.length;Se++){const Me=ie.removed[Se],ze=U.indexOf(Me);ze>=0&&(U[ze]=null,O[ze].disconnect(Me))}for(let Se=0;Se<ie.added.length;Se++){const Me=ie.added[Se];let ze=U.indexOf(Me);if(ze===-1){for(let Qe=0;Qe<O.length;Qe++)if(Qe>=U.length){U.push(Me),ze=Qe;break}else if(U[Qe]===null){U[Qe]=Me,ze=Qe;break}if(ze===-1)break}const nt=O[ze];nt&&nt.connect(Me)}}const ee=new $,_e=new $;function be(ie,Se,Me){ee.setFromMatrixPosition(Se.matrixWorld),_e.setFromMatrixPosition(Me.matrixWorld);const ze=ee.distanceTo(_e),nt=Se.projectionMatrix.elements,Qe=Me.projectionMatrix.elements,Yt=nt[14]/(nt[10]-1),ct=nt[14]/(nt[10]+1),_t=(nt[9]+1)/nt[5],Ye=(nt[9]-1)/nt[5],Ze=(nt[8]-1)/nt[0],rt=(Qe[8]+1)/Qe[0],pt=Yt*Ze,Ct=Yt*rt,wt=ze/(-Ze+rt),ut=wt*-Ze;if(Se.matrixWorld.decompose(ie.position,ie.quaternion,ie.scale),ie.translateX(ut),ie.translateZ(wt),ie.matrixWorld.compose(ie.position,ie.quaternion,ie.scale),ie.matrixWorldInverse.copy(ie.matrixWorld).invert(),nt[10]===-1)ie.projectionMatrix.copy(Se.projectionMatrix),ie.projectionMatrixInverse.copy(Se.projectionMatrixInverse);else{const gt=Yt+wt,X=ct+wt,St=pt-ut,vt=Ct+(ze-ut),D=_t*ct/X*gt,E=Ye*ct/X*gt;ie.projectionMatrix.makePerspective(St,vt,D,E,gt,X),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert()}}function N(ie,Se){Se===null?ie.matrixWorld.copy(ie.matrix):ie.matrixWorld.multiplyMatrices(Se.matrixWorld,ie.matrix),ie.matrixWorldInverse.copy(ie.matrixWorld).invert()}this.updateCamera=function(ie){if(l===null)return;let Se=ie.near,Me=ie.far;y.texture!==null&&(y.depthNear>0&&(Se=y.depthNear),y.depthFar>0&&(Me=y.depthFar)),Q.near=Y.near=L.near=Se,Q.far=Y.far=L.far=Me,(pe!==Q.near||de!==Q.far)&&(l.updateRenderState({depthNear:Q.near,depthFar:Q.far}),pe=Q.near,de=Q.far),Q.layers.mask=ie.layers.mask|6,L.layers.mask=Q.layers.mask&-5,Y.layers.mask=Q.layers.mask&-3;const ze=ie.parent,nt=Q.cameras;N(Q,ze);for(let Qe=0;Qe<nt.length;Qe++)N(nt[Qe],ze);nt.length===2?be(Q,L,Y):Q.projectionMatrix.copy(L.projectionMatrix),Z(ie,Q,ze)};function Z(ie,Se,Me){Me===null?ie.matrix.copy(Se.matrixWorld):(ie.matrix.copy(Me.matrixWorld),ie.matrix.invert(),ie.matrix.multiply(Se.matrixWorld)),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.updateMatrixWorld(!0),ie.projectionMatrix.copy(Se.projectionMatrix),ie.projectionMatrixInverse.copy(Se.projectionMatrixInverse),ie.isPerspectiveCamera&&(ie.fov=hl*2*Math.atan(1/ie.projectionMatrix.elements[5]),ie.zoom=1)}this.getCamera=function(){return Q},this.getFoveation=function(){if(!(g===null&&S===null))return p},this.setFoveation=function(ie){p=ie,g!==null&&(g.fixedFoveation=ie),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=ie)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(Q)},this.getCameraTexture=function(ie){return M[ie]};let Ee=null;function Ce(ie,Se){if(_=Se.getViewerPose(m||u),b=Se,_!==null){const Me=_.views;S!==null&&(e.setRenderTargetFramebuffer(C,S.framebuffer),e.setRenderTarget(C));let ze=!1;Me.length!==Q.cameras.length&&(Q.cameras.length=0,ze=!0);for(let ct=0;ct<Me.length;ct++){const _t=Me[ct];let Ye=null;if(S!==null)Ye=S.getViewport(_t);else{const rt=v.getViewSubImage(g,_t);Ye=rt.viewport,ct===0&&(e.setRenderTargetTextures(C,rt.colorTexture,rt.depthStencilTexture),e.setRenderTarget(C))}let Ze=V[ct];Ze===void 0&&(Ze=new Ci,Ze.layers.enable(ct),Ze.viewport=new cn,V[ct]=Ze),Ze.matrix.fromArray(_t.transform.matrix),Ze.matrix.decompose(Ze.position,Ze.quaternion,Ze.scale),Ze.projectionMatrix.fromArray(_t.projectionMatrix),Ze.projectionMatrixInverse.copy(Ze.projectionMatrix).invert(),Ze.viewport.set(Ye.x,Ye.y,Ye.width,Ye.height),ct===0&&(Q.matrix.copy(Ze.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale)),ze===!0&&Q.cameras.push(Ze)}const nt=l.enabledFeatures;if(nt&&nt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&w){v=r.getBinding();const ct=v.getDepthInformation(Me[0]);ct&&ct.isValid&&ct.texture&&y.init(ct,l.renderState)}if(nt&&nt.includes("camera-access")&&w){e.state.unbindTexture(),v=r.getBinding();for(let ct=0;ct<Me.length;ct++){const _t=Me[ct].camera;if(_t){let Ye=M[_t];Ye||(Ye=new Kv,M[_t]=Ye);const Ze=v.getCameraImage(_t);Ye.sourceTexture=Ze}}}}for(let Me=0;Me<O.length;Me++){const ze=U[Me],nt=O[Me];ze!==null&&nt!==void 0&&nt.update(ze,Se,m||u)}Ee&&Ee(ie,Se),Se.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:Se}),b=null}const Le=new $v;Le.setAnimationLoop(Ce),this.setAnimationLoop=function(ie){Ee=ie},this.dispose=function(){}}}const c2=new hn,rx=new lt;rx.set(-1,0,0,0,1,0,0,0,1);function u2(s,e){function i(y,M){y.matrixAutoUpdate===!0&&y.updateMatrix(),M.value.copy(y.matrix)}function r(y,M){M.color.getRGB(y.fogColor.value,jv(s)),M.isFog?(y.fogNear.value=M.near,y.fogFar.value=M.far):M.isFogExp2&&(y.fogDensity.value=M.density)}function l(y,M,F,z,C){M.isNodeMaterial?M.uniformsNeedUpdate=!1:M.isMeshBasicMaterial?c(y,M):M.isMeshLambertMaterial?(c(y,M),M.envMap&&(y.envMapIntensity.value=M.envMapIntensity)):M.isMeshToonMaterial?(c(y,M),v(y,M)):M.isMeshPhongMaterial?(c(y,M),_(y,M),M.envMap&&(y.envMapIntensity.value=M.envMapIntensity)):M.isMeshStandardMaterial?(c(y,M),g(y,M),M.isMeshPhysicalMaterial&&S(y,M,C)):M.isMeshMatcapMaterial?(c(y,M),b(y,M)):M.isMeshDepthMaterial?c(y,M):M.isMeshDistanceMaterial?(c(y,M),w(y,M)):M.isMeshNormalMaterial?c(y,M):M.isLineBasicMaterial?(u(y,M),M.isLineDashedMaterial&&h(y,M)):M.isPointsMaterial?p(y,M,F,z):M.isSpriteMaterial?m(y,M):M.isShadowMaterial?(y.color.value.copy(M.color),y.opacity.value=M.opacity):M.isShaderMaterial&&(M.uniformsNeedUpdate=!1)}function c(y,M){y.opacity.value=M.opacity,M.color&&y.diffuse.value.copy(M.color),M.emissive&&y.emissive.value.copy(M.emissive).multiplyScalar(M.emissiveIntensity),M.map&&(y.map.value=M.map,i(M.map,y.mapTransform)),M.alphaMap&&(y.alphaMap.value=M.alphaMap,i(M.alphaMap,y.alphaMapTransform)),M.bumpMap&&(y.bumpMap.value=M.bumpMap,i(M.bumpMap,y.bumpMapTransform),y.bumpScale.value=M.bumpScale,M.side===si&&(y.bumpScale.value*=-1)),M.normalMap&&(y.normalMap.value=M.normalMap,i(M.normalMap,y.normalMapTransform),y.normalScale.value.copy(M.normalScale),M.side===si&&y.normalScale.value.negate()),M.displacementMap&&(y.displacementMap.value=M.displacementMap,i(M.displacementMap,y.displacementMapTransform),y.displacementScale.value=M.displacementScale,y.displacementBias.value=M.displacementBias),M.emissiveMap&&(y.emissiveMap.value=M.emissiveMap,i(M.emissiveMap,y.emissiveMapTransform)),M.specularMap&&(y.specularMap.value=M.specularMap,i(M.specularMap,y.specularMapTransform)),M.alphaTest>0&&(y.alphaTest.value=M.alphaTest);const F=e.get(M),z=F.envMap,C=F.envMapRotation;z&&(y.envMap.value=z,y.envMapRotation.value.setFromMatrix4(c2.makeRotationFromEuler(C)).transpose(),z.isCubeTexture&&z.isRenderTargetTexture===!1&&y.envMapRotation.value.premultiply(rx),y.reflectivity.value=M.reflectivity,y.ior.value=M.ior,y.refractionRatio.value=M.refractionRatio),M.lightMap&&(y.lightMap.value=M.lightMap,y.lightMapIntensity.value=M.lightMapIntensity,i(M.lightMap,y.lightMapTransform)),M.aoMap&&(y.aoMap.value=M.aoMap,y.aoMapIntensity.value=M.aoMapIntensity,i(M.aoMap,y.aoMapTransform))}function u(y,M){y.diffuse.value.copy(M.color),y.opacity.value=M.opacity,M.map&&(y.map.value=M.map,i(M.map,y.mapTransform))}function h(y,M){y.dashSize.value=M.dashSize,y.totalSize.value=M.dashSize+M.gapSize,y.scale.value=M.scale}function p(y,M,F,z){y.diffuse.value.copy(M.color),y.opacity.value=M.opacity,y.size.value=M.size*F,y.scale.value=z*.5,M.map&&(y.map.value=M.map,i(M.map,y.uvTransform)),M.alphaMap&&(y.alphaMap.value=M.alphaMap,i(M.alphaMap,y.alphaMapTransform)),M.alphaTest>0&&(y.alphaTest.value=M.alphaTest)}function m(y,M){y.diffuse.value.copy(M.color),y.opacity.value=M.opacity,y.rotation.value=M.rotation,M.map&&(y.map.value=M.map,i(M.map,y.mapTransform)),M.alphaMap&&(y.alphaMap.value=M.alphaMap,i(M.alphaMap,y.alphaMapTransform)),M.alphaTest>0&&(y.alphaTest.value=M.alphaTest)}function _(y,M){y.specular.value.copy(M.specular),y.shininess.value=Math.max(M.shininess,1e-4)}function v(y,M){M.gradientMap&&(y.gradientMap.value=M.gradientMap)}function g(y,M){y.metalness.value=M.metalness,M.metalnessMap&&(y.metalnessMap.value=M.metalnessMap,i(M.metalnessMap,y.metalnessMapTransform)),y.roughness.value=M.roughness,M.roughnessMap&&(y.roughnessMap.value=M.roughnessMap,i(M.roughnessMap,y.roughnessMapTransform)),M.envMap&&(y.envMapIntensity.value=M.envMapIntensity)}function S(y,M,F){y.ior.value=M.ior,M.sheen>0&&(y.sheenColor.value.copy(M.sheenColor).multiplyScalar(M.sheen),y.sheenRoughness.value=M.sheenRoughness,M.sheenColorMap&&(y.sheenColorMap.value=M.sheenColorMap,i(M.sheenColorMap,y.sheenColorMapTransform)),M.sheenRoughnessMap&&(y.sheenRoughnessMap.value=M.sheenRoughnessMap,i(M.sheenRoughnessMap,y.sheenRoughnessMapTransform))),M.clearcoat>0&&(y.clearcoat.value=M.clearcoat,y.clearcoatRoughness.value=M.clearcoatRoughness,M.clearcoatMap&&(y.clearcoatMap.value=M.clearcoatMap,i(M.clearcoatMap,y.clearcoatMapTransform)),M.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=M.clearcoatRoughnessMap,i(M.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),M.clearcoatNormalMap&&(y.clearcoatNormalMap.value=M.clearcoatNormalMap,i(M.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(M.clearcoatNormalScale),M.side===si&&y.clearcoatNormalScale.value.negate())),M.dispersion>0&&(y.dispersion.value=M.dispersion),M.iridescence>0&&(y.iridescence.value=M.iridescence,y.iridescenceIOR.value=M.iridescenceIOR,y.iridescenceThicknessMinimum.value=M.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=M.iridescenceThicknessRange[1],M.iridescenceMap&&(y.iridescenceMap.value=M.iridescenceMap,i(M.iridescenceMap,y.iridescenceMapTransform)),M.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=M.iridescenceThicknessMap,i(M.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),M.transmission>0&&(y.transmission.value=M.transmission,y.transmissionSamplerMap.value=F.texture,y.transmissionSamplerSize.value.set(F.width,F.height),M.transmissionMap&&(y.transmissionMap.value=M.transmissionMap,i(M.transmissionMap,y.transmissionMapTransform)),y.thickness.value=M.thickness,M.thicknessMap&&(y.thicknessMap.value=M.thicknessMap,i(M.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=M.attenuationDistance,y.attenuationColor.value.copy(M.attenuationColor)),M.anisotropy>0&&(y.anisotropyVector.value.set(M.anisotropy*Math.cos(M.anisotropyRotation),M.anisotropy*Math.sin(M.anisotropyRotation)),M.anisotropyMap&&(y.anisotropyMap.value=M.anisotropyMap,i(M.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=M.specularIntensity,y.specularColor.value.copy(M.specularColor),M.specularColorMap&&(y.specularColorMap.value=M.specularColorMap,i(M.specularColorMap,y.specularColorMapTransform)),M.specularIntensityMap&&(y.specularIntensityMap.value=M.specularIntensityMap,i(M.specularIntensityMap,y.specularIntensityMapTransform))}function b(y,M){M.matcap&&(y.matcap.value=M.matcap)}function w(y,M){const F=e.get(M).light;y.referencePosition.value.setFromMatrixPosition(F.matrixWorld),y.nearDistance.value=F.shadow.camera.near,y.farDistance.value=F.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function f2(s,e,i,r){let l={},c={},u=[];const h=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function p(C,O){const U=O.program;r.uniformBlockBinding(C,U)}function m(C,O){let U=l[C.id];U===void 0&&(y(C),U=_(C),l[C.id]=U,C.addEventListener("dispose",F));const P=O.program;r.updateUBOMapping(C,P);const T=e.render.frame;c[C.id]!==T&&(g(C),c[C.id]=T)}function _(C){const O=v();C.__bindingPointIndex=O;const U=s.createBuffer(),P=C.__size,T=C.usage;return s.bindBuffer(s.UNIFORM_BUFFER,U),s.bufferData(s.UNIFORM_BUFFER,P,T),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,O,U),U}function v(){for(let C=0;C<h;C++)if(u.indexOf(C)===-1)return u.push(C),C;return Nt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(C){const O=l[C.id],U=C.uniforms,P=C.__cache;s.bindBuffer(s.UNIFORM_BUFFER,O);for(let T=0,L=U.length;T<L;T++){const Y=U[T];if(Array.isArray(Y))for(let V=0,Q=Y.length;V<Q;V++)S(Y[V],T,V,P);else S(Y,T,0,P)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function S(C,O,U,P){if(w(C,O,U,P)===!0){const T=C.__offset,L=C.value;if(Array.isArray(L)){let Y=0;for(let V=0;V<L.length;V++){const Q=L[V],pe=M(Q);b(Q,C.__data,Y),typeof Q!="number"&&typeof Q!="boolean"&&!Q.isMatrix3&&!ArrayBuffer.isView(Q)&&(Y+=pe.storage/Float32Array.BYTES_PER_ELEMENT)}}else b(L,C.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,T,C.__data)}}function b(C,O,U){typeof C=="number"||typeof C=="boolean"?O[0]=C:C.isMatrix3?(O[0]=C.elements[0],O[1]=C.elements[1],O[2]=C.elements[2],O[3]=0,O[4]=C.elements[3],O[5]=C.elements[4],O[6]=C.elements[5],O[7]=0,O[8]=C.elements[6],O[9]=C.elements[7],O[10]=C.elements[8],O[11]=0):ArrayBuffer.isView(C)?O.set(new C.constructor(C.buffer,C.byteOffset,O.length)):C.toArray(O,U)}function w(C,O,U,P){const T=C.value,L=O+"_"+U;if(P[L]===void 0)return typeof T=="number"||typeof T=="boolean"?P[L]=T:ArrayBuffer.isView(T)?P[L]=T.slice():P[L]=T.clone(),!0;{const Y=P[L];if(typeof T=="number"||typeof T=="boolean"){if(Y!==T)return P[L]=T,!0}else{if(ArrayBuffer.isView(T))return!0;if(Y.equals(T)===!1)return Y.copy(T),!0}}return!1}function y(C){const O=C.uniforms;let U=0;const P=16;for(let L=0,Y=O.length;L<Y;L++){const V=Array.isArray(O[L])?O[L]:[O[L]];for(let Q=0,pe=V.length;Q<pe;Q++){const de=V[Q],J=Array.isArray(de.value)?de.value:[de.value];for(let I=0,G=J.length;I<G;I++){const ee=J[I],_e=M(ee),be=U%P,N=be%_e.boundary,Z=be+N;U+=N,Z!==0&&P-Z<_e.storage&&(U+=P-Z),de.__data=new Float32Array(_e.storage/Float32Array.BYTES_PER_ELEMENT),de.__offset=U,U+=_e.storage}}}const T=U%P;return T>0&&(U+=P-T),C.__size=U,C.__cache={},this}function M(C){const O={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(O.boundary=4,O.storage=4):C.isVector2?(O.boundary=8,O.storage=8):C.isVector3||C.isColor?(O.boundary=16,O.storage=12):C.isVector4?(O.boundary=16,O.storage=16):C.isMatrix3?(O.boundary=48,O.storage=48):C.isMatrix4?(O.boundary=64,O.storage=64):C.isTexture?st("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(C)?(O.boundary=16,O.storage=C.byteLength):st("WebGLRenderer: Unsupported uniform value type.",C),O}function F(C){const O=C.target;O.removeEventListener("dispose",F);const U=u.indexOf(O.__bindingPointIndex);u.splice(U,1),s.deleteBuffer(l[O.id]),delete l[O.id],delete c[O.id]}function z(){for(const C in l)s.deleteBuffer(l[C]);u=[],l={},c={}}return{bind:p,update:m,dispose:z}}const d2=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ji=null;function h2(){return Ji===null&&(Ji=new iE(d2,16,16,Js,Pa),Ji.name="DFG_LUT",Ji.minFilter=yn,Ji.magFilter=yn,Ji.wrapS=Vi,Ji.wrapT=Vi,Ji.generateMipmaps=!1,Ji.needsUpdate=!0),Ji}class p2{constructor(e={}){const{canvas:i=vy(),context:r=null,depth:l=!0,stencil:c=!1,alpha:u=!1,antialias:h=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:g=!1,outputBufferType:S=wi}=e;this.isWebGLRenderer=!0;let b;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=r.getContextAttributes().alpha}else b=u;const w=S,y=new Set([dp,fp,up]),M=new Set([wi,ra,fl,dl,lp,cp]),F=new Uint32Array(4),z=new Int32Array(4),C=new $;let O=null,U=null;const P=[],T=[];let L=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ia,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const Y=this;let V=!1,Q=null,pe=null,de=null,J=null;this._outputColorSpace=jn;let I=0,G=0,ee=null,_e=-1,be=null;const N=new cn,Z=new cn;let Ee=null;const Ce=new Dt(0);let Le=0,ie=i.width,Se=i.height,Me=1,ze=null,nt=null;const Qe=new cn(0,0,ie,Se),Yt=new cn(0,0,ie,Se);let ct=!1;const _t=new qv;let Ye=!1,Ze=!1;const rt=new hn,pt=new $,Ct=new cn,wt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ut=!1;function gt(){return ee===null?Me:1}let X=r;function St(A,q){return i.getContext(A,q)}try{const A={alpha:!0,depth:l,stencil:c,antialias:h,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:_,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${rp}`),i.addEventListener("webglcontextlost",Ht,!1),i.addEventListener("webglcontextrestored",Ut,!1),i.addEventListener("webglcontextcreationerror",Wn,!1),X===null){const q="webgl2";if(X=St(q,A),X===null)throw St(q)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(A){throw Nt("WebGLRenderer: "+A.message),A}let vt,D,E,j,te,ue,Re,De,fe,he,Te,Be,Ue,Ne,Je,Ke,at,W,Ae,me,we,Pe,ye;function Xe(){vt=new h1(X),vt.init(),we=new a2(X,vt),D=new s1(X,vt,e,we),E=new n2(X,vt),D.reversedDepthBuffer&&g&&E.buffers.depth.setReversed(!0),pe=X.createFramebuffer(),de=X.createFramebuffer(),J=X.createFramebuffer(),j=new g1(X),te=new VA,ue=new i2(X,vt,E,te,D,we,j),Re=new d1(Y),De=new SE(X),Pe=new i1(X,De),fe=new p1(X,De,j,Pe),he=new v1(X,fe,De,Pe,j),W=new _1(X,D,ue),Je=new r1(te),Te=new GA(Y,Re,vt,D,Pe,Je),Be=new u2(Y,te),Ue=new XA,Ne=new jA(vt),at=new n1(Y,Re,E,he,b,p),Ke=new t2(Y,he,D),ye=new f2(X,j,D,E),Ae=new a1(X,vt,j),me=new m1(X,vt,j),j.programs=Te.programs,Y.capabilities=D,Y.extensions=vt,Y.properties=te,Y.renderLists=Ue,Y.shadowMap=Ke,Y.state=E,Y.info=j}Xe(),w!==wi&&(L=new S1(w,i.width,i.height,h,l,c));const He=new l2(Y,X);this.xr=He,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const A=vt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=vt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Me},this.setPixelRatio=function(A){A!==void 0&&(Me=A,this.setSize(ie,Se,!1))},this.getSize=function(A){return A.set(ie,Se)},this.setSize=function(A,q,oe=!0){if(He.isPresenting){st("WebGLRenderer: Can't change size while VR device is presenting.");return}ie=A,Se=q,i.width=Math.floor(A*Me),i.height=Math.floor(q*Me),oe===!0&&(i.style.width=A+"px",i.style.height=q+"px"),L!==null&&L.setSize(i.width,i.height),this.setViewport(0,0,A,q)},this.getDrawingBufferSize=function(A){return A.set(ie*Me,Se*Me).floor()},this.setDrawingBufferSize=function(A,q,oe){ie=A,Se=q,Me=oe,i.width=Math.floor(A*oe),i.height=Math.floor(q*oe),this.setViewport(0,0,A,q)},this.setEffects=function(A){if(w===wi){Nt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let q=0;q<A.length;q++)if(A[q].isOutputPass===!0){st("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}L.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(N)},this.getViewport=function(A){return A.copy(Qe)},this.setViewport=function(A,q,oe,se){A.isVector4?Qe.set(A.x,A.y,A.z,A.w):Qe.set(A,q,oe,se),E.viewport(N.copy(Qe).multiplyScalar(Me).round())},this.getScissor=function(A){return A.copy(Yt)},this.setScissor=function(A,q,oe,se){A.isVector4?Yt.set(A.x,A.y,A.z,A.w):Yt.set(A,q,oe,se),E.scissor(Z.copy(Yt).multiplyScalar(Me).round())},this.getScissorTest=function(){return ct},this.setScissorTest=function(A){E.setScissorTest(ct=A)},this.setOpaqueSort=function(A){ze=A},this.setTransparentSort=function(A){nt=A},this.getClearColor=function(A){return A.copy(at.getClearColor())},this.setClearColor=function(){at.setClearColor(...arguments)},this.getClearAlpha=function(){return at.getClearAlpha()},this.setClearAlpha=function(){at.setClearAlpha(...arguments)},this.clear=function(A=!0,q=!0,oe=!0){let se=0;if(A){let re=!1;if(ee!==null){const Ie=ee.texture.format;re=y.has(Ie)}if(re){const Ie=ee.texture.type,Ve=M.has(Ie),Oe=at.getClearColor(),We=at.getClearAlpha(),ke=Oe.r,et=Oe.g,ft=Oe.b;Ve?(F[0]=ke,F[1]=et,F[2]=ft,F[3]=We,X.clearBufferuiv(X.COLOR,0,F)):(z[0]=ke,z[1]=et,z[2]=ft,z[3]=We,X.clearBufferiv(X.COLOR,0,z))}else se|=X.COLOR_BUFFER_BIT}q&&(se|=X.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),oe&&(se|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),se!==0&&X.clear(se)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),Q=A},this.dispose=function(){i.removeEventListener("webglcontextlost",Ht,!1),i.removeEventListener("webglcontextrestored",Ut,!1),i.removeEventListener("webglcontextcreationerror",Wn,!1),at.dispose(),Ue.dispose(),Ne.dispose(),te.dispose(),Re.dispose(),he.dispose(),Pe.dispose(),ye.dispose(),Te.dispose(),He.dispose(),He.removeEventListener("sessionstart",Lt),He.removeEventListener("sessionend",en),Cn.stop()};function Ht(A){A.preventDefault(),y_("WebGLRenderer: Context Lost."),V=!0}function Ut(){y_("WebGLRenderer: Context Restored."),V=!1;const A=j.autoReset,q=Ke.enabled,oe=Ke.autoUpdate,se=Ke.needsUpdate,re=Ke.type;Xe(),j.autoReset=A,Ke.enabled=q,Ke.autoUpdate=oe,Ke.needsUpdate=se,Ke.type=re}function Wn(A){Nt("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Bn(A){const q=A.target;q.removeEventListener("dispose",Bn),Fa(q)}function Fa(A){pn(A),te.remove(A)}function pn(A){const q=te.get(A).programs;q!==void 0&&(q.forEach(function(oe){Te.releaseProgram(oe)}),A.isShaderMaterial&&Te.releaseShaderCache(A))}this.renderBufferDirect=function(A,q,oe,se,re,Ie){q===null&&(q=wt);const Ve=re.isMesh&&re.matrixWorld.determinantAffine()<0,Oe=Ga(A,q,oe,se,re);E.setMaterial(se,Ve);let We=oe.index,ke=1;if(se.wireframe===!0){if(We=fe.getWireframeAttribute(oe),We===void 0)return;ke=2}const et=oe.drawRange,ft=oe.attributes.position;let $e=et.start*ke,Ot=(et.start+et.count)*ke;Ie!==null&&($e=Math.max($e,Ie.start*ke),Ot=Math.min(Ot,(Ie.start+Ie.count)*ke)),We!==null?($e=Math.max($e,0),Ot=Math.min(Ot,We.count)):ft!=null&&($e=Math.max($e,0),Ot=Math.min(Ot,ft.count));const an=Ot-$e;if(an<0||an===1/0)return;Pe.setup(re,se,Oe,oe,We);let Qt,Gt=Ae;if(We!==null&&(Qt=De.get(We),Gt=me,Gt.setIndex(Qt)),re.isMesh)se.wireframe===!0?(E.setLineWidth(se.wireframeLinewidth*gt()),Gt.setMode(X.LINES)):Gt.setMode(X.TRIANGLES);else if(re.isLine){let Vt=se.linewidth;Vt===void 0&&(Vt=1),E.setLineWidth(Vt*gt()),re.isLineSegments?Gt.setMode(X.LINES):re.isLineLoop?Gt.setMode(X.LINE_LOOP):Gt.setMode(X.LINE_STRIP)}else re.isPoints?Gt.setMode(X.POINTS):re.isSprite&&Gt.setMode(X.TRIANGLES);if(re.isBatchedMesh)if(vt.get("WEBGL_multi_draw"))Gt.renderMultiDraw(re._multiDrawStarts,re._multiDrawCounts,re._multiDrawCount);else{const Vt=re._multiDrawStarts,Ge=re._multiDrawCounts,zn=re._multiDrawCount,Mt=We?De.get(We).bytesPerElement:1,bn=te.get(se).currentProgram.getUniforms();for(let oi=0;oi<zn;oi++)bn.setValue(X,"_gl_DrawID",oi),Gt.render(Vt[oi]/Mt,Ge[oi])}else if(re.isInstancedMesh)Gt.renderInstances($e,an,re.count);else if(oe.isInstancedBufferGeometry){const Vt=oe._maxInstanceCount!==void 0?oe._maxInstanceCount:1/0,Ge=Math.min(oe.instanceCount,Vt);Gt.renderInstances($e,an,Ge)}else Gt.render($e,an)};function En(A,q,oe){A.transparent===!0&&A.side===ea&&A.forceSinglePass===!1?(A.side=si,A.needsUpdate=!0,Ha(A,q,oe),A.side=Oa,A.needsUpdate=!0,Ha(A,q,oe),A.side=ea):Ha(A,q,oe)}this.compile=function(A,q,oe=null){oe===null&&(oe=A),U=Ne.get(oe),U.init(q),T.push(U),oe.traverseVisible(function(re){re.isLight&&re.layers.test(q.layers)&&(U.pushLight(re),re.castShadow&&U.pushShadow(re))}),A!==oe&&A.traverseVisible(function(re){re.isLight&&re.layers.test(q.layers)&&(U.pushLight(re),re.castShadow&&U.pushShadow(re))}),U.setupLights();const se=new Set;return A.traverse(function(re){if(!(re.isMesh||re.isPoints||re.isLine||re.isSprite))return;const Ie=re.material;if(Ie)if(Array.isArray(Ie))for(let Ve=0;Ve<Ie.length;Ve++){const Oe=Ie[Ve];En(Oe,oe,re),se.add(Oe)}else En(Ie,oe,re),se.add(Ie)}),U=T.pop(),se},this.compileAsync=function(A,q,oe=null){const se=this.compile(A,q,oe);return new Promise(re=>{function Ie(){if(se.forEach(function(Ve){te.get(Ve).currentProgram.isReady()&&se.delete(Ve)}),se.size===0){re(A);return}setTimeout(Ie,10)}vt.get("KHR_parallel_shader_compile")!==null?Ie():setTimeout(Ie,10)})};let ri=null;function mn(A){ri&&ri(A)}function Lt(){Cn.stop()}function en(){Cn.start()}const Cn=new $v;Cn.setAnimationLoop(mn),typeof self<"u"&&Cn.setContext(self),this.setAnimationLoop=function(A){ri=A,He.setAnimationLoop(A),A===null?Cn.stop():Cn.start()},He.addEventListener("sessionstart",Lt),He.addEventListener("sessionend",en),this.render=function(A,q){if(q!==void 0&&q.isCamera!==!0){Nt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(V===!0)return;Q!==null&&Q.renderStart(A,q);const oe=He.enabled===!0&&He.isPresenting===!0,se=L!==null&&(ee===null||oe)&&L.begin(Y,ee);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),He.enabled===!0&&He.isPresenting===!0&&(L===null||L.isCompositing()===!1)&&(He.cameraAutoUpdate===!0&&He.updateCamera(q),q=He.getCamera()),A.isScene===!0&&A.onBeforeRender(Y,A,q,ee),U=Ne.get(A,T.length),U.init(q),U.state.textureUnits=ue.getTextureUnits(),T.push(U),rt.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),_t.setFromProjectionMatrix(rt,na,q.reversedDepth),Ze=this.localClippingEnabled,Ye=Je.init(this.clippingPlanes,Ze),O=Ue.get(A,P.length),O.init(),P.push(O),He.enabled===!0&&He.isPresenting===!0){const Ve=Y.xr.getDepthSensingMesh();Ve!==null&&Qn(Ve,q,-1/0,Y.sortObjects)}Qn(A,q,0,Y.sortObjects),O.finish(),Y.sortObjects===!0&&O.sort(ze,nt,q.reversedDepth),ut=He.enabled===!1||He.isPresenting===!1||He.hasDepthSensing()===!1,ut&&at.addToRenderList(O,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ye===!0&&Je.beginShadows();const re=U.state.shadowsArray;if(Ke.render(re,A,q),Ye===!0&&Je.endShadows(),(se&&L.hasRenderPass())===!1){const Ve=O.opaque,Oe=O.transmissive;if(U.setupLights(),q.isArrayCamera){const We=q.cameras;if(Oe.length>0)for(let ke=0,et=We.length;ke<et;ke++){const ft=We[ke];Ba(Ve,Oe,A,ft)}ut&&at.render(A);for(let ke=0,et=We.length;ke<et;ke++){const ft=We[ke];Ms(O,A,ft,ft.viewport)}}else Oe.length>0&&Ba(Ve,Oe,A,q),ut&&at.render(A),Ms(O,A,q)}ee!==null&&G===0&&(ue.updateMultisampleRenderTarget(ee),ue.updateRenderTargetMipmap(ee)),se&&L.end(Y),A.isScene===!0&&A.onAfterRender(Y,A,q),Pe.resetDefaultState(),_e=-1,be=null,T.pop(),T.length>0?(U=T[T.length-1],ue.setTextureUnits(U.state.textureUnits),Ye===!0&&Je.setGlobalState(Y.clippingPlanes,U.state.camera)):U=null,P.pop(),P.length>0?O=P[P.length-1]:O=null,Q!==null&&Q.renderEnd()};function Qn(A,q,oe,se){if(A.visible===!1)return;if(A.layers.test(q.layers)){if(A.isGroup)oe=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(q);else if(A.isLightProbeGrid)U.pushLightProbeGrid(A);else if(A.isLight)U.pushLight(A),A.castShadow&&U.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||_t.intersectsSprite(A)){se&&Ct.setFromMatrixPosition(A.matrixWorld).applyMatrix4(rt);const Ve=he.update(A),Oe=A.material;Oe.visible&&O.push(A,Ve,Oe,oe,Ct.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||_t.intersectsObject(A))){const Ve=he.update(A),Oe=A.material;if(se&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ct.copy(A.boundingSphere.center)):(Ve.boundingSphere===null&&Ve.computeBoundingSphere(),Ct.copy(Ve.boundingSphere.center)),Ct.applyMatrix4(A.matrixWorld).applyMatrix4(rt)),Array.isArray(Oe)){const We=Ve.groups;for(let ke=0,et=We.length;ke<et;ke++){const ft=We[ke],$e=Oe[ft.materialIndex];$e&&$e.visible&&O.push(A,Ve,$e,oe,Ct.z,ft)}}else Oe.visible&&O.push(A,Ve,Oe,oe,Ct.z,null)}}const Ie=A.children;for(let Ve=0,Oe=Ie.length;Ve<Oe;Ve++)Qn(Ie[Ve],q,oe,se)}function Ms(A,q,oe,se){const{opaque:re,transmissive:Ie,transparent:Ve}=A;U.setupLightsView(oe),Ye===!0&&Je.setGlobalState(Y.clippingPlanes,oe),se&&E.viewport(N.copy(se)),re.length>0&&Wi(re,q,oe),Ie.length>0&&Wi(Ie,q,oe),Ve.length>0&&Wi(Ve,q,oe),E.buffers.depth.setTest(!0),E.buffers.depth.setMask(!0),E.buffers.color.setMask(!0),E.setPolygonOffset(!1)}function Ba(A,q,oe,se){if((oe.isScene===!0?oe.overrideMaterial:null)!==null)return;if(U.state.transmissionRenderTarget[se.id]===void 0){const $e=vt.has("EXT_color_buffer_half_float")||vt.has("EXT_color_buffer_float");U.state.transmissionRenderTarget[se.id]=new aa(1,1,{generateMipmaps:!0,type:$e?Pa:wi,minFilter:xs,samples:Math.max(4,D.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Rt.workingColorSpace})}const Ie=U.state.transmissionRenderTarget[se.id],Ve=se.viewport||N;Ie.setSize(Ve.z*Y.transmissionResolutionScale,Ve.w*Y.transmissionResolutionScale);const Oe=Y.getRenderTarget(),We=Y.getActiveCubeFace(),ke=Y.getActiveMipmapLevel();Y.setRenderTarget(Ie),Y.getClearColor(Ce),Le=Y.getClearAlpha(),Le<1&&Y.setClearColor(16777215,.5),Y.clear(),ut&&at.render(oe);const et=Y.toneMapping;Y.toneMapping=ia;const ft=se.viewport;if(se.viewport!==void 0&&(se.viewport=void 0),U.setupLightsView(se),Ye===!0&&Je.setGlobalState(Y.clippingPlanes,se),Wi(A,oe,se),ue.updateMultisampleRenderTarget(Ie),ue.updateRenderTargetMipmap(Ie),vt.has("WEBGL_multisampled_render_to_texture")===!1){let $e=!1;for(let Ot=0,an=q.length;Ot<an;Ot++){const Qt=q[Ot],{object:Gt,geometry:Vt,material:Ge,group:zn}=Qt;if(Ge.side===ea&&Gt.layers.test(se.layers)){const Mt=Ge.side;Ge.side=si,Ge.needsUpdate=!0,za(Gt,oe,se,Vt,Ge,zn),Ge.side=Mt,Ge.needsUpdate=!0,$e=!0}}$e===!0&&(ue.updateMultisampleRenderTarget(Ie),ue.updateRenderTargetMipmap(Ie))}Y.setRenderTarget(Oe,We,ke),Y.setClearColor(Ce,Le),ft!==void 0&&(se.viewport=ft),Y.toneMapping=et}function Wi(A,q,oe){const se=q.isScene===!0?q.overrideMaterial:null;for(let re=0,Ie=A.length;re<Ie;re++){const Ve=A[re],{object:Oe,geometry:We,group:ke}=Ve;let et=Ve.material;et.allowOverride===!0&&se!==null&&(et=se),Oe.layers.test(oe.layers)&&za(Oe,q,oe,We,et,ke)}}function za(A,q,oe,se,re,Ie){A.onBeforeRender(Y,q,oe,se,re,Ie),A.modelViewMatrix.multiplyMatrices(oe.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),re.onBeforeRender(Y,q,oe,se,A,Ie),re.transparent===!0&&re.side===ea&&re.forceSinglePass===!1?(re.side=si,re.needsUpdate=!0,Y.renderBufferDirect(oe,q,se,re,A,Ie),re.side=Oa,re.needsUpdate=!0,Y.renderBufferDirect(oe,q,se,re,A,Ie),re.side=ea):Y.renderBufferDirect(oe,q,se,re,A,Ie),A.onAfterRender(Y,q,oe,se,re,Ie)}function Ha(A,q,oe){q.isScene!==!0&&(q=wt);const se=te.get(A),re=U.state.lights,Ie=U.state.shadowsArray,Ve=re.state.version,Oe=Te.getParameters(A,re.state,Ie,q,oe,U.state.lightProbeGridArray),We=Te.getProgramCacheKey(Oe);let ke=se.programs;se.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?q.environment:null,se.fog=q.fog;const et=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;se.envMap=Re.get(A.envMap||se.environment,et),se.envMapRotation=se.environment!==null&&A.envMap===null?q.environmentRotation:A.envMapRotation,ke===void 0&&(A.addEventListener("dispose",Bn),ke=new Map,se.programs=ke);let ft=ke.get(We);if(ft!==void 0){if(se.currentProgram===ft&&se.lightsStateVersion===Ve)return la(A,Oe),ft}else Oe.uniforms=Te.getUniforms(A),Q!==null&&A.isNodeMaterial&&Q.build(A,oe,Oe),A.onBeforeCompile(Oe,Y),ft=Te.acquireProgram(Oe,We),ke.set(We,ft),se.uniforms=Oe.uniforms;const $e=se.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&($e.clippingPlanes=Je.uniform),la(A,Oe),se.needsLights=_l(A),se.lightsStateVersion=Ve,se.needsLights&&($e.ambientLightColor.value=re.state.ambient,$e.lightProbe.value=re.state.probe,$e.directionalLights.value=re.state.directional,$e.directionalLightShadows.value=re.state.directionalShadow,$e.spotLights.value=re.state.spot,$e.spotLightShadows.value=re.state.spotShadow,$e.rectAreaLights.value=re.state.rectArea,$e.ltc_1.value=re.state.rectAreaLTC1,$e.ltc_2.value=re.state.rectAreaLTC2,$e.pointLights.value=re.state.point,$e.pointLightShadows.value=re.state.pointShadow,$e.hemisphereLights.value=re.state.hemi,$e.directionalShadowMatrix.value=re.state.directionalShadowMatrix,$e.spotLightMatrix.value=re.state.spotLightMatrix,$e.spotLightMap.value=re.state.spotLightMap,$e.pointShadowMatrix.value=re.state.pointShadowMatrix),se.lightProbeGrid=U.state.lightProbeGridArray.length>0,se.currentProgram=ft,se.uniformsList=null,ft}function oa(A){if(A.uniformsList===null){const q=A.currentProgram.getUniforms();A.uniformsList=tu.seqWithValue(q.seq,A.uniforms)}return A.uniformsList}function la(A,q){const oe=te.get(A);oe.outputColorSpace=q.outputColorSpace,oe.batching=q.batching,oe.batchingColor=q.batchingColor,oe.instancing=q.instancing,oe.instancingColor=q.instancingColor,oe.instancingMorph=q.instancingMorph,oe.skinning=q.skinning,oe.morphTargets=q.morphTargets,oe.morphNormals=q.morphNormals,oe.morphColors=q.morphColors,oe.morphTargetsCount=q.morphTargetsCount,oe.numClippingPlanes=q.numClippingPlanes,oe.numIntersection=q.numClipIntersection,oe.vertexAlphas=q.vertexAlphas,oe.vertexTangents=q.vertexTangents,oe.toneMapping=q.toneMapping}function ys(A,q){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;C.setFromMatrixPosition(q.matrixWorld);for(let oe=0,se=A.length;oe<se;oe++){const re=A[oe];if(re.texture!==null&&re.boundingBox.containsPoint(C))return re}return null}function Ga(A,q,oe,se,re){q.isScene!==!0&&(q=wt),ue.resetTextureUnits();const Ie=q.fog,Ve=se.isMeshStandardMaterial||se.isMeshLambertMaterial||se.isMeshPhongMaterial?q.environment:null,Oe=ee===null?Y.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:Rt.workingColorSpace,We=se.isMeshStandardMaterial||se.isMeshLambertMaterial&&!se.envMap||se.isMeshPhongMaterial&&!se.envMap,ke=Re.get(se.envMap||Ve,We),et=se.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,ft=!!oe.attributes.tangent&&(!!se.normalMap||se.anisotropy>0),$e=!!oe.morphAttributes.position,Ot=!!oe.morphAttributes.normal,an=!!oe.morphAttributes.color;let Qt=ia;se.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(Qt=Y.toneMapping);const Gt=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,Vt=Gt!==void 0?Gt.length:0,Ge=te.get(se),zn=U.state.lights;if(Ye===!0&&(Ze===!0||A!==be)){const zt=A===be&&se.id===_e;Je.setState(se,A,zt)}let Mt=!1;se.version===Ge.__version?(Ge.needsLights&&Ge.lightsStateVersion!==zn.state.version||Ge.outputColorSpace!==Oe||re.isBatchedMesh&&Ge.batching===!1||!re.isBatchedMesh&&Ge.batching===!0||re.isBatchedMesh&&Ge.batchingColor===!0&&re.colorTexture===null||re.isBatchedMesh&&Ge.batchingColor===!1&&re.colorTexture!==null||re.isInstancedMesh&&Ge.instancing===!1||!re.isInstancedMesh&&Ge.instancing===!0||re.isSkinnedMesh&&Ge.skinning===!1||!re.isSkinnedMesh&&Ge.skinning===!0||re.isInstancedMesh&&Ge.instancingColor===!0&&re.instanceColor===null||re.isInstancedMesh&&Ge.instancingColor===!1&&re.instanceColor!==null||re.isInstancedMesh&&Ge.instancingMorph===!0&&re.morphTexture===null||re.isInstancedMesh&&Ge.instancingMorph===!1&&re.morphTexture!==null||Ge.envMap!==ke||se.fog===!0&&Ge.fog!==Ie||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==Je.numPlanes||Ge.numIntersection!==Je.numIntersection)||Ge.vertexAlphas!==et||Ge.vertexTangents!==ft||Ge.morphTargets!==$e||Ge.morphNormals!==Ot||Ge.morphColors!==an||Ge.toneMapping!==Qt||Ge.morphTargetsCount!==Vt||!!Ge.lightProbeGrid!=U.state.lightProbeGridArray.length>0)&&(Mt=!0):(Mt=!0,Ge.__version=se.version);let bn=Ge.currentProgram;Mt===!0&&(bn=Ha(se,q,re),Q&&se.isNodeMaterial&&Q.onUpdateProgram(se,bn,Ge));let oi=!1,Li=!1,li=!1;const kt=bn.getUniforms(),sn=Ge.uniforms;if(E.useProgram(bn.program)&&(oi=!0,Li=!0,li=!0),se.id!==_e&&(_e=se.id,Li=!0),Ge.needsLights){const zt=ys(U.state.lightProbeGridArray,re);Ge.lightProbeGrid!==zt&&(Ge.lightProbeGrid=zt,Li=!0)}if(oi||be!==A){E.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),kt.setValue(X,"projectionMatrix",A.projectionMatrix),kt.setValue(X,"viewMatrix",A.matrixWorldInverse);const qi=kt.map.cameraPosition;qi!==void 0&&qi.setValue(X,pt.setFromMatrixPosition(A.matrixWorld)),D.logarithmicDepthBuffer&&kt.setValue(X,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(se.isMeshPhongMaterial||se.isMeshToonMaterial||se.isMeshLambertMaterial||se.isMeshBasicMaterial||se.isMeshStandardMaterial||se.isShaderMaterial)&&kt.setValue(X,"isOrthographic",A.isOrthographicCamera===!0),be!==A&&(be=A,Li=!0,li=!0)}if(Ge.needsLights&&(zn.state.directionalShadowMap.length>0&&kt.setValue(X,"directionalShadowMap",zn.state.directionalShadowMap,ue),zn.state.spotShadowMap.length>0&&kt.setValue(X,"spotShadowMap",zn.state.spotShadowMap,ue),zn.state.pointShadowMap.length>0&&kt.setValue(X,"pointShadowMap",zn.state.pointShadowMap,ue)),re.isSkinnedMesh){kt.setOptional(X,re,"bindMatrix"),kt.setOptional(X,re,"bindMatrixInverse");const zt=re.skeleton;zt&&(zt.boneTexture===null&&zt.computeBoneTexture(),kt.setValue(X,"boneTexture",zt.boneTexture,ue))}re.isBatchedMesh&&(kt.setOptional(X,re,"batchingTexture"),kt.setValue(X,"batchingTexture",re._matricesTexture,ue),kt.setOptional(X,re,"batchingIdTexture"),kt.setValue(X,"batchingIdTexture",re._indirectTexture,ue),kt.setOptional(X,re,"batchingColorTexture"),re._colorsTexture!==null&&kt.setValue(X,"batchingColorTexture",re._colorsTexture,ue));const Oi=oe.morphAttributes;if((Oi.position!==void 0||Oi.normal!==void 0||Oi.color!==void 0)&&W.update(re,oe,bn),(Li||Ge.receiveShadow!==re.receiveShadow)&&(Ge.receiveShadow=re.receiveShadow,kt.setValue(X,"receiveShadow",re.receiveShadow)),(se.isMeshStandardMaterial||se.isMeshLambertMaterial||se.isMeshPhongMaterial)&&se.envMap===null&&q.environment!==null&&(sn.envMapIntensity.value=q.environmentIntensity),sn.dfgLUT!==void 0&&(sn.dfgLUT.value=h2()),Li){if(kt.setValue(X,"toneMappingExposure",Y.toneMappingExposure),Ge.needsLights&&gn(sn,li),Ie&&se.fog===!0&&Be.refreshFogUniforms(sn,Ie),Be.refreshMaterialUniforms(sn,se,Me,Se,U.state.transmissionRenderTarget[A.id]),Ge.needsLights&&Ge.lightProbeGrid){const zt=Ge.lightProbeGrid;sn.probesSH.value=zt.texture,sn.probesMin.value.copy(zt.boundingBox.min),sn.probesMax.value.copy(zt.boundingBox.max),sn.probesResolution.value.copy(zt.resolution)}tu.upload(X,oa(Ge),sn,ue)}if(se.isShaderMaterial&&se.uniformsNeedUpdate===!0&&(tu.upload(X,oa(Ge),sn,ue),se.uniformsNeedUpdate=!1),se.isSpriteMaterial&&kt.setValue(X,"center",re.center),kt.setValue(X,"modelViewMatrix",re.modelViewMatrix),kt.setValue(X,"normalMatrix",re.normalMatrix),kt.setValue(X,"modelMatrix",re.matrixWorld),se.uniformsGroups!==void 0){const zt=se.uniformsGroups;for(let qi=0,Va=zt.length;qi<Va;qi++){const Es=zt[qi];ye.update(Es,bn),ye.bind(Es,bn)}}return bn}function gn(A,q){A.ambientLightColor.needsUpdate=q,A.lightProbe.needsUpdate=q,A.directionalLights.needsUpdate=q,A.directionalLightShadows.needsUpdate=q,A.pointLights.needsUpdate=q,A.pointLightShadows.needsUpdate=q,A.spotLights.needsUpdate=q,A.spotLightShadows.needsUpdate=q,A.rectAreaLights.needsUpdate=q,A.hemisphereLights.needsUpdate=q}function _l(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return ee},this.setRenderTargetTextures=function(A,q,oe){const se=te.get(A);se.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,se.__autoAllocateDepthBuffer===!1&&(se.__useRenderToTexture=!1),te.get(A.texture).__webglTexture=q,te.get(A.depthTexture).__webglTexture=se.__autoAllocateDepthBuffer?void 0:oe,se.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,q){const oe=te.get(A);oe.__webglFramebuffer=q,oe.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(A,q=0,oe=0){ee=A,I=q,G=oe;let se=null,re=!1,Ie=!1;if(A){const Oe=te.get(A);if(Oe.__useDefaultFramebuffer!==void 0){E.bindFramebuffer(X.FRAMEBUFFER,Oe.__webglFramebuffer),N.copy(A.viewport),Z.copy(A.scissor),Ee=A.scissorTest,E.viewport(N),E.scissor(Z),E.setScissorTest(Ee),_e=-1;return}else if(Oe.__webglFramebuffer===void 0)ue.setupRenderTarget(A);else if(Oe.__hasExternalTextures)ue.rebindTextures(A,te.get(A.texture).__webglTexture,te.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const et=A.depthTexture;if(Oe.__boundDepthTexture!==et){if(et!==null&&te.has(et)&&(A.width!==et.image.width||A.height!==et.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ue.setupDepthRenderbuffer(A)}}const We=A.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(Ie=!0);const ke=te.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(ke[q])?se=ke[q][oe]:se=ke[q],re=!0):A.samples>0&&ue.useMultisampledRTT(A)===!1?se=te.get(A).__webglMultisampledFramebuffer:Array.isArray(ke)?se=ke[oe]:se=ke,N.copy(A.viewport),Z.copy(A.scissor),Ee=A.scissorTest}else N.copy(Qe).multiplyScalar(Me).floor(),Z.copy(Yt).multiplyScalar(Me).floor(),Ee=ct;if(oe!==0&&(se=pe),E.bindFramebuffer(X.FRAMEBUFFER,se)&&E.drawBuffers(A,se),E.viewport(N),E.scissor(Z),E.setScissorTest(Ee),re){const Oe=te.get(A.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+q,Oe.__webglTexture,oe)}else if(Ie){const Oe=q;for(let We=0;We<A.textures.length;We++){const ke=te.get(A.textures[We]);X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0+We,ke.__webglTexture,oe,Oe)}}else if(A!==null&&oe!==0){const Oe=te.get(A.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,Oe.__webglTexture,oe)}_e=-1},this.readRenderTargetPixels=function(A,q,oe,se,re,Ie,Ve,Oe=0){if(!(A&&A.isWebGLRenderTarget)){Nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let We=te.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ve!==void 0&&(We=We[Ve]),We){E.bindFramebuffer(X.FRAMEBUFFER,We);try{const ke=A.textures[Oe],et=ke.format,ft=ke.type;if(A.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+Oe),!D.textureFormatReadable(et)){Nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!D.textureTypeReadable(ft)){Nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=A.width-se&&oe>=0&&oe<=A.height-re&&X.readPixels(q,oe,se,re,we.convert(et),we.convert(ft),Ie)}finally{const ke=ee!==null?te.get(ee).__webglFramebuffer:null;E.bindFramebuffer(X.FRAMEBUFFER,ke)}}},this.readRenderTargetPixelsAsync=async function(A,q,oe,se,re,Ie,Ve,Oe=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let We=te.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ve!==void 0&&(We=We[Ve]),We)if(q>=0&&q<=A.width-se&&oe>=0&&oe<=A.height-re){E.bindFramebuffer(X.FRAMEBUFFER,We);const ke=A.textures[Oe],et=ke.format,ft=ke.type;if(A.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+Oe),!D.textureFormatReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!D.textureTypeReadable(ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const $e=X.createBuffer();X.bindBuffer(X.PIXEL_PACK_BUFFER,$e),X.bufferData(X.PIXEL_PACK_BUFFER,Ie.byteLength,X.STREAM_READ),X.readPixels(q,oe,se,re,we.convert(et),we.convert(ft),0);const Ot=ee!==null?te.get(ee).__webglFramebuffer:null;E.bindFramebuffer(X.FRAMEBUFFER,Ot);const an=X.fenceSync(X.SYNC_GPU_COMMANDS_COMPLETE,0);return X.flush(),await xy(X,an,4),X.bindBuffer(X.PIXEL_PACK_BUFFER,$e),X.getBufferSubData(X.PIXEL_PACK_BUFFER,0,Ie),X.deleteBuffer($e),X.deleteSync(an),Ie}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,q=null,oe=0){const se=Math.pow(2,-oe),re=Math.floor(A.image.width*se),Ie=Math.floor(A.image.height*se),Ve=q!==null?q.x:0,Oe=q!==null?q.y:0;ue.setTexture2D(A,0),X.copyTexSubImage2D(X.TEXTURE_2D,oe,0,0,Ve,Oe,re,Ie),E.unbindTexture()},this.copyTextureToTexture=function(A,q,oe=null,se=null,re=0,Ie=0){let Ve,Oe,We,ke,et,ft,$e,Ot,an;const Qt=A.isCompressedTexture?A.mipmaps[Ie]:A.image;if(oe!==null)Ve=oe.max.x-oe.min.x,Oe=oe.max.y-oe.min.y,We=oe.isBox3?oe.max.z-oe.min.z:1,ke=oe.min.x,et=oe.min.y,ft=oe.isBox3?oe.min.z:0;else{const sn=Math.pow(2,-re);Ve=Math.floor(Qt.width*sn),Oe=Math.floor(Qt.height*sn),A.isDataArrayTexture?We=Qt.depth:A.isData3DTexture?We=Math.floor(Qt.depth*sn):We=1,ke=0,et=0,ft=0}se!==null?($e=se.x,Ot=se.y,an=se.z):($e=0,Ot=0,an=0);const Gt=we.convert(q.format),Vt=we.convert(q.type);let Ge;q.isData3DTexture?(ue.setTexture3D(q,0),Ge=X.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(ue.setTexture2DArray(q,0),Ge=X.TEXTURE_2D_ARRAY):(ue.setTexture2D(q,0),Ge=X.TEXTURE_2D),E.activeTexture(X.TEXTURE0),E.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,q.flipY),E.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),E.pixelStorei(X.UNPACK_ALIGNMENT,q.unpackAlignment);const zn=E.getParameter(X.UNPACK_ROW_LENGTH),Mt=E.getParameter(X.UNPACK_IMAGE_HEIGHT),bn=E.getParameter(X.UNPACK_SKIP_PIXELS),oi=E.getParameter(X.UNPACK_SKIP_ROWS),Li=E.getParameter(X.UNPACK_SKIP_IMAGES);E.pixelStorei(X.UNPACK_ROW_LENGTH,Qt.width),E.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Qt.height),E.pixelStorei(X.UNPACK_SKIP_PIXELS,ke),E.pixelStorei(X.UNPACK_SKIP_ROWS,et),E.pixelStorei(X.UNPACK_SKIP_IMAGES,ft);const li=A.isDataArrayTexture||A.isData3DTexture,kt=q.isDataArrayTexture||q.isData3DTexture;if(A.isDepthTexture){const sn=te.get(A),Oi=te.get(q),zt=te.get(sn.__renderTarget),qi=te.get(Oi.__renderTarget);E.bindFramebuffer(X.READ_FRAMEBUFFER,zt.__webglFramebuffer),E.bindFramebuffer(X.DRAW_FRAMEBUFFER,qi.__webglFramebuffer);for(let Va=0;Va<We;Va++)li&&(X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,te.get(A).__webglTexture,re,ft+Va),X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,te.get(q).__webglTexture,Ie,an+Va)),X.blitFramebuffer(ke,et,Ve,Oe,$e,Ot,Ve,Oe,X.DEPTH_BUFFER_BIT,X.NEAREST);E.bindFramebuffer(X.READ_FRAMEBUFFER,null),E.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else if(re!==0||A.isRenderTargetTexture||te.has(A)){const sn=te.get(A),Oi=te.get(q);E.bindFramebuffer(X.READ_FRAMEBUFFER,de),E.bindFramebuffer(X.DRAW_FRAMEBUFFER,J);for(let zt=0;zt<We;zt++)li?X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,sn.__webglTexture,re,ft+zt):X.framebufferTexture2D(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,sn.__webglTexture,re),kt?X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,Oi.__webglTexture,Ie,an+zt):X.framebufferTexture2D(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,Oi.__webglTexture,Ie),re!==0?X.blitFramebuffer(ke,et,Ve,Oe,$e,Ot,Ve,Oe,X.COLOR_BUFFER_BIT,X.NEAREST):kt?X.copyTexSubImage3D(Ge,Ie,$e,Ot,an+zt,ke,et,Ve,Oe):X.copyTexSubImage2D(Ge,Ie,$e,Ot,ke,et,Ve,Oe);E.bindFramebuffer(X.READ_FRAMEBUFFER,null),E.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else kt?A.isDataTexture||A.isData3DTexture?X.texSubImage3D(Ge,Ie,$e,Ot,an,Ve,Oe,We,Gt,Vt,Qt.data):q.isCompressedArrayTexture?X.compressedTexSubImage3D(Ge,Ie,$e,Ot,an,Ve,Oe,We,Gt,Qt.data):X.texSubImage3D(Ge,Ie,$e,Ot,an,Ve,Oe,We,Gt,Vt,Qt):A.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,Ie,$e,Ot,Ve,Oe,Gt,Vt,Qt.data):A.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,Ie,$e,Ot,Qt.width,Qt.height,Gt,Qt.data):X.texSubImage2D(X.TEXTURE_2D,Ie,$e,Ot,Ve,Oe,Gt,Vt,Qt);E.pixelStorei(X.UNPACK_ROW_LENGTH,zn),E.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Mt),E.pixelStorei(X.UNPACK_SKIP_PIXELS,bn),E.pixelStorei(X.UNPACK_SKIP_ROWS,oi),E.pixelStorei(X.UNPACK_SKIP_IMAGES,Li),Ie===0&&q.generateMipmaps&&X.generateMipmap(Ge),E.unbindTexture()},this.initRenderTarget=function(A){te.get(A).__webglFramebuffer===void 0&&ue.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?ue.setTextureCube(A,0):A.isData3DTexture?ue.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?ue.setTexture2DArray(A,0):ue.setTexture2D(A,0),E.unbindTexture()},this.resetState=function(){I=0,G=0,ee=null,E.reset(),Pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return na}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Rt._getDrawingBufferColorSpace(e),i.unpackColorSpace=Rt._getUnpackColorSpace()}}const m2="/assets/Reckk-RegularItalic-DLM8ilig.ttf",g2="/assets/Reckk-MediumItalic-D_uyfX4p.otf",_2="/assets/CXLMediumItalic-DYSp-DoC.otf",v2=4,x2=5,ai={fleet:"MAEX",name:"SharpeShark",version:"v1",role:"Executor",handle:"@sharpeshark",didShort:"0xf8a2…6035"};function ox(s){return["discover","copy","supervise","isolate"][s]??"discover"}function S2(s){return ox(s)}function M2(s,e,i){const r=e.split(/\s+/),l=[];let c="";for(const u of r){const h=c?`${c} ${u}`:u;s.measureText(h).width<=i?c=h:(c&&l.push(c),c=u)}return c&&l.push(c),l}function y2(s,e){const r=e<520?300:400,l=Math.round(r*s),c=Math.round(l*x2/v2);return{W:l,H:c}}function lx(s,e,i,r,l,c){const u=Math.min(c,r/2,l/2);s.beginPath(),s.moveTo(e+u,i),s.arcTo(e+r,i,e+r,i+l,u),s.arcTo(e+r,i+l,e,i+l,u),s.arcTo(e,i+l,e,i,u),s.arcTo(e,i,e+r,i,u),s.closePath()}function Xn(s,e,i,r,l,c,u){lx(s,e,i,r,l,c),s.fillStyle=u,s.fill()}function Nn(s,e,i,r,l,c,u,h){lx(s,e,i,r,l,c),s.strokeStyle=u,s.lineWidth=h,s.stroke()}function pu(s,e,i,r,l,c){Xn(s,e,i,r,l,c,"#0c0e12"),Nn(s,e,i,r,l,c,"rgba(255,255,255,0.12)",Math.max(1,c*.12))}function mu(s,e,i,r,l,c,u){const h=11*u;s.fillStyle="#c8f5a8",s.font=`700 ${h}px "DM Mono", ui-monospace, monospace`,s.textAlign="left",s.fillText(c,e+l,i+l+h);const p=22*u,m=e+r-l-p,_=i+l-2*u;return Nn(s,m,_,p,p,4*u,"rgba(255,255,255,0.14)",1),s.strokeStyle="rgba(255,255,255,0.55)",s.lineWidth=Math.max(1,1.25*u),s.beginPath(),s.moveTo(m+6*u,_+6*u),s.lineTo(m+p-6*u,_+p-6*u),s.moveTo(m+p-6*u,_+6*u),s.lineTo(m+6*u,_+p-6*u),s.stroke(),i+l+h+10*u}function gu(s,e,i,r,l,c,u,h){const p=28*h,m=(r-l*2)/2,_=10*h;s.font=`700 ${_}px "DM Mono", ui-monospace, monospace`;for(let v=0;v<2;v++){const g=e+l+v*m,S=v===u;s.fillStyle=S?"rgba(255,255,255,0.92)":"rgba(255,255,255,0.38)",s.textAlign="center",s.fillText(c[v],g+m/2,i+14*h),S&&(s.fillStyle="#c8f5a8",s.fillRect(g+4*h,i+p-2*h,m-8*h,2*h))}return s.textAlign="left",s.strokeStyle="rgba(255,255,255,0.08)",s.lineWidth=1,s.beginPath(),s.moveTo(e+l,i+p),s.lineTo(e+r-l,i+p),s.stroke(),i+p+10*h}function E2(s,e,i,r,l,c,u){const h=9*u;s.fillStyle="rgba(255,255,255,0.38)",s.font=`700 ${h}px "DM Mono", ui-monospace, monospace`,s.textAlign="left",s.fillText(l,e,i+h);const p=i+h+6*u,m=34*u;Xn(s,e,p,r,m,6*u,"rgba(255,255,255,0.04)"),Nn(s,e,p,r,m,6*u,"rgba(255,255,255,0.12)",1),s.fillStyle=c.startsWith("Select")||c==="0x..."?"rgba(255,255,255,0.35)":"rgba(255,255,255,0.88)",s.font=`500 ${11*u}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,s.fillText(c,e+10*u,p+m*.62),s.strokeStyle="rgba(255,255,255,0.4)",s.lineWidth=Math.max(1,1.2*u);const _=e+r-14*u,v=p+m/2;return s.beginPath(),s.moveTo(_-4*u,v-2*u),s.lineTo(_,v+3*u),s.lineTo(_+4*u,v-2*u),s.stroke(),h+6*u+m}function cx(s,e,i,r,l){const c=9*l;s.fillStyle="rgba(255,255,255,0.38)",s.font=`700 ${c}px "DM Mono", ui-monospace, monospace`,s.textAlign="left",s.fillText("AMOUNT",e,i+c),s.textAlign="right",s.fillStyle="rgba(255,255,255,0.45)",s.fillText("AVAILABLE 5,000.00",e+r,i+c),s.textAlign="left";const u=i+c+6*l,h=44*l;Xn(s,e,u,r,h,8*l,"#050508"),Nn(s,e,u,r,h,8*l,"rgba(255,255,255,0.1)",1),s.fillStyle="rgba(255,255,255,0.92)",s.font=`700 ${22*l}px "DM Mono", ui-monospace, monospace`,s.fillText("0.00",e+12*l,u+h*.68);const p=u+h+10*l;return s.strokeStyle="rgba(255,255,255,0.12)",s.lineWidth=Math.max(2,2*l),s.beginPath(),s.moveTo(e,p),s.lineTo(e+r,p),s.stroke(),Xn(s,e,p-5*l,14*l,10*l,5*l,"rgba(255,255,255,0.85)"),s.fillStyle="rgba(255,255,255,0.35)",s.font=`500 ${8*l}px "DM Mono", ui-monospace, monospace`,s.fillText("0.01",e,p+14*l),s.textAlign="right",s.fillText("5,000.00",e+r,p+14*l),s.textAlign="left",c+6*l+h+10*l+16*l}function ux(s,e,i,r,l,c){s.strokeStyle="rgba(255,255,255,0.08)",s.lineWidth=1,s.beginPath(),s.moveTo(e,i),s.lineTo(e+r,i),s.stroke();const u=i+10*l,h=36*l,p=72*l;Nn(s,e,u,p,h,6*l,"rgba(255,255,255,0.14)",1),s.fillStyle="rgba(255,255,255,0.55)",s.font=`700 ${9*l}px "DM Mono", ui-monospace, monospace`,s.textAlign="center",s.fillText("CANCEL",e+p/2,u+h*.62);const m=e+p+8*l,_=r-p-8*l;return Xn(s,m,u,_,h,6*l,"rgba(255,255,255,0.06)"),Nn(s,m,u,_,h,6*l,"rgba(255,255,255,0.1)",1),s.fillStyle="#c8f5a8",s.fillRect(m,u+4*l,3*l,h-8*l),s.fillStyle="rgba(255,255,255,0.55)",s.font=`700 ${8.5*l}px "DM Mono", ui-monospace, monospace`,s.fillText(c,m+_/2+2*l,u+h*.62),s.textAlign="left",10*l+h}function fx(s,e,i,r,l){const c=44*l;Xn(s,e,i,r,c,8*l,"rgba(200,245,168,0.08)"),Nn(s,e,i,r,c,8*l,"rgba(200,245,168,0.22)",1);const u=28*l;return Xn(s,e+8*l,i+(c-u)/2,u,u,4*l,"rgba(200,245,168,0.14)"),s.fillStyle="#c8f5a8",s.font=`700 ${10*l}px "DM Mono", ui-monospace, monospace`,s.textAlign="center",s.fillText("SS",e+8*l+u/2,i+c*.58),s.textAlign="left",s.fillStyle="rgba(255,255,255,0.92)",s.font=`700 ${11*l}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,s.fillText(ai.name,e+8*l+u+8*l,i+16*l),s.fillStyle="rgba(255,255,255,0.42)",s.font=`500 ${9*l}px "DM Mono", ui-monospace, monospace`,s.fillText(`${ai.role} · ${ai.didShort}`,e+8*l+u+8*l,i+32*l),c}function b2(s,e,i,r,l){const c=Math.min(r*240/316,r*.72),u=12*l,h=8*l,p=s.createLinearGradient(e,i+c,e+r,i);p.addColorStop(0,"#050508"),p.addColorStop(1,"rgba(200,245,168,0.16)"),Xn(s,e,i,r,c,h,p),Nn(s,e,i,r,c,h,"rgba(255,255,255,0.14)",Math.max(1,1.25*l)),Nn(s,e+2.5*l,i+2.5*l,r-5*l,c-5*l,h-1.5*l,"rgba(200,245,168,0.35)",Math.max(1,l)),s.fillStyle="rgba(255,255,255,0.92)",s.font=`700 ${11*l}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,s.fillText(ai.fleet,e+u,i+u+10*l);const m=48*l,_=16*l,v=e+r-u-m,g=i+u-1*l;Xn(s,v,g,m,_,8*l,"rgba(200,245,168,0.14)"),Nn(s,v,g,m,_,8*l,"rgba(200,245,168,0.28)",1),s.fillStyle="#c8f5a8",s.font=`700 ${8*l}px "DM Mono", ui-monospace, monospace`,s.textAlign="center",s.fillText("ACTIVE",v+m/2,g+11*l),s.textAlign="left";let S=i+u+28*l;s.fillStyle="rgba(255,255,255,0.92)",s.font=`700 ${12*l}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,s.fillText(`${ai.name} ${ai.version}`,e+u,S),S+=14*l,s.fillStyle="rgba(255,255,255,0.45)",s.font=`500 ${9*l}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,s.fillText(`${ai.role} · HITL`,e+u,S),S+=16*l,s.fillStyle="rgba(255,255,255,0.38)",s.font=`500 ${8*l}px "DM Mono", ui-monospace, monospace`,s.fillText("HANDLE",e+u,S),S+=11*l,s.fillStyle="rgba(255,255,255,0.88)",s.font=`600 ${10*l}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,s.fillText(ai.handle,e+u,S),S+=14*l,s.fillStyle="rgba(255,255,255,0.38)",s.font=`500 ${8*l}px "DM Mono", ui-monospace, monospace`,s.fillText("KYA DID",e+u,S),S+=11*l,s.fillStyle="#c8f5a8",s.font=`700 ${9*l}px "DM Mono", ui-monospace, monospace`,s.fillText(ai.didShort,e+u,S);const b=i+c-u-4*l;s.fillStyle="rgba(255,255,255,0.75)",s.font=`600 ${9*l}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,s.fillText("Verified KYA",e+u,b);const w=24*l;return Xn(s,e+r-u-w,i+c-u-w,w,w,4*l,"rgba(200,245,168,0.14)"),Nn(s,e+r-u-w,i+c-u-w,w,w,4*l,"rgba(200,245,168,0.28)",1),s.fillStyle="#c8f5a8",s.font=`700 ${10*l}px "DM Mono", ui-monospace, monospace`,s.textAlign="center",s.fillText("SS",e+r-u-w/2,i+c-u-w*.35),s.textAlign="left",c}function T2(s,e,i,r,l){const c=Math.min(r*190/316,r*.58),u=12*l,h=8*l,p=s.createLinearGradient(e,i+c,e+r,i);p.addColorStop(0,"#050508"),p.addColorStop(1,"rgba(200,245,168,0.14)"),Xn(s,e,i,r,c,h,p),Nn(s,e,i,r,c,h,"rgba(255,255,255,0.14)",Math.max(1,1.25*l)),Nn(s,e+2.5*l,i+2.5*l,r-5*l,c-5*l,h-1.5*l,"rgba(200,245,168,0.35)",Math.max(1,l)),s.fillStyle="rgba(255,255,255,0.92)",s.font=`700 ${11*l}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,s.fillText(ai.fleet,e+u,i+u+10*l),s.fillStyle="#c8f5a8",s.beginPath(),s.arc(e+r-u-7*l,i+u+5*l,6*l,0,Math.PI*2),s.fill(),s.fillStyle="#0a0a0c",s.font=`700 ${8*l}px "DM Mono", ui-monospace, monospace`,s.textAlign="center",s.fillText("✓",e+r-u-7*l,i+u+8*l),s.textAlign="left";const m=i+c-u-2*l;s.fillStyle="rgba(255,255,255,0.92)",s.font=`700 ${10*l}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,s.fillText(ai.name.toUpperCase(),e+u,m-24*l),s.fillStyle="rgba(255,255,255,0.45)",s.font=`500 ${9*l}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,s.fillText(`${ai.role} · ${ai.version}`,e+u,m-10*l),s.fillStyle="#c8f5a8",s.font=`700 ${10*l}px "DM Mono", ui-monospace, monospace`,s.fillText(ai.didShort,e+u,m);const _=28*l;return Xn(s,e+r-u-_,i+c-u-_,_,_,4*l,"rgba(200,245,168,0.14)"),Nn(s,e+r-u-_,i+c-u-_,_,_,4*l,"rgba(200,245,168,0.28)",1),s.fillStyle="#c8f5a8",s.font=`700 ${11*l}px "DM Mono", ui-monospace, monospace`,s.textAlign="center",s.fillText("SS",e+r-u-_/2,i+c-u-_*.35),s.textAlign="left",c}function A2(s,e,i,r,l){const c=r/300,u=12*c,h=10*c;pu(s,e,i,r,l,h);let p=mu(s,e,i,r,u,"AGENT PROOF",c);p=gu(s,e,p,r,u,["REPUTATION","INDEX"],0,c);const m=Math.max(80*c,l-(p-i)-52*c),_=r-u*2;let v=_,g=Math.min(v*240/316,v*.72);g>m&&(v=v*(m/g),g=m);const S=e+u+(_-v)/2;b2(s,S,p,v,c*(v/_)),p+=g+8*c;const b=[["SHARPE","2.41"],["ROI","+38%"],["RISK","B"]],w=6*c,y=(r-u*2-w*2)/3,M=36*c;p+M<=i+l-u&&(b.forEach(([F,z],C)=>{const O=e+u+C*(y+w);Xn(s,O,p,y,M,6*c,"rgba(255,255,255,0.04)"),Nn(s,O,p,y,M,6*c,"rgba(255,255,255,0.1)",1),s.fillStyle="rgba(255,255,255,0.4)",s.font=`700 ${7*c}px "DM Mono", ui-monospace, monospace`,s.textAlign="center",s.fillText(F,O+y/2,p+12*c),s.fillStyle="#c8f5a8",s.font=`700 ${11*c}px "DM Mono", ui-monospace, monospace`,s.fillText(z,O+y/2,p+26*c)}),s.textAlign="left")}function R2(s,e,i,r,l){const c=r/300,u=12*c,h=10*c;pu(s,e,i,r,l,h);let p=mu(s,e,i,r,u,"COPY TRADE",c);p=gu(s,e,p,r,u,["MIRROR","DESK"],0,c);const m=10*c+36*c,_=90*c,v=Math.max(70*c,l-(p-i)-_-m-16*c),g=r-u*2;let S=g,b=Math.min(S*190/316,S*.58);b>v&&(S=S*(v/b),b=v);const w=e+u+(g-S)/2;T2(s,w,p,S,c*(S/g)),p+=b+10*c,p+70*c<i+l-m-u&&(p+=cx(s,e+u,p,r-u*2,c)+6*c),ux(s,e+u,i+l-u-m,r-u*2,c,"START COPY")}function C2(s,e,i,r,l){const c=r/300,u=12*c,h=10*c;pu(s,e,i,r,l,h);let p=mu(s,e,i,r,u,"RISK LEVEL",c);p=gu(s,e,p,r,u,["GUARDED","HANDS-OFF"],0,c),p+=fx(s,e+u,p,r-u*2,c)+8*c;const m=72*c;Xn(s,e+u,p,r-u*2,m,8*c,"rgba(255,255,255,0.04)"),Nn(s,e+u,p,r-u*2,m,8*c,"rgba(234,179,8,0.55)",Math.max(1.5,1.5*c)),s.fillStyle="rgba(255,255,255,0.92)",s.font=`700 ${12*c}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,s.fillText("Guarded",e+u+10*c,p+18*c),s.fillStyle="#ffd700",s.font=`700 ${8*c}px "DM Mono", ui-monospace, monospace`,s.textAlign="right",s.fillText("HITL",e+r-u-10*c,p+16*c),s.textAlign="left",s.fillStyle="rgba(255,255,255,0.5)",s.font=`400 ${10*c}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,s.fillText("Want-to opens wait for Approve / Reject.",e+u+10*c,p+36*c);const _=22*c;Xn(s,e+u+10*c,p+m-_-8*c,r-u*2-20*c,_,4*c,"rgba(0,0,0,0.35)"),s.fillStyle="rgba(255,255,255,0.7)",s.font=`500 ${8*c}px "DM Mono", ui-monospace, monospace`,s.fillText("WANT-TO  ·  ETH long",e+u+18*c,p+m-14*c),p+=m+10*c;const v=32*c,g=(r-u*2-8*c)/2;p+v<=i+l-u&&(Nn(s,e+u,p,g,v,6*c,"rgba(255,71,87,0.4)",1),s.fillStyle="rgba(255,71,87,0.85)",s.font=`700 ${9*c}px "DM Mono", ui-monospace, monospace`,s.textAlign="center",s.fillText("REJECT",e+u+g/2,p+v*.62),Xn(s,e+u+g+8*c,p,g,v,6*c,"rgba(200,245,168,0.18)"),Nn(s,e+u+g+8*c,p,g,v,6*c,"rgba(200,245,168,0.4)",1),s.fillStyle="#c8f5a8",s.fillText("APPROVE",e+u+g+8*c+g/2,p+v*.62),s.textAlign="left")}function w2(s,e,i,r,l){const c=r/300,u=12*c,h=10*c;pu(s,e,i,r,l,h);let p=mu(s,e,i,r,u,"FUND BUCKET",c);p=gu(s,e,p,r,u,["FUND BUCKET","CREATE BUCKET"],0,c),p+=fx(s,e+u,p,r-u*2,c)+8*c,p+=E2(s,e+u,p,r-u*2,"FROM","Select source bucket",c)+8*c;const m=10*c+36*c;i+l-u-m-p-8*c>70*c&&(p+=cx(s,e+u,p,r-u*2,c)+6*c),ux(s,e+u,i+l-u-m,r-u*2,c,"COMPLETE REQUIRED FIELDS")}function dx(s,e,i,r,l,c){switch(e){case"discover":A2(s,i,r,l,c);break;case"copy":R2(s,i,r,l,c);break;case"supervise":C2(s,i,r,l,c);break;case"isolate":w2(s,i,r,l,c);break}}function D2(s,e,i,r){s.clearRect(0,0,i,r),dx(s,e,0,0,i,r)}function U2(s,e,i,r,l){const{W:c,H:u}=y2(i,r),h=document.createElement("canvas");h.width=c,h.height=u;const p=h.getContext("2d"),m=p.createLinearGradient(0,0,0,u);m.addColorStop(0,"#080a0e"),m.addColorStop(.55,"#05070d"),m.addColorStop(1,"#030406"),p.fillStyle=m,p.fillRect(0,0,c,u);const _=Math.round(22*i),v=Math.round(.05*u),g=Math.round(.045*u),S=c-_*2;let b=v;const w=Math.min(34*i,c*.095);p.fillStyle="rgba(255,255,255,0.94)",p.font=`normal 400 ${w}px ${l}`,p.textBaseline="alphabetic",p.fillText(s.verb,_,b+w*.85),b+=Math.round(.09*u);const y=Math.min(13*i,c*.036);p.fillStyle="rgba(255,255,255,0.55)",p.font=`400 ${y}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`;const M=M2(p,s.description,S);p.fillText(M[0]??s.description,_,b+y),b+=Math.round(.07*u),b+=Math.round(.03*u);const F=_,z=b,C=S,O=Math.max(80*i,u-b-g);dx(p,S2(e),F,z,C,O);const U=new Zv(h);return U.colorSpace=jn,U.minFilter=xs,U.generateMipmaps=!0,U}const jr=hh.verbs.map((s,e)=>{const i=[{top:"#c8f5a8",mid:"#0a1410",bot:"#1a3d2e"},{top:"#9ee089",mid:"#060e18",bot:"#1e3a52"},{top:"#f0e6a0",mid:"#0c1008",bot:"#2a3820"},{top:"#7fd9a8",mid:"#080810",bot:"#243048"}];return{verb:s.verb,description:s.description,mood:i[e]??i[0]}}),Kn=jr.length,Ua=2.95,cl=6.9,xp=32,hx=4,px=5,ap=2.05,N2=1,L2=Ua*.55,pv=.35,mv=.85;function mx(s){return s<520?{mode:"mobile",canvasW:1280,canvasH:320,fontPx:112,planeBaseW:4.55,frustumFill:.9}:s<900?{mode:"tablet",canvasW:1600,canvasH:360,fontPx:132,planeBaseW:5.25,frustumFill:.94}:{mode:"desktop",canvasW:1920,canvasH:420,fontPx:152,planeBaseW:6.1,frustumFill:.96}}const O2=1.35,P2=.72,I2=.62,F2=.2,B2=14,z2=.42,H2=128,G2=12,V2=.004,k2=.0022,gv=.12,X2=.88,W2=4,q2=22,Y2=32,Z2=40,K2=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,j2=`
uniform float uStrength;
varying vec2 vUv;
void main() {
  float radial = abs(vUv.y - 0.5) * 2.0;
  float cap = smoothstep(0.0, 0.018, vUv.x) * smoothstep(1.0, 0.982, vUv.x);
  float edge = smoothstep(0.78, 1.0, radial);
  float a = mix(0.98, 0.06, edge) * cap;
  a = clamp(a, 0.0, 1.0);
  float gx = clamp(vUv.x, 0.0, 1.0);
  vec3 c0 = vec3(0.78, 1.0, 0.58);
  vec3 c1 = vec3(0.52, 0.98, 0.42);
  vec3 c2 = vec3(1.0, 0.95, 0.42);
  vec3 neon = mix(c0, c1, smoothstep(0.0, 0.5, gx));
  neon = mix(neon, c2, smoothstep(0.35, 1.0, gx));
  float body = (1.0 - smoothstep(0.68, 1.0, radial)) * cap;
  float halo = exp(-pow(radial * 1.85, 2.0)) * 0.55 * cap;
  float vig = body * 2.4 + halo * 1.6;
  float edgeSoft = mix(0.06, 1.0, 1.0 - smoothstep(0.74, 1.0, radial)) * cap;
  vec3 rgb = neon * vig * edgeSoft * (0.38 + 0.62 * uStrength);
  gl_FragColor = vec4(rgb, a);
}
`,Q2='"Reckk Heading", Georgia, "Times New Roman", serif',gx="Morpheum Wordmark",pl=`"${gx}"`,J2=[{t:0,c:"#e8ffe0"},{t:.45,c:"#c8f5a8"},{t:1,c:"#f0e6a0"}];async function $2(){if(typeof document>"u"||!document.fonts)return!1;try{const s=new FontFace(gx,`url(${_2})`,{weight:"normal",style:"normal"});document.fonts.add(await s.load()),await document.fonts.load(`normal 152px ${pl}`);const e=document.fonts.check(`normal 152px ${pl}`);return e||console.error("[FlowIntro] Morpheum Wordmark failed to bind — title will not use Reckk fallback"),e}catch(s){return console.error("[FlowIntro] Morpheum Wordmark load failed",s),!1}}async function eR(){if(!(typeof document>"u"||!document.fonts))try{await $2();const s=new FontFace("Reckk Title",`url(${g2})`,{weight:"normal",style:"normal"});document.fonts.add(await s.load());const e=new FontFace("Reckk Heading",`url(${m2})`,{weight:"normal",style:"normal"});document.fonts.add(await e.load()),await document.fonts.ready,await document.fonts.load(`normal 152px ${pl}`),await document.fonts.load('normal 64px "Reckk Heading"'),await document.fonts.load('normal 124px "Reckk Title"')}catch{}}const Ws="flow-intro-hide-chrome";function tR(s){return s<=72}const nR=280;function iR(s){const e=document.documentElement,i=e.style.scrollBehavior;e.style.scrollBehavior="auto",window.scrollTo(0,Math.max(0,s)),e.style.scrollBehavior=i}function fh(){const s=document.getElementById("hero");if(!s)return;const e=s.getBoundingClientRect().top+window.scrollY;iR(e)}function ul(s){const e=Un.clamp(s,0,1);return e*e*e*(e*(e*6-15)+10)}function dh(s){const e=Math.max(1,s),i=Math.max(1,Kn*e*N2),r=Math.max(1,i/Math.max(1,Kn-1));return{cardPx:i,titlePx:r,totalPx:i+r}}function _x(s,e){const i=s/Math.max(1,e),r=xp*Math.PI/180,l=2*cl*Math.tan(r/2),c=l*i,u=ap*hx/px,h=.992,p=h*l/ap,m=h*c/u;return Un.clamp(Math.min(p,m),.52,2.35)}function _v(s,e,i){const r=mx(s),l=_x(s,e),c=s/Math.max(1,e),u=xp*Math.PI/180,p=2*cl*Math.tan(u/2)*c,m=r.frustumFill*p/Math.max(1e-6,l),_=Math.min(r.planeBaseW,m);return{w:_,h:_*i}}function aR(s,e){const i=s/Math.max(1,Kn-1),r=Math.min(Math.max(1,e*.38),Math.max(1,i*.34));return i<=r+.001?0:1-r/i}function sR(s,e){const i=Math.min(Math.max(1,e*.38),Math.max(1,s*.34));return s<=i+.001?0:1-i/s}function rR(s,e){const i=Un.clamp(e,0,.999);if(s<i)return{titleOp:1,lastCardOp:0};const r=Math.max(1e-6,1-i),l=ul(Un.clamp((s-i)/r,0,1));return{titleOp:1-l,lastCardOp:l}}function oR(s,e,i){const r=Kn-1;if(s<=0)return{opacity:e===0?1:0};if(s>=r-1e-5)return{opacity:e===r?1:0};const l=Math.floor(s);if(l>=r)return{opacity:e===r?1:0};if(e!==l&&e!==l+1)return{opacity:0};const c=s-l,u=Un.clamp(i,0,.999);if(c<u)return{opacity:e===l?1:0};const h=ul(Un.clamp((c-u)/Math.max(1e-6,1-u),0,1));return{opacity:e===l?1-h:h}}function lR(s,e){return s>1.5&&s<e-.5}function cR(s){return Un.clamp(540/Math.max(s,340),.2,.55)}function uR(s,e,i){const r=[],l=B2;for(let c=0;c<l;c++){const u=Un.clamp(s-c/Math.max(1,l-1)*z2,-.08,1.08),h=Math.sin(u*Math.PI*2*O2)*I2*i,p=Math.sin(u*Math.PI*2*P2)*F2,m=gv+c/Math.max(1,l-1)*(X2-gv),_=e-m;r.push(new $(h,p,_))}return r}function fR(s,e,i,r){const l=s.length;if(l<2)return new Ni;const c=[],u=[],h=[],p=[],m=new $,_=new $,v=new $,g=new $(0,1,0),S=e+1;for(let w=0;w<l;w++){w===0?m.subVectors(s[1],s[0]).normalize():w===l-1?m.subVectors(s[l-1],s[l-2]).normalize():m.subVectors(s[w+1],s[w-1]).normalize(),_.copy(g).cross(m),_.lengthSq()<1e-8&&_.set(1,0,0).cross(m),_.normalize(),v.crossVectors(m,_).normalize();const y=l===1?0:w/(l-1),M=i+(r-i)*Math.pow(y,1.5);for(let F=0;F<=e;F++){const z=F/e*Math.PI*2,C=Math.cos(z),O=Math.sin(z),U=s[w];c.push(U.x+(C*_.x+O*v.x)*M,U.y+(C*_.y+O*v.y)*M,U.z+(C*_.z+O*v.z)*M),u.push(C*_.x+O*v.x,C*_.y+O*v.y,C*_.z+O*v.z),h.push(l===1?0:w/(l-1),F/e)}}for(let w=0;w<l-1;w++)for(let y=0;y<e;y++){const M=w*S+y,F=M+1,z=M+S,C=z+1;p.push(M,z,F,F,z,C)}const b=new Ni;return b.setAttribute("position",new Di(c,3)),b.setAttribute("normal",new Di(u,3)),b.setAttribute("uv",new Di(h,2)),b.setIndex(p),b.computeBoundingSphere(),b}function vv(s,e,i,r){const l={verb:s.verb,description:s.description};return U2(l,e,i,r,Q2)}function xv(s,e){const i=mx(e),r=Math.min(s*2.35,3.25),l=Math.round(i.canvasW*r),c=Math.round(i.canvasH*r),u=document.createElement("canvas");u.width=l,u.height=c;const h=u.getContext("2d");h.clearRect(0,0,l,c);const p="Morpheum";let m=i.fontPx;h.textAlign="left",h.textBaseline="alphabetic";const _=()=>{h.font=`normal ${m*r}px ${pl}`};_();const v=O=>{h.font=`normal ${O*r}px ${pl}`;const U=h.measureText(p),P=Math.abs(U.actualBoundingBoxLeft??0),T=Math.abs(U.actualBoundingBoxRight??U.width),L=Math.abs(U.actualBoundingBoxAscent??O*r*.8),Y=Math.abs(U.actualBoundingBoxDescent??O*r*.25);return{left:P,right:T,width:P+T,ascent:L,descent:Y}},g=Math.max(1.25,1.85*r)*2,S=64*r+g,b=40*r+g,w=O=>{const U=v(O);return U.width+S*2<=l&&U.ascent+U.descent+b*2<=c};for(;!w(m)&&m>64;)m-=2;for(;w(m+2)&&m<i.fontPx+24;)m+=2;_();const y=v(m),M=(l-y.width)/2+y.left,F=c/2+(y.ascent-y.descent)/2,z=h.createLinearGradient(M-y.left,F-y.ascent,M+y.right,F+y.descent);J2.forEach(O=>z.addColorStop(O.t,O.c)),h.lineJoin="round",h.miterLimit=2,h.lineWidth=Math.max(1.25,1.85*r),h.strokeStyle="rgba(8,12,10,0.22)",h.strokeText(p,M,F),h.fillStyle=z,h.fillText(p,M,F);const C=new Zv(u);return C.colorSpace=jn,C.minFilter=yn,C.magFilter=yn,C.generateMipmaps=!1,C}function Sv(s,e){s.generateMipmaps=!1,s.minFilter=yn,s.magFilter=yn,s.wrapS=Vi,s.wrapT=Vi;const i=e.capabilities.getMaxAnisotropy();s.anisotropy=Math.min(16,i),s.needsUpdate=!0}function dR(){const s=$t.useRef(null),e=$t.useRef(null),i=$t.useRef(null),r=$t.useRef(null),l=$t.useRef(!1),c=$t.useCallback(()=>{if(l.current)return;l.current=!0;const u=e.current;u==null||u.classList.add("flow-intro__sticky--exit"),window.setTimeout(()=>{document.body.classList.remove(Ws),fh(),requestAnimationFrame(()=>{fh(),requestAnimationFrame(()=>{fh(),window.setTimeout(()=>{l.current=!1},100)})})},nR)},[]);return $t.useLayoutEffect(()=>{const u=window.matchMedia("(prefers-reduced-motion: reduce)").matches,h=window.location.hash.replace(/^#/,"");return u||h!==""&&h!=="flow"&&h!=="hero"||document.body.classList.add(Ws),()=>{document.body.classList.remove(Ws)}},[]),$t.useEffect(()=>{const u=h=>{if(h.key!=="Escape")return;const p=document.getElementById("hero");p&&p.getBoundingClientRect().top>8&&(h.preventDefault(),c())};return window.addEventListener("keydown",u),()=>window.removeEventListener("keydown",u)},[c]),$t.useEffect(()=>{const u=window.location.hash.replace(/^#/,"");u&&u!=="flow"&&u!=="hero"&&requestAnimationFrame(()=>{var h;(h=document.getElementById(u))==null||h.scrollIntoView({block:"start"})})},[]),$t.useEffect(()=>{const u=i.current,h=s.current;if(!u||!h)return;const p=u,m=h;let _=!1;if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){document.body.classList.remove(Ws);const S=r.current;S&&(S.style.height="0px");return}let g;return(async()=>{if(await eR(),_)return;const S=Math.min(window.devicePixelRatio,2),b=Math.max(320,p.clientWidth||window.innerWidth),w=Math.max(1,p.clientHeight||window.innerHeight),y=[],M=[],F=[];jr.forEach((Ye,Ze)=>{const rt=Kn-1-Ze,pt=jr[rt],Ct=vv(pt,rt,S,b);F.push(Ct);const wt=new lu({map:Ct,transparent:!0,opacity:1,depthWrite:!0,depthTest:!0,side:Oa});y.push(wt);const ut=ap,gt=ut*hx/px,X=new Ui(new js(gt,ut),wt);X.position.set(0,0,-Ze*Ua),X.renderOrder=Ze,M.push(X)});const z=xv(S,b),C=new lu({map:z,transparent:!0,opacity:0,depthWrite:!1,depthTest:!0,side:ea}),O=z.image.height/z.image.width,{w:U,h:P}=_v(b,w,O),T=new Ui(new js(U,P),C);T.position.set(0,0,-(Kn-1)*Ua),T.renderOrder=Z2;const L=new jy,Y=new Ci(xp,1,.08,120),V=new p2({antialias:!0,alpha:!1,powerPreference:"high-performance"});V.setPixelRatio(Math.min(window.devicePixelRatio,2)),V.outputColorSpace=jn,V.sortObjects=!0,p.appendChild(V.domElement),Sv(z,V);const Q=new sl;M.forEach(Ye=>Q.add(Ye)),Q.add(T),L.add(Q);const pe=new Xi({uniforms:{uStrength:{value:0}},vertexShader:K2,fragmentShader:j2,transparent:!0,toneMapped:!1,depthTest:!1,depthWrite:!1,blending:ph}),de=new Ui(new Ni,pe);de.frustumCulled=!1,de.renderOrder=q2,de.visible=!1,L.add(de);const J=jr.map(Ye=>new Dt(Ye.mood.mid)),I=J[0].clone();L.background=I;const G=0,ee=-(Kn-1)*Ua,_e=cl,be=-.1*Ua,N=.1*Ua;function Z(Ye,Ze){const rt=Ye+cl;return(_e-rt)/Ze}function Ee(){const Ye=Math.max(1,window.innerHeight),{totalPx:Ze}=dh(Ye),rt=Math.max(1,Ze),pt=G+be,Ct=ee+N-L2,ut=(pt-Ct)/rt,gt=Z(pt,ut),X=Z(Ct,ut);return{ih:Ye,totalPx:rt,scrollToWorldFactor:ut,minScroll:gt,maxScroll:X}}let{scrollToWorldFactor:Ce,minScroll:Le,maxScroll:ie}=Ee();const Se=new Dt,Me=new Dt,ze=new Dt;function nt(){var gt;const Ye=Math.max(320,p.clientWidth||window.innerWidth),Ze=Math.min(window.devicePixelRatio,2);F.forEach((X,St)=>{X.dispose();const vt=Kn-1-St,D=vv(jr[vt],vt,Ze,Ye);F[St]=D,y[St].map=D,y[St].needsUpdate=!0}),(gt=C.map)==null||gt.dispose();const rt=xv(Ze,Ye);C.map=rt,C.needsUpdate=!0,Sv(rt,V);const pt=rt.image.height/rt.image.width,Ct=Math.max(1,p.clientHeight||window.innerHeight),{w:wt,h:ut}=_v(Ye,Ct,pt);T.geometry.dispose(),T.geometry=new js(wt,ut)}function Qe(){const Ye=p.clientWidth,Ze=p.clientHeight;if(Ye<2||Ze<2)return;Y.aspect=Ye/Ze,Y.updateProjectionMatrix(),V.setSize(Ye,Ze,!1),nt();const rt=Ee();Ce=rt.scrollToWorldFactor,Le=rt.minScroll,ie=rt.maxScroll;const pt=Math.max(1,window.innerHeight),{totalPx:Ct}=dh(pt),wt=r.current;if(wt){const ut=pt*pv,gt=Math.max(Math.ceil(Ct+ut+pt*mv+32),Math.ceil(pt*1.08));wt.style.height=`${gt}px`}}Qe(),requestAnimationFrame(()=>{_||nt()});let Yt=0;function ct(){var Bn,Fa;if(_)return;Yt=requestAnimationFrame(ct);const Ye=Math.max(1,window.innerHeight),{cardPx:Ze,titlePx:rt,totalPx:pt}=dh(Ye),Ct=m.getBoundingClientRect(),wt=Math.max(1,m.offsetHeight-Ye),ut=Un.clamp(-Ct.top,0,wt),gt=Math.min(ut,pt),X=Math.max(1,pt),St=Ye*pv,vt=ul(Un.clamp((ut-pt)/Math.max(1,St),0,1)),D=Un.mapLinear(Ze,0,X,Le,ie),E=p.clientWidth,j=p.clientHeight,te=Math.max(1,rt),ue=gt<te,Re=ue?Un.clamp(gt/te,0,1):0,De=Math.max(0,gt-te),fe=Math.max(1,Ze),Te=Un.clamp(De/fe,0,1)*(Kn-1),Be=_x(E,j),Ue=document.getElementById("hero"),Ne=Ue?Ue.getBoundingClientRect().top:0,Je=Ue?tR(Ne):!0;l.current||document.body.classList.toggle(Ws,!Je);let Ke;ue?Ke=Un.mapLinear(gt,0,te,ie,D):Ke=Un.mapLinear(gt,te,X,D,Le),Ke=Un.clamp(Ke,Le,ie);const at=aR(Ze,Ye),W=sR(te,Ye),Ae=rR(Re,W),me=Kn-1;if(ue)ze.copy(J[0]);else{const pn=Math.min(Kn-2,Math.floor(Te)),En=Math.min(pn+1,Kn-1),ri=ul(Te-pn);Se.copy(J[pn]),Me.copy(J[En]),ze.lerpColors(Se,Me,ri)}L.background=I.copy(ze);const we=_e-Ke*Ce;Y.position.set(0,0,we),Y.lookAt(0,0,we-cl);const Pe=Un.clamp(gt/X,0,1);if(lR(gt,X)){const pn=uR(Pe,we,cR(E)),ri=new cE(pn,!1,"centripetal").getSpacedPoints(H2);if(ri.length>=2){const mn=fR(ri,G2,V2,k2),Lt=de.geometry.getAttribute("position"),en=mn.getAttribute("position");if(Lt&&en&&Lt.count===en.count&&((Bn=de.geometry.getIndex())==null?void 0:Bn.count)===((Fa=mn.getIndex())==null?void 0:Fa.count)&&Lt&&en){Lt.array.set(en.array),Lt.needsUpdate=!0;const Qn=de.geometry.getAttribute("normal"),Ms=mn.getAttribute("normal");Qn&&Ms&&(Qn.array.set(Ms.array),Qn.needsUpdate=!0);const Ba=de.geometry.getAttribute("uv"),Wi=mn.getAttribute("uv");Ba&&Wi&&(Ba.array.set(Wi.array),Ba.needsUpdate=!0),mn.dispose()}else de.geometry.dispose(),de.geometry=mn;de.visible=!0,pe.uniforms.uStrength.value=.36}else de.visible=!1,pe.uniforms.uStrength.value=0}else de.visible=!1,pe.uniforms.uStrength.value=0;const Xe=Math.floor((Kn-1)/2);M.forEach((pn,En)=>{const ri=-En*Ua,mn=Kn-1-En;let{opacity:Lt}=oR(Te,mn,at);ue&&En===me&&(Lt*=Ae.lastCardOp);let en=1,Cn=0;!ue&&mn===Kn-1&&Lt>.02&&vt>0&&(en=1-.28*vt,Cn=-Ua*.32*vt),pn.position.set(0,0,ri+Cn),pn.scale.setScalar(Be*en);const Qn=y[En];Qn.opacity=Lt,Qn.depthWrite=Lt>=.995,pn.visible=Lt>.003,pn.renderOrder=En<=Xe?W2+En:Y2+(En-Xe-1)}),T.position.set(0,0,-me*Ua),T.scale.setScalar(Be),C.opacity=ue?Ae.titleOp:0,C.depthWrite=C.opacity>=.995,T.visible=C.opacity>.003;const He=pt+St;let Ht=0;if(wt>He&&ut>=He){const pn=Math.max(1,wt-He);Ht=ul(Un.clamp((ut-He)/pn,0,1))}Ht>.02&&(de.visible=!1,pe.uniforms.uStrength.value=0);const Ut=r.current;if(Ut){const pn=St+Ye*mv+32,En=Math.max(Math.ceil(pt+pn),Math.ceil(Ye*1.08));Ut.style.height!==`${En}px`&&(Ut.style.height=`${En}px`)}const Wn=1-Ht*.96;e.current&&e.current.style.setProperty("--intro-ui-opacity",String(Wn)),V.domElement.style.opacity=String(1-Ht),V.render(L,Y)}ct(),window.addEventListener("resize",Qe,{passive:!0});const _t=new ResizeObserver(Qe);_t.observe(p),g=()=>{var Ye;cancelAnimationFrame(Yt),document.body.classList.remove(Ws),window.removeEventListener("resize",Qe),_t.disconnect(),y.forEach(Ze=>{var rt;(rt=Ze.map)==null||rt.dispose(),Ze.dispose()}),F.forEach(Ze=>Ze.dispose()),(Ye=C.map)==null||Ye.dispose(),C.dispose(),M.forEach(Ze=>Ze.geometry.dispose()),T.geometry.dispose(),de.geometry.dispose(),pe.dispose(),L.remove(de),V.dispose(),p.contains(V.domElement)&&p.removeChild(V.domElement)},_&&g()})(),()=>{_=!0,document.body.classList.remove(Ws),g==null||g()}},[]),B.jsxs("section",{ref:s,id:"flow",className:"flow-intro","aria-label":"Morpheum — Discover, Copy, Supervise, Isolate",children:[B.jsxs("div",{ref:e,className:"flow-intro__sticky",children:[B.jsx("div",{ref:i,className:"flow-intro__canvas","aria-hidden":!0}),B.jsxs("div",{className:"flow-intro__top",children:[B.jsx("p",{className:"flow-intro__eyebrow",children:"/// Morpheum"}),B.jsxs("button",{type:"button",className:"flow-intro__skip",onClick:c,children:["Skip ",B.jsx("span",{className:"flow-intro__skip-key",children:"Esc"})]})]}),B.jsx("div",{className:"flow-intro__sr","aria-live":"polite",children:jr.map((u,h)=>B.jsxs("p",{children:["Step ",String(h+1).padStart(2,"0"),": ",u.verb,". ",u.description]},u.verb))})]}),B.jsx("div",{ref:r,className:"flow-intro__spacer","aria-hidden":!0})]})}const Mv=[{id:"close-profit",timestamp:"2026-07-08T15:25:00.000Z",timeLabel:"07-08 15:25",badgeLabel:"Close Long",tone:"short",symbol:"BTCUSDT",summary:"0.04 BTC · 2,465.12 USDT",pnl:{text:"+103.09",tone:"long"}},{id:"open-btc",timestamp:"2026-07-08T14:10:00.000Z",timeLabel:"07-08 14:10",badgeLabel:"Open Long",tone:"long",symbol:"BTCUSDT",summary:"0.035 BTC · 2,142.00 USDT"},{id:"close-loss",timestamp:"2026-07-07T09:42:00.000Z",timeLabel:"07-07 09:42",badgeLabel:"Close Long",tone:"short",symbol:"ETHUSDT",summary:"1.2 ETH · 3,840.00 USDT",pnl:{text:"-42.50",tone:"short"}}];function hR(){return B.jsxs("aside",{className:"discover-log","aria-label":"SharpeShark activity log",children:[B.jsxs("header",{className:"discover-log__header",children:[B.jsx("span",{className:"discover-log__kicker",children:"Activity log"}),B.jsx("span",{className:"discover-log__agent",children:"SharpeShark · receipts"})]}),B.jsx("ol",{className:"discover-log__timeline",children:Mv.map((s,e)=>{const i=e===Mv.length-1,r=e===0;return B.jsxs("li",{className:"discover-log__item",children:[B.jsx("time",{className:"discover-log__time",dateTime:s.timestamp,children:s.timeLabel}),B.jsxs("div",{className:"discover-log__track","aria-hidden":!0,children:[i?null:B.jsx("span",{className:"discover-log__track-line"}),B.jsx("span",{className:["discover-log__dot",r?"discover-log__dot--latest":""].filter(Boolean).join(" ")})]}),B.jsx("div",{className:"discover-log__body",children:B.jsxs("div",{className:"discover-log__row",children:[B.jsx("span",{className:`discover-log__badge discover-log__badge--${s.tone}`,children:s.badgeLabel}),B.jsx("span",{className:"discover-log__symbol",children:s.symbol}),B.jsx("span",{className:"discover-log__summary",children:s.summary}),s.pnl?B.jsx("span",{className:`discover-log__pnl discover-log__pnl--${s.pnl.tone}`,children:s.pnl.text}):B.jsx("span",{className:"discover-log__pnl discover-log__pnl--empty"})]})})]},s.id)})})]})}const pR=280,mR=5/4;function gR({stepIndex:s,kind:e,className:i,width:r=pR}){const l=$t.useRef(null),c=e??ox(s),u=Math.round(r*mR);return $t.useEffect(()=>{const h=l.current;if(!h)return;const p=()=>{const _=Math.min(window.devicePixelRatio||1,2),v=Math.round(r*_),g=Math.round(u*_);(h.width!==v||h.height!==g)&&(h.width=v,h.height=g);const S=h.getContext("2d");S&&D2(S,c,v,g)};p();const m=()=>p();return window.addEventListener("resize",m),()=>window.removeEventListener("resize",m)},[c,r,u]),B.jsx("div",{className:["loop-step-sheet",i].filter(Boolean).join(" "),style:{width:r,height:u},children:B.jsx("canvas",{ref:l,className:"loop-step-sheet__canvas",style:{width:r,height:u},"aria-hidden":!0})})}function vx({label:s,status:e,live:i}){return B.jsxs("span",{className:`stat-chip ${i?"stat-chip--live":""}`,children:[B.jsx("span",{className:"stat-chip__label",children:s}),B.jsx("span",{className:"stat-chip__sep",children:"·"}),B.jsx("span",{className:"stat-chip__status",children:e})]})}function _R(s){return String(s).padStart(2,"0")}function vR(){return typeof window<"u"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches}function xR(){const[s,e]=$t.useState(()=>new Set),i=$t.useRef(new Map);$t.useLayoutEffect(()=>{if(vR()){e(new Set(Lr.steps.map(u=>`step-${u.n}`)));return}const c=new IntersectionObserver(u=>{e(h=>{const p=new Set(h);for(const m of u){const _=m.target.dataset.flowKey;_&&m.isIntersecting&&p.add(_)}return p})},{root:null,threshold:[0,.01,.08,.15,.25],rootMargin:"-42% 0px -42% 0px"});for(const u of i.current.values())c.observe(u);return()=>{c.disconnect()}},[]);const r=$t.useCallback((c,u)=>{u?i.current.set(c,u):i.current.delete(c)},[]),l=$t.useCallback(c=>{e(u=>new Set(u).add(c))},[]);return B.jsx("section",{id:"how",className:"section flow",children:B.jsxs("div",{className:"container",children:[B.jsx("p",{className:"section-kicker",children:Lr.kicker}),B.jsx("h2",{className:"section-title flow__title",children:Lr.title}),B.jsx("div",{className:"flow__chips",children:Lr.chips.map(c=>B.jsx(vx,{label:c.label,status:c.value},c.label))}),B.jsx("div",{className:"flow__steps",role:"list",children:Lr.steps.map((c,u)=>{const h=`step-${c.n}`,p=s.has(h);return B.jsxs("article",{ref:m=>r(h,m),"data-flow-key":h,role:"listitem",className:`flow-step${p?" flow-step--expanded":""}`,"aria-expanded":p,children:[B.jsxs("button",{type:"button",className:"flow-step__head",onClick:()=>l(h),"aria-label":p?`${c.title}, expanded`:`${c.title}, tap to expand`,children:[B.jsxs("span",{className:"flow-step__idx",children:["Step ",_R(c.n)]}),B.jsx("h3",{className:"flow-step__title",children:c.title}),B.jsx("span",{className:"flow-step__chevron","aria-hidden":!0,children:p?"−":"+"})]}),B.jsx("div",{className:"flow-step__expand","aria-hidden":!p,children:B.jsx("div",{className:"flow-step__expand-inner",children:u===0?B.jsxs("div",{className:"flow-step__proof",children:[B.jsxs("div",{className:"flow-step__copy",children:[B.jsx("p",{className:"flow-step__meta",children:c.feature}),B.jsx("p",{className:"flow-step__detail",children:c.body}),B.jsxs("p",{className:"flow-step__example",children:[B.jsx("span",{"aria-hidden":!0,children:"> "}),c.example]}),B.jsx("div",{className:"flow-step__actions",children:B.jsx("a",{href:dn.explore,className:"flow-step__open","aria-label":`Explore after ${c.title}`,children:B.jsx("span",{"aria-hidden":!0,className:"flow-step__open-arrow",children:"→"})})})]}),p?B.jsx("div",{className:"flow-step__proof-log",children:B.jsx(hR,{})}):null]}):B.jsxs("div",{className:"flow-step__split",children:[B.jsxs("div",{className:"flow-step__copy",children:[B.jsx("p",{className:"flow-step__meta",children:c.feature}),B.jsx("p",{className:"flow-step__detail",children:c.body}),B.jsxs("p",{className:"flow-step__example",children:[B.jsx("span",{"aria-hidden":!0,children:"> "}),c.example]}),B.jsx("div",{className:"flow-step__actions",children:B.jsx("a",{href:dn.explore,className:"flow-step__open","aria-label":`Explore after ${c.title}`,children:B.jsx("span",{"aria-hidden":!0,className:"flow-step__open-arrow",children:"→"})})})]}),B.jsx("div",{className:"flow-step__sheet","aria-hidden":!p,children:p?B.jsx(gR,{stepIndex:u,width:280}):null})]})})})]},h)})}),B.jsx("p",{className:"flow__outcome",children:Lr.outcome})]})})}const SR=["M41.9213 3.43614C43.0393 3.43614 43.8716 3.77154 44.4182 4.44235C44.9647 5.138 45.1262 6.1939 44.9026 7.61005L41.884 26.8026C41.7846 27.4982 41.8467 28.0075 42.0703 28.3305C42.2691 28.6784 42.6542 28.8771 43.2256 28.9268L43.8591 28.9641L43.8219 29.2622L36.7784 30.492L36.4803 30.492L40.1324 7.46098C40.3064 6.26843 40.0206 5.67216 39.2753 5.67216C38.9523 5.67216 38.6045 5.75912 38.2318 5.93303C37.8343 6.10694 37.3995 6.44235 36.9275 6.93924L36.7411 6.79017C38.0828 4.55415 39.8095 3.43614 41.9213 3.43614Z","M29.9958 3.43614C31.1138 3.43614 31.9461 3.77154 32.4927 4.44235C33.0393 5.138 33.2007 6.1939 32.9771 7.61005L29.9585 26.8026C29.8591 27.4982 29.9212 28.0075 30.1449 28.3305C30.3436 28.6784 30.7287 28.8771 31.3001 28.9268L31.9337 28.9641L31.8964 29.2622L24.8529 30.492L24.5548 30.492L28.207 7.46098C28.3809 6.26843 28.0952 5.67216 27.3498 5.67216C27.0268 5.67216 26.679 5.75912 26.3063 5.93303C25.9088 6.10694 25.474 6.44235 25.002 6.93924L24.8157 6.79017C26.1573 4.55415 27.884 3.43614 29.9958 3.43614Z","M18.0703 3.43614C19.1883 3.43614 20.0206 3.77154 20.5672 4.44235C21.1138 5.138 21.2753 6.1939 21.0517 7.61005L18.033 26.8026C17.9337 27.4982 17.9958 28.0075 18.2194 28.3305C18.4181 28.6784 18.8032 28.8771 19.3747 28.9268L20.0082 28.9641L19.9709 29.2622L12.9275 30.492L12.6293 30.492L16.2815 7.46098C16.4554 6.26843 16.1697 5.67216 15.4243 5.67216C15.1014 5.67216 14.7535 5.75912 14.3809 5.93303C13.9834 6.10694 13.5486 6.44235 13.0765 6.93924L12.8902 6.79017C14.2318 4.55415 15.9585 3.43614 18.0703 3.43614Z","M45.5631 10.8482C46.0378 11.9189 46.0912 12.9315 45.7231 13.8861C45.3095 14.8231 44.3453 15.4956 42.8305 15.9035L16.576 22.853C15.2325 23.2226 14.7771 24.0651 15.2096 25.3806L15.7698 26.7714L13.8491 27.2839L9.924 22.1284L9.25377 20.6168L40.8242 12.2711C41.6674 12.048 42.2133 11.7494 42.4619 11.3754C42.6651 10.9838 42.669 10.5676 42.4735 10.1267C42.3199 9.78031 42.1016 9.5003 41.8185 9.2867C41.4899 9.05556 41.0511 8.87329 40.5021 8.7399L41.5734 7.5866C42.563 7.86379 43.3915 8.28774 44.0591 8.85845C44.7127 9.39767 45.214 10.0609 45.5631 10.8482Z"],MR=58,yR=35;function ER({fill:s="#C8F5A8",width:e=58,height:i=35,padding:r=10,"aria-hidden":l=!0,...c}){const u=[-r,-r,MR+r*2,yR+r*2].join(" ");return B.jsx("svg",{width:e,height:i,viewBox:u,fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":l,...c,children:SR.map(h=>B.jsx("path",{d:h,fill:s},h.slice(0,24)))})}const bR={sm:{width:46,height:28},md:{width:46,height:28},lg:{width:69,height:42},hero:{width:119,height:72}};function xx({size:s="md",showWordmark:e=!0,className:i="",brandName:r="Morpheum"}){const l=bR[s];return B.jsxs("span",{className:`brand-mark brand-mark--${s} ${i}`.trim(),children:[B.jsx(ER,{className:"brand-mark__icon",width:l.width,height:l.height,padding:0,fill:"var(--terminal-brand)"}),e?B.jsx("span",{className:"brand-mark__word",children:r}):null]})}function TR(){return B.jsx("footer",{className:"site-footer",children:B.jsxs("div",{className:"container site-footer__inner",children:[B.jsxs("div",{className:"site-footer__brand",children:[B.jsx("a",{className:"site-footer__logo",href:"#hero","aria-label":"Morpheum home",children:B.jsx(xx,{size:"sm"})}),B.jsx("p",{className:"site-footer__legal",children:OM.legal})]}),B.jsxs("nav",{className:"site-footer__nav","aria-label":"Footer",children:[Kc.map(s=>B.jsx("a",{href:s.href,children:s.label},s.id)),B.jsx("a",{href:dn.docs,children:"Docs"}),B.jsx("a",{href:dn.manifesto,children:"Manifesto"}),B.jsx("a",{href:dn.discord,children:"Discord"}),B.jsx("a",{href:dn.x,children:"X"})]})]})})}function AR(){const[s,e]=Hs.headline;return B.jsxs("section",{id:"hero",className:"hero","aria-labelledby":"hero-heading",children:[B.jsx("div",{className:"hero__atmosphere","aria-hidden":!0}),B.jsx("div",{className:"hero__grid","aria-hidden":!0}),B.jsx("div",{className:"hero__scanlines","aria-hidden":!0}),B.jsx("div",{className:"hero__grain","aria-hidden":!0}),B.jsx("div",{className:"hero__veil","aria-hidden":!0}),B.jsxs("div",{className:"container hero__content",children:[B.jsxs("a",{className:"hero__eyebrow",href:Hs.eyebrow.href,children:[Hs.eyebrow.label,B.jsx("span",{className:"hero__eyebrow-chevron","aria-hidden":!0,children:"›"})]}),B.jsxs("h1",{id:"hero-heading",className:"hero__headline",children:[B.jsx("span",{className:"hero__line hero__line--lead",children:s}),B.jsx("span",{className:"hero__line hero__line--punch",children:e})]}),B.jsxs("div",{className:"hero__ctas",children:[B.jsx(eo,{href:Hs.primaryCta.href,variant:"primary",children:Hs.primaryCta.label}),B.jsx(eo,{href:Hs.secondaryCta.href,variant:"secondary",children:Hs.secondaryCta.label})]})]})]})}const yv="!@#$%^&*()_+{}[]|;:,.<>?/0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",RR=50,Sx=3500,CR=4e3,wR=Sx+CR;function DR(){return typeof window>"u"?!1:window.matchMedia("(prefers-reduced-motion: reduce)").matches}function Ev(s){return/[A-Za-z0-9]/.test(s)}function UR(){return yv[Math.floor(Math.random()*yv.length)]??"?"}function NR(s){return Math.random()<.5?UR():s}function LR(s,e){const i=[];for(let p=0;p<s.length;p++)Ev(s[p]??"")&&i.push(p);const r=i.length,l=r===0?1:Math.min(e/Sx,1),c=Math.floor(l*r),u=new Set(i.slice(0,c));let h="";for(let p=0;p<s.length;p++){const m=s[p]??"";!Ev(m)||u.has(p)?h+=m:h+=NR(m)}return h}function OR(s,e=!0){const[i,r]=$t.useState(s);return $t.useEffect(()=>{if(!e||DR()){r(s);return}let l=Date.now();const c=()=>{const h=Date.now();let p=h-l;p>=wR&&(l=h,p=0),r(LR(s,p))};c();const u=setInterval(c,RR);return()=>{clearInterval(u)}},[s,e]),i}function PR(){const s=OR(Rd.text);return B.jsx("div",{className:"manifesto-strip",children:B.jsx("a",{className:"manifesto-strip__link manifesto-strip__link--matrix",href:Rd.href,"aria-label":Rd.text,children:s})})}function IR(){const s=[...h_,...h_];return B.jsx("div",{className:"marquee","aria-label":"Live status",children:B.jsx("div",{className:"marquee__viewport",children:B.jsx("div",{className:"marquee__track",children:s.map((e,i)=>B.jsx(vx,{label:e.label,status:e.status,live:"live"in e?e.live:!1},`${e.label}-${i}`))})})})}function FR(){return B.jsx("section",{id:"personas",className:"section personas",children:B.jsxs("div",{className:"container",children:[B.jsx("p",{className:"section-kicker",children:wd.kicker}),B.jsx("h2",{className:"section-title personas__title",children:wd.title}),B.jsx("div",{className:"personas__grid",children:wd.items.map(s=>B.jsxs("article",{className:`persona-card persona-card--${s.weight}`,children:[B.jsx("h3",{className:"persona-card__title",children:s.title}),B.jsx("ol",{className:"persona-card__steps",children:s.steps.map(e=>B.jsxs("li",{children:[B.jsxs("span",{className:"persona-card__chevron","aria-hidden":!0,children:[">"," "]}),e]},e))}),B.jsx(eo,{href:s.cta.href,variant:"ghost",className:"persona-card__cta",children:s.cta.label})]},s.title))})]})})}function BR(){const[s,e]=$t.useState(!1),[i,r]=$t.useState(!1),[l,c]=$t.useState("");return $t.useEffect(()=>{const u=()=>e(window.scrollY>24);return u(),window.addEventListener("scroll",u,{passive:!0}),()=>window.removeEventListener("scroll",u)},[]),$t.useEffect(()=>{const u=Kc.map(p=>p.id),h=new IntersectionObserver(p=>{var _;const m=p.filter(v=>v.isIntersecting).sort((v,g)=>g.intersectionRatio-v.intersectionRatio);(_=m[0])!=null&&_.target.id&&c(m[0].target.id)},{rootMargin:"-30% 0px -55% 0px",threshold:[0,.25,.5]});return u.forEach(p=>{const m=document.getElementById(p);m&&h.observe(m)}),()=>h.disconnect()},[]),$t.useEffect(()=>(document.body.style.overflow=i?"hidden":"",()=>{document.body.style.overflow=""}),[i]),B.jsxs(B.Fragment,{children:[B.jsx("header",{className:`sticky-header ${s?"sticky-header--solid":""}`,children:B.jsxs("div",{className:"sticky-header__inner",children:[B.jsx("a",{className:"sticky-header__logo",href:"#hero","aria-label":"Morpheum home",children:B.jsx(xx,{size:"sm",brandName:"Morpheum"})}),B.jsx("nav",{className:"sticky-header__nav","aria-label":"Primary",children:Kc.map(u=>B.jsx("a",{href:u.href,className:`sticky-header__link ${l===u.id?"is-active":""}`,children:u.label},u.id))}),B.jsxs("div",{className:"sticky-header__actions",children:[B.jsx("a",{className:"sticky-header__docs",href:dn.docs,children:"Docs"}),B.jsx(eo,{href:dn.app,variant:"primary",className:"sticky-header__launch",children:"Launch app"}),B.jsxs("button",{type:"button",className:"sticky-header__menu","aria-expanded":i,"aria-controls":"mobile-nav","aria-label":i?"Close menu":"Open menu",onClick:()=>r(u=>!u),children:[B.jsx("span",{}),B.jsx("span",{}),B.jsx("span",{})]})]})]})}),B.jsx("div",{id:"mobile-nav",className:`mobile-sheet ${i?"is-open":""}`,hidden:!i,children:B.jsxs("nav",{className:"mobile-sheet__nav","aria-label":"Mobile",children:[Kc.map(u=>B.jsx("a",{href:u.href,onClick:()=>r(!1),className:l===u.id?"is-active":"",children:u.label},u.id)),B.jsx("a",{href:dn.docs,onClick:()=>r(!1),children:"Docs"})]})})]})}function zR(){return B.jsx("section",{className:"thesis section","aria-label":"Thesis",children:B.jsxs("div",{className:"container thesis__inner",children:[B.jsx("p",{className:"section-kicker",children:"Two bad choices → Morpheum"}),B.jsx("div",{className:"thesis__choices",children:Cd.badChoices.map(s=>B.jsxs("div",{className:"thesis__choice",children:[B.jsx("p",{className:"thesis__choice-title",children:s.title}),B.jsxs("p",{className:"thesis__choice-detail",children:[B.jsx("span",{"aria-hidden":!0,children:"> "}),s.detail]})]},s.title))}),B.jsx("p",{className:"thesis__payoff",children:Cd.payoff}),B.jsx("p",{className:"thesis__close",children:Cd.close})]})})}function HR(){return B.jsxs("div",{className:"page",children:[B.jsx("a",{className:"skip-link",href:"#hero",children:"Skip to content"}),B.jsx(PR,{}),B.jsx(BR,{}),B.jsxs("main",{className:"page__main",children:[B.jsx(dR,{}),B.jsx(AR,{}),B.jsx(zR,{}),B.jsx(IR,{}),B.jsx(IM,{}),B.jsx(FR,{}),B.jsx(xR,{}),B.jsx(BM,{}),B.jsx(PM,{})]}),B.jsx(TR,{})]})}NM.createRoot(document.getElementById("root")).render(B.jsx($t.StrictMode,{children:B.jsx(HR,{})}));
