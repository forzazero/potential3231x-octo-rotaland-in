(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function i(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(o){if(o.ep)return;o.ep=!0;const c=i(o);fetch(o.href,c)}})();var Ud={exports:{}},pl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var S_;function ay(){if(S_)return pl;S_=1;var a=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,o,c){var u=null;if(c!==void 0&&(u=""+c),o.key!==void 0&&(u=""+o.key),"key"in o){c={};for(var h in o)h!=="key"&&(c[h]=o[h])}else c=o;return o=c.ref,{$$typeof:a,type:r,key:u,ref:o!==void 0?o:null,props:c}}return pl.Fragment=e,pl.jsx=i,pl.jsxs=i,pl}var M_;function sy(){return M_||(M_=1,Ud.exports=ay()),Ud.exports}var D=sy(),Od={exports:{}},ut={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var y_;function ry(){if(y_)return ut;y_=1;var a=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),u=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),v=Symbol.iterator;function x(P){return P===null||typeof P!="object"?null:(P=v&&P[v]||P["@@iterator"],typeof P=="function"?P:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,y={};function M(P,K,Se){this.props=P,this.context=K,this.refs=y,this.updater=Se||b}M.prototype.isReactComponent={},M.prototype.setState=function(P,K){if(typeof P!="object"&&typeof P!="function"&&P!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,P,K,"setState")},M.prototype.forceUpdate=function(P){this.updater.enqueueForceUpdate(this,P,"forceUpdate")};function I(){}I.prototype=M.prototype;function z(P,K,Se){this.props=P,this.context=K,this.refs=y,this.updater=Se||b}var R=z.prototype=new I;R.constructor=z,w(R,M.prototype),R.isPureReactComponent=!0;var O=Array.isArray;function L(){}var B={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function N(P,K,Se){var Te=Se.ref;return{$$typeof:a,type:P,key:K,ref:Te!==void 0?Te:null,props:Se}}function X(P,K){return N(P.type,K,P.props)}function V(P){return typeof P=="object"&&P!==null&&P.$$typeof===a}function j(P){var K={"=":"=0",":":"=2"};return"$"+P.replace(/[=:]/g,function(Se){return K[Se]})}var ce=/\/+/g;function ue(P,K){return typeof P=="object"&&P!==null&&P.key!=null?j(""+P.key):K.toString(36)}function Y(P){switch(P.status){case"fulfilled":return P.value;case"rejected":throw P.reason;default:switch(typeof P.status=="string"?P.then(L,L):(P.status="pending",P.then(function(K){P.status==="pending"&&(P.status="fulfilled",P.value=K)},function(K){P.status==="pending"&&(P.status="rejected",P.reason=K)})),P.status){case"fulfilled":return P.value;case"rejected":throw P.reason}}throw P}function F(P,K,Se,Te,Ce){var ie=typeof P;(ie==="undefined"||ie==="boolean")&&(P=null);var ye=!1;if(P===null)ye=!0;else switch(ie){case"bigint":case"string":case"number":ye=!0;break;case"object":switch(P.$$typeof){case a:case e:ye=!0;break;case g:return ye=P._init,F(ye(P._payload),K,Se,Te,Ce)}}if(ye)return Ce=Ce(P),ye=Te===""?"."+ue(P,0):Te,O(Ce)?(Se="",ye!=null&&(Se=ye.replace(ce,"$&/")+"/"),F(Ce,K,Se,"",function(at){return at})):Ce!=null&&(V(Ce)&&(Ce=X(Ce,Se+(Ce.key==null||P&&P.key===Ce.key?"":(""+Ce.key).replace(ce,"$&/")+"/")+ye)),K.push(Ce)),1;ye=0;var be=Te===""?".":Te+":";if(O(P))for(var He=0;He<P.length;He++)Te=P[He],ie=be+ue(Te,He),ye+=F(Te,K,Se,ie,Ce);else if(He=x(P),typeof He=="function")for(P=He.call(P),He=0;!(Te=P.next()).done;)Te=Te.value,ie=be+ue(Te,He++),ye+=F(Te,K,Se,ie,Ce);else if(ie==="object"){if(typeof P.then=="function")return F(Y(P),K,Se,Te,Ce);throw K=String(P),Error("Objects are not valid as a React child (found: "+(K==="[object Object]"?"object with keys {"+Object.keys(P).join(", ")+"}":K)+"). If you meant to render a collection of children, use an array instead.")}return ye}function H(P,K,Se){if(P==null)return P;var Te=[],Ce=0;return F(P,Te,"","",function(ie){return K.call(Se,ie,Ce++)}),Te}function $(P){if(P._status===-1){var K=P._result;K=K(),K.then(function(Se){(P._status===0||P._status===-1)&&(P._status=1,P._result=Se)},function(Se){(P._status===0||P._status===-1)&&(P._status=2,P._result=Se)}),P._status===-1&&(P._status=0,P._result=K)}if(P._status===1)return P._result.default;throw P._result}var me=typeof reportError=="function"?reportError:function(P){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var K=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof P=="object"&&P!==null&&typeof P.message=="string"?String(P.message):String(P),error:P});if(!window.dispatchEvent(K))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",P);return}console.error(P)},xe={map:H,forEach:function(P,K,Se){H(P,function(){K.apply(this,arguments)},Se)},count:function(P){var K=0;return H(P,function(){K++}),K},toArray:function(P){return H(P,function(K){return K})||[]},only:function(P){if(!V(P))throw Error("React.Children.only expected to receive a single React element child.");return P}};return ut.Activity=_,ut.Children=xe,ut.Component=M,ut.Fragment=i,ut.Profiler=o,ut.PureComponent=z,ut.StrictMode=r,ut.Suspense=m,ut.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=B,ut.__COMPILER_RUNTIME={__proto__:null,c:function(P){return B.H.useMemoCache(P)}},ut.cache=function(P){return function(){return P.apply(null,arguments)}},ut.cacheSignal=function(){return null},ut.cloneElement=function(P,K,Se){if(P==null)throw Error("The argument must be a React element, but you passed "+P+".");var Te=w({},P.props),Ce=P.key;if(K!=null)for(ie in K.key!==void 0&&(Ce=""+K.key),K)!T.call(K,ie)||ie==="key"||ie==="__self"||ie==="__source"||ie==="ref"&&K.ref===void 0||(Te[ie]=K[ie]);var ie=arguments.length-2;if(ie===1)Te.children=Se;else if(1<ie){for(var ye=Array(ie),be=0;be<ie;be++)ye[be]=arguments[be+2];Te.children=ye}return N(P.type,Ce,Te)},ut.createContext=function(P){return P={$$typeof:u,_currentValue:P,_currentValue2:P,_threadCount:0,Provider:null,Consumer:null},P.Provider=P,P.Consumer={$$typeof:c,_context:P},P},ut.createElement=function(P,K,Se){var Te,Ce={},ie=null;if(K!=null)for(Te in K.key!==void 0&&(ie=""+K.key),K)T.call(K,Te)&&Te!=="key"&&Te!=="__self"&&Te!=="__source"&&(Ce[Te]=K[Te]);var ye=arguments.length-2;if(ye===1)Ce.children=Se;else if(1<ye){for(var be=Array(ye),He=0;He<ye;He++)be[He]=arguments[He+2];Ce.children=be}if(P&&P.defaultProps)for(Te in ye=P.defaultProps,ye)Ce[Te]===void 0&&(Ce[Te]=ye[Te]);return N(P,ie,Ce)},ut.createRef=function(){return{current:null}},ut.forwardRef=function(P){return{$$typeof:h,render:P}},ut.isValidElement=V,ut.lazy=function(P){return{$$typeof:g,_payload:{_status:-1,_result:P},_init:$}},ut.memo=function(P,K){return{$$typeof:d,type:P,compare:K===void 0?null:K}},ut.startTransition=function(P){var K=B.T,Se={};B.T=Se;try{var Te=P(),Ce=B.S;Ce!==null&&Ce(Se,Te),typeof Te=="object"&&Te!==null&&typeof Te.then=="function"&&Te.then(L,me)}catch(ie){me(ie)}finally{K!==null&&Se.types!==null&&(K.types=Se.types),B.T=K}},ut.unstable_useCacheRefresh=function(){return B.H.useCacheRefresh()},ut.use=function(P){return B.H.use(P)},ut.useActionState=function(P,K,Se){return B.H.useActionState(P,K,Se)},ut.useCallback=function(P,K){return B.H.useCallback(P,K)},ut.useContext=function(P){return B.H.useContext(P)},ut.useDebugValue=function(){},ut.useDeferredValue=function(P,K){return B.H.useDeferredValue(P,K)},ut.useEffect=function(P,K){return B.H.useEffect(P,K)},ut.useEffectEvent=function(P){return B.H.useEffectEvent(P)},ut.useId=function(){return B.H.useId()},ut.useImperativeHandle=function(P,K,Se){return B.H.useImperativeHandle(P,K,Se)},ut.useInsertionEffect=function(P,K){return B.H.useInsertionEffect(P,K)},ut.useLayoutEffect=function(P,K){return B.H.useLayoutEffect(P,K)},ut.useMemo=function(P,K){return B.H.useMemo(P,K)},ut.useOptimistic=function(P,K){return B.H.useOptimistic(P,K)},ut.useReducer=function(P,K,Se){return B.H.useReducer(P,K,Se)},ut.useRef=function(P){return B.H.useRef(P)},ut.useState=function(P){return B.H.useState(P)},ut.useSyncExternalStore=function(P,K,Se){return B.H.useSyncExternalStore(P,K,Se)},ut.useTransition=function(){return B.H.useTransition()},ut.version="19.2.7",ut}var E_;function Sp(){return E_||(E_=1,Od.exports=ry()),Od.exports}var Ve=Sp(),Pd={exports:{}},ml={},Id={exports:{}},Fd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var b_;function oy(){return b_||(b_=1,(function(a){function e(F,H){var $=F.length;F.push(H);e:for(;0<$;){var me=$-1>>>1,xe=F[me];if(0<o(xe,H))F[me]=H,F[$]=xe,$=me;else break e}}function i(F){return F.length===0?null:F[0]}function r(F){if(F.length===0)return null;var H=F[0],$=F.pop();if($!==H){F[0]=$;e:for(var me=0,xe=F.length,P=xe>>>1;me<P;){var K=2*(me+1)-1,Se=F[K],Te=K+1,Ce=F[Te];if(0>o(Se,$))Te<xe&&0>o(Ce,Se)?(F[me]=Ce,F[Te]=$,me=Te):(F[me]=Se,F[K]=$,me=K);else if(Te<xe&&0>o(Ce,$))F[me]=Ce,F[Te]=$,me=Te;else break e}}return H}function o(F,H){var $=F.sortIndex-H.sortIndex;return $!==0?$:F.id-H.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;a.unstable_now=function(){return c.now()}}else{var u=Date,h=u.now();a.unstable_now=function(){return u.now()-h}}var m=[],d=[],g=1,_=null,v=3,x=!1,b=!1,w=!1,y=!1,M=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,z=typeof setImmediate<"u"?setImmediate:null;function R(F){for(var H=i(d);H!==null;){if(H.callback===null)r(d);else if(H.startTime<=F)r(d),H.sortIndex=H.expirationTime,e(m,H);else break;H=i(d)}}function O(F){if(w=!1,R(F),!b)if(i(m)!==null)b=!0,L||(L=!0,j());else{var H=i(d);H!==null&&Y(O,H.startTime-F)}}var L=!1,B=-1,T=5,N=-1;function X(){return y?!0:!(a.unstable_now()-N<T)}function V(){if(y=!1,L){var F=a.unstable_now();N=F;var H=!0;try{e:{b=!1,w&&(w=!1,I(B),B=-1),x=!0;var $=v;try{t:{for(R(F),_=i(m);_!==null&&!(_.expirationTime>F&&X());){var me=_.callback;if(typeof me=="function"){_.callback=null,v=_.priorityLevel;var xe=me(_.expirationTime<=F);if(F=a.unstable_now(),typeof xe=="function"){_.callback=xe,R(F),H=!0;break t}_===i(m)&&r(m),R(F)}else r(m);_=i(m)}if(_!==null)H=!0;else{var P=i(d);P!==null&&Y(O,P.startTime-F),H=!1}}break e}finally{_=null,v=$,x=!1}H=void 0}}finally{H?j():L=!1}}}var j;if(typeof z=="function")j=function(){z(V)};else if(typeof MessageChannel<"u"){var ce=new MessageChannel,ue=ce.port2;ce.port1.onmessage=V,j=function(){ue.postMessage(null)}}else j=function(){M(V,0)};function Y(F,H){B=M(function(){F(a.unstable_now())},H)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(F){F.callback=null},a.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<F?Math.floor(1e3/F):5},a.unstable_getCurrentPriorityLevel=function(){return v},a.unstable_next=function(F){switch(v){case 1:case 2:case 3:var H=3;break;default:H=v}var $=v;v=H;try{return F()}finally{v=$}},a.unstable_requestPaint=function(){y=!0},a.unstable_runWithPriority=function(F,H){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var $=v;v=F;try{return H()}finally{v=$}},a.unstable_scheduleCallback=function(F,H,$){var me=a.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?me+$:me):$=me,F){case 1:var xe=-1;break;case 2:xe=250;break;case 5:xe=1073741823;break;case 4:xe=1e4;break;default:xe=5e3}return xe=$+xe,F={id:g++,callback:H,priorityLevel:F,startTime:$,expirationTime:xe,sortIndex:-1},$>me?(F.sortIndex=$,e(d,F),i(m)===null&&F===i(d)&&(w?(I(B),B=-1):w=!0,Y(O,$-me))):(F.sortIndex=xe,e(m,F),b||x||(b=!0,L||(L=!0,j()))),F},a.unstable_shouldYield=X,a.unstable_wrapCallback=function(F){var H=v;return function(){var $=v;v=H;try{return F.apply(this,arguments)}finally{v=$}}}})(Fd)),Fd}var T_;function ly(){return T_||(T_=1,Id.exports=oy()),Id.exports}var Bd={exports:{}},si={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var A_;function cy(){if(A_)return si;A_=1;var a=Sp();function e(m){var d="https://react.dev/errors/"+m;if(1<arguments.length){d+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)d+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+d+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},o=Symbol.for("react.portal");function c(m,d,g){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:_==null?null:""+_,children:m,containerInfo:d,implementation:g}}var u=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,d){if(m==="font")return"";if(typeof d=="string")return d==="use-credentials"?d:""}return si.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,si.createPortal=function(m,d){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!d||d.nodeType!==1&&d.nodeType!==9&&d.nodeType!==11)throw Error(e(299));return c(m,d,null,g)},si.flushSync=function(m){var d=u.T,g=r.p;try{if(u.T=null,r.p=2,m)return m()}finally{u.T=d,r.p=g,r.d.f()}},si.preconnect=function(m,d){typeof m=="string"&&(d?(d=d.crossOrigin,d=typeof d=="string"?d==="use-credentials"?d:"":void 0):d=null,r.d.C(m,d))},si.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},si.preinit=function(m,d){if(typeof m=="string"&&d&&typeof d.as=="string"){var g=d.as,_=h(g,d.crossOrigin),v=typeof d.integrity=="string"?d.integrity:void 0,x=typeof d.fetchPriority=="string"?d.fetchPriority:void 0;g==="style"?r.d.S(m,typeof d.precedence=="string"?d.precedence:void 0,{crossOrigin:_,integrity:v,fetchPriority:x}):g==="script"&&r.d.X(m,{crossOrigin:_,integrity:v,fetchPriority:x,nonce:typeof d.nonce=="string"?d.nonce:void 0})}},si.preinitModule=function(m,d){if(typeof m=="string")if(typeof d=="object"&&d!==null){if(d.as==null||d.as==="script"){var g=h(d.as,d.crossOrigin);r.d.M(m,{crossOrigin:g,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0})}}else d==null&&r.d.M(m)},si.preload=function(m,d){if(typeof m=="string"&&typeof d=="object"&&d!==null&&typeof d.as=="string"){var g=d.as,_=h(g,d.crossOrigin);r.d.L(m,g,{crossOrigin:_,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0,type:typeof d.type=="string"?d.type:void 0,fetchPriority:typeof d.fetchPriority=="string"?d.fetchPriority:void 0,referrerPolicy:typeof d.referrerPolicy=="string"?d.referrerPolicy:void 0,imageSrcSet:typeof d.imageSrcSet=="string"?d.imageSrcSet:void 0,imageSizes:typeof d.imageSizes=="string"?d.imageSizes:void 0,media:typeof d.media=="string"?d.media:void 0})}},si.preloadModule=function(m,d){if(typeof m=="string")if(d){var g=h(d.as,d.crossOrigin);r.d.m(m,{as:typeof d.as=="string"&&d.as!=="script"?d.as:void 0,crossOrigin:g,integrity:typeof d.integrity=="string"?d.integrity:void 0})}else r.d.m(m)},si.requestFormReset=function(m){r.d.r(m)},si.unstable_batchedUpdates=function(m,d){return m(d)},si.useFormState=function(m,d,g){return u.H.useFormState(m,d,g)},si.useFormStatus=function(){return u.H.useHostTransitionStatus()},si.version="19.2.7",si}var R_;function tx(){if(R_)return Bd.exports;R_=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(e){console.error(e)}}return a(),Bd.exports=cy(),Bd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var C_;function uy(){if(C_)return ml;C_=1;var a=ly(),e=Sp(),i=tx();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)n+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,s=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(s=n.return),t=n.return;while(t)}return n.tag===3?s:null}function u(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function h(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(r(188))}function d(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(r(188));return n!==t?null:t}for(var s=t,l=n;;){var f=s.return;if(f===null)break;var p=f.alternate;if(p===null){if(l=f.return,l!==null){s=l;continue}break}if(f.child===p.child){for(p=f.child;p;){if(p===s)return m(f),t;if(p===l)return m(f),n;p=p.sibling}throw Error(r(188))}if(s.return!==l.return)s=f,l=p;else{for(var S=!1,C=f.child;C;){if(C===s){S=!0,s=f,l=p;break}if(C===l){S=!0,l=f,s=p;break}C=C.sibling}if(!S){for(C=p.child;C;){if(C===s){S=!0,s=p,l=f;break}if(C===l){S=!0,l=p,s=f;break}C=C.sibling}if(!S)throw Error(r(189))}}if(s.alternate!==l)throw Error(r(190))}if(s.tag!==3)throw Error(r(188));return s.stateNode.current===s?t:n}function g(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=g(t),n!==null)return n;t=t.sibling}return null}var _=Object.assign,v=Symbol.for("react.element"),x=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),w=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),M=Symbol.for("react.profiler"),I=Symbol.for("react.consumer"),z=Symbol.for("react.context"),R=Symbol.for("react.forward_ref"),O=Symbol.for("react.suspense"),L=Symbol.for("react.suspense_list"),B=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),N=Symbol.for("react.activity"),X=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function j(t){return t===null||typeof t!="object"?null:(t=V&&t[V]||t["@@iterator"],typeof t=="function"?t:null)}var ce=Symbol.for("react.client.reference");function ue(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===ce?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case w:return"Fragment";case M:return"Profiler";case y:return"StrictMode";case O:return"Suspense";case L:return"SuspenseList";case N:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case b:return"Portal";case z:return t.displayName||"Context";case I:return(t._context.displayName||"Context")+".Consumer";case R:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case B:return n=t.displayName||null,n!==null?n:ue(t.type)||"Memo";case T:n=t._payload,t=t._init;try{return ue(t(n))}catch{}}return null}var Y=Array.isArray,F=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,$={pending:!1,data:null,method:null,action:null},me=[],xe=-1;function P(t){return{current:t}}function K(t){0>xe||(t.current=me[xe],me[xe]=null,xe--)}function Se(t,n){xe++,me[xe]=t.current,t.current=n}var Te=P(null),Ce=P(null),ie=P(null),ye=P(null);function be(t,n){switch(Se(ie,n),Se(Ce,t),Se(Te,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?kg(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=kg(n),t=Xg(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}K(Te),Se(Te,t)}function He(){K(Te),K(Ce),K(ie)}function at(t){t.memoizedState!==null&&Se(ye,t);var n=Te.current,s=Xg(n,t.type);n!==s&&(Se(Ce,t),Se(Te,s))}function et(t){Ce.current===t&&(K(Te),K(Ce)),ye.current===t&&(K(ye),ul._currentValue=$)}var Jt,dt;function xt(t){if(Jt===void 0)try{throw Error()}catch(s){var n=s.stack.trim().match(/\n( *(at )?)/);Jt=n&&n[1]||"",dt=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Jt+t+dt}var gt=!1;function ht(t,n){if(!t||gt)return"";gt=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(n){var Me=function(){throw Error()};if(Object.defineProperty(Me.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Me,[])}catch(fe){var le=fe}Reflect.construct(t,[],Me)}else{try{Me.call()}catch(fe){le=fe}t.call(Me.prototype)}}else{try{throw Error()}catch(fe){le=fe}(Me=t())&&typeof Me.catch=="function"&&Me.catch(function(){})}}catch(fe){if(fe&&le&&typeof fe.stack=="string")return[fe.stack,le.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var p=l.DetermineComponentFrameRoot(),S=p[0],C=p[1];if(S&&C){var G=S.split(`
`),oe=C.split(`
`);for(f=l=0;l<G.length&&!G[l].includes("DetermineComponentFrameRoot");)l++;for(;f<oe.length&&!oe[f].includes("DetermineComponentFrameRoot");)f++;if(l===G.length||f===oe.length)for(l=G.length-1,f=oe.length-1;1<=l&&0<=f&&G[l]!==oe[f];)f--;for(;1<=l&&0<=f;l--,f--)if(G[l]!==oe[f]){if(l!==1||f!==1)do if(l--,f--,0>f||G[l]!==oe[f]){var ge=`
`+G[l].replace(" at new "," at ");return t.displayName&&ge.includes("<anonymous>")&&(ge=ge.replace("<anonymous>",t.displayName)),ge}while(1<=l&&0<=f);break}}}finally{gt=!1,Error.prepareStackTrace=s}return(s=t?t.displayName||t.name:"")?xt(s):""}function un(t,n){switch(t.tag){case 26:case 27:case 5:return xt(t.type);case 16:return xt("Lazy");case 13:return t.child!==n&&n!==null?xt("Suspense Fallback"):xt("Suspense");case 19:return xt("SuspenseList");case 0:case 15:return ht(t.type,!1);case 11:return ht(t.type.render,!1);case 1:return ht(t.type,!0);case 31:return xt("Activity");default:return""}}function fn(t){try{var n="",s=null;do n+=un(t,s),s=t,t=t.return;while(t);return n}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var on=Object.prototype.hasOwnProperty,vn=a.unstable_scheduleCallback,Ut=a.unstable_cancelCallback,ln=a.unstable_shouldYield,Z=a.unstable_requestPaint,Ht=a.unstable_now,St=a.unstable_getCurrentPriorityLevel,U=a.unstable_ImmediatePriority,E=a.unstable_UserBlockingPriority,Q=a.unstable_NormalPriority,ae=a.unstable_LowPriority,he=a.unstable_IdlePriority,Ae=a.log,Ne=a.unstable_setDisableYieldValue,de=null,pe=null;function we(t){if(typeof Ae=="function"&&Ne(t),pe&&typeof pe.setStrictMode=="function")try{pe.setStrictMode(de,t)}catch{}}var ze=Math.clz32?Math.clz32:$e,Oe=Math.log,Pe=Math.LN2;function $e(t){return t>>>=0,t===0?32:31-(Oe(t)/Pe|0)|0}var Ke=256,nt=262144,k=4194304;function De(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function _e(t,n,s){var l=t.pendingLanes;if(l===0)return 0;var f=0,p=t.suspendedLanes,S=t.pingedLanes;t=t.warmLanes;var C=l&134217727;return C!==0?(l=C&~p,l!==0?f=De(l):(S&=C,S!==0?f=De(S):s||(s=C&~t,s!==0&&(f=De(s))))):(C=l&~p,C!==0?f=De(C):S!==0?f=De(S):s||(s=l&~t,s!==0&&(f=De(s)))),f===0?0:n!==0&&n!==f&&(n&p)===0&&(p=f&-f,s=n&-n,p>=s||p===32&&(s&4194048)!==0)?n:f}function Le(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function Ie(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ee(){var t=k;return k<<=1,(k&62914560)===0&&(k=4194304),t}function Ze(t){for(var n=[],s=0;31>s;s++)n.push(t);return n}function We(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function an(t,n,s,l,f,p){var S=t.pendingLanes;t.pendingLanes=s,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=s,t.entangledLanes&=s,t.errorRecoveryDisabledLanes&=s,t.shellSuspendCounter=0;var C=t.entanglements,G=t.expirationTimes,oe=t.hiddenUpdates;for(s=S&~s;0<s;){var ge=31-ze(s),Me=1<<ge;C[ge]=0,G[ge]=-1;var le=oe[ge];if(le!==null)for(oe[ge]=null,ge=0;ge<le.length;ge++){var fe=le[ge];fe!==null&&(fe.lane&=-536870913)}s&=~Me}l!==0&&Pt(t,l,0),p!==0&&f===0&&t.tag!==0&&(t.suspendedLanes|=p&~(S&~n))}function Pt(t,n,s){t.pendingLanes|=n,t.suspendedLanes&=~n;var l=31-ze(n);t.entangledLanes|=n,t.entanglements[l]=t.entanglements[l]|1073741824|s&261930}function kn(t,n){var s=t.entangledLanes|=n;for(t=t.entanglements;s;){var l=31-ze(s),f=1<<l;f&n|t[l]&n&&(t[l]|=n),s&=~f}}function ni(t,n){var s=n&-n;return s=(s&42)!==0?1:as(s),(s&(t.suspendedLanes|n))!==0?0:s}function as(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function ss(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function rs(){var t=H.p;return t!==0?t:(t=window.event,t===void 0?32:h_(t.type))}function Ca(t,n){var s=H.p;try{return H.p=t,n()}finally{H.p=s}}var Ri=Math.random().toString(36).slice(2),Sn="__reactFiber$"+Ri,Mn="__reactProps$"+Ri,Yn="__reactContainer$"+Ri,Re="__reactEvents$"+Ri,qe="__reactListeners$"+Ri,rt="__reactHandles$"+Ri,Rt="__reactResources$"+Ri,It="__reactMarker$"+Ri;function dn(t){delete t[Sn],delete t[Mn],delete t[Re],delete t[qe],delete t[rt]}function qt(t){var n=t[Sn];if(n)return n;for(var s=t.parentNode;s;){if(n=s[Yn]||s[Sn]){if(s=n.alternate,n.child!==null||s!==null&&s.child!==null)for(t=Qg(t);t!==null;){if(s=t[Sn])return s;t=Qg(t)}return n}t=s,s=t.parentNode}return null}function cn(t){if(t=t[Sn]||t[Yn]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function Ln(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function $t(t){var n=t[Rt];return n||(n=t[Rt]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Yt(t){t[It]=!0}var gi=new Set,A={};function q(t,n){se(t,n),se(t+"Capture",n)}function se(t,n){for(A[t]=n,t=0;t<n.length;t++)gi.add(n[t])}var te=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ne={},Fe={};function ke(t){return on.call(Fe,t)?!0:on.call(ne,t)?!1:te.test(t)?Fe[t]=!0:(ne[t]=!0,!1)}function Ue(t,n,s){if(ke(n))if(s===null)t.removeAttribute(n);else{switch(typeof s){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var l=n.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+s)}}function Ye(t,n,s){if(s===null)t.removeAttribute(n);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+s)}}function Xe(t,n,s,l){if(l===null)t.removeAttribute(s);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(s);return}t.setAttributeNS(n,s,""+l)}}function tt(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function lt(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Qe(t,n,s){var l=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var f=l.get,p=l.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return f.call(this)},set:function(S){s=""+S,p.call(this,S)}}),Object.defineProperty(t,n,{enumerable:l.enumerable}),{getValue:function(){return s},setValue:function(S){s=""+S},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Ct(t){if(!t._valueTracker){var n=lt(t)?"checked":"value";t._valueTracker=Qe(t,n,""+t[n])}}function Gt(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var s=n.getValue(),l="";return t&&(l=lt(t)?t.checked?"true":"false":t.value),t=l,t!==s?(n.setValue(t),!0):!1}function bt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Vt=/[\n"\\]/g;function kt(t){return t.replace(Vt,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Ge(t,n,s,l,f,p,S,C){t.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?t.type=S:t.removeAttribute("type"),n!=null?S==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+tt(n)):t.value!==""+tt(n)&&(t.value=""+tt(n)):S!=="submit"&&S!=="reset"||t.removeAttribute("value"),n!=null?ct(t,S,tt(n)):s!=null?ct(t,S,tt(s)):l!=null&&t.removeAttribute("value"),f==null&&p!=null&&(t.defaultChecked=!!p),f!=null&&(t.checked=f&&typeof f!="function"&&typeof f!="symbol"),C!=null&&typeof C!="function"&&typeof C!="symbol"&&typeof C!="boolean"?t.name=""+tt(C):t.removeAttribute("name")}function qn(t,n,s,l,f,p,S,C){if(p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"&&(t.type=p),n!=null||s!=null){if(!(p!=="submit"&&p!=="reset"||n!=null)){Ct(t);return}s=s!=null?""+tt(s):"",n=n!=null?""+tt(n):s,C||n===t.value||(t.value=n),t.defaultValue=n}l=l??f,l=typeof l!="function"&&typeof l!="symbol"&&!!l,t.checked=C?t.checked:!!l,t.defaultChecked=!!l,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(t.name=S),Ct(t)}function ct(t,n,s){n==="number"&&bt(t.ownerDocument)===t||t.defaultValue===""+s||(t.defaultValue=""+s)}function Rn(t,n,s,l){if(t=t.options,n){n={};for(var f=0;f<s.length;f++)n["$"+s[f]]=!0;for(s=0;s<t.length;s++)f=n.hasOwnProperty("$"+t[s].value),t[s].selected!==f&&(t[s].selected=f),f&&l&&(t[s].defaultSelected=!0)}else{for(s=""+tt(s),n=null,f=0;f<t.length;f++){if(t[f].value===s){t[f].selected=!0,l&&(t[f].defaultSelected=!0);return}n!==null||t[f].disabled||(n=t[f])}n!==null&&(n.selected=!0)}}function ci(t,n,s){if(n!=null&&(n=""+tt(n),n!==t.value&&(t.value=n),s==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=s!=null?""+tt(s):""}function jn(t,n,s,l){if(n==null){if(l!=null){if(s!=null)throw Error(r(92));if(Y(l)){if(1<l.length)throw Error(r(93));l=l[0]}s=l}s==null&&(s=""),n=s}s=tt(n),t.defaultValue=s,l=t.textContent,l===s&&l!==""&&l!==null&&(t.value=l),Ct(t)}function ii(t,n){if(n){var s=t.firstChild;if(s&&s===t.lastChild&&s.nodeType===3){s.nodeValue=n;return}}t.textContent=n}var Xt=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function sn(t,n,s){var l=n.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?l?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":l?t.setProperty(n,s):typeof s!="number"||s===0||Xt.has(n)?n==="float"?t.cssFloat=s:t[n]=(""+s).trim():t[n]=s+"px"}function _i(t,n,s){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,s!=null){for(var l in s)!s.hasOwnProperty(l)||n!=null&&n.hasOwnProperty(l)||(l.indexOf("--")===0?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="");for(var f in n)l=n[f],n.hasOwnProperty(f)&&s[f]!==l&&sn(t,f,l)}else for(var p in n)n.hasOwnProperty(p)&&sn(t,p,n[p])}function Lt(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ui=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ci=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function wa(t){return Ci.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function ta(){}var Il=null;function vr(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var da=null,os=null;function Fl(t){var n=cn(t);if(n&&(t=n.stateNode)){var s=t[Mn]||null;e:switch(t=n.stateNode,n.type){case"input":if(Ge(t,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),n=s.name,s.type==="radio"&&n!=null){for(s=t;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+kt(""+n)+'"][type="radio"]'),n=0;n<s.length;n++){var l=s[n];if(l!==t&&l.form===t.form){var f=l[Mn]||null;if(!f)throw Error(r(90));Ge(l,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(n=0;n<s.length;n++)l=s[n],l.form===t.form&&Gt(l)}break e;case"textarea":ci(t,s.value,s.defaultValue);break e;case"select":n=s.value,n!=null&&Rn(t,!!s.multiple,n,!1)}}}var xr=!1;function Ro(t,n,s){if(xr)return t(n,s);xr=!0;try{var l=t(n);return l}finally{if(xr=!1,(da!==null||os!==null)&&(Mc(),da&&(n=da,t=os,os=da=null,Fl(n),t)))for(n=0;n<t.length;n++)Fl(t[n])}}function pt(t,n){var s=t.stateNode;if(s===null)return null;var l=s[Mn]||null;if(l===null)return null;s=l[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(s&&typeof s!="function")throw Error(r(231,n,typeof s));return s}var yn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),vi=!1;if(yn)try{var Nn={};Object.defineProperty(Nn,"passive",{get:function(){vi=!0}}),window.addEventListener("test",Nn,Nn),window.removeEventListener("test",Nn,Nn)}catch{vi=!1}var Zn=null,ai=null,na=null;function Da(){if(na)return na;var t,n=ai,s=n.length,l,f="value"in Zn?Zn.value:Zn.textContent,p=f.length;for(t=0;t<s&&n[t]===f[t];t++);var S=s-t;for(l=1;l<=S&&n[s-l]===f[p-l];l++);return na=f.slice(t,1<l?1-l:void 0)}function ha(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function zi(){return!0}function Co(){return!1}function xi(t){function n(s,l,f,p,S){this._reactName=s,this._targetInst=f,this.type=l,this.nativeEvent=p,this.target=S,this.currentTarget=null;for(var C in t)t.hasOwnProperty(C)&&(s=t[C],this[C]=s?s(p):p[C]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?zi:Co,this.isPropagationStopped=Co,this}return _(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=zi)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=zi)},persist:function(){},isPersistent:zi}),n}var Gs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Bl=xi(Gs),wo=_({},Gs,{view:0,detail:0}),nS=xi(wo),Ou,Pu,Do,zl=_({},wo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Fu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Do&&(Do&&t.type==="mousemove"?(Ou=t.screenX-Do.screenX,Pu=t.screenY-Do.screenY):Pu=Ou=0,Do=t),Ou)},movementY:function(t){return"movementY"in t?t.movementY:Pu}}),Yp=xi(zl),iS=_({},zl,{dataTransfer:0}),aS=xi(iS),sS=_({},wo,{relatedTarget:0}),Iu=xi(sS),rS=_({},Gs,{animationName:0,elapsedTime:0,pseudoElement:0}),oS=xi(rS),lS=_({},Gs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),cS=xi(lS),uS=_({},Gs,{data:0}),qp=xi(uS),fS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},dS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},hS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function pS(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=hS[t])?!!n[t]:!1}function Fu(){return pS}var mS=_({},wo,{key:function(t){if(t.key){var n=fS[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=ha(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?dS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Fu,charCode:function(t){return t.type==="keypress"?ha(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ha(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),gS=xi(mS),_S=_({},zl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),jp=xi(_S),vS=_({},wo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Fu}),xS=xi(vS),SS=_({},Gs,{propertyName:0,elapsedTime:0,pseudoElement:0}),MS=xi(SS),yS=_({},zl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),ES=xi(yS),bS=_({},Gs,{newState:0,oldState:0}),TS=xi(bS),AS=[9,13,27,32],Bu=yn&&"CompositionEvent"in window,Lo=null;yn&&"documentMode"in document&&(Lo=document.documentMode);var RS=yn&&"TextEvent"in window&&!Lo,Zp=yn&&(!Bu||Lo&&8<Lo&&11>=Lo),Kp=" ",Qp=!1;function Jp(t,n){switch(t){case"keyup":return AS.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function $p(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Sr=!1;function CS(t,n){switch(t){case"compositionend":return $p(n);case"keypress":return n.which!==32?null:(Qp=!0,Kp);case"textInput":return t=n.data,t===Kp&&Qp?null:t;default:return null}}function wS(t,n){if(Sr)return t==="compositionend"||!Bu&&Jp(t,n)?(t=Da(),na=ai=Zn=null,Sr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Zp&&n.locale!=="ko"?null:n.data;default:return null}}var DS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function em(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!DS[t.type]:n==="textarea"}function tm(t,n,s,l){da?os?os.push(l):os=[l]:da=l,n=Cc(n,"onChange"),0<n.length&&(s=new Bl("onChange","change",null,s,l),t.push({event:s,listeners:n}))}var No=null,Uo=null;function LS(t){Fg(t,0)}function Hl(t){var n=Ln(t);if(Gt(n))return t}function nm(t,n){if(t==="change")return n}var im=!1;if(yn){var zu;if(yn){var Hu="oninput"in document;if(!Hu){var am=document.createElement("div");am.setAttribute("oninput","return;"),Hu=typeof am.oninput=="function"}zu=Hu}else zu=!1;im=zu&&(!document.documentMode||9<document.documentMode)}function sm(){No&&(No.detachEvent("onpropertychange",rm),Uo=No=null)}function rm(t){if(t.propertyName==="value"&&Hl(Uo)){var n=[];tm(n,Uo,t,vr(t)),Ro(LS,n)}}function NS(t,n,s){t==="focusin"?(sm(),No=n,Uo=s,No.attachEvent("onpropertychange",rm)):t==="focusout"&&sm()}function US(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Hl(Uo)}function OS(t,n){if(t==="click")return Hl(n)}function PS(t,n){if(t==="input"||t==="change")return Hl(n)}function IS(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var wi=typeof Object.is=="function"?Object.is:IS;function Oo(t,n){if(wi(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var s=Object.keys(t),l=Object.keys(n);if(s.length!==l.length)return!1;for(l=0;l<s.length;l++){var f=s[l];if(!on.call(n,f)||!wi(t[f],n[f]))return!1}return!0}function om(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function lm(t,n){var s=om(t);t=0;for(var l;s;){if(s.nodeType===3){if(l=t+s.textContent.length,t<=n&&l>=n)return{node:s,offset:n-t};t=l}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=om(s)}}function cm(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?cm(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function um(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=bt(t.document);n instanceof t.HTMLIFrameElement;){try{var s=typeof n.contentWindow.location.href=="string"}catch{s=!1}if(s)t=n.contentWindow;else break;n=bt(t.document)}return n}function Gu(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var FS=yn&&"documentMode"in document&&11>=document.documentMode,Mr=null,Vu=null,Po=null,ku=!1;function fm(t,n,s){var l=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;ku||Mr==null||Mr!==bt(l)||(l=Mr,"selectionStart"in l&&Gu(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Po&&Oo(Po,l)||(Po=l,l=Cc(Vu,"onSelect"),0<l.length&&(n=new Bl("onSelect","select",null,n,s),t.push({event:n,listeners:l}),n.target=Mr)))}function Vs(t,n){var s={};return s[t.toLowerCase()]=n.toLowerCase(),s["Webkit"+t]="webkit"+n,s["Moz"+t]="moz"+n,s}var yr={animationend:Vs("Animation","AnimationEnd"),animationiteration:Vs("Animation","AnimationIteration"),animationstart:Vs("Animation","AnimationStart"),transitionrun:Vs("Transition","TransitionRun"),transitionstart:Vs("Transition","TransitionStart"),transitioncancel:Vs("Transition","TransitionCancel"),transitionend:Vs("Transition","TransitionEnd")},Xu={},dm={};yn&&(dm=document.createElement("div").style,"AnimationEvent"in window||(delete yr.animationend.animation,delete yr.animationiteration.animation,delete yr.animationstart.animation),"TransitionEvent"in window||delete yr.transitionend.transition);function ks(t){if(Xu[t])return Xu[t];if(!yr[t])return t;var n=yr[t],s;for(s in n)if(n.hasOwnProperty(s)&&s in dm)return Xu[t]=n[s];return t}var hm=ks("animationend"),pm=ks("animationiteration"),mm=ks("animationstart"),BS=ks("transitionrun"),zS=ks("transitionstart"),HS=ks("transitioncancel"),gm=ks("transitionend"),_m=new Map,Wu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Wu.push("scrollEnd");function ia(t,n){_m.set(t,n),q(n,[t])}var Gl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},Hi=[],Er=0,Yu=0;function Vl(){for(var t=Er,n=Yu=Er=0;n<t;){var s=Hi[n];Hi[n++]=null;var l=Hi[n];Hi[n++]=null;var f=Hi[n];Hi[n++]=null;var p=Hi[n];if(Hi[n++]=null,l!==null&&f!==null){var S=l.pending;S===null?f.next=f:(f.next=S.next,S.next=f),l.pending=f}p!==0&&vm(s,f,p)}}function kl(t,n,s,l){Hi[Er++]=t,Hi[Er++]=n,Hi[Er++]=s,Hi[Er++]=l,Yu|=l,t.lanes|=l,t=t.alternate,t!==null&&(t.lanes|=l)}function qu(t,n,s,l){return kl(t,n,s,l),Xl(t)}function Xs(t,n){return kl(t,null,null,n),Xl(t)}function vm(t,n,s){t.lanes|=s;var l=t.alternate;l!==null&&(l.lanes|=s);for(var f=!1,p=t.return;p!==null;)p.childLanes|=s,l=p.alternate,l!==null&&(l.childLanes|=s),p.tag===22&&(t=p.stateNode,t===null||t._visibility&1||(f=!0)),t=p,p=p.return;return t.tag===3?(p=t.stateNode,f&&n!==null&&(f=31-ze(s),t=p.hiddenUpdates,l=t[f],l===null?t[f]=[n]:l.push(n),n.lane=s|536870912),p):null}function Xl(t){if(50<il)throw il=0,id=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var br={};function GS(t,n,s,l){this.tag=t,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Di(t,n,s,l){return new GS(t,n,s,l)}function ju(t){return t=t.prototype,!(!t||!t.isReactComponent)}function La(t,n){var s=t.alternate;return s===null?(s=Di(t.tag,n,t.key,t.mode),s.elementType=t.elementType,s.type=t.type,s.stateNode=t.stateNode,s.alternate=t,t.alternate=s):(s.pendingProps=n,s.type=t.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=t.flags&65011712,s.childLanes=t.childLanes,s.lanes=t.lanes,s.child=t.child,s.memoizedProps=t.memoizedProps,s.memoizedState=t.memoizedState,s.updateQueue=t.updateQueue,n=t.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},s.sibling=t.sibling,s.index=t.index,s.ref=t.ref,s.refCleanup=t.refCleanup,s}function xm(t,n){t.flags&=65011714;var s=t.alternate;return s===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=s.childLanes,t.lanes=s.lanes,t.child=s.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=s.memoizedProps,t.memoizedState=s.memoizedState,t.updateQueue=s.updateQueue,t.type=s.type,n=s.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function Wl(t,n,s,l,f,p){var S=0;if(l=t,typeof t=="function")ju(t)&&(S=1);else if(typeof t=="string")S=YM(t,s,Te.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case N:return t=Di(31,s,n,f),t.elementType=N,t.lanes=p,t;case w:return Ws(s.children,f,p,n);case y:S=8,f|=24;break;case M:return t=Di(12,s,n,f|2),t.elementType=M,t.lanes=p,t;case O:return t=Di(13,s,n,f),t.elementType=O,t.lanes=p,t;case L:return t=Di(19,s,n,f),t.elementType=L,t.lanes=p,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case z:S=10;break e;case I:S=9;break e;case R:S=11;break e;case B:S=14;break e;case T:S=16,l=null;break e}S=29,s=Error(r(130,t===null?"null":typeof t,"")),l=null}return n=Di(S,s,n,f),n.elementType=t,n.type=l,n.lanes=p,n}function Ws(t,n,s,l){return t=Di(7,t,l,n),t.lanes=s,t}function Zu(t,n,s){return t=Di(6,t,null,n),t.lanes=s,t}function Sm(t){var n=Di(18,null,null,0);return n.stateNode=t,n}function Ku(t,n,s){return n=Di(4,t.children!==null?t.children:[],t.key,n),n.lanes=s,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Mm=new WeakMap;function Gi(t,n){if(typeof t=="object"&&t!==null){var s=Mm.get(t);return s!==void 0?s:(n={value:t,source:n,stack:fn(n)},Mm.set(t,n),n)}return{value:t,source:n,stack:fn(n)}}var Tr=[],Ar=0,Yl=null,Io=0,Vi=[],ki=0,ls=null,pa=1,ma="";function Na(t,n){Tr[Ar++]=Io,Tr[Ar++]=Yl,Yl=t,Io=n}function ym(t,n,s){Vi[ki++]=pa,Vi[ki++]=ma,Vi[ki++]=ls,ls=t;var l=pa;t=ma;var f=32-ze(l)-1;l&=~(1<<f),s+=1;var p=32-ze(n)+f;if(30<p){var S=f-f%5;p=(l&(1<<S)-1).toString(32),l>>=S,f-=S,pa=1<<32-ze(n)+f|s<<f|l,ma=p+t}else pa=1<<p|s<<f|l,ma=t}function Qu(t){t.return!==null&&(Na(t,1),ym(t,1,0))}function Ju(t){for(;t===Yl;)Yl=Tr[--Ar],Tr[Ar]=null,Io=Tr[--Ar],Tr[Ar]=null;for(;t===ls;)ls=Vi[--ki],Vi[ki]=null,ma=Vi[--ki],Vi[ki]=null,pa=Vi[--ki],Vi[ki]=null}function Em(t,n){Vi[ki++]=pa,Vi[ki++]=ma,Vi[ki++]=ls,pa=n.id,ma=n.overflow,ls=t}var Kn=null,hn=null,wt=!1,cs=null,Xi=!1,$u=Error(r(519));function us(t){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Fo(Gi(n,t)),$u}function bm(t){var n=t.stateNode,s=t.type,l=t.memoizedProps;switch(n[Sn]=t,n[Mn]=l,s){case"dialog":Et("cancel",n),Et("close",n);break;case"iframe":case"object":case"embed":Et("load",n);break;case"video":case"audio":for(s=0;s<sl.length;s++)Et(sl[s],n);break;case"source":Et("error",n);break;case"img":case"image":case"link":Et("error",n),Et("load",n);break;case"details":Et("toggle",n);break;case"input":Et("invalid",n),qn(n,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":Et("invalid",n);break;case"textarea":Et("invalid",n),jn(n,l.value,l.defaultValue,l.children)}s=l.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||n.textContent===""+s||l.suppressHydrationWarning===!0||Gg(n.textContent,s)?(l.popover!=null&&(Et("beforetoggle",n),Et("toggle",n)),l.onScroll!=null&&Et("scroll",n),l.onScrollEnd!=null&&Et("scrollend",n),l.onClick!=null&&(n.onclick=ta),n=!0):n=!1,n||us(t,!0)}function Tm(t){for(Kn=t.return;Kn;)switch(Kn.tag){case 5:case 31:case 13:Xi=!1;return;case 27:case 3:Xi=!0;return;default:Kn=Kn.return}}function Rr(t){if(t!==Kn)return!1;if(!wt)return Tm(t),wt=!0,!1;var n=t.tag,s;if((s=n!==3&&n!==27)&&((s=n===5)&&(s=t.type,s=!(s!=="form"&&s!=="button")||vd(t.type,t.memoizedProps)),s=!s),s&&hn&&us(t),Tm(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));hn=Kg(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));hn=Kg(t)}else n===27?(n=hn,bs(t.type)?(t=Ed,Ed=null,hn=t):hn=n):hn=Kn?Yi(t.stateNode.nextSibling):null;return!0}function Ys(){hn=Kn=null,wt=!1}function ef(){var t=cs;return t!==null&&(Ei===null?Ei=t:Ei.push.apply(Ei,t),cs=null),t}function Fo(t){cs===null?cs=[t]:cs.push(t)}var tf=P(null),qs=null,Ua=null;function fs(t,n,s){Se(tf,n._currentValue),n._currentValue=s}function Oa(t){t._currentValue=tf.current,K(tf)}function nf(t,n,s){for(;t!==null;){var l=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,l!==null&&(l.childLanes|=n)):l!==null&&(l.childLanes&n)!==n&&(l.childLanes|=n),t===s)break;t=t.return}}function af(t,n,s,l){var f=t.child;for(f!==null&&(f.return=t);f!==null;){var p=f.dependencies;if(p!==null){var S=f.child;p=p.firstContext;e:for(;p!==null;){var C=p;p=f;for(var G=0;G<n.length;G++)if(C.context===n[G]){p.lanes|=s,C=p.alternate,C!==null&&(C.lanes|=s),nf(p.return,s,t),l||(S=null);break e}p=C.next}}else if(f.tag===18){if(S=f.return,S===null)throw Error(r(341));S.lanes|=s,p=S.alternate,p!==null&&(p.lanes|=s),nf(S,s,t),S=null}else S=f.child;if(S!==null)S.return=f;else for(S=f;S!==null;){if(S===t){S=null;break}if(f=S.sibling,f!==null){f.return=S.return,S=f;break}S=S.return}f=S}}function Cr(t,n,s,l){t=null;for(var f=n,p=!1;f!==null;){if(!p){if((f.flags&524288)!==0)p=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var S=f.alternate;if(S===null)throw Error(r(387));if(S=S.memoizedProps,S!==null){var C=f.type;wi(f.pendingProps.value,S.value)||(t!==null?t.push(C):t=[C])}}else if(f===ye.current){if(S=f.alternate,S===null)throw Error(r(387));S.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(t!==null?t.push(ul):t=[ul])}f=f.return}t!==null&&af(n,t,s,l),n.flags|=262144}function ql(t){for(t=t.firstContext;t!==null;){if(!wi(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function js(t){qs=t,Ua=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Qn(t){return Am(qs,t)}function jl(t,n){return qs===null&&js(t),Am(t,n)}function Am(t,n){var s=n._currentValue;if(n={context:n,memoizedValue:s,next:null},Ua===null){if(t===null)throw Error(r(308));Ua=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Ua=Ua.next=n;return s}var VS=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(s,l){t.push(l)}};this.abort=function(){n.aborted=!0,t.forEach(function(s){return s()})}},kS=a.unstable_scheduleCallback,XS=a.unstable_NormalPriority,Un={$$typeof:z,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function sf(){return{controller:new VS,data:new Map,refCount:0}}function Bo(t){t.refCount--,t.refCount===0&&kS(XS,function(){t.controller.abort()})}var zo=null,rf=0,wr=0,Dr=null;function WS(t,n){if(zo===null){var s=zo=[];rf=0,wr=cd(),Dr={status:"pending",value:void 0,then:function(l){s.push(l)}}}return rf++,n.then(Rm,Rm),n}function Rm(){if(--rf===0&&zo!==null){Dr!==null&&(Dr.status="fulfilled");var t=zo;zo=null,wr=0,Dr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function YS(t,n){var s=[],l={status:"pending",value:null,reason:null,then:function(f){s.push(f)}};return t.then(function(){l.status="fulfilled",l.value=n;for(var f=0;f<s.length;f++)(0,s[f])(n)},function(f){for(l.status="rejected",l.reason=f,f=0;f<s.length;f++)(0,s[f])(void 0)}),l}var Cm=F.S;F.S=function(t,n){fg=Ht(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&WS(t,n),Cm!==null&&Cm(t,n)};var Zs=P(null);function of(){var t=Zs.current;return t!==null?t:rn.pooledCache}function Zl(t,n){n===null?Se(Zs,Zs.current):Se(Zs,n.pool)}function wm(){var t=of();return t===null?null:{parent:Un._currentValue,pool:t}}var Lr=Error(r(460)),lf=Error(r(474)),Kl=Error(r(542)),Ql={then:function(){}};function Dm(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Lm(t,n,s){switch(s=t[s],s===void 0?t.push(n):s!==n&&(n.then(ta,ta),n=s),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Um(t),t;default:if(typeof n.status=="string")n.then(ta,ta);else{if(t=rn,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(l){if(n.status==="pending"){var f=n;f.status="fulfilled",f.value=l}},function(l){if(n.status==="pending"){var f=n;f.status="rejected",f.reason=l}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Um(t),t}throw Qs=n,Lr}}function Ks(t){try{var n=t._init;return n(t._payload)}catch(s){throw s!==null&&typeof s=="object"&&typeof s.then=="function"?(Qs=s,Lr):s}}var Qs=null;function Nm(){if(Qs===null)throw Error(r(459));var t=Qs;return Qs=null,t}function Um(t){if(t===Lr||t===Kl)throw Error(r(483))}var Nr=null,Ho=0;function Jl(t){var n=Ho;return Ho+=1,Nr===null&&(Nr=[]),Lm(Nr,t,n)}function Go(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function $l(t,n){throw n.$$typeof===v?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Om(t){function n(J,W){if(t){var re=J.deletions;re===null?(J.deletions=[W],J.flags|=16):re.push(W)}}function s(J,W){if(!t)return null;for(;W!==null;)n(J,W),W=W.sibling;return null}function l(J){for(var W=new Map;J!==null;)J.key!==null?W.set(J.key,J):W.set(J.index,J),J=J.sibling;return W}function f(J,W){return J=La(J,W),J.index=0,J.sibling=null,J}function p(J,W,re){return J.index=re,t?(re=J.alternate,re!==null?(re=re.index,re<W?(J.flags|=67108866,W):re):(J.flags|=67108866,W)):(J.flags|=1048576,W)}function S(J){return t&&J.alternate===null&&(J.flags|=67108866),J}function C(J,W,re,ve){return W===null||W.tag!==6?(W=Zu(re,J.mode,ve),W.return=J,W):(W=f(W,re),W.return=J,W)}function G(J,W,re,ve){var it=re.type;return it===w?ge(J,W,re.props.children,ve,re.key):W!==null&&(W.elementType===it||typeof it=="object"&&it!==null&&it.$$typeof===T&&Ks(it)===W.type)?(W=f(W,re.props),Go(W,re),W.return=J,W):(W=Wl(re.type,re.key,re.props,null,J.mode,ve),Go(W,re),W.return=J,W)}function oe(J,W,re,ve){return W===null||W.tag!==4||W.stateNode.containerInfo!==re.containerInfo||W.stateNode.implementation!==re.implementation?(W=Ku(re,J.mode,ve),W.return=J,W):(W=f(W,re.children||[]),W.return=J,W)}function ge(J,W,re,ve,it){return W===null||W.tag!==7?(W=Ws(re,J.mode,ve,it),W.return=J,W):(W=f(W,re),W.return=J,W)}function Me(J,W,re){if(typeof W=="string"&&W!==""||typeof W=="number"||typeof W=="bigint")return W=Zu(""+W,J.mode,re),W.return=J,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case x:return re=Wl(W.type,W.key,W.props,null,J.mode,re),Go(re,W),re.return=J,re;case b:return W=Ku(W,J.mode,re),W.return=J,W;case T:return W=Ks(W),Me(J,W,re)}if(Y(W)||j(W))return W=Ws(W,J.mode,re,null),W.return=J,W;if(typeof W.then=="function")return Me(J,Jl(W),re);if(W.$$typeof===z)return Me(J,jl(J,W),re);$l(J,W)}return null}function le(J,W,re,ve){var it=W!==null?W.key:null;if(typeof re=="string"&&re!==""||typeof re=="number"||typeof re=="bigint")return it!==null?null:C(J,W,""+re,ve);if(typeof re=="object"&&re!==null){switch(re.$$typeof){case x:return re.key===it?G(J,W,re,ve):null;case b:return re.key===it?oe(J,W,re,ve):null;case T:return re=Ks(re),le(J,W,re,ve)}if(Y(re)||j(re))return it!==null?null:ge(J,W,re,ve,null);if(typeof re.then=="function")return le(J,W,Jl(re),ve);if(re.$$typeof===z)return le(J,W,jl(J,re),ve);$l(J,re)}return null}function fe(J,W,re,ve,it){if(typeof ve=="string"&&ve!==""||typeof ve=="number"||typeof ve=="bigint")return J=J.get(re)||null,C(W,J,""+ve,it);if(typeof ve=="object"&&ve!==null){switch(ve.$$typeof){case x:return J=J.get(ve.key===null?re:ve.key)||null,G(W,J,ve,it);case b:return J=J.get(ve.key===null?re:ve.key)||null,oe(W,J,ve,it);case T:return ve=Ks(ve),fe(J,W,re,ve,it)}if(Y(ve)||j(ve))return J=J.get(re)||null,ge(W,J,ve,it,null);if(typeof ve.then=="function")return fe(J,W,re,Jl(ve),it);if(ve.$$typeof===z)return fe(J,W,re,jl(W,ve),it);$l(W,ve)}return null}function je(J,W,re,ve){for(var it=null,Ft=null,Je=W,_t=W=0,At=null;Je!==null&&_t<re.length;_t++){Je.index>_t?(At=Je,Je=null):At=Je.sibling;var Bt=le(J,Je,re[_t],ve);if(Bt===null){Je===null&&(Je=At);break}t&&Je&&Bt.alternate===null&&n(J,Je),W=p(Bt,W,_t),Ft===null?it=Bt:Ft.sibling=Bt,Ft=Bt,Je=At}if(_t===re.length)return s(J,Je),wt&&Na(J,_t),it;if(Je===null){for(;_t<re.length;_t++)Je=Me(J,re[_t],ve),Je!==null&&(W=p(Je,W,_t),Ft===null?it=Je:Ft.sibling=Je,Ft=Je);return wt&&Na(J,_t),it}for(Je=l(Je);_t<re.length;_t++)At=fe(Je,J,_t,re[_t],ve),At!==null&&(t&&At.alternate!==null&&Je.delete(At.key===null?_t:At.key),W=p(At,W,_t),Ft===null?it=At:Ft.sibling=At,Ft=At);return t&&Je.forEach(function(ws){return n(J,ws)}),wt&&Na(J,_t),it}function st(J,W,re,ve){if(re==null)throw Error(r(151));for(var it=null,Ft=null,Je=W,_t=W=0,At=null,Bt=re.next();Je!==null&&!Bt.done;_t++,Bt=re.next()){Je.index>_t?(At=Je,Je=null):At=Je.sibling;var ws=le(J,Je,Bt.value,ve);if(ws===null){Je===null&&(Je=At);break}t&&Je&&ws.alternate===null&&n(J,Je),W=p(ws,W,_t),Ft===null?it=ws:Ft.sibling=ws,Ft=ws,Je=At}if(Bt.done)return s(J,Je),wt&&Na(J,_t),it;if(Je===null){for(;!Bt.done;_t++,Bt=re.next())Bt=Me(J,Bt.value,ve),Bt!==null&&(W=p(Bt,W,_t),Ft===null?it=Bt:Ft.sibling=Bt,Ft=Bt);return wt&&Na(J,_t),it}for(Je=l(Je);!Bt.done;_t++,Bt=re.next())Bt=fe(Je,J,_t,Bt.value,ve),Bt!==null&&(t&&Bt.alternate!==null&&Je.delete(Bt.key===null?_t:Bt.key),W=p(Bt,W,_t),Ft===null?it=Bt:Ft.sibling=Bt,Ft=Bt);return t&&Je.forEach(function(iy){return n(J,iy)}),wt&&Na(J,_t),it}function nn(J,W,re,ve){if(typeof re=="object"&&re!==null&&re.type===w&&re.key===null&&(re=re.props.children),typeof re=="object"&&re!==null){switch(re.$$typeof){case x:e:{for(var it=re.key;W!==null;){if(W.key===it){if(it=re.type,it===w){if(W.tag===7){s(J,W.sibling),ve=f(W,re.props.children),ve.return=J,J=ve;break e}}else if(W.elementType===it||typeof it=="object"&&it!==null&&it.$$typeof===T&&Ks(it)===W.type){s(J,W.sibling),ve=f(W,re.props),Go(ve,re),ve.return=J,J=ve;break e}s(J,W);break}else n(J,W);W=W.sibling}re.type===w?(ve=Ws(re.props.children,J.mode,ve,re.key),ve.return=J,J=ve):(ve=Wl(re.type,re.key,re.props,null,J.mode,ve),Go(ve,re),ve.return=J,J=ve)}return S(J);case b:e:{for(it=re.key;W!==null;){if(W.key===it)if(W.tag===4&&W.stateNode.containerInfo===re.containerInfo&&W.stateNode.implementation===re.implementation){s(J,W.sibling),ve=f(W,re.children||[]),ve.return=J,J=ve;break e}else{s(J,W);break}else n(J,W);W=W.sibling}ve=Ku(re,J.mode,ve),ve.return=J,J=ve}return S(J);case T:return re=Ks(re),nn(J,W,re,ve)}if(Y(re))return je(J,W,re,ve);if(j(re)){if(it=j(re),typeof it!="function")throw Error(r(150));return re=it.call(re),st(J,W,re,ve)}if(typeof re.then=="function")return nn(J,W,Jl(re),ve);if(re.$$typeof===z)return nn(J,W,jl(J,re),ve);$l(J,re)}return typeof re=="string"&&re!==""||typeof re=="number"||typeof re=="bigint"?(re=""+re,W!==null&&W.tag===6?(s(J,W.sibling),ve=f(W,re),ve.return=J,J=ve):(s(J,W),ve=Zu(re,J.mode,ve),ve.return=J,J=ve),S(J)):s(J,W)}return function(J,W,re,ve){try{Ho=0;var it=nn(J,W,re,ve);return Nr=null,it}catch(Je){if(Je===Lr||Je===Kl)throw Je;var Ft=Di(29,Je,null,J.mode);return Ft.lanes=ve,Ft.return=J,Ft}finally{}}}var Js=Om(!0),Pm=Om(!1),ds=!1;function cf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function uf(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function hs(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function ps(t,n,s){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(Wt&2)!==0){var f=l.pending;return f===null?n.next=n:(n.next=f.next,f.next=n),l.pending=n,n=Xl(t),vm(t,null,s),n}return kl(t,l,n,s),Xl(t)}function Vo(t,n,s){if(n=n.updateQueue,n!==null&&(n=n.shared,(s&4194048)!==0)){var l=n.lanes;l&=t.pendingLanes,s|=l,n.lanes=s,kn(t,s)}}function ff(t,n){var s=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,s===l)){var f=null,p=null;if(s=s.firstBaseUpdate,s!==null){do{var S={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};p===null?f=p=S:p=p.next=S,s=s.next}while(s!==null);p===null?f=p=n:p=p.next=n}else f=p=n;s={baseState:l.baseState,firstBaseUpdate:f,lastBaseUpdate:p,shared:l.shared,callbacks:l.callbacks},t.updateQueue=s;return}t=s.lastBaseUpdate,t===null?s.firstBaseUpdate=n:t.next=n,s.lastBaseUpdate=n}var df=!1;function ko(){if(df){var t=Dr;if(t!==null)throw t}}function Xo(t,n,s,l){df=!1;var f=t.updateQueue;ds=!1;var p=f.firstBaseUpdate,S=f.lastBaseUpdate,C=f.shared.pending;if(C!==null){f.shared.pending=null;var G=C,oe=G.next;G.next=null,S===null?p=oe:S.next=oe,S=G;var ge=t.alternate;ge!==null&&(ge=ge.updateQueue,C=ge.lastBaseUpdate,C!==S&&(C===null?ge.firstBaseUpdate=oe:C.next=oe,ge.lastBaseUpdate=G))}if(p!==null){var Me=f.baseState;S=0,ge=oe=G=null,C=p;do{var le=C.lane&-536870913,fe=le!==C.lane;if(fe?(Tt&le)===le:(l&le)===le){le!==0&&le===wr&&(df=!0),ge!==null&&(ge=ge.next={lane:0,tag:C.tag,payload:C.payload,callback:null,next:null});e:{var je=t,st=C;le=n;var nn=s;switch(st.tag){case 1:if(je=st.payload,typeof je=="function"){Me=je.call(nn,Me,le);break e}Me=je;break e;case 3:je.flags=je.flags&-65537|128;case 0:if(je=st.payload,le=typeof je=="function"?je.call(nn,Me,le):je,le==null)break e;Me=_({},Me,le);break e;case 2:ds=!0}}le=C.callback,le!==null&&(t.flags|=64,fe&&(t.flags|=8192),fe=f.callbacks,fe===null?f.callbacks=[le]:fe.push(le))}else fe={lane:le,tag:C.tag,payload:C.payload,callback:C.callback,next:null},ge===null?(oe=ge=fe,G=Me):ge=ge.next=fe,S|=le;if(C=C.next,C===null){if(C=f.shared.pending,C===null)break;fe=C,C=fe.next,fe.next=null,f.lastBaseUpdate=fe,f.shared.pending=null}}while(!0);ge===null&&(G=Me),f.baseState=G,f.firstBaseUpdate=oe,f.lastBaseUpdate=ge,p===null&&(f.shared.lanes=0),xs|=S,t.lanes=S,t.memoizedState=Me}}function Im(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function Fm(t,n){var s=t.callbacks;if(s!==null)for(t.callbacks=null,t=0;t<s.length;t++)Im(s[t],n)}var Ur=P(null),ec=P(0);function Bm(t,n){t=ka,Se(ec,t),Se(Ur,n),ka=t|n.baseLanes}function hf(){Se(ec,ka),Se(Ur,Ur.current)}function pf(){ka=ec.current,K(Ur),K(ec)}var Li=P(null),Wi=null;function ms(t){var n=t.alternate;Se(Cn,Cn.current&1),Se(Li,t),Wi===null&&(n===null||Ur.current!==null||n.memoizedState!==null)&&(Wi=t)}function mf(t){Se(Cn,Cn.current),Se(Li,t),Wi===null&&(Wi=t)}function zm(t){t.tag===22?(Se(Cn,Cn.current),Se(Li,t),Wi===null&&(Wi=t)):gs()}function gs(){Se(Cn,Cn.current),Se(Li,Li.current)}function Ni(t){K(Li),Wi===t&&(Wi=null),K(Cn)}var Cn=P(0);function tc(t){for(var n=t;n!==null;){if(n.tag===13){var s=n.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||Md(s)||yd(s)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Pa=0,mt=null,en=null,On=null,nc=!1,Or=!1,$s=!1,ic=0,Wo=0,Pr=null,qS=0;function En(){throw Error(r(321))}function gf(t,n){if(n===null)return!1;for(var s=0;s<n.length&&s<t.length;s++)if(!wi(t[s],n[s]))return!1;return!0}function _f(t,n,s,l,f,p){return Pa=p,mt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,F.H=t===null||t.memoizedState===null?y0:Nf,$s=!1,p=s(l,f),$s=!1,Or&&(p=Gm(n,s,l,f)),Hm(t),p}function Hm(t){F.H=jo;var n=en!==null&&en.next!==null;if(Pa=0,On=en=mt=null,nc=!1,Wo=0,Pr=null,n)throw Error(r(300));t===null||Pn||(t=t.dependencies,t!==null&&ql(t)&&(Pn=!0))}function Gm(t,n,s,l){mt=t;var f=0;do{if(Or&&(Pr=null),Wo=0,Or=!1,25<=f)throw Error(r(301));if(f+=1,On=en=null,t.updateQueue!=null){var p=t.updateQueue;p.lastEffect=null,p.events=null,p.stores=null,p.memoCache!=null&&(p.memoCache.index=0)}F.H=E0,p=n(s,l)}while(Or);return p}function jS(){var t=F.H,n=t.useState()[0];return n=typeof n.then=="function"?Yo(n):n,t=t.useState()[0],(en!==null?en.memoizedState:null)!==t&&(mt.flags|=1024),n}function vf(){var t=ic!==0;return ic=0,t}function xf(t,n,s){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~s}function Sf(t){if(nc){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}nc=!1}Pa=0,On=en=mt=null,Or=!1,Wo=ic=0,Pr=null}function fi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return On===null?mt.memoizedState=On=t:On=On.next=t,On}function wn(){if(en===null){var t=mt.alternate;t=t!==null?t.memoizedState:null}else t=en.next;var n=On===null?mt.memoizedState:On.next;if(n!==null)On=n,en=t;else{if(t===null)throw mt.alternate===null?Error(r(467)):Error(r(310));en=t,t={memoizedState:en.memoizedState,baseState:en.baseState,baseQueue:en.baseQueue,queue:en.queue,next:null},On===null?mt.memoizedState=On=t:On=On.next=t}return On}function ac(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Yo(t){var n=Wo;return Wo+=1,Pr===null&&(Pr=[]),t=Lm(Pr,t,n),n=mt,(On===null?n.memoizedState:On.next)===null&&(n=n.alternate,F.H=n===null||n.memoizedState===null?y0:Nf),t}function sc(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Yo(t);if(t.$$typeof===z)return Qn(t)}throw Error(r(438,String(t)))}function Mf(t){var n=null,s=mt.updateQueue;if(s!==null&&(n=s.memoCache),n==null){var l=mt.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(n={data:l.data.map(function(f){return f.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),s===null&&(s=ac(),mt.updateQueue=s),s.memoCache=n,s=n.data[n.index],s===void 0)for(s=n.data[n.index]=Array(t),l=0;l<t;l++)s[l]=X;return n.index++,s}function Ia(t,n){return typeof n=="function"?n(t):n}function rc(t){var n=wn();return yf(n,en,t)}function yf(t,n,s){var l=t.queue;if(l===null)throw Error(r(311));l.lastRenderedReducer=s;var f=t.baseQueue,p=l.pending;if(p!==null){if(f!==null){var S=f.next;f.next=p.next,p.next=S}n.baseQueue=f=p,l.pending=null}if(p=t.baseState,f===null)t.memoizedState=p;else{n=f.next;var C=S=null,G=null,oe=n,ge=!1;do{var Me=oe.lane&-536870913;if(Me!==oe.lane?(Tt&Me)===Me:(Pa&Me)===Me){var le=oe.revertLane;if(le===0)G!==null&&(G=G.next={lane:0,revertLane:0,gesture:null,action:oe.action,hasEagerState:oe.hasEagerState,eagerState:oe.eagerState,next:null}),Me===wr&&(ge=!0);else if((Pa&le)===le){oe=oe.next,le===wr&&(ge=!0);continue}else Me={lane:0,revertLane:oe.revertLane,gesture:null,action:oe.action,hasEagerState:oe.hasEagerState,eagerState:oe.eagerState,next:null},G===null?(C=G=Me,S=p):G=G.next=Me,mt.lanes|=le,xs|=le;Me=oe.action,$s&&s(p,Me),p=oe.hasEagerState?oe.eagerState:s(p,Me)}else le={lane:Me,revertLane:oe.revertLane,gesture:oe.gesture,action:oe.action,hasEagerState:oe.hasEagerState,eagerState:oe.eagerState,next:null},G===null?(C=G=le,S=p):G=G.next=le,mt.lanes|=Me,xs|=Me;oe=oe.next}while(oe!==null&&oe!==n);if(G===null?S=p:G.next=C,!wi(p,t.memoizedState)&&(Pn=!0,ge&&(s=Dr,s!==null)))throw s;t.memoizedState=p,t.baseState=S,t.baseQueue=G,l.lastRenderedState=p}return f===null&&(l.lanes=0),[t.memoizedState,l.dispatch]}function Ef(t){var n=wn(),s=n.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=t;var l=s.dispatch,f=s.pending,p=n.memoizedState;if(f!==null){s.pending=null;var S=f=f.next;do p=t(p,S.action),S=S.next;while(S!==f);wi(p,n.memoizedState)||(Pn=!0),n.memoizedState=p,n.baseQueue===null&&(n.baseState=p),s.lastRenderedState=p}return[p,l]}function Vm(t,n,s){var l=mt,f=wn(),p=wt;if(p){if(s===void 0)throw Error(r(407));s=s()}else s=n();var S=!wi((en||f).memoizedState,s);if(S&&(f.memoizedState=s,Pn=!0),f=f.queue,Af(Wm.bind(null,l,f,t),[t]),f.getSnapshot!==n||S||On!==null&&On.memoizedState.tag&1){if(l.flags|=2048,Ir(9,{destroy:void 0},Xm.bind(null,l,f,s,n),null),rn===null)throw Error(r(349));p||(Pa&127)!==0||km(l,n,s)}return s}function km(t,n,s){t.flags|=16384,t={getSnapshot:n,value:s},n=mt.updateQueue,n===null?(n=ac(),mt.updateQueue=n,n.stores=[t]):(s=n.stores,s===null?n.stores=[t]:s.push(t))}function Xm(t,n,s,l){n.value=s,n.getSnapshot=l,Ym(n)&&qm(t)}function Wm(t,n,s){return s(function(){Ym(n)&&qm(t)})}function Ym(t){var n=t.getSnapshot;t=t.value;try{var s=n();return!wi(t,s)}catch{return!0}}function qm(t){var n=Xs(t,2);n!==null&&bi(n,t,2)}function bf(t){var n=fi();if(typeof t=="function"){var s=t;if(t=s(),$s){we(!0);try{s()}finally{we(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ia,lastRenderedState:t},n}function jm(t,n,s,l){return t.baseState=s,yf(t,en,typeof l=="function"?l:Ia)}function ZS(t,n,s,l,f){if(cc(t))throw Error(r(485));if(t=n.action,t!==null){var p={payload:f,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){p.listeners.push(S)}};F.T!==null?s(!0):p.isTransition=!1,l(p),s=n.pending,s===null?(p.next=n.pending=p,Zm(n,p)):(p.next=s.next,n.pending=s.next=p)}}function Zm(t,n){var s=n.action,l=n.payload,f=t.state;if(n.isTransition){var p=F.T,S={};F.T=S;try{var C=s(f,l),G=F.S;G!==null&&G(S,C),Km(t,n,C)}catch(oe){Tf(t,n,oe)}finally{p!==null&&S.types!==null&&(p.types=S.types),F.T=p}}else try{p=s(f,l),Km(t,n,p)}catch(oe){Tf(t,n,oe)}}function Km(t,n,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(l){Qm(t,n,l)},function(l){return Tf(t,n,l)}):Qm(t,n,s)}function Qm(t,n,s){n.status="fulfilled",n.value=s,Jm(n),t.state=s,n=t.pending,n!==null&&(s=n.next,s===n?t.pending=null:(s=s.next,n.next=s,Zm(t,s)))}function Tf(t,n,s){var l=t.pending;if(t.pending=null,l!==null){l=l.next;do n.status="rejected",n.reason=s,Jm(n),n=n.next;while(n!==l)}t.action=null}function Jm(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function $m(t,n){return n}function e0(t,n){if(wt){var s=rn.formState;if(s!==null){e:{var l=mt;if(wt){if(hn){t:{for(var f=hn,p=Xi;f.nodeType!==8;){if(!p){f=null;break t}if(f=Yi(f.nextSibling),f===null){f=null;break t}}p=f.data,f=p==="F!"||p==="F"?f:null}if(f){hn=Yi(f.nextSibling),l=f.data==="F!";break e}}us(l)}l=!1}l&&(n=s[0])}}return s=fi(),s.memoizedState=s.baseState=n,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:$m,lastRenderedState:n},s.queue=l,s=x0.bind(null,mt,l),l.dispatch=s,l=bf(!1),p=Lf.bind(null,mt,!1,l.queue),l=fi(),f={state:n,dispatch:null,action:t,pending:null},l.queue=f,s=ZS.bind(null,mt,f,p,s),f.dispatch=s,l.memoizedState=t,[n,s,!1]}function t0(t){var n=wn();return n0(n,en,t)}function n0(t,n,s){if(n=yf(t,n,$m)[0],t=rc(Ia)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var l=Yo(n)}catch(S){throw S===Lr?Kl:S}else l=n;n=wn();var f=n.queue,p=f.dispatch;return s!==n.memoizedState&&(mt.flags|=2048,Ir(9,{destroy:void 0},KS.bind(null,f,s),null)),[l,p,t]}function KS(t,n){t.action=n}function i0(t){var n=wn(),s=en;if(s!==null)return n0(n,s,t);wn(),n=n.memoizedState,s=wn();var l=s.queue.dispatch;return s.memoizedState=t,[n,l,!1]}function Ir(t,n,s,l){return t={tag:t,create:s,deps:l,inst:n,next:null},n=mt.updateQueue,n===null&&(n=ac(),mt.updateQueue=n),s=n.lastEffect,s===null?n.lastEffect=t.next=t:(l=s.next,s.next=t,t.next=l,n.lastEffect=t),t}function a0(){return wn().memoizedState}function oc(t,n,s,l){var f=fi();mt.flags|=t,f.memoizedState=Ir(1|n,{destroy:void 0},s,l===void 0?null:l)}function lc(t,n,s,l){var f=wn();l=l===void 0?null:l;var p=f.memoizedState.inst;en!==null&&l!==null&&gf(l,en.memoizedState.deps)?f.memoizedState=Ir(n,p,s,l):(mt.flags|=t,f.memoizedState=Ir(1|n,p,s,l))}function s0(t,n){oc(8390656,8,t,n)}function Af(t,n){lc(2048,8,t,n)}function QS(t){mt.flags|=4;var n=mt.updateQueue;if(n===null)n=ac(),mt.updateQueue=n,n.events=[t];else{var s=n.events;s===null?n.events=[t]:s.push(t)}}function r0(t){var n=wn().memoizedState;return QS({ref:n,nextImpl:t}),function(){if((Wt&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function o0(t,n){return lc(4,2,t,n)}function l0(t,n){return lc(4,4,t,n)}function c0(t,n){if(typeof n=="function"){t=t();var s=n(t);return function(){typeof s=="function"?s():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function u0(t,n,s){s=s!=null?s.concat([t]):null,lc(4,4,c0.bind(null,n,t),s)}function Rf(){}function f0(t,n){var s=wn();n=n===void 0?null:n;var l=s.memoizedState;return n!==null&&gf(n,l[1])?l[0]:(s.memoizedState=[t,n],t)}function d0(t,n){var s=wn();n=n===void 0?null:n;var l=s.memoizedState;if(n!==null&&gf(n,l[1]))return l[0];if(l=t(),$s){we(!0);try{t()}finally{we(!1)}}return s.memoizedState=[l,n],l}function Cf(t,n,s){return s===void 0||(Pa&1073741824)!==0&&(Tt&261930)===0?t.memoizedState=n:(t.memoizedState=s,t=hg(),mt.lanes|=t,xs|=t,s)}function h0(t,n,s,l){return wi(s,n)?s:Ur.current!==null?(t=Cf(t,s,l),wi(t,n)||(Pn=!0),t):(Pa&42)===0||(Pa&1073741824)!==0&&(Tt&261930)===0?(Pn=!0,t.memoizedState=s):(t=hg(),mt.lanes|=t,xs|=t,n)}function p0(t,n,s,l,f){var p=H.p;H.p=p!==0&&8>p?p:8;var S=F.T,C={};F.T=C,Lf(t,!1,n,s);try{var G=f(),oe=F.S;if(oe!==null&&oe(C,G),G!==null&&typeof G=="object"&&typeof G.then=="function"){var ge=YS(G,l);qo(t,n,ge,Pi(t))}else qo(t,n,l,Pi(t))}catch(Me){qo(t,n,{then:function(){},status:"rejected",reason:Me},Pi())}finally{H.p=p,S!==null&&C.types!==null&&(S.types=C.types),F.T=S}}function JS(){}function wf(t,n,s,l){if(t.tag!==5)throw Error(r(476));var f=m0(t).queue;p0(t,f,n,$,s===null?JS:function(){return g0(t),s(l)})}function m0(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:$,baseState:$,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ia,lastRenderedState:$},next:null};var s={};return n.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ia,lastRenderedState:s},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function g0(t){var n=m0(t);n.next===null&&(n=t.alternate.memoizedState),qo(t,n.next.queue,{},Pi())}function Df(){return Qn(ul)}function _0(){return wn().memoizedState}function v0(){return wn().memoizedState}function $S(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var s=Pi();t=hs(s);var l=ps(n,t,s);l!==null&&(bi(l,n,s),Vo(l,n,s)),n={cache:sf()},t.payload=n;return}n=n.return}}function eM(t,n,s){var l=Pi();s={lane:l,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},cc(t)?S0(n,s):(s=qu(t,n,s,l),s!==null&&(bi(s,t,l),M0(s,n,l)))}function x0(t,n,s){var l=Pi();qo(t,n,s,l)}function qo(t,n,s,l){var f={lane:l,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null};if(cc(t))S0(n,f);else{var p=t.alternate;if(t.lanes===0&&(p===null||p.lanes===0)&&(p=n.lastRenderedReducer,p!==null))try{var S=n.lastRenderedState,C=p(S,s);if(f.hasEagerState=!0,f.eagerState=C,wi(C,S))return kl(t,n,f,0),rn===null&&Vl(),!1}catch{}finally{}if(s=qu(t,n,f,l),s!==null)return bi(s,t,l),M0(s,n,l),!0}return!1}function Lf(t,n,s,l){if(l={lane:2,revertLane:cd(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},cc(t)){if(n)throw Error(r(479))}else n=qu(t,s,l,2),n!==null&&bi(n,t,2)}function cc(t){var n=t.alternate;return t===mt||n!==null&&n===mt}function S0(t,n){Or=nc=!0;var s=t.pending;s===null?n.next=n:(n.next=s.next,s.next=n),t.pending=n}function M0(t,n,s){if((s&4194048)!==0){var l=n.lanes;l&=t.pendingLanes,s|=l,n.lanes=s,kn(t,s)}}var jo={readContext:Qn,use:sc,useCallback:En,useContext:En,useEffect:En,useImperativeHandle:En,useLayoutEffect:En,useInsertionEffect:En,useMemo:En,useReducer:En,useRef:En,useState:En,useDebugValue:En,useDeferredValue:En,useTransition:En,useSyncExternalStore:En,useId:En,useHostTransitionStatus:En,useFormState:En,useActionState:En,useOptimistic:En,useMemoCache:En,useCacheRefresh:En};jo.useEffectEvent=En;var y0={readContext:Qn,use:sc,useCallback:function(t,n){return fi().memoizedState=[t,n===void 0?null:n],t},useContext:Qn,useEffect:s0,useImperativeHandle:function(t,n,s){s=s!=null?s.concat([t]):null,oc(4194308,4,c0.bind(null,n,t),s)},useLayoutEffect:function(t,n){return oc(4194308,4,t,n)},useInsertionEffect:function(t,n){oc(4,2,t,n)},useMemo:function(t,n){var s=fi();n=n===void 0?null:n;var l=t();if($s){we(!0);try{t()}finally{we(!1)}}return s.memoizedState=[l,n],l},useReducer:function(t,n,s){var l=fi();if(s!==void 0){var f=s(n);if($s){we(!0);try{s(n)}finally{we(!1)}}}else f=n;return l.memoizedState=l.baseState=f,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:f},l.queue=t,t=t.dispatch=eM.bind(null,mt,t),[l.memoizedState,t]},useRef:function(t){var n=fi();return t={current:t},n.memoizedState=t},useState:function(t){t=bf(t);var n=t.queue,s=x0.bind(null,mt,n);return n.dispatch=s,[t.memoizedState,s]},useDebugValue:Rf,useDeferredValue:function(t,n){var s=fi();return Cf(s,t,n)},useTransition:function(){var t=bf(!1);return t=p0.bind(null,mt,t.queue,!0,!1),fi().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,s){var l=mt,f=fi();if(wt){if(s===void 0)throw Error(r(407));s=s()}else{if(s=n(),rn===null)throw Error(r(349));(Tt&127)!==0||km(l,n,s)}f.memoizedState=s;var p={value:s,getSnapshot:n};return f.queue=p,s0(Wm.bind(null,l,p,t),[t]),l.flags|=2048,Ir(9,{destroy:void 0},Xm.bind(null,l,p,s,n),null),s},useId:function(){var t=fi(),n=rn.identifierPrefix;if(wt){var s=ma,l=pa;s=(l&~(1<<32-ze(l)-1)).toString(32)+s,n="_"+n+"R_"+s,s=ic++,0<s&&(n+="H"+s.toString(32)),n+="_"}else s=qS++,n="_"+n+"r_"+s.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:Df,useFormState:e0,useActionState:e0,useOptimistic:function(t){var n=fi();n.memoizedState=n.baseState=t;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=s,n=Lf.bind(null,mt,!0,s),s.dispatch=n,[t,n]},useMemoCache:Mf,useCacheRefresh:function(){return fi().memoizedState=$S.bind(null,mt)},useEffectEvent:function(t){var n=fi(),s={impl:t};return n.memoizedState=s,function(){if((Wt&2)!==0)throw Error(r(440));return s.impl.apply(void 0,arguments)}}},Nf={readContext:Qn,use:sc,useCallback:f0,useContext:Qn,useEffect:Af,useImperativeHandle:u0,useInsertionEffect:o0,useLayoutEffect:l0,useMemo:d0,useReducer:rc,useRef:a0,useState:function(){return rc(Ia)},useDebugValue:Rf,useDeferredValue:function(t,n){var s=wn();return h0(s,en.memoizedState,t,n)},useTransition:function(){var t=rc(Ia)[0],n=wn().memoizedState;return[typeof t=="boolean"?t:Yo(t),n]},useSyncExternalStore:Vm,useId:_0,useHostTransitionStatus:Df,useFormState:t0,useActionState:t0,useOptimistic:function(t,n){var s=wn();return jm(s,en,t,n)},useMemoCache:Mf,useCacheRefresh:v0};Nf.useEffectEvent=r0;var E0={readContext:Qn,use:sc,useCallback:f0,useContext:Qn,useEffect:Af,useImperativeHandle:u0,useInsertionEffect:o0,useLayoutEffect:l0,useMemo:d0,useReducer:Ef,useRef:a0,useState:function(){return Ef(Ia)},useDebugValue:Rf,useDeferredValue:function(t,n){var s=wn();return en===null?Cf(s,t,n):h0(s,en.memoizedState,t,n)},useTransition:function(){var t=Ef(Ia)[0],n=wn().memoizedState;return[typeof t=="boolean"?t:Yo(t),n]},useSyncExternalStore:Vm,useId:_0,useHostTransitionStatus:Df,useFormState:i0,useActionState:i0,useOptimistic:function(t,n){var s=wn();return en!==null?jm(s,en,t,n):(s.baseState=t,[t,s.queue.dispatch])},useMemoCache:Mf,useCacheRefresh:v0};E0.useEffectEvent=r0;function Uf(t,n,s,l){n=t.memoizedState,s=s(l,n),s=s==null?n:_({},n,s),t.memoizedState=s,t.lanes===0&&(t.updateQueue.baseState=s)}var Of={enqueueSetState:function(t,n,s){t=t._reactInternals;var l=Pi(),f=hs(l);f.payload=n,s!=null&&(f.callback=s),n=ps(t,f,l),n!==null&&(bi(n,t,l),Vo(n,t,l))},enqueueReplaceState:function(t,n,s){t=t._reactInternals;var l=Pi(),f=hs(l);f.tag=1,f.payload=n,s!=null&&(f.callback=s),n=ps(t,f,l),n!==null&&(bi(n,t,l),Vo(n,t,l))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var s=Pi(),l=hs(s);l.tag=2,n!=null&&(l.callback=n),n=ps(t,l,s),n!==null&&(bi(n,t,s),Vo(n,t,s))}};function b0(t,n,s,l,f,p,S){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,p,S):n.prototype&&n.prototype.isPureReactComponent?!Oo(s,l)||!Oo(f,p):!0}function T0(t,n,s,l){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(s,l),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(s,l),n.state!==t&&Of.enqueueReplaceState(n,n.state,null)}function er(t,n){var s=n;if("ref"in n){s={};for(var l in n)l!=="ref"&&(s[l]=n[l])}if(t=t.defaultProps){s===n&&(s=_({},s));for(var f in t)s[f]===void 0&&(s[f]=t[f])}return s}function A0(t){Gl(t)}function R0(t){console.error(t)}function C0(t){Gl(t)}function uc(t,n){try{var s=t.onUncaughtError;s(n.value,{componentStack:n.stack})}catch(l){setTimeout(function(){throw l})}}function w0(t,n,s){try{var l=t.onCaughtError;l(s.value,{componentStack:s.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function Pf(t,n,s){return s=hs(s),s.tag=3,s.payload={element:null},s.callback=function(){uc(t,n)},s}function D0(t){return t=hs(t),t.tag=3,t}function L0(t,n,s,l){var f=s.type.getDerivedStateFromError;if(typeof f=="function"){var p=l.value;t.payload=function(){return f(p)},t.callback=function(){w0(n,s,l)}}var S=s.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(t.callback=function(){w0(n,s,l),typeof f!="function"&&(Ss===null?Ss=new Set([this]):Ss.add(this));var C=l.stack;this.componentDidCatch(l.value,{componentStack:C!==null?C:""})})}function tM(t,n,s,l,f){if(s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(n=s.alternate,n!==null&&Cr(n,s,f,!0),s=Li.current,s!==null){switch(s.tag){case 31:case 13:return Wi===null?yc():s.alternate===null&&bn===0&&(bn=3),s.flags&=-257,s.flags|=65536,s.lanes=f,l===Ql?s.flags|=16384:(n=s.updateQueue,n===null?s.updateQueue=new Set([l]):n.add(l),rd(t,l,f)),!1;case 22:return s.flags|=65536,l===Ql?s.flags|=16384:(n=s.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([l])},s.updateQueue=n):(s=n.retryQueue,s===null?n.retryQueue=new Set([l]):s.add(l)),rd(t,l,f)),!1}throw Error(r(435,s.tag))}return rd(t,l,f),yc(),!1}if(wt)return n=Li.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=f,l!==$u&&(t=Error(r(422),{cause:l}),Fo(Gi(t,s)))):(l!==$u&&(n=Error(r(423),{cause:l}),Fo(Gi(n,s))),t=t.current.alternate,t.flags|=65536,f&=-f,t.lanes|=f,l=Gi(l,s),f=Pf(t.stateNode,l,f),ff(t,f),bn!==4&&(bn=2)),!1;var p=Error(r(520),{cause:l});if(p=Gi(p,s),nl===null?nl=[p]:nl.push(p),bn!==4&&(bn=2),n===null)return!0;l=Gi(l,s),s=n;do{switch(s.tag){case 3:return s.flags|=65536,t=f&-f,s.lanes|=t,t=Pf(s.stateNode,l,t),ff(s,t),!1;case 1:if(n=s.type,p=s.stateNode,(s.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Ss===null||!Ss.has(p))))return s.flags|=65536,f&=-f,s.lanes|=f,f=D0(f),L0(f,t,s,l),ff(s,f),!1}s=s.return}while(s!==null);return!1}var If=Error(r(461)),Pn=!1;function Jn(t,n,s,l){n.child=t===null?Pm(n,null,s,l):Js(n,t.child,s,l)}function N0(t,n,s,l,f){s=s.render;var p=n.ref;if("ref"in l){var S={};for(var C in l)C!=="ref"&&(S[C]=l[C])}else S=l;return js(n),l=_f(t,n,s,S,p,f),C=vf(),t!==null&&!Pn?(xf(t,n,f),Fa(t,n,f)):(wt&&C&&Qu(n),n.flags|=1,Jn(t,n,l,f),n.child)}function U0(t,n,s,l,f){if(t===null){var p=s.type;return typeof p=="function"&&!ju(p)&&p.defaultProps===void 0&&s.compare===null?(n.tag=15,n.type=p,O0(t,n,p,l,f)):(t=Wl(s.type,null,l,n,n.mode,f),t.ref=n.ref,t.return=n,n.child=t)}if(p=t.child,!Xf(t,f)){var S=p.memoizedProps;if(s=s.compare,s=s!==null?s:Oo,s(S,l)&&t.ref===n.ref)return Fa(t,n,f)}return n.flags|=1,t=La(p,l),t.ref=n.ref,t.return=n,n.child=t}function O0(t,n,s,l,f){if(t!==null){var p=t.memoizedProps;if(Oo(p,l)&&t.ref===n.ref)if(Pn=!1,n.pendingProps=l=p,Xf(t,f))(t.flags&131072)!==0&&(Pn=!0);else return n.lanes=t.lanes,Fa(t,n,f)}return Ff(t,n,s,l,f)}function P0(t,n,s,l){var f=l.children,p=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((n.flags&128)!==0){if(p=p!==null?p.baseLanes|s:s,t!==null){for(l=n.child=t.child,f=0;l!==null;)f=f|l.lanes|l.childLanes,l=l.sibling;l=f&~p}else l=0,n.child=null;return I0(t,n,p,s,l)}if((s&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Zl(n,p!==null?p.cachePool:null),p!==null?Bm(n,p):hf(),zm(n);else return l=n.lanes=536870912,I0(t,n,p!==null?p.baseLanes|s:s,s,l)}else p!==null?(Zl(n,p.cachePool),Bm(n,p),gs(),n.memoizedState=null):(t!==null&&Zl(n,null),hf(),gs());return Jn(t,n,f,s),n.child}function Zo(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function I0(t,n,s,l,f){var p=of();return p=p===null?null:{parent:Un._currentValue,pool:p},n.memoizedState={baseLanes:s,cachePool:p},t!==null&&Zl(n,null),hf(),zm(n),t!==null&&Cr(t,n,l,!0),n.childLanes=f,null}function fc(t,n){return n=hc({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function F0(t,n,s){return Js(n,t.child,null,s),t=fc(n,n.pendingProps),t.flags|=2,Ni(n),n.memoizedState=null,t}function nM(t,n,s){var l=n.pendingProps,f=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(wt){if(l.mode==="hidden")return t=fc(n,l),n.lanes=536870912,Zo(null,t);if(mf(n),(t=hn)?(t=Zg(t,Xi),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:ls!==null?{id:pa,overflow:ma}:null,retryLane:536870912,hydrationErrors:null},s=Sm(t),s.return=n,n.child=s,Kn=n,hn=null)):t=null,t===null)throw us(n);return n.lanes=536870912,null}return fc(n,l)}var p=t.memoizedState;if(p!==null){var S=p.dehydrated;if(mf(n),f)if(n.flags&256)n.flags&=-257,n=F0(t,n,s);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(r(558));else if(Pn||Cr(t,n,s,!1),f=(s&t.childLanes)!==0,Pn||f){if(l=rn,l!==null&&(S=ni(l,s),S!==0&&S!==p.retryLane))throw p.retryLane=S,Xs(t,S),bi(l,t,S),If;yc(),n=F0(t,n,s)}else t=p.treeContext,hn=Yi(S.nextSibling),Kn=n,wt=!0,cs=null,Xi=!1,t!==null&&Em(n,t),n=fc(n,l),n.flags|=4096;return n}return t=La(t.child,{mode:l.mode,children:l.children}),t.ref=n.ref,n.child=t,t.return=n,t}function dc(t,n){var s=n.ref;if(s===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(r(284));(t===null||t.ref!==s)&&(n.flags|=4194816)}}function Ff(t,n,s,l,f){return js(n),s=_f(t,n,s,l,void 0,f),l=vf(),t!==null&&!Pn?(xf(t,n,f),Fa(t,n,f)):(wt&&l&&Qu(n),n.flags|=1,Jn(t,n,s,f),n.child)}function B0(t,n,s,l,f,p){return js(n),n.updateQueue=null,s=Gm(n,l,s,f),Hm(t),l=vf(),t!==null&&!Pn?(xf(t,n,p),Fa(t,n,p)):(wt&&l&&Qu(n),n.flags|=1,Jn(t,n,s,p),n.child)}function z0(t,n,s,l,f){if(js(n),n.stateNode===null){var p=br,S=s.contextType;typeof S=="object"&&S!==null&&(p=Qn(S)),p=new s(l,p),n.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,p.updater=Of,n.stateNode=p,p._reactInternals=n,p=n.stateNode,p.props=l,p.state=n.memoizedState,p.refs={},cf(n),S=s.contextType,p.context=typeof S=="object"&&S!==null?Qn(S):br,p.state=n.memoizedState,S=s.getDerivedStateFromProps,typeof S=="function"&&(Uf(n,s,S,l),p.state=n.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(S=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),S!==p.state&&Of.enqueueReplaceState(p,p.state,null),Xo(n,l,p,f),ko(),p.state=n.memoizedState),typeof p.componentDidMount=="function"&&(n.flags|=4194308),l=!0}else if(t===null){p=n.stateNode;var C=n.memoizedProps,G=er(s,C);p.props=G;var oe=p.context,ge=s.contextType;S=br,typeof ge=="object"&&ge!==null&&(S=Qn(ge));var Me=s.getDerivedStateFromProps;ge=typeof Me=="function"||typeof p.getSnapshotBeforeUpdate=="function",C=n.pendingProps!==C,ge||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(C||oe!==S)&&T0(n,p,l,S),ds=!1;var le=n.memoizedState;p.state=le,Xo(n,l,p,f),ko(),oe=n.memoizedState,C||le!==oe||ds?(typeof Me=="function"&&(Uf(n,s,Me,l),oe=n.memoizedState),(G=ds||b0(n,s,G,l,le,oe,S))?(ge||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount()),typeof p.componentDidMount=="function"&&(n.flags|=4194308)):(typeof p.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=l,n.memoizedState=oe),p.props=l,p.state=oe,p.context=S,l=G):(typeof p.componentDidMount=="function"&&(n.flags|=4194308),l=!1)}else{p=n.stateNode,uf(t,n),S=n.memoizedProps,ge=er(s,S),p.props=ge,Me=n.pendingProps,le=p.context,oe=s.contextType,G=br,typeof oe=="object"&&oe!==null&&(G=Qn(oe)),C=s.getDerivedStateFromProps,(oe=typeof C=="function"||typeof p.getSnapshotBeforeUpdate=="function")||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(S!==Me||le!==G)&&T0(n,p,l,G),ds=!1,le=n.memoizedState,p.state=le,Xo(n,l,p,f),ko();var fe=n.memoizedState;S!==Me||le!==fe||ds||t!==null&&t.dependencies!==null&&ql(t.dependencies)?(typeof C=="function"&&(Uf(n,s,C,l),fe=n.memoizedState),(ge=ds||b0(n,s,ge,l,le,fe,G)||t!==null&&t.dependencies!==null&&ql(t.dependencies))?(oe||typeof p.UNSAFE_componentWillUpdate!="function"&&typeof p.componentWillUpdate!="function"||(typeof p.componentWillUpdate=="function"&&p.componentWillUpdate(l,fe,G),typeof p.UNSAFE_componentWillUpdate=="function"&&p.UNSAFE_componentWillUpdate(l,fe,G)),typeof p.componentDidUpdate=="function"&&(n.flags|=4),typeof p.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof p.componentDidUpdate!="function"||S===t.memoizedProps&&le===t.memoizedState||(n.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||S===t.memoizedProps&&le===t.memoizedState||(n.flags|=1024),n.memoizedProps=l,n.memoizedState=fe),p.props=l,p.state=fe,p.context=G,l=ge):(typeof p.componentDidUpdate!="function"||S===t.memoizedProps&&le===t.memoizedState||(n.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||S===t.memoizedProps&&le===t.memoizedState||(n.flags|=1024),l=!1)}return p=l,dc(t,n),l=(n.flags&128)!==0,p||l?(p=n.stateNode,s=l&&typeof s.getDerivedStateFromError!="function"?null:p.render(),n.flags|=1,t!==null&&l?(n.child=Js(n,t.child,null,f),n.child=Js(n,null,s,f)):Jn(t,n,s,f),n.memoizedState=p.state,t=n.child):t=Fa(t,n,f),t}function H0(t,n,s,l){return Ys(),n.flags|=256,Jn(t,n,s,l),n.child}var Bf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function zf(t){return{baseLanes:t,cachePool:wm()}}function Hf(t,n,s){return t=t!==null?t.childLanes&~s:0,n&&(t|=Oi),t}function G0(t,n,s){var l=n.pendingProps,f=!1,p=(n.flags&128)!==0,S;if((S=p)||(S=t!==null&&t.memoizedState===null?!1:(Cn.current&2)!==0),S&&(f=!0,n.flags&=-129),S=(n.flags&32)!==0,n.flags&=-33,t===null){if(wt){if(f?ms(n):gs(),(t=hn)?(t=Zg(t,Xi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:ls!==null?{id:pa,overflow:ma}:null,retryLane:536870912,hydrationErrors:null},s=Sm(t),s.return=n,n.child=s,Kn=n,hn=null)):t=null,t===null)throw us(n);return yd(t)?n.lanes=32:n.lanes=536870912,null}var C=l.children;return l=l.fallback,f?(gs(),f=n.mode,C=hc({mode:"hidden",children:C},f),l=Ws(l,f,s,null),C.return=n,l.return=n,C.sibling=l,n.child=C,l=n.child,l.memoizedState=zf(s),l.childLanes=Hf(t,S,s),n.memoizedState=Bf,Zo(null,l)):(ms(n),Gf(n,C))}var G=t.memoizedState;if(G!==null&&(C=G.dehydrated,C!==null)){if(p)n.flags&256?(ms(n),n.flags&=-257,n=Vf(t,n,s)):n.memoizedState!==null?(gs(),n.child=t.child,n.flags|=128,n=null):(gs(),C=l.fallback,f=n.mode,l=hc({mode:"visible",children:l.children},f),C=Ws(C,f,s,null),C.flags|=2,l.return=n,C.return=n,l.sibling=C,n.child=l,Js(n,t.child,null,s),l=n.child,l.memoizedState=zf(s),l.childLanes=Hf(t,S,s),n.memoizedState=Bf,n=Zo(null,l));else if(ms(n),yd(C)){if(S=C.nextSibling&&C.nextSibling.dataset,S)var oe=S.dgst;S=oe,l=Error(r(419)),l.stack="",l.digest=S,Fo({value:l,source:null,stack:null}),n=Vf(t,n,s)}else if(Pn||Cr(t,n,s,!1),S=(s&t.childLanes)!==0,Pn||S){if(S=rn,S!==null&&(l=ni(S,s),l!==0&&l!==G.retryLane))throw G.retryLane=l,Xs(t,l),bi(S,t,l),If;Md(C)||yc(),n=Vf(t,n,s)}else Md(C)?(n.flags|=192,n.child=t.child,n=null):(t=G.treeContext,hn=Yi(C.nextSibling),Kn=n,wt=!0,cs=null,Xi=!1,t!==null&&Em(n,t),n=Gf(n,l.children),n.flags|=4096);return n}return f?(gs(),C=l.fallback,f=n.mode,G=t.child,oe=G.sibling,l=La(G,{mode:"hidden",children:l.children}),l.subtreeFlags=G.subtreeFlags&65011712,oe!==null?C=La(oe,C):(C=Ws(C,f,s,null),C.flags|=2),C.return=n,l.return=n,l.sibling=C,n.child=l,Zo(null,l),l=n.child,C=t.child.memoizedState,C===null?C=zf(s):(f=C.cachePool,f!==null?(G=Un._currentValue,f=f.parent!==G?{parent:G,pool:G}:f):f=wm(),C={baseLanes:C.baseLanes|s,cachePool:f}),l.memoizedState=C,l.childLanes=Hf(t,S,s),n.memoizedState=Bf,Zo(t.child,l)):(ms(n),s=t.child,t=s.sibling,s=La(s,{mode:"visible",children:l.children}),s.return=n,s.sibling=null,t!==null&&(S=n.deletions,S===null?(n.deletions=[t],n.flags|=16):S.push(t)),n.child=s,n.memoizedState=null,s)}function Gf(t,n){return n=hc({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function hc(t,n){return t=Di(22,t,null,n),t.lanes=0,t}function Vf(t,n,s){return Js(n,t.child,null,s),t=Gf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function V0(t,n,s){t.lanes|=n;var l=t.alternate;l!==null&&(l.lanes|=n),nf(t.return,n,s)}function kf(t,n,s,l,f,p){var S=t.memoizedState;S===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:l,tail:s,tailMode:f,treeForkCount:p}:(S.isBackwards=n,S.rendering=null,S.renderingStartTime=0,S.last=l,S.tail=s,S.tailMode=f,S.treeForkCount=p)}function k0(t,n,s){var l=n.pendingProps,f=l.revealOrder,p=l.tail;l=l.children;var S=Cn.current,C=(S&2)!==0;if(C?(S=S&1|2,n.flags|=128):S&=1,Se(Cn,S),Jn(t,n,l,s),l=wt?Io:0,!C&&t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&V0(t,s,n);else if(t.tag===19)V0(t,s,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(f){case"forwards":for(s=n.child,f=null;s!==null;)t=s.alternate,t!==null&&tc(t)===null&&(f=s),s=s.sibling;s=f,s===null?(f=n.child,n.child=null):(f=s.sibling,s.sibling=null),kf(n,!1,f,s,p,l);break;case"backwards":case"unstable_legacy-backwards":for(s=null,f=n.child,n.child=null;f!==null;){if(t=f.alternate,t!==null&&tc(t)===null){n.child=f;break}t=f.sibling,f.sibling=s,s=f,f=t}kf(n,!0,s,null,p,l);break;case"together":kf(n,!1,null,null,void 0,l);break;default:n.memoizedState=null}return n.child}function Fa(t,n,s){if(t!==null&&(n.dependencies=t.dependencies),xs|=n.lanes,(s&n.childLanes)===0)if(t!==null){if(Cr(t,n,s,!1),(s&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,s=La(t,t.pendingProps),n.child=s,s.return=n;t.sibling!==null;)t=t.sibling,s=s.sibling=La(t,t.pendingProps),s.return=n;s.sibling=null}return n.child}function Xf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&ql(t)))}function iM(t,n,s){switch(n.tag){case 3:be(n,n.stateNode.containerInfo),fs(n,Un,t.memoizedState.cache),Ys();break;case 27:case 5:at(n);break;case 4:be(n,n.stateNode.containerInfo);break;case 10:fs(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,mf(n),null;break;case 13:var l=n.memoizedState;if(l!==null)return l.dehydrated!==null?(ms(n),n.flags|=128,null):(s&n.child.childLanes)!==0?G0(t,n,s):(ms(n),t=Fa(t,n,s),t!==null?t.sibling:null);ms(n);break;case 19:var f=(t.flags&128)!==0;if(l=(s&n.childLanes)!==0,l||(Cr(t,n,s,!1),l=(s&n.childLanes)!==0),f){if(l)return k0(t,n,s);n.flags|=128}if(f=n.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),Se(Cn,Cn.current),l)break;return null;case 22:return n.lanes=0,P0(t,n,s,n.pendingProps);case 24:fs(n,Un,t.memoizedState.cache)}return Fa(t,n,s)}function X0(t,n,s){if(t!==null)if(t.memoizedProps!==n.pendingProps)Pn=!0;else{if(!Xf(t,s)&&(n.flags&128)===0)return Pn=!1,iM(t,n,s);Pn=(t.flags&131072)!==0}else Pn=!1,wt&&(n.flags&1048576)!==0&&ym(n,Io,n.index);switch(n.lanes=0,n.tag){case 16:e:{var l=n.pendingProps;if(t=Ks(n.elementType),n.type=t,typeof t=="function")ju(t)?(l=er(t,l),n.tag=1,n=z0(null,n,t,l,s)):(n.tag=0,n=Ff(null,n,t,l,s));else{if(t!=null){var f=t.$$typeof;if(f===R){n.tag=11,n=N0(null,n,t,l,s);break e}else if(f===B){n.tag=14,n=U0(null,n,t,l,s);break e}}throw n=ue(t)||t,Error(r(306,n,""))}}return n;case 0:return Ff(t,n,n.type,n.pendingProps,s);case 1:return l=n.type,f=er(l,n.pendingProps),z0(t,n,l,f,s);case 3:e:{if(be(n,n.stateNode.containerInfo),t===null)throw Error(r(387));l=n.pendingProps;var p=n.memoizedState;f=p.element,uf(t,n),Xo(n,l,null,s);var S=n.memoizedState;if(l=S.cache,fs(n,Un,l),l!==p.cache&&af(n,[Un],s,!0),ko(),l=S.element,p.isDehydrated)if(p={element:l,isDehydrated:!1,cache:S.cache},n.updateQueue.baseState=p,n.memoizedState=p,n.flags&256){n=H0(t,n,l,s);break e}else if(l!==f){f=Gi(Error(r(424)),n),Fo(f),n=H0(t,n,l,s);break e}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(hn=Yi(t.firstChild),Kn=n,wt=!0,cs=null,Xi=!0,s=Pm(n,null,l,s),n.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling}else{if(Ys(),l===f){n=Fa(t,n,s);break e}Jn(t,n,l,s)}n=n.child}return n;case 26:return dc(t,n),t===null?(s=t_(n.type,null,n.pendingProps,null))?n.memoizedState=s:wt||(s=n.type,t=n.pendingProps,l=wc(ie.current).createElement(s),l[Sn]=n,l[Mn]=t,$n(l,s,t),Yt(l),n.stateNode=l):n.memoizedState=t_(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return at(n),t===null&&wt&&(l=n.stateNode=Jg(n.type,n.pendingProps,ie.current),Kn=n,Xi=!0,f=hn,bs(n.type)?(Ed=f,hn=Yi(l.firstChild)):hn=f),Jn(t,n,n.pendingProps.children,s),dc(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&wt&&((f=l=hn)&&(l=UM(l,n.type,n.pendingProps,Xi),l!==null?(n.stateNode=l,Kn=n,hn=Yi(l.firstChild),Xi=!1,f=!0):f=!1),f||us(n)),at(n),f=n.type,p=n.pendingProps,S=t!==null?t.memoizedProps:null,l=p.children,vd(f,p)?l=null:S!==null&&vd(f,S)&&(n.flags|=32),n.memoizedState!==null&&(f=_f(t,n,jS,null,null,s),ul._currentValue=f),dc(t,n),Jn(t,n,l,s),n.child;case 6:return t===null&&wt&&((t=s=hn)&&(s=OM(s,n.pendingProps,Xi),s!==null?(n.stateNode=s,Kn=n,hn=null,t=!0):t=!1),t||us(n)),null;case 13:return G0(t,n,s);case 4:return be(n,n.stateNode.containerInfo),l=n.pendingProps,t===null?n.child=Js(n,null,l,s):Jn(t,n,l,s),n.child;case 11:return N0(t,n,n.type,n.pendingProps,s);case 7:return Jn(t,n,n.pendingProps,s),n.child;case 8:return Jn(t,n,n.pendingProps.children,s),n.child;case 12:return Jn(t,n,n.pendingProps.children,s),n.child;case 10:return l=n.pendingProps,fs(n,n.type,l.value),Jn(t,n,l.children,s),n.child;case 9:return f=n.type._context,l=n.pendingProps.children,js(n),f=Qn(f),l=l(f),n.flags|=1,Jn(t,n,l,s),n.child;case 14:return U0(t,n,n.type,n.pendingProps,s);case 15:return O0(t,n,n.type,n.pendingProps,s);case 19:return k0(t,n,s);case 31:return nM(t,n,s);case 22:return P0(t,n,s,n.pendingProps);case 24:return js(n),l=Qn(Un),t===null?(f=of(),f===null&&(f=rn,p=sf(),f.pooledCache=p,p.refCount++,p!==null&&(f.pooledCacheLanes|=s),f=p),n.memoizedState={parent:l,cache:f},cf(n),fs(n,Un,f)):((t.lanes&s)!==0&&(uf(t,n),Xo(n,null,null,s),ko()),f=t.memoizedState,p=n.memoizedState,f.parent!==l?(f={parent:l,cache:l},n.memoizedState=f,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=f),fs(n,Un,l)):(l=p.cache,fs(n,Un,l),l!==f.cache&&af(n,[Un],s,!0))),Jn(t,n,n.pendingProps.children,s),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function Ba(t){t.flags|=4}function Wf(t,n,s,l,f){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(f&335544128)===f)if(t.stateNode.complete)t.flags|=8192;else if(_g())t.flags|=8192;else throw Qs=Ql,lf}else t.flags&=-16777217}function W0(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!r_(n))if(_g())t.flags|=8192;else throw Qs=Ql,lf}function pc(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Ee():536870912,t.lanes|=n,Hr|=n)}function Ko(t,n){if(!wt)switch(t.tailMode){case"hidden":n=t.tail;for(var s=null;n!==null;)n.alternate!==null&&(s=n),n=n.sibling;s===null?t.tail=null:s.sibling=null;break;case"collapsed":s=t.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function pn(t){var n=t.alternate!==null&&t.alternate.child===t.child,s=0,l=0;if(n)for(var f=t.child;f!==null;)s|=f.lanes|f.childLanes,l|=f.subtreeFlags&65011712,l|=f.flags&65011712,f.return=t,f=f.sibling;else for(f=t.child;f!==null;)s|=f.lanes|f.childLanes,l|=f.subtreeFlags,l|=f.flags,f.return=t,f=f.sibling;return t.subtreeFlags|=l,t.childLanes=s,n}function aM(t,n,s){var l=n.pendingProps;switch(Ju(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return pn(n),null;case 1:return pn(n),null;case 3:return s=n.stateNode,l=null,t!==null&&(l=t.memoizedState.cache),n.memoizedState.cache!==l&&(n.flags|=2048),Oa(Un),He(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(t===null||t.child===null)&&(Rr(n)?Ba(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,ef())),pn(n),null;case 26:var f=n.type,p=n.memoizedState;return t===null?(Ba(n),p!==null?(pn(n),W0(n,p)):(pn(n),Wf(n,f,null,l,s))):p?p!==t.memoizedState?(Ba(n),pn(n),W0(n,p)):(pn(n),n.flags&=-16777217):(t=t.memoizedProps,t!==l&&Ba(n),pn(n),Wf(n,f,t,l,s)),null;case 27:if(et(n),s=ie.current,f=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==l&&Ba(n);else{if(!l){if(n.stateNode===null)throw Error(r(166));return pn(n),null}t=Te.current,Rr(n)?bm(n):(t=Jg(f,l,s),n.stateNode=t,Ba(n))}return pn(n),null;case 5:if(et(n),f=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==l&&Ba(n);else{if(!l){if(n.stateNode===null)throw Error(r(166));return pn(n),null}if(p=Te.current,Rr(n))bm(n);else{var S=wc(ie.current);switch(p){case 1:p=S.createElementNS("http://www.w3.org/2000/svg",f);break;case 2:p=S.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;default:switch(f){case"svg":p=S.createElementNS("http://www.w3.org/2000/svg",f);break;case"math":p=S.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;case"script":p=S.createElement("div"),p.innerHTML="<script><\/script>",p=p.removeChild(p.firstChild);break;case"select":p=typeof l.is=="string"?S.createElement("select",{is:l.is}):S.createElement("select"),l.multiple?p.multiple=!0:l.size&&(p.size=l.size);break;default:p=typeof l.is=="string"?S.createElement(f,{is:l.is}):S.createElement(f)}}p[Sn]=n,p[Mn]=l;e:for(S=n.child;S!==null;){if(S.tag===5||S.tag===6)p.appendChild(S.stateNode);else if(S.tag!==4&&S.tag!==27&&S.child!==null){S.child.return=S,S=S.child;continue}if(S===n)break e;for(;S.sibling===null;){if(S.return===null||S.return===n)break e;S=S.return}S.sibling.return=S.return,S=S.sibling}n.stateNode=p;e:switch($n(p,f,l),f){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&Ba(n)}}return pn(n),Wf(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,s),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==l&&Ba(n);else{if(typeof l!="string"&&n.stateNode===null)throw Error(r(166));if(t=ie.current,Rr(n)){if(t=n.stateNode,s=n.memoizedProps,l=null,f=Kn,f!==null)switch(f.tag){case 27:case 5:l=f.memoizedProps}t[Sn]=n,t=!!(t.nodeValue===s||l!==null&&l.suppressHydrationWarning===!0||Gg(t.nodeValue,s)),t||us(n,!0)}else t=wc(t).createTextNode(l),t[Sn]=n,n.stateNode=t}return pn(n),null;case 31:if(s=n.memoizedState,t===null||t.memoizedState!==null){if(l=Rr(n),s!==null){if(t===null){if(!l)throw Error(r(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[Sn]=n}else Ys(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;pn(n),t=!1}else s=ef(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=s),t=!0;if(!t)return n.flags&256?(Ni(n),n):(Ni(n),null);if((n.flags&128)!==0)throw Error(r(558))}return pn(n),null;case 13:if(l=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(f=Rr(n),l!==null&&l.dehydrated!==null){if(t===null){if(!f)throw Error(r(318));if(f=n.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(r(317));f[Sn]=n}else Ys(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;pn(n),f=!1}else f=ef(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=f),f=!0;if(!f)return n.flags&256?(Ni(n),n):(Ni(n),null)}return Ni(n),(n.flags&128)!==0?(n.lanes=s,n):(s=l!==null,t=t!==null&&t.memoizedState!==null,s&&(l=n.child,f=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(f=l.alternate.memoizedState.cachePool.pool),p=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(p=l.memoizedState.cachePool.pool),p!==f&&(l.flags|=2048)),s!==t&&s&&(n.child.flags|=8192),pc(n,n.updateQueue),pn(n),null);case 4:return He(),t===null&&hd(n.stateNode.containerInfo),pn(n),null;case 10:return Oa(n.type),pn(n),null;case 19:if(K(Cn),l=n.memoizedState,l===null)return pn(n),null;if(f=(n.flags&128)!==0,p=l.rendering,p===null)if(f)Ko(l,!1);else{if(bn!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(p=tc(t),p!==null){for(n.flags|=128,Ko(l,!1),t=p.updateQueue,n.updateQueue=t,pc(n,t),n.subtreeFlags=0,t=s,s=n.child;s!==null;)xm(s,t),s=s.sibling;return Se(Cn,Cn.current&1|2),wt&&Na(n,l.treeForkCount),n.child}t=t.sibling}l.tail!==null&&Ht()>xc&&(n.flags|=128,f=!0,Ko(l,!1),n.lanes=4194304)}else{if(!f)if(t=tc(p),t!==null){if(n.flags|=128,f=!0,t=t.updateQueue,n.updateQueue=t,pc(n,t),Ko(l,!0),l.tail===null&&l.tailMode==="hidden"&&!p.alternate&&!wt)return pn(n),null}else 2*Ht()-l.renderingStartTime>xc&&s!==536870912&&(n.flags|=128,f=!0,Ko(l,!1),n.lanes=4194304);l.isBackwards?(p.sibling=n.child,n.child=p):(t=l.last,t!==null?t.sibling=p:n.child=p,l.last=p)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=Ht(),t.sibling=null,s=Cn.current,Se(Cn,f?s&1|2:s&1),wt&&Na(n,l.treeForkCount),t):(pn(n),null);case 22:case 23:return Ni(n),pf(),l=n.memoizedState!==null,t!==null?t.memoizedState!==null!==l&&(n.flags|=8192):l&&(n.flags|=8192),l?(s&536870912)!==0&&(n.flags&128)===0&&(pn(n),n.subtreeFlags&6&&(n.flags|=8192)):pn(n),s=n.updateQueue,s!==null&&pc(n,s.retryQueue),s=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),l=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(l=n.memoizedState.cachePool.pool),l!==s&&(n.flags|=2048),t!==null&&K(Zs),null;case 24:return s=null,t!==null&&(s=t.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),Oa(Un),pn(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function sM(t,n){switch(Ju(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Oa(Un),He(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return et(n),null;case 31:if(n.memoizedState!==null){if(Ni(n),n.alternate===null)throw Error(r(340));Ys()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(Ni(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));Ys()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return K(Cn),null;case 4:return He(),null;case 10:return Oa(n.type),null;case 22:case 23:return Ni(n),pf(),t!==null&&K(Zs),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Oa(Un),null;case 25:return null;default:return null}}function Y0(t,n){switch(Ju(n),n.tag){case 3:Oa(Un),He();break;case 26:case 27:case 5:et(n);break;case 4:He();break;case 31:n.memoizedState!==null&&Ni(n);break;case 13:Ni(n);break;case 19:K(Cn);break;case 10:Oa(n.type);break;case 22:case 23:Ni(n),pf(),t!==null&&K(Zs);break;case 24:Oa(Un)}}function Qo(t,n){try{var s=n.updateQueue,l=s!==null?s.lastEffect:null;if(l!==null){var f=l.next;s=f;do{if((s.tag&t)===t){l=void 0;var p=s.create,S=s.inst;l=p(),S.destroy=l}s=s.next}while(s!==f)}}catch(C){Zt(n,n.return,C)}}function _s(t,n,s){try{var l=n.updateQueue,f=l!==null?l.lastEffect:null;if(f!==null){var p=f.next;l=p;do{if((l.tag&t)===t){var S=l.inst,C=S.destroy;if(C!==void 0){S.destroy=void 0,f=n;var G=s,oe=C;try{oe()}catch(ge){Zt(f,G,ge)}}}l=l.next}while(l!==p)}}catch(ge){Zt(n,n.return,ge)}}function q0(t){var n=t.updateQueue;if(n!==null){var s=t.stateNode;try{Fm(n,s)}catch(l){Zt(t,t.return,l)}}}function j0(t,n,s){s.props=er(t.type,t.memoizedProps),s.state=t.memoizedState;try{s.componentWillUnmount()}catch(l){Zt(t,n,l)}}function Jo(t,n){try{var s=t.ref;if(s!==null){switch(t.tag){case 26:case 27:case 5:var l=t.stateNode;break;case 30:l=t.stateNode;break;default:l=t.stateNode}typeof s=="function"?t.refCleanup=s(l):s.current=l}}catch(f){Zt(t,n,f)}}function ga(t,n){var s=t.ref,l=t.refCleanup;if(s!==null)if(typeof l=="function")try{l()}catch(f){Zt(t,n,f)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(f){Zt(t,n,f)}else s.current=null}function Z0(t){var n=t.type,s=t.memoizedProps,l=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":s.autoFocus&&l.focus();break e;case"img":s.src?l.src=s.src:s.srcSet&&(l.srcset=s.srcSet)}}catch(f){Zt(t,t.return,f)}}function Yf(t,n,s){try{var l=t.stateNode;RM(l,t.type,s,n),l[Mn]=n}catch(f){Zt(t,t.return,f)}}function K0(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&bs(t.type)||t.tag===4}function qf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||K0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&bs(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function jf(t,n,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,n?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(t,n):(n=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,n.appendChild(t),s=s._reactRootContainer,s!=null||n.onclick!==null||(n.onclick=ta));else if(l!==4&&(l===27&&bs(t.type)&&(s=t.stateNode,n=null),t=t.child,t!==null))for(jf(t,n,s),t=t.sibling;t!==null;)jf(t,n,s),t=t.sibling}function mc(t,n,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,n?s.insertBefore(t,n):s.appendChild(t);else if(l!==4&&(l===27&&bs(t.type)&&(s=t.stateNode),t=t.child,t!==null))for(mc(t,n,s),t=t.sibling;t!==null;)mc(t,n,s),t=t.sibling}function Q0(t){var n=t.stateNode,s=t.memoizedProps;try{for(var l=t.type,f=n.attributes;f.length;)n.removeAttributeNode(f[0]);$n(n,l,s),n[Sn]=t,n[Mn]=s}catch(p){Zt(t,t.return,p)}}var za=!1,In=!1,Zf=!1,J0=typeof WeakSet=="function"?WeakSet:Set,Xn=null;function rM(t,n){if(t=t.containerInfo,gd=Ic,t=um(t),Gu(t)){if("selectionStart"in t)var s={start:t.selectionStart,end:t.selectionEnd};else e:{s=(s=t.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var f=l.anchorOffset,p=l.focusNode;l=l.focusOffset;try{s.nodeType,p.nodeType}catch{s=null;break e}var S=0,C=-1,G=-1,oe=0,ge=0,Me=t,le=null;t:for(;;){for(var fe;Me!==s||f!==0&&Me.nodeType!==3||(C=S+f),Me!==p||l!==0&&Me.nodeType!==3||(G=S+l),Me.nodeType===3&&(S+=Me.nodeValue.length),(fe=Me.firstChild)!==null;)le=Me,Me=fe;for(;;){if(Me===t)break t;if(le===s&&++oe===f&&(C=S),le===p&&++ge===l&&(G=S),(fe=Me.nextSibling)!==null)break;Me=le,le=Me.parentNode}Me=fe}s=C===-1||G===-1?null:{start:C,end:G}}else s=null}s=s||{start:0,end:0}}else s=null;for(_d={focusedElem:t,selectionRange:s},Ic=!1,Xn=n;Xn!==null;)if(n=Xn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,Xn=t;else for(;Xn!==null;){switch(n=Xn,p=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(s=0;s<t.length;s++)f=t[s],f.ref.impl=f.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&p!==null){t=void 0,s=n,f=p.memoizedProps,p=p.memoizedState,l=s.stateNode;try{var je=er(s.type,f);t=l.getSnapshotBeforeUpdate(je,p),l.__reactInternalSnapshotBeforeUpdate=t}catch(st){Zt(s,s.return,st)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,s=t.nodeType,s===9)Sd(t);else if(s===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Sd(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,Xn=t;break}Xn=n.return}}function $0(t,n,s){var l=s.flags;switch(s.tag){case 0:case 11:case 15:Ga(t,s),l&4&&Qo(5,s);break;case 1:if(Ga(t,s),l&4)if(t=s.stateNode,n===null)try{t.componentDidMount()}catch(S){Zt(s,s.return,S)}else{var f=er(s.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(f,n,t.__reactInternalSnapshotBeforeUpdate)}catch(S){Zt(s,s.return,S)}}l&64&&q0(s),l&512&&Jo(s,s.return);break;case 3:if(Ga(t,s),l&64&&(t=s.updateQueue,t!==null)){if(n=null,s.child!==null)switch(s.child.tag){case 27:case 5:n=s.child.stateNode;break;case 1:n=s.child.stateNode}try{Fm(t,n)}catch(S){Zt(s,s.return,S)}}break;case 27:n===null&&l&4&&Q0(s);case 26:case 5:Ga(t,s),n===null&&l&4&&Z0(s),l&512&&Jo(s,s.return);break;case 12:Ga(t,s);break;case 31:Ga(t,s),l&4&&ng(t,s);break;case 13:Ga(t,s),l&4&&ig(t,s),l&64&&(t=s.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(s=mM.bind(null,s),PM(t,s))));break;case 22:if(l=s.memoizedState!==null||za,!l){n=n!==null&&n.memoizedState!==null||In,f=za;var p=In;za=l,(In=n)&&!p?Va(t,s,(s.subtreeFlags&8772)!==0):Ga(t,s),za=f,In=p}break;case 30:break;default:Ga(t,s)}}function eg(t){var n=t.alternate;n!==null&&(t.alternate=null,eg(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&dn(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var xn=null,Si=!1;function Ha(t,n,s){for(s=s.child;s!==null;)tg(t,n,s),s=s.sibling}function tg(t,n,s){if(pe&&typeof pe.onCommitFiberUnmount=="function")try{pe.onCommitFiberUnmount(de,s)}catch{}switch(s.tag){case 26:In||ga(s,n),Ha(t,n,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:In||ga(s,n);var l=xn,f=Si;bs(s.type)&&(xn=s.stateNode,Si=!1),Ha(t,n,s),ol(s.stateNode),xn=l,Si=f;break;case 5:In||ga(s,n);case 6:if(l=xn,f=Si,xn=null,Ha(t,n,s),xn=l,Si=f,xn!==null)if(Si)try{(xn.nodeType===9?xn.body:xn.nodeName==="HTML"?xn.ownerDocument.body:xn).removeChild(s.stateNode)}catch(p){Zt(s,n,p)}else try{xn.removeChild(s.stateNode)}catch(p){Zt(s,n,p)}break;case 18:xn!==null&&(Si?(t=xn,qg(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,s.stateNode),jr(t)):qg(xn,s.stateNode));break;case 4:l=xn,f=Si,xn=s.stateNode.containerInfo,Si=!0,Ha(t,n,s),xn=l,Si=f;break;case 0:case 11:case 14:case 15:_s(2,s,n),In||_s(4,s,n),Ha(t,n,s);break;case 1:In||(ga(s,n),l=s.stateNode,typeof l.componentWillUnmount=="function"&&j0(s,n,l)),Ha(t,n,s);break;case 21:Ha(t,n,s);break;case 22:In=(l=In)||s.memoizedState!==null,Ha(t,n,s),In=l;break;default:Ha(t,n,s)}}function ng(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{jr(t)}catch(s){Zt(n,n.return,s)}}}function ig(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{jr(t)}catch(s){Zt(n,n.return,s)}}function oM(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new J0),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new J0),n;default:throw Error(r(435,t.tag))}}function gc(t,n){var s=oM(t);n.forEach(function(l){if(!s.has(l)){s.add(l);var f=gM.bind(null,t,l);l.then(f,f)}})}function Mi(t,n){var s=n.deletions;if(s!==null)for(var l=0;l<s.length;l++){var f=s[l],p=t,S=n,C=S;e:for(;C!==null;){switch(C.tag){case 27:if(bs(C.type)){xn=C.stateNode,Si=!1;break e}break;case 5:xn=C.stateNode,Si=!1;break e;case 3:case 4:xn=C.stateNode.containerInfo,Si=!0;break e}C=C.return}if(xn===null)throw Error(r(160));tg(p,S,f),xn=null,Si=!1,p=f.alternate,p!==null&&(p.return=null),f.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)ag(n,t),n=n.sibling}var aa=null;function ag(t,n){var s=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Mi(n,t),yi(t),l&4&&(_s(3,t,t.return),Qo(3,t),_s(5,t,t.return));break;case 1:Mi(n,t),yi(t),l&512&&(In||s===null||ga(s,s.return)),l&64&&za&&(t=t.updateQueue,t!==null&&(l=t.callbacks,l!==null&&(s=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=s===null?l:s.concat(l))));break;case 26:var f=aa;if(Mi(n,t),yi(t),l&512&&(In||s===null||ga(s,s.return)),l&4){var p=s!==null?s.memoizedState:null;if(l=t.memoizedState,s===null)if(l===null)if(t.stateNode===null){e:{l=t.type,s=t.memoizedProps,f=f.ownerDocument||f;t:switch(l){case"title":p=f.getElementsByTagName("title")[0],(!p||p[It]||p[Sn]||p.namespaceURI==="http://www.w3.org/2000/svg"||p.hasAttribute("itemprop"))&&(p=f.createElement(l),f.head.insertBefore(p,f.querySelector("head > title"))),$n(p,l,s),p[Sn]=t,Yt(p),l=p;break e;case"link":var S=a_("link","href",f).get(l+(s.href||""));if(S){for(var C=0;C<S.length;C++)if(p=S[C],p.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&p.getAttribute("rel")===(s.rel==null?null:s.rel)&&p.getAttribute("title")===(s.title==null?null:s.title)&&p.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){S.splice(C,1);break t}}p=f.createElement(l),$n(p,l,s),f.head.appendChild(p);break;case"meta":if(S=a_("meta","content",f).get(l+(s.content||""))){for(C=0;C<S.length;C++)if(p=S[C],p.getAttribute("content")===(s.content==null?null:""+s.content)&&p.getAttribute("name")===(s.name==null?null:s.name)&&p.getAttribute("property")===(s.property==null?null:s.property)&&p.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&p.getAttribute("charset")===(s.charSet==null?null:s.charSet)){S.splice(C,1);break t}}p=f.createElement(l),$n(p,l,s),f.head.appendChild(p);break;default:throw Error(r(468,l))}p[Sn]=t,Yt(p),l=p}t.stateNode=l}else s_(f,t.type,t.stateNode);else t.stateNode=i_(f,l,t.memoizedProps);else p!==l?(p===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):p.count--,l===null?s_(f,t.type,t.stateNode):i_(f,l,t.memoizedProps)):l===null&&t.stateNode!==null&&Yf(t,t.memoizedProps,s.memoizedProps)}break;case 27:Mi(n,t),yi(t),l&512&&(In||s===null||ga(s,s.return)),s!==null&&l&4&&Yf(t,t.memoizedProps,s.memoizedProps);break;case 5:if(Mi(n,t),yi(t),l&512&&(In||s===null||ga(s,s.return)),t.flags&32){f=t.stateNode;try{ii(f,"")}catch(je){Zt(t,t.return,je)}}l&4&&t.stateNode!=null&&(f=t.memoizedProps,Yf(t,f,s!==null?s.memoizedProps:f)),l&1024&&(Zf=!0);break;case 6:if(Mi(n,t),yi(t),l&4){if(t.stateNode===null)throw Error(r(162));l=t.memoizedProps,s=t.stateNode;try{s.nodeValue=l}catch(je){Zt(t,t.return,je)}}break;case 3:if(Nc=null,f=aa,aa=Dc(n.containerInfo),Mi(n,t),aa=f,yi(t),l&4&&s!==null&&s.memoizedState.isDehydrated)try{jr(n.containerInfo)}catch(je){Zt(t,t.return,je)}Zf&&(Zf=!1,sg(t));break;case 4:l=aa,aa=Dc(t.stateNode.containerInfo),Mi(n,t),yi(t),aa=l;break;case 12:Mi(n,t),yi(t);break;case 31:Mi(n,t),yi(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,gc(t,l)));break;case 13:Mi(n,t),yi(t),t.child.flags&8192&&t.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(vc=Ht()),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,gc(t,l)));break;case 22:f=t.memoizedState!==null;var G=s!==null&&s.memoizedState!==null,oe=za,ge=In;if(za=oe||f,In=ge||G,Mi(n,t),In=ge,za=oe,yi(t),l&8192)e:for(n=t.stateNode,n._visibility=f?n._visibility&-2:n._visibility|1,f&&(s===null||G||za||In||tr(t)),s=null,n=t;;){if(n.tag===5||n.tag===26){if(s===null){G=s=n;try{if(p=G.stateNode,f)S=p.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{C=G.stateNode;var Me=G.memoizedProps.style,le=Me!=null&&Me.hasOwnProperty("display")?Me.display:null;C.style.display=le==null||typeof le=="boolean"?"":(""+le).trim()}}catch(je){Zt(G,G.return,je)}}}else if(n.tag===6){if(s===null){G=n;try{G.stateNode.nodeValue=f?"":G.memoizedProps}catch(je){Zt(G,G.return,je)}}}else if(n.tag===18){if(s===null){G=n;try{var fe=G.stateNode;f?jg(fe,!0):jg(G.stateNode,!1)}catch(je){Zt(G,G.return,je)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;s===n&&(s=null),n=n.return}s===n&&(s=null),n.sibling.return=n.return,n=n.sibling}l&4&&(l=t.updateQueue,l!==null&&(s=l.retryQueue,s!==null&&(l.retryQueue=null,gc(t,s))));break;case 19:Mi(n,t),yi(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,gc(t,l)));break;case 30:break;case 21:break;default:Mi(n,t),yi(t)}}function yi(t){var n=t.flags;if(n&2){try{for(var s,l=t.return;l!==null;){if(K0(l)){s=l;break}l=l.return}if(s==null)throw Error(r(160));switch(s.tag){case 27:var f=s.stateNode,p=qf(t);mc(t,p,f);break;case 5:var S=s.stateNode;s.flags&32&&(ii(S,""),s.flags&=-33);var C=qf(t);mc(t,C,S);break;case 3:case 4:var G=s.stateNode.containerInfo,oe=qf(t);jf(t,oe,G);break;default:throw Error(r(161))}}catch(ge){Zt(t,t.return,ge)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function sg(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;sg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function Ga(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)$0(t,n.alternate,n),n=n.sibling}function tr(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:_s(4,n,n.return),tr(n);break;case 1:ga(n,n.return);var s=n.stateNode;typeof s.componentWillUnmount=="function"&&j0(n,n.return,s),tr(n);break;case 27:ol(n.stateNode);case 26:case 5:ga(n,n.return),tr(n);break;case 22:n.memoizedState===null&&tr(n);break;case 30:tr(n);break;default:tr(n)}t=t.sibling}}function Va(t,n,s){for(s=s&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var l=n.alternate,f=t,p=n,S=p.flags;switch(p.tag){case 0:case 11:case 15:Va(f,p,s),Qo(4,p);break;case 1:if(Va(f,p,s),l=p,f=l.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(oe){Zt(l,l.return,oe)}if(l=p,f=l.updateQueue,f!==null){var C=l.stateNode;try{var G=f.shared.hiddenCallbacks;if(G!==null)for(f.shared.hiddenCallbacks=null,f=0;f<G.length;f++)Im(G[f],C)}catch(oe){Zt(l,l.return,oe)}}s&&S&64&&q0(p),Jo(p,p.return);break;case 27:Q0(p);case 26:case 5:Va(f,p,s),s&&l===null&&S&4&&Z0(p),Jo(p,p.return);break;case 12:Va(f,p,s);break;case 31:Va(f,p,s),s&&S&4&&ng(f,p);break;case 13:Va(f,p,s),s&&S&4&&ig(f,p);break;case 22:p.memoizedState===null&&Va(f,p,s),Jo(p,p.return);break;case 30:break;default:Va(f,p,s)}n=n.sibling}}function Kf(t,n){var s=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==s&&(t!=null&&t.refCount++,s!=null&&Bo(s))}function Qf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Bo(t))}function sa(t,n,s,l){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)rg(t,n,s,l),n=n.sibling}function rg(t,n,s,l){var f=n.flags;switch(n.tag){case 0:case 11:case 15:sa(t,n,s,l),f&2048&&Qo(9,n);break;case 1:sa(t,n,s,l);break;case 3:sa(t,n,s,l),f&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Bo(t)));break;case 12:if(f&2048){sa(t,n,s,l),t=n.stateNode;try{var p=n.memoizedProps,S=p.id,C=p.onPostCommit;typeof C=="function"&&C(S,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(G){Zt(n,n.return,G)}}else sa(t,n,s,l);break;case 31:sa(t,n,s,l);break;case 13:sa(t,n,s,l);break;case 23:break;case 22:p=n.stateNode,S=n.alternate,n.memoizedState!==null?p._visibility&2?sa(t,n,s,l):$o(t,n):p._visibility&2?sa(t,n,s,l):(p._visibility|=2,Fr(t,n,s,l,(n.subtreeFlags&10256)!==0||!1)),f&2048&&Kf(S,n);break;case 24:sa(t,n,s,l),f&2048&&Qf(n.alternate,n);break;default:sa(t,n,s,l)}}function Fr(t,n,s,l,f){for(f=f&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var p=t,S=n,C=s,G=l,oe=S.flags;switch(S.tag){case 0:case 11:case 15:Fr(p,S,C,G,f),Qo(8,S);break;case 23:break;case 22:var ge=S.stateNode;S.memoizedState!==null?ge._visibility&2?Fr(p,S,C,G,f):$o(p,S):(ge._visibility|=2,Fr(p,S,C,G,f)),f&&oe&2048&&Kf(S.alternate,S);break;case 24:Fr(p,S,C,G,f),f&&oe&2048&&Qf(S.alternate,S);break;default:Fr(p,S,C,G,f)}n=n.sibling}}function $o(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var s=t,l=n,f=l.flags;switch(l.tag){case 22:$o(s,l),f&2048&&Kf(l.alternate,l);break;case 24:$o(s,l),f&2048&&Qf(l.alternate,l);break;default:$o(s,l)}n=n.sibling}}var el=8192;function Br(t,n,s){if(t.subtreeFlags&el)for(t=t.child;t!==null;)og(t,n,s),t=t.sibling}function og(t,n,s){switch(t.tag){case 26:Br(t,n,s),t.flags&el&&t.memoizedState!==null&&qM(s,aa,t.memoizedState,t.memoizedProps);break;case 5:Br(t,n,s);break;case 3:case 4:var l=aa;aa=Dc(t.stateNode.containerInfo),Br(t,n,s),aa=l;break;case 22:t.memoizedState===null&&(l=t.alternate,l!==null&&l.memoizedState!==null?(l=el,el=16777216,Br(t,n,s),el=l):Br(t,n,s));break;default:Br(t,n,s)}}function lg(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function tl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var s=0;s<n.length;s++){var l=n[s];Xn=l,ug(l,t)}lg(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)cg(t),t=t.sibling}function cg(t){switch(t.tag){case 0:case 11:case 15:tl(t),t.flags&2048&&_s(9,t,t.return);break;case 3:tl(t);break;case 12:tl(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,_c(t)):tl(t);break;default:tl(t)}}function _c(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var s=0;s<n.length;s++){var l=n[s];Xn=l,ug(l,t)}lg(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:_s(8,n,n.return),_c(n);break;case 22:s=n.stateNode,s._visibility&2&&(s._visibility&=-3,_c(n));break;default:_c(n)}t=t.sibling}}function ug(t,n){for(;Xn!==null;){var s=Xn;switch(s.tag){case 0:case 11:case 15:_s(8,s,n);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var l=s.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Bo(s.memoizedState.cache)}if(l=s.child,l!==null)l.return=s,Xn=l;else e:for(s=t;Xn!==null;){l=Xn;var f=l.sibling,p=l.return;if(eg(l),l===s){Xn=null;break e}if(f!==null){f.return=p,Xn=f;break e}Xn=p}}}var lM={getCacheForType:function(t){var n=Qn(Un),s=n.data.get(t);return s===void 0&&(s=t(),n.data.set(t,s)),s},cacheSignal:function(){return Qn(Un).controller.signal}},cM=typeof WeakMap=="function"?WeakMap:Map,Wt=0,rn=null,yt=null,Tt=0,jt=0,Ui=null,vs=!1,zr=!1,Jf=!1,ka=0,bn=0,xs=0,nr=0,$f=0,Oi=0,Hr=0,nl=null,Ei=null,ed=!1,vc=0,fg=0,xc=1/0,Sc=null,Ss=null,Hn=0,Ms=null,Gr=null,Xa=0,td=0,nd=null,dg=null,il=0,id=null;function Pi(){return(Wt&2)!==0&&Tt!==0?Tt&-Tt:F.T!==null?cd():rs()}function hg(){if(Oi===0)if((Tt&536870912)===0||wt){var t=nt;nt<<=1,(nt&3932160)===0&&(nt=262144),Oi=t}else Oi=536870912;return t=Li.current,t!==null&&(t.flags|=32),Oi}function bi(t,n,s){(t===rn&&(jt===2||jt===9)||t.cancelPendingCommit!==null)&&(Vr(t,0),ys(t,Tt,Oi,!1)),We(t,s),((Wt&2)===0||t!==rn)&&(t===rn&&((Wt&2)===0&&(nr|=s),bn===4&&ys(t,Tt,Oi,!1)),_a(t))}function pg(t,n,s){if((Wt&6)!==0)throw Error(r(327));var l=!s&&(n&127)===0&&(n&t.expiredLanes)===0||Le(t,n),f=l?dM(t,n):sd(t,n,!0),p=l;do{if(f===0){zr&&!l&&ys(t,n,0,!1);break}else{if(s=t.current.alternate,p&&!uM(s)){f=sd(t,n,!1),p=!1;continue}if(f===2){if(p=n,t.errorRecoveryDisabledLanes&p)var S=0;else S=t.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){n=S;e:{var C=t;f=nl;var G=C.current.memoizedState.isDehydrated;if(G&&(Vr(C,S).flags|=256),S=sd(C,S,!1),S!==2){if(Jf&&!G){C.errorRecoveryDisabledLanes|=p,nr|=p,f=4;break e}p=Ei,Ei=f,p!==null&&(Ei===null?Ei=p:Ei.push.apply(Ei,p))}f=S}if(p=!1,f!==2)continue}}if(f===1){Vr(t,0),ys(t,n,0,!0);break}e:{switch(l=t,p=f,p){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:ys(l,n,Oi,!vs);break e;case 2:Ei=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(f=vc+300-Ht(),10<f)){if(ys(l,n,Oi,!vs),_e(l,0,!0)!==0)break e;Xa=n,l.timeoutHandle=Wg(mg.bind(null,l,s,Ei,Sc,ed,n,Oi,nr,Hr,vs,p,"Throttled",-0,0),f);break e}mg(l,s,Ei,Sc,ed,n,Oi,nr,Hr,vs,p,null,-0,0)}}break}while(!0);_a(t)}function mg(t,n,s,l,f,p,S,C,G,oe,ge,Me,le,fe){if(t.timeoutHandle=-1,Me=n.subtreeFlags,Me&8192||(Me&16785408)===16785408){Me={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ta},og(n,p,Me);var je=(p&62914560)===p?vc-Ht():(p&4194048)===p?fg-Ht():0;if(je=jM(Me,je),je!==null){Xa=p,t.cancelPendingCommit=je(Eg.bind(null,t,n,p,s,l,f,S,C,G,ge,Me,null,le,fe)),ys(t,p,S,!oe);return}}Eg(t,n,p,s,l,f,S,C,G)}function uM(t){for(var n=t;;){var s=n.tag;if((s===0||s===11||s===15)&&n.flags&16384&&(s=n.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var l=0;l<s.length;l++){var f=s[l],p=f.getSnapshot;f=f.value;try{if(!wi(p(),f))return!1}catch{return!1}}if(s=n.child,n.subtreeFlags&16384&&s!==null)s.return=n,n=s;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function ys(t,n,s,l){n&=~$f,n&=~nr,t.suspendedLanes|=n,t.pingedLanes&=~n,l&&(t.warmLanes|=n),l=t.expirationTimes;for(var f=n;0<f;){var p=31-ze(f),S=1<<p;l[p]=-1,f&=~S}s!==0&&Pt(t,s,n)}function Mc(){return(Wt&6)===0?(al(0),!1):!0}function ad(){if(yt!==null){if(jt===0)var t=yt.return;else t=yt,Ua=qs=null,Sf(t),Nr=null,Ho=0,t=yt;for(;t!==null;)Y0(t.alternate,t),t=t.return;yt=null}}function Vr(t,n){var s=t.timeoutHandle;s!==-1&&(t.timeoutHandle=-1,DM(s)),s=t.cancelPendingCommit,s!==null&&(t.cancelPendingCommit=null,s()),Xa=0,ad(),rn=t,yt=s=La(t.current,null),Tt=n,jt=0,Ui=null,vs=!1,zr=Le(t,n),Jf=!1,Hr=Oi=$f=nr=xs=bn=0,Ei=nl=null,ed=!1,(n&8)!==0&&(n|=n&32);var l=t.entangledLanes;if(l!==0)for(t=t.entanglements,l&=n;0<l;){var f=31-ze(l),p=1<<f;n|=t[f],l&=~p}return ka=n,Vl(),s}function gg(t,n){mt=null,F.H=jo,n===Lr||n===Kl?(n=Nm(),jt=3):n===lf?(n=Nm(),jt=4):jt=n===If?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Ui=n,yt===null&&(bn=1,uc(t,Gi(n,t.current)))}function _g(){var t=Li.current;return t===null?!0:(Tt&4194048)===Tt?Wi===null:(Tt&62914560)===Tt||(Tt&536870912)!==0?t===Wi:!1}function vg(){var t=F.H;return F.H=jo,t===null?jo:t}function xg(){var t=F.A;return F.A=lM,t}function yc(){bn=4,vs||(Tt&4194048)!==Tt&&Li.current!==null||(zr=!0),(xs&134217727)===0&&(nr&134217727)===0||rn===null||ys(rn,Tt,Oi,!1)}function sd(t,n,s){var l=Wt;Wt|=2;var f=vg(),p=xg();(rn!==t||Tt!==n)&&(Sc=null,Vr(t,n)),n=!1;var S=bn;e:do try{if(jt!==0&&yt!==null){var C=yt,G=Ui;switch(jt){case 8:ad(),S=6;break e;case 3:case 2:case 9:case 6:Li.current===null&&(n=!0);var oe=jt;if(jt=0,Ui=null,kr(t,C,G,oe),s&&zr){S=0;break e}break;default:oe=jt,jt=0,Ui=null,kr(t,C,G,oe)}}fM(),S=bn;break}catch(ge){gg(t,ge)}while(!0);return n&&t.shellSuspendCounter++,Ua=qs=null,Wt=l,F.H=f,F.A=p,yt===null&&(rn=null,Tt=0,Vl()),S}function fM(){for(;yt!==null;)Sg(yt)}function dM(t,n){var s=Wt;Wt|=2;var l=vg(),f=xg();rn!==t||Tt!==n?(Sc=null,xc=Ht()+500,Vr(t,n)):zr=Le(t,n);e:do try{if(jt!==0&&yt!==null){n=yt;var p=Ui;t:switch(jt){case 1:jt=0,Ui=null,kr(t,n,p,1);break;case 2:case 9:if(Dm(p)){jt=0,Ui=null,Mg(n);break}n=function(){jt!==2&&jt!==9||rn!==t||(jt=7),_a(t)},p.then(n,n);break e;case 3:jt=7;break e;case 4:jt=5;break e;case 7:Dm(p)?(jt=0,Ui=null,Mg(n)):(jt=0,Ui=null,kr(t,n,p,7));break;case 5:var S=null;switch(yt.tag){case 26:S=yt.memoizedState;case 5:case 27:var C=yt;if(S?r_(S):C.stateNode.complete){jt=0,Ui=null;var G=C.sibling;if(G!==null)yt=G;else{var oe=C.return;oe!==null?(yt=oe,Ec(oe)):yt=null}break t}}jt=0,Ui=null,kr(t,n,p,5);break;case 6:jt=0,Ui=null,kr(t,n,p,6);break;case 8:ad(),bn=6;break e;default:throw Error(r(462))}}hM();break}catch(ge){gg(t,ge)}while(!0);return Ua=qs=null,F.H=l,F.A=f,Wt=s,yt!==null?0:(rn=null,Tt=0,Vl(),bn)}function hM(){for(;yt!==null&&!ln();)Sg(yt)}function Sg(t){var n=X0(t.alternate,t,ka);t.memoizedProps=t.pendingProps,n===null?Ec(t):yt=n}function Mg(t){var n=t,s=n.alternate;switch(n.tag){case 15:case 0:n=B0(s,n,n.pendingProps,n.type,void 0,Tt);break;case 11:n=B0(s,n,n.pendingProps,n.type.render,n.ref,Tt);break;case 5:Sf(n);default:Y0(s,n),n=yt=xm(n,ka),n=X0(s,n,ka)}t.memoizedProps=t.pendingProps,n===null?Ec(t):yt=n}function kr(t,n,s,l){Ua=qs=null,Sf(n),Nr=null,Ho=0;var f=n.return;try{if(tM(t,f,n,s,Tt)){bn=1,uc(t,Gi(s,t.current)),yt=null;return}}catch(p){if(f!==null)throw yt=f,p;bn=1,uc(t,Gi(s,t.current)),yt=null;return}n.flags&32768?(wt||l===1?t=!0:zr||(Tt&536870912)!==0?t=!1:(vs=t=!0,(l===2||l===9||l===3||l===6)&&(l=Li.current,l!==null&&l.tag===13&&(l.flags|=16384))),yg(n,t)):Ec(n)}function Ec(t){var n=t;do{if((n.flags&32768)!==0){yg(n,vs);return}t=n.return;var s=aM(n.alternate,n,ka);if(s!==null){yt=s;return}if(n=n.sibling,n!==null){yt=n;return}yt=n=t}while(n!==null);bn===0&&(bn=5)}function yg(t,n){do{var s=sM(t.alternate,t);if(s!==null){s.flags&=32767,yt=s;return}if(s=t.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!n&&(t=t.sibling,t!==null)){yt=t;return}yt=t=s}while(t!==null);bn=6,yt=null}function Eg(t,n,s,l,f,p,S,C,G){t.cancelPendingCommit=null;do bc();while(Hn!==0);if((Wt&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));if(p=n.lanes|n.childLanes,p|=Yu,an(t,s,p,S,C,G),t===rn&&(yt=rn=null,Tt=0),Gr=n,Ms=t,Xa=s,td=p,nd=f,dg=l,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,_M(Q,function(){return Cg(),null})):(t.callbackNode=null,t.callbackPriority=0),l=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||l){l=F.T,F.T=null,f=H.p,H.p=2,S=Wt,Wt|=4;try{rM(t,n,s)}finally{Wt=S,H.p=f,F.T=l}}Hn=1,bg(),Tg(),Ag()}}function bg(){if(Hn===1){Hn=0;var t=Ms,n=Gr,s=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||s){s=F.T,F.T=null;var l=H.p;H.p=2;var f=Wt;Wt|=4;try{ag(n,t);var p=_d,S=um(t.containerInfo),C=p.focusedElem,G=p.selectionRange;if(S!==C&&C&&C.ownerDocument&&cm(C.ownerDocument.documentElement,C)){if(G!==null&&Gu(C)){var oe=G.start,ge=G.end;if(ge===void 0&&(ge=oe),"selectionStart"in C)C.selectionStart=oe,C.selectionEnd=Math.min(ge,C.value.length);else{var Me=C.ownerDocument||document,le=Me&&Me.defaultView||window;if(le.getSelection){var fe=le.getSelection(),je=C.textContent.length,st=Math.min(G.start,je),nn=G.end===void 0?st:Math.min(G.end,je);!fe.extend&&st>nn&&(S=nn,nn=st,st=S);var J=lm(C,st),W=lm(C,nn);if(J&&W&&(fe.rangeCount!==1||fe.anchorNode!==J.node||fe.anchorOffset!==J.offset||fe.focusNode!==W.node||fe.focusOffset!==W.offset)){var re=Me.createRange();re.setStart(J.node,J.offset),fe.removeAllRanges(),st>nn?(fe.addRange(re),fe.extend(W.node,W.offset)):(re.setEnd(W.node,W.offset),fe.addRange(re))}}}}for(Me=[],fe=C;fe=fe.parentNode;)fe.nodeType===1&&Me.push({element:fe,left:fe.scrollLeft,top:fe.scrollTop});for(typeof C.focus=="function"&&C.focus(),C=0;C<Me.length;C++){var ve=Me[C];ve.element.scrollLeft=ve.left,ve.element.scrollTop=ve.top}}Ic=!!gd,_d=gd=null}finally{Wt=f,H.p=l,F.T=s}}t.current=n,Hn=2}}function Tg(){if(Hn===2){Hn=0;var t=Ms,n=Gr,s=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||s){s=F.T,F.T=null;var l=H.p;H.p=2;var f=Wt;Wt|=4;try{$0(t,n.alternate,n)}finally{Wt=f,H.p=l,F.T=s}}Hn=3}}function Ag(){if(Hn===4||Hn===3){Hn=0,Z();var t=Ms,n=Gr,s=Xa,l=dg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Hn=5:(Hn=0,Gr=Ms=null,Rg(t,t.pendingLanes));var f=t.pendingLanes;if(f===0&&(Ss=null),ss(s),n=n.stateNode,pe&&typeof pe.onCommitFiberRoot=="function")try{pe.onCommitFiberRoot(de,n,void 0,(n.current.flags&128)===128)}catch{}if(l!==null){n=F.T,f=H.p,H.p=2,F.T=null;try{for(var p=t.onRecoverableError,S=0;S<l.length;S++){var C=l[S];p(C.value,{componentStack:C.stack})}}finally{F.T=n,H.p=f}}(Xa&3)!==0&&bc(),_a(t),f=t.pendingLanes,(s&261930)!==0&&(f&42)!==0?t===id?il++:(il=0,id=t):il=0,al(0)}}function Rg(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Bo(n)))}function bc(){return bg(),Tg(),Ag(),Cg()}function Cg(){if(Hn!==5)return!1;var t=Ms,n=td;td=0;var s=ss(Xa),l=F.T,f=H.p;try{H.p=32>s?32:s,F.T=null,s=nd,nd=null;var p=Ms,S=Xa;if(Hn=0,Gr=Ms=null,Xa=0,(Wt&6)!==0)throw Error(r(331));var C=Wt;if(Wt|=4,cg(p.current),rg(p,p.current,S,s),Wt=C,al(0,!1),pe&&typeof pe.onPostCommitFiberRoot=="function")try{pe.onPostCommitFiberRoot(de,p)}catch{}return!0}finally{H.p=f,F.T=l,Rg(t,n)}}function wg(t,n,s){n=Gi(s,n),n=Pf(t.stateNode,n,2),t=ps(t,n,2),t!==null&&(We(t,2),_a(t))}function Zt(t,n,s){if(t.tag===3)wg(t,t,s);else for(;n!==null;){if(n.tag===3){wg(n,t,s);break}else if(n.tag===1){var l=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Ss===null||!Ss.has(l))){t=Gi(s,t),s=D0(2),l=ps(n,s,2),l!==null&&(L0(s,l,n,t),We(l,2),_a(l));break}}n=n.return}}function rd(t,n,s){var l=t.pingCache;if(l===null){l=t.pingCache=new cM;var f=new Set;l.set(n,f)}else f=l.get(n),f===void 0&&(f=new Set,l.set(n,f));f.has(s)||(Jf=!0,f.add(s),t=pM.bind(null,t,n,s),n.then(t,t))}function pM(t,n,s){var l=t.pingCache;l!==null&&l.delete(n),t.pingedLanes|=t.suspendedLanes&s,t.warmLanes&=~s,rn===t&&(Tt&s)===s&&(bn===4||bn===3&&(Tt&62914560)===Tt&&300>Ht()-vc?(Wt&2)===0&&Vr(t,0):$f|=s,Hr===Tt&&(Hr=0)),_a(t)}function Dg(t,n){n===0&&(n=Ee()),t=Xs(t,n),t!==null&&(We(t,n),_a(t))}function mM(t){var n=t.memoizedState,s=0;n!==null&&(s=n.retryLane),Dg(t,s)}function gM(t,n){var s=0;switch(t.tag){case 31:case 13:var l=t.stateNode,f=t.memoizedState;f!==null&&(s=f.retryLane);break;case 19:l=t.stateNode;break;case 22:l=t.stateNode._retryCache;break;default:throw Error(r(314))}l!==null&&l.delete(n),Dg(t,s)}function _M(t,n){return vn(t,n)}var Tc=null,Xr=null,od=!1,Ac=!1,ld=!1,Es=0;function _a(t){t!==Xr&&t.next===null&&(Xr===null?Tc=Xr=t:Xr=Xr.next=t),Ac=!0,od||(od=!0,xM())}function al(t,n){if(!ld&&Ac){ld=!0;do for(var s=!1,l=Tc;l!==null;){if(t!==0){var f=l.pendingLanes;if(f===0)var p=0;else{var S=l.suspendedLanes,C=l.pingedLanes;p=(1<<31-ze(42|t)+1)-1,p&=f&~(S&~C),p=p&201326741?p&201326741|1:p?p|2:0}p!==0&&(s=!0,Og(l,p))}else p=Tt,p=_e(l,l===rn?p:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(p&3)===0||Le(l,p)||(s=!0,Og(l,p));l=l.next}while(s);ld=!1}}function vM(){Lg()}function Lg(){Ac=od=!1;var t=0;Es!==0&&wM()&&(t=Es);for(var n=Ht(),s=null,l=Tc;l!==null;){var f=l.next,p=Ng(l,n);p===0?(l.next=null,s===null?Tc=f:s.next=f,f===null&&(Xr=s)):(s=l,(t!==0||(p&3)!==0)&&(Ac=!0)),l=f}Hn!==0&&Hn!==5||al(t),Es!==0&&(Es=0)}function Ng(t,n){for(var s=t.suspendedLanes,l=t.pingedLanes,f=t.expirationTimes,p=t.pendingLanes&-62914561;0<p;){var S=31-ze(p),C=1<<S,G=f[S];G===-1?((C&s)===0||(C&l)!==0)&&(f[S]=Ie(C,n)):G<=n&&(t.expiredLanes|=C),p&=~C}if(n=rn,s=Tt,s=_e(t,t===n?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l=t.callbackNode,s===0||t===n&&(jt===2||jt===9)||t.cancelPendingCommit!==null)return l!==null&&l!==null&&Ut(l),t.callbackNode=null,t.callbackPriority=0;if((s&3)===0||Le(t,s)){if(n=s&-s,n===t.callbackPriority)return n;switch(l!==null&&Ut(l),ss(s)){case 2:case 8:s=E;break;case 32:s=Q;break;case 268435456:s=he;break;default:s=Q}return l=Ug.bind(null,t),s=vn(s,l),t.callbackPriority=n,t.callbackNode=s,n}return l!==null&&l!==null&&Ut(l),t.callbackPriority=2,t.callbackNode=null,2}function Ug(t,n){if(Hn!==0&&Hn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var s=t.callbackNode;if(bc()&&t.callbackNode!==s)return null;var l=Tt;return l=_e(t,t===rn?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l===0?null:(pg(t,l,n),Ng(t,Ht()),t.callbackNode!=null&&t.callbackNode===s?Ug.bind(null,t):null)}function Og(t,n){if(bc())return null;pg(t,n,!0)}function xM(){LM(function(){(Wt&6)!==0?vn(U,vM):Lg()})}function cd(){if(Es===0){var t=wr;t===0&&(t=Ke,Ke<<=1,(Ke&261888)===0&&(Ke=256)),Es=t}return Es}function Pg(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:wa(""+t)}function Ig(t,n){var s=n.ownerDocument.createElement("input");return s.name=n.name,s.value=n.value,t.id&&s.setAttribute("form",t.id),n.parentNode.insertBefore(s,n),t=new FormData(t),s.parentNode.removeChild(s),t}function SM(t,n,s,l,f){if(n==="submit"&&s&&s.stateNode===f){var p=Pg((f[Mn]||null).action),S=l.submitter;S&&(n=(n=S[Mn]||null)?Pg(n.formAction):S.getAttribute("formAction"),n!==null&&(p=n,S=null));var C=new Bl("action","action",null,l,f);t.push({event:C,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Es!==0){var G=S?Ig(f,S):new FormData(f);wf(s,{pending:!0,data:G,method:f.method,action:p},null,G)}}else typeof p=="function"&&(C.preventDefault(),G=S?Ig(f,S):new FormData(f),wf(s,{pending:!0,data:G,method:f.method,action:p},p,G))},currentTarget:f}]})}}for(var ud=0;ud<Wu.length;ud++){var fd=Wu[ud],MM=fd.toLowerCase(),yM=fd[0].toUpperCase()+fd.slice(1);ia(MM,"on"+yM)}ia(hm,"onAnimationEnd"),ia(pm,"onAnimationIteration"),ia(mm,"onAnimationStart"),ia("dblclick","onDoubleClick"),ia("focusin","onFocus"),ia("focusout","onBlur"),ia(BS,"onTransitionRun"),ia(zS,"onTransitionStart"),ia(HS,"onTransitionCancel"),ia(gm,"onTransitionEnd"),se("onMouseEnter",["mouseout","mouseover"]),se("onMouseLeave",["mouseout","mouseover"]),se("onPointerEnter",["pointerout","pointerover"]),se("onPointerLeave",["pointerout","pointerover"]),q("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),q("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),q("onBeforeInput",["compositionend","keypress","textInput","paste"]),q("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),q("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),q("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var sl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),EM=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(sl));function Fg(t,n){n=(n&4)!==0;for(var s=0;s<t.length;s++){var l=t[s],f=l.event;l=l.listeners;e:{var p=void 0;if(n)for(var S=l.length-1;0<=S;S--){var C=l[S],G=C.instance,oe=C.currentTarget;if(C=C.listener,G!==p&&f.isPropagationStopped())break e;p=C,f.currentTarget=oe;try{p(f)}catch(ge){Gl(ge)}f.currentTarget=null,p=G}else for(S=0;S<l.length;S++){if(C=l[S],G=C.instance,oe=C.currentTarget,C=C.listener,G!==p&&f.isPropagationStopped())break e;p=C,f.currentTarget=oe;try{p(f)}catch(ge){Gl(ge)}f.currentTarget=null,p=G}}}}function Et(t,n){var s=n[Re];s===void 0&&(s=n[Re]=new Set);var l=t+"__bubble";s.has(l)||(Bg(n,t,2,!1),s.add(l))}function dd(t,n,s){var l=0;n&&(l|=4),Bg(s,t,l,n)}var Rc="_reactListening"+Math.random().toString(36).slice(2);function hd(t){if(!t[Rc]){t[Rc]=!0,gi.forEach(function(s){s!=="selectionchange"&&(EM.has(s)||dd(s,!1,t),dd(s,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Rc]||(n[Rc]=!0,dd("selectionchange",!1,n))}}function Bg(t,n,s,l){switch(h_(n)){case 2:var f=QM;break;case 8:f=JM;break;default:f=Cd}s=f.bind(null,n,s,t),f=void 0,!vi||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(f=!0),l?f!==void 0?t.addEventListener(n,s,{capture:!0,passive:f}):t.addEventListener(n,s,!0):f!==void 0?t.addEventListener(n,s,{passive:f}):t.addEventListener(n,s,!1)}function pd(t,n,s,l,f){var p=l;if((n&1)===0&&(n&2)===0&&l!==null)e:for(;;){if(l===null)return;var S=l.tag;if(S===3||S===4){var C=l.stateNode.containerInfo;if(C===f)break;if(S===4)for(S=l.return;S!==null;){var G=S.tag;if((G===3||G===4)&&S.stateNode.containerInfo===f)return;S=S.return}for(;C!==null;){if(S=qt(C),S===null)return;if(G=S.tag,G===5||G===6||G===26||G===27){l=p=S;continue e}C=C.parentNode}}l=l.return}Ro(function(){var oe=p,ge=vr(s),Me=[];e:{var le=_m.get(t);if(le!==void 0){var fe=Bl,je=t;switch(t){case"keypress":if(ha(s)===0)break e;case"keydown":case"keyup":fe=gS;break;case"focusin":je="focus",fe=Iu;break;case"focusout":je="blur",fe=Iu;break;case"beforeblur":case"afterblur":fe=Iu;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":fe=Yp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":fe=aS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":fe=xS;break;case hm:case pm:case mm:fe=oS;break;case gm:fe=MS;break;case"scroll":case"scrollend":fe=nS;break;case"wheel":fe=ES;break;case"copy":case"cut":case"paste":fe=cS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":fe=jp;break;case"toggle":case"beforetoggle":fe=TS}var st=(n&4)!==0,nn=!st&&(t==="scroll"||t==="scrollend"),J=st?le!==null?le+"Capture":null:le;st=[];for(var W=oe,re;W!==null;){var ve=W;if(re=ve.stateNode,ve=ve.tag,ve!==5&&ve!==26&&ve!==27||re===null||J===null||(ve=pt(W,J),ve!=null&&st.push(rl(W,ve,re))),nn)break;W=W.return}0<st.length&&(le=new fe(le,je,null,s,ge),Me.push({event:le,listeners:st}))}}if((n&7)===0){e:{if(le=t==="mouseover"||t==="pointerover",fe=t==="mouseout"||t==="pointerout",le&&s!==Il&&(je=s.relatedTarget||s.fromElement)&&(qt(je)||je[Yn]))break e;if((fe||le)&&(le=ge.window===ge?ge:(le=ge.ownerDocument)?le.defaultView||le.parentWindow:window,fe?(je=s.relatedTarget||s.toElement,fe=oe,je=je?qt(je):null,je!==null&&(nn=c(je),st=je.tag,je!==nn||st!==5&&st!==27&&st!==6)&&(je=null)):(fe=null,je=oe),fe!==je)){if(st=Yp,ve="onMouseLeave",J="onMouseEnter",W="mouse",(t==="pointerout"||t==="pointerover")&&(st=jp,ve="onPointerLeave",J="onPointerEnter",W="pointer"),nn=fe==null?le:Ln(fe),re=je==null?le:Ln(je),le=new st(ve,W+"leave",fe,s,ge),le.target=nn,le.relatedTarget=re,ve=null,qt(ge)===oe&&(st=new st(J,W+"enter",je,s,ge),st.target=re,st.relatedTarget=nn,ve=st),nn=ve,fe&&je)t:{for(st=bM,J=fe,W=je,re=0,ve=J;ve;ve=st(ve))re++;ve=0;for(var it=W;it;it=st(it))ve++;for(;0<re-ve;)J=st(J),re--;for(;0<ve-re;)W=st(W),ve--;for(;re--;){if(J===W||W!==null&&J===W.alternate){st=J;break t}J=st(J),W=st(W)}st=null}else st=null;fe!==null&&zg(Me,le,fe,st,!1),je!==null&&nn!==null&&zg(Me,nn,je,st,!0)}}e:{if(le=oe?Ln(oe):window,fe=le.nodeName&&le.nodeName.toLowerCase(),fe==="select"||fe==="input"&&le.type==="file")var Ft=nm;else if(em(le))if(im)Ft=PS;else{Ft=US;var Je=NS}else fe=le.nodeName,!fe||fe.toLowerCase()!=="input"||le.type!=="checkbox"&&le.type!=="radio"?oe&&Lt(oe.elementType)&&(Ft=nm):Ft=OS;if(Ft&&(Ft=Ft(t,oe))){tm(Me,Ft,s,ge);break e}Je&&Je(t,le,oe),t==="focusout"&&oe&&le.type==="number"&&oe.memoizedProps.value!=null&&ct(le,"number",le.value)}switch(Je=oe?Ln(oe):window,t){case"focusin":(em(Je)||Je.contentEditable==="true")&&(Mr=Je,Vu=oe,Po=null);break;case"focusout":Po=Vu=Mr=null;break;case"mousedown":ku=!0;break;case"contextmenu":case"mouseup":case"dragend":ku=!1,fm(Me,s,ge);break;case"selectionchange":if(FS)break;case"keydown":case"keyup":fm(Me,s,ge)}var _t;if(Bu)e:{switch(t){case"compositionstart":var At="onCompositionStart";break e;case"compositionend":At="onCompositionEnd";break e;case"compositionupdate":At="onCompositionUpdate";break e}At=void 0}else Sr?Jp(t,s)&&(At="onCompositionEnd"):t==="keydown"&&s.keyCode===229&&(At="onCompositionStart");At&&(Zp&&s.locale!=="ko"&&(Sr||At!=="onCompositionStart"?At==="onCompositionEnd"&&Sr&&(_t=Da()):(Zn=ge,ai="value"in Zn?Zn.value:Zn.textContent,Sr=!0)),Je=Cc(oe,At),0<Je.length&&(At=new qp(At,t,null,s,ge),Me.push({event:At,listeners:Je}),_t?At.data=_t:(_t=$p(s),_t!==null&&(At.data=_t)))),(_t=RS?CS(t,s):wS(t,s))&&(At=Cc(oe,"onBeforeInput"),0<At.length&&(Je=new qp("onBeforeInput","beforeinput",null,s,ge),Me.push({event:Je,listeners:At}),Je.data=_t)),SM(Me,t,oe,s,ge)}Fg(Me,n)})}function rl(t,n,s){return{instance:t,listener:n,currentTarget:s}}function Cc(t,n){for(var s=n+"Capture",l=[];t!==null;){var f=t,p=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||p===null||(f=pt(t,s),f!=null&&l.unshift(rl(t,f,p)),f=pt(t,n),f!=null&&l.push(rl(t,f,p))),t.tag===3)return l;t=t.return}return[]}function bM(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function zg(t,n,s,l,f){for(var p=n._reactName,S=[];s!==null&&s!==l;){var C=s,G=C.alternate,oe=C.stateNode;if(C=C.tag,G!==null&&G===l)break;C!==5&&C!==26&&C!==27||oe===null||(G=oe,f?(oe=pt(s,p),oe!=null&&S.unshift(rl(s,oe,G))):f||(oe=pt(s,p),oe!=null&&S.push(rl(s,oe,G)))),s=s.return}S.length!==0&&t.push({event:n,listeners:S})}var TM=/\r\n?/g,AM=/\u0000|\uFFFD/g;function Hg(t){return(typeof t=="string"?t:""+t).replace(TM,`
`).replace(AM,"")}function Gg(t,n){return n=Hg(n),Hg(t)===n}function tn(t,n,s,l,f,p){switch(s){case"children":typeof l=="string"?n==="body"||n==="textarea"&&l===""||ii(t,l):(typeof l=="number"||typeof l=="bigint")&&n!=="body"&&ii(t,""+l);break;case"className":Ye(t,"class",l);break;case"tabIndex":Ye(t,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Ye(t,s,l);break;case"style":_i(t,l,p);break;case"data":if(n!=="object"){Ye(t,"data",l);break}case"src":case"href":if(l===""&&(n!=="a"||s!=="href")){t.removeAttribute(s);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(s);break}l=wa(""+l),t.setAttribute(s,l);break;case"action":case"formAction":if(typeof l=="function"){t.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof p=="function"&&(s==="formAction"?(n!=="input"&&tn(t,n,"name",f.name,f,null),tn(t,n,"formEncType",f.formEncType,f,null),tn(t,n,"formMethod",f.formMethod,f,null),tn(t,n,"formTarget",f.formTarget,f,null)):(tn(t,n,"encType",f.encType,f,null),tn(t,n,"method",f.method,f,null),tn(t,n,"target",f.target,f,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(s);break}l=wa(""+l),t.setAttribute(s,l);break;case"onClick":l!=null&&(t.onclick=ta);break;case"onScroll":l!=null&&Et("scroll",t);break;case"onScrollEnd":l!=null&&Et("scrollend",t);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(s=l.__html,s!=null){if(f.children!=null)throw Error(r(60));t.innerHTML=s}}break;case"multiple":t.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":t.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){t.removeAttribute("xlink:href");break}s=wa(""+l),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,""+l):t.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,""):t.removeAttribute(s);break;case"capture":case"download":l===!0?t.setAttribute(s,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,l):t.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?t.setAttribute(s,l):t.removeAttribute(s);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?t.removeAttribute(s):t.setAttribute(s,l);break;case"popover":Et("beforetoggle",t),Et("toggle",t),Ue(t,"popover",l);break;case"xlinkActuate":Xe(t,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Xe(t,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Xe(t,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Xe(t,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Xe(t,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Xe(t,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Xe(t,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Xe(t,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Xe(t,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Ue(t,"is",l);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=ui.get(s)||s,Ue(t,s,l))}}function md(t,n,s,l,f,p){switch(s){case"style":_i(t,l,p);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(s=l.__html,s!=null){if(f.children!=null)throw Error(r(60));t.innerHTML=s}}break;case"children":typeof l=="string"?ii(t,l):(typeof l=="number"||typeof l=="bigint")&&ii(t,""+l);break;case"onScroll":l!=null&&Et("scroll",t);break;case"onScrollEnd":l!=null&&Et("scrollend",t);break;case"onClick":l!=null&&(t.onclick=ta);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!A.hasOwnProperty(s))e:{if(s[0]==="o"&&s[1]==="n"&&(f=s.endsWith("Capture"),n=s.slice(2,f?s.length-7:void 0),p=t[Mn]||null,p=p!=null?p[s]:null,typeof p=="function"&&t.removeEventListener(n,p,f),typeof l=="function")){typeof p!="function"&&p!==null&&(s in t?t[s]=null:t.hasAttribute(s)&&t.removeAttribute(s)),t.addEventListener(n,l,f);break e}s in t?t[s]=l:l===!0?t.setAttribute(s,""):Ue(t,s,l)}}}function $n(t,n,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Et("error",t),Et("load",t);var l=!1,f=!1,p;for(p in s)if(s.hasOwnProperty(p)){var S=s[p];if(S!=null)switch(p){case"src":l=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:tn(t,n,p,S,s,null)}}f&&tn(t,n,"srcSet",s.srcSet,s,null),l&&tn(t,n,"src",s.src,s,null);return;case"input":Et("invalid",t);var C=p=S=f=null,G=null,oe=null;for(l in s)if(s.hasOwnProperty(l)){var ge=s[l];if(ge!=null)switch(l){case"name":f=ge;break;case"type":S=ge;break;case"checked":G=ge;break;case"defaultChecked":oe=ge;break;case"value":p=ge;break;case"defaultValue":C=ge;break;case"children":case"dangerouslySetInnerHTML":if(ge!=null)throw Error(r(137,n));break;default:tn(t,n,l,ge,s,null)}}qn(t,p,C,G,oe,S,f,!1);return;case"select":Et("invalid",t),l=S=p=null;for(f in s)if(s.hasOwnProperty(f)&&(C=s[f],C!=null))switch(f){case"value":p=C;break;case"defaultValue":S=C;break;case"multiple":l=C;default:tn(t,n,f,C,s,null)}n=p,s=S,t.multiple=!!l,n!=null?Rn(t,!!l,n,!1):s!=null&&Rn(t,!!l,s,!0);return;case"textarea":Et("invalid",t),p=f=l=null;for(S in s)if(s.hasOwnProperty(S)&&(C=s[S],C!=null))switch(S){case"value":l=C;break;case"defaultValue":f=C;break;case"children":p=C;break;case"dangerouslySetInnerHTML":if(C!=null)throw Error(r(91));break;default:tn(t,n,S,C,s,null)}jn(t,l,f,p);return;case"option":for(G in s)if(s.hasOwnProperty(G)&&(l=s[G],l!=null))switch(G){case"selected":t.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:tn(t,n,G,l,s,null)}return;case"dialog":Et("beforetoggle",t),Et("toggle",t),Et("cancel",t),Et("close",t);break;case"iframe":case"object":Et("load",t);break;case"video":case"audio":for(l=0;l<sl.length;l++)Et(sl[l],t);break;case"image":Et("error",t),Et("load",t);break;case"details":Et("toggle",t);break;case"embed":case"source":case"link":Et("error",t),Et("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(oe in s)if(s.hasOwnProperty(oe)&&(l=s[oe],l!=null))switch(oe){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:tn(t,n,oe,l,s,null)}return;default:if(Lt(n)){for(ge in s)s.hasOwnProperty(ge)&&(l=s[ge],l!==void 0&&md(t,n,ge,l,s,void 0));return}}for(C in s)s.hasOwnProperty(C)&&(l=s[C],l!=null&&tn(t,n,C,l,s,null))}function RM(t,n,s,l){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,p=null,S=null,C=null,G=null,oe=null,ge=null;for(fe in s){var Me=s[fe];if(s.hasOwnProperty(fe)&&Me!=null)switch(fe){case"checked":break;case"value":break;case"defaultValue":G=Me;default:l.hasOwnProperty(fe)||tn(t,n,fe,null,l,Me)}}for(var le in l){var fe=l[le];if(Me=s[le],l.hasOwnProperty(le)&&(fe!=null||Me!=null))switch(le){case"type":p=fe;break;case"name":f=fe;break;case"checked":oe=fe;break;case"defaultChecked":ge=fe;break;case"value":S=fe;break;case"defaultValue":C=fe;break;case"children":case"dangerouslySetInnerHTML":if(fe!=null)throw Error(r(137,n));break;default:fe!==Me&&tn(t,n,le,fe,l,Me)}}Ge(t,S,C,G,oe,ge,p,f);return;case"select":fe=S=C=le=null;for(p in s)if(G=s[p],s.hasOwnProperty(p)&&G!=null)switch(p){case"value":break;case"multiple":fe=G;default:l.hasOwnProperty(p)||tn(t,n,p,null,l,G)}for(f in l)if(p=l[f],G=s[f],l.hasOwnProperty(f)&&(p!=null||G!=null))switch(f){case"value":le=p;break;case"defaultValue":C=p;break;case"multiple":S=p;default:p!==G&&tn(t,n,f,p,l,G)}n=C,s=S,l=fe,le!=null?Rn(t,!!s,le,!1):!!l!=!!s&&(n!=null?Rn(t,!!s,n,!0):Rn(t,!!s,s?[]:"",!1));return;case"textarea":fe=le=null;for(C in s)if(f=s[C],s.hasOwnProperty(C)&&f!=null&&!l.hasOwnProperty(C))switch(C){case"value":break;case"children":break;default:tn(t,n,C,null,l,f)}for(S in l)if(f=l[S],p=s[S],l.hasOwnProperty(S)&&(f!=null||p!=null))switch(S){case"value":le=f;break;case"defaultValue":fe=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(r(91));break;default:f!==p&&tn(t,n,S,f,l,p)}ci(t,le,fe);return;case"option":for(var je in s)if(le=s[je],s.hasOwnProperty(je)&&le!=null&&!l.hasOwnProperty(je))switch(je){case"selected":t.selected=!1;break;default:tn(t,n,je,null,l,le)}for(G in l)if(le=l[G],fe=s[G],l.hasOwnProperty(G)&&le!==fe&&(le!=null||fe!=null))switch(G){case"selected":t.selected=le&&typeof le!="function"&&typeof le!="symbol";break;default:tn(t,n,G,le,l,fe)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var st in s)le=s[st],s.hasOwnProperty(st)&&le!=null&&!l.hasOwnProperty(st)&&tn(t,n,st,null,l,le);for(oe in l)if(le=l[oe],fe=s[oe],l.hasOwnProperty(oe)&&le!==fe&&(le!=null||fe!=null))switch(oe){case"children":case"dangerouslySetInnerHTML":if(le!=null)throw Error(r(137,n));break;default:tn(t,n,oe,le,l,fe)}return;default:if(Lt(n)){for(var nn in s)le=s[nn],s.hasOwnProperty(nn)&&le!==void 0&&!l.hasOwnProperty(nn)&&md(t,n,nn,void 0,l,le);for(ge in l)le=l[ge],fe=s[ge],!l.hasOwnProperty(ge)||le===fe||le===void 0&&fe===void 0||md(t,n,ge,le,l,fe);return}}for(var J in s)le=s[J],s.hasOwnProperty(J)&&le!=null&&!l.hasOwnProperty(J)&&tn(t,n,J,null,l,le);for(Me in l)le=l[Me],fe=s[Me],!l.hasOwnProperty(Me)||le===fe||le==null&&fe==null||tn(t,n,Me,le,l,fe)}function Vg(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function CM(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,s=performance.getEntriesByType("resource"),l=0;l<s.length;l++){var f=s[l],p=f.transferSize,S=f.initiatorType,C=f.duration;if(p&&C&&Vg(S)){for(S=0,C=f.responseEnd,l+=1;l<s.length;l++){var G=s[l],oe=G.startTime;if(oe>C)break;var ge=G.transferSize,Me=G.initiatorType;ge&&Vg(Me)&&(G=G.responseEnd,S+=ge*(G<C?1:(C-oe)/(G-oe)))}if(--l,n+=8*(p+S)/(f.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var gd=null,_d=null;function wc(t){return t.nodeType===9?t:t.ownerDocument}function kg(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Xg(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function vd(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var xd=null;function wM(){var t=window.event;return t&&t.type==="popstate"?t===xd?!1:(xd=t,!0):(xd=null,!1)}var Wg=typeof setTimeout=="function"?setTimeout:void 0,DM=typeof clearTimeout=="function"?clearTimeout:void 0,Yg=typeof Promise=="function"?Promise:void 0,LM=typeof queueMicrotask=="function"?queueMicrotask:typeof Yg<"u"?function(t){return Yg.resolve(null).then(t).catch(NM)}:Wg;function NM(t){setTimeout(function(){throw t})}function bs(t){return t==="head"}function qg(t,n){var s=n,l=0;do{var f=s.nextSibling;if(t.removeChild(s),f&&f.nodeType===8)if(s=f.data,s==="/$"||s==="/&"){if(l===0){t.removeChild(f),jr(n);return}l--}else if(s==="$"||s==="$?"||s==="$~"||s==="$!"||s==="&")l++;else if(s==="html")ol(t.ownerDocument.documentElement);else if(s==="head"){s=t.ownerDocument.head,ol(s);for(var p=s.firstChild;p;){var S=p.nextSibling,C=p.nodeName;p[It]||C==="SCRIPT"||C==="STYLE"||C==="LINK"&&p.rel.toLowerCase()==="stylesheet"||s.removeChild(p),p=S}}else s==="body"&&ol(t.ownerDocument.body);s=f}while(s);jr(n)}function jg(t,n){var s=t;t=0;do{var l=s.nextSibling;if(s.nodeType===1?n?(s._stashedDisplay=s.style.display,s.style.display="none"):(s.style.display=s._stashedDisplay||"",s.getAttribute("style")===""&&s.removeAttribute("style")):s.nodeType===3&&(n?(s._stashedText=s.nodeValue,s.nodeValue=""):s.nodeValue=s._stashedText||""),l&&l.nodeType===8)if(s=l.data,s==="/$"){if(t===0)break;t--}else s!=="$"&&s!=="$?"&&s!=="$~"&&s!=="$!"||t++;s=l}while(s)}function Sd(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var s=n;switch(n=n.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":Sd(s),dn(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}t.removeChild(s)}}function UM(t,n,s,l){for(;t.nodeType===1;){var f=s;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!l&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(l){if(!t[It])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(p=t.getAttribute("rel"),p==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(p!==f.rel||t.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||t.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||t.getAttribute("title")!==(f.title==null?null:f.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(p=t.getAttribute("src"),(p!==(f.src==null?null:f.src)||t.getAttribute("type")!==(f.type==null?null:f.type)||t.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&p&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var p=f.name==null?null:""+f.name;if(f.type==="hidden"&&t.getAttribute("name")===p)return t}else return t;if(t=Yi(t.nextSibling),t===null)break}return null}function OM(t,n,s){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!s||(t=Yi(t.nextSibling),t===null))return null;return t}function Zg(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=Yi(t.nextSibling),t===null))return null;return t}function Md(t){return t.data==="$?"||t.data==="$~"}function yd(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function PM(t,n){var s=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||s.readyState!=="loading")n();else{var l=function(){n(),s.removeEventListener("DOMContentLoaded",l)};s.addEventListener("DOMContentLoaded",l),t._reactRetry=l}}function Yi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var Ed=null;function Kg(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var s=t.data;if(s==="/$"||s==="/&"){if(n===0)return Yi(t.nextSibling);n--}else s!=="$"&&s!=="$!"&&s!=="$?"&&s!=="$~"&&s!=="&"||n++}t=t.nextSibling}return null}function Qg(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var s=t.data;if(s==="$"||s==="$!"||s==="$?"||s==="$~"||s==="&"){if(n===0)return t;n--}else s!=="/$"&&s!=="/&"||n++}t=t.previousSibling}return null}function Jg(t,n,s){switch(n=wc(s),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function ol(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);dn(t)}var qi=new Map,$g=new Set;function Dc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Wa=H.d;H.d={f:IM,r:FM,D:BM,C:zM,L:HM,m:GM,X:kM,S:VM,M:XM};function IM(){var t=Wa.f(),n=Mc();return t||n}function FM(t){var n=cn(t);n!==null&&n.tag===5&&n.type==="form"?g0(n):Wa.r(t)}var Wr=typeof document>"u"?null:document;function e_(t,n,s){var l=Wr;if(l&&typeof n=="string"&&n){var f=kt(n);f='link[rel="'+t+'"][href="'+f+'"]',typeof s=="string"&&(f+='[crossorigin="'+s+'"]'),$g.has(f)||($g.add(f),t={rel:t,crossOrigin:s,href:n},l.querySelector(f)===null&&(n=l.createElement("link"),$n(n,"link",t),Yt(n),l.head.appendChild(n)))}}function BM(t){Wa.D(t),e_("dns-prefetch",t,null)}function zM(t,n){Wa.C(t,n),e_("preconnect",t,n)}function HM(t,n,s){Wa.L(t,n,s);var l=Wr;if(l&&t&&n){var f='link[rel="preload"][as="'+kt(n)+'"]';n==="image"&&s&&s.imageSrcSet?(f+='[imagesrcset="'+kt(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(f+='[imagesizes="'+kt(s.imageSizes)+'"]')):f+='[href="'+kt(t)+'"]';var p=f;switch(n){case"style":p=Yr(t);break;case"script":p=qr(t)}qi.has(p)||(t=_({rel:"preload",href:n==="image"&&s&&s.imageSrcSet?void 0:t,as:n},s),qi.set(p,t),l.querySelector(f)!==null||n==="style"&&l.querySelector(ll(p))||n==="script"&&l.querySelector(cl(p))||(n=l.createElement("link"),$n(n,"link",t),Yt(n),l.head.appendChild(n)))}}function GM(t,n){Wa.m(t,n);var s=Wr;if(s&&t){var l=n&&typeof n.as=="string"?n.as:"script",f='link[rel="modulepreload"][as="'+kt(l)+'"][href="'+kt(t)+'"]',p=f;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":p=qr(t)}if(!qi.has(p)&&(t=_({rel:"modulepreload",href:t},n),qi.set(p,t),s.querySelector(f)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(cl(p)))return}l=s.createElement("link"),$n(l,"link",t),Yt(l),s.head.appendChild(l)}}}function VM(t,n,s){Wa.S(t,n,s);var l=Wr;if(l&&t){var f=$t(l).hoistableStyles,p=Yr(t);n=n||"default";var S=f.get(p);if(!S){var C={loading:0,preload:null};if(S=l.querySelector(ll(p)))C.loading=5;else{t=_({rel:"stylesheet",href:t,"data-precedence":n},s),(s=qi.get(p))&&bd(t,s);var G=S=l.createElement("link");Yt(G),$n(G,"link",t),G._p=new Promise(function(oe,ge){G.onload=oe,G.onerror=ge}),G.addEventListener("load",function(){C.loading|=1}),G.addEventListener("error",function(){C.loading|=2}),C.loading|=4,Lc(S,n,l)}S={type:"stylesheet",instance:S,count:1,state:C},f.set(p,S)}}}function kM(t,n){Wa.X(t,n);var s=Wr;if(s&&t){var l=$t(s).hoistableScripts,f=qr(t),p=l.get(f);p||(p=s.querySelector(cl(f)),p||(t=_({src:t,async:!0},n),(n=qi.get(f))&&Td(t,n),p=s.createElement("script"),Yt(p),$n(p,"link",t),s.head.appendChild(p)),p={type:"script",instance:p,count:1,state:null},l.set(f,p))}}function XM(t,n){Wa.M(t,n);var s=Wr;if(s&&t){var l=$t(s).hoistableScripts,f=qr(t),p=l.get(f);p||(p=s.querySelector(cl(f)),p||(t=_({src:t,async:!0,type:"module"},n),(n=qi.get(f))&&Td(t,n),p=s.createElement("script"),Yt(p),$n(p,"link",t),s.head.appendChild(p)),p={type:"script",instance:p,count:1,state:null},l.set(f,p))}}function t_(t,n,s,l){var f=(f=ie.current)?Dc(f):null;if(!f)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(n=Yr(s.href),s=$t(f).hoistableStyles,l=s.get(n),l||(l={type:"style",instance:null,count:0,state:null},s.set(n,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){t=Yr(s.href);var p=$t(f).hoistableStyles,S=p.get(t);if(S||(f=f.ownerDocument||f,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},p.set(t,S),(p=f.querySelector(ll(t)))&&!p._p&&(S.instance=p,S.state.loading=5),qi.has(t)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},qi.set(t,s),p||WM(f,t,s,S.state))),n&&l===null)throw Error(r(528,""));return S}if(n&&l!==null)throw Error(r(529,""));return null;case"script":return n=s.async,s=s.src,typeof s=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=qr(s),s=$t(f).hoistableScripts,l=s.get(n),l||(l={type:"script",instance:null,count:0,state:null},s.set(n,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function Yr(t){return'href="'+kt(t)+'"'}function ll(t){return'link[rel="stylesheet"]['+t+"]"}function n_(t){return _({},t,{"data-precedence":t.precedence,precedence:null})}function WM(t,n,s,l){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?l.loading=1:(n=t.createElement("link"),l.preload=n,n.addEventListener("load",function(){return l.loading|=1}),n.addEventListener("error",function(){return l.loading|=2}),$n(n,"link",s),Yt(n),t.head.appendChild(n))}function qr(t){return'[src="'+kt(t)+'"]'}function cl(t){return"script[async]"+t}function i_(t,n,s){if(n.count++,n.instance===null)switch(n.type){case"style":var l=t.querySelector('style[data-href~="'+kt(s.href)+'"]');if(l)return n.instance=l,Yt(l),l;var f=_({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return l=(t.ownerDocument||t).createElement("style"),Yt(l),$n(l,"style",f),Lc(l,s.precedence,t),n.instance=l;case"stylesheet":f=Yr(s.href);var p=t.querySelector(ll(f));if(p)return n.state.loading|=4,n.instance=p,Yt(p),p;l=n_(s),(f=qi.get(f))&&bd(l,f),p=(t.ownerDocument||t).createElement("link"),Yt(p);var S=p;return S._p=new Promise(function(C,G){S.onload=C,S.onerror=G}),$n(p,"link",l),n.state.loading|=4,Lc(p,s.precedence,t),n.instance=p;case"script":return p=qr(s.src),(f=t.querySelector(cl(p)))?(n.instance=f,Yt(f),f):(l=s,(f=qi.get(p))&&(l=_({},s),Td(l,f)),t=t.ownerDocument||t,f=t.createElement("script"),Yt(f),$n(f,"link",l),t.head.appendChild(f),n.instance=f);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(l=n.instance,n.state.loading|=4,Lc(l,s.precedence,t));return n.instance}function Lc(t,n,s){for(var l=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=l.length?l[l.length-1]:null,p=f,S=0;S<l.length;S++){var C=l[S];if(C.dataset.precedence===n)p=C;else if(p!==f)break}p?p.parentNode.insertBefore(t,p.nextSibling):(n=s.nodeType===9?s.head:s,n.insertBefore(t,n.firstChild))}function bd(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Td(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Nc=null;function a_(t,n,s){if(Nc===null){var l=new Map,f=Nc=new Map;f.set(s,l)}else f=Nc,l=f.get(s),l||(l=new Map,f.set(s,l));if(l.has(t))return l;for(l.set(t,null),s=s.getElementsByTagName(t),f=0;f<s.length;f++){var p=s[f];if(!(p[It]||p[Sn]||t==="link"&&p.getAttribute("rel")==="stylesheet")&&p.namespaceURI!=="http://www.w3.org/2000/svg"){var S=p.getAttribute(n)||"";S=t+S;var C=l.get(S);C?C.push(p):l.set(S,[p])}}return l}function s_(t,n,s){t=t.ownerDocument||t,t.head.insertBefore(s,n==="title"?t.querySelector("head > title"):null)}function YM(t,n,s){if(s===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function r_(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function qM(t,n,s,l){if(s.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(s.state.loading&4)===0){if(s.instance===null){var f=Yr(l.href),p=n.querySelector(ll(f));if(p){n=p._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=Uc.bind(t),n.then(t,t)),s.state.loading|=4,s.instance=p,Yt(p);return}p=n.ownerDocument||n,l=n_(l),(f=qi.get(f))&&bd(l,f),p=p.createElement("link"),Yt(p);var S=p;S._p=new Promise(function(C,G){S.onload=C,S.onerror=G}),$n(p,"link",l),s.instance=p}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(s,n),(n=s.state.preload)&&(s.state.loading&3)===0&&(t.count++,s=Uc.bind(t),n.addEventListener("load",s),n.addEventListener("error",s))}}var Ad=0;function jM(t,n){return t.stylesheets&&t.count===0&&Pc(t,t.stylesheets),0<t.count||0<t.imgCount?function(s){var l=setTimeout(function(){if(t.stylesheets&&Pc(t,t.stylesheets),t.unsuspend){var p=t.unsuspend;t.unsuspend=null,p()}},6e4+n);0<t.imgBytes&&Ad===0&&(Ad=62500*CM());var f=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Pc(t,t.stylesheets),t.unsuspend)){var p=t.unsuspend;t.unsuspend=null,p()}},(t.imgBytes>Ad?50:800)+n);return t.unsuspend=s,function(){t.unsuspend=null,clearTimeout(l),clearTimeout(f)}}:null}function Uc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Pc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Oc=null;function Pc(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Oc=new Map,n.forEach(ZM,t),Oc=null,Uc.call(t))}function ZM(t,n){if(!(n.state.loading&4)){var s=Oc.get(t);if(s)var l=s.get(null);else{s=new Map,Oc.set(t,s);for(var f=t.querySelectorAll("link[data-precedence],style[data-precedence]"),p=0;p<f.length;p++){var S=f[p];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(s.set(S.dataset.precedence,S),l=S)}l&&s.set(null,l)}f=n.instance,S=f.getAttribute("data-precedence"),p=s.get(S)||l,p===l&&s.set(null,f),s.set(S,f),this.count++,l=Uc.bind(this),f.addEventListener("load",l),f.addEventListener("error",l),p?p.parentNode.insertBefore(f,p.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(f,t.firstChild)),n.state.loading|=4}}var ul={$$typeof:z,Provider:null,Consumer:null,_currentValue:$,_currentValue2:$,_threadCount:0};function KM(t,n,s,l,f,p,S,C,G){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ze(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ze(0),this.hiddenUpdates=Ze(null),this.identifierPrefix=l,this.onUncaughtError=f,this.onCaughtError=p,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=G,this.incompleteTransitions=new Map}function o_(t,n,s,l,f,p,S,C,G,oe,ge,Me){return t=new KM(t,n,s,S,G,oe,ge,Me,C),n=1,p===!0&&(n|=24),p=Di(3,null,null,n),t.current=p,p.stateNode=t,n=sf(),n.refCount++,t.pooledCache=n,n.refCount++,p.memoizedState={element:l,isDehydrated:s,cache:n},cf(p),t}function l_(t){return t?(t=br,t):br}function c_(t,n,s,l,f,p){f=l_(f),l.context===null?l.context=f:l.pendingContext=f,l=hs(n),l.payload={element:s},p=p===void 0?null:p,p!==null&&(l.callback=p),s=ps(t,l,n),s!==null&&(bi(s,t,n),Vo(s,t,n))}function u_(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var s=t.retryLane;t.retryLane=s!==0&&s<n?s:n}}function Rd(t,n){u_(t,n),(t=t.alternate)&&u_(t,n)}function f_(t){if(t.tag===13||t.tag===31){var n=Xs(t,67108864);n!==null&&bi(n,t,67108864),Rd(t,67108864)}}function d_(t){if(t.tag===13||t.tag===31){var n=Pi();n=as(n);var s=Xs(t,n);s!==null&&bi(s,t,n),Rd(t,n)}}var Ic=!0;function QM(t,n,s,l){var f=F.T;F.T=null;var p=H.p;try{H.p=2,Cd(t,n,s,l)}finally{H.p=p,F.T=f}}function JM(t,n,s,l){var f=F.T;F.T=null;var p=H.p;try{H.p=8,Cd(t,n,s,l)}finally{H.p=p,F.T=f}}function Cd(t,n,s,l){if(Ic){var f=wd(l);if(f===null)pd(t,n,l,Fc,s),p_(t,l);else if(ey(f,t,n,s,l))l.stopPropagation();else if(p_(t,l),n&4&&-1<$M.indexOf(t)){for(;f!==null;){var p=cn(f);if(p!==null)switch(p.tag){case 3:if(p=p.stateNode,p.current.memoizedState.isDehydrated){var S=De(p.pendingLanes);if(S!==0){var C=p;for(C.pendingLanes|=2,C.entangledLanes|=2;S;){var G=1<<31-ze(S);C.entanglements[1]|=G,S&=~G}_a(p),(Wt&6)===0&&(xc=Ht()+500,al(0))}}break;case 31:case 13:C=Xs(p,2),C!==null&&bi(C,p,2),Mc(),Rd(p,2)}if(p=wd(l),p===null&&pd(t,n,l,Fc,s),p===f)break;f=p}f!==null&&l.stopPropagation()}else pd(t,n,l,null,s)}}function wd(t){return t=vr(t),Dd(t)}var Fc=null;function Dd(t){if(Fc=null,t=qt(t),t!==null){var n=c(t);if(n===null)t=null;else{var s=n.tag;if(s===13){if(t=u(n),t!==null)return t;t=null}else if(s===31){if(t=h(n),t!==null)return t;t=null}else if(s===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return Fc=t,null}function h_(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(St()){case U:return 2;case E:return 8;case Q:case ae:return 32;case he:return 268435456;default:return 32}default:return 32}}var Ld=!1,Ts=null,As=null,Rs=null,fl=new Map,dl=new Map,Cs=[],$M="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function p_(t,n){switch(t){case"focusin":case"focusout":Ts=null;break;case"dragenter":case"dragleave":As=null;break;case"mouseover":case"mouseout":Rs=null;break;case"pointerover":case"pointerout":fl.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":dl.delete(n.pointerId)}}function hl(t,n,s,l,f,p){return t===null||t.nativeEvent!==p?(t={blockedOn:n,domEventName:s,eventSystemFlags:l,nativeEvent:p,targetContainers:[f]},n!==null&&(n=cn(n),n!==null&&f_(n)),t):(t.eventSystemFlags|=l,n=t.targetContainers,f!==null&&n.indexOf(f)===-1&&n.push(f),t)}function ey(t,n,s,l,f){switch(n){case"focusin":return Ts=hl(Ts,t,n,s,l,f),!0;case"dragenter":return As=hl(As,t,n,s,l,f),!0;case"mouseover":return Rs=hl(Rs,t,n,s,l,f),!0;case"pointerover":var p=f.pointerId;return fl.set(p,hl(fl.get(p)||null,t,n,s,l,f)),!0;case"gotpointercapture":return p=f.pointerId,dl.set(p,hl(dl.get(p)||null,t,n,s,l,f)),!0}return!1}function m_(t){var n=qt(t.target);if(n!==null){var s=c(n);if(s!==null){if(n=s.tag,n===13){if(n=u(s),n!==null){t.blockedOn=n,Ca(t.priority,function(){d_(s)});return}}else if(n===31){if(n=h(s),n!==null){t.blockedOn=n,Ca(t.priority,function(){d_(s)});return}}else if(n===3&&s.stateNode.current.memoizedState.isDehydrated){t.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Bc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var s=wd(t.nativeEvent);if(s===null){s=t.nativeEvent;var l=new s.constructor(s.type,s);Il=l,s.target.dispatchEvent(l),Il=null}else return n=cn(s),n!==null&&f_(n),t.blockedOn=s,!1;n.shift()}return!0}function g_(t,n,s){Bc(t)&&s.delete(n)}function ty(){Ld=!1,Ts!==null&&Bc(Ts)&&(Ts=null),As!==null&&Bc(As)&&(As=null),Rs!==null&&Bc(Rs)&&(Rs=null),fl.forEach(g_),dl.forEach(g_)}function zc(t,n){t.blockedOn===n&&(t.blockedOn=null,Ld||(Ld=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,ty)))}var Hc=null;function __(t){Hc!==t&&(Hc=t,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){Hc===t&&(Hc=null);for(var n=0;n<t.length;n+=3){var s=t[n],l=t[n+1],f=t[n+2];if(typeof l!="function"){if(Dd(l||s)===null)continue;break}var p=cn(s);p!==null&&(t.splice(n,3),n-=3,wf(p,{pending:!0,data:f,method:s.method,action:l},l,f))}}))}function jr(t){function n(G){return zc(G,t)}Ts!==null&&zc(Ts,t),As!==null&&zc(As,t),Rs!==null&&zc(Rs,t),fl.forEach(n),dl.forEach(n);for(var s=0;s<Cs.length;s++){var l=Cs[s];l.blockedOn===t&&(l.blockedOn=null)}for(;0<Cs.length&&(s=Cs[0],s.blockedOn===null);)m_(s),s.blockedOn===null&&Cs.shift();if(s=(t.ownerDocument||t).$$reactFormReplay,s!=null)for(l=0;l<s.length;l+=3){var f=s[l],p=s[l+1],S=f[Mn]||null;if(typeof p=="function")S||__(s);else if(S){var C=null;if(p&&p.hasAttribute("formAction")){if(f=p,S=p[Mn]||null)C=S.formAction;else if(Dd(f)!==null)continue}else C=S.action;typeof C=="function"?s[l+1]=C:(s.splice(l,3),l-=3),__(s)}}}function v_(){function t(p){p.canIntercept&&p.info==="react-transition"&&p.intercept({handler:function(){return new Promise(function(S){return f=S})},focusReset:"manual",scroll:"manual"})}function n(){f!==null&&(f(),f=null),l||setTimeout(s,20)}function s(){if(!l&&!navigation.transition){var p=navigation.currentEntry;p&&p.url!=null&&navigation.navigate(p.url,{state:p.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,f=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(s,100),function(){l=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),f!==null&&(f(),f=null)}}}function Nd(t){this._internalRoot=t}Gc.prototype.render=Nd.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var s=n.current,l=Pi();c_(s,l,t,n,null,null)},Gc.prototype.unmount=Nd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;c_(t.current,2,null,t,null,null),Mc(),n[Yn]=null}};function Gc(t){this._internalRoot=t}Gc.prototype.unstable_scheduleHydration=function(t){if(t){var n=rs();t={blockedOn:null,target:t,priority:n};for(var s=0;s<Cs.length&&n!==0&&n<Cs[s].priority;s++);Cs.splice(s,0,t),s===0&&m_(t)}};var x_=e.version;if(x_!=="19.2.7")throw Error(r(527,x_,"19.2.7"));H.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=d(n),t=t!==null?g(t):null,t=t===null?null:t.stateNode,t};var ny={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:F,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Vc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Vc.isDisabled&&Vc.supportsFiber)try{de=Vc.inject(ny),pe=Vc}catch{}}return ml.createRoot=function(t,n){if(!o(t))throw Error(r(299));var s=!1,l="",f=A0,p=R0,S=C0;return n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onUncaughtError!==void 0&&(f=n.onUncaughtError),n.onCaughtError!==void 0&&(p=n.onCaughtError),n.onRecoverableError!==void 0&&(S=n.onRecoverableError)),n=o_(t,1,!1,null,null,s,l,null,f,p,S,v_),t[Yn]=n.current,hd(t),new Nd(n)},ml.hydrateRoot=function(t,n,s){if(!o(t))throw Error(r(299));var l=!1,f="",p=A0,S=R0,C=C0,G=null;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(f=s.identifierPrefix),s.onUncaughtError!==void 0&&(p=s.onUncaughtError),s.onCaughtError!==void 0&&(S=s.onCaughtError),s.onRecoverableError!==void 0&&(C=s.onRecoverableError),s.formState!==void 0&&(G=s.formState)),n=o_(t,1,!0,n,s??null,l,f,G,p,S,C,v_),n.context=l_(null),s=n.current,l=Pi(),l=as(l),f=hs(l),f.callback=null,ps(s,f,l),s=l,n.current.lanes=s,We(n,s),_a(n),t[Yn]=n.current,hd(t),new Gc(n)},ml.version="19.2.7",ml}var w_;function fy(){if(w_)return Pd.exports;w_=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(e){console.error(e)}}return a(),Pd.exports=uy(),Pd.exports}var dy=fy();const hy={BASE_URL:"/",DEV:!1,MODE:"production",PROD:!0,SSR:!1,VITE_APP_URL:"https://demo.morpheum.io",VITE_DISCORD_URL:"",VITE_DOCS_URL:"",VITE_MANIFESTO_URL:"",VITE_TUTORIAL_VIDEO_URL:"",VITE_X_URL:""},Zr=(a,e="#")=>{var i;return((i=hy[a])==null?void 0:i.trim())||e},Bn={app:Zr("VITE_APP_URL","https://demo.morpheum.io"),docs:Zr("VITE_DOCS_URL"),manifesto:Zr("VITE_MANIFESTO_URL"),discord:Zr("VITE_DISCORD_URL"),x:Zr("VITE_X_URL"),tutorialVideo:Zr("VITE_TUTORIAL_VIDEO_URL",""),explore:"#explore",exploreAgents:"#explore-agents",exploreVaults:"#explore-vaults"},du=[{id:"demo",label:"Demo",href:"#demo"},{id:"personas",label:"Personas",href:"#personas"},{id:"how",label:"How it works",href:"#how"},{id:"explore",label:"Explore",href:"#explore"}],zd={text:"> The agent-native L1 DEX, for faster and safer trades.",href:Bn.manifesto},Ds={eyebrow:{label:"A manifesto for verifiable agents",href:Bn.manifesto},headline:["Agents you can trust.","Assets you can trade."],primaryCta:{label:"Launch Morpheum",href:Bn.app},secondaryCta:{label:"Explore agents",href:Bn.explore}},D_={risks:[{risk:"Speculation without underwriting",failure:"Buy random agent tokens on narrative alone.",solveLabel:"Proof",solve:"Underwrite on receipts, reputation, and risk scores — before you commit a dollar."},{risk:"Automation without capital controls",failure:"Run an agent with unbounded capital and no kill switch.",solveLabel:"Controls",solve:"Set Risk Level, approve gated moves, and isolate each strategy in its own bucket."}],close:"The Agent-native L1 DEX — faster, safer trades."},L_=[{label:"MAEX indices",status:"LIVE",live:!0},{label:"Agents",status:"REPUTATION / SHARPE / ROI"},{label:"Risk level",status:"MANUAL / HITL / HANDS-OFF"},{label:"Agent notifications",status:"WANT-TO / ACTION / PAUSED / REJECTED"},{label:"Copy buckets",status:"LIVE",live:!0},{label:"Buckets",status:"RISK-ISOLATED"},{label:"Vaults",status:"ONCHAIN"},{label:"Staking",status:"LIVE",live:!0}],Rh={kicker:"Product tour",videoCaption:"See an agent discovered, copied, supervised, and isolated in ~60s.",verbs:[{verb:"Discover",description:"Agents & indices — proof first."},{verb:"Copy",description:"Mirror a proven agent into your bucket."},{verb:"Supervise",description:"Approve gated moves on HITL."},{verb:"Isolate",description:"Risk contained in its own bucket."}]},Hd={kicker:"Choose your path",title:"Become part of the agent economy",items:[{title:"Become an Operator",weight:"major",steps:["Mint an agent and set its mandate.","Choose a Risk Level: Manual · HITL · Hands-off.","Build a proven track record investors can underwrite."],cta:{label:"Run an agent",href:Bn.exploreAgents},meta:{kind:"identity",name:"SharpeShark",tx:"0xa4c2…8f1d",hash:"did:morph:0x7a3f…c91e",chain:"Morpheum · hop 0",verified:"yes",rep:"72",portable:"yes",next:"minting mandate…"}},{title:"Become a Copy Trader",weight:"major",steps:["Screen agents on real proof — receipts and risk scores.","Mirror the best into your own dedicated bucket.","Track PnL and rebalance anytime."],cta:{label:"Start copying",href:Bn.exploreAgents},meta:{kind:"chain",label:"on-chain transactions",chain:"Morpheum · hop 0",steps:[{op:"mint agent",tx:"0xa4c2…8f1d",status:"settled"},{op:"mint bucket",tx:"0xb91e…4c02",status:"settled"},{op:"fund transfer",tx:"0xe81a…3b70",status:"settled",from:"SortinoSloth",to:"your bucket",asset:"USDC",amt:"2500"}]}},{title:"Provide Capital",weight:"light",steps:["Deposit into a vault or bucket.","Stake to earn.","Withdraw on your terms."],cta:{label:"Explore vaults",href:Bn.exploreVaults},meta:{kind:"community",label:"on-chain transaction",tx:"0x12af…9e44",from:"you",to:"Vault-Alpha",asset:"USDC",amt:"10000",chain:"Morpheum · hop 0",status:"queued"}}]},Ls={kicker:"How it works",title:"Discover → Copy → Supervise → Isolate",outcome:"A proven, risk-isolated capital position — not a bet on a black box.",chips:[{label:"Risk level",value:"Manual · HITL · Hands-off"},{label:"Notifications",value:"Want-to · Action · Paused · Rejected"},{label:"Capital",value:"Bucket / Vault"}],steps:[{n:1,title:"Discover",feature:"Agents & Indices + proof",body:"Browse the MAEX roster and index catalog and read the proof before you commit a dollar.",example:"Open SharpeShark and see its receipts, reputation, risk score, and Sharpe / ROI side by side."},{n:2,title:"Copy",feature:"Copy Trade",body:"Mirror a proven performer into your own bucket in one click, sized to your capital, with spread / funding cost shown before you confirm.",example:"One click clones SharpeShark's strategy into a fresh bucket bound to your wallet."},{n:3,title:"Supervise",feature:"Risk Level + Agent Notifications",body:"Set how much the agent may act on its own — Manual · HITL · Hands-off — and stay in the loop through Agent Notifications: Want to · Action · Paused · Rejected.",example:'On HITL, a "Want to open ETH long" notification waits for your inline Approve / Reject, and Explain shows why the agent wants the trade.'},{n:4,title:"Isolate",feature:"Buckets",body:"Every mirror lands in its own dedicated cross-margin bucket bound to a wallet executor agent, so risk is contained per strategy.",example:"SharpeShark runs in its own bucket with its own margin and exposure — if it draws down, only that bucket's capital is at risk; your other buckets and spot balance are untouched."}]},Kr={kicker:"Explore",title:"Agents. Indices. Buckets. Vaults.",cards:[{title:"Agents",verbs:["Browse","Compare","Copy"],agents:[{name:"SharpeShark",sharpe:"2.41",roi:"+38.2%",risk:"72",positive:!0},{name:"SortinoSloth",sharpe:"1.86",roi:"+21.4%",risk:"58",positive:!0},{name:"FundingFox",sharpe:"1.12",roi:"-4.1%",risk:"41",positive:!1}]},{title:"Indices",verbs:["Track","Weight","Hold"],blurb:"Curated agent baskets for one-click exposure to proven strategies.",sample:[{label:"MAEX Core",value:"+12.8%",positive:!0},{label:"Risk-Off Bucket",value:"+4.2%",positive:!0}]},{title:"Buckets",verbs:["Isolate","Trade","Contain"],blurb:"Risk-isolated positions — each strategy in its own margin shell.",sample:[{label:"Bucket A",value:"ISOLATED",positive:!1},{label:"Bucket B",value:"ISOLATED",positive:!1}]},{title:"Vaults",verbs:["Deposit","Earn","Withdraw"],blurb:"Pooled onchain capital — graded vaults with live APR and TVL.",sample:[{label:"MLP (House Liq.)",value:"A · 18.4%",meta:"$9.8M TVL"},{label:"Basis Capture",value:"A · 14.2%",meta:"$2.1M TVL"}]}]},kc={line:"Back agents you can prove. Own the upside.",primaryCta:{label:"Launch Demo",href:Bn.app},social:[{label:"Join Discord",href:Bn.discord},{label:"Join X",href:Bn.x}]},N_={legal:"© 2026 Morpheum. Capital funds proof.",labels:["validators","stakings","ZKProof"]};function xo({variant:a="primary",children:e,className:i="",...r}){const o=`cta cta--${a} terminal-interactive ${i}`.trim();if("href"in r&&r.href!==void 0){const{href:c,...u}=r;return D.jsx("a",{className:o,href:c,...u,children:e})}return D.jsx("button",{className:o,type:"button",...r,children:e})}function py(){return D.jsx("section",{id:"join",className:"section community",children:D.jsxs("div",{className:"container community__inner",children:[D.jsx("h2",{className:"community__line",children:kc.line}),D.jsxs("div",{className:"community__ctas",children:[D.jsx(xo,{href:kc.primaryCta.href,variant:"primary",children:kc.primaryCta.label}),kc.social.map(a=>D.jsx(xo,{href:a.href,variant:"ghost",children:a.label},a.label))]})]})})}function my(){const[a,e]=Ve.useState(!1),i=!!Bn.tutorialVideo;return D.jsx("section",{id:"demo",className:"section demo",children:D.jsxs("div",{className:"container",children:[D.jsx("p",{className:"section-kicker",children:Rh.kicker}),D.jsxs("div",{className:"demo__video",children:[a&&i?D.jsx("video",{className:"demo__player",src:Bn.tutorialVideo,controls:!0,autoPlay:!0,playsInline:!0}):D.jsxs("button",{type:"button",className:"demo__poster",onClick:()=>i&&e(!0),"aria-label":i?"Play tutorial video":"Tutorial video coming soon",children:[D.jsx("span",{className:"demo__play","aria-hidden":!0,children:"▶"}),D.jsx("span",{className:"demo__poster-label",children:"Tutorial"})]}),D.jsx("p",{className:"demo__caption",children:Rh.videoCaption})]})]})})}const gy={receipt:"Receipt",riskScore:"Risk",credential:"Credential",verified:"Verified"};function Gd({type:a,value:e}){return D.jsxs("span",{className:`proof-chip proof-chip--${a}`,children:[D.jsx("span",{className:"proof-chip__dot","aria-hidden":!0}),D.jsx("span",{className:"proof-chip__label",children:gy[a]}),e?D.jsx("span",{className:"proof-chip__value",children:e}):null]})}function _y(){const a=Kr.cards[0],e=Kr.cards[1],i=Kr.cards[2],r=Kr.cards[3];return D.jsx("section",{id:"explore",className:"section explore",children:D.jsxs("div",{className:"container",children:[D.jsx("p",{className:"section-kicker",children:Kr.kicker}),D.jsx("h2",{className:"section-title explore__title",children:Kr.title}),D.jsxs("div",{className:"explore__grid",children:[D.jsxs("article",{id:"explore-agents",className:"explore-card explore-card--major",children:[D.jsxs("header",{className:"explore-card__header",children:[D.jsx("h3",{className:"explore-card__title",children:a.title}),D.jsx("p",{className:"explore-card__verbs",children:a.verbs.join(" · ").toUpperCase()})]}),D.jsx("ul",{className:"explore-roster",children:a.agents.map(o=>D.jsxs("li",{className:"explore-roster__row",children:[D.jsxs("div",{className:"explore-roster__top",children:[D.jsx("span",{className:"explore-roster__name",children:o.name}),D.jsx("span",{className:`terminal-value ${o.positive?"terminal-long":"terminal-short"}`,children:o.roi})]}),D.jsxs("div",{className:"explore-roster__proof",children:[D.jsx(Gd,{type:"verified"}),D.jsx(Gd,{type:"riskScore",value:o.risk}),D.jsx(Gd,{type:"receipt"}),D.jsxs("span",{className:"terminal-value explore-roster__sharpe",children:["Sharpe ",o.sharpe]})]})]},o.name))})]}),D.jsxs("article",{className:"explore-card explore-card--major",children:[D.jsxs("header",{className:"explore-card__header",children:[D.jsx("h3",{className:"explore-card__title",children:e.title}),D.jsx("p",{className:"explore-card__verbs",children:e.verbs.join(" · ").toUpperCase()})]}),D.jsx("p",{className:"explore-card__blurb",children:e.blurb}),D.jsx("ul",{className:"explore-sample",children:e.sample.map(o=>D.jsxs("li",{children:[D.jsx("span",{className:"terminal-label",children:o.label}),D.jsx("span",{className:`terminal-value ${o.positive?"terminal-long":""}`,children:o.value})]},o.label))})]}),D.jsxs("article",{id:"explore-buckets",className:"explore-card explore-card--major",children:[D.jsxs("header",{className:"explore-card__header",children:[D.jsx("h3",{className:"explore-card__title",children:i.title}),D.jsx("p",{className:"explore-card__verbs",children:i.verbs.join(" · ").toUpperCase()})]}),D.jsx("p",{className:"explore-card__blurb",children:i.blurb}),D.jsx("ul",{className:"explore-sample",children:i.sample.map(o=>D.jsxs("li",{children:[D.jsx("span",{className:"terminal-label",children:o.label}),D.jsx("span",{className:"terminal-value explore-sample__status",children:o.value})]},o.label))})]}),D.jsxs("article",{id:"explore-vaults",className:"explore-card explore-card--major",children:[D.jsxs("header",{className:"explore-card__header",children:[D.jsx("h3",{className:"explore-card__title",children:r.title}),D.jsx("p",{className:"explore-card__verbs",children:r.verbs.join(" · ").toUpperCase()})]}),D.jsx("p",{className:"explore-card__blurb",children:r.blurb}),D.jsx("ul",{className:"explore-sample",children:r.sample.map(o=>D.jsxs("li",{children:[D.jsx("span",{className:"terminal-label",children:o.label}),D.jsxs("span",{className:"explore-sample__metrics",children:[D.jsx("span",{className:"terminal-value terminal-long",children:o.value}),D.jsx("span",{className:"terminal-value explore-sample__meta",children:o.meta})]})]},o.label))})]})]})]})})}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Mp="185",vy=0,U_=1,xy=2,hu=1,Sy=2,yl=3,ts=0,Ai=1,Ma=2,$a=0,mo=1,Ch=2,O_=3,P_=4,My=5,cr=100,yy=101,Ey=102,by=103,Ty=104,Ay=200,Ry=201,Cy=202,wy=203,wh=204,Dh=205,Dy=206,Ly=207,Ny=208,Uy=209,Oy=210,Py=211,Iy=212,Fy=213,By=214,Lh=0,Nh=1,Uh=2,So=3,Oh=4,Ph=5,Ih=6,Fh=7,nx=0,zy=1,Hy=2,ba=0,ix=1,ax=2,sx=3,rx=4,ox=5,lx=6,cx=7,ux=300,pr=301,Mo=302,Vd=303,kd=304,Cu=306,Bh=1e3,ua=1001,zh=1002,ti=1003,Gy=1004,Xc=1005,zn=1006,Xd=1007,zs=1008,Ki=1009,fx=1010,dx=1011,Dl=1012,yp=1013,Ra=1014,ya=1015,ns=1016,Ep=1017,bp=1018,Ll=1020,hx=35902,px=35899,mx=1021,gx=1022,fa=1023,is=1026,dr=1027,_x=1028,Tp=1029,mr=1030,Ap=1031,Rp=1033,pu=33776,mu=33777,gu=33778,_u=33779,Hh=35840,Gh=35841,Vh=35842,kh=35843,Xh=36196,Wh=37492,Yh=37496,qh=37488,jh=37489,Su=37490,Zh=37491,Kh=37808,Qh=37809,Jh=37810,$h=37811,ep=37812,tp=37813,np=37814,ip=37815,ap=37816,sp=37817,rp=37818,op=37819,lp=37820,cp=37821,up=36492,fp=36494,dp=36495,hp=36283,pp=36284,Mu=36285,mp=36286,Vy=3200,I_=0,ky=1,Bs="",mi="srgb",yu="srgb-linear",Eu="linear",Kt="srgb",Qr=7680,F_=519,Xy=512,Wy=513,Yy=514,Cp=515,qy=516,jy=517,wp=518,Zy=519,B_=35044,z_="300 es",Ea=2e3,bu=2001;function Ky(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function Tu(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function Qy(){const a=Tu("canvas");return a.style.display="block",a}const H_={};function G_(...a){const e="THREE."+a.shift();console.log(e,...a)}function vx(a){const e=a[0];if(typeof e=="string"&&e.startsWith("TSL:")){const i=a[1];i&&i.isStackTrace?a[0]+=" "+i.getLocation():a[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return a}function ot(...a){a=vx(a);const e="THREE."+a.shift();{const i=a[0];i&&i.isStackTrace?console.warn(i.getError(e)):console.warn(e,...a)}}function Ot(...a){a=vx(a);const e="THREE."+a.shift();{const i=a[0];i&&i.isStackTrace?console.error(i.getError(e)):console.error(e,...a)}}function go(...a){const e=a.join(" ");e in H_||(H_[e]=!0,ot(...a))}function Jy(a,e,i){return new Promise(function(r,o){function c(){switch(a.clientWaitSync(e,a.SYNC_FLUSH_COMMANDS_BIT,0)){case a.WAIT_FAILED:o();break;case a.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:r()}}setTimeout(c,i)})}const $y={[Lh]:Nh,[Uh]:Ih,[Oh]:Fh,[So]:Ph,[Nh]:Lh,[Ih]:Uh,[Fh]:Oh,[Ph]:So};class _r{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const c=o.indexOf(i);c!==-1&&o.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let c=0,u=o.length;c<u;c++)o[c].call(this,e);e.target=null}}}const ri=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let V_=1234567;const Rl=Math.PI/180,Nl=180/Math.PI;function bo(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(ri[a&255]+ri[a>>8&255]+ri[a>>16&255]+ri[a>>24&255]+"-"+ri[e&255]+ri[e>>8&255]+"-"+ri[e>>16&15|64]+ri[e>>24&255]+"-"+ri[i&63|128]+ri[i>>8&255]+"-"+ri[i>>16&255]+ri[i>>24&255]+ri[r&255]+ri[r>>8&255]+ri[r>>16&255]+ri[r>>24&255]).toLowerCase()}function Mt(a,e,i){return Math.max(e,Math.min(i,a))}function Dp(a,e){return(a%e+e)%e}function eE(a,e,i,r,o){return r+(a-e)*(o-r)/(i-e)}function tE(a,e,i){return a!==e?(i-a)/(e-a):0}function Cl(a,e,i){return(1-i)*a+i*e}function nE(a,e,i,r){return Cl(a,e,1-Math.exp(-i*r))}function iE(a,e=1){return e-Math.abs(Dp(a,e*2)-e)}function aE(a,e,i){return a<=e?0:a>=i?1:(a=(a-e)/(i-e),a*a*(3-2*a))}function sE(a,e,i){return a<=e?0:a>=i?1:(a=(a-e)/(i-e),a*a*a*(a*(a*6-15)+10))}function rE(a,e){return a+Math.floor(Math.random()*(e-a+1))}function oE(a,e){return a+Math.random()*(e-a)}function lE(a){return a*(.5-Math.random())}function cE(a){a!==void 0&&(V_=a);let e=V_+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function uE(a){return a*Rl}function fE(a){return a*Nl}function dE(a){return(a&a-1)===0&&a!==0}function hE(a){return Math.pow(2,Math.ceil(Math.log(a)/Math.LN2))}function pE(a){return Math.pow(2,Math.floor(Math.log(a)/Math.LN2))}function mE(a,e,i,r,o){const c=Math.cos,u=Math.sin,h=c(i/2),m=u(i/2),d=c((e+r)/2),g=u((e+r)/2),_=c((e-r)/2),v=u((e-r)/2),x=c((r-e)/2),b=u((r-e)/2);switch(o){case"XYX":a.set(h*g,m*_,m*v,h*d);break;case"YZY":a.set(m*v,h*g,m*_,h*d);break;case"ZXZ":a.set(m*_,m*v,h*g,h*d);break;case"XZX":a.set(h*g,m*b,m*x,h*d);break;case"YXY":a.set(m*x,h*g,m*b,h*d);break;case"ZYZ":a.set(m*b,m*x,h*g,h*d);break;default:ot("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+o)}}function fo(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return a/4294967295;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int32Array:return Math.max(a/2147483647,-1);case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function di(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return Math.round(a*4294967295);case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int32Array:return Math.round(a*2147483647);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Qt={DEG2RAD:Rl,RAD2DEG:Nl,generateUUID:bo,clamp:Mt,euclideanModulo:Dp,mapLinear:eE,inverseLerp:tE,lerp:Cl,damp:nE,pingpong:iE,smoothstep:aE,smootherstep:sE,randInt:rE,randFloat:oE,randFloatSpread:lE,seededRandom:cE,degToRad:uE,radToDeg:fE,isPowerOfTwo:dE,ceilPowerOfTwo:hE,floorPowerOfTwo:pE,setQuaternionFromProperEuler:mE,normalize:di,denormalize:fo},Gp=class Gp{constructor(e=0,i=0){this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,o=e.elements;return this.x=o[0]*i+o[3]*r+o[6],this.y=o[1]*i+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Mt(this.x,e.x,i.x),this.y=Mt(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Mt(this.x,e,i),this.y=Mt(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Mt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Mt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),o=Math.sin(i),c=this.x-e.x,u=this.y-e.y;return this.x=c*r-u*o+e.x,this.y=c*o+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Gp.prototype.isVector2=!0;let zt=Gp;class To{constructor(e=0,i=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=o}static slerpFlat(e,i,r,o,c,u,h){let m=r[o+0],d=r[o+1],g=r[o+2],_=r[o+3],v=c[u+0],x=c[u+1],b=c[u+2],w=c[u+3];if(_!==w||m!==v||d!==x||g!==b){let y=m*v+d*x+g*b+_*w;y<0&&(v=-v,x=-x,b=-b,w=-w,y=-y);let M=1-h;if(y<.9995){const I=Math.acos(y),z=Math.sin(I);M=Math.sin(M*I)/z,h=Math.sin(h*I)/z,m=m*M+v*h,d=d*M+x*h,g=g*M+b*h,_=_*M+w*h}else{m=m*M+v*h,d=d*M+x*h,g=g*M+b*h,_=_*M+w*h;const I=1/Math.sqrt(m*m+d*d+g*g+_*_);m*=I,d*=I,g*=I,_*=I}}e[i]=m,e[i+1]=d,e[i+2]=g,e[i+3]=_}static multiplyQuaternionsFlat(e,i,r,o,c,u){const h=r[o],m=r[o+1],d=r[o+2],g=r[o+3],_=c[u],v=c[u+1],x=c[u+2],b=c[u+3];return e[i]=h*b+g*_+m*x-d*v,e[i+1]=m*b+g*v+d*_-h*x,e[i+2]=d*b+g*x+h*v-m*_,e[i+3]=g*b-h*_-m*v-d*x,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,o){return this._x=e,this._y=i,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,o=e._y,c=e._z,u=e._order,h=Math.cos,m=Math.sin,d=h(r/2),g=h(o/2),_=h(c/2),v=m(r/2),x=m(o/2),b=m(c/2);switch(u){case"XYZ":this._x=v*g*_+d*x*b,this._y=d*x*_-v*g*b,this._z=d*g*b+v*x*_,this._w=d*g*_-v*x*b;break;case"YXZ":this._x=v*g*_+d*x*b,this._y=d*x*_-v*g*b,this._z=d*g*b-v*x*_,this._w=d*g*_+v*x*b;break;case"ZXY":this._x=v*g*_-d*x*b,this._y=d*x*_+v*g*b,this._z=d*g*b+v*x*_,this._w=d*g*_-v*x*b;break;case"ZYX":this._x=v*g*_-d*x*b,this._y=d*x*_+v*g*b,this._z=d*g*b-v*x*_,this._w=d*g*_+v*x*b;break;case"YZX":this._x=v*g*_+d*x*b,this._y=d*x*_+v*g*b,this._z=d*g*b-v*x*_,this._w=d*g*_-v*x*b;break;case"XZY":this._x=v*g*_-d*x*b,this._y=d*x*_-v*g*b,this._z=d*g*b+v*x*_,this._w=d*g*_+v*x*b;break;default:ot("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],o=i[4],c=i[8],u=i[1],h=i[5],m=i[9],d=i[2],g=i[6],_=i[10],v=r+h+_;if(v>0){const x=.5/Math.sqrt(v+1);this._w=.25/x,this._x=(g-m)*x,this._y=(c-d)*x,this._z=(u-o)*x}else if(r>h&&r>_){const x=2*Math.sqrt(1+r-h-_);this._w=(g-m)/x,this._x=.25*x,this._y=(o+u)/x,this._z=(c+d)/x}else if(h>_){const x=2*Math.sqrt(1+h-r-_);this._w=(c-d)/x,this._x=(o+u)/x,this._y=.25*x,this._z=(m+g)/x}else{const x=2*Math.sqrt(1+_-r-h);this._w=(u-o)/x,this._x=(c+d)/x,this._y=(m+g)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Mt(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,i/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,o=e._y,c=e._z,u=e._w,h=i._x,m=i._y,d=i._z,g=i._w;return this._x=r*g+u*h+o*d-c*m,this._y=o*g+u*m+c*h-r*d,this._z=c*g+u*d+r*m-o*h,this._w=u*g-r*h-o*m-c*d,this._onChangeCallback(),this}slerp(e,i){let r=e._x,o=e._y,c=e._z,u=e._w,h=this.dot(e);h<0&&(r=-r,o=-o,c=-c,u=-u,h=-h);let m=1-i;if(h<.9995){const d=Math.acos(h),g=Math.sin(d);m=Math.sin(m*d)/g,i=Math.sin(i*d)/g,this._x=this._x*m+r*i,this._y=this._y*m+o*i,this._z=this._z*m+c*i,this._w=this._w*m+u*i,this._onChangeCallback()}else this._x=this._x*m+r*i,this._y=this._y*m+o*i,this._z=this._z*m+c*i,this._w=this._w*m+u*i,this.normalize();return this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Vp=class Vp{constructor(e=0,i=0,r=0){this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(k_.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(k_.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,o=this.z,c=e.elements;return this.x=c[0]*i+c[3]*r+c[6]*o,this.y=c[1]*i+c[4]*r+c[7]*o,this.z=c[2]*i+c[5]*r+c[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,o=this.z,c=e.elements,u=1/(c[3]*i+c[7]*r+c[11]*o+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*o+c[12])*u,this.y=(c[1]*i+c[5]*r+c[9]*o+c[13])*u,this.z=(c[2]*i+c[6]*r+c[10]*o+c[14])*u,this}applyQuaternion(e){const i=this.x,r=this.y,o=this.z,c=e.x,u=e.y,h=e.z,m=e.w,d=2*(u*o-h*r),g=2*(h*i-c*o),_=2*(c*r-u*i);return this.x=i+m*d+u*_-h*g,this.y=r+m*g+h*d-c*_,this.z=o+m*_+c*g-u*d,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,o=this.z,c=e.elements;return this.x=c[0]*i+c[4]*r+c[8]*o,this.y=c[1]*i+c[5]*r+c[9]*o,this.z=c[2]*i+c[6]*r+c[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Mt(this.x,e.x,i.x),this.y=Mt(this.y,e.y,i.y),this.z=Mt(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Mt(this.x,e,i),this.y=Mt(this.y,e,i),this.z=Mt(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Mt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,o=e.y,c=e.z,u=i.x,h=i.y,m=i.z;return this.x=o*m-c*h,this.y=c*u-r*m,this.z=r*h-o*u,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Wd.copy(this).projectOnVector(e),this.sub(Wd)}reflect(e){return this.sub(Wd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Mt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return i*i+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const o=Math.sin(i)*e;return this.x=o*Math.sin(r),this.y=Math.cos(i)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=o,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Vp.prototype.isVector3=!0;let ee=Vp;const Wd=new ee,k_=new To,kp=class kp{constructor(e,i,r,o,c,u,h,m,d){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,o,c,u,h,m,d)}set(e,i,r,o,c,u,h,m,d){const g=this.elements;return g[0]=e,g[1]=o,g[2]=h,g[3]=i,g[4]=c,g[5]=m,g[6]=r,g[7]=u,g[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,o=i.elements,c=this.elements,u=r[0],h=r[3],m=r[6],d=r[1],g=r[4],_=r[7],v=r[2],x=r[5],b=r[8],w=o[0],y=o[3],M=o[6],I=o[1],z=o[4],R=o[7],O=o[2],L=o[5],B=o[8];return c[0]=u*w+h*I+m*O,c[3]=u*y+h*z+m*L,c[6]=u*M+h*R+m*B,c[1]=d*w+g*I+_*O,c[4]=d*y+g*z+_*L,c[7]=d*M+g*R+_*B,c[2]=v*w+x*I+b*O,c[5]=v*y+x*z+b*L,c[8]=v*M+x*R+b*B,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],o=e[2],c=e[3],u=e[4],h=e[5],m=e[6],d=e[7],g=e[8];return i*u*g-i*h*d-r*c*g+r*h*m+o*c*d-o*u*m}invert(){const e=this.elements,i=e[0],r=e[1],o=e[2],c=e[3],u=e[4],h=e[5],m=e[6],d=e[7],g=e[8],_=g*u-h*d,v=h*m-g*c,x=d*c-u*m,b=i*_+r*v+o*x;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/b;return e[0]=_*w,e[1]=(o*d-g*r)*w,e[2]=(h*r-o*u)*w,e[3]=v*w,e[4]=(g*i-o*m)*w,e[5]=(o*c-h*i)*w,e[6]=x*w,e[7]=(r*m-d*i)*w,e[8]=(u*i-r*c)*w,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,o,c,u,h){const m=Math.cos(c),d=Math.sin(c);return this.set(r*m,r*d,-r*(m*u+d*h)+u+e,-o*d,o*m,-o*(-d*u+m*h)+h+i,0,0,1),this}scale(e,i){return go("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Yd.makeScale(e,i)),this}rotate(e){return go("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Yd.makeRotation(-e)),this}translate(e,i){return go("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Yd.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let o=0;o<9;o++)if(i[o]!==r[o])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};kp.prototype.isMatrix3=!0;let ft=kp;const Yd=new ft,X_=new ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),W_=new ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function gE(){const a={enabled:!0,workingColorSpace:yu,spaces:{},convert:function(o,c,u){return this.enabled===!1||c===u||!c||!u||(this.spaces[c].transfer===Kt&&(o.r=es(o.r),o.g=es(o.g),o.b=es(o.b)),this.spaces[c].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[c].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Kt&&(o.r=_o(o.r),o.g=_o(o.g),o.b=_o(o.b))),o},workingToColorSpace:function(o,c){return this.convert(o,this.workingColorSpace,c)},colorSpaceToWorking:function(o,c){return this.convert(o,c,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Bs?Eu:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,c=this.workingColorSpace){return o.fromArray(this.spaces[c].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,c,u){return o.copy(this.spaces[c].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,c){return go("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),a.workingToColorSpace(o,c)},toWorkingColorSpace:function(o,c){return go("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),a.colorSpaceToWorking(o,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return a.define({[yu]:{primaries:e,whitePoint:r,transfer:Eu,toXYZ:X_,fromXYZ:W_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:mi},outputColorSpaceConfig:{drawingBufferColorSpace:mi}},[mi]:{primaries:e,whitePoint:r,transfer:Kt,toXYZ:X_,fromXYZ:W_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:mi}}}),a}const Dt=gE();function es(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function _o(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}let Jr;class _E{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Jr===void 0&&(Jr=Tu("canvas")),Jr.width=e.width,Jr.height=e.height;const o=Jr.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=Jr}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Tu("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),c=o.data;for(let u=0;u<c.length;u++)c[u]=es(c[u]/255)*255;return r.putImageData(o,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(es(i[r]/255)*255):i[r]=es(i[r]);return{data:i,width:e.width,height:e.height}}else return ot("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let vE=0;class Lp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:vE++}),this.uuid=bo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayWidth,i.displayHeight,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let c;if(Array.isArray(o)){c=[];for(let u=0,h=o.length;u<h;u++)o[u].isDataTexture?c.push(qd(o[u].image)):c.push(qd(o[u]))}else c=qd(o);r.url=c}return i||(e.images[this.uuid]=r),r}}function qd(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?_E.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(ot("Texture: Unable to serialize Texture."),{})}let xE=0;const jd=new ee;class li extends _r{constructor(e=li.DEFAULT_IMAGE,i=li.DEFAULT_MAPPING,r=ua,o=ua,c=zn,u=zs,h=fa,m=Ki,d=li.DEFAULT_ANISOTROPY,g=Bs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:xE++}),this.uuid=bo(),this.name="",this.source=new Lp(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=c,this.minFilter=u,this.anisotropy=d,this.format=h,this.internalFormat=null,this.type=m,this.offset=new zt(0,0),this.repeat=new zt(1,1),this.center=new zt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(jd).x}get height(){return this.source.getSize(jd).y}get depth(){return this.source.getSize(jd).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const r=e[i];if(r===void 0){ot(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const o=this[i];if(o===void 0){ot(`Texture.setValues(): property '${i}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ux)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Bh:e.x=e.x-Math.floor(e.x);break;case ua:e.x=e.x<0?0:1;break;case zh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Bh:e.y=e.y-Math.floor(e.y);break;case ua:e.y=e.y<0?0:1;break;case zh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}li.DEFAULT_IMAGE=null;li.DEFAULT_MAPPING=ux;li.DEFAULT_ANISOTROPY=1;const Xp=class Xp{constructor(e=0,i=0,r=0,o=1){this.x=e,this.y=i,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,o){return this.x=e,this.y=i,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,o=this.z,c=this.w,u=e.elements;return this.x=u[0]*i+u[4]*r+u[8]*o+u[12]*c,this.y=u[1]*i+u[5]*r+u[9]*o+u[13]*c,this.z=u[2]*i+u[6]*r+u[10]*o+u[14]*c,this.w=u[3]*i+u[7]*r+u[11]*o+u[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,o,c;const m=e.elements,d=m[0],g=m[4],_=m[8],v=m[1],x=m[5],b=m[9],w=m[2],y=m[6],M=m[10];if(Math.abs(g-v)<.01&&Math.abs(_-w)<.01&&Math.abs(b-y)<.01){if(Math.abs(g+v)<.1&&Math.abs(_+w)<.1&&Math.abs(b+y)<.1&&Math.abs(d+x+M-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const z=(d+1)/2,R=(x+1)/2,O=(M+1)/2,L=(g+v)/4,B=(_+w)/4,T=(b+y)/4;return z>R&&z>O?z<.01?(r=0,o=.707106781,c=.707106781):(r=Math.sqrt(z),o=L/r,c=B/r):R>O?R<.01?(r=.707106781,o=0,c=.707106781):(o=Math.sqrt(R),r=L/o,c=T/o):O<.01?(r=.707106781,o=.707106781,c=0):(c=Math.sqrt(O),r=B/c,o=T/c),this.set(r,o,c,i),this}let I=Math.sqrt((y-b)*(y-b)+(_-w)*(_-w)+(v-g)*(v-g));return Math.abs(I)<.001&&(I=1),this.x=(y-b)/I,this.y=(_-w)/I,this.z=(v-g)/I,this.w=Math.acos((d+x+M-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Mt(this.x,e.x,i.x),this.y=Mt(this.y,e.y,i.y),this.z=Mt(this.z,e.z,i.z),this.w=Mt(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Mt(this.x,e,i),this.y=Mt(this.y,e,i),this.z=Mt(this.z,e,i),this.w=Mt(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Mt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Xp.prototype.isVector4=!0;let Tn=Xp;class SE extends _r{constructor(e=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},r),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=r.depth,this.scissor=new Tn(0,0,e,i),this.scissorTest=!1,this.viewport=new Tn(0,0,e,i),this.textures=[];const o={width:e,height:i,depth:r.depth},c=new li(o),u=r.count;for(let h=0;h<u;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview,this.useArrayDepthTexture=r.useArrayDepthTexture}_setTextureOptions(e={}){const i={minFilter:zn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let o=0,c=this.textures.length;o<c;o++)this.textures[o].image.width=e,this.textures[o].image.height=i,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const o=Object.assign({},e.textures[i].image);this.textures[i].source=new Lp(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ta extends SE{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class xx extends li{constructor(e=null,i=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:o},this.magFilter=ti,this.minFilter=ti,this.wrapR=ua,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ME extends li{constructor(e=null,i=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:o},this.magFilter=ti,this.minFilter=ti,this.wrapR=ua,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ru=class Ru{constructor(e,i,r,o,c,u,h,m,d,g,_,v,x,b,w,y){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,o,c,u,h,m,d,g,_,v,x,b,w,y)}set(e,i,r,o,c,u,h,m,d,g,_,v,x,b,w,y){const M=this.elements;return M[0]=e,M[4]=i,M[8]=r,M[12]=o,M[1]=c,M[5]=u,M[9]=h,M[13]=m,M[2]=d,M[6]=g,M[10]=_,M[14]=v,M[3]=x,M[7]=b,M[11]=w,M[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ru().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return this.determinantAffine()===0?(e.set(1,0,0),i.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const i=this.elements,r=e.elements,o=1/$r.setFromMatrixColumn(e,0).length(),c=1/$r.setFromMatrixColumn(e,1).length(),u=1/$r.setFromMatrixColumn(e,2).length();return i[0]=r[0]*o,i[1]=r[1]*o,i[2]=r[2]*o,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*u,i[9]=r[9]*u,i[10]=r[10]*u,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,o=e.y,c=e.z,u=Math.cos(r),h=Math.sin(r),m=Math.cos(o),d=Math.sin(o),g=Math.cos(c),_=Math.sin(c);if(e.order==="XYZ"){const v=u*g,x=u*_,b=h*g,w=h*_;i[0]=m*g,i[4]=-m*_,i[8]=d,i[1]=x+b*d,i[5]=v-w*d,i[9]=-h*m,i[2]=w-v*d,i[6]=b+x*d,i[10]=u*m}else if(e.order==="YXZ"){const v=m*g,x=m*_,b=d*g,w=d*_;i[0]=v+w*h,i[4]=b*h-x,i[8]=u*d,i[1]=u*_,i[5]=u*g,i[9]=-h,i[2]=x*h-b,i[6]=w+v*h,i[10]=u*m}else if(e.order==="ZXY"){const v=m*g,x=m*_,b=d*g,w=d*_;i[0]=v-w*h,i[4]=-u*_,i[8]=b+x*h,i[1]=x+b*h,i[5]=u*g,i[9]=w-v*h,i[2]=-u*d,i[6]=h,i[10]=u*m}else if(e.order==="ZYX"){const v=u*g,x=u*_,b=h*g,w=h*_;i[0]=m*g,i[4]=b*d-x,i[8]=v*d+w,i[1]=m*_,i[5]=w*d+v,i[9]=x*d-b,i[2]=-d,i[6]=h*m,i[10]=u*m}else if(e.order==="YZX"){const v=u*m,x=u*d,b=h*m,w=h*d;i[0]=m*g,i[4]=w-v*_,i[8]=b*_+x,i[1]=_,i[5]=u*g,i[9]=-h*g,i[2]=-d*g,i[6]=x*_+b,i[10]=v-w*_}else if(e.order==="XZY"){const v=u*m,x=u*d,b=h*m,w=h*d;i[0]=m*g,i[4]=-_,i[8]=d*g,i[1]=v*_+w,i[5]=u*g,i[9]=x*_-b,i[2]=b*_-x,i[6]=h*g,i[10]=w*_+v}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(yE,e,EE)}lookAt(e,i,r){const o=this.elements;return Ii.subVectors(e,i),Ii.lengthSq()===0&&(Ii.z=1),Ii.normalize(),Ns.crossVectors(r,Ii),Ns.lengthSq()===0&&(Math.abs(r.z)===1?Ii.x+=1e-4:Ii.z+=1e-4,Ii.normalize(),Ns.crossVectors(r,Ii)),Ns.normalize(),Wc.crossVectors(Ii,Ns),o[0]=Ns.x,o[4]=Wc.x,o[8]=Ii.x,o[1]=Ns.y,o[5]=Wc.y,o[9]=Ii.y,o[2]=Ns.z,o[6]=Wc.z,o[10]=Ii.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,o=i.elements,c=this.elements,u=r[0],h=r[4],m=r[8],d=r[12],g=r[1],_=r[5],v=r[9],x=r[13],b=r[2],w=r[6],y=r[10],M=r[14],I=r[3],z=r[7],R=r[11],O=r[15],L=o[0],B=o[4],T=o[8],N=o[12],X=o[1],V=o[5],j=o[9],ce=o[13],ue=o[2],Y=o[6],F=o[10],H=o[14],$=o[3],me=o[7],xe=o[11],P=o[15];return c[0]=u*L+h*X+m*ue+d*$,c[4]=u*B+h*V+m*Y+d*me,c[8]=u*T+h*j+m*F+d*xe,c[12]=u*N+h*ce+m*H+d*P,c[1]=g*L+_*X+v*ue+x*$,c[5]=g*B+_*V+v*Y+x*me,c[9]=g*T+_*j+v*F+x*xe,c[13]=g*N+_*ce+v*H+x*P,c[2]=b*L+w*X+y*ue+M*$,c[6]=b*B+w*V+y*Y+M*me,c[10]=b*T+w*j+y*F+M*xe,c[14]=b*N+w*ce+y*H+M*P,c[3]=I*L+z*X+R*ue+O*$,c[7]=I*B+z*V+R*Y+O*me,c[11]=I*T+z*j+R*F+O*xe,c[15]=I*N+z*ce+R*H+O*P,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],o=e[8],c=e[12],u=e[1],h=e[5],m=e[9],d=e[13],g=e[2],_=e[6],v=e[10],x=e[14],b=e[3],w=e[7],y=e[11],M=e[15],I=m*x-d*v,z=h*x-d*_,R=h*v-m*_,O=u*x-d*g,L=u*v-m*g,B=u*_-h*g;return i*(w*I-y*z+M*R)-r*(b*I-y*O+M*L)+o*(b*z-w*O+M*B)-c*(b*R-w*L+y*B)}determinantAffine(){const e=this.elements,i=e[0],r=e[4],o=e[8],c=e[1],u=e[5],h=e[9],m=e[2],d=e[6],g=e[10];return i*(u*g-h*d)-r*(c*g-h*m)+o*(c*d-u*m)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=i,o[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],o=e[2],c=e[3],u=e[4],h=e[5],m=e[6],d=e[7],g=e[8],_=e[9],v=e[10],x=e[11],b=e[12],w=e[13],y=e[14],M=e[15],I=i*h-r*u,z=i*m-o*u,R=i*d-c*u,O=r*m-o*h,L=r*d-c*h,B=o*d-c*m,T=g*w-_*b,N=g*y-v*b,X=g*M-x*b,V=_*y-v*w,j=_*M-x*w,ce=v*M-x*y,ue=I*ce-z*j+R*V+O*X-L*N+B*T;if(ue===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const Y=1/ue;return e[0]=(h*ce-m*j+d*V)*Y,e[1]=(o*j-r*ce-c*V)*Y,e[2]=(w*B-y*L+M*O)*Y,e[3]=(v*L-_*B-x*O)*Y,e[4]=(m*X-u*ce-d*N)*Y,e[5]=(i*ce-o*X+c*N)*Y,e[6]=(y*R-b*B-M*z)*Y,e[7]=(g*B-v*R+x*z)*Y,e[8]=(u*j-h*X+d*T)*Y,e[9]=(r*X-i*j-c*T)*Y,e[10]=(b*L-w*R+M*I)*Y,e[11]=(_*R-g*L-x*I)*Y,e[12]=(h*N-u*V-m*T)*Y,e[13]=(i*V-r*N+o*T)*Y,e[14]=(w*z-b*O-y*I)*Y,e[15]=(g*O-_*z+v*I)*Y,this}scale(e){const i=this.elements,r=e.x,o=e.y,c=e.z;return i[0]*=r,i[4]*=o,i[8]*=c,i[1]*=r,i[5]*=o,i[9]*=c,i[2]*=r,i[6]*=o,i[10]*=c,i[3]*=r,i[7]*=o,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,o))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),o=Math.sin(i),c=1-r,u=e.x,h=e.y,m=e.z,d=c*u,g=c*h;return this.set(d*u+r,d*h-o*m,d*m+o*h,0,d*h+o*m,g*h+r,g*m-o*u,0,d*m-o*h,g*m+o*u,c*m*m+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,o,c,u){return this.set(1,r,c,0,e,1,u,0,i,o,1,0,0,0,0,1),this}compose(e,i,r){const o=this.elements,c=i._x,u=i._y,h=i._z,m=i._w,d=c+c,g=u+u,_=h+h,v=c*d,x=c*g,b=c*_,w=u*g,y=u*_,M=h*_,I=m*d,z=m*g,R=m*_,O=r.x,L=r.y,B=r.z;return o[0]=(1-(w+M))*O,o[1]=(x+R)*O,o[2]=(b-z)*O,o[3]=0,o[4]=(x-R)*L,o[5]=(1-(v+M))*L,o[6]=(y+I)*L,o[7]=0,o[8]=(b+z)*B,o[9]=(y-I)*B,o[10]=(1-(v+w))*B,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,i,r){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const c=this.determinantAffine();if(c===0)return r.set(1,1,1),i.identity(),this;let u=$r.set(o[0],o[1],o[2]).length();const h=$r.set(o[4],o[5],o[6]).length(),m=$r.set(o[8],o[9],o[10]).length();c<0&&(u=-u),ra.copy(this);const d=1/u,g=1/h,_=1/m;return ra.elements[0]*=d,ra.elements[1]*=d,ra.elements[2]*=d,ra.elements[4]*=g,ra.elements[5]*=g,ra.elements[6]*=g,ra.elements[8]*=_,ra.elements[9]*=_,ra.elements[10]*=_,i.setFromRotationMatrix(ra),r.x=u,r.y=h,r.z=m,this}makePerspective(e,i,r,o,c,u,h=Ea,m=!1){const d=this.elements,g=2*c/(i-e),_=2*c/(r-o),v=(i+e)/(i-e),x=(r+o)/(r-o);let b,w;if(m)b=c/(u-c),w=u*c/(u-c);else if(h===Ea)b=-(u+c)/(u-c),w=-2*u*c/(u-c);else if(h===bu)b=-u/(u-c),w=-u*c/(u-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return d[0]=g,d[4]=0,d[8]=v,d[12]=0,d[1]=0,d[5]=_,d[9]=x,d[13]=0,d[2]=0,d[6]=0,d[10]=b,d[14]=w,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,i,r,o,c,u,h=Ea,m=!1){const d=this.elements,g=2/(i-e),_=2/(r-o),v=-(i+e)/(i-e),x=-(r+o)/(r-o);let b,w;if(m)b=1/(u-c),w=u/(u-c);else if(h===Ea)b=-2/(u-c),w=-(u+c)/(u-c);else if(h===bu)b=-1/(u-c),w=-c/(u-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return d[0]=g,d[4]=0,d[8]=0,d[12]=v,d[1]=0,d[5]=_,d[9]=0,d[13]=x,d[2]=0,d[6]=0,d[10]=b,d[14]=w,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let o=0;o<16;o++)if(i[o]!==r[o])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}};Ru.prototype.isMatrix4=!0;let Dn=Ru;const $r=new ee,ra=new Dn,yE=new ee(0,0,0),EE=new ee(1,1,1),Ns=new ee,Wc=new ee,Ii=new ee,Y_=new Dn,q_=new To;class gr{constructor(e=0,i=0,r=0,o=gr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,o=this._order){return this._x=e,this._y=i,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const o=e.elements,c=o[0],u=o[4],h=o[8],m=o[1],d=o[5],g=o[9],_=o[2],v=o[6],x=o[10];switch(i){case"XYZ":this._y=Math.asin(Mt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,x),this._z=Math.atan2(-u,c)):(this._x=Math.atan2(v,d),this._z=0);break;case"YXZ":this._x=Math.asin(-Mt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(h,x),this._z=Math.atan2(m,d)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(Mt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-_,x),this._z=Math.atan2(-u,d)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Mt(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(v,x),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-u,d));break;case"YZX":this._z=Math.asin(Mt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,d),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(h,x));break;case"XZY":this._z=Math.asin(-Mt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(v,d),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-g,x),this._y=0);break;default:ot("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return Y_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Y_,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return q_.setFromEuler(this),this.setFromQuaternion(q_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}gr.DEFAULT_ORDER="XYZ";class Sx{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let bE=0;const j_=new ee,eo=new To,Ya=new Dn,Yc=new ee,gl=new ee,TE=new ee,AE=new To,Z_=new ee(1,0,0),K_=new ee(0,1,0),Q_=new ee(0,0,1),J_={type:"added"},RE={type:"removed"},to={type:"childadded",child:null},Zd={type:"childremoved",child:null};class Bi extends _r{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bE++}),this.uuid=bo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Bi.DEFAULT_UP.clone();const e=new ee,i=new gr,r=new To,o=new ee(1,1,1);function c(){r.setFromEuler(i,!1)}function u(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Dn},normalMatrix:{value:new ft}}),this.matrix=new Dn,this.matrixWorld=new Dn,this.matrixAutoUpdate=Bi.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Bi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Sx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return eo.setFromAxisAngle(e,i),this.quaternion.multiply(eo),this}rotateOnWorldAxis(e,i){return eo.setFromAxisAngle(e,i),this.quaternion.premultiply(eo),this}rotateX(e){return this.rotateOnAxis(Z_,e)}rotateY(e){return this.rotateOnAxis(K_,e)}rotateZ(e){return this.rotateOnAxis(Q_,e)}translateOnAxis(e,i){return j_.copy(e).applyQuaternion(this.quaternion),this.position.add(j_.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(Z_,e)}translateY(e){return this.translateOnAxis(K_,e)}translateZ(e){return this.translateOnAxis(Q_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ya.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?Yc.copy(e):Yc.set(e,i,r);const o=this.parent;this.updateWorldMatrix(!0,!1),gl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ya.lookAt(gl,Yc,this.up):Ya.lookAt(Yc,gl,this.up),this.quaternion.setFromRotationMatrix(Ya),o&&(Ya.extractRotation(o.matrixWorld),eo.setFromRotationMatrix(Ya),this.quaternion.premultiply(eo.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(Ot("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(J_),to.child=e,this.dispatchEvent(to),to.child=null):Ot("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(RE),Zd.child=e,this.dispatchEvent(Zd),Zd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ya.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ya.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ya),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(J_),to.child=e,this.dispatchEvent(to),to.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,o=this.children.length;r<o;r++){const u=this.children[r].getObjectByProperty(e,i);if(u!==void 0)return u}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const o=this.children;for(let c=0,u=o.length;c<u;c++)o[c].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gl,e,TE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gl,AE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const i=e.x,r=e.y,o=e.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*r-c[8]*o,c[13]+=r-c[1]*i-c[5]*r-c[9]*o,c[14]+=o-c[2]*i-c[6]*r-c[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i,r=!1){const o=this.parent;if(e===!0&&o!==null&&o.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),i===!0){const c=this.children;for(let u=0,h=c.length;u<h;u++)c[u].updateWorldMatrix(!1,!0,r)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),this.static!==!1&&(o.static=this.static),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(h=>({...h})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function c(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=c(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let d=0,g=m.length;d<g;d++){const _=m[d];c(e.shapes,_)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,d=this.material.length;m<d;m++)h.push(c(e.materials,this.material[m]));o.material=h}else o.material=c(e.materials,this.material);if(this.children.length>0){o.children=[];for(let h=0;h<this.children.length;h++)o.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];o.animations.push(c(e.animations,m))}}if(i){const h=u(e.geometries),m=u(e.materials),d=u(e.textures),g=u(e.images),_=u(e.shapes),v=u(e.skeletons),x=u(e.animations),b=u(e.nodes);h.length>0&&(r.geometries=h),m.length>0&&(r.materials=m),d.length>0&&(r.textures=d),g.length>0&&(r.images=g),_.length>0&&(r.shapes=_),v.length>0&&(r.skeletons=v),x.length>0&&(r.animations=x),b.length>0&&(r.nodes=b)}return r.object=o,r;function u(h){const m=[];for(const d in h){const g=h[d];delete g.metadata,m.push(g)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}Bi.DEFAULT_UP=new ee(0,1,0);Bi.DEFAULT_MATRIX_AUTO_UPDATE=!0;Bi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class El extends Bi{constructor(){super(),this.isGroup=!0,this.type="Group"}}const CE={type:"move"};class Kd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new El,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new El,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ee,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ee),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new El,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ee,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ee,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let o=null,c=null,u=null;const h=this._targetRay,m=this._grip,d=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(d&&e.hand){u=!0;for(const w of e.hand.values()){const y=i.getJointPose(w,r),M=this._getHandJoint(d,w);y!==null&&(M.matrix.fromArray(y.transform.matrix),M.matrix.decompose(M.position,M.rotation,M.scale),M.matrixWorldNeedsUpdate=!0,M.jointRadius=y.radius),M.visible=y!==null}const g=d.joints["index-finger-tip"],_=d.joints["thumb-tip"],v=g.position.distanceTo(_.position),x=.02,b=.005;d.inputState.pinching&&v>x+b?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&v<=x-b&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,r),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1,m.eventsEnabled&&m.dispatchEvent({type:"gripUpdated",data:e,target:this})));h!==null&&(o=i.getPose(e.targetRaySpace,r),o===null&&c!==null&&(o=c),o!==null&&(h.matrix.fromArray(o.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,o.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(o.linearVelocity)):h.hasLinearVelocity=!1,o.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(o.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(CE)))}return h!==null&&(h.visible=o!==null),m!==null&&(m.visible=c!==null),d!==null&&(d.visible=u!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new El;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}const Mx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Us={h:0,s:0,l:0},qc={h:0,s:0,l:0};function Qd(a,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?a+(e-a)*6*i:i<1/2?e:i<2/3?a+(e-a)*6*(2/3-i):a}class Nt{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=mi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Dt.colorSpaceToWorking(this,i),this}setRGB(e,i,r,o=Dt.workingColorSpace){return this.r=e,this.g=i,this.b=r,Dt.colorSpaceToWorking(this,o),this}setHSL(e,i,r,o=Dt.workingColorSpace){if(e=Dp(e,1),i=Mt(i,0,1),r=Mt(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,u=2*r-c;this.r=Qd(u,c,e+1/3),this.g=Qd(u,c,e),this.b=Qd(u,c,e-1/3)}return Dt.colorSpaceToWorking(this,o),this}setStyle(e,i=mi){function r(c){c!==void 0&&parseFloat(c)<1&&ot("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const u=o[1],h=o[2];switch(u){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:ot("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=o[1],u=c.length;if(u===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(u===6)return this.setHex(parseInt(c,16),i);ot("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=mi){const r=Mx[e.toLowerCase()];return r!==void 0?this.setHex(r,i):ot("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=es(e.r),this.g=es(e.g),this.b=es(e.b),this}copyLinearToSRGB(e){return this.r=_o(e.r),this.g=_o(e.g),this.b=_o(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=mi){return Dt.workingToColorSpace(oi.copy(this),e),Math.round(Mt(oi.r*255,0,255))*65536+Math.round(Mt(oi.g*255,0,255))*256+Math.round(Mt(oi.b*255,0,255))}getHexString(e=mi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Dt.workingColorSpace){Dt.workingToColorSpace(oi.copy(this),i);const r=oi.r,o=oi.g,c=oi.b,u=Math.max(r,o,c),h=Math.min(r,o,c);let m,d;const g=(h+u)/2;if(h===u)m=0,d=0;else{const _=u-h;switch(d=g<=.5?_/(u+h):_/(2-u-h),u){case r:m=(o-c)/_+(o<c?6:0);break;case o:m=(c-r)/_+2;break;case c:m=(r-o)/_+4;break}m/=6}return e.h=m,e.s=d,e.l=g,e}getRGB(e,i=Dt.workingColorSpace){return Dt.workingToColorSpace(oi.copy(this),i),e.r=oi.r,e.g=oi.g,e.b=oi.b,e}getStyle(e=mi){Dt.workingToColorSpace(oi.copy(this),e);const i=oi.r,r=oi.g,o=oi.b;return e!==mi?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,i,r){return this.getHSL(Us),this.setHSL(Us.h+e,Us.s+i,Us.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(Us),e.getHSL(qc);const r=Cl(Us.h,qc.h,i),o=Cl(Us.s,qc.s,i),c=Cl(Us.l,qc.l,i);return this.setHSL(r,o,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,o=this.b,c=e.elements;return this.r=c[0]*i+c[3]*r+c[6]*o,this.g=c[1]*i+c[4]*r+c[7]*o,this.b=c[2]*i+c[5]*r+c[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const oi=new Nt;Nt.NAMES=Mx;class wE extends Bi{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new gr,this.environmentIntensity=1,this.environmentRotation=new gr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const oa=new ee,qa=new ee,Jd=new ee,ja=new ee,no=new ee,io=new ee,$_=new ee,$d=new ee,eh=new ee,th=new ee,nh=new Tn,ih=new Tn,ah=new Tn;class ca{constructor(e=new ee,i=new ee,r=new ee){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,o){o.subVectors(r,i),oa.subVectors(e,i),o.cross(oa);const c=o.lengthSq();return c>0?o.multiplyScalar(1/Math.sqrt(c)):o.set(0,0,0)}static getBarycoord(e,i,r,o,c){oa.subVectors(o,i),qa.subVectors(r,i),Jd.subVectors(e,i);const u=oa.dot(oa),h=oa.dot(qa),m=oa.dot(Jd),d=qa.dot(qa),g=qa.dot(Jd),_=u*d-h*h;if(_===0)return c.set(0,0,0),null;const v=1/_,x=(d*m-h*g)*v,b=(u*g-h*m)*v;return c.set(1-x-b,b,x)}static containsPoint(e,i,r,o){return this.getBarycoord(e,i,r,o,ja)===null?!1:ja.x>=0&&ja.y>=0&&ja.x+ja.y<=1}static getInterpolation(e,i,r,o,c,u,h,m){return this.getBarycoord(e,i,r,o,ja)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,ja.x),m.addScaledVector(u,ja.y),m.addScaledVector(h,ja.z),m)}static getInterpolatedAttribute(e,i,r,o,c,u){return nh.setScalar(0),ih.setScalar(0),ah.setScalar(0),nh.fromBufferAttribute(e,i),ih.fromBufferAttribute(e,r),ah.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(nh,c.x),u.addScaledVector(ih,c.y),u.addScaledVector(ah,c.z),u}static isFrontFacing(e,i,r,o){return oa.subVectors(r,i),qa.subVectors(e,i),oa.cross(qa).dot(o)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,o){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,i,r,o){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return oa.subVectors(this.c,this.b),qa.subVectors(this.a,this.b),oa.cross(qa).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ca.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return ca.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,o,c){return ca.getInterpolation(e,this.a,this.b,this.c,i,r,o,c)}containsPoint(e){return ca.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ca.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,o=this.b,c=this.c;let u,h;no.subVectors(o,r),io.subVectors(c,r),$d.subVectors(e,r);const m=no.dot($d),d=io.dot($d);if(m<=0&&d<=0)return i.copy(r);eh.subVectors(e,o);const g=no.dot(eh),_=io.dot(eh);if(g>=0&&_<=g)return i.copy(o);const v=m*_-g*d;if(v<=0&&m>=0&&g<=0)return u=m/(m-g),i.copy(r).addScaledVector(no,u);th.subVectors(e,c);const x=no.dot(th),b=io.dot(th);if(b>=0&&x<=b)return i.copy(c);const w=x*d-m*b;if(w<=0&&d>=0&&b<=0)return h=d/(d-b),i.copy(r).addScaledVector(io,h);const y=g*b-x*_;if(y<=0&&_-g>=0&&x-b>=0)return $_.subVectors(c,o),h=(_-g)/(_-g+(x-b)),i.copy(o).addScaledVector($_,h);const M=1/(y+w+v);return u=w*M,h=v*M,i.copy(r).addScaledVector(no,u).addScaledVector(io,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Ol{constructor(e=new ee(1/0,1/0,1/0),i=new ee(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(la.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(la.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=la.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let u=0,h=c.count;u<h;u++)e.isMesh===!0?e.getVertexPosition(u,la):la.fromBufferAttribute(c,u),la.applyMatrix4(e.matrixWorld),this.expandByPoint(la);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),jc.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),jc.copy(r.boundingBox)),jc.applyMatrix4(e.matrixWorld),this.union(jc)}const o=e.children;for(let c=0,u=o.length;c<u;c++)this.expandByObject(o[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,la),la.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(_l),Zc.subVectors(this.max,_l),ao.subVectors(e.a,_l),so.subVectors(e.b,_l),ro.subVectors(e.c,_l),Os.subVectors(so,ao),Ps.subVectors(ro,so),ir.subVectors(ao,ro);let i=[0,-Os.z,Os.y,0,-Ps.z,Ps.y,0,-ir.z,ir.y,Os.z,0,-Os.x,Ps.z,0,-Ps.x,ir.z,0,-ir.x,-Os.y,Os.x,0,-Ps.y,Ps.x,0,-ir.y,ir.x,0];return!sh(i,ao,so,ro,Zc)||(i=[1,0,0,0,1,0,0,0,1],!sh(i,ao,so,ro,Zc))?!1:(Kc.crossVectors(Os,Ps),i=[Kc.x,Kc.y,Kc.z],sh(i,ao,so,ro,Zc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,la).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(la).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Za[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Za[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Za[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Za[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Za[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Za[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Za[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Za[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Za),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Za=[new ee,new ee,new ee,new ee,new ee,new ee,new ee,new ee],la=new ee,jc=new Ol,ao=new ee,so=new ee,ro=new ee,Os=new ee,Ps=new ee,ir=new ee,_l=new ee,Zc=new ee,Kc=new ee,ar=new ee;function sh(a,e,i,r,o){for(let c=0,u=a.length-3;c<=u;c+=3){ar.fromArray(a,c);const h=o.x*Math.abs(ar.x)+o.y*Math.abs(ar.y)+o.z*Math.abs(ar.z),m=e.dot(ar),d=i.dot(ar),g=r.dot(ar);if(Math.max(-Math.max(m,d,g),Math.min(m,d,g))>h)return!1}return!0}const Fn=new ee,Qc=new zt;let DE=0;class Aa extends _r{constructor(e,i,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:DE++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=B_,this.updateRanges=[],this.gpuType=ya,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let o=0,c=this.itemSize;o<c;o++)this.array[e+o]=i.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)Qc.fromBufferAttribute(this,i),Qc.applyMatrix3(e),this.setXY(i,Qc.x,Qc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)Fn.fromBufferAttribute(this,i),Fn.applyMatrix3(e),this.setXYZ(i,Fn.x,Fn.y,Fn.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)Fn.fromBufferAttribute(this,i),Fn.applyMatrix4(e),this.setXYZ(i,Fn.x,Fn.y,Fn.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)Fn.fromBufferAttribute(this,i),Fn.applyNormalMatrix(e),this.setXYZ(i,Fn.x,Fn.y,Fn.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)Fn.fromBufferAttribute(this,i),Fn.transformDirection(e),this.setXYZ(i,Fn.x,Fn.y,Fn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=fo(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=di(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=fo(i,this.array)),i}setX(e,i){return this.normalized&&(i=di(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=fo(i,this.array)),i}setY(e,i){return this.normalized&&(i=di(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=fo(i,this.array)),i}setZ(e,i){return this.normalized&&(i=di(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=fo(i,this.array)),i}setW(e,i){return this.normalized&&(i=di(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=di(i,this.array),r=di(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,o){return e*=this.itemSize,this.normalized&&(i=di(i,this.array),r=di(r,this.array),o=di(o,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,i,r,o,c){return e*=this.itemSize,this.normalized&&(i=di(i,this.array),r=di(r,this.array),o=di(o,this.array),c=di(c,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==B_&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class yx extends Aa{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class Ex extends Aa{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class Qi extends Aa{constructor(e,i,r){super(new Float32Array(e),i,r)}}const LE=new Ol,vl=new ee,rh=new ee;class Np{constructor(e=new ee,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):LE.setFromPoints(e).getCenter(r);let o=0;for(let c=0,u=e.length;c<u;c++)o=Math.max(o,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;vl.subVectors(e,this.center);const i=vl.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),o=(r-this.radius)*.5;this.center.addScaledVector(vl,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(rh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(vl.copy(e.center).add(rh)),this.expandByPoint(vl.copy(e.center).sub(rh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let NE=0;const ji=new Dn,oh=new Bi,oo=new ee,Fi=new Ol,xl=new Ol,Wn=new ee;class $i extends _r{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:NE++}),this.uuid=bo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ky(e)?Ex:yx)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new ft().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return ji.makeRotationFromQuaternion(e),this.applyMatrix4(ji),this}rotateX(e){return ji.makeRotationX(e),this.applyMatrix4(ji),this}rotateY(e){return ji.makeRotationY(e),this.applyMatrix4(ji),this}rotateZ(e){return ji.makeRotationZ(e),this.applyMatrix4(ji),this}translate(e,i,r){return ji.makeTranslation(e,i,r),this.applyMatrix4(ji),this}scale(e,i,r){return ji.makeScale(e,i,r),this.applyMatrix4(ji),this}lookAt(e){return oh.lookAt(e),oh.updateMatrix(),this.applyMatrix4(oh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(oo).negate(),this.translate(oo.x,oo.y,oo.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let o=0,c=e.length;o<c;o++){const u=e[o];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new Qi(r,3))}else{const r=Math.min(e.length,i.count);for(let o=0;o<r;o++){const c=e[o];i.setXYZ(o,c.x,c.y,c.z||0)}e.length>i.count&&ot("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ol);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ot("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ee(-1/0,-1/0,-1/0),new ee(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,o=i.length;r<o;r++){const c=i[r];Fi.setFromBufferAttribute(c),this.morphTargetsRelative?(Wn.addVectors(this.boundingBox.min,Fi.min),this.boundingBox.expandByPoint(Wn),Wn.addVectors(this.boundingBox.max,Fi.max),this.boundingBox.expandByPoint(Wn)):(this.boundingBox.expandByPoint(Fi.min),this.boundingBox.expandByPoint(Fi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ot('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Np);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ot("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ee,1/0);return}if(e){const r=this.boundingSphere.center;if(Fi.setFromBufferAttribute(e),i)for(let c=0,u=i.length;c<u;c++){const h=i[c];xl.setFromBufferAttribute(h),this.morphTargetsRelative?(Wn.addVectors(Fi.min,xl.min),Fi.expandByPoint(Wn),Wn.addVectors(Fi.max,xl.max),Fi.expandByPoint(Wn)):(Fi.expandByPoint(xl.min),Fi.expandByPoint(xl.max))}Fi.getCenter(r);let o=0;for(let c=0,u=e.count;c<u;c++)Wn.fromBufferAttribute(e,c),o=Math.max(o,r.distanceToSquared(Wn));if(i)for(let c=0,u=i.length;c<u;c++){const h=i[c],m=this.morphTargetsRelative;for(let d=0,g=h.count;d<g;d++)Wn.fromBufferAttribute(h,d),m&&(oo.fromBufferAttribute(e,d),Wn.add(oo)),o=Math.max(o,r.distanceToSquared(Wn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Ot('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Ot("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,o=i.normal,c=i.uv;let u=this.getAttribute("tangent");(u===void 0||u.count!==r.count)&&(u=new Aa(new Float32Array(4*r.count),4),this.setAttribute("tangent",u));const h=[],m=[];for(let T=0;T<r.count;T++)h[T]=new ee,m[T]=new ee;const d=new ee,g=new ee,_=new ee,v=new zt,x=new zt,b=new zt,w=new ee,y=new ee;function M(T,N,X){d.fromBufferAttribute(r,T),g.fromBufferAttribute(r,N),_.fromBufferAttribute(r,X),v.fromBufferAttribute(c,T),x.fromBufferAttribute(c,N),b.fromBufferAttribute(c,X),g.sub(d),_.sub(d),x.sub(v),b.sub(v);const V=1/(x.x*b.y-b.x*x.y);isFinite(V)&&(w.copy(g).multiplyScalar(b.y).addScaledVector(_,-x.y).multiplyScalar(V),y.copy(_).multiplyScalar(x.x).addScaledVector(g,-b.x).multiplyScalar(V),h[T].add(w),h[N].add(w),h[X].add(w),m[T].add(y),m[N].add(y),m[X].add(y))}let I=this.groups;I.length===0&&(I=[{start:0,count:e.count}]);for(let T=0,N=I.length;T<N;++T){const X=I[T],V=X.start,j=X.count;for(let ce=V,ue=V+j;ce<ue;ce+=3)M(e.getX(ce+0),e.getX(ce+1),e.getX(ce+2))}const z=new ee,R=new ee,O=new ee,L=new ee;function B(T){O.fromBufferAttribute(o,T),L.copy(O);const N=h[T];z.copy(N),z.sub(O.multiplyScalar(O.dot(N))).normalize(),R.crossVectors(L,N);const V=R.dot(m[T])<0?-1:1;u.setXYZW(T,z.x,z.y,z.z,V)}for(let T=0,N=I.length;T<N;++T){const X=I[T],V=X.start,j=X.count;for(let ce=V,ue=V+j;ce<ue;ce+=3)B(e.getX(ce+0)),B(e.getX(ce+1)),B(e.getX(ce+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==i.count)r=new Aa(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let v=0,x=r.count;v<x;v++)r.setXYZ(v,0,0,0);const o=new ee,c=new ee,u=new ee,h=new ee,m=new ee,d=new ee,g=new ee,_=new ee;if(e)for(let v=0,x=e.count;v<x;v+=3){const b=e.getX(v+0),w=e.getX(v+1),y=e.getX(v+2);o.fromBufferAttribute(i,b),c.fromBufferAttribute(i,w),u.fromBufferAttribute(i,y),g.subVectors(u,c),_.subVectors(o,c),g.cross(_),h.fromBufferAttribute(r,b),m.fromBufferAttribute(r,w),d.fromBufferAttribute(r,y),h.add(g),m.add(g),d.add(g),r.setXYZ(b,h.x,h.y,h.z),r.setXYZ(w,m.x,m.y,m.z),r.setXYZ(y,d.x,d.y,d.z)}else for(let v=0,x=i.count;v<x;v+=3)o.fromBufferAttribute(i,v+0),c.fromBufferAttribute(i,v+1),u.fromBufferAttribute(i,v+2),g.subVectors(u,c),_.subVectors(o,c),g.cross(_),r.setXYZ(v+0,g.x,g.y,g.z),r.setXYZ(v+1,g.x,g.y,g.z),r.setXYZ(v+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)Wn.fromBufferAttribute(e,i),Wn.normalize(),e.setXYZ(i,Wn.x,Wn.y,Wn.z)}toNonIndexed(){function e(h,m){const d=h.array,g=h.itemSize,_=h.normalized,v=new d.constructor(m.length*g);let x=0,b=0;for(let w=0,y=m.length;w<y;w++){h.isInterleavedBufferAttribute?x=m[w]*h.data.stride+h.offset:x=m[w]*g;for(let M=0;M<g;M++)v[b++]=d[x++]}return new Aa(v,g,_)}if(this.index===null)return ot("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new $i,r=this.index.array,o=this.attributes;for(const h in o){const m=o[h],d=e(m,r);i.setAttribute(h,d)}const c=this.morphAttributes;for(const h in c){const m=[],d=c[h];for(let g=0,_=d.length;g<_;g++){const v=d[g],x=e(v,r);m.push(x)}i.morphAttributes[h]=m}i.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let h=0,m=u.length;h<m;h++){const d=u[h];i.addGroup(d.start,d.count,d.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const m=this.parameters;for(const d in m)m[d]!==void 0&&(e[d]=m[d]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const d=r[m];e.data.attributes[m]=d.toJSON(e.data)}const o={};let c=!1;for(const m in this.morphAttributes){const d=this.morphAttributes[m],g=[];for(let _=0,v=d.length;_<v;_++){const x=d[_];g.push(x.toJSON(e.data))}g.length>0&&(o[m]=g,c=!0)}c&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const d in o){const g=o[d];this.setAttribute(d,g.clone(i))}const c=e.morphAttributes;for(const d in c){const g=[],_=c[d];for(let v=0,x=_.length;v<x;v++)g.push(_[v].clone(i));this.morphAttributes[d]=g}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let d=0,g=u.length;d<g;d++){const _=u[d];this.addGroup(_.start,_.count,_.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let UE=0;class wu extends _r{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:UE++}),this.uuid=bo(),this.name="",this.type="Material",this.blending=mo,this.side=ts,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=wh,this.blendDst=Dh,this.blendEquation=cr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Nt(0,0,0),this.blendAlpha=0,this.depthFunc=So,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=F_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qr,this.stencilZFail=Qr,this.stencilZPass=Qr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){ot(`Material: parameter '${i}' has value of undefined.`);continue}const o=this[i];if(o===void 0){ot(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector2&&r&&r.isVector2||o&&o.isEuler&&r&&r.isEuler||o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==mo&&(r.blending=this.blending),this.side!==ts&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==wh&&(r.blendSrc=this.blendSrc),this.blendDst!==Dh&&(r.blendDst=this.blendDst),this.blendEquation!==cr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==So&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==F_&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Qr&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Qr&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Qr&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(c){const u=[];for(const h in c){const m=c[h];delete m.metadata,u.push(m)}return u}if(i){const c=o(e.textures),u=o(e.images);c.length>0&&(r.textures=c),u.length>0&&(r.images=u)}return r}fromJSON(e,i){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Nt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=i[e.map]||null),e.matcap!==void 0&&(this.matcap=i[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=i[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=i[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=i[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),this.normalScale=new zt().fromArray(r)}return e.displacementMap!==void 0&&(this.displacementMap=i[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=i[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=i[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=i[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=i[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=i[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=i[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=i[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=i[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=i[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=i[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=i[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=i[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=i[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new zt().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=i[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=i[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=i[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=i[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=i[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=i[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=i[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const o=i.length;r=new Array(o);for(let c=0;c!==o;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Ka=new ee,lh=new ee,Jc=new ee,Is=new ee,ch=new ee,$c=new ee,uh=new ee;class OE{constructor(e=new ee,i=new ee(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ka)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=Ka.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(Ka.copy(this.origin).addScaledVector(this.direction,i),Ka.distanceToSquared(e))}distanceSqToSegment(e,i,r,o){lh.copy(e).add(i).multiplyScalar(.5),Jc.copy(i).sub(e).normalize(),Is.copy(this.origin).sub(lh);const c=e.distanceTo(i)*.5,u=-this.direction.dot(Jc),h=Is.dot(this.direction),m=-Is.dot(Jc),d=Is.lengthSq(),g=Math.abs(1-u*u);let _,v,x,b;if(g>0)if(_=u*m-h,v=u*h-m,b=c*g,_>=0)if(v>=-b)if(v<=b){const w=1/g;_*=w,v*=w,x=_*(_+u*v+2*h)+v*(u*_+v+2*m)+d}else v=c,_=Math.max(0,-(u*v+h)),x=-_*_+v*(v+2*m)+d;else v=-c,_=Math.max(0,-(u*v+h)),x=-_*_+v*(v+2*m)+d;else v<=-b?(_=Math.max(0,-(-u*c+h)),v=_>0?-c:Math.min(Math.max(-c,-m),c),x=-_*_+v*(v+2*m)+d):v<=b?(_=0,v=Math.min(Math.max(-c,-m),c),x=v*(v+2*m)+d):(_=Math.max(0,-(u*c+h)),v=_>0?c:Math.min(Math.max(-c,-m),c),x=-_*_+v*(v+2*m)+d);else v=u>0?-c:c,_=Math.max(0,-(u*v+h)),x=-_*_+v*(v+2*m)+d;return r&&r.copy(this.origin).addScaledVector(this.direction,_),o&&o.copy(lh).addScaledVector(Jc,v),x}intersectSphere(e,i){Ka.subVectors(e.center,this.origin);const r=Ka.dot(this.direction),o=Ka.dot(Ka)-r*r,c=e.radius*e.radius;if(o>c)return null;const u=Math.sqrt(c-o),h=r-u,m=r+u;return m<0?null:h<0?this.at(m,i):this.at(h,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,o,c,u,h,m;const d=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,v=this.origin;return d>=0?(r=(e.min.x-v.x)*d,o=(e.max.x-v.x)*d):(r=(e.max.x-v.x)*d,o=(e.min.x-v.x)*d),g>=0?(c=(e.min.y-v.y)*g,u=(e.max.y-v.y)*g):(c=(e.max.y-v.y)*g,u=(e.min.y-v.y)*g),r>u||c>o||((c>r||isNaN(r))&&(r=c),(u<o||isNaN(o))&&(o=u),_>=0?(h=(e.min.z-v.z)*_,m=(e.max.z-v.z)*_):(h=(e.max.z-v.z)*_,m=(e.min.z-v.z)*_),r>m||h>o)||((h>r||r!==r)&&(r=h),(m<o||o!==o)&&(o=m),o<0)?null:this.at(r>=0?r:o,i)}intersectsBox(e){return this.intersectBox(e,Ka)!==null}intersectTriangle(e,i,r,o,c){ch.subVectors(i,e),$c.subVectors(r,e),uh.crossVectors(ch,$c);let u=this.direction.dot(uh),h;if(u>0){if(o)return null;h=1}else if(u<0)h=-1,u=-u;else return null;Is.subVectors(this.origin,e);const m=h*this.direction.dot($c.crossVectors(Is,$c));if(m<0)return null;const d=h*this.direction.dot(ch.cross(Is));if(d<0||m+d>u)return null;const g=-h*Is.dot(uh);return g<0?null:this.at(g/u,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Up extends wu{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gr,this.combine=nx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ev=new Dn,sr=new OE,eu=new Np,tv=new ee,tu=new ee,nu=new ee,iu=new ee,fh=new ee,au=new ee,nv=new ee,su=new ee;class Ji extends Bi{constructor(e=new $i,i=new Up){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const o=i[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const h=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(e,i){const r=this.geometry,o=r.attributes.position,c=r.morphAttributes.position,u=r.morphTargetsRelative;i.fromBufferAttribute(o,e);const h=this.morphTargetInfluences;if(c&&h){au.set(0,0,0);for(let m=0,d=c.length;m<d;m++){const g=h[m],_=c[m];g!==0&&(fh.fromBufferAttribute(_,e),u?au.addScaledVector(fh,g):au.addScaledVector(fh.sub(i),g))}i.add(au)}return i}raycast(e,i){const r=this.geometry,o=this.material,c=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),eu.copy(r.boundingSphere),eu.applyMatrix4(c),sr.copy(e.ray).recast(e.near),!(eu.containsPoint(sr.origin)===!1&&(sr.intersectSphere(eu,tv)===null||sr.origin.distanceToSquared(tv)>(e.far-e.near)**2))&&(ev.copy(c).invert(),sr.copy(e.ray).applyMatrix4(ev),!(r.boundingBox!==null&&sr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,sr)))}_computeIntersections(e,i,r){let o;const c=this.geometry,u=this.material,h=c.index,m=c.attributes.position,d=c.attributes.uv,g=c.attributes.uv1,_=c.attributes.normal,v=c.groups,x=c.drawRange;if(h!==null)if(Array.isArray(u))for(let b=0,w=v.length;b<w;b++){const y=v[b],M=u[y.materialIndex],I=Math.max(y.start,x.start),z=Math.min(h.count,Math.min(y.start+y.count,x.start+x.count));for(let R=I,O=z;R<O;R+=3){const L=h.getX(R),B=h.getX(R+1),T=h.getX(R+2);o=ru(this,M,e,r,d,g,_,L,B,T),o&&(o.faceIndex=Math.floor(R/3),o.face.materialIndex=y.materialIndex,i.push(o))}}else{const b=Math.max(0,x.start),w=Math.min(h.count,x.start+x.count);for(let y=b,M=w;y<M;y+=3){const I=h.getX(y),z=h.getX(y+1),R=h.getX(y+2);o=ru(this,u,e,r,d,g,_,I,z,R),o&&(o.faceIndex=Math.floor(y/3),i.push(o))}}else if(m!==void 0)if(Array.isArray(u))for(let b=0,w=v.length;b<w;b++){const y=v[b],M=u[y.materialIndex],I=Math.max(y.start,x.start),z=Math.min(m.count,Math.min(y.start+y.count,x.start+x.count));for(let R=I,O=z;R<O;R+=3){const L=R,B=R+1,T=R+2;o=ru(this,M,e,r,d,g,_,L,B,T),o&&(o.faceIndex=Math.floor(R/3),o.face.materialIndex=y.materialIndex,i.push(o))}}else{const b=Math.max(0,x.start),w=Math.min(m.count,x.start+x.count);for(let y=b,M=w;y<M;y+=3){const I=y,z=y+1,R=y+2;o=ru(this,u,e,r,d,g,_,I,z,R),o&&(o.faceIndex=Math.floor(y/3),i.push(o))}}}}function PE(a,e,i,r,o,c,u,h){let m;if(e.side===Ai?m=r.intersectTriangle(u,c,o,!0,h):m=r.intersectTriangle(o,c,u,e.side===ts,h),m===null)return null;su.copy(h),su.applyMatrix4(a.matrixWorld);const d=i.ray.origin.distanceTo(su);return d<i.near||d>i.far?null:{distance:d,point:su.clone(),object:a}}function ru(a,e,i,r,o,c,u,h,m,d){a.getVertexPosition(h,tu),a.getVertexPosition(m,nu),a.getVertexPosition(d,iu);const g=PE(a,e,i,r,tu,nu,iu,nv);if(g){const _=new ee;ca.getBarycoord(nv,tu,nu,iu,_),o&&(g.uv=ca.getInterpolatedAttribute(o,h,m,d,_,new zt)),c&&(g.uv1=ca.getInterpolatedAttribute(c,h,m,d,_,new zt)),u&&(g.normal=ca.getInterpolatedAttribute(u,h,m,d,_,new ee),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const v={a:h,b:m,c:d,normal:new ee,materialIndex:0};ca.getNormal(tu,nu,iu,v.normal),g.face=v,g.barycoord=_}return g}class IE extends li{constructor(e=null,i=1,r=1,o,c,u,h,m,d=ti,g=ti,_,v){super(null,u,h,m,d,g,o,c,_,v),this.isDataTexture=!0,this.image={data:e,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const dh=new ee,FE=new ee,BE=new ft;class lr{constructor(e=new ee(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,o){return this.normal.set(e,i,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const o=dh.subVectors(r,i).cross(FE.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i,r=!0){const o=e.delta(dh),c=this.normal.dot(o);if(c===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/c;return r===!0&&(u<0||u>1)?null:i.copy(e.start).addScaledVector(o,u)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||BE.getNormalMatrix(e),o=this.coplanarPoint(dh).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const rr=new Np,zE=new zt(.5,.5),ou=new ee;class bx{constructor(e=new lr,i=new lr,r=new lr,o=new lr,c=new lr,u=new lr){this.planes=[e,i,r,o,c,u]}set(e,i,r,o,c,u){const h=this.planes;return h[0].copy(e),h[1].copy(i),h[2].copy(r),h[3].copy(o),h[4].copy(c),h[5].copy(u),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=Ea,r=!1){const o=this.planes,c=e.elements,u=c[0],h=c[1],m=c[2],d=c[3],g=c[4],_=c[5],v=c[6],x=c[7],b=c[8],w=c[9],y=c[10],M=c[11],I=c[12],z=c[13],R=c[14],O=c[15];if(o[0].setComponents(d-u,x-g,M-b,O-I).normalize(),o[1].setComponents(d+u,x+g,M+b,O+I).normalize(),o[2].setComponents(d+h,x+_,M+w,O+z).normalize(),o[3].setComponents(d-h,x-_,M-w,O-z).normalize(),r)o[4].setComponents(m,v,y,R).normalize(),o[5].setComponents(d-m,x-v,M-y,O-R).normalize();else if(o[4].setComponents(d-m,x-v,M-y,O-R).normalize(),i===Ea)o[5].setComponents(d+m,x+v,M+y,O+R).normalize();else if(i===bu)o[5].setComponents(m,v,y,R).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),rr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),rr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(rr)}intersectsSprite(e){rr.center.set(0,0,0);const i=zE.distanceTo(e.center);return rr.radius=.7071067811865476+i,rr.applyMatrix4(e.matrixWorld),this.intersectsSphere(rr)}intersectsSphere(e){const i=this.planes,r=e.center,o=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const o=i[r];if(ou.x=o.normal.x>0?e.max.x:e.min.x,ou.y=o.normal.y>0?e.max.y:e.min.y,ou.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(ou)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Tx extends li{constructor(e=[],i=pr,r,o,c,u,h,m,d,g){super(e,i,r,o,c,u,h,m,d,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ax extends li{constructor(e,i,r,o,c,u,h,m,d){super(e,i,r,o,c,u,h,m,d),this.isCanvasTexture=!0,this.needsUpdate=!0}}class yo extends li{constructor(e,i,r=Ra,o,c,u,h=ti,m=ti,d,g=is,_=1){if(g!==is&&g!==dr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:e,height:i,depth:_};super(v,o,c,u,h,m,g,r,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Lp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class HE extends yo{constructor(e,i=Ra,r=pr,o,c,u=ti,h=ti,m,d=is){const g={width:e,height:e,depth:1},_=[g,g,g,g,g,g];super(e,e,i,r,o,c,u,h,m,d),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Rx extends li{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Pl extends $i{constructor(e=1,i=1,r=1,o=1,c=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:o,heightSegments:c,depthSegments:u};const h=this;o=Math.floor(o),c=Math.floor(c),u=Math.floor(u);const m=[],d=[],g=[],_=[];let v=0,x=0;b("z","y","x",-1,-1,r,i,e,u,c,0),b("z","y","x",1,-1,r,i,-e,u,c,1),b("x","z","y",1,1,e,r,i,o,u,2),b("x","z","y",1,-1,e,r,-i,o,u,3),b("x","y","z",1,-1,e,i,r,o,c,4),b("x","y","z",-1,-1,e,i,-r,o,c,5),this.setIndex(m),this.setAttribute("position",new Qi(d,3)),this.setAttribute("normal",new Qi(g,3)),this.setAttribute("uv",new Qi(_,2));function b(w,y,M,I,z,R,O,L,B,T,N){const X=R/B,V=O/T,j=R/2,ce=O/2,ue=L/2,Y=B+1,F=T+1;let H=0,$=0;const me=new ee;for(let xe=0;xe<F;xe++){const P=xe*V-ce;for(let K=0;K<Y;K++){const Se=K*X-j;me[w]=Se*I,me[y]=P*z,me[M]=ue,d.push(me.x,me.y,me.z),me[w]=0,me[y]=0,me[M]=L>0?1:-1,g.push(me.x,me.y,me.z),_.push(K/B),_.push(1-xe/T),H+=1}}for(let xe=0;xe<T;xe++)for(let P=0;P<B;P++){const K=v+P+Y*xe,Se=v+P+Y*(xe+1),Te=v+(P+1)+Y*(xe+1),Ce=v+(P+1)+Y*xe;m.push(K,Se,Ce),m.push(Se,Te,Ce),$+=6}h.addGroup(x,$,N),x+=$,v+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class GE{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){ot("Curve: .getPoint() not implemented.")}getPointAt(e,i){const r=this.getUtoTmapping(e);return this.getPoint(r,i)}getPoints(e=5){const i=[];for(let r=0;r<=e;r++)i.push(this.getPoint(r/e));return i}getSpacedPoints(e=5){const i=[];for(let r=0;r<=e;r++)i.push(this.getPointAt(r/e));return i}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const i=[];let r,o=this.getPoint(0),c=0;i.push(0);for(let u=1;u<=e;u++)r=this.getPoint(u/e),c+=r.distanceTo(o),i.push(c),o=r;return this.cacheArcLengths=i,i}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,i=null){const r=this.getLengths();let o=0;const c=r.length;let u;i?u=i:u=e*r[c-1];let h=0,m=c-1,d;for(;h<=m;)if(o=Math.floor(h+(m-h)/2),d=r[o]-u,d<0)h=o+1;else if(d>0)m=o-1;else{m=o;break}if(o=m,r[o]===u)return o/(c-1);const g=r[o],v=r[o+1]-g,x=(u-g)/v;return(o+x)/(c-1)}getTangent(e,i){let o=e-1e-4,c=e+1e-4;o<0&&(o=0),c>1&&(c=1);const u=this.getPoint(o),h=this.getPoint(c),m=i||(u.isVector2?new zt:new ee);return m.copy(h).sub(u).normalize(),m}getTangentAt(e,i){const r=this.getUtoTmapping(e);return this.getTangent(r,i)}computeFrenetFrames(e,i=!1){const r=new ee,o=[],c=[],u=[],h=new ee,m=new Dn;for(let x=0;x<=e;x++){const b=x/e;o[x]=this.getTangentAt(b,new ee)}c[0]=new ee,u[0]=new ee;let d=Number.MAX_VALUE;const g=Math.abs(o[0].x),_=Math.abs(o[0].y),v=Math.abs(o[0].z);g<=d&&(d=g,r.set(1,0,0)),_<=d&&(d=_,r.set(0,1,0)),v<=d&&r.set(0,0,1),h.crossVectors(o[0],r).normalize(),c[0].crossVectors(o[0],h),u[0].crossVectors(o[0],c[0]);for(let x=1;x<=e;x++){if(c[x]=c[x-1].clone(),u[x]=u[x-1].clone(),h.crossVectors(o[x-1],o[x]),h.length()>Number.EPSILON){h.normalize();const b=Math.acos(Mt(o[x-1].dot(o[x]),-1,1));c[x].applyMatrix4(m.makeRotationAxis(h,b))}u[x].crossVectors(o[x],c[x])}if(i===!0){let x=Math.acos(Mt(c[0].dot(c[e]),-1,1));x/=e,o[0].dot(h.crossVectors(c[0],c[e]))>0&&(x=-x);for(let b=1;b<=e;b++)c[b].applyMatrix4(m.makeRotationAxis(o[b],x*b)),u[b].crossVectors(o[b],c[b])}return{tangents:o,normals:c,binormals:u}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}function Op(){let a=0,e=0,i=0,r=0;function o(c,u,h,m){a=c,e=h,i=-3*c+3*u-2*h-m,r=2*c-2*u+h+m}return{initCatmullRom:function(c,u,h,m,d){o(u,h,d*(h-c),d*(m-u))},initNonuniformCatmullRom:function(c,u,h,m,d,g,_){let v=(u-c)/d-(h-c)/(d+g)+(h-u)/g,x=(h-u)/g-(m-u)/(g+_)+(m-h)/_;v*=g,x*=g,o(u,h,v,x)},calc:function(c){const u=c*c,h=u*c;return a+e*c+i*u+r*h}}}const iv=new ee,av=new ee,hh=new Op,ph=new Op,mh=new Op;class VE extends GE{constructor(e=[],i=!1,r="centripetal",o=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=i,this.curveType=r,this.tension=o}getPoint(e,i=new ee){const r=i,o=this.points,c=o.length,u=(c-(this.closed?0:1))*e;let h=Math.floor(u),m=u-h;this.closed?h+=h>0?0:(Math.floor(Math.abs(h)/c)+1)*c:m===0&&h===c-1&&(h=c-2,m=1);let d,g;this.closed||h>0?d=o[(h-1)%c]:(av.subVectors(o[0],o[1]).add(o[0]),d=av);const _=o[h%c],v=o[(h+1)%c];if(this.closed||h+2<c?g=o[(h+2)%c]:(iv.subVectors(o[c-1],o[c-2]).add(o[c-1]),g=iv),this.curveType==="centripetal"||this.curveType==="chordal"){const x=this.curveType==="chordal"?.5:.25;let b=Math.pow(d.distanceToSquared(_),x),w=Math.pow(_.distanceToSquared(v),x),y=Math.pow(v.distanceToSquared(g),x);w<1e-4&&(w=1),b<1e-4&&(b=w),y<1e-4&&(y=w),hh.initNonuniformCatmullRom(d.x,_.x,v.x,g.x,b,w,y),ph.initNonuniformCatmullRom(d.y,_.y,v.y,g.y,b,w,y),mh.initNonuniformCatmullRom(d.z,_.z,v.z,g.z,b,w,y)}else this.curveType==="catmullrom"&&(hh.initCatmullRom(d.x,_.x,v.x,g.x,this.tension),ph.initCatmullRom(d.y,_.y,v.y,g.y,this.tension),mh.initCatmullRom(d.z,_.z,v.z,g.z,this.tension));return r.set(hh.calc(m),ph.calc(m),mh.calc(m)),r}copy(e){super.copy(e),this.points=[];for(let i=0,r=e.points.length;i<r;i++){const o=e.points[i];this.points.push(o.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let i=0,r=this.points.length;i<r;i++){const o=this.points[i];e.points.push(o.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let i=0,r=e.points.length;i<r;i++){const o=e.points[i];this.points.push(new ee().fromArray(o))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}class hr extends $i{constructor(e=1,i=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:o};const c=e/2,u=i/2,h=Math.floor(r),m=Math.floor(o),d=h+1,g=m+1,_=e/h,v=i/m,x=[],b=[],w=[],y=[];for(let M=0;M<g;M++){const I=M*v-u;for(let z=0;z<d;z++){const R=z*_-c;b.push(R,-I,0),w.push(0,0,1),y.push(z/h),y.push(1-M/m)}}for(let M=0;M<m;M++)for(let I=0;I<h;I++){const z=I+d*M,R=I+d*(M+1),O=I+1+d*(M+1),L=I+1+d*M;x.push(z,R,L),x.push(R,O,L)}this.setIndex(x),this.setAttribute("position",new Qi(b,3)),this.setAttribute("normal",new Qi(w,3)),this.setAttribute("uv",new Qi(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hr(e.width,e.height,e.widthSegments,e.heightSegments)}}function Eo(a){const e={};for(const i in a){e[i]={};for(const r in a[i]){const o=a[i][r];if(sv(o))o.isRenderTargetTexture?(ot("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=o.clone();else if(Array.isArray(o))if(sv(o[0])){const c=[];for(let u=0,h=o.length;u<h;u++)c[u]=o[u].clone();e[i][r]=c}else e[i][r]=o.slice();else e[i][r]=o}}return e}function hi(a){const e={};for(let i=0;i<a.length;i++){const r=Eo(a[i]);for(const o in r)e[o]=r[o]}return e}function sv(a){return a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)}function kE(a){const e=[];for(let i=0;i<a.length;i++)e.push(a[i].clone());return e}function Cx(a){const e=a.getRenderTarget();return e===null?a.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Dt.workingColorSpace}const XE={clone:Eo,merge:hi};var WE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,YE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ea extends wu{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=WE,this.fragmentShader=YE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Eo(e.uniforms),this.uniformsGroups=kE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?i.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?i.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?i.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?i.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?i.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?i.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?i.uniforms[o]={type:"m4",value:u.toArray()}:i.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}fromJSON(e,i){if(super.fromJSON(e,i),e.uniforms!==void 0)for(const r in e.uniforms){const o=e.uniforms[r];switch(this.uniforms[r]={},o.type){case"t":this.uniforms[r].value=i[o.value]||null;break;case"c":this.uniforms[r].value=new Nt().setHex(o.value);break;case"v2":this.uniforms[r].value=new zt().fromArray(o.value);break;case"v3":this.uniforms[r].value=new ee().fromArray(o.value);break;case"v4":this.uniforms[r].value=new Tn().fromArray(o.value);break;case"m3":this.uniforms[r].value=new ft().fromArray(o.value);break;case"m4":this.uniforms[r].value=new Dn().fromArray(o.value);break;default:this.uniforms[r].value=o.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)this.extensions[r]=e.extensions[r];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class qE extends ea{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class jE extends wu{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Vy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ZE extends wu{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const lu=new ee,cu=new To,va=new ee;class wx extends Bi{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Dn,this.projectionMatrix=new Dn,this.projectionMatrixInverse=new Dn,this.coordinateSystem=Ea,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(lu,cu,va),va.x===1&&va.y===1&&va.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(lu,cu,va.set(1,1,1)).invert()}updateWorldMatrix(e,i,r=!1){super.updateWorldMatrix(e,i,r),this.matrixWorld.decompose(lu,cu,va),va.x===1&&va.y===1&&va.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(lu,cu,va.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Fs=new ee,rv=new zt,ov=new zt;class Zi extends wx{constructor(e=50,i=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Nl*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Rl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Nl*2*Math.atan(Math.tan(Rl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){Fs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Fs.x,Fs.y).multiplyScalar(-e/Fs.z),Fs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Fs.x,Fs.y).multiplyScalar(-e/Fs.z)}getViewSize(e,i){return this.getViewBounds(e,rv,ov),i.subVectors(ov,rv)}setViewOffset(e,i,r,o,c,u){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Rl*.5*this.fov)/this.zoom,r=2*i,o=this.aspect*r,c=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const m=u.fullWidth,d=u.fullHeight;c+=u.offsetX*o/m,i-=u.offsetY*r/d,o*=u.width/m,r*=u.height/d}const h=this.filmOffset;h!==0&&(c+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+o,i,i-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class Dx extends wx{constructor(e=-1,i=1,r=1,o=-1,c=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=o,this.near=c,this.far=u,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,o,c,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let c=r-e,u=r+e,h=o+i,m=o-i;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=d*this.view.offsetX,u=c+d*this.view.width,h-=g*this.view.offsetY,m=h-g*this.view.height}this.projectionMatrix.makeOrthographic(c,u,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const lo=-90,co=1;class KE extends Bi{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Zi(lo,co,e,i);o.layers=this.layers,this.add(o);const c=new Zi(lo,co,e,i);c.layers=this.layers,this.add(c);const u=new Zi(lo,co,e,i);u.layers=this.layers,this.add(u);const h=new Zi(lo,co,e,i);h.layers=this.layers,this.add(h);const m=new Zi(lo,co,e,i);m.layers=this.layers,this.add(m);const d=new Zi(lo,co,e,i);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,o,c,u,h,m]=i;for(const d of i)this.remove(d);if(e===Ea)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===bu)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const d of i)this.add(d),d.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,u,h,m,d,g]=this.children,_=e.getRenderTarget(),v=e.getActiveCubeFace(),x=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const w=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let y=!1;e.isWebGLRenderer===!0?y=e.state.buffers.depth.getReversed():y=e.reversedDepthBuffer,e.setRenderTarget(r,0,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,c),e.setRenderTarget(r,1,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,u),e.setRenderTarget(r,2,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,h),e.setRenderTarget(r,3,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,m),e.setRenderTarget(r,4,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,d),r.texture.generateMipmaps=w,e.setRenderTarget(r,5,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,g),e.setRenderTarget(_,v,x),e.xr.enabled=b,r.texture.needsPMREMUpdate=!0}}class QE extends Zi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Wp=class Wp{constructor(e,i,r,o){this.elements=[1,0,0,1],e!==void 0&&this.set(e,i,r,o)}identity(){return this.set(1,0,0,1),this}fromArray(e,i=0){for(let r=0;r<4;r++)this.elements[r]=e[r+i];return this}set(e,i,r,o){const c=this.elements;return c[0]=e,c[2]=i,c[1]=r,c[3]=o,this}};Wp.prototype.isMatrix2=!0;let lv=Wp;function cv(a,e,i,r){const o=JE(r);switch(i){case mx:return a*e;case _x:return a*e/o.components*o.byteLength;case Tp:return a*e/o.components*o.byteLength;case mr:return a*e*2/o.components*o.byteLength;case Ap:return a*e*2/o.components*o.byteLength;case gx:return a*e*3/o.components*o.byteLength;case fa:return a*e*4/o.components*o.byteLength;case Rp:return a*e*4/o.components*o.byteLength;case pu:case mu:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case gu:case _u:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Gh:case kh:return Math.max(a,16)*Math.max(e,8)/4;case Hh:case Vh:return Math.max(a,8)*Math.max(e,8)/2;case Xh:case Wh:case qh:case jh:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case Yh:case Su:case Zh:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Kh:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Qh:return Math.floor((a+4)/5)*Math.floor((e+3)/4)*16;case Jh:return Math.floor((a+4)/5)*Math.floor((e+4)/5)*16;case $h:return Math.floor((a+5)/6)*Math.floor((e+4)/5)*16;case ep:return Math.floor((a+5)/6)*Math.floor((e+5)/6)*16;case tp:return Math.floor((a+7)/8)*Math.floor((e+4)/5)*16;case np:return Math.floor((a+7)/8)*Math.floor((e+5)/6)*16;case ip:return Math.floor((a+7)/8)*Math.floor((e+7)/8)*16;case ap:return Math.floor((a+9)/10)*Math.floor((e+4)/5)*16;case sp:return Math.floor((a+9)/10)*Math.floor((e+5)/6)*16;case rp:return Math.floor((a+9)/10)*Math.floor((e+7)/8)*16;case op:return Math.floor((a+9)/10)*Math.floor((e+9)/10)*16;case lp:return Math.floor((a+11)/12)*Math.floor((e+9)/10)*16;case cp:return Math.floor((a+11)/12)*Math.floor((e+11)/12)*16;case up:case fp:case dp:return Math.ceil(a/4)*Math.ceil(e/4)*16;case hp:case pp:return Math.ceil(a/4)*Math.ceil(e/4)*8;case Mu:case mp:return Math.ceil(a/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function JE(a){switch(a){case Ki:case fx:return{byteLength:1,components:1};case Dl:case dx:case ns:return{byteLength:2,components:1};case Ep:case bp:return{byteLength:2,components:4};case Ra:case yp:case ya:return{byteLength:4,components:1};case hx:case px:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${a}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Mp}}));typeof window<"u"&&(window.__THREE__?ot("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Mp);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Lx(){let a=null,e=!1,i=null,r=null;function o(c,u){i(c,u),r=a.requestAnimationFrame(o)}return{start:function(){e!==!0&&i!==null&&a!==null&&(r=a.requestAnimationFrame(o),e=!0)},stop:function(){a!==null&&a.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){a=c}}}function $E(a){const e=new WeakMap;function i(h,m){const d=h.array,g=h.usage,_=d.byteLength,v=a.createBuffer();a.bindBuffer(m,v),a.bufferData(m,d,g),h.onUploadCallback();let x;if(d instanceof Float32Array)x=a.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)x=a.HALF_FLOAT;else if(d instanceof Uint16Array)h.isFloat16BufferAttribute?x=a.HALF_FLOAT:x=a.UNSIGNED_SHORT;else if(d instanceof Int16Array)x=a.SHORT;else if(d instanceof Uint32Array)x=a.UNSIGNED_INT;else if(d instanceof Int32Array)x=a.INT;else if(d instanceof Int8Array)x=a.BYTE;else if(d instanceof Uint8Array)x=a.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)x=a.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:v,type:x,bytesPerElement:d.BYTES_PER_ELEMENT,version:h.version,size:_}}function r(h,m,d){const g=m.array,_=m.updateRanges;if(a.bindBuffer(d,h),_.length===0)a.bufferSubData(d,0,g);else{_.sort((x,b)=>x.start-b.start);let v=0;for(let x=1;x<_.length;x++){const b=_[v],w=_[x];w.start<=b.start+b.count+1?b.count=Math.max(b.count,w.start+w.count-b.start):(++v,_[v]=w)}_.length=v+1;for(let x=0,b=_.length;x<b;x++){const w=_[x];a.bufferSubData(d,w.start*g.BYTES_PER_ELEMENT,g,w.start,w.count)}m.clearUpdateRanges()}m.onUploadCallback()}function o(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=e.get(h);m&&(a.deleteBuffer(m.buffer),e.delete(h))}function u(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const g=e.get(h);(!g||g.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const d=e.get(h);if(d===void 0)e.set(h,i(h,m));else if(d.version<h.version){if(d.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(d.buffer,h,m),d.version=h.version}}return{get:o,remove:c,update:u}}var eb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,tb=`#ifdef USE_ALPHAHASH
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
#endif`,nb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ib=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ab=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,sb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,rb=`#ifdef USE_AOMAP
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
#endif`,ob=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,lb=`#ifdef USE_BATCHING
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
#endif`,cb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ub=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,fb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,db=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,hb=`#ifdef USE_IRIDESCENCE
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
#endif`,pb=`#ifdef USE_BUMPMAP
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
#endif`,mb=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,gb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,_b=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,vb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,xb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Sb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Mb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,yb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Eb=`#define PI 3.141592653589793
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
} // validated`,bb=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Tb=`vec3 transformedNormal = objectNormal;
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
#endif`,Ab=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Rb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Cb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,wb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Db="gl_FragColor = linearToOutputTexel( gl_FragColor );",Lb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Nb=`#ifdef USE_ENVMAP
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
#endif`,Ub=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Ob=`#ifdef USE_ENVMAP
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
#endif`,Pb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ib=`#ifdef USE_ENVMAP
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
#endif`,Fb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Bb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,zb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Hb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Gb=`#ifdef USE_GRADIENTMAP
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
}`,Vb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,kb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Xb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Wb=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Yb=`#ifdef USE_ENVMAP
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
#endif`,qb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,jb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Zb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Kb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Qb=`PhysicalMaterial material;
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
#endif`,Jb=`uniform sampler2D dfgLUT;
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
}`,$b=`
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
#endif`,e1=`#if defined( RE_IndirectDiffuse )
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
#endif`,t1=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,n1=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,i1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,a1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,s1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,r1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,o1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,l1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,c1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,u1=`#if defined( USE_POINTS_UV )
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
#endif`,f1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,d1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,h1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,p1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,m1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,g1=`#ifdef USE_MORPHTARGETS
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
#endif`,_1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,v1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,x1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,S1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,M1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,y1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,E1=`#ifdef USE_NORMALMAP
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
#endif`,b1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,T1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,A1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,R1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,C1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,w1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,D1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,L1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,N1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,U1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,O1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,P1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,I1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,F1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,B1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,z1=`float getShadowMask() {
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
}`,H1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,G1=`#ifdef USE_SKINNING
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
#endif`,V1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,k1=`#ifdef USE_SKINNING
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
#endif`,X1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,W1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Y1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,q1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,j1=`#ifdef USE_TRANSMISSION
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
#endif`,Z1=`#ifdef USE_TRANSMISSION
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
#endif`,K1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Q1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,J1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const eT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,tT=`uniform sampler2D t2D;
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
}`,nT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,iT=`#ifdef ENVMAP_TYPE_CUBE
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
}`,aT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rT=`#include <common>
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
}`,oT=`#if DEPTH_PACKING == 3200
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
}`,lT=`#define DISTANCE
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
}`,cT=`#define DISTANCE
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
}`,uT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,fT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dT=`uniform float scale;
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
}`,hT=`uniform vec3 diffuse;
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
}`,pT=`#include <common>
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
}`,mT=`uniform vec3 diffuse;
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
}`,gT=`#define LAMBERT
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
}`,_T=`#define LAMBERT
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
}`,vT=`#define MATCAP
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
}`,xT=`#define MATCAP
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
}`,ST=`#define NORMAL
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
}`,MT=`#define NORMAL
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
}`,yT=`#define PHONG
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
}`,ET=`#define PHONG
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
}`,bT=`#define STANDARD
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
}`,TT=`#define STANDARD
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
}`,AT=`#define TOON
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
}`,RT=`#define TOON
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
}`,CT=`uniform float size;
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
}`,wT=`uniform vec3 diffuse;
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
}`,DT=`#include <common>
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
}`,LT=`uniform vec3 color;
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
}`,NT=`uniform float rotation;
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
}`,UT=`uniform vec3 diffuse;
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
}`,vt={alphahash_fragment:eb,alphahash_pars_fragment:tb,alphamap_fragment:nb,alphamap_pars_fragment:ib,alphatest_fragment:ab,alphatest_pars_fragment:sb,aomap_fragment:rb,aomap_pars_fragment:ob,batching_pars_vertex:lb,batching_vertex:cb,begin_vertex:ub,beginnormal_vertex:fb,bsdfs:db,iridescence_fragment:hb,bumpmap_pars_fragment:pb,clipping_planes_fragment:mb,clipping_planes_pars_fragment:gb,clipping_planes_pars_vertex:_b,clipping_planes_vertex:vb,color_fragment:xb,color_pars_fragment:Sb,color_pars_vertex:Mb,color_vertex:yb,common:Eb,cube_uv_reflection_fragment:bb,defaultnormal_vertex:Tb,displacementmap_pars_vertex:Ab,displacementmap_vertex:Rb,emissivemap_fragment:Cb,emissivemap_pars_fragment:wb,colorspace_fragment:Db,colorspace_pars_fragment:Lb,envmap_fragment:Nb,envmap_common_pars_fragment:Ub,envmap_pars_fragment:Ob,envmap_pars_vertex:Pb,envmap_physical_pars_fragment:Yb,envmap_vertex:Ib,fog_vertex:Fb,fog_pars_vertex:Bb,fog_fragment:zb,fog_pars_fragment:Hb,gradientmap_pars_fragment:Gb,lightmap_pars_fragment:Vb,lights_lambert_fragment:kb,lights_lambert_pars_fragment:Xb,lights_pars_begin:Wb,lights_toon_fragment:qb,lights_toon_pars_fragment:jb,lights_phong_fragment:Zb,lights_phong_pars_fragment:Kb,lights_physical_fragment:Qb,lights_physical_pars_fragment:Jb,lights_fragment_begin:$b,lights_fragment_maps:e1,lights_fragment_end:t1,lightprobes_pars_fragment:n1,logdepthbuf_fragment:i1,logdepthbuf_pars_fragment:a1,logdepthbuf_pars_vertex:s1,logdepthbuf_vertex:r1,map_fragment:o1,map_pars_fragment:l1,map_particle_fragment:c1,map_particle_pars_fragment:u1,metalnessmap_fragment:f1,metalnessmap_pars_fragment:d1,morphinstance_vertex:h1,morphcolor_vertex:p1,morphnormal_vertex:m1,morphtarget_pars_vertex:g1,morphtarget_vertex:_1,normal_fragment_begin:v1,normal_fragment_maps:x1,normal_pars_fragment:S1,normal_pars_vertex:M1,normal_vertex:y1,normalmap_pars_fragment:E1,clearcoat_normal_fragment_begin:b1,clearcoat_normal_fragment_maps:T1,clearcoat_pars_fragment:A1,iridescence_pars_fragment:R1,opaque_fragment:C1,packing:w1,premultiplied_alpha_fragment:D1,project_vertex:L1,dithering_fragment:N1,dithering_pars_fragment:U1,roughnessmap_fragment:O1,roughnessmap_pars_fragment:P1,shadowmap_pars_fragment:I1,shadowmap_pars_vertex:F1,shadowmap_vertex:B1,shadowmask_pars_fragment:z1,skinbase_vertex:H1,skinning_pars_vertex:G1,skinning_vertex:V1,skinnormal_vertex:k1,specularmap_fragment:X1,specularmap_pars_fragment:W1,tonemapping_fragment:Y1,tonemapping_pars_fragment:q1,transmission_fragment:j1,transmission_pars_fragment:Z1,uv_pars_fragment:K1,uv_pars_vertex:Q1,uv_vertex:J1,worldpos_vertex:$1,background_vert:eT,background_frag:tT,backgroundCube_vert:nT,backgroundCube_frag:iT,cube_vert:aT,cube_frag:sT,depth_vert:rT,depth_frag:oT,distance_vert:lT,distance_frag:cT,equirect_vert:uT,equirect_frag:fT,linedashed_vert:dT,linedashed_frag:hT,meshbasic_vert:pT,meshbasic_frag:mT,meshlambert_vert:gT,meshlambert_frag:_T,meshmatcap_vert:vT,meshmatcap_frag:xT,meshnormal_vert:ST,meshnormal_frag:MT,meshphong_vert:yT,meshphong_frag:ET,meshphysical_vert:bT,meshphysical_frag:TT,meshtoon_vert:AT,meshtoon_frag:RT,points_vert:CT,points_frag:wT,shadow_vert:DT,shadow_frag:LT,sprite_vert:NT,sprite_frag:UT},Be={common:{diffuse:{value:new Nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ft}},envmap:{envMap:{value:null},envMapRotation:{value:new ft},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ft},normalScale:{value:new zt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new ee},probesMax:{value:new ee},probesResolution:{value:new ee}},points:{diffuse:{value:new Nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0},uvTransform:{value:new ft}},sprite:{diffuse:{value:new Nt(16777215)},opacity:{value:1},center:{value:new zt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}}},Sa={basic:{uniforms:hi([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.fog]),vertexShader:vt.meshbasic_vert,fragmentShader:vt.meshbasic_frag},lambert:{uniforms:hi([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,Be.lights,{emissive:{value:new Nt(0)},envMapIntensity:{value:1}}]),vertexShader:vt.meshlambert_vert,fragmentShader:vt.meshlambert_frag},phong:{uniforms:hi([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,Be.lights,{emissive:{value:new Nt(0)},specular:{value:new Nt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:vt.meshphong_vert,fragmentShader:vt.meshphong_frag},standard:{uniforms:hi([Be.common,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.roughnessmap,Be.metalnessmap,Be.fog,Be.lights,{emissive:{value:new Nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:vt.meshphysical_vert,fragmentShader:vt.meshphysical_frag},toon:{uniforms:hi([Be.common,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.gradientmap,Be.fog,Be.lights,{emissive:{value:new Nt(0)}}]),vertexShader:vt.meshtoon_vert,fragmentShader:vt.meshtoon_frag},matcap:{uniforms:hi([Be.common,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,{matcap:{value:null}}]),vertexShader:vt.meshmatcap_vert,fragmentShader:vt.meshmatcap_frag},points:{uniforms:hi([Be.points,Be.fog]),vertexShader:vt.points_vert,fragmentShader:vt.points_frag},dashed:{uniforms:hi([Be.common,Be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:vt.linedashed_vert,fragmentShader:vt.linedashed_frag},depth:{uniforms:hi([Be.common,Be.displacementmap]),vertexShader:vt.depth_vert,fragmentShader:vt.depth_frag},normal:{uniforms:hi([Be.common,Be.bumpmap,Be.normalmap,Be.displacementmap,{opacity:{value:1}}]),vertexShader:vt.meshnormal_vert,fragmentShader:vt.meshnormal_frag},sprite:{uniforms:hi([Be.sprite,Be.fog]),vertexShader:vt.sprite_vert,fragmentShader:vt.sprite_frag},background:{uniforms:{uvTransform:{value:new ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:vt.background_vert,fragmentShader:vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ft}},vertexShader:vt.backgroundCube_vert,fragmentShader:vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:vt.cube_vert,fragmentShader:vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:vt.equirect_vert,fragmentShader:vt.equirect_frag},distance:{uniforms:hi([Be.common,Be.displacementmap,{referencePosition:{value:new ee},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:vt.distance_vert,fragmentShader:vt.distance_frag},shadow:{uniforms:hi([Be.lights,Be.fog,{color:{value:new Nt(0)},opacity:{value:1}}]),vertexShader:vt.shadow_vert,fragmentShader:vt.shadow_frag}};Sa.physical={uniforms:hi([Sa.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ft},clearcoatNormalScale:{value:new zt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ft},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ft},sheen:{value:0},sheenColor:{value:new Nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ft},transmissionSamplerSize:{value:new zt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ft},attenuationDistance:{value:0},attenuationColor:{value:new Nt(0)},specularColor:{value:new Nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ft},anisotropyVector:{value:new zt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ft}}]),vertexShader:vt.meshphysical_vert,fragmentShader:vt.meshphysical_frag};const uu={r:0,b:0,g:0},OT=new Dn,Nx=new ft;Nx.set(-1,0,0,0,1,0,0,0,1);function PT(a,e,i,r,o,c){const u=new Nt(0);let h=o===!0?0:1,m,d,g=null,_=0,v=null;function x(I){let z=I.isScene===!0?I.background:null;if(z&&z.isTexture){const R=I.backgroundBlurriness>0;z=e.get(z,R)}return z}function b(I){let z=!1;const R=x(I);R===null?y(u,h):R&&R.isColor&&(y(R,1),z=!0);const O=a.xr.getEnvironmentBlendMode();O==="additive"?i.buffers.color.setClear(0,0,0,1,c):O==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(a.autoClear||z)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil))}function w(I,z){const R=x(z);R&&(R.isCubeTexture||R.mapping===Cu)?(d===void 0&&(d=new Ji(new Pl(1,1,1),new ea({name:"BackgroundCubeMaterial",uniforms:Eo(Sa.backgroundCube.uniforms),vertexShader:Sa.backgroundCube.vertexShader,fragmentShader:Sa.backgroundCube.fragmentShader,side:Ai,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(O,L,B){this.matrixWorld.copyPosition(B.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),d.material.uniforms.envMap.value=R,d.material.uniforms.backgroundBlurriness.value=z.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=z.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(OT.makeRotationFromEuler(z.backgroundRotation)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&d.material.uniforms.backgroundRotation.value.premultiply(Nx),d.material.toneMapped=Dt.getTransfer(R.colorSpace)!==Kt,(g!==R||_!==R.version||v!==a.toneMapping)&&(d.material.needsUpdate=!0,g=R,_=R.version,v=a.toneMapping),d.layers.enableAll(),I.unshift(d,d.geometry,d.material,0,0,null)):R&&R.isTexture&&(m===void 0&&(m=new Ji(new hr(2,2),new ea({name:"BackgroundMaterial",uniforms:Eo(Sa.background.uniforms),vertexShader:Sa.background.vertexShader,fragmentShader:Sa.background.fragmentShader,side:ts,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(m)),m.material.uniforms.t2D.value=R,m.material.uniforms.backgroundIntensity.value=z.backgroundIntensity,m.material.toneMapped=Dt.getTransfer(R.colorSpace)!==Kt,R.matrixAutoUpdate===!0&&R.updateMatrix(),m.material.uniforms.uvTransform.value.copy(R.matrix),(g!==R||_!==R.version||v!==a.toneMapping)&&(m.material.needsUpdate=!0,g=R,_=R.version,v=a.toneMapping),m.layers.enableAll(),I.unshift(m,m.geometry,m.material,0,0,null))}function y(I,z){I.getRGB(uu,Cx(a)),i.buffers.color.setClear(uu.r,uu.g,uu.b,z,c)}function M(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return u},setClearColor:function(I,z=1){u.set(I),h=z,y(u,h)},getClearAlpha:function(){return h},setClearAlpha:function(I){h=I,y(u,h)},render:b,addToRenderList:w,dispose:M}}function IT(a,e){const i=a.getParameter(a.MAX_VERTEX_ATTRIBS),r={},o=v(null);let c=o,u=!1;function h(V,j,ce,ue,Y){let F=!1;const H=_(V,ue,ce,j);c!==H&&(c=H,d(c.object)),F=x(V,ue,ce,Y),F&&b(V,ue,ce,Y),Y!==null&&e.update(Y,a.ELEMENT_ARRAY_BUFFER),(F||u)&&(u=!1,R(V,j,ce,ue),Y!==null&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function m(){return a.createVertexArray()}function d(V){return a.bindVertexArray(V)}function g(V){return a.deleteVertexArray(V)}function _(V,j,ce,ue){const Y=ue.wireframe===!0;let F=r[j.id];F===void 0&&(F={},r[j.id]=F);const H=V.isInstancedMesh===!0?V.id:0;let $=F[H];$===void 0&&($={},F[H]=$);let me=$[ce.id];me===void 0&&(me={},$[ce.id]=me);let xe=me[Y];return xe===void 0&&(xe=v(m()),me[Y]=xe),xe}function v(V){const j=[],ce=[],ue=[];for(let Y=0;Y<i;Y++)j[Y]=0,ce[Y]=0,ue[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:j,enabledAttributes:ce,attributeDivisors:ue,object:V,attributes:{},index:null}}function x(V,j,ce,ue){const Y=c.attributes,F=j.attributes;let H=0;const $=ce.getAttributes();for(const me in $)if($[me].location>=0){const P=Y[me];let K=F[me];if(K===void 0&&(me==="instanceMatrix"&&V.instanceMatrix&&(K=V.instanceMatrix),me==="instanceColor"&&V.instanceColor&&(K=V.instanceColor)),P===void 0||P.attribute!==K||K&&P.data!==K.data)return!0;H++}return c.attributesNum!==H||c.index!==ue}function b(V,j,ce,ue){const Y={},F=j.attributes;let H=0;const $=ce.getAttributes();for(const me in $)if($[me].location>=0){let P=F[me];P===void 0&&(me==="instanceMatrix"&&V.instanceMatrix&&(P=V.instanceMatrix),me==="instanceColor"&&V.instanceColor&&(P=V.instanceColor));const K={};K.attribute=P,P&&P.data&&(K.data=P.data),Y[me]=K,H++}c.attributes=Y,c.attributesNum=H,c.index=ue}function w(){const V=c.newAttributes;for(let j=0,ce=V.length;j<ce;j++)V[j]=0}function y(V){M(V,0)}function M(V,j){const ce=c.newAttributes,ue=c.enabledAttributes,Y=c.attributeDivisors;ce[V]=1,ue[V]===0&&(a.enableVertexAttribArray(V),ue[V]=1),Y[V]!==j&&(a.vertexAttribDivisor(V,j),Y[V]=j)}function I(){const V=c.newAttributes,j=c.enabledAttributes;for(let ce=0,ue=j.length;ce<ue;ce++)j[ce]!==V[ce]&&(a.disableVertexAttribArray(ce),j[ce]=0)}function z(V,j,ce,ue,Y,F,H){H===!0?a.vertexAttribIPointer(V,j,ce,Y,F):a.vertexAttribPointer(V,j,ce,ue,Y,F)}function R(V,j,ce,ue){w();const Y=ue.attributes,F=ce.getAttributes(),H=j.defaultAttributeValues;for(const $ in F){const me=F[$];if(me.location>=0){let xe=Y[$];if(xe===void 0&&($==="instanceMatrix"&&V.instanceMatrix&&(xe=V.instanceMatrix),$==="instanceColor"&&V.instanceColor&&(xe=V.instanceColor)),xe!==void 0){const P=xe.normalized,K=xe.itemSize,Se=e.get(xe);if(Se===void 0)continue;const Te=Se.buffer,Ce=Se.type,ie=Se.bytesPerElement,ye=Ce===a.INT||Ce===a.UNSIGNED_INT||xe.gpuType===yp;if(xe.isInterleavedBufferAttribute){const be=xe.data,He=be.stride,at=xe.offset;if(be.isInstancedInterleavedBuffer){for(let et=0;et<me.locationSize;et++)M(me.location+et,be.meshPerAttribute);V.isInstancedMesh!==!0&&ue._maxInstanceCount===void 0&&(ue._maxInstanceCount=be.meshPerAttribute*be.count)}else for(let et=0;et<me.locationSize;et++)y(me.location+et);a.bindBuffer(a.ARRAY_BUFFER,Te);for(let et=0;et<me.locationSize;et++)z(me.location+et,K/me.locationSize,Ce,P,He*ie,(at+K/me.locationSize*et)*ie,ye)}else{if(xe.isInstancedBufferAttribute){for(let be=0;be<me.locationSize;be++)M(me.location+be,xe.meshPerAttribute);V.isInstancedMesh!==!0&&ue._maxInstanceCount===void 0&&(ue._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let be=0;be<me.locationSize;be++)y(me.location+be);a.bindBuffer(a.ARRAY_BUFFER,Te);for(let be=0;be<me.locationSize;be++)z(me.location+be,K/me.locationSize,Ce,P,K*ie,K/me.locationSize*be*ie,ye)}}else if(H!==void 0){const P=H[$];if(P!==void 0)switch(P.length){case 2:a.vertexAttrib2fv(me.location,P);break;case 3:a.vertexAttrib3fv(me.location,P);break;case 4:a.vertexAttrib4fv(me.location,P);break;default:a.vertexAttrib1fv(me.location,P)}}}}I()}function O(){N();for(const V in r){const j=r[V];for(const ce in j){const ue=j[ce];for(const Y in ue){const F=ue[Y];for(const H in F)g(F[H].object),delete F[H];delete ue[Y]}}delete r[V]}}function L(V){if(r[V.id]===void 0)return;const j=r[V.id];for(const ce in j){const ue=j[ce];for(const Y in ue){const F=ue[Y];for(const H in F)g(F[H].object),delete F[H];delete ue[Y]}}delete r[V.id]}function B(V){for(const j in r){const ce=r[j];for(const ue in ce){const Y=ce[ue];if(Y[V.id]===void 0)continue;const F=Y[V.id];for(const H in F)g(F[H].object),delete F[H];delete Y[V.id]}}}function T(V){for(const j in r){const ce=r[j],ue=V.isInstancedMesh===!0?V.id:0,Y=ce[ue];if(Y!==void 0){for(const F in Y){const H=Y[F];for(const $ in H)g(H[$].object),delete H[$];delete Y[F]}delete ce[ue],Object.keys(ce).length===0&&delete r[j]}}}function N(){X(),u=!0,c!==o&&(c=o,d(c.object))}function X(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:h,reset:N,resetDefaultState:X,dispose:O,releaseStatesOfGeometry:L,releaseStatesOfObject:T,releaseStatesOfProgram:B,initAttributes:w,enableAttribute:y,disableUnusedAttributes:I}}function FT(a,e,i){let r;function o(m){r=m}function c(m,d){a.drawArrays(r,m,d),i.update(d,r,1)}function u(m,d,g){g!==0&&(a.drawArraysInstanced(r,m,d,g),i.update(d,r,g))}function h(m,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,d,0,g);let v=0;for(let x=0;x<g;x++)v+=d[x];i.update(v,r,1)}this.setMode=o,this.render=c,this.renderInstances=u,this.renderMultiDraw=h}function BT(a,e,i,r){let o;function c(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const B=e.get("EXT_texture_filter_anisotropic");o=a.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(B){return!(B!==fa&&r.convert(B)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(B){const T=B===ns&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(B!==Ki&&r.convert(B)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_TYPE)&&B!==ya&&!T)}function m(B){if(B==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=i.precision!==void 0?i.precision:"highp";const g=m(d);g!==d&&(ot("WebGLRenderer:",d,"not supported, using",g,"instead."),d=g);const _=i.logarithmicDepthBuffer===!0,v=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control");i.reversedDepthBuffer===!0&&v===!1&&ot("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const x=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),b=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=a.getParameter(a.MAX_TEXTURE_SIZE),y=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),M=a.getParameter(a.MAX_VERTEX_ATTRIBS),I=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),z=a.getParameter(a.MAX_VARYING_VECTORS),R=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),O=a.getParameter(a.MAX_SAMPLES),L=a.getParameter(a.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:u,textureTypeReadable:h,precision:d,logarithmicDepthBuffer:_,reversedDepthBuffer:v,maxTextures:x,maxVertexTextures:b,maxTextureSize:w,maxCubemapSize:y,maxAttributes:M,maxVertexUniforms:I,maxVaryings:z,maxFragmentUniforms:R,maxSamples:O,samples:L}}function zT(a){const e=this;let i=null,r=0,o=!1,c=!1;const u=new lr,h=new ft,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(_,v){const x=_.length!==0||v||r!==0||o;return o=v,r=_.length,x},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,v){i=g(_,v,0)},this.setState=function(_,v,x){const b=_.clippingPlanes,w=_.clipIntersection,y=_.clipShadows,M=a.get(_);if(!o||b===null||b.length===0||c&&!y)c?g(null):d();else{const I=c?0:r,z=I*4;let R=M.clippingState||null;m.value=R,R=g(b,v,z,x);for(let O=0;O!==z;++O)R[O]=i[O];M.clippingState=R,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=I}};function d(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function g(_,v,x,b){const w=_!==null?_.length:0;let y=null;if(w!==0){if(y=m.value,b!==!0||y===null){const M=x+w*4,I=v.matrixWorldInverse;h.getNormalMatrix(I),(y===null||y.length<M)&&(y=new Float32Array(M));for(let z=0,R=x;z!==w;++z,R+=4)u.copy(_[z]).applyMatrix4(I,h),u.normal.toArray(y,R),y[R+3]=u.constant}m.value=y,m.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,y}}const Hs=4,uv=[.125,.215,.35,.446,.526,.582],ur=20,HT=256,Sl=new Dx,fv=new Nt;let gh=null,_h=0,vh=0,xh=!1;const GT=new ee;class dv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,r=.1,o=100,c={}){const{size:u=256,position:h=GT}=c;gh=this._renderer.getRenderTarget(),_h=this._renderer.getActiveCubeFace(),vh=this._renderer.getActiveMipmapLevel(),xh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,r,o,m,h),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=mv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=pv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(gh,_h,vh),this._renderer.xr.enabled=xh,e.scissorTest=!1,uo(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===pr||e.mapping===Mo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),gh=this._renderer.getRenderTarget(),_h=this._renderer.getActiveCubeFace(),vh=this._renderer.getActiveMipmapLevel(),xh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:zn,minFilter:zn,generateMipmaps:!1,type:ns,format:fa,colorSpace:yu,depthBuffer:!1},o=hv(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=hv(e,i,r);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=VT(c)),this._blurMaterial=XT(c,e,i),this._ggxMaterial=kT(c,e,i)}return o}_compileMaterial(e){const i=new Ji(new $i,e);this._renderer.compile(i,Sl)}_sceneToCubeUV(e,i,r,o,c){const m=new Zi(90,1,i,r),d=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],_=this._renderer,v=_.autoClear,x=_.toneMapping;_.getClearColor(fv),_.toneMapping=ba,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(o),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ji(new Pl,new Up({name:"PMREM.Background",side:Ai,depthWrite:!1,depthTest:!1})));const w=this._backgroundBox,y=w.material;let M=!1;const I=e.background;I?I.isColor&&(y.color.copy(I),e.background=null,M=!0):(y.color.copy(fv),M=!0);for(let z=0;z<6;z++){const R=z%3;R===0?(m.up.set(0,d[z],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+g[z],c.y,c.z)):R===1?(m.up.set(0,0,d[z]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+g[z],c.z)):(m.up.set(0,d[z],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+g[z]));const O=this._cubeSize;uo(o,R*O,z>2?O:0,O,O),_.setRenderTarget(o),M&&_.render(w,m),_.render(e,m)}_.toneMapping=x,_.autoClear=v,e.background=I}_textureToCubeUV(e,i){const r=this._renderer,o=e.mapping===pr||e.mapping===Mo;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=mv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=pv());const c=o?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=c;const h=c.uniforms;h.envMap.value=e;const m=this._cubeSize;uo(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(u,Sl)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const o=this._lodMeshes.length;for(let c=1;c<o;c++)this._applyGGXFilter(e,c-1,c);i.autoClear=r}_applyGGXFilter(e,i,r){const o=this._renderer,c=this._pingPongRenderTarget,u=this._ggxMaterial,h=this._lodMeshes[r];h.material=u;const m=u.uniforms,d=r/(this._lodMeshes.length-1),g=i/(this._lodMeshes.length-1),_=Math.sqrt(d*d-g*g),v=0+d*1.25,x=_*v,{_lodMax:b}=this,w=this._sizeLods[r],y=3*w*(r>b-Hs?r-b+Hs:0),M=4*(this._cubeSize-w);m.envMap.value=e.texture,m.roughness.value=x,m.mipInt.value=b-i,uo(c,y,M,3*w,2*w),o.setRenderTarget(c),o.render(h,Sl),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=b-r,uo(e,y,M,3*w,2*w),o.setRenderTarget(e),o.render(h,Sl)}_blur(e,i,r,o,c){const u=this._pingPongRenderTarget;this._halfBlur(e,u,i,r,o,"latitudinal",c),this._halfBlur(u,e,r,r,o,"longitudinal",c)}_halfBlur(e,i,r,o,c,u,h){const m=this._renderer,d=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&Ot("blur direction must be either latitudinal or longitudinal!");const g=3,_=this._lodMeshes[o];_.material=d;const v=d.uniforms,x=this._sizeLods[r]-1,b=isFinite(c)?Math.PI/(2*x):2*Math.PI/(2*ur-1),w=c/b,y=isFinite(c)?1+Math.floor(g*w):ur;y>ur&&ot(`sigmaRadians, ${c}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${ur}`);const M=[];let I=0;for(let B=0;B<ur;++B){const T=B/w,N=Math.exp(-T*T/2);M.push(N),B===0?I+=N:B<y&&(I+=2*N)}for(let B=0;B<M.length;B++)M[B]=M[B]/I;v.envMap.value=e.texture,v.samples.value=y,v.weights.value=M,v.latitudinal.value=u==="latitudinal",h&&(v.poleAxis.value=h);const{_lodMax:z}=this;v.dTheta.value=b,v.mipInt.value=z-r;const R=this._sizeLods[o],O=3*R*(o>z-Hs?o-z+Hs:0),L=4*(this._cubeSize-R);uo(i,O,L,3*R,2*R),m.setRenderTarget(i),m.render(_,Sl)}}function VT(a){const e=[],i=[],r=[];let o=a;const c=a-Hs+1+uv.length;for(let u=0;u<c;u++){const h=Math.pow(2,o);e.push(h);let m=1/h;u>a-Hs?m=uv[u-a+Hs-1]:u===0&&(m=0),i.push(m);const d=1/(h-2),g=-d,_=1+d,v=[g,g,_,g,_,_,g,g,_,_,g,_],x=6,b=6,w=3,y=2,M=1,I=new Float32Array(w*b*x),z=new Float32Array(y*b*x),R=new Float32Array(M*b*x);for(let L=0;L<x;L++){const B=L%3*2/3-1,T=L>2?0:-1,N=[B,T,0,B+2/3,T,0,B+2/3,T+1,0,B,T,0,B+2/3,T+1,0,B,T+1,0];I.set(N,w*b*L),z.set(v,y*b*L);const X=[L,L,L,L,L,L];R.set(X,M*b*L)}const O=new $i;O.setAttribute("position",new Aa(I,w)),O.setAttribute("uv",new Aa(z,y)),O.setAttribute("faceIndex",new Aa(R,M)),r.push(new Ji(O,null)),o>Hs&&o--}return{lodMeshes:r,sizeLods:e,sigmas:i}}function hv(a,e,i){const r=new Ta(a,e,i);return r.texture.mapping=Cu,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function uo(a,e,i,r,o){a.viewport.set(e,i,r,o),a.scissor.set(e,i,r,o)}function kT(a,e,i){return new ea({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:HT,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Du(),fragmentShader:`

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
		`,blending:$a,depthTest:!1,depthWrite:!1})}function XT(a,e,i){const r=new Float32Array(ur),o=new ee(0,1,0);return new ea({name:"SphericalGaussianBlur",defines:{n:ur,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Du(),fragmentShader:`

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
		`,blending:$a,depthTest:!1,depthWrite:!1})}function pv(){return new ea({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Du(),fragmentShader:`

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
		`,blending:$a,depthTest:!1,depthWrite:!1})}function mv(){return new ea({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Du(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:$a,depthTest:!1,depthWrite:!1})}function Du(){return`

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
	`}class Ux extends Ta{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new Tx(o),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new Pl(5,5,5),c=new ea({name:"CubemapFromEquirect",uniforms:Eo(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Ai,blending:$a});c.uniforms.tEquirect.value=i;const u=new Ji(o,c),h=i.minFilter;return i.minFilter===zs&&(i.minFilter=zn),new KE(1,10,this).update(e,u),i.minFilter=h,u.geometry.dispose(),u.material.dispose(),this}clear(e,i=!0,r=!0,o=!0){const c=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(i,r,o);e.setRenderTarget(c)}}function WT(a){let e=new WeakMap,i=new WeakMap,r=null;function o(v,x=!1){return v==null?null:x?u(v):c(v)}function c(v){if(v&&v.isTexture){const x=v.mapping;if(x===Vd||x===kd)if(e.has(v)){const b=e.get(v).texture;return h(b,v.mapping)}else{const b=v.image;if(b&&b.height>0){const w=new Ux(b.height);return w.fromEquirectangularTexture(a,v),e.set(v,w),v.addEventListener("dispose",d),h(w.texture,v.mapping)}else return null}}return v}function u(v){if(v&&v.isTexture){const x=v.mapping,b=x===Vd||x===kd,w=x===pr||x===Mo;if(b||w){let y=i.get(v);const M=y!==void 0?y.texture.pmremVersion:0;if(v.isRenderTargetTexture&&v.pmremVersion!==M)return r===null&&(r=new dv(a)),y=b?r.fromEquirectangular(v,y):r.fromCubemap(v,y),y.texture.pmremVersion=v.pmremVersion,i.set(v,y),y.texture;if(y!==void 0)return y.texture;{const I=v.image;return b&&I&&I.height>0||w&&I&&m(I)?(r===null&&(r=new dv(a)),y=b?r.fromEquirectangular(v):r.fromCubemap(v),y.texture.pmremVersion=v.pmremVersion,i.set(v,y),v.addEventListener("dispose",g),y.texture):null}}}return v}function h(v,x){return x===Vd?v.mapping=pr:x===kd&&(v.mapping=Mo),v}function m(v){let x=0;const b=6;for(let w=0;w<b;w++)v[w]!==void 0&&x++;return x===b}function d(v){const x=v.target;x.removeEventListener("dispose",d);const b=e.get(x);b!==void 0&&(e.delete(x),b.dispose())}function g(v){const x=v.target;x.removeEventListener("dispose",g);const b=i.get(x);b!==void 0&&(i.delete(x),b.dispose())}function _(){e=new WeakMap,i=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:o,dispose:_}}function YT(a){const e={};function i(r){if(e[r]!==void 0)return e[r];const o=a.getExtension(r);return e[r]=o,o}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const o=i(r);return o===null&&go("WebGLRenderer: "+r+" extension not supported."),o}}}function qT(a,e,i,r){const o={},c=new WeakMap;function u(_){const v=_.target;v.index!==null&&e.remove(v.index);for(const b in v.attributes)e.remove(v.attributes[b]);v.removeEventListener("dispose",u),delete o[v.id];const x=c.get(v);x&&(e.remove(x),c.delete(v)),r.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,i.memory.geometries--}function h(_,v){return o[v.id]===!0||(v.addEventListener("dispose",u),o[v.id]=!0,i.memory.geometries++),v}function m(_){const v=_.attributes;for(const x in v)e.update(v[x],a.ARRAY_BUFFER)}function d(_){const v=[],x=_.index,b=_.attributes.position;let w=0;if(b===void 0)return;if(x!==null){const I=x.array;w=x.version;for(let z=0,R=I.length;z<R;z+=3){const O=I[z+0],L=I[z+1],B=I[z+2];v.push(O,L,L,B,B,O)}}else{const I=b.array;w=b.version;for(let z=0,R=I.length/3-1;z<R;z+=3){const O=z+0,L=z+1,B=z+2;v.push(O,L,L,B,B,O)}}const y=new(b.count>=65535?Ex:yx)(v,1);y.version=w;const M=c.get(_);M&&e.remove(M),c.set(_,y)}function g(_){const v=c.get(_);if(v){const x=_.index;x!==null&&v.version<x.version&&d(_)}else d(_);return c.get(_)}return{get:h,update:m,getWireframeAttribute:g}}function jT(a,e,i){let r;function o(_){r=_}let c,u;function h(_){c=_.type,u=_.bytesPerElement}function m(_,v){a.drawElements(r,v,c,_*u),i.update(v,r,1)}function d(_,v,x){x!==0&&(a.drawElementsInstanced(r,v,c,_*u,x),i.update(v,r,x))}function g(_,v,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,v,0,c,_,0,x);let w=0;for(let y=0;y<x;y++)w+=v[y];i.update(w,r,1)}this.setMode=o,this.setIndex=h,this.render=m,this.renderInstances=d,this.renderMultiDraw=g}function ZT(a){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,u,h){switch(i.calls++,u){case a.TRIANGLES:i.triangles+=h*(c/3);break;case a.LINES:i.lines+=h*(c/2);break;case a.LINE_STRIP:i.lines+=h*(c-1);break;case a.LINE_LOOP:i.lines+=h*c;break;case a.POINTS:i.points+=h*c;break;default:Ot("WebGLInfo: Unknown draw mode:",u);break}}function o(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:o,update:r}}function KT(a,e,i){const r=new WeakMap,o=new Tn;function c(u,h,m){const d=u.morphTargetInfluences,g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=g!==void 0?g.length:0;let v=r.get(h);if(v===void 0||v.count!==_){let X=function(){T.dispose(),r.delete(h),h.removeEventListener("dispose",X)};var x=X;v!==void 0&&v.texture.dispose();const b=h.morphAttributes.position!==void 0,w=h.morphAttributes.normal!==void 0,y=h.morphAttributes.color!==void 0,M=h.morphAttributes.position||[],I=h.morphAttributes.normal||[],z=h.morphAttributes.color||[];let R=0;b===!0&&(R=1),w===!0&&(R=2),y===!0&&(R=3);let O=h.attributes.position.count*R,L=1;O>e.maxTextureSize&&(L=Math.ceil(O/e.maxTextureSize),O=e.maxTextureSize);const B=new Float32Array(O*L*4*_),T=new xx(B,O,L,_);T.type=ya,T.needsUpdate=!0;const N=R*4;for(let V=0;V<_;V++){const j=M[V],ce=I[V],ue=z[V],Y=O*L*4*V;for(let F=0;F<j.count;F++){const H=F*N;b===!0&&(o.fromBufferAttribute(j,F),B[Y+H+0]=o.x,B[Y+H+1]=o.y,B[Y+H+2]=o.z,B[Y+H+3]=0),w===!0&&(o.fromBufferAttribute(ce,F),B[Y+H+4]=o.x,B[Y+H+5]=o.y,B[Y+H+6]=o.z,B[Y+H+7]=0),y===!0&&(o.fromBufferAttribute(ue,F),B[Y+H+8]=o.x,B[Y+H+9]=o.y,B[Y+H+10]=o.z,B[Y+H+11]=ue.itemSize===4?o.w:1)}}v={count:_,texture:T,size:new zt(O,L)},r.set(h,v),h.addEventListener("dispose",X)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)m.getUniforms().setValue(a,"morphTexture",u.morphTexture,i);else{let b=0;for(let y=0;y<d.length;y++)b+=d[y];const w=h.morphTargetsRelative?1:1-b;m.getUniforms().setValue(a,"morphTargetBaseInfluence",w),m.getUniforms().setValue(a,"morphTargetInfluences",d)}m.getUniforms().setValue(a,"morphTargetsTexture",v.texture,i),m.getUniforms().setValue(a,"morphTargetsTextureSize",v.size)}return{update:c}}function QT(a,e,i,r,o){let c=new WeakMap;function u(d){const g=o.render.frame,_=d.geometry,v=e.get(d,_);if(c.get(v)!==g&&(e.update(v),c.set(v,g)),d.isInstancedMesh&&(d.hasEventListener("dispose",m)===!1&&d.addEventListener("dispose",m),c.get(d)!==g&&(i.update(d.instanceMatrix,a.ARRAY_BUFFER),d.instanceColor!==null&&i.update(d.instanceColor,a.ARRAY_BUFFER),c.set(d,g))),d.isSkinnedMesh){const x=d.skeleton;c.get(x)!==g&&(x.update(),c.set(x,g))}return v}function h(){c=new WeakMap}function m(d){const g=d.target;g.removeEventListener("dispose",m),r.releaseStatesOfObject(g),i.remove(g.instanceMatrix),g.instanceColor!==null&&i.remove(g.instanceColor)}return{update:u,dispose:h}}const JT={[ix]:"LINEAR_TONE_MAPPING",[ax]:"REINHARD_TONE_MAPPING",[sx]:"CINEON_TONE_MAPPING",[rx]:"ACES_FILMIC_TONE_MAPPING",[lx]:"AGX_TONE_MAPPING",[cx]:"NEUTRAL_TONE_MAPPING",[ox]:"CUSTOM_TONE_MAPPING"};function $T(a,e,i,r,o,c){const u=new Ta(e,i,{type:a,depthBuffer:o,stencilBuffer:c,samples:r?4:0,depthTexture:o?new yo(e,i):void 0}),h=new Ta(e,i,{type:ns,depthBuffer:!1,stencilBuffer:!1}),m=new $i;m.setAttribute("position",new Qi([-1,3,0,-1,-1,0,3,-1,0],3)),m.setAttribute("uv",new Qi([0,2,0,0,2,0],2));const d=new qE({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),g=new Ji(m,d),_=new Dx(-1,1,1,-1,0,1);let v=null,x=null,b=!1,w,y=null,M=[],I=!1;this.setSize=function(z,R){u.setSize(z,R),h.setSize(z,R);for(let O=0;O<M.length;O++){const L=M[O];L.setSize&&L.setSize(z,R)}},this.setEffects=function(z){M=z,I=M.length>0&&M[0].isRenderPass===!0;const R=u.width,O=u.height;for(let L=0;L<M.length;L++){const B=M[L];B.setSize&&B.setSize(R,O)}},this.begin=function(z,R){if(b||z.toneMapping===ba&&M.length===0)return!1;if(y=R,R!==null){const O=R.width,L=R.height;(u.width!==O||u.height!==L)&&this.setSize(O,L)}return I===!1&&z.setRenderTarget(u),w=z.toneMapping,z.toneMapping=ba,!0},this.hasRenderPass=function(){return I},this.end=function(z,R){z.toneMapping=w,b=!0;let O=u,L=h;for(let B=0;B<M.length;B++){const T=M[B];if(T.enabled!==!1&&(T.render(z,L,O,R),T.needsSwap!==!1)){const N=O;O=L,L=N}}if(v!==z.outputColorSpace||x!==z.toneMapping){v=z.outputColorSpace,x=z.toneMapping,d.defines={},Dt.getTransfer(v)===Kt&&(d.defines.SRGB_TRANSFER="");const B=JT[x];B&&(d.defines[B]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=O.texture,z.setRenderTarget(y),z.render(g,_),y=null,b=!1},this.isCompositing=function(){return b},this.dispose=function(){u.depthTexture&&u.depthTexture.dispose(),u.dispose(),h.dispose(),m.dispose(),d.dispose()}}const Ox=new li,gp=new yo(1,1),Px=new xx,Ix=new ME,Fx=new Tx,gv=[],_v=[],vv=new Float32Array(16),xv=new Float32Array(9),Sv=new Float32Array(4);function Ao(a,e,i){const r=a[0];if(r<=0||r>0)return a;const o=e*i;let c=gv[o];if(c===void 0&&(c=new Float32Array(o),gv[o]=c),e!==0){r.toArray(c,0);for(let u=1,h=0;u!==e;++u)h+=i,a[u].toArray(c,h)}return c}function Gn(a,e){if(a.length!==e.length)return!1;for(let i=0,r=a.length;i<r;i++)if(a[i]!==e[i])return!1;return!0}function Vn(a,e){for(let i=0,r=e.length;i<r;i++)a[i]=e[i]}function Lu(a,e){let i=_v[e];i===void 0&&(i=new Int32Array(e),_v[e]=i);for(let r=0;r!==e;++r)i[r]=a.allocateTextureUnit();return i}function eA(a,e){const i=this.cache;i[0]!==e&&(a.uniform1f(this.addr,e),i[0]=e)}function tA(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Gn(i,e))return;a.uniform2fv(this.addr,e),Vn(i,e)}}function nA(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(Gn(i,e))return;a.uniform3fv(this.addr,e),Vn(i,e)}}function iA(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Gn(i,e))return;a.uniform4fv(this.addr,e),Vn(i,e)}}function aA(a,e){const i=this.cache,r=e.elements;if(r===void 0){if(Gn(i,e))return;a.uniformMatrix2fv(this.addr,!1,e),Vn(i,e)}else{if(Gn(i,r))return;Sv.set(r),a.uniformMatrix2fv(this.addr,!1,Sv),Vn(i,r)}}function sA(a,e){const i=this.cache,r=e.elements;if(r===void 0){if(Gn(i,e))return;a.uniformMatrix3fv(this.addr,!1,e),Vn(i,e)}else{if(Gn(i,r))return;xv.set(r),a.uniformMatrix3fv(this.addr,!1,xv),Vn(i,r)}}function rA(a,e){const i=this.cache,r=e.elements;if(r===void 0){if(Gn(i,e))return;a.uniformMatrix4fv(this.addr,!1,e),Vn(i,e)}else{if(Gn(i,r))return;vv.set(r),a.uniformMatrix4fv(this.addr,!1,vv),Vn(i,r)}}function oA(a,e){const i=this.cache;i[0]!==e&&(a.uniform1i(this.addr,e),i[0]=e)}function lA(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(a.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Gn(i,e))return;a.uniform2iv(this.addr,e),Vn(i,e)}}function cA(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(a.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Gn(i,e))return;a.uniform3iv(this.addr,e),Vn(i,e)}}function uA(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Gn(i,e))return;a.uniform4iv(this.addr,e),Vn(i,e)}}function fA(a,e){const i=this.cache;i[0]!==e&&(a.uniform1ui(this.addr,e),i[0]=e)}function dA(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(a.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Gn(i,e))return;a.uniform2uiv(this.addr,e),Vn(i,e)}}function hA(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(a.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Gn(i,e))return;a.uniform3uiv(this.addr,e),Vn(i,e)}}function pA(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Gn(i,e))return;a.uniform4uiv(this.addr,e),Vn(i,e)}}function mA(a,e,i){const r=this.cache,o=i.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o);let c;this.type===a.SAMPLER_2D_SHADOW?(gp.compareFunction=i.isReversedDepthBuffer()?wp:Cp,c=gp):c=Ox,i.setTexture2D(e||c,o)}function gA(a,e,i){const r=this.cache,o=i.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o),i.setTexture3D(e||Ix,o)}function _A(a,e,i){const r=this.cache,o=i.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o),i.setTextureCube(e||Fx,o)}function vA(a,e,i){const r=this.cache,o=i.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o),i.setTexture2DArray(e||Px,o)}function xA(a){switch(a){case 5126:return eA;case 35664:return tA;case 35665:return nA;case 35666:return iA;case 35674:return aA;case 35675:return sA;case 35676:return rA;case 5124:case 35670:return oA;case 35667:case 35671:return lA;case 35668:case 35672:return cA;case 35669:case 35673:return uA;case 5125:return fA;case 36294:return dA;case 36295:return hA;case 36296:return pA;case 35678:case 36198:case 36298:case 36306:case 35682:return mA;case 35679:case 36299:case 36307:return gA;case 35680:case 36300:case 36308:case 36293:return _A;case 36289:case 36303:case 36311:case 36292:return vA}}function SA(a,e){a.uniform1fv(this.addr,e)}function MA(a,e){const i=Ao(e,this.size,2);a.uniform2fv(this.addr,i)}function yA(a,e){const i=Ao(e,this.size,3);a.uniform3fv(this.addr,i)}function EA(a,e){const i=Ao(e,this.size,4);a.uniform4fv(this.addr,i)}function bA(a,e){const i=Ao(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,i)}function TA(a,e){const i=Ao(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,i)}function AA(a,e){const i=Ao(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,i)}function RA(a,e){a.uniform1iv(this.addr,e)}function CA(a,e){a.uniform2iv(this.addr,e)}function wA(a,e){a.uniform3iv(this.addr,e)}function DA(a,e){a.uniform4iv(this.addr,e)}function LA(a,e){a.uniform1uiv(this.addr,e)}function NA(a,e){a.uniform2uiv(this.addr,e)}function UA(a,e){a.uniform3uiv(this.addr,e)}function OA(a,e){a.uniform4uiv(this.addr,e)}function PA(a,e,i){const r=this.cache,o=e.length,c=Lu(i,o);Gn(r,c)||(a.uniform1iv(this.addr,c),Vn(r,c));let u;this.type===a.SAMPLER_2D_SHADOW?u=gp:u=Ox;for(let h=0;h!==o;++h)i.setTexture2D(e[h]||u,c[h])}function IA(a,e,i){const r=this.cache,o=e.length,c=Lu(i,o);Gn(r,c)||(a.uniform1iv(this.addr,c),Vn(r,c));for(let u=0;u!==o;++u)i.setTexture3D(e[u]||Ix,c[u])}function FA(a,e,i){const r=this.cache,o=e.length,c=Lu(i,o);Gn(r,c)||(a.uniform1iv(this.addr,c),Vn(r,c));for(let u=0;u!==o;++u)i.setTextureCube(e[u]||Fx,c[u])}function BA(a,e,i){const r=this.cache,o=e.length,c=Lu(i,o);Gn(r,c)||(a.uniform1iv(this.addr,c),Vn(r,c));for(let u=0;u!==o;++u)i.setTexture2DArray(e[u]||Px,c[u])}function zA(a){switch(a){case 5126:return SA;case 35664:return MA;case 35665:return yA;case 35666:return EA;case 35674:return bA;case 35675:return TA;case 35676:return AA;case 5124:case 35670:return RA;case 35667:case 35671:return CA;case 35668:case 35672:return wA;case 35669:case 35673:return DA;case 5125:return LA;case 36294:return NA;case 36295:return UA;case 36296:return OA;case 35678:case 36198:case 36298:case 36306:case 35682:return PA;case 35679:case 36299:case 36307:return IA;case 35680:case 36300:case 36308:case 36293:return FA;case 36289:case 36303:case 36311:case 36292:return BA}}class HA{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=xA(i.type)}}class GA{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=zA(i.type)}}class VA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const o=this.seq;for(let c=0,u=o.length;c!==u;++c){const h=o[c];h.setValue(e,i[h.id],r)}}}const Sh=/(\w+)(\])?(\[|\.)?/g;function Mv(a,e){a.seq.push(e),a.map[e.id]=e}function kA(a,e,i){const r=a.name,o=r.length;for(Sh.lastIndex=0;;){const c=Sh.exec(r),u=Sh.lastIndex;let h=c[1];const m=c[2]==="]",d=c[3];if(m&&(h=h|0),d===void 0||d==="["&&u+2===o){Mv(i,d===void 0?new HA(h,a,e):new GA(h,a,e));break}else{let _=i.map[h];_===void 0&&(_=new VA(h),Mv(i,_)),i=_}}}class vu{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let u=0;u<r;++u){const h=e.getActiveUniform(i,u),m=e.getUniformLocation(i,h.name);kA(h,m,this)}const o=[],c=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(u):c.push(u);o.length>0&&(this.seq=o.concat(c))}setValue(e,i,r,o){const c=this.map[i];c!==void 0&&c.setValue(e,r,o)}setOptional(e,i,r){const o=i[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,i,r,o){for(let c=0,u=i.length;c!==u;++c){const h=i[c],m=r[h.id];m.needsUpdate!==!1&&h.setValue(e,m.value,o)}}static seqWithValue(e,i){const r=[];for(let o=0,c=e.length;o!==c;++o){const u=e[o];u.id in i&&r.push(u)}return r}}function yv(a,e,i){const r=a.createShader(e);return a.shaderSource(r,i),a.compileShader(r),r}const XA=37297;let WA=0;function YA(a,e){const i=a.split(`
`),r=[],o=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let u=o;u<c;u++){const h=u+1;r.push(`${h===e?">":" "} ${h}: ${i[u]}`)}return r.join(`
`)}const Ev=new ft;function qA(a){Dt._getMatrix(Ev,Dt.workingColorSpace,a);const e=`mat3( ${Ev.elements.map(i=>i.toFixed(4))} )`;switch(Dt.getTransfer(a)){case Eu:return[e,"LinearTransferOETF"];case Kt:return[e,"sRGBTransferOETF"];default:return ot("WebGLProgram: Unsupported color space: ",a),[e,"LinearTransferOETF"]}}function bv(a,e,i){const r=a.getShaderParameter(e,a.COMPILE_STATUS),c=(a.getShaderInfoLog(e)||"").trim();if(r&&c==="")return"";const u=/ERROR: 0:(\d+)/.exec(c);if(u){const h=parseInt(u[1]);return i.toUpperCase()+`

`+c+`

`+YA(a.getShaderSource(e),h)}else return c}function jA(a,e){const i=qA(e);return[`vec4 ${a}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const ZA={[ix]:"Linear",[ax]:"Reinhard",[sx]:"Cineon",[rx]:"ACESFilmic",[lx]:"AgX",[cx]:"Neutral",[ox]:"Custom"};function KA(a,e){const i=ZA[e];return i===void 0?(ot("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+a+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+a+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const fu=new ee;function QA(){Dt.getLuminanceCoefficients(fu);const a=fu.x.toFixed(4),e=fu.y.toFixed(4),i=fu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${a}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function JA(a){return[a.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",a.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(bl).join(`
`)}function $A(a){const e=[];for(const i in a){const r=a[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function e2(a,e){const i={},r=a.getProgramParameter(e,a.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const c=a.getActiveAttrib(e,o),u=c.name;let h=1;c.type===a.FLOAT_MAT2&&(h=2),c.type===a.FLOAT_MAT3&&(h=3),c.type===a.FLOAT_MAT4&&(h=4),i[u]={type:c.type,location:a.getAttribLocation(e,u),locationSize:h}}return i}function bl(a){return a!==""}function Tv(a,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Av(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const t2=/^[ \t]*#include +<([\w\d./]+)>/gm;function _p(a){return a.replace(t2,i2)}const n2=new Map;function i2(a,e){let i=vt[e];if(i===void 0){const r=n2.get(e);if(r!==void 0)i=vt[r],ot('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return _p(i)}const a2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Rv(a){return a.replace(a2,s2)}function s2(a,e,i,r){let o="";for(let c=parseInt(e);c<parseInt(i);c++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return o}function Cv(a){let e=`precision ${a.precision} float;
	precision ${a.precision} int;
	precision ${a.precision} sampler2D;
	precision ${a.precision} samplerCube;
	precision ${a.precision} sampler3D;
	precision ${a.precision} sampler2DArray;
	precision ${a.precision} sampler2DShadow;
	precision ${a.precision} samplerCubeShadow;
	precision ${a.precision} sampler2DArrayShadow;
	precision ${a.precision} isampler2D;
	precision ${a.precision} isampler3D;
	precision ${a.precision} isamplerCube;
	precision ${a.precision} isampler2DArray;
	precision ${a.precision} usampler2D;
	precision ${a.precision} usampler3D;
	precision ${a.precision} usamplerCube;
	precision ${a.precision} usampler2DArray;
	`;return a.precision==="highp"?e+=`
#define HIGH_PRECISION`:a.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const r2={[hu]:"SHADOWMAP_TYPE_PCF",[yl]:"SHADOWMAP_TYPE_VSM"};function o2(a){return r2[a.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const l2={[pr]:"ENVMAP_TYPE_CUBE",[Mo]:"ENVMAP_TYPE_CUBE",[Cu]:"ENVMAP_TYPE_CUBE_UV"};function c2(a){return a.envMap===!1?"ENVMAP_TYPE_CUBE":l2[a.envMapMode]||"ENVMAP_TYPE_CUBE"}const u2={[Mo]:"ENVMAP_MODE_REFRACTION"};function f2(a){return a.envMap===!1?"ENVMAP_MODE_REFLECTION":u2[a.envMapMode]||"ENVMAP_MODE_REFLECTION"}const d2={[nx]:"ENVMAP_BLENDING_MULTIPLY",[zy]:"ENVMAP_BLENDING_MIX",[Hy]:"ENVMAP_BLENDING_ADD"};function h2(a){return a.envMap===!1?"ENVMAP_BLENDING_NONE":d2[a.combine]||"ENVMAP_BLENDING_NONE"}function p2(a){const e=a.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function m2(a,e,i,r){const o=a.getContext(),c=i.defines;let u=i.vertexShader,h=i.fragmentShader;const m=o2(i),d=c2(i),g=f2(i),_=h2(i),v=p2(i),x=JA(i),b=$A(c),w=o.createProgram();let y,M,I=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(bl).join(`
`),y.length>0&&(y+=`
`),M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(bl).join(`
`),M.length>0&&(M+=`
`)):(y=[Cv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(bl).join(`
`),M=[Cv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+d:"",i.envMap?"#define "+g:"",i.envMap?"#define "+_:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==ba?"#define TONE_MAPPING":"",i.toneMapping!==ba?vt.tonemapping_pars_fragment:"",i.toneMapping!==ba?KA("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",vt.colorspace_pars_fragment,jA("linearToOutputTexel",i.outputColorSpace),QA(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(bl).join(`
`)),u=_p(u),u=Tv(u,i),u=Av(u,i),h=_p(h),h=Tv(h,i),h=Av(h,i),u=Rv(u),h=Rv(h),i.isRawShaderMaterial!==!0&&(I=`#version 300 es
`,y=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,M=["#define varying in",i.glslVersion===z_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===z_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+M);const z=I+y+u,R=I+M+h,O=yv(o,o.VERTEX_SHADER,z),L=yv(o,o.FRAGMENT_SHADER,R);o.attachShader(w,O),o.attachShader(w,L),i.index0AttributeName!==void 0?o.bindAttribLocation(w,0,i.index0AttributeName):i.hasPositionAttribute===!0&&o.bindAttribLocation(w,0,"position"),o.linkProgram(w);function B(V){if(a.debug.checkShaderErrors){const j=o.getProgramInfoLog(w)||"",ce=o.getShaderInfoLog(O)||"",ue=o.getShaderInfoLog(L)||"",Y=j.trim(),F=ce.trim(),H=ue.trim();let $=!0,me=!0;if(o.getProgramParameter(w,o.LINK_STATUS)===!1)if($=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(o,w,O,L);else{const xe=bv(o,O,"vertex"),P=bv(o,L,"fragment");Ot("WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(w,o.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+Y+`
`+xe+`
`+P)}else Y!==""?ot("WebGLProgram: Program Info Log:",Y):(F===""||H==="")&&(me=!1);me&&(V.diagnostics={runnable:$,programLog:Y,vertexShader:{log:F,prefix:y},fragmentShader:{log:H,prefix:M}})}o.deleteShader(O),o.deleteShader(L),T=new vu(o,w),N=e2(o,w)}let T;this.getUniforms=function(){return T===void 0&&B(this),T};let N;this.getAttributes=function(){return N===void 0&&B(this),N};let X=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return X===!1&&(X=o.getProgramParameter(w,XA)),X},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(w),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=WA++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=O,this.fragmentShader=L,this}let g2=0;class _2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,i,r){const o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new v2(e),i.set(e,r)),r}}class v2{constructor(e){this.id=g2++,this.code=e,this.usedTimes=0}}function x2(a){return a===mr||a===Su||a===Mu}function S2(a,e,i,r,o,c){const u=new Sx,h=new _2,m=new Set,d=[],g=new Map,_=r.logarithmicDepthBuffer;let v=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(T){return m.add(T),T===0?"uv":`uv${T}`}function w(T,N,X,V,j,ce){const ue=V.fog,Y=j.geometry,F=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?V.environment:null,H=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,$=e.get(T.envMap||F,H),me=$&&$.mapping===Cu?$.image.height:null,xe=x[T.type];T.precision!==null&&(v=r.getMaxPrecision(T.precision),v!==T.precision&&ot("WebGLProgram.getParameters:",T.precision,"not supported, using",v,"instead."));const P=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,K=P!==void 0?P.length:0;let Se=0;Y.morphAttributes.position!==void 0&&(Se=1),Y.morphAttributes.normal!==void 0&&(Se=2),Y.morphAttributes.color!==void 0&&(Se=3);let Te,Ce,ie,ye;if(xe){const We=Sa[xe];Te=We.vertexShader,Ce=We.fragmentShader}else{Te=T.vertexShader,Ce=T.fragmentShader;const We=h.getVertexShaderStage(T),an=h.getFragmentShaderStage(T);h.update(T,We,an),ie=We.id,ye=an.id}const be=a.getRenderTarget(),He=a.state.buffers.depth.getReversed(),at=j.isInstancedMesh===!0,et=j.isBatchedMesh===!0,Jt=!!T.map,dt=!!T.matcap,xt=!!$,gt=!!T.aoMap,ht=!!T.lightMap,un=!!T.bumpMap&&T.wireframe===!1,fn=!!T.normalMap,on=!!T.displacementMap,vn=!!T.emissiveMap,Ut=!!T.metalnessMap,ln=!!T.roughnessMap,Z=T.anisotropy>0,Ht=T.clearcoat>0,St=T.dispersion>0,U=T.iridescence>0,E=T.sheen>0,Q=T.transmission>0,ae=Z&&!!T.anisotropyMap,he=Ht&&!!T.clearcoatMap,Ae=Ht&&!!T.clearcoatNormalMap,Ne=Ht&&!!T.clearcoatRoughnessMap,de=U&&!!T.iridescenceMap,pe=U&&!!T.iridescenceThicknessMap,we=E&&!!T.sheenColorMap,ze=E&&!!T.sheenRoughnessMap,Oe=!!T.specularMap,Pe=!!T.specularColorMap,$e=!!T.specularIntensityMap,Ke=Q&&!!T.transmissionMap,nt=Q&&!!T.thicknessMap,k=!!T.gradientMap,De=!!T.alphaMap,_e=T.alphaTest>0,Le=!!T.alphaHash,Ie=!!T.extensions;let Ee=ba;T.toneMapped&&(be===null||be.isXRRenderTarget===!0)&&(Ee=a.toneMapping);const Ze={shaderID:xe,shaderType:T.type,shaderName:T.name,vertexShader:Te,fragmentShader:Ce,defines:T.defines,customVertexShaderID:ie,customFragmentShaderID:ye,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:v,batching:et,batchingColor:et&&j._colorsTexture!==null,instancing:at,instancingColor:at&&j.instanceColor!==null,instancingMorph:at&&j.morphTexture!==null,outputColorSpace:be===null?a.outputColorSpace:be.isXRRenderTarget===!0?be.texture.colorSpace:Dt.workingColorSpace,alphaToCoverage:!!T.alphaToCoverage,map:Jt,matcap:dt,envMap:xt,envMapMode:xt&&$.mapping,envMapCubeUVHeight:me,aoMap:gt,lightMap:ht,bumpMap:un,normalMap:fn,displacementMap:on,emissiveMap:vn,normalMapObjectSpace:fn&&T.normalMapType===ky,normalMapTangentSpace:fn&&T.normalMapType===I_,packedNormalMap:fn&&T.normalMapType===I_&&x2(T.normalMap.format),metalnessMap:Ut,roughnessMap:ln,anisotropy:Z,anisotropyMap:ae,clearcoat:Ht,clearcoatMap:he,clearcoatNormalMap:Ae,clearcoatRoughnessMap:Ne,dispersion:St,iridescence:U,iridescenceMap:de,iridescenceThicknessMap:pe,sheen:E,sheenColorMap:we,sheenRoughnessMap:ze,specularMap:Oe,specularColorMap:Pe,specularIntensityMap:$e,transmission:Q,transmissionMap:Ke,thicknessMap:nt,gradientMap:k,opaque:T.transparent===!1&&T.blending===mo&&T.alphaToCoverage===!1,alphaMap:De,alphaTest:_e,alphaHash:Le,combine:T.combine,mapUv:Jt&&b(T.map.channel),aoMapUv:gt&&b(T.aoMap.channel),lightMapUv:ht&&b(T.lightMap.channel),bumpMapUv:un&&b(T.bumpMap.channel),normalMapUv:fn&&b(T.normalMap.channel),displacementMapUv:on&&b(T.displacementMap.channel),emissiveMapUv:vn&&b(T.emissiveMap.channel),metalnessMapUv:Ut&&b(T.metalnessMap.channel),roughnessMapUv:ln&&b(T.roughnessMap.channel),anisotropyMapUv:ae&&b(T.anisotropyMap.channel),clearcoatMapUv:he&&b(T.clearcoatMap.channel),clearcoatNormalMapUv:Ae&&b(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ne&&b(T.clearcoatRoughnessMap.channel),iridescenceMapUv:de&&b(T.iridescenceMap.channel),iridescenceThicknessMapUv:pe&&b(T.iridescenceThicknessMap.channel),sheenColorMapUv:we&&b(T.sheenColorMap.channel),sheenRoughnessMapUv:ze&&b(T.sheenRoughnessMap.channel),specularMapUv:Oe&&b(T.specularMap.channel),specularColorMapUv:Pe&&b(T.specularColorMap.channel),specularIntensityMapUv:$e&&b(T.specularIntensityMap.channel),transmissionMapUv:Ke&&b(T.transmissionMap.channel),thicknessMapUv:nt&&b(T.thicknessMap.channel),alphaMapUv:De&&b(T.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(fn||Z),vertexNormals:!!Y.attributes.normal,vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:j.isPoints===!0&&!!Y.attributes.uv&&(Jt||De),fog:!!ue,useFog:T.fog===!0,fogExp2:!!ue&&ue.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||Y.attributes.normal===void 0&&fn===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:He,skinning:j.isSkinnedMesh===!0,hasPositionAttribute:Y.attributes.position!==void 0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:Se,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numLightProbes:N.numLightProbes,numLightProbeGrids:ce.length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:T.dithering,shadowMapEnabled:a.shadowMap.enabled&&X.length>0,shadowMapType:a.shadowMap.type,toneMapping:Ee,decodeVideoTexture:Jt&&T.map.isVideoTexture===!0&&Dt.getTransfer(T.map.colorSpace)===Kt,decodeVideoTextureEmissive:vn&&T.emissiveMap.isVideoTexture===!0&&Dt.getTransfer(T.emissiveMap.colorSpace)===Kt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Ma,flipSided:T.side===Ai,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Ie&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ie&&T.extensions.multiDraw===!0||et)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Ze.vertexUv1s=m.has(1),Ze.vertexUv2s=m.has(2),Ze.vertexUv3s=m.has(3),m.clear(),Ze}function y(T){const N=[];if(T.shaderID?N.push(T.shaderID):(N.push(T.customVertexShaderID),N.push(T.customFragmentShaderID)),T.defines!==void 0)for(const X in T.defines)N.push(X),N.push(T.defines[X]);return T.isRawShaderMaterial===!1&&(M(N,T),I(N,T),N.push(a.outputColorSpace)),N.push(T.customProgramCacheKey),N.join()}function M(T,N){T.push(N.precision),T.push(N.outputColorSpace),T.push(N.envMapMode),T.push(N.envMapCubeUVHeight),T.push(N.mapUv),T.push(N.alphaMapUv),T.push(N.lightMapUv),T.push(N.aoMapUv),T.push(N.bumpMapUv),T.push(N.normalMapUv),T.push(N.displacementMapUv),T.push(N.emissiveMapUv),T.push(N.metalnessMapUv),T.push(N.roughnessMapUv),T.push(N.anisotropyMapUv),T.push(N.clearcoatMapUv),T.push(N.clearcoatNormalMapUv),T.push(N.clearcoatRoughnessMapUv),T.push(N.iridescenceMapUv),T.push(N.iridescenceThicknessMapUv),T.push(N.sheenColorMapUv),T.push(N.sheenRoughnessMapUv),T.push(N.specularMapUv),T.push(N.specularColorMapUv),T.push(N.specularIntensityMapUv),T.push(N.transmissionMapUv),T.push(N.thicknessMapUv),T.push(N.combine),T.push(N.fogExp2),T.push(N.sizeAttenuation),T.push(N.morphTargetsCount),T.push(N.morphAttributeCount),T.push(N.numDirLights),T.push(N.numPointLights),T.push(N.numSpotLights),T.push(N.numSpotLightMaps),T.push(N.numHemiLights),T.push(N.numRectAreaLights),T.push(N.numDirLightShadows),T.push(N.numPointLightShadows),T.push(N.numSpotLightShadows),T.push(N.numSpotLightShadowsWithMaps),T.push(N.numLightProbes),T.push(N.shadowMapType),T.push(N.toneMapping),T.push(N.numClippingPlanes),T.push(N.numClipIntersection),T.push(N.depthPacking)}function I(T,N){u.disableAll(),N.instancing&&u.enable(0),N.instancingColor&&u.enable(1),N.instancingMorph&&u.enable(2),N.matcap&&u.enable(3),N.envMap&&u.enable(4),N.normalMapObjectSpace&&u.enable(5),N.normalMapTangentSpace&&u.enable(6),N.clearcoat&&u.enable(7),N.iridescence&&u.enable(8),N.alphaTest&&u.enable(9),N.vertexColors&&u.enable(10),N.vertexAlphas&&u.enable(11),N.vertexUv1s&&u.enable(12),N.vertexUv2s&&u.enable(13),N.vertexUv3s&&u.enable(14),N.vertexTangents&&u.enable(15),N.anisotropy&&u.enable(16),N.alphaHash&&u.enable(17),N.batching&&u.enable(18),N.dispersion&&u.enable(19),N.batchingColor&&u.enable(20),N.gradientMap&&u.enable(21),N.packedNormalMap&&u.enable(22),N.vertexNormals&&u.enable(23),T.push(u.mask),u.disableAll(),N.fog&&u.enable(0),N.useFog&&u.enable(1),N.flatShading&&u.enable(2),N.logarithmicDepthBuffer&&u.enable(3),N.reversedDepthBuffer&&u.enable(4),N.skinning&&u.enable(5),N.morphTargets&&u.enable(6),N.morphNormals&&u.enable(7),N.morphColors&&u.enable(8),N.premultipliedAlpha&&u.enable(9),N.shadowMapEnabled&&u.enable(10),N.doubleSided&&u.enable(11),N.flipSided&&u.enable(12),N.useDepthPacking&&u.enable(13),N.dithering&&u.enable(14),N.transmission&&u.enable(15),N.sheen&&u.enable(16),N.opaque&&u.enable(17),N.pointsUvs&&u.enable(18),N.decodeVideoTexture&&u.enable(19),N.decodeVideoTextureEmissive&&u.enable(20),N.alphaToCoverage&&u.enable(21),N.numLightProbeGrids>0&&u.enable(22),N.hasPositionAttribute&&u.enable(23),T.push(u.mask)}function z(T){const N=x[T.type];let X;if(N){const V=Sa[N];X=XE.clone(V.uniforms)}else X=T.uniforms;return X}function R(T,N){let X=g.get(N);return X!==void 0?++X.usedTimes:(X=new m2(a,N,T,o),d.push(X),g.set(N,X)),X}function O(T){if(--T.usedTimes===0){const N=d.indexOf(T);d[N]=d[d.length-1],d.pop(),g.delete(T.cacheKey),T.destroy()}}function L(T){h.remove(T)}function B(){h.dispose()}return{getParameters:w,getProgramCacheKey:y,getUniforms:z,acquireProgram:R,releaseProgram:O,releaseShaderCache:L,programs:d,dispose:B}}function M2(){let a=new WeakMap;function e(u){return a.has(u)}function i(u){let h=a.get(u);return h===void 0&&(h={},a.set(u,h)),h}function r(u){a.delete(u)}function o(u,h,m){a.get(u)[h]=m}function c(){a=new WeakMap}return{has:e,get:i,remove:r,update:o,dispose:c}}function y2(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.materialVariant!==e.materialVariant?a.materialVariant-e.materialVariant:a.z!==e.z?a.z-e.z:a.id-e.id}function wv(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function Dv(){const a=[];let e=0;const i=[],r=[],o=[];function c(){e=0,i.length=0,r.length=0,o.length=0}function u(v){let x=0;return v.isInstancedMesh&&(x+=2),v.isSkinnedMesh&&(x+=1),x}function h(v,x,b,w,y,M){let I=a[e];return I===void 0?(I={id:v.id,object:v,geometry:x,material:b,materialVariant:u(v),groupOrder:w,renderOrder:v.renderOrder,z:y,group:M},a[e]=I):(I.id=v.id,I.object=v,I.geometry=x,I.material=b,I.materialVariant=u(v),I.groupOrder=w,I.renderOrder=v.renderOrder,I.z=y,I.group=M),e++,I}function m(v,x,b,w,y,M){const I=h(v,x,b,w,y,M);b.transmission>0?r.push(I):b.transparent===!0?o.push(I):i.push(I)}function d(v,x,b,w,y,M){const I=h(v,x,b,w,y,M);b.transmission>0?r.unshift(I):b.transparent===!0?o.unshift(I):i.unshift(I)}function g(v,x,b){i.length>1&&i.sort(v||y2),r.length>1&&r.sort(x||wv),o.length>1&&o.sort(x||wv),b&&(i.reverse(),r.reverse(),o.reverse())}function _(){for(let v=e,x=a.length;v<x;v++){const b=a[v];if(b.id===null)break;b.id=null,b.object=null,b.geometry=null,b.material=null,b.group=null}}return{opaque:i,transmissive:r,transparent:o,init:c,push:m,unshift:d,finish:_,sort:g}}function E2(){let a=new WeakMap;function e(r,o){const c=a.get(r);let u;return c===void 0?(u=new Dv,a.set(r,[u])):o>=c.length?(u=new Dv,c.push(u)):u=c[o],u}function i(){a=new WeakMap}return{get:e,dispose:i}}function b2(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new ee,color:new Nt};break;case"SpotLight":i={position:new ee,direction:new ee,color:new Nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new ee,color:new Nt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new ee,skyColor:new Nt,groundColor:new Nt};break;case"RectAreaLight":i={color:new Nt,position:new ee,halfWidth:new ee,halfHeight:new ee};break}return a[e.id]=i,i}}}function T2(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=i,i}}}let A2=0;function R2(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function C2(a){const e=new b2,i=T2(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)r.probe.push(new ee);const o=new ee,c=new Dn,u=new Dn;function h(d){let g=0,_=0,v=0;for(let N=0;N<9;N++)r.probe[N].set(0,0,0);let x=0,b=0,w=0,y=0,M=0,I=0,z=0,R=0,O=0,L=0,B=0;d.sort(R2);for(let N=0,X=d.length;N<X;N++){const V=d[N],j=V.color,ce=V.intensity,ue=V.distance;let Y=null;if(V.shadow&&V.shadow.map&&(V.shadow.map.texture.format===mr?Y=V.shadow.map.texture:Y=V.shadow.map.depthTexture||V.shadow.map.texture),V.isAmbientLight)g+=j.r*ce,_+=j.g*ce,v+=j.b*ce;else if(V.isLightProbe){for(let F=0;F<9;F++)r.probe[F].addScaledVector(V.sh.coefficients[F],ce);B++}else if(V.isDirectionalLight){const F=e.get(V);if(F.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const H=V.shadow,$=i.get(V);$.shadowIntensity=H.intensity,$.shadowBias=H.bias,$.shadowNormalBias=H.normalBias,$.shadowRadius=H.radius,$.shadowMapSize=H.mapSize,r.directionalShadow[x]=$,r.directionalShadowMap[x]=Y,r.directionalShadowMatrix[x]=V.shadow.matrix,I++}r.directional[x]=F,x++}else if(V.isSpotLight){const F=e.get(V);F.position.setFromMatrixPosition(V.matrixWorld),F.color.copy(j).multiplyScalar(ce),F.distance=ue,F.coneCos=Math.cos(V.angle),F.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),F.decay=V.decay,r.spot[w]=F;const H=V.shadow;if(V.map&&(r.spotLightMap[O]=V.map,O++,H.updateMatrices(V),V.castShadow&&L++),r.spotLightMatrix[w]=H.matrix,V.castShadow){const $=i.get(V);$.shadowIntensity=H.intensity,$.shadowBias=H.bias,$.shadowNormalBias=H.normalBias,$.shadowRadius=H.radius,$.shadowMapSize=H.mapSize,r.spotShadow[w]=$,r.spotShadowMap[w]=Y,R++}w++}else if(V.isRectAreaLight){const F=e.get(V);F.color.copy(j).multiplyScalar(ce),F.halfWidth.set(V.width*.5,0,0),F.halfHeight.set(0,V.height*.5,0),r.rectArea[y]=F,y++}else if(V.isPointLight){const F=e.get(V);if(F.color.copy(V.color).multiplyScalar(V.intensity),F.distance=V.distance,F.decay=V.decay,V.castShadow){const H=V.shadow,$=i.get(V);$.shadowIntensity=H.intensity,$.shadowBias=H.bias,$.shadowNormalBias=H.normalBias,$.shadowRadius=H.radius,$.shadowMapSize=H.mapSize,$.shadowCameraNear=H.camera.near,$.shadowCameraFar=H.camera.far,r.pointShadow[b]=$,r.pointShadowMap[b]=Y,r.pointShadowMatrix[b]=V.shadow.matrix,z++}r.point[b]=F,b++}else if(V.isHemisphereLight){const F=e.get(V);F.skyColor.copy(V.color).multiplyScalar(ce),F.groundColor.copy(V.groundColor).multiplyScalar(ce),r.hemi[M]=F,M++}}y>0&&(a.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Be.LTC_FLOAT_1,r.rectAreaLTC2=Be.LTC_FLOAT_2):(r.rectAreaLTC1=Be.LTC_HALF_1,r.rectAreaLTC2=Be.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=_,r.ambient[2]=v;const T=r.hash;(T.directionalLength!==x||T.pointLength!==b||T.spotLength!==w||T.rectAreaLength!==y||T.hemiLength!==M||T.numDirectionalShadows!==I||T.numPointShadows!==z||T.numSpotShadows!==R||T.numSpotMaps!==O||T.numLightProbes!==B)&&(r.directional.length=x,r.spot.length=w,r.rectArea.length=y,r.point.length=b,r.hemi.length=M,r.directionalShadow.length=I,r.directionalShadowMap.length=I,r.pointShadow.length=z,r.pointShadowMap.length=z,r.spotShadow.length=R,r.spotShadowMap.length=R,r.directionalShadowMatrix.length=I,r.pointShadowMatrix.length=z,r.spotLightMatrix.length=R+O-L,r.spotLightMap.length=O,r.numSpotLightShadowsWithMaps=L,r.numLightProbes=B,T.directionalLength=x,T.pointLength=b,T.spotLength=w,T.rectAreaLength=y,T.hemiLength=M,T.numDirectionalShadows=I,T.numPointShadows=z,T.numSpotShadows=R,T.numSpotMaps=O,T.numLightProbes=B,r.version=A2++)}function m(d,g){let _=0,v=0,x=0,b=0,w=0;const y=g.matrixWorldInverse;for(let M=0,I=d.length;M<I;M++){const z=d[M];if(z.isDirectionalLight){const R=r.directional[_];R.direction.setFromMatrixPosition(z.matrixWorld),o.setFromMatrixPosition(z.target.matrixWorld),R.direction.sub(o),R.direction.transformDirection(y),_++}else if(z.isSpotLight){const R=r.spot[x];R.position.setFromMatrixPosition(z.matrixWorld),R.position.applyMatrix4(y),R.direction.setFromMatrixPosition(z.matrixWorld),o.setFromMatrixPosition(z.target.matrixWorld),R.direction.sub(o),R.direction.transformDirection(y),x++}else if(z.isRectAreaLight){const R=r.rectArea[b];R.position.setFromMatrixPosition(z.matrixWorld),R.position.applyMatrix4(y),u.identity(),c.copy(z.matrixWorld),c.premultiply(y),u.extractRotation(c),R.halfWidth.set(z.width*.5,0,0),R.halfHeight.set(0,z.height*.5,0),R.halfWidth.applyMatrix4(u),R.halfHeight.applyMatrix4(u),b++}else if(z.isPointLight){const R=r.point[v];R.position.setFromMatrixPosition(z.matrixWorld),R.position.applyMatrix4(y),v++}else if(z.isHemisphereLight){const R=r.hemi[w];R.direction.setFromMatrixPosition(z.matrixWorld),R.direction.transformDirection(y),w++}}}return{setup:h,setupView:m,state:r}}function Lv(a){const e=new C2(a),i=[],r=[],o=[];function c(v){_.camera=v,i.length=0,r.length=0,o.length=0}function u(v){i.push(v)}function h(v){r.push(v)}function m(v){o.push(v)}function d(){e.setup(i)}function g(v){e.setupView(i,v)}const _={lightsArray:i,shadowsArray:r,lightProbeGridArray:o,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:_,setupLights:d,setupLightsView:g,pushLight:u,pushShadow:h,pushLightProbeGrid:m}}function w2(a){let e=new WeakMap;function i(o,c=0){const u=e.get(o);let h;return u===void 0?(h=new Lv(a),e.set(o,[h])):c>=u.length?(h=new Lv(a),u.push(h)):h=u[c],h}function r(){e=new WeakMap}return{get:i,dispose:r}}const D2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,L2=`uniform sampler2D shadow_pass;
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
}`,N2=[new ee(1,0,0),new ee(-1,0,0),new ee(0,1,0),new ee(0,-1,0),new ee(0,0,1),new ee(0,0,-1)],U2=[new ee(0,-1,0),new ee(0,-1,0),new ee(0,0,1),new ee(0,0,-1),new ee(0,-1,0),new ee(0,-1,0)],Nv=new Dn,Ml=new ee,Mh=new ee;function O2(a,e,i){let r=new bx;const o=new zt,c=new zt,u=new Tn,h=new jE,m=new ZE,d={},g=i.maxTextureSize,_={[ts]:Ai,[Ai]:ts,[Ma]:Ma},v=new ea({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new zt},radius:{value:4}},vertexShader:D2,fragmentShader:L2}),x=v.clone();x.defines.HORIZONTAL_PASS=1;const b=new $i;b.setAttribute("position",new Aa(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new Ji(b,v),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=hu;let M=this.type;this.render=function(L,B,T){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||L.length===0)return;this.type===Sy&&(ot("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=hu);const N=a.getRenderTarget(),X=a.getActiveCubeFace(),V=a.getActiveMipmapLevel(),j=a.state;j.setBlending($a),j.buffers.depth.getReversed()===!0?j.buffers.color.setClear(0,0,0,0):j.buffers.color.setClear(1,1,1,1),j.buffers.depth.setTest(!0),j.setScissorTest(!1);const ce=M!==this.type;ce&&B.traverse(function(ue){ue.material&&(Array.isArray(ue.material)?ue.material.forEach(Y=>Y.needsUpdate=!0):ue.material.needsUpdate=!0)});for(let ue=0,Y=L.length;ue<Y;ue++){const F=L[ue],H=F.shadow;if(H===void 0){ot("WebGLShadowMap:",F,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;o.copy(H.mapSize);const $=H.getFrameExtents();o.multiply($),c.copy(H.mapSize),(o.x>g||o.y>g)&&(o.x>g&&(c.x=Math.floor(g/$.x),o.x=c.x*$.x,H.mapSize.x=c.x),o.y>g&&(c.y=Math.floor(g/$.y),o.y=c.y*$.y,H.mapSize.y=c.y));const me=a.state.buffers.depth.getReversed();if(H.camera._reversedDepth=me,H.map===null||ce===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===yl){if(F.isPointLight){ot("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new Ta(o.x,o.y,{format:mr,type:ns,minFilter:zn,magFilter:zn,generateMipmaps:!1}),H.map.texture.name=F.name+".shadowMap",H.map.depthTexture=new yo(o.x,o.y,ya),H.map.depthTexture.name=F.name+".shadowMapDepth",H.map.depthTexture.format=is,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=ti,H.map.depthTexture.magFilter=ti}else F.isPointLight?(H.map=new Ux(o.x),H.map.depthTexture=new HE(o.x,Ra)):(H.map=new Ta(o.x,o.y),H.map.depthTexture=new yo(o.x,o.y,Ra)),H.map.depthTexture.name=F.name+".shadowMap",H.map.depthTexture.format=is,this.type===hu?(H.map.depthTexture.compareFunction=me?wp:Cp,H.map.depthTexture.minFilter=zn,H.map.depthTexture.magFilter=zn):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=ti,H.map.depthTexture.magFilter=ti);H.camera.updateProjectionMatrix()}const xe=H.map.isWebGLCubeRenderTarget?6:1;for(let P=0;P<xe;P++){if(H.map.isWebGLCubeRenderTarget)a.setRenderTarget(H.map,P),a.clear();else{P===0&&(a.setRenderTarget(H.map),a.clear());const K=H.getViewport(P);u.set(c.x*K.x,c.y*K.y,c.x*K.z,c.y*K.w),j.viewport(u)}if(F.isPointLight){const K=H.camera,Se=H.matrix,Te=F.distance||K.far;Te!==K.far&&(K.far=Te,K.updateProjectionMatrix()),Ml.setFromMatrixPosition(F.matrixWorld),K.position.copy(Ml),Mh.copy(K.position),Mh.add(N2[P]),K.up.copy(U2[P]),K.lookAt(Mh),K.updateMatrixWorld(),Se.makeTranslation(-Ml.x,-Ml.y,-Ml.z),Nv.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),H._frustum.setFromProjectionMatrix(Nv,K.coordinateSystem,K.reversedDepth)}else H.updateMatrices(F);r=H.getFrustum(),R(B,T,H.camera,F,this.type)}H.isPointLightShadow!==!0&&this.type===yl&&I(H,T),H.needsUpdate=!1}M=this.type,y.needsUpdate=!1,a.setRenderTarget(N,X,V)};function I(L,B){const T=e.update(w);v.defines.VSM_SAMPLES!==L.blurSamples&&(v.defines.VSM_SAMPLES=L.blurSamples,x.defines.VSM_SAMPLES=L.blurSamples,v.needsUpdate=!0,x.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new Ta(o.x,o.y,{format:mr,type:ns})),v.uniforms.shadow_pass.value=L.map.depthTexture,v.uniforms.resolution.value=L.mapSize,v.uniforms.radius.value=L.radius,a.setRenderTarget(L.mapPass),a.clear(),a.renderBufferDirect(B,null,T,v,w,null),x.uniforms.shadow_pass.value=L.mapPass.texture,x.uniforms.resolution.value=L.mapSize,x.uniforms.radius.value=L.radius,a.setRenderTarget(L.map),a.clear(),a.renderBufferDirect(B,null,T,x,w,null)}function z(L,B,T,N){let X=null;const V=T.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(V!==void 0)X=V;else if(X=T.isPointLight===!0?m:h,a.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0||B.alphaToCoverage===!0){const j=X.uuid,ce=B.uuid;let ue=d[j];ue===void 0&&(ue={},d[j]=ue);let Y=ue[ce];Y===void 0&&(Y=X.clone(),ue[ce]=Y,B.addEventListener("dispose",O)),X=Y}if(X.visible=B.visible,X.wireframe=B.wireframe,N===yl?X.side=B.shadowSide!==null?B.shadowSide:B.side:X.side=B.shadowSide!==null?B.shadowSide:_[B.side],X.alphaMap=B.alphaMap,X.alphaTest=B.alphaToCoverage===!0?.5:B.alphaTest,X.map=B.map,X.clipShadows=B.clipShadows,X.clippingPlanes=B.clippingPlanes,X.clipIntersection=B.clipIntersection,X.displacementMap=B.displacementMap,X.displacementScale=B.displacementScale,X.displacementBias=B.displacementBias,X.wireframeLinewidth=B.wireframeLinewidth,X.linewidth=B.linewidth,T.isPointLight===!0&&X.isMeshDistanceMaterial===!0){const j=a.properties.get(X);j.light=T}return X}function R(L,B,T,N,X){if(L.visible===!1)return;if(L.layers.test(B.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&X===yl)&&(!L.frustumCulled||r.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,L.matrixWorld);const ce=e.update(L),ue=L.material;if(Array.isArray(ue)){const Y=ce.groups;for(let F=0,H=Y.length;F<H;F++){const $=Y[F],me=ue[$.materialIndex];if(me&&me.visible){const xe=z(L,me,N,X);L.onBeforeShadow(a,L,B,T,ce,xe,$),a.renderBufferDirect(T,null,ce,xe,L,$),L.onAfterShadow(a,L,B,T,ce,xe,$)}}}else if(ue.visible){const Y=z(L,ue,N,X);L.onBeforeShadow(a,L,B,T,ce,Y,null),a.renderBufferDirect(T,null,ce,Y,L,null),L.onAfterShadow(a,L,B,T,ce,Y,null)}}const j=L.children;for(let ce=0,ue=j.length;ce<ue;ce++)R(j[ce],B,T,N,X)}function O(L){L.target.removeEventListener("dispose",O);for(const T in d){const N=d[T],X=L.target.uuid;X in N&&(N[X].dispose(),delete N[X])}}}function P2(a,e){function i(){let k=!1;const De=new Tn;let _e=null;const Le=new Tn(0,0,0,0);return{setMask:function(Ie){_e!==Ie&&!k&&(a.colorMask(Ie,Ie,Ie,Ie),_e=Ie)},setLocked:function(Ie){k=Ie},setClear:function(Ie,Ee,Ze,We,an){an===!0&&(Ie*=We,Ee*=We,Ze*=We),De.set(Ie,Ee,Ze,We),Le.equals(De)===!1&&(a.clearColor(Ie,Ee,Ze,We),Le.copy(De))},reset:function(){k=!1,_e=null,Le.set(-1,0,0,0)}}}function r(){let k=!1,De=!1,_e=null,Le=null,Ie=null;return{setReversed:function(Ee){if(De!==Ee){const Ze=e.get("EXT_clip_control");Ee?Ze.clipControlEXT(Ze.LOWER_LEFT_EXT,Ze.ZERO_TO_ONE_EXT):Ze.clipControlEXT(Ze.LOWER_LEFT_EXT,Ze.NEGATIVE_ONE_TO_ONE_EXT),De=Ee;const We=Ie;Ie=null,this.setClear(We)}},getReversed:function(){return De},setTest:function(Ee){Ee?be(a.DEPTH_TEST):He(a.DEPTH_TEST)},setMask:function(Ee){_e!==Ee&&!k&&(a.depthMask(Ee),_e=Ee)},setFunc:function(Ee){if(De&&(Ee=$y[Ee]),Le!==Ee){switch(Ee){case Lh:a.depthFunc(a.NEVER);break;case Nh:a.depthFunc(a.ALWAYS);break;case Uh:a.depthFunc(a.LESS);break;case So:a.depthFunc(a.LEQUAL);break;case Oh:a.depthFunc(a.EQUAL);break;case Ph:a.depthFunc(a.GEQUAL);break;case Ih:a.depthFunc(a.GREATER);break;case Fh:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}Le=Ee}},setLocked:function(Ee){k=Ee},setClear:function(Ee){Ie!==Ee&&(Ie=Ee,De&&(Ee=1-Ee),a.clearDepth(Ee))},reset:function(){k=!1,_e=null,Le=null,Ie=null,De=!1}}}function o(){let k=!1,De=null,_e=null,Le=null,Ie=null,Ee=null,Ze=null,We=null,an=null;return{setTest:function(Pt){k||(Pt?be(a.STENCIL_TEST):He(a.STENCIL_TEST))},setMask:function(Pt){De!==Pt&&!k&&(a.stencilMask(Pt),De=Pt)},setFunc:function(Pt,kn,ni){(_e!==Pt||Le!==kn||Ie!==ni)&&(a.stencilFunc(Pt,kn,ni),_e=Pt,Le=kn,Ie=ni)},setOp:function(Pt,kn,ni){(Ee!==Pt||Ze!==kn||We!==ni)&&(a.stencilOp(Pt,kn,ni),Ee=Pt,Ze=kn,We=ni)},setLocked:function(Pt){k=Pt},setClear:function(Pt){an!==Pt&&(a.clearStencil(Pt),an=Pt)},reset:function(){k=!1,De=null,_e=null,Le=null,Ie=null,Ee=null,Ze=null,We=null,an=null}}}const c=new i,u=new r,h=new o,m=new WeakMap,d=new WeakMap;let g={},_={},v={},x=new WeakMap,b=[],w=null,y=!1,M=null,I=null,z=null,R=null,O=null,L=null,B=null,T=new Nt(0,0,0),N=0,X=!1,V=null,j=null,ce=null,ue=null,Y=null;const F=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,$=0;const me=a.getParameter(a.VERSION);me.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(me)[1]),H=$>=1):me.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(me)[1]),H=$>=2);let xe=null,P={};const K=a.getParameter(a.SCISSOR_BOX),Se=a.getParameter(a.VIEWPORT),Te=new Tn().fromArray(K),Ce=new Tn().fromArray(Se);function ie(k,De,_e,Le){const Ie=new Uint8Array(4),Ee=a.createTexture();a.bindTexture(k,Ee),a.texParameteri(k,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(k,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let Ze=0;Ze<_e;Ze++)k===a.TEXTURE_3D||k===a.TEXTURE_2D_ARRAY?a.texImage3D(De,0,a.RGBA,1,1,Le,0,a.RGBA,a.UNSIGNED_BYTE,Ie):a.texImage2D(De+Ze,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,Ie);return Ee}const ye={};ye[a.TEXTURE_2D]=ie(a.TEXTURE_2D,a.TEXTURE_2D,1),ye[a.TEXTURE_CUBE_MAP]=ie(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),ye[a.TEXTURE_2D_ARRAY]=ie(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1),ye[a.TEXTURE_3D]=ie(a.TEXTURE_3D,a.TEXTURE_3D,1,1),c.setClear(0,0,0,1),u.setClear(1),h.setClear(0),be(a.DEPTH_TEST),u.setFunc(So),un(!1),fn(U_),be(a.CULL_FACE),gt($a);function be(k){g[k]!==!0&&(a.enable(k),g[k]=!0)}function He(k){g[k]!==!1&&(a.disable(k),g[k]=!1)}function at(k,De){return v[k]!==De?(a.bindFramebuffer(k,De),v[k]=De,k===a.DRAW_FRAMEBUFFER&&(v[a.FRAMEBUFFER]=De),k===a.FRAMEBUFFER&&(v[a.DRAW_FRAMEBUFFER]=De),!0):!1}function et(k,De){let _e=b,Le=!1;if(k){_e=x.get(De),_e===void 0&&(_e=[],x.set(De,_e));const Ie=k.textures;if(_e.length!==Ie.length||_e[0]!==a.COLOR_ATTACHMENT0){for(let Ee=0,Ze=Ie.length;Ee<Ze;Ee++)_e[Ee]=a.COLOR_ATTACHMENT0+Ee;_e.length=Ie.length,Le=!0}}else _e[0]!==a.BACK&&(_e[0]=a.BACK,Le=!0);Le&&a.drawBuffers(_e)}function Jt(k){return w!==k?(a.useProgram(k),w=k,!0):!1}const dt={[cr]:a.FUNC_ADD,[yy]:a.FUNC_SUBTRACT,[Ey]:a.FUNC_REVERSE_SUBTRACT};dt[by]=a.MIN,dt[Ty]=a.MAX;const xt={[Ay]:a.ZERO,[Ry]:a.ONE,[Cy]:a.SRC_COLOR,[wh]:a.SRC_ALPHA,[Oy]:a.SRC_ALPHA_SATURATE,[Ny]:a.DST_COLOR,[Dy]:a.DST_ALPHA,[wy]:a.ONE_MINUS_SRC_COLOR,[Dh]:a.ONE_MINUS_SRC_ALPHA,[Uy]:a.ONE_MINUS_DST_COLOR,[Ly]:a.ONE_MINUS_DST_ALPHA,[Py]:a.CONSTANT_COLOR,[Iy]:a.ONE_MINUS_CONSTANT_COLOR,[Fy]:a.CONSTANT_ALPHA,[By]:a.ONE_MINUS_CONSTANT_ALPHA};function gt(k,De,_e,Le,Ie,Ee,Ze,We,an,Pt){if(k===$a){y===!0&&(He(a.BLEND),y=!1);return}if(y===!1&&(be(a.BLEND),y=!0),k!==My){if(k!==M||Pt!==X){if((I!==cr||O!==cr)&&(a.blendEquation(a.FUNC_ADD),I=cr,O=cr),Pt)switch(k){case mo:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case Ch:a.blendFunc(a.ONE,a.ONE);break;case O_:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case P_:a.blendFuncSeparate(a.DST_COLOR,a.ONE_MINUS_SRC_ALPHA,a.ZERO,a.ONE);break;default:Ot("WebGLState: Invalid blending: ",k);break}else switch(k){case mo:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case Ch:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE,a.ONE,a.ONE);break;case O_:Ot("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case P_:Ot("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ot("WebGLState: Invalid blending: ",k);break}z=null,R=null,L=null,B=null,T.set(0,0,0),N=0,M=k,X=Pt}return}Ie=Ie||De,Ee=Ee||_e,Ze=Ze||Le,(De!==I||Ie!==O)&&(a.blendEquationSeparate(dt[De],dt[Ie]),I=De,O=Ie),(_e!==z||Le!==R||Ee!==L||Ze!==B)&&(a.blendFuncSeparate(xt[_e],xt[Le],xt[Ee],xt[Ze]),z=_e,R=Le,L=Ee,B=Ze),(We.equals(T)===!1||an!==N)&&(a.blendColor(We.r,We.g,We.b,an),T.copy(We),N=an),M=k,X=!1}function ht(k,De){k.side===Ma?He(a.CULL_FACE):be(a.CULL_FACE);let _e=k.side===Ai;De&&(_e=!_e),un(_e),k.blending===mo&&k.transparent===!1?gt($a):gt(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),u.setFunc(k.depthFunc),u.setTest(k.depthTest),u.setMask(k.depthWrite),c.setMask(k.colorWrite);const Le=k.stencilWrite;h.setTest(Le),Le&&(h.setMask(k.stencilWriteMask),h.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),h.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),vn(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?be(a.SAMPLE_ALPHA_TO_COVERAGE):He(a.SAMPLE_ALPHA_TO_COVERAGE)}function un(k){V!==k&&(k?a.frontFace(a.CW):a.frontFace(a.CCW),V=k)}function fn(k){k!==vy?(be(a.CULL_FACE),k!==j&&(k===U_?a.cullFace(a.BACK):k===xy?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):He(a.CULL_FACE),j=k}function on(k){k!==ce&&(H&&a.lineWidth(k),ce=k)}function vn(k,De,_e){k?(be(a.POLYGON_OFFSET_FILL),(ue!==De||Y!==_e)&&(ue=De,Y=_e,u.getReversed()&&(De=-De),a.polygonOffset(De,_e))):He(a.POLYGON_OFFSET_FILL)}function Ut(k){k?be(a.SCISSOR_TEST):He(a.SCISSOR_TEST)}function ln(k){k===void 0&&(k=a.TEXTURE0+F-1),xe!==k&&(a.activeTexture(k),xe=k)}function Z(k,De,_e){_e===void 0&&(xe===null?_e=a.TEXTURE0+F-1:_e=xe);let Le=P[_e];Le===void 0&&(Le={type:void 0,texture:void 0},P[_e]=Le),(Le.type!==k||Le.texture!==De)&&(xe!==_e&&(a.activeTexture(_e),xe=_e),a.bindTexture(k,De||ye[k]),Le.type=k,Le.texture=De)}function Ht(){const k=P[xe];k!==void 0&&k.type!==void 0&&(a.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function St(){try{a.compressedTexImage2D(...arguments)}catch(k){Ot("WebGLState:",k)}}function U(){try{a.compressedTexImage3D(...arguments)}catch(k){Ot("WebGLState:",k)}}function E(){try{a.texSubImage2D(...arguments)}catch(k){Ot("WebGLState:",k)}}function Q(){try{a.texSubImage3D(...arguments)}catch(k){Ot("WebGLState:",k)}}function ae(){try{a.compressedTexSubImage2D(...arguments)}catch(k){Ot("WebGLState:",k)}}function he(){try{a.compressedTexSubImage3D(...arguments)}catch(k){Ot("WebGLState:",k)}}function Ae(){try{a.texStorage2D(...arguments)}catch(k){Ot("WebGLState:",k)}}function Ne(){try{a.texStorage3D(...arguments)}catch(k){Ot("WebGLState:",k)}}function de(){try{a.texImage2D(...arguments)}catch(k){Ot("WebGLState:",k)}}function pe(){try{a.texImage3D(...arguments)}catch(k){Ot("WebGLState:",k)}}function we(k){return _[k]!==void 0?_[k]:a.getParameter(k)}function ze(k,De){_[k]!==De&&(a.pixelStorei(k,De),_[k]=De)}function Oe(k){Te.equals(k)===!1&&(a.scissor(k.x,k.y,k.z,k.w),Te.copy(k))}function Pe(k){Ce.equals(k)===!1&&(a.viewport(k.x,k.y,k.z,k.w),Ce.copy(k))}function $e(k,De){let _e=d.get(De);_e===void 0&&(_e=new WeakMap,d.set(De,_e));let Le=_e.get(k);Le===void 0&&(Le=a.getUniformBlockIndex(De,k.name),_e.set(k,Le))}function Ke(k,De){const Le=d.get(De).get(k);m.get(De)!==Le&&(a.uniformBlockBinding(De,Le,k.__bindingPointIndex),m.set(De,Le))}function nt(){a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.DEPTH_TEST),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SCISSOR_TEST),a.disable(a.STENCIL_TEST),a.disable(a.SAMPLE_ALPHA_TO_COVERAGE),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ONE,a.ZERO),a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO),a.blendColor(0,0,0,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(a.LESS),u.setReversed(!1),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(a.ALWAYS,0,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.clearStencil(0),a.cullFace(a.BACK),a.frontFace(a.CCW),a.polygonOffset(0,0),a.activeTexture(a.TEXTURE0),a.bindFramebuffer(a.FRAMEBUFFER,null),a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,null),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),a.pixelStorei(a.PACK_ALIGNMENT,4),a.pixelStorei(a.UNPACK_ALIGNMENT,4),a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,!1),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,a.BROWSER_DEFAULT_WEBGL),a.pixelStorei(a.PACK_ROW_LENGTH,0),a.pixelStorei(a.PACK_SKIP_PIXELS,0),a.pixelStorei(a.PACK_SKIP_ROWS,0),a.pixelStorei(a.UNPACK_ROW_LENGTH,0),a.pixelStorei(a.UNPACK_IMAGE_HEIGHT,0),a.pixelStorei(a.UNPACK_SKIP_PIXELS,0),a.pixelStorei(a.UNPACK_SKIP_ROWS,0),a.pixelStorei(a.UNPACK_SKIP_IMAGES,0),g={},_={},xe=null,P={},v={},x=new WeakMap,b=[],w=null,y=!1,M=null,I=null,z=null,R=null,O=null,L=null,B=null,T=new Nt(0,0,0),N=0,X=!1,V=null,j=null,ce=null,ue=null,Y=null,Te.set(0,0,a.canvas.width,a.canvas.height),Ce.set(0,0,a.canvas.width,a.canvas.height),c.reset(),u.reset(),h.reset()}return{buffers:{color:c,depth:u,stencil:h},enable:be,disable:He,bindFramebuffer:at,drawBuffers:et,useProgram:Jt,setBlending:gt,setMaterial:ht,setFlipSided:un,setCullFace:fn,setLineWidth:on,setPolygonOffset:vn,setScissorTest:Ut,activeTexture:ln,bindTexture:Z,unbindTexture:Ht,compressedTexImage2D:St,compressedTexImage3D:U,texImage2D:de,texImage3D:pe,pixelStorei:ze,getParameter:we,updateUBOMapping:$e,uniformBlockBinding:Ke,texStorage2D:Ae,texStorage3D:Ne,texSubImage2D:E,texSubImage3D:Q,compressedTexSubImage2D:ae,compressedTexSubImage3D:he,scissor:Oe,viewport:Pe,reset:nt}}function I2(a,e,i,r,o,c,u){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new zt,g=new WeakMap,_=new Set;let v;const x=new WeakMap;let b=!1;try{b=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(U,E){return b?new OffscreenCanvas(U,E):Tu("canvas")}function y(U,E,Q){let ae=1;const he=St(U);if((he.width>Q||he.height>Q)&&(ae=Q/Math.max(he.width,he.height)),ae<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const Ae=Math.floor(ae*he.width),Ne=Math.floor(ae*he.height);v===void 0&&(v=w(Ae,Ne));const de=E?w(Ae,Ne):v;return de.width=Ae,de.height=Ne,de.getContext("2d").drawImage(U,0,0,Ae,Ne),ot("WebGLRenderer: Texture has been resized from ("+he.width+"x"+he.height+") to ("+Ae+"x"+Ne+")."),de}else return"data"in U&&ot("WebGLRenderer: Image in DataTexture is too big ("+he.width+"x"+he.height+")."),U;return U}function M(U){return U.generateMipmaps}function I(U){a.generateMipmap(U)}function z(U){return U.isWebGLCubeRenderTarget?a.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?a.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?a.TEXTURE_2D_ARRAY:a.TEXTURE_2D}function R(U,E,Q,ae,he,Ae=!1){if(U!==null){if(a[U]!==void 0)return a[U];ot("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let Ne;ae&&(Ne=e.get("EXT_texture_norm16"),Ne||ot("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let de=E;if(E===a.RED&&(Q===a.FLOAT&&(de=a.R32F),Q===a.HALF_FLOAT&&(de=a.R16F),Q===a.UNSIGNED_BYTE&&(de=a.R8),Q===a.UNSIGNED_SHORT&&Ne&&(de=Ne.R16_EXT),Q===a.SHORT&&Ne&&(de=Ne.R16_SNORM_EXT)),E===a.RED_INTEGER&&(Q===a.UNSIGNED_BYTE&&(de=a.R8UI),Q===a.UNSIGNED_SHORT&&(de=a.R16UI),Q===a.UNSIGNED_INT&&(de=a.R32UI),Q===a.BYTE&&(de=a.R8I),Q===a.SHORT&&(de=a.R16I),Q===a.INT&&(de=a.R32I)),E===a.RG&&(Q===a.FLOAT&&(de=a.RG32F),Q===a.HALF_FLOAT&&(de=a.RG16F),Q===a.UNSIGNED_BYTE&&(de=a.RG8),Q===a.UNSIGNED_SHORT&&Ne&&(de=Ne.RG16_EXT),Q===a.SHORT&&Ne&&(de=Ne.RG16_SNORM_EXT)),E===a.RG_INTEGER&&(Q===a.UNSIGNED_BYTE&&(de=a.RG8UI),Q===a.UNSIGNED_SHORT&&(de=a.RG16UI),Q===a.UNSIGNED_INT&&(de=a.RG32UI),Q===a.BYTE&&(de=a.RG8I),Q===a.SHORT&&(de=a.RG16I),Q===a.INT&&(de=a.RG32I)),E===a.RGB_INTEGER&&(Q===a.UNSIGNED_BYTE&&(de=a.RGB8UI),Q===a.UNSIGNED_SHORT&&(de=a.RGB16UI),Q===a.UNSIGNED_INT&&(de=a.RGB32UI),Q===a.BYTE&&(de=a.RGB8I),Q===a.SHORT&&(de=a.RGB16I),Q===a.INT&&(de=a.RGB32I)),E===a.RGBA_INTEGER&&(Q===a.UNSIGNED_BYTE&&(de=a.RGBA8UI),Q===a.UNSIGNED_SHORT&&(de=a.RGBA16UI),Q===a.UNSIGNED_INT&&(de=a.RGBA32UI),Q===a.BYTE&&(de=a.RGBA8I),Q===a.SHORT&&(de=a.RGBA16I),Q===a.INT&&(de=a.RGBA32I)),E===a.RGB&&(Q===a.UNSIGNED_SHORT&&Ne&&(de=Ne.RGB16_EXT),Q===a.SHORT&&Ne&&(de=Ne.RGB16_SNORM_EXT),Q===a.UNSIGNED_INT_5_9_9_9_REV&&(de=a.RGB9_E5),Q===a.UNSIGNED_INT_10F_11F_11F_REV&&(de=a.R11F_G11F_B10F)),E===a.RGBA){const pe=Ae?Eu:Dt.getTransfer(he);Q===a.FLOAT&&(de=a.RGBA32F),Q===a.HALF_FLOAT&&(de=a.RGBA16F),Q===a.UNSIGNED_BYTE&&(de=pe===Kt?a.SRGB8_ALPHA8:a.RGBA8),Q===a.UNSIGNED_SHORT&&Ne&&(de=Ne.RGBA16_EXT),Q===a.SHORT&&Ne&&(de=Ne.RGBA16_SNORM_EXT),Q===a.UNSIGNED_SHORT_4_4_4_4&&(de=a.RGBA4),Q===a.UNSIGNED_SHORT_5_5_5_1&&(de=a.RGB5_A1)}return(de===a.R16F||de===a.R32F||de===a.RG16F||de===a.RG32F||de===a.RGBA16F||de===a.RGBA32F)&&e.get("EXT_color_buffer_float"),de}function O(U,E){let Q;return U?E===null||E===Ra||E===Ll?Q=a.DEPTH24_STENCIL8:E===ya?Q=a.DEPTH32F_STENCIL8:E===Dl&&(Q=a.DEPTH24_STENCIL8,ot("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Ra||E===Ll?Q=a.DEPTH_COMPONENT24:E===ya?Q=a.DEPTH_COMPONENT32F:E===Dl&&(Q=a.DEPTH_COMPONENT16),Q}function L(U,E){return M(U)===!0||U.isFramebufferTexture&&U.minFilter!==ti&&U.minFilter!==zn?Math.log2(Math.max(E.width,E.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?E.mipmaps.length:1}function B(U){const E=U.target;E.removeEventListener("dispose",B),N(E),E.isVideoTexture&&g.delete(E),E.isHTMLTexture&&_.delete(E)}function T(U){const E=U.target;E.removeEventListener("dispose",T),V(E)}function N(U){const E=r.get(U);if(E.__webglInit===void 0)return;const Q=U.source,ae=x.get(Q);if(ae){const he=ae[E.__cacheKey];he.usedTimes--,he.usedTimes===0&&X(U),Object.keys(ae).length===0&&x.delete(Q)}r.remove(U)}function X(U){const E=r.get(U);a.deleteTexture(E.__webglTexture);const Q=U.source,ae=x.get(Q);delete ae[E.__cacheKey],u.memory.textures--}function V(U){const E=r.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),r.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let ae=0;ae<6;ae++){if(Array.isArray(E.__webglFramebuffer[ae]))for(let he=0;he<E.__webglFramebuffer[ae].length;he++)a.deleteFramebuffer(E.__webglFramebuffer[ae][he]);else a.deleteFramebuffer(E.__webglFramebuffer[ae]);E.__webglDepthbuffer&&a.deleteRenderbuffer(E.__webglDepthbuffer[ae])}else{if(Array.isArray(E.__webglFramebuffer))for(let ae=0;ae<E.__webglFramebuffer.length;ae++)a.deleteFramebuffer(E.__webglFramebuffer[ae]);else a.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&a.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&a.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ae=0;ae<E.__webglColorRenderbuffer.length;ae++)E.__webglColorRenderbuffer[ae]&&a.deleteRenderbuffer(E.__webglColorRenderbuffer[ae]);E.__webglDepthRenderbuffer&&a.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const Q=U.textures;for(let ae=0,he=Q.length;ae<he;ae++){const Ae=r.get(Q[ae]);Ae.__webglTexture&&(a.deleteTexture(Ae.__webglTexture),u.memory.textures--),r.remove(Q[ae])}r.remove(U)}let j=0;function ce(){j=0}function ue(){return j}function Y(U){j=U}function F(){const U=j;return U>=o.maxTextures&&ot("WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+o.maxTextures),j+=1,U}function H(U){const E=[];return E.push(U.wrapS),E.push(U.wrapT),E.push(U.wrapR||0),E.push(U.magFilter),E.push(U.minFilter),E.push(U.anisotropy),E.push(U.internalFormat),E.push(U.format),E.push(U.type),E.push(U.generateMipmaps),E.push(U.premultiplyAlpha),E.push(U.flipY),E.push(U.unpackAlignment),E.push(U.colorSpace),E.join()}function $(U,E){const Q=r.get(U);if(U.isVideoTexture&&Z(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&Q.__version!==U.version){const ae=U.image;if(ae===null)ot("WebGLRenderer: Texture marked for update but no image data found.");else if(ae.complete===!1)ot("WebGLRenderer: Texture marked for update but image is incomplete");else{He(Q,U,E);return}}else U.isExternalTexture&&(Q.__webglTexture=U.sourceTexture?U.sourceTexture:null);i.bindTexture(a.TEXTURE_2D,Q.__webglTexture,a.TEXTURE0+E)}function me(U,E){const Q=r.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&Q.__version!==U.version){He(Q,U,E);return}else U.isExternalTexture&&(Q.__webglTexture=U.sourceTexture?U.sourceTexture:null);i.bindTexture(a.TEXTURE_2D_ARRAY,Q.__webglTexture,a.TEXTURE0+E)}function xe(U,E){const Q=r.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&Q.__version!==U.version){He(Q,U,E);return}i.bindTexture(a.TEXTURE_3D,Q.__webglTexture,a.TEXTURE0+E)}function P(U,E){const Q=r.get(U);if(U.isCubeDepthTexture!==!0&&U.version>0&&Q.__version!==U.version){at(Q,U,E);return}i.bindTexture(a.TEXTURE_CUBE_MAP,Q.__webglTexture,a.TEXTURE0+E)}const K={[Bh]:a.REPEAT,[ua]:a.CLAMP_TO_EDGE,[zh]:a.MIRRORED_REPEAT},Se={[ti]:a.NEAREST,[Gy]:a.NEAREST_MIPMAP_NEAREST,[Xc]:a.NEAREST_MIPMAP_LINEAR,[zn]:a.LINEAR,[Xd]:a.LINEAR_MIPMAP_NEAREST,[zs]:a.LINEAR_MIPMAP_LINEAR},Te={[Xy]:a.NEVER,[Zy]:a.ALWAYS,[Wy]:a.LESS,[Cp]:a.LEQUAL,[Yy]:a.EQUAL,[wp]:a.GEQUAL,[qy]:a.GREATER,[jy]:a.NOTEQUAL};function Ce(U,E){if(E.type===ya&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===zn||E.magFilter===Xd||E.magFilter===Xc||E.magFilter===zs||E.minFilter===zn||E.minFilter===Xd||E.minFilter===Xc||E.minFilter===zs)&&ot("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),a.texParameteri(U,a.TEXTURE_WRAP_S,K[E.wrapS]),a.texParameteri(U,a.TEXTURE_WRAP_T,K[E.wrapT]),(U===a.TEXTURE_3D||U===a.TEXTURE_2D_ARRAY)&&a.texParameteri(U,a.TEXTURE_WRAP_R,K[E.wrapR]),a.texParameteri(U,a.TEXTURE_MAG_FILTER,Se[E.magFilter]),a.texParameteri(U,a.TEXTURE_MIN_FILTER,Se[E.minFilter]),E.compareFunction&&(a.texParameteri(U,a.TEXTURE_COMPARE_MODE,a.COMPARE_REF_TO_TEXTURE),a.texParameteri(U,a.TEXTURE_COMPARE_FUNC,Te[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===ti||E.minFilter!==Xc&&E.minFilter!==zs||E.type===ya&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const Q=e.get("EXT_texture_filter_anisotropic");a.texParameterf(U,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,o.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function ie(U,E){let Q=!1;U.__webglInit===void 0&&(U.__webglInit=!0,E.addEventListener("dispose",B));const ae=E.source;let he=x.get(ae);he===void 0&&(he={},x.set(ae,he));const Ae=H(E);if(Ae!==U.__cacheKey){he[Ae]===void 0&&(he[Ae]={texture:a.createTexture(),usedTimes:0},u.memory.textures++,Q=!0),he[Ae].usedTimes++;const Ne=he[U.__cacheKey];Ne!==void 0&&(he[U.__cacheKey].usedTimes--,Ne.usedTimes===0&&X(E)),U.__cacheKey=Ae,U.__webglTexture=he[Ae].texture}return Q}function ye(U,E,Q){return Math.floor(Math.floor(U/Q)/E)}function be(U,E,Q,ae){const Ae=U.updateRanges;if(Ae.length===0)i.texSubImage2D(a.TEXTURE_2D,0,0,0,E.width,E.height,Q,ae,E.data);else{Ae.sort((ze,Oe)=>ze.start-Oe.start);let Ne=0;for(let ze=1;ze<Ae.length;ze++){const Oe=Ae[Ne],Pe=Ae[ze],$e=Oe.start+Oe.count,Ke=ye(Pe.start,E.width,4),nt=ye(Oe.start,E.width,4);Pe.start<=$e+1&&Ke===nt&&ye(Pe.start+Pe.count-1,E.width,4)===Ke?Oe.count=Math.max(Oe.count,Pe.start+Pe.count-Oe.start):(++Ne,Ae[Ne]=Pe)}Ae.length=Ne+1;const de=i.getParameter(a.UNPACK_ROW_LENGTH),pe=i.getParameter(a.UNPACK_SKIP_PIXELS),we=i.getParameter(a.UNPACK_SKIP_ROWS);i.pixelStorei(a.UNPACK_ROW_LENGTH,E.width);for(let ze=0,Oe=Ae.length;ze<Oe;ze++){const Pe=Ae[ze],$e=Math.floor(Pe.start/4),Ke=Math.ceil(Pe.count/4),nt=$e%E.width,k=Math.floor($e/E.width),De=Ke,_e=1;i.pixelStorei(a.UNPACK_SKIP_PIXELS,nt),i.pixelStorei(a.UNPACK_SKIP_ROWS,k),i.texSubImage2D(a.TEXTURE_2D,0,nt,k,De,_e,Q,ae,E.data)}U.clearUpdateRanges(),i.pixelStorei(a.UNPACK_ROW_LENGTH,de),i.pixelStorei(a.UNPACK_SKIP_PIXELS,pe),i.pixelStorei(a.UNPACK_SKIP_ROWS,we)}}function He(U,E,Q){let ae=a.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ae=a.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ae=a.TEXTURE_3D);const he=ie(U,E),Ae=E.source;i.bindTexture(ae,U.__webglTexture,a.TEXTURE0+Q);const Ne=r.get(Ae);if(Ae.version!==Ne.__version||he===!0){if(i.activeTexture(a.TEXTURE0+Q),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){const _e=Dt.getPrimaries(Dt.workingColorSpace),Le=E.colorSpace===Bs?null:Dt.getPrimaries(E.colorSpace),Ie=E.colorSpace===Bs||_e===Le?a.NONE:a.BROWSER_DEFAULT_WEBGL;i.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie)}i.pixelStorei(a.UNPACK_ALIGNMENT,E.unpackAlignment);let pe=y(E.image,!1,o.maxTextureSize);pe=Ht(E,pe);const we=c.convert(E.format,E.colorSpace),ze=c.convert(E.type);let Oe=R(E.internalFormat,we,ze,E.normalized,E.colorSpace,E.isVideoTexture);Ce(ae,E);let Pe;const $e=E.mipmaps,Ke=E.isVideoTexture!==!0,nt=Ne.__version===void 0||he===!0,k=Ae.dataReady,De=L(E,pe);if(E.isDepthTexture)Oe=O(E.format===dr,E.type),nt&&(Ke?i.texStorage2D(a.TEXTURE_2D,1,Oe,pe.width,pe.height):i.texImage2D(a.TEXTURE_2D,0,Oe,pe.width,pe.height,0,we,ze,null));else if(E.isDataTexture)if($e.length>0){Ke&&nt&&i.texStorage2D(a.TEXTURE_2D,De,Oe,$e[0].width,$e[0].height);for(let _e=0,Le=$e.length;_e<Le;_e++)Pe=$e[_e],Ke?k&&i.texSubImage2D(a.TEXTURE_2D,_e,0,0,Pe.width,Pe.height,we,ze,Pe.data):i.texImage2D(a.TEXTURE_2D,_e,Oe,Pe.width,Pe.height,0,we,ze,Pe.data);E.generateMipmaps=!1}else Ke?(nt&&i.texStorage2D(a.TEXTURE_2D,De,Oe,pe.width,pe.height),k&&be(E,pe,we,ze)):i.texImage2D(a.TEXTURE_2D,0,Oe,pe.width,pe.height,0,we,ze,pe.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Ke&&nt&&i.texStorage3D(a.TEXTURE_2D_ARRAY,De,Oe,$e[0].width,$e[0].height,pe.depth);for(let _e=0,Le=$e.length;_e<Le;_e++)if(Pe=$e[_e],E.format!==fa)if(we!==null)if(Ke){if(k)if(E.layerUpdates.size>0){const Ie=cv(Pe.width,Pe.height,E.format,E.type);for(const Ee of E.layerUpdates){const Ze=Pe.data.subarray(Ee*Ie/Pe.data.BYTES_PER_ELEMENT,(Ee+1)*Ie/Pe.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,_e,0,0,Ee,Pe.width,Pe.height,1,we,Ze)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,_e,0,0,0,Pe.width,Pe.height,pe.depth,we,Pe.data)}else i.compressedTexImage3D(a.TEXTURE_2D_ARRAY,_e,Oe,Pe.width,Pe.height,pe.depth,0,Pe.data,0,0);else ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ke?k&&i.texSubImage3D(a.TEXTURE_2D_ARRAY,_e,0,0,0,Pe.width,Pe.height,pe.depth,we,ze,Pe.data):i.texImage3D(a.TEXTURE_2D_ARRAY,_e,Oe,Pe.width,Pe.height,pe.depth,0,we,ze,Pe.data)}else{Ke&&nt&&i.texStorage2D(a.TEXTURE_2D,De,Oe,$e[0].width,$e[0].height);for(let _e=0,Le=$e.length;_e<Le;_e++)Pe=$e[_e],E.format!==fa?we!==null?Ke?k&&i.compressedTexSubImage2D(a.TEXTURE_2D,_e,0,0,Pe.width,Pe.height,we,Pe.data):i.compressedTexImage2D(a.TEXTURE_2D,_e,Oe,Pe.width,Pe.height,0,Pe.data):ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ke?k&&i.texSubImage2D(a.TEXTURE_2D,_e,0,0,Pe.width,Pe.height,we,ze,Pe.data):i.texImage2D(a.TEXTURE_2D,_e,Oe,Pe.width,Pe.height,0,we,ze,Pe.data)}else if(E.isDataArrayTexture)if(Ke){if(nt&&i.texStorage3D(a.TEXTURE_2D_ARRAY,De,Oe,pe.width,pe.height,pe.depth),k)if(E.layerUpdates.size>0){const _e=cv(pe.width,pe.height,E.format,E.type);for(const Le of E.layerUpdates){const Ie=pe.data.subarray(Le*_e/pe.data.BYTES_PER_ELEMENT,(Le+1)*_e/pe.data.BYTES_PER_ELEMENT);i.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,Le,pe.width,pe.height,1,we,ze,Ie)}E.clearLayerUpdates()}else i.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,pe.width,pe.height,pe.depth,we,ze,pe.data)}else i.texImage3D(a.TEXTURE_2D_ARRAY,0,Oe,pe.width,pe.height,pe.depth,0,we,ze,pe.data);else if(E.isData3DTexture)Ke?(nt&&i.texStorage3D(a.TEXTURE_3D,De,Oe,pe.width,pe.height,pe.depth),k&&i.texSubImage3D(a.TEXTURE_3D,0,0,0,0,pe.width,pe.height,pe.depth,we,ze,pe.data)):i.texImage3D(a.TEXTURE_3D,0,Oe,pe.width,pe.height,pe.depth,0,we,ze,pe.data);else if(E.isFramebufferTexture){if(nt)if(Ke)i.texStorage2D(a.TEXTURE_2D,De,Oe,pe.width,pe.height);else{let _e=pe.width,Le=pe.height;for(let Ie=0;Ie<De;Ie++)i.texImage2D(a.TEXTURE_2D,Ie,Oe,_e,Le,0,we,ze,null),_e>>=1,Le>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in a){const _e=a.canvas;if(_e.hasAttribute("layoutsubtree")||_e.setAttribute("layoutsubtree","true"),pe.parentNode!==_e){_e.appendChild(pe),_.add(E),_e.onpaint=Le=>{const Ie=Le.changedElements;for(const Ee of _)Ie.includes(Ee.image)&&(Ee.needsUpdate=!0)},_e.requestPaint();return}if(a.texElementImage2D.length===3)a.texElementImage2D(a.TEXTURE_2D,a.RGBA8,pe);else{const Ie=a.RGBA,Ee=a.RGBA,Ze=a.UNSIGNED_BYTE;a.texElementImage2D(a.TEXTURE_2D,0,Ie,Ee,Ze,pe)}a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MIN_FILTER,a.LINEAR),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE)}}else if($e.length>0){if(Ke&&nt){const _e=St($e[0]);i.texStorage2D(a.TEXTURE_2D,De,Oe,_e.width,_e.height)}for(let _e=0,Le=$e.length;_e<Le;_e++)Pe=$e[_e],Ke?k&&i.texSubImage2D(a.TEXTURE_2D,_e,0,0,we,ze,Pe):i.texImage2D(a.TEXTURE_2D,_e,Oe,we,ze,Pe);E.generateMipmaps=!1}else if(Ke){if(nt){const _e=St(pe);i.texStorage2D(a.TEXTURE_2D,De,Oe,_e.width,_e.height)}k&&i.texSubImage2D(a.TEXTURE_2D,0,0,0,we,ze,pe)}else i.texImage2D(a.TEXTURE_2D,0,Oe,we,ze,pe);M(E)&&I(ae),Ne.__version=Ae.version,E.onUpdate&&E.onUpdate(E)}U.__version=E.version}function at(U,E,Q){if(E.image.length!==6)return;const ae=ie(U,E),he=E.source;i.bindTexture(a.TEXTURE_CUBE_MAP,U.__webglTexture,a.TEXTURE0+Q);const Ae=r.get(he);if(he.version!==Ae.__version||ae===!0){i.activeTexture(a.TEXTURE0+Q);const Ne=Dt.getPrimaries(Dt.workingColorSpace),de=E.colorSpace===Bs?null:Dt.getPrimaries(E.colorSpace),pe=E.colorSpace===Bs||Ne===de?a.NONE:a.BROWSER_DEFAULT_WEBGL;i.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(a.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);const we=E.isCompressedTexture||E.image[0].isCompressedTexture,ze=E.image[0]&&E.image[0].isDataTexture,Oe=[];for(let Ee=0;Ee<6;Ee++)!we&&!ze?Oe[Ee]=y(E.image[Ee],!0,o.maxCubemapSize):Oe[Ee]=ze?E.image[Ee].image:E.image[Ee],Oe[Ee]=Ht(E,Oe[Ee]);const Pe=Oe[0],$e=c.convert(E.format,E.colorSpace),Ke=c.convert(E.type),nt=R(E.internalFormat,$e,Ke,E.normalized,E.colorSpace),k=E.isVideoTexture!==!0,De=Ae.__version===void 0||ae===!0,_e=he.dataReady;let Le=L(E,Pe);Ce(a.TEXTURE_CUBE_MAP,E);let Ie;if(we){k&&De&&i.texStorage2D(a.TEXTURE_CUBE_MAP,Le,nt,Pe.width,Pe.height);for(let Ee=0;Ee<6;Ee++){Ie=Oe[Ee].mipmaps;for(let Ze=0;Ze<Ie.length;Ze++){const We=Ie[Ze];E.format!==fa?$e!==null?k?_e&&i.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Ze,0,0,We.width,We.height,$e,We.data):i.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Ze,nt,We.width,We.height,0,We.data):ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?_e&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Ze,0,0,We.width,We.height,$e,Ke,We.data):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Ze,nt,We.width,We.height,0,$e,Ke,We.data)}}}else{if(Ie=E.mipmaps,k&&De){Ie.length>0&&Le++;const Ee=St(Oe[0]);i.texStorage2D(a.TEXTURE_CUBE_MAP,Le,nt,Ee.width,Ee.height)}for(let Ee=0;Ee<6;Ee++)if(ze){k?_e&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,0,0,Oe[Ee].width,Oe[Ee].height,$e,Ke,Oe[Ee].data):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,nt,Oe[Ee].width,Oe[Ee].height,0,$e,Ke,Oe[Ee].data);for(let Ze=0;Ze<Ie.length;Ze++){const an=Ie[Ze].image[Ee].image;k?_e&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Ze+1,0,0,an.width,an.height,$e,Ke,an.data):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Ze+1,nt,an.width,an.height,0,$e,Ke,an.data)}}else{k?_e&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,0,0,$e,Ke,Oe[Ee]):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,nt,$e,Ke,Oe[Ee]);for(let Ze=0;Ze<Ie.length;Ze++){const We=Ie[Ze];k?_e&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Ze+1,0,0,$e,Ke,We.image[Ee]):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Ze+1,nt,$e,Ke,We.image[Ee])}}}M(E)&&I(a.TEXTURE_CUBE_MAP),Ae.__version=he.version,E.onUpdate&&E.onUpdate(E)}U.__version=E.version}function et(U,E,Q,ae,he,Ae){const Ne=c.convert(Q.format,Q.colorSpace),de=c.convert(Q.type),pe=R(Q.internalFormat,Ne,de,Q.normalized,Q.colorSpace),we=r.get(E),ze=r.get(Q);if(ze.__renderTarget=E,!we.__hasExternalTextures){const Oe=Math.max(1,E.width>>Ae),Pe=Math.max(1,E.height>>Ae);he===a.TEXTURE_3D||he===a.TEXTURE_2D_ARRAY?i.texImage3D(he,Ae,pe,Oe,Pe,E.depth,0,Ne,de,null):i.texImage2D(he,Ae,pe,Oe,Pe,0,Ne,de,null)}i.bindFramebuffer(a.FRAMEBUFFER,U),ln(E)?h.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,ae,he,ze.__webglTexture,0,Ut(E)):(he===a.TEXTURE_2D||he>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&he<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&a.framebufferTexture2D(a.FRAMEBUFFER,ae,he,ze.__webglTexture,Ae),i.bindFramebuffer(a.FRAMEBUFFER,null)}function Jt(U,E,Q){if(a.bindRenderbuffer(a.RENDERBUFFER,U),E.depthBuffer){const ae=E.depthTexture,he=ae&&ae.isDepthTexture?ae.type:null,Ae=O(E.stencilBuffer,he),Ne=E.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;ln(E)?h.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,Ut(E),Ae,E.width,E.height):Q?a.renderbufferStorageMultisample(a.RENDERBUFFER,Ut(E),Ae,E.width,E.height):a.renderbufferStorage(a.RENDERBUFFER,Ae,E.width,E.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,Ne,a.RENDERBUFFER,U)}else{const ae=E.textures;for(let he=0;he<ae.length;he++){const Ae=ae[he],Ne=c.convert(Ae.format,Ae.colorSpace),de=c.convert(Ae.type),pe=R(Ae.internalFormat,Ne,de,Ae.normalized,Ae.colorSpace);ln(E)?h.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,Ut(E),pe,E.width,E.height):Q?a.renderbufferStorageMultisample(a.RENDERBUFFER,Ut(E),pe,E.width,E.height):a.renderbufferStorage(a.RENDERBUFFER,pe,E.width,E.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function dt(U,E,Q){const ae=E.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(a.FRAMEBUFFER,U),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const he=r.get(E.depthTexture);if(he.__renderTarget=E,(!he.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),ae){if(he.__webglInit===void 0&&(he.__webglInit=!0,E.depthTexture.addEventListener("dispose",B)),he.__webglTexture===void 0){he.__webglTexture=a.createTexture(),i.bindTexture(a.TEXTURE_CUBE_MAP,he.__webglTexture),Ce(a.TEXTURE_CUBE_MAP,E.depthTexture);const we=c.convert(E.depthTexture.format),ze=c.convert(E.depthTexture.type);let Oe;E.depthTexture.format===is?Oe=a.DEPTH_COMPONENT24:E.depthTexture.format===dr&&(Oe=a.DEPTH24_STENCIL8);for(let Pe=0;Pe<6;Pe++)a.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,Oe,E.width,E.height,0,we,ze,null)}}else $(E.depthTexture,0);const Ae=he.__webglTexture,Ne=Ut(E),de=ae?a.TEXTURE_CUBE_MAP_POSITIVE_X+Q:a.TEXTURE_2D,pe=E.depthTexture.format===dr?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;if(E.depthTexture.format===is)ln(E)?h.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,pe,de,Ae,0,Ne):a.framebufferTexture2D(a.FRAMEBUFFER,pe,de,Ae,0);else if(E.depthTexture.format===dr)ln(E)?h.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,pe,de,Ae,0,Ne):a.framebufferTexture2D(a.FRAMEBUFFER,pe,de,Ae,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function xt(U){const E=r.get(U),Q=U.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==U.depthTexture){const ae=U.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ae){const he=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ae.removeEventListener("dispose",he)};ae.addEventListener("dispose",he),E.__depthDisposeCallback=he}E.__boundDepthTexture=ae}if(U.depthTexture&&!E.__autoAllocateDepthBuffer)if(Q)for(let ae=0;ae<6;ae++)dt(E.__webglFramebuffer[ae],U,ae);else{const ae=U.texture.mipmaps;ae&&ae.length>0?dt(E.__webglFramebuffer[0],U,0):dt(E.__webglFramebuffer,U,0)}else if(Q){E.__webglDepthbuffer=[];for(let ae=0;ae<6;ae++)if(i.bindFramebuffer(a.FRAMEBUFFER,E.__webglFramebuffer[ae]),E.__webglDepthbuffer[ae]===void 0)E.__webglDepthbuffer[ae]=a.createRenderbuffer(),Jt(E.__webglDepthbuffer[ae],U,!1);else{const he=U.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Ae=E.__webglDepthbuffer[ae];a.bindRenderbuffer(a.RENDERBUFFER,Ae),a.framebufferRenderbuffer(a.FRAMEBUFFER,he,a.RENDERBUFFER,Ae)}}else{const ae=U.texture.mipmaps;if(ae&&ae.length>0?i.bindFramebuffer(a.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(a.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=a.createRenderbuffer(),Jt(E.__webglDepthbuffer,U,!1);else{const he=U.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Ae=E.__webglDepthbuffer;a.bindRenderbuffer(a.RENDERBUFFER,Ae),a.framebufferRenderbuffer(a.FRAMEBUFFER,he,a.RENDERBUFFER,Ae)}}i.bindFramebuffer(a.FRAMEBUFFER,null)}function gt(U,E,Q){const ae=r.get(U);E!==void 0&&et(ae.__webglFramebuffer,U,U.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,0),Q!==void 0&&xt(U)}function ht(U){const E=U.texture,Q=r.get(U),ae=r.get(E);U.addEventListener("dispose",T);const he=U.textures,Ae=U.isWebGLCubeRenderTarget===!0,Ne=he.length>1;if(Ne||(ae.__webglTexture===void 0&&(ae.__webglTexture=a.createTexture()),ae.__version=E.version,u.memory.textures++),Ae){Q.__webglFramebuffer=[];for(let de=0;de<6;de++)if(E.mipmaps&&E.mipmaps.length>0){Q.__webglFramebuffer[de]=[];for(let pe=0;pe<E.mipmaps.length;pe++)Q.__webglFramebuffer[de][pe]=a.createFramebuffer()}else Q.__webglFramebuffer[de]=a.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){Q.__webglFramebuffer=[];for(let de=0;de<E.mipmaps.length;de++)Q.__webglFramebuffer[de]=a.createFramebuffer()}else Q.__webglFramebuffer=a.createFramebuffer();if(Ne)for(let de=0,pe=he.length;de<pe;de++){const we=r.get(he[de]);we.__webglTexture===void 0&&(we.__webglTexture=a.createTexture(),u.memory.textures++)}if(U.samples>0&&ln(U)===!1){Q.__webglMultisampledFramebuffer=a.createFramebuffer(),Q.__webglColorRenderbuffer=[],i.bindFramebuffer(a.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let de=0;de<he.length;de++){const pe=he[de];Q.__webglColorRenderbuffer[de]=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,Q.__webglColorRenderbuffer[de]);const we=c.convert(pe.format,pe.colorSpace),ze=c.convert(pe.type),Oe=R(pe.internalFormat,we,ze,pe.normalized,pe.colorSpace,U.isXRRenderTarget===!0),Pe=Ut(U);a.renderbufferStorageMultisample(a.RENDERBUFFER,Pe,Oe,U.width,U.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+de,a.RENDERBUFFER,Q.__webglColorRenderbuffer[de])}a.bindRenderbuffer(a.RENDERBUFFER,null),U.depthBuffer&&(Q.__webglDepthRenderbuffer=a.createRenderbuffer(),Jt(Q.__webglDepthRenderbuffer,U,!0)),i.bindFramebuffer(a.FRAMEBUFFER,null)}}if(Ae){i.bindTexture(a.TEXTURE_CUBE_MAP,ae.__webglTexture),Ce(a.TEXTURE_CUBE_MAP,E);for(let de=0;de<6;de++)if(E.mipmaps&&E.mipmaps.length>0)for(let pe=0;pe<E.mipmaps.length;pe++)et(Q.__webglFramebuffer[de][pe],U,E,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+de,pe);else et(Q.__webglFramebuffer[de],U,E,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);M(E)&&I(a.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ne){for(let de=0,pe=he.length;de<pe;de++){const we=he[de],ze=r.get(we);let Oe=a.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Oe=U.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),i.bindTexture(Oe,ze.__webglTexture),Ce(Oe,we),et(Q.__webglFramebuffer,U,we,a.COLOR_ATTACHMENT0+de,Oe,0),M(we)&&I(Oe)}i.unbindTexture()}else{let de=a.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(de=U.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),i.bindTexture(de,ae.__webglTexture),Ce(de,E),E.mipmaps&&E.mipmaps.length>0)for(let pe=0;pe<E.mipmaps.length;pe++)et(Q.__webglFramebuffer[pe],U,E,a.COLOR_ATTACHMENT0,de,pe);else et(Q.__webglFramebuffer,U,E,a.COLOR_ATTACHMENT0,de,0);M(E)&&I(de),i.unbindTexture()}U.depthBuffer&&xt(U)}function un(U){const E=U.textures;for(let Q=0,ae=E.length;Q<ae;Q++){const he=E[Q];if(M(he)){const Ae=z(U),Ne=r.get(he).__webglTexture;i.bindTexture(Ae,Ne),I(Ae),i.unbindTexture()}}}const fn=[],on=[];function vn(U){if(U.samples>0){if(ln(U)===!1){const E=U.textures,Q=U.width,ae=U.height;let he=a.COLOR_BUFFER_BIT;const Ae=U.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Ne=r.get(U),de=E.length>1;if(de)for(let we=0;we<E.length;we++)i.bindFramebuffer(a.FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+we,a.RENDERBUFFER,null),i.bindFramebuffer(a.FRAMEBUFFER,Ne.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+we,a.TEXTURE_2D,null,0);i.bindFramebuffer(a.READ_FRAMEBUFFER,Ne.__webglMultisampledFramebuffer);const pe=U.texture.mipmaps;pe&&pe.length>0?i.bindFramebuffer(a.DRAW_FRAMEBUFFER,Ne.__webglFramebuffer[0]):i.bindFramebuffer(a.DRAW_FRAMEBUFFER,Ne.__webglFramebuffer);for(let we=0;we<E.length;we++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(he|=a.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(he|=a.STENCIL_BUFFER_BIT)),de){a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,Ne.__webglColorRenderbuffer[we]);const ze=r.get(E[we]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,ze,0)}a.blitFramebuffer(0,0,Q,ae,0,0,Q,ae,he,a.NEAREST),m===!0&&(fn.length=0,on.length=0,fn.push(a.COLOR_ATTACHMENT0+we),U.depthBuffer&&U.resolveDepthBuffer===!1&&(fn.push(Ae),on.push(Ae),a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,on)),a.invalidateFramebuffer(a.READ_FRAMEBUFFER,fn))}if(i.bindFramebuffer(a.READ_FRAMEBUFFER,null),i.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),de)for(let we=0;we<E.length;we++){i.bindFramebuffer(a.FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+we,a.RENDERBUFFER,Ne.__webglColorRenderbuffer[we]);const ze=r.get(E[we]).__webglTexture;i.bindFramebuffer(a.FRAMEBUFFER,Ne.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+we,a.TEXTURE_2D,ze,0)}i.bindFramebuffer(a.DRAW_FRAMEBUFFER,Ne.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&m){const E=U.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[E])}}}function Ut(U){return Math.min(o.maxSamples,U.samples)}function ln(U){const E=r.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Z(U){const E=u.render.frame;g.get(U)!==E&&(g.set(U,E),U.update())}function Ht(U,E){const Q=U.colorSpace,ae=U.format,he=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||Q!==yu&&Q!==Bs&&(Dt.getTransfer(Q)===Kt?(ae!==fa||he!==Ki)&&ot("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ot("WebGLTextures: Unsupported texture color space:",Q)),E}function St(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(d.width=U.naturalWidth||U.width,d.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(d.width=U.displayWidth,d.height=U.displayHeight):(d.width=U.width,d.height=U.height),d}this.allocateTextureUnit=F,this.resetTextureUnits=ce,this.getTextureUnits=ue,this.setTextureUnits=Y,this.setTexture2D=$,this.setTexture2DArray=me,this.setTexture3D=xe,this.setTextureCube=P,this.rebindTextures=gt,this.setupRenderTarget=ht,this.updateRenderTargetMipmap=un,this.updateMultisampleRenderTarget=vn,this.setupDepthRenderbuffer=xt,this.setupFrameBufferTexture=et,this.useMultisampledRTT=ln,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function F2(a,e){function i(r,o=Bs){let c;const u=Dt.getTransfer(o);if(r===Ki)return a.UNSIGNED_BYTE;if(r===Ep)return a.UNSIGNED_SHORT_4_4_4_4;if(r===bp)return a.UNSIGNED_SHORT_5_5_5_1;if(r===hx)return a.UNSIGNED_INT_5_9_9_9_REV;if(r===px)return a.UNSIGNED_INT_10F_11F_11F_REV;if(r===fx)return a.BYTE;if(r===dx)return a.SHORT;if(r===Dl)return a.UNSIGNED_SHORT;if(r===yp)return a.INT;if(r===Ra)return a.UNSIGNED_INT;if(r===ya)return a.FLOAT;if(r===ns)return a.HALF_FLOAT;if(r===mx)return a.ALPHA;if(r===gx)return a.RGB;if(r===fa)return a.RGBA;if(r===is)return a.DEPTH_COMPONENT;if(r===dr)return a.DEPTH_STENCIL;if(r===_x)return a.RED;if(r===Tp)return a.RED_INTEGER;if(r===mr)return a.RG;if(r===Ap)return a.RG_INTEGER;if(r===Rp)return a.RGBA_INTEGER;if(r===pu||r===mu||r===gu||r===_u)if(u===Kt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===pu)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===mu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===gu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===_u)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===pu)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===mu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===gu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===_u)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Hh||r===Gh||r===Vh||r===kh)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===Hh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Gh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Vh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===kh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Xh||r===Wh||r===Yh||r===qh||r===jh||r===Su||r===Zh)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===Xh||r===Wh)return u===Kt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===Yh)return u===Kt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(r===qh)return c.COMPRESSED_R11_EAC;if(r===jh)return c.COMPRESSED_SIGNED_R11_EAC;if(r===Su)return c.COMPRESSED_RG11_EAC;if(r===Zh)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===Kh||r===Qh||r===Jh||r===$h||r===ep||r===tp||r===np||r===ip||r===ap||r===sp||r===rp||r===op||r===lp||r===cp)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===Kh)return u===Kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Qh)return u===Kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Jh)return u===Kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===$h)return u===Kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===ep)return u===Kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===tp)return u===Kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===np)return u===Kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===ip)return u===Kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===ap)return u===Kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===sp)return u===Kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===rp)return u===Kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===op)return u===Kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===lp)return u===Kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===cp)return u===Kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===up||r===fp||r===dp)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===up)return u===Kt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===fp)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===dp)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===hp||r===pp||r===Mu||r===mp)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===hp)return c.COMPRESSED_RED_RGTC1_EXT;if(r===pp)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Mu)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===mp)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ll?a.UNSIGNED_INT_24_8:a[r]!==void 0?a[r]:null}return{convert:i}}const B2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,z2=`
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

}`;class H2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const r=new Rx(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new ea({vertexShader:B2,fragmentShader:z2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Ji(new hr(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class G2 extends _r{constructor(e,i){super();const r=this;let o=null,c=1,u=null,h="local-floor",m=1,d=null,g=null,_=null,v=null,x=null,b=null;const w=typeof XRWebGLBinding<"u",y=new H2,M={},I=i.getContextAttributes();let z=null,R=null;const O=[],L=[],B=new zt;let T=null;const N=new Zi;N.viewport=new Tn;const X=new Zi;X.viewport=new Tn;const V=[N,X],j=new QE;let ce=null,ue=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ie){let ye=O[ie];return ye===void 0&&(ye=new Kd,O[ie]=ye),ye.getTargetRaySpace()},this.getControllerGrip=function(ie){let ye=O[ie];return ye===void 0&&(ye=new Kd,O[ie]=ye),ye.getGripSpace()},this.getHand=function(ie){let ye=O[ie];return ye===void 0&&(ye=new Kd,O[ie]=ye),ye.getHandSpace()};function Y(ie){const ye=L.indexOf(ie.inputSource);if(ye===-1)return;const be=O[ye];be!==void 0&&(be.update(ie.inputSource,ie.frame,d||u),be.dispatchEvent({type:ie.type,data:ie.inputSource}))}function F(){o.removeEventListener("select",Y),o.removeEventListener("selectstart",Y),o.removeEventListener("selectend",Y),o.removeEventListener("squeeze",Y),o.removeEventListener("squeezestart",Y),o.removeEventListener("squeezeend",Y),o.removeEventListener("end",F),o.removeEventListener("inputsourceschange",H);for(let ie=0;ie<O.length;ie++){const ye=L[ie];ye!==null&&(L[ie]=null,O[ie].disconnect(ye))}ce=null,ue=null,y.reset();for(const ie in M)delete M[ie];e.setRenderTarget(z),x=null,v=null,_=null,o=null,R=null,Ce.stop(),r.isPresenting=!1,e.setPixelRatio(T),e.setSize(B.width,B.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ie){c=ie,r.isPresenting===!0&&ot("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ie){h=ie,r.isPresenting===!0&&ot("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||u},this.setReferenceSpace=function(ie){d=ie},this.getBaseLayer=function(){return v!==null?v:x},this.getBinding=function(){return _===null&&w&&(_=new XRWebGLBinding(o,i)),_},this.getFrame=function(){return b},this.getSession=function(){return o},this.setSession=async function(ie){if(o=ie,o!==null){if(z=e.getRenderTarget(),o.addEventListener("select",Y),o.addEventListener("selectstart",Y),o.addEventListener("selectend",Y),o.addEventListener("squeeze",Y),o.addEventListener("squeezestart",Y),o.addEventListener("squeezeend",Y),o.addEventListener("end",F),o.addEventListener("inputsourceschange",H),I.xrCompatible!==!0&&await i.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(B),w&&"createProjectionLayer"in XRWebGLBinding.prototype){let be=null,He=null,at=null;I.depth&&(at=I.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,be=I.stencil?dr:is,He=I.stencil?Ll:Ra);const et={colorFormat:i.RGBA8,depthFormat:at,scaleFactor:c};_=this.getBinding(),v=_.createProjectionLayer(et),o.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),R=new Ta(v.textureWidth,v.textureHeight,{format:fa,type:Ki,depthTexture:new yo(v.textureWidth,v.textureHeight,He,void 0,void 0,void 0,void 0,void 0,void 0,be),stencilBuffer:I.stencil,colorSpace:e.outputColorSpace,samples:I.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const be={antialias:I.antialias,alpha:!0,depth:I.depth,stencil:I.stencil,framebufferScaleFactor:c};x=new XRWebGLLayer(o,i,be),o.updateRenderState({baseLayer:x}),e.setPixelRatio(1),e.setSize(x.framebufferWidth,x.framebufferHeight,!1),R=new Ta(x.framebufferWidth,x.framebufferHeight,{format:fa,type:Ki,colorSpace:e.outputColorSpace,stencilBuffer:I.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}R.isXRRenderTarget=!0,this.setFoveation(m),d=null,u=await o.requestReferenceSpace(h),Ce.setContext(o),Ce.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function H(ie){for(let ye=0;ye<ie.removed.length;ye++){const be=ie.removed[ye],He=L.indexOf(be);He>=0&&(L[He]=null,O[He].disconnect(be))}for(let ye=0;ye<ie.added.length;ye++){const be=ie.added[ye];let He=L.indexOf(be);if(He===-1){for(let et=0;et<O.length;et++)if(et>=L.length){L.push(be),He=et;break}else if(L[et]===null){L[et]=be,He=et;break}if(He===-1)break}const at=O[He];at&&at.connect(be)}}const $=new ee,me=new ee;function xe(ie,ye,be){$.setFromMatrixPosition(ye.matrixWorld),me.setFromMatrixPosition(be.matrixWorld);const He=$.distanceTo(me),at=ye.projectionMatrix.elements,et=be.projectionMatrix.elements,Jt=at[14]/(at[10]-1),dt=at[14]/(at[10]+1),xt=(at[9]+1)/at[5],gt=(at[9]-1)/at[5],ht=(at[8]-1)/at[0],un=(et[8]+1)/et[0],fn=Jt*ht,on=Jt*un,vn=He/(-ht+un),Ut=vn*-ht;if(ye.matrixWorld.decompose(ie.position,ie.quaternion,ie.scale),ie.translateX(Ut),ie.translateZ(vn),ie.matrixWorld.compose(ie.position,ie.quaternion,ie.scale),ie.matrixWorldInverse.copy(ie.matrixWorld).invert(),at[10]===-1)ie.projectionMatrix.copy(ye.projectionMatrix),ie.projectionMatrixInverse.copy(ye.projectionMatrixInverse);else{const ln=Jt+vn,Z=dt+vn,Ht=fn-Ut,St=on+(He-Ut),U=xt*dt/Z*ln,E=gt*dt/Z*ln;ie.projectionMatrix.makePerspective(Ht,St,U,E,ln,Z),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert()}}function P(ie,ye){ye===null?ie.matrixWorld.copy(ie.matrix):ie.matrixWorld.multiplyMatrices(ye.matrixWorld,ie.matrix),ie.matrixWorldInverse.copy(ie.matrixWorld).invert()}this.updateCamera=function(ie){if(o===null)return;let ye=ie.near,be=ie.far;y.texture!==null&&(y.depthNear>0&&(ye=y.depthNear),y.depthFar>0&&(be=y.depthFar)),j.near=X.near=N.near=ye,j.far=X.far=N.far=be,(ce!==j.near||ue!==j.far)&&(o.updateRenderState({depthNear:j.near,depthFar:j.far}),ce=j.near,ue=j.far),j.layers.mask=ie.layers.mask|6,N.layers.mask=j.layers.mask&-5,X.layers.mask=j.layers.mask&-3;const He=ie.parent,at=j.cameras;P(j,He);for(let et=0;et<at.length;et++)P(at[et],He);at.length===2?xe(j,N,X):j.projectionMatrix.copy(N.projectionMatrix),K(ie,j,He)};function K(ie,ye,be){be===null?ie.matrix.copy(ye.matrixWorld):(ie.matrix.copy(be.matrixWorld),ie.matrix.invert(),ie.matrix.multiply(ye.matrixWorld)),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.updateMatrixWorld(!0),ie.projectionMatrix.copy(ye.projectionMatrix),ie.projectionMatrixInverse.copy(ye.projectionMatrixInverse),ie.isPerspectiveCamera&&(ie.fov=Nl*2*Math.atan(1/ie.projectionMatrix.elements[5]),ie.zoom=1)}this.getCamera=function(){return j},this.getFoveation=function(){if(!(v===null&&x===null))return m},this.setFoveation=function(ie){m=ie,v!==null&&(v.fixedFoveation=ie),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=ie)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(j)},this.getCameraTexture=function(ie){return M[ie]};let Se=null;function Te(ie,ye){if(g=ye.getViewerPose(d||u),b=ye,g!==null){const be=g.views;x!==null&&(e.setRenderTargetFramebuffer(R,x.framebuffer),e.setRenderTarget(R));let He=!1;be.length!==j.cameras.length&&(j.cameras.length=0,He=!0);for(let dt=0;dt<be.length;dt++){const xt=be[dt];let gt=null;if(x!==null)gt=x.getViewport(xt);else{const un=_.getViewSubImage(v,xt);gt=un.viewport,dt===0&&(e.setRenderTargetTextures(R,un.colorTexture,un.depthStencilTexture),e.setRenderTarget(R))}let ht=V[dt];ht===void 0&&(ht=new Zi,ht.layers.enable(dt),ht.viewport=new Tn,V[dt]=ht),ht.matrix.fromArray(xt.transform.matrix),ht.matrix.decompose(ht.position,ht.quaternion,ht.scale),ht.projectionMatrix.fromArray(xt.projectionMatrix),ht.projectionMatrixInverse.copy(ht.projectionMatrix).invert(),ht.viewport.set(gt.x,gt.y,gt.width,gt.height),dt===0&&(j.matrix.copy(ht.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale)),He===!0&&j.cameras.push(ht)}const at=o.enabledFeatures;if(at&&at.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&w){_=r.getBinding();const dt=_.getDepthInformation(be[0]);dt&&dt.isValid&&dt.texture&&y.init(dt,o.renderState)}if(at&&at.includes("camera-access")&&w){e.state.unbindTexture(),_=r.getBinding();for(let dt=0;dt<be.length;dt++){const xt=be[dt].camera;if(xt){let gt=M[xt];gt||(gt=new Rx,M[xt]=gt);const ht=_.getCameraImage(xt);gt.sourceTexture=ht}}}}for(let be=0;be<O.length;be++){const He=L[be],at=O[be];He!==null&&at!==void 0&&at.update(He,ye,d||u)}Se&&Se(ie,ye),ye.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ye}),b=null}const Ce=new Lx;Ce.setAnimationLoop(Te),this.setAnimationLoop=function(ie){Se=ie},this.dispose=function(){}}}const V2=new Dn,Bx=new ft;Bx.set(-1,0,0,0,1,0,0,0,1);function k2(a,e){function i(y,M){y.matrixAutoUpdate===!0&&y.updateMatrix(),M.value.copy(y.matrix)}function r(y,M){M.color.getRGB(y.fogColor.value,Cx(a)),M.isFog?(y.fogNear.value=M.near,y.fogFar.value=M.far):M.isFogExp2&&(y.fogDensity.value=M.density)}function o(y,M,I,z,R){M.isNodeMaterial?M.uniformsNeedUpdate=!1:M.isMeshBasicMaterial?c(y,M):M.isMeshLambertMaterial?(c(y,M),M.envMap&&(y.envMapIntensity.value=M.envMapIntensity)):M.isMeshToonMaterial?(c(y,M),_(y,M)):M.isMeshPhongMaterial?(c(y,M),g(y,M),M.envMap&&(y.envMapIntensity.value=M.envMapIntensity)):M.isMeshStandardMaterial?(c(y,M),v(y,M),M.isMeshPhysicalMaterial&&x(y,M,R)):M.isMeshMatcapMaterial?(c(y,M),b(y,M)):M.isMeshDepthMaterial?c(y,M):M.isMeshDistanceMaterial?(c(y,M),w(y,M)):M.isMeshNormalMaterial?c(y,M):M.isLineBasicMaterial?(u(y,M),M.isLineDashedMaterial&&h(y,M)):M.isPointsMaterial?m(y,M,I,z):M.isSpriteMaterial?d(y,M):M.isShadowMaterial?(y.color.value.copy(M.color),y.opacity.value=M.opacity):M.isShaderMaterial&&(M.uniformsNeedUpdate=!1)}function c(y,M){y.opacity.value=M.opacity,M.color&&y.diffuse.value.copy(M.color),M.emissive&&y.emissive.value.copy(M.emissive).multiplyScalar(M.emissiveIntensity),M.map&&(y.map.value=M.map,i(M.map,y.mapTransform)),M.alphaMap&&(y.alphaMap.value=M.alphaMap,i(M.alphaMap,y.alphaMapTransform)),M.bumpMap&&(y.bumpMap.value=M.bumpMap,i(M.bumpMap,y.bumpMapTransform),y.bumpScale.value=M.bumpScale,M.side===Ai&&(y.bumpScale.value*=-1)),M.normalMap&&(y.normalMap.value=M.normalMap,i(M.normalMap,y.normalMapTransform),y.normalScale.value.copy(M.normalScale),M.side===Ai&&y.normalScale.value.negate()),M.displacementMap&&(y.displacementMap.value=M.displacementMap,i(M.displacementMap,y.displacementMapTransform),y.displacementScale.value=M.displacementScale,y.displacementBias.value=M.displacementBias),M.emissiveMap&&(y.emissiveMap.value=M.emissiveMap,i(M.emissiveMap,y.emissiveMapTransform)),M.specularMap&&(y.specularMap.value=M.specularMap,i(M.specularMap,y.specularMapTransform)),M.alphaTest>0&&(y.alphaTest.value=M.alphaTest);const I=e.get(M),z=I.envMap,R=I.envMapRotation;z&&(y.envMap.value=z,y.envMapRotation.value.setFromMatrix4(V2.makeRotationFromEuler(R)).transpose(),z.isCubeTexture&&z.isRenderTargetTexture===!1&&y.envMapRotation.value.premultiply(Bx),y.reflectivity.value=M.reflectivity,y.ior.value=M.ior,y.refractionRatio.value=M.refractionRatio),M.lightMap&&(y.lightMap.value=M.lightMap,y.lightMapIntensity.value=M.lightMapIntensity,i(M.lightMap,y.lightMapTransform)),M.aoMap&&(y.aoMap.value=M.aoMap,y.aoMapIntensity.value=M.aoMapIntensity,i(M.aoMap,y.aoMapTransform))}function u(y,M){y.diffuse.value.copy(M.color),y.opacity.value=M.opacity,M.map&&(y.map.value=M.map,i(M.map,y.mapTransform))}function h(y,M){y.dashSize.value=M.dashSize,y.totalSize.value=M.dashSize+M.gapSize,y.scale.value=M.scale}function m(y,M,I,z){y.diffuse.value.copy(M.color),y.opacity.value=M.opacity,y.size.value=M.size*I,y.scale.value=z*.5,M.map&&(y.map.value=M.map,i(M.map,y.uvTransform)),M.alphaMap&&(y.alphaMap.value=M.alphaMap,i(M.alphaMap,y.alphaMapTransform)),M.alphaTest>0&&(y.alphaTest.value=M.alphaTest)}function d(y,M){y.diffuse.value.copy(M.color),y.opacity.value=M.opacity,y.rotation.value=M.rotation,M.map&&(y.map.value=M.map,i(M.map,y.mapTransform)),M.alphaMap&&(y.alphaMap.value=M.alphaMap,i(M.alphaMap,y.alphaMapTransform)),M.alphaTest>0&&(y.alphaTest.value=M.alphaTest)}function g(y,M){y.specular.value.copy(M.specular),y.shininess.value=Math.max(M.shininess,1e-4)}function _(y,M){M.gradientMap&&(y.gradientMap.value=M.gradientMap)}function v(y,M){y.metalness.value=M.metalness,M.metalnessMap&&(y.metalnessMap.value=M.metalnessMap,i(M.metalnessMap,y.metalnessMapTransform)),y.roughness.value=M.roughness,M.roughnessMap&&(y.roughnessMap.value=M.roughnessMap,i(M.roughnessMap,y.roughnessMapTransform)),M.envMap&&(y.envMapIntensity.value=M.envMapIntensity)}function x(y,M,I){y.ior.value=M.ior,M.sheen>0&&(y.sheenColor.value.copy(M.sheenColor).multiplyScalar(M.sheen),y.sheenRoughness.value=M.sheenRoughness,M.sheenColorMap&&(y.sheenColorMap.value=M.sheenColorMap,i(M.sheenColorMap,y.sheenColorMapTransform)),M.sheenRoughnessMap&&(y.sheenRoughnessMap.value=M.sheenRoughnessMap,i(M.sheenRoughnessMap,y.sheenRoughnessMapTransform))),M.clearcoat>0&&(y.clearcoat.value=M.clearcoat,y.clearcoatRoughness.value=M.clearcoatRoughness,M.clearcoatMap&&(y.clearcoatMap.value=M.clearcoatMap,i(M.clearcoatMap,y.clearcoatMapTransform)),M.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=M.clearcoatRoughnessMap,i(M.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),M.clearcoatNormalMap&&(y.clearcoatNormalMap.value=M.clearcoatNormalMap,i(M.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(M.clearcoatNormalScale),M.side===Ai&&y.clearcoatNormalScale.value.negate())),M.dispersion>0&&(y.dispersion.value=M.dispersion),M.iridescence>0&&(y.iridescence.value=M.iridescence,y.iridescenceIOR.value=M.iridescenceIOR,y.iridescenceThicknessMinimum.value=M.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=M.iridescenceThicknessRange[1],M.iridescenceMap&&(y.iridescenceMap.value=M.iridescenceMap,i(M.iridescenceMap,y.iridescenceMapTransform)),M.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=M.iridescenceThicknessMap,i(M.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),M.transmission>0&&(y.transmission.value=M.transmission,y.transmissionSamplerMap.value=I.texture,y.transmissionSamplerSize.value.set(I.width,I.height),M.transmissionMap&&(y.transmissionMap.value=M.transmissionMap,i(M.transmissionMap,y.transmissionMapTransform)),y.thickness.value=M.thickness,M.thicknessMap&&(y.thicknessMap.value=M.thicknessMap,i(M.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=M.attenuationDistance,y.attenuationColor.value.copy(M.attenuationColor)),M.anisotropy>0&&(y.anisotropyVector.value.set(M.anisotropy*Math.cos(M.anisotropyRotation),M.anisotropy*Math.sin(M.anisotropyRotation)),M.anisotropyMap&&(y.anisotropyMap.value=M.anisotropyMap,i(M.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=M.specularIntensity,y.specularColor.value.copy(M.specularColor),M.specularColorMap&&(y.specularColorMap.value=M.specularColorMap,i(M.specularColorMap,y.specularColorMapTransform)),M.specularIntensityMap&&(y.specularIntensityMap.value=M.specularIntensityMap,i(M.specularIntensityMap,y.specularIntensityMapTransform))}function b(y,M){M.matcap&&(y.matcap.value=M.matcap)}function w(y,M){const I=e.get(M).light;y.referencePosition.value.setFromMatrixPosition(I.matrixWorld),y.nearDistance.value=I.shadow.camera.near,y.farDistance.value=I.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function X2(a,e,i,r){let o={},c={},u=[];const h=a.getParameter(a.MAX_UNIFORM_BUFFER_BINDINGS);function m(R,O){const L=O.program;r.uniformBlockBinding(R,L)}function d(R,O){let L=o[R.id];L===void 0&&(y(R),L=g(R),o[R.id]=L,R.addEventListener("dispose",I));const B=O.program;r.updateUBOMapping(R,B);const T=e.render.frame;c[R.id]!==T&&(v(R),c[R.id]=T)}function g(R){const O=_();R.__bindingPointIndex=O;const L=a.createBuffer(),B=R.__size,T=R.usage;return a.bindBuffer(a.UNIFORM_BUFFER,L),a.bufferData(a.UNIFORM_BUFFER,B,T),a.bindBuffer(a.UNIFORM_BUFFER,null),a.bindBufferBase(a.UNIFORM_BUFFER,O,L),L}function _(){for(let R=0;R<h;R++)if(u.indexOf(R)===-1)return u.push(R),R;return Ot("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(R){const O=o[R.id],L=R.uniforms,B=R.__cache;a.bindBuffer(a.UNIFORM_BUFFER,O);for(let T=0,N=L.length;T<N;T++){const X=L[T];if(Array.isArray(X))for(let V=0,j=X.length;V<j;V++)x(X[V],T,V,B);else x(X,T,0,B)}a.bindBuffer(a.UNIFORM_BUFFER,null)}function x(R,O,L,B){if(w(R,O,L,B)===!0){const T=R.__offset,N=R.value;if(Array.isArray(N)){let X=0;for(let V=0;V<N.length;V++){const j=N[V],ce=M(j);b(j,R.__data,X),typeof j!="number"&&typeof j!="boolean"&&!j.isMatrix3&&!ArrayBuffer.isView(j)&&(X+=ce.storage/Float32Array.BYTES_PER_ELEMENT)}}else b(N,R.__data,0);a.bufferSubData(a.UNIFORM_BUFFER,T,R.__data)}}function b(R,O,L){typeof R=="number"||typeof R=="boolean"?O[0]=R:R.isMatrix3?(O[0]=R.elements[0],O[1]=R.elements[1],O[2]=R.elements[2],O[3]=0,O[4]=R.elements[3],O[5]=R.elements[4],O[6]=R.elements[5],O[7]=0,O[8]=R.elements[6],O[9]=R.elements[7],O[10]=R.elements[8],O[11]=0):ArrayBuffer.isView(R)?O.set(new R.constructor(R.buffer,R.byteOffset,O.length)):R.toArray(O,L)}function w(R,O,L,B){const T=R.value,N=O+"_"+L;if(B[N]===void 0)return typeof T=="number"||typeof T=="boolean"?B[N]=T:ArrayBuffer.isView(T)?B[N]=T.slice():B[N]=T.clone(),!0;{const X=B[N];if(typeof T=="number"||typeof T=="boolean"){if(X!==T)return B[N]=T,!0}else{if(ArrayBuffer.isView(T))return!0;if(X.equals(T)===!1)return X.copy(T),!0}}return!1}function y(R){const O=R.uniforms;let L=0;const B=16;for(let N=0,X=O.length;N<X;N++){const V=Array.isArray(O[N])?O[N]:[O[N]];for(let j=0,ce=V.length;j<ce;j++){const ue=V[j],Y=Array.isArray(ue.value)?ue.value:[ue.value];for(let F=0,H=Y.length;F<H;F++){const $=Y[F],me=M($),xe=L%B,P=xe%me.boundary,K=xe+P;L+=P,K!==0&&B-K<me.storage&&(L+=B-K),ue.__data=new Float32Array(me.storage/Float32Array.BYTES_PER_ELEMENT),ue.__offset=L,L+=me.storage}}}const T=L%B;return T>0&&(L+=B-T),R.__size=L,R.__cache={},this}function M(R){const O={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(O.boundary=4,O.storage=4):R.isVector2?(O.boundary=8,O.storage=8):R.isVector3||R.isColor?(O.boundary=16,O.storage=12):R.isVector4?(O.boundary=16,O.storage=16):R.isMatrix3?(O.boundary=48,O.storage=48):R.isMatrix4?(O.boundary=64,O.storage=64):R.isTexture?ot("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(R)?(O.boundary=16,O.storage=R.byteLength):ot("WebGLRenderer: Unsupported uniform value type.",R),O}function I(R){const O=R.target;O.removeEventListener("dispose",I);const L=u.indexOf(O.__bindingPointIndex);u.splice(L,1),a.deleteBuffer(o[O.id]),delete o[O.id],delete c[O.id]}function z(){for(const R in o)a.deleteBuffer(o[R]);u=[],o={},c={}}return{bind:m,update:d,dispose:z}}const W2=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let xa=null;function Y2(){return xa===null&&(xa=new IE(W2,16,16,mr,ns),xa.name="DFG_LUT",xa.minFilter=zn,xa.magFilter=zn,xa.wrapS=ua,xa.wrapT=ua,xa.generateMipmaps=!1,xa.needsUpdate=!0),xa}class q2{constructor(e={}){const{canvas:i=Qy(),context:r=null,depth:o=!0,stencil:c=!1,alpha:u=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:d=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:v=!1,outputBufferType:x=Ki}=e;this.isWebGLRenderer=!0;let b;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=r.getContextAttributes().alpha}else b=u;const w=x,y=new Set([Rp,Ap,Tp]),M=new Set([Ki,Ra,Dl,Ll,Ep,bp]),I=new Uint32Array(4),z=new Int32Array(4),R=new ee;let O=null,L=null;const B=[],T=[];let N=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ba,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const X=this;let V=!1,j=null,ce=null,ue=null,Y=null;this._outputColorSpace=mi;let F=0,H=0,$=null,me=-1,xe=null;const P=new Tn,K=new Tn;let Se=null;const Te=new Nt(0);let Ce=0,ie=i.width,ye=i.height,be=1,He=null,at=null;const et=new Tn(0,0,ie,ye),Jt=new Tn(0,0,ie,ye);let dt=!1;const xt=new bx;let gt=!1,ht=!1;const un=new Dn,fn=new ee,on=new Tn,vn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ut=!1;function ln(){return $===null?be:1}let Z=r;function Ht(A,q){return i.getContext(A,q)}try{const A={alpha:!0,depth:o,stencil:c,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:d,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Mp}`),i.addEventListener("webglcontextlost",an,!1),i.addEventListener("webglcontextrestored",Pt,!1),i.addEventListener("webglcontextcreationerror",kn,!1),Z===null){const q="webgl2";if(Z=Ht(q,A),Z===null)throw Ht(q)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(A){throw Ot("WebGLRenderer: "+A.message),A}let St,U,E,Q,ae,he,Ae,Ne,de,pe,we,ze,Oe,Pe,$e,Ke,nt,k,De,_e,Le,Ie,Ee;function Ze(){St=new YT(Z),St.init(),Le=new F2(Z,St),U=new BT(Z,St,e,Le),E=new P2(Z,St),U.reversedDepthBuffer&&v&&E.buffers.depth.setReversed(!0),ce=Z.createFramebuffer(),ue=Z.createFramebuffer(),Y=Z.createFramebuffer(),Q=new ZT(Z),ae=new M2,he=new I2(Z,St,E,ae,U,Le,Q),Ae=new WT(X),Ne=new $E(Z),Ie=new IT(Z,Ne),de=new qT(Z,Ne,Q,Ie),pe=new QT(Z,de,Ne,Ie,Q),k=new KT(Z,U,he),$e=new zT(ae),we=new S2(X,Ae,St,U,Ie,$e),ze=new k2(X,ae),Oe=new E2,Pe=new w2(St),nt=new PT(X,Ae,E,pe,b,m),Ke=new O2(X,pe,U),Ee=new X2(Z,Q,U,E),De=new FT(Z,St,Q),_e=new jT(Z,St,Q),Q.programs=we.programs,X.capabilities=U,X.extensions=St,X.properties=ae,X.renderLists=Oe,X.shadowMap=Ke,X.state=E,X.info=Q}Ze(),w!==Ki&&(N=new $T(w,i.width,i.height,h,o,c));const We=new G2(X,Z);this.xr=We,this.getContext=function(){return Z},this.getContextAttributes=function(){return Z.getContextAttributes()},this.forceContextLoss=function(){const A=St.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=St.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return be},this.setPixelRatio=function(A){A!==void 0&&(be=A,this.setSize(ie,ye,!1))},this.getSize=function(A){return A.set(ie,ye)},this.setSize=function(A,q,se=!0){if(We.isPresenting){ot("WebGLRenderer: Can't change size while VR device is presenting.");return}ie=A,ye=q,i.width=Math.floor(A*be),i.height=Math.floor(q*be),se===!0&&(i.style.width=A+"px",i.style.height=q+"px"),N!==null&&N.setSize(i.width,i.height),this.setViewport(0,0,A,q)},this.getDrawingBufferSize=function(A){return A.set(ie*be,ye*be).floor()},this.setDrawingBufferSize=function(A,q,se){ie=A,ye=q,be=se,i.width=Math.floor(A*se),i.height=Math.floor(q*se),this.setViewport(0,0,A,q)},this.setEffects=function(A){if(w===Ki){Ot("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let q=0;q<A.length;q++)if(A[q].isOutputPass===!0){ot("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}N.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(P)},this.getViewport=function(A){return A.copy(et)},this.setViewport=function(A,q,se,te){A.isVector4?et.set(A.x,A.y,A.z,A.w):et.set(A,q,se,te),E.viewport(P.copy(et).multiplyScalar(be).round())},this.getScissor=function(A){return A.copy(Jt)},this.setScissor=function(A,q,se,te){A.isVector4?Jt.set(A.x,A.y,A.z,A.w):Jt.set(A,q,se,te),E.scissor(K.copy(Jt).multiplyScalar(be).round())},this.getScissorTest=function(){return dt},this.setScissorTest=function(A){E.setScissorTest(dt=A)},this.setOpaqueSort=function(A){He=A},this.setTransparentSort=function(A){at=A},this.getClearColor=function(A){return A.copy(nt.getClearColor())},this.setClearColor=function(){nt.setClearColor(...arguments)},this.getClearAlpha=function(){return nt.getClearAlpha()},this.setClearAlpha=function(){nt.setClearAlpha(...arguments)},this.clear=function(A=!0,q=!0,se=!0){let te=0;if(A){let ne=!1;if($!==null){const Fe=$.texture.format;ne=y.has(Fe)}if(ne){const Fe=$.texture.type,ke=M.has(Fe),Ue=nt.getClearColor(),Ye=nt.getClearAlpha(),Xe=Ue.r,tt=Ue.g,lt=Ue.b;ke?(I[0]=Xe,I[1]=tt,I[2]=lt,I[3]=Ye,Z.clearBufferuiv(Z.COLOR,0,I)):(z[0]=Xe,z[1]=tt,z[2]=lt,z[3]=Ye,Z.clearBufferiv(Z.COLOR,0,z))}else te|=Z.COLOR_BUFFER_BIT}q&&(te|=Z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),se&&(te|=Z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),te!==0&&Z.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),j=A},this.dispose=function(){i.removeEventListener("webglcontextlost",an,!1),i.removeEventListener("webglcontextrestored",Pt,!1),i.removeEventListener("webglcontextcreationerror",kn,!1),nt.dispose(),Oe.dispose(),Pe.dispose(),ae.dispose(),Ae.dispose(),pe.dispose(),Ie.dispose(),Ee.dispose(),we.dispose(),We.dispose(),We.removeEventListener("sessionstart",Sn),We.removeEventListener("sessionend",Mn),Yn.stop()};function an(A){A.preventDefault(),G_("WebGLRenderer: Context Lost."),V=!0}function Pt(){G_("WebGLRenderer: Context Restored."),V=!1;const A=Q.autoReset,q=Ke.enabled,se=Ke.autoUpdate,te=Ke.needsUpdate,ne=Ke.type;Ze(),Q.autoReset=A,Ke.enabled=q,Ke.autoUpdate=se,Ke.needsUpdate=te,Ke.type=ne}function kn(A){Ot("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function ni(A){const q=A.target;q.removeEventListener("dispose",ni),as(q)}function as(A){ss(A),ae.remove(A)}function ss(A){const q=ae.get(A).programs;q!==void 0&&(q.forEach(function(se){we.releaseProgram(se)}),A.isShaderMaterial&&we.releaseShaderCache(A))}this.renderBufferDirect=function(A,q,se,te,ne,Fe){q===null&&(q=vn);const ke=ne.isMesh&&ne.matrixWorld.determinantAffine()<0,Ue=$t(A,q,se,te,ne);E.setMaterial(te,ke);let Ye=se.index,Xe=1;if(te.wireframe===!0){if(Ye=de.getWireframeAttribute(se),Ye===void 0)return;Xe=2}const tt=se.drawRange,lt=se.attributes.position;let Qe=tt.start*Xe,Ct=(tt.start+tt.count)*Xe;Fe!==null&&(Qe=Math.max(Qe,Fe.start*Xe),Ct=Math.min(Ct,(Fe.start+Fe.count)*Xe)),Ye!==null?(Qe=Math.max(Qe,0),Ct=Math.min(Ct,Ye.count)):lt!=null&&(Qe=Math.max(Qe,0),Ct=Math.min(Ct,lt.count));const Gt=Ct-Qe;if(Gt<0||Gt===1/0)return;Ie.setup(ne,te,Ue,se,Ye);let bt,Vt=De;if(Ye!==null&&(bt=Ne.get(Ye),Vt=_e,Vt.setIndex(bt)),ne.isMesh)te.wireframe===!0?(E.setLineWidth(te.wireframeLinewidth*ln()),Vt.setMode(Z.LINES)):Vt.setMode(Z.TRIANGLES);else if(ne.isLine){let kt=te.linewidth;kt===void 0&&(kt=1),E.setLineWidth(kt*ln()),ne.isLineSegments?Vt.setMode(Z.LINES):ne.isLineLoop?Vt.setMode(Z.LINE_LOOP):Vt.setMode(Z.LINE_STRIP)}else ne.isPoints?Vt.setMode(Z.POINTS):ne.isSprite&&Vt.setMode(Z.TRIANGLES);if(ne.isBatchedMesh)if(St.get("WEBGL_multi_draw"))Vt.renderMultiDraw(ne._multiDrawStarts,ne._multiDrawCounts,ne._multiDrawCount);else{const kt=ne._multiDrawStarts,Ge=ne._multiDrawCounts,qn=ne._multiDrawCount,ct=Ye?Ne.get(Ye).bytesPerElement:1,Rn=ae.get(te).currentProgram.getUniforms();for(let ci=0;ci<qn;ci++)Rn.setValue(Z,"_gl_DrawID",ci),Vt.render(kt[ci]/ct,Ge[ci])}else if(ne.isInstancedMesh)Vt.renderInstances(Qe,Gt,ne.count);else if(se.isInstancedBufferGeometry){const kt=se._maxInstanceCount!==void 0?se._maxInstanceCount:1/0,Ge=Math.min(se.instanceCount,kt);Vt.renderInstances(Qe,Gt,Ge)}else Vt.render(Qe,Gt)};function rs(A,q,se){A.transparent===!0&&A.side===Ma&&A.forceSinglePass===!1?(A.side=Ai,A.needsUpdate=!0,dn(A,q,se),A.side=ts,A.needsUpdate=!0,dn(A,q,se),A.side=Ma):dn(A,q,se)}this.compile=function(A,q,se=null){se===null&&(se=A),L=Pe.get(se),L.init(q),T.push(L),se.traverseVisible(function(ne){ne.isLight&&ne.layers.test(q.layers)&&(L.pushLight(ne),ne.castShadow&&L.pushShadow(ne))}),A!==se&&A.traverseVisible(function(ne){ne.isLight&&ne.layers.test(q.layers)&&(L.pushLight(ne),ne.castShadow&&L.pushShadow(ne))}),L.setupLights();const te=new Set;return A.traverse(function(ne){if(!(ne.isMesh||ne.isPoints||ne.isLine||ne.isSprite))return;const Fe=ne.material;if(Fe)if(Array.isArray(Fe))for(let ke=0;ke<Fe.length;ke++){const Ue=Fe[ke];rs(Ue,se,ne),te.add(Ue)}else rs(Fe,se,ne),te.add(Fe)}),L=T.pop(),te},this.compileAsync=function(A,q,se=null){const te=this.compile(A,q,se);return new Promise(ne=>{function Fe(){if(te.forEach(function(ke){ae.get(ke).currentProgram.isReady()&&te.delete(ke)}),te.size===0){ne(A);return}setTimeout(Fe,10)}St.get("KHR_parallel_shader_compile")!==null?Fe():setTimeout(Fe,10)})};let Ca=null;function Ri(A){Ca&&Ca(A)}function Sn(){Yn.stop()}function Mn(){Yn.start()}const Yn=new Lx;Yn.setAnimationLoop(Ri),typeof self<"u"&&Yn.setContext(self),this.setAnimationLoop=function(A){Ca=A,We.setAnimationLoop(A),A===null?Yn.stop():Yn.start()},We.addEventListener("sessionstart",Sn),We.addEventListener("sessionend",Mn),this.render=function(A,q){if(q!==void 0&&q.isCamera!==!0){Ot("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(V===!0)return;j!==null&&j.renderStart(A,q);const se=We.enabled===!0&&We.isPresenting===!0,te=N!==null&&($===null||se)&&N.begin(X,$);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),We.enabled===!0&&We.isPresenting===!0&&(N===null||N.isCompositing()===!1)&&(We.cameraAutoUpdate===!0&&We.updateCamera(q),q=We.getCamera()),A.isScene===!0&&A.onBeforeRender(X,A,q,$),L=Pe.get(A,T.length),L.init(q),L.state.textureUnits=he.getTextureUnits(),T.push(L),un.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),xt.setFromProjectionMatrix(un,Ea,q.reversedDepth),ht=this.localClippingEnabled,gt=$e.init(this.clippingPlanes,ht),O=Oe.get(A,B.length),O.init(),B.push(O),We.enabled===!0&&We.isPresenting===!0){const ke=X.xr.getDepthSensingMesh();ke!==null&&Re(ke,q,-1/0,X.sortObjects)}Re(A,q,0,X.sortObjects),O.finish(),X.sortObjects===!0&&O.sort(He,at,q.reversedDepth),Ut=We.enabled===!1||We.isPresenting===!1||We.hasDepthSensing()===!1,Ut&&nt.addToRenderList(O,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),gt===!0&&$e.beginShadows();const ne=L.state.shadowsArray;if(Ke.render(ne,A,q),gt===!0&&$e.endShadows(),(te&&N.hasRenderPass())===!1){const ke=O.opaque,Ue=O.transmissive;if(L.setupLights(),q.isArrayCamera){const Ye=q.cameras;if(Ue.length>0)for(let Xe=0,tt=Ye.length;Xe<tt;Xe++){const lt=Ye[Xe];rt(ke,Ue,A,lt)}Ut&&nt.render(A);for(let Xe=0,tt=Ye.length;Xe<tt;Xe++){const lt=Ye[Xe];qe(O,A,lt,lt.viewport)}}else Ue.length>0&&rt(ke,Ue,A,q),Ut&&nt.render(A),qe(O,A,q)}$!==null&&H===0&&(he.updateMultisampleRenderTarget($),he.updateRenderTargetMipmap($)),te&&N.end(X),A.isScene===!0&&A.onAfterRender(X,A,q),Ie.resetDefaultState(),me=-1,xe=null,T.pop(),T.length>0?(L=T[T.length-1],he.setTextureUnits(L.state.textureUnits),gt===!0&&$e.setGlobalState(X.clippingPlanes,L.state.camera)):L=null,B.pop(),B.length>0?O=B[B.length-1]:O=null,j!==null&&j.renderEnd()};function Re(A,q,se,te){if(A.visible===!1)return;if(A.layers.test(q.layers)){if(A.isGroup)se=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(q);else if(A.isLightProbeGrid)L.pushLightProbeGrid(A);else if(A.isLight)L.pushLight(A),A.castShadow&&L.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||xt.intersectsSprite(A)){te&&on.setFromMatrixPosition(A.matrixWorld).applyMatrix4(un);const ke=pe.update(A),Ue=A.material;Ue.visible&&O.push(A,ke,Ue,se,on.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||xt.intersectsObject(A))){const ke=pe.update(A),Ue=A.material;if(te&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),on.copy(A.boundingSphere.center)):(ke.boundingSphere===null&&ke.computeBoundingSphere(),on.copy(ke.boundingSphere.center)),on.applyMatrix4(A.matrixWorld).applyMatrix4(un)),Array.isArray(Ue)){const Ye=ke.groups;for(let Xe=0,tt=Ye.length;Xe<tt;Xe++){const lt=Ye[Xe],Qe=Ue[lt.materialIndex];Qe&&Qe.visible&&O.push(A,ke,Qe,se,on.z,lt)}}else Ue.visible&&O.push(A,ke,Ue,se,on.z,null)}}const Fe=A.children;for(let ke=0,Ue=Fe.length;ke<Ue;ke++)Re(Fe[ke],q,se,te)}function qe(A,q,se,te){const{opaque:ne,transmissive:Fe,transparent:ke}=A;L.setupLightsView(se),gt===!0&&$e.setGlobalState(X.clippingPlanes,se),te&&E.viewport(P.copy(te)),ne.length>0&&Rt(ne,q,se),Fe.length>0&&Rt(Fe,q,se),ke.length>0&&Rt(ke,q,se),E.buffers.depth.setTest(!0),E.buffers.depth.setMask(!0),E.buffers.color.setMask(!0),E.setPolygonOffset(!1)}function rt(A,q,se,te){if((se.isScene===!0?se.overrideMaterial:null)!==null)return;if(L.state.transmissionRenderTarget[te.id]===void 0){const Qe=St.has("EXT_color_buffer_half_float")||St.has("EXT_color_buffer_float");L.state.transmissionRenderTarget[te.id]=new Ta(1,1,{generateMipmaps:!0,type:Qe?ns:Ki,minFilter:zs,samples:Math.max(4,U.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Dt.workingColorSpace})}const Fe=L.state.transmissionRenderTarget[te.id],ke=te.viewport||P;Fe.setSize(ke.z*X.transmissionResolutionScale,ke.w*X.transmissionResolutionScale);const Ue=X.getRenderTarget(),Ye=X.getActiveCubeFace(),Xe=X.getActiveMipmapLevel();X.setRenderTarget(Fe),X.getClearColor(Te),Ce=X.getClearAlpha(),Ce<1&&X.setClearColor(16777215,.5),X.clear(),Ut&&nt.render(se);const tt=X.toneMapping;X.toneMapping=ba;const lt=te.viewport;if(te.viewport!==void 0&&(te.viewport=void 0),L.setupLightsView(te),gt===!0&&$e.setGlobalState(X.clippingPlanes,te),Rt(A,se,te),he.updateMultisampleRenderTarget(Fe),he.updateRenderTargetMipmap(Fe),St.has("WEBGL_multisampled_render_to_texture")===!1){let Qe=!1;for(let Ct=0,Gt=q.length;Ct<Gt;Ct++){const bt=q[Ct],{object:Vt,geometry:kt,material:Ge,group:qn}=bt;if(Ge.side===Ma&&Vt.layers.test(te.layers)){const ct=Ge.side;Ge.side=Ai,Ge.needsUpdate=!0,It(Vt,se,te,kt,Ge,qn),Ge.side=ct,Ge.needsUpdate=!0,Qe=!0}}Qe===!0&&(he.updateMultisampleRenderTarget(Fe),he.updateRenderTargetMipmap(Fe))}X.setRenderTarget(Ue,Ye,Xe),X.setClearColor(Te,Ce),lt!==void 0&&(te.viewport=lt),X.toneMapping=tt}function Rt(A,q,se){const te=q.isScene===!0?q.overrideMaterial:null;for(let ne=0,Fe=A.length;ne<Fe;ne++){const ke=A[ne],{object:Ue,geometry:Ye,group:Xe}=ke;let tt=ke.material;tt.allowOverride===!0&&te!==null&&(tt=te),Ue.layers.test(se.layers)&&It(Ue,q,se,Ye,tt,Xe)}}function It(A,q,se,te,ne,Fe){A.onBeforeRender(X,q,se,te,ne,Fe),A.modelViewMatrix.multiplyMatrices(se.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),ne.onBeforeRender(X,q,se,te,A,Fe),ne.transparent===!0&&ne.side===Ma&&ne.forceSinglePass===!1?(ne.side=Ai,ne.needsUpdate=!0,X.renderBufferDirect(se,q,te,ne,A,Fe),ne.side=ts,ne.needsUpdate=!0,X.renderBufferDirect(se,q,te,ne,A,Fe),ne.side=Ma):X.renderBufferDirect(se,q,te,ne,A,Fe),A.onAfterRender(X,q,se,te,ne,Fe)}function dn(A,q,se){q.isScene!==!0&&(q=vn);const te=ae.get(A),ne=L.state.lights,Fe=L.state.shadowsArray,ke=ne.state.version,Ue=we.getParameters(A,ne.state,Fe,q,se,L.state.lightProbeGridArray),Ye=we.getProgramCacheKey(Ue);let Xe=te.programs;te.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?q.environment:null,te.fog=q.fog;const tt=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;te.envMap=Ae.get(A.envMap||te.environment,tt),te.envMapRotation=te.environment!==null&&A.envMap===null?q.environmentRotation:A.envMapRotation,Xe===void 0&&(A.addEventListener("dispose",ni),Xe=new Map,te.programs=Xe);let lt=Xe.get(Ye);if(lt!==void 0){if(te.currentProgram===lt&&te.lightsStateVersion===ke)return cn(A,Ue),lt}else Ue.uniforms=we.getUniforms(A),j!==null&&A.isNodeMaterial&&j.build(A,se,Ue),A.onBeforeCompile(Ue,X),lt=we.acquireProgram(Ue,Ye),Xe.set(Ye,lt),te.uniforms=Ue.uniforms;const Qe=te.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Qe.clippingPlanes=$e.uniform),cn(A,Ue),te.needsLights=gi(A),te.lightsStateVersion=ke,te.needsLights&&(Qe.ambientLightColor.value=ne.state.ambient,Qe.lightProbe.value=ne.state.probe,Qe.directionalLights.value=ne.state.directional,Qe.directionalLightShadows.value=ne.state.directionalShadow,Qe.spotLights.value=ne.state.spot,Qe.spotLightShadows.value=ne.state.spotShadow,Qe.rectAreaLights.value=ne.state.rectArea,Qe.ltc_1.value=ne.state.rectAreaLTC1,Qe.ltc_2.value=ne.state.rectAreaLTC2,Qe.pointLights.value=ne.state.point,Qe.pointLightShadows.value=ne.state.pointShadow,Qe.hemisphereLights.value=ne.state.hemi,Qe.directionalShadowMatrix.value=ne.state.directionalShadowMatrix,Qe.spotLightMatrix.value=ne.state.spotLightMatrix,Qe.spotLightMap.value=ne.state.spotLightMap,Qe.pointShadowMatrix.value=ne.state.pointShadowMatrix),te.lightProbeGrid=L.state.lightProbeGridArray.length>0,te.currentProgram=lt,te.uniformsList=null,lt}function qt(A){if(A.uniformsList===null){const q=A.currentProgram.getUniforms();A.uniformsList=vu.seqWithValue(q.seq,A.uniforms)}return A.uniformsList}function cn(A,q){const se=ae.get(A);se.outputColorSpace=q.outputColorSpace,se.batching=q.batching,se.batchingColor=q.batchingColor,se.instancing=q.instancing,se.instancingColor=q.instancingColor,se.instancingMorph=q.instancingMorph,se.skinning=q.skinning,se.morphTargets=q.morphTargets,se.morphNormals=q.morphNormals,se.morphColors=q.morphColors,se.morphTargetsCount=q.morphTargetsCount,se.numClippingPlanes=q.numClippingPlanes,se.numIntersection=q.numClipIntersection,se.vertexAlphas=q.vertexAlphas,se.vertexTangents=q.vertexTangents,se.toneMapping=q.toneMapping}function Ln(A,q){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;R.setFromMatrixPosition(q.matrixWorld);for(let se=0,te=A.length;se<te;se++){const ne=A[se];if(ne.texture!==null&&ne.boundingBox.containsPoint(R))return ne}return null}function $t(A,q,se,te,ne){q.isScene!==!0&&(q=vn),he.resetTextureUnits();const Fe=q.fog,ke=te.isMeshStandardMaterial||te.isMeshLambertMaterial||te.isMeshPhongMaterial?q.environment:null,Ue=$===null?X.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:Dt.workingColorSpace,Ye=te.isMeshStandardMaterial||te.isMeshLambertMaterial&&!te.envMap||te.isMeshPhongMaterial&&!te.envMap,Xe=Ae.get(te.envMap||ke,Ye),tt=te.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,lt=!!se.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),Qe=!!se.morphAttributes.position,Ct=!!se.morphAttributes.normal,Gt=!!se.morphAttributes.color;let bt=ba;te.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(bt=X.toneMapping);const Vt=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,kt=Vt!==void 0?Vt.length:0,Ge=ae.get(te),qn=L.state.lights;if(gt===!0&&(ht===!0||A!==xe)){const Lt=A===xe&&te.id===me;$e.setState(te,A,Lt)}let ct=!1;te.version===Ge.__version?(Ge.needsLights&&Ge.lightsStateVersion!==qn.state.version||Ge.outputColorSpace!==Ue||ne.isBatchedMesh&&Ge.batching===!1||!ne.isBatchedMesh&&Ge.batching===!0||ne.isBatchedMesh&&Ge.batchingColor===!0&&ne.colorTexture===null||ne.isBatchedMesh&&Ge.batchingColor===!1&&ne.colorTexture!==null||ne.isInstancedMesh&&Ge.instancing===!1||!ne.isInstancedMesh&&Ge.instancing===!0||ne.isSkinnedMesh&&Ge.skinning===!1||!ne.isSkinnedMesh&&Ge.skinning===!0||ne.isInstancedMesh&&Ge.instancingColor===!0&&ne.instanceColor===null||ne.isInstancedMesh&&Ge.instancingColor===!1&&ne.instanceColor!==null||ne.isInstancedMesh&&Ge.instancingMorph===!0&&ne.morphTexture===null||ne.isInstancedMesh&&Ge.instancingMorph===!1&&ne.morphTexture!==null||Ge.envMap!==Xe||te.fog===!0&&Ge.fog!==Fe||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==$e.numPlanes||Ge.numIntersection!==$e.numIntersection)||Ge.vertexAlphas!==tt||Ge.vertexTangents!==lt||Ge.morphTargets!==Qe||Ge.morphNormals!==Ct||Ge.morphColors!==Gt||Ge.toneMapping!==bt||Ge.morphTargetsCount!==kt||!!Ge.lightProbeGrid!=L.state.lightProbeGridArray.length>0)&&(ct=!0):(ct=!0,Ge.__version=te.version);let Rn=Ge.currentProgram;ct===!0&&(Rn=dn(te,q,ne),j&&te.isNodeMaterial&&j.onUpdateProgram(te,Rn,Ge));let ci=!1,jn=!1,ii=!1;const Xt=Rn.getUniforms(),sn=Ge.uniforms;if(E.useProgram(Rn.program)&&(ci=!0,jn=!0,ii=!0),te.id!==me&&(me=te.id,jn=!0),Ge.needsLights){const Lt=Ln(L.state.lightProbeGridArray,ne);Ge.lightProbeGrid!==Lt&&(Ge.lightProbeGrid=Lt,jn=!0)}if(ci||xe!==A){E.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Xt.setValue(Z,"projectionMatrix",A.projectionMatrix),Xt.setValue(Z,"viewMatrix",A.matrixWorldInverse);const ui=Xt.map.cameraPosition;ui!==void 0&&ui.setValue(Z,fn.setFromMatrixPosition(A.matrixWorld)),U.logarithmicDepthBuffer&&Xt.setValue(Z,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&Xt.setValue(Z,"isOrthographic",A.isOrthographicCamera===!0),xe!==A&&(xe=A,jn=!0,ii=!0)}if(Ge.needsLights&&(qn.state.directionalShadowMap.length>0&&Xt.setValue(Z,"directionalShadowMap",qn.state.directionalShadowMap,he),qn.state.spotShadowMap.length>0&&Xt.setValue(Z,"spotShadowMap",qn.state.spotShadowMap,he),qn.state.pointShadowMap.length>0&&Xt.setValue(Z,"pointShadowMap",qn.state.pointShadowMap,he)),ne.isSkinnedMesh){Xt.setOptional(Z,ne,"bindMatrix"),Xt.setOptional(Z,ne,"bindMatrixInverse");const Lt=ne.skeleton;Lt&&(Lt.boneTexture===null&&Lt.computeBoneTexture(),Xt.setValue(Z,"boneTexture",Lt.boneTexture,he))}ne.isBatchedMesh&&(Xt.setOptional(Z,ne,"batchingTexture"),Xt.setValue(Z,"batchingTexture",ne._matricesTexture,he),Xt.setOptional(Z,ne,"batchingIdTexture"),Xt.setValue(Z,"batchingIdTexture",ne._indirectTexture,he),Xt.setOptional(Z,ne,"batchingColorTexture"),ne._colorsTexture!==null&&Xt.setValue(Z,"batchingColorTexture",ne._colorsTexture,he));const _i=se.morphAttributes;if((_i.position!==void 0||_i.normal!==void 0||_i.color!==void 0)&&k.update(ne,se,Rn),(jn||Ge.receiveShadow!==ne.receiveShadow)&&(Ge.receiveShadow=ne.receiveShadow,Xt.setValue(Z,"receiveShadow",ne.receiveShadow)),(te.isMeshStandardMaterial||te.isMeshLambertMaterial||te.isMeshPhongMaterial)&&te.envMap===null&&q.environment!==null&&(sn.envMapIntensity.value=q.environmentIntensity),sn.dfgLUT!==void 0&&(sn.dfgLUT.value=Y2()),jn){if(Xt.setValue(Z,"toneMappingExposure",X.toneMappingExposure),Ge.needsLights&&Yt(sn,ii),Fe&&te.fog===!0&&ze.refreshFogUniforms(sn,Fe),ze.refreshMaterialUniforms(sn,te,be,ye,L.state.transmissionRenderTarget[A.id]),Ge.needsLights&&Ge.lightProbeGrid){const Lt=Ge.lightProbeGrid;sn.probesSH.value=Lt.texture,sn.probesMin.value.copy(Lt.boundingBox.min),sn.probesMax.value.copy(Lt.boundingBox.max),sn.probesResolution.value.copy(Lt.resolution)}vu.upload(Z,qt(Ge),sn,he)}if(te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(vu.upload(Z,qt(Ge),sn,he),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&Xt.setValue(Z,"center",ne.center),Xt.setValue(Z,"modelViewMatrix",ne.modelViewMatrix),Xt.setValue(Z,"normalMatrix",ne.normalMatrix),Xt.setValue(Z,"modelMatrix",ne.matrixWorld),te.uniformsGroups!==void 0){const Lt=te.uniformsGroups;for(let ui=0,Ci=Lt.length;ui<Ci;ui++){const wa=Lt[ui];Ee.update(wa,Rn),Ee.bind(wa,Rn)}}return Rn}function Yt(A,q){A.ambientLightColor.needsUpdate=q,A.lightProbe.needsUpdate=q,A.directionalLights.needsUpdate=q,A.directionalLightShadows.needsUpdate=q,A.pointLights.needsUpdate=q,A.pointLightShadows.needsUpdate=q,A.spotLights.needsUpdate=q,A.spotLightShadows.needsUpdate=q,A.rectAreaLights.needsUpdate=q,A.hemisphereLights.needsUpdate=q}function gi(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return $},this.setRenderTargetTextures=function(A,q,se){const te=ae.get(A);te.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,te.__autoAllocateDepthBuffer===!1&&(te.__useRenderToTexture=!1),ae.get(A.texture).__webglTexture=q,ae.get(A.depthTexture).__webglTexture=te.__autoAllocateDepthBuffer?void 0:se,te.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,q){const se=ae.get(A);se.__webglFramebuffer=q,se.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(A,q=0,se=0){$=A,F=q,H=se;let te=null,ne=!1,Fe=!1;if(A){const Ue=ae.get(A);if(Ue.__useDefaultFramebuffer!==void 0){E.bindFramebuffer(Z.FRAMEBUFFER,Ue.__webglFramebuffer),P.copy(A.viewport),K.copy(A.scissor),Se=A.scissorTest,E.viewport(P),E.scissor(K),E.setScissorTest(Se),me=-1;return}else if(Ue.__webglFramebuffer===void 0)he.setupRenderTarget(A);else if(Ue.__hasExternalTextures)he.rebindTextures(A,ae.get(A.texture).__webglTexture,ae.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const tt=A.depthTexture;if(Ue.__boundDepthTexture!==tt){if(tt!==null&&ae.has(tt)&&(A.width!==tt.image.width||A.height!==tt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");he.setupDepthRenderbuffer(A)}}const Ye=A.texture;(Ye.isData3DTexture||Ye.isDataArrayTexture||Ye.isCompressedArrayTexture)&&(Fe=!0);const Xe=ae.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Xe[q])?te=Xe[q][se]:te=Xe[q],ne=!0):A.samples>0&&he.useMultisampledRTT(A)===!1?te=ae.get(A).__webglMultisampledFramebuffer:Array.isArray(Xe)?te=Xe[se]:te=Xe,P.copy(A.viewport),K.copy(A.scissor),Se=A.scissorTest}else P.copy(et).multiplyScalar(be).floor(),K.copy(Jt).multiplyScalar(be).floor(),Se=dt;if(se!==0&&(te=ce),E.bindFramebuffer(Z.FRAMEBUFFER,te)&&E.drawBuffers(A,te),E.viewport(P),E.scissor(K),E.setScissorTest(Se),ne){const Ue=ae.get(A.texture);Z.framebufferTexture2D(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_CUBE_MAP_POSITIVE_X+q,Ue.__webglTexture,se)}else if(Fe){const Ue=q;for(let Ye=0;Ye<A.textures.length;Ye++){const Xe=ae.get(A.textures[Ye]);Z.framebufferTextureLayer(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0+Ye,Xe.__webglTexture,se,Ue)}}else if(A!==null&&se!==0){const Ue=ae.get(A.texture);Z.framebufferTexture2D(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_2D,Ue.__webglTexture,se)}me=-1},this.readRenderTargetPixels=function(A,q,se,te,ne,Fe,ke,Ue=0){if(!(A&&A.isWebGLRenderTarget)){Ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ye=ae.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&ke!==void 0&&(Ye=Ye[ke]),Ye){E.bindFramebuffer(Z.FRAMEBUFFER,Ye);try{const Xe=A.textures[Ue],tt=Xe.format,lt=Xe.type;if(A.textures.length>1&&Z.readBuffer(Z.COLOR_ATTACHMENT0+Ue),!U.textureFormatReadable(tt)){Ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!U.textureTypeReadable(lt)){Ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=A.width-te&&se>=0&&se<=A.height-ne&&Z.readPixels(q,se,te,ne,Le.convert(tt),Le.convert(lt),Fe)}finally{const Xe=$!==null?ae.get($).__webglFramebuffer:null;E.bindFramebuffer(Z.FRAMEBUFFER,Xe)}}},this.readRenderTargetPixelsAsync=async function(A,q,se,te,ne,Fe,ke,Ue=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ye=ae.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&ke!==void 0&&(Ye=Ye[ke]),Ye)if(q>=0&&q<=A.width-te&&se>=0&&se<=A.height-ne){E.bindFramebuffer(Z.FRAMEBUFFER,Ye);const Xe=A.textures[Ue],tt=Xe.format,lt=Xe.type;if(A.textures.length>1&&Z.readBuffer(Z.COLOR_ATTACHMENT0+Ue),!U.textureFormatReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!U.textureTypeReadable(lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Qe=Z.createBuffer();Z.bindBuffer(Z.PIXEL_PACK_BUFFER,Qe),Z.bufferData(Z.PIXEL_PACK_BUFFER,Fe.byteLength,Z.STREAM_READ),Z.readPixels(q,se,te,ne,Le.convert(tt),Le.convert(lt),0);const Ct=$!==null?ae.get($).__webglFramebuffer:null;E.bindFramebuffer(Z.FRAMEBUFFER,Ct);const Gt=Z.fenceSync(Z.SYNC_GPU_COMMANDS_COMPLETE,0);return Z.flush(),await Jy(Z,Gt,4),Z.bindBuffer(Z.PIXEL_PACK_BUFFER,Qe),Z.getBufferSubData(Z.PIXEL_PACK_BUFFER,0,Fe),Z.deleteBuffer(Qe),Z.deleteSync(Gt),Fe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,q=null,se=0){const te=Math.pow(2,-se),ne=Math.floor(A.image.width*te),Fe=Math.floor(A.image.height*te),ke=q!==null?q.x:0,Ue=q!==null?q.y:0;he.setTexture2D(A,0),Z.copyTexSubImage2D(Z.TEXTURE_2D,se,0,0,ke,Ue,ne,Fe),E.unbindTexture()},this.copyTextureToTexture=function(A,q,se=null,te=null,ne=0,Fe=0){let ke,Ue,Ye,Xe,tt,lt,Qe,Ct,Gt;const bt=A.isCompressedTexture?A.mipmaps[Fe]:A.image;if(se!==null)ke=se.max.x-se.min.x,Ue=se.max.y-se.min.y,Ye=se.isBox3?se.max.z-se.min.z:1,Xe=se.min.x,tt=se.min.y,lt=se.isBox3?se.min.z:0;else{const sn=Math.pow(2,-ne);ke=Math.floor(bt.width*sn),Ue=Math.floor(bt.height*sn),A.isDataArrayTexture?Ye=bt.depth:A.isData3DTexture?Ye=Math.floor(bt.depth*sn):Ye=1,Xe=0,tt=0,lt=0}te!==null?(Qe=te.x,Ct=te.y,Gt=te.z):(Qe=0,Ct=0,Gt=0);const Vt=Le.convert(q.format),kt=Le.convert(q.type);let Ge;q.isData3DTexture?(he.setTexture3D(q,0),Ge=Z.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(he.setTexture2DArray(q,0),Ge=Z.TEXTURE_2D_ARRAY):(he.setTexture2D(q,0),Ge=Z.TEXTURE_2D),E.activeTexture(Z.TEXTURE0),E.pixelStorei(Z.UNPACK_FLIP_Y_WEBGL,q.flipY),E.pixelStorei(Z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),E.pixelStorei(Z.UNPACK_ALIGNMENT,q.unpackAlignment);const qn=E.getParameter(Z.UNPACK_ROW_LENGTH),ct=E.getParameter(Z.UNPACK_IMAGE_HEIGHT),Rn=E.getParameter(Z.UNPACK_SKIP_PIXELS),ci=E.getParameter(Z.UNPACK_SKIP_ROWS),jn=E.getParameter(Z.UNPACK_SKIP_IMAGES);E.pixelStorei(Z.UNPACK_ROW_LENGTH,bt.width),E.pixelStorei(Z.UNPACK_IMAGE_HEIGHT,bt.height),E.pixelStorei(Z.UNPACK_SKIP_PIXELS,Xe),E.pixelStorei(Z.UNPACK_SKIP_ROWS,tt),E.pixelStorei(Z.UNPACK_SKIP_IMAGES,lt);const ii=A.isDataArrayTexture||A.isData3DTexture,Xt=q.isDataArrayTexture||q.isData3DTexture;if(A.isDepthTexture){const sn=ae.get(A),_i=ae.get(q),Lt=ae.get(sn.__renderTarget),ui=ae.get(_i.__renderTarget);E.bindFramebuffer(Z.READ_FRAMEBUFFER,Lt.__webglFramebuffer),E.bindFramebuffer(Z.DRAW_FRAMEBUFFER,ui.__webglFramebuffer);for(let Ci=0;Ci<Ye;Ci++)ii&&(Z.framebufferTextureLayer(Z.READ_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,ae.get(A).__webglTexture,ne,lt+Ci),Z.framebufferTextureLayer(Z.DRAW_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,ae.get(q).__webglTexture,Fe,Gt+Ci)),Z.blitFramebuffer(Xe,tt,ke,Ue,Qe,Ct,ke,Ue,Z.DEPTH_BUFFER_BIT,Z.NEAREST);E.bindFramebuffer(Z.READ_FRAMEBUFFER,null),E.bindFramebuffer(Z.DRAW_FRAMEBUFFER,null)}else if(ne!==0||A.isRenderTargetTexture||ae.has(A)){const sn=ae.get(A),_i=ae.get(q);E.bindFramebuffer(Z.READ_FRAMEBUFFER,ue),E.bindFramebuffer(Z.DRAW_FRAMEBUFFER,Y);for(let Lt=0;Lt<Ye;Lt++)ii?Z.framebufferTextureLayer(Z.READ_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,sn.__webglTexture,ne,lt+Lt):Z.framebufferTexture2D(Z.READ_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_2D,sn.__webglTexture,ne),Xt?Z.framebufferTextureLayer(Z.DRAW_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,_i.__webglTexture,Fe,Gt+Lt):Z.framebufferTexture2D(Z.DRAW_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_2D,_i.__webglTexture,Fe),ne!==0?Z.blitFramebuffer(Xe,tt,ke,Ue,Qe,Ct,ke,Ue,Z.COLOR_BUFFER_BIT,Z.NEAREST):Xt?Z.copyTexSubImage3D(Ge,Fe,Qe,Ct,Gt+Lt,Xe,tt,ke,Ue):Z.copyTexSubImage2D(Ge,Fe,Qe,Ct,Xe,tt,ke,Ue);E.bindFramebuffer(Z.READ_FRAMEBUFFER,null),E.bindFramebuffer(Z.DRAW_FRAMEBUFFER,null)}else Xt?A.isDataTexture||A.isData3DTexture?Z.texSubImage3D(Ge,Fe,Qe,Ct,Gt,ke,Ue,Ye,Vt,kt,bt.data):q.isCompressedArrayTexture?Z.compressedTexSubImage3D(Ge,Fe,Qe,Ct,Gt,ke,Ue,Ye,Vt,bt.data):Z.texSubImage3D(Ge,Fe,Qe,Ct,Gt,ke,Ue,Ye,Vt,kt,bt):A.isDataTexture?Z.texSubImage2D(Z.TEXTURE_2D,Fe,Qe,Ct,ke,Ue,Vt,kt,bt.data):A.isCompressedTexture?Z.compressedTexSubImage2D(Z.TEXTURE_2D,Fe,Qe,Ct,bt.width,bt.height,Vt,bt.data):Z.texSubImage2D(Z.TEXTURE_2D,Fe,Qe,Ct,ke,Ue,Vt,kt,bt);E.pixelStorei(Z.UNPACK_ROW_LENGTH,qn),E.pixelStorei(Z.UNPACK_IMAGE_HEIGHT,ct),E.pixelStorei(Z.UNPACK_SKIP_PIXELS,Rn),E.pixelStorei(Z.UNPACK_SKIP_ROWS,ci),E.pixelStorei(Z.UNPACK_SKIP_IMAGES,jn),Fe===0&&q.generateMipmaps&&Z.generateMipmap(Ge),E.unbindTexture()},this.initRenderTarget=function(A){ae.get(A).__webglFramebuffer===void 0&&he.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?he.setTextureCube(A,0):A.isData3DTexture?he.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?he.setTexture2DArray(A,0):he.setTexture2D(A,0),E.unbindTexture()},this.resetState=function(){F=0,H=0,$=null,E.reset(),Ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ea}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Dt._getDrawingBufferColorSpace(e),i.unpackColorSpace=Dt._getUnpackColorSpace()}}const j2="/assets/Reckk-RegularItalic-DLM8ilig.ttf",Z2="/assets/Reckk-MediumItalic-D_uyfX4p.otf",K2="/assets/CXLMediumItalic-DYSp-DoC.otf",Q2=4,J2=5,Ja={fleet:"MAEX",name:"SharpeShark",version:"v1",role:"Executor",didShort:"0xf8a2…6035"};function zx(a){return["discover","copy","supervise","isolate"][a]??"discover"}function $2(a){return zx(a)}function eR(a,e,i){const r=e.split(/\s+/),o=[];let c="";for(const u of r){const h=c?`${c} ${u}`:u;a.measureText(h).width<=i?c=h:(c&&o.push(c),c=u)}return c&&o.push(c),o}function tR(a,e){const r=e<520?300:400,o=Math.round(r*a),c=Math.round(o*J2/Q2);return{W:o,H:c}}function Hx(a,e,i,r,o,c){const u=Math.min(c,r/2,o/2);a.beginPath(),a.moveTo(e+u,i),a.arcTo(e+r,i,e+r,i+o,u),a.arcTo(e+r,i+o,e,i+o,u),a.arcTo(e,i+o,e,i,u),a.arcTo(e,i,e+r,i,u),a.closePath()}function _n(a,e,i,r,o,c,u){Hx(a,e,i,r,o,c),a.fillStyle=u,a.fill()}function An(a,e,i,r,o,c,u,h){Hx(a,e,i,r,o,c),a.strokeStyle=u,a.lineWidth=h,a.stroke()}function Nu(a,e,i,r,o,c){_n(a,e,i,r,o,c,"#0c0e12"),An(a,e,i,r,o,c,"rgba(255,255,255,0.12)",Math.max(1,c*.12))}function Uu(a,e,i,r,o,c,u){const h=11*u;a.fillStyle="#c8f5a8",a.font=`700 ${h}px "DM Mono", ui-monospace, monospace`,a.textAlign="left",a.fillText(c,e+o,i+o+h);const m=22*u,d=e+r-o-m,g=i+o-2*u;return An(a,d,g,m,m,4*u,"rgba(255,255,255,0.14)",1),a.strokeStyle="rgba(255,255,255,0.55)",a.lineWidth=Math.max(1,1.25*u),a.beginPath(),a.moveTo(d+6*u,g+6*u),a.lineTo(d+m-6*u,g+m-6*u),a.moveTo(d+m-6*u,g+6*u),a.lineTo(d+6*u,g+m-6*u),a.stroke(),i+o+h+10*u}function Gx(a,e,i,r,o,c,u,h){const m=28*h,d=(r-o*2)/2,g=10*h;a.font=`700 ${g}px "DM Mono", ui-monospace, monospace`;for(let _=0;_<2;_++){const v=e+o+_*d,x=_===u;a.fillStyle=x?"rgba(255,255,255,0.92)":"rgba(255,255,255,0.38)",a.textAlign="center",a.fillText(c[_],v+d/2,i+14*h),x&&(a.fillStyle="#c8f5a8",a.fillRect(v+4*h,i+m-2*h,d-8*h,2*h))}return a.textAlign="left",a.strokeStyle="rgba(255,255,255,0.08)",a.lineWidth=1,a.beginPath(),a.moveTo(e+o,i+m),a.lineTo(e+r-o,i+m),a.stroke(),i+m+10*h}function nR(a,e,i,r,o,c,u,h,m){const d=10*m,g=22*m;a.fillStyle="rgba(255,255,255,0.92)",a.font=`700 ${d}px "DM Mono", ui-monospace, monospace`,a.textAlign="left",a.fillText(c,e+o,i+14*m);const _=`${String(u).padStart(2,"0")} / ${String(h).padStart(2,"0")}`;a.fillStyle="rgba(255,255,255,0.38)",a.font=`700 ${8*m}px "DM Mono", ui-monospace, monospace`,a.textAlign="right",a.fillText(_,e+r-o,i+14*m),a.textAlign="left",a.strokeStyle="rgba(255,255,255,0.08)",a.lineWidth=1,a.beginPath(),a.moveTo(e+o,i+g),a.lineTo(e+r-o,i+g),a.stroke(),a.fillStyle="#c8f5a8";const v=Math.min(72*m,r*.28);return a.fillRect(e+o,i+g-2*m,v,2*m),i+g+10*m}function iR(a,e,i,r,o,c,u){const h=9*u;a.fillStyle="rgba(255,255,255,0.38)",a.font=`700 ${h}px "DM Mono", ui-monospace, monospace`,a.textAlign="left",a.fillText(o,e,i+h);const m=i+h+6*u,d=34*u;_n(a,e,m,r,d,6*u,"rgba(255,255,255,0.04)"),An(a,e,m,r,d,6*u,"rgba(255,255,255,0.12)",1),a.fillStyle=c.startsWith("Select")||c==="0x..."?"rgba(255,255,255,0.35)":"rgba(255,255,255,0.88)",a.font=`500 ${11*u}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText(c,e+10*u,m+d*.62),a.strokeStyle="rgba(255,255,255,0.4)",a.lineWidth=Math.max(1,1.2*u);const g=e+r-14*u,_=m+d/2;return a.beginPath(),a.moveTo(g-4*u,_-2*u),a.lineTo(g,_+3*u),a.lineTo(g+4*u,_-2*u),a.stroke(),h+6*u+d}function aR(a,e,i,r,o){const c=9*o;a.fillStyle="rgba(255,255,255,0.38)",a.font=`700 ${c}px "DM Mono", ui-monospace, monospace`,a.textAlign="left",a.fillText("AMOUNT",e,i+c),a.textAlign="right",a.fillStyle="rgba(255,255,255,0.45)",a.fillText("AVAILABLE 5,000.00",e+r,i+c),a.textAlign="left";const u=i+c+6*o,h=44*o;_n(a,e,u,r,h,8*o,"#050508"),An(a,e,u,r,h,8*o,"rgba(255,255,255,0.1)",1),a.fillStyle="rgba(255,255,255,0.92)",a.font=`700 ${22*o}px "DM Mono", ui-monospace, monospace`,a.fillText("0.00",e+12*o,u+h*.68);const m=u+h+10*o;return a.strokeStyle="rgba(255,255,255,0.12)",a.lineWidth=Math.max(2,2*o),a.beginPath(),a.moveTo(e,m),a.lineTo(e+r,m),a.stroke(),_n(a,e,m-5*o,14*o,10*o,5*o,"rgba(255,255,255,0.85)"),a.fillStyle="rgba(255,255,255,0.35)",a.font=`500 ${8*o}px "DM Mono", ui-monospace, monospace`,a.fillText("0.01",e,m+14*o),a.textAlign="right",a.fillText("5,000.00",e+r,m+14*o),a.textAlign="left",c+6*o+h+10*o+16*o}function sR(a,e,i,r,o,c){a.strokeStyle="rgba(255,255,255,0.08)",a.lineWidth=1,a.beginPath(),a.moveTo(e,i),a.lineTo(e+r,i),a.stroke();const u=i+10*o,h=36*o,m=72*o;An(a,e,u,m,h,6*o,"rgba(255,255,255,0.14)",1),a.fillStyle="rgba(255,255,255,0.55)",a.font=`700 ${9*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText("CANCEL",e+m/2,u+h*.62);const d=e+m+8*o,g=r-m-8*o;return _n(a,d,u,g,h,6*o,"rgba(255,255,255,0.06)"),An(a,d,u,g,h,6*o,"rgba(255,255,255,0.1)",1),a.fillStyle="#c8f5a8",a.fillRect(d,u+4*o,3*o,h-8*o),a.fillStyle="rgba(255,255,255,0.55)",a.font=`700 ${8.5*o}px "DM Mono", ui-monospace, monospace`,a.fillText(c,d+g/2+2*o,u+h*.62),a.textAlign="left",10*o+h}function Pp(a,e,i,r,o){const c=44*o;_n(a,e,i,r,c,8*o,"rgba(200,245,168,0.08)"),An(a,e,i,r,c,8*o,"rgba(200,245,168,0.22)",1);const u=28*o;return _n(a,e+8*o,i+(c-u)/2,u,u,4*o,"rgba(200,245,168,0.14)"),a.fillStyle="#c8f5a8",a.font=`700 ${10*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText("SS",e+8*o+u/2,i+c*.58),a.textAlign="left",a.fillStyle="rgba(255,255,255,0.92)",a.font=`700 ${11*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText(Ja.name,e+8*o+u+8*o,i+16*o),a.fillStyle="rgba(255,255,255,0.42)",a.font=`500 ${9*o}px "DM Mono", ui-monospace, monospace`,a.fillText(`${Ja.role} · ${Ja.didShort}`,e+8*o+u+8*o,i+32*o),c}function rR(a,e,i,r,o){const c=Math.min(r*190/316,r*.58),u=12*o,h=8*o,m=a.createLinearGradient(e,i+c,e+r,i);m.addColorStop(0,"#050508"),m.addColorStop(1,"rgba(200,245,168,0.14)"),_n(a,e,i,r,c,h,m),An(a,e,i,r,c,h,"rgba(255,255,255,0.14)",Math.max(1,1.25*o)),An(a,e+2.5*o,i+2.5*o,r-5*o,c-5*o,h-1.5*o,"rgba(200,245,168,0.35)",Math.max(1,o)),a.fillStyle="rgba(255,255,255,0.92)",a.font=`700 ${11*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText(Ja.fleet,e+u,i+u+10*o),a.fillStyle="#c8f5a8",a.beginPath(),a.arc(e+r-u-7*o,i+u+5*o,6*o,0,Math.PI*2),a.fill(),a.fillStyle="#0a0a0c",a.font=`700 ${8*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText("✓",e+r-u-7*o,i+u+8*o),a.textAlign="left";const d=i+c-u-2*o;a.fillStyle="rgba(255,255,255,0.92)",a.font=`700 ${10*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText(Ja.name.toUpperCase(),e+u,d-24*o),a.fillStyle="rgba(255,255,255,0.45)",a.font=`500 ${9*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText(`${Ja.role} · ${Ja.version}`,e+u,d-10*o),a.fillStyle="#c8f5a8",a.font=`700 ${10*o}px "DM Mono", ui-monospace, monospace`,a.fillText(Ja.didShort,e+u,d);const g=28*o;return _n(a,e+r-u-g,i+c-u-g,g,g,4*o,"rgba(200,245,168,0.14)"),An(a,e+r-u-g,i+c-u-g,g,g,4*o,"rgba(200,245,168,0.28)",1),a.fillStyle="#c8f5a8",a.font=`700 ${11*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText("SS",e+r-u-g/2,i+c-u-g*.35),a.textAlign="left",c}function oR(a,e,i,r,o){const c=Math.min(r*190/316,r*.58),u=10*o,h=8*o,m=a.createLinearGradient(e,i,e+r,i+c);m.addColorStop(0,"#0a0c10"),m.addColorStop(.55,"#12161c"),m.addColorStop(1,"rgba(200,245,168,0.18)"),_n(a,e,i,r,c,h,m),An(a,e,i,r,c,h,"rgba(255,255,255,0.14)",Math.max(1,1.25*o)),a.fillStyle="rgba(255,255,255,0.92)",a.font=`700 ${10*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText("Morpheum.",e+u,i+u+10*o),a.strokeStyle="rgba(255,255,255,0.45)",a.lineWidth=Math.max(1,o);for(let d=0;d<3;d++){const g=5*o+d*3.5*o,_=4*o+d*2.5*o;a.beginPath(),a.ellipse(e+r-u-4*o,i+u+8*o,g,_,-.4,-.2,1.2),a.stroke()}return a.fillStyle="rgba(255,255,255,0.88)",a.font=`700 ${9*o}px "DM Mono", ui-monospace, monospace`,a.fillText("5678  ····  ····  7890",e+u,i+c*.52),a.fillStyle="rgba(255,255,255,0.92)",a.font=`700 ${8*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText(Ja.name.toUpperCase(),e+u,i+c-u-2*o),a.textAlign="right",a.fillStyle="rgba(255,255,255,0.55)",a.font=`700 ${8*o}px "DM Mono", ui-monospace, monospace`,a.fillText("12/28",e+r-u,i+c-u-2*o),a.textAlign="left",c}function lR(a,e,i,r,o,c=25){const u=9*o;a.fillStyle="rgba(255,255,255,0.38)",a.font=`700 ${u}px "DM Mono", ui-monospace, monospace`,a.textAlign="left",a.fillText("MIRROR SIZE",e,i+u),a.textAlign="right",a.fillStyle="#c8f5a8",a.fillText(`${c}%`,e+r,i+u),a.textAlign="left";const h=i+u+12*o,m=Math.max(4,5*o);_n(a,e,h,r,m,m/2,"rgba(255,255,255,0.1)");const d=Math.max(m,r*c/100);_n(a,e,h,d,m,m/2,"rgba(200,245,168,0.75)");const g=7*o;return a.fillStyle="#f4f6f0",a.beginPath(),a.arc(e+d,h+m/2,g,0,Math.PI*2),a.fill(),a.strokeStyle="rgba(200,245,168,0.55)",a.lineWidth=Math.max(1,o),a.stroke(),a.fillStyle="rgba(255,255,255,0.35)",a.font=`500 ${7.5*o}px "DM Mono", ui-monospace, monospace`,a.fillText("5%",e,h+m+14*o),a.textAlign="right",a.fillText("100%",e+r,h+m+14*o),a.textAlign="left",u+12*o+m+16*o}function cR(a,e,i,r,o){const c=9*o;a.fillStyle="rgba(255,255,255,0.38)",a.font=`700 ${c}px "DM Mono", ui-monospace, monospace`,a.fillText("AGENTIC PROTECTION",e,i+c);const u=5*o,h=(r-u*2)/3,m=52*o,d=i+c+8*o;return[{label:"Manual",tone:"rgba(255,255,255,0.12)",active:!1},{label:"Guarded",tone:"rgba(234,179,8,0.55)",active:!0},{label:"High",tone:"rgba(255,71,87,0.35)",active:!1}].forEach((_,v)=>{const x=e+v*(h+u);_n(a,x,d,h,m,6*o,"rgba(255,255,255,0.04)"),An(a,x,d,h,m,6*o,_.active?_.tone:"rgba(255,255,255,0.1)",_.active?Math.max(1.5,1.5*o):1),_.active&&(a.fillStyle="rgba(234,179,8,0.12)",a.fillRect(x+1,d+1,3*o,m-2)),a.fillStyle=_.active?"rgba(255,255,255,0.92)":"rgba(255,255,255,0.55)",a.font=`700 ${9*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.textAlign="center",a.fillText(_.label,x+h/2,d+18*o),a.fillStyle="rgba(255,255,255,0.38)",a.font=`400 ${7*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`;const b=_.label==="Guarded"?"safe default":_.label==="Manual"?"signals":"silent";a.fillText(b,x+h/2,d+34*o)}),a.textAlign="left",c+8*o+m}function uR(a,e,i,r,o,c="SLIDE TO START COPY"){const u=40*o;_n(a,e,i,r,u,8*o,"rgba(255,255,255,0.05)"),An(a,e,i,r,u,8*o,"rgba(255,255,255,0.12)",1);const h=.22,m=4*o,d=u-m*2,g=r-m*2-d;return _n(a,e+m,i+m,d+g*h,d,d/2,"rgba(200,245,168,0.18)"),_n(a,e+m,i+m,d,d,d/2,"rgba(200,245,168,0.85)"),a.fillStyle="#0a0a0c",a.font=`700 ${12*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText("›",e+m+d/2,i+u*.62),a.fillStyle="rgba(255,255,255,0.5)",a.font=`700 ${8*o}px "DM Mono", ui-monospace, monospace`,a.fillText(c,e+r/2+d*.15,i+u*.62),a.textAlign="left",u}const Tl=2,vo={sharpe:"2.41",roi:"+38.2%",riskScore:"72",reputation:"84",receipts:[{action:"Close BTC long",pnl:"+103.09"},{action:"Open ETH long",pnl:null},{action:"Close SOL short",pnl:"+41.20"}]};function Uv(a,e,i,r,o,c){const u=6*c,h=o.length,m=(r-u*(h-1))/h,d=36*c;return o.forEach(([g,_],v)=>{const x=e+v*(m+u);_n(a,x,i,m,d,6*c,"rgba(255,255,255,0.04)"),An(a,x,i,m,d,6*c,"rgba(255,255,255,0.1)",1),a.fillStyle="rgba(255,255,255,0.4)",a.font=`700 ${7*c}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText(g,x+m/2,i+12*c),a.fillStyle="#c8f5a8",a.font=`700 ${11*c}px "DM Mono", ui-monospace, monospace`,a.fillText(_,x+m/2,i+26*c)}),a.textAlign="left",d}function fR(a,e,i,r,o){const c=[{label:"Verified",brand:!0},{label:"Receipt"},{label:"Risk",value:vo.riskScore},{label:"Rep",value:vo.reputation}],u=4*o,h=22*o,m=5*o;let d=e;a.font=`700 ${6.5*o}px "DM Mono", ui-monospace, monospace`;for(const g of c){const _=a.measureText(g.label.toUpperCase()).width,v=g.value?a.measureText(g.value).width+3*o:0,x=m*2+6*o+_+v;if(d+x>e+r)break;const b=g.brand?"rgba(200,245,168,0.12)":"rgba(255,255,255,0.04)",w=g.brand?"rgba(200,245,168,0.35)":"rgba(255,255,255,0.12)";_n(a,d,i,x,h,4*o,b),An(a,d,i,x,h,4*o,w,1);const y=2*o;a.beginPath(),a.arc(d+m+y,i+h/2,y,0,Math.PI*2),a.fillStyle=g.brand?"#c8f5a8":"rgba(255,255,255,0.35)",a.fill();let M=d+m+y*2+4*o;a.fillStyle=g.brand?"#c8f5a8":"rgba(255,255,255,0.55)",a.textAlign="left",a.fillText(g.label.toUpperCase(),M,i+h*.68),M+=_+3*o,g.value&&(a.fillStyle="rgba(255,255,255,0.92)",a.fillText(g.value,M,i+h*.68)),d+=x+u}return a.textAlign="left",h}function dR(a,e,i,r,o){const c=vo.receipts,u=22*o,h=14*o+c.length*u;return _n(a,e,i,r,h,6*o,"rgba(255,255,255,0.03)"),An(a,e,i,r,h,6*o,"rgba(255,255,255,0.08)",1),a.fillStyle="rgba(255,255,255,0.4)",a.font=`700 ${6.5*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="left",a.fillText("RECEIPTS",e+8*o,i+10*o),c.forEach((m,d)=>{const g=i+14*o+d*u;a.fillStyle="rgba(255,255,255,0.72)",a.font=`500 ${8*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="left",a.fillText(m.action,e+8*o,g+u*.62),a.textAlign="right",m.pnl?(a.fillStyle="#c8f5a8",a.font=`700 ${8*o}px "DM Mono", ui-monospace, monospace`,a.fillText(m.pnl,e+r-8*o,g+u*.62)):(a.fillStyle="rgba(255,255,255,0.35)",a.fillText("—",e+r-8*o,g+u*.62))}),a.textAlign="left",h}function hR(a,e,i,r,o){const c=Math.min(r*150/316,r*.48),u=12*o,h=8*o,m=a.createLinearGradient(e,i+c,e+r,i);m.addColorStop(0,"#050508"),m.addColorStop(1,"rgba(200,245,168,0.14)"),_n(a,e,i,r,c,h,m),An(a,e,i,r,c,h,"rgba(255,255,255,0.14)",Math.max(1,1.25*o)),An(a,e+2.5*o,i+2.5*o,r-5*o,c-5*o,h-1.5*o,"rgba(200,245,168,0.35)",Math.max(1,o)),a.fillStyle="rgba(255,255,255,0.92)",a.font=`700 ${11*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText("MAEX",e+u,i+u+10*o);const d=40*o,g=16*o,_=e+r-u-d,v=i+u-1*o;return _n(a,_,v,d,g,8*o,"rgba(200,245,168,0.14)"),An(a,_,v,d,g,8*o,"rgba(200,245,168,0.28)",1),a.fillStyle="#c8f5a8",a.font=`700 ${8*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText("LIVE",_+d/2,v+11*o),a.textAlign="left",a.fillStyle="rgba(255,255,255,0.92)",a.font=`700 ${14*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText("MAEX Core",e+u,i+u+36*o),a.fillStyle="rgba(255,255,255,0.45)",a.font=`500 ${9*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText("Curated agent basket · 4 agents",e+u,i+u+52*o),a.fillStyle="#c8f5a8",a.font=`700 ${18*o}px "DM Mono", ui-monospace, monospace`,a.fillText("+12.8%",e+u,i+c-u-4*o),a.fillStyle="rgba(255,255,255,0.4)",a.font=`700 ${8*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="right",a.fillText("30D RETURN",e+r-u,i+c-u-8*o),a.textAlign="left",c}function pR(a,e,i,r,o){const c=[["SharpeShark","42%","+38%"],["SortinoSloth","33%","+21%"],["FundingFox","25%","−4%"]],u=26*o,h=c.length*u;return _n(a,e,i,r,h,6*o,"rgba(255,255,255,0.03)"),An(a,e,i,r,h,6*o,"rgba(255,255,255,0.08)",1),c.forEach(([m,d,g],_)=>{const v=i+_*u;_>0&&(a.strokeStyle="rgba(255,255,255,0.06)",a.lineWidth=1,a.beginPath(),a.moveTo(e+8*o,v),a.lineTo(e+r-8*o,v),a.stroke()),a.fillStyle="rgba(255,255,255,0.85)",a.font=`600 ${9*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.textAlign="left",a.fillText(m,e+10*o,v+u*.62),a.fillStyle="rgba(255,255,255,0.4)",a.font=`700 ${8*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText(d,e+r*.58,v+u*.62);const x=!g.startsWith("−")&&!g.startsWith("-");a.fillStyle=x?"#c8f5a8":"rgba(255,120,120,0.85)",a.textAlign="right",a.fillText(g,e+r-10*o,v+u*.62)}),a.textAlign="left",h}function mR(a,e,i,r,o,c=0){const u=r/300,h=12*u,m=10*u,d=(c%Tl+Tl)%Tl,g=[{header:"AGENT PROOF",segment:"AGENTS"},{header:"INDEX PROOF",segment:"INDICES"}][d];Nu(a,e,i,r,o,m);let _=Uu(a,e,i,r,h,g.header,u);_=nR(a,e,_,r,h,g.segment,d+1,Tl,u);const v=i+o-h;if(d===0){_+=Pp(a,e+h,_,r-h*2,u)+8*u,_+22*u<=v&&(_+=fR(a,e+h,_,r-h*2,u)+8*u);const b=[["SHARPE",vo.sharpe],["ROI",vo.roi],["RISK",vo.riskScore]];_+36*u<=v&&(_+=Uv(a,e+h,_,r-h*2,b,u)+8*u),_+70*u<=v&&dR(a,e+h,_,r-h*2,u);return}_+=hR(a,e+h,_,r-h*2,u)+8*u,_+78*u<=v&&(_+=pR(a,e+h,_,r-h*2,u)+8*u);const x=[["RETURN","+12.8%"],["RISK","58"],["AGENTS","4"]];_+36*u<=v&&Uv(a,e+h,_,r-h*2,x,u)}function gR(a,e,i,r,o,c=0){const u=r/300,h=12*u,m=10*u;Nu(a,e,i,r,o,m);let d=Uu(a,e,i,r,h,"COPY TRADE",u);d=Gx(a,e,d,r,h,["MIRROR","BUCKET"],0,u);const g=40*u,_=i+o-h-g,v=_-10*u;if(c%2===0){const b=6*u,w=r-h*2;let y=(w-b)/2,M=Math.min(y*190/316,y*.58);const I=Math.max(64*u,v-d-28*u);M>I&&(y=y*(I/M),M=I);const z=u*(y/((w-b)/2)),R=e+h+(w-(y*2+b))/2;oR(a,R,d,y,z),rR(a,R+y+b,d,y,z),d+=M+10*u;const O=[["SPREAD","0.02%"],["FUNDING","8h"],["SIZE","25%"]],L=5*u,B=(r-h*2-L*2)/3,T=32*u;d+T<=v&&(O.forEach(([N,X],V)=>{const j=e+h+V*(B+L);_n(a,j,d,B,T,6*u,"rgba(255,255,255,0.04)"),An(a,j,d,B,T,6*u,"rgba(255,255,255,0.1)",1),a.fillStyle="rgba(255,255,255,0.4)",a.font=`700 ${6.5*u}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText(N,j+B/2,d+11*u),a.fillStyle="#c8f5a8",a.font=`700 ${10*u}px "DM Mono", ui-monospace, monospace`,a.fillText(X,j+B/2,d+24*u)}),a.textAlign="left")}else d+=Pp(a,e+h,d,r-h*2,u)+10*u,d+36*u<v&&(d+=lR(a,e+h,d,r-h*2,u,25)+10*u),d+50*u<v&&cR(a,e+h,d,r-h*2,u);uR(a,e+h,_,r-h*2,u)}const _R=2,vR=[{agent:"SharpeShark",timeLabel:"07-08, 15:42",status:"want-to",statusLabel:"Want to",action:"Open ETH long · 1.2 ETH",showActions:!0},{agent:"NightOwl",timeLabel:"07-08, 15:31",status:"rejected",statusLabel:"Rejected",action:"Open BTC short · 0.04 BTC"},{agent:"SharpeShark",timeLabel:"07-08, 15:25",status:"short",statusLabel:"Close Long",action:"BTCUSDT · 0.04 BTC",pnl:{text:"+103.09",tone:"long"}},{agent:"FluxRunner",timeLabel:"07-08, 14:10",status:"long",statusLabel:"Open Long",action:"ETHUSDT · 0.8 ETH"},{agent:"NightOwl",timeLabel:"07-07, 09:42",status:"short",statusLabel:"Open Short",action:"SOLUSDT · 12 SOL"}];function xR(a){switch(a){case"want-to":return{fg:"rgba(200,245,168,0.95)",bg:"rgba(184,245,168,0.12)"};case"rejected":return{fg:"#ff4757",bg:"rgba(255,71,87,0.12)"};case"long":return{fg:"#00ff88",bg:"rgba(0,255,136,0.12)"};case"short":return{fg:"#ff4757",bg:"rgba(255,71,87,0.12)"}}}function SR(a,e,i,r,o){const c=r/300,u=12*c,h=10*c;Nu(a,e,i,r,o,h);let m=Uu(a,e,i,r,u,"ACTIVITY LOG",c);const d=i+o-u,g=58*c,_=10*c,v=6*c,x=e+u+g+v+_+v,b=e+r-u-x,w=e+u+g+v+_/2,y=vR,M=4*c;y.forEach((I,z)=>{if(m>=d-8*c)return;const R=z===0,O=z===y.length-1,L=xR(I.status),B=8*c,T=6*c,N=7*c,X=8*c,V=I.showActions?22*c:0,j=I.showActions?5*c:0,ue=Math.max(B+2*c+T,N+4*c+X)+j+V+M;if(m+Math.min(ue,28*c)>d)return;a.textAlign="right",a.fillStyle="rgba(255,255,255,0.88)",a.font=`500 ${B}px "DM Mono", ui-monospace, monospace`,a.fillText(I.agent,e+u+g,m+B),a.fillStyle="rgba(255,255,255,0.38)",a.font=`500 ${T}px "DM Mono", ui-monospace, monospace`,a.fillText(I.timeLabel,e+u+g,m+B+2*c+T),a.textAlign="left",O||(a.strokeStyle="rgba(255,255,255,0.14)",a.lineWidth=Math.max(1,c),a.beginPath(),a.moveTo(w,m+6*c),a.lineTo(w,m+ue),a.stroke());const Y=2.4*c;a.beginPath(),a.arc(w,m+5*c,Y,0,Math.PI*2),a.fillStyle=R?"#c8f5a8":"rgba(255,255,255,0.32)",a.fill(),R&&(a.beginPath(),a.arc(w,m+5*c,Y+2.2*c,0,Math.PI*2),a.fillStyle="rgba(200,245,168,0.16)",a.fill());const F=4*c,H=2*c;a.font=`700 ${N}px "DM Mono", ui-monospace, monospace`;const $=I.statusLabel.toUpperCase(),me=a.measureText($).width+F*2,xe=N+H*2;_n(a,x,m,me,xe,3*c,L.bg),a.fillStyle=L.fg,a.fillText($,x+F,m+N+H*.35),a.fillStyle="rgba(255,255,255,0.55)",a.font=`400 ${X}px "DM Mono", ui-monospace, monospace`;const P=m+xe+3*c+X;let K=I.action;if(I.pnl){const Se=`${I.action} · `;a.fillText(Se,x,P);const Te=a.measureText(Se).width;a.fillStyle=I.pnl.tone==="long"?"#00ff88":"#ff4757",a.font=`700 ${X}px "DM Mono", ui-monospace, monospace`,a.fillText(I.pnl.text,x+Te,P)}else{for(;K.length>8&&a.measureText(K).width>b;)K=`${K.slice(0,-2)}…`;a.fillText(K,x,P)}if(I.showActions&&m+xe+3*c+X+j+V<=d){const Se=m+xe+3*c+X+j,Te=(b-5*c)/2;An(a,x,Se,Te,V,3*c,"rgba(255,255,255,0.18)",1),a.fillStyle="rgba(255,255,255,0.72)",a.font=`700 ${7*c}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText("REJECT",x+Te/2,Se+V*.68),_n(a,x+Te+5*c,Se,Te,V,3*c,"rgba(184,245,168,0.88)"),a.fillStyle="rgba(8,14,10,0.92)",a.fillText("APPROVE",x+Te+5*c+Te/2,Se+V*.68),a.textAlign="left"}m+=ue})}function MR(a,e,i,r,o){const c=r/300,u=12*c,h=10*c;Nu(a,e,i,r,o,h);let m=Uu(a,e,i,r,u,"FUND BUCKET",c);m=Gx(a,e,m,r,u,["FUND BUCKET","CREATE BUCKET"],0,c),m+=Pp(a,e+u,m,r-u*2,c)+8*c,m+=iR(a,e+u,m,r-u*2,"FROM","Select source bucket",c)+8*c;const d=10*c+36*c;i+o-u-d-m-8*c>70*c&&(m+=aR(a,e+u,m,r-u*2,c)+6*c),sR(a,e+u,i+o-u-d,r-u*2,c,"COMPLETE REQUIRED FIELDS")}function Vx(a,e,i,r,o,c,u=0){switch(e){case"discover":mR(a,i,r,o,c,u);break;case"copy":gR(a,i,r,o,c,u);break;case"supervise":SR(a,i,r,o,c);break;case"isolate":MR(a,i,r,o,c);break}}function yR(a,e,i,r,o=0){a.clearRect(0,0,i,r),Vx(a,e,0,0,i,r,o)}function ER(a,e,i,r,o){const{W:c,H:u}=tR(i,r),h=document.createElement("canvas");h.width=c,h.height=u;const m=h.getContext("2d"),d=m.createLinearGradient(0,0,0,u);d.addColorStop(0,"#080a0e"),d.addColorStop(.55,"#05070d"),d.addColorStop(1,"#030406"),m.fillStyle=d,m.fillRect(0,0,c,u);const g=Math.round(22*i),_=Math.round(.05*u),v=Math.round(.045*u),x=c-g*2;let b=_;const w=Math.min(34*i,c*.095);m.fillStyle="rgba(255,255,255,0.94)",m.font=`normal 400 ${w}px ${o}`,m.textBaseline="alphabetic",m.fillText(a.verb,g,b+w*.85),b+=Math.round(.09*u);const y=Math.min(13*i,c*.036);m.fillStyle="rgba(255,255,255,0.55)",m.font=`400 ${y}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`;const M=eR(m,a.description,x);m.fillText(M[0]??a.description,g,b+y),b+=Math.round(.07*u),b+=Math.round(.03*u);const I=g,z=b,R=x,O=Math.max(80*i,u-b-v);Vx(m,$2(e),I,z,R,O);const L=new Ax(h);return L.colorSpace=mi,L.minFilter=zs,L.generateMipmaps=!0,L}const vp=["M41.9213 3.43614C43.0393 3.43614 43.8716 3.77154 44.4182 4.44235C44.9647 5.138 45.1262 6.1939 44.9026 7.61005L41.884 26.8026C41.7846 27.4982 41.8467 28.0075 42.0703 28.3305C42.2691 28.6784 42.6542 28.8771 43.2256 28.9268L43.8591 28.9641L43.8219 29.2622L36.7784 30.492L36.4803 30.492L40.1324 7.46098C40.3064 6.26843 40.0206 5.67216 39.2753 5.67216C38.9523 5.67216 38.6045 5.75912 38.2318 5.93303C37.8343 6.10694 37.3995 6.44235 36.9275 6.93924L36.7411 6.79017C38.0828 4.55415 39.8095 3.43614 41.9213 3.43614Z","M29.9958 3.43614C31.1138 3.43614 31.9461 3.77154 32.4927 4.44235C33.0393 5.138 33.2007 6.1939 32.9771 7.61005L29.9585 26.8026C29.8591 27.4982 29.9212 28.0075 30.1449 28.3305C30.3436 28.6784 30.7287 28.8771 31.3001 28.9268L31.9337 28.9641L31.8964 29.2622L24.8529 30.492L24.5548 30.492L28.207 7.46098C28.3809 6.26843 28.0952 5.67216 27.3498 5.67216C27.0268 5.67216 26.679 5.75912 26.3063 5.93303C25.9088 6.10694 25.474 6.44235 25.002 6.93924L24.8157 6.79017C26.1573 4.55415 27.884 3.43614 29.9958 3.43614Z","M18.0703 3.43614C19.1883 3.43614 20.0206 3.77154 20.5672 4.44235C21.1138 5.138 21.2753 6.1939 21.0517 7.61005L18.033 26.8026C17.9337 27.4982 17.9958 28.0075 18.2194 28.3305C18.4181 28.6784 18.8032 28.8771 19.3747 28.9268L20.0082 28.9641L19.9709 29.2622L12.9275 30.492L12.6293 30.492L16.2815 7.46098C16.4554 6.26843 16.1697 5.67216 15.4243 5.67216C15.1014 5.67216 14.7535 5.75912 14.3809 5.93303C13.9834 6.10694 13.5486 6.44235 13.0765 6.93924L12.8902 6.79017C14.2318 4.55415 15.9585 3.43614 18.0703 3.43614Z","M45.5631 10.8482C46.0378 11.9189 46.0912 12.9315 45.7231 13.8861C45.3095 14.8231 44.3453 15.4956 42.8305 15.9035L16.576 22.853C15.2325 23.2226 14.7771 24.0651 15.2096 25.3806L15.7698 26.7714L13.8491 27.2839L9.924 22.1284L9.25377 20.6168L40.8242 12.2711C41.6674 12.048 42.2133 11.7494 42.4619 11.3754C42.6651 10.9838 42.669 10.5676 42.4735 10.1267C42.3199 9.78031 42.1016 9.5003 41.8185 9.2867C41.4899 9.05556 41.0511 8.87329 40.5021 8.7399L41.5734 7.5866C42.563 7.86379 43.3915 8.28774 44.0591 8.85845C44.7127 9.39767 45.214 10.0609 45.5631 10.8482Z"],bR="0 0 58 35",TR=58,AR=35;function RR({fill:a="#C8F5A8",width:e=58,height:i=35,padding:r=10,"aria-hidden":o=!0,...c}){const u=[-r,-r,TR+r*2,AR+r*2].join(" ");return D.jsx("svg",{width:e,height:i,viewBox:u,fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":o,...c,children:vp.map(h=>D.jsx("path",{d:h,fill:a},h.slice(0,24)))})}const CR={sm:{width:30,height:18},md:{width:30,height:18},lg:{width:44,height:27},hero:{width:76,height:46}};function Ip({size:a="md",showWordmark:e=!0,className:i="",brandName:r="Morpheum"}){const o=CR[a];return D.jsxs("span",{className:`brand-mark brand-mark--${a} ${i}`.trim(),children:[D.jsx(RR,{className:"brand-mark__icon",width:o.width,height:o.height,padding:0,fill:"var(--terminal-brand)"}),e?D.jsx("span",{className:"brand-mark__word",children:r}):null]})}const Ov="!@#$%^&*()_+{}[]|;:,.<>?/0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",wR=50,xu=500,yh=100,Pv=168;function DR(){return typeof window>"u"?!1:window.matchMedia("(prefers-reduced-motion: reduce)").matches}function LR(){return Ov[Math.floor(Math.random()*Ov.length)]??"?"}function Iv(a){return Array.from(a).map(e=>{const i=Math.random()*(xu-yh),r=yh+Math.random()*(xu-i-yh),o=Math.min(xu,i+r);return{original:e,start:i,end:o}})}function NR(a){return Math.min(1,Math.max(0,a))}function UR({text:a,className:e,scrollerRef:i}){const r=Ve.useRef(null),o=Ve.useRef(Iv(a)),c=DR();return Ve.useEffect(()=>{o.current=Iv(a)},[a]),Ve.useEffect(()=>{if(c)return;const u=r.current;if(!u)return;let h=0,m=!0,d=-1;const g=()=>{const v=i.current;if(!v)return;const x=Math.max(0,-v.getBoundingClientRect().top),b=Math.min(xu,Math.max(0,x-wR));if(b===d&&d>=0)return;d=b;const w=o.current,y=u.querySelectorAll(".scroll-dissolve__glyph");let M=w.length>0;for(let I=0;I<w.length;I++){const z=w[I],R=y[I];if(!R)continue;const O=Math.max(.001,z.end-z.start),L=NR((b-z.start)/O);if(L<1&&(M=!1),L<=0){R.textContent=z.original===" "?" ":z.original,R.style.transform="translateY(0)",R.style.opacity="1",R.style.visibility="visible";continue}if(L>=1){R.textContent=z.original===" "?" ":z.original,R.style.transform=`translateY(${-Pv}px)`,R.style.opacity="0",R.style.visibility="hidden";continue}R.textContent=LR(),R.style.transform=`translateY(${-L*Pv}px)`,R.style.opacity=String(1-L),R.style.visibility="visible"}u.style.visibility=M?"hidden":"visible",u.style.display=M?"none":"block"},_=()=>{m&&(g(),h=requestAnimationFrame(_))};return h=requestAnimationFrame(_),()=>{m=!1,cancelAnimationFrame(h)}},[c,i,a]),c?D.jsx("p",{className:e,"aria-label":a,children:a}):D.jsx("p",{ref:r,className:["scroll-dissolve",e].filter(Boolean).join(" "),"aria-label":a,children:Array.from(a).map((u,h)=>D.jsx("span",{className:"scroll-dissolve__glyph","aria-hidden":!0,children:u===" "?" ":u},`${h}-${u}`))})}const OR="Enter the agentic economy",ho=Rh.verbs.map((a,e)=>{const i=[{top:"#c8f5a8",mid:"#0a1410",bot:"#1a3d2e"},{top:"#9ee089",mid:"#060e18",bot:"#1e3a52"},{top:"#f0e6a0",mid:"#0c1008",bot:"#2a3820"},{top:"#7fd9a8",mid:"#080810",bot:"#243048"}];return{verb:a.verb,description:a.description,mood:i[e]??i[0]}}),mn=ho.length,Qa=2.95,wl=6.9,Fp=32,kx=4,Xx=5,xp=2.05,PR=1,IR=Qa*.55,Wx=.28,Yx=.35,FR=Wx+Yx,Eh=.85,BR=35,Fv=BR/60*1e3,zR=.1;function qx(a){return a<520?{mode:"mobile",canvasW:1280,canvasH:320,fontPx:112,planeBaseW:4.55,frustumFill:.9}:a<900?{mode:"tablet",canvasW:1600,canvasH:360,fontPx:132,planeBaseW:5.25,frustumFill:.94}:{mode:"desktop",canvasW:1920,canvasH:420,fontPx:152,planeBaseW:6.1,frustumFill:.96}}const HR=1.35,GR=.72,VR=.62,kR=.2,XR=14,WR=.42,YR=128,qR=12,jR=.002,ZR=.0011,Bv=.12,KR=.88,QR=4,JR=32,$R=40,e3=50,t3=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,n3=`
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
`,i3=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,a3=`
uniform sampler2D uMap;
uniform float uOpacity;
uniform float uWipe;
uniform float uWipeEdge;
varying vec2 vUv;
void main() {
  vec4 c = texture2D(uMap, vUv);
  // uWipe=0 → fully visible; uWipe=1 → fully cleared from the bottom up.
  float visible = smoothstep(uWipe - uWipeEdge, uWipe, vUv.y);
  float alpha = c.a * uOpacity * visible;
  if (alpha < 0.004) discard;
  gl_FragColor = vec4(c.rgb, alpha);
}
`,s3='"Reckk Heading", Georgia, "Times New Roman", serif',jx="Morpheum Wordmark",Ul=`"${jx}"`,r3=[{t:0,c:"#e8ffe0"},{t:.45,c:"#c8f5a8"},{t:1,c:"#f0e6a0"}];async function o3(){if(typeof document>"u"||!document.fonts)return!1;try{const a=new FontFace(jx,`url(${K2})`,{weight:"normal",style:"normal"});document.fonts.add(await a.load()),await document.fonts.load(`normal 152px ${Ul}`);const e=document.fonts.check(`normal 152px ${Ul}`);return e||console.error("[FlowIntro] Morpheum Wordmark failed to bind — title will not use Reckk fallback"),e}catch(a){return console.error("[FlowIntro] Morpheum Wordmark load failed",a),!1}}async function l3(){if(!(typeof document>"u"||!document.fonts))try{await o3();const a=new FontFace("Reckk Title",`url(${Z2})`,{weight:"normal",style:"normal"});document.fonts.add(await a.load());const e=new FontFace("Reckk Heading",`url(${j2})`,{weight:"normal",style:"normal"});document.fonts.add(await e.load()),await document.fonts.ready,await document.fonts.load(`normal 152px ${Ul}`),await document.fonts.load('normal 64px "Reckk Heading"'),await document.fonts.load('normal 124px "Reckk Title"')}catch{}}const or="flow-intro-hide-chrome",c3=72,u3=120,bh=80;function f3(a){return a<=c3}const d3=280;function Al(a){const e=document.documentElement,i=e.style.scrollBehavior;e.style.scrollBehavior="auto",window.scrollTo(0,Math.max(0,a)),e.style.scrollBehavior=i}function Th(){const a=document.getElementById("hero");if(!a)return;const e=a.getBoundingClientRect().top+window.scrollY;Al(e)}function fr(a){const e=Qt.clamp(a,0,1);return e*e*e*(e*(e*6-15)+10)}function po(a){const e=Math.max(1,a),i=Math.max(1,mn*e*PR),r=Math.max(1,i/Math.max(1,mn-1));return{cardPx:i,titlePx:r,totalPx:i+r}}const h3=800,p3=1100,m3=6,g3=36,_3=50,v3=.5,x3=.5,S3=1024,M3=.75;function Zx(a){return a>=S3}function y3(a){return Zx(a)?h3:p3}function Ah(a){return Math.max(2,Math.max(1,a)*.004)}function E3(a){const e=Qt.clamp(a,0,1);return e*e*e}function b3(a,e){const{cardPx:i,titlePx:r}=po(e),o=Math.max(1,mn-1),c=Qt.clamp(Math.round(a),0,mn-1);return r+c/o*i}function T3(a,e,i){return a.offsetTop+b3(e,i)}function zv(a){const e=mn-1;return Qt.clamp(Math.round(a),0,e)}function A3(a,e,i,r,o,c,u){if(o)return!1;const h=e*v3,m=i/Math.max(1,mn-1),d=r+m*x3;return!(a<h||a>d||c<u*.5)}function Bp(a,e){const i=a/Math.max(1,e),r=Fp*Math.PI/180,o=2*wl*Math.tan(r/2),c=o*i,u=xp*kx/Xx,h=.992,m=h*o/xp,d=h*c/u;return Qt.clamp(Math.min(m,d),.52,2.35)}function R3(a,e){const i=Bp(a,e);return Zx(a)?i*M3:i}function Hv(a,e,i){const r=qx(a),o=Bp(a,e),c=a/Math.max(1,e),u=Fp*Math.PI/180,m=2*wl*Math.tan(u/2)*c,d=r.frustumFill*m/Math.max(1e-6,o),g=Math.min(r.planeBaseW,d);return{w:g,h:g*i}}function C3(a,e){const i=a/Math.max(1,mn-1),r=Math.min(Math.max(1,e*.38),Math.max(1,i*.34));return i<=r+.001?0:1-r/i}function w3(a,e){const i=Math.min(Math.max(1,e*.38),Math.max(1,a*.34));return a<=i+.001?0:1-i/a}function D3(a,e){const i=Qt.clamp(e,0,.999);if(a<i)return{titleOp:1,lastCardOp:0};const r=Math.max(1e-6,1-i),o=fr(Qt.clamp((a-i)/r,0,1));return{titleOp:1-o,lastCardOp:o}}function L3(a,e,i,r=0){const o=mn-1;if(a<=0)return{opacity:e===0?1:0};if(a>=o-1e-5)return{opacity:e===o?1:0};const c=Math.floor(a);if(c>=o)return{opacity:e===o?1:0};if(e!==c&&e!==c+1)return{opacity:0};const u=a-c,h=Qt.clamp(i,0,.999);if(u<h)return{opacity:e===c?1:0};const m=fr(Qt.clamp((u-h)/Math.max(1e-6,1-h),0,1));return e===c?{opacity:r>=.999?0:1}:{opacity:Math.max(m,r)}}function N3(a){return new ea({uniforms:{uMap:{value:a},uOpacity:{value:1},uWipe:{value:0},uWipeEdge:{value:zR}},vertexShader:i3,fragmentShader:a3,transparent:!0,depthWrite:!0,depthTest:!0,side:ts})}function U3(a,e){return a>1.5&&a<e-.5}function O3(a){return Qt.clamp(540/Math.max(a,340),.2,.55)}function P3(a,e,i){const r=[],o=XR;for(let c=0;c<o;c++){const u=Qt.clamp(a-c/Math.max(1,o-1)*WR,-.08,1.08),h=Math.sin(u*Math.PI*2*HR)*VR*i,m=Math.sin(u*Math.PI*2*GR)*kR,d=Bv+c/Math.max(1,o-1)*(KR-Bv),g=e-d;r.push(new ee(h,m,g))}return r}function I3(a,e,i,r){const o=a.length;if(o<2)return new $i;const c=[],u=[],h=[],m=[],d=new ee,g=new ee,_=new ee,v=new ee(0,1,0),x=e+1;for(let w=0;w<o;w++){w===0?d.subVectors(a[1],a[0]).normalize():w===o-1?d.subVectors(a[o-1],a[o-2]).normalize():d.subVectors(a[w+1],a[w-1]).normalize(),g.copy(v).cross(d),g.lengthSq()<1e-8&&g.set(1,0,0).cross(d),g.normalize(),_.crossVectors(d,g).normalize();const y=o===1?0:w/(o-1),M=i+(r-i)*Math.pow(y,1.5);for(let I=0;I<=e;I++){const z=I/e*Math.PI*2,R=Math.cos(z),O=Math.sin(z),L=a[w];c.push(L.x+(R*g.x+O*_.x)*M,L.y+(R*g.y+O*_.y)*M,L.z+(R*g.z+O*_.z)*M),u.push(R*g.x+O*_.x,R*g.y+O*_.y,R*g.z+O*_.z),h.push(o===1?0:w/(o-1),I/e)}}for(let w=0;w<o-1;w++)for(let y=0;y<e;y++){const M=w*x+y,I=M+1,z=M+x,R=z+1;m.push(M,z,I,I,z,R)}const b=new $i;return b.setAttribute("position",new Qi(c,3)),b.setAttribute("normal",new Qi(u,3)),b.setAttribute("uv",new Qi(h,2)),b.setIndex(m),b.computeBoundingSphere(),b}function Gv(a,e,i,r){const o={verb:a.verb,description:a.description};return ER(o,e,i,r,s3)}function Vv(a,e){const i=qx(e),r=Math.min(a*2.35,3.25),o=Math.round(i.canvasW*r),c=Math.round(i.canvasH*r),u=document.createElement("canvas");u.width=o,u.height=c;const h=u.getContext("2d");h.clearRect(0,0,o,c);const m="Morpheum";let d=i.fontPx;h.textAlign="left",h.textBaseline="alphabetic";const g=()=>{h.font=`normal ${d*r}px ${Ul}`};g();const _=O=>{h.font=`normal ${O*r}px ${Ul}`;const L=h.measureText(m),B=Math.abs(L.actualBoundingBoxLeft??0),T=Math.abs(L.actualBoundingBoxRight??L.width),N=Math.abs(L.actualBoundingBoxAscent??O*r*.8),X=Math.abs(L.actualBoundingBoxDescent??O*r*.25);return{left:B,right:T,width:B+T,ascent:N,descent:X}},v=Math.max(1.25,1.85*r)*2,x=64*r+v,b=40*r+v,w=O=>{const L=_(O);return L.width+x*2<=o&&L.ascent+L.descent+b*2<=c};for(;!w(d)&&d>64;)d-=2;for(;w(d+2)&&d<i.fontPx+24;)d+=2;g();const y=_(d),M=(o-y.width)/2+y.left,I=c/2+(y.ascent-y.descent)/2,z=h.createLinearGradient(M-y.left,I-y.ascent,M+y.right,I+y.descent);r3.forEach(O=>z.addColorStop(O.t,O.c)),h.lineJoin="round",h.miterLimit=2,h.lineWidth=Math.max(1.25,1.85*r),h.strokeStyle="rgba(8,12,10,0.22)",h.strokeText(m,M,I),h.fillStyle=z,h.fillText(m,M,I);const R=new Ax(u);return R.colorSpace=mi,R.minFilter=zn,R.magFilter=zn,R.generateMipmaps=!1,R}function kv(a,e){a.generateMipmaps=!1,a.minFilter=zn,a.magFilter=zn,a.wrapS=ua,a.wrapT=ua;const i=e.capabilities.getMaxAnisotropy();a.anisotropy=Math.min(16,i),a.needsUpdate=!0}function F3(){const a=Ve.useRef(null),e=Ve.useRef(null),i=Ve.useRef(null),r=Ve.useRef(null),o=Ve.useRef(!1),c=Ve.useRef(null),u=Ve.useCallback(()=>{var m;if(o.current)return;o.current=!0,(m=c.current)==null||m.call(c);const h=e.current;h==null||h.classList.add("flow-intro__sticky--exit"),window.setTimeout(()=>{document.body.classList.remove(or),Th(),requestAnimationFrame(()=>{Th(),requestAnimationFrame(()=>{Th(),window.setTimeout(()=>{o.current=!1},100)})})},d3)},[]);return Ve.useLayoutEffect(()=>{const h=window.matchMedia("(prefers-reduced-motion: reduce)").matches,m=window.location.hash.replace(/^#/,"");return h||m!==""&&m!=="flow"&&m!=="hero"||document.body.classList.add(or),()=>{document.body.classList.remove(or)}},[]),Ve.useEffect(()=>{const h=m=>{if(m.key!=="Escape")return;const d=document.getElementById("hero");d&&d.getBoundingClientRect().top>8&&(m.preventDefault(),u())};return window.addEventListener("keydown",h),()=>window.removeEventListener("keydown",h)},[u]),Ve.useEffect(()=>{const h=window.location.hash.replace(/^#/,"");h&&h!=="flow"&&h!=="hero"&&requestAnimationFrame(()=>{var m;(m=document.getElementById(h))==null||m.scrollIntoView({block:"start"})})},[]),Ve.useEffect(()=>{const h=i.current,m=a.current;if(!h||!m)return;const d=h,g=m;let _=!1;if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){document.body.classList.remove(or);const b=r.current;b&&(b.style.height="0px");return}let x;return(async()=>{if(await l3(),_)return;const b=Math.min(window.devicePixelRatio,2),w=Math.max(320,d.clientWidth||window.innerWidth),y=Math.max(1,d.clientHeight||window.innerHeight),M=[],I=[],z=[],R=new Float64Array(mn).fill(-1);ho.forEach((Re,qe)=>{const rt=mn-1-qe,Rt=ho[rt],It=Gv(Rt,rt,b,w);z.push(It);const dn=N3(It);M.push(dn);const qt=xp,cn=qt*kx/Xx,Ln=new Ji(new hr(cn,qt),dn);Ln.position.set(0,0,-qe*Qa),Ln.renderOrder=qe,I.push(Ln)});const O=Vv(b,w),L=new Up({map:O,transparent:!0,opacity:0,depthWrite:!1,depthTest:!0,side:Ma}),B=O.image.height/O.image.width,{w:T,h:N}=Hv(w,y,B),X=new Ji(new hr(T,N),L);X.position.set(0,0,-(mn-1)*Qa),X.renderOrder=$R;const V=new wE,j=new Zi(Fp,1,.08,120),ce=new q2({antialias:!0,alpha:!1,powerPreference:"high-performance"});ce.setPixelRatio(Math.min(window.devicePixelRatio,2)),ce.outputColorSpace=mi,ce.sortObjects=!0,d.appendChild(ce.domElement),kv(O,ce);const ue=new El;I.forEach(Re=>ue.add(Re)),ue.add(X),V.add(ue);const Y=new ea({uniforms:{uStrength:{value:0}},vertexShader:t3,fragmentShader:n3,transparent:!0,toneMapped:!1,depthTest:!1,depthWrite:!1,blending:Ch}),F=new Ji(new $i,Y);F.frustumCulled=!1,F.renderOrder=e3,F.visible=!1,V.add(F);const H=ho.map(Re=>new Nt(Re.mood.mid)),$=H[0].clone();V.background=$;const me=0,xe=-(mn-1)*Qa,P=wl,K=-.1*Qa,Se=.1*Qa;function Te(Re,qe){const rt=Re+wl;return(P-rt)/qe}let Ce=Math.max(1,d.clientHeight||window.innerHeight),ie=!1,ye=window.innerWidth,be=!1,He=!1;function at(){return Math.max(1,window.innerHeight)}function et(Re){return be?Re>u3&&(be=!1):f3(Re)&&(be=!0),be}function Jt(){const Re=r.current;if(!Re)return;const{totalPx:qe}=po(Ce),rt=Ce*FR,It=`${Math.max(Math.ceil(qe+rt+Ce*Eh+32),Math.ceil(Ce*1.08))}px`;Re.style.height!==It&&(Re.style.height=It)}function dt(){const Re=Math.max(1,Ce),{totalPx:qe}=po(Re),rt=Math.max(1,qe),Rt=me+K,It=xe+Se-IR,qt=(Rt-It)/rt,cn=Te(Rt,qt),Ln=Te(It,qt);return{ih:Re,totalPx:rt,scrollToWorldFactor:qt,minScroll:cn,maxScroll:Ln}}let{scrollToWorldFactor:xt,minScroll:gt,maxScroll:ht}=dt();const un=new Nt,fn=new Nt,on=new Nt;function vn(){var cn;const Re=Math.max(320,d.clientWidth||window.innerWidth),qe=Math.min(window.devicePixelRatio,2);z.forEach((Ln,$t)=>{Ln.dispose();const Yt=mn-1-$t,gi=Gv(ho[Yt],Yt,qe,Re);z[$t]=gi,M[$t].uniforms.uMap.value=gi}),(cn=L.map)==null||cn.dispose();const rt=Vv(qe,Re);L.map=rt,L.needsUpdate=!0,kv(rt,ce);const Rt=rt.image.height/rt.image.width,It=Math.max(1,d.clientHeight||Ce),{w:dn,h:qt}=Hv(Re,It,Rt);X.geometry.dispose(),X.geometry=new hr(dn,qt)}function Ut(){const Re=d.clientWidth,qe=d.clientHeight;if(Re<2||qe<2)return;j.aspect=Re/qe,j.updateProjectionMatrix(),ce.setSize(Re,qe,!1),vn();const rt=dt();xt=rt.scrollToWorldFactor,gt=rt.minScroll,ht=rt.maxScroll,ie||Jt()}function ln(){ie=!1,Ce=at(),ye=window.innerWidth,Ut()}Ut(),requestAnimationFrame(()=>{_||vn()});let Z=0;function Ht(){var xr,Ro;if(_)return;Z=requestAnimationFrame(Ht);const Re=at(),qe=document.getElementById("hero"),rt=qe?qe.getBoundingClientRect().top:0,Rt=qe?et(rt):!0,{totalPx:It}=po(Ce),dn=g.getBoundingClientRect(),qt=Math.max(1,g.offsetHeight-Ce),cn=Qt.clamp(-dn.top,0,qt);if(!Rt&&cn<=It){if(ie=!1,Math.abs(Re-Ce)>bh){Ce=Re,Jt();const pt=dt();xt=pt.scrollToWorldFactor,gt=pt.minScroll,ht=pt.maxScroll}}else ie=!0;const $t=Ce,{cardPx:Yt,titlePx:gi,totalPx:A}=po($t),q=Math.max(1,g.offsetHeight-$t),se=Qt.clamp(-dn.top,0,q),te=Math.min(se,A),ne=Math.max(1,A),Fe=$t*Wx,ke=$t*Yx,Ue=Fe+ke,Ye=se-A,Xe=fr(Qt.clamp(Ye/Math.max(1,Fe),0,1)),tt=fr(Qt.clamp((Ye-Fe)/Math.max(1,ke),0,1)),lt=Qt.mapLinear(Yt,0,ne,gt,ht),Qe=d.clientWidth,Ct=d.clientHeight,Gt=Math.max(1,gi),bt=te<Gt,Vt=bt?Qt.clamp(te/Gt,0,1):0,kt=Math.max(0,te-Gt),Ge=Math.max(1,Yt),ct=Qt.clamp(kt/Ge,0,1)*(mn-1),Rn=Bp(Qe,Ct),ci=R3(Qe,Ct);let jn;bt?jn=Qt.mapLinear(te,0,Gt,ht,lt):jn=Qt.mapLinear(te,Gt,ne,lt,gt),jn=Qt.clamp(jn,gt,ht);const ii=C3(Yt,$t),Xt=w3(Gt,$t),sn=D3(Vt,Xt),_i=mn-1;if(bt)on.copy(H[0]);else{const pt=Math.min(mn-2,Math.floor(ct)),yn=Math.min(pt+1,mn-1),vi=fr(ct-pt);un.copy(H[pt]),fn.copy(H[yn]),on.lerpColors(un,fn,vi)}V.background=$.copy(on);const Lt=P-jn*xt;j.position.set(0,0,Lt),j.lookAt(0,0,Lt-wl);const ui=A+Ue;let Ci=0;if(q>ui&&se>=ui){const pt=Math.max(1,q-ui);Ci=fr(Qt.clamp((se-ui)/pt,0,1))}const wa=Math.max(1,Ue+$t*Eh),ta=se<=ne?Qt.clamp(se/ne,0,1):1+Qt.clamp(Ye/wa,0,1)*.45;if(U3(se,q)){const pt=P3(ta,Lt,O3(Qe)),vi=new VE(pt,!1,"centripetal").getSpacedPoints(YR);if(vi.length>=2){const Nn=I3(vi,qR,jR,ZR),Zn=F.geometry.getAttribute("position"),ai=Nn.getAttribute("position");if(Zn&&ai&&Zn.count===ai.count&&((xr=F.geometry.getIndex())==null?void 0:xr.count)===((Ro=Nn.getIndex())==null?void 0:Ro.count)&&Zn&&ai){Zn.array.set(ai.array),Zn.needsUpdate=!0;const Da=F.geometry.getAttribute("normal"),ha=Nn.getAttribute("normal");Da&&ha&&(Da.array.set(ha.array),Da.needsUpdate=!0);const zi=F.geometry.getAttribute("uv"),Co=Nn.getAttribute("uv");zi&&Co&&(zi.array.set(Co.array),zi.needsUpdate=!0),Nn.dispose()}else F.geometry.dispose(),F.geometry=Nn;F.visible=!0,Y.uniforms.uStrength.value=.36*(1-Ci*.92)}else F.visible=!1,Y.uniforms.uStrength.value=0}else F.visible=!1,Y.uniforms.uStrength.value=0;const vr=Math.floor((mn-1)/2),da=performance.now(),os=Qt.clamp(ii,0,.999);for(let pt=0;pt<mn;pt++){if(bt||ct<=pt+1e-5||ct<pt+os){R[pt]=-1;continue}R[pt]<0&&(ct>=pt+1-1e-5?R[pt]=da-Fv:R[pt]=da)}if(I.forEach((pt,yn)=>{const vi=-yn*Qa,Nn=mn-1-yn,Zn=R[Nn];let ai=Zn<0?0:fr(Qt.clamp((da-Zn)/Fv,0,1));!bt&&Nn===mn-1&&tt>0&&(ai=Math.max(ai,tt));let{opacity:na}=L3(ct,Nn,ii,ai);bt&&yn===_i&&(na*=sn.lastCardOp,ai=0);let Da=1,ha=0;!bt&&Nn===mn-1&&na>.02&&Xe>0&&(Da=1-.28*Xe,ha=-Qa*.32*Xe),pt.position.set(0,0,vi+ha),pt.scale.setScalar(ci*Da);const zi=M[yn];zi.uniforms.uOpacity.value=na,zi.uniforms.uWipe.value=ai,zi.depthWrite=na>=.995&&ai<.02,pt.visible=na>.003&&ai<.997,pt.renderOrder=yn<=vr?QR+yn:JR+(yn-vr-1)}),X.position.set(0,0,-_i*Qa),X.scale.setScalar(Rn),L.opacity=bt?sn.titleOp:0,L.depthWrite=L.opacity>=.995,X.visible=L.opacity>.003,!o.current){Rt?He=!0:He&&se<A-$t*.25&&(He=!1),document.body.classList.toggle(or,!He);const pt=e.current;pt!=null&&pt.classList.contains("flow-intro__sticky--exit")&&!Rt&&(pt.style.transition="none",pt.classList.remove("flow-intro__sticky--exit"),pt.offsetWidth,pt.style.transition="")}if(!ie){const pt=Ue+$t*Eh+32,yn=Math.max(Math.ceil(A+pt),Math.ceil($t*1.08)),vi=r.current;if(vi){const Nn=`${yn}px`;vi.style.height!==Nn&&(vi.style.height=Nn)}}const Fl=1-Ci*.96;e.current&&(e.current.style.setProperty("--intro-ui-opacity",String(Fl)),e.current.style.setProperty("--intro-tagline-opacity","1")),ce.domElement.style.opacity=String(1-Ci),ce.render(V,j)}Ht();let St=0,U=0,E=!1,Q=!1,ae=!1,he=0,Ae=0,Ne=0,de=!1,pe=!1,we=0,ze=window.scrollY,Oe=0;function Pe(){U&&(window.clearTimeout(U),U=0)}function $e(){St&&(cancelAnimationFrame(St),St=0),E=!1}function Ke(){$e(),Pe(),Q=!1}c.current=Ke;function nt(){var A;const Re=Math.max(1,Ce),{cardPx:qe,titlePx:rt,totalPx:Rt}=po(Re),It=g.getBoundingClientRect(),dn=Math.max(1,g.offsetHeight-Re),qt=Qt.clamp(-It.top,0,dn),cn=document.getElementById("hero"),Ln=cn?et(cn.getBoundingClientRect().top):!0,$t=((A=e.current)==null?void 0:A.getBoundingClientRect().bottom)??Re,gi=Math.max(0,Math.min(qt,Rt)-rt)/Math.max(1,qe)*(mn-1);return{innerH:Re,cardPx:qe,titlePx:rt,totalPx:Rt,scrolledPx:qt,landed:Ln,stickyBottom:$t,depthT:gi}}function k(Re=nt()){return A3(Re.scrolledPx,Re.titlePx,Re.cardPx,Re.totalPx,Re.landed,Re.stickyBottom,Re.innerH)}function De(){return E||k()}function _e(Re){let qe=Re.deltaY;return Re.deltaMode===1?qe*=16:Re.deltaMode===2&&(qe*=window.innerHeight),qe}function Le(){Pe(),Q=!0,U=window.setTimeout(()=>{U=0,Q=!1},_3)}function Ie(Re){if(_||o.current||E)return;const qe=nt();if(!k(qe))return;const rt=mn-1,Rt=Qt.clamp(Math.round(Re),0,rt),It=T3(g,Rt,qe.innerH),dn=window.scrollY,qt=It-dn;if(Oe=Rt,Math.abs(qt)<Ah(qe.innerH)){Al(It),Le();return}E=!0,Q=!0;const cn=y3(window.innerWidth),Ln=performance.now(),$t=Yt=>{if(_||o.current){E=!1,St=0;return}if(!k(nt())){$e(),Q=!1;return}const gi=Math.min(1,(Yt-Ln)/cn);Al(dn+qt*E3(gi)),gi<1?St=requestAnimationFrame($t):(Al(It),E=!1,St=0,Le())};St=requestAnimationFrame($t)}function Ee(Re,qe){const rt=mn-1,Rt=Ah(Re.innerH),It=Re.titlePx,dn=qe>0?1:-1;if(Re.scrolledPx<It-Rt)return dn>0?0:null;const qt=zv(Re.depthT),cn=Qt.clamp(qt+dn,0,rt);return cn===qt?null:cn}function Ze(Re){const qe=nt();if(!k(qe))return!1;const rt=Ee(qe,Re);return rt===null?!1:(Ie(rt),!0)}function We(Re){if(!De())return;const qe=_e(Re),rt=Math.abs(qe)>=m3;if(E||Q){Re.preventDefault();return}if(!rt){Re.preventDefault();return}const Rt=nt();if(!k(Rt))return;const It=Ee(Rt,qe>0?1:-1);It!==null&&(Re.preventDefault(),Ie(It))}function an(Re){var qe;if(Ae=((qe=Re.touches[0])==null?void 0:qe.clientY)??Ae,he=Ae,Ne=window.scrollY,ae=k()||E,!(ae&&E)&&ae){const rt=nt();Oe=zv(rt.depthT)}}function Pt(Re){var qe,rt;!ae&&(E||k())&&(ae=!0,Ae=((qe=Re.touches[0])==null?void 0:qe.clientY)??Ae,he=Ae,Ne=window.scrollY),ae&&(Re.preventDefault(),he=((rt=Re.touches[0])==null?void 0:rt.clientY)??he,E||Al(Ne))}function kn(){const Re=ae,qe=Ae-he;if(ae=!1,!(!Re||E)&&k()){if(Math.abs(qe)<g3){const rt=nt();rt.scrolledPx<rt.titlePx-Ah(rt.innerH)?Ie(0):Ie(Oe);return}Ze(qe>0?1:-1)||Ie(Oe)}}function ni(Re){Re.pointerType!=="touch"&&Re.button===0&&(de=!0,pe=!1,we=window.scrollY,k()&&$e())}function as(Re){if(Re.pointerType==="touch"||!de)return;if(de=!1,!pe||!k()){pe=!1;return}const qe=nt(),rt=window.scrollY>=we?1:-1,Rt=Ee(qe,rt);pe=!1,Rt!==null&&Ie(Rt)}function ss(Re){Re.pointerType!=="touch"&&(de=!1,pe=!1)}function rs(){const Re=window.scrollY,qe=Re-ze;ze=Re,de&&Math.abs(qe)>.5&&(pe=!0),E&&!k()&&Ke()}function Ca(){Ke(),ln()}function Ri(){Ke();const Re=at(),qe=window.innerWidth,rt=Math.abs(Re-Ce),Rt=Math.abs(qe-ye)>1;if(ie){rt>bh||Rt?ln():Ut();return}Ce=Re,ye=qe,Ut()}function Sn(){Ke();const Re=at();Math.abs(Re-Ce)<=bh||(ie?ln():(Ce=Re,ye=window.innerWidth,Ut()))}window.addEventListener("wheel",We,{passive:!1}),window.addEventListener("touchstart",an,{passive:!0}),window.addEventListener("touchmove",Pt,{passive:!1}),window.addEventListener("touchend",kn,{passive:!0}),window.addEventListener("touchcancel",kn,{passive:!0}),window.addEventListener("pointerdown",ni,{passive:!0}),window.addEventListener("pointerup",as,{passive:!0}),window.addEventListener("pointercancel",ss,{passive:!0}),window.addEventListener("scroll",rs,{passive:!0}),window.addEventListener("resize",Ri,{passive:!0}),window.addEventListener("orientationchange",Ca,{passive:!0});const Mn=window.visualViewport;Mn&&Mn.addEventListener("resize",Sn);const Yn=new ResizeObserver(Ut);Yn.observe(d),x=()=>{var Re;Ke(),c.current=null,cancelAnimationFrame(Z),document.body.classList.remove(or),window.removeEventListener("wheel",We),window.removeEventListener("touchstart",an),window.removeEventListener("touchmove",Pt),window.removeEventListener("touchend",kn),window.removeEventListener("touchcancel",kn),window.removeEventListener("pointerdown",ni),window.removeEventListener("pointerup",as),window.removeEventListener("pointercancel",ss),window.removeEventListener("scroll",rs),window.removeEventListener("resize",Ri),window.removeEventListener("orientationchange",Ca),Mn&&Mn.removeEventListener("resize",Sn),Yn.disconnect(),M.forEach(qe=>{qe.dispose()}),z.forEach(qe=>qe.dispose()),(Re=L.map)==null||Re.dispose(),L.dispose(),I.forEach(qe=>qe.geometry.dispose()),X.geometry.dispose(),F.geometry.dispose(),Y.dispose(),V.remove(F),ce.dispose(),d.contains(ce.domElement)&&d.removeChild(ce.domElement)},_&&x()})(),()=>{var b;_=!0,(b=c.current)==null||b.call(c),c.current=null,document.body.classList.remove(or),x==null||x()}},[]),D.jsxs("section",{ref:a,id:"flow",className:"flow-intro","aria-label":"Morpheum — Discover, Copy, Supervise, Isolate",children:[D.jsxs("div",{ref:e,className:"flow-intro__sticky",children:[D.jsx("div",{ref:i,className:"flow-intro__canvas","aria-hidden":!0}),D.jsxs("div",{className:"flow-intro__top",children:[D.jsx("div",{className:"flow-intro__brand",children:D.jsx(Ip,{size:"sm",brandName:"Morpheum",className:"flow-intro__brand-mark"})}),D.jsxs("button",{type:"button",className:"flow-intro__skip",onClick:u,children:["Skip ",D.jsx("span",{className:"flow-intro__skip-key",children:"Esc"})]})]}),D.jsx("div",{className:"flow-intro__tagline-wrap",children:D.jsx(UR,{text:OR,className:"flow-intro__tagline",scrollerRef:a})}),D.jsx("div",{className:"flow-intro__sr","aria-live":"polite",children:ho.map((h,m)=>D.jsxs("p",{children:["Step ",String(m+1).padStart(2,"0"),": ",h.verb,". ",h.description]},h.verb))})]}),D.jsx("div",{ref:r,className:"flow-intro__spacer","aria-hidden":!0})]})}const B3=280,z3=5/4,H3=3800,G3={discover:Tl,copy:_R};function V3(){return typeof window<"u"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches}function k3({stepIndex:a,kind:e,className:i,width:r=B3}){const o=Ve.useRef(null),c=e??zx(a),u=Math.round(r*z3);return Ve.useEffect(()=>{const h=o.current;if(!h)return;let m=0,d;const g=()=>{const x=Math.min(window.devicePixelRatio||1,2),b=Math.round(r*x),w=Math.round(u*x);(h.width!==b||h.height!==w)&&(h.width=b,h.height=w);const y=h.getContext("2d");y&&yR(y,c,b,w,m)};g();const _=G3[c];_&&_>1&&!V3()&&(d=setInterval(()=>{m=(m+1)%_,g()},H3));const v=()=>g();return window.addEventListener("resize",v),()=>{window.removeEventListener("resize",v),d&&clearInterval(d)}},[c,r,u]),D.jsx("div",{className:["loop-step-sheet",i].filter(Boolean).join(" "),style:{width:r,height:u},children:D.jsx("canvas",{ref:o,className:"loop-step-sheet__canvas",style:{width:r,height:u},"aria-hidden":!0})})}const Xv=[{id:"want-eth",agent:"SharpeShark",timestamp:"2026-07-08T15:42:00.000Z",timeLabel:"07-08, 15:42:00",status:"want-to",statusLabel:"Want to",action:"Open ETH long · 1.2 ETH",showActions:!0},{id:"rejected-btc",agent:"NightOwl",timestamp:"2026-07-08T15:31:00.000Z",timeLabel:"07-08, 15:31:00",status:"rejected",statusLabel:"Rejected",action:"Open BTC short · 0.04 BTC"},{id:"close-btc-profit",agent:"SharpeShark",timestamp:"2026-07-08T15:25:00.000Z",timeLabel:"07-08, 15:25:00",status:"short",statusLabel:"Close Long",action:"BTCUSDT · 0.04 BTC · 2,465.12 USDT",pnl:{text:"+103.09",tone:"long"}},{id:"open-eth-long",agent:"FluxRunner",timestamp:"2026-07-08T14:10:00.000Z",timeLabel:"07-08, 14:10:00",status:"long",statusLabel:"Open Long",action:"ETHUSDT · 0.8 ETH · 2,560.00 USDT"},{id:"open-sol-short",agent:"NightOwl",timestamp:"2026-07-07T09:42:00.000Z",timeLabel:"07-07, 09:42:00",status:"short",statusLabel:"Open Short",action:"SOLUSDT · 12 SOL · 1,824.00 USDT"}];function X3(){return D.jsxs("aside",{className:"supervise-log","aria-label":"Agent activity log",children:[D.jsx("header",{className:"supervise-log__header",children:D.jsx("span",{className:"supervise-log__kicker",children:"Activity log"})}),D.jsx("ol",{className:"supervise-log__timeline",children:Xv.map((a,e)=>{const i=e===Xv.length-1,r=e===0;return D.jsxs("li",{className:"supervise-log__item",children:[D.jsxs("div",{className:"supervise-log__meta",children:[D.jsx("span",{className:"supervise-log__agent",children:a.agent}),D.jsx("time",{className:"supervise-log__time",dateTime:a.timestamp,children:a.timeLabel})]}),D.jsxs("div",{className:"supervise-log__track","aria-hidden":!0,children:[i?null:D.jsx("span",{className:"supervise-log__track-line"}),D.jsx("span",{className:["supervise-log__dot",r?"supervise-log__dot--latest":""].filter(Boolean).join(" ")})]}),D.jsxs("div",{className:"supervise-log__body",children:[D.jsx("span",{className:`supervise-log__badge supervise-log__badge--${a.status}`,children:a.statusLabel}),D.jsxs("p",{className:"supervise-log__action",children:[a.action,a.pnl?D.jsxs(D.Fragment,{children:[" · ",D.jsx("span",{className:`supervise-log__pnl supervise-log__pnl--${a.pnl.tone}`,children:a.pnl.text})]}):null]}),a.showActions?D.jsxs("div",{className:"supervise-log__actions",children:[D.jsx("button",{type:"button",className:"supervise-log__btn supervise-log__btn--reject",children:"Reject"}),D.jsx("button",{type:"button",className:"supervise-log__btn supervise-log__btn--approve",children:"Approve"})]}):null]})]},a.id)})})]})}const W3=/^(action)$/i;function Y3(a){return a.split(/(\s*[·/]\s*)/).map((i,r)=>W3.test(i.trim())?D.jsx("span",{className:"stat-chip__brand",children:i},r):D.jsx("span",{children:i},r))}function Kx({label:a,status:e,live:i}){return D.jsxs("span",{className:`stat-chip ${i?"stat-chip--live":""}`,children:[D.jsx("span",{className:"stat-chip__label",children:a}),D.jsx("span",{className:"stat-chip__sep",children:"·"}),D.jsx("span",{className:"stat-chip__status",children:Y3(e)})]})}var q3=tx();function j3(a,e,i=!1){a.style.fontFamily=e.fontFamily,a.style.fontSize=e.fontSize,a.style.fontWeight=e.fontWeight,a.style.letterSpacing=e.letterSpacing,a.style.lineHeight=e.lineHeight,a.style.textTransform=e.textTransform,a.style.whiteSpace=i?"nowrap":"normal",a.style.wordBreak=i?"normal":"break-word"}function Z3(a,e,i,r){const o=getComputedStyle(i),c=document.createElement("div");c.style.position="fixed",c.style.left="-99999px",c.style.top="0",c.style.visibility="hidden",c.style.pointerEvents="none",c.style.width=`${e}px`,j3(c,o,!r);const u=document.createTextNode(a);return c.appendChild(u),document.body.appendChild(c),{probe:c,textNode:u}}function Wv(a,e,i,r=!0){if(!a)return{lines:[],blockHeight:0};if(e<=0)return{lines:[a],blockHeight:0};const{probe:o,textNode:c}=Z3(a,e,i,r),u=o.offsetHeight;if(!r)return document.body.removeChild(o),{lines:[a],blockHeight:u};const h=document.createRange(),m=[];let d=0,g=0;for(let _=1;_<=a.length;_++){h.setStart(c,0),h.setEnd(c,_);const v=h.getClientRects().length;v>g&&g>0&&(m.push(a.slice(d,_-1)),d=_-1),g=v}return d<a.length&&m.push(a.slice(d)),document.body.removeChild(o),{lines:m.length>0?m:[a],blockHeight:u}}const K3=40,Q3=5,J3="typewriter-reveal",Yv=1e3,$3=4e3;function qv(){return Yv+Math.random()*($3-Yv)}function Qx(){return typeof window>"u"?!1:window.matchMedia("(prefers-reduced-motion: reduce)").matches}function eC({text:a,content:e,speed:i,cursorWidth:r,active:o,waiting:c,completed:u,holdCursor:h=!1,onComplete:m}){const d=Ve.useRef(null),g=Ve.useRef(m),_=Ve.useRef(null),v=Ve.useRef(null),x=Ve.useRef(null),b=Ve.useRef("idle"),[w,y]=Ve.useState("idle");g.current=m;const M=Ve.useCallback(()=>{_.current&&(clearTimeout(_.current),_.current=null)},[]),I=Ve.useCallback(()=>{var N;M(),v.current=null,x.current=null,b.current="complete",y("complete"),(N=g.current)==null||N.call(g)},[M]),z=Ve.useCallback(N=>{M(),v.current=Date.now()+N,_.current=setTimeout(I,N)},[M,I]);Ve.useLayoutEffect(()=>{b.current="idle",y("idle"),x.current=null,v.current=null,M()},[a,i,r,M]),Ve.useLayoutEffect(()=>{var H,$,me;if(c||u||b.current==="complete")return;if(!o){b.current==="cursor-hold"&&_.current&&v.current!=null&&(M(),x.current=Math.max(0,v.current-Date.now()),v.current=null);return}if(b.current==="cursor-hold"&&!_.current){const xe=x.current??qv();x.current=null,z(xe);return}if(b.current==="animating"||b.current==="cursor-hold")return;if(Qx()){(H=g.current)==null||H.call(g);return}const N=d.current;if(!N||!a){($=g.current)==null||$.call(g);return}N.style.width="",N.offsetWidth;const X=Math.max(a.length/i*1e3,120),V=Math.max(a.length,1),j=N.closest(".typewriter-block"),ce=(j==null?void 0:j.clientWidth)??((me=N.parentElement)==null?void 0:me.clientWidth)??0;N.style.whiteSpace="nowrap",N.style.width="auto";const ue=N.scrollWidth,Y=ce>0?Math.min(ue,ce):ue;N.style.width="0",N.style.setProperty("--tw-duration",`${X}ms`),N.style.setProperty("--tw-target-width",`${Y}px`),N.style.setProperty("--tw-steps",String(V)),N.style.setProperty("--tw-cursor-width",`${r}px`),N.offsetWidth,b.current="animating",y("animating");const F=xe=>{if(xe.animationName===J3){if(h){N.style.width=`${Y}px`,b.current="cursor-hold",y("cursor-hold"),z(qv());return}N.style.width="",I()}};return N.addEventListener("animationend",F),()=>{N.removeEventListener("animationend",F)}},[o,u,I,h,z,i,a,c,M,r]);const R=w==="animating",O=w==="cursor-hold",L=w==="complete",T=["typewriter","typewriter-line",c?"is-waiting":"",R?"is-animating":"",O?"is-cursor-hold":"",u||L?"is-complete":"",!o&&!c&&!u&&!L&&(R||O)?"is-paused":""].filter(Boolean).join(" ");return D.jsx("span",{ref:d,className:T,children:e??a})}function zp({text:a,children:e,className:i,speed:r=K3,cursorWidth:o=Q3,multiline:c="auto",active:u=!0,holdCursor:h=!0,onComplete:m}){const d=Ve.useRef(null),g=Ve.useRef(m),[_,v]=Ve.useState([]),[x,b]=Ve.useState(0),[w,y]=Ve.useState(0),[M,I]=Ve.useState(!1),[z,R]=Ve.useState(!1),O=Qx();g.current=m;const L=Ve.useCallback(()=>{const ue=d.current;if(!ue||!a)return v([]),b(0),R(!0),!0;const Y=ue.clientWidth;if(Y<1)return!1;const H=(c==="auto"||c===!0)&&!O,{lines:$,blockHeight:me}=Wv(a,Y,ue,H);let xe=me;if(!H){const P=Wv(a,Y,ue,!0);xe=Math.max(me,P.blockHeight)}return v($),b(xe),R(!0),!0},[a,c,O]);Ve.useLayoutEffect(()=>{var ue,Y;if(y(0),I(!1),R(!1),v([]),b(0),O){(ue=g.current)==null||ue.call(g),R(!0);return}if(!a){(Y=g.current)==null||Y.call(g),R(!0);return}if(!L()){const F=new ResizeObserver(()=>{L()&&F.disconnect()});return d.current&&F.observe(d.current),()=>F.disconnect()}},[a,c,L,O]);const B=Ve.useCallback(ue=>{var F;const Y=ue>=_.length-1;q3.flushSync(()=>{if(!Y){y(ue+1);return}I(!0)}),Y&&((F=g.current)==null||F.call(g))},[_]),N=["typewriter-block",_.length>1?"typewriter-lines":"typewriter-host",i??"",M?"is-complete":"",z?"":"is-measuring",O?"is-static":""].filter(Boolean).join(" "),X={...!M&&!O&&x>0?{height:x,minHeight:x}:void 0},V=e??a;if(!z)return D.jsx("span",{ref:d,className:N,style:X,children:V});if(O||!a)return D.jsx("span",{ref:d,className:["typewriter","is-static",i??""].filter(Boolean).join(" "),children:V});if(M)return D.jsx("span",{ref:d,className:["typewriter-block","typewriter-host","is-complete",i??""].filter(Boolean).join(" "),children:V});const j=_.length>0?_:[a],ce=!!e&&j.length<=1;return D.jsxs("span",{ref:d,className:N,style:X,"aria-label":a,children:[D.jsx("span",{className:"typewriter-ghost","aria-hidden":!0,children:V}),D.jsx("span",{className:"typewriter-overlay","aria-hidden":!0,children:j.map((ue,Y)=>D.jsx(eC,{text:ue,content:ce?e:void 0,speed:r,cursorWidth:o,waiting:Y>w,active:u&&Y===w,completed:Y<w,holdCursor:h&&Y===j.length-1,onComplete:Y===w?()=>B(Y):void 0},`${Y}-${ue}`))})]})}function tC(){return typeof window<"u"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches}function Hp(a,e){const i=(e==null?void 0:e.amount)??.2,[r,o]=Ve.useState(!1);return Ve.useLayoutEffect(()=>{if(r)return;if(tC()){o(!0);return}const c=a.current;if(!c)return;const u=new IntersectionObserver(h=>{for(const m of h)if(m.isIntersecting&&m.intersectionRatio>=Math.min(i,1)){o(!0),u.disconnect();return}},{root:null,threshold:[0,i,Math.min(i+.15,1),1],rootMargin:"0px"});return u.observe(c),()=>u.disconnect()},[i,r,a]),r}function nC(a){return String(a).padStart(2,"0")}function Au(){return typeof window<"u"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches}const iC=1600,aC=1500,jv=5e3,sC=7e3;function rC(){return jv+Math.random()*(sC-jv)}function oC({text:a,active:e}){const[i,r]=Ve.useState(!1),[o,c]=Ve.useState(0),u=Ve.useRef(null),h=`> ${a}`,m=Ve.useCallback(()=>{u.current&&(clearTimeout(u.current),u.current=null)},[]);Ve.useLayoutEffect(()=>{if(m(),!e){r(!1),c(0);return}if(Au()){r(!0);return}const g=window.setTimeout(()=>r(!0),aC);return()=>{window.clearTimeout(g),m()}},[e,m]);const d=Ve.useCallback(()=>{Au()||(m(),u.current=setTimeout(()=>{u.current=null,c(g=>g+1)},rC()))},[m]);return D.jsx("p",{className:"flow-step__example",children:i?D.jsx(zp,{text:h,className:"flow-step__example-type",speed:42,multiline:"auto",active:!0,holdCursor:!0,onComplete:d},o):D.jsx("span",{className:"flow-step__example-type","aria-hidden":!0,children:h})})}function lC(){const[a,e]=Ve.useState(()=>new Set),[i,r]=Ve.useState(!1),o=Ve.useRef(new Map),c=Ve.useRef(null),u=Hp(c,{amount:.35}),h=Ls.steps.every(_=>a.has(`step-${_.n}`));Ve.useLayoutEffect(()=>{if(Au()){e(new Set(Ls.steps.map(v=>`step-${v.n}`))),r(!0);return}const _=new IntersectionObserver(v=>{e(x=>{const b=new Set(x);for(const w of v){const y=w.target.dataset.flowKey;y&&w.isIntersecting&&b.add(y)}return b})},{root:null,threshold:[0,.01,.08,.15,.25],rootMargin:"-42% 0px -42% 0px"});for(const v of o.current.values())_.observe(v);return()=>{_.disconnect()}},[]),Ve.useLayoutEffect(()=>{if(Au())return;if(!h){r(!1);return}const _=window.setTimeout(()=>{r(!0)},iC);return()=>window.clearTimeout(_)},[h]);const m=Ve.useCallback((_,v)=>{v?o.current.set(_,v):o.current.delete(_)},[]),d=Ve.useCallback(_=>{e(v=>new Set(v).add(_))},[]),g=u&&i;return D.jsx("section",{id:"how",className:"section flow",children:D.jsxs("div",{className:"container",children:[D.jsx("p",{className:"section-kicker",children:Ls.kicker}),D.jsx("h2",{className:"section-title flow__title",children:Ls.title}),D.jsx("div",{className:"flow__chips",children:Ls.chips.map(_=>D.jsx(Kx,{label:_.label,status:_.value},_.label))}),D.jsx("div",{className:"flow__steps",role:"list",children:Ls.steps.map((_,v)=>{const x=`step-${_.n}`,b=a.has(x);return D.jsxs("article",{ref:w=>m(x,w),"data-flow-key":x,role:"listitem",className:`flow-step${b?" flow-step--expanded":""}`,"aria-expanded":b,children:[D.jsxs("button",{type:"button",className:"flow-step__head",onClick:()=>d(x),"aria-label":b?`${_.title}, expanded`:`${_.title}, tap to expand`,children:[D.jsxs("span",{className:"flow-step__idx",children:["Step ",nC(_.n)]}),D.jsx("h3",{className:"flow-step__title",children:_.title}),D.jsx("span",{className:"flow-step__chevron","aria-hidden":!0,children:b?"−":"+"})]}),D.jsx("div",{className:"flow-step__expand","aria-hidden":!b,children:D.jsx("div",{className:"flow-step__expand-inner",children:D.jsxs("div",{className:`flow-step__split${v===2?" flow-step__split--supervise":""}`,children:[D.jsx("p",{className:"flow-step__meta",children:_.feature}),D.jsxs("div",{className:"flow-step__copy",children:[D.jsx("p",{className:"flow-step__detail",children:_.body}),D.jsx(oC,{text:_.example,active:b}),D.jsx("div",{className:"flow-step__actions",children:D.jsx("a",{href:Bn.explore,className:"flow-step__open","aria-label":`Explore after ${_.title}`,children:D.jsx("span",{"aria-hidden":!0,className:"flow-step__open-arrow",children:"→"})})})]}),D.jsx("div",{className:`flow-step__sheet${v===2?" flow-step__sheet--log":""}`,"aria-hidden":!b,children:b?v===2?D.jsx(X3,{}):D.jsx(k3,{stepIndex:v,width:280}):null})]})})})]},x)})}),D.jsx("p",{ref:c,className:"flow__outcome",children:g?D.jsx(zp,{text:Ls.outcome,className:"flow__outcome-type",speed:42,multiline:"auto",active:!0,holdCursor:!0}):D.jsx("span",{className:"flow__outcome-type","aria-hidden":!0,children:Ls.outcome})})]})})}function cC(){return D.jsx("footer",{className:"site-footer",children:D.jsxs("div",{className:"container site-footer__inner",children:[D.jsxs("div",{className:"site-footer__brand",children:[D.jsx("a",{className:"site-footer__logo",href:"#hero","aria-label":"Morpheum home",children:D.jsx(Ip,{size:"sm"})}),D.jsx("p",{className:"site-footer__legal",children:N_.legal})]}),D.jsxs("div",{className:"site-footer__meta",children:[D.jsxs("nav",{className:"site-footer__nav","aria-label":"Footer",children:[du.map(a=>D.jsx("a",{href:a.href,children:a.label},a.id)),D.jsx("a",{href:Bn.docs,children:"Docs"}),D.jsx("a",{href:Bn.manifesto,children:"Manifesto"}),D.jsx("a",{href:Bn.discord,children:"Discord"}),D.jsx("a",{href:Bn.x,children:"X"})]}),D.jsx("div",{className:"site-footer__labels","aria-label":"Protocol",children:N_.labels.map(a=>D.jsx("span",{className:"site-footer__label",children:a},a))})]})]})})}const Zv="!@#$%^&*()_+{}[]|;:,.<>?/0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",Jx=50,Kv=3500,Qv=4e3,uC=1400,fC=1200,dC=4500;function $x(){return typeof window>"u"?!1:window.matchMedia("(prefers-reduced-motion: reduce)").matches}function Jv(a){return/[A-Za-z0-9]/.test(a)}function hC(){return Zv[Math.floor(Math.random()*Zv.length)]??"?"}function pC(a){return Math.random()<.5?hC():a}function eS(a,e,i){const r=[];for(let d=0;d<a.length;d++)Jv(a[d]??"")&&r.push(d);const o=r.length,c=o===0?1:Math.min(e/i,1),u=Math.floor(c*o),h=new Set(r.slice(0,u));let m="";for(let d=0;d<a.length;d++){const g=a[d]??"";!Jv(g)||h.has(d)?m+=g:m+=pC(g)}return m}function mC(a){return typeof a=="boolean"?{enabled:a,decryptMs:Kv,pauseMs:Qv}:{enabled:a.enabled??!0,decryptMs:a.decryptMs??Kv,pauseMs:a.pauseMs??Qv}}function ei(a,e=!0){const{enabled:i,decryptMs:r,pauseMs:o}=mC(e),c=r+o,[u,h]=Ve.useState(a);return Ve.useEffect(()=>{if(!i||$x()){h(a);return}let m=Date.now();const d=()=>{const _=Date.now();let v=_-m;v>=c&&(m=_,v=0),h(eS(a,v,r))};d();const g=setInterval(d,Jx);return()=>{clearInterval(g)}},[a,i,r,c]),u}function $v(a,e={}){const i=e.enabled??!0,r=e.stepDelayMs??uC,o=e.stepDecryptMs??fC,c=e.holdMs??dC,u=a.join("\0"),[h,m]=Ve.useState(a),[d,g]=Ve.useState(()=>a.map(()=>!1));return Ve.useEffect(()=>{const _=u.length>0?u.split("\0"):[];if(!i||$x()||_.length===0){m(_),g(_.map(()=>!0));return}const x=(_.length-1)*r+o+c;let b=Date.now();const w=()=>{const M=Date.now();let I=M-b;I>=x&&(b=M,I=0);const z=[],R=[];for(let O=0;O<_.length;O++){const L=_[O]??"",B=O*r,T=I>=B;if(R.push(T),!T){z.push(L);continue}const N=I-B;z.push(eS(L,N,o))}m(z),g(R)};w();const y=setInterval(w,Jx);return()=>{clearInterval(y)}},[u,i,r,o,c]),{displays:h,started:d}}function gC(){const a=[...L_,...L_];return D.jsx("div",{className:"marquee","aria-label":"Live status",children:D.jsx("div",{className:"marquee__viewport",children:D.jsx("div",{className:"marquee__track",children:a.map((e,i)=>D.jsx(Kx,{label:e.label,status:e.status,live:"live"in e?e.live:!1},`${e.label}-${i}`))})})})}function _C(){const[a,e]=Ds.headline,i=ei(Ds.eyebrow.label);return D.jsxs("section",{id:"hero",className:"hero","aria-labelledby":"hero-heading",children:[D.jsx("div",{className:"hero__atmosphere","aria-hidden":!0}),D.jsx("div",{className:"hero__grid","aria-hidden":!0}),D.jsx("div",{className:"hero__logo-anim","aria-hidden":!0,children:D.jsxs("svg",{className:"hero__logo-anim-svg",viewBox:bR,fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[D.jsx("g",{className:"hero__logo-anim-ghost",children:vp.map(r=>D.jsx("path",{d:r,fill:"#C8F5A8"},`ghost-${r.slice(0,24)}`))}),D.jsx("g",{className:"hero__logo-anim-fill",children:vp.map(r=>D.jsx("path",{d:r,fill:"#C8F5A8"},`fill-${r.slice(0,24)}`))})]})}),D.jsx("div",{className:"hero__scanlines","aria-hidden":!0}),D.jsx("div",{className:"hero__grain","aria-hidden":!0}),D.jsx("div",{className:"hero__veil","aria-hidden":!0}),D.jsxs("div",{className:"container hero__content",children:[D.jsxs("a",{className:"hero__eyebrow hero__eyebrow--matrix",href:Ds.eyebrow.href,"aria-label":`${Ds.eyebrow.label}›`,children:[i,D.jsx("span",{className:"hero__eyebrow-chevron","aria-hidden":!0,children:"›"})]}),D.jsxs("h1",{id:"hero-heading",className:"hero__headline",children:[D.jsx("span",{className:"hero__line hero__line--lead",children:a}),D.jsx("span",{className:"hero__line hero__line--punch",children:e})]}),D.jsxs("div",{className:"hero__ctas",children:[D.jsx(xo,{href:Ds.primaryCta.href,variant:"primary",children:Ds.primaryCta.label}),D.jsx(xo,{href:Ds.secondaryCta.href,variant:"secondary",children:Ds.secondaryCta.label})]})]}),D.jsx(gC,{})]})}function vC(){const a=ei(zd.text);return D.jsx("div",{className:"manifesto-strip",children:D.jsx("a",{className:"manifesto-strip__link manifesto-strip__link--matrix",href:zd.href,"aria-label":zd.text,children:a})})}const pi={decryptMs:2800,pauseMs:5200},ex={stepDelayMs:1400,stepDecryptMs:1200,holdMs:4500};function tS(a){return String(a+1).padStart(2,"0")}function xC(a,e,i,r){return`${tS(a)}  ${e}  ·  ${i}  ·  ${r}`}function SC(a,e,i){return`${tS(a)}  ${e}  ·  ${i}`}function MC(a){return!a.from||!a.to||!a.asset||!a.amt?null:`${a.from} → ${a.to} · ${a.asset} ${a.amt}`}function Ti({label:a,value:e,display:i}){return D.jsxs("div",{className:"persona-card__meta-row",children:[D.jsx("span",{className:"terminal-label",children:a}),D.jsx("span",{className:"terminal-value persona-card__meta-value persona-card__meta-value--matrix","aria-label":e,children:i})]})}function gn({value:a,display:e,className:i="terminal-value persona-card__meta-value persona-card__meta-value--matrix",hidden:r=!1}){return D.jsx("p",{className:i,"aria-label":a,"aria-hidden":r||void 0,"data-pending":r?"true":void 0,children:e})}function yC({meta:a}){const e=ei(a.name,pi),i=ei(a.tx,pi),r=ei(a.hash,pi),o=ei(a.chain,pi),c=ei(a.verified,pi),u=ei(a.rep,pi),h=ei(a.portable,pi),m=ei(a.next,pi),d=`tx ${a.tx}`,g=`tx ${i}`,_=`did · ${a.name}`,v=`identity · ${e}`,x=`hash ${a.hash}`,b=`hash ${r}`,w=`chain ${a.chain}`,y=`chain ${o}`,M=`verified ${a.verified} · rep ${a.rep} · portable ${a.portable}`,I=`verified ${c} · rep ${u} · portable ${h}`,z=`next ${a.next}`,R=`next ${m}`,O=`rep ${a.rep} · portable ${a.portable}`,L=`rep ${u} · portable ${h}`,B=`verified ${a.verified}`,T=`verified ${c}`;return D.jsxs("div",{className:"persona-card__meta persona-card__meta--identity",children:[D.jsx("p",{className:"persona-card__meta-kind terminal-label",children:"become an operator"}),D.jsx("p",{className:"terminal-label",children:"on-chain transaction"}),D.jsxs("div",{className:"persona-card__meta-rows",children:[D.jsx(Ti,{label:"tx",value:a.tx,display:i}),D.jsx(Ti,{label:"hash",value:a.hash,display:r}),D.jsx(Ti,{label:"chain",value:a.chain,display:o}),D.jsx(Ti,{label:"verified",value:a.verified,display:c}),D.jsx(Ti,{label:"rep",value:a.rep,display:u}),D.jsx(Ti,{label:"portable",value:a.portable,display:h}),D.jsx(Ti,{label:"next",value:a.next,display:m})]}),D.jsxs("div",{className:"persona-card__meta-compact",children:[D.jsx(gn,{value:d,display:g}),D.jsx(gn,{value:_,display:v,className:"terminal-value persona-card__meta-value--matrix"}),D.jsx(gn,{value:x,display:b}),D.jsx(gn,{value:w,display:y}),D.jsx(gn,{value:M,display:I}),D.jsx(gn,{value:z,display:R})]}),D.jsxs("div",{className:"persona-card__meta-xxs",children:[D.jsx(gn,{value:d,display:g}),D.jsx(gn,{value:a.name,display:e,className:"terminal-value persona-card__meta-value--matrix"}),D.jsx(gn,{value:x,display:b}),D.jsx(gn,{value:w,display:y}),D.jsx(gn,{value:B,display:T}),D.jsx(gn,{value:O,display:L}),D.jsx(gn,{value:z,display:R})]})]})}function EC({meta:a}){const e=ei(a.tx,pi),i=ei(a.from,pi),r=ei(a.to,pi),o=ei(a.asset,pi),c=ei(a.amt,pi),u=ei(a.chain,pi),h=ei(a.status,pi),m=`${a.from} → ${a.to}`,d=`${i} → ${r}`,g=`tx ${a.tx}`,_=`tx ${e}`,v=`${a.asset} ${a.amt} · ${a.chain}`,x=`${o} ${c} · ${u}`,b=`${a.asset} ${a.amt}`,w=`${o} ${c}`,y=`status ${a.status}`,M=`status ${h}`;return D.jsxs("div",{className:"persona-card__meta persona-card__meta--community",children:[D.jsx("p",{className:"persona-card__meta-kind terminal-label",children:a.label}),D.jsxs("div",{className:"persona-card__meta-rows",children:[D.jsx(Ti,{label:"tx",value:a.tx,display:e}),D.jsx(Ti,{label:"from",value:a.from,display:i}),D.jsx(Ti,{label:"to",value:a.to,display:r}),D.jsx(Ti,{label:"asset",value:a.asset,display:o}),D.jsx(Ti,{label:"amt",value:a.amt,display:c}),D.jsx(Ti,{label:"chain",value:a.chain,display:u}),D.jsx(Ti,{label:"status",value:a.status,display:h})]}),D.jsxs("div",{className:"persona-card__meta-compact",children:[D.jsx("p",{className:"terminal-label",children:a.label}),D.jsx(gn,{value:g,display:_}),D.jsx(gn,{value:m,display:d}),D.jsx(gn,{value:v,display:x}),D.jsx(gn,{value:y,display:M})]}),D.jsxs("div",{className:"persona-card__meta-xxs",children:[D.jsx("p",{className:"terminal-label",children:a.label}),D.jsx(gn,{value:g,display:_}),D.jsx(gn,{value:m,display:d}),D.jsx(gn,{value:b,display:w}),D.jsx(gn,{value:a.chain,display:u}),D.jsx(gn,{value:y,display:M})]})]})}function bC({meta:a}){const e=Ve.useRef(null),i=Hp(e,{amount:.15}),r=a.steps.find(d=>d.from&&d.to&&d.asset&&d.amt),o=r?MC(r):null,c=Ve.useMemo(()=>{const d=a.steps.map((g,_)=>xC(_,g.op,g.tx,g.status));return o&&d.push(o),d.push(a.chain),d},[a.steps,a.chain,o]),u=Ve.useMemo(()=>{const d=a.steps.map((g,_)=>SC(_,g.op,g.tx));return o&&d.push(o),d},[a.steps,o]),h=$v(c,{...ex,enabled:i}),m=$v(u,{...ex,enabled:i});return D.jsxs("div",{ref:e,className:"persona-card__meta persona-card__meta--chain",children:[D.jsx("p",{className:"persona-card__meta-kind terminal-label",children:a.label}),D.jsx("div",{className:"persona-card__meta-rows",children:c.map((d,g)=>D.jsx(gn,{value:d,display:h.displays[g]??d,hidden:!(h.started[g]??!0)},`rows-${d}`))}),D.jsxs("div",{className:"persona-card__meta-compact",children:[D.jsx("p",{className:"terminal-label",children:a.label}),c.map((d,g)=>D.jsx(gn,{value:d,display:h.displays[g]??d,hidden:!(h.started[g]??!0)},`compact-${d}`))]}),D.jsxs("div",{className:"persona-card__meta-xxs",children:[D.jsx("p",{className:"terminal-label",children:a.label}),u.map((d,g)=>D.jsx(gn,{value:d,display:m.displays[g]??d,hidden:!(m.started[g]??!0)},`xxs-${d}`))]})]})}function TC({meta:a}){return a.kind==="identity"?D.jsx(yC,{meta:a}):a.kind==="chain"?D.jsx(bC,{meta:a}):D.jsx(EC,{meta:a})}function AC(){return D.jsx("section",{id:"personas",className:"section personas",children:D.jsxs("div",{className:"container",children:[D.jsx("p",{className:"section-kicker",children:Hd.kicker}),D.jsx("h2",{className:"section-title personas__title",children:Hd.title}),D.jsx("div",{className:"personas__grid",children:Hd.items.map(a=>D.jsxs("article",{className:`persona-card persona-card--${a.weight}`,children:[D.jsx("h3",{className:"persona-card__title",children:a.title}),D.jsx("ol",{className:"persona-card__steps",children:a.steps.map(e=>D.jsxs("li",{children:[D.jsxs("span",{className:"persona-card__chevron","aria-hidden":!0,children:[">"," "]}),e]},e))}),D.jsx(xo,{href:a.cta.href,variant:"ghost",className:"persona-card__cta",children:a.cta.label}),D.jsx(TC,{meta:a.meta})]},a.title))})]})})}function RC(){const[a,e]=Ve.useState(!1),[i,r]=Ve.useState(!1),[o,c]=Ve.useState("");return Ve.useEffect(()=>{const u=()=>e(window.scrollY>24);return u(),window.addEventListener("scroll",u,{passive:!0}),()=>window.removeEventListener("scroll",u)},[]),Ve.useEffect(()=>{const u=du.map(m=>m.id),h=new IntersectionObserver(m=>{var g;const d=m.filter(_=>_.isIntersecting).sort((_,v)=>v.intersectionRatio-_.intersectionRatio);(g=d[0])!=null&&g.target.id&&c(d[0].target.id)},{rootMargin:"-30% 0px -55% 0px",threshold:[0,.25,.5]});return u.forEach(m=>{const d=document.getElementById(m);d&&h.observe(d)}),()=>h.disconnect()},[]),Ve.useEffect(()=>(document.body.style.overflow=i?"hidden":"",()=>{document.body.style.overflow=""}),[i]),D.jsxs(D.Fragment,{children:[D.jsx("header",{className:`sticky-header ${a?"sticky-header--solid":""}`,children:D.jsxs("div",{className:"sticky-header__inner",children:[D.jsx("a",{className:"sticky-header__logo",href:"#hero","aria-label":"Morpheum home",children:D.jsx(Ip,{size:"sm",brandName:"Morpheum"})}),D.jsx("nav",{className:"sticky-header__nav","aria-label":"Primary",children:du.map(u=>D.jsx("a",{href:u.href,className:`sticky-header__link ${o===u.id?"is-active":""}`,children:u.label},u.id))}),D.jsxs("div",{className:"sticky-header__actions",children:[D.jsx("a",{className:"sticky-header__docs",href:Bn.docs,children:"Docs"}),D.jsx(xo,{href:Bn.app,variant:"primary",className:"sticky-header__launch",children:"Launch Demo"}),D.jsxs("button",{type:"button",className:"sticky-header__menu","aria-expanded":i,"aria-controls":"mobile-nav","aria-label":i?"Close menu":"Open menu",onClick:()=>r(u=>!u),children:[D.jsx("span",{}),D.jsx("span",{}),D.jsx("span",{})]})]})]})}),D.jsx("div",{id:"mobile-nav",className:`mobile-sheet ${i?"is-open":""}`,hidden:!i,children:D.jsxs("nav",{className:"mobile-sheet__nav","aria-label":"Mobile",children:[du.map(u=>D.jsx("a",{href:u.href,onClick:()=>r(!1),className:o===u.id?"is-active":"",children:u.label},u.id)),D.jsx("a",{href:Bn.docs,onClick:()=>r(!1),children:"Docs"})]})})]})}function CC(){const a=Ve.useRef(null),e=Hp(a,{amount:.35});return D.jsx("section",{className:"thesis section","aria-label":"Thesis",children:D.jsxs("div",{className:"container thesis__inner",children:[D.jsx("p",{ref:a,className:"thesis__close",children:e?D.jsxs(zp,{text:D_.close,className:"thesis__close-type",speed:36,multiline:"auto",active:!0,holdCursor:!0,children:["The Agent-native"," ",D.jsx("span",{className:"thesis__close-accent",children:"L1 DEX"})," — ",D.jsx("span",{className:"thesis__close-phrase",children:"faster, safer trades."})]}):D.jsxs("span",{className:"thesis__close-type","aria-hidden":!0,children:["The Agent-native"," ",D.jsx("span",{className:"thesis__close-accent",children:"L1 DEX"})," — ",D.jsx("span",{className:"thesis__close-phrase",children:"faster, safer trades."})]})}),D.jsx("p",{className:"section-kicker",children:"Two Risks in Agentic Economy"}),D.jsx("div",{className:"thesis__risks",children:D_.risks.map(i=>D.jsxs("article",{className:"thesis__pair",children:[D.jsxs("div",{className:"thesis__risk",children:[D.jsx("p",{className:"thesis__label",children:"Risk"}),D.jsx("h3",{className:"thesis__risk-title",children:i.risk}),D.jsxs("p",{className:"thesis__failure",children:[D.jsx("span",{"aria-hidden":!0,children:"> "}),i.failure]})]}),D.jsxs("div",{className:"thesis__solve",children:[D.jsx("p",{className:"thesis__label thesis__label--solve",children:"Solution"}),D.jsx("p",{className:"thesis__solve-body",children:i.solve})]})]},i.risk))})]})})}function wC(){return D.jsxs("div",{className:"page",children:[D.jsx("a",{className:"skip-link",href:"#hero",children:"Skip to content"}),D.jsx(vC,{}),D.jsx(RC,{}),D.jsxs("main",{className:"page__main",children:[D.jsx(F3,{}),D.jsx(_C,{}),D.jsx(CC,{}),D.jsx(my,{}),D.jsx(AC,{}),D.jsx(lC,{}),D.jsx(_y,{}),D.jsx(py,{})]}),D.jsx(cC,{})]})}dy.createRoot(document.getElementById("root")).render(D.jsx(Ve.StrictMode,{children:D.jsx(wC,{})}));
