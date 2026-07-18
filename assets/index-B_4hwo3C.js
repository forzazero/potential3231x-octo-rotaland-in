(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function i(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(o){if(o.ep)return;o.ep=!0;const c=i(o);fetch(o.href,c)}})();var Cd={exports:{}},il={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var g_;function ny(){if(g_)return il;g_=1;var a=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,o,c){var u=null;if(c!==void 0&&(u=""+c),o.key!==void 0&&(u=""+o.key),"key"in o){c={};for(var h in o)h!=="key"&&(c[h]=o[h])}else c=o;return o=c.ref,{$$typeof:a,type:r,key:u,ref:o!==void 0?o:null,props:c}}return il.Fragment=e,il.jsx=i,il.jsxs=i,il}var __;function iy(){return __||(__=1,Cd.exports=ny()),Cd.exports}var D=iy(),wd={exports:{}},ct={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var v_;function ay(){if(v_)return ct;v_=1;var a=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),u=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),v=Symbol.iterator;function x(P){return P===null||typeof P!="object"?null:(P=v&&P[v]||P["@@iterator"],typeof P=="function"?P:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,y={};function M(P,K,ye){this.props=P,this.context=K,this.refs=y,this.updater=ye||E}M.prototype.isReactComponent={},M.prototype.setState=function(P,K){if(typeof P!="object"&&typeof P!="function"&&P!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,P,K,"setState")},M.prototype.forceUpdate=function(P){this.updater.enqueueForceUpdate(this,P,"forceUpdate")};function I(){}I.prototype=M.prototype;function z(P,K,ye){this.props=P,this.context=K,this.refs=y,this.updater=ye||E}var R=z.prototype=new I;R.constructor=z,w(R,M.prototype),R.isPureReactComponent=!0;var O=Array.isArray;function L(){}var B={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function N(P,K,ye){var Ce=ye.ref;return{$$typeof:a,type:P,key:K,ref:Ce!==void 0?Ce:null,props:ye}}function X(P,K){return N(P.type,K,P.props)}function V(P){return typeof P=="object"&&P!==null&&P.$$typeof===a}function Y(P){var K={"=":"=0",":":"=2"};return"$"+P.replace(/[=:]/g,function(ye){return K[ye]})}var ue=/\/+/g;function fe(P,K){return typeof P=="object"&&P!==null&&P.key!=null?Y(""+P.key):K.toString(36)}function q(P){switch(P.status){case"fulfilled":return P.value;case"rejected":throw P.reason;default:switch(typeof P.status=="string"?P.then(L,L):(P.status="pending",P.then(function(K){P.status==="pending"&&(P.status="fulfilled",P.value=K)},function(K){P.status==="pending"&&(P.status="rejected",P.reason=K)})),P.status){case"fulfilled":return P.value;case"rejected":throw P.reason}}throw P}function F(P,K,ye,Ce,ze){var se=typeof P;(se==="undefined"||se==="boolean")&&(P=null);var be=!1;if(P===null)be=!0;else switch(se){case"bigint":case"string":case"number":be=!0;break;case"object":switch(P.$$typeof){case a:case e:be=!0;break;case g:return be=P._init,F(be(P._payload),K,ye,Ce,ze)}}if(be)return ze=ze(P),be=Ce===""?"."+fe(P,0):Ce,O(ze)?(ye="",be!=null&&(ye=be.replace(ue,"$&/")+"/"),F(ze,K,ye,"",function(it){return it})):ze!=null&&(V(ze)&&(ze=X(ze,ye+(ze.key==null||P&&P.key===ze.key?"":(""+ze.key).replace(ue,"$&/")+"/")+be)),K.push(ze)),1;be=0;var Te=Ce===""?".":Ce+":";if(O(P))for(var qe=0;qe<P.length;qe++)Ce=P[qe],se=Te+fe(Ce,qe),be+=F(Ce,K,ye,se,ze);else if(qe=x(P),typeof qe=="function")for(P=qe.call(P),qe=0;!(Ce=P.next()).done;)Ce=Ce.value,se=Te+fe(Ce,qe++),be+=F(Ce,K,ye,se,ze);else if(se==="object"){if(typeof P.then=="function")return F(q(P),K,ye,Ce,ze);throw K=String(P),Error("Objects are not valid as a React child (found: "+(K==="[object Object]"?"object with keys {"+Object.keys(P).join(", ")+"}":K)+"). If you meant to render a collection of children, use an array instead.")}return be}function H(P,K,ye){if(P==null)return P;var Ce=[],ze=0;return F(P,Ce,"","",function(se){return K.call(ye,se,ze++)}),Ce}function $(P){if(P._status===-1){var K=P._result;K=K(),K.then(function(ye){(P._status===0||P._status===-1)&&(P._status=1,P._result=ye)},function(ye){(P._status===0||P._status===-1)&&(P._status=2,P._result=ye)}),P._status===-1&&(P._status=0,P._result=K)}if(P._status===1)return P._result.default;throw P._result}var _e=typeof reportError=="function"?reportError:function(P){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var K=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof P=="object"&&P!==null&&typeof P.message=="string"?String(P.message):String(P),error:P});if(!window.dispatchEvent(K))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",P);return}console.error(P)},Me={map:H,forEach:function(P,K,ye){H(P,function(){K.apply(this,arguments)},ye)},count:function(P){var K=0;return H(P,function(){K++}),K},toArray:function(P){return H(P,function(K){return K})||[]},only:function(P){if(!V(P))throw Error("React.Children.only expected to receive a single React element child.");return P}};return ct.Activity=_,ct.Children=Me,ct.Component=M,ct.Fragment=i,ct.Profiler=o,ct.PureComponent=z,ct.StrictMode=r,ct.Suspense=m,ct.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=B,ct.__COMPILER_RUNTIME={__proto__:null,c:function(P){return B.H.useMemoCache(P)}},ct.cache=function(P){return function(){return P.apply(null,arguments)}},ct.cacheSignal=function(){return null},ct.cloneElement=function(P,K,ye){if(P==null)throw Error("The argument must be a React element, but you passed "+P+".");var Ce=w({},P.props),ze=P.key;if(K!=null)for(se in K.key!==void 0&&(ze=""+K.key),K)!T.call(K,se)||se==="key"||se==="__self"||se==="__source"||se==="ref"&&K.ref===void 0||(Ce[se]=K[se]);var se=arguments.length-2;if(se===1)Ce.children=ye;else if(1<se){for(var be=Array(se),Te=0;Te<se;Te++)be[Te]=arguments[Te+2];Ce.children=be}return N(P.type,ze,Ce)},ct.createContext=function(P){return P={$$typeof:u,_currentValue:P,_currentValue2:P,_threadCount:0,Provider:null,Consumer:null},P.Provider=P,P.Consumer={$$typeof:c,_context:P},P},ct.createElement=function(P,K,ye){var Ce,ze={},se=null;if(K!=null)for(Ce in K.key!==void 0&&(se=""+K.key),K)T.call(K,Ce)&&Ce!=="key"&&Ce!=="__self"&&Ce!=="__source"&&(ze[Ce]=K[Ce]);var be=arguments.length-2;if(be===1)ze.children=ye;else if(1<be){for(var Te=Array(be),qe=0;qe<be;qe++)Te[qe]=arguments[qe+2];ze.children=Te}if(P&&P.defaultProps)for(Ce in be=P.defaultProps,be)ze[Ce]===void 0&&(ze[Ce]=be[Ce]);return N(P,se,ze)},ct.createRef=function(){return{current:null}},ct.forwardRef=function(P){return{$$typeof:h,render:P}},ct.isValidElement=V,ct.lazy=function(P){return{$$typeof:g,_payload:{_status:-1,_result:P},_init:$}},ct.memo=function(P,K){return{$$typeof:d,type:P,compare:K===void 0?null:K}},ct.startTransition=function(P){var K=B.T,ye={};B.T=ye;try{var Ce=P(),ze=B.S;ze!==null&&ze(ye,Ce),typeof Ce=="object"&&Ce!==null&&typeof Ce.then=="function"&&Ce.then(L,_e)}catch(se){_e(se)}finally{K!==null&&ye.types!==null&&(K.types=ye.types),B.T=K}},ct.unstable_useCacheRefresh=function(){return B.H.useCacheRefresh()},ct.use=function(P){return B.H.use(P)},ct.useActionState=function(P,K,ye){return B.H.useActionState(P,K,ye)},ct.useCallback=function(P,K){return B.H.useCallback(P,K)},ct.useContext=function(P){return B.H.useContext(P)},ct.useDebugValue=function(){},ct.useDeferredValue=function(P,K){return B.H.useDeferredValue(P,K)},ct.useEffect=function(P,K){return B.H.useEffect(P,K)},ct.useEffectEvent=function(P){return B.H.useEffectEvent(P)},ct.useId=function(){return B.H.useId()},ct.useImperativeHandle=function(P,K,ye){return B.H.useImperativeHandle(P,K,ye)},ct.useInsertionEffect=function(P,K){return B.H.useInsertionEffect(P,K)},ct.useLayoutEffect=function(P,K){return B.H.useLayoutEffect(P,K)},ct.useMemo=function(P,K){return B.H.useMemo(P,K)},ct.useOptimistic=function(P,K){return B.H.useOptimistic(P,K)},ct.useReducer=function(P,K,ye){return B.H.useReducer(P,K,ye)},ct.useRef=function(P){return B.H.useRef(P)},ct.useState=function(P){return B.H.useState(P)},ct.useSyncExternalStore=function(P,K,ye){return B.H.useSyncExternalStore(P,K,ye)},ct.useTransition=function(){return B.H.useTransition()},ct.version="19.2.7",ct}var x_;function pp(){return x_||(x_=1,wd.exports=ay()),wd.exports}var We=pp(),Dd={exports:{}},al={},Ld={exports:{}},Nd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var S_;function sy(){return S_||(S_=1,(function(a){function e(F,H){var $=F.length;F.push(H);e:for(;0<$;){var _e=$-1>>>1,Me=F[_e];if(0<o(Me,H))F[_e]=H,F[$]=Me,$=_e;else break e}}function i(F){return F.length===0?null:F[0]}function r(F){if(F.length===0)return null;var H=F[0],$=F.pop();if($!==H){F[0]=$;e:for(var _e=0,Me=F.length,P=Me>>>1;_e<P;){var K=2*(_e+1)-1,ye=F[K],Ce=K+1,ze=F[Ce];if(0>o(ye,$))Ce<Me&&0>o(ze,ye)?(F[_e]=ze,F[Ce]=$,_e=Ce):(F[_e]=ye,F[K]=$,_e=K);else if(Ce<Me&&0>o(ze,$))F[_e]=ze,F[Ce]=$,_e=Ce;else break e}}return H}function o(F,H){var $=F.sortIndex-H.sortIndex;return $!==0?$:F.id-H.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;a.unstable_now=function(){return c.now()}}else{var u=Date,h=u.now();a.unstable_now=function(){return u.now()-h}}var m=[],d=[],g=1,_=null,v=3,x=!1,E=!1,w=!1,y=!1,M=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,z=typeof setImmediate<"u"?setImmediate:null;function R(F){for(var H=i(d);H!==null;){if(H.callback===null)r(d);else if(H.startTime<=F)r(d),H.sortIndex=H.expirationTime,e(m,H);else break;H=i(d)}}function O(F){if(w=!1,R(F),!E)if(i(m)!==null)E=!0,L||(L=!0,Y());else{var H=i(d);H!==null&&q(O,H.startTime-F)}}var L=!1,B=-1,T=5,N=-1;function X(){return y?!0:!(a.unstable_now()-N<T)}function V(){if(y=!1,L){var F=a.unstable_now();N=F;var H=!0;try{e:{E=!1,w&&(w=!1,I(B),B=-1),x=!0;var $=v;try{t:{for(R(F),_=i(m);_!==null&&!(_.expirationTime>F&&X());){var _e=_.callback;if(typeof _e=="function"){_.callback=null,v=_.priorityLevel;var Me=_e(_.expirationTime<=F);if(F=a.unstable_now(),typeof Me=="function"){_.callback=Me,R(F),H=!0;break t}_===i(m)&&r(m),R(F)}else r(m);_=i(m)}if(_!==null)H=!0;else{var P=i(d);P!==null&&q(O,P.startTime-F),H=!1}}break e}finally{_=null,v=$,x=!1}H=void 0}}finally{H?Y():L=!1}}}var Y;if(typeof z=="function")Y=function(){z(V)};else if(typeof MessageChannel<"u"){var ue=new MessageChannel,fe=ue.port2;ue.port1.onmessage=V,Y=function(){fe.postMessage(null)}}else Y=function(){M(V,0)};function q(F,H){B=M(function(){F(a.unstable_now())},H)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(F){F.callback=null},a.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<F?Math.floor(1e3/F):5},a.unstable_getCurrentPriorityLevel=function(){return v},a.unstable_next=function(F){switch(v){case 1:case 2:case 3:var H=3;break;default:H=v}var $=v;v=H;try{return F()}finally{v=$}},a.unstable_requestPaint=function(){y=!0},a.unstable_runWithPriority=function(F,H){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var $=v;v=F;try{return H()}finally{v=$}},a.unstable_scheduleCallback=function(F,H,$){var _e=a.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?_e+$:_e):$=_e,F){case 1:var Me=-1;break;case 2:Me=250;break;case 5:Me=1073741823;break;case 4:Me=1e4;break;default:Me=5e3}return Me=$+Me,F={id:g++,callback:H,priorityLevel:F,startTime:$,expirationTime:Me,sortIndex:-1},$>_e?(F.sortIndex=$,e(d,F),i(m)===null&&F===i(d)&&(w?(I(B),B=-1):w=!0,q(O,$-_e))):(F.sortIndex=Me,e(m,F),E||x||(E=!0,L||(L=!0,Y()))),F},a.unstable_shouldYield=X,a.unstable_wrapCallback=function(F){var H=v;return function(){var $=v;v=H;try{return F.apply(this,arguments)}finally{v=$}}}})(Nd)),Nd}var M_;function ry(){return M_||(M_=1,Ld.exports=sy()),Ld.exports}var Ud={exports:{}},Gn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var y_;function oy(){if(y_)return Gn;y_=1;var a=pp();function e(m){var d="https://react.dev/errors/"+m;if(1<arguments.length){d+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)d+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+d+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},o=Symbol.for("react.portal");function c(m,d,g){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:_==null?null:""+_,children:m,containerInfo:d,implementation:g}}var u=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,d){if(m==="font")return"";if(typeof d=="string")return d==="use-credentials"?d:""}return Gn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Gn.createPortal=function(m,d){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!d||d.nodeType!==1&&d.nodeType!==9&&d.nodeType!==11)throw Error(e(299));return c(m,d,null,g)},Gn.flushSync=function(m){var d=u.T,g=r.p;try{if(u.T=null,r.p=2,m)return m()}finally{u.T=d,r.p=g,r.d.f()}},Gn.preconnect=function(m,d){typeof m=="string"&&(d?(d=d.crossOrigin,d=typeof d=="string"?d==="use-credentials"?d:"":void 0):d=null,r.d.C(m,d))},Gn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},Gn.preinit=function(m,d){if(typeof m=="string"&&d&&typeof d.as=="string"){var g=d.as,_=h(g,d.crossOrigin),v=typeof d.integrity=="string"?d.integrity:void 0,x=typeof d.fetchPriority=="string"?d.fetchPriority:void 0;g==="style"?r.d.S(m,typeof d.precedence=="string"?d.precedence:void 0,{crossOrigin:_,integrity:v,fetchPriority:x}):g==="script"&&r.d.X(m,{crossOrigin:_,integrity:v,fetchPriority:x,nonce:typeof d.nonce=="string"?d.nonce:void 0})}},Gn.preinitModule=function(m,d){if(typeof m=="string")if(typeof d=="object"&&d!==null){if(d.as==null||d.as==="script"){var g=h(d.as,d.crossOrigin);r.d.M(m,{crossOrigin:g,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0})}}else d==null&&r.d.M(m)},Gn.preload=function(m,d){if(typeof m=="string"&&typeof d=="object"&&d!==null&&typeof d.as=="string"){var g=d.as,_=h(g,d.crossOrigin);r.d.L(m,g,{crossOrigin:_,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0,type:typeof d.type=="string"?d.type:void 0,fetchPriority:typeof d.fetchPriority=="string"?d.fetchPriority:void 0,referrerPolicy:typeof d.referrerPolicy=="string"?d.referrerPolicy:void 0,imageSrcSet:typeof d.imageSrcSet=="string"?d.imageSrcSet:void 0,imageSizes:typeof d.imageSizes=="string"?d.imageSizes:void 0,media:typeof d.media=="string"?d.media:void 0})}},Gn.preloadModule=function(m,d){if(typeof m=="string")if(d){var g=h(d.as,d.crossOrigin);r.d.m(m,{as:typeof d.as=="string"&&d.as!=="script"?d.as:void 0,crossOrigin:g,integrity:typeof d.integrity=="string"?d.integrity:void 0})}else r.d.m(m)},Gn.requestFormReset=function(m){r.d.r(m)},Gn.unstable_batchedUpdates=function(m,d){return m(d)},Gn.useFormState=function(m,d,g){return u.H.useFormState(m,d,g)},Gn.useFormStatus=function(){return u.H.useHostTransitionStatus()},Gn.version="19.2.7",Gn}var E_;function Jv(){if(E_)return Ud.exports;E_=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(e){console.error(e)}}return a(),Ud.exports=oy(),Ud.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var b_;function ly(){if(b_)return al;b_=1;var a=ry(),e=pp(),i=Jv();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)n+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,s=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(s=n.return),t=n.return;while(t)}return n.tag===3?s:null}function u(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function h(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(r(188))}function d(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(r(188));return n!==t?null:t}for(var s=t,l=n;;){var f=s.return;if(f===null)break;var p=f.alternate;if(p===null){if(l=f.return,l!==null){s=l;continue}break}if(f.child===p.child){for(p=f.child;p;){if(p===s)return m(f),t;if(p===l)return m(f),n;p=p.sibling}throw Error(r(188))}if(s.return!==l.return)s=f,l=p;else{for(var S=!1,C=f.child;C;){if(C===s){S=!0,s=f,l=p;break}if(C===l){S=!0,l=f,s=p;break}C=C.sibling}if(!S){for(C=p.child;C;){if(C===s){S=!0,s=p,l=f;break}if(C===l){S=!0,l=p,s=f;break}C=C.sibling}if(!S)throw Error(r(189))}}if(s.alternate!==l)throw Error(r(190))}if(s.tag!==3)throw Error(r(188));return s.stateNode.current===s?t:n}function g(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=g(t),n!==null)return n;t=t.sibling}return null}var _=Object.assign,v=Symbol.for("react.element"),x=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),w=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),M=Symbol.for("react.profiler"),I=Symbol.for("react.consumer"),z=Symbol.for("react.context"),R=Symbol.for("react.forward_ref"),O=Symbol.for("react.suspense"),L=Symbol.for("react.suspense_list"),B=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),N=Symbol.for("react.activity"),X=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function Y(t){return t===null||typeof t!="object"?null:(t=V&&t[V]||t["@@iterator"],typeof t=="function"?t:null)}var ue=Symbol.for("react.client.reference");function fe(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===ue?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case w:return"Fragment";case M:return"Profiler";case y:return"StrictMode";case O:return"Suspense";case L:return"SuspenseList";case N:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case E:return"Portal";case z:return t.displayName||"Context";case I:return(t._context.displayName||"Context")+".Consumer";case R:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case B:return n=t.displayName||null,n!==null?n:fe(t.type)||"Memo";case T:n=t._payload,t=t._init;try{return fe(t(n))}catch{}}return null}var q=Array.isArray,F=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,$={pending:!1,data:null,method:null,action:null},_e=[],Me=-1;function P(t){return{current:t}}function K(t){0>Me||(t.current=_e[Me],_e[Me]=null,Me--)}function ye(t,n){Me++,_e[Me]=t.current,t.current=n}var Ce=P(null),ze=P(null),se=P(null),be=P(null);function Te(t,n){switch(ye(se,n),ye(ze,t),ye(Ce,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?zg(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=zg(n),t=Hg(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}K(Ce),ye(Ce,t)}function qe(){K(Ce),K(ze),K(se)}function it(t){t.memoizedState!==null&&ye(be,t);var n=Ce.current,s=Hg(n,t.type);n!==s&&(ye(ze,t),ye(Ce,s))}function et(t){ze.current===t&&(K(Ce),K(ze)),be.current===t&&(K(be),$o._currentValue=$)}var qt,lt;function gt(t){if(qt===void 0)try{throw Error()}catch(s){var n=s.stack.trim().match(/\n( *(at )?)/);qt=n&&n[1]||"",lt=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+qt+t+lt}var _t=!1;function rt(t,n){if(!t||_t)return"";_t=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(n){var Ee=function(){throw Error()};if(Object.defineProperty(Ee.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Ee,[])}catch(de){var le=de}Reflect.construct(t,[],Ee)}else{try{Ee.call()}catch(de){le=de}t.call(Ee.prototype)}}else{try{throw Error()}catch(de){le=de}(Ee=t())&&typeof Ee.catch=="function"&&Ee.catch(function(){})}}catch(de){if(de&&le&&typeof de.stack=="string")return[de.stack,le.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var p=l.DetermineComponentFrameRoot(),S=p[0],C=p[1];if(S&&C){var G=S.split(`
`),ae=C.split(`
`);for(f=l=0;l<G.length&&!G[l].includes("DetermineComponentFrameRoot");)l++;for(;f<ae.length&&!ae[f].includes("DetermineComponentFrameRoot");)f++;if(l===G.length||f===ae.length)for(l=G.length-1,f=ae.length-1;1<=l&&0<=f&&G[l]!==ae[f];)f--;for(;1<=l&&0<=f;l--,f--)if(G[l]!==ae[f]){if(l!==1||f!==1)do if(l--,f--,0>f||G[l]!==ae[f]){var ve=`
`+G[l].replace(" at new "," at ");return t.displayName&&ve.includes("<anonymous>")&&(ve=ve.replace("<anonymous>",t.displayName)),ve}while(1<=l&&0<=f);break}}}finally{_t=!1,Error.prepareStackTrace=s}return(s=t?t.displayName||t.name:"")?gt(s):""}function Yt(t,n){switch(t.tag){case 26:case 27:case 5:return gt(t.type);case 16:return gt("Lazy");case 13:return t.child!==n&&n!==null?gt("Suspense Fallback"):gt("Suspense");case 19:return gt("SuspenseList");case 0:case 15:return rt(t.type,!1);case 11:return rt(t.type.render,!1);case 1:return rt(t.type,!0);case 31:return gt("Activity");default:return""}}function zt(t){try{var n="",s=null;do n+=Yt(t,s),s=t,t=t.return;while(t);return n}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var Ht=Object.prototype.hasOwnProperty,sn=a.unstable_scheduleCallback,It=a.unstable_cancelCallback,jt=a.unstable_shouldYield,j=a.unstable_requestPaint,Dt=a.unstable_now,xt=a.unstable_getCurrentPriorityLevel,U=a.unstable_ImmediatePriority,b=a.unstable_UserBlockingPriority,J=a.unstable_NormalPriority,re=a.unstable_LowPriority,pe=a.unstable_IdlePriority,Le=a.log,Oe=a.unstable_setDisableYieldValue,he=null,me=null;function De(t){if(typeof Le=="function"&&Oe(t),me&&typeof me.setStrictMode=="function")try{me.setStrictMode(he,t)}catch{}}var He=Math.clz32?Math.clz32:Ne,Ie=Math.log,ge=Math.LN2;function Ne(t){return t>>>=0,t===0?32:31-(Ie(t)/ge|0)|0}var Ue=256,Ye=262144,k=4194304;function Ae(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function ce(t,n,s){var l=t.pendingLanes;if(l===0)return 0;var f=0,p=t.suspendedLanes,S=t.pingedLanes;t=t.warmLanes;var C=l&134217727;return C!==0?(l=C&~p,l!==0?f=Ae(l):(S&=C,S!==0?f=Ae(S):s||(s=C&~t,s!==0&&(f=Ae(s))))):(C=l&~p,C!==0?f=Ae(C):S!==0?f=Ae(S):s||(s=l&~t,s!==0&&(f=Ae(s)))),f===0?0:n!==0&&n!==f&&(n&p)===0&&(p=f&-f,s=n&-n,p>=s||p===32&&(s&4194048)!==0)?n:f}function Re(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function we(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function xe(){var t=k;return k<<=1,(k&62914560)===0&&(k=4194304),t}function Ke(t){for(var n=[],s=0;31>s;s++)n.push(t);return n}function Ge(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Ft(t,n,s,l,f,p){var S=t.pendingLanes;t.pendingLanes=s,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=s,t.entangledLanes&=s,t.errorRecoveryDisabledLanes&=s,t.shellSuspendCounter=0;var C=t.entanglements,G=t.expirationTimes,ae=t.hiddenUpdates;for(s=S&~s;0<s;){var ve=31-He(s),Ee=1<<ve;C[ve]=0,G[ve]=-1;var le=ae[ve];if(le!==null)for(ae[ve]=null,ve=0;ve<le.length;ve++){var de=le[ve];de!==null&&(de.lane&=-536870913)}s&=~Ee}l!==0&&Lt(t,l,0),p!==0&&f===0&&t.tag!==0&&(t.suspendedLanes|=p&~(S&~n))}function Lt(t,n,s){t.pendingLanes|=n,t.suspendedLanes&=~n;var l=31-He(n);t.entangledLanes|=n,t.entanglements[l]=t.entanglements[l]|1073741824|s&261930}function zn(t,n){var s=t.entangledLanes|=n;for(t=t.entanglements;s;){var l=31-He(s),f=1<<l;f&n|t[l]&n&&(t[l]|=n),s&=~f}}function Hn(t,n){var s=n&-n;return s=(s&42)!==0?1:Wa(s),(s&(t.suspendedLanes|n))!==0?0:s}function Wa(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Cs(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Si(){var t=H.p;return t!==0?t:(t=window.event,t===void 0?32:c_(t.type))}function Wn(t,n){var s=H.p;try{return H.p=t,n()}finally{H.p=s}}var Mi=Math.random().toString(36).slice(2),cn="__reactFiber$"+Mi,Rn="__reactProps$"+Mi,qn="__reactContainer$"+Mi,Jn="__reactEvents$"+Mi,ws="__reactListeners$"+Mi,qa="__reactHandles$"+Mi,pa="__reactResources$"+Mi,Bi="__reactMarker$"+Mi;function $n(t){delete t[cn],delete t[Rn],delete t[Jn],delete t[ws],delete t[qa]}function yi(t){var n=t[cn];if(n)return n;for(var s=t.parentNode;s;){if(n=s[qn]||s[cn]){if(s=n.alternate,n.child!==null||s!==null&&s.child!==null)for(t=Yg(t);t!==null;){if(s=t[cn])return s;t=Yg(t)}return n}t=s,s=t.parentNode}return null}function zi(t){if(t=t[cn]||t[qn]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function Ji(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function Hi(t){var n=t[pa];return n||(n=t[pa]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function rn(t){t[Bi]=!0}var ma=new Set,A={};function Z(t,n){oe(t,n),oe(t+"Capture",n)}function oe(t,n){for(A[t]=n,t=0;t<n.length;t++)ma.add(n[t])}var ie=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),te={},Fe={};function je(t){return Ht.call(Fe,t)?!0:Ht.call(te,t)?!1:ie.test(t)?Fe[t]=!0:(te[t]=!0,!1)}function Pe(t,n,s){if(je(n))if(s===null)t.removeAttribute(n);else{switch(typeof s){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var l=n.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+s)}}function Qe(t,n,s){if(s===null)t.removeAttribute(n);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+s)}}function Ze(t,n,s,l){if(l===null)t.removeAttribute(s);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(s);return}t.setAttributeNS(n,s,""+l)}}function tt(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ve(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Xe(t,n,s){var l=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var f=l.get,p=l.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return f.call(this)},set:function(S){s=""+S,p.call(this,S)}}),Object.defineProperty(t,n,{enumerable:l.enumerable}),{getValue:function(){return s},setValue:function(S){s=""+S},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function mt(t){if(!t._valueTracker){var n=Ve(t)?"checked":"value";t._valueTracker=Xe(t,n,""+t[n])}}function yt(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var s=n.getValue(),l="";return t&&(l=Ve(t)?t.checked?"true":"false":t.value),t=l,t!==s?(n.setValue(t),!0):!1}function Et(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var ft=/[\n"\\]/g;function bt(t){return t.replace(ft,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Be(t,n,s,l,f,p,S,C){t.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?t.type=S:t.removeAttribute("type"),n!=null?S==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+tt(n)):t.value!==""+tt(n)&&(t.value=""+tt(n)):S!=="submit"&&S!=="reset"||t.removeAttribute("value"),n!=null?ot(t,S,tt(n)):s!=null?ot(t,S,tt(s)):l!=null&&t.removeAttribute("value"),f==null&&p!=null&&(t.defaultChecked=!!p),f!=null&&(t.checked=f&&typeof f!="function"&&typeof f!="symbol"),C!=null&&typeof C!="function"&&typeof C!="symbol"&&typeof C!="boolean"?t.name=""+tt(C):t.removeAttribute("name")}function un(t,n,s,l,f,p,S,C){if(p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"&&(t.type=p),n!=null||s!=null){if(!(p!=="submit"&&p!=="reset"||n!=null)){mt(t);return}s=s!=null?""+tt(s):"",n=n!=null?""+tt(n):s,C||n===t.value||(t.value=n),t.defaultValue=n}l=l??f,l=typeof l!="function"&&typeof l!="symbol"&&!!l,t.checked=C?t.checked:!!l,t.defaultChecked=!!l,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(t.name=S),mt(t)}function ot(t,n,s){n==="number"&&Et(t.ownerDocument)===t||t.defaultValue===""+s||(t.defaultValue=""+s)}function fn(t,n,s,l){if(t=t.options,n){n={};for(var f=0;f<s.length;f++)n["$"+s[f]]=!0;for(s=0;s<t.length;s++)f=n.hasOwnProperty("$"+t[s].value),t[s].selected!==f&&(t[s].selected=f),f&&l&&(t[s].defaultSelected=!0)}else{for(s=""+tt(s),n=null,f=0;f<t.length;f++){if(t[f].value===s){t[f].selected=!0,l&&(t[f].defaultSelected=!0);return}n!==null||t[f].disabled||(n=t[f])}n!==null&&(n.selected=!0)}}function li(t,n,s){if(n!=null&&(n=""+tt(n),n!==t.value&&(t.value=n),s==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=s!=null?""+tt(s):""}function Gi(t,n,s,l){if(n==null){if(l!=null){if(s!=null)throw Error(r(92));if(q(l)){if(1<l.length)throw Error(r(93));l=l[0]}s=l}s==null&&(s=""),n=s}s=tt(n),t.defaultValue=s,l=t.textContent,l===s&&l!==""&&l!==null&&(t.value=l),mt(t)}function ci(t,n){if(n){var s=t.firstChild;if(s&&s===t.lastChild&&s.nodeType===3){s.nodeValue=n;return}}t.textContent=n}var Vt=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function on(t,n,s){var l=n.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?l?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":l?t.setProperty(n,s):typeof s!="number"||s===0||Vt.has(n)?n==="float"?t.cssFloat=s:t[n]=(""+s).trim():t[n]=s+"px"}function Vi(t,n,s){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,s!=null){for(var l in s)!s.hasOwnProperty(l)||n!=null&&n.hasOwnProperty(l)||(l.indexOf("--")===0?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="");for(var f in n)l=n[f],n.hasOwnProperty(f)&&s[f]!==l&&on(t,f,l)}else for(var p in n)n.hasOwnProperty(p)&&on(t,p,n[p])}function Gt(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var $i=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ya=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ds(t){return Ya.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function ga(){}var bu=null;function Tu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var lr=null,cr=null;function Bp(t){var n=zi(t);if(n&&(t=n.stateNode)){var s=t[Rn]||null;e:switch(t=n.stateNode,n.type){case"input":if(Be(t,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),n=s.name,s.type==="radio"&&n!=null){for(s=t;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+bt(""+n)+'"][type="radio"]'),n=0;n<s.length;n++){var l=s[n];if(l!==t&&l.form===t.form){var f=l[Rn]||null;if(!f)throw Error(r(90));Be(l,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(n=0;n<s.length;n++)l=s[n],l.form===t.form&&yt(l)}break e;case"textarea":li(t,s.value,s.defaultValue);break e;case"select":n=s.value,n!=null&&fn(t,!!s.multiple,n,!1)}}}var Au=!1;function zp(t,n,s){if(Au)return t(n,s);Au=!0;try{var l=t(n);return l}finally{if(Au=!1,(lr!==null||cr!==null)&&(fc(),lr&&(n=lr,t=cr,cr=lr=null,Bp(n),t)))for(n=0;n<t.length;n++)Bp(t[n])}}function go(t,n){var s=t.stateNode;if(s===null)return null;var l=s[Rn]||null;if(l===null)return null;s=l[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(s&&typeof s!="function")throw Error(r(231,n,typeof s));return s}var _a=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ru=!1;if(_a)try{var _o={};Object.defineProperty(_o,"passive",{get:function(){Ru=!0}}),window.addEventListener("test",_o,_o),window.removeEventListener("test",_o,_o)}catch{Ru=!1}var ja=null,Cu=null,Tl=null;function Hp(){if(Tl)return Tl;var t,n=Cu,s=n.length,l,f="value"in ja?ja.value:ja.textContent,p=f.length;for(t=0;t<s&&n[t]===f[t];t++);var S=s-t;for(l=1;l<=S&&n[s-l]===f[p-l];l++);return Tl=f.slice(t,1<l?1-l:void 0)}function Al(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Rl(){return!0}function Gp(){return!1}function ei(t){function n(s,l,f,p,S){this._reactName=s,this._targetInst=f,this.type=l,this.nativeEvent=p,this.target=S,this.currentTarget=null;for(var C in t)t.hasOwnProperty(C)&&(s=t[C],this[C]=s?s(p):p[C]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?Rl:Gp,this.isPropagationStopped=Gp,this}return _(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=Rl)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=Rl)},persist:function(){},isPersistent:Rl}),n}var Ls={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Cl=ei(Ls),vo=_({},Ls,{view:0,detail:0}),eS=ei(vo),wu,Du,xo,wl=_({},vo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Nu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==xo&&(xo&&t.type==="mousemove"?(wu=t.screenX-xo.screenX,Du=t.screenY-xo.screenY):Du=wu=0,xo=t),wu)},movementY:function(t){return"movementY"in t?t.movementY:Du}}),Vp=ei(wl),tS=_({},wl,{dataTransfer:0}),nS=ei(tS),iS=_({},vo,{relatedTarget:0}),Lu=ei(iS),aS=_({},Ls,{animationName:0,elapsedTime:0,pseudoElement:0}),sS=ei(aS),rS=_({},Ls,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),oS=ei(rS),lS=_({},Ls,{data:0}),kp=ei(lS),cS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},uS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},fS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function dS(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=fS[t])?!!n[t]:!1}function Nu(){return dS}var hS=_({},vo,{key:function(t){if(t.key){var n=cS[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Al(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?uS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Nu,charCode:function(t){return t.type==="keypress"?Al(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Al(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),pS=ei(hS),mS=_({},wl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Xp=ei(mS),gS=_({},vo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Nu}),_S=ei(gS),vS=_({},Ls,{propertyName:0,elapsedTime:0,pseudoElement:0}),xS=ei(vS),SS=_({},wl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),MS=ei(SS),yS=_({},Ls,{newState:0,oldState:0}),ES=ei(yS),bS=[9,13,27,32],Uu=_a&&"CompositionEvent"in window,So=null;_a&&"documentMode"in document&&(So=document.documentMode);var TS=_a&&"TextEvent"in window&&!So,Wp=_a&&(!Uu||So&&8<So&&11>=So),qp=" ",Yp=!1;function jp(t,n){switch(t){case"keyup":return bS.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Zp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ur=!1;function AS(t,n){switch(t){case"compositionend":return Zp(n);case"keypress":return n.which!==32?null:(Yp=!0,qp);case"textInput":return t=n.data,t===qp&&Yp?null:t;default:return null}}function RS(t,n){if(ur)return t==="compositionend"||!Uu&&jp(t,n)?(t=Hp(),Tl=Cu=ja=null,ur=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Wp&&n.locale!=="ko"?null:n.data;default:return null}}var CS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Kp(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!CS[t.type]:n==="textarea"}function Qp(t,n,s,l){lr?cr?cr.push(l):cr=[l]:lr=l,n=vc(n,"onChange"),0<n.length&&(s=new Cl("onChange","change",null,s,l),t.push({event:s,listeners:n}))}var Mo=null,yo=null;function wS(t){Ug(t,0)}function Dl(t){var n=Ji(t);if(yt(n))return t}function Jp(t,n){if(t==="change")return n}var $p=!1;if(_a){var Ou;if(_a){var Pu="oninput"in document;if(!Pu){var em=document.createElement("div");em.setAttribute("oninput","return;"),Pu=typeof em.oninput=="function"}Ou=Pu}else Ou=!1;$p=Ou&&(!document.documentMode||9<document.documentMode)}function tm(){Mo&&(Mo.detachEvent("onpropertychange",nm),yo=Mo=null)}function nm(t){if(t.propertyName==="value"&&Dl(yo)){var n=[];Qp(n,yo,t,Tu(t)),zp(wS,n)}}function DS(t,n,s){t==="focusin"?(tm(),Mo=n,yo=s,Mo.attachEvent("onpropertychange",nm)):t==="focusout"&&tm()}function LS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Dl(yo)}function NS(t,n){if(t==="click")return Dl(n)}function US(t,n){if(t==="input"||t==="change")return Dl(n)}function OS(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var ui=typeof Object.is=="function"?Object.is:OS;function Eo(t,n){if(ui(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var s=Object.keys(t),l=Object.keys(n);if(s.length!==l.length)return!1;for(l=0;l<s.length;l++){var f=s[l];if(!Ht.call(n,f)||!ui(t[f],n[f]))return!1}return!0}function im(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function am(t,n){var s=im(t);t=0;for(var l;s;){if(s.nodeType===3){if(l=t+s.textContent.length,t<=n&&l>=n)return{node:s,offset:n-t};t=l}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=im(s)}}function sm(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?sm(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function rm(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=Et(t.document);n instanceof t.HTMLIFrameElement;){try{var s=typeof n.contentWindow.location.href=="string"}catch{s=!1}if(s)t=n.contentWindow;else break;n=Et(t.document)}return n}function Iu(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var PS=_a&&"documentMode"in document&&11>=document.documentMode,fr=null,Fu=null,bo=null,Bu=!1;function om(t,n,s){var l=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;Bu||fr==null||fr!==Et(l)||(l=fr,"selectionStart"in l&&Iu(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),bo&&Eo(bo,l)||(bo=l,l=vc(Fu,"onSelect"),0<l.length&&(n=new Cl("onSelect","select",null,n,s),t.push({event:n,listeners:l}),n.target=fr)))}function Ns(t,n){var s={};return s[t.toLowerCase()]=n.toLowerCase(),s["Webkit"+t]="webkit"+n,s["Moz"+t]="moz"+n,s}var dr={animationend:Ns("Animation","AnimationEnd"),animationiteration:Ns("Animation","AnimationIteration"),animationstart:Ns("Animation","AnimationStart"),transitionrun:Ns("Transition","TransitionRun"),transitionstart:Ns("Transition","TransitionStart"),transitioncancel:Ns("Transition","TransitionCancel"),transitionend:Ns("Transition","TransitionEnd")},zu={},lm={};_a&&(lm=document.createElement("div").style,"AnimationEvent"in window||(delete dr.animationend.animation,delete dr.animationiteration.animation,delete dr.animationstart.animation),"TransitionEvent"in window||delete dr.transitionend.transition);function Us(t){if(zu[t])return zu[t];if(!dr[t])return t;var n=dr[t],s;for(s in n)if(n.hasOwnProperty(s)&&s in lm)return zu[t]=n[s];return t}var cm=Us("animationend"),um=Us("animationiteration"),fm=Us("animationstart"),IS=Us("transitionrun"),FS=Us("transitionstart"),BS=Us("transitioncancel"),dm=Us("transitionend"),hm=new Map,Hu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Hu.push("scrollEnd");function ki(t,n){hm.set(t,n),Z(n,[t])}var Ll=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},Ei=[],hr=0,Gu=0;function Nl(){for(var t=hr,n=Gu=hr=0;n<t;){var s=Ei[n];Ei[n++]=null;var l=Ei[n];Ei[n++]=null;var f=Ei[n];Ei[n++]=null;var p=Ei[n];if(Ei[n++]=null,l!==null&&f!==null){var S=l.pending;S===null?f.next=f:(f.next=S.next,S.next=f),l.pending=f}p!==0&&pm(s,f,p)}}function Ul(t,n,s,l){Ei[hr++]=t,Ei[hr++]=n,Ei[hr++]=s,Ei[hr++]=l,Gu|=l,t.lanes|=l,t=t.alternate,t!==null&&(t.lanes|=l)}function Vu(t,n,s,l){return Ul(t,n,s,l),Ol(t)}function Os(t,n){return Ul(t,null,null,n),Ol(t)}function pm(t,n,s){t.lanes|=s;var l=t.alternate;l!==null&&(l.lanes|=s);for(var f=!1,p=t.return;p!==null;)p.childLanes|=s,l=p.alternate,l!==null&&(l.childLanes|=s),p.tag===22&&(t=p.stateNode,t===null||t._visibility&1||(f=!0)),t=p,p=p.return;return t.tag===3?(p=t.stateNode,f&&n!==null&&(f=31-He(s),t=p.hiddenUpdates,l=t[f],l===null?t[f]=[n]:l.push(n),n.lane=s|536870912),p):null}function Ol(t){if(50<qo)throw qo=0,Jf=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var pr={};function zS(t,n,s,l){this.tag=t,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function fi(t,n,s,l){return new zS(t,n,s,l)}function ku(t){return t=t.prototype,!(!t||!t.isReactComponent)}function va(t,n){var s=t.alternate;return s===null?(s=fi(t.tag,n,t.key,t.mode),s.elementType=t.elementType,s.type=t.type,s.stateNode=t.stateNode,s.alternate=t,t.alternate=s):(s.pendingProps=n,s.type=t.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=t.flags&65011712,s.childLanes=t.childLanes,s.lanes=t.lanes,s.child=t.child,s.memoizedProps=t.memoizedProps,s.memoizedState=t.memoizedState,s.updateQueue=t.updateQueue,n=t.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},s.sibling=t.sibling,s.index=t.index,s.ref=t.ref,s.refCleanup=t.refCleanup,s}function mm(t,n){t.flags&=65011714;var s=t.alternate;return s===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=s.childLanes,t.lanes=s.lanes,t.child=s.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=s.memoizedProps,t.memoizedState=s.memoizedState,t.updateQueue=s.updateQueue,t.type=s.type,n=s.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function Pl(t,n,s,l,f,p){var S=0;if(l=t,typeof t=="function")ku(t)&&(S=1);else if(typeof t=="string")S=XM(t,s,Ce.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case N:return t=fi(31,s,n,f),t.elementType=N,t.lanes=p,t;case w:return Ps(s.children,f,p,n);case y:S=8,f|=24;break;case M:return t=fi(12,s,n,f|2),t.elementType=M,t.lanes=p,t;case O:return t=fi(13,s,n,f),t.elementType=O,t.lanes=p,t;case L:return t=fi(19,s,n,f),t.elementType=L,t.lanes=p,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case z:S=10;break e;case I:S=9;break e;case R:S=11;break e;case B:S=14;break e;case T:S=16,l=null;break e}S=29,s=Error(r(130,t===null?"null":typeof t,"")),l=null}return n=fi(S,s,n,f),n.elementType=t,n.type=l,n.lanes=p,n}function Ps(t,n,s,l){return t=fi(7,t,l,n),t.lanes=s,t}function Xu(t,n,s){return t=fi(6,t,null,n),t.lanes=s,t}function gm(t){var n=fi(18,null,null,0);return n.stateNode=t,n}function Wu(t,n,s){return n=fi(4,t.children!==null?t.children:[],t.key,n),n.lanes=s,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var _m=new WeakMap;function bi(t,n){if(typeof t=="object"&&t!==null){var s=_m.get(t);return s!==void 0?s:(n={value:t,source:n,stack:zt(n)},_m.set(t,n),n)}return{value:t,source:n,stack:zt(n)}}var mr=[],gr=0,Il=null,To=0,Ti=[],Ai=0,Za=null,ea=1,ta="";function xa(t,n){mr[gr++]=To,mr[gr++]=Il,Il=t,To=n}function vm(t,n,s){Ti[Ai++]=ea,Ti[Ai++]=ta,Ti[Ai++]=Za,Za=t;var l=ea;t=ta;var f=32-He(l)-1;l&=~(1<<f),s+=1;var p=32-He(n)+f;if(30<p){var S=f-f%5;p=(l&(1<<S)-1).toString(32),l>>=S,f-=S,ea=1<<32-He(n)+f|s<<f|l,ta=p+t}else ea=1<<p|s<<f|l,ta=t}function qu(t){t.return!==null&&(xa(t,1),vm(t,1,0))}function Yu(t){for(;t===Il;)Il=mr[--gr],mr[gr]=null,To=mr[--gr],mr[gr]=null;for(;t===Za;)Za=Ti[--Ai],Ti[Ai]=null,ta=Ti[--Ai],Ti[Ai]=null,ea=Ti[--Ai],Ti[Ai]=null}function xm(t,n){Ti[Ai++]=ea,Ti[Ai++]=ta,Ti[Ai++]=Za,ea=n.id,ta=n.overflow,Za=t}var Un=null,en=null,Rt=!1,Ka=null,Ri=!1,ju=Error(r(519));function Qa(t){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Ao(bi(n,t)),ju}function Sm(t){var n=t.stateNode,s=t.type,l=t.memoizedProps;switch(n[cn]=t,n[Rn]=l,s){case"dialog":Mt("cancel",n),Mt("close",n);break;case"iframe":case"object":case"embed":Mt("load",n);break;case"video":case"audio":for(s=0;s<jo.length;s++)Mt(jo[s],n);break;case"source":Mt("error",n);break;case"img":case"image":case"link":Mt("error",n),Mt("load",n);break;case"details":Mt("toggle",n);break;case"input":Mt("invalid",n),un(n,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":Mt("invalid",n);break;case"textarea":Mt("invalid",n),Gi(n,l.value,l.defaultValue,l.children)}s=l.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||n.textContent===""+s||l.suppressHydrationWarning===!0||Fg(n.textContent,s)?(l.popover!=null&&(Mt("beforetoggle",n),Mt("toggle",n)),l.onScroll!=null&&Mt("scroll",n),l.onScrollEnd!=null&&Mt("scrollend",n),l.onClick!=null&&(n.onclick=ga),n=!0):n=!1,n||Qa(t,!0)}function Mm(t){for(Un=t.return;Un;)switch(Un.tag){case 5:case 31:case 13:Ri=!1;return;case 27:case 3:Ri=!0;return;default:Un=Un.return}}function _r(t){if(t!==Un)return!1;if(!Rt)return Mm(t),Rt=!0,!1;var n=t.tag,s;if((s=n!==3&&n!==27)&&((s=n===5)&&(s=t.type,s=!(s!=="form"&&s!=="button")||hd(t.type,t.memoizedProps)),s=!s),s&&en&&Qa(t),Mm(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));en=qg(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));en=qg(t)}else n===27?(n=en,fs(t.type)?(t=vd,vd=null,en=t):en=n):en=Un?wi(t.stateNode.nextSibling):null;return!0}function Is(){en=Un=null,Rt=!1}function Zu(){var t=Ka;return t!==null&&(ai===null?ai=t:ai.push.apply(ai,t),Ka=null),t}function Ao(t){Ka===null?Ka=[t]:Ka.push(t)}var Ku=P(null),Fs=null,Sa=null;function Ja(t,n,s){ye(Ku,n._currentValue),n._currentValue=s}function Ma(t){t._currentValue=Ku.current,K(Ku)}function Qu(t,n,s){for(;t!==null;){var l=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,l!==null&&(l.childLanes|=n)):l!==null&&(l.childLanes&n)!==n&&(l.childLanes|=n),t===s)break;t=t.return}}function Ju(t,n,s,l){var f=t.child;for(f!==null&&(f.return=t);f!==null;){var p=f.dependencies;if(p!==null){var S=f.child;p=p.firstContext;e:for(;p!==null;){var C=p;p=f;for(var G=0;G<n.length;G++)if(C.context===n[G]){p.lanes|=s,C=p.alternate,C!==null&&(C.lanes|=s),Qu(p.return,s,t),l||(S=null);break e}p=C.next}}else if(f.tag===18){if(S=f.return,S===null)throw Error(r(341));S.lanes|=s,p=S.alternate,p!==null&&(p.lanes|=s),Qu(S,s,t),S=null}else S=f.child;if(S!==null)S.return=f;else for(S=f;S!==null;){if(S===t){S=null;break}if(f=S.sibling,f!==null){f.return=S.return,S=f;break}S=S.return}f=S}}function vr(t,n,s,l){t=null;for(var f=n,p=!1;f!==null;){if(!p){if((f.flags&524288)!==0)p=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var S=f.alternate;if(S===null)throw Error(r(387));if(S=S.memoizedProps,S!==null){var C=f.type;ui(f.pendingProps.value,S.value)||(t!==null?t.push(C):t=[C])}}else if(f===be.current){if(S=f.alternate,S===null)throw Error(r(387));S.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(t!==null?t.push($o):t=[$o])}f=f.return}t!==null&&Ju(n,t,s,l),n.flags|=262144}function Fl(t){for(t=t.firstContext;t!==null;){if(!ui(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Bs(t){Fs=t,Sa=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function On(t){return ym(Fs,t)}function Bl(t,n){return Fs===null&&Bs(t),ym(t,n)}function ym(t,n){var s=n._currentValue;if(n={context:n,memoizedValue:s,next:null},Sa===null){if(t===null)throw Error(r(308));Sa=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Sa=Sa.next=n;return s}var HS=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(s,l){t.push(l)}};this.abort=function(){n.aborted=!0,t.forEach(function(s){return s()})}},GS=a.unstable_scheduleCallback,VS=a.unstable_NormalPriority,Sn={$$typeof:z,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function $u(){return{controller:new HS,data:new Map,refCount:0}}function Ro(t){t.refCount--,t.refCount===0&&GS(VS,function(){t.controller.abort()})}var Co=null,ef=0,xr=0,Sr=null;function kS(t,n){if(Co===null){var s=Co=[];ef=0,xr=ad(),Sr={status:"pending",value:void 0,then:function(l){s.push(l)}}}return ef++,n.then(Em,Em),n}function Em(){if(--ef===0&&Co!==null){Sr!==null&&(Sr.status="fulfilled");var t=Co;Co=null,xr=0,Sr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function XS(t,n){var s=[],l={status:"pending",value:null,reason:null,then:function(f){s.push(f)}};return t.then(function(){l.status="fulfilled",l.value=n;for(var f=0;f<s.length;f++)(0,s[f])(n)},function(f){for(l.status="rejected",l.reason=f,f=0;f<s.length;f++)(0,s[f])(void 0)}),l}var bm=F.S;F.S=function(t,n){og=Dt(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&kS(t,n),bm!==null&&bm(t,n)};var zs=P(null);function tf(){var t=zs.current;return t!==null?t:Jt.pooledCache}function zl(t,n){n===null?ye(zs,zs.current):ye(zs,n.pool)}function Tm(){var t=tf();return t===null?null:{parent:Sn._currentValue,pool:t}}var Mr=Error(r(460)),nf=Error(r(474)),Hl=Error(r(542)),Gl={then:function(){}};function Am(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Rm(t,n,s){switch(s=t[s],s===void 0?t.push(n):s!==n&&(n.then(ga,ga),n=s),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,wm(t),t;default:if(typeof n.status=="string")n.then(ga,ga);else{if(t=Jt,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(l){if(n.status==="pending"){var f=n;f.status="fulfilled",f.value=l}},function(l){if(n.status==="pending"){var f=n;f.status="rejected",f.reason=l}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,wm(t),t}throw Gs=n,Mr}}function Hs(t){try{var n=t._init;return n(t._payload)}catch(s){throw s!==null&&typeof s=="object"&&typeof s.then=="function"?(Gs=s,Mr):s}}var Gs=null;function Cm(){if(Gs===null)throw Error(r(459));var t=Gs;return Gs=null,t}function wm(t){if(t===Mr||t===Hl)throw Error(r(483))}var yr=null,wo=0;function Vl(t){var n=wo;return wo+=1,yr===null&&(yr=[]),Rm(yr,t,n)}function Do(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function kl(t,n){throw n.$$typeof===v?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Dm(t){function n(Q,W){if(t){var ne=Q.deletions;ne===null?(Q.deletions=[W],Q.flags|=16):ne.push(W)}}function s(Q,W){if(!t)return null;for(;W!==null;)n(Q,W),W=W.sibling;return null}function l(Q){for(var W=new Map;Q!==null;)Q.key!==null?W.set(Q.key,Q):W.set(Q.index,Q),Q=Q.sibling;return W}function f(Q,W){return Q=va(Q,W),Q.index=0,Q.sibling=null,Q}function p(Q,W,ne){return Q.index=ne,t?(ne=Q.alternate,ne!==null?(ne=ne.index,ne<W?(Q.flags|=67108866,W):ne):(Q.flags|=67108866,W)):(Q.flags|=1048576,W)}function S(Q){return t&&Q.alternate===null&&(Q.flags|=67108866),Q}function C(Q,W,ne,Se){return W===null||W.tag!==6?(W=Xu(ne,Q.mode,Se),W.return=Q,W):(W=f(W,ne),W.return=Q,W)}function G(Q,W,ne,Se){var nt=ne.type;return nt===w?ve(Q,W,ne.props.children,Se,ne.key):W!==null&&(W.elementType===nt||typeof nt=="object"&&nt!==null&&nt.$$typeof===T&&Hs(nt)===W.type)?(W=f(W,ne.props),Do(W,ne),W.return=Q,W):(W=Pl(ne.type,ne.key,ne.props,null,Q.mode,Se),Do(W,ne),W.return=Q,W)}function ae(Q,W,ne,Se){return W===null||W.tag!==4||W.stateNode.containerInfo!==ne.containerInfo||W.stateNode.implementation!==ne.implementation?(W=Wu(ne,Q.mode,Se),W.return=Q,W):(W=f(W,ne.children||[]),W.return=Q,W)}function ve(Q,W,ne,Se,nt){return W===null||W.tag!==7?(W=Ps(ne,Q.mode,Se,nt),W.return=Q,W):(W=f(W,ne),W.return=Q,W)}function Ee(Q,W,ne){if(typeof W=="string"&&W!==""||typeof W=="number"||typeof W=="bigint")return W=Xu(""+W,Q.mode,ne),W.return=Q,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case x:return ne=Pl(W.type,W.key,W.props,null,Q.mode,ne),Do(ne,W),ne.return=Q,ne;case E:return W=Wu(W,Q.mode,ne),W.return=Q,W;case T:return W=Hs(W),Ee(Q,W,ne)}if(q(W)||Y(W))return W=Ps(W,Q.mode,ne,null),W.return=Q,W;if(typeof W.then=="function")return Ee(Q,Vl(W),ne);if(W.$$typeof===z)return Ee(Q,Bl(Q,W),ne);kl(Q,W)}return null}function le(Q,W,ne,Se){var nt=W!==null?W.key:null;if(typeof ne=="string"&&ne!==""||typeof ne=="number"||typeof ne=="bigint")return nt!==null?null:C(Q,W,""+ne,Se);if(typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case x:return ne.key===nt?G(Q,W,ne,Se):null;case E:return ne.key===nt?ae(Q,W,ne,Se):null;case T:return ne=Hs(ne),le(Q,W,ne,Se)}if(q(ne)||Y(ne))return nt!==null?null:ve(Q,W,ne,Se,null);if(typeof ne.then=="function")return le(Q,W,Vl(ne),Se);if(ne.$$typeof===z)return le(Q,W,Bl(Q,ne),Se);kl(Q,ne)}return null}function de(Q,W,ne,Se,nt){if(typeof Se=="string"&&Se!==""||typeof Se=="number"||typeof Se=="bigint")return Q=Q.get(ne)||null,C(W,Q,""+Se,nt);if(typeof Se=="object"&&Se!==null){switch(Se.$$typeof){case x:return Q=Q.get(Se.key===null?ne:Se.key)||null,G(W,Q,Se,nt);case E:return Q=Q.get(Se.key===null?ne:Se.key)||null,ae(W,Q,Se,nt);case T:return Se=Hs(Se),de(Q,W,ne,Se,nt)}if(q(Se)||Y(Se))return Q=Q.get(ne)||null,ve(W,Q,Se,nt,null);if(typeof Se.then=="function")return de(Q,W,ne,Vl(Se),nt);if(Se.$$typeof===z)return de(Q,W,ne,Bl(W,Se),nt);kl(W,Se)}return null}function Je(Q,W,ne,Se){for(var nt=null,Ut=null,$e=W,ht=W=0,At=null;$e!==null&&ht<ne.length;ht++){$e.index>ht?(At=$e,$e=null):At=$e.sibling;var Ot=le(Q,$e,ne[ht],Se);if(Ot===null){$e===null&&($e=At);break}t&&$e&&Ot.alternate===null&&n(Q,$e),W=p(Ot,W,ht),Ut===null?nt=Ot:Ut.sibling=Ot,Ut=Ot,$e=At}if(ht===ne.length)return s(Q,$e),Rt&&xa(Q,ht),nt;if($e===null){for(;ht<ne.length;ht++)$e=Ee(Q,ne[ht],Se),$e!==null&&(W=p($e,W,ht),Ut===null?nt=$e:Ut.sibling=$e,Ut=$e);return Rt&&xa(Q,ht),nt}for($e=l($e);ht<ne.length;ht++)At=de($e,Q,ht,ne[ht],Se),At!==null&&(t&&At.alternate!==null&&$e.delete(At.key===null?ht:At.key),W=p(At,W,ht),Ut===null?nt=At:Ut.sibling=At,Ut=At);return t&&$e.forEach(function(gs){return n(Q,gs)}),Rt&&xa(Q,ht),nt}function at(Q,W,ne,Se){if(ne==null)throw Error(r(151));for(var nt=null,Ut=null,$e=W,ht=W=0,At=null,Ot=ne.next();$e!==null&&!Ot.done;ht++,Ot=ne.next()){$e.index>ht?(At=$e,$e=null):At=$e.sibling;var gs=le(Q,$e,Ot.value,Se);if(gs===null){$e===null&&($e=At);break}t&&$e&&gs.alternate===null&&n(Q,$e),W=p(gs,W,ht),Ut===null?nt=gs:Ut.sibling=gs,Ut=gs,$e=At}if(Ot.done)return s(Q,$e),Rt&&xa(Q,ht),nt;if($e===null){for(;!Ot.done;ht++,Ot=ne.next())Ot=Ee(Q,Ot.value,Se),Ot!==null&&(W=p(Ot,W,ht),Ut===null?nt=Ot:Ut.sibling=Ot,Ut=Ot);return Rt&&xa(Q,ht),nt}for($e=l($e);!Ot.done;ht++,Ot=ne.next())Ot=de($e,Q,ht,Ot.value,Se),Ot!==null&&(t&&Ot.alternate!==null&&$e.delete(Ot.key===null?ht:Ot.key),W=p(Ot,W,ht),Ut===null?nt=Ot:Ut.sibling=Ot,Ut=Ot);return t&&$e.forEach(function(ty){return n(Q,ty)}),Rt&&xa(Q,ht),nt}function Qt(Q,W,ne,Se){if(typeof ne=="object"&&ne!==null&&ne.type===w&&ne.key===null&&(ne=ne.props.children),typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case x:e:{for(var nt=ne.key;W!==null;){if(W.key===nt){if(nt=ne.type,nt===w){if(W.tag===7){s(Q,W.sibling),Se=f(W,ne.props.children),Se.return=Q,Q=Se;break e}}else if(W.elementType===nt||typeof nt=="object"&&nt!==null&&nt.$$typeof===T&&Hs(nt)===W.type){s(Q,W.sibling),Se=f(W,ne.props),Do(Se,ne),Se.return=Q,Q=Se;break e}s(Q,W);break}else n(Q,W);W=W.sibling}ne.type===w?(Se=Ps(ne.props.children,Q.mode,Se,ne.key),Se.return=Q,Q=Se):(Se=Pl(ne.type,ne.key,ne.props,null,Q.mode,Se),Do(Se,ne),Se.return=Q,Q=Se)}return S(Q);case E:e:{for(nt=ne.key;W!==null;){if(W.key===nt)if(W.tag===4&&W.stateNode.containerInfo===ne.containerInfo&&W.stateNode.implementation===ne.implementation){s(Q,W.sibling),Se=f(W,ne.children||[]),Se.return=Q,Q=Se;break e}else{s(Q,W);break}else n(Q,W);W=W.sibling}Se=Wu(ne,Q.mode,Se),Se.return=Q,Q=Se}return S(Q);case T:return ne=Hs(ne),Qt(Q,W,ne,Se)}if(q(ne))return Je(Q,W,ne,Se);if(Y(ne)){if(nt=Y(ne),typeof nt!="function")throw Error(r(150));return ne=nt.call(ne),at(Q,W,ne,Se)}if(typeof ne.then=="function")return Qt(Q,W,Vl(ne),Se);if(ne.$$typeof===z)return Qt(Q,W,Bl(Q,ne),Se);kl(Q,ne)}return typeof ne=="string"&&ne!==""||typeof ne=="number"||typeof ne=="bigint"?(ne=""+ne,W!==null&&W.tag===6?(s(Q,W.sibling),Se=f(W,ne),Se.return=Q,Q=Se):(s(Q,W),Se=Xu(ne,Q.mode,Se),Se.return=Q,Q=Se),S(Q)):s(Q,W)}return function(Q,W,ne,Se){try{wo=0;var nt=Qt(Q,W,ne,Se);return yr=null,nt}catch($e){if($e===Mr||$e===Hl)throw $e;var Ut=fi(29,$e,null,Q.mode);return Ut.lanes=Se,Ut.return=Q,Ut}finally{}}}var Vs=Dm(!0),Lm=Dm(!1),$a=!1;function af(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function sf(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function es(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function ts(t,n,s){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(Bt&2)!==0){var f=l.pending;return f===null?n.next=n:(n.next=f.next,f.next=n),l.pending=n,n=Ol(t),pm(t,null,s),n}return Ul(t,l,n,s),Ol(t)}function Lo(t,n,s){if(n=n.updateQueue,n!==null&&(n=n.shared,(s&4194048)!==0)){var l=n.lanes;l&=t.pendingLanes,s|=l,n.lanes=s,zn(t,s)}}function rf(t,n){var s=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,s===l)){var f=null,p=null;if(s=s.firstBaseUpdate,s!==null){do{var S={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};p===null?f=p=S:p=p.next=S,s=s.next}while(s!==null);p===null?f=p=n:p=p.next=n}else f=p=n;s={baseState:l.baseState,firstBaseUpdate:f,lastBaseUpdate:p,shared:l.shared,callbacks:l.callbacks},t.updateQueue=s;return}t=s.lastBaseUpdate,t===null?s.firstBaseUpdate=n:t.next=n,s.lastBaseUpdate=n}var of=!1;function No(){if(of){var t=Sr;if(t!==null)throw t}}function Uo(t,n,s,l){of=!1;var f=t.updateQueue;$a=!1;var p=f.firstBaseUpdate,S=f.lastBaseUpdate,C=f.shared.pending;if(C!==null){f.shared.pending=null;var G=C,ae=G.next;G.next=null,S===null?p=ae:S.next=ae,S=G;var ve=t.alternate;ve!==null&&(ve=ve.updateQueue,C=ve.lastBaseUpdate,C!==S&&(C===null?ve.firstBaseUpdate=ae:C.next=ae,ve.lastBaseUpdate=G))}if(p!==null){var Ee=f.baseState;S=0,ve=ae=G=null,C=p;do{var le=C.lane&-536870913,de=le!==C.lane;if(de?(Tt&le)===le:(l&le)===le){le!==0&&le===xr&&(of=!0),ve!==null&&(ve=ve.next={lane:0,tag:C.tag,payload:C.payload,callback:null,next:null});e:{var Je=t,at=C;le=n;var Qt=s;switch(at.tag){case 1:if(Je=at.payload,typeof Je=="function"){Ee=Je.call(Qt,Ee,le);break e}Ee=Je;break e;case 3:Je.flags=Je.flags&-65537|128;case 0:if(Je=at.payload,le=typeof Je=="function"?Je.call(Qt,Ee,le):Je,le==null)break e;Ee=_({},Ee,le);break e;case 2:$a=!0}}le=C.callback,le!==null&&(t.flags|=64,de&&(t.flags|=8192),de=f.callbacks,de===null?f.callbacks=[le]:de.push(le))}else de={lane:le,tag:C.tag,payload:C.payload,callback:C.callback,next:null},ve===null?(ae=ve=de,G=Ee):ve=ve.next=de,S|=le;if(C=C.next,C===null){if(C=f.shared.pending,C===null)break;de=C,C=de.next,de.next=null,f.lastBaseUpdate=de,f.shared.pending=null}}while(!0);ve===null&&(G=Ee),f.baseState=G,f.firstBaseUpdate=ae,f.lastBaseUpdate=ve,p===null&&(f.shared.lanes=0),rs|=S,t.lanes=S,t.memoizedState=Ee}}function Nm(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function Um(t,n){var s=t.callbacks;if(s!==null)for(t.callbacks=null,t=0;t<s.length;t++)Nm(s[t],n)}var Er=P(null),Xl=P(0);function Om(t,n){t=Da,ye(Xl,t),ye(Er,n),Da=t|n.baseLanes}function lf(){ye(Xl,Da),ye(Er,Er.current)}function cf(){Da=Xl.current,K(Er),K(Xl)}var di=P(null),Ci=null;function ns(t){var n=t.alternate;ye(_n,_n.current&1),ye(di,t),Ci===null&&(n===null||Er.current!==null||n.memoizedState!==null)&&(Ci=t)}function uf(t){ye(_n,_n.current),ye(di,t),Ci===null&&(Ci=t)}function Pm(t){t.tag===22?(ye(_n,_n.current),ye(di,t),Ci===null&&(Ci=t)):is()}function is(){ye(_n,_n.current),ye(di,di.current)}function hi(t){K(di),Ci===t&&(Ci=null),K(_n)}var _n=P(0);function Wl(t){for(var n=t;n!==null;){if(n.tag===13){var s=n.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||gd(s)||_d(s)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ya=0,dt=null,Zt=null,Mn=null,ql=!1,br=!1,ks=!1,Yl=0,Oo=0,Tr=null,WS=0;function dn(){throw Error(r(321))}function ff(t,n){if(n===null)return!1;for(var s=0;s<n.length&&s<t.length;s++)if(!ui(t[s],n[s]))return!1;return!0}function df(t,n,s,l,f,p){return ya=p,dt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,F.H=t===null||t.memoizedState===null?v0:Rf,ks=!1,p=s(l,f),ks=!1,br&&(p=Fm(n,s,l,f)),Im(t),p}function Im(t){F.H=Fo;var n=Zt!==null&&Zt.next!==null;if(ya=0,Mn=Zt=dt=null,ql=!1,Oo=0,Tr=null,n)throw Error(r(300));t===null||yn||(t=t.dependencies,t!==null&&Fl(t)&&(yn=!0))}function Fm(t,n,s,l){dt=t;var f=0;do{if(br&&(Tr=null),Oo=0,br=!1,25<=f)throw Error(r(301));if(f+=1,Mn=Zt=null,t.updateQueue!=null){var p=t.updateQueue;p.lastEffect=null,p.events=null,p.stores=null,p.memoCache!=null&&(p.memoCache.index=0)}F.H=x0,p=n(s,l)}while(br);return p}function qS(){var t=F.H,n=t.useState()[0];return n=typeof n.then=="function"?Po(n):n,t=t.useState()[0],(Zt!==null?Zt.memoizedState:null)!==t&&(dt.flags|=1024),n}function hf(){var t=Yl!==0;return Yl=0,t}function pf(t,n,s){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~s}function mf(t){if(ql){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}ql=!1}ya=0,Mn=Zt=dt=null,br=!1,Oo=Yl=0,Tr=null}function Yn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Mn===null?dt.memoizedState=Mn=t:Mn=Mn.next=t,Mn}function vn(){if(Zt===null){var t=dt.alternate;t=t!==null?t.memoizedState:null}else t=Zt.next;var n=Mn===null?dt.memoizedState:Mn.next;if(n!==null)Mn=n,Zt=t;else{if(t===null)throw dt.alternate===null?Error(r(467)):Error(r(310));Zt=t,t={memoizedState:Zt.memoizedState,baseState:Zt.baseState,baseQueue:Zt.baseQueue,queue:Zt.queue,next:null},Mn===null?dt.memoizedState=Mn=t:Mn=Mn.next=t}return Mn}function jl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Po(t){var n=Oo;return Oo+=1,Tr===null&&(Tr=[]),t=Rm(Tr,t,n),n=dt,(Mn===null?n.memoizedState:Mn.next)===null&&(n=n.alternate,F.H=n===null||n.memoizedState===null?v0:Rf),t}function Zl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Po(t);if(t.$$typeof===z)return On(t)}throw Error(r(438,String(t)))}function gf(t){var n=null,s=dt.updateQueue;if(s!==null&&(n=s.memoCache),n==null){var l=dt.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(n={data:l.data.map(function(f){return f.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),s===null&&(s=jl(),dt.updateQueue=s),s.memoCache=n,s=n.data[n.index],s===void 0)for(s=n.data[n.index]=Array(t),l=0;l<t;l++)s[l]=X;return n.index++,s}function Ea(t,n){return typeof n=="function"?n(t):n}function Kl(t){var n=vn();return _f(n,Zt,t)}function _f(t,n,s){var l=t.queue;if(l===null)throw Error(r(311));l.lastRenderedReducer=s;var f=t.baseQueue,p=l.pending;if(p!==null){if(f!==null){var S=f.next;f.next=p.next,p.next=S}n.baseQueue=f=p,l.pending=null}if(p=t.baseState,f===null)t.memoizedState=p;else{n=f.next;var C=S=null,G=null,ae=n,ve=!1;do{var Ee=ae.lane&-536870913;if(Ee!==ae.lane?(Tt&Ee)===Ee:(ya&Ee)===Ee){var le=ae.revertLane;if(le===0)G!==null&&(G=G.next={lane:0,revertLane:0,gesture:null,action:ae.action,hasEagerState:ae.hasEagerState,eagerState:ae.eagerState,next:null}),Ee===xr&&(ve=!0);else if((ya&le)===le){ae=ae.next,le===xr&&(ve=!0);continue}else Ee={lane:0,revertLane:ae.revertLane,gesture:null,action:ae.action,hasEagerState:ae.hasEagerState,eagerState:ae.eagerState,next:null},G===null?(C=G=Ee,S=p):G=G.next=Ee,dt.lanes|=le,rs|=le;Ee=ae.action,ks&&s(p,Ee),p=ae.hasEagerState?ae.eagerState:s(p,Ee)}else le={lane:Ee,revertLane:ae.revertLane,gesture:ae.gesture,action:ae.action,hasEagerState:ae.hasEagerState,eagerState:ae.eagerState,next:null},G===null?(C=G=le,S=p):G=G.next=le,dt.lanes|=Ee,rs|=Ee;ae=ae.next}while(ae!==null&&ae!==n);if(G===null?S=p:G.next=C,!ui(p,t.memoizedState)&&(yn=!0,ve&&(s=Sr,s!==null)))throw s;t.memoizedState=p,t.baseState=S,t.baseQueue=G,l.lastRenderedState=p}return f===null&&(l.lanes=0),[t.memoizedState,l.dispatch]}function vf(t){var n=vn(),s=n.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=t;var l=s.dispatch,f=s.pending,p=n.memoizedState;if(f!==null){s.pending=null;var S=f=f.next;do p=t(p,S.action),S=S.next;while(S!==f);ui(p,n.memoizedState)||(yn=!0),n.memoizedState=p,n.baseQueue===null&&(n.baseState=p),s.lastRenderedState=p}return[p,l]}function Bm(t,n,s){var l=dt,f=vn(),p=Rt;if(p){if(s===void 0)throw Error(r(407));s=s()}else s=n();var S=!ui((Zt||f).memoizedState,s);if(S&&(f.memoizedState=s,yn=!0),f=f.queue,Mf(Gm.bind(null,l,f,t),[t]),f.getSnapshot!==n||S||Mn!==null&&Mn.memoizedState.tag&1){if(l.flags|=2048,Ar(9,{destroy:void 0},Hm.bind(null,l,f,s,n),null),Jt===null)throw Error(r(349));p||(ya&127)!==0||zm(l,n,s)}return s}function zm(t,n,s){t.flags|=16384,t={getSnapshot:n,value:s},n=dt.updateQueue,n===null?(n=jl(),dt.updateQueue=n,n.stores=[t]):(s=n.stores,s===null?n.stores=[t]:s.push(t))}function Hm(t,n,s,l){n.value=s,n.getSnapshot=l,Vm(n)&&km(t)}function Gm(t,n,s){return s(function(){Vm(n)&&km(t)})}function Vm(t){var n=t.getSnapshot;t=t.value;try{var s=n();return!ui(t,s)}catch{return!0}}function km(t){var n=Os(t,2);n!==null&&si(n,t,2)}function xf(t){var n=Yn();if(typeof t=="function"){var s=t;if(t=s(),ks){De(!0);try{s()}finally{De(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ea,lastRenderedState:t},n}function Xm(t,n,s,l){return t.baseState=s,_f(t,Zt,typeof l=="function"?l:Ea)}function YS(t,n,s,l,f){if($l(t))throw Error(r(485));if(t=n.action,t!==null){var p={payload:f,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){p.listeners.push(S)}};F.T!==null?s(!0):p.isTransition=!1,l(p),s=n.pending,s===null?(p.next=n.pending=p,Wm(n,p)):(p.next=s.next,n.pending=s.next=p)}}function Wm(t,n){var s=n.action,l=n.payload,f=t.state;if(n.isTransition){var p=F.T,S={};F.T=S;try{var C=s(f,l),G=F.S;G!==null&&G(S,C),qm(t,n,C)}catch(ae){Sf(t,n,ae)}finally{p!==null&&S.types!==null&&(p.types=S.types),F.T=p}}else try{p=s(f,l),qm(t,n,p)}catch(ae){Sf(t,n,ae)}}function qm(t,n,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(l){Ym(t,n,l)},function(l){return Sf(t,n,l)}):Ym(t,n,s)}function Ym(t,n,s){n.status="fulfilled",n.value=s,jm(n),t.state=s,n=t.pending,n!==null&&(s=n.next,s===n?t.pending=null:(s=s.next,n.next=s,Wm(t,s)))}function Sf(t,n,s){var l=t.pending;if(t.pending=null,l!==null){l=l.next;do n.status="rejected",n.reason=s,jm(n),n=n.next;while(n!==l)}t.action=null}function jm(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Zm(t,n){return n}function Km(t,n){if(Rt){var s=Jt.formState;if(s!==null){e:{var l=dt;if(Rt){if(en){t:{for(var f=en,p=Ri;f.nodeType!==8;){if(!p){f=null;break t}if(f=wi(f.nextSibling),f===null){f=null;break t}}p=f.data,f=p==="F!"||p==="F"?f:null}if(f){en=wi(f.nextSibling),l=f.data==="F!";break e}}Qa(l)}l=!1}l&&(n=s[0])}}return s=Yn(),s.memoizedState=s.baseState=n,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Zm,lastRenderedState:n},s.queue=l,s=m0.bind(null,dt,l),l.dispatch=s,l=xf(!1),p=Af.bind(null,dt,!1,l.queue),l=Yn(),f={state:n,dispatch:null,action:t,pending:null},l.queue=f,s=YS.bind(null,dt,f,p,s),f.dispatch=s,l.memoizedState=t,[n,s,!1]}function Qm(t){var n=vn();return Jm(n,Zt,t)}function Jm(t,n,s){if(n=_f(t,n,Zm)[0],t=Kl(Ea)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var l=Po(n)}catch(S){throw S===Mr?Hl:S}else l=n;n=vn();var f=n.queue,p=f.dispatch;return s!==n.memoizedState&&(dt.flags|=2048,Ar(9,{destroy:void 0},jS.bind(null,f,s),null)),[l,p,t]}function jS(t,n){t.action=n}function $m(t){var n=vn(),s=Zt;if(s!==null)return Jm(n,s,t);vn(),n=n.memoizedState,s=vn();var l=s.queue.dispatch;return s.memoizedState=t,[n,l,!1]}function Ar(t,n,s,l){return t={tag:t,create:s,deps:l,inst:n,next:null},n=dt.updateQueue,n===null&&(n=jl(),dt.updateQueue=n),s=n.lastEffect,s===null?n.lastEffect=t.next=t:(l=s.next,s.next=t,t.next=l,n.lastEffect=t),t}function e0(){return vn().memoizedState}function Ql(t,n,s,l){var f=Yn();dt.flags|=t,f.memoizedState=Ar(1|n,{destroy:void 0},s,l===void 0?null:l)}function Jl(t,n,s,l){var f=vn();l=l===void 0?null:l;var p=f.memoizedState.inst;Zt!==null&&l!==null&&ff(l,Zt.memoizedState.deps)?f.memoizedState=Ar(n,p,s,l):(dt.flags|=t,f.memoizedState=Ar(1|n,p,s,l))}function t0(t,n){Ql(8390656,8,t,n)}function Mf(t,n){Jl(2048,8,t,n)}function ZS(t){dt.flags|=4;var n=dt.updateQueue;if(n===null)n=jl(),dt.updateQueue=n,n.events=[t];else{var s=n.events;s===null?n.events=[t]:s.push(t)}}function n0(t){var n=vn().memoizedState;return ZS({ref:n,nextImpl:t}),function(){if((Bt&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function i0(t,n){return Jl(4,2,t,n)}function a0(t,n){return Jl(4,4,t,n)}function s0(t,n){if(typeof n=="function"){t=t();var s=n(t);return function(){typeof s=="function"?s():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function r0(t,n,s){s=s!=null?s.concat([t]):null,Jl(4,4,s0.bind(null,n,t),s)}function yf(){}function o0(t,n){var s=vn();n=n===void 0?null:n;var l=s.memoizedState;return n!==null&&ff(n,l[1])?l[0]:(s.memoizedState=[t,n],t)}function l0(t,n){var s=vn();n=n===void 0?null:n;var l=s.memoizedState;if(n!==null&&ff(n,l[1]))return l[0];if(l=t(),ks){De(!0);try{t()}finally{De(!1)}}return s.memoizedState=[l,n],l}function Ef(t,n,s){return s===void 0||(ya&1073741824)!==0&&(Tt&261930)===0?t.memoizedState=n:(t.memoizedState=s,t=cg(),dt.lanes|=t,rs|=t,s)}function c0(t,n,s,l){return ui(s,n)?s:Er.current!==null?(t=Ef(t,s,l),ui(t,n)||(yn=!0),t):(ya&42)===0||(ya&1073741824)!==0&&(Tt&261930)===0?(yn=!0,t.memoizedState=s):(t=cg(),dt.lanes|=t,rs|=t,n)}function u0(t,n,s,l,f){var p=H.p;H.p=p!==0&&8>p?p:8;var S=F.T,C={};F.T=C,Af(t,!1,n,s);try{var G=f(),ae=F.S;if(ae!==null&&ae(C,G),G!==null&&typeof G=="object"&&typeof G.then=="function"){var ve=XS(G,l);Io(t,n,ve,gi(t))}else Io(t,n,l,gi(t))}catch(Ee){Io(t,n,{then:function(){},status:"rejected",reason:Ee},gi())}finally{H.p=p,S!==null&&C.types!==null&&(S.types=C.types),F.T=S}}function KS(){}function bf(t,n,s,l){if(t.tag!==5)throw Error(r(476));var f=f0(t).queue;u0(t,f,n,$,s===null?KS:function(){return d0(t),s(l)})}function f0(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:$,baseState:$,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ea,lastRenderedState:$},next:null};var s={};return n.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ea,lastRenderedState:s},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function d0(t){var n=f0(t);n.next===null&&(n=t.alternate.memoizedState),Io(t,n.next.queue,{},gi())}function Tf(){return On($o)}function h0(){return vn().memoizedState}function p0(){return vn().memoizedState}function QS(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var s=gi();t=es(s);var l=ts(n,t,s);l!==null&&(si(l,n,s),Lo(l,n,s)),n={cache:$u()},t.payload=n;return}n=n.return}}function JS(t,n,s){var l=gi();s={lane:l,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},$l(t)?g0(n,s):(s=Vu(t,n,s,l),s!==null&&(si(s,t,l),_0(s,n,l)))}function m0(t,n,s){var l=gi();Io(t,n,s,l)}function Io(t,n,s,l){var f={lane:l,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null};if($l(t))g0(n,f);else{var p=t.alternate;if(t.lanes===0&&(p===null||p.lanes===0)&&(p=n.lastRenderedReducer,p!==null))try{var S=n.lastRenderedState,C=p(S,s);if(f.hasEagerState=!0,f.eagerState=C,ui(C,S))return Ul(t,n,f,0),Jt===null&&Nl(),!1}catch{}finally{}if(s=Vu(t,n,f,l),s!==null)return si(s,t,l),_0(s,n,l),!0}return!1}function Af(t,n,s,l){if(l={lane:2,revertLane:ad(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},$l(t)){if(n)throw Error(r(479))}else n=Vu(t,s,l,2),n!==null&&si(n,t,2)}function $l(t){var n=t.alternate;return t===dt||n!==null&&n===dt}function g0(t,n){br=ql=!0;var s=t.pending;s===null?n.next=n:(n.next=s.next,s.next=n),t.pending=n}function _0(t,n,s){if((s&4194048)!==0){var l=n.lanes;l&=t.pendingLanes,s|=l,n.lanes=s,zn(t,s)}}var Fo={readContext:On,use:Zl,useCallback:dn,useContext:dn,useEffect:dn,useImperativeHandle:dn,useLayoutEffect:dn,useInsertionEffect:dn,useMemo:dn,useReducer:dn,useRef:dn,useState:dn,useDebugValue:dn,useDeferredValue:dn,useTransition:dn,useSyncExternalStore:dn,useId:dn,useHostTransitionStatus:dn,useFormState:dn,useActionState:dn,useOptimistic:dn,useMemoCache:dn,useCacheRefresh:dn};Fo.useEffectEvent=dn;var v0={readContext:On,use:Zl,useCallback:function(t,n){return Yn().memoizedState=[t,n===void 0?null:n],t},useContext:On,useEffect:t0,useImperativeHandle:function(t,n,s){s=s!=null?s.concat([t]):null,Ql(4194308,4,s0.bind(null,n,t),s)},useLayoutEffect:function(t,n){return Ql(4194308,4,t,n)},useInsertionEffect:function(t,n){Ql(4,2,t,n)},useMemo:function(t,n){var s=Yn();n=n===void 0?null:n;var l=t();if(ks){De(!0);try{t()}finally{De(!1)}}return s.memoizedState=[l,n],l},useReducer:function(t,n,s){var l=Yn();if(s!==void 0){var f=s(n);if(ks){De(!0);try{s(n)}finally{De(!1)}}}else f=n;return l.memoizedState=l.baseState=f,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:f},l.queue=t,t=t.dispatch=JS.bind(null,dt,t),[l.memoizedState,t]},useRef:function(t){var n=Yn();return t={current:t},n.memoizedState=t},useState:function(t){t=xf(t);var n=t.queue,s=m0.bind(null,dt,n);return n.dispatch=s,[t.memoizedState,s]},useDebugValue:yf,useDeferredValue:function(t,n){var s=Yn();return Ef(s,t,n)},useTransition:function(){var t=xf(!1);return t=u0.bind(null,dt,t.queue,!0,!1),Yn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,s){var l=dt,f=Yn();if(Rt){if(s===void 0)throw Error(r(407));s=s()}else{if(s=n(),Jt===null)throw Error(r(349));(Tt&127)!==0||zm(l,n,s)}f.memoizedState=s;var p={value:s,getSnapshot:n};return f.queue=p,t0(Gm.bind(null,l,p,t),[t]),l.flags|=2048,Ar(9,{destroy:void 0},Hm.bind(null,l,p,s,n),null),s},useId:function(){var t=Yn(),n=Jt.identifierPrefix;if(Rt){var s=ta,l=ea;s=(l&~(1<<32-He(l)-1)).toString(32)+s,n="_"+n+"R_"+s,s=Yl++,0<s&&(n+="H"+s.toString(32)),n+="_"}else s=WS++,n="_"+n+"r_"+s.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:Tf,useFormState:Km,useActionState:Km,useOptimistic:function(t){var n=Yn();n.memoizedState=n.baseState=t;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=s,n=Af.bind(null,dt,!0,s),s.dispatch=n,[t,n]},useMemoCache:gf,useCacheRefresh:function(){return Yn().memoizedState=QS.bind(null,dt)},useEffectEvent:function(t){var n=Yn(),s={impl:t};return n.memoizedState=s,function(){if((Bt&2)!==0)throw Error(r(440));return s.impl.apply(void 0,arguments)}}},Rf={readContext:On,use:Zl,useCallback:o0,useContext:On,useEffect:Mf,useImperativeHandle:r0,useInsertionEffect:i0,useLayoutEffect:a0,useMemo:l0,useReducer:Kl,useRef:e0,useState:function(){return Kl(Ea)},useDebugValue:yf,useDeferredValue:function(t,n){var s=vn();return c0(s,Zt.memoizedState,t,n)},useTransition:function(){var t=Kl(Ea)[0],n=vn().memoizedState;return[typeof t=="boolean"?t:Po(t),n]},useSyncExternalStore:Bm,useId:h0,useHostTransitionStatus:Tf,useFormState:Qm,useActionState:Qm,useOptimistic:function(t,n){var s=vn();return Xm(s,Zt,t,n)},useMemoCache:gf,useCacheRefresh:p0};Rf.useEffectEvent=n0;var x0={readContext:On,use:Zl,useCallback:o0,useContext:On,useEffect:Mf,useImperativeHandle:r0,useInsertionEffect:i0,useLayoutEffect:a0,useMemo:l0,useReducer:vf,useRef:e0,useState:function(){return vf(Ea)},useDebugValue:yf,useDeferredValue:function(t,n){var s=vn();return Zt===null?Ef(s,t,n):c0(s,Zt.memoizedState,t,n)},useTransition:function(){var t=vf(Ea)[0],n=vn().memoizedState;return[typeof t=="boolean"?t:Po(t),n]},useSyncExternalStore:Bm,useId:h0,useHostTransitionStatus:Tf,useFormState:$m,useActionState:$m,useOptimistic:function(t,n){var s=vn();return Zt!==null?Xm(s,Zt,t,n):(s.baseState=t,[t,s.queue.dispatch])},useMemoCache:gf,useCacheRefresh:p0};x0.useEffectEvent=n0;function Cf(t,n,s,l){n=t.memoizedState,s=s(l,n),s=s==null?n:_({},n,s),t.memoizedState=s,t.lanes===0&&(t.updateQueue.baseState=s)}var wf={enqueueSetState:function(t,n,s){t=t._reactInternals;var l=gi(),f=es(l);f.payload=n,s!=null&&(f.callback=s),n=ts(t,f,l),n!==null&&(si(n,t,l),Lo(n,t,l))},enqueueReplaceState:function(t,n,s){t=t._reactInternals;var l=gi(),f=es(l);f.tag=1,f.payload=n,s!=null&&(f.callback=s),n=ts(t,f,l),n!==null&&(si(n,t,l),Lo(n,t,l))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var s=gi(),l=es(s);l.tag=2,n!=null&&(l.callback=n),n=ts(t,l,s),n!==null&&(si(n,t,s),Lo(n,t,s))}};function S0(t,n,s,l,f,p,S){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,p,S):n.prototype&&n.prototype.isPureReactComponent?!Eo(s,l)||!Eo(f,p):!0}function M0(t,n,s,l){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(s,l),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(s,l),n.state!==t&&wf.enqueueReplaceState(n,n.state,null)}function Xs(t,n){var s=n;if("ref"in n){s={};for(var l in n)l!=="ref"&&(s[l]=n[l])}if(t=t.defaultProps){s===n&&(s=_({},s));for(var f in t)s[f]===void 0&&(s[f]=t[f])}return s}function y0(t){Ll(t)}function E0(t){console.error(t)}function b0(t){Ll(t)}function ec(t,n){try{var s=t.onUncaughtError;s(n.value,{componentStack:n.stack})}catch(l){setTimeout(function(){throw l})}}function T0(t,n,s){try{var l=t.onCaughtError;l(s.value,{componentStack:s.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function Df(t,n,s){return s=es(s),s.tag=3,s.payload={element:null},s.callback=function(){ec(t,n)},s}function A0(t){return t=es(t),t.tag=3,t}function R0(t,n,s,l){var f=s.type.getDerivedStateFromError;if(typeof f=="function"){var p=l.value;t.payload=function(){return f(p)},t.callback=function(){T0(n,s,l)}}var S=s.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(t.callback=function(){T0(n,s,l),typeof f!="function"&&(os===null?os=new Set([this]):os.add(this));var C=l.stack;this.componentDidCatch(l.value,{componentStack:C!==null?C:""})})}function $S(t,n,s,l,f){if(s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(n=s.alternate,n!==null&&vr(n,s,f,!0),s=di.current,s!==null){switch(s.tag){case 31:case 13:return Ci===null?dc():s.alternate===null&&hn===0&&(hn=3),s.flags&=-257,s.flags|=65536,s.lanes=f,l===Gl?s.flags|=16384:(n=s.updateQueue,n===null?s.updateQueue=new Set([l]):n.add(l),td(t,l,f)),!1;case 22:return s.flags|=65536,l===Gl?s.flags|=16384:(n=s.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([l])},s.updateQueue=n):(s=n.retryQueue,s===null?n.retryQueue=new Set([l]):s.add(l)),td(t,l,f)),!1}throw Error(r(435,s.tag))}return td(t,l,f),dc(),!1}if(Rt)return n=di.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=f,l!==ju&&(t=Error(r(422),{cause:l}),Ao(bi(t,s)))):(l!==ju&&(n=Error(r(423),{cause:l}),Ao(bi(n,s))),t=t.current.alternate,t.flags|=65536,f&=-f,t.lanes|=f,l=bi(l,s),f=Df(t.stateNode,l,f),rf(t,f),hn!==4&&(hn=2)),!1;var p=Error(r(520),{cause:l});if(p=bi(p,s),Wo===null?Wo=[p]:Wo.push(p),hn!==4&&(hn=2),n===null)return!0;l=bi(l,s),s=n;do{switch(s.tag){case 3:return s.flags|=65536,t=f&-f,s.lanes|=t,t=Df(s.stateNode,l,t),rf(s,t),!1;case 1:if(n=s.type,p=s.stateNode,(s.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(os===null||!os.has(p))))return s.flags|=65536,f&=-f,s.lanes|=f,f=A0(f),R0(f,t,s,l),rf(s,f),!1}s=s.return}while(s!==null);return!1}var Lf=Error(r(461)),yn=!1;function Pn(t,n,s,l){n.child=t===null?Lm(n,null,s,l):Vs(n,t.child,s,l)}function C0(t,n,s,l,f){s=s.render;var p=n.ref;if("ref"in l){var S={};for(var C in l)C!=="ref"&&(S[C]=l[C])}else S=l;return Bs(n),l=df(t,n,s,S,p,f),C=hf(),t!==null&&!yn?(pf(t,n,f),ba(t,n,f)):(Rt&&C&&qu(n),n.flags|=1,Pn(t,n,l,f),n.child)}function w0(t,n,s,l,f){if(t===null){var p=s.type;return typeof p=="function"&&!ku(p)&&p.defaultProps===void 0&&s.compare===null?(n.tag=15,n.type=p,D0(t,n,p,l,f)):(t=Pl(s.type,null,l,n,n.mode,f),t.ref=n.ref,t.return=n,n.child=t)}if(p=t.child,!zf(t,f)){var S=p.memoizedProps;if(s=s.compare,s=s!==null?s:Eo,s(S,l)&&t.ref===n.ref)return ba(t,n,f)}return n.flags|=1,t=va(p,l),t.ref=n.ref,t.return=n,n.child=t}function D0(t,n,s,l,f){if(t!==null){var p=t.memoizedProps;if(Eo(p,l)&&t.ref===n.ref)if(yn=!1,n.pendingProps=l=p,zf(t,f))(t.flags&131072)!==0&&(yn=!0);else return n.lanes=t.lanes,ba(t,n,f)}return Nf(t,n,s,l,f)}function L0(t,n,s,l){var f=l.children,p=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((n.flags&128)!==0){if(p=p!==null?p.baseLanes|s:s,t!==null){for(l=n.child=t.child,f=0;l!==null;)f=f|l.lanes|l.childLanes,l=l.sibling;l=f&~p}else l=0,n.child=null;return N0(t,n,p,s,l)}if((s&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&zl(n,p!==null?p.cachePool:null),p!==null?Om(n,p):lf(),Pm(n);else return l=n.lanes=536870912,N0(t,n,p!==null?p.baseLanes|s:s,s,l)}else p!==null?(zl(n,p.cachePool),Om(n,p),is(),n.memoizedState=null):(t!==null&&zl(n,null),lf(),is());return Pn(t,n,f,s),n.child}function Bo(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function N0(t,n,s,l,f){var p=tf();return p=p===null?null:{parent:Sn._currentValue,pool:p},n.memoizedState={baseLanes:s,cachePool:p},t!==null&&zl(n,null),lf(),Pm(n),t!==null&&vr(t,n,l,!0),n.childLanes=f,null}function tc(t,n){return n=ic({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function U0(t,n,s){return Vs(n,t.child,null,s),t=tc(n,n.pendingProps),t.flags|=2,hi(n),n.memoizedState=null,t}function eM(t,n,s){var l=n.pendingProps,f=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(Rt){if(l.mode==="hidden")return t=tc(n,l),n.lanes=536870912,Bo(null,t);if(uf(n),(t=en)?(t=Wg(t,Ri),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Za!==null?{id:ea,overflow:ta}:null,retryLane:536870912,hydrationErrors:null},s=gm(t),s.return=n,n.child=s,Un=n,en=null)):t=null,t===null)throw Qa(n);return n.lanes=536870912,null}return tc(n,l)}var p=t.memoizedState;if(p!==null){var S=p.dehydrated;if(uf(n),f)if(n.flags&256)n.flags&=-257,n=U0(t,n,s);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(r(558));else if(yn||vr(t,n,s,!1),f=(s&t.childLanes)!==0,yn||f){if(l=Jt,l!==null&&(S=Hn(l,s),S!==0&&S!==p.retryLane))throw p.retryLane=S,Os(t,S),si(l,t,S),Lf;dc(),n=U0(t,n,s)}else t=p.treeContext,en=wi(S.nextSibling),Un=n,Rt=!0,Ka=null,Ri=!1,t!==null&&xm(n,t),n=tc(n,l),n.flags|=4096;return n}return t=va(t.child,{mode:l.mode,children:l.children}),t.ref=n.ref,n.child=t,t.return=n,t}function nc(t,n){var s=n.ref;if(s===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(r(284));(t===null||t.ref!==s)&&(n.flags|=4194816)}}function Nf(t,n,s,l,f){return Bs(n),s=df(t,n,s,l,void 0,f),l=hf(),t!==null&&!yn?(pf(t,n,f),ba(t,n,f)):(Rt&&l&&qu(n),n.flags|=1,Pn(t,n,s,f),n.child)}function O0(t,n,s,l,f,p){return Bs(n),n.updateQueue=null,s=Fm(n,l,s,f),Im(t),l=hf(),t!==null&&!yn?(pf(t,n,p),ba(t,n,p)):(Rt&&l&&qu(n),n.flags|=1,Pn(t,n,s,p),n.child)}function P0(t,n,s,l,f){if(Bs(n),n.stateNode===null){var p=pr,S=s.contextType;typeof S=="object"&&S!==null&&(p=On(S)),p=new s(l,p),n.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,p.updater=wf,n.stateNode=p,p._reactInternals=n,p=n.stateNode,p.props=l,p.state=n.memoizedState,p.refs={},af(n),S=s.contextType,p.context=typeof S=="object"&&S!==null?On(S):pr,p.state=n.memoizedState,S=s.getDerivedStateFromProps,typeof S=="function"&&(Cf(n,s,S,l),p.state=n.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(S=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),S!==p.state&&wf.enqueueReplaceState(p,p.state,null),Uo(n,l,p,f),No(),p.state=n.memoizedState),typeof p.componentDidMount=="function"&&(n.flags|=4194308),l=!0}else if(t===null){p=n.stateNode;var C=n.memoizedProps,G=Xs(s,C);p.props=G;var ae=p.context,ve=s.contextType;S=pr,typeof ve=="object"&&ve!==null&&(S=On(ve));var Ee=s.getDerivedStateFromProps;ve=typeof Ee=="function"||typeof p.getSnapshotBeforeUpdate=="function",C=n.pendingProps!==C,ve||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(C||ae!==S)&&M0(n,p,l,S),$a=!1;var le=n.memoizedState;p.state=le,Uo(n,l,p,f),No(),ae=n.memoizedState,C||le!==ae||$a?(typeof Ee=="function"&&(Cf(n,s,Ee,l),ae=n.memoizedState),(G=$a||S0(n,s,G,l,le,ae,S))?(ve||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount()),typeof p.componentDidMount=="function"&&(n.flags|=4194308)):(typeof p.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=l,n.memoizedState=ae),p.props=l,p.state=ae,p.context=S,l=G):(typeof p.componentDidMount=="function"&&(n.flags|=4194308),l=!1)}else{p=n.stateNode,sf(t,n),S=n.memoizedProps,ve=Xs(s,S),p.props=ve,Ee=n.pendingProps,le=p.context,ae=s.contextType,G=pr,typeof ae=="object"&&ae!==null&&(G=On(ae)),C=s.getDerivedStateFromProps,(ae=typeof C=="function"||typeof p.getSnapshotBeforeUpdate=="function")||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(S!==Ee||le!==G)&&M0(n,p,l,G),$a=!1,le=n.memoizedState,p.state=le,Uo(n,l,p,f),No();var de=n.memoizedState;S!==Ee||le!==de||$a||t!==null&&t.dependencies!==null&&Fl(t.dependencies)?(typeof C=="function"&&(Cf(n,s,C,l),de=n.memoizedState),(ve=$a||S0(n,s,ve,l,le,de,G)||t!==null&&t.dependencies!==null&&Fl(t.dependencies))?(ae||typeof p.UNSAFE_componentWillUpdate!="function"&&typeof p.componentWillUpdate!="function"||(typeof p.componentWillUpdate=="function"&&p.componentWillUpdate(l,de,G),typeof p.UNSAFE_componentWillUpdate=="function"&&p.UNSAFE_componentWillUpdate(l,de,G)),typeof p.componentDidUpdate=="function"&&(n.flags|=4),typeof p.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof p.componentDidUpdate!="function"||S===t.memoizedProps&&le===t.memoizedState||(n.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||S===t.memoizedProps&&le===t.memoizedState||(n.flags|=1024),n.memoizedProps=l,n.memoizedState=de),p.props=l,p.state=de,p.context=G,l=ve):(typeof p.componentDidUpdate!="function"||S===t.memoizedProps&&le===t.memoizedState||(n.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||S===t.memoizedProps&&le===t.memoizedState||(n.flags|=1024),l=!1)}return p=l,nc(t,n),l=(n.flags&128)!==0,p||l?(p=n.stateNode,s=l&&typeof s.getDerivedStateFromError!="function"?null:p.render(),n.flags|=1,t!==null&&l?(n.child=Vs(n,t.child,null,f),n.child=Vs(n,null,s,f)):Pn(t,n,s,f),n.memoizedState=p.state,t=n.child):t=ba(t,n,f),t}function I0(t,n,s,l){return Is(),n.flags|=256,Pn(t,n,s,l),n.child}var Uf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Of(t){return{baseLanes:t,cachePool:Tm()}}function Pf(t,n,s){return t=t!==null?t.childLanes&~s:0,n&&(t|=mi),t}function F0(t,n,s){var l=n.pendingProps,f=!1,p=(n.flags&128)!==0,S;if((S=p)||(S=t!==null&&t.memoizedState===null?!1:(_n.current&2)!==0),S&&(f=!0,n.flags&=-129),S=(n.flags&32)!==0,n.flags&=-33,t===null){if(Rt){if(f?ns(n):is(),(t=en)?(t=Wg(t,Ri),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Za!==null?{id:ea,overflow:ta}:null,retryLane:536870912,hydrationErrors:null},s=gm(t),s.return=n,n.child=s,Un=n,en=null)):t=null,t===null)throw Qa(n);return _d(t)?n.lanes=32:n.lanes=536870912,null}var C=l.children;return l=l.fallback,f?(is(),f=n.mode,C=ic({mode:"hidden",children:C},f),l=Ps(l,f,s,null),C.return=n,l.return=n,C.sibling=l,n.child=C,l=n.child,l.memoizedState=Of(s),l.childLanes=Pf(t,S,s),n.memoizedState=Uf,Bo(null,l)):(ns(n),If(n,C))}var G=t.memoizedState;if(G!==null&&(C=G.dehydrated,C!==null)){if(p)n.flags&256?(ns(n),n.flags&=-257,n=Ff(t,n,s)):n.memoizedState!==null?(is(),n.child=t.child,n.flags|=128,n=null):(is(),C=l.fallback,f=n.mode,l=ic({mode:"visible",children:l.children},f),C=Ps(C,f,s,null),C.flags|=2,l.return=n,C.return=n,l.sibling=C,n.child=l,Vs(n,t.child,null,s),l=n.child,l.memoizedState=Of(s),l.childLanes=Pf(t,S,s),n.memoizedState=Uf,n=Bo(null,l));else if(ns(n),_d(C)){if(S=C.nextSibling&&C.nextSibling.dataset,S)var ae=S.dgst;S=ae,l=Error(r(419)),l.stack="",l.digest=S,Ao({value:l,source:null,stack:null}),n=Ff(t,n,s)}else if(yn||vr(t,n,s,!1),S=(s&t.childLanes)!==0,yn||S){if(S=Jt,S!==null&&(l=Hn(S,s),l!==0&&l!==G.retryLane))throw G.retryLane=l,Os(t,l),si(S,t,l),Lf;gd(C)||dc(),n=Ff(t,n,s)}else gd(C)?(n.flags|=192,n.child=t.child,n=null):(t=G.treeContext,en=wi(C.nextSibling),Un=n,Rt=!0,Ka=null,Ri=!1,t!==null&&xm(n,t),n=If(n,l.children),n.flags|=4096);return n}return f?(is(),C=l.fallback,f=n.mode,G=t.child,ae=G.sibling,l=va(G,{mode:"hidden",children:l.children}),l.subtreeFlags=G.subtreeFlags&65011712,ae!==null?C=va(ae,C):(C=Ps(C,f,s,null),C.flags|=2),C.return=n,l.return=n,l.sibling=C,n.child=l,Bo(null,l),l=n.child,C=t.child.memoizedState,C===null?C=Of(s):(f=C.cachePool,f!==null?(G=Sn._currentValue,f=f.parent!==G?{parent:G,pool:G}:f):f=Tm(),C={baseLanes:C.baseLanes|s,cachePool:f}),l.memoizedState=C,l.childLanes=Pf(t,S,s),n.memoizedState=Uf,Bo(t.child,l)):(ns(n),s=t.child,t=s.sibling,s=va(s,{mode:"visible",children:l.children}),s.return=n,s.sibling=null,t!==null&&(S=n.deletions,S===null?(n.deletions=[t],n.flags|=16):S.push(t)),n.child=s,n.memoizedState=null,s)}function If(t,n){return n=ic({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function ic(t,n){return t=fi(22,t,null,n),t.lanes=0,t}function Ff(t,n,s){return Vs(n,t.child,null,s),t=If(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function B0(t,n,s){t.lanes|=n;var l=t.alternate;l!==null&&(l.lanes|=n),Qu(t.return,n,s)}function Bf(t,n,s,l,f,p){var S=t.memoizedState;S===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:l,tail:s,tailMode:f,treeForkCount:p}:(S.isBackwards=n,S.rendering=null,S.renderingStartTime=0,S.last=l,S.tail=s,S.tailMode=f,S.treeForkCount=p)}function z0(t,n,s){var l=n.pendingProps,f=l.revealOrder,p=l.tail;l=l.children;var S=_n.current,C=(S&2)!==0;if(C?(S=S&1|2,n.flags|=128):S&=1,ye(_n,S),Pn(t,n,l,s),l=Rt?To:0,!C&&t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&B0(t,s,n);else if(t.tag===19)B0(t,s,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(f){case"forwards":for(s=n.child,f=null;s!==null;)t=s.alternate,t!==null&&Wl(t)===null&&(f=s),s=s.sibling;s=f,s===null?(f=n.child,n.child=null):(f=s.sibling,s.sibling=null),Bf(n,!1,f,s,p,l);break;case"backwards":case"unstable_legacy-backwards":for(s=null,f=n.child,n.child=null;f!==null;){if(t=f.alternate,t!==null&&Wl(t)===null){n.child=f;break}t=f.sibling,f.sibling=s,s=f,f=t}Bf(n,!0,s,null,p,l);break;case"together":Bf(n,!1,null,null,void 0,l);break;default:n.memoizedState=null}return n.child}function ba(t,n,s){if(t!==null&&(n.dependencies=t.dependencies),rs|=n.lanes,(s&n.childLanes)===0)if(t!==null){if(vr(t,n,s,!1),(s&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,s=va(t,t.pendingProps),n.child=s,s.return=n;t.sibling!==null;)t=t.sibling,s=s.sibling=va(t,t.pendingProps),s.return=n;s.sibling=null}return n.child}function zf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&Fl(t)))}function tM(t,n,s){switch(n.tag){case 3:Te(n,n.stateNode.containerInfo),Ja(n,Sn,t.memoizedState.cache),Is();break;case 27:case 5:it(n);break;case 4:Te(n,n.stateNode.containerInfo);break;case 10:Ja(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,uf(n),null;break;case 13:var l=n.memoizedState;if(l!==null)return l.dehydrated!==null?(ns(n),n.flags|=128,null):(s&n.child.childLanes)!==0?F0(t,n,s):(ns(n),t=ba(t,n,s),t!==null?t.sibling:null);ns(n);break;case 19:var f=(t.flags&128)!==0;if(l=(s&n.childLanes)!==0,l||(vr(t,n,s,!1),l=(s&n.childLanes)!==0),f){if(l)return z0(t,n,s);n.flags|=128}if(f=n.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),ye(_n,_n.current),l)break;return null;case 22:return n.lanes=0,L0(t,n,s,n.pendingProps);case 24:Ja(n,Sn,t.memoizedState.cache)}return ba(t,n,s)}function H0(t,n,s){if(t!==null)if(t.memoizedProps!==n.pendingProps)yn=!0;else{if(!zf(t,s)&&(n.flags&128)===0)return yn=!1,tM(t,n,s);yn=(t.flags&131072)!==0}else yn=!1,Rt&&(n.flags&1048576)!==0&&vm(n,To,n.index);switch(n.lanes=0,n.tag){case 16:e:{var l=n.pendingProps;if(t=Hs(n.elementType),n.type=t,typeof t=="function")ku(t)?(l=Xs(t,l),n.tag=1,n=P0(null,n,t,l,s)):(n.tag=0,n=Nf(null,n,t,l,s));else{if(t!=null){var f=t.$$typeof;if(f===R){n.tag=11,n=C0(null,n,t,l,s);break e}else if(f===B){n.tag=14,n=w0(null,n,t,l,s);break e}}throw n=fe(t)||t,Error(r(306,n,""))}}return n;case 0:return Nf(t,n,n.type,n.pendingProps,s);case 1:return l=n.type,f=Xs(l,n.pendingProps),P0(t,n,l,f,s);case 3:e:{if(Te(n,n.stateNode.containerInfo),t===null)throw Error(r(387));l=n.pendingProps;var p=n.memoizedState;f=p.element,sf(t,n),Uo(n,l,null,s);var S=n.memoizedState;if(l=S.cache,Ja(n,Sn,l),l!==p.cache&&Ju(n,[Sn],s,!0),No(),l=S.element,p.isDehydrated)if(p={element:l,isDehydrated:!1,cache:S.cache},n.updateQueue.baseState=p,n.memoizedState=p,n.flags&256){n=I0(t,n,l,s);break e}else if(l!==f){f=bi(Error(r(424)),n),Ao(f),n=I0(t,n,l,s);break e}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(en=wi(t.firstChild),Un=n,Rt=!0,Ka=null,Ri=!0,s=Lm(n,null,l,s),n.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling}else{if(Is(),l===f){n=ba(t,n,s);break e}Pn(t,n,l,s)}n=n.child}return n;case 26:return nc(t,n),t===null?(s=Qg(n.type,null,n.pendingProps,null))?n.memoizedState=s:Rt||(s=n.type,t=n.pendingProps,l=xc(se.current).createElement(s),l[cn]=n,l[Rn]=t,In(l,s,t),rn(l),n.stateNode=l):n.memoizedState=Qg(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return it(n),t===null&&Rt&&(l=n.stateNode=jg(n.type,n.pendingProps,se.current),Un=n,Ri=!0,f=en,fs(n.type)?(vd=f,en=wi(l.firstChild)):en=f),Pn(t,n,n.pendingProps.children,s),nc(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Rt&&((f=l=en)&&(l=LM(l,n.type,n.pendingProps,Ri),l!==null?(n.stateNode=l,Un=n,en=wi(l.firstChild),Ri=!1,f=!0):f=!1),f||Qa(n)),it(n),f=n.type,p=n.pendingProps,S=t!==null?t.memoizedProps:null,l=p.children,hd(f,p)?l=null:S!==null&&hd(f,S)&&(n.flags|=32),n.memoizedState!==null&&(f=df(t,n,qS,null,null,s),$o._currentValue=f),nc(t,n),Pn(t,n,l,s),n.child;case 6:return t===null&&Rt&&((t=s=en)&&(s=NM(s,n.pendingProps,Ri),s!==null?(n.stateNode=s,Un=n,en=null,t=!0):t=!1),t||Qa(n)),null;case 13:return F0(t,n,s);case 4:return Te(n,n.stateNode.containerInfo),l=n.pendingProps,t===null?n.child=Vs(n,null,l,s):Pn(t,n,l,s),n.child;case 11:return C0(t,n,n.type,n.pendingProps,s);case 7:return Pn(t,n,n.pendingProps,s),n.child;case 8:return Pn(t,n,n.pendingProps.children,s),n.child;case 12:return Pn(t,n,n.pendingProps.children,s),n.child;case 10:return l=n.pendingProps,Ja(n,n.type,l.value),Pn(t,n,l.children,s),n.child;case 9:return f=n.type._context,l=n.pendingProps.children,Bs(n),f=On(f),l=l(f),n.flags|=1,Pn(t,n,l,s),n.child;case 14:return w0(t,n,n.type,n.pendingProps,s);case 15:return D0(t,n,n.type,n.pendingProps,s);case 19:return z0(t,n,s);case 31:return eM(t,n,s);case 22:return L0(t,n,s,n.pendingProps);case 24:return Bs(n),l=On(Sn),t===null?(f=tf(),f===null&&(f=Jt,p=$u(),f.pooledCache=p,p.refCount++,p!==null&&(f.pooledCacheLanes|=s),f=p),n.memoizedState={parent:l,cache:f},af(n),Ja(n,Sn,f)):((t.lanes&s)!==0&&(sf(t,n),Uo(n,null,null,s),No()),f=t.memoizedState,p=n.memoizedState,f.parent!==l?(f={parent:l,cache:l},n.memoizedState=f,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=f),Ja(n,Sn,l)):(l=p.cache,Ja(n,Sn,l),l!==f.cache&&Ju(n,[Sn],s,!0))),Pn(t,n,n.pendingProps.children,s),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function Ta(t){t.flags|=4}function Hf(t,n,s,l,f){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(f&335544128)===f)if(t.stateNode.complete)t.flags|=8192;else if(hg())t.flags|=8192;else throw Gs=Gl,nf}else t.flags&=-16777217}function G0(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!n_(n))if(hg())t.flags|=8192;else throw Gs=Gl,nf}function ac(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?xe():536870912,t.lanes|=n,Dr|=n)}function zo(t,n){if(!Rt)switch(t.tailMode){case"hidden":n=t.tail;for(var s=null;n!==null;)n.alternate!==null&&(s=n),n=n.sibling;s===null?t.tail=null:s.sibling=null;break;case"collapsed":s=t.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function tn(t){var n=t.alternate!==null&&t.alternate.child===t.child,s=0,l=0;if(n)for(var f=t.child;f!==null;)s|=f.lanes|f.childLanes,l|=f.subtreeFlags&65011712,l|=f.flags&65011712,f.return=t,f=f.sibling;else for(f=t.child;f!==null;)s|=f.lanes|f.childLanes,l|=f.subtreeFlags,l|=f.flags,f.return=t,f=f.sibling;return t.subtreeFlags|=l,t.childLanes=s,n}function nM(t,n,s){var l=n.pendingProps;switch(Yu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return tn(n),null;case 1:return tn(n),null;case 3:return s=n.stateNode,l=null,t!==null&&(l=t.memoizedState.cache),n.memoizedState.cache!==l&&(n.flags|=2048),Ma(Sn),qe(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(t===null||t.child===null)&&(_r(n)?Ta(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Zu())),tn(n),null;case 26:var f=n.type,p=n.memoizedState;return t===null?(Ta(n),p!==null?(tn(n),G0(n,p)):(tn(n),Hf(n,f,null,l,s))):p?p!==t.memoizedState?(Ta(n),tn(n),G0(n,p)):(tn(n),n.flags&=-16777217):(t=t.memoizedProps,t!==l&&Ta(n),tn(n),Hf(n,f,t,l,s)),null;case 27:if(et(n),s=se.current,f=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==l&&Ta(n);else{if(!l){if(n.stateNode===null)throw Error(r(166));return tn(n),null}t=Ce.current,_r(n)?Sm(n):(t=jg(f,l,s),n.stateNode=t,Ta(n))}return tn(n),null;case 5:if(et(n),f=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==l&&Ta(n);else{if(!l){if(n.stateNode===null)throw Error(r(166));return tn(n),null}if(p=Ce.current,_r(n))Sm(n);else{var S=xc(se.current);switch(p){case 1:p=S.createElementNS("http://www.w3.org/2000/svg",f);break;case 2:p=S.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;default:switch(f){case"svg":p=S.createElementNS("http://www.w3.org/2000/svg",f);break;case"math":p=S.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;case"script":p=S.createElement("div"),p.innerHTML="<script><\/script>",p=p.removeChild(p.firstChild);break;case"select":p=typeof l.is=="string"?S.createElement("select",{is:l.is}):S.createElement("select"),l.multiple?p.multiple=!0:l.size&&(p.size=l.size);break;default:p=typeof l.is=="string"?S.createElement(f,{is:l.is}):S.createElement(f)}}p[cn]=n,p[Rn]=l;e:for(S=n.child;S!==null;){if(S.tag===5||S.tag===6)p.appendChild(S.stateNode);else if(S.tag!==4&&S.tag!==27&&S.child!==null){S.child.return=S,S=S.child;continue}if(S===n)break e;for(;S.sibling===null;){if(S.return===null||S.return===n)break e;S=S.return}S.sibling.return=S.return,S=S.sibling}n.stateNode=p;e:switch(In(p,f,l),f){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&Ta(n)}}return tn(n),Hf(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,s),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==l&&Ta(n);else{if(typeof l!="string"&&n.stateNode===null)throw Error(r(166));if(t=se.current,_r(n)){if(t=n.stateNode,s=n.memoizedProps,l=null,f=Un,f!==null)switch(f.tag){case 27:case 5:l=f.memoizedProps}t[cn]=n,t=!!(t.nodeValue===s||l!==null&&l.suppressHydrationWarning===!0||Fg(t.nodeValue,s)),t||Qa(n,!0)}else t=xc(t).createTextNode(l),t[cn]=n,n.stateNode=t}return tn(n),null;case 31:if(s=n.memoizedState,t===null||t.memoizedState!==null){if(l=_r(n),s!==null){if(t===null){if(!l)throw Error(r(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[cn]=n}else Is(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;tn(n),t=!1}else s=Zu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=s),t=!0;if(!t)return n.flags&256?(hi(n),n):(hi(n),null);if((n.flags&128)!==0)throw Error(r(558))}return tn(n),null;case 13:if(l=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(f=_r(n),l!==null&&l.dehydrated!==null){if(t===null){if(!f)throw Error(r(318));if(f=n.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(r(317));f[cn]=n}else Is(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;tn(n),f=!1}else f=Zu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=f),f=!0;if(!f)return n.flags&256?(hi(n),n):(hi(n),null)}return hi(n),(n.flags&128)!==0?(n.lanes=s,n):(s=l!==null,t=t!==null&&t.memoizedState!==null,s&&(l=n.child,f=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(f=l.alternate.memoizedState.cachePool.pool),p=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(p=l.memoizedState.cachePool.pool),p!==f&&(l.flags|=2048)),s!==t&&s&&(n.child.flags|=8192),ac(n,n.updateQueue),tn(n),null);case 4:return qe(),t===null&&ld(n.stateNode.containerInfo),tn(n),null;case 10:return Ma(n.type),tn(n),null;case 19:if(K(_n),l=n.memoizedState,l===null)return tn(n),null;if(f=(n.flags&128)!==0,p=l.rendering,p===null)if(f)zo(l,!1);else{if(hn!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(p=Wl(t),p!==null){for(n.flags|=128,zo(l,!1),t=p.updateQueue,n.updateQueue=t,ac(n,t),n.subtreeFlags=0,t=s,s=n.child;s!==null;)mm(s,t),s=s.sibling;return ye(_n,_n.current&1|2),Rt&&xa(n,l.treeForkCount),n.child}t=t.sibling}l.tail!==null&&Dt()>cc&&(n.flags|=128,f=!0,zo(l,!1),n.lanes=4194304)}else{if(!f)if(t=Wl(p),t!==null){if(n.flags|=128,f=!0,t=t.updateQueue,n.updateQueue=t,ac(n,t),zo(l,!0),l.tail===null&&l.tailMode==="hidden"&&!p.alternate&&!Rt)return tn(n),null}else 2*Dt()-l.renderingStartTime>cc&&s!==536870912&&(n.flags|=128,f=!0,zo(l,!1),n.lanes=4194304);l.isBackwards?(p.sibling=n.child,n.child=p):(t=l.last,t!==null?t.sibling=p:n.child=p,l.last=p)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=Dt(),t.sibling=null,s=_n.current,ye(_n,f?s&1|2:s&1),Rt&&xa(n,l.treeForkCount),t):(tn(n),null);case 22:case 23:return hi(n),cf(),l=n.memoizedState!==null,t!==null?t.memoizedState!==null!==l&&(n.flags|=8192):l&&(n.flags|=8192),l?(s&536870912)!==0&&(n.flags&128)===0&&(tn(n),n.subtreeFlags&6&&(n.flags|=8192)):tn(n),s=n.updateQueue,s!==null&&ac(n,s.retryQueue),s=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),l=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(l=n.memoizedState.cachePool.pool),l!==s&&(n.flags|=2048),t!==null&&K(zs),null;case 24:return s=null,t!==null&&(s=t.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),Ma(Sn),tn(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function iM(t,n){switch(Yu(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Ma(Sn),qe(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return et(n),null;case 31:if(n.memoizedState!==null){if(hi(n),n.alternate===null)throw Error(r(340));Is()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(hi(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));Is()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return K(_n),null;case 4:return qe(),null;case 10:return Ma(n.type),null;case 22:case 23:return hi(n),cf(),t!==null&&K(zs),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Ma(Sn),null;case 25:return null;default:return null}}function V0(t,n){switch(Yu(n),n.tag){case 3:Ma(Sn),qe();break;case 26:case 27:case 5:et(n);break;case 4:qe();break;case 31:n.memoizedState!==null&&hi(n);break;case 13:hi(n);break;case 19:K(_n);break;case 10:Ma(n.type);break;case 22:case 23:hi(n),cf(),t!==null&&K(zs);break;case 24:Ma(Sn)}}function Ho(t,n){try{var s=n.updateQueue,l=s!==null?s.lastEffect:null;if(l!==null){var f=l.next;s=f;do{if((s.tag&t)===t){l=void 0;var p=s.create,S=s.inst;l=p(),S.destroy=l}s=s.next}while(s!==f)}}catch(C){Xt(n,n.return,C)}}function as(t,n,s){try{var l=n.updateQueue,f=l!==null?l.lastEffect:null;if(f!==null){var p=f.next;l=p;do{if((l.tag&t)===t){var S=l.inst,C=S.destroy;if(C!==void 0){S.destroy=void 0,f=n;var G=s,ae=C;try{ae()}catch(ve){Xt(f,G,ve)}}}l=l.next}while(l!==p)}}catch(ve){Xt(n,n.return,ve)}}function k0(t){var n=t.updateQueue;if(n!==null){var s=t.stateNode;try{Um(n,s)}catch(l){Xt(t,t.return,l)}}}function X0(t,n,s){s.props=Xs(t.type,t.memoizedProps),s.state=t.memoizedState;try{s.componentWillUnmount()}catch(l){Xt(t,n,l)}}function Go(t,n){try{var s=t.ref;if(s!==null){switch(t.tag){case 26:case 27:case 5:var l=t.stateNode;break;case 30:l=t.stateNode;break;default:l=t.stateNode}typeof s=="function"?t.refCleanup=s(l):s.current=l}}catch(f){Xt(t,n,f)}}function na(t,n){var s=t.ref,l=t.refCleanup;if(s!==null)if(typeof l=="function")try{l()}catch(f){Xt(t,n,f)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(f){Xt(t,n,f)}else s.current=null}function W0(t){var n=t.type,s=t.memoizedProps,l=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":s.autoFocus&&l.focus();break e;case"img":s.src?l.src=s.src:s.srcSet&&(l.srcset=s.srcSet)}}catch(f){Xt(t,t.return,f)}}function Gf(t,n,s){try{var l=t.stateNode;TM(l,t.type,s,n),l[Rn]=n}catch(f){Xt(t,t.return,f)}}function q0(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&fs(t.type)||t.tag===4}function Vf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||q0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&fs(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function kf(t,n,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,n?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(t,n):(n=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,n.appendChild(t),s=s._reactRootContainer,s!=null||n.onclick!==null||(n.onclick=ga));else if(l!==4&&(l===27&&fs(t.type)&&(s=t.stateNode,n=null),t=t.child,t!==null))for(kf(t,n,s),t=t.sibling;t!==null;)kf(t,n,s),t=t.sibling}function sc(t,n,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,n?s.insertBefore(t,n):s.appendChild(t);else if(l!==4&&(l===27&&fs(t.type)&&(s=t.stateNode),t=t.child,t!==null))for(sc(t,n,s),t=t.sibling;t!==null;)sc(t,n,s),t=t.sibling}function Y0(t){var n=t.stateNode,s=t.memoizedProps;try{for(var l=t.type,f=n.attributes;f.length;)n.removeAttributeNode(f[0]);In(n,l,s),n[cn]=t,n[Rn]=s}catch(p){Xt(t,t.return,p)}}var Aa=!1,En=!1,Xf=!1,j0=typeof WeakSet=="function"?WeakSet:Set,Ln=null;function aM(t,n){if(t=t.containerInfo,fd=Ac,t=rm(t),Iu(t)){if("selectionStart"in t)var s={start:t.selectionStart,end:t.selectionEnd};else e:{s=(s=t.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var f=l.anchorOffset,p=l.focusNode;l=l.focusOffset;try{s.nodeType,p.nodeType}catch{s=null;break e}var S=0,C=-1,G=-1,ae=0,ve=0,Ee=t,le=null;t:for(;;){for(var de;Ee!==s||f!==0&&Ee.nodeType!==3||(C=S+f),Ee!==p||l!==0&&Ee.nodeType!==3||(G=S+l),Ee.nodeType===3&&(S+=Ee.nodeValue.length),(de=Ee.firstChild)!==null;)le=Ee,Ee=de;for(;;){if(Ee===t)break t;if(le===s&&++ae===f&&(C=S),le===p&&++ve===l&&(G=S),(de=Ee.nextSibling)!==null)break;Ee=le,le=Ee.parentNode}Ee=de}s=C===-1||G===-1?null:{start:C,end:G}}else s=null}s=s||{start:0,end:0}}else s=null;for(dd={focusedElem:t,selectionRange:s},Ac=!1,Ln=n;Ln!==null;)if(n=Ln,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,Ln=t;else for(;Ln!==null;){switch(n=Ln,p=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(s=0;s<t.length;s++)f=t[s],f.ref.impl=f.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&p!==null){t=void 0,s=n,f=p.memoizedProps,p=p.memoizedState,l=s.stateNode;try{var Je=Xs(s.type,f);t=l.getSnapshotBeforeUpdate(Je,p),l.__reactInternalSnapshotBeforeUpdate=t}catch(at){Xt(s,s.return,at)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,s=t.nodeType,s===9)md(t);else if(s===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":md(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,Ln=t;break}Ln=n.return}}function Z0(t,n,s){var l=s.flags;switch(s.tag){case 0:case 11:case 15:Ca(t,s),l&4&&Ho(5,s);break;case 1:if(Ca(t,s),l&4)if(t=s.stateNode,n===null)try{t.componentDidMount()}catch(S){Xt(s,s.return,S)}else{var f=Xs(s.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(f,n,t.__reactInternalSnapshotBeforeUpdate)}catch(S){Xt(s,s.return,S)}}l&64&&k0(s),l&512&&Go(s,s.return);break;case 3:if(Ca(t,s),l&64&&(t=s.updateQueue,t!==null)){if(n=null,s.child!==null)switch(s.child.tag){case 27:case 5:n=s.child.stateNode;break;case 1:n=s.child.stateNode}try{Um(t,n)}catch(S){Xt(s,s.return,S)}}break;case 27:n===null&&l&4&&Y0(s);case 26:case 5:Ca(t,s),n===null&&l&4&&W0(s),l&512&&Go(s,s.return);break;case 12:Ca(t,s);break;case 31:Ca(t,s),l&4&&J0(t,s);break;case 13:Ca(t,s),l&4&&$0(t,s),l&64&&(t=s.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(s=hM.bind(null,s),UM(t,s))));break;case 22:if(l=s.memoizedState!==null||Aa,!l){n=n!==null&&n.memoizedState!==null||En,f=Aa;var p=En;Aa=l,(En=n)&&!p?wa(t,s,(s.subtreeFlags&8772)!==0):Ca(t,s),Aa=f,En=p}break;case 30:break;default:Ca(t,s)}}function K0(t){var n=t.alternate;n!==null&&(t.alternate=null,K0(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&$n(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var ln=null,ti=!1;function Ra(t,n,s){for(s=s.child;s!==null;)Q0(t,n,s),s=s.sibling}function Q0(t,n,s){if(me&&typeof me.onCommitFiberUnmount=="function")try{me.onCommitFiberUnmount(he,s)}catch{}switch(s.tag){case 26:En||na(s,n),Ra(t,n,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:En||na(s,n);var l=ln,f=ti;fs(s.type)&&(ln=s.stateNode,ti=!1),Ra(t,n,s),Ko(s.stateNode),ln=l,ti=f;break;case 5:En||na(s,n);case 6:if(l=ln,f=ti,ln=null,Ra(t,n,s),ln=l,ti=f,ln!==null)if(ti)try{(ln.nodeType===9?ln.body:ln.nodeName==="HTML"?ln.ownerDocument.body:ln).removeChild(s.stateNode)}catch(p){Xt(s,n,p)}else try{ln.removeChild(s.stateNode)}catch(p){Xt(s,n,p)}break;case 18:ln!==null&&(ti?(t=ln,kg(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,s.stateNode),Br(t)):kg(ln,s.stateNode));break;case 4:l=ln,f=ti,ln=s.stateNode.containerInfo,ti=!0,Ra(t,n,s),ln=l,ti=f;break;case 0:case 11:case 14:case 15:as(2,s,n),En||as(4,s,n),Ra(t,n,s);break;case 1:En||(na(s,n),l=s.stateNode,typeof l.componentWillUnmount=="function"&&X0(s,n,l)),Ra(t,n,s);break;case 21:Ra(t,n,s);break;case 22:En=(l=En)||s.memoizedState!==null,Ra(t,n,s),En=l;break;default:Ra(t,n,s)}}function J0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Br(t)}catch(s){Xt(n,n.return,s)}}}function $0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Br(t)}catch(s){Xt(n,n.return,s)}}function sM(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new j0),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new j0),n;default:throw Error(r(435,t.tag))}}function rc(t,n){var s=sM(t);n.forEach(function(l){if(!s.has(l)){s.add(l);var f=pM.bind(null,t,l);l.then(f,f)}})}function ni(t,n){var s=n.deletions;if(s!==null)for(var l=0;l<s.length;l++){var f=s[l],p=t,S=n,C=S;e:for(;C!==null;){switch(C.tag){case 27:if(fs(C.type)){ln=C.stateNode,ti=!1;break e}break;case 5:ln=C.stateNode,ti=!1;break e;case 3:case 4:ln=C.stateNode.containerInfo,ti=!0;break e}C=C.return}if(ln===null)throw Error(r(160));Q0(p,S,f),ln=null,ti=!1,p=f.alternate,p!==null&&(p.return=null),f.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)eg(n,t),n=n.sibling}var Xi=null;function eg(t,n){var s=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:ni(n,t),ii(t),l&4&&(as(3,t,t.return),Ho(3,t),as(5,t,t.return));break;case 1:ni(n,t),ii(t),l&512&&(En||s===null||na(s,s.return)),l&64&&Aa&&(t=t.updateQueue,t!==null&&(l=t.callbacks,l!==null&&(s=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=s===null?l:s.concat(l))));break;case 26:var f=Xi;if(ni(n,t),ii(t),l&512&&(En||s===null||na(s,s.return)),l&4){var p=s!==null?s.memoizedState:null;if(l=t.memoizedState,s===null)if(l===null)if(t.stateNode===null){e:{l=t.type,s=t.memoizedProps,f=f.ownerDocument||f;t:switch(l){case"title":p=f.getElementsByTagName("title")[0],(!p||p[Bi]||p[cn]||p.namespaceURI==="http://www.w3.org/2000/svg"||p.hasAttribute("itemprop"))&&(p=f.createElement(l),f.head.insertBefore(p,f.querySelector("head > title"))),In(p,l,s),p[cn]=t,rn(p),l=p;break e;case"link":var S=e_("link","href",f).get(l+(s.href||""));if(S){for(var C=0;C<S.length;C++)if(p=S[C],p.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&p.getAttribute("rel")===(s.rel==null?null:s.rel)&&p.getAttribute("title")===(s.title==null?null:s.title)&&p.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){S.splice(C,1);break t}}p=f.createElement(l),In(p,l,s),f.head.appendChild(p);break;case"meta":if(S=e_("meta","content",f).get(l+(s.content||""))){for(C=0;C<S.length;C++)if(p=S[C],p.getAttribute("content")===(s.content==null?null:""+s.content)&&p.getAttribute("name")===(s.name==null?null:s.name)&&p.getAttribute("property")===(s.property==null?null:s.property)&&p.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&p.getAttribute("charset")===(s.charSet==null?null:s.charSet)){S.splice(C,1);break t}}p=f.createElement(l),In(p,l,s),f.head.appendChild(p);break;default:throw Error(r(468,l))}p[cn]=t,rn(p),l=p}t.stateNode=l}else t_(f,t.type,t.stateNode);else t.stateNode=$g(f,l,t.memoizedProps);else p!==l?(p===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):p.count--,l===null?t_(f,t.type,t.stateNode):$g(f,l,t.memoizedProps)):l===null&&t.stateNode!==null&&Gf(t,t.memoizedProps,s.memoizedProps)}break;case 27:ni(n,t),ii(t),l&512&&(En||s===null||na(s,s.return)),s!==null&&l&4&&Gf(t,t.memoizedProps,s.memoizedProps);break;case 5:if(ni(n,t),ii(t),l&512&&(En||s===null||na(s,s.return)),t.flags&32){f=t.stateNode;try{ci(f,"")}catch(Je){Xt(t,t.return,Je)}}l&4&&t.stateNode!=null&&(f=t.memoizedProps,Gf(t,f,s!==null?s.memoizedProps:f)),l&1024&&(Xf=!0);break;case 6:if(ni(n,t),ii(t),l&4){if(t.stateNode===null)throw Error(r(162));l=t.memoizedProps,s=t.stateNode;try{s.nodeValue=l}catch(Je){Xt(t,t.return,Je)}}break;case 3:if(yc=null,f=Xi,Xi=Sc(n.containerInfo),ni(n,t),Xi=f,ii(t),l&4&&s!==null&&s.memoizedState.isDehydrated)try{Br(n.containerInfo)}catch(Je){Xt(t,t.return,Je)}Xf&&(Xf=!1,tg(t));break;case 4:l=Xi,Xi=Sc(t.stateNode.containerInfo),ni(n,t),ii(t),Xi=l;break;case 12:ni(n,t),ii(t);break;case 31:ni(n,t),ii(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,rc(t,l)));break;case 13:ni(n,t),ii(t),t.child.flags&8192&&t.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(lc=Dt()),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,rc(t,l)));break;case 22:f=t.memoizedState!==null;var G=s!==null&&s.memoizedState!==null,ae=Aa,ve=En;if(Aa=ae||f,En=ve||G,ni(n,t),En=ve,Aa=ae,ii(t),l&8192)e:for(n=t.stateNode,n._visibility=f?n._visibility&-2:n._visibility|1,f&&(s===null||G||Aa||En||Ws(t)),s=null,n=t;;){if(n.tag===5||n.tag===26){if(s===null){G=s=n;try{if(p=G.stateNode,f)S=p.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{C=G.stateNode;var Ee=G.memoizedProps.style,le=Ee!=null&&Ee.hasOwnProperty("display")?Ee.display:null;C.style.display=le==null||typeof le=="boolean"?"":(""+le).trim()}}catch(Je){Xt(G,G.return,Je)}}}else if(n.tag===6){if(s===null){G=n;try{G.stateNode.nodeValue=f?"":G.memoizedProps}catch(Je){Xt(G,G.return,Je)}}}else if(n.tag===18){if(s===null){G=n;try{var de=G.stateNode;f?Xg(de,!0):Xg(G.stateNode,!1)}catch(Je){Xt(G,G.return,Je)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;s===n&&(s=null),n=n.return}s===n&&(s=null),n.sibling.return=n.return,n=n.sibling}l&4&&(l=t.updateQueue,l!==null&&(s=l.retryQueue,s!==null&&(l.retryQueue=null,rc(t,s))));break;case 19:ni(n,t),ii(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,rc(t,l)));break;case 30:break;case 21:break;default:ni(n,t),ii(t)}}function ii(t){var n=t.flags;if(n&2){try{for(var s,l=t.return;l!==null;){if(q0(l)){s=l;break}l=l.return}if(s==null)throw Error(r(160));switch(s.tag){case 27:var f=s.stateNode,p=Vf(t);sc(t,p,f);break;case 5:var S=s.stateNode;s.flags&32&&(ci(S,""),s.flags&=-33);var C=Vf(t);sc(t,C,S);break;case 3:case 4:var G=s.stateNode.containerInfo,ae=Vf(t);kf(t,ae,G);break;default:throw Error(r(161))}}catch(ve){Xt(t,t.return,ve)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function tg(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;tg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function Ca(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Z0(t,n.alternate,n),n=n.sibling}function Ws(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:as(4,n,n.return),Ws(n);break;case 1:na(n,n.return);var s=n.stateNode;typeof s.componentWillUnmount=="function"&&X0(n,n.return,s),Ws(n);break;case 27:Ko(n.stateNode);case 26:case 5:na(n,n.return),Ws(n);break;case 22:n.memoizedState===null&&Ws(n);break;case 30:Ws(n);break;default:Ws(n)}t=t.sibling}}function wa(t,n,s){for(s=s&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var l=n.alternate,f=t,p=n,S=p.flags;switch(p.tag){case 0:case 11:case 15:wa(f,p,s),Ho(4,p);break;case 1:if(wa(f,p,s),l=p,f=l.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(ae){Xt(l,l.return,ae)}if(l=p,f=l.updateQueue,f!==null){var C=l.stateNode;try{var G=f.shared.hiddenCallbacks;if(G!==null)for(f.shared.hiddenCallbacks=null,f=0;f<G.length;f++)Nm(G[f],C)}catch(ae){Xt(l,l.return,ae)}}s&&S&64&&k0(p),Go(p,p.return);break;case 27:Y0(p);case 26:case 5:wa(f,p,s),s&&l===null&&S&4&&W0(p),Go(p,p.return);break;case 12:wa(f,p,s);break;case 31:wa(f,p,s),s&&S&4&&J0(f,p);break;case 13:wa(f,p,s),s&&S&4&&$0(f,p);break;case 22:p.memoizedState===null&&wa(f,p,s),Go(p,p.return);break;case 30:break;default:wa(f,p,s)}n=n.sibling}}function Wf(t,n){var s=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==s&&(t!=null&&t.refCount++,s!=null&&Ro(s))}function qf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Ro(t))}function Wi(t,n,s,l){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)ng(t,n,s,l),n=n.sibling}function ng(t,n,s,l){var f=n.flags;switch(n.tag){case 0:case 11:case 15:Wi(t,n,s,l),f&2048&&Ho(9,n);break;case 1:Wi(t,n,s,l);break;case 3:Wi(t,n,s,l),f&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Ro(t)));break;case 12:if(f&2048){Wi(t,n,s,l),t=n.stateNode;try{var p=n.memoizedProps,S=p.id,C=p.onPostCommit;typeof C=="function"&&C(S,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(G){Xt(n,n.return,G)}}else Wi(t,n,s,l);break;case 31:Wi(t,n,s,l);break;case 13:Wi(t,n,s,l);break;case 23:break;case 22:p=n.stateNode,S=n.alternate,n.memoizedState!==null?p._visibility&2?Wi(t,n,s,l):Vo(t,n):p._visibility&2?Wi(t,n,s,l):(p._visibility|=2,Rr(t,n,s,l,(n.subtreeFlags&10256)!==0||!1)),f&2048&&Wf(S,n);break;case 24:Wi(t,n,s,l),f&2048&&qf(n.alternate,n);break;default:Wi(t,n,s,l)}}function Rr(t,n,s,l,f){for(f=f&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var p=t,S=n,C=s,G=l,ae=S.flags;switch(S.tag){case 0:case 11:case 15:Rr(p,S,C,G,f),Ho(8,S);break;case 23:break;case 22:var ve=S.stateNode;S.memoizedState!==null?ve._visibility&2?Rr(p,S,C,G,f):Vo(p,S):(ve._visibility|=2,Rr(p,S,C,G,f)),f&&ae&2048&&Wf(S.alternate,S);break;case 24:Rr(p,S,C,G,f),f&&ae&2048&&qf(S.alternate,S);break;default:Rr(p,S,C,G,f)}n=n.sibling}}function Vo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var s=t,l=n,f=l.flags;switch(l.tag){case 22:Vo(s,l),f&2048&&Wf(l.alternate,l);break;case 24:Vo(s,l),f&2048&&qf(l.alternate,l);break;default:Vo(s,l)}n=n.sibling}}var ko=8192;function Cr(t,n,s){if(t.subtreeFlags&ko)for(t=t.child;t!==null;)ig(t,n,s),t=t.sibling}function ig(t,n,s){switch(t.tag){case 26:Cr(t,n,s),t.flags&ko&&t.memoizedState!==null&&WM(s,Xi,t.memoizedState,t.memoizedProps);break;case 5:Cr(t,n,s);break;case 3:case 4:var l=Xi;Xi=Sc(t.stateNode.containerInfo),Cr(t,n,s),Xi=l;break;case 22:t.memoizedState===null&&(l=t.alternate,l!==null&&l.memoizedState!==null?(l=ko,ko=16777216,Cr(t,n,s),ko=l):Cr(t,n,s));break;default:Cr(t,n,s)}}function ag(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function Xo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var s=0;s<n.length;s++){var l=n[s];Ln=l,rg(l,t)}ag(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)sg(t),t=t.sibling}function sg(t){switch(t.tag){case 0:case 11:case 15:Xo(t),t.flags&2048&&as(9,t,t.return);break;case 3:Xo(t);break;case 12:Xo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,oc(t)):Xo(t);break;default:Xo(t)}}function oc(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var s=0;s<n.length;s++){var l=n[s];Ln=l,rg(l,t)}ag(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:as(8,n,n.return),oc(n);break;case 22:s=n.stateNode,s._visibility&2&&(s._visibility&=-3,oc(n));break;default:oc(n)}t=t.sibling}}function rg(t,n){for(;Ln!==null;){var s=Ln;switch(s.tag){case 0:case 11:case 15:as(8,s,n);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var l=s.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Ro(s.memoizedState.cache)}if(l=s.child,l!==null)l.return=s,Ln=l;else e:for(s=t;Ln!==null;){l=Ln;var f=l.sibling,p=l.return;if(K0(l),l===s){Ln=null;break e}if(f!==null){f.return=p,Ln=f;break e}Ln=p}}}var rM={getCacheForType:function(t){var n=On(Sn),s=n.data.get(t);return s===void 0&&(s=t(),n.data.set(t,s)),s},cacheSignal:function(){return On(Sn).controller.signal}},oM=typeof WeakMap=="function"?WeakMap:Map,Bt=0,Jt=null,St=null,Tt=0,kt=0,pi=null,ss=!1,wr=!1,Yf=!1,Da=0,hn=0,rs=0,qs=0,jf=0,mi=0,Dr=0,Wo=null,ai=null,Zf=!1,lc=0,og=0,cc=1/0,uc=null,os=null,Cn=0,ls=null,Lr=null,La=0,Kf=0,Qf=null,lg=null,qo=0,Jf=null;function gi(){return(Bt&2)!==0&&Tt!==0?Tt&-Tt:F.T!==null?ad():Si()}function cg(){if(mi===0)if((Tt&536870912)===0||Rt){var t=Ye;Ye<<=1,(Ye&3932160)===0&&(Ye=262144),mi=t}else mi=536870912;return t=di.current,t!==null&&(t.flags|=32),mi}function si(t,n,s){(t===Jt&&(kt===2||kt===9)||t.cancelPendingCommit!==null)&&(Nr(t,0),cs(t,Tt,mi,!1)),Ge(t,s),((Bt&2)===0||t!==Jt)&&(t===Jt&&((Bt&2)===0&&(qs|=s),hn===4&&cs(t,Tt,mi,!1)),ia(t))}function ug(t,n,s){if((Bt&6)!==0)throw Error(r(327));var l=!s&&(n&127)===0&&(n&t.expiredLanes)===0||Re(t,n),f=l?uM(t,n):ed(t,n,!0),p=l;do{if(f===0){wr&&!l&&cs(t,n,0,!1);break}else{if(s=t.current.alternate,p&&!lM(s)){f=ed(t,n,!1),p=!1;continue}if(f===2){if(p=n,t.errorRecoveryDisabledLanes&p)var S=0;else S=t.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){n=S;e:{var C=t;f=Wo;var G=C.current.memoizedState.isDehydrated;if(G&&(Nr(C,S).flags|=256),S=ed(C,S,!1),S!==2){if(Yf&&!G){C.errorRecoveryDisabledLanes|=p,qs|=p,f=4;break e}p=ai,ai=f,p!==null&&(ai===null?ai=p:ai.push.apply(ai,p))}f=S}if(p=!1,f!==2)continue}}if(f===1){Nr(t,0),cs(t,n,0,!0);break}e:{switch(l=t,p=f,p){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:cs(l,n,mi,!ss);break e;case 2:ai=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(f=lc+300-Dt(),10<f)){if(cs(l,n,mi,!ss),ce(l,0,!0)!==0)break e;La=n,l.timeoutHandle=Gg(fg.bind(null,l,s,ai,uc,Zf,n,mi,qs,Dr,ss,p,"Throttled",-0,0),f);break e}fg(l,s,ai,uc,Zf,n,mi,qs,Dr,ss,p,null,-0,0)}}break}while(!0);ia(t)}function fg(t,n,s,l,f,p,S,C,G,ae,ve,Ee,le,de){if(t.timeoutHandle=-1,Ee=n.subtreeFlags,Ee&8192||(Ee&16785408)===16785408){Ee={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ga},ig(n,p,Ee);var Je=(p&62914560)===p?lc-Dt():(p&4194048)===p?og-Dt():0;if(Je=qM(Ee,Je),Je!==null){La=p,t.cancelPendingCommit=Je(xg.bind(null,t,n,p,s,l,f,S,C,G,ve,Ee,null,le,de)),cs(t,p,S,!ae);return}}xg(t,n,p,s,l,f,S,C,G)}function lM(t){for(var n=t;;){var s=n.tag;if((s===0||s===11||s===15)&&n.flags&16384&&(s=n.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var l=0;l<s.length;l++){var f=s[l],p=f.getSnapshot;f=f.value;try{if(!ui(p(),f))return!1}catch{return!1}}if(s=n.child,n.subtreeFlags&16384&&s!==null)s.return=n,n=s;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function cs(t,n,s,l){n&=~jf,n&=~qs,t.suspendedLanes|=n,t.pingedLanes&=~n,l&&(t.warmLanes|=n),l=t.expirationTimes;for(var f=n;0<f;){var p=31-He(f),S=1<<p;l[p]=-1,f&=~S}s!==0&&Lt(t,s,n)}function fc(){return(Bt&6)===0?(Yo(0),!1):!0}function $f(){if(St!==null){if(kt===0)var t=St.return;else t=St,Sa=Fs=null,mf(t),yr=null,wo=0,t=St;for(;t!==null;)V0(t.alternate,t),t=t.return;St=null}}function Nr(t,n){var s=t.timeoutHandle;s!==-1&&(t.timeoutHandle=-1,CM(s)),s=t.cancelPendingCommit,s!==null&&(t.cancelPendingCommit=null,s()),La=0,$f(),Jt=t,St=s=va(t.current,null),Tt=n,kt=0,pi=null,ss=!1,wr=Re(t,n),Yf=!1,Dr=mi=jf=qs=rs=hn=0,ai=Wo=null,Zf=!1,(n&8)!==0&&(n|=n&32);var l=t.entangledLanes;if(l!==0)for(t=t.entanglements,l&=n;0<l;){var f=31-He(l),p=1<<f;n|=t[f],l&=~p}return Da=n,Nl(),s}function dg(t,n){dt=null,F.H=Fo,n===Mr||n===Hl?(n=Cm(),kt=3):n===nf?(n=Cm(),kt=4):kt=n===Lf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,pi=n,St===null&&(hn=1,ec(t,bi(n,t.current)))}function hg(){var t=di.current;return t===null?!0:(Tt&4194048)===Tt?Ci===null:(Tt&62914560)===Tt||(Tt&536870912)!==0?t===Ci:!1}function pg(){var t=F.H;return F.H=Fo,t===null?Fo:t}function mg(){var t=F.A;return F.A=rM,t}function dc(){hn=4,ss||(Tt&4194048)!==Tt&&di.current!==null||(wr=!0),(rs&134217727)===0&&(qs&134217727)===0||Jt===null||cs(Jt,Tt,mi,!1)}function ed(t,n,s){var l=Bt;Bt|=2;var f=pg(),p=mg();(Jt!==t||Tt!==n)&&(uc=null,Nr(t,n)),n=!1;var S=hn;e:do try{if(kt!==0&&St!==null){var C=St,G=pi;switch(kt){case 8:$f(),S=6;break e;case 3:case 2:case 9:case 6:di.current===null&&(n=!0);var ae=kt;if(kt=0,pi=null,Ur(t,C,G,ae),s&&wr){S=0;break e}break;default:ae=kt,kt=0,pi=null,Ur(t,C,G,ae)}}cM(),S=hn;break}catch(ve){dg(t,ve)}while(!0);return n&&t.shellSuspendCounter++,Sa=Fs=null,Bt=l,F.H=f,F.A=p,St===null&&(Jt=null,Tt=0,Nl()),S}function cM(){for(;St!==null;)gg(St)}function uM(t,n){var s=Bt;Bt|=2;var l=pg(),f=mg();Jt!==t||Tt!==n?(uc=null,cc=Dt()+500,Nr(t,n)):wr=Re(t,n);e:do try{if(kt!==0&&St!==null){n=St;var p=pi;t:switch(kt){case 1:kt=0,pi=null,Ur(t,n,p,1);break;case 2:case 9:if(Am(p)){kt=0,pi=null,_g(n);break}n=function(){kt!==2&&kt!==9||Jt!==t||(kt=7),ia(t)},p.then(n,n);break e;case 3:kt=7;break e;case 4:kt=5;break e;case 7:Am(p)?(kt=0,pi=null,_g(n)):(kt=0,pi=null,Ur(t,n,p,7));break;case 5:var S=null;switch(St.tag){case 26:S=St.memoizedState;case 5:case 27:var C=St;if(S?n_(S):C.stateNode.complete){kt=0,pi=null;var G=C.sibling;if(G!==null)St=G;else{var ae=C.return;ae!==null?(St=ae,hc(ae)):St=null}break t}}kt=0,pi=null,Ur(t,n,p,5);break;case 6:kt=0,pi=null,Ur(t,n,p,6);break;case 8:$f(),hn=6;break e;default:throw Error(r(462))}}fM();break}catch(ve){dg(t,ve)}while(!0);return Sa=Fs=null,F.H=l,F.A=f,Bt=s,St!==null?0:(Jt=null,Tt=0,Nl(),hn)}function fM(){for(;St!==null&&!jt();)gg(St)}function gg(t){var n=H0(t.alternate,t,Da);t.memoizedProps=t.pendingProps,n===null?hc(t):St=n}function _g(t){var n=t,s=n.alternate;switch(n.tag){case 15:case 0:n=O0(s,n,n.pendingProps,n.type,void 0,Tt);break;case 11:n=O0(s,n,n.pendingProps,n.type.render,n.ref,Tt);break;case 5:mf(n);default:V0(s,n),n=St=mm(n,Da),n=H0(s,n,Da)}t.memoizedProps=t.pendingProps,n===null?hc(t):St=n}function Ur(t,n,s,l){Sa=Fs=null,mf(n),yr=null,wo=0;var f=n.return;try{if($S(t,f,n,s,Tt)){hn=1,ec(t,bi(s,t.current)),St=null;return}}catch(p){if(f!==null)throw St=f,p;hn=1,ec(t,bi(s,t.current)),St=null;return}n.flags&32768?(Rt||l===1?t=!0:wr||(Tt&536870912)!==0?t=!1:(ss=t=!0,(l===2||l===9||l===3||l===6)&&(l=di.current,l!==null&&l.tag===13&&(l.flags|=16384))),vg(n,t)):hc(n)}function hc(t){var n=t;do{if((n.flags&32768)!==0){vg(n,ss);return}t=n.return;var s=nM(n.alternate,n,Da);if(s!==null){St=s;return}if(n=n.sibling,n!==null){St=n;return}St=n=t}while(n!==null);hn===0&&(hn=5)}function vg(t,n){do{var s=iM(t.alternate,t);if(s!==null){s.flags&=32767,St=s;return}if(s=t.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!n&&(t=t.sibling,t!==null)){St=t;return}St=t=s}while(t!==null);hn=6,St=null}function xg(t,n,s,l,f,p,S,C,G){t.cancelPendingCommit=null;do pc();while(Cn!==0);if((Bt&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));if(p=n.lanes|n.childLanes,p|=Gu,Ft(t,s,p,S,C,G),t===Jt&&(St=Jt=null,Tt=0),Lr=n,ls=t,La=s,Kf=p,Qf=f,lg=l,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,mM(J,function(){return bg(),null})):(t.callbackNode=null,t.callbackPriority=0),l=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||l){l=F.T,F.T=null,f=H.p,H.p=2,S=Bt,Bt|=4;try{aM(t,n,s)}finally{Bt=S,H.p=f,F.T=l}}Cn=1,Sg(),Mg(),yg()}}function Sg(){if(Cn===1){Cn=0;var t=ls,n=Lr,s=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||s){s=F.T,F.T=null;var l=H.p;H.p=2;var f=Bt;Bt|=4;try{eg(n,t);var p=dd,S=rm(t.containerInfo),C=p.focusedElem,G=p.selectionRange;if(S!==C&&C&&C.ownerDocument&&sm(C.ownerDocument.documentElement,C)){if(G!==null&&Iu(C)){var ae=G.start,ve=G.end;if(ve===void 0&&(ve=ae),"selectionStart"in C)C.selectionStart=ae,C.selectionEnd=Math.min(ve,C.value.length);else{var Ee=C.ownerDocument||document,le=Ee&&Ee.defaultView||window;if(le.getSelection){var de=le.getSelection(),Je=C.textContent.length,at=Math.min(G.start,Je),Qt=G.end===void 0?at:Math.min(G.end,Je);!de.extend&&at>Qt&&(S=Qt,Qt=at,at=S);var Q=am(C,at),W=am(C,Qt);if(Q&&W&&(de.rangeCount!==1||de.anchorNode!==Q.node||de.anchorOffset!==Q.offset||de.focusNode!==W.node||de.focusOffset!==W.offset)){var ne=Ee.createRange();ne.setStart(Q.node,Q.offset),de.removeAllRanges(),at>Qt?(de.addRange(ne),de.extend(W.node,W.offset)):(ne.setEnd(W.node,W.offset),de.addRange(ne))}}}}for(Ee=[],de=C;de=de.parentNode;)de.nodeType===1&&Ee.push({element:de,left:de.scrollLeft,top:de.scrollTop});for(typeof C.focus=="function"&&C.focus(),C=0;C<Ee.length;C++){var Se=Ee[C];Se.element.scrollLeft=Se.left,Se.element.scrollTop=Se.top}}Ac=!!fd,dd=fd=null}finally{Bt=f,H.p=l,F.T=s}}t.current=n,Cn=2}}function Mg(){if(Cn===2){Cn=0;var t=ls,n=Lr,s=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||s){s=F.T,F.T=null;var l=H.p;H.p=2;var f=Bt;Bt|=4;try{Z0(t,n.alternate,n)}finally{Bt=f,H.p=l,F.T=s}}Cn=3}}function yg(){if(Cn===4||Cn===3){Cn=0,j();var t=ls,n=Lr,s=La,l=lg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Cn=5:(Cn=0,Lr=ls=null,Eg(t,t.pendingLanes));var f=t.pendingLanes;if(f===0&&(os=null),Cs(s),n=n.stateNode,me&&typeof me.onCommitFiberRoot=="function")try{me.onCommitFiberRoot(he,n,void 0,(n.current.flags&128)===128)}catch{}if(l!==null){n=F.T,f=H.p,H.p=2,F.T=null;try{for(var p=t.onRecoverableError,S=0;S<l.length;S++){var C=l[S];p(C.value,{componentStack:C.stack})}}finally{F.T=n,H.p=f}}(La&3)!==0&&pc(),ia(t),f=t.pendingLanes,(s&261930)!==0&&(f&42)!==0?t===Jf?qo++:(qo=0,Jf=t):qo=0,Yo(0)}}function Eg(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Ro(n)))}function pc(){return Sg(),Mg(),yg(),bg()}function bg(){if(Cn!==5)return!1;var t=ls,n=Kf;Kf=0;var s=Cs(La),l=F.T,f=H.p;try{H.p=32>s?32:s,F.T=null,s=Qf,Qf=null;var p=ls,S=La;if(Cn=0,Lr=ls=null,La=0,(Bt&6)!==0)throw Error(r(331));var C=Bt;if(Bt|=4,sg(p.current),ng(p,p.current,S,s),Bt=C,Yo(0,!1),me&&typeof me.onPostCommitFiberRoot=="function")try{me.onPostCommitFiberRoot(he,p)}catch{}return!0}finally{H.p=f,F.T=l,Eg(t,n)}}function Tg(t,n,s){n=bi(s,n),n=Df(t.stateNode,n,2),t=ts(t,n,2),t!==null&&(Ge(t,2),ia(t))}function Xt(t,n,s){if(t.tag===3)Tg(t,t,s);else for(;n!==null;){if(n.tag===3){Tg(n,t,s);break}else if(n.tag===1){var l=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(os===null||!os.has(l))){t=bi(s,t),s=A0(2),l=ts(n,s,2),l!==null&&(R0(s,l,n,t),Ge(l,2),ia(l));break}}n=n.return}}function td(t,n,s){var l=t.pingCache;if(l===null){l=t.pingCache=new oM;var f=new Set;l.set(n,f)}else f=l.get(n),f===void 0&&(f=new Set,l.set(n,f));f.has(s)||(Yf=!0,f.add(s),t=dM.bind(null,t,n,s),n.then(t,t))}function dM(t,n,s){var l=t.pingCache;l!==null&&l.delete(n),t.pingedLanes|=t.suspendedLanes&s,t.warmLanes&=~s,Jt===t&&(Tt&s)===s&&(hn===4||hn===3&&(Tt&62914560)===Tt&&300>Dt()-lc?(Bt&2)===0&&Nr(t,0):jf|=s,Dr===Tt&&(Dr=0)),ia(t)}function Ag(t,n){n===0&&(n=xe()),t=Os(t,n),t!==null&&(Ge(t,n),ia(t))}function hM(t){var n=t.memoizedState,s=0;n!==null&&(s=n.retryLane),Ag(t,s)}function pM(t,n){var s=0;switch(t.tag){case 31:case 13:var l=t.stateNode,f=t.memoizedState;f!==null&&(s=f.retryLane);break;case 19:l=t.stateNode;break;case 22:l=t.stateNode._retryCache;break;default:throw Error(r(314))}l!==null&&l.delete(n),Ag(t,s)}function mM(t,n){return sn(t,n)}var mc=null,Or=null,nd=!1,gc=!1,id=!1,us=0;function ia(t){t!==Or&&t.next===null&&(Or===null?mc=Or=t:Or=Or.next=t),gc=!0,nd||(nd=!0,_M())}function Yo(t,n){if(!id&&gc){id=!0;do for(var s=!1,l=mc;l!==null;){if(t!==0){var f=l.pendingLanes;if(f===0)var p=0;else{var S=l.suspendedLanes,C=l.pingedLanes;p=(1<<31-He(42|t)+1)-1,p&=f&~(S&~C),p=p&201326741?p&201326741|1:p?p|2:0}p!==0&&(s=!0,Dg(l,p))}else p=Tt,p=ce(l,l===Jt?p:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(p&3)===0||Re(l,p)||(s=!0,Dg(l,p));l=l.next}while(s);id=!1}}function gM(){Rg()}function Rg(){gc=nd=!1;var t=0;us!==0&&RM()&&(t=us);for(var n=Dt(),s=null,l=mc;l!==null;){var f=l.next,p=Cg(l,n);p===0?(l.next=null,s===null?mc=f:s.next=f,f===null&&(Or=s)):(s=l,(t!==0||(p&3)!==0)&&(gc=!0)),l=f}Cn!==0&&Cn!==5||Yo(t),us!==0&&(us=0)}function Cg(t,n){for(var s=t.suspendedLanes,l=t.pingedLanes,f=t.expirationTimes,p=t.pendingLanes&-62914561;0<p;){var S=31-He(p),C=1<<S,G=f[S];G===-1?((C&s)===0||(C&l)!==0)&&(f[S]=we(C,n)):G<=n&&(t.expiredLanes|=C),p&=~C}if(n=Jt,s=Tt,s=ce(t,t===n?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l=t.callbackNode,s===0||t===n&&(kt===2||kt===9)||t.cancelPendingCommit!==null)return l!==null&&l!==null&&It(l),t.callbackNode=null,t.callbackPriority=0;if((s&3)===0||Re(t,s)){if(n=s&-s,n===t.callbackPriority)return n;switch(l!==null&&It(l),Cs(s)){case 2:case 8:s=b;break;case 32:s=J;break;case 268435456:s=pe;break;default:s=J}return l=wg.bind(null,t),s=sn(s,l),t.callbackPriority=n,t.callbackNode=s,n}return l!==null&&l!==null&&It(l),t.callbackPriority=2,t.callbackNode=null,2}function wg(t,n){if(Cn!==0&&Cn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var s=t.callbackNode;if(pc()&&t.callbackNode!==s)return null;var l=Tt;return l=ce(t,t===Jt?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l===0?null:(ug(t,l,n),Cg(t,Dt()),t.callbackNode!=null&&t.callbackNode===s?wg.bind(null,t):null)}function Dg(t,n){if(pc())return null;ug(t,n,!0)}function _M(){wM(function(){(Bt&6)!==0?sn(U,gM):Rg()})}function ad(){if(us===0){var t=xr;t===0&&(t=Ue,Ue<<=1,(Ue&261888)===0&&(Ue=256)),us=t}return us}function Lg(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Ds(""+t)}function Ng(t,n){var s=n.ownerDocument.createElement("input");return s.name=n.name,s.value=n.value,t.id&&s.setAttribute("form",t.id),n.parentNode.insertBefore(s,n),t=new FormData(t),s.parentNode.removeChild(s),t}function vM(t,n,s,l,f){if(n==="submit"&&s&&s.stateNode===f){var p=Lg((f[Rn]||null).action),S=l.submitter;S&&(n=(n=S[Rn]||null)?Lg(n.formAction):S.getAttribute("formAction"),n!==null&&(p=n,S=null));var C=new Cl("action","action",null,l,f);t.push({event:C,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(us!==0){var G=S?Ng(f,S):new FormData(f);bf(s,{pending:!0,data:G,method:f.method,action:p},null,G)}}else typeof p=="function"&&(C.preventDefault(),G=S?Ng(f,S):new FormData(f),bf(s,{pending:!0,data:G,method:f.method,action:p},p,G))},currentTarget:f}]})}}for(var sd=0;sd<Hu.length;sd++){var rd=Hu[sd],xM=rd.toLowerCase(),SM=rd[0].toUpperCase()+rd.slice(1);ki(xM,"on"+SM)}ki(cm,"onAnimationEnd"),ki(um,"onAnimationIteration"),ki(fm,"onAnimationStart"),ki("dblclick","onDoubleClick"),ki("focusin","onFocus"),ki("focusout","onBlur"),ki(IS,"onTransitionRun"),ki(FS,"onTransitionStart"),ki(BS,"onTransitionCancel"),ki(dm,"onTransitionEnd"),oe("onMouseEnter",["mouseout","mouseover"]),oe("onMouseLeave",["mouseout","mouseover"]),oe("onPointerEnter",["pointerout","pointerover"]),oe("onPointerLeave",["pointerout","pointerover"]),Z("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Z("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Z("onBeforeInput",["compositionend","keypress","textInput","paste"]),Z("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Z("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Z("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var jo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),MM=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(jo));function Ug(t,n){n=(n&4)!==0;for(var s=0;s<t.length;s++){var l=t[s],f=l.event;l=l.listeners;e:{var p=void 0;if(n)for(var S=l.length-1;0<=S;S--){var C=l[S],G=C.instance,ae=C.currentTarget;if(C=C.listener,G!==p&&f.isPropagationStopped())break e;p=C,f.currentTarget=ae;try{p(f)}catch(ve){Ll(ve)}f.currentTarget=null,p=G}else for(S=0;S<l.length;S++){if(C=l[S],G=C.instance,ae=C.currentTarget,C=C.listener,G!==p&&f.isPropagationStopped())break e;p=C,f.currentTarget=ae;try{p(f)}catch(ve){Ll(ve)}f.currentTarget=null,p=G}}}}function Mt(t,n){var s=n[Jn];s===void 0&&(s=n[Jn]=new Set);var l=t+"__bubble";s.has(l)||(Og(n,t,2,!1),s.add(l))}function od(t,n,s){var l=0;n&&(l|=4),Og(s,t,l,n)}var _c="_reactListening"+Math.random().toString(36).slice(2);function ld(t){if(!t[_c]){t[_c]=!0,ma.forEach(function(s){s!=="selectionchange"&&(MM.has(s)||od(s,!1,t),od(s,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[_c]||(n[_c]=!0,od("selectionchange",!1,n))}}function Og(t,n,s,l){switch(c_(n)){case 2:var f=ZM;break;case 8:f=KM;break;default:f=Ed}s=f.bind(null,n,s,t),f=void 0,!Ru||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(f=!0),l?f!==void 0?t.addEventListener(n,s,{capture:!0,passive:f}):t.addEventListener(n,s,!0):f!==void 0?t.addEventListener(n,s,{passive:f}):t.addEventListener(n,s,!1)}function cd(t,n,s,l,f){var p=l;if((n&1)===0&&(n&2)===0&&l!==null)e:for(;;){if(l===null)return;var S=l.tag;if(S===3||S===4){var C=l.stateNode.containerInfo;if(C===f)break;if(S===4)for(S=l.return;S!==null;){var G=S.tag;if((G===3||G===4)&&S.stateNode.containerInfo===f)return;S=S.return}for(;C!==null;){if(S=yi(C),S===null)return;if(G=S.tag,G===5||G===6||G===26||G===27){l=p=S;continue e}C=C.parentNode}}l=l.return}zp(function(){var ae=p,ve=Tu(s),Ee=[];e:{var le=hm.get(t);if(le!==void 0){var de=Cl,Je=t;switch(t){case"keypress":if(Al(s)===0)break e;case"keydown":case"keyup":de=pS;break;case"focusin":Je="focus",de=Lu;break;case"focusout":Je="blur",de=Lu;break;case"beforeblur":case"afterblur":de=Lu;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":de=Vp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":de=nS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":de=_S;break;case cm:case um:case fm:de=sS;break;case dm:de=xS;break;case"scroll":case"scrollend":de=eS;break;case"wheel":de=MS;break;case"copy":case"cut":case"paste":de=oS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":de=Xp;break;case"toggle":case"beforetoggle":de=ES}var at=(n&4)!==0,Qt=!at&&(t==="scroll"||t==="scrollend"),Q=at?le!==null?le+"Capture":null:le;at=[];for(var W=ae,ne;W!==null;){var Se=W;if(ne=Se.stateNode,Se=Se.tag,Se!==5&&Se!==26&&Se!==27||ne===null||Q===null||(Se=go(W,Q),Se!=null&&at.push(Zo(W,Se,ne))),Qt)break;W=W.return}0<at.length&&(le=new de(le,Je,null,s,ve),Ee.push({event:le,listeners:at}))}}if((n&7)===0){e:{if(le=t==="mouseover"||t==="pointerover",de=t==="mouseout"||t==="pointerout",le&&s!==bu&&(Je=s.relatedTarget||s.fromElement)&&(yi(Je)||Je[qn]))break e;if((de||le)&&(le=ve.window===ve?ve:(le=ve.ownerDocument)?le.defaultView||le.parentWindow:window,de?(Je=s.relatedTarget||s.toElement,de=ae,Je=Je?yi(Je):null,Je!==null&&(Qt=c(Je),at=Je.tag,Je!==Qt||at!==5&&at!==27&&at!==6)&&(Je=null)):(de=null,Je=ae),de!==Je)){if(at=Vp,Se="onMouseLeave",Q="onMouseEnter",W="mouse",(t==="pointerout"||t==="pointerover")&&(at=Xp,Se="onPointerLeave",Q="onPointerEnter",W="pointer"),Qt=de==null?le:Ji(de),ne=Je==null?le:Ji(Je),le=new at(Se,W+"leave",de,s,ve),le.target=Qt,le.relatedTarget=ne,Se=null,yi(ve)===ae&&(at=new at(Q,W+"enter",Je,s,ve),at.target=ne,at.relatedTarget=Qt,Se=at),Qt=Se,de&&Je)t:{for(at=yM,Q=de,W=Je,ne=0,Se=Q;Se;Se=at(Se))ne++;Se=0;for(var nt=W;nt;nt=at(nt))Se++;for(;0<ne-Se;)Q=at(Q),ne--;for(;0<Se-ne;)W=at(W),Se--;for(;ne--;){if(Q===W||W!==null&&Q===W.alternate){at=Q;break t}Q=at(Q),W=at(W)}at=null}else at=null;de!==null&&Pg(Ee,le,de,at,!1),Je!==null&&Qt!==null&&Pg(Ee,Qt,Je,at,!0)}}e:{if(le=ae?Ji(ae):window,de=le.nodeName&&le.nodeName.toLowerCase(),de==="select"||de==="input"&&le.type==="file")var Ut=Jp;else if(Kp(le))if($p)Ut=US;else{Ut=LS;var $e=DS}else de=le.nodeName,!de||de.toLowerCase()!=="input"||le.type!=="checkbox"&&le.type!=="radio"?ae&&Gt(ae.elementType)&&(Ut=Jp):Ut=NS;if(Ut&&(Ut=Ut(t,ae))){Qp(Ee,Ut,s,ve);break e}$e&&$e(t,le,ae),t==="focusout"&&ae&&le.type==="number"&&ae.memoizedProps.value!=null&&ot(le,"number",le.value)}switch($e=ae?Ji(ae):window,t){case"focusin":(Kp($e)||$e.contentEditable==="true")&&(fr=$e,Fu=ae,bo=null);break;case"focusout":bo=Fu=fr=null;break;case"mousedown":Bu=!0;break;case"contextmenu":case"mouseup":case"dragend":Bu=!1,om(Ee,s,ve);break;case"selectionchange":if(PS)break;case"keydown":case"keyup":om(Ee,s,ve)}var ht;if(Uu)e:{switch(t){case"compositionstart":var At="onCompositionStart";break e;case"compositionend":At="onCompositionEnd";break e;case"compositionupdate":At="onCompositionUpdate";break e}At=void 0}else ur?jp(t,s)&&(At="onCompositionEnd"):t==="keydown"&&s.keyCode===229&&(At="onCompositionStart");At&&(Wp&&s.locale!=="ko"&&(ur||At!=="onCompositionStart"?At==="onCompositionEnd"&&ur&&(ht=Hp()):(ja=ve,Cu="value"in ja?ja.value:ja.textContent,ur=!0)),$e=vc(ae,At),0<$e.length&&(At=new kp(At,t,null,s,ve),Ee.push({event:At,listeners:$e}),ht?At.data=ht:(ht=Zp(s),ht!==null&&(At.data=ht)))),(ht=TS?AS(t,s):RS(t,s))&&(At=vc(ae,"onBeforeInput"),0<At.length&&($e=new kp("onBeforeInput","beforeinput",null,s,ve),Ee.push({event:$e,listeners:At}),$e.data=ht)),vM(Ee,t,ae,s,ve)}Ug(Ee,n)})}function Zo(t,n,s){return{instance:t,listener:n,currentTarget:s}}function vc(t,n){for(var s=n+"Capture",l=[];t!==null;){var f=t,p=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||p===null||(f=go(t,s),f!=null&&l.unshift(Zo(t,f,p)),f=go(t,n),f!=null&&l.push(Zo(t,f,p))),t.tag===3)return l;t=t.return}return[]}function yM(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Pg(t,n,s,l,f){for(var p=n._reactName,S=[];s!==null&&s!==l;){var C=s,G=C.alternate,ae=C.stateNode;if(C=C.tag,G!==null&&G===l)break;C!==5&&C!==26&&C!==27||ae===null||(G=ae,f?(ae=go(s,p),ae!=null&&S.unshift(Zo(s,ae,G))):f||(ae=go(s,p),ae!=null&&S.push(Zo(s,ae,G)))),s=s.return}S.length!==0&&t.push({event:n,listeners:S})}var EM=/\r\n?/g,bM=/\u0000|\uFFFD/g;function Ig(t){return(typeof t=="string"?t:""+t).replace(EM,`
`).replace(bM,"")}function Fg(t,n){return n=Ig(n),Ig(t)===n}function Kt(t,n,s,l,f,p){switch(s){case"children":typeof l=="string"?n==="body"||n==="textarea"&&l===""||ci(t,l):(typeof l=="number"||typeof l=="bigint")&&n!=="body"&&ci(t,""+l);break;case"className":Qe(t,"class",l);break;case"tabIndex":Qe(t,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Qe(t,s,l);break;case"style":Vi(t,l,p);break;case"data":if(n!=="object"){Qe(t,"data",l);break}case"src":case"href":if(l===""&&(n!=="a"||s!=="href")){t.removeAttribute(s);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(s);break}l=Ds(""+l),t.setAttribute(s,l);break;case"action":case"formAction":if(typeof l=="function"){t.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof p=="function"&&(s==="formAction"?(n!=="input"&&Kt(t,n,"name",f.name,f,null),Kt(t,n,"formEncType",f.formEncType,f,null),Kt(t,n,"formMethod",f.formMethod,f,null),Kt(t,n,"formTarget",f.formTarget,f,null)):(Kt(t,n,"encType",f.encType,f,null),Kt(t,n,"method",f.method,f,null),Kt(t,n,"target",f.target,f,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(s);break}l=Ds(""+l),t.setAttribute(s,l);break;case"onClick":l!=null&&(t.onclick=ga);break;case"onScroll":l!=null&&Mt("scroll",t);break;case"onScrollEnd":l!=null&&Mt("scrollend",t);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(s=l.__html,s!=null){if(f.children!=null)throw Error(r(60));t.innerHTML=s}}break;case"multiple":t.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":t.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){t.removeAttribute("xlink:href");break}s=Ds(""+l),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,""+l):t.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,""):t.removeAttribute(s);break;case"capture":case"download":l===!0?t.setAttribute(s,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,l):t.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?t.setAttribute(s,l):t.removeAttribute(s);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?t.removeAttribute(s):t.setAttribute(s,l);break;case"popover":Mt("beforetoggle",t),Mt("toggle",t),Pe(t,"popover",l);break;case"xlinkActuate":Ze(t,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Ze(t,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Ze(t,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Ze(t,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Ze(t,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Ze(t,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Ze(t,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Ze(t,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Ze(t,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Pe(t,"is",l);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=$i.get(s)||s,Pe(t,s,l))}}function ud(t,n,s,l,f,p){switch(s){case"style":Vi(t,l,p);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(s=l.__html,s!=null){if(f.children!=null)throw Error(r(60));t.innerHTML=s}}break;case"children":typeof l=="string"?ci(t,l):(typeof l=="number"||typeof l=="bigint")&&ci(t,""+l);break;case"onScroll":l!=null&&Mt("scroll",t);break;case"onScrollEnd":l!=null&&Mt("scrollend",t);break;case"onClick":l!=null&&(t.onclick=ga);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!A.hasOwnProperty(s))e:{if(s[0]==="o"&&s[1]==="n"&&(f=s.endsWith("Capture"),n=s.slice(2,f?s.length-7:void 0),p=t[Rn]||null,p=p!=null?p[s]:null,typeof p=="function"&&t.removeEventListener(n,p,f),typeof l=="function")){typeof p!="function"&&p!==null&&(s in t?t[s]=null:t.hasAttribute(s)&&t.removeAttribute(s)),t.addEventListener(n,l,f);break e}s in t?t[s]=l:l===!0?t.setAttribute(s,""):Pe(t,s,l)}}}function In(t,n,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Mt("error",t),Mt("load",t);var l=!1,f=!1,p;for(p in s)if(s.hasOwnProperty(p)){var S=s[p];if(S!=null)switch(p){case"src":l=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Kt(t,n,p,S,s,null)}}f&&Kt(t,n,"srcSet",s.srcSet,s,null),l&&Kt(t,n,"src",s.src,s,null);return;case"input":Mt("invalid",t);var C=p=S=f=null,G=null,ae=null;for(l in s)if(s.hasOwnProperty(l)){var ve=s[l];if(ve!=null)switch(l){case"name":f=ve;break;case"type":S=ve;break;case"checked":G=ve;break;case"defaultChecked":ae=ve;break;case"value":p=ve;break;case"defaultValue":C=ve;break;case"children":case"dangerouslySetInnerHTML":if(ve!=null)throw Error(r(137,n));break;default:Kt(t,n,l,ve,s,null)}}un(t,p,C,G,ae,S,f,!1);return;case"select":Mt("invalid",t),l=S=p=null;for(f in s)if(s.hasOwnProperty(f)&&(C=s[f],C!=null))switch(f){case"value":p=C;break;case"defaultValue":S=C;break;case"multiple":l=C;default:Kt(t,n,f,C,s,null)}n=p,s=S,t.multiple=!!l,n!=null?fn(t,!!l,n,!1):s!=null&&fn(t,!!l,s,!0);return;case"textarea":Mt("invalid",t),p=f=l=null;for(S in s)if(s.hasOwnProperty(S)&&(C=s[S],C!=null))switch(S){case"value":l=C;break;case"defaultValue":f=C;break;case"children":p=C;break;case"dangerouslySetInnerHTML":if(C!=null)throw Error(r(91));break;default:Kt(t,n,S,C,s,null)}Gi(t,l,f,p);return;case"option":for(G in s)if(s.hasOwnProperty(G)&&(l=s[G],l!=null))switch(G){case"selected":t.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Kt(t,n,G,l,s,null)}return;case"dialog":Mt("beforetoggle",t),Mt("toggle",t),Mt("cancel",t),Mt("close",t);break;case"iframe":case"object":Mt("load",t);break;case"video":case"audio":for(l=0;l<jo.length;l++)Mt(jo[l],t);break;case"image":Mt("error",t),Mt("load",t);break;case"details":Mt("toggle",t);break;case"embed":case"source":case"link":Mt("error",t),Mt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ae in s)if(s.hasOwnProperty(ae)&&(l=s[ae],l!=null))switch(ae){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Kt(t,n,ae,l,s,null)}return;default:if(Gt(n)){for(ve in s)s.hasOwnProperty(ve)&&(l=s[ve],l!==void 0&&ud(t,n,ve,l,s,void 0));return}}for(C in s)s.hasOwnProperty(C)&&(l=s[C],l!=null&&Kt(t,n,C,l,s,null))}function TM(t,n,s,l){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,p=null,S=null,C=null,G=null,ae=null,ve=null;for(de in s){var Ee=s[de];if(s.hasOwnProperty(de)&&Ee!=null)switch(de){case"checked":break;case"value":break;case"defaultValue":G=Ee;default:l.hasOwnProperty(de)||Kt(t,n,de,null,l,Ee)}}for(var le in l){var de=l[le];if(Ee=s[le],l.hasOwnProperty(le)&&(de!=null||Ee!=null))switch(le){case"type":p=de;break;case"name":f=de;break;case"checked":ae=de;break;case"defaultChecked":ve=de;break;case"value":S=de;break;case"defaultValue":C=de;break;case"children":case"dangerouslySetInnerHTML":if(de!=null)throw Error(r(137,n));break;default:de!==Ee&&Kt(t,n,le,de,l,Ee)}}Be(t,S,C,G,ae,ve,p,f);return;case"select":de=S=C=le=null;for(p in s)if(G=s[p],s.hasOwnProperty(p)&&G!=null)switch(p){case"value":break;case"multiple":de=G;default:l.hasOwnProperty(p)||Kt(t,n,p,null,l,G)}for(f in l)if(p=l[f],G=s[f],l.hasOwnProperty(f)&&(p!=null||G!=null))switch(f){case"value":le=p;break;case"defaultValue":C=p;break;case"multiple":S=p;default:p!==G&&Kt(t,n,f,p,l,G)}n=C,s=S,l=de,le!=null?fn(t,!!s,le,!1):!!l!=!!s&&(n!=null?fn(t,!!s,n,!0):fn(t,!!s,s?[]:"",!1));return;case"textarea":de=le=null;for(C in s)if(f=s[C],s.hasOwnProperty(C)&&f!=null&&!l.hasOwnProperty(C))switch(C){case"value":break;case"children":break;default:Kt(t,n,C,null,l,f)}for(S in l)if(f=l[S],p=s[S],l.hasOwnProperty(S)&&(f!=null||p!=null))switch(S){case"value":le=f;break;case"defaultValue":de=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(r(91));break;default:f!==p&&Kt(t,n,S,f,l,p)}li(t,le,de);return;case"option":for(var Je in s)if(le=s[Je],s.hasOwnProperty(Je)&&le!=null&&!l.hasOwnProperty(Je))switch(Je){case"selected":t.selected=!1;break;default:Kt(t,n,Je,null,l,le)}for(G in l)if(le=l[G],de=s[G],l.hasOwnProperty(G)&&le!==de&&(le!=null||de!=null))switch(G){case"selected":t.selected=le&&typeof le!="function"&&typeof le!="symbol";break;default:Kt(t,n,G,le,l,de)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var at in s)le=s[at],s.hasOwnProperty(at)&&le!=null&&!l.hasOwnProperty(at)&&Kt(t,n,at,null,l,le);for(ae in l)if(le=l[ae],de=s[ae],l.hasOwnProperty(ae)&&le!==de&&(le!=null||de!=null))switch(ae){case"children":case"dangerouslySetInnerHTML":if(le!=null)throw Error(r(137,n));break;default:Kt(t,n,ae,le,l,de)}return;default:if(Gt(n)){for(var Qt in s)le=s[Qt],s.hasOwnProperty(Qt)&&le!==void 0&&!l.hasOwnProperty(Qt)&&ud(t,n,Qt,void 0,l,le);for(ve in l)le=l[ve],de=s[ve],!l.hasOwnProperty(ve)||le===de||le===void 0&&de===void 0||ud(t,n,ve,le,l,de);return}}for(var Q in s)le=s[Q],s.hasOwnProperty(Q)&&le!=null&&!l.hasOwnProperty(Q)&&Kt(t,n,Q,null,l,le);for(Ee in l)le=l[Ee],de=s[Ee],!l.hasOwnProperty(Ee)||le===de||le==null&&de==null||Kt(t,n,Ee,le,l,de)}function Bg(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function AM(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,s=performance.getEntriesByType("resource"),l=0;l<s.length;l++){var f=s[l],p=f.transferSize,S=f.initiatorType,C=f.duration;if(p&&C&&Bg(S)){for(S=0,C=f.responseEnd,l+=1;l<s.length;l++){var G=s[l],ae=G.startTime;if(ae>C)break;var ve=G.transferSize,Ee=G.initiatorType;ve&&Bg(Ee)&&(G=G.responseEnd,S+=ve*(G<C?1:(C-ae)/(G-ae)))}if(--l,n+=8*(p+S)/(f.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var fd=null,dd=null;function xc(t){return t.nodeType===9?t:t.ownerDocument}function zg(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Hg(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function hd(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var pd=null;function RM(){var t=window.event;return t&&t.type==="popstate"?t===pd?!1:(pd=t,!0):(pd=null,!1)}var Gg=typeof setTimeout=="function"?setTimeout:void 0,CM=typeof clearTimeout=="function"?clearTimeout:void 0,Vg=typeof Promise=="function"?Promise:void 0,wM=typeof queueMicrotask=="function"?queueMicrotask:typeof Vg<"u"?function(t){return Vg.resolve(null).then(t).catch(DM)}:Gg;function DM(t){setTimeout(function(){throw t})}function fs(t){return t==="head"}function kg(t,n){var s=n,l=0;do{var f=s.nextSibling;if(t.removeChild(s),f&&f.nodeType===8)if(s=f.data,s==="/$"||s==="/&"){if(l===0){t.removeChild(f),Br(n);return}l--}else if(s==="$"||s==="$?"||s==="$~"||s==="$!"||s==="&")l++;else if(s==="html")Ko(t.ownerDocument.documentElement);else if(s==="head"){s=t.ownerDocument.head,Ko(s);for(var p=s.firstChild;p;){var S=p.nextSibling,C=p.nodeName;p[Bi]||C==="SCRIPT"||C==="STYLE"||C==="LINK"&&p.rel.toLowerCase()==="stylesheet"||s.removeChild(p),p=S}}else s==="body"&&Ko(t.ownerDocument.body);s=f}while(s);Br(n)}function Xg(t,n){var s=t;t=0;do{var l=s.nextSibling;if(s.nodeType===1?n?(s._stashedDisplay=s.style.display,s.style.display="none"):(s.style.display=s._stashedDisplay||"",s.getAttribute("style")===""&&s.removeAttribute("style")):s.nodeType===3&&(n?(s._stashedText=s.nodeValue,s.nodeValue=""):s.nodeValue=s._stashedText||""),l&&l.nodeType===8)if(s=l.data,s==="/$"){if(t===0)break;t--}else s!=="$"&&s!=="$?"&&s!=="$~"&&s!=="$!"||t++;s=l}while(s)}function md(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var s=n;switch(n=n.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":md(s),$n(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}t.removeChild(s)}}function LM(t,n,s,l){for(;t.nodeType===1;){var f=s;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!l&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(l){if(!t[Bi])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(p=t.getAttribute("rel"),p==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(p!==f.rel||t.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||t.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||t.getAttribute("title")!==(f.title==null?null:f.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(p=t.getAttribute("src"),(p!==(f.src==null?null:f.src)||t.getAttribute("type")!==(f.type==null?null:f.type)||t.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&p&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var p=f.name==null?null:""+f.name;if(f.type==="hidden"&&t.getAttribute("name")===p)return t}else return t;if(t=wi(t.nextSibling),t===null)break}return null}function NM(t,n,s){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!s||(t=wi(t.nextSibling),t===null))return null;return t}function Wg(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=wi(t.nextSibling),t===null))return null;return t}function gd(t){return t.data==="$?"||t.data==="$~"}function _d(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function UM(t,n){var s=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||s.readyState!=="loading")n();else{var l=function(){n(),s.removeEventListener("DOMContentLoaded",l)};s.addEventListener("DOMContentLoaded",l),t._reactRetry=l}}function wi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var vd=null;function qg(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var s=t.data;if(s==="/$"||s==="/&"){if(n===0)return wi(t.nextSibling);n--}else s!=="$"&&s!=="$!"&&s!=="$?"&&s!=="$~"&&s!=="&"||n++}t=t.nextSibling}return null}function Yg(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var s=t.data;if(s==="$"||s==="$!"||s==="$?"||s==="$~"||s==="&"){if(n===0)return t;n--}else s!=="/$"&&s!=="/&"||n++}t=t.previousSibling}return null}function jg(t,n,s){switch(n=xc(s),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function Ko(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);$n(t)}var Di=new Map,Zg=new Set;function Sc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Na=H.d;H.d={f:OM,r:PM,D:IM,C:FM,L:BM,m:zM,X:GM,S:HM,M:VM};function OM(){var t=Na.f(),n=fc();return t||n}function PM(t){var n=zi(t);n!==null&&n.tag===5&&n.type==="form"?d0(n):Na.r(t)}var Pr=typeof document>"u"?null:document;function Kg(t,n,s){var l=Pr;if(l&&typeof n=="string"&&n){var f=bt(n);f='link[rel="'+t+'"][href="'+f+'"]',typeof s=="string"&&(f+='[crossorigin="'+s+'"]'),Zg.has(f)||(Zg.add(f),t={rel:t,crossOrigin:s,href:n},l.querySelector(f)===null&&(n=l.createElement("link"),In(n,"link",t),rn(n),l.head.appendChild(n)))}}function IM(t){Na.D(t),Kg("dns-prefetch",t,null)}function FM(t,n){Na.C(t,n),Kg("preconnect",t,n)}function BM(t,n,s){Na.L(t,n,s);var l=Pr;if(l&&t&&n){var f='link[rel="preload"][as="'+bt(n)+'"]';n==="image"&&s&&s.imageSrcSet?(f+='[imagesrcset="'+bt(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(f+='[imagesizes="'+bt(s.imageSizes)+'"]')):f+='[href="'+bt(t)+'"]';var p=f;switch(n){case"style":p=Ir(t);break;case"script":p=Fr(t)}Di.has(p)||(t=_({rel:"preload",href:n==="image"&&s&&s.imageSrcSet?void 0:t,as:n},s),Di.set(p,t),l.querySelector(f)!==null||n==="style"&&l.querySelector(Qo(p))||n==="script"&&l.querySelector(Jo(p))||(n=l.createElement("link"),In(n,"link",t),rn(n),l.head.appendChild(n)))}}function zM(t,n){Na.m(t,n);var s=Pr;if(s&&t){var l=n&&typeof n.as=="string"?n.as:"script",f='link[rel="modulepreload"][as="'+bt(l)+'"][href="'+bt(t)+'"]',p=f;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":p=Fr(t)}if(!Di.has(p)&&(t=_({rel:"modulepreload",href:t},n),Di.set(p,t),s.querySelector(f)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(Jo(p)))return}l=s.createElement("link"),In(l,"link",t),rn(l),s.head.appendChild(l)}}}function HM(t,n,s){Na.S(t,n,s);var l=Pr;if(l&&t){var f=Hi(l).hoistableStyles,p=Ir(t);n=n||"default";var S=f.get(p);if(!S){var C={loading:0,preload:null};if(S=l.querySelector(Qo(p)))C.loading=5;else{t=_({rel:"stylesheet",href:t,"data-precedence":n},s),(s=Di.get(p))&&xd(t,s);var G=S=l.createElement("link");rn(G),In(G,"link",t),G._p=new Promise(function(ae,ve){G.onload=ae,G.onerror=ve}),G.addEventListener("load",function(){C.loading|=1}),G.addEventListener("error",function(){C.loading|=2}),C.loading|=4,Mc(S,n,l)}S={type:"stylesheet",instance:S,count:1,state:C},f.set(p,S)}}}function GM(t,n){Na.X(t,n);var s=Pr;if(s&&t){var l=Hi(s).hoistableScripts,f=Fr(t),p=l.get(f);p||(p=s.querySelector(Jo(f)),p||(t=_({src:t,async:!0},n),(n=Di.get(f))&&Sd(t,n),p=s.createElement("script"),rn(p),In(p,"link",t),s.head.appendChild(p)),p={type:"script",instance:p,count:1,state:null},l.set(f,p))}}function VM(t,n){Na.M(t,n);var s=Pr;if(s&&t){var l=Hi(s).hoistableScripts,f=Fr(t),p=l.get(f);p||(p=s.querySelector(Jo(f)),p||(t=_({src:t,async:!0,type:"module"},n),(n=Di.get(f))&&Sd(t,n),p=s.createElement("script"),rn(p),In(p,"link",t),s.head.appendChild(p)),p={type:"script",instance:p,count:1,state:null},l.set(f,p))}}function Qg(t,n,s,l){var f=(f=se.current)?Sc(f):null;if(!f)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(n=Ir(s.href),s=Hi(f).hoistableStyles,l=s.get(n),l||(l={type:"style",instance:null,count:0,state:null},s.set(n,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){t=Ir(s.href);var p=Hi(f).hoistableStyles,S=p.get(t);if(S||(f=f.ownerDocument||f,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},p.set(t,S),(p=f.querySelector(Qo(t)))&&!p._p&&(S.instance=p,S.state.loading=5),Di.has(t)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},Di.set(t,s),p||kM(f,t,s,S.state))),n&&l===null)throw Error(r(528,""));return S}if(n&&l!==null)throw Error(r(529,""));return null;case"script":return n=s.async,s=s.src,typeof s=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Fr(s),s=Hi(f).hoistableScripts,l=s.get(n),l||(l={type:"script",instance:null,count:0,state:null},s.set(n,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function Ir(t){return'href="'+bt(t)+'"'}function Qo(t){return'link[rel="stylesheet"]['+t+"]"}function Jg(t){return _({},t,{"data-precedence":t.precedence,precedence:null})}function kM(t,n,s,l){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?l.loading=1:(n=t.createElement("link"),l.preload=n,n.addEventListener("load",function(){return l.loading|=1}),n.addEventListener("error",function(){return l.loading|=2}),In(n,"link",s),rn(n),t.head.appendChild(n))}function Fr(t){return'[src="'+bt(t)+'"]'}function Jo(t){return"script[async]"+t}function $g(t,n,s){if(n.count++,n.instance===null)switch(n.type){case"style":var l=t.querySelector('style[data-href~="'+bt(s.href)+'"]');if(l)return n.instance=l,rn(l),l;var f=_({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return l=(t.ownerDocument||t).createElement("style"),rn(l),In(l,"style",f),Mc(l,s.precedence,t),n.instance=l;case"stylesheet":f=Ir(s.href);var p=t.querySelector(Qo(f));if(p)return n.state.loading|=4,n.instance=p,rn(p),p;l=Jg(s),(f=Di.get(f))&&xd(l,f),p=(t.ownerDocument||t).createElement("link"),rn(p);var S=p;return S._p=new Promise(function(C,G){S.onload=C,S.onerror=G}),In(p,"link",l),n.state.loading|=4,Mc(p,s.precedence,t),n.instance=p;case"script":return p=Fr(s.src),(f=t.querySelector(Jo(p)))?(n.instance=f,rn(f),f):(l=s,(f=Di.get(p))&&(l=_({},s),Sd(l,f)),t=t.ownerDocument||t,f=t.createElement("script"),rn(f),In(f,"link",l),t.head.appendChild(f),n.instance=f);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(l=n.instance,n.state.loading|=4,Mc(l,s.precedence,t));return n.instance}function Mc(t,n,s){for(var l=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=l.length?l[l.length-1]:null,p=f,S=0;S<l.length;S++){var C=l[S];if(C.dataset.precedence===n)p=C;else if(p!==f)break}p?p.parentNode.insertBefore(t,p.nextSibling):(n=s.nodeType===9?s.head:s,n.insertBefore(t,n.firstChild))}function xd(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Sd(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var yc=null;function e_(t,n,s){if(yc===null){var l=new Map,f=yc=new Map;f.set(s,l)}else f=yc,l=f.get(s),l||(l=new Map,f.set(s,l));if(l.has(t))return l;for(l.set(t,null),s=s.getElementsByTagName(t),f=0;f<s.length;f++){var p=s[f];if(!(p[Bi]||p[cn]||t==="link"&&p.getAttribute("rel")==="stylesheet")&&p.namespaceURI!=="http://www.w3.org/2000/svg"){var S=p.getAttribute(n)||"";S=t+S;var C=l.get(S);C?C.push(p):l.set(S,[p])}}return l}function t_(t,n,s){t=t.ownerDocument||t,t.head.insertBefore(s,n==="title"?t.querySelector("head > title"):null)}function XM(t,n,s){if(s===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function n_(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function WM(t,n,s,l){if(s.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(s.state.loading&4)===0){if(s.instance===null){var f=Ir(l.href),p=n.querySelector(Qo(f));if(p){n=p._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=Ec.bind(t),n.then(t,t)),s.state.loading|=4,s.instance=p,rn(p);return}p=n.ownerDocument||n,l=Jg(l),(f=Di.get(f))&&xd(l,f),p=p.createElement("link"),rn(p);var S=p;S._p=new Promise(function(C,G){S.onload=C,S.onerror=G}),In(p,"link",l),s.instance=p}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(s,n),(n=s.state.preload)&&(s.state.loading&3)===0&&(t.count++,s=Ec.bind(t),n.addEventListener("load",s),n.addEventListener("error",s))}}var Md=0;function qM(t,n){return t.stylesheets&&t.count===0&&Tc(t,t.stylesheets),0<t.count||0<t.imgCount?function(s){var l=setTimeout(function(){if(t.stylesheets&&Tc(t,t.stylesheets),t.unsuspend){var p=t.unsuspend;t.unsuspend=null,p()}},6e4+n);0<t.imgBytes&&Md===0&&(Md=62500*AM());var f=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Tc(t,t.stylesheets),t.unsuspend)){var p=t.unsuspend;t.unsuspend=null,p()}},(t.imgBytes>Md?50:800)+n);return t.unsuspend=s,function(){t.unsuspend=null,clearTimeout(l),clearTimeout(f)}}:null}function Ec(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Tc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var bc=null;function Tc(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,bc=new Map,n.forEach(YM,t),bc=null,Ec.call(t))}function YM(t,n){if(!(n.state.loading&4)){var s=bc.get(t);if(s)var l=s.get(null);else{s=new Map,bc.set(t,s);for(var f=t.querySelectorAll("link[data-precedence],style[data-precedence]"),p=0;p<f.length;p++){var S=f[p];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(s.set(S.dataset.precedence,S),l=S)}l&&s.set(null,l)}f=n.instance,S=f.getAttribute("data-precedence"),p=s.get(S)||l,p===l&&s.set(null,f),s.set(S,f),this.count++,l=Ec.bind(this),f.addEventListener("load",l),f.addEventListener("error",l),p?p.parentNode.insertBefore(f,p.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(f,t.firstChild)),n.state.loading|=4}}var $o={$$typeof:z,Provider:null,Consumer:null,_currentValue:$,_currentValue2:$,_threadCount:0};function jM(t,n,s,l,f,p,S,C,G){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ke(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ke(0),this.hiddenUpdates=Ke(null),this.identifierPrefix=l,this.onUncaughtError=f,this.onCaughtError=p,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=G,this.incompleteTransitions=new Map}function i_(t,n,s,l,f,p,S,C,G,ae,ve,Ee){return t=new jM(t,n,s,S,G,ae,ve,Ee,C),n=1,p===!0&&(n|=24),p=fi(3,null,null,n),t.current=p,p.stateNode=t,n=$u(),n.refCount++,t.pooledCache=n,n.refCount++,p.memoizedState={element:l,isDehydrated:s,cache:n},af(p),t}function a_(t){return t?(t=pr,t):pr}function s_(t,n,s,l,f,p){f=a_(f),l.context===null?l.context=f:l.pendingContext=f,l=es(n),l.payload={element:s},p=p===void 0?null:p,p!==null&&(l.callback=p),s=ts(t,l,n),s!==null&&(si(s,t,n),Lo(s,t,n))}function r_(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var s=t.retryLane;t.retryLane=s!==0&&s<n?s:n}}function yd(t,n){r_(t,n),(t=t.alternate)&&r_(t,n)}function o_(t){if(t.tag===13||t.tag===31){var n=Os(t,67108864);n!==null&&si(n,t,67108864),yd(t,67108864)}}function l_(t){if(t.tag===13||t.tag===31){var n=gi();n=Wa(n);var s=Os(t,n);s!==null&&si(s,t,n),yd(t,n)}}var Ac=!0;function ZM(t,n,s,l){var f=F.T;F.T=null;var p=H.p;try{H.p=2,Ed(t,n,s,l)}finally{H.p=p,F.T=f}}function KM(t,n,s,l){var f=F.T;F.T=null;var p=H.p;try{H.p=8,Ed(t,n,s,l)}finally{H.p=p,F.T=f}}function Ed(t,n,s,l){if(Ac){var f=bd(l);if(f===null)cd(t,n,l,Rc,s),u_(t,l);else if(JM(f,t,n,s,l))l.stopPropagation();else if(u_(t,l),n&4&&-1<QM.indexOf(t)){for(;f!==null;){var p=zi(f);if(p!==null)switch(p.tag){case 3:if(p=p.stateNode,p.current.memoizedState.isDehydrated){var S=Ae(p.pendingLanes);if(S!==0){var C=p;for(C.pendingLanes|=2,C.entangledLanes|=2;S;){var G=1<<31-He(S);C.entanglements[1]|=G,S&=~G}ia(p),(Bt&6)===0&&(cc=Dt()+500,Yo(0))}}break;case 31:case 13:C=Os(p,2),C!==null&&si(C,p,2),fc(),yd(p,2)}if(p=bd(l),p===null&&cd(t,n,l,Rc,s),p===f)break;f=p}f!==null&&l.stopPropagation()}else cd(t,n,l,null,s)}}function bd(t){return t=Tu(t),Td(t)}var Rc=null;function Td(t){if(Rc=null,t=yi(t),t!==null){var n=c(t);if(n===null)t=null;else{var s=n.tag;if(s===13){if(t=u(n),t!==null)return t;t=null}else if(s===31){if(t=h(n),t!==null)return t;t=null}else if(s===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return Rc=t,null}function c_(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(xt()){case U:return 2;case b:return 8;case J:case re:return 32;case pe:return 268435456;default:return 32}default:return 32}}var Ad=!1,ds=null,hs=null,ps=null,el=new Map,tl=new Map,ms=[],QM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function u_(t,n){switch(t){case"focusin":case"focusout":ds=null;break;case"dragenter":case"dragleave":hs=null;break;case"mouseover":case"mouseout":ps=null;break;case"pointerover":case"pointerout":el.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":tl.delete(n.pointerId)}}function nl(t,n,s,l,f,p){return t===null||t.nativeEvent!==p?(t={blockedOn:n,domEventName:s,eventSystemFlags:l,nativeEvent:p,targetContainers:[f]},n!==null&&(n=zi(n),n!==null&&o_(n)),t):(t.eventSystemFlags|=l,n=t.targetContainers,f!==null&&n.indexOf(f)===-1&&n.push(f),t)}function JM(t,n,s,l,f){switch(n){case"focusin":return ds=nl(ds,t,n,s,l,f),!0;case"dragenter":return hs=nl(hs,t,n,s,l,f),!0;case"mouseover":return ps=nl(ps,t,n,s,l,f),!0;case"pointerover":var p=f.pointerId;return el.set(p,nl(el.get(p)||null,t,n,s,l,f)),!0;case"gotpointercapture":return p=f.pointerId,tl.set(p,nl(tl.get(p)||null,t,n,s,l,f)),!0}return!1}function f_(t){var n=yi(t.target);if(n!==null){var s=c(n);if(s!==null){if(n=s.tag,n===13){if(n=u(s),n!==null){t.blockedOn=n,Wn(t.priority,function(){l_(s)});return}}else if(n===31){if(n=h(s),n!==null){t.blockedOn=n,Wn(t.priority,function(){l_(s)});return}}else if(n===3&&s.stateNode.current.memoizedState.isDehydrated){t.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Cc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var s=bd(t.nativeEvent);if(s===null){s=t.nativeEvent;var l=new s.constructor(s.type,s);bu=l,s.target.dispatchEvent(l),bu=null}else return n=zi(s),n!==null&&o_(n),t.blockedOn=s,!1;n.shift()}return!0}function d_(t,n,s){Cc(t)&&s.delete(n)}function $M(){Ad=!1,ds!==null&&Cc(ds)&&(ds=null),hs!==null&&Cc(hs)&&(hs=null),ps!==null&&Cc(ps)&&(ps=null),el.forEach(d_),tl.forEach(d_)}function wc(t,n){t.blockedOn===n&&(t.blockedOn=null,Ad||(Ad=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,$M)))}var Dc=null;function h_(t){Dc!==t&&(Dc=t,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){Dc===t&&(Dc=null);for(var n=0;n<t.length;n+=3){var s=t[n],l=t[n+1],f=t[n+2];if(typeof l!="function"){if(Td(l||s)===null)continue;break}var p=zi(s);p!==null&&(t.splice(n,3),n-=3,bf(p,{pending:!0,data:f,method:s.method,action:l},l,f))}}))}function Br(t){function n(G){return wc(G,t)}ds!==null&&wc(ds,t),hs!==null&&wc(hs,t),ps!==null&&wc(ps,t),el.forEach(n),tl.forEach(n);for(var s=0;s<ms.length;s++){var l=ms[s];l.blockedOn===t&&(l.blockedOn=null)}for(;0<ms.length&&(s=ms[0],s.blockedOn===null);)f_(s),s.blockedOn===null&&ms.shift();if(s=(t.ownerDocument||t).$$reactFormReplay,s!=null)for(l=0;l<s.length;l+=3){var f=s[l],p=s[l+1],S=f[Rn]||null;if(typeof p=="function")S||h_(s);else if(S){var C=null;if(p&&p.hasAttribute("formAction")){if(f=p,S=p[Rn]||null)C=S.formAction;else if(Td(f)!==null)continue}else C=S.action;typeof C=="function"?s[l+1]=C:(s.splice(l,3),l-=3),h_(s)}}}function p_(){function t(p){p.canIntercept&&p.info==="react-transition"&&p.intercept({handler:function(){return new Promise(function(S){return f=S})},focusReset:"manual",scroll:"manual"})}function n(){f!==null&&(f(),f=null),l||setTimeout(s,20)}function s(){if(!l&&!navigation.transition){var p=navigation.currentEntry;p&&p.url!=null&&navigation.navigate(p.url,{state:p.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,f=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(s,100),function(){l=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),f!==null&&(f(),f=null)}}}function Rd(t){this._internalRoot=t}Lc.prototype.render=Rd.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var s=n.current,l=gi();s_(s,l,t,n,null,null)},Lc.prototype.unmount=Rd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;s_(t.current,2,null,t,null,null),fc(),n[qn]=null}};function Lc(t){this._internalRoot=t}Lc.prototype.unstable_scheduleHydration=function(t){if(t){var n=Si();t={blockedOn:null,target:t,priority:n};for(var s=0;s<ms.length&&n!==0&&n<ms[s].priority;s++);ms.splice(s,0,t),s===0&&f_(t)}};var m_=e.version;if(m_!=="19.2.7")throw Error(r(527,m_,"19.2.7"));H.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=d(n),t=t!==null?g(t):null,t=t===null?null:t.stateNode,t};var ey={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:F,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Nc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Nc.isDisabled&&Nc.supportsFiber)try{he=Nc.inject(ey),me=Nc}catch{}}return al.createRoot=function(t,n){if(!o(t))throw Error(r(299));var s=!1,l="",f=y0,p=E0,S=b0;return n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onUncaughtError!==void 0&&(f=n.onUncaughtError),n.onCaughtError!==void 0&&(p=n.onCaughtError),n.onRecoverableError!==void 0&&(S=n.onRecoverableError)),n=i_(t,1,!1,null,null,s,l,null,f,p,S,p_),t[qn]=n.current,ld(t),new Rd(n)},al.hydrateRoot=function(t,n,s){if(!o(t))throw Error(r(299));var l=!1,f="",p=y0,S=E0,C=b0,G=null;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(f=s.identifierPrefix),s.onUncaughtError!==void 0&&(p=s.onUncaughtError),s.onCaughtError!==void 0&&(S=s.onCaughtError),s.onRecoverableError!==void 0&&(C=s.onRecoverableError),s.formState!==void 0&&(G=s.formState)),n=i_(t,1,!0,n,s??null,l,f,G,p,S,C,p_),n.context=a_(null),s=n.current,l=gi(),l=Wa(l),f=es(l),f.callback=null,ts(s,f,l),s=l,n.current.lanes=s,Ge(n,s),ia(n),t[qn]=n.current,ld(t),new Lc(n)},al.version="19.2.7",al}var T_;function cy(){if(T_)return Dd.exports;T_=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(e){console.error(e)}}return a(),Dd.exports=ly(),Dd.exports}var uy=cy();const fy={BASE_URL:"/",DEV:!1,MODE:"production",PROD:!0,SSR:!1,VITE_APP_URL:"https://demo.morpheum.io",VITE_DISCORD_URL:"",VITE_DOCS_URL:"",VITE_MANIFESTO_URL:"",VITE_TUTORIAL_VIDEO_URL:"",VITE_X_URL:""},zr=(a,e="#")=>{var i;return((i=fy[a])==null?void 0:i.trim())||e},Tn={app:zr("VITE_APP_URL","https://demo.morpheum.io"),docs:zr("VITE_DOCS_URL"),manifesto:zr("VITE_MANIFESTO_URL"),discord:zr("VITE_DISCORD_URL"),x:zr("VITE_X_URL"),tutorialVideo:zr("VITE_TUTORIAL_VIDEO_URL",""),explore:"#explore",exploreAgents:"#explore-agents",exploreVaults:"#explore-vaults"},nu=[{id:"demo",label:"Demo",href:"#demo"},{id:"personas",label:"Personas",href:"#personas"},{id:"how",label:"How it works",href:"#how"},{id:"explore",label:"Explore",href:"#explore"}],Od={text:"> The agent-native L1 DEX, for faster and safer trades.",href:Tn.manifesto},_s={eyebrow:{label:"A manifesto for verifiable agents",href:Tn.manifesto},headline:["Agents you can trust.","Assets you can trade."],primaryCta:{label:"Launch Morpheum",href:Tn.app},secondaryCta:{label:"Explore agents",href:Tn.explore}},A_={risks:[{risk:"Speculation without underwriting",failure:"Buy random agent tokens on narrative alone.",solveLabel:"Proof",solve:"Underwrite on receipts, reputation, and risk scores — before you commit a dollar."},{risk:"Automation without capital controls",failure:"Run an agent with unbounded capital and no kill switch.",solveLabel:"Controls",solve:"Set Risk Level, approve gated moves, and isolate each strategy in its own bucket."}],close:"The Agent-native L1 DEX — faster, safer trades."},R_=[{label:"MAEX indices",status:"LIVE",live:!0},{label:"Agents",status:"REPUTATION / SHARPE / ROI"},{label:"Risk level",status:"MANUAL / HITL / HANDS-OFF"},{label:"Agent notifications",status:"WANT-TO / ACTION / PAUSED / REJECTED"},{label:"Copy buckets",status:"LIVE",live:!0},{label:"Buckets",status:"RISK-ISOLATED"},{label:"Vaults",status:"ONCHAIN"},{label:"Staking",status:"LIVE",live:!0}],Mh={kicker:"Product tour",videoCaption:"See an agent discovered, copied, supervised, and isolated in ~60s.",verbs:[{verb:"Discover",description:"Agents & indices — proof first."},{verb:"Copy",description:"Mirror a proven agent into your bucket."},{verb:"Supervise",description:"Approve gated moves on HITL."},{verb:"Isolate",description:"Risk contained in its own bucket."}]},Pd={kicker:"Choose your path",title:"Become part of the agent economy",items:[{title:"Become an Operator",weight:"major",steps:["Mint an agent and set its mandate.","Choose a Risk Level: Manual · HITL · Hands-off.","Build a proven track record investors can underwrite."],cta:{label:"Run an agent",href:Tn.exploreAgents},meta:{kind:"identity",name:"SharpeShark",tx:"0xa4c2…8f1d",hash:"did:morph:0x7a3f…c91e",chain:"Morpheum · hop 0",verified:"yes",rep:"72",portable:"yes",next:"minting mandate…"}},{title:"Become a Copy Trader",weight:"major",steps:["Screen agents on real proof — receipts and risk scores.","Mirror the best into your own dedicated bucket.","Track PnL and rebalance anytime."],cta:{label:"Start copying",href:Tn.exploreAgents},meta:{kind:"chain",label:"on-chain transactions",chain:"Morpheum · hop 0",steps:[{op:"mint agent",tx:"0xa4c2…8f1d",status:"settled"},{op:"mint bucket",tx:"0xb91e…4c02",status:"settled"},{op:"fund transfer",tx:"0xe81a…3b70",status:"settled",from:"SortinoSloth",to:"your bucket",asset:"USDC",amt:"2500"}]}},{title:"Provide Capital",weight:"light",steps:["Deposit into a vault or bucket.","Stake to earn.","Withdraw on your terms."],cta:{label:"Explore vaults",href:Tn.exploreVaults},meta:{kind:"community",label:"on-chain transaction",tx:"0x12af…9e44",from:"you",to:"Vault-Alpha",asset:"USDC",amt:"10000",chain:"Morpheum · hop 0",status:"queued"}}]},vs={kicker:"How it works",title:"Discover → Copy → Supervise → Isolate",outcome:"A proven, risk-isolated capital position — not a bet on a black box.",chips:[{label:"Risk level",value:"Manual · HITL · Hands-off"},{label:"Notifications",value:"Want-to · Action · Paused · Rejected"},{label:"Capital",value:"Bucket / Vault"}],steps:[{n:1,title:"Discover",feature:"Agents & Indices + proof",body:"Browse the MAEX roster and index catalog and read the proof before you commit a dollar.",example:"Open SharpeShark and see its receipts, reputation, risk score, and Sharpe / ROI side by side."},{n:2,title:"Copy",feature:"Copy Trade",body:"Mirror a proven performer into your own bucket in one click, sized to your capital, with spread / funding cost shown before you confirm.",example:"One click clones SharpeShark's strategy into a fresh bucket bound to your wallet."},{n:3,title:"Supervise",feature:"Risk Level + Agent Notifications",body:"Set how much the agent may act on its own — Manual · HITL · Hands-off — and stay in the loop through Agent Notifications: Want to · Action · Paused · Rejected.",example:'On HITL, a "Want to open ETH long" notification waits for your inline Approve / Reject, and Explain shows why the agent wants the trade.'},{n:4,title:"Isolate",feature:"Buckets",body:"Every mirror lands in its own dedicated cross-margin bucket bound to a wallet executor agent, so risk is contained per strategy.",example:"SharpeShark runs in its own bucket with its own margin and exposure — if it draws down, only that bucket's capital is at risk; your other buckets and spot balance are untouched."}]},Hr={kicker:"Explore",title:"Agents. Indices. Buckets. Vaults.",cards:[{title:"Agents",verbs:["Browse","Compare","Copy"],agents:[{name:"SharpeShark",sharpe:"2.41",roi:"+38.2%",risk:"72",positive:!0},{name:"SortinoSloth",sharpe:"1.86",roi:"+21.4%",risk:"58",positive:!0},{name:"FundingFox",sharpe:"1.12",roi:"-4.1%",risk:"41",positive:!1}]},{title:"Indices",verbs:["Track","Weight","Hold"],blurb:"Curated agent baskets for one-click exposure to proven strategies.",sample:[{label:"MAEX Core",value:"+12.8%",positive:!0},{label:"Risk-Off Bucket",value:"+4.2%",positive:!0}]},{title:"Buckets",verbs:["Isolate","Trade","Contain"],blurb:"Risk-isolated positions — each strategy in its own margin shell.",sample:[{label:"Bucket A",value:"ISOLATED",positive:!1},{label:"Bucket B",value:"ISOLATED",positive:!1}]},{title:"Vaults",verbs:["Deposit","Earn","Withdraw"],blurb:"Pooled onchain capital — graded vaults with live APR and TVL.",sample:[{label:"MLP (House Liq.)",value:"A · 18.4%",meta:"$9.8M TVL"},{label:"Basis Capture",value:"A · 14.2%",meta:"$2.1M TVL"}]}]},Uc={line:"Back agents you can prove. Own the upside.",primaryCta:{label:"Launch Demo",href:Tn.app},social:[{label:"Join Discord",href:Tn.discord},{label:"Join X",href:Tn.x}]},C_={legal:"© 2026 Morpheum. Capital funds proof.",labels:["validators","stakings","ZKProof"]};function oo({variant:a="primary",children:e,className:i="",...r}){const o=`cta cta--${a} terminal-interactive ${i}`.trim();if("href"in r&&r.href!==void 0){const{href:c,...u}=r;return D.jsx("a",{className:o,href:c,...u,children:e})}return D.jsx("button",{className:o,type:"button",...r,children:e})}function dy(){return D.jsx("section",{id:"join",className:"section community",children:D.jsxs("div",{className:"container community__inner",children:[D.jsx("h2",{className:"community__line",children:Uc.line}),D.jsxs("div",{className:"community__ctas",children:[D.jsx(oo,{href:Uc.primaryCta.href,variant:"primary",children:Uc.primaryCta.label}),Uc.social.map(a=>D.jsx(oo,{href:a.href,variant:"ghost",children:a.label},a.label))]})]})})}function hy(){const[a,e]=We.useState(!1),i=!!Tn.tutorialVideo;return D.jsx("section",{id:"demo",className:"section demo",children:D.jsxs("div",{className:"container",children:[D.jsx("p",{className:"section-kicker",children:Mh.kicker}),D.jsxs("div",{className:"demo__video",children:[a&&i?D.jsx("video",{className:"demo__player",src:Tn.tutorialVideo,controls:!0,autoPlay:!0,playsInline:!0}):D.jsxs("button",{type:"button",className:"demo__poster",onClick:()=>i&&e(!0),"aria-label":i?"Play tutorial video":"Tutorial video coming soon",children:[D.jsx("span",{className:"demo__play","aria-hidden":!0,children:"▶"}),D.jsx("span",{className:"demo__poster-label",children:"Tutorial"})]}),D.jsx("p",{className:"demo__caption",children:Mh.videoCaption})]})]})})}const py={receipt:"Receipt",riskScore:"Risk",credential:"Credential",verified:"Verified"};function Id({type:a,value:e}){return D.jsxs("span",{className:`proof-chip proof-chip--${a}`,children:[D.jsx("span",{className:"proof-chip__dot","aria-hidden":!0}),D.jsx("span",{className:"proof-chip__label",children:py[a]}),e?D.jsx("span",{className:"proof-chip__value",children:e}):null]})}function my(){const a=Hr.cards[0],e=Hr.cards[1],i=Hr.cards[2],r=Hr.cards[3];return D.jsx("section",{id:"explore",className:"section explore",children:D.jsxs("div",{className:"container",children:[D.jsx("p",{className:"section-kicker",children:Hr.kicker}),D.jsx("h2",{className:"section-title explore__title",children:Hr.title}),D.jsxs("div",{className:"explore__grid",children:[D.jsxs("article",{id:"explore-agents",className:"explore-card explore-card--major",children:[D.jsxs("header",{className:"explore-card__header",children:[D.jsx("h3",{className:"explore-card__title",children:a.title}),D.jsx("p",{className:"explore-card__verbs",children:a.verbs.join(" · ").toUpperCase()})]}),D.jsx("ul",{className:"explore-roster",children:a.agents.map(o=>D.jsxs("li",{className:"explore-roster__row",children:[D.jsxs("div",{className:"explore-roster__top",children:[D.jsx("span",{className:"explore-roster__name",children:o.name}),D.jsx("span",{className:`terminal-value ${o.positive?"terminal-long":"terminal-short"}`,children:o.roi})]}),D.jsxs("div",{className:"explore-roster__proof",children:[D.jsx(Id,{type:"verified"}),D.jsx(Id,{type:"riskScore",value:o.risk}),D.jsx(Id,{type:"receipt"}),D.jsxs("span",{className:"terminal-value explore-roster__sharpe",children:["Sharpe ",o.sharpe]})]})]},o.name))})]}),D.jsxs("article",{className:"explore-card explore-card--major",children:[D.jsxs("header",{className:"explore-card__header",children:[D.jsx("h3",{className:"explore-card__title",children:e.title}),D.jsx("p",{className:"explore-card__verbs",children:e.verbs.join(" · ").toUpperCase()})]}),D.jsx("p",{className:"explore-card__blurb",children:e.blurb}),D.jsx("ul",{className:"explore-sample",children:e.sample.map(o=>D.jsxs("li",{children:[D.jsx("span",{className:"terminal-label",children:o.label}),D.jsx("span",{className:`terminal-value ${o.positive?"terminal-long":""}`,children:o.value})]},o.label))})]}),D.jsxs("article",{id:"explore-buckets",className:"explore-card explore-card--major",children:[D.jsxs("header",{className:"explore-card__header",children:[D.jsx("h3",{className:"explore-card__title",children:i.title}),D.jsx("p",{className:"explore-card__verbs",children:i.verbs.join(" · ").toUpperCase()})]}),D.jsx("p",{className:"explore-card__blurb",children:i.blurb}),D.jsx("ul",{className:"explore-sample",children:i.sample.map(o=>D.jsxs("li",{children:[D.jsx("span",{className:"terminal-label",children:o.label}),D.jsx("span",{className:"terminal-value explore-sample__status",children:o.value})]},o.label))})]}),D.jsxs("article",{id:"explore-vaults",className:"explore-card explore-card--major",children:[D.jsxs("header",{className:"explore-card__header",children:[D.jsx("h3",{className:"explore-card__title",children:r.title}),D.jsx("p",{className:"explore-card__verbs",children:r.verbs.join(" · ").toUpperCase()})]}),D.jsx("p",{className:"explore-card__blurb",children:r.blurb}),D.jsx("ul",{className:"explore-sample",children:r.sample.map(o=>D.jsxs("li",{children:[D.jsx("span",{className:"terminal-label",children:o.label}),D.jsxs("span",{className:"explore-sample__metrics",children:[D.jsx("span",{className:"terminal-value terminal-long",children:o.value}),D.jsx("span",{className:"terminal-value explore-sample__meta",children:o.meta})]})]},o.label))})]})]})]})})}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const mp="185",gy=0,w_=1,_y=2,iu=1,vy=2,fl=3,Va=0,oi=1,oa=2,Ha=0,io=1,yh=2,D_=3,L_=4,xy=5,$s=100,Sy=101,My=102,yy=103,Ey=104,by=200,Ty=201,Ay=202,Ry=203,Eh=204,bh=205,Cy=206,wy=207,Dy=208,Ly=209,Ny=210,Uy=211,Oy=212,Py=213,Iy=214,Th=0,Ah=1,Rh=2,lo=3,Ch=4,wh=5,Dh=6,Lh=7,$v=0,Fy=1,By=2,ua=0,ex=1,tx=2,nx=3,ix=4,ax=5,sx=6,rx=7,ox=300,ar=301,co=302,Fd=303,Bd=304,vu=306,Nh=1e3,Ki=1001,Uh=1002,Bn=1003,zy=1004,Oc=1005,An=1006,zd=1007,As=1008,Ui=1009,lx=1010,cx=1011,xl=1012,gp=1013,ha=1014,la=1015,ka=1016,_p=1017,vp=1018,Sl=1020,ux=35902,fx=35899,dx=1021,hx=1022,Qi=1023,Xa=1026,nr=1027,px=1028,xp=1029,sr=1030,Sp=1031,Mp=1033,au=33776,su=33777,ru=33778,ou=33779,Oh=35840,Ph=35841,Ih=35842,Fh=35843,Bh=36196,zh=37492,Hh=37496,Gh=37488,Vh=37489,uu=37490,kh=37491,Xh=37808,Wh=37809,qh=37810,Yh=37811,jh=37812,Zh=37813,Kh=37814,Qh=37815,Jh=37816,$h=37817,ep=37818,tp=37819,np=37820,ip=37821,ap=36492,sp=36494,rp=36495,op=36283,lp=36284,fu=36285,cp=36286,Hy=3200,N_=0,Gy=1,Ts="",Qn="srgb",du="srgb-linear",hu="linear",Wt="srgb",Gr=7680,U_=519,Vy=512,ky=513,Xy=514,yp=515,Wy=516,qy=517,Ep=518,Yy=519,O_=35044,P_="300 es",ca=2e3,pu=2001;function jy(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function mu(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function Zy(){const a=mu("canvas");return a.style.display="block",a}const I_={};function F_(...a){const e="THREE."+a.shift();console.log(e,...a)}function mx(a){const e=a[0];if(typeof e=="string"&&e.startsWith("TSL:")){const i=a[1];i&&i.isStackTrace?a[0]+=" "+i.getLocation():a[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return a}function st(...a){a=mx(a);const e="THREE."+a.shift();{const i=a[0];i&&i.isStackTrace?console.warn(i.getError(e)):console.warn(e,...a)}}function Nt(...a){a=mx(a);const e="THREE."+a.shift();{const i=a[0];i&&i.isStackTrace?console.error(i.getError(e)):console.error(e,...a)}}function ao(...a){const e=a.join(" ");e in I_||(I_[e]=!0,st(...a))}function Ky(a,e,i){return new Promise(function(r,o){function c(){switch(a.clientWaitSync(e,a.SYNC_FLUSH_COMMANDS_BIT,0)){case a.WAIT_FAILED:o();break;case a.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:r()}}setTimeout(c,i)})}const Qy={[Th]:Ah,[Rh]:Dh,[Ch]:Lh,[lo]:wh,[Ah]:Th,[Dh]:Rh,[Lh]:Ch,[wh]:lo};class or{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const c=o.indexOf(i);c!==-1&&o.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let c=0,u=o.length;c<u;c++)o[c].call(this,e);e.target=null}}}const Vn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let B_=1234567;const gl=Math.PI/180,Ml=180/Math.PI;function ho(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Vn[a&255]+Vn[a>>8&255]+Vn[a>>16&255]+Vn[a>>24&255]+"-"+Vn[e&255]+Vn[e>>8&255]+"-"+Vn[e>>16&15|64]+Vn[e>>24&255]+"-"+Vn[i&63|128]+Vn[i>>8&255]+"-"+Vn[i>>16&255]+Vn[i>>24&255]+Vn[r&255]+Vn[r>>8&255]+Vn[r>>16&255]+Vn[r>>24&255]).toLowerCase()}function vt(a,e,i){return Math.max(e,Math.min(i,a))}function bp(a,e){return(a%e+e)%e}function Jy(a,e,i,r,o){return r+(a-e)*(o-r)/(i-e)}function $y(a,e,i){return a!==e?(i-a)/(e-a):0}function _l(a,e,i){return(1-i)*a+i*e}function eE(a,e,i,r){return _l(a,e,1-Math.exp(-i*r))}function tE(a,e=1){return e-Math.abs(bp(a,e*2)-e)}function nE(a,e,i){return a<=e?0:a>=i?1:(a=(a-e)/(i-e),a*a*(3-2*a))}function iE(a,e,i){return a<=e?0:a>=i?1:(a=(a-e)/(i-e),a*a*a*(a*(a*6-15)+10))}function aE(a,e){return a+Math.floor(Math.random()*(e-a+1))}function sE(a,e){return a+Math.random()*(e-a)}function rE(a){return a*(.5-Math.random())}function oE(a){a!==void 0&&(B_=a);let e=B_+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function lE(a){return a*gl}function cE(a){return a*Ml}function uE(a){return(a&a-1)===0&&a!==0}function fE(a){return Math.pow(2,Math.ceil(Math.log(a)/Math.LN2))}function dE(a){return Math.pow(2,Math.floor(Math.log(a)/Math.LN2))}function hE(a,e,i,r,o){const c=Math.cos,u=Math.sin,h=c(i/2),m=u(i/2),d=c((e+r)/2),g=u((e+r)/2),_=c((e-r)/2),v=u((e-r)/2),x=c((r-e)/2),E=u((r-e)/2);switch(o){case"XYX":a.set(h*g,m*_,m*v,h*d);break;case"YZY":a.set(m*v,h*g,m*_,h*d);break;case"ZXZ":a.set(m*_,m*v,h*g,h*d);break;case"XZX":a.set(h*g,m*E,m*x,h*d);break;case"YXY":a.set(m*x,h*g,m*E,h*d);break;case"ZYZ":a.set(m*E,m*x,h*g,h*d);break;default:st("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+o)}}function to(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return a/4294967295;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int32Array:return Math.max(a/2147483647,-1);case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function jn(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return Math.round(a*4294967295);case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int32Array:return Math.round(a*2147483647);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const $t={DEG2RAD:gl,RAD2DEG:Ml,generateUUID:ho,clamp:vt,euclideanModulo:bp,mapLinear:Jy,inverseLerp:$y,lerp:_l,damp:eE,pingpong:tE,smoothstep:nE,smootherstep:iE,randInt:aE,randFloat:sE,randFloatSpread:rE,seededRandom:oE,degToRad:lE,radToDeg:cE,isPowerOfTwo:uE,ceilPowerOfTwo:fE,floorPowerOfTwo:dE,setQuaternionFromProperEuler:hE,normalize:jn,denormalize:to},Up=class Up{constructor(e=0,i=0){this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,o=e.elements;return this.x=o[0]*i+o[3]*r+o[6],this.y=o[1]*i+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=vt(this.x,e.x,i.x),this.y=vt(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=vt(this.x,e,i),this.y=vt(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(vt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(vt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),o=Math.sin(i),c=this.x-e.x,u=this.y-e.y;return this.x=c*r-u*o+e.x,this.y=c*o+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Up.prototype.isVector2=!0;let Pt=Up;class po{constructor(e=0,i=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=o}static slerpFlat(e,i,r,o,c,u,h){let m=r[o+0],d=r[o+1],g=r[o+2],_=r[o+3],v=c[u+0],x=c[u+1],E=c[u+2],w=c[u+3];if(_!==w||m!==v||d!==x||g!==E){let y=m*v+d*x+g*E+_*w;y<0&&(v=-v,x=-x,E=-E,w=-w,y=-y);let M=1-h;if(y<.9995){const I=Math.acos(y),z=Math.sin(I);M=Math.sin(M*I)/z,h=Math.sin(h*I)/z,m=m*M+v*h,d=d*M+x*h,g=g*M+E*h,_=_*M+w*h}else{m=m*M+v*h,d=d*M+x*h,g=g*M+E*h,_=_*M+w*h;const I=1/Math.sqrt(m*m+d*d+g*g+_*_);m*=I,d*=I,g*=I,_*=I}}e[i]=m,e[i+1]=d,e[i+2]=g,e[i+3]=_}static multiplyQuaternionsFlat(e,i,r,o,c,u){const h=r[o],m=r[o+1],d=r[o+2],g=r[o+3],_=c[u],v=c[u+1],x=c[u+2],E=c[u+3];return e[i]=h*E+g*_+m*x-d*v,e[i+1]=m*E+g*v+d*_-h*x,e[i+2]=d*E+g*x+h*v-m*_,e[i+3]=g*E-h*_-m*v-d*x,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,o){return this._x=e,this._y=i,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,o=e._y,c=e._z,u=e._order,h=Math.cos,m=Math.sin,d=h(r/2),g=h(o/2),_=h(c/2),v=m(r/2),x=m(o/2),E=m(c/2);switch(u){case"XYZ":this._x=v*g*_+d*x*E,this._y=d*x*_-v*g*E,this._z=d*g*E+v*x*_,this._w=d*g*_-v*x*E;break;case"YXZ":this._x=v*g*_+d*x*E,this._y=d*x*_-v*g*E,this._z=d*g*E-v*x*_,this._w=d*g*_+v*x*E;break;case"ZXY":this._x=v*g*_-d*x*E,this._y=d*x*_+v*g*E,this._z=d*g*E+v*x*_,this._w=d*g*_-v*x*E;break;case"ZYX":this._x=v*g*_-d*x*E,this._y=d*x*_+v*g*E,this._z=d*g*E-v*x*_,this._w=d*g*_+v*x*E;break;case"YZX":this._x=v*g*_+d*x*E,this._y=d*x*_+v*g*E,this._z=d*g*E-v*x*_,this._w=d*g*_-v*x*E;break;case"XZY":this._x=v*g*_-d*x*E,this._y=d*x*_-v*g*E,this._z=d*g*E+v*x*_,this._w=d*g*_+v*x*E;break;default:st("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],o=i[4],c=i[8],u=i[1],h=i[5],m=i[9],d=i[2],g=i[6],_=i[10],v=r+h+_;if(v>0){const x=.5/Math.sqrt(v+1);this._w=.25/x,this._x=(g-m)*x,this._y=(c-d)*x,this._z=(u-o)*x}else if(r>h&&r>_){const x=2*Math.sqrt(1+r-h-_);this._w=(g-m)/x,this._x=.25*x,this._y=(o+u)/x,this._z=(c+d)/x}else if(h>_){const x=2*Math.sqrt(1+h-r-_);this._w=(c-d)/x,this._x=(o+u)/x,this._y=.25*x,this._z=(m+g)/x}else{const x=2*Math.sqrt(1+_-r-h);this._w=(u-o)/x,this._x=(c+d)/x,this._y=(m+g)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(vt(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,i/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,o=e._y,c=e._z,u=e._w,h=i._x,m=i._y,d=i._z,g=i._w;return this._x=r*g+u*h+o*d-c*m,this._y=o*g+u*m+c*h-r*d,this._z=c*g+u*d+r*m-o*h,this._w=u*g-r*h-o*m-c*d,this._onChangeCallback(),this}slerp(e,i){let r=e._x,o=e._y,c=e._z,u=e._w,h=this.dot(e);h<0&&(r=-r,o=-o,c=-c,u=-u,h=-h);let m=1-i;if(h<.9995){const d=Math.acos(h),g=Math.sin(d);m=Math.sin(m*d)/g,i=Math.sin(i*d)/g,this._x=this._x*m+r*i,this._y=this._y*m+o*i,this._z=this._z*m+c*i,this._w=this._w*m+u*i,this._onChangeCallback()}else this._x=this._x*m+r*i,this._y=this._y*m+o*i,this._z=this._z*m+c*i,this._w=this._w*m+u*i,this.normalize();return this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Op=class Op{constructor(e=0,i=0,r=0){this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(z_.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(z_.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,o=this.z,c=e.elements;return this.x=c[0]*i+c[3]*r+c[6]*o,this.y=c[1]*i+c[4]*r+c[7]*o,this.z=c[2]*i+c[5]*r+c[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,o=this.z,c=e.elements,u=1/(c[3]*i+c[7]*r+c[11]*o+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*o+c[12])*u,this.y=(c[1]*i+c[5]*r+c[9]*o+c[13])*u,this.z=(c[2]*i+c[6]*r+c[10]*o+c[14])*u,this}applyQuaternion(e){const i=this.x,r=this.y,o=this.z,c=e.x,u=e.y,h=e.z,m=e.w,d=2*(u*o-h*r),g=2*(h*i-c*o),_=2*(c*r-u*i);return this.x=i+m*d+u*_-h*g,this.y=r+m*g+h*d-c*_,this.z=o+m*_+c*g-u*d,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,o=this.z,c=e.elements;return this.x=c[0]*i+c[4]*r+c[8]*o,this.y=c[1]*i+c[5]*r+c[9]*o,this.z=c[2]*i+c[6]*r+c[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=vt(this.x,e.x,i.x),this.y=vt(this.y,e.y,i.y),this.z=vt(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=vt(this.x,e,i),this.y=vt(this.y,e,i),this.z=vt(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(vt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,o=e.y,c=e.z,u=i.x,h=i.y,m=i.z;return this.x=o*m-c*h,this.y=c*u-r*m,this.z=r*h-o*u,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Hd.copy(this).projectOnVector(e),this.sub(Hd)}reflect(e){return this.sub(Hd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(vt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return i*i+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const o=Math.sin(i)*e;return this.x=o*Math.sin(r),this.y=Math.cos(i)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=o,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Op.prototype.isVector3=!0;let ee=Op;const Hd=new ee,z_=new po,Pp=class Pp{constructor(e,i,r,o,c,u,h,m,d){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,o,c,u,h,m,d)}set(e,i,r,o,c,u,h,m,d){const g=this.elements;return g[0]=e,g[1]=o,g[2]=h,g[3]=i,g[4]=c,g[5]=m,g[6]=r,g[7]=u,g[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,o=i.elements,c=this.elements,u=r[0],h=r[3],m=r[6],d=r[1],g=r[4],_=r[7],v=r[2],x=r[5],E=r[8],w=o[0],y=o[3],M=o[6],I=o[1],z=o[4],R=o[7],O=o[2],L=o[5],B=o[8];return c[0]=u*w+h*I+m*O,c[3]=u*y+h*z+m*L,c[6]=u*M+h*R+m*B,c[1]=d*w+g*I+_*O,c[4]=d*y+g*z+_*L,c[7]=d*M+g*R+_*B,c[2]=v*w+x*I+E*O,c[5]=v*y+x*z+E*L,c[8]=v*M+x*R+E*B,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],o=e[2],c=e[3],u=e[4],h=e[5],m=e[6],d=e[7],g=e[8];return i*u*g-i*h*d-r*c*g+r*h*m+o*c*d-o*u*m}invert(){const e=this.elements,i=e[0],r=e[1],o=e[2],c=e[3],u=e[4],h=e[5],m=e[6],d=e[7],g=e[8],_=g*u-h*d,v=h*m-g*c,x=d*c-u*m,E=i*_+r*v+o*x;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/E;return e[0]=_*w,e[1]=(o*d-g*r)*w,e[2]=(h*r-o*u)*w,e[3]=v*w,e[4]=(g*i-o*m)*w,e[5]=(o*c-h*i)*w,e[6]=x*w,e[7]=(r*m-d*i)*w,e[8]=(u*i-r*c)*w,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,o,c,u,h){const m=Math.cos(c),d=Math.sin(c);return this.set(r*m,r*d,-r*(m*u+d*h)+u+e,-o*d,o*m,-o*(-d*u+m*h)+h+i,0,0,1),this}scale(e,i){return ao("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Gd.makeScale(e,i)),this}rotate(e){return ao("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Gd.makeRotation(-e)),this}translate(e,i){return ao("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Gd.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let o=0;o<9;o++)if(i[o]!==r[o])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Pp.prototype.isMatrix3=!0;let ut=Pp;const Gd=new ut,H_=new ut().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),G_=new ut().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function pE(){const a={enabled:!0,workingColorSpace:du,spaces:{},convert:function(o,c,u){return this.enabled===!1||c===u||!c||!u||(this.spaces[c].transfer===Wt&&(o.r=Ga(o.r),o.g=Ga(o.g),o.b=Ga(o.b)),this.spaces[c].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[c].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Wt&&(o.r=so(o.r),o.g=so(o.g),o.b=so(o.b))),o},workingToColorSpace:function(o,c){return this.convert(o,this.workingColorSpace,c)},colorSpaceToWorking:function(o,c){return this.convert(o,c,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Ts?hu:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,c=this.workingColorSpace){return o.fromArray(this.spaces[c].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,c,u){return o.copy(this.spaces[c].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,c){return ao("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),a.workingToColorSpace(o,c)},toWorkingColorSpace:function(o,c){return ao("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),a.colorSpaceToWorking(o,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return a.define({[du]:{primaries:e,whitePoint:r,transfer:hu,toXYZ:H_,fromXYZ:G_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Qn},outputColorSpaceConfig:{drawingBufferColorSpace:Qn}},[Qn]:{primaries:e,whitePoint:r,transfer:Wt,toXYZ:H_,fromXYZ:G_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Qn}}}),a}const Ct=pE();function Ga(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function so(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}let Vr;class mE{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Vr===void 0&&(Vr=mu("canvas")),Vr.width=e.width,Vr.height=e.height;const o=Vr.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=Vr}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=mu("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),c=o.data;for(let u=0;u<c.length;u++)c[u]=Ga(c[u]/255)*255;return r.putImageData(o,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(Ga(i[r]/255)*255):i[r]=Ga(i[r]);return{data:i,width:e.width,height:e.height}}else return st("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let gE=0;class Tp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:gE++}),this.uuid=ho(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayWidth,i.displayHeight,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let c;if(Array.isArray(o)){c=[];for(let u=0,h=o.length;u<h;u++)o[u].isDataTexture?c.push(Vd(o[u].image)):c.push(Vd(o[u]))}else c=Vd(o);r.url=c}return i||(e.images[this.uuid]=r),r}}function Vd(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?mE.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(st("Texture: Unable to serialize Texture."),{})}let _E=0;const kd=new ee;class Xn extends or{constructor(e=Xn.DEFAULT_IMAGE,i=Xn.DEFAULT_MAPPING,r=Ki,o=Ki,c=An,u=As,h=Qi,m=Ui,d=Xn.DEFAULT_ANISOTROPY,g=Ts){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_E++}),this.uuid=ho(),this.name="",this.source=new Tp(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=c,this.minFilter=u,this.anisotropy=d,this.format=h,this.internalFormat=null,this.type=m,this.offset=new Pt(0,0),this.repeat=new Pt(1,1),this.center=new Pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(kd).x}get height(){return this.source.getSize(kd).y}get depth(){return this.source.getSize(kd).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const r=e[i];if(r===void 0){st(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const o=this[i];if(o===void 0){st(`Texture.setValues(): property '${i}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ox)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Nh:e.x=e.x-Math.floor(e.x);break;case Ki:e.x=e.x<0?0:1;break;case Uh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Nh:e.y=e.y-Math.floor(e.y);break;case Ki:e.y=e.y<0?0:1;break;case Uh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Xn.DEFAULT_IMAGE=null;Xn.DEFAULT_MAPPING=ox;Xn.DEFAULT_ANISOTROPY=1;const Ip=class Ip{constructor(e=0,i=0,r=0,o=1){this.x=e,this.y=i,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,o){return this.x=e,this.y=i,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,o=this.z,c=this.w,u=e.elements;return this.x=u[0]*i+u[4]*r+u[8]*o+u[12]*c,this.y=u[1]*i+u[5]*r+u[9]*o+u[13]*c,this.z=u[2]*i+u[6]*r+u[10]*o+u[14]*c,this.w=u[3]*i+u[7]*r+u[11]*o+u[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,o,c;const m=e.elements,d=m[0],g=m[4],_=m[8],v=m[1],x=m[5],E=m[9],w=m[2],y=m[6],M=m[10];if(Math.abs(g-v)<.01&&Math.abs(_-w)<.01&&Math.abs(E-y)<.01){if(Math.abs(g+v)<.1&&Math.abs(_+w)<.1&&Math.abs(E+y)<.1&&Math.abs(d+x+M-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const z=(d+1)/2,R=(x+1)/2,O=(M+1)/2,L=(g+v)/4,B=(_+w)/4,T=(E+y)/4;return z>R&&z>O?z<.01?(r=0,o=.707106781,c=.707106781):(r=Math.sqrt(z),o=L/r,c=B/r):R>O?R<.01?(r=.707106781,o=0,c=.707106781):(o=Math.sqrt(R),r=L/o,c=T/o):O<.01?(r=.707106781,o=.707106781,c=0):(c=Math.sqrt(O),r=B/c,o=T/c),this.set(r,o,c,i),this}let I=Math.sqrt((y-E)*(y-E)+(_-w)*(_-w)+(v-g)*(v-g));return Math.abs(I)<.001&&(I=1),this.x=(y-E)/I,this.y=(_-w)/I,this.z=(v-g)/I,this.w=Math.acos((d+x+M-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=vt(this.x,e.x,i.x),this.y=vt(this.y,e.y,i.y),this.z=vt(this.z,e.z,i.z),this.w=vt(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=vt(this.x,e,i),this.y=vt(this.y,e,i),this.z=vt(this.z,e,i),this.w=vt(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(vt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Ip.prototype.isVector4=!0;let mn=Ip;class vE extends or{constructor(e=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:An,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},r),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=r.depth,this.scissor=new mn(0,0,e,i),this.scissorTest=!1,this.viewport=new mn(0,0,e,i),this.textures=[];const o={width:e,height:i,depth:r.depth},c=new Xn(o),u=r.count;for(let h=0;h<u;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview,this.useArrayDepthTexture=r.useArrayDepthTexture}_setTextureOptions(e={}){const i={minFilter:An,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let o=0,c=this.textures.length;o<c;o++)this.textures[o].image.width=e,this.textures[o].image.height=i,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const o=Object.assign({},e.textures[i].image);this.textures[i].source=new Tp(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class fa extends vE{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class gx extends Xn{constructor(e=null,i=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:o},this.magFilter=Bn,this.minFilter=Bn,this.wrapR=Ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class xE extends Xn{constructor(e=null,i=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:o},this.magFilter=Bn,this.minFilter=Bn,this.wrapR=Ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const _u=class _u{constructor(e,i,r,o,c,u,h,m,d,g,_,v,x,E,w,y){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,o,c,u,h,m,d,g,_,v,x,E,w,y)}set(e,i,r,o,c,u,h,m,d,g,_,v,x,E,w,y){const M=this.elements;return M[0]=e,M[4]=i,M[8]=r,M[12]=o,M[1]=c,M[5]=u,M[9]=h,M[13]=m,M[2]=d,M[6]=g,M[10]=_,M[14]=v,M[3]=x,M[7]=E,M[11]=w,M[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new _u().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return this.determinantAffine()===0?(e.set(1,0,0),i.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const i=this.elements,r=e.elements,o=1/kr.setFromMatrixColumn(e,0).length(),c=1/kr.setFromMatrixColumn(e,1).length(),u=1/kr.setFromMatrixColumn(e,2).length();return i[0]=r[0]*o,i[1]=r[1]*o,i[2]=r[2]*o,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*u,i[9]=r[9]*u,i[10]=r[10]*u,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,o=e.y,c=e.z,u=Math.cos(r),h=Math.sin(r),m=Math.cos(o),d=Math.sin(o),g=Math.cos(c),_=Math.sin(c);if(e.order==="XYZ"){const v=u*g,x=u*_,E=h*g,w=h*_;i[0]=m*g,i[4]=-m*_,i[8]=d,i[1]=x+E*d,i[5]=v-w*d,i[9]=-h*m,i[2]=w-v*d,i[6]=E+x*d,i[10]=u*m}else if(e.order==="YXZ"){const v=m*g,x=m*_,E=d*g,w=d*_;i[0]=v+w*h,i[4]=E*h-x,i[8]=u*d,i[1]=u*_,i[5]=u*g,i[9]=-h,i[2]=x*h-E,i[6]=w+v*h,i[10]=u*m}else if(e.order==="ZXY"){const v=m*g,x=m*_,E=d*g,w=d*_;i[0]=v-w*h,i[4]=-u*_,i[8]=E+x*h,i[1]=x+E*h,i[5]=u*g,i[9]=w-v*h,i[2]=-u*d,i[6]=h,i[10]=u*m}else if(e.order==="ZYX"){const v=u*g,x=u*_,E=h*g,w=h*_;i[0]=m*g,i[4]=E*d-x,i[8]=v*d+w,i[1]=m*_,i[5]=w*d+v,i[9]=x*d-E,i[2]=-d,i[6]=h*m,i[10]=u*m}else if(e.order==="YZX"){const v=u*m,x=u*d,E=h*m,w=h*d;i[0]=m*g,i[4]=w-v*_,i[8]=E*_+x,i[1]=_,i[5]=u*g,i[9]=-h*g,i[2]=-d*g,i[6]=x*_+E,i[10]=v-w*_}else if(e.order==="XZY"){const v=u*m,x=u*d,E=h*m,w=h*d;i[0]=m*g,i[4]=-_,i[8]=d*g,i[1]=v*_+w,i[5]=u*g,i[9]=x*_-E,i[2]=E*_-x,i[6]=h*g,i[10]=w*_+v}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(SE,e,ME)}lookAt(e,i,r){const o=this.elements;return _i.subVectors(e,i),_i.lengthSq()===0&&(_i.z=1),_i.normalize(),xs.crossVectors(r,_i),xs.lengthSq()===0&&(Math.abs(r.z)===1?_i.x+=1e-4:_i.z+=1e-4,_i.normalize(),xs.crossVectors(r,_i)),xs.normalize(),Pc.crossVectors(_i,xs),o[0]=xs.x,o[4]=Pc.x,o[8]=_i.x,o[1]=xs.y,o[5]=Pc.y,o[9]=_i.y,o[2]=xs.z,o[6]=Pc.z,o[10]=_i.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,o=i.elements,c=this.elements,u=r[0],h=r[4],m=r[8],d=r[12],g=r[1],_=r[5],v=r[9],x=r[13],E=r[2],w=r[6],y=r[10],M=r[14],I=r[3],z=r[7],R=r[11],O=r[15],L=o[0],B=o[4],T=o[8],N=o[12],X=o[1],V=o[5],Y=o[9],ue=o[13],fe=o[2],q=o[6],F=o[10],H=o[14],$=o[3],_e=o[7],Me=o[11],P=o[15];return c[0]=u*L+h*X+m*fe+d*$,c[4]=u*B+h*V+m*q+d*_e,c[8]=u*T+h*Y+m*F+d*Me,c[12]=u*N+h*ue+m*H+d*P,c[1]=g*L+_*X+v*fe+x*$,c[5]=g*B+_*V+v*q+x*_e,c[9]=g*T+_*Y+v*F+x*Me,c[13]=g*N+_*ue+v*H+x*P,c[2]=E*L+w*X+y*fe+M*$,c[6]=E*B+w*V+y*q+M*_e,c[10]=E*T+w*Y+y*F+M*Me,c[14]=E*N+w*ue+y*H+M*P,c[3]=I*L+z*X+R*fe+O*$,c[7]=I*B+z*V+R*q+O*_e,c[11]=I*T+z*Y+R*F+O*Me,c[15]=I*N+z*ue+R*H+O*P,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],o=e[8],c=e[12],u=e[1],h=e[5],m=e[9],d=e[13],g=e[2],_=e[6],v=e[10],x=e[14],E=e[3],w=e[7],y=e[11],M=e[15],I=m*x-d*v,z=h*x-d*_,R=h*v-m*_,O=u*x-d*g,L=u*v-m*g,B=u*_-h*g;return i*(w*I-y*z+M*R)-r*(E*I-y*O+M*L)+o*(E*z-w*O+M*B)-c*(E*R-w*L+y*B)}determinantAffine(){const e=this.elements,i=e[0],r=e[4],o=e[8],c=e[1],u=e[5],h=e[9],m=e[2],d=e[6],g=e[10];return i*(u*g-h*d)-r*(c*g-h*m)+o*(c*d-u*m)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=i,o[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],o=e[2],c=e[3],u=e[4],h=e[5],m=e[6],d=e[7],g=e[8],_=e[9],v=e[10],x=e[11],E=e[12],w=e[13],y=e[14],M=e[15],I=i*h-r*u,z=i*m-o*u,R=i*d-c*u,O=r*m-o*h,L=r*d-c*h,B=o*d-c*m,T=g*w-_*E,N=g*y-v*E,X=g*M-x*E,V=_*y-v*w,Y=_*M-x*w,ue=v*M-x*y,fe=I*ue-z*Y+R*V+O*X-L*N+B*T;if(fe===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const q=1/fe;return e[0]=(h*ue-m*Y+d*V)*q,e[1]=(o*Y-r*ue-c*V)*q,e[2]=(w*B-y*L+M*O)*q,e[3]=(v*L-_*B-x*O)*q,e[4]=(m*X-u*ue-d*N)*q,e[5]=(i*ue-o*X+c*N)*q,e[6]=(y*R-E*B-M*z)*q,e[7]=(g*B-v*R+x*z)*q,e[8]=(u*Y-h*X+d*T)*q,e[9]=(r*X-i*Y-c*T)*q,e[10]=(E*L-w*R+M*I)*q,e[11]=(_*R-g*L-x*I)*q,e[12]=(h*N-u*V-m*T)*q,e[13]=(i*V-r*N+o*T)*q,e[14]=(w*z-E*O-y*I)*q,e[15]=(g*O-_*z+v*I)*q,this}scale(e){const i=this.elements,r=e.x,o=e.y,c=e.z;return i[0]*=r,i[4]*=o,i[8]*=c,i[1]*=r,i[5]*=o,i[9]*=c,i[2]*=r,i[6]*=o,i[10]*=c,i[3]*=r,i[7]*=o,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,o))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),o=Math.sin(i),c=1-r,u=e.x,h=e.y,m=e.z,d=c*u,g=c*h;return this.set(d*u+r,d*h-o*m,d*m+o*h,0,d*h+o*m,g*h+r,g*m-o*u,0,d*m-o*h,g*m+o*u,c*m*m+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,o,c,u){return this.set(1,r,c,0,e,1,u,0,i,o,1,0,0,0,0,1),this}compose(e,i,r){const o=this.elements,c=i._x,u=i._y,h=i._z,m=i._w,d=c+c,g=u+u,_=h+h,v=c*d,x=c*g,E=c*_,w=u*g,y=u*_,M=h*_,I=m*d,z=m*g,R=m*_,O=r.x,L=r.y,B=r.z;return o[0]=(1-(w+M))*O,o[1]=(x+R)*O,o[2]=(E-z)*O,o[3]=0,o[4]=(x-R)*L,o[5]=(1-(v+M))*L,o[6]=(y+I)*L,o[7]=0,o[8]=(E+z)*B,o[9]=(y-I)*B,o[10]=(1-(v+w))*B,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,i,r){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const c=this.determinantAffine();if(c===0)return r.set(1,1,1),i.identity(),this;let u=kr.set(o[0],o[1],o[2]).length();const h=kr.set(o[4],o[5],o[6]).length(),m=kr.set(o[8],o[9],o[10]).length();c<0&&(u=-u),qi.copy(this);const d=1/u,g=1/h,_=1/m;return qi.elements[0]*=d,qi.elements[1]*=d,qi.elements[2]*=d,qi.elements[4]*=g,qi.elements[5]*=g,qi.elements[6]*=g,qi.elements[8]*=_,qi.elements[9]*=_,qi.elements[10]*=_,i.setFromRotationMatrix(qi),r.x=u,r.y=h,r.z=m,this}makePerspective(e,i,r,o,c,u,h=ca,m=!1){const d=this.elements,g=2*c/(i-e),_=2*c/(r-o),v=(i+e)/(i-e),x=(r+o)/(r-o);let E,w;if(m)E=c/(u-c),w=u*c/(u-c);else if(h===ca)E=-(u+c)/(u-c),w=-2*u*c/(u-c);else if(h===pu)E=-u/(u-c),w=-u*c/(u-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return d[0]=g,d[4]=0,d[8]=v,d[12]=0,d[1]=0,d[5]=_,d[9]=x,d[13]=0,d[2]=0,d[6]=0,d[10]=E,d[14]=w,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,i,r,o,c,u,h=ca,m=!1){const d=this.elements,g=2/(i-e),_=2/(r-o),v=-(i+e)/(i-e),x=-(r+o)/(r-o);let E,w;if(m)E=1/(u-c),w=u/(u-c);else if(h===ca)E=-2/(u-c),w=-(u+c)/(u-c);else if(h===pu)E=-1/(u-c),w=-c/(u-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return d[0]=g,d[4]=0,d[8]=0,d[12]=v,d[1]=0,d[5]=_,d[9]=0,d[13]=x,d[2]=0,d[6]=0,d[10]=E,d[14]=w,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let o=0;o<16;o++)if(i[o]!==r[o])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}};_u.prototype.isMatrix4=!0;let xn=_u;const kr=new ee,qi=new xn,SE=new ee(0,0,0),ME=new ee(1,1,1),xs=new ee,Pc=new ee,_i=new ee,V_=new xn,k_=new po;class rr{constructor(e=0,i=0,r=0,o=rr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,o=this._order){return this._x=e,this._y=i,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const o=e.elements,c=o[0],u=o[4],h=o[8],m=o[1],d=o[5],g=o[9],_=o[2],v=o[6],x=o[10];switch(i){case"XYZ":this._y=Math.asin(vt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,x),this._z=Math.atan2(-u,c)):(this._x=Math.atan2(v,d),this._z=0);break;case"YXZ":this._x=Math.asin(-vt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(h,x),this._z=Math.atan2(m,d)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(vt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-_,x),this._z=Math.atan2(-u,d)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-vt(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(v,x),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-u,d));break;case"YZX":this._z=Math.asin(vt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,d),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(h,x));break;case"XZY":this._z=Math.asin(-vt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(v,d),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-g,x),this._y=0);break;default:st("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return V_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(V_,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return k_.setFromEuler(this),this.setFromQuaternion(k_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}rr.DEFAULT_ORDER="XYZ";class _x{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let yE=0;const X_=new ee,Xr=new po,Ua=new xn,Ic=new ee,sl=new ee,EE=new ee,bE=new po,W_=new ee(1,0,0),q_=new ee(0,1,0),Y_=new ee(0,0,1),j_={type:"added"},TE={type:"removed"},Wr={type:"childadded",child:null},Xd={type:"childremoved",child:null};class xi extends or{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:yE++}),this.uuid=ho(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=xi.DEFAULT_UP.clone();const e=new ee,i=new rr,r=new po,o=new ee(1,1,1);function c(){r.setFromEuler(i,!1)}function u(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new xn},normalMatrix:{value:new ut}}),this.matrix=new xn,this.matrixWorld=new xn,this.matrixAutoUpdate=xi.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=xi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _x,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return Xr.setFromAxisAngle(e,i),this.quaternion.multiply(Xr),this}rotateOnWorldAxis(e,i){return Xr.setFromAxisAngle(e,i),this.quaternion.premultiply(Xr),this}rotateX(e){return this.rotateOnAxis(W_,e)}rotateY(e){return this.rotateOnAxis(q_,e)}rotateZ(e){return this.rotateOnAxis(Y_,e)}translateOnAxis(e,i){return X_.copy(e).applyQuaternion(this.quaternion),this.position.add(X_.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(W_,e)}translateY(e){return this.translateOnAxis(q_,e)}translateZ(e){return this.translateOnAxis(Y_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ua.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?Ic.copy(e):Ic.set(e,i,r);const o=this.parent;this.updateWorldMatrix(!0,!1),sl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ua.lookAt(sl,Ic,this.up):Ua.lookAt(Ic,sl,this.up),this.quaternion.setFromRotationMatrix(Ua),o&&(Ua.extractRotation(o.matrixWorld),Xr.setFromRotationMatrix(Ua),this.quaternion.premultiply(Xr.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(Nt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(j_),Wr.child=e,this.dispatchEvent(Wr),Wr.child=null):Nt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(TE),Xd.child=e,this.dispatchEvent(Xd),Xd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ua.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ua.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ua),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(j_),Wr.child=e,this.dispatchEvent(Wr),Wr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,o=this.children.length;r<o;r++){const u=this.children[r].getObjectByProperty(e,i);if(u!==void 0)return u}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const o=this.children;for(let c=0,u=o.length;c<u;c++)o[c].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sl,e,EE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sl,bE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const i=e.x,r=e.y,o=e.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*r-c[8]*o,c[13]+=r-c[1]*i-c[5]*r-c[9]*o,c[14]+=o-c[2]*i-c[6]*r-c[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i,r=!1){const o=this.parent;if(e===!0&&o!==null&&o.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),i===!0){const c=this.children;for(let u=0,h=c.length;u<h;u++)c[u].updateWorldMatrix(!1,!0,r)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),this.static!==!1&&(o.static=this.static),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(h=>({...h})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function c(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=c(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let d=0,g=m.length;d<g;d++){const _=m[d];c(e.shapes,_)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,d=this.material.length;m<d;m++)h.push(c(e.materials,this.material[m]));o.material=h}else o.material=c(e.materials,this.material);if(this.children.length>0){o.children=[];for(let h=0;h<this.children.length;h++)o.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];o.animations.push(c(e.animations,m))}}if(i){const h=u(e.geometries),m=u(e.materials),d=u(e.textures),g=u(e.images),_=u(e.shapes),v=u(e.skeletons),x=u(e.animations),E=u(e.nodes);h.length>0&&(r.geometries=h),m.length>0&&(r.materials=m),d.length>0&&(r.textures=d),g.length>0&&(r.images=g),_.length>0&&(r.shapes=_),v.length>0&&(r.skeletons=v),x.length>0&&(r.animations=x),E.length>0&&(r.nodes=E)}return r.object=o,r;function u(h){const m=[];for(const d in h){const g=h[d];delete g.metadata,m.push(g)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}xi.DEFAULT_UP=new ee(0,1,0);xi.DEFAULT_MATRIX_AUTO_UPDATE=!0;xi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class dl extends xi{constructor(){super(),this.isGroup=!0,this.type="Group"}}const AE={type:"move"};class Wd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new dl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new dl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ee,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ee),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new dl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ee,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ee,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let o=null,c=null,u=null;const h=this._targetRay,m=this._grip,d=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(d&&e.hand){u=!0;for(const w of e.hand.values()){const y=i.getJointPose(w,r),M=this._getHandJoint(d,w);y!==null&&(M.matrix.fromArray(y.transform.matrix),M.matrix.decompose(M.position,M.rotation,M.scale),M.matrixWorldNeedsUpdate=!0,M.jointRadius=y.radius),M.visible=y!==null}const g=d.joints["index-finger-tip"],_=d.joints["thumb-tip"],v=g.position.distanceTo(_.position),x=.02,E=.005;d.inputState.pinching&&v>x+E?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&v<=x-E&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,r),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1,m.eventsEnabled&&m.dispatchEvent({type:"gripUpdated",data:e,target:this})));h!==null&&(o=i.getPose(e.targetRaySpace,r),o===null&&c!==null&&(o=c),o!==null&&(h.matrix.fromArray(o.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,o.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(o.linearVelocity)):h.hasLinearVelocity=!1,o.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(o.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(AE)))}return h!==null&&(h.visible=o!==null),m!==null&&(m.visible=c!==null),d!==null&&(d.visible=u!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new dl;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}const vx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ss={h:0,s:0,l:0},Fc={h:0,s:0,l:0};function qd(a,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?a+(e-a)*6*i:i<1/2?e:i<2/3?a+(e-a)*6*(2/3-i):a}class wt{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=Qn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ct.colorSpaceToWorking(this,i),this}setRGB(e,i,r,o=Ct.workingColorSpace){return this.r=e,this.g=i,this.b=r,Ct.colorSpaceToWorking(this,o),this}setHSL(e,i,r,o=Ct.workingColorSpace){if(e=bp(e,1),i=vt(i,0,1),r=vt(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,u=2*r-c;this.r=qd(u,c,e+1/3),this.g=qd(u,c,e),this.b=qd(u,c,e-1/3)}return Ct.colorSpaceToWorking(this,o),this}setStyle(e,i=Qn){function r(c){c!==void 0&&parseFloat(c)<1&&st("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const u=o[1],h=o[2];switch(u){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:st("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=o[1],u=c.length;if(u===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(u===6)return this.setHex(parseInt(c,16),i);st("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=Qn){const r=vx[e.toLowerCase()];return r!==void 0?this.setHex(r,i):st("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ga(e.r),this.g=Ga(e.g),this.b=Ga(e.b),this}copyLinearToSRGB(e){return this.r=so(e.r),this.g=so(e.g),this.b=so(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Qn){return Ct.workingToColorSpace(kn.copy(this),e),Math.round(vt(kn.r*255,0,255))*65536+Math.round(vt(kn.g*255,0,255))*256+Math.round(vt(kn.b*255,0,255))}getHexString(e=Qn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Ct.workingColorSpace){Ct.workingToColorSpace(kn.copy(this),i);const r=kn.r,o=kn.g,c=kn.b,u=Math.max(r,o,c),h=Math.min(r,o,c);let m,d;const g=(h+u)/2;if(h===u)m=0,d=0;else{const _=u-h;switch(d=g<=.5?_/(u+h):_/(2-u-h),u){case r:m=(o-c)/_+(o<c?6:0);break;case o:m=(c-r)/_+2;break;case c:m=(r-o)/_+4;break}m/=6}return e.h=m,e.s=d,e.l=g,e}getRGB(e,i=Ct.workingColorSpace){return Ct.workingToColorSpace(kn.copy(this),i),e.r=kn.r,e.g=kn.g,e.b=kn.b,e}getStyle(e=Qn){Ct.workingToColorSpace(kn.copy(this),e);const i=kn.r,r=kn.g,o=kn.b;return e!==Qn?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,i,r){return this.getHSL(Ss),this.setHSL(Ss.h+e,Ss.s+i,Ss.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(Ss),e.getHSL(Fc);const r=_l(Ss.h,Fc.h,i),o=_l(Ss.s,Fc.s,i),c=_l(Ss.l,Fc.l,i);return this.setHSL(r,o,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,o=this.b,c=e.elements;return this.r=c[0]*i+c[3]*r+c[6]*o,this.g=c[1]*i+c[4]*r+c[7]*o,this.b=c[2]*i+c[5]*r+c[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const kn=new wt;wt.NAMES=vx;class RE extends xi{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new rr,this.environmentIntensity=1,this.environmentRotation=new rr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Yi=new ee,Oa=new ee,Yd=new ee,Pa=new ee,qr=new ee,Yr=new ee,Z_=new ee,jd=new ee,Zd=new ee,Kd=new ee,Qd=new mn,Jd=new mn,$d=new mn;class Zi{constructor(e=new ee,i=new ee,r=new ee){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,o){o.subVectors(r,i),Yi.subVectors(e,i),o.cross(Yi);const c=o.lengthSq();return c>0?o.multiplyScalar(1/Math.sqrt(c)):o.set(0,0,0)}static getBarycoord(e,i,r,o,c){Yi.subVectors(o,i),Oa.subVectors(r,i),Yd.subVectors(e,i);const u=Yi.dot(Yi),h=Yi.dot(Oa),m=Yi.dot(Yd),d=Oa.dot(Oa),g=Oa.dot(Yd),_=u*d-h*h;if(_===0)return c.set(0,0,0),null;const v=1/_,x=(d*m-h*g)*v,E=(u*g-h*m)*v;return c.set(1-x-E,E,x)}static containsPoint(e,i,r,o){return this.getBarycoord(e,i,r,o,Pa)===null?!1:Pa.x>=0&&Pa.y>=0&&Pa.x+Pa.y<=1}static getInterpolation(e,i,r,o,c,u,h,m){return this.getBarycoord(e,i,r,o,Pa)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,Pa.x),m.addScaledVector(u,Pa.y),m.addScaledVector(h,Pa.z),m)}static getInterpolatedAttribute(e,i,r,o,c,u){return Qd.setScalar(0),Jd.setScalar(0),$d.setScalar(0),Qd.fromBufferAttribute(e,i),Jd.fromBufferAttribute(e,r),$d.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(Qd,c.x),u.addScaledVector(Jd,c.y),u.addScaledVector($d,c.z),u}static isFrontFacing(e,i,r,o){return Yi.subVectors(r,i),Oa.subVectors(e,i),Yi.cross(Oa).dot(o)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,o){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,i,r,o){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Yi.subVectors(this.c,this.b),Oa.subVectors(this.a,this.b),Yi.cross(Oa).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Zi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Zi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,o,c){return Zi.getInterpolation(e,this.a,this.b,this.c,i,r,o,c)}containsPoint(e){return Zi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Zi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,o=this.b,c=this.c;let u,h;qr.subVectors(o,r),Yr.subVectors(c,r),jd.subVectors(e,r);const m=qr.dot(jd),d=Yr.dot(jd);if(m<=0&&d<=0)return i.copy(r);Zd.subVectors(e,o);const g=qr.dot(Zd),_=Yr.dot(Zd);if(g>=0&&_<=g)return i.copy(o);const v=m*_-g*d;if(v<=0&&m>=0&&g<=0)return u=m/(m-g),i.copy(r).addScaledVector(qr,u);Kd.subVectors(e,c);const x=qr.dot(Kd),E=Yr.dot(Kd);if(E>=0&&x<=E)return i.copy(c);const w=x*d-m*E;if(w<=0&&d>=0&&E<=0)return h=d/(d-E),i.copy(r).addScaledVector(Yr,h);const y=g*E-x*_;if(y<=0&&_-g>=0&&x-E>=0)return Z_.subVectors(c,o),h=(_-g)/(_-g+(x-E)),i.copy(o).addScaledVector(Z_,h);const M=1/(y+w+v);return u=w*M,h=v*M,i.copy(r).addScaledVector(qr,u).addScaledVector(Yr,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class El{constructor(e=new ee(1/0,1/0,1/0),i=new ee(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(ji.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(ji.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=ji.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let u=0,h=c.count;u<h;u++)e.isMesh===!0?e.getVertexPosition(u,ji):ji.fromBufferAttribute(c,u),ji.applyMatrix4(e.matrixWorld),this.expandByPoint(ji);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Bc.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Bc.copy(r.boundingBox)),Bc.applyMatrix4(e.matrixWorld),this.union(Bc)}const o=e.children;for(let c=0,u=o.length;c<u;c++)this.expandByObject(o[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ji),ji.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(rl),zc.subVectors(this.max,rl),jr.subVectors(e.a,rl),Zr.subVectors(e.b,rl),Kr.subVectors(e.c,rl),Ms.subVectors(Zr,jr),ys.subVectors(Kr,Zr),Ys.subVectors(jr,Kr);let i=[0,-Ms.z,Ms.y,0,-ys.z,ys.y,0,-Ys.z,Ys.y,Ms.z,0,-Ms.x,ys.z,0,-ys.x,Ys.z,0,-Ys.x,-Ms.y,Ms.x,0,-ys.y,ys.x,0,-Ys.y,Ys.x,0];return!eh(i,jr,Zr,Kr,zc)||(i=[1,0,0,0,1,0,0,0,1],!eh(i,jr,Zr,Kr,zc))?!1:(Hc.crossVectors(Ms,ys),i=[Hc.x,Hc.y,Hc.z],eh(i,jr,Zr,Kr,zc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ji).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ji).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ia[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ia[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ia[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ia[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ia[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ia[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ia[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ia[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ia),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ia=[new ee,new ee,new ee,new ee,new ee,new ee,new ee,new ee],ji=new ee,Bc=new El,jr=new ee,Zr=new ee,Kr=new ee,Ms=new ee,ys=new ee,Ys=new ee,rl=new ee,zc=new ee,Hc=new ee,js=new ee;function eh(a,e,i,r,o){for(let c=0,u=a.length-3;c<=u;c+=3){js.fromArray(a,c);const h=o.x*Math.abs(js.x)+o.y*Math.abs(js.y)+o.z*Math.abs(js.z),m=e.dot(js),d=i.dot(js),g=r.dot(js);if(Math.max(-Math.max(m,d,g),Math.min(m,d,g))>h)return!1}return!0}const bn=new ee,Gc=new Pt;let CE=0;class da extends or{constructor(e,i,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:CE++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=O_,this.updateRanges=[],this.gpuType=la,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let o=0,c=this.itemSize;o<c;o++)this.array[e+o]=i.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)Gc.fromBufferAttribute(this,i),Gc.applyMatrix3(e),this.setXY(i,Gc.x,Gc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)bn.fromBufferAttribute(this,i),bn.applyMatrix3(e),this.setXYZ(i,bn.x,bn.y,bn.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)bn.fromBufferAttribute(this,i),bn.applyMatrix4(e),this.setXYZ(i,bn.x,bn.y,bn.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)bn.fromBufferAttribute(this,i),bn.applyNormalMatrix(e),this.setXYZ(i,bn.x,bn.y,bn.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)bn.fromBufferAttribute(this,i),bn.transformDirection(e),this.setXYZ(i,bn.x,bn.y,bn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=to(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=jn(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=to(i,this.array)),i}setX(e,i){return this.normalized&&(i=jn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=to(i,this.array)),i}setY(e,i){return this.normalized&&(i=jn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=to(i,this.array)),i}setZ(e,i){return this.normalized&&(i=jn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=to(i,this.array)),i}setW(e,i){return this.normalized&&(i=jn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=jn(i,this.array),r=jn(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,o){return e*=this.itemSize,this.normalized&&(i=jn(i,this.array),r=jn(r,this.array),o=jn(o,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,i,r,o,c){return e*=this.itemSize,this.normalized&&(i=jn(i,this.array),r=jn(r,this.array),o=jn(o,this.array),c=jn(c,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==O_&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class xx extends da{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class Sx extends da{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class Oi extends da{constructor(e,i,r){super(new Float32Array(e),i,r)}}const wE=new El,ol=new ee,th=new ee;class Ap{constructor(e=new ee,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):wE.setFromPoints(e).getCenter(r);let o=0;for(let c=0,u=e.length;c<u;c++)o=Math.max(o,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ol.subVectors(e,this.center);const i=ol.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),o=(r-this.radius)*.5;this.center.addScaledVector(ol,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(th.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ol.copy(e.center).add(th)),this.expandByPoint(ol.copy(e.center).sub(th))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let DE=0;const Li=new xn,nh=new xi,Qr=new ee,vi=new El,ll=new El,Nn=new ee;class Ii extends or{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:DE++}),this.uuid=ho(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(jy(e)?Sx:xx)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new ut().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Li.makeRotationFromQuaternion(e),this.applyMatrix4(Li),this}rotateX(e){return Li.makeRotationX(e),this.applyMatrix4(Li),this}rotateY(e){return Li.makeRotationY(e),this.applyMatrix4(Li),this}rotateZ(e){return Li.makeRotationZ(e),this.applyMatrix4(Li),this}translate(e,i,r){return Li.makeTranslation(e,i,r),this.applyMatrix4(Li),this}scale(e,i,r){return Li.makeScale(e,i,r),this.applyMatrix4(Li),this}lookAt(e){return nh.lookAt(e),nh.updateMatrix(),this.applyMatrix4(nh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qr).negate(),this.translate(Qr.x,Qr.y,Qr.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let o=0,c=e.length;o<c;o++){const u=e[o];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new Oi(r,3))}else{const r=Math.min(e.length,i.count);for(let o=0;o<r;o++){const c=e[o];i.setXYZ(o,c.x,c.y,c.z||0)}e.length>i.count&&st("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new El);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Nt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ee(-1/0,-1/0,-1/0),new ee(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,o=i.length;r<o;r++){const c=i[r];vi.setFromBufferAttribute(c),this.morphTargetsRelative?(Nn.addVectors(this.boundingBox.min,vi.min),this.boundingBox.expandByPoint(Nn),Nn.addVectors(this.boundingBox.max,vi.max),this.boundingBox.expandByPoint(Nn)):(this.boundingBox.expandByPoint(vi.min),this.boundingBox.expandByPoint(vi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Nt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ap);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Nt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ee,1/0);return}if(e){const r=this.boundingSphere.center;if(vi.setFromBufferAttribute(e),i)for(let c=0,u=i.length;c<u;c++){const h=i[c];ll.setFromBufferAttribute(h),this.morphTargetsRelative?(Nn.addVectors(vi.min,ll.min),vi.expandByPoint(Nn),Nn.addVectors(vi.max,ll.max),vi.expandByPoint(Nn)):(vi.expandByPoint(ll.min),vi.expandByPoint(ll.max))}vi.getCenter(r);let o=0;for(let c=0,u=e.count;c<u;c++)Nn.fromBufferAttribute(e,c),o=Math.max(o,r.distanceToSquared(Nn));if(i)for(let c=0,u=i.length;c<u;c++){const h=i[c],m=this.morphTargetsRelative;for(let d=0,g=h.count;d<g;d++)Nn.fromBufferAttribute(h,d),m&&(Qr.fromBufferAttribute(e,d),Nn.add(Qr)),o=Math.max(o,r.distanceToSquared(Nn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Nt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Nt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,o=i.normal,c=i.uv;let u=this.getAttribute("tangent");(u===void 0||u.count!==r.count)&&(u=new da(new Float32Array(4*r.count),4),this.setAttribute("tangent",u));const h=[],m=[];for(let T=0;T<r.count;T++)h[T]=new ee,m[T]=new ee;const d=new ee,g=new ee,_=new ee,v=new Pt,x=new Pt,E=new Pt,w=new ee,y=new ee;function M(T,N,X){d.fromBufferAttribute(r,T),g.fromBufferAttribute(r,N),_.fromBufferAttribute(r,X),v.fromBufferAttribute(c,T),x.fromBufferAttribute(c,N),E.fromBufferAttribute(c,X),g.sub(d),_.sub(d),x.sub(v),E.sub(v);const V=1/(x.x*E.y-E.x*x.y);isFinite(V)&&(w.copy(g).multiplyScalar(E.y).addScaledVector(_,-x.y).multiplyScalar(V),y.copy(_).multiplyScalar(x.x).addScaledVector(g,-E.x).multiplyScalar(V),h[T].add(w),h[N].add(w),h[X].add(w),m[T].add(y),m[N].add(y),m[X].add(y))}let I=this.groups;I.length===0&&(I=[{start:0,count:e.count}]);for(let T=0,N=I.length;T<N;++T){const X=I[T],V=X.start,Y=X.count;for(let ue=V,fe=V+Y;ue<fe;ue+=3)M(e.getX(ue+0),e.getX(ue+1),e.getX(ue+2))}const z=new ee,R=new ee,O=new ee,L=new ee;function B(T){O.fromBufferAttribute(o,T),L.copy(O);const N=h[T];z.copy(N),z.sub(O.multiplyScalar(O.dot(N))).normalize(),R.crossVectors(L,N);const V=R.dot(m[T])<0?-1:1;u.setXYZW(T,z.x,z.y,z.z,V)}for(let T=0,N=I.length;T<N;++T){const X=I[T],V=X.start,Y=X.count;for(let ue=V,fe=V+Y;ue<fe;ue+=3)B(e.getX(ue+0)),B(e.getX(ue+1)),B(e.getX(ue+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==i.count)r=new da(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let v=0,x=r.count;v<x;v++)r.setXYZ(v,0,0,0);const o=new ee,c=new ee,u=new ee,h=new ee,m=new ee,d=new ee,g=new ee,_=new ee;if(e)for(let v=0,x=e.count;v<x;v+=3){const E=e.getX(v+0),w=e.getX(v+1),y=e.getX(v+2);o.fromBufferAttribute(i,E),c.fromBufferAttribute(i,w),u.fromBufferAttribute(i,y),g.subVectors(u,c),_.subVectors(o,c),g.cross(_),h.fromBufferAttribute(r,E),m.fromBufferAttribute(r,w),d.fromBufferAttribute(r,y),h.add(g),m.add(g),d.add(g),r.setXYZ(E,h.x,h.y,h.z),r.setXYZ(w,m.x,m.y,m.z),r.setXYZ(y,d.x,d.y,d.z)}else for(let v=0,x=i.count;v<x;v+=3)o.fromBufferAttribute(i,v+0),c.fromBufferAttribute(i,v+1),u.fromBufferAttribute(i,v+2),g.subVectors(u,c),_.subVectors(o,c),g.cross(_),r.setXYZ(v+0,g.x,g.y,g.z),r.setXYZ(v+1,g.x,g.y,g.z),r.setXYZ(v+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)Nn.fromBufferAttribute(e,i),Nn.normalize(),e.setXYZ(i,Nn.x,Nn.y,Nn.z)}toNonIndexed(){function e(h,m){const d=h.array,g=h.itemSize,_=h.normalized,v=new d.constructor(m.length*g);let x=0,E=0;for(let w=0,y=m.length;w<y;w++){h.isInterleavedBufferAttribute?x=m[w]*h.data.stride+h.offset:x=m[w]*g;for(let M=0;M<g;M++)v[E++]=d[x++]}return new da(v,g,_)}if(this.index===null)return st("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Ii,r=this.index.array,o=this.attributes;for(const h in o){const m=o[h],d=e(m,r);i.setAttribute(h,d)}const c=this.morphAttributes;for(const h in c){const m=[],d=c[h];for(let g=0,_=d.length;g<_;g++){const v=d[g],x=e(v,r);m.push(x)}i.morphAttributes[h]=m}i.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let h=0,m=u.length;h<m;h++){const d=u[h];i.addGroup(d.start,d.count,d.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const m=this.parameters;for(const d in m)m[d]!==void 0&&(e[d]=m[d]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const d=r[m];e.data.attributes[m]=d.toJSON(e.data)}const o={};let c=!1;for(const m in this.morphAttributes){const d=this.morphAttributes[m],g=[];for(let _=0,v=d.length;_<v;_++){const x=d[_];g.push(x.toJSON(e.data))}g.length>0&&(o[m]=g,c=!0)}c&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const d in o){const g=o[d];this.setAttribute(d,g.clone(i))}const c=e.morphAttributes;for(const d in c){const g=[],_=c[d];for(let v=0,x=_.length;v<x;v++)g.push(_[v].clone(i));this.morphAttributes[d]=g}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let d=0,g=u.length;d<g;d++){const _=u[d];this.addGroup(_.start,_.count,_.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let LE=0;class xu extends or{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:LE++}),this.uuid=ho(),this.name="",this.type="Material",this.blending=io,this.side=Va,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Eh,this.blendDst=bh,this.blendEquation=$s,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new wt(0,0,0),this.blendAlpha=0,this.depthFunc=lo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=U_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Gr,this.stencilZFail=Gr,this.stencilZPass=Gr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){st(`Material: parameter '${i}' has value of undefined.`);continue}const o=this[i];if(o===void 0){st(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector2&&r&&r.isVector2||o&&o.isEuler&&r&&r.isEuler||o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==io&&(r.blending=this.blending),this.side!==Va&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Eh&&(r.blendSrc=this.blendSrc),this.blendDst!==bh&&(r.blendDst=this.blendDst),this.blendEquation!==$s&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==lo&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==U_&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Gr&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Gr&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Gr&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(c){const u=[];for(const h in c){const m=c[h];delete m.metadata,u.push(m)}return u}if(i){const c=o(e.textures),u=o(e.images);c.length>0&&(r.textures=c),u.length>0&&(r.images=u)}return r}fromJSON(e,i){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new wt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=i[e.map]||null),e.matcap!==void 0&&(this.matcap=i[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=i[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=i[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=i[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),this.normalScale=new Pt().fromArray(r)}return e.displacementMap!==void 0&&(this.displacementMap=i[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=i[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=i[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=i[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=i[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=i[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=i[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=i[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=i[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=i[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=i[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=i[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=i[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=i[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Pt().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=i[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=i[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=i[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=i[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=i[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=i[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=i[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const o=i.length;r=new Array(o);for(let c=0;c!==o;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Fa=new ee,ih=new ee,Vc=new ee,Es=new ee,ah=new ee,kc=new ee,sh=new ee;class NE{constructor(e=new ee,i=new ee(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Fa)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=Fa.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(Fa.copy(this.origin).addScaledVector(this.direction,i),Fa.distanceToSquared(e))}distanceSqToSegment(e,i,r,o){ih.copy(e).add(i).multiplyScalar(.5),Vc.copy(i).sub(e).normalize(),Es.copy(this.origin).sub(ih);const c=e.distanceTo(i)*.5,u=-this.direction.dot(Vc),h=Es.dot(this.direction),m=-Es.dot(Vc),d=Es.lengthSq(),g=Math.abs(1-u*u);let _,v,x,E;if(g>0)if(_=u*m-h,v=u*h-m,E=c*g,_>=0)if(v>=-E)if(v<=E){const w=1/g;_*=w,v*=w,x=_*(_+u*v+2*h)+v*(u*_+v+2*m)+d}else v=c,_=Math.max(0,-(u*v+h)),x=-_*_+v*(v+2*m)+d;else v=-c,_=Math.max(0,-(u*v+h)),x=-_*_+v*(v+2*m)+d;else v<=-E?(_=Math.max(0,-(-u*c+h)),v=_>0?-c:Math.min(Math.max(-c,-m),c),x=-_*_+v*(v+2*m)+d):v<=E?(_=0,v=Math.min(Math.max(-c,-m),c),x=v*(v+2*m)+d):(_=Math.max(0,-(u*c+h)),v=_>0?c:Math.min(Math.max(-c,-m),c),x=-_*_+v*(v+2*m)+d);else v=u>0?-c:c,_=Math.max(0,-(u*v+h)),x=-_*_+v*(v+2*m)+d;return r&&r.copy(this.origin).addScaledVector(this.direction,_),o&&o.copy(ih).addScaledVector(Vc,v),x}intersectSphere(e,i){Fa.subVectors(e.center,this.origin);const r=Fa.dot(this.direction),o=Fa.dot(Fa)-r*r,c=e.radius*e.radius;if(o>c)return null;const u=Math.sqrt(c-o),h=r-u,m=r+u;return m<0?null:h<0?this.at(m,i):this.at(h,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,o,c,u,h,m;const d=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,v=this.origin;return d>=0?(r=(e.min.x-v.x)*d,o=(e.max.x-v.x)*d):(r=(e.max.x-v.x)*d,o=(e.min.x-v.x)*d),g>=0?(c=(e.min.y-v.y)*g,u=(e.max.y-v.y)*g):(c=(e.max.y-v.y)*g,u=(e.min.y-v.y)*g),r>u||c>o||((c>r||isNaN(r))&&(r=c),(u<o||isNaN(o))&&(o=u),_>=0?(h=(e.min.z-v.z)*_,m=(e.max.z-v.z)*_):(h=(e.max.z-v.z)*_,m=(e.min.z-v.z)*_),r>m||h>o)||((h>r||r!==r)&&(r=h),(m<o||o!==o)&&(o=m),o<0)?null:this.at(r>=0?r:o,i)}intersectsBox(e){return this.intersectBox(e,Fa)!==null}intersectTriangle(e,i,r,o,c){ah.subVectors(i,e),kc.subVectors(r,e),sh.crossVectors(ah,kc);let u=this.direction.dot(sh),h;if(u>0){if(o)return null;h=1}else if(u<0)h=-1,u=-u;else return null;Es.subVectors(this.origin,e);const m=h*this.direction.dot(kc.crossVectors(Es,kc));if(m<0)return null;const d=h*this.direction.dot(ah.cross(Es));if(d<0||m+d>u)return null;const g=-h*Es.dot(sh);return g<0?null:this.at(g/u,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Rp extends xu{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new rr,this.combine=$v,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const K_=new xn,Zs=new NE,Xc=new Ap,Q_=new ee,Wc=new ee,qc=new ee,Yc=new ee,rh=new ee,jc=new ee,J_=new ee,Zc=new ee;class Pi extends xi{constructor(e=new Ii,i=new Rp){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const o=i[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const h=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(e,i){const r=this.geometry,o=r.attributes.position,c=r.morphAttributes.position,u=r.morphTargetsRelative;i.fromBufferAttribute(o,e);const h=this.morphTargetInfluences;if(c&&h){jc.set(0,0,0);for(let m=0,d=c.length;m<d;m++){const g=h[m],_=c[m];g!==0&&(rh.fromBufferAttribute(_,e),u?jc.addScaledVector(rh,g):jc.addScaledVector(rh.sub(i),g))}i.add(jc)}return i}raycast(e,i){const r=this.geometry,o=this.material,c=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Xc.copy(r.boundingSphere),Xc.applyMatrix4(c),Zs.copy(e.ray).recast(e.near),!(Xc.containsPoint(Zs.origin)===!1&&(Zs.intersectSphere(Xc,Q_)===null||Zs.origin.distanceToSquared(Q_)>(e.far-e.near)**2))&&(K_.copy(c).invert(),Zs.copy(e.ray).applyMatrix4(K_),!(r.boundingBox!==null&&Zs.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,Zs)))}_computeIntersections(e,i,r){let o;const c=this.geometry,u=this.material,h=c.index,m=c.attributes.position,d=c.attributes.uv,g=c.attributes.uv1,_=c.attributes.normal,v=c.groups,x=c.drawRange;if(h!==null)if(Array.isArray(u))for(let E=0,w=v.length;E<w;E++){const y=v[E],M=u[y.materialIndex],I=Math.max(y.start,x.start),z=Math.min(h.count,Math.min(y.start+y.count,x.start+x.count));for(let R=I,O=z;R<O;R+=3){const L=h.getX(R),B=h.getX(R+1),T=h.getX(R+2);o=Kc(this,M,e,r,d,g,_,L,B,T),o&&(o.faceIndex=Math.floor(R/3),o.face.materialIndex=y.materialIndex,i.push(o))}}else{const E=Math.max(0,x.start),w=Math.min(h.count,x.start+x.count);for(let y=E,M=w;y<M;y+=3){const I=h.getX(y),z=h.getX(y+1),R=h.getX(y+2);o=Kc(this,u,e,r,d,g,_,I,z,R),o&&(o.faceIndex=Math.floor(y/3),i.push(o))}}else if(m!==void 0)if(Array.isArray(u))for(let E=0,w=v.length;E<w;E++){const y=v[E],M=u[y.materialIndex],I=Math.max(y.start,x.start),z=Math.min(m.count,Math.min(y.start+y.count,x.start+x.count));for(let R=I,O=z;R<O;R+=3){const L=R,B=R+1,T=R+2;o=Kc(this,M,e,r,d,g,_,L,B,T),o&&(o.faceIndex=Math.floor(R/3),o.face.materialIndex=y.materialIndex,i.push(o))}}else{const E=Math.max(0,x.start),w=Math.min(m.count,x.start+x.count);for(let y=E,M=w;y<M;y+=3){const I=y,z=y+1,R=y+2;o=Kc(this,u,e,r,d,g,_,I,z,R),o&&(o.faceIndex=Math.floor(y/3),i.push(o))}}}}function UE(a,e,i,r,o,c,u,h){let m;if(e.side===oi?m=r.intersectTriangle(u,c,o,!0,h):m=r.intersectTriangle(o,c,u,e.side===Va,h),m===null)return null;Zc.copy(h),Zc.applyMatrix4(a.matrixWorld);const d=i.ray.origin.distanceTo(Zc);return d<i.near||d>i.far?null:{distance:d,point:Zc.clone(),object:a}}function Kc(a,e,i,r,o,c,u,h,m,d){a.getVertexPosition(h,Wc),a.getVertexPosition(m,qc),a.getVertexPosition(d,Yc);const g=UE(a,e,i,r,Wc,qc,Yc,J_);if(g){const _=new ee;Zi.getBarycoord(J_,Wc,qc,Yc,_),o&&(g.uv=Zi.getInterpolatedAttribute(o,h,m,d,_,new Pt)),c&&(g.uv1=Zi.getInterpolatedAttribute(c,h,m,d,_,new Pt)),u&&(g.normal=Zi.getInterpolatedAttribute(u,h,m,d,_,new ee),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const v={a:h,b:m,c:d,normal:new ee,materialIndex:0};Zi.getNormal(Wc,qc,Yc,v.normal),g.face=v,g.barycoord=_}return g}class OE extends Xn{constructor(e=null,i=1,r=1,o,c,u,h,m,d=Bn,g=Bn,_,v){super(null,u,h,m,d,g,o,c,_,v),this.isDataTexture=!0,this.image={data:e,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const oh=new ee,PE=new ee,IE=new ut;class Js{constructor(e=new ee(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,o){return this.normal.set(e,i,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const o=oh.subVectors(r,i).cross(PE.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i,r=!0){const o=e.delta(oh),c=this.normal.dot(o);if(c===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/c;return r===!0&&(u<0||u>1)?null:i.copy(e.start).addScaledVector(o,u)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||IE.getNormalMatrix(e),o=this.coplanarPoint(oh).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ks=new Ap,FE=new Pt(.5,.5),Qc=new ee;class Mx{constructor(e=new Js,i=new Js,r=new Js,o=new Js,c=new Js,u=new Js){this.planes=[e,i,r,o,c,u]}set(e,i,r,o,c,u){const h=this.planes;return h[0].copy(e),h[1].copy(i),h[2].copy(r),h[3].copy(o),h[4].copy(c),h[5].copy(u),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=ca,r=!1){const o=this.planes,c=e.elements,u=c[0],h=c[1],m=c[2],d=c[3],g=c[4],_=c[5],v=c[6],x=c[7],E=c[8],w=c[9],y=c[10],M=c[11],I=c[12],z=c[13],R=c[14],O=c[15];if(o[0].setComponents(d-u,x-g,M-E,O-I).normalize(),o[1].setComponents(d+u,x+g,M+E,O+I).normalize(),o[2].setComponents(d+h,x+_,M+w,O+z).normalize(),o[3].setComponents(d-h,x-_,M-w,O-z).normalize(),r)o[4].setComponents(m,v,y,R).normalize(),o[5].setComponents(d-m,x-v,M-y,O-R).normalize();else if(o[4].setComponents(d-m,x-v,M-y,O-R).normalize(),i===ca)o[5].setComponents(d+m,x+v,M+y,O+R).normalize();else if(i===pu)o[5].setComponents(m,v,y,R).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ks.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Ks.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ks)}intersectsSprite(e){Ks.center.set(0,0,0);const i=FE.distanceTo(e.center);return Ks.radius=.7071067811865476+i,Ks.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ks)}intersectsSphere(e){const i=this.planes,r=e.center,o=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const o=i[r];if(Qc.x=o.normal.x>0?e.max.x:e.min.x,Qc.y=o.normal.y>0?e.max.y:e.min.y,Qc.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Qc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class yx extends Xn{constructor(e=[],i=ar,r,o,c,u,h,m,d,g){super(e,i,r,o,c,u,h,m,d,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ex extends Xn{constructor(e,i,r,o,c,u,h,m,d){super(e,i,r,o,c,u,h,m,d),this.isCanvasTexture=!0,this.needsUpdate=!0}}class uo extends Xn{constructor(e,i,r=ha,o,c,u,h=Bn,m=Bn,d,g=Xa,_=1){if(g!==Xa&&g!==nr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:e,height:i,depth:_};super(v,o,c,u,h,m,g,r,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Tp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class BE extends uo{constructor(e,i=ha,r=ar,o,c,u=Bn,h=Bn,m,d=Xa){const g={width:e,height:e,depth:1},_=[g,g,g,g,g,g];super(e,e,i,r,o,c,u,h,m,d),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class bx extends Xn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class bl extends Ii{constructor(e=1,i=1,r=1,o=1,c=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:o,heightSegments:c,depthSegments:u};const h=this;o=Math.floor(o),c=Math.floor(c),u=Math.floor(u);const m=[],d=[],g=[],_=[];let v=0,x=0;E("z","y","x",-1,-1,r,i,e,u,c,0),E("z","y","x",1,-1,r,i,-e,u,c,1),E("x","z","y",1,1,e,r,i,o,u,2),E("x","z","y",1,-1,e,r,-i,o,u,3),E("x","y","z",1,-1,e,i,r,o,c,4),E("x","y","z",-1,-1,e,i,-r,o,c,5),this.setIndex(m),this.setAttribute("position",new Oi(d,3)),this.setAttribute("normal",new Oi(g,3)),this.setAttribute("uv",new Oi(_,2));function E(w,y,M,I,z,R,O,L,B,T,N){const X=R/B,V=O/T,Y=R/2,ue=O/2,fe=L/2,q=B+1,F=T+1;let H=0,$=0;const _e=new ee;for(let Me=0;Me<F;Me++){const P=Me*V-ue;for(let K=0;K<q;K++){const ye=K*X-Y;_e[w]=ye*I,_e[y]=P*z,_e[M]=fe,d.push(_e.x,_e.y,_e.z),_e[w]=0,_e[y]=0,_e[M]=L>0?1:-1,g.push(_e.x,_e.y,_e.z),_.push(K/B),_.push(1-Me/T),H+=1}}for(let Me=0;Me<T;Me++)for(let P=0;P<B;P++){const K=v+P+q*Me,ye=v+P+q*(Me+1),Ce=v+(P+1)+q*(Me+1),ze=v+(P+1)+q*Me;m.push(K,ye,ze),m.push(ye,Ce,ze),$+=6}h.addGroup(x,$,N),x+=$,v+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class zE{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){st("Curve: .getPoint() not implemented.")}getPointAt(e,i){const r=this.getUtoTmapping(e);return this.getPoint(r,i)}getPoints(e=5){const i=[];for(let r=0;r<=e;r++)i.push(this.getPoint(r/e));return i}getSpacedPoints(e=5){const i=[];for(let r=0;r<=e;r++)i.push(this.getPointAt(r/e));return i}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const i=[];let r,o=this.getPoint(0),c=0;i.push(0);for(let u=1;u<=e;u++)r=this.getPoint(u/e),c+=r.distanceTo(o),i.push(c),o=r;return this.cacheArcLengths=i,i}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,i=null){const r=this.getLengths();let o=0;const c=r.length;let u;i?u=i:u=e*r[c-1];let h=0,m=c-1,d;for(;h<=m;)if(o=Math.floor(h+(m-h)/2),d=r[o]-u,d<0)h=o+1;else if(d>0)m=o-1;else{m=o;break}if(o=m,r[o]===u)return o/(c-1);const g=r[o],v=r[o+1]-g,x=(u-g)/v;return(o+x)/(c-1)}getTangent(e,i){let o=e-1e-4,c=e+1e-4;o<0&&(o=0),c>1&&(c=1);const u=this.getPoint(o),h=this.getPoint(c),m=i||(u.isVector2?new Pt:new ee);return m.copy(h).sub(u).normalize(),m}getTangentAt(e,i){const r=this.getUtoTmapping(e);return this.getTangent(r,i)}computeFrenetFrames(e,i=!1){const r=new ee,o=[],c=[],u=[],h=new ee,m=new xn;for(let x=0;x<=e;x++){const E=x/e;o[x]=this.getTangentAt(E,new ee)}c[0]=new ee,u[0]=new ee;let d=Number.MAX_VALUE;const g=Math.abs(o[0].x),_=Math.abs(o[0].y),v=Math.abs(o[0].z);g<=d&&(d=g,r.set(1,0,0)),_<=d&&(d=_,r.set(0,1,0)),v<=d&&r.set(0,0,1),h.crossVectors(o[0],r).normalize(),c[0].crossVectors(o[0],h),u[0].crossVectors(o[0],c[0]);for(let x=1;x<=e;x++){if(c[x]=c[x-1].clone(),u[x]=u[x-1].clone(),h.crossVectors(o[x-1],o[x]),h.length()>Number.EPSILON){h.normalize();const E=Math.acos(vt(o[x-1].dot(o[x]),-1,1));c[x].applyMatrix4(m.makeRotationAxis(h,E))}u[x].crossVectors(o[x],c[x])}if(i===!0){let x=Math.acos(vt(c[0].dot(c[e]),-1,1));x/=e,o[0].dot(h.crossVectors(c[0],c[e]))>0&&(x=-x);for(let E=1;E<=e;E++)c[E].applyMatrix4(m.makeRotationAxis(o[E],x*E)),u[E].crossVectors(o[E],c[E])}return{tangents:o,normals:c,binormals:u}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}function Cp(){let a=0,e=0,i=0,r=0;function o(c,u,h,m){a=c,e=h,i=-3*c+3*u-2*h-m,r=2*c-2*u+h+m}return{initCatmullRom:function(c,u,h,m,d){o(u,h,d*(h-c),d*(m-u))},initNonuniformCatmullRom:function(c,u,h,m,d,g,_){let v=(u-c)/d-(h-c)/(d+g)+(h-u)/g,x=(h-u)/g-(m-u)/(g+_)+(m-h)/_;v*=g,x*=g,o(u,h,v,x)},calc:function(c){const u=c*c,h=u*c;return a+e*c+i*u+r*h}}}const $_=new ee,ev=new ee,lh=new Cp,ch=new Cp,uh=new Cp;class HE extends zE{constructor(e=[],i=!1,r="centripetal",o=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=i,this.curveType=r,this.tension=o}getPoint(e,i=new ee){const r=i,o=this.points,c=o.length,u=(c-(this.closed?0:1))*e;let h=Math.floor(u),m=u-h;this.closed?h+=h>0?0:(Math.floor(Math.abs(h)/c)+1)*c:m===0&&h===c-1&&(h=c-2,m=1);let d,g;this.closed||h>0?d=o[(h-1)%c]:(ev.subVectors(o[0],o[1]).add(o[0]),d=ev);const _=o[h%c],v=o[(h+1)%c];if(this.closed||h+2<c?g=o[(h+2)%c]:($_.subVectors(o[c-1],o[c-2]).add(o[c-1]),g=$_),this.curveType==="centripetal"||this.curveType==="chordal"){const x=this.curveType==="chordal"?.5:.25;let E=Math.pow(d.distanceToSquared(_),x),w=Math.pow(_.distanceToSquared(v),x),y=Math.pow(v.distanceToSquared(g),x);w<1e-4&&(w=1),E<1e-4&&(E=w),y<1e-4&&(y=w),lh.initNonuniformCatmullRom(d.x,_.x,v.x,g.x,E,w,y),ch.initNonuniformCatmullRom(d.y,_.y,v.y,g.y,E,w,y),uh.initNonuniformCatmullRom(d.z,_.z,v.z,g.z,E,w,y)}else this.curveType==="catmullrom"&&(lh.initCatmullRom(d.x,_.x,v.x,g.x,this.tension),ch.initCatmullRom(d.y,_.y,v.y,g.y,this.tension),uh.initCatmullRom(d.z,_.z,v.z,g.z,this.tension));return r.set(lh.calc(m),ch.calc(m),uh.calc(m)),r}copy(e){super.copy(e),this.points=[];for(let i=0,r=e.points.length;i<r;i++){const o=e.points[i];this.points.push(o.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let i=0,r=this.points.length;i<r;i++){const o=this.points[i];e.points.push(o.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let i=0,r=e.points.length;i<r;i++){const o=e.points[i];this.points.push(new ee().fromArray(o))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}class ir extends Ii{constructor(e=1,i=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:o};const c=e/2,u=i/2,h=Math.floor(r),m=Math.floor(o),d=h+1,g=m+1,_=e/h,v=i/m,x=[],E=[],w=[],y=[];for(let M=0;M<g;M++){const I=M*v-u;for(let z=0;z<d;z++){const R=z*_-c;E.push(R,-I,0),w.push(0,0,1),y.push(z/h),y.push(1-M/m)}}for(let M=0;M<m;M++)for(let I=0;I<h;I++){const z=I+d*M,R=I+d*(M+1),O=I+1+d*(M+1),L=I+1+d*M;x.push(z,R,L),x.push(R,O,L)}this.setIndex(x),this.setAttribute("position",new Oi(E,3)),this.setAttribute("normal",new Oi(w,3)),this.setAttribute("uv",new Oi(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ir(e.width,e.height,e.widthSegments,e.heightSegments)}}function fo(a){const e={};for(const i in a){e[i]={};for(const r in a[i]){const o=a[i][r];if(tv(o))o.isRenderTargetTexture?(st("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=o.clone();else if(Array.isArray(o))if(tv(o[0])){const c=[];for(let u=0,h=o.length;u<h;u++)c[u]=o[u].clone();e[i][r]=c}else e[i][r]=o.slice();else e[i][r]=o}}return e}function Zn(a){const e={};for(let i=0;i<a.length;i++){const r=fo(a[i]);for(const o in r)e[o]=r[o]}return e}function tv(a){return a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)}function GE(a){const e=[];for(let i=0;i<a.length;i++)e.push(a[i].clone());return e}function Tx(a){const e=a.getRenderTarget();return e===null?a.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ct.workingColorSpace}const VE={clone:fo,merge:Zn};var kE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,XE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Fi extends xu{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=kE,this.fragmentShader=XE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=fo(e.uniforms),this.uniformsGroups=GE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?i.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?i.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?i.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?i.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?i.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?i.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?i.uniforms[o]={type:"m4",value:u.toArray()}:i.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}fromJSON(e,i){if(super.fromJSON(e,i),e.uniforms!==void 0)for(const r in e.uniforms){const o=e.uniforms[r];switch(this.uniforms[r]={},o.type){case"t":this.uniforms[r].value=i[o.value]||null;break;case"c":this.uniforms[r].value=new wt().setHex(o.value);break;case"v2":this.uniforms[r].value=new Pt().fromArray(o.value);break;case"v3":this.uniforms[r].value=new ee().fromArray(o.value);break;case"v4":this.uniforms[r].value=new mn().fromArray(o.value);break;case"m3":this.uniforms[r].value=new ut().fromArray(o.value);break;case"m4":this.uniforms[r].value=new xn().fromArray(o.value);break;default:this.uniforms[r].value=o.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)this.extensions[r]=e.extensions[r];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class WE extends Fi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class qE extends xu{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Hy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class YE extends xu{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Jc=new ee,$c=new po,aa=new ee;class Ax extends xi{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xn,this.projectionMatrix=new xn,this.projectionMatrixInverse=new xn,this.coordinateSystem=ca,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Jc,$c,aa),aa.x===1&&aa.y===1&&aa.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Jc,$c,aa.set(1,1,1)).invert()}updateWorldMatrix(e,i,r=!1){super.updateWorldMatrix(e,i,r),this.matrixWorld.decompose(Jc,$c,aa),aa.x===1&&aa.y===1&&aa.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Jc,$c,aa.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const bs=new ee,nv=new Pt,iv=new Pt;class Ni extends Ax{constructor(e=50,i=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Ml*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(gl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ml*2*Math.atan(Math.tan(gl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){bs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(bs.x,bs.y).multiplyScalar(-e/bs.z),bs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(bs.x,bs.y).multiplyScalar(-e/bs.z)}getViewSize(e,i){return this.getViewBounds(e,nv,iv),i.subVectors(iv,nv)}setViewOffset(e,i,r,o,c,u){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(gl*.5*this.fov)/this.zoom,r=2*i,o=this.aspect*r,c=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const m=u.fullWidth,d=u.fullHeight;c+=u.offsetX*o/m,i-=u.offsetY*r/d,o*=u.width/m,r*=u.height/d}const h=this.filmOffset;h!==0&&(c+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+o,i,i-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class Rx extends Ax{constructor(e=-1,i=1,r=1,o=-1,c=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=o,this.near=c,this.far=u,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,o,c,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let c=r-e,u=r+e,h=o+i,m=o-i;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=d*this.view.offsetX,u=c+d*this.view.width,h-=g*this.view.offsetY,m=h-g*this.view.height}this.projectionMatrix.makeOrthographic(c,u,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const Jr=-90,$r=1;class jE extends xi{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Ni(Jr,$r,e,i);o.layers=this.layers,this.add(o);const c=new Ni(Jr,$r,e,i);c.layers=this.layers,this.add(c);const u=new Ni(Jr,$r,e,i);u.layers=this.layers,this.add(u);const h=new Ni(Jr,$r,e,i);h.layers=this.layers,this.add(h);const m=new Ni(Jr,$r,e,i);m.layers=this.layers,this.add(m);const d=new Ni(Jr,$r,e,i);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,o,c,u,h,m]=i;for(const d of i)this.remove(d);if(e===ca)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===pu)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const d of i)this.add(d),d.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,u,h,m,d,g]=this.children,_=e.getRenderTarget(),v=e.getActiveCubeFace(),x=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const w=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let y=!1;e.isWebGLRenderer===!0?y=e.state.buffers.depth.getReversed():y=e.reversedDepthBuffer,e.setRenderTarget(r,0,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,c),e.setRenderTarget(r,1,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,u),e.setRenderTarget(r,2,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,h),e.setRenderTarget(r,3,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,m),e.setRenderTarget(r,4,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,d),r.texture.generateMipmaps=w,e.setRenderTarget(r,5,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,g),e.setRenderTarget(_,v,x),e.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class ZE extends Ni{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Fp=class Fp{constructor(e,i,r,o){this.elements=[1,0,0,1],e!==void 0&&this.set(e,i,r,o)}identity(){return this.set(1,0,0,1),this}fromArray(e,i=0){for(let r=0;r<4;r++)this.elements[r]=e[r+i];return this}set(e,i,r,o){const c=this.elements;return c[0]=e,c[2]=i,c[1]=r,c[3]=o,this}};Fp.prototype.isMatrix2=!0;let av=Fp;function sv(a,e,i,r){const o=KE(r);switch(i){case dx:return a*e;case px:return a*e/o.components*o.byteLength;case xp:return a*e/o.components*o.byteLength;case sr:return a*e*2/o.components*o.byteLength;case Sp:return a*e*2/o.components*o.byteLength;case hx:return a*e*3/o.components*o.byteLength;case Qi:return a*e*4/o.components*o.byteLength;case Mp:return a*e*4/o.components*o.byteLength;case au:case su:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case ru:case ou:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Ph:case Fh:return Math.max(a,16)*Math.max(e,8)/4;case Oh:case Ih:return Math.max(a,8)*Math.max(e,8)/2;case Bh:case zh:case Gh:case Vh:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case Hh:case uu:case kh:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Xh:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Wh:return Math.floor((a+4)/5)*Math.floor((e+3)/4)*16;case qh:return Math.floor((a+4)/5)*Math.floor((e+4)/5)*16;case Yh:return Math.floor((a+5)/6)*Math.floor((e+4)/5)*16;case jh:return Math.floor((a+5)/6)*Math.floor((e+5)/6)*16;case Zh:return Math.floor((a+7)/8)*Math.floor((e+4)/5)*16;case Kh:return Math.floor((a+7)/8)*Math.floor((e+5)/6)*16;case Qh:return Math.floor((a+7)/8)*Math.floor((e+7)/8)*16;case Jh:return Math.floor((a+9)/10)*Math.floor((e+4)/5)*16;case $h:return Math.floor((a+9)/10)*Math.floor((e+5)/6)*16;case ep:return Math.floor((a+9)/10)*Math.floor((e+7)/8)*16;case tp:return Math.floor((a+9)/10)*Math.floor((e+9)/10)*16;case np:return Math.floor((a+11)/12)*Math.floor((e+9)/10)*16;case ip:return Math.floor((a+11)/12)*Math.floor((e+11)/12)*16;case ap:case sp:case rp:return Math.ceil(a/4)*Math.ceil(e/4)*16;case op:case lp:return Math.ceil(a/4)*Math.ceil(e/4)*8;case fu:case cp:return Math.ceil(a/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function KE(a){switch(a){case Ui:case lx:return{byteLength:1,components:1};case xl:case cx:case ka:return{byteLength:2,components:1};case _p:case vp:return{byteLength:2,components:4};case ha:case gp:case la:return{byteLength:4,components:1};case ux:case fx:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${a}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:mp}}));typeof window<"u"&&(window.__THREE__?st("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=mp);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Cx(){let a=null,e=!1,i=null,r=null;function o(c,u){i(c,u),r=a.requestAnimationFrame(o)}return{start:function(){e!==!0&&i!==null&&a!==null&&(r=a.requestAnimationFrame(o),e=!0)},stop:function(){a!==null&&a.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){a=c}}}function QE(a){const e=new WeakMap;function i(h,m){const d=h.array,g=h.usage,_=d.byteLength,v=a.createBuffer();a.bindBuffer(m,v),a.bufferData(m,d,g),h.onUploadCallback();let x;if(d instanceof Float32Array)x=a.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)x=a.HALF_FLOAT;else if(d instanceof Uint16Array)h.isFloat16BufferAttribute?x=a.HALF_FLOAT:x=a.UNSIGNED_SHORT;else if(d instanceof Int16Array)x=a.SHORT;else if(d instanceof Uint32Array)x=a.UNSIGNED_INT;else if(d instanceof Int32Array)x=a.INT;else if(d instanceof Int8Array)x=a.BYTE;else if(d instanceof Uint8Array)x=a.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)x=a.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:v,type:x,bytesPerElement:d.BYTES_PER_ELEMENT,version:h.version,size:_}}function r(h,m,d){const g=m.array,_=m.updateRanges;if(a.bindBuffer(d,h),_.length===0)a.bufferSubData(d,0,g);else{_.sort((x,E)=>x.start-E.start);let v=0;for(let x=1;x<_.length;x++){const E=_[v],w=_[x];w.start<=E.start+E.count+1?E.count=Math.max(E.count,w.start+w.count-E.start):(++v,_[v]=w)}_.length=v+1;for(let x=0,E=_.length;x<E;x++){const w=_[x];a.bufferSubData(d,w.start*g.BYTES_PER_ELEMENT,g,w.start,w.count)}m.clearUpdateRanges()}m.onUploadCallback()}function o(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=e.get(h);m&&(a.deleteBuffer(m.buffer),e.delete(h))}function u(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const g=e.get(h);(!g||g.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const d=e.get(h);if(d===void 0)e.set(h,i(h,m));else if(d.version<h.version){if(d.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(d.buffer,h,m),d.version=h.version}}return{get:o,remove:c,update:u}}var JE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$E=`#ifdef USE_ALPHAHASH
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
#endif`,eb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,tb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,nb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ib=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ab=`#ifdef USE_AOMAP
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
#endif`,sb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,rb=`#ifdef USE_BATCHING
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
#endif`,ob=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,lb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,cb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ub=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,fb=`#ifdef USE_IRIDESCENCE
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
#endif`,db=`#ifdef USE_BUMPMAP
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
#endif`,hb=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,pb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,mb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,gb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_b=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,vb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,xb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Sb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Mb=`#define PI 3.141592653589793
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
} // validated`,yb=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Eb=`vec3 transformedNormal = objectNormal;
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
#endif`,bb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Tb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ab=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Rb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Cb="gl_FragColor = linearToOutputTexel( gl_FragColor );",wb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Db=`#ifdef USE_ENVMAP
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
#endif`,Lb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Nb=`#ifdef USE_ENVMAP
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
#endif`,Ub=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ob=`#ifdef USE_ENVMAP
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
#endif`,Pb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ib=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Fb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Bb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,zb=`#ifdef USE_GRADIENTMAP
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
}`,Hb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Gb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Vb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,kb=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Xb=`#ifdef USE_ENVMAP
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
#endif`,Wb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,qb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Yb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,jb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Zb=`PhysicalMaterial material;
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
#endif`,Kb=`uniform sampler2D dfgLUT;
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
}`,Qb=`
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
#endif`,Jb=`#if defined( RE_IndirectDiffuse )
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
#endif`,$b=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,e1=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,t1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,n1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,i1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,a1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,s1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,r1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,o1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,l1=`#if defined( USE_POINTS_UV )
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
#endif`,c1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,u1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,f1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,d1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,h1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,p1=`#ifdef USE_MORPHTARGETS
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
#endif`,m1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,g1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,_1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,v1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,x1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,S1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,M1=`#ifdef USE_NORMALMAP
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
#endif`,y1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,E1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,b1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,T1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,A1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,R1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,C1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,w1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,D1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,L1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,N1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,U1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,O1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,P1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,I1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,F1=`float getShadowMask() {
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
}`,B1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,z1=`#ifdef USE_SKINNING
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
#endif`,H1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,G1=`#ifdef USE_SKINNING
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
#endif`,V1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,k1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,X1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,W1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,q1=`#ifdef USE_TRANSMISSION
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
#endif`,Y1=`#ifdef USE_TRANSMISSION
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
#endif`,j1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Z1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,K1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Q1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const J1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$1=`uniform sampler2D t2D;
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
}`,eT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tT=`#ifdef ENVMAP_TYPE_CUBE
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
}`,nT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,iT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,aT=`#include <common>
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
}`,sT=`#if DEPTH_PACKING == 3200
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
}`,rT=`#define DISTANCE
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
}`,oT=`#define DISTANCE
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
}`,lT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,cT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uT=`uniform float scale;
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
}`,fT=`uniform vec3 diffuse;
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
}`,dT=`#include <common>
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
}`,hT=`uniform vec3 diffuse;
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
}`,pT=`#define LAMBERT
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
}`,mT=`#define LAMBERT
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
}`,gT=`#define MATCAP
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
}`,_T=`#define MATCAP
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
}`,vT=`#define NORMAL
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
}`,xT=`#define NORMAL
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
}`,ST=`#define PHONG
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
}`,MT=`#define PHONG
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
}`,yT=`#define STANDARD
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
}`,ET=`#define STANDARD
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
}`,bT=`#define TOON
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
}`,TT=`#define TOON
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
}`,AT=`uniform float size;
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
}`,RT=`uniform vec3 diffuse;
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
}`,CT=`#include <common>
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
}`,wT=`uniform vec3 color;
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
}`,DT=`uniform float rotation;
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
}`,LT=`uniform vec3 diffuse;
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
}`,pt={alphahash_fragment:JE,alphahash_pars_fragment:$E,alphamap_fragment:eb,alphamap_pars_fragment:tb,alphatest_fragment:nb,alphatest_pars_fragment:ib,aomap_fragment:ab,aomap_pars_fragment:sb,batching_pars_vertex:rb,batching_vertex:ob,begin_vertex:lb,beginnormal_vertex:cb,bsdfs:ub,iridescence_fragment:fb,bumpmap_pars_fragment:db,clipping_planes_fragment:hb,clipping_planes_pars_fragment:pb,clipping_planes_pars_vertex:mb,clipping_planes_vertex:gb,color_fragment:_b,color_pars_fragment:vb,color_pars_vertex:xb,color_vertex:Sb,common:Mb,cube_uv_reflection_fragment:yb,defaultnormal_vertex:Eb,displacementmap_pars_vertex:bb,displacementmap_vertex:Tb,emissivemap_fragment:Ab,emissivemap_pars_fragment:Rb,colorspace_fragment:Cb,colorspace_pars_fragment:wb,envmap_fragment:Db,envmap_common_pars_fragment:Lb,envmap_pars_fragment:Nb,envmap_pars_vertex:Ub,envmap_physical_pars_fragment:Xb,envmap_vertex:Ob,fog_vertex:Pb,fog_pars_vertex:Ib,fog_fragment:Fb,fog_pars_fragment:Bb,gradientmap_pars_fragment:zb,lightmap_pars_fragment:Hb,lights_lambert_fragment:Gb,lights_lambert_pars_fragment:Vb,lights_pars_begin:kb,lights_toon_fragment:Wb,lights_toon_pars_fragment:qb,lights_phong_fragment:Yb,lights_phong_pars_fragment:jb,lights_physical_fragment:Zb,lights_physical_pars_fragment:Kb,lights_fragment_begin:Qb,lights_fragment_maps:Jb,lights_fragment_end:$b,lightprobes_pars_fragment:e1,logdepthbuf_fragment:t1,logdepthbuf_pars_fragment:n1,logdepthbuf_pars_vertex:i1,logdepthbuf_vertex:a1,map_fragment:s1,map_pars_fragment:r1,map_particle_fragment:o1,map_particle_pars_fragment:l1,metalnessmap_fragment:c1,metalnessmap_pars_fragment:u1,morphinstance_vertex:f1,morphcolor_vertex:d1,morphnormal_vertex:h1,morphtarget_pars_vertex:p1,morphtarget_vertex:m1,normal_fragment_begin:g1,normal_fragment_maps:_1,normal_pars_fragment:v1,normal_pars_vertex:x1,normal_vertex:S1,normalmap_pars_fragment:M1,clearcoat_normal_fragment_begin:y1,clearcoat_normal_fragment_maps:E1,clearcoat_pars_fragment:b1,iridescence_pars_fragment:T1,opaque_fragment:A1,packing:R1,premultiplied_alpha_fragment:C1,project_vertex:w1,dithering_fragment:D1,dithering_pars_fragment:L1,roughnessmap_fragment:N1,roughnessmap_pars_fragment:U1,shadowmap_pars_fragment:O1,shadowmap_pars_vertex:P1,shadowmap_vertex:I1,shadowmask_pars_fragment:F1,skinbase_vertex:B1,skinning_pars_vertex:z1,skinning_vertex:H1,skinnormal_vertex:G1,specularmap_fragment:V1,specularmap_pars_fragment:k1,tonemapping_fragment:X1,tonemapping_pars_fragment:W1,transmission_fragment:q1,transmission_pars_fragment:Y1,uv_pars_fragment:j1,uv_pars_vertex:Z1,uv_vertex:K1,worldpos_vertex:Q1,background_vert:J1,background_frag:$1,backgroundCube_vert:eT,backgroundCube_frag:tT,cube_vert:nT,cube_frag:iT,depth_vert:aT,depth_frag:sT,distance_vert:rT,distance_frag:oT,equirect_vert:lT,equirect_frag:cT,linedashed_vert:uT,linedashed_frag:fT,meshbasic_vert:dT,meshbasic_frag:hT,meshlambert_vert:pT,meshlambert_frag:mT,meshmatcap_vert:gT,meshmatcap_frag:_T,meshnormal_vert:vT,meshnormal_frag:xT,meshphong_vert:ST,meshphong_frag:MT,meshphysical_vert:yT,meshphysical_frag:ET,meshtoon_vert:bT,meshtoon_frag:TT,points_vert:AT,points_frag:RT,shadow_vert:CT,shadow_frag:wT,sprite_vert:DT,sprite_frag:LT},ke={common:{diffuse:{value:new wt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ut}},envmap:{envMap:{value:null},envMapRotation:{value:new ut},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ut},normalScale:{value:new Pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new wt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new ee},probesMax:{value:new ee},probesResolution:{value:new ee}},points:{diffuse:{value:new wt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0},uvTransform:{value:new ut}},sprite:{diffuse:{value:new wt(16777215)},opacity:{value:1},center:{value:new Pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}}},ra={basic:{uniforms:Zn([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.fog]),vertexShader:pt.meshbasic_vert,fragmentShader:pt.meshbasic_frag},lambert:{uniforms:Zn([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,ke.lights,{emissive:{value:new wt(0)},envMapIntensity:{value:1}}]),vertexShader:pt.meshlambert_vert,fragmentShader:pt.meshlambert_frag},phong:{uniforms:Zn([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,ke.lights,{emissive:{value:new wt(0)},specular:{value:new wt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:pt.meshphong_vert,fragmentShader:pt.meshphong_frag},standard:{uniforms:Zn([ke.common,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.roughnessmap,ke.metalnessmap,ke.fog,ke.lights,{emissive:{value:new wt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag},toon:{uniforms:Zn([ke.common,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.gradientmap,ke.fog,ke.lights,{emissive:{value:new wt(0)}}]),vertexShader:pt.meshtoon_vert,fragmentShader:pt.meshtoon_frag},matcap:{uniforms:Zn([ke.common,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,{matcap:{value:null}}]),vertexShader:pt.meshmatcap_vert,fragmentShader:pt.meshmatcap_frag},points:{uniforms:Zn([ke.points,ke.fog]),vertexShader:pt.points_vert,fragmentShader:pt.points_frag},dashed:{uniforms:Zn([ke.common,ke.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pt.linedashed_vert,fragmentShader:pt.linedashed_frag},depth:{uniforms:Zn([ke.common,ke.displacementmap]),vertexShader:pt.depth_vert,fragmentShader:pt.depth_frag},normal:{uniforms:Zn([ke.common,ke.bumpmap,ke.normalmap,ke.displacementmap,{opacity:{value:1}}]),vertexShader:pt.meshnormal_vert,fragmentShader:pt.meshnormal_frag},sprite:{uniforms:Zn([ke.sprite,ke.fog]),vertexShader:pt.sprite_vert,fragmentShader:pt.sprite_frag},background:{uniforms:{uvTransform:{value:new ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pt.background_vert,fragmentShader:pt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ut}},vertexShader:pt.backgroundCube_vert,fragmentShader:pt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pt.cube_vert,fragmentShader:pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pt.equirect_vert,fragmentShader:pt.equirect_frag},distance:{uniforms:Zn([ke.common,ke.displacementmap,{referencePosition:{value:new ee},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pt.distance_vert,fragmentShader:pt.distance_frag},shadow:{uniforms:Zn([ke.lights,ke.fog,{color:{value:new wt(0)},opacity:{value:1}}]),vertexShader:pt.shadow_vert,fragmentShader:pt.shadow_frag}};ra.physical={uniforms:Zn([ra.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ut},clearcoatNormalScale:{value:new Pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ut},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ut},sheen:{value:0},sheenColor:{value:new wt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ut},transmissionSamplerSize:{value:new Pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ut},attenuationDistance:{value:0},attenuationColor:{value:new wt(0)},specularColor:{value:new wt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ut},anisotropyVector:{value:new Pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ut}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag};const eu={r:0,b:0,g:0},NT=new xn,wx=new ut;wx.set(-1,0,0,0,1,0,0,0,1);function UT(a,e,i,r,o,c){const u=new wt(0);let h=o===!0?0:1,m,d,g=null,_=0,v=null;function x(I){let z=I.isScene===!0?I.background:null;if(z&&z.isTexture){const R=I.backgroundBlurriness>0;z=e.get(z,R)}return z}function E(I){let z=!1;const R=x(I);R===null?y(u,h):R&&R.isColor&&(y(R,1),z=!0);const O=a.xr.getEnvironmentBlendMode();O==="additive"?i.buffers.color.setClear(0,0,0,1,c):O==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(a.autoClear||z)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil))}function w(I,z){const R=x(z);R&&(R.isCubeTexture||R.mapping===vu)?(d===void 0&&(d=new Pi(new bl(1,1,1),new Fi({name:"BackgroundCubeMaterial",uniforms:fo(ra.backgroundCube.uniforms),vertexShader:ra.backgroundCube.vertexShader,fragmentShader:ra.backgroundCube.fragmentShader,side:oi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(O,L,B){this.matrixWorld.copyPosition(B.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),d.material.uniforms.envMap.value=R,d.material.uniforms.backgroundBlurriness.value=z.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=z.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(NT.makeRotationFromEuler(z.backgroundRotation)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&d.material.uniforms.backgroundRotation.value.premultiply(wx),d.material.toneMapped=Ct.getTransfer(R.colorSpace)!==Wt,(g!==R||_!==R.version||v!==a.toneMapping)&&(d.material.needsUpdate=!0,g=R,_=R.version,v=a.toneMapping),d.layers.enableAll(),I.unshift(d,d.geometry,d.material,0,0,null)):R&&R.isTexture&&(m===void 0&&(m=new Pi(new ir(2,2),new Fi({name:"BackgroundMaterial",uniforms:fo(ra.background.uniforms),vertexShader:ra.background.vertexShader,fragmentShader:ra.background.fragmentShader,side:Va,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(m)),m.material.uniforms.t2D.value=R,m.material.uniforms.backgroundIntensity.value=z.backgroundIntensity,m.material.toneMapped=Ct.getTransfer(R.colorSpace)!==Wt,R.matrixAutoUpdate===!0&&R.updateMatrix(),m.material.uniforms.uvTransform.value.copy(R.matrix),(g!==R||_!==R.version||v!==a.toneMapping)&&(m.material.needsUpdate=!0,g=R,_=R.version,v=a.toneMapping),m.layers.enableAll(),I.unshift(m,m.geometry,m.material,0,0,null))}function y(I,z){I.getRGB(eu,Tx(a)),i.buffers.color.setClear(eu.r,eu.g,eu.b,z,c)}function M(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return u},setClearColor:function(I,z=1){u.set(I),h=z,y(u,h)},getClearAlpha:function(){return h},setClearAlpha:function(I){h=I,y(u,h)},render:E,addToRenderList:w,dispose:M}}function OT(a,e){const i=a.getParameter(a.MAX_VERTEX_ATTRIBS),r={},o=v(null);let c=o,u=!1;function h(V,Y,ue,fe,q){let F=!1;const H=_(V,fe,ue,Y);c!==H&&(c=H,d(c.object)),F=x(V,fe,ue,q),F&&E(V,fe,ue,q),q!==null&&e.update(q,a.ELEMENT_ARRAY_BUFFER),(F||u)&&(u=!1,R(V,Y,ue,fe),q!==null&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function m(){return a.createVertexArray()}function d(V){return a.bindVertexArray(V)}function g(V){return a.deleteVertexArray(V)}function _(V,Y,ue,fe){const q=fe.wireframe===!0;let F=r[Y.id];F===void 0&&(F={},r[Y.id]=F);const H=V.isInstancedMesh===!0?V.id:0;let $=F[H];$===void 0&&($={},F[H]=$);let _e=$[ue.id];_e===void 0&&(_e={},$[ue.id]=_e);let Me=_e[q];return Me===void 0&&(Me=v(m()),_e[q]=Me),Me}function v(V){const Y=[],ue=[],fe=[];for(let q=0;q<i;q++)Y[q]=0,ue[q]=0,fe[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Y,enabledAttributes:ue,attributeDivisors:fe,object:V,attributes:{},index:null}}function x(V,Y,ue,fe){const q=c.attributes,F=Y.attributes;let H=0;const $=ue.getAttributes();for(const _e in $)if($[_e].location>=0){const P=q[_e];let K=F[_e];if(K===void 0&&(_e==="instanceMatrix"&&V.instanceMatrix&&(K=V.instanceMatrix),_e==="instanceColor"&&V.instanceColor&&(K=V.instanceColor)),P===void 0||P.attribute!==K||K&&P.data!==K.data)return!0;H++}return c.attributesNum!==H||c.index!==fe}function E(V,Y,ue,fe){const q={},F=Y.attributes;let H=0;const $=ue.getAttributes();for(const _e in $)if($[_e].location>=0){let P=F[_e];P===void 0&&(_e==="instanceMatrix"&&V.instanceMatrix&&(P=V.instanceMatrix),_e==="instanceColor"&&V.instanceColor&&(P=V.instanceColor));const K={};K.attribute=P,P&&P.data&&(K.data=P.data),q[_e]=K,H++}c.attributes=q,c.attributesNum=H,c.index=fe}function w(){const V=c.newAttributes;for(let Y=0,ue=V.length;Y<ue;Y++)V[Y]=0}function y(V){M(V,0)}function M(V,Y){const ue=c.newAttributes,fe=c.enabledAttributes,q=c.attributeDivisors;ue[V]=1,fe[V]===0&&(a.enableVertexAttribArray(V),fe[V]=1),q[V]!==Y&&(a.vertexAttribDivisor(V,Y),q[V]=Y)}function I(){const V=c.newAttributes,Y=c.enabledAttributes;for(let ue=0,fe=Y.length;ue<fe;ue++)Y[ue]!==V[ue]&&(a.disableVertexAttribArray(ue),Y[ue]=0)}function z(V,Y,ue,fe,q,F,H){H===!0?a.vertexAttribIPointer(V,Y,ue,q,F):a.vertexAttribPointer(V,Y,ue,fe,q,F)}function R(V,Y,ue,fe){w();const q=fe.attributes,F=ue.getAttributes(),H=Y.defaultAttributeValues;for(const $ in F){const _e=F[$];if(_e.location>=0){let Me=q[$];if(Me===void 0&&($==="instanceMatrix"&&V.instanceMatrix&&(Me=V.instanceMatrix),$==="instanceColor"&&V.instanceColor&&(Me=V.instanceColor)),Me!==void 0){const P=Me.normalized,K=Me.itemSize,ye=e.get(Me);if(ye===void 0)continue;const Ce=ye.buffer,ze=ye.type,se=ye.bytesPerElement,be=ze===a.INT||ze===a.UNSIGNED_INT||Me.gpuType===gp;if(Me.isInterleavedBufferAttribute){const Te=Me.data,qe=Te.stride,it=Me.offset;if(Te.isInstancedInterleavedBuffer){for(let et=0;et<_e.locationSize;et++)M(_e.location+et,Te.meshPerAttribute);V.isInstancedMesh!==!0&&fe._maxInstanceCount===void 0&&(fe._maxInstanceCount=Te.meshPerAttribute*Te.count)}else for(let et=0;et<_e.locationSize;et++)y(_e.location+et);a.bindBuffer(a.ARRAY_BUFFER,Ce);for(let et=0;et<_e.locationSize;et++)z(_e.location+et,K/_e.locationSize,ze,P,qe*se,(it+K/_e.locationSize*et)*se,be)}else{if(Me.isInstancedBufferAttribute){for(let Te=0;Te<_e.locationSize;Te++)M(_e.location+Te,Me.meshPerAttribute);V.isInstancedMesh!==!0&&fe._maxInstanceCount===void 0&&(fe._maxInstanceCount=Me.meshPerAttribute*Me.count)}else for(let Te=0;Te<_e.locationSize;Te++)y(_e.location+Te);a.bindBuffer(a.ARRAY_BUFFER,Ce);for(let Te=0;Te<_e.locationSize;Te++)z(_e.location+Te,K/_e.locationSize,ze,P,K*se,K/_e.locationSize*Te*se,be)}}else if(H!==void 0){const P=H[$];if(P!==void 0)switch(P.length){case 2:a.vertexAttrib2fv(_e.location,P);break;case 3:a.vertexAttrib3fv(_e.location,P);break;case 4:a.vertexAttrib4fv(_e.location,P);break;default:a.vertexAttrib1fv(_e.location,P)}}}}I()}function O(){N();for(const V in r){const Y=r[V];for(const ue in Y){const fe=Y[ue];for(const q in fe){const F=fe[q];for(const H in F)g(F[H].object),delete F[H];delete fe[q]}}delete r[V]}}function L(V){if(r[V.id]===void 0)return;const Y=r[V.id];for(const ue in Y){const fe=Y[ue];for(const q in fe){const F=fe[q];for(const H in F)g(F[H].object),delete F[H];delete fe[q]}}delete r[V.id]}function B(V){for(const Y in r){const ue=r[Y];for(const fe in ue){const q=ue[fe];if(q[V.id]===void 0)continue;const F=q[V.id];for(const H in F)g(F[H].object),delete F[H];delete q[V.id]}}}function T(V){for(const Y in r){const ue=r[Y],fe=V.isInstancedMesh===!0?V.id:0,q=ue[fe];if(q!==void 0){for(const F in q){const H=q[F];for(const $ in H)g(H[$].object),delete H[$];delete q[F]}delete ue[fe],Object.keys(ue).length===0&&delete r[Y]}}}function N(){X(),u=!0,c!==o&&(c=o,d(c.object))}function X(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:h,reset:N,resetDefaultState:X,dispose:O,releaseStatesOfGeometry:L,releaseStatesOfObject:T,releaseStatesOfProgram:B,initAttributes:w,enableAttribute:y,disableUnusedAttributes:I}}function PT(a,e,i){let r;function o(m){r=m}function c(m,d){a.drawArrays(r,m,d),i.update(d,r,1)}function u(m,d,g){g!==0&&(a.drawArraysInstanced(r,m,d,g),i.update(d,r,g))}function h(m,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,d,0,g);let v=0;for(let x=0;x<g;x++)v+=d[x];i.update(v,r,1)}this.setMode=o,this.render=c,this.renderInstances=u,this.renderMultiDraw=h}function IT(a,e,i,r){let o;function c(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const B=e.get("EXT_texture_filter_anisotropic");o=a.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(B){return!(B!==Qi&&r.convert(B)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(B){const T=B===ka&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(B!==Ui&&r.convert(B)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_TYPE)&&B!==la&&!T)}function m(B){if(B==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=i.precision!==void 0?i.precision:"highp";const g=m(d);g!==d&&(st("WebGLRenderer:",d,"not supported, using",g,"instead."),d=g);const _=i.logarithmicDepthBuffer===!0,v=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control");i.reversedDepthBuffer===!0&&v===!1&&st("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const x=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),E=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=a.getParameter(a.MAX_TEXTURE_SIZE),y=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),M=a.getParameter(a.MAX_VERTEX_ATTRIBS),I=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),z=a.getParameter(a.MAX_VARYING_VECTORS),R=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),O=a.getParameter(a.MAX_SAMPLES),L=a.getParameter(a.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:u,textureTypeReadable:h,precision:d,logarithmicDepthBuffer:_,reversedDepthBuffer:v,maxTextures:x,maxVertexTextures:E,maxTextureSize:w,maxCubemapSize:y,maxAttributes:M,maxVertexUniforms:I,maxVaryings:z,maxFragmentUniforms:R,maxSamples:O,samples:L}}function FT(a){const e=this;let i=null,r=0,o=!1,c=!1;const u=new Js,h=new ut,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(_,v){const x=_.length!==0||v||r!==0||o;return o=v,r=_.length,x},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,v){i=g(_,v,0)},this.setState=function(_,v,x){const E=_.clippingPlanes,w=_.clipIntersection,y=_.clipShadows,M=a.get(_);if(!o||E===null||E.length===0||c&&!y)c?g(null):d();else{const I=c?0:r,z=I*4;let R=M.clippingState||null;m.value=R,R=g(E,v,z,x);for(let O=0;O!==z;++O)R[O]=i[O];M.clippingState=R,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=I}};function d(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function g(_,v,x,E){const w=_!==null?_.length:0;let y=null;if(w!==0){if(y=m.value,E!==!0||y===null){const M=x+w*4,I=v.matrixWorldInverse;h.getNormalMatrix(I),(y===null||y.length<M)&&(y=new Float32Array(M));for(let z=0,R=x;z!==w;++z,R+=4)u.copy(_[z]).applyMatrix4(I,h),u.normal.toArray(y,R),y[R+3]=u.constant}m.value=y,m.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,y}}const Rs=4,rv=[.125,.215,.35,.446,.526,.582],er=20,BT=256,cl=new Rx,ov=new wt;let fh=null,dh=0,hh=0,ph=!1;const zT=new ee;class lv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,r=.1,o=100,c={}){const{size:u=256,position:h=zT}=c;fh=this._renderer.getRenderTarget(),dh=this._renderer.getActiveCubeFace(),hh=this._renderer.getActiveMipmapLevel(),ph=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,r,o,m,h),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=fv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=uv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(fh,dh,hh),this._renderer.xr.enabled=ph,e.scissorTest=!1,eo(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===ar||e.mapping===co?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),fh=this._renderer.getRenderTarget(),dh=this._renderer.getActiveCubeFace(),hh=this._renderer.getActiveMipmapLevel(),ph=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:An,minFilter:An,generateMipmaps:!1,type:ka,format:Qi,colorSpace:du,depthBuffer:!1},o=cv(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=cv(e,i,r);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=HT(c)),this._blurMaterial=VT(c,e,i),this._ggxMaterial=GT(c,e,i)}return o}_compileMaterial(e){const i=new Pi(new Ii,e);this._renderer.compile(i,cl)}_sceneToCubeUV(e,i,r,o,c){const m=new Ni(90,1,i,r),d=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],_=this._renderer,v=_.autoClear,x=_.toneMapping;_.getClearColor(ov),_.toneMapping=ua,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(o),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Pi(new bl,new Rp({name:"PMREM.Background",side:oi,depthWrite:!1,depthTest:!1})));const w=this._backgroundBox,y=w.material;let M=!1;const I=e.background;I?I.isColor&&(y.color.copy(I),e.background=null,M=!0):(y.color.copy(ov),M=!0);for(let z=0;z<6;z++){const R=z%3;R===0?(m.up.set(0,d[z],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+g[z],c.y,c.z)):R===1?(m.up.set(0,0,d[z]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+g[z],c.z)):(m.up.set(0,d[z],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+g[z]));const O=this._cubeSize;eo(o,R*O,z>2?O:0,O,O),_.setRenderTarget(o),M&&_.render(w,m),_.render(e,m)}_.toneMapping=x,_.autoClear=v,e.background=I}_textureToCubeUV(e,i){const r=this._renderer,o=e.mapping===ar||e.mapping===co;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=fv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=uv());const c=o?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=c;const h=c.uniforms;h.envMap.value=e;const m=this._cubeSize;eo(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(u,cl)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const o=this._lodMeshes.length;for(let c=1;c<o;c++)this._applyGGXFilter(e,c-1,c);i.autoClear=r}_applyGGXFilter(e,i,r){const o=this._renderer,c=this._pingPongRenderTarget,u=this._ggxMaterial,h=this._lodMeshes[r];h.material=u;const m=u.uniforms,d=r/(this._lodMeshes.length-1),g=i/(this._lodMeshes.length-1),_=Math.sqrt(d*d-g*g),v=0+d*1.25,x=_*v,{_lodMax:E}=this,w=this._sizeLods[r],y=3*w*(r>E-Rs?r-E+Rs:0),M=4*(this._cubeSize-w);m.envMap.value=e.texture,m.roughness.value=x,m.mipInt.value=E-i,eo(c,y,M,3*w,2*w),o.setRenderTarget(c),o.render(h,cl),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=E-r,eo(e,y,M,3*w,2*w),o.setRenderTarget(e),o.render(h,cl)}_blur(e,i,r,o,c){const u=this._pingPongRenderTarget;this._halfBlur(e,u,i,r,o,"latitudinal",c),this._halfBlur(u,e,r,r,o,"longitudinal",c)}_halfBlur(e,i,r,o,c,u,h){const m=this._renderer,d=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&Nt("blur direction must be either latitudinal or longitudinal!");const g=3,_=this._lodMeshes[o];_.material=d;const v=d.uniforms,x=this._sizeLods[r]-1,E=isFinite(c)?Math.PI/(2*x):2*Math.PI/(2*er-1),w=c/E,y=isFinite(c)?1+Math.floor(g*w):er;y>er&&st(`sigmaRadians, ${c}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${er}`);const M=[];let I=0;for(let B=0;B<er;++B){const T=B/w,N=Math.exp(-T*T/2);M.push(N),B===0?I+=N:B<y&&(I+=2*N)}for(let B=0;B<M.length;B++)M[B]=M[B]/I;v.envMap.value=e.texture,v.samples.value=y,v.weights.value=M,v.latitudinal.value=u==="latitudinal",h&&(v.poleAxis.value=h);const{_lodMax:z}=this;v.dTheta.value=E,v.mipInt.value=z-r;const R=this._sizeLods[o],O=3*R*(o>z-Rs?o-z+Rs:0),L=4*(this._cubeSize-R);eo(i,O,L,3*R,2*R),m.setRenderTarget(i),m.render(_,cl)}}function HT(a){const e=[],i=[],r=[];let o=a;const c=a-Rs+1+rv.length;for(let u=0;u<c;u++){const h=Math.pow(2,o);e.push(h);let m=1/h;u>a-Rs?m=rv[u-a+Rs-1]:u===0&&(m=0),i.push(m);const d=1/(h-2),g=-d,_=1+d,v=[g,g,_,g,_,_,g,g,_,_,g,_],x=6,E=6,w=3,y=2,M=1,I=new Float32Array(w*E*x),z=new Float32Array(y*E*x),R=new Float32Array(M*E*x);for(let L=0;L<x;L++){const B=L%3*2/3-1,T=L>2?0:-1,N=[B,T,0,B+2/3,T,0,B+2/3,T+1,0,B,T,0,B+2/3,T+1,0,B,T+1,0];I.set(N,w*E*L),z.set(v,y*E*L);const X=[L,L,L,L,L,L];R.set(X,M*E*L)}const O=new Ii;O.setAttribute("position",new da(I,w)),O.setAttribute("uv",new da(z,y)),O.setAttribute("faceIndex",new da(R,M)),r.push(new Pi(O,null)),o>Rs&&o--}return{lodMeshes:r,sizeLods:e,sigmas:i}}function cv(a,e,i){const r=new fa(a,e,i);return r.texture.mapping=vu,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function eo(a,e,i,r,o){a.viewport.set(e,i,r,o),a.scissor.set(e,i,r,o)}function GT(a,e,i){return new Fi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:BT,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Su(),fragmentShader:`

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
		`,blending:Ha,depthTest:!1,depthWrite:!1})}function VT(a,e,i){const r=new Float32Array(er),o=new ee(0,1,0);return new Fi({name:"SphericalGaussianBlur",defines:{n:er,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Su(),fragmentShader:`

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
		`,blending:Ha,depthTest:!1,depthWrite:!1})}function uv(){return new Fi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Su(),fragmentShader:`

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
		`,blending:Ha,depthTest:!1,depthWrite:!1})}function fv(){return new Fi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Su(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ha,depthTest:!1,depthWrite:!1})}function Su(){return`

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
	`}class Dx extends fa{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new yx(o),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new bl(5,5,5),c=new Fi({name:"CubemapFromEquirect",uniforms:fo(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:oi,blending:Ha});c.uniforms.tEquirect.value=i;const u=new Pi(o,c),h=i.minFilter;return i.minFilter===As&&(i.minFilter=An),new jE(1,10,this).update(e,u),i.minFilter=h,u.geometry.dispose(),u.material.dispose(),this}clear(e,i=!0,r=!0,o=!0){const c=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(i,r,o);e.setRenderTarget(c)}}function kT(a){let e=new WeakMap,i=new WeakMap,r=null;function o(v,x=!1){return v==null?null:x?u(v):c(v)}function c(v){if(v&&v.isTexture){const x=v.mapping;if(x===Fd||x===Bd)if(e.has(v)){const E=e.get(v).texture;return h(E,v.mapping)}else{const E=v.image;if(E&&E.height>0){const w=new Dx(E.height);return w.fromEquirectangularTexture(a,v),e.set(v,w),v.addEventListener("dispose",d),h(w.texture,v.mapping)}else return null}}return v}function u(v){if(v&&v.isTexture){const x=v.mapping,E=x===Fd||x===Bd,w=x===ar||x===co;if(E||w){let y=i.get(v);const M=y!==void 0?y.texture.pmremVersion:0;if(v.isRenderTargetTexture&&v.pmremVersion!==M)return r===null&&(r=new lv(a)),y=E?r.fromEquirectangular(v,y):r.fromCubemap(v,y),y.texture.pmremVersion=v.pmremVersion,i.set(v,y),y.texture;if(y!==void 0)return y.texture;{const I=v.image;return E&&I&&I.height>0||w&&I&&m(I)?(r===null&&(r=new lv(a)),y=E?r.fromEquirectangular(v):r.fromCubemap(v),y.texture.pmremVersion=v.pmremVersion,i.set(v,y),v.addEventListener("dispose",g),y.texture):null}}}return v}function h(v,x){return x===Fd?v.mapping=ar:x===Bd&&(v.mapping=co),v}function m(v){let x=0;const E=6;for(let w=0;w<E;w++)v[w]!==void 0&&x++;return x===E}function d(v){const x=v.target;x.removeEventListener("dispose",d);const E=e.get(x);E!==void 0&&(e.delete(x),E.dispose())}function g(v){const x=v.target;x.removeEventListener("dispose",g);const E=i.get(x);E!==void 0&&(i.delete(x),E.dispose())}function _(){e=new WeakMap,i=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:o,dispose:_}}function XT(a){const e={};function i(r){if(e[r]!==void 0)return e[r];const o=a.getExtension(r);return e[r]=o,o}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const o=i(r);return o===null&&ao("WebGLRenderer: "+r+" extension not supported."),o}}}function WT(a,e,i,r){const o={},c=new WeakMap;function u(_){const v=_.target;v.index!==null&&e.remove(v.index);for(const E in v.attributes)e.remove(v.attributes[E]);v.removeEventListener("dispose",u),delete o[v.id];const x=c.get(v);x&&(e.remove(x),c.delete(v)),r.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,i.memory.geometries--}function h(_,v){return o[v.id]===!0||(v.addEventListener("dispose",u),o[v.id]=!0,i.memory.geometries++),v}function m(_){const v=_.attributes;for(const x in v)e.update(v[x],a.ARRAY_BUFFER)}function d(_){const v=[],x=_.index,E=_.attributes.position;let w=0;if(E===void 0)return;if(x!==null){const I=x.array;w=x.version;for(let z=0,R=I.length;z<R;z+=3){const O=I[z+0],L=I[z+1],B=I[z+2];v.push(O,L,L,B,B,O)}}else{const I=E.array;w=E.version;for(let z=0,R=I.length/3-1;z<R;z+=3){const O=z+0,L=z+1,B=z+2;v.push(O,L,L,B,B,O)}}const y=new(E.count>=65535?Sx:xx)(v,1);y.version=w;const M=c.get(_);M&&e.remove(M),c.set(_,y)}function g(_){const v=c.get(_);if(v){const x=_.index;x!==null&&v.version<x.version&&d(_)}else d(_);return c.get(_)}return{get:h,update:m,getWireframeAttribute:g}}function qT(a,e,i){let r;function o(_){r=_}let c,u;function h(_){c=_.type,u=_.bytesPerElement}function m(_,v){a.drawElements(r,v,c,_*u),i.update(v,r,1)}function d(_,v,x){x!==0&&(a.drawElementsInstanced(r,v,c,_*u,x),i.update(v,r,x))}function g(_,v,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,v,0,c,_,0,x);let w=0;for(let y=0;y<x;y++)w+=v[y];i.update(w,r,1)}this.setMode=o,this.setIndex=h,this.render=m,this.renderInstances=d,this.renderMultiDraw=g}function YT(a){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,u,h){switch(i.calls++,u){case a.TRIANGLES:i.triangles+=h*(c/3);break;case a.LINES:i.lines+=h*(c/2);break;case a.LINE_STRIP:i.lines+=h*(c-1);break;case a.LINE_LOOP:i.lines+=h*c;break;case a.POINTS:i.points+=h*c;break;default:Nt("WebGLInfo: Unknown draw mode:",u);break}}function o(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:o,update:r}}function jT(a,e,i){const r=new WeakMap,o=new mn;function c(u,h,m){const d=u.morphTargetInfluences,g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=g!==void 0?g.length:0;let v=r.get(h);if(v===void 0||v.count!==_){let X=function(){T.dispose(),r.delete(h),h.removeEventListener("dispose",X)};var x=X;v!==void 0&&v.texture.dispose();const E=h.morphAttributes.position!==void 0,w=h.morphAttributes.normal!==void 0,y=h.morphAttributes.color!==void 0,M=h.morphAttributes.position||[],I=h.morphAttributes.normal||[],z=h.morphAttributes.color||[];let R=0;E===!0&&(R=1),w===!0&&(R=2),y===!0&&(R=3);let O=h.attributes.position.count*R,L=1;O>e.maxTextureSize&&(L=Math.ceil(O/e.maxTextureSize),O=e.maxTextureSize);const B=new Float32Array(O*L*4*_),T=new gx(B,O,L,_);T.type=la,T.needsUpdate=!0;const N=R*4;for(let V=0;V<_;V++){const Y=M[V],ue=I[V],fe=z[V],q=O*L*4*V;for(let F=0;F<Y.count;F++){const H=F*N;E===!0&&(o.fromBufferAttribute(Y,F),B[q+H+0]=o.x,B[q+H+1]=o.y,B[q+H+2]=o.z,B[q+H+3]=0),w===!0&&(o.fromBufferAttribute(ue,F),B[q+H+4]=o.x,B[q+H+5]=o.y,B[q+H+6]=o.z,B[q+H+7]=0),y===!0&&(o.fromBufferAttribute(fe,F),B[q+H+8]=o.x,B[q+H+9]=o.y,B[q+H+10]=o.z,B[q+H+11]=fe.itemSize===4?o.w:1)}}v={count:_,texture:T,size:new Pt(O,L)},r.set(h,v),h.addEventListener("dispose",X)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)m.getUniforms().setValue(a,"morphTexture",u.morphTexture,i);else{let E=0;for(let y=0;y<d.length;y++)E+=d[y];const w=h.morphTargetsRelative?1:1-E;m.getUniforms().setValue(a,"morphTargetBaseInfluence",w),m.getUniforms().setValue(a,"morphTargetInfluences",d)}m.getUniforms().setValue(a,"morphTargetsTexture",v.texture,i),m.getUniforms().setValue(a,"morphTargetsTextureSize",v.size)}return{update:c}}function ZT(a,e,i,r,o){let c=new WeakMap;function u(d){const g=o.render.frame,_=d.geometry,v=e.get(d,_);if(c.get(v)!==g&&(e.update(v),c.set(v,g)),d.isInstancedMesh&&(d.hasEventListener("dispose",m)===!1&&d.addEventListener("dispose",m),c.get(d)!==g&&(i.update(d.instanceMatrix,a.ARRAY_BUFFER),d.instanceColor!==null&&i.update(d.instanceColor,a.ARRAY_BUFFER),c.set(d,g))),d.isSkinnedMesh){const x=d.skeleton;c.get(x)!==g&&(x.update(),c.set(x,g))}return v}function h(){c=new WeakMap}function m(d){const g=d.target;g.removeEventListener("dispose",m),r.releaseStatesOfObject(g),i.remove(g.instanceMatrix),g.instanceColor!==null&&i.remove(g.instanceColor)}return{update:u,dispose:h}}const KT={[ex]:"LINEAR_TONE_MAPPING",[tx]:"REINHARD_TONE_MAPPING",[nx]:"CINEON_TONE_MAPPING",[ix]:"ACES_FILMIC_TONE_MAPPING",[sx]:"AGX_TONE_MAPPING",[rx]:"NEUTRAL_TONE_MAPPING",[ax]:"CUSTOM_TONE_MAPPING"};function QT(a,e,i,r,o,c){const u=new fa(e,i,{type:a,depthBuffer:o,stencilBuffer:c,samples:r?4:0,depthTexture:o?new uo(e,i):void 0}),h=new fa(e,i,{type:ka,depthBuffer:!1,stencilBuffer:!1}),m=new Ii;m.setAttribute("position",new Oi([-1,3,0,-1,-1,0,3,-1,0],3)),m.setAttribute("uv",new Oi([0,2,0,0,2,0],2));const d=new WE({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),g=new Pi(m,d),_=new Rx(-1,1,1,-1,0,1);let v=null,x=null,E=!1,w,y=null,M=[],I=!1;this.setSize=function(z,R){u.setSize(z,R),h.setSize(z,R);for(let O=0;O<M.length;O++){const L=M[O];L.setSize&&L.setSize(z,R)}},this.setEffects=function(z){M=z,I=M.length>0&&M[0].isRenderPass===!0;const R=u.width,O=u.height;for(let L=0;L<M.length;L++){const B=M[L];B.setSize&&B.setSize(R,O)}},this.begin=function(z,R){if(E||z.toneMapping===ua&&M.length===0)return!1;if(y=R,R!==null){const O=R.width,L=R.height;(u.width!==O||u.height!==L)&&this.setSize(O,L)}return I===!1&&z.setRenderTarget(u),w=z.toneMapping,z.toneMapping=ua,!0},this.hasRenderPass=function(){return I},this.end=function(z,R){z.toneMapping=w,E=!0;let O=u,L=h;for(let B=0;B<M.length;B++){const T=M[B];if(T.enabled!==!1&&(T.render(z,L,O,R),T.needsSwap!==!1)){const N=O;O=L,L=N}}if(v!==z.outputColorSpace||x!==z.toneMapping){v=z.outputColorSpace,x=z.toneMapping,d.defines={},Ct.getTransfer(v)===Wt&&(d.defines.SRGB_TRANSFER="");const B=KT[x];B&&(d.defines[B]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=O.texture,z.setRenderTarget(y),z.render(g,_),y=null,E=!1},this.isCompositing=function(){return E},this.dispose=function(){u.depthTexture&&u.depthTexture.dispose(),u.dispose(),h.dispose(),m.dispose(),d.dispose()}}const Lx=new Xn,up=new uo(1,1),Nx=new gx,Ux=new xE,Ox=new yx,dv=[],hv=[],pv=new Float32Array(16),mv=new Float32Array(9),gv=new Float32Array(4);function mo(a,e,i){const r=a[0];if(r<=0||r>0)return a;const o=e*i;let c=dv[o];if(c===void 0&&(c=new Float32Array(o),dv[o]=c),e!==0){r.toArray(c,0);for(let u=1,h=0;u!==e;++u)h+=i,a[u].toArray(c,h)}return c}function wn(a,e){if(a.length!==e.length)return!1;for(let i=0,r=a.length;i<r;i++)if(a[i]!==e[i])return!1;return!0}function Dn(a,e){for(let i=0,r=e.length;i<r;i++)a[i]=e[i]}function Mu(a,e){let i=hv[e];i===void 0&&(i=new Int32Array(e),hv[e]=i);for(let r=0;r!==e;++r)i[r]=a.allocateTextureUnit();return i}function JT(a,e){const i=this.cache;i[0]!==e&&(a.uniform1f(this.addr,e),i[0]=e)}function $T(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(wn(i,e))return;a.uniform2fv(this.addr,e),Dn(i,e)}}function eA(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(wn(i,e))return;a.uniform3fv(this.addr,e),Dn(i,e)}}function tA(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(wn(i,e))return;a.uniform4fv(this.addr,e),Dn(i,e)}}function nA(a,e){const i=this.cache,r=e.elements;if(r===void 0){if(wn(i,e))return;a.uniformMatrix2fv(this.addr,!1,e),Dn(i,e)}else{if(wn(i,r))return;gv.set(r),a.uniformMatrix2fv(this.addr,!1,gv),Dn(i,r)}}function iA(a,e){const i=this.cache,r=e.elements;if(r===void 0){if(wn(i,e))return;a.uniformMatrix3fv(this.addr,!1,e),Dn(i,e)}else{if(wn(i,r))return;mv.set(r),a.uniformMatrix3fv(this.addr,!1,mv),Dn(i,r)}}function aA(a,e){const i=this.cache,r=e.elements;if(r===void 0){if(wn(i,e))return;a.uniformMatrix4fv(this.addr,!1,e),Dn(i,e)}else{if(wn(i,r))return;pv.set(r),a.uniformMatrix4fv(this.addr,!1,pv),Dn(i,r)}}function sA(a,e){const i=this.cache;i[0]!==e&&(a.uniform1i(this.addr,e),i[0]=e)}function rA(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(a.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(wn(i,e))return;a.uniform2iv(this.addr,e),Dn(i,e)}}function oA(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(a.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(wn(i,e))return;a.uniform3iv(this.addr,e),Dn(i,e)}}function lA(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(wn(i,e))return;a.uniform4iv(this.addr,e),Dn(i,e)}}function cA(a,e){const i=this.cache;i[0]!==e&&(a.uniform1ui(this.addr,e),i[0]=e)}function uA(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(a.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(wn(i,e))return;a.uniform2uiv(this.addr,e),Dn(i,e)}}function fA(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(a.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(wn(i,e))return;a.uniform3uiv(this.addr,e),Dn(i,e)}}function dA(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(wn(i,e))return;a.uniform4uiv(this.addr,e),Dn(i,e)}}function hA(a,e,i){const r=this.cache,o=i.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o);let c;this.type===a.SAMPLER_2D_SHADOW?(up.compareFunction=i.isReversedDepthBuffer()?Ep:yp,c=up):c=Lx,i.setTexture2D(e||c,o)}function pA(a,e,i){const r=this.cache,o=i.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o),i.setTexture3D(e||Ux,o)}function mA(a,e,i){const r=this.cache,o=i.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o),i.setTextureCube(e||Ox,o)}function gA(a,e,i){const r=this.cache,o=i.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o),i.setTexture2DArray(e||Nx,o)}function _A(a){switch(a){case 5126:return JT;case 35664:return $T;case 35665:return eA;case 35666:return tA;case 35674:return nA;case 35675:return iA;case 35676:return aA;case 5124:case 35670:return sA;case 35667:case 35671:return rA;case 35668:case 35672:return oA;case 35669:case 35673:return lA;case 5125:return cA;case 36294:return uA;case 36295:return fA;case 36296:return dA;case 35678:case 36198:case 36298:case 36306:case 35682:return hA;case 35679:case 36299:case 36307:return pA;case 35680:case 36300:case 36308:case 36293:return mA;case 36289:case 36303:case 36311:case 36292:return gA}}function vA(a,e){a.uniform1fv(this.addr,e)}function xA(a,e){const i=mo(e,this.size,2);a.uniform2fv(this.addr,i)}function SA(a,e){const i=mo(e,this.size,3);a.uniform3fv(this.addr,i)}function MA(a,e){const i=mo(e,this.size,4);a.uniform4fv(this.addr,i)}function yA(a,e){const i=mo(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,i)}function EA(a,e){const i=mo(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,i)}function bA(a,e){const i=mo(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,i)}function TA(a,e){a.uniform1iv(this.addr,e)}function AA(a,e){a.uniform2iv(this.addr,e)}function RA(a,e){a.uniform3iv(this.addr,e)}function CA(a,e){a.uniform4iv(this.addr,e)}function wA(a,e){a.uniform1uiv(this.addr,e)}function DA(a,e){a.uniform2uiv(this.addr,e)}function LA(a,e){a.uniform3uiv(this.addr,e)}function NA(a,e){a.uniform4uiv(this.addr,e)}function UA(a,e,i){const r=this.cache,o=e.length,c=Mu(i,o);wn(r,c)||(a.uniform1iv(this.addr,c),Dn(r,c));let u;this.type===a.SAMPLER_2D_SHADOW?u=up:u=Lx;for(let h=0;h!==o;++h)i.setTexture2D(e[h]||u,c[h])}function OA(a,e,i){const r=this.cache,o=e.length,c=Mu(i,o);wn(r,c)||(a.uniform1iv(this.addr,c),Dn(r,c));for(let u=0;u!==o;++u)i.setTexture3D(e[u]||Ux,c[u])}function PA(a,e,i){const r=this.cache,o=e.length,c=Mu(i,o);wn(r,c)||(a.uniform1iv(this.addr,c),Dn(r,c));for(let u=0;u!==o;++u)i.setTextureCube(e[u]||Ox,c[u])}function IA(a,e,i){const r=this.cache,o=e.length,c=Mu(i,o);wn(r,c)||(a.uniform1iv(this.addr,c),Dn(r,c));for(let u=0;u!==o;++u)i.setTexture2DArray(e[u]||Nx,c[u])}function FA(a){switch(a){case 5126:return vA;case 35664:return xA;case 35665:return SA;case 35666:return MA;case 35674:return yA;case 35675:return EA;case 35676:return bA;case 5124:case 35670:return TA;case 35667:case 35671:return AA;case 35668:case 35672:return RA;case 35669:case 35673:return CA;case 5125:return wA;case 36294:return DA;case 36295:return LA;case 36296:return NA;case 35678:case 36198:case 36298:case 36306:case 35682:return UA;case 35679:case 36299:case 36307:return OA;case 35680:case 36300:case 36308:case 36293:return PA;case 36289:case 36303:case 36311:case 36292:return IA}}class BA{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=_A(i.type)}}class zA{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=FA(i.type)}}class HA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const o=this.seq;for(let c=0,u=o.length;c!==u;++c){const h=o[c];h.setValue(e,i[h.id],r)}}}const mh=/(\w+)(\])?(\[|\.)?/g;function _v(a,e){a.seq.push(e),a.map[e.id]=e}function GA(a,e,i){const r=a.name,o=r.length;for(mh.lastIndex=0;;){const c=mh.exec(r),u=mh.lastIndex;let h=c[1];const m=c[2]==="]",d=c[3];if(m&&(h=h|0),d===void 0||d==="["&&u+2===o){_v(i,d===void 0?new BA(h,a,e):new zA(h,a,e));break}else{let _=i.map[h];_===void 0&&(_=new HA(h),_v(i,_)),i=_}}}class lu{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let u=0;u<r;++u){const h=e.getActiveUniform(i,u),m=e.getUniformLocation(i,h.name);GA(h,m,this)}const o=[],c=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(u):c.push(u);o.length>0&&(this.seq=o.concat(c))}setValue(e,i,r,o){const c=this.map[i];c!==void 0&&c.setValue(e,r,o)}setOptional(e,i,r){const o=i[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,i,r,o){for(let c=0,u=i.length;c!==u;++c){const h=i[c],m=r[h.id];m.needsUpdate!==!1&&h.setValue(e,m.value,o)}}static seqWithValue(e,i){const r=[];for(let o=0,c=e.length;o!==c;++o){const u=e[o];u.id in i&&r.push(u)}return r}}function vv(a,e,i){const r=a.createShader(e);return a.shaderSource(r,i),a.compileShader(r),r}const VA=37297;let kA=0;function XA(a,e){const i=a.split(`
`),r=[],o=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let u=o;u<c;u++){const h=u+1;r.push(`${h===e?">":" "} ${h}: ${i[u]}`)}return r.join(`
`)}const xv=new ut;function WA(a){Ct._getMatrix(xv,Ct.workingColorSpace,a);const e=`mat3( ${xv.elements.map(i=>i.toFixed(4))} )`;switch(Ct.getTransfer(a)){case hu:return[e,"LinearTransferOETF"];case Wt:return[e,"sRGBTransferOETF"];default:return st("WebGLProgram: Unsupported color space: ",a),[e,"LinearTransferOETF"]}}function Sv(a,e,i){const r=a.getShaderParameter(e,a.COMPILE_STATUS),c=(a.getShaderInfoLog(e)||"").trim();if(r&&c==="")return"";const u=/ERROR: 0:(\d+)/.exec(c);if(u){const h=parseInt(u[1]);return i.toUpperCase()+`

`+c+`

`+XA(a.getShaderSource(e),h)}else return c}function qA(a,e){const i=WA(e);return[`vec4 ${a}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const YA={[ex]:"Linear",[tx]:"Reinhard",[nx]:"Cineon",[ix]:"ACESFilmic",[sx]:"AgX",[rx]:"Neutral",[ax]:"Custom"};function jA(a,e){const i=YA[e];return i===void 0?(st("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+a+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+a+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const tu=new ee;function ZA(){Ct.getLuminanceCoefficients(tu);const a=tu.x.toFixed(4),e=tu.y.toFixed(4),i=tu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${a}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function KA(a){return[a.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",a.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(hl).join(`
`)}function QA(a){const e=[];for(const i in a){const r=a[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function JA(a,e){const i={},r=a.getProgramParameter(e,a.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const c=a.getActiveAttrib(e,o),u=c.name;let h=1;c.type===a.FLOAT_MAT2&&(h=2),c.type===a.FLOAT_MAT3&&(h=3),c.type===a.FLOAT_MAT4&&(h=4),i[u]={type:c.type,location:a.getAttribLocation(e,u),locationSize:h}}return i}function hl(a){return a!==""}function Mv(a,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function yv(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const $A=/^[ \t]*#include +<([\w\d./]+)>/gm;function fp(a){return a.replace($A,t2)}const e2=new Map;function t2(a,e){let i=pt[e];if(i===void 0){const r=e2.get(e);if(r!==void 0)i=pt[r],st('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return fp(i)}const n2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ev(a){return a.replace(n2,i2)}function i2(a,e,i,r){let o="";for(let c=parseInt(e);c<parseInt(i);c++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return o}function bv(a){let e=`precision ${a.precision} float;
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
#define LOW_PRECISION`),e}const a2={[iu]:"SHADOWMAP_TYPE_PCF",[fl]:"SHADOWMAP_TYPE_VSM"};function s2(a){return a2[a.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const r2={[ar]:"ENVMAP_TYPE_CUBE",[co]:"ENVMAP_TYPE_CUBE",[vu]:"ENVMAP_TYPE_CUBE_UV"};function o2(a){return a.envMap===!1?"ENVMAP_TYPE_CUBE":r2[a.envMapMode]||"ENVMAP_TYPE_CUBE"}const l2={[co]:"ENVMAP_MODE_REFRACTION"};function c2(a){return a.envMap===!1?"ENVMAP_MODE_REFLECTION":l2[a.envMapMode]||"ENVMAP_MODE_REFLECTION"}const u2={[$v]:"ENVMAP_BLENDING_MULTIPLY",[Fy]:"ENVMAP_BLENDING_MIX",[By]:"ENVMAP_BLENDING_ADD"};function f2(a){return a.envMap===!1?"ENVMAP_BLENDING_NONE":u2[a.combine]||"ENVMAP_BLENDING_NONE"}function d2(a){const e=a.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function h2(a,e,i,r){const o=a.getContext(),c=i.defines;let u=i.vertexShader,h=i.fragmentShader;const m=s2(i),d=o2(i),g=c2(i),_=f2(i),v=d2(i),x=KA(i),E=QA(c),w=o.createProgram();let y,M,I=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(hl).join(`
`),y.length>0&&(y+=`
`),M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(hl).join(`
`),M.length>0&&(M+=`
`)):(y=[bv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(hl).join(`
`),M=[bv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+d:"",i.envMap?"#define "+g:"",i.envMap?"#define "+_:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==ua?"#define TONE_MAPPING":"",i.toneMapping!==ua?pt.tonemapping_pars_fragment:"",i.toneMapping!==ua?jA("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",pt.colorspace_pars_fragment,qA("linearToOutputTexel",i.outputColorSpace),ZA(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(hl).join(`
`)),u=fp(u),u=Mv(u,i),u=yv(u,i),h=fp(h),h=Mv(h,i),h=yv(h,i),u=Ev(u),h=Ev(h),i.isRawShaderMaterial!==!0&&(I=`#version 300 es
`,y=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,M=["#define varying in",i.glslVersion===P_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===P_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+M);const z=I+y+u,R=I+M+h,O=vv(o,o.VERTEX_SHADER,z),L=vv(o,o.FRAGMENT_SHADER,R);o.attachShader(w,O),o.attachShader(w,L),i.index0AttributeName!==void 0?o.bindAttribLocation(w,0,i.index0AttributeName):i.hasPositionAttribute===!0&&o.bindAttribLocation(w,0,"position"),o.linkProgram(w);function B(V){if(a.debug.checkShaderErrors){const Y=o.getProgramInfoLog(w)||"",ue=o.getShaderInfoLog(O)||"",fe=o.getShaderInfoLog(L)||"",q=Y.trim(),F=ue.trim(),H=fe.trim();let $=!0,_e=!0;if(o.getProgramParameter(w,o.LINK_STATUS)===!1)if($=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(o,w,O,L);else{const Me=Sv(o,O,"vertex"),P=Sv(o,L,"fragment");Nt("WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(w,o.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+q+`
`+Me+`
`+P)}else q!==""?st("WebGLProgram: Program Info Log:",q):(F===""||H==="")&&(_e=!1);_e&&(V.diagnostics={runnable:$,programLog:q,vertexShader:{log:F,prefix:y},fragmentShader:{log:H,prefix:M}})}o.deleteShader(O),o.deleteShader(L),T=new lu(o,w),N=JA(o,w)}let T;this.getUniforms=function(){return T===void 0&&B(this),T};let N;this.getAttributes=function(){return N===void 0&&B(this),N};let X=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return X===!1&&(X=o.getProgramParameter(w,VA)),X},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(w),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=kA++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=O,this.fragmentShader=L,this}let p2=0;class m2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,i,r){const o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new g2(e),i.set(e,r)),r}}class g2{constructor(e){this.id=p2++,this.code=e,this.usedTimes=0}}function _2(a){return a===sr||a===uu||a===fu}function v2(a,e,i,r,o,c){const u=new _x,h=new m2,m=new Set,d=[],g=new Map,_=r.logarithmicDepthBuffer;let v=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(T){return m.add(T),T===0?"uv":`uv${T}`}function w(T,N,X,V,Y,ue){const fe=V.fog,q=Y.geometry,F=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?V.environment:null,H=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,$=e.get(T.envMap||F,H),_e=$&&$.mapping===vu?$.image.height:null,Me=x[T.type];T.precision!==null&&(v=r.getMaxPrecision(T.precision),v!==T.precision&&st("WebGLProgram.getParameters:",T.precision,"not supported, using",v,"instead."));const P=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,K=P!==void 0?P.length:0;let ye=0;q.morphAttributes.position!==void 0&&(ye=1),q.morphAttributes.normal!==void 0&&(ye=2),q.morphAttributes.color!==void 0&&(ye=3);let Ce,ze,se,be;if(Me){const Ge=ra[Me];Ce=Ge.vertexShader,ze=Ge.fragmentShader}else{Ce=T.vertexShader,ze=T.fragmentShader;const Ge=h.getVertexShaderStage(T),Ft=h.getFragmentShaderStage(T);h.update(T,Ge,Ft),se=Ge.id,be=Ft.id}const Te=a.getRenderTarget(),qe=a.state.buffers.depth.getReversed(),it=Y.isInstancedMesh===!0,et=Y.isBatchedMesh===!0,qt=!!T.map,lt=!!T.matcap,gt=!!$,_t=!!T.aoMap,rt=!!T.lightMap,Yt=!!T.bumpMap&&T.wireframe===!1,zt=!!T.normalMap,Ht=!!T.displacementMap,sn=!!T.emissiveMap,It=!!T.metalnessMap,jt=!!T.roughnessMap,j=T.anisotropy>0,Dt=T.clearcoat>0,xt=T.dispersion>0,U=T.iridescence>0,b=T.sheen>0,J=T.transmission>0,re=j&&!!T.anisotropyMap,pe=Dt&&!!T.clearcoatMap,Le=Dt&&!!T.clearcoatNormalMap,Oe=Dt&&!!T.clearcoatRoughnessMap,he=U&&!!T.iridescenceMap,me=U&&!!T.iridescenceThicknessMap,De=b&&!!T.sheenColorMap,He=b&&!!T.sheenRoughnessMap,Ie=!!T.specularMap,ge=!!T.specularColorMap,Ne=!!T.specularIntensityMap,Ue=J&&!!T.transmissionMap,Ye=J&&!!T.thicknessMap,k=!!T.gradientMap,Ae=!!T.alphaMap,ce=T.alphaTest>0,Re=!!T.alphaHash,we=!!T.extensions;let xe=ua;T.toneMapped&&(Te===null||Te.isXRRenderTarget===!0)&&(xe=a.toneMapping);const Ke={shaderID:Me,shaderType:T.type,shaderName:T.name,vertexShader:Ce,fragmentShader:ze,defines:T.defines,customVertexShaderID:se,customFragmentShaderID:be,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:v,batching:et,batchingColor:et&&Y._colorsTexture!==null,instancing:it,instancingColor:it&&Y.instanceColor!==null,instancingMorph:it&&Y.morphTexture!==null,outputColorSpace:Te===null?a.outputColorSpace:Te.isXRRenderTarget===!0?Te.texture.colorSpace:Ct.workingColorSpace,alphaToCoverage:!!T.alphaToCoverage,map:qt,matcap:lt,envMap:gt,envMapMode:gt&&$.mapping,envMapCubeUVHeight:_e,aoMap:_t,lightMap:rt,bumpMap:Yt,normalMap:zt,displacementMap:Ht,emissiveMap:sn,normalMapObjectSpace:zt&&T.normalMapType===Gy,normalMapTangentSpace:zt&&T.normalMapType===N_,packedNormalMap:zt&&T.normalMapType===N_&&_2(T.normalMap.format),metalnessMap:It,roughnessMap:jt,anisotropy:j,anisotropyMap:re,clearcoat:Dt,clearcoatMap:pe,clearcoatNormalMap:Le,clearcoatRoughnessMap:Oe,dispersion:xt,iridescence:U,iridescenceMap:he,iridescenceThicknessMap:me,sheen:b,sheenColorMap:De,sheenRoughnessMap:He,specularMap:Ie,specularColorMap:ge,specularIntensityMap:Ne,transmission:J,transmissionMap:Ue,thicknessMap:Ye,gradientMap:k,opaque:T.transparent===!1&&T.blending===io&&T.alphaToCoverage===!1,alphaMap:Ae,alphaTest:ce,alphaHash:Re,combine:T.combine,mapUv:qt&&E(T.map.channel),aoMapUv:_t&&E(T.aoMap.channel),lightMapUv:rt&&E(T.lightMap.channel),bumpMapUv:Yt&&E(T.bumpMap.channel),normalMapUv:zt&&E(T.normalMap.channel),displacementMapUv:Ht&&E(T.displacementMap.channel),emissiveMapUv:sn&&E(T.emissiveMap.channel),metalnessMapUv:It&&E(T.metalnessMap.channel),roughnessMapUv:jt&&E(T.roughnessMap.channel),anisotropyMapUv:re&&E(T.anisotropyMap.channel),clearcoatMapUv:pe&&E(T.clearcoatMap.channel),clearcoatNormalMapUv:Le&&E(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Oe&&E(T.clearcoatRoughnessMap.channel),iridescenceMapUv:he&&E(T.iridescenceMap.channel),iridescenceThicknessMapUv:me&&E(T.iridescenceThicknessMap.channel),sheenColorMapUv:De&&E(T.sheenColorMap.channel),sheenRoughnessMapUv:He&&E(T.sheenRoughnessMap.channel),specularMapUv:Ie&&E(T.specularMap.channel),specularColorMapUv:ge&&E(T.specularColorMap.channel),specularIntensityMapUv:Ne&&E(T.specularIntensityMap.channel),transmissionMapUv:Ue&&E(T.transmissionMap.channel),thicknessMapUv:Ye&&E(T.thicknessMap.channel),alphaMapUv:Ae&&E(T.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(zt||j),vertexNormals:!!q.attributes.normal,vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:Y.isPoints===!0&&!!q.attributes.uv&&(qt||Ae),fog:!!fe,useFog:T.fog===!0,fogExp2:!!fe&&fe.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||q.attributes.normal===void 0&&zt===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:qe,skinning:Y.isSkinnedMesh===!0,hasPositionAttribute:q.attributes.position!==void 0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:ye,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numLightProbes:N.numLightProbes,numLightProbeGrids:ue.length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:T.dithering,shadowMapEnabled:a.shadowMap.enabled&&X.length>0,shadowMapType:a.shadowMap.type,toneMapping:xe,decodeVideoTexture:qt&&T.map.isVideoTexture===!0&&Ct.getTransfer(T.map.colorSpace)===Wt,decodeVideoTextureEmissive:sn&&T.emissiveMap.isVideoTexture===!0&&Ct.getTransfer(T.emissiveMap.colorSpace)===Wt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===oa,flipSided:T.side===oi,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:we&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(we&&T.extensions.multiDraw===!0||et)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Ke.vertexUv1s=m.has(1),Ke.vertexUv2s=m.has(2),Ke.vertexUv3s=m.has(3),m.clear(),Ke}function y(T){const N=[];if(T.shaderID?N.push(T.shaderID):(N.push(T.customVertexShaderID),N.push(T.customFragmentShaderID)),T.defines!==void 0)for(const X in T.defines)N.push(X),N.push(T.defines[X]);return T.isRawShaderMaterial===!1&&(M(N,T),I(N,T),N.push(a.outputColorSpace)),N.push(T.customProgramCacheKey),N.join()}function M(T,N){T.push(N.precision),T.push(N.outputColorSpace),T.push(N.envMapMode),T.push(N.envMapCubeUVHeight),T.push(N.mapUv),T.push(N.alphaMapUv),T.push(N.lightMapUv),T.push(N.aoMapUv),T.push(N.bumpMapUv),T.push(N.normalMapUv),T.push(N.displacementMapUv),T.push(N.emissiveMapUv),T.push(N.metalnessMapUv),T.push(N.roughnessMapUv),T.push(N.anisotropyMapUv),T.push(N.clearcoatMapUv),T.push(N.clearcoatNormalMapUv),T.push(N.clearcoatRoughnessMapUv),T.push(N.iridescenceMapUv),T.push(N.iridescenceThicknessMapUv),T.push(N.sheenColorMapUv),T.push(N.sheenRoughnessMapUv),T.push(N.specularMapUv),T.push(N.specularColorMapUv),T.push(N.specularIntensityMapUv),T.push(N.transmissionMapUv),T.push(N.thicknessMapUv),T.push(N.combine),T.push(N.fogExp2),T.push(N.sizeAttenuation),T.push(N.morphTargetsCount),T.push(N.morphAttributeCount),T.push(N.numDirLights),T.push(N.numPointLights),T.push(N.numSpotLights),T.push(N.numSpotLightMaps),T.push(N.numHemiLights),T.push(N.numRectAreaLights),T.push(N.numDirLightShadows),T.push(N.numPointLightShadows),T.push(N.numSpotLightShadows),T.push(N.numSpotLightShadowsWithMaps),T.push(N.numLightProbes),T.push(N.shadowMapType),T.push(N.toneMapping),T.push(N.numClippingPlanes),T.push(N.numClipIntersection),T.push(N.depthPacking)}function I(T,N){u.disableAll(),N.instancing&&u.enable(0),N.instancingColor&&u.enable(1),N.instancingMorph&&u.enable(2),N.matcap&&u.enable(3),N.envMap&&u.enable(4),N.normalMapObjectSpace&&u.enable(5),N.normalMapTangentSpace&&u.enable(6),N.clearcoat&&u.enable(7),N.iridescence&&u.enable(8),N.alphaTest&&u.enable(9),N.vertexColors&&u.enable(10),N.vertexAlphas&&u.enable(11),N.vertexUv1s&&u.enable(12),N.vertexUv2s&&u.enable(13),N.vertexUv3s&&u.enable(14),N.vertexTangents&&u.enable(15),N.anisotropy&&u.enable(16),N.alphaHash&&u.enable(17),N.batching&&u.enable(18),N.dispersion&&u.enable(19),N.batchingColor&&u.enable(20),N.gradientMap&&u.enable(21),N.packedNormalMap&&u.enable(22),N.vertexNormals&&u.enable(23),T.push(u.mask),u.disableAll(),N.fog&&u.enable(0),N.useFog&&u.enable(1),N.flatShading&&u.enable(2),N.logarithmicDepthBuffer&&u.enable(3),N.reversedDepthBuffer&&u.enable(4),N.skinning&&u.enable(5),N.morphTargets&&u.enable(6),N.morphNormals&&u.enable(7),N.morphColors&&u.enable(8),N.premultipliedAlpha&&u.enable(9),N.shadowMapEnabled&&u.enable(10),N.doubleSided&&u.enable(11),N.flipSided&&u.enable(12),N.useDepthPacking&&u.enable(13),N.dithering&&u.enable(14),N.transmission&&u.enable(15),N.sheen&&u.enable(16),N.opaque&&u.enable(17),N.pointsUvs&&u.enable(18),N.decodeVideoTexture&&u.enable(19),N.decodeVideoTextureEmissive&&u.enable(20),N.alphaToCoverage&&u.enable(21),N.numLightProbeGrids>0&&u.enable(22),N.hasPositionAttribute&&u.enable(23),T.push(u.mask)}function z(T){const N=x[T.type];let X;if(N){const V=ra[N];X=VE.clone(V.uniforms)}else X=T.uniforms;return X}function R(T,N){let X=g.get(N);return X!==void 0?++X.usedTimes:(X=new h2(a,N,T,o),d.push(X),g.set(N,X)),X}function O(T){if(--T.usedTimes===0){const N=d.indexOf(T);d[N]=d[d.length-1],d.pop(),g.delete(T.cacheKey),T.destroy()}}function L(T){h.remove(T)}function B(){h.dispose()}return{getParameters:w,getProgramCacheKey:y,getUniforms:z,acquireProgram:R,releaseProgram:O,releaseShaderCache:L,programs:d,dispose:B}}function x2(){let a=new WeakMap;function e(u){return a.has(u)}function i(u){let h=a.get(u);return h===void 0&&(h={},a.set(u,h)),h}function r(u){a.delete(u)}function o(u,h,m){a.get(u)[h]=m}function c(){a=new WeakMap}return{has:e,get:i,remove:r,update:o,dispose:c}}function S2(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.materialVariant!==e.materialVariant?a.materialVariant-e.materialVariant:a.z!==e.z?a.z-e.z:a.id-e.id}function Tv(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function Av(){const a=[];let e=0;const i=[],r=[],o=[];function c(){e=0,i.length=0,r.length=0,o.length=0}function u(v){let x=0;return v.isInstancedMesh&&(x+=2),v.isSkinnedMesh&&(x+=1),x}function h(v,x,E,w,y,M){let I=a[e];return I===void 0?(I={id:v.id,object:v,geometry:x,material:E,materialVariant:u(v),groupOrder:w,renderOrder:v.renderOrder,z:y,group:M},a[e]=I):(I.id=v.id,I.object=v,I.geometry=x,I.material=E,I.materialVariant=u(v),I.groupOrder=w,I.renderOrder=v.renderOrder,I.z=y,I.group=M),e++,I}function m(v,x,E,w,y,M){const I=h(v,x,E,w,y,M);E.transmission>0?r.push(I):E.transparent===!0?o.push(I):i.push(I)}function d(v,x,E,w,y,M){const I=h(v,x,E,w,y,M);E.transmission>0?r.unshift(I):E.transparent===!0?o.unshift(I):i.unshift(I)}function g(v,x,E){i.length>1&&i.sort(v||S2),r.length>1&&r.sort(x||Tv),o.length>1&&o.sort(x||Tv),E&&(i.reverse(),r.reverse(),o.reverse())}function _(){for(let v=e,x=a.length;v<x;v++){const E=a[v];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:i,transmissive:r,transparent:o,init:c,push:m,unshift:d,finish:_,sort:g}}function M2(){let a=new WeakMap;function e(r,o){const c=a.get(r);let u;return c===void 0?(u=new Av,a.set(r,[u])):o>=c.length?(u=new Av,c.push(u)):u=c[o],u}function i(){a=new WeakMap}return{get:e,dispose:i}}function y2(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new ee,color:new wt};break;case"SpotLight":i={position:new ee,direction:new ee,color:new wt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new ee,color:new wt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new ee,skyColor:new wt,groundColor:new wt};break;case"RectAreaLight":i={color:new wt,position:new ee,halfWidth:new ee,halfHeight:new ee};break}return a[e.id]=i,i}}}function E2(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=i,i}}}let b2=0;function T2(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function A2(a){const e=new y2,i=E2(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)r.probe.push(new ee);const o=new ee,c=new xn,u=new xn;function h(d){let g=0,_=0,v=0;for(let N=0;N<9;N++)r.probe[N].set(0,0,0);let x=0,E=0,w=0,y=0,M=0,I=0,z=0,R=0,O=0,L=0,B=0;d.sort(T2);for(let N=0,X=d.length;N<X;N++){const V=d[N],Y=V.color,ue=V.intensity,fe=V.distance;let q=null;if(V.shadow&&V.shadow.map&&(V.shadow.map.texture.format===sr?q=V.shadow.map.texture:q=V.shadow.map.depthTexture||V.shadow.map.texture),V.isAmbientLight)g+=Y.r*ue,_+=Y.g*ue,v+=Y.b*ue;else if(V.isLightProbe){for(let F=0;F<9;F++)r.probe[F].addScaledVector(V.sh.coefficients[F],ue);B++}else if(V.isDirectionalLight){const F=e.get(V);if(F.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const H=V.shadow,$=i.get(V);$.shadowIntensity=H.intensity,$.shadowBias=H.bias,$.shadowNormalBias=H.normalBias,$.shadowRadius=H.radius,$.shadowMapSize=H.mapSize,r.directionalShadow[x]=$,r.directionalShadowMap[x]=q,r.directionalShadowMatrix[x]=V.shadow.matrix,I++}r.directional[x]=F,x++}else if(V.isSpotLight){const F=e.get(V);F.position.setFromMatrixPosition(V.matrixWorld),F.color.copy(Y).multiplyScalar(ue),F.distance=fe,F.coneCos=Math.cos(V.angle),F.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),F.decay=V.decay,r.spot[w]=F;const H=V.shadow;if(V.map&&(r.spotLightMap[O]=V.map,O++,H.updateMatrices(V),V.castShadow&&L++),r.spotLightMatrix[w]=H.matrix,V.castShadow){const $=i.get(V);$.shadowIntensity=H.intensity,$.shadowBias=H.bias,$.shadowNormalBias=H.normalBias,$.shadowRadius=H.radius,$.shadowMapSize=H.mapSize,r.spotShadow[w]=$,r.spotShadowMap[w]=q,R++}w++}else if(V.isRectAreaLight){const F=e.get(V);F.color.copy(Y).multiplyScalar(ue),F.halfWidth.set(V.width*.5,0,0),F.halfHeight.set(0,V.height*.5,0),r.rectArea[y]=F,y++}else if(V.isPointLight){const F=e.get(V);if(F.color.copy(V.color).multiplyScalar(V.intensity),F.distance=V.distance,F.decay=V.decay,V.castShadow){const H=V.shadow,$=i.get(V);$.shadowIntensity=H.intensity,$.shadowBias=H.bias,$.shadowNormalBias=H.normalBias,$.shadowRadius=H.radius,$.shadowMapSize=H.mapSize,$.shadowCameraNear=H.camera.near,$.shadowCameraFar=H.camera.far,r.pointShadow[E]=$,r.pointShadowMap[E]=q,r.pointShadowMatrix[E]=V.shadow.matrix,z++}r.point[E]=F,E++}else if(V.isHemisphereLight){const F=e.get(V);F.skyColor.copy(V.color).multiplyScalar(ue),F.groundColor.copy(V.groundColor).multiplyScalar(ue),r.hemi[M]=F,M++}}y>0&&(a.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ke.LTC_FLOAT_1,r.rectAreaLTC2=ke.LTC_FLOAT_2):(r.rectAreaLTC1=ke.LTC_HALF_1,r.rectAreaLTC2=ke.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=_,r.ambient[2]=v;const T=r.hash;(T.directionalLength!==x||T.pointLength!==E||T.spotLength!==w||T.rectAreaLength!==y||T.hemiLength!==M||T.numDirectionalShadows!==I||T.numPointShadows!==z||T.numSpotShadows!==R||T.numSpotMaps!==O||T.numLightProbes!==B)&&(r.directional.length=x,r.spot.length=w,r.rectArea.length=y,r.point.length=E,r.hemi.length=M,r.directionalShadow.length=I,r.directionalShadowMap.length=I,r.pointShadow.length=z,r.pointShadowMap.length=z,r.spotShadow.length=R,r.spotShadowMap.length=R,r.directionalShadowMatrix.length=I,r.pointShadowMatrix.length=z,r.spotLightMatrix.length=R+O-L,r.spotLightMap.length=O,r.numSpotLightShadowsWithMaps=L,r.numLightProbes=B,T.directionalLength=x,T.pointLength=E,T.spotLength=w,T.rectAreaLength=y,T.hemiLength=M,T.numDirectionalShadows=I,T.numPointShadows=z,T.numSpotShadows=R,T.numSpotMaps=O,T.numLightProbes=B,r.version=b2++)}function m(d,g){let _=0,v=0,x=0,E=0,w=0;const y=g.matrixWorldInverse;for(let M=0,I=d.length;M<I;M++){const z=d[M];if(z.isDirectionalLight){const R=r.directional[_];R.direction.setFromMatrixPosition(z.matrixWorld),o.setFromMatrixPosition(z.target.matrixWorld),R.direction.sub(o),R.direction.transformDirection(y),_++}else if(z.isSpotLight){const R=r.spot[x];R.position.setFromMatrixPosition(z.matrixWorld),R.position.applyMatrix4(y),R.direction.setFromMatrixPosition(z.matrixWorld),o.setFromMatrixPosition(z.target.matrixWorld),R.direction.sub(o),R.direction.transformDirection(y),x++}else if(z.isRectAreaLight){const R=r.rectArea[E];R.position.setFromMatrixPosition(z.matrixWorld),R.position.applyMatrix4(y),u.identity(),c.copy(z.matrixWorld),c.premultiply(y),u.extractRotation(c),R.halfWidth.set(z.width*.5,0,0),R.halfHeight.set(0,z.height*.5,0),R.halfWidth.applyMatrix4(u),R.halfHeight.applyMatrix4(u),E++}else if(z.isPointLight){const R=r.point[v];R.position.setFromMatrixPosition(z.matrixWorld),R.position.applyMatrix4(y),v++}else if(z.isHemisphereLight){const R=r.hemi[w];R.direction.setFromMatrixPosition(z.matrixWorld),R.direction.transformDirection(y),w++}}}return{setup:h,setupView:m,state:r}}function Rv(a){const e=new A2(a),i=[],r=[],o=[];function c(v){_.camera=v,i.length=0,r.length=0,o.length=0}function u(v){i.push(v)}function h(v){r.push(v)}function m(v){o.push(v)}function d(){e.setup(i)}function g(v){e.setupView(i,v)}const _={lightsArray:i,shadowsArray:r,lightProbeGridArray:o,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:_,setupLights:d,setupLightsView:g,pushLight:u,pushShadow:h,pushLightProbeGrid:m}}function R2(a){let e=new WeakMap;function i(o,c=0){const u=e.get(o);let h;return u===void 0?(h=new Rv(a),e.set(o,[h])):c>=u.length?(h=new Rv(a),u.push(h)):h=u[c],h}function r(){e=new WeakMap}return{get:i,dispose:r}}const C2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,w2=`uniform sampler2D shadow_pass;
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
}`,D2=[new ee(1,0,0),new ee(-1,0,0),new ee(0,1,0),new ee(0,-1,0),new ee(0,0,1),new ee(0,0,-1)],L2=[new ee(0,-1,0),new ee(0,-1,0),new ee(0,0,1),new ee(0,0,-1),new ee(0,-1,0),new ee(0,-1,0)],Cv=new xn,ul=new ee,gh=new ee;function N2(a,e,i){let r=new Mx;const o=new Pt,c=new Pt,u=new mn,h=new qE,m=new YE,d={},g=i.maxTextureSize,_={[Va]:oi,[oi]:Va,[oa]:oa},v=new Fi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Pt},radius:{value:4}},vertexShader:C2,fragmentShader:w2}),x=v.clone();x.defines.HORIZONTAL_PASS=1;const E=new Ii;E.setAttribute("position",new da(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new Pi(E,v),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=iu;let M=this.type;this.render=function(L,B,T){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||L.length===0)return;this.type===vy&&(st("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=iu);const N=a.getRenderTarget(),X=a.getActiveCubeFace(),V=a.getActiveMipmapLevel(),Y=a.state;Y.setBlending(Ha),Y.buffers.depth.getReversed()===!0?Y.buffers.color.setClear(0,0,0,0):Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const ue=M!==this.type;ue&&B.traverse(function(fe){fe.material&&(Array.isArray(fe.material)?fe.material.forEach(q=>q.needsUpdate=!0):fe.material.needsUpdate=!0)});for(let fe=0,q=L.length;fe<q;fe++){const F=L[fe],H=F.shadow;if(H===void 0){st("WebGLShadowMap:",F,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;o.copy(H.mapSize);const $=H.getFrameExtents();o.multiply($),c.copy(H.mapSize),(o.x>g||o.y>g)&&(o.x>g&&(c.x=Math.floor(g/$.x),o.x=c.x*$.x,H.mapSize.x=c.x),o.y>g&&(c.y=Math.floor(g/$.y),o.y=c.y*$.y,H.mapSize.y=c.y));const _e=a.state.buffers.depth.getReversed();if(H.camera._reversedDepth=_e,H.map===null||ue===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===fl){if(F.isPointLight){st("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new fa(o.x,o.y,{format:sr,type:ka,minFilter:An,magFilter:An,generateMipmaps:!1}),H.map.texture.name=F.name+".shadowMap",H.map.depthTexture=new uo(o.x,o.y,la),H.map.depthTexture.name=F.name+".shadowMapDepth",H.map.depthTexture.format=Xa,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Bn,H.map.depthTexture.magFilter=Bn}else F.isPointLight?(H.map=new Dx(o.x),H.map.depthTexture=new BE(o.x,ha)):(H.map=new fa(o.x,o.y),H.map.depthTexture=new uo(o.x,o.y,ha)),H.map.depthTexture.name=F.name+".shadowMap",H.map.depthTexture.format=Xa,this.type===iu?(H.map.depthTexture.compareFunction=_e?Ep:yp,H.map.depthTexture.minFilter=An,H.map.depthTexture.magFilter=An):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Bn,H.map.depthTexture.magFilter=Bn);H.camera.updateProjectionMatrix()}const Me=H.map.isWebGLCubeRenderTarget?6:1;for(let P=0;P<Me;P++){if(H.map.isWebGLCubeRenderTarget)a.setRenderTarget(H.map,P),a.clear();else{P===0&&(a.setRenderTarget(H.map),a.clear());const K=H.getViewport(P);u.set(c.x*K.x,c.y*K.y,c.x*K.z,c.y*K.w),Y.viewport(u)}if(F.isPointLight){const K=H.camera,ye=H.matrix,Ce=F.distance||K.far;Ce!==K.far&&(K.far=Ce,K.updateProjectionMatrix()),ul.setFromMatrixPosition(F.matrixWorld),K.position.copy(ul),gh.copy(K.position),gh.add(D2[P]),K.up.copy(L2[P]),K.lookAt(gh),K.updateMatrixWorld(),ye.makeTranslation(-ul.x,-ul.y,-ul.z),Cv.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),H._frustum.setFromProjectionMatrix(Cv,K.coordinateSystem,K.reversedDepth)}else H.updateMatrices(F);r=H.getFrustum(),R(B,T,H.camera,F,this.type)}H.isPointLightShadow!==!0&&this.type===fl&&I(H,T),H.needsUpdate=!1}M=this.type,y.needsUpdate=!1,a.setRenderTarget(N,X,V)};function I(L,B){const T=e.update(w);v.defines.VSM_SAMPLES!==L.blurSamples&&(v.defines.VSM_SAMPLES=L.blurSamples,x.defines.VSM_SAMPLES=L.blurSamples,v.needsUpdate=!0,x.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new fa(o.x,o.y,{format:sr,type:ka})),v.uniforms.shadow_pass.value=L.map.depthTexture,v.uniforms.resolution.value=L.mapSize,v.uniforms.radius.value=L.radius,a.setRenderTarget(L.mapPass),a.clear(),a.renderBufferDirect(B,null,T,v,w,null),x.uniforms.shadow_pass.value=L.mapPass.texture,x.uniforms.resolution.value=L.mapSize,x.uniforms.radius.value=L.radius,a.setRenderTarget(L.map),a.clear(),a.renderBufferDirect(B,null,T,x,w,null)}function z(L,B,T,N){let X=null;const V=T.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(V!==void 0)X=V;else if(X=T.isPointLight===!0?m:h,a.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0||B.alphaToCoverage===!0){const Y=X.uuid,ue=B.uuid;let fe=d[Y];fe===void 0&&(fe={},d[Y]=fe);let q=fe[ue];q===void 0&&(q=X.clone(),fe[ue]=q,B.addEventListener("dispose",O)),X=q}if(X.visible=B.visible,X.wireframe=B.wireframe,N===fl?X.side=B.shadowSide!==null?B.shadowSide:B.side:X.side=B.shadowSide!==null?B.shadowSide:_[B.side],X.alphaMap=B.alphaMap,X.alphaTest=B.alphaToCoverage===!0?.5:B.alphaTest,X.map=B.map,X.clipShadows=B.clipShadows,X.clippingPlanes=B.clippingPlanes,X.clipIntersection=B.clipIntersection,X.displacementMap=B.displacementMap,X.displacementScale=B.displacementScale,X.displacementBias=B.displacementBias,X.wireframeLinewidth=B.wireframeLinewidth,X.linewidth=B.linewidth,T.isPointLight===!0&&X.isMeshDistanceMaterial===!0){const Y=a.properties.get(X);Y.light=T}return X}function R(L,B,T,N,X){if(L.visible===!1)return;if(L.layers.test(B.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&X===fl)&&(!L.frustumCulled||r.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,L.matrixWorld);const ue=e.update(L),fe=L.material;if(Array.isArray(fe)){const q=ue.groups;for(let F=0,H=q.length;F<H;F++){const $=q[F],_e=fe[$.materialIndex];if(_e&&_e.visible){const Me=z(L,_e,N,X);L.onBeforeShadow(a,L,B,T,ue,Me,$),a.renderBufferDirect(T,null,ue,Me,L,$),L.onAfterShadow(a,L,B,T,ue,Me,$)}}}else if(fe.visible){const q=z(L,fe,N,X);L.onBeforeShadow(a,L,B,T,ue,q,null),a.renderBufferDirect(T,null,ue,q,L,null),L.onAfterShadow(a,L,B,T,ue,q,null)}}const Y=L.children;for(let ue=0,fe=Y.length;ue<fe;ue++)R(Y[ue],B,T,N,X)}function O(L){L.target.removeEventListener("dispose",O);for(const T in d){const N=d[T],X=L.target.uuid;X in N&&(N[X].dispose(),delete N[X])}}}function U2(a,e){function i(){let k=!1;const Ae=new mn;let ce=null;const Re=new mn(0,0,0,0);return{setMask:function(we){ce!==we&&!k&&(a.colorMask(we,we,we,we),ce=we)},setLocked:function(we){k=we},setClear:function(we,xe,Ke,Ge,Ft){Ft===!0&&(we*=Ge,xe*=Ge,Ke*=Ge),Ae.set(we,xe,Ke,Ge),Re.equals(Ae)===!1&&(a.clearColor(we,xe,Ke,Ge),Re.copy(Ae))},reset:function(){k=!1,ce=null,Re.set(-1,0,0,0)}}}function r(){let k=!1,Ae=!1,ce=null,Re=null,we=null;return{setReversed:function(xe){if(Ae!==xe){const Ke=e.get("EXT_clip_control");xe?Ke.clipControlEXT(Ke.LOWER_LEFT_EXT,Ke.ZERO_TO_ONE_EXT):Ke.clipControlEXT(Ke.LOWER_LEFT_EXT,Ke.NEGATIVE_ONE_TO_ONE_EXT),Ae=xe;const Ge=we;we=null,this.setClear(Ge)}},getReversed:function(){return Ae},setTest:function(xe){xe?Te(a.DEPTH_TEST):qe(a.DEPTH_TEST)},setMask:function(xe){ce!==xe&&!k&&(a.depthMask(xe),ce=xe)},setFunc:function(xe){if(Ae&&(xe=Qy[xe]),Re!==xe){switch(xe){case Th:a.depthFunc(a.NEVER);break;case Ah:a.depthFunc(a.ALWAYS);break;case Rh:a.depthFunc(a.LESS);break;case lo:a.depthFunc(a.LEQUAL);break;case Ch:a.depthFunc(a.EQUAL);break;case wh:a.depthFunc(a.GEQUAL);break;case Dh:a.depthFunc(a.GREATER);break;case Lh:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}Re=xe}},setLocked:function(xe){k=xe},setClear:function(xe){we!==xe&&(we=xe,Ae&&(xe=1-xe),a.clearDepth(xe))},reset:function(){k=!1,ce=null,Re=null,we=null,Ae=!1}}}function o(){let k=!1,Ae=null,ce=null,Re=null,we=null,xe=null,Ke=null,Ge=null,Ft=null;return{setTest:function(Lt){k||(Lt?Te(a.STENCIL_TEST):qe(a.STENCIL_TEST))},setMask:function(Lt){Ae!==Lt&&!k&&(a.stencilMask(Lt),Ae=Lt)},setFunc:function(Lt,zn,Hn){(ce!==Lt||Re!==zn||we!==Hn)&&(a.stencilFunc(Lt,zn,Hn),ce=Lt,Re=zn,we=Hn)},setOp:function(Lt,zn,Hn){(xe!==Lt||Ke!==zn||Ge!==Hn)&&(a.stencilOp(Lt,zn,Hn),xe=Lt,Ke=zn,Ge=Hn)},setLocked:function(Lt){k=Lt},setClear:function(Lt){Ft!==Lt&&(a.clearStencil(Lt),Ft=Lt)},reset:function(){k=!1,Ae=null,ce=null,Re=null,we=null,xe=null,Ke=null,Ge=null,Ft=null}}}const c=new i,u=new r,h=new o,m=new WeakMap,d=new WeakMap;let g={},_={},v={},x=new WeakMap,E=[],w=null,y=!1,M=null,I=null,z=null,R=null,O=null,L=null,B=null,T=new wt(0,0,0),N=0,X=!1,V=null,Y=null,ue=null,fe=null,q=null;const F=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,$=0;const _e=a.getParameter(a.VERSION);_e.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(_e)[1]),H=$>=1):_e.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(_e)[1]),H=$>=2);let Me=null,P={};const K=a.getParameter(a.SCISSOR_BOX),ye=a.getParameter(a.VIEWPORT),Ce=new mn().fromArray(K),ze=new mn().fromArray(ye);function se(k,Ae,ce,Re){const we=new Uint8Array(4),xe=a.createTexture();a.bindTexture(k,xe),a.texParameteri(k,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(k,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let Ke=0;Ke<ce;Ke++)k===a.TEXTURE_3D||k===a.TEXTURE_2D_ARRAY?a.texImage3D(Ae,0,a.RGBA,1,1,Re,0,a.RGBA,a.UNSIGNED_BYTE,we):a.texImage2D(Ae+Ke,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,we);return xe}const be={};be[a.TEXTURE_2D]=se(a.TEXTURE_2D,a.TEXTURE_2D,1),be[a.TEXTURE_CUBE_MAP]=se(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),be[a.TEXTURE_2D_ARRAY]=se(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1),be[a.TEXTURE_3D]=se(a.TEXTURE_3D,a.TEXTURE_3D,1,1),c.setClear(0,0,0,1),u.setClear(1),h.setClear(0),Te(a.DEPTH_TEST),u.setFunc(lo),Yt(!1),zt(w_),Te(a.CULL_FACE),_t(Ha);function Te(k){g[k]!==!0&&(a.enable(k),g[k]=!0)}function qe(k){g[k]!==!1&&(a.disable(k),g[k]=!1)}function it(k,Ae){return v[k]!==Ae?(a.bindFramebuffer(k,Ae),v[k]=Ae,k===a.DRAW_FRAMEBUFFER&&(v[a.FRAMEBUFFER]=Ae),k===a.FRAMEBUFFER&&(v[a.DRAW_FRAMEBUFFER]=Ae),!0):!1}function et(k,Ae){let ce=E,Re=!1;if(k){ce=x.get(Ae),ce===void 0&&(ce=[],x.set(Ae,ce));const we=k.textures;if(ce.length!==we.length||ce[0]!==a.COLOR_ATTACHMENT0){for(let xe=0,Ke=we.length;xe<Ke;xe++)ce[xe]=a.COLOR_ATTACHMENT0+xe;ce.length=we.length,Re=!0}}else ce[0]!==a.BACK&&(ce[0]=a.BACK,Re=!0);Re&&a.drawBuffers(ce)}function qt(k){return w!==k?(a.useProgram(k),w=k,!0):!1}const lt={[$s]:a.FUNC_ADD,[Sy]:a.FUNC_SUBTRACT,[My]:a.FUNC_REVERSE_SUBTRACT};lt[yy]=a.MIN,lt[Ey]=a.MAX;const gt={[by]:a.ZERO,[Ty]:a.ONE,[Ay]:a.SRC_COLOR,[Eh]:a.SRC_ALPHA,[Ny]:a.SRC_ALPHA_SATURATE,[Dy]:a.DST_COLOR,[Cy]:a.DST_ALPHA,[Ry]:a.ONE_MINUS_SRC_COLOR,[bh]:a.ONE_MINUS_SRC_ALPHA,[Ly]:a.ONE_MINUS_DST_COLOR,[wy]:a.ONE_MINUS_DST_ALPHA,[Uy]:a.CONSTANT_COLOR,[Oy]:a.ONE_MINUS_CONSTANT_COLOR,[Py]:a.CONSTANT_ALPHA,[Iy]:a.ONE_MINUS_CONSTANT_ALPHA};function _t(k,Ae,ce,Re,we,xe,Ke,Ge,Ft,Lt){if(k===Ha){y===!0&&(qe(a.BLEND),y=!1);return}if(y===!1&&(Te(a.BLEND),y=!0),k!==xy){if(k!==M||Lt!==X){if((I!==$s||O!==$s)&&(a.blendEquation(a.FUNC_ADD),I=$s,O=$s),Lt)switch(k){case io:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case yh:a.blendFunc(a.ONE,a.ONE);break;case D_:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case L_:a.blendFuncSeparate(a.DST_COLOR,a.ONE_MINUS_SRC_ALPHA,a.ZERO,a.ONE);break;default:Nt("WebGLState: Invalid blending: ",k);break}else switch(k){case io:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case yh:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE,a.ONE,a.ONE);break;case D_:Nt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case L_:Nt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Nt("WebGLState: Invalid blending: ",k);break}z=null,R=null,L=null,B=null,T.set(0,0,0),N=0,M=k,X=Lt}return}we=we||Ae,xe=xe||ce,Ke=Ke||Re,(Ae!==I||we!==O)&&(a.blendEquationSeparate(lt[Ae],lt[we]),I=Ae,O=we),(ce!==z||Re!==R||xe!==L||Ke!==B)&&(a.blendFuncSeparate(gt[ce],gt[Re],gt[xe],gt[Ke]),z=ce,R=Re,L=xe,B=Ke),(Ge.equals(T)===!1||Ft!==N)&&(a.blendColor(Ge.r,Ge.g,Ge.b,Ft),T.copy(Ge),N=Ft),M=k,X=!1}function rt(k,Ae){k.side===oa?qe(a.CULL_FACE):Te(a.CULL_FACE);let ce=k.side===oi;Ae&&(ce=!ce),Yt(ce),k.blending===io&&k.transparent===!1?_t(Ha):_t(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),u.setFunc(k.depthFunc),u.setTest(k.depthTest),u.setMask(k.depthWrite),c.setMask(k.colorWrite);const Re=k.stencilWrite;h.setTest(Re),Re&&(h.setMask(k.stencilWriteMask),h.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),h.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),sn(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?Te(a.SAMPLE_ALPHA_TO_COVERAGE):qe(a.SAMPLE_ALPHA_TO_COVERAGE)}function Yt(k){V!==k&&(k?a.frontFace(a.CW):a.frontFace(a.CCW),V=k)}function zt(k){k!==gy?(Te(a.CULL_FACE),k!==Y&&(k===w_?a.cullFace(a.BACK):k===_y?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):qe(a.CULL_FACE),Y=k}function Ht(k){k!==ue&&(H&&a.lineWidth(k),ue=k)}function sn(k,Ae,ce){k?(Te(a.POLYGON_OFFSET_FILL),(fe!==Ae||q!==ce)&&(fe=Ae,q=ce,u.getReversed()&&(Ae=-Ae),a.polygonOffset(Ae,ce))):qe(a.POLYGON_OFFSET_FILL)}function It(k){k?Te(a.SCISSOR_TEST):qe(a.SCISSOR_TEST)}function jt(k){k===void 0&&(k=a.TEXTURE0+F-1),Me!==k&&(a.activeTexture(k),Me=k)}function j(k,Ae,ce){ce===void 0&&(Me===null?ce=a.TEXTURE0+F-1:ce=Me);let Re=P[ce];Re===void 0&&(Re={type:void 0,texture:void 0},P[ce]=Re),(Re.type!==k||Re.texture!==Ae)&&(Me!==ce&&(a.activeTexture(ce),Me=ce),a.bindTexture(k,Ae||be[k]),Re.type=k,Re.texture=Ae)}function Dt(){const k=P[Me];k!==void 0&&k.type!==void 0&&(a.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function xt(){try{a.compressedTexImage2D(...arguments)}catch(k){Nt("WebGLState:",k)}}function U(){try{a.compressedTexImage3D(...arguments)}catch(k){Nt("WebGLState:",k)}}function b(){try{a.texSubImage2D(...arguments)}catch(k){Nt("WebGLState:",k)}}function J(){try{a.texSubImage3D(...arguments)}catch(k){Nt("WebGLState:",k)}}function re(){try{a.compressedTexSubImage2D(...arguments)}catch(k){Nt("WebGLState:",k)}}function pe(){try{a.compressedTexSubImage3D(...arguments)}catch(k){Nt("WebGLState:",k)}}function Le(){try{a.texStorage2D(...arguments)}catch(k){Nt("WebGLState:",k)}}function Oe(){try{a.texStorage3D(...arguments)}catch(k){Nt("WebGLState:",k)}}function he(){try{a.texImage2D(...arguments)}catch(k){Nt("WebGLState:",k)}}function me(){try{a.texImage3D(...arguments)}catch(k){Nt("WebGLState:",k)}}function De(k){return _[k]!==void 0?_[k]:a.getParameter(k)}function He(k,Ae){_[k]!==Ae&&(a.pixelStorei(k,Ae),_[k]=Ae)}function Ie(k){Ce.equals(k)===!1&&(a.scissor(k.x,k.y,k.z,k.w),Ce.copy(k))}function ge(k){ze.equals(k)===!1&&(a.viewport(k.x,k.y,k.z,k.w),ze.copy(k))}function Ne(k,Ae){let ce=d.get(Ae);ce===void 0&&(ce=new WeakMap,d.set(Ae,ce));let Re=ce.get(k);Re===void 0&&(Re=a.getUniformBlockIndex(Ae,k.name),ce.set(k,Re))}function Ue(k,Ae){const Re=d.get(Ae).get(k);m.get(Ae)!==Re&&(a.uniformBlockBinding(Ae,Re,k.__bindingPointIndex),m.set(Ae,Re))}function Ye(){a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.DEPTH_TEST),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SCISSOR_TEST),a.disable(a.STENCIL_TEST),a.disable(a.SAMPLE_ALPHA_TO_COVERAGE),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ONE,a.ZERO),a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO),a.blendColor(0,0,0,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(a.LESS),u.setReversed(!1),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(a.ALWAYS,0,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.clearStencil(0),a.cullFace(a.BACK),a.frontFace(a.CCW),a.polygonOffset(0,0),a.activeTexture(a.TEXTURE0),a.bindFramebuffer(a.FRAMEBUFFER,null),a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,null),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),a.pixelStorei(a.PACK_ALIGNMENT,4),a.pixelStorei(a.UNPACK_ALIGNMENT,4),a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,!1),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,a.BROWSER_DEFAULT_WEBGL),a.pixelStorei(a.PACK_ROW_LENGTH,0),a.pixelStorei(a.PACK_SKIP_PIXELS,0),a.pixelStorei(a.PACK_SKIP_ROWS,0),a.pixelStorei(a.UNPACK_ROW_LENGTH,0),a.pixelStorei(a.UNPACK_IMAGE_HEIGHT,0),a.pixelStorei(a.UNPACK_SKIP_PIXELS,0),a.pixelStorei(a.UNPACK_SKIP_ROWS,0),a.pixelStorei(a.UNPACK_SKIP_IMAGES,0),g={},_={},Me=null,P={},v={},x=new WeakMap,E=[],w=null,y=!1,M=null,I=null,z=null,R=null,O=null,L=null,B=null,T=new wt(0,0,0),N=0,X=!1,V=null,Y=null,ue=null,fe=null,q=null,Ce.set(0,0,a.canvas.width,a.canvas.height),ze.set(0,0,a.canvas.width,a.canvas.height),c.reset(),u.reset(),h.reset()}return{buffers:{color:c,depth:u,stencil:h},enable:Te,disable:qe,bindFramebuffer:it,drawBuffers:et,useProgram:qt,setBlending:_t,setMaterial:rt,setFlipSided:Yt,setCullFace:zt,setLineWidth:Ht,setPolygonOffset:sn,setScissorTest:It,activeTexture:jt,bindTexture:j,unbindTexture:Dt,compressedTexImage2D:xt,compressedTexImage3D:U,texImage2D:he,texImage3D:me,pixelStorei:He,getParameter:De,updateUBOMapping:Ne,uniformBlockBinding:Ue,texStorage2D:Le,texStorage3D:Oe,texSubImage2D:b,texSubImage3D:J,compressedTexSubImage2D:re,compressedTexSubImage3D:pe,scissor:Ie,viewport:ge,reset:Ye}}function O2(a,e,i,r,o,c,u){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new Pt,g=new WeakMap,_=new Set;let v;const x=new WeakMap;let E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(U,b){return E?new OffscreenCanvas(U,b):mu("canvas")}function y(U,b,J){let re=1;const pe=xt(U);if((pe.width>J||pe.height>J)&&(re=J/Math.max(pe.width,pe.height)),re<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const Le=Math.floor(re*pe.width),Oe=Math.floor(re*pe.height);v===void 0&&(v=w(Le,Oe));const he=b?w(Le,Oe):v;return he.width=Le,he.height=Oe,he.getContext("2d").drawImage(U,0,0,Le,Oe),st("WebGLRenderer: Texture has been resized from ("+pe.width+"x"+pe.height+") to ("+Le+"x"+Oe+")."),he}else return"data"in U&&st("WebGLRenderer: Image in DataTexture is too big ("+pe.width+"x"+pe.height+")."),U;return U}function M(U){return U.generateMipmaps}function I(U){a.generateMipmap(U)}function z(U){return U.isWebGLCubeRenderTarget?a.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?a.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?a.TEXTURE_2D_ARRAY:a.TEXTURE_2D}function R(U,b,J,re,pe,Le=!1){if(U!==null){if(a[U]!==void 0)return a[U];st("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let Oe;re&&(Oe=e.get("EXT_texture_norm16"),Oe||st("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let he=b;if(b===a.RED&&(J===a.FLOAT&&(he=a.R32F),J===a.HALF_FLOAT&&(he=a.R16F),J===a.UNSIGNED_BYTE&&(he=a.R8),J===a.UNSIGNED_SHORT&&Oe&&(he=Oe.R16_EXT),J===a.SHORT&&Oe&&(he=Oe.R16_SNORM_EXT)),b===a.RED_INTEGER&&(J===a.UNSIGNED_BYTE&&(he=a.R8UI),J===a.UNSIGNED_SHORT&&(he=a.R16UI),J===a.UNSIGNED_INT&&(he=a.R32UI),J===a.BYTE&&(he=a.R8I),J===a.SHORT&&(he=a.R16I),J===a.INT&&(he=a.R32I)),b===a.RG&&(J===a.FLOAT&&(he=a.RG32F),J===a.HALF_FLOAT&&(he=a.RG16F),J===a.UNSIGNED_BYTE&&(he=a.RG8),J===a.UNSIGNED_SHORT&&Oe&&(he=Oe.RG16_EXT),J===a.SHORT&&Oe&&(he=Oe.RG16_SNORM_EXT)),b===a.RG_INTEGER&&(J===a.UNSIGNED_BYTE&&(he=a.RG8UI),J===a.UNSIGNED_SHORT&&(he=a.RG16UI),J===a.UNSIGNED_INT&&(he=a.RG32UI),J===a.BYTE&&(he=a.RG8I),J===a.SHORT&&(he=a.RG16I),J===a.INT&&(he=a.RG32I)),b===a.RGB_INTEGER&&(J===a.UNSIGNED_BYTE&&(he=a.RGB8UI),J===a.UNSIGNED_SHORT&&(he=a.RGB16UI),J===a.UNSIGNED_INT&&(he=a.RGB32UI),J===a.BYTE&&(he=a.RGB8I),J===a.SHORT&&(he=a.RGB16I),J===a.INT&&(he=a.RGB32I)),b===a.RGBA_INTEGER&&(J===a.UNSIGNED_BYTE&&(he=a.RGBA8UI),J===a.UNSIGNED_SHORT&&(he=a.RGBA16UI),J===a.UNSIGNED_INT&&(he=a.RGBA32UI),J===a.BYTE&&(he=a.RGBA8I),J===a.SHORT&&(he=a.RGBA16I),J===a.INT&&(he=a.RGBA32I)),b===a.RGB&&(J===a.UNSIGNED_SHORT&&Oe&&(he=Oe.RGB16_EXT),J===a.SHORT&&Oe&&(he=Oe.RGB16_SNORM_EXT),J===a.UNSIGNED_INT_5_9_9_9_REV&&(he=a.RGB9_E5),J===a.UNSIGNED_INT_10F_11F_11F_REV&&(he=a.R11F_G11F_B10F)),b===a.RGBA){const me=Le?hu:Ct.getTransfer(pe);J===a.FLOAT&&(he=a.RGBA32F),J===a.HALF_FLOAT&&(he=a.RGBA16F),J===a.UNSIGNED_BYTE&&(he=me===Wt?a.SRGB8_ALPHA8:a.RGBA8),J===a.UNSIGNED_SHORT&&Oe&&(he=Oe.RGBA16_EXT),J===a.SHORT&&Oe&&(he=Oe.RGBA16_SNORM_EXT),J===a.UNSIGNED_SHORT_4_4_4_4&&(he=a.RGBA4),J===a.UNSIGNED_SHORT_5_5_5_1&&(he=a.RGB5_A1)}return(he===a.R16F||he===a.R32F||he===a.RG16F||he===a.RG32F||he===a.RGBA16F||he===a.RGBA32F)&&e.get("EXT_color_buffer_float"),he}function O(U,b){let J;return U?b===null||b===ha||b===Sl?J=a.DEPTH24_STENCIL8:b===la?J=a.DEPTH32F_STENCIL8:b===xl&&(J=a.DEPTH24_STENCIL8,st("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===ha||b===Sl?J=a.DEPTH_COMPONENT24:b===la?J=a.DEPTH_COMPONENT32F:b===xl&&(J=a.DEPTH_COMPONENT16),J}function L(U,b){return M(U)===!0||U.isFramebufferTexture&&U.minFilter!==Bn&&U.minFilter!==An?Math.log2(Math.max(b.width,b.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?b.mipmaps.length:1}function B(U){const b=U.target;b.removeEventListener("dispose",B),N(b),b.isVideoTexture&&g.delete(b),b.isHTMLTexture&&_.delete(b)}function T(U){const b=U.target;b.removeEventListener("dispose",T),V(b)}function N(U){const b=r.get(U);if(b.__webglInit===void 0)return;const J=U.source,re=x.get(J);if(re){const pe=re[b.__cacheKey];pe.usedTimes--,pe.usedTimes===0&&X(U),Object.keys(re).length===0&&x.delete(J)}r.remove(U)}function X(U){const b=r.get(U);a.deleteTexture(b.__webglTexture);const J=U.source,re=x.get(J);delete re[b.__cacheKey],u.memory.textures--}function V(U){const b=r.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),r.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let re=0;re<6;re++){if(Array.isArray(b.__webglFramebuffer[re]))for(let pe=0;pe<b.__webglFramebuffer[re].length;pe++)a.deleteFramebuffer(b.__webglFramebuffer[re][pe]);else a.deleteFramebuffer(b.__webglFramebuffer[re]);b.__webglDepthbuffer&&a.deleteRenderbuffer(b.__webglDepthbuffer[re])}else{if(Array.isArray(b.__webglFramebuffer))for(let re=0;re<b.__webglFramebuffer.length;re++)a.deleteFramebuffer(b.__webglFramebuffer[re]);else a.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&a.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&a.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let re=0;re<b.__webglColorRenderbuffer.length;re++)b.__webglColorRenderbuffer[re]&&a.deleteRenderbuffer(b.__webglColorRenderbuffer[re]);b.__webglDepthRenderbuffer&&a.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const J=U.textures;for(let re=0,pe=J.length;re<pe;re++){const Le=r.get(J[re]);Le.__webglTexture&&(a.deleteTexture(Le.__webglTexture),u.memory.textures--),r.remove(J[re])}r.remove(U)}let Y=0;function ue(){Y=0}function fe(){return Y}function q(U){Y=U}function F(){const U=Y;return U>=o.maxTextures&&st("WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+o.maxTextures),Y+=1,U}function H(U){const b=[];return b.push(U.wrapS),b.push(U.wrapT),b.push(U.wrapR||0),b.push(U.magFilter),b.push(U.minFilter),b.push(U.anisotropy),b.push(U.internalFormat),b.push(U.format),b.push(U.type),b.push(U.generateMipmaps),b.push(U.premultiplyAlpha),b.push(U.flipY),b.push(U.unpackAlignment),b.push(U.colorSpace),b.join()}function $(U,b){const J=r.get(U);if(U.isVideoTexture&&j(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&J.__version!==U.version){const re=U.image;if(re===null)st("WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)st("WebGLRenderer: Texture marked for update but image is incomplete");else{qe(J,U,b);return}}else U.isExternalTexture&&(J.__webglTexture=U.sourceTexture?U.sourceTexture:null);i.bindTexture(a.TEXTURE_2D,J.__webglTexture,a.TEXTURE0+b)}function _e(U,b){const J=r.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&J.__version!==U.version){qe(J,U,b);return}else U.isExternalTexture&&(J.__webglTexture=U.sourceTexture?U.sourceTexture:null);i.bindTexture(a.TEXTURE_2D_ARRAY,J.__webglTexture,a.TEXTURE0+b)}function Me(U,b){const J=r.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&J.__version!==U.version){qe(J,U,b);return}i.bindTexture(a.TEXTURE_3D,J.__webglTexture,a.TEXTURE0+b)}function P(U,b){const J=r.get(U);if(U.isCubeDepthTexture!==!0&&U.version>0&&J.__version!==U.version){it(J,U,b);return}i.bindTexture(a.TEXTURE_CUBE_MAP,J.__webglTexture,a.TEXTURE0+b)}const K={[Nh]:a.REPEAT,[Ki]:a.CLAMP_TO_EDGE,[Uh]:a.MIRRORED_REPEAT},ye={[Bn]:a.NEAREST,[zy]:a.NEAREST_MIPMAP_NEAREST,[Oc]:a.NEAREST_MIPMAP_LINEAR,[An]:a.LINEAR,[zd]:a.LINEAR_MIPMAP_NEAREST,[As]:a.LINEAR_MIPMAP_LINEAR},Ce={[Vy]:a.NEVER,[Yy]:a.ALWAYS,[ky]:a.LESS,[yp]:a.LEQUAL,[Xy]:a.EQUAL,[Ep]:a.GEQUAL,[Wy]:a.GREATER,[qy]:a.NOTEQUAL};function ze(U,b){if(b.type===la&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===An||b.magFilter===zd||b.magFilter===Oc||b.magFilter===As||b.minFilter===An||b.minFilter===zd||b.minFilter===Oc||b.minFilter===As)&&st("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),a.texParameteri(U,a.TEXTURE_WRAP_S,K[b.wrapS]),a.texParameteri(U,a.TEXTURE_WRAP_T,K[b.wrapT]),(U===a.TEXTURE_3D||U===a.TEXTURE_2D_ARRAY)&&a.texParameteri(U,a.TEXTURE_WRAP_R,K[b.wrapR]),a.texParameteri(U,a.TEXTURE_MAG_FILTER,ye[b.magFilter]),a.texParameteri(U,a.TEXTURE_MIN_FILTER,ye[b.minFilter]),b.compareFunction&&(a.texParameteri(U,a.TEXTURE_COMPARE_MODE,a.COMPARE_REF_TO_TEXTURE),a.texParameteri(U,a.TEXTURE_COMPARE_FUNC,Ce[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Bn||b.minFilter!==Oc&&b.minFilter!==As||b.type===la&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||r.get(b).__currentAnisotropy){const J=e.get("EXT_texture_filter_anisotropic");a.texParameterf(U,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,o.getMaxAnisotropy())),r.get(b).__currentAnisotropy=b.anisotropy}}}function se(U,b){let J=!1;U.__webglInit===void 0&&(U.__webglInit=!0,b.addEventListener("dispose",B));const re=b.source;let pe=x.get(re);pe===void 0&&(pe={},x.set(re,pe));const Le=H(b);if(Le!==U.__cacheKey){pe[Le]===void 0&&(pe[Le]={texture:a.createTexture(),usedTimes:0},u.memory.textures++,J=!0),pe[Le].usedTimes++;const Oe=pe[U.__cacheKey];Oe!==void 0&&(pe[U.__cacheKey].usedTimes--,Oe.usedTimes===0&&X(b)),U.__cacheKey=Le,U.__webglTexture=pe[Le].texture}return J}function be(U,b,J){return Math.floor(Math.floor(U/J)/b)}function Te(U,b,J,re){const Le=U.updateRanges;if(Le.length===0)i.texSubImage2D(a.TEXTURE_2D,0,0,0,b.width,b.height,J,re,b.data);else{Le.sort((He,Ie)=>He.start-Ie.start);let Oe=0;for(let He=1;He<Le.length;He++){const Ie=Le[Oe],ge=Le[He],Ne=Ie.start+Ie.count,Ue=be(ge.start,b.width,4),Ye=be(Ie.start,b.width,4);ge.start<=Ne+1&&Ue===Ye&&be(ge.start+ge.count-1,b.width,4)===Ue?Ie.count=Math.max(Ie.count,ge.start+ge.count-Ie.start):(++Oe,Le[Oe]=ge)}Le.length=Oe+1;const he=i.getParameter(a.UNPACK_ROW_LENGTH),me=i.getParameter(a.UNPACK_SKIP_PIXELS),De=i.getParameter(a.UNPACK_SKIP_ROWS);i.pixelStorei(a.UNPACK_ROW_LENGTH,b.width);for(let He=0,Ie=Le.length;He<Ie;He++){const ge=Le[He],Ne=Math.floor(ge.start/4),Ue=Math.ceil(ge.count/4),Ye=Ne%b.width,k=Math.floor(Ne/b.width),Ae=Ue,ce=1;i.pixelStorei(a.UNPACK_SKIP_PIXELS,Ye),i.pixelStorei(a.UNPACK_SKIP_ROWS,k),i.texSubImage2D(a.TEXTURE_2D,0,Ye,k,Ae,ce,J,re,b.data)}U.clearUpdateRanges(),i.pixelStorei(a.UNPACK_ROW_LENGTH,he),i.pixelStorei(a.UNPACK_SKIP_PIXELS,me),i.pixelStorei(a.UNPACK_SKIP_ROWS,De)}}function qe(U,b,J){let re=a.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(re=a.TEXTURE_2D_ARRAY),b.isData3DTexture&&(re=a.TEXTURE_3D);const pe=se(U,b),Le=b.source;i.bindTexture(re,U.__webglTexture,a.TEXTURE0+J);const Oe=r.get(Le);if(Le.version!==Oe.__version||pe===!0){if(i.activeTexture(a.TEXTURE0+J),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){const ce=Ct.getPrimaries(Ct.workingColorSpace),Re=b.colorSpace===Ts?null:Ct.getPrimaries(b.colorSpace),we=b.colorSpace===Ts||ce===Re?a.NONE:a.BROWSER_DEFAULT_WEBGL;i.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,we)}i.pixelStorei(a.UNPACK_ALIGNMENT,b.unpackAlignment);let me=y(b.image,!1,o.maxTextureSize);me=Dt(b,me);const De=c.convert(b.format,b.colorSpace),He=c.convert(b.type);let Ie=R(b.internalFormat,De,He,b.normalized,b.colorSpace,b.isVideoTexture);ze(re,b);let ge;const Ne=b.mipmaps,Ue=b.isVideoTexture!==!0,Ye=Oe.__version===void 0||pe===!0,k=Le.dataReady,Ae=L(b,me);if(b.isDepthTexture)Ie=O(b.format===nr,b.type),Ye&&(Ue?i.texStorage2D(a.TEXTURE_2D,1,Ie,me.width,me.height):i.texImage2D(a.TEXTURE_2D,0,Ie,me.width,me.height,0,De,He,null));else if(b.isDataTexture)if(Ne.length>0){Ue&&Ye&&i.texStorage2D(a.TEXTURE_2D,Ae,Ie,Ne[0].width,Ne[0].height);for(let ce=0,Re=Ne.length;ce<Re;ce++)ge=Ne[ce],Ue?k&&i.texSubImage2D(a.TEXTURE_2D,ce,0,0,ge.width,ge.height,De,He,ge.data):i.texImage2D(a.TEXTURE_2D,ce,Ie,ge.width,ge.height,0,De,He,ge.data);b.generateMipmaps=!1}else Ue?(Ye&&i.texStorage2D(a.TEXTURE_2D,Ae,Ie,me.width,me.height),k&&Te(b,me,De,He)):i.texImage2D(a.TEXTURE_2D,0,Ie,me.width,me.height,0,De,He,me.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Ue&&Ye&&i.texStorage3D(a.TEXTURE_2D_ARRAY,Ae,Ie,Ne[0].width,Ne[0].height,me.depth);for(let ce=0,Re=Ne.length;ce<Re;ce++)if(ge=Ne[ce],b.format!==Qi)if(De!==null)if(Ue){if(k)if(b.layerUpdates.size>0){const we=sv(ge.width,ge.height,b.format,b.type);for(const xe of b.layerUpdates){const Ke=ge.data.subarray(xe*we/ge.data.BYTES_PER_ELEMENT,(xe+1)*we/ge.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,ce,0,0,xe,ge.width,ge.height,1,De,Ke)}b.clearLayerUpdates()}else i.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,ce,0,0,0,ge.width,ge.height,me.depth,De,ge.data)}else i.compressedTexImage3D(a.TEXTURE_2D_ARRAY,ce,Ie,ge.width,ge.height,me.depth,0,ge.data,0,0);else st("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ue?k&&i.texSubImage3D(a.TEXTURE_2D_ARRAY,ce,0,0,0,ge.width,ge.height,me.depth,De,He,ge.data):i.texImage3D(a.TEXTURE_2D_ARRAY,ce,Ie,ge.width,ge.height,me.depth,0,De,He,ge.data)}else{Ue&&Ye&&i.texStorage2D(a.TEXTURE_2D,Ae,Ie,Ne[0].width,Ne[0].height);for(let ce=0,Re=Ne.length;ce<Re;ce++)ge=Ne[ce],b.format!==Qi?De!==null?Ue?k&&i.compressedTexSubImage2D(a.TEXTURE_2D,ce,0,0,ge.width,ge.height,De,ge.data):i.compressedTexImage2D(a.TEXTURE_2D,ce,Ie,ge.width,ge.height,0,ge.data):st("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ue?k&&i.texSubImage2D(a.TEXTURE_2D,ce,0,0,ge.width,ge.height,De,He,ge.data):i.texImage2D(a.TEXTURE_2D,ce,Ie,ge.width,ge.height,0,De,He,ge.data)}else if(b.isDataArrayTexture)if(Ue){if(Ye&&i.texStorage3D(a.TEXTURE_2D_ARRAY,Ae,Ie,me.width,me.height,me.depth),k)if(b.layerUpdates.size>0){const ce=sv(me.width,me.height,b.format,b.type);for(const Re of b.layerUpdates){const we=me.data.subarray(Re*ce/me.data.BYTES_PER_ELEMENT,(Re+1)*ce/me.data.BYTES_PER_ELEMENT);i.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,Re,me.width,me.height,1,De,He,we)}b.clearLayerUpdates()}else i.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,me.width,me.height,me.depth,De,He,me.data)}else i.texImage3D(a.TEXTURE_2D_ARRAY,0,Ie,me.width,me.height,me.depth,0,De,He,me.data);else if(b.isData3DTexture)Ue?(Ye&&i.texStorage3D(a.TEXTURE_3D,Ae,Ie,me.width,me.height,me.depth),k&&i.texSubImage3D(a.TEXTURE_3D,0,0,0,0,me.width,me.height,me.depth,De,He,me.data)):i.texImage3D(a.TEXTURE_3D,0,Ie,me.width,me.height,me.depth,0,De,He,me.data);else if(b.isFramebufferTexture){if(Ye)if(Ue)i.texStorage2D(a.TEXTURE_2D,Ae,Ie,me.width,me.height);else{let ce=me.width,Re=me.height;for(let we=0;we<Ae;we++)i.texImage2D(a.TEXTURE_2D,we,Ie,ce,Re,0,De,He,null),ce>>=1,Re>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in a){const ce=a.canvas;if(ce.hasAttribute("layoutsubtree")||ce.setAttribute("layoutsubtree","true"),me.parentNode!==ce){ce.appendChild(me),_.add(b),ce.onpaint=Re=>{const we=Re.changedElements;for(const xe of _)we.includes(xe.image)&&(xe.needsUpdate=!0)},ce.requestPaint();return}if(a.texElementImage2D.length===3)a.texElementImage2D(a.TEXTURE_2D,a.RGBA8,me);else{const we=a.RGBA,xe=a.RGBA,Ke=a.UNSIGNED_BYTE;a.texElementImage2D(a.TEXTURE_2D,0,we,xe,Ke,me)}a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MIN_FILTER,a.LINEAR),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE)}}else if(Ne.length>0){if(Ue&&Ye){const ce=xt(Ne[0]);i.texStorage2D(a.TEXTURE_2D,Ae,Ie,ce.width,ce.height)}for(let ce=0,Re=Ne.length;ce<Re;ce++)ge=Ne[ce],Ue?k&&i.texSubImage2D(a.TEXTURE_2D,ce,0,0,De,He,ge):i.texImage2D(a.TEXTURE_2D,ce,Ie,De,He,ge);b.generateMipmaps=!1}else if(Ue){if(Ye){const ce=xt(me);i.texStorage2D(a.TEXTURE_2D,Ae,Ie,ce.width,ce.height)}k&&i.texSubImage2D(a.TEXTURE_2D,0,0,0,De,He,me)}else i.texImage2D(a.TEXTURE_2D,0,Ie,De,He,me);M(b)&&I(re),Oe.__version=Le.version,b.onUpdate&&b.onUpdate(b)}U.__version=b.version}function it(U,b,J){if(b.image.length!==6)return;const re=se(U,b),pe=b.source;i.bindTexture(a.TEXTURE_CUBE_MAP,U.__webglTexture,a.TEXTURE0+J);const Le=r.get(pe);if(pe.version!==Le.__version||re===!0){i.activeTexture(a.TEXTURE0+J);const Oe=Ct.getPrimaries(Ct.workingColorSpace),he=b.colorSpace===Ts?null:Ct.getPrimaries(b.colorSpace),me=b.colorSpace===Ts||Oe===he?a.NONE:a.BROWSER_DEFAULT_WEBGL;i.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(a.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);const De=b.isCompressedTexture||b.image[0].isCompressedTexture,He=b.image[0]&&b.image[0].isDataTexture,Ie=[];for(let xe=0;xe<6;xe++)!De&&!He?Ie[xe]=y(b.image[xe],!0,o.maxCubemapSize):Ie[xe]=He?b.image[xe].image:b.image[xe],Ie[xe]=Dt(b,Ie[xe]);const ge=Ie[0],Ne=c.convert(b.format,b.colorSpace),Ue=c.convert(b.type),Ye=R(b.internalFormat,Ne,Ue,b.normalized,b.colorSpace),k=b.isVideoTexture!==!0,Ae=Le.__version===void 0||re===!0,ce=pe.dataReady;let Re=L(b,ge);ze(a.TEXTURE_CUBE_MAP,b);let we;if(De){k&&Ae&&i.texStorage2D(a.TEXTURE_CUBE_MAP,Re,Ye,ge.width,ge.height);for(let xe=0;xe<6;xe++){we=Ie[xe].mipmaps;for(let Ke=0;Ke<we.length;Ke++){const Ge=we[Ke];b.format!==Qi?Ne!==null?k?ce&&i.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ke,0,0,Ge.width,Ge.height,Ne,Ge.data):i.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ke,Ye,Ge.width,Ge.height,0,Ge.data):st("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?ce&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ke,0,0,Ge.width,Ge.height,Ne,Ue,Ge.data):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ke,Ye,Ge.width,Ge.height,0,Ne,Ue,Ge.data)}}}else{if(we=b.mipmaps,k&&Ae){we.length>0&&Re++;const xe=xt(Ie[0]);i.texStorage2D(a.TEXTURE_CUBE_MAP,Re,Ye,xe.width,xe.height)}for(let xe=0;xe<6;xe++)if(He){k?ce&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,Ie[xe].width,Ie[xe].height,Ne,Ue,Ie[xe].data):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,Ye,Ie[xe].width,Ie[xe].height,0,Ne,Ue,Ie[xe].data);for(let Ke=0;Ke<we.length;Ke++){const Ft=we[Ke].image[xe].image;k?ce&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ke+1,0,0,Ft.width,Ft.height,Ne,Ue,Ft.data):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ke+1,Ye,Ft.width,Ft.height,0,Ne,Ue,Ft.data)}}else{k?ce&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,Ne,Ue,Ie[xe]):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,Ye,Ne,Ue,Ie[xe]);for(let Ke=0;Ke<we.length;Ke++){const Ge=we[Ke];k?ce&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ke+1,0,0,Ne,Ue,Ge.image[xe]):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ke+1,Ye,Ne,Ue,Ge.image[xe])}}}M(b)&&I(a.TEXTURE_CUBE_MAP),Le.__version=pe.version,b.onUpdate&&b.onUpdate(b)}U.__version=b.version}function et(U,b,J,re,pe,Le){const Oe=c.convert(J.format,J.colorSpace),he=c.convert(J.type),me=R(J.internalFormat,Oe,he,J.normalized,J.colorSpace),De=r.get(b),He=r.get(J);if(He.__renderTarget=b,!De.__hasExternalTextures){const Ie=Math.max(1,b.width>>Le),ge=Math.max(1,b.height>>Le);pe===a.TEXTURE_3D||pe===a.TEXTURE_2D_ARRAY?i.texImage3D(pe,Le,me,Ie,ge,b.depth,0,Oe,he,null):i.texImage2D(pe,Le,me,Ie,ge,0,Oe,he,null)}i.bindFramebuffer(a.FRAMEBUFFER,U),jt(b)?h.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,re,pe,He.__webglTexture,0,It(b)):(pe===a.TEXTURE_2D||pe>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&pe<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&a.framebufferTexture2D(a.FRAMEBUFFER,re,pe,He.__webglTexture,Le),i.bindFramebuffer(a.FRAMEBUFFER,null)}function qt(U,b,J){if(a.bindRenderbuffer(a.RENDERBUFFER,U),b.depthBuffer){const re=b.depthTexture,pe=re&&re.isDepthTexture?re.type:null,Le=O(b.stencilBuffer,pe),Oe=b.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;jt(b)?h.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,It(b),Le,b.width,b.height):J?a.renderbufferStorageMultisample(a.RENDERBUFFER,It(b),Le,b.width,b.height):a.renderbufferStorage(a.RENDERBUFFER,Le,b.width,b.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,Oe,a.RENDERBUFFER,U)}else{const re=b.textures;for(let pe=0;pe<re.length;pe++){const Le=re[pe],Oe=c.convert(Le.format,Le.colorSpace),he=c.convert(Le.type),me=R(Le.internalFormat,Oe,he,Le.normalized,Le.colorSpace);jt(b)?h.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,It(b),me,b.width,b.height):J?a.renderbufferStorageMultisample(a.RENDERBUFFER,It(b),me,b.width,b.height):a.renderbufferStorage(a.RENDERBUFFER,me,b.width,b.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function lt(U,b,J){const re=b.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(a.FRAMEBUFFER,U),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const pe=r.get(b.depthTexture);if(pe.__renderTarget=b,(!pe.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),re){if(pe.__webglInit===void 0&&(pe.__webglInit=!0,b.depthTexture.addEventListener("dispose",B)),pe.__webglTexture===void 0){pe.__webglTexture=a.createTexture(),i.bindTexture(a.TEXTURE_CUBE_MAP,pe.__webglTexture),ze(a.TEXTURE_CUBE_MAP,b.depthTexture);const De=c.convert(b.depthTexture.format),He=c.convert(b.depthTexture.type);let Ie;b.depthTexture.format===Xa?Ie=a.DEPTH_COMPONENT24:b.depthTexture.format===nr&&(Ie=a.DEPTH24_STENCIL8);for(let ge=0;ge<6;ge++)a.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,Ie,b.width,b.height,0,De,He,null)}}else $(b.depthTexture,0);const Le=pe.__webglTexture,Oe=It(b),he=re?a.TEXTURE_CUBE_MAP_POSITIVE_X+J:a.TEXTURE_2D,me=b.depthTexture.format===nr?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;if(b.depthTexture.format===Xa)jt(b)?h.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,me,he,Le,0,Oe):a.framebufferTexture2D(a.FRAMEBUFFER,me,he,Le,0);else if(b.depthTexture.format===nr)jt(b)?h.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,me,he,Le,0,Oe):a.framebufferTexture2D(a.FRAMEBUFFER,me,he,Le,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function gt(U){const b=r.get(U),J=U.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==U.depthTexture){const re=U.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),re){const pe=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,re.removeEventListener("dispose",pe)};re.addEventListener("dispose",pe),b.__depthDisposeCallback=pe}b.__boundDepthTexture=re}if(U.depthTexture&&!b.__autoAllocateDepthBuffer)if(J)for(let re=0;re<6;re++)lt(b.__webglFramebuffer[re],U,re);else{const re=U.texture.mipmaps;re&&re.length>0?lt(b.__webglFramebuffer[0],U,0):lt(b.__webglFramebuffer,U,0)}else if(J){b.__webglDepthbuffer=[];for(let re=0;re<6;re++)if(i.bindFramebuffer(a.FRAMEBUFFER,b.__webglFramebuffer[re]),b.__webglDepthbuffer[re]===void 0)b.__webglDepthbuffer[re]=a.createRenderbuffer(),qt(b.__webglDepthbuffer[re],U,!1);else{const pe=U.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Le=b.__webglDepthbuffer[re];a.bindRenderbuffer(a.RENDERBUFFER,Le),a.framebufferRenderbuffer(a.FRAMEBUFFER,pe,a.RENDERBUFFER,Le)}}else{const re=U.texture.mipmaps;if(re&&re.length>0?i.bindFramebuffer(a.FRAMEBUFFER,b.__webglFramebuffer[0]):i.bindFramebuffer(a.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=a.createRenderbuffer(),qt(b.__webglDepthbuffer,U,!1);else{const pe=U.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Le=b.__webglDepthbuffer;a.bindRenderbuffer(a.RENDERBUFFER,Le),a.framebufferRenderbuffer(a.FRAMEBUFFER,pe,a.RENDERBUFFER,Le)}}i.bindFramebuffer(a.FRAMEBUFFER,null)}function _t(U,b,J){const re=r.get(U);b!==void 0&&et(re.__webglFramebuffer,U,U.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,0),J!==void 0&&gt(U)}function rt(U){const b=U.texture,J=r.get(U),re=r.get(b);U.addEventListener("dispose",T);const pe=U.textures,Le=U.isWebGLCubeRenderTarget===!0,Oe=pe.length>1;if(Oe||(re.__webglTexture===void 0&&(re.__webglTexture=a.createTexture()),re.__version=b.version,u.memory.textures++),Le){J.__webglFramebuffer=[];for(let he=0;he<6;he++)if(b.mipmaps&&b.mipmaps.length>0){J.__webglFramebuffer[he]=[];for(let me=0;me<b.mipmaps.length;me++)J.__webglFramebuffer[he][me]=a.createFramebuffer()}else J.__webglFramebuffer[he]=a.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){J.__webglFramebuffer=[];for(let he=0;he<b.mipmaps.length;he++)J.__webglFramebuffer[he]=a.createFramebuffer()}else J.__webglFramebuffer=a.createFramebuffer();if(Oe)for(let he=0,me=pe.length;he<me;he++){const De=r.get(pe[he]);De.__webglTexture===void 0&&(De.__webglTexture=a.createTexture(),u.memory.textures++)}if(U.samples>0&&jt(U)===!1){J.__webglMultisampledFramebuffer=a.createFramebuffer(),J.__webglColorRenderbuffer=[],i.bindFramebuffer(a.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let he=0;he<pe.length;he++){const me=pe[he];J.__webglColorRenderbuffer[he]=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,J.__webglColorRenderbuffer[he]);const De=c.convert(me.format,me.colorSpace),He=c.convert(me.type),Ie=R(me.internalFormat,De,He,me.normalized,me.colorSpace,U.isXRRenderTarget===!0),ge=It(U);a.renderbufferStorageMultisample(a.RENDERBUFFER,ge,Ie,U.width,U.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+he,a.RENDERBUFFER,J.__webglColorRenderbuffer[he])}a.bindRenderbuffer(a.RENDERBUFFER,null),U.depthBuffer&&(J.__webglDepthRenderbuffer=a.createRenderbuffer(),qt(J.__webglDepthRenderbuffer,U,!0)),i.bindFramebuffer(a.FRAMEBUFFER,null)}}if(Le){i.bindTexture(a.TEXTURE_CUBE_MAP,re.__webglTexture),ze(a.TEXTURE_CUBE_MAP,b);for(let he=0;he<6;he++)if(b.mipmaps&&b.mipmaps.length>0)for(let me=0;me<b.mipmaps.length;me++)et(J.__webglFramebuffer[he][me],U,b,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+he,me);else et(J.__webglFramebuffer[he],U,b,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);M(b)&&I(a.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Oe){for(let he=0,me=pe.length;he<me;he++){const De=pe[he],He=r.get(De);let Ie=a.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Ie=U.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),i.bindTexture(Ie,He.__webglTexture),ze(Ie,De),et(J.__webglFramebuffer,U,De,a.COLOR_ATTACHMENT0+he,Ie,0),M(De)&&I(Ie)}i.unbindTexture()}else{let he=a.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(he=U.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),i.bindTexture(he,re.__webglTexture),ze(he,b),b.mipmaps&&b.mipmaps.length>0)for(let me=0;me<b.mipmaps.length;me++)et(J.__webglFramebuffer[me],U,b,a.COLOR_ATTACHMENT0,he,me);else et(J.__webglFramebuffer,U,b,a.COLOR_ATTACHMENT0,he,0);M(b)&&I(he),i.unbindTexture()}U.depthBuffer&&gt(U)}function Yt(U){const b=U.textures;for(let J=0,re=b.length;J<re;J++){const pe=b[J];if(M(pe)){const Le=z(U),Oe=r.get(pe).__webglTexture;i.bindTexture(Le,Oe),I(Le),i.unbindTexture()}}}const zt=[],Ht=[];function sn(U){if(U.samples>0){if(jt(U)===!1){const b=U.textures,J=U.width,re=U.height;let pe=a.COLOR_BUFFER_BIT;const Le=U.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Oe=r.get(U),he=b.length>1;if(he)for(let De=0;De<b.length;De++)i.bindFramebuffer(a.FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+De,a.RENDERBUFFER,null),i.bindFramebuffer(a.FRAMEBUFFER,Oe.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+De,a.TEXTURE_2D,null,0);i.bindFramebuffer(a.READ_FRAMEBUFFER,Oe.__webglMultisampledFramebuffer);const me=U.texture.mipmaps;me&&me.length>0?i.bindFramebuffer(a.DRAW_FRAMEBUFFER,Oe.__webglFramebuffer[0]):i.bindFramebuffer(a.DRAW_FRAMEBUFFER,Oe.__webglFramebuffer);for(let De=0;De<b.length;De++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(pe|=a.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(pe|=a.STENCIL_BUFFER_BIT)),he){a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,Oe.__webglColorRenderbuffer[De]);const He=r.get(b[De]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,He,0)}a.blitFramebuffer(0,0,J,re,0,0,J,re,pe,a.NEAREST),m===!0&&(zt.length=0,Ht.length=0,zt.push(a.COLOR_ATTACHMENT0+De),U.depthBuffer&&U.resolveDepthBuffer===!1&&(zt.push(Le),Ht.push(Le),a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,Ht)),a.invalidateFramebuffer(a.READ_FRAMEBUFFER,zt))}if(i.bindFramebuffer(a.READ_FRAMEBUFFER,null),i.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),he)for(let De=0;De<b.length;De++){i.bindFramebuffer(a.FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+De,a.RENDERBUFFER,Oe.__webglColorRenderbuffer[De]);const He=r.get(b[De]).__webglTexture;i.bindFramebuffer(a.FRAMEBUFFER,Oe.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+De,a.TEXTURE_2D,He,0)}i.bindFramebuffer(a.DRAW_FRAMEBUFFER,Oe.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&m){const b=U.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[b])}}}function It(U){return Math.min(o.maxSamples,U.samples)}function jt(U){const b=r.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function j(U){const b=u.render.frame;g.get(U)!==b&&(g.set(U,b),U.update())}function Dt(U,b){const J=U.colorSpace,re=U.format,pe=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||J!==du&&J!==Ts&&(Ct.getTransfer(J)===Wt?(re!==Qi||pe!==Ui)&&st("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Nt("WebGLTextures: Unsupported texture color space:",J)),b}function xt(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(d.width=U.naturalWidth||U.width,d.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(d.width=U.displayWidth,d.height=U.displayHeight):(d.width=U.width,d.height=U.height),d}this.allocateTextureUnit=F,this.resetTextureUnits=ue,this.getTextureUnits=fe,this.setTextureUnits=q,this.setTexture2D=$,this.setTexture2DArray=_e,this.setTexture3D=Me,this.setTextureCube=P,this.rebindTextures=_t,this.setupRenderTarget=rt,this.updateRenderTargetMipmap=Yt,this.updateMultisampleRenderTarget=sn,this.setupDepthRenderbuffer=gt,this.setupFrameBufferTexture=et,this.useMultisampledRTT=jt,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function P2(a,e){function i(r,o=Ts){let c;const u=Ct.getTransfer(o);if(r===Ui)return a.UNSIGNED_BYTE;if(r===_p)return a.UNSIGNED_SHORT_4_4_4_4;if(r===vp)return a.UNSIGNED_SHORT_5_5_5_1;if(r===ux)return a.UNSIGNED_INT_5_9_9_9_REV;if(r===fx)return a.UNSIGNED_INT_10F_11F_11F_REV;if(r===lx)return a.BYTE;if(r===cx)return a.SHORT;if(r===xl)return a.UNSIGNED_SHORT;if(r===gp)return a.INT;if(r===ha)return a.UNSIGNED_INT;if(r===la)return a.FLOAT;if(r===ka)return a.HALF_FLOAT;if(r===dx)return a.ALPHA;if(r===hx)return a.RGB;if(r===Qi)return a.RGBA;if(r===Xa)return a.DEPTH_COMPONENT;if(r===nr)return a.DEPTH_STENCIL;if(r===px)return a.RED;if(r===xp)return a.RED_INTEGER;if(r===sr)return a.RG;if(r===Sp)return a.RG_INTEGER;if(r===Mp)return a.RGBA_INTEGER;if(r===au||r===su||r===ru||r===ou)if(u===Wt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===au)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===su)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===ru)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===ou)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===au)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===su)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===ru)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===ou)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Oh||r===Ph||r===Ih||r===Fh)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===Oh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Ph)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Ih)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Fh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Bh||r===zh||r===Hh||r===Gh||r===Vh||r===uu||r===kh)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===Bh||r===zh)return u===Wt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===Hh)return u===Wt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(r===Gh)return c.COMPRESSED_R11_EAC;if(r===Vh)return c.COMPRESSED_SIGNED_R11_EAC;if(r===uu)return c.COMPRESSED_RG11_EAC;if(r===kh)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===Xh||r===Wh||r===qh||r===Yh||r===jh||r===Zh||r===Kh||r===Qh||r===Jh||r===$h||r===ep||r===tp||r===np||r===ip)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===Xh)return u===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Wh)return u===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===qh)return u===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Yh)return u===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===jh)return u===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Zh)return u===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Kh)return u===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Qh)return u===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Jh)return u===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===$h)return u===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===ep)return u===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===tp)return u===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===np)return u===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===ip)return u===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===ap||r===sp||r===rp)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===ap)return u===Wt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===sp)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===rp)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===op||r===lp||r===fu||r===cp)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===op)return c.COMPRESSED_RED_RGTC1_EXT;if(r===lp)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===fu)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===cp)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Sl?a.UNSIGNED_INT_24_8:a[r]!==void 0?a[r]:null}return{convert:i}}const I2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,F2=`
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

}`;class B2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const r=new bx(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new Fi({vertexShader:I2,fragmentShader:F2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Pi(new ir(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class z2 extends or{constructor(e,i){super();const r=this;let o=null,c=1,u=null,h="local-floor",m=1,d=null,g=null,_=null,v=null,x=null,E=null;const w=typeof XRWebGLBinding<"u",y=new B2,M={},I=i.getContextAttributes();let z=null,R=null;const O=[],L=[],B=new Pt;let T=null;const N=new Ni;N.viewport=new mn;const X=new Ni;X.viewport=new mn;const V=[N,X],Y=new ZE;let ue=null,fe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(se){let be=O[se];return be===void 0&&(be=new Wd,O[se]=be),be.getTargetRaySpace()},this.getControllerGrip=function(se){let be=O[se];return be===void 0&&(be=new Wd,O[se]=be),be.getGripSpace()},this.getHand=function(se){let be=O[se];return be===void 0&&(be=new Wd,O[se]=be),be.getHandSpace()};function q(se){const be=L.indexOf(se.inputSource);if(be===-1)return;const Te=O[be];Te!==void 0&&(Te.update(se.inputSource,se.frame,d||u),Te.dispatchEvent({type:se.type,data:se.inputSource}))}function F(){o.removeEventListener("select",q),o.removeEventListener("selectstart",q),o.removeEventListener("selectend",q),o.removeEventListener("squeeze",q),o.removeEventListener("squeezestart",q),o.removeEventListener("squeezeend",q),o.removeEventListener("end",F),o.removeEventListener("inputsourceschange",H);for(let se=0;se<O.length;se++){const be=L[se];be!==null&&(L[se]=null,O[se].disconnect(be))}ue=null,fe=null,y.reset();for(const se in M)delete M[se];e.setRenderTarget(z),x=null,v=null,_=null,o=null,R=null,ze.stop(),r.isPresenting=!1,e.setPixelRatio(T),e.setSize(B.width,B.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(se){c=se,r.isPresenting===!0&&st("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(se){h=se,r.isPresenting===!0&&st("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||u},this.setReferenceSpace=function(se){d=se},this.getBaseLayer=function(){return v!==null?v:x},this.getBinding=function(){return _===null&&w&&(_=new XRWebGLBinding(o,i)),_},this.getFrame=function(){return E},this.getSession=function(){return o},this.setSession=async function(se){if(o=se,o!==null){if(z=e.getRenderTarget(),o.addEventListener("select",q),o.addEventListener("selectstart",q),o.addEventListener("selectend",q),o.addEventListener("squeeze",q),o.addEventListener("squeezestart",q),o.addEventListener("squeezeend",q),o.addEventListener("end",F),o.addEventListener("inputsourceschange",H),I.xrCompatible!==!0&&await i.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(B),w&&"createProjectionLayer"in XRWebGLBinding.prototype){let Te=null,qe=null,it=null;I.depth&&(it=I.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Te=I.stencil?nr:Xa,qe=I.stencil?Sl:ha);const et={colorFormat:i.RGBA8,depthFormat:it,scaleFactor:c};_=this.getBinding(),v=_.createProjectionLayer(et),o.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),R=new fa(v.textureWidth,v.textureHeight,{format:Qi,type:Ui,depthTexture:new uo(v.textureWidth,v.textureHeight,qe,void 0,void 0,void 0,void 0,void 0,void 0,Te),stencilBuffer:I.stencil,colorSpace:e.outputColorSpace,samples:I.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const Te={antialias:I.antialias,alpha:!0,depth:I.depth,stencil:I.stencil,framebufferScaleFactor:c};x=new XRWebGLLayer(o,i,Te),o.updateRenderState({baseLayer:x}),e.setPixelRatio(1),e.setSize(x.framebufferWidth,x.framebufferHeight,!1),R=new fa(x.framebufferWidth,x.framebufferHeight,{format:Qi,type:Ui,colorSpace:e.outputColorSpace,stencilBuffer:I.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}R.isXRRenderTarget=!0,this.setFoveation(m),d=null,u=await o.requestReferenceSpace(h),ze.setContext(o),ze.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function H(se){for(let be=0;be<se.removed.length;be++){const Te=se.removed[be],qe=L.indexOf(Te);qe>=0&&(L[qe]=null,O[qe].disconnect(Te))}for(let be=0;be<se.added.length;be++){const Te=se.added[be];let qe=L.indexOf(Te);if(qe===-1){for(let et=0;et<O.length;et++)if(et>=L.length){L.push(Te),qe=et;break}else if(L[et]===null){L[et]=Te,qe=et;break}if(qe===-1)break}const it=O[qe];it&&it.connect(Te)}}const $=new ee,_e=new ee;function Me(se,be,Te){$.setFromMatrixPosition(be.matrixWorld),_e.setFromMatrixPosition(Te.matrixWorld);const qe=$.distanceTo(_e),it=be.projectionMatrix.elements,et=Te.projectionMatrix.elements,qt=it[14]/(it[10]-1),lt=it[14]/(it[10]+1),gt=(it[9]+1)/it[5],_t=(it[9]-1)/it[5],rt=(it[8]-1)/it[0],Yt=(et[8]+1)/et[0],zt=qt*rt,Ht=qt*Yt,sn=qe/(-rt+Yt),It=sn*-rt;if(be.matrixWorld.decompose(se.position,se.quaternion,se.scale),se.translateX(It),se.translateZ(sn),se.matrixWorld.compose(se.position,se.quaternion,se.scale),se.matrixWorldInverse.copy(se.matrixWorld).invert(),it[10]===-1)se.projectionMatrix.copy(be.projectionMatrix),se.projectionMatrixInverse.copy(be.projectionMatrixInverse);else{const jt=qt+sn,j=lt+sn,Dt=zt-It,xt=Ht+(qe-It),U=gt*lt/j*jt,b=_t*lt/j*jt;se.projectionMatrix.makePerspective(Dt,xt,U,b,jt,j),se.projectionMatrixInverse.copy(se.projectionMatrix).invert()}}function P(se,be){be===null?se.matrixWorld.copy(se.matrix):se.matrixWorld.multiplyMatrices(be.matrixWorld,se.matrix),se.matrixWorldInverse.copy(se.matrixWorld).invert()}this.updateCamera=function(se){if(o===null)return;let be=se.near,Te=se.far;y.texture!==null&&(y.depthNear>0&&(be=y.depthNear),y.depthFar>0&&(Te=y.depthFar)),Y.near=X.near=N.near=be,Y.far=X.far=N.far=Te,(ue!==Y.near||fe!==Y.far)&&(o.updateRenderState({depthNear:Y.near,depthFar:Y.far}),ue=Y.near,fe=Y.far),Y.layers.mask=se.layers.mask|6,N.layers.mask=Y.layers.mask&-5,X.layers.mask=Y.layers.mask&-3;const qe=se.parent,it=Y.cameras;P(Y,qe);for(let et=0;et<it.length;et++)P(it[et],qe);it.length===2?Me(Y,N,X):Y.projectionMatrix.copy(N.projectionMatrix),K(se,Y,qe)};function K(se,be,Te){Te===null?se.matrix.copy(be.matrixWorld):(se.matrix.copy(Te.matrixWorld),se.matrix.invert(),se.matrix.multiply(be.matrixWorld)),se.matrix.decompose(se.position,se.quaternion,se.scale),se.updateMatrixWorld(!0),se.projectionMatrix.copy(be.projectionMatrix),se.projectionMatrixInverse.copy(be.projectionMatrixInverse),se.isPerspectiveCamera&&(se.fov=Ml*2*Math.atan(1/se.projectionMatrix.elements[5]),se.zoom=1)}this.getCamera=function(){return Y},this.getFoveation=function(){if(!(v===null&&x===null))return m},this.setFoveation=function(se){m=se,v!==null&&(v.fixedFoveation=se),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=se)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(Y)},this.getCameraTexture=function(se){return M[se]};let ye=null;function Ce(se,be){if(g=be.getViewerPose(d||u),E=be,g!==null){const Te=g.views;x!==null&&(e.setRenderTargetFramebuffer(R,x.framebuffer),e.setRenderTarget(R));let qe=!1;Te.length!==Y.cameras.length&&(Y.cameras.length=0,qe=!0);for(let lt=0;lt<Te.length;lt++){const gt=Te[lt];let _t=null;if(x!==null)_t=x.getViewport(gt);else{const Yt=_.getViewSubImage(v,gt);_t=Yt.viewport,lt===0&&(e.setRenderTargetTextures(R,Yt.colorTexture,Yt.depthStencilTexture),e.setRenderTarget(R))}let rt=V[lt];rt===void 0&&(rt=new Ni,rt.layers.enable(lt),rt.viewport=new mn,V[lt]=rt),rt.matrix.fromArray(gt.transform.matrix),rt.matrix.decompose(rt.position,rt.quaternion,rt.scale),rt.projectionMatrix.fromArray(gt.projectionMatrix),rt.projectionMatrixInverse.copy(rt.projectionMatrix).invert(),rt.viewport.set(_t.x,_t.y,_t.width,_t.height),lt===0&&(Y.matrix.copy(rt.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale)),qe===!0&&Y.cameras.push(rt)}const it=o.enabledFeatures;if(it&&it.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&w){_=r.getBinding();const lt=_.getDepthInformation(Te[0]);lt&&lt.isValid&&lt.texture&&y.init(lt,o.renderState)}if(it&&it.includes("camera-access")&&w){e.state.unbindTexture(),_=r.getBinding();for(let lt=0;lt<Te.length;lt++){const gt=Te[lt].camera;if(gt){let _t=M[gt];_t||(_t=new bx,M[gt]=_t);const rt=_.getCameraImage(gt);_t.sourceTexture=rt}}}}for(let Te=0;Te<O.length;Te++){const qe=L[Te],it=O[Te];qe!==null&&it!==void 0&&it.update(qe,be,d||u)}ye&&ye(se,be),be.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:be}),E=null}const ze=new Cx;ze.setAnimationLoop(Ce),this.setAnimationLoop=function(se){ye=se},this.dispose=function(){}}}const H2=new xn,Px=new ut;Px.set(-1,0,0,0,1,0,0,0,1);function G2(a,e){function i(y,M){y.matrixAutoUpdate===!0&&y.updateMatrix(),M.value.copy(y.matrix)}function r(y,M){M.color.getRGB(y.fogColor.value,Tx(a)),M.isFog?(y.fogNear.value=M.near,y.fogFar.value=M.far):M.isFogExp2&&(y.fogDensity.value=M.density)}function o(y,M,I,z,R){M.isNodeMaterial?M.uniformsNeedUpdate=!1:M.isMeshBasicMaterial?c(y,M):M.isMeshLambertMaterial?(c(y,M),M.envMap&&(y.envMapIntensity.value=M.envMapIntensity)):M.isMeshToonMaterial?(c(y,M),_(y,M)):M.isMeshPhongMaterial?(c(y,M),g(y,M),M.envMap&&(y.envMapIntensity.value=M.envMapIntensity)):M.isMeshStandardMaterial?(c(y,M),v(y,M),M.isMeshPhysicalMaterial&&x(y,M,R)):M.isMeshMatcapMaterial?(c(y,M),E(y,M)):M.isMeshDepthMaterial?c(y,M):M.isMeshDistanceMaterial?(c(y,M),w(y,M)):M.isMeshNormalMaterial?c(y,M):M.isLineBasicMaterial?(u(y,M),M.isLineDashedMaterial&&h(y,M)):M.isPointsMaterial?m(y,M,I,z):M.isSpriteMaterial?d(y,M):M.isShadowMaterial?(y.color.value.copy(M.color),y.opacity.value=M.opacity):M.isShaderMaterial&&(M.uniformsNeedUpdate=!1)}function c(y,M){y.opacity.value=M.opacity,M.color&&y.diffuse.value.copy(M.color),M.emissive&&y.emissive.value.copy(M.emissive).multiplyScalar(M.emissiveIntensity),M.map&&(y.map.value=M.map,i(M.map,y.mapTransform)),M.alphaMap&&(y.alphaMap.value=M.alphaMap,i(M.alphaMap,y.alphaMapTransform)),M.bumpMap&&(y.bumpMap.value=M.bumpMap,i(M.bumpMap,y.bumpMapTransform),y.bumpScale.value=M.bumpScale,M.side===oi&&(y.bumpScale.value*=-1)),M.normalMap&&(y.normalMap.value=M.normalMap,i(M.normalMap,y.normalMapTransform),y.normalScale.value.copy(M.normalScale),M.side===oi&&y.normalScale.value.negate()),M.displacementMap&&(y.displacementMap.value=M.displacementMap,i(M.displacementMap,y.displacementMapTransform),y.displacementScale.value=M.displacementScale,y.displacementBias.value=M.displacementBias),M.emissiveMap&&(y.emissiveMap.value=M.emissiveMap,i(M.emissiveMap,y.emissiveMapTransform)),M.specularMap&&(y.specularMap.value=M.specularMap,i(M.specularMap,y.specularMapTransform)),M.alphaTest>0&&(y.alphaTest.value=M.alphaTest);const I=e.get(M),z=I.envMap,R=I.envMapRotation;z&&(y.envMap.value=z,y.envMapRotation.value.setFromMatrix4(H2.makeRotationFromEuler(R)).transpose(),z.isCubeTexture&&z.isRenderTargetTexture===!1&&y.envMapRotation.value.premultiply(Px),y.reflectivity.value=M.reflectivity,y.ior.value=M.ior,y.refractionRatio.value=M.refractionRatio),M.lightMap&&(y.lightMap.value=M.lightMap,y.lightMapIntensity.value=M.lightMapIntensity,i(M.lightMap,y.lightMapTransform)),M.aoMap&&(y.aoMap.value=M.aoMap,y.aoMapIntensity.value=M.aoMapIntensity,i(M.aoMap,y.aoMapTransform))}function u(y,M){y.diffuse.value.copy(M.color),y.opacity.value=M.opacity,M.map&&(y.map.value=M.map,i(M.map,y.mapTransform))}function h(y,M){y.dashSize.value=M.dashSize,y.totalSize.value=M.dashSize+M.gapSize,y.scale.value=M.scale}function m(y,M,I,z){y.diffuse.value.copy(M.color),y.opacity.value=M.opacity,y.size.value=M.size*I,y.scale.value=z*.5,M.map&&(y.map.value=M.map,i(M.map,y.uvTransform)),M.alphaMap&&(y.alphaMap.value=M.alphaMap,i(M.alphaMap,y.alphaMapTransform)),M.alphaTest>0&&(y.alphaTest.value=M.alphaTest)}function d(y,M){y.diffuse.value.copy(M.color),y.opacity.value=M.opacity,y.rotation.value=M.rotation,M.map&&(y.map.value=M.map,i(M.map,y.mapTransform)),M.alphaMap&&(y.alphaMap.value=M.alphaMap,i(M.alphaMap,y.alphaMapTransform)),M.alphaTest>0&&(y.alphaTest.value=M.alphaTest)}function g(y,M){y.specular.value.copy(M.specular),y.shininess.value=Math.max(M.shininess,1e-4)}function _(y,M){M.gradientMap&&(y.gradientMap.value=M.gradientMap)}function v(y,M){y.metalness.value=M.metalness,M.metalnessMap&&(y.metalnessMap.value=M.metalnessMap,i(M.metalnessMap,y.metalnessMapTransform)),y.roughness.value=M.roughness,M.roughnessMap&&(y.roughnessMap.value=M.roughnessMap,i(M.roughnessMap,y.roughnessMapTransform)),M.envMap&&(y.envMapIntensity.value=M.envMapIntensity)}function x(y,M,I){y.ior.value=M.ior,M.sheen>0&&(y.sheenColor.value.copy(M.sheenColor).multiplyScalar(M.sheen),y.sheenRoughness.value=M.sheenRoughness,M.sheenColorMap&&(y.sheenColorMap.value=M.sheenColorMap,i(M.sheenColorMap,y.sheenColorMapTransform)),M.sheenRoughnessMap&&(y.sheenRoughnessMap.value=M.sheenRoughnessMap,i(M.sheenRoughnessMap,y.sheenRoughnessMapTransform))),M.clearcoat>0&&(y.clearcoat.value=M.clearcoat,y.clearcoatRoughness.value=M.clearcoatRoughness,M.clearcoatMap&&(y.clearcoatMap.value=M.clearcoatMap,i(M.clearcoatMap,y.clearcoatMapTransform)),M.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=M.clearcoatRoughnessMap,i(M.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),M.clearcoatNormalMap&&(y.clearcoatNormalMap.value=M.clearcoatNormalMap,i(M.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(M.clearcoatNormalScale),M.side===oi&&y.clearcoatNormalScale.value.negate())),M.dispersion>0&&(y.dispersion.value=M.dispersion),M.iridescence>0&&(y.iridescence.value=M.iridescence,y.iridescenceIOR.value=M.iridescenceIOR,y.iridescenceThicknessMinimum.value=M.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=M.iridescenceThicknessRange[1],M.iridescenceMap&&(y.iridescenceMap.value=M.iridescenceMap,i(M.iridescenceMap,y.iridescenceMapTransform)),M.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=M.iridescenceThicknessMap,i(M.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),M.transmission>0&&(y.transmission.value=M.transmission,y.transmissionSamplerMap.value=I.texture,y.transmissionSamplerSize.value.set(I.width,I.height),M.transmissionMap&&(y.transmissionMap.value=M.transmissionMap,i(M.transmissionMap,y.transmissionMapTransform)),y.thickness.value=M.thickness,M.thicknessMap&&(y.thicknessMap.value=M.thicknessMap,i(M.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=M.attenuationDistance,y.attenuationColor.value.copy(M.attenuationColor)),M.anisotropy>0&&(y.anisotropyVector.value.set(M.anisotropy*Math.cos(M.anisotropyRotation),M.anisotropy*Math.sin(M.anisotropyRotation)),M.anisotropyMap&&(y.anisotropyMap.value=M.anisotropyMap,i(M.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=M.specularIntensity,y.specularColor.value.copy(M.specularColor),M.specularColorMap&&(y.specularColorMap.value=M.specularColorMap,i(M.specularColorMap,y.specularColorMapTransform)),M.specularIntensityMap&&(y.specularIntensityMap.value=M.specularIntensityMap,i(M.specularIntensityMap,y.specularIntensityMapTransform))}function E(y,M){M.matcap&&(y.matcap.value=M.matcap)}function w(y,M){const I=e.get(M).light;y.referencePosition.value.setFromMatrixPosition(I.matrixWorld),y.nearDistance.value=I.shadow.camera.near,y.farDistance.value=I.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function V2(a,e,i,r){let o={},c={},u=[];const h=a.getParameter(a.MAX_UNIFORM_BUFFER_BINDINGS);function m(R,O){const L=O.program;r.uniformBlockBinding(R,L)}function d(R,O){let L=o[R.id];L===void 0&&(y(R),L=g(R),o[R.id]=L,R.addEventListener("dispose",I));const B=O.program;r.updateUBOMapping(R,B);const T=e.render.frame;c[R.id]!==T&&(v(R),c[R.id]=T)}function g(R){const O=_();R.__bindingPointIndex=O;const L=a.createBuffer(),B=R.__size,T=R.usage;return a.bindBuffer(a.UNIFORM_BUFFER,L),a.bufferData(a.UNIFORM_BUFFER,B,T),a.bindBuffer(a.UNIFORM_BUFFER,null),a.bindBufferBase(a.UNIFORM_BUFFER,O,L),L}function _(){for(let R=0;R<h;R++)if(u.indexOf(R)===-1)return u.push(R),R;return Nt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(R){const O=o[R.id],L=R.uniforms,B=R.__cache;a.bindBuffer(a.UNIFORM_BUFFER,O);for(let T=0,N=L.length;T<N;T++){const X=L[T];if(Array.isArray(X))for(let V=0,Y=X.length;V<Y;V++)x(X[V],T,V,B);else x(X,T,0,B)}a.bindBuffer(a.UNIFORM_BUFFER,null)}function x(R,O,L,B){if(w(R,O,L,B)===!0){const T=R.__offset,N=R.value;if(Array.isArray(N)){let X=0;for(let V=0;V<N.length;V++){const Y=N[V],ue=M(Y);E(Y,R.__data,X),typeof Y!="number"&&typeof Y!="boolean"&&!Y.isMatrix3&&!ArrayBuffer.isView(Y)&&(X+=ue.storage/Float32Array.BYTES_PER_ELEMENT)}}else E(N,R.__data,0);a.bufferSubData(a.UNIFORM_BUFFER,T,R.__data)}}function E(R,O,L){typeof R=="number"||typeof R=="boolean"?O[0]=R:R.isMatrix3?(O[0]=R.elements[0],O[1]=R.elements[1],O[2]=R.elements[2],O[3]=0,O[4]=R.elements[3],O[5]=R.elements[4],O[6]=R.elements[5],O[7]=0,O[8]=R.elements[6],O[9]=R.elements[7],O[10]=R.elements[8],O[11]=0):ArrayBuffer.isView(R)?O.set(new R.constructor(R.buffer,R.byteOffset,O.length)):R.toArray(O,L)}function w(R,O,L,B){const T=R.value,N=O+"_"+L;if(B[N]===void 0)return typeof T=="number"||typeof T=="boolean"?B[N]=T:ArrayBuffer.isView(T)?B[N]=T.slice():B[N]=T.clone(),!0;{const X=B[N];if(typeof T=="number"||typeof T=="boolean"){if(X!==T)return B[N]=T,!0}else{if(ArrayBuffer.isView(T))return!0;if(X.equals(T)===!1)return X.copy(T),!0}}return!1}function y(R){const O=R.uniforms;let L=0;const B=16;for(let N=0,X=O.length;N<X;N++){const V=Array.isArray(O[N])?O[N]:[O[N]];for(let Y=0,ue=V.length;Y<ue;Y++){const fe=V[Y],q=Array.isArray(fe.value)?fe.value:[fe.value];for(let F=0,H=q.length;F<H;F++){const $=q[F],_e=M($),Me=L%B,P=Me%_e.boundary,K=Me+P;L+=P,K!==0&&B-K<_e.storage&&(L+=B-K),fe.__data=new Float32Array(_e.storage/Float32Array.BYTES_PER_ELEMENT),fe.__offset=L,L+=_e.storage}}}const T=L%B;return T>0&&(L+=B-T),R.__size=L,R.__cache={},this}function M(R){const O={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(O.boundary=4,O.storage=4):R.isVector2?(O.boundary=8,O.storage=8):R.isVector3||R.isColor?(O.boundary=16,O.storage=12):R.isVector4?(O.boundary=16,O.storage=16):R.isMatrix3?(O.boundary=48,O.storage=48):R.isMatrix4?(O.boundary=64,O.storage=64):R.isTexture?st("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(R)?(O.boundary=16,O.storage=R.byteLength):st("WebGLRenderer: Unsupported uniform value type.",R),O}function I(R){const O=R.target;O.removeEventListener("dispose",I);const L=u.indexOf(O.__bindingPointIndex);u.splice(L,1),a.deleteBuffer(o[O.id]),delete o[O.id],delete c[O.id]}function z(){for(const R in o)a.deleteBuffer(o[R]);u=[],o={},c={}}return{bind:m,update:d,dispose:z}}const k2=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let sa=null;function X2(){return sa===null&&(sa=new OE(k2,16,16,sr,ka),sa.name="DFG_LUT",sa.minFilter=An,sa.magFilter=An,sa.wrapS=Ki,sa.wrapT=Ki,sa.generateMipmaps=!1,sa.needsUpdate=!0),sa}class W2{constructor(e={}){const{canvas:i=Zy(),context:r=null,depth:o=!0,stencil:c=!1,alpha:u=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:d=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:v=!1,outputBufferType:x=Ui}=e;this.isWebGLRenderer=!0;let E;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=r.getContextAttributes().alpha}else E=u;const w=x,y=new Set([Mp,Sp,xp]),M=new Set([Ui,ha,xl,Sl,_p,vp]),I=new Uint32Array(4),z=new Int32Array(4),R=new ee;let O=null,L=null;const B=[],T=[];let N=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ua,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const X=this;let V=!1,Y=null,ue=null,fe=null,q=null;this._outputColorSpace=Qn;let F=0,H=0,$=null,_e=-1,Me=null;const P=new mn,K=new mn;let ye=null;const Ce=new wt(0);let ze=0,se=i.width,be=i.height,Te=1,qe=null,it=null;const et=new mn(0,0,se,be),qt=new mn(0,0,se,be);let lt=!1;const gt=new Mx;let _t=!1,rt=!1;const Yt=new xn,zt=new ee,Ht=new mn,sn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let It=!1;function jt(){return $===null?Te:1}let j=r;function Dt(A,Z){return i.getContext(A,Z)}try{const A={alpha:!0,depth:o,stencil:c,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:d,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${mp}`),i.addEventListener("webglcontextlost",Ft,!1),i.addEventListener("webglcontextrestored",Lt,!1),i.addEventListener("webglcontextcreationerror",zn,!1),j===null){const Z="webgl2";if(j=Dt(Z,A),j===null)throw Dt(Z)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(A){throw Nt("WebGLRenderer: "+A.message),A}let xt,U,b,J,re,pe,Le,Oe,he,me,De,He,Ie,ge,Ne,Ue,Ye,k,Ae,ce,Re,we,xe;function Ke(){xt=new XT(j),xt.init(),Re=new P2(j,xt),U=new IT(j,xt,e,Re),b=new U2(j,xt),U.reversedDepthBuffer&&v&&b.buffers.depth.setReversed(!0),ue=j.createFramebuffer(),fe=j.createFramebuffer(),q=j.createFramebuffer(),J=new YT(j),re=new x2,pe=new O2(j,xt,b,re,U,Re,J),Le=new kT(X),Oe=new QE(j),we=new OT(j,Oe),he=new WT(j,Oe,J,we),me=new ZT(j,he,Oe,we,J),k=new jT(j,U,pe),Ne=new FT(re),De=new v2(X,Le,xt,U,we,Ne),He=new G2(X,re),Ie=new M2,ge=new R2(xt),Ye=new UT(X,Le,b,me,E,m),Ue=new N2(X,me,U),xe=new V2(j,J,U,b),Ae=new PT(j,xt,J),ce=new qT(j,xt,J),J.programs=De.programs,X.capabilities=U,X.extensions=xt,X.properties=re,X.renderLists=Ie,X.shadowMap=Ue,X.state=b,X.info=J}Ke(),w!==Ui&&(N=new QT(w,i.width,i.height,h,o,c));const Ge=new z2(X,j);this.xr=Ge,this.getContext=function(){return j},this.getContextAttributes=function(){return j.getContextAttributes()},this.forceContextLoss=function(){const A=xt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=xt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Te},this.setPixelRatio=function(A){A!==void 0&&(Te=A,this.setSize(se,be,!1))},this.getSize=function(A){return A.set(se,be)},this.setSize=function(A,Z,oe=!0){if(Ge.isPresenting){st("WebGLRenderer: Can't change size while VR device is presenting.");return}se=A,be=Z,i.width=Math.floor(A*Te),i.height=Math.floor(Z*Te),oe===!0&&(i.style.width=A+"px",i.style.height=Z+"px"),N!==null&&N.setSize(i.width,i.height),this.setViewport(0,0,A,Z)},this.getDrawingBufferSize=function(A){return A.set(se*Te,be*Te).floor()},this.setDrawingBufferSize=function(A,Z,oe){se=A,be=Z,Te=oe,i.width=Math.floor(A*oe),i.height=Math.floor(Z*oe),this.setViewport(0,0,A,Z)},this.setEffects=function(A){if(w===Ui){Nt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let Z=0;Z<A.length;Z++)if(A[Z].isOutputPass===!0){st("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}N.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(P)},this.getViewport=function(A){return A.copy(et)},this.setViewport=function(A,Z,oe,ie){A.isVector4?et.set(A.x,A.y,A.z,A.w):et.set(A,Z,oe,ie),b.viewport(P.copy(et).multiplyScalar(Te).round())},this.getScissor=function(A){return A.copy(qt)},this.setScissor=function(A,Z,oe,ie){A.isVector4?qt.set(A.x,A.y,A.z,A.w):qt.set(A,Z,oe,ie),b.scissor(K.copy(qt).multiplyScalar(Te).round())},this.getScissorTest=function(){return lt},this.setScissorTest=function(A){b.setScissorTest(lt=A)},this.setOpaqueSort=function(A){qe=A},this.setTransparentSort=function(A){it=A},this.getClearColor=function(A){return A.copy(Ye.getClearColor())},this.setClearColor=function(){Ye.setClearColor(...arguments)},this.getClearAlpha=function(){return Ye.getClearAlpha()},this.setClearAlpha=function(){Ye.setClearAlpha(...arguments)},this.clear=function(A=!0,Z=!0,oe=!0){let ie=0;if(A){let te=!1;if($!==null){const Fe=$.texture.format;te=y.has(Fe)}if(te){const Fe=$.texture.type,je=M.has(Fe),Pe=Ye.getClearColor(),Qe=Ye.getClearAlpha(),Ze=Pe.r,tt=Pe.g,Ve=Pe.b;je?(I[0]=Ze,I[1]=tt,I[2]=Ve,I[3]=Qe,j.clearBufferuiv(j.COLOR,0,I)):(z[0]=Ze,z[1]=tt,z[2]=Ve,z[3]=Qe,j.clearBufferiv(j.COLOR,0,z))}else ie|=j.COLOR_BUFFER_BIT}Z&&(ie|=j.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),oe&&(ie|=j.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ie!==0&&j.clear(ie)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),Y=A},this.dispose=function(){i.removeEventListener("webglcontextlost",Ft,!1),i.removeEventListener("webglcontextrestored",Lt,!1),i.removeEventListener("webglcontextcreationerror",zn,!1),Ye.dispose(),Ie.dispose(),ge.dispose(),re.dispose(),Le.dispose(),me.dispose(),we.dispose(),xe.dispose(),De.dispose(),Ge.dispose(),Ge.removeEventListener("sessionstart",cn),Ge.removeEventListener("sessionend",Rn),qn.stop()};function Ft(A){A.preventDefault(),F_("WebGLRenderer: Context Lost."),V=!0}function Lt(){F_("WebGLRenderer: Context Restored."),V=!1;const A=J.autoReset,Z=Ue.enabled,oe=Ue.autoUpdate,ie=Ue.needsUpdate,te=Ue.type;Ke(),J.autoReset=A,Ue.enabled=Z,Ue.autoUpdate=oe,Ue.needsUpdate=ie,Ue.type=te}function zn(A){Nt("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Hn(A){const Z=A.target;Z.removeEventListener("dispose",Hn),Wa(Z)}function Wa(A){Cs(A),re.remove(A)}function Cs(A){const Z=re.get(A).programs;Z!==void 0&&(Z.forEach(function(oe){De.releaseProgram(oe)}),A.isShaderMaterial&&De.releaseShaderCache(A))}this.renderBufferDirect=function(A,Z,oe,ie,te,Fe){Z===null&&(Z=sn);const je=te.isMesh&&te.matrixWorld.determinantAffine()<0,Pe=Hi(A,Z,oe,ie,te);b.setMaterial(ie,je);let Qe=oe.index,Ze=1;if(ie.wireframe===!0){if(Qe=he.getWireframeAttribute(oe),Qe===void 0)return;Ze=2}const tt=oe.drawRange,Ve=oe.attributes.position;let Xe=tt.start*Ze,mt=(tt.start+tt.count)*Ze;Fe!==null&&(Xe=Math.max(Xe,Fe.start*Ze),mt=Math.min(mt,(Fe.start+Fe.count)*Ze)),Qe!==null?(Xe=Math.max(Xe,0),mt=Math.min(mt,Qe.count)):Ve!=null&&(Xe=Math.max(Xe,0),mt=Math.min(mt,Ve.count));const yt=mt-Xe;if(yt<0||yt===1/0)return;we.setup(te,ie,Pe,oe,Qe);let Et,ft=Ae;if(Qe!==null&&(Et=Oe.get(Qe),ft=ce,ft.setIndex(Et)),te.isMesh)ie.wireframe===!0?(b.setLineWidth(ie.wireframeLinewidth*jt()),ft.setMode(j.LINES)):ft.setMode(j.TRIANGLES);else if(te.isLine){let bt=ie.linewidth;bt===void 0&&(bt=1),b.setLineWidth(bt*jt()),te.isLineSegments?ft.setMode(j.LINES):te.isLineLoop?ft.setMode(j.LINE_LOOP):ft.setMode(j.LINE_STRIP)}else te.isPoints?ft.setMode(j.POINTS):te.isSprite&&ft.setMode(j.TRIANGLES);if(te.isBatchedMesh)if(xt.get("WEBGL_multi_draw"))ft.renderMultiDraw(te._multiDrawStarts,te._multiDrawCounts,te._multiDrawCount);else{const bt=te._multiDrawStarts,Be=te._multiDrawCounts,un=te._multiDrawCount,ot=Qe?Oe.get(Qe).bytesPerElement:1,fn=re.get(ie).currentProgram.getUniforms();for(let li=0;li<un;li++)fn.setValue(j,"_gl_DrawID",li),ft.render(bt[li]/ot,Be[li])}else if(te.isInstancedMesh)ft.renderInstances(Xe,yt,te.count);else if(oe.isInstancedBufferGeometry){const bt=oe._maxInstanceCount!==void 0?oe._maxInstanceCount:1/0,Be=Math.min(oe.instanceCount,bt);ft.renderInstances(Xe,yt,Be)}else ft.render(Xe,yt)};function Si(A,Z,oe){A.transparent===!0&&A.side===oa&&A.forceSinglePass===!1?(A.side=oi,A.needsUpdate=!0,$n(A,Z,oe),A.side=Va,A.needsUpdate=!0,$n(A,Z,oe),A.side=oa):$n(A,Z,oe)}this.compile=function(A,Z,oe=null){oe===null&&(oe=A),L=ge.get(oe),L.init(Z),T.push(L),oe.traverseVisible(function(te){te.isLight&&te.layers.test(Z.layers)&&(L.pushLight(te),te.castShadow&&L.pushShadow(te))}),A!==oe&&A.traverseVisible(function(te){te.isLight&&te.layers.test(Z.layers)&&(L.pushLight(te),te.castShadow&&L.pushShadow(te))}),L.setupLights();const ie=new Set;return A.traverse(function(te){if(!(te.isMesh||te.isPoints||te.isLine||te.isSprite))return;const Fe=te.material;if(Fe)if(Array.isArray(Fe))for(let je=0;je<Fe.length;je++){const Pe=Fe[je];Si(Pe,oe,te),ie.add(Pe)}else Si(Fe,oe,te),ie.add(Fe)}),L=T.pop(),ie},this.compileAsync=function(A,Z,oe=null){const ie=this.compile(A,Z,oe);return new Promise(te=>{function Fe(){if(ie.forEach(function(je){re.get(je).currentProgram.isReady()&&ie.delete(je)}),ie.size===0){te(A);return}setTimeout(Fe,10)}xt.get("KHR_parallel_shader_compile")!==null?Fe():setTimeout(Fe,10)})};let Wn=null;function Mi(A){Wn&&Wn(A)}function cn(){qn.stop()}function Rn(){qn.start()}const qn=new Cx;qn.setAnimationLoop(Mi),typeof self<"u"&&qn.setContext(self),this.setAnimationLoop=function(A){Wn=A,Ge.setAnimationLoop(A),A===null?qn.stop():qn.start()},Ge.addEventListener("sessionstart",cn),Ge.addEventListener("sessionend",Rn),this.render=function(A,Z){if(Z!==void 0&&Z.isCamera!==!0){Nt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(V===!0)return;Y!==null&&Y.renderStart(A,Z);const oe=Ge.enabled===!0&&Ge.isPresenting===!0,ie=N!==null&&($===null||oe)&&N.begin(X,$);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),Ge.enabled===!0&&Ge.isPresenting===!0&&(N===null||N.isCompositing()===!1)&&(Ge.cameraAutoUpdate===!0&&Ge.updateCamera(Z),Z=Ge.getCamera()),A.isScene===!0&&A.onBeforeRender(X,A,Z,$),L=ge.get(A,T.length),L.init(Z),L.state.textureUnits=pe.getTextureUnits(),T.push(L),Yt.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),gt.setFromProjectionMatrix(Yt,ca,Z.reversedDepth),rt=this.localClippingEnabled,_t=Ne.init(this.clippingPlanes,rt),O=Ie.get(A,B.length),O.init(),B.push(O),Ge.enabled===!0&&Ge.isPresenting===!0){const je=X.xr.getDepthSensingMesh();je!==null&&Jn(je,Z,-1/0,X.sortObjects)}Jn(A,Z,0,X.sortObjects),O.finish(),X.sortObjects===!0&&O.sort(qe,it,Z.reversedDepth),It=Ge.enabled===!1||Ge.isPresenting===!1||Ge.hasDepthSensing()===!1,It&&Ye.addToRenderList(O,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),_t===!0&&Ne.beginShadows();const te=L.state.shadowsArray;if(Ue.render(te,A,Z),_t===!0&&Ne.endShadows(),(ie&&N.hasRenderPass())===!1){const je=O.opaque,Pe=O.transmissive;if(L.setupLights(),Z.isArrayCamera){const Qe=Z.cameras;if(Pe.length>0)for(let Ze=0,tt=Qe.length;Ze<tt;Ze++){const Ve=Qe[Ze];qa(je,Pe,A,Ve)}It&&Ye.render(A);for(let Ze=0,tt=Qe.length;Ze<tt;Ze++){const Ve=Qe[Ze];ws(O,A,Ve,Ve.viewport)}}else Pe.length>0&&qa(je,Pe,A,Z),It&&Ye.render(A),ws(O,A,Z)}$!==null&&H===0&&(pe.updateMultisampleRenderTarget($),pe.updateRenderTargetMipmap($)),ie&&N.end(X),A.isScene===!0&&A.onAfterRender(X,A,Z),we.resetDefaultState(),_e=-1,Me=null,T.pop(),T.length>0?(L=T[T.length-1],pe.setTextureUnits(L.state.textureUnits),_t===!0&&Ne.setGlobalState(X.clippingPlanes,L.state.camera)):L=null,B.pop(),B.length>0?O=B[B.length-1]:O=null,Y!==null&&Y.renderEnd()};function Jn(A,Z,oe,ie){if(A.visible===!1)return;if(A.layers.test(Z.layers)){if(A.isGroup)oe=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(Z);else if(A.isLightProbeGrid)L.pushLightProbeGrid(A);else if(A.isLight)L.pushLight(A),A.castShadow&&L.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||gt.intersectsSprite(A)){ie&&Ht.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Yt);const je=me.update(A),Pe=A.material;Pe.visible&&O.push(A,je,Pe,oe,Ht.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||gt.intersectsObject(A))){const je=me.update(A),Pe=A.material;if(ie&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ht.copy(A.boundingSphere.center)):(je.boundingSphere===null&&je.computeBoundingSphere(),Ht.copy(je.boundingSphere.center)),Ht.applyMatrix4(A.matrixWorld).applyMatrix4(Yt)),Array.isArray(Pe)){const Qe=je.groups;for(let Ze=0,tt=Qe.length;Ze<tt;Ze++){const Ve=Qe[Ze],Xe=Pe[Ve.materialIndex];Xe&&Xe.visible&&O.push(A,je,Xe,oe,Ht.z,Ve)}}else Pe.visible&&O.push(A,je,Pe,oe,Ht.z,null)}}const Fe=A.children;for(let je=0,Pe=Fe.length;je<Pe;je++)Jn(Fe[je],Z,oe,ie)}function ws(A,Z,oe,ie){const{opaque:te,transmissive:Fe,transparent:je}=A;L.setupLightsView(oe),_t===!0&&Ne.setGlobalState(X.clippingPlanes,oe),ie&&b.viewport(P.copy(ie)),te.length>0&&pa(te,Z,oe),Fe.length>0&&pa(Fe,Z,oe),je.length>0&&pa(je,Z,oe),b.buffers.depth.setTest(!0),b.buffers.depth.setMask(!0),b.buffers.color.setMask(!0),b.setPolygonOffset(!1)}function qa(A,Z,oe,ie){if((oe.isScene===!0?oe.overrideMaterial:null)!==null)return;if(L.state.transmissionRenderTarget[ie.id]===void 0){const Xe=xt.has("EXT_color_buffer_half_float")||xt.has("EXT_color_buffer_float");L.state.transmissionRenderTarget[ie.id]=new fa(1,1,{generateMipmaps:!0,type:Xe?ka:Ui,minFilter:As,samples:Math.max(4,U.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ct.workingColorSpace})}const Fe=L.state.transmissionRenderTarget[ie.id],je=ie.viewport||P;Fe.setSize(je.z*X.transmissionResolutionScale,je.w*X.transmissionResolutionScale);const Pe=X.getRenderTarget(),Qe=X.getActiveCubeFace(),Ze=X.getActiveMipmapLevel();X.setRenderTarget(Fe),X.getClearColor(Ce),ze=X.getClearAlpha(),ze<1&&X.setClearColor(16777215,.5),X.clear(),It&&Ye.render(oe);const tt=X.toneMapping;X.toneMapping=ua;const Ve=ie.viewport;if(ie.viewport!==void 0&&(ie.viewport=void 0),L.setupLightsView(ie),_t===!0&&Ne.setGlobalState(X.clippingPlanes,ie),pa(A,oe,ie),pe.updateMultisampleRenderTarget(Fe),pe.updateRenderTargetMipmap(Fe),xt.has("WEBGL_multisampled_render_to_texture")===!1){let Xe=!1;for(let mt=0,yt=Z.length;mt<yt;mt++){const Et=Z[mt],{object:ft,geometry:bt,material:Be,group:un}=Et;if(Be.side===oa&&ft.layers.test(ie.layers)){const ot=Be.side;Be.side=oi,Be.needsUpdate=!0,Bi(ft,oe,ie,bt,Be,un),Be.side=ot,Be.needsUpdate=!0,Xe=!0}}Xe===!0&&(pe.updateMultisampleRenderTarget(Fe),pe.updateRenderTargetMipmap(Fe))}X.setRenderTarget(Pe,Qe,Ze),X.setClearColor(Ce,ze),Ve!==void 0&&(ie.viewport=Ve),X.toneMapping=tt}function pa(A,Z,oe){const ie=Z.isScene===!0?Z.overrideMaterial:null;for(let te=0,Fe=A.length;te<Fe;te++){const je=A[te],{object:Pe,geometry:Qe,group:Ze}=je;let tt=je.material;tt.allowOverride===!0&&ie!==null&&(tt=ie),Pe.layers.test(oe.layers)&&Bi(Pe,Z,oe,Qe,tt,Ze)}}function Bi(A,Z,oe,ie,te,Fe){A.onBeforeRender(X,Z,oe,ie,te,Fe),A.modelViewMatrix.multiplyMatrices(oe.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),te.onBeforeRender(X,Z,oe,ie,A,Fe),te.transparent===!0&&te.side===oa&&te.forceSinglePass===!1?(te.side=oi,te.needsUpdate=!0,X.renderBufferDirect(oe,Z,ie,te,A,Fe),te.side=Va,te.needsUpdate=!0,X.renderBufferDirect(oe,Z,ie,te,A,Fe),te.side=oa):X.renderBufferDirect(oe,Z,ie,te,A,Fe),A.onAfterRender(X,Z,oe,ie,te,Fe)}function $n(A,Z,oe){Z.isScene!==!0&&(Z=sn);const ie=re.get(A),te=L.state.lights,Fe=L.state.shadowsArray,je=te.state.version,Pe=De.getParameters(A,te.state,Fe,Z,oe,L.state.lightProbeGridArray),Qe=De.getProgramCacheKey(Pe);let Ze=ie.programs;ie.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?Z.environment:null,ie.fog=Z.fog;const tt=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;ie.envMap=Le.get(A.envMap||ie.environment,tt),ie.envMapRotation=ie.environment!==null&&A.envMap===null?Z.environmentRotation:A.envMapRotation,Ze===void 0&&(A.addEventListener("dispose",Hn),Ze=new Map,ie.programs=Ze);let Ve=Ze.get(Qe);if(Ve!==void 0){if(ie.currentProgram===Ve&&ie.lightsStateVersion===je)return zi(A,Pe),Ve}else Pe.uniforms=De.getUniforms(A),Y!==null&&A.isNodeMaterial&&Y.build(A,oe,Pe),A.onBeforeCompile(Pe,X),Ve=De.acquireProgram(Pe,Qe),Ze.set(Qe,Ve),ie.uniforms=Pe.uniforms;const Xe=ie.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Xe.clippingPlanes=Ne.uniform),zi(A,Pe),ie.needsLights=ma(A),ie.lightsStateVersion=je,ie.needsLights&&(Xe.ambientLightColor.value=te.state.ambient,Xe.lightProbe.value=te.state.probe,Xe.directionalLights.value=te.state.directional,Xe.directionalLightShadows.value=te.state.directionalShadow,Xe.spotLights.value=te.state.spot,Xe.spotLightShadows.value=te.state.spotShadow,Xe.rectAreaLights.value=te.state.rectArea,Xe.ltc_1.value=te.state.rectAreaLTC1,Xe.ltc_2.value=te.state.rectAreaLTC2,Xe.pointLights.value=te.state.point,Xe.pointLightShadows.value=te.state.pointShadow,Xe.hemisphereLights.value=te.state.hemi,Xe.directionalShadowMatrix.value=te.state.directionalShadowMatrix,Xe.spotLightMatrix.value=te.state.spotLightMatrix,Xe.spotLightMap.value=te.state.spotLightMap,Xe.pointShadowMatrix.value=te.state.pointShadowMatrix),ie.lightProbeGrid=L.state.lightProbeGridArray.length>0,ie.currentProgram=Ve,ie.uniformsList=null,Ve}function yi(A){if(A.uniformsList===null){const Z=A.currentProgram.getUniforms();A.uniformsList=lu.seqWithValue(Z.seq,A.uniforms)}return A.uniformsList}function zi(A,Z){const oe=re.get(A);oe.outputColorSpace=Z.outputColorSpace,oe.batching=Z.batching,oe.batchingColor=Z.batchingColor,oe.instancing=Z.instancing,oe.instancingColor=Z.instancingColor,oe.instancingMorph=Z.instancingMorph,oe.skinning=Z.skinning,oe.morphTargets=Z.morphTargets,oe.morphNormals=Z.morphNormals,oe.morphColors=Z.morphColors,oe.morphTargetsCount=Z.morphTargetsCount,oe.numClippingPlanes=Z.numClippingPlanes,oe.numIntersection=Z.numClipIntersection,oe.vertexAlphas=Z.vertexAlphas,oe.vertexTangents=Z.vertexTangents,oe.toneMapping=Z.toneMapping}function Ji(A,Z){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;R.setFromMatrixPosition(Z.matrixWorld);for(let oe=0,ie=A.length;oe<ie;oe++){const te=A[oe];if(te.texture!==null&&te.boundingBox.containsPoint(R))return te}return null}function Hi(A,Z,oe,ie,te){Z.isScene!==!0&&(Z=sn),pe.resetTextureUnits();const Fe=Z.fog,je=ie.isMeshStandardMaterial||ie.isMeshLambertMaterial||ie.isMeshPhongMaterial?Z.environment:null,Pe=$===null?X.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:Ct.workingColorSpace,Qe=ie.isMeshStandardMaterial||ie.isMeshLambertMaterial&&!ie.envMap||ie.isMeshPhongMaterial&&!ie.envMap,Ze=Le.get(ie.envMap||je,Qe),tt=ie.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,Ve=!!oe.attributes.tangent&&(!!ie.normalMap||ie.anisotropy>0),Xe=!!oe.morphAttributes.position,mt=!!oe.morphAttributes.normal,yt=!!oe.morphAttributes.color;let Et=ua;ie.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(Et=X.toneMapping);const ft=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,bt=ft!==void 0?ft.length:0,Be=re.get(ie),un=L.state.lights;if(_t===!0&&(rt===!0||A!==Me)){const Gt=A===Me&&ie.id===_e;Ne.setState(ie,A,Gt)}let ot=!1;ie.version===Be.__version?(Be.needsLights&&Be.lightsStateVersion!==un.state.version||Be.outputColorSpace!==Pe||te.isBatchedMesh&&Be.batching===!1||!te.isBatchedMesh&&Be.batching===!0||te.isBatchedMesh&&Be.batchingColor===!0&&te.colorTexture===null||te.isBatchedMesh&&Be.batchingColor===!1&&te.colorTexture!==null||te.isInstancedMesh&&Be.instancing===!1||!te.isInstancedMesh&&Be.instancing===!0||te.isSkinnedMesh&&Be.skinning===!1||!te.isSkinnedMesh&&Be.skinning===!0||te.isInstancedMesh&&Be.instancingColor===!0&&te.instanceColor===null||te.isInstancedMesh&&Be.instancingColor===!1&&te.instanceColor!==null||te.isInstancedMesh&&Be.instancingMorph===!0&&te.morphTexture===null||te.isInstancedMesh&&Be.instancingMorph===!1&&te.morphTexture!==null||Be.envMap!==Ze||ie.fog===!0&&Be.fog!==Fe||Be.numClippingPlanes!==void 0&&(Be.numClippingPlanes!==Ne.numPlanes||Be.numIntersection!==Ne.numIntersection)||Be.vertexAlphas!==tt||Be.vertexTangents!==Ve||Be.morphTargets!==Xe||Be.morphNormals!==mt||Be.morphColors!==yt||Be.toneMapping!==Et||Be.morphTargetsCount!==bt||!!Be.lightProbeGrid!=L.state.lightProbeGridArray.length>0)&&(ot=!0):(ot=!0,Be.__version=ie.version);let fn=Be.currentProgram;ot===!0&&(fn=$n(ie,Z,te),Y&&ie.isNodeMaterial&&Y.onUpdateProgram(ie,fn,Be));let li=!1,Gi=!1,ci=!1;const Vt=fn.getUniforms(),on=Be.uniforms;if(b.useProgram(fn.program)&&(li=!0,Gi=!0,ci=!0),ie.id!==_e&&(_e=ie.id,Gi=!0),Be.needsLights){const Gt=Ji(L.state.lightProbeGridArray,te);Be.lightProbeGrid!==Gt&&(Be.lightProbeGrid=Gt,Gi=!0)}if(li||Me!==A){b.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Vt.setValue(j,"projectionMatrix",A.projectionMatrix),Vt.setValue(j,"viewMatrix",A.matrixWorldInverse);const $i=Vt.map.cameraPosition;$i!==void 0&&$i.setValue(j,zt.setFromMatrixPosition(A.matrixWorld)),U.logarithmicDepthBuffer&&Vt.setValue(j,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(ie.isMeshPhongMaterial||ie.isMeshToonMaterial||ie.isMeshLambertMaterial||ie.isMeshBasicMaterial||ie.isMeshStandardMaterial||ie.isShaderMaterial)&&Vt.setValue(j,"isOrthographic",A.isOrthographicCamera===!0),Me!==A&&(Me=A,Gi=!0,ci=!0)}if(Be.needsLights&&(un.state.directionalShadowMap.length>0&&Vt.setValue(j,"directionalShadowMap",un.state.directionalShadowMap,pe),un.state.spotShadowMap.length>0&&Vt.setValue(j,"spotShadowMap",un.state.spotShadowMap,pe),un.state.pointShadowMap.length>0&&Vt.setValue(j,"pointShadowMap",un.state.pointShadowMap,pe)),te.isSkinnedMesh){Vt.setOptional(j,te,"bindMatrix"),Vt.setOptional(j,te,"bindMatrixInverse");const Gt=te.skeleton;Gt&&(Gt.boneTexture===null&&Gt.computeBoneTexture(),Vt.setValue(j,"boneTexture",Gt.boneTexture,pe))}te.isBatchedMesh&&(Vt.setOptional(j,te,"batchingTexture"),Vt.setValue(j,"batchingTexture",te._matricesTexture,pe),Vt.setOptional(j,te,"batchingIdTexture"),Vt.setValue(j,"batchingIdTexture",te._indirectTexture,pe),Vt.setOptional(j,te,"batchingColorTexture"),te._colorsTexture!==null&&Vt.setValue(j,"batchingColorTexture",te._colorsTexture,pe));const Vi=oe.morphAttributes;if((Vi.position!==void 0||Vi.normal!==void 0||Vi.color!==void 0)&&k.update(te,oe,fn),(Gi||Be.receiveShadow!==te.receiveShadow)&&(Be.receiveShadow=te.receiveShadow,Vt.setValue(j,"receiveShadow",te.receiveShadow)),(ie.isMeshStandardMaterial||ie.isMeshLambertMaterial||ie.isMeshPhongMaterial)&&ie.envMap===null&&Z.environment!==null&&(on.envMapIntensity.value=Z.environmentIntensity),on.dfgLUT!==void 0&&(on.dfgLUT.value=X2()),Gi){if(Vt.setValue(j,"toneMappingExposure",X.toneMappingExposure),Be.needsLights&&rn(on,ci),Fe&&ie.fog===!0&&He.refreshFogUniforms(on,Fe),He.refreshMaterialUniforms(on,ie,Te,be,L.state.transmissionRenderTarget[A.id]),Be.needsLights&&Be.lightProbeGrid){const Gt=Be.lightProbeGrid;on.probesSH.value=Gt.texture,on.probesMin.value.copy(Gt.boundingBox.min),on.probesMax.value.copy(Gt.boundingBox.max),on.probesResolution.value.copy(Gt.resolution)}lu.upload(j,yi(Be),on,pe)}if(ie.isShaderMaterial&&ie.uniformsNeedUpdate===!0&&(lu.upload(j,yi(Be),on,pe),ie.uniformsNeedUpdate=!1),ie.isSpriteMaterial&&Vt.setValue(j,"center",te.center),Vt.setValue(j,"modelViewMatrix",te.modelViewMatrix),Vt.setValue(j,"normalMatrix",te.normalMatrix),Vt.setValue(j,"modelMatrix",te.matrixWorld),ie.uniformsGroups!==void 0){const Gt=ie.uniformsGroups;for(let $i=0,Ya=Gt.length;$i<Ya;$i++){const Ds=Gt[$i];xe.update(Ds,fn),xe.bind(Ds,fn)}}return fn}function rn(A,Z){A.ambientLightColor.needsUpdate=Z,A.lightProbe.needsUpdate=Z,A.directionalLights.needsUpdate=Z,A.directionalLightShadows.needsUpdate=Z,A.pointLights.needsUpdate=Z,A.pointLightShadows.needsUpdate=Z,A.spotLights.needsUpdate=Z,A.spotLightShadows.needsUpdate=Z,A.rectAreaLights.needsUpdate=Z,A.hemisphereLights.needsUpdate=Z}function ma(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return $},this.setRenderTargetTextures=function(A,Z,oe){const ie=re.get(A);ie.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,ie.__autoAllocateDepthBuffer===!1&&(ie.__useRenderToTexture=!1),re.get(A.texture).__webglTexture=Z,re.get(A.depthTexture).__webglTexture=ie.__autoAllocateDepthBuffer?void 0:oe,ie.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,Z){const oe=re.get(A);oe.__webglFramebuffer=Z,oe.__useDefaultFramebuffer=Z===void 0},this.setRenderTarget=function(A,Z=0,oe=0){$=A,F=Z,H=oe;let ie=null,te=!1,Fe=!1;if(A){const Pe=re.get(A);if(Pe.__useDefaultFramebuffer!==void 0){b.bindFramebuffer(j.FRAMEBUFFER,Pe.__webglFramebuffer),P.copy(A.viewport),K.copy(A.scissor),ye=A.scissorTest,b.viewport(P),b.scissor(K),b.setScissorTest(ye),_e=-1;return}else if(Pe.__webglFramebuffer===void 0)pe.setupRenderTarget(A);else if(Pe.__hasExternalTextures)pe.rebindTextures(A,re.get(A.texture).__webglTexture,re.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const tt=A.depthTexture;if(Pe.__boundDepthTexture!==tt){if(tt!==null&&re.has(tt)&&(A.width!==tt.image.width||A.height!==tt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");pe.setupDepthRenderbuffer(A)}}const Qe=A.texture;(Qe.isData3DTexture||Qe.isDataArrayTexture||Qe.isCompressedArrayTexture)&&(Fe=!0);const Ze=re.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ze[Z])?ie=Ze[Z][oe]:ie=Ze[Z],te=!0):A.samples>0&&pe.useMultisampledRTT(A)===!1?ie=re.get(A).__webglMultisampledFramebuffer:Array.isArray(Ze)?ie=Ze[oe]:ie=Ze,P.copy(A.viewport),K.copy(A.scissor),ye=A.scissorTest}else P.copy(et).multiplyScalar(Te).floor(),K.copy(qt).multiplyScalar(Te).floor(),ye=lt;if(oe!==0&&(ie=ue),b.bindFramebuffer(j.FRAMEBUFFER,ie)&&b.drawBuffers(A,ie),b.viewport(P),b.scissor(K),b.setScissorTest(ye),te){const Pe=re.get(A.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Pe.__webglTexture,oe)}else if(Fe){const Pe=Z;for(let Qe=0;Qe<A.textures.length;Qe++){const Ze=re.get(A.textures[Qe]);j.framebufferTextureLayer(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0+Qe,Ze.__webglTexture,oe,Pe)}}else if(A!==null&&oe!==0){const Pe=re.get(A.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,Pe.__webglTexture,oe)}_e=-1},this.readRenderTargetPixels=function(A,Z,oe,ie,te,Fe,je,Pe=0){if(!(A&&A.isWebGLRenderTarget)){Nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Qe=re.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&je!==void 0&&(Qe=Qe[je]),Qe){b.bindFramebuffer(j.FRAMEBUFFER,Qe);try{const Ze=A.textures[Pe],tt=Ze.format,Ve=Ze.type;if(A.textures.length>1&&j.readBuffer(j.COLOR_ATTACHMENT0+Pe),!U.textureFormatReadable(tt)){Nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!U.textureTypeReadable(Ve)){Nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=A.width-ie&&oe>=0&&oe<=A.height-te&&j.readPixels(Z,oe,ie,te,Re.convert(tt),Re.convert(Ve),Fe)}finally{const Ze=$!==null?re.get($).__webglFramebuffer:null;b.bindFramebuffer(j.FRAMEBUFFER,Ze)}}},this.readRenderTargetPixelsAsync=async function(A,Z,oe,ie,te,Fe,je,Pe=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Qe=re.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&je!==void 0&&(Qe=Qe[je]),Qe)if(Z>=0&&Z<=A.width-ie&&oe>=0&&oe<=A.height-te){b.bindFramebuffer(j.FRAMEBUFFER,Qe);const Ze=A.textures[Pe],tt=Ze.format,Ve=Ze.type;if(A.textures.length>1&&j.readBuffer(j.COLOR_ATTACHMENT0+Pe),!U.textureFormatReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!U.textureTypeReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Xe=j.createBuffer();j.bindBuffer(j.PIXEL_PACK_BUFFER,Xe),j.bufferData(j.PIXEL_PACK_BUFFER,Fe.byteLength,j.STREAM_READ),j.readPixels(Z,oe,ie,te,Re.convert(tt),Re.convert(Ve),0);const mt=$!==null?re.get($).__webglFramebuffer:null;b.bindFramebuffer(j.FRAMEBUFFER,mt);const yt=j.fenceSync(j.SYNC_GPU_COMMANDS_COMPLETE,0);return j.flush(),await Ky(j,yt,4),j.bindBuffer(j.PIXEL_PACK_BUFFER,Xe),j.getBufferSubData(j.PIXEL_PACK_BUFFER,0,Fe),j.deleteBuffer(Xe),j.deleteSync(yt),Fe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,Z=null,oe=0){const ie=Math.pow(2,-oe),te=Math.floor(A.image.width*ie),Fe=Math.floor(A.image.height*ie),je=Z!==null?Z.x:0,Pe=Z!==null?Z.y:0;pe.setTexture2D(A,0),j.copyTexSubImage2D(j.TEXTURE_2D,oe,0,0,je,Pe,te,Fe),b.unbindTexture()},this.copyTextureToTexture=function(A,Z,oe=null,ie=null,te=0,Fe=0){let je,Pe,Qe,Ze,tt,Ve,Xe,mt,yt;const Et=A.isCompressedTexture?A.mipmaps[Fe]:A.image;if(oe!==null)je=oe.max.x-oe.min.x,Pe=oe.max.y-oe.min.y,Qe=oe.isBox3?oe.max.z-oe.min.z:1,Ze=oe.min.x,tt=oe.min.y,Ve=oe.isBox3?oe.min.z:0;else{const on=Math.pow(2,-te);je=Math.floor(Et.width*on),Pe=Math.floor(Et.height*on),A.isDataArrayTexture?Qe=Et.depth:A.isData3DTexture?Qe=Math.floor(Et.depth*on):Qe=1,Ze=0,tt=0,Ve=0}ie!==null?(Xe=ie.x,mt=ie.y,yt=ie.z):(Xe=0,mt=0,yt=0);const ft=Re.convert(Z.format),bt=Re.convert(Z.type);let Be;Z.isData3DTexture?(pe.setTexture3D(Z,0),Be=j.TEXTURE_3D):Z.isDataArrayTexture||Z.isCompressedArrayTexture?(pe.setTexture2DArray(Z,0),Be=j.TEXTURE_2D_ARRAY):(pe.setTexture2D(Z,0),Be=j.TEXTURE_2D),b.activeTexture(j.TEXTURE0),b.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,Z.flipY),b.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),b.pixelStorei(j.UNPACK_ALIGNMENT,Z.unpackAlignment);const un=b.getParameter(j.UNPACK_ROW_LENGTH),ot=b.getParameter(j.UNPACK_IMAGE_HEIGHT),fn=b.getParameter(j.UNPACK_SKIP_PIXELS),li=b.getParameter(j.UNPACK_SKIP_ROWS),Gi=b.getParameter(j.UNPACK_SKIP_IMAGES);b.pixelStorei(j.UNPACK_ROW_LENGTH,Et.width),b.pixelStorei(j.UNPACK_IMAGE_HEIGHT,Et.height),b.pixelStorei(j.UNPACK_SKIP_PIXELS,Ze),b.pixelStorei(j.UNPACK_SKIP_ROWS,tt),b.pixelStorei(j.UNPACK_SKIP_IMAGES,Ve);const ci=A.isDataArrayTexture||A.isData3DTexture,Vt=Z.isDataArrayTexture||Z.isData3DTexture;if(A.isDepthTexture){const on=re.get(A),Vi=re.get(Z),Gt=re.get(on.__renderTarget),$i=re.get(Vi.__renderTarget);b.bindFramebuffer(j.READ_FRAMEBUFFER,Gt.__webglFramebuffer),b.bindFramebuffer(j.DRAW_FRAMEBUFFER,$i.__webglFramebuffer);for(let Ya=0;Ya<Qe;Ya++)ci&&(j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,re.get(A).__webglTexture,te,Ve+Ya),j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,re.get(Z).__webglTexture,Fe,yt+Ya)),j.blitFramebuffer(Ze,tt,je,Pe,Xe,mt,je,Pe,j.DEPTH_BUFFER_BIT,j.NEAREST);b.bindFramebuffer(j.READ_FRAMEBUFFER,null),b.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else if(te!==0||A.isRenderTargetTexture||re.has(A)){const on=re.get(A),Vi=re.get(Z);b.bindFramebuffer(j.READ_FRAMEBUFFER,fe),b.bindFramebuffer(j.DRAW_FRAMEBUFFER,q);for(let Gt=0;Gt<Qe;Gt++)ci?j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,on.__webglTexture,te,Ve+Gt):j.framebufferTexture2D(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,on.__webglTexture,te),Vt?j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,Vi.__webglTexture,Fe,yt+Gt):j.framebufferTexture2D(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,Vi.__webglTexture,Fe),te!==0?j.blitFramebuffer(Ze,tt,je,Pe,Xe,mt,je,Pe,j.COLOR_BUFFER_BIT,j.NEAREST):Vt?j.copyTexSubImage3D(Be,Fe,Xe,mt,yt+Gt,Ze,tt,je,Pe):j.copyTexSubImage2D(Be,Fe,Xe,mt,Ze,tt,je,Pe);b.bindFramebuffer(j.READ_FRAMEBUFFER,null),b.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else Vt?A.isDataTexture||A.isData3DTexture?j.texSubImage3D(Be,Fe,Xe,mt,yt,je,Pe,Qe,ft,bt,Et.data):Z.isCompressedArrayTexture?j.compressedTexSubImage3D(Be,Fe,Xe,mt,yt,je,Pe,Qe,ft,Et.data):j.texSubImage3D(Be,Fe,Xe,mt,yt,je,Pe,Qe,ft,bt,Et):A.isDataTexture?j.texSubImage2D(j.TEXTURE_2D,Fe,Xe,mt,je,Pe,ft,bt,Et.data):A.isCompressedTexture?j.compressedTexSubImage2D(j.TEXTURE_2D,Fe,Xe,mt,Et.width,Et.height,ft,Et.data):j.texSubImage2D(j.TEXTURE_2D,Fe,Xe,mt,je,Pe,ft,bt,Et);b.pixelStorei(j.UNPACK_ROW_LENGTH,un),b.pixelStorei(j.UNPACK_IMAGE_HEIGHT,ot),b.pixelStorei(j.UNPACK_SKIP_PIXELS,fn),b.pixelStorei(j.UNPACK_SKIP_ROWS,li),b.pixelStorei(j.UNPACK_SKIP_IMAGES,Gi),Fe===0&&Z.generateMipmaps&&j.generateMipmap(Be),b.unbindTexture()},this.initRenderTarget=function(A){re.get(A).__webglFramebuffer===void 0&&pe.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?pe.setTextureCube(A,0):A.isData3DTexture?pe.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?pe.setTexture2DArray(A,0):pe.setTexture2D(A,0),b.unbindTexture()},this.resetState=function(){F=0,H=0,$=null,b.reset(),we.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ca}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Ct._getDrawingBufferColorSpace(e),i.unpackColorSpace=Ct._getUnpackColorSpace()}}const q2="/assets/Reckk-RegularItalic-DLM8ilig.ttf",Y2="/assets/Reckk-MediumItalic-D_uyfX4p.otf",j2="/assets/CXLMediumItalic-DYSp-DoC.otf",Z2=4,K2=5,za={fleet:"MAEX",name:"SharpeShark",version:"v1",role:"Executor",didShort:"0xf8a2…6035"};function Ix(a){return["discover","copy","supervise","isolate"][a]??"discover"}function Q2(a){return Ix(a)}function J2(a,e,i){const r=e.split(/\s+/),o=[];let c="";for(const u of r){const h=c?`${c} ${u}`:u;a.measureText(h).width<=i?c=h:(c&&o.push(c),c=u)}return c&&o.push(c),o}function $2(a,e){const r=e<520?300:400,o=Math.round(r*a),c=Math.round(o*K2/Z2);return{W:o,H:c}}function Fx(a,e,i,r,o,c){const u=Math.min(c,r/2,o/2);a.beginPath(),a.moveTo(e+u,i),a.arcTo(e+r,i,e+r,i+o,u),a.arcTo(e+r,i+o,e,i+o,u),a.arcTo(e,i+o,e,i,u),a.arcTo(e,i,e+r,i,u),a.closePath()}function an(a,e,i,r,o,c,u){Fx(a,e,i,r,o,c),a.fillStyle=u,a.fill()}function gn(a,e,i,r,o,c,u,h){Fx(a,e,i,r,o,c),a.strokeStyle=u,a.lineWidth=h,a.stroke()}function yu(a,e,i,r,o,c){an(a,e,i,r,o,c,"#0c0e12"),gn(a,e,i,r,o,c,"rgba(255,255,255,0.12)",Math.max(1,c*.12))}function Eu(a,e,i,r,o,c,u){const h=11*u;a.fillStyle="#c8f5a8",a.font=`700 ${h}px "DM Mono", ui-monospace, monospace`,a.textAlign="left",a.fillText(c,e+o,i+o+h);const m=22*u,d=e+r-o-m,g=i+o-2*u;return gn(a,d,g,m,m,4*u,"rgba(255,255,255,0.14)",1),a.strokeStyle="rgba(255,255,255,0.55)",a.lineWidth=Math.max(1,1.25*u),a.beginPath(),a.moveTo(d+6*u,g+6*u),a.lineTo(d+m-6*u,g+m-6*u),a.moveTo(d+m-6*u,g+6*u),a.lineTo(d+6*u,g+m-6*u),a.stroke(),i+o+h+10*u}function Bx(a,e,i,r,o,c,u,h){const m=28*h,d=(r-o*2)/2,g=10*h;a.font=`700 ${g}px "DM Mono", ui-monospace, monospace`;for(let _=0;_<2;_++){const v=e+o+_*d,x=_===u;a.fillStyle=x?"rgba(255,255,255,0.92)":"rgba(255,255,255,0.38)",a.textAlign="center",a.fillText(c[_],v+d/2,i+14*h),x&&(a.fillStyle="#c8f5a8",a.fillRect(v+4*h,i+m-2*h,d-8*h,2*h))}return a.textAlign="left",a.strokeStyle="rgba(255,255,255,0.08)",a.lineWidth=1,a.beginPath(),a.moveTo(e+o,i+m),a.lineTo(e+r-o,i+m),a.stroke(),i+m+10*h}function eR(a,e,i,r,o,c,u,h,m){const d=10*m,g=22*m;a.fillStyle="rgba(255,255,255,0.92)",a.font=`700 ${d}px "DM Mono", ui-monospace, monospace`,a.textAlign="left",a.fillText(c,e+o,i+14*m);const _=`${String(u).padStart(2,"0")} / ${String(h).padStart(2,"0")}`;a.fillStyle="rgba(255,255,255,0.38)",a.font=`700 ${8*m}px "DM Mono", ui-monospace, monospace`,a.textAlign="right",a.fillText(_,e+r-o,i+14*m),a.textAlign="left",a.strokeStyle="rgba(255,255,255,0.08)",a.lineWidth=1,a.beginPath(),a.moveTo(e+o,i+g),a.lineTo(e+r-o,i+g),a.stroke(),a.fillStyle="#c8f5a8";const v=Math.min(72*m,r*.28);return a.fillRect(e+o,i+g-2*m,v,2*m),i+g+10*m}function tR(a,e,i,r,o,c,u){const h=9*u;a.fillStyle="rgba(255,255,255,0.38)",a.font=`700 ${h}px "DM Mono", ui-monospace, monospace`,a.textAlign="left",a.fillText(o,e,i+h);const m=i+h+6*u,d=34*u;an(a,e,m,r,d,6*u,"rgba(255,255,255,0.04)"),gn(a,e,m,r,d,6*u,"rgba(255,255,255,0.12)",1),a.fillStyle=c.startsWith("Select")||c==="0x..."?"rgba(255,255,255,0.35)":"rgba(255,255,255,0.88)",a.font=`500 ${11*u}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText(c,e+10*u,m+d*.62),a.strokeStyle="rgba(255,255,255,0.4)",a.lineWidth=Math.max(1,1.2*u);const g=e+r-14*u,_=m+d/2;return a.beginPath(),a.moveTo(g-4*u,_-2*u),a.lineTo(g,_+3*u),a.lineTo(g+4*u,_-2*u),a.stroke(),h+6*u+d}function nR(a,e,i,r,o){const c=9*o;a.fillStyle="rgba(255,255,255,0.38)",a.font=`700 ${c}px "DM Mono", ui-monospace, monospace`,a.textAlign="left",a.fillText("AMOUNT",e,i+c),a.textAlign="right",a.fillStyle="rgba(255,255,255,0.45)",a.fillText("AVAILABLE 5,000.00",e+r,i+c),a.textAlign="left";const u=i+c+6*o,h=44*o;an(a,e,u,r,h,8*o,"#050508"),gn(a,e,u,r,h,8*o,"rgba(255,255,255,0.1)",1),a.fillStyle="rgba(255,255,255,0.92)",a.font=`700 ${22*o}px "DM Mono", ui-monospace, monospace`,a.fillText("0.00",e+12*o,u+h*.68);const m=u+h+10*o;return a.strokeStyle="rgba(255,255,255,0.12)",a.lineWidth=Math.max(2,2*o),a.beginPath(),a.moveTo(e,m),a.lineTo(e+r,m),a.stroke(),an(a,e,m-5*o,14*o,10*o,5*o,"rgba(255,255,255,0.85)"),a.fillStyle="rgba(255,255,255,0.35)",a.font=`500 ${8*o}px "DM Mono", ui-monospace, monospace`,a.fillText("0.01",e,m+14*o),a.textAlign="right",a.fillText("5,000.00",e+r,m+14*o),a.textAlign="left",c+6*o+h+10*o+16*o}function iR(a,e,i,r,o,c){a.strokeStyle="rgba(255,255,255,0.08)",a.lineWidth=1,a.beginPath(),a.moveTo(e,i),a.lineTo(e+r,i),a.stroke();const u=i+10*o,h=36*o,m=72*o;gn(a,e,u,m,h,6*o,"rgba(255,255,255,0.14)",1),a.fillStyle="rgba(255,255,255,0.55)",a.font=`700 ${9*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText("CANCEL",e+m/2,u+h*.62);const d=e+m+8*o,g=r-m-8*o;return an(a,d,u,g,h,6*o,"rgba(255,255,255,0.06)"),gn(a,d,u,g,h,6*o,"rgba(255,255,255,0.1)",1),a.fillStyle="#c8f5a8",a.fillRect(d,u+4*o,3*o,h-8*o),a.fillStyle="rgba(255,255,255,0.55)",a.font=`700 ${8.5*o}px "DM Mono", ui-monospace, monospace`,a.fillText(c,d+g/2+2*o,u+h*.62),a.textAlign="left",10*o+h}function wp(a,e,i,r,o){const c=44*o;an(a,e,i,r,c,8*o,"rgba(200,245,168,0.08)"),gn(a,e,i,r,c,8*o,"rgba(200,245,168,0.22)",1);const u=28*o;return an(a,e+8*o,i+(c-u)/2,u,u,4*o,"rgba(200,245,168,0.14)"),a.fillStyle="#c8f5a8",a.font=`700 ${10*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText("SS",e+8*o+u/2,i+c*.58),a.textAlign="left",a.fillStyle="rgba(255,255,255,0.92)",a.font=`700 ${11*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText(za.name,e+8*o+u+8*o,i+16*o),a.fillStyle="rgba(255,255,255,0.42)",a.font=`500 ${9*o}px "DM Mono", ui-monospace, monospace`,a.fillText(`${za.role} · ${za.didShort}`,e+8*o+u+8*o,i+32*o),c}function aR(a,e,i,r,o){const c=Math.min(r*190/316,r*.58),u=12*o,h=8*o,m=a.createLinearGradient(e,i+c,e+r,i);m.addColorStop(0,"#050508"),m.addColorStop(1,"rgba(200,245,168,0.14)"),an(a,e,i,r,c,h,m),gn(a,e,i,r,c,h,"rgba(255,255,255,0.14)",Math.max(1,1.25*o)),gn(a,e+2.5*o,i+2.5*o,r-5*o,c-5*o,h-1.5*o,"rgba(200,245,168,0.35)",Math.max(1,o)),a.fillStyle="rgba(255,255,255,0.92)",a.font=`700 ${11*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText(za.fleet,e+u,i+u+10*o),a.fillStyle="#c8f5a8",a.beginPath(),a.arc(e+r-u-7*o,i+u+5*o,6*o,0,Math.PI*2),a.fill(),a.fillStyle="#0a0a0c",a.font=`700 ${8*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText("✓",e+r-u-7*o,i+u+8*o),a.textAlign="left";const d=i+c-u-2*o;a.fillStyle="rgba(255,255,255,0.92)",a.font=`700 ${10*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText(za.name.toUpperCase(),e+u,d-24*o),a.fillStyle="rgba(255,255,255,0.45)",a.font=`500 ${9*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText(`${za.role} · ${za.version}`,e+u,d-10*o),a.fillStyle="#c8f5a8",a.font=`700 ${10*o}px "DM Mono", ui-monospace, monospace`,a.fillText(za.didShort,e+u,d);const g=28*o;return an(a,e+r-u-g,i+c-u-g,g,g,4*o,"rgba(200,245,168,0.14)"),gn(a,e+r-u-g,i+c-u-g,g,g,4*o,"rgba(200,245,168,0.28)",1),a.fillStyle="#c8f5a8",a.font=`700 ${11*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText("SS",e+r-u-g/2,i+c-u-g*.35),a.textAlign="left",c}function sR(a,e,i,r,o){const c=Math.min(r*190/316,r*.58),u=10*o,h=8*o,m=a.createLinearGradient(e,i,e+r,i+c);m.addColorStop(0,"#0a0c10"),m.addColorStop(.55,"#12161c"),m.addColorStop(1,"rgba(200,245,168,0.18)"),an(a,e,i,r,c,h,m),gn(a,e,i,r,c,h,"rgba(255,255,255,0.14)",Math.max(1,1.25*o)),a.fillStyle="rgba(255,255,255,0.92)",a.font=`700 ${10*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText("Morpheum.",e+u,i+u+10*o),a.strokeStyle="rgba(255,255,255,0.45)",a.lineWidth=Math.max(1,o);for(let d=0;d<3;d++){const g=5*o+d*3.5*o,_=4*o+d*2.5*o;a.beginPath(),a.ellipse(e+r-u-4*o,i+u+8*o,g,_,-.4,-.2,1.2),a.stroke()}return a.fillStyle="rgba(255,255,255,0.88)",a.font=`700 ${9*o}px "DM Mono", ui-monospace, monospace`,a.fillText("5678  ····  ····  7890",e+u,i+c*.52),a.fillStyle="rgba(255,255,255,0.92)",a.font=`700 ${8*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText(za.name.toUpperCase(),e+u,i+c-u-2*o),a.textAlign="right",a.fillStyle="rgba(255,255,255,0.55)",a.font=`700 ${8*o}px "DM Mono", ui-monospace, monospace`,a.fillText("12/28",e+r-u,i+c-u-2*o),a.textAlign="left",c}function rR(a,e,i,r,o,c=25){const u=9*o;a.fillStyle="rgba(255,255,255,0.38)",a.font=`700 ${u}px "DM Mono", ui-monospace, monospace`,a.textAlign="left",a.fillText("MIRROR SIZE",e,i+u),a.textAlign="right",a.fillStyle="#c8f5a8",a.fillText(`${c}%`,e+r,i+u),a.textAlign="left";const h=i+u+12*o,m=Math.max(4,5*o);an(a,e,h,r,m,m/2,"rgba(255,255,255,0.1)");const d=Math.max(m,r*c/100);an(a,e,h,d,m,m/2,"rgba(200,245,168,0.75)");const g=7*o;return a.fillStyle="#f4f6f0",a.beginPath(),a.arc(e+d,h+m/2,g,0,Math.PI*2),a.fill(),a.strokeStyle="rgba(200,245,168,0.55)",a.lineWidth=Math.max(1,o),a.stroke(),a.fillStyle="rgba(255,255,255,0.35)",a.font=`500 ${7.5*o}px "DM Mono", ui-monospace, monospace`,a.fillText("5%",e,h+m+14*o),a.textAlign="right",a.fillText("100%",e+r,h+m+14*o),a.textAlign="left",u+12*o+m+16*o}function oR(a,e,i,r,o){const c=9*o;a.fillStyle="rgba(255,255,255,0.38)",a.font=`700 ${c}px "DM Mono", ui-monospace, monospace`,a.fillText("AGENTIC PROTECTION",e,i+c);const u=5*o,h=(r-u*2)/3,m=52*o,d=i+c+8*o;return[{label:"Manual",tone:"rgba(255,255,255,0.12)",active:!1},{label:"Guarded",tone:"rgba(234,179,8,0.55)",active:!0},{label:"High",tone:"rgba(255,71,87,0.35)",active:!1}].forEach((_,v)=>{const x=e+v*(h+u);an(a,x,d,h,m,6*o,"rgba(255,255,255,0.04)"),gn(a,x,d,h,m,6*o,_.active?_.tone:"rgba(255,255,255,0.1)",_.active?Math.max(1.5,1.5*o):1),_.active&&(a.fillStyle="rgba(234,179,8,0.12)",a.fillRect(x+1,d+1,3*o,m-2)),a.fillStyle=_.active?"rgba(255,255,255,0.92)":"rgba(255,255,255,0.55)",a.font=`700 ${9*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.textAlign="center",a.fillText(_.label,x+h/2,d+18*o),a.fillStyle="rgba(255,255,255,0.38)",a.font=`400 ${7*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`;const E=_.label==="Guarded"?"safe default":_.label==="Manual"?"signals":"silent";a.fillText(E,x+h/2,d+34*o)}),a.textAlign="left",c+8*o+m}function lR(a,e,i,r,o,c="SLIDE TO START COPY"){const u=40*o;an(a,e,i,r,u,8*o,"rgba(255,255,255,0.05)"),gn(a,e,i,r,u,8*o,"rgba(255,255,255,0.12)",1);const h=.22,m=4*o,d=u-m*2,g=r-m*2-d;return an(a,e+m,i+m,d+g*h,d,d/2,"rgba(200,245,168,0.18)"),an(a,e+m,i+m,d,d,d/2,"rgba(200,245,168,0.85)"),a.fillStyle="#0a0a0c",a.font=`700 ${12*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText("›",e+m+d/2,i+u*.62),a.fillStyle="rgba(255,255,255,0.5)",a.font=`700 ${8*o}px "DM Mono", ui-monospace, monospace`,a.fillText(c,e+r/2+d*.15,i+u*.62),a.textAlign="left",u}const pl=2,ro={sharpe:"2.41",roi:"+38.2%",riskScore:"72",reputation:"84",receipts:[{action:"Close BTC long",pnl:"+103.09"},{action:"Open ETH long",pnl:null},{action:"Close SOL short",pnl:"+41.20"}]};function wv(a,e,i,r,o,c){const u=6*c,h=o.length,m=(r-u*(h-1))/h,d=36*c;return o.forEach(([g,_],v)=>{const x=e+v*(m+u);an(a,x,i,m,d,6*c,"rgba(255,255,255,0.04)"),gn(a,x,i,m,d,6*c,"rgba(255,255,255,0.1)",1),a.fillStyle="rgba(255,255,255,0.4)",a.font=`700 ${7*c}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText(g,x+m/2,i+12*c),a.fillStyle="#c8f5a8",a.font=`700 ${11*c}px "DM Mono", ui-monospace, monospace`,a.fillText(_,x+m/2,i+26*c)}),a.textAlign="left",d}function cR(a,e,i,r,o){const c=[{label:"Verified",brand:!0},{label:"Receipt"},{label:"Risk",value:ro.riskScore},{label:"Rep",value:ro.reputation}],u=4*o,h=22*o,m=5*o;let d=e;a.font=`700 ${6.5*o}px "DM Mono", ui-monospace, monospace`;for(const g of c){const _=a.measureText(g.label.toUpperCase()).width,v=g.value?a.measureText(g.value).width+3*o:0,x=m*2+6*o+_+v;if(d+x>e+r)break;const E=g.brand?"rgba(200,245,168,0.12)":"rgba(255,255,255,0.04)",w=g.brand?"rgba(200,245,168,0.35)":"rgba(255,255,255,0.12)";an(a,d,i,x,h,4*o,E),gn(a,d,i,x,h,4*o,w,1);const y=2*o;a.beginPath(),a.arc(d+m+y,i+h/2,y,0,Math.PI*2),a.fillStyle=g.brand?"#c8f5a8":"rgba(255,255,255,0.35)",a.fill();let M=d+m+y*2+4*o;a.fillStyle=g.brand?"#c8f5a8":"rgba(255,255,255,0.55)",a.textAlign="left",a.fillText(g.label.toUpperCase(),M,i+h*.68),M+=_+3*o,g.value&&(a.fillStyle="rgba(255,255,255,0.92)",a.fillText(g.value,M,i+h*.68)),d+=x+u}return a.textAlign="left",h}function uR(a,e,i,r,o){const c=ro.receipts,u=22*o,h=14*o+c.length*u;return an(a,e,i,r,h,6*o,"rgba(255,255,255,0.03)"),gn(a,e,i,r,h,6*o,"rgba(255,255,255,0.08)",1),a.fillStyle="rgba(255,255,255,0.4)",a.font=`700 ${6.5*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="left",a.fillText("RECEIPTS",e+8*o,i+10*o),c.forEach((m,d)=>{const g=i+14*o+d*u;a.fillStyle="rgba(255,255,255,0.72)",a.font=`500 ${8*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="left",a.fillText(m.action,e+8*o,g+u*.62),a.textAlign="right",m.pnl?(a.fillStyle="#c8f5a8",a.font=`700 ${8*o}px "DM Mono", ui-monospace, monospace`,a.fillText(m.pnl,e+r-8*o,g+u*.62)):(a.fillStyle="rgba(255,255,255,0.35)",a.fillText("—",e+r-8*o,g+u*.62))}),a.textAlign="left",h}function fR(a,e,i,r,o){const c=Math.min(r*150/316,r*.48),u=12*o,h=8*o,m=a.createLinearGradient(e,i+c,e+r,i);m.addColorStop(0,"#050508"),m.addColorStop(1,"rgba(200,245,168,0.14)"),an(a,e,i,r,c,h,m),gn(a,e,i,r,c,h,"rgba(255,255,255,0.14)",Math.max(1,1.25*o)),gn(a,e+2.5*o,i+2.5*o,r-5*o,c-5*o,h-1.5*o,"rgba(200,245,168,0.35)",Math.max(1,o)),a.fillStyle="rgba(255,255,255,0.92)",a.font=`700 ${11*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText("MAEX",e+u,i+u+10*o);const d=40*o,g=16*o,_=e+r-u-d,v=i+u-1*o;return an(a,_,v,d,g,8*o,"rgba(200,245,168,0.14)"),gn(a,_,v,d,g,8*o,"rgba(200,245,168,0.28)",1),a.fillStyle="#c8f5a8",a.font=`700 ${8*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText("LIVE",_+d/2,v+11*o),a.textAlign="left",a.fillStyle="rgba(255,255,255,0.92)",a.font=`700 ${14*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText("MAEX Core",e+u,i+u+36*o),a.fillStyle="rgba(255,255,255,0.45)",a.font=`500 ${9*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText("Curated agent basket · 4 agents",e+u,i+u+52*o),a.fillStyle="#c8f5a8",a.font=`700 ${18*o}px "DM Mono", ui-monospace, monospace`,a.fillText("+12.8%",e+u,i+c-u-4*o),a.fillStyle="rgba(255,255,255,0.4)",a.font=`700 ${8*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="right",a.fillText("30D RETURN",e+r-u,i+c-u-8*o),a.textAlign="left",c}function dR(a,e,i,r,o){const c=[["SharpeShark","42%","+38%"],["SortinoSloth","33%","+21%"],["FundingFox","25%","−4%"]],u=26*o,h=c.length*u;return an(a,e,i,r,h,6*o,"rgba(255,255,255,0.03)"),gn(a,e,i,r,h,6*o,"rgba(255,255,255,0.08)",1),c.forEach(([m,d,g],_)=>{const v=i+_*u;_>0&&(a.strokeStyle="rgba(255,255,255,0.06)",a.lineWidth=1,a.beginPath(),a.moveTo(e+8*o,v),a.lineTo(e+r-8*o,v),a.stroke()),a.fillStyle="rgba(255,255,255,0.85)",a.font=`600 ${9*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.textAlign="left",a.fillText(m,e+10*o,v+u*.62),a.fillStyle="rgba(255,255,255,0.4)",a.font=`700 ${8*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText(d,e+r*.58,v+u*.62);const x=!g.startsWith("−")&&!g.startsWith("-");a.fillStyle=x?"#c8f5a8":"rgba(255,120,120,0.85)",a.textAlign="right",a.fillText(g,e+r-10*o,v+u*.62)}),a.textAlign="left",h}function hR(a,e,i,r,o,c=0){const u=r/300,h=12*u,m=10*u,d=(c%pl+pl)%pl,g=[{header:"AGENT PROOF",segment:"AGENTS"},{header:"INDEX PROOF",segment:"INDICES"}][d];yu(a,e,i,r,o,m);let _=Eu(a,e,i,r,h,g.header,u);_=eR(a,e,_,r,h,g.segment,d+1,pl,u);const v=i+o-h;if(d===0){_+=wp(a,e+h,_,r-h*2,u)+8*u,_+22*u<=v&&(_+=cR(a,e+h,_,r-h*2,u)+8*u);const E=[["SHARPE",ro.sharpe],["ROI",ro.roi],["RISK",ro.riskScore]];_+36*u<=v&&(_+=wv(a,e+h,_,r-h*2,E,u)+8*u),_+70*u<=v&&uR(a,e+h,_,r-h*2,u);return}_+=fR(a,e+h,_,r-h*2,u)+8*u,_+78*u<=v&&(_+=dR(a,e+h,_,r-h*2,u)+8*u);const x=[["RETURN","+12.8%"],["RISK","58"],["AGENTS","4"]];_+36*u<=v&&wv(a,e+h,_,r-h*2,x,u)}function pR(a,e,i,r,o,c=0){const u=r/300,h=12*u,m=10*u;yu(a,e,i,r,o,m);let d=Eu(a,e,i,r,h,"COPY TRADE",u);d=Bx(a,e,d,r,h,["MIRROR","BUCKET"],0,u);const g=40*u,_=i+o-h-g,v=_-10*u;if(c%2===0){const E=6*u,w=r-h*2;let y=(w-E)/2,M=Math.min(y*190/316,y*.58);const I=Math.max(64*u,v-d-28*u);M>I&&(y=y*(I/M),M=I);const z=u*(y/((w-E)/2)),R=e+h+(w-(y*2+E))/2;sR(a,R,d,y,z),aR(a,R+y+E,d,y,z),d+=M+10*u;const O=[["SPREAD","0.02%"],["FUNDING","8h"],["SIZE","25%"]],L=5*u,B=(r-h*2-L*2)/3,T=32*u;d+T<=v&&(O.forEach(([N,X],V)=>{const Y=e+h+V*(B+L);an(a,Y,d,B,T,6*u,"rgba(255,255,255,0.04)"),gn(a,Y,d,B,T,6*u,"rgba(255,255,255,0.1)",1),a.fillStyle="rgba(255,255,255,0.4)",a.font=`700 ${6.5*u}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText(N,Y+B/2,d+11*u),a.fillStyle="#c8f5a8",a.font=`700 ${10*u}px "DM Mono", ui-monospace, monospace`,a.fillText(X,Y+B/2,d+24*u)}),a.textAlign="left")}else d+=wp(a,e+h,d,r-h*2,u)+10*u,d+36*u<v&&(d+=rR(a,e+h,d,r-h*2,u,25)+10*u),d+50*u<v&&oR(a,e+h,d,r-h*2,u);lR(a,e+h,_,r-h*2,u)}const mR=2,gR=[{agent:"SharpeShark",timeLabel:"07-08, 15:42",status:"want-to",statusLabel:"Want to",action:"Open ETH long · 1.2 ETH",showActions:!0},{agent:"NightOwl",timeLabel:"07-08, 15:31",status:"rejected",statusLabel:"Rejected",action:"Open BTC short · 0.04 BTC"},{agent:"SharpeShark",timeLabel:"07-08, 15:25",status:"short",statusLabel:"Close Long",action:"BTCUSDT · 0.04 BTC",pnl:{text:"+103.09",tone:"long"}},{agent:"FluxRunner",timeLabel:"07-08, 14:10",status:"long",statusLabel:"Open Long",action:"ETHUSDT · 0.8 ETH"},{agent:"NightOwl",timeLabel:"07-07, 09:42",status:"short",statusLabel:"Open Short",action:"SOLUSDT · 12 SOL"}];function _R(a){switch(a){case"want-to":return{fg:"rgba(200,245,168,0.95)",bg:"rgba(184,245,168,0.12)"};case"rejected":return{fg:"#ff4757",bg:"rgba(255,71,87,0.12)"};case"long":return{fg:"#00ff88",bg:"rgba(0,255,136,0.12)"};case"short":return{fg:"#ff4757",bg:"rgba(255,71,87,0.12)"}}}function vR(a,e,i,r,o){const c=r/300,u=12*c,h=10*c;yu(a,e,i,r,o,h);let m=Eu(a,e,i,r,u,"ACTIVITY LOG",c);const d=i+o-u,g=58*c,_=10*c,v=6*c,x=e+u+g+v+_+v,E=e+r-u-x,w=e+u+g+v+_/2,y=gR,M=4*c;y.forEach((I,z)=>{if(m>=d-8*c)return;const R=z===0,O=z===y.length-1,L=_R(I.status),B=8*c,T=6*c,N=7*c,X=8*c,V=I.showActions?22*c:0,Y=I.showActions?5*c:0,fe=Math.max(B+2*c+T,N+4*c+X)+Y+V+M;if(m+Math.min(fe,28*c)>d)return;a.textAlign="right",a.fillStyle="rgba(255,255,255,0.88)",a.font=`500 ${B}px "DM Mono", ui-monospace, monospace`,a.fillText(I.agent,e+u+g,m+B),a.fillStyle="rgba(255,255,255,0.38)",a.font=`500 ${T}px "DM Mono", ui-monospace, monospace`,a.fillText(I.timeLabel,e+u+g,m+B+2*c+T),a.textAlign="left",O||(a.strokeStyle="rgba(255,255,255,0.14)",a.lineWidth=Math.max(1,c),a.beginPath(),a.moveTo(w,m+6*c),a.lineTo(w,m+fe),a.stroke());const q=2.4*c;a.beginPath(),a.arc(w,m+5*c,q,0,Math.PI*2),a.fillStyle=R?"#c8f5a8":"rgba(255,255,255,0.32)",a.fill(),R&&(a.beginPath(),a.arc(w,m+5*c,q+2.2*c,0,Math.PI*2),a.fillStyle="rgba(200,245,168,0.16)",a.fill());const F=4*c,H=2*c;a.font=`700 ${N}px "DM Mono", ui-monospace, monospace`;const $=I.statusLabel.toUpperCase(),_e=a.measureText($).width+F*2,Me=N+H*2;an(a,x,m,_e,Me,3*c,L.bg),a.fillStyle=L.fg,a.fillText($,x+F,m+N+H*.35),a.fillStyle="rgba(255,255,255,0.55)",a.font=`400 ${X}px "DM Mono", ui-monospace, monospace`;const P=m+Me+3*c+X;let K=I.action;if(I.pnl){const ye=`${I.action} · `;a.fillText(ye,x,P);const Ce=a.measureText(ye).width;a.fillStyle=I.pnl.tone==="long"?"#00ff88":"#ff4757",a.font=`700 ${X}px "DM Mono", ui-monospace, monospace`,a.fillText(I.pnl.text,x+Ce,P)}else{for(;K.length>8&&a.measureText(K).width>E;)K=`${K.slice(0,-2)}…`;a.fillText(K,x,P)}if(I.showActions&&m+Me+3*c+X+Y+V<=d){const ye=m+Me+3*c+X+Y,Ce=(E-5*c)/2;gn(a,x,ye,Ce,V,3*c,"rgba(255,255,255,0.18)",1),a.fillStyle="rgba(255,255,255,0.72)",a.font=`700 ${7*c}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText("REJECT",x+Ce/2,ye+V*.68),an(a,x+Ce+5*c,ye,Ce,V,3*c,"rgba(184,245,168,0.88)"),a.fillStyle="rgba(8,14,10,0.92)",a.fillText("APPROVE",x+Ce+5*c+Ce/2,ye+V*.68),a.textAlign="left"}m+=fe})}function xR(a,e,i,r,o){const c=r/300,u=12*c,h=10*c;yu(a,e,i,r,o,h);let m=Eu(a,e,i,r,u,"FUND BUCKET",c);m=Bx(a,e,m,r,u,["FUND BUCKET","CREATE BUCKET"],0,c),m+=wp(a,e+u,m,r-u*2,c)+8*c,m+=tR(a,e+u,m,r-u*2,"FROM","Select source bucket",c)+8*c;const d=10*c+36*c;i+o-u-d-m-8*c>70*c&&(m+=nR(a,e+u,m,r-u*2,c)+6*c),iR(a,e+u,i+o-u-d,r-u*2,c,"COMPLETE REQUIRED FIELDS")}function zx(a,e,i,r,o,c,u=0){switch(e){case"discover":hR(a,i,r,o,c,u);break;case"copy":pR(a,i,r,o,c,u);break;case"supervise":vR(a,i,r,o,c);break;case"isolate":xR(a,i,r,o,c);break}}function SR(a,e,i,r,o=0){a.clearRect(0,0,i,r),zx(a,e,0,0,i,r,o)}function MR(a,e,i,r,o){const{W:c,H:u}=$2(i,r),h=document.createElement("canvas");h.width=c,h.height=u;const m=h.getContext("2d"),d=m.createLinearGradient(0,0,0,u);d.addColorStop(0,"#080a0e"),d.addColorStop(.55,"#05070d"),d.addColorStop(1,"#030406"),m.fillStyle=d,m.fillRect(0,0,c,u);const g=Math.round(22*i),_=Math.round(.05*u),v=Math.round(.045*u),x=c-g*2;let E=_;const w=Math.min(34*i,c*.095);m.fillStyle="rgba(255,255,255,0.94)",m.font=`normal 400 ${w}px ${o}`,m.textBaseline="alphabetic",m.fillText(a.verb,g,E+w*.85),E+=Math.round(.09*u);const y=Math.min(13*i,c*.036);m.fillStyle="rgba(255,255,255,0.55)",m.font=`400 ${y}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`;const M=J2(m,a.description,x);m.fillText(M[0]??a.description,g,E+y),E+=Math.round(.07*u),E+=Math.round(.03*u);const I=g,z=E,R=x,O=Math.max(80*i,u-E-v);zx(m,Q2(e),I,z,R,O);const L=new Ex(h);return L.colorSpace=Qn,L.minFilter=As,L.generateMipmaps=!0,L}const Dv="!@#$%^&*()_+{}[]|;:,.<>?/0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",yR=50,cu=500,_h=100,Lv=168;function ER(){return typeof window>"u"?!1:window.matchMedia("(prefers-reduced-motion: reduce)").matches}function bR(){return Dv[Math.floor(Math.random()*Dv.length)]??"?"}function Nv(a){return Array.from(a).map(e=>{const i=Math.random()*(cu-_h),r=_h+Math.random()*(cu-i-_h),o=Math.min(cu,i+r);return{original:e,start:i,end:o}})}function TR(a){return Math.min(1,Math.max(0,a))}function AR({text:a,className:e,scrollerRef:i}){const r=We.useRef(null),o=We.useRef(Nv(a)),c=ER();return We.useEffect(()=>{o.current=Nv(a)},[a]),We.useEffect(()=>{if(c)return;const u=r.current;if(!u)return;let h=0,m=!0,d=-1;const g=()=>{const v=i.current;if(!v)return;const x=Math.max(0,-v.getBoundingClientRect().top),E=Math.min(cu,Math.max(0,x-yR));if(E===d&&d>=0)return;d=E;const w=o.current,y=u.querySelectorAll(".scroll-dissolve__glyph");let M=w.length>0;for(let I=0;I<w.length;I++){const z=w[I],R=y[I];if(!R)continue;const O=Math.max(.001,z.end-z.start),L=TR((E-z.start)/O);if(L<1&&(M=!1),L<=0){R.textContent=z.original===" "?" ":z.original,R.style.transform="translateY(0)",R.style.opacity="1",R.style.visibility="visible";continue}if(L>=1){R.textContent=z.original===" "?" ":z.original,R.style.transform=`translateY(${-Lv}px)`,R.style.opacity="0",R.style.visibility="hidden";continue}R.textContent=bR(),R.style.transform=`translateY(${-L*Lv}px)`,R.style.opacity=String(1-L),R.style.visibility="visible"}u.style.visibility=M?"hidden":"visible",u.style.display=M?"none":"block"},_=()=>{m&&(g(),h=requestAnimationFrame(_))};return h=requestAnimationFrame(_),()=>{m=!1,cancelAnimationFrame(h)}},[c,i,a]),c?D.jsx("p",{className:e,"aria-label":a,children:a}):D.jsx("p",{ref:r,className:["scroll-dissolve",e].filter(Boolean).join(" "),"aria-label":a,children:Array.from(a).map((u,h)=>D.jsx("span",{className:"scroll-dissolve__glyph","aria-hidden":!0,children:u===" "?" ":u},`${h}-${u}`))})}const RR="Proof first. Risk contained.",no=Mh.verbs.map((a,e)=>{const i=[{top:"#c8f5a8",mid:"#0a1410",bot:"#1a3d2e"},{top:"#9ee089",mid:"#060e18",bot:"#1e3a52"},{top:"#f0e6a0",mid:"#0c1008",bot:"#2a3820"},{top:"#7fd9a8",mid:"#080810",bot:"#243048"}];return{verb:a.verb,description:a.description,mood:i[e]??i[0]}}),pn=no.length,Ba=2.95,vl=6.9,Dp=32,Hx=4,Gx=5,dp=2.05,CR=1,wR=Ba*.55,Vx=.28,kx=.35,DR=Vx+kx,vh=.85,LR=35,Uv=LR/60*1e3,NR=.1;function Xx(a){return a<520?{mode:"mobile",canvasW:1280,canvasH:320,fontPx:112,planeBaseW:4.55,frustumFill:.9}:a<900?{mode:"tablet",canvasW:1600,canvasH:360,fontPx:132,planeBaseW:5.25,frustumFill:.94}:{mode:"desktop",canvasW:1920,canvasH:420,fontPx:152,planeBaseW:6.1,frustumFill:.96}}const UR=1.35,OR=.72,PR=.62,IR=.2,FR=14,BR=.42,zR=128,HR=12,GR=.004,VR=.0022,Ov=.12,kR=.88,XR=4,WR=32,qR=40,YR=50,jR=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,ZR=`
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
`,KR=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,QR=`
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
`,JR='"Reckk Heading", Georgia, "Times New Roman", serif',Wx="Morpheum Wordmark",yl=`"${Wx}"`,$R=[{t:0,c:"#e8ffe0"},{t:.45,c:"#c8f5a8"},{t:1,c:"#f0e6a0"}];async function e3(){if(typeof document>"u"||!document.fonts)return!1;try{const a=new FontFace(Wx,`url(${j2})`,{weight:"normal",style:"normal"});document.fonts.add(await a.load()),await document.fonts.load(`normal 152px ${yl}`);const e=document.fonts.check(`normal 152px ${yl}`);return e||console.error("[FlowIntro] Morpheum Wordmark failed to bind — title will not use Reckk fallback"),e}catch(a){return console.error("[FlowIntro] Morpheum Wordmark load failed",a),!1}}async function t3(){if(!(typeof document>"u"||!document.fonts))try{await e3();const a=new FontFace("Reckk Title",`url(${Y2})`,{weight:"normal",style:"normal"});document.fonts.add(await a.load());const e=new FontFace("Reckk Heading",`url(${q2})`,{weight:"normal",style:"normal"});document.fonts.add(await e.load()),await document.fonts.ready,await document.fonts.load(`normal 152px ${yl}`),await document.fonts.load('normal 64px "Reckk Heading"'),await document.fonts.load('normal 124px "Reckk Title"')}catch{}}const Qs="flow-intro-hide-chrome";function Pv(a){return a<=72}const n3=280;function hp(a){const e=document.documentElement,i=e.style.scrollBehavior;e.style.scrollBehavior="auto",window.scrollTo(0,Math.max(0,a)),e.style.scrollBehavior=i}function xh(){const a=document.getElementById("hero");if(!a)return;const e=a.getBoundingClientRect().top+window.scrollY;hp(e)}function tr(a){const e=$t.clamp(a,0,1);return e*e*e*(e*(e*6-15)+10)}function ml(a){const e=Math.max(1,a),i=Math.max(1,pn*e*CR),r=Math.max(1,i/Math.max(1,pn-1));return{cardPx:i,titlePx:r,totalPx:i+r}}const i3=320,a3=50,s3=70,Iv=.35;function r3(a){return Math.max(2,Math.max(1,a)*.004)}function o3(a){const e=$t.clamp(a,0,1);return 1-Math.pow(1-e,3)}function l3(a,e){const{cardPx:i,titlePx:r}=ml(e),o=Math.max(1,pn-1),c=$t.clamp(Math.round(a),0,pn-1);return r+c/o*i}function c3(a,e,i){return a.offsetTop+l3(e,i)}function u3(a,e){const i=pn-1,r=$t.clamp(a,0,i);if(e===0)return $t.clamp(Math.round(r),0,i);const o=Math.floor(r),c=Math.min(i,o+1),u=r-o;return e>0?u>=Iv?c:o:u<=1-Iv?o:c}function Sh(a,e,i,r,o,c){return!(r||a<e||a>i||o<c*.5)}function qx(a,e){const i=a/Math.max(1,e),r=Dp*Math.PI/180,o=2*vl*Math.tan(r/2),c=o*i,u=dp*Hx/Gx,h=.992,m=h*o/dp,d=h*c/u;return $t.clamp(Math.min(m,d),.52,2.35)}function Fv(a,e,i){const r=Xx(a),o=qx(a,e),c=a/Math.max(1,e),u=Dp*Math.PI/180,m=2*vl*Math.tan(u/2)*c,d=r.frustumFill*m/Math.max(1e-6,o),g=Math.min(r.planeBaseW,d);return{w:g,h:g*i}}function f3(a,e){const i=a/Math.max(1,pn-1),r=Math.min(Math.max(1,e*.38),Math.max(1,i*.34));return i<=r+.001?0:1-r/i}function d3(a,e){const i=Math.min(Math.max(1,e*.38),Math.max(1,a*.34));return a<=i+.001?0:1-i/a}function h3(a,e){const i=$t.clamp(e,0,.999);if(a<i)return{titleOp:1,lastCardOp:0};const r=Math.max(1e-6,1-i),o=tr($t.clamp((a-i)/r,0,1));return{titleOp:1-o,lastCardOp:o}}function p3(a,e,i,r=0){const o=pn-1;if(a<=0)return{opacity:e===0?1:0};if(a>=o-1e-5)return{opacity:e===o?1:0};const c=Math.floor(a);if(c>=o)return{opacity:e===o?1:0};if(e!==c&&e!==c+1)return{opacity:0};const u=a-c,h=$t.clamp(i,0,.999);if(u<h)return{opacity:e===c?1:0};const m=tr($t.clamp((u-h)/Math.max(1e-6,1-h),0,1));return e===c?{opacity:r>=.999?0:1}:{opacity:Math.max(m,r)}}function m3(a){return new Fi({uniforms:{uMap:{value:a},uOpacity:{value:1},uWipe:{value:0},uWipeEdge:{value:NR}},vertexShader:KR,fragmentShader:QR,transparent:!0,depthWrite:!0,depthTest:!0,side:Va})}function g3(a,e){return a>1.5&&a<e-.5}function _3(a){return $t.clamp(540/Math.max(a,340),.2,.55)}function v3(a,e,i){const r=[],o=FR;for(let c=0;c<o;c++){const u=$t.clamp(a-c/Math.max(1,o-1)*BR,-.08,1.08),h=Math.sin(u*Math.PI*2*UR)*PR*i,m=Math.sin(u*Math.PI*2*OR)*IR,d=Ov+c/Math.max(1,o-1)*(kR-Ov),g=e-d;r.push(new ee(h,m,g))}return r}function x3(a,e,i,r){const o=a.length;if(o<2)return new Ii;const c=[],u=[],h=[],m=[],d=new ee,g=new ee,_=new ee,v=new ee(0,1,0),x=e+1;for(let w=0;w<o;w++){w===0?d.subVectors(a[1],a[0]).normalize():w===o-1?d.subVectors(a[o-1],a[o-2]).normalize():d.subVectors(a[w+1],a[w-1]).normalize(),g.copy(v).cross(d),g.lengthSq()<1e-8&&g.set(1,0,0).cross(d),g.normalize(),_.crossVectors(d,g).normalize();const y=o===1?0:w/(o-1),M=i+(r-i)*Math.pow(y,1.5);for(let I=0;I<=e;I++){const z=I/e*Math.PI*2,R=Math.cos(z),O=Math.sin(z),L=a[w];c.push(L.x+(R*g.x+O*_.x)*M,L.y+(R*g.y+O*_.y)*M,L.z+(R*g.z+O*_.z)*M),u.push(R*g.x+O*_.x,R*g.y+O*_.y,R*g.z+O*_.z),h.push(o===1?0:w/(o-1),I/e)}}for(let w=0;w<o-1;w++)for(let y=0;y<e;y++){const M=w*x+y,I=M+1,z=M+x,R=z+1;m.push(M,z,I,I,z,R)}const E=new Ii;return E.setAttribute("position",new Oi(c,3)),E.setAttribute("normal",new Oi(u,3)),E.setAttribute("uv",new Oi(h,2)),E.setIndex(m),E.computeBoundingSphere(),E}function Bv(a,e,i,r){const o={verb:a.verb,description:a.description};return MR(o,e,i,r,JR)}function zv(a,e){const i=Xx(e),r=Math.min(a*2.35,3.25),o=Math.round(i.canvasW*r),c=Math.round(i.canvasH*r),u=document.createElement("canvas");u.width=o,u.height=c;const h=u.getContext("2d");h.clearRect(0,0,o,c);const m="Morpheum";let d=i.fontPx;h.textAlign="left",h.textBaseline="alphabetic";const g=()=>{h.font=`normal ${d*r}px ${yl}`};g();const _=O=>{h.font=`normal ${O*r}px ${yl}`;const L=h.measureText(m),B=Math.abs(L.actualBoundingBoxLeft??0),T=Math.abs(L.actualBoundingBoxRight??L.width),N=Math.abs(L.actualBoundingBoxAscent??O*r*.8),X=Math.abs(L.actualBoundingBoxDescent??O*r*.25);return{left:B,right:T,width:B+T,ascent:N,descent:X}},v=Math.max(1.25,1.85*r)*2,x=64*r+v,E=40*r+v,w=O=>{const L=_(O);return L.width+x*2<=o&&L.ascent+L.descent+E*2<=c};for(;!w(d)&&d>64;)d-=2;for(;w(d+2)&&d<i.fontPx+24;)d+=2;g();const y=_(d),M=(o-y.width)/2+y.left,I=c/2+(y.ascent-y.descent)/2,z=h.createLinearGradient(M-y.left,I-y.ascent,M+y.right,I+y.descent);$R.forEach(O=>z.addColorStop(O.t,O.c)),h.lineJoin="round",h.miterLimit=2,h.lineWidth=Math.max(1.25,1.85*r),h.strokeStyle="rgba(8,12,10,0.22)",h.strokeText(m,M,I),h.fillStyle=z,h.fillText(m,M,I);const R=new Ex(u);return R.colorSpace=Qn,R.minFilter=An,R.magFilter=An,R.generateMipmaps=!1,R}function Hv(a,e){a.generateMipmaps=!1,a.minFilter=An,a.magFilter=An,a.wrapS=Ki,a.wrapT=Ki;const i=e.capabilities.getMaxAnisotropy();a.anisotropy=Math.min(16,i),a.needsUpdate=!0}function S3(){const a=We.useRef(null),e=We.useRef(null),i=We.useRef(null),r=We.useRef(null),o=We.useRef(!1),c=We.useRef(null),u=We.useCallback(()=>{var m;if(o.current)return;o.current=!0,(m=c.current)==null||m.call(c);const h=e.current;h==null||h.classList.add("flow-intro__sticky--exit"),window.setTimeout(()=>{document.body.classList.remove(Qs),xh(),requestAnimationFrame(()=>{xh(),requestAnimationFrame(()=>{xh(),window.setTimeout(()=>{o.current=!1},100)})})},n3)},[]);return We.useLayoutEffect(()=>{const h=window.matchMedia("(prefers-reduced-motion: reduce)").matches,m=window.location.hash.replace(/^#/,"");return h||m!==""&&m!=="flow"&&m!=="hero"||document.body.classList.add(Qs),()=>{document.body.classList.remove(Qs)}},[]),We.useEffect(()=>{const h=m=>{if(m.key!=="Escape")return;const d=document.getElementById("hero");d&&d.getBoundingClientRect().top>8&&(m.preventDefault(),u())};return window.addEventListener("keydown",h),()=>window.removeEventListener("keydown",h)},[u]),We.useEffect(()=>{const h=window.location.hash.replace(/^#/,"");h&&h!=="flow"&&h!=="hero"&&requestAnimationFrame(()=>{var m;(m=document.getElementById(h))==null||m.scrollIntoView({block:"start"})})},[]),We.useEffect(()=>{const h=i.current,m=a.current;if(!h||!m)return;const d=h,g=m;let _=!1;if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){document.body.classList.remove(Qs);const E=r.current;E&&(E.style.height="0px");return}let x;return(async()=>{if(await t3(),_)return;const E=Math.min(window.devicePixelRatio,2),w=Math.max(320,d.clientWidth||window.innerWidth),y=Math.max(1,d.clientHeight||window.innerHeight),M=[],I=[],z=[],R=new Float64Array(pn).fill(-1);no.forEach((ge,Ne)=>{const Ue=pn-1-Ne,Ye=no[Ue],k=Bv(Ye,Ue,E,w);z.push(k);const Ae=m3(k);M.push(Ae);const ce=dp,Re=ce*Hx/Gx,we=new Pi(new ir(Re,ce),Ae);we.position.set(0,0,-Ne*Ba),we.renderOrder=Ne,I.push(we)});const O=zv(E,w),L=new Rp({map:O,transparent:!0,opacity:0,depthWrite:!1,depthTest:!0,side:oa}),B=O.image.height/O.image.width,{w:T,h:N}=Fv(w,y,B),X=new Pi(new ir(T,N),L);X.position.set(0,0,-(pn-1)*Ba),X.renderOrder=qR;const V=new RE,Y=new Ni(Dp,1,.08,120),ue=new W2({antialias:!0,alpha:!1,powerPreference:"high-performance"});ue.setPixelRatio(Math.min(window.devicePixelRatio,2)),ue.outputColorSpace=Qn,ue.sortObjects=!0,d.appendChild(ue.domElement),Hv(O,ue);const fe=new dl;I.forEach(ge=>fe.add(ge)),fe.add(X),V.add(fe);const q=new Fi({uniforms:{uStrength:{value:0}},vertexShader:jR,fragmentShader:ZR,transparent:!0,toneMapped:!1,depthTest:!1,depthWrite:!1,blending:yh}),F=new Pi(new Ii,q);F.frustumCulled=!1,F.renderOrder=YR,F.visible=!1,V.add(F);const H=no.map(ge=>new wt(ge.mood.mid)),$=H[0].clone();V.background=$;const _e=0,Me=-(pn-1)*Ba,P=vl,K=-.1*Ba,ye=.1*Ba;function Ce(ge,Ne){const Ue=ge+vl;return(P-Ue)/Ne}function ze(){const ge=Math.max(1,window.innerHeight),{totalPx:Ne}=ml(ge),Ue=Math.max(1,Ne),Ye=_e+K,k=Me+ye-wR,ce=(Ye-k)/Ue,Re=Ce(Ye,ce),we=Ce(k,ce);return{ih:ge,totalPx:Ue,scrollToWorldFactor:ce,minScroll:Re,maxScroll:we}}let{scrollToWorldFactor:se,minScroll:be,maxScroll:Te}=ze();const qe=new wt,it=new wt,et=new wt;function qt(){var Re;const ge=Math.max(320,d.clientWidth||window.innerWidth),Ne=Math.min(window.devicePixelRatio,2);z.forEach((we,xe)=>{we.dispose();const Ke=pn-1-xe,Ge=Bv(no[Ke],Ke,Ne,ge);z[xe]=Ge,M[xe].uniforms.uMap.value=Ge}),(Re=L.map)==null||Re.dispose();const Ue=zv(Ne,ge);L.map=Ue,L.needsUpdate=!0,Hv(Ue,ue);const Ye=Ue.image.height/Ue.image.width,k=Math.max(1,d.clientHeight||window.innerHeight),{w:Ae,h:ce}=Fv(ge,k,Ye);X.geometry.dispose(),X.geometry=new ir(Ae,ce)}function lt(){const ge=d.clientWidth,Ne=d.clientHeight;if(ge<2||Ne<2)return;Y.aspect=ge/Ne,Y.updateProjectionMatrix(),ue.setSize(ge,Ne,!1),qt();const Ue=ze();se=Ue.scrollToWorldFactor,be=Ue.minScroll,Te=Ue.maxScroll;const Ye=Math.max(1,window.innerHeight),{totalPx:k}=ml(Ye),Ae=r.current;if(Ae){const ce=Ye*DR,Re=Math.max(Math.ceil(k+ce+Ye*vh+32),Math.ceil(Ye*1.08));Ae.style.height=`${Re}px`}}lt(),requestAnimationFrame(()=>{_||qt()});let gt=0;function _t(){var Ze,tt;if(_)return;gt=requestAnimationFrame(_t);const ge=Math.max(1,window.innerHeight),{cardPx:Ne,titlePx:Ue,totalPx:Ye}=ml(ge),k=g.getBoundingClientRect(),Ae=Math.max(1,g.offsetHeight-ge),ce=$t.clamp(-k.top,0,Ae),Re=Math.min(ce,Ye),we=Math.max(1,Ye),xe=ge*Vx,Ke=ge*kx,Ge=xe+Ke,Ft=ce-Ye,Lt=tr($t.clamp(Ft/Math.max(1,xe),0,1)),zn=tr($t.clamp((Ft-xe)/Math.max(1,Ke),0,1)),Hn=$t.mapLinear(Ne,0,we,be,Te),Wa=d.clientWidth,Cs=d.clientHeight,Si=Math.max(1,Ue),Wn=Re<Si,Mi=Wn?$t.clamp(Re/Si,0,1):0,cn=Math.max(0,Re-Si),Rn=Math.max(1,Ne),Jn=$t.clamp(cn/Rn,0,1)*(pn-1),ws=qx(Wa,Cs),qa=document.getElementById("hero"),pa=qa?qa.getBoundingClientRect().top:0,Bi=qa?Pv(pa):!0;let $n;Wn?$n=$t.mapLinear(Re,0,Si,Te,Hn):$n=$t.mapLinear(Re,Si,we,Hn,be),$n=$t.clamp($n,be,Te);const yi=f3(Ne,ge),zi=d3(Si,ge),Ji=h3(Mi,zi),Hi=pn-1;if(Wn)et.copy(H[0]);else{const Ve=Math.min(pn-2,Math.floor(Jn)),Xe=Math.min(Ve+1,pn-1),mt=tr(Jn-Ve);qe.copy(H[Ve]),it.copy(H[Xe]),et.lerpColors(qe,it,mt)}V.background=$.copy(et);const rn=P-$n*se;Y.position.set(0,0,rn),Y.lookAt(0,0,rn-vl);const ma=Ye+Ge;let A=0;if(Ae>ma&&ce>=ma){const Ve=Math.max(1,Ae-ma);A=tr($t.clamp((ce-ma)/Ve,0,1))}const Z=Math.max(1,Ge+ge*vh),oe=ce<=we?$t.clamp(ce/we,0,1):1+$t.clamp(Ft/Z,0,1)*.45;if(g3(ce,Ae)){const Ve=v3(oe,rn,_3(Wa)),mt=new HE(Ve,!1,"centripetal").getSpacedPoints(zR);if(mt.length>=2){const yt=x3(mt,HR,GR,VR),Et=F.geometry.getAttribute("position"),ft=yt.getAttribute("position");if(Et&&ft&&Et.count===ft.count&&((Ze=F.geometry.getIndex())==null?void 0:Ze.count)===((tt=yt.getIndex())==null?void 0:tt.count)&&Et&&ft){Et.array.set(ft.array),Et.needsUpdate=!0;const Be=F.geometry.getAttribute("normal"),un=yt.getAttribute("normal");Be&&un&&(Be.array.set(un.array),Be.needsUpdate=!0);const ot=F.geometry.getAttribute("uv"),fn=yt.getAttribute("uv");ot&&fn&&(ot.array.set(fn.array),ot.needsUpdate=!0),yt.dispose()}else F.geometry.dispose(),F.geometry=yt;F.visible=!0,q.uniforms.uStrength.value=.36*(1-A*.92)}else F.visible=!1,q.uniforms.uStrength.value=0}else F.visible=!1,q.uniforms.uStrength.value=0;const te=Math.floor((pn-1)/2),Fe=performance.now(),je=$t.clamp(yi,0,.999);for(let Ve=0;Ve<pn;Ve++){if(Wn||Jn<=Ve+1e-5||Jn<Ve+je){R[Ve]=-1;continue}R[Ve]<0&&(Jn>=Ve+1-1e-5?R[Ve]=Fe-Uv:R[Ve]=Fe)}if(I.forEach((Ve,Xe)=>{const mt=-Xe*Ba,yt=pn-1-Xe,Et=R[yt];let ft=Et<0?0:tr($t.clamp((Fe-Et)/Uv,0,1));!Wn&&yt===pn-1&&zn>0&&(ft=Math.max(ft,zn));let{opacity:bt}=p3(Jn,yt,yi,ft);Wn&&Xe===Hi&&(bt*=Ji.lastCardOp,ft=0);let Be=1,un=0;!Wn&&yt===pn-1&&bt>.02&&Lt>0&&(Be=1-.28*Lt,un=-Ba*.32*Lt),Ve.position.set(0,0,mt+un),Ve.scale.setScalar(ws*Be);const ot=M[Xe];ot.uniforms.uOpacity.value=bt,ot.uniforms.uWipe.value=ft,ot.depthWrite=bt>=.995&&ft<.02,Ve.visible=bt>.003&&ft<.997,Ve.renderOrder=Xe<=te?XR+Xe:WR+(Xe-te-1)}),X.position.set(0,0,-Hi*Ba),X.scale.setScalar(ws),L.opacity=Wn?Ji.titleOp:0,L.depthWrite=L.opacity>=.995,X.visible=L.opacity>.003,!o.current){document.body.classList.toggle(Qs,!Bi);const Ve=e.current;Ve!=null&&Ve.classList.contains("flow-intro__sticky--exit")&&!Bi&&(Ve.style.transition="none",Ve.classList.remove("flow-intro__sticky--exit"),Ve.offsetWidth,Ve.style.transition="")}const Pe=r.current;if(Pe){const Ve=Ge+ge*vh+32,Xe=Math.max(Math.ceil(Ye+Ve),Math.ceil(ge*1.08));Pe.style.height!==`${Xe}px`&&(Pe.style.height=`${Xe}px`)}const Qe=1-A*.96;e.current&&(e.current.style.setProperty("--intro-ui-opacity",String(Qe)),e.current.style.setProperty("--intro-tagline-opacity","1")),ue.domElement.style.opacity=String(1-A),ue.render(V,Y)}_t();let rt=0,Yt=0,zt=!1,Ht=!1,sn=window.scrollY,It=0,jt="wheel";function j(){Yt&&(window.clearTimeout(Yt),Yt=0)}function Dt(){rt&&(cancelAnimationFrame(rt),rt=0),zt=!1}function xt(){Dt(),j()}c.current=xt;function U(){var Ft;const ge=Math.max(1,window.innerHeight),{cardPx:Ne,titlePx:Ue,totalPx:Ye}=ml(ge),k=g.getBoundingClientRect(),Ae=Math.max(1,g.offsetHeight-ge),ce=$t.clamp(-k.top,0,Ae),Re=document.getElementById("hero"),we=Re?Pv(Re.getBoundingClientRect().top):!0,xe=((Ft=e.current)==null?void 0:Ft.getBoundingClientRect().bottom)??ge,Ge=Math.max(0,Math.min(ce,Ye)-Ue)/Math.max(1,Ne)*(pn-1);return{innerH:ge,cardPx:Ne,titlePx:Ue,totalPx:Ye,scrolledPx:ce,landed:we,stickyBottom:xe,depthT:Ge}}function b(){if(_||o.current||Ht)return;j();const ge=jt==="touch"?s3:a3;Yt=window.setTimeout(()=>{Yt=0,J()},ge)}function J(){if(_||o.current||zt||Ht)return;const ge=U();if(!Sh(ge.scrolledPx,ge.titlePx,ge.totalPx,ge.landed,ge.stickyBottom,ge.innerH))return;const Ne=u3(ge.depthT,It),Ue=c3(g,Ne,ge.innerH),Ye=window.scrollY,k=Ue-Ye;if(Math.abs(k)<r3(ge.innerH))return;zt=!0;const Ae=performance.now(),ce=Re=>{if(_||o.current){zt=!1,rt=0;return}const we=U();if(!Sh(we.scrolledPx,we.titlePx,we.totalPx,we.landed,we.stickyBottom,we.innerH)){Dt();return}const xe=Math.min(1,(Re-Ae)/i3);hp(Ye+k*o3(xe)),xe<1?rt=requestAnimationFrame(ce):(hp(Ue),zt=!1,rt=0,It=0)};rt=requestAnimationFrame(ce)}function re(ge){jt="wheel",Math.abs(ge.deltaY)>.5&&(It=ge.deltaY>0?1:-1),Dt(),b()}function pe(){jt="touch",Ht=!0,xt()}function Le(){jt="touch",Ht=!0,Dt()}function Oe(){jt="touch",Ht=!1,b()}function he(){const ge=window.scrollY,Ne=ge-sn;if(sn=ge,zt){const Ue=U();Sh(Ue.scrolledPx,Ue.titlePx,Ue.totalPx,Ue.landed,Ue.stickyBottom,Ue.innerH)||xt();return}Math.abs(Ne)>.5&&(It=Ne>0?1:-1),Ht||b()}function me(){zt||o.current||Ht||(j(),J())}function De(){xt()}window.addEventListener("wheel",re,{passive:!0}),window.addEventListener("touchstart",pe,{passive:!0}),window.addEventListener("touchmove",Le,{passive:!0}),window.addEventListener("touchend",Oe,{passive:!0}),window.addEventListener("touchcancel",Oe,{passive:!0}),window.addEventListener("scroll",he,{passive:!0}),window.addEventListener("scrollend",me,{passive:!0}),window.addEventListener("resize",De,{passive:!0}),window.addEventListener("orientationchange",De,{passive:!0});const He=window.visualViewport;He&&He.addEventListener("resize",De),window.addEventListener("resize",lt,{passive:!0});const Ie=new ResizeObserver(lt);Ie.observe(d),x=()=>{var ge;xt(),c.current=null,cancelAnimationFrame(gt),document.body.classList.remove(Qs),window.removeEventListener("wheel",re),window.removeEventListener("touchstart",pe),window.removeEventListener("touchmove",Le),window.removeEventListener("touchend",Oe),window.removeEventListener("touchcancel",Oe),window.removeEventListener("scroll",he),window.removeEventListener("scrollend",me),window.removeEventListener("resize",De),window.removeEventListener("orientationchange",De),He&&He.removeEventListener("resize",De),window.removeEventListener("resize",lt),Ie.disconnect(),M.forEach(Ne=>{Ne.dispose()}),z.forEach(Ne=>Ne.dispose()),(ge=L.map)==null||ge.dispose(),L.dispose(),I.forEach(Ne=>Ne.geometry.dispose()),X.geometry.dispose(),F.geometry.dispose(),q.dispose(),V.remove(F),ue.dispose(),d.contains(ue.domElement)&&d.removeChild(ue.domElement)},_&&x()})(),()=>{var E;_=!0,(E=c.current)==null||E.call(c),c.current=null,document.body.classList.remove(Qs),x==null||x()}},[]),D.jsxs("section",{ref:a,id:"flow",className:"flow-intro","aria-label":"Morpheum — Discover, Copy, Supervise, Isolate",children:[D.jsxs("div",{ref:e,className:"flow-intro__sticky",children:[D.jsx("div",{ref:i,className:"flow-intro__canvas","aria-hidden":!0}),D.jsxs("div",{className:"flow-intro__top",children:[D.jsx("p",{className:"flow-intro__eyebrow",children:"/// Morpheum"}),D.jsxs("button",{type:"button",className:"flow-intro__skip",onClick:u,children:["Skip ",D.jsx("span",{className:"flow-intro__skip-key",children:"Esc"})]})]}),D.jsx("div",{className:"flow-intro__tagline-wrap",children:D.jsx(AR,{text:RR,className:"flow-intro__tagline",scrollerRef:a})}),D.jsx("div",{className:"flow-intro__sr","aria-live":"polite",children:no.map((h,m)=>D.jsxs("p",{children:["Step ",String(m+1).padStart(2,"0"),": ",h.verb,". ",h.description]},h.verb))})]}),D.jsx("div",{ref:r,className:"flow-intro__spacer","aria-hidden":!0})]})}const M3=280,y3=5/4,E3=3800,b3={discover:pl,copy:mR};function T3(){return typeof window<"u"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches}function A3({stepIndex:a,kind:e,className:i,width:r=M3}){const o=We.useRef(null),c=e??Ix(a),u=Math.round(r*y3);return We.useEffect(()=>{const h=o.current;if(!h)return;let m=0,d;const g=()=>{const x=Math.min(window.devicePixelRatio||1,2),E=Math.round(r*x),w=Math.round(u*x);(h.width!==E||h.height!==w)&&(h.width=E,h.height=w);const y=h.getContext("2d");y&&SR(y,c,E,w,m)};g();const _=b3[c];_&&_>1&&!T3()&&(d=setInterval(()=>{m=(m+1)%_,g()},E3));const v=()=>g();return window.addEventListener("resize",v),()=>{window.removeEventListener("resize",v),d&&clearInterval(d)}},[c,r,u]),D.jsx("div",{className:["loop-step-sheet",i].filter(Boolean).join(" "),style:{width:r,height:u},children:D.jsx("canvas",{ref:o,className:"loop-step-sheet__canvas",style:{width:r,height:u},"aria-hidden":!0})})}const Gv=[{id:"want-eth",agent:"SharpeShark",timestamp:"2026-07-08T15:42:00.000Z",timeLabel:"07-08, 15:42:00",status:"want-to",statusLabel:"Want to",action:"Open ETH long · 1.2 ETH",showActions:!0},{id:"rejected-btc",agent:"NightOwl",timestamp:"2026-07-08T15:31:00.000Z",timeLabel:"07-08, 15:31:00",status:"rejected",statusLabel:"Rejected",action:"Open BTC short · 0.04 BTC"},{id:"close-btc-profit",agent:"SharpeShark",timestamp:"2026-07-08T15:25:00.000Z",timeLabel:"07-08, 15:25:00",status:"short",statusLabel:"Close Long",action:"BTCUSDT · 0.04 BTC · 2,465.12 USDT",pnl:{text:"+103.09",tone:"long"}},{id:"open-eth-long",agent:"FluxRunner",timestamp:"2026-07-08T14:10:00.000Z",timeLabel:"07-08, 14:10:00",status:"long",statusLabel:"Open Long",action:"ETHUSDT · 0.8 ETH · 2,560.00 USDT"},{id:"open-sol-short",agent:"NightOwl",timestamp:"2026-07-07T09:42:00.000Z",timeLabel:"07-07, 09:42:00",status:"short",statusLabel:"Open Short",action:"SOLUSDT · 12 SOL · 1,824.00 USDT"}];function R3(){return D.jsxs("aside",{className:"supervise-log","aria-label":"Agent activity log",children:[D.jsx("header",{className:"supervise-log__header",children:D.jsx("span",{className:"supervise-log__kicker",children:"Activity log"})}),D.jsx("ol",{className:"supervise-log__timeline",children:Gv.map((a,e)=>{const i=e===Gv.length-1,r=e===0;return D.jsxs("li",{className:"supervise-log__item",children:[D.jsxs("div",{className:"supervise-log__meta",children:[D.jsx("span",{className:"supervise-log__agent",children:a.agent}),D.jsx("time",{className:"supervise-log__time",dateTime:a.timestamp,children:a.timeLabel})]}),D.jsxs("div",{className:"supervise-log__track","aria-hidden":!0,children:[i?null:D.jsx("span",{className:"supervise-log__track-line"}),D.jsx("span",{className:["supervise-log__dot",r?"supervise-log__dot--latest":""].filter(Boolean).join(" ")})]}),D.jsxs("div",{className:"supervise-log__body",children:[D.jsx("span",{className:`supervise-log__badge supervise-log__badge--${a.status}`,children:a.statusLabel}),D.jsxs("p",{className:"supervise-log__action",children:[a.action,a.pnl?D.jsxs(D.Fragment,{children:[" · ",D.jsx("span",{className:`supervise-log__pnl supervise-log__pnl--${a.pnl.tone}`,children:a.pnl.text})]}):null]}),a.showActions?D.jsxs("div",{className:"supervise-log__actions",children:[D.jsx("button",{type:"button",className:"supervise-log__btn supervise-log__btn--reject",children:"Reject"}),D.jsx("button",{type:"button",className:"supervise-log__btn supervise-log__btn--approve",children:"Approve"})]}):null]})]},a.id)})})]})}const C3=/^(action)$/i;function w3(a){return a.split(/(\s*[·/]\s*)/).map((i,r)=>C3.test(i.trim())?D.jsx("span",{className:"stat-chip__brand",children:i},r):D.jsx("span",{children:i},r))}function Yx({label:a,status:e,live:i}){return D.jsxs("span",{className:`stat-chip ${i?"stat-chip--live":""}`,children:[D.jsx("span",{className:"stat-chip__label",children:a}),D.jsx("span",{className:"stat-chip__sep",children:"·"}),D.jsx("span",{className:"stat-chip__status",children:w3(e)})]})}var D3=Jv();function L3(a,e,i=!1){a.style.fontFamily=e.fontFamily,a.style.fontSize=e.fontSize,a.style.fontWeight=e.fontWeight,a.style.letterSpacing=e.letterSpacing,a.style.lineHeight=e.lineHeight,a.style.textTransform=e.textTransform,a.style.whiteSpace=i?"nowrap":"normal",a.style.wordBreak=i?"normal":"break-word"}function N3(a,e,i,r){const o=getComputedStyle(i),c=document.createElement("div");c.style.position="fixed",c.style.left="-99999px",c.style.top="0",c.style.visibility="hidden",c.style.pointerEvents="none",c.style.width=`${e}px`,L3(c,o,!r);const u=document.createTextNode(a);return c.appendChild(u),document.body.appendChild(c),{probe:c,textNode:u}}function Vv(a,e,i,r=!0){if(!a)return{lines:[],blockHeight:0};if(e<=0)return{lines:[a],blockHeight:0};const{probe:o,textNode:c}=N3(a,e,i,r),u=o.offsetHeight;if(!r)return document.body.removeChild(o),{lines:[a],blockHeight:u};const h=document.createRange(),m=[];let d=0,g=0;for(let _=1;_<=a.length;_++){h.setStart(c,0),h.setEnd(c,_);const v=h.getClientRects().length;v>g&&g>0&&(m.push(a.slice(d,_-1)),d=_-1),g=v}return d<a.length&&m.push(a.slice(d)),document.body.removeChild(o),{lines:m.length>0?m:[a],blockHeight:u}}const U3=40,O3=5,P3="typewriter-reveal",kv=1e3,I3=4e3;function Xv(){return kv+Math.random()*(I3-kv)}function jx(){return typeof window>"u"?!1:window.matchMedia("(prefers-reduced-motion: reduce)").matches}function F3({text:a,content:e,speed:i,cursorWidth:r,active:o,waiting:c,completed:u,holdCursor:h=!1,onComplete:m}){const d=We.useRef(null),g=We.useRef(m),_=We.useRef(null),v=We.useRef(null),x=We.useRef(null),E=We.useRef("idle"),[w,y]=We.useState("idle");g.current=m;const M=We.useCallback(()=>{_.current&&(clearTimeout(_.current),_.current=null)},[]),I=We.useCallback(()=>{var N;M(),v.current=null,x.current=null,E.current="complete",y("complete"),(N=g.current)==null||N.call(g)},[M]),z=We.useCallback(N=>{M(),v.current=Date.now()+N,_.current=setTimeout(I,N)},[M,I]);We.useLayoutEffect(()=>{E.current="idle",y("idle"),x.current=null,v.current=null,M()},[a,i,r,M]),We.useLayoutEffect(()=>{var H,$,_e;if(c||u||E.current==="complete")return;if(!o){E.current==="cursor-hold"&&_.current&&v.current!=null&&(M(),x.current=Math.max(0,v.current-Date.now()),v.current=null);return}if(E.current==="cursor-hold"&&!_.current){const Me=x.current??Xv();x.current=null,z(Me);return}if(E.current==="animating"||E.current==="cursor-hold")return;if(jx()){(H=g.current)==null||H.call(g);return}const N=d.current;if(!N||!a){($=g.current)==null||$.call(g);return}N.style.width="",N.offsetWidth;const X=Math.max(a.length/i*1e3,120),V=Math.max(a.length,1),Y=N.closest(".typewriter-block"),ue=(Y==null?void 0:Y.clientWidth)??((_e=N.parentElement)==null?void 0:_e.clientWidth)??0;N.style.whiteSpace="nowrap",N.style.width="auto";const fe=N.scrollWidth,q=ue>0?Math.min(fe,ue):fe;N.style.width="0",N.style.setProperty("--tw-duration",`${X}ms`),N.style.setProperty("--tw-target-width",`${q}px`),N.style.setProperty("--tw-steps",String(V)),N.style.setProperty("--tw-cursor-width",`${r}px`),N.offsetWidth,E.current="animating",y("animating");const F=Me=>{if(Me.animationName===P3){if(h){N.style.width=`${q}px`,E.current="cursor-hold",y("cursor-hold"),z(Xv());return}N.style.width="",I()}};return N.addEventListener("animationend",F),()=>{N.removeEventListener("animationend",F)}},[o,u,I,h,z,i,a,c,M,r]);const R=w==="animating",O=w==="cursor-hold",L=w==="complete",T=["typewriter","typewriter-line",c?"is-waiting":"",R?"is-animating":"",O?"is-cursor-hold":"",u||L?"is-complete":"",!o&&!c&&!u&&!L&&(R||O)?"is-paused":""].filter(Boolean).join(" ");return D.jsx("span",{ref:d,className:T,children:e??a})}function Lp({text:a,children:e,className:i,speed:r=U3,cursorWidth:o=O3,multiline:c="auto",active:u=!0,holdCursor:h=!0,onComplete:m}){const d=We.useRef(null),g=We.useRef(m),[_,v]=We.useState([]),[x,E]=We.useState(0),[w,y]=We.useState(0),[M,I]=We.useState(!1),[z,R]=We.useState(!1),O=jx();g.current=m;const L=We.useCallback(()=>{const fe=d.current;if(!fe||!a)return v([]),E(0),R(!0),!0;const q=fe.clientWidth;if(q<1)return!1;const H=(c==="auto"||c===!0)&&!O,{lines:$,blockHeight:_e}=Vv(a,q,fe,H);let Me=_e;if(!H){const P=Vv(a,q,fe,!0);Me=Math.max(_e,P.blockHeight)}return v($),E(Me),R(!0),!0},[a,c,O]);We.useLayoutEffect(()=>{var fe,q;if(y(0),I(!1),R(!1),v([]),E(0),O){(fe=g.current)==null||fe.call(g),R(!0);return}if(!a){(q=g.current)==null||q.call(g),R(!0);return}if(!L()){const F=new ResizeObserver(()=>{L()&&F.disconnect()});return d.current&&F.observe(d.current),()=>F.disconnect()}},[a,c,L,O]);const B=We.useCallback(fe=>{var F;const q=fe>=_.length-1;D3.flushSync(()=>{if(!q){y(fe+1);return}I(!0)}),q&&((F=g.current)==null||F.call(g))},[_]),N=["typewriter-block",_.length>1?"typewriter-lines":"typewriter-host",i??"",M?"is-complete":"",z?"":"is-measuring",O?"is-static":""].filter(Boolean).join(" "),X={...!M&&!O&&x>0?{height:x,minHeight:x}:void 0},V=e??a;if(!z)return D.jsx("span",{ref:d,className:N,style:X,children:V});if(O||!a)return D.jsx("span",{ref:d,className:["typewriter","is-static",i??""].filter(Boolean).join(" "),children:V});if(M)return D.jsx("span",{ref:d,className:["typewriter-block","typewriter-host","is-complete",i??""].filter(Boolean).join(" "),children:V});const Y=_.length>0?_:[a],ue=!!e&&Y.length<=1;return D.jsxs("span",{ref:d,className:N,style:X,"aria-label":a,children:[D.jsx("span",{className:"typewriter-ghost","aria-hidden":!0,children:V}),D.jsx("span",{className:"typewriter-overlay","aria-hidden":!0,children:Y.map((fe,q)=>D.jsx(F3,{text:fe,content:ue?e:void 0,speed:r,cursorWidth:o,waiting:q>w,active:u&&q===w,completed:q<w,holdCursor:h&&q===Y.length-1,onComplete:q===w?()=>B(q):void 0},`${q}-${fe}`))})]})}function B3(){return typeof window<"u"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches}function Np(a,e){const i=(e==null?void 0:e.amount)??.2,[r,o]=We.useState(!1);return We.useLayoutEffect(()=>{if(r)return;if(B3()){o(!0);return}const c=a.current;if(!c)return;const u=new IntersectionObserver(h=>{for(const m of h)if(m.isIntersecting&&m.intersectionRatio>=Math.min(i,1)){o(!0),u.disconnect();return}},{root:null,threshold:[0,i,Math.min(i+.15,1),1],rootMargin:"0px"});return u.observe(c),()=>u.disconnect()},[i,r,a]),r}function z3(a){return String(a).padStart(2,"0")}function gu(){return typeof window<"u"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches}const H3=1600,G3=1500,Wv=5e3,V3=7e3;function k3(){return Wv+Math.random()*(V3-Wv)}function X3({text:a,active:e}){const[i,r]=We.useState(!1),[o,c]=We.useState(0),u=We.useRef(null),h=`> ${a}`,m=We.useCallback(()=>{u.current&&(clearTimeout(u.current),u.current=null)},[]);We.useLayoutEffect(()=>{if(m(),!e){r(!1),c(0);return}if(gu()){r(!0);return}const g=window.setTimeout(()=>r(!0),G3);return()=>{window.clearTimeout(g),m()}},[e,m]);const d=We.useCallback(()=>{gu()||(m(),u.current=setTimeout(()=>{u.current=null,c(g=>g+1)},k3()))},[m]);return D.jsx("p",{className:"flow-step__example",children:i?D.jsx(Lp,{text:h,className:"flow-step__example-type",speed:42,multiline:"auto",active:!0,holdCursor:!0,onComplete:d},o):D.jsx("span",{className:"flow-step__example-type","aria-hidden":!0,children:h})})}function W3(){const[a,e]=We.useState(()=>new Set),[i,r]=We.useState(!1),o=We.useRef(new Map),c=We.useRef(null),u=Np(c,{amount:.35}),h=vs.steps.every(_=>a.has(`step-${_.n}`));We.useLayoutEffect(()=>{if(gu()){e(new Set(vs.steps.map(v=>`step-${v.n}`))),r(!0);return}const _=new IntersectionObserver(v=>{e(x=>{const E=new Set(x);for(const w of v){const y=w.target.dataset.flowKey;y&&w.isIntersecting&&E.add(y)}return E})},{root:null,threshold:[0,.01,.08,.15,.25],rootMargin:"-42% 0px -42% 0px"});for(const v of o.current.values())_.observe(v);return()=>{_.disconnect()}},[]),We.useLayoutEffect(()=>{if(gu())return;if(!h){r(!1);return}const _=window.setTimeout(()=>{r(!0)},H3);return()=>window.clearTimeout(_)},[h]);const m=We.useCallback((_,v)=>{v?o.current.set(_,v):o.current.delete(_)},[]),d=We.useCallback(_=>{e(v=>new Set(v).add(_))},[]),g=u&&i;return D.jsx("section",{id:"how",className:"section flow",children:D.jsxs("div",{className:"container",children:[D.jsx("p",{className:"section-kicker",children:vs.kicker}),D.jsx("h2",{className:"section-title flow__title",children:vs.title}),D.jsx("div",{className:"flow__chips",children:vs.chips.map(_=>D.jsx(Yx,{label:_.label,status:_.value},_.label))}),D.jsx("div",{className:"flow__steps",role:"list",children:vs.steps.map((_,v)=>{const x=`step-${_.n}`,E=a.has(x);return D.jsxs("article",{ref:w=>m(x,w),"data-flow-key":x,role:"listitem",className:`flow-step${E?" flow-step--expanded":""}`,"aria-expanded":E,children:[D.jsxs("button",{type:"button",className:"flow-step__head",onClick:()=>d(x),"aria-label":E?`${_.title}, expanded`:`${_.title}, tap to expand`,children:[D.jsxs("span",{className:"flow-step__idx",children:["Step ",z3(_.n)]}),D.jsx("h3",{className:"flow-step__title",children:_.title}),D.jsx("span",{className:"flow-step__chevron","aria-hidden":!0,children:E?"−":"+"})]}),D.jsx("div",{className:"flow-step__expand","aria-hidden":!E,children:D.jsx("div",{className:"flow-step__expand-inner",children:D.jsxs("div",{className:`flow-step__split${v===2?" flow-step__split--supervise":""}`,children:[D.jsx("p",{className:"flow-step__meta",children:_.feature}),D.jsxs("div",{className:"flow-step__copy",children:[D.jsx("p",{className:"flow-step__detail",children:_.body}),D.jsx(X3,{text:_.example,active:E}),D.jsx("div",{className:"flow-step__actions",children:D.jsx("a",{href:Tn.explore,className:"flow-step__open","aria-label":`Explore after ${_.title}`,children:D.jsx("span",{"aria-hidden":!0,className:"flow-step__open-arrow",children:"→"})})})]}),D.jsx("div",{className:`flow-step__sheet${v===2?" flow-step__sheet--log":""}`,"aria-hidden":!E,children:E?v===2?D.jsx(R3,{}):D.jsx(A3,{stepIndex:v,width:280}):null})]})})})]},x)})}),D.jsx("p",{ref:c,className:"flow__outcome",children:g?D.jsx(Lp,{text:vs.outcome,className:"flow__outcome-type",speed:42,multiline:"auto",active:!0,holdCursor:!0}):D.jsx("span",{className:"flow__outcome-type","aria-hidden":!0,children:vs.outcome})})]})})}const q3=["M41.9213 3.43614C43.0393 3.43614 43.8716 3.77154 44.4182 4.44235C44.9647 5.138 45.1262 6.1939 44.9026 7.61005L41.884 26.8026C41.7846 27.4982 41.8467 28.0075 42.0703 28.3305C42.2691 28.6784 42.6542 28.8771 43.2256 28.9268L43.8591 28.9641L43.8219 29.2622L36.7784 30.492L36.4803 30.492L40.1324 7.46098C40.3064 6.26843 40.0206 5.67216 39.2753 5.67216C38.9523 5.67216 38.6045 5.75912 38.2318 5.93303C37.8343 6.10694 37.3995 6.44235 36.9275 6.93924L36.7411 6.79017C38.0828 4.55415 39.8095 3.43614 41.9213 3.43614Z","M29.9958 3.43614C31.1138 3.43614 31.9461 3.77154 32.4927 4.44235C33.0393 5.138 33.2007 6.1939 32.9771 7.61005L29.9585 26.8026C29.8591 27.4982 29.9212 28.0075 30.1449 28.3305C30.3436 28.6784 30.7287 28.8771 31.3001 28.9268L31.9337 28.9641L31.8964 29.2622L24.8529 30.492L24.5548 30.492L28.207 7.46098C28.3809 6.26843 28.0952 5.67216 27.3498 5.67216C27.0268 5.67216 26.679 5.75912 26.3063 5.93303C25.9088 6.10694 25.474 6.44235 25.002 6.93924L24.8157 6.79017C26.1573 4.55415 27.884 3.43614 29.9958 3.43614Z","M18.0703 3.43614C19.1883 3.43614 20.0206 3.77154 20.5672 4.44235C21.1138 5.138 21.2753 6.1939 21.0517 7.61005L18.033 26.8026C17.9337 27.4982 17.9958 28.0075 18.2194 28.3305C18.4181 28.6784 18.8032 28.8771 19.3747 28.9268L20.0082 28.9641L19.9709 29.2622L12.9275 30.492L12.6293 30.492L16.2815 7.46098C16.4554 6.26843 16.1697 5.67216 15.4243 5.67216C15.1014 5.67216 14.7535 5.75912 14.3809 5.93303C13.9834 6.10694 13.5486 6.44235 13.0765 6.93924L12.8902 6.79017C14.2318 4.55415 15.9585 3.43614 18.0703 3.43614Z","M45.5631 10.8482C46.0378 11.9189 46.0912 12.9315 45.7231 13.8861C45.3095 14.8231 44.3453 15.4956 42.8305 15.9035L16.576 22.853C15.2325 23.2226 14.7771 24.0651 15.2096 25.3806L15.7698 26.7714L13.8491 27.2839L9.924 22.1284L9.25377 20.6168L40.8242 12.2711C41.6674 12.048 42.2133 11.7494 42.4619 11.3754C42.6651 10.9838 42.669 10.5676 42.4735 10.1267C42.3199 9.78031 42.1016 9.5003 41.8185 9.2867C41.4899 9.05556 41.0511 8.87329 40.5021 8.7399L41.5734 7.5866C42.563 7.86379 43.3915 8.28774 44.0591 8.85845C44.7127 9.39767 45.214 10.0609 45.5631 10.8482Z"],Y3=58,j3=35;function Z3({fill:a="#C8F5A8",width:e=58,height:i=35,padding:r=10,"aria-hidden":o=!0,...c}){const u=[-r,-r,Y3+r*2,j3+r*2].join(" ");return D.jsx("svg",{width:e,height:i,viewBox:u,fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":o,...c,children:q3.map(h=>D.jsx("path",{d:h,fill:a},h.slice(0,24)))})}const K3={sm:{width:46,height:28},md:{width:46,height:28},lg:{width:69,height:42},hero:{width:119,height:72}};function Zx({size:a="md",showWordmark:e=!0,className:i="",brandName:r="Morpheum"}){const o=K3[a];return D.jsxs("span",{className:`brand-mark brand-mark--${a} ${i}`.trim(),children:[D.jsx(Z3,{className:"brand-mark__icon",width:o.width,height:o.height,padding:0,fill:"var(--terminal-brand)"}),e?D.jsx("span",{className:"brand-mark__word",children:r}):null]})}function Q3(){return D.jsx("footer",{className:"site-footer",children:D.jsxs("div",{className:"container site-footer__inner",children:[D.jsxs("div",{className:"site-footer__brand",children:[D.jsx("a",{className:"site-footer__logo",href:"#hero","aria-label":"Morpheum home",children:D.jsx(Zx,{size:"sm"})}),D.jsx("p",{className:"site-footer__legal",children:C_.legal})]}),D.jsxs("div",{className:"site-footer__meta",children:[D.jsxs("nav",{className:"site-footer__nav","aria-label":"Footer",children:[nu.map(a=>D.jsx("a",{href:a.href,children:a.label},a.id)),D.jsx("a",{href:Tn.docs,children:"Docs"}),D.jsx("a",{href:Tn.manifesto,children:"Manifesto"}),D.jsx("a",{href:Tn.discord,children:"Discord"}),D.jsx("a",{href:Tn.x,children:"X"})]}),D.jsx("div",{className:"site-footer__labels","aria-label":"Protocol",children:C_.labels.map(a=>D.jsx("span",{className:"site-footer__label",children:a},a))})]})]})})}const qv="!@#$%^&*()_+{}[]|;:,.<>?/0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",Kx=50,Yv=3500,jv=4e3,J3=1400,$3=1200,eC=4500;function Qx(){return typeof window>"u"?!1:window.matchMedia("(prefers-reduced-motion: reduce)").matches}function Zv(a){return/[A-Za-z0-9]/.test(a)}function tC(){return qv[Math.floor(Math.random()*qv.length)]??"?"}function nC(a){return Math.random()<.5?tC():a}function Jx(a,e,i){const r=[];for(let d=0;d<a.length;d++)Zv(a[d]??"")&&r.push(d);const o=r.length,c=o===0?1:Math.min(e/i,1),u=Math.floor(c*o),h=new Set(r.slice(0,u));let m="";for(let d=0;d<a.length;d++){const g=a[d]??"";!Zv(g)||h.has(d)?m+=g:m+=nC(g)}return m}function iC(a){return typeof a=="boolean"?{enabled:a,decryptMs:Yv,pauseMs:jv}:{enabled:a.enabled??!0,decryptMs:a.decryptMs??Yv,pauseMs:a.pauseMs??jv}}function Fn(a,e=!0){const{enabled:i,decryptMs:r,pauseMs:o}=iC(e),c=r+o,[u,h]=We.useState(a);return We.useEffect(()=>{if(!i||Qx()){h(a);return}let m=Date.now();const d=()=>{const _=Date.now();let v=_-m;v>=c&&(m=_,v=0),h(Jx(a,v,r))};d();const g=setInterval(d,Kx);return()=>{clearInterval(g)}},[a,i,r,c]),u}function Kv(a,e={}){const i=e.enabled??!0,r=e.stepDelayMs??J3,o=e.stepDecryptMs??$3,c=e.holdMs??eC,u=a.join("\0"),[h,m]=We.useState(a),[d,g]=We.useState(()=>a.map(()=>!1));return We.useEffect(()=>{const _=u.length>0?u.split("\0"):[];if(!i||Qx()||_.length===0){m(_),g(_.map(()=>!0));return}const x=(_.length-1)*r+o+c;let E=Date.now();const w=()=>{const M=Date.now();let I=M-E;I>=x&&(E=M,I=0);const z=[],R=[];for(let O=0;O<_.length;O++){const L=_[O]??"",B=O*r,T=I>=B;if(R.push(T),!T){z.push(L);continue}const N=I-B;z.push(Jx(L,N,o))}m(z),g(R)};w();const y=setInterval(w,Kx);return()=>{clearInterval(y)}},[u,i,r,o,c]),{displays:h,started:d}}function aC(){const[a,e]=_s.headline,i=Fn(_s.eyebrow.label);return D.jsxs("section",{id:"hero",className:"hero","aria-labelledby":"hero-heading",children:[D.jsx("div",{className:"hero__atmosphere","aria-hidden":!0}),D.jsx("div",{className:"hero__grid","aria-hidden":!0}),D.jsx("div",{className:"hero__scanlines","aria-hidden":!0}),D.jsx("div",{className:"hero__grain","aria-hidden":!0}),D.jsx("div",{className:"hero__veil","aria-hidden":!0}),D.jsxs("div",{className:"container hero__content",children:[D.jsxs("a",{className:"hero__eyebrow hero__eyebrow--matrix",href:_s.eyebrow.href,"aria-label":`${_s.eyebrow.label}›`,children:[i,D.jsx("span",{className:"hero__eyebrow-chevron","aria-hidden":!0,children:"›"})]}),D.jsxs("h1",{id:"hero-heading",className:"hero__headline",children:[D.jsx("span",{className:"hero__line hero__line--lead",children:a}),D.jsx("span",{className:"hero__line hero__line--punch",children:e})]}),D.jsxs("div",{className:"hero__ctas",children:[D.jsx(oo,{href:_s.primaryCta.href,variant:"primary",children:_s.primaryCta.label}),D.jsx(oo,{href:_s.secondaryCta.href,variant:"secondary",children:_s.secondaryCta.label})]})]})]})}function sC(){const a=Fn(Od.text);return D.jsx("div",{className:"manifesto-strip",children:D.jsx("a",{className:"manifesto-strip__link manifesto-strip__link--matrix",href:Od.href,"aria-label":Od.text,children:a})})}function rC(){const a=[...R_,...R_];return D.jsx("div",{className:"marquee","aria-label":"Live status",children:D.jsx("div",{className:"marquee__viewport",children:D.jsx("div",{className:"marquee__track",children:a.map((e,i)=>D.jsx(Yx,{label:e.label,status:e.status,live:"live"in e?e.live:!1},`${e.label}-${i}`))})})})}const Kn={decryptMs:2800,pauseMs:5200},Qv={stepDelayMs:1400,stepDecryptMs:1200,holdMs:4500};function $x(a){return String(a+1).padStart(2,"0")}function oC(a,e,i,r){return`${$x(a)}  ${e}  ·  ${i}  ·  ${r}`}function lC(a,e,i){return`${$x(a)}  ${e}  ·  ${i}`}function cC(a){return!a.from||!a.to||!a.asset||!a.amt?null:`${a.from} → ${a.to} · ${a.asset} ${a.amt}`}function ri({label:a,value:e,display:i}){return D.jsxs("div",{className:"persona-card__meta-row",children:[D.jsx("span",{className:"terminal-label",children:a}),D.jsx("span",{className:"terminal-value persona-card__meta-value persona-card__meta-value--matrix","aria-label":e,children:i})]})}function nn({value:a,display:e,className:i="terminal-value persona-card__meta-value persona-card__meta-value--matrix",hidden:r=!1}){return D.jsx("p",{className:i,"aria-label":a,"aria-hidden":r||void 0,"data-pending":r?"true":void 0,children:e})}function uC({meta:a}){const e=Fn(a.name,Kn),i=Fn(a.tx,Kn),r=Fn(a.hash,Kn),o=Fn(a.chain,Kn),c=Fn(a.verified,Kn),u=Fn(a.rep,Kn),h=Fn(a.portable,Kn),m=Fn(a.next,Kn),d=`tx ${a.tx}`,g=`tx ${i}`,_=`did · ${a.name}`,v=`identity · ${e}`,x=`hash ${a.hash}`,E=`hash ${r}`,w=`chain ${a.chain}`,y=`chain ${o}`,M=`verified ${a.verified} · rep ${a.rep} · portable ${a.portable}`,I=`verified ${c} · rep ${u} · portable ${h}`,z=`next ${a.next}`,R=`next ${m}`,O=`rep ${a.rep} · portable ${a.portable}`,L=`rep ${u} · portable ${h}`,B=`verified ${a.verified}`,T=`verified ${c}`;return D.jsxs("div",{className:"persona-card__meta persona-card__meta--identity",children:[D.jsx("p",{className:"persona-card__meta-kind terminal-label",children:"become an operator"}),D.jsx("p",{className:"terminal-label",children:"on-chain transaction"}),D.jsxs("div",{className:"persona-card__meta-rows",children:[D.jsx(ri,{label:"tx",value:a.tx,display:i}),D.jsx(ri,{label:"hash",value:a.hash,display:r}),D.jsx(ri,{label:"chain",value:a.chain,display:o}),D.jsx(ri,{label:"verified",value:a.verified,display:c}),D.jsx(ri,{label:"rep",value:a.rep,display:u}),D.jsx(ri,{label:"portable",value:a.portable,display:h}),D.jsx(ri,{label:"next",value:a.next,display:m})]}),D.jsxs("div",{className:"persona-card__meta-compact",children:[D.jsx(nn,{value:d,display:g}),D.jsx(nn,{value:_,display:v,className:"terminal-value persona-card__meta-value--matrix"}),D.jsx(nn,{value:x,display:E}),D.jsx(nn,{value:w,display:y}),D.jsx(nn,{value:M,display:I}),D.jsx(nn,{value:z,display:R})]}),D.jsxs("div",{className:"persona-card__meta-xxs",children:[D.jsx(nn,{value:d,display:g}),D.jsx(nn,{value:a.name,display:e,className:"terminal-value persona-card__meta-value--matrix"}),D.jsx(nn,{value:x,display:E}),D.jsx(nn,{value:w,display:y}),D.jsx(nn,{value:B,display:T}),D.jsx(nn,{value:O,display:L}),D.jsx(nn,{value:z,display:R})]})]})}function fC({meta:a}){const e=Fn(a.tx,Kn),i=Fn(a.from,Kn),r=Fn(a.to,Kn),o=Fn(a.asset,Kn),c=Fn(a.amt,Kn),u=Fn(a.chain,Kn),h=Fn(a.status,Kn),m=`${a.from} → ${a.to}`,d=`${i} → ${r}`,g=`tx ${a.tx}`,_=`tx ${e}`,v=`${a.asset} ${a.amt} · ${a.chain}`,x=`${o} ${c} · ${u}`,E=`${a.asset} ${a.amt}`,w=`${o} ${c}`,y=`status ${a.status}`,M=`status ${h}`;return D.jsxs("div",{className:"persona-card__meta persona-card__meta--community",children:[D.jsx("p",{className:"persona-card__meta-kind terminal-label",children:a.label}),D.jsxs("div",{className:"persona-card__meta-rows",children:[D.jsx(ri,{label:"tx",value:a.tx,display:e}),D.jsx(ri,{label:"from",value:a.from,display:i}),D.jsx(ri,{label:"to",value:a.to,display:r}),D.jsx(ri,{label:"asset",value:a.asset,display:o}),D.jsx(ri,{label:"amt",value:a.amt,display:c}),D.jsx(ri,{label:"chain",value:a.chain,display:u}),D.jsx(ri,{label:"status",value:a.status,display:h})]}),D.jsxs("div",{className:"persona-card__meta-compact",children:[D.jsx("p",{className:"terminal-label",children:a.label}),D.jsx(nn,{value:g,display:_}),D.jsx(nn,{value:m,display:d}),D.jsx(nn,{value:v,display:x}),D.jsx(nn,{value:y,display:M})]}),D.jsxs("div",{className:"persona-card__meta-xxs",children:[D.jsx("p",{className:"terminal-label",children:a.label}),D.jsx(nn,{value:g,display:_}),D.jsx(nn,{value:m,display:d}),D.jsx(nn,{value:E,display:w}),D.jsx(nn,{value:a.chain,display:u}),D.jsx(nn,{value:y,display:M})]})]})}function dC({meta:a}){const e=We.useRef(null),i=Np(e,{amount:.15}),r=a.steps.find(d=>d.from&&d.to&&d.asset&&d.amt),o=r?cC(r):null,c=We.useMemo(()=>{const d=a.steps.map((g,_)=>oC(_,g.op,g.tx,g.status));return o&&d.push(o),d.push(a.chain),d},[a.steps,a.chain,o]),u=We.useMemo(()=>{const d=a.steps.map((g,_)=>lC(_,g.op,g.tx));return o&&d.push(o),d},[a.steps,o]),h=Kv(c,{...Qv,enabled:i}),m=Kv(u,{...Qv,enabled:i});return D.jsxs("div",{ref:e,className:"persona-card__meta persona-card__meta--chain",children:[D.jsx("p",{className:"persona-card__meta-kind terminal-label",children:a.label}),D.jsx("div",{className:"persona-card__meta-rows",children:c.map((d,g)=>D.jsx(nn,{value:d,display:h.displays[g]??d,hidden:!(h.started[g]??!0)},`rows-${d}`))}),D.jsxs("div",{className:"persona-card__meta-compact",children:[D.jsx("p",{className:"terminal-label",children:a.label}),c.map((d,g)=>D.jsx(nn,{value:d,display:h.displays[g]??d,hidden:!(h.started[g]??!0)},`compact-${d}`))]}),D.jsxs("div",{className:"persona-card__meta-xxs",children:[D.jsx("p",{className:"terminal-label",children:a.label}),u.map((d,g)=>D.jsx(nn,{value:d,display:m.displays[g]??d,hidden:!(m.started[g]??!0)},`xxs-${d}`))]})]})}function hC({meta:a}){return a.kind==="identity"?D.jsx(uC,{meta:a}):a.kind==="chain"?D.jsx(dC,{meta:a}):D.jsx(fC,{meta:a})}function pC(){return D.jsx("section",{id:"personas",className:"section personas",children:D.jsxs("div",{className:"container",children:[D.jsx("p",{className:"section-kicker",children:Pd.kicker}),D.jsx("h2",{className:"section-title personas__title",children:Pd.title}),D.jsx("div",{className:"personas__grid",children:Pd.items.map(a=>D.jsxs("article",{className:`persona-card persona-card--${a.weight}`,children:[D.jsx("h3",{className:"persona-card__title",children:a.title}),D.jsx("ol",{className:"persona-card__steps",children:a.steps.map(e=>D.jsxs("li",{children:[D.jsxs("span",{className:"persona-card__chevron","aria-hidden":!0,children:[">"," "]}),e]},e))}),D.jsx(oo,{href:a.cta.href,variant:"ghost",className:"persona-card__cta",children:a.cta.label}),D.jsx(hC,{meta:a.meta})]},a.title))})]})})}function mC(){const[a,e]=We.useState(!1),[i,r]=We.useState(!1),[o,c]=We.useState("");return We.useEffect(()=>{const u=()=>e(window.scrollY>24);return u(),window.addEventListener("scroll",u,{passive:!0}),()=>window.removeEventListener("scroll",u)},[]),We.useEffect(()=>{const u=nu.map(m=>m.id),h=new IntersectionObserver(m=>{var g;const d=m.filter(_=>_.isIntersecting).sort((_,v)=>v.intersectionRatio-_.intersectionRatio);(g=d[0])!=null&&g.target.id&&c(d[0].target.id)},{rootMargin:"-30% 0px -55% 0px",threshold:[0,.25,.5]});return u.forEach(m=>{const d=document.getElementById(m);d&&h.observe(d)}),()=>h.disconnect()},[]),We.useEffect(()=>(document.body.style.overflow=i?"hidden":"",()=>{document.body.style.overflow=""}),[i]),D.jsxs(D.Fragment,{children:[D.jsx("header",{className:`sticky-header ${a?"sticky-header--solid":""}`,children:D.jsxs("div",{className:"sticky-header__inner",children:[D.jsx("a",{className:"sticky-header__logo",href:"#hero","aria-label":"Morpheum home",children:D.jsx(Zx,{size:"sm",brandName:"Morpheum"})}),D.jsx("nav",{className:"sticky-header__nav","aria-label":"Primary",children:nu.map(u=>D.jsx("a",{href:u.href,className:`sticky-header__link ${o===u.id?"is-active":""}`,children:u.label},u.id))}),D.jsxs("div",{className:"sticky-header__actions",children:[D.jsx("a",{className:"sticky-header__docs",href:Tn.docs,children:"Docs"}),D.jsx(oo,{href:Tn.app,variant:"primary",className:"sticky-header__launch",children:"Launch Demo"}),D.jsxs("button",{type:"button",className:"sticky-header__menu","aria-expanded":i,"aria-controls":"mobile-nav","aria-label":i?"Close menu":"Open menu",onClick:()=>r(u=>!u),children:[D.jsx("span",{}),D.jsx("span",{}),D.jsx("span",{})]})]})]})}),D.jsx("div",{id:"mobile-nav",className:`mobile-sheet ${i?"is-open":""}`,hidden:!i,children:D.jsxs("nav",{className:"mobile-sheet__nav","aria-label":"Mobile",children:[nu.map(u=>D.jsx("a",{href:u.href,onClick:()=>r(!1),className:o===u.id?"is-active":"",children:u.label},u.id)),D.jsx("a",{href:Tn.docs,onClick:()=>r(!1),children:"Docs"})]})})]})}function gC(){const a=We.useRef(null),e=Np(a,{amount:.35});return D.jsx("section",{className:"thesis section","aria-label":"Thesis",children:D.jsxs("div",{className:"container thesis__inner",children:[D.jsx("p",{ref:a,className:"thesis__close",children:e?D.jsxs(Lp,{text:A_.close,className:"thesis__close-type",speed:36,multiline:"auto",active:!0,holdCursor:!0,children:["The Agent-native"," ",D.jsx("span",{className:"thesis__close-accent",children:"L1 DEX"})," — ",D.jsx("span",{className:"thesis__close-phrase",children:"faster, safer trades."})]}):D.jsxs("span",{className:"thesis__close-type","aria-hidden":!0,children:["The Agent-native"," ",D.jsx("span",{className:"thesis__close-accent",children:"L1 DEX"})," — ",D.jsx("span",{className:"thesis__close-phrase",children:"faster, safer trades."})]})}),D.jsx("p",{className:"section-kicker",children:"Two Risks in Agentic Economy"}),D.jsx("div",{className:"thesis__risks",children:A_.risks.map(i=>D.jsxs("article",{className:"thesis__pair",children:[D.jsxs("div",{className:"thesis__risk",children:[D.jsx("p",{className:"thesis__label",children:"Risk"}),D.jsx("h3",{className:"thesis__risk-title",children:i.risk}),D.jsxs("p",{className:"thesis__failure",children:[D.jsx("span",{"aria-hidden":!0,children:"> "}),i.failure]})]}),D.jsxs("div",{className:"thesis__solve",children:[D.jsx("p",{className:"thesis__label thesis__label--solve",children:"Solution"}),D.jsx("p",{className:"thesis__solve-body",children:i.solve})]})]},i.risk))})]})})}function _C(){return D.jsxs("div",{className:"page",children:[D.jsx("a",{className:"skip-link",href:"#hero",children:"Skip to content"}),D.jsx(sC,{}),D.jsx(mC,{}),D.jsxs("main",{className:"page__main",children:[D.jsx(S3,{}),D.jsx(aC,{}),D.jsx(gC,{}),D.jsx(rC,{}),D.jsx(hy,{}),D.jsx(pC,{}),D.jsx(W3,{}),D.jsx(my,{}),D.jsx(dy,{})]}),D.jsx(Q3,{})]})}uy.createRoot(document.getElementById("root")).render(D.jsx(We.StrictMode,{children:D.jsx(_C,{})}));
