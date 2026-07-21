(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function i(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(o){if(o.ep)return;o.ep=!0;const c=i(o);fetch(o.href,c)}})();var zd={exports:{}},Ml={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var T_;function fy(){if(T_)return Ml;T_=1;var a=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,o,c){var u=null;if(c!==void 0&&(u=""+c),o.key!==void 0&&(u=""+o.key),"key"in o){c={};for(var h in o)h!=="key"&&(c[h]=o[h])}else c=o;return o=c.ref,{$$typeof:a,type:r,key:u,ref:o!==void 0?o:null,props:c}}return Ml.Fragment=e,Ml.jsx=i,Ml.jsxs=i,Ml}var A_;function dy(){return A_||(A_=1,zd.exports=fy()),zd.exports}var D=dy(),Hd={exports:{}},ft={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var R_;function hy(){if(R_)return ft;R_=1;var a=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),u=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),v=Symbol.iterator;function x(U){return U===null||typeof U!="object"?null:(U=v&&U[v]||U["@@iterator"],typeof U=="function"?U:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,y={};function M(U,W,ye){this.props=U,this.context=W,this.refs=y,this.updater=ye||b}M.prototype.isReactComponent={},M.prototype.setState=function(U,W){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,W,"setState")},M.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function I(){}I.prototype=M.prototype;function B(U,W,ye){this.props=U,this.context=W,this.refs=y,this.updater=ye||b}var C=B.prototype=new I;C.constructor=B,w(C,M.prototype),C.isPureReactComponent=!0;var O=Array.isArray;function L(){}var F={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function N(U,W,ye){var Ce=ye.ref;return{$$typeof:a,type:U,key:W,ref:Ce!==void 0?Ce:null,props:ye}}function Z(U,W){return N(U.type,W,U.props)}function k(U){return typeof U=="object"&&U!==null&&U.$$typeof===a}function j(U){var W={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(ye){return W[ye]})}var me=/\/+/g;function ce(U,W){return typeof U=="object"&&U!==null&&U.key!=null?j(""+U.key):W.toString(36)}function X(U){switch(U.status){case"fulfilled":return U.value;case"rejected":throw U.reason;default:switch(typeof U.status=="string"?U.then(L,L):(U.status="pending",U.then(function(W){U.status==="pending"&&(U.status="fulfilled",U.value=W)},function(W){U.status==="pending"&&(U.status="rejected",U.reason=W)})),U.status){case"fulfilled":return U.value;case"rejected":throw U.reason}}throw U}function z(U,W,ye,Ce,Ge){var oe=typeof U;(oe==="undefined"||oe==="boolean")&&(U=null);var be=!1;if(U===null)be=!0;else switch(oe){case"bigint":case"string":case"number":be=!0;break;case"object":switch(U.$$typeof){case a:case e:be=!0;break;case g:return be=U._init,z(be(U._payload),W,ye,Ce,Ge)}}if(be)return Ge=Ge(U),be=Ce===""?"."+ce(U,0):Ce,O(Ge)?(ye="",be!=null&&(ye=be.replace(me,"$&/")+"/"),z(Ge,W,ye,"",function(je){return je})):Ge!=null&&(k(Ge)&&(Ge=Z(Ge,ye+(Ge.key==null||U&&U.key===Ge.key?"":(""+Ge.key).replace(me,"$&/")+"/")+be)),W.push(Ge)),1;be=0;var Te=Ce===""?".":Ce+":";if(O(U))for(var qe=0;qe<U.length;qe++)Ce=U[qe],oe=Te+ce(Ce,qe),be+=z(Ce,W,ye,oe,Ge);else if(qe=x(U),typeof qe=="function")for(U=qe.call(U),qe=0;!(Ce=U.next()).done;)Ce=Ce.value,oe=Te+ce(Ce,qe++),be+=z(Ce,W,ye,oe,Ge);else if(oe==="object"){if(typeof U.then=="function")return z(X(U),W,ye,Ce,Ge);throw W=String(U),Error("Objects are not valid as a React child (found: "+(W==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":W)+"). If you meant to render a collection of children, use an array instead.")}return be}function H(U,W,ye){if(U==null)return U;var Ce=[],Ge=0;return z(U,Ce,"","",function(oe){return W.call(ye,oe,Ge++)}),Ce}function Q(U){if(U._status===-1){var W=U._result;W=W(),W.then(function(ye){(U._status===0||U._status===-1)&&(U._status=1,U._result=ye)},function(ye){(U._status===0||U._status===-1)&&(U._status=2,U._result=ye)}),U._status===-1&&(U._status=0,U._result=W)}if(U._status===1)return U._result.default;throw U._result}var fe=typeof reportError=="function"?reportError:function(U){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var W=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof U=="object"&&U!==null&&typeof U.message=="string"?String(U.message):String(U),error:U});if(!window.dispatchEvent(W))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",U);return}console.error(U)},xe={map:H,forEach:function(U,W,ye){H(U,function(){W.apply(this,arguments)},ye)},count:function(U){var W=0;return H(U,function(){W++}),W},toArray:function(U){return H(U,function(W){return W})||[]},only:function(U){if(!k(U))throw Error("React.Children.only expected to receive a single React element child.");return U}};return ft.Activity=_,ft.Children=xe,ft.Component=M,ft.Fragment=i,ft.Profiler=o,ft.PureComponent=B,ft.StrictMode=r,ft.Suspense=m,ft.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=F,ft.__COMPILER_RUNTIME={__proto__:null,c:function(U){return F.H.useMemoCache(U)}},ft.cache=function(U){return function(){return U.apply(null,arguments)}},ft.cacheSignal=function(){return null},ft.cloneElement=function(U,W,ye){if(U==null)throw Error("The argument must be a React element, but you passed "+U+".");var Ce=w({},U.props),Ge=U.key;if(W!=null)for(oe in W.key!==void 0&&(Ge=""+W.key),W)!T.call(W,oe)||oe==="key"||oe==="__self"||oe==="__source"||oe==="ref"&&W.ref===void 0||(Ce[oe]=W[oe]);var oe=arguments.length-2;if(oe===1)Ce.children=ye;else if(1<oe){for(var be=Array(oe),Te=0;Te<oe;Te++)be[Te]=arguments[Te+2];Ce.children=be}return N(U.type,Ge,Ce)},ft.createContext=function(U){return U={$$typeof:u,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null},U.Provider=U,U.Consumer={$$typeof:c,_context:U},U},ft.createElement=function(U,W,ye){var Ce,Ge={},oe=null;if(W!=null)for(Ce in W.key!==void 0&&(oe=""+W.key),W)T.call(W,Ce)&&Ce!=="key"&&Ce!=="__self"&&Ce!=="__source"&&(Ge[Ce]=W[Ce]);var be=arguments.length-2;if(be===1)Ge.children=ye;else if(1<be){for(var Te=Array(be),qe=0;qe<be;qe++)Te[qe]=arguments[qe+2];Ge.children=Te}if(U&&U.defaultProps)for(Ce in be=U.defaultProps,be)Ge[Ce]===void 0&&(Ge[Ce]=be[Ce]);return N(U,oe,Ge)},ft.createRef=function(){return{current:null}},ft.forwardRef=function(U){return{$$typeof:h,render:U}},ft.isValidElement=k,ft.lazy=function(U){return{$$typeof:g,_payload:{_status:-1,_result:U},_init:Q}},ft.memo=function(U,W){return{$$typeof:d,type:U,compare:W===void 0?null:W}},ft.startTransition=function(U){var W=F.T,ye={};F.T=ye;try{var Ce=U(),Ge=F.S;Ge!==null&&Ge(ye,Ce),typeof Ce=="object"&&Ce!==null&&typeof Ce.then=="function"&&Ce.then(L,fe)}catch(oe){fe(oe)}finally{W!==null&&ye.types!==null&&(W.types=ye.types),F.T=W}},ft.unstable_useCacheRefresh=function(){return F.H.useCacheRefresh()},ft.use=function(U){return F.H.use(U)},ft.useActionState=function(U,W,ye){return F.H.useActionState(U,W,ye)},ft.useCallback=function(U,W){return F.H.useCallback(U,W)},ft.useContext=function(U){return F.H.useContext(U)},ft.useDebugValue=function(){},ft.useDeferredValue=function(U,W){return F.H.useDeferredValue(U,W)},ft.useEffect=function(U,W){return F.H.useEffect(U,W)},ft.useEffectEvent=function(U){return F.H.useEffectEvent(U)},ft.useId=function(){return F.H.useId()},ft.useImperativeHandle=function(U,W,ye){return F.H.useImperativeHandle(U,W,ye)},ft.useInsertionEffect=function(U,W){return F.H.useInsertionEffect(U,W)},ft.useLayoutEffect=function(U,W){return F.H.useLayoutEffect(U,W)},ft.useMemo=function(U,W){return F.H.useMemo(U,W)},ft.useOptimistic=function(U,W){return F.H.useOptimistic(U,W)},ft.useReducer=function(U,W,ye){return F.H.useReducer(U,W,ye)},ft.useRef=function(U){return F.H.useRef(U)},ft.useState=function(U){return F.H.useState(U)},ft.useSyncExternalStore=function(U,W,ye){return F.H.useSyncExternalStore(U,W,ye)},ft.useTransition=function(){return F.H.useTransition()},ft.version="19.2.7",ft}var C_;function Rp(){return C_||(C_=1,Hd.exports=hy()),Hd.exports}var We=Rp(),Gd={exports:{}},yl={},Vd={exports:{}},kd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var w_;function py(){return w_||(w_=1,(function(a){function e(z,H){var Q=z.length;z.push(H);e:for(;0<Q;){var fe=Q-1>>>1,xe=z[fe];if(0<o(xe,H))z[fe]=H,z[Q]=xe,Q=fe;else break e}}function i(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var H=z[0],Q=z.pop();if(Q!==H){z[0]=Q;e:for(var fe=0,xe=z.length,U=xe>>>1;fe<U;){var W=2*(fe+1)-1,ye=z[W],Ce=W+1,Ge=z[Ce];if(0>o(ye,Q))Ce<xe&&0>o(Ge,ye)?(z[fe]=Ge,z[Ce]=Q,fe=Ce):(z[fe]=ye,z[W]=Q,fe=W);else if(Ce<xe&&0>o(Ge,Q))z[fe]=Ge,z[Ce]=Q,fe=Ce;else break e}}return H}function o(z,H){var Q=z.sortIndex-H.sortIndex;return Q!==0?Q:z.id-H.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;a.unstable_now=function(){return c.now()}}else{var u=Date,h=u.now();a.unstable_now=function(){return u.now()-h}}var m=[],d=[],g=1,_=null,v=3,x=!1,b=!1,w=!1,y=!1,M=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,B=typeof setImmediate<"u"?setImmediate:null;function C(z){for(var H=i(d);H!==null;){if(H.callback===null)r(d);else if(H.startTime<=z)r(d),H.sortIndex=H.expirationTime,e(m,H);else break;H=i(d)}}function O(z){if(w=!1,C(z),!b)if(i(m)!==null)b=!0,L||(L=!0,j());else{var H=i(d);H!==null&&X(O,H.startTime-z)}}var L=!1,F=-1,T=5,N=-1;function Z(){return y?!0:!(a.unstable_now()-N<T)}function k(){if(y=!1,L){var z=a.unstable_now();N=z;var H=!0;try{e:{b=!1,w&&(w=!1,I(F),F=-1),x=!0;var Q=v;try{t:{for(C(z),_=i(m);_!==null&&!(_.expirationTime>z&&Z());){var fe=_.callback;if(typeof fe=="function"){_.callback=null,v=_.priorityLevel;var xe=fe(_.expirationTime<=z);if(z=a.unstable_now(),typeof xe=="function"){_.callback=xe,C(z),H=!0;break t}_===i(m)&&r(m),C(z)}else r(m);_=i(m)}if(_!==null)H=!0;else{var U=i(d);U!==null&&X(O,U.startTime-z),H=!1}}break e}finally{_=null,v=Q,x=!1}H=void 0}}finally{H?j():L=!1}}}var j;if(typeof B=="function")j=function(){B(k)};else if(typeof MessageChannel<"u"){var me=new MessageChannel,ce=me.port2;me.port1.onmessage=k,j=function(){ce.postMessage(null)}}else j=function(){M(k,0)};function X(z,H){F=M(function(){z(a.unstable_now())},H)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(z){z.callback=null},a.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<z?Math.floor(1e3/z):5},a.unstable_getCurrentPriorityLevel=function(){return v},a.unstable_next=function(z){switch(v){case 1:case 2:case 3:var H=3;break;default:H=v}var Q=v;v=H;try{return z()}finally{v=Q}},a.unstable_requestPaint=function(){y=!0},a.unstable_runWithPriority=function(z,H){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var Q=v;v=z;try{return H()}finally{v=Q}},a.unstable_scheduleCallback=function(z,H,Q){var fe=a.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?fe+Q:fe):Q=fe,z){case 1:var xe=-1;break;case 2:xe=250;break;case 5:xe=1073741823;break;case 4:xe=1e4;break;default:xe=5e3}return xe=Q+xe,z={id:g++,callback:H,priorityLevel:z,startTime:Q,expirationTime:xe,sortIndex:-1},Q>fe?(z.sortIndex=Q,e(d,z),i(m)===null&&z===i(d)&&(w?(I(F),F=-1):w=!0,X(O,Q-fe))):(z.sortIndex=xe,e(m,z),b||x||(b=!0,L||(L=!0,j()))),z},a.unstable_shouldYield=Z,a.unstable_wrapCallback=function(z){var H=v;return function(){var Q=v;v=H;try{return z.apply(this,arguments)}finally{v=Q}}}})(kd)),kd}var D_;function my(){return D_||(D_=1,Vd.exports=py()),Vd.exports}var Xd={exports:{}},$n={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var L_;function gy(){if(L_)return $n;L_=1;var a=Rp();function e(m){var d="https://react.dev/errors/"+m;if(1<arguments.length){d+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)d+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+d+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},o=Symbol.for("react.portal");function c(m,d,g){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:_==null?null:""+_,children:m,containerInfo:d,implementation:g}}var u=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,d){if(m==="font")return"";if(typeof d=="string")return d==="use-credentials"?d:""}return $n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,$n.createPortal=function(m,d){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!d||d.nodeType!==1&&d.nodeType!==9&&d.nodeType!==11)throw Error(e(299));return c(m,d,null,g)},$n.flushSync=function(m){var d=u.T,g=r.p;try{if(u.T=null,r.p=2,m)return m()}finally{u.T=d,r.p=g,r.d.f()}},$n.preconnect=function(m,d){typeof m=="string"&&(d?(d=d.crossOrigin,d=typeof d=="string"?d==="use-credentials"?d:"":void 0):d=null,r.d.C(m,d))},$n.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},$n.preinit=function(m,d){if(typeof m=="string"&&d&&typeof d.as=="string"){var g=d.as,_=h(g,d.crossOrigin),v=typeof d.integrity=="string"?d.integrity:void 0,x=typeof d.fetchPriority=="string"?d.fetchPriority:void 0;g==="style"?r.d.S(m,typeof d.precedence=="string"?d.precedence:void 0,{crossOrigin:_,integrity:v,fetchPriority:x}):g==="script"&&r.d.X(m,{crossOrigin:_,integrity:v,fetchPriority:x,nonce:typeof d.nonce=="string"?d.nonce:void 0})}},$n.preinitModule=function(m,d){if(typeof m=="string")if(typeof d=="object"&&d!==null){if(d.as==null||d.as==="script"){var g=h(d.as,d.crossOrigin);r.d.M(m,{crossOrigin:g,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0})}}else d==null&&r.d.M(m)},$n.preload=function(m,d){if(typeof m=="string"&&typeof d=="object"&&d!==null&&typeof d.as=="string"){var g=d.as,_=h(g,d.crossOrigin);r.d.L(m,g,{crossOrigin:_,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0,type:typeof d.type=="string"?d.type:void 0,fetchPriority:typeof d.fetchPriority=="string"?d.fetchPriority:void 0,referrerPolicy:typeof d.referrerPolicy=="string"?d.referrerPolicy:void 0,imageSrcSet:typeof d.imageSrcSet=="string"?d.imageSrcSet:void 0,imageSizes:typeof d.imageSizes=="string"?d.imageSizes:void 0,media:typeof d.media=="string"?d.media:void 0})}},$n.preloadModule=function(m,d){if(typeof m=="string")if(d){var g=h(d.as,d.crossOrigin);r.d.m(m,{as:typeof d.as=="string"&&d.as!=="script"?d.as:void 0,crossOrigin:g,integrity:typeof d.integrity=="string"?d.integrity:void 0})}else r.d.m(m)},$n.requestFormReset=function(m){r.d.r(m)},$n.unstable_batchedUpdates=function(m,d){return m(d)},$n.useFormState=function(m,d,g){return u.H.useFormState(m,d,g)},$n.useFormStatus=function(){return u.H.useHostTransitionStatus()},$n.version="19.2.7",$n}var N_;function cx(){if(N_)return Xd.exports;N_=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(e){console.error(e)}}return a(),Xd.exports=gy(),Xd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var U_;function _y(){if(U_)return yl;U_=1;var a=my(),e=Rp(),i=cx();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)n+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,s=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(s=n.return),t=n.return;while(t)}return n.tag===3?s:null}function u(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function h(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(r(188))}function d(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(r(188));return n!==t?null:t}for(var s=t,l=n;;){var f=s.return;if(f===null)break;var p=f.alternate;if(p===null){if(l=f.return,l!==null){s=l;continue}break}if(f.child===p.child){for(p=f.child;p;){if(p===s)return m(f),t;if(p===l)return m(f),n;p=p.sibling}throw Error(r(188))}if(s.return!==l.return)s=f,l=p;else{for(var S=!1,R=f.child;R;){if(R===s){S=!0,s=f,l=p;break}if(R===l){S=!0,l=f,s=p;break}R=R.sibling}if(!S){for(R=p.child;R;){if(R===s){S=!0,s=p,l=f;break}if(R===l){S=!0,l=p,s=f;break}R=R.sibling}if(!S)throw Error(r(189))}}if(s.alternate!==l)throw Error(r(190))}if(s.tag!==3)throw Error(r(188));return s.stateNode.current===s?t:n}function g(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=g(t),n!==null)return n;t=t.sibling}return null}var _=Object.assign,v=Symbol.for("react.element"),x=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),w=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),M=Symbol.for("react.profiler"),I=Symbol.for("react.consumer"),B=Symbol.for("react.context"),C=Symbol.for("react.forward_ref"),O=Symbol.for("react.suspense"),L=Symbol.for("react.suspense_list"),F=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),N=Symbol.for("react.activity"),Z=Symbol.for("react.memo_cache_sentinel"),k=Symbol.iterator;function j(t){return t===null||typeof t!="object"?null:(t=k&&t[k]||t["@@iterator"],typeof t=="function"?t:null)}var me=Symbol.for("react.client.reference");function ce(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===me?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case w:return"Fragment";case M:return"Profiler";case y:return"StrictMode";case O:return"Suspense";case L:return"SuspenseList";case N:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case b:return"Portal";case B:return t.displayName||"Context";case I:return(t._context.displayName||"Context")+".Consumer";case C:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case F:return n=t.displayName||null,n!==null?n:ce(t.type)||"Memo";case T:n=t._payload,t=t._init;try{return ce(t(n))}catch{}}return null}var X=Array.isArray,z=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Q={pending:!1,data:null,method:null,action:null},fe=[],xe=-1;function U(t){return{current:t}}function W(t){0>xe||(t.current=fe[xe],fe[xe]=null,xe--)}function ye(t,n){xe++,fe[xe]=t.current,t.current=n}var Ce=U(null),Ge=U(null),oe=U(null),be=U(null);function Te(t,n){switch(ye(oe,n),ye(Ge,t),ye(Ce,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?jg(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=jg(n),t=Zg(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}W(Ce),ye(Ce,t)}function qe(){W(Ce),W(Ge),W(oe)}function je(t){t.memoizedState!==null&&ye(be,t);var n=Ce.current,s=Zg(n,t.type);n!==s&&(ye(Ge,t),ye(Ce,s))}function $e(t){Ge.current===t&&(W(Ce),W(Ge)),be.current===t&&(W(be),_l._currentValue=Q)}var Vt,ut;function pt(t){if(Vt===void 0)try{throw Error()}catch(s){var n=s.stack.trim().match(/\n( *(at )?)/);Vt=n&&n[1]||"",ut=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Vt+t+ut}var gt=!1;function _t(t,n){if(!t||gt)return"";gt=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(n){var Ee=function(){throw Error()};if(Object.defineProperty(Ee.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Ee,[])}catch(pe){var le=pe}Reflect.construct(t,[],Ee)}else{try{Ee.call()}catch(pe){le=pe}t.call(Ee.prototype)}}else{try{throw Error()}catch(pe){le=pe}(Ee=t())&&typeof Ee.catch=="function"&&Ee.catch(function(){})}}catch(pe){if(pe&&le&&typeof pe.stack=="string")return[pe.stack,le.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var p=l.DetermineComponentFrameRoot(),S=p[0],R=p[1];if(S&&R){var G=S.split(`
`),re=R.split(`
`);for(f=l=0;l<G.length&&!G[l].includes("DetermineComponentFrameRoot");)l++;for(;f<re.length&&!re[f].includes("DetermineComponentFrameRoot");)f++;if(l===G.length||f===re.length)for(l=G.length-1,f=re.length-1;1<=l&&0<=f&&G[l]!==re[f];)f--;for(;1<=l&&0<=f;l--,f--)if(G[l]!==re[f]){if(l!==1||f!==1)do if(l--,f--,0>f||G[l]!==re[f]){var _e=`
`+G[l].replace(" at new "," at ");return t.displayName&&_e.includes("<anonymous>")&&(_e=_e.replace("<anonymous>",t.displayName)),_e}while(1<=l&&0<=f);break}}}finally{gt=!1,Error.prepareStackTrace=s}return(s=t?t.displayName||t.name:"")?pt(s):""}function sn(t,n){switch(t.tag){case 26:case 27:case 5:return pt(t.type);case 16:return pt("Lazy");case 13:return t.child!==n&&n!==null?pt("Suspense Fallback"):pt("Suspense");case 19:return pt("SuspenseList");case 0:case 15:return _t(t.type,!1);case 11:return _t(t.type.render,!1);case 1:return _t(t.type,!0);case 31:return pt("Activity");default:return""}}function tn(t){try{var n="",s=null;do n+=sn(t,s),s=t,t=t.return;while(t);return n}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var nn=Object.prototype.hasOwnProperty,$t=a.unstable_scheduleCallback,Nt=a.unstable_cancelCallback,rn=a.unstable_shouldYield,K=a.unstable_requestPaint,Ut=a.unstable_now,Ct=a.unstable_getCurrentPriorityLevel,P=a.unstable_ImmediatePriority,E=a.unstable_UserBlockingPriority,J=a.unstable_NormalPriority,ne=a.unstable_LowPriority,de=a.unstable_IdlePriority,Re=a.log,Ie=a.unstable_setDisableYieldValue,ue=null,he=null;function De(t){if(typeof Re=="function"&&Ie(t),he&&typeof he.setStrictMode=="function")try{he.setStrictMode(ue,t)}catch{}}var Ve=Math.clz32?Math.clz32:nt,Be=Math.log,Pe=Math.LN2;function nt(t){return t>>>=0,t===0?32:31-(Be(t)/Pe|0)|0}var it=256,st=262144,Y=4194304;function Ne(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function ge(t,n,s){var l=t.pendingLanes;if(l===0)return 0;var f=0,p=t.suspendedLanes,S=t.pingedLanes;t=t.warmLanes;var R=l&134217727;return R!==0?(l=R&~p,l!==0?f=Ne(l):(S&=R,S!==0?f=Ne(S):s||(s=R&~t,s!==0&&(f=Ne(s))))):(R=l&~p,R!==0?f=Ne(R):S!==0?f=Ne(S):s||(s=l&~t,s!==0&&(f=Ne(s)))),f===0?0:n!==0&&n!==f&&(n&p)===0&&(p=f&-f,s=n&-n,p>=s||p===32&&(s&4194048)!==0)?n:f}function we(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function Fe(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ve(){var t=Y;return Y<<=1,(Y&62914560)===0&&(Y=4194304),t}function Qe(t){for(var n=[],s=0;31>s;s++)n.push(t);return n}function Ye(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function jt(t,n,s,l,f,p){var S=t.pendingLanes;t.pendingLanes=s,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=s,t.entangledLanes&=s,t.errorRecoveryDisabledLanes&=s,t.shellSuspendCounter=0;var R=t.entanglements,G=t.expirationTimes,re=t.hiddenUpdates;for(s=S&~s;0<s;){var _e=31-Ve(s),Ee=1<<_e;R[_e]=0,G[_e]=-1;var le=re[_e];if(le!==null)for(re[_e]=null,_e=0;_e<le.length;_e++){var pe=le[_e];pe!==null&&(pe.lane&=-536870913)}s&=~Ee}l!==0&&Ft(t,l,0),p!==0&&f===0&&t.tag!==0&&(t.suspendedLanes|=p&~(S&~n))}function Ft(t,n,s){t.pendingLanes|=n,t.suspendedLanes&=~n;var l=31-Ve(n);t.entangledLanes|=n,t.entanglements[l]=t.entanglements[l]|1073741824|s&261930}function Fn(t,n){var s=t.entangledLanes|=n;for(t=t.entanglements;s;){var l=31-Ve(s),f=1<<l;f&n|t[l]&n&&(t[l]|=n),s&=~f}}function Bn(t,n){var s=n&-n;return s=(s&42)!==0?1:Ra(s),(s&(t.suspendedLanes|n))!==0?0:s}function Ra(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function rs(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function os(){var t=H.p;return t!==0?t:(t=window.event,t===void 0?32:v_(t.type))}function Ca(t,n){var s=H.p;try{return H.p=t,n()}finally{H.p=s}}var gi=Math.random().toString(36).slice(2),on="__reactFiber$"+gi,bn="__reactProps$"+gi,Vn="__reactContainer$"+gi,sa="__reactEvents$"+gi,Vs="__reactListeners$"+gi,ks="__reactHandles$"+gi,ra="__reactResources$"+gi,Wi="__reactMarker$"+gi;function qi(t){delete t[on],delete t[bn],delete t[sa],delete t[Vs],delete t[ks]}function Di(t){var n=t[on];if(n)return n;for(var s=t.parentNode;s;){if(n=s[Vn]||s[on]){if(s=n.alternate,n.child!==null||s!==null&&s.child!==null)for(t=n_(t);t!==null;){if(s=t[on])return s;t=n_(t)}return n}t=s,s=t.parentNode}return null}function li(t){if(t=t[on]||t[Vn]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function oa(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function Me(t){var n=t[ra];return n||(n=t[ra]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Ae(t){t[Wi]=!0}var Ze=new Set,A={};function V(t,n){$(t,n),$(t+"Capture",n)}function $(t,n){for(A[t]=n,t=0;t<n.length;t++)Ze.add(n[t])}var te=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ie={},Ue={};function Oe(t){return nn.call(Ue,t)?!0:nn.call(ie,t)?!1:te.test(t)?Ue[t]=!0:(ie[t]=!0,!1)}function Le(t,n,s){if(Oe(n))if(s===null)t.removeAttribute(n);else{switch(typeof s){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var l=n.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+s)}}function He(t,n,s){if(s===null)t.removeAttribute(n);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+s)}}function ze(t,n,s,l){if(l===null)t.removeAttribute(s);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(s);return}t.setAttributeNS(n,s,""+l)}}function tt(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function rt(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Je(t,n,s){var l=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var f=l.get,p=l.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return f.call(this)},set:function(S){s=""+S,p.call(this,S)}}),Object.defineProperty(t,n,{enumerable:l.enumerable}),{getValue:function(){return s},setValue:function(S){s=""+S},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Mt(t){if(!t._valueTracker){var n=rt(t)?"checked":"value";t._valueTracker=Je(t,n,""+t[n])}}function Zt(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var s=n.getValue(),l="";return t&&(l=rt(t)?t.checked?"true":"false":t.value),t=l,t!==s?(n.setValue(t),!0):!1}function kt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var wt=/[\n"\\]/g;function Dt(t){return t.replace(wt,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function ke(t,n,s,l,f,p,S,R){t.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?t.type=S:t.removeAttribute("type"),n!=null?S==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+tt(n)):t.value!==""+tt(n)&&(t.value=""+tt(n)):S!=="submit"&&S!=="reset"||t.removeAttribute("value"),n!=null?vt(t,S,tt(n)):s!=null?vt(t,S,tt(s)):l!=null&&t.removeAttribute("value"),f==null&&p!=null&&(t.defaultChecked=!!p),f!=null&&(t.checked=f&&typeof f!="function"&&typeof f!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?t.name=""+tt(R):t.removeAttribute("name")}function Nn(t,n,s,l,f,p,S,R){if(p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"&&(t.type=p),n!=null||s!=null){if(!(p!=="submit"&&p!=="reset"||n!=null)){Mt(t);return}s=s!=null?""+tt(s):"",n=n!=null?""+tt(n):s,R||n===t.value||(t.value=n),t.defaultValue=n}l=l??f,l=typeof l!="function"&&typeof l!="symbol"&&!!l,t.checked=R?t.checked:!!l,t.defaultChecked=!!l,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(t.name=S),Mt(t)}function vt(t,n,s){n==="number"&&kt(t.ownerDocument)===t||t.defaultValue===""+s||(t.defaultValue=""+s)}function mn(t,n,s,l){if(t=t.options,n){n={};for(var f=0;f<s.length;f++)n["$"+s[f]]=!0;for(s=0;s<t.length;s++)f=n.hasOwnProperty("$"+t[s].value),t[s].selected!==f&&(t[s].selected=f),f&&l&&(t[s].defaultSelected=!0)}else{for(s=""+tt(s),n=null,f=0;f<t.length;f++){if(t[f].value===s){t[f].selected=!0,l&&(t[f].defaultSelected=!0);return}n!==null||t[f].disabled||(n=t[f])}n!==null&&(n.selected=!0)}}function Kn(t,n,s){if(n!=null&&(n=""+tt(n),n!==t.value&&(t.value=n),s==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=s!=null?""+tt(s):""}function Un(t,n,s,l){if(n==null){if(l!=null){if(s!=null)throw Error(r(92));if(X(l)){if(1<l.length)throw Error(r(93));l=l[0]}s=l}s==null&&(s=""),n=s}s=tt(n),t.defaultValue=s,l=t.textContent,l===s&&l!==""&&l!==null&&(t.value=l),Mt(t)}function gn(t,n){if(n){var s=t.firstChild;if(s&&s===t.lastChild&&s.nodeType===3){s.nodeValue=n;return}}t.textContent=n}var Bt=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function an(t,n,s){var l=n.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?l?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":l?t.setProperty(n,s):typeof s!="number"||s===0||Bt.has(n)?n==="float"?t.cssFloat=s:t[n]=(""+s).trim():t[n]=s+"px"}function _i(t,n,s){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,s!=null){for(var l in s)!s.hasOwnProperty(l)||n!=null&&n.hasOwnProperty(l)||(l.indexOf("--")===0?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="");for(var f in n)l=n[f],n.hasOwnProperty(f)&&s[f]!==l&&an(t,f,l)}else for(var p in n)n.hasOwnProperty(p)&&an(t,p,n[p])}function zt(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Qn=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),la=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function wa(t){return la.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function ii(){}var Xs=null;function Oo(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Da=null,La=null;function kl(t){var n=li(t);if(n&&(t=n.stateNode)){var s=t[bn]||null;e:switch(t=n.stateNode,n.type){case"input":if(ke(t,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),n=s.name,s.type==="radio"&&n!=null){for(s=t;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+Dt(""+n)+'"][type="radio"]'),n=0;n<s.length;n++){var l=s[n];if(l!==t&&l.form===t.form){var f=l[bn]||null;if(!f)throw Error(r(90));ke(l,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(n=0;n<s.length;n++)l=s[n],l.form===t.form&&Zt(l)}break e;case"textarea":Kn(t,s.value,s.defaultValue);break e;case"select":n=s.value,n!=null&&mn(t,!!s.multiple,n,!1)}}}var Ws=!1;function qs(t,n,s){if(Ws)return t(n,s);Ws=!0;try{var l=t(n);return l}finally{if(Ws=!1,(Da!==null||La!==null)&&(Rc(),Da&&(n=Da,t=La,La=Da=null,kl(n),t)))for(n=0;n<t.length;n++)kl(t[n])}}function ca(t,n){var s=t.stateNode;if(s===null)return null;var l=s[bn]||null;if(l===null)return null;s=l[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(s&&typeof s!="function")throw Error(r(231,n,typeof s));return s}var Yi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Po=!1;if(Yi)try{var Tr={};Object.defineProperty(Tr,"passive",{get:function(){Po=!0}}),window.addEventListener("test",Tr,Tr),window.removeEventListener("test",Tr,Tr)}catch{Po=!1}var ji=null,Ys=null,Ar=null;function Xl(){if(Ar)return Ar;var t,n=Ys,s=n.length,l,f="value"in ji?ji.value:ji.textContent,p=f.length;for(t=0;t<s&&n[t]===f[t];t++);var S=s-t;for(l=1;l<=S&&n[s-l]===f[p-l];l++);return Ar=f.slice(t,1<l?1-l:void 0)}function Rr(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function js(){return!0}function Io(){return!1}function ct(t){function n(s,l,f,p,S){this._reactName=s,this._targetInst=f,this.type=l,this.nativeEvent=p,this.target=S,this.currentTarget=null;for(var R in t)t.hasOwnProperty(R)&&(s=t[R],this[R]=s?s(p):p[R]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?js:Io,this.isPropagationStopped=Io,this}return _(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=js)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=js)},persist:function(){},isPersistent:js}),n}var zn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},vi=ct(zn),Tn=_({},zn,{view:0,detail:0}),ua=ct(Tn),Jn,fa,da,Zi=_({},Tn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ku,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==da&&(da&&t.type==="mousemove"?(Jn=t.screenX-da.screenX,fa=t.screenY-da.screenY):fa=Jn=0,da=t),Jn)},movementY:function(t){return"movementY"in t?t.movementY:fa}}),Na=ct(Zi),Fo=_({},Zi,{dataTransfer:0}),Wl=ct(Fo),dS=_({},Tn,{relatedTarget:0}),Vu=ct(dS),hS=_({},zn,{animationName:0,elapsedTime:0,pseudoElement:0}),pS=ct(hS),mS=_({},zn,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),gS=ct(mS),_S=_({},zn,{data:0}),Jp=ct(_S),vS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},xS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},SS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function MS(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=SS[t])?!!n[t]:!1}function ku(){return MS}var yS=_({},Tn,{key:function(t){if(t.key){var n=vS[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Rr(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?xS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ku,charCode:function(t){return t.type==="keypress"?Rr(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Rr(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),ES=ct(yS),bS=_({},Zi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),$p=ct(bS),TS=_({},Tn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ku}),AS=ct(TS),RS=_({},zn,{propertyName:0,elapsedTime:0,pseudoElement:0}),CS=ct(RS),wS=_({},Zi,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),DS=ct(wS),LS=_({},zn,{newState:0,oldState:0}),NS=ct(LS),US=[9,13,27,32],Xu=Yi&&"CompositionEvent"in window,Bo=null;Yi&&"documentMode"in document&&(Bo=document.documentMode);var OS=Yi&&"TextEvent"in window&&!Bo,em=Yi&&(!Xu||Bo&&8<Bo&&11>=Bo),tm=" ",nm=!1;function im(t,n){switch(t){case"keyup":return US.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function am(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Cr=!1;function PS(t,n){switch(t){case"compositionend":return am(n);case"keypress":return n.which!==32?null:(nm=!0,tm);case"textInput":return t=n.data,t===tm&&nm?null:t;default:return null}}function IS(t,n){if(Cr)return t==="compositionend"||!Xu&&im(t,n)?(t=Xl(),Ar=Ys=ji=null,Cr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return em&&n.locale!=="ko"?null:n.data;default:return null}}var FS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function sm(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!FS[t.type]:n==="textarea"}function rm(t,n,s,l){Da?La?La.push(l):La=[l]:Da=l,n=Oc(n,"onChange"),0<n.length&&(s=new vi("onChange","change",null,s,l),t.push({event:s,listeners:n}))}var zo=null,Ho=null;function BS(t){Vg(t,0)}function ql(t){var n=oa(t);if(Zt(n))return t}function om(t,n){if(t==="change")return n}var lm=!1;if(Yi){var Wu;if(Yi){var qu="oninput"in document;if(!qu){var cm=document.createElement("div");cm.setAttribute("oninput","return;"),qu=typeof cm.oninput=="function"}Wu=qu}else Wu=!1;lm=Wu&&(!document.documentMode||9<document.documentMode)}function um(){zo&&(zo.detachEvent("onpropertychange",fm),Ho=zo=null)}function fm(t){if(t.propertyName==="value"&&ql(Ho)){var n=[];rm(n,Ho,t,Oo(t)),qs(BS,n)}}function zS(t,n,s){t==="focusin"?(um(),zo=n,Ho=s,zo.attachEvent("onpropertychange",fm)):t==="focusout"&&um()}function HS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ql(Ho)}function GS(t,n){if(t==="click")return ql(n)}function VS(t,n){if(t==="input"||t==="change")return ql(n)}function kS(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var xi=typeof Object.is=="function"?Object.is:kS;function Go(t,n){if(xi(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var s=Object.keys(t),l=Object.keys(n);if(s.length!==l.length)return!1;for(l=0;l<s.length;l++){var f=s[l];if(!nn.call(n,f)||!xi(t[f],n[f]))return!1}return!0}function dm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function hm(t,n){var s=dm(t);t=0;for(var l;s;){if(s.nodeType===3){if(l=t+s.textContent.length,t<=n&&l>=n)return{node:s,offset:n-t};t=l}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=dm(s)}}function pm(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?pm(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function mm(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=kt(t.document);n instanceof t.HTMLIFrameElement;){try{var s=typeof n.contentWindow.location.href=="string"}catch{s=!1}if(s)t=n.contentWindow;else break;n=kt(t.document)}return n}function Yu(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var XS=Yi&&"documentMode"in document&&11>=document.documentMode,wr=null,ju=null,Vo=null,Zu=!1;function gm(t,n,s){var l=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;Zu||wr==null||wr!==kt(l)||(l=wr,"selectionStart"in l&&Yu(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Vo&&Go(Vo,l)||(Vo=l,l=Oc(ju,"onSelect"),0<l.length&&(n=new vi("onSelect","select",null,n,s),t.push({event:n,listeners:l}),n.target=wr)))}function Zs(t,n){var s={};return s[t.toLowerCase()]=n.toLowerCase(),s["Webkit"+t]="webkit"+n,s["Moz"+t]="moz"+n,s}var Dr={animationend:Zs("Animation","AnimationEnd"),animationiteration:Zs("Animation","AnimationIteration"),animationstart:Zs("Animation","AnimationStart"),transitionrun:Zs("Transition","TransitionRun"),transitionstart:Zs("Transition","TransitionStart"),transitioncancel:Zs("Transition","TransitionCancel"),transitionend:Zs("Transition","TransitionEnd")},Ku={},_m={};Yi&&(_m=document.createElement("div").style,"AnimationEvent"in window||(delete Dr.animationend.animation,delete Dr.animationiteration.animation,delete Dr.animationstart.animation),"TransitionEvent"in window||delete Dr.transitionend.transition);function Ks(t){if(Ku[t])return Ku[t];if(!Dr[t])return t;var n=Dr[t],s;for(s in n)if(n.hasOwnProperty(s)&&s in _m)return Ku[t]=n[s];return t}var vm=Ks("animationend"),xm=Ks("animationiteration"),Sm=Ks("animationstart"),WS=Ks("transitionrun"),qS=Ks("transitionstart"),YS=Ks("transitioncancel"),Mm=Ks("transitionend"),ym=new Map,Qu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Qu.push("scrollEnd");function Ki(t,n){ym.set(t,n),V(n,[t])}var Yl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},Li=[],Lr=0,Ju=0;function jl(){for(var t=Lr,n=Ju=Lr=0;n<t;){var s=Li[n];Li[n++]=null;var l=Li[n];Li[n++]=null;var f=Li[n];Li[n++]=null;var p=Li[n];if(Li[n++]=null,l!==null&&f!==null){var S=l.pending;S===null?f.next=f:(f.next=S.next,S.next=f),l.pending=f}p!==0&&Em(s,f,p)}}function Zl(t,n,s,l){Li[Lr++]=t,Li[Lr++]=n,Li[Lr++]=s,Li[Lr++]=l,Ju|=l,t.lanes|=l,t=t.alternate,t!==null&&(t.lanes|=l)}function $u(t,n,s,l){return Zl(t,n,s,l),Kl(t)}function Qs(t,n){return Zl(t,null,null,n),Kl(t)}function Em(t,n,s){t.lanes|=s;var l=t.alternate;l!==null&&(l.lanes|=s);for(var f=!1,p=t.return;p!==null;)p.childLanes|=s,l=p.alternate,l!==null&&(l.childLanes|=s),p.tag===22&&(t=p.stateNode,t===null||t._visibility&1||(f=!0)),t=p,p=p.return;return t.tag===3?(p=t.stateNode,f&&n!==null&&(f=31-Ve(s),t=p.hiddenUpdates,l=t[f],l===null?t[f]=[n]:l.push(n),n.lane=s|536870912),p):null}function Kl(t){if(50<ul)throw ul=0,cd=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Nr={};function jS(t,n,s,l){this.tag=t,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Si(t,n,s,l){return new jS(t,n,s,l)}function ef(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ua(t,n){var s=t.alternate;return s===null?(s=Si(t.tag,n,t.key,t.mode),s.elementType=t.elementType,s.type=t.type,s.stateNode=t.stateNode,s.alternate=t,t.alternate=s):(s.pendingProps=n,s.type=t.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=t.flags&65011712,s.childLanes=t.childLanes,s.lanes=t.lanes,s.child=t.child,s.memoizedProps=t.memoizedProps,s.memoizedState=t.memoizedState,s.updateQueue=t.updateQueue,n=t.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},s.sibling=t.sibling,s.index=t.index,s.ref=t.ref,s.refCleanup=t.refCleanup,s}function bm(t,n){t.flags&=65011714;var s=t.alternate;return s===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=s.childLanes,t.lanes=s.lanes,t.child=s.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=s.memoizedProps,t.memoizedState=s.memoizedState,t.updateQueue=s.updateQueue,t.type=s.type,n=s.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function Ql(t,n,s,l,f,p){var S=0;if(l=t,typeof t=="function")ef(t)&&(S=1);else if(typeof t=="string")S=$M(t,s,Ce.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case N:return t=Si(31,s,n,f),t.elementType=N,t.lanes=p,t;case w:return Js(s.children,f,p,n);case y:S=8,f|=24;break;case M:return t=Si(12,s,n,f|2),t.elementType=M,t.lanes=p,t;case O:return t=Si(13,s,n,f),t.elementType=O,t.lanes=p,t;case L:return t=Si(19,s,n,f),t.elementType=L,t.lanes=p,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case B:S=10;break e;case I:S=9;break e;case C:S=11;break e;case F:S=14;break e;case T:S=16,l=null;break e}S=29,s=Error(r(130,t===null?"null":typeof t,"")),l=null}return n=Si(S,s,n,f),n.elementType=t,n.type=l,n.lanes=p,n}function Js(t,n,s,l){return t=Si(7,t,l,n),t.lanes=s,t}function tf(t,n,s){return t=Si(6,t,null,n),t.lanes=s,t}function Tm(t){var n=Si(18,null,null,0);return n.stateNode=t,n}function nf(t,n,s){return n=Si(4,t.children!==null?t.children:[],t.key,n),n.lanes=s,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Am=new WeakMap;function Ni(t,n){if(typeof t=="object"&&t!==null){var s=Am.get(t);return s!==void 0?s:(n={value:t,source:n,stack:tn(n)},Am.set(t,n),n)}return{value:t,source:n,stack:tn(n)}}var Ur=[],Or=0,Jl=null,ko=0,Ui=[],Oi=0,ls=null,ha=1,pa="";function Oa(t,n){Ur[Or++]=ko,Ur[Or++]=Jl,Jl=t,ko=n}function Rm(t,n,s){Ui[Oi++]=ha,Ui[Oi++]=pa,Ui[Oi++]=ls,ls=t;var l=ha;t=pa;var f=32-Ve(l)-1;l&=~(1<<f),s+=1;var p=32-Ve(n)+f;if(30<p){var S=f-f%5;p=(l&(1<<S)-1).toString(32),l>>=S,f-=S,ha=1<<32-Ve(n)+f|s<<f|l,pa=p+t}else ha=1<<p|s<<f|l,pa=t}function af(t){t.return!==null&&(Oa(t,1),Rm(t,1,0))}function sf(t){for(;t===Jl;)Jl=Ur[--Or],Ur[Or]=null,ko=Ur[--Or],Ur[Or]=null;for(;t===ls;)ls=Ui[--Oi],Ui[Oi]=null,pa=Ui[--Oi],Ui[Oi]=null,ha=Ui[--Oi],Ui[Oi]=null}function Cm(t,n){Ui[Oi++]=ha,Ui[Oi++]=pa,Ui[Oi++]=ls,ha=n.id,pa=n.overflow,ls=t}var kn=null,ln=null,At=!1,cs=null,Pi=!1,rf=Error(r(519));function us(t){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Xo(Ni(n,t)),rf}function wm(t){var n=t.stateNode,s=t.type,l=t.memoizedProps;switch(n[on]=t,n[bn]=l,s){case"dialog":Et("cancel",n),Et("close",n);break;case"iframe":case"object":case"embed":Et("load",n);break;case"video":case"audio":for(s=0;s<dl.length;s++)Et(dl[s],n);break;case"source":Et("error",n);break;case"img":case"image":case"link":Et("error",n),Et("load",n);break;case"details":Et("toggle",n);break;case"input":Et("invalid",n),Nn(n,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":Et("invalid",n);break;case"textarea":Et("invalid",n),Un(n,l.value,l.defaultValue,l.children)}s=l.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||n.textContent===""+s||l.suppressHydrationWarning===!0||qg(n.textContent,s)?(l.popover!=null&&(Et("beforetoggle",n),Et("toggle",n)),l.onScroll!=null&&Et("scroll",n),l.onScrollEnd!=null&&Et("scrollend",n),l.onClick!=null&&(n.onclick=ii),n=!0):n=!1,n||us(t,!0)}function Dm(t){for(kn=t.return;kn;)switch(kn.tag){case 5:case 31:case 13:Pi=!1;return;case 27:case 3:Pi=!0;return;default:kn=kn.return}}function Pr(t){if(t!==kn)return!1;if(!At)return Dm(t),At=!0,!1;var n=t.tag,s;if((s=n!==3&&n!==27)&&((s=n===5)&&(s=t.type,s=!(s!=="form"&&s!=="button")||bd(t.type,t.memoizedProps)),s=!s),s&&ln&&us(t),Dm(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));ln=t_(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));ln=t_(t)}else n===27?(n=ln,bs(t.type)?(t=wd,wd=null,ln=t):ln=n):ln=kn?Fi(t.stateNode.nextSibling):null;return!0}function $s(){ln=kn=null,At=!1}function of(){var t=cs;return t!==null&&(di===null?di=t:di.push.apply(di,t),cs=null),t}function Xo(t){cs===null?cs=[t]:cs.push(t)}var lf=U(null),er=null,Pa=null;function fs(t,n,s){ye(lf,n._currentValue),n._currentValue=s}function Ia(t){t._currentValue=lf.current,W(lf)}function cf(t,n,s){for(;t!==null;){var l=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,l!==null&&(l.childLanes|=n)):l!==null&&(l.childLanes&n)!==n&&(l.childLanes|=n),t===s)break;t=t.return}}function uf(t,n,s,l){var f=t.child;for(f!==null&&(f.return=t);f!==null;){var p=f.dependencies;if(p!==null){var S=f.child;p=p.firstContext;e:for(;p!==null;){var R=p;p=f;for(var G=0;G<n.length;G++)if(R.context===n[G]){p.lanes|=s,R=p.alternate,R!==null&&(R.lanes|=s),cf(p.return,s,t),l||(S=null);break e}p=R.next}}else if(f.tag===18){if(S=f.return,S===null)throw Error(r(341));S.lanes|=s,p=S.alternate,p!==null&&(p.lanes|=s),cf(S,s,t),S=null}else S=f.child;if(S!==null)S.return=f;else for(S=f;S!==null;){if(S===t){S=null;break}if(f=S.sibling,f!==null){f.return=S.return,S=f;break}S=S.return}f=S}}function Ir(t,n,s,l){t=null;for(var f=n,p=!1;f!==null;){if(!p){if((f.flags&524288)!==0)p=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var S=f.alternate;if(S===null)throw Error(r(387));if(S=S.memoizedProps,S!==null){var R=f.type;xi(f.pendingProps.value,S.value)||(t!==null?t.push(R):t=[R])}}else if(f===be.current){if(S=f.alternate,S===null)throw Error(r(387));S.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(t!==null?t.push(_l):t=[_l])}f=f.return}t!==null&&uf(n,t,s,l),n.flags|=262144}function $l(t){for(t=t.firstContext;t!==null;){if(!xi(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function tr(t){er=t,Pa=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Xn(t){return Lm(er,t)}function ec(t,n){return er===null&&tr(t),Lm(t,n)}function Lm(t,n){var s=n._currentValue;if(n={context:n,memoizedValue:s,next:null},Pa===null){if(t===null)throw Error(r(308));Pa=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Pa=Pa.next=n;return s}var ZS=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(s,l){t.push(l)}};this.abort=function(){n.aborted=!0,t.forEach(function(s){return s()})}},KS=a.unstable_scheduleCallback,QS=a.unstable_NormalPriority,An={$$typeof:B,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ff(){return{controller:new ZS,data:new Map,refCount:0}}function Wo(t){t.refCount--,t.refCount===0&&KS(QS,function(){t.controller.abort()})}var qo=null,df=0,Fr=0,Br=null;function JS(t,n){if(qo===null){var s=qo=[];df=0,Fr=md(),Br={status:"pending",value:void 0,then:function(l){s.push(l)}}}return df++,n.then(Nm,Nm),n}function Nm(){if(--df===0&&qo!==null){Br!==null&&(Br.status="fulfilled");var t=qo;qo=null,Fr=0,Br=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function $S(t,n){var s=[],l={status:"pending",value:null,reason:null,then:function(f){s.push(f)}};return t.then(function(){l.status="fulfilled",l.value=n;for(var f=0;f<s.length;f++)(0,s[f])(n)},function(f){for(l.status="rejected",l.reason=f,f=0;f<s.length;f++)(0,s[f])(void 0)}),l}var Um=z.S;z.S=function(t,n){gg=Ut(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&JS(t,n),Um!==null&&Um(t,n)};var nr=U(null);function hf(){var t=nr.current;return t!==null?t:en.pooledCache}function tc(t,n){n===null?ye(nr,nr.current):ye(nr,n.pool)}function Om(){var t=hf();return t===null?null:{parent:An._currentValue,pool:t}}var zr=Error(r(460)),pf=Error(r(474)),nc=Error(r(542)),ic={then:function(){}};function Pm(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Im(t,n,s){switch(s=t[s],s===void 0?t.push(n):s!==n&&(n.then(ii,ii),n=s),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Bm(t),t;default:if(typeof n.status=="string")n.then(ii,ii);else{if(t=en,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(l){if(n.status==="pending"){var f=n;f.status="fulfilled",f.value=l}},function(l){if(n.status==="pending"){var f=n;f.status="rejected",f.reason=l}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Bm(t),t}throw ar=n,zr}}function ir(t){try{var n=t._init;return n(t._payload)}catch(s){throw s!==null&&typeof s=="object"&&typeof s.then=="function"?(ar=s,zr):s}}var ar=null;function Fm(){if(ar===null)throw Error(r(459));var t=ar;return ar=null,t}function Bm(t){if(t===zr||t===nc)throw Error(r(483))}var Hr=null,Yo=0;function ac(t){var n=Yo;return Yo+=1,Hr===null&&(Hr=[]),Im(Hr,t,n)}function jo(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function sc(t,n){throw n.$$typeof===v?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function zm(t){function n(ee,q){if(t){var se=ee.deletions;se===null?(ee.deletions=[q],ee.flags|=16):se.push(q)}}function s(ee,q){if(!t)return null;for(;q!==null;)n(ee,q),q=q.sibling;return null}function l(ee){for(var q=new Map;ee!==null;)ee.key!==null?q.set(ee.key,ee):q.set(ee.index,ee),ee=ee.sibling;return q}function f(ee,q){return ee=Ua(ee,q),ee.index=0,ee.sibling=null,ee}function p(ee,q,se){return ee.index=se,t?(se=ee.alternate,se!==null?(se=se.index,se<q?(ee.flags|=67108866,q):se):(ee.flags|=67108866,q)):(ee.flags|=1048576,q)}function S(ee){return t&&ee.alternate===null&&(ee.flags|=67108866),ee}function R(ee,q,se,Se){return q===null||q.tag!==6?(q=tf(se,ee.mode,Se),q.return=ee,q):(q=f(q,se),q.return=ee,q)}function G(ee,q,se,Se){var at=se.type;return at===w?_e(ee,q,se.props.children,Se,se.key):q!==null&&(q.elementType===at||typeof at=="object"&&at!==null&&at.$$typeof===T&&ir(at)===q.type)?(q=f(q,se.props),jo(q,se),q.return=ee,q):(q=Ql(se.type,se.key,se.props,null,ee.mode,Se),jo(q,se),q.return=ee,q)}function re(ee,q,se,Se){return q===null||q.tag!==4||q.stateNode.containerInfo!==se.containerInfo||q.stateNode.implementation!==se.implementation?(q=nf(se,ee.mode,Se),q.return=ee,q):(q=f(q,se.children||[]),q.return=ee,q)}function _e(ee,q,se,Se,at){return q===null||q.tag!==7?(q=Js(se,ee.mode,Se,at),q.return=ee,q):(q=f(q,se),q.return=ee,q)}function Ee(ee,q,se){if(typeof q=="string"&&q!==""||typeof q=="number"||typeof q=="bigint")return q=tf(""+q,ee.mode,se),q.return=ee,q;if(typeof q=="object"&&q!==null){switch(q.$$typeof){case x:return se=Ql(q.type,q.key,q.props,null,ee.mode,se),jo(se,q),se.return=ee,se;case b:return q=nf(q,ee.mode,se),q.return=ee,q;case T:return q=ir(q),Ee(ee,q,se)}if(X(q)||j(q))return q=Js(q,ee.mode,se,null),q.return=ee,q;if(typeof q.then=="function")return Ee(ee,ac(q),se);if(q.$$typeof===B)return Ee(ee,ec(ee,q),se);sc(ee,q)}return null}function le(ee,q,se,Se){var at=q!==null?q.key:null;if(typeof se=="string"&&se!==""||typeof se=="number"||typeof se=="bigint")return at!==null?null:R(ee,q,""+se,Se);if(typeof se=="object"&&se!==null){switch(se.$$typeof){case x:return se.key===at?G(ee,q,se,Se):null;case b:return se.key===at?re(ee,q,se,Se):null;case T:return se=ir(se),le(ee,q,se,Se)}if(X(se)||j(se))return at!==null?null:_e(ee,q,se,Se,null);if(typeof se.then=="function")return le(ee,q,ac(se),Se);if(se.$$typeof===B)return le(ee,q,ec(ee,se),Se);sc(ee,se)}return null}function pe(ee,q,se,Se,at){if(typeof Se=="string"&&Se!==""||typeof Se=="number"||typeof Se=="bigint")return ee=ee.get(se)||null,R(q,ee,""+Se,at);if(typeof Se=="object"&&Se!==null){switch(Se.$$typeof){case x:return ee=ee.get(Se.key===null?se:Se.key)||null,G(q,ee,Se,at);case b:return ee=ee.get(Se.key===null?se:Se.key)||null,re(q,ee,Se,at);case T:return Se=ir(Se),pe(ee,q,se,Se,at)}if(X(Se)||j(Se))return ee=ee.get(se)||null,_e(q,ee,Se,at,null);if(typeof Se.then=="function")return pe(ee,q,se,ac(Se),at);if(Se.$$typeof===B)return pe(ee,q,se,ec(q,Se),at);sc(q,Se)}return null}function Ke(ee,q,se,Se){for(var at=null,Ot=null,et=q,mt=q=0,Tt=null;et!==null&&mt<se.length;mt++){et.index>mt?(Tt=et,et=null):Tt=et.sibling;var Pt=le(ee,et,se[mt],Se);if(Pt===null){et===null&&(et=Tt);break}t&&et&&Pt.alternate===null&&n(ee,et),q=p(Pt,q,mt),Ot===null?at=Pt:Ot.sibling=Pt,Ot=Pt,et=Tt}if(mt===se.length)return s(ee,et),At&&Oa(ee,mt),at;if(et===null){for(;mt<se.length;mt++)et=Ee(ee,se[mt],Se),et!==null&&(q=p(et,q,mt),Ot===null?at=et:Ot.sibling=et,Ot=et);return At&&Oa(ee,mt),at}for(et=l(et);mt<se.length;mt++)Tt=pe(et,ee,mt,se[mt],Se),Tt!==null&&(t&&Tt.alternate!==null&&et.delete(Tt.key===null?mt:Tt.key),q=p(Tt,q,mt),Ot===null?at=Tt:Ot.sibling=Tt,Ot=Tt);return t&&et.forEach(function(ws){return n(ee,ws)}),At&&Oa(ee,mt),at}function ot(ee,q,se,Se){if(se==null)throw Error(r(151));for(var at=null,Ot=null,et=q,mt=q=0,Tt=null,Pt=se.next();et!==null&&!Pt.done;mt++,Pt=se.next()){et.index>mt?(Tt=et,et=null):Tt=et.sibling;var ws=le(ee,et,Pt.value,Se);if(ws===null){et===null&&(et=Tt);break}t&&et&&ws.alternate===null&&n(ee,et),q=p(ws,q,mt),Ot===null?at=ws:Ot.sibling=ws,Ot=ws,et=Tt}if(Pt.done)return s(ee,et),At&&Oa(ee,mt),at;if(et===null){for(;!Pt.done;mt++,Pt=se.next())Pt=Ee(ee,Pt.value,Se),Pt!==null&&(q=p(Pt,q,mt),Ot===null?at=Pt:Ot.sibling=Pt,Ot=Pt);return At&&Oa(ee,mt),at}for(et=l(et);!Pt.done;mt++,Pt=se.next())Pt=pe(et,ee,mt,Pt.value,Se),Pt!==null&&(t&&Pt.alternate!==null&&et.delete(Pt.key===null?mt:Pt.key),q=p(Pt,q,mt),Ot===null?at=Pt:Ot.sibling=Pt,Ot=Pt);return t&&et.forEach(function(uy){return n(ee,uy)}),At&&Oa(ee,mt),at}function Jt(ee,q,se,Se){if(typeof se=="object"&&se!==null&&se.type===w&&se.key===null&&(se=se.props.children),typeof se=="object"&&se!==null){switch(se.$$typeof){case x:e:{for(var at=se.key;q!==null;){if(q.key===at){if(at=se.type,at===w){if(q.tag===7){s(ee,q.sibling),Se=f(q,se.props.children),Se.return=ee,ee=Se;break e}}else if(q.elementType===at||typeof at=="object"&&at!==null&&at.$$typeof===T&&ir(at)===q.type){s(ee,q.sibling),Se=f(q,se.props),jo(Se,se),Se.return=ee,ee=Se;break e}s(ee,q);break}else n(ee,q);q=q.sibling}se.type===w?(Se=Js(se.props.children,ee.mode,Se,se.key),Se.return=ee,ee=Se):(Se=Ql(se.type,se.key,se.props,null,ee.mode,Se),jo(Se,se),Se.return=ee,ee=Se)}return S(ee);case b:e:{for(at=se.key;q!==null;){if(q.key===at)if(q.tag===4&&q.stateNode.containerInfo===se.containerInfo&&q.stateNode.implementation===se.implementation){s(ee,q.sibling),Se=f(q,se.children||[]),Se.return=ee,ee=Se;break e}else{s(ee,q);break}else n(ee,q);q=q.sibling}Se=nf(se,ee.mode,Se),Se.return=ee,ee=Se}return S(ee);case T:return se=ir(se),Jt(ee,q,se,Se)}if(X(se))return Ke(ee,q,se,Se);if(j(se)){if(at=j(se),typeof at!="function")throw Error(r(150));return se=at.call(se),ot(ee,q,se,Se)}if(typeof se.then=="function")return Jt(ee,q,ac(se),Se);if(se.$$typeof===B)return Jt(ee,q,ec(ee,se),Se);sc(ee,se)}return typeof se=="string"&&se!==""||typeof se=="number"||typeof se=="bigint"?(se=""+se,q!==null&&q.tag===6?(s(ee,q.sibling),Se=f(q,se),Se.return=ee,ee=Se):(s(ee,q),Se=tf(se,ee.mode,Se),Se.return=ee,ee=Se),S(ee)):s(ee,q)}return function(ee,q,se,Se){try{Yo=0;var at=Jt(ee,q,se,Se);return Hr=null,at}catch(et){if(et===zr||et===nc)throw et;var Ot=Si(29,et,null,ee.mode);return Ot.lanes=Se,Ot.return=ee,Ot}finally{}}}var sr=zm(!0),Hm=zm(!1),ds=!1;function mf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function gf(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function hs(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function ps(t,n,s){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(Ht&2)!==0){var f=l.pending;return f===null?n.next=n:(n.next=f.next,f.next=n),l.pending=n,n=Kl(t),Em(t,null,s),n}return Zl(t,l,n,s),Kl(t)}function Zo(t,n,s){if(n=n.updateQueue,n!==null&&(n=n.shared,(s&4194048)!==0)){var l=n.lanes;l&=t.pendingLanes,s|=l,n.lanes=s,Fn(t,s)}}function _f(t,n){var s=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,s===l)){var f=null,p=null;if(s=s.firstBaseUpdate,s!==null){do{var S={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};p===null?f=p=S:p=p.next=S,s=s.next}while(s!==null);p===null?f=p=n:p=p.next=n}else f=p=n;s={baseState:l.baseState,firstBaseUpdate:f,lastBaseUpdate:p,shared:l.shared,callbacks:l.callbacks},t.updateQueue=s;return}t=s.lastBaseUpdate,t===null?s.firstBaseUpdate=n:t.next=n,s.lastBaseUpdate=n}var vf=!1;function Ko(){if(vf){var t=Br;if(t!==null)throw t}}function Qo(t,n,s,l){vf=!1;var f=t.updateQueue;ds=!1;var p=f.firstBaseUpdate,S=f.lastBaseUpdate,R=f.shared.pending;if(R!==null){f.shared.pending=null;var G=R,re=G.next;G.next=null,S===null?p=re:S.next=re,S=G;var _e=t.alternate;_e!==null&&(_e=_e.updateQueue,R=_e.lastBaseUpdate,R!==S&&(R===null?_e.firstBaseUpdate=re:R.next=re,_e.lastBaseUpdate=G))}if(p!==null){var Ee=f.baseState;S=0,_e=re=G=null,R=p;do{var le=R.lane&-536870913,pe=le!==R.lane;if(pe?(bt&le)===le:(l&le)===le){le!==0&&le===Fr&&(vf=!0),_e!==null&&(_e=_e.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});e:{var Ke=t,ot=R;le=n;var Jt=s;switch(ot.tag){case 1:if(Ke=ot.payload,typeof Ke=="function"){Ee=Ke.call(Jt,Ee,le);break e}Ee=Ke;break e;case 3:Ke.flags=Ke.flags&-65537|128;case 0:if(Ke=ot.payload,le=typeof Ke=="function"?Ke.call(Jt,Ee,le):Ke,le==null)break e;Ee=_({},Ee,le);break e;case 2:ds=!0}}le=R.callback,le!==null&&(t.flags|=64,pe&&(t.flags|=8192),pe=f.callbacks,pe===null?f.callbacks=[le]:pe.push(le))}else pe={lane:le,tag:R.tag,payload:R.payload,callback:R.callback,next:null},_e===null?(re=_e=pe,G=Ee):_e=_e.next=pe,S|=le;if(R=R.next,R===null){if(R=f.shared.pending,R===null)break;pe=R,R=pe.next,pe.next=null,f.lastBaseUpdate=pe,f.shared.pending=null}}while(!0);_e===null&&(G=Ee),f.baseState=G,f.firstBaseUpdate=re,f.lastBaseUpdate=_e,p===null&&(f.shared.lanes=0),xs|=S,t.lanes=S,t.memoizedState=Ee}}function Gm(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function Vm(t,n){var s=t.callbacks;if(s!==null)for(t.callbacks=null,t=0;t<s.length;t++)Gm(s[t],n)}var Gr=U(null),rc=U(0);function km(t,n){t=Wa,ye(rc,t),ye(Gr,n),Wa=t|n.baseLanes}function xf(){ye(rc,Wa),ye(Gr,Gr.current)}function Sf(){Wa=rc.current,W(Gr),W(rc)}var Mi=U(null),Ii=null;function ms(t){var n=t.alternate;ye(Mn,Mn.current&1),ye(Mi,t),Ii===null&&(n===null||Gr.current!==null||n.memoizedState!==null)&&(Ii=t)}function Mf(t){ye(Mn,Mn.current),ye(Mi,t),Ii===null&&(Ii=t)}function Xm(t){t.tag===22?(ye(Mn,Mn.current),ye(Mi,t),Ii===null&&(Ii=t)):gs()}function gs(){ye(Mn,Mn.current),ye(Mi,Mi.current)}function yi(t){W(Mi),Ii===t&&(Ii=null),W(Mn)}var Mn=U(0);function oc(t){for(var n=t;n!==null;){if(n.tag===13){var s=n.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||Rd(s)||Cd(s)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Fa=0,ht=null,Kt=null,Rn=null,lc=!1,Vr=!1,rr=!1,cc=0,Jo=0,kr=null,eM=0;function _n(){throw Error(r(321))}function yf(t,n){if(n===null)return!1;for(var s=0;s<n.length&&s<t.length;s++)if(!xi(t[s],n[s]))return!1;return!0}function Ef(t,n,s,l,f,p){return Fa=p,ht=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,z.H=t===null||t.memoizedState===null?R0:Bf,rr=!1,p=s(l,f),rr=!1,Vr&&(p=qm(n,s,l,f)),Wm(t),p}function Wm(t){z.H=tl;var n=Kt!==null&&Kt.next!==null;if(Fa=0,Rn=Kt=ht=null,lc=!1,Jo=0,kr=null,n)throw Error(r(300));t===null||Cn||(t=t.dependencies,t!==null&&$l(t)&&(Cn=!0))}function qm(t,n,s,l){ht=t;var f=0;do{if(Vr&&(kr=null),Jo=0,Vr=!1,25<=f)throw Error(r(301));if(f+=1,Rn=Kt=null,t.updateQueue!=null){var p=t.updateQueue;p.lastEffect=null,p.events=null,p.stores=null,p.memoCache!=null&&(p.memoCache.index=0)}z.H=C0,p=n(s,l)}while(Vr);return p}function tM(){var t=z.H,n=t.useState()[0];return n=typeof n.then=="function"?$o(n):n,t=t.useState()[0],(Kt!==null?Kt.memoizedState:null)!==t&&(ht.flags|=1024),n}function bf(){var t=cc!==0;return cc=0,t}function Tf(t,n,s){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~s}function Af(t){if(lc){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}lc=!1}Fa=0,Rn=Kt=ht=null,Vr=!1,Jo=cc=0,kr=null}function ai(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Rn===null?ht.memoizedState=Rn=t:Rn=Rn.next=t,Rn}function yn(){if(Kt===null){var t=ht.alternate;t=t!==null?t.memoizedState:null}else t=Kt.next;var n=Rn===null?ht.memoizedState:Rn.next;if(n!==null)Rn=n,Kt=t;else{if(t===null)throw ht.alternate===null?Error(r(467)):Error(r(310));Kt=t,t={memoizedState:Kt.memoizedState,baseState:Kt.baseState,baseQueue:Kt.baseQueue,queue:Kt.queue,next:null},Rn===null?ht.memoizedState=Rn=t:Rn=Rn.next=t}return Rn}function uc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function $o(t){var n=Jo;return Jo+=1,kr===null&&(kr=[]),t=Im(kr,t,n),n=ht,(Rn===null?n.memoizedState:Rn.next)===null&&(n=n.alternate,z.H=n===null||n.memoizedState===null?R0:Bf),t}function fc(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return $o(t);if(t.$$typeof===B)return Xn(t)}throw Error(r(438,String(t)))}function Rf(t){var n=null,s=ht.updateQueue;if(s!==null&&(n=s.memoCache),n==null){var l=ht.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(n={data:l.data.map(function(f){return f.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),s===null&&(s=uc(),ht.updateQueue=s),s.memoCache=n,s=n.data[n.index],s===void 0)for(s=n.data[n.index]=Array(t),l=0;l<t;l++)s[l]=Z;return n.index++,s}function Ba(t,n){return typeof n=="function"?n(t):n}function dc(t){var n=yn();return Cf(n,Kt,t)}function Cf(t,n,s){var l=t.queue;if(l===null)throw Error(r(311));l.lastRenderedReducer=s;var f=t.baseQueue,p=l.pending;if(p!==null){if(f!==null){var S=f.next;f.next=p.next,p.next=S}n.baseQueue=f=p,l.pending=null}if(p=t.baseState,f===null)t.memoizedState=p;else{n=f.next;var R=S=null,G=null,re=n,_e=!1;do{var Ee=re.lane&-536870913;if(Ee!==re.lane?(bt&Ee)===Ee:(Fa&Ee)===Ee){var le=re.revertLane;if(le===0)G!==null&&(G=G.next={lane:0,revertLane:0,gesture:null,action:re.action,hasEagerState:re.hasEagerState,eagerState:re.eagerState,next:null}),Ee===Fr&&(_e=!0);else if((Fa&le)===le){re=re.next,le===Fr&&(_e=!0);continue}else Ee={lane:0,revertLane:re.revertLane,gesture:null,action:re.action,hasEagerState:re.hasEagerState,eagerState:re.eagerState,next:null},G===null?(R=G=Ee,S=p):G=G.next=Ee,ht.lanes|=le,xs|=le;Ee=re.action,rr&&s(p,Ee),p=re.hasEagerState?re.eagerState:s(p,Ee)}else le={lane:Ee,revertLane:re.revertLane,gesture:re.gesture,action:re.action,hasEagerState:re.hasEagerState,eagerState:re.eagerState,next:null},G===null?(R=G=le,S=p):G=G.next=le,ht.lanes|=Ee,xs|=Ee;re=re.next}while(re!==null&&re!==n);if(G===null?S=p:G.next=R,!xi(p,t.memoizedState)&&(Cn=!0,_e&&(s=Br,s!==null)))throw s;t.memoizedState=p,t.baseState=S,t.baseQueue=G,l.lastRenderedState=p}return f===null&&(l.lanes=0),[t.memoizedState,l.dispatch]}function wf(t){var n=yn(),s=n.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=t;var l=s.dispatch,f=s.pending,p=n.memoizedState;if(f!==null){s.pending=null;var S=f=f.next;do p=t(p,S.action),S=S.next;while(S!==f);xi(p,n.memoizedState)||(Cn=!0),n.memoizedState=p,n.baseQueue===null&&(n.baseState=p),s.lastRenderedState=p}return[p,l]}function Ym(t,n,s){var l=ht,f=yn(),p=At;if(p){if(s===void 0)throw Error(r(407));s=s()}else s=n();var S=!xi((Kt||f).memoizedState,s);if(S&&(f.memoizedState=s,Cn=!0),f=f.queue,Nf(Km.bind(null,l,f,t),[t]),f.getSnapshot!==n||S||Rn!==null&&Rn.memoizedState.tag&1){if(l.flags|=2048,Xr(9,{destroy:void 0},Zm.bind(null,l,f,s,n),null),en===null)throw Error(r(349));p||(Fa&127)!==0||jm(l,n,s)}return s}function jm(t,n,s){t.flags|=16384,t={getSnapshot:n,value:s},n=ht.updateQueue,n===null?(n=uc(),ht.updateQueue=n,n.stores=[t]):(s=n.stores,s===null?n.stores=[t]:s.push(t))}function Zm(t,n,s,l){n.value=s,n.getSnapshot=l,Qm(n)&&Jm(t)}function Km(t,n,s){return s(function(){Qm(n)&&Jm(t)})}function Qm(t){var n=t.getSnapshot;t=t.value;try{var s=n();return!xi(t,s)}catch{return!0}}function Jm(t){var n=Qs(t,2);n!==null&&hi(n,t,2)}function Df(t){var n=ai();if(typeof t=="function"){var s=t;if(t=s(),rr){De(!0);try{s()}finally{De(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ba,lastRenderedState:t},n}function $m(t,n,s,l){return t.baseState=s,Cf(t,Kt,typeof l=="function"?l:Ba)}function nM(t,n,s,l,f){if(mc(t))throw Error(r(485));if(t=n.action,t!==null){var p={payload:f,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){p.listeners.push(S)}};z.T!==null?s(!0):p.isTransition=!1,l(p),s=n.pending,s===null?(p.next=n.pending=p,e0(n,p)):(p.next=s.next,n.pending=s.next=p)}}function e0(t,n){var s=n.action,l=n.payload,f=t.state;if(n.isTransition){var p=z.T,S={};z.T=S;try{var R=s(f,l),G=z.S;G!==null&&G(S,R),t0(t,n,R)}catch(re){Lf(t,n,re)}finally{p!==null&&S.types!==null&&(p.types=S.types),z.T=p}}else try{p=s(f,l),t0(t,n,p)}catch(re){Lf(t,n,re)}}function t0(t,n,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(l){n0(t,n,l)},function(l){return Lf(t,n,l)}):n0(t,n,s)}function n0(t,n,s){n.status="fulfilled",n.value=s,i0(n),t.state=s,n=t.pending,n!==null&&(s=n.next,s===n?t.pending=null:(s=s.next,n.next=s,e0(t,s)))}function Lf(t,n,s){var l=t.pending;if(t.pending=null,l!==null){l=l.next;do n.status="rejected",n.reason=s,i0(n),n=n.next;while(n!==l)}t.action=null}function i0(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function a0(t,n){return n}function s0(t,n){if(At){var s=en.formState;if(s!==null){e:{var l=ht;if(At){if(ln){t:{for(var f=ln,p=Pi;f.nodeType!==8;){if(!p){f=null;break t}if(f=Fi(f.nextSibling),f===null){f=null;break t}}p=f.data,f=p==="F!"||p==="F"?f:null}if(f){ln=Fi(f.nextSibling),l=f.data==="F!";break e}}us(l)}l=!1}l&&(n=s[0])}}return s=ai(),s.memoizedState=s.baseState=n,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:a0,lastRenderedState:n},s.queue=l,s=b0.bind(null,ht,l),l.dispatch=s,l=Df(!1),p=Ff.bind(null,ht,!1,l.queue),l=ai(),f={state:n,dispatch:null,action:t,pending:null},l.queue=f,s=nM.bind(null,ht,f,p,s),f.dispatch=s,l.memoizedState=t,[n,s,!1]}function r0(t){var n=yn();return o0(n,Kt,t)}function o0(t,n,s){if(n=Cf(t,n,a0)[0],t=dc(Ba)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var l=$o(n)}catch(S){throw S===zr?nc:S}else l=n;n=yn();var f=n.queue,p=f.dispatch;return s!==n.memoizedState&&(ht.flags|=2048,Xr(9,{destroy:void 0},iM.bind(null,f,s),null)),[l,p,t]}function iM(t,n){t.action=n}function l0(t){var n=yn(),s=Kt;if(s!==null)return o0(n,s,t);yn(),n=n.memoizedState,s=yn();var l=s.queue.dispatch;return s.memoizedState=t,[n,l,!1]}function Xr(t,n,s,l){return t={tag:t,create:s,deps:l,inst:n,next:null},n=ht.updateQueue,n===null&&(n=uc(),ht.updateQueue=n),s=n.lastEffect,s===null?n.lastEffect=t.next=t:(l=s.next,s.next=t,t.next=l,n.lastEffect=t),t}function c0(){return yn().memoizedState}function hc(t,n,s,l){var f=ai();ht.flags|=t,f.memoizedState=Xr(1|n,{destroy:void 0},s,l===void 0?null:l)}function pc(t,n,s,l){var f=yn();l=l===void 0?null:l;var p=f.memoizedState.inst;Kt!==null&&l!==null&&yf(l,Kt.memoizedState.deps)?f.memoizedState=Xr(n,p,s,l):(ht.flags|=t,f.memoizedState=Xr(1|n,p,s,l))}function u0(t,n){hc(8390656,8,t,n)}function Nf(t,n){pc(2048,8,t,n)}function aM(t){ht.flags|=4;var n=ht.updateQueue;if(n===null)n=uc(),ht.updateQueue=n,n.events=[t];else{var s=n.events;s===null?n.events=[t]:s.push(t)}}function f0(t){var n=yn().memoizedState;return aM({ref:n,nextImpl:t}),function(){if((Ht&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function d0(t,n){return pc(4,2,t,n)}function h0(t,n){return pc(4,4,t,n)}function p0(t,n){if(typeof n=="function"){t=t();var s=n(t);return function(){typeof s=="function"?s():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function m0(t,n,s){s=s!=null?s.concat([t]):null,pc(4,4,p0.bind(null,n,t),s)}function Uf(){}function g0(t,n){var s=yn();n=n===void 0?null:n;var l=s.memoizedState;return n!==null&&yf(n,l[1])?l[0]:(s.memoizedState=[t,n],t)}function _0(t,n){var s=yn();n=n===void 0?null:n;var l=s.memoizedState;if(n!==null&&yf(n,l[1]))return l[0];if(l=t(),rr){De(!0);try{t()}finally{De(!1)}}return s.memoizedState=[l,n],l}function Of(t,n,s){return s===void 0||(Fa&1073741824)!==0&&(bt&261930)===0?t.memoizedState=n:(t.memoizedState=s,t=vg(),ht.lanes|=t,xs|=t,s)}function v0(t,n,s,l){return xi(s,n)?s:Gr.current!==null?(t=Of(t,s,l),xi(t,n)||(Cn=!0),t):(Fa&42)===0||(Fa&1073741824)!==0&&(bt&261930)===0?(Cn=!0,t.memoizedState=s):(t=vg(),ht.lanes|=t,xs|=t,n)}function x0(t,n,s,l,f){var p=H.p;H.p=p!==0&&8>p?p:8;var S=z.T,R={};z.T=R,Ff(t,!1,n,s);try{var G=f(),re=z.S;if(re!==null&&re(R,G),G!==null&&typeof G=="object"&&typeof G.then=="function"){var _e=$S(G,l);el(t,n,_e,Ti(t))}else el(t,n,l,Ti(t))}catch(Ee){el(t,n,{then:function(){},status:"rejected",reason:Ee},Ti())}finally{H.p=p,S!==null&&R.types!==null&&(S.types=R.types),z.T=S}}function sM(){}function Pf(t,n,s,l){if(t.tag!==5)throw Error(r(476));var f=S0(t).queue;x0(t,f,n,Q,s===null?sM:function(){return M0(t),s(l)})}function S0(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:Q,baseState:Q,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ba,lastRenderedState:Q},next:null};var s={};return n.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ba,lastRenderedState:s},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function M0(t){var n=S0(t);n.next===null&&(n=t.alternate.memoizedState),el(t,n.next.queue,{},Ti())}function If(){return Xn(_l)}function y0(){return yn().memoizedState}function E0(){return yn().memoizedState}function rM(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var s=Ti();t=hs(s);var l=ps(n,t,s);l!==null&&(hi(l,n,s),Zo(l,n,s)),n={cache:ff()},t.payload=n;return}n=n.return}}function oM(t,n,s){var l=Ti();s={lane:l,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},mc(t)?T0(n,s):(s=$u(t,n,s,l),s!==null&&(hi(s,t,l),A0(s,n,l)))}function b0(t,n,s){var l=Ti();el(t,n,s,l)}function el(t,n,s,l){var f={lane:l,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null};if(mc(t))T0(n,f);else{var p=t.alternate;if(t.lanes===0&&(p===null||p.lanes===0)&&(p=n.lastRenderedReducer,p!==null))try{var S=n.lastRenderedState,R=p(S,s);if(f.hasEagerState=!0,f.eagerState=R,xi(R,S))return Zl(t,n,f,0),en===null&&jl(),!1}catch{}finally{}if(s=$u(t,n,f,l),s!==null)return hi(s,t,l),A0(s,n,l),!0}return!1}function Ff(t,n,s,l){if(l={lane:2,revertLane:md(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},mc(t)){if(n)throw Error(r(479))}else n=$u(t,s,l,2),n!==null&&hi(n,t,2)}function mc(t){var n=t.alternate;return t===ht||n!==null&&n===ht}function T0(t,n){Vr=lc=!0;var s=t.pending;s===null?n.next=n:(n.next=s.next,s.next=n),t.pending=n}function A0(t,n,s){if((s&4194048)!==0){var l=n.lanes;l&=t.pendingLanes,s|=l,n.lanes=s,Fn(t,s)}}var tl={readContext:Xn,use:fc,useCallback:_n,useContext:_n,useEffect:_n,useImperativeHandle:_n,useLayoutEffect:_n,useInsertionEffect:_n,useMemo:_n,useReducer:_n,useRef:_n,useState:_n,useDebugValue:_n,useDeferredValue:_n,useTransition:_n,useSyncExternalStore:_n,useId:_n,useHostTransitionStatus:_n,useFormState:_n,useActionState:_n,useOptimistic:_n,useMemoCache:_n,useCacheRefresh:_n};tl.useEffectEvent=_n;var R0={readContext:Xn,use:fc,useCallback:function(t,n){return ai().memoizedState=[t,n===void 0?null:n],t},useContext:Xn,useEffect:u0,useImperativeHandle:function(t,n,s){s=s!=null?s.concat([t]):null,hc(4194308,4,p0.bind(null,n,t),s)},useLayoutEffect:function(t,n){return hc(4194308,4,t,n)},useInsertionEffect:function(t,n){hc(4,2,t,n)},useMemo:function(t,n){var s=ai();n=n===void 0?null:n;var l=t();if(rr){De(!0);try{t()}finally{De(!1)}}return s.memoizedState=[l,n],l},useReducer:function(t,n,s){var l=ai();if(s!==void 0){var f=s(n);if(rr){De(!0);try{s(n)}finally{De(!1)}}}else f=n;return l.memoizedState=l.baseState=f,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:f},l.queue=t,t=t.dispatch=oM.bind(null,ht,t),[l.memoizedState,t]},useRef:function(t){var n=ai();return t={current:t},n.memoizedState=t},useState:function(t){t=Df(t);var n=t.queue,s=b0.bind(null,ht,n);return n.dispatch=s,[t.memoizedState,s]},useDebugValue:Uf,useDeferredValue:function(t,n){var s=ai();return Of(s,t,n)},useTransition:function(){var t=Df(!1);return t=x0.bind(null,ht,t.queue,!0,!1),ai().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,s){var l=ht,f=ai();if(At){if(s===void 0)throw Error(r(407));s=s()}else{if(s=n(),en===null)throw Error(r(349));(bt&127)!==0||jm(l,n,s)}f.memoizedState=s;var p={value:s,getSnapshot:n};return f.queue=p,u0(Km.bind(null,l,p,t),[t]),l.flags|=2048,Xr(9,{destroy:void 0},Zm.bind(null,l,p,s,n),null),s},useId:function(){var t=ai(),n=en.identifierPrefix;if(At){var s=pa,l=ha;s=(l&~(1<<32-Ve(l)-1)).toString(32)+s,n="_"+n+"R_"+s,s=cc++,0<s&&(n+="H"+s.toString(32)),n+="_"}else s=eM++,n="_"+n+"r_"+s.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:If,useFormState:s0,useActionState:s0,useOptimistic:function(t){var n=ai();n.memoizedState=n.baseState=t;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=s,n=Ff.bind(null,ht,!0,s),s.dispatch=n,[t,n]},useMemoCache:Rf,useCacheRefresh:function(){return ai().memoizedState=rM.bind(null,ht)},useEffectEvent:function(t){var n=ai(),s={impl:t};return n.memoizedState=s,function(){if((Ht&2)!==0)throw Error(r(440));return s.impl.apply(void 0,arguments)}}},Bf={readContext:Xn,use:fc,useCallback:g0,useContext:Xn,useEffect:Nf,useImperativeHandle:m0,useInsertionEffect:d0,useLayoutEffect:h0,useMemo:_0,useReducer:dc,useRef:c0,useState:function(){return dc(Ba)},useDebugValue:Uf,useDeferredValue:function(t,n){var s=yn();return v0(s,Kt.memoizedState,t,n)},useTransition:function(){var t=dc(Ba)[0],n=yn().memoizedState;return[typeof t=="boolean"?t:$o(t),n]},useSyncExternalStore:Ym,useId:y0,useHostTransitionStatus:If,useFormState:r0,useActionState:r0,useOptimistic:function(t,n){var s=yn();return $m(s,Kt,t,n)},useMemoCache:Rf,useCacheRefresh:E0};Bf.useEffectEvent=f0;var C0={readContext:Xn,use:fc,useCallback:g0,useContext:Xn,useEffect:Nf,useImperativeHandle:m0,useInsertionEffect:d0,useLayoutEffect:h0,useMemo:_0,useReducer:wf,useRef:c0,useState:function(){return wf(Ba)},useDebugValue:Uf,useDeferredValue:function(t,n){var s=yn();return Kt===null?Of(s,t,n):v0(s,Kt.memoizedState,t,n)},useTransition:function(){var t=wf(Ba)[0],n=yn().memoizedState;return[typeof t=="boolean"?t:$o(t),n]},useSyncExternalStore:Ym,useId:y0,useHostTransitionStatus:If,useFormState:l0,useActionState:l0,useOptimistic:function(t,n){var s=yn();return Kt!==null?$m(s,Kt,t,n):(s.baseState=t,[t,s.queue.dispatch])},useMemoCache:Rf,useCacheRefresh:E0};C0.useEffectEvent=f0;function zf(t,n,s,l){n=t.memoizedState,s=s(l,n),s=s==null?n:_({},n,s),t.memoizedState=s,t.lanes===0&&(t.updateQueue.baseState=s)}var Hf={enqueueSetState:function(t,n,s){t=t._reactInternals;var l=Ti(),f=hs(l);f.payload=n,s!=null&&(f.callback=s),n=ps(t,f,l),n!==null&&(hi(n,t,l),Zo(n,t,l))},enqueueReplaceState:function(t,n,s){t=t._reactInternals;var l=Ti(),f=hs(l);f.tag=1,f.payload=n,s!=null&&(f.callback=s),n=ps(t,f,l),n!==null&&(hi(n,t,l),Zo(n,t,l))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var s=Ti(),l=hs(s);l.tag=2,n!=null&&(l.callback=n),n=ps(t,l,s),n!==null&&(hi(n,t,s),Zo(n,t,s))}};function w0(t,n,s,l,f,p,S){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,p,S):n.prototype&&n.prototype.isPureReactComponent?!Go(s,l)||!Go(f,p):!0}function D0(t,n,s,l){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(s,l),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(s,l),n.state!==t&&Hf.enqueueReplaceState(n,n.state,null)}function or(t,n){var s=n;if("ref"in n){s={};for(var l in n)l!=="ref"&&(s[l]=n[l])}if(t=t.defaultProps){s===n&&(s=_({},s));for(var f in t)s[f]===void 0&&(s[f]=t[f])}return s}function L0(t){Yl(t)}function N0(t){console.error(t)}function U0(t){Yl(t)}function gc(t,n){try{var s=t.onUncaughtError;s(n.value,{componentStack:n.stack})}catch(l){setTimeout(function(){throw l})}}function O0(t,n,s){try{var l=t.onCaughtError;l(s.value,{componentStack:s.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function Gf(t,n,s){return s=hs(s),s.tag=3,s.payload={element:null},s.callback=function(){gc(t,n)},s}function P0(t){return t=hs(t),t.tag=3,t}function I0(t,n,s,l){var f=s.type.getDerivedStateFromError;if(typeof f=="function"){var p=l.value;t.payload=function(){return f(p)},t.callback=function(){O0(n,s,l)}}var S=s.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(t.callback=function(){O0(n,s,l),typeof f!="function"&&(Ss===null?Ss=new Set([this]):Ss.add(this));var R=l.stack;this.componentDidCatch(l.value,{componentStack:R!==null?R:""})})}function lM(t,n,s,l,f){if(s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(n=s.alternate,n!==null&&Ir(n,s,f,!0),s=Mi.current,s!==null){switch(s.tag){case 31:case 13:return Ii===null?Cc():s.alternate===null&&vn===0&&(vn=3),s.flags&=-257,s.flags|=65536,s.lanes=f,l===ic?s.flags|=16384:(n=s.updateQueue,n===null?s.updateQueue=new Set([l]):n.add(l),dd(t,l,f)),!1;case 22:return s.flags|=65536,l===ic?s.flags|=16384:(n=s.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([l])},s.updateQueue=n):(s=n.retryQueue,s===null?n.retryQueue=new Set([l]):s.add(l)),dd(t,l,f)),!1}throw Error(r(435,s.tag))}return dd(t,l,f),Cc(),!1}if(At)return n=Mi.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=f,l!==rf&&(t=Error(r(422),{cause:l}),Xo(Ni(t,s)))):(l!==rf&&(n=Error(r(423),{cause:l}),Xo(Ni(n,s))),t=t.current.alternate,t.flags|=65536,f&=-f,t.lanes|=f,l=Ni(l,s),f=Gf(t.stateNode,l,f),_f(t,f),vn!==4&&(vn=2)),!1;var p=Error(r(520),{cause:l});if(p=Ni(p,s),cl===null?cl=[p]:cl.push(p),vn!==4&&(vn=2),n===null)return!0;l=Ni(l,s),s=n;do{switch(s.tag){case 3:return s.flags|=65536,t=f&-f,s.lanes|=t,t=Gf(s.stateNode,l,t),_f(s,t),!1;case 1:if(n=s.type,p=s.stateNode,(s.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Ss===null||!Ss.has(p))))return s.flags|=65536,f&=-f,s.lanes|=f,f=P0(f),I0(f,t,s,l),_f(s,f),!1}s=s.return}while(s!==null);return!1}var Vf=Error(r(461)),Cn=!1;function Wn(t,n,s,l){n.child=t===null?Hm(n,null,s,l):sr(n,t.child,s,l)}function F0(t,n,s,l,f){s=s.render;var p=n.ref;if("ref"in l){var S={};for(var R in l)R!=="ref"&&(S[R]=l[R])}else S=l;return tr(n),l=Ef(t,n,s,S,p,f),R=bf(),t!==null&&!Cn?(Tf(t,n,f),za(t,n,f)):(At&&R&&af(n),n.flags|=1,Wn(t,n,l,f),n.child)}function B0(t,n,s,l,f){if(t===null){var p=s.type;return typeof p=="function"&&!ef(p)&&p.defaultProps===void 0&&s.compare===null?(n.tag=15,n.type=p,z0(t,n,p,l,f)):(t=Ql(s.type,null,l,n,n.mode,f),t.ref=n.ref,t.return=n,n.child=t)}if(p=t.child,!Kf(t,f)){var S=p.memoizedProps;if(s=s.compare,s=s!==null?s:Go,s(S,l)&&t.ref===n.ref)return za(t,n,f)}return n.flags|=1,t=Ua(p,l),t.ref=n.ref,t.return=n,n.child=t}function z0(t,n,s,l,f){if(t!==null){var p=t.memoizedProps;if(Go(p,l)&&t.ref===n.ref)if(Cn=!1,n.pendingProps=l=p,Kf(t,f))(t.flags&131072)!==0&&(Cn=!0);else return n.lanes=t.lanes,za(t,n,f)}return kf(t,n,s,l,f)}function H0(t,n,s,l){var f=l.children,p=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((n.flags&128)!==0){if(p=p!==null?p.baseLanes|s:s,t!==null){for(l=n.child=t.child,f=0;l!==null;)f=f|l.lanes|l.childLanes,l=l.sibling;l=f&~p}else l=0,n.child=null;return G0(t,n,p,s,l)}if((s&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&tc(n,p!==null?p.cachePool:null),p!==null?km(n,p):xf(),Xm(n);else return l=n.lanes=536870912,G0(t,n,p!==null?p.baseLanes|s:s,s,l)}else p!==null?(tc(n,p.cachePool),km(n,p),gs(),n.memoizedState=null):(t!==null&&tc(n,null),xf(),gs());return Wn(t,n,f,s),n.child}function nl(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function G0(t,n,s,l,f){var p=hf();return p=p===null?null:{parent:An._currentValue,pool:p},n.memoizedState={baseLanes:s,cachePool:p},t!==null&&tc(n,null),xf(),Xm(n),t!==null&&Ir(t,n,l,!0),n.childLanes=f,null}function _c(t,n){return n=xc({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function V0(t,n,s){return sr(n,t.child,null,s),t=_c(n,n.pendingProps),t.flags|=2,yi(n),n.memoizedState=null,t}function cM(t,n,s){var l=n.pendingProps,f=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(At){if(l.mode==="hidden")return t=_c(n,l),n.lanes=536870912,nl(null,t);if(Mf(n),(t=ln)?(t=e_(t,Pi),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:ls!==null?{id:ha,overflow:pa}:null,retryLane:536870912,hydrationErrors:null},s=Tm(t),s.return=n,n.child=s,kn=n,ln=null)):t=null,t===null)throw us(n);return n.lanes=536870912,null}return _c(n,l)}var p=t.memoizedState;if(p!==null){var S=p.dehydrated;if(Mf(n),f)if(n.flags&256)n.flags&=-257,n=V0(t,n,s);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(r(558));else if(Cn||Ir(t,n,s,!1),f=(s&t.childLanes)!==0,Cn||f){if(l=en,l!==null&&(S=Bn(l,s),S!==0&&S!==p.retryLane))throw p.retryLane=S,Qs(t,S),hi(l,t,S),Vf;Cc(),n=V0(t,n,s)}else t=p.treeContext,ln=Fi(S.nextSibling),kn=n,At=!0,cs=null,Pi=!1,t!==null&&Cm(n,t),n=_c(n,l),n.flags|=4096;return n}return t=Ua(t.child,{mode:l.mode,children:l.children}),t.ref=n.ref,n.child=t,t.return=n,t}function vc(t,n){var s=n.ref;if(s===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(r(284));(t===null||t.ref!==s)&&(n.flags|=4194816)}}function kf(t,n,s,l,f){return tr(n),s=Ef(t,n,s,l,void 0,f),l=bf(),t!==null&&!Cn?(Tf(t,n,f),za(t,n,f)):(At&&l&&af(n),n.flags|=1,Wn(t,n,s,f),n.child)}function k0(t,n,s,l,f,p){return tr(n),n.updateQueue=null,s=qm(n,l,s,f),Wm(t),l=bf(),t!==null&&!Cn?(Tf(t,n,p),za(t,n,p)):(At&&l&&af(n),n.flags|=1,Wn(t,n,s,p),n.child)}function X0(t,n,s,l,f){if(tr(n),n.stateNode===null){var p=Nr,S=s.contextType;typeof S=="object"&&S!==null&&(p=Xn(S)),p=new s(l,p),n.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,p.updater=Hf,n.stateNode=p,p._reactInternals=n,p=n.stateNode,p.props=l,p.state=n.memoizedState,p.refs={},mf(n),S=s.contextType,p.context=typeof S=="object"&&S!==null?Xn(S):Nr,p.state=n.memoizedState,S=s.getDerivedStateFromProps,typeof S=="function"&&(zf(n,s,S,l),p.state=n.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(S=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),S!==p.state&&Hf.enqueueReplaceState(p,p.state,null),Qo(n,l,p,f),Ko(),p.state=n.memoizedState),typeof p.componentDidMount=="function"&&(n.flags|=4194308),l=!0}else if(t===null){p=n.stateNode;var R=n.memoizedProps,G=or(s,R);p.props=G;var re=p.context,_e=s.contextType;S=Nr,typeof _e=="object"&&_e!==null&&(S=Xn(_e));var Ee=s.getDerivedStateFromProps;_e=typeof Ee=="function"||typeof p.getSnapshotBeforeUpdate=="function",R=n.pendingProps!==R,_e||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(R||re!==S)&&D0(n,p,l,S),ds=!1;var le=n.memoizedState;p.state=le,Qo(n,l,p,f),Ko(),re=n.memoizedState,R||le!==re||ds?(typeof Ee=="function"&&(zf(n,s,Ee,l),re=n.memoizedState),(G=ds||w0(n,s,G,l,le,re,S))?(_e||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount()),typeof p.componentDidMount=="function"&&(n.flags|=4194308)):(typeof p.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=l,n.memoizedState=re),p.props=l,p.state=re,p.context=S,l=G):(typeof p.componentDidMount=="function"&&(n.flags|=4194308),l=!1)}else{p=n.stateNode,gf(t,n),S=n.memoizedProps,_e=or(s,S),p.props=_e,Ee=n.pendingProps,le=p.context,re=s.contextType,G=Nr,typeof re=="object"&&re!==null&&(G=Xn(re)),R=s.getDerivedStateFromProps,(re=typeof R=="function"||typeof p.getSnapshotBeforeUpdate=="function")||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(S!==Ee||le!==G)&&D0(n,p,l,G),ds=!1,le=n.memoizedState,p.state=le,Qo(n,l,p,f),Ko();var pe=n.memoizedState;S!==Ee||le!==pe||ds||t!==null&&t.dependencies!==null&&$l(t.dependencies)?(typeof R=="function"&&(zf(n,s,R,l),pe=n.memoizedState),(_e=ds||w0(n,s,_e,l,le,pe,G)||t!==null&&t.dependencies!==null&&$l(t.dependencies))?(re||typeof p.UNSAFE_componentWillUpdate!="function"&&typeof p.componentWillUpdate!="function"||(typeof p.componentWillUpdate=="function"&&p.componentWillUpdate(l,pe,G),typeof p.UNSAFE_componentWillUpdate=="function"&&p.UNSAFE_componentWillUpdate(l,pe,G)),typeof p.componentDidUpdate=="function"&&(n.flags|=4),typeof p.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof p.componentDidUpdate!="function"||S===t.memoizedProps&&le===t.memoizedState||(n.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||S===t.memoizedProps&&le===t.memoizedState||(n.flags|=1024),n.memoizedProps=l,n.memoizedState=pe),p.props=l,p.state=pe,p.context=G,l=_e):(typeof p.componentDidUpdate!="function"||S===t.memoizedProps&&le===t.memoizedState||(n.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||S===t.memoizedProps&&le===t.memoizedState||(n.flags|=1024),l=!1)}return p=l,vc(t,n),l=(n.flags&128)!==0,p||l?(p=n.stateNode,s=l&&typeof s.getDerivedStateFromError!="function"?null:p.render(),n.flags|=1,t!==null&&l?(n.child=sr(n,t.child,null,f),n.child=sr(n,null,s,f)):Wn(t,n,s,f),n.memoizedState=p.state,t=n.child):t=za(t,n,f),t}function W0(t,n,s,l){return $s(),n.flags|=256,Wn(t,n,s,l),n.child}var Xf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Wf(t){return{baseLanes:t,cachePool:Om()}}function qf(t,n,s){return t=t!==null?t.childLanes&~s:0,n&&(t|=bi),t}function q0(t,n,s){var l=n.pendingProps,f=!1,p=(n.flags&128)!==0,S;if((S=p)||(S=t!==null&&t.memoizedState===null?!1:(Mn.current&2)!==0),S&&(f=!0,n.flags&=-129),S=(n.flags&32)!==0,n.flags&=-33,t===null){if(At){if(f?ms(n):gs(),(t=ln)?(t=e_(t,Pi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:ls!==null?{id:ha,overflow:pa}:null,retryLane:536870912,hydrationErrors:null},s=Tm(t),s.return=n,n.child=s,kn=n,ln=null)):t=null,t===null)throw us(n);return Cd(t)?n.lanes=32:n.lanes=536870912,null}var R=l.children;return l=l.fallback,f?(gs(),f=n.mode,R=xc({mode:"hidden",children:R},f),l=Js(l,f,s,null),R.return=n,l.return=n,R.sibling=l,n.child=R,l=n.child,l.memoizedState=Wf(s),l.childLanes=qf(t,S,s),n.memoizedState=Xf,nl(null,l)):(ms(n),Yf(n,R))}var G=t.memoizedState;if(G!==null&&(R=G.dehydrated,R!==null)){if(p)n.flags&256?(ms(n),n.flags&=-257,n=jf(t,n,s)):n.memoizedState!==null?(gs(),n.child=t.child,n.flags|=128,n=null):(gs(),R=l.fallback,f=n.mode,l=xc({mode:"visible",children:l.children},f),R=Js(R,f,s,null),R.flags|=2,l.return=n,R.return=n,l.sibling=R,n.child=l,sr(n,t.child,null,s),l=n.child,l.memoizedState=Wf(s),l.childLanes=qf(t,S,s),n.memoizedState=Xf,n=nl(null,l));else if(ms(n),Cd(R)){if(S=R.nextSibling&&R.nextSibling.dataset,S)var re=S.dgst;S=re,l=Error(r(419)),l.stack="",l.digest=S,Xo({value:l,source:null,stack:null}),n=jf(t,n,s)}else if(Cn||Ir(t,n,s,!1),S=(s&t.childLanes)!==0,Cn||S){if(S=en,S!==null&&(l=Bn(S,s),l!==0&&l!==G.retryLane))throw G.retryLane=l,Qs(t,l),hi(S,t,l),Vf;Rd(R)||Cc(),n=jf(t,n,s)}else Rd(R)?(n.flags|=192,n.child=t.child,n=null):(t=G.treeContext,ln=Fi(R.nextSibling),kn=n,At=!0,cs=null,Pi=!1,t!==null&&Cm(n,t),n=Yf(n,l.children),n.flags|=4096);return n}return f?(gs(),R=l.fallback,f=n.mode,G=t.child,re=G.sibling,l=Ua(G,{mode:"hidden",children:l.children}),l.subtreeFlags=G.subtreeFlags&65011712,re!==null?R=Ua(re,R):(R=Js(R,f,s,null),R.flags|=2),R.return=n,l.return=n,l.sibling=R,n.child=l,nl(null,l),l=n.child,R=t.child.memoizedState,R===null?R=Wf(s):(f=R.cachePool,f!==null?(G=An._currentValue,f=f.parent!==G?{parent:G,pool:G}:f):f=Om(),R={baseLanes:R.baseLanes|s,cachePool:f}),l.memoizedState=R,l.childLanes=qf(t,S,s),n.memoizedState=Xf,nl(t.child,l)):(ms(n),s=t.child,t=s.sibling,s=Ua(s,{mode:"visible",children:l.children}),s.return=n,s.sibling=null,t!==null&&(S=n.deletions,S===null?(n.deletions=[t],n.flags|=16):S.push(t)),n.child=s,n.memoizedState=null,s)}function Yf(t,n){return n=xc({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function xc(t,n){return t=Si(22,t,null,n),t.lanes=0,t}function jf(t,n,s){return sr(n,t.child,null,s),t=Yf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function Y0(t,n,s){t.lanes|=n;var l=t.alternate;l!==null&&(l.lanes|=n),cf(t.return,n,s)}function Zf(t,n,s,l,f,p){var S=t.memoizedState;S===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:l,tail:s,tailMode:f,treeForkCount:p}:(S.isBackwards=n,S.rendering=null,S.renderingStartTime=0,S.last=l,S.tail=s,S.tailMode=f,S.treeForkCount=p)}function j0(t,n,s){var l=n.pendingProps,f=l.revealOrder,p=l.tail;l=l.children;var S=Mn.current,R=(S&2)!==0;if(R?(S=S&1|2,n.flags|=128):S&=1,ye(Mn,S),Wn(t,n,l,s),l=At?ko:0,!R&&t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Y0(t,s,n);else if(t.tag===19)Y0(t,s,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(f){case"forwards":for(s=n.child,f=null;s!==null;)t=s.alternate,t!==null&&oc(t)===null&&(f=s),s=s.sibling;s=f,s===null?(f=n.child,n.child=null):(f=s.sibling,s.sibling=null),Zf(n,!1,f,s,p,l);break;case"backwards":case"unstable_legacy-backwards":for(s=null,f=n.child,n.child=null;f!==null;){if(t=f.alternate,t!==null&&oc(t)===null){n.child=f;break}t=f.sibling,f.sibling=s,s=f,f=t}Zf(n,!0,s,null,p,l);break;case"together":Zf(n,!1,null,null,void 0,l);break;default:n.memoizedState=null}return n.child}function za(t,n,s){if(t!==null&&(n.dependencies=t.dependencies),xs|=n.lanes,(s&n.childLanes)===0)if(t!==null){if(Ir(t,n,s,!1),(s&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,s=Ua(t,t.pendingProps),n.child=s,s.return=n;t.sibling!==null;)t=t.sibling,s=s.sibling=Ua(t,t.pendingProps),s.return=n;s.sibling=null}return n.child}function Kf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&$l(t)))}function uM(t,n,s){switch(n.tag){case 3:Te(n,n.stateNode.containerInfo),fs(n,An,t.memoizedState.cache),$s();break;case 27:case 5:je(n);break;case 4:Te(n,n.stateNode.containerInfo);break;case 10:fs(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Mf(n),null;break;case 13:var l=n.memoizedState;if(l!==null)return l.dehydrated!==null?(ms(n),n.flags|=128,null):(s&n.child.childLanes)!==0?q0(t,n,s):(ms(n),t=za(t,n,s),t!==null?t.sibling:null);ms(n);break;case 19:var f=(t.flags&128)!==0;if(l=(s&n.childLanes)!==0,l||(Ir(t,n,s,!1),l=(s&n.childLanes)!==0),f){if(l)return j0(t,n,s);n.flags|=128}if(f=n.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),ye(Mn,Mn.current),l)break;return null;case 22:return n.lanes=0,H0(t,n,s,n.pendingProps);case 24:fs(n,An,t.memoizedState.cache)}return za(t,n,s)}function Z0(t,n,s){if(t!==null)if(t.memoizedProps!==n.pendingProps)Cn=!0;else{if(!Kf(t,s)&&(n.flags&128)===0)return Cn=!1,uM(t,n,s);Cn=(t.flags&131072)!==0}else Cn=!1,At&&(n.flags&1048576)!==0&&Rm(n,ko,n.index);switch(n.lanes=0,n.tag){case 16:e:{var l=n.pendingProps;if(t=ir(n.elementType),n.type=t,typeof t=="function")ef(t)?(l=or(t,l),n.tag=1,n=X0(null,n,t,l,s)):(n.tag=0,n=kf(null,n,t,l,s));else{if(t!=null){var f=t.$$typeof;if(f===C){n.tag=11,n=F0(null,n,t,l,s);break e}else if(f===F){n.tag=14,n=B0(null,n,t,l,s);break e}}throw n=ce(t)||t,Error(r(306,n,""))}}return n;case 0:return kf(t,n,n.type,n.pendingProps,s);case 1:return l=n.type,f=or(l,n.pendingProps),X0(t,n,l,f,s);case 3:e:{if(Te(n,n.stateNode.containerInfo),t===null)throw Error(r(387));l=n.pendingProps;var p=n.memoizedState;f=p.element,gf(t,n),Qo(n,l,null,s);var S=n.memoizedState;if(l=S.cache,fs(n,An,l),l!==p.cache&&uf(n,[An],s,!0),Ko(),l=S.element,p.isDehydrated)if(p={element:l,isDehydrated:!1,cache:S.cache},n.updateQueue.baseState=p,n.memoizedState=p,n.flags&256){n=W0(t,n,l,s);break e}else if(l!==f){f=Ni(Error(r(424)),n),Xo(f),n=W0(t,n,l,s);break e}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(ln=Fi(t.firstChild),kn=n,At=!0,cs=null,Pi=!0,s=Hm(n,null,l,s),n.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling}else{if($s(),l===f){n=za(t,n,s);break e}Wn(t,n,l,s)}n=n.child}return n;case 26:return vc(t,n),t===null?(s=r_(n.type,null,n.pendingProps,null))?n.memoizedState=s:At||(s=n.type,t=n.pendingProps,l=Pc(oe.current).createElement(s),l[on]=n,l[bn]=t,qn(l,s,t),Ae(l),n.stateNode=l):n.memoizedState=r_(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return je(n),t===null&&At&&(l=n.stateNode=i_(n.type,n.pendingProps,oe.current),kn=n,Pi=!0,f=ln,bs(n.type)?(wd=f,ln=Fi(l.firstChild)):ln=f),Wn(t,n,n.pendingProps.children,s),vc(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&At&&((f=l=ln)&&(l=HM(l,n.type,n.pendingProps,Pi),l!==null?(n.stateNode=l,kn=n,ln=Fi(l.firstChild),Pi=!1,f=!0):f=!1),f||us(n)),je(n),f=n.type,p=n.pendingProps,S=t!==null?t.memoizedProps:null,l=p.children,bd(f,p)?l=null:S!==null&&bd(f,S)&&(n.flags|=32),n.memoizedState!==null&&(f=Ef(t,n,tM,null,null,s),_l._currentValue=f),vc(t,n),Wn(t,n,l,s),n.child;case 6:return t===null&&At&&((t=s=ln)&&(s=GM(s,n.pendingProps,Pi),s!==null?(n.stateNode=s,kn=n,ln=null,t=!0):t=!1),t||us(n)),null;case 13:return q0(t,n,s);case 4:return Te(n,n.stateNode.containerInfo),l=n.pendingProps,t===null?n.child=sr(n,null,l,s):Wn(t,n,l,s),n.child;case 11:return F0(t,n,n.type,n.pendingProps,s);case 7:return Wn(t,n,n.pendingProps,s),n.child;case 8:return Wn(t,n,n.pendingProps.children,s),n.child;case 12:return Wn(t,n,n.pendingProps.children,s),n.child;case 10:return l=n.pendingProps,fs(n,n.type,l.value),Wn(t,n,l.children,s),n.child;case 9:return f=n.type._context,l=n.pendingProps.children,tr(n),f=Xn(f),l=l(f),n.flags|=1,Wn(t,n,l,s),n.child;case 14:return B0(t,n,n.type,n.pendingProps,s);case 15:return z0(t,n,n.type,n.pendingProps,s);case 19:return j0(t,n,s);case 31:return cM(t,n,s);case 22:return H0(t,n,s,n.pendingProps);case 24:return tr(n),l=Xn(An),t===null?(f=hf(),f===null&&(f=en,p=ff(),f.pooledCache=p,p.refCount++,p!==null&&(f.pooledCacheLanes|=s),f=p),n.memoizedState={parent:l,cache:f},mf(n),fs(n,An,f)):((t.lanes&s)!==0&&(gf(t,n),Qo(n,null,null,s),Ko()),f=t.memoizedState,p=n.memoizedState,f.parent!==l?(f={parent:l,cache:l},n.memoizedState=f,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=f),fs(n,An,l)):(l=p.cache,fs(n,An,l),l!==f.cache&&uf(n,[An],s,!0))),Wn(t,n,n.pendingProps.children,s),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function Ha(t){t.flags|=4}function Qf(t,n,s,l,f){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(f&335544128)===f)if(t.stateNode.complete)t.flags|=8192;else if(yg())t.flags|=8192;else throw ar=ic,pf}else t.flags&=-16777217}function K0(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!f_(n))if(yg())t.flags|=8192;else throw ar=ic,pf}function Sc(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?ve():536870912,t.lanes|=n,jr|=n)}function il(t,n){if(!At)switch(t.tailMode){case"hidden":n=t.tail;for(var s=null;n!==null;)n.alternate!==null&&(s=n),n=n.sibling;s===null?t.tail=null:s.sibling=null;break;case"collapsed":s=t.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function cn(t){var n=t.alternate!==null&&t.alternate.child===t.child,s=0,l=0;if(n)for(var f=t.child;f!==null;)s|=f.lanes|f.childLanes,l|=f.subtreeFlags&65011712,l|=f.flags&65011712,f.return=t,f=f.sibling;else for(f=t.child;f!==null;)s|=f.lanes|f.childLanes,l|=f.subtreeFlags,l|=f.flags,f.return=t,f=f.sibling;return t.subtreeFlags|=l,t.childLanes=s,n}function fM(t,n,s){var l=n.pendingProps;switch(sf(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return cn(n),null;case 1:return cn(n),null;case 3:return s=n.stateNode,l=null,t!==null&&(l=t.memoizedState.cache),n.memoizedState.cache!==l&&(n.flags|=2048),Ia(An),qe(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(t===null||t.child===null)&&(Pr(n)?Ha(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,of())),cn(n),null;case 26:var f=n.type,p=n.memoizedState;return t===null?(Ha(n),p!==null?(cn(n),K0(n,p)):(cn(n),Qf(n,f,null,l,s))):p?p!==t.memoizedState?(Ha(n),cn(n),K0(n,p)):(cn(n),n.flags&=-16777217):(t=t.memoizedProps,t!==l&&Ha(n),cn(n),Qf(n,f,t,l,s)),null;case 27:if($e(n),s=oe.current,f=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==l&&Ha(n);else{if(!l){if(n.stateNode===null)throw Error(r(166));return cn(n),null}t=Ce.current,Pr(n)?wm(n):(t=i_(f,l,s),n.stateNode=t,Ha(n))}return cn(n),null;case 5:if($e(n),f=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==l&&Ha(n);else{if(!l){if(n.stateNode===null)throw Error(r(166));return cn(n),null}if(p=Ce.current,Pr(n))wm(n);else{var S=Pc(oe.current);switch(p){case 1:p=S.createElementNS("http://www.w3.org/2000/svg",f);break;case 2:p=S.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;default:switch(f){case"svg":p=S.createElementNS("http://www.w3.org/2000/svg",f);break;case"math":p=S.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;case"script":p=S.createElement("div"),p.innerHTML="<script><\/script>",p=p.removeChild(p.firstChild);break;case"select":p=typeof l.is=="string"?S.createElement("select",{is:l.is}):S.createElement("select"),l.multiple?p.multiple=!0:l.size&&(p.size=l.size);break;default:p=typeof l.is=="string"?S.createElement(f,{is:l.is}):S.createElement(f)}}p[on]=n,p[bn]=l;e:for(S=n.child;S!==null;){if(S.tag===5||S.tag===6)p.appendChild(S.stateNode);else if(S.tag!==4&&S.tag!==27&&S.child!==null){S.child.return=S,S=S.child;continue}if(S===n)break e;for(;S.sibling===null;){if(S.return===null||S.return===n)break e;S=S.return}S.sibling.return=S.return,S=S.sibling}n.stateNode=p;e:switch(qn(p,f,l),f){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&Ha(n)}}return cn(n),Qf(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,s),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==l&&Ha(n);else{if(typeof l!="string"&&n.stateNode===null)throw Error(r(166));if(t=oe.current,Pr(n)){if(t=n.stateNode,s=n.memoizedProps,l=null,f=kn,f!==null)switch(f.tag){case 27:case 5:l=f.memoizedProps}t[on]=n,t=!!(t.nodeValue===s||l!==null&&l.suppressHydrationWarning===!0||qg(t.nodeValue,s)),t||us(n,!0)}else t=Pc(t).createTextNode(l),t[on]=n,n.stateNode=t}return cn(n),null;case 31:if(s=n.memoizedState,t===null||t.memoizedState!==null){if(l=Pr(n),s!==null){if(t===null){if(!l)throw Error(r(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[on]=n}else $s(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;cn(n),t=!1}else s=of(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=s),t=!0;if(!t)return n.flags&256?(yi(n),n):(yi(n),null);if((n.flags&128)!==0)throw Error(r(558))}return cn(n),null;case 13:if(l=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(f=Pr(n),l!==null&&l.dehydrated!==null){if(t===null){if(!f)throw Error(r(318));if(f=n.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(r(317));f[on]=n}else $s(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;cn(n),f=!1}else f=of(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=f),f=!0;if(!f)return n.flags&256?(yi(n),n):(yi(n),null)}return yi(n),(n.flags&128)!==0?(n.lanes=s,n):(s=l!==null,t=t!==null&&t.memoizedState!==null,s&&(l=n.child,f=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(f=l.alternate.memoizedState.cachePool.pool),p=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(p=l.memoizedState.cachePool.pool),p!==f&&(l.flags|=2048)),s!==t&&s&&(n.child.flags|=8192),Sc(n,n.updateQueue),cn(n),null);case 4:return qe(),t===null&&xd(n.stateNode.containerInfo),cn(n),null;case 10:return Ia(n.type),cn(n),null;case 19:if(W(Mn),l=n.memoizedState,l===null)return cn(n),null;if(f=(n.flags&128)!==0,p=l.rendering,p===null)if(f)il(l,!1);else{if(vn!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(p=oc(t),p!==null){for(n.flags|=128,il(l,!1),t=p.updateQueue,n.updateQueue=t,Sc(n,t),n.subtreeFlags=0,t=s,s=n.child;s!==null;)bm(s,t),s=s.sibling;return ye(Mn,Mn.current&1|2),At&&Oa(n,l.treeForkCount),n.child}t=t.sibling}l.tail!==null&&Ut()>Tc&&(n.flags|=128,f=!0,il(l,!1),n.lanes=4194304)}else{if(!f)if(t=oc(p),t!==null){if(n.flags|=128,f=!0,t=t.updateQueue,n.updateQueue=t,Sc(n,t),il(l,!0),l.tail===null&&l.tailMode==="hidden"&&!p.alternate&&!At)return cn(n),null}else 2*Ut()-l.renderingStartTime>Tc&&s!==536870912&&(n.flags|=128,f=!0,il(l,!1),n.lanes=4194304);l.isBackwards?(p.sibling=n.child,n.child=p):(t=l.last,t!==null?t.sibling=p:n.child=p,l.last=p)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=Ut(),t.sibling=null,s=Mn.current,ye(Mn,f?s&1|2:s&1),At&&Oa(n,l.treeForkCount),t):(cn(n),null);case 22:case 23:return yi(n),Sf(),l=n.memoizedState!==null,t!==null?t.memoizedState!==null!==l&&(n.flags|=8192):l&&(n.flags|=8192),l?(s&536870912)!==0&&(n.flags&128)===0&&(cn(n),n.subtreeFlags&6&&(n.flags|=8192)):cn(n),s=n.updateQueue,s!==null&&Sc(n,s.retryQueue),s=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),l=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(l=n.memoizedState.cachePool.pool),l!==s&&(n.flags|=2048),t!==null&&W(nr),null;case 24:return s=null,t!==null&&(s=t.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),Ia(An),cn(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function dM(t,n){switch(sf(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Ia(An),qe(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return $e(n),null;case 31:if(n.memoizedState!==null){if(yi(n),n.alternate===null)throw Error(r(340));$s()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(yi(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));$s()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return W(Mn),null;case 4:return qe(),null;case 10:return Ia(n.type),null;case 22:case 23:return yi(n),Sf(),t!==null&&W(nr),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Ia(An),null;case 25:return null;default:return null}}function Q0(t,n){switch(sf(n),n.tag){case 3:Ia(An),qe();break;case 26:case 27:case 5:$e(n);break;case 4:qe();break;case 31:n.memoizedState!==null&&yi(n);break;case 13:yi(n);break;case 19:W(Mn);break;case 10:Ia(n.type);break;case 22:case 23:yi(n),Sf(),t!==null&&W(nr);break;case 24:Ia(An)}}function al(t,n){try{var s=n.updateQueue,l=s!==null?s.lastEffect:null;if(l!==null){var f=l.next;s=f;do{if((s.tag&t)===t){l=void 0;var p=s.create,S=s.inst;l=p(),S.destroy=l}s=s.next}while(s!==f)}}catch(R){qt(n,n.return,R)}}function _s(t,n,s){try{var l=n.updateQueue,f=l!==null?l.lastEffect:null;if(f!==null){var p=f.next;l=p;do{if((l.tag&t)===t){var S=l.inst,R=S.destroy;if(R!==void 0){S.destroy=void 0,f=n;var G=s,re=R;try{re()}catch(_e){qt(f,G,_e)}}}l=l.next}while(l!==p)}}catch(_e){qt(n,n.return,_e)}}function J0(t){var n=t.updateQueue;if(n!==null){var s=t.stateNode;try{Vm(n,s)}catch(l){qt(t,t.return,l)}}}function $0(t,n,s){s.props=or(t.type,t.memoizedProps),s.state=t.memoizedState;try{s.componentWillUnmount()}catch(l){qt(t,n,l)}}function sl(t,n){try{var s=t.ref;if(s!==null){switch(t.tag){case 26:case 27:case 5:var l=t.stateNode;break;case 30:l=t.stateNode;break;default:l=t.stateNode}typeof s=="function"?t.refCleanup=s(l):s.current=l}}catch(f){qt(t,n,f)}}function ma(t,n){var s=t.ref,l=t.refCleanup;if(s!==null)if(typeof l=="function")try{l()}catch(f){qt(t,n,f)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(f){qt(t,n,f)}else s.current=null}function eg(t){var n=t.type,s=t.memoizedProps,l=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":s.autoFocus&&l.focus();break e;case"img":s.src?l.src=s.src:s.srcSet&&(l.srcset=s.srcSet)}}catch(f){qt(t,t.return,f)}}function Jf(t,n,s){try{var l=t.stateNode;OM(l,t.type,s,n),l[bn]=n}catch(f){qt(t,t.return,f)}}function tg(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&bs(t.type)||t.tag===4}function $f(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||tg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&bs(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ed(t,n,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,n?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(t,n):(n=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,n.appendChild(t),s=s._reactRootContainer,s!=null||n.onclick!==null||(n.onclick=ii));else if(l!==4&&(l===27&&bs(t.type)&&(s=t.stateNode,n=null),t=t.child,t!==null))for(ed(t,n,s),t=t.sibling;t!==null;)ed(t,n,s),t=t.sibling}function Mc(t,n,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,n?s.insertBefore(t,n):s.appendChild(t);else if(l!==4&&(l===27&&bs(t.type)&&(s=t.stateNode),t=t.child,t!==null))for(Mc(t,n,s),t=t.sibling;t!==null;)Mc(t,n,s),t=t.sibling}function ng(t){var n=t.stateNode,s=t.memoizedProps;try{for(var l=t.type,f=n.attributes;f.length;)n.removeAttributeNode(f[0]);qn(n,l,s),n[on]=t,n[bn]=s}catch(p){qt(t,t.return,p)}}var Ga=!1,wn=!1,td=!1,ig=typeof WeakSet=="function"?WeakSet:Set,Hn=null;function hM(t,n){if(t=t.containerInfo,yd=Vc,t=mm(t),Yu(t)){if("selectionStart"in t)var s={start:t.selectionStart,end:t.selectionEnd};else e:{s=(s=t.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var f=l.anchorOffset,p=l.focusNode;l=l.focusOffset;try{s.nodeType,p.nodeType}catch{s=null;break e}var S=0,R=-1,G=-1,re=0,_e=0,Ee=t,le=null;t:for(;;){for(var pe;Ee!==s||f!==0&&Ee.nodeType!==3||(R=S+f),Ee!==p||l!==0&&Ee.nodeType!==3||(G=S+l),Ee.nodeType===3&&(S+=Ee.nodeValue.length),(pe=Ee.firstChild)!==null;)le=Ee,Ee=pe;for(;;){if(Ee===t)break t;if(le===s&&++re===f&&(R=S),le===p&&++_e===l&&(G=S),(pe=Ee.nextSibling)!==null)break;Ee=le,le=Ee.parentNode}Ee=pe}s=R===-1||G===-1?null:{start:R,end:G}}else s=null}s=s||{start:0,end:0}}else s=null;for(Ed={focusedElem:t,selectionRange:s},Vc=!1,Hn=n;Hn!==null;)if(n=Hn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,Hn=t;else for(;Hn!==null;){switch(n=Hn,p=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(s=0;s<t.length;s++)f=t[s],f.ref.impl=f.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&p!==null){t=void 0,s=n,f=p.memoizedProps,p=p.memoizedState,l=s.stateNode;try{var Ke=or(s.type,f);t=l.getSnapshotBeforeUpdate(Ke,p),l.__reactInternalSnapshotBeforeUpdate=t}catch(ot){qt(s,s.return,ot)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,s=t.nodeType,s===9)Ad(t);else if(s===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Ad(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,Hn=t;break}Hn=n.return}}function ag(t,n,s){var l=s.flags;switch(s.tag){case 0:case 11:case 15:ka(t,s),l&4&&al(5,s);break;case 1:if(ka(t,s),l&4)if(t=s.stateNode,n===null)try{t.componentDidMount()}catch(S){qt(s,s.return,S)}else{var f=or(s.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(f,n,t.__reactInternalSnapshotBeforeUpdate)}catch(S){qt(s,s.return,S)}}l&64&&J0(s),l&512&&sl(s,s.return);break;case 3:if(ka(t,s),l&64&&(t=s.updateQueue,t!==null)){if(n=null,s.child!==null)switch(s.child.tag){case 27:case 5:n=s.child.stateNode;break;case 1:n=s.child.stateNode}try{Vm(t,n)}catch(S){qt(s,s.return,S)}}break;case 27:n===null&&l&4&&ng(s);case 26:case 5:ka(t,s),n===null&&l&4&&eg(s),l&512&&sl(s,s.return);break;case 12:ka(t,s);break;case 31:ka(t,s),l&4&&og(t,s);break;case 13:ka(t,s),l&4&&lg(t,s),l&64&&(t=s.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(s=yM.bind(null,s),VM(t,s))));break;case 22:if(l=s.memoizedState!==null||Ga,!l){n=n!==null&&n.memoizedState!==null||wn,f=Ga;var p=wn;Ga=l,(wn=n)&&!p?Xa(t,s,(s.subtreeFlags&8772)!==0):ka(t,s),Ga=f,wn=p}break;case 30:break;default:ka(t,s)}}function sg(t){var n=t.alternate;n!==null&&(t.alternate=null,sg(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&qi(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var dn=null,ci=!1;function Va(t,n,s){for(s=s.child;s!==null;)rg(t,n,s),s=s.sibling}function rg(t,n,s){if(he&&typeof he.onCommitFiberUnmount=="function")try{he.onCommitFiberUnmount(ue,s)}catch{}switch(s.tag){case 26:wn||ma(s,n),Va(t,n,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:wn||ma(s,n);var l=dn,f=ci;bs(s.type)&&(dn=s.stateNode,ci=!1),Va(t,n,s),pl(s.stateNode),dn=l,ci=f;break;case 5:wn||ma(s,n);case 6:if(l=dn,f=ci,dn=null,Va(t,n,s),dn=l,ci=f,dn!==null)if(ci)try{(dn.nodeType===9?dn.body:dn.nodeName==="HTML"?dn.ownerDocument.body:dn).removeChild(s.stateNode)}catch(p){qt(s,n,p)}else try{dn.removeChild(s.stateNode)}catch(p){qt(s,n,p)}break;case 18:dn!==null&&(ci?(t=dn,Jg(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,s.stateNode),no(t)):Jg(dn,s.stateNode));break;case 4:l=dn,f=ci,dn=s.stateNode.containerInfo,ci=!0,Va(t,n,s),dn=l,ci=f;break;case 0:case 11:case 14:case 15:_s(2,s,n),wn||_s(4,s,n),Va(t,n,s);break;case 1:wn||(ma(s,n),l=s.stateNode,typeof l.componentWillUnmount=="function"&&$0(s,n,l)),Va(t,n,s);break;case 21:Va(t,n,s);break;case 22:wn=(l=wn)||s.memoizedState!==null,Va(t,n,s),wn=l;break;default:Va(t,n,s)}}function og(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{no(t)}catch(s){qt(n,n.return,s)}}}function lg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{no(t)}catch(s){qt(n,n.return,s)}}function pM(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new ig),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new ig),n;default:throw Error(r(435,t.tag))}}function yc(t,n){var s=pM(t);n.forEach(function(l){if(!s.has(l)){s.add(l);var f=EM.bind(null,t,l);l.then(f,f)}})}function ui(t,n){var s=n.deletions;if(s!==null)for(var l=0;l<s.length;l++){var f=s[l],p=t,S=n,R=S;e:for(;R!==null;){switch(R.tag){case 27:if(bs(R.type)){dn=R.stateNode,ci=!1;break e}break;case 5:dn=R.stateNode,ci=!1;break e;case 3:case 4:dn=R.stateNode.containerInfo,ci=!0;break e}R=R.return}if(dn===null)throw Error(r(160));rg(p,S,f),dn=null,ci=!1,p=f.alternate,p!==null&&(p.return=null),f.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)cg(n,t),n=n.sibling}var Qi=null;function cg(t,n){var s=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:ui(n,t),fi(t),l&4&&(_s(3,t,t.return),al(3,t),_s(5,t,t.return));break;case 1:ui(n,t),fi(t),l&512&&(wn||s===null||ma(s,s.return)),l&64&&Ga&&(t=t.updateQueue,t!==null&&(l=t.callbacks,l!==null&&(s=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=s===null?l:s.concat(l))));break;case 26:var f=Qi;if(ui(n,t),fi(t),l&512&&(wn||s===null||ma(s,s.return)),l&4){var p=s!==null?s.memoizedState:null;if(l=t.memoizedState,s===null)if(l===null)if(t.stateNode===null){e:{l=t.type,s=t.memoizedProps,f=f.ownerDocument||f;t:switch(l){case"title":p=f.getElementsByTagName("title")[0],(!p||p[Wi]||p[on]||p.namespaceURI==="http://www.w3.org/2000/svg"||p.hasAttribute("itemprop"))&&(p=f.createElement(l),f.head.insertBefore(p,f.querySelector("head > title"))),qn(p,l,s),p[on]=t,Ae(p),l=p;break e;case"link":var S=c_("link","href",f).get(l+(s.href||""));if(S){for(var R=0;R<S.length;R++)if(p=S[R],p.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&p.getAttribute("rel")===(s.rel==null?null:s.rel)&&p.getAttribute("title")===(s.title==null?null:s.title)&&p.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){S.splice(R,1);break t}}p=f.createElement(l),qn(p,l,s),f.head.appendChild(p);break;case"meta":if(S=c_("meta","content",f).get(l+(s.content||""))){for(R=0;R<S.length;R++)if(p=S[R],p.getAttribute("content")===(s.content==null?null:""+s.content)&&p.getAttribute("name")===(s.name==null?null:s.name)&&p.getAttribute("property")===(s.property==null?null:s.property)&&p.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&p.getAttribute("charset")===(s.charSet==null?null:s.charSet)){S.splice(R,1);break t}}p=f.createElement(l),qn(p,l,s),f.head.appendChild(p);break;default:throw Error(r(468,l))}p[on]=t,Ae(p),l=p}t.stateNode=l}else u_(f,t.type,t.stateNode);else t.stateNode=l_(f,l,t.memoizedProps);else p!==l?(p===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):p.count--,l===null?u_(f,t.type,t.stateNode):l_(f,l,t.memoizedProps)):l===null&&t.stateNode!==null&&Jf(t,t.memoizedProps,s.memoizedProps)}break;case 27:ui(n,t),fi(t),l&512&&(wn||s===null||ma(s,s.return)),s!==null&&l&4&&Jf(t,t.memoizedProps,s.memoizedProps);break;case 5:if(ui(n,t),fi(t),l&512&&(wn||s===null||ma(s,s.return)),t.flags&32){f=t.stateNode;try{gn(f,"")}catch(Ke){qt(t,t.return,Ke)}}l&4&&t.stateNode!=null&&(f=t.memoizedProps,Jf(t,f,s!==null?s.memoizedProps:f)),l&1024&&(td=!0);break;case 6:if(ui(n,t),fi(t),l&4){if(t.stateNode===null)throw Error(r(162));l=t.memoizedProps,s=t.stateNode;try{s.nodeValue=l}catch(Ke){qt(t,t.return,Ke)}}break;case 3:if(Bc=null,f=Qi,Qi=Ic(n.containerInfo),ui(n,t),Qi=f,fi(t),l&4&&s!==null&&s.memoizedState.isDehydrated)try{no(n.containerInfo)}catch(Ke){qt(t,t.return,Ke)}td&&(td=!1,ug(t));break;case 4:l=Qi,Qi=Ic(t.stateNode.containerInfo),ui(n,t),fi(t),Qi=l;break;case 12:ui(n,t),fi(t);break;case 31:ui(n,t),fi(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,yc(t,l)));break;case 13:ui(n,t),fi(t),t.child.flags&8192&&t.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(bc=Ut()),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,yc(t,l)));break;case 22:f=t.memoizedState!==null;var G=s!==null&&s.memoizedState!==null,re=Ga,_e=wn;if(Ga=re||f,wn=_e||G,ui(n,t),wn=_e,Ga=re,fi(t),l&8192)e:for(n=t.stateNode,n._visibility=f?n._visibility&-2:n._visibility|1,f&&(s===null||G||Ga||wn||lr(t)),s=null,n=t;;){if(n.tag===5||n.tag===26){if(s===null){G=s=n;try{if(p=G.stateNode,f)S=p.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{R=G.stateNode;var Ee=G.memoizedProps.style,le=Ee!=null&&Ee.hasOwnProperty("display")?Ee.display:null;R.style.display=le==null||typeof le=="boolean"?"":(""+le).trim()}}catch(Ke){qt(G,G.return,Ke)}}}else if(n.tag===6){if(s===null){G=n;try{G.stateNode.nodeValue=f?"":G.memoizedProps}catch(Ke){qt(G,G.return,Ke)}}}else if(n.tag===18){if(s===null){G=n;try{var pe=G.stateNode;f?$g(pe,!0):$g(G.stateNode,!1)}catch(Ke){qt(G,G.return,Ke)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;s===n&&(s=null),n=n.return}s===n&&(s=null),n.sibling.return=n.return,n=n.sibling}l&4&&(l=t.updateQueue,l!==null&&(s=l.retryQueue,s!==null&&(l.retryQueue=null,yc(t,s))));break;case 19:ui(n,t),fi(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,yc(t,l)));break;case 30:break;case 21:break;default:ui(n,t),fi(t)}}function fi(t){var n=t.flags;if(n&2){try{for(var s,l=t.return;l!==null;){if(tg(l)){s=l;break}l=l.return}if(s==null)throw Error(r(160));switch(s.tag){case 27:var f=s.stateNode,p=$f(t);Mc(t,p,f);break;case 5:var S=s.stateNode;s.flags&32&&(gn(S,""),s.flags&=-33);var R=$f(t);Mc(t,R,S);break;case 3:case 4:var G=s.stateNode.containerInfo,re=$f(t);ed(t,re,G);break;default:throw Error(r(161))}}catch(_e){qt(t,t.return,_e)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function ug(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;ug(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function ka(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)ag(t,n.alternate,n),n=n.sibling}function lr(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:_s(4,n,n.return),lr(n);break;case 1:ma(n,n.return);var s=n.stateNode;typeof s.componentWillUnmount=="function"&&$0(n,n.return,s),lr(n);break;case 27:pl(n.stateNode);case 26:case 5:ma(n,n.return),lr(n);break;case 22:n.memoizedState===null&&lr(n);break;case 30:lr(n);break;default:lr(n)}t=t.sibling}}function Xa(t,n,s){for(s=s&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var l=n.alternate,f=t,p=n,S=p.flags;switch(p.tag){case 0:case 11:case 15:Xa(f,p,s),al(4,p);break;case 1:if(Xa(f,p,s),l=p,f=l.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(re){qt(l,l.return,re)}if(l=p,f=l.updateQueue,f!==null){var R=l.stateNode;try{var G=f.shared.hiddenCallbacks;if(G!==null)for(f.shared.hiddenCallbacks=null,f=0;f<G.length;f++)Gm(G[f],R)}catch(re){qt(l,l.return,re)}}s&&S&64&&J0(p),sl(p,p.return);break;case 27:ng(p);case 26:case 5:Xa(f,p,s),s&&l===null&&S&4&&eg(p),sl(p,p.return);break;case 12:Xa(f,p,s);break;case 31:Xa(f,p,s),s&&S&4&&og(f,p);break;case 13:Xa(f,p,s),s&&S&4&&lg(f,p);break;case 22:p.memoizedState===null&&Xa(f,p,s),sl(p,p.return);break;case 30:break;default:Xa(f,p,s)}n=n.sibling}}function nd(t,n){var s=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==s&&(t!=null&&t.refCount++,s!=null&&Wo(s))}function id(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Wo(t))}function Ji(t,n,s,l){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)fg(t,n,s,l),n=n.sibling}function fg(t,n,s,l){var f=n.flags;switch(n.tag){case 0:case 11:case 15:Ji(t,n,s,l),f&2048&&al(9,n);break;case 1:Ji(t,n,s,l);break;case 3:Ji(t,n,s,l),f&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Wo(t)));break;case 12:if(f&2048){Ji(t,n,s,l),t=n.stateNode;try{var p=n.memoizedProps,S=p.id,R=p.onPostCommit;typeof R=="function"&&R(S,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(G){qt(n,n.return,G)}}else Ji(t,n,s,l);break;case 31:Ji(t,n,s,l);break;case 13:Ji(t,n,s,l);break;case 23:break;case 22:p=n.stateNode,S=n.alternate,n.memoizedState!==null?p._visibility&2?Ji(t,n,s,l):rl(t,n):p._visibility&2?Ji(t,n,s,l):(p._visibility|=2,Wr(t,n,s,l,(n.subtreeFlags&10256)!==0||!1)),f&2048&&nd(S,n);break;case 24:Ji(t,n,s,l),f&2048&&id(n.alternate,n);break;default:Ji(t,n,s,l)}}function Wr(t,n,s,l,f){for(f=f&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var p=t,S=n,R=s,G=l,re=S.flags;switch(S.tag){case 0:case 11:case 15:Wr(p,S,R,G,f),al(8,S);break;case 23:break;case 22:var _e=S.stateNode;S.memoizedState!==null?_e._visibility&2?Wr(p,S,R,G,f):rl(p,S):(_e._visibility|=2,Wr(p,S,R,G,f)),f&&re&2048&&nd(S.alternate,S);break;case 24:Wr(p,S,R,G,f),f&&re&2048&&id(S.alternate,S);break;default:Wr(p,S,R,G,f)}n=n.sibling}}function rl(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var s=t,l=n,f=l.flags;switch(l.tag){case 22:rl(s,l),f&2048&&nd(l.alternate,l);break;case 24:rl(s,l),f&2048&&id(l.alternate,l);break;default:rl(s,l)}n=n.sibling}}var ol=8192;function qr(t,n,s){if(t.subtreeFlags&ol)for(t=t.child;t!==null;)dg(t,n,s),t=t.sibling}function dg(t,n,s){switch(t.tag){case 26:qr(t,n,s),t.flags&ol&&t.memoizedState!==null&&ey(s,Qi,t.memoizedState,t.memoizedProps);break;case 5:qr(t,n,s);break;case 3:case 4:var l=Qi;Qi=Ic(t.stateNode.containerInfo),qr(t,n,s),Qi=l;break;case 22:t.memoizedState===null&&(l=t.alternate,l!==null&&l.memoizedState!==null?(l=ol,ol=16777216,qr(t,n,s),ol=l):qr(t,n,s));break;default:qr(t,n,s)}}function hg(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function ll(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var s=0;s<n.length;s++){var l=n[s];Hn=l,mg(l,t)}hg(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)pg(t),t=t.sibling}function pg(t){switch(t.tag){case 0:case 11:case 15:ll(t),t.flags&2048&&_s(9,t,t.return);break;case 3:ll(t);break;case 12:ll(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Ec(t)):ll(t);break;default:ll(t)}}function Ec(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var s=0;s<n.length;s++){var l=n[s];Hn=l,mg(l,t)}hg(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:_s(8,n,n.return),Ec(n);break;case 22:s=n.stateNode,s._visibility&2&&(s._visibility&=-3,Ec(n));break;default:Ec(n)}t=t.sibling}}function mg(t,n){for(;Hn!==null;){var s=Hn;switch(s.tag){case 0:case 11:case 15:_s(8,s,n);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var l=s.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Wo(s.memoizedState.cache)}if(l=s.child,l!==null)l.return=s,Hn=l;else e:for(s=t;Hn!==null;){l=Hn;var f=l.sibling,p=l.return;if(sg(l),l===s){Hn=null;break e}if(f!==null){f.return=p,Hn=f;break e}Hn=p}}}var mM={getCacheForType:function(t){var n=Xn(An),s=n.data.get(t);return s===void 0&&(s=t(),n.data.set(t,s)),s},cacheSignal:function(){return Xn(An).controller.signal}},gM=typeof WeakMap=="function"?WeakMap:Map,Ht=0,en=null,yt=null,bt=0,Wt=0,Ei=null,vs=!1,Yr=!1,ad=!1,Wa=0,vn=0,xs=0,cr=0,sd=0,bi=0,jr=0,cl=null,di=null,rd=!1,bc=0,gg=0,Tc=1/0,Ac=null,Ss=null,On=0,Ms=null,Zr=null,qa=0,od=0,ld=null,_g=null,ul=0,cd=null;function Ti(){return(Ht&2)!==0&&bt!==0?bt&-bt:z.T!==null?md():os()}function vg(){if(bi===0)if((bt&536870912)===0||At){var t=st;st<<=1,(st&3932160)===0&&(st=262144),bi=t}else bi=536870912;return t=Mi.current,t!==null&&(t.flags|=32),bi}function hi(t,n,s){(t===en&&(Wt===2||Wt===9)||t.cancelPendingCommit!==null)&&(Kr(t,0),ys(t,bt,bi,!1)),Ye(t,s),((Ht&2)===0||t!==en)&&(t===en&&((Ht&2)===0&&(cr|=s),vn===4&&ys(t,bt,bi,!1)),ga(t))}function xg(t,n,s){if((Ht&6)!==0)throw Error(r(327));var l=!s&&(n&127)===0&&(n&t.expiredLanes)===0||we(t,n),f=l?xM(t,n):fd(t,n,!0),p=l;do{if(f===0){Yr&&!l&&ys(t,n,0,!1);break}else{if(s=t.current.alternate,p&&!_M(s)){f=fd(t,n,!1),p=!1;continue}if(f===2){if(p=n,t.errorRecoveryDisabledLanes&p)var S=0;else S=t.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){n=S;e:{var R=t;f=cl;var G=R.current.memoizedState.isDehydrated;if(G&&(Kr(R,S).flags|=256),S=fd(R,S,!1),S!==2){if(ad&&!G){R.errorRecoveryDisabledLanes|=p,cr|=p,f=4;break e}p=di,di=f,p!==null&&(di===null?di=p:di.push.apply(di,p))}f=S}if(p=!1,f!==2)continue}}if(f===1){Kr(t,0),ys(t,n,0,!0);break}e:{switch(l=t,p=f,p){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:ys(l,n,bi,!vs);break e;case 2:di=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(f=bc+300-Ut(),10<f)){if(ys(l,n,bi,!vs),ge(l,0,!0)!==0)break e;qa=n,l.timeoutHandle=Kg(Sg.bind(null,l,s,di,Ac,rd,n,bi,cr,jr,vs,p,"Throttled",-0,0),f);break e}Sg(l,s,di,Ac,rd,n,bi,cr,jr,vs,p,null,-0,0)}}break}while(!0);ga(t)}function Sg(t,n,s,l,f,p,S,R,G,re,_e,Ee,le,pe){if(t.timeoutHandle=-1,Ee=n.subtreeFlags,Ee&8192||(Ee&16785408)===16785408){Ee={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ii},dg(n,p,Ee);var Ke=(p&62914560)===p?bc-Ut():(p&4194048)===p?gg-Ut():0;if(Ke=ty(Ee,Ke),Ke!==null){qa=p,t.cancelPendingCommit=Ke(Cg.bind(null,t,n,p,s,l,f,S,R,G,_e,Ee,null,le,pe)),ys(t,p,S,!re);return}}Cg(t,n,p,s,l,f,S,R,G)}function _M(t){for(var n=t;;){var s=n.tag;if((s===0||s===11||s===15)&&n.flags&16384&&(s=n.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var l=0;l<s.length;l++){var f=s[l],p=f.getSnapshot;f=f.value;try{if(!xi(p(),f))return!1}catch{return!1}}if(s=n.child,n.subtreeFlags&16384&&s!==null)s.return=n,n=s;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function ys(t,n,s,l){n&=~sd,n&=~cr,t.suspendedLanes|=n,t.pingedLanes&=~n,l&&(t.warmLanes|=n),l=t.expirationTimes;for(var f=n;0<f;){var p=31-Ve(f),S=1<<p;l[p]=-1,f&=~S}s!==0&&Ft(t,s,n)}function Rc(){return(Ht&6)===0?(fl(0),!1):!0}function ud(){if(yt!==null){if(Wt===0)var t=yt.return;else t=yt,Pa=er=null,Af(t),Hr=null,Yo=0,t=yt;for(;t!==null;)Q0(t.alternate,t),t=t.return;yt=null}}function Kr(t,n){var s=t.timeoutHandle;s!==-1&&(t.timeoutHandle=-1,FM(s)),s=t.cancelPendingCommit,s!==null&&(t.cancelPendingCommit=null,s()),qa=0,ud(),en=t,yt=s=Ua(t.current,null),bt=n,Wt=0,Ei=null,vs=!1,Yr=we(t,n),ad=!1,jr=bi=sd=cr=xs=vn=0,di=cl=null,rd=!1,(n&8)!==0&&(n|=n&32);var l=t.entangledLanes;if(l!==0)for(t=t.entanglements,l&=n;0<l;){var f=31-Ve(l),p=1<<f;n|=t[f],l&=~p}return Wa=n,jl(),s}function Mg(t,n){ht=null,z.H=tl,n===zr||n===nc?(n=Fm(),Wt=3):n===pf?(n=Fm(),Wt=4):Wt=n===Vf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Ei=n,yt===null&&(vn=1,gc(t,Ni(n,t.current)))}function yg(){var t=Mi.current;return t===null?!0:(bt&4194048)===bt?Ii===null:(bt&62914560)===bt||(bt&536870912)!==0?t===Ii:!1}function Eg(){var t=z.H;return z.H=tl,t===null?tl:t}function bg(){var t=z.A;return z.A=mM,t}function Cc(){vn=4,vs||(bt&4194048)!==bt&&Mi.current!==null||(Yr=!0),(xs&134217727)===0&&(cr&134217727)===0||en===null||ys(en,bt,bi,!1)}function fd(t,n,s){var l=Ht;Ht|=2;var f=Eg(),p=bg();(en!==t||bt!==n)&&(Ac=null,Kr(t,n)),n=!1;var S=vn;e:do try{if(Wt!==0&&yt!==null){var R=yt,G=Ei;switch(Wt){case 8:ud(),S=6;break e;case 3:case 2:case 9:case 6:Mi.current===null&&(n=!0);var re=Wt;if(Wt=0,Ei=null,Qr(t,R,G,re),s&&Yr){S=0;break e}break;default:re=Wt,Wt=0,Ei=null,Qr(t,R,G,re)}}vM(),S=vn;break}catch(_e){Mg(t,_e)}while(!0);return n&&t.shellSuspendCounter++,Pa=er=null,Ht=l,z.H=f,z.A=p,yt===null&&(en=null,bt=0,jl()),S}function vM(){for(;yt!==null;)Tg(yt)}function xM(t,n){var s=Ht;Ht|=2;var l=Eg(),f=bg();en!==t||bt!==n?(Ac=null,Tc=Ut()+500,Kr(t,n)):Yr=we(t,n);e:do try{if(Wt!==0&&yt!==null){n=yt;var p=Ei;t:switch(Wt){case 1:Wt=0,Ei=null,Qr(t,n,p,1);break;case 2:case 9:if(Pm(p)){Wt=0,Ei=null,Ag(n);break}n=function(){Wt!==2&&Wt!==9||en!==t||(Wt=7),ga(t)},p.then(n,n);break e;case 3:Wt=7;break e;case 4:Wt=5;break e;case 7:Pm(p)?(Wt=0,Ei=null,Ag(n)):(Wt=0,Ei=null,Qr(t,n,p,7));break;case 5:var S=null;switch(yt.tag){case 26:S=yt.memoizedState;case 5:case 27:var R=yt;if(S?f_(S):R.stateNode.complete){Wt=0,Ei=null;var G=R.sibling;if(G!==null)yt=G;else{var re=R.return;re!==null?(yt=re,wc(re)):yt=null}break t}}Wt=0,Ei=null,Qr(t,n,p,5);break;case 6:Wt=0,Ei=null,Qr(t,n,p,6);break;case 8:ud(),vn=6;break e;default:throw Error(r(462))}}SM();break}catch(_e){Mg(t,_e)}while(!0);return Pa=er=null,z.H=l,z.A=f,Ht=s,yt!==null?0:(en=null,bt=0,jl(),vn)}function SM(){for(;yt!==null&&!rn();)Tg(yt)}function Tg(t){var n=Z0(t.alternate,t,Wa);t.memoizedProps=t.pendingProps,n===null?wc(t):yt=n}function Ag(t){var n=t,s=n.alternate;switch(n.tag){case 15:case 0:n=k0(s,n,n.pendingProps,n.type,void 0,bt);break;case 11:n=k0(s,n,n.pendingProps,n.type.render,n.ref,bt);break;case 5:Af(n);default:Q0(s,n),n=yt=bm(n,Wa),n=Z0(s,n,Wa)}t.memoizedProps=t.pendingProps,n===null?wc(t):yt=n}function Qr(t,n,s,l){Pa=er=null,Af(n),Hr=null,Yo=0;var f=n.return;try{if(lM(t,f,n,s,bt)){vn=1,gc(t,Ni(s,t.current)),yt=null;return}}catch(p){if(f!==null)throw yt=f,p;vn=1,gc(t,Ni(s,t.current)),yt=null;return}n.flags&32768?(At||l===1?t=!0:Yr||(bt&536870912)!==0?t=!1:(vs=t=!0,(l===2||l===9||l===3||l===6)&&(l=Mi.current,l!==null&&l.tag===13&&(l.flags|=16384))),Rg(n,t)):wc(n)}function wc(t){var n=t;do{if((n.flags&32768)!==0){Rg(n,vs);return}t=n.return;var s=fM(n.alternate,n,Wa);if(s!==null){yt=s;return}if(n=n.sibling,n!==null){yt=n;return}yt=n=t}while(n!==null);vn===0&&(vn=5)}function Rg(t,n){do{var s=dM(t.alternate,t);if(s!==null){s.flags&=32767,yt=s;return}if(s=t.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!n&&(t=t.sibling,t!==null)){yt=t;return}yt=t=s}while(t!==null);vn=6,yt=null}function Cg(t,n,s,l,f,p,S,R,G){t.cancelPendingCommit=null;do Dc();while(On!==0);if((Ht&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));if(p=n.lanes|n.childLanes,p|=Ju,jt(t,s,p,S,R,G),t===en&&(yt=en=null,bt=0),Zr=n,Ms=t,qa=s,od=p,ld=f,_g=l,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,bM(J,function(){return Ug(),null})):(t.callbackNode=null,t.callbackPriority=0),l=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||l){l=z.T,z.T=null,f=H.p,H.p=2,S=Ht,Ht|=4;try{hM(t,n,s)}finally{Ht=S,H.p=f,z.T=l}}On=1,wg(),Dg(),Lg()}}function wg(){if(On===1){On=0;var t=Ms,n=Zr,s=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||s){s=z.T,z.T=null;var l=H.p;H.p=2;var f=Ht;Ht|=4;try{cg(n,t);var p=Ed,S=mm(t.containerInfo),R=p.focusedElem,G=p.selectionRange;if(S!==R&&R&&R.ownerDocument&&pm(R.ownerDocument.documentElement,R)){if(G!==null&&Yu(R)){var re=G.start,_e=G.end;if(_e===void 0&&(_e=re),"selectionStart"in R)R.selectionStart=re,R.selectionEnd=Math.min(_e,R.value.length);else{var Ee=R.ownerDocument||document,le=Ee&&Ee.defaultView||window;if(le.getSelection){var pe=le.getSelection(),Ke=R.textContent.length,ot=Math.min(G.start,Ke),Jt=G.end===void 0?ot:Math.min(G.end,Ke);!pe.extend&&ot>Jt&&(S=Jt,Jt=ot,ot=S);var ee=hm(R,ot),q=hm(R,Jt);if(ee&&q&&(pe.rangeCount!==1||pe.anchorNode!==ee.node||pe.anchorOffset!==ee.offset||pe.focusNode!==q.node||pe.focusOffset!==q.offset)){var se=Ee.createRange();se.setStart(ee.node,ee.offset),pe.removeAllRanges(),ot>Jt?(pe.addRange(se),pe.extend(q.node,q.offset)):(se.setEnd(q.node,q.offset),pe.addRange(se))}}}}for(Ee=[],pe=R;pe=pe.parentNode;)pe.nodeType===1&&Ee.push({element:pe,left:pe.scrollLeft,top:pe.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<Ee.length;R++){var Se=Ee[R];Se.element.scrollLeft=Se.left,Se.element.scrollTop=Se.top}}Vc=!!yd,Ed=yd=null}finally{Ht=f,H.p=l,z.T=s}}t.current=n,On=2}}function Dg(){if(On===2){On=0;var t=Ms,n=Zr,s=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||s){s=z.T,z.T=null;var l=H.p;H.p=2;var f=Ht;Ht|=4;try{ag(t,n.alternate,n)}finally{Ht=f,H.p=l,z.T=s}}On=3}}function Lg(){if(On===4||On===3){On=0,K();var t=Ms,n=Zr,s=qa,l=_g;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?On=5:(On=0,Zr=Ms=null,Ng(t,t.pendingLanes));var f=t.pendingLanes;if(f===0&&(Ss=null),rs(s),n=n.stateNode,he&&typeof he.onCommitFiberRoot=="function")try{he.onCommitFiberRoot(ue,n,void 0,(n.current.flags&128)===128)}catch{}if(l!==null){n=z.T,f=H.p,H.p=2,z.T=null;try{for(var p=t.onRecoverableError,S=0;S<l.length;S++){var R=l[S];p(R.value,{componentStack:R.stack})}}finally{z.T=n,H.p=f}}(qa&3)!==0&&Dc(),ga(t),f=t.pendingLanes,(s&261930)!==0&&(f&42)!==0?t===cd?ul++:(ul=0,cd=t):ul=0,fl(0)}}function Ng(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Wo(n)))}function Dc(){return wg(),Dg(),Lg(),Ug()}function Ug(){if(On!==5)return!1;var t=Ms,n=od;od=0;var s=rs(qa),l=z.T,f=H.p;try{H.p=32>s?32:s,z.T=null,s=ld,ld=null;var p=Ms,S=qa;if(On=0,Zr=Ms=null,qa=0,(Ht&6)!==0)throw Error(r(331));var R=Ht;if(Ht|=4,pg(p.current),fg(p,p.current,S,s),Ht=R,fl(0,!1),he&&typeof he.onPostCommitFiberRoot=="function")try{he.onPostCommitFiberRoot(ue,p)}catch{}return!0}finally{H.p=f,z.T=l,Ng(t,n)}}function Og(t,n,s){n=Ni(s,n),n=Gf(t.stateNode,n,2),t=ps(t,n,2),t!==null&&(Ye(t,2),ga(t))}function qt(t,n,s){if(t.tag===3)Og(t,t,s);else for(;n!==null;){if(n.tag===3){Og(n,t,s);break}else if(n.tag===1){var l=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Ss===null||!Ss.has(l))){t=Ni(s,t),s=P0(2),l=ps(n,s,2),l!==null&&(I0(s,l,n,t),Ye(l,2),ga(l));break}}n=n.return}}function dd(t,n,s){var l=t.pingCache;if(l===null){l=t.pingCache=new gM;var f=new Set;l.set(n,f)}else f=l.get(n),f===void 0&&(f=new Set,l.set(n,f));f.has(s)||(ad=!0,f.add(s),t=MM.bind(null,t,n,s),n.then(t,t))}function MM(t,n,s){var l=t.pingCache;l!==null&&l.delete(n),t.pingedLanes|=t.suspendedLanes&s,t.warmLanes&=~s,en===t&&(bt&s)===s&&(vn===4||vn===3&&(bt&62914560)===bt&&300>Ut()-bc?(Ht&2)===0&&Kr(t,0):sd|=s,jr===bt&&(jr=0)),ga(t)}function Pg(t,n){n===0&&(n=ve()),t=Qs(t,n),t!==null&&(Ye(t,n),ga(t))}function yM(t){var n=t.memoizedState,s=0;n!==null&&(s=n.retryLane),Pg(t,s)}function EM(t,n){var s=0;switch(t.tag){case 31:case 13:var l=t.stateNode,f=t.memoizedState;f!==null&&(s=f.retryLane);break;case 19:l=t.stateNode;break;case 22:l=t.stateNode._retryCache;break;default:throw Error(r(314))}l!==null&&l.delete(n),Pg(t,s)}function bM(t,n){return $t(t,n)}var Lc=null,Jr=null,hd=!1,Nc=!1,pd=!1,Es=0;function ga(t){t!==Jr&&t.next===null&&(Jr===null?Lc=Jr=t:Jr=Jr.next=t),Nc=!0,hd||(hd=!0,AM())}function fl(t,n){if(!pd&&Nc){pd=!0;do for(var s=!1,l=Lc;l!==null;){if(t!==0){var f=l.pendingLanes;if(f===0)var p=0;else{var S=l.suspendedLanes,R=l.pingedLanes;p=(1<<31-Ve(42|t)+1)-1,p&=f&~(S&~R),p=p&201326741?p&201326741|1:p?p|2:0}p!==0&&(s=!0,zg(l,p))}else p=bt,p=ge(l,l===en?p:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(p&3)===0||we(l,p)||(s=!0,zg(l,p));l=l.next}while(s);pd=!1}}function TM(){Ig()}function Ig(){Nc=hd=!1;var t=0;Es!==0&&IM()&&(t=Es);for(var n=Ut(),s=null,l=Lc;l!==null;){var f=l.next,p=Fg(l,n);p===0?(l.next=null,s===null?Lc=f:s.next=f,f===null&&(Jr=s)):(s=l,(t!==0||(p&3)!==0)&&(Nc=!0)),l=f}On!==0&&On!==5||fl(t),Es!==0&&(Es=0)}function Fg(t,n){for(var s=t.suspendedLanes,l=t.pingedLanes,f=t.expirationTimes,p=t.pendingLanes&-62914561;0<p;){var S=31-Ve(p),R=1<<S,G=f[S];G===-1?((R&s)===0||(R&l)!==0)&&(f[S]=Fe(R,n)):G<=n&&(t.expiredLanes|=R),p&=~R}if(n=en,s=bt,s=ge(t,t===n?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l=t.callbackNode,s===0||t===n&&(Wt===2||Wt===9)||t.cancelPendingCommit!==null)return l!==null&&l!==null&&Nt(l),t.callbackNode=null,t.callbackPriority=0;if((s&3)===0||we(t,s)){if(n=s&-s,n===t.callbackPriority)return n;switch(l!==null&&Nt(l),rs(s)){case 2:case 8:s=E;break;case 32:s=J;break;case 268435456:s=de;break;default:s=J}return l=Bg.bind(null,t),s=$t(s,l),t.callbackPriority=n,t.callbackNode=s,n}return l!==null&&l!==null&&Nt(l),t.callbackPriority=2,t.callbackNode=null,2}function Bg(t,n){if(On!==0&&On!==5)return t.callbackNode=null,t.callbackPriority=0,null;var s=t.callbackNode;if(Dc()&&t.callbackNode!==s)return null;var l=bt;return l=ge(t,t===en?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l===0?null:(xg(t,l,n),Fg(t,Ut()),t.callbackNode!=null&&t.callbackNode===s?Bg.bind(null,t):null)}function zg(t,n){if(Dc())return null;xg(t,n,!0)}function AM(){BM(function(){(Ht&6)!==0?$t(P,TM):Ig()})}function md(){if(Es===0){var t=Fr;t===0&&(t=it,it<<=1,(it&261888)===0&&(it=256)),Es=t}return Es}function Hg(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:wa(""+t)}function Gg(t,n){var s=n.ownerDocument.createElement("input");return s.name=n.name,s.value=n.value,t.id&&s.setAttribute("form",t.id),n.parentNode.insertBefore(s,n),t=new FormData(t),s.parentNode.removeChild(s),t}function RM(t,n,s,l,f){if(n==="submit"&&s&&s.stateNode===f){var p=Hg((f[bn]||null).action),S=l.submitter;S&&(n=(n=S[bn]||null)?Hg(n.formAction):S.getAttribute("formAction"),n!==null&&(p=n,S=null));var R=new vi("action","action",null,l,f);t.push({event:R,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Es!==0){var G=S?Gg(f,S):new FormData(f);Pf(s,{pending:!0,data:G,method:f.method,action:p},null,G)}}else typeof p=="function"&&(R.preventDefault(),G=S?Gg(f,S):new FormData(f),Pf(s,{pending:!0,data:G,method:f.method,action:p},p,G))},currentTarget:f}]})}}for(var gd=0;gd<Qu.length;gd++){var _d=Qu[gd],CM=_d.toLowerCase(),wM=_d[0].toUpperCase()+_d.slice(1);Ki(CM,"on"+wM)}Ki(vm,"onAnimationEnd"),Ki(xm,"onAnimationIteration"),Ki(Sm,"onAnimationStart"),Ki("dblclick","onDoubleClick"),Ki("focusin","onFocus"),Ki("focusout","onBlur"),Ki(WS,"onTransitionRun"),Ki(qS,"onTransitionStart"),Ki(YS,"onTransitionCancel"),Ki(Mm,"onTransitionEnd"),$("onMouseEnter",["mouseout","mouseover"]),$("onMouseLeave",["mouseout","mouseover"]),$("onPointerEnter",["pointerout","pointerover"]),$("onPointerLeave",["pointerout","pointerover"]),V("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),V("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),V("onBeforeInput",["compositionend","keypress","textInput","paste"]),V("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),V("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),V("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var dl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),DM=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(dl));function Vg(t,n){n=(n&4)!==0;for(var s=0;s<t.length;s++){var l=t[s],f=l.event;l=l.listeners;e:{var p=void 0;if(n)for(var S=l.length-1;0<=S;S--){var R=l[S],G=R.instance,re=R.currentTarget;if(R=R.listener,G!==p&&f.isPropagationStopped())break e;p=R,f.currentTarget=re;try{p(f)}catch(_e){Yl(_e)}f.currentTarget=null,p=G}else for(S=0;S<l.length;S++){if(R=l[S],G=R.instance,re=R.currentTarget,R=R.listener,G!==p&&f.isPropagationStopped())break e;p=R,f.currentTarget=re;try{p(f)}catch(_e){Yl(_e)}f.currentTarget=null,p=G}}}}function Et(t,n){var s=n[sa];s===void 0&&(s=n[sa]=new Set);var l=t+"__bubble";s.has(l)||(kg(n,t,2,!1),s.add(l))}function vd(t,n,s){var l=0;n&&(l|=4),kg(s,t,l,n)}var Uc="_reactListening"+Math.random().toString(36).slice(2);function xd(t){if(!t[Uc]){t[Uc]=!0,Ze.forEach(function(s){s!=="selectionchange"&&(DM.has(s)||vd(s,!1,t),vd(s,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Uc]||(n[Uc]=!0,vd("selectionchange",!1,n))}}function kg(t,n,s,l){switch(v_(n)){case 2:var f=ay;break;case 8:f=sy;break;default:f=Od}s=f.bind(null,n,s,t),f=void 0,!Po||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(f=!0),l?f!==void 0?t.addEventListener(n,s,{capture:!0,passive:f}):t.addEventListener(n,s,!0):f!==void 0?t.addEventListener(n,s,{passive:f}):t.addEventListener(n,s,!1)}function Sd(t,n,s,l,f){var p=l;if((n&1)===0&&(n&2)===0&&l!==null)e:for(;;){if(l===null)return;var S=l.tag;if(S===3||S===4){var R=l.stateNode.containerInfo;if(R===f)break;if(S===4)for(S=l.return;S!==null;){var G=S.tag;if((G===3||G===4)&&S.stateNode.containerInfo===f)return;S=S.return}for(;R!==null;){if(S=Di(R),S===null)return;if(G=S.tag,G===5||G===6||G===26||G===27){l=p=S;continue e}R=R.parentNode}}l=l.return}qs(function(){var re=p,_e=Oo(s),Ee=[];e:{var le=ym.get(t);if(le!==void 0){var pe=vi,Ke=t;switch(t){case"keypress":if(Rr(s)===0)break e;case"keydown":case"keyup":pe=ES;break;case"focusin":Ke="focus",pe=Vu;break;case"focusout":Ke="blur",pe=Vu;break;case"beforeblur":case"afterblur":pe=Vu;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":pe=Na;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":pe=Wl;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":pe=AS;break;case vm:case xm:case Sm:pe=pS;break;case Mm:pe=CS;break;case"scroll":case"scrollend":pe=ua;break;case"wheel":pe=DS;break;case"copy":case"cut":case"paste":pe=gS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":pe=$p;break;case"toggle":case"beforetoggle":pe=NS}var ot=(n&4)!==0,Jt=!ot&&(t==="scroll"||t==="scrollend"),ee=ot?le!==null?le+"Capture":null:le;ot=[];for(var q=re,se;q!==null;){var Se=q;if(se=Se.stateNode,Se=Se.tag,Se!==5&&Se!==26&&Se!==27||se===null||ee===null||(Se=ca(q,ee),Se!=null&&ot.push(hl(q,Se,se))),Jt)break;q=q.return}0<ot.length&&(le=new pe(le,Ke,null,s,_e),Ee.push({event:le,listeners:ot}))}}if((n&7)===0){e:{if(le=t==="mouseover"||t==="pointerover",pe=t==="mouseout"||t==="pointerout",le&&s!==Xs&&(Ke=s.relatedTarget||s.fromElement)&&(Di(Ke)||Ke[Vn]))break e;if((pe||le)&&(le=_e.window===_e?_e:(le=_e.ownerDocument)?le.defaultView||le.parentWindow:window,pe?(Ke=s.relatedTarget||s.toElement,pe=re,Ke=Ke?Di(Ke):null,Ke!==null&&(Jt=c(Ke),ot=Ke.tag,Ke!==Jt||ot!==5&&ot!==27&&ot!==6)&&(Ke=null)):(pe=null,Ke=re),pe!==Ke)){if(ot=Na,Se="onMouseLeave",ee="onMouseEnter",q="mouse",(t==="pointerout"||t==="pointerover")&&(ot=$p,Se="onPointerLeave",ee="onPointerEnter",q="pointer"),Jt=pe==null?le:oa(pe),se=Ke==null?le:oa(Ke),le=new ot(Se,q+"leave",pe,s,_e),le.target=Jt,le.relatedTarget=se,Se=null,Di(_e)===re&&(ot=new ot(ee,q+"enter",Ke,s,_e),ot.target=se,ot.relatedTarget=Jt,Se=ot),Jt=Se,pe&&Ke)t:{for(ot=LM,ee=pe,q=Ke,se=0,Se=ee;Se;Se=ot(Se))se++;Se=0;for(var at=q;at;at=ot(at))Se++;for(;0<se-Se;)ee=ot(ee),se--;for(;0<Se-se;)q=ot(q),Se--;for(;se--;){if(ee===q||q!==null&&ee===q.alternate){ot=ee;break t}ee=ot(ee),q=ot(q)}ot=null}else ot=null;pe!==null&&Xg(Ee,le,pe,ot,!1),Ke!==null&&Jt!==null&&Xg(Ee,Jt,Ke,ot,!0)}}e:{if(le=re?oa(re):window,pe=le.nodeName&&le.nodeName.toLowerCase(),pe==="select"||pe==="input"&&le.type==="file")var Ot=om;else if(sm(le))if(lm)Ot=VS;else{Ot=HS;var et=zS}else pe=le.nodeName,!pe||pe.toLowerCase()!=="input"||le.type!=="checkbox"&&le.type!=="radio"?re&&zt(re.elementType)&&(Ot=om):Ot=GS;if(Ot&&(Ot=Ot(t,re))){rm(Ee,Ot,s,_e);break e}et&&et(t,le,re),t==="focusout"&&re&&le.type==="number"&&re.memoizedProps.value!=null&&vt(le,"number",le.value)}switch(et=re?oa(re):window,t){case"focusin":(sm(et)||et.contentEditable==="true")&&(wr=et,ju=re,Vo=null);break;case"focusout":Vo=ju=wr=null;break;case"mousedown":Zu=!0;break;case"contextmenu":case"mouseup":case"dragend":Zu=!1,gm(Ee,s,_e);break;case"selectionchange":if(XS)break;case"keydown":case"keyup":gm(Ee,s,_e)}var mt;if(Xu)e:{switch(t){case"compositionstart":var Tt="onCompositionStart";break e;case"compositionend":Tt="onCompositionEnd";break e;case"compositionupdate":Tt="onCompositionUpdate";break e}Tt=void 0}else Cr?im(t,s)&&(Tt="onCompositionEnd"):t==="keydown"&&s.keyCode===229&&(Tt="onCompositionStart");Tt&&(em&&s.locale!=="ko"&&(Cr||Tt!=="onCompositionStart"?Tt==="onCompositionEnd"&&Cr&&(mt=Xl()):(ji=_e,Ys="value"in ji?ji.value:ji.textContent,Cr=!0)),et=Oc(re,Tt),0<et.length&&(Tt=new Jp(Tt,t,null,s,_e),Ee.push({event:Tt,listeners:et}),mt?Tt.data=mt:(mt=am(s),mt!==null&&(Tt.data=mt)))),(mt=OS?PS(t,s):IS(t,s))&&(Tt=Oc(re,"onBeforeInput"),0<Tt.length&&(et=new Jp("onBeforeInput","beforeinput",null,s,_e),Ee.push({event:et,listeners:Tt}),et.data=mt)),RM(Ee,t,re,s,_e)}Vg(Ee,n)})}function hl(t,n,s){return{instance:t,listener:n,currentTarget:s}}function Oc(t,n){for(var s=n+"Capture",l=[];t!==null;){var f=t,p=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||p===null||(f=ca(t,s),f!=null&&l.unshift(hl(t,f,p)),f=ca(t,n),f!=null&&l.push(hl(t,f,p))),t.tag===3)return l;t=t.return}return[]}function LM(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Xg(t,n,s,l,f){for(var p=n._reactName,S=[];s!==null&&s!==l;){var R=s,G=R.alternate,re=R.stateNode;if(R=R.tag,G!==null&&G===l)break;R!==5&&R!==26&&R!==27||re===null||(G=re,f?(re=ca(s,p),re!=null&&S.unshift(hl(s,re,G))):f||(re=ca(s,p),re!=null&&S.push(hl(s,re,G)))),s=s.return}S.length!==0&&t.push({event:n,listeners:S})}var NM=/\r\n?/g,UM=/\u0000|\uFFFD/g;function Wg(t){return(typeof t=="string"?t:""+t).replace(NM,`
`).replace(UM,"")}function qg(t,n){return n=Wg(n),Wg(t)===n}function Qt(t,n,s,l,f,p){switch(s){case"children":typeof l=="string"?n==="body"||n==="textarea"&&l===""||gn(t,l):(typeof l=="number"||typeof l=="bigint")&&n!=="body"&&gn(t,""+l);break;case"className":He(t,"class",l);break;case"tabIndex":He(t,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":He(t,s,l);break;case"style":_i(t,l,p);break;case"data":if(n!=="object"){He(t,"data",l);break}case"src":case"href":if(l===""&&(n!=="a"||s!=="href")){t.removeAttribute(s);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(s);break}l=wa(""+l),t.setAttribute(s,l);break;case"action":case"formAction":if(typeof l=="function"){t.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof p=="function"&&(s==="formAction"?(n!=="input"&&Qt(t,n,"name",f.name,f,null),Qt(t,n,"formEncType",f.formEncType,f,null),Qt(t,n,"formMethod",f.formMethod,f,null),Qt(t,n,"formTarget",f.formTarget,f,null)):(Qt(t,n,"encType",f.encType,f,null),Qt(t,n,"method",f.method,f,null),Qt(t,n,"target",f.target,f,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(s);break}l=wa(""+l),t.setAttribute(s,l);break;case"onClick":l!=null&&(t.onclick=ii);break;case"onScroll":l!=null&&Et("scroll",t);break;case"onScrollEnd":l!=null&&Et("scrollend",t);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(s=l.__html,s!=null){if(f.children!=null)throw Error(r(60));t.innerHTML=s}}break;case"multiple":t.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":t.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){t.removeAttribute("xlink:href");break}s=wa(""+l),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,""+l):t.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,""):t.removeAttribute(s);break;case"capture":case"download":l===!0?t.setAttribute(s,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,l):t.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?t.setAttribute(s,l):t.removeAttribute(s);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?t.removeAttribute(s):t.setAttribute(s,l);break;case"popover":Et("beforetoggle",t),Et("toggle",t),Le(t,"popover",l);break;case"xlinkActuate":ze(t,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":ze(t,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":ze(t,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":ze(t,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":ze(t,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":ze(t,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":ze(t,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":ze(t,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":ze(t,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Le(t,"is",l);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=Qn.get(s)||s,Le(t,s,l))}}function Md(t,n,s,l,f,p){switch(s){case"style":_i(t,l,p);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(s=l.__html,s!=null){if(f.children!=null)throw Error(r(60));t.innerHTML=s}}break;case"children":typeof l=="string"?gn(t,l):(typeof l=="number"||typeof l=="bigint")&&gn(t,""+l);break;case"onScroll":l!=null&&Et("scroll",t);break;case"onScrollEnd":l!=null&&Et("scrollend",t);break;case"onClick":l!=null&&(t.onclick=ii);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!A.hasOwnProperty(s))e:{if(s[0]==="o"&&s[1]==="n"&&(f=s.endsWith("Capture"),n=s.slice(2,f?s.length-7:void 0),p=t[bn]||null,p=p!=null?p[s]:null,typeof p=="function"&&t.removeEventListener(n,p,f),typeof l=="function")){typeof p!="function"&&p!==null&&(s in t?t[s]=null:t.hasAttribute(s)&&t.removeAttribute(s)),t.addEventListener(n,l,f);break e}s in t?t[s]=l:l===!0?t.setAttribute(s,""):Le(t,s,l)}}}function qn(t,n,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Et("error",t),Et("load",t);var l=!1,f=!1,p;for(p in s)if(s.hasOwnProperty(p)){var S=s[p];if(S!=null)switch(p){case"src":l=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Qt(t,n,p,S,s,null)}}f&&Qt(t,n,"srcSet",s.srcSet,s,null),l&&Qt(t,n,"src",s.src,s,null);return;case"input":Et("invalid",t);var R=p=S=f=null,G=null,re=null;for(l in s)if(s.hasOwnProperty(l)){var _e=s[l];if(_e!=null)switch(l){case"name":f=_e;break;case"type":S=_e;break;case"checked":G=_e;break;case"defaultChecked":re=_e;break;case"value":p=_e;break;case"defaultValue":R=_e;break;case"children":case"dangerouslySetInnerHTML":if(_e!=null)throw Error(r(137,n));break;default:Qt(t,n,l,_e,s,null)}}Nn(t,p,R,G,re,S,f,!1);return;case"select":Et("invalid",t),l=S=p=null;for(f in s)if(s.hasOwnProperty(f)&&(R=s[f],R!=null))switch(f){case"value":p=R;break;case"defaultValue":S=R;break;case"multiple":l=R;default:Qt(t,n,f,R,s,null)}n=p,s=S,t.multiple=!!l,n!=null?mn(t,!!l,n,!1):s!=null&&mn(t,!!l,s,!0);return;case"textarea":Et("invalid",t),p=f=l=null;for(S in s)if(s.hasOwnProperty(S)&&(R=s[S],R!=null))switch(S){case"value":l=R;break;case"defaultValue":f=R;break;case"children":p=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(r(91));break;default:Qt(t,n,S,R,s,null)}Un(t,l,f,p);return;case"option":for(G in s)if(s.hasOwnProperty(G)&&(l=s[G],l!=null))switch(G){case"selected":t.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Qt(t,n,G,l,s,null)}return;case"dialog":Et("beforetoggle",t),Et("toggle",t),Et("cancel",t),Et("close",t);break;case"iframe":case"object":Et("load",t);break;case"video":case"audio":for(l=0;l<dl.length;l++)Et(dl[l],t);break;case"image":Et("error",t),Et("load",t);break;case"details":Et("toggle",t);break;case"embed":case"source":case"link":Et("error",t),Et("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(re in s)if(s.hasOwnProperty(re)&&(l=s[re],l!=null))switch(re){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Qt(t,n,re,l,s,null)}return;default:if(zt(n)){for(_e in s)s.hasOwnProperty(_e)&&(l=s[_e],l!==void 0&&Md(t,n,_e,l,s,void 0));return}}for(R in s)s.hasOwnProperty(R)&&(l=s[R],l!=null&&Qt(t,n,R,l,s,null))}function OM(t,n,s,l){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,p=null,S=null,R=null,G=null,re=null,_e=null;for(pe in s){var Ee=s[pe];if(s.hasOwnProperty(pe)&&Ee!=null)switch(pe){case"checked":break;case"value":break;case"defaultValue":G=Ee;default:l.hasOwnProperty(pe)||Qt(t,n,pe,null,l,Ee)}}for(var le in l){var pe=l[le];if(Ee=s[le],l.hasOwnProperty(le)&&(pe!=null||Ee!=null))switch(le){case"type":p=pe;break;case"name":f=pe;break;case"checked":re=pe;break;case"defaultChecked":_e=pe;break;case"value":S=pe;break;case"defaultValue":R=pe;break;case"children":case"dangerouslySetInnerHTML":if(pe!=null)throw Error(r(137,n));break;default:pe!==Ee&&Qt(t,n,le,pe,l,Ee)}}ke(t,S,R,G,re,_e,p,f);return;case"select":pe=S=R=le=null;for(p in s)if(G=s[p],s.hasOwnProperty(p)&&G!=null)switch(p){case"value":break;case"multiple":pe=G;default:l.hasOwnProperty(p)||Qt(t,n,p,null,l,G)}for(f in l)if(p=l[f],G=s[f],l.hasOwnProperty(f)&&(p!=null||G!=null))switch(f){case"value":le=p;break;case"defaultValue":R=p;break;case"multiple":S=p;default:p!==G&&Qt(t,n,f,p,l,G)}n=R,s=S,l=pe,le!=null?mn(t,!!s,le,!1):!!l!=!!s&&(n!=null?mn(t,!!s,n,!0):mn(t,!!s,s?[]:"",!1));return;case"textarea":pe=le=null;for(R in s)if(f=s[R],s.hasOwnProperty(R)&&f!=null&&!l.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:Qt(t,n,R,null,l,f)}for(S in l)if(f=l[S],p=s[S],l.hasOwnProperty(S)&&(f!=null||p!=null))switch(S){case"value":le=f;break;case"defaultValue":pe=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(r(91));break;default:f!==p&&Qt(t,n,S,f,l,p)}Kn(t,le,pe);return;case"option":for(var Ke in s)if(le=s[Ke],s.hasOwnProperty(Ke)&&le!=null&&!l.hasOwnProperty(Ke))switch(Ke){case"selected":t.selected=!1;break;default:Qt(t,n,Ke,null,l,le)}for(G in l)if(le=l[G],pe=s[G],l.hasOwnProperty(G)&&le!==pe&&(le!=null||pe!=null))switch(G){case"selected":t.selected=le&&typeof le!="function"&&typeof le!="symbol";break;default:Qt(t,n,G,le,l,pe)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ot in s)le=s[ot],s.hasOwnProperty(ot)&&le!=null&&!l.hasOwnProperty(ot)&&Qt(t,n,ot,null,l,le);for(re in l)if(le=l[re],pe=s[re],l.hasOwnProperty(re)&&le!==pe&&(le!=null||pe!=null))switch(re){case"children":case"dangerouslySetInnerHTML":if(le!=null)throw Error(r(137,n));break;default:Qt(t,n,re,le,l,pe)}return;default:if(zt(n)){for(var Jt in s)le=s[Jt],s.hasOwnProperty(Jt)&&le!==void 0&&!l.hasOwnProperty(Jt)&&Md(t,n,Jt,void 0,l,le);for(_e in l)le=l[_e],pe=s[_e],!l.hasOwnProperty(_e)||le===pe||le===void 0&&pe===void 0||Md(t,n,_e,le,l,pe);return}}for(var ee in s)le=s[ee],s.hasOwnProperty(ee)&&le!=null&&!l.hasOwnProperty(ee)&&Qt(t,n,ee,null,l,le);for(Ee in l)le=l[Ee],pe=s[Ee],!l.hasOwnProperty(Ee)||le===pe||le==null&&pe==null||Qt(t,n,Ee,le,l,pe)}function Yg(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function PM(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,s=performance.getEntriesByType("resource"),l=0;l<s.length;l++){var f=s[l],p=f.transferSize,S=f.initiatorType,R=f.duration;if(p&&R&&Yg(S)){for(S=0,R=f.responseEnd,l+=1;l<s.length;l++){var G=s[l],re=G.startTime;if(re>R)break;var _e=G.transferSize,Ee=G.initiatorType;_e&&Yg(Ee)&&(G=G.responseEnd,S+=_e*(G<R?1:(R-re)/(G-re)))}if(--l,n+=8*(p+S)/(f.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var yd=null,Ed=null;function Pc(t){return t.nodeType===9?t:t.ownerDocument}function jg(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Zg(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function bd(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Td=null;function IM(){var t=window.event;return t&&t.type==="popstate"?t===Td?!1:(Td=t,!0):(Td=null,!1)}var Kg=typeof setTimeout=="function"?setTimeout:void 0,FM=typeof clearTimeout=="function"?clearTimeout:void 0,Qg=typeof Promise=="function"?Promise:void 0,BM=typeof queueMicrotask=="function"?queueMicrotask:typeof Qg<"u"?function(t){return Qg.resolve(null).then(t).catch(zM)}:Kg;function zM(t){setTimeout(function(){throw t})}function bs(t){return t==="head"}function Jg(t,n){var s=n,l=0;do{var f=s.nextSibling;if(t.removeChild(s),f&&f.nodeType===8)if(s=f.data,s==="/$"||s==="/&"){if(l===0){t.removeChild(f),no(n);return}l--}else if(s==="$"||s==="$?"||s==="$~"||s==="$!"||s==="&")l++;else if(s==="html")pl(t.ownerDocument.documentElement);else if(s==="head"){s=t.ownerDocument.head,pl(s);for(var p=s.firstChild;p;){var S=p.nextSibling,R=p.nodeName;p[Wi]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&p.rel.toLowerCase()==="stylesheet"||s.removeChild(p),p=S}}else s==="body"&&pl(t.ownerDocument.body);s=f}while(s);no(n)}function $g(t,n){var s=t;t=0;do{var l=s.nextSibling;if(s.nodeType===1?n?(s._stashedDisplay=s.style.display,s.style.display="none"):(s.style.display=s._stashedDisplay||"",s.getAttribute("style")===""&&s.removeAttribute("style")):s.nodeType===3&&(n?(s._stashedText=s.nodeValue,s.nodeValue=""):s.nodeValue=s._stashedText||""),l&&l.nodeType===8)if(s=l.data,s==="/$"){if(t===0)break;t--}else s!=="$"&&s!=="$?"&&s!=="$~"&&s!=="$!"||t++;s=l}while(s)}function Ad(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var s=n;switch(n=n.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":Ad(s),qi(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}t.removeChild(s)}}function HM(t,n,s,l){for(;t.nodeType===1;){var f=s;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!l&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(l){if(!t[Wi])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(p=t.getAttribute("rel"),p==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(p!==f.rel||t.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||t.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||t.getAttribute("title")!==(f.title==null?null:f.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(p=t.getAttribute("src"),(p!==(f.src==null?null:f.src)||t.getAttribute("type")!==(f.type==null?null:f.type)||t.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&p&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var p=f.name==null?null:""+f.name;if(f.type==="hidden"&&t.getAttribute("name")===p)return t}else return t;if(t=Fi(t.nextSibling),t===null)break}return null}function GM(t,n,s){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!s||(t=Fi(t.nextSibling),t===null))return null;return t}function e_(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=Fi(t.nextSibling),t===null))return null;return t}function Rd(t){return t.data==="$?"||t.data==="$~"}function Cd(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function VM(t,n){var s=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||s.readyState!=="loading")n();else{var l=function(){n(),s.removeEventListener("DOMContentLoaded",l)};s.addEventListener("DOMContentLoaded",l),t._reactRetry=l}}function Fi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var wd=null;function t_(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var s=t.data;if(s==="/$"||s==="/&"){if(n===0)return Fi(t.nextSibling);n--}else s!=="$"&&s!=="$!"&&s!=="$?"&&s!=="$~"&&s!=="&"||n++}t=t.nextSibling}return null}function n_(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var s=t.data;if(s==="$"||s==="$!"||s==="$?"||s==="$~"||s==="&"){if(n===0)return t;n--}else s!=="/$"&&s!=="/&"||n++}t=t.previousSibling}return null}function i_(t,n,s){switch(n=Pc(s),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function pl(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);qi(t)}var Bi=new Map,a_=new Set;function Ic(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Ya=H.d;H.d={f:kM,r:XM,D:WM,C:qM,L:YM,m:jM,X:KM,S:ZM,M:QM};function kM(){var t=Ya.f(),n=Rc();return t||n}function XM(t){var n=li(t);n!==null&&n.tag===5&&n.type==="form"?M0(n):Ya.r(t)}var $r=typeof document>"u"?null:document;function s_(t,n,s){var l=$r;if(l&&typeof n=="string"&&n){var f=Dt(n);f='link[rel="'+t+'"][href="'+f+'"]',typeof s=="string"&&(f+='[crossorigin="'+s+'"]'),a_.has(f)||(a_.add(f),t={rel:t,crossOrigin:s,href:n},l.querySelector(f)===null&&(n=l.createElement("link"),qn(n,"link",t),Ae(n),l.head.appendChild(n)))}}function WM(t){Ya.D(t),s_("dns-prefetch",t,null)}function qM(t,n){Ya.C(t,n),s_("preconnect",t,n)}function YM(t,n,s){Ya.L(t,n,s);var l=$r;if(l&&t&&n){var f='link[rel="preload"][as="'+Dt(n)+'"]';n==="image"&&s&&s.imageSrcSet?(f+='[imagesrcset="'+Dt(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(f+='[imagesizes="'+Dt(s.imageSizes)+'"]')):f+='[href="'+Dt(t)+'"]';var p=f;switch(n){case"style":p=eo(t);break;case"script":p=to(t)}Bi.has(p)||(t=_({rel:"preload",href:n==="image"&&s&&s.imageSrcSet?void 0:t,as:n},s),Bi.set(p,t),l.querySelector(f)!==null||n==="style"&&l.querySelector(ml(p))||n==="script"&&l.querySelector(gl(p))||(n=l.createElement("link"),qn(n,"link",t),Ae(n),l.head.appendChild(n)))}}function jM(t,n){Ya.m(t,n);var s=$r;if(s&&t){var l=n&&typeof n.as=="string"?n.as:"script",f='link[rel="modulepreload"][as="'+Dt(l)+'"][href="'+Dt(t)+'"]',p=f;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":p=to(t)}if(!Bi.has(p)&&(t=_({rel:"modulepreload",href:t},n),Bi.set(p,t),s.querySelector(f)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(gl(p)))return}l=s.createElement("link"),qn(l,"link",t),Ae(l),s.head.appendChild(l)}}}function ZM(t,n,s){Ya.S(t,n,s);var l=$r;if(l&&t){var f=Me(l).hoistableStyles,p=eo(t);n=n||"default";var S=f.get(p);if(!S){var R={loading:0,preload:null};if(S=l.querySelector(ml(p)))R.loading=5;else{t=_({rel:"stylesheet",href:t,"data-precedence":n},s),(s=Bi.get(p))&&Dd(t,s);var G=S=l.createElement("link");Ae(G),qn(G,"link",t),G._p=new Promise(function(re,_e){G.onload=re,G.onerror=_e}),G.addEventListener("load",function(){R.loading|=1}),G.addEventListener("error",function(){R.loading|=2}),R.loading|=4,Fc(S,n,l)}S={type:"stylesheet",instance:S,count:1,state:R},f.set(p,S)}}}function KM(t,n){Ya.X(t,n);var s=$r;if(s&&t){var l=Me(s).hoistableScripts,f=to(t),p=l.get(f);p||(p=s.querySelector(gl(f)),p||(t=_({src:t,async:!0},n),(n=Bi.get(f))&&Ld(t,n),p=s.createElement("script"),Ae(p),qn(p,"link",t),s.head.appendChild(p)),p={type:"script",instance:p,count:1,state:null},l.set(f,p))}}function QM(t,n){Ya.M(t,n);var s=$r;if(s&&t){var l=Me(s).hoistableScripts,f=to(t),p=l.get(f);p||(p=s.querySelector(gl(f)),p||(t=_({src:t,async:!0,type:"module"},n),(n=Bi.get(f))&&Ld(t,n),p=s.createElement("script"),Ae(p),qn(p,"link",t),s.head.appendChild(p)),p={type:"script",instance:p,count:1,state:null},l.set(f,p))}}function r_(t,n,s,l){var f=(f=oe.current)?Ic(f):null;if(!f)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(n=eo(s.href),s=Me(f).hoistableStyles,l=s.get(n),l||(l={type:"style",instance:null,count:0,state:null},s.set(n,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){t=eo(s.href);var p=Me(f).hoistableStyles,S=p.get(t);if(S||(f=f.ownerDocument||f,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},p.set(t,S),(p=f.querySelector(ml(t)))&&!p._p&&(S.instance=p,S.state.loading=5),Bi.has(t)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},Bi.set(t,s),p||JM(f,t,s,S.state))),n&&l===null)throw Error(r(528,""));return S}if(n&&l!==null)throw Error(r(529,""));return null;case"script":return n=s.async,s=s.src,typeof s=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=to(s),s=Me(f).hoistableScripts,l=s.get(n),l||(l={type:"script",instance:null,count:0,state:null},s.set(n,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function eo(t){return'href="'+Dt(t)+'"'}function ml(t){return'link[rel="stylesheet"]['+t+"]"}function o_(t){return _({},t,{"data-precedence":t.precedence,precedence:null})}function JM(t,n,s,l){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?l.loading=1:(n=t.createElement("link"),l.preload=n,n.addEventListener("load",function(){return l.loading|=1}),n.addEventListener("error",function(){return l.loading|=2}),qn(n,"link",s),Ae(n),t.head.appendChild(n))}function to(t){return'[src="'+Dt(t)+'"]'}function gl(t){return"script[async]"+t}function l_(t,n,s){if(n.count++,n.instance===null)switch(n.type){case"style":var l=t.querySelector('style[data-href~="'+Dt(s.href)+'"]');if(l)return n.instance=l,Ae(l),l;var f=_({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return l=(t.ownerDocument||t).createElement("style"),Ae(l),qn(l,"style",f),Fc(l,s.precedence,t),n.instance=l;case"stylesheet":f=eo(s.href);var p=t.querySelector(ml(f));if(p)return n.state.loading|=4,n.instance=p,Ae(p),p;l=o_(s),(f=Bi.get(f))&&Dd(l,f),p=(t.ownerDocument||t).createElement("link"),Ae(p);var S=p;return S._p=new Promise(function(R,G){S.onload=R,S.onerror=G}),qn(p,"link",l),n.state.loading|=4,Fc(p,s.precedence,t),n.instance=p;case"script":return p=to(s.src),(f=t.querySelector(gl(p)))?(n.instance=f,Ae(f),f):(l=s,(f=Bi.get(p))&&(l=_({},s),Ld(l,f)),t=t.ownerDocument||t,f=t.createElement("script"),Ae(f),qn(f,"link",l),t.head.appendChild(f),n.instance=f);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(l=n.instance,n.state.loading|=4,Fc(l,s.precedence,t));return n.instance}function Fc(t,n,s){for(var l=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=l.length?l[l.length-1]:null,p=f,S=0;S<l.length;S++){var R=l[S];if(R.dataset.precedence===n)p=R;else if(p!==f)break}p?p.parentNode.insertBefore(t,p.nextSibling):(n=s.nodeType===9?s.head:s,n.insertBefore(t,n.firstChild))}function Dd(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Ld(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Bc=null;function c_(t,n,s){if(Bc===null){var l=new Map,f=Bc=new Map;f.set(s,l)}else f=Bc,l=f.get(s),l||(l=new Map,f.set(s,l));if(l.has(t))return l;for(l.set(t,null),s=s.getElementsByTagName(t),f=0;f<s.length;f++){var p=s[f];if(!(p[Wi]||p[on]||t==="link"&&p.getAttribute("rel")==="stylesheet")&&p.namespaceURI!=="http://www.w3.org/2000/svg"){var S=p.getAttribute(n)||"";S=t+S;var R=l.get(S);R?R.push(p):l.set(S,[p])}}return l}function u_(t,n,s){t=t.ownerDocument||t,t.head.insertBefore(s,n==="title"?t.querySelector("head > title"):null)}function $M(t,n,s){if(s===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function f_(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function ey(t,n,s,l){if(s.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(s.state.loading&4)===0){if(s.instance===null){var f=eo(l.href),p=n.querySelector(ml(f));if(p){n=p._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=zc.bind(t),n.then(t,t)),s.state.loading|=4,s.instance=p,Ae(p);return}p=n.ownerDocument||n,l=o_(l),(f=Bi.get(f))&&Dd(l,f),p=p.createElement("link"),Ae(p);var S=p;S._p=new Promise(function(R,G){S.onload=R,S.onerror=G}),qn(p,"link",l),s.instance=p}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(s,n),(n=s.state.preload)&&(s.state.loading&3)===0&&(t.count++,s=zc.bind(t),n.addEventListener("load",s),n.addEventListener("error",s))}}var Nd=0;function ty(t,n){return t.stylesheets&&t.count===0&&Gc(t,t.stylesheets),0<t.count||0<t.imgCount?function(s){var l=setTimeout(function(){if(t.stylesheets&&Gc(t,t.stylesheets),t.unsuspend){var p=t.unsuspend;t.unsuspend=null,p()}},6e4+n);0<t.imgBytes&&Nd===0&&(Nd=62500*PM());var f=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Gc(t,t.stylesheets),t.unsuspend)){var p=t.unsuspend;t.unsuspend=null,p()}},(t.imgBytes>Nd?50:800)+n);return t.unsuspend=s,function(){t.unsuspend=null,clearTimeout(l),clearTimeout(f)}}:null}function zc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Gc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Hc=null;function Gc(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Hc=new Map,n.forEach(ny,t),Hc=null,zc.call(t))}function ny(t,n){if(!(n.state.loading&4)){var s=Hc.get(t);if(s)var l=s.get(null);else{s=new Map,Hc.set(t,s);for(var f=t.querySelectorAll("link[data-precedence],style[data-precedence]"),p=0;p<f.length;p++){var S=f[p];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(s.set(S.dataset.precedence,S),l=S)}l&&s.set(null,l)}f=n.instance,S=f.getAttribute("data-precedence"),p=s.get(S)||l,p===l&&s.set(null,f),s.set(S,f),this.count++,l=zc.bind(this),f.addEventListener("load",l),f.addEventListener("error",l),p?p.parentNode.insertBefore(f,p.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(f,t.firstChild)),n.state.loading|=4}}var _l={$$typeof:B,Provider:null,Consumer:null,_currentValue:Q,_currentValue2:Q,_threadCount:0};function iy(t,n,s,l,f,p,S,R,G){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Qe(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Qe(0),this.hiddenUpdates=Qe(null),this.identifierPrefix=l,this.onUncaughtError=f,this.onCaughtError=p,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=G,this.incompleteTransitions=new Map}function d_(t,n,s,l,f,p,S,R,G,re,_e,Ee){return t=new iy(t,n,s,S,G,re,_e,Ee,R),n=1,p===!0&&(n|=24),p=Si(3,null,null,n),t.current=p,p.stateNode=t,n=ff(),n.refCount++,t.pooledCache=n,n.refCount++,p.memoizedState={element:l,isDehydrated:s,cache:n},mf(p),t}function h_(t){return t?(t=Nr,t):Nr}function p_(t,n,s,l,f,p){f=h_(f),l.context===null?l.context=f:l.pendingContext=f,l=hs(n),l.payload={element:s},p=p===void 0?null:p,p!==null&&(l.callback=p),s=ps(t,l,n),s!==null&&(hi(s,t,n),Zo(s,t,n))}function m_(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var s=t.retryLane;t.retryLane=s!==0&&s<n?s:n}}function Ud(t,n){m_(t,n),(t=t.alternate)&&m_(t,n)}function g_(t){if(t.tag===13||t.tag===31){var n=Qs(t,67108864);n!==null&&hi(n,t,67108864),Ud(t,67108864)}}function __(t){if(t.tag===13||t.tag===31){var n=Ti();n=Ra(n);var s=Qs(t,n);s!==null&&hi(s,t,n),Ud(t,n)}}var Vc=!0;function ay(t,n,s,l){var f=z.T;z.T=null;var p=H.p;try{H.p=2,Od(t,n,s,l)}finally{H.p=p,z.T=f}}function sy(t,n,s,l){var f=z.T;z.T=null;var p=H.p;try{H.p=8,Od(t,n,s,l)}finally{H.p=p,z.T=f}}function Od(t,n,s,l){if(Vc){var f=Pd(l);if(f===null)Sd(t,n,l,kc,s),x_(t,l);else if(oy(f,t,n,s,l))l.stopPropagation();else if(x_(t,l),n&4&&-1<ry.indexOf(t)){for(;f!==null;){var p=li(f);if(p!==null)switch(p.tag){case 3:if(p=p.stateNode,p.current.memoizedState.isDehydrated){var S=Ne(p.pendingLanes);if(S!==0){var R=p;for(R.pendingLanes|=2,R.entangledLanes|=2;S;){var G=1<<31-Ve(S);R.entanglements[1]|=G,S&=~G}ga(p),(Ht&6)===0&&(Tc=Ut()+500,fl(0))}}break;case 31:case 13:R=Qs(p,2),R!==null&&hi(R,p,2),Rc(),Ud(p,2)}if(p=Pd(l),p===null&&Sd(t,n,l,kc,s),p===f)break;f=p}f!==null&&l.stopPropagation()}else Sd(t,n,l,null,s)}}function Pd(t){return t=Oo(t),Id(t)}var kc=null;function Id(t){if(kc=null,t=Di(t),t!==null){var n=c(t);if(n===null)t=null;else{var s=n.tag;if(s===13){if(t=u(n),t!==null)return t;t=null}else if(s===31){if(t=h(n),t!==null)return t;t=null}else if(s===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return kc=t,null}function v_(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ct()){case P:return 2;case E:return 8;case J:case ne:return 32;case de:return 268435456;default:return 32}default:return 32}}var Fd=!1,Ts=null,As=null,Rs=null,vl=new Map,xl=new Map,Cs=[],ry="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function x_(t,n){switch(t){case"focusin":case"focusout":Ts=null;break;case"dragenter":case"dragleave":As=null;break;case"mouseover":case"mouseout":Rs=null;break;case"pointerover":case"pointerout":vl.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":xl.delete(n.pointerId)}}function Sl(t,n,s,l,f,p){return t===null||t.nativeEvent!==p?(t={blockedOn:n,domEventName:s,eventSystemFlags:l,nativeEvent:p,targetContainers:[f]},n!==null&&(n=li(n),n!==null&&g_(n)),t):(t.eventSystemFlags|=l,n=t.targetContainers,f!==null&&n.indexOf(f)===-1&&n.push(f),t)}function oy(t,n,s,l,f){switch(n){case"focusin":return Ts=Sl(Ts,t,n,s,l,f),!0;case"dragenter":return As=Sl(As,t,n,s,l,f),!0;case"mouseover":return Rs=Sl(Rs,t,n,s,l,f),!0;case"pointerover":var p=f.pointerId;return vl.set(p,Sl(vl.get(p)||null,t,n,s,l,f)),!0;case"gotpointercapture":return p=f.pointerId,xl.set(p,Sl(xl.get(p)||null,t,n,s,l,f)),!0}return!1}function S_(t){var n=Di(t.target);if(n!==null){var s=c(n);if(s!==null){if(n=s.tag,n===13){if(n=u(s),n!==null){t.blockedOn=n,Ca(t.priority,function(){__(s)});return}}else if(n===31){if(n=h(s),n!==null){t.blockedOn=n,Ca(t.priority,function(){__(s)});return}}else if(n===3&&s.stateNode.current.memoizedState.isDehydrated){t.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Xc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var s=Pd(t.nativeEvent);if(s===null){s=t.nativeEvent;var l=new s.constructor(s.type,s);Xs=l,s.target.dispatchEvent(l),Xs=null}else return n=li(s),n!==null&&g_(n),t.blockedOn=s,!1;n.shift()}return!0}function M_(t,n,s){Xc(t)&&s.delete(n)}function ly(){Fd=!1,Ts!==null&&Xc(Ts)&&(Ts=null),As!==null&&Xc(As)&&(As=null),Rs!==null&&Xc(Rs)&&(Rs=null),vl.forEach(M_),xl.forEach(M_)}function Wc(t,n){t.blockedOn===n&&(t.blockedOn=null,Fd||(Fd=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,ly)))}var qc=null;function y_(t){qc!==t&&(qc=t,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){qc===t&&(qc=null);for(var n=0;n<t.length;n+=3){var s=t[n],l=t[n+1],f=t[n+2];if(typeof l!="function"){if(Id(l||s)===null)continue;break}var p=li(s);p!==null&&(t.splice(n,3),n-=3,Pf(p,{pending:!0,data:f,method:s.method,action:l},l,f))}}))}function no(t){function n(G){return Wc(G,t)}Ts!==null&&Wc(Ts,t),As!==null&&Wc(As,t),Rs!==null&&Wc(Rs,t),vl.forEach(n),xl.forEach(n);for(var s=0;s<Cs.length;s++){var l=Cs[s];l.blockedOn===t&&(l.blockedOn=null)}for(;0<Cs.length&&(s=Cs[0],s.blockedOn===null);)S_(s),s.blockedOn===null&&Cs.shift();if(s=(t.ownerDocument||t).$$reactFormReplay,s!=null)for(l=0;l<s.length;l+=3){var f=s[l],p=s[l+1],S=f[bn]||null;if(typeof p=="function")S||y_(s);else if(S){var R=null;if(p&&p.hasAttribute("formAction")){if(f=p,S=p[bn]||null)R=S.formAction;else if(Id(f)!==null)continue}else R=S.action;typeof R=="function"?s[l+1]=R:(s.splice(l,3),l-=3),y_(s)}}}function E_(){function t(p){p.canIntercept&&p.info==="react-transition"&&p.intercept({handler:function(){return new Promise(function(S){return f=S})},focusReset:"manual",scroll:"manual"})}function n(){f!==null&&(f(),f=null),l||setTimeout(s,20)}function s(){if(!l&&!navigation.transition){var p=navigation.currentEntry;p&&p.url!=null&&navigation.navigate(p.url,{state:p.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,f=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(s,100),function(){l=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),f!==null&&(f(),f=null)}}}function Bd(t){this._internalRoot=t}Yc.prototype.render=Bd.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var s=n.current,l=Ti();p_(s,l,t,n,null,null)},Yc.prototype.unmount=Bd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;p_(t.current,2,null,t,null,null),Rc(),n[Vn]=null}};function Yc(t){this._internalRoot=t}Yc.prototype.unstable_scheduleHydration=function(t){if(t){var n=os();t={blockedOn:null,target:t,priority:n};for(var s=0;s<Cs.length&&n!==0&&n<Cs[s].priority;s++);Cs.splice(s,0,t),s===0&&S_(t)}};var b_=e.version;if(b_!=="19.2.7")throw Error(r(527,b_,"19.2.7"));H.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=d(n),t=t!==null?g(t):null,t=t===null?null:t.stateNode,t};var cy={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var jc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!jc.isDisabled&&jc.supportsFiber)try{ue=jc.inject(cy),he=jc}catch{}}return yl.createRoot=function(t,n){if(!o(t))throw Error(r(299));var s=!1,l="",f=L0,p=N0,S=U0;return n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onUncaughtError!==void 0&&(f=n.onUncaughtError),n.onCaughtError!==void 0&&(p=n.onCaughtError),n.onRecoverableError!==void 0&&(S=n.onRecoverableError)),n=d_(t,1,!1,null,null,s,l,null,f,p,S,E_),t[Vn]=n.current,xd(t),new Bd(n)},yl.hydrateRoot=function(t,n,s){if(!o(t))throw Error(r(299));var l=!1,f="",p=L0,S=N0,R=U0,G=null;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(f=s.identifierPrefix),s.onUncaughtError!==void 0&&(p=s.onUncaughtError),s.onCaughtError!==void 0&&(S=s.onCaughtError),s.onRecoverableError!==void 0&&(R=s.onRecoverableError),s.formState!==void 0&&(G=s.formState)),n=d_(t,1,!0,n,s??null,l,f,G,p,S,R,E_),n.context=h_(null),s=n.current,l=Ti(),l=Ra(l),f=hs(l),f.callback=null,ps(s,f,l),s=l,n.current.lanes=s,Ye(n,s),ga(n),t[Vn]=n.current,xd(t),new Yc(n)},yl.version="19.2.7",yl}var O_;function vy(){if(O_)return Gd.exports;O_=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(e){console.error(e)}}return a(),Gd.exports=_y(),Gd.exports}var xy=vy();const Sy={BASE_URL:"/",DEV:!1,MODE:"production",PROD:!0,SSR:!1,VITE_APP_URL:"https://demo.morpheum.io",VITE_DISCORD_URL:"",VITE_DOCS_URL:"",VITE_MANIFESTO_URL:"",VITE_TUTORIAL_VIDEO_URL:"",VITE_X_URL:""},io=(a,e="#")=>{var i;return((i=Sy[a])==null?void 0:i.trim())||e},Ln={app:io("VITE_APP_URL","https://demo.morpheum.io"),docs:io("VITE_DOCS_URL"),manifesto:io("VITE_MANIFESTO_URL"),discord:io("VITE_DISCORD_URL"),x:io("VITE_X_URL"),tutorialVideo:io("VITE_TUTORIAL_VIDEO_URL",""),explore:"#explore",exploreAgents:"#explore-agents",exploreVaults:"#explore-vaults"},vu=[{id:"demo",label:"Demo",href:"#demo"},{id:"personas",label:"Personas",href:"#personas"},{id:"how",label:"How it works",href:"#how"},{id:"explore",label:"Explore",href:"#explore"}],Wd={text:"> The agent-native L1 DEX, for faster and safer trades.",href:Ln.manifesto},Ds={eyebrow:{label:"A manifesto for verifiable agents",href:Ln.manifesto},headline:["Agents you can trust.","Assets you can trade."],primaryCta:{label:"Launch Morpheum",href:Ln.app},secondaryCta:{label:"Explore agents",href:Ln.explore}},P_={risks:[{risk:"Speculation without underwriting",failure:"Buy random agent tokens on narrative alone.",solveLabel:"Proof",solve:"Underwrite on receipts, reputation, and risk scores — before you commit a dollar."},{risk:"Automation without capital controls",failure:"Run an agent with unbounded capital and no kill switch.",solveLabel:"Controls",solve:"Set Risk Level, approve gated moves, and isolate each strategy in its own bucket."}],close:"The Agent-native L1 DEX — faster, safer trades."},I_=[{label:"MAEX indices",status:"LIVE",live:!0},{label:"Agents",status:"REPUTATION / SHARPE / ROI"},{label:"Risk level",status:"MANUAL / HITL / HANDS-OFF"},{label:"Agent notifications",status:"WANT-TO / ACTION / PAUSED / REJECTED"},{label:"Copy buckets",status:"LIVE",live:!0},{label:"Buckets",status:"RISK-ISOLATED"},{label:"Vaults",status:"ONCHAIN"},{label:"Staking",status:"LIVE",live:!0}],Oh={kicker:"Product tour",videoCaption:"See an agent discovered, copied, supervised, and isolated in ~60s.",verbs:[{verb:"Discover",description:"Agents & indices — proof first."},{verb:"Copy",description:"Mirror a proven agent into your bucket."},{verb:"Supervise",description:"Approve gated moves on HITL."},{verb:"Isolate",description:"Risk contained in its own bucket."}]},qd={kicker:"Choose your path",title:"Become part of the agent economy",items:[{title:"Become an Operator",weight:"major",steps:["Mint an agent and set its mandate.","Choose a Risk Level: Manual · HITL · Hands-off.","Build a proven track record investors can underwrite."],cta:{label:"Run an agent",href:Ln.exploreAgents},meta:{kind:"identity",name:"SharpeShark",tx:"0xa4c2…8f1d",hash:"did:morph:0x7a3f…c91e",chain:"Morpheum · hop 0",verified:"yes",rep:"72",portable:"yes",next:"minting mandate…"}},{title:"Become a Copy Trader",weight:"major",steps:["Screen agents on real proof — receipts and risk scores.","Mirror the best into your own dedicated bucket.","Track PnL and rebalance anytime."],cta:{label:"Start copying",href:Ln.exploreAgents},meta:{kind:"chain",label:"on-chain transactions",chain:"Morpheum · hop 0",steps:[{op:"mint agent",tx:"0xa4c2…8f1d",status:"settled"},{op:"mint bucket",tx:"0xb91e…4c02",status:"settled"},{op:"fund transfer",tx:"0xe81a…3b70",status:"settled",from:"SortinoSloth",to:"your bucket",asset:"USDC",amt:"2500"}]}},{title:"Provide Capital",weight:"light",steps:["Deposit into a vault or bucket.","Stake to earn.","Withdraw on your terms."],cta:{label:"Explore vaults",href:Ln.exploreVaults},meta:{kind:"community",label:"on-chain transaction",tx:"0x12af…9e44",from:"you",to:"Vault-Alpha",asset:"USDC",amt:"10000",chain:"Morpheum · hop 0",status:"queued"}}]},Ls={kicker:"How it works",title:"Discover → Copy → Supervise → Isolate",outcome:"A proven, risk-isolated capital position — not a bet on a black box.",chips:[{label:"Risk level",value:"Manual · HITL · Hands-off"},{label:"Notifications",value:"Want-to · Action · Paused · Rejected"},{label:"Capital",value:"Bucket / Vault"}],steps:[{n:1,title:"Discover",feature:"Agents & Indices + proof",body:"Browse the MAEX roster and index catalog and read the proof before you commit a dollar.",example:"Open SharpeShark and see its receipts, reputation, risk score, and Sharpe / ROI side by side."},{n:2,title:"Copy",feature:"Copy Trade",body:"Mirror a proven performer into your own bucket in one click, sized to your capital, with spread / funding cost shown before you confirm.",example:"One click clones SharpeShark's strategy into a fresh bucket bound to your wallet."},{n:3,title:"Supervise",feature:"Risk Level + Agent Notifications",body:"Set how much the agent may act on its own — Manual · HITL · Hands-off — and stay in the loop through Agent Notifications: Want to · Action · Paused · Rejected.",example:'On HITL, a "Want to open ETH long" notification waits for your inline Approve / Reject, and Explain shows why the agent wants the trade.'},{n:4,title:"Isolate",feature:"Buckets",body:"Every mirror lands in its own dedicated cross-margin bucket bound to a wallet executor agent, so risk is contained per strategy.",example:"SharpeShark runs in its own bucket with its own margin and exposure — if it draws down, only that bucket's capital is at risk; your other buckets and spot balance are untouched."}]},ao={kicker:"Explore",title:"Agents. Indices. Buckets. Vaults.",cards:[{title:"Agents",verbs:["Browse","Compare","Copy"],agents:[{name:"SharpeShark",sharpe:"2.41",roi:"+38.2%",risk:"72",positive:!0},{name:"SortinoSloth",sharpe:"1.86",roi:"+21.4%",risk:"58",positive:!0},{name:"FundingFox",sharpe:"1.12",roi:"-4.1%",risk:"41",positive:!1}]},{title:"Indices",verbs:["Track","Weight","Hold"],blurb:"Curated agent baskets for one-click exposure to proven strategies.",sample:[{label:"MAEX Core",value:"+12.8%",positive:!0},{label:"Risk-Off Bucket",value:"+4.2%",positive:!0}]},{title:"Buckets",verbs:["Isolate","Trade","Contain"],blurb:"Risk-isolated positions — each strategy in its own margin shell.",sample:[{label:"Bucket A",value:"ISOLATED",positive:!1},{label:"Bucket B",value:"ISOLATED",positive:!1}]},{title:"Vaults",verbs:["Deposit","Earn","Withdraw"],blurb:"Pooled onchain capital — graded vaults with live APR and TVL.",sample:[{label:"MLP (House Liq.)",value:"A · 18.4%",meta:"$9.8M TVL"},{label:"Basis Capture",value:"A · 14.2%",meta:"$2.1M TVL"}]}]},Zc={line:"Back agents you can prove. Own the upside.",primaryCta:{label:"Launch Demo",href:Ln.app},social:[{label:"Join Discord",href:Ln.discord},{label:"Join X",href:Ln.x}]},F_={legal:"© 2026 Morpheum. Capital funds proof.",labels:["validators","stakings","ZKProof"]};function Ao({variant:a="primary",children:e,className:i="",...r}){const o=`cta cta--${a} terminal-interactive ${i}`.trim();if("href"in r&&r.href!==void 0){const{href:c,...u}=r;return D.jsx("a",{className:o,href:c,...u,children:e})}return D.jsx("button",{className:o,type:"button",...r,children:e})}function My(){return D.jsx("section",{id:"join",className:"section community",children:D.jsxs("div",{className:"container community__inner",children:[D.jsx("h2",{className:"community__line",children:Zc.line}),D.jsxs("div",{className:"community__ctas",children:[D.jsx(Ao,{href:Zc.primaryCta.href,variant:"primary",children:Zc.primaryCta.label}),Zc.social.map(a=>D.jsx(Ao,{href:a.href,variant:"ghost",children:a.label},a.label))]})]})})}function yy(){const[a,e]=We.useState(!1),i=!!Ln.tutorialVideo;return D.jsx("section",{id:"demo",className:"section demo",children:D.jsxs("div",{className:"container",children:[D.jsx("p",{className:"section-kicker",children:Oh.kicker}),D.jsxs("div",{className:"demo__video",children:[a&&i?D.jsx("video",{className:"demo__player",src:Ln.tutorialVideo,controls:!0,autoPlay:!0,playsInline:!0}):D.jsxs("button",{type:"button",className:"demo__poster",onClick:()=>i&&e(!0),"aria-label":i?"Play tutorial video":"Tutorial video coming soon",children:[D.jsx("span",{className:"demo__play","aria-hidden":!0,children:"▶"}),D.jsx("span",{className:"demo__poster-label",children:"Tutorial"})]}),D.jsx("p",{className:"demo__caption",children:Oh.videoCaption})]})]})})}const Ey={receipt:"Receipt",riskScore:"Risk",credential:"Credential",verified:"Verified"};function Yd({type:a,value:e}){return D.jsxs("span",{className:`proof-chip proof-chip--${a}`,children:[D.jsx("span",{className:"proof-chip__dot","aria-hidden":!0}),D.jsx("span",{className:"proof-chip__label",children:Ey[a]}),e?D.jsx("span",{className:"proof-chip__value",children:e}):null]})}function by(){const a=ao.cards[0],e=ao.cards[1],i=ao.cards[2],r=ao.cards[3];return D.jsx("section",{id:"explore",className:"section explore",children:D.jsxs("div",{className:"container",children:[D.jsx("p",{className:"section-kicker",children:ao.kicker}),D.jsx("h2",{className:"section-title explore__title",children:ao.title}),D.jsxs("div",{className:"explore__grid",children:[D.jsxs("article",{id:"explore-agents",className:"explore-card explore-card--major",children:[D.jsxs("header",{className:"explore-card__header",children:[D.jsx("h3",{className:"explore-card__title",children:a.title}),D.jsx("p",{className:"explore-card__verbs",children:a.verbs.join(" · ").toUpperCase()})]}),D.jsx("ul",{className:"explore-roster",children:a.agents.map(o=>D.jsxs("li",{className:"explore-roster__row",children:[D.jsxs("div",{className:"explore-roster__top",children:[D.jsx("span",{className:"explore-roster__name",children:o.name}),D.jsx("span",{className:`terminal-value ${o.positive?"terminal-long":"terminal-short"}`,children:o.roi})]}),D.jsxs("div",{className:"explore-roster__proof",children:[D.jsx(Yd,{type:"verified"}),D.jsx(Yd,{type:"riskScore",value:o.risk}),D.jsx(Yd,{type:"receipt"}),D.jsxs("span",{className:"terminal-value explore-roster__sharpe",children:["Sharpe ",o.sharpe]})]})]},o.name))})]}),D.jsxs("article",{className:"explore-card explore-card--major",children:[D.jsxs("header",{className:"explore-card__header",children:[D.jsx("h3",{className:"explore-card__title",children:e.title}),D.jsx("p",{className:"explore-card__verbs",children:e.verbs.join(" · ").toUpperCase()})]}),D.jsx("p",{className:"explore-card__blurb",children:e.blurb}),D.jsx("ul",{className:"explore-sample",children:e.sample.map(o=>D.jsxs("li",{children:[D.jsx("span",{className:"terminal-label",children:o.label}),D.jsx("span",{className:`terminal-value ${o.positive?"terminal-long":""}`,children:o.value})]},o.label))})]}),D.jsxs("article",{id:"explore-buckets",className:"explore-card explore-card--major",children:[D.jsxs("header",{className:"explore-card__header",children:[D.jsx("h3",{className:"explore-card__title",children:i.title}),D.jsx("p",{className:"explore-card__verbs",children:i.verbs.join(" · ").toUpperCase()})]}),D.jsx("p",{className:"explore-card__blurb",children:i.blurb}),D.jsx("ul",{className:"explore-sample",children:i.sample.map(o=>D.jsxs("li",{children:[D.jsx("span",{className:"terminal-label",children:o.label}),D.jsx("span",{className:"terminal-value explore-sample__status",children:o.value})]},o.label))})]}),D.jsxs("article",{id:"explore-vaults",className:"explore-card explore-card--major",children:[D.jsxs("header",{className:"explore-card__header",children:[D.jsx("h3",{className:"explore-card__title",children:r.title}),D.jsx("p",{className:"explore-card__verbs",children:r.verbs.join(" · ").toUpperCase()})]}),D.jsx("p",{className:"explore-card__blurb",children:r.blurb}),D.jsx("ul",{className:"explore-sample",children:r.sample.map(o=>D.jsxs("li",{children:[D.jsx("span",{className:"terminal-label",children:o.label}),D.jsxs("span",{className:"explore-sample__metrics",children:[D.jsx("span",{className:"terminal-value terminal-long",children:o.value}),D.jsx("span",{className:"terminal-value explore-sample__meta",children:o.meta})]})]},o.label))})]})]})]})})}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Cp="185",Ty=0,B_=1,Ay=2,xu=1,Ry=2,wl=3,is=0,mi=1,Sa=2,ts=0,yo=1,Ph=2,z_=3,H_=4,Cy=5,_r=100,wy=101,Dy=102,Ly=103,Ny=104,Uy=200,Oy=201,Py=202,Iy=203,Ih=204,Fh=205,Fy=206,By=207,zy=208,Hy=209,Gy=210,Vy=211,ky=212,Xy=213,Wy=214,Bh=0,zh=1,Hh=2,Ro=3,Gh=4,Vh=5,kh=6,Xh=7,ux=0,qy=1,Yy=2,Ea=0,fx=1,dx=2,hx=3,px=4,mx=5,gx=6,_x=7,vx=300,Mr=301,Co=302,jd=303,Zd=304,Iu=306,Wh=1e3,ia=1001,qh=1002,jn=1003,jy=1004,Kc=1005,pn=1006,Kd=1007,zs=1008,Gi=1009,xx=1010,Sx=1011,Fl=1012,wp=1013,Aa=1014,Ma=1015,as=1016,Dp=1017,Lp=1018,Bl=1020,Mx=35902,yx=35899,Ex=1021,bx=1022,aa=1023,ss=1026,Sr=1027,Tx=1028,Np=1029,yr=1030,Up=1031,Op=1033,Su=33776,Mu=33777,yu=33778,Eu=33779,Yh=35840,jh=35841,Zh=35842,Kh=35843,Qh=36196,Jh=37492,$h=37496,ep=37488,tp=37489,Au=37490,np=37491,ip=37808,ap=37809,sp=37810,rp=37811,op=37812,lp=37813,cp=37814,up=37815,fp=37816,dp=37817,hp=37818,pp=37819,mp=37820,gp=37821,_p=36492,vp=36494,xp=36495,Sp=36283,Mp=36284,Ru=36285,yp=36286,Zy=3200,G_=0,Ky=1,Bs="",ni="srgb",Cu="srgb-linear",wu="linear",Yt="srgb",so=7680,V_=519,Qy=512,Jy=513,$y=514,Pp=515,eE=516,tE=517,Ip=518,nE=519,k_=35044,X_="300 es",ya=2e3,Du=2001;function iE(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function Lu(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function aE(){const a=Lu("canvas");return a.style.display="block",a}const W_={};function q_(...a){const e="THREE."+a.shift();console.log(e,...a)}function Ax(a){const e=a[0];if(typeof e=="string"&&e.startsWith("TSL:")){const i=a[1];i&&i.isStackTrace?a[0]+=" "+i.getLocation():a[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return a}function lt(...a){a=Ax(a);const e="THREE."+a.shift();{const i=a[0];i&&i.isStackTrace?console.warn(i.getError(e)):console.warn(e,...a)}}function Lt(...a){a=Ax(a);const e="THREE."+a.shift();{const i=a[0];i&&i.isStackTrace?console.error(i.getError(e)):console.error(e,...a)}}function Eo(...a){const e=a.join(" ");e in W_||(W_[e]=!0,lt(...a))}function sE(a,e,i){return new Promise(function(r,o){function c(){switch(a.clientWaitSync(e,a.SYNC_FLUSH_COMMANDS_BIT,0)){case a.WAIT_FAILED:o();break;case a.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:r()}}setTimeout(c,i)})}const rE={[Bh]:zh,[Hh]:kh,[Gh]:Xh,[Ro]:Vh,[zh]:Bh,[kh]:Hh,[Xh]:Gh,[Vh]:Ro};class br{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const c=o.indexOf(i);c!==-1&&o.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let c=0,u=o.length;c<u;c++)o[c].call(this,e);e.target=null}}}const ei=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Y_=1234567;const Ol=Math.PI/180,zl=180/Math.PI;function Lo(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(ei[a&255]+ei[a>>8&255]+ei[a>>16&255]+ei[a>>24&255]+"-"+ei[e&255]+ei[e>>8&255]+"-"+ei[e>>16&15|64]+ei[e>>24&255]+"-"+ei[i&63|128]+ei[i>>8&255]+"-"+ei[i>>16&255]+ei[i>>24&255]+ei[r&255]+ei[r>>8&255]+ei[r>>16&255]+ei[r>>24&255]).toLowerCase()}function St(a,e,i){return Math.max(e,Math.min(i,a))}function Fp(a,e){return(a%e+e)%e}function oE(a,e,i,r,o){return r+(a-e)*(o-r)/(i-e)}function lE(a,e,i){return a!==e?(i-a)/(e-a):0}function Pl(a,e,i){return(1-i)*a+i*e}function cE(a,e,i,r){return Pl(a,e,1-Math.exp(-i*r))}function uE(a,e=1){return e-Math.abs(Fp(a,e*2)-e)}function fE(a,e,i){return a<=e?0:a>=i?1:(a=(a-e)/(i-e),a*a*(3-2*a))}function dE(a,e,i){return a<=e?0:a>=i?1:(a=(a-e)/(i-e),a*a*a*(a*(a*6-15)+10))}function hE(a,e){return a+Math.floor(Math.random()*(e-a+1))}function pE(a,e){return a+Math.random()*(e-a)}function mE(a){return a*(.5-Math.random())}function gE(a){a!==void 0&&(Y_=a);let e=Y_+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function _E(a){return a*Ol}function vE(a){return a*zl}function xE(a){return(a&a-1)===0&&a!==0}function SE(a){return Math.pow(2,Math.ceil(Math.log(a)/Math.LN2))}function ME(a){return Math.pow(2,Math.floor(Math.log(a)/Math.LN2))}function yE(a,e,i,r,o){const c=Math.cos,u=Math.sin,h=c(i/2),m=u(i/2),d=c((e+r)/2),g=u((e+r)/2),_=c((e-r)/2),v=u((e-r)/2),x=c((r-e)/2),b=u((r-e)/2);switch(o){case"XYX":a.set(h*g,m*_,m*v,h*d);break;case"YZY":a.set(m*v,h*g,m*_,h*d);break;case"ZXZ":a.set(m*_,m*v,h*g,h*d);break;case"XZX":a.set(h*g,m*b,m*x,h*d);break;case"YXY":a.set(m*x,h*g,m*b,h*d);break;case"ZYZ":a.set(m*b,m*x,h*g,h*d);break;default:lt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+o)}}function So(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return a/4294967295;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int32Array:return Math.max(a/2147483647,-1);case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function si(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return Math.round(a*4294967295);case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int32Array:return Math.round(a*2147483647);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Gt={DEG2RAD:Ol,RAD2DEG:zl,generateUUID:Lo,clamp:St,euclideanModulo:Fp,mapLinear:oE,inverseLerp:lE,lerp:Pl,damp:cE,pingpong:uE,smoothstep:fE,smootherstep:dE,randInt:hE,randFloat:pE,randFloatSpread:mE,seededRandom:gE,degToRad:_E,radToDeg:vE,isPowerOfTwo:xE,ceilPowerOfTwo:SE,floorPowerOfTwo:ME,setQuaternionFromProperEuler:yE,normalize:si,denormalize:So},Yp=class Yp{constructor(e=0,i=0){this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,o=e.elements;return this.x=o[0]*i+o[3]*r+o[6],this.y=o[1]*i+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=St(this.x,e.x,i.x),this.y=St(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=St(this.x,e,i),this.y=St(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(St(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(St(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),o=Math.sin(i),c=this.x-e.x,u=this.y-e.y;return this.x=c*r-u*o+e.x,this.y=c*o+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Yp.prototype.isVector2=!0;let It=Yp;class No{constructor(e=0,i=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=o}static slerpFlat(e,i,r,o,c,u,h){let m=r[o+0],d=r[o+1],g=r[o+2],_=r[o+3],v=c[u+0],x=c[u+1],b=c[u+2],w=c[u+3];if(_!==w||m!==v||d!==x||g!==b){let y=m*v+d*x+g*b+_*w;y<0&&(v=-v,x=-x,b=-b,w=-w,y=-y);let M=1-h;if(y<.9995){const I=Math.acos(y),B=Math.sin(I);M=Math.sin(M*I)/B,h=Math.sin(h*I)/B,m=m*M+v*h,d=d*M+x*h,g=g*M+b*h,_=_*M+w*h}else{m=m*M+v*h,d=d*M+x*h,g=g*M+b*h,_=_*M+w*h;const I=1/Math.sqrt(m*m+d*d+g*g+_*_);m*=I,d*=I,g*=I,_*=I}}e[i]=m,e[i+1]=d,e[i+2]=g,e[i+3]=_}static multiplyQuaternionsFlat(e,i,r,o,c,u){const h=r[o],m=r[o+1],d=r[o+2],g=r[o+3],_=c[u],v=c[u+1],x=c[u+2],b=c[u+3];return e[i]=h*b+g*_+m*x-d*v,e[i+1]=m*b+g*v+d*_-h*x,e[i+2]=d*b+g*x+h*v-m*_,e[i+3]=g*b-h*_-m*v-d*x,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,o){return this._x=e,this._y=i,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,o=e._y,c=e._z,u=e._order,h=Math.cos,m=Math.sin,d=h(r/2),g=h(o/2),_=h(c/2),v=m(r/2),x=m(o/2),b=m(c/2);switch(u){case"XYZ":this._x=v*g*_+d*x*b,this._y=d*x*_-v*g*b,this._z=d*g*b+v*x*_,this._w=d*g*_-v*x*b;break;case"YXZ":this._x=v*g*_+d*x*b,this._y=d*x*_-v*g*b,this._z=d*g*b-v*x*_,this._w=d*g*_+v*x*b;break;case"ZXY":this._x=v*g*_-d*x*b,this._y=d*x*_+v*g*b,this._z=d*g*b+v*x*_,this._w=d*g*_-v*x*b;break;case"ZYX":this._x=v*g*_-d*x*b,this._y=d*x*_+v*g*b,this._z=d*g*b-v*x*_,this._w=d*g*_+v*x*b;break;case"YZX":this._x=v*g*_+d*x*b,this._y=d*x*_+v*g*b,this._z=d*g*b-v*x*_,this._w=d*g*_-v*x*b;break;case"XZY":this._x=v*g*_-d*x*b,this._y=d*x*_-v*g*b,this._z=d*g*b+v*x*_,this._w=d*g*_+v*x*b;break;default:lt("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],o=i[4],c=i[8],u=i[1],h=i[5],m=i[9],d=i[2],g=i[6],_=i[10],v=r+h+_;if(v>0){const x=.5/Math.sqrt(v+1);this._w=.25/x,this._x=(g-m)*x,this._y=(c-d)*x,this._z=(u-o)*x}else if(r>h&&r>_){const x=2*Math.sqrt(1+r-h-_);this._w=(g-m)/x,this._x=.25*x,this._y=(o+u)/x,this._z=(c+d)/x}else if(h>_){const x=2*Math.sqrt(1+h-r-_);this._w=(c-d)/x,this._x=(o+u)/x,this._y=.25*x,this._z=(m+g)/x}else{const x=2*Math.sqrt(1+_-r-h);this._w=(u-o)/x,this._x=(c+d)/x,this._y=(m+g)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(St(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,i/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,o=e._y,c=e._z,u=e._w,h=i._x,m=i._y,d=i._z,g=i._w;return this._x=r*g+u*h+o*d-c*m,this._y=o*g+u*m+c*h-r*d,this._z=c*g+u*d+r*m-o*h,this._w=u*g-r*h-o*m-c*d,this._onChangeCallback(),this}slerp(e,i){let r=e._x,o=e._y,c=e._z,u=e._w,h=this.dot(e);h<0&&(r=-r,o=-o,c=-c,u=-u,h=-h);let m=1-i;if(h<.9995){const d=Math.acos(h),g=Math.sin(d);m=Math.sin(m*d)/g,i=Math.sin(i*d)/g,this._x=this._x*m+r*i,this._y=this._y*m+o*i,this._z=this._z*m+c*i,this._w=this._w*m+u*i,this._onChangeCallback()}else this._x=this._x*m+r*i,this._y=this._y*m+o*i,this._z=this._z*m+c*i,this._w=this._w*m+u*i,this.normalize();return this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const jp=class jp{constructor(e=0,i=0,r=0){this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(j_.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(j_.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,o=this.z,c=e.elements;return this.x=c[0]*i+c[3]*r+c[6]*o,this.y=c[1]*i+c[4]*r+c[7]*o,this.z=c[2]*i+c[5]*r+c[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,o=this.z,c=e.elements,u=1/(c[3]*i+c[7]*r+c[11]*o+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*o+c[12])*u,this.y=(c[1]*i+c[5]*r+c[9]*o+c[13])*u,this.z=(c[2]*i+c[6]*r+c[10]*o+c[14])*u,this}applyQuaternion(e){const i=this.x,r=this.y,o=this.z,c=e.x,u=e.y,h=e.z,m=e.w,d=2*(u*o-h*r),g=2*(h*i-c*o),_=2*(c*r-u*i);return this.x=i+m*d+u*_-h*g,this.y=r+m*g+h*d-c*_,this.z=o+m*_+c*g-u*d,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,o=this.z,c=e.elements;return this.x=c[0]*i+c[4]*r+c[8]*o,this.y=c[1]*i+c[5]*r+c[9]*o,this.z=c[2]*i+c[6]*r+c[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=St(this.x,e.x,i.x),this.y=St(this.y,e.y,i.y),this.z=St(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=St(this.x,e,i),this.y=St(this.y,e,i),this.z=St(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(St(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,o=e.y,c=e.z,u=i.x,h=i.y,m=i.z;return this.x=o*m-c*h,this.y=c*u-r*m,this.z=r*h-o*u,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Qd.copy(this).projectOnVector(e),this.sub(Qd)}reflect(e){return this.sub(Qd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(St(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return i*i+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const o=Math.sin(i)*e;return this.x=o*Math.sin(r),this.y=Math.cos(i)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=o,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};jp.prototype.isVector3=!0;let ae=jp;const Qd=new ae,j_=new No,Zp=class Zp{constructor(e,i,r,o,c,u,h,m,d){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,o,c,u,h,m,d)}set(e,i,r,o,c,u,h,m,d){const g=this.elements;return g[0]=e,g[1]=o,g[2]=h,g[3]=i,g[4]=c,g[5]=m,g[6]=r,g[7]=u,g[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,o=i.elements,c=this.elements,u=r[0],h=r[3],m=r[6],d=r[1],g=r[4],_=r[7],v=r[2],x=r[5],b=r[8],w=o[0],y=o[3],M=o[6],I=o[1],B=o[4],C=o[7],O=o[2],L=o[5],F=o[8];return c[0]=u*w+h*I+m*O,c[3]=u*y+h*B+m*L,c[6]=u*M+h*C+m*F,c[1]=d*w+g*I+_*O,c[4]=d*y+g*B+_*L,c[7]=d*M+g*C+_*F,c[2]=v*w+x*I+b*O,c[5]=v*y+x*B+b*L,c[8]=v*M+x*C+b*F,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],o=e[2],c=e[3],u=e[4],h=e[5],m=e[6],d=e[7],g=e[8];return i*u*g-i*h*d-r*c*g+r*h*m+o*c*d-o*u*m}invert(){const e=this.elements,i=e[0],r=e[1],o=e[2],c=e[3],u=e[4],h=e[5],m=e[6],d=e[7],g=e[8],_=g*u-h*d,v=h*m-g*c,x=d*c-u*m,b=i*_+r*v+o*x;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/b;return e[0]=_*w,e[1]=(o*d-g*r)*w,e[2]=(h*r-o*u)*w,e[3]=v*w,e[4]=(g*i-o*m)*w,e[5]=(o*c-h*i)*w,e[6]=x*w,e[7]=(r*m-d*i)*w,e[8]=(u*i-r*c)*w,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,o,c,u,h){const m=Math.cos(c),d=Math.sin(c);return this.set(r*m,r*d,-r*(m*u+d*h)+u+e,-o*d,o*m,-o*(-d*u+m*h)+h+i,0,0,1),this}scale(e,i){return Eo("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Jd.makeScale(e,i)),this}rotate(e){return Eo("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Jd.makeRotation(-e)),this}translate(e,i){return Eo("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Jd.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let o=0;o<9;o++)if(i[o]!==r[o])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Zp.prototype.isMatrix3=!0;let dt=Zp;const Jd=new dt,Z_=new dt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),K_=new dt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function EE(){const a={enabled:!0,workingColorSpace:Cu,spaces:{},convert:function(o,c,u){return this.enabled===!1||c===u||!c||!u||(this.spaces[c].transfer===Yt&&(o.r=ns(o.r),o.g=ns(o.g),o.b=ns(o.b)),this.spaces[c].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[c].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Yt&&(o.r=bo(o.r),o.g=bo(o.g),o.b=bo(o.b))),o},workingToColorSpace:function(o,c){return this.convert(o,this.workingColorSpace,c)},colorSpaceToWorking:function(o,c){return this.convert(o,c,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Bs?wu:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,c=this.workingColorSpace){return o.fromArray(this.spaces[c].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,c,u){return o.copy(this.spaces[c].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,c){return Eo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),a.workingToColorSpace(o,c)},toWorkingColorSpace:function(o,c){return Eo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),a.colorSpaceToWorking(o,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return a.define({[Cu]:{primaries:e,whitePoint:r,transfer:wu,toXYZ:Z_,fromXYZ:K_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:ni},outputColorSpaceConfig:{drawingBufferColorSpace:ni}},[ni]:{primaries:e,whitePoint:r,transfer:Yt,toXYZ:Z_,fromXYZ:K_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:ni}}}),a}const Rt=EE();function ns(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function bo(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}let ro;class bE{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{ro===void 0&&(ro=Lu("canvas")),ro.width=e.width,ro.height=e.height;const o=ro.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=ro}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Lu("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),c=o.data;for(let u=0;u<c.length;u++)c[u]=ns(c[u]/255)*255;return r.putImageData(o,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(ns(i[r]/255)*255):i[r]=ns(i[r]);return{data:i,width:e.width,height:e.height}}else return lt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let TE=0;class Bp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:TE++}),this.uuid=Lo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayWidth,i.displayHeight,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let c;if(Array.isArray(o)){c=[];for(let u=0,h=o.length;u<h;u++)o[u].isDataTexture?c.push($d(o[u].image)):c.push($d(o[u]))}else c=$d(o);r.url=c}return i||(e.images[this.uuid]=r),r}}function $d(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?bE.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(lt("Texture: Unable to serialize Texture."),{})}let AE=0;const eh=new ae;class Zn extends br{constructor(e=Zn.DEFAULT_IMAGE,i=Zn.DEFAULT_MAPPING,r=ia,o=ia,c=pn,u=zs,h=aa,m=Gi,d=Zn.DEFAULT_ANISOTROPY,g=Bs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:AE++}),this.uuid=Lo(),this.name="",this.source=new Bp(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=c,this.minFilter=u,this.anisotropy=d,this.format=h,this.internalFormat=null,this.type=m,this.offset=new It(0,0),this.repeat=new It(1,1),this.center=new It(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new dt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(eh).x}get height(){return this.source.getSize(eh).y}get depth(){return this.source.getSize(eh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const r=e[i];if(r===void 0){lt(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const o=this[i];if(o===void 0){lt(`Texture.setValues(): property '${i}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==vx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Wh:e.x=e.x-Math.floor(e.x);break;case ia:e.x=e.x<0?0:1;break;case qh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Wh:e.y=e.y-Math.floor(e.y);break;case ia:e.y=e.y<0?0:1;break;case qh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Zn.DEFAULT_IMAGE=null;Zn.DEFAULT_MAPPING=vx;Zn.DEFAULT_ANISOTROPY=1;const Kp=class Kp{constructor(e=0,i=0,r=0,o=1){this.x=e,this.y=i,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,o){return this.x=e,this.y=i,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,o=this.z,c=this.w,u=e.elements;return this.x=u[0]*i+u[4]*r+u[8]*o+u[12]*c,this.y=u[1]*i+u[5]*r+u[9]*o+u[13]*c,this.z=u[2]*i+u[6]*r+u[10]*o+u[14]*c,this.w=u[3]*i+u[7]*r+u[11]*o+u[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,o,c;const m=e.elements,d=m[0],g=m[4],_=m[8],v=m[1],x=m[5],b=m[9],w=m[2],y=m[6],M=m[10];if(Math.abs(g-v)<.01&&Math.abs(_-w)<.01&&Math.abs(b-y)<.01){if(Math.abs(g+v)<.1&&Math.abs(_+w)<.1&&Math.abs(b+y)<.1&&Math.abs(d+x+M-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const B=(d+1)/2,C=(x+1)/2,O=(M+1)/2,L=(g+v)/4,F=(_+w)/4,T=(b+y)/4;return B>C&&B>O?B<.01?(r=0,o=.707106781,c=.707106781):(r=Math.sqrt(B),o=L/r,c=F/r):C>O?C<.01?(r=.707106781,o=0,c=.707106781):(o=Math.sqrt(C),r=L/o,c=T/o):O<.01?(r=.707106781,o=.707106781,c=0):(c=Math.sqrt(O),r=F/c,o=T/c),this.set(r,o,c,i),this}let I=Math.sqrt((y-b)*(y-b)+(_-w)*(_-w)+(v-g)*(v-g));return Math.abs(I)<.001&&(I=1),this.x=(y-b)/I,this.y=(_-w)/I,this.z=(v-g)/I,this.w=Math.acos((d+x+M-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=St(this.x,e.x,i.x),this.y=St(this.y,e.y,i.y),this.z=St(this.z,e.z,i.z),this.w=St(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=St(this.x,e,i),this.y=St(this.y,e,i),this.z=St(this.z,e,i),this.w=St(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(St(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Kp.prototype.isVector4=!0;let xn=Kp;class RE extends br{constructor(e=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:pn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},r),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=r.depth,this.scissor=new xn(0,0,e,i),this.scissorTest=!1,this.viewport=new xn(0,0,e,i),this.textures=[];const o={width:e,height:i,depth:r.depth},c=new Zn(o),u=r.count;for(let h=0;h<u;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview,this.useArrayDepthTexture=r.useArrayDepthTexture}_setTextureOptions(e={}){const i={minFilter:pn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let o=0,c=this.textures.length;o<c;o++)this.textures[o].image.width=e,this.textures[o].image.height=i,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const o=Object.assign({},e.textures[i].image);this.textures[i].source=new Bp(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ba extends RE{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class Rx extends Zn{constructor(e=null,i=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:o},this.magFilter=jn,this.minFilter=jn,this.wrapR=ia,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class CE extends Zn{constructor(e=null,i=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:o},this.magFilter=jn,this.minFilter=jn,this.wrapR=ia,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Pu=class Pu{constructor(e,i,r,o,c,u,h,m,d,g,_,v,x,b,w,y){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,o,c,u,h,m,d,g,_,v,x,b,w,y)}set(e,i,r,o,c,u,h,m,d,g,_,v,x,b,w,y){const M=this.elements;return M[0]=e,M[4]=i,M[8]=r,M[12]=o,M[1]=c,M[5]=u,M[9]=h,M[13]=m,M[2]=d,M[6]=g,M[10]=_,M[14]=v,M[3]=x,M[7]=b,M[11]=w,M[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Pu().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return this.determinantAffine()===0?(e.set(1,0,0),i.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const i=this.elements,r=e.elements,o=1/oo.setFromMatrixColumn(e,0).length(),c=1/oo.setFromMatrixColumn(e,1).length(),u=1/oo.setFromMatrixColumn(e,2).length();return i[0]=r[0]*o,i[1]=r[1]*o,i[2]=r[2]*o,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*u,i[9]=r[9]*u,i[10]=r[10]*u,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,o=e.y,c=e.z,u=Math.cos(r),h=Math.sin(r),m=Math.cos(o),d=Math.sin(o),g=Math.cos(c),_=Math.sin(c);if(e.order==="XYZ"){const v=u*g,x=u*_,b=h*g,w=h*_;i[0]=m*g,i[4]=-m*_,i[8]=d,i[1]=x+b*d,i[5]=v-w*d,i[9]=-h*m,i[2]=w-v*d,i[6]=b+x*d,i[10]=u*m}else if(e.order==="YXZ"){const v=m*g,x=m*_,b=d*g,w=d*_;i[0]=v+w*h,i[4]=b*h-x,i[8]=u*d,i[1]=u*_,i[5]=u*g,i[9]=-h,i[2]=x*h-b,i[6]=w+v*h,i[10]=u*m}else if(e.order==="ZXY"){const v=m*g,x=m*_,b=d*g,w=d*_;i[0]=v-w*h,i[4]=-u*_,i[8]=b+x*h,i[1]=x+b*h,i[5]=u*g,i[9]=w-v*h,i[2]=-u*d,i[6]=h,i[10]=u*m}else if(e.order==="ZYX"){const v=u*g,x=u*_,b=h*g,w=h*_;i[0]=m*g,i[4]=b*d-x,i[8]=v*d+w,i[1]=m*_,i[5]=w*d+v,i[9]=x*d-b,i[2]=-d,i[6]=h*m,i[10]=u*m}else if(e.order==="YZX"){const v=u*m,x=u*d,b=h*m,w=h*d;i[0]=m*g,i[4]=w-v*_,i[8]=b*_+x,i[1]=_,i[5]=u*g,i[9]=-h*g,i[2]=-d*g,i[6]=x*_+b,i[10]=v-w*_}else if(e.order==="XZY"){const v=u*m,x=u*d,b=h*m,w=h*d;i[0]=m*g,i[4]=-_,i[8]=d*g,i[1]=v*_+w,i[5]=u*g,i[9]=x*_-b,i[2]=b*_-x,i[6]=h*g,i[10]=w*_+v}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(wE,e,DE)}lookAt(e,i,r){const o=this.elements;return Ai.subVectors(e,i),Ai.lengthSq()===0&&(Ai.z=1),Ai.normalize(),Ns.crossVectors(r,Ai),Ns.lengthSq()===0&&(Math.abs(r.z)===1?Ai.x+=1e-4:Ai.z+=1e-4,Ai.normalize(),Ns.crossVectors(r,Ai)),Ns.normalize(),Qc.crossVectors(Ai,Ns),o[0]=Ns.x,o[4]=Qc.x,o[8]=Ai.x,o[1]=Ns.y,o[5]=Qc.y,o[9]=Ai.y,o[2]=Ns.z,o[6]=Qc.z,o[10]=Ai.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,o=i.elements,c=this.elements,u=r[0],h=r[4],m=r[8],d=r[12],g=r[1],_=r[5],v=r[9],x=r[13],b=r[2],w=r[6],y=r[10],M=r[14],I=r[3],B=r[7],C=r[11],O=r[15],L=o[0],F=o[4],T=o[8],N=o[12],Z=o[1],k=o[5],j=o[9],me=o[13],ce=o[2],X=o[6],z=o[10],H=o[14],Q=o[3],fe=o[7],xe=o[11],U=o[15];return c[0]=u*L+h*Z+m*ce+d*Q,c[4]=u*F+h*k+m*X+d*fe,c[8]=u*T+h*j+m*z+d*xe,c[12]=u*N+h*me+m*H+d*U,c[1]=g*L+_*Z+v*ce+x*Q,c[5]=g*F+_*k+v*X+x*fe,c[9]=g*T+_*j+v*z+x*xe,c[13]=g*N+_*me+v*H+x*U,c[2]=b*L+w*Z+y*ce+M*Q,c[6]=b*F+w*k+y*X+M*fe,c[10]=b*T+w*j+y*z+M*xe,c[14]=b*N+w*me+y*H+M*U,c[3]=I*L+B*Z+C*ce+O*Q,c[7]=I*F+B*k+C*X+O*fe,c[11]=I*T+B*j+C*z+O*xe,c[15]=I*N+B*me+C*H+O*U,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],o=e[8],c=e[12],u=e[1],h=e[5],m=e[9],d=e[13],g=e[2],_=e[6],v=e[10],x=e[14],b=e[3],w=e[7],y=e[11],M=e[15],I=m*x-d*v,B=h*x-d*_,C=h*v-m*_,O=u*x-d*g,L=u*v-m*g,F=u*_-h*g;return i*(w*I-y*B+M*C)-r*(b*I-y*O+M*L)+o*(b*B-w*O+M*F)-c*(b*C-w*L+y*F)}determinantAffine(){const e=this.elements,i=e[0],r=e[4],o=e[8],c=e[1],u=e[5],h=e[9],m=e[2],d=e[6],g=e[10];return i*(u*g-h*d)-r*(c*g-h*m)+o*(c*d-u*m)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=i,o[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],o=e[2],c=e[3],u=e[4],h=e[5],m=e[6],d=e[7],g=e[8],_=e[9],v=e[10],x=e[11],b=e[12],w=e[13],y=e[14],M=e[15],I=i*h-r*u,B=i*m-o*u,C=i*d-c*u,O=r*m-o*h,L=r*d-c*h,F=o*d-c*m,T=g*w-_*b,N=g*y-v*b,Z=g*M-x*b,k=_*y-v*w,j=_*M-x*w,me=v*M-x*y,ce=I*me-B*j+C*k+O*Z-L*N+F*T;if(ce===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const X=1/ce;return e[0]=(h*me-m*j+d*k)*X,e[1]=(o*j-r*me-c*k)*X,e[2]=(w*F-y*L+M*O)*X,e[3]=(v*L-_*F-x*O)*X,e[4]=(m*Z-u*me-d*N)*X,e[5]=(i*me-o*Z+c*N)*X,e[6]=(y*C-b*F-M*B)*X,e[7]=(g*F-v*C+x*B)*X,e[8]=(u*j-h*Z+d*T)*X,e[9]=(r*Z-i*j-c*T)*X,e[10]=(b*L-w*C+M*I)*X,e[11]=(_*C-g*L-x*I)*X,e[12]=(h*N-u*k-m*T)*X,e[13]=(i*k-r*N+o*T)*X,e[14]=(w*B-b*O-y*I)*X,e[15]=(g*O-_*B+v*I)*X,this}scale(e){const i=this.elements,r=e.x,o=e.y,c=e.z;return i[0]*=r,i[4]*=o,i[8]*=c,i[1]*=r,i[5]*=o,i[9]*=c,i[2]*=r,i[6]*=o,i[10]*=c,i[3]*=r,i[7]*=o,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,o))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),o=Math.sin(i),c=1-r,u=e.x,h=e.y,m=e.z,d=c*u,g=c*h;return this.set(d*u+r,d*h-o*m,d*m+o*h,0,d*h+o*m,g*h+r,g*m-o*u,0,d*m-o*h,g*m+o*u,c*m*m+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,o,c,u){return this.set(1,r,c,0,e,1,u,0,i,o,1,0,0,0,0,1),this}compose(e,i,r){const o=this.elements,c=i._x,u=i._y,h=i._z,m=i._w,d=c+c,g=u+u,_=h+h,v=c*d,x=c*g,b=c*_,w=u*g,y=u*_,M=h*_,I=m*d,B=m*g,C=m*_,O=r.x,L=r.y,F=r.z;return o[0]=(1-(w+M))*O,o[1]=(x+C)*O,o[2]=(b-B)*O,o[3]=0,o[4]=(x-C)*L,o[5]=(1-(v+M))*L,o[6]=(y+I)*L,o[7]=0,o[8]=(b+B)*F,o[9]=(y-I)*F,o[10]=(1-(v+w))*F,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,i,r){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const c=this.determinantAffine();if(c===0)return r.set(1,1,1),i.identity(),this;let u=oo.set(o[0],o[1],o[2]).length();const h=oo.set(o[4],o[5],o[6]).length(),m=oo.set(o[8],o[9],o[10]).length();c<0&&(u=-u),$i.copy(this);const d=1/u,g=1/h,_=1/m;return $i.elements[0]*=d,$i.elements[1]*=d,$i.elements[2]*=d,$i.elements[4]*=g,$i.elements[5]*=g,$i.elements[6]*=g,$i.elements[8]*=_,$i.elements[9]*=_,$i.elements[10]*=_,i.setFromRotationMatrix($i),r.x=u,r.y=h,r.z=m,this}makePerspective(e,i,r,o,c,u,h=ya,m=!1){const d=this.elements,g=2*c/(i-e),_=2*c/(r-o),v=(i+e)/(i-e),x=(r+o)/(r-o);let b,w;if(m)b=c/(u-c),w=u*c/(u-c);else if(h===ya)b=-(u+c)/(u-c),w=-2*u*c/(u-c);else if(h===Du)b=-u/(u-c),w=-u*c/(u-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return d[0]=g,d[4]=0,d[8]=v,d[12]=0,d[1]=0,d[5]=_,d[9]=x,d[13]=0,d[2]=0,d[6]=0,d[10]=b,d[14]=w,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,i,r,o,c,u,h=ya,m=!1){const d=this.elements,g=2/(i-e),_=2/(r-o),v=-(i+e)/(i-e),x=-(r+o)/(r-o);let b,w;if(m)b=1/(u-c),w=u/(u-c);else if(h===ya)b=-2/(u-c),w=-(u+c)/(u-c);else if(h===Du)b=-1/(u-c),w=-c/(u-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return d[0]=g,d[4]=0,d[8]=0,d[12]=v,d[1]=0,d[5]=_,d[9]=0,d[13]=x,d[2]=0,d[6]=0,d[10]=b,d[14]=w,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let o=0;o<16;o++)if(i[o]!==r[o])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}};Pu.prototype.isMatrix4=!0;let En=Pu;const oo=new ae,$i=new En,wE=new ae(0,0,0),DE=new ae(1,1,1),Ns=new ae,Qc=new ae,Ai=new ae,Q_=new En,J_=new No;class Er{constructor(e=0,i=0,r=0,o=Er.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,o=this._order){return this._x=e,this._y=i,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const o=e.elements,c=o[0],u=o[4],h=o[8],m=o[1],d=o[5],g=o[9],_=o[2],v=o[6],x=o[10];switch(i){case"XYZ":this._y=Math.asin(St(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,x),this._z=Math.atan2(-u,c)):(this._x=Math.atan2(v,d),this._z=0);break;case"YXZ":this._x=Math.asin(-St(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(h,x),this._z=Math.atan2(m,d)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(St(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-_,x),this._z=Math.atan2(-u,d)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-St(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(v,x),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-u,d));break;case"YZX":this._z=Math.asin(St(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,d),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(h,x));break;case"XZY":this._z=Math.asin(-St(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(v,d),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-g,x),this._y=0);break;default:lt("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return Q_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Q_,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return J_.setFromEuler(this),this.setFromQuaternion(J_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Er.DEFAULT_ORDER="XYZ";class Cx{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let LE=0;const $_=new ae,lo=new No,ja=new En,Jc=new ae,El=new ae,NE=new ae,UE=new No,ev=new ae(1,0,0),tv=new ae(0,1,0),nv=new ae(0,0,1),iv={type:"added"},OE={type:"removed"},co={type:"childadded",child:null},th={type:"childremoved",child:null};class wi extends br{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:LE++}),this.uuid=Lo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=wi.DEFAULT_UP.clone();const e=new ae,i=new Er,r=new No,o=new ae(1,1,1);function c(){r.setFromEuler(i,!1)}function u(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new En},normalMatrix:{value:new dt}}),this.matrix=new En,this.matrixWorld=new En,this.matrixAutoUpdate=wi.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=wi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Cx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return lo.setFromAxisAngle(e,i),this.quaternion.multiply(lo),this}rotateOnWorldAxis(e,i){return lo.setFromAxisAngle(e,i),this.quaternion.premultiply(lo),this}rotateX(e){return this.rotateOnAxis(ev,e)}rotateY(e){return this.rotateOnAxis(tv,e)}rotateZ(e){return this.rotateOnAxis(nv,e)}translateOnAxis(e,i){return $_.copy(e).applyQuaternion(this.quaternion),this.position.add($_.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(ev,e)}translateY(e){return this.translateOnAxis(tv,e)}translateZ(e){return this.translateOnAxis(nv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ja.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?Jc.copy(e):Jc.set(e,i,r);const o=this.parent;this.updateWorldMatrix(!0,!1),El.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ja.lookAt(El,Jc,this.up):ja.lookAt(Jc,El,this.up),this.quaternion.setFromRotationMatrix(ja),o&&(ja.extractRotation(o.matrixWorld),lo.setFromRotationMatrix(ja),this.quaternion.premultiply(lo.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(Lt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(iv),co.child=e,this.dispatchEvent(co),co.child=null):Lt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(OE),th.child=e,this.dispatchEvent(th),th.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ja.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ja.multiply(e.parent.matrixWorld)),e.applyMatrix4(ja),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(iv),co.child=e,this.dispatchEvent(co),co.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,o=this.children.length;r<o;r++){const u=this.children[r].getObjectByProperty(e,i);if(u!==void 0)return u}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const o=this.children;for(let c=0,u=o.length;c<u;c++)o[c].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(El,e,NE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(El,UE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const i=e.x,r=e.y,o=e.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*r-c[8]*o,c[13]+=r-c[1]*i-c[5]*r-c[9]*o,c[14]+=o-c[2]*i-c[6]*r-c[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i,r=!1){const o=this.parent;if(e===!0&&o!==null&&o.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),i===!0){const c=this.children;for(let u=0,h=c.length;u<h;u++)c[u].updateWorldMatrix(!1,!0,r)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),this.static!==!1&&(o.static=this.static),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(h=>({...h})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function c(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=c(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let d=0,g=m.length;d<g;d++){const _=m[d];c(e.shapes,_)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,d=this.material.length;m<d;m++)h.push(c(e.materials,this.material[m]));o.material=h}else o.material=c(e.materials,this.material);if(this.children.length>0){o.children=[];for(let h=0;h<this.children.length;h++)o.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];o.animations.push(c(e.animations,m))}}if(i){const h=u(e.geometries),m=u(e.materials),d=u(e.textures),g=u(e.images),_=u(e.shapes),v=u(e.skeletons),x=u(e.animations),b=u(e.nodes);h.length>0&&(r.geometries=h),m.length>0&&(r.materials=m),d.length>0&&(r.textures=d),g.length>0&&(r.images=g),_.length>0&&(r.shapes=_),v.length>0&&(r.skeletons=v),x.length>0&&(r.animations=x),b.length>0&&(r.nodes=b)}return r.object=o,r;function u(h){const m=[];for(const d in h){const g=h[d];delete g.metadata,m.push(g)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}wi.DEFAULT_UP=new ae(0,1,0);wi.DEFAULT_MATRIX_AUTO_UPDATE=!0;wi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Dl extends wi{constructor(){super(),this.isGroup=!0,this.type="Group"}}const PE={type:"move"};class nh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Dl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Dl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ae,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ae),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Dl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ae,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ae,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let o=null,c=null,u=null;const h=this._targetRay,m=this._grip,d=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(d&&e.hand){u=!0;for(const w of e.hand.values()){const y=i.getJointPose(w,r),M=this._getHandJoint(d,w);y!==null&&(M.matrix.fromArray(y.transform.matrix),M.matrix.decompose(M.position,M.rotation,M.scale),M.matrixWorldNeedsUpdate=!0,M.jointRadius=y.radius),M.visible=y!==null}const g=d.joints["index-finger-tip"],_=d.joints["thumb-tip"],v=g.position.distanceTo(_.position),x=.02,b=.005;d.inputState.pinching&&v>x+b?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&v<=x-b&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,r),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1,m.eventsEnabled&&m.dispatchEvent({type:"gripUpdated",data:e,target:this})));h!==null&&(o=i.getPose(e.targetRaySpace,r),o===null&&c!==null&&(o=c),o!==null&&(h.matrix.fromArray(o.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,o.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(o.linearVelocity)):h.hasLinearVelocity=!1,o.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(o.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(PE)))}return h!==null&&(h.visible=o!==null),m!==null&&(m.visible=c!==null),d!==null&&(d.visible=u!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new Dl;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}const wx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Us={h:0,s:0,l:0},$c={h:0,s:0,l:0};function ih(a,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?a+(e-a)*6*i:i<1/2?e:i<2/3?a+(e-a)*6*(2/3-i):a}class Xt{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=ni){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Rt.colorSpaceToWorking(this,i),this}setRGB(e,i,r,o=Rt.workingColorSpace){return this.r=e,this.g=i,this.b=r,Rt.colorSpaceToWorking(this,o),this}setHSL(e,i,r,o=Rt.workingColorSpace){if(e=Fp(e,1),i=St(i,0,1),r=St(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,u=2*r-c;this.r=ih(u,c,e+1/3),this.g=ih(u,c,e),this.b=ih(u,c,e-1/3)}return Rt.colorSpaceToWorking(this,o),this}setStyle(e,i=ni){function r(c){c!==void 0&&parseFloat(c)<1&&lt("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const u=o[1],h=o[2];switch(u){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:lt("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=o[1],u=c.length;if(u===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(u===6)return this.setHex(parseInt(c,16),i);lt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=ni){const r=wx[e.toLowerCase()];return r!==void 0?this.setHex(r,i):lt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ns(e.r),this.g=ns(e.g),this.b=ns(e.b),this}copyLinearToSRGB(e){return this.r=bo(e.r),this.g=bo(e.g),this.b=bo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ni){return Rt.workingToColorSpace(ti.copy(this),e),Math.round(St(ti.r*255,0,255))*65536+Math.round(St(ti.g*255,0,255))*256+Math.round(St(ti.b*255,0,255))}getHexString(e=ni){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Rt.workingColorSpace){Rt.workingToColorSpace(ti.copy(this),i);const r=ti.r,o=ti.g,c=ti.b,u=Math.max(r,o,c),h=Math.min(r,o,c);let m,d;const g=(h+u)/2;if(h===u)m=0,d=0;else{const _=u-h;switch(d=g<=.5?_/(u+h):_/(2-u-h),u){case r:m=(o-c)/_+(o<c?6:0);break;case o:m=(c-r)/_+2;break;case c:m=(r-o)/_+4;break}m/=6}return e.h=m,e.s=d,e.l=g,e}getRGB(e,i=Rt.workingColorSpace){return Rt.workingToColorSpace(ti.copy(this),i),e.r=ti.r,e.g=ti.g,e.b=ti.b,e}getStyle(e=ni){Rt.workingToColorSpace(ti.copy(this),e);const i=ti.r,r=ti.g,o=ti.b;return e!==ni?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,i,r){return this.getHSL(Us),this.setHSL(Us.h+e,Us.s+i,Us.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(Us),e.getHSL($c);const r=Pl(Us.h,$c.h,i),o=Pl(Us.s,$c.s,i),c=Pl(Us.l,$c.l,i);return this.setHSL(r,o,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,o=this.b,c=e.elements;return this.r=c[0]*i+c[3]*r+c[6]*o,this.g=c[1]*i+c[4]*r+c[7]*o,this.b=c[2]*i+c[5]*r+c[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ti=new Xt;Xt.NAMES=wx;class IE extends wi{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Er,this.environmentIntensity=1,this.environmentRotation=new Er,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const ea=new ae,Za=new ae,ah=new ae,Ka=new ae,uo=new ae,fo=new ae,av=new ae,sh=new ae,rh=new ae,oh=new ae,lh=new xn,ch=new xn,uh=new xn;class na{constructor(e=new ae,i=new ae,r=new ae){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,o){o.subVectors(r,i),ea.subVectors(e,i),o.cross(ea);const c=o.lengthSq();return c>0?o.multiplyScalar(1/Math.sqrt(c)):o.set(0,0,0)}static getBarycoord(e,i,r,o,c){ea.subVectors(o,i),Za.subVectors(r,i),ah.subVectors(e,i);const u=ea.dot(ea),h=ea.dot(Za),m=ea.dot(ah),d=Za.dot(Za),g=Za.dot(ah),_=u*d-h*h;if(_===0)return c.set(0,0,0),null;const v=1/_,x=(d*m-h*g)*v,b=(u*g-h*m)*v;return c.set(1-x-b,b,x)}static containsPoint(e,i,r,o){return this.getBarycoord(e,i,r,o,Ka)===null?!1:Ka.x>=0&&Ka.y>=0&&Ka.x+Ka.y<=1}static getInterpolation(e,i,r,o,c,u,h,m){return this.getBarycoord(e,i,r,o,Ka)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,Ka.x),m.addScaledVector(u,Ka.y),m.addScaledVector(h,Ka.z),m)}static getInterpolatedAttribute(e,i,r,o,c,u){return lh.setScalar(0),ch.setScalar(0),uh.setScalar(0),lh.fromBufferAttribute(e,i),ch.fromBufferAttribute(e,r),uh.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(lh,c.x),u.addScaledVector(ch,c.y),u.addScaledVector(uh,c.z),u}static isFrontFacing(e,i,r,o){return ea.subVectors(r,i),Za.subVectors(e,i),ea.cross(Za).dot(o)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,o){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,i,r,o){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ea.subVectors(this.c,this.b),Za.subVectors(this.a,this.b),ea.cross(Za).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return na.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return na.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,o,c){return na.getInterpolation(e,this.a,this.b,this.c,i,r,o,c)}containsPoint(e){return na.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return na.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,o=this.b,c=this.c;let u,h;uo.subVectors(o,r),fo.subVectors(c,r),sh.subVectors(e,r);const m=uo.dot(sh),d=fo.dot(sh);if(m<=0&&d<=0)return i.copy(r);rh.subVectors(e,o);const g=uo.dot(rh),_=fo.dot(rh);if(g>=0&&_<=g)return i.copy(o);const v=m*_-g*d;if(v<=0&&m>=0&&g<=0)return u=m/(m-g),i.copy(r).addScaledVector(uo,u);oh.subVectors(e,c);const x=uo.dot(oh),b=fo.dot(oh);if(b>=0&&x<=b)return i.copy(c);const w=x*d-m*b;if(w<=0&&d>=0&&b<=0)return h=d/(d-b),i.copy(r).addScaledVector(fo,h);const y=g*b-x*_;if(y<=0&&_-g>=0&&x-b>=0)return av.subVectors(c,o),h=(_-g)/(_-g+(x-b)),i.copy(o).addScaledVector(av,h);const M=1/(y+w+v);return u=w*M,h=v*M,i.copy(r).addScaledVector(uo,u).addScaledVector(fo,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Gl{constructor(e=new ae(1/0,1/0,1/0),i=new ae(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(ta.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(ta.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=ta.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let u=0,h=c.count;u<h;u++)e.isMesh===!0?e.getVertexPosition(u,ta):ta.fromBufferAttribute(c,u),ta.applyMatrix4(e.matrixWorld),this.expandByPoint(ta);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),eu.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),eu.copy(r.boundingBox)),eu.applyMatrix4(e.matrixWorld),this.union(eu)}const o=e.children;for(let c=0,u=o.length;c<u;c++)this.expandByObject(o[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ta),ta.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(bl),tu.subVectors(this.max,bl),ho.subVectors(e.a,bl),po.subVectors(e.b,bl),mo.subVectors(e.c,bl),Os.subVectors(po,ho),Ps.subVectors(mo,po),ur.subVectors(ho,mo);let i=[0,-Os.z,Os.y,0,-Ps.z,Ps.y,0,-ur.z,ur.y,Os.z,0,-Os.x,Ps.z,0,-Ps.x,ur.z,0,-ur.x,-Os.y,Os.x,0,-Ps.y,Ps.x,0,-ur.y,ur.x,0];return!fh(i,ho,po,mo,tu)||(i=[1,0,0,0,1,0,0,0,1],!fh(i,ho,po,mo,tu))?!1:(nu.crossVectors(Os,Ps),i=[nu.x,nu.y,nu.z],fh(i,ho,po,mo,tu))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ta).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ta).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Qa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Qa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Qa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Qa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Qa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Qa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Qa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Qa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Qa),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Qa=[new ae,new ae,new ae,new ae,new ae,new ae,new ae,new ae],ta=new ae,eu=new Gl,ho=new ae,po=new ae,mo=new ae,Os=new ae,Ps=new ae,ur=new ae,bl=new ae,tu=new ae,nu=new ae,fr=new ae;function fh(a,e,i,r,o){for(let c=0,u=a.length-3;c<=u;c+=3){fr.fromArray(a,c);const h=o.x*Math.abs(fr.x)+o.y*Math.abs(fr.y)+o.z*Math.abs(fr.z),m=e.dot(fr),d=i.dot(fr),g=r.dot(fr);if(Math.max(-Math.max(m,d,g),Math.min(m,d,g))>h)return!1}return!0}const Dn=new ae,iu=new It;let FE=0;class Ta extends br{constructor(e,i,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:FE++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=k_,this.updateRanges=[],this.gpuType=Ma,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let o=0,c=this.itemSize;o<c;o++)this.array[e+o]=i.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)iu.fromBufferAttribute(this,i),iu.applyMatrix3(e),this.setXY(i,iu.x,iu.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)Dn.fromBufferAttribute(this,i),Dn.applyMatrix3(e),this.setXYZ(i,Dn.x,Dn.y,Dn.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)Dn.fromBufferAttribute(this,i),Dn.applyMatrix4(e),this.setXYZ(i,Dn.x,Dn.y,Dn.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)Dn.fromBufferAttribute(this,i),Dn.applyNormalMatrix(e),this.setXYZ(i,Dn.x,Dn.y,Dn.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)Dn.fromBufferAttribute(this,i),Dn.transformDirection(e),this.setXYZ(i,Dn.x,Dn.y,Dn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=So(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=si(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=So(i,this.array)),i}setX(e,i){return this.normalized&&(i=si(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=So(i,this.array)),i}setY(e,i){return this.normalized&&(i=si(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=So(i,this.array)),i}setZ(e,i){return this.normalized&&(i=si(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=So(i,this.array)),i}setW(e,i){return this.normalized&&(i=si(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=si(i,this.array),r=si(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,o){return e*=this.itemSize,this.normalized&&(i=si(i,this.array),r=si(r,this.array),o=si(o,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,i,r,o,c){return e*=this.itemSize,this.normalized&&(i=si(i,this.array),r=si(r,this.array),o=si(o,this.array),c=si(c,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==k_&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class Dx extends Ta{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class Lx extends Ta{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class Vi extends Ta{constructor(e,i,r){super(new Float32Array(e),i,r)}}const BE=new Gl,Tl=new ae,dh=new ae;class zp{constructor(e=new ae,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):BE.setFromPoints(e).getCenter(r);let o=0;for(let c=0,u=e.length;c<u;c++)o=Math.max(o,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Tl.subVectors(e,this.center);const i=Tl.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),o=(r-this.radius)*.5;this.center.addScaledVector(Tl,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(dh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Tl.copy(e.center).add(dh)),this.expandByPoint(Tl.copy(e.center).sub(dh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let zE=0;const zi=new En,hh=new wi,go=new ae,Ri=new Gl,Al=new Gl,Gn=new ae;class ki extends br{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:zE++}),this.uuid=Lo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(iE(e)?Lx:Dx)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new dt().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return zi.makeRotationFromQuaternion(e),this.applyMatrix4(zi),this}rotateX(e){return zi.makeRotationX(e),this.applyMatrix4(zi),this}rotateY(e){return zi.makeRotationY(e),this.applyMatrix4(zi),this}rotateZ(e){return zi.makeRotationZ(e),this.applyMatrix4(zi),this}translate(e,i,r){return zi.makeTranslation(e,i,r),this.applyMatrix4(zi),this}scale(e,i,r){return zi.makeScale(e,i,r),this.applyMatrix4(zi),this}lookAt(e){return hh.lookAt(e),hh.updateMatrix(),this.applyMatrix4(hh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(go).negate(),this.translate(go.x,go.y,go.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let o=0,c=e.length;o<c;o++){const u=e[o];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new Vi(r,3))}else{const r=Math.min(e.length,i.count);for(let o=0;o<r;o++){const c=e[o];i.setXYZ(o,c.x,c.y,c.z||0)}e.length>i.count&&lt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Gl);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Lt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ae(-1/0,-1/0,-1/0),new ae(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,o=i.length;r<o;r++){const c=i[r];Ri.setFromBufferAttribute(c),this.morphTargetsRelative?(Gn.addVectors(this.boundingBox.min,Ri.min),this.boundingBox.expandByPoint(Gn),Gn.addVectors(this.boundingBox.max,Ri.max),this.boundingBox.expandByPoint(Gn)):(this.boundingBox.expandByPoint(Ri.min),this.boundingBox.expandByPoint(Ri.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Lt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zp);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Lt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ae,1/0);return}if(e){const r=this.boundingSphere.center;if(Ri.setFromBufferAttribute(e),i)for(let c=0,u=i.length;c<u;c++){const h=i[c];Al.setFromBufferAttribute(h),this.morphTargetsRelative?(Gn.addVectors(Ri.min,Al.min),Ri.expandByPoint(Gn),Gn.addVectors(Ri.max,Al.max),Ri.expandByPoint(Gn)):(Ri.expandByPoint(Al.min),Ri.expandByPoint(Al.max))}Ri.getCenter(r);let o=0;for(let c=0,u=e.count;c<u;c++)Gn.fromBufferAttribute(e,c),o=Math.max(o,r.distanceToSquared(Gn));if(i)for(let c=0,u=i.length;c<u;c++){const h=i[c],m=this.morphTargetsRelative;for(let d=0,g=h.count;d<g;d++)Gn.fromBufferAttribute(h,d),m&&(go.fromBufferAttribute(e,d),Gn.add(go)),o=Math.max(o,r.distanceToSquared(Gn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Lt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Lt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,o=i.normal,c=i.uv;let u=this.getAttribute("tangent");(u===void 0||u.count!==r.count)&&(u=new Ta(new Float32Array(4*r.count),4),this.setAttribute("tangent",u));const h=[],m=[];for(let T=0;T<r.count;T++)h[T]=new ae,m[T]=new ae;const d=new ae,g=new ae,_=new ae,v=new It,x=new It,b=new It,w=new ae,y=new ae;function M(T,N,Z){d.fromBufferAttribute(r,T),g.fromBufferAttribute(r,N),_.fromBufferAttribute(r,Z),v.fromBufferAttribute(c,T),x.fromBufferAttribute(c,N),b.fromBufferAttribute(c,Z),g.sub(d),_.sub(d),x.sub(v),b.sub(v);const k=1/(x.x*b.y-b.x*x.y);isFinite(k)&&(w.copy(g).multiplyScalar(b.y).addScaledVector(_,-x.y).multiplyScalar(k),y.copy(_).multiplyScalar(x.x).addScaledVector(g,-b.x).multiplyScalar(k),h[T].add(w),h[N].add(w),h[Z].add(w),m[T].add(y),m[N].add(y),m[Z].add(y))}let I=this.groups;I.length===0&&(I=[{start:0,count:e.count}]);for(let T=0,N=I.length;T<N;++T){const Z=I[T],k=Z.start,j=Z.count;for(let me=k,ce=k+j;me<ce;me+=3)M(e.getX(me+0),e.getX(me+1),e.getX(me+2))}const B=new ae,C=new ae,O=new ae,L=new ae;function F(T){O.fromBufferAttribute(o,T),L.copy(O);const N=h[T];B.copy(N),B.sub(O.multiplyScalar(O.dot(N))).normalize(),C.crossVectors(L,N);const k=C.dot(m[T])<0?-1:1;u.setXYZW(T,B.x,B.y,B.z,k)}for(let T=0,N=I.length;T<N;++T){const Z=I[T],k=Z.start,j=Z.count;for(let me=k,ce=k+j;me<ce;me+=3)F(e.getX(me+0)),F(e.getX(me+1)),F(e.getX(me+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==i.count)r=new Ta(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let v=0,x=r.count;v<x;v++)r.setXYZ(v,0,0,0);const o=new ae,c=new ae,u=new ae,h=new ae,m=new ae,d=new ae,g=new ae,_=new ae;if(e)for(let v=0,x=e.count;v<x;v+=3){const b=e.getX(v+0),w=e.getX(v+1),y=e.getX(v+2);o.fromBufferAttribute(i,b),c.fromBufferAttribute(i,w),u.fromBufferAttribute(i,y),g.subVectors(u,c),_.subVectors(o,c),g.cross(_),h.fromBufferAttribute(r,b),m.fromBufferAttribute(r,w),d.fromBufferAttribute(r,y),h.add(g),m.add(g),d.add(g),r.setXYZ(b,h.x,h.y,h.z),r.setXYZ(w,m.x,m.y,m.z),r.setXYZ(y,d.x,d.y,d.z)}else for(let v=0,x=i.count;v<x;v+=3)o.fromBufferAttribute(i,v+0),c.fromBufferAttribute(i,v+1),u.fromBufferAttribute(i,v+2),g.subVectors(u,c),_.subVectors(o,c),g.cross(_),r.setXYZ(v+0,g.x,g.y,g.z),r.setXYZ(v+1,g.x,g.y,g.z),r.setXYZ(v+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)Gn.fromBufferAttribute(e,i),Gn.normalize(),e.setXYZ(i,Gn.x,Gn.y,Gn.z)}toNonIndexed(){function e(h,m){const d=h.array,g=h.itemSize,_=h.normalized,v=new d.constructor(m.length*g);let x=0,b=0;for(let w=0,y=m.length;w<y;w++){h.isInterleavedBufferAttribute?x=m[w]*h.data.stride+h.offset:x=m[w]*g;for(let M=0;M<g;M++)v[b++]=d[x++]}return new Ta(v,g,_)}if(this.index===null)return lt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new ki,r=this.index.array,o=this.attributes;for(const h in o){const m=o[h],d=e(m,r);i.setAttribute(h,d)}const c=this.morphAttributes;for(const h in c){const m=[],d=c[h];for(let g=0,_=d.length;g<_;g++){const v=d[g],x=e(v,r);m.push(x)}i.morphAttributes[h]=m}i.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let h=0,m=u.length;h<m;h++){const d=u[h];i.addGroup(d.start,d.count,d.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const m=this.parameters;for(const d in m)m[d]!==void 0&&(e[d]=m[d]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const d=r[m];e.data.attributes[m]=d.toJSON(e.data)}const o={};let c=!1;for(const m in this.morphAttributes){const d=this.morphAttributes[m],g=[];for(let _=0,v=d.length;_<v;_++){const x=d[_];g.push(x.toJSON(e.data))}g.length>0&&(o[m]=g,c=!0)}c&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const d in o){const g=o[d];this.setAttribute(d,g.clone(i))}const c=e.morphAttributes;for(const d in c){const g=[],_=c[d];for(let v=0,x=_.length;v<x;v++)g.push(_[v].clone(i));this.morphAttributes[d]=g}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let d=0,g=u.length;d<g;d++){const _=u[d];this.addGroup(_.start,_.count,_.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let HE=0;class Fu extends br{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:HE++}),this.uuid=Lo(),this.name="",this.type="Material",this.blending=yo,this.side=is,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ih,this.blendDst=Fh,this.blendEquation=_r,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xt(0,0,0),this.blendAlpha=0,this.depthFunc=Ro,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=V_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=so,this.stencilZFail=so,this.stencilZPass=so,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){lt(`Material: parameter '${i}' has value of undefined.`);continue}const o=this[i];if(o===void 0){lt(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector2&&r&&r.isVector2||o&&o.isEuler&&r&&r.isEuler||o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==yo&&(r.blending=this.blending),this.side!==is&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Ih&&(r.blendSrc=this.blendSrc),this.blendDst!==Fh&&(r.blendDst=this.blendDst),this.blendEquation!==_r&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Ro&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==V_&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==so&&(r.stencilFail=this.stencilFail),this.stencilZFail!==so&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==so&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(c){const u=[];for(const h in c){const m=c[h];delete m.metadata,u.push(m)}return u}if(i){const c=o(e.textures),u=o(e.images);c.length>0&&(r.textures=c),u.length>0&&(r.images=u)}return r}fromJSON(e,i){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Xt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=i[e.map]||null),e.matcap!==void 0&&(this.matcap=i[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=i[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=i[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=i[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),this.normalScale=new It().fromArray(r)}return e.displacementMap!==void 0&&(this.displacementMap=i[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=i[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=i[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=i[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=i[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=i[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=i[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=i[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=i[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=i[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=i[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=i[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=i[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=i[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new It().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=i[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=i[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=i[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=i[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=i[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=i[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=i[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const o=i.length;r=new Array(o);for(let c=0;c!==o;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Ja=new ae,ph=new ae,au=new ae,Is=new ae,mh=new ae,su=new ae,gh=new ae;class GE{constructor(e=new ae,i=new ae(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ja)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=Ja.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(Ja.copy(this.origin).addScaledVector(this.direction,i),Ja.distanceToSquared(e))}distanceSqToSegment(e,i,r,o){ph.copy(e).add(i).multiplyScalar(.5),au.copy(i).sub(e).normalize(),Is.copy(this.origin).sub(ph);const c=e.distanceTo(i)*.5,u=-this.direction.dot(au),h=Is.dot(this.direction),m=-Is.dot(au),d=Is.lengthSq(),g=Math.abs(1-u*u);let _,v,x,b;if(g>0)if(_=u*m-h,v=u*h-m,b=c*g,_>=0)if(v>=-b)if(v<=b){const w=1/g;_*=w,v*=w,x=_*(_+u*v+2*h)+v*(u*_+v+2*m)+d}else v=c,_=Math.max(0,-(u*v+h)),x=-_*_+v*(v+2*m)+d;else v=-c,_=Math.max(0,-(u*v+h)),x=-_*_+v*(v+2*m)+d;else v<=-b?(_=Math.max(0,-(-u*c+h)),v=_>0?-c:Math.min(Math.max(-c,-m),c),x=-_*_+v*(v+2*m)+d):v<=b?(_=0,v=Math.min(Math.max(-c,-m),c),x=v*(v+2*m)+d):(_=Math.max(0,-(u*c+h)),v=_>0?c:Math.min(Math.max(-c,-m),c),x=-_*_+v*(v+2*m)+d);else v=u>0?-c:c,_=Math.max(0,-(u*v+h)),x=-_*_+v*(v+2*m)+d;return r&&r.copy(this.origin).addScaledVector(this.direction,_),o&&o.copy(ph).addScaledVector(au,v),x}intersectSphere(e,i){Ja.subVectors(e.center,this.origin);const r=Ja.dot(this.direction),o=Ja.dot(Ja)-r*r,c=e.radius*e.radius;if(o>c)return null;const u=Math.sqrt(c-o),h=r-u,m=r+u;return m<0?null:h<0?this.at(m,i):this.at(h,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,o,c,u,h,m;const d=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,v=this.origin;return d>=0?(r=(e.min.x-v.x)*d,o=(e.max.x-v.x)*d):(r=(e.max.x-v.x)*d,o=(e.min.x-v.x)*d),g>=0?(c=(e.min.y-v.y)*g,u=(e.max.y-v.y)*g):(c=(e.max.y-v.y)*g,u=(e.min.y-v.y)*g),r>u||c>o||((c>r||isNaN(r))&&(r=c),(u<o||isNaN(o))&&(o=u),_>=0?(h=(e.min.z-v.z)*_,m=(e.max.z-v.z)*_):(h=(e.max.z-v.z)*_,m=(e.min.z-v.z)*_),r>m||h>o)||((h>r||r!==r)&&(r=h),(m<o||o!==o)&&(o=m),o<0)?null:this.at(r>=0?r:o,i)}intersectsBox(e){return this.intersectBox(e,Ja)!==null}intersectTriangle(e,i,r,o,c){mh.subVectors(i,e),su.subVectors(r,e),gh.crossVectors(mh,su);let u=this.direction.dot(gh),h;if(u>0){if(o)return null;h=1}else if(u<0)h=-1,u=-u;else return null;Is.subVectors(this.origin,e);const m=h*this.direction.dot(su.crossVectors(Is,su));if(m<0)return null;const d=h*this.direction.dot(mh.cross(Is));if(d<0||m+d>u)return null;const g=-h*Is.dot(gh);return g<0?null:this.at(g/u,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Nu extends Fu{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Er,this.combine=ux,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const sv=new En,dr=new GE,ru=new zp,rv=new ae,ou=new ae,lu=new ae,cu=new ae,_h=new ae,uu=new ae,ov=new ae,fu=new ae;class Ci extends wi{constructor(e=new ki,i=new Nu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const o=i[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const h=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(e,i){const r=this.geometry,o=r.attributes.position,c=r.morphAttributes.position,u=r.morphTargetsRelative;i.fromBufferAttribute(o,e);const h=this.morphTargetInfluences;if(c&&h){uu.set(0,0,0);for(let m=0,d=c.length;m<d;m++){const g=h[m],_=c[m];g!==0&&(_h.fromBufferAttribute(_,e),u?uu.addScaledVector(_h,g):uu.addScaledVector(_h.sub(i),g))}i.add(uu)}return i}raycast(e,i){const r=this.geometry,o=this.material,c=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),ru.copy(r.boundingSphere),ru.applyMatrix4(c),dr.copy(e.ray).recast(e.near),!(ru.containsPoint(dr.origin)===!1&&(dr.intersectSphere(ru,rv)===null||dr.origin.distanceToSquared(rv)>(e.far-e.near)**2))&&(sv.copy(c).invert(),dr.copy(e.ray).applyMatrix4(sv),!(r.boundingBox!==null&&dr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,dr)))}_computeIntersections(e,i,r){let o;const c=this.geometry,u=this.material,h=c.index,m=c.attributes.position,d=c.attributes.uv,g=c.attributes.uv1,_=c.attributes.normal,v=c.groups,x=c.drawRange;if(h!==null)if(Array.isArray(u))for(let b=0,w=v.length;b<w;b++){const y=v[b],M=u[y.materialIndex],I=Math.max(y.start,x.start),B=Math.min(h.count,Math.min(y.start+y.count,x.start+x.count));for(let C=I,O=B;C<O;C+=3){const L=h.getX(C),F=h.getX(C+1),T=h.getX(C+2);o=du(this,M,e,r,d,g,_,L,F,T),o&&(o.faceIndex=Math.floor(C/3),o.face.materialIndex=y.materialIndex,i.push(o))}}else{const b=Math.max(0,x.start),w=Math.min(h.count,x.start+x.count);for(let y=b,M=w;y<M;y+=3){const I=h.getX(y),B=h.getX(y+1),C=h.getX(y+2);o=du(this,u,e,r,d,g,_,I,B,C),o&&(o.faceIndex=Math.floor(y/3),i.push(o))}}else if(m!==void 0)if(Array.isArray(u))for(let b=0,w=v.length;b<w;b++){const y=v[b],M=u[y.materialIndex],I=Math.max(y.start,x.start),B=Math.min(m.count,Math.min(y.start+y.count,x.start+x.count));for(let C=I,O=B;C<O;C+=3){const L=C,F=C+1,T=C+2;o=du(this,M,e,r,d,g,_,L,F,T),o&&(o.faceIndex=Math.floor(C/3),o.face.materialIndex=y.materialIndex,i.push(o))}}else{const b=Math.max(0,x.start),w=Math.min(m.count,x.start+x.count);for(let y=b,M=w;y<M;y+=3){const I=y,B=y+1,C=y+2;o=du(this,u,e,r,d,g,_,I,B,C),o&&(o.faceIndex=Math.floor(y/3),i.push(o))}}}}function VE(a,e,i,r,o,c,u,h){let m;if(e.side===mi?m=r.intersectTriangle(u,c,o,!0,h):m=r.intersectTriangle(o,c,u,e.side===is,h),m===null)return null;fu.copy(h),fu.applyMatrix4(a.matrixWorld);const d=i.ray.origin.distanceTo(fu);return d<i.near||d>i.far?null:{distance:d,point:fu.clone(),object:a}}function du(a,e,i,r,o,c,u,h,m,d){a.getVertexPosition(h,ou),a.getVertexPosition(m,lu),a.getVertexPosition(d,cu);const g=VE(a,e,i,r,ou,lu,cu,ov);if(g){const _=new ae;na.getBarycoord(ov,ou,lu,cu,_),o&&(g.uv=na.getInterpolatedAttribute(o,h,m,d,_,new It)),c&&(g.uv1=na.getInterpolatedAttribute(c,h,m,d,_,new It)),u&&(g.normal=na.getInterpolatedAttribute(u,h,m,d,_,new ae),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const v={a:h,b:m,c:d,normal:new ae,materialIndex:0};na.getNormal(ou,lu,cu,v.normal),g.face=v,g.barycoord=_}return g}class kE extends Zn{constructor(e=null,i=1,r=1,o,c,u,h,m,d=jn,g=jn,_,v){super(null,u,h,m,d,g,o,c,_,v),this.isDataTexture=!0,this.image={data:e,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const vh=new ae,XE=new ae,WE=new dt;class mr{constructor(e=new ae(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,o){return this.normal.set(e,i,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const o=vh.subVectors(r,i).cross(XE.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i,r=!0){const o=e.delta(vh),c=this.normal.dot(o);if(c===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/c;return r===!0&&(u<0||u>1)?null:i.copy(e.start).addScaledVector(o,u)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||WE.getNormalMatrix(e),o=this.coplanarPoint(vh).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const hr=new zp,qE=new It(.5,.5),hu=new ae;class Nx{constructor(e=new mr,i=new mr,r=new mr,o=new mr,c=new mr,u=new mr){this.planes=[e,i,r,o,c,u]}set(e,i,r,o,c,u){const h=this.planes;return h[0].copy(e),h[1].copy(i),h[2].copy(r),h[3].copy(o),h[4].copy(c),h[5].copy(u),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=ya,r=!1){const o=this.planes,c=e.elements,u=c[0],h=c[1],m=c[2],d=c[3],g=c[4],_=c[5],v=c[6],x=c[7],b=c[8],w=c[9],y=c[10],M=c[11],I=c[12],B=c[13],C=c[14],O=c[15];if(o[0].setComponents(d-u,x-g,M-b,O-I).normalize(),o[1].setComponents(d+u,x+g,M+b,O+I).normalize(),o[2].setComponents(d+h,x+_,M+w,O+B).normalize(),o[3].setComponents(d-h,x-_,M-w,O-B).normalize(),r)o[4].setComponents(m,v,y,C).normalize(),o[5].setComponents(d-m,x-v,M-y,O-C).normalize();else if(o[4].setComponents(d-m,x-v,M-y,O-C).normalize(),i===ya)o[5].setComponents(d+m,x+v,M+y,O+C).normalize();else if(i===Du)o[5].setComponents(m,v,y,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),hr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),hr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(hr)}intersectsSprite(e){hr.center.set(0,0,0);const i=qE.distanceTo(e.center);return hr.radius=.7071067811865476+i,hr.applyMatrix4(e.matrixWorld),this.intersectsSphere(hr)}intersectsSphere(e){const i=this.planes,r=e.center,o=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const o=i[r];if(hu.x=o.normal.x>0?e.max.x:e.min.x,hu.y=o.normal.y>0?e.max.y:e.min.y,hu.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(hu)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class YE extends Zn{constructor(e,i,r,o,c=pn,u=pn,h,m,d){super(e,i,r,o,c,u,h,m,d),this.isVideoTexture=!0,this.generateMipmaps=!1,this._requestVideoFrameCallbackId=0;const g=this;function _(){g.needsUpdate=!0,g._requestVideoFrameCallbackId=e.requestVideoFrameCallback(_)}"requestVideoFrameCallback"in e&&(this._requestVideoFrameCallbackId=e.requestVideoFrameCallback(_))}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}dispose(){this._requestVideoFrameCallbackId!==0&&(this.source.data.cancelVideoFrameCallback(this._requestVideoFrameCallbackId),this._requestVideoFrameCallbackId=0),super.dispose()}}class Ux extends Zn{constructor(e=[],i=Mr,r,o,c,u,h,m,d,g){super(e,i,r,o,c,u,h,m,d,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ox extends Zn{constructor(e,i,r,o,c,u,h,m,d){super(e,i,r,o,c,u,h,m,d),this.isCanvasTexture=!0,this.needsUpdate=!0}}class wo extends Zn{constructor(e,i,r=Aa,o,c,u,h=jn,m=jn,d,g=ss,_=1){if(g!==ss&&g!==Sr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:e,height:i,depth:_};super(v,o,c,u,h,m,g,r,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Bp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class jE extends wo{constructor(e,i=Aa,r=Mr,o,c,u=jn,h=jn,m,d=ss){const g={width:e,height:e,depth:1},_=[g,g,g,g,g,g];super(e,e,i,r,o,c,u,h,m,d),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Px extends Zn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Vl extends ki{constructor(e=1,i=1,r=1,o=1,c=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:o,heightSegments:c,depthSegments:u};const h=this;o=Math.floor(o),c=Math.floor(c),u=Math.floor(u);const m=[],d=[],g=[],_=[];let v=0,x=0;b("z","y","x",-1,-1,r,i,e,u,c,0),b("z","y","x",1,-1,r,i,-e,u,c,1),b("x","z","y",1,1,e,r,i,o,u,2),b("x","z","y",1,-1,e,r,-i,o,u,3),b("x","y","z",1,-1,e,i,r,o,c,4),b("x","y","z",-1,-1,e,i,-r,o,c,5),this.setIndex(m),this.setAttribute("position",new Vi(d,3)),this.setAttribute("normal",new Vi(g,3)),this.setAttribute("uv",new Vi(_,2));function b(w,y,M,I,B,C,O,L,F,T,N){const Z=C/F,k=O/T,j=C/2,me=O/2,ce=L/2,X=F+1,z=T+1;let H=0,Q=0;const fe=new ae;for(let xe=0;xe<z;xe++){const U=xe*k-me;for(let W=0;W<X;W++){const ye=W*Z-j;fe[w]=ye*I,fe[y]=U*B,fe[M]=ce,d.push(fe.x,fe.y,fe.z),fe[w]=0,fe[y]=0,fe[M]=L>0?1:-1,g.push(fe.x,fe.y,fe.z),_.push(W/F),_.push(1-xe/T),H+=1}}for(let xe=0;xe<T;xe++)for(let U=0;U<F;U++){const W=v+U+X*xe,ye=v+U+X*(xe+1),Ce=v+(U+1)+X*(xe+1),Ge=v+(U+1)+X*xe;m.push(W,ye,Ge),m.push(ye,Ce,Ge),Q+=6}h.addGroup(x,Q,N),x+=Q,v+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class ZE{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){lt("Curve: .getPoint() not implemented.")}getPointAt(e,i){const r=this.getUtoTmapping(e);return this.getPoint(r,i)}getPoints(e=5){const i=[];for(let r=0;r<=e;r++)i.push(this.getPoint(r/e));return i}getSpacedPoints(e=5){const i=[];for(let r=0;r<=e;r++)i.push(this.getPointAt(r/e));return i}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const i=[];let r,o=this.getPoint(0),c=0;i.push(0);for(let u=1;u<=e;u++)r=this.getPoint(u/e),c+=r.distanceTo(o),i.push(c),o=r;return this.cacheArcLengths=i,i}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,i=null){const r=this.getLengths();let o=0;const c=r.length;let u;i?u=i:u=e*r[c-1];let h=0,m=c-1,d;for(;h<=m;)if(o=Math.floor(h+(m-h)/2),d=r[o]-u,d<0)h=o+1;else if(d>0)m=o-1;else{m=o;break}if(o=m,r[o]===u)return o/(c-1);const g=r[o],v=r[o+1]-g,x=(u-g)/v;return(o+x)/(c-1)}getTangent(e,i){let o=e-1e-4,c=e+1e-4;o<0&&(o=0),c>1&&(c=1);const u=this.getPoint(o),h=this.getPoint(c),m=i||(u.isVector2?new It:new ae);return m.copy(h).sub(u).normalize(),m}getTangentAt(e,i){const r=this.getUtoTmapping(e);return this.getTangent(r,i)}computeFrenetFrames(e,i=!1){const r=new ae,o=[],c=[],u=[],h=new ae,m=new En;for(let x=0;x<=e;x++){const b=x/e;o[x]=this.getTangentAt(b,new ae)}c[0]=new ae,u[0]=new ae;let d=Number.MAX_VALUE;const g=Math.abs(o[0].x),_=Math.abs(o[0].y),v=Math.abs(o[0].z);g<=d&&(d=g,r.set(1,0,0)),_<=d&&(d=_,r.set(0,1,0)),v<=d&&r.set(0,0,1),h.crossVectors(o[0],r).normalize(),c[0].crossVectors(o[0],h),u[0].crossVectors(o[0],c[0]);for(let x=1;x<=e;x++){if(c[x]=c[x-1].clone(),u[x]=u[x-1].clone(),h.crossVectors(o[x-1],o[x]),h.length()>Number.EPSILON){h.normalize();const b=Math.acos(St(o[x-1].dot(o[x]),-1,1));c[x].applyMatrix4(m.makeRotationAxis(h,b))}u[x].crossVectors(o[x],c[x])}if(i===!0){let x=Math.acos(St(c[0].dot(c[e]),-1,1));x/=e,o[0].dot(h.crossVectors(c[0],c[e]))>0&&(x=-x);for(let b=1;b<=e;b++)c[b].applyMatrix4(m.makeRotationAxis(o[b],x*b)),u[b].crossVectors(o[b],c[b])}return{tangents:o,normals:c,binormals:u}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}function Hp(){let a=0,e=0,i=0,r=0;function o(c,u,h,m){a=c,e=h,i=-3*c+3*u-2*h-m,r=2*c-2*u+h+m}return{initCatmullRom:function(c,u,h,m,d){o(u,h,d*(h-c),d*(m-u))},initNonuniformCatmullRom:function(c,u,h,m,d,g,_){let v=(u-c)/d-(h-c)/(d+g)+(h-u)/g,x=(h-u)/g-(m-u)/(g+_)+(m-h)/_;v*=g,x*=g,o(u,h,v,x)},calc:function(c){const u=c*c,h=u*c;return a+e*c+i*u+r*h}}}const lv=new ae,cv=new ae,xh=new Hp,Sh=new Hp,Mh=new Hp;class KE extends ZE{constructor(e=[],i=!1,r="centripetal",o=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=i,this.curveType=r,this.tension=o}getPoint(e,i=new ae){const r=i,o=this.points,c=o.length,u=(c-(this.closed?0:1))*e;let h=Math.floor(u),m=u-h;this.closed?h+=h>0?0:(Math.floor(Math.abs(h)/c)+1)*c:m===0&&h===c-1&&(h=c-2,m=1);let d,g;this.closed||h>0?d=o[(h-1)%c]:(cv.subVectors(o[0],o[1]).add(o[0]),d=cv);const _=o[h%c],v=o[(h+1)%c];if(this.closed||h+2<c?g=o[(h+2)%c]:(lv.subVectors(o[c-1],o[c-2]).add(o[c-1]),g=lv),this.curveType==="centripetal"||this.curveType==="chordal"){const x=this.curveType==="chordal"?.5:.25;let b=Math.pow(d.distanceToSquared(_),x),w=Math.pow(_.distanceToSquared(v),x),y=Math.pow(v.distanceToSquared(g),x);w<1e-4&&(w=1),b<1e-4&&(b=w),y<1e-4&&(y=w),xh.initNonuniformCatmullRom(d.x,_.x,v.x,g.x,b,w,y),Sh.initNonuniformCatmullRom(d.y,_.y,v.y,g.y,b,w,y),Mh.initNonuniformCatmullRom(d.z,_.z,v.z,g.z,b,w,y)}else this.curveType==="catmullrom"&&(xh.initCatmullRom(d.x,_.x,v.x,g.x,this.tension),Sh.initCatmullRom(d.y,_.y,v.y,g.y,this.tension),Mh.initCatmullRom(d.z,_.z,v.z,g.z,this.tension));return r.set(xh.calc(m),Sh.calc(m),Mh.calc(m)),r}copy(e){super.copy(e),this.points=[];for(let i=0,r=e.points.length;i<r;i++){const o=e.points[i];this.points.push(o.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let i=0,r=this.points.length;i<r;i++){const o=this.points[i];e.points.push(o.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let i=0,r=e.points.length;i<r;i++){const o=e.points[i];this.points.push(new ae().fromArray(o))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}class Hs extends ki{constructor(e=1,i=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:o};const c=e/2,u=i/2,h=Math.floor(r),m=Math.floor(o),d=h+1,g=m+1,_=e/h,v=i/m,x=[],b=[],w=[],y=[];for(let M=0;M<g;M++){const I=M*v-u;for(let B=0;B<d;B++){const C=B*_-c;b.push(C,-I,0),w.push(0,0,1),y.push(B/h),y.push(1-M/m)}}for(let M=0;M<m;M++)for(let I=0;I<h;I++){const B=I+d*M,C=I+d*(M+1),O=I+1+d*(M+1),L=I+1+d*M;x.push(B,C,L),x.push(C,O,L)}this.setIndex(x),this.setAttribute("position",new Vi(b,3)),this.setAttribute("normal",new Vi(w,3)),this.setAttribute("uv",new Vi(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hs(e.width,e.height,e.widthSegments,e.heightSegments)}}function Do(a){const e={};for(const i in a){e[i]={};for(const r in a[i]){const o=a[i][r];if(uv(o))o.isRenderTargetTexture?(lt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=o.clone();else if(Array.isArray(o))if(uv(o[0])){const c=[];for(let u=0,h=o.length;u<h;u++)c[u]=o[u].clone();e[i][r]=c}else e[i][r]=o.slice();else e[i][r]=o}}return e}function ri(a){const e={};for(let i=0;i<a.length;i++){const r=Do(a[i]);for(const o in r)e[o]=r[o]}return e}function uv(a){return a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)}function QE(a){const e=[];for(let i=0;i<a.length;i++)e.push(a[i].clone());return e}function Ix(a){const e=a.getRenderTarget();return e===null?a.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Rt.workingColorSpace}const JE={clone:Do,merge:ri};var $E=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,eb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Xi extends Fu{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$E,this.fragmentShader=eb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Do(e.uniforms),this.uniformsGroups=QE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?i.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?i.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?i.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?i.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?i.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?i.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?i.uniforms[o]={type:"m4",value:u.toArray()}:i.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}fromJSON(e,i){if(super.fromJSON(e,i),e.uniforms!==void 0)for(const r in e.uniforms){const o=e.uniforms[r];switch(this.uniforms[r]={},o.type){case"t":this.uniforms[r].value=i[o.value]||null;break;case"c":this.uniforms[r].value=new Xt().setHex(o.value);break;case"v2":this.uniforms[r].value=new It().fromArray(o.value);break;case"v3":this.uniforms[r].value=new ae().fromArray(o.value);break;case"v4":this.uniforms[r].value=new xn().fromArray(o.value);break;case"m3":this.uniforms[r].value=new dt().fromArray(o.value);break;case"m4":this.uniforms[r].value=new En().fromArray(o.value);break;default:this.uniforms[r].value=o.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)this.extensions[r]=e.extensions[r];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class tb extends Xi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class nb extends Fu{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Zy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ib extends Fu{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const pu=new ae,mu=new No,_a=new ae;class Fx extends wi{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new En,this.projectionMatrix=new En,this.projectionMatrixInverse=new En,this.coordinateSystem=ya,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(pu,mu,_a),_a.x===1&&_a.y===1&&_a.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(pu,mu,_a.set(1,1,1)).invert()}updateWorldMatrix(e,i,r=!1){super.updateWorldMatrix(e,i,r),this.matrixWorld.decompose(pu,mu,_a),_a.x===1&&_a.y===1&&_a.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(pu,mu,_a.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Fs=new ae,fv=new It,dv=new It;class Hi extends Fx{constructor(e=50,i=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=zl*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ol*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return zl*2*Math.atan(Math.tan(Ol*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){Fs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Fs.x,Fs.y).multiplyScalar(-e/Fs.z),Fs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Fs.x,Fs.y).multiplyScalar(-e/Fs.z)}getViewSize(e,i){return this.getViewBounds(e,fv,dv),i.subVectors(dv,fv)}setViewOffset(e,i,r,o,c,u){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Ol*.5*this.fov)/this.zoom,r=2*i,o=this.aspect*r,c=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const m=u.fullWidth,d=u.fullHeight;c+=u.offsetX*o/m,i-=u.offsetY*r/d,o*=u.width/m,r*=u.height/d}const h=this.filmOffset;h!==0&&(c+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+o,i,i-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class Bx extends Fx{constructor(e=-1,i=1,r=1,o=-1,c=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=o,this.near=c,this.far=u,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,o,c,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let c=r-e,u=r+e,h=o+i,m=o-i;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=d*this.view.offsetX,u=c+d*this.view.width,h-=g*this.view.offsetY,m=h-g*this.view.height}this.projectionMatrix.makeOrthographic(c,u,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const _o=-90,vo=1;class ab extends wi{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Hi(_o,vo,e,i);o.layers=this.layers,this.add(o);const c=new Hi(_o,vo,e,i);c.layers=this.layers,this.add(c);const u=new Hi(_o,vo,e,i);u.layers=this.layers,this.add(u);const h=new Hi(_o,vo,e,i);h.layers=this.layers,this.add(h);const m=new Hi(_o,vo,e,i);m.layers=this.layers,this.add(m);const d=new Hi(_o,vo,e,i);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,o,c,u,h,m]=i;for(const d of i)this.remove(d);if(e===ya)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===Du)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const d of i)this.add(d),d.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,u,h,m,d,g]=this.children,_=e.getRenderTarget(),v=e.getActiveCubeFace(),x=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const w=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let y=!1;e.isWebGLRenderer===!0?y=e.state.buffers.depth.getReversed():y=e.reversedDepthBuffer,e.setRenderTarget(r,0,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,c),e.setRenderTarget(r,1,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,u),e.setRenderTarget(r,2,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,h),e.setRenderTarget(r,3,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,m),e.setRenderTarget(r,4,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,d),r.texture.generateMipmaps=w,e.setRenderTarget(r,5,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,g),e.setRenderTarget(_,v,x),e.xr.enabled=b,r.texture.needsPMREMUpdate=!0}}class sb extends Hi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Qp=class Qp{constructor(e,i,r,o){this.elements=[1,0,0,1],e!==void 0&&this.set(e,i,r,o)}identity(){return this.set(1,0,0,1),this}fromArray(e,i=0){for(let r=0;r<4;r++)this.elements[r]=e[r+i];return this}set(e,i,r,o){const c=this.elements;return c[0]=e,c[2]=i,c[1]=r,c[3]=o,this}};Qp.prototype.isMatrix2=!0;let hv=Qp;function pv(a,e,i,r){const o=rb(r);switch(i){case Ex:return a*e;case Tx:return a*e/o.components*o.byteLength;case Np:return a*e/o.components*o.byteLength;case yr:return a*e*2/o.components*o.byteLength;case Up:return a*e*2/o.components*o.byteLength;case bx:return a*e*3/o.components*o.byteLength;case aa:return a*e*4/o.components*o.byteLength;case Op:return a*e*4/o.components*o.byteLength;case Su:case Mu:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case yu:case Eu:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case jh:case Kh:return Math.max(a,16)*Math.max(e,8)/4;case Yh:case Zh:return Math.max(a,8)*Math.max(e,8)/2;case Qh:case Jh:case ep:case tp:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case $h:case Au:case np:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case ip:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case ap:return Math.floor((a+4)/5)*Math.floor((e+3)/4)*16;case sp:return Math.floor((a+4)/5)*Math.floor((e+4)/5)*16;case rp:return Math.floor((a+5)/6)*Math.floor((e+4)/5)*16;case op:return Math.floor((a+5)/6)*Math.floor((e+5)/6)*16;case lp:return Math.floor((a+7)/8)*Math.floor((e+4)/5)*16;case cp:return Math.floor((a+7)/8)*Math.floor((e+5)/6)*16;case up:return Math.floor((a+7)/8)*Math.floor((e+7)/8)*16;case fp:return Math.floor((a+9)/10)*Math.floor((e+4)/5)*16;case dp:return Math.floor((a+9)/10)*Math.floor((e+5)/6)*16;case hp:return Math.floor((a+9)/10)*Math.floor((e+7)/8)*16;case pp:return Math.floor((a+9)/10)*Math.floor((e+9)/10)*16;case mp:return Math.floor((a+11)/12)*Math.floor((e+9)/10)*16;case gp:return Math.floor((a+11)/12)*Math.floor((e+11)/12)*16;case _p:case vp:case xp:return Math.ceil(a/4)*Math.ceil(e/4)*16;case Sp:case Mp:return Math.ceil(a/4)*Math.ceil(e/4)*8;case Ru:case yp:return Math.ceil(a/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function rb(a){switch(a){case Gi:case xx:return{byteLength:1,components:1};case Fl:case Sx:case as:return{byteLength:2,components:1};case Dp:case Lp:return{byteLength:2,components:4};case Aa:case wp:case Ma:return{byteLength:4,components:1};case Mx:case yx:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${a}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Cp}}));typeof window<"u"&&(window.__THREE__?lt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Cp);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function zx(){let a=null,e=!1,i=null,r=null;function o(c,u){i(c,u),r=a.requestAnimationFrame(o)}return{start:function(){e!==!0&&i!==null&&a!==null&&(r=a.requestAnimationFrame(o),e=!0)},stop:function(){a!==null&&a.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){a=c}}}function ob(a){const e=new WeakMap;function i(h,m){const d=h.array,g=h.usage,_=d.byteLength,v=a.createBuffer();a.bindBuffer(m,v),a.bufferData(m,d,g),h.onUploadCallback();let x;if(d instanceof Float32Array)x=a.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)x=a.HALF_FLOAT;else if(d instanceof Uint16Array)h.isFloat16BufferAttribute?x=a.HALF_FLOAT:x=a.UNSIGNED_SHORT;else if(d instanceof Int16Array)x=a.SHORT;else if(d instanceof Uint32Array)x=a.UNSIGNED_INT;else if(d instanceof Int32Array)x=a.INT;else if(d instanceof Int8Array)x=a.BYTE;else if(d instanceof Uint8Array)x=a.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)x=a.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:v,type:x,bytesPerElement:d.BYTES_PER_ELEMENT,version:h.version,size:_}}function r(h,m,d){const g=m.array,_=m.updateRanges;if(a.bindBuffer(d,h),_.length===0)a.bufferSubData(d,0,g);else{_.sort((x,b)=>x.start-b.start);let v=0;for(let x=1;x<_.length;x++){const b=_[v],w=_[x];w.start<=b.start+b.count+1?b.count=Math.max(b.count,w.start+w.count-b.start):(++v,_[v]=w)}_.length=v+1;for(let x=0,b=_.length;x<b;x++){const w=_[x];a.bufferSubData(d,w.start*g.BYTES_PER_ELEMENT,g,w.start,w.count)}m.clearUpdateRanges()}m.onUploadCallback()}function o(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=e.get(h);m&&(a.deleteBuffer(m.buffer),e.delete(h))}function u(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const g=e.get(h);(!g||g.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const d=e.get(h);if(d===void 0)e.set(h,i(h,m));else if(d.version<h.version){if(d.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(d.buffer,h,m),d.version=h.version}}return{get:o,remove:c,update:u}}var lb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,cb=`#ifdef USE_ALPHAHASH
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
#endif`,ub=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,fb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,db=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,hb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,pb=`#ifdef USE_AOMAP
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
#endif`,mb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,gb=`#ifdef USE_BATCHING
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
#endif`,_b=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,vb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,xb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Sb=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Mb=`#ifdef USE_IRIDESCENCE
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
#endif`,yb=`#ifdef USE_BUMPMAP
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
#endif`,Eb=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,bb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Tb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ab=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Rb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Cb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,wb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Db=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Lb=`#define PI 3.141592653589793
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
} // validated`,Nb=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ub=`vec3 transformedNormal = objectNormal;
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
#endif`,Ob=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Pb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ib=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Fb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Bb="gl_FragColor = linearToOutputTexel( gl_FragColor );",zb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Hb=`#ifdef USE_ENVMAP
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
#endif`,Gb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Vb=`#ifdef USE_ENVMAP
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
#endif`,kb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Xb=`#ifdef USE_ENVMAP
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
#endif`,Wb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,qb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Yb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,jb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Zb=`#ifdef USE_GRADIENTMAP
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
}`,Kb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Qb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Jb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$b=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,e1=`#ifdef USE_ENVMAP
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
#endif`,t1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,n1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,i1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,a1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,s1=`PhysicalMaterial material;
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
#endif`,r1=`uniform sampler2D dfgLUT;
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
}`,o1=`
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
#endif`,l1=`#if defined( RE_IndirectDiffuse )
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
#endif`,c1=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,u1=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,f1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,d1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,h1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,p1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,m1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,g1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,v1=`#if defined( USE_POINTS_UV )
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
#endif`,x1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,S1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,M1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,y1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,E1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,b1=`#ifdef USE_MORPHTARGETS
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
#endif`,T1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,A1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,R1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,C1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,w1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,D1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,L1=`#ifdef USE_NORMALMAP
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
#endif`,N1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,U1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,O1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,P1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,I1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,F1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,B1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,z1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,H1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,G1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,V1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,k1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,X1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,W1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,q1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Y1=`float getShadowMask() {
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
}`,j1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Z1=`#ifdef USE_SKINNING
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
#endif`,K1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Q1=`#ifdef USE_SKINNING
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
#endif`,J1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,$1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,eT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tT=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,nT=`#ifdef USE_TRANSMISSION
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
#endif`,iT=`#ifdef USE_TRANSMISSION
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
#endif`,aT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,oT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const lT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,cT=`uniform sampler2D t2D;
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
}`,uT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fT=`#ifdef ENVMAP_TYPE_CUBE
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
}`,dT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pT=`#include <common>
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
}`,mT=`#if DEPTH_PACKING == 3200
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
}`,gT=`#define DISTANCE
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
}`,_T=`#define DISTANCE
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
}`,vT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,xT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ST=`uniform float scale;
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
}`,MT=`uniform vec3 diffuse;
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
}`,yT=`#include <common>
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
}`,ET=`uniform vec3 diffuse;
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
}`,bT=`#define LAMBERT
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
}`,TT=`#define LAMBERT
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
}`,AT=`#define MATCAP
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
}`,RT=`#define MATCAP
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
}`,CT=`#define NORMAL
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
}`,wT=`#define NORMAL
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
}`,DT=`#define PHONG
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
}`,LT=`#define PHONG
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
}`,NT=`#define STANDARD
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
}`,UT=`#define STANDARD
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
}`,OT=`#define TOON
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
}`,PT=`#define TOON
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
}`,IT=`uniform float size;
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
}`,FT=`uniform vec3 diffuse;
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
}`,BT=`#include <common>
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
}`,zT=`uniform vec3 color;
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
}`,HT=`uniform float rotation;
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
}`,GT=`uniform vec3 diffuse;
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
}`,xt={alphahash_fragment:lb,alphahash_pars_fragment:cb,alphamap_fragment:ub,alphamap_pars_fragment:fb,alphatest_fragment:db,alphatest_pars_fragment:hb,aomap_fragment:pb,aomap_pars_fragment:mb,batching_pars_vertex:gb,batching_vertex:_b,begin_vertex:vb,beginnormal_vertex:xb,bsdfs:Sb,iridescence_fragment:Mb,bumpmap_pars_fragment:yb,clipping_planes_fragment:Eb,clipping_planes_pars_fragment:bb,clipping_planes_pars_vertex:Tb,clipping_planes_vertex:Ab,color_fragment:Rb,color_pars_fragment:Cb,color_pars_vertex:wb,color_vertex:Db,common:Lb,cube_uv_reflection_fragment:Nb,defaultnormal_vertex:Ub,displacementmap_pars_vertex:Ob,displacementmap_vertex:Pb,emissivemap_fragment:Ib,emissivemap_pars_fragment:Fb,colorspace_fragment:Bb,colorspace_pars_fragment:zb,envmap_fragment:Hb,envmap_common_pars_fragment:Gb,envmap_pars_fragment:Vb,envmap_pars_vertex:kb,envmap_physical_pars_fragment:e1,envmap_vertex:Xb,fog_vertex:Wb,fog_pars_vertex:qb,fog_fragment:Yb,fog_pars_fragment:jb,gradientmap_pars_fragment:Zb,lightmap_pars_fragment:Kb,lights_lambert_fragment:Qb,lights_lambert_pars_fragment:Jb,lights_pars_begin:$b,lights_toon_fragment:t1,lights_toon_pars_fragment:n1,lights_phong_fragment:i1,lights_phong_pars_fragment:a1,lights_physical_fragment:s1,lights_physical_pars_fragment:r1,lights_fragment_begin:o1,lights_fragment_maps:l1,lights_fragment_end:c1,lightprobes_pars_fragment:u1,logdepthbuf_fragment:f1,logdepthbuf_pars_fragment:d1,logdepthbuf_pars_vertex:h1,logdepthbuf_vertex:p1,map_fragment:m1,map_pars_fragment:g1,map_particle_fragment:_1,map_particle_pars_fragment:v1,metalnessmap_fragment:x1,metalnessmap_pars_fragment:S1,morphinstance_vertex:M1,morphcolor_vertex:y1,morphnormal_vertex:E1,morphtarget_pars_vertex:b1,morphtarget_vertex:T1,normal_fragment_begin:A1,normal_fragment_maps:R1,normal_pars_fragment:C1,normal_pars_vertex:w1,normal_vertex:D1,normalmap_pars_fragment:L1,clearcoat_normal_fragment_begin:N1,clearcoat_normal_fragment_maps:U1,clearcoat_pars_fragment:O1,iridescence_pars_fragment:P1,opaque_fragment:I1,packing:F1,premultiplied_alpha_fragment:B1,project_vertex:z1,dithering_fragment:H1,dithering_pars_fragment:G1,roughnessmap_fragment:V1,roughnessmap_pars_fragment:k1,shadowmap_pars_fragment:X1,shadowmap_pars_vertex:W1,shadowmap_vertex:q1,shadowmask_pars_fragment:Y1,skinbase_vertex:j1,skinning_pars_vertex:Z1,skinning_vertex:K1,skinnormal_vertex:Q1,specularmap_fragment:J1,specularmap_pars_fragment:$1,tonemapping_fragment:eT,tonemapping_pars_fragment:tT,transmission_fragment:nT,transmission_pars_fragment:iT,uv_pars_fragment:aT,uv_pars_vertex:sT,uv_vertex:rT,worldpos_vertex:oT,background_vert:lT,background_frag:cT,backgroundCube_vert:uT,backgroundCube_frag:fT,cube_vert:dT,cube_frag:hT,depth_vert:pT,depth_frag:mT,distance_vert:gT,distance_frag:_T,equirect_vert:vT,equirect_frag:xT,linedashed_vert:ST,linedashed_frag:MT,meshbasic_vert:yT,meshbasic_frag:ET,meshlambert_vert:bT,meshlambert_frag:TT,meshmatcap_vert:AT,meshmatcap_frag:RT,meshnormal_vert:CT,meshnormal_frag:wT,meshphong_vert:DT,meshphong_frag:LT,meshphysical_vert:NT,meshphysical_frag:UT,meshtoon_vert:OT,meshtoon_frag:PT,points_vert:IT,points_frag:FT,shadow_vert:BT,shadow_frag:zT,sprite_vert:HT,sprite_frag:GT},Xe={common:{diffuse:{value:new Xt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new dt}},envmap:{envMap:{value:null},envMapRotation:{value:new dt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new dt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new dt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new dt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new dt},normalScale:{value:new It(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new dt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new dt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new dt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new dt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new ae},probesMax:{value:new ae},probesResolution:{value:new ae}},points:{diffuse:{value:new Xt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0},uvTransform:{value:new dt}},sprite:{diffuse:{value:new Xt(16777215)},opacity:{value:1},center:{value:new It(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}}},xa={basic:{uniforms:ri([Xe.common,Xe.specularmap,Xe.envmap,Xe.aomap,Xe.lightmap,Xe.fog]),vertexShader:xt.meshbasic_vert,fragmentShader:xt.meshbasic_frag},lambert:{uniforms:ri([Xe.common,Xe.specularmap,Xe.envmap,Xe.aomap,Xe.lightmap,Xe.emissivemap,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.fog,Xe.lights,{emissive:{value:new Xt(0)},envMapIntensity:{value:1}}]),vertexShader:xt.meshlambert_vert,fragmentShader:xt.meshlambert_frag},phong:{uniforms:ri([Xe.common,Xe.specularmap,Xe.envmap,Xe.aomap,Xe.lightmap,Xe.emissivemap,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.fog,Xe.lights,{emissive:{value:new Xt(0)},specular:{value:new Xt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:xt.meshphong_vert,fragmentShader:xt.meshphong_frag},standard:{uniforms:ri([Xe.common,Xe.envmap,Xe.aomap,Xe.lightmap,Xe.emissivemap,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.roughnessmap,Xe.metalnessmap,Xe.fog,Xe.lights,{emissive:{value:new Xt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:xt.meshphysical_vert,fragmentShader:xt.meshphysical_frag},toon:{uniforms:ri([Xe.common,Xe.aomap,Xe.lightmap,Xe.emissivemap,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.gradientmap,Xe.fog,Xe.lights,{emissive:{value:new Xt(0)}}]),vertexShader:xt.meshtoon_vert,fragmentShader:xt.meshtoon_frag},matcap:{uniforms:ri([Xe.common,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.fog,{matcap:{value:null}}]),vertexShader:xt.meshmatcap_vert,fragmentShader:xt.meshmatcap_frag},points:{uniforms:ri([Xe.points,Xe.fog]),vertexShader:xt.points_vert,fragmentShader:xt.points_frag},dashed:{uniforms:ri([Xe.common,Xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:xt.linedashed_vert,fragmentShader:xt.linedashed_frag},depth:{uniforms:ri([Xe.common,Xe.displacementmap]),vertexShader:xt.depth_vert,fragmentShader:xt.depth_frag},normal:{uniforms:ri([Xe.common,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,{opacity:{value:1}}]),vertexShader:xt.meshnormal_vert,fragmentShader:xt.meshnormal_frag},sprite:{uniforms:ri([Xe.sprite,Xe.fog]),vertexShader:xt.sprite_vert,fragmentShader:xt.sprite_frag},background:{uniforms:{uvTransform:{value:new dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:xt.background_vert,fragmentShader:xt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new dt}},vertexShader:xt.backgroundCube_vert,fragmentShader:xt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:xt.cube_vert,fragmentShader:xt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:xt.equirect_vert,fragmentShader:xt.equirect_frag},distance:{uniforms:ri([Xe.common,Xe.displacementmap,{referencePosition:{value:new ae},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:xt.distance_vert,fragmentShader:xt.distance_frag},shadow:{uniforms:ri([Xe.lights,Xe.fog,{color:{value:new Xt(0)},opacity:{value:1}}]),vertexShader:xt.shadow_vert,fragmentShader:xt.shadow_frag}};xa.physical={uniforms:ri([xa.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new dt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new dt},clearcoatNormalScale:{value:new It(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new dt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new dt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new dt},sheen:{value:0},sheenColor:{value:new Xt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new dt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new dt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new dt},transmissionSamplerSize:{value:new It},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new dt},attenuationDistance:{value:0},attenuationColor:{value:new Xt(0)},specularColor:{value:new Xt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new dt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new dt},anisotropyVector:{value:new It},anisotropyMap:{value:null},anisotropyMapTransform:{value:new dt}}]),vertexShader:xt.meshphysical_vert,fragmentShader:xt.meshphysical_frag};const gu={r:0,b:0,g:0},VT=new En,Hx=new dt;Hx.set(-1,0,0,0,1,0,0,0,1);function kT(a,e,i,r,o,c){const u=new Xt(0);let h=o===!0?0:1,m,d,g=null,_=0,v=null;function x(I){let B=I.isScene===!0?I.background:null;if(B&&B.isTexture){const C=I.backgroundBlurriness>0;B=e.get(B,C)}return B}function b(I){let B=!1;const C=x(I);C===null?y(u,h):C&&C.isColor&&(y(C,1),B=!0);const O=a.xr.getEnvironmentBlendMode();O==="additive"?i.buffers.color.setClear(0,0,0,1,c):O==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(a.autoClear||B)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil))}function w(I,B){const C=x(B);C&&(C.isCubeTexture||C.mapping===Iu)?(d===void 0&&(d=new Ci(new Vl(1,1,1),new Xi({name:"BackgroundCubeMaterial",uniforms:Do(xa.backgroundCube.uniforms),vertexShader:xa.backgroundCube.vertexShader,fragmentShader:xa.backgroundCube.fragmentShader,side:mi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(O,L,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),d.material.uniforms.envMap.value=C,d.material.uniforms.backgroundBlurriness.value=B.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=B.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(VT.makeRotationFromEuler(B.backgroundRotation)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&d.material.uniforms.backgroundRotation.value.premultiply(Hx),d.material.toneMapped=Rt.getTransfer(C.colorSpace)!==Yt,(g!==C||_!==C.version||v!==a.toneMapping)&&(d.material.needsUpdate=!0,g=C,_=C.version,v=a.toneMapping),d.layers.enableAll(),I.unshift(d,d.geometry,d.material,0,0,null)):C&&C.isTexture&&(m===void 0&&(m=new Ci(new Hs(2,2),new Xi({name:"BackgroundMaterial",uniforms:Do(xa.background.uniforms),vertexShader:xa.background.vertexShader,fragmentShader:xa.background.fragmentShader,side:is,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(m)),m.material.uniforms.t2D.value=C,m.material.uniforms.backgroundIntensity.value=B.backgroundIntensity,m.material.toneMapped=Rt.getTransfer(C.colorSpace)!==Yt,C.matrixAutoUpdate===!0&&C.updateMatrix(),m.material.uniforms.uvTransform.value.copy(C.matrix),(g!==C||_!==C.version||v!==a.toneMapping)&&(m.material.needsUpdate=!0,g=C,_=C.version,v=a.toneMapping),m.layers.enableAll(),I.unshift(m,m.geometry,m.material,0,0,null))}function y(I,B){I.getRGB(gu,Ix(a)),i.buffers.color.setClear(gu.r,gu.g,gu.b,B,c)}function M(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return u},setClearColor:function(I,B=1){u.set(I),h=B,y(u,h)},getClearAlpha:function(){return h},setClearAlpha:function(I){h=I,y(u,h)},render:b,addToRenderList:w,dispose:M}}function XT(a,e){const i=a.getParameter(a.MAX_VERTEX_ATTRIBS),r={},o=v(null);let c=o,u=!1;function h(k,j,me,ce,X){let z=!1;const H=_(k,ce,me,j);c!==H&&(c=H,d(c.object)),z=x(k,ce,me,X),z&&b(k,ce,me,X),X!==null&&e.update(X,a.ELEMENT_ARRAY_BUFFER),(z||u)&&(u=!1,C(k,j,me,ce),X!==null&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function m(){return a.createVertexArray()}function d(k){return a.bindVertexArray(k)}function g(k){return a.deleteVertexArray(k)}function _(k,j,me,ce){const X=ce.wireframe===!0;let z=r[j.id];z===void 0&&(z={},r[j.id]=z);const H=k.isInstancedMesh===!0?k.id:0;let Q=z[H];Q===void 0&&(Q={},z[H]=Q);let fe=Q[me.id];fe===void 0&&(fe={},Q[me.id]=fe);let xe=fe[X];return xe===void 0&&(xe=v(m()),fe[X]=xe),xe}function v(k){const j=[],me=[],ce=[];for(let X=0;X<i;X++)j[X]=0,me[X]=0,ce[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:j,enabledAttributes:me,attributeDivisors:ce,object:k,attributes:{},index:null}}function x(k,j,me,ce){const X=c.attributes,z=j.attributes;let H=0;const Q=me.getAttributes();for(const fe in Q)if(Q[fe].location>=0){const U=X[fe];let W=z[fe];if(W===void 0&&(fe==="instanceMatrix"&&k.instanceMatrix&&(W=k.instanceMatrix),fe==="instanceColor"&&k.instanceColor&&(W=k.instanceColor)),U===void 0||U.attribute!==W||W&&U.data!==W.data)return!0;H++}return c.attributesNum!==H||c.index!==ce}function b(k,j,me,ce){const X={},z=j.attributes;let H=0;const Q=me.getAttributes();for(const fe in Q)if(Q[fe].location>=0){let U=z[fe];U===void 0&&(fe==="instanceMatrix"&&k.instanceMatrix&&(U=k.instanceMatrix),fe==="instanceColor"&&k.instanceColor&&(U=k.instanceColor));const W={};W.attribute=U,U&&U.data&&(W.data=U.data),X[fe]=W,H++}c.attributes=X,c.attributesNum=H,c.index=ce}function w(){const k=c.newAttributes;for(let j=0,me=k.length;j<me;j++)k[j]=0}function y(k){M(k,0)}function M(k,j){const me=c.newAttributes,ce=c.enabledAttributes,X=c.attributeDivisors;me[k]=1,ce[k]===0&&(a.enableVertexAttribArray(k),ce[k]=1),X[k]!==j&&(a.vertexAttribDivisor(k,j),X[k]=j)}function I(){const k=c.newAttributes,j=c.enabledAttributes;for(let me=0,ce=j.length;me<ce;me++)j[me]!==k[me]&&(a.disableVertexAttribArray(me),j[me]=0)}function B(k,j,me,ce,X,z,H){H===!0?a.vertexAttribIPointer(k,j,me,X,z):a.vertexAttribPointer(k,j,me,ce,X,z)}function C(k,j,me,ce){w();const X=ce.attributes,z=me.getAttributes(),H=j.defaultAttributeValues;for(const Q in z){const fe=z[Q];if(fe.location>=0){let xe=X[Q];if(xe===void 0&&(Q==="instanceMatrix"&&k.instanceMatrix&&(xe=k.instanceMatrix),Q==="instanceColor"&&k.instanceColor&&(xe=k.instanceColor)),xe!==void 0){const U=xe.normalized,W=xe.itemSize,ye=e.get(xe);if(ye===void 0)continue;const Ce=ye.buffer,Ge=ye.type,oe=ye.bytesPerElement,be=Ge===a.INT||Ge===a.UNSIGNED_INT||xe.gpuType===wp;if(xe.isInterleavedBufferAttribute){const Te=xe.data,qe=Te.stride,je=xe.offset;if(Te.isInstancedInterleavedBuffer){for(let $e=0;$e<fe.locationSize;$e++)M(fe.location+$e,Te.meshPerAttribute);k.isInstancedMesh!==!0&&ce._maxInstanceCount===void 0&&(ce._maxInstanceCount=Te.meshPerAttribute*Te.count)}else for(let $e=0;$e<fe.locationSize;$e++)y(fe.location+$e);a.bindBuffer(a.ARRAY_BUFFER,Ce);for(let $e=0;$e<fe.locationSize;$e++)B(fe.location+$e,W/fe.locationSize,Ge,U,qe*oe,(je+W/fe.locationSize*$e)*oe,be)}else{if(xe.isInstancedBufferAttribute){for(let Te=0;Te<fe.locationSize;Te++)M(fe.location+Te,xe.meshPerAttribute);k.isInstancedMesh!==!0&&ce._maxInstanceCount===void 0&&(ce._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let Te=0;Te<fe.locationSize;Te++)y(fe.location+Te);a.bindBuffer(a.ARRAY_BUFFER,Ce);for(let Te=0;Te<fe.locationSize;Te++)B(fe.location+Te,W/fe.locationSize,Ge,U,W*oe,W/fe.locationSize*Te*oe,be)}}else if(H!==void 0){const U=H[Q];if(U!==void 0)switch(U.length){case 2:a.vertexAttrib2fv(fe.location,U);break;case 3:a.vertexAttrib3fv(fe.location,U);break;case 4:a.vertexAttrib4fv(fe.location,U);break;default:a.vertexAttrib1fv(fe.location,U)}}}}I()}function O(){N();for(const k in r){const j=r[k];for(const me in j){const ce=j[me];for(const X in ce){const z=ce[X];for(const H in z)g(z[H].object),delete z[H];delete ce[X]}}delete r[k]}}function L(k){if(r[k.id]===void 0)return;const j=r[k.id];for(const me in j){const ce=j[me];for(const X in ce){const z=ce[X];for(const H in z)g(z[H].object),delete z[H];delete ce[X]}}delete r[k.id]}function F(k){for(const j in r){const me=r[j];for(const ce in me){const X=me[ce];if(X[k.id]===void 0)continue;const z=X[k.id];for(const H in z)g(z[H].object),delete z[H];delete X[k.id]}}}function T(k){for(const j in r){const me=r[j],ce=k.isInstancedMesh===!0?k.id:0,X=me[ce];if(X!==void 0){for(const z in X){const H=X[z];for(const Q in H)g(H[Q].object),delete H[Q];delete X[z]}delete me[ce],Object.keys(me).length===0&&delete r[j]}}}function N(){Z(),u=!0,c!==o&&(c=o,d(c.object))}function Z(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:h,reset:N,resetDefaultState:Z,dispose:O,releaseStatesOfGeometry:L,releaseStatesOfObject:T,releaseStatesOfProgram:F,initAttributes:w,enableAttribute:y,disableUnusedAttributes:I}}function WT(a,e,i){let r;function o(m){r=m}function c(m,d){a.drawArrays(r,m,d),i.update(d,r,1)}function u(m,d,g){g!==0&&(a.drawArraysInstanced(r,m,d,g),i.update(d,r,g))}function h(m,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,d,0,g);let v=0;for(let x=0;x<g;x++)v+=d[x];i.update(v,r,1)}this.setMode=o,this.render=c,this.renderInstances=u,this.renderMultiDraw=h}function qT(a,e,i,r){let o;function c(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");o=a.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(F){return!(F!==aa&&r.convert(F)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(F){const T=F===as&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==Gi&&r.convert(F)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==Ma&&!T)}function m(F){if(F==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=i.precision!==void 0?i.precision:"highp";const g=m(d);g!==d&&(lt("WebGLRenderer:",d,"not supported, using",g,"instead."),d=g);const _=i.logarithmicDepthBuffer===!0,v=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control");i.reversedDepthBuffer===!0&&v===!1&&lt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const x=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),b=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=a.getParameter(a.MAX_TEXTURE_SIZE),y=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),M=a.getParameter(a.MAX_VERTEX_ATTRIBS),I=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),B=a.getParameter(a.MAX_VARYING_VECTORS),C=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),O=a.getParameter(a.MAX_SAMPLES),L=a.getParameter(a.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:u,textureTypeReadable:h,precision:d,logarithmicDepthBuffer:_,reversedDepthBuffer:v,maxTextures:x,maxVertexTextures:b,maxTextureSize:w,maxCubemapSize:y,maxAttributes:M,maxVertexUniforms:I,maxVaryings:B,maxFragmentUniforms:C,maxSamples:O,samples:L}}function YT(a){const e=this;let i=null,r=0,o=!1,c=!1;const u=new mr,h=new dt,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(_,v){const x=_.length!==0||v||r!==0||o;return o=v,r=_.length,x},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,v){i=g(_,v,0)},this.setState=function(_,v,x){const b=_.clippingPlanes,w=_.clipIntersection,y=_.clipShadows,M=a.get(_);if(!o||b===null||b.length===0||c&&!y)c?g(null):d();else{const I=c?0:r,B=I*4;let C=M.clippingState||null;m.value=C,C=g(b,v,B,x);for(let O=0;O!==B;++O)C[O]=i[O];M.clippingState=C,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=I}};function d(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function g(_,v,x,b){const w=_!==null?_.length:0;let y=null;if(w!==0){if(y=m.value,b!==!0||y===null){const M=x+w*4,I=v.matrixWorldInverse;h.getNormalMatrix(I),(y===null||y.length<M)&&(y=new Float32Array(M));for(let B=0,C=x;B!==w;++B,C+=4)u.copy(_[B]).applyMatrix4(I,h),u.normal.toArray(y,C),y[C+3]=u.constant}m.value=y,m.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,y}}const Gs=4,mv=[.125,.215,.35,.446,.526,.582],vr=20,jT=256,Rl=new Bx,gv=new Xt;let yh=null,Eh=0,bh=0,Th=!1;const ZT=new ae;class _v{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,r=.1,o=100,c={}){const{size:u=256,position:h=ZT}=c;yh=this._renderer.getRenderTarget(),Eh=this._renderer.getActiveCubeFace(),bh=this._renderer.getActiveMipmapLevel(),Th=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,r,o,m,h),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Sv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=xv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(yh,Eh,bh),this._renderer.xr.enabled=Th,e.scissorTest=!1,xo(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Mr||e.mapping===Co?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),yh=this._renderer.getRenderTarget(),Eh=this._renderer.getActiveCubeFace(),bh=this._renderer.getActiveMipmapLevel(),Th=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:pn,minFilter:pn,generateMipmaps:!1,type:as,format:aa,colorSpace:Cu,depthBuffer:!1},o=vv(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=vv(e,i,r);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=KT(c)),this._blurMaterial=JT(c,e,i),this._ggxMaterial=QT(c,e,i)}return o}_compileMaterial(e){const i=new Ci(new ki,e);this._renderer.compile(i,Rl)}_sceneToCubeUV(e,i,r,o,c){const m=new Hi(90,1,i,r),d=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],_=this._renderer,v=_.autoClear,x=_.toneMapping;_.getClearColor(gv),_.toneMapping=Ea,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(o),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ci(new Vl,new Nu({name:"PMREM.Background",side:mi,depthWrite:!1,depthTest:!1})));const w=this._backgroundBox,y=w.material;let M=!1;const I=e.background;I?I.isColor&&(y.color.copy(I),e.background=null,M=!0):(y.color.copy(gv),M=!0);for(let B=0;B<6;B++){const C=B%3;C===0?(m.up.set(0,d[B],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+g[B],c.y,c.z)):C===1?(m.up.set(0,0,d[B]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+g[B],c.z)):(m.up.set(0,d[B],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+g[B]));const O=this._cubeSize;xo(o,C*O,B>2?O:0,O,O),_.setRenderTarget(o),M&&_.render(w,m),_.render(e,m)}_.toneMapping=x,_.autoClear=v,e.background=I}_textureToCubeUV(e,i){const r=this._renderer,o=e.mapping===Mr||e.mapping===Co;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=Sv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=xv());const c=o?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=c;const h=c.uniforms;h.envMap.value=e;const m=this._cubeSize;xo(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(u,Rl)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const o=this._lodMeshes.length;for(let c=1;c<o;c++)this._applyGGXFilter(e,c-1,c);i.autoClear=r}_applyGGXFilter(e,i,r){const o=this._renderer,c=this._pingPongRenderTarget,u=this._ggxMaterial,h=this._lodMeshes[r];h.material=u;const m=u.uniforms,d=r/(this._lodMeshes.length-1),g=i/(this._lodMeshes.length-1),_=Math.sqrt(d*d-g*g),v=0+d*1.25,x=_*v,{_lodMax:b}=this,w=this._sizeLods[r],y=3*w*(r>b-Gs?r-b+Gs:0),M=4*(this._cubeSize-w);m.envMap.value=e.texture,m.roughness.value=x,m.mipInt.value=b-i,xo(c,y,M,3*w,2*w),o.setRenderTarget(c),o.render(h,Rl),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=b-r,xo(e,y,M,3*w,2*w),o.setRenderTarget(e),o.render(h,Rl)}_blur(e,i,r,o,c){const u=this._pingPongRenderTarget;this._halfBlur(e,u,i,r,o,"latitudinal",c),this._halfBlur(u,e,r,r,o,"longitudinal",c)}_halfBlur(e,i,r,o,c,u,h){const m=this._renderer,d=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&Lt("blur direction must be either latitudinal or longitudinal!");const g=3,_=this._lodMeshes[o];_.material=d;const v=d.uniforms,x=this._sizeLods[r]-1,b=isFinite(c)?Math.PI/(2*x):2*Math.PI/(2*vr-1),w=c/b,y=isFinite(c)?1+Math.floor(g*w):vr;y>vr&&lt(`sigmaRadians, ${c}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${vr}`);const M=[];let I=0;for(let F=0;F<vr;++F){const T=F/w,N=Math.exp(-T*T/2);M.push(N),F===0?I+=N:F<y&&(I+=2*N)}for(let F=0;F<M.length;F++)M[F]=M[F]/I;v.envMap.value=e.texture,v.samples.value=y,v.weights.value=M,v.latitudinal.value=u==="latitudinal",h&&(v.poleAxis.value=h);const{_lodMax:B}=this;v.dTheta.value=b,v.mipInt.value=B-r;const C=this._sizeLods[o],O=3*C*(o>B-Gs?o-B+Gs:0),L=4*(this._cubeSize-C);xo(i,O,L,3*C,2*C),m.setRenderTarget(i),m.render(_,Rl)}}function KT(a){const e=[],i=[],r=[];let o=a;const c=a-Gs+1+mv.length;for(let u=0;u<c;u++){const h=Math.pow(2,o);e.push(h);let m=1/h;u>a-Gs?m=mv[u-a+Gs-1]:u===0&&(m=0),i.push(m);const d=1/(h-2),g=-d,_=1+d,v=[g,g,_,g,_,_,g,g,_,_,g,_],x=6,b=6,w=3,y=2,M=1,I=new Float32Array(w*b*x),B=new Float32Array(y*b*x),C=new Float32Array(M*b*x);for(let L=0;L<x;L++){const F=L%3*2/3-1,T=L>2?0:-1,N=[F,T,0,F+2/3,T,0,F+2/3,T+1,0,F,T,0,F+2/3,T+1,0,F,T+1,0];I.set(N,w*b*L),B.set(v,y*b*L);const Z=[L,L,L,L,L,L];C.set(Z,M*b*L)}const O=new ki;O.setAttribute("position",new Ta(I,w)),O.setAttribute("uv",new Ta(B,y)),O.setAttribute("faceIndex",new Ta(C,M)),r.push(new Ci(O,null)),o>Gs&&o--}return{lodMeshes:r,sizeLods:e,sigmas:i}}function vv(a,e,i){const r=new ba(a,e,i);return r.texture.mapping=Iu,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function xo(a,e,i,r,o){a.viewport.set(e,i,r,o),a.scissor.set(e,i,r,o)}function QT(a,e,i){return new Xi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:jT,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Bu(),fragmentShader:`

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
		`,blending:ts,depthTest:!1,depthWrite:!1})}function JT(a,e,i){const r=new Float32Array(vr),o=new ae(0,1,0);return new Xi({name:"SphericalGaussianBlur",defines:{n:vr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Bu(),fragmentShader:`

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
		`,blending:ts,depthTest:!1,depthWrite:!1})}function xv(){return new Xi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Bu(),fragmentShader:`

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
		`,blending:ts,depthTest:!1,depthWrite:!1})}function Sv(){return new Xi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Bu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ts,depthTest:!1,depthWrite:!1})}function Bu(){return`

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
	`}class Gx extends ba{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new Ux(o),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new Vl(5,5,5),c=new Xi({name:"CubemapFromEquirect",uniforms:Do(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:mi,blending:ts});c.uniforms.tEquirect.value=i;const u=new Ci(o,c),h=i.minFilter;return i.minFilter===zs&&(i.minFilter=pn),new ab(1,10,this).update(e,u),i.minFilter=h,u.geometry.dispose(),u.material.dispose(),this}clear(e,i=!0,r=!0,o=!0){const c=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(i,r,o);e.setRenderTarget(c)}}function $T(a){let e=new WeakMap,i=new WeakMap,r=null;function o(v,x=!1){return v==null?null:x?u(v):c(v)}function c(v){if(v&&v.isTexture){const x=v.mapping;if(x===jd||x===Zd)if(e.has(v)){const b=e.get(v).texture;return h(b,v.mapping)}else{const b=v.image;if(b&&b.height>0){const w=new Gx(b.height);return w.fromEquirectangularTexture(a,v),e.set(v,w),v.addEventListener("dispose",d),h(w.texture,v.mapping)}else return null}}return v}function u(v){if(v&&v.isTexture){const x=v.mapping,b=x===jd||x===Zd,w=x===Mr||x===Co;if(b||w){let y=i.get(v);const M=y!==void 0?y.texture.pmremVersion:0;if(v.isRenderTargetTexture&&v.pmremVersion!==M)return r===null&&(r=new _v(a)),y=b?r.fromEquirectangular(v,y):r.fromCubemap(v,y),y.texture.pmremVersion=v.pmremVersion,i.set(v,y),y.texture;if(y!==void 0)return y.texture;{const I=v.image;return b&&I&&I.height>0||w&&I&&m(I)?(r===null&&(r=new _v(a)),y=b?r.fromEquirectangular(v):r.fromCubemap(v),y.texture.pmremVersion=v.pmremVersion,i.set(v,y),v.addEventListener("dispose",g),y.texture):null}}}return v}function h(v,x){return x===jd?v.mapping=Mr:x===Zd&&(v.mapping=Co),v}function m(v){let x=0;const b=6;for(let w=0;w<b;w++)v[w]!==void 0&&x++;return x===b}function d(v){const x=v.target;x.removeEventListener("dispose",d);const b=e.get(x);b!==void 0&&(e.delete(x),b.dispose())}function g(v){const x=v.target;x.removeEventListener("dispose",g);const b=i.get(x);b!==void 0&&(i.delete(x),b.dispose())}function _(){e=new WeakMap,i=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:o,dispose:_}}function eA(a){const e={};function i(r){if(e[r]!==void 0)return e[r];const o=a.getExtension(r);return e[r]=o,o}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const o=i(r);return o===null&&Eo("WebGLRenderer: "+r+" extension not supported."),o}}}function tA(a,e,i,r){const o={},c=new WeakMap;function u(_){const v=_.target;v.index!==null&&e.remove(v.index);for(const b in v.attributes)e.remove(v.attributes[b]);v.removeEventListener("dispose",u),delete o[v.id];const x=c.get(v);x&&(e.remove(x),c.delete(v)),r.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,i.memory.geometries--}function h(_,v){return o[v.id]===!0||(v.addEventListener("dispose",u),o[v.id]=!0,i.memory.geometries++),v}function m(_){const v=_.attributes;for(const x in v)e.update(v[x],a.ARRAY_BUFFER)}function d(_){const v=[],x=_.index,b=_.attributes.position;let w=0;if(b===void 0)return;if(x!==null){const I=x.array;w=x.version;for(let B=0,C=I.length;B<C;B+=3){const O=I[B+0],L=I[B+1],F=I[B+2];v.push(O,L,L,F,F,O)}}else{const I=b.array;w=b.version;for(let B=0,C=I.length/3-1;B<C;B+=3){const O=B+0,L=B+1,F=B+2;v.push(O,L,L,F,F,O)}}const y=new(b.count>=65535?Lx:Dx)(v,1);y.version=w;const M=c.get(_);M&&e.remove(M),c.set(_,y)}function g(_){const v=c.get(_);if(v){const x=_.index;x!==null&&v.version<x.version&&d(_)}else d(_);return c.get(_)}return{get:h,update:m,getWireframeAttribute:g}}function nA(a,e,i){let r;function o(_){r=_}let c,u;function h(_){c=_.type,u=_.bytesPerElement}function m(_,v){a.drawElements(r,v,c,_*u),i.update(v,r,1)}function d(_,v,x){x!==0&&(a.drawElementsInstanced(r,v,c,_*u,x),i.update(v,r,x))}function g(_,v,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,v,0,c,_,0,x);let w=0;for(let y=0;y<x;y++)w+=v[y];i.update(w,r,1)}this.setMode=o,this.setIndex=h,this.render=m,this.renderInstances=d,this.renderMultiDraw=g}function iA(a){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,u,h){switch(i.calls++,u){case a.TRIANGLES:i.triangles+=h*(c/3);break;case a.LINES:i.lines+=h*(c/2);break;case a.LINE_STRIP:i.lines+=h*(c-1);break;case a.LINE_LOOP:i.lines+=h*c;break;case a.POINTS:i.points+=h*c;break;default:Lt("WebGLInfo: Unknown draw mode:",u);break}}function o(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:o,update:r}}function aA(a,e,i){const r=new WeakMap,o=new xn;function c(u,h,m){const d=u.morphTargetInfluences,g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=g!==void 0?g.length:0;let v=r.get(h);if(v===void 0||v.count!==_){let Z=function(){T.dispose(),r.delete(h),h.removeEventListener("dispose",Z)};var x=Z;v!==void 0&&v.texture.dispose();const b=h.morphAttributes.position!==void 0,w=h.morphAttributes.normal!==void 0,y=h.morphAttributes.color!==void 0,M=h.morphAttributes.position||[],I=h.morphAttributes.normal||[],B=h.morphAttributes.color||[];let C=0;b===!0&&(C=1),w===!0&&(C=2),y===!0&&(C=3);let O=h.attributes.position.count*C,L=1;O>e.maxTextureSize&&(L=Math.ceil(O/e.maxTextureSize),O=e.maxTextureSize);const F=new Float32Array(O*L*4*_),T=new Rx(F,O,L,_);T.type=Ma,T.needsUpdate=!0;const N=C*4;for(let k=0;k<_;k++){const j=M[k],me=I[k],ce=B[k],X=O*L*4*k;for(let z=0;z<j.count;z++){const H=z*N;b===!0&&(o.fromBufferAttribute(j,z),F[X+H+0]=o.x,F[X+H+1]=o.y,F[X+H+2]=o.z,F[X+H+3]=0),w===!0&&(o.fromBufferAttribute(me,z),F[X+H+4]=o.x,F[X+H+5]=o.y,F[X+H+6]=o.z,F[X+H+7]=0),y===!0&&(o.fromBufferAttribute(ce,z),F[X+H+8]=o.x,F[X+H+9]=o.y,F[X+H+10]=o.z,F[X+H+11]=ce.itemSize===4?o.w:1)}}v={count:_,texture:T,size:new It(O,L)},r.set(h,v),h.addEventListener("dispose",Z)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)m.getUniforms().setValue(a,"morphTexture",u.morphTexture,i);else{let b=0;for(let y=0;y<d.length;y++)b+=d[y];const w=h.morphTargetsRelative?1:1-b;m.getUniforms().setValue(a,"morphTargetBaseInfluence",w),m.getUniforms().setValue(a,"morphTargetInfluences",d)}m.getUniforms().setValue(a,"morphTargetsTexture",v.texture,i),m.getUniforms().setValue(a,"morphTargetsTextureSize",v.size)}return{update:c}}function sA(a,e,i,r,o){let c=new WeakMap;function u(d){const g=o.render.frame,_=d.geometry,v=e.get(d,_);if(c.get(v)!==g&&(e.update(v),c.set(v,g)),d.isInstancedMesh&&(d.hasEventListener("dispose",m)===!1&&d.addEventListener("dispose",m),c.get(d)!==g&&(i.update(d.instanceMatrix,a.ARRAY_BUFFER),d.instanceColor!==null&&i.update(d.instanceColor,a.ARRAY_BUFFER),c.set(d,g))),d.isSkinnedMesh){const x=d.skeleton;c.get(x)!==g&&(x.update(),c.set(x,g))}return v}function h(){c=new WeakMap}function m(d){const g=d.target;g.removeEventListener("dispose",m),r.releaseStatesOfObject(g),i.remove(g.instanceMatrix),g.instanceColor!==null&&i.remove(g.instanceColor)}return{update:u,dispose:h}}const rA={[fx]:"LINEAR_TONE_MAPPING",[dx]:"REINHARD_TONE_MAPPING",[hx]:"CINEON_TONE_MAPPING",[px]:"ACES_FILMIC_TONE_MAPPING",[gx]:"AGX_TONE_MAPPING",[_x]:"NEUTRAL_TONE_MAPPING",[mx]:"CUSTOM_TONE_MAPPING"};function oA(a,e,i,r,o,c){const u=new ba(e,i,{type:a,depthBuffer:o,stencilBuffer:c,samples:r?4:0,depthTexture:o?new wo(e,i):void 0}),h=new ba(e,i,{type:as,depthBuffer:!1,stencilBuffer:!1}),m=new ki;m.setAttribute("position",new Vi([-1,3,0,-1,-1,0,3,-1,0],3)),m.setAttribute("uv",new Vi([0,2,0,0,2,0],2));const d=new tb({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),g=new Ci(m,d),_=new Bx(-1,1,1,-1,0,1);let v=null,x=null,b=!1,w,y=null,M=[],I=!1;this.setSize=function(B,C){u.setSize(B,C),h.setSize(B,C);for(let O=0;O<M.length;O++){const L=M[O];L.setSize&&L.setSize(B,C)}},this.setEffects=function(B){M=B,I=M.length>0&&M[0].isRenderPass===!0;const C=u.width,O=u.height;for(let L=0;L<M.length;L++){const F=M[L];F.setSize&&F.setSize(C,O)}},this.begin=function(B,C){if(b||B.toneMapping===Ea&&M.length===0)return!1;if(y=C,C!==null){const O=C.width,L=C.height;(u.width!==O||u.height!==L)&&this.setSize(O,L)}return I===!1&&B.setRenderTarget(u),w=B.toneMapping,B.toneMapping=Ea,!0},this.hasRenderPass=function(){return I},this.end=function(B,C){B.toneMapping=w,b=!0;let O=u,L=h;for(let F=0;F<M.length;F++){const T=M[F];if(T.enabled!==!1&&(T.render(B,L,O,C),T.needsSwap!==!1)){const N=O;O=L,L=N}}if(v!==B.outputColorSpace||x!==B.toneMapping){v=B.outputColorSpace,x=B.toneMapping,d.defines={},Rt.getTransfer(v)===Yt&&(d.defines.SRGB_TRANSFER="");const F=rA[x];F&&(d.defines[F]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=O.texture,B.setRenderTarget(y),B.render(g,_),y=null,b=!1},this.isCompositing=function(){return b},this.dispose=function(){u.depthTexture&&u.depthTexture.dispose(),u.dispose(),h.dispose(),m.dispose(),d.dispose()}}const Vx=new Zn,Ep=new wo(1,1),kx=new Rx,Xx=new CE,Wx=new Ux,Mv=[],yv=[],Ev=new Float32Array(16),bv=new Float32Array(9),Tv=new Float32Array(4);function Uo(a,e,i){const r=a[0];if(r<=0||r>0)return a;const o=e*i;let c=Mv[o];if(c===void 0&&(c=new Float32Array(o),Mv[o]=c),e!==0){r.toArray(c,0);for(let u=1,h=0;u!==e;++u)h+=i,a[u].toArray(c,h)}return c}function Pn(a,e){if(a.length!==e.length)return!1;for(let i=0,r=a.length;i<r;i++)if(a[i]!==e[i])return!1;return!0}function In(a,e){for(let i=0,r=e.length;i<r;i++)a[i]=e[i]}function zu(a,e){let i=yv[e];i===void 0&&(i=new Int32Array(e),yv[e]=i);for(let r=0;r!==e;++r)i[r]=a.allocateTextureUnit();return i}function lA(a,e){const i=this.cache;i[0]!==e&&(a.uniform1f(this.addr,e),i[0]=e)}function cA(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Pn(i,e))return;a.uniform2fv(this.addr,e),In(i,e)}}function uA(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(Pn(i,e))return;a.uniform3fv(this.addr,e),In(i,e)}}function fA(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Pn(i,e))return;a.uniform4fv(this.addr,e),In(i,e)}}function dA(a,e){const i=this.cache,r=e.elements;if(r===void 0){if(Pn(i,e))return;a.uniformMatrix2fv(this.addr,!1,e),In(i,e)}else{if(Pn(i,r))return;Tv.set(r),a.uniformMatrix2fv(this.addr,!1,Tv),In(i,r)}}function hA(a,e){const i=this.cache,r=e.elements;if(r===void 0){if(Pn(i,e))return;a.uniformMatrix3fv(this.addr,!1,e),In(i,e)}else{if(Pn(i,r))return;bv.set(r),a.uniformMatrix3fv(this.addr,!1,bv),In(i,r)}}function pA(a,e){const i=this.cache,r=e.elements;if(r===void 0){if(Pn(i,e))return;a.uniformMatrix4fv(this.addr,!1,e),In(i,e)}else{if(Pn(i,r))return;Ev.set(r),a.uniformMatrix4fv(this.addr,!1,Ev),In(i,r)}}function mA(a,e){const i=this.cache;i[0]!==e&&(a.uniform1i(this.addr,e),i[0]=e)}function gA(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(a.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Pn(i,e))return;a.uniform2iv(this.addr,e),In(i,e)}}function _A(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(a.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Pn(i,e))return;a.uniform3iv(this.addr,e),In(i,e)}}function vA(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Pn(i,e))return;a.uniform4iv(this.addr,e),In(i,e)}}function xA(a,e){const i=this.cache;i[0]!==e&&(a.uniform1ui(this.addr,e),i[0]=e)}function SA(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(a.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Pn(i,e))return;a.uniform2uiv(this.addr,e),In(i,e)}}function MA(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(a.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Pn(i,e))return;a.uniform3uiv(this.addr,e),In(i,e)}}function yA(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Pn(i,e))return;a.uniform4uiv(this.addr,e),In(i,e)}}function EA(a,e,i){const r=this.cache,o=i.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o);let c;this.type===a.SAMPLER_2D_SHADOW?(Ep.compareFunction=i.isReversedDepthBuffer()?Ip:Pp,c=Ep):c=Vx,i.setTexture2D(e||c,o)}function bA(a,e,i){const r=this.cache,o=i.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o),i.setTexture3D(e||Xx,o)}function TA(a,e,i){const r=this.cache,o=i.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o),i.setTextureCube(e||Wx,o)}function AA(a,e,i){const r=this.cache,o=i.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o),i.setTexture2DArray(e||kx,o)}function RA(a){switch(a){case 5126:return lA;case 35664:return cA;case 35665:return uA;case 35666:return fA;case 35674:return dA;case 35675:return hA;case 35676:return pA;case 5124:case 35670:return mA;case 35667:case 35671:return gA;case 35668:case 35672:return _A;case 35669:case 35673:return vA;case 5125:return xA;case 36294:return SA;case 36295:return MA;case 36296:return yA;case 35678:case 36198:case 36298:case 36306:case 35682:return EA;case 35679:case 36299:case 36307:return bA;case 35680:case 36300:case 36308:case 36293:return TA;case 36289:case 36303:case 36311:case 36292:return AA}}function CA(a,e){a.uniform1fv(this.addr,e)}function wA(a,e){const i=Uo(e,this.size,2);a.uniform2fv(this.addr,i)}function DA(a,e){const i=Uo(e,this.size,3);a.uniform3fv(this.addr,i)}function LA(a,e){const i=Uo(e,this.size,4);a.uniform4fv(this.addr,i)}function NA(a,e){const i=Uo(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,i)}function UA(a,e){const i=Uo(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,i)}function OA(a,e){const i=Uo(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,i)}function PA(a,e){a.uniform1iv(this.addr,e)}function IA(a,e){a.uniform2iv(this.addr,e)}function FA(a,e){a.uniform3iv(this.addr,e)}function BA(a,e){a.uniform4iv(this.addr,e)}function zA(a,e){a.uniform1uiv(this.addr,e)}function HA(a,e){a.uniform2uiv(this.addr,e)}function GA(a,e){a.uniform3uiv(this.addr,e)}function VA(a,e){a.uniform4uiv(this.addr,e)}function kA(a,e,i){const r=this.cache,o=e.length,c=zu(i,o);Pn(r,c)||(a.uniform1iv(this.addr,c),In(r,c));let u;this.type===a.SAMPLER_2D_SHADOW?u=Ep:u=Vx;for(let h=0;h!==o;++h)i.setTexture2D(e[h]||u,c[h])}function XA(a,e,i){const r=this.cache,o=e.length,c=zu(i,o);Pn(r,c)||(a.uniform1iv(this.addr,c),In(r,c));for(let u=0;u!==o;++u)i.setTexture3D(e[u]||Xx,c[u])}function WA(a,e,i){const r=this.cache,o=e.length,c=zu(i,o);Pn(r,c)||(a.uniform1iv(this.addr,c),In(r,c));for(let u=0;u!==o;++u)i.setTextureCube(e[u]||Wx,c[u])}function qA(a,e,i){const r=this.cache,o=e.length,c=zu(i,o);Pn(r,c)||(a.uniform1iv(this.addr,c),In(r,c));for(let u=0;u!==o;++u)i.setTexture2DArray(e[u]||kx,c[u])}function YA(a){switch(a){case 5126:return CA;case 35664:return wA;case 35665:return DA;case 35666:return LA;case 35674:return NA;case 35675:return UA;case 35676:return OA;case 5124:case 35670:return PA;case 35667:case 35671:return IA;case 35668:case 35672:return FA;case 35669:case 35673:return BA;case 5125:return zA;case 36294:return HA;case 36295:return GA;case 36296:return VA;case 35678:case 36198:case 36298:case 36306:case 35682:return kA;case 35679:case 36299:case 36307:return XA;case 35680:case 36300:case 36308:case 36293:return WA;case 36289:case 36303:case 36311:case 36292:return qA}}class jA{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=RA(i.type)}}class ZA{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=YA(i.type)}}class KA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const o=this.seq;for(let c=0,u=o.length;c!==u;++c){const h=o[c];h.setValue(e,i[h.id],r)}}}const Ah=/(\w+)(\])?(\[|\.)?/g;function Av(a,e){a.seq.push(e),a.map[e.id]=e}function QA(a,e,i){const r=a.name,o=r.length;for(Ah.lastIndex=0;;){const c=Ah.exec(r),u=Ah.lastIndex;let h=c[1];const m=c[2]==="]",d=c[3];if(m&&(h=h|0),d===void 0||d==="["&&u+2===o){Av(i,d===void 0?new jA(h,a,e):new ZA(h,a,e));break}else{let _=i.map[h];_===void 0&&(_=new KA(h),Av(i,_)),i=_}}}class bu{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let u=0;u<r;++u){const h=e.getActiveUniform(i,u),m=e.getUniformLocation(i,h.name);QA(h,m,this)}const o=[],c=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(u):c.push(u);o.length>0&&(this.seq=o.concat(c))}setValue(e,i,r,o){const c=this.map[i];c!==void 0&&c.setValue(e,r,o)}setOptional(e,i,r){const o=i[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,i,r,o){for(let c=0,u=i.length;c!==u;++c){const h=i[c],m=r[h.id];m.needsUpdate!==!1&&h.setValue(e,m.value,o)}}static seqWithValue(e,i){const r=[];for(let o=0,c=e.length;o!==c;++o){const u=e[o];u.id in i&&r.push(u)}return r}}function Rv(a,e,i){const r=a.createShader(e);return a.shaderSource(r,i),a.compileShader(r),r}const JA=37297;let $A=0;function e2(a,e){const i=a.split(`
`),r=[],o=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let u=o;u<c;u++){const h=u+1;r.push(`${h===e?">":" "} ${h}: ${i[u]}`)}return r.join(`
`)}const Cv=new dt;function t2(a){Rt._getMatrix(Cv,Rt.workingColorSpace,a);const e=`mat3( ${Cv.elements.map(i=>i.toFixed(4))} )`;switch(Rt.getTransfer(a)){case wu:return[e,"LinearTransferOETF"];case Yt:return[e,"sRGBTransferOETF"];default:return lt("WebGLProgram: Unsupported color space: ",a),[e,"LinearTransferOETF"]}}function wv(a,e,i){const r=a.getShaderParameter(e,a.COMPILE_STATUS),c=(a.getShaderInfoLog(e)||"").trim();if(r&&c==="")return"";const u=/ERROR: 0:(\d+)/.exec(c);if(u){const h=parseInt(u[1]);return i.toUpperCase()+`

`+c+`

`+e2(a.getShaderSource(e),h)}else return c}function n2(a,e){const i=t2(e);return[`vec4 ${a}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const i2={[fx]:"Linear",[dx]:"Reinhard",[hx]:"Cineon",[px]:"ACESFilmic",[gx]:"AgX",[_x]:"Neutral",[mx]:"Custom"};function a2(a,e){const i=i2[e];return i===void 0?(lt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+a+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+a+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const _u=new ae;function s2(){Rt.getLuminanceCoefficients(_u);const a=_u.x.toFixed(4),e=_u.y.toFixed(4),i=_u.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${a}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function r2(a){return[a.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",a.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ll).join(`
`)}function o2(a){const e=[];for(const i in a){const r=a[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function l2(a,e){const i={},r=a.getProgramParameter(e,a.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const c=a.getActiveAttrib(e,o),u=c.name;let h=1;c.type===a.FLOAT_MAT2&&(h=2),c.type===a.FLOAT_MAT3&&(h=3),c.type===a.FLOAT_MAT4&&(h=4),i[u]={type:c.type,location:a.getAttribLocation(e,u),locationSize:h}}return i}function Ll(a){return a!==""}function Dv(a,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Lv(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const c2=/^[ \t]*#include +<([\w\d./]+)>/gm;function bp(a){return a.replace(c2,f2)}const u2=new Map;function f2(a,e){let i=xt[e];if(i===void 0){const r=u2.get(e);if(r!==void 0)i=xt[r],lt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return bp(i)}const d2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Nv(a){return a.replace(d2,h2)}function h2(a,e,i,r){let o="";for(let c=parseInt(e);c<parseInt(i);c++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return o}function Uv(a){let e=`precision ${a.precision} float;
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
#define LOW_PRECISION`),e}const p2={[xu]:"SHADOWMAP_TYPE_PCF",[wl]:"SHADOWMAP_TYPE_VSM"};function m2(a){return p2[a.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const g2={[Mr]:"ENVMAP_TYPE_CUBE",[Co]:"ENVMAP_TYPE_CUBE",[Iu]:"ENVMAP_TYPE_CUBE_UV"};function _2(a){return a.envMap===!1?"ENVMAP_TYPE_CUBE":g2[a.envMapMode]||"ENVMAP_TYPE_CUBE"}const v2={[Co]:"ENVMAP_MODE_REFRACTION"};function x2(a){return a.envMap===!1?"ENVMAP_MODE_REFLECTION":v2[a.envMapMode]||"ENVMAP_MODE_REFLECTION"}const S2={[ux]:"ENVMAP_BLENDING_MULTIPLY",[qy]:"ENVMAP_BLENDING_MIX",[Yy]:"ENVMAP_BLENDING_ADD"};function M2(a){return a.envMap===!1?"ENVMAP_BLENDING_NONE":S2[a.combine]||"ENVMAP_BLENDING_NONE"}function y2(a){const e=a.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function E2(a,e,i,r){const o=a.getContext(),c=i.defines;let u=i.vertexShader,h=i.fragmentShader;const m=m2(i),d=_2(i),g=x2(i),_=M2(i),v=y2(i),x=r2(i),b=o2(c),w=o.createProgram();let y,M,I=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Ll).join(`
`),y.length>0&&(y+=`
`),M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Ll).join(`
`),M.length>0&&(M+=`
`)):(y=[Uv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ll).join(`
`),M=[Uv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+d:"",i.envMap?"#define "+g:"",i.envMap?"#define "+_:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Ea?"#define TONE_MAPPING":"",i.toneMapping!==Ea?xt.tonemapping_pars_fragment:"",i.toneMapping!==Ea?a2("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",xt.colorspace_pars_fragment,n2("linearToOutputTexel",i.outputColorSpace),s2(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Ll).join(`
`)),u=bp(u),u=Dv(u,i),u=Lv(u,i),h=bp(h),h=Dv(h,i),h=Lv(h,i),u=Nv(u),h=Nv(h),i.isRawShaderMaterial!==!0&&(I=`#version 300 es
`,y=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,M=["#define varying in",i.glslVersion===X_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===X_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+M);const B=I+y+u,C=I+M+h,O=Rv(o,o.VERTEX_SHADER,B),L=Rv(o,o.FRAGMENT_SHADER,C);o.attachShader(w,O),o.attachShader(w,L),i.index0AttributeName!==void 0?o.bindAttribLocation(w,0,i.index0AttributeName):i.hasPositionAttribute===!0&&o.bindAttribLocation(w,0,"position"),o.linkProgram(w);function F(k){if(a.debug.checkShaderErrors){const j=o.getProgramInfoLog(w)||"",me=o.getShaderInfoLog(O)||"",ce=o.getShaderInfoLog(L)||"",X=j.trim(),z=me.trim(),H=ce.trim();let Q=!0,fe=!0;if(o.getProgramParameter(w,o.LINK_STATUS)===!1)if(Q=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(o,w,O,L);else{const xe=wv(o,O,"vertex"),U=wv(o,L,"fragment");Lt("WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(w,o.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+X+`
`+xe+`
`+U)}else X!==""?lt("WebGLProgram: Program Info Log:",X):(z===""||H==="")&&(fe=!1);fe&&(k.diagnostics={runnable:Q,programLog:X,vertexShader:{log:z,prefix:y},fragmentShader:{log:H,prefix:M}})}o.deleteShader(O),o.deleteShader(L),T=new bu(o,w),N=l2(o,w)}let T;this.getUniforms=function(){return T===void 0&&F(this),T};let N;this.getAttributes=function(){return N===void 0&&F(this),N};let Z=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return Z===!1&&(Z=o.getProgramParameter(w,JA)),Z},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(w),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=$A++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=O,this.fragmentShader=L,this}let b2=0;class T2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,i,r){const o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new A2(e),i.set(e,r)),r}}class A2{constructor(e){this.id=b2++,this.code=e,this.usedTimes=0}}function R2(a){return a===yr||a===Au||a===Ru}function C2(a,e,i,r,o,c){const u=new Cx,h=new T2,m=new Set,d=[],g=new Map,_=r.logarithmicDepthBuffer;let v=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(T){return m.add(T),T===0?"uv":`uv${T}`}function w(T,N,Z,k,j,me){const ce=k.fog,X=j.geometry,z=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?k.environment:null,H=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,Q=e.get(T.envMap||z,H),fe=Q&&Q.mapping===Iu?Q.image.height:null,xe=x[T.type];T.precision!==null&&(v=r.getMaxPrecision(T.precision),v!==T.precision&&lt("WebGLProgram.getParameters:",T.precision,"not supported, using",v,"instead."));const U=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,W=U!==void 0?U.length:0;let ye=0;X.morphAttributes.position!==void 0&&(ye=1),X.morphAttributes.normal!==void 0&&(ye=2),X.morphAttributes.color!==void 0&&(ye=3);let Ce,Ge,oe,be;if(xe){const Ye=xa[xe];Ce=Ye.vertexShader,Ge=Ye.fragmentShader}else{Ce=T.vertexShader,Ge=T.fragmentShader;const Ye=h.getVertexShaderStage(T),jt=h.getFragmentShaderStage(T);h.update(T,Ye,jt),oe=Ye.id,be=jt.id}const Te=a.getRenderTarget(),qe=a.state.buffers.depth.getReversed(),je=j.isInstancedMesh===!0,$e=j.isBatchedMesh===!0,Vt=!!T.map,ut=!!T.matcap,pt=!!Q,gt=!!T.aoMap,_t=!!T.lightMap,sn=!!T.bumpMap&&T.wireframe===!1,tn=!!T.normalMap,nn=!!T.displacementMap,$t=!!T.emissiveMap,Nt=!!T.metalnessMap,rn=!!T.roughnessMap,K=T.anisotropy>0,Ut=T.clearcoat>0,Ct=T.dispersion>0,P=T.iridescence>0,E=T.sheen>0,J=T.transmission>0,ne=K&&!!T.anisotropyMap,de=Ut&&!!T.clearcoatMap,Re=Ut&&!!T.clearcoatNormalMap,Ie=Ut&&!!T.clearcoatRoughnessMap,ue=P&&!!T.iridescenceMap,he=P&&!!T.iridescenceThicknessMap,De=E&&!!T.sheenColorMap,Ve=E&&!!T.sheenRoughnessMap,Be=!!T.specularMap,Pe=!!T.specularColorMap,nt=!!T.specularIntensityMap,it=J&&!!T.transmissionMap,st=J&&!!T.thicknessMap,Y=!!T.gradientMap,Ne=!!T.alphaMap,ge=T.alphaTest>0,we=!!T.alphaHash,Fe=!!T.extensions;let ve=Ea;T.toneMapped&&(Te===null||Te.isXRRenderTarget===!0)&&(ve=a.toneMapping);const Qe={shaderID:xe,shaderType:T.type,shaderName:T.name,vertexShader:Ce,fragmentShader:Ge,defines:T.defines,customVertexShaderID:oe,customFragmentShaderID:be,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:v,batching:$e,batchingColor:$e&&j._colorsTexture!==null,instancing:je,instancingColor:je&&j.instanceColor!==null,instancingMorph:je&&j.morphTexture!==null,outputColorSpace:Te===null?a.outputColorSpace:Te.isXRRenderTarget===!0?Te.texture.colorSpace:Rt.workingColorSpace,alphaToCoverage:!!T.alphaToCoverage,map:Vt,matcap:ut,envMap:pt,envMapMode:pt&&Q.mapping,envMapCubeUVHeight:fe,aoMap:gt,lightMap:_t,bumpMap:sn,normalMap:tn,displacementMap:nn,emissiveMap:$t,normalMapObjectSpace:tn&&T.normalMapType===Ky,normalMapTangentSpace:tn&&T.normalMapType===G_,packedNormalMap:tn&&T.normalMapType===G_&&R2(T.normalMap.format),metalnessMap:Nt,roughnessMap:rn,anisotropy:K,anisotropyMap:ne,clearcoat:Ut,clearcoatMap:de,clearcoatNormalMap:Re,clearcoatRoughnessMap:Ie,dispersion:Ct,iridescence:P,iridescenceMap:ue,iridescenceThicknessMap:he,sheen:E,sheenColorMap:De,sheenRoughnessMap:Ve,specularMap:Be,specularColorMap:Pe,specularIntensityMap:nt,transmission:J,transmissionMap:it,thicknessMap:st,gradientMap:Y,opaque:T.transparent===!1&&T.blending===yo&&T.alphaToCoverage===!1,alphaMap:Ne,alphaTest:ge,alphaHash:we,combine:T.combine,mapUv:Vt&&b(T.map.channel),aoMapUv:gt&&b(T.aoMap.channel),lightMapUv:_t&&b(T.lightMap.channel),bumpMapUv:sn&&b(T.bumpMap.channel),normalMapUv:tn&&b(T.normalMap.channel),displacementMapUv:nn&&b(T.displacementMap.channel),emissiveMapUv:$t&&b(T.emissiveMap.channel),metalnessMapUv:Nt&&b(T.metalnessMap.channel),roughnessMapUv:rn&&b(T.roughnessMap.channel),anisotropyMapUv:ne&&b(T.anisotropyMap.channel),clearcoatMapUv:de&&b(T.clearcoatMap.channel),clearcoatNormalMapUv:Re&&b(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ie&&b(T.clearcoatRoughnessMap.channel),iridescenceMapUv:ue&&b(T.iridescenceMap.channel),iridescenceThicknessMapUv:he&&b(T.iridescenceThicknessMap.channel),sheenColorMapUv:De&&b(T.sheenColorMap.channel),sheenRoughnessMapUv:Ve&&b(T.sheenRoughnessMap.channel),specularMapUv:Be&&b(T.specularMap.channel),specularColorMapUv:Pe&&b(T.specularColorMap.channel),specularIntensityMapUv:nt&&b(T.specularIntensityMap.channel),transmissionMapUv:it&&b(T.transmissionMap.channel),thicknessMapUv:st&&b(T.thicknessMap.channel),alphaMapUv:Ne&&b(T.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(tn||K),vertexNormals:!!X.attributes.normal,vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:j.isPoints===!0&&!!X.attributes.uv&&(Vt||Ne),fog:!!ce,useFog:T.fog===!0,fogExp2:!!ce&&ce.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||X.attributes.normal===void 0&&tn===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:qe,skinning:j.isSkinnedMesh===!0,hasPositionAttribute:X.attributes.position!==void 0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:W,morphTextureStride:ye,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numLightProbes:N.numLightProbes,numLightProbeGrids:me.length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:T.dithering,shadowMapEnabled:a.shadowMap.enabled&&Z.length>0,shadowMapType:a.shadowMap.type,toneMapping:ve,decodeVideoTexture:Vt&&T.map.isVideoTexture===!0&&Rt.getTransfer(T.map.colorSpace)===Yt,decodeVideoTextureEmissive:$t&&T.emissiveMap.isVideoTexture===!0&&Rt.getTransfer(T.emissiveMap.colorSpace)===Yt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Sa,flipSided:T.side===mi,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Fe&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Fe&&T.extensions.multiDraw===!0||$e)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Qe.vertexUv1s=m.has(1),Qe.vertexUv2s=m.has(2),Qe.vertexUv3s=m.has(3),m.clear(),Qe}function y(T){const N=[];if(T.shaderID?N.push(T.shaderID):(N.push(T.customVertexShaderID),N.push(T.customFragmentShaderID)),T.defines!==void 0)for(const Z in T.defines)N.push(Z),N.push(T.defines[Z]);return T.isRawShaderMaterial===!1&&(M(N,T),I(N,T),N.push(a.outputColorSpace)),N.push(T.customProgramCacheKey),N.join()}function M(T,N){T.push(N.precision),T.push(N.outputColorSpace),T.push(N.envMapMode),T.push(N.envMapCubeUVHeight),T.push(N.mapUv),T.push(N.alphaMapUv),T.push(N.lightMapUv),T.push(N.aoMapUv),T.push(N.bumpMapUv),T.push(N.normalMapUv),T.push(N.displacementMapUv),T.push(N.emissiveMapUv),T.push(N.metalnessMapUv),T.push(N.roughnessMapUv),T.push(N.anisotropyMapUv),T.push(N.clearcoatMapUv),T.push(N.clearcoatNormalMapUv),T.push(N.clearcoatRoughnessMapUv),T.push(N.iridescenceMapUv),T.push(N.iridescenceThicknessMapUv),T.push(N.sheenColorMapUv),T.push(N.sheenRoughnessMapUv),T.push(N.specularMapUv),T.push(N.specularColorMapUv),T.push(N.specularIntensityMapUv),T.push(N.transmissionMapUv),T.push(N.thicknessMapUv),T.push(N.combine),T.push(N.fogExp2),T.push(N.sizeAttenuation),T.push(N.morphTargetsCount),T.push(N.morphAttributeCount),T.push(N.numDirLights),T.push(N.numPointLights),T.push(N.numSpotLights),T.push(N.numSpotLightMaps),T.push(N.numHemiLights),T.push(N.numRectAreaLights),T.push(N.numDirLightShadows),T.push(N.numPointLightShadows),T.push(N.numSpotLightShadows),T.push(N.numSpotLightShadowsWithMaps),T.push(N.numLightProbes),T.push(N.shadowMapType),T.push(N.toneMapping),T.push(N.numClippingPlanes),T.push(N.numClipIntersection),T.push(N.depthPacking)}function I(T,N){u.disableAll(),N.instancing&&u.enable(0),N.instancingColor&&u.enable(1),N.instancingMorph&&u.enable(2),N.matcap&&u.enable(3),N.envMap&&u.enable(4),N.normalMapObjectSpace&&u.enable(5),N.normalMapTangentSpace&&u.enable(6),N.clearcoat&&u.enable(7),N.iridescence&&u.enable(8),N.alphaTest&&u.enable(9),N.vertexColors&&u.enable(10),N.vertexAlphas&&u.enable(11),N.vertexUv1s&&u.enable(12),N.vertexUv2s&&u.enable(13),N.vertexUv3s&&u.enable(14),N.vertexTangents&&u.enable(15),N.anisotropy&&u.enable(16),N.alphaHash&&u.enable(17),N.batching&&u.enable(18),N.dispersion&&u.enable(19),N.batchingColor&&u.enable(20),N.gradientMap&&u.enable(21),N.packedNormalMap&&u.enable(22),N.vertexNormals&&u.enable(23),T.push(u.mask),u.disableAll(),N.fog&&u.enable(0),N.useFog&&u.enable(1),N.flatShading&&u.enable(2),N.logarithmicDepthBuffer&&u.enable(3),N.reversedDepthBuffer&&u.enable(4),N.skinning&&u.enable(5),N.morphTargets&&u.enable(6),N.morphNormals&&u.enable(7),N.morphColors&&u.enable(8),N.premultipliedAlpha&&u.enable(9),N.shadowMapEnabled&&u.enable(10),N.doubleSided&&u.enable(11),N.flipSided&&u.enable(12),N.useDepthPacking&&u.enable(13),N.dithering&&u.enable(14),N.transmission&&u.enable(15),N.sheen&&u.enable(16),N.opaque&&u.enable(17),N.pointsUvs&&u.enable(18),N.decodeVideoTexture&&u.enable(19),N.decodeVideoTextureEmissive&&u.enable(20),N.alphaToCoverage&&u.enable(21),N.numLightProbeGrids>0&&u.enable(22),N.hasPositionAttribute&&u.enable(23),T.push(u.mask)}function B(T){const N=x[T.type];let Z;if(N){const k=xa[N];Z=JE.clone(k.uniforms)}else Z=T.uniforms;return Z}function C(T,N){let Z=g.get(N);return Z!==void 0?++Z.usedTimes:(Z=new E2(a,N,T,o),d.push(Z),g.set(N,Z)),Z}function O(T){if(--T.usedTimes===0){const N=d.indexOf(T);d[N]=d[d.length-1],d.pop(),g.delete(T.cacheKey),T.destroy()}}function L(T){h.remove(T)}function F(){h.dispose()}return{getParameters:w,getProgramCacheKey:y,getUniforms:B,acquireProgram:C,releaseProgram:O,releaseShaderCache:L,programs:d,dispose:F}}function w2(){let a=new WeakMap;function e(u){return a.has(u)}function i(u){let h=a.get(u);return h===void 0&&(h={},a.set(u,h)),h}function r(u){a.delete(u)}function o(u,h,m){a.get(u)[h]=m}function c(){a=new WeakMap}return{has:e,get:i,remove:r,update:o,dispose:c}}function D2(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.materialVariant!==e.materialVariant?a.materialVariant-e.materialVariant:a.z!==e.z?a.z-e.z:a.id-e.id}function Ov(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function Pv(){const a=[];let e=0;const i=[],r=[],o=[];function c(){e=0,i.length=0,r.length=0,o.length=0}function u(v){let x=0;return v.isInstancedMesh&&(x+=2),v.isSkinnedMesh&&(x+=1),x}function h(v,x,b,w,y,M){let I=a[e];return I===void 0?(I={id:v.id,object:v,geometry:x,material:b,materialVariant:u(v),groupOrder:w,renderOrder:v.renderOrder,z:y,group:M},a[e]=I):(I.id=v.id,I.object=v,I.geometry=x,I.material=b,I.materialVariant=u(v),I.groupOrder=w,I.renderOrder=v.renderOrder,I.z=y,I.group=M),e++,I}function m(v,x,b,w,y,M){const I=h(v,x,b,w,y,M);b.transmission>0?r.push(I):b.transparent===!0?o.push(I):i.push(I)}function d(v,x,b,w,y,M){const I=h(v,x,b,w,y,M);b.transmission>0?r.unshift(I):b.transparent===!0?o.unshift(I):i.unshift(I)}function g(v,x,b){i.length>1&&i.sort(v||D2),r.length>1&&r.sort(x||Ov),o.length>1&&o.sort(x||Ov),b&&(i.reverse(),r.reverse(),o.reverse())}function _(){for(let v=e,x=a.length;v<x;v++){const b=a[v];if(b.id===null)break;b.id=null,b.object=null,b.geometry=null,b.material=null,b.group=null}}return{opaque:i,transmissive:r,transparent:o,init:c,push:m,unshift:d,finish:_,sort:g}}function L2(){let a=new WeakMap;function e(r,o){const c=a.get(r);let u;return c===void 0?(u=new Pv,a.set(r,[u])):o>=c.length?(u=new Pv,c.push(u)):u=c[o],u}function i(){a=new WeakMap}return{get:e,dispose:i}}function N2(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new ae,color:new Xt};break;case"SpotLight":i={position:new ae,direction:new ae,color:new Xt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new ae,color:new Xt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new ae,skyColor:new Xt,groundColor:new Xt};break;case"RectAreaLight":i={color:new Xt,position:new ae,halfWidth:new ae,halfHeight:new ae};break}return a[e.id]=i,i}}}function U2(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=i,i}}}let O2=0;function P2(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function I2(a){const e=new N2,i=U2(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)r.probe.push(new ae);const o=new ae,c=new En,u=new En;function h(d){let g=0,_=0,v=0;for(let N=0;N<9;N++)r.probe[N].set(0,0,0);let x=0,b=0,w=0,y=0,M=0,I=0,B=0,C=0,O=0,L=0,F=0;d.sort(P2);for(let N=0,Z=d.length;N<Z;N++){const k=d[N],j=k.color,me=k.intensity,ce=k.distance;let X=null;if(k.shadow&&k.shadow.map&&(k.shadow.map.texture.format===yr?X=k.shadow.map.texture:X=k.shadow.map.depthTexture||k.shadow.map.texture),k.isAmbientLight)g+=j.r*me,_+=j.g*me,v+=j.b*me;else if(k.isLightProbe){for(let z=0;z<9;z++)r.probe[z].addScaledVector(k.sh.coefficients[z],me);F++}else if(k.isDirectionalLight){const z=e.get(k);if(z.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const H=k.shadow,Q=i.get(k);Q.shadowIntensity=H.intensity,Q.shadowBias=H.bias,Q.shadowNormalBias=H.normalBias,Q.shadowRadius=H.radius,Q.shadowMapSize=H.mapSize,r.directionalShadow[x]=Q,r.directionalShadowMap[x]=X,r.directionalShadowMatrix[x]=k.shadow.matrix,I++}r.directional[x]=z,x++}else if(k.isSpotLight){const z=e.get(k);z.position.setFromMatrixPosition(k.matrixWorld),z.color.copy(j).multiplyScalar(me),z.distance=ce,z.coneCos=Math.cos(k.angle),z.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),z.decay=k.decay,r.spot[w]=z;const H=k.shadow;if(k.map&&(r.spotLightMap[O]=k.map,O++,H.updateMatrices(k),k.castShadow&&L++),r.spotLightMatrix[w]=H.matrix,k.castShadow){const Q=i.get(k);Q.shadowIntensity=H.intensity,Q.shadowBias=H.bias,Q.shadowNormalBias=H.normalBias,Q.shadowRadius=H.radius,Q.shadowMapSize=H.mapSize,r.spotShadow[w]=Q,r.spotShadowMap[w]=X,C++}w++}else if(k.isRectAreaLight){const z=e.get(k);z.color.copy(j).multiplyScalar(me),z.halfWidth.set(k.width*.5,0,0),z.halfHeight.set(0,k.height*.5,0),r.rectArea[y]=z,y++}else if(k.isPointLight){const z=e.get(k);if(z.color.copy(k.color).multiplyScalar(k.intensity),z.distance=k.distance,z.decay=k.decay,k.castShadow){const H=k.shadow,Q=i.get(k);Q.shadowIntensity=H.intensity,Q.shadowBias=H.bias,Q.shadowNormalBias=H.normalBias,Q.shadowRadius=H.radius,Q.shadowMapSize=H.mapSize,Q.shadowCameraNear=H.camera.near,Q.shadowCameraFar=H.camera.far,r.pointShadow[b]=Q,r.pointShadowMap[b]=X,r.pointShadowMatrix[b]=k.shadow.matrix,B++}r.point[b]=z,b++}else if(k.isHemisphereLight){const z=e.get(k);z.skyColor.copy(k.color).multiplyScalar(me),z.groundColor.copy(k.groundColor).multiplyScalar(me),r.hemi[M]=z,M++}}y>0&&(a.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Xe.LTC_FLOAT_1,r.rectAreaLTC2=Xe.LTC_FLOAT_2):(r.rectAreaLTC1=Xe.LTC_HALF_1,r.rectAreaLTC2=Xe.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=_,r.ambient[2]=v;const T=r.hash;(T.directionalLength!==x||T.pointLength!==b||T.spotLength!==w||T.rectAreaLength!==y||T.hemiLength!==M||T.numDirectionalShadows!==I||T.numPointShadows!==B||T.numSpotShadows!==C||T.numSpotMaps!==O||T.numLightProbes!==F)&&(r.directional.length=x,r.spot.length=w,r.rectArea.length=y,r.point.length=b,r.hemi.length=M,r.directionalShadow.length=I,r.directionalShadowMap.length=I,r.pointShadow.length=B,r.pointShadowMap.length=B,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=I,r.pointShadowMatrix.length=B,r.spotLightMatrix.length=C+O-L,r.spotLightMap.length=O,r.numSpotLightShadowsWithMaps=L,r.numLightProbes=F,T.directionalLength=x,T.pointLength=b,T.spotLength=w,T.rectAreaLength=y,T.hemiLength=M,T.numDirectionalShadows=I,T.numPointShadows=B,T.numSpotShadows=C,T.numSpotMaps=O,T.numLightProbes=F,r.version=O2++)}function m(d,g){let _=0,v=0,x=0,b=0,w=0;const y=g.matrixWorldInverse;for(let M=0,I=d.length;M<I;M++){const B=d[M];if(B.isDirectionalLight){const C=r.directional[_];C.direction.setFromMatrixPosition(B.matrixWorld),o.setFromMatrixPosition(B.target.matrixWorld),C.direction.sub(o),C.direction.transformDirection(y),_++}else if(B.isSpotLight){const C=r.spot[x];C.position.setFromMatrixPosition(B.matrixWorld),C.position.applyMatrix4(y),C.direction.setFromMatrixPosition(B.matrixWorld),o.setFromMatrixPosition(B.target.matrixWorld),C.direction.sub(o),C.direction.transformDirection(y),x++}else if(B.isRectAreaLight){const C=r.rectArea[b];C.position.setFromMatrixPosition(B.matrixWorld),C.position.applyMatrix4(y),u.identity(),c.copy(B.matrixWorld),c.premultiply(y),u.extractRotation(c),C.halfWidth.set(B.width*.5,0,0),C.halfHeight.set(0,B.height*.5,0),C.halfWidth.applyMatrix4(u),C.halfHeight.applyMatrix4(u),b++}else if(B.isPointLight){const C=r.point[v];C.position.setFromMatrixPosition(B.matrixWorld),C.position.applyMatrix4(y),v++}else if(B.isHemisphereLight){const C=r.hemi[w];C.direction.setFromMatrixPosition(B.matrixWorld),C.direction.transformDirection(y),w++}}}return{setup:h,setupView:m,state:r}}function Iv(a){const e=new I2(a),i=[],r=[],o=[];function c(v){_.camera=v,i.length=0,r.length=0,o.length=0}function u(v){i.push(v)}function h(v){r.push(v)}function m(v){o.push(v)}function d(){e.setup(i)}function g(v){e.setupView(i,v)}const _={lightsArray:i,shadowsArray:r,lightProbeGridArray:o,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:_,setupLights:d,setupLightsView:g,pushLight:u,pushShadow:h,pushLightProbeGrid:m}}function F2(a){let e=new WeakMap;function i(o,c=0){const u=e.get(o);let h;return u===void 0?(h=new Iv(a),e.set(o,[h])):c>=u.length?(h=new Iv(a),u.push(h)):h=u[c],h}function r(){e=new WeakMap}return{get:i,dispose:r}}const B2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,z2=`uniform sampler2D shadow_pass;
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
}`,H2=[new ae(1,0,0),new ae(-1,0,0),new ae(0,1,0),new ae(0,-1,0),new ae(0,0,1),new ae(0,0,-1)],G2=[new ae(0,-1,0),new ae(0,-1,0),new ae(0,0,1),new ae(0,0,-1),new ae(0,-1,0),new ae(0,-1,0)],Fv=new En,Cl=new ae,Rh=new ae;function V2(a,e,i){let r=new Nx;const o=new It,c=new It,u=new xn,h=new nb,m=new ib,d={},g=i.maxTextureSize,_={[is]:mi,[mi]:is,[Sa]:Sa},v=new Xi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new It},radius:{value:4}},vertexShader:B2,fragmentShader:z2}),x=v.clone();x.defines.HORIZONTAL_PASS=1;const b=new ki;b.setAttribute("position",new Ta(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new Ci(b,v),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=xu;let M=this.type;this.render=function(L,F,T){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||L.length===0)return;this.type===Ry&&(lt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=xu);const N=a.getRenderTarget(),Z=a.getActiveCubeFace(),k=a.getActiveMipmapLevel(),j=a.state;j.setBlending(ts),j.buffers.depth.getReversed()===!0?j.buffers.color.setClear(0,0,0,0):j.buffers.color.setClear(1,1,1,1),j.buffers.depth.setTest(!0),j.setScissorTest(!1);const me=M!==this.type;me&&F.traverse(function(ce){ce.material&&(Array.isArray(ce.material)?ce.material.forEach(X=>X.needsUpdate=!0):ce.material.needsUpdate=!0)});for(let ce=0,X=L.length;ce<X;ce++){const z=L[ce],H=z.shadow;if(H===void 0){lt("WebGLShadowMap:",z,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;o.copy(H.mapSize);const Q=H.getFrameExtents();o.multiply(Q),c.copy(H.mapSize),(o.x>g||o.y>g)&&(o.x>g&&(c.x=Math.floor(g/Q.x),o.x=c.x*Q.x,H.mapSize.x=c.x),o.y>g&&(c.y=Math.floor(g/Q.y),o.y=c.y*Q.y,H.mapSize.y=c.y));const fe=a.state.buffers.depth.getReversed();if(H.camera._reversedDepth=fe,H.map===null||me===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===wl){if(z.isPointLight){lt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new ba(o.x,o.y,{format:yr,type:as,minFilter:pn,magFilter:pn,generateMipmaps:!1}),H.map.texture.name=z.name+".shadowMap",H.map.depthTexture=new wo(o.x,o.y,Ma),H.map.depthTexture.name=z.name+".shadowMapDepth",H.map.depthTexture.format=ss,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=jn,H.map.depthTexture.magFilter=jn}else z.isPointLight?(H.map=new Gx(o.x),H.map.depthTexture=new jE(o.x,Aa)):(H.map=new ba(o.x,o.y),H.map.depthTexture=new wo(o.x,o.y,Aa)),H.map.depthTexture.name=z.name+".shadowMap",H.map.depthTexture.format=ss,this.type===xu?(H.map.depthTexture.compareFunction=fe?Ip:Pp,H.map.depthTexture.minFilter=pn,H.map.depthTexture.magFilter=pn):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=jn,H.map.depthTexture.magFilter=jn);H.camera.updateProjectionMatrix()}const xe=H.map.isWebGLCubeRenderTarget?6:1;for(let U=0;U<xe;U++){if(H.map.isWebGLCubeRenderTarget)a.setRenderTarget(H.map,U),a.clear();else{U===0&&(a.setRenderTarget(H.map),a.clear());const W=H.getViewport(U);u.set(c.x*W.x,c.y*W.y,c.x*W.z,c.y*W.w),j.viewport(u)}if(z.isPointLight){const W=H.camera,ye=H.matrix,Ce=z.distance||W.far;Ce!==W.far&&(W.far=Ce,W.updateProjectionMatrix()),Cl.setFromMatrixPosition(z.matrixWorld),W.position.copy(Cl),Rh.copy(W.position),Rh.add(H2[U]),W.up.copy(G2[U]),W.lookAt(Rh),W.updateMatrixWorld(),ye.makeTranslation(-Cl.x,-Cl.y,-Cl.z),Fv.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),H._frustum.setFromProjectionMatrix(Fv,W.coordinateSystem,W.reversedDepth)}else H.updateMatrices(z);r=H.getFrustum(),C(F,T,H.camera,z,this.type)}H.isPointLightShadow!==!0&&this.type===wl&&I(H,T),H.needsUpdate=!1}M=this.type,y.needsUpdate=!1,a.setRenderTarget(N,Z,k)};function I(L,F){const T=e.update(w);v.defines.VSM_SAMPLES!==L.blurSamples&&(v.defines.VSM_SAMPLES=L.blurSamples,x.defines.VSM_SAMPLES=L.blurSamples,v.needsUpdate=!0,x.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new ba(o.x,o.y,{format:yr,type:as})),v.uniforms.shadow_pass.value=L.map.depthTexture,v.uniforms.resolution.value=L.mapSize,v.uniforms.radius.value=L.radius,a.setRenderTarget(L.mapPass),a.clear(),a.renderBufferDirect(F,null,T,v,w,null),x.uniforms.shadow_pass.value=L.mapPass.texture,x.uniforms.resolution.value=L.mapSize,x.uniforms.radius.value=L.radius,a.setRenderTarget(L.map),a.clear(),a.renderBufferDirect(F,null,T,x,w,null)}function B(L,F,T,N){let Z=null;const k=T.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(k!==void 0)Z=k;else if(Z=T.isPointLight===!0?m:h,a.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const j=Z.uuid,me=F.uuid;let ce=d[j];ce===void 0&&(ce={},d[j]=ce);let X=ce[me];X===void 0&&(X=Z.clone(),ce[me]=X,F.addEventListener("dispose",O)),Z=X}if(Z.visible=F.visible,Z.wireframe=F.wireframe,N===wl?Z.side=F.shadowSide!==null?F.shadowSide:F.side:Z.side=F.shadowSide!==null?F.shadowSide:_[F.side],Z.alphaMap=F.alphaMap,Z.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,Z.map=F.map,Z.clipShadows=F.clipShadows,Z.clippingPlanes=F.clippingPlanes,Z.clipIntersection=F.clipIntersection,Z.displacementMap=F.displacementMap,Z.displacementScale=F.displacementScale,Z.displacementBias=F.displacementBias,Z.wireframeLinewidth=F.wireframeLinewidth,Z.linewidth=F.linewidth,T.isPointLight===!0&&Z.isMeshDistanceMaterial===!0){const j=a.properties.get(Z);j.light=T}return Z}function C(L,F,T,N,Z){if(L.visible===!1)return;if(L.layers.test(F.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&Z===wl)&&(!L.frustumCulled||r.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,L.matrixWorld);const me=e.update(L),ce=L.material;if(Array.isArray(ce)){const X=me.groups;for(let z=0,H=X.length;z<H;z++){const Q=X[z],fe=ce[Q.materialIndex];if(fe&&fe.visible){const xe=B(L,fe,N,Z);L.onBeforeShadow(a,L,F,T,me,xe,Q),a.renderBufferDirect(T,null,me,xe,L,Q),L.onAfterShadow(a,L,F,T,me,xe,Q)}}}else if(ce.visible){const X=B(L,ce,N,Z);L.onBeforeShadow(a,L,F,T,me,X,null),a.renderBufferDirect(T,null,me,X,L,null),L.onAfterShadow(a,L,F,T,me,X,null)}}const j=L.children;for(let me=0,ce=j.length;me<ce;me++)C(j[me],F,T,N,Z)}function O(L){L.target.removeEventListener("dispose",O);for(const T in d){const N=d[T],Z=L.target.uuid;Z in N&&(N[Z].dispose(),delete N[Z])}}}function k2(a,e){function i(){let Y=!1;const Ne=new xn;let ge=null;const we=new xn(0,0,0,0);return{setMask:function(Fe){ge!==Fe&&!Y&&(a.colorMask(Fe,Fe,Fe,Fe),ge=Fe)},setLocked:function(Fe){Y=Fe},setClear:function(Fe,ve,Qe,Ye,jt){jt===!0&&(Fe*=Ye,ve*=Ye,Qe*=Ye),Ne.set(Fe,ve,Qe,Ye),we.equals(Ne)===!1&&(a.clearColor(Fe,ve,Qe,Ye),we.copy(Ne))},reset:function(){Y=!1,ge=null,we.set(-1,0,0,0)}}}function r(){let Y=!1,Ne=!1,ge=null,we=null,Fe=null;return{setReversed:function(ve){if(Ne!==ve){const Qe=e.get("EXT_clip_control");ve?Qe.clipControlEXT(Qe.LOWER_LEFT_EXT,Qe.ZERO_TO_ONE_EXT):Qe.clipControlEXT(Qe.LOWER_LEFT_EXT,Qe.NEGATIVE_ONE_TO_ONE_EXT),Ne=ve;const Ye=Fe;Fe=null,this.setClear(Ye)}},getReversed:function(){return Ne},setTest:function(ve){ve?Te(a.DEPTH_TEST):qe(a.DEPTH_TEST)},setMask:function(ve){ge!==ve&&!Y&&(a.depthMask(ve),ge=ve)},setFunc:function(ve){if(Ne&&(ve=rE[ve]),we!==ve){switch(ve){case Bh:a.depthFunc(a.NEVER);break;case zh:a.depthFunc(a.ALWAYS);break;case Hh:a.depthFunc(a.LESS);break;case Ro:a.depthFunc(a.LEQUAL);break;case Gh:a.depthFunc(a.EQUAL);break;case Vh:a.depthFunc(a.GEQUAL);break;case kh:a.depthFunc(a.GREATER);break;case Xh:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}we=ve}},setLocked:function(ve){Y=ve},setClear:function(ve){Fe!==ve&&(Fe=ve,Ne&&(ve=1-ve),a.clearDepth(ve))},reset:function(){Y=!1,ge=null,we=null,Fe=null,Ne=!1}}}function o(){let Y=!1,Ne=null,ge=null,we=null,Fe=null,ve=null,Qe=null,Ye=null,jt=null;return{setTest:function(Ft){Y||(Ft?Te(a.STENCIL_TEST):qe(a.STENCIL_TEST))},setMask:function(Ft){Ne!==Ft&&!Y&&(a.stencilMask(Ft),Ne=Ft)},setFunc:function(Ft,Fn,Bn){(ge!==Ft||we!==Fn||Fe!==Bn)&&(a.stencilFunc(Ft,Fn,Bn),ge=Ft,we=Fn,Fe=Bn)},setOp:function(Ft,Fn,Bn){(ve!==Ft||Qe!==Fn||Ye!==Bn)&&(a.stencilOp(Ft,Fn,Bn),ve=Ft,Qe=Fn,Ye=Bn)},setLocked:function(Ft){Y=Ft},setClear:function(Ft){jt!==Ft&&(a.clearStencil(Ft),jt=Ft)},reset:function(){Y=!1,Ne=null,ge=null,we=null,Fe=null,ve=null,Qe=null,Ye=null,jt=null}}}const c=new i,u=new r,h=new o,m=new WeakMap,d=new WeakMap;let g={},_={},v={},x=new WeakMap,b=[],w=null,y=!1,M=null,I=null,B=null,C=null,O=null,L=null,F=null,T=new Xt(0,0,0),N=0,Z=!1,k=null,j=null,me=null,ce=null,X=null;const z=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,Q=0;const fe=a.getParameter(a.VERSION);fe.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(fe)[1]),H=Q>=1):fe.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(fe)[1]),H=Q>=2);let xe=null,U={};const W=a.getParameter(a.SCISSOR_BOX),ye=a.getParameter(a.VIEWPORT),Ce=new xn().fromArray(W),Ge=new xn().fromArray(ye);function oe(Y,Ne,ge,we){const Fe=new Uint8Array(4),ve=a.createTexture();a.bindTexture(Y,ve),a.texParameteri(Y,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(Y,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let Qe=0;Qe<ge;Qe++)Y===a.TEXTURE_3D||Y===a.TEXTURE_2D_ARRAY?a.texImage3D(Ne,0,a.RGBA,1,1,we,0,a.RGBA,a.UNSIGNED_BYTE,Fe):a.texImage2D(Ne+Qe,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,Fe);return ve}const be={};be[a.TEXTURE_2D]=oe(a.TEXTURE_2D,a.TEXTURE_2D,1),be[a.TEXTURE_CUBE_MAP]=oe(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),be[a.TEXTURE_2D_ARRAY]=oe(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1),be[a.TEXTURE_3D]=oe(a.TEXTURE_3D,a.TEXTURE_3D,1,1),c.setClear(0,0,0,1),u.setClear(1),h.setClear(0),Te(a.DEPTH_TEST),u.setFunc(Ro),sn(!1),tn(B_),Te(a.CULL_FACE),gt(ts);function Te(Y){g[Y]!==!0&&(a.enable(Y),g[Y]=!0)}function qe(Y){g[Y]!==!1&&(a.disable(Y),g[Y]=!1)}function je(Y,Ne){return v[Y]!==Ne?(a.bindFramebuffer(Y,Ne),v[Y]=Ne,Y===a.DRAW_FRAMEBUFFER&&(v[a.FRAMEBUFFER]=Ne),Y===a.FRAMEBUFFER&&(v[a.DRAW_FRAMEBUFFER]=Ne),!0):!1}function $e(Y,Ne){let ge=b,we=!1;if(Y){ge=x.get(Ne),ge===void 0&&(ge=[],x.set(Ne,ge));const Fe=Y.textures;if(ge.length!==Fe.length||ge[0]!==a.COLOR_ATTACHMENT0){for(let ve=0,Qe=Fe.length;ve<Qe;ve++)ge[ve]=a.COLOR_ATTACHMENT0+ve;ge.length=Fe.length,we=!0}}else ge[0]!==a.BACK&&(ge[0]=a.BACK,we=!0);we&&a.drawBuffers(ge)}function Vt(Y){return w!==Y?(a.useProgram(Y),w=Y,!0):!1}const ut={[_r]:a.FUNC_ADD,[wy]:a.FUNC_SUBTRACT,[Dy]:a.FUNC_REVERSE_SUBTRACT};ut[Ly]=a.MIN,ut[Ny]=a.MAX;const pt={[Uy]:a.ZERO,[Oy]:a.ONE,[Py]:a.SRC_COLOR,[Ih]:a.SRC_ALPHA,[Gy]:a.SRC_ALPHA_SATURATE,[zy]:a.DST_COLOR,[Fy]:a.DST_ALPHA,[Iy]:a.ONE_MINUS_SRC_COLOR,[Fh]:a.ONE_MINUS_SRC_ALPHA,[Hy]:a.ONE_MINUS_DST_COLOR,[By]:a.ONE_MINUS_DST_ALPHA,[Vy]:a.CONSTANT_COLOR,[ky]:a.ONE_MINUS_CONSTANT_COLOR,[Xy]:a.CONSTANT_ALPHA,[Wy]:a.ONE_MINUS_CONSTANT_ALPHA};function gt(Y,Ne,ge,we,Fe,ve,Qe,Ye,jt,Ft){if(Y===ts){y===!0&&(qe(a.BLEND),y=!1);return}if(y===!1&&(Te(a.BLEND),y=!0),Y!==Cy){if(Y!==M||Ft!==Z){if((I!==_r||O!==_r)&&(a.blendEquation(a.FUNC_ADD),I=_r,O=_r),Ft)switch(Y){case yo:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case Ph:a.blendFunc(a.ONE,a.ONE);break;case z_:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case H_:a.blendFuncSeparate(a.DST_COLOR,a.ONE_MINUS_SRC_ALPHA,a.ZERO,a.ONE);break;default:Lt("WebGLState: Invalid blending: ",Y);break}else switch(Y){case yo:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case Ph:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE,a.ONE,a.ONE);break;case z_:Lt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case H_:Lt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Lt("WebGLState: Invalid blending: ",Y);break}B=null,C=null,L=null,F=null,T.set(0,0,0),N=0,M=Y,Z=Ft}return}Fe=Fe||Ne,ve=ve||ge,Qe=Qe||we,(Ne!==I||Fe!==O)&&(a.blendEquationSeparate(ut[Ne],ut[Fe]),I=Ne,O=Fe),(ge!==B||we!==C||ve!==L||Qe!==F)&&(a.blendFuncSeparate(pt[ge],pt[we],pt[ve],pt[Qe]),B=ge,C=we,L=ve,F=Qe),(Ye.equals(T)===!1||jt!==N)&&(a.blendColor(Ye.r,Ye.g,Ye.b,jt),T.copy(Ye),N=jt),M=Y,Z=!1}function _t(Y,Ne){Y.side===Sa?qe(a.CULL_FACE):Te(a.CULL_FACE);let ge=Y.side===mi;Ne&&(ge=!ge),sn(ge),Y.blending===yo&&Y.transparent===!1?gt(ts):gt(Y.blending,Y.blendEquation,Y.blendSrc,Y.blendDst,Y.blendEquationAlpha,Y.blendSrcAlpha,Y.blendDstAlpha,Y.blendColor,Y.blendAlpha,Y.premultipliedAlpha),u.setFunc(Y.depthFunc),u.setTest(Y.depthTest),u.setMask(Y.depthWrite),c.setMask(Y.colorWrite);const we=Y.stencilWrite;h.setTest(we),we&&(h.setMask(Y.stencilWriteMask),h.setFunc(Y.stencilFunc,Y.stencilRef,Y.stencilFuncMask),h.setOp(Y.stencilFail,Y.stencilZFail,Y.stencilZPass)),$t(Y.polygonOffset,Y.polygonOffsetFactor,Y.polygonOffsetUnits),Y.alphaToCoverage===!0?Te(a.SAMPLE_ALPHA_TO_COVERAGE):qe(a.SAMPLE_ALPHA_TO_COVERAGE)}function sn(Y){k!==Y&&(Y?a.frontFace(a.CW):a.frontFace(a.CCW),k=Y)}function tn(Y){Y!==Ty?(Te(a.CULL_FACE),Y!==j&&(Y===B_?a.cullFace(a.BACK):Y===Ay?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):qe(a.CULL_FACE),j=Y}function nn(Y){Y!==me&&(H&&a.lineWidth(Y),me=Y)}function $t(Y,Ne,ge){Y?(Te(a.POLYGON_OFFSET_FILL),(ce!==Ne||X!==ge)&&(ce=Ne,X=ge,u.getReversed()&&(Ne=-Ne),a.polygonOffset(Ne,ge))):qe(a.POLYGON_OFFSET_FILL)}function Nt(Y){Y?Te(a.SCISSOR_TEST):qe(a.SCISSOR_TEST)}function rn(Y){Y===void 0&&(Y=a.TEXTURE0+z-1),xe!==Y&&(a.activeTexture(Y),xe=Y)}function K(Y,Ne,ge){ge===void 0&&(xe===null?ge=a.TEXTURE0+z-1:ge=xe);let we=U[ge];we===void 0&&(we={type:void 0,texture:void 0},U[ge]=we),(we.type!==Y||we.texture!==Ne)&&(xe!==ge&&(a.activeTexture(ge),xe=ge),a.bindTexture(Y,Ne||be[Y]),we.type=Y,we.texture=Ne)}function Ut(){const Y=U[xe];Y!==void 0&&Y.type!==void 0&&(a.bindTexture(Y.type,null),Y.type=void 0,Y.texture=void 0)}function Ct(){try{a.compressedTexImage2D(...arguments)}catch(Y){Lt("WebGLState:",Y)}}function P(){try{a.compressedTexImage3D(...arguments)}catch(Y){Lt("WebGLState:",Y)}}function E(){try{a.texSubImage2D(...arguments)}catch(Y){Lt("WebGLState:",Y)}}function J(){try{a.texSubImage3D(...arguments)}catch(Y){Lt("WebGLState:",Y)}}function ne(){try{a.compressedTexSubImage2D(...arguments)}catch(Y){Lt("WebGLState:",Y)}}function de(){try{a.compressedTexSubImage3D(...arguments)}catch(Y){Lt("WebGLState:",Y)}}function Re(){try{a.texStorage2D(...arguments)}catch(Y){Lt("WebGLState:",Y)}}function Ie(){try{a.texStorage3D(...arguments)}catch(Y){Lt("WebGLState:",Y)}}function ue(){try{a.texImage2D(...arguments)}catch(Y){Lt("WebGLState:",Y)}}function he(){try{a.texImage3D(...arguments)}catch(Y){Lt("WebGLState:",Y)}}function De(Y){return _[Y]!==void 0?_[Y]:a.getParameter(Y)}function Ve(Y,Ne){_[Y]!==Ne&&(a.pixelStorei(Y,Ne),_[Y]=Ne)}function Be(Y){Ce.equals(Y)===!1&&(a.scissor(Y.x,Y.y,Y.z,Y.w),Ce.copy(Y))}function Pe(Y){Ge.equals(Y)===!1&&(a.viewport(Y.x,Y.y,Y.z,Y.w),Ge.copy(Y))}function nt(Y,Ne){let ge=d.get(Ne);ge===void 0&&(ge=new WeakMap,d.set(Ne,ge));let we=ge.get(Y);we===void 0&&(we=a.getUniformBlockIndex(Ne,Y.name),ge.set(Y,we))}function it(Y,Ne){const we=d.get(Ne).get(Y);m.get(Ne)!==we&&(a.uniformBlockBinding(Ne,we,Y.__bindingPointIndex),m.set(Ne,we))}function st(){a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.DEPTH_TEST),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SCISSOR_TEST),a.disable(a.STENCIL_TEST),a.disable(a.SAMPLE_ALPHA_TO_COVERAGE),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ONE,a.ZERO),a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO),a.blendColor(0,0,0,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(a.LESS),u.setReversed(!1),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(a.ALWAYS,0,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.clearStencil(0),a.cullFace(a.BACK),a.frontFace(a.CCW),a.polygonOffset(0,0),a.activeTexture(a.TEXTURE0),a.bindFramebuffer(a.FRAMEBUFFER,null),a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,null),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),a.pixelStorei(a.PACK_ALIGNMENT,4),a.pixelStorei(a.UNPACK_ALIGNMENT,4),a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,!1),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,a.BROWSER_DEFAULT_WEBGL),a.pixelStorei(a.PACK_ROW_LENGTH,0),a.pixelStorei(a.PACK_SKIP_PIXELS,0),a.pixelStorei(a.PACK_SKIP_ROWS,0),a.pixelStorei(a.UNPACK_ROW_LENGTH,0),a.pixelStorei(a.UNPACK_IMAGE_HEIGHT,0),a.pixelStorei(a.UNPACK_SKIP_PIXELS,0),a.pixelStorei(a.UNPACK_SKIP_ROWS,0),a.pixelStorei(a.UNPACK_SKIP_IMAGES,0),g={},_={},xe=null,U={},v={},x=new WeakMap,b=[],w=null,y=!1,M=null,I=null,B=null,C=null,O=null,L=null,F=null,T=new Xt(0,0,0),N=0,Z=!1,k=null,j=null,me=null,ce=null,X=null,Ce.set(0,0,a.canvas.width,a.canvas.height),Ge.set(0,0,a.canvas.width,a.canvas.height),c.reset(),u.reset(),h.reset()}return{buffers:{color:c,depth:u,stencil:h},enable:Te,disable:qe,bindFramebuffer:je,drawBuffers:$e,useProgram:Vt,setBlending:gt,setMaterial:_t,setFlipSided:sn,setCullFace:tn,setLineWidth:nn,setPolygonOffset:$t,setScissorTest:Nt,activeTexture:rn,bindTexture:K,unbindTexture:Ut,compressedTexImage2D:Ct,compressedTexImage3D:P,texImage2D:ue,texImage3D:he,pixelStorei:Ve,getParameter:De,updateUBOMapping:nt,uniformBlockBinding:it,texStorage2D:Re,texStorage3D:Ie,texSubImage2D:E,texSubImage3D:J,compressedTexSubImage2D:ne,compressedTexSubImage3D:de,scissor:Be,viewport:Pe,reset:st}}function X2(a,e,i,r,o,c,u){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new It,g=new WeakMap,_=new Set;let v;const x=new WeakMap;let b=!1;try{b=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(P,E){return b?new OffscreenCanvas(P,E):Lu("canvas")}function y(P,E,J){let ne=1;const de=Ct(P);if((de.width>J||de.height>J)&&(ne=J/Math.max(de.width,de.height)),ne<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const Re=Math.floor(ne*de.width),Ie=Math.floor(ne*de.height);v===void 0&&(v=w(Re,Ie));const ue=E?w(Re,Ie):v;return ue.width=Re,ue.height=Ie,ue.getContext("2d").drawImage(P,0,0,Re,Ie),lt("WebGLRenderer: Texture has been resized from ("+de.width+"x"+de.height+") to ("+Re+"x"+Ie+")."),ue}else return"data"in P&&lt("WebGLRenderer: Image in DataTexture is too big ("+de.width+"x"+de.height+")."),P;return P}function M(P){return P.generateMipmaps}function I(P){a.generateMipmap(P)}function B(P){return P.isWebGLCubeRenderTarget?a.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?a.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?a.TEXTURE_2D_ARRAY:a.TEXTURE_2D}function C(P,E,J,ne,de,Re=!1){if(P!==null){if(a[P]!==void 0)return a[P];lt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let Ie;ne&&(Ie=e.get("EXT_texture_norm16"),Ie||lt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ue=E;if(E===a.RED&&(J===a.FLOAT&&(ue=a.R32F),J===a.HALF_FLOAT&&(ue=a.R16F),J===a.UNSIGNED_BYTE&&(ue=a.R8),J===a.UNSIGNED_SHORT&&Ie&&(ue=Ie.R16_EXT),J===a.SHORT&&Ie&&(ue=Ie.R16_SNORM_EXT)),E===a.RED_INTEGER&&(J===a.UNSIGNED_BYTE&&(ue=a.R8UI),J===a.UNSIGNED_SHORT&&(ue=a.R16UI),J===a.UNSIGNED_INT&&(ue=a.R32UI),J===a.BYTE&&(ue=a.R8I),J===a.SHORT&&(ue=a.R16I),J===a.INT&&(ue=a.R32I)),E===a.RG&&(J===a.FLOAT&&(ue=a.RG32F),J===a.HALF_FLOAT&&(ue=a.RG16F),J===a.UNSIGNED_BYTE&&(ue=a.RG8),J===a.UNSIGNED_SHORT&&Ie&&(ue=Ie.RG16_EXT),J===a.SHORT&&Ie&&(ue=Ie.RG16_SNORM_EXT)),E===a.RG_INTEGER&&(J===a.UNSIGNED_BYTE&&(ue=a.RG8UI),J===a.UNSIGNED_SHORT&&(ue=a.RG16UI),J===a.UNSIGNED_INT&&(ue=a.RG32UI),J===a.BYTE&&(ue=a.RG8I),J===a.SHORT&&(ue=a.RG16I),J===a.INT&&(ue=a.RG32I)),E===a.RGB_INTEGER&&(J===a.UNSIGNED_BYTE&&(ue=a.RGB8UI),J===a.UNSIGNED_SHORT&&(ue=a.RGB16UI),J===a.UNSIGNED_INT&&(ue=a.RGB32UI),J===a.BYTE&&(ue=a.RGB8I),J===a.SHORT&&(ue=a.RGB16I),J===a.INT&&(ue=a.RGB32I)),E===a.RGBA_INTEGER&&(J===a.UNSIGNED_BYTE&&(ue=a.RGBA8UI),J===a.UNSIGNED_SHORT&&(ue=a.RGBA16UI),J===a.UNSIGNED_INT&&(ue=a.RGBA32UI),J===a.BYTE&&(ue=a.RGBA8I),J===a.SHORT&&(ue=a.RGBA16I),J===a.INT&&(ue=a.RGBA32I)),E===a.RGB&&(J===a.UNSIGNED_SHORT&&Ie&&(ue=Ie.RGB16_EXT),J===a.SHORT&&Ie&&(ue=Ie.RGB16_SNORM_EXT),J===a.UNSIGNED_INT_5_9_9_9_REV&&(ue=a.RGB9_E5),J===a.UNSIGNED_INT_10F_11F_11F_REV&&(ue=a.R11F_G11F_B10F)),E===a.RGBA){const he=Re?wu:Rt.getTransfer(de);J===a.FLOAT&&(ue=a.RGBA32F),J===a.HALF_FLOAT&&(ue=a.RGBA16F),J===a.UNSIGNED_BYTE&&(ue=he===Yt?a.SRGB8_ALPHA8:a.RGBA8),J===a.UNSIGNED_SHORT&&Ie&&(ue=Ie.RGBA16_EXT),J===a.SHORT&&Ie&&(ue=Ie.RGBA16_SNORM_EXT),J===a.UNSIGNED_SHORT_4_4_4_4&&(ue=a.RGBA4),J===a.UNSIGNED_SHORT_5_5_5_1&&(ue=a.RGB5_A1)}return(ue===a.R16F||ue===a.R32F||ue===a.RG16F||ue===a.RG32F||ue===a.RGBA16F||ue===a.RGBA32F)&&e.get("EXT_color_buffer_float"),ue}function O(P,E){let J;return P?E===null||E===Aa||E===Bl?J=a.DEPTH24_STENCIL8:E===Ma?J=a.DEPTH32F_STENCIL8:E===Fl&&(J=a.DEPTH24_STENCIL8,lt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Aa||E===Bl?J=a.DEPTH_COMPONENT24:E===Ma?J=a.DEPTH_COMPONENT32F:E===Fl&&(J=a.DEPTH_COMPONENT16),J}function L(P,E){return M(P)===!0||P.isFramebufferTexture&&P.minFilter!==jn&&P.minFilter!==pn?Math.log2(Math.max(E.width,E.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?E.mipmaps.length:1}function F(P){const E=P.target;E.removeEventListener("dispose",F),N(E),E.isVideoTexture&&g.delete(E),E.isHTMLTexture&&_.delete(E)}function T(P){const E=P.target;E.removeEventListener("dispose",T),k(E)}function N(P){const E=r.get(P);if(E.__webglInit===void 0)return;const J=P.source,ne=x.get(J);if(ne){const de=ne[E.__cacheKey];de.usedTimes--,de.usedTimes===0&&Z(P),Object.keys(ne).length===0&&x.delete(J)}r.remove(P)}function Z(P){const E=r.get(P);a.deleteTexture(E.__webglTexture);const J=P.source,ne=x.get(J);delete ne[E.__cacheKey],u.memory.textures--}function k(P){const E=r.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),r.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(E.__webglFramebuffer[ne]))for(let de=0;de<E.__webglFramebuffer[ne].length;de++)a.deleteFramebuffer(E.__webglFramebuffer[ne][de]);else a.deleteFramebuffer(E.__webglFramebuffer[ne]);E.__webglDepthbuffer&&a.deleteRenderbuffer(E.__webglDepthbuffer[ne])}else{if(Array.isArray(E.__webglFramebuffer))for(let ne=0;ne<E.__webglFramebuffer.length;ne++)a.deleteFramebuffer(E.__webglFramebuffer[ne]);else a.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&a.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&a.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ne=0;ne<E.__webglColorRenderbuffer.length;ne++)E.__webglColorRenderbuffer[ne]&&a.deleteRenderbuffer(E.__webglColorRenderbuffer[ne]);E.__webglDepthRenderbuffer&&a.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const J=P.textures;for(let ne=0,de=J.length;ne<de;ne++){const Re=r.get(J[ne]);Re.__webglTexture&&(a.deleteTexture(Re.__webglTexture),u.memory.textures--),r.remove(J[ne])}r.remove(P)}let j=0;function me(){j=0}function ce(){return j}function X(P){j=P}function z(){const P=j;return P>=o.maxTextures&&lt("WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+o.maxTextures),j+=1,P}function H(P){const E=[];return E.push(P.wrapS),E.push(P.wrapT),E.push(P.wrapR||0),E.push(P.magFilter),E.push(P.minFilter),E.push(P.anisotropy),E.push(P.internalFormat),E.push(P.format),E.push(P.type),E.push(P.generateMipmaps),E.push(P.premultiplyAlpha),E.push(P.flipY),E.push(P.unpackAlignment),E.push(P.colorSpace),E.join()}function Q(P,E){const J=r.get(P);if(P.isVideoTexture&&K(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&J.__version!==P.version){const ne=P.image;if(ne===null)lt("WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)lt("WebGLRenderer: Texture marked for update but image is incomplete");else{qe(J,P,E);return}}else P.isExternalTexture&&(J.__webglTexture=P.sourceTexture?P.sourceTexture:null);i.bindTexture(a.TEXTURE_2D,J.__webglTexture,a.TEXTURE0+E)}function fe(P,E){const J=r.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&J.__version!==P.version){qe(J,P,E);return}else P.isExternalTexture&&(J.__webglTexture=P.sourceTexture?P.sourceTexture:null);i.bindTexture(a.TEXTURE_2D_ARRAY,J.__webglTexture,a.TEXTURE0+E)}function xe(P,E){const J=r.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&J.__version!==P.version){qe(J,P,E);return}i.bindTexture(a.TEXTURE_3D,J.__webglTexture,a.TEXTURE0+E)}function U(P,E){const J=r.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&J.__version!==P.version){je(J,P,E);return}i.bindTexture(a.TEXTURE_CUBE_MAP,J.__webglTexture,a.TEXTURE0+E)}const W={[Wh]:a.REPEAT,[ia]:a.CLAMP_TO_EDGE,[qh]:a.MIRRORED_REPEAT},ye={[jn]:a.NEAREST,[jy]:a.NEAREST_MIPMAP_NEAREST,[Kc]:a.NEAREST_MIPMAP_LINEAR,[pn]:a.LINEAR,[Kd]:a.LINEAR_MIPMAP_NEAREST,[zs]:a.LINEAR_MIPMAP_LINEAR},Ce={[Qy]:a.NEVER,[nE]:a.ALWAYS,[Jy]:a.LESS,[Pp]:a.LEQUAL,[$y]:a.EQUAL,[Ip]:a.GEQUAL,[eE]:a.GREATER,[tE]:a.NOTEQUAL};function Ge(P,E){if(E.type===Ma&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===pn||E.magFilter===Kd||E.magFilter===Kc||E.magFilter===zs||E.minFilter===pn||E.minFilter===Kd||E.minFilter===Kc||E.minFilter===zs)&&lt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),a.texParameteri(P,a.TEXTURE_WRAP_S,W[E.wrapS]),a.texParameteri(P,a.TEXTURE_WRAP_T,W[E.wrapT]),(P===a.TEXTURE_3D||P===a.TEXTURE_2D_ARRAY)&&a.texParameteri(P,a.TEXTURE_WRAP_R,W[E.wrapR]),a.texParameteri(P,a.TEXTURE_MAG_FILTER,ye[E.magFilter]),a.texParameteri(P,a.TEXTURE_MIN_FILTER,ye[E.minFilter]),E.compareFunction&&(a.texParameteri(P,a.TEXTURE_COMPARE_MODE,a.COMPARE_REF_TO_TEXTURE),a.texParameteri(P,a.TEXTURE_COMPARE_FUNC,Ce[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===jn||E.minFilter!==Kc&&E.minFilter!==zs||E.type===Ma&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const J=e.get("EXT_texture_filter_anisotropic");a.texParameterf(P,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,o.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function oe(P,E){let J=!1;P.__webglInit===void 0&&(P.__webglInit=!0,E.addEventListener("dispose",F));const ne=E.source;let de=x.get(ne);de===void 0&&(de={},x.set(ne,de));const Re=H(E);if(Re!==P.__cacheKey){de[Re]===void 0&&(de[Re]={texture:a.createTexture(),usedTimes:0},u.memory.textures++,J=!0),de[Re].usedTimes++;const Ie=de[P.__cacheKey];Ie!==void 0&&(de[P.__cacheKey].usedTimes--,Ie.usedTimes===0&&Z(E)),P.__cacheKey=Re,P.__webglTexture=de[Re].texture}return J}function be(P,E,J){return Math.floor(Math.floor(P/J)/E)}function Te(P,E,J,ne){const Re=P.updateRanges;if(Re.length===0)i.texSubImage2D(a.TEXTURE_2D,0,0,0,E.width,E.height,J,ne,E.data);else{Re.sort((Ve,Be)=>Ve.start-Be.start);let Ie=0;for(let Ve=1;Ve<Re.length;Ve++){const Be=Re[Ie],Pe=Re[Ve],nt=Be.start+Be.count,it=be(Pe.start,E.width,4),st=be(Be.start,E.width,4);Pe.start<=nt+1&&it===st&&be(Pe.start+Pe.count-1,E.width,4)===it?Be.count=Math.max(Be.count,Pe.start+Pe.count-Be.start):(++Ie,Re[Ie]=Pe)}Re.length=Ie+1;const ue=i.getParameter(a.UNPACK_ROW_LENGTH),he=i.getParameter(a.UNPACK_SKIP_PIXELS),De=i.getParameter(a.UNPACK_SKIP_ROWS);i.pixelStorei(a.UNPACK_ROW_LENGTH,E.width);for(let Ve=0,Be=Re.length;Ve<Be;Ve++){const Pe=Re[Ve],nt=Math.floor(Pe.start/4),it=Math.ceil(Pe.count/4),st=nt%E.width,Y=Math.floor(nt/E.width),Ne=it,ge=1;i.pixelStorei(a.UNPACK_SKIP_PIXELS,st),i.pixelStorei(a.UNPACK_SKIP_ROWS,Y),i.texSubImage2D(a.TEXTURE_2D,0,st,Y,Ne,ge,J,ne,E.data)}P.clearUpdateRanges(),i.pixelStorei(a.UNPACK_ROW_LENGTH,ue),i.pixelStorei(a.UNPACK_SKIP_PIXELS,he),i.pixelStorei(a.UNPACK_SKIP_ROWS,De)}}function qe(P,E,J){let ne=a.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ne=a.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ne=a.TEXTURE_3D);const de=oe(P,E),Re=E.source;i.bindTexture(ne,P.__webglTexture,a.TEXTURE0+J);const Ie=r.get(Re);if(Re.version!==Ie.__version||de===!0){if(i.activeTexture(a.TEXTURE0+J),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){const ge=Rt.getPrimaries(Rt.workingColorSpace),we=E.colorSpace===Bs?null:Rt.getPrimaries(E.colorSpace),Fe=E.colorSpace===Bs||ge===we?a.NONE:a.BROWSER_DEFAULT_WEBGL;i.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe)}i.pixelStorei(a.UNPACK_ALIGNMENT,E.unpackAlignment);let he=y(E.image,!1,o.maxTextureSize);he=Ut(E,he);const De=c.convert(E.format,E.colorSpace),Ve=c.convert(E.type);let Be=C(E.internalFormat,De,Ve,E.normalized,E.colorSpace,E.isVideoTexture);Ge(ne,E);let Pe;const nt=E.mipmaps,it=E.isVideoTexture!==!0,st=Ie.__version===void 0||de===!0,Y=Re.dataReady,Ne=L(E,he);if(E.isDepthTexture)Be=O(E.format===Sr,E.type),st&&(it?i.texStorage2D(a.TEXTURE_2D,1,Be,he.width,he.height):i.texImage2D(a.TEXTURE_2D,0,Be,he.width,he.height,0,De,Ve,null));else if(E.isDataTexture)if(nt.length>0){it&&st&&i.texStorage2D(a.TEXTURE_2D,Ne,Be,nt[0].width,nt[0].height);for(let ge=0,we=nt.length;ge<we;ge++)Pe=nt[ge],it?Y&&i.texSubImage2D(a.TEXTURE_2D,ge,0,0,Pe.width,Pe.height,De,Ve,Pe.data):i.texImage2D(a.TEXTURE_2D,ge,Be,Pe.width,Pe.height,0,De,Ve,Pe.data);E.generateMipmaps=!1}else it?(st&&i.texStorage2D(a.TEXTURE_2D,Ne,Be,he.width,he.height),Y&&Te(E,he,De,Ve)):i.texImage2D(a.TEXTURE_2D,0,Be,he.width,he.height,0,De,Ve,he.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){it&&st&&i.texStorage3D(a.TEXTURE_2D_ARRAY,Ne,Be,nt[0].width,nt[0].height,he.depth);for(let ge=0,we=nt.length;ge<we;ge++)if(Pe=nt[ge],E.format!==aa)if(De!==null)if(it){if(Y)if(E.layerUpdates.size>0){const Fe=pv(Pe.width,Pe.height,E.format,E.type);for(const ve of E.layerUpdates){const Qe=Pe.data.subarray(ve*Fe/Pe.data.BYTES_PER_ELEMENT,(ve+1)*Fe/Pe.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,ge,0,0,ve,Pe.width,Pe.height,1,De,Qe)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,ge,0,0,0,Pe.width,Pe.height,he.depth,De,Pe.data)}else i.compressedTexImage3D(a.TEXTURE_2D_ARRAY,ge,Be,Pe.width,Pe.height,he.depth,0,Pe.data,0,0);else lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else it?Y&&i.texSubImage3D(a.TEXTURE_2D_ARRAY,ge,0,0,0,Pe.width,Pe.height,he.depth,De,Ve,Pe.data):i.texImage3D(a.TEXTURE_2D_ARRAY,ge,Be,Pe.width,Pe.height,he.depth,0,De,Ve,Pe.data)}else{it&&st&&i.texStorage2D(a.TEXTURE_2D,Ne,Be,nt[0].width,nt[0].height);for(let ge=0,we=nt.length;ge<we;ge++)Pe=nt[ge],E.format!==aa?De!==null?it?Y&&i.compressedTexSubImage2D(a.TEXTURE_2D,ge,0,0,Pe.width,Pe.height,De,Pe.data):i.compressedTexImage2D(a.TEXTURE_2D,ge,Be,Pe.width,Pe.height,0,Pe.data):lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):it?Y&&i.texSubImage2D(a.TEXTURE_2D,ge,0,0,Pe.width,Pe.height,De,Ve,Pe.data):i.texImage2D(a.TEXTURE_2D,ge,Be,Pe.width,Pe.height,0,De,Ve,Pe.data)}else if(E.isDataArrayTexture)if(it){if(st&&i.texStorage3D(a.TEXTURE_2D_ARRAY,Ne,Be,he.width,he.height,he.depth),Y)if(E.layerUpdates.size>0){const ge=pv(he.width,he.height,E.format,E.type);for(const we of E.layerUpdates){const Fe=he.data.subarray(we*ge/he.data.BYTES_PER_ELEMENT,(we+1)*ge/he.data.BYTES_PER_ELEMENT);i.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,we,he.width,he.height,1,De,Ve,Fe)}E.clearLayerUpdates()}else i.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,he.width,he.height,he.depth,De,Ve,he.data)}else i.texImage3D(a.TEXTURE_2D_ARRAY,0,Be,he.width,he.height,he.depth,0,De,Ve,he.data);else if(E.isData3DTexture)it?(st&&i.texStorage3D(a.TEXTURE_3D,Ne,Be,he.width,he.height,he.depth),Y&&i.texSubImage3D(a.TEXTURE_3D,0,0,0,0,he.width,he.height,he.depth,De,Ve,he.data)):i.texImage3D(a.TEXTURE_3D,0,Be,he.width,he.height,he.depth,0,De,Ve,he.data);else if(E.isFramebufferTexture){if(st)if(it)i.texStorage2D(a.TEXTURE_2D,Ne,Be,he.width,he.height);else{let ge=he.width,we=he.height;for(let Fe=0;Fe<Ne;Fe++)i.texImage2D(a.TEXTURE_2D,Fe,Be,ge,we,0,De,Ve,null),ge>>=1,we>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in a){const ge=a.canvas;if(ge.hasAttribute("layoutsubtree")||ge.setAttribute("layoutsubtree","true"),he.parentNode!==ge){ge.appendChild(he),_.add(E),ge.onpaint=we=>{const Fe=we.changedElements;for(const ve of _)Fe.includes(ve.image)&&(ve.needsUpdate=!0)},ge.requestPaint();return}if(a.texElementImage2D.length===3)a.texElementImage2D(a.TEXTURE_2D,a.RGBA8,he);else{const Fe=a.RGBA,ve=a.RGBA,Qe=a.UNSIGNED_BYTE;a.texElementImage2D(a.TEXTURE_2D,0,Fe,ve,Qe,he)}a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MIN_FILTER,a.LINEAR),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE)}}else if(nt.length>0){if(it&&st){const ge=Ct(nt[0]);i.texStorage2D(a.TEXTURE_2D,Ne,Be,ge.width,ge.height)}for(let ge=0,we=nt.length;ge<we;ge++)Pe=nt[ge],it?Y&&i.texSubImage2D(a.TEXTURE_2D,ge,0,0,De,Ve,Pe):i.texImage2D(a.TEXTURE_2D,ge,Be,De,Ve,Pe);E.generateMipmaps=!1}else if(it){if(st){const ge=Ct(he);i.texStorage2D(a.TEXTURE_2D,Ne,Be,ge.width,ge.height)}Y&&i.texSubImage2D(a.TEXTURE_2D,0,0,0,De,Ve,he)}else i.texImage2D(a.TEXTURE_2D,0,Be,De,Ve,he);M(E)&&I(ne),Ie.__version=Re.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function je(P,E,J){if(E.image.length!==6)return;const ne=oe(P,E),de=E.source;i.bindTexture(a.TEXTURE_CUBE_MAP,P.__webglTexture,a.TEXTURE0+J);const Re=r.get(de);if(de.version!==Re.__version||ne===!0){i.activeTexture(a.TEXTURE0+J);const Ie=Rt.getPrimaries(Rt.workingColorSpace),ue=E.colorSpace===Bs?null:Rt.getPrimaries(E.colorSpace),he=E.colorSpace===Bs||Ie===ue?a.NONE:a.BROWSER_DEFAULT_WEBGL;i.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(a.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);const De=E.isCompressedTexture||E.image[0].isCompressedTexture,Ve=E.image[0]&&E.image[0].isDataTexture,Be=[];for(let ve=0;ve<6;ve++)!De&&!Ve?Be[ve]=y(E.image[ve],!0,o.maxCubemapSize):Be[ve]=Ve?E.image[ve].image:E.image[ve],Be[ve]=Ut(E,Be[ve]);const Pe=Be[0],nt=c.convert(E.format,E.colorSpace),it=c.convert(E.type),st=C(E.internalFormat,nt,it,E.normalized,E.colorSpace),Y=E.isVideoTexture!==!0,Ne=Re.__version===void 0||ne===!0,ge=de.dataReady;let we=L(E,Pe);Ge(a.TEXTURE_CUBE_MAP,E);let Fe;if(De){Y&&Ne&&i.texStorage2D(a.TEXTURE_CUBE_MAP,we,st,Pe.width,Pe.height);for(let ve=0;ve<6;ve++){Fe=Be[ve].mipmaps;for(let Qe=0;Qe<Fe.length;Qe++){const Ye=Fe[Qe];E.format!==aa?nt!==null?Y?ge&&i.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Qe,0,0,Ye.width,Ye.height,nt,Ye.data):i.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Qe,st,Ye.width,Ye.height,0,Ye.data):lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Y?ge&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Qe,0,0,Ye.width,Ye.height,nt,it,Ye.data):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Qe,st,Ye.width,Ye.height,0,nt,it,Ye.data)}}}else{if(Fe=E.mipmaps,Y&&Ne){Fe.length>0&&we++;const ve=Ct(Be[0]);i.texStorage2D(a.TEXTURE_CUBE_MAP,we,st,ve.width,ve.height)}for(let ve=0;ve<6;ve++)if(Ve){Y?ge&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,Be[ve].width,Be[ve].height,nt,it,Be[ve].data):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,st,Be[ve].width,Be[ve].height,0,nt,it,Be[ve].data);for(let Qe=0;Qe<Fe.length;Qe++){const jt=Fe[Qe].image[ve].image;Y?ge&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Qe+1,0,0,jt.width,jt.height,nt,it,jt.data):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Qe+1,st,jt.width,jt.height,0,nt,it,jt.data)}}else{Y?ge&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,nt,it,Be[ve]):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,st,nt,it,Be[ve]);for(let Qe=0;Qe<Fe.length;Qe++){const Ye=Fe[Qe];Y?ge&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Qe+1,0,0,nt,it,Ye.image[ve]):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Qe+1,st,nt,it,Ye.image[ve])}}}M(E)&&I(a.TEXTURE_CUBE_MAP),Re.__version=de.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function $e(P,E,J,ne,de,Re){const Ie=c.convert(J.format,J.colorSpace),ue=c.convert(J.type),he=C(J.internalFormat,Ie,ue,J.normalized,J.colorSpace),De=r.get(E),Ve=r.get(J);if(Ve.__renderTarget=E,!De.__hasExternalTextures){const Be=Math.max(1,E.width>>Re),Pe=Math.max(1,E.height>>Re);de===a.TEXTURE_3D||de===a.TEXTURE_2D_ARRAY?i.texImage3D(de,Re,he,Be,Pe,E.depth,0,Ie,ue,null):i.texImage2D(de,Re,he,Be,Pe,0,Ie,ue,null)}i.bindFramebuffer(a.FRAMEBUFFER,P),rn(E)?h.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,ne,de,Ve.__webglTexture,0,Nt(E)):(de===a.TEXTURE_2D||de>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&de<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&a.framebufferTexture2D(a.FRAMEBUFFER,ne,de,Ve.__webglTexture,Re),i.bindFramebuffer(a.FRAMEBUFFER,null)}function Vt(P,E,J){if(a.bindRenderbuffer(a.RENDERBUFFER,P),E.depthBuffer){const ne=E.depthTexture,de=ne&&ne.isDepthTexture?ne.type:null,Re=O(E.stencilBuffer,de),Ie=E.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;rn(E)?h.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,Nt(E),Re,E.width,E.height):J?a.renderbufferStorageMultisample(a.RENDERBUFFER,Nt(E),Re,E.width,E.height):a.renderbufferStorage(a.RENDERBUFFER,Re,E.width,E.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,Ie,a.RENDERBUFFER,P)}else{const ne=E.textures;for(let de=0;de<ne.length;de++){const Re=ne[de],Ie=c.convert(Re.format,Re.colorSpace),ue=c.convert(Re.type),he=C(Re.internalFormat,Ie,ue,Re.normalized,Re.colorSpace);rn(E)?h.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,Nt(E),he,E.width,E.height):J?a.renderbufferStorageMultisample(a.RENDERBUFFER,Nt(E),he,E.width,E.height):a.renderbufferStorage(a.RENDERBUFFER,he,E.width,E.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function ut(P,E,J){const ne=E.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(a.FRAMEBUFFER,P),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const de=r.get(E.depthTexture);if(de.__renderTarget=E,(!de.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),ne){if(de.__webglInit===void 0&&(de.__webglInit=!0,E.depthTexture.addEventListener("dispose",F)),de.__webglTexture===void 0){de.__webglTexture=a.createTexture(),i.bindTexture(a.TEXTURE_CUBE_MAP,de.__webglTexture),Ge(a.TEXTURE_CUBE_MAP,E.depthTexture);const De=c.convert(E.depthTexture.format),Ve=c.convert(E.depthTexture.type);let Be;E.depthTexture.format===ss?Be=a.DEPTH_COMPONENT24:E.depthTexture.format===Sr&&(Be=a.DEPTH24_STENCIL8);for(let Pe=0;Pe<6;Pe++)a.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,Be,E.width,E.height,0,De,Ve,null)}}else Q(E.depthTexture,0);const Re=de.__webglTexture,Ie=Nt(E),ue=ne?a.TEXTURE_CUBE_MAP_POSITIVE_X+J:a.TEXTURE_2D,he=E.depthTexture.format===Sr?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;if(E.depthTexture.format===ss)rn(E)?h.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,he,ue,Re,0,Ie):a.framebufferTexture2D(a.FRAMEBUFFER,he,ue,Re,0);else if(E.depthTexture.format===Sr)rn(E)?h.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,he,ue,Re,0,Ie):a.framebufferTexture2D(a.FRAMEBUFFER,he,ue,Re,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function pt(P){const E=r.get(P),J=P.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==P.depthTexture){const ne=P.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ne){const de=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ne.removeEventListener("dispose",de)};ne.addEventListener("dispose",de),E.__depthDisposeCallback=de}E.__boundDepthTexture=ne}if(P.depthTexture&&!E.__autoAllocateDepthBuffer)if(J)for(let ne=0;ne<6;ne++)ut(E.__webglFramebuffer[ne],P,ne);else{const ne=P.texture.mipmaps;ne&&ne.length>0?ut(E.__webglFramebuffer[0],P,0):ut(E.__webglFramebuffer,P,0)}else if(J){E.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)if(i.bindFramebuffer(a.FRAMEBUFFER,E.__webglFramebuffer[ne]),E.__webglDepthbuffer[ne]===void 0)E.__webglDepthbuffer[ne]=a.createRenderbuffer(),Vt(E.__webglDepthbuffer[ne],P,!1);else{const de=P.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Re=E.__webglDepthbuffer[ne];a.bindRenderbuffer(a.RENDERBUFFER,Re),a.framebufferRenderbuffer(a.FRAMEBUFFER,de,a.RENDERBUFFER,Re)}}else{const ne=P.texture.mipmaps;if(ne&&ne.length>0?i.bindFramebuffer(a.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(a.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=a.createRenderbuffer(),Vt(E.__webglDepthbuffer,P,!1);else{const de=P.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Re=E.__webglDepthbuffer;a.bindRenderbuffer(a.RENDERBUFFER,Re),a.framebufferRenderbuffer(a.FRAMEBUFFER,de,a.RENDERBUFFER,Re)}}i.bindFramebuffer(a.FRAMEBUFFER,null)}function gt(P,E,J){const ne=r.get(P);E!==void 0&&$e(ne.__webglFramebuffer,P,P.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,0),J!==void 0&&pt(P)}function _t(P){const E=P.texture,J=r.get(P),ne=r.get(E);P.addEventListener("dispose",T);const de=P.textures,Re=P.isWebGLCubeRenderTarget===!0,Ie=de.length>1;if(Ie||(ne.__webglTexture===void 0&&(ne.__webglTexture=a.createTexture()),ne.__version=E.version,u.memory.textures++),Re){J.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(E.mipmaps&&E.mipmaps.length>0){J.__webglFramebuffer[ue]=[];for(let he=0;he<E.mipmaps.length;he++)J.__webglFramebuffer[ue][he]=a.createFramebuffer()}else J.__webglFramebuffer[ue]=a.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){J.__webglFramebuffer=[];for(let ue=0;ue<E.mipmaps.length;ue++)J.__webglFramebuffer[ue]=a.createFramebuffer()}else J.__webglFramebuffer=a.createFramebuffer();if(Ie)for(let ue=0,he=de.length;ue<he;ue++){const De=r.get(de[ue]);De.__webglTexture===void 0&&(De.__webglTexture=a.createTexture(),u.memory.textures++)}if(P.samples>0&&rn(P)===!1){J.__webglMultisampledFramebuffer=a.createFramebuffer(),J.__webglColorRenderbuffer=[],i.bindFramebuffer(a.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let ue=0;ue<de.length;ue++){const he=de[ue];J.__webglColorRenderbuffer[ue]=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,J.__webglColorRenderbuffer[ue]);const De=c.convert(he.format,he.colorSpace),Ve=c.convert(he.type),Be=C(he.internalFormat,De,Ve,he.normalized,he.colorSpace,P.isXRRenderTarget===!0),Pe=Nt(P);a.renderbufferStorageMultisample(a.RENDERBUFFER,Pe,Be,P.width,P.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+ue,a.RENDERBUFFER,J.__webglColorRenderbuffer[ue])}a.bindRenderbuffer(a.RENDERBUFFER,null),P.depthBuffer&&(J.__webglDepthRenderbuffer=a.createRenderbuffer(),Vt(J.__webglDepthRenderbuffer,P,!0)),i.bindFramebuffer(a.FRAMEBUFFER,null)}}if(Re){i.bindTexture(a.TEXTURE_CUBE_MAP,ne.__webglTexture),Ge(a.TEXTURE_CUBE_MAP,E);for(let ue=0;ue<6;ue++)if(E.mipmaps&&E.mipmaps.length>0)for(let he=0;he<E.mipmaps.length;he++)$e(J.__webglFramebuffer[ue][he],P,E,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+ue,he);else $e(J.__webglFramebuffer[ue],P,E,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);M(E)&&I(a.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ie){for(let ue=0,he=de.length;ue<he;ue++){const De=de[ue],Ve=r.get(De);let Be=a.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Be=P.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),i.bindTexture(Be,Ve.__webglTexture),Ge(Be,De),$e(J.__webglFramebuffer,P,De,a.COLOR_ATTACHMENT0+ue,Be,0),M(De)&&I(Be)}i.unbindTexture()}else{let ue=a.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ue=P.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),i.bindTexture(ue,ne.__webglTexture),Ge(ue,E),E.mipmaps&&E.mipmaps.length>0)for(let he=0;he<E.mipmaps.length;he++)$e(J.__webglFramebuffer[he],P,E,a.COLOR_ATTACHMENT0,ue,he);else $e(J.__webglFramebuffer,P,E,a.COLOR_ATTACHMENT0,ue,0);M(E)&&I(ue),i.unbindTexture()}P.depthBuffer&&pt(P)}function sn(P){const E=P.textures;for(let J=0,ne=E.length;J<ne;J++){const de=E[J];if(M(de)){const Re=B(P),Ie=r.get(de).__webglTexture;i.bindTexture(Re,Ie),I(Re),i.unbindTexture()}}}const tn=[],nn=[];function $t(P){if(P.samples>0){if(rn(P)===!1){const E=P.textures,J=P.width,ne=P.height;let de=a.COLOR_BUFFER_BIT;const Re=P.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Ie=r.get(P),ue=E.length>1;if(ue)for(let De=0;De<E.length;De++)i.bindFramebuffer(a.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+De,a.RENDERBUFFER,null),i.bindFramebuffer(a.FRAMEBUFFER,Ie.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+De,a.TEXTURE_2D,null,0);i.bindFramebuffer(a.READ_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer);const he=P.texture.mipmaps;he&&he.length>0?i.bindFramebuffer(a.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer[0]):i.bindFramebuffer(a.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer);for(let De=0;De<E.length;De++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(de|=a.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(de|=a.STENCIL_BUFFER_BIT)),ue){a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,Ie.__webglColorRenderbuffer[De]);const Ve=r.get(E[De]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,Ve,0)}a.blitFramebuffer(0,0,J,ne,0,0,J,ne,de,a.NEAREST),m===!0&&(tn.length=0,nn.length=0,tn.push(a.COLOR_ATTACHMENT0+De),P.depthBuffer&&P.resolveDepthBuffer===!1&&(tn.push(Re),nn.push(Re),a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,nn)),a.invalidateFramebuffer(a.READ_FRAMEBUFFER,tn))}if(i.bindFramebuffer(a.READ_FRAMEBUFFER,null),i.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),ue)for(let De=0;De<E.length;De++){i.bindFramebuffer(a.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+De,a.RENDERBUFFER,Ie.__webglColorRenderbuffer[De]);const Ve=r.get(E[De]).__webglTexture;i.bindFramebuffer(a.FRAMEBUFFER,Ie.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+De,a.TEXTURE_2D,Ve,0)}i.bindFramebuffer(a.DRAW_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&m){const E=P.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[E])}}}function Nt(P){return Math.min(o.maxSamples,P.samples)}function rn(P){const E=r.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function K(P){const E=u.render.frame;g.get(P)!==E&&(g.set(P,E),P.update())}function Ut(P,E){const J=P.colorSpace,ne=P.format,de=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||J!==Cu&&J!==Bs&&(Rt.getTransfer(J)===Yt?(ne!==aa||de!==Gi)&&lt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Lt("WebGLTextures: Unsupported texture color space:",J)),E}function Ct(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(d.width=P.naturalWidth||P.width,d.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(d.width=P.displayWidth,d.height=P.displayHeight):(d.width=P.width,d.height=P.height),d}this.allocateTextureUnit=z,this.resetTextureUnits=me,this.getTextureUnits=ce,this.setTextureUnits=X,this.setTexture2D=Q,this.setTexture2DArray=fe,this.setTexture3D=xe,this.setTextureCube=U,this.rebindTextures=gt,this.setupRenderTarget=_t,this.updateRenderTargetMipmap=sn,this.updateMultisampleRenderTarget=$t,this.setupDepthRenderbuffer=pt,this.setupFrameBufferTexture=$e,this.useMultisampledRTT=rn,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function W2(a,e){function i(r,o=Bs){let c;const u=Rt.getTransfer(o);if(r===Gi)return a.UNSIGNED_BYTE;if(r===Dp)return a.UNSIGNED_SHORT_4_4_4_4;if(r===Lp)return a.UNSIGNED_SHORT_5_5_5_1;if(r===Mx)return a.UNSIGNED_INT_5_9_9_9_REV;if(r===yx)return a.UNSIGNED_INT_10F_11F_11F_REV;if(r===xx)return a.BYTE;if(r===Sx)return a.SHORT;if(r===Fl)return a.UNSIGNED_SHORT;if(r===wp)return a.INT;if(r===Aa)return a.UNSIGNED_INT;if(r===Ma)return a.FLOAT;if(r===as)return a.HALF_FLOAT;if(r===Ex)return a.ALPHA;if(r===bx)return a.RGB;if(r===aa)return a.RGBA;if(r===ss)return a.DEPTH_COMPONENT;if(r===Sr)return a.DEPTH_STENCIL;if(r===Tx)return a.RED;if(r===Np)return a.RED_INTEGER;if(r===yr)return a.RG;if(r===Up)return a.RG_INTEGER;if(r===Op)return a.RGBA_INTEGER;if(r===Su||r===Mu||r===yu||r===Eu)if(u===Yt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===Su)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Mu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===yu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Eu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===Su)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Mu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===yu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Eu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Yh||r===jh||r===Zh||r===Kh)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===Yh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===jh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Zh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Kh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Qh||r===Jh||r===$h||r===ep||r===tp||r===Au||r===np)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===Qh||r===Jh)return u===Yt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===$h)return u===Yt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(r===ep)return c.COMPRESSED_R11_EAC;if(r===tp)return c.COMPRESSED_SIGNED_R11_EAC;if(r===Au)return c.COMPRESSED_RG11_EAC;if(r===np)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===ip||r===ap||r===sp||r===rp||r===op||r===lp||r===cp||r===up||r===fp||r===dp||r===hp||r===pp||r===mp||r===gp)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===ip)return u===Yt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===ap)return u===Yt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===sp)return u===Yt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===rp)return u===Yt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===op)return u===Yt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===lp)return u===Yt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===cp)return u===Yt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===up)return u===Yt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===fp)return u===Yt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===dp)return u===Yt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===hp)return u===Yt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===pp)return u===Yt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===mp)return u===Yt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===gp)return u===Yt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===_p||r===vp||r===xp)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===_p)return u===Yt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===vp)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===xp)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Sp||r===Mp||r===Ru||r===yp)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===Sp)return c.COMPRESSED_RED_RGTC1_EXT;if(r===Mp)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Ru)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===yp)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Bl?a.UNSIGNED_INT_24_8:a[r]!==void 0?a[r]:null}return{convert:i}}const q2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Y2=`
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

}`;class j2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const r=new Px(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new Xi({vertexShader:q2,fragmentShader:Y2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Ci(new Hs(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Z2 extends br{constructor(e,i){super();const r=this;let o=null,c=1,u=null,h="local-floor",m=1,d=null,g=null,_=null,v=null,x=null,b=null;const w=typeof XRWebGLBinding<"u",y=new j2,M={},I=i.getContextAttributes();let B=null,C=null;const O=[],L=[],F=new It;let T=null;const N=new Hi;N.viewport=new xn;const Z=new Hi;Z.viewport=new xn;const k=[N,Z],j=new sb;let me=null,ce=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(oe){let be=O[oe];return be===void 0&&(be=new nh,O[oe]=be),be.getTargetRaySpace()},this.getControllerGrip=function(oe){let be=O[oe];return be===void 0&&(be=new nh,O[oe]=be),be.getGripSpace()},this.getHand=function(oe){let be=O[oe];return be===void 0&&(be=new nh,O[oe]=be),be.getHandSpace()};function X(oe){const be=L.indexOf(oe.inputSource);if(be===-1)return;const Te=O[be];Te!==void 0&&(Te.update(oe.inputSource,oe.frame,d||u),Te.dispatchEvent({type:oe.type,data:oe.inputSource}))}function z(){o.removeEventListener("select",X),o.removeEventListener("selectstart",X),o.removeEventListener("selectend",X),o.removeEventListener("squeeze",X),o.removeEventListener("squeezestart",X),o.removeEventListener("squeezeend",X),o.removeEventListener("end",z),o.removeEventListener("inputsourceschange",H);for(let oe=0;oe<O.length;oe++){const be=L[oe];be!==null&&(L[oe]=null,O[oe].disconnect(be))}me=null,ce=null,y.reset();for(const oe in M)delete M[oe];e.setRenderTarget(B),x=null,v=null,_=null,o=null,C=null,Ge.stop(),r.isPresenting=!1,e.setPixelRatio(T),e.setSize(F.width,F.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(oe){c=oe,r.isPresenting===!0&&lt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(oe){h=oe,r.isPresenting===!0&&lt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||u},this.setReferenceSpace=function(oe){d=oe},this.getBaseLayer=function(){return v!==null?v:x},this.getBinding=function(){return _===null&&w&&(_=new XRWebGLBinding(o,i)),_},this.getFrame=function(){return b},this.getSession=function(){return o},this.setSession=async function(oe){if(o=oe,o!==null){if(B=e.getRenderTarget(),o.addEventListener("select",X),o.addEventListener("selectstart",X),o.addEventListener("selectend",X),o.addEventListener("squeeze",X),o.addEventListener("squeezestart",X),o.addEventListener("squeezeend",X),o.addEventListener("end",z),o.addEventListener("inputsourceschange",H),I.xrCompatible!==!0&&await i.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(F),w&&"createProjectionLayer"in XRWebGLBinding.prototype){let Te=null,qe=null,je=null;I.depth&&(je=I.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Te=I.stencil?Sr:ss,qe=I.stencil?Bl:Aa);const $e={colorFormat:i.RGBA8,depthFormat:je,scaleFactor:c};_=this.getBinding(),v=_.createProjectionLayer($e),o.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),C=new ba(v.textureWidth,v.textureHeight,{format:aa,type:Gi,depthTexture:new wo(v.textureWidth,v.textureHeight,qe,void 0,void 0,void 0,void 0,void 0,void 0,Te),stencilBuffer:I.stencil,colorSpace:e.outputColorSpace,samples:I.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const Te={antialias:I.antialias,alpha:!0,depth:I.depth,stencil:I.stencil,framebufferScaleFactor:c};x=new XRWebGLLayer(o,i,Te),o.updateRenderState({baseLayer:x}),e.setPixelRatio(1),e.setSize(x.framebufferWidth,x.framebufferHeight,!1),C=new ba(x.framebufferWidth,x.framebufferHeight,{format:aa,type:Gi,colorSpace:e.outputColorSpace,stencilBuffer:I.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(m),d=null,u=await o.requestReferenceSpace(h),Ge.setContext(o),Ge.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function H(oe){for(let be=0;be<oe.removed.length;be++){const Te=oe.removed[be],qe=L.indexOf(Te);qe>=0&&(L[qe]=null,O[qe].disconnect(Te))}for(let be=0;be<oe.added.length;be++){const Te=oe.added[be];let qe=L.indexOf(Te);if(qe===-1){for(let $e=0;$e<O.length;$e++)if($e>=L.length){L.push(Te),qe=$e;break}else if(L[$e]===null){L[$e]=Te,qe=$e;break}if(qe===-1)break}const je=O[qe];je&&je.connect(Te)}}const Q=new ae,fe=new ae;function xe(oe,be,Te){Q.setFromMatrixPosition(be.matrixWorld),fe.setFromMatrixPosition(Te.matrixWorld);const qe=Q.distanceTo(fe),je=be.projectionMatrix.elements,$e=Te.projectionMatrix.elements,Vt=je[14]/(je[10]-1),ut=je[14]/(je[10]+1),pt=(je[9]+1)/je[5],gt=(je[9]-1)/je[5],_t=(je[8]-1)/je[0],sn=($e[8]+1)/$e[0],tn=Vt*_t,nn=Vt*sn,$t=qe/(-_t+sn),Nt=$t*-_t;if(be.matrixWorld.decompose(oe.position,oe.quaternion,oe.scale),oe.translateX(Nt),oe.translateZ($t),oe.matrixWorld.compose(oe.position,oe.quaternion,oe.scale),oe.matrixWorldInverse.copy(oe.matrixWorld).invert(),je[10]===-1)oe.projectionMatrix.copy(be.projectionMatrix),oe.projectionMatrixInverse.copy(be.projectionMatrixInverse);else{const rn=Vt+$t,K=ut+$t,Ut=tn-Nt,Ct=nn+(qe-Nt),P=pt*ut/K*rn,E=gt*ut/K*rn;oe.projectionMatrix.makePerspective(Ut,Ct,P,E,rn,K),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert()}}function U(oe,be){be===null?oe.matrixWorld.copy(oe.matrix):oe.matrixWorld.multiplyMatrices(be.matrixWorld,oe.matrix),oe.matrixWorldInverse.copy(oe.matrixWorld).invert()}this.updateCamera=function(oe){if(o===null)return;let be=oe.near,Te=oe.far;y.texture!==null&&(y.depthNear>0&&(be=y.depthNear),y.depthFar>0&&(Te=y.depthFar)),j.near=Z.near=N.near=be,j.far=Z.far=N.far=Te,(me!==j.near||ce!==j.far)&&(o.updateRenderState({depthNear:j.near,depthFar:j.far}),me=j.near,ce=j.far),j.layers.mask=oe.layers.mask|6,N.layers.mask=j.layers.mask&-5,Z.layers.mask=j.layers.mask&-3;const qe=oe.parent,je=j.cameras;U(j,qe);for(let $e=0;$e<je.length;$e++)U(je[$e],qe);je.length===2?xe(j,N,Z):j.projectionMatrix.copy(N.projectionMatrix),W(oe,j,qe)};function W(oe,be,Te){Te===null?oe.matrix.copy(be.matrixWorld):(oe.matrix.copy(Te.matrixWorld),oe.matrix.invert(),oe.matrix.multiply(be.matrixWorld)),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.updateMatrixWorld(!0),oe.projectionMatrix.copy(be.projectionMatrix),oe.projectionMatrixInverse.copy(be.projectionMatrixInverse),oe.isPerspectiveCamera&&(oe.fov=zl*2*Math.atan(1/oe.projectionMatrix.elements[5]),oe.zoom=1)}this.getCamera=function(){return j},this.getFoveation=function(){if(!(v===null&&x===null))return m},this.setFoveation=function(oe){m=oe,v!==null&&(v.fixedFoveation=oe),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=oe)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(j)},this.getCameraTexture=function(oe){return M[oe]};let ye=null;function Ce(oe,be){if(g=be.getViewerPose(d||u),b=be,g!==null){const Te=g.views;x!==null&&(e.setRenderTargetFramebuffer(C,x.framebuffer),e.setRenderTarget(C));let qe=!1;Te.length!==j.cameras.length&&(j.cameras.length=0,qe=!0);for(let ut=0;ut<Te.length;ut++){const pt=Te[ut];let gt=null;if(x!==null)gt=x.getViewport(pt);else{const sn=_.getViewSubImage(v,pt);gt=sn.viewport,ut===0&&(e.setRenderTargetTextures(C,sn.colorTexture,sn.depthStencilTexture),e.setRenderTarget(C))}let _t=k[ut];_t===void 0&&(_t=new Hi,_t.layers.enable(ut),_t.viewport=new xn,k[ut]=_t),_t.matrix.fromArray(pt.transform.matrix),_t.matrix.decompose(_t.position,_t.quaternion,_t.scale),_t.projectionMatrix.fromArray(pt.projectionMatrix),_t.projectionMatrixInverse.copy(_t.projectionMatrix).invert(),_t.viewport.set(gt.x,gt.y,gt.width,gt.height),ut===0&&(j.matrix.copy(_t.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale)),qe===!0&&j.cameras.push(_t)}const je=o.enabledFeatures;if(je&&je.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&w){_=r.getBinding();const ut=_.getDepthInformation(Te[0]);ut&&ut.isValid&&ut.texture&&y.init(ut,o.renderState)}if(je&&je.includes("camera-access")&&w){e.state.unbindTexture(),_=r.getBinding();for(let ut=0;ut<Te.length;ut++){const pt=Te[ut].camera;if(pt){let gt=M[pt];gt||(gt=new Px,M[pt]=gt);const _t=_.getCameraImage(pt);gt.sourceTexture=_t}}}}for(let Te=0;Te<O.length;Te++){const qe=L[Te],je=O[Te];qe!==null&&je!==void 0&&je.update(qe,be,d||u)}ye&&ye(oe,be),be.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:be}),b=null}const Ge=new zx;Ge.setAnimationLoop(Ce),this.setAnimationLoop=function(oe){ye=oe},this.dispose=function(){}}}const K2=new En,qx=new dt;qx.set(-1,0,0,0,1,0,0,0,1);function Q2(a,e){function i(y,M){y.matrixAutoUpdate===!0&&y.updateMatrix(),M.value.copy(y.matrix)}function r(y,M){M.color.getRGB(y.fogColor.value,Ix(a)),M.isFog?(y.fogNear.value=M.near,y.fogFar.value=M.far):M.isFogExp2&&(y.fogDensity.value=M.density)}function o(y,M,I,B,C){M.isNodeMaterial?M.uniformsNeedUpdate=!1:M.isMeshBasicMaterial?c(y,M):M.isMeshLambertMaterial?(c(y,M),M.envMap&&(y.envMapIntensity.value=M.envMapIntensity)):M.isMeshToonMaterial?(c(y,M),_(y,M)):M.isMeshPhongMaterial?(c(y,M),g(y,M),M.envMap&&(y.envMapIntensity.value=M.envMapIntensity)):M.isMeshStandardMaterial?(c(y,M),v(y,M),M.isMeshPhysicalMaterial&&x(y,M,C)):M.isMeshMatcapMaterial?(c(y,M),b(y,M)):M.isMeshDepthMaterial?c(y,M):M.isMeshDistanceMaterial?(c(y,M),w(y,M)):M.isMeshNormalMaterial?c(y,M):M.isLineBasicMaterial?(u(y,M),M.isLineDashedMaterial&&h(y,M)):M.isPointsMaterial?m(y,M,I,B):M.isSpriteMaterial?d(y,M):M.isShadowMaterial?(y.color.value.copy(M.color),y.opacity.value=M.opacity):M.isShaderMaterial&&(M.uniformsNeedUpdate=!1)}function c(y,M){y.opacity.value=M.opacity,M.color&&y.diffuse.value.copy(M.color),M.emissive&&y.emissive.value.copy(M.emissive).multiplyScalar(M.emissiveIntensity),M.map&&(y.map.value=M.map,i(M.map,y.mapTransform)),M.alphaMap&&(y.alphaMap.value=M.alphaMap,i(M.alphaMap,y.alphaMapTransform)),M.bumpMap&&(y.bumpMap.value=M.bumpMap,i(M.bumpMap,y.bumpMapTransform),y.bumpScale.value=M.bumpScale,M.side===mi&&(y.bumpScale.value*=-1)),M.normalMap&&(y.normalMap.value=M.normalMap,i(M.normalMap,y.normalMapTransform),y.normalScale.value.copy(M.normalScale),M.side===mi&&y.normalScale.value.negate()),M.displacementMap&&(y.displacementMap.value=M.displacementMap,i(M.displacementMap,y.displacementMapTransform),y.displacementScale.value=M.displacementScale,y.displacementBias.value=M.displacementBias),M.emissiveMap&&(y.emissiveMap.value=M.emissiveMap,i(M.emissiveMap,y.emissiveMapTransform)),M.specularMap&&(y.specularMap.value=M.specularMap,i(M.specularMap,y.specularMapTransform)),M.alphaTest>0&&(y.alphaTest.value=M.alphaTest);const I=e.get(M),B=I.envMap,C=I.envMapRotation;B&&(y.envMap.value=B,y.envMapRotation.value.setFromMatrix4(K2.makeRotationFromEuler(C)).transpose(),B.isCubeTexture&&B.isRenderTargetTexture===!1&&y.envMapRotation.value.premultiply(qx),y.reflectivity.value=M.reflectivity,y.ior.value=M.ior,y.refractionRatio.value=M.refractionRatio),M.lightMap&&(y.lightMap.value=M.lightMap,y.lightMapIntensity.value=M.lightMapIntensity,i(M.lightMap,y.lightMapTransform)),M.aoMap&&(y.aoMap.value=M.aoMap,y.aoMapIntensity.value=M.aoMapIntensity,i(M.aoMap,y.aoMapTransform))}function u(y,M){y.diffuse.value.copy(M.color),y.opacity.value=M.opacity,M.map&&(y.map.value=M.map,i(M.map,y.mapTransform))}function h(y,M){y.dashSize.value=M.dashSize,y.totalSize.value=M.dashSize+M.gapSize,y.scale.value=M.scale}function m(y,M,I,B){y.diffuse.value.copy(M.color),y.opacity.value=M.opacity,y.size.value=M.size*I,y.scale.value=B*.5,M.map&&(y.map.value=M.map,i(M.map,y.uvTransform)),M.alphaMap&&(y.alphaMap.value=M.alphaMap,i(M.alphaMap,y.alphaMapTransform)),M.alphaTest>0&&(y.alphaTest.value=M.alphaTest)}function d(y,M){y.diffuse.value.copy(M.color),y.opacity.value=M.opacity,y.rotation.value=M.rotation,M.map&&(y.map.value=M.map,i(M.map,y.mapTransform)),M.alphaMap&&(y.alphaMap.value=M.alphaMap,i(M.alphaMap,y.alphaMapTransform)),M.alphaTest>0&&(y.alphaTest.value=M.alphaTest)}function g(y,M){y.specular.value.copy(M.specular),y.shininess.value=Math.max(M.shininess,1e-4)}function _(y,M){M.gradientMap&&(y.gradientMap.value=M.gradientMap)}function v(y,M){y.metalness.value=M.metalness,M.metalnessMap&&(y.metalnessMap.value=M.metalnessMap,i(M.metalnessMap,y.metalnessMapTransform)),y.roughness.value=M.roughness,M.roughnessMap&&(y.roughnessMap.value=M.roughnessMap,i(M.roughnessMap,y.roughnessMapTransform)),M.envMap&&(y.envMapIntensity.value=M.envMapIntensity)}function x(y,M,I){y.ior.value=M.ior,M.sheen>0&&(y.sheenColor.value.copy(M.sheenColor).multiplyScalar(M.sheen),y.sheenRoughness.value=M.sheenRoughness,M.sheenColorMap&&(y.sheenColorMap.value=M.sheenColorMap,i(M.sheenColorMap,y.sheenColorMapTransform)),M.sheenRoughnessMap&&(y.sheenRoughnessMap.value=M.sheenRoughnessMap,i(M.sheenRoughnessMap,y.sheenRoughnessMapTransform))),M.clearcoat>0&&(y.clearcoat.value=M.clearcoat,y.clearcoatRoughness.value=M.clearcoatRoughness,M.clearcoatMap&&(y.clearcoatMap.value=M.clearcoatMap,i(M.clearcoatMap,y.clearcoatMapTransform)),M.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=M.clearcoatRoughnessMap,i(M.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),M.clearcoatNormalMap&&(y.clearcoatNormalMap.value=M.clearcoatNormalMap,i(M.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(M.clearcoatNormalScale),M.side===mi&&y.clearcoatNormalScale.value.negate())),M.dispersion>0&&(y.dispersion.value=M.dispersion),M.iridescence>0&&(y.iridescence.value=M.iridescence,y.iridescenceIOR.value=M.iridescenceIOR,y.iridescenceThicknessMinimum.value=M.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=M.iridescenceThicknessRange[1],M.iridescenceMap&&(y.iridescenceMap.value=M.iridescenceMap,i(M.iridescenceMap,y.iridescenceMapTransform)),M.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=M.iridescenceThicknessMap,i(M.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),M.transmission>0&&(y.transmission.value=M.transmission,y.transmissionSamplerMap.value=I.texture,y.transmissionSamplerSize.value.set(I.width,I.height),M.transmissionMap&&(y.transmissionMap.value=M.transmissionMap,i(M.transmissionMap,y.transmissionMapTransform)),y.thickness.value=M.thickness,M.thicknessMap&&(y.thicknessMap.value=M.thicknessMap,i(M.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=M.attenuationDistance,y.attenuationColor.value.copy(M.attenuationColor)),M.anisotropy>0&&(y.anisotropyVector.value.set(M.anisotropy*Math.cos(M.anisotropyRotation),M.anisotropy*Math.sin(M.anisotropyRotation)),M.anisotropyMap&&(y.anisotropyMap.value=M.anisotropyMap,i(M.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=M.specularIntensity,y.specularColor.value.copy(M.specularColor),M.specularColorMap&&(y.specularColorMap.value=M.specularColorMap,i(M.specularColorMap,y.specularColorMapTransform)),M.specularIntensityMap&&(y.specularIntensityMap.value=M.specularIntensityMap,i(M.specularIntensityMap,y.specularIntensityMapTransform))}function b(y,M){M.matcap&&(y.matcap.value=M.matcap)}function w(y,M){const I=e.get(M).light;y.referencePosition.value.setFromMatrixPosition(I.matrixWorld),y.nearDistance.value=I.shadow.camera.near,y.farDistance.value=I.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function J2(a,e,i,r){let o={},c={},u=[];const h=a.getParameter(a.MAX_UNIFORM_BUFFER_BINDINGS);function m(C,O){const L=O.program;r.uniformBlockBinding(C,L)}function d(C,O){let L=o[C.id];L===void 0&&(y(C),L=g(C),o[C.id]=L,C.addEventListener("dispose",I));const F=O.program;r.updateUBOMapping(C,F);const T=e.render.frame;c[C.id]!==T&&(v(C),c[C.id]=T)}function g(C){const O=_();C.__bindingPointIndex=O;const L=a.createBuffer(),F=C.__size,T=C.usage;return a.bindBuffer(a.UNIFORM_BUFFER,L),a.bufferData(a.UNIFORM_BUFFER,F,T),a.bindBuffer(a.UNIFORM_BUFFER,null),a.bindBufferBase(a.UNIFORM_BUFFER,O,L),L}function _(){for(let C=0;C<h;C++)if(u.indexOf(C)===-1)return u.push(C),C;return Lt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(C){const O=o[C.id],L=C.uniforms,F=C.__cache;a.bindBuffer(a.UNIFORM_BUFFER,O);for(let T=0,N=L.length;T<N;T++){const Z=L[T];if(Array.isArray(Z))for(let k=0,j=Z.length;k<j;k++)x(Z[k],T,k,F);else x(Z,T,0,F)}a.bindBuffer(a.UNIFORM_BUFFER,null)}function x(C,O,L,F){if(w(C,O,L,F)===!0){const T=C.__offset,N=C.value;if(Array.isArray(N)){let Z=0;for(let k=0;k<N.length;k++){const j=N[k],me=M(j);b(j,C.__data,Z),typeof j!="number"&&typeof j!="boolean"&&!j.isMatrix3&&!ArrayBuffer.isView(j)&&(Z+=me.storage/Float32Array.BYTES_PER_ELEMENT)}}else b(N,C.__data,0);a.bufferSubData(a.UNIFORM_BUFFER,T,C.__data)}}function b(C,O,L){typeof C=="number"||typeof C=="boolean"?O[0]=C:C.isMatrix3?(O[0]=C.elements[0],O[1]=C.elements[1],O[2]=C.elements[2],O[3]=0,O[4]=C.elements[3],O[5]=C.elements[4],O[6]=C.elements[5],O[7]=0,O[8]=C.elements[6],O[9]=C.elements[7],O[10]=C.elements[8],O[11]=0):ArrayBuffer.isView(C)?O.set(new C.constructor(C.buffer,C.byteOffset,O.length)):C.toArray(O,L)}function w(C,O,L,F){const T=C.value,N=O+"_"+L;if(F[N]===void 0)return typeof T=="number"||typeof T=="boolean"?F[N]=T:ArrayBuffer.isView(T)?F[N]=T.slice():F[N]=T.clone(),!0;{const Z=F[N];if(typeof T=="number"||typeof T=="boolean"){if(Z!==T)return F[N]=T,!0}else{if(ArrayBuffer.isView(T))return!0;if(Z.equals(T)===!1)return Z.copy(T),!0}}return!1}function y(C){const O=C.uniforms;let L=0;const F=16;for(let N=0,Z=O.length;N<Z;N++){const k=Array.isArray(O[N])?O[N]:[O[N]];for(let j=0,me=k.length;j<me;j++){const ce=k[j],X=Array.isArray(ce.value)?ce.value:[ce.value];for(let z=0,H=X.length;z<H;z++){const Q=X[z],fe=M(Q),xe=L%F,U=xe%fe.boundary,W=xe+U;L+=U,W!==0&&F-W<fe.storage&&(L+=F-W),ce.__data=new Float32Array(fe.storage/Float32Array.BYTES_PER_ELEMENT),ce.__offset=L,L+=fe.storage}}}const T=L%F;return T>0&&(L+=F-T),C.__size=L,C.__cache={},this}function M(C){const O={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(O.boundary=4,O.storage=4):C.isVector2?(O.boundary=8,O.storage=8):C.isVector3||C.isColor?(O.boundary=16,O.storage=12):C.isVector4?(O.boundary=16,O.storage=16):C.isMatrix3?(O.boundary=48,O.storage=48):C.isMatrix4?(O.boundary=64,O.storage=64):C.isTexture?lt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(C)?(O.boundary=16,O.storage=C.byteLength):lt("WebGLRenderer: Unsupported uniform value type.",C),O}function I(C){const O=C.target;O.removeEventListener("dispose",I);const L=u.indexOf(O.__bindingPointIndex);u.splice(L,1),a.deleteBuffer(o[O.id]),delete o[O.id],delete c[O.id]}function B(){for(const C in o)a.deleteBuffer(o[C]);u=[],o={},c={}}return{bind:m,update:d,dispose:B}}const $2=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let va=null;function eR(){return va===null&&(va=new kE($2,16,16,yr,as),va.name="DFG_LUT",va.minFilter=pn,va.magFilter=pn,va.wrapS=ia,va.wrapT=ia,va.generateMipmaps=!1,va.needsUpdate=!0),va}class tR{constructor(e={}){const{canvas:i=aE(),context:r=null,depth:o=!0,stencil:c=!1,alpha:u=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:d=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:v=!1,outputBufferType:x=Gi}=e;this.isWebGLRenderer=!0;let b;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=r.getContextAttributes().alpha}else b=u;const w=x,y=new Set([Op,Up,Np]),M=new Set([Gi,Aa,Fl,Bl,Dp,Lp]),I=new Uint32Array(4),B=new Int32Array(4),C=new ae;let O=null,L=null;const F=[],T=[];let N=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ea,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const Z=this;let k=!1,j=null,me=null,ce=null,X=null;this._outputColorSpace=ni;let z=0,H=0,Q=null,fe=-1,xe=null;const U=new xn,W=new xn;let ye=null;const Ce=new Xt(0);let Ge=0,oe=i.width,be=i.height,Te=1,qe=null,je=null;const $e=new xn(0,0,oe,be),Vt=new xn(0,0,oe,be);let ut=!1;const pt=new Nx;let gt=!1,_t=!1;const sn=new En,tn=new ae,nn=new xn,$t={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Nt=!1;function rn(){return Q===null?Te:1}let K=r;function Ut(A,V){return i.getContext(A,V)}try{const A={alpha:!0,depth:o,stencil:c,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:d,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Cp}`),i.addEventListener("webglcontextlost",jt,!1),i.addEventListener("webglcontextrestored",Ft,!1),i.addEventListener("webglcontextcreationerror",Fn,!1),K===null){const V="webgl2";if(K=Ut(V,A),K===null)throw Ut(V)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(A){throw Lt("WebGLRenderer: "+A.message),A}let Ct,P,E,J,ne,de,Re,Ie,ue,he,De,Ve,Be,Pe,nt,it,st,Y,Ne,ge,we,Fe,ve;function Qe(){Ct=new eA(K),Ct.init(),we=new W2(K,Ct),P=new qT(K,Ct,e,we),E=new k2(K,Ct),P.reversedDepthBuffer&&v&&E.buffers.depth.setReversed(!0),me=K.createFramebuffer(),ce=K.createFramebuffer(),X=K.createFramebuffer(),J=new iA(K),ne=new w2,de=new X2(K,Ct,E,ne,P,we,J),Re=new $T(Z),Ie=new ob(K),Fe=new XT(K,Ie),ue=new tA(K,Ie,J,Fe),he=new sA(K,ue,Ie,Fe,J),Y=new aA(K,P,de),nt=new YT(ne),De=new C2(Z,Re,Ct,P,Fe,nt),Ve=new Q2(Z,ne),Be=new L2,Pe=new F2(Ct),st=new kT(Z,Re,E,he,b,m),it=new V2(Z,he,P),ve=new J2(K,J,P,E),Ne=new WT(K,Ct,J),ge=new nA(K,Ct,J),J.programs=De.programs,Z.capabilities=P,Z.extensions=Ct,Z.properties=ne,Z.renderLists=Be,Z.shadowMap=it,Z.state=E,Z.info=J}Qe(),w!==Gi&&(N=new oA(w,i.width,i.height,h,o,c));const Ye=new Z2(Z,K);this.xr=Ye,this.getContext=function(){return K},this.getContextAttributes=function(){return K.getContextAttributes()},this.forceContextLoss=function(){const A=Ct.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Ct.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Te},this.setPixelRatio=function(A){A!==void 0&&(Te=A,this.setSize(oe,be,!1))},this.getSize=function(A){return A.set(oe,be)},this.setSize=function(A,V,$=!0){if(Ye.isPresenting){lt("WebGLRenderer: Can't change size while VR device is presenting.");return}oe=A,be=V,i.width=Math.floor(A*Te),i.height=Math.floor(V*Te),$===!0&&(i.style.width=A+"px",i.style.height=V+"px"),N!==null&&N.setSize(i.width,i.height),this.setViewport(0,0,A,V)},this.getDrawingBufferSize=function(A){return A.set(oe*Te,be*Te).floor()},this.setDrawingBufferSize=function(A,V,$){oe=A,be=V,Te=$,i.width=Math.floor(A*$),i.height=Math.floor(V*$),this.setViewport(0,0,A,V)},this.setEffects=function(A){if(w===Gi){Lt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let V=0;V<A.length;V++)if(A[V].isOutputPass===!0){lt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}N.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(U)},this.getViewport=function(A){return A.copy($e)},this.setViewport=function(A,V,$,te){A.isVector4?$e.set(A.x,A.y,A.z,A.w):$e.set(A,V,$,te),E.viewport(U.copy($e).multiplyScalar(Te).round())},this.getScissor=function(A){return A.copy(Vt)},this.setScissor=function(A,V,$,te){A.isVector4?Vt.set(A.x,A.y,A.z,A.w):Vt.set(A,V,$,te),E.scissor(W.copy(Vt).multiplyScalar(Te).round())},this.getScissorTest=function(){return ut},this.setScissorTest=function(A){E.setScissorTest(ut=A)},this.setOpaqueSort=function(A){qe=A},this.setTransparentSort=function(A){je=A},this.getClearColor=function(A){return A.copy(st.getClearColor())},this.setClearColor=function(){st.setClearColor(...arguments)},this.getClearAlpha=function(){return st.getClearAlpha()},this.setClearAlpha=function(){st.setClearAlpha(...arguments)},this.clear=function(A=!0,V=!0,$=!0){let te=0;if(A){let ie=!1;if(Q!==null){const Ue=Q.texture.format;ie=y.has(Ue)}if(ie){const Ue=Q.texture.type,Oe=M.has(Ue),Le=st.getClearColor(),He=st.getClearAlpha(),ze=Le.r,tt=Le.g,rt=Le.b;Oe?(I[0]=ze,I[1]=tt,I[2]=rt,I[3]=He,K.clearBufferuiv(K.COLOR,0,I)):(B[0]=ze,B[1]=tt,B[2]=rt,B[3]=He,K.clearBufferiv(K.COLOR,0,B))}else te|=K.COLOR_BUFFER_BIT}V&&(te|=K.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),$&&(te|=K.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),te!==0&&K.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),j=A},this.dispose=function(){i.removeEventListener("webglcontextlost",jt,!1),i.removeEventListener("webglcontextrestored",Ft,!1),i.removeEventListener("webglcontextcreationerror",Fn,!1),st.dispose(),Be.dispose(),Pe.dispose(),ne.dispose(),Re.dispose(),he.dispose(),Fe.dispose(),ve.dispose(),De.dispose(),Ye.dispose(),Ye.removeEventListener("sessionstart",on),Ye.removeEventListener("sessionend",bn),Vn.stop()};function jt(A){A.preventDefault(),q_("WebGLRenderer: Context Lost."),k=!0}function Ft(){q_("WebGLRenderer: Context Restored."),k=!1;const A=J.autoReset,V=it.enabled,$=it.autoUpdate,te=it.needsUpdate,ie=it.type;Qe(),J.autoReset=A,it.enabled=V,it.autoUpdate=$,it.needsUpdate=te,it.type=ie}function Fn(A){Lt("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Bn(A){const V=A.target;V.removeEventListener("dispose",Bn),Ra(V)}function Ra(A){rs(A),ne.remove(A)}function rs(A){const V=ne.get(A).programs;V!==void 0&&(V.forEach(function($){De.releaseProgram($)}),A.isShaderMaterial&&De.releaseShaderCache(A))}this.renderBufferDirect=function(A,V,$,te,ie,Ue){V===null&&(V=$t);const Oe=ie.isMesh&&ie.matrixWorld.determinantAffine()<0,Le=Me(A,V,$,te,ie);E.setMaterial(te,Oe);let He=$.index,ze=1;if(te.wireframe===!0){if(He=ue.getWireframeAttribute($),He===void 0)return;ze=2}const tt=$.drawRange,rt=$.attributes.position;let Je=tt.start*ze,Mt=(tt.start+tt.count)*ze;Ue!==null&&(Je=Math.max(Je,Ue.start*ze),Mt=Math.min(Mt,(Ue.start+Ue.count)*ze)),He!==null?(Je=Math.max(Je,0),Mt=Math.min(Mt,He.count)):rt!=null&&(Je=Math.max(Je,0),Mt=Math.min(Mt,rt.count));const Zt=Mt-Je;if(Zt<0||Zt===1/0)return;Fe.setup(ie,te,Le,$,He);let kt,wt=Ne;if(He!==null&&(kt=Ie.get(He),wt=ge,wt.setIndex(kt)),ie.isMesh)te.wireframe===!0?(E.setLineWidth(te.wireframeLinewidth*rn()),wt.setMode(K.LINES)):wt.setMode(K.TRIANGLES);else if(ie.isLine){let Dt=te.linewidth;Dt===void 0&&(Dt=1),E.setLineWidth(Dt*rn()),ie.isLineSegments?wt.setMode(K.LINES):ie.isLineLoop?wt.setMode(K.LINE_LOOP):wt.setMode(K.LINE_STRIP)}else ie.isPoints?wt.setMode(K.POINTS):ie.isSprite&&wt.setMode(K.TRIANGLES);if(ie.isBatchedMesh)if(Ct.get("WEBGL_multi_draw"))wt.renderMultiDraw(ie._multiDrawStarts,ie._multiDrawCounts,ie._multiDrawCount);else{const Dt=ie._multiDrawStarts,ke=ie._multiDrawCounts,Nn=ie._multiDrawCount,vt=He?Ie.get(He).bytesPerElement:1,mn=ne.get(te).currentProgram.getUniforms();for(let Kn=0;Kn<Nn;Kn++)mn.setValue(K,"_gl_DrawID",Kn),wt.render(Dt[Kn]/vt,ke[Kn])}else if(ie.isInstancedMesh)wt.renderInstances(Je,Zt,ie.count);else if($.isInstancedBufferGeometry){const Dt=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,ke=Math.min($.instanceCount,Dt);wt.renderInstances(Je,Zt,ke)}else wt.render(Je,Zt)};function os(A,V,$){A.transparent===!0&&A.side===Sa&&A.forceSinglePass===!1?(A.side=mi,A.needsUpdate=!0,qi(A,V,$),A.side=is,A.needsUpdate=!0,qi(A,V,$),A.side=Sa):qi(A,V,$)}this.compile=function(A,V,$=null){$===null&&($=A),L=Pe.get($),L.init(V),T.push(L),$.traverseVisible(function(ie){ie.isLight&&ie.layers.test(V.layers)&&(L.pushLight(ie),ie.castShadow&&L.pushShadow(ie))}),A!==$&&A.traverseVisible(function(ie){ie.isLight&&ie.layers.test(V.layers)&&(L.pushLight(ie),ie.castShadow&&L.pushShadow(ie))}),L.setupLights();const te=new Set;return A.traverse(function(ie){if(!(ie.isMesh||ie.isPoints||ie.isLine||ie.isSprite))return;const Ue=ie.material;if(Ue)if(Array.isArray(Ue))for(let Oe=0;Oe<Ue.length;Oe++){const Le=Ue[Oe];os(Le,$,ie),te.add(Le)}else os(Ue,$,ie),te.add(Ue)}),L=T.pop(),te},this.compileAsync=function(A,V,$=null){const te=this.compile(A,V,$);return new Promise(ie=>{function Ue(){if(te.forEach(function(Oe){ne.get(Oe).currentProgram.isReady()&&te.delete(Oe)}),te.size===0){ie(A);return}setTimeout(Ue,10)}Ct.get("KHR_parallel_shader_compile")!==null?Ue():setTimeout(Ue,10)})};let Ca=null;function gi(A){Ca&&Ca(A)}function on(){Vn.stop()}function bn(){Vn.start()}const Vn=new zx;Vn.setAnimationLoop(gi),typeof self<"u"&&Vn.setContext(self),this.setAnimationLoop=function(A){Ca=A,Ye.setAnimationLoop(A),A===null?Vn.stop():Vn.start()},Ye.addEventListener("sessionstart",on),Ye.addEventListener("sessionend",bn),this.render=function(A,V){if(V!==void 0&&V.isCamera!==!0){Lt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;j!==null&&j.renderStart(A,V);const $=Ye.enabled===!0&&Ye.isPresenting===!0,te=N!==null&&(Q===null||$)&&N.begin(Z,Q);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),Ye.enabled===!0&&Ye.isPresenting===!0&&(N===null||N.isCompositing()===!1)&&(Ye.cameraAutoUpdate===!0&&Ye.updateCamera(V),V=Ye.getCamera()),A.isScene===!0&&A.onBeforeRender(Z,A,V,Q),L=Pe.get(A,T.length),L.init(V),L.state.textureUnits=de.getTextureUnits(),T.push(L),sn.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),pt.setFromProjectionMatrix(sn,ya,V.reversedDepth),_t=this.localClippingEnabled,gt=nt.init(this.clippingPlanes,_t),O=Be.get(A,F.length),O.init(),F.push(O),Ye.enabled===!0&&Ye.isPresenting===!0){const Oe=Z.xr.getDepthSensingMesh();Oe!==null&&sa(Oe,V,-1/0,Z.sortObjects)}sa(A,V,0,Z.sortObjects),O.finish(),Z.sortObjects===!0&&O.sort(qe,je,V.reversedDepth),Nt=Ye.enabled===!1||Ye.isPresenting===!1||Ye.hasDepthSensing()===!1,Nt&&st.addToRenderList(O,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),gt===!0&&nt.beginShadows();const ie=L.state.shadowsArray;if(it.render(ie,A,V),gt===!0&&nt.endShadows(),(te&&N.hasRenderPass())===!1){const Oe=O.opaque,Le=O.transmissive;if(L.setupLights(),V.isArrayCamera){const He=V.cameras;if(Le.length>0)for(let ze=0,tt=He.length;ze<tt;ze++){const rt=He[ze];ks(Oe,Le,A,rt)}Nt&&st.render(A);for(let ze=0,tt=He.length;ze<tt;ze++){const rt=He[ze];Vs(O,A,rt,rt.viewport)}}else Le.length>0&&ks(Oe,Le,A,V),Nt&&st.render(A),Vs(O,A,V)}Q!==null&&H===0&&(de.updateMultisampleRenderTarget(Q),de.updateRenderTargetMipmap(Q)),te&&N.end(Z),A.isScene===!0&&A.onAfterRender(Z,A,V),Fe.resetDefaultState(),fe=-1,xe=null,T.pop(),T.length>0?(L=T[T.length-1],de.setTextureUnits(L.state.textureUnits),gt===!0&&nt.setGlobalState(Z.clippingPlanes,L.state.camera)):L=null,F.pop(),F.length>0?O=F[F.length-1]:O=null,j!==null&&j.renderEnd()};function sa(A,V,$,te){if(A.visible===!1)return;if(A.layers.test(V.layers)){if(A.isGroup)$=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(V);else if(A.isLightProbeGrid)L.pushLightProbeGrid(A);else if(A.isLight)L.pushLight(A),A.castShadow&&L.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||pt.intersectsSprite(A)){te&&nn.setFromMatrixPosition(A.matrixWorld).applyMatrix4(sn);const Oe=he.update(A),Le=A.material;Le.visible&&O.push(A,Oe,Le,$,nn.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||pt.intersectsObject(A))){const Oe=he.update(A),Le=A.material;if(te&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),nn.copy(A.boundingSphere.center)):(Oe.boundingSphere===null&&Oe.computeBoundingSphere(),nn.copy(Oe.boundingSphere.center)),nn.applyMatrix4(A.matrixWorld).applyMatrix4(sn)),Array.isArray(Le)){const He=Oe.groups;for(let ze=0,tt=He.length;ze<tt;ze++){const rt=He[ze],Je=Le[rt.materialIndex];Je&&Je.visible&&O.push(A,Oe,Je,$,nn.z,rt)}}else Le.visible&&O.push(A,Oe,Le,$,nn.z,null)}}const Ue=A.children;for(let Oe=0,Le=Ue.length;Oe<Le;Oe++)sa(Ue[Oe],V,$,te)}function Vs(A,V,$,te){const{opaque:ie,transmissive:Ue,transparent:Oe}=A;L.setupLightsView($),gt===!0&&nt.setGlobalState(Z.clippingPlanes,$),te&&E.viewport(U.copy(te)),ie.length>0&&ra(ie,V,$),Ue.length>0&&ra(Ue,V,$),Oe.length>0&&ra(Oe,V,$),E.buffers.depth.setTest(!0),E.buffers.depth.setMask(!0),E.buffers.color.setMask(!0),E.setPolygonOffset(!1)}function ks(A,V,$,te){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;if(L.state.transmissionRenderTarget[te.id]===void 0){const Je=Ct.has("EXT_color_buffer_half_float")||Ct.has("EXT_color_buffer_float");L.state.transmissionRenderTarget[te.id]=new ba(1,1,{generateMipmaps:!0,type:Je?as:Gi,minFilter:zs,samples:Math.max(4,P.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Rt.workingColorSpace})}const Ue=L.state.transmissionRenderTarget[te.id],Oe=te.viewport||U;Ue.setSize(Oe.z*Z.transmissionResolutionScale,Oe.w*Z.transmissionResolutionScale);const Le=Z.getRenderTarget(),He=Z.getActiveCubeFace(),ze=Z.getActiveMipmapLevel();Z.setRenderTarget(Ue),Z.getClearColor(Ce),Ge=Z.getClearAlpha(),Ge<1&&Z.setClearColor(16777215,.5),Z.clear(),Nt&&st.render($);const tt=Z.toneMapping;Z.toneMapping=Ea;const rt=te.viewport;if(te.viewport!==void 0&&(te.viewport=void 0),L.setupLightsView(te),gt===!0&&nt.setGlobalState(Z.clippingPlanes,te),ra(A,$,te),de.updateMultisampleRenderTarget(Ue),de.updateRenderTargetMipmap(Ue),Ct.has("WEBGL_multisampled_render_to_texture")===!1){let Je=!1;for(let Mt=0,Zt=V.length;Mt<Zt;Mt++){const kt=V[Mt],{object:wt,geometry:Dt,material:ke,group:Nn}=kt;if(ke.side===Sa&&wt.layers.test(te.layers)){const vt=ke.side;ke.side=mi,ke.needsUpdate=!0,Wi(wt,$,te,Dt,ke,Nn),ke.side=vt,ke.needsUpdate=!0,Je=!0}}Je===!0&&(de.updateMultisampleRenderTarget(Ue),de.updateRenderTargetMipmap(Ue))}Z.setRenderTarget(Le,He,ze),Z.setClearColor(Ce,Ge),rt!==void 0&&(te.viewport=rt),Z.toneMapping=tt}function ra(A,V,$){const te=V.isScene===!0?V.overrideMaterial:null;for(let ie=0,Ue=A.length;ie<Ue;ie++){const Oe=A[ie],{object:Le,geometry:He,group:ze}=Oe;let tt=Oe.material;tt.allowOverride===!0&&te!==null&&(tt=te),Le.layers.test($.layers)&&Wi(Le,V,$,He,tt,ze)}}function Wi(A,V,$,te,ie,Ue){A.onBeforeRender(Z,V,$,te,ie,Ue),A.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),ie.onBeforeRender(Z,V,$,te,A,Ue),ie.transparent===!0&&ie.side===Sa&&ie.forceSinglePass===!1?(ie.side=mi,ie.needsUpdate=!0,Z.renderBufferDirect($,V,te,ie,A,Ue),ie.side=is,ie.needsUpdate=!0,Z.renderBufferDirect($,V,te,ie,A,Ue),ie.side=Sa):Z.renderBufferDirect($,V,te,ie,A,Ue),A.onAfterRender(Z,V,$,te,ie,Ue)}function qi(A,V,$){V.isScene!==!0&&(V=$t);const te=ne.get(A),ie=L.state.lights,Ue=L.state.shadowsArray,Oe=ie.state.version,Le=De.getParameters(A,ie.state,Ue,V,$,L.state.lightProbeGridArray),He=De.getProgramCacheKey(Le);let ze=te.programs;te.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?V.environment:null,te.fog=V.fog;const tt=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;te.envMap=Re.get(A.envMap||te.environment,tt),te.envMapRotation=te.environment!==null&&A.envMap===null?V.environmentRotation:A.envMapRotation,ze===void 0&&(A.addEventListener("dispose",Bn),ze=new Map,te.programs=ze);let rt=ze.get(He);if(rt!==void 0){if(te.currentProgram===rt&&te.lightsStateVersion===Oe)return li(A,Le),rt}else Le.uniforms=De.getUniforms(A),j!==null&&A.isNodeMaterial&&j.build(A,$,Le),A.onBeforeCompile(Le,Z),rt=De.acquireProgram(Le,He),ze.set(He,rt),te.uniforms=Le.uniforms;const Je=te.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Je.clippingPlanes=nt.uniform),li(A,Le),te.needsLights=Ze(A),te.lightsStateVersion=Oe,te.needsLights&&(Je.ambientLightColor.value=ie.state.ambient,Je.lightProbe.value=ie.state.probe,Je.directionalLights.value=ie.state.directional,Je.directionalLightShadows.value=ie.state.directionalShadow,Je.spotLights.value=ie.state.spot,Je.spotLightShadows.value=ie.state.spotShadow,Je.rectAreaLights.value=ie.state.rectArea,Je.ltc_1.value=ie.state.rectAreaLTC1,Je.ltc_2.value=ie.state.rectAreaLTC2,Je.pointLights.value=ie.state.point,Je.pointLightShadows.value=ie.state.pointShadow,Je.hemisphereLights.value=ie.state.hemi,Je.directionalShadowMatrix.value=ie.state.directionalShadowMatrix,Je.spotLightMatrix.value=ie.state.spotLightMatrix,Je.spotLightMap.value=ie.state.spotLightMap,Je.pointShadowMatrix.value=ie.state.pointShadowMatrix),te.lightProbeGrid=L.state.lightProbeGridArray.length>0,te.currentProgram=rt,te.uniformsList=null,rt}function Di(A){if(A.uniformsList===null){const V=A.currentProgram.getUniforms();A.uniformsList=bu.seqWithValue(V.seq,A.uniforms)}return A.uniformsList}function li(A,V){const $=ne.get(A);$.outputColorSpace=V.outputColorSpace,$.batching=V.batching,$.batchingColor=V.batchingColor,$.instancing=V.instancing,$.instancingColor=V.instancingColor,$.instancingMorph=V.instancingMorph,$.skinning=V.skinning,$.morphTargets=V.morphTargets,$.morphNormals=V.morphNormals,$.morphColors=V.morphColors,$.morphTargetsCount=V.morphTargetsCount,$.numClippingPlanes=V.numClippingPlanes,$.numIntersection=V.numClipIntersection,$.vertexAlphas=V.vertexAlphas,$.vertexTangents=V.vertexTangents,$.toneMapping=V.toneMapping}function oa(A,V){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;C.setFromMatrixPosition(V.matrixWorld);for(let $=0,te=A.length;$<te;$++){const ie=A[$];if(ie.texture!==null&&ie.boundingBox.containsPoint(C))return ie}return null}function Me(A,V,$,te,ie){V.isScene!==!0&&(V=$t),de.resetTextureUnits();const Ue=V.fog,Oe=te.isMeshStandardMaterial||te.isMeshLambertMaterial||te.isMeshPhongMaterial?V.environment:null,Le=Q===null?Z.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:Rt.workingColorSpace,He=te.isMeshStandardMaterial||te.isMeshLambertMaterial&&!te.envMap||te.isMeshPhongMaterial&&!te.envMap,ze=Re.get(te.envMap||Oe,He),tt=te.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,rt=!!$.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),Je=!!$.morphAttributes.position,Mt=!!$.morphAttributes.normal,Zt=!!$.morphAttributes.color;let kt=Ea;te.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(kt=Z.toneMapping);const wt=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Dt=wt!==void 0?wt.length:0,ke=ne.get(te),Nn=L.state.lights;if(gt===!0&&(_t===!0||A!==xe)){const zt=A===xe&&te.id===fe;nt.setState(te,A,zt)}let vt=!1;te.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==Nn.state.version||ke.outputColorSpace!==Le||ie.isBatchedMesh&&ke.batching===!1||!ie.isBatchedMesh&&ke.batching===!0||ie.isBatchedMesh&&ke.batchingColor===!0&&ie.colorTexture===null||ie.isBatchedMesh&&ke.batchingColor===!1&&ie.colorTexture!==null||ie.isInstancedMesh&&ke.instancing===!1||!ie.isInstancedMesh&&ke.instancing===!0||ie.isSkinnedMesh&&ke.skinning===!1||!ie.isSkinnedMesh&&ke.skinning===!0||ie.isInstancedMesh&&ke.instancingColor===!0&&ie.instanceColor===null||ie.isInstancedMesh&&ke.instancingColor===!1&&ie.instanceColor!==null||ie.isInstancedMesh&&ke.instancingMorph===!0&&ie.morphTexture===null||ie.isInstancedMesh&&ke.instancingMorph===!1&&ie.morphTexture!==null||ke.envMap!==ze||te.fog===!0&&ke.fog!==Ue||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==nt.numPlanes||ke.numIntersection!==nt.numIntersection)||ke.vertexAlphas!==tt||ke.vertexTangents!==rt||ke.morphTargets!==Je||ke.morphNormals!==Mt||ke.morphColors!==Zt||ke.toneMapping!==kt||ke.morphTargetsCount!==Dt||!!ke.lightProbeGrid!=L.state.lightProbeGridArray.length>0)&&(vt=!0):(vt=!0,ke.__version=te.version);let mn=ke.currentProgram;vt===!0&&(mn=qi(te,V,ie),j&&te.isNodeMaterial&&j.onUpdateProgram(te,mn,ke));let Kn=!1,Un=!1,gn=!1;const Bt=mn.getUniforms(),an=ke.uniforms;if(E.useProgram(mn.program)&&(Kn=!0,Un=!0,gn=!0),te.id!==fe&&(fe=te.id,Un=!0),ke.needsLights){const zt=oa(L.state.lightProbeGridArray,ie);ke.lightProbeGrid!==zt&&(ke.lightProbeGrid=zt,Un=!0)}if(Kn||xe!==A){E.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Bt.setValue(K,"projectionMatrix",A.projectionMatrix),Bt.setValue(K,"viewMatrix",A.matrixWorldInverse);const Qn=Bt.map.cameraPosition;Qn!==void 0&&Qn.setValue(K,tn.setFromMatrixPosition(A.matrixWorld)),P.logarithmicDepthBuffer&&Bt.setValue(K,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&Bt.setValue(K,"isOrthographic",A.isOrthographicCamera===!0),xe!==A&&(xe=A,Un=!0,gn=!0)}if(ke.needsLights&&(Nn.state.directionalShadowMap.length>0&&Bt.setValue(K,"directionalShadowMap",Nn.state.directionalShadowMap,de),Nn.state.spotShadowMap.length>0&&Bt.setValue(K,"spotShadowMap",Nn.state.spotShadowMap,de),Nn.state.pointShadowMap.length>0&&Bt.setValue(K,"pointShadowMap",Nn.state.pointShadowMap,de)),ie.isSkinnedMesh){Bt.setOptional(K,ie,"bindMatrix"),Bt.setOptional(K,ie,"bindMatrixInverse");const zt=ie.skeleton;zt&&(zt.boneTexture===null&&zt.computeBoneTexture(),Bt.setValue(K,"boneTexture",zt.boneTexture,de))}ie.isBatchedMesh&&(Bt.setOptional(K,ie,"batchingTexture"),Bt.setValue(K,"batchingTexture",ie._matricesTexture,de),Bt.setOptional(K,ie,"batchingIdTexture"),Bt.setValue(K,"batchingIdTexture",ie._indirectTexture,de),Bt.setOptional(K,ie,"batchingColorTexture"),ie._colorsTexture!==null&&Bt.setValue(K,"batchingColorTexture",ie._colorsTexture,de));const _i=$.morphAttributes;if((_i.position!==void 0||_i.normal!==void 0||_i.color!==void 0)&&Y.update(ie,$,mn),(Un||ke.receiveShadow!==ie.receiveShadow)&&(ke.receiveShadow=ie.receiveShadow,Bt.setValue(K,"receiveShadow",ie.receiveShadow)),(te.isMeshStandardMaterial||te.isMeshLambertMaterial||te.isMeshPhongMaterial)&&te.envMap===null&&V.environment!==null&&(an.envMapIntensity.value=V.environmentIntensity),an.dfgLUT!==void 0&&(an.dfgLUT.value=eR()),Un){if(Bt.setValue(K,"toneMappingExposure",Z.toneMappingExposure),ke.needsLights&&Ae(an,gn),Ue&&te.fog===!0&&Ve.refreshFogUniforms(an,Ue),Ve.refreshMaterialUniforms(an,te,Te,be,L.state.transmissionRenderTarget[A.id]),ke.needsLights&&ke.lightProbeGrid){const zt=ke.lightProbeGrid;an.probesSH.value=zt.texture,an.probesMin.value.copy(zt.boundingBox.min),an.probesMax.value.copy(zt.boundingBox.max),an.probesResolution.value.copy(zt.resolution)}bu.upload(K,Di(ke),an,de)}if(te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(bu.upload(K,Di(ke),an,de),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&Bt.setValue(K,"center",ie.center),Bt.setValue(K,"modelViewMatrix",ie.modelViewMatrix),Bt.setValue(K,"normalMatrix",ie.normalMatrix),Bt.setValue(K,"modelMatrix",ie.matrixWorld),te.uniformsGroups!==void 0){const zt=te.uniformsGroups;for(let Qn=0,la=zt.length;Qn<la;Qn++){const wa=zt[Qn];ve.update(wa,mn),ve.bind(wa,mn)}}return mn}function Ae(A,V){A.ambientLightColor.needsUpdate=V,A.lightProbe.needsUpdate=V,A.directionalLights.needsUpdate=V,A.directionalLightShadows.needsUpdate=V,A.pointLights.needsUpdate=V,A.pointLightShadows.needsUpdate=V,A.spotLights.needsUpdate=V,A.spotLightShadows.needsUpdate=V,A.rectAreaLights.needsUpdate=V,A.hemisphereLights.needsUpdate=V}function Ze(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return Q},this.setRenderTargetTextures=function(A,V,$){const te=ne.get(A);te.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,te.__autoAllocateDepthBuffer===!1&&(te.__useRenderToTexture=!1),ne.get(A.texture).__webglTexture=V,ne.get(A.depthTexture).__webglTexture=te.__autoAllocateDepthBuffer?void 0:$,te.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,V){const $=ne.get(A);$.__webglFramebuffer=V,$.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(A,V=0,$=0){Q=A,z=V,H=$;let te=null,ie=!1,Ue=!1;if(A){const Le=ne.get(A);if(Le.__useDefaultFramebuffer!==void 0){E.bindFramebuffer(K.FRAMEBUFFER,Le.__webglFramebuffer),U.copy(A.viewport),W.copy(A.scissor),ye=A.scissorTest,E.viewport(U),E.scissor(W),E.setScissorTest(ye),fe=-1;return}else if(Le.__webglFramebuffer===void 0)de.setupRenderTarget(A);else if(Le.__hasExternalTextures)de.rebindTextures(A,ne.get(A.texture).__webglTexture,ne.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const tt=A.depthTexture;if(Le.__boundDepthTexture!==tt){if(tt!==null&&ne.has(tt)&&(A.width!==tt.image.width||A.height!==tt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");de.setupDepthRenderbuffer(A)}}const He=A.texture;(He.isData3DTexture||He.isDataArrayTexture||He.isCompressedArrayTexture)&&(Ue=!0);const ze=ne.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(ze[V])?te=ze[V][$]:te=ze[V],ie=!0):A.samples>0&&de.useMultisampledRTT(A)===!1?te=ne.get(A).__webglMultisampledFramebuffer:Array.isArray(ze)?te=ze[$]:te=ze,U.copy(A.viewport),W.copy(A.scissor),ye=A.scissorTest}else U.copy($e).multiplyScalar(Te).floor(),W.copy(Vt).multiplyScalar(Te).floor(),ye=ut;if($!==0&&(te=me),E.bindFramebuffer(K.FRAMEBUFFER,te)&&E.drawBuffers(A,te),E.viewport(U),E.scissor(W),E.setScissorTest(ye),ie){const Le=ne.get(A.texture);K.framebufferTexture2D(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_CUBE_MAP_POSITIVE_X+V,Le.__webglTexture,$)}else if(Ue){const Le=V;for(let He=0;He<A.textures.length;He++){const ze=ne.get(A.textures[He]);K.framebufferTextureLayer(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0+He,ze.__webglTexture,$,Le)}}else if(A!==null&&$!==0){const Le=ne.get(A.texture);K.framebufferTexture2D(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_2D,Le.__webglTexture,$)}fe=-1},this.readRenderTargetPixels=function(A,V,$,te,ie,Ue,Oe,Le=0){if(!(A&&A.isWebGLRenderTarget)){Lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let He=ne.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Oe!==void 0&&(He=He[Oe]),He){E.bindFramebuffer(K.FRAMEBUFFER,He);try{const ze=A.textures[Le],tt=ze.format,rt=ze.type;if(A.textures.length>1&&K.readBuffer(K.COLOR_ATTACHMENT0+Le),!P.textureFormatReadable(tt)){Lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!P.textureTypeReadable(rt)){Lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=A.width-te&&$>=0&&$<=A.height-ie&&K.readPixels(V,$,te,ie,we.convert(tt),we.convert(rt),Ue)}finally{const ze=Q!==null?ne.get(Q).__webglFramebuffer:null;E.bindFramebuffer(K.FRAMEBUFFER,ze)}}},this.readRenderTargetPixelsAsync=async function(A,V,$,te,ie,Ue,Oe,Le=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let He=ne.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Oe!==void 0&&(He=He[Oe]),He)if(V>=0&&V<=A.width-te&&$>=0&&$<=A.height-ie){E.bindFramebuffer(K.FRAMEBUFFER,He);const ze=A.textures[Le],tt=ze.format,rt=ze.type;if(A.textures.length>1&&K.readBuffer(K.COLOR_ATTACHMENT0+Le),!P.textureFormatReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!P.textureTypeReadable(rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Je=K.createBuffer();K.bindBuffer(K.PIXEL_PACK_BUFFER,Je),K.bufferData(K.PIXEL_PACK_BUFFER,Ue.byteLength,K.STREAM_READ),K.readPixels(V,$,te,ie,we.convert(tt),we.convert(rt),0);const Mt=Q!==null?ne.get(Q).__webglFramebuffer:null;E.bindFramebuffer(K.FRAMEBUFFER,Mt);const Zt=K.fenceSync(K.SYNC_GPU_COMMANDS_COMPLETE,0);return K.flush(),await sE(K,Zt,4),K.bindBuffer(K.PIXEL_PACK_BUFFER,Je),K.getBufferSubData(K.PIXEL_PACK_BUFFER,0,Ue),K.deleteBuffer(Je),K.deleteSync(Zt),Ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,V=null,$=0){const te=Math.pow(2,-$),ie=Math.floor(A.image.width*te),Ue=Math.floor(A.image.height*te),Oe=V!==null?V.x:0,Le=V!==null?V.y:0;de.setTexture2D(A,0),K.copyTexSubImage2D(K.TEXTURE_2D,$,0,0,Oe,Le,ie,Ue),E.unbindTexture()},this.copyTextureToTexture=function(A,V,$=null,te=null,ie=0,Ue=0){let Oe,Le,He,ze,tt,rt,Je,Mt,Zt;const kt=A.isCompressedTexture?A.mipmaps[Ue]:A.image;if($!==null)Oe=$.max.x-$.min.x,Le=$.max.y-$.min.y,He=$.isBox3?$.max.z-$.min.z:1,ze=$.min.x,tt=$.min.y,rt=$.isBox3?$.min.z:0;else{const an=Math.pow(2,-ie);Oe=Math.floor(kt.width*an),Le=Math.floor(kt.height*an),A.isDataArrayTexture?He=kt.depth:A.isData3DTexture?He=Math.floor(kt.depth*an):He=1,ze=0,tt=0,rt=0}te!==null?(Je=te.x,Mt=te.y,Zt=te.z):(Je=0,Mt=0,Zt=0);const wt=we.convert(V.format),Dt=we.convert(V.type);let ke;V.isData3DTexture?(de.setTexture3D(V,0),ke=K.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(de.setTexture2DArray(V,0),ke=K.TEXTURE_2D_ARRAY):(de.setTexture2D(V,0),ke=K.TEXTURE_2D),E.activeTexture(K.TEXTURE0),E.pixelStorei(K.UNPACK_FLIP_Y_WEBGL,V.flipY),E.pixelStorei(K.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),E.pixelStorei(K.UNPACK_ALIGNMENT,V.unpackAlignment);const Nn=E.getParameter(K.UNPACK_ROW_LENGTH),vt=E.getParameter(K.UNPACK_IMAGE_HEIGHT),mn=E.getParameter(K.UNPACK_SKIP_PIXELS),Kn=E.getParameter(K.UNPACK_SKIP_ROWS),Un=E.getParameter(K.UNPACK_SKIP_IMAGES);E.pixelStorei(K.UNPACK_ROW_LENGTH,kt.width),E.pixelStorei(K.UNPACK_IMAGE_HEIGHT,kt.height),E.pixelStorei(K.UNPACK_SKIP_PIXELS,ze),E.pixelStorei(K.UNPACK_SKIP_ROWS,tt),E.pixelStorei(K.UNPACK_SKIP_IMAGES,rt);const gn=A.isDataArrayTexture||A.isData3DTexture,Bt=V.isDataArrayTexture||V.isData3DTexture;if(A.isDepthTexture){const an=ne.get(A),_i=ne.get(V),zt=ne.get(an.__renderTarget),Qn=ne.get(_i.__renderTarget);E.bindFramebuffer(K.READ_FRAMEBUFFER,zt.__webglFramebuffer),E.bindFramebuffer(K.DRAW_FRAMEBUFFER,Qn.__webglFramebuffer);for(let la=0;la<He;la++)gn&&(K.framebufferTextureLayer(K.READ_FRAMEBUFFER,K.COLOR_ATTACHMENT0,ne.get(A).__webglTexture,ie,rt+la),K.framebufferTextureLayer(K.DRAW_FRAMEBUFFER,K.COLOR_ATTACHMENT0,ne.get(V).__webglTexture,Ue,Zt+la)),K.blitFramebuffer(ze,tt,Oe,Le,Je,Mt,Oe,Le,K.DEPTH_BUFFER_BIT,K.NEAREST);E.bindFramebuffer(K.READ_FRAMEBUFFER,null),E.bindFramebuffer(K.DRAW_FRAMEBUFFER,null)}else if(ie!==0||A.isRenderTargetTexture||ne.has(A)){const an=ne.get(A),_i=ne.get(V);E.bindFramebuffer(K.READ_FRAMEBUFFER,ce),E.bindFramebuffer(K.DRAW_FRAMEBUFFER,X);for(let zt=0;zt<He;zt++)gn?K.framebufferTextureLayer(K.READ_FRAMEBUFFER,K.COLOR_ATTACHMENT0,an.__webglTexture,ie,rt+zt):K.framebufferTexture2D(K.READ_FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_2D,an.__webglTexture,ie),Bt?K.framebufferTextureLayer(K.DRAW_FRAMEBUFFER,K.COLOR_ATTACHMENT0,_i.__webglTexture,Ue,Zt+zt):K.framebufferTexture2D(K.DRAW_FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_2D,_i.__webglTexture,Ue),ie!==0?K.blitFramebuffer(ze,tt,Oe,Le,Je,Mt,Oe,Le,K.COLOR_BUFFER_BIT,K.NEAREST):Bt?K.copyTexSubImage3D(ke,Ue,Je,Mt,Zt+zt,ze,tt,Oe,Le):K.copyTexSubImage2D(ke,Ue,Je,Mt,ze,tt,Oe,Le);E.bindFramebuffer(K.READ_FRAMEBUFFER,null),E.bindFramebuffer(K.DRAW_FRAMEBUFFER,null)}else Bt?A.isDataTexture||A.isData3DTexture?K.texSubImage3D(ke,Ue,Je,Mt,Zt,Oe,Le,He,wt,Dt,kt.data):V.isCompressedArrayTexture?K.compressedTexSubImage3D(ke,Ue,Je,Mt,Zt,Oe,Le,He,wt,kt.data):K.texSubImage3D(ke,Ue,Je,Mt,Zt,Oe,Le,He,wt,Dt,kt):A.isDataTexture?K.texSubImage2D(K.TEXTURE_2D,Ue,Je,Mt,Oe,Le,wt,Dt,kt.data):A.isCompressedTexture?K.compressedTexSubImage2D(K.TEXTURE_2D,Ue,Je,Mt,kt.width,kt.height,wt,kt.data):K.texSubImage2D(K.TEXTURE_2D,Ue,Je,Mt,Oe,Le,wt,Dt,kt);E.pixelStorei(K.UNPACK_ROW_LENGTH,Nn),E.pixelStorei(K.UNPACK_IMAGE_HEIGHT,vt),E.pixelStorei(K.UNPACK_SKIP_PIXELS,mn),E.pixelStorei(K.UNPACK_SKIP_ROWS,Kn),E.pixelStorei(K.UNPACK_SKIP_IMAGES,Un),Ue===0&&V.generateMipmaps&&K.generateMipmap(ke),E.unbindTexture()},this.initRenderTarget=function(A){ne.get(A).__webglFramebuffer===void 0&&de.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?de.setTextureCube(A,0):A.isData3DTexture?de.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?de.setTexture2DArray(A,0):de.setTexture2D(A,0),E.unbindTexture()},this.resetState=function(){z=0,H=0,Q=null,E.reset(),Fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ya}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Rt._getDrawingBufferColorSpace(e),i.unpackColorSpace=Rt._getUnpackColorSpace()}}const nR="/assets/Reckk-RegularItalic-DLM8ilig.ttf",iR="/assets/Reckk-MediumItalic-D_uyfX4p.otf",aR="/assets/CXLMediumItalic-DYSp-DoC.otf",sR=4,rR=5,es={fleet:"MAEX",name:"SharpeShark",version:"v1",role:"Executor",didShort:"0xf8a2…6035"};function Yx(a){return["discover","copy","supervise","isolate"][a]??"discover"}function oR(a){return Yx(a)}function lR(a,e,i){const r=e.split(/\s+/),o=[];let c="";for(const u of r){const h=c?`${c} ${u}`:u;a.measureText(h).width<=i?c=h:(c&&o.push(c),c=u)}return c&&o.push(c),o}function cR(a,e){const r=e<520?300:400,o=Math.round(r*a),c=Math.round(o*rR/sR);return{W:o,H:c}}function jx(a,e,i,r,o,c){const u=Math.min(c,r/2,o/2);a.beginPath(),a.moveTo(e+u,i),a.arcTo(e+r,i,e+r,i+o,u),a.arcTo(e+r,i+o,e,i+o,u),a.arcTo(e,i+o,e,i,u),a.arcTo(e,i,e+r,i,u),a.closePath()}function fn(a,e,i,r,o,c,u){jx(a,e,i,r,o,c),a.fillStyle=u,a.fill()}function Sn(a,e,i,r,o,c,u,h){jx(a,e,i,r,o,c),a.strokeStyle=u,a.lineWidth=h,a.stroke()}function Hu(a,e,i,r,o,c){fn(a,e,i,r,o,c,"#0c0e12"),Sn(a,e,i,r,o,c,"rgba(255,255,255,0.12)",Math.max(1,c*.12))}function Gu(a,e,i,r,o,c,u){const h=11*u;a.fillStyle="#c8f5a8",a.font=`700 ${h}px "DM Mono", ui-monospace, monospace`,a.textAlign="left",a.fillText(c,e+o,i+o+h);const m=22*u,d=e+r-o-m,g=i+o-2*u;return Sn(a,d,g,m,m,4*u,"rgba(255,255,255,0.14)",1),a.strokeStyle="rgba(255,255,255,0.55)",a.lineWidth=Math.max(1,1.25*u),a.beginPath(),a.moveTo(d+6*u,g+6*u),a.lineTo(d+m-6*u,g+m-6*u),a.moveTo(d+m-6*u,g+6*u),a.lineTo(d+6*u,g+m-6*u),a.stroke(),i+o+h+10*u}function Zx(a,e,i,r,o,c,u,h){const m=28*h,d=(r-o*2)/2,g=10*h;a.font=`700 ${g}px "DM Mono", ui-monospace, monospace`;for(let _=0;_<2;_++){const v=e+o+_*d,x=_===u;a.fillStyle=x?"rgba(255,255,255,0.92)":"rgba(255,255,255,0.38)",a.textAlign="center",a.fillText(c[_],v+d/2,i+14*h),x&&(a.fillStyle="#c8f5a8",a.fillRect(v+4*h,i+m-2*h,d-8*h,2*h))}return a.textAlign="left",a.strokeStyle="rgba(255,255,255,0.08)",a.lineWidth=1,a.beginPath(),a.moveTo(e+o,i+m),a.lineTo(e+r-o,i+m),a.stroke(),i+m+10*h}function uR(a,e,i,r,o,c,u,h,m){const d=10*m,g=22*m;a.fillStyle="rgba(255,255,255,0.92)",a.font=`700 ${d}px "DM Mono", ui-monospace, monospace`,a.textAlign="left",a.fillText(c,e+o,i+14*m);const _=`${String(u).padStart(2,"0")} / ${String(h).padStart(2,"0")}`;a.fillStyle="rgba(255,255,255,0.38)",a.font=`700 ${8*m}px "DM Mono", ui-monospace, monospace`,a.textAlign="right",a.fillText(_,e+r-o,i+14*m),a.textAlign="left",a.strokeStyle="rgba(255,255,255,0.08)",a.lineWidth=1,a.beginPath(),a.moveTo(e+o,i+g),a.lineTo(e+r-o,i+g),a.stroke(),a.fillStyle="#c8f5a8";const v=Math.min(72*m,r*.28);return a.fillRect(e+o,i+g-2*m,v,2*m),i+g+10*m}function fR(a,e,i,r,o,c,u){const h=9*u;a.fillStyle="rgba(255,255,255,0.38)",a.font=`700 ${h}px "DM Mono", ui-monospace, monospace`,a.textAlign="left",a.fillText(o,e,i+h);const m=i+h+6*u,d=34*u;fn(a,e,m,r,d,6*u,"rgba(255,255,255,0.04)"),Sn(a,e,m,r,d,6*u,"rgba(255,255,255,0.12)",1),a.fillStyle=c.startsWith("Select")||c==="0x..."?"rgba(255,255,255,0.35)":"rgba(255,255,255,0.88)",a.font=`500 ${11*u}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText(c,e+10*u,m+d*.62),a.strokeStyle="rgba(255,255,255,0.4)",a.lineWidth=Math.max(1,1.2*u);const g=e+r-14*u,_=m+d/2;return a.beginPath(),a.moveTo(g-4*u,_-2*u),a.lineTo(g,_+3*u),a.lineTo(g+4*u,_-2*u),a.stroke(),h+6*u+d}function dR(a,e,i,r,o){const c=9*o;a.fillStyle="rgba(255,255,255,0.38)",a.font=`700 ${c}px "DM Mono", ui-monospace, monospace`,a.textAlign="left",a.fillText("AMOUNT",e,i+c),a.textAlign="right",a.fillStyle="rgba(255,255,255,0.45)",a.fillText("AVAILABLE 5,000.00",e+r,i+c),a.textAlign="left";const u=i+c+6*o,h=44*o;fn(a,e,u,r,h,8*o,"#050508"),Sn(a,e,u,r,h,8*o,"rgba(255,255,255,0.1)",1),a.fillStyle="rgba(255,255,255,0.92)",a.font=`700 ${22*o}px "DM Mono", ui-monospace, monospace`,a.fillText("0.00",e+12*o,u+h*.68);const m=u+h+10*o;return a.strokeStyle="rgba(255,255,255,0.12)",a.lineWidth=Math.max(2,2*o),a.beginPath(),a.moveTo(e,m),a.lineTo(e+r,m),a.stroke(),fn(a,e,m-5*o,14*o,10*o,5*o,"rgba(255,255,255,0.85)"),a.fillStyle="rgba(255,255,255,0.35)",a.font=`500 ${8*o}px "DM Mono", ui-monospace, monospace`,a.fillText("0.01",e,m+14*o),a.textAlign="right",a.fillText("5,000.00",e+r,m+14*o),a.textAlign="left",c+6*o+h+10*o+16*o}function hR(a,e,i,r,o,c){a.strokeStyle="rgba(255,255,255,0.08)",a.lineWidth=1,a.beginPath(),a.moveTo(e,i),a.lineTo(e+r,i),a.stroke();const u=i+10*o,h=36*o,m=72*o;Sn(a,e,u,m,h,6*o,"rgba(255,255,255,0.14)",1),a.fillStyle="rgba(255,255,255,0.55)",a.font=`700 ${9*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText("CANCEL",e+m/2,u+h*.62);const d=e+m+8*o,g=r-m-8*o;return fn(a,d,u,g,h,6*o,"rgba(255,255,255,0.06)"),Sn(a,d,u,g,h,6*o,"rgba(255,255,255,0.1)",1),a.fillStyle="#c8f5a8",a.fillRect(d,u+4*o,3*o,h-8*o),a.fillStyle="rgba(255,255,255,0.55)",a.font=`700 ${8.5*o}px "DM Mono", ui-monospace, monospace`,a.fillText(c,d+g/2+2*o,u+h*.62),a.textAlign="left",10*o+h}function Gp(a,e,i,r,o){const c=44*o;fn(a,e,i,r,c,8*o,"rgba(200,245,168,0.08)"),Sn(a,e,i,r,c,8*o,"rgba(200,245,168,0.22)",1);const u=28*o;return fn(a,e+8*o,i+(c-u)/2,u,u,4*o,"rgba(200,245,168,0.14)"),a.fillStyle="#c8f5a8",a.font=`700 ${10*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText("SS",e+8*o+u/2,i+c*.58),a.textAlign="left",a.fillStyle="rgba(255,255,255,0.92)",a.font=`700 ${11*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText(es.name,e+8*o+u+8*o,i+16*o),a.fillStyle="rgba(255,255,255,0.42)",a.font=`500 ${9*o}px "DM Mono", ui-monospace, monospace`,a.fillText(`${es.role} · ${es.didShort}`,e+8*o+u+8*o,i+32*o),c}function pR(a,e,i,r,o){const c=Math.min(r*190/316,r*.58),u=12*o,h=8*o,m=a.createLinearGradient(e,i+c,e+r,i);m.addColorStop(0,"#050508"),m.addColorStop(1,"rgba(200,245,168,0.14)"),fn(a,e,i,r,c,h,m),Sn(a,e,i,r,c,h,"rgba(255,255,255,0.14)",Math.max(1,1.25*o)),Sn(a,e+2.5*o,i+2.5*o,r-5*o,c-5*o,h-1.5*o,"rgba(200,245,168,0.35)",Math.max(1,o)),a.fillStyle="rgba(255,255,255,0.92)",a.font=`700 ${11*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText(es.fleet,e+u,i+u+10*o),a.fillStyle="#c8f5a8",a.beginPath(),a.arc(e+r-u-7*o,i+u+5*o,6*o,0,Math.PI*2),a.fill(),a.fillStyle="#0a0a0c",a.font=`700 ${8*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText("✓",e+r-u-7*o,i+u+8*o),a.textAlign="left";const d=i+c-u-2*o;a.fillStyle="rgba(255,255,255,0.92)",a.font=`700 ${10*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText(es.name.toUpperCase(),e+u,d-24*o),a.fillStyle="rgba(255,255,255,0.45)",a.font=`500 ${9*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText(`${es.role} · ${es.version}`,e+u,d-10*o),a.fillStyle="#c8f5a8",a.font=`700 ${10*o}px "DM Mono", ui-monospace, monospace`,a.fillText(es.didShort,e+u,d);const g=28*o;return fn(a,e+r-u-g,i+c-u-g,g,g,4*o,"rgba(200,245,168,0.14)"),Sn(a,e+r-u-g,i+c-u-g,g,g,4*o,"rgba(200,245,168,0.28)",1),a.fillStyle="#c8f5a8",a.font=`700 ${11*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText("SS",e+r-u-g/2,i+c-u-g*.35),a.textAlign="left",c}function mR(a,e,i,r,o){const c=Math.min(r*190/316,r*.58),u=10*o,h=8*o,m=a.createLinearGradient(e,i,e+r,i+c);m.addColorStop(0,"#0a0c10"),m.addColorStop(.55,"#12161c"),m.addColorStop(1,"rgba(200,245,168,0.18)"),fn(a,e,i,r,c,h,m),Sn(a,e,i,r,c,h,"rgba(255,255,255,0.14)",Math.max(1,1.25*o)),a.fillStyle="rgba(255,255,255,0.92)",a.font=`700 ${10*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText("Morpheum.",e+u,i+u+10*o),a.strokeStyle="rgba(255,255,255,0.45)",a.lineWidth=Math.max(1,o);for(let d=0;d<3;d++){const g=5*o+d*3.5*o,_=4*o+d*2.5*o;a.beginPath(),a.ellipse(e+r-u-4*o,i+u+8*o,g,_,-.4,-.2,1.2),a.stroke()}return a.fillStyle="rgba(255,255,255,0.88)",a.font=`700 ${9*o}px "DM Mono", ui-monospace, monospace`,a.fillText("5678  ····  ····  7890",e+u,i+c*.52),a.fillStyle="rgba(255,255,255,0.92)",a.font=`700 ${8*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText(es.name.toUpperCase(),e+u,i+c-u-2*o),a.textAlign="right",a.fillStyle="rgba(255,255,255,0.55)",a.font=`700 ${8*o}px "DM Mono", ui-monospace, monospace`,a.fillText("12/28",e+r-u,i+c-u-2*o),a.textAlign="left",c}function gR(a,e,i,r,o,c=25){const u=9*o;a.fillStyle="rgba(255,255,255,0.38)",a.font=`700 ${u}px "DM Mono", ui-monospace, monospace`,a.textAlign="left",a.fillText("MIRROR SIZE",e,i+u),a.textAlign="right",a.fillStyle="#c8f5a8",a.fillText(`${c}%`,e+r,i+u),a.textAlign="left";const h=i+u+12*o,m=Math.max(4,5*o);fn(a,e,h,r,m,m/2,"rgba(255,255,255,0.1)");const d=Math.max(m,r*c/100);fn(a,e,h,d,m,m/2,"rgba(200,245,168,0.75)");const g=7*o;return a.fillStyle="#f4f6f0",a.beginPath(),a.arc(e+d,h+m/2,g,0,Math.PI*2),a.fill(),a.strokeStyle="rgba(200,245,168,0.55)",a.lineWidth=Math.max(1,o),a.stroke(),a.fillStyle="rgba(255,255,255,0.35)",a.font=`500 ${7.5*o}px "DM Mono", ui-monospace, monospace`,a.fillText("5%",e,h+m+14*o),a.textAlign="right",a.fillText("100%",e+r,h+m+14*o),a.textAlign="left",u+12*o+m+16*o}function _R(a,e,i,r,o){const c=9*o;a.fillStyle="rgba(255,255,255,0.38)",a.font=`700 ${c}px "DM Mono", ui-monospace, monospace`,a.fillText("AGENTIC PROTECTION",e,i+c);const u=5*o,h=(r-u*2)/3,m=52*o,d=i+c+8*o;return[{label:"Manual",tone:"rgba(255,255,255,0.12)",active:!1},{label:"Guarded",tone:"rgba(234,179,8,0.55)",active:!0},{label:"High",tone:"rgba(255,71,87,0.35)",active:!1}].forEach((_,v)=>{const x=e+v*(h+u);fn(a,x,d,h,m,6*o,"rgba(255,255,255,0.04)"),Sn(a,x,d,h,m,6*o,_.active?_.tone:"rgba(255,255,255,0.1)",_.active?Math.max(1.5,1.5*o):1),_.active&&(a.fillStyle="rgba(234,179,8,0.12)",a.fillRect(x+1,d+1,3*o,m-2)),a.fillStyle=_.active?"rgba(255,255,255,0.92)":"rgba(255,255,255,0.55)",a.font=`700 ${9*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.textAlign="center",a.fillText(_.label,x+h/2,d+18*o),a.fillStyle="rgba(255,255,255,0.38)",a.font=`400 ${7*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`;const b=_.label==="Guarded"?"safe default":_.label==="Manual"?"signals":"silent";a.fillText(b,x+h/2,d+34*o)}),a.textAlign="left",c+8*o+m}function vR(a,e,i,r,o,c="SLIDE TO START COPY"){const u=40*o;fn(a,e,i,r,u,8*o,"rgba(255,255,255,0.05)"),Sn(a,e,i,r,u,8*o,"rgba(255,255,255,0.12)",1);const h=.22,m=4*o,d=u-m*2,g=r-m*2-d;return fn(a,e+m,i+m,d+g*h,d,d/2,"rgba(200,245,168,0.18)"),fn(a,e+m,i+m,d,d,d/2,"rgba(200,245,168,0.85)"),a.fillStyle="#0a0a0c",a.font=`700 ${12*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText("›",e+m+d/2,i+u*.62),a.fillStyle="rgba(255,255,255,0.5)",a.font=`700 ${8*o}px "DM Mono", ui-monospace, monospace`,a.fillText(c,e+r/2+d*.15,i+u*.62),a.textAlign="left",u}const Nl=2,To={sharpe:"2.41",roi:"+38.2%",riskScore:"72",reputation:"84",receipts:[{action:"Close BTC long",pnl:"+103.09"},{action:"Open ETH long",pnl:null},{action:"Close SOL short",pnl:"+41.20"}]};function Bv(a,e,i,r,o,c){const u=6*c,h=o.length,m=(r-u*(h-1))/h,d=36*c;return o.forEach(([g,_],v)=>{const x=e+v*(m+u);fn(a,x,i,m,d,6*c,"rgba(255,255,255,0.04)"),Sn(a,x,i,m,d,6*c,"rgba(255,255,255,0.1)",1),a.fillStyle="rgba(255,255,255,0.4)",a.font=`700 ${7*c}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText(g,x+m/2,i+12*c),a.fillStyle="#c8f5a8",a.font=`700 ${11*c}px "DM Mono", ui-monospace, monospace`,a.fillText(_,x+m/2,i+26*c)}),a.textAlign="left",d}function xR(a,e,i,r,o){const c=[{label:"Verified",brand:!0},{label:"Receipt"},{label:"Risk",value:To.riskScore},{label:"Rep",value:To.reputation}],u=4*o,h=22*o,m=5*o;let d=e;a.font=`700 ${6.5*o}px "DM Mono", ui-monospace, monospace`;for(const g of c){const _=a.measureText(g.label.toUpperCase()).width,v=g.value?a.measureText(g.value).width+3*o:0,x=m*2+6*o+_+v;if(d+x>e+r)break;const b=g.brand?"rgba(200,245,168,0.12)":"rgba(255,255,255,0.04)",w=g.brand?"rgba(200,245,168,0.35)":"rgba(255,255,255,0.12)";fn(a,d,i,x,h,4*o,b),Sn(a,d,i,x,h,4*o,w,1);const y=2*o;a.beginPath(),a.arc(d+m+y,i+h/2,y,0,Math.PI*2),a.fillStyle=g.brand?"#c8f5a8":"rgba(255,255,255,0.35)",a.fill();let M=d+m+y*2+4*o;a.fillStyle=g.brand?"#c8f5a8":"rgba(255,255,255,0.55)",a.textAlign="left",a.fillText(g.label.toUpperCase(),M,i+h*.68),M+=_+3*o,g.value&&(a.fillStyle="rgba(255,255,255,0.92)",a.fillText(g.value,M,i+h*.68)),d+=x+u}return a.textAlign="left",h}function SR(a,e,i,r,o){const c=To.receipts,u=22*o,h=14*o+c.length*u;return fn(a,e,i,r,h,6*o,"rgba(255,255,255,0.03)"),Sn(a,e,i,r,h,6*o,"rgba(255,255,255,0.08)",1),a.fillStyle="rgba(255,255,255,0.4)",a.font=`700 ${6.5*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="left",a.fillText("RECEIPTS",e+8*o,i+10*o),c.forEach((m,d)=>{const g=i+14*o+d*u;a.fillStyle="rgba(255,255,255,0.72)",a.font=`500 ${8*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="left",a.fillText(m.action,e+8*o,g+u*.62),a.textAlign="right",m.pnl?(a.fillStyle="#c8f5a8",a.font=`700 ${8*o}px "DM Mono", ui-monospace, monospace`,a.fillText(m.pnl,e+r-8*o,g+u*.62)):(a.fillStyle="rgba(255,255,255,0.35)",a.fillText("—",e+r-8*o,g+u*.62))}),a.textAlign="left",h}function MR(a,e,i,r,o){const c=Math.min(r*150/316,r*.48),u=12*o,h=8*o,m=a.createLinearGradient(e,i+c,e+r,i);m.addColorStop(0,"#050508"),m.addColorStop(1,"rgba(200,245,168,0.14)"),fn(a,e,i,r,c,h,m),Sn(a,e,i,r,c,h,"rgba(255,255,255,0.14)",Math.max(1,1.25*o)),Sn(a,e+2.5*o,i+2.5*o,r-5*o,c-5*o,h-1.5*o,"rgba(200,245,168,0.35)",Math.max(1,o)),a.fillStyle="rgba(255,255,255,0.92)",a.font=`700 ${11*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText("MAEX",e+u,i+u+10*o);const d=40*o,g=16*o,_=e+r-u-d,v=i+u-1*o;return fn(a,_,v,d,g,8*o,"rgba(200,245,168,0.14)"),Sn(a,_,v,d,g,8*o,"rgba(200,245,168,0.28)",1),a.fillStyle="#c8f5a8",a.font=`700 ${8*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText("LIVE",_+d/2,v+11*o),a.textAlign="left",a.fillStyle="rgba(255,255,255,0.92)",a.font=`700 ${14*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText("MAEX Core",e+u,i+u+36*o),a.fillStyle="rgba(255,255,255,0.45)",a.font=`500 ${9*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText("Curated agent basket · 4 agents",e+u,i+u+52*o),a.fillStyle="#c8f5a8",a.font=`700 ${18*o}px "DM Mono", ui-monospace, monospace`,a.fillText("+12.8%",e+u,i+c-u-4*o),a.fillStyle="rgba(255,255,255,0.4)",a.font=`700 ${8*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="right",a.fillText("30D RETURN",e+r-u,i+c-u-8*o),a.textAlign="left",c}function yR(a,e,i,r,o){const c=[["SharpeShark","42%","+38%"],["SortinoSloth","33%","+21%"],["FundingFox","25%","−4%"]],u=26*o,h=c.length*u;return fn(a,e,i,r,h,6*o,"rgba(255,255,255,0.03)"),Sn(a,e,i,r,h,6*o,"rgba(255,255,255,0.08)",1),c.forEach(([m,d,g],_)=>{const v=i+_*u;_>0&&(a.strokeStyle="rgba(255,255,255,0.06)",a.lineWidth=1,a.beginPath(),a.moveTo(e+8*o,v),a.lineTo(e+r-8*o,v),a.stroke()),a.fillStyle="rgba(255,255,255,0.85)",a.font=`600 ${9*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.textAlign="left",a.fillText(m,e+10*o,v+u*.62),a.fillStyle="rgba(255,255,255,0.4)",a.font=`700 ${8*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText(d,e+r*.58,v+u*.62);const x=!g.startsWith("−")&&!g.startsWith("-");a.fillStyle=x?"#c8f5a8":"rgba(255,120,120,0.85)",a.textAlign="right",a.fillText(g,e+r-10*o,v+u*.62)}),a.textAlign="left",h}function ER(a,e,i,r,o,c=0){const u=r/300,h=12*u,m=10*u,d=(c%Nl+Nl)%Nl,g=[{header:"AGENT PROOF",segment:"AGENTS"},{header:"INDEX PROOF",segment:"INDICES"}][d];Hu(a,e,i,r,o,m);let _=Gu(a,e,i,r,h,g.header,u);_=uR(a,e,_,r,h,g.segment,d+1,Nl,u);const v=i+o-h;if(d===0){_+=Gp(a,e+h,_,r-h*2,u)+8*u,_+22*u<=v&&(_+=xR(a,e+h,_,r-h*2,u)+8*u);const b=[["SHARPE",To.sharpe],["ROI",To.roi],["RISK",To.riskScore]];_+36*u<=v&&(_+=Bv(a,e+h,_,r-h*2,b,u)+8*u),_+70*u<=v&&SR(a,e+h,_,r-h*2,u);return}_+=MR(a,e+h,_,r-h*2,u)+8*u,_+78*u<=v&&(_+=yR(a,e+h,_,r-h*2,u)+8*u);const x=[["RETURN","+12.8%"],["RISK","58"],["AGENTS","4"]];_+36*u<=v&&Bv(a,e+h,_,r-h*2,x,u)}function bR(a,e,i,r,o,c=0){const u=r/300,h=12*u,m=10*u;Hu(a,e,i,r,o,m);let d=Gu(a,e,i,r,h,"COPY TRADE",u);d=Zx(a,e,d,r,h,["MIRROR","BUCKET"],0,u);const g=40*u,_=i+o-h-g,v=_-10*u;if(c%2===0){const b=6*u,w=r-h*2;let y=(w-b)/2,M=Math.min(y*190/316,y*.58);const I=Math.max(64*u,v-d-28*u);M>I&&(y=y*(I/M),M=I);const B=u*(y/((w-b)/2)),C=e+h+(w-(y*2+b))/2;mR(a,C,d,y,B),pR(a,C+y+b,d,y,B),d+=M+10*u;const O=[["SPREAD","0.02%"],["FUNDING","8h"],["SIZE","25%"]],L=5*u,F=(r-h*2-L*2)/3,T=32*u;d+T<=v&&(O.forEach(([N,Z],k)=>{const j=e+h+k*(F+L);fn(a,j,d,F,T,6*u,"rgba(255,255,255,0.04)"),Sn(a,j,d,F,T,6*u,"rgba(255,255,255,0.1)",1),a.fillStyle="rgba(255,255,255,0.4)",a.font=`700 ${6.5*u}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText(N,j+F/2,d+11*u),a.fillStyle="#c8f5a8",a.font=`700 ${10*u}px "DM Mono", ui-monospace, monospace`,a.fillText(Z,j+F/2,d+24*u)}),a.textAlign="left")}else d+=Gp(a,e+h,d,r-h*2,u)+10*u,d+36*u<v&&(d+=gR(a,e+h,d,r-h*2,u,25)+10*u),d+50*u<v&&_R(a,e+h,d,r-h*2,u);vR(a,e+h,_,r-h*2,u)}const TR=2,AR=[{agent:"SharpeShark",timeLabel:"07-08, 15:42",status:"want-to",statusLabel:"Want to",action:"Open ETH long · 1.2 ETH",showActions:!0},{agent:"NightOwl",timeLabel:"07-08, 15:31",status:"rejected",statusLabel:"Rejected",action:"Open BTC short · 0.04 BTC"},{agent:"SharpeShark",timeLabel:"07-08, 15:25",status:"short",statusLabel:"Close Long",action:"BTCUSDT · 0.04 BTC",pnl:{text:"+103.09",tone:"long"}},{agent:"FluxRunner",timeLabel:"07-08, 14:10",status:"long",statusLabel:"Open Long",action:"ETHUSDT · 0.8 ETH"},{agent:"NightOwl",timeLabel:"07-07, 09:42",status:"short",statusLabel:"Open Short",action:"SOLUSDT · 12 SOL"}];function RR(a){switch(a){case"want-to":return{fg:"rgba(200,245,168,0.95)",bg:"rgba(184,245,168,0.12)"};case"rejected":return{fg:"#ff4757",bg:"rgba(255,71,87,0.12)"};case"long":return{fg:"#00ff88",bg:"rgba(0,255,136,0.12)"};case"short":return{fg:"#ff4757",bg:"rgba(255,71,87,0.12)"}}}function CR(a,e,i,r,o){const c=r/300,u=12*c,h=10*c;Hu(a,e,i,r,o,h);let m=Gu(a,e,i,r,u,"ACTIVITY LOG",c);const d=i+o-u,g=58*c,_=10*c,v=6*c,x=e+u+g+v+_+v,b=e+r-u-x,w=e+u+g+v+_/2,y=AR,M=4*c;y.forEach((I,B)=>{if(m>=d-8*c)return;const C=B===0,O=B===y.length-1,L=RR(I.status),F=8*c,T=6*c,N=7*c,Z=8*c,k=I.showActions?22*c:0,j=I.showActions?5*c:0,ce=Math.max(F+2*c+T,N+4*c+Z)+j+k+M;if(m+Math.min(ce,28*c)>d)return;a.textAlign="right",a.fillStyle="rgba(255,255,255,0.88)",a.font=`500 ${F}px "DM Mono", ui-monospace, monospace`,a.fillText(I.agent,e+u+g,m+F),a.fillStyle="rgba(255,255,255,0.38)",a.font=`500 ${T}px "DM Mono", ui-monospace, monospace`,a.fillText(I.timeLabel,e+u+g,m+F+2*c+T),a.textAlign="left",O||(a.strokeStyle="rgba(255,255,255,0.14)",a.lineWidth=Math.max(1,c),a.beginPath(),a.moveTo(w,m+6*c),a.lineTo(w,m+ce),a.stroke());const X=2.4*c;a.beginPath(),a.arc(w,m+5*c,X,0,Math.PI*2),a.fillStyle=C?"#c8f5a8":"rgba(255,255,255,0.32)",a.fill(),C&&(a.beginPath(),a.arc(w,m+5*c,X+2.2*c,0,Math.PI*2),a.fillStyle="rgba(200,245,168,0.16)",a.fill());const z=4*c,H=2*c;a.font=`700 ${N}px "DM Mono", ui-monospace, monospace`;const Q=I.statusLabel.toUpperCase(),fe=a.measureText(Q).width+z*2,xe=N+H*2;fn(a,x,m,fe,xe,3*c,L.bg),a.fillStyle=L.fg,a.fillText(Q,x+z,m+N+H*.35),a.fillStyle="rgba(255,255,255,0.55)",a.font=`400 ${Z}px "DM Mono", ui-monospace, monospace`;const U=m+xe+3*c+Z;let W=I.action;if(I.pnl){const ye=`${I.action} · `;a.fillText(ye,x,U);const Ce=a.measureText(ye).width;a.fillStyle=I.pnl.tone==="long"?"#00ff88":"#ff4757",a.font=`700 ${Z}px "DM Mono", ui-monospace, monospace`,a.fillText(I.pnl.text,x+Ce,U)}else{for(;W.length>8&&a.measureText(W).width>b;)W=`${W.slice(0,-2)}…`;a.fillText(W,x,U)}if(I.showActions&&m+xe+3*c+Z+j+k<=d){const ye=m+xe+3*c+Z+j,Ce=(b-5*c)/2;Sn(a,x,ye,Ce,k,3*c,"rgba(255,255,255,0.18)",1),a.fillStyle="rgba(255,255,255,0.72)",a.font=`700 ${7*c}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText("REJECT",x+Ce/2,ye+k*.68),fn(a,x+Ce+5*c,ye,Ce,k,3*c,"rgba(184,245,168,0.88)"),a.fillStyle="rgba(8,14,10,0.92)",a.fillText("APPROVE",x+Ce+5*c+Ce/2,ye+k*.68),a.textAlign="left"}m+=ce})}function wR(a,e,i,r,o){const c=r/300,u=12*c,h=10*c;Hu(a,e,i,r,o,h);let m=Gu(a,e,i,r,u,"FUND BUCKET",c);m=Zx(a,e,m,r,u,["FUND BUCKET","CREATE BUCKET"],0,c),m+=Gp(a,e+u,m,r-u*2,c)+8*c,m+=fR(a,e+u,m,r-u*2,"FROM","Select source bucket",c)+8*c;const d=10*c+36*c;i+o-u-d-m-8*c>70*c&&(m+=dR(a,e+u,m,r-u*2,c)+6*c),hR(a,e+u,i+o-u-d,r-u*2,c,"COMPLETE REQUIRED FIELDS")}function Kx(a,e,i,r,o,c,u=0){switch(e){case"discover":ER(a,i,r,o,c,u);break;case"copy":bR(a,i,r,o,c,u);break;case"supervise":CR(a,i,r,o,c);break;case"isolate":wR(a,i,r,o,c);break}}function DR(a,e,i,r,o=0){a.clearRect(0,0,i,r),Kx(a,e,0,0,i,r,o)}function LR(a,e,i,r,o){const{W:c,H:u}=cR(i,r),h=document.createElement("canvas");h.width=c,h.height=u;const m=h.getContext("2d"),d=m.createLinearGradient(0,0,0,u);d.addColorStop(0,"rgba(8, 10, 14, 0.8)"),d.addColorStop(.55,"rgba(5, 7, 13, 0.8)"),d.addColorStop(1,"rgba(3, 4, 6, 0.8)"),m.fillStyle=d,m.fillRect(0,0,c,u);const g=Math.round(22*i),_=Math.round(.05*u),v=Math.round(.045*u),x=c-g*2;let b=_;const w=Math.min(34*i,c*.095);m.fillStyle="rgba(255,255,255,0.94)",m.font=`normal 400 ${w}px ${o}`,m.textBaseline="alphabetic",m.fillText(a.verb,g,b+w*.85),b+=Math.round(.09*u);const y=Math.min(13*i,c*.036);m.fillStyle="rgba(255,255,255,0.55)",m.font=`400 ${y}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`;const M=lR(m,a.description,x);m.fillText(M[0]??a.description,g,b+y),b+=Math.round(.07*u),b+=Math.round(.03*u);const I=g,B=b,C=x,O=Math.max(80*i,u-b-v);Kx(m,oR(e),I,B,C,O);const L=new Ox(h);return L.colorSpace=ni,L.minFilter=zs,L.generateMipmaps=!0,L}const Tp=["M41.9213 3.43614C43.0393 3.43614 43.8716 3.77154 44.4182 4.44235C44.9647 5.138 45.1262 6.1939 44.9026 7.61005L41.884 26.8026C41.7846 27.4982 41.8467 28.0075 42.0703 28.3305C42.2691 28.6784 42.6542 28.8771 43.2256 28.9268L43.8591 28.9641L43.8219 29.2622L36.7784 30.492L36.4803 30.492L40.1324 7.46098C40.3064 6.26843 40.0206 5.67216 39.2753 5.67216C38.9523 5.67216 38.6045 5.75912 38.2318 5.93303C37.8343 6.10694 37.3995 6.44235 36.9275 6.93924L36.7411 6.79017C38.0828 4.55415 39.8095 3.43614 41.9213 3.43614Z","M29.9958 3.43614C31.1138 3.43614 31.9461 3.77154 32.4927 4.44235C33.0393 5.138 33.2007 6.1939 32.9771 7.61005L29.9585 26.8026C29.8591 27.4982 29.9212 28.0075 30.1449 28.3305C30.3436 28.6784 30.7287 28.8771 31.3001 28.9268L31.9337 28.9641L31.8964 29.2622L24.8529 30.492L24.5548 30.492L28.207 7.46098C28.3809 6.26843 28.0952 5.67216 27.3498 5.67216C27.0268 5.67216 26.679 5.75912 26.3063 5.93303C25.9088 6.10694 25.474 6.44235 25.002 6.93924L24.8157 6.79017C26.1573 4.55415 27.884 3.43614 29.9958 3.43614Z","M18.0703 3.43614C19.1883 3.43614 20.0206 3.77154 20.5672 4.44235C21.1138 5.138 21.2753 6.1939 21.0517 7.61005L18.033 26.8026C17.9337 27.4982 17.9958 28.0075 18.2194 28.3305C18.4181 28.6784 18.8032 28.8771 19.3747 28.9268L20.0082 28.9641L19.9709 29.2622L12.9275 30.492L12.6293 30.492L16.2815 7.46098C16.4554 6.26843 16.1697 5.67216 15.4243 5.67216C15.1014 5.67216 14.7535 5.75912 14.3809 5.93303C13.9834 6.10694 13.5486 6.44235 13.0765 6.93924L12.8902 6.79017C14.2318 4.55415 15.9585 3.43614 18.0703 3.43614Z","M45.5631 10.8482C46.0378 11.9189 46.0912 12.9315 45.7231 13.8861C45.3095 14.8231 44.3453 15.4956 42.8305 15.9035L16.576 22.853C15.2325 23.2226 14.7771 24.0651 15.2096 25.3806L15.7698 26.7714L13.8491 27.2839L9.924 22.1284L9.25377 20.6168L40.8242 12.2711C41.6674 12.048 42.2133 11.7494 42.4619 11.3754C42.6651 10.9838 42.669 10.5676 42.4735 10.1267C42.3199 9.78031 42.1016 9.5003 41.8185 9.2867C41.4899 9.05556 41.0511 8.87329 40.5021 8.7399L41.5734 7.5866C42.563 7.86379 43.3915 8.28774 44.0591 8.85845C44.7127 9.39767 45.214 10.0609 45.5631 10.8482Z"],NR="0 0 58 35",UR=58,OR=35;function PR({fill:a="#C8F5A8",width:e=58,height:i=35,padding:r=10,"aria-hidden":o=!0,...c}){const u=[-r,-r,UR+r*2,OR+r*2].join(" ");return D.jsx("svg",{width:e,height:i,viewBox:u,fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":o,...c,children:Tp.map(h=>D.jsx("path",{d:h,fill:a},h.slice(0,24)))})}const IR={sm:{width:30,height:18},md:{width:30,height:18},lg:{width:44,height:27},hero:{width:76,height:46}};function Vp({size:a="md",showWordmark:e=!0,className:i="",brandName:r="Morpheum"}){const o=IR[a];return D.jsxs("span",{className:`brand-mark brand-mark--${a} ${i}`.trim(),children:[D.jsx(PR,{className:"brand-mark__icon",width:o.width,height:o.height,padding:0,fill:"var(--terminal-brand)"}),e?D.jsx("span",{className:"brand-mark__word",children:r}):null]})}const zv="!@#$%^&*()_+{}[]|;:,.<>?/0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",FR=50,Tu=500,Ch=100,Hv=168;function BR(){return typeof window>"u"?!1:window.matchMedia("(prefers-reduced-motion: reduce)").matches}function zR(){return zv[Math.floor(Math.random()*zv.length)]??"?"}function Gv(a){return Array.from(a).map(e=>{const i=Math.random()*(Tu-Ch),r=Ch+Math.random()*(Tu-i-Ch),o=Math.min(Tu,i+r);return{original:e,start:i,end:o}})}function HR(a){return Math.min(1,Math.max(0,a))}function GR({text:a,className:e,scrollerRef:i}){const r=We.useRef(null),o=We.useRef(Gv(a)),c=BR();return We.useEffect(()=>{o.current=Gv(a)},[a]),We.useEffect(()=>{if(c)return;const u=r.current;if(!u)return;let h=0,m=!0,d=-1;const g=()=>{const v=i.current;if(!v)return;const x=Math.max(0,-v.getBoundingClientRect().top),b=Math.min(Tu,Math.max(0,x-FR));if(b===d&&d>=0)return;d=b;const w=o.current,y=u.querySelectorAll(".scroll-dissolve__glyph");let M=w.length>0;for(let I=0;I<w.length;I++){const B=w[I],C=y[I];if(!C)continue;const O=Math.max(.001,B.end-B.start),L=HR((b-B.start)/O);if(L<1&&(M=!1),L<=0){C.textContent=B.original===" "?" ":B.original,C.style.transform="translateY(0)",C.style.opacity="1",C.style.visibility="visible";continue}if(L>=1){C.textContent=B.original===" "?" ":B.original,C.style.transform=`translateY(${-Hv}px)`,C.style.opacity="0",C.style.visibility="hidden";continue}C.textContent=zR(),C.style.transform=`translateY(${-L*Hv}px)`,C.style.opacity=String(1-L),C.style.visibility="visible"}u.style.visibility=M?"hidden":"visible",u.style.display=M?"none":"block"},_=()=>{m&&(g(),h=requestAnimationFrame(_))};return h=requestAnimationFrame(_),()=>{m=!1,cancelAnimationFrame(h)}},[c,i,a]),c?D.jsx("p",{className:e,"aria-label":a,children:a}):D.jsx("p",{ref:r,className:["scroll-dissolve",e].filter(Boolean).join(" "),"aria-label":a,children:Array.from(a).map((u,h)=>D.jsx("span",{className:"scroll-dissolve__glyph","aria-hidden":!0,children:u===" "?" ":u},`${h}-${u}`))})}const VR="Enter the agentic economy →",Ul=Oh.verbs.map((a,e)=>{const i=[{top:"#c8f5a8",mid:"#0a1410",bot:"#1a3d2e"},{top:"#9ee089",mid:"#060e18",bot:"#1e3a52"},{top:"#f0e6a0",mid:"#0c1008",bot:"#2a3820"},{top:"#7fd9a8",mid:"#080810",bot:"#243048"}];return{verb:a.verb,description:a.description,mood:i[e]??i[0]}}),hn=Ul.length,$a=2.95,Il=6.9,Uu=32,Qx=4,Jx=5,Ap=2.05,kR=1,XR=$a*.55,$x=.28,eS=.35,WR=$x+eS,wh=.85,Vv=300,qR=35,kv=qR/60*1e3,YR=.1;function tS(a){return a<520?{mode:"mobile",canvasW:1280,canvasH:320,fontPx:112,planeBaseW:4.55,frustumFill:.9}:a<900?{mode:"tablet",canvasW:1600,canvasH:360,fontPx:132,planeBaseW:5.25,frustumFill:.94}:{mode:"desktop",canvasW:1920,canvasH:420,fontPx:152,planeBaseW:6.1,frustumFill:.96}}const jR=1.35,ZR=.72,KR=.62,QR=.2,JR=14,$R=.42,e3=128,t3=12,n3=.002,i3=.0011,Xv=.12,a3=.88,nS=4,s3=32,r3=40,o3=nS-1,Wv=50,l3=-10,qv=28,c3="/Morm_IntroAnimation_1.mp4",u3=10,iS=[0,2,4,6,8,10],f3=[{in:2,out:2.2},{in:1.5,out:2.4},{in:2.3,out:1.7},{in:1.8,out:2.1},{in:2.1,out:2.6}];function d3(a,e){const i=f3[a]??{in:2,out:2},r=Gt.clamp(e,0,1);return r<.5?.5*Math.pow(2*r,i.in):1-.5*Math.pow(2*(1-r),i.out)}function h3(a,e,i,r,o){const c=Math.max(1,hn-1),u=[0,e,e+1/c*i,e+2/c*i,r,Math.max(r+.001,o)],h=iS,m=u.length-1;if(a<=u[0])return h[0];if(a>=u[m])return h[m];let d=0;for(;d<m-1&&a>=u[d+1];)d+=1;const g=u[d],_=u[d+1],v=_>g?Gt.clamp((a-g)/(_-g),0,1):1;return Gt.lerp(h[d],h[d+1],d3(d,v))}function Yv(a,e){const i=Number.isFinite(a.duration)&&a.duration>0?a.duration:u3,r=Gt.clamp(e,0,Math.max(0,i-.04));if(!(Math.abs(a.currentTime-r)<1/48))try{a.currentTime=r}catch{}}const p3=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,m3=`
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
`,g3=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,_3=`
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
`,v3='"Reckk Heading", Georgia, "Times New Roman", serif',aS="Morpheum Wordmark",Hl=`"${aS}"`,x3=[{t:0,c:"#e8ffe0"},{t:.45,c:"#c8f5a8"},{t:1,c:"#f0e6a0"}];async function S3(){if(typeof document>"u"||!document.fonts)return!1;try{const a=new FontFace(aS,`url(${aR})`,{weight:"normal",style:"normal"});document.fonts.add(await a.load()),await document.fonts.load(`normal 152px ${Hl}`);const e=document.fonts.check(`normal 152px ${Hl}`);return e||console.error("[FlowIntro] Morpheum Wordmark failed to bind — title will not use Reckk fallback"),e}catch(a){return console.error("[FlowIntro] Morpheum Wordmark load failed",a),!1}}async function M3(){if(!(typeof document>"u"||!document.fonts))try{await S3();const a=new FontFace("Reckk Title",`url(${iR})`,{weight:"normal",style:"normal"});document.fonts.add(await a.load());const e=new FontFace("Reckk Heading",`url(${nR})`,{weight:"normal",style:"normal"});document.fonts.add(await e.load()),await document.fonts.ready,await document.fonts.load(`normal 152px ${Hl}`),await document.fonts.load('normal 64px "Reckk Heading"'),await document.fonts.load('normal 124px "Reckk Title"')}catch{}}const pr="flow-intro-hide-chrome",y3=72,E3=120,Dh=80;function b3(a){return a<=y3}const T3=280;function gr(a){const e=document.documentElement,i=e.style.scrollBehavior;e.style.scrollBehavior="auto",window.scrollTo(0,Math.max(0,a)),e.style.scrollBehavior=i}function Lh(){const a=document.getElementById("hero");if(!a)return;const e=a.getBoundingClientRect().top+window.scrollY;gr(e)}function xr(a){const e=Gt.clamp(a,0,1);return e*e*e*(e*(e*6-15)+10)}function Mo(a){const e=Math.max(1,a),i=Math.max(1,hn*e*kR),r=Math.max(1,i/Math.max(1,hn-1));return{cardPx:i,titlePx:r,totalPx:i+r}}const A3=900,R3=1100,C3=1300,w3=1500,D3=6,L3=36,N3=50,U3=.5,O3=1024,P3=.75;function kp(a){return a>=O3}function I3(a){return kp(a)?A3:R3}function F3(a){return kp(a)?C3:w3}function sS(a){return Math.max(2,Math.max(1,a)*.004)}function B3(a,e){const{cardPx:i,titlePx:r}=Mo(e),o=Math.max(1,hn-1),c=Gt.clamp(Math.round(a),0,hn-1);return r+c/o*i}function z3(a){return a.offsetTop}function H3(a,e,i){return a.offsetTop+B3(e,i)}function Nh(){const a=document.getElementById("hero");return a?a.getBoundingClientRect().top+window.scrollY:null}function G3(a){const e=hn-1;return Gt.clamp(Math.round(a),0,e)}function Uh(a,e,i,r){const o=sS(r);return a<e-o?{kind:"title"}:{kind:"card",idx:G3(i)}}function V3(a,e,i,r,o,c,u){if(o)return!1;const h=i/Math.max(1,hn-1),m=r+h*U3;return!(a>m||c<u*.5)}function Xp(a,e){const i=a/Math.max(1,e),r=Uu*Math.PI/180,o=2*Il*Math.tan(r/2),c=o*i,u=Ap*Qx/Jx,h=.992,m=h*o/Ap,d=h*c/u;return Gt.clamp(Math.min(m,d),.52,2.35)}function k3(a,e){const i=Xp(a,e);return kp(a)?i*P3:i}function jv(a,e,i){const r=tS(a),o=Xp(a,e),c=a/Math.max(1,e),u=Uu*Math.PI/180,m=2*Il*Math.tan(u/2)*c,d=r.frustumFill*m/Math.max(1e-6,o),g=Math.min(r.planeBaseW,d);return{w:g,h:g*i}}function X3(a,e){const i=a/Math.max(1,hn-1),r=Math.min(Math.max(1,e*.38),Math.max(1,i*.34));return i<=r+.001?0:1-r/i}function W3(a,e){const i=Math.min(Math.max(1,e*.38),Math.max(1,a*.34));return a<=i+.001?0:1-i/a}function q3(a,e){const i=Gt.clamp(e,0,.999);if(a<i)return{titleOp:1,lastCardOp:0};const r=Math.max(1e-6,1-i),o=xr(Gt.clamp((a-i)/r,0,1));return{titleOp:1-o,lastCardOp:o}}function Y3(a,e,i,r=0){const o=hn-1;if(a<=0)return{opacity:e===0?1:0};if(a>=o-1e-5)return{opacity:e===o?1:0};const c=Math.floor(a);if(c>=o)return{opacity:e===o?1:0};if(e!==c&&e!==c+1)return{opacity:0};const u=a-c,h=Gt.clamp(i,0,.999);if(u<h)return{opacity:e===c?1:0};const m=xr(Gt.clamp((u-h)/Math.max(1e-6,1-h),0,1));return e===c?{opacity:r>=.999?0:1}:{opacity:Math.max(m,r)}}function j3(a){return new Xi({uniforms:{uMap:{value:a},uOpacity:{value:1},uWipe:{value:0},uWipeEdge:{value:YR}},vertexShader:g3,fragmentShader:_3,transparent:!0,depthWrite:!0,depthTest:!0,side:is})}function Z3(a,e){return a>1.5&&a<e-.5}function K3(a){return Gt.clamp(540/Math.max(a,340),.2,.55)}function Q3(a,e,i){const r=[],o=JR;for(let c=0;c<o;c++){const u=Gt.clamp(a-c/Math.max(1,o-1)*$R,-.08,1.08),h=Math.sin(u*Math.PI*2*jR)*KR*i,m=Math.sin(u*Math.PI*2*ZR)*QR,d=Xv+c/Math.max(1,o-1)*(a3-Xv),g=e-d;r.push(new ae(h,m,g))}return r}function J3(a,e,i,r){const o=a.length;if(o<2)return new ki;const c=[],u=[],h=[],m=[],d=new ae,g=new ae,_=new ae,v=new ae(0,1,0),x=e+1;for(let w=0;w<o;w++){w===0?d.subVectors(a[1],a[0]).normalize():w===o-1?d.subVectors(a[o-1],a[o-2]).normalize():d.subVectors(a[w+1],a[w-1]).normalize(),g.copy(v).cross(d),g.lengthSq()<1e-8&&g.set(1,0,0).cross(d),g.normalize(),_.crossVectors(d,g).normalize();const y=o===1?0:w/(o-1),M=i+(r-i)*Math.pow(y,1.5);for(let I=0;I<=e;I++){const B=I/e*Math.PI*2,C=Math.cos(B),O=Math.sin(B),L=a[w];c.push(L.x+(C*g.x+O*_.x)*M,L.y+(C*g.y+O*_.y)*M,L.z+(C*g.z+O*_.z)*M),u.push(C*g.x+O*_.x,C*g.y+O*_.y,C*g.z+O*_.z),h.push(o===1?0:w/(o-1),I/e)}}for(let w=0;w<o-1;w++)for(let y=0;y<e;y++){const M=w*x+y,I=M+1,B=M+x,C=B+1;m.push(M,B,I,I,B,C)}const b=new ki;return b.setAttribute("position",new Vi(c,3)),b.setAttribute("normal",new Vi(u,3)),b.setAttribute("uv",new Vi(h,2)),b.setIndex(m),b.computeBoundingSphere(),b}function Zv(a,e,i,r){const o={verb:a.verb,description:a.description};return LR(o,e,i,r,v3)}function Kv(a,e){const i=tS(e),r=Math.min(a*2.35,3.25),o=Math.round(i.canvasW*r),c=Math.round(i.canvasH*r),u=document.createElement("canvas");u.width=o,u.height=c;const h=u.getContext("2d");h.clearRect(0,0,o,c);const m="Morpheum";let d=i.fontPx;h.textAlign="left",h.textBaseline="alphabetic";const g=()=>{h.font=`normal ${d*r}px ${Hl}`};g();const _=O=>{h.font=`normal ${O*r}px ${Hl}`;const L=h.measureText(m),F=Math.abs(L.actualBoundingBoxLeft??0),T=Math.abs(L.actualBoundingBoxRight??L.width),N=Math.abs(L.actualBoundingBoxAscent??O*r*.8),Z=Math.abs(L.actualBoundingBoxDescent??O*r*.25);return{left:F,right:T,width:F+T,ascent:N,descent:Z}},v=Math.max(1.25,1.85*r)*2,x=64*r+v,b=40*r+v,w=O=>{const L=_(O);return L.width+x*2<=o&&L.ascent+L.descent+b*2<=c};for(;!w(d)&&d>64;)d-=2;for(;w(d+2)&&d<i.fontPx+24;)d+=2;g();const y=_(d),M=(o-y.width)/2+y.left,I=c/2+(y.ascent-y.descent)/2,B=h.createLinearGradient(M-y.left,I-y.ascent,M+y.right,I+y.descent);x3.forEach(O=>B.addColorStop(O.t,O.c)),h.lineJoin="round",h.miterLimit=2,h.lineWidth=Math.max(1.25,1.85*r),h.strokeStyle="rgba(8,12,10,0.22)",h.strokeText(m,M,I),h.fillStyle=B,h.fillText(m,M,I);const C=new Ox(u);return C.colorSpace=ni,C.minFilter=pn,C.magFilter=pn,C.generateMipmaps=!1,C}function Qv(a,e){a.generateMipmaps=!1,a.minFilter=pn,a.magFilter=pn,a.wrapS=ia,a.wrapT=ia;const i=e.capabilities.getMaxAnisotropy();a.anisotropy=Math.min(16,i),a.needsUpdate=!0}function $3(){const a=We.useRef(null),e=We.useRef(null),i=We.useRef(null),r=We.useRef(null),o=We.useRef(null),c=We.useRef(!1),u=We.useRef(!1),h=We.useRef(null),m=We.useCallback(()=>{var g;if(c.current)return;c.current=!0,u.current=!1,(g=h.current)==null||g.call(h);const d=e.current;d==null||d.classList.add("flow-intro__sticky--exit"),window.setTimeout(()=>{document.body.classList.remove(pr),Lh(),requestAnimationFrame(()=>{Lh(),requestAnimationFrame(()=>{Lh(),window.setTimeout(()=>{c.current=!1},100)})})},T3)},[]);return We.useLayoutEffect(()=>{const d=window.matchMedia("(prefers-reduced-motion: reduce)").matches,g=window.location.hash.replace(/^#/,"");return d||g!==""&&g!=="flow"&&g!=="hero"||document.body.classList.add(pr),()=>{document.body.classList.remove(pr)}},[]),We.useEffect(()=>{const d=g=>{if(g.key!=="Escape")return;const _=document.getElementById("hero");_&&_.getBoundingClientRect().top>8&&(g.preventDefault(),m())};return window.addEventListener("keydown",d),()=>window.removeEventListener("keydown",d)},[m]),We.useEffect(()=>{const d=window.location.hash.replace(/^#/,"");d&&d!=="flow"&&d!=="hero"&&requestAnimationFrame(()=>{var g;(g=document.getElementById(d))==null||g.scrollIntoView({block:"start"})})},[]),We.useEffect(()=>{const d=i.current,g=a.current;if(!d||!g)return;const _=d,v=g;let x=!1;if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){document.body.classList.remove(pr);const y=o.current;y&&(y.style.height="0px");return}let w;return(async()=>{if(await M3(),x)return;const y=Math.min(window.devicePixelRatio,2),M=Math.max(320,_.clientWidth||window.innerWidth),I=Math.max(1,_.clientHeight||window.innerHeight),B=[],C=[],O=[],L=new Float64Array(hn).fill(-1);Ul.forEach((Me,Ae)=>{const Ze=hn-1-Ae,A=Ul[Ze],V=Zv(A,Ze,y,M);O.push(V);const $=j3(V);B.push($);const te=Ap,ie=te*Qx/Jx,Ue=new Ci(new Hs(ie,te),$);Ue.position.set(0,0,-Ae*$a),Ue.renderOrder=Ae,C.push(Ue)});const F=Kv(y,M),T=new Nu({map:F,transparent:!0,opacity:0,depthWrite:!1,depthTest:!1,side:Sa}),N=F.image.height/F.image.width,{w:Z,h:k}=jv(M,I,N),j=new Ci(new Hs(Z,k),T);j.position.set(0,0,-(hn-1)*$a+.05),j.renderOrder=r3;const me=new IE,ce=new Hi(Uu,1,.08,120),X=new tR({antialias:!0,alpha:!1,powerPreference:"high-performance"});X.setPixelRatio(Math.min(window.devicePixelRatio,2)),X.outputColorSpace=ni,X.sortObjects=!0,_.appendChild(X.domElement),Qv(F,X);const z=new Dl;C.forEach(Me=>z.add(Me)),z.add(j),me.add(z);const H=new Xi({uniforms:{uStrength:{value:0}},vertexShader:p3,fragmentShader:m3,transparent:!0,toneMapped:!1,depthTest:!1,depthWrite:!1,blending:Ph}),Q=new Ci(new ki,H);Q.frustumCulled=!1,Q.renderOrder=Wv,Q.visible=!1,me.add(Q);let fe=null,xe=null,U=null;const W=r.current;if(W){W.muted=!0,W.defaultMuted=!0,W.playsInline=!0,W.preload="auto",W.pause(),fe=new YE(W),fe.colorSpace=ni,fe.minFilter=pn,fe.magFilter=pn,fe.generateMipmaps=!1,xe=new Nu({map:fe,depthTest:!1,depthWrite:!1,toneMapped:!1}),U=new Ci(new Hs(1,1),xe),U.frustumCulled=!1,U.renderOrder=l3,U.position.set(0,0,-qv),ce.add(U),me.add(ce);const Me=()=>{Yv(W,iS[0]),fe.needsUpdate=!0};W.readyState>=1?Me():W.addEventListener("loadedmetadata",Me,{once:!0})}function ye(){if(!U)return;const Me=qv,Ae=Uu*Math.PI/180,Ze=2*Math.tan(Ae/2)*Me,A=Ze*ce.aspect,V=(W==null?void 0:W.videoWidth)||1280,$=(W==null?void 0:W.videoHeight)||720,te=V/Math.max(1,$);A/Math.max(1e-6,Ze)>te?U.scale.set(A,A/te,1):U.scale.set(Ze*te,Ze,1)}const Ce=0,Ge=-(hn-1)*$a,oe=Il,be=-.1*$a,Te=.1*$a;function qe(Me,Ae){const Ze=Me+Il;return(oe-Ze)/Ae}let je=Math.max(1,_.clientHeight||window.innerHeight),$e=!1,Vt=window.innerWidth,ut=!1,pt=!1;function gt(){return Math.max(1,window.innerHeight)}function _t(Me){return ut?Me>E3&&(ut=!1):b3(Me)&&(ut=!0),ut}function sn(){const Me=o.current;if(!Me)return;const{totalPx:Ae}=Mo(je),Ze=je*WR,V=`${Math.max(Math.ceil(Ae+Ze+je*wh+32-Vv),Math.ceil(je*1.08))}px`;Me.style.height!==V&&(Me.style.height=V)}function tn(){const Me=Math.max(1,je),{totalPx:Ae}=Mo(Me),Ze=Math.max(1,Ae),A=Ce+be,V=Ge+Te-XR,te=(A-V)/Ze,ie=qe(A,te),Ue=qe(V,te);return{ih:Me,totalPx:Ze,scrollToWorldFactor:te,minScroll:ie,maxScroll:Ue}}let{scrollToWorldFactor:nn,minScroll:$t,maxScroll:Nt}=tn();function rn(){var ie;const Me=Math.max(320,_.clientWidth||window.innerWidth),Ae=Math.min(window.devicePixelRatio,2);O.forEach((Ue,Oe)=>{Ue.dispose();const Le=hn-1-Oe,He=Zv(Ul[Le],Le,Ae,Me);O[Oe]=He,B[Oe].uniforms.uMap.value=He}),(ie=T.map)==null||ie.dispose();const Ze=Kv(Ae,Me);T.map=Ze,T.needsUpdate=!0,Qv(Ze,X);const A=Ze.image.height/Ze.image.width,V=Math.max(1,_.clientHeight||je),{w:$,h:te}=jv(Me,V,A);j.geometry.dispose(),j.geometry=new Hs($,te)}function K(){const Me=_.clientWidth,Ae=_.clientHeight;if(Me<2||Ae<2)return;ce.aspect=Me/Ae,ce.updateProjectionMatrix(),X.setSize(Me,Ae,!1),ye(),rn();const Ze=tn();nn=Ze.scrollToWorldFactor,$t=Ze.minScroll,Nt=Ze.maxScroll,$e||sn()}function Ut(){$e=!1,je=gt(),Vt=window.innerWidth,K()}K(),requestAnimationFrame(()=>{x||rn()});let Ct=0;function P(){var js,Io;if(x)return;Ct=requestAnimationFrame(P);const Me=gt(),Ae=document.getElementById("hero"),Ze=Ae?Ae.getBoundingClientRect().top:0,A=Ae?_t(Ze):!0,{totalPx:V}=Mo(je),$=v.getBoundingClientRect(),te=Math.max(1,v.offsetHeight-je),ie=Gt.clamp(-$.top,0,te);if(!A&&ie<=V){if($e=!1,Math.abs(Me-je)>Dh){je=Me,sn();const ct=tn();nn=ct.scrollToWorldFactor,$t=ct.minScroll,Nt=ct.maxScroll}}else $e=!0;const Oe=je,{cardPx:Le,titlePx:He,totalPx:ze}=Mo(Oe),tt=Math.max(1,v.offsetHeight-Oe),rt=Gt.clamp(-$.top,0,tt),Je=Math.min(rt,ze),Mt=Math.max(1,ze),Zt=Oe*$x,kt=Oe*eS,wt=Zt+kt,Dt=rt-ze,ke=xr(Gt.clamp(Dt/Math.max(1,Zt),0,1)),Nn=xr(Gt.clamp((Dt-Zt)/Math.max(1,kt),0,1)),vt=Gt.mapLinear(Le,0,Mt,$t,Nt),mn=_.clientWidth,Kn=_.clientHeight,Un=Math.max(1,He),gn=Je<Un,Bt=gn?Gt.clamp(Je/Un,0,1):0,an=Math.max(0,Je-Un),_i=Math.max(1,Le),Qn=Gt.clamp(an/_i,0,1)*(hn-1),la=Xp(mn,Kn),wa=k3(mn,Kn);let ii;gn?ii=Gt.mapLinear(Je,0,Un,Nt,vt):ii=Gt.mapLinear(Je,Un,Mt,vt,$t),ii=Gt.clamp(ii,$t,Nt);const Xs=X3(Le,Oe),Oo=W3(Un,Oe),Da=q3(Bt,Oo),La=hn-1,kl=ze+wt;W&&(Yv(W,h3(rt,Un,Le,ze,kl)),fe&&(fe.needsUpdate=!0)),ye();const Ws=oe-ii*nn;ce.position.set(0,0,Ws),ce.lookAt(0,0,Ws-Il);const qs=ze+wt;let ca=0;if(tt>qs&&rt>=qs){const ct=Math.max(1,tt-qs);ca=xr(Gt.clamp((rt-qs)/ct,0,1))}const Yi=Math.max(1,wt+Oe*wh),Po=rt<=Mt?Gt.clamp(rt/Mt,0,1):1+Gt.clamp(Dt/Yi,0,1)*.45;if(Z3(rt,tt)){const ct=Q3(Po,Ws,K3(mn)),vi=new KE(ct,!1,"centripetal").getSpacedPoints(e3);if(vi.length>=2){const Tn=J3(vi,t3,n3,i3),ua=Q.geometry.getAttribute("position"),Jn=Tn.getAttribute("position");if(ua&&Jn&&ua.count===Jn.count&&((js=Q.geometry.getIndex())==null?void 0:js.count)===((Io=Tn.getIndex())==null?void 0:Io.count)&&ua&&Jn){ua.array.set(Jn.array),ua.needsUpdate=!0;const Zi=Q.geometry.getAttribute("normal"),Na=Tn.getAttribute("normal");Zi&&Na&&(Zi.array.set(Na.array),Zi.needsUpdate=!0);const Fo=Q.geometry.getAttribute("uv"),Wl=Tn.getAttribute("uv");Fo&&Wl&&(Fo.array.set(Wl.array),Fo.needsUpdate=!0),Tn.dispose()}else Q.geometry.dispose(),Q.geometry=Tn;Q.visible=!0;const da=gn||Qn<Gt.clamp(Xs,0,.999);Q.renderOrder=da?o3:Wv,H.uniforms.uStrength.value=.36*(1-ca*.92)}else Q.visible=!1,H.uniforms.uStrength.value=0}else Q.visible=!1,H.uniforms.uStrength.value=0;const ji=Math.floor((hn-1)/2),Ys=performance.now(),Ar=Gt.clamp(Xs,0,.999);for(let ct=0;ct<hn;ct++){if(gn||Qn<=ct+1e-5||Qn<ct+Ar){L[ct]=-1;continue}L[ct]<0&&(Qn>=ct+1-1e-5?L[ct]=Ys-kv:L[ct]=Ys)}if(C.forEach((ct,zn)=>{const vi=-zn*$a,Tn=hn-1-zn,ua=L[Tn];let Jn=ua<0?0:xr(Gt.clamp((Ys-ua)/kv,0,1));!gn&&Tn===hn-1&&Nn>0&&(Jn=Math.max(Jn,Nn));let{opacity:fa}=Y3(Qn,Tn,Xs,Jn);gn&&zn===La&&(fa*=Da.lastCardOp,Jn=0);let da=1,Zi=0;!gn&&Tn===hn-1&&fa>.02&&ke>0&&(da=1-.28*ke,Zi=-$a*.32*ke),ct.position.set(0,0,vi+Zi),ct.scale.setScalar(wa*da);const Na=B[zn];Na.uniforms.uOpacity.value=fa,Na.uniforms.uWipe.value=Jn,Na.depthWrite=fa>=.995&&Jn<.02,ct.visible=fa>.003&&Jn<.997,ct.renderOrder=zn<=ji?nS+zn:s3+(zn-ji-1)}),j.position.set(0,0,-La*$a+.05),j.scale.setScalar(la),T.opacity=gn?Da.titleOp:0,j.visible=T.opacity>.003,!c.current){u.current?pt=!1:A?pt=!0:pt&&rt<ze-Oe*.25&&(pt=!1),document.body.classList.toggle(pr,!pt);const ct=e.current;ct!=null&&ct.classList.contains("flow-intro__sticky--exit")&&!A&&(ct.style.transition="none",ct.classList.remove("flow-intro__sticky--exit"),ct.offsetWidth,ct.style.transition="")}if(!$e){const ct=wt+Oe*wh+32-Vv,zn=Math.max(Math.ceil(ze+ct),Math.ceil(Oe*1.08)),vi=o.current;if(vi){const Tn=`${zn}px`;vi.style.height!==Tn&&(vi.style.height=Tn)}}const Xl=1-ca*.96;e.current&&(e.current.style.setProperty("--intro-ui-opacity",String(Xl)),e.current.style.setProperty("--intro-tagline-opacity","1"));const Rr=String(1-ca);X.domElement.style.opacity=Rr,X.render(me,ce)}P();let E=0,J=0,ne=!1,de="page",Re=!1,Ie=!1,ue=!1,he=0,De=0,Ve=0,Be=!1,Pe=!1,nt=0,it=window.scrollY,st={kind:"title"};const Y=8;function Ne(){J&&(window.clearTimeout(J),J=0)}function ge(){E&&(cancelAnimationFrame(E),E=0),ne=!1,de="page",u.current=!1}function we(){ge(),Ne(),Re=!1}h.current=we;function Fe(){var ze;const Me=Math.max(1,je),{cardPx:Ae,titlePx:Ze,totalPx:A}=Mo(Me),V=v.getBoundingClientRect(),$=Math.max(1,v.offsetHeight-Me),te=Gt.clamp(-V.top,0,$),ie=document.getElementById("hero"),Ue=ie?_t(ie.getBoundingClientRect().top):!0,Oe=((ze=e.current)==null?void 0:ze.getBoundingClientRect().bottom)??Me,He=Math.max(0,Math.min(te,A)-Ze)/Math.max(1,Ae)*(hn-1);return{innerH:Me,cardPx:Ae,titlePx:Ze,totalPx:A,scrolledPx:te,landed:Ue,stickyBottom:Oe,depthT:He}}function ve(Me=Fe()){return V3(Me.scrolledPx,Me.titlePx,Me.cardPx,Me.totalPx,Me.landed,Me.stickyBottom,Me.innerH)}function Qe(){return ne||ve()}function Ye(Me){let Ae=Me.deltaY;return Me.deltaMode===1?Ae*=16:Me.deltaMode===2&&(Ae*=window.innerHeight),Ae}function jt(){Ne(),Re=!0,J=window.setTimeout(()=>{J=0,Re=!1},N3)}function Ft(Me,Ae){return Me.kind==="title"?z3(v):Me.kind==="card"?H3(v,Me.idx,Ae.innerH):Nh()}function Fn(Me){if(x||c.current||ne)return;const Ae=Fe(),Ze=Me.kind==="hero";if(!Ze&&!ve(Ae))return;const A=Ft(Me,Ae);if(A==null)return;const V=window.scrollY,$=A-V;if(st=Me.kind==="hero"?{kind:"card",idx:hn-1}:Me,Math.abs($)<sS(Ae.innerH)){gr(A),jt();return}ne=!0,de=Ze?"exit":"page",u.current=Ze,Re=!0;const te=Ze?F3(window.innerWidth):I3(window.innerWidth),ie=performance.now(),Ue=Le=>{if(gr(Le),ne=!1,de="page",E=0,!Ze){u.current=!1,jt();return}u.current=!1,requestAnimationFrame(()=>{const He=Nh();He!=null&&gr(He),requestAnimationFrame(()=>{const ze=Nh();ze!=null&&gr(ze),jt()})})},Oe=Le=>{if(x||c.current){ne=!1,de="page",E=0,u.current=!1;return}if(de==="page"&&!ve(Fe())){ge(),Re=!1;return}const He=Math.min(1,(Le-ie)/te);gr(V+$*xr(He)),He<1?E=requestAnimationFrame(Oe):Ue(A)};E=requestAnimationFrame(Oe)}function Bn(Me,Ae){const Ze=hn-1,A=Ae>0?1:-1,V=Uh(Me.scrolledPx,Me.titlePx,Me.depthT,Me.innerH);if(V.kind==="title")return A<0?null:{kind:"card",idx:0};const $=V.idx+A;return $<0?{kind:"title"}:$>Ze?A>0?{kind:"hero"}:{kind:"card",idx:Ze}:{kind:"card",idx:$}}function Ra(Me){const Ae=Fe();if(!ve(Ae)&&!(ne&&de==="exit"))return!1;const Ze=Bn(Ae,Me);return Ze===null?!1:(Fn(Ze),!0)}function rs(Me,Ae){return Bn(Me,Ae)===null}function os(Me){if(!Qe())return;const Ae=Ye(Me),Ze=Fe();if(!ve(Ze)&&de!=="exit")return;const A=Bn(Ze,Ae>0?1:-1);if(A===null){(ne||Re)&&we();return}if(ne||Re){Me.preventDefault();return}if(Math.abs(Ae)<D3){Me.preventDefault();return}Me.preventDefault(),Fn(A)}function Ca(Me){var Ae;if(De=((Ae=Me.touches[0])==null?void 0:Ae.clientY)??De,he=De,Ve=window.scrollY,Ie=!1,ue=ne||ve(),ue&&!ne){const Ze=Fe();st=Uh(Ze.scrolledPx,Ze.titlePx,Ze.depthT,Ze.innerH)}}function gi(Me){var Ze;const Ae=((Ze=Me.touches[0])==null?void 0:Ze.clientY)??he;if(!Ie){if(!ue&&(ne||ve())&&(ue=!0,De=Ae,he=Ae,Ve=window.scrollY),!ue)return;const A=De-Ae;if(Math.abs(A)<Y){he=Ae;return}const V=A>0?1:-1,$=Fe();if(!ne&&!ve($)){ue=!1,he=Ae;return}if(rs($,V)){ue=!1,we(),he=Ae;return}ne&&we(),Ie=!0,ue=!1,Ve=window.scrollY,st=Uh($.scrolledPx,$.titlePx,$.depthT,$.innerH)}Me.preventDefault(),he=Ae,ne||gr(Ve)}function on(){const Me=Ie,Ae=ue,Ze=De-he;if(Ie=!1,ue=!1,ne)return;if(!Me){Ae&&we();return}if(!ve())return;if(Math.abs(Ze)<L3){Fn(st);return}const A=Ze>0?1:-1,V=Fe();if(rs(V,A)){we();return}Ra(A)}function bn(Me){Me.pointerType!=="touch"&&Me.button===0&&(Be=!0,Pe=!1,nt=window.scrollY,ve()&&ge())}function Vn(Me){if(Me.pointerType==="touch"||!Be)return;if(Be=!1,!Pe||!ve()){Pe=!1;return}const Ae=Fe(),Ze=window.scrollY>=nt?1:-1,A=Bn(Ae,Ze);if(Pe=!1,A===null){we();return}Fn(A)}function sa(Me){Me.pointerType!=="touch"&&(Be=!1,Pe=!1)}function Vs(Me){Me.button===0&&(Pe||ne||Re||ve()&&(Me.preventDefault(),Ra(1)))}function ks(Me){var V;const Ae=Me.target;if((V=Ae==null?void 0:Ae.closest)!=null&&V.call(Ae,"input, textarea, select, [contenteditable=true]"))return;const Ze=Me.key==="ArrowDown"||Me.key==="ArrowRight"||Me.key==="Enter"||Me.key===" ",A=Me.key==="ArrowUp"||Me.key==="ArrowLeft";if(!(!Ze&&!A)){if(ne||Re){Me.preventDefault();return}ve()&&(Me.preventDefault(),Ra(Ze?1:-1))}}function ra(){const Me=window.scrollY,Ae=Me-it;it=Me,Be&&Math.abs(Ae)>.5&&(Pe=!0),ne&&de==="page"&&!ve()&&we()}function Wi(){we(),Ut()}function qi(){we();const Me=gt(),Ae=window.innerWidth,Ze=Math.abs(Me-je),A=Math.abs(Ae-Vt)>1;if($e){Ze>Dh||A?Ut():K();return}je=Me,Vt=Ae,K()}function Di(){we();const Me=gt();Math.abs(Me-je)<=Dh||($e?Ut():(je=Me,Vt=window.innerWidth,K()))}window.addEventListener("wheel",os,{passive:!1}),window.addEventListener("touchstart",Ca,{passive:!0}),window.addEventListener("touchmove",gi,{passive:!1}),window.addEventListener("touchend",on,{passive:!0}),window.addEventListener("touchcancel",on,{passive:!0}),window.addEventListener("pointerdown",bn,{passive:!0}),window.addEventListener("pointerup",Vn,{passive:!0}),window.addEventListener("pointercancel",sa,{passive:!0}),window.addEventListener("scroll",ra,{passive:!0}),window.addEventListener("resize",qi,{passive:!0}),window.addEventListener("orientationchange",Wi,{passive:!0}),_.addEventListener("click",Vs),window.addEventListener("keydown",ks);const li=window.visualViewport;li&&li.addEventListener("resize",Di);const oa=new ResizeObserver(K);oa.observe(_),w=()=>{var Me;we(),h.current=null,cancelAnimationFrame(Ct),document.body.classList.remove(pr),window.removeEventListener("wheel",os),window.removeEventListener("touchstart",Ca),window.removeEventListener("touchmove",gi),window.removeEventListener("touchend",on),window.removeEventListener("touchcancel",on),window.removeEventListener("pointerdown",bn),window.removeEventListener("pointerup",Vn),window.removeEventListener("pointercancel",sa),window.removeEventListener("scroll",ra),window.removeEventListener("resize",qi),window.removeEventListener("orientationchange",Wi),_.removeEventListener("click",Vs),window.removeEventListener("keydown",ks),li&&li.removeEventListener("resize",Di),oa.disconnect(),B.forEach(Ae=>{Ae.dispose()}),O.forEach(Ae=>Ae.dispose()),(Me=T.map)==null||Me.dispose(),T.dispose(),C.forEach(Ae=>Ae.geometry.dispose()),j.geometry.dispose(),Q.geometry.dispose(),H.dispose(),me.remove(Q),U&&(ce.remove(U),U.geometry.dispose()),xe==null||xe.dispose(),fe==null||fe.dispose(),W&&W.pause(),X.dispose(),_.contains(X.domElement)&&_.removeChild(X.domElement)},x&&w()})(),()=>{var y;x=!0,(y=h.current)==null||y.call(h),h.current=null,document.body.classList.remove(pr),w==null||w()}},[]),D.jsxs("section",{ref:a,id:"flow",className:"flow-intro","aria-label":"Morpheum — Discover, Copy, Supervise, Isolate",children:[D.jsxs("div",{ref:e,className:"flow-intro__sticky",children:[D.jsx("video",{ref:r,className:"flow-intro__bg-video",src:c3,muted:!0,playsInline:!0,preload:"auto","aria-hidden":!0}),D.jsx("div",{ref:i,className:"flow-intro__canvas","aria-hidden":!0}),D.jsxs("div",{className:"flow-intro__top",children:[D.jsx("div",{className:"flow-intro__brand",children:D.jsx(Vp,{size:"sm",brandName:"Morpheum",className:"flow-intro__brand-mark"})}),D.jsxs("button",{type:"button",className:"flow-intro__skip",onClick:m,children:["Skip ",D.jsx("span",{className:"flow-intro__skip-key",children:"Esc"})]})]}),D.jsx("div",{className:"flow-intro__tagline-wrap",children:D.jsx(GR,{text:VR,className:"flow-intro__tagline",scrollerRef:a})}),D.jsx("div",{className:"flow-intro__sr","aria-live":"polite",children:Ul.map((d,g)=>D.jsxs("p",{children:["Step ",String(g+1).padStart(2,"0"),": ",d.verb,". ",d.description]},d.verb))})]}),D.jsx("div",{ref:o,className:"flow-intro__spacer","aria-hidden":!0})]})}const eC=280,tC=5/4,nC=3800,iC={discover:Nl,copy:TR};function aC(){return typeof window<"u"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches}function sC({stepIndex:a,kind:e,className:i,width:r=eC}){const o=We.useRef(null),c=e??Yx(a),u=Math.round(r*tC);return We.useEffect(()=>{const h=o.current;if(!h)return;let m=0,d;const g=()=>{const x=Math.min(window.devicePixelRatio||1,2),b=Math.round(r*x),w=Math.round(u*x);(h.width!==b||h.height!==w)&&(h.width=b,h.height=w);const y=h.getContext("2d");y&&DR(y,c,b,w,m)};g();const _=iC[c];_&&_>1&&!aC()&&(d=setInterval(()=>{m=(m+1)%_,g()},nC));const v=()=>g();return window.addEventListener("resize",v),()=>{window.removeEventListener("resize",v),d&&clearInterval(d)}},[c,r,u]),D.jsx("div",{className:["loop-step-sheet",i].filter(Boolean).join(" "),style:{width:r,height:u},children:D.jsx("canvas",{ref:o,className:"loop-step-sheet__canvas",style:{width:r,height:u},"aria-hidden":!0})})}const Jv=[{id:"want-eth",agent:"SharpeShark",timestamp:"2026-07-08T15:42:00.000Z",timeLabel:"07-08, 15:42:00",status:"want-to",statusLabel:"Want to",action:"Open ETH long · 1.2 ETH",showActions:!0},{id:"rejected-btc",agent:"NightOwl",timestamp:"2026-07-08T15:31:00.000Z",timeLabel:"07-08, 15:31:00",status:"rejected",statusLabel:"Rejected",action:"Open BTC short · 0.04 BTC"},{id:"close-btc-profit",agent:"SharpeShark",timestamp:"2026-07-08T15:25:00.000Z",timeLabel:"07-08, 15:25:00",status:"short",statusLabel:"Close Long",action:"BTCUSDT · 0.04 BTC · 2,465.12 USDT",pnl:{text:"+103.09",tone:"long"}},{id:"open-eth-long",agent:"FluxRunner",timestamp:"2026-07-08T14:10:00.000Z",timeLabel:"07-08, 14:10:00",status:"long",statusLabel:"Open Long",action:"ETHUSDT · 0.8 ETH · 2,560.00 USDT"},{id:"open-sol-short",agent:"NightOwl",timestamp:"2026-07-07T09:42:00.000Z",timeLabel:"07-07, 09:42:00",status:"short",statusLabel:"Open Short",action:"SOLUSDT · 12 SOL · 1,824.00 USDT"}];function rC(){return D.jsxs("aside",{className:"supervise-log","aria-label":"Agent activity log",children:[D.jsx("header",{className:"supervise-log__header",children:D.jsx("span",{className:"supervise-log__kicker",children:"Activity log"})}),D.jsx("ol",{className:"supervise-log__timeline",children:Jv.map((a,e)=>{const i=e===Jv.length-1,r=e===0;return D.jsxs("li",{className:"supervise-log__item",children:[D.jsxs("div",{className:"supervise-log__meta",children:[D.jsx("span",{className:"supervise-log__agent",children:a.agent}),D.jsx("time",{className:"supervise-log__time",dateTime:a.timestamp,children:a.timeLabel})]}),D.jsxs("div",{className:"supervise-log__track","aria-hidden":!0,children:[i?null:D.jsx("span",{className:"supervise-log__track-line"}),D.jsx("span",{className:["supervise-log__dot",r?"supervise-log__dot--latest":""].filter(Boolean).join(" ")})]}),D.jsxs("div",{className:"supervise-log__body",children:[D.jsx("span",{className:`supervise-log__badge supervise-log__badge--${a.status}`,children:a.statusLabel}),D.jsxs("p",{className:"supervise-log__action",children:[a.action,a.pnl?D.jsxs(D.Fragment,{children:[" · ",D.jsx("span",{className:`supervise-log__pnl supervise-log__pnl--${a.pnl.tone}`,children:a.pnl.text})]}):null]}),a.showActions?D.jsxs("div",{className:"supervise-log__actions",children:[D.jsx("button",{type:"button",className:"supervise-log__btn supervise-log__btn--reject",children:"Reject"}),D.jsx("button",{type:"button",className:"supervise-log__btn supervise-log__btn--approve",children:"Approve"})]}):null]})]},a.id)})})]})}const oC=/^(action)$/i;function lC(a){return a.split(/(\s*[·/]\s*)/).map((i,r)=>oC.test(i.trim())?D.jsx("span",{className:"stat-chip__brand",children:i},r):D.jsx("span",{children:i},r))}function rS({label:a,status:e,live:i}){return D.jsxs("span",{className:`stat-chip ${i?"stat-chip--live":""}`,children:[D.jsx("span",{className:"stat-chip__label",children:a}),D.jsx("span",{className:"stat-chip__sep",children:"·"}),D.jsx("span",{className:"stat-chip__status",children:lC(e)})]})}var cC=cx();function uC(a,e,i=!1){a.style.fontFamily=e.fontFamily,a.style.fontSize=e.fontSize,a.style.fontWeight=e.fontWeight,a.style.letterSpacing=e.letterSpacing,a.style.lineHeight=e.lineHeight,a.style.textTransform=e.textTransform,a.style.whiteSpace=i?"nowrap":"normal",a.style.wordBreak=i?"normal":"break-word"}function fC(a,e,i,r){const o=getComputedStyle(i),c=document.createElement("div");c.style.position="fixed",c.style.left="-99999px",c.style.top="0",c.style.visibility="hidden",c.style.pointerEvents="none",c.style.width=`${e}px`,uC(c,o,!r);const u=document.createTextNode(a);return c.appendChild(u),document.body.appendChild(c),{probe:c,textNode:u}}function $v(a,e,i,r=!0){if(!a)return{lines:[],blockHeight:0};if(e<=0)return{lines:[a],blockHeight:0};const{probe:o,textNode:c}=fC(a,e,i,r),u=o.offsetHeight;if(!r)return document.body.removeChild(o),{lines:[a],blockHeight:u};const h=document.createRange(),m=[];let d=0,g=0;for(let _=1;_<=a.length;_++){h.setStart(c,0),h.setEnd(c,_);const v=h.getClientRects().length;v>g&&g>0&&(m.push(a.slice(d,_-1)),d=_-1),g=v}return d<a.length&&m.push(a.slice(d)),document.body.removeChild(o),{lines:m.length>0?m:[a],blockHeight:u}}const dC=40,hC=5,pC="typewriter-reveal",ex=1e3,mC=4e3;function tx(){return ex+Math.random()*(mC-ex)}function oS(){return typeof window>"u"?!1:window.matchMedia("(prefers-reduced-motion: reduce)").matches}function gC({text:a,content:e,speed:i,cursorWidth:r,active:o,waiting:c,completed:u,holdCursor:h=!1,onComplete:m}){const d=We.useRef(null),g=We.useRef(m),_=We.useRef(null),v=We.useRef(null),x=We.useRef(null),b=We.useRef("idle"),[w,y]=We.useState("idle");g.current=m;const M=We.useCallback(()=>{_.current&&(clearTimeout(_.current),_.current=null)},[]),I=We.useCallback(()=>{var N;M(),v.current=null,x.current=null,b.current="complete",y("complete"),(N=g.current)==null||N.call(g)},[M]),B=We.useCallback(N=>{M(),v.current=Date.now()+N,_.current=setTimeout(I,N)},[M,I]);We.useLayoutEffect(()=>{b.current="idle",y("idle"),x.current=null,v.current=null,M()},[a,i,r,M]),We.useLayoutEffect(()=>{var H,Q,fe;if(c||u||b.current==="complete")return;if(!o){b.current==="cursor-hold"&&_.current&&v.current!=null&&(M(),x.current=Math.max(0,v.current-Date.now()),v.current=null);return}if(b.current==="cursor-hold"&&!_.current){const xe=x.current??tx();x.current=null,B(xe);return}if(b.current==="animating"||b.current==="cursor-hold")return;if(oS()){(H=g.current)==null||H.call(g);return}const N=d.current;if(!N||!a){(Q=g.current)==null||Q.call(g);return}N.style.width="",N.offsetWidth;const Z=Math.max(a.length/i*1e3,120),k=Math.max(a.length,1),j=N.closest(".typewriter-block"),me=(j==null?void 0:j.clientWidth)??((fe=N.parentElement)==null?void 0:fe.clientWidth)??0;N.style.whiteSpace="nowrap",N.style.width="auto";const ce=N.scrollWidth,X=me>0?Math.min(ce,me):ce;N.style.width="0",N.style.setProperty("--tw-duration",`${Z}ms`),N.style.setProperty("--tw-target-width",`${X}px`),N.style.setProperty("--tw-steps",String(k)),N.style.setProperty("--tw-cursor-width",`${r}px`),N.offsetWidth,b.current="animating",y("animating");const z=xe=>{if(xe.animationName===pC){if(h){N.style.width=`${X}px`,b.current="cursor-hold",y("cursor-hold"),B(tx());return}N.style.width="",I()}};return N.addEventListener("animationend",z),()=>{N.removeEventListener("animationend",z)}},[o,u,I,h,B,i,a,c,M,r]);const C=w==="animating",O=w==="cursor-hold",L=w==="complete",T=["typewriter","typewriter-line",c?"is-waiting":"",C?"is-animating":"",O?"is-cursor-hold":"",u||L?"is-complete":"",!o&&!c&&!u&&!L&&(C||O)?"is-paused":""].filter(Boolean).join(" ");return D.jsx("span",{ref:d,className:T,children:e??a})}function Wp({text:a,children:e,className:i,speed:r=dC,cursorWidth:o=hC,multiline:c="auto",active:u=!0,holdCursor:h=!0,onComplete:m}){const d=We.useRef(null),g=We.useRef(m),[_,v]=We.useState([]),[x,b]=We.useState(0),[w,y]=We.useState(0),[M,I]=We.useState(!1),[B,C]=We.useState(!1),O=oS();g.current=m;const L=We.useCallback(()=>{const ce=d.current;if(!ce||!a)return v([]),b(0),C(!0),!0;const X=ce.clientWidth;if(X<1)return!1;const H=(c==="auto"||c===!0)&&!O,{lines:Q,blockHeight:fe}=$v(a,X,ce,H);let xe=fe;if(!H){const U=$v(a,X,ce,!0);xe=Math.max(fe,U.blockHeight)}return v(Q),b(xe),C(!0),!0},[a,c,O]);We.useLayoutEffect(()=>{var ce,X;if(y(0),I(!1),C(!1),v([]),b(0),O){(ce=g.current)==null||ce.call(g),C(!0);return}if(!a){(X=g.current)==null||X.call(g),C(!0);return}if(!L()){const z=new ResizeObserver(()=>{L()&&z.disconnect()});return d.current&&z.observe(d.current),()=>z.disconnect()}},[a,c,L,O]);const F=We.useCallback(ce=>{var z;const X=ce>=_.length-1;cC.flushSync(()=>{if(!X){y(ce+1);return}I(!0)}),X&&((z=g.current)==null||z.call(g))},[_]),N=["typewriter-block",_.length>1?"typewriter-lines":"typewriter-host",i??"",M?"is-complete":"",B?"":"is-measuring",O?"is-static":""].filter(Boolean).join(" "),Z={...!M&&!O&&x>0?{height:x,minHeight:x}:void 0},k=e??a;if(!B)return D.jsx("span",{ref:d,className:N,style:Z,children:k});if(O||!a)return D.jsx("span",{ref:d,className:["typewriter","is-static",i??""].filter(Boolean).join(" "),children:k});if(M)return D.jsx("span",{ref:d,className:["typewriter-block","typewriter-host","is-complete",i??""].filter(Boolean).join(" "),children:k});const j=_.length>0?_:[a],me=!!e&&j.length<=1;return D.jsxs("span",{ref:d,className:N,style:Z,"aria-label":a,children:[D.jsx("span",{className:"typewriter-ghost","aria-hidden":!0,children:k}),D.jsx("span",{className:"typewriter-overlay","aria-hidden":!0,children:j.map((ce,X)=>D.jsx(gC,{text:ce,content:me?e:void 0,speed:r,cursorWidth:o,waiting:X>w,active:u&&X===w,completed:X<w,holdCursor:h&&X===j.length-1,onComplete:X===w?()=>F(X):void 0},`${X}-${ce}`))})]})}function _C(){return typeof window<"u"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches}function qp(a,e){const i=(e==null?void 0:e.amount)??.2,[r,o]=We.useState(!1);return We.useLayoutEffect(()=>{if(r)return;if(_C()){o(!0);return}const c=a.current;if(!c)return;const u=new IntersectionObserver(h=>{for(const m of h)if(m.isIntersecting&&m.intersectionRatio>=Math.min(i,1)){o(!0),u.disconnect();return}},{root:null,threshold:[0,i,Math.min(i+.15,1),1],rootMargin:"0px"});return u.observe(c),()=>u.disconnect()},[i,r,a]),r}function vC(a){return String(a).padStart(2,"0")}function Ou(){return typeof window<"u"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches}const xC=1600,SC=1500,nx=5e3,MC=7e3;function yC(){return nx+Math.random()*(MC-nx)}function EC({text:a,active:e}){const[i,r]=We.useState(!1),[o,c]=We.useState(0),u=We.useRef(null),h=`> ${a}`,m=We.useCallback(()=>{u.current&&(clearTimeout(u.current),u.current=null)},[]);We.useLayoutEffect(()=>{if(m(),!e){r(!1),c(0);return}if(Ou()){r(!0);return}const g=window.setTimeout(()=>r(!0),SC);return()=>{window.clearTimeout(g),m()}},[e,m]);const d=We.useCallback(()=>{Ou()||(m(),u.current=setTimeout(()=>{u.current=null,c(g=>g+1)},yC()))},[m]);return D.jsx("p",{className:"flow-step__example",children:i?D.jsx(Wp,{text:h,className:"flow-step__example-type",speed:42,multiline:"auto",active:!0,holdCursor:!0,onComplete:d},o):D.jsx("span",{className:"flow-step__example-type","aria-hidden":!0,children:h})})}function bC(){const[a,e]=We.useState(()=>new Set),[i,r]=We.useState(!1),o=We.useRef(new Map),c=We.useRef(null),u=qp(c,{amount:.35}),h=Ls.steps.every(_=>a.has(`step-${_.n}`));We.useLayoutEffect(()=>{if(Ou()){e(new Set(Ls.steps.map(v=>`step-${v.n}`))),r(!0);return}const _=new IntersectionObserver(v=>{e(x=>{const b=new Set(x);for(const w of v){const y=w.target.dataset.flowKey;y&&w.isIntersecting&&b.add(y)}return b})},{root:null,threshold:[0,.01,.08,.15,.25],rootMargin:"-42% 0px -42% 0px"});for(const v of o.current.values())_.observe(v);return()=>{_.disconnect()}},[]),We.useLayoutEffect(()=>{if(Ou())return;if(!h){r(!1);return}const _=window.setTimeout(()=>{r(!0)},xC);return()=>window.clearTimeout(_)},[h]);const m=We.useCallback((_,v)=>{v?o.current.set(_,v):o.current.delete(_)},[]),d=We.useCallback(_=>{e(v=>new Set(v).add(_))},[]),g=u&&i;return D.jsx("section",{id:"how",className:"section flow",children:D.jsxs("div",{className:"container",children:[D.jsx("p",{className:"section-kicker",children:Ls.kicker}),D.jsx("h2",{className:"section-title flow__title",children:Ls.title}),D.jsx("div",{className:"flow__chips",children:Ls.chips.map(_=>D.jsx(rS,{label:_.label,status:_.value},_.label))}),D.jsx("div",{className:"flow__steps",role:"list",children:Ls.steps.map((_,v)=>{const x=`step-${_.n}`,b=a.has(x);return D.jsxs("article",{ref:w=>m(x,w),"data-flow-key":x,role:"listitem",className:`flow-step${b?" flow-step--expanded":""}`,"aria-expanded":b,children:[D.jsxs("button",{type:"button",className:"flow-step__head",onClick:()=>d(x),"aria-label":b?`${_.title}, expanded`:`${_.title}, tap to expand`,children:[D.jsxs("span",{className:"flow-step__idx",children:["Step ",vC(_.n)]}),D.jsx("h3",{className:"flow-step__title",children:_.title}),D.jsx("span",{className:"flow-step__chevron","aria-hidden":!0,children:b?"−":"+"})]}),D.jsx("div",{className:"flow-step__expand","aria-hidden":!b,children:D.jsx("div",{className:"flow-step__expand-inner",children:D.jsxs("div",{className:`flow-step__split${v===2?" flow-step__split--supervise":""}`,children:[D.jsx("p",{className:"flow-step__meta",children:_.feature}),D.jsxs("div",{className:"flow-step__copy",children:[D.jsx("p",{className:"flow-step__detail",children:_.body}),D.jsx(EC,{text:_.example,active:b}),D.jsx("div",{className:"flow-step__actions",children:D.jsx("a",{href:Ln.explore,className:"flow-step__open","aria-label":`Explore after ${_.title}`,children:D.jsx("span",{"aria-hidden":!0,className:"flow-step__open-arrow",children:"→"})})})]}),D.jsx("div",{className:`flow-step__sheet${v===2?" flow-step__sheet--log":""}`,"aria-hidden":!b,children:b?v===2?D.jsx(rC,{}):D.jsx(sC,{stepIndex:v,width:280}):null})]})})})]},x)})}),D.jsx("p",{ref:c,className:"flow__outcome",children:g?D.jsx(Wp,{text:Ls.outcome,className:"flow__outcome-type",speed:42,multiline:"auto",active:!0,holdCursor:!0}):D.jsx("span",{className:"flow__outcome-type","aria-hidden":!0,children:Ls.outcome})})]})})}function TC(){return D.jsx("footer",{className:"site-footer",children:D.jsxs("div",{className:"container site-footer__inner",children:[D.jsxs("div",{className:"site-footer__brand",children:[D.jsx("a",{className:"site-footer__logo",href:"#hero","aria-label":"Morpheum home",children:D.jsx(Vp,{size:"sm"})}),D.jsx("p",{className:"site-footer__legal",children:F_.legal})]}),D.jsxs("div",{className:"site-footer__meta",children:[D.jsxs("nav",{className:"site-footer__nav","aria-label":"Footer",children:[vu.map(a=>D.jsx("a",{href:a.href,children:a.label},a.id)),D.jsx("a",{href:Ln.docs,children:"Docs"}),D.jsx("a",{href:Ln.manifesto,children:"Manifesto"}),D.jsx("a",{href:Ln.discord,children:"Discord"}),D.jsx("a",{href:Ln.x,children:"X"})]}),D.jsx("div",{className:"site-footer__labels","aria-label":"Protocol",children:F_.labels.map(a=>D.jsx("span",{className:"site-footer__label",children:a},a))})]})]})})}const ix="!@#$%^&*()_+{}[]|;:,.<>?/0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",lS=50,ax=3500,sx=4e3,AC=1400,RC=1200,CC=4500;function cS(){return typeof window>"u"?!1:window.matchMedia("(prefers-reduced-motion: reduce)").matches}function rx(a){return/[A-Za-z0-9]/.test(a)}function wC(){return ix[Math.floor(Math.random()*ix.length)]??"?"}function DC(a){return Math.random()<.5?wC():a}function uS(a,e,i){const r=[];for(let d=0;d<a.length;d++)rx(a[d]??"")&&r.push(d);const o=r.length,c=o===0?1:Math.min(e/i,1),u=Math.floor(c*o),h=new Set(r.slice(0,u));let m="";for(let d=0;d<a.length;d++){const g=a[d]??"";!rx(g)||h.has(d)?m+=g:m+=DC(g)}return m}function LC(a){return typeof a=="boolean"?{enabled:a,decryptMs:ax,pauseMs:sx}:{enabled:a.enabled??!0,decryptMs:a.decryptMs??ax,pauseMs:a.pauseMs??sx}}function Yn(a,e=!0){const{enabled:i,decryptMs:r,pauseMs:o}=LC(e),c=r+o,[u,h]=We.useState(a);return We.useEffect(()=>{if(!i||cS()){h(a);return}let m=Date.now();const d=()=>{const _=Date.now();let v=_-m;v>=c&&(m=_,v=0),h(uS(a,v,r))};d();const g=setInterval(d,lS);return()=>{clearInterval(g)}},[a,i,r,c]),u}function ox(a,e={}){const i=e.enabled??!0,r=e.stepDelayMs??AC,o=e.stepDecryptMs??RC,c=e.holdMs??CC,u=a.join("\0"),[h,m]=We.useState(a),[d,g]=We.useState(()=>a.map(()=>!1));return We.useEffect(()=>{const _=u.length>0?u.split("\0"):[];if(!i||cS()||_.length===0){m(_),g(_.map(()=>!0));return}const x=(_.length-1)*r+o+c;let b=Date.now();const w=()=>{const M=Date.now();let I=M-b;I>=x&&(b=M,I=0);const B=[],C=[];for(let O=0;O<_.length;O++){const L=_[O]??"",F=O*r,T=I>=F;if(C.push(T),!T){B.push(L);continue}const N=I-F;B.push(uS(L,N,o))}m(B),g(C)};w();const y=setInterval(w,lS);return()=>{clearInterval(y)}},[u,i,r,o,c]),{displays:h,started:d}}function NC(){const a=[...I_,...I_];return D.jsx("div",{className:"marquee","aria-label":"Live status",children:D.jsx("div",{className:"marquee__viewport",children:D.jsx("div",{className:"marquee__track",children:a.map((e,i)=>D.jsx(rS,{label:e.label,status:e.status,live:"live"in e?e.live:!1},`${e.label}-${i}`))})})})}function UC({showGrid:a=!1,maskAlpha:e=.72}){const[i,r]=Ds.headline,o=Yn(Ds.eyebrow.label),c=Math.min(1,Math.max(0,e));return D.jsxs("section",{id:"hero",className:"hero","aria-labelledby":"hero-heading",children:[D.jsx("video",{className:"hero__video",autoPlay:!0,muted:!0,loop:!0,playsInline:!0,"aria-hidden":!0,children:D.jsx("source",{src:"/Morm_IntroAnimation_2.mp4",type:"video/mp4"})}),D.jsx("div",{className:"hero__video-mask",style:{"--hero-mask-alpha":c},"aria-hidden":!0}),D.jsx("div",{className:"hero__atmosphere","aria-hidden":!0}),a?D.jsx("div",{className:"hero__grid","aria-hidden":!0}):null,D.jsx("div",{className:"hero__logo-anim","aria-hidden":!0,children:D.jsxs("svg",{className:"hero__logo-anim-svg",viewBox:NR,fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[D.jsx("g",{className:"hero__logo-anim-ghost",children:Tp.map(u=>D.jsx("path",{d:u,fill:"#C8F5A8"},`ghost-${u.slice(0,24)}`))}),D.jsx("g",{className:"hero__logo-anim-fill",children:Tp.map(u=>D.jsx("path",{d:u,fill:"#C8F5A8"},`fill-${u.slice(0,24)}`))})]})}),D.jsx("div",{className:"hero__scanlines","aria-hidden":!0}),D.jsx("div",{className:"hero__grain","aria-hidden":!0}),D.jsx("div",{className:"hero__veil","aria-hidden":!0}),D.jsxs("div",{className:"container hero__content",children:[D.jsxs("a",{className:"hero__eyebrow hero__eyebrow--matrix",href:Ds.eyebrow.href,"aria-label":`${Ds.eyebrow.label}›`,children:[o,D.jsx("span",{className:"hero__eyebrow-chevron","aria-hidden":!0,children:"›"})]}),D.jsxs("h1",{id:"hero-heading",className:"hero__headline",children:[D.jsx("span",{className:"hero__line hero__line--lead",children:i}),D.jsx("span",{className:"hero__line hero__line--punch",children:r})]}),D.jsxs("div",{className:"hero__ctas",children:[D.jsx(Ao,{href:Ds.primaryCta.href,variant:"primary",children:Ds.primaryCta.label}),D.jsx(Ao,{href:Ds.secondaryCta.href,variant:"secondary",children:Ds.secondaryCta.label})]})]}),D.jsx(NC,{})]})}function OC(){const a=Yn(Wd.text);return D.jsx("div",{className:"manifesto-strip",children:D.jsx("a",{className:"manifesto-strip__link manifesto-strip__link--matrix",href:Wd.href,"aria-label":Wd.text,children:a})})}const oi={decryptMs:2800,pauseMs:5200},lx={stepDelayMs:1400,stepDecryptMs:1200,holdMs:4500};function fS(a){return String(a+1).padStart(2,"0")}function PC(a,e,i,r){return`${fS(a)}  ${e}  ·  ${i}  ·  ${r}`}function IC(a,e,i){return`${fS(a)}  ${e}  ·  ${i}`}function FC(a){return!a.from||!a.to||!a.asset||!a.amt?null:`${a.from} → ${a.to} · ${a.asset} ${a.amt}`}function pi({label:a,value:e,display:i}){return D.jsxs("div",{className:"persona-card__meta-row",children:[D.jsx("span",{className:"terminal-label",children:a}),D.jsx("span",{className:"terminal-value persona-card__meta-value persona-card__meta-value--matrix","aria-label":e,children:i})]})}function un({value:a,display:e,className:i="terminal-value persona-card__meta-value persona-card__meta-value--matrix",hidden:r=!1}){return D.jsx("p",{className:i,"aria-label":a,"aria-hidden":r||void 0,"data-pending":r?"true":void 0,children:e})}function BC({meta:a}){const e=Yn(a.name,oi),i=Yn(a.tx,oi),r=Yn(a.hash,oi),o=Yn(a.chain,oi),c=Yn(a.verified,oi),u=Yn(a.rep,oi),h=Yn(a.portable,oi),m=Yn(a.next,oi),d=`tx ${a.tx}`,g=`tx ${i}`,_=`did · ${a.name}`,v=`identity · ${e}`,x=`hash ${a.hash}`,b=`hash ${r}`,w=`chain ${a.chain}`,y=`chain ${o}`,M=`verified ${a.verified} · rep ${a.rep} · portable ${a.portable}`,I=`verified ${c} · rep ${u} · portable ${h}`,B=`next ${a.next}`,C=`next ${m}`,O=`rep ${a.rep} · portable ${a.portable}`,L=`rep ${u} · portable ${h}`,F=`verified ${a.verified}`,T=`verified ${c}`;return D.jsxs("div",{className:"persona-card__meta persona-card__meta--identity",children:[D.jsx("p",{className:"persona-card__meta-kind terminal-label",children:"become an operator"}),D.jsx("p",{className:"terminal-label",children:"on-chain transaction"}),D.jsxs("div",{className:"persona-card__meta-rows",children:[D.jsx(pi,{label:"tx",value:a.tx,display:i}),D.jsx(pi,{label:"hash",value:a.hash,display:r}),D.jsx(pi,{label:"chain",value:a.chain,display:o}),D.jsx(pi,{label:"verified",value:a.verified,display:c}),D.jsx(pi,{label:"rep",value:a.rep,display:u}),D.jsx(pi,{label:"portable",value:a.portable,display:h}),D.jsx(pi,{label:"next",value:a.next,display:m})]}),D.jsxs("div",{className:"persona-card__meta-compact",children:[D.jsx(un,{value:d,display:g}),D.jsx(un,{value:_,display:v,className:"terminal-value persona-card__meta-value--matrix"}),D.jsx(un,{value:x,display:b}),D.jsx(un,{value:w,display:y}),D.jsx(un,{value:M,display:I}),D.jsx(un,{value:B,display:C})]}),D.jsxs("div",{className:"persona-card__meta-xxs",children:[D.jsx(un,{value:d,display:g}),D.jsx(un,{value:a.name,display:e,className:"terminal-value persona-card__meta-value--matrix"}),D.jsx(un,{value:x,display:b}),D.jsx(un,{value:w,display:y}),D.jsx(un,{value:F,display:T}),D.jsx(un,{value:O,display:L}),D.jsx(un,{value:B,display:C})]})]})}function zC({meta:a}){const e=Yn(a.tx,oi),i=Yn(a.from,oi),r=Yn(a.to,oi),o=Yn(a.asset,oi),c=Yn(a.amt,oi),u=Yn(a.chain,oi),h=Yn(a.status,oi),m=`${a.from} → ${a.to}`,d=`${i} → ${r}`,g=`tx ${a.tx}`,_=`tx ${e}`,v=`${a.asset} ${a.amt} · ${a.chain}`,x=`${o} ${c} · ${u}`,b=`${a.asset} ${a.amt}`,w=`${o} ${c}`,y=`status ${a.status}`,M=`status ${h}`;return D.jsxs("div",{className:"persona-card__meta persona-card__meta--community",children:[D.jsx("p",{className:"persona-card__meta-kind terminal-label",children:a.label}),D.jsxs("div",{className:"persona-card__meta-rows",children:[D.jsx(pi,{label:"tx",value:a.tx,display:e}),D.jsx(pi,{label:"from",value:a.from,display:i}),D.jsx(pi,{label:"to",value:a.to,display:r}),D.jsx(pi,{label:"asset",value:a.asset,display:o}),D.jsx(pi,{label:"amt",value:a.amt,display:c}),D.jsx(pi,{label:"chain",value:a.chain,display:u}),D.jsx(pi,{label:"status",value:a.status,display:h})]}),D.jsxs("div",{className:"persona-card__meta-compact",children:[D.jsx("p",{className:"terminal-label",children:a.label}),D.jsx(un,{value:g,display:_}),D.jsx(un,{value:m,display:d}),D.jsx(un,{value:v,display:x}),D.jsx(un,{value:y,display:M})]}),D.jsxs("div",{className:"persona-card__meta-xxs",children:[D.jsx("p",{className:"terminal-label",children:a.label}),D.jsx(un,{value:g,display:_}),D.jsx(un,{value:m,display:d}),D.jsx(un,{value:b,display:w}),D.jsx(un,{value:a.chain,display:u}),D.jsx(un,{value:y,display:M})]})]})}function HC({meta:a}){const e=We.useRef(null),i=qp(e,{amount:.15}),r=a.steps.find(d=>d.from&&d.to&&d.asset&&d.amt),o=r?FC(r):null,c=We.useMemo(()=>{const d=a.steps.map((g,_)=>PC(_,g.op,g.tx,g.status));return o&&d.push(o),d.push(a.chain),d},[a.steps,a.chain,o]),u=We.useMemo(()=>{const d=a.steps.map((g,_)=>IC(_,g.op,g.tx));return o&&d.push(o),d},[a.steps,o]),h=ox(c,{...lx,enabled:i}),m=ox(u,{...lx,enabled:i});return D.jsxs("div",{ref:e,className:"persona-card__meta persona-card__meta--chain",children:[D.jsx("p",{className:"persona-card__meta-kind terminal-label",children:a.label}),D.jsx("div",{className:"persona-card__meta-rows",children:c.map((d,g)=>D.jsx(un,{value:d,display:h.displays[g]??d,hidden:!(h.started[g]??!0)},`rows-${d}`))}),D.jsxs("div",{className:"persona-card__meta-compact",children:[D.jsx("p",{className:"terminal-label",children:a.label}),c.map((d,g)=>D.jsx(un,{value:d,display:h.displays[g]??d,hidden:!(h.started[g]??!0)},`compact-${d}`))]}),D.jsxs("div",{className:"persona-card__meta-xxs",children:[D.jsx("p",{className:"terminal-label",children:a.label}),u.map((d,g)=>D.jsx(un,{value:d,display:m.displays[g]??d,hidden:!(m.started[g]??!0)},`xxs-${d}`))]})]})}function GC({meta:a}){return a.kind==="identity"?D.jsx(BC,{meta:a}):a.kind==="chain"?D.jsx(HC,{meta:a}):D.jsx(zC,{meta:a})}function VC({persona:a}){return D.jsxs("article",{className:`persona-card persona-card--${a.weight}`,children:[D.jsx("h3",{className:"persona-card__title",children:a.title}),D.jsx("ol",{className:"persona-card__steps",children:a.steps.map(e=>D.jsxs("li",{children:[D.jsxs("span",{className:"persona-card__chevron","aria-hidden":!0,children:[">"," "]}),e]},e))}),D.jsx(Ao,{href:a.cta.href,variant:"ghost",className:"persona-card__cta",children:a.cta.label}),D.jsx(GC,{meta:a.meta})]})}function kC(){return D.jsx("section",{id:"personas",className:"section personas",children:D.jsxs("div",{className:"container",children:[D.jsx("p",{className:"section-kicker",children:qd.kicker}),D.jsx("h2",{className:"section-title personas__title",children:qd.title}),D.jsx("div",{className:"personas__grid",children:qd.items.map(a=>D.jsx(VC,{persona:a},a.title))})]})})}function XC(){const[a,e]=We.useState(!1),[i,r]=We.useState(!1),[o,c]=We.useState("");return We.useEffect(()=>{const u=()=>e(window.scrollY>24);return u(),window.addEventListener("scroll",u,{passive:!0}),()=>window.removeEventListener("scroll",u)},[]),We.useEffect(()=>{const u=vu.map(m=>m.id),h=new IntersectionObserver(m=>{var g;const d=m.filter(_=>_.isIntersecting).sort((_,v)=>v.intersectionRatio-_.intersectionRatio);(g=d[0])!=null&&g.target.id&&c(d[0].target.id)},{rootMargin:"-30% 0px -55% 0px",threshold:[0,.25,.5]});return u.forEach(m=>{const d=document.getElementById(m);d&&h.observe(d)}),()=>h.disconnect()},[]),We.useEffect(()=>(document.body.style.overflow=i?"hidden":"",()=>{document.body.style.overflow=""}),[i]),D.jsxs(D.Fragment,{children:[D.jsx("header",{className:`sticky-header ${a?"sticky-header--solid":""}`,children:D.jsxs("div",{className:"sticky-header__inner",children:[D.jsx("a",{className:"sticky-header__logo",href:"#hero","aria-label":"Morpheum home",children:D.jsx(Vp,{size:"sm",brandName:"Morpheum"})}),D.jsx("nav",{className:"sticky-header__nav","aria-label":"Primary",children:vu.map(u=>D.jsx("a",{href:u.href,className:`sticky-header__link ${o===u.id?"is-active":""}`,children:u.label},u.id))}),D.jsxs("div",{className:"sticky-header__actions",children:[D.jsx("a",{className:"sticky-header__docs",href:Ln.docs,children:"Docs"}),D.jsx(Ao,{href:Ln.app,variant:"primary",className:"sticky-header__launch",children:"Launch Demo"}),D.jsxs("button",{type:"button",className:"sticky-header__menu","aria-expanded":i,"aria-controls":"mobile-nav","aria-label":i?"Close menu":"Open menu",onClick:()=>r(u=>!u),children:[D.jsx("span",{}),D.jsx("span",{}),D.jsx("span",{})]})]})]})}),D.jsx("div",{id:"mobile-nav",className:`mobile-sheet ${i?"is-open":""}`,hidden:!i,children:D.jsxs("nav",{className:"mobile-sheet__nav","aria-label":"Mobile",children:[vu.map(u=>D.jsx("a",{href:u.href,onClick:()=>r(!1),className:o===u.id?"is-active":"",children:u.label},u.id)),D.jsx("a",{href:Ln.docs,onClick:()=>r(!1),children:"Docs"})]})})]})}function WC(){const a=We.useRef(null),e=qp(a,{amount:.35});return D.jsx("section",{className:"thesis section","aria-label":"Thesis",children:D.jsxs("div",{className:"container thesis__inner",children:[D.jsx("p",{ref:a,className:"thesis__close",children:e?D.jsxs(Wp,{text:P_.close,className:"thesis__close-type",speed:36,multiline:"auto",active:!0,holdCursor:!0,children:["The Agent-native"," ",D.jsx("span",{className:"thesis__close-accent",children:"L1 DEX"})," — ",D.jsx("span",{className:"thesis__close-phrase",children:"faster, safer trades."})]}):D.jsxs("span",{className:"thesis__close-type","aria-hidden":!0,children:["The Agent-native"," ",D.jsx("span",{className:"thesis__close-accent",children:"L1 DEX"})," — ",D.jsx("span",{className:"thesis__close-phrase",children:"faster, safer trades."})]})}),D.jsx("p",{className:"section-kicker",children:"Two Risks in Agentic Economy"}),D.jsx("div",{className:"thesis__risks",children:P_.risks.map(i=>D.jsxs("article",{className:"thesis__pair",children:[D.jsxs("div",{className:"thesis__risk",children:[D.jsx("p",{className:"thesis__label",children:"Risk"}),D.jsx("h3",{className:"thesis__risk-title",children:i.risk}),D.jsxs("p",{className:"thesis__failure",children:[D.jsx("span",{"aria-hidden":!0,children:"> "}),i.failure]})]}),D.jsxs("div",{className:"thesis__solve",children:[D.jsx("p",{className:"thesis__label thesis__label--solve",children:"Solution"}),D.jsx("p",{className:"thesis__solve-body",children:i.solve})]})]},i.risk))})]})})}function qC(){return D.jsxs("div",{className:"page",children:[D.jsx("a",{className:"skip-link",href:"#hero",children:"Skip to content"}),D.jsx(OC,{}),D.jsx(XC,{}),D.jsxs("main",{className:"page__main",children:[D.jsx($3,{}),D.jsx(UC,{}),D.jsx(WC,{}),D.jsx(yy,{}),D.jsx(kC,{}),D.jsx(bC,{}),D.jsx(by,{}),D.jsx(My,{})]}),D.jsx(TC,{})]})}xy.createRoot(document.getElementById("root")).render(D.jsx(We.StrictMode,{children:D.jsx(qC,{})}));
