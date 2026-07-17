(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var vd={exports:{}},Ko={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n_;function dM(){if(n_)return Ko;n_=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(s,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var h in l)h!=="key"&&(c[h]=l[h])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:f,ref:l!==void 0?l:null,props:c}}return Ko.Fragment=e,Ko.jsx=i,Ko.jsxs=i,Ko}var i_;function hM(){return i_||(i_=1,vd.exports=dM()),vd.exports}var q=hM(),xd={exports:{}},ot={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var a_;function pM(){if(a_)return ot;a_=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),g=Symbol.iterator;function M(U){return U===null||typeof U!="object"?null:(U=g&&U[g]||U["@@iterator"],typeof U=="function"?U:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,y={};function S(U,Z,Ee){this.props=U,this.context=Z,this.refs=y,this.updater=Ee||b}S.prototype.isReactComponent={},S.prototype.setState=function(U,Z){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,Z,"setState")},S.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function I(){}I.prototype=S.prototype;function B(U,Z,Ee){this.props=U,this.context=Z,this.refs=y,this.updater=Ee||b}var C=B.prototype=new I;C.constructor=B,w(C,S.prototype),C.isPureReactComponent=!0;var O=Array.isArray;function N(){}var P={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function L(U,Z,Ee){var Ce=Ee.ref;return{$$typeof:r,type:U,key:Z,ref:Ce!==void 0?Ce:null,props:Ee}}function Y(U,Z){return L(U.type,Z,U.props)}function G(U){return typeof U=="object"&&U!==null&&U.$$typeof===r}function j(U){var Z={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(Ee){return Z[Ee]})}var pe=/\/+/g;function de(U,Z){return typeof U=="object"&&U!==null&&U.key!=null?j(""+U.key):Z.toString(36)}function J(U){switch(U.status){case"fulfilled":return U.value;case"rejected":throw U.reason;default:switch(typeof U.status=="string"?U.then(N,N):(U.status="pending",U.then(function(Z){U.status==="pending"&&(U.status="fulfilled",U.value=Z)},function(Z){U.status==="pending"&&(U.status="rejected",U.reason=Z)})),U.status){case"fulfilled":return U.value;case"rejected":throw U.reason}}throw U}function F(U,Z,Ee,Ce,Le){var ie=typeof U;(ie==="undefined"||ie==="boolean")&&(U=null);var Se=!1;if(U===null)Se=!0;else switch(ie){case"bigint":case"string":case"number":Se=!0;break;case"object":switch(U.$$typeof){case r:case e:Se=!0;break;case _:return Se=U._init,F(Se(U._payload),Z,Ee,Ce,Le)}}if(Se)return Le=Le(U),Se=Ce===""?"."+de(U,0):Ce,O(Le)?(Ee="",Se!=null&&(Ee=Se.replace(pe,"$&/")+"/"),F(Le,Z,Ee,"",function(nt){return nt})):Le!=null&&(G(Le)&&(Le=Y(Le,Ee+(Le.key==null||U&&U.key===Le.key?"":(""+Le.key).replace(pe,"$&/")+"/")+Se)),Z.push(Le)),1;Se=0;var Me=Ce===""?".":Ce+":";if(O(U))for(var ze=0;ze<U.length;ze++)Ce=U[ze],ie=Me+de(Ce,ze),Se+=F(Ce,Z,Ee,ie,Le);else if(ze=M(U),typeof ze=="function")for(U=ze.call(U),ze=0;!(Ce=U.next()).done;)Ce=Ce.value,ie=Me+de(Ce,ze++),Se+=F(Ce,Z,Ee,ie,Le);else if(ie==="object"){if(typeof U.then=="function")return F(J(U),Z,Ee,Ce,Le);throw Z=String(U),Error("Objects are not valid as a React child (found: "+(Z==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":Z)+"). If you meant to render a collection of children, use an array instead.")}return Se}function H(U,Z,Ee){if(U==null)return U;var Ce=[],Le=0;return F(U,Ce,"","",function(ie){return Z.call(Ee,ie,Le++)}),Ce}function ee(U){if(U._status===-1){var Z=U._result;Z=Z(),Z.then(function(Ee){(U._status===0||U._status===-1)&&(U._status=1,U._result=Ee)},function(Ee){(U._status===0||U._status===-1)&&(U._status=2,U._result=Ee)}),U._status===-1&&(U._status=0,U._result=Z)}if(U._status===1)return U._result.default;throw U._result}var _e=typeof reportError=="function"?reportError:function(U){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Z=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof U=="object"&&U!==null&&typeof U.message=="string"?String(U.message):String(U),error:U});if(!window.dispatchEvent(Z))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",U);return}console.error(U)},be={map:H,forEach:function(U,Z,Ee){H(U,function(){Z.apply(this,arguments)},Ee)},count:function(U){var Z=0;return H(U,function(){Z++}),Z},toArray:function(U){return H(U,function(Z){return Z})||[]},only:function(U){if(!G(U))throw Error("React.Children.only expected to receive a single React element child.");return U}};return ot.Activity=x,ot.Children=be,ot.Component=S,ot.Fragment=i,ot.Profiler=l,ot.PureComponent=B,ot.StrictMode=s,ot.Suspense=m,ot.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=P,ot.__COMPILER_RUNTIME={__proto__:null,c:function(U){return P.H.useMemoCache(U)}},ot.cache=function(U){return function(){return U.apply(null,arguments)}},ot.cacheSignal=function(){return null},ot.cloneElement=function(U,Z,Ee){if(U==null)throw Error("The argument must be a React element, but you passed "+U+".");var Ce=w({},U.props),Le=U.key;if(Z!=null)for(ie in Z.key!==void 0&&(Le=""+Z.key),Z)!T.call(Z,ie)||ie==="key"||ie==="__self"||ie==="__source"||ie==="ref"&&Z.ref===void 0||(Ce[ie]=Z[ie]);var ie=arguments.length-2;if(ie===1)Ce.children=Ee;else if(1<ie){for(var Se=Array(ie),Me=0;Me<ie;Me++)Se[Me]=arguments[Me+2];Ce.children=Se}return L(U.type,Le,Ce)},ot.createContext=function(U){return U={$$typeof:f,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null},U.Provider=U,U.Consumer={$$typeof:c,_context:U},U},ot.createElement=function(U,Z,Ee){var Ce,Le={},ie=null;if(Z!=null)for(Ce in Z.key!==void 0&&(ie=""+Z.key),Z)T.call(Z,Ce)&&Ce!=="key"&&Ce!=="__self"&&Ce!=="__source"&&(Le[Ce]=Z[Ce]);var Se=arguments.length-2;if(Se===1)Le.children=Ee;else if(1<Se){for(var Me=Array(Se),ze=0;ze<Se;ze++)Me[ze]=arguments[ze+2];Le.children=Me}if(U&&U.defaultProps)for(Ce in Se=U.defaultProps,Se)Le[Ce]===void 0&&(Le[Ce]=Se[Ce]);return L(U,ie,Le)},ot.createRef=function(){return{current:null}},ot.forwardRef=function(U){return{$$typeof:h,render:U}},ot.isValidElement=G,ot.lazy=function(U){return{$$typeof:_,_payload:{_status:-1,_result:U},_init:ee}},ot.memo=function(U,Z){return{$$typeof:p,type:U,compare:Z===void 0?null:Z}},ot.startTransition=function(U){var Z=P.T,Ee={};P.T=Ee;try{var Ce=U(),Le=P.S;Le!==null&&Le(Ee,Ce),typeof Ce=="object"&&Ce!==null&&typeof Ce.then=="function"&&Ce.then(N,_e)}catch(ie){_e(ie)}finally{Z!==null&&Ee.types!==null&&(Z.types=Ee.types),P.T=Z}},ot.unstable_useCacheRefresh=function(){return P.H.useCacheRefresh()},ot.use=function(U){return P.H.use(U)},ot.useActionState=function(U,Z,Ee){return P.H.useActionState(U,Z,Ee)},ot.useCallback=function(U,Z){return P.H.useCallback(U,Z)},ot.useContext=function(U){return P.H.useContext(U)},ot.useDebugValue=function(){},ot.useDeferredValue=function(U,Z){return P.H.useDeferredValue(U,Z)},ot.useEffect=function(U,Z){return P.H.useEffect(U,Z)},ot.useEffectEvent=function(U){return P.H.useEffectEvent(U)},ot.useId=function(){return P.H.useId()},ot.useImperativeHandle=function(U,Z,Ee){return P.H.useImperativeHandle(U,Z,Ee)},ot.useInsertionEffect=function(U,Z){return P.H.useInsertionEffect(U,Z)},ot.useLayoutEffect=function(U,Z){return P.H.useLayoutEffect(U,Z)},ot.useMemo=function(U,Z){return P.H.useMemo(U,Z)},ot.useOptimistic=function(U,Z){return P.H.useOptimistic(U,Z)},ot.useReducer=function(U,Z,Ee){return P.H.useReducer(U,Z,Ee)},ot.useRef=function(U){return P.H.useRef(U)},ot.useState=function(U){return P.H.useState(U)},ot.useSyncExternalStore=function(U,Z,Ee){return P.H.useSyncExternalStore(U,Z,Ee)},ot.useTransition=function(){return P.H.useTransition()},ot.version="19.2.7",ot}var s_;function tp(){return s_||(s_=1,xd.exports=pM()),xd.exports}var rn=tp(),Sd={exports:{}},Qo={},Md={exports:{}},yd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r_;function mM(){return r_||(r_=1,(function(r){function e(F,H){var ee=F.length;F.push(H);e:for(;0<ee;){var _e=ee-1>>>1,be=F[_e];if(0<l(be,H))F[_e]=H,F[ee]=be,ee=_e;else break e}}function i(F){return F.length===0?null:F[0]}function s(F){if(F.length===0)return null;var H=F[0],ee=F.pop();if(ee!==H){F[0]=ee;e:for(var _e=0,be=F.length,U=be>>>1;_e<U;){var Z=2*(_e+1)-1,Ee=F[Z],Ce=Z+1,Le=F[Ce];if(0>l(Ee,ee))Ce<be&&0>l(Le,Ee)?(F[_e]=Le,F[Ce]=ee,_e=Ce):(F[_e]=Ee,F[Z]=ee,_e=Z);else if(Ce<be&&0>l(Le,ee))F[_e]=Le,F[Ce]=ee,_e=Ce;else break e}}return H}function l(F,H){var ee=F.sortIndex-H.sortIndex;return ee!==0?ee:F.id-H.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var f=Date,h=f.now();r.unstable_now=function(){return f.now()-h}}var m=[],p=[],_=1,x=null,g=3,M=!1,b=!1,w=!1,y=!1,S=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,B=typeof setImmediate<"u"?setImmediate:null;function C(F){for(var H=i(p);H!==null;){if(H.callback===null)s(p);else if(H.startTime<=F)s(p),H.sortIndex=H.expirationTime,e(m,H);else break;H=i(p)}}function O(F){if(w=!1,C(F),!b)if(i(m)!==null)b=!0,N||(N=!0,j());else{var H=i(p);H!==null&&J(O,H.startTime-F)}}var N=!1,P=-1,T=5,L=-1;function Y(){return y?!0:!(r.unstable_now()-L<T)}function G(){if(y=!1,N){var F=r.unstable_now();L=F;var H=!0;try{e:{b=!1,w&&(w=!1,I(P),P=-1),M=!0;var ee=g;try{t:{for(C(F),x=i(m);x!==null&&!(x.expirationTime>F&&Y());){var _e=x.callback;if(typeof _e=="function"){x.callback=null,g=x.priorityLevel;var be=_e(x.expirationTime<=F);if(F=r.unstable_now(),typeof be=="function"){x.callback=be,C(F),H=!0;break t}x===i(m)&&s(m),C(F)}else s(m);x=i(m)}if(x!==null)H=!0;else{var U=i(p);U!==null&&J(O,U.startTime-F),H=!1}}break e}finally{x=null,g=ee,M=!1}H=void 0}}finally{H?j():N=!1}}}var j;if(typeof B=="function")j=function(){B(G)};else if(typeof MessageChannel<"u"){var pe=new MessageChannel,de=pe.port2;pe.port1.onmessage=G,j=function(){de.postMessage(null)}}else j=function(){S(G,0)};function J(F,H){P=S(function(){F(r.unstable_now())},H)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(F){F.callback=null},r.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<F?Math.floor(1e3/F):5},r.unstable_getCurrentPriorityLevel=function(){return g},r.unstable_next=function(F){switch(g){case 1:case 2:case 3:var H=3;break;default:H=g}var ee=g;g=H;try{return F()}finally{g=ee}},r.unstable_requestPaint=function(){y=!0},r.unstable_runWithPriority=function(F,H){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var ee=g;g=F;try{return H()}finally{g=ee}},r.unstable_scheduleCallback=function(F,H,ee){var _e=r.unstable_now();switch(typeof ee=="object"&&ee!==null?(ee=ee.delay,ee=typeof ee=="number"&&0<ee?_e+ee:_e):ee=_e,F){case 1:var be=-1;break;case 2:be=250;break;case 5:be=1073741823;break;case 4:be=1e4;break;default:be=5e3}return be=ee+be,F={id:_++,callback:H,priorityLevel:F,startTime:ee,expirationTime:be,sortIndex:-1},ee>_e?(F.sortIndex=ee,e(p,F),i(m)===null&&F===i(p)&&(w?(I(P),P=-1):w=!0,J(O,ee-_e))):(F.sortIndex=be,e(m,F),b||M||(b=!0,N||(N=!0,j()))),F},r.unstable_shouldYield=Y,r.unstable_wrapCallback=function(F){var H=g;return function(){var ee=g;g=H;try{return F.apply(this,arguments)}finally{g=ee}}}})(yd)),yd}var o_;function gM(){return o_||(o_=1,Md.exports=mM()),Md.exports}var Ed={exports:{}},zn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var l_;function _M(){if(l_)return zn;l_=1;var r=tp();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)p+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,_){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:x==null?null:""+x,children:m,containerInfo:p,implementation:_}}var f=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return zn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,zn.createPortal=function(m,p){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return c(m,p,null,_)},zn.flushSync=function(m){var p=f.T,_=s.p;try{if(f.T=null,s.p=2,m)return m()}finally{f.T=p,s.p=_,s.d.f()}},zn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},zn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},zn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var _=p.as,x=h(_,p.crossOrigin),g=typeof p.integrity=="string"?p.integrity:void 0,M=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;_==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:x,integrity:g,fetchPriority:M}):_==="script"&&s.d.X(m,{crossOrigin:x,integrity:g,fetchPriority:M,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},zn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var _=h(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},zn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var _=p.as,x=h(_,p.crossOrigin);s.d.L(m,_,{crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},zn.preloadModule=function(m,p){if(typeof m=="string")if(p){var _=h(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},zn.requestFormReset=function(m){s.d.r(m)},zn.unstable_batchedUpdates=function(m,p){return m(p)},zn.useFormState=function(m,p,_){return f.H.useFormState(m,p,_)},zn.useFormStatus=function(){return f.H.useHostTransitionStatus()},zn.version="19.2.7",zn}var c_;function vM(){if(c_)return Ed.exports;c_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Ed.exports=_M(),Ed.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var u_;function xM(){if(u_)return Qo;u_=1;var r=gM(),e=tp(),i=vM();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function f(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function h(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(s(188))}function p(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(s(188));return n!==t?null:t}for(var a=t,o=n;;){var u=a.return;if(u===null)break;var d=u.alternate;if(d===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===d.child){for(d=u.child;d;){if(d===a)return m(u),t;if(d===o)return m(u),n;d=d.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=d;else{for(var v=!1,R=u.child;R;){if(R===a){v=!0,a=u,o=d;break}if(R===o){v=!0,o=u,a=d;break}R=R.sibling}if(!v){for(R=d.child;R;){if(R===a){v=!0,a=d,o=u;break}if(R===o){v=!0,o=d,a=u;break}R=R.sibling}if(!v)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:n}function _(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=_(t),n!==null)return n;t=t.sibling}return null}var x=Object.assign,g=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),w=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),I=Symbol.for("react.consumer"),B=Symbol.for("react.context"),C=Symbol.for("react.forward_ref"),O=Symbol.for("react.suspense"),N=Symbol.for("react.suspense_list"),P=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),L=Symbol.for("react.activity"),Y=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function j(t){return t===null||typeof t!="object"?null:(t=G&&t[G]||t["@@iterator"],typeof t=="function"?t:null)}var pe=Symbol.for("react.client.reference");function de(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===pe?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case w:return"Fragment";case S:return"Profiler";case y:return"StrictMode";case O:return"Suspense";case N:return"SuspenseList";case L:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case b:return"Portal";case B:return t.displayName||"Context";case I:return(t._context.displayName||"Context")+".Consumer";case C:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case P:return n=t.displayName||null,n!==null?n:de(t.type)||"Memo";case T:n=t._payload,t=t._init;try{return de(t(n))}catch{}}return null}var J=Array.isArray,F=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ee={pending:!1,data:null,method:null,action:null},_e=[],be=-1;function U(t){return{current:t}}function Z(t){0>be||(t.current=_e[be],_e[be]=null,be--)}function Ee(t,n){be++,_e[be]=t.current,t.current=n}var Ce=U(null),Le=U(null),ie=U(null),Se=U(null);function Me(t,n){switch(Ee(ie,n),Ee(Le,t),Ee(Ce,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?Tg(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=Tg(n),t=Ag(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Z(Ce),Ee(Ce,t)}function ze(){Z(Ce),Z(Le),Z(ie)}function nt(t){t.memoizedState!==null&&Ee(Se,t);var n=Ce.current,a=Ag(n,t.type);n!==a&&(Ee(Le,t),Ee(Ce,a))}function je(t){Le.current===t&&(Z(Ce),Z(Le)),Se.current===t&&(Z(Se),Wo._currentValue=ee)}var Yt,ct;function _t(t){if(Yt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Yt=n&&n[1]||"",ct=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Yt+t+ct}var Ye=!1;function Ze(t,n){if(!t||Ye)return"";Ye=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var xe=function(){throw Error()};if(Object.defineProperty(xe.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(xe,[])}catch(ce){var le=ce}Reflect.construct(t,[],xe)}else{try{xe.call()}catch(ce){le=ce}t.call(xe.prototype)}}else{try{throw Error()}catch(ce){le=ce}(xe=t())&&typeof xe.catch=="function"&&xe.catch(function(){})}}catch(ce){if(ce&&le&&typeof ce.stack=="string")return[ce.stack,le.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=o.DetermineComponentFrameRoot(),v=d[0],R=d[1];if(v&&R){var z=v.split(`
`),ae=R.split(`
`);for(u=o=0;o<z.length&&!z[o].includes("DetermineComponentFrameRoot");)o++;for(;u<ae.length&&!ae[u].includes("DetermineComponentFrameRoot");)u++;if(o===z.length||u===ae.length)for(o=z.length-1,u=ae.length-1;1<=o&&0<=u&&z[o]!==ae[u];)u--;for(;1<=o&&0<=u;o--,u--)if(z[o]!==ae[u]){if(o!==1||u!==1)do if(o--,u--,0>u||z[o]!==ae[u]){var ge=`
`+z[o].replace(" at new "," at ");return t.displayName&&ge.includes("<anonymous>")&&(ge=ge.replace("<anonymous>",t.displayName)),ge}while(1<=o&&0<=u);break}}}finally{Ye=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?_t(a):""}function rt(t,n){switch(t.tag){case 26:case 27:case 5:return _t(t.type);case 16:return _t("Lazy");case 13:return t.child!==n&&n!==null?_t("Suspense Fallback"):_t("Suspense");case 19:return _t("SuspenseList");case 0:case 15:return Ze(t.type,!1);case 11:return Ze(t.type.render,!1);case 1:return Ze(t.type,!0);case 31:return _t("Activity");default:return""}}function pt(t){try{var n="",a=null;do n+=rt(t,a),a=t,t=t.return;while(t);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var Ct=Object.prototype.hasOwnProperty,wt=r.unstable_scheduleCallback,ut=r.unstable_cancelCallback,gt=r.unstable_shouldYield,k=r.unstable_requestPaint,St=r.unstable_now,vt=r.unstable_getCurrentPriorityLevel,D=r.unstable_ImmediatePriority,E=r.unstable_UserBlockingPriority,Q=r.unstable_NormalPriority,te=r.unstable_LowPriority,ue=r.unstable_IdlePriority,Re=r.log,De=r.unstable_setDisableYieldValue,fe=null,he=null;function Te(t){if(typeof Re=="function"&&De(t),he&&typeof he.setStrictMode=="function")try{he.setStrictMode(fe,t)}catch{}}var Be=Math.clz32?Math.clz32:Je,Ue=Math.log,Ne=Math.LN2;function Je(t){return t>>>=0,t===0?32:31-(Ue(t)/Ne|0)|0}var Ke=256,at=262144,X=4194304;function Ae(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function me(t,n,a){var o=t.pendingLanes;if(o===0)return 0;var u=0,d=t.suspendedLanes,v=t.pingedLanes;t=t.warmLanes;var R=o&134217727;return R!==0?(o=R&~d,o!==0?u=Ae(o):(v&=R,v!==0?u=Ae(v):a||(a=R&~t,a!==0&&(u=Ae(a))))):(R=o&~d,R!==0?u=Ae(R):v!==0?u=Ae(v):a||(a=o&~t,a!==0&&(u=Ae(a)))),u===0?0:n!==0&&n!==u&&(n&d)===0&&(d=u&-u,a=n&-n,d>=a||d===32&&(a&4194048)!==0)?n:u}function we(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function Pe(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ye(){var t=X;return X<<=1,(X&62914560)===0&&(X=4194304),t}function Xe(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function He(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Ht(t,n,a,o,u,d){var v=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var R=t.entanglements,z=t.expirationTimes,ae=t.hiddenUpdates;for(a=v&~a;0<a;){var ge=31-Be(a),xe=1<<ge;R[ge]=0,z[ge]=-1;var le=ae[ge];if(le!==null)for(ae[ge]=null,ge=0;ge<le.length;ge++){var ce=le[ge];ce!==null&&(ce.lane&=-536870913)}a&=~xe}o!==0&&Ut(t,o,0),d!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=d&~(v&~n))}function Ut(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var o=31-Be(n);t.entangledLanes|=n,t.entanglements[o]=t.entanglements[o]|1073741824|a&261930}function kn(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var o=31-Be(a),u=1<<o;u&n|t[o]&n&&(t[o]|=n),a&=~u}}function Fn(t,n){var a=n&-n;return a=(a&42)!==0?1:Fa(a),(a&(t.suspendedLanes|n))!==0?0:a}function Fa(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function hn(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function En(){var t=H.p;return t!==0?t:(t=window.event,t===void 0?32:Kg(t.type))}function ai(t,n){var a=H.p;try{return H.p=t,n()}finally{H.p=a}}var pn=Math.random().toString(36).slice(2),Lt="__reactFiber$"+pn,$t="__reactProps$"+pn,Cn="__reactContainer$"+pn,Kn="__reactEvents$"+pn,Ms="__reactListeners$"+pn,Ba="__reactHandles$"+pn,ki="__reactResources$"+pn,za="__reactMarker$"+pn;function Ha(t){delete t[Lt],delete t[$t],delete t[Kn],delete t[Ms],delete t[Ba]}function ra(t){var n=t[Lt];if(n)return n;for(var a=t.parentNode;a;){if(n=a[Cn]||a[Lt]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=Lg(t);t!==null;){if(a=t[Lt])return a;t=Lg(t)}return n}t=a,a=t.parentNode}return null}function oa(t){if(t=t[Lt]||t[Cn]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function ys(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function Ga(t){var n=t[ki];return n||(n=t[ki]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function mn(t){t[za]=!0}var _l=new Set,A={};function W(t,n){oe(t,n),oe(t+"Capture",n)}function oe(t,n){for(A[t]=n,t=0;t<n.length;t++)_l.add(n[t])}var se=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),re={},Ie={};function Ve(t){return Ct.call(Ie,t)?!0:Ct.call(re,t)?!1:se.test(t)?Ie[t]=!0:(re[t]=!0,!1)}function Oe(t,n,a){if(Ve(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function We(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function ke(t,n,a,o){if(o===null)t.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+o)}}function et(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ft(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function $e(t,n,a){var o=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,d=o.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(v){a=""+v,d.call(this,v)}}),Object.defineProperty(t,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(v){a=""+v},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Ot(t){if(!t._valueTracker){var n=ft(t)?"checked":"value";t._valueTracker=$e(t,n,""+t[n])}}function nn(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return t&&(o=ft(t)?t.checked?"true":"false":t.value),t=o,t!==a?(n.setValue(t),!0):!1}function jt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Gt=/[\n"\\]/g;function Vt(t){return t.replace(Gt,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Ge(t,n,a,o,u,d,v,R){t.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?t.type=v:t.removeAttribute("type"),n!=null?v==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+et(n)):t.value!==""+et(n)&&(t.value=""+et(n)):v!=="submit"&&v!=="reset"||t.removeAttribute("value"),n!=null?Mt(t,v,et(n)):a!=null?Mt(t,v,et(a)):o!=null&&t.removeAttribute("value"),u==null&&d!=null&&(t.defaultChecked=!!d),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?t.name=""+et(R):t.removeAttribute("name")}function Bn(t,n,a,o,u,d,v,R){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(t.type=d),n!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||n!=null)){Ot(t);return}a=a!=null?""+et(a):"",n=n!=null?""+et(n):a,R||n===t.value||(t.value=n),t.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=R?t.checked:!!o,t.defaultChecked=!!o,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(t.name=v),Ot(t)}function Mt(t,n,a){n==="number"&&jt(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function bn(t,n,a,o){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&o&&(t[a].defaultSelected=!0)}else{for(a=""+et(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,o&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function si(t,n,a){if(n!=null&&(n=""+et(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+et(a):""}function Ui(t,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(J(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=et(n),t.defaultValue=a,o=t.textContent,o===a&&o!==""&&o!==null&&(t.value=o),Ot(t)}function ri(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var kt=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function an(t,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":o?t.setProperty(n,a):typeof a!="number"||a===0||kt.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Ni(t,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&an(t,u,o)}else for(var d in n)n.hasOwnProperty(d)&&an(t,d,n[d])}function zt(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Xi=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Va=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Es(t){return Va.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function la(){}var pu=null;function mu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var tr=null,nr=null;function bp(t){var n=oa(t);if(n&&(t=n.stateNode)){var a=t[$t]||null;e:switch(t=n.stateNode,n.type){case"input":if(Ge(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Vt(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==t&&o.form===t.form){var u=o[$t]||null;if(!u)throw Error(s(90));Ge(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===t.form&&nn(o)}break e;case"textarea":si(t,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&bn(t,!!a.multiple,n,!1)}}}var gu=!1;function Tp(t,n,a){if(gu)return t(n,a);gu=!0;try{var o=t(n);return o}finally{if(gu=!1,(tr!==null||nr!==null)&&(ac(),tr&&(n=tr,t=nr,nr=tr=null,bp(n),t)))for(n=0;n<t.length;n++)bp(t[n])}}function oo(t,n){var a=t.stateNode;if(a===null)return null;var o=a[$t]||null;if(o===null)return null;a=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var ca=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),_u=!1;if(ca)try{var lo={};Object.defineProperty(lo,"passive",{get:function(){_u=!0}}),window.addEventListener("test",lo,lo),window.removeEventListener("test",lo,lo)}catch{_u=!1}var ka=null,vu=null,vl=null;function Ap(){if(vl)return vl;var t,n=vu,a=n.length,o,u="value"in ka?ka.value:ka.textContent,d=u.length;for(t=0;t<a&&n[t]===u[t];t++);var v=a-t;for(o=1;o<=v&&n[a-o]===u[d-o];o++);return vl=u.slice(t,1<o?1-o:void 0)}function xl(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Sl(){return!0}function Rp(){return!1}function Qn(t){function n(a,o,u,d,v){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=d,this.target=v,this.currentTarget=null;for(var R in t)t.hasOwnProperty(R)&&(a=t[R],this[R]=a?a(d):d[R]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?Sl:Rp,this.isPropagationStopped=Rp,this}return x(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Sl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Sl)},persist:function(){},isPersistent:Sl}),n}var bs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ml=Qn(bs),co=x({},bs,{view:0,detail:0}),ux=Qn(co),xu,Su,uo,yl=x({},co,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:yu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==uo&&(uo&&t.type==="mousemove"?(xu=t.screenX-uo.screenX,Su=t.screenY-uo.screenY):Su=xu=0,uo=t),xu)},movementY:function(t){return"movementY"in t?t.movementY:Su}}),Cp=Qn(yl),fx=x({},yl,{dataTransfer:0}),dx=Qn(fx),hx=x({},co,{relatedTarget:0}),Mu=Qn(hx),px=x({},bs,{animationName:0,elapsedTime:0,pseudoElement:0}),mx=Qn(px),gx=x({},bs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),_x=Qn(gx),vx=x({},bs,{data:0}),wp=Qn(vx),xx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Sx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Mx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function yx(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=Mx[t])?!!n[t]:!1}function yu(){return yx}var Ex=x({},co,{key:function(t){if(t.key){var n=xx[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=xl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Sx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:yu,charCode:function(t){return t.type==="keypress"?xl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?xl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),bx=Qn(Ex),Tx=x({},yl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Dp=Qn(Tx),Ax=x({},co,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:yu}),Rx=Qn(Ax),Cx=x({},bs,{propertyName:0,elapsedTime:0,pseudoElement:0}),wx=Qn(Cx),Dx=x({},yl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Ux=Qn(Dx),Nx=x({},bs,{newState:0,oldState:0}),Lx=Qn(Nx),Ox=[9,13,27,32],Eu=ca&&"CompositionEvent"in window,fo=null;ca&&"documentMode"in document&&(fo=document.documentMode);var Px=ca&&"TextEvent"in window&&!fo,Up=ca&&(!Eu||fo&&8<fo&&11>=fo),Np=" ",Lp=!1;function Op(t,n){switch(t){case"keyup":return Ox.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Pp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ir=!1;function Ix(t,n){switch(t){case"compositionend":return Pp(n);case"keypress":return n.which!==32?null:(Lp=!0,Np);case"textInput":return t=n.data,t===Np&&Lp?null:t;default:return null}}function Fx(t,n){if(ir)return t==="compositionend"||!Eu&&Op(t,n)?(t=Ap(),vl=vu=ka=null,ir=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Up&&n.locale!=="ko"?null:n.data;default:return null}}var Bx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ip(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!Bx[t.type]:n==="textarea"}function Fp(t,n,a,o){tr?nr?nr.push(o):nr=[o]:tr=o,n=fc(n,"onChange"),0<n.length&&(a=new Ml("onChange","change",null,a,o),t.push({event:a,listeners:n}))}var ho=null,po=null;function zx(t){xg(t,0)}function El(t){var n=ys(t);if(nn(n))return t}function Bp(t,n){if(t==="change")return n}var zp=!1;if(ca){var bu;if(ca){var Tu="oninput"in document;if(!Tu){var Hp=document.createElement("div");Hp.setAttribute("oninput","return;"),Tu=typeof Hp.oninput=="function"}bu=Tu}else bu=!1;zp=bu&&(!document.documentMode||9<document.documentMode)}function Gp(){ho&&(ho.detachEvent("onpropertychange",Vp),po=ho=null)}function Vp(t){if(t.propertyName==="value"&&El(po)){var n=[];Fp(n,po,t,mu(t)),Tp(zx,n)}}function Hx(t,n,a){t==="focusin"?(Gp(),ho=n,po=a,ho.attachEvent("onpropertychange",Vp)):t==="focusout"&&Gp()}function Gx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return El(po)}function Vx(t,n){if(t==="click")return El(n)}function kx(t,n){if(t==="input"||t==="change")return El(n)}function Xx(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var oi=typeof Object.is=="function"?Object.is:Xx;function mo(t,n){if(oi(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!Ct.call(n,u)||!oi(t[u],n[u]))return!1}return!0}function kp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Xp(t,n){var a=kp(t);t=0;for(var o;a;){if(a.nodeType===3){if(o=t+a.textContent.length,t<=n&&o>=n)return{node:a,offset:n-t};t=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=kp(a)}}function Wp(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Wp(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function qp(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=jt(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=jt(t.document)}return n}function Au(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var Wx=ca&&"documentMode"in document&&11>=document.documentMode,ar=null,Ru=null,go=null,Cu=!1;function Yp(t,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Cu||ar==null||ar!==jt(o)||(o=ar,"selectionStart"in o&&Au(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),go&&mo(go,o)||(go=o,o=fc(Ru,"onSelect"),0<o.length&&(n=new Ml("onSelect","select",null,n,a),t.push({event:n,listeners:o}),n.target=ar)))}function Ts(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var sr={animationend:Ts("Animation","AnimationEnd"),animationiteration:Ts("Animation","AnimationIteration"),animationstart:Ts("Animation","AnimationStart"),transitionrun:Ts("Transition","TransitionRun"),transitionstart:Ts("Transition","TransitionStart"),transitioncancel:Ts("Transition","TransitionCancel"),transitionend:Ts("Transition","TransitionEnd")},wu={},Zp={};ca&&(Zp=document.createElement("div").style,"AnimationEvent"in window||(delete sr.animationend.animation,delete sr.animationiteration.animation,delete sr.animationstart.animation),"TransitionEvent"in window||delete sr.transitionend.transition);function As(t){if(wu[t])return wu[t];if(!sr[t])return t;var n=sr[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in Zp)return wu[t]=n[a];return t}var Kp=As("animationend"),Qp=As("animationiteration"),jp=As("animationstart"),qx=As("transitionrun"),Yx=As("transitionstart"),Zx=As("transitioncancel"),Jp=As("transitionend"),$p=new Map,Du="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Du.push("scrollEnd");function Li(t,n){$p.set(t,n),W(n,[t])}var bl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},_i=[],rr=0,Uu=0;function Tl(){for(var t=rr,n=Uu=rr=0;n<t;){var a=_i[n];_i[n++]=null;var o=_i[n];_i[n++]=null;var u=_i[n];_i[n++]=null;var d=_i[n];if(_i[n++]=null,o!==null&&u!==null){var v=o.pending;v===null?u.next=u:(u.next=v.next,v.next=u),o.pending=u}d!==0&&em(a,u,d)}}function Al(t,n,a,o){_i[rr++]=t,_i[rr++]=n,_i[rr++]=a,_i[rr++]=o,Uu|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function Nu(t,n,a,o){return Al(t,n,a,o),Rl(t)}function Rs(t,n){return Al(t,null,null,n),Rl(t)}function em(t,n,a){t.lanes|=a;var o=t.alternate;o!==null&&(o.lanes|=a);for(var u=!1,d=t.return;d!==null;)d.childLanes|=a,o=d.alternate,o!==null&&(o.childLanes|=a),d.tag===22&&(t=d.stateNode,t===null||t._visibility&1||(u=!0)),t=d,d=d.return;return t.tag===3?(d=t.stateNode,u&&n!==null&&(u=31-Be(a),t=d.hiddenUpdates,o=t[u],o===null?t[u]=[n]:o.push(n),n.lane=a|536870912),d):null}function Rl(t){if(50<Bo)throw Bo=0,Vf=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var or={};function Kx(t,n,a,o){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function li(t,n,a,o){return new Kx(t,n,a,o)}function Lu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ua(t,n){var a=t.alternate;return a===null?(a=li(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function tm(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function Cl(t,n,a,o,u,d){var v=0;if(o=t,typeof t=="function")Lu(t)&&(v=1);else if(typeof t=="string")v=eM(t,a,Ce.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case L:return t=li(31,a,n,u),t.elementType=L,t.lanes=d,t;case w:return Cs(a.children,u,d,n);case y:v=8,u|=24;break;case S:return t=li(12,a,n,u|2),t.elementType=S,t.lanes=d,t;case O:return t=li(13,a,n,u),t.elementType=O,t.lanes=d,t;case N:return t=li(19,a,n,u),t.elementType=N,t.lanes=d,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case B:v=10;break e;case I:v=9;break e;case C:v=11;break e;case P:v=14;break e;case T:v=16,o=null;break e}v=29,a=Error(s(130,t===null?"null":typeof t,"")),o=null}return n=li(v,a,n,u),n.elementType=t,n.type=o,n.lanes=d,n}function Cs(t,n,a,o){return t=li(7,t,o,n),t.lanes=a,t}function Ou(t,n,a){return t=li(6,t,null,n),t.lanes=a,t}function nm(t){var n=li(18,null,null,0);return n.stateNode=t,n}function Pu(t,n,a){return n=li(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var im=new WeakMap;function vi(t,n){if(typeof t=="object"&&t!==null){var a=im.get(t);return a!==void 0?a:(n={value:t,source:n,stack:pt(n)},im.set(t,n),n)}return{value:t,source:n,stack:pt(n)}}var lr=[],cr=0,wl=null,_o=0,xi=[],Si=0,Xa=null,Wi=1,qi="";function fa(t,n){lr[cr++]=_o,lr[cr++]=wl,wl=t,_o=n}function am(t,n,a){xi[Si++]=Wi,xi[Si++]=qi,xi[Si++]=Xa,Xa=t;var o=Wi;t=qi;var u=32-Be(o)-1;o&=~(1<<u),a+=1;var d=32-Be(n)+u;if(30<d){var v=u-u%5;d=(o&(1<<v)-1).toString(32),o>>=v,u-=v,Wi=1<<32-Be(n)+u|a<<u|o,qi=d+t}else Wi=1<<d|a<<u|o,qi=t}function Iu(t){t.return!==null&&(fa(t,1),am(t,1,0))}function Fu(t){for(;t===wl;)wl=lr[--cr],lr[cr]=null,_o=lr[--cr],lr[cr]=null;for(;t===Xa;)Xa=xi[--Si],xi[Si]=null,qi=xi[--Si],xi[Si]=null,Wi=xi[--Si],xi[Si]=null}function sm(t,n){xi[Si++]=Wi,xi[Si++]=qi,xi[Si++]=Xa,Wi=n.id,qi=n.overflow,Xa=t}var Nn=null,en=null,At=!1,Wa=null,Mi=!1,Bu=Error(s(519));function qa(t){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw vo(vi(n,t)),Bu}function rm(t){var n=t.stateNode,a=t.type,o=t.memoizedProps;switch(n[Lt]=t,n[$t]=o,a){case"dialog":Et("cancel",n),Et("close",n);break;case"iframe":case"object":case"embed":Et("load",n);break;case"video":case"audio":for(a=0;a<Ho.length;a++)Et(Ho[a],n);break;case"source":Et("error",n);break;case"img":case"image":case"link":Et("error",n),Et("load",n);break;case"details":Et("toggle",n);break;case"input":Et("invalid",n),Bn(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":Et("invalid",n);break;case"textarea":Et("invalid",n),Ui(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||Eg(n.textContent,a)?(o.popover!=null&&(Et("beforetoggle",n),Et("toggle",n)),o.onScroll!=null&&Et("scroll",n),o.onScrollEnd!=null&&Et("scrollend",n),o.onClick!=null&&(n.onclick=la),n=!0):n=!1,n||qa(t,!0)}function om(t){for(Nn=t.return;Nn;)switch(Nn.tag){case 5:case 31:case 13:Mi=!1;return;case 27:case 3:Mi=!0;return;default:Nn=Nn.return}}function ur(t){if(t!==Nn)return!1;if(!At)return om(t),At=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||id(t.type,t.memoizedProps)),a=!a),a&&en&&qa(t),om(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));en=Ng(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));en=Ng(t)}else n===27?(n=en,rs(t.type)?(t=ld,ld=null,en=t):en=n):en=Nn?Ei(t.stateNode.nextSibling):null;return!0}function ws(){en=Nn=null,At=!1}function zu(){var t=Wa;return t!==null&&(ei===null?ei=t:ei.push.apply(ei,t),Wa=null),t}function vo(t){Wa===null?Wa=[t]:Wa.push(t)}var Hu=U(null),Ds=null,da=null;function Ya(t,n,a){Ee(Hu,n._currentValue),n._currentValue=a}function ha(t){t._currentValue=Hu.current,Z(Hu)}function Gu(t,n,a){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===a)break;t=t.return}}function Vu(t,n,a,o){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var d=u.dependencies;if(d!==null){var v=u.child;d=d.firstContext;e:for(;d!==null;){var R=d;d=u;for(var z=0;z<n.length;z++)if(R.context===n[z]){d.lanes|=a,R=d.alternate,R!==null&&(R.lanes|=a),Gu(d.return,a,t),o||(v=null);break e}d=R.next}}else if(u.tag===18){if(v=u.return,v===null)throw Error(s(341));v.lanes|=a,d=v.alternate,d!==null&&(d.lanes|=a),Gu(v,a,t),v=null}else v=u.child;if(v!==null)v.return=u;else for(v=u;v!==null;){if(v===t){v=null;break}if(u=v.sibling,u!==null){u.return=v.return,v=u;break}v=v.return}u=v}}function fr(t,n,a,o){t=null;for(var u=n,d=!1;u!==null;){if(!d){if((u.flags&524288)!==0)d=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var v=u.alternate;if(v===null)throw Error(s(387));if(v=v.memoizedProps,v!==null){var R=u.type;oi(u.pendingProps.value,v.value)||(t!==null?t.push(R):t=[R])}}else if(u===Se.current){if(v=u.alternate,v===null)throw Error(s(387));v.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(Wo):t=[Wo])}u=u.return}t!==null&&Vu(n,t,a,o),n.flags|=262144}function Dl(t){for(t=t.firstContext;t!==null;){if(!oi(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Us(t){Ds=t,da=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Ln(t){return lm(Ds,t)}function Ul(t,n){return Ds===null&&Us(t),lm(t,n)}function lm(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},da===null){if(t===null)throw Error(s(308));da=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else da=da.next=n;return a}var Qx=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,o){t.push(o)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},jx=r.unstable_scheduleCallback,Jx=r.unstable_NormalPriority,gn={$$typeof:B,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ku(){return{controller:new Qx,data:new Map,refCount:0}}function xo(t){t.refCount--,t.refCount===0&&jx(Jx,function(){t.controller.abort()})}var So=null,Xu=0,dr=0,hr=null;function $x(t,n){if(So===null){var a=So=[];Xu=0,dr=Zf(),hr={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Xu++,n.then(cm,cm),n}function cm(){if(--Xu===0&&So!==null){hr!==null&&(hr.status="fulfilled");var t=So;So=null,dr=0,hr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function eS(t,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var um=F.S;F.S=function(t,n){Y0=St(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&$x(t,n),um!==null&&um(t,n)};var Ns=U(null);function Wu(){var t=Ns.current;return t!==null?t:Jt.pooledCache}function Nl(t,n){n===null?Ee(Ns,Ns.current):Ee(Ns,n.pool)}function fm(){var t=Wu();return t===null?null:{parent:gn._currentValue,pool:t}}var pr=Error(s(460)),qu=Error(s(474)),Ll=Error(s(542)),Ol={then:function(){}};function dm(t){return t=t.status,t==="fulfilled"||t==="rejected"}function hm(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(la,la),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,mm(t),t;default:if(typeof n.status=="string")n.then(la,la);else{if(t=Jt,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,mm(t),t}throw Os=n,pr}}function Ls(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Os=a,pr):a}}var Os=null;function pm(){if(Os===null)throw Error(s(459));var t=Os;return Os=null,t}function mm(t){if(t===pr||t===Ll)throw Error(s(483))}var mr=null,Mo=0;function Pl(t){var n=Mo;return Mo+=1,mr===null&&(mr=[]),hm(mr,t,n)}function yo(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Il(t,n){throw n.$$typeof===g?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function gm(t){function n(K,V){if(t){var ne=K.deletions;ne===null?(K.deletions=[V],K.flags|=16):ne.push(V)}}function a(K,V){if(!t)return null;for(;V!==null;)n(K,V),V=V.sibling;return null}function o(K){for(var V=new Map;K!==null;)K.key!==null?V.set(K.key,K):V.set(K.index,K),K=K.sibling;return V}function u(K,V){return K=ua(K,V),K.index=0,K.sibling=null,K}function d(K,V,ne){return K.index=ne,t?(ne=K.alternate,ne!==null?(ne=ne.index,ne<V?(K.flags|=67108866,V):ne):(K.flags|=67108866,V)):(K.flags|=1048576,V)}function v(K){return t&&K.alternate===null&&(K.flags|=67108866),K}function R(K,V,ne,ve){return V===null||V.tag!==6?(V=Ou(ne,K.mode,ve),V.return=K,V):(V=u(V,ne),V.return=K,V)}function z(K,V,ne,ve){var tt=ne.type;return tt===w?ge(K,V,ne.props.children,ve,ne.key):V!==null&&(V.elementType===tt||typeof tt=="object"&&tt!==null&&tt.$$typeof===T&&Ls(tt)===V.type)?(V=u(V,ne.props),yo(V,ne),V.return=K,V):(V=Cl(ne.type,ne.key,ne.props,null,K.mode,ve),yo(V,ne),V.return=K,V)}function ae(K,V,ne,ve){return V===null||V.tag!==4||V.stateNode.containerInfo!==ne.containerInfo||V.stateNode.implementation!==ne.implementation?(V=Pu(ne,K.mode,ve),V.return=K,V):(V=u(V,ne.children||[]),V.return=K,V)}function ge(K,V,ne,ve,tt){return V===null||V.tag!==7?(V=Cs(ne,K.mode,ve,tt),V.return=K,V):(V=u(V,ne),V.return=K,V)}function xe(K,V,ne){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return V=Ou(""+V,K.mode,ne),V.return=K,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case M:return ne=Cl(V.type,V.key,V.props,null,K.mode,ne),yo(ne,V),ne.return=K,ne;case b:return V=Pu(V,K.mode,ne),V.return=K,V;case T:return V=Ls(V),xe(K,V,ne)}if(J(V)||j(V))return V=Cs(V,K.mode,ne,null),V.return=K,V;if(typeof V.then=="function")return xe(K,Pl(V),ne);if(V.$$typeof===B)return xe(K,Ul(K,V),ne);Il(K,V)}return null}function le(K,V,ne,ve){var tt=V!==null?V.key:null;if(typeof ne=="string"&&ne!==""||typeof ne=="number"||typeof ne=="bigint")return tt!==null?null:R(K,V,""+ne,ve);if(typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case M:return ne.key===tt?z(K,V,ne,ve):null;case b:return ne.key===tt?ae(K,V,ne,ve):null;case T:return ne=Ls(ne),le(K,V,ne,ve)}if(J(ne)||j(ne))return tt!==null?null:ge(K,V,ne,ve,null);if(typeof ne.then=="function")return le(K,V,Pl(ne),ve);if(ne.$$typeof===B)return le(K,V,Ul(K,ne),ve);Il(K,ne)}return null}function ce(K,V,ne,ve,tt){if(typeof ve=="string"&&ve!==""||typeof ve=="number"||typeof ve=="bigint")return K=K.get(ne)||null,R(V,K,""+ve,tt);if(typeof ve=="object"&&ve!==null){switch(ve.$$typeof){case M:return K=K.get(ve.key===null?ne:ve.key)||null,z(V,K,ve,tt);case b:return K=K.get(ve.key===null?ne:ve.key)||null,ae(V,K,ve,tt);case T:return ve=Ls(ve),ce(K,V,ne,ve,tt)}if(J(ve)||j(ve))return K=K.get(ne)||null,ge(V,K,ve,tt,null);if(typeof ve.then=="function")return ce(K,V,ne,Pl(ve),tt);if(ve.$$typeof===B)return ce(K,V,ne,Ul(V,ve),tt);Il(V,ve)}return null}function qe(K,V,ne,ve){for(var tt=null,Pt=null,Qe=V,ht=V=0,Tt=null;Qe!==null&&ht<ne.length;ht++){Qe.index>ht?(Tt=Qe,Qe=null):Tt=Qe.sibling;var It=le(K,Qe,ne[ht],ve);if(It===null){Qe===null&&(Qe=Tt);break}t&&Qe&&It.alternate===null&&n(K,Qe),V=d(It,V,ht),Pt===null?tt=It:Pt.sibling=It,Pt=It,Qe=Tt}if(ht===ne.length)return a(K,Qe),At&&fa(K,ht),tt;if(Qe===null){for(;ht<ne.length;ht++)Qe=xe(K,ne[ht],ve),Qe!==null&&(V=d(Qe,V,ht),Pt===null?tt=Qe:Pt.sibling=Qe,Pt=Qe);return At&&fa(K,ht),tt}for(Qe=o(Qe);ht<ne.length;ht++)Tt=ce(Qe,K,ht,ne[ht],ve),Tt!==null&&(t&&Tt.alternate!==null&&Qe.delete(Tt.key===null?ht:Tt.key),V=d(Tt,V,ht),Pt===null?tt=Tt:Pt.sibling=Tt,Pt=Tt);return t&&Qe.forEach(function(fs){return n(K,fs)}),At&&fa(K,ht),tt}function it(K,V,ne,ve){if(ne==null)throw Error(s(151));for(var tt=null,Pt=null,Qe=V,ht=V=0,Tt=null,It=ne.next();Qe!==null&&!It.done;ht++,It=ne.next()){Qe.index>ht?(Tt=Qe,Qe=null):Tt=Qe.sibling;var fs=le(K,Qe,It.value,ve);if(fs===null){Qe===null&&(Qe=Tt);break}t&&Qe&&fs.alternate===null&&n(K,Qe),V=d(fs,V,ht),Pt===null?tt=fs:Pt.sibling=fs,Pt=fs,Qe=Tt}if(It.done)return a(K,Qe),At&&fa(K,ht),tt;if(Qe===null){for(;!It.done;ht++,It=ne.next())It=xe(K,It.value,ve),It!==null&&(V=d(It,V,ht),Pt===null?tt=It:Pt.sibling=It,Pt=It);return At&&fa(K,ht),tt}for(Qe=o(Qe);!It.done;ht++,It=ne.next())It=ce(Qe,K,ht,It.value,ve),It!==null&&(t&&It.alternate!==null&&Qe.delete(It.key===null?ht:It.key),V=d(It,V,ht),Pt===null?tt=It:Pt.sibling=It,Pt=It);return t&&Qe.forEach(function(fM){return n(K,fM)}),At&&fa(K,ht),tt}function Qt(K,V,ne,ve){if(typeof ne=="object"&&ne!==null&&ne.type===w&&ne.key===null&&(ne=ne.props.children),typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case M:e:{for(var tt=ne.key;V!==null;){if(V.key===tt){if(tt=ne.type,tt===w){if(V.tag===7){a(K,V.sibling),ve=u(V,ne.props.children),ve.return=K,K=ve;break e}}else if(V.elementType===tt||typeof tt=="object"&&tt!==null&&tt.$$typeof===T&&Ls(tt)===V.type){a(K,V.sibling),ve=u(V,ne.props),yo(ve,ne),ve.return=K,K=ve;break e}a(K,V);break}else n(K,V);V=V.sibling}ne.type===w?(ve=Cs(ne.props.children,K.mode,ve,ne.key),ve.return=K,K=ve):(ve=Cl(ne.type,ne.key,ne.props,null,K.mode,ve),yo(ve,ne),ve.return=K,K=ve)}return v(K);case b:e:{for(tt=ne.key;V!==null;){if(V.key===tt)if(V.tag===4&&V.stateNode.containerInfo===ne.containerInfo&&V.stateNode.implementation===ne.implementation){a(K,V.sibling),ve=u(V,ne.children||[]),ve.return=K,K=ve;break e}else{a(K,V);break}else n(K,V);V=V.sibling}ve=Pu(ne,K.mode,ve),ve.return=K,K=ve}return v(K);case T:return ne=Ls(ne),Qt(K,V,ne,ve)}if(J(ne))return qe(K,V,ne,ve);if(j(ne)){if(tt=j(ne),typeof tt!="function")throw Error(s(150));return ne=tt.call(ne),it(K,V,ne,ve)}if(typeof ne.then=="function")return Qt(K,V,Pl(ne),ve);if(ne.$$typeof===B)return Qt(K,V,Ul(K,ne),ve);Il(K,ne)}return typeof ne=="string"&&ne!==""||typeof ne=="number"||typeof ne=="bigint"?(ne=""+ne,V!==null&&V.tag===6?(a(K,V.sibling),ve=u(V,ne),ve.return=K,K=ve):(a(K,V),ve=Ou(ne,K.mode,ve),ve.return=K,K=ve),v(K)):a(K,V)}return function(K,V,ne,ve){try{Mo=0;var tt=Qt(K,V,ne,ve);return mr=null,tt}catch(Qe){if(Qe===pr||Qe===Ll)throw Qe;var Pt=li(29,Qe,null,K.mode);return Pt.lanes=ve,Pt.return=K,Pt}finally{}}}var Ps=gm(!0),_m=gm(!1),Za=!1;function Yu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Zu(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ka(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Qa(t,n,a){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(Bt&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=Rl(t),em(t,null,a),n}return Al(t,o,n,a),Rl(t)}function Eo(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,kn(t,a)}}function Ku(t,n){var a=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var v={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?u=d=v:d=d.next=v,a=a.next}while(a!==null);d===null?u=d=n:d=d.next=n}else u=d=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:d,shared:o.shared,callbacks:o.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Qu=!1;function bo(){if(Qu){var t=hr;if(t!==null)throw t}}function To(t,n,a,o){Qu=!1;var u=t.updateQueue;Za=!1;var d=u.firstBaseUpdate,v=u.lastBaseUpdate,R=u.shared.pending;if(R!==null){u.shared.pending=null;var z=R,ae=z.next;z.next=null,v===null?d=ae:v.next=ae,v=z;var ge=t.alternate;ge!==null&&(ge=ge.updateQueue,R=ge.lastBaseUpdate,R!==v&&(R===null?ge.firstBaseUpdate=ae:R.next=ae,ge.lastBaseUpdate=z))}if(d!==null){var xe=u.baseState;v=0,ge=ae=z=null,R=d;do{var le=R.lane&-536870913,ce=le!==R.lane;if(ce?(bt&le)===le:(o&le)===le){le!==0&&le===dr&&(Qu=!0),ge!==null&&(ge=ge.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});e:{var qe=t,it=R;le=n;var Qt=a;switch(it.tag){case 1:if(qe=it.payload,typeof qe=="function"){xe=qe.call(Qt,xe,le);break e}xe=qe;break e;case 3:qe.flags=qe.flags&-65537|128;case 0:if(qe=it.payload,le=typeof qe=="function"?qe.call(Qt,xe,le):qe,le==null)break e;xe=x({},xe,le);break e;case 2:Za=!0}}le=R.callback,le!==null&&(t.flags|=64,ce&&(t.flags|=8192),ce=u.callbacks,ce===null?u.callbacks=[le]:ce.push(le))}else ce={lane:le,tag:R.tag,payload:R.payload,callback:R.callback,next:null},ge===null?(ae=ge=ce,z=xe):ge=ge.next=ce,v|=le;if(R=R.next,R===null){if(R=u.shared.pending,R===null)break;ce=R,R=ce.next,ce.next=null,u.lastBaseUpdate=ce,u.shared.pending=null}}while(!0);ge===null&&(z=xe),u.baseState=z,u.firstBaseUpdate=ae,u.lastBaseUpdate=ge,d===null&&(u.shared.lanes=0),ts|=v,t.lanes=v,t.memoizedState=xe}}function vm(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function xm(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)vm(a[t],n)}var gr=U(null),Fl=U(0);function Sm(t,n){t=ya,Ee(Fl,t),Ee(gr,n),ya=t|n.baseLanes}function ju(){Ee(Fl,ya),Ee(gr,gr.current)}function Ju(){ya=Fl.current,Z(gr),Z(Fl)}var ci=U(null),yi=null;function ja(t){var n=t.alternate;Ee(un,un.current&1),Ee(ci,t),yi===null&&(n===null||gr.current!==null||n.memoizedState!==null)&&(yi=t)}function $u(t){Ee(un,un.current),Ee(ci,t),yi===null&&(yi=t)}function Mm(t){t.tag===22?(Ee(un,un.current),Ee(ci,t),yi===null&&(yi=t)):Ja()}function Ja(){Ee(un,un.current),Ee(ci,ci.current)}function ui(t){Z(ci),yi===t&&(yi=null),Z(un)}var un=U(0);function Bl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||rd(a)||od(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var pa=0,dt=null,Zt=null,_n=null,zl=!1,_r=!1,Is=!1,Hl=0,Ao=0,vr=null,tS=0;function on(){throw Error(s(321))}function ef(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!oi(t[a],n[a]))return!1;return!0}function tf(t,n,a,o,u,d){return pa=d,dt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,F.H=t===null||t.memoizedState===null?a0:_f,Is=!1,d=a(o,u),Is=!1,_r&&(d=Em(n,a,o,u)),ym(t),d}function ym(t){F.H=wo;var n=Zt!==null&&Zt.next!==null;if(pa=0,_n=Zt=dt=null,zl=!1,Ao=0,vr=null,n)throw Error(s(300));t===null||vn||(t=t.dependencies,t!==null&&Dl(t)&&(vn=!0))}function Em(t,n,a,o){dt=t;var u=0;do{if(_r&&(vr=null),Ao=0,_r=!1,25<=u)throw Error(s(301));if(u+=1,_n=Zt=null,t.updateQueue!=null){var d=t.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}F.H=s0,d=n(a,o)}while(_r);return d}function nS(){var t=F.H,n=t.useState()[0];return n=typeof n.then=="function"?Ro(n):n,t=t.useState()[0],(Zt!==null?Zt.memoizedState:null)!==t&&(dt.flags|=1024),n}function nf(){var t=Hl!==0;return Hl=0,t}function af(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function sf(t){if(zl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}zl=!1}pa=0,_n=Zt=dt=null,_r=!1,Ao=Hl=0,vr=null}function Xn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return _n===null?dt.memoizedState=_n=t:_n=_n.next=t,_n}function fn(){if(Zt===null){var t=dt.alternate;t=t!==null?t.memoizedState:null}else t=Zt.next;var n=_n===null?dt.memoizedState:_n.next;if(n!==null)_n=n,Zt=t;else{if(t===null)throw dt.alternate===null?Error(s(467)):Error(s(310));Zt=t,t={memoizedState:Zt.memoizedState,baseState:Zt.baseState,baseQueue:Zt.baseQueue,queue:Zt.queue,next:null},_n===null?dt.memoizedState=_n=t:_n=_n.next=t}return _n}function Gl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ro(t){var n=Ao;return Ao+=1,vr===null&&(vr=[]),t=hm(vr,t,n),n=dt,(_n===null?n.memoizedState:_n.next)===null&&(n=n.alternate,F.H=n===null||n.memoizedState===null?a0:_f),t}function Vl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Ro(t);if(t.$$typeof===B)return Ln(t)}throw Error(s(438,String(t)))}function rf(t){var n=null,a=dt.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=dt.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Gl(),dt.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),o=0;o<t;o++)a[o]=Y;return n.index++,a}function ma(t,n){return typeof n=="function"?n(t):n}function kl(t){var n=fn();return of(n,Zt,t)}function of(t,n,a){var o=t.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=t.baseQueue,d=o.pending;if(d!==null){if(u!==null){var v=u.next;u.next=d.next,d.next=v}n.baseQueue=u=d,o.pending=null}if(d=t.baseState,u===null)t.memoizedState=d;else{n=u.next;var R=v=null,z=null,ae=n,ge=!1;do{var xe=ae.lane&-536870913;if(xe!==ae.lane?(bt&xe)===xe:(pa&xe)===xe){var le=ae.revertLane;if(le===0)z!==null&&(z=z.next={lane:0,revertLane:0,gesture:null,action:ae.action,hasEagerState:ae.hasEagerState,eagerState:ae.eagerState,next:null}),xe===dr&&(ge=!0);else if((pa&le)===le){ae=ae.next,le===dr&&(ge=!0);continue}else xe={lane:0,revertLane:ae.revertLane,gesture:null,action:ae.action,hasEagerState:ae.hasEagerState,eagerState:ae.eagerState,next:null},z===null?(R=z=xe,v=d):z=z.next=xe,dt.lanes|=le,ts|=le;xe=ae.action,Is&&a(d,xe),d=ae.hasEagerState?ae.eagerState:a(d,xe)}else le={lane:xe,revertLane:ae.revertLane,gesture:ae.gesture,action:ae.action,hasEagerState:ae.hasEagerState,eagerState:ae.eagerState,next:null},z===null?(R=z=le,v=d):z=z.next=le,dt.lanes|=xe,ts|=xe;ae=ae.next}while(ae!==null&&ae!==n);if(z===null?v=d:z.next=R,!oi(d,t.memoizedState)&&(vn=!0,ge&&(a=hr,a!==null)))throw a;t.memoizedState=d,t.baseState=v,t.baseQueue=z,o.lastRenderedState=d}return u===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function lf(t){var n=fn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var o=a.dispatch,u=a.pending,d=n.memoizedState;if(u!==null){a.pending=null;var v=u=u.next;do d=t(d,v.action),v=v.next;while(v!==u);oi(d,n.memoizedState)||(vn=!0),n.memoizedState=d,n.baseQueue===null&&(n.baseState=d),a.lastRenderedState=d}return[d,o]}function bm(t,n,a){var o=dt,u=fn(),d=At;if(d){if(a===void 0)throw Error(s(407));a=a()}else a=n();var v=!oi((Zt||u).memoizedState,a);if(v&&(u.memoizedState=a,vn=!0),u=u.queue,ff(Rm.bind(null,o,u,t),[t]),u.getSnapshot!==n||v||_n!==null&&_n.memoizedState.tag&1){if(o.flags|=2048,xr(9,{destroy:void 0},Am.bind(null,o,u,a,n),null),Jt===null)throw Error(s(349));d||(pa&127)!==0||Tm(o,n,a)}return a}function Tm(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=dt.updateQueue,n===null?(n=Gl(),dt.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function Am(t,n,a,o){n.value=a,n.getSnapshot=o,Cm(n)&&wm(t)}function Rm(t,n,a){return a(function(){Cm(n)&&wm(t)})}function Cm(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!oi(t,a)}catch{return!0}}function wm(t){var n=Rs(t,2);n!==null&&ti(n,t,2)}function cf(t){var n=Xn();if(typeof t=="function"){var a=t;if(t=a(),Is){Te(!0);try{a()}finally{Te(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ma,lastRenderedState:t},n}function Dm(t,n,a,o){return t.baseState=a,of(t,Zt,typeof o=="function"?o:ma)}function iS(t,n,a,o,u){if(ql(t))throw Error(s(485));if(t=n.action,t!==null){var d={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){d.listeners.push(v)}};F.T!==null?a(!0):d.isTransition=!1,o(d),a=n.pending,a===null?(d.next=n.pending=d,Um(n,d)):(d.next=a.next,n.pending=a.next=d)}}function Um(t,n){var a=n.action,o=n.payload,u=t.state;if(n.isTransition){var d=F.T,v={};F.T=v;try{var R=a(u,o),z=F.S;z!==null&&z(v,R),Nm(t,n,R)}catch(ae){uf(t,n,ae)}finally{d!==null&&v.types!==null&&(d.types=v.types),F.T=d}}else try{d=a(u,o),Nm(t,n,d)}catch(ae){uf(t,n,ae)}}function Nm(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Lm(t,n,o)},function(o){return uf(t,n,o)}):Lm(t,n,a)}function Lm(t,n,a){n.status="fulfilled",n.value=a,Om(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,Um(t,a)))}function uf(t,n,a){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,Om(n),n=n.next;while(n!==o)}t.action=null}function Om(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Pm(t,n){return n}function Im(t,n){if(At){var a=Jt.formState;if(a!==null){e:{var o=dt;if(At){if(en){t:{for(var u=en,d=Mi;u.nodeType!==8;){if(!d){u=null;break t}if(u=Ei(u.nextSibling),u===null){u=null;break t}}d=u.data,u=d==="F!"||d==="F"?u:null}if(u){en=Ei(u.nextSibling),o=u.data==="F!";break e}}qa(o)}o=!1}o&&(n=a[0])}}return a=Xn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pm,lastRenderedState:n},a.queue=o,a=t0.bind(null,dt,o),o.dispatch=a,o=cf(!1),d=gf.bind(null,dt,!1,o.queue),o=Xn(),u={state:n,dispatch:null,action:t,pending:null},o.queue=u,a=iS.bind(null,dt,u,d,a),u.dispatch=a,o.memoizedState=t,[n,a,!1]}function Fm(t){var n=fn();return Bm(n,Zt,t)}function Bm(t,n,a){if(n=of(t,n,Pm)[0],t=kl(ma)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=Ro(n)}catch(v){throw v===pr?Ll:v}else o=n;n=fn();var u=n.queue,d=u.dispatch;return a!==n.memoizedState&&(dt.flags|=2048,xr(9,{destroy:void 0},aS.bind(null,u,a),null)),[o,d,t]}function aS(t,n){t.action=n}function zm(t){var n=fn(),a=Zt;if(a!==null)return Bm(n,a,t);fn(),n=n.memoizedState,a=fn();var o=a.queue.dispatch;return a.memoizedState=t,[n,o,!1]}function xr(t,n,a,o){return t={tag:t,create:a,deps:o,inst:n,next:null},n=dt.updateQueue,n===null&&(n=Gl(),dt.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(o=a.next,a.next=t,t.next=o,n.lastEffect=t),t}function Hm(){return fn().memoizedState}function Xl(t,n,a,o){var u=Xn();dt.flags|=t,u.memoizedState=xr(1|n,{destroy:void 0},a,o===void 0?null:o)}function Wl(t,n,a,o){var u=fn();o=o===void 0?null:o;var d=u.memoizedState.inst;Zt!==null&&o!==null&&ef(o,Zt.memoizedState.deps)?u.memoizedState=xr(n,d,a,o):(dt.flags|=t,u.memoizedState=xr(1|n,d,a,o))}function Gm(t,n){Xl(8390656,8,t,n)}function ff(t,n){Wl(2048,8,t,n)}function sS(t){dt.flags|=4;var n=dt.updateQueue;if(n===null)n=Gl(),dt.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function Vm(t){var n=fn().memoizedState;return sS({ref:n,nextImpl:t}),function(){if((Bt&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function km(t,n){return Wl(4,2,t,n)}function Xm(t,n){return Wl(4,4,t,n)}function Wm(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function qm(t,n,a){a=a!=null?a.concat([t]):null,Wl(4,4,Wm.bind(null,n,t),a)}function df(){}function Ym(t,n){var a=fn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&ef(n,o[1])?o[0]:(a.memoizedState=[t,n],t)}function Zm(t,n){var a=fn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&ef(n,o[1]))return o[0];if(o=t(),Is){Te(!0);try{t()}finally{Te(!1)}}return a.memoizedState=[o,n],o}function hf(t,n,a){return a===void 0||(pa&1073741824)!==0&&(bt&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=K0(),dt.lanes|=t,ts|=t,a)}function Km(t,n,a,o){return oi(a,n)?a:gr.current!==null?(t=hf(t,a,o),oi(t,n)||(vn=!0),t):(pa&42)===0||(pa&1073741824)!==0&&(bt&261930)===0?(vn=!0,t.memoizedState=a):(t=K0(),dt.lanes|=t,ts|=t,n)}function Qm(t,n,a,o,u){var d=H.p;H.p=d!==0&&8>d?d:8;var v=F.T,R={};F.T=R,gf(t,!1,n,a);try{var z=u(),ae=F.S;if(ae!==null&&ae(R,z),z!==null&&typeof z=="object"&&typeof z.then=="function"){var ge=eS(z,o);Co(t,n,ge,hi(t))}else Co(t,n,o,hi(t))}catch(xe){Co(t,n,{then:function(){},status:"rejected",reason:xe},hi())}finally{H.p=d,v!==null&&R.types!==null&&(v.types=R.types),F.T=v}}function rS(){}function pf(t,n,a,o){if(t.tag!==5)throw Error(s(476));var u=jm(t).queue;Qm(t,u,n,ee,a===null?rS:function(){return Jm(t),a(o)})}function jm(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:ee,baseState:ee,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ma,lastRenderedState:ee},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ma,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Jm(t){var n=jm(t);n.next===null&&(n=t.alternate.memoizedState),Co(t,n.next.queue,{},hi())}function mf(){return Ln(Wo)}function $m(){return fn().memoizedState}function e0(){return fn().memoizedState}function oS(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=hi();t=Ka(a);var o=Qa(n,t,a);o!==null&&(ti(o,n,a),Eo(o,n,a)),n={cache:ku()},t.payload=n;return}n=n.return}}function lS(t,n,a){var o=hi();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},ql(t)?n0(n,a):(a=Nu(t,n,a,o),a!==null&&(ti(a,t,o),i0(a,n,o)))}function t0(t,n,a){var o=hi();Co(t,n,a,o)}function Co(t,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(ql(t))n0(n,u);else{var d=t.alternate;if(t.lanes===0&&(d===null||d.lanes===0)&&(d=n.lastRenderedReducer,d!==null))try{var v=n.lastRenderedState,R=d(v,a);if(u.hasEagerState=!0,u.eagerState=R,oi(R,v))return Al(t,n,u,0),Jt===null&&Tl(),!1}catch{}finally{}if(a=Nu(t,n,u,o),a!==null)return ti(a,t,o),i0(a,n,o),!0}return!1}function gf(t,n,a,o){if(o={lane:2,revertLane:Zf(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},ql(t)){if(n)throw Error(s(479))}else n=Nu(t,a,o,2),n!==null&&ti(n,t,2)}function ql(t){var n=t.alternate;return t===dt||n!==null&&n===dt}function n0(t,n){_r=zl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function i0(t,n,a){if((a&4194048)!==0){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,kn(t,a)}}var wo={readContext:Ln,use:Vl,useCallback:on,useContext:on,useEffect:on,useImperativeHandle:on,useLayoutEffect:on,useInsertionEffect:on,useMemo:on,useReducer:on,useRef:on,useState:on,useDebugValue:on,useDeferredValue:on,useTransition:on,useSyncExternalStore:on,useId:on,useHostTransitionStatus:on,useFormState:on,useActionState:on,useOptimistic:on,useMemoCache:on,useCacheRefresh:on};wo.useEffectEvent=on;var a0={readContext:Ln,use:Vl,useCallback:function(t,n){return Xn().memoizedState=[t,n===void 0?null:n],t},useContext:Ln,useEffect:Gm,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,Xl(4194308,4,Wm.bind(null,n,t),a)},useLayoutEffect:function(t,n){return Xl(4194308,4,t,n)},useInsertionEffect:function(t,n){Xl(4,2,t,n)},useMemo:function(t,n){var a=Xn();n=n===void 0?null:n;var o=t();if(Is){Te(!0);try{t()}finally{Te(!1)}}return a.memoizedState=[o,n],o},useReducer:function(t,n,a){var o=Xn();if(a!==void 0){var u=a(n);if(Is){Te(!0);try{a(n)}finally{Te(!1)}}}else u=n;return o.memoizedState=o.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},o.queue=t,t=t.dispatch=lS.bind(null,dt,t),[o.memoizedState,t]},useRef:function(t){var n=Xn();return t={current:t},n.memoizedState=t},useState:function(t){t=cf(t);var n=t.queue,a=t0.bind(null,dt,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:df,useDeferredValue:function(t,n){var a=Xn();return hf(a,t,n)},useTransition:function(){var t=cf(!1);return t=Qm.bind(null,dt,t.queue,!0,!1),Xn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var o=dt,u=Xn();if(At){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Jt===null)throw Error(s(349));(bt&127)!==0||Tm(o,n,a)}u.memoizedState=a;var d={value:a,getSnapshot:n};return u.queue=d,Gm(Rm.bind(null,o,d,t),[t]),o.flags|=2048,xr(9,{destroy:void 0},Am.bind(null,o,d,a,n),null),a},useId:function(){var t=Xn(),n=Jt.identifierPrefix;if(At){var a=qi,o=Wi;a=(o&~(1<<32-Be(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Hl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=tS++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:mf,useFormState:Im,useActionState:Im,useOptimistic:function(t){var n=Xn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=gf.bind(null,dt,!0,a),a.dispatch=n,[t,n]},useMemoCache:rf,useCacheRefresh:function(){return Xn().memoizedState=oS.bind(null,dt)},useEffectEvent:function(t){var n=Xn(),a={impl:t};return n.memoizedState=a,function(){if((Bt&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},_f={readContext:Ln,use:Vl,useCallback:Ym,useContext:Ln,useEffect:ff,useImperativeHandle:qm,useInsertionEffect:km,useLayoutEffect:Xm,useMemo:Zm,useReducer:kl,useRef:Hm,useState:function(){return kl(ma)},useDebugValue:df,useDeferredValue:function(t,n){var a=fn();return Km(a,Zt.memoizedState,t,n)},useTransition:function(){var t=kl(ma)[0],n=fn().memoizedState;return[typeof t=="boolean"?t:Ro(t),n]},useSyncExternalStore:bm,useId:$m,useHostTransitionStatus:mf,useFormState:Fm,useActionState:Fm,useOptimistic:function(t,n){var a=fn();return Dm(a,Zt,t,n)},useMemoCache:rf,useCacheRefresh:e0};_f.useEffectEvent=Vm;var s0={readContext:Ln,use:Vl,useCallback:Ym,useContext:Ln,useEffect:ff,useImperativeHandle:qm,useInsertionEffect:km,useLayoutEffect:Xm,useMemo:Zm,useReducer:lf,useRef:Hm,useState:function(){return lf(ma)},useDebugValue:df,useDeferredValue:function(t,n){var a=fn();return Zt===null?hf(a,t,n):Km(a,Zt.memoizedState,t,n)},useTransition:function(){var t=lf(ma)[0],n=fn().memoizedState;return[typeof t=="boolean"?t:Ro(t),n]},useSyncExternalStore:bm,useId:$m,useHostTransitionStatus:mf,useFormState:zm,useActionState:zm,useOptimistic:function(t,n){var a=fn();return Zt!==null?Dm(a,Zt,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:rf,useCacheRefresh:e0};s0.useEffectEvent=Vm;function vf(t,n,a,o){n=t.memoizedState,a=a(o,n),a=a==null?n:x({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var xf={enqueueSetState:function(t,n,a){t=t._reactInternals;var o=hi(),u=Ka(o);u.payload=n,a!=null&&(u.callback=a),n=Qa(t,u,o),n!==null&&(ti(n,t,o),Eo(n,t,o))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var o=hi(),u=Ka(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Qa(t,u,o),n!==null&&(ti(n,t,o),Eo(n,t,o))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=hi(),o=Ka(a);o.tag=2,n!=null&&(o.callback=n),n=Qa(t,o,a),n!==null&&(ti(n,t,a),Eo(n,t,a))}};function r0(t,n,a,o,u,d,v){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,d,v):n.prototype&&n.prototype.isPureReactComponent?!mo(a,o)||!mo(u,d):!0}function o0(t,n,a,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==t&&xf.enqueueReplaceState(n,n.state,null)}function Fs(t,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(t=t.defaultProps){a===n&&(a=x({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}function l0(t){bl(t)}function c0(t){console.error(t)}function u0(t){bl(t)}function Yl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function f0(t,n,a){try{var o=t.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Sf(t,n,a){return a=Ka(a),a.tag=3,a.payload={element:null},a.callback=function(){Yl(t,n)},a}function d0(t){return t=Ka(t),t.tag=3,t}function h0(t,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var d=o.value;t.payload=function(){return u(d)},t.callback=function(){f0(n,a,o)}}var v=a.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(t.callback=function(){f0(n,a,o),typeof u!="function"&&(ns===null?ns=new Set([this]):ns.add(this));var R=o.stack;this.componentDidCatch(o.value,{componentStack:R!==null?R:""})})}function cS(t,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&fr(n,a,u,!0),a=ci.current,a!==null){switch(a.tag){case 31:case 13:return yi===null?sc():a.alternate===null&&ln===0&&(ln=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Ol?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Wf(t,o,u)),!1;case 22:return a.flags|=65536,o===Ol?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Wf(t,o,u)),!1}throw Error(s(435,a.tag))}return Wf(t,o,u),sc(),!1}if(At)return n=ci.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Bu&&(t=Error(s(422),{cause:o}),vo(vi(t,a)))):(o!==Bu&&(n=Error(s(423),{cause:o}),vo(vi(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,o=vi(o,a),u=Sf(t.stateNode,o,u),Ku(t,u),ln!==4&&(ln=2)),!1;var d=Error(s(520),{cause:o});if(d=vi(d,a),Fo===null?Fo=[d]:Fo.push(d),ln!==4&&(ln=2),n===null)return!0;o=vi(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=Sf(a.stateNode,o,t),Ku(a,t),!1;case 1:if(n=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(ns===null||!ns.has(d))))return a.flags|=65536,u&=-u,a.lanes|=u,u=d0(u),h0(u,t,a,o),Ku(a,u),!1}a=a.return}while(a!==null);return!1}var Mf=Error(s(461)),vn=!1;function On(t,n,a,o){n.child=t===null?_m(n,null,a,o):Ps(n,t.child,a,o)}function p0(t,n,a,o,u){a=a.render;var d=n.ref;if("ref"in o){var v={};for(var R in o)R!=="ref"&&(v[R]=o[R])}else v=o;return Us(n),o=tf(t,n,a,v,d,u),R=nf(),t!==null&&!vn?(af(t,n,u),ga(t,n,u)):(At&&R&&Iu(n),n.flags|=1,On(t,n,o,u),n.child)}function m0(t,n,a,o,u){if(t===null){var d=a.type;return typeof d=="function"&&!Lu(d)&&d.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=d,g0(t,n,d,o,u)):(t=Cl(a.type,null,o,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(d=t.child,!wf(t,u)){var v=d.memoizedProps;if(a=a.compare,a=a!==null?a:mo,a(v,o)&&t.ref===n.ref)return ga(t,n,u)}return n.flags|=1,t=ua(d,o),t.ref=n.ref,t.return=n,n.child=t}function g0(t,n,a,o,u){if(t!==null){var d=t.memoizedProps;if(mo(d,o)&&t.ref===n.ref)if(vn=!1,n.pendingProps=o=d,wf(t,u))(t.flags&131072)!==0&&(vn=!0);else return n.lanes=t.lanes,ga(t,n,u)}return yf(t,n,a,o,u)}function _0(t,n,a,o){var u=o.children,d=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(d=d!==null?d.baseLanes|a:a,t!==null){for(o=n.child=t.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~d}else o=0,n.child=null;return v0(t,n,d,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Nl(n,d!==null?d.cachePool:null),d!==null?Sm(n,d):ju(),Mm(n);else return o=n.lanes=536870912,v0(t,n,d!==null?d.baseLanes|a:a,a,o)}else d!==null?(Nl(n,d.cachePool),Sm(n,d),Ja(),n.memoizedState=null):(t!==null&&Nl(n,null),ju(),Ja());return On(t,n,u,a),n.child}function Do(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function v0(t,n,a,o,u){var d=Wu();return d=d===null?null:{parent:gn._currentValue,pool:d},n.memoizedState={baseLanes:a,cachePool:d},t!==null&&Nl(n,null),ju(),Mm(n),t!==null&&fr(t,n,o,!0),n.childLanes=u,null}function Zl(t,n){return n=Ql({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function x0(t,n,a){return Ps(n,t.child,null,a),t=Zl(n,n.pendingProps),t.flags|=2,ui(n),n.memoizedState=null,t}function uS(t,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(At){if(o.mode==="hidden")return t=Zl(n,o),n.lanes=536870912,Do(null,t);if($u(n),(t=en)?(t=Ug(t,Mi),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Xa!==null?{id:Wi,overflow:qi}:null,retryLane:536870912,hydrationErrors:null},a=nm(t),a.return=n,n.child=a,Nn=n,en=null)):t=null,t===null)throw qa(n);return n.lanes=536870912,null}return Zl(n,o)}var d=t.memoizedState;if(d!==null){var v=d.dehydrated;if($u(n),u)if(n.flags&256)n.flags&=-257,n=x0(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(s(558));else if(vn||fr(t,n,a,!1),u=(a&t.childLanes)!==0,vn||u){if(o=Jt,o!==null&&(v=Fn(o,a),v!==0&&v!==d.retryLane))throw d.retryLane=v,Rs(t,v),ti(o,t,v),Mf;sc(),n=x0(t,n,a)}else t=d.treeContext,en=Ei(v.nextSibling),Nn=n,At=!0,Wa=null,Mi=!1,t!==null&&sm(n,t),n=Zl(n,o),n.flags|=4096;return n}return t=ua(t.child,{mode:o.mode,children:o.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Kl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function yf(t,n,a,o,u){return Us(n),a=tf(t,n,a,o,void 0,u),o=nf(),t!==null&&!vn?(af(t,n,u),ga(t,n,u)):(At&&o&&Iu(n),n.flags|=1,On(t,n,a,u),n.child)}function S0(t,n,a,o,u,d){return Us(n),n.updateQueue=null,a=Em(n,o,a,u),ym(t),o=nf(),t!==null&&!vn?(af(t,n,d),ga(t,n,d)):(At&&o&&Iu(n),n.flags|=1,On(t,n,a,d),n.child)}function M0(t,n,a,o,u){if(Us(n),n.stateNode===null){var d=or,v=a.contextType;typeof v=="object"&&v!==null&&(d=Ln(v)),d=new a(o,d),n.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=xf,n.stateNode=d,d._reactInternals=n,d=n.stateNode,d.props=o,d.state=n.memoizedState,d.refs={},Yu(n),v=a.contextType,d.context=typeof v=="object"&&v!==null?Ln(v):or,d.state=n.memoizedState,v=a.getDerivedStateFromProps,typeof v=="function"&&(vf(n,a,v,o),d.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(v=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),v!==d.state&&xf.enqueueReplaceState(d,d.state,null),To(n,o,d,u),bo(),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(t===null){d=n.stateNode;var R=n.memoizedProps,z=Fs(a,R);d.props=z;var ae=d.context,ge=a.contextType;v=or,typeof ge=="object"&&ge!==null&&(v=Ln(ge));var xe=a.getDerivedStateFromProps;ge=typeof xe=="function"||typeof d.getSnapshotBeforeUpdate=="function",R=n.pendingProps!==R,ge||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(R||ae!==v)&&o0(n,d,o,v),Za=!1;var le=n.memoizedState;d.state=le,To(n,o,d,u),bo(),ae=n.memoizedState,R||le!==ae||Za?(typeof xe=="function"&&(vf(n,a,xe,o),ae=n.memoizedState),(z=Za||r0(n,a,z,o,le,ae,v))?(ge||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(n.flags|=4194308)):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=ae),d.props=o,d.state=ae,d.context=v,o=z):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{d=n.stateNode,Zu(t,n),v=n.memoizedProps,ge=Fs(a,v),d.props=ge,xe=n.pendingProps,le=d.context,ae=a.contextType,z=or,typeof ae=="object"&&ae!==null&&(z=Ln(ae)),R=a.getDerivedStateFromProps,(ae=typeof R=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(v!==xe||le!==z)&&o0(n,d,o,z),Za=!1,le=n.memoizedState,d.state=le,To(n,o,d,u),bo();var ce=n.memoizedState;v!==xe||le!==ce||Za||t!==null&&t.dependencies!==null&&Dl(t.dependencies)?(typeof R=="function"&&(vf(n,a,R,o),ce=n.memoizedState),(ge=Za||r0(n,a,ge,o,le,ce,z)||t!==null&&t.dependencies!==null&&Dl(t.dependencies))?(ae||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(o,ce,z),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(o,ce,z)),typeof d.componentDidUpdate=="function"&&(n.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof d.componentDidUpdate!="function"||v===t.memoizedProps&&le===t.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||v===t.memoizedProps&&le===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=ce),d.props=o,d.state=ce,d.context=z,o=ge):(typeof d.componentDidUpdate!="function"||v===t.memoizedProps&&le===t.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||v===t.memoizedProps&&le===t.memoizedState||(n.flags|=1024),o=!1)}return d=o,Kl(t,n),o=(n.flags&128)!==0,d||o?(d=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:d.render(),n.flags|=1,t!==null&&o?(n.child=Ps(n,t.child,null,u),n.child=Ps(n,null,a,u)):On(t,n,a,u),n.memoizedState=d.state,t=n.child):t=ga(t,n,u),t}function y0(t,n,a,o){return ws(),n.flags|=256,On(t,n,a,o),n.child}var Ef={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function bf(t){return{baseLanes:t,cachePool:fm()}}function Tf(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=di),t}function E0(t,n,a){var o=n.pendingProps,u=!1,d=(n.flags&128)!==0,v;if((v=d)||(v=t!==null&&t.memoizedState===null?!1:(un.current&2)!==0),v&&(u=!0,n.flags&=-129),v=(n.flags&32)!==0,n.flags&=-33,t===null){if(At){if(u?ja(n):Ja(),(t=en)?(t=Ug(t,Mi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Xa!==null?{id:Wi,overflow:qi}:null,retryLane:536870912,hydrationErrors:null},a=nm(t),a.return=n,n.child=a,Nn=n,en=null)):t=null,t===null)throw qa(n);return od(t)?n.lanes=32:n.lanes=536870912,null}var R=o.children;return o=o.fallback,u?(Ja(),u=n.mode,R=Ql({mode:"hidden",children:R},u),o=Cs(o,u,a,null),R.return=n,o.return=n,R.sibling=o,n.child=R,o=n.child,o.memoizedState=bf(a),o.childLanes=Tf(t,v,a),n.memoizedState=Ef,Do(null,o)):(ja(n),Af(n,R))}var z=t.memoizedState;if(z!==null&&(R=z.dehydrated,R!==null)){if(d)n.flags&256?(ja(n),n.flags&=-257,n=Rf(t,n,a)):n.memoizedState!==null?(Ja(),n.child=t.child,n.flags|=128,n=null):(Ja(),R=o.fallback,u=n.mode,o=Ql({mode:"visible",children:o.children},u),R=Cs(R,u,a,null),R.flags|=2,o.return=n,R.return=n,o.sibling=R,n.child=o,Ps(n,t.child,null,a),o=n.child,o.memoizedState=bf(a),o.childLanes=Tf(t,v,a),n.memoizedState=Ef,n=Do(null,o));else if(ja(n),od(R)){if(v=R.nextSibling&&R.nextSibling.dataset,v)var ae=v.dgst;v=ae,o=Error(s(419)),o.stack="",o.digest=v,vo({value:o,source:null,stack:null}),n=Rf(t,n,a)}else if(vn||fr(t,n,a,!1),v=(a&t.childLanes)!==0,vn||v){if(v=Jt,v!==null&&(o=Fn(v,a),o!==0&&o!==z.retryLane))throw z.retryLane=o,Rs(t,o),ti(v,t,o),Mf;rd(R)||sc(),n=Rf(t,n,a)}else rd(R)?(n.flags|=192,n.child=t.child,n=null):(t=z.treeContext,en=Ei(R.nextSibling),Nn=n,At=!0,Wa=null,Mi=!1,t!==null&&sm(n,t),n=Af(n,o.children),n.flags|=4096);return n}return u?(Ja(),R=o.fallback,u=n.mode,z=t.child,ae=z.sibling,o=ua(z,{mode:"hidden",children:o.children}),o.subtreeFlags=z.subtreeFlags&65011712,ae!==null?R=ua(ae,R):(R=Cs(R,u,a,null),R.flags|=2),R.return=n,o.return=n,o.sibling=R,n.child=o,Do(null,o),o=n.child,R=t.child.memoizedState,R===null?R=bf(a):(u=R.cachePool,u!==null?(z=gn._currentValue,u=u.parent!==z?{parent:z,pool:z}:u):u=fm(),R={baseLanes:R.baseLanes|a,cachePool:u}),o.memoizedState=R,o.childLanes=Tf(t,v,a),n.memoizedState=Ef,Do(t.child,o)):(ja(n),a=t.child,t=a.sibling,a=ua(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,t!==null&&(v=n.deletions,v===null?(n.deletions=[t],n.flags|=16):v.push(t)),n.child=a,n.memoizedState=null,a)}function Af(t,n){return n=Ql({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Ql(t,n){return t=li(22,t,null,n),t.lanes=0,t}function Rf(t,n,a){return Ps(n,t.child,null,a),t=Af(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function b0(t,n,a){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),Gu(t.return,n,a)}function Cf(t,n,a,o,u,d){var v=t.memoizedState;v===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:d}:(v.isBackwards=n,v.rendering=null,v.renderingStartTime=0,v.last=o,v.tail=a,v.tailMode=u,v.treeForkCount=d)}function T0(t,n,a){var o=n.pendingProps,u=o.revealOrder,d=o.tail;o=o.children;var v=un.current,R=(v&2)!==0;if(R?(v=v&1|2,n.flags|=128):v&=1,Ee(un,v),On(t,n,o,a),o=At?_o:0,!R&&t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&b0(t,a,n);else if(t.tag===19)b0(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)t=a.alternate,t!==null&&Bl(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Cf(n,!1,u,a,d,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&Bl(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}Cf(n,!0,a,null,d,o);break;case"together":Cf(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function ga(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),ts|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(fr(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,a=ua(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=ua(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function wf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&Dl(t)))}function fS(t,n,a){switch(n.tag){case 3:Me(n,n.stateNode.containerInfo),Ya(n,gn,t.memoizedState.cache),ws();break;case 27:case 5:nt(n);break;case 4:Me(n,n.stateNode.containerInfo);break;case 10:Ya(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,$u(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(ja(n),n.flags|=128,null):(a&n.child.childLanes)!==0?E0(t,n,a):(ja(n),t=ga(t,n,a),t!==null?t.sibling:null);ja(n);break;case 19:var u=(t.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(fr(t,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return T0(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),Ee(un,un.current),o)break;return null;case 22:return n.lanes=0,_0(t,n,a,n.pendingProps);case 24:Ya(n,gn,t.memoizedState.cache)}return ga(t,n,a)}function A0(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)vn=!0;else{if(!wf(t,a)&&(n.flags&128)===0)return vn=!1,fS(t,n,a);vn=(t.flags&131072)!==0}else vn=!1,At&&(n.flags&1048576)!==0&&am(n,_o,n.index);switch(n.lanes=0,n.tag){case 16:e:{var o=n.pendingProps;if(t=Ls(n.elementType),n.type=t,typeof t=="function")Lu(t)?(o=Fs(t,o),n.tag=1,n=M0(null,n,t,o,a)):(n.tag=0,n=yf(null,n,t,o,a));else{if(t!=null){var u=t.$$typeof;if(u===C){n.tag=11,n=p0(null,n,t,o,a);break e}else if(u===P){n.tag=14,n=m0(null,n,t,o,a);break e}}throw n=de(t)||t,Error(s(306,n,""))}}return n;case 0:return yf(t,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=Fs(o,n.pendingProps),M0(t,n,o,u,a);case 3:e:{if(Me(n,n.stateNode.containerInfo),t===null)throw Error(s(387));o=n.pendingProps;var d=n.memoizedState;u=d.element,Zu(t,n),To(n,o,null,a);var v=n.memoizedState;if(o=v.cache,Ya(n,gn,o),o!==d.cache&&Vu(n,[gn],a,!0),bo(),o=v.element,d.isDehydrated)if(d={element:o,isDehydrated:!1,cache:v.cache},n.updateQueue.baseState=d,n.memoizedState=d,n.flags&256){n=y0(t,n,o,a);break e}else if(o!==u){u=vi(Error(s(424)),n),vo(u),n=y0(t,n,o,a);break e}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(en=Ei(t.firstChild),Nn=n,At=!0,Wa=null,Mi=!0,a=_m(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(ws(),o===u){n=ga(t,n,a);break e}On(t,n,o,a)}n=n.child}return n;case 26:return Kl(t,n),t===null?(a=Fg(n.type,null,n.pendingProps,null))?n.memoizedState=a:At||(a=n.type,t=n.pendingProps,o=dc(ie.current).createElement(a),o[Lt]=n,o[$t]=t,Pn(o,a,t),mn(o),n.stateNode=o):n.memoizedState=Fg(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return nt(n),t===null&&At&&(o=n.stateNode=Og(n.type,n.pendingProps,ie.current),Nn=n,Mi=!0,u=en,rs(n.type)?(ld=u,en=Ei(o.firstChild)):en=u),On(t,n,n.pendingProps.children,a),Kl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&At&&((u=o=en)&&(o=GS(o,n.type,n.pendingProps,Mi),o!==null?(n.stateNode=o,Nn=n,en=Ei(o.firstChild),Mi=!1,u=!0):u=!1),u||qa(n)),nt(n),u=n.type,d=n.pendingProps,v=t!==null?t.memoizedProps:null,o=d.children,id(u,d)?o=null:v!==null&&id(u,v)&&(n.flags|=32),n.memoizedState!==null&&(u=tf(t,n,nS,null,null,a),Wo._currentValue=u),Kl(t,n),On(t,n,o,a),n.child;case 6:return t===null&&At&&((t=a=en)&&(a=VS(a,n.pendingProps,Mi),a!==null?(n.stateNode=a,Nn=n,en=null,t=!0):t=!1),t||qa(n)),null;case 13:return E0(t,n,a);case 4:return Me(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=Ps(n,null,o,a):On(t,n,o,a),n.child;case 11:return p0(t,n,n.type,n.pendingProps,a);case 7:return On(t,n,n.pendingProps,a),n.child;case 8:return On(t,n,n.pendingProps.children,a),n.child;case 12:return On(t,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Ya(n,n.type,o.value),On(t,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,Us(n),u=Ln(u),o=o(u),n.flags|=1,On(t,n,o,a),n.child;case 14:return m0(t,n,n.type,n.pendingProps,a);case 15:return g0(t,n,n.type,n.pendingProps,a);case 19:return T0(t,n,a);case 31:return uS(t,n,a);case 22:return _0(t,n,a,n.pendingProps);case 24:return Us(n),o=Ln(gn),t===null?(u=Wu(),u===null&&(u=Jt,d=ku(),u.pooledCache=d,d.refCount++,d!==null&&(u.pooledCacheLanes|=a),u=d),n.memoizedState={parent:o,cache:u},Yu(n),Ya(n,gn,u)):((t.lanes&a)!==0&&(Zu(t,n),To(n,null,null,a),bo()),u=t.memoizedState,d=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Ya(n,gn,o)):(o=d.cache,Ya(n,gn,o),o!==u.cache&&Vu(n,[gn],a,!0))),On(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function _a(t){t.flags|=4}function Df(t,n,a,o,u){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if($0())t.flags|=8192;else throw Os=Ol,qu}else t.flags&=-16777217}function R0(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Vg(n))if($0())t.flags|=8192;else throw Os=Ol,qu}function jl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?ye():536870912,t.lanes|=n,Er|=n)}function Uo(t,n){if(!At)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function tn(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,o=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=o,t.childLanes=a,n}function dS(t,n,a){var o=n.pendingProps;switch(Fu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return tn(n),null;case 1:return tn(n),null;case 3:return a=n.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),ha(gn),ze(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(ur(n)?_a(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,zu())),tn(n),null;case 26:var u=n.type,d=n.memoizedState;return t===null?(_a(n),d!==null?(tn(n),R0(n,d)):(tn(n),Df(n,u,null,o,a))):d?d!==t.memoizedState?(_a(n),tn(n),R0(n,d)):(tn(n),n.flags&=-16777217):(t=t.memoizedProps,t!==o&&_a(n),tn(n),Df(n,u,t,o,a)),null;case 27:if(je(n),a=ie.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&_a(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return tn(n),null}t=Ce.current,ur(n)?rm(n):(t=Og(u,o,a),n.stateNode=t,_a(n))}return tn(n),null;case 5:if(je(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&_a(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return tn(n),null}if(d=Ce.current,ur(n))rm(n);else{var v=dc(ie.current);switch(d){case 1:d=v.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:d=v.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":d=v.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":d=v.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":d=v.createElement("div"),d.innerHTML="<script><\/script>",d=d.removeChild(d.firstChild);break;case"select":d=typeof o.is=="string"?v.createElement("select",{is:o.is}):v.createElement("select"),o.multiple?d.multiple=!0:o.size&&(d.size=o.size);break;default:d=typeof o.is=="string"?v.createElement(u,{is:o.is}):v.createElement(u)}}d[Lt]=n,d[$t]=o;e:for(v=n.child;v!==null;){if(v.tag===5||v.tag===6)d.appendChild(v.stateNode);else if(v.tag!==4&&v.tag!==27&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===n)break e;for(;v.sibling===null;){if(v.return===null||v.return===n)break e;v=v.return}v.sibling.return=v.return,v=v.sibling}n.stateNode=d;e:switch(Pn(d,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&_a(n)}}return tn(n),Df(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==o&&_a(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(t=ie.current,ur(n)){if(t=n.stateNode,a=n.memoizedProps,o=null,u=Nn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}t[Lt]=n,t=!!(t.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||Eg(t.nodeValue,a)),t||qa(n,!0)}else t=dc(t).createTextNode(o),t[Lt]=n,n.stateNode=t}return tn(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(o=ur(n),a!==null){if(t===null){if(!o)throw Error(s(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[Lt]=n}else ws(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;tn(n),t=!1}else a=zu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(ui(n),n):(ui(n),null);if((n.flags&128)!==0)throw Error(s(558))}return tn(n),null;case 13:if(o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=ur(n),o!==null&&o.dehydrated!==null){if(t===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[Lt]=n}else ws(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;tn(n),u=!1}else u=zu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(ui(n),n):(ui(n),null)}return ui(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,t=t!==null&&t.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),d=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(d=o.memoizedState.cachePool.pool),d!==u&&(o.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),jl(n,n.updateQueue),tn(n),null);case 4:return ze(),t===null&&Jf(n.stateNode.containerInfo),tn(n),null;case 10:return ha(n.type),tn(n),null;case 19:if(Z(un),o=n.memoizedState,o===null)return tn(n),null;if(u=(n.flags&128)!==0,d=o.rendering,d===null)if(u)Uo(o,!1);else{if(ln!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(d=Bl(t),d!==null){for(n.flags|=128,Uo(o,!1),t=d.updateQueue,n.updateQueue=t,jl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)tm(a,t),a=a.sibling;return Ee(un,un.current&1|2),At&&fa(n,o.treeForkCount),n.child}t=t.sibling}o.tail!==null&&St()>nc&&(n.flags|=128,u=!0,Uo(o,!1),n.lanes=4194304)}else{if(!u)if(t=Bl(d),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,jl(n,t),Uo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!d.alternate&&!At)return tn(n),null}else 2*St()-o.renderingStartTime>nc&&a!==536870912&&(n.flags|=128,u=!0,Uo(o,!1),n.lanes=4194304);o.isBackwards?(d.sibling=n.child,n.child=d):(t=o.last,t!==null?t.sibling=d:n.child=d,o.last=d)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=St(),t.sibling=null,a=un.current,Ee(un,u?a&1|2:a&1),At&&fa(n,o.treeForkCount),t):(tn(n),null);case 22:case 23:return ui(n),Ju(),o=n.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(tn(n),n.subtreeFlags&6&&(n.flags|=8192)):tn(n),a=n.updateQueue,a!==null&&jl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),t!==null&&Z(Ns),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ha(gn),tn(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function hS(t,n){switch(Fu(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return ha(gn),ze(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return je(n),null;case 31:if(n.memoizedState!==null){if(ui(n),n.alternate===null)throw Error(s(340));ws()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(ui(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));ws()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return Z(un),null;case 4:return ze(),null;case 10:return ha(n.type),null;case 22:case 23:return ui(n),Ju(),t!==null&&Z(Ns),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return ha(gn),null;case 25:return null;default:return null}}function C0(t,n){switch(Fu(n),n.tag){case 3:ha(gn),ze();break;case 26:case 27:case 5:je(n);break;case 4:ze();break;case 31:n.memoizedState!==null&&ui(n);break;case 13:ui(n);break;case 19:Z(un);break;case 10:ha(n.type);break;case 22:case 23:ui(n),Ju(),t!==null&&Z(Ns);break;case 24:ha(gn)}}function No(t,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&t)===t){o=void 0;var d=a.create,v=a.inst;o=d(),v.destroy=o}a=a.next}while(a!==u)}}catch(R){Wt(n,n.return,R)}}function $a(t,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var d=u.next;o=d;do{if((o.tag&t)===t){var v=o.inst,R=v.destroy;if(R!==void 0){v.destroy=void 0,u=n;var z=a,ae=R;try{ae()}catch(ge){Wt(u,z,ge)}}}o=o.next}while(o!==d)}}catch(ge){Wt(n,n.return,ge)}}function w0(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{xm(n,a)}catch(o){Wt(t,t.return,o)}}}function D0(t,n,a){a.props=Fs(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(o){Wt(t,n,o)}}function Lo(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof a=="function"?t.refCleanup=a(o):a.current=o}}catch(u){Wt(t,n,u)}}function Yi(t,n){var a=t.ref,o=t.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){Wt(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Wt(t,n,u)}else a.current=null}function U0(t){var n=t.type,a=t.memoizedProps,o=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){Wt(t,t.return,u)}}function Uf(t,n,a){try{var o=t.stateNode;PS(o,t.type,a,n),o[$t]=n}catch(u){Wt(t,t.return,u)}}function N0(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&rs(t.type)||t.tag===4}function Nf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||N0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&rs(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Lf(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=la));else if(o!==4&&(o===27&&rs(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(Lf(t,n,a),t=t.sibling;t!==null;)Lf(t,n,a),t=t.sibling}function Jl(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(o!==4&&(o===27&&rs(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Jl(t,n,a),t=t.sibling;t!==null;)Jl(t,n,a),t=t.sibling}function L0(t){var n=t.stateNode,a=t.memoizedProps;try{for(var o=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Pn(n,o,a),n[Lt]=t,n[$t]=a}catch(d){Wt(t,t.return,d)}}var va=!1,xn=!1,Of=!1,O0=typeof WeakSet=="function"?WeakSet:Set,wn=null;function pS(t,n){if(t=t.containerInfo,td=xc,t=qp(t),Au(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,d=o.focusNode;o=o.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break e}var v=0,R=-1,z=-1,ae=0,ge=0,xe=t,le=null;t:for(;;){for(var ce;xe!==a||u!==0&&xe.nodeType!==3||(R=v+u),xe!==d||o!==0&&xe.nodeType!==3||(z=v+o),xe.nodeType===3&&(v+=xe.nodeValue.length),(ce=xe.firstChild)!==null;)le=xe,xe=ce;for(;;){if(xe===t)break t;if(le===a&&++ae===u&&(R=v),le===d&&++ge===o&&(z=v),(ce=xe.nextSibling)!==null)break;xe=le,le=xe.parentNode}xe=ce}a=R===-1||z===-1?null:{start:R,end:z}}else a=null}a=a||{start:0,end:0}}else a=null;for(nd={focusedElem:t,selectionRange:a},xc=!1,wn=n;wn!==null;)if(n=wn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,wn=t;else for(;wn!==null;){switch(n=wn,d=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)u=t[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&d!==null){t=void 0,a=n,u=d.memoizedProps,d=d.memoizedState,o=a.stateNode;try{var qe=Fs(a.type,u);t=o.getSnapshotBeforeUpdate(qe,d),o.__reactInternalSnapshotBeforeUpdate=t}catch(it){Wt(a,a.return,it)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)sd(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":sd(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=n.sibling,t!==null){t.return=n.return,wn=t;break}wn=n.return}}function P0(t,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:Sa(t,a),o&4&&No(5,a);break;case 1:if(Sa(t,a),o&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(v){Wt(a,a.return,v)}else{var u=Fs(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(v){Wt(a,a.return,v)}}o&64&&w0(a),o&512&&Lo(a,a.return);break;case 3:if(Sa(t,a),o&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{xm(t,n)}catch(v){Wt(a,a.return,v)}}break;case 27:n===null&&o&4&&L0(a);case 26:case 5:Sa(t,a),n===null&&o&4&&U0(a),o&512&&Lo(a,a.return);break;case 12:Sa(t,a);break;case 31:Sa(t,a),o&4&&B0(t,a);break;case 13:Sa(t,a),o&4&&z0(t,a),o&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=ES.bind(null,a),kS(t,a))));break;case 22:if(o=a.memoizedState!==null||va,!o){n=n!==null&&n.memoizedState!==null||xn,u=va;var d=xn;va=o,(xn=n)&&!d?Ma(t,a,(a.subtreeFlags&8772)!==0):Sa(t,a),va=u,xn=d}break;case 30:break;default:Sa(t,a)}}function I0(t){var n=t.alternate;n!==null&&(t.alternate=null,I0(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Ha(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var sn=null,jn=!1;function xa(t,n,a){for(a=a.child;a!==null;)F0(t,n,a),a=a.sibling}function F0(t,n,a){if(he&&typeof he.onCommitFiberUnmount=="function")try{he.onCommitFiberUnmount(fe,a)}catch{}switch(a.tag){case 26:xn||Yi(a,n),xa(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:xn||Yi(a,n);var o=sn,u=jn;rs(a.type)&&(sn=a.stateNode,jn=!1),xa(t,n,a),Vo(a.stateNode),sn=o,jn=u;break;case 5:xn||Yi(a,n);case 6:if(o=sn,u=jn,sn=null,xa(t,n,a),sn=o,jn=u,sn!==null)if(jn)try{(sn.nodeType===9?sn.body:sn.nodeName==="HTML"?sn.ownerDocument.body:sn).removeChild(a.stateNode)}catch(d){Wt(a,n,d)}else try{sn.removeChild(a.stateNode)}catch(d){Wt(a,n,d)}break;case 18:sn!==null&&(jn?(t=sn,wg(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),Ur(t)):wg(sn,a.stateNode));break;case 4:o=sn,u=jn,sn=a.stateNode.containerInfo,jn=!0,xa(t,n,a),sn=o,jn=u;break;case 0:case 11:case 14:case 15:$a(2,a,n),xn||$a(4,a,n),xa(t,n,a);break;case 1:xn||(Yi(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&D0(a,n,o)),xa(t,n,a);break;case 21:xa(t,n,a);break;case 22:xn=(o=xn)||a.memoizedState!==null,xa(t,n,a),xn=o;break;default:xa(t,n,a)}}function B0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Ur(t)}catch(a){Wt(n,n.return,a)}}}function z0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Ur(t)}catch(a){Wt(n,n.return,a)}}function mS(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new O0),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new O0),n;default:throw Error(s(435,t.tag))}}function $l(t,n){var a=mS(t);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=bS.bind(null,t,o);o.then(u,u)}})}function Jn(t,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],d=t,v=n,R=v;e:for(;R!==null;){switch(R.tag){case 27:if(rs(R.type)){sn=R.stateNode,jn=!1;break e}break;case 5:sn=R.stateNode,jn=!1;break e;case 3:case 4:sn=R.stateNode.containerInfo,jn=!0;break e}R=R.return}if(sn===null)throw Error(s(160));F0(d,v,u),sn=null,jn=!1,d=u.alternate,d!==null&&(d.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)H0(n,t),n=n.sibling}var Oi=null;function H0(t,n){var a=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Jn(n,t),$n(t),o&4&&($a(3,t,t.return),No(3,t),$a(5,t,t.return));break;case 1:Jn(n,t),$n(t),o&512&&(xn||a===null||Yi(a,a.return)),o&64&&va&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=Oi;if(Jn(n,t),$n(t),o&512&&(xn||a===null||Yi(a,a.return)),o&4){var d=a!==null?a.memoizedState:null;if(o=t.memoizedState,a===null)if(o===null)if(t.stateNode===null){e:{o=t.type,a=t.memoizedProps,u=u.ownerDocument||u;t:switch(o){case"title":d=u.getElementsByTagName("title")[0],(!d||d[za]||d[Lt]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=u.createElement(o),u.head.insertBefore(d,u.querySelector("head > title"))),Pn(d,o,a),d[Lt]=t,mn(d),o=d;break e;case"link":var v=Hg("link","href",u).get(o+(a.href||""));if(v){for(var R=0;R<v.length;R++)if(d=v[R],d.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){v.splice(R,1);break t}}d=u.createElement(o),Pn(d,o,a),u.head.appendChild(d);break;case"meta":if(v=Hg("meta","content",u).get(o+(a.content||""))){for(R=0;R<v.length;R++)if(d=v[R],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){v.splice(R,1);break t}}d=u.createElement(o),Pn(d,o,a),u.head.appendChild(d);break;default:throw Error(s(468,o))}d[Lt]=t,mn(d),o=d}t.stateNode=o}else Gg(u,t.type,t.stateNode);else t.stateNode=zg(u,o,t.memoizedProps);else d!==o?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,o===null?Gg(u,t.type,t.stateNode):zg(u,o,t.memoizedProps)):o===null&&t.stateNode!==null&&Uf(t,t.memoizedProps,a.memoizedProps)}break;case 27:Jn(n,t),$n(t),o&512&&(xn||a===null||Yi(a,a.return)),a!==null&&o&4&&Uf(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Jn(n,t),$n(t),o&512&&(xn||a===null||Yi(a,a.return)),t.flags&32){u=t.stateNode;try{ri(u,"")}catch(qe){Wt(t,t.return,qe)}}o&4&&t.stateNode!=null&&(u=t.memoizedProps,Uf(t,u,a!==null?a.memoizedProps:u)),o&1024&&(Of=!0);break;case 6:if(Jn(n,t),$n(t),o&4){if(t.stateNode===null)throw Error(s(162));o=t.memoizedProps,a=t.stateNode;try{a.nodeValue=o}catch(qe){Wt(t,t.return,qe)}}break;case 3:if(mc=null,u=Oi,Oi=hc(n.containerInfo),Jn(n,t),Oi=u,$n(t),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Ur(n.containerInfo)}catch(qe){Wt(t,t.return,qe)}Of&&(Of=!1,G0(t));break;case 4:o=Oi,Oi=hc(t.stateNode.containerInfo),Jn(n,t),$n(t),Oi=o;break;case 12:Jn(n,t),$n(t);break;case 31:Jn(n,t),$n(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,$l(t,o)));break;case 13:Jn(n,t),$n(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(tc=St()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,$l(t,o)));break;case 22:u=t.memoizedState!==null;var z=a!==null&&a.memoizedState!==null,ae=va,ge=xn;if(va=ae||u,xn=ge||z,Jn(n,t),xn=ge,va=ae,$n(t),o&8192)e:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||z||va||xn||Bs(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){z=a=n;try{if(d=z.stateNode,u)v=d.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{R=z.stateNode;var xe=z.memoizedProps.style,le=xe!=null&&xe.hasOwnProperty("display")?xe.display:null;R.style.display=le==null||typeof le=="boolean"?"":(""+le).trim()}}catch(qe){Wt(z,z.return,qe)}}}else if(n.tag===6){if(a===null){z=n;try{z.stateNode.nodeValue=u?"":z.memoizedProps}catch(qe){Wt(z,z.return,qe)}}}else if(n.tag===18){if(a===null){z=n;try{var ce=z.stateNode;u?Dg(ce,!0):Dg(z.stateNode,!1)}catch(qe){Wt(z,z.return,qe)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=t.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,$l(t,a))));break;case 19:Jn(n,t),$n(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,$l(t,o)));break;case 30:break;case 21:break;default:Jn(n,t),$n(t)}}function $n(t){var n=t.flags;if(n&2){try{for(var a,o=t.return;o!==null;){if(N0(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,d=Nf(t);Jl(t,d,u);break;case 5:var v=a.stateNode;a.flags&32&&(ri(v,""),a.flags&=-33);var R=Nf(t);Jl(t,R,v);break;case 3:case 4:var z=a.stateNode.containerInfo,ae=Nf(t);Lf(t,ae,z);break;default:throw Error(s(161))}}catch(ge){Wt(t,t.return,ge)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function G0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;G0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function Sa(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)P0(t,n.alternate,n),n=n.sibling}function Bs(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:$a(4,n,n.return),Bs(n);break;case 1:Yi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&D0(n,n.return,a),Bs(n);break;case 27:Vo(n.stateNode);case 26:case 5:Yi(n,n.return),Bs(n);break;case 22:n.memoizedState===null&&Bs(n);break;case 30:Bs(n);break;default:Bs(n)}t=t.sibling}}function Ma(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=t,d=n,v=d.flags;switch(d.tag){case 0:case 11:case 15:Ma(u,d,a),No(4,d);break;case 1:if(Ma(u,d,a),o=d,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(ae){Wt(o,o.return,ae)}if(o=d,u=o.updateQueue,u!==null){var R=o.stateNode;try{var z=u.shared.hiddenCallbacks;if(z!==null)for(u.shared.hiddenCallbacks=null,u=0;u<z.length;u++)vm(z[u],R)}catch(ae){Wt(o,o.return,ae)}}a&&v&64&&w0(d),Lo(d,d.return);break;case 27:L0(d);case 26:case 5:Ma(u,d,a),a&&o===null&&v&4&&U0(d),Lo(d,d.return);break;case 12:Ma(u,d,a);break;case 31:Ma(u,d,a),a&&v&4&&B0(u,d);break;case 13:Ma(u,d,a),a&&v&4&&z0(u,d);break;case 22:d.memoizedState===null&&Ma(u,d,a),Lo(d,d.return);break;case 30:break;default:Ma(u,d,a)}n=n.sibling}}function Pf(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&xo(a))}function If(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&xo(t))}function Pi(t,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)V0(t,n,a,o),n=n.sibling}function V0(t,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Pi(t,n,a,o),u&2048&&No(9,n);break;case 1:Pi(t,n,a,o);break;case 3:Pi(t,n,a,o),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&xo(t)));break;case 12:if(u&2048){Pi(t,n,a,o),t=n.stateNode;try{var d=n.memoizedProps,v=d.id,R=d.onPostCommit;typeof R=="function"&&R(v,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(z){Wt(n,n.return,z)}}else Pi(t,n,a,o);break;case 31:Pi(t,n,a,o);break;case 13:Pi(t,n,a,o);break;case 23:break;case 22:d=n.stateNode,v=n.alternate,n.memoizedState!==null?d._visibility&2?Pi(t,n,a,o):Oo(t,n):d._visibility&2?Pi(t,n,a,o):(d._visibility|=2,Sr(t,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Pf(v,n);break;case 24:Pi(t,n,a,o),u&2048&&If(n.alternate,n);break;default:Pi(t,n,a,o)}}function Sr(t,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var d=t,v=n,R=a,z=o,ae=v.flags;switch(v.tag){case 0:case 11:case 15:Sr(d,v,R,z,u),No(8,v);break;case 23:break;case 22:var ge=v.stateNode;v.memoizedState!==null?ge._visibility&2?Sr(d,v,R,z,u):Oo(d,v):(ge._visibility|=2,Sr(d,v,R,z,u)),u&&ae&2048&&Pf(v.alternate,v);break;case 24:Sr(d,v,R,z,u),u&&ae&2048&&If(v.alternate,v);break;default:Sr(d,v,R,z,u)}n=n.sibling}}function Oo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,o=n,u=o.flags;switch(o.tag){case 22:Oo(a,o),u&2048&&Pf(o.alternate,o);break;case 24:Oo(a,o),u&2048&&If(o.alternate,o);break;default:Oo(a,o)}n=n.sibling}}var Po=8192;function Mr(t,n,a){if(t.subtreeFlags&Po)for(t=t.child;t!==null;)k0(t,n,a),t=t.sibling}function k0(t,n,a){switch(t.tag){case 26:Mr(t,n,a),t.flags&Po&&t.memoizedState!==null&&tM(a,Oi,t.memoizedState,t.memoizedProps);break;case 5:Mr(t,n,a);break;case 3:case 4:var o=Oi;Oi=hc(t.stateNode.containerInfo),Mr(t,n,a),Oi=o;break;case 22:t.memoizedState===null&&(o=t.alternate,o!==null&&o.memoizedState!==null?(o=Po,Po=16777216,Mr(t,n,a),Po=o):Mr(t,n,a));break;default:Mr(t,n,a)}}function X0(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function Io(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];wn=o,q0(o,t)}X0(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)W0(t),t=t.sibling}function W0(t){switch(t.tag){case 0:case 11:case 15:Io(t),t.flags&2048&&$a(9,t,t.return);break;case 3:Io(t);break;case 12:Io(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,ec(t)):Io(t);break;default:Io(t)}}function ec(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];wn=o,q0(o,t)}X0(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:$a(8,n,n.return),ec(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,ec(n));break;default:ec(n)}t=t.sibling}}function q0(t,n){for(;wn!==null;){var a=wn;switch(a.tag){case 0:case 11:case 15:$a(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:xo(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,wn=o;else e:for(a=t;wn!==null;){o=wn;var u=o.sibling,d=o.return;if(I0(o),o===a){wn=null;break e}if(u!==null){u.return=d,wn=u;break e}wn=d}}}var gS={getCacheForType:function(t){var n=Ln(gn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return Ln(gn).controller.signal}},_S=typeof WeakMap=="function"?WeakMap:Map,Bt=0,Jt=null,yt=null,bt=0,Xt=0,fi=null,es=!1,yr=!1,Ff=!1,ya=0,ln=0,ts=0,zs=0,Bf=0,di=0,Er=0,Fo=null,ei=null,zf=!1,tc=0,Y0=0,nc=1/0,ic=null,ns=null,Tn=0,is=null,br=null,Ea=0,Hf=0,Gf=null,Z0=null,Bo=0,Vf=null;function hi(){return(Bt&2)!==0&&bt!==0?bt&-bt:F.T!==null?Zf():En()}function K0(){if(di===0)if((bt&536870912)===0||At){var t=at;at<<=1,(at&3932160)===0&&(at=262144),di=t}else di=536870912;return t=ci.current,t!==null&&(t.flags|=32),di}function ti(t,n,a){(t===Jt&&(Xt===2||Xt===9)||t.cancelPendingCommit!==null)&&(Tr(t,0),as(t,bt,di,!1)),He(t,a),((Bt&2)===0||t!==Jt)&&(t===Jt&&((Bt&2)===0&&(zs|=a),ln===4&&as(t,bt,di,!1)),Zi(t))}function Q0(t,n,a){if((Bt&6)!==0)throw Error(s(327));var o=!a&&(n&127)===0&&(n&t.expiredLanes)===0||we(t,n),u=o?SS(t,n):Xf(t,n,!0),d=o;do{if(u===0){yr&&!o&&as(t,n,0,!1);break}else{if(a=t.current.alternate,d&&!vS(a)){u=Xf(t,n,!1),d=!1;continue}if(u===2){if(d=n,t.errorRecoveryDisabledLanes&d)var v=0;else v=t.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){n=v;e:{var R=t;u=Fo;var z=R.current.memoizedState.isDehydrated;if(z&&(Tr(R,v).flags|=256),v=Xf(R,v,!1),v!==2){if(Ff&&!z){R.errorRecoveryDisabledLanes|=d,zs|=d,u=4;break e}d=ei,ei=u,d!==null&&(ei===null?ei=d:ei.push.apply(ei,d))}u=v}if(d=!1,u!==2)continue}}if(u===1){Tr(t,0),as(t,n,0,!0);break}e:{switch(o=t,d=u,d){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:as(o,n,di,!es);break e;case 2:ei=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=tc+300-St(),10<u)){if(as(o,n,di,!es),me(o,0,!0)!==0)break e;Ea=n,o.timeoutHandle=Rg(j0.bind(null,o,a,ei,ic,zf,n,di,zs,Er,es,d,"Throttled",-0,0),u);break e}j0(o,a,ei,ic,zf,n,di,zs,Er,es,d,null,-0,0)}}break}while(!0);Zi(t)}function j0(t,n,a,o,u,d,v,R,z,ae,ge,xe,le,ce){if(t.timeoutHandle=-1,xe=n.subtreeFlags,xe&8192||(xe&16785408)===16785408){xe={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:la},k0(n,d,xe);var qe=(d&62914560)===d?tc-St():(d&4194048)===d?Y0-St():0;if(qe=nM(xe,qe),qe!==null){Ea=d,t.cancelPendingCommit=qe(sg.bind(null,t,n,d,a,o,u,v,R,z,ge,xe,null,le,ce)),as(t,d,v,!ae);return}}sg(t,n,d,a,o,u,v,R,z)}function vS(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],d=u.getSnapshot;u=u.value;try{if(!oi(d(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function as(t,n,a,o){n&=~Bf,n&=~zs,t.suspendedLanes|=n,t.pingedLanes&=~n,o&&(t.warmLanes|=n),o=t.expirationTimes;for(var u=n;0<u;){var d=31-Be(u),v=1<<d;o[d]=-1,u&=~v}a!==0&&Ut(t,a,n)}function ac(){return(Bt&6)===0?(zo(0),!1):!0}function kf(){if(yt!==null){if(Xt===0)var t=yt.return;else t=yt,da=Ds=null,sf(t),mr=null,Mo=0,t=yt;for(;t!==null;)C0(t.alternate,t),t=t.return;yt=null}}function Tr(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,BS(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),Ea=0,kf(),Jt=t,yt=a=ua(t.current,null),bt=n,Xt=0,fi=null,es=!1,yr=we(t,n),Ff=!1,Er=di=Bf=zs=ts=ln=0,ei=Fo=null,zf=!1,(n&8)!==0&&(n|=n&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=n;0<o;){var u=31-Be(o),d=1<<u;n|=t[u],o&=~d}return ya=n,Tl(),a}function J0(t,n){dt=null,F.H=wo,n===pr||n===Ll?(n=pm(),Xt=3):n===qu?(n=pm(),Xt=4):Xt=n===Mf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,fi=n,yt===null&&(ln=1,Yl(t,vi(n,t.current)))}function $0(){var t=ci.current;return t===null?!0:(bt&4194048)===bt?yi===null:(bt&62914560)===bt||(bt&536870912)!==0?t===yi:!1}function eg(){var t=F.H;return F.H=wo,t===null?wo:t}function tg(){var t=F.A;return F.A=gS,t}function sc(){ln=4,es||(bt&4194048)!==bt&&ci.current!==null||(yr=!0),(ts&134217727)===0&&(zs&134217727)===0||Jt===null||as(Jt,bt,di,!1)}function Xf(t,n,a){var o=Bt;Bt|=2;var u=eg(),d=tg();(Jt!==t||bt!==n)&&(ic=null,Tr(t,n)),n=!1;var v=ln;e:do try{if(Xt!==0&&yt!==null){var R=yt,z=fi;switch(Xt){case 8:kf(),v=6;break e;case 3:case 2:case 9:case 6:ci.current===null&&(n=!0);var ae=Xt;if(Xt=0,fi=null,Ar(t,R,z,ae),a&&yr){v=0;break e}break;default:ae=Xt,Xt=0,fi=null,Ar(t,R,z,ae)}}xS(),v=ln;break}catch(ge){J0(t,ge)}while(!0);return n&&t.shellSuspendCounter++,da=Ds=null,Bt=o,F.H=u,F.A=d,yt===null&&(Jt=null,bt=0,Tl()),v}function xS(){for(;yt!==null;)ng(yt)}function SS(t,n){var a=Bt;Bt|=2;var o=eg(),u=tg();Jt!==t||bt!==n?(ic=null,nc=St()+500,Tr(t,n)):yr=we(t,n);e:do try{if(Xt!==0&&yt!==null){n=yt;var d=fi;t:switch(Xt){case 1:Xt=0,fi=null,Ar(t,n,d,1);break;case 2:case 9:if(dm(d)){Xt=0,fi=null,ig(n);break}n=function(){Xt!==2&&Xt!==9||Jt!==t||(Xt=7),Zi(t)},d.then(n,n);break e;case 3:Xt=7;break e;case 4:Xt=5;break e;case 7:dm(d)?(Xt=0,fi=null,ig(n)):(Xt=0,fi=null,Ar(t,n,d,7));break;case 5:var v=null;switch(yt.tag){case 26:v=yt.memoizedState;case 5:case 27:var R=yt;if(v?Vg(v):R.stateNode.complete){Xt=0,fi=null;var z=R.sibling;if(z!==null)yt=z;else{var ae=R.return;ae!==null?(yt=ae,rc(ae)):yt=null}break t}}Xt=0,fi=null,Ar(t,n,d,5);break;case 6:Xt=0,fi=null,Ar(t,n,d,6);break;case 8:kf(),ln=6;break e;default:throw Error(s(462))}}MS();break}catch(ge){J0(t,ge)}while(!0);return da=Ds=null,F.H=o,F.A=u,Bt=a,yt!==null?0:(Jt=null,bt=0,Tl(),ln)}function MS(){for(;yt!==null&&!gt();)ng(yt)}function ng(t){var n=A0(t.alternate,t,ya);t.memoizedProps=t.pendingProps,n===null?rc(t):yt=n}function ig(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=S0(a,n,n.pendingProps,n.type,void 0,bt);break;case 11:n=S0(a,n,n.pendingProps,n.type.render,n.ref,bt);break;case 5:sf(n);default:C0(a,n),n=yt=tm(n,ya),n=A0(a,n,ya)}t.memoizedProps=t.pendingProps,n===null?rc(t):yt=n}function Ar(t,n,a,o){da=Ds=null,sf(n),mr=null,Mo=0;var u=n.return;try{if(cS(t,u,n,a,bt)){ln=1,Yl(t,vi(a,t.current)),yt=null;return}}catch(d){if(u!==null)throw yt=u,d;ln=1,Yl(t,vi(a,t.current)),yt=null;return}n.flags&32768?(At||o===1?t=!0:yr||(bt&536870912)!==0?t=!1:(es=t=!0,(o===2||o===9||o===3||o===6)&&(o=ci.current,o!==null&&o.tag===13&&(o.flags|=16384))),ag(n,t)):rc(n)}function rc(t){var n=t;do{if((n.flags&32768)!==0){ag(n,es);return}t=n.return;var a=dS(n.alternate,n,ya);if(a!==null){yt=a;return}if(n=n.sibling,n!==null){yt=n;return}yt=n=t}while(n!==null);ln===0&&(ln=5)}function ag(t,n){do{var a=hS(t.alternate,t);if(a!==null){a.flags&=32767,yt=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){yt=t;return}yt=t=a}while(t!==null);ln=6,yt=null}function sg(t,n,a,o,u,d,v,R,z){t.cancelPendingCommit=null;do oc();while(Tn!==0);if((Bt&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));if(d=n.lanes|n.childLanes,d|=Uu,Ht(t,a,d,v,R,z),t===Jt&&(yt=Jt=null,bt=0),br=n,is=t,Ea=a,Hf=d,Gf=u,Z0=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,TS(Q,function(){return ug(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=F.T,F.T=null,u=H.p,H.p=2,v=Bt,Bt|=4;try{pS(t,n,a)}finally{Bt=v,H.p=u,F.T=o}}Tn=1,rg(),og(),lg()}}function rg(){if(Tn===1){Tn=0;var t=is,n=br,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=F.T,F.T=null;var o=H.p;H.p=2;var u=Bt;Bt|=4;try{H0(n,t);var d=nd,v=qp(t.containerInfo),R=d.focusedElem,z=d.selectionRange;if(v!==R&&R&&R.ownerDocument&&Wp(R.ownerDocument.documentElement,R)){if(z!==null&&Au(R)){var ae=z.start,ge=z.end;if(ge===void 0&&(ge=ae),"selectionStart"in R)R.selectionStart=ae,R.selectionEnd=Math.min(ge,R.value.length);else{var xe=R.ownerDocument||document,le=xe&&xe.defaultView||window;if(le.getSelection){var ce=le.getSelection(),qe=R.textContent.length,it=Math.min(z.start,qe),Qt=z.end===void 0?it:Math.min(z.end,qe);!ce.extend&&it>Qt&&(v=Qt,Qt=it,it=v);var K=Xp(R,it),V=Xp(R,Qt);if(K&&V&&(ce.rangeCount!==1||ce.anchorNode!==K.node||ce.anchorOffset!==K.offset||ce.focusNode!==V.node||ce.focusOffset!==V.offset)){var ne=xe.createRange();ne.setStart(K.node,K.offset),ce.removeAllRanges(),it>Qt?(ce.addRange(ne),ce.extend(V.node,V.offset)):(ne.setEnd(V.node,V.offset),ce.addRange(ne))}}}}for(xe=[],ce=R;ce=ce.parentNode;)ce.nodeType===1&&xe.push({element:ce,left:ce.scrollLeft,top:ce.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<xe.length;R++){var ve=xe[R];ve.element.scrollLeft=ve.left,ve.element.scrollTop=ve.top}}xc=!!td,nd=td=null}finally{Bt=u,H.p=o,F.T=a}}t.current=n,Tn=2}}function og(){if(Tn===2){Tn=0;var t=is,n=br,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=F.T,F.T=null;var o=H.p;H.p=2;var u=Bt;Bt|=4;try{P0(t,n.alternate,n)}finally{Bt=u,H.p=o,F.T=a}}Tn=3}}function lg(){if(Tn===4||Tn===3){Tn=0,k();var t=is,n=br,a=Ea,o=Z0;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Tn=5:(Tn=0,br=is=null,cg(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(ns=null),hn(a),n=n.stateNode,he&&typeof he.onCommitFiberRoot=="function")try{he.onCommitFiberRoot(fe,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=F.T,u=H.p,H.p=2,F.T=null;try{for(var d=t.onRecoverableError,v=0;v<o.length;v++){var R=o[v];d(R.value,{componentStack:R.stack})}}finally{F.T=n,H.p=u}}(Ea&3)!==0&&oc(),Zi(t),u=t.pendingLanes,(a&261930)!==0&&(u&42)!==0?t===Vf?Bo++:(Bo=0,Vf=t):Bo=0,zo(0)}}function cg(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,xo(n)))}function oc(){return rg(),og(),lg(),ug()}function ug(){if(Tn!==5)return!1;var t=is,n=Hf;Hf=0;var a=hn(Ea),o=F.T,u=H.p;try{H.p=32>a?32:a,F.T=null,a=Gf,Gf=null;var d=is,v=Ea;if(Tn=0,br=is=null,Ea=0,(Bt&6)!==0)throw Error(s(331));var R=Bt;if(Bt|=4,W0(d.current),V0(d,d.current,v,a),Bt=R,zo(0,!1),he&&typeof he.onPostCommitFiberRoot=="function")try{he.onPostCommitFiberRoot(fe,d)}catch{}return!0}finally{H.p=u,F.T=o,cg(t,n)}}function fg(t,n,a){n=vi(a,n),n=Sf(t.stateNode,n,2),t=Qa(t,n,2),t!==null&&(He(t,2),Zi(t))}function Wt(t,n,a){if(t.tag===3)fg(t,t,a);else for(;n!==null;){if(n.tag===3){fg(n,t,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(ns===null||!ns.has(o))){t=vi(a,t),a=d0(2),o=Qa(n,a,2),o!==null&&(h0(a,o,n,t),He(o,2),Zi(o));break}}n=n.return}}function Wf(t,n,a){var o=t.pingCache;if(o===null){o=t.pingCache=new _S;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(Ff=!0,u.add(a),t=yS.bind(null,t,n,a),n.then(t,t))}function yS(t,n,a){var o=t.pingCache;o!==null&&o.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Jt===t&&(bt&a)===a&&(ln===4||ln===3&&(bt&62914560)===bt&&300>St()-tc?(Bt&2)===0&&Tr(t,0):Bf|=a,Er===bt&&(Er=0)),Zi(t)}function dg(t,n){n===0&&(n=ye()),t=Rs(t,n),t!==null&&(He(t,n),Zi(t))}function ES(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),dg(t,a)}function bS(t,n){var a=0;switch(t.tag){case 31:case 13:var o=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),dg(t,a)}function TS(t,n){return wt(t,n)}var lc=null,Rr=null,qf=!1,cc=!1,Yf=!1,ss=0;function Zi(t){t!==Rr&&t.next===null&&(Rr===null?lc=Rr=t:Rr=Rr.next=t),cc=!0,qf||(qf=!0,RS())}function zo(t,n){if(!Yf&&cc){Yf=!0;do for(var a=!1,o=lc;o!==null;){if(t!==0){var u=o.pendingLanes;if(u===0)var d=0;else{var v=o.suspendedLanes,R=o.pingedLanes;d=(1<<31-Be(42|t)+1)-1,d&=u&~(v&~R),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(a=!0,gg(o,d))}else d=bt,d=me(o,o===Jt?d:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(d&3)===0||we(o,d)||(a=!0,gg(o,d));o=o.next}while(a);Yf=!1}}function AS(){hg()}function hg(){cc=qf=!1;var t=0;ss!==0&&FS()&&(t=ss);for(var n=St(),a=null,o=lc;o!==null;){var u=o.next,d=pg(o,n);d===0?(o.next=null,a===null?lc=u:a.next=u,u===null&&(Rr=a)):(a=o,(t!==0||(d&3)!==0)&&(cc=!0)),o=u}Tn!==0&&Tn!==5||zo(t),ss!==0&&(ss=0)}function pg(t,n){for(var a=t.suspendedLanes,o=t.pingedLanes,u=t.expirationTimes,d=t.pendingLanes&-62914561;0<d;){var v=31-Be(d),R=1<<v,z=u[v];z===-1?((R&a)===0||(R&o)!==0)&&(u[v]=Pe(R,n)):z<=n&&(t.expiredLanes|=R),d&=~R}if(n=Jt,a=bt,a=me(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,a===0||t===n&&(Xt===2||Xt===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&ut(o),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||we(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(o!==null&&ut(o),hn(a)){case 2:case 8:a=E;break;case 32:a=Q;break;case 268435456:a=ue;break;default:a=Q}return o=mg.bind(null,t),a=wt(a,o),t.callbackPriority=n,t.callbackNode=a,n}return o!==null&&o!==null&&ut(o),t.callbackPriority=2,t.callbackNode=null,2}function mg(t,n){if(Tn!==0&&Tn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(oc()&&t.callbackNode!==a)return null;var o=bt;return o=me(t,t===Jt?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(Q0(t,o,n),pg(t,St()),t.callbackNode!=null&&t.callbackNode===a?mg.bind(null,t):null)}function gg(t,n){if(oc())return null;Q0(t,n,!0)}function RS(){zS(function(){(Bt&6)!==0?wt(D,AS):hg()})}function Zf(){if(ss===0){var t=dr;t===0&&(t=Ke,Ke<<=1,(Ke&261888)===0&&(Ke=256)),ss=t}return ss}function _g(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Es(""+t)}function vg(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function CS(t,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var d=_g((u[$t]||null).action),v=o.submitter;v&&(n=(n=v[$t]||null)?_g(n.formAction):v.getAttribute("formAction"),n!==null&&(d=n,v=null));var R=new Ml("action","action",null,o,u);t.push({event:R,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(ss!==0){var z=v?vg(u,v):new FormData(u);pf(a,{pending:!0,data:z,method:u.method,action:d},null,z)}}else typeof d=="function"&&(R.preventDefault(),z=v?vg(u,v):new FormData(u),pf(a,{pending:!0,data:z,method:u.method,action:d},d,z))},currentTarget:u}]})}}for(var Kf=0;Kf<Du.length;Kf++){var Qf=Du[Kf],wS=Qf.toLowerCase(),DS=Qf[0].toUpperCase()+Qf.slice(1);Li(wS,"on"+DS)}Li(Kp,"onAnimationEnd"),Li(Qp,"onAnimationIteration"),Li(jp,"onAnimationStart"),Li("dblclick","onDoubleClick"),Li("focusin","onFocus"),Li("focusout","onBlur"),Li(qx,"onTransitionRun"),Li(Yx,"onTransitionStart"),Li(Zx,"onTransitionCancel"),Li(Jp,"onTransitionEnd"),oe("onMouseEnter",["mouseout","mouseover"]),oe("onMouseLeave",["mouseout","mouseover"]),oe("onPointerEnter",["pointerout","pointerover"]),oe("onPointerLeave",["pointerout","pointerover"]),W("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),W("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),W("onBeforeInput",["compositionend","keypress","textInput","paste"]),W("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),W("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),W("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ho="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),US=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ho));function xg(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var o=t[a],u=o.event;o=o.listeners;e:{var d=void 0;if(n)for(var v=o.length-1;0<=v;v--){var R=o[v],z=R.instance,ae=R.currentTarget;if(R=R.listener,z!==d&&u.isPropagationStopped())break e;d=R,u.currentTarget=ae;try{d(u)}catch(ge){bl(ge)}u.currentTarget=null,d=z}else for(v=0;v<o.length;v++){if(R=o[v],z=R.instance,ae=R.currentTarget,R=R.listener,z!==d&&u.isPropagationStopped())break e;d=R,u.currentTarget=ae;try{d(u)}catch(ge){bl(ge)}u.currentTarget=null,d=z}}}}function Et(t,n){var a=n[Kn];a===void 0&&(a=n[Kn]=new Set);var o=t+"__bubble";a.has(o)||(Sg(n,t,2,!1),a.add(o))}function jf(t,n,a){var o=0;n&&(o|=4),Sg(a,t,o,n)}var uc="_reactListening"+Math.random().toString(36).slice(2);function Jf(t){if(!t[uc]){t[uc]=!0,_l.forEach(function(a){a!=="selectionchange"&&(US.has(a)||jf(a,!1,t),jf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[uc]||(n[uc]=!0,jf("selectionchange",!1,n))}}function Sg(t,n,a,o){switch(Kg(n)){case 2:var u=sM;break;case 8:u=rM;break;default:u=hd}a=u.bind(null,n,a,t),u=void 0,!_u||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function $f(t,n,a,o,u){var d=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var v=o.tag;if(v===3||v===4){var R=o.stateNode.containerInfo;if(R===u)break;if(v===4)for(v=o.return;v!==null;){var z=v.tag;if((z===3||z===4)&&v.stateNode.containerInfo===u)return;v=v.return}for(;R!==null;){if(v=ra(R),v===null)return;if(z=v.tag,z===5||z===6||z===26||z===27){o=d=v;continue e}R=R.parentNode}}o=o.return}Tp(function(){var ae=d,ge=mu(a),xe=[];e:{var le=$p.get(t);if(le!==void 0){var ce=Ml,qe=t;switch(t){case"keypress":if(xl(a)===0)break e;case"keydown":case"keyup":ce=bx;break;case"focusin":qe="focus",ce=Mu;break;case"focusout":qe="blur",ce=Mu;break;case"beforeblur":case"afterblur":ce=Mu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ce=Cp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ce=dx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ce=Rx;break;case Kp:case Qp:case jp:ce=mx;break;case Jp:ce=wx;break;case"scroll":case"scrollend":ce=ux;break;case"wheel":ce=Ux;break;case"copy":case"cut":case"paste":ce=_x;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ce=Dp;break;case"toggle":case"beforetoggle":ce=Lx}var it=(n&4)!==0,Qt=!it&&(t==="scroll"||t==="scrollend"),K=it?le!==null?le+"Capture":null:le;it=[];for(var V=ae,ne;V!==null;){var ve=V;if(ne=ve.stateNode,ve=ve.tag,ve!==5&&ve!==26&&ve!==27||ne===null||K===null||(ve=oo(V,K),ve!=null&&it.push(Go(V,ve,ne))),Qt)break;V=V.return}0<it.length&&(le=new ce(le,qe,null,a,ge),xe.push({event:le,listeners:it}))}}if((n&7)===0){e:{if(le=t==="mouseover"||t==="pointerover",ce=t==="mouseout"||t==="pointerout",le&&a!==pu&&(qe=a.relatedTarget||a.fromElement)&&(ra(qe)||qe[Cn]))break e;if((ce||le)&&(le=ge.window===ge?ge:(le=ge.ownerDocument)?le.defaultView||le.parentWindow:window,ce?(qe=a.relatedTarget||a.toElement,ce=ae,qe=qe?ra(qe):null,qe!==null&&(Qt=c(qe),it=qe.tag,qe!==Qt||it!==5&&it!==27&&it!==6)&&(qe=null)):(ce=null,qe=ae),ce!==qe)){if(it=Cp,ve="onMouseLeave",K="onMouseEnter",V="mouse",(t==="pointerout"||t==="pointerover")&&(it=Dp,ve="onPointerLeave",K="onPointerEnter",V="pointer"),Qt=ce==null?le:ys(ce),ne=qe==null?le:ys(qe),le=new it(ve,V+"leave",ce,a,ge),le.target=Qt,le.relatedTarget=ne,ve=null,ra(ge)===ae&&(it=new it(K,V+"enter",qe,a,ge),it.target=ne,it.relatedTarget=Qt,ve=it),Qt=ve,ce&&qe)t:{for(it=NS,K=ce,V=qe,ne=0,ve=K;ve;ve=it(ve))ne++;ve=0;for(var tt=V;tt;tt=it(tt))ve++;for(;0<ne-ve;)K=it(K),ne--;for(;0<ve-ne;)V=it(V),ve--;for(;ne--;){if(K===V||V!==null&&K===V.alternate){it=K;break t}K=it(K),V=it(V)}it=null}else it=null;ce!==null&&Mg(xe,le,ce,it,!1),qe!==null&&Qt!==null&&Mg(xe,Qt,qe,it,!0)}}e:{if(le=ae?ys(ae):window,ce=le.nodeName&&le.nodeName.toLowerCase(),ce==="select"||ce==="input"&&le.type==="file")var Pt=Bp;else if(Ip(le))if(zp)Pt=kx;else{Pt=Gx;var Qe=Hx}else ce=le.nodeName,!ce||ce.toLowerCase()!=="input"||le.type!=="checkbox"&&le.type!=="radio"?ae&&zt(ae.elementType)&&(Pt=Bp):Pt=Vx;if(Pt&&(Pt=Pt(t,ae))){Fp(xe,Pt,a,ge);break e}Qe&&Qe(t,le,ae),t==="focusout"&&ae&&le.type==="number"&&ae.memoizedProps.value!=null&&Mt(le,"number",le.value)}switch(Qe=ae?ys(ae):window,t){case"focusin":(Ip(Qe)||Qe.contentEditable==="true")&&(ar=Qe,Ru=ae,go=null);break;case"focusout":go=Ru=ar=null;break;case"mousedown":Cu=!0;break;case"contextmenu":case"mouseup":case"dragend":Cu=!1,Yp(xe,a,ge);break;case"selectionchange":if(Wx)break;case"keydown":case"keyup":Yp(xe,a,ge)}var ht;if(Eu)e:{switch(t){case"compositionstart":var Tt="onCompositionStart";break e;case"compositionend":Tt="onCompositionEnd";break e;case"compositionupdate":Tt="onCompositionUpdate";break e}Tt=void 0}else ir?Op(t,a)&&(Tt="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(Tt="onCompositionStart");Tt&&(Up&&a.locale!=="ko"&&(ir||Tt!=="onCompositionStart"?Tt==="onCompositionEnd"&&ir&&(ht=Ap()):(ka=ge,vu="value"in ka?ka.value:ka.textContent,ir=!0)),Qe=fc(ae,Tt),0<Qe.length&&(Tt=new wp(Tt,t,null,a,ge),xe.push({event:Tt,listeners:Qe}),ht?Tt.data=ht:(ht=Pp(a),ht!==null&&(Tt.data=ht)))),(ht=Px?Ix(t,a):Fx(t,a))&&(Tt=fc(ae,"onBeforeInput"),0<Tt.length&&(Qe=new wp("onBeforeInput","beforeinput",null,a,ge),xe.push({event:Qe,listeners:Tt}),Qe.data=ht)),CS(xe,t,ae,a,ge)}xg(xe,n)})}function Go(t,n,a){return{instance:t,listener:n,currentTarget:a}}function fc(t,n){for(var a=n+"Capture",o=[];t!==null;){var u=t,d=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||d===null||(u=oo(t,a),u!=null&&o.unshift(Go(t,u,d)),u=oo(t,n),u!=null&&o.push(Go(t,u,d))),t.tag===3)return o;t=t.return}return[]}function NS(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Mg(t,n,a,o,u){for(var d=n._reactName,v=[];a!==null&&a!==o;){var R=a,z=R.alternate,ae=R.stateNode;if(R=R.tag,z!==null&&z===o)break;R!==5&&R!==26&&R!==27||ae===null||(z=ae,u?(ae=oo(a,d),ae!=null&&v.unshift(Go(a,ae,z))):u||(ae=oo(a,d),ae!=null&&v.push(Go(a,ae,z)))),a=a.return}v.length!==0&&t.push({event:n,listeners:v})}var LS=/\r\n?/g,OS=/\u0000|\uFFFD/g;function yg(t){return(typeof t=="string"?t:""+t).replace(LS,`
`).replace(OS,"")}function Eg(t,n){return n=yg(n),yg(t)===n}function Kt(t,n,a,o,u,d){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||ri(t,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&ri(t,""+o);break;case"className":We(t,"class",o);break;case"tabIndex":We(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":We(t,a,o);break;case"style":Ni(t,o,d);break;case"data":if(n!=="object"){We(t,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=Es(""+o),t.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(n!=="input"&&Kt(t,n,"name",u.name,u,null),Kt(t,n,"formEncType",u.formEncType,u,null),Kt(t,n,"formMethod",u.formMethod,u,null),Kt(t,n,"formTarget",u.formTarget,u,null)):(Kt(t,n,"encType",u.encType,u,null),Kt(t,n,"method",u.method,u,null),Kt(t,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=Es(""+o),t.setAttribute(a,o);break;case"onClick":o!=null&&(t.onclick=la);break;case"onScroll":o!=null&&Et("scroll",t);break;case"onScrollEnd":o!=null&&Et("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}a=Es(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""+o):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":o===!0?t.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,o):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(a,o):t.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(a):t.setAttribute(a,o);break;case"popover":Et("beforetoggle",t),Et("toggle",t),Oe(t,"popover",o);break;case"xlinkActuate":ke(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":ke(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":ke(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":ke(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":ke(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":ke(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":ke(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":ke(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":ke(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Oe(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Xi.get(a)||a,Oe(t,a,o))}}function ed(t,n,a,o,u,d){switch(a){case"style":Ni(t,o,d);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"children":typeof o=="string"?ri(t,o):(typeof o=="number"||typeof o=="bigint")&&ri(t,""+o);break;case"onScroll":o!=null&&Et("scroll",t);break;case"onScrollEnd":o!=null&&Et("scrollend",t);break;case"onClick":o!=null&&(t.onclick=la);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!A.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),d=t[$t]||null,d=d!=null?d[a]:null,typeof d=="function"&&t.removeEventListener(n,d,u),typeof o=="function")){typeof d!="function"&&d!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,o,u);break e}a in t?t[a]=o:o===!0?t.setAttribute(a,""):Oe(t,a,o)}}}function Pn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Et("error",t),Et("load",t);var o=!1,u=!1,d;for(d in a)if(a.hasOwnProperty(d)){var v=a[d];if(v!=null)switch(d){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Kt(t,n,d,v,a,null)}}u&&Kt(t,n,"srcSet",a.srcSet,a,null),o&&Kt(t,n,"src",a.src,a,null);return;case"input":Et("invalid",t);var R=d=v=u=null,z=null,ae=null;for(o in a)if(a.hasOwnProperty(o)){var ge=a[o];if(ge!=null)switch(o){case"name":u=ge;break;case"type":v=ge;break;case"checked":z=ge;break;case"defaultChecked":ae=ge;break;case"value":d=ge;break;case"defaultValue":R=ge;break;case"children":case"dangerouslySetInnerHTML":if(ge!=null)throw Error(s(137,n));break;default:Kt(t,n,o,ge,a,null)}}Bn(t,d,R,z,ae,v,u,!1);return;case"select":Et("invalid",t),o=v=d=null;for(u in a)if(a.hasOwnProperty(u)&&(R=a[u],R!=null))switch(u){case"value":d=R;break;case"defaultValue":v=R;break;case"multiple":o=R;default:Kt(t,n,u,R,a,null)}n=d,a=v,t.multiple=!!o,n!=null?bn(t,!!o,n,!1):a!=null&&bn(t,!!o,a,!0);return;case"textarea":Et("invalid",t),d=u=o=null;for(v in a)if(a.hasOwnProperty(v)&&(R=a[v],R!=null))switch(v){case"value":o=R;break;case"defaultValue":u=R;break;case"children":d=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(s(91));break;default:Kt(t,n,v,R,a,null)}Ui(t,o,u,d);return;case"option":for(z in a)if(a.hasOwnProperty(z)&&(o=a[z],o!=null))switch(z){case"selected":t.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Kt(t,n,z,o,a,null)}return;case"dialog":Et("beforetoggle",t),Et("toggle",t),Et("cancel",t),Et("close",t);break;case"iframe":case"object":Et("load",t);break;case"video":case"audio":for(o=0;o<Ho.length;o++)Et(Ho[o],t);break;case"image":Et("error",t),Et("load",t);break;case"details":Et("toggle",t);break;case"embed":case"source":case"link":Et("error",t),Et("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ae in a)if(a.hasOwnProperty(ae)&&(o=a[ae],o!=null))switch(ae){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Kt(t,n,ae,o,a,null)}return;default:if(zt(n)){for(ge in a)a.hasOwnProperty(ge)&&(o=a[ge],o!==void 0&&ed(t,n,ge,o,a,void 0));return}}for(R in a)a.hasOwnProperty(R)&&(o=a[R],o!=null&&Kt(t,n,R,o,a,null))}function PS(t,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,d=null,v=null,R=null,z=null,ae=null,ge=null;for(ce in a){var xe=a[ce];if(a.hasOwnProperty(ce)&&xe!=null)switch(ce){case"checked":break;case"value":break;case"defaultValue":z=xe;default:o.hasOwnProperty(ce)||Kt(t,n,ce,null,o,xe)}}for(var le in o){var ce=o[le];if(xe=a[le],o.hasOwnProperty(le)&&(ce!=null||xe!=null))switch(le){case"type":d=ce;break;case"name":u=ce;break;case"checked":ae=ce;break;case"defaultChecked":ge=ce;break;case"value":v=ce;break;case"defaultValue":R=ce;break;case"children":case"dangerouslySetInnerHTML":if(ce!=null)throw Error(s(137,n));break;default:ce!==xe&&Kt(t,n,le,ce,o,xe)}}Ge(t,v,R,z,ae,ge,d,u);return;case"select":ce=v=R=le=null;for(d in a)if(z=a[d],a.hasOwnProperty(d)&&z!=null)switch(d){case"value":break;case"multiple":ce=z;default:o.hasOwnProperty(d)||Kt(t,n,d,null,o,z)}for(u in o)if(d=o[u],z=a[u],o.hasOwnProperty(u)&&(d!=null||z!=null))switch(u){case"value":le=d;break;case"defaultValue":R=d;break;case"multiple":v=d;default:d!==z&&Kt(t,n,u,d,o,z)}n=R,a=v,o=ce,le!=null?bn(t,!!a,le,!1):!!o!=!!a&&(n!=null?bn(t,!!a,n,!0):bn(t,!!a,a?[]:"",!1));return;case"textarea":ce=le=null;for(R in a)if(u=a[R],a.hasOwnProperty(R)&&u!=null&&!o.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:Kt(t,n,R,null,o,u)}for(v in o)if(u=o[v],d=a[v],o.hasOwnProperty(v)&&(u!=null||d!=null))switch(v){case"value":le=u;break;case"defaultValue":ce=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==d&&Kt(t,n,v,u,o,d)}si(t,le,ce);return;case"option":for(var qe in a)if(le=a[qe],a.hasOwnProperty(qe)&&le!=null&&!o.hasOwnProperty(qe))switch(qe){case"selected":t.selected=!1;break;default:Kt(t,n,qe,null,o,le)}for(z in o)if(le=o[z],ce=a[z],o.hasOwnProperty(z)&&le!==ce&&(le!=null||ce!=null))switch(z){case"selected":t.selected=le&&typeof le!="function"&&typeof le!="symbol";break;default:Kt(t,n,z,le,o,ce)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var it in a)le=a[it],a.hasOwnProperty(it)&&le!=null&&!o.hasOwnProperty(it)&&Kt(t,n,it,null,o,le);for(ae in o)if(le=o[ae],ce=a[ae],o.hasOwnProperty(ae)&&le!==ce&&(le!=null||ce!=null))switch(ae){case"children":case"dangerouslySetInnerHTML":if(le!=null)throw Error(s(137,n));break;default:Kt(t,n,ae,le,o,ce)}return;default:if(zt(n)){for(var Qt in a)le=a[Qt],a.hasOwnProperty(Qt)&&le!==void 0&&!o.hasOwnProperty(Qt)&&ed(t,n,Qt,void 0,o,le);for(ge in o)le=o[ge],ce=a[ge],!o.hasOwnProperty(ge)||le===ce||le===void 0&&ce===void 0||ed(t,n,ge,le,o,ce);return}}for(var K in a)le=a[K],a.hasOwnProperty(K)&&le!=null&&!o.hasOwnProperty(K)&&Kt(t,n,K,null,o,le);for(xe in o)le=o[xe],ce=a[xe],!o.hasOwnProperty(xe)||le===ce||le==null&&ce==null||Kt(t,n,xe,le,o,ce)}function bg(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function IS(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],d=u.transferSize,v=u.initiatorType,R=u.duration;if(d&&R&&bg(v)){for(v=0,R=u.responseEnd,o+=1;o<a.length;o++){var z=a[o],ae=z.startTime;if(ae>R)break;var ge=z.transferSize,xe=z.initiatorType;ge&&bg(xe)&&(z=z.responseEnd,v+=ge*(z<R?1:(R-ae)/(z-ae)))}if(--o,n+=8*(d+v)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var td=null,nd=null;function dc(t){return t.nodeType===9?t:t.ownerDocument}function Tg(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Ag(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function id(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var ad=null;function FS(){var t=window.event;return t&&t.type==="popstate"?t===ad?!1:(ad=t,!0):(ad=null,!1)}var Rg=typeof setTimeout=="function"?setTimeout:void 0,BS=typeof clearTimeout=="function"?clearTimeout:void 0,Cg=typeof Promise=="function"?Promise:void 0,zS=typeof queueMicrotask=="function"?queueMicrotask:typeof Cg<"u"?function(t){return Cg.resolve(null).then(t).catch(HS)}:Rg;function HS(t){setTimeout(function(){throw t})}function rs(t){return t==="head"}function wg(t,n){var a=n,o=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){t.removeChild(u),Ur(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Vo(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,Vo(a);for(var d=a.firstChild;d;){var v=d.nextSibling,R=d.nodeName;d[za]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&d.rel.toLowerCase()==="stylesheet"||a.removeChild(d),d=v}}else a==="body"&&Vo(t.ownerDocument.body);a=u}while(a);Ur(n)}function Dg(t,n){var a=t;t=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=o}while(a)}function sd(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":sd(a),Ha(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function GS(t,n,a,o){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[za])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(d=t.getAttribute("rel"),d==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(d!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(d=t.getAttribute("src"),(d!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&d&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var d=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===d)return t}else return t;if(t=Ei(t.nextSibling),t===null)break}return null}function VS(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=Ei(t.nextSibling),t===null))return null;return t}function Ug(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=Ei(t.nextSibling),t===null))return null;return t}function rd(t){return t.data==="$?"||t.data==="$~"}function od(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function kS(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function Ei(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var ld=null;function Ng(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return Ei(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function Lg(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function Og(t,n,a){switch(n=dc(a),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function Vo(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Ha(t)}var bi=new Map,Pg=new Set;function hc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var ba=H.d;H.d={f:XS,r:WS,D:qS,C:YS,L:ZS,m:KS,X:jS,S:QS,M:JS};function XS(){var t=ba.f(),n=ac();return t||n}function WS(t){var n=oa(t);n!==null&&n.tag===5&&n.type==="form"?Jm(n):ba.r(t)}var Cr=typeof document>"u"?null:document;function Ig(t,n,a){var o=Cr;if(o&&typeof n=="string"&&n){var u=Vt(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),Pg.has(u)||(Pg.add(u),t={rel:t,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Pn(n,"link",t),mn(n),o.head.appendChild(n)))}}function qS(t){ba.D(t),Ig("dns-prefetch",t,null)}function YS(t,n){ba.C(t,n),Ig("preconnect",t,n)}function ZS(t,n,a){ba.L(t,n,a);var o=Cr;if(o&&t&&n){var u='link[rel="preload"][as="'+Vt(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+Vt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+Vt(a.imageSizes)+'"]')):u+='[href="'+Vt(t)+'"]';var d=u;switch(n){case"style":d=wr(t);break;case"script":d=Dr(t)}bi.has(d)||(t=x({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),bi.set(d,t),o.querySelector(u)!==null||n==="style"&&o.querySelector(ko(d))||n==="script"&&o.querySelector(Xo(d))||(n=o.createElement("link"),Pn(n,"link",t),mn(n),o.head.appendChild(n)))}}function KS(t,n){ba.m(t,n);var a=Cr;if(a&&t){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Vt(o)+'"][href="'+Vt(t)+'"]',d=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=Dr(t)}if(!bi.has(d)&&(t=x({rel:"modulepreload",href:t},n),bi.set(d,t),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Xo(d)))return}o=a.createElement("link"),Pn(o,"link",t),mn(o),a.head.appendChild(o)}}}function QS(t,n,a){ba.S(t,n,a);var o=Cr;if(o&&t){var u=Ga(o).hoistableStyles,d=wr(t);n=n||"default";var v=u.get(d);if(!v){var R={loading:0,preload:null};if(v=o.querySelector(ko(d)))R.loading=5;else{t=x({rel:"stylesheet",href:t,"data-precedence":n},a),(a=bi.get(d))&&cd(t,a);var z=v=o.createElement("link");mn(z),Pn(z,"link",t),z._p=new Promise(function(ae,ge){z.onload=ae,z.onerror=ge}),z.addEventListener("load",function(){R.loading|=1}),z.addEventListener("error",function(){R.loading|=2}),R.loading|=4,pc(v,n,o)}v={type:"stylesheet",instance:v,count:1,state:R},u.set(d,v)}}}function jS(t,n){ba.X(t,n);var a=Cr;if(a&&t){var o=Ga(a).hoistableScripts,u=Dr(t),d=o.get(u);d||(d=a.querySelector(Xo(u)),d||(t=x({src:t,async:!0},n),(n=bi.get(u))&&ud(t,n),d=a.createElement("script"),mn(d),Pn(d,"link",t),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function JS(t,n){ba.M(t,n);var a=Cr;if(a&&t){var o=Ga(a).hoistableScripts,u=Dr(t),d=o.get(u);d||(d=a.querySelector(Xo(u)),d||(t=x({src:t,async:!0,type:"module"},n),(n=bi.get(u))&&ud(t,n),d=a.createElement("script"),mn(d),Pn(d,"link",t),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function Fg(t,n,a,o){var u=(u=ie.current)?hc(u):null;if(!u)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=wr(a.href),a=Ga(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=wr(a.href);var d=Ga(u).hoistableStyles,v=d.get(t);if(v||(u=u.ownerDocument||u,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(t,v),(d=u.querySelector(ko(t)))&&!d._p&&(v.instance=d,v.state.loading=5),bi.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},bi.set(t,a),d||$S(u,t,a,v.state))),n&&o===null)throw Error(s(528,""));return v}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Dr(a),a=Ga(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function wr(t){return'href="'+Vt(t)+'"'}function ko(t){return'link[rel="stylesheet"]['+t+"]"}function Bg(t){return x({},t,{"data-precedence":t.precedence,precedence:null})}function $S(t,n,a,o){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=t.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Pn(n,"link",a),mn(n),t.head.appendChild(n))}function Dr(t){return'[src="'+Vt(t)+'"]'}function Xo(t){return"script[async]"+t}function zg(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=t.querySelector('style[data-href~="'+Vt(a.href)+'"]');if(o)return n.instance=o,mn(o),o;var u=x({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),mn(o),Pn(o,"style",u),pc(o,a.precedence,t),n.instance=o;case"stylesheet":u=wr(a.href);var d=t.querySelector(ko(u));if(d)return n.state.loading|=4,n.instance=d,mn(d),d;o=Bg(a),(u=bi.get(u))&&cd(o,u),d=(t.ownerDocument||t).createElement("link"),mn(d);var v=d;return v._p=new Promise(function(R,z){v.onload=R,v.onerror=z}),Pn(d,"link",o),n.state.loading|=4,pc(d,a.precedence,t),n.instance=d;case"script":return d=Dr(a.src),(u=t.querySelector(Xo(d)))?(n.instance=u,mn(u),u):(o=a,(u=bi.get(d))&&(o=x({},a),ud(o,u)),t=t.ownerDocument||t,u=t.createElement("script"),mn(u),Pn(u,"link",o),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,pc(o,a.precedence,t));return n.instance}function pc(t,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,d=u,v=0;v<o.length;v++){var R=o[v];if(R.dataset.precedence===n)d=R;else if(d!==u)break}d?d.parentNode.insertBefore(t,d.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function cd(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function ud(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var mc=null;function Hg(t,n,a){if(mc===null){var o=new Map,u=mc=new Map;u.set(a,o)}else u=mc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(t))return o;for(o.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var d=a[u];if(!(d[za]||d[Lt]||t==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var v=d.getAttribute(n)||"";v=t+v;var R=o.get(v);R?R.push(d):o.set(v,[d])}}return o}function Gg(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function eM(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Vg(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function tM(t,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=wr(o.href),d=n.querySelector(ko(u));if(d){n=d._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=gc.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=d,mn(d);return}d=n.ownerDocument||n,o=Bg(o),(u=bi.get(u))&&cd(o,u),d=d.createElement("link"),mn(d);var v=d;v._p=new Promise(function(R,z){v.onload=R,v.onerror=z}),Pn(d,"link",o),a.instance=d}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=gc.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var fd=0;function nM(t,n){return t.stylesheets&&t.count===0&&vc(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var o=setTimeout(function(){if(t.stylesheets&&vc(t,t.stylesheets),t.unsuspend){var d=t.unsuspend;t.unsuspend=null,d()}},6e4+n);0<t.imgBytes&&fd===0&&(fd=62500*IS());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&vc(t,t.stylesheets),t.unsuspend)){var d=t.unsuspend;t.unsuspend=null,d()}},(t.imgBytes>fd?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function gc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)vc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var _c=null;function vc(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,_c=new Map,n.forEach(iM,t),_c=null,gc.call(t))}function iM(t,n){if(!(n.state.loading&4)){var a=_c.get(t);if(a)var o=a.get(null);else{a=new Map,_c.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<u.length;d++){var v=u[d];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(a.set(v.dataset.precedence,v),o=v)}o&&a.set(null,o)}u=n.instance,v=u.getAttribute("data-precedence"),d=a.get(v)||o,d===o&&a.set(null,u),a.set(v,u),this.count++,o=gc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),d?d.parentNode.insertBefore(u,d.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var Wo={$$typeof:B,Provider:null,Consumer:null,_currentValue:ee,_currentValue2:ee,_threadCount:0};function aM(t,n,a,o,u,d,v,R,z){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Xe(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Xe(0),this.hiddenUpdates=Xe(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=d,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=z,this.incompleteTransitions=new Map}function kg(t,n,a,o,u,d,v,R,z,ae,ge,xe){return t=new aM(t,n,a,v,z,ae,ge,xe,R),n=1,d===!0&&(n|=24),d=li(3,null,null,n),t.current=d,d.stateNode=t,n=ku(),n.refCount++,t.pooledCache=n,n.refCount++,d.memoizedState={element:o,isDehydrated:a,cache:n},Yu(d),t}function Xg(t){return t?(t=or,t):or}function Wg(t,n,a,o,u,d){u=Xg(u),o.context===null?o.context=u:o.pendingContext=u,o=Ka(n),o.payload={element:a},d=d===void 0?null:d,d!==null&&(o.callback=d),a=Qa(t,o,n),a!==null&&(ti(a,t,n),Eo(a,t,n))}function qg(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function dd(t,n){qg(t,n),(t=t.alternate)&&qg(t,n)}function Yg(t){if(t.tag===13||t.tag===31){var n=Rs(t,67108864);n!==null&&ti(n,t,67108864),dd(t,67108864)}}function Zg(t){if(t.tag===13||t.tag===31){var n=hi();n=Fa(n);var a=Rs(t,n);a!==null&&ti(a,t,n),dd(t,n)}}var xc=!0;function sM(t,n,a,o){var u=F.T;F.T=null;var d=H.p;try{H.p=2,hd(t,n,a,o)}finally{H.p=d,F.T=u}}function rM(t,n,a,o){var u=F.T;F.T=null;var d=H.p;try{H.p=8,hd(t,n,a,o)}finally{H.p=d,F.T=u}}function hd(t,n,a,o){if(xc){var u=pd(o);if(u===null)$f(t,n,o,Sc,a),Qg(t,o);else if(lM(u,t,n,a,o))o.stopPropagation();else if(Qg(t,o),n&4&&-1<oM.indexOf(t)){for(;u!==null;){var d=oa(u);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var v=Ae(d.pendingLanes);if(v!==0){var R=d;for(R.pendingLanes|=2,R.entangledLanes|=2;v;){var z=1<<31-Be(v);R.entanglements[1]|=z,v&=~z}Zi(d),(Bt&6)===0&&(nc=St()+500,zo(0))}}break;case 31:case 13:R=Rs(d,2),R!==null&&ti(R,d,2),ac(),dd(d,2)}if(d=pd(o),d===null&&$f(t,n,o,Sc,a),d===u)break;u=d}u!==null&&o.stopPropagation()}else $f(t,n,o,null,a)}}function pd(t){return t=mu(t),md(t)}var Sc=null;function md(t){if(Sc=null,t=ra(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=f(n),t!==null)return t;t=null}else if(a===31){if(t=h(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return Sc=t,null}function Kg(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(vt()){case D:return 2;case E:return 8;case Q:case te:return 32;case ue:return 268435456;default:return 32}default:return 32}}var gd=!1,os=null,ls=null,cs=null,qo=new Map,Yo=new Map,us=[],oM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Qg(t,n){switch(t){case"focusin":case"focusout":os=null;break;case"dragenter":case"dragleave":ls=null;break;case"mouseover":case"mouseout":cs=null;break;case"pointerover":case"pointerout":qo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Yo.delete(n.pointerId)}}function Zo(t,n,a,o,u,d){return t===null||t.nativeEvent!==d?(t={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:d,targetContainers:[u]},n!==null&&(n=oa(n),n!==null&&Yg(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function lM(t,n,a,o,u){switch(n){case"focusin":return os=Zo(os,t,n,a,o,u),!0;case"dragenter":return ls=Zo(ls,t,n,a,o,u),!0;case"mouseover":return cs=Zo(cs,t,n,a,o,u),!0;case"pointerover":var d=u.pointerId;return qo.set(d,Zo(qo.get(d)||null,t,n,a,o,u)),!0;case"gotpointercapture":return d=u.pointerId,Yo.set(d,Zo(Yo.get(d)||null,t,n,a,o,u)),!0}return!1}function jg(t){var n=ra(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=f(a),n!==null){t.blockedOn=n,ai(t.priority,function(){Zg(a)});return}}else if(n===31){if(n=h(a),n!==null){t.blockedOn=n,ai(t.priority,function(){Zg(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Mc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=pd(t.nativeEvent);if(a===null){a=t.nativeEvent;var o=new a.constructor(a.type,a);pu=o,a.target.dispatchEvent(o),pu=null}else return n=oa(a),n!==null&&Yg(n),t.blockedOn=a,!1;n.shift()}return!0}function Jg(t,n,a){Mc(t)&&a.delete(n)}function cM(){gd=!1,os!==null&&Mc(os)&&(os=null),ls!==null&&Mc(ls)&&(ls=null),cs!==null&&Mc(cs)&&(cs=null),qo.forEach(Jg),Yo.forEach(Jg)}function yc(t,n){t.blockedOn===n&&(t.blockedOn=null,gd||(gd=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,cM)))}var Ec=null;function $g(t){Ec!==t&&(Ec=t,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Ec===t&&(Ec=null);for(var n=0;n<t.length;n+=3){var a=t[n],o=t[n+1],u=t[n+2];if(typeof o!="function"){if(md(o||a)===null)continue;break}var d=oa(a);d!==null&&(t.splice(n,3),n-=3,pf(d,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function Ur(t){function n(z){return yc(z,t)}os!==null&&yc(os,t),ls!==null&&yc(ls,t),cs!==null&&yc(cs,t),qo.forEach(n),Yo.forEach(n);for(var a=0;a<us.length;a++){var o=us[a];o.blockedOn===t&&(o.blockedOn=null)}for(;0<us.length&&(a=us[0],a.blockedOn===null);)jg(a),a.blockedOn===null&&us.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],d=a[o+1],v=u[$t]||null;if(typeof d=="function")v||$g(a);else if(v){var R=null;if(d&&d.hasAttribute("formAction")){if(u=d,v=d[$t]||null)R=v.formAction;else if(md(u)!==null)continue}else R=v.action;typeof R=="function"?a[o+1]=R:(a.splice(o,3),o-=3),$g(a)}}}function e_(){function t(d){d.canIntercept&&d.info==="react-transition"&&d.intercept({handler:function(){return new Promise(function(v){return u=v})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var d=navigation.currentEntry;d&&d.url!=null&&navigation.navigate(d.url,{state:d.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function _d(t){this._internalRoot=t}bc.prototype.render=_d.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=hi();Wg(a,o,t,n,null,null)},bc.prototype.unmount=_d.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;Wg(t.current,2,null,t,null,null),ac(),n[Cn]=null}};function bc(t){this._internalRoot=t}bc.prototype.unstable_scheduleHydration=function(t){if(t){var n=En();t={blockedOn:null,target:t,priority:n};for(var a=0;a<us.length&&n!==0&&n<us[a].priority;a++);us.splice(a,0,t),a===0&&jg(t)}};var t_=e.version;if(t_!=="19.2.7")throw Error(s(527,t_,"19.2.7"));H.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=p(n),t=t!==null?_(t):null,t=t===null?null:t.stateNode,t};var uM={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:F,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Tc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Tc.isDisabled&&Tc.supportsFiber)try{fe=Tc.inject(uM),he=Tc}catch{}}return Qo.createRoot=function(t,n){if(!l(t))throw Error(s(299));var a=!1,o="",u=l0,d=c0,v=u0;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(d=n.onCaughtError),n.onRecoverableError!==void 0&&(v=n.onRecoverableError)),n=kg(t,1,!1,null,null,a,o,null,u,d,v,e_),t[Cn]=n.current,Jf(t),new _d(n)},Qo.hydrateRoot=function(t,n,a){if(!l(t))throw Error(s(299));var o=!1,u="",d=l0,v=c0,R=u0,z=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(v=a.onCaughtError),a.onRecoverableError!==void 0&&(R=a.onRecoverableError),a.formState!==void 0&&(z=a.formState)),n=kg(t,1,!0,n,a??null,o,u,z,d,v,R,e_),n.context=Xg(null),a=n.current,o=hi(),o=Fa(o),u=Ka(o),u.callback=null,Qa(a,u,o),a=o,n.current.lanes=a,He(n,a),Zi(n),t[Cn]=n.current,Jf(t),new bc(n)},Qo.version="19.2.7",Qo}var f_;function SM(){if(f_)return Sd.exports;f_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Sd.exports=xM(),Sd.exports}var MM=SM();const yM={BASE_URL:"/",DEV:!1,MODE:"production",PROD:!0,SSR:!1,VITE_APP_URL:"",VITE_DISCORD_URL:"",VITE_DOCS_URL:"",VITE_MANIFESTO_URL:"",VITE_TUTORIAL_VIDEO_URL:"",VITE_X_URL:""},Nr=(r,e="#")=>{var i;return((i=yM[r])==null?void 0:i.trim())||e},Mn={app:Nr("VITE_APP_URL"),docs:Nr("VITE_DOCS_URL"),manifesto:Nr("VITE_MANIFESTO_URL"),discord:Nr("VITE_DISCORD_URL"),x:Nr("VITE_X_URL"),tutorialVideo:Nr("VITE_TUTORIAL_VIDEO_URL",""),explore:"#explore",exploreAgents:"#explore-agents",exploreBuckets:"#explore-buckets"},Kc=[{id:"demo",label:"Demo",href:"#demo"},{id:"personas",label:"Personas",href:"#personas"},{id:"how",label:"How it works",href:"#how"},{id:"explore",label:"Explore",href:"#explore"}],d_={text:"> The agent-native L1 DEX, for faster and safer trades.",href:Mn.manifesto},Hs={eyebrow:{label:"A manifesto for verifiable agents",href:Mn.manifesto},headline:["Agents you can trust.","Assets you can trade."],primaryCta:{label:"Launch Morpheum",href:Mn.app},secondaryCta:{label:"Explore agents",href:Mn.explore}},bd={badChoices:[{title:"Buy random agent tokens",detail:"speculation without underwriting"},{title:"Run your own agent",detail:"automation without capital controls"}],payoff:"Morpheum gives every agent records, identity, proof, and markets, so it becomes a real capital asset you can verify, own, and trade.",close:"Capital funds proof."},h_=[{label:"MAEX indices",status:"LIVE",live:!0},{label:"Agents",status:"REPUTATION / SHARPE / ROI"},{label:"Risk level",status:"MANUAL / HITL / HANDS-OFF"},{label:"Agent notifications",status:"WANT-TO / ACTION / PAUSED / REJECTED"},{label:"Copy desks",status:"LIVE",live:!0},{label:"Buckets",status:"RISK-ISOLATED"},{label:"Vaults",status:"ONCHAIN"},{label:"Staking",status:"LIVE",live:!0}],ch={kicker:"Product tour",videoCaption:"See an agent discovered, copied, supervised, and isolated in ~60s.",verbs:[{verb:"Discover",caption:"Passport identity — reputation on proof."},{verb:"Copy",caption:"Agent card badge — mirror into your desk."},{verb:"Supervise",caption:"Guarded HITL — approve every want-to."},{verb:"Isolate",caption:"Bucket live — fund its wallet."}]},Td={kicker:"Choose your path",title:"Become part of the agent economy",items:[{title:"Become an Operator",weight:"major",steps:["Mint an agent and set its mandate.","Choose a Risk Level: Manual · HITL · Hands-off.","Build a proven track record investors can underwrite."],cta:{label:"Run an agent",href:Mn.exploreAgents}},{title:"Become a Copy Trader",weight:"major",steps:["Screen agents on real proof — receipts and risk scores.","Mirror the best into your own dedicated desk.","Track PnL and rebalance anytime."],cta:{label:"Start copying",href:Mn.exploreAgents}},{title:"Provide Capital",weight:"light",steps:["Deposit into a vault or bucket.","Stake to earn.","Withdraw on your terms."],cta:{label:"Explore vaults",href:Mn.exploreBuckets}}]},Lr={kicker:"How it works",title:"Discover → Copy → Supervise → Isolate",outcome:"A proven, risk-isolated capital position — not a bet on a black box.",chips:[{label:"Risk level",value:"Manual · HITL · Hands-off"},{label:"Notifications",value:"Want-to · Action · Paused · Rejected"},{label:"Capital",value:"Bucket / Vault"}],steps:[{n:1,title:"Discover",feature:"Agents & Indices + proof",body:"Browse the MAEX roster and index catalog and read the proof before you commit a dollar.",example:"Open Agent-SharpeShark and see its receipts, reputation, risk score, and Sharpe / ROI side by side.",coverUrl:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1200&q=75"},{n:2,title:"Copy",feature:"Copy Trade",body:"Mirror a proven performer into your own desk in one click, sized to your capital, with spread / funding cost shown before you confirm.",example:"One click clones SharpeShark's strategy into a fresh desk bound to your wallet.",coverUrl:"https://images.unsplash.com/photo-1470071459604-3b5415e0f3c3?auto=format&fit=crop&w=1200&q=75"},{n:3,title:"Supervise",feature:"Risk Level + Agent Notifications",body:"Set how much the agent may act on its own — Manual · HITL · Hands-off — and stay in the loop through Agent Notifications: Want to · Action · Paused · Rejected.",example:'On HITL, a "Want to open ETH long" notification waits for your inline Approve / Reject, and Explain shows why the agent wants the trade.',coverUrl:"https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=75"},{n:4,title:"Isolate",feature:"Buckets",body:"Every mirror lands in its own dedicated cross-margin bucket bound to a wallet executor agent, so risk is contained per strategy.",example:"SharpeShark runs in its own bucket with its own margin and exposure — if it draws down, only that bucket's capital is at risk; your other desks and spot balance are untouched.",coverUrl:"https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?auto=format&fit=crop&w=1200&q=75"}]},jo={kicker:"Explore",title:"Agents. Indices. Buckets.",cards:[{title:"Agents",verbs:["Browse","Compare","Copy"],agents:[{name:"SharpeShark",sharpe:"2.41",roi:"+38.2%",risk:"72",positive:!0},{name:"SortinoSloth",sharpe:"1.86",roi:"+21.4%",risk:"58",positive:!0},{name:"FundingFox",sharpe:"1.12",roi:"-4.1%",risk:"41",positive:!1}]},{title:"Indices",verbs:["Track","Weight","Hold"],blurb:"Curated agent baskets for one-click exposure to proven strategies.",sample:[{label:"MAEX Core",value:"+12.8%",positive:!0},{label:"Risk-Off Desk",value:"+4.2%",positive:!0}]},{title:"Buckets",verbs:["Isolate","Trade","Contain"],blurb:"Risk-isolated positions — each strategy in its own margin shell.",sample:[{label:"Desk A",value:"ISOLATED",positive:!1},{label:"Desk B",value:"ISOLATED",positive:!1}]}]},Ac={line:"Back agents you can prove. Own the upside.",primaryCta:{label:"Launch app",href:Mn.app},social:[{label:"Join Discord",href:Mn.discord},{label:"Join X",href:Mn.x}]},EM={legal:"© 2026 Morpheum. Capital funds proof."};function $r({variant:r="primary",children:e,className:i="",...s}){const l=`cta cta--${r} terminal-interactive ${i}`.trim();if("href"in s&&s.href!==void 0){const{href:c,...f}=s;return q.jsx("a",{className:l,href:c,...f,children:e})}return q.jsx("button",{className:l,type:"button",...s,children:e})}function bM(){return q.jsx("section",{id:"join",className:"section community",children:q.jsxs("div",{className:"container community__inner",children:[q.jsx("h2",{className:"community__line",children:Ac.line}),q.jsxs("div",{className:"community__ctas",children:[q.jsx($r,{href:Ac.primaryCta.href,variant:"primary",children:Ac.primaryCta.label}),Ac.social.map(r=>q.jsx($r,{href:r.href,variant:"ghost",children:r.label},r.label))]})]})})}function TM(){const[r,e]=rn.useState(!1),i=!!Mn.tutorialVideo;return q.jsx("section",{id:"demo",className:"section demo",children:q.jsxs("div",{className:"container",children:[q.jsx("p",{className:"section-kicker",children:ch.kicker}),q.jsxs("div",{className:"demo__video",children:[r&&i?q.jsx("video",{className:"demo__player",src:Mn.tutorialVideo,controls:!0,autoPlay:!0,playsInline:!0}):q.jsxs("button",{type:"button",className:"demo__poster",onClick:()=>i&&e(!0),"aria-label":i?"Play tutorial video":"Tutorial video coming soon",children:[q.jsx("span",{className:"demo__play","aria-hidden":!0,children:"▶"}),q.jsx("span",{className:"demo__poster-label",children:"Tutorial"})]}),q.jsx("p",{className:"demo__caption",children:ch.videoCaption})]})]})})}const AM={receipt:"Receipt",riskScore:"Risk",credential:"Credential",verified:"Verified"};function Ad({type:r,value:e}){return q.jsxs("span",{className:`proof-chip proof-chip--${r}`,children:[q.jsx("span",{className:"proof-chip__dot","aria-hidden":!0}),q.jsx("span",{className:"proof-chip__label",children:AM[r]}),e?q.jsx("span",{className:"proof-chip__value",children:e}):null]})}function RM(){const r=jo.cards[0],e=jo.cards[1],i=jo.cards[2];return q.jsx("section",{id:"explore",className:"section explore",children:q.jsxs("div",{className:"container",children:[q.jsx("p",{className:"section-kicker",children:jo.kicker}),q.jsx("h2",{className:"section-title explore__title",children:jo.title}),q.jsxs("div",{className:"explore__grid",children:[q.jsxs("article",{id:"explore-agents",className:"explore-card explore-card--major",children:[q.jsxs("header",{className:"explore-card__header",children:[q.jsx("h3",{className:"explore-card__title",children:r.title}),q.jsx("p",{className:"explore-card__verbs",children:r.verbs.join(" · ").toUpperCase()})]}),q.jsx("ul",{className:"explore-roster",children:r.agents.map(s=>q.jsxs("li",{className:"explore-roster__row",children:[q.jsxs("div",{className:"explore-roster__top",children:[q.jsx("span",{className:"explore-roster__name",children:s.name}),q.jsx("span",{className:`terminal-value ${s.positive?"terminal-long":"terminal-short"}`,children:s.roi})]}),q.jsxs("div",{className:"explore-roster__proof",children:[q.jsx(Ad,{type:"verified"}),q.jsx(Ad,{type:"riskScore",value:s.risk}),q.jsx(Ad,{type:"receipt"}),q.jsxs("span",{className:"terminal-value explore-roster__sharpe",children:["Sharpe ",s.sharpe]})]})]},s.name))})]}),q.jsxs("article",{className:"explore-card explore-card--major",children:[q.jsxs("header",{className:"explore-card__header",children:[q.jsx("h3",{className:"explore-card__title",children:e.title}),q.jsx("p",{className:"explore-card__verbs",children:e.verbs.join(" · ").toUpperCase()})]}),q.jsx("p",{className:"explore-card__blurb",children:e.blurb}),q.jsx("ul",{className:"explore-sample",children:e.sample.map(s=>q.jsxs("li",{children:[q.jsx("span",{className:"terminal-label",children:s.label}),q.jsx("span",{className:`terminal-value ${s.positive?"terminal-long":""}`,children:s.value})]},s.label))})]}),q.jsxs("article",{id:"explore-buckets",className:"explore-card explore-card--major",children:[q.jsxs("header",{className:"explore-card__header",children:[q.jsx("h3",{className:"explore-card__title",children:i.title}),q.jsx("p",{className:"explore-card__verbs",children:i.verbs.join(" · ").toUpperCase()})]}),q.jsx("p",{className:"explore-card__blurb",children:i.blurb}),q.jsx("ul",{className:"explore-sample",children:i.sample.map(s=>q.jsxs("li",{children:[q.jsx("span",{className:"terminal-label",children:s.label}),q.jsx("span",{className:"terminal-value explore-sample__status",children:s.value})]},s.label))})]})]})]})})}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const np="185",CM=0,p_=1,wM=2,Qc=1,DM=2,al=3,Oa=0,ii=1,Ji=2,Ua=0,Qr=1,uh=2,m_=3,g_=4,UM=5,Ys=100,NM=101,LM=102,OM=103,PM=104,IM=200,FM=201,BM=202,zM=203,fh=204,dh=205,HM=206,GM=207,VM=208,kM=209,XM=210,WM=211,qM=212,YM=213,ZM=214,hh=0,ph=1,mh=2,eo=3,gh=4,_h=5,vh=6,xh=7,Mv=0,KM=1,QM=2,na=0,yv=1,Ev=2,bv=3,Tv=4,Av=5,Rv=6,Cv=7,wv=300,js=301,to=302,Rd=303,Cd=304,uu=306,Sh=1e3,Hi=1001,Mh=1002,In=1003,jM=1004,Rc=1005,yn=1006,wd=1007,xs=1008,Ri=1009,Dv=1010,Uv=1011,fl=1012,ip=1013,sa=1014,$i=1015,Pa=1016,ap=1017,sp=1018,dl=1020,Nv=35902,Lv=35899,Ov=1021,Pv=1022,Gi=1023,Ia=1026,Ks=1027,Iv=1028,rp=1029,Js=1030,op=1031,lp=1033,jc=33776,Jc=33777,$c=33778,eu=33779,yh=35840,Eh=35841,bh=35842,Th=35843,Ah=36196,Rh=37492,Ch=37496,wh=37488,Dh=37489,nu=37490,Uh=37491,Nh=37808,Lh=37809,Oh=37810,Ph=37811,Ih=37812,Fh=37813,Bh=37814,zh=37815,Hh=37816,Gh=37817,Vh=37818,kh=37819,Xh=37820,Wh=37821,qh=36492,Yh=36494,Zh=36495,Kh=36283,Qh=36284,iu=36285,jh=36286,JM=3200,__=0,$M=1,vs="",Zn="srgb",au="srgb-linear",su="linear",qt="srgb",Or=7680,v_=519,ey=512,ty=513,ny=514,cp=515,iy=516,ay=517,up=518,sy=519,x_=35044,S_="300 es",ea=2e3,ru=2001;function ry(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function ou(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function oy(){const r=ou("canvas");return r.style.display="block",r}const M_={};function y_(...r){const e="THREE."+r.shift();console.log(e,...r)}function Fv(r){const e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){const i=r[1];i&&i.isStackTrace?r[0]+=" "+i.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function st(...r){r=Fv(r);const e="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.warn(i.getError(e)):console.warn(e,...r)}}function Nt(...r){r=Fv(r);const e="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.error(i.getError(e)):console.error(e,...r)}}function jr(...r){const e=r.join(" ");e in M_||(M_[e]=!0,st(...r))}function ly(r,e,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}const cy={[hh]:ph,[mh]:vh,[gh]:xh,[eo]:_h,[ph]:hh,[vh]:mh,[xh]:gh,[_h]:eo};class er{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(i)===-1&&s[e].push(i)}hasEventListener(e,i){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(i)!==-1}removeEventListener(e,i){const s=this._listeners;if(s===void 0)return;const l=s[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const s=i[e.type];if(s!==void 0){e.target=this;const l=s.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,e);e.target=null}}}const Hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let E_=1234567;const ol=Math.PI/180,hl=180/Math.PI;function ao(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Hn[r&255]+Hn[r>>8&255]+Hn[r>>16&255]+Hn[r>>24&255]+"-"+Hn[e&255]+Hn[e>>8&255]+"-"+Hn[e>>16&15|64]+Hn[e>>24&255]+"-"+Hn[i&63|128]+Hn[i>>8&255]+"-"+Hn[i>>16&255]+Hn[i>>24&255]+Hn[s&255]+Hn[s>>8&255]+Hn[s>>16&255]+Hn[s>>24&255]).toLowerCase()}function xt(r,e,i){return Math.max(e,Math.min(i,r))}function fp(r,e){return(r%e+e)%e}function uy(r,e,i,s,l){return s+(r-e)*(l-s)/(i-e)}function fy(r,e,i){return r!==e?(i-r)/(e-r):0}function ll(r,e,i){return(1-i)*r+i*e}function dy(r,e,i,s){return ll(r,e,1-Math.exp(-i*s))}function hy(r,e=1){return e-Math.abs(fp(r,e*2)-e)}function py(r,e,i){return r<=e?0:r>=i?1:(r=(r-e)/(i-e),r*r*(3-2*r))}function my(r,e,i){return r<=e?0:r>=i?1:(r=(r-e)/(i-e),r*r*r*(r*(r*6-15)+10))}function gy(r,e){return r+Math.floor(Math.random()*(e-r+1))}function _y(r,e){return r+Math.random()*(e-r)}function vy(r){return r*(.5-Math.random())}function xy(r){r!==void 0&&(E_=r);let e=E_+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Sy(r){return r*ol}function My(r){return r*hl}function yy(r){return(r&r-1)===0&&r!==0}function Ey(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function by(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Ty(r,e,i,s,l){const c=Math.cos,f=Math.sin,h=c(i/2),m=f(i/2),p=c((e+s)/2),_=f((e+s)/2),x=c((e-s)/2),g=f((e-s)/2),M=c((s-e)/2),b=f((s-e)/2);switch(l){case"XYX":r.set(h*_,m*x,m*g,h*p);break;case"YZY":r.set(m*g,h*_,m*x,h*p);break;case"ZXZ":r.set(m*x,m*g,h*_,h*p);break;case"XZX":r.set(h*_,m*b,m*M,h*p);break;case"YXY":r.set(m*M,h*_,m*b,h*p);break;case"ZYZ":r.set(m*b,m*M,h*_,h*p);break;default:st("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function Zr(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Wn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Un={DEG2RAD:ol,RAD2DEG:hl,generateUUID:ao,clamp:xt,euclideanModulo:fp,mapLinear:uy,inverseLerp:fy,lerp:ll,damp:dy,pingpong:hy,smoothstep:py,smootherstep:my,randInt:gy,randFloat:_y,randFloatSpread:vy,seededRandom:xy,degToRad:Sy,radToDeg:My,isPowerOfTwo:yy,ceilPowerOfTwo:Ey,floorPowerOfTwo:by,setQuaternionFromProperEuler:Ty,normalize:Wn,denormalize:Zr},xp=class xp{constructor(e=0,i=0){this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,s=this.y,l=e.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=xt(this.x,e.x,i.x),this.y=xt(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=xt(this.x,e,i),this.y=xt(this.y,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(xt(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(xt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y;return i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-e.x,f=this.y-e.y;return this.x=c*s-f*l+e.x,this.y=c*l+f*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};xp.prototype.isVector2=!0;let Ft=xp;class so{constructor(e=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=s,this._w=l}static slerpFlat(e,i,s,l,c,f,h){let m=s[l+0],p=s[l+1],_=s[l+2],x=s[l+3],g=c[f+0],M=c[f+1],b=c[f+2],w=c[f+3];if(x!==w||m!==g||p!==M||_!==b){let y=m*g+p*M+_*b+x*w;y<0&&(g=-g,M=-M,b=-b,w=-w,y=-y);let S=1-h;if(y<.9995){const I=Math.acos(y),B=Math.sin(I);S=Math.sin(S*I)/B,h=Math.sin(h*I)/B,m=m*S+g*h,p=p*S+M*h,_=_*S+b*h,x=x*S+w*h}else{m=m*S+g*h,p=p*S+M*h,_=_*S+b*h,x=x*S+w*h;const I=1/Math.sqrt(m*m+p*p+_*_+x*x);m*=I,p*=I,_*=I,x*=I}}e[i]=m,e[i+1]=p,e[i+2]=_,e[i+3]=x}static multiplyQuaternionsFlat(e,i,s,l,c,f){const h=s[l],m=s[l+1],p=s[l+2],_=s[l+3],x=c[f],g=c[f+1],M=c[f+2],b=c[f+3];return e[i]=h*b+_*x+m*M-p*g,e[i+1]=m*b+_*g+p*x-h*M,e[i+2]=p*b+_*M+h*g-m*x,e[i+3]=_*b-h*x-m*g-p*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,s,l){return this._x=e,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const s=e._x,l=e._y,c=e._z,f=e._order,h=Math.cos,m=Math.sin,p=h(s/2),_=h(l/2),x=h(c/2),g=m(s/2),M=m(l/2),b=m(c/2);switch(f){case"XYZ":this._x=g*_*x+p*M*b,this._y=p*M*x-g*_*b,this._z=p*_*b+g*M*x,this._w=p*_*x-g*M*b;break;case"YXZ":this._x=g*_*x+p*M*b,this._y=p*M*x-g*_*b,this._z=p*_*b-g*M*x,this._w=p*_*x+g*M*b;break;case"ZXY":this._x=g*_*x-p*M*b,this._y=p*M*x+g*_*b,this._z=p*_*b+g*M*x,this._w=p*_*x-g*M*b;break;case"ZYX":this._x=g*_*x-p*M*b,this._y=p*M*x+g*_*b,this._z=p*_*b-g*M*x,this._w=p*_*x+g*M*b;break;case"YZX":this._x=g*_*x+p*M*b,this._y=p*M*x+g*_*b,this._z=p*_*b-g*M*x,this._w=p*_*x-g*M*b;break;case"XZY":this._x=g*_*x-p*M*b,this._y=p*M*x-g*_*b,this._z=p*_*b+g*M*x,this._w=p*_*x+g*M*b;break;default:st("Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const s=i/2,l=Math.sin(s);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,s=i[0],l=i[4],c=i[8],f=i[1],h=i[5],m=i[9],p=i[2],_=i[6],x=i[10],g=s+h+x;if(g>0){const M=.5/Math.sqrt(g+1);this._w=.25/M,this._x=(_-m)*M,this._y=(c-p)*M,this._z=(f-l)*M}else if(s>h&&s>x){const M=2*Math.sqrt(1+s-h-x);this._w=(_-m)/M,this._x=.25*M,this._y=(l+f)/M,this._z=(c+p)/M}else if(h>x){const M=2*Math.sqrt(1+h-s-x);this._w=(c-p)/M,this._x=(l+f)/M,this._y=.25*M,this._z=(m+_)/M}else{const M=2*Math.sqrt(1+x-s-h);this._w=(f-l)/M,this._x=(c+p)/M,this._y=(m+_)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let s=e.dot(i)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(xt(this.dot(e),-1,1)))}rotateTowards(e,i){const s=this.angleTo(e);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const s=e._x,l=e._y,c=e._z,f=e._w,h=i._x,m=i._y,p=i._z,_=i._w;return this._x=s*_+f*h+l*p-c*m,this._y=l*_+f*m+c*h-s*p,this._z=c*_+f*p+s*m-l*h,this._w=f*_-s*h-l*m-c*p,this._onChangeCallback(),this}slerp(e,i){let s=e._x,l=e._y,c=e._z,f=e._w,h=this.dot(e);h<0&&(s=-s,l=-l,c=-c,f=-f,h=-h);let m=1-i;if(h<.9995){const p=Math.acos(h),_=Math.sin(p);m=Math.sin(m*p)/_,i=Math.sin(i*p)/_,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this.normalize();return this}slerpQuaternions(e,i,s){return this.copy(e).slerp(i,s)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Sp=class Sp{constructor(e=0,i=0,s=0){this.x=e,this.y=i,this.z=s}set(e,i,s){return s===void 0&&(s=this.z),this.x=e,this.y=i,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(b_.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(b_.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=e.elements,f=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*f,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*f,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*f,this}applyQuaternion(e){const i=this.x,s=this.y,l=this.z,c=e.x,f=e.y,h=e.z,m=e.w,p=2*(f*l-h*s),_=2*(h*i-c*l),x=2*(c*s-f*i);return this.x=i+m*p+f*x-h*_,this.y=s+m*_+h*p-c*x,this.z=l+m*x+c*_-f*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=xt(this.x,e.x,i.x),this.y=xt(this.y,e.y,i.y),this.z=xt(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=xt(this.x,e,i),this.y=xt(this.y,e,i),this.z=xt(this.z,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(xt(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const s=e.x,l=e.y,c=e.z,f=i.x,h=i.y,m=i.z;return this.x=l*m-c*h,this.y=c*f-s*m,this.z=s*h-l*f,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const s=e.dot(this)/i;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return Dd.copy(this).projectOnVector(e),this.sub(Dd)}reflect(e){return this.sub(Dd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(xt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y,l=this.z-e.z;return i*i+s*s+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,s){const l=Math.sin(i)*e;return this.x=l*Math.sin(s),this.y=Math.cos(i)*e,this.z=l*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,s){return this.x=e*Math.sin(i),this.y=s,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(e),this.y=i,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Sp.prototype.isVector3=!0;let $=Sp;const Dd=new $,b_=new so,Mp=class Mp{constructor(e,i,s,l,c,f,h,m,p){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,f,h,m,p)}set(e,i,s,l,c,f,h,m,p){const _=this.elements;return _[0]=e,_[1]=l,_[2]=h,_[3]=i,_[4]=c,_[5]=m,_[6]=s,_[7]=f,_[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(e,i,s){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,f=s[0],h=s[3],m=s[6],p=s[1],_=s[4],x=s[7],g=s[2],M=s[5],b=s[8],w=l[0],y=l[3],S=l[6],I=l[1],B=l[4],C=l[7],O=l[2],N=l[5],P=l[8];return c[0]=f*w+h*I+m*O,c[3]=f*y+h*B+m*N,c[6]=f*S+h*C+m*P,c[1]=p*w+_*I+x*O,c[4]=p*y+_*B+x*N,c[7]=p*S+_*C+x*P,c[2]=g*w+M*I+b*O,c[5]=g*y+M*B+b*N,c[8]=g*S+M*C+b*P,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],f=e[4],h=e[5],m=e[6],p=e[7],_=e[8];return i*f*_-i*h*p-s*c*_+s*h*m+l*c*p-l*f*m}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],f=e[4],h=e[5],m=e[6],p=e[7],_=e[8],x=_*f-h*p,g=h*m-_*c,M=p*c-f*m,b=i*x+s*g+l*M;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/b;return e[0]=x*w,e[1]=(l*p-_*s)*w,e[2]=(h*s-l*f)*w,e[3]=g*w,e[4]=(_*i-l*m)*w,e[5]=(l*c-h*i)*w,e[6]=M*w,e[7]=(s*m-p*i)*w,e[8]=(f*i-s*c)*w,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,s,l,c,f,h){const m=Math.cos(c),p=Math.sin(c);return this.set(s*m,s*p,-s*(m*f+p*h)+f+e,-l*p,l*m,-l*(-p*f+m*h)+h+i,0,0,1),this}scale(e,i){return jr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ud.makeScale(e,i)),this}rotate(e){return jr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ud.makeRotation(-e)),this}translate(e,i){return jr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ud.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<9;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Mp.prototype.isMatrix3=!0;let lt=Mp;const Ud=new lt,T_=new lt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),A_=new lt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ay(){const r={enabled:!0,workingColorSpace:au,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===qt&&(l.r=Na(l.r),l.g=Na(l.g),l.b=Na(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===qt&&(l.r=Jr(l.r),l.g=Jr(l.g),l.b=Jr(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===vs?su:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return jr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return jr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[au]:{primaries:e,whitePoint:s,transfer:su,toXYZ:T_,fromXYZ:A_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Zn},outputColorSpaceConfig:{drawingBufferColorSpace:Zn}},[Zn]:{primaries:e,whitePoint:s,transfer:qt,toXYZ:T_,fromXYZ:A_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Zn}}}),r}const Rt=Ay();function Na(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Jr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Pr;class Ry{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{Pr===void 0&&(Pr=ou("canvas")),Pr.width=e.width,Pr.height=e.height;const l=Pr.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),s=Pr}return s.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=ou("canvas");i.width=e.width,i.height=e.height;const s=i.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const l=s.getImageData(0,0,e.width,e.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=Na(c[f]/255)*255;return s.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(Na(i[s]/255)*255):i[s]=Na(i[s]);return{data:i,width:e.width,height:e.height}}else return st("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Cy=0;class dp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Cy++}),this.uuid=ao(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayWidth,i.displayHeight,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,h=l.length;f<h;f++)l[f].isDataTexture?c.push(Nd(l[f].image)):c.push(Nd(l[f]))}else c=Nd(l);s.url=c}return i||(e.images[this.uuid]=s),s}}function Nd(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Ry.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(st("Texture: Unable to serialize Texture."),{})}let wy=0;const Ld=new $;class Vn extends er{constructor(e=Vn.DEFAULT_IMAGE,i=Vn.DEFAULT_MAPPING,s=Hi,l=Hi,c=yn,f=xs,h=Gi,m=Ri,p=Vn.DEFAULT_ANISOTROPY,_=vs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:wy++}),this.uuid=ao(),this.name="",this.source=new dp(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new Ft(0,0),this.repeat=new Ft(1,1),this.center=new Ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new lt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ld).x}get height(){return this.source.getSize(Ld).y}get depth(){return this.source.getSize(Ld).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const s=e[i];if(s===void 0){st(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){st(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==wv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Sh:e.x=e.x-Math.floor(e.x);break;case Hi:e.x=e.x<0?0:1;break;case Mh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Sh:e.y=e.y-Math.floor(e.y);break;case Hi:e.y=e.y<0?0:1;break;case Mh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Vn.DEFAULT_IMAGE=null;Vn.DEFAULT_MAPPING=wv;Vn.DEFAULT_ANISOTROPY=1;const yp=class yp{constructor(e=0,i=0,s=0,l=1){this.x=e,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,s,l){return this.x=e,this.y=i,this.z=s,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=this.w,f=e.elements;return this.x=f[0]*i+f[4]*s+f[8]*l+f[12]*c,this.y=f[1]*i+f[5]*s+f[9]*l+f[13]*c,this.z=f[2]*i+f[6]*s+f[10]*l+f[14]*c,this.w=f[3]*i+f[7]*s+f[11]*l+f[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,s,l,c;const m=e.elements,p=m[0],_=m[4],x=m[8],g=m[1],M=m[5],b=m[9],w=m[2],y=m[6],S=m[10];if(Math.abs(_-g)<.01&&Math.abs(x-w)<.01&&Math.abs(b-y)<.01){if(Math.abs(_+g)<.1&&Math.abs(x+w)<.1&&Math.abs(b+y)<.1&&Math.abs(p+M+S-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const B=(p+1)/2,C=(M+1)/2,O=(S+1)/2,N=(_+g)/4,P=(x+w)/4,T=(b+y)/4;return B>C&&B>O?B<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(B),l=N/s,c=P/s):C>O?C<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(C),s=N/l,c=T/l):O<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(O),s=P/c,l=T/c),this.set(s,l,c,i),this}let I=Math.sqrt((y-b)*(y-b)+(x-w)*(x-w)+(g-_)*(g-_));return Math.abs(I)<.001&&(I=1),this.x=(y-b)/I,this.y=(x-w)/I,this.z=(g-_)/I,this.w=Math.acos((p+M+S-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=xt(this.x,e.x,i.x),this.y=xt(this.y,e.y,i.y),this.z=xt(this.z,e.z,i.z),this.w=xt(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=xt(this.x,e,i),this.y=xt(this.y,e,i),this.z=xt(this.z,e,i),this.w=xt(this.w,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(xt(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this.w=e.w+(i.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};yp.prototype.isVector4=!0;let cn=yp;class Dy extends er{constructor(e=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:yn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},s),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=s.depth,this.scissor=new cn(0,0,e,i),this.scissorTest=!1,this.viewport=new cn(0,0,e,i),this.textures=[];const l={width:e,height:i,depth:s.depth},c=new Vn(l),f=s.count;for(let h=0;h<f;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview,this.useArrayDepthTexture=s.useArrayDepthTexture}_setTextureOptions(e={}){const i={minFilter:yn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,s=1){if(this.width!==e||this.height!==i||this.depth!==s){this.width=e,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new dp(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ia extends Dy{constructor(e=1,i=1,s={}){super(e,i,s),this.isWebGLRenderTarget=!0}}class Bv extends Vn{constructor(e=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=In,this.minFilter=In,this.wrapR=Hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Uy extends Vn{constructor(e=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=In,this.minFilter=In,this.wrapR=Hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const cu=class cu{constructor(e,i,s,l,c,f,h,m,p,_,x,g,M,b,w,y){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,f,h,m,p,_,x,g,M,b,w,y)}set(e,i,s,l,c,f,h,m,p,_,x,g,M,b,w,y){const S=this.elements;return S[0]=e,S[4]=i,S[8]=s,S[12]=l,S[1]=c,S[5]=f,S[9]=h,S[13]=m,S[2]=p,S[6]=_,S[10]=x,S[14]=g,S[3]=M,S[7]=b,S[11]=w,S[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new cu().fromArray(this.elements)}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(e){const i=this.elements,s=e.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,s){return this.determinantAffine()===0?(e.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(e,i,s){return this.set(e.x,i.x,s.x,0,e.y,i.y,s.y,0,e.z,i.z,s.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const i=this.elements,s=e.elements,l=1/Ir.setFromMatrixColumn(e,0).length(),c=1/Ir.setFromMatrixColumn(e,1).length(),f=1/Ir.setFromMatrixColumn(e,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*f,i[9]=s[9]*f,i[10]=s[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,s=e.x,l=e.y,c=e.z,f=Math.cos(s),h=Math.sin(s),m=Math.cos(l),p=Math.sin(l),_=Math.cos(c),x=Math.sin(c);if(e.order==="XYZ"){const g=f*_,M=f*x,b=h*_,w=h*x;i[0]=m*_,i[4]=-m*x,i[8]=p,i[1]=M+b*p,i[5]=g-w*p,i[9]=-h*m,i[2]=w-g*p,i[6]=b+M*p,i[10]=f*m}else if(e.order==="YXZ"){const g=m*_,M=m*x,b=p*_,w=p*x;i[0]=g+w*h,i[4]=b*h-M,i[8]=f*p,i[1]=f*x,i[5]=f*_,i[9]=-h,i[2]=M*h-b,i[6]=w+g*h,i[10]=f*m}else if(e.order==="ZXY"){const g=m*_,M=m*x,b=p*_,w=p*x;i[0]=g-w*h,i[4]=-f*x,i[8]=b+M*h,i[1]=M+b*h,i[5]=f*_,i[9]=w-g*h,i[2]=-f*p,i[6]=h,i[10]=f*m}else if(e.order==="ZYX"){const g=f*_,M=f*x,b=h*_,w=h*x;i[0]=m*_,i[4]=b*p-M,i[8]=g*p+w,i[1]=m*x,i[5]=w*p+g,i[9]=M*p-b,i[2]=-p,i[6]=h*m,i[10]=f*m}else if(e.order==="YZX"){const g=f*m,M=f*p,b=h*m,w=h*p;i[0]=m*_,i[4]=w-g*x,i[8]=b*x+M,i[1]=x,i[5]=f*_,i[9]=-h*_,i[2]=-p*_,i[6]=M*x+b,i[10]=g-w*x}else if(e.order==="XZY"){const g=f*m,M=f*p,b=h*m,w=h*p;i[0]=m*_,i[4]=-x,i[8]=p*_,i[1]=g*x+w,i[5]=f*_,i[9]=M*x-b,i[2]=b*x-M,i[6]=h*_,i[10]=w*x+g}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ny,e,Ly)}lookAt(e,i,s){const l=this.elements;return pi.subVectors(e,i),pi.lengthSq()===0&&(pi.z=1),pi.normalize(),ds.crossVectors(s,pi),ds.lengthSq()===0&&(Math.abs(s.z)===1?pi.x+=1e-4:pi.z+=1e-4,pi.normalize(),ds.crossVectors(s,pi)),ds.normalize(),Cc.crossVectors(pi,ds),l[0]=ds.x,l[4]=Cc.x,l[8]=pi.x,l[1]=ds.y,l[5]=Cc.y,l[9]=pi.y,l[2]=ds.z,l[6]=Cc.z,l[10]=pi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,f=s[0],h=s[4],m=s[8],p=s[12],_=s[1],x=s[5],g=s[9],M=s[13],b=s[2],w=s[6],y=s[10],S=s[14],I=s[3],B=s[7],C=s[11],O=s[15],N=l[0],P=l[4],T=l[8],L=l[12],Y=l[1],G=l[5],j=l[9],pe=l[13],de=l[2],J=l[6],F=l[10],H=l[14],ee=l[3],_e=l[7],be=l[11],U=l[15];return c[0]=f*N+h*Y+m*de+p*ee,c[4]=f*P+h*G+m*J+p*_e,c[8]=f*T+h*j+m*F+p*be,c[12]=f*L+h*pe+m*H+p*U,c[1]=_*N+x*Y+g*de+M*ee,c[5]=_*P+x*G+g*J+M*_e,c[9]=_*T+x*j+g*F+M*be,c[13]=_*L+x*pe+g*H+M*U,c[2]=b*N+w*Y+y*de+S*ee,c[6]=b*P+w*G+y*J+S*_e,c[10]=b*T+w*j+y*F+S*be,c[14]=b*L+w*pe+y*H+S*U,c[3]=I*N+B*Y+C*de+O*ee,c[7]=I*P+B*G+C*J+O*_e,c[11]=I*T+B*j+C*F+O*be,c[15]=I*L+B*pe+C*H+O*U,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[4],l=e[8],c=e[12],f=e[1],h=e[5],m=e[9],p=e[13],_=e[2],x=e[6],g=e[10],M=e[14],b=e[3],w=e[7],y=e[11],S=e[15],I=m*M-p*g,B=h*M-p*x,C=h*g-m*x,O=f*M-p*_,N=f*g-m*_,P=f*x-h*_;return i*(w*I-y*B+S*C)-s*(b*I-y*O+S*N)+l*(b*B-w*O+S*P)-c*(b*C-w*N+y*P)}determinantAffine(){const e=this.elements,i=e[0],s=e[4],l=e[8],c=e[1],f=e[5],h=e[9],m=e[2],p=e[6],_=e[10];return i*(f*_-h*p)-s*(c*_-h*m)+l*(c*p-f*m)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,s){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=s),this}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],f=e[4],h=e[5],m=e[6],p=e[7],_=e[8],x=e[9],g=e[10],M=e[11],b=e[12],w=e[13],y=e[14],S=e[15],I=i*h-s*f,B=i*m-l*f,C=i*p-c*f,O=s*m-l*h,N=s*p-c*h,P=l*p-c*m,T=_*w-x*b,L=_*y-g*b,Y=_*S-M*b,G=x*y-g*w,j=x*S-M*w,pe=g*S-M*y,de=I*pe-B*j+C*G+O*Y-N*L+P*T;if(de===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const J=1/de;return e[0]=(h*pe-m*j+p*G)*J,e[1]=(l*j-s*pe-c*G)*J,e[2]=(w*P-y*N+S*O)*J,e[3]=(g*N-x*P-M*O)*J,e[4]=(m*Y-f*pe-p*L)*J,e[5]=(i*pe-l*Y+c*L)*J,e[6]=(y*C-b*P-S*B)*J,e[7]=(_*P-g*C+M*B)*J,e[8]=(f*j-h*Y+p*T)*J,e[9]=(s*Y-i*j-c*T)*J,e[10]=(b*N-w*C+S*I)*J,e[11]=(x*C-_*N-M*I)*J,e[12]=(h*L-f*G-m*T)*J,e[13]=(i*G-s*L+l*T)*J,e[14]=(w*B-b*O-y*I)*J,e[15]=(_*O-x*B+g*I)*J,this}scale(e){const i=this.elements,s=e.x,l=e.y,c=e.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(e,i,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,f=e.x,h=e.y,m=e.z,p=c*f,_=c*h;return this.set(p*f+s,p*h-l*m,p*m+l*h,0,p*h+l*m,_*h+s,_*m-l*f,0,p*m-l*h,_*m+l*f,c*m*m+s,0,0,0,0,1),this}makeScale(e,i,s){return this.set(e,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,i,s,l,c,f){return this.set(1,s,c,0,e,1,f,0,i,l,1,0,0,0,0,1),this}compose(e,i,s){const l=this.elements,c=i._x,f=i._y,h=i._z,m=i._w,p=c+c,_=f+f,x=h+h,g=c*p,M=c*_,b=c*x,w=f*_,y=f*x,S=h*x,I=m*p,B=m*_,C=m*x,O=s.x,N=s.y,P=s.z;return l[0]=(1-(w+S))*O,l[1]=(M+C)*O,l[2]=(b-B)*O,l[3]=0,l[4]=(M-C)*N,l[5]=(1-(g+S))*N,l[6]=(y+I)*N,l[7]=0,l[8]=(b+B)*P,l[9]=(y-I)*P,l[10]=(1-(g+w))*P,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,s){const l=this.elements;e.x=l[12],e.y=l[13],e.z=l[14];const c=this.determinantAffine();if(c===0)return s.set(1,1,1),i.identity(),this;let f=Ir.set(l[0],l[1],l[2]).length();const h=Ir.set(l[4],l[5],l[6]).length(),m=Ir.set(l[8],l[9],l[10]).length();c<0&&(f=-f),Ii.copy(this);const p=1/f,_=1/h,x=1/m;return Ii.elements[0]*=p,Ii.elements[1]*=p,Ii.elements[2]*=p,Ii.elements[4]*=_,Ii.elements[5]*=_,Ii.elements[6]*=_,Ii.elements[8]*=x,Ii.elements[9]*=x,Ii.elements[10]*=x,i.setFromRotationMatrix(Ii),s.x=f,s.y=h,s.z=m,this}makePerspective(e,i,s,l,c,f,h=ea,m=!1){const p=this.elements,_=2*c/(i-e),x=2*c/(s-l),g=(i+e)/(i-e),M=(s+l)/(s-l);let b,w;if(m)b=c/(f-c),w=f*c/(f-c);else if(h===ea)b=-(f+c)/(f-c),w=-2*f*c/(f-c);else if(h===ru)b=-f/(f-c),w=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=_,p[4]=0,p[8]=g,p[12]=0,p[1]=0,p[5]=x,p[9]=M,p[13]=0,p[2]=0,p[6]=0,p[10]=b,p[14]=w,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,s,l,c,f,h=ea,m=!1){const p=this.elements,_=2/(i-e),x=2/(s-l),g=-(i+e)/(i-e),M=-(s+l)/(s-l);let b,w;if(m)b=1/(f-c),w=f/(f-c);else if(h===ea)b=-2/(f-c),w=-(f+c)/(f-c);else if(h===ru)b=-1/(f-c),w=-c/(f-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=_,p[4]=0,p[8]=0,p[12]=g,p[1]=0,p[5]=x,p[9]=0,p[13]=M,p[2]=0,p[6]=0,p[10]=b,p[14]=w,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<16;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e[i+9]=s[9],e[i+10]=s[10],e[i+11]=s[11],e[i+12]=s[12],e[i+13]=s[13],e[i+14]=s[14],e[i+15]=s[15],e}};cu.prototype.isMatrix4=!0;let dn=cu;const Ir=new $,Ii=new dn,Ny=new $(0,0,0),Ly=new $(1,1,1),ds=new $,Cc=new $,pi=new $,R_=new dn,C_=new so;class $s{constructor(e=0,i=0,s=0,l=$s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,s,l=this._order){return this._x=e,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,s=!0){const l=e.elements,c=l[0],f=l[4],h=l[8],m=l[1],p=l[5],_=l[9],x=l[2],g=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(xt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-_,M),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(g,p),this._z=0);break;case"YXZ":this._x=Math.asin(-xt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(h,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-x,c),this._z=0);break;case"ZXY":this._x=Math.asin(xt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-x,M),this._z=Math.atan2(-f,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-xt(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(g,M),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-f,p));break;case"YZX":this._z=Math.asin(xt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-_,p),this._y=Math.atan2(-x,c)):(this._x=0,this._y=Math.atan2(h,M));break;case"XZY":this._z=Math.asin(-xt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(g,p),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-_,M),this._y=0);break;default:st("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,s){return R_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(R_,i,s)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return C_.setFromEuler(this),this.setFromQuaternion(C_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}$s.DEFAULT_ORDER="XYZ";class zv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Oy=0;const w_=new $,Fr=new so,Ta=new dn,wc=new $,Jo=new $,Py=new $,Iy=new so,D_=new $(1,0,0),U_=new $(0,1,0),N_=new $(0,0,1),L_={type:"added"},Fy={type:"removed"},Br={type:"childadded",child:null},Od={type:"childremoved",child:null};class gi extends er{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Oy++}),this.uuid=ao(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=gi.DEFAULT_UP.clone();const e=new $,i=new $s,s=new so,l=new $(1,1,1);function c(){s.setFromEuler(i,!1)}function f(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new dn},normalMatrix:{value:new lt}}),this.matrix=new dn,this.matrixWorld=new dn,this.matrixAutoUpdate=gi.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=gi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new zv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return Fr.setFromAxisAngle(e,i),this.quaternion.multiply(Fr),this}rotateOnWorldAxis(e,i){return Fr.setFromAxisAngle(e,i),this.quaternion.premultiply(Fr),this}rotateX(e){return this.rotateOnAxis(D_,e)}rotateY(e){return this.rotateOnAxis(U_,e)}rotateZ(e){return this.rotateOnAxis(N_,e)}translateOnAxis(e,i){return w_.copy(e).applyQuaternion(this.quaternion),this.position.add(w_.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(D_,e)}translateY(e){return this.translateOnAxis(U_,e)}translateZ(e){return this.translateOnAxis(N_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ta.copy(this.matrixWorld).invert())}lookAt(e,i,s){e.isVector3?wc.copy(e):wc.set(e,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Jo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ta.lookAt(Jo,wc,this.up):Ta.lookAt(wc,Jo,this.up),this.quaternion.setFromRotationMatrix(Ta),l&&(Ta.extractRotation(l.matrixWorld),Fr.setFromRotationMatrix(Ta),this.quaternion.premultiply(Fr.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(Nt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(L_),Br.child=e,this.dispatchEvent(Br),Br.child=null):Nt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(Fy),Od.child=e,this.dispatchEvent(Od),Od.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ta.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ta.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ta),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(L_),Br.child=e,this.dispatchEvent(Br),Br.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const f=this.children[s].getObjectByProperty(e,i);if(f!==void 0)return f}}getObjectsByProperty(e,i,s=[]){this[e]===i&&s.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(e,i,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Jo,e,Py),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Jo,Iy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const i=e.x,s=e.y,l=e.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*s-c[8]*l,c[13]+=s-c[1]*i-c[5]*s-c[9]*l,c[14]+=l-c[2]*i-c[6]*s-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(e)}updateWorldMatrix(e,i,s=!1){const l=this.parent;if(e===!0&&l!==null&&l.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||s)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,s=!0),i===!0){const c=this.children;for(let f=0,h=c.length;f<h;f++)c[f].updateWorldMatrix(!1,!0,s)}}toJSON(e){const i=e===void 0||typeof e=="string",s={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,_=m.length;p<_;p++){const x=m[p];c(e.shapes,x)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(c(e.materials,this.material[m]));l.material=h}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];l.animations.push(c(e.animations,m))}}if(i){const h=f(e.geometries),m=f(e.materials),p=f(e.textures),_=f(e.images),x=f(e.shapes),g=f(e.skeletons),M=f(e.animations),b=f(e.nodes);h.length>0&&(s.geometries=h),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),_.length>0&&(s.images=_),x.length>0&&(s.shapes=x),g.length>0&&(s.skeletons=g),M.length>0&&(s.animations=M),b.length>0&&(s.nodes=b)}return s.object=l,s;function f(h){const m=[];for(const p in h){const _=h[p];delete _.metadata,m.push(_)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let s=0;s<e.children.length;s++){const l=e.children[s];this.add(l.clone())}return this}}gi.DEFAULT_UP=new $(0,1,0);gi.DEFAULT_MATRIX_AUTO_UPDATE=!0;gi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class sl extends gi{constructor(){super(),this.isGroup=!0,this.type="Group"}}const By={type:"move"};class Pd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new sl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new sl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new sl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const s of e.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,s){let l=null,c=null,f=null;const h=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){f=!0;for(const w of e.hand.values()){const y=i.getJointPose(w,s),S=this._getHandJoint(p,w);y!==null&&(S.matrix.fromArray(y.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=y.radius),S.visible=y!==null}const _=p.joints["index-finger-tip"],x=p.joints["thumb-tip"],g=_.position.distanceTo(x.position),M=.02,b=.005;p.inputState.pinching&&g>M+b?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&g<=M-b&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1,m.eventsEnabled&&m.dispatchEvent({type:"gripUpdated",data:e,target:this})));h!==null&&(l=i.getPose(e.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(By)))}return h!==null&&(h.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=f!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const s=new sl;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[i.jointName]=s,e.add(s)}return e.joints[i.jointName]}}const Hv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hs={h:0,s:0,l:0},Dc={h:0,s:0,l:0};function Id(r,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(e-r)*6*i:i<1/2?e:i<2/3?r+(e-r)*6*(2/3-i):r}class Dt{constructor(e,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,s)}set(e,i,s){if(i===void 0&&s===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=Zn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Rt.colorSpaceToWorking(this,i),this}setRGB(e,i,s,l=Rt.workingColorSpace){return this.r=e,this.g=i,this.b=s,Rt.colorSpaceToWorking(this,l),this}setHSL(e,i,s,l=Rt.workingColorSpace){if(e=fp(e,1),i=xt(i,0,1),s=xt(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,f=2*s-c;this.r=Id(f,c,e+1/3),this.g=Id(f,c,e),this.b=Id(f,c,e-1/3)}return Rt.colorSpaceToWorking(this,l),this}setStyle(e,i=Zn){function s(c){c!==void 0&&parseFloat(c)<1&&st("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const f=l[1],h=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:st("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(c,16),i);st("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=Zn){const s=Hv[e.toLowerCase()];return s!==void 0?this.setHex(s,i):st("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Na(e.r),this.g=Na(e.g),this.b=Na(e.b),this}copyLinearToSRGB(e){return this.r=Jr(e.r),this.g=Jr(e.g),this.b=Jr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Zn){return Rt.workingToColorSpace(Gn.copy(this),e),Math.round(xt(Gn.r*255,0,255))*65536+Math.round(xt(Gn.g*255,0,255))*256+Math.round(xt(Gn.b*255,0,255))}getHexString(e=Zn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Rt.workingColorSpace){Rt.workingToColorSpace(Gn.copy(this),i);const s=Gn.r,l=Gn.g,c=Gn.b,f=Math.max(s,l,c),h=Math.min(s,l,c);let m,p;const _=(h+f)/2;if(h===f)m=0,p=0;else{const x=f-h;switch(p=_<=.5?x/(f+h):x/(2-f-h),f){case s:m=(l-c)/x+(l<c?6:0);break;case l:m=(c-s)/x+2;break;case c:m=(s-l)/x+4;break}m/=6}return e.h=m,e.s=p,e.l=_,e}getRGB(e,i=Rt.workingColorSpace){return Rt.workingToColorSpace(Gn.copy(this),i),e.r=Gn.r,e.g=Gn.g,e.b=Gn.b,e}getStyle(e=Zn){Rt.workingToColorSpace(Gn.copy(this),e);const i=Gn.r,s=Gn.g,l=Gn.b;return e!==Zn?`color(${e} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(e,i,s){return this.getHSL(hs),this.setHSL(hs.h+e,hs.s+i,hs.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,s){return this.r=e.r+(i.r-e.r)*s,this.g=e.g+(i.g-e.g)*s,this.b=e.b+(i.b-e.b)*s,this}lerpHSL(e,i){this.getHSL(hs),e.getHSL(Dc);const s=ll(hs.h,Dc.h,i),l=ll(hs.s,Dc.s,i),c=ll(hs.l,Dc.l,i);return this.setHSL(s,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,s=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Gn=new Dt;Dt.NAMES=Hv;class zy extends gi{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $s,this.environmentIntensity=1,this.environmentRotation=new $s,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Fi=new $,Aa=new $,Fd=new $,Ra=new $,zr=new $,Hr=new $,O_=new $,Bd=new $,zd=new $,Hd=new $,Gd=new cn,Vd=new cn,kd=new cn;class zi{constructor(e=new $,i=new $,s=new $){this.a=e,this.b=i,this.c=s}static getNormal(e,i,s,l){l.subVectors(s,i),Fi.subVectors(e,i),l.cross(Fi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,s,l,c){Fi.subVectors(l,i),Aa.subVectors(s,i),Fd.subVectors(e,i);const f=Fi.dot(Fi),h=Fi.dot(Aa),m=Fi.dot(Fd),p=Aa.dot(Aa),_=Aa.dot(Fd),x=f*p-h*h;if(x===0)return c.set(0,0,0),null;const g=1/x,M=(p*m-h*_)*g,b=(f*_-h*m)*g;return c.set(1-M-b,b,M)}static containsPoint(e,i,s,l){return this.getBarycoord(e,i,s,l,Ra)===null?!1:Ra.x>=0&&Ra.y>=0&&Ra.x+Ra.y<=1}static getInterpolation(e,i,s,l,c,f,h,m){return this.getBarycoord(e,i,s,l,Ra)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,Ra.x),m.addScaledVector(f,Ra.y),m.addScaledVector(h,Ra.z),m)}static getInterpolatedAttribute(e,i,s,l,c,f){return Gd.setScalar(0),Vd.setScalar(0),kd.setScalar(0),Gd.fromBufferAttribute(e,i),Vd.fromBufferAttribute(e,s),kd.fromBufferAttribute(e,l),f.setScalar(0),f.addScaledVector(Gd,c.x),f.addScaledVector(Vd,c.y),f.addScaledVector(kd,c.z),f}static isFrontFacing(e,i,s,l){return Fi.subVectors(s,i),Aa.subVectors(e,i),Fi.cross(Aa).dot(l)<0}set(e,i,s){return this.a.copy(e),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(e,i,s,l){return this.a.copy(e[i]),this.b.copy(e[s]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,s,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Fi.subVectors(this.c,this.b),Aa.subVectors(this.a,this.b),Fi.cross(Aa).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return zi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return zi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,s,l,c){return zi.getInterpolation(e,this.a,this.b,this.c,i,s,l,c)}containsPoint(e){return zi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return zi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const s=this.a,l=this.b,c=this.c;let f,h;zr.subVectors(l,s),Hr.subVectors(c,s),Bd.subVectors(e,s);const m=zr.dot(Bd),p=Hr.dot(Bd);if(m<=0&&p<=0)return i.copy(s);zd.subVectors(e,l);const _=zr.dot(zd),x=Hr.dot(zd);if(_>=0&&x<=_)return i.copy(l);const g=m*x-_*p;if(g<=0&&m>=0&&_<=0)return f=m/(m-_),i.copy(s).addScaledVector(zr,f);Hd.subVectors(e,c);const M=zr.dot(Hd),b=Hr.dot(Hd);if(b>=0&&M<=b)return i.copy(c);const w=M*p-m*b;if(w<=0&&p>=0&&b<=0)return h=p/(p-b),i.copy(s).addScaledVector(Hr,h);const y=_*b-M*x;if(y<=0&&x-_>=0&&M-b>=0)return O_.subVectors(c,l),h=(x-_)/(x-_+(M-b)),i.copy(l).addScaledVector(O_,h);const S=1/(y+w+g);return f=w*S,h=g*S,i.copy(s).addScaledVector(zr,f).addScaledVector(Hr,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class ml{constructor(e=new $(1/0,1/0,1/0),i=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i+=3)this.expandByPoint(Bi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,s=e.count;i<s;i++)this.expandByPoint(Bi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const s=Bi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let f=0,h=c.count;f<h;f++)e.isMesh===!0?e.getVertexPosition(f,Bi):Bi.fromBufferAttribute(c,f),Bi.applyMatrix4(e.matrixWorld),this.expandByPoint(Bi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Uc.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Uc.copy(s.boundingBox)),Uc.applyMatrix4(e.matrixWorld),this.union(Uc)}const l=e.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Bi),Bi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,s;return e.normal.x>0?(i=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),i<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter($o),Nc.subVectors(this.max,$o),Gr.subVectors(e.a,$o),Vr.subVectors(e.b,$o),kr.subVectors(e.c,$o),ps.subVectors(Vr,Gr),ms.subVectors(kr,Vr),Gs.subVectors(Gr,kr);let i=[0,-ps.z,ps.y,0,-ms.z,ms.y,0,-Gs.z,Gs.y,ps.z,0,-ps.x,ms.z,0,-ms.x,Gs.z,0,-Gs.x,-ps.y,ps.x,0,-ms.y,ms.x,0,-Gs.y,Gs.x,0];return!Xd(i,Gr,Vr,kr,Nc)||(i=[1,0,0,0,1,0,0,0,1],!Xd(i,Gr,Vr,kr,Nc))?!1:(Lc.crossVectors(ps,ms),i=[Lc.x,Lc.y,Lc.z],Xd(i,Gr,Vr,kr,Nc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Bi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Bi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ca[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ca[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ca[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ca[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ca[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ca[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ca[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ca[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ca),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ca=[new $,new $,new $,new $,new $,new $,new $,new $],Bi=new $,Uc=new ml,Gr=new $,Vr=new $,kr=new $,ps=new $,ms=new $,Gs=new $,$o=new $,Nc=new $,Lc=new $,Vs=new $;function Xd(r,e,i,s,l){for(let c=0,f=r.length-3;c<=f;c+=3){Vs.fromArray(r,c);const h=l.x*Math.abs(Vs.x)+l.y*Math.abs(Vs.y)+l.z*Math.abs(Vs.z),m=e.dot(Vs),p=i.dot(Vs),_=s.dot(Vs);if(Math.max(-Math.max(m,p,_),Math.min(m,p,_))>h)return!1}return!0}const Sn=new $,Oc=new Ft;let Hy=0;class aa extends er{constructor(e,i,s=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Hy++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=s,this.usage=x_,this.updateRanges=[],this.gpuType=$i,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,s){e*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[s+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)Oc.fromBufferAttribute(this,i),Oc.applyMatrix3(e),this.setXY(i,Oc.x,Oc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)Sn.fromBufferAttribute(this,i),Sn.applyMatrix3(e),this.setXYZ(i,Sn.x,Sn.y,Sn.z);return this}applyMatrix4(e){for(let i=0,s=this.count;i<s;i++)Sn.fromBufferAttribute(this,i),Sn.applyMatrix4(e),this.setXYZ(i,Sn.x,Sn.y,Sn.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)Sn.fromBufferAttribute(this,i),Sn.applyNormalMatrix(e),this.setXYZ(i,Sn.x,Sn.y,Sn.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)Sn.fromBufferAttribute(this,i),Sn.transformDirection(e),this.setXYZ(i,Sn.x,Sn.y,Sn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let s=this.array[e*this.itemSize+i];return this.normalized&&(s=Zr(s,this.array)),s}setComponent(e,i,s){return this.normalized&&(s=Wn(s,this.array)),this.array[e*this.itemSize+i]=s,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Zr(i,this.array)),i}setX(e,i){return this.normalized&&(i=Wn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Zr(i,this.array)),i}setY(e,i){return this.normalized&&(i=Wn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Zr(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Wn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Zr(i,this.array)),i}setW(e,i){return this.normalized&&(i=Wn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,s){return e*=this.itemSize,this.normalized&&(i=Wn(i,this.array),s=Wn(s,this.array)),this.array[e+0]=i,this.array[e+1]=s,this}setXYZ(e,i,s,l){return e*=this.itemSize,this.normalized&&(i=Wn(i,this.array),s=Wn(s,this.array),l=Wn(l,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this}setXYZW(e,i,s,l,c){return e*=this.itemSize,this.normalized&&(i=Wn(i,this.array),s=Wn(s,this.array),l=Wn(l,this.array),c=Wn(c,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==x_&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class Gv extends aa{constructor(e,i,s){super(new Uint16Array(e),i,s)}}class Vv extends aa{constructor(e,i,s){super(new Uint32Array(e),i,s)}}class Ci extends aa{constructor(e,i,s){super(new Float32Array(e),i,s)}}const Gy=new ml,el=new $,Wd=new $;class hp{constructor(e=new $,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const s=this.center;i!==void 0?s.copy(i):Gy.setFromPoints(e).getCenter(s);let l=0;for(let c=0,f=e.length;c<f;c++)l=Math.max(l,s.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const s=this.center.distanceToSquared(e);return i.copy(e),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;el.subVectors(e,this.center);const i=el.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(el,l/s),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Wd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(el.copy(e.center).add(Wd)),this.expandByPoint(el.copy(e.center).sub(Wd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Vy=0;const Ti=new dn,qd=new gi,Xr=new $,mi=new ml,tl=new ml,Dn=new $;class Di extends er{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Vy++}),this.uuid=ao(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ry(e)?Vv:Gv)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,s=0){this.groups.push({start:e,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new lt().getNormalMatrix(e);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Ti.makeRotationFromQuaternion(e),this.applyMatrix4(Ti),this}rotateX(e){return Ti.makeRotationX(e),this.applyMatrix4(Ti),this}rotateY(e){return Ti.makeRotationY(e),this.applyMatrix4(Ti),this}rotateZ(e){return Ti.makeRotationZ(e),this.applyMatrix4(Ti),this}translate(e,i,s){return Ti.makeTranslation(e,i,s),this.applyMatrix4(Ti),this}scale(e,i,s){return Ti.makeScale(e,i,s),this.applyMatrix4(Ti),this}lookAt(e){return qd.lookAt(e),qd.updateMatrix(),this.applyMatrix4(qd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xr).negate(),this.translate(Xr.x,Xr.y,Xr.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=e.length;l<c;l++){const f=e[l];s.push(f.x,f.y,f.z||0)}this.setAttribute("position",new Ci(s,3))}else{const s=Math.min(e.length,i.count);for(let l=0;l<s;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&st("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ml);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Nt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];mi.setFromBufferAttribute(c),this.morphTargetsRelative?(Dn.addVectors(this.boundingBox.min,mi.min),this.boundingBox.expandByPoint(Dn),Dn.addVectors(this.boundingBox.max,mi.max),this.boundingBox.expandByPoint(Dn)):(this.boundingBox.expandByPoint(mi.min),this.boundingBox.expandByPoint(mi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Nt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new hp);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Nt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(e){const s=this.boundingSphere.center;if(mi.setFromBufferAttribute(e),i)for(let c=0,f=i.length;c<f;c++){const h=i[c];tl.setFromBufferAttribute(h),this.morphTargetsRelative?(Dn.addVectors(mi.min,tl.min),mi.expandByPoint(Dn),Dn.addVectors(mi.max,tl.max),mi.expandByPoint(Dn)):(mi.expandByPoint(tl.min),mi.expandByPoint(tl.max))}mi.getCenter(s);let l=0;for(let c=0,f=e.count;c<f;c++)Dn.fromBufferAttribute(e,c),l=Math.max(l,s.distanceToSquared(Dn));if(i)for(let c=0,f=i.length;c<f;c++){const h=i[c],m=this.morphTargetsRelative;for(let p=0,_=h.count;p<_;p++)Dn.fromBufferAttribute(h,p),m&&(Xr.fromBufferAttribute(e,p),Dn.add(Xr)),l=Math.max(l,s.distanceToSquared(Dn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Nt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Nt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;let f=this.getAttribute("tangent");(f===void 0||f.count!==s.count)&&(f=new aa(new Float32Array(4*s.count),4),this.setAttribute("tangent",f));const h=[],m=[];for(let T=0;T<s.count;T++)h[T]=new $,m[T]=new $;const p=new $,_=new $,x=new $,g=new Ft,M=new Ft,b=new Ft,w=new $,y=new $;function S(T,L,Y){p.fromBufferAttribute(s,T),_.fromBufferAttribute(s,L),x.fromBufferAttribute(s,Y),g.fromBufferAttribute(c,T),M.fromBufferAttribute(c,L),b.fromBufferAttribute(c,Y),_.sub(p),x.sub(p),M.sub(g),b.sub(g);const G=1/(M.x*b.y-b.x*M.y);isFinite(G)&&(w.copy(_).multiplyScalar(b.y).addScaledVector(x,-M.y).multiplyScalar(G),y.copy(x).multiplyScalar(M.x).addScaledVector(_,-b.x).multiplyScalar(G),h[T].add(w),h[L].add(w),h[Y].add(w),m[T].add(y),m[L].add(y),m[Y].add(y))}let I=this.groups;I.length===0&&(I=[{start:0,count:e.count}]);for(let T=0,L=I.length;T<L;++T){const Y=I[T],G=Y.start,j=Y.count;for(let pe=G,de=G+j;pe<de;pe+=3)S(e.getX(pe+0),e.getX(pe+1),e.getX(pe+2))}const B=new $,C=new $,O=new $,N=new $;function P(T){O.fromBufferAttribute(l,T),N.copy(O);const L=h[T];B.copy(L),B.sub(O.multiplyScalar(O.dot(L))).normalize(),C.crossVectors(N,L);const G=C.dot(m[T])<0?-1:1;f.setXYZW(T,B.x,B.y,B.z,G)}for(let T=0,L=I.length;T<L;++T){const Y=I[T],G=Y.start,j=Y.count;for(let pe=G,de=G+j;pe<de;pe+=3)P(e.getX(pe+0)),P(e.getX(pe+1)),P(e.getX(pe+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0||s.count!==i.count)s=new aa(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let g=0,M=s.count;g<M;g++)s.setXYZ(g,0,0,0);const l=new $,c=new $,f=new $,h=new $,m=new $,p=new $,_=new $,x=new $;if(e)for(let g=0,M=e.count;g<M;g+=3){const b=e.getX(g+0),w=e.getX(g+1),y=e.getX(g+2);l.fromBufferAttribute(i,b),c.fromBufferAttribute(i,w),f.fromBufferAttribute(i,y),_.subVectors(f,c),x.subVectors(l,c),_.cross(x),h.fromBufferAttribute(s,b),m.fromBufferAttribute(s,w),p.fromBufferAttribute(s,y),h.add(_),m.add(_),p.add(_),s.setXYZ(b,h.x,h.y,h.z),s.setXYZ(w,m.x,m.y,m.z),s.setXYZ(y,p.x,p.y,p.z)}else for(let g=0,M=i.count;g<M;g+=3)l.fromBufferAttribute(i,g+0),c.fromBufferAttribute(i,g+1),f.fromBufferAttribute(i,g+2),_.subVectors(f,c),x.subVectors(l,c),_.cross(x),s.setXYZ(g+0,_.x,_.y,_.z),s.setXYZ(g+1,_.x,_.y,_.z),s.setXYZ(g+2,_.x,_.y,_.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,s=e.count;i<s;i++)Dn.fromBufferAttribute(e,i),Dn.normalize(),e.setXYZ(i,Dn.x,Dn.y,Dn.z)}toNonIndexed(){function e(h,m){const p=h.array,_=h.itemSize,x=h.normalized,g=new p.constructor(m.length*_);let M=0,b=0;for(let w=0,y=m.length;w<y;w++){h.isInterleavedBufferAttribute?M=m[w]*h.data.stride+h.offset:M=m[w]*_;for(let S=0;S<_;S++)g[b++]=p[M++]}return new aa(g,_,x)}if(this.index===null)return st("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Di,s=this.index.array,l=this.attributes;for(const h in l){const m=l[h],p=e(m,s);i.setAttribute(h,p)}const c=this.morphAttributes;for(const h in c){const m=[],p=c[h];for(let _=0,x=p.length;_<x;_++){const g=p[_],M=e(g,s);m.push(M)}i.morphAttributes[h]=m}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let h=0,m=f.length;h<m;h++){const p=f[h];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],_=[];for(let x=0,g=p.length;x<g;x++){const M=p[x];_.push(M.toJSON(e.data))}_.length>0&&(l[m]=_,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const l=e.attributes;for(const p in l){const _=l[p];this.setAttribute(p,_.clone(i))}const c=e.morphAttributes;for(const p in c){const _=[],x=c[p];for(let g=0,M=x.length;g<M;g++)_.push(x[g].clone(i));this.morphAttributes[p]=_}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let p=0,_=f.length;p<_;p++){const x=f[p];this.addGroup(x.start,x.count,x.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let ky=0;class fu extends er{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ky++}),this.uuid=ao(),this.name="",this.type="Material",this.blending=Qr,this.side=Oa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=fh,this.blendDst=dh,this.blendEquation=Ys,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Dt(0,0,0),this.blendAlpha=0,this.depthFunc=eo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=v_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Or,this.stencilZFail=Or,this.stencilZPass=Or,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const s=e[i];if(s===void 0){st(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){st(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector2&&s&&s.isVector2||l&&l.isEuler&&s&&s.isEuler||l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Qr&&(s.blending=this.blending),this.side!==Oa&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==fh&&(s.blendSrc=this.blendSrc),this.blendDst!==dh&&(s.blendDst=this.blendDst),this.blendEquation!==Ys&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==eo&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==v_&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Or&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Or&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Or&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const f=[];for(const h in c){const m=c[h];delete m.metadata,f.push(m)}return f}if(i){const c=l(e.textures),f=l(e.images);c.length>0&&(s.textures=c),f.length>0&&(s.images=f)}return s}fromJSON(e,i){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Dt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=i[e.map]||null),e.matcap!==void 0&&(this.matcap=i[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=i[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=i[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=i[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let s=e.normalScale;Array.isArray(s)===!1&&(s=[s,s]),this.normalScale=new Ft().fromArray(s)}return e.displacementMap!==void 0&&(this.displacementMap=i[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=i[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=i[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=i[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=i[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=i[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=i[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=i[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=i[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=i[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=i[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=i[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=i[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=i[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ft().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=i[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=i[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=i[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=i[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=i[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=i[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=i[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const wa=new $,Yd=new $,Pc=new $,gs=new $,Zd=new $,Ic=new $,Kd=new $;class Xy{constructor(e=new $,i=new $(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,wa)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=wa.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(wa.copy(this.origin).addScaledVector(this.direction,i),wa.distanceToSquared(e))}distanceSqToSegment(e,i,s,l){Yd.copy(e).add(i).multiplyScalar(.5),Pc.copy(i).sub(e).normalize(),gs.copy(this.origin).sub(Yd);const c=e.distanceTo(i)*.5,f=-this.direction.dot(Pc),h=gs.dot(this.direction),m=-gs.dot(Pc),p=gs.lengthSq(),_=Math.abs(1-f*f);let x,g,M,b;if(_>0)if(x=f*m-h,g=f*h-m,b=c*_,x>=0)if(g>=-b)if(g<=b){const w=1/_;x*=w,g*=w,M=x*(x+f*g+2*h)+g*(f*x+g+2*m)+p}else g=c,x=Math.max(0,-(f*g+h)),M=-x*x+g*(g+2*m)+p;else g=-c,x=Math.max(0,-(f*g+h)),M=-x*x+g*(g+2*m)+p;else g<=-b?(x=Math.max(0,-(-f*c+h)),g=x>0?-c:Math.min(Math.max(-c,-m),c),M=-x*x+g*(g+2*m)+p):g<=b?(x=0,g=Math.min(Math.max(-c,-m),c),M=g*(g+2*m)+p):(x=Math.max(0,-(f*c+h)),g=x>0?c:Math.min(Math.max(-c,-m),c),M=-x*x+g*(g+2*m)+p);else g=f>0?-c:c,x=Math.max(0,-(f*g+h)),M=-x*x+g*(g+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,x),l&&l.copy(Yd).addScaledVector(Pc,g),M}intersectSphere(e,i){wa.subVectors(e.center,this.origin);const s=wa.dot(this.direction),l=wa.dot(wa)-s*s,c=e.radius*e.radius;if(l>c)return null;const f=Math.sqrt(c-l),h=s-f,m=s+f;return m<0?null:h<0?this.at(m,i):this.at(h,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/i;return s>=0?s:null}intersectPlane(e,i){const s=this.distanceToPlane(e);return s===null?null:this.at(s,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let s,l,c,f,h,m;const p=1/this.direction.x,_=1/this.direction.y,x=1/this.direction.z,g=this.origin;return p>=0?(s=(e.min.x-g.x)*p,l=(e.max.x-g.x)*p):(s=(e.max.x-g.x)*p,l=(e.min.x-g.x)*p),_>=0?(c=(e.min.y-g.y)*_,f=(e.max.y-g.y)*_):(c=(e.max.y-g.y)*_,f=(e.min.y-g.y)*_),s>f||c>l||((c>s||isNaN(s))&&(s=c),(f<l||isNaN(l))&&(l=f),x>=0?(h=(e.min.z-g.z)*x,m=(e.max.z-g.z)*x):(h=(e.max.z-g.z)*x,m=(e.min.z-g.z)*x),s>m||h>l)||((h>s||s!==s)&&(s=h),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(e){return this.intersectBox(e,wa)!==null}intersectTriangle(e,i,s,l,c){Zd.subVectors(i,e),Ic.subVectors(s,e),Kd.crossVectors(Zd,Ic);let f=this.direction.dot(Kd),h;if(f>0){if(l)return null;h=1}else if(f<0)h=-1,f=-f;else return null;gs.subVectors(this.origin,e);const m=h*this.direction.dot(Ic.crossVectors(gs,Ic));if(m<0)return null;const p=h*this.direction.dot(Zd.cross(gs));if(p<0||m+p>f)return null;const _=-h*gs.dot(Kd);return _<0?null:this.at(_/f,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class lu extends fu{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $s,this.combine=Mv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const P_=new dn,ks=new Xy,Fc=new hp,I_=new $,Bc=new $,zc=new $,Hc=new $,Qd=new $,Gc=new $,F_=new $,Vc=new $;class wi extends gi{constructor(e=new Di,i=new lu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(e,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,f=s.morphTargetsRelative;i.fromBufferAttribute(l,e);const h=this.morphTargetInfluences;if(c&&h){Gc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const _=h[m],x=c[m];_!==0&&(Qd.fromBufferAttribute(x,e),f?Gc.addScaledVector(Qd,_):Gc.addScaledVector(Qd.sub(i),_))}i.add(Gc)}return i}raycast(e,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Fc.copy(s.boundingSphere),Fc.applyMatrix4(c),ks.copy(e.ray).recast(e.near),!(Fc.containsPoint(ks.origin)===!1&&(ks.intersectSphere(Fc,I_)===null||ks.origin.distanceToSquared(I_)>(e.far-e.near)**2))&&(P_.copy(c).invert(),ks.copy(e.ray).applyMatrix4(P_),!(s.boundingBox!==null&&ks.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,i,ks)))}_computeIntersections(e,i,s){let l;const c=this.geometry,f=this.material,h=c.index,m=c.attributes.position,p=c.attributes.uv,_=c.attributes.uv1,x=c.attributes.normal,g=c.groups,M=c.drawRange;if(h!==null)if(Array.isArray(f))for(let b=0,w=g.length;b<w;b++){const y=g[b],S=f[y.materialIndex],I=Math.max(y.start,M.start),B=Math.min(h.count,Math.min(y.start+y.count,M.start+M.count));for(let C=I,O=B;C<O;C+=3){const N=h.getX(C),P=h.getX(C+1),T=h.getX(C+2);l=kc(this,S,e,s,p,_,x,N,P,T),l&&(l.faceIndex=Math.floor(C/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const b=Math.max(0,M.start),w=Math.min(h.count,M.start+M.count);for(let y=b,S=w;y<S;y+=3){const I=h.getX(y),B=h.getX(y+1),C=h.getX(y+2);l=kc(this,f,e,s,p,_,x,I,B,C),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(f))for(let b=0,w=g.length;b<w;b++){const y=g[b],S=f[y.materialIndex],I=Math.max(y.start,M.start),B=Math.min(m.count,Math.min(y.start+y.count,M.start+M.count));for(let C=I,O=B;C<O;C+=3){const N=C,P=C+1,T=C+2;l=kc(this,S,e,s,p,_,x,N,P,T),l&&(l.faceIndex=Math.floor(C/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const b=Math.max(0,M.start),w=Math.min(m.count,M.start+M.count);for(let y=b,S=w;y<S;y+=3){const I=y,B=y+1,C=y+2;l=kc(this,f,e,s,p,_,x,I,B,C),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function Wy(r,e,i,s,l,c,f,h){let m;if(e.side===ii?m=s.intersectTriangle(f,c,l,!0,h):m=s.intersectTriangle(l,c,f,e.side===Oa,h),m===null)return null;Vc.copy(h),Vc.applyMatrix4(r.matrixWorld);const p=i.ray.origin.distanceTo(Vc);return p<i.near||p>i.far?null:{distance:p,point:Vc.clone(),object:r}}function kc(r,e,i,s,l,c,f,h,m,p){r.getVertexPosition(h,Bc),r.getVertexPosition(m,zc),r.getVertexPosition(p,Hc);const _=Wy(r,e,i,s,Bc,zc,Hc,F_);if(_){const x=new $;zi.getBarycoord(F_,Bc,zc,Hc,x),l&&(_.uv=zi.getInterpolatedAttribute(l,h,m,p,x,new Ft)),c&&(_.uv1=zi.getInterpolatedAttribute(c,h,m,p,x,new Ft)),f&&(_.normal=zi.getInterpolatedAttribute(f,h,m,p,x,new $),_.normal.dot(s.direction)>0&&_.normal.multiplyScalar(-1));const g={a:h,b:m,c:p,normal:new $,materialIndex:0};zi.getNormal(Bc,zc,Hc,g.normal),_.face=g,_.barycoord=x}return _}class qy extends Vn{constructor(e=null,i=1,s=1,l,c,f,h,m,p=In,_=In,x,g){super(null,f,h,m,p,_,l,c,x,g),this.isDataTexture=!0,this.image={data:e,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const jd=new $,Yy=new $,Zy=new lt;class qs{constructor(e=new $(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,s,l){return this.normal.set(e,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,s){const l=jd.subVectors(s,i).cross(Yy.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i,s=!0){const l=e.delta(jd),c=this.normal.dot(l);if(c===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const f=-(e.start.dot(this.normal)+this.constant)/c;return s===!0&&(f<0||f>1)?null:i.copy(e.start).addScaledVector(l,f)}intersectsLine(e){const i=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return i<0&&s>0||s<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const s=i||Zy.getNormalMatrix(e),l=this.coplanarPoint(jd).applyMatrix4(e),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Xs=new hp,Ky=new Ft(.5,.5),Xc=new $;class kv{constructor(e=new qs,i=new qs,s=new qs,l=new qs,c=new qs,f=new qs){this.planes=[e,i,s,l,c,f]}set(e,i,s,l,c,f){const h=this.planes;return h[0].copy(e),h[1].copy(i),h[2].copy(s),h[3].copy(l),h[4].copy(c),h[5].copy(f),this}copy(e){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,i=ea,s=!1){const l=this.planes,c=e.elements,f=c[0],h=c[1],m=c[2],p=c[3],_=c[4],x=c[5],g=c[6],M=c[7],b=c[8],w=c[9],y=c[10],S=c[11],I=c[12],B=c[13],C=c[14],O=c[15];if(l[0].setComponents(p-f,M-_,S-b,O-I).normalize(),l[1].setComponents(p+f,M+_,S+b,O+I).normalize(),l[2].setComponents(p+h,M+x,S+w,O+B).normalize(),l[3].setComponents(p-h,M-x,S-w,O-B).normalize(),s)l[4].setComponents(m,g,y,C).normalize(),l[5].setComponents(p-m,M-g,S-y,O-C).normalize();else if(l[4].setComponents(p-m,M-g,S-y,O-C).normalize(),i===ea)l[5].setComponents(p+m,M+g,S+y,O+C).normalize();else if(i===ru)l[5].setComponents(m,g,y,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Xs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Xs.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Xs)}intersectsSprite(e){Xs.center.set(0,0,0);const i=Ky.distanceTo(e.center);return Xs.radius=.7071067811865476+i,Xs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Xs)}intersectsSphere(e){const i=this.planes,s=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Xc.x=l.normal.x>0?e.max.x:e.min.x,Xc.y=l.normal.y>0?e.max.y:e.min.y,Xc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Xc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Xv extends Vn{constructor(e=[],i=js,s,l,c,f,h,m,p,_){super(e,i,s,l,c,f,h,m,p,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Wv extends Vn{constructor(e,i,s,l,c,f,h,m,p){super(e,i,s,l,c,f,h,m,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class no extends Vn{constructor(e,i,s=sa,l,c,f,h=In,m=In,p,_=Ia,x=1){if(_!==Ia&&_!==Ks)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:i,depth:x};super(g,l,c,f,h,m,_,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new dp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Qy extends no{constructor(e,i=sa,s=js,l,c,f=In,h=In,m,p=Ia){const _={width:e,height:e,depth:1},x=[_,_,_,_,_,_];super(e,e,i,s,l,c,f,h,m,p),this.image=x,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class qv extends Vn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class gl extends Di{constructor(e=1,i=1,s=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:f};const h=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const m=[],p=[],_=[],x=[];let g=0,M=0;b("z","y","x",-1,-1,s,i,e,f,c,0),b("z","y","x",1,-1,s,i,-e,f,c,1),b("x","z","y",1,1,e,s,i,l,f,2),b("x","z","y",1,-1,e,s,-i,l,f,3),b("x","y","z",1,-1,e,i,s,l,c,4),b("x","y","z",-1,-1,e,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new Ci(p,3)),this.setAttribute("normal",new Ci(_,3)),this.setAttribute("uv",new Ci(x,2));function b(w,y,S,I,B,C,O,N,P,T,L){const Y=C/P,G=O/T,j=C/2,pe=O/2,de=N/2,J=P+1,F=T+1;let H=0,ee=0;const _e=new $;for(let be=0;be<F;be++){const U=be*G-pe;for(let Z=0;Z<J;Z++){const Ee=Z*Y-j;_e[w]=Ee*I,_e[y]=U*B,_e[S]=de,p.push(_e.x,_e.y,_e.z),_e[w]=0,_e[y]=0,_e[S]=N>0?1:-1,_.push(_e.x,_e.y,_e.z),x.push(Z/P),x.push(1-be/T),H+=1}}for(let be=0;be<T;be++)for(let U=0;U<P;U++){const Z=g+U+J*be,Ee=g+U+J*(be+1),Ce=g+(U+1)+J*(be+1),Le=g+(U+1)+J*be;m.push(Z,Ee,Le),m.push(Ee,Ce,Le),ee+=6}h.addGroup(M,ee,L),M+=ee,g+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class jy{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){st("Curve: .getPoint() not implemented.")}getPointAt(e,i){const s=this.getUtoTmapping(e);return this.getPoint(s,i)}getPoints(e=5){const i=[];for(let s=0;s<=e;s++)i.push(this.getPoint(s/e));return i}getSpacedPoints(e=5){const i=[];for(let s=0;s<=e;s++)i.push(this.getPointAt(s/e));return i}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const i=[];let s,l=this.getPoint(0),c=0;i.push(0);for(let f=1;f<=e;f++)s=this.getPoint(f/e),c+=s.distanceTo(l),i.push(c),l=s;return this.cacheArcLengths=i,i}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,i=null){const s=this.getLengths();let l=0;const c=s.length;let f;i?f=i:f=e*s[c-1];let h=0,m=c-1,p;for(;h<=m;)if(l=Math.floor(h+(m-h)/2),p=s[l]-f,p<0)h=l+1;else if(p>0)m=l-1;else{m=l;break}if(l=m,s[l]===f)return l/(c-1);const _=s[l],g=s[l+1]-_,M=(f-_)/g;return(l+M)/(c-1)}getTangent(e,i){let l=e-1e-4,c=e+1e-4;l<0&&(l=0),c>1&&(c=1);const f=this.getPoint(l),h=this.getPoint(c),m=i||(f.isVector2?new Ft:new $);return m.copy(h).sub(f).normalize(),m}getTangentAt(e,i){const s=this.getUtoTmapping(e);return this.getTangent(s,i)}computeFrenetFrames(e,i=!1){const s=new $,l=[],c=[],f=[],h=new $,m=new dn;for(let M=0;M<=e;M++){const b=M/e;l[M]=this.getTangentAt(b,new $)}c[0]=new $,f[0]=new $;let p=Number.MAX_VALUE;const _=Math.abs(l[0].x),x=Math.abs(l[0].y),g=Math.abs(l[0].z);_<=p&&(p=_,s.set(1,0,0)),x<=p&&(p=x,s.set(0,1,0)),g<=p&&s.set(0,0,1),h.crossVectors(l[0],s).normalize(),c[0].crossVectors(l[0],h),f[0].crossVectors(l[0],c[0]);for(let M=1;M<=e;M++){if(c[M]=c[M-1].clone(),f[M]=f[M-1].clone(),h.crossVectors(l[M-1],l[M]),h.length()>Number.EPSILON){h.normalize();const b=Math.acos(xt(l[M-1].dot(l[M]),-1,1));c[M].applyMatrix4(m.makeRotationAxis(h,b))}f[M].crossVectors(l[M],c[M])}if(i===!0){let M=Math.acos(xt(c[0].dot(c[e]),-1,1));M/=e,l[0].dot(h.crossVectors(c[0],c[e]))>0&&(M=-M);for(let b=1;b<=e;b++)c[b].applyMatrix4(m.makeRotationAxis(l[b],M*b)),f[b].crossVectors(l[b],c[b])}return{tangents:l,normals:c,binormals:f}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}function pp(){let r=0,e=0,i=0,s=0;function l(c,f,h,m){r=c,e=h,i=-3*c+3*f-2*h-m,s=2*c-2*f+h+m}return{initCatmullRom:function(c,f,h,m,p){l(f,h,p*(h-c),p*(m-f))},initNonuniformCatmullRom:function(c,f,h,m,p,_,x){let g=(f-c)/p-(h-c)/(p+_)+(h-f)/_,M=(h-f)/_-(m-f)/(_+x)+(m-h)/x;g*=_,M*=_,l(f,h,g,M)},calc:function(c){const f=c*c,h=f*c;return r+e*c+i*f+s*h}}}const B_=new $,z_=new $,Jd=new pp,$d=new pp,eh=new pp;class Jy extends jy{constructor(e=[],i=!1,s="centripetal",l=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=i,this.curveType=s,this.tension=l}getPoint(e,i=new $){const s=i,l=this.points,c=l.length,f=(c-(this.closed?0:1))*e;let h=Math.floor(f),m=f-h;this.closed?h+=h>0?0:(Math.floor(Math.abs(h)/c)+1)*c:m===0&&h===c-1&&(h=c-2,m=1);let p,_;this.closed||h>0?p=l[(h-1)%c]:(z_.subVectors(l[0],l[1]).add(l[0]),p=z_);const x=l[h%c],g=l[(h+1)%c];if(this.closed||h+2<c?_=l[(h+2)%c]:(B_.subVectors(l[c-1],l[c-2]).add(l[c-1]),_=B_),this.curveType==="centripetal"||this.curveType==="chordal"){const M=this.curveType==="chordal"?.5:.25;let b=Math.pow(p.distanceToSquared(x),M),w=Math.pow(x.distanceToSquared(g),M),y=Math.pow(g.distanceToSquared(_),M);w<1e-4&&(w=1),b<1e-4&&(b=w),y<1e-4&&(y=w),Jd.initNonuniformCatmullRom(p.x,x.x,g.x,_.x,b,w,y),$d.initNonuniformCatmullRom(p.y,x.y,g.y,_.y,b,w,y),eh.initNonuniformCatmullRom(p.z,x.z,g.z,_.z,b,w,y)}else this.curveType==="catmullrom"&&(Jd.initCatmullRom(p.x,x.x,g.x,_.x,this.tension),$d.initCatmullRom(p.y,x.y,g.y,_.y,this.tension),eh.initCatmullRom(p.z,x.z,g.z,_.z,this.tension));return s.set(Jd.calc(m),$d.calc(m),eh.calc(m)),s}copy(e){super.copy(e),this.points=[];for(let i=0,s=e.points.length;i<s;i++){const l=e.points[i];this.points.push(l.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let i=0,s=this.points.length;i<s;i++){const l=this.points[i];e.points.push(l.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let i=0,s=e.points.length;i<s;i++){const l=e.points[i];this.points.push(new $().fromArray(l))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}class Qs extends Di{constructor(e=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:s,heightSegments:l};const c=e/2,f=i/2,h=Math.floor(s),m=Math.floor(l),p=h+1,_=m+1,x=e/h,g=i/m,M=[],b=[],w=[],y=[];for(let S=0;S<_;S++){const I=S*g-f;for(let B=0;B<p;B++){const C=B*x-c;b.push(C,-I,0),w.push(0,0,1),y.push(B/h),y.push(1-S/m)}}for(let S=0;S<m;S++)for(let I=0;I<h;I++){const B=I+p*S,C=I+p*(S+1),O=I+1+p*(S+1),N=I+1+p*S;M.push(B,C,N),M.push(C,O,N)}this.setIndex(M),this.setAttribute("position",new Ci(b,3)),this.setAttribute("normal",new Ci(w,3)),this.setAttribute("uv",new Ci(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qs(e.width,e.height,e.widthSegments,e.heightSegments)}}function io(r){const e={};for(const i in r){e[i]={};for(const s in r[i]){const l=r[i][s];if(H_(l))l.isRenderTargetTexture?(st("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][s]=null):e[i][s]=l.clone();else if(Array.isArray(l))if(H_(l[0])){const c=[];for(let f=0,h=l.length;f<h;f++)c[f]=l[f].clone();e[i][s]=c}else e[i][s]=l.slice();else e[i][s]=l}}return e}function qn(r){const e={};for(let i=0;i<r.length;i++){const s=io(r[i]);for(const l in s)e[l]=s[l]}return e}function H_(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function $y(r){const e=[];for(let i=0;i<r.length;i++)e.push(r[i].clone());return e}function Yv(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Rt.workingColorSpace}const eE={clone:io,merge:qn};var tE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,nE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Vi extends fu{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=tE,this.fragmentShader=nE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=io(e.uniforms),this.uniformsGroups=$y(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}fromJSON(e,i){if(super.fromJSON(e,i),e.uniforms!==void 0)for(const s in e.uniforms){const l=e.uniforms[s];switch(this.uniforms[s]={},l.type){case"t":this.uniforms[s].value=i[l.value]||null;break;case"c":this.uniforms[s].value=new Dt().setHex(l.value);break;case"v2":this.uniforms[s].value=new Ft().fromArray(l.value);break;case"v3":this.uniforms[s].value=new $().fromArray(l.value);break;case"v4":this.uniforms[s].value=new cn().fromArray(l.value);break;case"m3":this.uniforms[s].value=new lt().fromArray(l.value);break;case"m4":this.uniforms[s].value=new dn().fromArray(l.value);break;default:this.uniforms[s].value=l.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const s in e.extensions)this.extensions[s]=e.extensions[s];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class iE extends Vi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class aE extends fu{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=JM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class sE extends fu{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Wc=new $,qc=new so,Ki=new $;class Zv extends gi{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new dn,this.projectionMatrix=new dn,this.projectionMatrixInverse=new dn,this.coordinateSystem=ea,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Wc,qc,Ki),Ki.x===1&&Ki.y===1&&Ki.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Wc,qc,Ki.set(1,1,1)).invert()}updateWorldMatrix(e,i,s=!1){super.updateWorldMatrix(e,i,s),this.matrixWorld.decompose(Wc,qc,Ki),Ki.x===1&&Ki.y===1&&Ki.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Wc,qc,Ki.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const _s=new $,G_=new Ft,V_=new Ft;class Ai extends Zv{constructor(e=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=hl*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ol*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return hl*2*Math.atan(Math.tan(ol*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,s){_s.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(_s.x,_s.y).multiplyScalar(-e/_s.z),_s.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(_s.x,_s.y).multiplyScalar(-e/_s.z)}getViewSize(e,i){return this.getViewBounds(e,G_,V_),i.subVectors(V_,G_)}setViewOffset(e,i,s,l,c,f){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(ol*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,p=f.fullHeight;c+=f.offsetX*l/m,i-=f.offsetY*s/p,l*=f.width/m,s*=f.height/p}const h=this.filmOffset;h!==0&&(c+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class Kv extends Zv{constructor(e=-1,i=1,s=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,s,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-e,f=s+e,h=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,f=c+p*this.view.width,h-=_*this.view.offsetY,m=h-_*this.view.height}this.projectionMatrix.makeOrthographic(c,f,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const Wr=-90,qr=1;class rE extends gi{constructor(e,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Ai(Wr,qr,e,i);l.layers=this.layers,this.add(l);const c=new Ai(Wr,qr,e,i);c.layers=this.layers,this.add(c);const f=new Ai(Wr,qr,e,i);f.layers=this.layers,this.add(f);const h=new Ai(Wr,qr,e,i);h.layers=this.layers,this.add(h);const m=new Ai(Wr,qr,e,i);m.layers=this.layers,this.add(m);const p=new Ai(Wr,qr,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[s,l,c,f,h,m]=i;for(const p of i)this.remove(p);if(e===ea)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===ru)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,f,h,m,p,_]=this.children,x=e.getRenderTarget(),g=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const w=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let y=!1;e.isWebGLRenderer===!0?y=e.state.buffers.depth.getReversed():y=e.reversedDepthBuffer,e.setRenderTarget(s,0,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,c),e.setRenderTarget(s,1,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,f),e.setRenderTarget(s,2,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,h),e.setRenderTarget(s,3,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,m),e.setRenderTarget(s,4,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,p),s.texture.generateMipmaps=w,e.setRenderTarget(s,5,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,_),e.setRenderTarget(x,g,M),e.xr.enabled=b,s.texture.needsPMREMUpdate=!0}}class oE extends Ai{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Ep=class Ep{constructor(e,i,s,l){this.elements=[1,0,0,1],e!==void 0&&this.set(e,i,s,l)}identity(){return this.set(1,0,0,1),this}fromArray(e,i=0){for(let s=0;s<4;s++)this.elements[s]=e[s+i];return this}set(e,i,s,l){const c=this.elements;return c[0]=e,c[2]=i,c[1]=s,c[3]=l,this}};Ep.prototype.isMatrix2=!0;let k_=Ep;function X_(r,e,i,s){const l=lE(s);switch(i){case Ov:return r*e;case Iv:return r*e/l.components*l.byteLength;case rp:return r*e/l.components*l.byteLength;case Js:return r*e*2/l.components*l.byteLength;case op:return r*e*2/l.components*l.byteLength;case Pv:return r*e*3/l.components*l.byteLength;case Gi:return r*e*4/l.components*l.byteLength;case lp:return r*e*4/l.components*l.byteLength;case jc:case Jc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case $c:case eu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Eh:case Th:return Math.max(r,16)*Math.max(e,8)/4;case yh:case bh:return Math.max(r,8)*Math.max(e,8)/2;case Ah:case Rh:case wh:case Dh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Ch:case nu:case Uh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Nh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Lh:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Oh:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Ph:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Ih:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Fh:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Bh:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case zh:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Hh:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Gh:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Vh:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case kh:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Xh:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Wh:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case qh:case Yh:case Zh:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Kh:case Qh:return Math.ceil(r/4)*Math.ceil(e/4)*8;case iu:case jh:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function lE(r){switch(r){case Ri:case Dv:return{byteLength:1,components:1};case fl:case Uv:case Pa:return{byteLength:2,components:1};case ap:case sp:return{byteLength:2,components:4};case sa:case ip:case $i:return{byteLength:4,components:1};case Nv:case Lv:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:np}}));typeof window<"u"&&(window.__THREE__?st("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=np);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Qv(){let r=null,e=!1,i=null,s=null;function l(c,f){i(c,f),s=r.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&r!==null&&(s=r.requestAnimationFrame(l),e=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function cE(r){const e=new WeakMap;function i(h,m){const p=h.array,_=h.usage,x=p.byteLength,g=r.createBuffer();r.bindBuffer(m,g),r.bufferData(m,p,_),h.onUploadCallback();let M;if(p instanceof Float32Array)M=r.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)M=r.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?M=r.HALF_FLOAT:M=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=r.SHORT;else if(p instanceof Uint32Array)M=r.UNSIGNED_INT;else if(p instanceof Int32Array)M=r.INT;else if(p instanceof Int8Array)M=r.BYTE;else if(p instanceof Uint8Array)M=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:g,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:x}}function s(h,m,p){const _=m.array,x=m.updateRanges;if(r.bindBuffer(p,h),x.length===0)r.bufferSubData(p,0,_);else{x.sort((M,b)=>M.start-b.start);let g=0;for(let M=1;M<x.length;M++){const b=x[g],w=x[M];w.start<=b.start+b.count+1?b.count=Math.max(b.count,w.start+w.count-b.start):(++g,x[g]=w)}x.length=g+1;for(let M=0,b=x.length;M<b;M++){const w=x[M];r.bufferSubData(p,w.start*_.BYTES_PER_ELEMENT,_,w.start,w.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=e.get(h);m&&(r.deleteBuffer(m.buffer),e.delete(h))}function f(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const _=e.get(h);(!_||_.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=e.get(h);if(p===void 0)e.set(h,i(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,h,m),p.version=h.version}}return{get:l,remove:c,update:f}}var uE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,fE=`#ifdef USE_ALPHAHASH
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
#endif`,dE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,hE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,mE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,gE=`#ifdef USE_AOMAP
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
#endif`,_E=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,vE=`#ifdef USE_BATCHING
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
#endif`,xE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,SE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ME=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,yE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,EE=`#ifdef USE_IRIDESCENCE
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
#endif`,bE=`#ifdef USE_BUMPMAP
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
#endif`,TE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,AE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,RE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,CE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,wE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,DE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,UE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,NE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,LE=`#define PI 3.141592653589793
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
} // validated`,OE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,PE=`vec3 transformedNormal = objectNormal;
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
#endif`,IE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,FE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,BE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,zE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,HE="gl_FragColor = linearToOutputTexel( gl_FragColor );",GE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,VE=`#ifdef USE_ENVMAP
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
#endif`,kE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,XE=`#ifdef USE_ENVMAP
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
#endif`,WE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,qE=`#ifdef USE_ENVMAP
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
#endif`,YE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ZE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,KE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,QE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,jE=`#ifdef USE_GRADIENTMAP
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
}`,JE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$E=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,eb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,tb=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,nb=`#ifdef USE_ENVMAP
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
#endif`,ib=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ab=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,sb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,rb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ob=`PhysicalMaterial material;
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
#endif`,lb=`uniform sampler2D dfgLUT;
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
}`,cb=`
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
#endif`,ub=`#if defined( RE_IndirectDiffuse )
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
#endif`,fb=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,db=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,hb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,pb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,_b=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,vb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,xb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Sb=`#if defined( USE_POINTS_UV )
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
#endif`,Mb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,yb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Eb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,bb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Tb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ab=`#ifdef USE_MORPHTARGETS
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
#endif`,Rb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Cb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,wb=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Db=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ub=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Nb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Lb=`#ifdef USE_NORMALMAP
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
#endif`,Ob=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Pb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ib=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Fb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Bb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,zb=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Hb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Gb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Vb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,kb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Xb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Wb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,qb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Yb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Zb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Kb=`float getShadowMask() {
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
}`,Qb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,jb=`#ifdef USE_SKINNING
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
#endif`,Jb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$b=`#ifdef USE_SKINNING
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
#endif`,e1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,t1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,n1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,i1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,a1=`#ifdef USE_TRANSMISSION
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
#endif`,s1=`#ifdef USE_TRANSMISSION
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
#endif`,r1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,o1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,l1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,c1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const u1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,f1=`uniform sampler2D t2D;
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
}`,d1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,h1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,p1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,m1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,g1=`#include <common>
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
}`,_1=`#if DEPTH_PACKING == 3200
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
}`,v1=`#define DISTANCE
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
}`,x1=`#define DISTANCE
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
}`,S1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,M1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,y1=`uniform float scale;
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
}`,E1=`uniform vec3 diffuse;
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
}`,b1=`#include <common>
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
}`,T1=`uniform vec3 diffuse;
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
}`,A1=`#define LAMBERT
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
}`,R1=`#define LAMBERT
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
}`,C1=`#define MATCAP
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
}`,w1=`#define MATCAP
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
}`,D1=`#define NORMAL
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
}`,U1=`#define NORMAL
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
}`,N1=`#define PHONG
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
}`,L1=`#define PHONG
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
}`,O1=`#define STANDARD
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
}`,P1=`#define STANDARD
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
}`,I1=`#define TOON
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
}`,F1=`#define TOON
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
}`,B1=`uniform float size;
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
}`,z1=`uniform vec3 diffuse;
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
}`,H1=`#include <common>
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
}`,G1=`uniform vec3 color;
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
}`,V1=`uniform float rotation;
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
}`,k1=`uniform vec3 diffuse;
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
}`,mt={alphahash_fragment:uE,alphahash_pars_fragment:fE,alphamap_fragment:dE,alphamap_pars_fragment:hE,alphatest_fragment:pE,alphatest_pars_fragment:mE,aomap_fragment:gE,aomap_pars_fragment:_E,batching_pars_vertex:vE,batching_vertex:xE,begin_vertex:SE,beginnormal_vertex:ME,bsdfs:yE,iridescence_fragment:EE,bumpmap_pars_fragment:bE,clipping_planes_fragment:TE,clipping_planes_pars_fragment:AE,clipping_planes_pars_vertex:RE,clipping_planes_vertex:CE,color_fragment:wE,color_pars_fragment:DE,color_pars_vertex:UE,color_vertex:NE,common:LE,cube_uv_reflection_fragment:OE,defaultnormal_vertex:PE,displacementmap_pars_vertex:IE,displacementmap_vertex:FE,emissivemap_fragment:BE,emissivemap_pars_fragment:zE,colorspace_fragment:HE,colorspace_pars_fragment:GE,envmap_fragment:VE,envmap_common_pars_fragment:kE,envmap_pars_fragment:XE,envmap_pars_vertex:WE,envmap_physical_pars_fragment:nb,envmap_vertex:qE,fog_vertex:YE,fog_pars_vertex:ZE,fog_fragment:KE,fog_pars_fragment:QE,gradientmap_pars_fragment:jE,lightmap_pars_fragment:JE,lights_lambert_fragment:$E,lights_lambert_pars_fragment:eb,lights_pars_begin:tb,lights_toon_fragment:ib,lights_toon_pars_fragment:ab,lights_phong_fragment:sb,lights_phong_pars_fragment:rb,lights_physical_fragment:ob,lights_physical_pars_fragment:lb,lights_fragment_begin:cb,lights_fragment_maps:ub,lights_fragment_end:fb,lightprobes_pars_fragment:db,logdepthbuf_fragment:hb,logdepthbuf_pars_fragment:pb,logdepthbuf_pars_vertex:mb,logdepthbuf_vertex:gb,map_fragment:_b,map_pars_fragment:vb,map_particle_fragment:xb,map_particle_pars_fragment:Sb,metalnessmap_fragment:Mb,metalnessmap_pars_fragment:yb,morphinstance_vertex:Eb,morphcolor_vertex:bb,morphnormal_vertex:Tb,morphtarget_pars_vertex:Ab,morphtarget_vertex:Rb,normal_fragment_begin:Cb,normal_fragment_maps:wb,normal_pars_fragment:Db,normal_pars_vertex:Ub,normal_vertex:Nb,normalmap_pars_fragment:Lb,clearcoat_normal_fragment_begin:Ob,clearcoat_normal_fragment_maps:Pb,clearcoat_pars_fragment:Ib,iridescence_pars_fragment:Fb,opaque_fragment:Bb,packing:zb,premultiplied_alpha_fragment:Hb,project_vertex:Gb,dithering_fragment:Vb,dithering_pars_fragment:kb,roughnessmap_fragment:Xb,roughnessmap_pars_fragment:Wb,shadowmap_pars_fragment:qb,shadowmap_pars_vertex:Yb,shadowmap_vertex:Zb,shadowmask_pars_fragment:Kb,skinbase_vertex:Qb,skinning_pars_vertex:jb,skinning_vertex:Jb,skinnormal_vertex:$b,specularmap_fragment:e1,specularmap_pars_fragment:t1,tonemapping_fragment:n1,tonemapping_pars_fragment:i1,transmission_fragment:a1,transmission_pars_fragment:s1,uv_pars_fragment:r1,uv_pars_vertex:o1,uv_vertex:l1,worldpos_vertex:c1,background_vert:u1,background_frag:f1,backgroundCube_vert:d1,backgroundCube_frag:h1,cube_vert:p1,cube_frag:m1,depth_vert:g1,depth_frag:_1,distance_vert:v1,distance_frag:x1,equirect_vert:S1,equirect_frag:M1,linedashed_vert:y1,linedashed_frag:E1,meshbasic_vert:b1,meshbasic_frag:T1,meshlambert_vert:A1,meshlambert_frag:R1,meshmatcap_vert:C1,meshmatcap_frag:w1,meshnormal_vert:D1,meshnormal_frag:U1,meshphong_vert:N1,meshphong_frag:L1,meshphysical_vert:O1,meshphysical_frag:P1,meshtoon_vert:I1,meshtoon_frag:F1,points_vert:B1,points_frag:z1,shadow_vert:H1,shadow_frag:G1,sprite_vert:V1,sprite_frag:k1},Fe={common:{diffuse:{value:new Dt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new lt}},envmap:{envMap:{value:null},envMapRotation:{value:new lt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new lt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new lt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new lt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new lt},normalScale:{value:new Ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new lt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new lt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new lt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new lt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Dt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new $},probesMax:{value:new $},probesResolution:{value:new $}},points:{diffuse:{value:new Dt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0},uvTransform:{value:new lt}},sprite:{diffuse:{value:new Dt(16777215)},opacity:{value:1},center:{value:new Ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}}},ji={basic:{uniforms:qn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.fog]),vertexShader:mt.meshbasic_vert,fragmentShader:mt.meshbasic_frag},lambert:{uniforms:qn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new Dt(0)},envMapIntensity:{value:1}}]),vertexShader:mt.meshlambert_vert,fragmentShader:mt.meshlambert_frag},phong:{uniforms:qn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new Dt(0)},specular:{value:new Dt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:mt.meshphong_vert,fragmentShader:mt.meshphong_frag},standard:{uniforms:qn([Fe.common,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.roughnessmap,Fe.metalnessmap,Fe.fog,Fe.lights,{emissive:{value:new Dt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag},toon:{uniforms:qn([Fe.common,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.gradientmap,Fe.fog,Fe.lights,{emissive:{value:new Dt(0)}}]),vertexShader:mt.meshtoon_vert,fragmentShader:mt.meshtoon_frag},matcap:{uniforms:qn([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,{matcap:{value:null}}]),vertexShader:mt.meshmatcap_vert,fragmentShader:mt.meshmatcap_frag},points:{uniforms:qn([Fe.points,Fe.fog]),vertexShader:mt.points_vert,fragmentShader:mt.points_frag},dashed:{uniforms:qn([Fe.common,Fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:mt.linedashed_vert,fragmentShader:mt.linedashed_frag},depth:{uniforms:qn([Fe.common,Fe.displacementmap]),vertexShader:mt.depth_vert,fragmentShader:mt.depth_frag},normal:{uniforms:qn([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,{opacity:{value:1}}]),vertexShader:mt.meshnormal_vert,fragmentShader:mt.meshnormal_frag},sprite:{uniforms:qn([Fe.sprite,Fe.fog]),vertexShader:mt.sprite_vert,fragmentShader:mt.sprite_frag},background:{uniforms:{uvTransform:{value:new lt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:mt.background_vert,fragmentShader:mt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new lt}},vertexShader:mt.backgroundCube_vert,fragmentShader:mt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:mt.cube_vert,fragmentShader:mt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:mt.equirect_vert,fragmentShader:mt.equirect_frag},distance:{uniforms:qn([Fe.common,Fe.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:mt.distance_vert,fragmentShader:mt.distance_frag},shadow:{uniforms:qn([Fe.lights,Fe.fog,{color:{value:new Dt(0)},opacity:{value:1}}]),vertexShader:mt.shadow_vert,fragmentShader:mt.shadow_frag}};ji.physical={uniforms:qn([ji.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new lt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new lt},clearcoatNormalScale:{value:new Ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new lt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new lt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new lt},sheen:{value:0},sheenColor:{value:new Dt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new lt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new lt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new lt},transmissionSamplerSize:{value:new Ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new lt},attenuationDistance:{value:0},attenuationColor:{value:new Dt(0)},specularColor:{value:new Dt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new lt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new lt},anisotropyVector:{value:new Ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new lt}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag};const Yc={r:0,b:0,g:0},X1=new dn,jv=new lt;jv.set(-1,0,0,0,1,0,0,0,1);function W1(r,e,i,s,l,c){const f=new Dt(0);let h=l===!0?0:1,m,p,_=null,x=0,g=null;function M(I){let B=I.isScene===!0?I.background:null;if(B&&B.isTexture){const C=I.backgroundBlurriness>0;B=e.get(B,C)}return B}function b(I){let B=!1;const C=M(I);C===null?y(f,h):C&&C.isColor&&(y(C,1),B=!0);const O=r.xr.getEnvironmentBlendMode();O==="additive"?i.buffers.color.setClear(0,0,0,1,c):O==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(r.autoClear||B)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function w(I,B){const C=M(B);C&&(C.isCubeTexture||C.mapping===uu)?(p===void 0&&(p=new wi(new gl(1,1,1),new Vi({name:"BackgroundCubeMaterial",uniforms:io(ji.backgroundCube.uniforms),vertexShader:ji.backgroundCube.vertexShader,fragmentShader:ji.backgroundCube.fragmentShader,side:ii,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(O,N,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(p)),p.material.uniforms.envMap.value=C,p.material.uniforms.backgroundBlurriness.value=B.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=B.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(X1.makeRotationFromEuler(B.backgroundRotation)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&p.material.uniforms.backgroundRotation.value.premultiply(jv),p.material.toneMapped=Rt.getTransfer(C.colorSpace)!==qt,(_!==C||x!==C.version||g!==r.toneMapping)&&(p.material.needsUpdate=!0,_=C,x=C.version,g=r.toneMapping),p.layers.enableAll(),I.unshift(p,p.geometry,p.material,0,0,null)):C&&C.isTexture&&(m===void 0&&(m=new wi(new Qs(2,2),new Vi({name:"BackgroundMaterial",uniforms:io(ji.background.uniforms),vertexShader:ji.background.vertexShader,fragmentShader:ji.background.fragmentShader,side:Oa,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(m)),m.material.uniforms.t2D.value=C,m.material.uniforms.backgroundIntensity.value=B.backgroundIntensity,m.material.toneMapped=Rt.getTransfer(C.colorSpace)!==qt,C.matrixAutoUpdate===!0&&C.updateMatrix(),m.material.uniforms.uvTransform.value.copy(C.matrix),(_!==C||x!==C.version||g!==r.toneMapping)&&(m.material.needsUpdate=!0,_=C,x=C.version,g=r.toneMapping),m.layers.enableAll(),I.unshift(m,m.geometry,m.material,0,0,null))}function y(I,B){I.getRGB(Yc,Yv(r)),i.buffers.color.setClear(Yc.r,Yc.g,Yc.b,B,c)}function S(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return f},setClearColor:function(I,B=1){f.set(I),h=B,y(f,h)},getClearAlpha:function(){return h},setClearAlpha:function(I){h=I,y(f,h)},render:b,addToRenderList:w,dispose:S}}function q1(r,e){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=g(null);let c=l,f=!1;function h(G,j,pe,de,J){let F=!1;const H=x(G,de,pe,j);c!==H&&(c=H,p(c.object)),F=M(G,de,pe,J),F&&b(G,de,pe,J),J!==null&&e.update(J,r.ELEMENT_ARRAY_BUFFER),(F||f)&&(f=!1,C(G,j,pe,de),J!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(J).buffer))}function m(){return r.createVertexArray()}function p(G){return r.bindVertexArray(G)}function _(G){return r.deleteVertexArray(G)}function x(G,j,pe,de){const J=de.wireframe===!0;let F=s[j.id];F===void 0&&(F={},s[j.id]=F);const H=G.isInstancedMesh===!0?G.id:0;let ee=F[H];ee===void 0&&(ee={},F[H]=ee);let _e=ee[pe.id];_e===void 0&&(_e={},ee[pe.id]=_e);let be=_e[J];return be===void 0&&(be=g(m()),_e[J]=be),be}function g(G){const j=[],pe=[],de=[];for(let J=0;J<i;J++)j[J]=0,pe[J]=0,de[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:j,enabledAttributes:pe,attributeDivisors:de,object:G,attributes:{},index:null}}function M(G,j,pe,de){const J=c.attributes,F=j.attributes;let H=0;const ee=pe.getAttributes();for(const _e in ee)if(ee[_e].location>=0){const U=J[_e];let Z=F[_e];if(Z===void 0&&(_e==="instanceMatrix"&&G.instanceMatrix&&(Z=G.instanceMatrix),_e==="instanceColor"&&G.instanceColor&&(Z=G.instanceColor)),U===void 0||U.attribute!==Z||Z&&U.data!==Z.data)return!0;H++}return c.attributesNum!==H||c.index!==de}function b(G,j,pe,de){const J={},F=j.attributes;let H=0;const ee=pe.getAttributes();for(const _e in ee)if(ee[_e].location>=0){let U=F[_e];U===void 0&&(_e==="instanceMatrix"&&G.instanceMatrix&&(U=G.instanceMatrix),_e==="instanceColor"&&G.instanceColor&&(U=G.instanceColor));const Z={};Z.attribute=U,U&&U.data&&(Z.data=U.data),J[_e]=Z,H++}c.attributes=J,c.attributesNum=H,c.index=de}function w(){const G=c.newAttributes;for(let j=0,pe=G.length;j<pe;j++)G[j]=0}function y(G){S(G,0)}function S(G,j){const pe=c.newAttributes,de=c.enabledAttributes,J=c.attributeDivisors;pe[G]=1,de[G]===0&&(r.enableVertexAttribArray(G),de[G]=1),J[G]!==j&&(r.vertexAttribDivisor(G,j),J[G]=j)}function I(){const G=c.newAttributes,j=c.enabledAttributes;for(let pe=0,de=j.length;pe<de;pe++)j[pe]!==G[pe]&&(r.disableVertexAttribArray(pe),j[pe]=0)}function B(G,j,pe,de,J,F,H){H===!0?r.vertexAttribIPointer(G,j,pe,J,F):r.vertexAttribPointer(G,j,pe,de,J,F)}function C(G,j,pe,de){w();const J=de.attributes,F=pe.getAttributes(),H=j.defaultAttributeValues;for(const ee in F){const _e=F[ee];if(_e.location>=0){let be=J[ee];if(be===void 0&&(ee==="instanceMatrix"&&G.instanceMatrix&&(be=G.instanceMatrix),ee==="instanceColor"&&G.instanceColor&&(be=G.instanceColor)),be!==void 0){const U=be.normalized,Z=be.itemSize,Ee=e.get(be);if(Ee===void 0)continue;const Ce=Ee.buffer,Le=Ee.type,ie=Ee.bytesPerElement,Se=Le===r.INT||Le===r.UNSIGNED_INT||be.gpuType===ip;if(be.isInterleavedBufferAttribute){const Me=be.data,ze=Me.stride,nt=be.offset;if(Me.isInstancedInterleavedBuffer){for(let je=0;je<_e.locationSize;je++)S(_e.location+je,Me.meshPerAttribute);G.isInstancedMesh!==!0&&de._maxInstanceCount===void 0&&(de._maxInstanceCount=Me.meshPerAttribute*Me.count)}else for(let je=0;je<_e.locationSize;je++)y(_e.location+je);r.bindBuffer(r.ARRAY_BUFFER,Ce);for(let je=0;je<_e.locationSize;je++)B(_e.location+je,Z/_e.locationSize,Le,U,ze*ie,(nt+Z/_e.locationSize*je)*ie,Se)}else{if(be.isInstancedBufferAttribute){for(let Me=0;Me<_e.locationSize;Me++)S(_e.location+Me,be.meshPerAttribute);G.isInstancedMesh!==!0&&de._maxInstanceCount===void 0&&(de._maxInstanceCount=be.meshPerAttribute*be.count)}else for(let Me=0;Me<_e.locationSize;Me++)y(_e.location+Me);r.bindBuffer(r.ARRAY_BUFFER,Ce);for(let Me=0;Me<_e.locationSize;Me++)B(_e.location+Me,Z/_e.locationSize,Le,U,Z*ie,Z/_e.locationSize*Me*ie,Se)}}else if(H!==void 0){const U=H[ee];if(U!==void 0)switch(U.length){case 2:r.vertexAttrib2fv(_e.location,U);break;case 3:r.vertexAttrib3fv(_e.location,U);break;case 4:r.vertexAttrib4fv(_e.location,U);break;default:r.vertexAttrib1fv(_e.location,U)}}}}I()}function O(){L();for(const G in s){const j=s[G];for(const pe in j){const de=j[pe];for(const J in de){const F=de[J];for(const H in F)_(F[H].object),delete F[H];delete de[J]}}delete s[G]}}function N(G){if(s[G.id]===void 0)return;const j=s[G.id];for(const pe in j){const de=j[pe];for(const J in de){const F=de[J];for(const H in F)_(F[H].object),delete F[H];delete de[J]}}delete s[G.id]}function P(G){for(const j in s){const pe=s[j];for(const de in pe){const J=pe[de];if(J[G.id]===void 0)continue;const F=J[G.id];for(const H in F)_(F[H].object),delete F[H];delete J[G.id]}}}function T(G){for(const j in s){const pe=s[j],de=G.isInstancedMesh===!0?G.id:0,J=pe[de];if(J!==void 0){for(const F in J){const H=J[F];for(const ee in H)_(H[ee].object),delete H[ee];delete J[F]}delete pe[de],Object.keys(pe).length===0&&delete s[j]}}}function L(){Y(),f=!0,c!==l&&(c=l,p(c.object))}function Y(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:L,resetDefaultState:Y,dispose:O,releaseStatesOfGeometry:N,releaseStatesOfObject:T,releaseStatesOfProgram:P,initAttributes:w,enableAttribute:y,disableUnusedAttributes:I}}function Y1(r,e,i){let s;function l(m){s=m}function c(m,p){r.drawArrays(s,m,p),i.update(p,s,1)}function f(m,p,_){_!==0&&(r.drawArraysInstanced(s,m,p,_),i.update(p,s,_))}function h(m,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,m,0,p,0,_);let g=0;for(let M=0;M<_;M++)g+=p[M];i.update(g,s,1)}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=h}function Z1(r,e,i,s){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");l=r.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(P){return!(P!==Gi&&s.convert(P)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(P){const T=P===Pa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==Ri&&s.convert(P)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==$i&&!T)}function m(P){if(P==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const _=m(p);_!==p&&(st("WebGLRenderer:",p,"not supported, using",_,"instead."),p=_);const x=i.logarithmicDepthBuffer===!0,g=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control");i.reversedDepthBuffer===!0&&g===!1&&st("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const M=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),b=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=r.getParameter(r.MAX_TEXTURE_SIZE),y=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),S=r.getParameter(r.MAX_VERTEX_ATTRIBS),I=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),B=r.getParameter(r.MAX_VARYING_VECTORS),C=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),O=r.getParameter(r.MAX_SAMPLES),N=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:f,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:x,reversedDepthBuffer:g,maxTextures:M,maxVertexTextures:b,maxTextureSize:w,maxCubemapSize:y,maxAttributes:S,maxVertexUniforms:I,maxVaryings:B,maxFragmentUniforms:C,maxSamples:O,samples:N}}function K1(r){const e=this;let i=null,s=0,l=!1,c=!1;const f=new qs,h=new lt,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(x,g){const M=x.length!==0||g||s!==0||l;return l=g,s=x.length,M},this.beginShadows=function(){c=!0,_(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(x,g){i=_(x,g,0)},this.setState=function(x,g,M){const b=x.clippingPlanes,w=x.clipIntersection,y=x.clipShadows,S=r.get(x);if(!l||b===null||b.length===0||c&&!y)c?_(null):p();else{const I=c?0:s,B=I*4;let C=S.clippingState||null;m.value=C,C=_(b,g,B,M);for(let O=0;O!==B;++O)C[O]=i[O];S.clippingState=C,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=I}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function _(x,g,M,b){const w=x!==null?x.length:0;let y=null;if(w!==0){if(y=m.value,b!==!0||y===null){const S=M+w*4,I=g.matrixWorldInverse;h.getNormalMatrix(I),(y===null||y.length<S)&&(y=new Float32Array(S));for(let B=0,C=M;B!==w;++B,C+=4)f.copy(x[B]).applyMatrix4(I,h),f.normal.toArray(y,C),y[C+3]=f.constant}m.value=y,m.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,y}}const Ss=4,W_=[.125,.215,.35,.446,.526,.582],Zs=20,Q1=256,nl=new Kv,q_=new Dt;let th=null,nh=0,ih=0,ah=!1;const j1=new $;class Y_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,s=.1,l=100,c={}){const{size:f=256,position:h=j1}=c;th=this._renderer.getRenderTarget(),nh=this._renderer.getActiveCubeFace(),ih=this._renderer.getActiveMipmapLevel(),ah=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,s,l,m,h),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Q_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=K_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(th,nh,ih),this._renderer.xr.enabled=ah,e.scissorTest=!1,Yr(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===js||e.mapping===to?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),th=this._renderer.getRenderTarget(),nh=this._renderer.getActiveCubeFace(),ih=this._renderer.getActiveMipmapLevel(),ah=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:yn,minFilter:yn,generateMipmaps:!1,type:Pa,format:Gi,colorSpace:au,depthBuffer:!1},l=Z_(e,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Z_(e,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=J1(c)),this._blurMaterial=eT(c,e,i),this._ggxMaterial=$1(c,e,i)}return l}_compileMaterial(e){const i=new wi(new Di,e);this._renderer.compile(i,nl)}_sceneToCubeUV(e,i,s,l,c){const m=new Ai(90,1,i,s),p=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],x=this._renderer,g=x.autoClear,M=x.toneMapping;x.getClearColor(q_),x.toneMapping=na,x.autoClear=!1,x.state.buffers.depth.getReversed()&&(x.setRenderTarget(l),x.clearDepth(),x.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new wi(new gl,new lu({name:"PMREM.Background",side:ii,depthWrite:!1,depthTest:!1})));const w=this._backgroundBox,y=w.material;let S=!1;const I=e.background;I?I.isColor&&(y.color.copy(I),e.background=null,S=!0):(y.color.copy(q_),S=!0);for(let B=0;B<6;B++){const C=B%3;C===0?(m.up.set(0,p[B],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+_[B],c.y,c.z)):C===1?(m.up.set(0,0,p[B]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+_[B],c.z)):(m.up.set(0,p[B],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+_[B]));const O=this._cubeSize;Yr(l,C*O,B>2?O:0,O,O),x.setRenderTarget(l),S&&x.render(w,m),x.render(e,m)}x.toneMapping=M,x.autoClear=g,e.background=I}_textureToCubeUV(e,i){const s=this._renderer,l=e.mapping===js||e.mapping===to;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=Q_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=K_());const c=l?this._cubemapMaterial:this._equirectMaterial,f=this._lodMeshes[0];f.material=c;const h=c.uniforms;h.envMap.value=e;const m=this._cubeSize;Yr(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(f,nl)}_applyPMREM(e){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(e,c-1,c);i.autoClear=s}_applyGGXFilter(e,i,s){const l=this._renderer,c=this._pingPongRenderTarget,f=this._ggxMaterial,h=this._lodMeshes[s];h.material=f;const m=f.uniforms,p=s/(this._lodMeshes.length-1),_=i/(this._lodMeshes.length-1),x=Math.sqrt(p*p-_*_),g=0+p*1.25,M=x*g,{_lodMax:b}=this,w=this._sizeLods[s],y=3*w*(s>b-Ss?s-b+Ss:0),S=4*(this._cubeSize-w);m.envMap.value=e.texture,m.roughness.value=M,m.mipInt.value=b-i,Yr(c,y,S,3*w,2*w),l.setRenderTarget(c),l.render(h,nl),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=b-s,Yr(e,y,S,3*w,2*w),l.setRenderTarget(e),l.render(h,nl)}_blur(e,i,s,l,c){const f=this._pingPongRenderTarget;this._halfBlur(e,f,i,s,l,"latitudinal",c),this._halfBlur(f,e,s,s,l,"longitudinal",c)}_halfBlur(e,i,s,l,c,f,h){const m=this._renderer,p=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&Nt("blur direction must be either latitudinal or longitudinal!");const _=3,x=this._lodMeshes[l];x.material=p;const g=p.uniforms,M=this._sizeLods[s]-1,b=isFinite(c)?Math.PI/(2*M):2*Math.PI/(2*Zs-1),w=c/b,y=isFinite(c)?1+Math.floor(_*w):Zs;y>Zs&&st(`sigmaRadians, ${c}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Zs}`);const S=[];let I=0;for(let P=0;P<Zs;++P){const T=P/w,L=Math.exp(-T*T/2);S.push(L),P===0?I+=L:P<y&&(I+=2*L)}for(let P=0;P<S.length;P++)S[P]=S[P]/I;g.envMap.value=e.texture,g.samples.value=y,g.weights.value=S,g.latitudinal.value=f==="latitudinal",h&&(g.poleAxis.value=h);const{_lodMax:B}=this;g.dTheta.value=b,g.mipInt.value=B-s;const C=this._sizeLods[l],O=3*C*(l>B-Ss?l-B+Ss:0),N=4*(this._cubeSize-C);Yr(i,O,N,3*C,2*C),m.setRenderTarget(i),m.render(x,nl)}}function J1(r){const e=[],i=[],s=[];let l=r;const c=r-Ss+1+W_.length;for(let f=0;f<c;f++){const h=Math.pow(2,l);e.push(h);let m=1/h;f>r-Ss?m=W_[f-r+Ss-1]:f===0&&(m=0),i.push(m);const p=1/(h-2),_=-p,x=1+p,g=[_,_,x,_,x,x,_,_,x,x,_,x],M=6,b=6,w=3,y=2,S=1,I=new Float32Array(w*b*M),B=new Float32Array(y*b*M),C=new Float32Array(S*b*M);for(let N=0;N<M;N++){const P=N%3*2/3-1,T=N>2?0:-1,L=[P,T,0,P+2/3,T,0,P+2/3,T+1,0,P,T,0,P+2/3,T+1,0,P,T+1,0];I.set(L,w*b*N),B.set(g,y*b*N);const Y=[N,N,N,N,N,N];C.set(Y,S*b*N)}const O=new Di;O.setAttribute("position",new aa(I,w)),O.setAttribute("uv",new aa(B,y)),O.setAttribute("faceIndex",new aa(C,S)),s.push(new wi(O,null)),l>Ss&&l--}return{lodMeshes:s,sizeLods:e,sigmas:i}}function Z_(r,e,i){const s=new ia(r,e,i);return s.texture.mapping=uu,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Yr(r,e,i,s,l){r.viewport.set(e,i,s,l),r.scissor.set(e,i,s,l)}function $1(r,e,i){return new Vi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Q1,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:du(),fragmentShader:`

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
		`,blending:Ua,depthTest:!1,depthWrite:!1})}function eT(r,e,i){const s=new Float32Array(Zs),l=new $(0,1,0);return new Vi({name:"SphericalGaussianBlur",defines:{n:Zs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:du(),fragmentShader:`

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
		`,blending:Ua,depthTest:!1,depthWrite:!1})}function K_(){return new Vi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:du(),fragmentShader:`

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
		`,blending:Ua,depthTest:!1,depthWrite:!1})}function Q_(){return new Vi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:du(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ua,depthTest:!1,depthWrite:!1})}function du(){return`

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
	`}class Jv extends ia{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},l=[s,s,s,s,s,s];this.texture=new Xv(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new gl(5,5,5),c=new Vi({name:"CubemapFromEquirect",uniforms:io(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:ii,blending:Ua});c.uniforms.tEquirect.value=i;const f=new wi(l,c),h=i.minFilter;return i.minFilter===xs&&(i.minFilter=yn),new rE(1,10,this).update(e,f),i.minFilter=h,f.geometry.dispose(),f.material.dispose(),this}clear(e,i=!0,s=!0,l=!0){const c=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(i,s,l);e.setRenderTarget(c)}}function tT(r){let e=new WeakMap,i=new WeakMap,s=null;function l(g,M=!1){return g==null?null:M?f(g):c(g)}function c(g){if(g&&g.isTexture){const M=g.mapping;if(M===Rd||M===Cd)if(e.has(g)){const b=e.get(g).texture;return h(b,g.mapping)}else{const b=g.image;if(b&&b.height>0){const w=new Jv(b.height);return w.fromEquirectangularTexture(r,g),e.set(g,w),g.addEventListener("dispose",p),h(w.texture,g.mapping)}else return null}}return g}function f(g){if(g&&g.isTexture){const M=g.mapping,b=M===Rd||M===Cd,w=M===js||M===to;if(b||w){let y=i.get(g);const S=y!==void 0?y.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==S)return s===null&&(s=new Y_(r)),y=b?s.fromEquirectangular(g,y):s.fromCubemap(g,y),y.texture.pmremVersion=g.pmremVersion,i.set(g,y),y.texture;if(y!==void 0)return y.texture;{const I=g.image;return b&&I&&I.height>0||w&&I&&m(I)?(s===null&&(s=new Y_(r)),y=b?s.fromEquirectangular(g):s.fromCubemap(g),y.texture.pmremVersion=g.pmremVersion,i.set(g,y),g.addEventListener("dispose",_),y.texture):null}}}return g}function h(g,M){return M===Rd?g.mapping=js:M===Cd&&(g.mapping=to),g}function m(g){let M=0;const b=6;for(let w=0;w<b;w++)g[w]!==void 0&&M++;return M===b}function p(g){const M=g.target;M.removeEventListener("dispose",p);const b=e.get(M);b!==void 0&&(e.delete(M),b.dispose())}function _(g){const M=g.target;M.removeEventListener("dispose",_);const b=i.get(M);b!==void 0&&(i.delete(M),b.dispose())}function x(){e=new WeakMap,i=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:l,dispose:x}}function nT(r){const e={};function i(s){if(e[s]!==void 0)return e[s];const l=r.getExtension(s);return e[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&jr("WebGLRenderer: "+s+" extension not supported."),l}}}function iT(r,e,i,s){const l={},c=new WeakMap;function f(x){const g=x.target;g.index!==null&&e.remove(g.index);for(const b in g.attributes)e.remove(g.attributes[b]);g.removeEventListener("dispose",f),delete l[g.id];const M=c.get(g);M&&(e.remove(M),c.delete(g)),s.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,i.memory.geometries--}function h(x,g){return l[g.id]===!0||(g.addEventListener("dispose",f),l[g.id]=!0,i.memory.geometries++),g}function m(x){const g=x.attributes;for(const M in g)e.update(g[M],r.ARRAY_BUFFER)}function p(x){const g=[],M=x.index,b=x.attributes.position;let w=0;if(b===void 0)return;if(M!==null){const I=M.array;w=M.version;for(let B=0,C=I.length;B<C;B+=3){const O=I[B+0],N=I[B+1],P=I[B+2];g.push(O,N,N,P,P,O)}}else{const I=b.array;w=b.version;for(let B=0,C=I.length/3-1;B<C;B+=3){const O=B+0,N=B+1,P=B+2;g.push(O,N,N,P,P,O)}}const y=new(b.count>=65535?Vv:Gv)(g,1);y.version=w;const S=c.get(x);S&&e.remove(S),c.set(x,y)}function _(x){const g=c.get(x);if(g){const M=x.index;M!==null&&g.version<M.version&&p(x)}else p(x);return c.get(x)}return{get:h,update:m,getWireframeAttribute:_}}function aT(r,e,i){let s;function l(x){s=x}let c,f;function h(x){c=x.type,f=x.bytesPerElement}function m(x,g){r.drawElements(s,g,c,x*f),i.update(g,s,1)}function p(x,g,M){M!==0&&(r.drawElementsInstanced(s,g,c,x*f,M),i.update(g,s,M))}function _(x,g,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,g,0,c,x,0,M);let w=0;for(let y=0;y<M;y++)w+=g[y];i.update(w,s,1)}this.setMode=l,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=_}function sT(r){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,f,h){switch(i.calls++,f){case r.TRIANGLES:i.triangles+=h*(c/3);break;case r.LINES:i.lines+=h*(c/2);break;case r.LINE_STRIP:i.lines+=h*(c-1);break;case r.LINE_LOOP:i.lines+=h*c;break;case r.POINTS:i.points+=h*c;break;default:Nt("WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:s}}function rT(r,e,i){const s=new WeakMap,l=new cn;function c(f,h,m){const p=f.morphTargetInfluences,_=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,x=_!==void 0?_.length:0;let g=s.get(h);if(g===void 0||g.count!==x){let Y=function(){T.dispose(),s.delete(h),h.removeEventListener("dispose",Y)};var M=Y;g!==void 0&&g.texture.dispose();const b=h.morphAttributes.position!==void 0,w=h.morphAttributes.normal!==void 0,y=h.morphAttributes.color!==void 0,S=h.morphAttributes.position||[],I=h.morphAttributes.normal||[],B=h.morphAttributes.color||[];let C=0;b===!0&&(C=1),w===!0&&(C=2),y===!0&&(C=3);let O=h.attributes.position.count*C,N=1;O>e.maxTextureSize&&(N=Math.ceil(O/e.maxTextureSize),O=e.maxTextureSize);const P=new Float32Array(O*N*4*x),T=new Bv(P,O,N,x);T.type=$i,T.needsUpdate=!0;const L=C*4;for(let G=0;G<x;G++){const j=S[G],pe=I[G],de=B[G],J=O*N*4*G;for(let F=0;F<j.count;F++){const H=F*L;b===!0&&(l.fromBufferAttribute(j,F),P[J+H+0]=l.x,P[J+H+1]=l.y,P[J+H+2]=l.z,P[J+H+3]=0),w===!0&&(l.fromBufferAttribute(pe,F),P[J+H+4]=l.x,P[J+H+5]=l.y,P[J+H+6]=l.z,P[J+H+7]=0),y===!0&&(l.fromBufferAttribute(de,F),P[J+H+8]=l.x,P[J+H+9]=l.y,P[J+H+10]=l.z,P[J+H+11]=de.itemSize===4?l.w:1)}}g={count:x,texture:T,size:new Ft(O,N)},s.set(h,g),h.addEventListener("dispose",Y)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",f.morphTexture,i);else{let b=0;for(let y=0;y<p.length;y++)b+=p[y];const w=h.morphTargetsRelative?1:1-b;m.getUniforms().setValue(r,"morphTargetBaseInfluence",w),m.getUniforms().setValue(r,"morphTargetInfluences",p)}m.getUniforms().setValue(r,"morphTargetsTexture",g.texture,i),m.getUniforms().setValue(r,"morphTargetsTextureSize",g.size)}return{update:c}}function oT(r,e,i,s,l){let c=new WeakMap;function f(p){const _=l.render.frame,x=p.geometry,g=e.get(p,x);if(c.get(g)!==_&&(e.update(g),c.set(g,_)),p.isInstancedMesh&&(p.hasEventListener("dispose",m)===!1&&p.addEventListener("dispose",m),c.get(p)!==_&&(i.update(p.instanceMatrix,r.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,r.ARRAY_BUFFER),c.set(p,_))),p.isSkinnedMesh){const M=p.skeleton;c.get(M)!==_&&(M.update(),c.set(M,_))}return g}function h(){c=new WeakMap}function m(p){const _=p.target;_.removeEventListener("dispose",m),s.releaseStatesOfObject(_),i.remove(_.instanceMatrix),_.instanceColor!==null&&i.remove(_.instanceColor)}return{update:f,dispose:h}}const lT={[yv]:"LINEAR_TONE_MAPPING",[Ev]:"REINHARD_TONE_MAPPING",[bv]:"CINEON_TONE_MAPPING",[Tv]:"ACES_FILMIC_TONE_MAPPING",[Rv]:"AGX_TONE_MAPPING",[Cv]:"NEUTRAL_TONE_MAPPING",[Av]:"CUSTOM_TONE_MAPPING"};function cT(r,e,i,s,l,c){const f=new ia(e,i,{type:r,depthBuffer:l,stencilBuffer:c,samples:s?4:0,depthTexture:l?new no(e,i):void 0}),h=new ia(e,i,{type:Pa,depthBuffer:!1,stencilBuffer:!1}),m=new Di;m.setAttribute("position",new Ci([-1,3,0,-1,-1,0,3,-1,0],3)),m.setAttribute("uv",new Ci([0,2,0,0,2,0],2));const p=new iE({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),_=new wi(m,p),x=new Kv(-1,1,1,-1,0,1);let g=null,M=null,b=!1,w,y=null,S=[],I=!1;this.setSize=function(B,C){f.setSize(B,C),h.setSize(B,C);for(let O=0;O<S.length;O++){const N=S[O];N.setSize&&N.setSize(B,C)}},this.setEffects=function(B){S=B,I=S.length>0&&S[0].isRenderPass===!0;const C=f.width,O=f.height;for(let N=0;N<S.length;N++){const P=S[N];P.setSize&&P.setSize(C,O)}},this.begin=function(B,C){if(b||B.toneMapping===na&&S.length===0)return!1;if(y=C,C!==null){const O=C.width,N=C.height;(f.width!==O||f.height!==N)&&this.setSize(O,N)}return I===!1&&B.setRenderTarget(f),w=B.toneMapping,B.toneMapping=na,!0},this.hasRenderPass=function(){return I},this.end=function(B,C){B.toneMapping=w,b=!0;let O=f,N=h;for(let P=0;P<S.length;P++){const T=S[P];if(T.enabled!==!1&&(T.render(B,N,O,C),T.needsSwap!==!1)){const L=O;O=N,N=L}}if(g!==B.outputColorSpace||M!==B.toneMapping){g=B.outputColorSpace,M=B.toneMapping,p.defines={},Rt.getTransfer(g)===qt&&(p.defines.SRGB_TRANSFER="");const P=lT[M];P&&(p.defines[P]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=O.texture,B.setRenderTarget(y),B.render(_,x),y=null,b=!1},this.isCompositing=function(){return b},this.dispose=function(){f.depthTexture&&f.depthTexture.dispose(),f.dispose(),h.dispose(),m.dispose(),p.dispose()}}const $v=new Vn,Jh=new no(1,1),ex=new Bv,tx=new Uy,nx=new Xv,j_=[],J_=[],$_=new Float32Array(16),ev=new Float32Array(9),tv=new Float32Array(4);function ro(r,e,i){const s=r[0];if(s<=0||s>0)return r;const l=e*i;let c=j_[l];if(c===void 0&&(c=new Float32Array(l),j_[l]=c),e!==0){s.toArray(c,0);for(let f=1,h=0;f!==e;++f)h+=i,r[f].toArray(c,h)}return c}function An(r,e){if(r.length!==e.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==e[i])return!1;return!0}function Rn(r,e){for(let i=0,s=e.length;i<s;i++)r[i]=e[i]}function hu(r,e){let i=J_[e];i===void 0&&(i=new Int32Array(e),J_[e]=i);for(let s=0;s!==e;++s)i[s]=r.allocateTextureUnit();return i}function uT(r,e){const i=this.cache;i[0]!==e&&(r.uniform1f(this.addr,e),i[0]=e)}function fT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(An(i,e))return;r.uniform2fv(this.addr,e),Rn(i,e)}}function dT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(An(i,e))return;r.uniform3fv(this.addr,e),Rn(i,e)}}function hT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(An(i,e))return;r.uniform4fv(this.addr,e),Rn(i,e)}}function pT(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(An(i,e))return;r.uniformMatrix2fv(this.addr,!1,e),Rn(i,e)}else{if(An(i,s))return;tv.set(s),r.uniformMatrix2fv(this.addr,!1,tv),Rn(i,s)}}function mT(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(An(i,e))return;r.uniformMatrix3fv(this.addr,!1,e),Rn(i,e)}else{if(An(i,s))return;ev.set(s),r.uniformMatrix3fv(this.addr,!1,ev),Rn(i,s)}}function gT(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(An(i,e))return;r.uniformMatrix4fv(this.addr,!1,e),Rn(i,e)}else{if(An(i,s))return;$_.set(s),r.uniformMatrix4fv(this.addr,!1,$_),Rn(i,s)}}function _T(r,e){const i=this.cache;i[0]!==e&&(r.uniform1i(this.addr,e),i[0]=e)}function vT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(An(i,e))return;r.uniform2iv(this.addr,e),Rn(i,e)}}function xT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(An(i,e))return;r.uniform3iv(this.addr,e),Rn(i,e)}}function ST(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(An(i,e))return;r.uniform4iv(this.addr,e),Rn(i,e)}}function MT(r,e){const i=this.cache;i[0]!==e&&(r.uniform1ui(this.addr,e),i[0]=e)}function yT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(An(i,e))return;r.uniform2uiv(this.addr,e),Rn(i,e)}}function ET(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(An(i,e))return;r.uniform3uiv(this.addr,e),Rn(i,e)}}function bT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(An(i,e))return;r.uniform4uiv(this.addr,e),Rn(i,e)}}function TT(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(Jh.compareFunction=i.isReversedDepthBuffer()?up:cp,c=Jh):c=$v,i.setTexture2D(e||c,l)}function AT(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(e||tx,l)}function RT(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(e||nx,l)}function CT(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(e||ex,l)}function wT(r){switch(r){case 5126:return uT;case 35664:return fT;case 35665:return dT;case 35666:return hT;case 35674:return pT;case 35675:return mT;case 35676:return gT;case 5124:case 35670:return _T;case 35667:case 35671:return vT;case 35668:case 35672:return xT;case 35669:case 35673:return ST;case 5125:return MT;case 36294:return yT;case 36295:return ET;case 36296:return bT;case 35678:case 36198:case 36298:case 36306:case 35682:return TT;case 35679:case 36299:case 36307:return AT;case 35680:case 36300:case 36308:case 36293:return RT;case 36289:case 36303:case 36311:case 36292:return CT}}function DT(r,e){r.uniform1fv(this.addr,e)}function UT(r,e){const i=ro(e,this.size,2);r.uniform2fv(this.addr,i)}function NT(r,e){const i=ro(e,this.size,3);r.uniform3fv(this.addr,i)}function LT(r,e){const i=ro(e,this.size,4);r.uniform4fv(this.addr,i)}function OT(r,e){const i=ro(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function PT(r,e){const i=ro(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function IT(r,e){const i=ro(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function FT(r,e){r.uniform1iv(this.addr,e)}function BT(r,e){r.uniform2iv(this.addr,e)}function zT(r,e){r.uniform3iv(this.addr,e)}function HT(r,e){r.uniform4iv(this.addr,e)}function GT(r,e){r.uniform1uiv(this.addr,e)}function VT(r,e){r.uniform2uiv(this.addr,e)}function kT(r,e){r.uniform3uiv(this.addr,e)}function XT(r,e){r.uniform4uiv(this.addr,e)}function WT(r,e,i){const s=this.cache,l=e.length,c=hu(i,l);An(s,c)||(r.uniform1iv(this.addr,c),Rn(s,c));let f;this.type===r.SAMPLER_2D_SHADOW?f=Jh:f=$v;for(let h=0;h!==l;++h)i.setTexture2D(e[h]||f,c[h])}function qT(r,e,i){const s=this.cache,l=e.length,c=hu(i,l);An(s,c)||(r.uniform1iv(this.addr,c),Rn(s,c));for(let f=0;f!==l;++f)i.setTexture3D(e[f]||tx,c[f])}function YT(r,e,i){const s=this.cache,l=e.length,c=hu(i,l);An(s,c)||(r.uniform1iv(this.addr,c),Rn(s,c));for(let f=0;f!==l;++f)i.setTextureCube(e[f]||nx,c[f])}function ZT(r,e,i){const s=this.cache,l=e.length,c=hu(i,l);An(s,c)||(r.uniform1iv(this.addr,c),Rn(s,c));for(let f=0;f!==l;++f)i.setTexture2DArray(e[f]||ex,c[f])}function KT(r){switch(r){case 5126:return DT;case 35664:return UT;case 35665:return NT;case 35666:return LT;case 35674:return OT;case 35675:return PT;case 35676:return IT;case 5124:case 35670:return FT;case 35667:case 35671:return BT;case 35668:case 35672:return zT;case 35669:case 35673:return HT;case 5125:return GT;case 36294:return VT;case 36295:return kT;case 36296:return XT;case 35678:case 36198:case 36298:case 36306:case 35682:return WT;case 35679:case 36299:case 36307:return qT;case 35680:case 36300:case 36308:case 36293:return YT;case 36289:case 36303:case 36311:case 36292:return ZT}}class QT{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.setValue=wT(i.type)}}class jT{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=KT(i.type)}}class JT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,s){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const h=l[c];h.setValue(e,i[h.id],s)}}}const sh=/(\w+)(\])?(\[|\.)?/g;function nv(r,e){r.seq.push(e),r.map[e.id]=e}function $T(r,e,i){const s=r.name,l=s.length;for(sh.lastIndex=0;;){const c=sh.exec(s),f=sh.lastIndex;let h=c[1];const m=c[2]==="]",p=c[3];if(m&&(h=h|0),p===void 0||p==="["&&f+2===l){nv(i,p===void 0?new QT(h,r,e):new jT(h,r,e));break}else{let x=i.map[h];x===void 0&&(x=new JT(h),nv(i,x)),i=x}}}class tu{constructor(e,i){this.seq=[],this.map={};const s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let f=0;f<s;++f){const h=e.getActiveUniform(i,f),m=e.getUniformLocation(i,h.name);$T(h,m,this)}const l=[],c=[];for(const f of this.seq)f.type===e.SAMPLER_2D_SHADOW||f.type===e.SAMPLER_CUBE_SHADOW||f.type===e.SAMPLER_2D_ARRAY_SHADOW?l.push(f):c.push(f);l.length>0&&(this.seq=l.concat(c))}setValue(e,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(e,s,l)}setOptional(e,i,s){const l=i[s];l!==void 0&&this.setValue(e,s,l)}static upload(e,i,s,l){for(let c=0,f=i.length;c!==f;++c){const h=i[c],m=s[h.id];m.needsUpdate!==!1&&h.setValue(e,m.value,l)}}static seqWithValue(e,i){const s=[];for(let l=0,c=e.length;l!==c;++l){const f=e[l];f.id in i&&s.push(f)}return s}}function iv(r,e,i){const s=r.createShader(e);return r.shaderSource(s,i),r.compileShader(s),s}const eA=37297;let tA=0;function nA(r,e){const i=r.split(`
`),s=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let f=l;f<c;f++){const h=f+1;s.push(`${h===e?">":" "} ${h}: ${i[f]}`)}return s.join(`
`)}const av=new lt;function iA(r){Rt._getMatrix(av,Rt.workingColorSpace,r);const e=`mat3( ${av.elements.map(i=>i.toFixed(4))} )`;switch(Rt.getTransfer(r)){case su:return[e,"LinearTransferOETF"];case qt:return[e,"sRGBTransferOETF"];default:return st("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function sv(r,e,i){const s=r.getShaderParameter(e,r.COMPILE_STATUS),c=(r.getShaderInfoLog(e)||"").trim();if(s&&c==="")return"";const f=/ERROR: 0:(\d+)/.exec(c);if(f){const h=parseInt(f[1]);return i.toUpperCase()+`

`+c+`

`+nA(r.getShaderSource(e),h)}else return c}function aA(r,e){const i=iA(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const sA={[yv]:"Linear",[Ev]:"Reinhard",[bv]:"Cineon",[Tv]:"ACESFilmic",[Rv]:"AgX",[Cv]:"Neutral",[Av]:"Custom"};function rA(r,e){const i=sA[e];return i===void 0?(st("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Zc=new $;function oA(){Rt.getLuminanceCoefficients(Zc);const r=Zc.x.toFixed(4),e=Zc.y.toFixed(4),i=Zc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function lA(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(rl).join(`
`)}function cA(r){const e=[];for(const i in r){const s=r[i];s!==!1&&e.push("#define "+i+" "+s)}return e.join(`
`)}function uA(r,e){const i={},s=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(e,l),f=c.name;let h=1;c.type===r.FLOAT_MAT2&&(h=2),c.type===r.FLOAT_MAT3&&(h=3),c.type===r.FLOAT_MAT4&&(h=4),i[f]={type:c.type,location:r.getAttribLocation(e,f),locationSize:h}}return i}function rl(r){return r!==""}function rv(r,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ov(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const fA=/^[ \t]*#include +<([\w\d./]+)>/gm;function $h(r){return r.replace(fA,hA)}const dA=new Map;function hA(r,e){let i=mt[e];if(i===void 0){const s=dA.get(e);if(s!==void 0)i=mt[s],st('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return $h(i)}const pA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function lv(r){return r.replace(pA,mA)}function mA(r,e,i,s){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function cv(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const gA={[Qc]:"SHADOWMAP_TYPE_PCF",[al]:"SHADOWMAP_TYPE_VSM"};function _A(r){return gA[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const vA={[js]:"ENVMAP_TYPE_CUBE",[to]:"ENVMAP_TYPE_CUBE",[uu]:"ENVMAP_TYPE_CUBE_UV"};function xA(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":vA[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const SA={[to]:"ENVMAP_MODE_REFRACTION"};function MA(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":SA[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const yA={[Mv]:"ENVMAP_BLENDING_MULTIPLY",[KM]:"ENVMAP_BLENDING_MIX",[QM]:"ENVMAP_BLENDING_ADD"};function EA(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":yA[r.combine]||"ENVMAP_BLENDING_NONE"}function bA(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function TA(r,e,i,s){const l=r.getContext(),c=i.defines;let f=i.vertexShader,h=i.fragmentShader;const m=_A(i),p=xA(i),_=MA(i),x=EA(i),g=bA(i),M=lA(i),b=cA(c),w=l.createProgram();let y,S,I=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(rl).join(`
`),y.length>0&&(y+=`
`),S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(rl).join(`
`),S.length>0&&(S+=`
`)):(y=[cv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(rl).join(`
`),S=[cv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+_:"",i.envMap?"#define "+x:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==na?"#define TONE_MAPPING":"",i.toneMapping!==na?mt.tonemapping_pars_fragment:"",i.toneMapping!==na?rA("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",mt.colorspace_pars_fragment,aA("linearToOutputTexel",i.outputColorSpace),oA(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(rl).join(`
`)),f=$h(f),f=rv(f,i),f=ov(f,i),h=$h(h),h=rv(h,i),h=ov(h,i),f=lv(f),h=lv(h),i.isRawShaderMaterial!==!0&&(I=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,S=["#define varying in",i.glslVersion===S_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===S_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const B=I+y+f,C=I+S+h,O=iv(l,l.VERTEX_SHADER,B),N=iv(l,l.FRAGMENT_SHADER,C);l.attachShader(w,O),l.attachShader(w,N),i.index0AttributeName!==void 0?l.bindAttribLocation(w,0,i.index0AttributeName):i.hasPositionAttribute===!0&&l.bindAttribLocation(w,0,"position"),l.linkProgram(w);function P(G){if(r.debug.checkShaderErrors){const j=l.getProgramInfoLog(w)||"",pe=l.getShaderInfoLog(O)||"",de=l.getShaderInfoLog(N)||"",J=j.trim(),F=pe.trim(),H=de.trim();let ee=!0,_e=!0;if(l.getProgramParameter(w,l.LINK_STATUS)===!1)if(ee=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,w,O,N);else{const be=sv(l,O,"vertex"),U=sv(l,N,"fragment");Nt("WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(w,l.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+J+`
`+be+`
`+U)}else J!==""?st("WebGLProgram: Program Info Log:",J):(F===""||H==="")&&(_e=!1);_e&&(G.diagnostics={runnable:ee,programLog:J,vertexShader:{log:F,prefix:y},fragmentShader:{log:H,prefix:S}})}l.deleteShader(O),l.deleteShader(N),T=new tu(l,w),L=uA(l,w)}let T;this.getUniforms=function(){return T===void 0&&P(this),T};let L;this.getAttributes=function(){return L===void 0&&P(this),L};let Y=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return Y===!1&&(Y=l.getProgramParameter(w,eA)),Y},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(w),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=tA++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=O,this.fragmentShader=N,this}let AA=0;class RA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,i,s){const l=this._getShaderCacheForMaterial(e);return l.has(i)===!1&&(l.add(i),i.usedTimes++),l.has(s)===!1&&(l.add(s),s.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let s=i.get(e);return s===void 0&&(s=new Set,i.set(e,s)),s}_getShaderStage(e){const i=this.shaderCache;let s=i.get(e);return s===void 0&&(s=new CA(e),i.set(e,s)),s}}class CA{constructor(e){this.id=AA++,this.code=e,this.usedTimes=0}}function wA(r){return r===Js||r===nu||r===iu}function DA(r,e,i,s,l,c){const f=new zv,h=new RA,m=new Set,p=[],_=new Map,x=s.logarithmicDepthBuffer;let g=s.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(T){return m.add(T),T===0?"uv":`uv${T}`}function w(T,L,Y,G,j,pe){const de=G.fog,J=j.geometry,F=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?G.environment:null,H=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,ee=e.get(T.envMap||F,H),_e=ee&&ee.mapping===uu?ee.image.height:null,be=M[T.type];T.precision!==null&&(g=s.getMaxPrecision(T.precision),g!==T.precision&&st("WebGLProgram.getParameters:",T.precision,"not supported, using",g,"instead."));const U=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Z=U!==void 0?U.length:0;let Ee=0;J.morphAttributes.position!==void 0&&(Ee=1),J.morphAttributes.normal!==void 0&&(Ee=2),J.morphAttributes.color!==void 0&&(Ee=3);let Ce,Le,ie,Se;if(be){const He=ji[be];Ce=He.vertexShader,Le=He.fragmentShader}else{Ce=T.vertexShader,Le=T.fragmentShader;const He=h.getVertexShaderStage(T),Ht=h.getFragmentShaderStage(T);h.update(T,He,Ht),ie=He.id,Se=Ht.id}const Me=r.getRenderTarget(),ze=r.state.buffers.depth.getReversed(),nt=j.isInstancedMesh===!0,je=j.isBatchedMesh===!0,Yt=!!T.map,ct=!!T.matcap,_t=!!ee,Ye=!!T.aoMap,Ze=!!T.lightMap,rt=!!T.bumpMap&&T.wireframe===!1,pt=!!T.normalMap,Ct=!!T.displacementMap,wt=!!T.emissiveMap,ut=!!T.metalnessMap,gt=!!T.roughnessMap,k=T.anisotropy>0,St=T.clearcoat>0,vt=T.dispersion>0,D=T.iridescence>0,E=T.sheen>0,Q=T.transmission>0,te=k&&!!T.anisotropyMap,ue=St&&!!T.clearcoatMap,Re=St&&!!T.clearcoatNormalMap,De=St&&!!T.clearcoatRoughnessMap,fe=D&&!!T.iridescenceMap,he=D&&!!T.iridescenceThicknessMap,Te=E&&!!T.sheenColorMap,Be=E&&!!T.sheenRoughnessMap,Ue=!!T.specularMap,Ne=!!T.specularColorMap,Je=!!T.specularIntensityMap,Ke=Q&&!!T.transmissionMap,at=Q&&!!T.thicknessMap,X=!!T.gradientMap,Ae=!!T.alphaMap,me=T.alphaTest>0,we=!!T.alphaHash,Pe=!!T.extensions;let ye=na;T.toneMapped&&(Me===null||Me.isXRRenderTarget===!0)&&(ye=r.toneMapping);const Xe={shaderID:be,shaderType:T.type,shaderName:T.name,vertexShader:Ce,fragmentShader:Le,defines:T.defines,customVertexShaderID:ie,customFragmentShaderID:Se,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:g,batching:je,batchingColor:je&&j._colorsTexture!==null,instancing:nt,instancingColor:nt&&j.instanceColor!==null,instancingMorph:nt&&j.morphTexture!==null,outputColorSpace:Me===null?r.outputColorSpace:Me.isXRRenderTarget===!0?Me.texture.colorSpace:Rt.workingColorSpace,alphaToCoverage:!!T.alphaToCoverage,map:Yt,matcap:ct,envMap:_t,envMapMode:_t&&ee.mapping,envMapCubeUVHeight:_e,aoMap:Ye,lightMap:Ze,bumpMap:rt,normalMap:pt,displacementMap:Ct,emissiveMap:wt,normalMapObjectSpace:pt&&T.normalMapType===$M,normalMapTangentSpace:pt&&T.normalMapType===__,packedNormalMap:pt&&T.normalMapType===__&&wA(T.normalMap.format),metalnessMap:ut,roughnessMap:gt,anisotropy:k,anisotropyMap:te,clearcoat:St,clearcoatMap:ue,clearcoatNormalMap:Re,clearcoatRoughnessMap:De,dispersion:vt,iridescence:D,iridescenceMap:fe,iridescenceThicknessMap:he,sheen:E,sheenColorMap:Te,sheenRoughnessMap:Be,specularMap:Ue,specularColorMap:Ne,specularIntensityMap:Je,transmission:Q,transmissionMap:Ke,thicknessMap:at,gradientMap:X,opaque:T.transparent===!1&&T.blending===Qr&&T.alphaToCoverage===!1,alphaMap:Ae,alphaTest:me,alphaHash:we,combine:T.combine,mapUv:Yt&&b(T.map.channel),aoMapUv:Ye&&b(T.aoMap.channel),lightMapUv:Ze&&b(T.lightMap.channel),bumpMapUv:rt&&b(T.bumpMap.channel),normalMapUv:pt&&b(T.normalMap.channel),displacementMapUv:Ct&&b(T.displacementMap.channel),emissiveMapUv:wt&&b(T.emissiveMap.channel),metalnessMapUv:ut&&b(T.metalnessMap.channel),roughnessMapUv:gt&&b(T.roughnessMap.channel),anisotropyMapUv:te&&b(T.anisotropyMap.channel),clearcoatMapUv:ue&&b(T.clearcoatMap.channel),clearcoatNormalMapUv:Re&&b(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:De&&b(T.clearcoatRoughnessMap.channel),iridescenceMapUv:fe&&b(T.iridescenceMap.channel),iridescenceThicknessMapUv:he&&b(T.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&b(T.sheenColorMap.channel),sheenRoughnessMapUv:Be&&b(T.sheenRoughnessMap.channel),specularMapUv:Ue&&b(T.specularMap.channel),specularColorMapUv:Ne&&b(T.specularColorMap.channel),specularIntensityMapUv:Je&&b(T.specularIntensityMap.channel),transmissionMapUv:Ke&&b(T.transmissionMap.channel),thicknessMapUv:at&&b(T.thicknessMap.channel),alphaMapUv:Ae&&b(T.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(pt||k),vertexNormals:!!J.attributes.normal,vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:j.isPoints===!0&&!!J.attributes.uv&&(Yt||Ae),fog:!!de,useFog:T.fog===!0,fogExp2:!!de&&de.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||J.attributes.normal===void 0&&pt===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:ze,skinning:j.isSkinnedMesh===!0,hasPositionAttribute:J.attributes.position!==void 0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:Z,morphTextureStride:Ee,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numLightProbes:L.numLightProbes,numLightProbeGrids:pe.length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:T.dithering,shadowMapEnabled:r.shadowMap.enabled&&Y.length>0,shadowMapType:r.shadowMap.type,toneMapping:ye,decodeVideoTexture:Yt&&T.map.isVideoTexture===!0&&Rt.getTransfer(T.map.colorSpace)===qt,decodeVideoTextureEmissive:wt&&T.emissiveMap.isVideoTexture===!0&&Rt.getTransfer(T.emissiveMap.colorSpace)===qt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Ji,flipSided:T.side===ii,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Pe&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Pe&&T.extensions.multiDraw===!0||je)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Xe.vertexUv1s=m.has(1),Xe.vertexUv2s=m.has(2),Xe.vertexUv3s=m.has(3),m.clear(),Xe}function y(T){const L=[];if(T.shaderID?L.push(T.shaderID):(L.push(T.customVertexShaderID),L.push(T.customFragmentShaderID)),T.defines!==void 0)for(const Y in T.defines)L.push(Y),L.push(T.defines[Y]);return T.isRawShaderMaterial===!1&&(S(L,T),I(L,T),L.push(r.outputColorSpace)),L.push(T.customProgramCacheKey),L.join()}function S(T,L){T.push(L.precision),T.push(L.outputColorSpace),T.push(L.envMapMode),T.push(L.envMapCubeUVHeight),T.push(L.mapUv),T.push(L.alphaMapUv),T.push(L.lightMapUv),T.push(L.aoMapUv),T.push(L.bumpMapUv),T.push(L.normalMapUv),T.push(L.displacementMapUv),T.push(L.emissiveMapUv),T.push(L.metalnessMapUv),T.push(L.roughnessMapUv),T.push(L.anisotropyMapUv),T.push(L.clearcoatMapUv),T.push(L.clearcoatNormalMapUv),T.push(L.clearcoatRoughnessMapUv),T.push(L.iridescenceMapUv),T.push(L.iridescenceThicknessMapUv),T.push(L.sheenColorMapUv),T.push(L.sheenRoughnessMapUv),T.push(L.specularMapUv),T.push(L.specularColorMapUv),T.push(L.specularIntensityMapUv),T.push(L.transmissionMapUv),T.push(L.thicknessMapUv),T.push(L.combine),T.push(L.fogExp2),T.push(L.sizeAttenuation),T.push(L.morphTargetsCount),T.push(L.morphAttributeCount),T.push(L.numDirLights),T.push(L.numPointLights),T.push(L.numSpotLights),T.push(L.numSpotLightMaps),T.push(L.numHemiLights),T.push(L.numRectAreaLights),T.push(L.numDirLightShadows),T.push(L.numPointLightShadows),T.push(L.numSpotLightShadows),T.push(L.numSpotLightShadowsWithMaps),T.push(L.numLightProbes),T.push(L.shadowMapType),T.push(L.toneMapping),T.push(L.numClippingPlanes),T.push(L.numClipIntersection),T.push(L.depthPacking)}function I(T,L){f.disableAll(),L.instancing&&f.enable(0),L.instancingColor&&f.enable(1),L.instancingMorph&&f.enable(2),L.matcap&&f.enable(3),L.envMap&&f.enable(4),L.normalMapObjectSpace&&f.enable(5),L.normalMapTangentSpace&&f.enable(6),L.clearcoat&&f.enable(7),L.iridescence&&f.enable(8),L.alphaTest&&f.enable(9),L.vertexColors&&f.enable(10),L.vertexAlphas&&f.enable(11),L.vertexUv1s&&f.enable(12),L.vertexUv2s&&f.enable(13),L.vertexUv3s&&f.enable(14),L.vertexTangents&&f.enable(15),L.anisotropy&&f.enable(16),L.alphaHash&&f.enable(17),L.batching&&f.enable(18),L.dispersion&&f.enable(19),L.batchingColor&&f.enable(20),L.gradientMap&&f.enable(21),L.packedNormalMap&&f.enable(22),L.vertexNormals&&f.enable(23),T.push(f.mask),f.disableAll(),L.fog&&f.enable(0),L.useFog&&f.enable(1),L.flatShading&&f.enable(2),L.logarithmicDepthBuffer&&f.enable(3),L.reversedDepthBuffer&&f.enable(4),L.skinning&&f.enable(5),L.morphTargets&&f.enable(6),L.morphNormals&&f.enable(7),L.morphColors&&f.enable(8),L.premultipliedAlpha&&f.enable(9),L.shadowMapEnabled&&f.enable(10),L.doubleSided&&f.enable(11),L.flipSided&&f.enable(12),L.useDepthPacking&&f.enable(13),L.dithering&&f.enable(14),L.transmission&&f.enable(15),L.sheen&&f.enable(16),L.opaque&&f.enable(17),L.pointsUvs&&f.enable(18),L.decodeVideoTexture&&f.enable(19),L.decodeVideoTextureEmissive&&f.enable(20),L.alphaToCoverage&&f.enable(21),L.numLightProbeGrids>0&&f.enable(22),L.hasPositionAttribute&&f.enable(23),T.push(f.mask)}function B(T){const L=M[T.type];let Y;if(L){const G=ji[L];Y=eE.clone(G.uniforms)}else Y=T.uniforms;return Y}function C(T,L){let Y=_.get(L);return Y!==void 0?++Y.usedTimes:(Y=new TA(r,L,T,l),p.push(Y),_.set(L,Y)),Y}function O(T){if(--T.usedTimes===0){const L=p.indexOf(T);p[L]=p[p.length-1],p.pop(),_.delete(T.cacheKey),T.destroy()}}function N(T){h.remove(T)}function P(){h.dispose()}return{getParameters:w,getProgramCacheKey:y,getUniforms:B,acquireProgram:C,releaseProgram:O,releaseShaderCache:N,programs:p,dispose:P}}function UA(){let r=new WeakMap;function e(f){return r.has(f)}function i(f){let h=r.get(f);return h===void 0&&(h={},r.set(f,h)),h}function s(f){r.delete(f)}function l(f,h,m){r.get(f)[h]=m}function c(){r=new WeakMap}return{has:e,get:i,remove:s,update:l,dispose:c}}function NA(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function uv(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function fv(){const r=[];let e=0;const i=[],s=[],l=[];function c(){e=0,i.length=0,s.length=0,l.length=0}function f(g){let M=0;return g.isInstancedMesh&&(M+=2),g.isSkinnedMesh&&(M+=1),M}function h(g,M,b,w,y,S){let I=r[e];return I===void 0?(I={id:g.id,object:g,geometry:M,material:b,materialVariant:f(g),groupOrder:w,renderOrder:g.renderOrder,z:y,group:S},r[e]=I):(I.id=g.id,I.object=g,I.geometry=M,I.material=b,I.materialVariant=f(g),I.groupOrder=w,I.renderOrder=g.renderOrder,I.z=y,I.group=S),e++,I}function m(g,M,b,w,y,S){const I=h(g,M,b,w,y,S);b.transmission>0?s.push(I):b.transparent===!0?l.push(I):i.push(I)}function p(g,M,b,w,y,S){const I=h(g,M,b,w,y,S);b.transmission>0?s.unshift(I):b.transparent===!0?l.unshift(I):i.unshift(I)}function _(g,M,b){i.length>1&&i.sort(g||NA),s.length>1&&s.sort(M||uv),l.length>1&&l.sort(M||uv),b&&(i.reverse(),s.reverse(),l.reverse())}function x(){for(let g=e,M=r.length;g<M;g++){const b=r[g];if(b.id===null)break;b.id=null,b.object=null,b.geometry=null,b.material=null,b.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:m,unshift:p,finish:x,sort:_}}function LA(){let r=new WeakMap;function e(s,l){const c=r.get(s);let f;return c===void 0?(f=new fv,r.set(s,[f])):l>=c.length?(f=new fv,c.push(f)):f=c[l],f}function i(){r=new WeakMap}return{get:e,dispose:i}}function OA(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new $,color:new Dt};break;case"SpotLight":i={position:new $,direction:new $,color:new Dt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new $,color:new Dt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new $,skyColor:new Dt,groundColor:new Dt};break;case"RectAreaLight":i={color:new Dt,position:new $,halfWidth:new $,halfHeight:new $};break}return r[e.id]=i,i}}}function PA(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=i,i}}}let IA=0;function FA(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function BA(r){const e=new OA,i=PA(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new $);const l=new $,c=new dn,f=new dn;function h(p){let _=0,x=0,g=0;for(let L=0;L<9;L++)s.probe[L].set(0,0,0);let M=0,b=0,w=0,y=0,S=0,I=0,B=0,C=0,O=0,N=0,P=0;p.sort(FA);for(let L=0,Y=p.length;L<Y;L++){const G=p[L],j=G.color,pe=G.intensity,de=G.distance;let J=null;if(G.shadow&&G.shadow.map&&(G.shadow.map.texture.format===Js?J=G.shadow.map.texture:J=G.shadow.map.depthTexture||G.shadow.map.texture),G.isAmbientLight)_+=j.r*pe,x+=j.g*pe,g+=j.b*pe;else if(G.isLightProbe){for(let F=0;F<9;F++)s.probe[F].addScaledVector(G.sh.coefficients[F],pe);P++}else if(G.isDirectionalLight){const F=e.get(G);if(F.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const H=G.shadow,ee=i.get(G);ee.shadowIntensity=H.intensity,ee.shadowBias=H.bias,ee.shadowNormalBias=H.normalBias,ee.shadowRadius=H.radius,ee.shadowMapSize=H.mapSize,s.directionalShadow[M]=ee,s.directionalShadowMap[M]=J,s.directionalShadowMatrix[M]=G.shadow.matrix,I++}s.directional[M]=F,M++}else if(G.isSpotLight){const F=e.get(G);F.position.setFromMatrixPosition(G.matrixWorld),F.color.copy(j).multiplyScalar(pe),F.distance=de,F.coneCos=Math.cos(G.angle),F.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),F.decay=G.decay,s.spot[w]=F;const H=G.shadow;if(G.map&&(s.spotLightMap[O]=G.map,O++,H.updateMatrices(G),G.castShadow&&N++),s.spotLightMatrix[w]=H.matrix,G.castShadow){const ee=i.get(G);ee.shadowIntensity=H.intensity,ee.shadowBias=H.bias,ee.shadowNormalBias=H.normalBias,ee.shadowRadius=H.radius,ee.shadowMapSize=H.mapSize,s.spotShadow[w]=ee,s.spotShadowMap[w]=J,C++}w++}else if(G.isRectAreaLight){const F=e.get(G);F.color.copy(j).multiplyScalar(pe),F.halfWidth.set(G.width*.5,0,0),F.halfHeight.set(0,G.height*.5,0),s.rectArea[y]=F,y++}else if(G.isPointLight){const F=e.get(G);if(F.color.copy(G.color).multiplyScalar(G.intensity),F.distance=G.distance,F.decay=G.decay,G.castShadow){const H=G.shadow,ee=i.get(G);ee.shadowIntensity=H.intensity,ee.shadowBias=H.bias,ee.shadowNormalBias=H.normalBias,ee.shadowRadius=H.radius,ee.shadowMapSize=H.mapSize,ee.shadowCameraNear=H.camera.near,ee.shadowCameraFar=H.camera.far,s.pointShadow[b]=ee,s.pointShadowMap[b]=J,s.pointShadowMatrix[b]=G.shadow.matrix,B++}s.point[b]=F,b++}else if(G.isHemisphereLight){const F=e.get(G);F.skyColor.copy(G.color).multiplyScalar(pe),F.groundColor.copy(G.groundColor).multiplyScalar(pe),s.hemi[S]=F,S++}}y>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Fe.LTC_FLOAT_1,s.rectAreaLTC2=Fe.LTC_FLOAT_2):(s.rectAreaLTC1=Fe.LTC_HALF_1,s.rectAreaLTC2=Fe.LTC_HALF_2)),s.ambient[0]=_,s.ambient[1]=x,s.ambient[2]=g;const T=s.hash;(T.directionalLength!==M||T.pointLength!==b||T.spotLength!==w||T.rectAreaLength!==y||T.hemiLength!==S||T.numDirectionalShadows!==I||T.numPointShadows!==B||T.numSpotShadows!==C||T.numSpotMaps!==O||T.numLightProbes!==P)&&(s.directional.length=M,s.spot.length=w,s.rectArea.length=y,s.point.length=b,s.hemi.length=S,s.directionalShadow.length=I,s.directionalShadowMap.length=I,s.pointShadow.length=B,s.pointShadowMap.length=B,s.spotShadow.length=C,s.spotShadowMap.length=C,s.directionalShadowMatrix.length=I,s.pointShadowMatrix.length=B,s.spotLightMatrix.length=C+O-N,s.spotLightMap.length=O,s.numSpotLightShadowsWithMaps=N,s.numLightProbes=P,T.directionalLength=M,T.pointLength=b,T.spotLength=w,T.rectAreaLength=y,T.hemiLength=S,T.numDirectionalShadows=I,T.numPointShadows=B,T.numSpotShadows=C,T.numSpotMaps=O,T.numLightProbes=P,s.version=IA++)}function m(p,_){let x=0,g=0,M=0,b=0,w=0;const y=_.matrixWorldInverse;for(let S=0,I=p.length;S<I;S++){const B=p[S];if(B.isDirectionalLight){const C=s.directional[x];C.direction.setFromMatrixPosition(B.matrixWorld),l.setFromMatrixPosition(B.target.matrixWorld),C.direction.sub(l),C.direction.transformDirection(y),x++}else if(B.isSpotLight){const C=s.spot[M];C.position.setFromMatrixPosition(B.matrixWorld),C.position.applyMatrix4(y),C.direction.setFromMatrixPosition(B.matrixWorld),l.setFromMatrixPosition(B.target.matrixWorld),C.direction.sub(l),C.direction.transformDirection(y),M++}else if(B.isRectAreaLight){const C=s.rectArea[b];C.position.setFromMatrixPosition(B.matrixWorld),C.position.applyMatrix4(y),f.identity(),c.copy(B.matrixWorld),c.premultiply(y),f.extractRotation(c),C.halfWidth.set(B.width*.5,0,0),C.halfHeight.set(0,B.height*.5,0),C.halfWidth.applyMatrix4(f),C.halfHeight.applyMatrix4(f),b++}else if(B.isPointLight){const C=s.point[g];C.position.setFromMatrixPosition(B.matrixWorld),C.position.applyMatrix4(y),g++}else if(B.isHemisphereLight){const C=s.hemi[w];C.direction.setFromMatrixPosition(B.matrixWorld),C.direction.transformDirection(y),w++}}}return{setup:h,setupView:m,state:s}}function dv(r){const e=new BA(r),i=[],s=[],l=[];function c(g){x.camera=g,i.length=0,s.length=0,l.length=0}function f(g){i.push(g)}function h(g){s.push(g)}function m(g){l.push(g)}function p(){e.setup(i)}function _(g){e.setupView(i,g)}const x={lightsArray:i,shadowsArray:s,lightProbeGridArray:l,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:x,setupLights:p,setupLightsView:_,pushLight:f,pushShadow:h,pushLightProbeGrid:m}}function zA(r){let e=new WeakMap;function i(l,c=0){const f=e.get(l);let h;return f===void 0?(h=new dv(r),e.set(l,[h])):c>=f.length?(h=new dv(r),f.push(h)):h=f[c],h}function s(){e=new WeakMap}return{get:i,dispose:s}}const HA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,GA=`uniform sampler2D shadow_pass;
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
}`,VA=[new $(1,0,0),new $(-1,0,0),new $(0,1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1)],kA=[new $(0,-1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1),new $(0,-1,0),new $(0,-1,0)],hv=new dn,il=new $,rh=new $;function XA(r,e,i){let s=new kv;const l=new Ft,c=new Ft,f=new cn,h=new aE,m=new sE,p={},_=i.maxTextureSize,x={[Oa]:ii,[ii]:Oa,[Ji]:Ji},g=new Vi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ft},radius:{value:4}},vertexShader:HA,fragmentShader:GA}),M=g.clone();M.defines.HORIZONTAL_PASS=1;const b=new Di;b.setAttribute("position",new aa(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new wi(b,g),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Qc;let S=this.type;this.render=function(N,P,T){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||N.length===0)return;this.type===DM&&(st("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Qc);const L=r.getRenderTarget(),Y=r.getActiveCubeFace(),G=r.getActiveMipmapLevel(),j=r.state;j.setBlending(Ua),j.buffers.depth.getReversed()===!0?j.buffers.color.setClear(0,0,0,0):j.buffers.color.setClear(1,1,1,1),j.buffers.depth.setTest(!0),j.setScissorTest(!1);const pe=S!==this.type;pe&&P.traverse(function(de){de.material&&(Array.isArray(de.material)?de.material.forEach(J=>J.needsUpdate=!0):de.material.needsUpdate=!0)});for(let de=0,J=N.length;de<J;de++){const F=N[de],H=F.shadow;if(H===void 0){st("WebGLShadowMap:",F,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;l.copy(H.mapSize);const ee=H.getFrameExtents();l.multiply(ee),c.copy(H.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(c.x=Math.floor(_/ee.x),l.x=c.x*ee.x,H.mapSize.x=c.x),l.y>_&&(c.y=Math.floor(_/ee.y),l.y=c.y*ee.y,H.mapSize.y=c.y));const _e=r.state.buffers.depth.getReversed();if(H.camera._reversedDepth=_e,H.map===null||pe===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===al){if(F.isPointLight){st("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new ia(l.x,l.y,{format:Js,type:Pa,minFilter:yn,magFilter:yn,generateMipmaps:!1}),H.map.texture.name=F.name+".shadowMap",H.map.depthTexture=new no(l.x,l.y,$i),H.map.depthTexture.name=F.name+".shadowMapDepth",H.map.depthTexture.format=Ia,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=In,H.map.depthTexture.magFilter=In}else F.isPointLight?(H.map=new Jv(l.x),H.map.depthTexture=new Qy(l.x,sa)):(H.map=new ia(l.x,l.y),H.map.depthTexture=new no(l.x,l.y,sa)),H.map.depthTexture.name=F.name+".shadowMap",H.map.depthTexture.format=Ia,this.type===Qc?(H.map.depthTexture.compareFunction=_e?up:cp,H.map.depthTexture.minFilter=yn,H.map.depthTexture.magFilter=yn):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=In,H.map.depthTexture.magFilter=In);H.camera.updateProjectionMatrix()}const be=H.map.isWebGLCubeRenderTarget?6:1;for(let U=0;U<be;U++){if(H.map.isWebGLCubeRenderTarget)r.setRenderTarget(H.map,U),r.clear();else{U===0&&(r.setRenderTarget(H.map),r.clear());const Z=H.getViewport(U);f.set(c.x*Z.x,c.y*Z.y,c.x*Z.z,c.y*Z.w),j.viewport(f)}if(F.isPointLight){const Z=H.camera,Ee=H.matrix,Ce=F.distance||Z.far;Ce!==Z.far&&(Z.far=Ce,Z.updateProjectionMatrix()),il.setFromMatrixPosition(F.matrixWorld),Z.position.copy(il),rh.copy(Z.position),rh.add(VA[U]),Z.up.copy(kA[U]),Z.lookAt(rh),Z.updateMatrixWorld(),Ee.makeTranslation(-il.x,-il.y,-il.z),hv.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),H._frustum.setFromProjectionMatrix(hv,Z.coordinateSystem,Z.reversedDepth)}else H.updateMatrices(F);s=H.getFrustum(),C(P,T,H.camera,F,this.type)}H.isPointLightShadow!==!0&&this.type===al&&I(H,T),H.needsUpdate=!1}S=this.type,y.needsUpdate=!1,r.setRenderTarget(L,Y,G)};function I(N,P){const T=e.update(w);g.defines.VSM_SAMPLES!==N.blurSamples&&(g.defines.VSM_SAMPLES=N.blurSamples,M.defines.VSM_SAMPLES=N.blurSamples,g.needsUpdate=!0,M.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new ia(l.x,l.y,{format:Js,type:Pa})),g.uniforms.shadow_pass.value=N.map.depthTexture,g.uniforms.resolution.value=N.mapSize,g.uniforms.radius.value=N.radius,r.setRenderTarget(N.mapPass),r.clear(),r.renderBufferDirect(P,null,T,g,w,null),M.uniforms.shadow_pass.value=N.mapPass.texture,M.uniforms.resolution.value=N.mapSize,M.uniforms.radius.value=N.radius,r.setRenderTarget(N.map),r.clear(),r.renderBufferDirect(P,null,T,M,w,null)}function B(N,P,T,L){let Y=null;const G=T.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(G!==void 0)Y=G;else if(Y=T.isPointLight===!0?m:h,r.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const j=Y.uuid,pe=P.uuid;let de=p[j];de===void 0&&(de={},p[j]=de);let J=de[pe];J===void 0&&(J=Y.clone(),de[pe]=J,P.addEventListener("dispose",O)),Y=J}if(Y.visible=P.visible,Y.wireframe=P.wireframe,L===al?Y.side=P.shadowSide!==null?P.shadowSide:P.side:Y.side=P.shadowSide!==null?P.shadowSide:x[P.side],Y.alphaMap=P.alphaMap,Y.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,Y.map=P.map,Y.clipShadows=P.clipShadows,Y.clippingPlanes=P.clippingPlanes,Y.clipIntersection=P.clipIntersection,Y.displacementMap=P.displacementMap,Y.displacementScale=P.displacementScale,Y.displacementBias=P.displacementBias,Y.wireframeLinewidth=P.wireframeLinewidth,Y.linewidth=P.linewidth,T.isPointLight===!0&&Y.isMeshDistanceMaterial===!0){const j=r.properties.get(Y);j.light=T}return Y}function C(N,P,T,L,Y){if(N.visible===!1)return;if(N.layers.test(P.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&Y===al)&&(!N.frustumCulled||s.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,N.matrixWorld);const pe=e.update(N),de=N.material;if(Array.isArray(de)){const J=pe.groups;for(let F=0,H=J.length;F<H;F++){const ee=J[F],_e=de[ee.materialIndex];if(_e&&_e.visible){const be=B(N,_e,L,Y);N.onBeforeShadow(r,N,P,T,pe,be,ee),r.renderBufferDirect(T,null,pe,be,N,ee),N.onAfterShadow(r,N,P,T,pe,be,ee)}}}else if(de.visible){const J=B(N,de,L,Y);N.onBeforeShadow(r,N,P,T,pe,J,null),r.renderBufferDirect(T,null,pe,J,N,null),N.onAfterShadow(r,N,P,T,pe,J,null)}}const j=N.children;for(let pe=0,de=j.length;pe<de;pe++)C(j[pe],P,T,L,Y)}function O(N){N.target.removeEventListener("dispose",O);for(const T in p){const L=p[T],Y=N.target.uuid;Y in L&&(L[Y].dispose(),delete L[Y])}}}function WA(r,e){function i(){let X=!1;const Ae=new cn;let me=null;const we=new cn(0,0,0,0);return{setMask:function(Pe){me!==Pe&&!X&&(r.colorMask(Pe,Pe,Pe,Pe),me=Pe)},setLocked:function(Pe){X=Pe},setClear:function(Pe,ye,Xe,He,Ht){Ht===!0&&(Pe*=He,ye*=He,Xe*=He),Ae.set(Pe,ye,Xe,He),we.equals(Ae)===!1&&(r.clearColor(Pe,ye,Xe,He),we.copy(Ae))},reset:function(){X=!1,me=null,we.set(-1,0,0,0)}}}function s(){let X=!1,Ae=!1,me=null,we=null,Pe=null;return{setReversed:function(ye){if(Ae!==ye){const Xe=e.get("EXT_clip_control");ye?Xe.clipControlEXT(Xe.LOWER_LEFT_EXT,Xe.ZERO_TO_ONE_EXT):Xe.clipControlEXT(Xe.LOWER_LEFT_EXT,Xe.NEGATIVE_ONE_TO_ONE_EXT),Ae=ye;const He=Pe;Pe=null,this.setClear(He)}},getReversed:function(){return Ae},setTest:function(ye){ye?Me(r.DEPTH_TEST):ze(r.DEPTH_TEST)},setMask:function(ye){me!==ye&&!X&&(r.depthMask(ye),me=ye)},setFunc:function(ye){if(Ae&&(ye=cy[ye]),we!==ye){switch(ye){case hh:r.depthFunc(r.NEVER);break;case ph:r.depthFunc(r.ALWAYS);break;case mh:r.depthFunc(r.LESS);break;case eo:r.depthFunc(r.LEQUAL);break;case gh:r.depthFunc(r.EQUAL);break;case _h:r.depthFunc(r.GEQUAL);break;case vh:r.depthFunc(r.GREATER);break;case xh:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}we=ye}},setLocked:function(ye){X=ye},setClear:function(ye){Pe!==ye&&(Pe=ye,Ae&&(ye=1-ye),r.clearDepth(ye))},reset:function(){X=!1,me=null,we=null,Pe=null,Ae=!1}}}function l(){let X=!1,Ae=null,me=null,we=null,Pe=null,ye=null,Xe=null,He=null,Ht=null;return{setTest:function(Ut){X||(Ut?Me(r.STENCIL_TEST):ze(r.STENCIL_TEST))},setMask:function(Ut){Ae!==Ut&&!X&&(r.stencilMask(Ut),Ae=Ut)},setFunc:function(Ut,kn,Fn){(me!==Ut||we!==kn||Pe!==Fn)&&(r.stencilFunc(Ut,kn,Fn),me=Ut,we=kn,Pe=Fn)},setOp:function(Ut,kn,Fn){(ye!==Ut||Xe!==kn||He!==Fn)&&(r.stencilOp(Ut,kn,Fn),ye=Ut,Xe=kn,He=Fn)},setLocked:function(Ut){X=Ut},setClear:function(Ut){Ht!==Ut&&(r.clearStencil(Ut),Ht=Ut)},reset:function(){X=!1,Ae=null,me=null,we=null,Pe=null,ye=null,Xe=null,He=null,Ht=null}}}const c=new i,f=new s,h=new l,m=new WeakMap,p=new WeakMap;let _={},x={},g={},M=new WeakMap,b=[],w=null,y=!1,S=null,I=null,B=null,C=null,O=null,N=null,P=null,T=new Dt(0,0,0),L=0,Y=!1,G=null,j=null,pe=null,de=null,J=null;const F=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,ee=0;const _e=r.getParameter(r.VERSION);_e.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(_e)[1]),H=ee>=1):_e.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(_e)[1]),H=ee>=2);let be=null,U={};const Z=r.getParameter(r.SCISSOR_BOX),Ee=r.getParameter(r.VIEWPORT),Ce=new cn().fromArray(Z),Le=new cn().fromArray(Ee);function ie(X,Ae,me,we){const Pe=new Uint8Array(4),ye=r.createTexture();r.bindTexture(X,ye),r.texParameteri(X,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(X,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Xe=0;Xe<me;Xe++)X===r.TEXTURE_3D||X===r.TEXTURE_2D_ARRAY?r.texImage3D(Ae,0,r.RGBA,1,1,we,0,r.RGBA,r.UNSIGNED_BYTE,Pe):r.texImage2D(Ae+Xe,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Pe);return ye}const Se={};Se[r.TEXTURE_2D]=ie(r.TEXTURE_2D,r.TEXTURE_2D,1),Se[r.TEXTURE_CUBE_MAP]=ie(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Se[r.TEXTURE_2D_ARRAY]=ie(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Se[r.TEXTURE_3D]=ie(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),h.setClear(0),Me(r.DEPTH_TEST),f.setFunc(eo),rt(!1),pt(p_),Me(r.CULL_FACE),Ye(Ua);function Me(X){_[X]!==!0&&(r.enable(X),_[X]=!0)}function ze(X){_[X]!==!1&&(r.disable(X),_[X]=!1)}function nt(X,Ae){return g[X]!==Ae?(r.bindFramebuffer(X,Ae),g[X]=Ae,X===r.DRAW_FRAMEBUFFER&&(g[r.FRAMEBUFFER]=Ae),X===r.FRAMEBUFFER&&(g[r.DRAW_FRAMEBUFFER]=Ae),!0):!1}function je(X,Ae){let me=b,we=!1;if(X){me=M.get(Ae),me===void 0&&(me=[],M.set(Ae,me));const Pe=X.textures;if(me.length!==Pe.length||me[0]!==r.COLOR_ATTACHMENT0){for(let ye=0,Xe=Pe.length;ye<Xe;ye++)me[ye]=r.COLOR_ATTACHMENT0+ye;me.length=Pe.length,we=!0}}else me[0]!==r.BACK&&(me[0]=r.BACK,we=!0);we&&r.drawBuffers(me)}function Yt(X){return w!==X?(r.useProgram(X),w=X,!0):!1}const ct={[Ys]:r.FUNC_ADD,[NM]:r.FUNC_SUBTRACT,[LM]:r.FUNC_REVERSE_SUBTRACT};ct[OM]=r.MIN,ct[PM]=r.MAX;const _t={[IM]:r.ZERO,[FM]:r.ONE,[BM]:r.SRC_COLOR,[fh]:r.SRC_ALPHA,[XM]:r.SRC_ALPHA_SATURATE,[VM]:r.DST_COLOR,[HM]:r.DST_ALPHA,[zM]:r.ONE_MINUS_SRC_COLOR,[dh]:r.ONE_MINUS_SRC_ALPHA,[kM]:r.ONE_MINUS_DST_COLOR,[GM]:r.ONE_MINUS_DST_ALPHA,[WM]:r.CONSTANT_COLOR,[qM]:r.ONE_MINUS_CONSTANT_COLOR,[YM]:r.CONSTANT_ALPHA,[ZM]:r.ONE_MINUS_CONSTANT_ALPHA};function Ye(X,Ae,me,we,Pe,ye,Xe,He,Ht,Ut){if(X===Ua){y===!0&&(ze(r.BLEND),y=!1);return}if(y===!1&&(Me(r.BLEND),y=!0),X!==UM){if(X!==S||Ut!==Y){if((I!==Ys||O!==Ys)&&(r.blendEquation(r.FUNC_ADD),I=Ys,O=Ys),Ut)switch(X){case Qr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case uh:r.blendFunc(r.ONE,r.ONE);break;case m_:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case g_:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Nt("WebGLState: Invalid blending: ",X);break}else switch(X){case Qr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case uh:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case m_:Nt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case g_:Nt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Nt("WebGLState: Invalid blending: ",X);break}B=null,C=null,N=null,P=null,T.set(0,0,0),L=0,S=X,Y=Ut}return}Pe=Pe||Ae,ye=ye||me,Xe=Xe||we,(Ae!==I||Pe!==O)&&(r.blendEquationSeparate(ct[Ae],ct[Pe]),I=Ae,O=Pe),(me!==B||we!==C||ye!==N||Xe!==P)&&(r.blendFuncSeparate(_t[me],_t[we],_t[ye],_t[Xe]),B=me,C=we,N=ye,P=Xe),(He.equals(T)===!1||Ht!==L)&&(r.blendColor(He.r,He.g,He.b,Ht),T.copy(He),L=Ht),S=X,Y=!1}function Ze(X,Ae){X.side===Ji?ze(r.CULL_FACE):Me(r.CULL_FACE);let me=X.side===ii;Ae&&(me=!me),rt(me),X.blending===Qr&&X.transparent===!1?Ye(Ua):Ye(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),f.setFunc(X.depthFunc),f.setTest(X.depthTest),f.setMask(X.depthWrite),c.setMask(X.colorWrite);const we=X.stencilWrite;h.setTest(we),we&&(h.setMask(X.stencilWriteMask),h.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),h.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),wt(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?Me(r.SAMPLE_ALPHA_TO_COVERAGE):ze(r.SAMPLE_ALPHA_TO_COVERAGE)}function rt(X){G!==X&&(X?r.frontFace(r.CW):r.frontFace(r.CCW),G=X)}function pt(X){X!==CM?(Me(r.CULL_FACE),X!==j&&(X===p_?r.cullFace(r.BACK):X===wM?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):ze(r.CULL_FACE),j=X}function Ct(X){X!==pe&&(H&&r.lineWidth(X),pe=X)}function wt(X,Ae,me){X?(Me(r.POLYGON_OFFSET_FILL),(de!==Ae||J!==me)&&(de=Ae,J=me,f.getReversed()&&(Ae=-Ae),r.polygonOffset(Ae,me))):ze(r.POLYGON_OFFSET_FILL)}function ut(X){X?Me(r.SCISSOR_TEST):ze(r.SCISSOR_TEST)}function gt(X){X===void 0&&(X=r.TEXTURE0+F-1),be!==X&&(r.activeTexture(X),be=X)}function k(X,Ae,me){me===void 0&&(be===null?me=r.TEXTURE0+F-1:me=be);let we=U[me];we===void 0&&(we={type:void 0,texture:void 0},U[me]=we),(we.type!==X||we.texture!==Ae)&&(be!==me&&(r.activeTexture(me),be=me),r.bindTexture(X,Ae||Se[X]),we.type=X,we.texture=Ae)}function St(){const X=U[be];X!==void 0&&X.type!==void 0&&(r.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function vt(){try{r.compressedTexImage2D(...arguments)}catch(X){Nt("WebGLState:",X)}}function D(){try{r.compressedTexImage3D(...arguments)}catch(X){Nt("WebGLState:",X)}}function E(){try{r.texSubImage2D(...arguments)}catch(X){Nt("WebGLState:",X)}}function Q(){try{r.texSubImage3D(...arguments)}catch(X){Nt("WebGLState:",X)}}function te(){try{r.compressedTexSubImage2D(...arguments)}catch(X){Nt("WebGLState:",X)}}function ue(){try{r.compressedTexSubImage3D(...arguments)}catch(X){Nt("WebGLState:",X)}}function Re(){try{r.texStorage2D(...arguments)}catch(X){Nt("WebGLState:",X)}}function De(){try{r.texStorage3D(...arguments)}catch(X){Nt("WebGLState:",X)}}function fe(){try{r.texImage2D(...arguments)}catch(X){Nt("WebGLState:",X)}}function he(){try{r.texImage3D(...arguments)}catch(X){Nt("WebGLState:",X)}}function Te(X){return x[X]!==void 0?x[X]:r.getParameter(X)}function Be(X,Ae){x[X]!==Ae&&(r.pixelStorei(X,Ae),x[X]=Ae)}function Ue(X){Ce.equals(X)===!1&&(r.scissor(X.x,X.y,X.z,X.w),Ce.copy(X))}function Ne(X){Le.equals(X)===!1&&(r.viewport(X.x,X.y,X.z,X.w),Le.copy(X))}function Je(X,Ae){let me=p.get(Ae);me===void 0&&(me=new WeakMap,p.set(Ae,me));let we=me.get(X);we===void 0&&(we=r.getUniformBlockIndex(Ae,X.name),me.set(X,we))}function Ke(X,Ae){const we=p.get(Ae).get(X);m.get(Ae)!==we&&(r.uniformBlockBinding(Ae,we,X.__bindingPointIndex),m.set(Ae,we))}function at(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),f.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),_={},x={},be=null,U={},g={},M=new WeakMap,b=[],w=null,y=!1,S=null,I=null,B=null,C=null,O=null,N=null,P=null,T=new Dt(0,0,0),L=0,Y=!1,G=null,j=null,pe=null,de=null,J=null,Ce.set(0,0,r.canvas.width,r.canvas.height),Le.set(0,0,r.canvas.width,r.canvas.height),c.reset(),f.reset(),h.reset()}return{buffers:{color:c,depth:f,stencil:h},enable:Me,disable:ze,bindFramebuffer:nt,drawBuffers:je,useProgram:Yt,setBlending:Ye,setMaterial:Ze,setFlipSided:rt,setCullFace:pt,setLineWidth:Ct,setPolygonOffset:wt,setScissorTest:ut,activeTexture:gt,bindTexture:k,unbindTexture:St,compressedTexImage2D:vt,compressedTexImage3D:D,texImage2D:fe,texImage3D:he,pixelStorei:Be,getParameter:Te,updateUBOMapping:Je,uniformBlockBinding:Ke,texStorage2D:Re,texStorage3D:De,texSubImage2D:E,texSubImage3D:Q,compressedTexSubImage2D:te,compressedTexSubImage3D:ue,scissor:Ue,viewport:Ne,reset:at}}function qA(r,e,i,s,l,c,f){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Ft,_=new WeakMap,x=new Set;let g;const M=new WeakMap;let b=!1;try{b=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(D,E){return b?new OffscreenCanvas(D,E):ou("canvas")}function y(D,E,Q){let te=1;const ue=vt(D);if((ue.width>Q||ue.height>Q)&&(te=Q/Math.max(ue.width,ue.height)),te<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const Re=Math.floor(te*ue.width),De=Math.floor(te*ue.height);g===void 0&&(g=w(Re,De));const fe=E?w(Re,De):g;return fe.width=Re,fe.height=De,fe.getContext("2d").drawImage(D,0,0,Re,De),st("WebGLRenderer: Texture has been resized from ("+ue.width+"x"+ue.height+") to ("+Re+"x"+De+")."),fe}else return"data"in D&&st("WebGLRenderer: Image in DataTexture is too big ("+ue.width+"x"+ue.height+")."),D;return D}function S(D){return D.generateMipmaps}function I(D){r.generateMipmap(D)}function B(D){return D.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?r.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function C(D,E,Q,te,ue,Re=!1){if(D!==null){if(r[D]!==void 0)return r[D];st("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let De;te&&(De=e.get("EXT_texture_norm16"),De||st("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let fe=E;if(E===r.RED&&(Q===r.FLOAT&&(fe=r.R32F),Q===r.HALF_FLOAT&&(fe=r.R16F),Q===r.UNSIGNED_BYTE&&(fe=r.R8),Q===r.UNSIGNED_SHORT&&De&&(fe=De.R16_EXT),Q===r.SHORT&&De&&(fe=De.R16_SNORM_EXT)),E===r.RED_INTEGER&&(Q===r.UNSIGNED_BYTE&&(fe=r.R8UI),Q===r.UNSIGNED_SHORT&&(fe=r.R16UI),Q===r.UNSIGNED_INT&&(fe=r.R32UI),Q===r.BYTE&&(fe=r.R8I),Q===r.SHORT&&(fe=r.R16I),Q===r.INT&&(fe=r.R32I)),E===r.RG&&(Q===r.FLOAT&&(fe=r.RG32F),Q===r.HALF_FLOAT&&(fe=r.RG16F),Q===r.UNSIGNED_BYTE&&(fe=r.RG8),Q===r.UNSIGNED_SHORT&&De&&(fe=De.RG16_EXT),Q===r.SHORT&&De&&(fe=De.RG16_SNORM_EXT)),E===r.RG_INTEGER&&(Q===r.UNSIGNED_BYTE&&(fe=r.RG8UI),Q===r.UNSIGNED_SHORT&&(fe=r.RG16UI),Q===r.UNSIGNED_INT&&(fe=r.RG32UI),Q===r.BYTE&&(fe=r.RG8I),Q===r.SHORT&&(fe=r.RG16I),Q===r.INT&&(fe=r.RG32I)),E===r.RGB_INTEGER&&(Q===r.UNSIGNED_BYTE&&(fe=r.RGB8UI),Q===r.UNSIGNED_SHORT&&(fe=r.RGB16UI),Q===r.UNSIGNED_INT&&(fe=r.RGB32UI),Q===r.BYTE&&(fe=r.RGB8I),Q===r.SHORT&&(fe=r.RGB16I),Q===r.INT&&(fe=r.RGB32I)),E===r.RGBA_INTEGER&&(Q===r.UNSIGNED_BYTE&&(fe=r.RGBA8UI),Q===r.UNSIGNED_SHORT&&(fe=r.RGBA16UI),Q===r.UNSIGNED_INT&&(fe=r.RGBA32UI),Q===r.BYTE&&(fe=r.RGBA8I),Q===r.SHORT&&(fe=r.RGBA16I),Q===r.INT&&(fe=r.RGBA32I)),E===r.RGB&&(Q===r.UNSIGNED_SHORT&&De&&(fe=De.RGB16_EXT),Q===r.SHORT&&De&&(fe=De.RGB16_SNORM_EXT),Q===r.UNSIGNED_INT_5_9_9_9_REV&&(fe=r.RGB9_E5),Q===r.UNSIGNED_INT_10F_11F_11F_REV&&(fe=r.R11F_G11F_B10F)),E===r.RGBA){const he=Re?su:Rt.getTransfer(ue);Q===r.FLOAT&&(fe=r.RGBA32F),Q===r.HALF_FLOAT&&(fe=r.RGBA16F),Q===r.UNSIGNED_BYTE&&(fe=he===qt?r.SRGB8_ALPHA8:r.RGBA8),Q===r.UNSIGNED_SHORT&&De&&(fe=De.RGBA16_EXT),Q===r.SHORT&&De&&(fe=De.RGBA16_SNORM_EXT),Q===r.UNSIGNED_SHORT_4_4_4_4&&(fe=r.RGBA4),Q===r.UNSIGNED_SHORT_5_5_5_1&&(fe=r.RGB5_A1)}return(fe===r.R16F||fe===r.R32F||fe===r.RG16F||fe===r.RG32F||fe===r.RGBA16F||fe===r.RGBA32F)&&e.get("EXT_color_buffer_float"),fe}function O(D,E){let Q;return D?E===null||E===sa||E===dl?Q=r.DEPTH24_STENCIL8:E===$i?Q=r.DEPTH32F_STENCIL8:E===fl&&(Q=r.DEPTH24_STENCIL8,st("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===sa||E===dl?Q=r.DEPTH_COMPONENT24:E===$i?Q=r.DEPTH_COMPONENT32F:E===fl&&(Q=r.DEPTH_COMPONENT16),Q}function N(D,E){return S(D)===!0||D.isFramebufferTexture&&D.minFilter!==In&&D.minFilter!==yn?Math.log2(Math.max(E.width,E.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?E.mipmaps.length:1}function P(D){const E=D.target;E.removeEventListener("dispose",P),L(E),E.isVideoTexture&&_.delete(E),E.isHTMLTexture&&x.delete(E)}function T(D){const E=D.target;E.removeEventListener("dispose",T),G(E)}function L(D){const E=s.get(D);if(E.__webglInit===void 0)return;const Q=D.source,te=M.get(Q);if(te){const ue=te[E.__cacheKey];ue.usedTimes--,ue.usedTimes===0&&Y(D),Object.keys(te).length===0&&M.delete(Q)}s.remove(D)}function Y(D){const E=s.get(D);r.deleteTexture(E.__webglTexture);const Q=D.source,te=M.get(Q);delete te[E.__cacheKey],f.memory.textures--}function G(D){const E=s.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),s.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(E.__webglFramebuffer[te]))for(let ue=0;ue<E.__webglFramebuffer[te].length;ue++)r.deleteFramebuffer(E.__webglFramebuffer[te][ue]);else r.deleteFramebuffer(E.__webglFramebuffer[te]);E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer[te])}else{if(Array.isArray(E.__webglFramebuffer))for(let te=0;te<E.__webglFramebuffer.length;te++)r.deleteFramebuffer(E.__webglFramebuffer[te]);else r.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&r.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let te=0;te<E.__webglColorRenderbuffer.length;te++)E.__webglColorRenderbuffer[te]&&r.deleteRenderbuffer(E.__webglColorRenderbuffer[te]);E.__webglDepthRenderbuffer&&r.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const Q=D.textures;for(let te=0,ue=Q.length;te<ue;te++){const Re=s.get(Q[te]);Re.__webglTexture&&(r.deleteTexture(Re.__webglTexture),f.memory.textures--),s.remove(Q[te])}s.remove(D)}let j=0;function pe(){j=0}function de(){return j}function J(D){j=D}function F(){const D=j;return D>=l.maxTextures&&st("WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+l.maxTextures),j+=1,D}function H(D){const E=[];return E.push(D.wrapS),E.push(D.wrapT),E.push(D.wrapR||0),E.push(D.magFilter),E.push(D.minFilter),E.push(D.anisotropy),E.push(D.internalFormat),E.push(D.format),E.push(D.type),E.push(D.generateMipmaps),E.push(D.premultiplyAlpha),E.push(D.flipY),E.push(D.unpackAlignment),E.push(D.colorSpace),E.join()}function ee(D,E){const Q=s.get(D);if(D.isVideoTexture&&k(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&Q.__version!==D.version){const te=D.image;if(te===null)st("WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)st("WebGLRenderer: Texture marked for update but image is incomplete");else{ze(Q,D,E);return}}else D.isExternalTexture&&(Q.__webglTexture=D.sourceTexture?D.sourceTexture:null);i.bindTexture(r.TEXTURE_2D,Q.__webglTexture,r.TEXTURE0+E)}function _e(D,E){const Q=s.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&Q.__version!==D.version){ze(Q,D,E);return}else D.isExternalTexture&&(Q.__webglTexture=D.sourceTexture?D.sourceTexture:null);i.bindTexture(r.TEXTURE_2D_ARRAY,Q.__webglTexture,r.TEXTURE0+E)}function be(D,E){const Q=s.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&Q.__version!==D.version){ze(Q,D,E);return}i.bindTexture(r.TEXTURE_3D,Q.__webglTexture,r.TEXTURE0+E)}function U(D,E){const Q=s.get(D);if(D.isCubeDepthTexture!==!0&&D.version>0&&Q.__version!==D.version){nt(Q,D,E);return}i.bindTexture(r.TEXTURE_CUBE_MAP,Q.__webglTexture,r.TEXTURE0+E)}const Z={[Sh]:r.REPEAT,[Hi]:r.CLAMP_TO_EDGE,[Mh]:r.MIRRORED_REPEAT},Ee={[In]:r.NEAREST,[jM]:r.NEAREST_MIPMAP_NEAREST,[Rc]:r.NEAREST_MIPMAP_LINEAR,[yn]:r.LINEAR,[wd]:r.LINEAR_MIPMAP_NEAREST,[xs]:r.LINEAR_MIPMAP_LINEAR},Ce={[ey]:r.NEVER,[sy]:r.ALWAYS,[ty]:r.LESS,[cp]:r.LEQUAL,[ny]:r.EQUAL,[up]:r.GEQUAL,[iy]:r.GREATER,[ay]:r.NOTEQUAL};function Le(D,E){if(E.type===$i&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===yn||E.magFilter===wd||E.magFilter===Rc||E.magFilter===xs||E.minFilter===yn||E.minFilter===wd||E.minFilter===Rc||E.minFilter===xs)&&st("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(D,r.TEXTURE_WRAP_S,Z[E.wrapS]),r.texParameteri(D,r.TEXTURE_WRAP_T,Z[E.wrapT]),(D===r.TEXTURE_3D||D===r.TEXTURE_2D_ARRAY)&&r.texParameteri(D,r.TEXTURE_WRAP_R,Z[E.wrapR]),r.texParameteri(D,r.TEXTURE_MAG_FILTER,Ee[E.magFilter]),r.texParameteri(D,r.TEXTURE_MIN_FILTER,Ee[E.minFilter]),E.compareFunction&&(r.texParameteri(D,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(D,r.TEXTURE_COMPARE_FUNC,Ce[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===In||E.minFilter!==Rc&&E.minFilter!==xs||E.type===$i&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||s.get(E).__currentAnisotropy){const Q=e.get("EXT_texture_filter_anisotropic");r.texParameterf(D,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),s.get(E).__currentAnisotropy=E.anisotropy}}}function ie(D,E){let Q=!1;D.__webglInit===void 0&&(D.__webglInit=!0,E.addEventListener("dispose",P));const te=E.source;let ue=M.get(te);ue===void 0&&(ue={},M.set(te,ue));const Re=H(E);if(Re!==D.__cacheKey){ue[Re]===void 0&&(ue[Re]={texture:r.createTexture(),usedTimes:0},f.memory.textures++,Q=!0),ue[Re].usedTimes++;const De=ue[D.__cacheKey];De!==void 0&&(ue[D.__cacheKey].usedTimes--,De.usedTimes===0&&Y(E)),D.__cacheKey=Re,D.__webglTexture=ue[Re].texture}return Q}function Se(D,E,Q){return Math.floor(Math.floor(D/Q)/E)}function Me(D,E,Q,te){const Re=D.updateRanges;if(Re.length===0)i.texSubImage2D(r.TEXTURE_2D,0,0,0,E.width,E.height,Q,te,E.data);else{Re.sort((Be,Ue)=>Be.start-Ue.start);let De=0;for(let Be=1;Be<Re.length;Be++){const Ue=Re[De],Ne=Re[Be],Je=Ue.start+Ue.count,Ke=Se(Ne.start,E.width,4),at=Se(Ue.start,E.width,4);Ne.start<=Je+1&&Ke===at&&Se(Ne.start+Ne.count-1,E.width,4)===Ke?Ue.count=Math.max(Ue.count,Ne.start+Ne.count-Ue.start):(++De,Re[De]=Ne)}Re.length=De+1;const fe=i.getParameter(r.UNPACK_ROW_LENGTH),he=i.getParameter(r.UNPACK_SKIP_PIXELS),Te=i.getParameter(r.UNPACK_SKIP_ROWS);i.pixelStorei(r.UNPACK_ROW_LENGTH,E.width);for(let Be=0,Ue=Re.length;Be<Ue;Be++){const Ne=Re[Be],Je=Math.floor(Ne.start/4),Ke=Math.ceil(Ne.count/4),at=Je%E.width,X=Math.floor(Je/E.width),Ae=Ke,me=1;i.pixelStorei(r.UNPACK_SKIP_PIXELS,at),i.pixelStorei(r.UNPACK_SKIP_ROWS,X),i.texSubImage2D(r.TEXTURE_2D,0,at,X,Ae,me,Q,te,E.data)}D.clearUpdateRanges(),i.pixelStorei(r.UNPACK_ROW_LENGTH,fe),i.pixelStorei(r.UNPACK_SKIP_PIXELS,he),i.pixelStorei(r.UNPACK_SKIP_ROWS,Te)}}function ze(D,E,Q){let te=r.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(te=r.TEXTURE_2D_ARRAY),E.isData3DTexture&&(te=r.TEXTURE_3D);const ue=ie(D,E),Re=E.source;i.bindTexture(te,D.__webglTexture,r.TEXTURE0+Q);const De=s.get(Re);if(Re.version!==De.__version||ue===!0){if(i.activeTexture(r.TEXTURE0+Q),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){const me=Rt.getPrimaries(Rt.workingColorSpace),we=E.colorSpace===vs?null:Rt.getPrimaries(E.colorSpace),Pe=E.colorSpace===vs||me===we?r.NONE:r.BROWSER_DEFAULT_WEBGL;i.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe)}i.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment);let he=y(E.image,!1,l.maxTextureSize);he=St(E,he);const Te=c.convert(E.format,E.colorSpace),Be=c.convert(E.type);let Ue=C(E.internalFormat,Te,Be,E.normalized,E.colorSpace,E.isVideoTexture);Le(te,E);let Ne;const Je=E.mipmaps,Ke=E.isVideoTexture!==!0,at=De.__version===void 0||ue===!0,X=Re.dataReady,Ae=N(E,he);if(E.isDepthTexture)Ue=O(E.format===Ks,E.type),at&&(Ke?i.texStorage2D(r.TEXTURE_2D,1,Ue,he.width,he.height):i.texImage2D(r.TEXTURE_2D,0,Ue,he.width,he.height,0,Te,Be,null));else if(E.isDataTexture)if(Je.length>0){Ke&&at&&i.texStorage2D(r.TEXTURE_2D,Ae,Ue,Je[0].width,Je[0].height);for(let me=0,we=Je.length;me<we;me++)Ne=Je[me],Ke?X&&i.texSubImage2D(r.TEXTURE_2D,me,0,0,Ne.width,Ne.height,Te,Be,Ne.data):i.texImage2D(r.TEXTURE_2D,me,Ue,Ne.width,Ne.height,0,Te,Be,Ne.data);E.generateMipmaps=!1}else Ke?(at&&i.texStorage2D(r.TEXTURE_2D,Ae,Ue,he.width,he.height),X&&Me(E,he,Te,Be)):i.texImage2D(r.TEXTURE_2D,0,Ue,he.width,he.height,0,Te,Be,he.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Ke&&at&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Ae,Ue,Je[0].width,Je[0].height,he.depth);for(let me=0,we=Je.length;me<we;me++)if(Ne=Je[me],E.format!==Gi)if(Te!==null)if(Ke){if(X)if(E.layerUpdates.size>0){const Pe=X_(Ne.width,Ne.height,E.format,E.type);for(const ye of E.layerUpdates){const Xe=Ne.data.subarray(ye*Pe/Ne.data.BYTES_PER_ELEMENT,(ye+1)*Pe/Ne.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,me,0,0,ye,Ne.width,Ne.height,1,Te,Xe)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,me,0,0,0,Ne.width,Ne.height,he.depth,Te,Ne.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,me,Ue,Ne.width,Ne.height,he.depth,0,Ne.data,0,0);else st("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ke?X&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,me,0,0,0,Ne.width,Ne.height,he.depth,Te,Be,Ne.data):i.texImage3D(r.TEXTURE_2D_ARRAY,me,Ue,Ne.width,Ne.height,he.depth,0,Te,Be,Ne.data)}else{Ke&&at&&i.texStorage2D(r.TEXTURE_2D,Ae,Ue,Je[0].width,Je[0].height);for(let me=0,we=Je.length;me<we;me++)Ne=Je[me],E.format!==Gi?Te!==null?Ke?X&&i.compressedTexSubImage2D(r.TEXTURE_2D,me,0,0,Ne.width,Ne.height,Te,Ne.data):i.compressedTexImage2D(r.TEXTURE_2D,me,Ue,Ne.width,Ne.height,0,Ne.data):st("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ke?X&&i.texSubImage2D(r.TEXTURE_2D,me,0,0,Ne.width,Ne.height,Te,Be,Ne.data):i.texImage2D(r.TEXTURE_2D,me,Ue,Ne.width,Ne.height,0,Te,Be,Ne.data)}else if(E.isDataArrayTexture)if(Ke){if(at&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Ae,Ue,he.width,he.height,he.depth),X)if(E.layerUpdates.size>0){const me=X_(he.width,he.height,E.format,E.type);for(const we of E.layerUpdates){const Pe=he.data.subarray(we*me/he.data.BYTES_PER_ELEMENT,(we+1)*me/he.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,we,he.width,he.height,1,Te,Be,Pe)}E.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,he.width,he.height,he.depth,Te,Be,he.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,Ue,he.width,he.height,he.depth,0,Te,Be,he.data);else if(E.isData3DTexture)Ke?(at&&i.texStorage3D(r.TEXTURE_3D,Ae,Ue,he.width,he.height,he.depth),X&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,he.width,he.height,he.depth,Te,Be,he.data)):i.texImage3D(r.TEXTURE_3D,0,Ue,he.width,he.height,he.depth,0,Te,Be,he.data);else if(E.isFramebufferTexture){if(at)if(Ke)i.texStorage2D(r.TEXTURE_2D,Ae,Ue,he.width,he.height);else{let me=he.width,we=he.height;for(let Pe=0;Pe<Ae;Pe++)i.texImage2D(r.TEXTURE_2D,Pe,Ue,me,we,0,Te,Be,null),me>>=1,we>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in r){const me=r.canvas;if(me.hasAttribute("layoutsubtree")||me.setAttribute("layoutsubtree","true"),he.parentNode!==me){me.appendChild(he),x.add(E),me.onpaint=we=>{const Pe=we.changedElements;for(const ye of x)Pe.includes(ye.image)&&(ye.needsUpdate=!0)},me.requestPaint();return}if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,he);else{const Pe=r.RGBA,ye=r.RGBA,Xe=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,Pe,ye,Xe,he)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(Je.length>0){if(Ke&&at){const me=vt(Je[0]);i.texStorage2D(r.TEXTURE_2D,Ae,Ue,me.width,me.height)}for(let me=0,we=Je.length;me<we;me++)Ne=Je[me],Ke?X&&i.texSubImage2D(r.TEXTURE_2D,me,0,0,Te,Be,Ne):i.texImage2D(r.TEXTURE_2D,me,Ue,Te,Be,Ne);E.generateMipmaps=!1}else if(Ke){if(at){const me=vt(he);i.texStorage2D(r.TEXTURE_2D,Ae,Ue,me.width,me.height)}X&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,Te,Be,he)}else i.texImage2D(r.TEXTURE_2D,0,Ue,Te,Be,he);S(E)&&I(te),De.__version=Re.version,E.onUpdate&&E.onUpdate(E)}D.__version=E.version}function nt(D,E,Q){if(E.image.length!==6)return;const te=ie(D,E),ue=E.source;i.bindTexture(r.TEXTURE_CUBE_MAP,D.__webglTexture,r.TEXTURE0+Q);const Re=s.get(ue);if(ue.version!==Re.__version||te===!0){i.activeTexture(r.TEXTURE0+Q);const De=Rt.getPrimaries(Rt.workingColorSpace),fe=E.colorSpace===vs?null:Rt.getPrimaries(E.colorSpace),he=E.colorSpace===vs||De===fe?r.NONE:r.BROWSER_DEFAULT_WEBGL;i.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);const Te=E.isCompressedTexture||E.image[0].isCompressedTexture,Be=E.image[0]&&E.image[0].isDataTexture,Ue=[];for(let ye=0;ye<6;ye++)!Te&&!Be?Ue[ye]=y(E.image[ye],!0,l.maxCubemapSize):Ue[ye]=Be?E.image[ye].image:E.image[ye],Ue[ye]=St(E,Ue[ye]);const Ne=Ue[0],Je=c.convert(E.format,E.colorSpace),Ke=c.convert(E.type),at=C(E.internalFormat,Je,Ke,E.normalized,E.colorSpace),X=E.isVideoTexture!==!0,Ae=Re.__version===void 0||te===!0,me=ue.dataReady;let we=N(E,Ne);Le(r.TEXTURE_CUBE_MAP,E);let Pe;if(Te){X&&Ae&&i.texStorage2D(r.TEXTURE_CUBE_MAP,we,at,Ne.width,Ne.height);for(let ye=0;ye<6;ye++){Pe=Ue[ye].mipmaps;for(let Xe=0;Xe<Pe.length;Xe++){const He=Pe[Xe];E.format!==Gi?Je!==null?X?me&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Xe,0,0,He.width,He.height,Je,He.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Xe,at,He.width,He.height,0,He.data):st("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?me&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Xe,0,0,He.width,He.height,Je,Ke,He.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Xe,at,He.width,He.height,0,Je,Ke,He.data)}}}else{if(Pe=E.mipmaps,X&&Ae){Pe.length>0&&we++;const ye=vt(Ue[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,we,at,ye.width,ye.height)}for(let ye=0;ye<6;ye++)if(Be){X?me&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,Ue[ye].width,Ue[ye].height,Je,Ke,Ue[ye].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,at,Ue[ye].width,Ue[ye].height,0,Je,Ke,Ue[ye].data);for(let Xe=0;Xe<Pe.length;Xe++){const Ht=Pe[Xe].image[ye].image;X?me&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Xe+1,0,0,Ht.width,Ht.height,Je,Ke,Ht.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Xe+1,at,Ht.width,Ht.height,0,Je,Ke,Ht.data)}}else{X?me&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,Je,Ke,Ue[ye]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,at,Je,Ke,Ue[ye]);for(let Xe=0;Xe<Pe.length;Xe++){const He=Pe[Xe];X?me&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Xe+1,0,0,Je,Ke,He.image[ye]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Xe+1,at,Je,Ke,He.image[ye])}}}S(E)&&I(r.TEXTURE_CUBE_MAP),Re.__version=ue.version,E.onUpdate&&E.onUpdate(E)}D.__version=E.version}function je(D,E,Q,te,ue,Re){const De=c.convert(Q.format,Q.colorSpace),fe=c.convert(Q.type),he=C(Q.internalFormat,De,fe,Q.normalized,Q.colorSpace),Te=s.get(E),Be=s.get(Q);if(Be.__renderTarget=E,!Te.__hasExternalTextures){const Ue=Math.max(1,E.width>>Re),Ne=Math.max(1,E.height>>Re);ue===r.TEXTURE_3D||ue===r.TEXTURE_2D_ARRAY?i.texImage3D(ue,Re,he,Ue,Ne,E.depth,0,De,fe,null):i.texImage2D(ue,Re,he,Ue,Ne,0,De,fe,null)}i.bindFramebuffer(r.FRAMEBUFFER,D),gt(E)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,te,ue,Be.__webglTexture,0,ut(E)):(ue===r.TEXTURE_2D||ue>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ue<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,te,ue,Be.__webglTexture,Re),i.bindFramebuffer(r.FRAMEBUFFER,null)}function Yt(D,E,Q){if(r.bindRenderbuffer(r.RENDERBUFFER,D),E.depthBuffer){const te=E.depthTexture,ue=te&&te.isDepthTexture?te.type:null,Re=O(E.stencilBuffer,ue),De=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;gt(E)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ut(E),Re,E.width,E.height):Q?r.renderbufferStorageMultisample(r.RENDERBUFFER,ut(E),Re,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,Re,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,De,r.RENDERBUFFER,D)}else{const te=E.textures;for(let ue=0;ue<te.length;ue++){const Re=te[ue],De=c.convert(Re.format,Re.colorSpace),fe=c.convert(Re.type),he=C(Re.internalFormat,De,fe,Re.normalized,Re.colorSpace);gt(E)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ut(E),he,E.width,E.height):Q?r.renderbufferStorageMultisample(r.RENDERBUFFER,ut(E),he,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,he,E.width,E.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function ct(D,E,Q){const te=E.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(r.FRAMEBUFFER,D),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ue=s.get(E.depthTexture);if(ue.__renderTarget=E,(!ue.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),te){if(ue.__webglInit===void 0&&(ue.__webglInit=!0,E.depthTexture.addEventListener("dispose",P)),ue.__webglTexture===void 0){ue.__webglTexture=r.createTexture(),i.bindTexture(r.TEXTURE_CUBE_MAP,ue.__webglTexture),Le(r.TEXTURE_CUBE_MAP,E.depthTexture);const Te=c.convert(E.depthTexture.format),Be=c.convert(E.depthTexture.type);let Ue;E.depthTexture.format===Ia?Ue=r.DEPTH_COMPONENT24:E.depthTexture.format===Ks&&(Ue=r.DEPTH24_STENCIL8);for(let Ne=0;Ne<6;Ne++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,0,Ue,E.width,E.height,0,Te,Be,null)}}else ee(E.depthTexture,0);const Re=ue.__webglTexture,De=ut(E),fe=te?r.TEXTURE_CUBE_MAP_POSITIVE_X+Q:r.TEXTURE_2D,he=E.depthTexture.format===Ks?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(E.depthTexture.format===Ia)gt(E)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,he,fe,Re,0,De):r.framebufferTexture2D(r.FRAMEBUFFER,he,fe,Re,0);else if(E.depthTexture.format===Ks)gt(E)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,he,fe,Re,0,De):r.framebufferTexture2D(r.FRAMEBUFFER,he,fe,Re,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function _t(D){const E=s.get(D),Q=D.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==D.depthTexture){const te=D.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),te){const ue=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,te.removeEventListener("dispose",ue)};te.addEventListener("dispose",ue),E.__depthDisposeCallback=ue}E.__boundDepthTexture=te}if(D.depthTexture&&!E.__autoAllocateDepthBuffer)if(Q)for(let te=0;te<6;te++)ct(E.__webglFramebuffer[te],D,te);else{const te=D.texture.mipmaps;te&&te.length>0?ct(E.__webglFramebuffer[0],D,0):ct(E.__webglFramebuffer,D,0)}else if(Q){E.__webglDepthbuffer=[];for(let te=0;te<6;te++)if(i.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[te]),E.__webglDepthbuffer[te]===void 0)E.__webglDepthbuffer[te]=r.createRenderbuffer(),Yt(E.__webglDepthbuffer[te],D,!1);else{const ue=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Re=E.__webglDepthbuffer[te];r.bindRenderbuffer(r.RENDERBUFFER,Re),r.framebufferRenderbuffer(r.FRAMEBUFFER,ue,r.RENDERBUFFER,Re)}}else{const te=D.texture.mipmaps;if(te&&te.length>0?i.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=r.createRenderbuffer(),Yt(E.__webglDepthbuffer,D,!1);else{const ue=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Re=E.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,Re),r.framebufferRenderbuffer(r.FRAMEBUFFER,ue,r.RENDERBUFFER,Re)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function Ye(D,E,Q){const te=s.get(D);E!==void 0&&je(te.__webglFramebuffer,D,D.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),Q!==void 0&&_t(D)}function Ze(D){const E=D.texture,Q=s.get(D),te=s.get(E);D.addEventListener("dispose",T);const ue=D.textures,Re=D.isWebGLCubeRenderTarget===!0,De=ue.length>1;if(De||(te.__webglTexture===void 0&&(te.__webglTexture=r.createTexture()),te.__version=E.version,f.memory.textures++),Re){Q.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(E.mipmaps&&E.mipmaps.length>0){Q.__webglFramebuffer[fe]=[];for(let he=0;he<E.mipmaps.length;he++)Q.__webglFramebuffer[fe][he]=r.createFramebuffer()}else Q.__webglFramebuffer[fe]=r.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){Q.__webglFramebuffer=[];for(let fe=0;fe<E.mipmaps.length;fe++)Q.__webglFramebuffer[fe]=r.createFramebuffer()}else Q.__webglFramebuffer=r.createFramebuffer();if(De)for(let fe=0,he=ue.length;fe<he;fe++){const Te=s.get(ue[fe]);Te.__webglTexture===void 0&&(Te.__webglTexture=r.createTexture(),f.memory.textures++)}if(D.samples>0&&gt(D)===!1){Q.__webglMultisampledFramebuffer=r.createFramebuffer(),Q.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let fe=0;fe<ue.length;fe++){const he=ue[fe];Q.__webglColorRenderbuffer[fe]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,Q.__webglColorRenderbuffer[fe]);const Te=c.convert(he.format,he.colorSpace),Be=c.convert(he.type),Ue=C(he.internalFormat,Te,Be,he.normalized,he.colorSpace,D.isXRRenderTarget===!0),Ne=ut(D);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ne,Ue,D.width,D.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+fe,r.RENDERBUFFER,Q.__webglColorRenderbuffer[fe])}r.bindRenderbuffer(r.RENDERBUFFER,null),D.depthBuffer&&(Q.__webglDepthRenderbuffer=r.createRenderbuffer(),Yt(Q.__webglDepthRenderbuffer,D,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Re){i.bindTexture(r.TEXTURE_CUBE_MAP,te.__webglTexture),Le(r.TEXTURE_CUBE_MAP,E);for(let fe=0;fe<6;fe++)if(E.mipmaps&&E.mipmaps.length>0)for(let he=0;he<E.mipmaps.length;he++)je(Q.__webglFramebuffer[fe][he],D,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+fe,he);else je(Q.__webglFramebuffer[fe],D,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);S(E)&&I(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(De){for(let fe=0,he=ue.length;fe<he;fe++){const Te=ue[fe],Be=s.get(Te);let Ue=r.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Ue=D.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Ue,Be.__webglTexture),Le(Ue,Te),je(Q.__webglFramebuffer,D,Te,r.COLOR_ATTACHMENT0+fe,Ue,0),S(Te)&&I(Ue)}i.unbindTexture()}else{let fe=r.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(fe=D.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(fe,te.__webglTexture),Le(fe,E),E.mipmaps&&E.mipmaps.length>0)for(let he=0;he<E.mipmaps.length;he++)je(Q.__webglFramebuffer[he],D,E,r.COLOR_ATTACHMENT0,fe,he);else je(Q.__webglFramebuffer,D,E,r.COLOR_ATTACHMENT0,fe,0);S(E)&&I(fe),i.unbindTexture()}D.depthBuffer&&_t(D)}function rt(D){const E=D.textures;for(let Q=0,te=E.length;Q<te;Q++){const ue=E[Q];if(S(ue)){const Re=B(D),De=s.get(ue).__webglTexture;i.bindTexture(Re,De),I(Re),i.unbindTexture()}}}const pt=[],Ct=[];function wt(D){if(D.samples>0){if(gt(D)===!1){const E=D.textures,Q=D.width,te=D.height;let ue=r.COLOR_BUFFER_BIT;const Re=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,De=s.get(D),fe=E.length>1;if(fe)for(let Te=0;Te<E.length;Te++)i.bindFramebuffer(r.FRAMEBUFFER,De.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Te,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,De.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Te,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,De.__webglMultisampledFramebuffer);const he=D.texture.mipmaps;he&&he.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,De.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,De.__webglFramebuffer);for(let Te=0;Te<E.length;Te++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(ue|=r.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(ue|=r.STENCIL_BUFFER_BIT)),fe){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,De.__webglColorRenderbuffer[Te]);const Be=s.get(E[Te]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Be,0)}r.blitFramebuffer(0,0,Q,te,0,0,Q,te,ue,r.NEAREST),m===!0&&(pt.length=0,Ct.length=0,pt.push(r.COLOR_ATTACHMENT0+Te),D.depthBuffer&&D.resolveDepthBuffer===!1&&(pt.push(Re),Ct.push(Re),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Ct)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,pt))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),fe)for(let Te=0;Te<E.length;Te++){i.bindFramebuffer(r.FRAMEBUFFER,De.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Te,r.RENDERBUFFER,De.__webglColorRenderbuffer[Te]);const Be=s.get(E[Te]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,De.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Te,r.TEXTURE_2D,Be,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,De.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&m){const E=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[E])}}}function ut(D){return Math.min(l.maxSamples,D.samples)}function gt(D){const E=s.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function k(D){const E=f.render.frame;_.get(D)!==E&&(_.set(D,E),D.update())}function St(D,E){const Q=D.colorSpace,te=D.format,ue=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||Q!==au&&Q!==vs&&(Rt.getTransfer(Q)===qt?(te!==Gi||ue!==Ri)&&st("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Nt("WebGLTextures: Unsupported texture color space:",Q)),E}function vt(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(p.width=D.naturalWidth||D.width,p.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(p.width=D.displayWidth,p.height=D.displayHeight):(p.width=D.width,p.height=D.height),p}this.allocateTextureUnit=F,this.resetTextureUnits=pe,this.getTextureUnits=de,this.setTextureUnits=J,this.setTexture2D=ee,this.setTexture2DArray=_e,this.setTexture3D=be,this.setTextureCube=U,this.rebindTextures=Ye,this.setupRenderTarget=Ze,this.updateRenderTargetMipmap=rt,this.updateMultisampleRenderTarget=wt,this.setupDepthRenderbuffer=_t,this.setupFrameBufferTexture=je,this.useMultisampledRTT=gt,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function YA(r,e){function i(s,l=vs){let c;const f=Rt.getTransfer(l);if(s===Ri)return r.UNSIGNED_BYTE;if(s===ap)return r.UNSIGNED_SHORT_4_4_4_4;if(s===sp)return r.UNSIGNED_SHORT_5_5_5_1;if(s===Nv)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===Lv)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===Dv)return r.BYTE;if(s===Uv)return r.SHORT;if(s===fl)return r.UNSIGNED_SHORT;if(s===ip)return r.INT;if(s===sa)return r.UNSIGNED_INT;if(s===$i)return r.FLOAT;if(s===Pa)return r.HALF_FLOAT;if(s===Ov)return r.ALPHA;if(s===Pv)return r.RGB;if(s===Gi)return r.RGBA;if(s===Ia)return r.DEPTH_COMPONENT;if(s===Ks)return r.DEPTH_STENCIL;if(s===Iv)return r.RED;if(s===rp)return r.RED_INTEGER;if(s===Js)return r.RG;if(s===op)return r.RG_INTEGER;if(s===lp)return r.RGBA_INTEGER;if(s===jc||s===Jc||s===$c||s===eu)if(f===qt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===jc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Jc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===$c)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===eu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===jc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Jc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===$c)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===eu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===yh||s===Eh||s===bh||s===Th)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===yh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Eh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===bh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Th)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Ah||s===Rh||s===Ch||s===wh||s===Dh||s===nu||s===Uh)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(s===Ah||s===Rh)return f===qt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===Ch)return f===qt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===wh)return c.COMPRESSED_R11_EAC;if(s===Dh)return c.COMPRESSED_SIGNED_R11_EAC;if(s===nu)return c.COMPRESSED_RG11_EAC;if(s===Uh)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===Nh||s===Lh||s===Oh||s===Ph||s===Ih||s===Fh||s===Bh||s===zh||s===Hh||s===Gh||s===Vh||s===kh||s===Xh||s===Wh)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(s===Nh)return f===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Lh)return f===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Oh)return f===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Ph)return f===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Ih)return f===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Fh)return f===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Bh)return f===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===zh)return f===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Hh)return f===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Gh)return f===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Vh)return f===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===kh)return f===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Xh)return f===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Wh)return f===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===qh||s===Yh||s===Zh)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(s===qh)return f===qt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Yh)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Zh)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Kh||s===Qh||s===iu||s===jh)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(s===Kh)return c.COMPRESSED_RED_RGTC1_EXT;if(s===Qh)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===iu)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===jh)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===dl?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const ZA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,KA=`
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

}`;class QA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const s=new qv(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,s=new Vi({vertexShader:ZA,fragmentShader:KA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new wi(new Qs(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class jA extends er{constructor(e,i){super();const s=this;let l=null,c=1,f=null,h="local-floor",m=1,p=null,_=null,x=null,g=null,M=null,b=null;const w=typeof XRWebGLBinding<"u",y=new QA,S={},I=i.getContextAttributes();let B=null,C=null;const O=[],N=[],P=new Ft;let T=null;const L=new Ai;L.viewport=new cn;const Y=new Ai;Y.viewport=new cn;const G=[L,Y],j=new oE;let pe=null,de=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ie){let Se=O[ie];return Se===void 0&&(Se=new Pd,O[ie]=Se),Se.getTargetRaySpace()},this.getControllerGrip=function(ie){let Se=O[ie];return Se===void 0&&(Se=new Pd,O[ie]=Se),Se.getGripSpace()},this.getHand=function(ie){let Se=O[ie];return Se===void 0&&(Se=new Pd,O[ie]=Se),Se.getHandSpace()};function J(ie){const Se=N.indexOf(ie.inputSource);if(Se===-1)return;const Me=O[Se];Me!==void 0&&(Me.update(ie.inputSource,ie.frame,p||f),Me.dispatchEvent({type:ie.type,data:ie.inputSource}))}function F(){l.removeEventListener("select",J),l.removeEventListener("selectstart",J),l.removeEventListener("selectend",J),l.removeEventListener("squeeze",J),l.removeEventListener("squeezestart",J),l.removeEventListener("squeezeend",J),l.removeEventListener("end",F),l.removeEventListener("inputsourceschange",H);for(let ie=0;ie<O.length;ie++){const Se=N[ie];Se!==null&&(N[ie]=null,O[ie].disconnect(Se))}pe=null,de=null,y.reset();for(const ie in S)delete S[ie];e.setRenderTarget(B),M=null,g=null,x=null,l=null,C=null,Le.stop(),s.isPresenting=!1,e.setPixelRatio(T),e.setSize(P.width,P.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ie){c=ie,s.isPresenting===!0&&st("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ie){h=ie,s.isPresenting===!0&&st("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||f},this.setReferenceSpace=function(ie){p=ie},this.getBaseLayer=function(){return g!==null?g:M},this.getBinding=function(){return x===null&&w&&(x=new XRWebGLBinding(l,i)),x},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function(ie){if(l=ie,l!==null){if(B=e.getRenderTarget(),l.addEventListener("select",J),l.addEventListener("selectstart",J),l.addEventListener("selectend",J),l.addEventListener("squeeze",J),l.addEventListener("squeezestart",J),l.addEventListener("squeezeend",J),l.addEventListener("end",F),l.addEventListener("inputsourceschange",H),I.xrCompatible!==!0&&await i.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(P),w&&"createProjectionLayer"in XRWebGLBinding.prototype){let Me=null,ze=null,nt=null;I.depth&&(nt=I.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Me=I.stencil?Ks:Ia,ze=I.stencil?dl:sa);const je={colorFormat:i.RGBA8,depthFormat:nt,scaleFactor:c};x=this.getBinding(),g=x.createProjectionLayer(je),l.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),C=new ia(g.textureWidth,g.textureHeight,{format:Gi,type:Ri,depthTexture:new no(g.textureWidth,g.textureHeight,ze,void 0,void 0,void 0,void 0,void 0,void 0,Me),stencilBuffer:I.stencil,colorSpace:e.outputColorSpace,samples:I.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const Me={antialias:I.antialias,alpha:!0,depth:I.depth,stencil:I.stencil,framebufferScaleFactor:c};M=new XRWebGLLayer(l,i,Me),l.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),C=new ia(M.framebufferWidth,M.framebufferHeight,{format:Gi,type:Ri,colorSpace:e.outputColorSpace,stencilBuffer:I.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(m),p=null,f=await l.requestReferenceSpace(h),Le.setContext(l),Le.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function H(ie){for(let Se=0;Se<ie.removed.length;Se++){const Me=ie.removed[Se],ze=N.indexOf(Me);ze>=0&&(N[ze]=null,O[ze].disconnect(Me))}for(let Se=0;Se<ie.added.length;Se++){const Me=ie.added[Se];let ze=N.indexOf(Me);if(ze===-1){for(let je=0;je<O.length;je++)if(je>=N.length){N.push(Me),ze=je;break}else if(N[je]===null){N[je]=Me,ze=je;break}if(ze===-1)break}const nt=O[ze];nt&&nt.connect(Me)}}const ee=new $,_e=new $;function be(ie,Se,Me){ee.setFromMatrixPosition(Se.matrixWorld),_e.setFromMatrixPosition(Me.matrixWorld);const ze=ee.distanceTo(_e),nt=Se.projectionMatrix.elements,je=Me.projectionMatrix.elements,Yt=nt[14]/(nt[10]-1),ct=nt[14]/(nt[10]+1),_t=(nt[9]+1)/nt[5],Ye=(nt[9]-1)/nt[5],Ze=(nt[8]-1)/nt[0],rt=(je[8]+1)/je[0],pt=Yt*Ze,Ct=Yt*rt,wt=ze/(-Ze+rt),ut=wt*-Ze;if(Se.matrixWorld.decompose(ie.position,ie.quaternion,ie.scale),ie.translateX(ut),ie.translateZ(wt),ie.matrixWorld.compose(ie.position,ie.quaternion,ie.scale),ie.matrixWorldInverse.copy(ie.matrixWorld).invert(),nt[10]===-1)ie.projectionMatrix.copy(Se.projectionMatrix),ie.projectionMatrixInverse.copy(Se.projectionMatrixInverse);else{const gt=Yt+wt,k=ct+wt,St=pt-ut,vt=Ct+(ze-ut),D=_t*ct/k*gt,E=Ye*ct/k*gt;ie.projectionMatrix.makePerspective(St,vt,D,E,gt,k),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert()}}function U(ie,Se){Se===null?ie.matrixWorld.copy(ie.matrix):ie.matrixWorld.multiplyMatrices(Se.matrixWorld,ie.matrix),ie.matrixWorldInverse.copy(ie.matrixWorld).invert()}this.updateCamera=function(ie){if(l===null)return;let Se=ie.near,Me=ie.far;y.texture!==null&&(y.depthNear>0&&(Se=y.depthNear),y.depthFar>0&&(Me=y.depthFar)),j.near=Y.near=L.near=Se,j.far=Y.far=L.far=Me,(pe!==j.near||de!==j.far)&&(l.updateRenderState({depthNear:j.near,depthFar:j.far}),pe=j.near,de=j.far),j.layers.mask=ie.layers.mask|6,L.layers.mask=j.layers.mask&-5,Y.layers.mask=j.layers.mask&-3;const ze=ie.parent,nt=j.cameras;U(j,ze);for(let je=0;je<nt.length;je++)U(nt[je],ze);nt.length===2?be(j,L,Y):j.projectionMatrix.copy(L.projectionMatrix),Z(ie,j,ze)};function Z(ie,Se,Me){Me===null?ie.matrix.copy(Se.matrixWorld):(ie.matrix.copy(Me.matrixWorld),ie.matrix.invert(),ie.matrix.multiply(Se.matrixWorld)),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.updateMatrixWorld(!0),ie.projectionMatrix.copy(Se.projectionMatrix),ie.projectionMatrixInverse.copy(Se.projectionMatrixInverse),ie.isPerspectiveCamera&&(ie.fov=hl*2*Math.atan(1/ie.projectionMatrix.elements[5]),ie.zoom=1)}this.getCamera=function(){return j},this.getFoveation=function(){if(!(g===null&&M===null))return m},this.setFoveation=function(ie){m=ie,g!==null&&(g.fixedFoveation=ie),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=ie)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(j)},this.getCameraTexture=function(ie){return S[ie]};let Ee=null;function Ce(ie,Se){if(_=Se.getViewerPose(p||f),b=Se,_!==null){const Me=_.views;M!==null&&(e.setRenderTargetFramebuffer(C,M.framebuffer),e.setRenderTarget(C));let ze=!1;Me.length!==j.cameras.length&&(j.cameras.length=0,ze=!0);for(let ct=0;ct<Me.length;ct++){const _t=Me[ct];let Ye=null;if(M!==null)Ye=M.getViewport(_t);else{const rt=x.getViewSubImage(g,_t);Ye=rt.viewport,ct===0&&(e.setRenderTargetTextures(C,rt.colorTexture,rt.depthStencilTexture),e.setRenderTarget(C))}let Ze=G[ct];Ze===void 0&&(Ze=new Ai,Ze.layers.enable(ct),Ze.viewport=new cn,G[ct]=Ze),Ze.matrix.fromArray(_t.transform.matrix),Ze.matrix.decompose(Ze.position,Ze.quaternion,Ze.scale),Ze.projectionMatrix.fromArray(_t.projectionMatrix),Ze.projectionMatrixInverse.copy(Ze.projectionMatrix).invert(),Ze.viewport.set(Ye.x,Ye.y,Ye.width,Ye.height),ct===0&&(j.matrix.copy(Ze.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale)),ze===!0&&j.cameras.push(Ze)}const nt=l.enabledFeatures;if(nt&&nt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&w){x=s.getBinding();const ct=x.getDepthInformation(Me[0]);ct&&ct.isValid&&ct.texture&&y.init(ct,l.renderState)}if(nt&&nt.includes("camera-access")&&w){e.state.unbindTexture(),x=s.getBinding();for(let ct=0;ct<Me.length;ct++){const _t=Me[ct].camera;if(_t){let Ye=S[_t];Ye||(Ye=new qv,S[_t]=Ye);const Ze=x.getCameraImage(_t);Ye.sourceTexture=Ze}}}}for(let Me=0;Me<O.length;Me++){const ze=N[Me],nt=O[Me];ze!==null&&nt!==void 0&&nt.update(ze,Se,p||f)}Ee&&Ee(ie,Se),Se.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:Se}),b=null}const Le=new Qv;Le.setAnimationLoop(Ce),this.setAnimationLoop=function(ie){Ee=ie},this.dispose=function(){}}}const JA=new dn,ix=new lt;ix.set(-1,0,0,0,1,0,0,0,1);function $A(r,e){function i(y,S){y.matrixAutoUpdate===!0&&y.updateMatrix(),S.value.copy(y.matrix)}function s(y,S){S.color.getRGB(y.fogColor.value,Yv(r)),S.isFog?(y.fogNear.value=S.near,y.fogFar.value=S.far):S.isFogExp2&&(y.fogDensity.value=S.density)}function l(y,S,I,B,C){S.isNodeMaterial?S.uniformsNeedUpdate=!1:S.isMeshBasicMaterial?c(y,S):S.isMeshLambertMaterial?(c(y,S),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)):S.isMeshToonMaterial?(c(y,S),x(y,S)):S.isMeshPhongMaterial?(c(y,S),_(y,S),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)):S.isMeshStandardMaterial?(c(y,S),g(y,S),S.isMeshPhysicalMaterial&&M(y,S,C)):S.isMeshMatcapMaterial?(c(y,S),b(y,S)):S.isMeshDepthMaterial?c(y,S):S.isMeshDistanceMaterial?(c(y,S),w(y,S)):S.isMeshNormalMaterial?c(y,S):S.isLineBasicMaterial?(f(y,S),S.isLineDashedMaterial&&h(y,S)):S.isPointsMaterial?m(y,S,I,B):S.isSpriteMaterial?p(y,S):S.isShadowMaterial?(y.color.value.copy(S.color),y.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function c(y,S){y.opacity.value=S.opacity,S.color&&y.diffuse.value.copy(S.color),S.emissive&&y.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(y.map.value=S.map,i(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,i(S.alphaMap,y.alphaMapTransform)),S.bumpMap&&(y.bumpMap.value=S.bumpMap,i(S.bumpMap,y.bumpMapTransform),y.bumpScale.value=S.bumpScale,S.side===ii&&(y.bumpScale.value*=-1)),S.normalMap&&(y.normalMap.value=S.normalMap,i(S.normalMap,y.normalMapTransform),y.normalScale.value.copy(S.normalScale),S.side===ii&&y.normalScale.value.negate()),S.displacementMap&&(y.displacementMap.value=S.displacementMap,i(S.displacementMap,y.displacementMapTransform),y.displacementScale.value=S.displacementScale,y.displacementBias.value=S.displacementBias),S.emissiveMap&&(y.emissiveMap.value=S.emissiveMap,i(S.emissiveMap,y.emissiveMapTransform)),S.specularMap&&(y.specularMap.value=S.specularMap,i(S.specularMap,y.specularMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest);const I=e.get(S),B=I.envMap,C=I.envMapRotation;B&&(y.envMap.value=B,y.envMapRotation.value.setFromMatrix4(JA.makeRotationFromEuler(C)).transpose(),B.isCubeTexture&&B.isRenderTargetTexture===!1&&y.envMapRotation.value.premultiply(ix),y.reflectivity.value=S.reflectivity,y.ior.value=S.ior,y.refractionRatio.value=S.refractionRatio),S.lightMap&&(y.lightMap.value=S.lightMap,y.lightMapIntensity.value=S.lightMapIntensity,i(S.lightMap,y.lightMapTransform)),S.aoMap&&(y.aoMap.value=S.aoMap,y.aoMapIntensity.value=S.aoMapIntensity,i(S.aoMap,y.aoMapTransform))}function f(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,S.map&&(y.map.value=S.map,i(S.map,y.mapTransform))}function h(y,S){y.dashSize.value=S.dashSize,y.totalSize.value=S.dashSize+S.gapSize,y.scale.value=S.scale}function m(y,S,I,B){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.size.value=S.size*I,y.scale.value=B*.5,S.map&&(y.map.value=S.map,i(S.map,y.uvTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,i(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function p(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.rotation.value=S.rotation,S.map&&(y.map.value=S.map,i(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,i(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function _(y,S){y.specular.value.copy(S.specular),y.shininess.value=Math.max(S.shininess,1e-4)}function x(y,S){S.gradientMap&&(y.gradientMap.value=S.gradientMap)}function g(y,S){y.metalness.value=S.metalness,S.metalnessMap&&(y.metalnessMap.value=S.metalnessMap,i(S.metalnessMap,y.metalnessMapTransform)),y.roughness.value=S.roughness,S.roughnessMap&&(y.roughnessMap.value=S.roughnessMap,i(S.roughnessMap,y.roughnessMapTransform)),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)}function M(y,S,I){y.ior.value=S.ior,S.sheen>0&&(y.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),y.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(y.sheenColorMap.value=S.sheenColorMap,i(S.sheenColorMap,y.sheenColorMapTransform)),S.sheenRoughnessMap&&(y.sheenRoughnessMap.value=S.sheenRoughnessMap,i(S.sheenRoughnessMap,y.sheenRoughnessMapTransform))),S.clearcoat>0&&(y.clearcoat.value=S.clearcoat,y.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(y.clearcoatMap.value=S.clearcoatMap,i(S.clearcoatMap,y.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,i(S.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(y.clearcoatNormalMap.value=S.clearcoatNormalMap,i(S.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===ii&&y.clearcoatNormalScale.value.negate())),S.dispersion>0&&(y.dispersion.value=S.dispersion),S.iridescence>0&&(y.iridescence.value=S.iridescence,y.iridescenceIOR.value=S.iridescenceIOR,y.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(y.iridescenceMap.value=S.iridescenceMap,i(S.iridescenceMap,y.iridescenceMapTransform)),S.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=S.iridescenceThicknessMap,i(S.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),S.transmission>0&&(y.transmission.value=S.transmission,y.transmissionSamplerMap.value=I.texture,y.transmissionSamplerSize.value.set(I.width,I.height),S.transmissionMap&&(y.transmissionMap.value=S.transmissionMap,i(S.transmissionMap,y.transmissionMapTransform)),y.thickness.value=S.thickness,S.thicknessMap&&(y.thicknessMap.value=S.thicknessMap,i(S.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=S.attenuationDistance,y.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(y.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(y.anisotropyMap.value=S.anisotropyMap,i(S.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=S.specularIntensity,y.specularColor.value.copy(S.specularColor),S.specularColorMap&&(y.specularColorMap.value=S.specularColorMap,i(S.specularColorMap,y.specularColorMapTransform)),S.specularIntensityMap&&(y.specularIntensityMap.value=S.specularIntensityMap,i(S.specularIntensityMap,y.specularIntensityMapTransform))}function b(y,S){S.matcap&&(y.matcap.value=S.matcap)}function w(y,S){const I=e.get(S).light;y.referencePosition.value.setFromMatrixPosition(I.matrixWorld),y.nearDistance.value=I.shadow.camera.near,y.farDistance.value=I.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function e2(r,e,i,s){let l={},c={},f=[];const h=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(C,O){const N=O.program;s.uniformBlockBinding(C,N)}function p(C,O){let N=l[C.id];N===void 0&&(y(C),N=_(C),l[C.id]=N,C.addEventListener("dispose",I));const P=O.program;s.updateUBOMapping(C,P);const T=e.render.frame;c[C.id]!==T&&(g(C),c[C.id]=T)}function _(C){const O=x();C.__bindingPointIndex=O;const N=r.createBuffer(),P=C.__size,T=C.usage;return r.bindBuffer(r.UNIFORM_BUFFER,N),r.bufferData(r.UNIFORM_BUFFER,P,T),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,O,N),N}function x(){for(let C=0;C<h;C++)if(f.indexOf(C)===-1)return f.push(C),C;return Nt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(C){const O=l[C.id],N=C.uniforms,P=C.__cache;r.bindBuffer(r.UNIFORM_BUFFER,O);for(let T=0,L=N.length;T<L;T++){const Y=N[T];if(Array.isArray(Y))for(let G=0,j=Y.length;G<j;G++)M(Y[G],T,G,P);else M(Y,T,0,P)}r.bindBuffer(r.UNIFORM_BUFFER,null)}function M(C,O,N,P){if(w(C,O,N,P)===!0){const T=C.__offset,L=C.value;if(Array.isArray(L)){let Y=0;for(let G=0;G<L.length;G++){const j=L[G],pe=S(j);b(j,C.__data,Y),typeof j!="number"&&typeof j!="boolean"&&!j.isMatrix3&&!ArrayBuffer.isView(j)&&(Y+=pe.storage/Float32Array.BYTES_PER_ELEMENT)}}else b(L,C.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,T,C.__data)}}function b(C,O,N){typeof C=="number"||typeof C=="boolean"?O[0]=C:C.isMatrix3?(O[0]=C.elements[0],O[1]=C.elements[1],O[2]=C.elements[2],O[3]=0,O[4]=C.elements[3],O[5]=C.elements[4],O[6]=C.elements[5],O[7]=0,O[8]=C.elements[6],O[9]=C.elements[7],O[10]=C.elements[8],O[11]=0):ArrayBuffer.isView(C)?O.set(new C.constructor(C.buffer,C.byteOffset,O.length)):C.toArray(O,N)}function w(C,O,N,P){const T=C.value,L=O+"_"+N;if(P[L]===void 0)return typeof T=="number"||typeof T=="boolean"?P[L]=T:ArrayBuffer.isView(T)?P[L]=T.slice():P[L]=T.clone(),!0;{const Y=P[L];if(typeof T=="number"||typeof T=="boolean"){if(Y!==T)return P[L]=T,!0}else{if(ArrayBuffer.isView(T))return!0;if(Y.equals(T)===!1)return Y.copy(T),!0}}return!1}function y(C){const O=C.uniforms;let N=0;const P=16;for(let L=0,Y=O.length;L<Y;L++){const G=Array.isArray(O[L])?O[L]:[O[L]];for(let j=0,pe=G.length;j<pe;j++){const de=G[j],J=Array.isArray(de.value)?de.value:[de.value];for(let F=0,H=J.length;F<H;F++){const ee=J[F],_e=S(ee),be=N%P,U=be%_e.boundary,Z=be+U;N+=U,Z!==0&&P-Z<_e.storage&&(N+=P-Z),de.__data=new Float32Array(_e.storage/Float32Array.BYTES_PER_ELEMENT),de.__offset=N,N+=_e.storage}}}const T=N%P;return T>0&&(N+=P-T),C.__size=N,C.__cache={},this}function S(C){const O={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(O.boundary=4,O.storage=4):C.isVector2?(O.boundary=8,O.storage=8):C.isVector3||C.isColor?(O.boundary=16,O.storage=12):C.isVector4?(O.boundary=16,O.storage=16):C.isMatrix3?(O.boundary=48,O.storage=48):C.isMatrix4?(O.boundary=64,O.storage=64):C.isTexture?st("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(C)?(O.boundary=16,O.storage=C.byteLength):st("WebGLRenderer: Unsupported uniform value type.",C),O}function I(C){const O=C.target;O.removeEventListener("dispose",I);const N=f.indexOf(O.__bindingPointIndex);f.splice(N,1),r.deleteBuffer(l[O.id]),delete l[O.id],delete c[O.id]}function B(){for(const C in l)r.deleteBuffer(l[C]);f=[],l={},c={}}return{bind:m,update:p,dispose:B}}const t2=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Qi=null;function n2(){return Qi===null&&(Qi=new qy(t2,16,16,Js,Pa),Qi.name="DFG_LUT",Qi.minFilter=yn,Qi.magFilter=yn,Qi.wrapS=Hi,Qi.wrapT=Hi,Qi.generateMipmaps=!1,Qi.needsUpdate=!0),Qi}class i2{constructor(e={}){const{canvas:i=oy(),context:s=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:x=!1,reversedDepthBuffer:g=!1,outputBufferType:M=Ri}=e;this.isWebGLRenderer=!0;let b;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=s.getContextAttributes().alpha}else b=f;const w=M,y=new Set([lp,op,rp]),S=new Set([Ri,sa,fl,dl,ap,sp]),I=new Uint32Array(4),B=new Int32Array(4),C=new $;let O=null,N=null;const P=[],T=[];let L=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=na,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const Y=this;let G=!1,j=null,pe=null,de=null,J=null;this._outputColorSpace=Zn;let F=0,H=0,ee=null,_e=-1,be=null;const U=new cn,Z=new cn;let Ee=null;const Ce=new Dt(0);let Le=0,ie=i.width,Se=i.height,Me=1,ze=null,nt=null;const je=new cn(0,0,ie,Se),Yt=new cn(0,0,ie,Se);let ct=!1;const _t=new kv;let Ye=!1,Ze=!1;const rt=new dn,pt=new $,Ct=new cn,wt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ut=!1;function gt(){return ee===null?Me:1}let k=s;function St(A,W){return i.getContext(A,W)}try{const A={alpha:!0,depth:l,stencil:c,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:_,failIfMajorPerformanceCaveat:x};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${np}`),i.addEventListener("webglcontextlost",Ht,!1),i.addEventListener("webglcontextrestored",Ut,!1),i.addEventListener("webglcontextcreationerror",kn,!1),k===null){const W="webgl2";if(k=St(W,A),k===null)throw St(W)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(A){throw Nt("WebGLRenderer: "+A.message),A}let vt,D,E,Q,te,ue,Re,De,fe,he,Te,Be,Ue,Ne,Je,Ke,at,X,Ae,me,we,Pe,ye;function Xe(){vt=new nT(k),vt.init(),we=new YA(k,vt),D=new Z1(k,vt,e,we),E=new WA(k,vt),D.reversedDepthBuffer&&g&&E.buffers.depth.setReversed(!0),pe=k.createFramebuffer(),de=k.createFramebuffer(),J=k.createFramebuffer(),Q=new sT(k),te=new UA,ue=new qA(k,vt,E,te,D,we,Q),Re=new tT(Y),De=new cE(k),Pe=new q1(k,De),fe=new iT(k,De,Q,Pe),he=new oT(k,fe,De,Pe,Q),X=new rT(k,D,ue),Je=new K1(te),Te=new DA(Y,Re,vt,D,Pe,Je),Be=new $A(Y,te),Ue=new LA,Ne=new zA(vt),at=new W1(Y,Re,E,he,b,m),Ke=new XA(Y,he,D),ye=new e2(k,Q,D,E),Ae=new Y1(k,vt,Q),me=new aT(k,vt,Q),Q.programs=Te.programs,Y.capabilities=D,Y.extensions=vt,Y.properties=te,Y.renderLists=Ue,Y.shadowMap=Ke,Y.state=E,Y.info=Q}Xe(),w!==Ri&&(L=new cT(w,i.width,i.height,h,l,c));const He=new jA(Y,k);this.xr=He,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const A=vt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=vt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Me},this.setPixelRatio=function(A){A!==void 0&&(Me=A,this.setSize(ie,Se,!1))},this.getSize=function(A){return A.set(ie,Se)},this.setSize=function(A,W,oe=!0){if(He.isPresenting){st("WebGLRenderer: Can't change size while VR device is presenting.");return}ie=A,Se=W,i.width=Math.floor(A*Me),i.height=Math.floor(W*Me),oe===!0&&(i.style.width=A+"px",i.style.height=W+"px"),L!==null&&L.setSize(i.width,i.height),this.setViewport(0,0,A,W)},this.getDrawingBufferSize=function(A){return A.set(ie*Me,Se*Me).floor()},this.setDrawingBufferSize=function(A,W,oe){ie=A,Se=W,Me=oe,i.width=Math.floor(A*oe),i.height=Math.floor(W*oe),this.setViewport(0,0,A,W)},this.setEffects=function(A){if(w===Ri){Nt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let W=0;W<A.length;W++)if(A[W].isOutputPass===!0){st("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}L.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(U)},this.getViewport=function(A){return A.copy(je)},this.setViewport=function(A,W,oe,se){A.isVector4?je.set(A.x,A.y,A.z,A.w):je.set(A,W,oe,se),E.viewport(U.copy(je).multiplyScalar(Me).round())},this.getScissor=function(A){return A.copy(Yt)},this.setScissor=function(A,W,oe,se){A.isVector4?Yt.set(A.x,A.y,A.z,A.w):Yt.set(A,W,oe,se),E.scissor(Z.copy(Yt).multiplyScalar(Me).round())},this.getScissorTest=function(){return ct},this.setScissorTest=function(A){E.setScissorTest(ct=A)},this.setOpaqueSort=function(A){ze=A},this.setTransparentSort=function(A){nt=A},this.getClearColor=function(A){return A.copy(at.getClearColor())},this.setClearColor=function(){at.setClearColor(...arguments)},this.getClearAlpha=function(){return at.getClearAlpha()},this.setClearAlpha=function(){at.setClearAlpha(...arguments)},this.clear=function(A=!0,W=!0,oe=!0){let se=0;if(A){let re=!1;if(ee!==null){const Ie=ee.texture.format;re=y.has(Ie)}if(re){const Ie=ee.texture.type,Ve=S.has(Ie),Oe=at.getClearColor(),We=at.getClearAlpha(),ke=Oe.r,et=Oe.g,ft=Oe.b;Ve?(I[0]=ke,I[1]=et,I[2]=ft,I[3]=We,k.clearBufferuiv(k.COLOR,0,I)):(B[0]=ke,B[1]=et,B[2]=ft,B[3]=We,k.clearBufferiv(k.COLOR,0,B))}else se|=k.COLOR_BUFFER_BIT}W&&(se|=k.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),oe&&(se|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),se!==0&&k.clear(se)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),j=A},this.dispose=function(){i.removeEventListener("webglcontextlost",Ht,!1),i.removeEventListener("webglcontextrestored",Ut,!1),i.removeEventListener("webglcontextcreationerror",kn,!1),at.dispose(),Ue.dispose(),Ne.dispose(),te.dispose(),Re.dispose(),he.dispose(),Pe.dispose(),ye.dispose(),Te.dispose(),He.dispose(),He.removeEventListener("sessionstart",Lt),He.removeEventListener("sessionend",$t),Cn.stop()};function Ht(A){A.preventDefault(),y_("WebGLRenderer: Context Lost."),G=!0}function Ut(){y_("WebGLRenderer: Context Restored."),G=!1;const A=Q.autoReset,W=Ke.enabled,oe=Ke.autoUpdate,se=Ke.needsUpdate,re=Ke.type;Xe(),Q.autoReset=A,Ke.enabled=W,Ke.autoUpdate=oe,Ke.needsUpdate=se,Ke.type=re}function kn(A){Nt("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Fn(A){const W=A.target;W.removeEventListener("dispose",Fn),Fa(W)}function Fa(A){hn(A),te.remove(A)}function hn(A){const W=te.get(A).programs;W!==void 0&&(W.forEach(function(oe){Te.releaseProgram(oe)}),A.isShaderMaterial&&Te.releaseShaderCache(A))}this.renderBufferDirect=function(A,W,oe,se,re,Ie){W===null&&(W=wt);const Ve=re.isMesh&&re.matrixWorld.determinantAffine()<0,Oe=Ga(A,W,oe,se,re);E.setMaterial(se,Ve);let We=oe.index,ke=1;if(se.wireframe===!0){if(We=fe.getWireframeAttribute(oe),We===void 0)return;ke=2}const et=oe.drawRange,ft=oe.attributes.position;let $e=et.start*ke,Ot=(et.start+et.count)*ke;Ie!==null&&($e=Math.max($e,Ie.start*ke),Ot=Math.min(Ot,(Ie.start+Ie.count)*ke)),We!==null?($e=Math.max($e,0),Ot=Math.min(Ot,We.count)):ft!=null&&($e=Math.max($e,0),Ot=Math.min(Ot,ft.count));const nn=Ot-$e;if(nn<0||nn===1/0)return;Pe.setup(re,se,Oe,oe,We);let jt,Gt=Ae;if(We!==null&&(jt=De.get(We),Gt=me,Gt.setIndex(jt)),re.isMesh)se.wireframe===!0?(E.setLineWidth(se.wireframeLinewidth*gt()),Gt.setMode(k.LINES)):Gt.setMode(k.TRIANGLES);else if(re.isLine){let Vt=se.linewidth;Vt===void 0&&(Vt=1),E.setLineWidth(Vt*gt()),re.isLineSegments?Gt.setMode(k.LINES):re.isLineLoop?Gt.setMode(k.LINE_LOOP):Gt.setMode(k.LINE_STRIP)}else re.isPoints?Gt.setMode(k.POINTS):re.isSprite&&Gt.setMode(k.TRIANGLES);if(re.isBatchedMesh)if(vt.get("WEBGL_multi_draw"))Gt.renderMultiDraw(re._multiDrawStarts,re._multiDrawCounts,re._multiDrawCount);else{const Vt=re._multiDrawStarts,Ge=re._multiDrawCounts,Bn=re._multiDrawCount,Mt=We?De.get(We).bytesPerElement:1,bn=te.get(se).currentProgram.getUniforms();for(let si=0;si<Bn;si++)bn.setValue(k,"_gl_DrawID",si),Gt.render(Vt[si]/Mt,Ge[si])}else if(re.isInstancedMesh)Gt.renderInstances($e,nn,re.count);else if(oe.isInstancedBufferGeometry){const Vt=oe._maxInstanceCount!==void 0?oe._maxInstanceCount:1/0,Ge=Math.min(oe.instanceCount,Vt);Gt.renderInstances($e,nn,Ge)}else Gt.render($e,nn)};function En(A,W,oe){A.transparent===!0&&A.side===Ji&&A.forceSinglePass===!1?(A.side=ii,A.needsUpdate=!0,Ha(A,W,oe),A.side=Oa,A.needsUpdate=!0,Ha(A,W,oe),A.side=Ji):Ha(A,W,oe)}this.compile=function(A,W,oe=null){oe===null&&(oe=A),N=Ne.get(oe),N.init(W),T.push(N),oe.traverseVisible(function(re){re.isLight&&re.layers.test(W.layers)&&(N.pushLight(re),re.castShadow&&N.pushShadow(re))}),A!==oe&&A.traverseVisible(function(re){re.isLight&&re.layers.test(W.layers)&&(N.pushLight(re),re.castShadow&&N.pushShadow(re))}),N.setupLights();const se=new Set;return A.traverse(function(re){if(!(re.isMesh||re.isPoints||re.isLine||re.isSprite))return;const Ie=re.material;if(Ie)if(Array.isArray(Ie))for(let Ve=0;Ve<Ie.length;Ve++){const Oe=Ie[Ve];En(Oe,oe,re),se.add(Oe)}else En(Ie,oe,re),se.add(Ie)}),N=T.pop(),se},this.compileAsync=function(A,W,oe=null){const se=this.compile(A,W,oe);return new Promise(re=>{function Ie(){if(se.forEach(function(Ve){te.get(Ve).currentProgram.isReady()&&se.delete(Ve)}),se.size===0){re(A);return}setTimeout(Ie,10)}vt.get("KHR_parallel_shader_compile")!==null?Ie():setTimeout(Ie,10)})};let ai=null;function pn(A){ai&&ai(A)}function Lt(){Cn.stop()}function $t(){Cn.start()}const Cn=new Qv;Cn.setAnimationLoop(pn),typeof self<"u"&&Cn.setContext(self),this.setAnimationLoop=function(A){ai=A,He.setAnimationLoop(A),A===null?Cn.stop():Cn.start()},He.addEventListener("sessionstart",Lt),He.addEventListener("sessionend",$t),this.render=function(A,W){if(W!==void 0&&W.isCamera!==!0){Nt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;j!==null&&j.renderStart(A,W);const oe=He.enabled===!0&&He.isPresenting===!0,se=L!==null&&(ee===null||oe)&&L.begin(Y,ee);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),He.enabled===!0&&He.isPresenting===!0&&(L===null||L.isCompositing()===!1)&&(He.cameraAutoUpdate===!0&&He.updateCamera(W),W=He.getCamera()),A.isScene===!0&&A.onBeforeRender(Y,A,W,ee),N=Ne.get(A,T.length),N.init(W),N.state.textureUnits=ue.getTextureUnits(),T.push(N),rt.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),_t.setFromProjectionMatrix(rt,ea,W.reversedDepth),Ze=this.localClippingEnabled,Ye=Je.init(this.clippingPlanes,Ze),O=Ue.get(A,P.length),O.init(),P.push(O),He.enabled===!0&&He.isPresenting===!0){const Ve=Y.xr.getDepthSensingMesh();Ve!==null&&Kn(Ve,W,-1/0,Y.sortObjects)}Kn(A,W,0,Y.sortObjects),O.finish(),Y.sortObjects===!0&&O.sort(ze,nt,W.reversedDepth),ut=He.enabled===!1||He.isPresenting===!1||He.hasDepthSensing()===!1,ut&&at.addToRenderList(O,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ye===!0&&Je.beginShadows();const re=N.state.shadowsArray;if(Ke.render(re,A,W),Ye===!0&&Je.endShadows(),(se&&L.hasRenderPass())===!1){const Ve=O.opaque,Oe=O.transmissive;if(N.setupLights(),W.isArrayCamera){const We=W.cameras;if(Oe.length>0)for(let ke=0,et=We.length;ke<et;ke++){const ft=We[ke];Ba(Ve,Oe,A,ft)}ut&&at.render(A);for(let ke=0,et=We.length;ke<et;ke++){const ft=We[ke];Ms(O,A,ft,ft.viewport)}}else Oe.length>0&&Ba(Ve,Oe,A,W),ut&&at.render(A),Ms(O,A,W)}ee!==null&&H===0&&(ue.updateMultisampleRenderTarget(ee),ue.updateRenderTargetMipmap(ee)),se&&L.end(Y),A.isScene===!0&&A.onAfterRender(Y,A,W),Pe.resetDefaultState(),_e=-1,be=null,T.pop(),T.length>0?(N=T[T.length-1],ue.setTextureUnits(N.state.textureUnits),Ye===!0&&Je.setGlobalState(Y.clippingPlanes,N.state.camera)):N=null,P.pop(),P.length>0?O=P[P.length-1]:O=null,j!==null&&j.renderEnd()};function Kn(A,W,oe,se){if(A.visible===!1)return;if(A.layers.test(W.layers)){if(A.isGroup)oe=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(W);else if(A.isLightProbeGrid)N.pushLightProbeGrid(A);else if(A.isLight)N.pushLight(A),A.castShadow&&N.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||_t.intersectsSprite(A)){se&&Ct.setFromMatrixPosition(A.matrixWorld).applyMatrix4(rt);const Ve=he.update(A),Oe=A.material;Oe.visible&&O.push(A,Ve,Oe,oe,Ct.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||_t.intersectsObject(A))){const Ve=he.update(A),Oe=A.material;if(se&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ct.copy(A.boundingSphere.center)):(Ve.boundingSphere===null&&Ve.computeBoundingSphere(),Ct.copy(Ve.boundingSphere.center)),Ct.applyMatrix4(A.matrixWorld).applyMatrix4(rt)),Array.isArray(Oe)){const We=Ve.groups;for(let ke=0,et=We.length;ke<et;ke++){const ft=We[ke],$e=Oe[ft.materialIndex];$e&&$e.visible&&O.push(A,Ve,$e,oe,Ct.z,ft)}}else Oe.visible&&O.push(A,Ve,Oe,oe,Ct.z,null)}}const Ie=A.children;for(let Ve=0,Oe=Ie.length;Ve<Oe;Ve++)Kn(Ie[Ve],W,oe,se)}function Ms(A,W,oe,se){const{opaque:re,transmissive:Ie,transparent:Ve}=A;N.setupLightsView(oe),Ye===!0&&Je.setGlobalState(Y.clippingPlanes,oe),se&&E.viewport(U.copy(se)),re.length>0&&ki(re,W,oe),Ie.length>0&&ki(Ie,W,oe),Ve.length>0&&ki(Ve,W,oe),E.buffers.depth.setTest(!0),E.buffers.depth.setMask(!0),E.buffers.color.setMask(!0),E.setPolygonOffset(!1)}function Ba(A,W,oe,se){if((oe.isScene===!0?oe.overrideMaterial:null)!==null)return;if(N.state.transmissionRenderTarget[se.id]===void 0){const $e=vt.has("EXT_color_buffer_half_float")||vt.has("EXT_color_buffer_float");N.state.transmissionRenderTarget[se.id]=new ia(1,1,{generateMipmaps:!0,type:$e?Pa:Ri,minFilter:xs,samples:Math.max(4,D.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Rt.workingColorSpace})}const Ie=N.state.transmissionRenderTarget[se.id],Ve=se.viewport||U;Ie.setSize(Ve.z*Y.transmissionResolutionScale,Ve.w*Y.transmissionResolutionScale);const Oe=Y.getRenderTarget(),We=Y.getActiveCubeFace(),ke=Y.getActiveMipmapLevel();Y.setRenderTarget(Ie),Y.getClearColor(Ce),Le=Y.getClearAlpha(),Le<1&&Y.setClearColor(16777215,.5),Y.clear(),ut&&at.render(oe);const et=Y.toneMapping;Y.toneMapping=na;const ft=se.viewport;if(se.viewport!==void 0&&(se.viewport=void 0),N.setupLightsView(se),Ye===!0&&Je.setGlobalState(Y.clippingPlanes,se),ki(A,oe,se),ue.updateMultisampleRenderTarget(Ie),ue.updateRenderTargetMipmap(Ie),vt.has("WEBGL_multisampled_render_to_texture")===!1){let $e=!1;for(let Ot=0,nn=W.length;Ot<nn;Ot++){const jt=W[Ot],{object:Gt,geometry:Vt,material:Ge,group:Bn}=jt;if(Ge.side===Ji&&Gt.layers.test(se.layers)){const Mt=Ge.side;Ge.side=ii,Ge.needsUpdate=!0,za(Gt,oe,se,Vt,Ge,Bn),Ge.side=Mt,Ge.needsUpdate=!0,$e=!0}}$e===!0&&(ue.updateMultisampleRenderTarget(Ie),ue.updateRenderTargetMipmap(Ie))}Y.setRenderTarget(Oe,We,ke),Y.setClearColor(Ce,Le),ft!==void 0&&(se.viewport=ft),Y.toneMapping=et}function ki(A,W,oe){const se=W.isScene===!0?W.overrideMaterial:null;for(let re=0,Ie=A.length;re<Ie;re++){const Ve=A[re],{object:Oe,geometry:We,group:ke}=Ve;let et=Ve.material;et.allowOverride===!0&&se!==null&&(et=se),Oe.layers.test(oe.layers)&&za(Oe,W,oe,We,et,ke)}}function za(A,W,oe,se,re,Ie){A.onBeforeRender(Y,W,oe,se,re,Ie),A.modelViewMatrix.multiplyMatrices(oe.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),re.onBeforeRender(Y,W,oe,se,A,Ie),re.transparent===!0&&re.side===Ji&&re.forceSinglePass===!1?(re.side=ii,re.needsUpdate=!0,Y.renderBufferDirect(oe,W,se,re,A,Ie),re.side=Oa,re.needsUpdate=!0,Y.renderBufferDirect(oe,W,se,re,A,Ie),re.side=Ji):Y.renderBufferDirect(oe,W,se,re,A,Ie),A.onAfterRender(Y,W,oe,se,re,Ie)}function Ha(A,W,oe){W.isScene!==!0&&(W=wt);const se=te.get(A),re=N.state.lights,Ie=N.state.shadowsArray,Ve=re.state.version,Oe=Te.getParameters(A,re.state,Ie,W,oe,N.state.lightProbeGridArray),We=Te.getProgramCacheKey(Oe);let ke=se.programs;se.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?W.environment:null,se.fog=W.fog;const et=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;se.envMap=Re.get(A.envMap||se.environment,et),se.envMapRotation=se.environment!==null&&A.envMap===null?W.environmentRotation:A.envMapRotation,ke===void 0&&(A.addEventListener("dispose",Fn),ke=new Map,se.programs=ke);let ft=ke.get(We);if(ft!==void 0){if(se.currentProgram===ft&&se.lightsStateVersion===Ve)return oa(A,Oe),ft}else Oe.uniforms=Te.getUniforms(A),j!==null&&A.isNodeMaterial&&j.build(A,oe,Oe),A.onBeforeCompile(Oe,Y),ft=Te.acquireProgram(Oe,We),ke.set(We,ft),se.uniforms=Oe.uniforms;const $e=se.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&($e.clippingPlanes=Je.uniform),oa(A,Oe),se.needsLights=_l(A),se.lightsStateVersion=Ve,se.needsLights&&($e.ambientLightColor.value=re.state.ambient,$e.lightProbe.value=re.state.probe,$e.directionalLights.value=re.state.directional,$e.directionalLightShadows.value=re.state.directionalShadow,$e.spotLights.value=re.state.spot,$e.spotLightShadows.value=re.state.spotShadow,$e.rectAreaLights.value=re.state.rectArea,$e.ltc_1.value=re.state.rectAreaLTC1,$e.ltc_2.value=re.state.rectAreaLTC2,$e.pointLights.value=re.state.point,$e.pointLightShadows.value=re.state.pointShadow,$e.hemisphereLights.value=re.state.hemi,$e.directionalShadowMatrix.value=re.state.directionalShadowMatrix,$e.spotLightMatrix.value=re.state.spotLightMatrix,$e.spotLightMap.value=re.state.spotLightMap,$e.pointShadowMatrix.value=re.state.pointShadowMatrix),se.lightProbeGrid=N.state.lightProbeGridArray.length>0,se.currentProgram=ft,se.uniformsList=null,ft}function ra(A){if(A.uniformsList===null){const W=A.currentProgram.getUniforms();A.uniformsList=tu.seqWithValue(W.seq,A.uniforms)}return A.uniformsList}function oa(A,W){const oe=te.get(A);oe.outputColorSpace=W.outputColorSpace,oe.batching=W.batching,oe.batchingColor=W.batchingColor,oe.instancing=W.instancing,oe.instancingColor=W.instancingColor,oe.instancingMorph=W.instancingMorph,oe.skinning=W.skinning,oe.morphTargets=W.morphTargets,oe.morphNormals=W.morphNormals,oe.morphColors=W.morphColors,oe.morphTargetsCount=W.morphTargetsCount,oe.numClippingPlanes=W.numClippingPlanes,oe.numIntersection=W.numClipIntersection,oe.vertexAlphas=W.vertexAlphas,oe.vertexTangents=W.vertexTangents,oe.toneMapping=W.toneMapping}function ys(A,W){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;C.setFromMatrixPosition(W.matrixWorld);for(let oe=0,se=A.length;oe<se;oe++){const re=A[oe];if(re.texture!==null&&re.boundingBox.containsPoint(C))return re}return null}function Ga(A,W,oe,se,re){W.isScene!==!0&&(W=wt),ue.resetTextureUnits();const Ie=W.fog,Ve=se.isMeshStandardMaterial||se.isMeshLambertMaterial||se.isMeshPhongMaterial?W.environment:null,Oe=ee===null?Y.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:Rt.workingColorSpace,We=se.isMeshStandardMaterial||se.isMeshLambertMaterial&&!se.envMap||se.isMeshPhongMaterial&&!se.envMap,ke=Re.get(se.envMap||Ve,We),et=se.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,ft=!!oe.attributes.tangent&&(!!se.normalMap||se.anisotropy>0),$e=!!oe.morphAttributes.position,Ot=!!oe.morphAttributes.normal,nn=!!oe.morphAttributes.color;let jt=na;se.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(jt=Y.toneMapping);const Gt=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,Vt=Gt!==void 0?Gt.length:0,Ge=te.get(se),Bn=N.state.lights;if(Ye===!0&&(Ze===!0||A!==be)){const zt=A===be&&se.id===_e;Je.setState(se,A,zt)}let Mt=!1;se.version===Ge.__version?(Ge.needsLights&&Ge.lightsStateVersion!==Bn.state.version||Ge.outputColorSpace!==Oe||re.isBatchedMesh&&Ge.batching===!1||!re.isBatchedMesh&&Ge.batching===!0||re.isBatchedMesh&&Ge.batchingColor===!0&&re.colorTexture===null||re.isBatchedMesh&&Ge.batchingColor===!1&&re.colorTexture!==null||re.isInstancedMesh&&Ge.instancing===!1||!re.isInstancedMesh&&Ge.instancing===!0||re.isSkinnedMesh&&Ge.skinning===!1||!re.isSkinnedMesh&&Ge.skinning===!0||re.isInstancedMesh&&Ge.instancingColor===!0&&re.instanceColor===null||re.isInstancedMesh&&Ge.instancingColor===!1&&re.instanceColor!==null||re.isInstancedMesh&&Ge.instancingMorph===!0&&re.morphTexture===null||re.isInstancedMesh&&Ge.instancingMorph===!1&&re.morphTexture!==null||Ge.envMap!==ke||se.fog===!0&&Ge.fog!==Ie||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==Je.numPlanes||Ge.numIntersection!==Je.numIntersection)||Ge.vertexAlphas!==et||Ge.vertexTangents!==ft||Ge.morphTargets!==$e||Ge.morphNormals!==Ot||Ge.morphColors!==nn||Ge.toneMapping!==jt||Ge.morphTargetsCount!==Vt||!!Ge.lightProbeGrid!=N.state.lightProbeGridArray.length>0)&&(Mt=!0):(Mt=!0,Ge.__version=se.version);let bn=Ge.currentProgram;Mt===!0&&(bn=Ha(se,W,re),j&&se.isNodeMaterial&&j.onUpdateProgram(se,bn,Ge));let si=!1,Ui=!1,ri=!1;const kt=bn.getUniforms(),an=Ge.uniforms;if(E.useProgram(bn.program)&&(si=!0,Ui=!0,ri=!0),se.id!==_e&&(_e=se.id,Ui=!0),Ge.needsLights){const zt=ys(N.state.lightProbeGridArray,re);Ge.lightProbeGrid!==zt&&(Ge.lightProbeGrid=zt,Ui=!0)}if(si||be!==A){E.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),kt.setValue(k,"projectionMatrix",A.projectionMatrix),kt.setValue(k,"viewMatrix",A.matrixWorldInverse);const Xi=kt.map.cameraPosition;Xi!==void 0&&Xi.setValue(k,pt.setFromMatrixPosition(A.matrixWorld)),D.logarithmicDepthBuffer&&kt.setValue(k,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(se.isMeshPhongMaterial||se.isMeshToonMaterial||se.isMeshLambertMaterial||se.isMeshBasicMaterial||se.isMeshStandardMaterial||se.isShaderMaterial)&&kt.setValue(k,"isOrthographic",A.isOrthographicCamera===!0),be!==A&&(be=A,Ui=!0,ri=!0)}if(Ge.needsLights&&(Bn.state.directionalShadowMap.length>0&&kt.setValue(k,"directionalShadowMap",Bn.state.directionalShadowMap,ue),Bn.state.spotShadowMap.length>0&&kt.setValue(k,"spotShadowMap",Bn.state.spotShadowMap,ue),Bn.state.pointShadowMap.length>0&&kt.setValue(k,"pointShadowMap",Bn.state.pointShadowMap,ue)),re.isSkinnedMesh){kt.setOptional(k,re,"bindMatrix"),kt.setOptional(k,re,"bindMatrixInverse");const zt=re.skeleton;zt&&(zt.boneTexture===null&&zt.computeBoneTexture(),kt.setValue(k,"boneTexture",zt.boneTexture,ue))}re.isBatchedMesh&&(kt.setOptional(k,re,"batchingTexture"),kt.setValue(k,"batchingTexture",re._matricesTexture,ue),kt.setOptional(k,re,"batchingIdTexture"),kt.setValue(k,"batchingIdTexture",re._indirectTexture,ue),kt.setOptional(k,re,"batchingColorTexture"),re._colorsTexture!==null&&kt.setValue(k,"batchingColorTexture",re._colorsTexture,ue));const Ni=oe.morphAttributes;if((Ni.position!==void 0||Ni.normal!==void 0||Ni.color!==void 0)&&X.update(re,oe,bn),(Ui||Ge.receiveShadow!==re.receiveShadow)&&(Ge.receiveShadow=re.receiveShadow,kt.setValue(k,"receiveShadow",re.receiveShadow)),(se.isMeshStandardMaterial||se.isMeshLambertMaterial||se.isMeshPhongMaterial)&&se.envMap===null&&W.environment!==null&&(an.envMapIntensity.value=W.environmentIntensity),an.dfgLUT!==void 0&&(an.dfgLUT.value=n2()),Ui){if(kt.setValue(k,"toneMappingExposure",Y.toneMappingExposure),Ge.needsLights&&mn(an,ri),Ie&&se.fog===!0&&Be.refreshFogUniforms(an,Ie),Be.refreshMaterialUniforms(an,se,Me,Se,N.state.transmissionRenderTarget[A.id]),Ge.needsLights&&Ge.lightProbeGrid){const zt=Ge.lightProbeGrid;an.probesSH.value=zt.texture,an.probesMin.value.copy(zt.boundingBox.min),an.probesMax.value.copy(zt.boundingBox.max),an.probesResolution.value.copy(zt.resolution)}tu.upload(k,ra(Ge),an,ue)}if(se.isShaderMaterial&&se.uniformsNeedUpdate===!0&&(tu.upload(k,ra(Ge),an,ue),se.uniformsNeedUpdate=!1),se.isSpriteMaterial&&kt.setValue(k,"center",re.center),kt.setValue(k,"modelViewMatrix",re.modelViewMatrix),kt.setValue(k,"normalMatrix",re.normalMatrix),kt.setValue(k,"modelMatrix",re.matrixWorld),se.uniformsGroups!==void 0){const zt=se.uniformsGroups;for(let Xi=0,Va=zt.length;Xi<Va;Xi++){const Es=zt[Xi];ye.update(Es,bn),ye.bind(Es,bn)}}return bn}function mn(A,W){A.ambientLightColor.needsUpdate=W,A.lightProbe.needsUpdate=W,A.directionalLights.needsUpdate=W,A.directionalLightShadows.needsUpdate=W,A.pointLights.needsUpdate=W,A.pointLightShadows.needsUpdate=W,A.spotLights.needsUpdate=W,A.spotLightShadows.needsUpdate=W,A.rectAreaLights.needsUpdate=W,A.hemisphereLights.needsUpdate=W}function _l(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return ee},this.setRenderTargetTextures=function(A,W,oe){const se=te.get(A);se.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,se.__autoAllocateDepthBuffer===!1&&(se.__useRenderToTexture=!1),te.get(A.texture).__webglTexture=W,te.get(A.depthTexture).__webglTexture=se.__autoAllocateDepthBuffer?void 0:oe,se.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,W){const oe=te.get(A);oe.__webglFramebuffer=W,oe.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(A,W=0,oe=0){ee=A,F=W,H=oe;let se=null,re=!1,Ie=!1;if(A){const Oe=te.get(A);if(Oe.__useDefaultFramebuffer!==void 0){E.bindFramebuffer(k.FRAMEBUFFER,Oe.__webglFramebuffer),U.copy(A.viewport),Z.copy(A.scissor),Ee=A.scissorTest,E.viewport(U),E.scissor(Z),E.setScissorTest(Ee),_e=-1;return}else if(Oe.__webglFramebuffer===void 0)ue.setupRenderTarget(A);else if(Oe.__hasExternalTextures)ue.rebindTextures(A,te.get(A.texture).__webglTexture,te.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const et=A.depthTexture;if(Oe.__boundDepthTexture!==et){if(et!==null&&te.has(et)&&(A.width!==et.image.width||A.height!==et.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ue.setupDepthRenderbuffer(A)}}const We=A.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(Ie=!0);const ke=te.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(ke[W])?se=ke[W][oe]:se=ke[W],re=!0):A.samples>0&&ue.useMultisampledRTT(A)===!1?se=te.get(A).__webglMultisampledFramebuffer:Array.isArray(ke)?se=ke[oe]:se=ke,U.copy(A.viewport),Z.copy(A.scissor),Ee=A.scissorTest}else U.copy(je).multiplyScalar(Me).floor(),Z.copy(Yt).multiplyScalar(Me).floor(),Ee=ct;if(oe!==0&&(se=pe),E.bindFramebuffer(k.FRAMEBUFFER,se)&&E.drawBuffers(A,se),E.viewport(U),E.scissor(Z),E.setScissorTest(Ee),re){const Oe=te.get(A.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+W,Oe.__webglTexture,oe)}else if(Ie){const Oe=W;for(let We=0;We<A.textures.length;We++){const ke=te.get(A.textures[We]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+We,ke.__webglTexture,oe,Oe)}}else if(A!==null&&oe!==0){const Oe=te.get(A.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Oe.__webglTexture,oe)}_e=-1},this.readRenderTargetPixels=function(A,W,oe,se,re,Ie,Ve,Oe=0){if(!(A&&A.isWebGLRenderTarget)){Nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let We=te.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ve!==void 0&&(We=We[Ve]),We){E.bindFramebuffer(k.FRAMEBUFFER,We);try{const ke=A.textures[Oe],et=ke.format,ft=ke.type;if(A.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Oe),!D.textureFormatReadable(et)){Nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!D.textureTypeReadable(ft)){Nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=A.width-se&&oe>=0&&oe<=A.height-re&&k.readPixels(W,oe,se,re,we.convert(et),we.convert(ft),Ie)}finally{const ke=ee!==null?te.get(ee).__webglFramebuffer:null;E.bindFramebuffer(k.FRAMEBUFFER,ke)}}},this.readRenderTargetPixelsAsync=async function(A,W,oe,se,re,Ie,Ve,Oe=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let We=te.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ve!==void 0&&(We=We[Ve]),We)if(W>=0&&W<=A.width-se&&oe>=0&&oe<=A.height-re){E.bindFramebuffer(k.FRAMEBUFFER,We);const ke=A.textures[Oe],et=ke.format,ft=ke.type;if(A.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Oe),!D.textureFormatReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!D.textureTypeReadable(ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const $e=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,$e),k.bufferData(k.PIXEL_PACK_BUFFER,Ie.byteLength,k.STREAM_READ),k.readPixels(W,oe,se,re,we.convert(et),we.convert(ft),0);const Ot=ee!==null?te.get(ee).__webglFramebuffer:null;E.bindFramebuffer(k.FRAMEBUFFER,Ot);const nn=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await ly(k,nn,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,$e),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,Ie),k.deleteBuffer($e),k.deleteSync(nn),Ie}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,W=null,oe=0){const se=Math.pow(2,-oe),re=Math.floor(A.image.width*se),Ie=Math.floor(A.image.height*se),Ve=W!==null?W.x:0,Oe=W!==null?W.y:0;ue.setTexture2D(A,0),k.copyTexSubImage2D(k.TEXTURE_2D,oe,0,0,Ve,Oe,re,Ie),E.unbindTexture()},this.copyTextureToTexture=function(A,W,oe=null,se=null,re=0,Ie=0){let Ve,Oe,We,ke,et,ft,$e,Ot,nn;const jt=A.isCompressedTexture?A.mipmaps[Ie]:A.image;if(oe!==null)Ve=oe.max.x-oe.min.x,Oe=oe.max.y-oe.min.y,We=oe.isBox3?oe.max.z-oe.min.z:1,ke=oe.min.x,et=oe.min.y,ft=oe.isBox3?oe.min.z:0;else{const an=Math.pow(2,-re);Ve=Math.floor(jt.width*an),Oe=Math.floor(jt.height*an),A.isDataArrayTexture?We=jt.depth:A.isData3DTexture?We=Math.floor(jt.depth*an):We=1,ke=0,et=0,ft=0}se!==null?($e=se.x,Ot=se.y,nn=se.z):($e=0,Ot=0,nn=0);const Gt=we.convert(W.format),Vt=we.convert(W.type);let Ge;W.isData3DTexture?(ue.setTexture3D(W,0),Ge=k.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(ue.setTexture2DArray(W,0),Ge=k.TEXTURE_2D_ARRAY):(ue.setTexture2D(W,0),Ge=k.TEXTURE_2D),E.activeTexture(k.TEXTURE0),E.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,W.flipY),E.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),E.pixelStorei(k.UNPACK_ALIGNMENT,W.unpackAlignment);const Bn=E.getParameter(k.UNPACK_ROW_LENGTH),Mt=E.getParameter(k.UNPACK_IMAGE_HEIGHT),bn=E.getParameter(k.UNPACK_SKIP_PIXELS),si=E.getParameter(k.UNPACK_SKIP_ROWS),Ui=E.getParameter(k.UNPACK_SKIP_IMAGES);E.pixelStorei(k.UNPACK_ROW_LENGTH,jt.width),E.pixelStorei(k.UNPACK_IMAGE_HEIGHT,jt.height),E.pixelStorei(k.UNPACK_SKIP_PIXELS,ke),E.pixelStorei(k.UNPACK_SKIP_ROWS,et),E.pixelStorei(k.UNPACK_SKIP_IMAGES,ft);const ri=A.isDataArrayTexture||A.isData3DTexture,kt=W.isDataArrayTexture||W.isData3DTexture;if(A.isDepthTexture){const an=te.get(A),Ni=te.get(W),zt=te.get(an.__renderTarget),Xi=te.get(Ni.__renderTarget);E.bindFramebuffer(k.READ_FRAMEBUFFER,zt.__webglFramebuffer),E.bindFramebuffer(k.DRAW_FRAMEBUFFER,Xi.__webglFramebuffer);for(let Va=0;Va<We;Va++)ri&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,te.get(A).__webglTexture,re,ft+Va),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,te.get(W).__webglTexture,Ie,nn+Va)),k.blitFramebuffer(ke,et,Ve,Oe,$e,Ot,Ve,Oe,k.DEPTH_BUFFER_BIT,k.NEAREST);E.bindFramebuffer(k.READ_FRAMEBUFFER,null),E.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(re!==0||A.isRenderTargetTexture||te.has(A)){const an=te.get(A),Ni=te.get(W);E.bindFramebuffer(k.READ_FRAMEBUFFER,de),E.bindFramebuffer(k.DRAW_FRAMEBUFFER,J);for(let zt=0;zt<We;zt++)ri?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,an.__webglTexture,re,ft+zt):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,an.__webglTexture,re),kt?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Ni.__webglTexture,Ie,nn+zt):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Ni.__webglTexture,Ie),re!==0?k.blitFramebuffer(ke,et,Ve,Oe,$e,Ot,Ve,Oe,k.COLOR_BUFFER_BIT,k.NEAREST):kt?k.copyTexSubImage3D(Ge,Ie,$e,Ot,nn+zt,ke,et,Ve,Oe):k.copyTexSubImage2D(Ge,Ie,$e,Ot,ke,et,Ve,Oe);E.bindFramebuffer(k.READ_FRAMEBUFFER,null),E.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else kt?A.isDataTexture||A.isData3DTexture?k.texSubImage3D(Ge,Ie,$e,Ot,nn,Ve,Oe,We,Gt,Vt,jt.data):W.isCompressedArrayTexture?k.compressedTexSubImage3D(Ge,Ie,$e,Ot,nn,Ve,Oe,We,Gt,jt.data):k.texSubImage3D(Ge,Ie,$e,Ot,nn,Ve,Oe,We,Gt,Vt,jt):A.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,Ie,$e,Ot,Ve,Oe,Gt,Vt,jt.data):A.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,Ie,$e,Ot,jt.width,jt.height,Gt,jt.data):k.texSubImage2D(k.TEXTURE_2D,Ie,$e,Ot,Ve,Oe,Gt,Vt,jt);E.pixelStorei(k.UNPACK_ROW_LENGTH,Bn),E.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Mt),E.pixelStorei(k.UNPACK_SKIP_PIXELS,bn),E.pixelStorei(k.UNPACK_SKIP_ROWS,si),E.pixelStorei(k.UNPACK_SKIP_IMAGES,Ui),Ie===0&&W.generateMipmaps&&k.generateMipmap(Ge),E.unbindTexture()},this.initRenderTarget=function(A){te.get(A).__webglFramebuffer===void 0&&ue.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?ue.setTextureCube(A,0):A.isData3DTexture?ue.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?ue.setTexture2DArray(A,0):ue.setTexture2D(A,0),E.unbindTexture()},this.resetState=function(){F=0,H=0,ee=null,E.reset(),Pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ea}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Rt._getDrawingBufferColorSpace(e),i.unpackColorSpace=Rt._getUnpackColorSpace()}}const a2="/assets/Reckk-RegularItalic-DLM8ilig.ttf",s2="/assets/Reckk-MediumItalic-D_uyfX4p.otf",r2="/assets/CXLMediumItalic-DYSp-DoC.otf",Kr=ch.verbs.map((r,e)=>{const i=[{top:"#c8f5a8",mid:"#0a1410",bot:"#1a3d2e"},{top:"#9ee089",mid:"#060e18",bot:"#1e3a52"},{top:"#f0e6a0",mid:"#0c1008",bot:"#2a3820"},{top:"#7fd9a8",mid:"#080810",bot:"#243048"}];return{verb:r.verb,caption:r.caption,mood:i[e]??i[0]}}),Yn=Kr.length,Da=2.95,cl=6.9,mp=32,gp=4,_p=5,ep=2.05,o2=1,l2=Da*.55,pv=.35,mv=.85;function ax(r){return r<520?{mode:"mobile",canvasW:1280,canvasH:320,fontPx:112,planeBaseW:4.55,frustumFill:.9}:r<900?{mode:"tablet",canvasW:1600,canvasH:360,fontPx:132,planeBaseW:5.25,frustumFill:.94}:{mode:"desktop",canvasW:1920,canvasH:420,fontPx:152,planeBaseW:6.1,frustumFill:.96}}const c2=1.35,u2=.72,f2=.62,d2=.2,h2=14,p2=.42,m2=128,g2=12,_2=.004,v2=.0022,gv=.12,x2=.88,S2=4,M2=22,y2=32,E2=40,b2=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,T2=`
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
`,A2='"Reckk Heading", Georgia, "Times New Roman", serif',sx="Morpheum Wordmark",pl=`"${sx}"`,R2=[{t:0,c:"#e8ffe0"},{t:.45,c:"#c8f5a8"},{t:1,c:"#f0e6a0"}];async function C2(){if(typeof document>"u"||!document.fonts)return!1;try{const r=new FontFace(sx,`url(${r2})`,{weight:"normal",style:"normal"});document.fonts.add(await r.load()),await document.fonts.load(`normal 152px ${pl}`);const e=document.fonts.check(`normal 152px ${pl}`);return e||console.error("[FlowIntro] Morpheum Wordmark failed to bind — title will not use Reckk fallback"),e}catch(r){return console.error("[FlowIntro] Morpheum Wordmark load failed",r),!1}}async function w2(){if(!(typeof document>"u"||!document.fonts))try{await C2();const r=new FontFace("Reckk Title",`url(${s2})`,{weight:"normal",style:"normal"});document.fonts.add(await r.load());const e=new FontFace("Reckk Heading",`url(${a2})`,{weight:"normal",style:"normal"});document.fonts.add(await e.load()),await document.fonts.ready,await document.fonts.load(`normal 152px ${pl}`),await document.fonts.load('normal 64px "Reckk Heading"'),await document.fonts.load('normal 124px "Reckk Title"')}catch{}}const Ws="flow-intro-hide-chrome";function D2(r){return r<=72}const U2=280;function N2(r){const e=document.documentElement,i=e.style.scrollBehavior;e.style.scrollBehavior="auto",window.scrollTo(0,Math.max(0,r)),e.style.scrollBehavior=i}function oh(){const r=document.getElementById("hero");if(!r)return;const e=r.getBoundingClientRect().top+window.scrollY;N2(e)}function ul(r){const e=Un.clamp(r,0,1);return e*e*e*(e*(e*6-15)+10)}function rx(r,e,i){const s=e.split(/\s+/),l=[];let c="";for(const f of s){const h=c?`${c} ${f}`:f;r.measureText(h).width<=i?c=h:(c&&l.push(c),c=f)}return c&&l.push(c),l}function L2(r,e){const s=e<520?300:400,l=Math.round(s*r),c=Math.round(l*_p/gp);return{W:l,H:c}}function lh(r){const e=Math.max(1,r),i=Math.max(1,Yn*e*o2),s=Math.max(1,i/Math.max(1,Yn-1));return{cardPx:i,titlePx:s,totalPx:i+s}}function ox(r,e){const i=r/Math.max(1,e),s=mp*Math.PI/180,l=2*cl*Math.tan(s/2),c=l*i,f=ep*gp/_p,h=.992,m=h*l/ep,p=h*c/f;return Un.clamp(Math.min(m,p),.52,2.35)}function _v(r,e,i){const s=ax(r),l=ox(r,e),c=r/Math.max(1,e),f=mp*Math.PI/180,m=2*cl*Math.tan(f/2)*c,p=s.frustumFill*m/Math.max(1e-6,l),_=Math.min(s.planeBaseW,p);return{w:_,h:_*i}}function O2(r,e){const i=r/Math.max(1,Yn-1),s=Math.min(Math.max(1,e*.38),Math.max(1,i*.34));return i<=s+.001?0:1-s/i}function P2(r,e){const i=Math.min(Math.max(1,e*.38),Math.max(1,r*.34));return r<=i+.001?0:1-i/r}function I2(r,e){const i=Un.clamp(e,0,.999);if(r<i)return{titleOp:1,lastCardOp:0};const s=Math.max(1e-6,1-i),l=ul(Un.clamp((r-i)/s,0,1));return{titleOp:1-l,lastCardOp:l}}function F2(r,e,i){const s=Yn-1;if(r<=0)return{opacity:e===0?1:0};if(r>=s-1e-5)return{opacity:e===s?1:0};const l=Math.floor(r);if(l>=s)return{opacity:e===s?1:0};if(e!==l&&e!==l+1)return{opacity:0};const c=r-l,f=Un.clamp(i,0,.999);if(c<f)return{opacity:e===l?1:0};const h=ul(Un.clamp((c-f)/Math.max(1e-6,1-f),0,1));return{opacity:e===l?1-h:h}}function B2(r,e){return r>1.5&&r<e-.5}function z2(r){return Un.clamp(540/Math.max(r,340),.2,.55)}function H2(r,e,i){const s=[],l=h2;for(let c=0;c<l;c++){const f=Un.clamp(r-c/Math.max(1,l-1)*p2,-.08,1.08),h=Math.sin(f*Math.PI*2*c2)*f2*i,m=Math.sin(f*Math.PI*2*u2)*d2,p=gv+c/Math.max(1,l-1)*(x2-gv),_=e-p;s.push(new $(h,m,_))}return s}function G2(r,e,i,s){const l=r.length;if(l<2)return new Di;const c=[],f=[],h=[],m=[],p=new $,_=new $,x=new $,g=new $(0,1,0),M=e+1;for(let w=0;w<l;w++){w===0?p.subVectors(r[1],r[0]).normalize():w===l-1?p.subVectors(r[l-1],r[l-2]).normalize():p.subVectors(r[w+1],r[w-1]).normalize(),_.copy(g).cross(p),_.lengthSq()<1e-8&&_.set(1,0,0).cross(p),_.normalize(),x.crossVectors(p,_).normalize();const y=l===1?0:w/(l-1),S=i+(s-i)*Math.pow(y,1.5);for(let I=0;I<=e;I++){const B=I/e*Math.PI*2,C=Math.cos(B),O=Math.sin(B),N=r[w];c.push(N.x+(C*_.x+O*x.x)*S,N.y+(C*_.y+O*x.y)*S,N.z+(C*_.z+O*x.z)*S),f.push(C*_.x+O*x.x,C*_.y+O*x.y,C*_.z+O*x.z),h.push(l===1?0:w/(l-1),I/e)}}for(let w=0;w<l-1;w++)for(let y=0;y<e;y++){const S=w*M+y,I=S+1,B=S+M,C=B+1;m.push(S,B,I,I,B,C)}const b=new Di;return b.setAttribute("position",new Ci(c,3)),b.setAttribute("normal",new Ci(f,3)),b.setAttribute("uv",new Ci(h,2)),b.setIndex(m),b.computeBoundingSphere(),b}const ni={fleet:"MAEX",name:"SharpeShark",version:"v1",role:"Executor",handle:"@sharpeshark",didShort:"0xf8a2…6035",bucketLabel:"SharpeShark",bucketId:"0xbkt…a41"};function V2(r){return["passport","card","hitl","bucket"][r]??"passport"}function vp(r,e,i,s,l,c){const f=Math.min(c,s/2,l/2);r.beginPath(),r.moveTo(e+f,i),r.arcTo(e+s,i,e+s,i+l,f),r.arcTo(e+s,i+l,e,i+l,f),r.arcTo(e,i+l,e,i,f),r.arcTo(e,i,e+s,i,f),r.closePath()}function La(r,e,i,s,l,c,f){vp(r,e,i,s,l,c),r.fillStyle=f,r.fill()}function ta(r,e,i,s,l,c,f,h){vp(r,e,i,s,l,c),r.strokeStyle=f,r.lineWidth=h,r.stroke()}function k2(r,e,i,s,l){const c=s*240/316,f=s/(260*l),h=10*l*f,m=14*l*f,p=r.createLinearGradient(e,i+c,e+s,i);p.addColorStop(0,"#050508"),p.addColorStop(1,"rgba(200,245,168,0.16)"),La(r,e,i,s,c,h,p),ta(r,e,i,s,c,h,"rgba(255,255,255,0.14)",Math.max(1,1.5*l*f)),ta(r,e+3*l*f,i+3*l*f,s-6*l*f,c-6*l*f,h-2*l*f,"rgba(200,245,168,0.35)",Math.max(1,1.25*l*f)),r.fillStyle="rgba(255,255,255,0.92)",r.font=`700 ${12*l*f}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,r.fillText(ni.fleet,e+m,i+m+12*l*f);const _=52*l*f,x=18*l*f,g=e+s-m-_,M=i+m-2*l*f;La(r,g,M,_,x,9*l*f,"rgba(200,245,168,0.14)"),ta(r,g,M,_,x,9*l*f,"rgba(200,245,168,0.28)",1),r.fillStyle="#c8f5a8",r.font=`700 ${9*l*f}px "DM Mono", ui-monospace, monospace`,r.textAlign="center",r.fillText("ACTIVE",g+_/2,M+12.5*l*f),r.textAlign="left";let b=i+m+36*l*f;r.fillStyle="rgba(255,255,255,0.92)",r.font=`700 ${13*l*f}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,r.fillText(`${ni.name} ${ni.version}`,e+m,b),b+=16*l*f,r.fillStyle="rgba(255,255,255,0.45)",r.font=`500 ${10*l*f}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,r.fillText(`${ni.role} · HITL`,e+m,b),b+=22*l*f,r.fillStyle="rgba(255,255,255,0.38)",r.font=`500 ${9*l*f}px "DM Mono", ui-monospace, monospace`,r.fillText("HANDLE",e+m,b),b+=13*l*f,r.fillStyle="rgba(255,255,255,0.88)",r.font=`600 ${11*l*f}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,r.fillText(ni.handle,e+m,b),b+=20*l*f,r.fillStyle="rgba(255,255,255,0.38)",r.font=`500 ${9*l*f}px "DM Mono", ui-monospace, monospace`,r.fillText("KYA DID",e+m,b),b+=13*l*f,r.fillStyle="#c8f5a8",r.font=`700 ${10*l*f}px "DM Mono", ui-monospace, monospace`,r.fillText(ni.didShort,e+m,b);const w=i+c-m-8*l*f;r.fillStyle="rgba(255,255,255,0.75)",r.font=`600 ${10*l*f}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,r.fillText("Verified KYA",e+m,w);const y=28*l*f,S=e+s-m-y,I=i+c-m-y;return La(r,S,I,y,y,4*l*f,"rgba(200,245,168,0.14)"),ta(r,S,I,y,y,4*l*f,"rgba(200,245,168,0.28)",1),r.fillStyle="#c8f5a8",r.font=`700 ${11*l*f}px "DM Mono", ui-monospace, monospace`,r.textAlign="center",r.fillText("SS",S+y/2,I+y*.62),r.textAlign="left",c}function X2(r,e,i,s,l){const c=s*190/316,f=s/(260*l),h=10*l*f,m=14*l*f,p=r.createLinearGradient(e,i+c,e+s,i);p.addColorStop(0,"#050508"),p.addColorStop(1,"rgba(200,245,168,0.14)"),La(r,e,i,s,c,h,p),ta(r,e,i,s,c,h,"rgba(255,255,255,0.14)",Math.max(1,1.5*l*f)),ta(r,e+3*l*f,i+3*l*f,s-6*l*f,c-6*l*f,h-2*l*f,"rgba(200,245,168,0.35)",Math.max(1,1.25*l*f)),r.fillStyle="rgba(255,255,255,0.92)",r.font=`700 ${12*l*f}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,r.fillText(ni.fleet,e+m,i+m+12*l*f),r.fillStyle="#c8f5a8",r.beginPath(),r.arc(e+s-m-8*l*f,i+m+6*l*f,7*l*f,0,Math.PI*2),r.fill(),r.fillStyle="#0a0a0c",r.font=`700 ${9*l*f}px "DM Mono", ui-monospace, monospace`,r.textAlign="center",r.fillText("✓",e+s-m-8*l*f,i+m+9.5*l*f),r.textAlign="left";const _=i+c-m-4*l*f;r.fillStyle="rgba(255,255,255,0.92)",r.font=`700 ${11*l*f}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,r.fillText(ni.name.toUpperCase(),e+m,_-28*l*f),r.fillStyle="rgba(255,255,255,0.45)",r.font=`500 ${10*l*f}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,r.fillText(`${ni.role} · ${ni.version}`,e+m,_-12*l*f),r.fillStyle="#c8f5a8",r.font=`700 ${11*l*f}px "DM Mono", ui-monospace, monospace`,r.fillText(ni.didShort,e+m,_);const x=32*l*f,g=e+s-m-x,M=i+c-m-x;return La(r,g,M,x,x,4*l*f,"rgba(200,245,168,0.14)"),ta(r,g,M,x,x,4*l*f,"rgba(200,245,168,0.28)",1),r.fillStyle="#c8f5a8",r.font=`700 ${12*l*f}px "DM Mono", ui-monospace, monospace`,r.textAlign="center",r.fillText("SS",g+x/2,M+x*.62),r.textAlign="left",c}function W2(r,e,i,s,l){const c=s/(260*l),f=118*l*c,h=8*l*c,m=14*l*c;La(r,e,i,s,f,h,"rgba(255,255,255,0.04)"),ta(r,e,i,s,f,h,"rgba(234,179,8,0.55)",Math.max(1.5,2*l*c)),vp(r,e+2*l*c,i+2*l*c,s-4*l*c,f-4*l*c,h-1),r.fillStyle="rgba(234,179,8,0.08)",r.fill(),r.fillStyle="rgba(255,255,255,0.92)",r.font=`700 ${14*l*c}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,r.fillText("Guarded",e+m,i+m+14*l*c),r.fillStyle="#ffd700",r.font=`700 ${9*l*c}px "DM Mono", ui-monospace, monospace`,r.fillText("HITL",e+s-m-32*l*c,i+m+12*l*c),r.fillStyle="rgba(255,255,255,0.55)",r.font=`400 ${11*l*c}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`;const p="Want-to opens wait for Approve / Reject.";let _=i+m+36*l*c;for(const M of rx(r,p,s-m*2))r.fillText(M,e+m,_),_+=16*l*c;const x=22*l*c,g=i+f-m-x;return La(r,e+m,g,s-m*2,x,4*l*c,"rgba(0,0,0,0.35)"),r.fillStyle="rgba(255,255,255,0.7)",r.font=`500 ${9*l*c}px "DM Mono", ui-monospace, monospace`,r.fillText("WANT-TO  ·  ETH long",e+m+8*l*c,g+14*l*c),f}function q2(r,e,i,s,l){const c=s/(260*l),f=148*l*c,h=10*l*c,m=14*l*c,p=r.createLinearGradient(e,i,e,i+f);p.addColorStop(0,"rgba(200,245,168,0.22)"),p.addColorStop(.4,"rgba(8,10,14,0.92)"),p.addColorStop(1,"rgba(200,245,168,0.1)"),La(r,e,i,s,f,h,p),ta(r,e,i,s,f,h,"rgba(200,245,168,0.28)",Math.max(1,1.5*l*c)),r.fillStyle="#c8f5a8",r.fillRect(e,i+8*l*c,3*l*c,f-16*l*c),r.fillStyle="rgba(200,245,168,0.7)",r.font=`700 ${9*l*c}px "DM Mono", ui-monospace, monospace`,r.fillText("BUCKET CREATED",e+m+6*l*c,i+m+8*l*c),r.fillStyle="rgba(255,255,255,0.92)",r.font=`600 ${13*l*c}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,r.fillText(`${ni.bucketLabel} is live`,e+m+6*l*c,i+m+28*l*c);const _=e+m,x=i+m+40*l*c,g=s-m*2,M=56*l*c;return La(r,_,x,g,M,8*l*c,"rgba(200,245,168,0.14)"),ta(r,_,x,g,M,8*l*c,"rgba(200,245,168,0.28)",1),r.fillStyle="rgba(255,255,255,0.92)",r.font=`600 ${16*l*c}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,r.textAlign="center",r.fillText(ni.bucketLabel,_+g/2,x+24*l*c),r.fillStyle="rgba(255,255,255,0.42)",r.font=`500 ${9*l*c}px "DM Mono", ui-monospace, monospace`,r.fillText(`BUCKET · ${ni.bucketId}`,_+g/2,x+42*l*c),r.textAlign="left",r.fillStyle="rgba(255,255,255,0.5)",r.font=`400 ${10*l*c}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,r.fillText("Fund and operate from the agent console.",e+m+6*l*c,i+f-m),f}function Y2(r,e,i,s,l,c){switch(e){case"passport":return k2(r,i,s,l,c);case"card":return X2(r,i,s,l,c);case"hitl":return W2(r,i,s,l,c);case"bucket":return q2(r,i,s,l,c)}}function vv(r,e,i,s){const{W:l,H:c}=L2(i,s),f=document.createElement("canvas");f.width=l,f.height=c;const h=f.getContext("2d"),m=r.mood,p=h.createLinearGradient(0,0,l,c);p.addColorStop(0,m.mid),p.addColorStop(.55,m.bot),p.addColorStop(1,"#050508"),h.fillStyle=p,h.fillRect(0,0,l,c);const _=h.createRadialGradient(l*.78,c*.18,0,l*.78,c*.18,l*.5);_.addColorStop(0,`${m.top}33`),_.addColorStop(1,"transparent"),h.fillStyle=_,h.fillRect(0,0,l,c);const x=Math.round(28*i);let g=x;h.fillStyle="rgba(200,245,168,0.55)",h.font=`400 ${12*i}px "DM Mono", "JetBrains Mono", ui-monospace, monospace`,h.fillText(`0${e+1}  ·  THE LOOP`,x,g+12*i),g+=48*i,h.fillStyle="rgba(255,255,255,0.92)",h.font=`normal 400 ${Math.min(52*i,l*.15)}px ${A2}`,h.fillText(r.verb,x,g+32*i),g+=60*i,h.fillStyle="rgba(255,255,255,0.55)",h.font=`400 ${15*i}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`;for(const N of rx(h,r.caption,l-x*2))h.fillText(N,x,g+14*i),g+=24*i;g+=16*i;const M=V2(e),b=l-x*2,w=Math.min(260*i,b),y=x+12*i,S=Math.max(48*i,c-g-y),I=M==="passport"?w*240/316:M==="card"?w*190/316:M==="hitl"?w*118/260:w*148/260,B=I>S?w*(S/I):w,C=x+(b-B)/2;Y2(h,M,C,g,B,i),h.strokeStyle="rgba(200,245,168,0.22)",h.lineWidth=Math.max(2,2*i),h.strokeRect(Math.round(10*i),Math.round(10*i),l-Math.round(20*i),c-Math.round(20*i));const O=new Wv(f);return O.colorSpace=Zn,O.minFilter=xs,O.generateMipmaps=!0,O}function xv(r,e){const i=ax(e),s=Math.min(r*2.35,3.25),l=Math.round(i.canvasW*s),c=Math.round(i.canvasH*s),f=document.createElement("canvas");f.width=l,f.height=c;const h=f.getContext("2d");h.clearRect(0,0,l,c);const m="Morpheum";let p=i.fontPx;h.textAlign="left",h.textBaseline="alphabetic";const _=()=>{h.font=`normal ${p*s}px ${pl}`};_();const x=O=>{h.font=`normal ${O*s}px ${pl}`;const N=h.measureText(m),P=Math.abs(N.actualBoundingBoxLeft??0),T=Math.abs(N.actualBoundingBoxRight??N.width),L=Math.abs(N.actualBoundingBoxAscent??O*s*.8),Y=Math.abs(N.actualBoundingBoxDescent??O*s*.25);return{left:P,right:T,width:P+T,ascent:L,descent:Y}},g=Math.max(1.25,1.85*s)*2,M=64*s+g,b=40*s+g,w=O=>{const N=x(O);return N.width+M*2<=l&&N.ascent+N.descent+b*2<=c};for(;!w(p)&&p>64;)p-=2;for(;w(p+2)&&p<i.fontPx+24;)p+=2;_();const y=x(p),S=(l-y.width)/2+y.left,I=c/2+(y.ascent-y.descent)/2,B=h.createLinearGradient(S-y.left,I-y.ascent,S+y.right,I+y.descent);R2.forEach(O=>B.addColorStop(O.t,O.c)),h.lineJoin="round",h.miterLimit=2,h.lineWidth=Math.max(1.25,1.85*s),h.strokeStyle="rgba(8,12,10,0.22)",h.strokeText(m,S,I),h.fillStyle=B,h.fillText(m,S,I);const C=new Wv(f);return C.colorSpace=Zn,C.minFilter=yn,C.magFilter=yn,C.generateMipmaps=!1,C}function Sv(r,e){r.generateMipmaps=!1,r.minFilter=yn,r.magFilter=yn,r.wrapS=Hi,r.wrapT=Hi;const i=e.capabilities.getMaxAnisotropy();r.anisotropy=Math.min(16,i),r.needsUpdate=!0}function Z2(){const r=rn.useRef(null),e=rn.useRef(null),i=rn.useRef(null),s=rn.useRef(null),l=rn.useRef(!1),c=rn.useCallback(()=>{if(l.current)return;l.current=!0;const f=e.current;f==null||f.classList.add("flow-intro__sticky--exit"),window.setTimeout(()=>{document.body.classList.remove(Ws),oh(),requestAnimationFrame(()=>{oh(),requestAnimationFrame(()=>{oh(),window.setTimeout(()=>{l.current=!1},100)})})},U2)},[]);return rn.useLayoutEffect(()=>{const f=window.matchMedia("(prefers-reduced-motion: reduce)").matches,h=window.location.hash.replace(/^#/,"");return f||h!==""&&h!=="flow"&&h!=="hero"||document.body.classList.add(Ws),()=>{document.body.classList.remove(Ws)}},[]),rn.useEffect(()=>{const f=h=>{if(h.key!=="Escape")return;const m=document.getElementById("hero");m&&m.getBoundingClientRect().top>8&&(h.preventDefault(),c())};return window.addEventListener("keydown",f),()=>window.removeEventListener("keydown",f)},[c]),rn.useEffect(()=>{const f=window.location.hash.replace(/^#/,"");f&&f!=="flow"&&f!=="hero"&&requestAnimationFrame(()=>{var h;(h=document.getElementById(f))==null||h.scrollIntoView({block:"start"})})},[]),rn.useEffect(()=>{const f=i.current,h=r.current;if(!f||!h)return;const m=f,p=h;let _=!1;if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){document.body.classList.remove(Ws);const M=s.current;M&&(M.style.height="0px");return}let g;return(async()=>{if(await w2(),_)return;const M=Math.min(window.devicePixelRatio,2),b=Math.max(320,m.clientWidth||window.innerWidth),w=Math.max(1,m.clientHeight||window.innerHeight),y=[],S=[],I=[];Kr.forEach((Ye,Ze)=>{const rt=Yn-1-Ze,pt=Kr[rt],Ct=vv(pt,rt,M,b);I.push(Ct);const wt=new lu({map:Ct,transparent:!0,opacity:1,depthWrite:!0,depthTest:!0,side:Oa});y.push(wt);const ut=ep,gt=ut*gp/_p,k=new wi(new Qs(gt,ut),wt);k.position.set(0,0,-Ze*Da),k.renderOrder=Ze,S.push(k)});const B=xv(M,b),C=new lu({map:B,transparent:!0,opacity:0,depthWrite:!1,depthTest:!0,side:Ji}),O=B.image.height/B.image.width,{w:N,h:P}=_v(b,w,O),T=new wi(new Qs(N,P),C);T.position.set(0,0,-(Yn-1)*Da),T.renderOrder=E2;const L=new zy,Y=new Ai(mp,1,.08,120),G=new i2({antialias:!0,alpha:!1,powerPreference:"high-performance"});G.setPixelRatio(Math.min(window.devicePixelRatio,2)),G.outputColorSpace=Zn,G.sortObjects=!0,m.appendChild(G.domElement),Sv(B,G);const j=new sl;S.forEach(Ye=>j.add(Ye)),j.add(T),L.add(j);const pe=new Vi({uniforms:{uStrength:{value:0}},vertexShader:b2,fragmentShader:T2,transparent:!0,toneMapped:!1,depthTest:!1,depthWrite:!1,blending:uh}),de=new wi(new Di,pe);de.frustumCulled=!1,de.renderOrder=M2,de.visible=!1,L.add(de);const J=Kr.map(Ye=>new Dt(Ye.mood.mid)),F=J[0].clone();L.background=F;const H=0,ee=-(Yn-1)*Da,_e=cl,be=-.1*Da,U=.1*Da;function Z(Ye,Ze){const rt=Ye+cl;return(_e-rt)/Ze}function Ee(){const Ye=Math.max(1,window.innerHeight),{totalPx:Ze}=lh(Ye),rt=Math.max(1,Ze),pt=H+be,Ct=ee+U-l2,ut=(pt-Ct)/rt,gt=Z(pt,ut),k=Z(Ct,ut);return{ih:Ye,totalPx:rt,scrollToWorldFactor:ut,minScroll:gt,maxScroll:k}}let{scrollToWorldFactor:Ce,minScroll:Le,maxScroll:ie}=Ee();const Se=new Dt,Me=new Dt,ze=new Dt;function nt(){var gt;const Ye=Math.max(320,m.clientWidth||window.innerWidth),Ze=Math.min(window.devicePixelRatio,2);I.forEach((k,St)=>{k.dispose();const vt=Yn-1-St,D=vv(Kr[vt],vt,Ze,Ye);I[St]=D,y[St].map=D,y[St].needsUpdate=!0}),(gt=C.map)==null||gt.dispose();const rt=xv(Ze,Ye);C.map=rt,C.needsUpdate=!0,Sv(rt,G);const pt=rt.image.height/rt.image.width,Ct=Math.max(1,m.clientHeight||window.innerHeight),{w:wt,h:ut}=_v(Ye,Ct,pt);T.geometry.dispose(),T.geometry=new Qs(wt,ut)}function je(){const Ye=m.clientWidth,Ze=m.clientHeight;if(Ye<2||Ze<2)return;Y.aspect=Ye/Ze,Y.updateProjectionMatrix(),G.setSize(Ye,Ze,!1),nt();const rt=Ee();Ce=rt.scrollToWorldFactor,Le=rt.minScroll,ie=rt.maxScroll;const pt=Math.max(1,window.innerHeight),{totalPx:Ct}=lh(pt),wt=s.current;if(wt){const ut=pt*pv,gt=Math.max(Math.ceil(Ct+ut+pt*mv+32),Math.ceil(pt*1.08));wt.style.height=`${gt}px`}}je(),requestAnimationFrame(()=>{_||nt()});let Yt=0;function ct(){var Fn,Fa;if(_)return;Yt=requestAnimationFrame(ct);const Ye=Math.max(1,window.innerHeight),{cardPx:Ze,titlePx:rt,totalPx:pt}=lh(Ye),Ct=p.getBoundingClientRect(),wt=Math.max(1,p.offsetHeight-Ye),ut=Un.clamp(-Ct.top,0,wt),gt=Math.min(ut,pt),k=Math.max(1,pt),St=Ye*pv,vt=ul(Un.clamp((ut-pt)/Math.max(1,St),0,1)),D=Un.mapLinear(Ze,0,k,Le,ie),E=m.clientWidth,Q=m.clientHeight,te=Math.max(1,rt),ue=gt<te,Re=ue?Un.clamp(gt/te,0,1):0,De=Math.max(0,gt-te),fe=Math.max(1,Ze),Te=Un.clamp(De/fe,0,1)*(Yn-1),Be=ox(E,Q),Ue=document.getElementById("hero"),Ne=Ue?Ue.getBoundingClientRect().top:0,Je=Ue?D2(Ne):!0;l.current||document.body.classList.toggle(Ws,!Je);let Ke;ue?Ke=Un.mapLinear(gt,0,te,ie,D):Ke=Un.mapLinear(gt,te,k,D,Le),Ke=Un.clamp(Ke,Le,ie);const at=O2(Ze,Ye),X=P2(te,Ye),Ae=I2(Re,X),me=Yn-1;if(ue)ze.copy(J[0]);else{const hn=Math.min(Yn-2,Math.floor(Te)),En=Math.min(hn+1,Yn-1),ai=ul(Te-hn);Se.copy(J[hn]),Me.copy(J[En]),ze.lerpColors(Se,Me,ai)}L.background=F.copy(ze);const we=_e-Ke*Ce;Y.position.set(0,0,we),Y.lookAt(0,0,we-cl);const Pe=Un.clamp(gt/k,0,1);if(B2(gt,k)){const hn=H2(Pe,we,z2(E)),ai=new Jy(hn,!1,"centripetal").getSpacedPoints(m2);if(ai.length>=2){const pn=G2(ai,g2,_2,v2),Lt=de.geometry.getAttribute("position"),$t=pn.getAttribute("position");if(Lt&&$t&&Lt.count===$t.count&&((Fn=de.geometry.getIndex())==null?void 0:Fn.count)===((Fa=pn.getIndex())==null?void 0:Fa.count)&&Lt&&$t){Lt.array.set($t.array),Lt.needsUpdate=!0;const Kn=de.geometry.getAttribute("normal"),Ms=pn.getAttribute("normal");Kn&&Ms&&(Kn.array.set(Ms.array),Kn.needsUpdate=!0);const Ba=de.geometry.getAttribute("uv"),ki=pn.getAttribute("uv");Ba&&ki&&(Ba.array.set(ki.array),Ba.needsUpdate=!0),pn.dispose()}else de.geometry.dispose(),de.geometry=pn;de.visible=!0,pe.uniforms.uStrength.value=.36}else de.visible=!1,pe.uniforms.uStrength.value=0}else de.visible=!1,pe.uniforms.uStrength.value=0;const Xe=Math.floor((Yn-1)/2);S.forEach((hn,En)=>{const ai=-En*Da,pn=Yn-1-En;let{opacity:Lt}=F2(Te,pn,at);ue&&En===me&&(Lt*=Ae.lastCardOp);let $t=1,Cn=0;!ue&&pn===Yn-1&&Lt>.02&&vt>0&&($t=1-.28*vt,Cn=-Da*.32*vt),hn.position.set(0,0,ai+Cn),hn.scale.setScalar(Be*$t);const Kn=y[En];Kn.opacity=Lt,Kn.depthWrite=Lt>=.995,hn.visible=Lt>.003,hn.renderOrder=En<=Xe?S2+En:y2+(En-Xe-1)}),T.position.set(0,0,-me*Da),T.scale.setScalar(Be),C.opacity=ue?Ae.titleOp:0,C.depthWrite=C.opacity>=.995,T.visible=C.opacity>.003;const He=pt+St;let Ht=0;if(wt>He&&ut>=He){const hn=Math.max(1,wt-He);Ht=ul(Un.clamp((ut-He)/hn,0,1))}Ht>.02&&(de.visible=!1,pe.uniforms.uStrength.value=0);const Ut=s.current;if(Ut){const hn=St+Ye*mv+32,En=Math.max(Math.ceil(pt+hn),Math.ceil(Ye*1.08));Ut.style.height!==`${En}px`&&(Ut.style.height=`${En}px`)}const kn=1-Ht*.96;e.current&&e.current.style.setProperty("--intro-ui-opacity",String(kn)),G.domElement.style.opacity=String(1-Ht),G.render(L,Y)}ct(),window.addEventListener("resize",je,{passive:!0});const _t=new ResizeObserver(je);_t.observe(m),g=()=>{var Ye;cancelAnimationFrame(Yt),document.body.classList.remove(Ws),window.removeEventListener("resize",je),_t.disconnect(),y.forEach(Ze=>{var rt;(rt=Ze.map)==null||rt.dispose(),Ze.dispose()}),I.forEach(Ze=>Ze.dispose()),(Ye=C.map)==null||Ye.dispose(),C.dispose(),S.forEach(Ze=>Ze.geometry.dispose()),T.geometry.dispose(),de.geometry.dispose(),pe.dispose(),L.remove(de),G.dispose(),m.contains(G.domElement)&&m.removeChild(G.domElement)},_&&g()})(),()=>{_=!0,document.body.classList.remove(Ws),g==null||g()}},[]),q.jsxs("section",{ref:r,id:"flow",className:"flow-intro","aria-label":"Morpheum — Discover, Copy, Supervise, Isolate",children:[q.jsxs("div",{ref:e,className:"flow-intro__sticky",children:[q.jsx("div",{ref:i,className:"flow-intro__canvas","aria-hidden":!0}),q.jsxs("div",{className:"flow-intro__top",children:[q.jsx("p",{className:"flow-intro__eyebrow",children:"/// Morpheum"}),q.jsxs("button",{type:"button",className:"flow-intro__skip",onClick:c,children:["Skip ",q.jsx("span",{className:"flow-intro__skip-key",children:"Esc"})]})]}),q.jsx("div",{className:"flow-intro__sr","aria-live":"polite",children:Kr.map((f,h)=>q.jsxs("p",{children:["Step ",String(h+1).padStart(2,"0"),": ",f.verb,". ",f.caption]},f.verb))})]}),q.jsx("div",{ref:s,className:"flow-intro__spacer","aria-hidden":!0})]})}function lx({label:r,status:e,live:i}){return q.jsxs("span",{className:`stat-chip ${i?"stat-chip--live":""}`,children:[q.jsx("span",{className:"stat-chip__label",children:r}),q.jsx("span",{className:"stat-chip__sep",children:"·"}),q.jsx("span",{className:"stat-chip__status",children:e})]})}function K2(r){return String(r).padStart(2,"0")}function Q2(){return typeof window<"u"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches}function j2(){const[r,e]=rn.useState(()=>new Set),i=rn.useRef(new Map);rn.useLayoutEffect(()=>{if(Q2()){e(new Set(Lr.steps.map(f=>`step-${f.n}`)));return}const c=new IntersectionObserver(f=>{e(h=>{const m=new Set(h);for(const p of f){const _=p.target.dataset.flowKey;_&&p.isIntersecting&&m.add(_)}return m})},{root:null,threshold:[0,.01,.08,.15,.25],rootMargin:"-42% 0px -42% 0px"});for(const f of i.current.values())c.observe(f);return()=>{c.disconnect()}},[]);const s=rn.useCallback((c,f)=>{f?i.current.set(c,f):i.current.delete(c)},[]),l=rn.useCallback(c=>{e(f=>new Set(f).add(c))},[]);return q.jsx("section",{id:"how",className:"section flow",children:q.jsxs("div",{className:"container",children:[q.jsx("p",{className:"section-kicker",children:Lr.kicker}),q.jsx("h2",{className:"section-title flow__title",children:Lr.title}),q.jsx("div",{className:"flow__chips",children:Lr.chips.map(c=>q.jsx(lx,{label:c.label,status:c.value},c.label))}),q.jsx("div",{className:"flow__steps",role:"list",children:Lr.steps.map(c=>{const f=`step-${c.n}`,h=r.has(f);return q.jsxs("article",{ref:m=>s(f,m),"data-flow-key":f,role:"listitem",className:`flow-step${h?" flow-step--expanded":""}`,"aria-expanded":h,style:{"--hub-cover-url":`url("${c.coverUrl}")`},children:[q.jsxs("button",{type:"button",className:"flow-step__head",onClick:()=>l(f),"aria-label":h?`${c.title}, expanded`:`${c.title}, tap to expand`,children:[q.jsxs("span",{className:"flow-step__idx",children:["Step ",K2(c.n)]}),q.jsx("h3",{className:"flow-step__title",children:c.title}),q.jsx("span",{className:"flow-step__chevron","aria-hidden":!0,children:h?"−":"+"})]}),q.jsx("div",{className:"flow-step__expand","aria-hidden":!h,children:q.jsxs("div",{className:"flow-step__expand-inner",children:[q.jsx("p",{className:"flow-step__meta",children:c.feature}),q.jsx("p",{className:"flow-step__detail",children:c.body}),q.jsxs("p",{className:"flow-step__example",children:[q.jsx("span",{"aria-hidden":!0,children:"> "}),c.example]}),q.jsx("div",{className:"flow-step__actions",children:q.jsx("a",{href:Mn.explore,className:"flow-step__open","aria-label":`Explore after ${c.title}`,children:q.jsx("span",{"aria-hidden":!0,className:"flow-step__open-arrow",children:"→"})})})]})})]},f)})}),q.jsx("p",{className:"flow__outcome",children:Lr.outcome})]})})}const J2=["M41.9213 3.43614C43.0393 3.43614 43.8716 3.77154 44.4182 4.44235C44.9647 5.138 45.1262 6.1939 44.9026 7.61005L41.884 26.8026C41.7846 27.4982 41.8467 28.0075 42.0703 28.3305C42.2691 28.6784 42.6542 28.8771 43.2256 28.9268L43.8591 28.9641L43.8219 29.2622L36.7784 30.492L36.4803 30.492L40.1324 7.46098C40.3064 6.26843 40.0206 5.67216 39.2753 5.67216C38.9523 5.67216 38.6045 5.75912 38.2318 5.93303C37.8343 6.10694 37.3995 6.44235 36.9275 6.93924L36.7411 6.79017C38.0828 4.55415 39.8095 3.43614 41.9213 3.43614Z","M29.9958 3.43614C31.1138 3.43614 31.9461 3.77154 32.4927 4.44235C33.0393 5.138 33.2007 6.1939 32.9771 7.61005L29.9585 26.8026C29.8591 27.4982 29.9212 28.0075 30.1449 28.3305C30.3436 28.6784 30.7287 28.8771 31.3001 28.9268L31.9337 28.9641L31.8964 29.2622L24.8529 30.492L24.5548 30.492L28.207 7.46098C28.3809 6.26843 28.0952 5.67216 27.3498 5.67216C27.0268 5.67216 26.679 5.75912 26.3063 5.93303C25.9088 6.10694 25.474 6.44235 25.002 6.93924L24.8157 6.79017C26.1573 4.55415 27.884 3.43614 29.9958 3.43614Z","M18.0703 3.43614C19.1883 3.43614 20.0206 3.77154 20.5672 4.44235C21.1138 5.138 21.2753 6.1939 21.0517 7.61005L18.033 26.8026C17.9337 27.4982 17.9958 28.0075 18.2194 28.3305C18.4181 28.6784 18.8032 28.8771 19.3747 28.9268L20.0082 28.9641L19.9709 29.2622L12.9275 30.492L12.6293 30.492L16.2815 7.46098C16.4554 6.26843 16.1697 5.67216 15.4243 5.67216C15.1014 5.67216 14.7535 5.75912 14.3809 5.93303C13.9834 6.10694 13.5486 6.44235 13.0765 6.93924L12.8902 6.79017C14.2318 4.55415 15.9585 3.43614 18.0703 3.43614Z","M45.5631 10.8482C46.0378 11.9189 46.0912 12.9315 45.7231 13.8861C45.3095 14.8231 44.3453 15.4956 42.8305 15.9035L16.576 22.853C15.2325 23.2226 14.7771 24.0651 15.2096 25.3806L15.7698 26.7714L13.8491 27.2839L9.924 22.1284L9.25377 20.6168L40.8242 12.2711C41.6674 12.048 42.2133 11.7494 42.4619 11.3754C42.6651 10.9838 42.669 10.5676 42.4735 10.1267C42.3199 9.78031 42.1016 9.5003 41.8185 9.2867C41.4899 9.05556 41.0511 8.87329 40.5021 8.7399L41.5734 7.5866C42.563 7.86379 43.3915 8.28774 44.0591 8.85845C44.7127 9.39767 45.214 10.0609 45.5631 10.8482Z"],$2=58,eR=35;function tR({fill:r="#C8F5A8",width:e=58,height:i=35,padding:s=10,"aria-hidden":l=!0,...c}){const f=[-s,-s,$2+s*2,eR+s*2].join(" ");return q.jsx("svg",{width:e,height:i,viewBox:f,fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":l,...c,children:J2.map(h=>q.jsx("path",{d:h,fill:r},h.slice(0,24)))})}const nR={sm:{width:46,height:28},md:{width:46,height:28},lg:{width:69,height:42},hero:{width:119,height:72}};function cx({size:r="md",showWordmark:e=!0,className:i="",brandName:s="Morpheum"}){const l=nR[r];return q.jsxs("span",{className:`brand-mark brand-mark--${r} ${i}`.trim(),children:[q.jsx(tR,{className:"brand-mark__icon",width:l.width,height:l.height,padding:0,fill:"var(--terminal-brand)"}),e?q.jsx("span",{className:"brand-mark__word",children:s}):null]})}function iR(){return q.jsx("footer",{className:"site-footer",children:q.jsxs("div",{className:"container site-footer__inner",children:[q.jsxs("div",{className:"site-footer__brand",children:[q.jsx("a",{className:"site-footer__logo",href:"#hero","aria-label":"Morpheum home",children:q.jsx(cx,{size:"sm"})}),q.jsx("p",{className:"site-footer__legal",children:EM.legal})]}),q.jsxs("nav",{className:"site-footer__nav","aria-label":"Footer",children:[Kc.map(r=>q.jsx("a",{href:r.href,children:r.label},r.id)),q.jsx("a",{href:Mn.docs,children:"Docs"}),q.jsx("a",{href:Mn.manifesto,children:"Manifesto"}),q.jsx("a",{href:Mn.discord,children:"Discord"}),q.jsx("a",{href:Mn.x,children:"X"})]})]})})}function aR(){const[r,e]=Hs.headline;return q.jsxs("section",{id:"hero",className:"hero","aria-labelledby":"hero-heading",children:[q.jsx("div",{className:"hero__atmosphere","aria-hidden":!0}),q.jsx("div",{className:"hero__grid","aria-hidden":!0}),q.jsx("div",{className:"hero__scanlines","aria-hidden":!0}),q.jsx("div",{className:"hero__grain","aria-hidden":!0}),q.jsx("div",{className:"hero__veil","aria-hidden":!0}),q.jsxs("div",{className:"container hero__content",children:[q.jsxs("a",{className:"hero__eyebrow",href:Hs.eyebrow.href,children:[Hs.eyebrow.label,q.jsx("span",{className:"hero__eyebrow-chevron","aria-hidden":!0,children:"›"})]}),q.jsxs("h1",{id:"hero-heading",className:"hero__headline",children:[q.jsx("span",{className:"hero__line hero__line--lead",children:r}),q.jsx("span",{className:"hero__line hero__line--punch",children:e})]}),q.jsxs("div",{className:"hero__ctas",children:[q.jsx($r,{href:Hs.primaryCta.href,variant:"primary",children:Hs.primaryCta.label}),q.jsx($r,{href:Hs.secondaryCta.href,variant:"secondary",children:Hs.secondaryCta.label})]})]})]})}function sR(){return q.jsx("div",{className:"manifesto-strip",children:q.jsx("a",{className:"manifesto-strip__link",href:d_.href,children:d_.text})})}function rR(){const r=[...h_,...h_];return q.jsx("div",{className:"marquee","aria-label":"Live status",children:q.jsx("div",{className:"marquee__viewport",children:q.jsx("div",{className:"marquee__track",children:r.map((e,i)=>q.jsx(lx,{label:e.label,status:e.status,live:"live"in e?e.live:!1},`${e.label}-${i}`))})})})}function oR(){return q.jsx("section",{id:"personas",className:"section personas",children:q.jsxs("div",{className:"container",children:[q.jsx("p",{className:"section-kicker",children:Td.kicker}),q.jsx("h2",{className:"section-title personas__title",children:Td.title}),q.jsx("div",{className:"personas__grid",children:Td.items.map(r=>q.jsxs("article",{className:`persona-card persona-card--${r.weight}`,children:[q.jsx("h3",{className:"persona-card__title",children:r.title}),q.jsx("ol",{className:"persona-card__steps",children:r.steps.map(e=>q.jsxs("li",{children:[q.jsxs("span",{className:"persona-card__chevron","aria-hidden":!0,children:[">"," "]}),e]},e))}),q.jsx($r,{href:r.cta.href,variant:"ghost",className:"persona-card__cta",children:r.cta.label})]},r.title))})]})})}function lR(){const[r,e]=rn.useState(!1),[i,s]=rn.useState(!1),[l,c]=rn.useState("");return rn.useEffect(()=>{const f=()=>e(window.scrollY>24);return f(),window.addEventListener("scroll",f,{passive:!0}),()=>window.removeEventListener("scroll",f)},[]),rn.useEffect(()=>{const f=Kc.map(m=>m.id),h=new IntersectionObserver(m=>{var _;const p=m.filter(x=>x.isIntersecting).sort((x,g)=>g.intersectionRatio-x.intersectionRatio);(_=p[0])!=null&&_.target.id&&c(p[0].target.id)},{rootMargin:"-30% 0px -55% 0px",threshold:[0,.25,.5]});return f.forEach(m=>{const p=document.getElementById(m);p&&h.observe(p)}),()=>h.disconnect()},[]),rn.useEffect(()=>(document.body.style.overflow=i?"hidden":"",()=>{document.body.style.overflow=""}),[i]),q.jsxs(q.Fragment,{children:[q.jsx("header",{className:`sticky-header ${r?"sticky-header--solid":""}`,children:q.jsxs("div",{className:"sticky-header__inner",children:[q.jsx("a",{className:"sticky-header__logo",href:"#hero","aria-label":"Morpheum home",children:q.jsx(cx,{size:"sm",brandName:"Morpheum"})}),q.jsx("nav",{className:"sticky-header__nav","aria-label":"Primary",children:Kc.map(f=>q.jsx("a",{href:f.href,className:`sticky-header__link ${l===f.id?"is-active":""}`,children:f.label},f.id))}),q.jsxs("div",{className:"sticky-header__actions",children:[q.jsx("a",{className:"sticky-header__docs",href:Mn.docs,children:"Docs"}),q.jsx($r,{href:Mn.app,variant:"primary",className:"sticky-header__launch",children:"Launch app"}),q.jsxs("button",{type:"button",className:"sticky-header__menu","aria-expanded":i,"aria-controls":"mobile-nav","aria-label":i?"Close menu":"Open menu",onClick:()=>s(f=>!f),children:[q.jsx("span",{}),q.jsx("span",{}),q.jsx("span",{})]})]})]})}),q.jsx("div",{id:"mobile-nav",className:`mobile-sheet ${i?"is-open":""}`,hidden:!i,children:q.jsxs("nav",{className:"mobile-sheet__nav","aria-label":"Mobile",children:[Kc.map(f=>q.jsx("a",{href:f.href,onClick:()=>s(!1),className:l===f.id?"is-active":"",children:f.label},f.id)),q.jsx("a",{href:Mn.docs,onClick:()=>s(!1),children:"Docs"})]})})]})}function cR(){return q.jsx("section",{className:"thesis section","aria-label":"Thesis",children:q.jsxs("div",{className:"container thesis__inner",children:[q.jsx("p",{className:"section-kicker",children:"Two bad choices → Morpheum"}),q.jsx("div",{className:"thesis__choices",children:bd.badChoices.map(r=>q.jsxs("div",{className:"thesis__choice",children:[q.jsx("p",{className:"thesis__choice-title",children:r.title}),q.jsxs("p",{className:"thesis__choice-detail",children:[q.jsx("span",{"aria-hidden":!0,children:"> "}),r.detail]})]},r.title))}),q.jsx("p",{className:"thesis__payoff",children:bd.payoff}),q.jsx("p",{className:"thesis__close",children:bd.close})]})})}function uR(){return q.jsxs("div",{className:"page",children:[q.jsx("a",{className:"skip-link",href:"#hero",children:"Skip to content"}),q.jsx(sR,{}),q.jsx(lR,{}),q.jsxs("main",{className:"page__main",children:[q.jsx(Z2,{}),q.jsx(aR,{}),q.jsx(cR,{}),q.jsx(rR,{}),q.jsx(TM,{}),q.jsx(oR,{}),q.jsx(j2,{}),q.jsx(RM,{}),q.jsx(bM,{})]}),q.jsx(iR,{})]})}MM.createRoot(document.getElementById("root")).render(q.jsx(rn.StrictMode,{children:q.jsx(uR,{})}));
