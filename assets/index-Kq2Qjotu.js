(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function i(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(o){if(o.ep)return;o.ep=!0;const c=i(o);fetch(o.href,c)}})();var Ed={exports:{}},Qo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r_;function OM(){if(r_)return Qo;r_=1;var a=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,o,c){var u=null;if(c!==void 0&&(u=""+c),o.key!==void 0&&(u=""+o.key),"key"in o){c={};for(var h in o)h!=="key"&&(c[h]=o[h])}else c=o;return o=c.ref,{$$typeof:a,type:r,key:u,ref:o!==void 0?o:null,props:c}}return Qo.Fragment=e,Qo.jsx=i,Qo.jsxs=i,Qo}var o_;function PM(){return o_||(o_=1,Ed.exports=OM()),Ed.exports}var B=PM(),bd={exports:{}},lt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var l_;function IM(){if(l_)return lt;l_=1;var a=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),u=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),_=Symbol.iterator;function x(U){return U===null||typeof U!="object"?null:(U=_&&U[_]||U["@@iterator"],typeof U=="function"?U:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,y={};function M(U,K,xe){this.props=U,this.context=K,this.refs=y,this.updater=xe||b}M.prototype.isReactComponent={},M.prototype.setState=function(U,K){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,K,"setState")},M.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function P(){}P.prototype=M.prototype;function z(U,K,xe){this.props=U,this.context=K,this.refs=y,this.updater=xe||b}var C=z.prototype=new P;C.constructor=z,w(C,M.prototype),C.isPureReactComponent=!0;var O=Array.isArray;function N(){}var I={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function D(U,K,xe){var Te=xe.ref;return{$$typeof:a,type:U,key:K,ref:Te!==void 0?Te:null,props:xe}}function q(U,K){return D(U.type,K,U.props)}function G(U){return typeof U=="object"&&U!==null&&U.$$typeof===a}function Z(U){var K={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(xe){return K[xe]})}var de=/\/+/g;function oe(U,K){return typeof U=="object"&&U!==null&&U.key!=null?Z(""+U.key):K.toString(36)}function Y(U){switch(U.status){case"fulfilled":return U.value;case"rejected":throw U.reason;default:switch(typeof U.status=="string"?U.then(N,N):(U.status="pending",U.then(function(K){U.status==="pending"&&(U.status="fulfilled",U.value=K)},function(K){U.status==="pending"&&(U.status="rejected",U.reason=K)})),U.status){case"fulfilled":return U.value;case"rejected":throw U.reason}}throw U}function F(U,K,xe,Te,Ue){var ie=typeof U;(ie==="undefined"||ie==="boolean")&&(U=null);var ye=!1;if(U===null)ye=!0;else switch(ie){case"bigint":case"string":case"number":ye=!0;break;case"object":switch(U.$$typeof){case a:case e:ye=!0;break;case g:return ye=U._init,F(ye(U._payload),K,xe,Te,Ue)}}if(ye)return Ue=Ue(U),ye=Te===""?"."+oe(U,0):Te,O(Ue)?(xe="",ye!=null&&(xe=ye.replace(de,"$&/")+"/"),F(Ue,K,xe,"",function(it){return it})):Ue!=null&&(G(Ue)&&(Ue=q(Ue,xe+(Ue.key==null||U&&U.key===Ue.key?"":(""+Ue.key).replace(de,"$&/")+"/")+ye)),K.push(Ue)),1;ye=0;var Ee=Te===""?".":Te+":";if(O(U))for(var ze=0;ze<U.length;ze++)Te=U[ze],ie=Ee+oe(Te,ze),ye+=F(Te,K,xe,ie,Ue);else if(ze=x(U),typeof ze=="function")for(U=ze.call(U),ze=0;!(Te=U.next()).done;)Te=Te.value,ie=Ee+oe(Te,ze++),ye+=F(Te,K,xe,ie,Ue);else if(ie==="object"){if(typeof U.then=="function")return F(Y(U),K,xe,Te,Ue);throw K=String(U),Error("Objects are not valid as a React child (found: "+(K==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":K)+"). If you meant to render a collection of children, use an array instead.")}return ye}function H(U,K,xe){if(U==null)return U;var Te=[],Ue=0;return F(U,Te,"","",function(ie){return K.call(xe,ie,Ue++)}),Te}function $(U){if(U._status===-1){var K=U._result;K=K(),K.then(function(xe){(U._status===0||U._status===-1)&&(U._status=1,U._result=xe)},function(xe){(U._status===0||U._status===-1)&&(U._status=2,U._result=xe)}),U._status===-1&&(U._status=0,U._result=K)}if(U._status===1)return U._result.default;throw U._result}var me=typeof reportError=="function"?reportError:function(U){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var K=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof U=="object"&&U!==null&&typeof U.message=="string"?String(U.message):String(U),error:U});if(!window.dispatchEvent(K))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",U);return}console.error(U)},Se={map:H,forEach:function(U,K,xe){H(U,function(){K.apply(this,arguments)},xe)},count:function(U){var K=0;return H(U,function(){K++}),K},toArray:function(U){return H(U,function(K){return K})||[]},only:function(U){if(!G(U))throw Error("React.Children.only expected to receive a single React element child.");return U}};return lt.Activity=v,lt.Children=Se,lt.Component=M,lt.Fragment=i,lt.Profiler=o,lt.PureComponent=z,lt.StrictMode=r,lt.Suspense=m,lt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=I,lt.__COMPILER_RUNTIME={__proto__:null,c:function(U){return I.H.useMemoCache(U)}},lt.cache=function(U){return function(){return U.apply(null,arguments)}},lt.cacheSignal=function(){return null},lt.cloneElement=function(U,K,xe){if(U==null)throw Error("The argument must be a React element, but you passed "+U+".");var Te=w({},U.props),Ue=U.key;if(K!=null)for(ie in K.key!==void 0&&(Ue=""+K.key),K)!T.call(K,ie)||ie==="key"||ie==="__self"||ie==="__source"||ie==="ref"&&K.ref===void 0||(Te[ie]=K[ie]);var ie=arguments.length-2;if(ie===1)Te.children=xe;else if(1<ie){for(var ye=Array(ie),Ee=0;Ee<ie;Ee++)ye[Ee]=arguments[Ee+2];Te.children=ye}return D(U.type,Ue,Te)},lt.createContext=function(U){return U={$$typeof:u,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null},U.Provider=U,U.Consumer={$$typeof:c,_context:U},U},lt.createElement=function(U,K,xe){var Te,Ue={},ie=null;if(K!=null)for(Te in K.key!==void 0&&(ie=""+K.key),K)T.call(K,Te)&&Te!=="key"&&Te!=="__self"&&Te!=="__source"&&(Ue[Te]=K[Te]);var ye=arguments.length-2;if(ye===1)Ue.children=xe;else if(1<ye){for(var Ee=Array(ye),ze=0;ze<ye;ze++)Ee[ze]=arguments[ze+2];Ue.children=Ee}if(U&&U.defaultProps)for(Te in ye=U.defaultProps,ye)Ue[Te]===void 0&&(Ue[Te]=ye[Te]);return D(U,ie,Ue)},lt.createRef=function(){return{current:null}},lt.forwardRef=function(U){return{$$typeof:h,render:U}},lt.isValidElement=G,lt.lazy=function(U){return{$$typeof:g,_payload:{_status:-1,_result:U},_init:$}},lt.memo=function(U,K){return{$$typeof:p,type:U,compare:K===void 0?null:K}},lt.startTransition=function(U){var K=I.T,xe={};I.T=xe;try{var Te=U(),Ue=I.S;Ue!==null&&Ue(xe,Te),typeof Te=="object"&&Te!==null&&typeof Te.then=="function"&&Te.then(N,me)}catch(ie){me(ie)}finally{K!==null&&xe.types!==null&&(K.types=xe.types),I.T=K}},lt.unstable_useCacheRefresh=function(){return I.H.useCacheRefresh()},lt.use=function(U){return I.H.use(U)},lt.useActionState=function(U,K,xe){return I.H.useActionState(U,K,xe)},lt.useCallback=function(U,K){return I.H.useCallback(U,K)},lt.useContext=function(U){return I.H.useContext(U)},lt.useDebugValue=function(){},lt.useDeferredValue=function(U,K){return I.H.useDeferredValue(U,K)},lt.useEffect=function(U,K){return I.H.useEffect(U,K)},lt.useEffectEvent=function(U){return I.H.useEffectEvent(U)},lt.useId=function(){return I.H.useId()},lt.useImperativeHandle=function(U,K,xe){return I.H.useImperativeHandle(U,K,xe)},lt.useInsertionEffect=function(U,K){return I.H.useInsertionEffect(U,K)},lt.useLayoutEffect=function(U,K){return I.H.useLayoutEffect(U,K)},lt.useMemo=function(U,K){return I.H.useMemo(U,K)},lt.useOptimistic=function(U,K){return I.H.useOptimistic(U,K)},lt.useReducer=function(U,K,xe){return I.H.useReducer(U,K,xe)},lt.useRef=function(U){return I.H.useRef(U)},lt.useState=function(U){return I.H.useState(U)},lt.useSyncExternalStore=function(U,K,xe){return I.H.useSyncExternalStore(U,K,xe)},lt.useTransition=function(){return I.H.useTransition()},lt.version="19.2.7",lt}var c_;function rp(){return c_||(c_=1,bd.exports=IM()),bd.exports}var Qe=rp(),Td={exports:{}},Jo={},Ad={exports:{}},Rd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var u_;function FM(){return u_||(u_=1,(function(a){function e(F,H){var $=F.length;F.push(H);e:for(;0<$;){var me=$-1>>>1,Se=F[me];if(0<o(Se,H))F[me]=H,F[$]=Se,$=me;else break e}}function i(F){return F.length===0?null:F[0]}function r(F){if(F.length===0)return null;var H=F[0],$=F.pop();if($!==H){F[0]=$;e:for(var me=0,Se=F.length,U=Se>>>1;me<U;){var K=2*(me+1)-1,xe=F[K],Te=K+1,Ue=F[Te];if(0>o(xe,$))Te<Se&&0>o(Ue,xe)?(F[me]=Ue,F[Te]=$,me=Te):(F[me]=xe,F[K]=$,me=K);else if(Te<Se&&0>o(Ue,$))F[me]=Ue,F[Te]=$,me=Te;else break e}}return H}function o(F,H){var $=F.sortIndex-H.sortIndex;return $!==0?$:F.id-H.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;a.unstable_now=function(){return c.now()}}else{var u=Date,h=u.now();a.unstable_now=function(){return u.now()-h}}var m=[],p=[],g=1,v=null,_=3,x=!1,b=!1,w=!1,y=!1,M=typeof setTimeout=="function"?setTimeout:null,P=typeof clearTimeout=="function"?clearTimeout:null,z=typeof setImmediate<"u"?setImmediate:null;function C(F){for(var H=i(p);H!==null;){if(H.callback===null)r(p);else if(H.startTime<=F)r(p),H.sortIndex=H.expirationTime,e(m,H);else break;H=i(p)}}function O(F){if(w=!1,C(F),!b)if(i(m)!==null)b=!0,N||(N=!0,Z());else{var H=i(p);H!==null&&Y(O,H.startTime-F)}}var N=!1,I=-1,T=5,D=-1;function q(){return y?!0:!(a.unstable_now()-D<T)}function G(){if(y=!1,N){var F=a.unstable_now();D=F;var H=!0;try{e:{b=!1,w&&(w=!1,P(I),I=-1),x=!0;var $=_;try{t:{for(C(F),v=i(m);v!==null&&!(v.expirationTime>F&&q());){var me=v.callback;if(typeof me=="function"){v.callback=null,_=v.priorityLevel;var Se=me(v.expirationTime<=F);if(F=a.unstable_now(),typeof Se=="function"){v.callback=Se,C(F),H=!0;break t}v===i(m)&&r(m),C(F)}else r(m);v=i(m)}if(v!==null)H=!0;else{var U=i(p);U!==null&&Y(O,U.startTime-F),H=!1}}break e}finally{v=null,_=$,x=!1}H=void 0}}finally{H?Z():N=!1}}}var Z;if(typeof z=="function")Z=function(){z(G)};else if(typeof MessageChannel<"u"){var de=new MessageChannel,oe=de.port2;de.port1.onmessage=G,Z=function(){oe.postMessage(null)}}else Z=function(){M(G,0)};function Y(F,H){I=M(function(){F(a.unstable_now())},H)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(F){F.callback=null},a.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<F?Math.floor(1e3/F):5},a.unstable_getCurrentPriorityLevel=function(){return _},a.unstable_next=function(F){switch(_){case 1:case 2:case 3:var H=3;break;default:H=_}var $=_;_=H;try{return F()}finally{_=$}},a.unstable_requestPaint=function(){y=!0},a.unstable_runWithPriority=function(F,H){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var $=_;_=F;try{return H()}finally{_=$}},a.unstable_scheduleCallback=function(F,H,$){var me=a.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?me+$:me):$=me,F){case 1:var Se=-1;break;case 2:Se=250;break;case 5:Se=1073741823;break;case 4:Se=1e4;break;default:Se=5e3}return Se=$+Se,F={id:g++,callback:H,priorityLevel:F,startTime:$,expirationTime:Se,sortIndex:-1},$>me?(F.sortIndex=$,e(p,F),i(m)===null&&F===i(p)&&(w?(P(I),I=-1):w=!0,Y(O,$-me))):(F.sortIndex=Se,e(m,F),b||x||(b=!0,N||(N=!0,Z()))),F},a.unstable_shouldYield=q,a.unstable_wrapCallback=function(F){var H=_;return function(){var $=_;_=H;try{return F.apply(this,arguments)}finally{_=$}}}})(Rd)),Rd}var f_;function BM(){return f_||(f_=1,Ad.exports=FM()),Ad.exports}var Cd={exports:{}},Gn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var d_;function zM(){if(d_)return Gn;d_=1;var a=rp();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},o=Symbol.for("react.portal");function c(m,p,g){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:v==null?null:""+v,children:m,containerInfo:p,implementation:g}}var u=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Gn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Gn.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return c(m,p,null,g)},Gn.flushSync=function(m){var p=u.T,g=r.p;try{if(u.T=null,r.p=2,m)return m()}finally{u.T=p,r.p=g,r.d.f()}},Gn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},Gn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},Gn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,v=h(g,p.crossOrigin),_=typeof p.integrity=="string"?p.integrity:void 0,x=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:v,integrity:_,fetchPriority:x}):g==="script"&&r.d.X(m,{crossOrigin:v,integrity:_,fetchPriority:x,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Gn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=h(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},Gn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,v=h(g,p.crossOrigin);r.d.L(m,g,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Gn.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=h(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},Gn.requestFormReset=function(m){r.d.r(m)},Gn.unstable_batchedUpdates=function(m,p){return m(p)},Gn.useFormState=function(m,p,g){return u.H.useFormState(m,p,g)},Gn.useFormStatus=function(){return u.H.useHostTransitionStatus()},Gn.version="19.2.7",Gn}var h_;function Uv(){if(h_)return Cd.exports;h_=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(e){console.error(e)}}return a(),Cd.exports=zM(),Cd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var p_;function HM(){if(p_)return Jo;p_=1;var a=BM(),e=rp(),i=Uv();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)n+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,s=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(s=n.return),t=n.return;while(t)}return n.tag===3?s:null}function u(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function h(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(r(188))}function p(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(r(188));return n!==t?null:t}for(var s=t,l=n;;){var f=s.return;if(f===null)break;var d=f.alternate;if(d===null){if(l=f.return,l!==null){s=l;continue}break}if(f.child===d.child){for(d=f.child;d;){if(d===s)return m(f),t;if(d===l)return m(f),n;d=d.sibling}throw Error(r(188))}if(s.return!==l.return)s=f,l=d;else{for(var S=!1,R=f.child;R;){if(R===s){S=!0,s=f,l=d;break}if(R===l){S=!0,l=f,s=d;break}R=R.sibling}if(!S){for(R=d.child;R;){if(R===s){S=!0,s=d,l=f;break}if(R===l){S=!0,l=d,s=f;break}R=R.sibling}if(!S)throw Error(r(189))}}if(s.alternate!==l)throw Error(r(190))}if(s.tag!==3)throw Error(r(188));return s.stateNode.current===s?t:n}function g(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=g(t),n!==null)return n;t=t.sibling}return null}var v=Object.assign,_=Symbol.for("react.element"),x=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),w=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),M=Symbol.for("react.profiler"),P=Symbol.for("react.consumer"),z=Symbol.for("react.context"),C=Symbol.for("react.forward_ref"),O=Symbol.for("react.suspense"),N=Symbol.for("react.suspense_list"),I=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),D=Symbol.for("react.activity"),q=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function Z(t){return t===null||typeof t!="object"?null:(t=G&&t[G]||t["@@iterator"],typeof t=="function"?t:null)}var de=Symbol.for("react.client.reference");function oe(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===de?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case w:return"Fragment";case M:return"Profiler";case y:return"StrictMode";case O:return"Suspense";case N:return"SuspenseList";case D:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case b:return"Portal";case z:return t.displayName||"Context";case P:return(t._context.displayName||"Context")+".Consumer";case C:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case I:return n=t.displayName||null,n!==null?n:oe(t.type)||"Memo";case T:n=t._payload,t=t._init;try{return oe(t(n))}catch{}}return null}var Y=Array.isArray,F=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,$={pending:!1,data:null,method:null,action:null},me=[],Se=-1;function U(t){return{current:t}}function K(t){0>Se||(t.current=me[Se],me[Se]=null,Se--)}function xe(t,n){Se++,me[Se]=t.current,t.current=n}var Te=U(null),Ue=U(null),ie=U(null),ye=U(null);function Ee(t,n){switch(xe(ie,n),xe(Ue,t),xe(Te,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?wg(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=wg(n),t=Dg(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}K(Te),xe(Te,t)}function ze(){K(Te),K(Ue),K(ie)}function it(t){t.memoizedState!==null&&xe(ye,t);var n=Te.current,s=Dg(n,t.type);n!==s&&(xe(Ue,t),xe(Te,s))}function Je(t){Ue.current===t&&(K(Te),K(Ue)),ye.current===t&&(K(ye),Yo._currentValue=$)}var Zt,ut;function vt(t){if(Zt===void 0)try{throw Error()}catch(s){var n=s.stack.trim().match(/\n( *(at )?)/);Zt=n&&n[1]||"",ut=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Zt+t+ut}var Ye=!1;function Ze(t,n){if(!t||Ye)return"";Ye=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(n){var Me=function(){throw Error()};if(Object.defineProperty(Me.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Me,[])}catch(ue){var ce=ue}Reflect.construct(t,[],Me)}else{try{Me.call()}catch(ue){ce=ue}t.call(Me.prototype)}}else{try{throw Error()}catch(ue){ce=ue}(Me=t())&&typeof Me.catch=="function"&&Me.catch(function(){})}}catch(ue){if(ue&&ce&&typeof ue.stack=="string")return[ue.stack,ce.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=l.DetermineComponentFrameRoot(),S=d[0],R=d[1];if(S&&R){var V=S.split(`
`),ae=R.split(`
`);for(f=l=0;l<V.length&&!V[l].includes("DetermineComponentFrameRoot");)l++;for(;f<ae.length&&!ae[f].includes("DetermineComponentFrameRoot");)f++;if(l===V.length||f===ae.length)for(l=V.length-1,f=ae.length-1;1<=l&&0<=f&&V[l]!==ae[f];)f--;for(;1<=l&&0<=f;l--,f--)if(V[l]!==ae[f]){if(l!==1||f!==1)do if(l--,f--,0>f||V[l]!==ae[f]){var _e=`
`+V[l].replace(" at new "," at ");return t.displayName&&_e.includes("<anonymous>")&&(_e=_e.replace("<anonymous>",t.displayName)),_e}while(1<=l&&0<=f);break}}}finally{Ye=!1,Error.prepareStackTrace=s}return(s=t?t.displayName||t.name:"")?vt(s):""}function ot(t,n){switch(t.tag){case 26:case 27:case 5:return vt(t.type);case 16:return vt("Lazy");case 13:return t.child!==n&&n!==null?vt("Suspense Fallback"):vt("Suspense");case 19:return vt("SuspenseList");case 0:case 15:return Ze(t.type,!1);case 11:return Ze(t.type.render,!1);case 1:return Ze(t.type,!0);case 31:return vt("Activity");default:return""}}function mt(t){try{var n="",s=null;do n+=ot(t,s),s=t,t=t.return;while(t);return n}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var wt=Object.prototype.hasOwnProperty,Dt=a.unstable_scheduleCallback,ft=a.unstable_cancelCallback,_t=a.unstable_shouldYield,X=a.unstable_requestPaint,Mt=a.unstable_now,St=a.unstable_getCurrentPriorityLevel,L=a.unstable_ImmediatePriority,E=a.unstable_UserBlockingPriority,J=a.unstable_NormalPriority,te=a.unstable_LowPriority,fe=a.unstable_IdlePriority,Ce=a.log,De=a.unstable_setDisableYieldValue,he=null,pe=null;function Ae(t){if(typeof Ce=="function"&&De(t),pe&&typeof pe.setStrictMode=="function")try{pe.setStrictMode(he,t)}catch{}}var Be=Math.clz32?Math.clz32:$e,Ne=Math.log,Le=Math.LN2;function $e(t){return t>>>=0,t===0?32:31-(Ne(t)/Le|0)|0}var je=256,st=262144,W=4194304;function Re(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function ge(t,n,s){var l=t.pendingLanes;if(l===0)return 0;var f=0,d=t.suspendedLanes,S=t.pingedLanes;t=t.warmLanes;var R=l&134217727;return R!==0?(l=R&~d,l!==0?f=Re(l):(S&=R,S!==0?f=Re(S):s||(s=R&~t,s!==0&&(f=Re(s))))):(R=l&~d,R!==0?f=Re(R):S!==0?f=Re(S):s||(s=l&~t,s!==0&&(f=Re(s)))),f===0?0:n!==0&&n!==f&&(n&d)===0&&(d=f&-f,s=n&-n,d>=s||d===32&&(s&4194048)!==0)?n:f}function we(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function Pe(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function be(){var t=W;return W<<=1,(W&62914560)===0&&(W=4194304),t}function Xe(t){for(var n=[],s=0;31>s;s++)n.push(t);return n}function He(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Gt(t,n,s,l,f,d){var S=t.pendingLanes;t.pendingLanes=s,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=s,t.entangledLanes&=s,t.errorRecoveryDisabledLanes&=s,t.shellSuspendCounter=0;var R=t.entanglements,V=t.expirationTimes,ae=t.hiddenUpdates;for(s=S&~s;0<s;){var _e=31-Be(s),Me=1<<_e;R[_e]=0,V[_e]=-1;var ce=ae[_e];if(ce!==null)for(ae[_e]=null,_e=0;_e<ce.length;_e++){var ue=ce[_e];ue!==null&&(ue.lane&=-536870913)}s&=~Me}l!==0&&Lt(t,l,0),d!==0&&f===0&&t.tag!==0&&(t.suspendedLanes|=d&~(S&~n))}function Lt(t,n,s){t.pendingLanes|=n,t.suspendedLanes&=~n;var l=31-Be(n);t.entangledLanes|=n,t.entanglements[l]=t.entanglements[l]|1073741824|s&261930}function Wn(t,n){var s=t.entangledLanes|=n;for(t=t.entanglements;s;){var l=31-Be(s),f=1<<l;f&n|t[l]&n&&(t[l]|=n),s&=~f}}function zn(t,n){var s=n&-n;return s=(s&42)!==0?1:Fa(s),(s&(t.suspendedLanes|n))!==0?0:s}function Fa(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function mn(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Tn(){var t=H.p;return t!==0?t:(t=window.event,t===void 0?32:$g(t.type))}function si(t,n){var s=H.p;try{return H.p=t,n()}finally{H.p=s}}var gn=Math.random().toString(36).slice(2),Ot="__reactFiber$"+gn,en="__reactProps$"+gn,Dn="__reactContainer$"+gn,Qn="__reactEvents$"+gn,ys="__reactListeners$"+gn,Ba="__reactHandles$"+gn,Xi="__reactResources$"+gn,za="__reactMarker$"+gn;function Ha(t){delete t[Ot],delete t[en],delete t[Qn],delete t[ys],delete t[Ba]}function ra(t){var n=t[Ot];if(n)return n;for(var s=t.parentNode;s;){if(n=s[Dn]||s[Ot]){if(s=n.alternate,n.child!==null||s!==null&&s.child!==null)for(t=Fg(t);t!==null;){if(s=t[Ot])return s;t=Fg(t)}return n}t=s,s=t.parentNode}return null}function oa(t){if(t=t[Ot]||t[Dn]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function Es(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function Ga(t){var n=t[Xi];return n||(n=t[Xi]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function _n(t){t[za]=!0}var Sl=new Set,A={};function j(t,n){le(t,n),le(t+"Capture",n)}function le(t,n){for(A[t]=n,t=0;t<n.length;t++)Sl.add(n[t])}var se=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),re={},Ie={};function Ve(t){return wt.call(Ie,t)?!0:wt.call(re,t)?!1:se.test(t)?Ie[t]=!0:(re[t]=!0,!1)}function Oe(t,n,s){if(Ve(n))if(s===null)t.removeAttribute(n);else{switch(typeof s){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var l=n.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+s)}}function We(t,n,s){if(s===null)t.removeAttribute(n);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+s)}}function ke(t,n,s,l){if(l===null)t.removeAttribute(s);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(s);return}t.setAttributeNS(n,s,""+l)}}function tt(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function dt(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function et(t,n,s){var l=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var f=l.get,d=l.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return f.call(this)},set:function(S){s=""+S,d.call(this,S)}}),Object.defineProperty(t,n,{enumerable:l.enumerable}),{getValue:function(){return s},setValue:function(S){s=""+S},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Pt(t){if(!t._valueTracker){var n=dt(t)?"checked":"value";t._valueTracker=et(t,n,""+t[n])}}function sn(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var s=n.getValue(),l="";return t&&(l=dt(t)?t.checked?"true":"false":t.value),t=l,t!==s?(n.setValue(t),!0):!1}function Jt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Vt=/[\n"\\]/g;function kt(t){return t.replace(Vt,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Ge(t,n,s,l,f,d,S,R){t.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?t.type=S:t.removeAttribute("type"),n!=null?S==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+tt(n)):t.value!==""+tt(n)&&(t.value=""+tt(n)):S!=="submit"&&S!=="reset"||t.removeAttribute("value"),n!=null?yt(t,S,tt(n)):s!=null?yt(t,S,tt(s)):l!=null&&t.removeAttribute("value"),f==null&&d!=null&&(t.defaultChecked=!!d),f!=null&&(t.checked=f&&typeof f!="function"&&typeof f!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?t.name=""+tt(R):t.removeAttribute("name")}function Hn(t,n,s,l,f,d,S,R){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(t.type=d),n!=null||s!=null){if(!(d!=="submit"&&d!=="reset"||n!=null)){Pt(t);return}s=s!=null?""+tt(s):"",n=n!=null?""+tt(n):s,R||n===t.value||(t.value=n),t.defaultValue=n}l=l??f,l=typeof l!="function"&&typeof l!="symbol"&&!!l,t.checked=R?t.checked:!!l,t.defaultChecked=!!l,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(t.name=S),Pt(t)}function yt(t,n,s){n==="number"&&Jt(t.ownerDocument)===t||t.defaultValue===""+s||(t.defaultValue=""+s)}function An(t,n,s,l){if(t=t.options,n){n={};for(var f=0;f<s.length;f++)n["$"+s[f]]=!0;for(s=0;s<t.length;s++)f=n.hasOwnProperty("$"+t[s].value),t[s].selected!==f&&(t[s].selected=f),f&&l&&(t[s].defaultSelected=!0)}else{for(s=""+tt(s),n=null,f=0;f<t.length;f++){if(t[f].value===s){t[f].selected=!0,l&&(t[f].defaultSelected=!0);return}n!==null||t[f].disabled||(n=t[f])}n!==null&&(n.selected=!0)}}function ri(t,n,s){if(n!=null&&(n=""+tt(n),n!==t.value&&(t.value=n),s==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=s!=null?""+tt(s):""}function Li(t,n,s,l){if(n==null){if(l!=null){if(s!=null)throw Error(r(92));if(Y(l)){if(1<l.length)throw Error(r(93));l=l[0]}s=l}s==null&&(s=""),n=s}s=tt(n),t.defaultValue=s,l=t.textContent,l===s&&l!==""&&l!==null&&(t.value=l),Pt(t)}function oi(t,n){if(n){var s=t.firstChild;if(s&&s===t.lastChild&&s.nodeType===3){s.nodeValue=n;return}}t.textContent=n}var Xt=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function rn(t,n,s){var l=n.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?l?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":l?t.setProperty(n,s):typeof s!="number"||s===0||Xt.has(n)?n==="float"?t.cssFloat=s:t[n]=(""+s).trim():t[n]=s+"px"}function Ui(t,n,s){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,s!=null){for(var l in s)!s.hasOwnProperty(l)||n!=null&&n.hasOwnProperty(l)||(l.indexOf("--")===0?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="");for(var f in n)l=n[f],n.hasOwnProperty(f)&&s[f]!==l&&rn(t,f,l)}else for(var d in n)n.hasOwnProperty(d)&&rn(t,d,n[d])}function Ht(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Wi=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Va=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function bs(t){return Va.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function la(){}var Su=null;function xu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var nr=null,ir=null;function Cp(t){var n=oa(t);if(n&&(t=n.stateNode)){var s=t[en]||null;e:switch(t=n.stateNode,n.type){case"input":if(Ge(t,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),n=s.name,s.type==="radio"&&n!=null){for(s=t;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+kt(""+n)+'"][type="radio"]'),n=0;n<s.length;n++){var l=s[n];if(l!==t&&l.form===t.form){var f=l[en]||null;if(!f)throw Error(r(90));Ge(l,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(n=0;n<s.length;n++)l=s[n],l.form===t.form&&sn(l)}break e;case"textarea":ri(t,s.value,s.defaultValue);break e;case"select":n=s.value,n!=null&&An(t,!!s.multiple,n,!1)}}}var Mu=!1;function wp(t,n,s){if(Mu)return t(n,s);Mu=!0;try{var l=t(n);return l}finally{if(Mu=!1,(nr!==null||ir!==null)&&(rc(),nr&&(n=nr,t=ir,ir=nr=null,Cp(n),t)))for(n=0;n<t.length;n++)Cp(t[n])}}function co(t,n){var s=t.stateNode;if(s===null)return null;var l=s[en]||null;if(l===null)return null;s=l[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(s&&typeof s!="function")throw Error(r(231,n,typeof s));return s}var ca=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),yu=!1;if(ca)try{var uo={};Object.defineProperty(uo,"passive",{get:function(){yu=!0}}),window.addEventListener("test",uo,uo),window.removeEventListener("test",uo,uo)}catch{yu=!1}var ka=null,Eu=null,xl=null;function Dp(){if(xl)return xl;var t,n=Eu,s=n.length,l,f="value"in ka?ka.value:ka.textContent,d=f.length;for(t=0;t<s&&n[t]===f[t];t++);var S=s-t;for(l=1;l<=S&&n[s-l]===f[d-l];l++);return xl=f.slice(t,1<l?1-l:void 0)}function Ml(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function yl(){return!0}function Np(){return!1}function Jn(t){function n(s,l,f,d,S){this._reactName=s,this._targetInst=f,this.type=l,this.nativeEvent=d,this.target=S,this.currentTarget=null;for(var R in t)t.hasOwnProperty(R)&&(s=t[R],this[R]=s?s(d):d[R]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?yl:Np,this.isPropagationStopped=Np,this}return v(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=yl)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=yl)},persist:function(){},isPersistent:yl}),n}var Ts={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},El=Jn(Ts),fo=v({},Ts,{view:0,detail:0}),LS=Jn(fo),bu,Tu,ho,bl=v({},fo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ru,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ho&&(ho&&t.type==="mousemove"?(bu=t.screenX-ho.screenX,Tu=t.screenY-ho.screenY):Tu=bu=0,ho=t),bu)},movementY:function(t){return"movementY"in t?t.movementY:Tu}}),Lp=Jn(bl),US=v({},bl,{dataTransfer:0}),OS=Jn(US),PS=v({},fo,{relatedTarget:0}),Au=Jn(PS),IS=v({},Ts,{animationName:0,elapsedTime:0,pseudoElement:0}),FS=Jn(IS),BS=v({},Ts,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),zS=Jn(BS),HS=v({},Ts,{data:0}),Up=Jn(HS),GS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},VS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},kS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function XS(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=kS[t])?!!n[t]:!1}function Ru(){return XS}var WS=v({},fo,{key:function(t){if(t.key){var n=GS[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Ml(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?VS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ru,charCode:function(t){return t.type==="keypress"?Ml(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ml(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),qS=Jn(WS),YS=v({},bl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Op=Jn(YS),ZS=v({},fo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ru}),jS=Jn(ZS),KS=v({},Ts,{propertyName:0,elapsedTime:0,pseudoElement:0}),QS=Jn(KS),JS=v({},bl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),$S=Jn(JS),ex=v({},Ts,{newState:0,oldState:0}),tx=Jn(ex),nx=[9,13,27,32],Cu=ca&&"CompositionEvent"in window,po=null;ca&&"documentMode"in document&&(po=document.documentMode);var ix=ca&&"TextEvent"in window&&!po,Pp=ca&&(!Cu||po&&8<po&&11>=po),Ip=" ",Fp=!1;function Bp(t,n){switch(t){case"keyup":return nx.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function zp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ar=!1;function ax(t,n){switch(t){case"compositionend":return zp(n);case"keypress":return n.which!==32?null:(Fp=!0,Ip);case"textInput":return t=n.data,t===Ip&&Fp?null:t;default:return null}}function sx(t,n){if(ar)return t==="compositionend"||!Cu&&Bp(t,n)?(t=Dp(),xl=Eu=ka=null,ar=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Pp&&n.locale!=="ko"?null:n.data;default:return null}}var rx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Hp(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!rx[t.type]:n==="textarea"}function Gp(t,n,s,l){nr?ir?ir.push(l):ir=[l]:nr=l,n=hc(n,"onChange"),0<n.length&&(s=new El("onChange","change",null,s,l),t.push({event:s,listeners:n}))}var mo=null,go=null;function ox(t){Eg(t,0)}function Tl(t){var n=Es(t);if(sn(n))return t}function Vp(t,n){if(t==="change")return n}var kp=!1;if(ca){var wu;if(ca){var Du="oninput"in document;if(!Du){var Xp=document.createElement("div");Xp.setAttribute("oninput","return;"),Du=typeof Xp.oninput=="function"}wu=Du}else wu=!1;kp=wu&&(!document.documentMode||9<document.documentMode)}function Wp(){mo&&(mo.detachEvent("onpropertychange",qp),go=mo=null)}function qp(t){if(t.propertyName==="value"&&Tl(go)){var n=[];Gp(n,go,t,xu(t)),wp(ox,n)}}function lx(t,n,s){t==="focusin"?(Wp(),mo=n,go=s,mo.attachEvent("onpropertychange",qp)):t==="focusout"&&Wp()}function cx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Tl(go)}function ux(t,n){if(t==="click")return Tl(n)}function fx(t,n){if(t==="input"||t==="change")return Tl(n)}function dx(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var li=typeof Object.is=="function"?Object.is:dx;function _o(t,n){if(li(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var s=Object.keys(t),l=Object.keys(n);if(s.length!==l.length)return!1;for(l=0;l<s.length;l++){var f=s[l];if(!wt.call(n,f)||!li(t[f],n[f]))return!1}return!0}function Yp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Zp(t,n){var s=Yp(t);t=0;for(var l;s;){if(s.nodeType===3){if(l=t+s.textContent.length,t<=n&&l>=n)return{node:s,offset:n-t};t=l}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=Yp(s)}}function jp(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?jp(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Kp(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=Jt(t.document);n instanceof t.HTMLIFrameElement;){try{var s=typeof n.contentWindow.location.href=="string"}catch{s=!1}if(s)t=n.contentWindow;else break;n=Jt(t.document)}return n}function Nu(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var hx=ca&&"documentMode"in document&&11>=document.documentMode,sr=null,Lu=null,vo=null,Uu=!1;function Qp(t,n,s){var l=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;Uu||sr==null||sr!==Jt(l)||(l=sr,"selectionStart"in l&&Nu(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),vo&&_o(vo,l)||(vo=l,l=hc(Lu,"onSelect"),0<l.length&&(n=new El("onSelect","select",null,n,s),t.push({event:n,listeners:l}),n.target=sr)))}function As(t,n){var s={};return s[t.toLowerCase()]=n.toLowerCase(),s["Webkit"+t]="webkit"+n,s["Moz"+t]="moz"+n,s}var rr={animationend:As("Animation","AnimationEnd"),animationiteration:As("Animation","AnimationIteration"),animationstart:As("Animation","AnimationStart"),transitionrun:As("Transition","TransitionRun"),transitionstart:As("Transition","TransitionStart"),transitioncancel:As("Transition","TransitionCancel"),transitionend:As("Transition","TransitionEnd")},Ou={},Jp={};ca&&(Jp=document.createElement("div").style,"AnimationEvent"in window||(delete rr.animationend.animation,delete rr.animationiteration.animation,delete rr.animationstart.animation),"TransitionEvent"in window||delete rr.transitionend.transition);function Rs(t){if(Ou[t])return Ou[t];if(!rr[t])return t;var n=rr[t],s;for(s in n)if(n.hasOwnProperty(s)&&s in Jp)return Ou[t]=n[s];return t}var $p=Rs("animationend"),em=Rs("animationiteration"),tm=Rs("animationstart"),px=Rs("transitionrun"),mx=Rs("transitionstart"),gx=Rs("transitioncancel"),nm=Rs("transitionend"),im=new Map,Pu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Pu.push("scrollEnd");function Oi(t,n){im.set(t,n),j(n,[t])}var Al=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},vi=[],or=0,Iu=0;function Rl(){for(var t=or,n=Iu=or=0;n<t;){var s=vi[n];vi[n++]=null;var l=vi[n];vi[n++]=null;var f=vi[n];vi[n++]=null;var d=vi[n];if(vi[n++]=null,l!==null&&f!==null){var S=l.pending;S===null?f.next=f:(f.next=S.next,S.next=f),l.pending=f}d!==0&&am(s,f,d)}}function Cl(t,n,s,l){vi[or++]=t,vi[or++]=n,vi[or++]=s,vi[or++]=l,Iu|=l,t.lanes|=l,t=t.alternate,t!==null&&(t.lanes|=l)}function Fu(t,n,s,l){return Cl(t,n,s,l),wl(t)}function Cs(t,n){return Cl(t,null,null,n),wl(t)}function am(t,n,s){t.lanes|=s;var l=t.alternate;l!==null&&(l.lanes|=s);for(var f=!1,d=t.return;d!==null;)d.childLanes|=s,l=d.alternate,l!==null&&(l.childLanes|=s),d.tag===22&&(t=d.stateNode,t===null||t._visibility&1||(f=!0)),t=d,d=d.return;return t.tag===3?(d=t.stateNode,f&&n!==null&&(f=31-Be(s),t=d.hiddenUpdates,l=t[f],l===null?t[f]=[n]:l.push(n),n.lane=s|536870912),d):null}function wl(t){if(50<Ho)throw Ho=0,Yf=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var lr={};function _x(t,n,s,l){this.tag=t,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ci(t,n,s,l){return new _x(t,n,s,l)}function Bu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ua(t,n){var s=t.alternate;return s===null?(s=ci(t.tag,n,t.key,t.mode),s.elementType=t.elementType,s.type=t.type,s.stateNode=t.stateNode,s.alternate=t,t.alternate=s):(s.pendingProps=n,s.type=t.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=t.flags&65011712,s.childLanes=t.childLanes,s.lanes=t.lanes,s.child=t.child,s.memoizedProps=t.memoizedProps,s.memoizedState=t.memoizedState,s.updateQueue=t.updateQueue,n=t.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},s.sibling=t.sibling,s.index=t.index,s.ref=t.ref,s.refCleanup=t.refCleanup,s}function sm(t,n){t.flags&=65011714;var s=t.alternate;return s===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=s.childLanes,t.lanes=s.lanes,t.child=s.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=s.memoizedProps,t.memoizedState=s.memoizedState,t.updateQueue=s.updateQueue,t.type=s.type,n=s.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function Dl(t,n,s,l,f,d){var S=0;if(l=t,typeof t=="function")Bu(t)&&(S=1);else if(typeof t=="string")S=yM(t,s,Te.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case D:return t=ci(31,s,n,f),t.elementType=D,t.lanes=d,t;case w:return ws(s.children,f,d,n);case y:S=8,f|=24;break;case M:return t=ci(12,s,n,f|2),t.elementType=M,t.lanes=d,t;case O:return t=ci(13,s,n,f),t.elementType=O,t.lanes=d,t;case N:return t=ci(19,s,n,f),t.elementType=N,t.lanes=d,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case z:S=10;break e;case P:S=9;break e;case C:S=11;break e;case I:S=14;break e;case T:S=16,l=null;break e}S=29,s=Error(r(130,t===null?"null":typeof t,"")),l=null}return n=ci(S,s,n,f),n.elementType=t,n.type=l,n.lanes=d,n}function ws(t,n,s,l){return t=ci(7,t,l,n),t.lanes=s,t}function zu(t,n,s){return t=ci(6,t,null,n),t.lanes=s,t}function rm(t){var n=ci(18,null,null,0);return n.stateNode=t,n}function Hu(t,n,s){return n=ci(4,t.children!==null?t.children:[],t.key,n),n.lanes=s,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var om=new WeakMap;function Si(t,n){if(typeof t=="object"&&t!==null){var s=om.get(t);return s!==void 0?s:(n={value:t,source:n,stack:mt(n)},om.set(t,n),n)}return{value:t,source:n,stack:mt(n)}}var cr=[],ur=0,Nl=null,So=0,xi=[],Mi=0,Xa=null,qi=1,Yi="";function fa(t,n){cr[ur++]=So,cr[ur++]=Nl,Nl=t,So=n}function lm(t,n,s){xi[Mi++]=qi,xi[Mi++]=Yi,xi[Mi++]=Xa,Xa=t;var l=qi;t=Yi;var f=32-Be(l)-1;l&=~(1<<f),s+=1;var d=32-Be(n)+f;if(30<d){var S=f-f%5;d=(l&(1<<S)-1).toString(32),l>>=S,f-=S,qi=1<<32-Be(n)+f|s<<f|l,Yi=d+t}else qi=1<<d|s<<f|l,Yi=t}function Gu(t){t.return!==null&&(fa(t,1),lm(t,1,0))}function Vu(t){for(;t===Nl;)Nl=cr[--ur],cr[ur]=null,So=cr[--ur],cr[ur]=null;for(;t===Xa;)Xa=xi[--Mi],xi[Mi]=null,Yi=xi[--Mi],xi[Mi]=null,qi=xi[--Mi],xi[Mi]=null}function cm(t,n){xi[Mi++]=qi,xi[Mi++]=Yi,xi[Mi++]=Xa,qi=n.id,Yi=n.overflow,Xa=t}var On=null,tn=null,Rt=!1,Wa=null,yi=!1,ku=Error(r(519));function qa(t){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw xo(Si(n,t)),ku}function um(t){var n=t.stateNode,s=t.type,l=t.memoizedProps;switch(n[Ot]=t,n[en]=l,s){case"dialog":bt("cancel",n),bt("close",n);break;case"iframe":case"object":case"embed":bt("load",n);break;case"video":case"audio":for(s=0;s<Vo.length;s++)bt(Vo[s],n);break;case"source":bt("error",n);break;case"img":case"image":case"link":bt("error",n),bt("load",n);break;case"details":bt("toggle",n);break;case"input":bt("invalid",n),Hn(n,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":bt("invalid",n);break;case"textarea":bt("invalid",n),Li(n,l.value,l.defaultValue,l.children)}s=l.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||n.textContent===""+s||l.suppressHydrationWarning===!0||Rg(n.textContent,s)?(l.popover!=null&&(bt("beforetoggle",n),bt("toggle",n)),l.onScroll!=null&&bt("scroll",n),l.onScrollEnd!=null&&bt("scrollend",n),l.onClick!=null&&(n.onclick=la),n=!0):n=!1,n||qa(t,!0)}function fm(t){for(On=t.return;On;)switch(On.tag){case 5:case 31:case 13:yi=!1;return;case 27:case 3:yi=!0;return;default:On=On.return}}function fr(t){if(t!==On)return!1;if(!Rt)return fm(t),Rt=!0,!1;var n=t.tag,s;if((s=n!==3&&n!==27)&&((s=n===5)&&(s=t.type,s=!(s!=="form"&&s!=="button")||ld(t.type,t.memoizedProps)),s=!s),s&&tn&&qa(t),fm(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));tn=Ig(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));tn=Ig(t)}else n===27?(n=tn,rs(t.type)?(t=hd,hd=null,tn=t):tn=n):tn=On?bi(t.stateNode.nextSibling):null;return!0}function Ds(){tn=On=null,Rt=!1}function Xu(){var t=Wa;return t!==null&&(ni===null?ni=t:ni.push.apply(ni,t),Wa=null),t}function xo(t){Wa===null?Wa=[t]:Wa.push(t)}var Wu=U(null),Ns=null,da=null;function Ya(t,n,s){xe(Wu,n._currentValue),n._currentValue=s}function ha(t){t._currentValue=Wu.current,K(Wu)}function qu(t,n,s){for(;t!==null;){var l=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,l!==null&&(l.childLanes|=n)):l!==null&&(l.childLanes&n)!==n&&(l.childLanes|=n),t===s)break;t=t.return}}function Yu(t,n,s,l){var f=t.child;for(f!==null&&(f.return=t);f!==null;){var d=f.dependencies;if(d!==null){var S=f.child;d=d.firstContext;e:for(;d!==null;){var R=d;d=f;for(var V=0;V<n.length;V++)if(R.context===n[V]){d.lanes|=s,R=d.alternate,R!==null&&(R.lanes|=s),qu(d.return,s,t),l||(S=null);break e}d=R.next}}else if(f.tag===18){if(S=f.return,S===null)throw Error(r(341));S.lanes|=s,d=S.alternate,d!==null&&(d.lanes|=s),qu(S,s,t),S=null}else S=f.child;if(S!==null)S.return=f;else for(S=f;S!==null;){if(S===t){S=null;break}if(f=S.sibling,f!==null){f.return=S.return,S=f;break}S=S.return}f=S}}function dr(t,n,s,l){t=null;for(var f=n,d=!1;f!==null;){if(!d){if((f.flags&524288)!==0)d=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var S=f.alternate;if(S===null)throw Error(r(387));if(S=S.memoizedProps,S!==null){var R=f.type;li(f.pendingProps.value,S.value)||(t!==null?t.push(R):t=[R])}}else if(f===ye.current){if(S=f.alternate,S===null)throw Error(r(387));S.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(t!==null?t.push(Yo):t=[Yo])}f=f.return}t!==null&&Yu(n,t,s,l),n.flags|=262144}function Ll(t){for(t=t.firstContext;t!==null;){if(!li(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Ls(t){Ns=t,da=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Pn(t){return dm(Ns,t)}function Ul(t,n){return Ns===null&&Ls(t),dm(t,n)}function dm(t,n){var s=n._currentValue;if(n={context:n,memoizedValue:s,next:null},da===null){if(t===null)throw Error(r(308));da=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else da=da.next=n;return s}var vx=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(s,l){t.push(l)}};this.abort=function(){n.aborted=!0,t.forEach(function(s){return s()})}},Sx=a.unstable_scheduleCallback,xx=a.unstable_NormalPriority,vn={$$typeof:z,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Zu(){return{controller:new vx,data:new Map,refCount:0}}function Mo(t){t.refCount--,t.refCount===0&&Sx(xx,function(){t.controller.abort()})}var yo=null,ju=0,hr=0,pr=null;function Mx(t,n){if(yo===null){var s=yo=[];ju=0,hr=$f(),pr={status:"pending",value:void 0,then:function(l){s.push(l)}}}return ju++,n.then(hm,hm),n}function hm(){if(--ju===0&&yo!==null){pr!==null&&(pr.status="fulfilled");var t=yo;yo=null,hr=0,pr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function yx(t,n){var s=[],l={status:"pending",value:null,reason:null,then:function(f){s.push(f)}};return t.then(function(){l.status="fulfilled",l.value=n;for(var f=0;f<s.length;f++)(0,s[f])(n)},function(f){for(l.status="rejected",l.reason=f,f=0;f<s.length;f++)(0,s[f])(void 0)}),l}var pm=F.S;F.S=function(t,n){Q0=Mt(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Mx(t,n),pm!==null&&pm(t,n)};var Us=U(null);function Ku(){var t=Us.current;return t!==null?t:$t.pooledCache}function Ol(t,n){n===null?xe(Us,Us.current):xe(Us,n.pool)}function mm(){var t=Ku();return t===null?null:{parent:vn._currentValue,pool:t}}var mr=Error(r(460)),Qu=Error(r(474)),Pl=Error(r(542)),Il={then:function(){}};function gm(t){return t=t.status,t==="fulfilled"||t==="rejected"}function _m(t,n,s){switch(s=t[s],s===void 0?t.push(n):s!==n&&(n.then(la,la),n=s),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Sm(t),t;default:if(typeof n.status=="string")n.then(la,la);else{if(t=$t,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(l){if(n.status==="pending"){var f=n;f.status="fulfilled",f.value=l}},function(l){if(n.status==="pending"){var f=n;f.status="rejected",f.reason=l}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Sm(t),t}throw Ps=n,mr}}function Os(t){try{var n=t._init;return n(t._payload)}catch(s){throw s!==null&&typeof s=="object"&&typeof s.then=="function"?(Ps=s,mr):s}}var Ps=null;function vm(){if(Ps===null)throw Error(r(459));var t=Ps;return Ps=null,t}function Sm(t){if(t===mr||t===Pl)throw Error(r(483))}var gr=null,Eo=0;function Fl(t){var n=Eo;return Eo+=1,gr===null&&(gr=[]),_m(gr,t,n)}function bo(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Bl(t,n){throw n.$$typeof===_?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function xm(t){function n(Q,k){if(t){var ne=Q.deletions;ne===null?(Q.deletions=[k],Q.flags|=16):ne.push(k)}}function s(Q,k){if(!t)return null;for(;k!==null;)n(Q,k),k=k.sibling;return null}function l(Q){for(var k=new Map;Q!==null;)Q.key!==null?k.set(Q.key,Q):k.set(Q.index,Q),Q=Q.sibling;return k}function f(Q,k){return Q=ua(Q,k),Q.index=0,Q.sibling=null,Q}function d(Q,k,ne){return Q.index=ne,t?(ne=Q.alternate,ne!==null?(ne=ne.index,ne<k?(Q.flags|=67108866,k):ne):(Q.flags|=67108866,k)):(Q.flags|=1048576,k)}function S(Q){return t&&Q.alternate===null&&(Q.flags|=67108866),Q}function R(Q,k,ne,ve){return k===null||k.tag!==6?(k=zu(ne,Q.mode,ve),k.return=Q,k):(k=f(k,ne),k.return=Q,k)}function V(Q,k,ne,ve){var nt=ne.type;return nt===w?_e(Q,k,ne.props.children,ve,ne.key):k!==null&&(k.elementType===nt||typeof nt=="object"&&nt!==null&&nt.$$typeof===T&&Os(nt)===k.type)?(k=f(k,ne.props),bo(k,ne),k.return=Q,k):(k=Dl(ne.type,ne.key,ne.props,null,Q.mode,ve),bo(k,ne),k.return=Q,k)}function ae(Q,k,ne,ve){return k===null||k.tag!==4||k.stateNode.containerInfo!==ne.containerInfo||k.stateNode.implementation!==ne.implementation?(k=Hu(ne,Q.mode,ve),k.return=Q,k):(k=f(k,ne.children||[]),k.return=Q,k)}function _e(Q,k,ne,ve,nt){return k===null||k.tag!==7?(k=ws(ne,Q.mode,ve,nt),k.return=Q,k):(k=f(k,ne),k.return=Q,k)}function Me(Q,k,ne){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=zu(""+k,Q.mode,ne),k.return=Q,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case x:return ne=Dl(k.type,k.key,k.props,null,Q.mode,ne),bo(ne,k),ne.return=Q,ne;case b:return k=Hu(k,Q.mode,ne),k.return=Q,k;case T:return k=Os(k),Me(Q,k,ne)}if(Y(k)||Z(k))return k=ws(k,Q.mode,ne,null),k.return=Q,k;if(typeof k.then=="function")return Me(Q,Fl(k),ne);if(k.$$typeof===z)return Me(Q,Ul(Q,k),ne);Bl(Q,k)}return null}function ce(Q,k,ne,ve){var nt=k!==null?k.key:null;if(typeof ne=="string"&&ne!==""||typeof ne=="number"||typeof ne=="bigint")return nt!==null?null:R(Q,k,""+ne,ve);if(typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case x:return ne.key===nt?V(Q,k,ne,ve):null;case b:return ne.key===nt?ae(Q,k,ne,ve):null;case T:return ne=Os(ne),ce(Q,k,ne,ve)}if(Y(ne)||Z(ne))return nt!==null?null:_e(Q,k,ne,ve,null);if(typeof ne.then=="function")return ce(Q,k,Fl(ne),ve);if(ne.$$typeof===z)return ce(Q,k,Ul(Q,ne),ve);Bl(Q,ne)}return null}function ue(Q,k,ne,ve,nt){if(typeof ve=="string"&&ve!==""||typeof ve=="number"||typeof ve=="bigint")return Q=Q.get(ne)||null,R(k,Q,""+ve,nt);if(typeof ve=="object"&&ve!==null){switch(ve.$$typeof){case x:return Q=Q.get(ve.key===null?ne:ve.key)||null,V(k,Q,ve,nt);case b:return Q=Q.get(ve.key===null?ne:ve.key)||null,ae(k,Q,ve,nt);case T:return ve=Os(ve),ue(Q,k,ne,ve,nt)}if(Y(ve)||Z(ve))return Q=Q.get(ne)||null,_e(k,Q,ve,nt,null);if(typeof ve.then=="function")return ue(Q,k,ne,Fl(ve),nt);if(ve.$$typeof===z)return ue(Q,k,ne,Ul(k,ve),nt);Bl(k,ve)}return null}function qe(Q,k,ne,ve){for(var nt=null,It=null,Ke=k,pt=k=0,At=null;Ke!==null&&pt<ne.length;pt++){Ke.index>pt?(At=Ke,Ke=null):At=Ke.sibling;var Ft=ce(Q,Ke,ne[pt],ve);if(Ft===null){Ke===null&&(Ke=At);break}t&&Ke&&Ft.alternate===null&&n(Q,Ke),k=d(Ft,k,pt),It===null?nt=Ft:It.sibling=Ft,It=Ft,Ke=At}if(pt===ne.length)return s(Q,Ke),Rt&&fa(Q,pt),nt;if(Ke===null){for(;pt<ne.length;pt++)Ke=Me(Q,ne[pt],ve),Ke!==null&&(k=d(Ke,k,pt),It===null?nt=Ke:It.sibling=Ke,It=Ke);return Rt&&fa(Q,pt),nt}for(Ke=l(Ke);pt<ne.length;pt++)At=ue(Ke,Q,pt,ne[pt],ve),At!==null&&(t&&At.alternate!==null&&Ke.delete(At.key===null?pt:At.key),k=d(At,k,pt),It===null?nt=At:It.sibling=At,It=At);return t&&Ke.forEach(function(fs){return n(Q,fs)}),Rt&&fa(Q,pt),nt}function at(Q,k,ne,ve){if(ne==null)throw Error(r(151));for(var nt=null,It=null,Ke=k,pt=k=0,At=null,Ft=ne.next();Ke!==null&&!Ft.done;pt++,Ft=ne.next()){Ke.index>pt?(At=Ke,Ke=null):At=Ke.sibling;var fs=ce(Q,Ke,Ft.value,ve);if(fs===null){Ke===null&&(Ke=At);break}t&&Ke&&fs.alternate===null&&n(Q,Ke),k=d(fs,k,pt),It===null?nt=fs:It.sibling=fs,It=fs,Ke=At}if(Ft.done)return s(Q,Ke),Rt&&fa(Q,pt),nt;if(Ke===null){for(;!Ft.done;pt++,Ft=ne.next())Ft=Me(Q,Ft.value,ve),Ft!==null&&(k=d(Ft,k,pt),It===null?nt=Ft:It.sibling=Ft,It=Ft);return Rt&&fa(Q,pt),nt}for(Ke=l(Ke);!Ft.done;pt++,Ft=ne.next())Ft=ue(Ke,Q,pt,Ft.value,ve),Ft!==null&&(t&&Ft.alternate!==null&&Ke.delete(Ft.key===null?pt:Ft.key),k=d(Ft,k,pt),It===null?nt=Ft:It.sibling=Ft,It=Ft);return t&&Ke.forEach(function(UM){return n(Q,UM)}),Rt&&fa(Q,pt),nt}function Qt(Q,k,ne,ve){if(typeof ne=="object"&&ne!==null&&ne.type===w&&ne.key===null&&(ne=ne.props.children),typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case x:e:{for(var nt=ne.key;k!==null;){if(k.key===nt){if(nt=ne.type,nt===w){if(k.tag===7){s(Q,k.sibling),ve=f(k,ne.props.children),ve.return=Q,Q=ve;break e}}else if(k.elementType===nt||typeof nt=="object"&&nt!==null&&nt.$$typeof===T&&Os(nt)===k.type){s(Q,k.sibling),ve=f(k,ne.props),bo(ve,ne),ve.return=Q,Q=ve;break e}s(Q,k);break}else n(Q,k);k=k.sibling}ne.type===w?(ve=ws(ne.props.children,Q.mode,ve,ne.key),ve.return=Q,Q=ve):(ve=Dl(ne.type,ne.key,ne.props,null,Q.mode,ve),bo(ve,ne),ve.return=Q,Q=ve)}return S(Q);case b:e:{for(nt=ne.key;k!==null;){if(k.key===nt)if(k.tag===4&&k.stateNode.containerInfo===ne.containerInfo&&k.stateNode.implementation===ne.implementation){s(Q,k.sibling),ve=f(k,ne.children||[]),ve.return=Q,Q=ve;break e}else{s(Q,k);break}else n(Q,k);k=k.sibling}ve=Hu(ne,Q.mode,ve),ve.return=Q,Q=ve}return S(Q);case T:return ne=Os(ne),Qt(Q,k,ne,ve)}if(Y(ne))return qe(Q,k,ne,ve);if(Z(ne)){if(nt=Z(ne),typeof nt!="function")throw Error(r(150));return ne=nt.call(ne),at(Q,k,ne,ve)}if(typeof ne.then=="function")return Qt(Q,k,Fl(ne),ve);if(ne.$$typeof===z)return Qt(Q,k,Ul(Q,ne),ve);Bl(Q,ne)}return typeof ne=="string"&&ne!==""||typeof ne=="number"||typeof ne=="bigint"?(ne=""+ne,k!==null&&k.tag===6?(s(Q,k.sibling),ve=f(k,ne),ve.return=Q,Q=ve):(s(Q,k),ve=zu(ne,Q.mode,ve),ve.return=Q,Q=ve),S(Q)):s(Q,k)}return function(Q,k,ne,ve){try{Eo=0;var nt=Qt(Q,k,ne,ve);return gr=null,nt}catch(Ke){if(Ke===mr||Ke===Pl)throw Ke;var It=ci(29,Ke,null,Q.mode);return It.lanes=ve,It.return=Q,It}finally{}}}var Is=xm(!0),Mm=xm(!1),Za=!1;function Ju(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function $u(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function ja(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ka(t,n,s){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(zt&2)!==0){var f=l.pending;return f===null?n.next=n:(n.next=f.next,f.next=n),l.pending=n,n=wl(t),am(t,null,s),n}return Cl(t,l,n,s),wl(t)}function To(t,n,s){if(n=n.updateQueue,n!==null&&(n=n.shared,(s&4194048)!==0)){var l=n.lanes;l&=t.pendingLanes,s|=l,n.lanes=s,Wn(t,s)}}function ef(t,n){var s=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,s===l)){var f=null,d=null;if(s=s.firstBaseUpdate,s!==null){do{var S={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};d===null?f=d=S:d=d.next=S,s=s.next}while(s!==null);d===null?f=d=n:d=d.next=n}else f=d=n;s={baseState:l.baseState,firstBaseUpdate:f,lastBaseUpdate:d,shared:l.shared,callbacks:l.callbacks},t.updateQueue=s;return}t=s.lastBaseUpdate,t===null?s.firstBaseUpdate=n:t.next=n,s.lastBaseUpdate=n}var tf=!1;function Ao(){if(tf){var t=pr;if(t!==null)throw t}}function Ro(t,n,s,l){tf=!1;var f=t.updateQueue;Za=!1;var d=f.firstBaseUpdate,S=f.lastBaseUpdate,R=f.shared.pending;if(R!==null){f.shared.pending=null;var V=R,ae=V.next;V.next=null,S===null?d=ae:S.next=ae,S=V;var _e=t.alternate;_e!==null&&(_e=_e.updateQueue,R=_e.lastBaseUpdate,R!==S&&(R===null?_e.firstBaseUpdate=ae:R.next=ae,_e.lastBaseUpdate=V))}if(d!==null){var Me=f.baseState;S=0,_e=ae=V=null,R=d;do{var ce=R.lane&-536870913,ue=ce!==R.lane;if(ue?(Tt&ce)===ce:(l&ce)===ce){ce!==0&&ce===hr&&(tf=!0),_e!==null&&(_e=_e.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});e:{var qe=t,at=R;ce=n;var Qt=s;switch(at.tag){case 1:if(qe=at.payload,typeof qe=="function"){Me=qe.call(Qt,Me,ce);break e}Me=qe;break e;case 3:qe.flags=qe.flags&-65537|128;case 0:if(qe=at.payload,ce=typeof qe=="function"?qe.call(Qt,Me,ce):qe,ce==null)break e;Me=v({},Me,ce);break e;case 2:Za=!0}}ce=R.callback,ce!==null&&(t.flags|=64,ue&&(t.flags|=8192),ue=f.callbacks,ue===null?f.callbacks=[ce]:ue.push(ce))}else ue={lane:ce,tag:R.tag,payload:R.payload,callback:R.callback,next:null},_e===null?(ae=_e=ue,V=Me):_e=_e.next=ue,S|=ce;if(R=R.next,R===null){if(R=f.shared.pending,R===null)break;ue=R,R=ue.next,ue.next=null,f.lastBaseUpdate=ue,f.shared.pending=null}}while(!0);_e===null&&(V=Me),f.baseState=V,f.firstBaseUpdate=ae,f.lastBaseUpdate=_e,d===null&&(f.shared.lanes=0),ts|=S,t.lanes=S,t.memoizedState=Me}}function ym(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function Em(t,n){var s=t.callbacks;if(s!==null)for(t.callbacks=null,t=0;t<s.length;t++)ym(s[t],n)}var _r=U(null),zl=U(0);function bm(t,n){t=ya,xe(zl,t),xe(_r,n),ya=t|n.baseLanes}function nf(){xe(zl,ya),xe(_r,_r.current)}function af(){ya=zl.current,K(_r),K(zl)}var ui=U(null),Ei=null;function Qa(t){var n=t.alternate;xe(dn,dn.current&1),xe(ui,t),Ei===null&&(n===null||_r.current!==null||n.memoizedState!==null)&&(Ei=t)}function sf(t){xe(dn,dn.current),xe(ui,t),Ei===null&&(Ei=t)}function Tm(t){t.tag===22?(xe(dn,dn.current),xe(ui,t),Ei===null&&(Ei=t)):Ja()}function Ja(){xe(dn,dn.current),xe(ui,ui.current)}function fi(t){K(ui),Ei===t&&(Ei=null),K(dn)}var dn=U(0);function Hl(t){for(var n=t;n!==null;){if(n.tag===13){var s=n.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||fd(s)||dd(s)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var pa=0,ht=null,jt=null,Sn=null,Gl=!1,vr=!1,Fs=!1,Vl=0,Co=0,Sr=null,Ex=0;function ln(){throw Error(r(321))}function rf(t,n){if(n===null)return!1;for(var s=0;s<n.length&&s<t.length;s++)if(!li(t[s],n[s]))return!1;return!0}function of(t,n,s,l,f,d){return pa=d,ht=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,F.H=t===null||t.memoizedState===null?l0:yf,Fs=!1,d=s(l,f),Fs=!1,vr&&(d=Rm(n,s,l,f)),Am(t),d}function Am(t){F.H=No;var n=jt!==null&&jt.next!==null;if(pa=0,Sn=jt=ht=null,Gl=!1,Co=0,Sr=null,n)throw Error(r(300));t===null||xn||(t=t.dependencies,t!==null&&Ll(t)&&(xn=!0))}function Rm(t,n,s,l){ht=t;var f=0;do{if(vr&&(Sr=null),Co=0,vr=!1,25<=f)throw Error(r(301));if(f+=1,Sn=jt=null,t.updateQueue!=null){var d=t.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}F.H=c0,d=n(s,l)}while(vr);return d}function bx(){var t=F.H,n=t.useState()[0];return n=typeof n.then=="function"?wo(n):n,t=t.useState()[0],(jt!==null?jt.memoizedState:null)!==t&&(ht.flags|=1024),n}function lf(){var t=Vl!==0;return Vl=0,t}function cf(t,n,s){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~s}function uf(t){if(Gl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Gl=!1}pa=0,Sn=jt=ht=null,vr=!1,Co=Vl=0,Sr=null}function qn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Sn===null?ht.memoizedState=Sn=t:Sn=Sn.next=t,Sn}function hn(){if(jt===null){var t=ht.alternate;t=t!==null?t.memoizedState:null}else t=jt.next;var n=Sn===null?ht.memoizedState:Sn.next;if(n!==null)Sn=n,jt=t;else{if(t===null)throw ht.alternate===null?Error(r(467)):Error(r(310));jt=t,t={memoizedState:jt.memoizedState,baseState:jt.baseState,baseQueue:jt.baseQueue,queue:jt.queue,next:null},Sn===null?ht.memoizedState=Sn=t:Sn=Sn.next=t}return Sn}function kl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function wo(t){var n=Co;return Co+=1,Sr===null&&(Sr=[]),t=_m(Sr,t,n),n=ht,(Sn===null?n.memoizedState:Sn.next)===null&&(n=n.alternate,F.H=n===null||n.memoizedState===null?l0:yf),t}function Xl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return wo(t);if(t.$$typeof===z)return Pn(t)}throw Error(r(438,String(t)))}function ff(t){var n=null,s=ht.updateQueue;if(s!==null&&(n=s.memoCache),n==null){var l=ht.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(n={data:l.data.map(function(f){return f.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),s===null&&(s=kl(),ht.updateQueue=s),s.memoCache=n,s=n.data[n.index],s===void 0)for(s=n.data[n.index]=Array(t),l=0;l<t;l++)s[l]=q;return n.index++,s}function ma(t,n){return typeof n=="function"?n(t):n}function Wl(t){var n=hn();return df(n,jt,t)}function df(t,n,s){var l=t.queue;if(l===null)throw Error(r(311));l.lastRenderedReducer=s;var f=t.baseQueue,d=l.pending;if(d!==null){if(f!==null){var S=f.next;f.next=d.next,d.next=S}n.baseQueue=f=d,l.pending=null}if(d=t.baseState,f===null)t.memoizedState=d;else{n=f.next;var R=S=null,V=null,ae=n,_e=!1;do{var Me=ae.lane&-536870913;if(Me!==ae.lane?(Tt&Me)===Me:(pa&Me)===Me){var ce=ae.revertLane;if(ce===0)V!==null&&(V=V.next={lane:0,revertLane:0,gesture:null,action:ae.action,hasEagerState:ae.hasEagerState,eagerState:ae.eagerState,next:null}),Me===hr&&(_e=!0);else if((pa&ce)===ce){ae=ae.next,ce===hr&&(_e=!0);continue}else Me={lane:0,revertLane:ae.revertLane,gesture:null,action:ae.action,hasEagerState:ae.hasEagerState,eagerState:ae.eagerState,next:null},V===null?(R=V=Me,S=d):V=V.next=Me,ht.lanes|=ce,ts|=ce;Me=ae.action,Fs&&s(d,Me),d=ae.hasEagerState?ae.eagerState:s(d,Me)}else ce={lane:Me,revertLane:ae.revertLane,gesture:ae.gesture,action:ae.action,hasEagerState:ae.hasEagerState,eagerState:ae.eagerState,next:null},V===null?(R=V=ce,S=d):V=V.next=ce,ht.lanes|=Me,ts|=Me;ae=ae.next}while(ae!==null&&ae!==n);if(V===null?S=d:V.next=R,!li(d,t.memoizedState)&&(xn=!0,_e&&(s=pr,s!==null)))throw s;t.memoizedState=d,t.baseState=S,t.baseQueue=V,l.lastRenderedState=d}return f===null&&(l.lanes=0),[t.memoizedState,l.dispatch]}function hf(t){var n=hn(),s=n.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=t;var l=s.dispatch,f=s.pending,d=n.memoizedState;if(f!==null){s.pending=null;var S=f=f.next;do d=t(d,S.action),S=S.next;while(S!==f);li(d,n.memoizedState)||(xn=!0),n.memoizedState=d,n.baseQueue===null&&(n.baseState=d),s.lastRenderedState=d}return[d,l]}function Cm(t,n,s){var l=ht,f=hn(),d=Rt;if(d){if(s===void 0)throw Error(r(407));s=s()}else s=n();var S=!li((jt||f).memoizedState,s);if(S&&(f.memoizedState=s,xn=!0),f=f.queue,gf(Nm.bind(null,l,f,t),[t]),f.getSnapshot!==n||S||Sn!==null&&Sn.memoizedState.tag&1){if(l.flags|=2048,xr(9,{destroy:void 0},Dm.bind(null,l,f,s,n),null),$t===null)throw Error(r(349));d||(pa&127)!==0||wm(l,n,s)}return s}function wm(t,n,s){t.flags|=16384,t={getSnapshot:n,value:s},n=ht.updateQueue,n===null?(n=kl(),ht.updateQueue=n,n.stores=[t]):(s=n.stores,s===null?n.stores=[t]:s.push(t))}function Dm(t,n,s,l){n.value=s,n.getSnapshot=l,Lm(n)&&Um(t)}function Nm(t,n,s){return s(function(){Lm(n)&&Um(t)})}function Lm(t){var n=t.getSnapshot;t=t.value;try{var s=n();return!li(t,s)}catch{return!0}}function Um(t){var n=Cs(t,2);n!==null&&ii(n,t,2)}function pf(t){var n=qn();if(typeof t=="function"){var s=t;if(t=s(),Fs){Ae(!0);try{s()}finally{Ae(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ma,lastRenderedState:t},n}function Om(t,n,s,l){return t.baseState=s,df(t,jt,typeof l=="function"?l:ma)}function Tx(t,n,s,l,f){if(Zl(t))throw Error(r(485));if(t=n.action,t!==null){var d={payload:f,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){d.listeners.push(S)}};F.T!==null?s(!0):d.isTransition=!1,l(d),s=n.pending,s===null?(d.next=n.pending=d,Pm(n,d)):(d.next=s.next,n.pending=s.next=d)}}function Pm(t,n){var s=n.action,l=n.payload,f=t.state;if(n.isTransition){var d=F.T,S={};F.T=S;try{var R=s(f,l),V=F.S;V!==null&&V(S,R),Im(t,n,R)}catch(ae){mf(t,n,ae)}finally{d!==null&&S.types!==null&&(d.types=S.types),F.T=d}}else try{d=s(f,l),Im(t,n,d)}catch(ae){mf(t,n,ae)}}function Im(t,n,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(l){Fm(t,n,l)},function(l){return mf(t,n,l)}):Fm(t,n,s)}function Fm(t,n,s){n.status="fulfilled",n.value=s,Bm(n),t.state=s,n=t.pending,n!==null&&(s=n.next,s===n?t.pending=null:(s=s.next,n.next=s,Pm(t,s)))}function mf(t,n,s){var l=t.pending;if(t.pending=null,l!==null){l=l.next;do n.status="rejected",n.reason=s,Bm(n),n=n.next;while(n!==l)}t.action=null}function Bm(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function zm(t,n){return n}function Hm(t,n){if(Rt){var s=$t.formState;if(s!==null){e:{var l=ht;if(Rt){if(tn){t:{for(var f=tn,d=yi;f.nodeType!==8;){if(!d){f=null;break t}if(f=bi(f.nextSibling),f===null){f=null;break t}}d=f.data,f=d==="F!"||d==="F"?f:null}if(f){tn=bi(f.nextSibling),l=f.data==="F!";break e}}qa(l)}l=!1}l&&(n=s[0])}}return s=qn(),s.memoizedState=s.baseState=n,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:zm,lastRenderedState:n},s.queue=l,s=s0.bind(null,ht,l),l.dispatch=s,l=pf(!1),d=Mf.bind(null,ht,!1,l.queue),l=qn(),f={state:n,dispatch:null,action:t,pending:null},l.queue=f,s=Tx.bind(null,ht,f,d,s),f.dispatch=s,l.memoizedState=t,[n,s,!1]}function Gm(t){var n=hn();return Vm(n,jt,t)}function Vm(t,n,s){if(n=df(t,n,zm)[0],t=Wl(ma)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var l=wo(n)}catch(S){throw S===mr?Pl:S}else l=n;n=hn();var f=n.queue,d=f.dispatch;return s!==n.memoizedState&&(ht.flags|=2048,xr(9,{destroy:void 0},Ax.bind(null,f,s),null)),[l,d,t]}function Ax(t,n){t.action=n}function km(t){var n=hn(),s=jt;if(s!==null)return Vm(n,s,t);hn(),n=n.memoizedState,s=hn();var l=s.queue.dispatch;return s.memoizedState=t,[n,l,!1]}function xr(t,n,s,l){return t={tag:t,create:s,deps:l,inst:n,next:null},n=ht.updateQueue,n===null&&(n=kl(),ht.updateQueue=n),s=n.lastEffect,s===null?n.lastEffect=t.next=t:(l=s.next,s.next=t,t.next=l,n.lastEffect=t),t}function Xm(){return hn().memoizedState}function ql(t,n,s,l){var f=qn();ht.flags|=t,f.memoizedState=xr(1|n,{destroy:void 0},s,l===void 0?null:l)}function Yl(t,n,s,l){var f=hn();l=l===void 0?null:l;var d=f.memoizedState.inst;jt!==null&&l!==null&&rf(l,jt.memoizedState.deps)?f.memoizedState=xr(n,d,s,l):(ht.flags|=t,f.memoizedState=xr(1|n,d,s,l))}function Wm(t,n){ql(8390656,8,t,n)}function gf(t,n){Yl(2048,8,t,n)}function Rx(t){ht.flags|=4;var n=ht.updateQueue;if(n===null)n=kl(),ht.updateQueue=n,n.events=[t];else{var s=n.events;s===null?n.events=[t]:s.push(t)}}function qm(t){var n=hn().memoizedState;return Rx({ref:n,nextImpl:t}),function(){if((zt&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function Ym(t,n){return Yl(4,2,t,n)}function Zm(t,n){return Yl(4,4,t,n)}function jm(t,n){if(typeof n=="function"){t=t();var s=n(t);return function(){typeof s=="function"?s():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Km(t,n,s){s=s!=null?s.concat([t]):null,Yl(4,4,jm.bind(null,n,t),s)}function _f(){}function Qm(t,n){var s=hn();n=n===void 0?null:n;var l=s.memoizedState;return n!==null&&rf(n,l[1])?l[0]:(s.memoizedState=[t,n],t)}function Jm(t,n){var s=hn();n=n===void 0?null:n;var l=s.memoizedState;if(n!==null&&rf(n,l[1]))return l[0];if(l=t(),Fs){Ae(!0);try{t()}finally{Ae(!1)}}return s.memoizedState=[l,n],l}function vf(t,n,s){return s===void 0||(pa&1073741824)!==0&&(Tt&261930)===0?t.memoizedState=n:(t.memoizedState=s,t=$0(),ht.lanes|=t,ts|=t,s)}function $m(t,n,s,l){return li(s,n)?s:_r.current!==null?(t=vf(t,s,l),li(t,n)||(xn=!0),t):(pa&42)===0||(pa&1073741824)!==0&&(Tt&261930)===0?(xn=!0,t.memoizedState=s):(t=$0(),ht.lanes|=t,ts|=t,n)}function e0(t,n,s,l,f){var d=H.p;H.p=d!==0&&8>d?d:8;var S=F.T,R={};F.T=R,Mf(t,!1,n,s);try{var V=f(),ae=F.S;if(ae!==null&&ae(R,V),V!==null&&typeof V=="object"&&typeof V.then=="function"){var _e=yx(V,l);Do(t,n,_e,pi(t))}else Do(t,n,l,pi(t))}catch(Me){Do(t,n,{then:function(){},status:"rejected",reason:Me},pi())}finally{H.p=d,S!==null&&R.types!==null&&(S.types=R.types),F.T=S}}function Cx(){}function Sf(t,n,s,l){if(t.tag!==5)throw Error(r(476));var f=t0(t).queue;e0(t,f,n,$,s===null?Cx:function(){return n0(t),s(l)})}function t0(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:$,baseState:$,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ma,lastRenderedState:$},next:null};var s={};return n.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ma,lastRenderedState:s},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function n0(t){var n=t0(t);n.next===null&&(n=t.alternate.memoizedState),Do(t,n.next.queue,{},pi())}function xf(){return Pn(Yo)}function i0(){return hn().memoizedState}function a0(){return hn().memoizedState}function wx(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var s=pi();t=ja(s);var l=Ka(n,t,s);l!==null&&(ii(l,n,s),To(l,n,s)),n={cache:Zu()},t.payload=n;return}n=n.return}}function Dx(t,n,s){var l=pi();s={lane:l,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},Zl(t)?r0(n,s):(s=Fu(t,n,s,l),s!==null&&(ii(s,t,l),o0(s,n,l)))}function s0(t,n,s){var l=pi();Do(t,n,s,l)}function Do(t,n,s,l){var f={lane:l,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null};if(Zl(t))r0(n,f);else{var d=t.alternate;if(t.lanes===0&&(d===null||d.lanes===0)&&(d=n.lastRenderedReducer,d!==null))try{var S=n.lastRenderedState,R=d(S,s);if(f.hasEagerState=!0,f.eagerState=R,li(R,S))return Cl(t,n,f,0),$t===null&&Rl(),!1}catch{}finally{}if(s=Fu(t,n,f,l),s!==null)return ii(s,t,l),o0(s,n,l),!0}return!1}function Mf(t,n,s,l){if(l={lane:2,revertLane:$f(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Zl(t)){if(n)throw Error(r(479))}else n=Fu(t,s,l,2),n!==null&&ii(n,t,2)}function Zl(t){var n=t.alternate;return t===ht||n!==null&&n===ht}function r0(t,n){vr=Gl=!0;var s=t.pending;s===null?n.next=n:(n.next=s.next,s.next=n),t.pending=n}function o0(t,n,s){if((s&4194048)!==0){var l=n.lanes;l&=t.pendingLanes,s|=l,n.lanes=s,Wn(t,s)}}var No={readContext:Pn,use:Xl,useCallback:ln,useContext:ln,useEffect:ln,useImperativeHandle:ln,useLayoutEffect:ln,useInsertionEffect:ln,useMemo:ln,useReducer:ln,useRef:ln,useState:ln,useDebugValue:ln,useDeferredValue:ln,useTransition:ln,useSyncExternalStore:ln,useId:ln,useHostTransitionStatus:ln,useFormState:ln,useActionState:ln,useOptimistic:ln,useMemoCache:ln,useCacheRefresh:ln};No.useEffectEvent=ln;var l0={readContext:Pn,use:Xl,useCallback:function(t,n){return qn().memoizedState=[t,n===void 0?null:n],t},useContext:Pn,useEffect:Wm,useImperativeHandle:function(t,n,s){s=s!=null?s.concat([t]):null,ql(4194308,4,jm.bind(null,n,t),s)},useLayoutEffect:function(t,n){return ql(4194308,4,t,n)},useInsertionEffect:function(t,n){ql(4,2,t,n)},useMemo:function(t,n){var s=qn();n=n===void 0?null:n;var l=t();if(Fs){Ae(!0);try{t()}finally{Ae(!1)}}return s.memoizedState=[l,n],l},useReducer:function(t,n,s){var l=qn();if(s!==void 0){var f=s(n);if(Fs){Ae(!0);try{s(n)}finally{Ae(!1)}}}else f=n;return l.memoizedState=l.baseState=f,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:f},l.queue=t,t=t.dispatch=Dx.bind(null,ht,t),[l.memoizedState,t]},useRef:function(t){var n=qn();return t={current:t},n.memoizedState=t},useState:function(t){t=pf(t);var n=t.queue,s=s0.bind(null,ht,n);return n.dispatch=s,[t.memoizedState,s]},useDebugValue:_f,useDeferredValue:function(t,n){var s=qn();return vf(s,t,n)},useTransition:function(){var t=pf(!1);return t=e0.bind(null,ht,t.queue,!0,!1),qn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,s){var l=ht,f=qn();if(Rt){if(s===void 0)throw Error(r(407));s=s()}else{if(s=n(),$t===null)throw Error(r(349));(Tt&127)!==0||wm(l,n,s)}f.memoizedState=s;var d={value:s,getSnapshot:n};return f.queue=d,Wm(Nm.bind(null,l,d,t),[t]),l.flags|=2048,xr(9,{destroy:void 0},Dm.bind(null,l,d,s,n),null),s},useId:function(){var t=qn(),n=$t.identifierPrefix;if(Rt){var s=Yi,l=qi;s=(l&~(1<<32-Be(l)-1)).toString(32)+s,n="_"+n+"R_"+s,s=Vl++,0<s&&(n+="H"+s.toString(32)),n+="_"}else s=Ex++,n="_"+n+"r_"+s.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:xf,useFormState:Hm,useActionState:Hm,useOptimistic:function(t){var n=qn();n.memoizedState=n.baseState=t;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=s,n=Mf.bind(null,ht,!0,s),s.dispatch=n,[t,n]},useMemoCache:ff,useCacheRefresh:function(){return qn().memoizedState=wx.bind(null,ht)},useEffectEvent:function(t){var n=qn(),s={impl:t};return n.memoizedState=s,function(){if((zt&2)!==0)throw Error(r(440));return s.impl.apply(void 0,arguments)}}},yf={readContext:Pn,use:Xl,useCallback:Qm,useContext:Pn,useEffect:gf,useImperativeHandle:Km,useInsertionEffect:Ym,useLayoutEffect:Zm,useMemo:Jm,useReducer:Wl,useRef:Xm,useState:function(){return Wl(ma)},useDebugValue:_f,useDeferredValue:function(t,n){var s=hn();return $m(s,jt.memoizedState,t,n)},useTransition:function(){var t=Wl(ma)[0],n=hn().memoizedState;return[typeof t=="boolean"?t:wo(t),n]},useSyncExternalStore:Cm,useId:i0,useHostTransitionStatus:xf,useFormState:Gm,useActionState:Gm,useOptimistic:function(t,n){var s=hn();return Om(s,jt,t,n)},useMemoCache:ff,useCacheRefresh:a0};yf.useEffectEvent=qm;var c0={readContext:Pn,use:Xl,useCallback:Qm,useContext:Pn,useEffect:gf,useImperativeHandle:Km,useInsertionEffect:Ym,useLayoutEffect:Zm,useMemo:Jm,useReducer:hf,useRef:Xm,useState:function(){return hf(ma)},useDebugValue:_f,useDeferredValue:function(t,n){var s=hn();return jt===null?vf(s,t,n):$m(s,jt.memoizedState,t,n)},useTransition:function(){var t=hf(ma)[0],n=hn().memoizedState;return[typeof t=="boolean"?t:wo(t),n]},useSyncExternalStore:Cm,useId:i0,useHostTransitionStatus:xf,useFormState:km,useActionState:km,useOptimistic:function(t,n){var s=hn();return jt!==null?Om(s,jt,t,n):(s.baseState=t,[t,s.queue.dispatch])},useMemoCache:ff,useCacheRefresh:a0};c0.useEffectEvent=qm;function Ef(t,n,s,l){n=t.memoizedState,s=s(l,n),s=s==null?n:v({},n,s),t.memoizedState=s,t.lanes===0&&(t.updateQueue.baseState=s)}var bf={enqueueSetState:function(t,n,s){t=t._reactInternals;var l=pi(),f=ja(l);f.payload=n,s!=null&&(f.callback=s),n=Ka(t,f,l),n!==null&&(ii(n,t,l),To(n,t,l))},enqueueReplaceState:function(t,n,s){t=t._reactInternals;var l=pi(),f=ja(l);f.tag=1,f.payload=n,s!=null&&(f.callback=s),n=Ka(t,f,l),n!==null&&(ii(n,t,l),To(n,t,l))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var s=pi(),l=ja(s);l.tag=2,n!=null&&(l.callback=n),n=Ka(t,l,s),n!==null&&(ii(n,t,s),To(n,t,s))}};function u0(t,n,s,l,f,d,S){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,d,S):n.prototype&&n.prototype.isPureReactComponent?!_o(s,l)||!_o(f,d):!0}function f0(t,n,s,l){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(s,l),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(s,l),n.state!==t&&bf.enqueueReplaceState(n,n.state,null)}function Bs(t,n){var s=n;if("ref"in n){s={};for(var l in n)l!=="ref"&&(s[l]=n[l])}if(t=t.defaultProps){s===n&&(s=v({},s));for(var f in t)s[f]===void 0&&(s[f]=t[f])}return s}function d0(t){Al(t)}function h0(t){console.error(t)}function p0(t){Al(t)}function jl(t,n){try{var s=t.onUncaughtError;s(n.value,{componentStack:n.stack})}catch(l){setTimeout(function(){throw l})}}function m0(t,n,s){try{var l=t.onCaughtError;l(s.value,{componentStack:s.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function Tf(t,n,s){return s=ja(s),s.tag=3,s.payload={element:null},s.callback=function(){jl(t,n)},s}function g0(t){return t=ja(t),t.tag=3,t}function _0(t,n,s,l){var f=s.type.getDerivedStateFromError;if(typeof f=="function"){var d=l.value;t.payload=function(){return f(d)},t.callback=function(){m0(n,s,l)}}var S=s.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(t.callback=function(){m0(n,s,l),typeof f!="function"&&(ns===null?ns=new Set([this]):ns.add(this));var R=l.stack;this.componentDidCatch(l.value,{componentStack:R!==null?R:""})})}function Nx(t,n,s,l,f){if(s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(n=s.alternate,n!==null&&dr(n,s,f,!0),s=ui.current,s!==null){switch(s.tag){case 31:case 13:return Ei===null?oc():s.alternate===null&&cn===0&&(cn=3),s.flags&=-257,s.flags|=65536,s.lanes=f,l===Il?s.flags|=16384:(n=s.updateQueue,n===null?s.updateQueue=new Set([l]):n.add(l),Kf(t,l,f)),!1;case 22:return s.flags|=65536,l===Il?s.flags|=16384:(n=s.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([l])},s.updateQueue=n):(s=n.retryQueue,s===null?n.retryQueue=new Set([l]):s.add(l)),Kf(t,l,f)),!1}throw Error(r(435,s.tag))}return Kf(t,l,f),oc(),!1}if(Rt)return n=ui.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=f,l!==ku&&(t=Error(r(422),{cause:l}),xo(Si(t,s)))):(l!==ku&&(n=Error(r(423),{cause:l}),xo(Si(n,s))),t=t.current.alternate,t.flags|=65536,f&=-f,t.lanes|=f,l=Si(l,s),f=Tf(t.stateNode,l,f),ef(t,f),cn!==4&&(cn=2)),!1;var d=Error(r(520),{cause:l});if(d=Si(d,s),zo===null?zo=[d]:zo.push(d),cn!==4&&(cn=2),n===null)return!0;l=Si(l,s),s=n;do{switch(s.tag){case 3:return s.flags|=65536,t=f&-f,s.lanes|=t,t=Tf(s.stateNode,l,t),ef(s,t),!1;case 1:if(n=s.type,d=s.stateNode,(s.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(ns===null||!ns.has(d))))return s.flags|=65536,f&=-f,s.lanes|=f,f=g0(f),_0(f,t,s,l),ef(s,f),!1}s=s.return}while(s!==null);return!1}var Af=Error(r(461)),xn=!1;function In(t,n,s,l){n.child=t===null?Mm(n,null,s,l):Is(n,t.child,s,l)}function v0(t,n,s,l,f){s=s.render;var d=n.ref;if("ref"in l){var S={};for(var R in l)R!=="ref"&&(S[R]=l[R])}else S=l;return Ls(n),l=of(t,n,s,S,d,f),R=lf(),t!==null&&!xn?(cf(t,n,f),ga(t,n,f)):(Rt&&R&&Gu(n),n.flags|=1,In(t,n,l,f),n.child)}function S0(t,n,s,l,f){if(t===null){var d=s.type;return typeof d=="function"&&!Bu(d)&&d.defaultProps===void 0&&s.compare===null?(n.tag=15,n.type=d,x0(t,n,d,l,f)):(t=Dl(s.type,null,l,n,n.mode,f),t.ref=n.ref,t.return=n,n.child=t)}if(d=t.child,!Of(t,f)){var S=d.memoizedProps;if(s=s.compare,s=s!==null?s:_o,s(S,l)&&t.ref===n.ref)return ga(t,n,f)}return n.flags|=1,t=ua(d,l),t.ref=n.ref,t.return=n,n.child=t}function x0(t,n,s,l,f){if(t!==null){var d=t.memoizedProps;if(_o(d,l)&&t.ref===n.ref)if(xn=!1,n.pendingProps=l=d,Of(t,f))(t.flags&131072)!==0&&(xn=!0);else return n.lanes=t.lanes,ga(t,n,f)}return Rf(t,n,s,l,f)}function M0(t,n,s,l){var f=l.children,d=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((n.flags&128)!==0){if(d=d!==null?d.baseLanes|s:s,t!==null){for(l=n.child=t.child,f=0;l!==null;)f=f|l.lanes|l.childLanes,l=l.sibling;l=f&~d}else l=0,n.child=null;return y0(t,n,d,s,l)}if((s&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Ol(n,d!==null?d.cachePool:null),d!==null?bm(n,d):nf(),Tm(n);else return l=n.lanes=536870912,y0(t,n,d!==null?d.baseLanes|s:s,s,l)}else d!==null?(Ol(n,d.cachePool),bm(n,d),Ja(),n.memoizedState=null):(t!==null&&Ol(n,null),nf(),Ja());return In(t,n,f,s),n.child}function Lo(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function y0(t,n,s,l,f){var d=Ku();return d=d===null?null:{parent:vn._currentValue,pool:d},n.memoizedState={baseLanes:s,cachePool:d},t!==null&&Ol(n,null),nf(),Tm(n),t!==null&&dr(t,n,l,!0),n.childLanes=f,null}function Kl(t,n){return n=Jl({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function E0(t,n,s){return Is(n,t.child,null,s),t=Kl(n,n.pendingProps),t.flags|=2,fi(n),n.memoizedState=null,t}function Lx(t,n,s){var l=n.pendingProps,f=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(Rt){if(l.mode==="hidden")return t=Kl(n,l),n.lanes=536870912,Lo(null,t);if(sf(n),(t=tn)?(t=Pg(t,yi),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Xa!==null?{id:qi,overflow:Yi}:null,retryLane:536870912,hydrationErrors:null},s=rm(t),s.return=n,n.child=s,On=n,tn=null)):t=null,t===null)throw qa(n);return n.lanes=536870912,null}return Kl(n,l)}var d=t.memoizedState;if(d!==null){var S=d.dehydrated;if(sf(n),f)if(n.flags&256)n.flags&=-257,n=E0(t,n,s);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(r(558));else if(xn||dr(t,n,s,!1),f=(s&t.childLanes)!==0,xn||f){if(l=$t,l!==null&&(S=zn(l,s),S!==0&&S!==d.retryLane))throw d.retryLane=S,Cs(t,S),ii(l,t,S),Af;oc(),n=E0(t,n,s)}else t=d.treeContext,tn=bi(S.nextSibling),On=n,Rt=!0,Wa=null,yi=!1,t!==null&&cm(n,t),n=Kl(n,l),n.flags|=4096;return n}return t=ua(t.child,{mode:l.mode,children:l.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Ql(t,n){var s=n.ref;if(s===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(r(284));(t===null||t.ref!==s)&&(n.flags|=4194816)}}function Rf(t,n,s,l,f){return Ls(n),s=of(t,n,s,l,void 0,f),l=lf(),t!==null&&!xn?(cf(t,n,f),ga(t,n,f)):(Rt&&l&&Gu(n),n.flags|=1,In(t,n,s,f),n.child)}function b0(t,n,s,l,f,d){return Ls(n),n.updateQueue=null,s=Rm(n,l,s,f),Am(t),l=lf(),t!==null&&!xn?(cf(t,n,d),ga(t,n,d)):(Rt&&l&&Gu(n),n.flags|=1,In(t,n,s,d),n.child)}function T0(t,n,s,l,f){if(Ls(n),n.stateNode===null){var d=lr,S=s.contextType;typeof S=="object"&&S!==null&&(d=Pn(S)),d=new s(l,d),n.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=bf,n.stateNode=d,d._reactInternals=n,d=n.stateNode,d.props=l,d.state=n.memoizedState,d.refs={},Ju(n),S=s.contextType,d.context=typeof S=="object"&&S!==null?Pn(S):lr,d.state=n.memoizedState,S=s.getDerivedStateFromProps,typeof S=="function"&&(Ef(n,s,S,l),d.state=n.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(S=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),S!==d.state&&bf.enqueueReplaceState(d,d.state,null),Ro(n,l,d,f),Ao(),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308),l=!0}else if(t===null){d=n.stateNode;var R=n.memoizedProps,V=Bs(s,R);d.props=V;var ae=d.context,_e=s.contextType;S=lr,typeof _e=="object"&&_e!==null&&(S=Pn(_e));var Me=s.getDerivedStateFromProps;_e=typeof Me=="function"||typeof d.getSnapshotBeforeUpdate=="function",R=n.pendingProps!==R,_e||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(R||ae!==S)&&f0(n,d,l,S),Za=!1;var ce=n.memoizedState;d.state=ce,Ro(n,l,d,f),Ao(),ae=n.memoizedState,R||ce!==ae||Za?(typeof Me=="function"&&(Ef(n,s,Me,l),ae=n.memoizedState),(V=Za||u0(n,s,V,l,ce,ae,S))?(_e||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(n.flags|=4194308)):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=l,n.memoizedState=ae),d.props=l,d.state=ae,d.context=S,l=V):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),l=!1)}else{d=n.stateNode,$u(t,n),S=n.memoizedProps,_e=Bs(s,S),d.props=_e,Me=n.pendingProps,ce=d.context,ae=s.contextType,V=lr,typeof ae=="object"&&ae!==null&&(V=Pn(ae)),R=s.getDerivedStateFromProps,(ae=typeof R=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(S!==Me||ce!==V)&&f0(n,d,l,V),Za=!1,ce=n.memoizedState,d.state=ce,Ro(n,l,d,f),Ao();var ue=n.memoizedState;S!==Me||ce!==ue||Za||t!==null&&t.dependencies!==null&&Ll(t.dependencies)?(typeof R=="function"&&(Ef(n,s,R,l),ue=n.memoizedState),(_e=Za||u0(n,s,_e,l,ce,ue,V)||t!==null&&t.dependencies!==null&&Ll(t.dependencies))?(ae||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(l,ue,V),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(l,ue,V)),typeof d.componentDidUpdate=="function"&&(n.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof d.componentDidUpdate!="function"||S===t.memoizedProps&&ce===t.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||S===t.memoizedProps&&ce===t.memoizedState||(n.flags|=1024),n.memoizedProps=l,n.memoizedState=ue),d.props=l,d.state=ue,d.context=V,l=_e):(typeof d.componentDidUpdate!="function"||S===t.memoizedProps&&ce===t.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||S===t.memoizedProps&&ce===t.memoizedState||(n.flags|=1024),l=!1)}return d=l,Ql(t,n),l=(n.flags&128)!==0,d||l?(d=n.stateNode,s=l&&typeof s.getDerivedStateFromError!="function"?null:d.render(),n.flags|=1,t!==null&&l?(n.child=Is(n,t.child,null,f),n.child=Is(n,null,s,f)):In(t,n,s,f),n.memoizedState=d.state,t=n.child):t=ga(t,n,f),t}function A0(t,n,s,l){return Ds(),n.flags|=256,In(t,n,s,l),n.child}var Cf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function wf(t){return{baseLanes:t,cachePool:mm()}}function Df(t,n,s){return t=t!==null?t.childLanes&~s:0,n&&(t|=hi),t}function R0(t,n,s){var l=n.pendingProps,f=!1,d=(n.flags&128)!==0,S;if((S=d)||(S=t!==null&&t.memoizedState===null?!1:(dn.current&2)!==0),S&&(f=!0,n.flags&=-129),S=(n.flags&32)!==0,n.flags&=-33,t===null){if(Rt){if(f?Qa(n):Ja(),(t=tn)?(t=Pg(t,yi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Xa!==null?{id:qi,overflow:Yi}:null,retryLane:536870912,hydrationErrors:null},s=rm(t),s.return=n,n.child=s,On=n,tn=null)):t=null,t===null)throw qa(n);return dd(t)?n.lanes=32:n.lanes=536870912,null}var R=l.children;return l=l.fallback,f?(Ja(),f=n.mode,R=Jl({mode:"hidden",children:R},f),l=ws(l,f,s,null),R.return=n,l.return=n,R.sibling=l,n.child=R,l=n.child,l.memoizedState=wf(s),l.childLanes=Df(t,S,s),n.memoizedState=Cf,Lo(null,l)):(Qa(n),Nf(n,R))}var V=t.memoizedState;if(V!==null&&(R=V.dehydrated,R!==null)){if(d)n.flags&256?(Qa(n),n.flags&=-257,n=Lf(t,n,s)):n.memoizedState!==null?(Ja(),n.child=t.child,n.flags|=128,n=null):(Ja(),R=l.fallback,f=n.mode,l=Jl({mode:"visible",children:l.children},f),R=ws(R,f,s,null),R.flags|=2,l.return=n,R.return=n,l.sibling=R,n.child=l,Is(n,t.child,null,s),l=n.child,l.memoizedState=wf(s),l.childLanes=Df(t,S,s),n.memoizedState=Cf,n=Lo(null,l));else if(Qa(n),dd(R)){if(S=R.nextSibling&&R.nextSibling.dataset,S)var ae=S.dgst;S=ae,l=Error(r(419)),l.stack="",l.digest=S,xo({value:l,source:null,stack:null}),n=Lf(t,n,s)}else if(xn||dr(t,n,s,!1),S=(s&t.childLanes)!==0,xn||S){if(S=$t,S!==null&&(l=zn(S,s),l!==0&&l!==V.retryLane))throw V.retryLane=l,Cs(t,l),ii(S,t,l),Af;fd(R)||oc(),n=Lf(t,n,s)}else fd(R)?(n.flags|=192,n.child=t.child,n=null):(t=V.treeContext,tn=bi(R.nextSibling),On=n,Rt=!0,Wa=null,yi=!1,t!==null&&cm(n,t),n=Nf(n,l.children),n.flags|=4096);return n}return f?(Ja(),R=l.fallback,f=n.mode,V=t.child,ae=V.sibling,l=ua(V,{mode:"hidden",children:l.children}),l.subtreeFlags=V.subtreeFlags&65011712,ae!==null?R=ua(ae,R):(R=ws(R,f,s,null),R.flags|=2),R.return=n,l.return=n,l.sibling=R,n.child=l,Lo(null,l),l=n.child,R=t.child.memoizedState,R===null?R=wf(s):(f=R.cachePool,f!==null?(V=vn._currentValue,f=f.parent!==V?{parent:V,pool:V}:f):f=mm(),R={baseLanes:R.baseLanes|s,cachePool:f}),l.memoizedState=R,l.childLanes=Df(t,S,s),n.memoizedState=Cf,Lo(t.child,l)):(Qa(n),s=t.child,t=s.sibling,s=ua(s,{mode:"visible",children:l.children}),s.return=n,s.sibling=null,t!==null&&(S=n.deletions,S===null?(n.deletions=[t],n.flags|=16):S.push(t)),n.child=s,n.memoizedState=null,s)}function Nf(t,n){return n=Jl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Jl(t,n){return t=ci(22,t,null,n),t.lanes=0,t}function Lf(t,n,s){return Is(n,t.child,null,s),t=Nf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function C0(t,n,s){t.lanes|=n;var l=t.alternate;l!==null&&(l.lanes|=n),qu(t.return,n,s)}function Uf(t,n,s,l,f,d){var S=t.memoizedState;S===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:l,tail:s,tailMode:f,treeForkCount:d}:(S.isBackwards=n,S.rendering=null,S.renderingStartTime=0,S.last=l,S.tail=s,S.tailMode=f,S.treeForkCount=d)}function w0(t,n,s){var l=n.pendingProps,f=l.revealOrder,d=l.tail;l=l.children;var S=dn.current,R=(S&2)!==0;if(R?(S=S&1|2,n.flags|=128):S&=1,xe(dn,S),In(t,n,l,s),l=Rt?So:0,!R&&t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&C0(t,s,n);else if(t.tag===19)C0(t,s,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(f){case"forwards":for(s=n.child,f=null;s!==null;)t=s.alternate,t!==null&&Hl(t)===null&&(f=s),s=s.sibling;s=f,s===null?(f=n.child,n.child=null):(f=s.sibling,s.sibling=null),Uf(n,!1,f,s,d,l);break;case"backwards":case"unstable_legacy-backwards":for(s=null,f=n.child,n.child=null;f!==null;){if(t=f.alternate,t!==null&&Hl(t)===null){n.child=f;break}t=f.sibling,f.sibling=s,s=f,f=t}Uf(n,!0,s,null,d,l);break;case"together":Uf(n,!1,null,null,void 0,l);break;default:n.memoizedState=null}return n.child}function ga(t,n,s){if(t!==null&&(n.dependencies=t.dependencies),ts|=n.lanes,(s&n.childLanes)===0)if(t!==null){if(dr(t,n,s,!1),(s&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,s=ua(t,t.pendingProps),n.child=s,s.return=n;t.sibling!==null;)t=t.sibling,s=s.sibling=ua(t,t.pendingProps),s.return=n;s.sibling=null}return n.child}function Of(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&Ll(t)))}function Ux(t,n,s){switch(n.tag){case 3:Ee(n,n.stateNode.containerInfo),Ya(n,vn,t.memoizedState.cache),Ds();break;case 27:case 5:it(n);break;case 4:Ee(n,n.stateNode.containerInfo);break;case 10:Ya(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,sf(n),null;break;case 13:var l=n.memoizedState;if(l!==null)return l.dehydrated!==null?(Qa(n),n.flags|=128,null):(s&n.child.childLanes)!==0?R0(t,n,s):(Qa(n),t=ga(t,n,s),t!==null?t.sibling:null);Qa(n);break;case 19:var f=(t.flags&128)!==0;if(l=(s&n.childLanes)!==0,l||(dr(t,n,s,!1),l=(s&n.childLanes)!==0),f){if(l)return w0(t,n,s);n.flags|=128}if(f=n.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),xe(dn,dn.current),l)break;return null;case 22:return n.lanes=0,M0(t,n,s,n.pendingProps);case 24:Ya(n,vn,t.memoizedState.cache)}return ga(t,n,s)}function D0(t,n,s){if(t!==null)if(t.memoizedProps!==n.pendingProps)xn=!0;else{if(!Of(t,s)&&(n.flags&128)===0)return xn=!1,Ux(t,n,s);xn=(t.flags&131072)!==0}else xn=!1,Rt&&(n.flags&1048576)!==0&&lm(n,So,n.index);switch(n.lanes=0,n.tag){case 16:e:{var l=n.pendingProps;if(t=Os(n.elementType),n.type=t,typeof t=="function")Bu(t)?(l=Bs(t,l),n.tag=1,n=T0(null,n,t,l,s)):(n.tag=0,n=Rf(null,n,t,l,s));else{if(t!=null){var f=t.$$typeof;if(f===C){n.tag=11,n=v0(null,n,t,l,s);break e}else if(f===I){n.tag=14,n=S0(null,n,t,l,s);break e}}throw n=oe(t)||t,Error(r(306,n,""))}}return n;case 0:return Rf(t,n,n.type,n.pendingProps,s);case 1:return l=n.type,f=Bs(l,n.pendingProps),T0(t,n,l,f,s);case 3:e:{if(Ee(n,n.stateNode.containerInfo),t===null)throw Error(r(387));l=n.pendingProps;var d=n.memoizedState;f=d.element,$u(t,n),Ro(n,l,null,s);var S=n.memoizedState;if(l=S.cache,Ya(n,vn,l),l!==d.cache&&Yu(n,[vn],s,!0),Ao(),l=S.element,d.isDehydrated)if(d={element:l,isDehydrated:!1,cache:S.cache},n.updateQueue.baseState=d,n.memoizedState=d,n.flags&256){n=A0(t,n,l,s);break e}else if(l!==f){f=Si(Error(r(424)),n),xo(f),n=A0(t,n,l,s);break e}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(tn=bi(t.firstChild),On=n,Rt=!0,Wa=null,yi=!0,s=Mm(n,null,l,s),n.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling}else{if(Ds(),l===f){n=ga(t,n,s);break e}In(t,n,l,s)}n=n.child}return n;case 26:return Ql(t,n),t===null?(s=Gg(n.type,null,n.pendingProps,null))?n.memoizedState=s:Rt||(s=n.type,t=n.pendingProps,l=pc(ie.current).createElement(s),l[Ot]=n,l[en]=t,Fn(l,s,t),_n(l),n.stateNode=l):n.memoizedState=Gg(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return it(n),t===null&&Rt&&(l=n.stateNode=Bg(n.type,n.pendingProps,ie.current),On=n,yi=!0,f=tn,rs(n.type)?(hd=f,tn=bi(l.firstChild)):tn=f),In(t,n,n.pendingProps.children,s),Ql(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Rt&&((f=l=tn)&&(l=cM(l,n.type,n.pendingProps,yi),l!==null?(n.stateNode=l,On=n,tn=bi(l.firstChild),yi=!1,f=!0):f=!1),f||qa(n)),it(n),f=n.type,d=n.pendingProps,S=t!==null?t.memoizedProps:null,l=d.children,ld(f,d)?l=null:S!==null&&ld(f,S)&&(n.flags|=32),n.memoizedState!==null&&(f=of(t,n,bx,null,null,s),Yo._currentValue=f),Ql(t,n),In(t,n,l,s),n.child;case 6:return t===null&&Rt&&((t=s=tn)&&(s=uM(s,n.pendingProps,yi),s!==null?(n.stateNode=s,On=n,tn=null,t=!0):t=!1),t||qa(n)),null;case 13:return R0(t,n,s);case 4:return Ee(n,n.stateNode.containerInfo),l=n.pendingProps,t===null?n.child=Is(n,null,l,s):In(t,n,l,s),n.child;case 11:return v0(t,n,n.type,n.pendingProps,s);case 7:return In(t,n,n.pendingProps,s),n.child;case 8:return In(t,n,n.pendingProps.children,s),n.child;case 12:return In(t,n,n.pendingProps.children,s),n.child;case 10:return l=n.pendingProps,Ya(n,n.type,l.value),In(t,n,l.children,s),n.child;case 9:return f=n.type._context,l=n.pendingProps.children,Ls(n),f=Pn(f),l=l(f),n.flags|=1,In(t,n,l,s),n.child;case 14:return S0(t,n,n.type,n.pendingProps,s);case 15:return x0(t,n,n.type,n.pendingProps,s);case 19:return w0(t,n,s);case 31:return Lx(t,n,s);case 22:return M0(t,n,s,n.pendingProps);case 24:return Ls(n),l=Pn(vn),t===null?(f=Ku(),f===null&&(f=$t,d=Zu(),f.pooledCache=d,d.refCount++,d!==null&&(f.pooledCacheLanes|=s),f=d),n.memoizedState={parent:l,cache:f},Ju(n),Ya(n,vn,f)):((t.lanes&s)!==0&&($u(t,n),Ro(n,null,null,s),Ao()),f=t.memoizedState,d=n.memoizedState,f.parent!==l?(f={parent:l,cache:l},n.memoizedState=f,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=f),Ya(n,vn,l)):(l=d.cache,Ya(n,vn,l),l!==f.cache&&Yu(n,[vn],s,!0))),In(t,n,n.pendingProps.children,s),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function _a(t){t.flags|=4}function Pf(t,n,s,l,f){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(f&335544128)===f)if(t.stateNode.complete)t.flags|=8192;else if(ig())t.flags|=8192;else throw Ps=Il,Qu}else t.flags&=-16777217}function N0(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!qg(n))if(ig())t.flags|=8192;else throw Ps=Il,Qu}function $l(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?be():536870912,t.lanes|=n,br|=n)}function Uo(t,n){if(!Rt)switch(t.tailMode){case"hidden":n=t.tail;for(var s=null;n!==null;)n.alternate!==null&&(s=n),n=n.sibling;s===null?t.tail=null:s.sibling=null;break;case"collapsed":s=t.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function nn(t){var n=t.alternate!==null&&t.alternate.child===t.child,s=0,l=0;if(n)for(var f=t.child;f!==null;)s|=f.lanes|f.childLanes,l|=f.subtreeFlags&65011712,l|=f.flags&65011712,f.return=t,f=f.sibling;else for(f=t.child;f!==null;)s|=f.lanes|f.childLanes,l|=f.subtreeFlags,l|=f.flags,f.return=t,f=f.sibling;return t.subtreeFlags|=l,t.childLanes=s,n}function Ox(t,n,s){var l=n.pendingProps;switch(Vu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return nn(n),null;case 1:return nn(n),null;case 3:return s=n.stateNode,l=null,t!==null&&(l=t.memoizedState.cache),n.memoizedState.cache!==l&&(n.flags|=2048),ha(vn),ze(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(t===null||t.child===null)&&(fr(n)?_a(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Xu())),nn(n),null;case 26:var f=n.type,d=n.memoizedState;return t===null?(_a(n),d!==null?(nn(n),N0(n,d)):(nn(n),Pf(n,f,null,l,s))):d?d!==t.memoizedState?(_a(n),nn(n),N0(n,d)):(nn(n),n.flags&=-16777217):(t=t.memoizedProps,t!==l&&_a(n),nn(n),Pf(n,f,t,l,s)),null;case 27:if(Je(n),s=ie.current,f=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==l&&_a(n);else{if(!l){if(n.stateNode===null)throw Error(r(166));return nn(n),null}t=Te.current,fr(n)?um(n):(t=Bg(f,l,s),n.stateNode=t,_a(n))}return nn(n),null;case 5:if(Je(n),f=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==l&&_a(n);else{if(!l){if(n.stateNode===null)throw Error(r(166));return nn(n),null}if(d=Te.current,fr(n))um(n);else{var S=pc(ie.current);switch(d){case 1:d=S.createElementNS("http://www.w3.org/2000/svg",f);break;case 2:d=S.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;default:switch(f){case"svg":d=S.createElementNS("http://www.w3.org/2000/svg",f);break;case"math":d=S.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;case"script":d=S.createElement("div"),d.innerHTML="<script><\/script>",d=d.removeChild(d.firstChild);break;case"select":d=typeof l.is=="string"?S.createElement("select",{is:l.is}):S.createElement("select"),l.multiple?d.multiple=!0:l.size&&(d.size=l.size);break;default:d=typeof l.is=="string"?S.createElement(f,{is:l.is}):S.createElement(f)}}d[Ot]=n,d[en]=l;e:for(S=n.child;S!==null;){if(S.tag===5||S.tag===6)d.appendChild(S.stateNode);else if(S.tag!==4&&S.tag!==27&&S.child!==null){S.child.return=S,S=S.child;continue}if(S===n)break e;for(;S.sibling===null;){if(S.return===null||S.return===n)break e;S=S.return}S.sibling.return=S.return,S=S.sibling}n.stateNode=d;e:switch(Fn(d,f,l),f){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&_a(n)}}return nn(n),Pf(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,s),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==l&&_a(n);else{if(typeof l!="string"&&n.stateNode===null)throw Error(r(166));if(t=ie.current,fr(n)){if(t=n.stateNode,s=n.memoizedProps,l=null,f=On,f!==null)switch(f.tag){case 27:case 5:l=f.memoizedProps}t[Ot]=n,t=!!(t.nodeValue===s||l!==null&&l.suppressHydrationWarning===!0||Rg(t.nodeValue,s)),t||qa(n,!0)}else t=pc(t).createTextNode(l),t[Ot]=n,n.stateNode=t}return nn(n),null;case 31:if(s=n.memoizedState,t===null||t.memoizedState!==null){if(l=fr(n),s!==null){if(t===null){if(!l)throw Error(r(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[Ot]=n}else Ds(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;nn(n),t=!1}else s=Xu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=s),t=!0;if(!t)return n.flags&256?(fi(n),n):(fi(n),null);if((n.flags&128)!==0)throw Error(r(558))}return nn(n),null;case 13:if(l=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(f=fr(n),l!==null&&l.dehydrated!==null){if(t===null){if(!f)throw Error(r(318));if(f=n.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(r(317));f[Ot]=n}else Ds(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;nn(n),f=!1}else f=Xu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=f),f=!0;if(!f)return n.flags&256?(fi(n),n):(fi(n),null)}return fi(n),(n.flags&128)!==0?(n.lanes=s,n):(s=l!==null,t=t!==null&&t.memoizedState!==null,s&&(l=n.child,f=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(f=l.alternate.memoizedState.cachePool.pool),d=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(d=l.memoizedState.cachePool.pool),d!==f&&(l.flags|=2048)),s!==t&&s&&(n.child.flags|=8192),$l(n,n.updateQueue),nn(n),null);case 4:return ze(),t===null&&id(n.stateNode.containerInfo),nn(n),null;case 10:return ha(n.type),nn(n),null;case 19:if(K(dn),l=n.memoizedState,l===null)return nn(n),null;if(f=(n.flags&128)!==0,d=l.rendering,d===null)if(f)Uo(l,!1);else{if(cn!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(d=Hl(t),d!==null){for(n.flags|=128,Uo(l,!1),t=d.updateQueue,n.updateQueue=t,$l(n,t),n.subtreeFlags=0,t=s,s=n.child;s!==null;)sm(s,t),s=s.sibling;return xe(dn,dn.current&1|2),Rt&&fa(n,l.treeForkCount),n.child}t=t.sibling}l.tail!==null&&Mt()>ac&&(n.flags|=128,f=!0,Uo(l,!1),n.lanes=4194304)}else{if(!f)if(t=Hl(d),t!==null){if(n.flags|=128,f=!0,t=t.updateQueue,n.updateQueue=t,$l(n,t),Uo(l,!0),l.tail===null&&l.tailMode==="hidden"&&!d.alternate&&!Rt)return nn(n),null}else 2*Mt()-l.renderingStartTime>ac&&s!==536870912&&(n.flags|=128,f=!0,Uo(l,!1),n.lanes=4194304);l.isBackwards?(d.sibling=n.child,n.child=d):(t=l.last,t!==null?t.sibling=d:n.child=d,l.last=d)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=Mt(),t.sibling=null,s=dn.current,xe(dn,f?s&1|2:s&1),Rt&&fa(n,l.treeForkCount),t):(nn(n),null);case 22:case 23:return fi(n),af(),l=n.memoizedState!==null,t!==null?t.memoizedState!==null!==l&&(n.flags|=8192):l&&(n.flags|=8192),l?(s&536870912)!==0&&(n.flags&128)===0&&(nn(n),n.subtreeFlags&6&&(n.flags|=8192)):nn(n),s=n.updateQueue,s!==null&&$l(n,s.retryQueue),s=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),l=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(l=n.memoizedState.cachePool.pool),l!==s&&(n.flags|=2048),t!==null&&K(Us),null;case 24:return s=null,t!==null&&(s=t.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),ha(vn),nn(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function Px(t,n){switch(Vu(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return ha(vn),ze(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return Je(n),null;case 31:if(n.memoizedState!==null){if(fi(n),n.alternate===null)throw Error(r(340));Ds()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(fi(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));Ds()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return K(dn),null;case 4:return ze(),null;case 10:return ha(n.type),null;case 22:case 23:return fi(n),af(),t!==null&&K(Us),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return ha(vn),null;case 25:return null;default:return null}}function L0(t,n){switch(Vu(n),n.tag){case 3:ha(vn),ze();break;case 26:case 27:case 5:Je(n);break;case 4:ze();break;case 31:n.memoizedState!==null&&fi(n);break;case 13:fi(n);break;case 19:K(dn);break;case 10:ha(n.type);break;case 22:case 23:fi(n),af(),t!==null&&K(Us);break;case 24:ha(vn)}}function Oo(t,n){try{var s=n.updateQueue,l=s!==null?s.lastEffect:null;if(l!==null){var f=l.next;s=f;do{if((s.tag&t)===t){l=void 0;var d=s.create,S=s.inst;l=d(),S.destroy=l}s=s.next}while(s!==f)}}catch(R){qt(n,n.return,R)}}function $a(t,n,s){try{var l=n.updateQueue,f=l!==null?l.lastEffect:null;if(f!==null){var d=f.next;l=d;do{if((l.tag&t)===t){var S=l.inst,R=S.destroy;if(R!==void 0){S.destroy=void 0,f=n;var V=s,ae=R;try{ae()}catch(_e){qt(f,V,_e)}}}l=l.next}while(l!==d)}}catch(_e){qt(n,n.return,_e)}}function U0(t){var n=t.updateQueue;if(n!==null){var s=t.stateNode;try{Em(n,s)}catch(l){qt(t,t.return,l)}}}function O0(t,n,s){s.props=Bs(t.type,t.memoizedProps),s.state=t.memoizedState;try{s.componentWillUnmount()}catch(l){qt(t,n,l)}}function Po(t,n){try{var s=t.ref;if(s!==null){switch(t.tag){case 26:case 27:case 5:var l=t.stateNode;break;case 30:l=t.stateNode;break;default:l=t.stateNode}typeof s=="function"?t.refCleanup=s(l):s.current=l}}catch(f){qt(t,n,f)}}function Zi(t,n){var s=t.ref,l=t.refCleanup;if(s!==null)if(typeof l=="function")try{l()}catch(f){qt(t,n,f)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(f){qt(t,n,f)}else s.current=null}function P0(t){var n=t.type,s=t.memoizedProps,l=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":s.autoFocus&&l.focus();break e;case"img":s.src?l.src=s.src:s.srcSet&&(l.srcset=s.srcSet)}}catch(f){qt(t,t.return,f)}}function If(t,n,s){try{var l=t.stateNode;iM(l,t.type,s,n),l[en]=n}catch(f){qt(t,t.return,f)}}function I0(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&rs(t.type)||t.tag===4}function Ff(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||I0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&rs(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Bf(t,n,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,n?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(t,n):(n=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,n.appendChild(t),s=s._reactRootContainer,s!=null||n.onclick!==null||(n.onclick=la));else if(l!==4&&(l===27&&rs(t.type)&&(s=t.stateNode,n=null),t=t.child,t!==null))for(Bf(t,n,s),t=t.sibling;t!==null;)Bf(t,n,s),t=t.sibling}function ec(t,n,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,n?s.insertBefore(t,n):s.appendChild(t);else if(l!==4&&(l===27&&rs(t.type)&&(s=t.stateNode),t=t.child,t!==null))for(ec(t,n,s),t=t.sibling;t!==null;)ec(t,n,s),t=t.sibling}function F0(t){var n=t.stateNode,s=t.memoizedProps;try{for(var l=t.type,f=n.attributes;f.length;)n.removeAttributeNode(f[0]);Fn(n,l,s),n[Ot]=t,n[en]=s}catch(d){qt(t,t.return,d)}}var va=!1,Mn=!1,zf=!1,B0=typeof WeakSet=="function"?WeakSet:Set,Nn=null;function Ix(t,n){if(t=t.containerInfo,rd=Mc,t=Kp(t),Nu(t)){if("selectionStart"in t)var s={start:t.selectionStart,end:t.selectionEnd};else e:{s=(s=t.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var f=l.anchorOffset,d=l.focusNode;l=l.focusOffset;try{s.nodeType,d.nodeType}catch{s=null;break e}var S=0,R=-1,V=-1,ae=0,_e=0,Me=t,ce=null;t:for(;;){for(var ue;Me!==s||f!==0&&Me.nodeType!==3||(R=S+f),Me!==d||l!==0&&Me.nodeType!==3||(V=S+l),Me.nodeType===3&&(S+=Me.nodeValue.length),(ue=Me.firstChild)!==null;)ce=Me,Me=ue;for(;;){if(Me===t)break t;if(ce===s&&++ae===f&&(R=S),ce===d&&++_e===l&&(V=S),(ue=Me.nextSibling)!==null)break;Me=ce,ce=Me.parentNode}Me=ue}s=R===-1||V===-1?null:{start:R,end:V}}else s=null}s=s||{start:0,end:0}}else s=null;for(od={focusedElem:t,selectionRange:s},Mc=!1,Nn=n;Nn!==null;)if(n=Nn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,Nn=t;else for(;Nn!==null;){switch(n=Nn,d=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(s=0;s<t.length;s++)f=t[s],f.ref.impl=f.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&d!==null){t=void 0,s=n,f=d.memoizedProps,d=d.memoizedState,l=s.stateNode;try{var qe=Bs(s.type,f);t=l.getSnapshotBeforeUpdate(qe,d),l.__reactInternalSnapshotBeforeUpdate=t}catch(at){qt(s,s.return,at)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,s=t.nodeType,s===9)ud(t);else if(s===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":ud(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,Nn=t;break}Nn=n.return}}function z0(t,n,s){var l=s.flags;switch(s.tag){case 0:case 11:case 15:xa(t,s),l&4&&Oo(5,s);break;case 1:if(xa(t,s),l&4)if(t=s.stateNode,n===null)try{t.componentDidMount()}catch(S){qt(s,s.return,S)}else{var f=Bs(s.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(f,n,t.__reactInternalSnapshotBeforeUpdate)}catch(S){qt(s,s.return,S)}}l&64&&U0(s),l&512&&Po(s,s.return);break;case 3:if(xa(t,s),l&64&&(t=s.updateQueue,t!==null)){if(n=null,s.child!==null)switch(s.child.tag){case 27:case 5:n=s.child.stateNode;break;case 1:n=s.child.stateNode}try{Em(t,n)}catch(S){qt(s,s.return,S)}}break;case 27:n===null&&l&4&&F0(s);case 26:case 5:xa(t,s),n===null&&l&4&&P0(s),l&512&&Po(s,s.return);break;case 12:xa(t,s);break;case 31:xa(t,s),l&4&&V0(t,s);break;case 13:xa(t,s),l&4&&k0(t,s),l&64&&(t=s.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(s=Wx.bind(null,s),fM(t,s))));break;case 22:if(l=s.memoizedState!==null||va,!l){n=n!==null&&n.memoizedState!==null||Mn,f=va;var d=Mn;va=l,(Mn=n)&&!d?Ma(t,s,(s.subtreeFlags&8772)!==0):xa(t,s),va=f,Mn=d}break;case 30:break;default:xa(t,s)}}function H0(t){var n=t.alternate;n!==null&&(t.alternate=null,H0(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Ha(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var on=null,$n=!1;function Sa(t,n,s){for(s=s.child;s!==null;)G0(t,n,s),s=s.sibling}function G0(t,n,s){if(pe&&typeof pe.onCommitFiberUnmount=="function")try{pe.onCommitFiberUnmount(he,s)}catch{}switch(s.tag){case 26:Mn||Zi(s,n),Sa(t,n,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:Mn||Zi(s,n);var l=on,f=$n;rs(s.type)&&(on=s.stateNode,$n=!1),Sa(t,n,s),Xo(s.stateNode),on=l,$n=f;break;case 5:Mn||Zi(s,n);case 6:if(l=on,f=$n,on=null,Sa(t,n,s),on=l,$n=f,on!==null)if($n)try{(on.nodeType===9?on.body:on.nodeName==="HTML"?on.ownerDocument.body:on).removeChild(s.stateNode)}catch(d){qt(s,n,d)}else try{on.removeChild(s.stateNode)}catch(d){qt(s,n,d)}break;case 18:on!==null&&($n?(t=on,Ug(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,s.stateNode),Lr(t)):Ug(on,s.stateNode));break;case 4:l=on,f=$n,on=s.stateNode.containerInfo,$n=!0,Sa(t,n,s),on=l,$n=f;break;case 0:case 11:case 14:case 15:$a(2,s,n),Mn||$a(4,s,n),Sa(t,n,s);break;case 1:Mn||(Zi(s,n),l=s.stateNode,typeof l.componentWillUnmount=="function"&&O0(s,n,l)),Sa(t,n,s);break;case 21:Sa(t,n,s);break;case 22:Mn=(l=Mn)||s.memoizedState!==null,Sa(t,n,s),Mn=l;break;default:Sa(t,n,s)}}function V0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Lr(t)}catch(s){qt(n,n.return,s)}}}function k0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Lr(t)}catch(s){qt(n,n.return,s)}}function Fx(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new B0),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new B0),n;default:throw Error(r(435,t.tag))}}function tc(t,n){var s=Fx(t);n.forEach(function(l){if(!s.has(l)){s.add(l);var f=qx.bind(null,t,l);l.then(f,f)}})}function ei(t,n){var s=n.deletions;if(s!==null)for(var l=0;l<s.length;l++){var f=s[l],d=t,S=n,R=S;e:for(;R!==null;){switch(R.tag){case 27:if(rs(R.type)){on=R.stateNode,$n=!1;break e}break;case 5:on=R.stateNode,$n=!1;break e;case 3:case 4:on=R.stateNode.containerInfo,$n=!0;break e}R=R.return}if(on===null)throw Error(r(160));G0(d,S,f),on=null,$n=!1,d=f.alternate,d!==null&&(d.return=null),f.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)X0(n,t),n=n.sibling}var Pi=null;function X0(t,n){var s=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:ei(n,t),ti(t),l&4&&($a(3,t,t.return),Oo(3,t),$a(5,t,t.return));break;case 1:ei(n,t),ti(t),l&512&&(Mn||s===null||Zi(s,s.return)),l&64&&va&&(t=t.updateQueue,t!==null&&(l=t.callbacks,l!==null&&(s=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=s===null?l:s.concat(l))));break;case 26:var f=Pi;if(ei(n,t),ti(t),l&512&&(Mn||s===null||Zi(s,s.return)),l&4){var d=s!==null?s.memoizedState:null;if(l=t.memoizedState,s===null)if(l===null)if(t.stateNode===null){e:{l=t.type,s=t.memoizedProps,f=f.ownerDocument||f;t:switch(l){case"title":d=f.getElementsByTagName("title")[0],(!d||d[za]||d[Ot]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=f.createElement(l),f.head.insertBefore(d,f.querySelector("head > title"))),Fn(d,l,s),d[Ot]=t,_n(d),l=d;break e;case"link":var S=Xg("link","href",f).get(l+(s.href||""));if(S){for(var R=0;R<S.length;R++)if(d=S[R],d.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&d.getAttribute("rel")===(s.rel==null?null:s.rel)&&d.getAttribute("title")===(s.title==null?null:s.title)&&d.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){S.splice(R,1);break t}}d=f.createElement(l),Fn(d,l,s),f.head.appendChild(d);break;case"meta":if(S=Xg("meta","content",f).get(l+(s.content||""))){for(R=0;R<S.length;R++)if(d=S[R],d.getAttribute("content")===(s.content==null?null:""+s.content)&&d.getAttribute("name")===(s.name==null?null:s.name)&&d.getAttribute("property")===(s.property==null?null:s.property)&&d.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&d.getAttribute("charset")===(s.charSet==null?null:s.charSet)){S.splice(R,1);break t}}d=f.createElement(l),Fn(d,l,s),f.head.appendChild(d);break;default:throw Error(r(468,l))}d[Ot]=t,_n(d),l=d}t.stateNode=l}else Wg(f,t.type,t.stateNode);else t.stateNode=kg(f,l,t.memoizedProps);else d!==l?(d===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):d.count--,l===null?Wg(f,t.type,t.stateNode):kg(f,l,t.memoizedProps)):l===null&&t.stateNode!==null&&If(t,t.memoizedProps,s.memoizedProps)}break;case 27:ei(n,t),ti(t),l&512&&(Mn||s===null||Zi(s,s.return)),s!==null&&l&4&&If(t,t.memoizedProps,s.memoizedProps);break;case 5:if(ei(n,t),ti(t),l&512&&(Mn||s===null||Zi(s,s.return)),t.flags&32){f=t.stateNode;try{oi(f,"")}catch(qe){qt(t,t.return,qe)}}l&4&&t.stateNode!=null&&(f=t.memoizedProps,If(t,f,s!==null?s.memoizedProps:f)),l&1024&&(zf=!0);break;case 6:if(ei(n,t),ti(t),l&4){if(t.stateNode===null)throw Error(r(162));l=t.memoizedProps,s=t.stateNode;try{s.nodeValue=l}catch(qe){qt(t,t.return,qe)}}break;case 3:if(_c=null,f=Pi,Pi=mc(n.containerInfo),ei(n,t),Pi=f,ti(t),l&4&&s!==null&&s.memoizedState.isDehydrated)try{Lr(n.containerInfo)}catch(qe){qt(t,t.return,qe)}zf&&(zf=!1,W0(t));break;case 4:l=Pi,Pi=mc(t.stateNode.containerInfo),ei(n,t),ti(t),Pi=l;break;case 12:ei(n,t),ti(t);break;case 31:ei(n,t),ti(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,tc(t,l)));break;case 13:ei(n,t),ti(t),t.child.flags&8192&&t.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(ic=Mt()),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,tc(t,l)));break;case 22:f=t.memoizedState!==null;var V=s!==null&&s.memoizedState!==null,ae=va,_e=Mn;if(va=ae||f,Mn=_e||V,ei(n,t),Mn=_e,va=ae,ti(t),l&8192)e:for(n=t.stateNode,n._visibility=f?n._visibility&-2:n._visibility|1,f&&(s===null||V||va||Mn||zs(t)),s=null,n=t;;){if(n.tag===5||n.tag===26){if(s===null){V=s=n;try{if(d=V.stateNode,f)S=d.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{R=V.stateNode;var Me=V.memoizedProps.style,ce=Me!=null&&Me.hasOwnProperty("display")?Me.display:null;R.style.display=ce==null||typeof ce=="boolean"?"":(""+ce).trim()}}catch(qe){qt(V,V.return,qe)}}}else if(n.tag===6){if(s===null){V=n;try{V.stateNode.nodeValue=f?"":V.memoizedProps}catch(qe){qt(V,V.return,qe)}}}else if(n.tag===18){if(s===null){V=n;try{var ue=V.stateNode;f?Og(ue,!0):Og(V.stateNode,!1)}catch(qe){qt(V,V.return,qe)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;s===n&&(s=null),n=n.return}s===n&&(s=null),n.sibling.return=n.return,n=n.sibling}l&4&&(l=t.updateQueue,l!==null&&(s=l.retryQueue,s!==null&&(l.retryQueue=null,tc(t,s))));break;case 19:ei(n,t),ti(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,tc(t,l)));break;case 30:break;case 21:break;default:ei(n,t),ti(t)}}function ti(t){var n=t.flags;if(n&2){try{for(var s,l=t.return;l!==null;){if(I0(l)){s=l;break}l=l.return}if(s==null)throw Error(r(160));switch(s.tag){case 27:var f=s.stateNode,d=Ff(t);ec(t,d,f);break;case 5:var S=s.stateNode;s.flags&32&&(oi(S,""),s.flags&=-33);var R=Ff(t);ec(t,R,S);break;case 3:case 4:var V=s.stateNode.containerInfo,ae=Ff(t);Bf(t,ae,V);break;default:throw Error(r(161))}}catch(_e){qt(t,t.return,_e)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function W0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;W0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function xa(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)z0(t,n.alternate,n),n=n.sibling}function zs(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:$a(4,n,n.return),zs(n);break;case 1:Zi(n,n.return);var s=n.stateNode;typeof s.componentWillUnmount=="function"&&O0(n,n.return,s),zs(n);break;case 27:Xo(n.stateNode);case 26:case 5:Zi(n,n.return),zs(n);break;case 22:n.memoizedState===null&&zs(n);break;case 30:zs(n);break;default:zs(n)}t=t.sibling}}function Ma(t,n,s){for(s=s&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var l=n.alternate,f=t,d=n,S=d.flags;switch(d.tag){case 0:case 11:case 15:Ma(f,d,s),Oo(4,d);break;case 1:if(Ma(f,d,s),l=d,f=l.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(ae){qt(l,l.return,ae)}if(l=d,f=l.updateQueue,f!==null){var R=l.stateNode;try{var V=f.shared.hiddenCallbacks;if(V!==null)for(f.shared.hiddenCallbacks=null,f=0;f<V.length;f++)ym(V[f],R)}catch(ae){qt(l,l.return,ae)}}s&&S&64&&U0(d),Po(d,d.return);break;case 27:F0(d);case 26:case 5:Ma(f,d,s),s&&l===null&&S&4&&P0(d),Po(d,d.return);break;case 12:Ma(f,d,s);break;case 31:Ma(f,d,s),s&&S&4&&V0(f,d);break;case 13:Ma(f,d,s),s&&S&4&&k0(f,d);break;case 22:d.memoizedState===null&&Ma(f,d,s),Po(d,d.return);break;case 30:break;default:Ma(f,d,s)}n=n.sibling}}function Hf(t,n){var s=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==s&&(t!=null&&t.refCount++,s!=null&&Mo(s))}function Gf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Mo(t))}function Ii(t,n,s,l){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)q0(t,n,s,l),n=n.sibling}function q0(t,n,s,l){var f=n.flags;switch(n.tag){case 0:case 11:case 15:Ii(t,n,s,l),f&2048&&Oo(9,n);break;case 1:Ii(t,n,s,l);break;case 3:Ii(t,n,s,l),f&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Mo(t)));break;case 12:if(f&2048){Ii(t,n,s,l),t=n.stateNode;try{var d=n.memoizedProps,S=d.id,R=d.onPostCommit;typeof R=="function"&&R(S,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(V){qt(n,n.return,V)}}else Ii(t,n,s,l);break;case 31:Ii(t,n,s,l);break;case 13:Ii(t,n,s,l);break;case 23:break;case 22:d=n.stateNode,S=n.alternate,n.memoizedState!==null?d._visibility&2?Ii(t,n,s,l):Io(t,n):d._visibility&2?Ii(t,n,s,l):(d._visibility|=2,Mr(t,n,s,l,(n.subtreeFlags&10256)!==0||!1)),f&2048&&Hf(S,n);break;case 24:Ii(t,n,s,l),f&2048&&Gf(n.alternate,n);break;default:Ii(t,n,s,l)}}function Mr(t,n,s,l,f){for(f=f&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var d=t,S=n,R=s,V=l,ae=S.flags;switch(S.tag){case 0:case 11:case 15:Mr(d,S,R,V,f),Oo(8,S);break;case 23:break;case 22:var _e=S.stateNode;S.memoizedState!==null?_e._visibility&2?Mr(d,S,R,V,f):Io(d,S):(_e._visibility|=2,Mr(d,S,R,V,f)),f&&ae&2048&&Hf(S.alternate,S);break;case 24:Mr(d,S,R,V,f),f&&ae&2048&&Gf(S.alternate,S);break;default:Mr(d,S,R,V,f)}n=n.sibling}}function Io(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var s=t,l=n,f=l.flags;switch(l.tag){case 22:Io(s,l),f&2048&&Hf(l.alternate,l);break;case 24:Io(s,l),f&2048&&Gf(l.alternate,l);break;default:Io(s,l)}n=n.sibling}}var Fo=8192;function yr(t,n,s){if(t.subtreeFlags&Fo)for(t=t.child;t!==null;)Y0(t,n,s),t=t.sibling}function Y0(t,n,s){switch(t.tag){case 26:yr(t,n,s),t.flags&Fo&&t.memoizedState!==null&&EM(s,Pi,t.memoizedState,t.memoizedProps);break;case 5:yr(t,n,s);break;case 3:case 4:var l=Pi;Pi=mc(t.stateNode.containerInfo),yr(t,n,s),Pi=l;break;case 22:t.memoizedState===null&&(l=t.alternate,l!==null&&l.memoizedState!==null?(l=Fo,Fo=16777216,yr(t,n,s),Fo=l):yr(t,n,s));break;default:yr(t,n,s)}}function Z0(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function Bo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var s=0;s<n.length;s++){var l=n[s];Nn=l,K0(l,t)}Z0(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)j0(t),t=t.sibling}function j0(t){switch(t.tag){case 0:case 11:case 15:Bo(t),t.flags&2048&&$a(9,t,t.return);break;case 3:Bo(t);break;case 12:Bo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,nc(t)):Bo(t);break;default:Bo(t)}}function nc(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var s=0;s<n.length;s++){var l=n[s];Nn=l,K0(l,t)}Z0(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:$a(8,n,n.return),nc(n);break;case 22:s=n.stateNode,s._visibility&2&&(s._visibility&=-3,nc(n));break;default:nc(n)}t=t.sibling}}function K0(t,n){for(;Nn!==null;){var s=Nn;switch(s.tag){case 0:case 11:case 15:$a(8,s,n);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var l=s.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Mo(s.memoizedState.cache)}if(l=s.child,l!==null)l.return=s,Nn=l;else e:for(s=t;Nn!==null;){l=Nn;var f=l.sibling,d=l.return;if(H0(l),l===s){Nn=null;break e}if(f!==null){f.return=d,Nn=f;break e}Nn=d}}}var Bx={getCacheForType:function(t){var n=Pn(vn),s=n.data.get(t);return s===void 0&&(s=t(),n.data.set(t,s)),s},cacheSignal:function(){return Pn(vn).controller.signal}},zx=typeof WeakMap=="function"?WeakMap:Map,zt=0,$t=null,Et=null,Tt=0,Wt=0,di=null,es=!1,Er=!1,Vf=!1,ya=0,cn=0,ts=0,Hs=0,kf=0,hi=0,br=0,zo=null,ni=null,Xf=!1,ic=0,Q0=0,ac=1/0,sc=null,ns=null,Rn=0,is=null,Tr=null,Ea=0,Wf=0,qf=null,J0=null,Ho=0,Yf=null;function pi(){return(zt&2)!==0&&Tt!==0?Tt&-Tt:F.T!==null?$f():Tn()}function $0(){if(hi===0)if((Tt&536870912)===0||Rt){var t=st;st<<=1,(st&3932160)===0&&(st=262144),hi=t}else hi=536870912;return t=ui.current,t!==null&&(t.flags|=32),hi}function ii(t,n,s){(t===$t&&(Wt===2||Wt===9)||t.cancelPendingCommit!==null)&&(Ar(t,0),as(t,Tt,hi,!1)),He(t,s),((zt&2)===0||t!==$t)&&(t===$t&&((zt&2)===0&&(Hs|=s),cn===4&&as(t,Tt,hi,!1)),ji(t))}function eg(t,n,s){if((zt&6)!==0)throw Error(r(327));var l=!s&&(n&127)===0&&(n&t.expiredLanes)===0||we(t,n),f=l?Vx(t,n):jf(t,n,!0),d=l;do{if(f===0){Er&&!l&&as(t,n,0,!1);break}else{if(s=t.current.alternate,d&&!Hx(s)){f=jf(t,n,!1),d=!1;continue}if(f===2){if(d=n,t.errorRecoveryDisabledLanes&d)var S=0;else S=t.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){n=S;e:{var R=t;f=zo;var V=R.current.memoizedState.isDehydrated;if(V&&(Ar(R,S).flags|=256),S=jf(R,S,!1),S!==2){if(Vf&&!V){R.errorRecoveryDisabledLanes|=d,Hs|=d,f=4;break e}d=ni,ni=f,d!==null&&(ni===null?ni=d:ni.push.apply(ni,d))}f=S}if(d=!1,f!==2)continue}}if(f===1){Ar(t,0),as(t,n,0,!0);break}e:{switch(l=t,d=f,d){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:as(l,n,hi,!es);break e;case 2:ni=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(f=ic+300-Mt(),10<f)){if(as(l,n,hi,!es),ge(l,0,!0)!==0)break e;Ea=n,l.timeoutHandle=Ng(tg.bind(null,l,s,ni,sc,Xf,n,hi,Hs,br,es,d,"Throttled",-0,0),f);break e}tg(l,s,ni,sc,Xf,n,hi,Hs,br,es,d,null,-0,0)}}break}while(!0);ji(t)}function tg(t,n,s,l,f,d,S,R,V,ae,_e,Me,ce,ue){if(t.timeoutHandle=-1,Me=n.subtreeFlags,Me&8192||(Me&16785408)===16785408){Me={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:la},Y0(n,d,Me);var qe=(d&62914560)===d?ic-Mt():(d&4194048)===d?Q0-Mt():0;if(qe=bM(Me,qe),qe!==null){Ea=d,t.cancelPendingCommit=qe(cg.bind(null,t,n,d,s,l,f,S,R,V,_e,Me,null,ce,ue)),as(t,d,S,!ae);return}}cg(t,n,d,s,l,f,S,R,V)}function Hx(t){for(var n=t;;){var s=n.tag;if((s===0||s===11||s===15)&&n.flags&16384&&(s=n.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var l=0;l<s.length;l++){var f=s[l],d=f.getSnapshot;f=f.value;try{if(!li(d(),f))return!1}catch{return!1}}if(s=n.child,n.subtreeFlags&16384&&s!==null)s.return=n,n=s;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function as(t,n,s,l){n&=~kf,n&=~Hs,t.suspendedLanes|=n,t.pingedLanes&=~n,l&&(t.warmLanes|=n),l=t.expirationTimes;for(var f=n;0<f;){var d=31-Be(f),S=1<<d;l[d]=-1,f&=~S}s!==0&&Lt(t,s,n)}function rc(){return(zt&6)===0?(Go(0),!1):!0}function Zf(){if(Et!==null){if(Wt===0)var t=Et.return;else t=Et,da=Ns=null,uf(t),gr=null,Eo=0,t=Et;for(;t!==null;)L0(t.alternate,t),t=t.return;Et=null}}function Ar(t,n){var s=t.timeoutHandle;s!==-1&&(t.timeoutHandle=-1,rM(s)),s=t.cancelPendingCommit,s!==null&&(t.cancelPendingCommit=null,s()),Ea=0,Zf(),$t=t,Et=s=ua(t.current,null),Tt=n,Wt=0,di=null,es=!1,Er=we(t,n),Vf=!1,br=hi=kf=Hs=ts=cn=0,ni=zo=null,Xf=!1,(n&8)!==0&&(n|=n&32);var l=t.entangledLanes;if(l!==0)for(t=t.entanglements,l&=n;0<l;){var f=31-Be(l),d=1<<f;n|=t[f],l&=~d}return ya=n,Rl(),s}function ng(t,n){ht=null,F.H=No,n===mr||n===Pl?(n=vm(),Wt=3):n===Qu?(n=vm(),Wt=4):Wt=n===Af?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,di=n,Et===null&&(cn=1,jl(t,Si(n,t.current)))}function ig(){var t=ui.current;return t===null?!0:(Tt&4194048)===Tt?Ei===null:(Tt&62914560)===Tt||(Tt&536870912)!==0?t===Ei:!1}function ag(){var t=F.H;return F.H=No,t===null?No:t}function sg(){var t=F.A;return F.A=Bx,t}function oc(){cn=4,es||(Tt&4194048)!==Tt&&ui.current!==null||(Er=!0),(ts&134217727)===0&&(Hs&134217727)===0||$t===null||as($t,Tt,hi,!1)}function jf(t,n,s){var l=zt;zt|=2;var f=ag(),d=sg();($t!==t||Tt!==n)&&(sc=null,Ar(t,n)),n=!1;var S=cn;e:do try{if(Wt!==0&&Et!==null){var R=Et,V=di;switch(Wt){case 8:Zf(),S=6;break e;case 3:case 2:case 9:case 6:ui.current===null&&(n=!0);var ae=Wt;if(Wt=0,di=null,Rr(t,R,V,ae),s&&Er){S=0;break e}break;default:ae=Wt,Wt=0,di=null,Rr(t,R,V,ae)}}Gx(),S=cn;break}catch(_e){ng(t,_e)}while(!0);return n&&t.shellSuspendCounter++,da=Ns=null,zt=l,F.H=f,F.A=d,Et===null&&($t=null,Tt=0,Rl()),S}function Gx(){for(;Et!==null;)rg(Et)}function Vx(t,n){var s=zt;zt|=2;var l=ag(),f=sg();$t!==t||Tt!==n?(sc=null,ac=Mt()+500,Ar(t,n)):Er=we(t,n);e:do try{if(Wt!==0&&Et!==null){n=Et;var d=di;t:switch(Wt){case 1:Wt=0,di=null,Rr(t,n,d,1);break;case 2:case 9:if(gm(d)){Wt=0,di=null,og(n);break}n=function(){Wt!==2&&Wt!==9||$t!==t||(Wt=7),ji(t)},d.then(n,n);break e;case 3:Wt=7;break e;case 4:Wt=5;break e;case 7:gm(d)?(Wt=0,di=null,og(n)):(Wt=0,di=null,Rr(t,n,d,7));break;case 5:var S=null;switch(Et.tag){case 26:S=Et.memoizedState;case 5:case 27:var R=Et;if(S?qg(S):R.stateNode.complete){Wt=0,di=null;var V=R.sibling;if(V!==null)Et=V;else{var ae=R.return;ae!==null?(Et=ae,lc(ae)):Et=null}break t}}Wt=0,di=null,Rr(t,n,d,5);break;case 6:Wt=0,di=null,Rr(t,n,d,6);break;case 8:Zf(),cn=6;break e;default:throw Error(r(462))}}kx();break}catch(_e){ng(t,_e)}while(!0);return da=Ns=null,F.H=l,F.A=f,zt=s,Et!==null?0:($t=null,Tt=0,Rl(),cn)}function kx(){for(;Et!==null&&!_t();)rg(Et)}function rg(t){var n=D0(t.alternate,t,ya);t.memoizedProps=t.pendingProps,n===null?lc(t):Et=n}function og(t){var n=t,s=n.alternate;switch(n.tag){case 15:case 0:n=b0(s,n,n.pendingProps,n.type,void 0,Tt);break;case 11:n=b0(s,n,n.pendingProps,n.type.render,n.ref,Tt);break;case 5:uf(n);default:L0(s,n),n=Et=sm(n,ya),n=D0(s,n,ya)}t.memoizedProps=t.pendingProps,n===null?lc(t):Et=n}function Rr(t,n,s,l){da=Ns=null,uf(n),gr=null,Eo=0;var f=n.return;try{if(Nx(t,f,n,s,Tt)){cn=1,jl(t,Si(s,t.current)),Et=null;return}}catch(d){if(f!==null)throw Et=f,d;cn=1,jl(t,Si(s,t.current)),Et=null;return}n.flags&32768?(Rt||l===1?t=!0:Er||(Tt&536870912)!==0?t=!1:(es=t=!0,(l===2||l===9||l===3||l===6)&&(l=ui.current,l!==null&&l.tag===13&&(l.flags|=16384))),lg(n,t)):lc(n)}function lc(t){var n=t;do{if((n.flags&32768)!==0){lg(n,es);return}t=n.return;var s=Ox(n.alternate,n,ya);if(s!==null){Et=s;return}if(n=n.sibling,n!==null){Et=n;return}Et=n=t}while(n!==null);cn===0&&(cn=5)}function lg(t,n){do{var s=Px(t.alternate,t);if(s!==null){s.flags&=32767,Et=s;return}if(s=t.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!n&&(t=t.sibling,t!==null)){Et=t;return}Et=t=s}while(t!==null);cn=6,Et=null}function cg(t,n,s,l,f,d,S,R,V){t.cancelPendingCommit=null;do cc();while(Rn!==0);if((zt&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));if(d=n.lanes|n.childLanes,d|=Iu,Gt(t,s,d,S,R,V),t===$t&&(Et=$t=null,Tt=0),Tr=n,is=t,Ea=s,Wf=d,qf=f,J0=l,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Yx(J,function(){return pg(),null})):(t.callbackNode=null,t.callbackPriority=0),l=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||l){l=F.T,F.T=null,f=H.p,H.p=2,S=zt,zt|=4;try{Ix(t,n,s)}finally{zt=S,H.p=f,F.T=l}}Rn=1,ug(),fg(),dg()}}function ug(){if(Rn===1){Rn=0;var t=is,n=Tr,s=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||s){s=F.T,F.T=null;var l=H.p;H.p=2;var f=zt;zt|=4;try{X0(n,t);var d=od,S=Kp(t.containerInfo),R=d.focusedElem,V=d.selectionRange;if(S!==R&&R&&R.ownerDocument&&jp(R.ownerDocument.documentElement,R)){if(V!==null&&Nu(R)){var ae=V.start,_e=V.end;if(_e===void 0&&(_e=ae),"selectionStart"in R)R.selectionStart=ae,R.selectionEnd=Math.min(_e,R.value.length);else{var Me=R.ownerDocument||document,ce=Me&&Me.defaultView||window;if(ce.getSelection){var ue=ce.getSelection(),qe=R.textContent.length,at=Math.min(V.start,qe),Qt=V.end===void 0?at:Math.min(V.end,qe);!ue.extend&&at>Qt&&(S=Qt,Qt=at,at=S);var Q=Zp(R,at),k=Zp(R,Qt);if(Q&&k&&(ue.rangeCount!==1||ue.anchorNode!==Q.node||ue.anchorOffset!==Q.offset||ue.focusNode!==k.node||ue.focusOffset!==k.offset)){var ne=Me.createRange();ne.setStart(Q.node,Q.offset),ue.removeAllRanges(),at>Qt?(ue.addRange(ne),ue.extend(k.node,k.offset)):(ne.setEnd(k.node,k.offset),ue.addRange(ne))}}}}for(Me=[],ue=R;ue=ue.parentNode;)ue.nodeType===1&&Me.push({element:ue,left:ue.scrollLeft,top:ue.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<Me.length;R++){var ve=Me[R];ve.element.scrollLeft=ve.left,ve.element.scrollTop=ve.top}}Mc=!!rd,od=rd=null}finally{zt=f,H.p=l,F.T=s}}t.current=n,Rn=2}}function fg(){if(Rn===2){Rn=0;var t=is,n=Tr,s=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||s){s=F.T,F.T=null;var l=H.p;H.p=2;var f=zt;zt|=4;try{z0(t,n.alternate,n)}finally{zt=f,H.p=l,F.T=s}}Rn=3}}function dg(){if(Rn===4||Rn===3){Rn=0,X();var t=is,n=Tr,s=Ea,l=J0;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Rn=5:(Rn=0,Tr=is=null,hg(t,t.pendingLanes));var f=t.pendingLanes;if(f===0&&(ns=null),mn(s),n=n.stateNode,pe&&typeof pe.onCommitFiberRoot=="function")try{pe.onCommitFiberRoot(he,n,void 0,(n.current.flags&128)===128)}catch{}if(l!==null){n=F.T,f=H.p,H.p=2,F.T=null;try{for(var d=t.onRecoverableError,S=0;S<l.length;S++){var R=l[S];d(R.value,{componentStack:R.stack})}}finally{F.T=n,H.p=f}}(Ea&3)!==0&&cc(),ji(t),f=t.pendingLanes,(s&261930)!==0&&(f&42)!==0?t===Yf?Ho++:(Ho=0,Yf=t):Ho=0,Go(0)}}function hg(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Mo(n)))}function cc(){return ug(),fg(),dg(),pg()}function pg(){if(Rn!==5)return!1;var t=is,n=Wf;Wf=0;var s=mn(Ea),l=F.T,f=H.p;try{H.p=32>s?32:s,F.T=null,s=qf,qf=null;var d=is,S=Ea;if(Rn=0,Tr=is=null,Ea=0,(zt&6)!==0)throw Error(r(331));var R=zt;if(zt|=4,j0(d.current),q0(d,d.current,S,s),zt=R,Go(0,!1),pe&&typeof pe.onPostCommitFiberRoot=="function")try{pe.onPostCommitFiberRoot(he,d)}catch{}return!0}finally{H.p=f,F.T=l,hg(t,n)}}function mg(t,n,s){n=Si(s,n),n=Tf(t.stateNode,n,2),t=Ka(t,n,2),t!==null&&(He(t,2),ji(t))}function qt(t,n,s){if(t.tag===3)mg(t,t,s);else for(;n!==null;){if(n.tag===3){mg(n,t,s);break}else if(n.tag===1){var l=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(ns===null||!ns.has(l))){t=Si(s,t),s=g0(2),l=Ka(n,s,2),l!==null&&(_0(s,l,n,t),He(l,2),ji(l));break}}n=n.return}}function Kf(t,n,s){var l=t.pingCache;if(l===null){l=t.pingCache=new zx;var f=new Set;l.set(n,f)}else f=l.get(n),f===void 0&&(f=new Set,l.set(n,f));f.has(s)||(Vf=!0,f.add(s),t=Xx.bind(null,t,n,s),n.then(t,t))}function Xx(t,n,s){var l=t.pingCache;l!==null&&l.delete(n),t.pingedLanes|=t.suspendedLanes&s,t.warmLanes&=~s,$t===t&&(Tt&s)===s&&(cn===4||cn===3&&(Tt&62914560)===Tt&&300>Mt()-ic?(zt&2)===0&&Ar(t,0):kf|=s,br===Tt&&(br=0)),ji(t)}function gg(t,n){n===0&&(n=be()),t=Cs(t,n),t!==null&&(He(t,n),ji(t))}function Wx(t){var n=t.memoizedState,s=0;n!==null&&(s=n.retryLane),gg(t,s)}function qx(t,n){var s=0;switch(t.tag){case 31:case 13:var l=t.stateNode,f=t.memoizedState;f!==null&&(s=f.retryLane);break;case 19:l=t.stateNode;break;case 22:l=t.stateNode._retryCache;break;default:throw Error(r(314))}l!==null&&l.delete(n),gg(t,s)}function Yx(t,n){return Dt(t,n)}var uc=null,Cr=null,Qf=!1,fc=!1,Jf=!1,ss=0;function ji(t){t!==Cr&&t.next===null&&(Cr===null?uc=Cr=t:Cr=Cr.next=t),fc=!0,Qf||(Qf=!0,jx())}function Go(t,n){if(!Jf&&fc){Jf=!0;do for(var s=!1,l=uc;l!==null;){if(t!==0){var f=l.pendingLanes;if(f===0)var d=0;else{var S=l.suspendedLanes,R=l.pingedLanes;d=(1<<31-Be(42|t)+1)-1,d&=f&~(S&~R),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(s=!0,xg(l,d))}else d=Tt,d=ge(l,l===$t?d:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(d&3)===0||we(l,d)||(s=!0,xg(l,d));l=l.next}while(s);Jf=!1}}function Zx(){_g()}function _g(){fc=Qf=!1;var t=0;ss!==0&&sM()&&(t=ss);for(var n=Mt(),s=null,l=uc;l!==null;){var f=l.next,d=vg(l,n);d===0?(l.next=null,s===null?uc=f:s.next=f,f===null&&(Cr=s)):(s=l,(t!==0||(d&3)!==0)&&(fc=!0)),l=f}Rn!==0&&Rn!==5||Go(t),ss!==0&&(ss=0)}function vg(t,n){for(var s=t.suspendedLanes,l=t.pingedLanes,f=t.expirationTimes,d=t.pendingLanes&-62914561;0<d;){var S=31-Be(d),R=1<<S,V=f[S];V===-1?((R&s)===0||(R&l)!==0)&&(f[S]=Pe(R,n)):V<=n&&(t.expiredLanes|=R),d&=~R}if(n=$t,s=Tt,s=ge(t,t===n?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l=t.callbackNode,s===0||t===n&&(Wt===2||Wt===9)||t.cancelPendingCommit!==null)return l!==null&&l!==null&&ft(l),t.callbackNode=null,t.callbackPriority=0;if((s&3)===0||we(t,s)){if(n=s&-s,n===t.callbackPriority)return n;switch(l!==null&&ft(l),mn(s)){case 2:case 8:s=E;break;case 32:s=J;break;case 268435456:s=fe;break;default:s=J}return l=Sg.bind(null,t),s=Dt(s,l),t.callbackPriority=n,t.callbackNode=s,n}return l!==null&&l!==null&&ft(l),t.callbackPriority=2,t.callbackNode=null,2}function Sg(t,n){if(Rn!==0&&Rn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var s=t.callbackNode;if(cc()&&t.callbackNode!==s)return null;var l=Tt;return l=ge(t,t===$t?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l===0?null:(eg(t,l,n),vg(t,Mt()),t.callbackNode!=null&&t.callbackNode===s?Sg.bind(null,t):null)}function xg(t,n){if(cc())return null;eg(t,n,!0)}function jx(){oM(function(){(zt&6)!==0?Dt(L,Zx):_g()})}function $f(){if(ss===0){var t=hr;t===0&&(t=je,je<<=1,(je&261888)===0&&(je=256)),ss=t}return ss}function Mg(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:bs(""+t)}function yg(t,n){var s=n.ownerDocument.createElement("input");return s.name=n.name,s.value=n.value,t.id&&s.setAttribute("form",t.id),n.parentNode.insertBefore(s,n),t=new FormData(t),s.parentNode.removeChild(s),t}function Kx(t,n,s,l,f){if(n==="submit"&&s&&s.stateNode===f){var d=Mg((f[en]||null).action),S=l.submitter;S&&(n=(n=S[en]||null)?Mg(n.formAction):S.getAttribute("formAction"),n!==null&&(d=n,S=null));var R=new El("action","action",null,l,f);t.push({event:R,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(ss!==0){var V=S?yg(f,S):new FormData(f);Sf(s,{pending:!0,data:V,method:f.method,action:d},null,V)}}else typeof d=="function"&&(R.preventDefault(),V=S?yg(f,S):new FormData(f),Sf(s,{pending:!0,data:V,method:f.method,action:d},d,V))},currentTarget:f}]})}}for(var ed=0;ed<Pu.length;ed++){var td=Pu[ed],Qx=td.toLowerCase(),Jx=td[0].toUpperCase()+td.slice(1);Oi(Qx,"on"+Jx)}Oi($p,"onAnimationEnd"),Oi(em,"onAnimationIteration"),Oi(tm,"onAnimationStart"),Oi("dblclick","onDoubleClick"),Oi("focusin","onFocus"),Oi("focusout","onBlur"),Oi(px,"onTransitionRun"),Oi(mx,"onTransitionStart"),Oi(gx,"onTransitionCancel"),Oi(nm,"onTransitionEnd"),le("onMouseEnter",["mouseout","mouseover"]),le("onMouseLeave",["mouseout","mouseover"]),le("onPointerEnter",["pointerout","pointerover"]),le("onPointerLeave",["pointerout","pointerover"]),j("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),j("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),j("onBeforeInput",["compositionend","keypress","textInput","paste"]),j("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),j("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),j("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Vo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),$x=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Vo));function Eg(t,n){n=(n&4)!==0;for(var s=0;s<t.length;s++){var l=t[s],f=l.event;l=l.listeners;e:{var d=void 0;if(n)for(var S=l.length-1;0<=S;S--){var R=l[S],V=R.instance,ae=R.currentTarget;if(R=R.listener,V!==d&&f.isPropagationStopped())break e;d=R,f.currentTarget=ae;try{d(f)}catch(_e){Al(_e)}f.currentTarget=null,d=V}else for(S=0;S<l.length;S++){if(R=l[S],V=R.instance,ae=R.currentTarget,R=R.listener,V!==d&&f.isPropagationStopped())break e;d=R,f.currentTarget=ae;try{d(f)}catch(_e){Al(_e)}f.currentTarget=null,d=V}}}}function bt(t,n){var s=n[Qn];s===void 0&&(s=n[Qn]=new Set);var l=t+"__bubble";s.has(l)||(bg(n,t,2,!1),s.add(l))}function nd(t,n,s){var l=0;n&&(l|=4),bg(s,t,l,n)}var dc="_reactListening"+Math.random().toString(36).slice(2);function id(t){if(!t[dc]){t[dc]=!0,Sl.forEach(function(s){s!=="selectionchange"&&($x.has(s)||nd(s,!1,t),nd(s,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[dc]||(n[dc]=!0,nd("selectionchange",!1,n))}}function bg(t,n,s,l){switch($g(n)){case 2:var f=RM;break;case 8:f=CM;break;default:f=vd}s=f.bind(null,n,s,t),f=void 0,!yu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(f=!0),l?f!==void 0?t.addEventListener(n,s,{capture:!0,passive:f}):t.addEventListener(n,s,!0):f!==void 0?t.addEventListener(n,s,{passive:f}):t.addEventListener(n,s,!1)}function ad(t,n,s,l,f){var d=l;if((n&1)===0&&(n&2)===0&&l!==null)e:for(;;){if(l===null)return;var S=l.tag;if(S===3||S===4){var R=l.stateNode.containerInfo;if(R===f)break;if(S===4)for(S=l.return;S!==null;){var V=S.tag;if((V===3||V===4)&&S.stateNode.containerInfo===f)return;S=S.return}for(;R!==null;){if(S=ra(R),S===null)return;if(V=S.tag,V===5||V===6||V===26||V===27){l=d=S;continue e}R=R.parentNode}}l=l.return}wp(function(){var ae=d,_e=xu(s),Me=[];e:{var ce=im.get(t);if(ce!==void 0){var ue=El,qe=t;switch(t){case"keypress":if(Ml(s)===0)break e;case"keydown":case"keyup":ue=qS;break;case"focusin":qe="focus",ue=Au;break;case"focusout":qe="blur",ue=Au;break;case"beforeblur":case"afterblur":ue=Au;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ue=Lp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ue=OS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ue=jS;break;case $p:case em:case tm:ue=FS;break;case nm:ue=QS;break;case"scroll":case"scrollend":ue=LS;break;case"wheel":ue=$S;break;case"copy":case"cut":case"paste":ue=zS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ue=Op;break;case"toggle":case"beforetoggle":ue=tx}var at=(n&4)!==0,Qt=!at&&(t==="scroll"||t==="scrollend"),Q=at?ce!==null?ce+"Capture":null:ce;at=[];for(var k=ae,ne;k!==null;){var ve=k;if(ne=ve.stateNode,ve=ve.tag,ve!==5&&ve!==26&&ve!==27||ne===null||Q===null||(ve=co(k,Q),ve!=null&&at.push(ko(k,ve,ne))),Qt)break;k=k.return}0<at.length&&(ce=new ue(ce,qe,null,s,_e),Me.push({event:ce,listeners:at}))}}if((n&7)===0){e:{if(ce=t==="mouseover"||t==="pointerover",ue=t==="mouseout"||t==="pointerout",ce&&s!==Su&&(qe=s.relatedTarget||s.fromElement)&&(ra(qe)||qe[Dn]))break e;if((ue||ce)&&(ce=_e.window===_e?_e:(ce=_e.ownerDocument)?ce.defaultView||ce.parentWindow:window,ue?(qe=s.relatedTarget||s.toElement,ue=ae,qe=qe?ra(qe):null,qe!==null&&(Qt=c(qe),at=qe.tag,qe!==Qt||at!==5&&at!==27&&at!==6)&&(qe=null)):(ue=null,qe=ae),ue!==qe)){if(at=Lp,ve="onMouseLeave",Q="onMouseEnter",k="mouse",(t==="pointerout"||t==="pointerover")&&(at=Op,ve="onPointerLeave",Q="onPointerEnter",k="pointer"),Qt=ue==null?ce:Es(ue),ne=qe==null?ce:Es(qe),ce=new at(ve,k+"leave",ue,s,_e),ce.target=Qt,ce.relatedTarget=ne,ve=null,ra(_e)===ae&&(at=new at(Q,k+"enter",qe,s,_e),at.target=ne,at.relatedTarget=Qt,ve=at),Qt=ve,ue&&qe)t:{for(at=eM,Q=ue,k=qe,ne=0,ve=Q;ve;ve=at(ve))ne++;ve=0;for(var nt=k;nt;nt=at(nt))ve++;for(;0<ne-ve;)Q=at(Q),ne--;for(;0<ve-ne;)k=at(k),ve--;for(;ne--;){if(Q===k||k!==null&&Q===k.alternate){at=Q;break t}Q=at(Q),k=at(k)}at=null}else at=null;ue!==null&&Tg(Me,ce,ue,at,!1),qe!==null&&Qt!==null&&Tg(Me,Qt,qe,at,!0)}}e:{if(ce=ae?Es(ae):window,ue=ce.nodeName&&ce.nodeName.toLowerCase(),ue==="select"||ue==="input"&&ce.type==="file")var It=Vp;else if(Hp(ce))if(kp)It=fx;else{It=cx;var Ke=lx}else ue=ce.nodeName,!ue||ue.toLowerCase()!=="input"||ce.type!=="checkbox"&&ce.type!=="radio"?ae&&Ht(ae.elementType)&&(It=Vp):It=ux;if(It&&(It=It(t,ae))){Gp(Me,It,s,_e);break e}Ke&&Ke(t,ce,ae),t==="focusout"&&ae&&ce.type==="number"&&ae.memoizedProps.value!=null&&yt(ce,"number",ce.value)}switch(Ke=ae?Es(ae):window,t){case"focusin":(Hp(Ke)||Ke.contentEditable==="true")&&(sr=Ke,Lu=ae,vo=null);break;case"focusout":vo=Lu=sr=null;break;case"mousedown":Uu=!0;break;case"contextmenu":case"mouseup":case"dragend":Uu=!1,Qp(Me,s,_e);break;case"selectionchange":if(hx)break;case"keydown":case"keyup":Qp(Me,s,_e)}var pt;if(Cu)e:{switch(t){case"compositionstart":var At="onCompositionStart";break e;case"compositionend":At="onCompositionEnd";break e;case"compositionupdate":At="onCompositionUpdate";break e}At=void 0}else ar?Bp(t,s)&&(At="onCompositionEnd"):t==="keydown"&&s.keyCode===229&&(At="onCompositionStart");At&&(Pp&&s.locale!=="ko"&&(ar||At!=="onCompositionStart"?At==="onCompositionEnd"&&ar&&(pt=Dp()):(ka=_e,Eu="value"in ka?ka.value:ka.textContent,ar=!0)),Ke=hc(ae,At),0<Ke.length&&(At=new Up(At,t,null,s,_e),Me.push({event:At,listeners:Ke}),pt?At.data=pt:(pt=zp(s),pt!==null&&(At.data=pt)))),(pt=ix?ax(t,s):sx(t,s))&&(At=hc(ae,"onBeforeInput"),0<At.length&&(Ke=new Up("onBeforeInput","beforeinput",null,s,_e),Me.push({event:Ke,listeners:At}),Ke.data=pt)),Kx(Me,t,ae,s,_e)}Eg(Me,n)})}function ko(t,n,s){return{instance:t,listener:n,currentTarget:s}}function hc(t,n){for(var s=n+"Capture",l=[];t!==null;){var f=t,d=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||d===null||(f=co(t,s),f!=null&&l.unshift(ko(t,f,d)),f=co(t,n),f!=null&&l.push(ko(t,f,d))),t.tag===3)return l;t=t.return}return[]}function eM(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Tg(t,n,s,l,f){for(var d=n._reactName,S=[];s!==null&&s!==l;){var R=s,V=R.alternate,ae=R.stateNode;if(R=R.tag,V!==null&&V===l)break;R!==5&&R!==26&&R!==27||ae===null||(V=ae,f?(ae=co(s,d),ae!=null&&S.unshift(ko(s,ae,V))):f||(ae=co(s,d),ae!=null&&S.push(ko(s,ae,V)))),s=s.return}S.length!==0&&t.push({event:n,listeners:S})}var tM=/\r\n?/g,nM=/\u0000|\uFFFD/g;function Ag(t){return(typeof t=="string"?t:""+t).replace(tM,`
`).replace(nM,"")}function Rg(t,n){return n=Ag(n),Ag(t)===n}function Kt(t,n,s,l,f,d){switch(s){case"children":typeof l=="string"?n==="body"||n==="textarea"&&l===""||oi(t,l):(typeof l=="number"||typeof l=="bigint")&&n!=="body"&&oi(t,""+l);break;case"className":We(t,"class",l);break;case"tabIndex":We(t,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":We(t,s,l);break;case"style":Ui(t,l,d);break;case"data":if(n!=="object"){We(t,"data",l);break}case"src":case"href":if(l===""&&(n!=="a"||s!=="href")){t.removeAttribute(s);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(s);break}l=bs(""+l),t.setAttribute(s,l);break;case"action":case"formAction":if(typeof l=="function"){t.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(s==="formAction"?(n!=="input"&&Kt(t,n,"name",f.name,f,null),Kt(t,n,"formEncType",f.formEncType,f,null),Kt(t,n,"formMethod",f.formMethod,f,null),Kt(t,n,"formTarget",f.formTarget,f,null)):(Kt(t,n,"encType",f.encType,f,null),Kt(t,n,"method",f.method,f,null),Kt(t,n,"target",f.target,f,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(s);break}l=bs(""+l),t.setAttribute(s,l);break;case"onClick":l!=null&&(t.onclick=la);break;case"onScroll":l!=null&&bt("scroll",t);break;case"onScrollEnd":l!=null&&bt("scrollend",t);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(s=l.__html,s!=null){if(f.children!=null)throw Error(r(60));t.innerHTML=s}}break;case"multiple":t.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":t.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){t.removeAttribute("xlink:href");break}s=bs(""+l),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,""+l):t.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,""):t.removeAttribute(s);break;case"capture":case"download":l===!0?t.setAttribute(s,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,l):t.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?t.setAttribute(s,l):t.removeAttribute(s);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?t.removeAttribute(s):t.setAttribute(s,l);break;case"popover":bt("beforetoggle",t),bt("toggle",t),Oe(t,"popover",l);break;case"xlinkActuate":ke(t,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":ke(t,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":ke(t,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":ke(t,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":ke(t,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":ke(t,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":ke(t,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":ke(t,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":ke(t,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Oe(t,"is",l);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=Wi.get(s)||s,Oe(t,s,l))}}function sd(t,n,s,l,f,d){switch(s){case"style":Ui(t,l,d);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(s=l.__html,s!=null){if(f.children!=null)throw Error(r(60));t.innerHTML=s}}break;case"children":typeof l=="string"?oi(t,l):(typeof l=="number"||typeof l=="bigint")&&oi(t,""+l);break;case"onScroll":l!=null&&bt("scroll",t);break;case"onScrollEnd":l!=null&&bt("scrollend",t);break;case"onClick":l!=null&&(t.onclick=la);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!A.hasOwnProperty(s))e:{if(s[0]==="o"&&s[1]==="n"&&(f=s.endsWith("Capture"),n=s.slice(2,f?s.length-7:void 0),d=t[en]||null,d=d!=null?d[s]:null,typeof d=="function"&&t.removeEventListener(n,d,f),typeof l=="function")){typeof d!="function"&&d!==null&&(s in t?t[s]=null:t.hasAttribute(s)&&t.removeAttribute(s)),t.addEventListener(n,l,f);break e}s in t?t[s]=l:l===!0?t.setAttribute(s,""):Oe(t,s,l)}}}function Fn(t,n,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":bt("error",t),bt("load",t);var l=!1,f=!1,d;for(d in s)if(s.hasOwnProperty(d)){var S=s[d];if(S!=null)switch(d){case"src":l=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Kt(t,n,d,S,s,null)}}f&&Kt(t,n,"srcSet",s.srcSet,s,null),l&&Kt(t,n,"src",s.src,s,null);return;case"input":bt("invalid",t);var R=d=S=f=null,V=null,ae=null;for(l in s)if(s.hasOwnProperty(l)){var _e=s[l];if(_e!=null)switch(l){case"name":f=_e;break;case"type":S=_e;break;case"checked":V=_e;break;case"defaultChecked":ae=_e;break;case"value":d=_e;break;case"defaultValue":R=_e;break;case"children":case"dangerouslySetInnerHTML":if(_e!=null)throw Error(r(137,n));break;default:Kt(t,n,l,_e,s,null)}}Hn(t,d,R,V,ae,S,f,!1);return;case"select":bt("invalid",t),l=S=d=null;for(f in s)if(s.hasOwnProperty(f)&&(R=s[f],R!=null))switch(f){case"value":d=R;break;case"defaultValue":S=R;break;case"multiple":l=R;default:Kt(t,n,f,R,s,null)}n=d,s=S,t.multiple=!!l,n!=null?An(t,!!l,n,!1):s!=null&&An(t,!!l,s,!0);return;case"textarea":bt("invalid",t),d=f=l=null;for(S in s)if(s.hasOwnProperty(S)&&(R=s[S],R!=null))switch(S){case"value":l=R;break;case"defaultValue":f=R;break;case"children":d=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(r(91));break;default:Kt(t,n,S,R,s,null)}Li(t,l,f,d);return;case"option":for(V in s)if(s.hasOwnProperty(V)&&(l=s[V],l!=null))switch(V){case"selected":t.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Kt(t,n,V,l,s,null)}return;case"dialog":bt("beforetoggle",t),bt("toggle",t),bt("cancel",t),bt("close",t);break;case"iframe":case"object":bt("load",t);break;case"video":case"audio":for(l=0;l<Vo.length;l++)bt(Vo[l],t);break;case"image":bt("error",t),bt("load",t);break;case"details":bt("toggle",t);break;case"embed":case"source":case"link":bt("error",t),bt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ae in s)if(s.hasOwnProperty(ae)&&(l=s[ae],l!=null))switch(ae){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Kt(t,n,ae,l,s,null)}return;default:if(Ht(n)){for(_e in s)s.hasOwnProperty(_e)&&(l=s[_e],l!==void 0&&sd(t,n,_e,l,s,void 0));return}}for(R in s)s.hasOwnProperty(R)&&(l=s[R],l!=null&&Kt(t,n,R,l,s,null))}function iM(t,n,s,l){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,d=null,S=null,R=null,V=null,ae=null,_e=null;for(ue in s){var Me=s[ue];if(s.hasOwnProperty(ue)&&Me!=null)switch(ue){case"checked":break;case"value":break;case"defaultValue":V=Me;default:l.hasOwnProperty(ue)||Kt(t,n,ue,null,l,Me)}}for(var ce in l){var ue=l[ce];if(Me=s[ce],l.hasOwnProperty(ce)&&(ue!=null||Me!=null))switch(ce){case"type":d=ue;break;case"name":f=ue;break;case"checked":ae=ue;break;case"defaultChecked":_e=ue;break;case"value":S=ue;break;case"defaultValue":R=ue;break;case"children":case"dangerouslySetInnerHTML":if(ue!=null)throw Error(r(137,n));break;default:ue!==Me&&Kt(t,n,ce,ue,l,Me)}}Ge(t,S,R,V,ae,_e,d,f);return;case"select":ue=S=R=ce=null;for(d in s)if(V=s[d],s.hasOwnProperty(d)&&V!=null)switch(d){case"value":break;case"multiple":ue=V;default:l.hasOwnProperty(d)||Kt(t,n,d,null,l,V)}for(f in l)if(d=l[f],V=s[f],l.hasOwnProperty(f)&&(d!=null||V!=null))switch(f){case"value":ce=d;break;case"defaultValue":R=d;break;case"multiple":S=d;default:d!==V&&Kt(t,n,f,d,l,V)}n=R,s=S,l=ue,ce!=null?An(t,!!s,ce,!1):!!l!=!!s&&(n!=null?An(t,!!s,n,!0):An(t,!!s,s?[]:"",!1));return;case"textarea":ue=ce=null;for(R in s)if(f=s[R],s.hasOwnProperty(R)&&f!=null&&!l.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:Kt(t,n,R,null,l,f)}for(S in l)if(f=l[S],d=s[S],l.hasOwnProperty(S)&&(f!=null||d!=null))switch(S){case"value":ce=f;break;case"defaultValue":ue=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(r(91));break;default:f!==d&&Kt(t,n,S,f,l,d)}ri(t,ce,ue);return;case"option":for(var qe in s)if(ce=s[qe],s.hasOwnProperty(qe)&&ce!=null&&!l.hasOwnProperty(qe))switch(qe){case"selected":t.selected=!1;break;default:Kt(t,n,qe,null,l,ce)}for(V in l)if(ce=l[V],ue=s[V],l.hasOwnProperty(V)&&ce!==ue&&(ce!=null||ue!=null))switch(V){case"selected":t.selected=ce&&typeof ce!="function"&&typeof ce!="symbol";break;default:Kt(t,n,V,ce,l,ue)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var at in s)ce=s[at],s.hasOwnProperty(at)&&ce!=null&&!l.hasOwnProperty(at)&&Kt(t,n,at,null,l,ce);for(ae in l)if(ce=l[ae],ue=s[ae],l.hasOwnProperty(ae)&&ce!==ue&&(ce!=null||ue!=null))switch(ae){case"children":case"dangerouslySetInnerHTML":if(ce!=null)throw Error(r(137,n));break;default:Kt(t,n,ae,ce,l,ue)}return;default:if(Ht(n)){for(var Qt in s)ce=s[Qt],s.hasOwnProperty(Qt)&&ce!==void 0&&!l.hasOwnProperty(Qt)&&sd(t,n,Qt,void 0,l,ce);for(_e in l)ce=l[_e],ue=s[_e],!l.hasOwnProperty(_e)||ce===ue||ce===void 0&&ue===void 0||sd(t,n,_e,ce,l,ue);return}}for(var Q in s)ce=s[Q],s.hasOwnProperty(Q)&&ce!=null&&!l.hasOwnProperty(Q)&&Kt(t,n,Q,null,l,ce);for(Me in l)ce=l[Me],ue=s[Me],!l.hasOwnProperty(Me)||ce===ue||ce==null&&ue==null||Kt(t,n,Me,ce,l,ue)}function Cg(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function aM(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,s=performance.getEntriesByType("resource"),l=0;l<s.length;l++){var f=s[l],d=f.transferSize,S=f.initiatorType,R=f.duration;if(d&&R&&Cg(S)){for(S=0,R=f.responseEnd,l+=1;l<s.length;l++){var V=s[l],ae=V.startTime;if(ae>R)break;var _e=V.transferSize,Me=V.initiatorType;_e&&Cg(Me)&&(V=V.responseEnd,S+=_e*(V<R?1:(R-ae)/(V-ae)))}if(--l,n+=8*(d+S)/(f.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var rd=null,od=null;function pc(t){return t.nodeType===9?t:t.ownerDocument}function wg(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Dg(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function ld(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var cd=null;function sM(){var t=window.event;return t&&t.type==="popstate"?t===cd?!1:(cd=t,!0):(cd=null,!1)}var Ng=typeof setTimeout=="function"?setTimeout:void 0,rM=typeof clearTimeout=="function"?clearTimeout:void 0,Lg=typeof Promise=="function"?Promise:void 0,oM=typeof queueMicrotask=="function"?queueMicrotask:typeof Lg<"u"?function(t){return Lg.resolve(null).then(t).catch(lM)}:Ng;function lM(t){setTimeout(function(){throw t})}function rs(t){return t==="head"}function Ug(t,n){var s=n,l=0;do{var f=s.nextSibling;if(t.removeChild(s),f&&f.nodeType===8)if(s=f.data,s==="/$"||s==="/&"){if(l===0){t.removeChild(f),Lr(n);return}l--}else if(s==="$"||s==="$?"||s==="$~"||s==="$!"||s==="&")l++;else if(s==="html")Xo(t.ownerDocument.documentElement);else if(s==="head"){s=t.ownerDocument.head,Xo(s);for(var d=s.firstChild;d;){var S=d.nextSibling,R=d.nodeName;d[za]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&d.rel.toLowerCase()==="stylesheet"||s.removeChild(d),d=S}}else s==="body"&&Xo(t.ownerDocument.body);s=f}while(s);Lr(n)}function Og(t,n){var s=t;t=0;do{var l=s.nextSibling;if(s.nodeType===1?n?(s._stashedDisplay=s.style.display,s.style.display="none"):(s.style.display=s._stashedDisplay||"",s.getAttribute("style")===""&&s.removeAttribute("style")):s.nodeType===3&&(n?(s._stashedText=s.nodeValue,s.nodeValue=""):s.nodeValue=s._stashedText||""),l&&l.nodeType===8)if(s=l.data,s==="/$"){if(t===0)break;t--}else s!=="$"&&s!=="$?"&&s!=="$~"&&s!=="$!"||t++;s=l}while(s)}function ud(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var s=n;switch(n=n.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":ud(s),Ha(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}t.removeChild(s)}}function cM(t,n,s,l){for(;t.nodeType===1;){var f=s;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!l&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(l){if(!t[za])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(d=t.getAttribute("rel"),d==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(d!==f.rel||t.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||t.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||t.getAttribute("title")!==(f.title==null?null:f.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(d=t.getAttribute("src"),(d!==(f.src==null?null:f.src)||t.getAttribute("type")!==(f.type==null?null:f.type)||t.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&d&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var d=f.name==null?null:""+f.name;if(f.type==="hidden"&&t.getAttribute("name")===d)return t}else return t;if(t=bi(t.nextSibling),t===null)break}return null}function uM(t,n,s){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!s||(t=bi(t.nextSibling),t===null))return null;return t}function Pg(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=bi(t.nextSibling),t===null))return null;return t}function fd(t){return t.data==="$?"||t.data==="$~"}function dd(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function fM(t,n){var s=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||s.readyState!=="loading")n();else{var l=function(){n(),s.removeEventListener("DOMContentLoaded",l)};s.addEventListener("DOMContentLoaded",l),t._reactRetry=l}}function bi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var hd=null;function Ig(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var s=t.data;if(s==="/$"||s==="/&"){if(n===0)return bi(t.nextSibling);n--}else s!=="$"&&s!=="$!"&&s!=="$?"&&s!=="$~"&&s!=="&"||n++}t=t.nextSibling}return null}function Fg(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var s=t.data;if(s==="$"||s==="$!"||s==="$?"||s==="$~"||s==="&"){if(n===0)return t;n--}else s!=="/$"&&s!=="/&"||n++}t=t.previousSibling}return null}function Bg(t,n,s){switch(n=pc(s),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function Xo(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Ha(t)}var Ti=new Map,zg=new Set;function mc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var ba=H.d;H.d={f:dM,r:hM,D:pM,C:mM,L:gM,m:_M,X:SM,S:vM,M:xM};function dM(){var t=ba.f(),n=rc();return t||n}function hM(t){var n=oa(t);n!==null&&n.tag===5&&n.type==="form"?n0(n):ba.r(t)}var wr=typeof document>"u"?null:document;function Hg(t,n,s){var l=wr;if(l&&typeof n=="string"&&n){var f=kt(n);f='link[rel="'+t+'"][href="'+f+'"]',typeof s=="string"&&(f+='[crossorigin="'+s+'"]'),zg.has(f)||(zg.add(f),t={rel:t,crossOrigin:s,href:n},l.querySelector(f)===null&&(n=l.createElement("link"),Fn(n,"link",t),_n(n),l.head.appendChild(n)))}}function pM(t){ba.D(t),Hg("dns-prefetch",t,null)}function mM(t,n){ba.C(t,n),Hg("preconnect",t,n)}function gM(t,n,s){ba.L(t,n,s);var l=wr;if(l&&t&&n){var f='link[rel="preload"][as="'+kt(n)+'"]';n==="image"&&s&&s.imageSrcSet?(f+='[imagesrcset="'+kt(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(f+='[imagesizes="'+kt(s.imageSizes)+'"]')):f+='[href="'+kt(t)+'"]';var d=f;switch(n){case"style":d=Dr(t);break;case"script":d=Nr(t)}Ti.has(d)||(t=v({rel:"preload",href:n==="image"&&s&&s.imageSrcSet?void 0:t,as:n},s),Ti.set(d,t),l.querySelector(f)!==null||n==="style"&&l.querySelector(Wo(d))||n==="script"&&l.querySelector(qo(d))||(n=l.createElement("link"),Fn(n,"link",t),_n(n),l.head.appendChild(n)))}}function _M(t,n){ba.m(t,n);var s=wr;if(s&&t){var l=n&&typeof n.as=="string"?n.as:"script",f='link[rel="modulepreload"][as="'+kt(l)+'"][href="'+kt(t)+'"]',d=f;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=Nr(t)}if(!Ti.has(d)&&(t=v({rel:"modulepreload",href:t},n),Ti.set(d,t),s.querySelector(f)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(qo(d)))return}l=s.createElement("link"),Fn(l,"link",t),_n(l),s.head.appendChild(l)}}}function vM(t,n,s){ba.S(t,n,s);var l=wr;if(l&&t){var f=Ga(l).hoistableStyles,d=Dr(t);n=n||"default";var S=f.get(d);if(!S){var R={loading:0,preload:null};if(S=l.querySelector(Wo(d)))R.loading=5;else{t=v({rel:"stylesheet",href:t,"data-precedence":n},s),(s=Ti.get(d))&&pd(t,s);var V=S=l.createElement("link");_n(V),Fn(V,"link",t),V._p=new Promise(function(ae,_e){V.onload=ae,V.onerror=_e}),V.addEventListener("load",function(){R.loading|=1}),V.addEventListener("error",function(){R.loading|=2}),R.loading|=4,gc(S,n,l)}S={type:"stylesheet",instance:S,count:1,state:R},f.set(d,S)}}}function SM(t,n){ba.X(t,n);var s=wr;if(s&&t){var l=Ga(s).hoistableScripts,f=Nr(t),d=l.get(f);d||(d=s.querySelector(qo(f)),d||(t=v({src:t,async:!0},n),(n=Ti.get(f))&&md(t,n),d=s.createElement("script"),_n(d),Fn(d,"link",t),s.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(f,d))}}function xM(t,n){ba.M(t,n);var s=wr;if(s&&t){var l=Ga(s).hoistableScripts,f=Nr(t),d=l.get(f);d||(d=s.querySelector(qo(f)),d||(t=v({src:t,async:!0,type:"module"},n),(n=Ti.get(f))&&md(t,n),d=s.createElement("script"),_n(d),Fn(d,"link",t),s.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(f,d))}}function Gg(t,n,s,l){var f=(f=ie.current)?mc(f):null;if(!f)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(n=Dr(s.href),s=Ga(f).hoistableStyles,l=s.get(n),l||(l={type:"style",instance:null,count:0,state:null},s.set(n,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){t=Dr(s.href);var d=Ga(f).hoistableStyles,S=d.get(t);if(S||(f=f.ownerDocument||f,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(t,S),(d=f.querySelector(Wo(t)))&&!d._p&&(S.instance=d,S.state.loading=5),Ti.has(t)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},Ti.set(t,s),d||MM(f,t,s,S.state))),n&&l===null)throw Error(r(528,""));return S}if(n&&l!==null)throw Error(r(529,""));return null;case"script":return n=s.async,s=s.src,typeof s=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Nr(s),s=Ga(f).hoistableScripts,l=s.get(n),l||(l={type:"script",instance:null,count:0,state:null},s.set(n,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function Dr(t){return'href="'+kt(t)+'"'}function Wo(t){return'link[rel="stylesheet"]['+t+"]"}function Vg(t){return v({},t,{"data-precedence":t.precedence,precedence:null})}function MM(t,n,s,l){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?l.loading=1:(n=t.createElement("link"),l.preload=n,n.addEventListener("load",function(){return l.loading|=1}),n.addEventListener("error",function(){return l.loading|=2}),Fn(n,"link",s),_n(n),t.head.appendChild(n))}function Nr(t){return'[src="'+kt(t)+'"]'}function qo(t){return"script[async]"+t}function kg(t,n,s){if(n.count++,n.instance===null)switch(n.type){case"style":var l=t.querySelector('style[data-href~="'+kt(s.href)+'"]');if(l)return n.instance=l,_n(l),l;var f=v({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return l=(t.ownerDocument||t).createElement("style"),_n(l),Fn(l,"style",f),gc(l,s.precedence,t),n.instance=l;case"stylesheet":f=Dr(s.href);var d=t.querySelector(Wo(f));if(d)return n.state.loading|=4,n.instance=d,_n(d),d;l=Vg(s),(f=Ti.get(f))&&pd(l,f),d=(t.ownerDocument||t).createElement("link"),_n(d);var S=d;return S._p=new Promise(function(R,V){S.onload=R,S.onerror=V}),Fn(d,"link",l),n.state.loading|=4,gc(d,s.precedence,t),n.instance=d;case"script":return d=Nr(s.src),(f=t.querySelector(qo(d)))?(n.instance=f,_n(f),f):(l=s,(f=Ti.get(d))&&(l=v({},s),md(l,f)),t=t.ownerDocument||t,f=t.createElement("script"),_n(f),Fn(f,"link",l),t.head.appendChild(f),n.instance=f);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(l=n.instance,n.state.loading|=4,gc(l,s.precedence,t));return n.instance}function gc(t,n,s){for(var l=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=l.length?l[l.length-1]:null,d=f,S=0;S<l.length;S++){var R=l[S];if(R.dataset.precedence===n)d=R;else if(d!==f)break}d?d.parentNode.insertBefore(t,d.nextSibling):(n=s.nodeType===9?s.head:s,n.insertBefore(t,n.firstChild))}function pd(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function md(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var _c=null;function Xg(t,n,s){if(_c===null){var l=new Map,f=_c=new Map;f.set(s,l)}else f=_c,l=f.get(s),l||(l=new Map,f.set(s,l));if(l.has(t))return l;for(l.set(t,null),s=s.getElementsByTagName(t),f=0;f<s.length;f++){var d=s[f];if(!(d[za]||d[Ot]||t==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var S=d.getAttribute(n)||"";S=t+S;var R=l.get(S);R?R.push(d):l.set(S,[d])}}return l}function Wg(t,n,s){t=t.ownerDocument||t,t.head.insertBefore(s,n==="title"?t.querySelector("head > title"):null)}function yM(t,n,s){if(s===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function qg(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function EM(t,n,s,l){if(s.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(s.state.loading&4)===0){if(s.instance===null){var f=Dr(l.href),d=n.querySelector(Wo(f));if(d){n=d._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=vc.bind(t),n.then(t,t)),s.state.loading|=4,s.instance=d,_n(d);return}d=n.ownerDocument||n,l=Vg(l),(f=Ti.get(f))&&pd(l,f),d=d.createElement("link"),_n(d);var S=d;S._p=new Promise(function(R,V){S.onload=R,S.onerror=V}),Fn(d,"link",l),s.instance=d}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(s,n),(n=s.state.preload)&&(s.state.loading&3)===0&&(t.count++,s=vc.bind(t),n.addEventListener("load",s),n.addEventListener("error",s))}}var gd=0;function bM(t,n){return t.stylesheets&&t.count===0&&xc(t,t.stylesheets),0<t.count||0<t.imgCount?function(s){var l=setTimeout(function(){if(t.stylesheets&&xc(t,t.stylesheets),t.unsuspend){var d=t.unsuspend;t.unsuspend=null,d()}},6e4+n);0<t.imgBytes&&gd===0&&(gd=62500*aM());var f=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&xc(t,t.stylesheets),t.unsuspend)){var d=t.unsuspend;t.unsuspend=null,d()}},(t.imgBytes>gd?50:800)+n);return t.unsuspend=s,function(){t.unsuspend=null,clearTimeout(l),clearTimeout(f)}}:null}function vc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)xc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Sc=null;function xc(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Sc=new Map,n.forEach(TM,t),Sc=null,vc.call(t))}function TM(t,n){if(!(n.state.loading&4)){var s=Sc.get(t);if(s)var l=s.get(null);else{s=new Map,Sc.set(t,s);for(var f=t.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<f.length;d++){var S=f[d];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(s.set(S.dataset.precedence,S),l=S)}l&&s.set(null,l)}f=n.instance,S=f.getAttribute("data-precedence"),d=s.get(S)||l,d===l&&s.set(null,f),s.set(S,f),this.count++,l=vc.bind(this),f.addEventListener("load",l),f.addEventListener("error",l),d?d.parentNode.insertBefore(f,d.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(f,t.firstChild)),n.state.loading|=4}}var Yo={$$typeof:z,Provider:null,Consumer:null,_currentValue:$,_currentValue2:$,_threadCount:0};function AM(t,n,s,l,f,d,S,R,V){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Xe(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Xe(0),this.hiddenUpdates=Xe(null),this.identifierPrefix=l,this.onUncaughtError=f,this.onCaughtError=d,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=V,this.incompleteTransitions=new Map}function Yg(t,n,s,l,f,d,S,R,V,ae,_e,Me){return t=new AM(t,n,s,S,V,ae,_e,Me,R),n=1,d===!0&&(n|=24),d=ci(3,null,null,n),t.current=d,d.stateNode=t,n=Zu(),n.refCount++,t.pooledCache=n,n.refCount++,d.memoizedState={element:l,isDehydrated:s,cache:n},Ju(d),t}function Zg(t){return t?(t=lr,t):lr}function jg(t,n,s,l,f,d){f=Zg(f),l.context===null?l.context=f:l.pendingContext=f,l=ja(n),l.payload={element:s},d=d===void 0?null:d,d!==null&&(l.callback=d),s=Ka(t,l,n),s!==null&&(ii(s,t,n),To(s,t,n))}function Kg(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var s=t.retryLane;t.retryLane=s!==0&&s<n?s:n}}function _d(t,n){Kg(t,n),(t=t.alternate)&&Kg(t,n)}function Qg(t){if(t.tag===13||t.tag===31){var n=Cs(t,67108864);n!==null&&ii(n,t,67108864),_d(t,67108864)}}function Jg(t){if(t.tag===13||t.tag===31){var n=pi();n=Fa(n);var s=Cs(t,n);s!==null&&ii(s,t,n),_d(t,n)}}var Mc=!0;function RM(t,n,s,l){var f=F.T;F.T=null;var d=H.p;try{H.p=2,vd(t,n,s,l)}finally{H.p=d,F.T=f}}function CM(t,n,s,l){var f=F.T;F.T=null;var d=H.p;try{H.p=8,vd(t,n,s,l)}finally{H.p=d,F.T=f}}function vd(t,n,s,l){if(Mc){var f=Sd(l);if(f===null)ad(t,n,l,yc,s),e_(t,l);else if(DM(f,t,n,s,l))l.stopPropagation();else if(e_(t,l),n&4&&-1<wM.indexOf(t)){for(;f!==null;){var d=oa(f);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var S=Re(d.pendingLanes);if(S!==0){var R=d;for(R.pendingLanes|=2,R.entangledLanes|=2;S;){var V=1<<31-Be(S);R.entanglements[1]|=V,S&=~V}ji(d),(zt&6)===0&&(ac=Mt()+500,Go(0))}}break;case 31:case 13:R=Cs(d,2),R!==null&&ii(R,d,2),rc(),_d(d,2)}if(d=Sd(l),d===null&&ad(t,n,l,yc,s),d===f)break;f=d}f!==null&&l.stopPropagation()}else ad(t,n,l,null,s)}}function Sd(t){return t=xu(t),xd(t)}var yc=null;function xd(t){if(yc=null,t=ra(t),t!==null){var n=c(t);if(n===null)t=null;else{var s=n.tag;if(s===13){if(t=u(n),t!==null)return t;t=null}else if(s===31){if(t=h(n),t!==null)return t;t=null}else if(s===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return yc=t,null}function $g(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(St()){case L:return 2;case E:return 8;case J:case te:return 32;case fe:return 268435456;default:return 32}default:return 32}}var Md=!1,os=null,ls=null,cs=null,Zo=new Map,jo=new Map,us=[],wM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function e_(t,n){switch(t){case"focusin":case"focusout":os=null;break;case"dragenter":case"dragleave":ls=null;break;case"mouseover":case"mouseout":cs=null;break;case"pointerover":case"pointerout":Zo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":jo.delete(n.pointerId)}}function Ko(t,n,s,l,f,d){return t===null||t.nativeEvent!==d?(t={blockedOn:n,domEventName:s,eventSystemFlags:l,nativeEvent:d,targetContainers:[f]},n!==null&&(n=oa(n),n!==null&&Qg(n)),t):(t.eventSystemFlags|=l,n=t.targetContainers,f!==null&&n.indexOf(f)===-1&&n.push(f),t)}function DM(t,n,s,l,f){switch(n){case"focusin":return os=Ko(os,t,n,s,l,f),!0;case"dragenter":return ls=Ko(ls,t,n,s,l,f),!0;case"mouseover":return cs=Ko(cs,t,n,s,l,f),!0;case"pointerover":var d=f.pointerId;return Zo.set(d,Ko(Zo.get(d)||null,t,n,s,l,f)),!0;case"gotpointercapture":return d=f.pointerId,jo.set(d,Ko(jo.get(d)||null,t,n,s,l,f)),!0}return!1}function t_(t){var n=ra(t.target);if(n!==null){var s=c(n);if(s!==null){if(n=s.tag,n===13){if(n=u(s),n!==null){t.blockedOn=n,si(t.priority,function(){Jg(s)});return}}else if(n===31){if(n=h(s),n!==null){t.blockedOn=n,si(t.priority,function(){Jg(s)});return}}else if(n===3&&s.stateNode.current.memoizedState.isDehydrated){t.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ec(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var s=Sd(t.nativeEvent);if(s===null){s=t.nativeEvent;var l=new s.constructor(s.type,s);Su=l,s.target.dispatchEvent(l),Su=null}else return n=oa(s),n!==null&&Qg(n),t.blockedOn=s,!1;n.shift()}return!0}function n_(t,n,s){Ec(t)&&s.delete(n)}function NM(){Md=!1,os!==null&&Ec(os)&&(os=null),ls!==null&&Ec(ls)&&(ls=null),cs!==null&&Ec(cs)&&(cs=null),Zo.forEach(n_),jo.forEach(n_)}function bc(t,n){t.blockedOn===n&&(t.blockedOn=null,Md||(Md=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,NM)))}var Tc=null;function i_(t){Tc!==t&&(Tc=t,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){Tc===t&&(Tc=null);for(var n=0;n<t.length;n+=3){var s=t[n],l=t[n+1],f=t[n+2];if(typeof l!="function"){if(xd(l||s)===null)continue;break}var d=oa(s);d!==null&&(t.splice(n,3),n-=3,Sf(d,{pending:!0,data:f,method:s.method,action:l},l,f))}}))}function Lr(t){function n(V){return bc(V,t)}os!==null&&bc(os,t),ls!==null&&bc(ls,t),cs!==null&&bc(cs,t),Zo.forEach(n),jo.forEach(n);for(var s=0;s<us.length;s++){var l=us[s];l.blockedOn===t&&(l.blockedOn=null)}for(;0<us.length&&(s=us[0],s.blockedOn===null);)t_(s),s.blockedOn===null&&us.shift();if(s=(t.ownerDocument||t).$$reactFormReplay,s!=null)for(l=0;l<s.length;l+=3){var f=s[l],d=s[l+1],S=f[en]||null;if(typeof d=="function")S||i_(s);else if(S){var R=null;if(d&&d.hasAttribute("formAction")){if(f=d,S=d[en]||null)R=S.formAction;else if(xd(f)!==null)continue}else R=S.action;typeof R=="function"?s[l+1]=R:(s.splice(l,3),l-=3),i_(s)}}}function a_(){function t(d){d.canIntercept&&d.info==="react-transition"&&d.intercept({handler:function(){return new Promise(function(S){return f=S})},focusReset:"manual",scroll:"manual"})}function n(){f!==null&&(f(),f=null),l||setTimeout(s,20)}function s(){if(!l&&!navigation.transition){var d=navigation.currentEntry;d&&d.url!=null&&navigation.navigate(d.url,{state:d.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,f=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(s,100),function(){l=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),f!==null&&(f(),f=null)}}}function yd(t){this._internalRoot=t}Ac.prototype.render=yd.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var s=n.current,l=pi();jg(s,l,t,n,null,null)},Ac.prototype.unmount=yd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;jg(t.current,2,null,t,null,null),rc(),n[Dn]=null}};function Ac(t){this._internalRoot=t}Ac.prototype.unstable_scheduleHydration=function(t){if(t){var n=Tn();t={blockedOn:null,target:t,priority:n};for(var s=0;s<us.length&&n!==0&&n<us[s].priority;s++);us.splice(s,0,t),s===0&&t_(t)}};var s_=e.version;if(s_!=="19.2.7")throw Error(r(527,s_,"19.2.7"));H.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=p(n),t=t!==null?g(t):null,t=t===null?null:t.stateNode,t};var LM={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:F,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Rc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Rc.isDisabled&&Rc.supportsFiber)try{he=Rc.inject(LM),pe=Rc}catch{}}return Jo.createRoot=function(t,n){if(!o(t))throw Error(r(299));var s=!1,l="",f=d0,d=h0,S=p0;return n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onUncaughtError!==void 0&&(f=n.onUncaughtError),n.onCaughtError!==void 0&&(d=n.onCaughtError),n.onRecoverableError!==void 0&&(S=n.onRecoverableError)),n=Yg(t,1,!1,null,null,s,l,null,f,d,S,a_),t[Dn]=n.current,id(t),new yd(n)},Jo.hydrateRoot=function(t,n,s){if(!o(t))throw Error(r(299));var l=!1,f="",d=d0,S=h0,R=p0,V=null;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(f=s.identifierPrefix),s.onUncaughtError!==void 0&&(d=s.onUncaughtError),s.onCaughtError!==void 0&&(S=s.onCaughtError),s.onRecoverableError!==void 0&&(R=s.onRecoverableError),s.formState!==void 0&&(V=s.formState)),n=Yg(t,1,!0,n,s??null,l,f,V,d,S,R,a_),n.context=Zg(null),s=n.current,l=pi(),l=Fa(l),f=ja(l),f.callback=null,Ka(s,f,l),s=l,n.current.lanes=s,He(n,s),ji(n),t[Dn]=n.current,id(t),new Ac(n)},Jo.version="19.2.7",Jo}var m_;function GM(){if(m_)return Td.exports;m_=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(e){console.error(e)}}return a(),Td.exports=HM(),Td.exports}var VM=GM();const kM={BASE_URL:"/",DEV:!1,MODE:"production",PROD:!0,SSR:!1,VITE_APP_URL:"",VITE_DISCORD_URL:"",VITE_DOCS_URL:"",VITE_MANIFESTO_URL:"",VITE_TUTORIAL_VIDEO_URL:"",VITE_X_URL:""},Ur=(a,e="#")=>{var i;return((i=kM[a])==null?void 0:i.trim())||e},En={app:Ur("VITE_APP_URL"),docs:Ur("VITE_DOCS_URL"),manifesto:Ur("VITE_MANIFESTO_URL"),discord:Ur("VITE_DISCORD_URL"),x:Ur("VITE_X_URL"),tutorialVideo:Ur("VITE_TUTORIAL_VIDEO_URL",""),explore:"#explore",exploreAgents:"#explore-agents",exploreVaults:"#explore-vaults"},Qc=[{id:"demo",label:"Demo",href:"#demo"},{id:"personas",label:"Personas",href:"#personas"},{id:"how",label:"How it works",href:"#how"},{id:"explore",label:"Explore",href:"#explore"}],wd={text:"> The agent-native L1 DEX, for faster and safer trades.",href:En.manifesto},Gs={eyebrow:{label:"A manifesto for verifiable agents",href:En.manifesto},headline:["Agents you can trust.","Assets you can trade."],primaryCta:{label:"Launch Morpheum",href:En.app},secondaryCta:{label:"Explore agents",href:En.explore}},g_={risks:[{risk:"Speculation without underwriting",failure:"Buy random agent tokens on narrative alone.",solveLabel:"Proof",solve:"Underwrite on receipts, reputation, and risk scores — before you commit a dollar."},{risk:"Automation without capital controls",failure:"Run an agent with unbounded capital and no kill switch.",solveLabel:"Controls",solve:"Set Risk Level, approve gated moves, and isolate each strategy in its own bucket."}],close:"The Agent-native L1 DEX — faster, safer trades."},__=[{label:"MAEX indices",status:"LIVE",live:!0},{label:"Agents",status:"REPUTATION / SHARPE / ROI"},{label:"Risk level",status:"MANUAL / HITL / HANDS-OFF"},{label:"Agent notifications",status:"WANT-TO / ACTION / PAUSED / REJECTED"},{label:"Copy buckets",status:"LIVE",live:!0},{label:"Buckets",status:"RISK-ISOLATED"},{label:"Vaults",status:"ONCHAIN"},{label:"Staking",status:"LIVE",live:!0}],ph={kicker:"Product tour",videoCaption:"See an agent discovered, copied, supervised, and isolated in ~60s.",verbs:[{verb:"Discover",description:"Agents & indices — proof first."},{verb:"Copy",description:"Mirror a proven agent into your bucket."},{verb:"Supervise",description:"Approve gated moves on HITL."},{verb:"Isolate",description:"Risk contained in its own bucket."}]},Dd={kicker:"Choose your path",title:"Become part of the agent economy",items:[{title:"Become an Operator",weight:"major",steps:["Mint an agent and set its mandate.","Choose a Risk Level: Manual · HITL · Hands-off.","Build a proven track record investors can underwrite."],cta:{label:"Run an agent",href:En.exploreAgents},status:"SharpeShark · minting mandate…"},{title:"Become a Copy Trader",weight:"major",steps:["Screen agents on real proof — receipts and risk scores.","Mirror the best into your own dedicated bucket.","Track PnL and rebalance anytime."],cta:{label:"Start copying",href:En.exploreAgents},status:"SortinoSloth · mirroring into bucket…"},{title:"Provide Capital",weight:"light",steps:["Deposit into a vault or bucket.","Stake to earn.","Withdraw on your terms."],cta:{label:"Explore vaults",href:En.exploreVaults},status:"FundingFox · routing to vault…"}]},ds={kicker:"How it works",title:"Discover → Copy → Supervise → Isolate",outcome:"A proven, risk-isolated capital position — not a bet on a black box.",chips:[{label:"Risk level",value:"Manual · HITL · Hands-off"},{label:"Notifications",value:"Want-to · Action · Paused · Rejected"},{label:"Capital",value:"Bucket / Vault"}],steps:[{n:1,title:"Discover",feature:"Agents & Indices + proof",body:"Browse the MAEX roster and index catalog and read the proof before you commit a dollar.",example:"Open SharpeShark and see its receipts, reputation, risk score, and Sharpe / ROI side by side."},{n:2,title:"Copy",feature:"Copy Trade",body:"Mirror a proven performer into your own bucket in one click, sized to your capital, with spread / funding cost shown before you confirm.",example:"One click clones SharpeShark's strategy into a fresh bucket bound to your wallet."},{n:3,title:"Supervise",feature:"Risk Level + Agent Notifications",body:"Set how much the agent may act on its own — Manual · HITL · Hands-off — and stay in the loop through Agent Notifications: Want to · Action · Paused · Rejected.",example:'On HITL, a "Want to open ETH long" notification waits for your inline Approve / Reject, and Explain shows why the agent wants the trade.'},{n:4,title:"Isolate",feature:"Buckets",body:"Every mirror lands in its own dedicated cross-margin bucket bound to a wallet executor agent, so risk is contained per strategy.",example:"SharpeShark runs in its own bucket with its own margin and exposure — if it draws down, only that bucket's capital is at risk; your other buckets and spot balance are untouched."}]},Or={kicker:"Explore",title:"Agents. Indices. Buckets. Vaults.",cards:[{title:"Agents",verbs:["Browse","Compare","Copy"],agents:[{name:"SharpeShark",sharpe:"2.41",roi:"+38.2%",risk:"72",positive:!0},{name:"SortinoSloth",sharpe:"1.86",roi:"+21.4%",risk:"58",positive:!0},{name:"FundingFox",sharpe:"1.12",roi:"-4.1%",risk:"41",positive:!1}]},{title:"Indices",verbs:["Track","Weight","Hold"],blurb:"Curated agent baskets for one-click exposure to proven strategies.",sample:[{label:"MAEX Core",value:"+12.8%",positive:!0},{label:"Risk-Off Bucket",value:"+4.2%",positive:!0}]},{title:"Buckets",verbs:["Isolate","Trade","Contain"],blurb:"Risk-isolated positions — each strategy in its own margin shell.",sample:[{label:"Bucket A",value:"ISOLATED",positive:!1},{label:"Bucket B",value:"ISOLATED",positive:!1}]},{title:"Vaults",verbs:["Deposit","Earn","Withdraw"],blurb:"Pooled onchain capital — graded vaults with live APR and TVL.",sample:[{label:"MLP (House Liq.)",value:"A · 18.4%",meta:"$9.8M TVL"},{label:"Basis Capture",value:"A · 14.2%",meta:"$2.1M TVL"}]}]},Cc={line:"Back agents you can prove. Own the upside.",primaryCta:{label:"Launch Demo",href:En.app},social:[{label:"Join Discord",href:En.discord},{label:"Join X",href:En.x}]},XM={legal:"© 2026 Morpheum. Capital funds proof."};function to({variant:a="primary",children:e,className:i="",...r}){const o=`cta cta--${a} terminal-interactive ${i}`.trim();if("href"in r&&r.href!==void 0){const{href:c,...u}=r;return B.jsx("a",{className:o,href:c,...u,children:e})}return B.jsx("button",{className:o,type:"button",...r,children:e})}function WM(){return B.jsx("section",{id:"join",className:"section community",children:B.jsxs("div",{className:"container community__inner",children:[B.jsx("h2",{className:"community__line",children:Cc.line}),B.jsxs("div",{className:"community__ctas",children:[B.jsx(to,{href:Cc.primaryCta.href,variant:"primary",children:Cc.primaryCta.label}),Cc.social.map(a=>B.jsx(to,{href:a.href,variant:"ghost",children:a.label},a.label))]})]})})}function qM(){const[a,e]=Qe.useState(!1),i=!!En.tutorialVideo;return B.jsx("section",{id:"demo",className:"section demo",children:B.jsxs("div",{className:"container",children:[B.jsx("p",{className:"section-kicker",children:ph.kicker}),B.jsxs("div",{className:"demo__video",children:[a&&i?B.jsx("video",{className:"demo__player",src:En.tutorialVideo,controls:!0,autoPlay:!0,playsInline:!0}):B.jsxs("button",{type:"button",className:"demo__poster",onClick:()=>i&&e(!0),"aria-label":i?"Play tutorial video":"Tutorial video coming soon",children:[B.jsx("span",{className:"demo__play","aria-hidden":!0,children:"▶"}),B.jsx("span",{className:"demo__poster-label",children:"Tutorial"})]}),B.jsx("p",{className:"demo__caption",children:ph.videoCaption})]})]})})}const YM={receipt:"Receipt",riskScore:"Risk",credential:"Credential",verified:"Verified"};function Nd({type:a,value:e}){return B.jsxs("span",{className:`proof-chip proof-chip--${a}`,children:[B.jsx("span",{className:"proof-chip__dot","aria-hidden":!0}),B.jsx("span",{className:"proof-chip__label",children:YM[a]}),e?B.jsx("span",{className:"proof-chip__value",children:e}):null]})}function ZM(){const a=Or.cards[0],e=Or.cards[1],i=Or.cards[2],r=Or.cards[3];return B.jsx("section",{id:"explore",className:"section explore",children:B.jsxs("div",{className:"container",children:[B.jsx("p",{className:"section-kicker",children:Or.kicker}),B.jsx("h2",{className:"section-title explore__title",children:Or.title}),B.jsxs("div",{className:"explore__grid",children:[B.jsxs("article",{id:"explore-agents",className:"explore-card explore-card--major",children:[B.jsxs("header",{className:"explore-card__header",children:[B.jsx("h3",{className:"explore-card__title",children:a.title}),B.jsx("p",{className:"explore-card__verbs",children:a.verbs.join(" · ").toUpperCase()})]}),B.jsx("ul",{className:"explore-roster",children:a.agents.map(o=>B.jsxs("li",{className:"explore-roster__row",children:[B.jsxs("div",{className:"explore-roster__top",children:[B.jsx("span",{className:"explore-roster__name",children:o.name}),B.jsx("span",{className:`terminal-value ${o.positive?"terminal-long":"terminal-short"}`,children:o.roi})]}),B.jsxs("div",{className:"explore-roster__proof",children:[B.jsx(Nd,{type:"verified"}),B.jsx(Nd,{type:"riskScore",value:o.risk}),B.jsx(Nd,{type:"receipt"}),B.jsxs("span",{className:"terminal-value explore-roster__sharpe",children:["Sharpe ",o.sharpe]})]})]},o.name))})]}),B.jsxs("article",{className:"explore-card explore-card--major",children:[B.jsxs("header",{className:"explore-card__header",children:[B.jsx("h3",{className:"explore-card__title",children:e.title}),B.jsx("p",{className:"explore-card__verbs",children:e.verbs.join(" · ").toUpperCase()})]}),B.jsx("p",{className:"explore-card__blurb",children:e.blurb}),B.jsx("ul",{className:"explore-sample",children:e.sample.map(o=>B.jsxs("li",{children:[B.jsx("span",{className:"terminal-label",children:o.label}),B.jsx("span",{className:`terminal-value ${o.positive?"terminal-long":""}`,children:o.value})]},o.label))})]}),B.jsxs("article",{id:"explore-buckets",className:"explore-card explore-card--major",children:[B.jsxs("header",{className:"explore-card__header",children:[B.jsx("h3",{className:"explore-card__title",children:i.title}),B.jsx("p",{className:"explore-card__verbs",children:i.verbs.join(" · ").toUpperCase()})]}),B.jsx("p",{className:"explore-card__blurb",children:i.blurb}),B.jsx("ul",{className:"explore-sample",children:i.sample.map(o=>B.jsxs("li",{children:[B.jsx("span",{className:"terminal-label",children:o.label}),B.jsx("span",{className:"terminal-value explore-sample__status",children:o.value})]},o.label))})]}),B.jsxs("article",{id:"explore-vaults",className:"explore-card explore-card--major",children:[B.jsxs("header",{className:"explore-card__header",children:[B.jsx("h3",{className:"explore-card__title",children:r.title}),B.jsx("p",{className:"explore-card__verbs",children:r.verbs.join(" · ").toUpperCase()})]}),B.jsx("p",{className:"explore-card__blurb",children:r.blurb}),B.jsx("ul",{className:"explore-sample",children:r.sample.map(o=>B.jsxs("li",{children:[B.jsx("span",{className:"terminal-label",children:o.label}),B.jsxs("span",{className:"explore-sample__metrics",children:[B.jsx("span",{className:"terminal-value terminal-long",children:o.value}),B.jsx("span",{className:"terminal-value explore-sample__meta",children:o.meta})]})]},o.label))})]})]})]})})}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const op="185",jM=0,v_=1,KM=2,Jc=1,QM=2,sl=3,Oa=0,ai=1,$i=2,La=0,Qr=1,mh=2,S_=3,x_=4,JM=5,Zs=100,$M=101,ey=102,ty=103,ny=104,iy=200,ay=201,sy=202,ry=203,gh=204,_h=205,oy=206,ly=207,cy=208,uy=209,fy=210,dy=211,hy=212,py=213,my=214,vh=0,Sh=1,xh=2,no=3,Mh=4,yh=5,Eh=6,bh=7,Ov=0,gy=1,_y=2,na=0,Pv=1,Iv=2,Fv=3,Bv=4,zv=5,Hv=6,Gv=7,Vv=300,Js=301,io=302,Ld=303,Ud=304,hu=306,Th=1e3,Gi=1001,Ah=1002,Bn=1003,vy=1004,wc=1005,bn=1006,Od=1007,xs=1008,Ci=1009,kv=1010,Xv=1011,hl=1012,lp=1013,sa=1014,ea=1015,Pa=1016,cp=1017,up=1018,pl=1020,Wv=35902,qv=35899,Yv=1021,Zv=1022,Vi=1023,Ia=1026,Ks=1027,jv=1028,fp=1029,$s=1030,dp=1031,hp=1033,$c=33776,eu=33777,tu=33778,nu=33779,Rh=35840,Ch=35841,wh=35842,Dh=35843,Nh=36196,Lh=37492,Uh=37496,Oh=37488,Ph=37489,au=37490,Ih=37491,Fh=37808,Bh=37809,zh=37810,Hh=37811,Gh=37812,Vh=37813,kh=37814,Xh=37815,Wh=37816,qh=37817,Yh=37818,Zh=37819,jh=37820,Kh=37821,Qh=36492,Jh=36494,$h=36495,ep=36283,tp=36284,su=36285,np=36286,Sy=3200,M_=0,xy=1,Ss="",Kn="srgb",ru="srgb-linear",ou="linear",Yt="srgb",Pr=7680,y_=519,My=512,yy=513,Ey=514,pp=515,by=516,Ty=517,mp=518,Ay=519,E_=35044,b_="300 es",ta=2e3,lu=2001;function Ry(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function cu(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function Cy(){const a=cu("canvas");return a.style.display="block",a}const T_={};function A_(...a){const e="THREE."+a.shift();console.log(e,...a)}function Kv(a){const e=a[0];if(typeof e=="string"&&e.startsWith("TSL:")){const i=a[1];i&&i.isStackTrace?a[0]+=" "+i.getLocation():a[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return a}function rt(...a){a=Kv(a);const e="THREE."+a.shift();{const i=a[0];i&&i.isStackTrace?console.warn(i.getError(e)):console.warn(e,...a)}}function Ut(...a){a=Kv(a);const e="THREE."+a.shift();{const i=a[0];i&&i.isStackTrace?console.error(i.getError(e)):console.error(e,...a)}}function Jr(...a){const e=a.join(" ");e in T_||(T_[e]=!0,rt(...a))}function wy(a,e,i){return new Promise(function(r,o){function c(){switch(a.clientWaitSync(e,a.SYNC_FLUSH_COMMANDS_BIT,0)){case a.WAIT_FAILED:o();break;case a.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:r()}}setTimeout(c,i)})}const Dy={[vh]:Sh,[xh]:Eh,[Mh]:bh,[no]:yh,[Sh]:vh,[Eh]:xh,[bh]:Mh,[yh]:no};class tr{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const c=o.indexOf(i);c!==-1&&o.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let c=0,u=o.length;c<u;c++)o[c].call(this,e);e.target=null}}}const Vn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let R_=1234567;const cl=Math.PI/180,ml=180/Math.PI;function ro(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Vn[a&255]+Vn[a>>8&255]+Vn[a>>16&255]+Vn[a>>24&255]+"-"+Vn[e&255]+Vn[e>>8&255]+"-"+Vn[e>>16&15|64]+Vn[e>>24&255]+"-"+Vn[i&63|128]+Vn[i>>8&255]+"-"+Vn[i>>16&255]+Vn[i>>24&255]+Vn[r&255]+Vn[r>>8&255]+Vn[r>>16&255]+Vn[r>>24&255]).toLowerCase()}function xt(a,e,i){return Math.max(e,Math.min(i,a))}function gp(a,e){return(a%e+e)%e}function Ny(a,e,i,r,o){return r+(a-e)*(o-r)/(i-e)}function Ly(a,e,i){return a!==e?(i-a)/(e-a):0}function ul(a,e,i){return(1-i)*a+i*e}function Uy(a,e,i,r){return ul(a,e,1-Math.exp(-i*r))}function Oy(a,e=1){return e-Math.abs(gp(a,e*2)-e)}function Py(a,e,i){return a<=e?0:a>=i?1:(a=(a-e)/(i-e),a*a*(3-2*a))}function Iy(a,e,i){return a<=e?0:a>=i?1:(a=(a-e)/(i-e),a*a*a*(a*(a*6-15)+10))}function Fy(a,e){return a+Math.floor(Math.random()*(e-a+1))}function By(a,e){return a+Math.random()*(e-a)}function zy(a){return a*(.5-Math.random())}function Hy(a){a!==void 0&&(R_=a);let e=R_+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Gy(a){return a*cl}function Vy(a){return a*ml}function ky(a){return(a&a-1)===0&&a!==0}function Xy(a){return Math.pow(2,Math.ceil(Math.log(a)/Math.LN2))}function Wy(a){return Math.pow(2,Math.floor(Math.log(a)/Math.LN2))}function qy(a,e,i,r,o){const c=Math.cos,u=Math.sin,h=c(i/2),m=u(i/2),p=c((e+r)/2),g=u((e+r)/2),v=c((e-r)/2),_=u((e-r)/2),x=c((r-e)/2),b=u((r-e)/2);switch(o){case"XYX":a.set(h*g,m*v,m*_,h*p);break;case"YZY":a.set(m*_,h*g,m*v,h*p);break;case"ZXZ":a.set(m*v,m*_,h*g,h*p);break;case"XZX":a.set(h*g,m*b,m*x,h*p);break;case"YXY":a.set(m*x,h*g,m*b,h*p);break;case"ZYZ":a.set(m*b,m*x,h*g,h*p);break;default:rt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+o)}}function jr(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return a/4294967295;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int32Array:return Math.max(a/2147483647,-1);case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Yn(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return Math.round(a*4294967295);case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int32Array:return Math.round(a*2147483647);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Un={DEG2RAD:cl,RAD2DEG:ml,generateUUID:ro,clamp:xt,euclideanModulo:gp,mapLinear:Ny,inverseLerp:Ly,lerp:ul,damp:Uy,pingpong:Oy,smoothstep:Py,smootherstep:Iy,randInt:Fy,randFloat:By,randFloatSpread:zy,seededRandom:Hy,degToRad:Gy,radToDeg:Vy,isPowerOfTwo:ky,ceilPowerOfTwo:Xy,floorPowerOfTwo:Wy,setQuaternionFromProperEuler:qy,normalize:Yn,denormalize:jr},Ep=class Ep{constructor(e=0,i=0){this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,o=e.elements;return this.x=o[0]*i+o[3]*r+o[6],this.y=o[1]*i+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=xt(this.x,e.x,i.x),this.y=xt(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=xt(this.x,e,i),this.y=xt(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(xt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(xt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),o=Math.sin(i),c=this.x-e.x,u=this.y-e.y;return this.x=c*r-u*o+e.x,this.y=c*o+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Ep.prototype.isVector2=!0;let Bt=Ep;class oo{constructor(e=0,i=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=o}static slerpFlat(e,i,r,o,c,u,h){let m=r[o+0],p=r[o+1],g=r[o+2],v=r[o+3],_=c[u+0],x=c[u+1],b=c[u+2],w=c[u+3];if(v!==w||m!==_||p!==x||g!==b){let y=m*_+p*x+g*b+v*w;y<0&&(_=-_,x=-x,b=-b,w=-w,y=-y);let M=1-h;if(y<.9995){const P=Math.acos(y),z=Math.sin(P);M=Math.sin(M*P)/z,h=Math.sin(h*P)/z,m=m*M+_*h,p=p*M+x*h,g=g*M+b*h,v=v*M+w*h}else{m=m*M+_*h,p=p*M+x*h,g=g*M+b*h,v=v*M+w*h;const P=1/Math.sqrt(m*m+p*p+g*g+v*v);m*=P,p*=P,g*=P,v*=P}}e[i]=m,e[i+1]=p,e[i+2]=g,e[i+3]=v}static multiplyQuaternionsFlat(e,i,r,o,c,u){const h=r[o],m=r[o+1],p=r[o+2],g=r[o+3],v=c[u],_=c[u+1],x=c[u+2],b=c[u+3];return e[i]=h*b+g*v+m*x-p*_,e[i+1]=m*b+g*_+p*v-h*x,e[i+2]=p*b+g*x+h*_-m*v,e[i+3]=g*b-h*v-m*_-p*x,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,o){return this._x=e,this._y=i,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,o=e._y,c=e._z,u=e._order,h=Math.cos,m=Math.sin,p=h(r/2),g=h(o/2),v=h(c/2),_=m(r/2),x=m(o/2),b=m(c/2);switch(u){case"XYZ":this._x=_*g*v+p*x*b,this._y=p*x*v-_*g*b,this._z=p*g*b+_*x*v,this._w=p*g*v-_*x*b;break;case"YXZ":this._x=_*g*v+p*x*b,this._y=p*x*v-_*g*b,this._z=p*g*b-_*x*v,this._w=p*g*v+_*x*b;break;case"ZXY":this._x=_*g*v-p*x*b,this._y=p*x*v+_*g*b,this._z=p*g*b+_*x*v,this._w=p*g*v-_*x*b;break;case"ZYX":this._x=_*g*v-p*x*b,this._y=p*x*v+_*g*b,this._z=p*g*b-_*x*v,this._w=p*g*v+_*x*b;break;case"YZX":this._x=_*g*v+p*x*b,this._y=p*x*v+_*g*b,this._z=p*g*b-_*x*v,this._w=p*g*v-_*x*b;break;case"XZY":this._x=_*g*v-p*x*b,this._y=p*x*v-_*g*b,this._z=p*g*b+_*x*v,this._w=p*g*v+_*x*b;break;default:rt("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],o=i[4],c=i[8],u=i[1],h=i[5],m=i[9],p=i[2],g=i[6],v=i[10],_=r+h+v;if(_>0){const x=.5/Math.sqrt(_+1);this._w=.25/x,this._x=(g-m)*x,this._y=(c-p)*x,this._z=(u-o)*x}else if(r>h&&r>v){const x=2*Math.sqrt(1+r-h-v);this._w=(g-m)/x,this._x=.25*x,this._y=(o+u)/x,this._z=(c+p)/x}else if(h>v){const x=2*Math.sqrt(1+h-r-v);this._w=(c-p)/x,this._x=(o+u)/x,this._y=.25*x,this._z=(m+g)/x}else{const x=2*Math.sqrt(1+v-r-h);this._w=(u-o)/x,this._x=(c+p)/x,this._y=(m+g)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(xt(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,i/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,o=e._y,c=e._z,u=e._w,h=i._x,m=i._y,p=i._z,g=i._w;return this._x=r*g+u*h+o*p-c*m,this._y=o*g+u*m+c*h-r*p,this._z=c*g+u*p+r*m-o*h,this._w=u*g-r*h-o*m-c*p,this._onChangeCallback(),this}slerp(e,i){let r=e._x,o=e._y,c=e._z,u=e._w,h=this.dot(e);h<0&&(r=-r,o=-o,c=-c,u=-u,h=-h);let m=1-i;if(h<.9995){const p=Math.acos(h),g=Math.sin(p);m=Math.sin(m*p)/g,i=Math.sin(i*p)/g,this._x=this._x*m+r*i,this._y=this._y*m+o*i,this._z=this._z*m+c*i,this._w=this._w*m+u*i,this._onChangeCallback()}else this._x=this._x*m+r*i,this._y=this._y*m+o*i,this._z=this._z*m+c*i,this._w=this._w*m+u*i,this.normalize();return this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const bp=class bp{constructor(e=0,i=0,r=0){this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(C_.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(C_.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,o=this.z,c=e.elements;return this.x=c[0]*i+c[3]*r+c[6]*o,this.y=c[1]*i+c[4]*r+c[7]*o,this.z=c[2]*i+c[5]*r+c[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,o=this.z,c=e.elements,u=1/(c[3]*i+c[7]*r+c[11]*o+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*o+c[12])*u,this.y=(c[1]*i+c[5]*r+c[9]*o+c[13])*u,this.z=(c[2]*i+c[6]*r+c[10]*o+c[14])*u,this}applyQuaternion(e){const i=this.x,r=this.y,o=this.z,c=e.x,u=e.y,h=e.z,m=e.w,p=2*(u*o-h*r),g=2*(h*i-c*o),v=2*(c*r-u*i);return this.x=i+m*p+u*v-h*g,this.y=r+m*g+h*p-c*v,this.z=o+m*v+c*g-u*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,o=this.z,c=e.elements;return this.x=c[0]*i+c[4]*r+c[8]*o,this.y=c[1]*i+c[5]*r+c[9]*o,this.z=c[2]*i+c[6]*r+c[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=xt(this.x,e.x,i.x),this.y=xt(this.y,e.y,i.y),this.z=xt(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=xt(this.x,e,i),this.y=xt(this.y,e,i),this.z=xt(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(xt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,o=e.y,c=e.z,u=i.x,h=i.y,m=i.z;return this.x=o*m-c*h,this.y=c*u-r*m,this.z=r*h-o*u,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Pd.copy(this).projectOnVector(e),this.sub(Pd)}reflect(e){return this.sub(Pd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(xt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return i*i+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const o=Math.sin(i)*e;return this.x=o*Math.sin(r),this.y=Math.cos(i)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=o,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};bp.prototype.isVector3=!0;let ee=bp;const Pd=new ee,C_=new oo,Tp=class Tp{constructor(e,i,r,o,c,u,h,m,p){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,o,c,u,h,m,p)}set(e,i,r,o,c,u,h,m,p){const g=this.elements;return g[0]=e,g[1]=o,g[2]=h,g[3]=i,g[4]=c,g[5]=m,g[6]=r,g[7]=u,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,o=i.elements,c=this.elements,u=r[0],h=r[3],m=r[6],p=r[1],g=r[4],v=r[7],_=r[2],x=r[5],b=r[8],w=o[0],y=o[3],M=o[6],P=o[1],z=o[4],C=o[7],O=o[2],N=o[5],I=o[8];return c[0]=u*w+h*P+m*O,c[3]=u*y+h*z+m*N,c[6]=u*M+h*C+m*I,c[1]=p*w+g*P+v*O,c[4]=p*y+g*z+v*N,c[7]=p*M+g*C+v*I,c[2]=_*w+x*P+b*O,c[5]=_*y+x*z+b*N,c[8]=_*M+x*C+b*I,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],o=e[2],c=e[3],u=e[4],h=e[5],m=e[6],p=e[7],g=e[8];return i*u*g-i*h*p-r*c*g+r*h*m+o*c*p-o*u*m}invert(){const e=this.elements,i=e[0],r=e[1],o=e[2],c=e[3],u=e[4],h=e[5],m=e[6],p=e[7],g=e[8],v=g*u-h*p,_=h*m-g*c,x=p*c-u*m,b=i*v+r*_+o*x;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/b;return e[0]=v*w,e[1]=(o*p-g*r)*w,e[2]=(h*r-o*u)*w,e[3]=_*w,e[4]=(g*i-o*m)*w,e[5]=(o*c-h*i)*w,e[6]=x*w,e[7]=(r*m-p*i)*w,e[8]=(u*i-r*c)*w,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,o,c,u,h){const m=Math.cos(c),p=Math.sin(c);return this.set(r*m,r*p,-r*(m*u+p*h)+u+e,-o*p,o*m,-o*(-p*u+m*h)+h+i,0,0,1),this}scale(e,i){return Jr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Id.makeScale(e,i)),this}rotate(e){return Jr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Id.makeRotation(-e)),this}translate(e,i){return Jr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Id.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let o=0;o<9;o++)if(i[o]!==r[o])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Tp.prototype.isMatrix3=!0;let ct=Tp;const Id=new ct,w_=new ct().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),D_=new ct().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Yy(){const a={enabled:!0,workingColorSpace:ru,spaces:{},convert:function(o,c,u){return this.enabled===!1||c===u||!c||!u||(this.spaces[c].transfer===Yt&&(o.r=Ua(o.r),o.g=Ua(o.g),o.b=Ua(o.b)),this.spaces[c].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[c].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Yt&&(o.r=$r(o.r),o.g=$r(o.g),o.b=$r(o.b))),o},workingToColorSpace:function(o,c){return this.convert(o,this.workingColorSpace,c)},colorSpaceToWorking:function(o,c){return this.convert(o,c,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Ss?ou:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,c=this.workingColorSpace){return o.fromArray(this.spaces[c].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,c,u){return o.copy(this.spaces[c].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,c){return Jr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),a.workingToColorSpace(o,c)},toWorkingColorSpace:function(o,c){return Jr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),a.colorSpaceToWorking(o,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return a.define({[ru]:{primaries:e,whitePoint:r,transfer:ou,toXYZ:w_,fromXYZ:D_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Kn},outputColorSpaceConfig:{drawingBufferColorSpace:Kn}},[Kn]:{primaries:e,whitePoint:r,transfer:Yt,toXYZ:w_,fromXYZ:D_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Kn}}}),a}const Ct=Yy();function Ua(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function $r(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}let Ir;class Zy{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Ir===void 0&&(Ir=cu("canvas")),Ir.width=e.width,Ir.height=e.height;const o=Ir.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=Ir}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=cu("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),c=o.data;for(let u=0;u<c.length;u++)c[u]=Ua(c[u]/255)*255;return r.putImageData(o,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(Ua(i[r]/255)*255):i[r]=Ua(i[r]);return{data:i,width:e.width,height:e.height}}else return rt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let jy=0;class _p{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:jy++}),this.uuid=ro(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayWidth,i.displayHeight,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let c;if(Array.isArray(o)){c=[];for(let u=0,h=o.length;u<h;u++)o[u].isDataTexture?c.push(Fd(o[u].image)):c.push(Fd(o[u]))}else c=Fd(o);r.url=c}return i||(e.images[this.uuid]=r),r}}function Fd(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?Zy.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(rt("Texture: Unable to serialize Texture."),{})}let Ky=0;const Bd=new ee;class Xn extends tr{constructor(e=Xn.DEFAULT_IMAGE,i=Xn.DEFAULT_MAPPING,r=Gi,o=Gi,c=bn,u=xs,h=Vi,m=Ci,p=Xn.DEFAULT_ANISOTROPY,g=Ss){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ky++}),this.uuid=ro(),this.name="",this.source=new _p(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=c,this.minFilter=u,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new Bt(0,0),this.repeat=new Bt(1,1),this.center=new Bt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ct,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Bd).x}get height(){return this.source.getSize(Bd).y}get depth(){return this.source.getSize(Bd).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const r=e[i];if(r===void 0){rt(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const o=this[i];if(o===void 0){rt(`Texture.setValues(): property '${i}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Vv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Th:e.x=e.x-Math.floor(e.x);break;case Gi:e.x=e.x<0?0:1;break;case Ah:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Th:e.y=e.y-Math.floor(e.y);break;case Gi:e.y=e.y<0?0:1;break;case Ah:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Xn.DEFAULT_IMAGE=null;Xn.DEFAULT_MAPPING=Vv;Xn.DEFAULT_ANISOTROPY=1;const Ap=class Ap{constructor(e=0,i=0,r=0,o=1){this.x=e,this.y=i,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,o){return this.x=e,this.y=i,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,o=this.z,c=this.w,u=e.elements;return this.x=u[0]*i+u[4]*r+u[8]*o+u[12]*c,this.y=u[1]*i+u[5]*r+u[9]*o+u[13]*c,this.z=u[2]*i+u[6]*r+u[10]*o+u[14]*c,this.w=u[3]*i+u[7]*r+u[11]*o+u[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,o,c;const m=e.elements,p=m[0],g=m[4],v=m[8],_=m[1],x=m[5],b=m[9],w=m[2],y=m[6],M=m[10];if(Math.abs(g-_)<.01&&Math.abs(v-w)<.01&&Math.abs(b-y)<.01){if(Math.abs(g+_)<.1&&Math.abs(v+w)<.1&&Math.abs(b+y)<.1&&Math.abs(p+x+M-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const z=(p+1)/2,C=(x+1)/2,O=(M+1)/2,N=(g+_)/4,I=(v+w)/4,T=(b+y)/4;return z>C&&z>O?z<.01?(r=0,o=.707106781,c=.707106781):(r=Math.sqrt(z),o=N/r,c=I/r):C>O?C<.01?(r=.707106781,o=0,c=.707106781):(o=Math.sqrt(C),r=N/o,c=T/o):O<.01?(r=.707106781,o=.707106781,c=0):(c=Math.sqrt(O),r=I/c,o=T/c),this.set(r,o,c,i),this}let P=Math.sqrt((y-b)*(y-b)+(v-w)*(v-w)+(_-g)*(_-g));return Math.abs(P)<.001&&(P=1),this.x=(y-b)/P,this.y=(v-w)/P,this.z=(_-g)/P,this.w=Math.acos((p+x+M-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=xt(this.x,e.x,i.x),this.y=xt(this.y,e.y,i.y),this.z=xt(this.z,e.z,i.z),this.w=xt(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=xt(this.x,e,i),this.y=xt(this.y,e,i),this.z=xt(this.z,e,i),this.w=xt(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(xt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Ap.prototype.isVector4=!0;let un=Ap;class Qy extends tr{constructor(e=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:bn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},r),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=r.depth,this.scissor=new un(0,0,e,i),this.scissorTest=!1,this.viewport=new un(0,0,e,i),this.textures=[];const o={width:e,height:i,depth:r.depth},c=new Xn(o),u=r.count;for(let h=0;h<u;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview,this.useArrayDepthTexture=r.useArrayDepthTexture}_setTextureOptions(e={}){const i={minFilter:bn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let o=0,c=this.textures.length;o<c;o++)this.textures[o].image.width=e,this.textures[o].image.height=i,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const o=Object.assign({},e.textures[i].image);this.textures[i].source=new _p(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ia extends Qy{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class Qv extends Xn{constructor(e=null,i=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:o},this.magFilter=Bn,this.minFilter=Bn,this.wrapR=Gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Jy extends Xn{constructor(e=null,i=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:o},this.magFilter=Bn,this.minFilter=Bn,this.wrapR=Gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const du=class du{constructor(e,i,r,o,c,u,h,m,p,g,v,_,x,b,w,y){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,o,c,u,h,m,p,g,v,_,x,b,w,y)}set(e,i,r,o,c,u,h,m,p,g,v,_,x,b,w,y){const M=this.elements;return M[0]=e,M[4]=i,M[8]=r,M[12]=o,M[1]=c,M[5]=u,M[9]=h,M[13]=m,M[2]=p,M[6]=g,M[10]=v,M[14]=_,M[3]=x,M[7]=b,M[11]=w,M[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new du().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return this.determinantAffine()===0?(e.set(1,0,0),i.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const i=this.elements,r=e.elements,o=1/Fr.setFromMatrixColumn(e,0).length(),c=1/Fr.setFromMatrixColumn(e,1).length(),u=1/Fr.setFromMatrixColumn(e,2).length();return i[0]=r[0]*o,i[1]=r[1]*o,i[2]=r[2]*o,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*u,i[9]=r[9]*u,i[10]=r[10]*u,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,o=e.y,c=e.z,u=Math.cos(r),h=Math.sin(r),m=Math.cos(o),p=Math.sin(o),g=Math.cos(c),v=Math.sin(c);if(e.order==="XYZ"){const _=u*g,x=u*v,b=h*g,w=h*v;i[0]=m*g,i[4]=-m*v,i[8]=p,i[1]=x+b*p,i[5]=_-w*p,i[9]=-h*m,i[2]=w-_*p,i[6]=b+x*p,i[10]=u*m}else if(e.order==="YXZ"){const _=m*g,x=m*v,b=p*g,w=p*v;i[0]=_+w*h,i[4]=b*h-x,i[8]=u*p,i[1]=u*v,i[5]=u*g,i[9]=-h,i[2]=x*h-b,i[6]=w+_*h,i[10]=u*m}else if(e.order==="ZXY"){const _=m*g,x=m*v,b=p*g,w=p*v;i[0]=_-w*h,i[4]=-u*v,i[8]=b+x*h,i[1]=x+b*h,i[5]=u*g,i[9]=w-_*h,i[2]=-u*p,i[6]=h,i[10]=u*m}else if(e.order==="ZYX"){const _=u*g,x=u*v,b=h*g,w=h*v;i[0]=m*g,i[4]=b*p-x,i[8]=_*p+w,i[1]=m*v,i[5]=w*p+_,i[9]=x*p-b,i[2]=-p,i[6]=h*m,i[10]=u*m}else if(e.order==="YZX"){const _=u*m,x=u*p,b=h*m,w=h*p;i[0]=m*g,i[4]=w-_*v,i[8]=b*v+x,i[1]=v,i[5]=u*g,i[9]=-h*g,i[2]=-p*g,i[6]=x*v+b,i[10]=_-w*v}else if(e.order==="XZY"){const _=u*m,x=u*p,b=h*m,w=h*p;i[0]=m*g,i[4]=-v,i[8]=p*g,i[1]=_*v+w,i[5]=u*g,i[9]=x*v-b,i[2]=b*v-x,i[6]=h*g,i[10]=w*v+_}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose($y,e,eE)}lookAt(e,i,r){const o=this.elements;return mi.subVectors(e,i),mi.lengthSq()===0&&(mi.z=1),mi.normalize(),hs.crossVectors(r,mi),hs.lengthSq()===0&&(Math.abs(r.z)===1?mi.x+=1e-4:mi.z+=1e-4,mi.normalize(),hs.crossVectors(r,mi)),hs.normalize(),Dc.crossVectors(mi,hs),o[0]=hs.x,o[4]=Dc.x,o[8]=mi.x,o[1]=hs.y,o[5]=Dc.y,o[9]=mi.y,o[2]=hs.z,o[6]=Dc.z,o[10]=mi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,o=i.elements,c=this.elements,u=r[0],h=r[4],m=r[8],p=r[12],g=r[1],v=r[5],_=r[9],x=r[13],b=r[2],w=r[6],y=r[10],M=r[14],P=r[3],z=r[7],C=r[11],O=r[15],N=o[0],I=o[4],T=o[8],D=o[12],q=o[1],G=o[5],Z=o[9],de=o[13],oe=o[2],Y=o[6],F=o[10],H=o[14],$=o[3],me=o[7],Se=o[11],U=o[15];return c[0]=u*N+h*q+m*oe+p*$,c[4]=u*I+h*G+m*Y+p*me,c[8]=u*T+h*Z+m*F+p*Se,c[12]=u*D+h*de+m*H+p*U,c[1]=g*N+v*q+_*oe+x*$,c[5]=g*I+v*G+_*Y+x*me,c[9]=g*T+v*Z+_*F+x*Se,c[13]=g*D+v*de+_*H+x*U,c[2]=b*N+w*q+y*oe+M*$,c[6]=b*I+w*G+y*Y+M*me,c[10]=b*T+w*Z+y*F+M*Se,c[14]=b*D+w*de+y*H+M*U,c[3]=P*N+z*q+C*oe+O*$,c[7]=P*I+z*G+C*Y+O*me,c[11]=P*T+z*Z+C*F+O*Se,c[15]=P*D+z*de+C*H+O*U,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],o=e[8],c=e[12],u=e[1],h=e[5],m=e[9],p=e[13],g=e[2],v=e[6],_=e[10],x=e[14],b=e[3],w=e[7],y=e[11],M=e[15],P=m*x-p*_,z=h*x-p*v,C=h*_-m*v,O=u*x-p*g,N=u*_-m*g,I=u*v-h*g;return i*(w*P-y*z+M*C)-r*(b*P-y*O+M*N)+o*(b*z-w*O+M*I)-c*(b*C-w*N+y*I)}determinantAffine(){const e=this.elements,i=e[0],r=e[4],o=e[8],c=e[1],u=e[5],h=e[9],m=e[2],p=e[6],g=e[10];return i*(u*g-h*p)-r*(c*g-h*m)+o*(c*p-u*m)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=i,o[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],o=e[2],c=e[3],u=e[4],h=e[5],m=e[6],p=e[7],g=e[8],v=e[9],_=e[10],x=e[11],b=e[12],w=e[13],y=e[14],M=e[15],P=i*h-r*u,z=i*m-o*u,C=i*p-c*u,O=r*m-o*h,N=r*p-c*h,I=o*p-c*m,T=g*w-v*b,D=g*y-_*b,q=g*M-x*b,G=v*y-_*w,Z=v*M-x*w,de=_*M-x*y,oe=P*de-z*Z+C*G+O*q-N*D+I*T;if(oe===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const Y=1/oe;return e[0]=(h*de-m*Z+p*G)*Y,e[1]=(o*Z-r*de-c*G)*Y,e[2]=(w*I-y*N+M*O)*Y,e[3]=(_*N-v*I-x*O)*Y,e[4]=(m*q-u*de-p*D)*Y,e[5]=(i*de-o*q+c*D)*Y,e[6]=(y*C-b*I-M*z)*Y,e[7]=(g*I-_*C+x*z)*Y,e[8]=(u*Z-h*q+p*T)*Y,e[9]=(r*q-i*Z-c*T)*Y,e[10]=(b*N-w*C+M*P)*Y,e[11]=(v*C-g*N-x*P)*Y,e[12]=(h*D-u*G-m*T)*Y,e[13]=(i*G-r*D+o*T)*Y,e[14]=(w*z-b*O-y*P)*Y,e[15]=(g*O-v*z+_*P)*Y,this}scale(e){const i=this.elements,r=e.x,o=e.y,c=e.z;return i[0]*=r,i[4]*=o,i[8]*=c,i[1]*=r,i[5]*=o,i[9]*=c,i[2]*=r,i[6]*=o,i[10]*=c,i[3]*=r,i[7]*=o,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,o))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),o=Math.sin(i),c=1-r,u=e.x,h=e.y,m=e.z,p=c*u,g=c*h;return this.set(p*u+r,p*h-o*m,p*m+o*h,0,p*h+o*m,g*h+r,g*m-o*u,0,p*m-o*h,g*m+o*u,c*m*m+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,o,c,u){return this.set(1,r,c,0,e,1,u,0,i,o,1,0,0,0,0,1),this}compose(e,i,r){const o=this.elements,c=i._x,u=i._y,h=i._z,m=i._w,p=c+c,g=u+u,v=h+h,_=c*p,x=c*g,b=c*v,w=u*g,y=u*v,M=h*v,P=m*p,z=m*g,C=m*v,O=r.x,N=r.y,I=r.z;return o[0]=(1-(w+M))*O,o[1]=(x+C)*O,o[2]=(b-z)*O,o[3]=0,o[4]=(x-C)*N,o[5]=(1-(_+M))*N,o[6]=(y+P)*N,o[7]=0,o[8]=(b+z)*I,o[9]=(y-P)*I,o[10]=(1-(_+w))*I,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,i,r){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const c=this.determinantAffine();if(c===0)return r.set(1,1,1),i.identity(),this;let u=Fr.set(o[0],o[1],o[2]).length();const h=Fr.set(o[4],o[5],o[6]).length(),m=Fr.set(o[8],o[9],o[10]).length();c<0&&(u=-u),Fi.copy(this);const p=1/u,g=1/h,v=1/m;return Fi.elements[0]*=p,Fi.elements[1]*=p,Fi.elements[2]*=p,Fi.elements[4]*=g,Fi.elements[5]*=g,Fi.elements[6]*=g,Fi.elements[8]*=v,Fi.elements[9]*=v,Fi.elements[10]*=v,i.setFromRotationMatrix(Fi),r.x=u,r.y=h,r.z=m,this}makePerspective(e,i,r,o,c,u,h=ta,m=!1){const p=this.elements,g=2*c/(i-e),v=2*c/(r-o),_=(i+e)/(i-e),x=(r+o)/(r-o);let b,w;if(m)b=c/(u-c),w=u*c/(u-c);else if(h===ta)b=-(u+c)/(u-c),w=-2*u*c/(u-c);else if(h===lu)b=-u/(u-c),w=-u*c/(u-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=g,p[4]=0,p[8]=_,p[12]=0,p[1]=0,p[5]=v,p[9]=x,p[13]=0,p[2]=0,p[6]=0,p[10]=b,p[14]=w,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,r,o,c,u,h=ta,m=!1){const p=this.elements,g=2/(i-e),v=2/(r-o),_=-(i+e)/(i-e),x=-(r+o)/(r-o);let b,w;if(m)b=1/(u-c),w=u/(u-c);else if(h===ta)b=-2/(u-c),w=-(u+c)/(u-c);else if(h===lu)b=-1/(u-c),w=-c/(u-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=g,p[4]=0,p[8]=0,p[12]=_,p[1]=0,p[5]=v,p[9]=0,p[13]=x,p[2]=0,p[6]=0,p[10]=b,p[14]=w,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let o=0;o<16;o++)if(i[o]!==r[o])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}};du.prototype.isMatrix4=!0;let pn=du;const Fr=new ee,Fi=new pn,$y=new ee(0,0,0),eE=new ee(1,1,1),hs=new ee,Dc=new ee,mi=new ee,N_=new pn,L_=new oo;class er{constructor(e=0,i=0,r=0,o=er.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,o=this._order){return this._x=e,this._y=i,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const o=e.elements,c=o[0],u=o[4],h=o[8],m=o[1],p=o[5],g=o[9],v=o[2],_=o[6],x=o[10];switch(i){case"XYZ":this._y=Math.asin(xt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,x),this._z=Math.atan2(-u,c)):(this._x=Math.atan2(_,p),this._z=0);break;case"YXZ":this._x=Math.asin(-xt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(h,x),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-v,c),this._z=0);break;case"ZXY":this._x=Math.asin(xt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-v,x),this._z=Math.atan2(-u,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-xt(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(_,x),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-u,p));break;case"YZX":this._z=Math.asin(xt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-v,c)):(this._x=0,this._y=Math.atan2(h,x));break;case"XZY":this._z=Math.asin(-xt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(_,p),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-g,x),this._y=0);break;default:rt("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return N_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(N_,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return L_.setFromEuler(this),this.setFromQuaternion(L_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}er.DEFAULT_ORDER="XYZ";class Jv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let tE=0;const U_=new ee,Br=new oo,Ta=new pn,Nc=new ee,$o=new ee,nE=new ee,iE=new oo,O_=new ee(1,0,0),P_=new ee(0,1,0),I_=new ee(0,0,1),F_={type:"added"},aE={type:"removed"},zr={type:"childadded",child:null},zd={type:"childremoved",child:null};class _i extends tr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:tE++}),this.uuid=ro(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=_i.DEFAULT_UP.clone();const e=new ee,i=new er,r=new oo,o=new ee(1,1,1);function c(){r.setFromEuler(i,!1)}function u(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new pn},normalMatrix:{value:new ct}}),this.matrix=new pn,this.matrixWorld=new pn,this.matrixAutoUpdate=_i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=_i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Jv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return Br.setFromAxisAngle(e,i),this.quaternion.multiply(Br),this}rotateOnWorldAxis(e,i){return Br.setFromAxisAngle(e,i),this.quaternion.premultiply(Br),this}rotateX(e){return this.rotateOnAxis(O_,e)}rotateY(e){return this.rotateOnAxis(P_,e)}rotateZ(e){return this.rotateOnAxis(I_,e)}translateOnAxis(e,i){return U_.copy(e).applyQuaternion(this.quaternion),this.position.add(U_.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(O_,e)}translateY(e){return this.translateOnAxis(P_,e)}translateZ(e){return this.translateOnAxis(I_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ta.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?Nc.copy(e):Nc.set(e,i,r);const o=this.parent;this.updateWorldMatrix(!0,!1),$o.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ta.lookAt($o,Nc,this.up):Ta.lookAt(Nc,$o,this.up),this.quaternion.setFromRotationMatrix(Ta),o&&(Ta.extractRotation(o.matrixWorld),Br.setFromRotationMatrix(Ta),this.quaternion.premultiply(Br.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(Ut("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(F_),zr.child=e,this.dispatchEvent(zr),zr.child=null):Ut("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(aE),zd.child=e,this.dispatchEvent(zd),zd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ta.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ta.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ta),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(F_),zr.child=e,this.dispatchEvent(zr),zr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,o=this.children.length;r<o;r++){const u=this.children[r].getObjectByProperty(e,i);if(u!==void 0)return u}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const o=this.children;for(let c=0,u=o.length;c<u;c++)o[c].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($o,e,nE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($o,iE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const i=e.x,r=e.y,o=e.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*r-c[8]*o,c[13]+=r-c[1]*i-c[5]*r-c[9]*o,c[14]+=o-c[2]*i-c[6]*r-c[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i,r=!1){const o=this.parent;if(e===!0&&o!==null&&o.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),i===!0){const c=this.children;for(let u=0,h=c.length;u<h;u++)c[u].updateWorldMatrix(!1,!0,r)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),this.static!==!1&&(o.static=this.static),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(h=>({...h})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function c(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=c(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const v=m[p];c(e.shapes,v)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(c(e.materials,this.material[m]));o.material=h}else o.material=c(e.materials,this.material);if(this.children.length>0){o.children=[];for(let h=0;h<this.children.length;h++)o.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];o.animations.push(c(e.animations,m))}}if(i){const h=u(e.geometries),m=u(e.materials),p=u(e.textures),g=u(e.images),v=u(e.shapes),_=u(e.skeletons),x=u(e.animations),b=u(e.nodes);h.length>0&&(r.geometries=h),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),g.length>0&&(r.images=g),v.length>0&&(r.shapes=v),_.length>0&&(r.skeletons=_),x.length>0&&(r.animations=x),b.length>0&&(r.nodes=b)}return r.object=o,r;function u(h){const m=[];for(const p in h){const g=h[p];delete g.metadata,m.push(g)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}_i.DEFAULT_UP=new ee(0,1,0);_i.DEFAULT_MATRIX_AUTO_UPDATE=!0;_i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class rl extends _i{constructor(){super(),this.isGroup=!0,this.type="Group"}}const sE={type:"move"};class Hd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new rl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new rl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ee,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ee),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new rl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ee,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ee,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let o=null,c=null,u=null;const h=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){u=!0;for(const w of e.hand.values()){const y=i.getJointPose(w,r),M=this._getHandJoint(p,w);y!==null&&(M.matrix.fromArray(y.transform.matrix),M.matrix.decompose(M.position,M.rotation,M.scale),M.matrixWorldNeedsUpdate=!0,M.jointRadius=y.radius),M.visible=y!==null}const g=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],_=g.position.distanceTo(v.position),x=.02,b=.005;p.inputState.pinching&&_>x+b?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&_<=x-b&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,r),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1,m.eventsEnabled&&m.dispatchEvent({type:"gripUpdated",data:e,target:this})));h!==null&&(o=i.getPose(e.targetRaySpace,r),o===null&&c!==null&&(o=c),o!==null&&(h.matrix.fromArray(o.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,o.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(o.linearVelocity)):h.hasLinearVelocity=!1,o.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(o.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(sE)))}return h!==null&&(h.visible=o!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=u!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new rl;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}const $v={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ps={h:0,s:0,l:0},Lc={h:0,s:0,l:0};function Gd(a,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?a+(e-a)*6*i:i<1/2?e:i<2/3?a+(e-a)*6*(2/3-i):a}class Nt{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=Kn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ct.colorSpaceToWorking(this,i),this}setRGB(e,i,r,o=Ct.workingColorSpace){return this.r=e,this.g=i,this.b=r,Ct.colorSpaceToWorking(this,o),this}setHSL(e,i,r,o=Ct.workingColorSpace){if(e=gp(e,1),i=xt(i,0,1),r=xt(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,u=2*r-c;this.r=Gd(u,c,e+1/3),this.g=Gd(u,c,e),this.b=Gd(u,c,e-1/3)}return Ct.colorSpaceToWorking(this,o),this}setStyle(e,i=Kn){function r(c){c!==void 0&&parseFloat(c)<1&&rt("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const u=o[1],h=o[2];switch(u){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:rt("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=o[1],u=c.length;if(u===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(u===6)return this.setHex(parseInt(c,16),i);rt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=Kn){const r=$v[e.toLowerCase()];return r!==void 0?this.setHex(r,i):rt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ua(e.r),this.g=Ua(e.g),this.b=Ua(e.b),this}copyLinearToSRGB(e){return this.r=$r(e.r),this.g=$r(e.g),this.b=$r(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Kn){return Ct.workingToColorSpace(kn.copy(this),e),Math.round(xt(kn.r*255,0,255))*65536+Math.round(xt(kn.g*255,0,255))*256+Math.round(xt(kn.b*255,0,255))}getHexString(e=Kn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Ct.workingColorSpace){Ct.workingToColorSpace(kn.copy(this),i);const r=kn.r,o=kn.g,c=kn.b,u=Math.max(r,o,c),h=Math.min(r,o,c);let m,p;const g=(h+u)/2;if(h===u)m=0,p=0;else{const v=u-h;switch(p=g<=.5?v/(u+h):v/(2-u-h),u){case r:m=(o-c)/v+(o<c?6:0);break;case o:m=(c-r)/v+2;break;case c:m=(r-o)/v+4;break}m/=6}return e.h=m,e.s=p,e.l=g,e}getRGB(e,i=Ct.workingColorSpace){return Ct.workingToColorSpace(kn.copy(this),i),e.r=kn.r,e.g=kn.g,e.b=kn.b,e}getStyle(e=Kn){Ct.workingToColorSpace(kn.copy(this),e);const i=kn.r,r=kn.g,o=kn.b;return e!==Kn?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,i,r){return this.getHSL(ps),this.setHSL(ps.h+e,ps.s+i,ps.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(ps),e.getHSL(Lc);const r=ul(ps.h,Lc.h,i),o=ul(ps.s,Lc.s,i),c=ul(ps.l,Lc.l,i);return this.setHSL(r,o,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,o=this.b,c=e.elements;return this.r=c[0]*i+c[3]*r+c[6]*o,this.g=c[1]*i+c[4]*r+c[7]*o,this.b=c[2]*i+c[5]*r+c[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const kn=new Nt;Nt.NAMES=$v;class rE extends _i{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new er,this.environmentIntensity=1,this.environmentRotation=new er,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Bi=new ee,Aa=new ee,Vd=new ee,Ra=new ee,Hr=new ee,Gr=new ee,B_=new ee,kd=new ee,Xd=new ee,Wd=new ee,qd=new un,Yd=new un,Zd=new un;class Hi{constructor(e=new ee,i=new ee,r=new ee){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,o){o.subVectors(r,i),Bi.subVectors(e,i),o.cross(Bi);const c=o.lengthSq();return c>0?o.multiplyScalar(1/Math.sqrt(c)):o.set(0,0,0)}static getBarycoord(e,i,r,o,c){Bi.subVectors(o,i),Aa.subVectors(r,i),Vd.subVectors(e,i);const u=Bi.dot(Bi),h=Bi.dot(Aa),m=Bi.dot(Vd),p=Aa.dot(Aa),g=Aa.dot(Vd),v=u*p-h*h;if(v===0)return c.set(0,0,0),null;const _=1/v,x=(p*m-h*g)*_,b=(u*g-h*m)*_;return c.set(1-x-b,b,x)}static containsPoint(e,i,r,o){return this.getBarycoord(e,i,r,o,Ra)===null?!1:Ra.x>=0&&Ra.y>=0&&Ra.x+Ra.y<=1}static getInterpolation(e,i,r,o,c,u,h,m){return this.getBarycoord(e,i,r,o,Ra)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,Ra.x),m.addScaledVector(u,Ra.y),m.addScaledVector(h,Ra.z),m)}static getInterpolatedAttribute(e,i,r,o,c,u){return qd.setScalar(0),Yd.setScalar(0),Zd.setScalar(0),qd.fromBufferAttribute(e,i),Yd.fromBufferAttribute(e,r),Zd.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(qd,c.x),u.addScaledVector(Yd,c.y),u.addScaledVector(Zd,c.z),u}static isFrontFacing(e,i,r,o){return Bi.subVectors(r,i),Aa.subVectors(e,i),Bi.cross(Aa).dot(o)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,o){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,i,r,o){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Bi.subVectors(this.c,this.b),Aa.subVectors(this.a,this.b),Bi.cross(Aa).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Hi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Hi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,o,c){return Hi.getInterpolation(e,this.a,this.b,this.c,i,r,o,c)}containsPoint(e){return Hi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Hi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,o=this.b,c=this.c;let u,h;Hr.subVectors(o,r),Gr.subVectors(c,r),kd.subVectors(e,r);const m=Hr.dot(kd),p=Gr.dot(kd);if(m<=0&&p<=0)return i.copy(r);Xd.subVectors(e,o);const g=Hr.dot(Xd),v=Gr.dot(Xd);if(g>=0&&v<=g)return i.copy(o);const _=m*v-g*p;if(_<=0&&m>=0&&g<=0)return u=m/(m-g),i.copy(r).addScaledVector(Hr,u);Wd.subVectors(e,c);const x=Hr.dot(Wd),b=Gr.dot(Wd);if(b>=0&&x<=b)return i.copy(c);const w=x*p-m*b;if(w<=0&&p>=0&&b<=0)return h=p/(p-b),i.copy(r).addScaledVector(Gr,h);const y=g*b-x*v;if(y<=0&&v-g>=0&&x-b>=0)return B_.subVectors(c,o),h=(v-g)/(v-g+(x-b)),i.copy(o).addScaledVector(B_,h);const M=1/(y+w+_);return u=w*M,h=_*M,i.copy(r).addScaledVector(Hr,u).addScaledVector(Gr,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class _l{constructor(e=new ee(1/0,1/0,1/0),i=new ee(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(zi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(zi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=zi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let u=0,h=c.count;u<h;u++)e.isMesh===!0?e.getVertexPosition(u,zi):zi.fromBufferAttribute(c,u),zi.applyMatrix4(e.matrixWorld),this.expandByPoint(zi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Uc.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Uc.copy(r.boundingBox)),Uc.applyMatrix4(e.matrixWorld),this.union(Uc)}const o=e.children;for(let c=0,u=o.length;c<u;c++)this.expandByObject(o[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,zi),zi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(el),Oc.subVectors(this.max,el),Vr.subVectors(e.a,el),kr.subVectors(e.b,el),Xr.subVectors(e.c,el),ms.subVectors(kr,Vr),gs.subVectors(Xr,kr),Vs.subVectors(Vr,Xr);let i=[0,-ms.z,ms.y,0,-gs.z,gs.y,0,-Vs.z,Vs.y,ms.z,0,-ms.x,gs.z,0,-gs.x,Vs.z,0,-Vs.x,-ms.y,ms.x,0,-gs.y,gs.x,0,-Vs.y,Vs.x,0];return!jd(i,Vr,kr,Xr,Oc)||(i=[1,0,0,0,1,0,0,0,1],!jd(i,Vr,kr,Xr,Oc))?!1:(Pc.crossVectors(ms,gs),i=[Pc.x,Pc.y,Pc.z],jd(i,Vr,kr,Xr,Oc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,zi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(zi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ca[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ca[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ca[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ca[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ca[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ca[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ca[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ca[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ca),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ca=[new ee,new ee,new ee,new ee,new ee,new ee,new ee,new ee],zi=new ee,Uc=new _l,Vr=new ee,kr=new ee,Xr=new ee,ms=new ee,gs=new ee,Vs=new ee,el=new ee,Oc=new ee,Pc=new ee,ks=new ee;function jd(a,e,i,r,o){for(let c=0,u=a.length-3;c<=u;c+=3){ks.fromArray(a,c);const h=o.x*Math.abs(ks.x)+o.y*Math.abs(ks.y)+o.z*Math.abs(ks.z),m=e.dot(ks),p=i.dot(ks),g=r.dot(ks);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>h)return!1}return!0}const yn=new ee,Ic=new Bt;let oE=0;class aa extends tr{constructor(e,i,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:oE++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=E_,this.updateRanges=[],this.gpuType=ea,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let o=0,c=this.itemSize;o<c;o++)this.array[e+o]=i.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)Ic.fromBufferAttribute(this,i),Ic.applyMatrix3(e),this.setXY(i,Ic.x,Ic.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)yn.fromBufferAttribute(this,i),yn.applyMatrix3(e),this.setXYZ(i,yn.x,yn.y,yn.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)yn.fromBufferAttribute(this,i),yn.applyMatrix4(e),this.setXYZ(i,yn.x,yn.y,yn.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)yn.fromBufferAttribute(this,i),yn.applyNormalMatrix(e),this.setXYZ(i,yn.x,yn.y,yn.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)yn.fromBufferAttribute(this,i),yn.transformDirection(e),this.setXYZ(i,yn.x,yn.y,yn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=jr(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=Yn(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=jr(i,this.array)),i}setX(e,i){return this.normalized&&(i=Yn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=jr(i,this.array)),i}setY(e,i){return this.normalized&&(i=Yn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=jr(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Yn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=jr(i,this.array)),i}setW(e,i){return this.normalized&&(i=Yn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=Yn(i,this.array),r=Yn(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,o){return e*=this.itemSize,this.normalized&&(i=Yn(i,this.array),r=Yn(r,this.array),o=Yn(o,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,i,r,o,c){return e*=this.itemSize,this.normalized&&(i=Yn(i,this.array),r=Yn(r,this.array),o=Yn(o,this.array),c=Yn(c,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==E_&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class eS extends aa{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class tS extends aa{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class wi extends aa{constructor(e,i,r){super(new Float32Array(e),i,r)}}const lE=new _l,tl=new ee,Kd=new ee;class vp{constructor(e=new ee,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):lE.setFromPoints(e).getCenter(r);let o=0;for(let c=0,u=e.length;c<u;c++)o=Math.max(o,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;tl.subVectors(e,this.center);const i=tl.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),o=(r-this.radius)*.5;this.center.addScaledVector(tl,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Kd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(tl.copy(e.center).add(Kd)),this.expandByPoint(tl.copy(e.center).sub(Kd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let cE=0;const Ai=new pn,Qd=new _i,Wr=new ee,gi=new _l,nl=new _l,Ln=new ee;class Ni extends tr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:cE++}),this.uuid=ro(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ry(e)?tS:eS)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new ct().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Ai.makeRotationFromQuaternion(e),this.applyMatrix4(Ai),this}rotateX(e){return Ai.makeRotationX(e),this.applyMatrix4(Ai),this}rotateY(e){return Ai.makeRotationY(e),this.applyMatrix4(Ai),this}rotateZ(e){return Ai.makeRotationZ(e),this.applyMatrix4(Ai),this}translate(e,i,r){return Ai.makeTranslation(e,i,r),this.applyMatrix4(Ai),this}scale(e,i,r){return Ai.makeScale(e,i,r),this.applyMatrix4(Ai),this}lookAt(e){return Qd.lookAt(e),Qd.updateMatrix(),this.applyMatrix4(Qd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Wr).negate(),this.translate(Wr.x,Wr.y,Wr.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let o=0,c=e.length;o<c;o++){const u=e[o];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new wi(r,3))}else{const r=Math.min(e.length,i.count);for(let o=0;o<r;o++){const c=e[o];i.setXYZ(o,c.x,c.y,c.z||0)}e.length>i.count&&rt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _l);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ut("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ee(-1/0,-1/0,-1/0),new ee(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,o=i.length;r<o;r++){const c=i[r];gi.setFromBufferAttribute(c),this.morphTargetsRelative?(Ln.addVectors(this.boundingBox.min,gi.min),this.boundingBox.expandByPoint(Ln),Ln.addVectors(this.boundingBox.max,gi.max),this.boundingBox.expandByPoint(Ln)):(this.boundingBox.expandByPoint(gi.min),this.boundingBox.expandByPoint(gi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ut('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new vp);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ut("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ee,1/0);return}if(e){const r=this.boundingSphere.center;if(gi.setFromBufferAttribute(e),i)for(let c=0,u=i.length;c<u;c++){const h=i[c];nl.setFromBufferAttribute(h),this.morphTargetsRelative?(Ln.addVectors(gi.min,nl.min),gi.expandByPoint(Ln),Ln.addVectors(gi.max,nl.max),gi.expandByPoint(Ln)):(gi.expandByPoint(nl.min),gi.expandByPoint(nl.max))}gi.getCenter(r);let o=0;for(let c=0,u=e.count;c<u;c++)Ln.fromBufferAttribute(e,c),o=Math.max(o,r.distanceToSquared(Ln));if(i)for(let c=0,u=i.length;c<u;c++){const h=i[c],m=this.morphTargetsRelative;for(let p=0,g=h.count;p<g;p++)Ln.fromBufferAttribute(h,p),m&&(Wr.fromBufferAttribute(e,p),Ln.add(Wr)),o=Math.max(o,r.distanceToSquared(Ln))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Ut('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Ut("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,o=i.normal,c=i.uv;let u=this.getAttribute("tangent");(u===void 0||u.count!==r.count)&&(u=new aa(new Float32Array(4*r.count),4),this.setAttribute("tangent",u));const h=[],m=[];for(let T=0;T<r.count;T++)h[T]=new ee,m[T]=new ee;const p=new ee,g=new ee,v=new ee,_=new Bt,x=new Bt,b=new Bt,w=new ee,y=new ee;function M(T,D,q){p.fromBufferAttribute(r,T),g.fromBufferAttribute(r,D),v.fromBufferAttribute(r,q),_.fromBufferAttribute(c,T),x.fromBufferAttribute(c,D),b.fromBufferAttribute(c,q),g.sub(p),v.sub(p),x.sub(_),b.sub(_);const G=1/(x.x*b.y-b.x*x.y);isFinite(G)&&(w.copy(g).multiplyScalar(b.y).addScaledVector(v,-x.y).multiplyScalar(G),y.copy(v).multiplyScalar(x.x).addScaledVector(g,-b.x).multiplyScalar(G),h[T].add(w),h[D].add(w),h[q].add(w),m[T].add(y),m[D].add(y),m[q].add(y))}let P=this.groups;P.length===0&&(P=[{start:0,count:e.count}]);for(let T=0,D=P.length;T<D;++T){const q=P[T],G=q.start,Z=q.count;for(let de=G,oe=G+Z;de<oe;de+=3)M(e.getX(de+0),e.getX(de+1),e.getX(de+2))}const z=new ee,C=new ee,O=new ee,N=new ee;function I(T){O.fromBufferAttribute(o,T),N.copy(O);const D=h[T];z.copy(D),z.sub(O.multiplyScalar(O.dot(D))).normalize(),C.crossVectors(N,D);const G=C.dot(m[T])<0?-1:1;u.setXYZW(T,z.x,z.y,z.z,G)}for(let T=0,D=P.length;T<D;++T){const q=P[T],G=q.start,Z=q.count;for(let de=G,oe=G+Z;de<oe;de+=3)I(e.getX(de+0)),I(e.getX(de+1)),I(e.getX(de+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==i.count)r=new aa(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let _=0,x=r.count;_<x;_++)r.setXYZ(_,0,0,0);const o=new ee,c=new ee,u=new ee,h=new ee,m=new ee,p=new ee,g=new ee,v=new ee;if(e)for(let _=0,x=e.count;_<x;_+=3){const b=e.getX(_+0),w=e.getX(_+1),y=e.getX(_+2);o.fromBufferAttribute(i,b),c.fromBufferAttribute(i,w),u.fromBufferAttribute(i,y),g.subVectors(u,c),v.subVectors(o,c),g.cross(v),h.fromBufferAttribute(r,b),m.fromBufferAttribute(r,w),p.fromBufferAttribute(r,y),h.add(g),m.add(g),p.add(g),r.setXYZ(b,h.x,h.y,h.z),r.setXYZ(w,m.x,m.y,m.z),r.setXYZ(y,p.x,p.y,p.z)}else for(let _=0,x=i.count;_<x;_+=3)o.fromBufferAttribute(i,_+0),c.fromBufferAttribute(i,_+1),u.fromBufferAttribute(i,_+2),g.subVectors(u,c),v.subVectors(o,c),g.cross(v),r.setXYZ(_+0,g.x,g.y,g.z),r.setXYZ(_+1,g.x,g.y,g.z),r.setXYZ(_+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)Ln.fromBufferAttribute(e,i),Ln.normalize(),e.setXYZ(i,Ln.x,Ln.y,Ln.z)}toNonIndexed(){function e(h,m){const p=h.array,g=h.itemSize,v=h.normalized,_=new p.constructor(m.length*g);let x=0,b=0;for(let w=0,y=m.length;w<y;w++){h.isInterleavedBufferAttribute?x=m[w]*h.data.stride+h.offset:x=m[w]*g;for(let M=0;M<g;M++)_[b++]=p[x++]}return new aa(_,g,v)}if(this.index===null)return rt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Ni,r=this.index.array,o=this.attributes;for(const h in o){const m=o[h],p=e(m,r);i.setAttribute(h,p)}const c=this.morphAttributes;for(const h in c){const m=[],p=c[h];for(let g=0,v=p.length;g<v;g++){const _=p[g],x=e(_,r);m.push(x)}i.morphAttributes[h]=m}i.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let h=0,m=u.length;h<m;h++){const p=u[h];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];e.data.attributes[m]=p.toJSON(e.data)}const o={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let v=0,_=p.length;v<_;v++){const x=p[v];g.push(x.toJSON(e.data))}g.length>0&&(o[m]=g,c=!0)}c&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const p in o){const g=o[p];this.setAttribute(p,g.clone(i))}const c=e.morphAttributes;for(const p in c){const g=[],v=c[p];for(let _=0,x=v.length;_<x;_++)g.push(v[_].clone(i));this.morphAttributes[p]=g}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let p=0,g=u.length;p<g;p++){const v=u[p];this.addGroup(v.start,v.count,v.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let uE=0;class pu extends tr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:uE++}),this.uuid=ro(),this.name="",this.type="Material",this.blending=Qr,this.side=Oa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=gh,this.blendDst=_h,this.blendEquation=Zs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Nt(0,0,0),this.blendAlpha=0,this.depthFunc=no,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=y_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Pr,this.stencilZFail=Pr,this.stencilZPass=Pr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){rt(`Material: parameter '${i}' has value of undefined.`);continue}const o=this[i];if(o===void 0){rt(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector2&&r&&r.isVector2||o&&o.isEuler&&r&&r.isEuler||o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Qr&&(r.blending=this.blending),this.side!==Oa&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==gh&&(r.blendSrc=this.blendSrc),this.blendDst!==_h&&(r.blendDst=this.blendDst),this.blendEquation!==Zs&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==no&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==y_&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Pr&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Pr&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Pr&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(c){const u=[];for(const h in c){const m=c[h];delete m.metadata,u.push(m)}return u}if(i){const c=o(e.textures),u=o(e.images);c.length>0&&(r.textures=c),u.length>0&&(r.images=u)}return r}fromJSON(e,i){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Nt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=i[e.map]||null),e.matcap!==void 0&&(this.matcap=i[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=i[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=i[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=i[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),this.normalScale=new Bt().fromArray(r)}return e.displacementMap!==void 0&&(this.displacementMap=i[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=i[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=i[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=i[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=i[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=i[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=i[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=i[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=i[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=i[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=i[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=i[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=i[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=i[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Bt().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=i[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=i[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=i[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=i[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=i[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=i[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=i[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const o=i.length;r=new Array(o);for(let c=0;c!==o;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const wa=new ee,Jd=new ee,Fc=new ee,_s=new ee,$d=new ee,Bc=new ee,eh=new ee;class fE{constructor(e=new ee,i=new ee(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,wa)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=wa.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(wa.copy(this.origin).addScaledVector(this.direction,i),wa.distanceToSquared(e))}distanceSqToSegment(e,i,r,o){Jd.copy(e).add(i).multiplyScalar(.5),Fc.copy(i).sub(e).normalize(),_s.copy(this.origin).sub(Jd);const c=e.distanceTo(i)*.5,u=-this.direction.dot(Fc),h=_s.dot(this.direction),m=-_s.dot(Fc),p=_s.lengthSq(),g=Math.abs(1-u*u);let v,_,x,b;if(g>0)if(v=u*m-h,_=u*h-m,b=c*g,v>=0)if(_>=-b)if(_<=b){const w=1/g;v*=w,_*=w,x=v*(v+u*_+2*h)+_*(u*v+_+2*m)+p}else _=c,v=Math.max(0,-(u*_+h)),x=-v*v+_*(_+2*m)+p;else _=-c,v=Math.max(0,-(u*_+h)),x=-v*v+_*(_+2*m)+p;else _<=-b?(v=Math.max(0,-(-u*c+h)),_=v>0?-c:Math.min(Math.max(-c,-m),c),x=-v*v+_*(_+2*m)+p):_<=b?(v=0,_=Math.min(Math.max(-c,-m),c),x=_*(_+2*m)+p):(v=Math.max(0,-(u*c+h)),_=v>0?c:Math.min(Math.max(-c,-m),c),x=-v*v+_*(_+2*m)+p);else _=u>0?-c:c,v=Math.max(0,-(u*_+h)),x=-v*v+_*(_+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,v),o&&o.copy(Jd).addScaledVector(Fc,_),x}intersectSphere(e,i){wa.subVectors(e.center,this.origin);const r=wa.dot(this.direction),o=wa.dot(wa)-r*r,c=e.radius*e.radius;if(o>c)return null;const u=Math.sqrt(c-o),h=r-u,m=r+u;return m<0?null:h<0?this.at(m,i):this.at(h,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,o,c,u,h,m;const p=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,_=this.origin;return p>=0?(r=(e.min.x-_.x)*p,o=(e.max.x-_.x)*p):(r=(e.max.x-_.x)*p,o=(e.min.x-_.x)*p),g>=0?(c=(e.min.y-_.y)*g,u=(e.max.y-_.y)*g):(c=(e.max.y-_.y)*g,u=(e.min.y-_.y)*g),r>u||c>o||((c>r||isNaN(r))&&(r=c),(u<o||isNaN(o))&&(o=u),v>=0?(h=(e.min.z-_.z)*v,m=(e.max.z-_.z)*v):(h=(e.max.z-_.z)*v,m=(e.min.z-_.z)*v),r>m||h>o)||((h>r||r!==r)&&(r=h),(m<o||o!==o)&&(o=m),o<0)?null:this.at(r>=0?r:o,i)}intersectsBox(e){return this.intersectBox(e,wa)!==null}intersectTriangle(e,i,r,o,c){$d.subVectors(i,e),Bc.subVectors(r,e),eh.crossVectors($d,Bc);let u=this.direction.dot(eh),h;if(u>0){if(o)return null;h=1}else if(u<0)h=-1,u=-u;else return null;_s.subVectors(this.origin,e);const m=h*this.direction.dot(Bc.crossVectors(_s,Bc));if(m<0)return null;const p=h*this.direction.dot($d.cross(_s));if(p<0||m+p>u)return null;const g=-h*_s.dot(eh);return g<0?null:this.at(g/u,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class uu extends pu{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new er,this.combine=Ov,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const z_=new pn,Xs=new fE,zc=new vp,H_=new ee,Hc=new ee,Gc=new ee,Vc=new ee,th=new ee,kc=new ee,G_=new ee,Xc=new ee;class Di extends _i{constructor(e=new Ni,i=new uu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const o=i[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const h=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(e,i){const r=this.geometry,o=r.attributes.position,c=r.morphAttributes.position,u=r.morphTargetsRelative;i.fromBufferAttribute(o,e);const h=this.morphTargetInfluences;if(c&&h){kc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const g=h[m],v=c[m];g!==0&&(th.fromBufferAttribute(v,e),u?kc.addScaledVector(th,g):kc.addScaledVector(th.sub(i),g))}i.add(kc)}return i}raycast(e,i){const r=this.geometry,o=this.material,c=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),zc.copy(r.boundingSphere),zc.applyMatrix4(c),Xs.copy(e.ray).recast(e.near),!(zc.containsPoint(Xs.origin)===!1&&(Xs.intersectSphere(zc,H_)===null||Xs.origin.distanceToSquared(H_)>(e.far-e.near)**2))&&(z_.copy(c).invert(),Xs.copy(e.ray).applyMatrix4(z_),!(r.boundingBox!==null&&Xs.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,Xs)))}_computeIntersections(e,i,r){let o;const c=this.geometry,u=this.material,h=c.index,m=c.attributes.position,p=c.attributes.uv,g=c.attributes.uv1,v=c.attributes.normal,_=c.groups,x=c.drawRange;if(h!==null)if(Array.isArray(u))for(let b=0,w=_.length;b<w;b++){const y=_[b],M=u[y.materialIndex],P=Math.max(y.start,x.start),z=Math.min(h.count,Math.min(y.start+y.count,x.start+x.count));for(let C=P,O=z;C<O;C+=3){const N=h.getX(C),I=h.getX(C+1),T=h.getX(C+2);o=Wc(this,M,e,r,p,g,v,N,I,T),o&&(o.faceIndex=Math.floor(C/3),o.face.materialIndex=y.materialIndex,i.push(o))}}else{const b=Math.max(0,x.start),w=Math.min(h.count,x.start+x.count);for(let y=b,M=w;y<M;y+=3){const P=h.getX(y),z=h.getX(y+1),C=h.getX(y+2);o=Wc(this,u,e,r,p,g,v,P,z,C),o&&(o.faceIndex=Math.floor(y/3),i.push(o))}}else if(m!==void 0)if(Array.isArray(u))for(let b=0,w=_.length;b<w;b++){const y=_[b],M=u[y.materialIndex],P=Math.max(y.start,x.start),z=Math.min(m.count,Math.min(y.start+y.count,x.start+x.count));for(let C=P,O=z;C<O;C+=3){const N=C,I=C+1,T=C+2;o=Wc(this,M,e,r,p,g,v,N,I,T),o&&(o.faceIndex=Math.floor(C/3),o.face.materialIndex=y.materialIndex,i.push(o))}}else{const b=Math.max(0,x.start),w=Math.min(m.count,x.start+x.count);for(let y=b,M=w;y<M;y+=3){const P=y,z=y+1,C=y+2;o=Wc(this,u,e,r,p,g,v,P,z,C),o&&(o.faceIndex=Math.floor(y/3),i.push(o))}}}}function dE(a,e,i,r,o,c,u,h){let m;if(e.side===ai?m=r.intersectTriangle(u,c,o,!0,h):m=r.intersectTriangle(o,c,u,e.side===Oa,h),m===null)return null;Xc.copy(h),Xc.applyMatrix4(a.matrixWorld);const p=i.ray.origin.distanceTo(Xc);return p<i.near||p>i.far?null:{distance:p,point:Xc.clone(),object:a}}function Wc(a,e,i,r,o,c,u,h,m,p){a.getVertexPosition(h,Hc),a.getVertexPosition(m,Gc),a.getVertexPosition(p,Vc);const g=dE(a,e,i,r,Hc,Gc,Vc,G_);if(g){const v=new ee;Hi.getBarycoord(G_,Hc,Gc,Vc,v),o&&(g.uv=Hi.getInterpolatedAttribute(o,h,m,p,v,new Bt)),c&&(g.uv1=Hi.getInterpolatedAttribute(c,h,m,p,v,new Bt)),u&&(g.normal=Hi.getInterpolatedAttribute(u,h,m,p,v,new ee),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const _={a:h,b:m,c:p,normal:new ee,materialIndex:0};Hi.getNormal(Hc,Gc,Vc,_.normal),g.face=_,g.barycoord=v}return g}class hE extends Xn{constructor(e=null,i=1,r=1,o,c,u,h,m,p=Bn,g=Bn,v,_){super(null,u,h,m,p,g,o,c,v,_),this.isDataTexture=!0,this.image={data:e,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const nh=new ee,pE=new ee,mE=new ct;class Ys{constructor(e=new ee(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,o){return this.normal.set(e,i,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const o=nh.subVectors(r,i).cross(pE.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i,r=!0){const o=e.delta(nh),c=this.normal.dot(o);if(c===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/c;return r===!0&&(u<0||u>1)?null:i.copy(e.start).addScaledVector(o,u)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||mE.getNormalMatrix(e),o=this.coplanarPoint(nh).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ws=new vp,gE=new Bt(.5,.5),qc=new ee;class nS{constructor(e=new Ys,i=new Ys,r=new Ys,o=new Ys,c=new Ys,u=new Ys){this.planes=[e,i,r,o,c,u]}set(e,i,r,o,c,u){const h=this.planes;return h[0].copy(e),h[1].copy(i),h[2].copy(r),h[3].copy(o),h[4].copy(c),h[5].copy(u),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=ta,r=!1){const o=this.planes,c=e.elements,u=c[0],h=c[1],m=c[2],p=c[3],g=c[4],v=c[5],_=c[6],x=c[7],b=c[8],w=c[9],y=c[10],M=c[11],P=c[12],z=c[13],C=c[14],O=c[15];if(o[0].setComponents(p-u,x-g,M-b,O-P).normalize(),o[1].setComponents(p+u,x+g,M+b,O+P).normalize(),o[2].setComponents(p+h,x+v,M+w,O+z).normalize(),o[3].setComponents(p-h,x-v,M-w,O-z).normalize(),r)o[4].setComponents(m,_,y,C).normalize(),o[5].setComponents(p-m,x-_,M-y,O-C).normalize();else if(o[4].setComponents(p-m,x-_,M-y,O-C).normalize(),i===ta)o[5].setComponents(p+m,x+_,M+y,O+C).normalize();else if(i===lu)o[5].setComponents(m,_,y,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ws.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Ws.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ws)}intersectsSprite(e){Ws.center.set(0,0,0);const i=gE.distanceTo(e.center);return Ws.radius=.7071067811865476+i,Ws.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ws)}intersectsSphere(e){const i=this.planes,r=e.center,o=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const o=i[r];if(qc.x=o.normal.x>0?e.max.x:e.min.x,qc.y=o.normal.y>0?e.max.y:e.min.y,qc.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(qc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class iS extends Xn{constructor(e=[],i=Js,r,o,c,u,h,m,p,g){super(e,i,r,o,c,u,h,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class aS extends Xn{constructor(e,i,r,o,c,u,h,m,p){super(e,i,r,o,c,u,h,m,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ao extends Xn{constructor(e,i,r=sa,o,c,u,h=Bn,m=Bn,p,g=Ia,v=1){if(g!==Ia&&g!==Ks)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const _={width:e,height:i,depth:v};super(_,o,c,u,h,m,g,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new _p(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class _E extends ao{constructor(e,i=sa,r=Js,o,c,u=Bn,h=Bn,m,p=Ia){const g={width:e,height:e,depth:1},v=[g,g,g,g,g,g];super(e,e,i,r,o,c,u,h,m,p),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class sS extends Xn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class vl extends Ni{constructor(e=1,i=1,r=1,o=1,c=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:o,heightSegments:c,depthSegments:u};const h=this;o=Math.floor(o),c=Math.floor(c),u=Math.floor(u);const m=[],p=[],g=[],v=[];let _=0,x=0;b("z","y","x",-1,-1,r,i,e,u,c,0),b("z","y","x",1,-1,r,i,-e,u,c,1),b("x","z","y",1,1,e,r,i,o,u,2),b("x","z","y",1,-1,e,r,-i,o,u,3),b("x","y","z",1,-1,e,i,r,o,c,4),b("x","y","z",-1,-1,e,i,-r,o,c,5),this.setIndex(m),this.setAttribute("position",new wi(p,3)),this.setAttribute("normal",new wi(g,3)),this.setAttribute("uv",new wi(v,2));function b(w,y,M,P,z,C,O,N,I,T,D){const q=C/I,G=O/T,Z=C/2,de=O/2,oe=N/2,Y=I+1,F=T+1;let H=0,$=0;const me=new ee;for(let Se=0;Se<F;Se++){const U=Se*G-de;for(let K=0;K<Y;K++){const xe=K*q-Z;me[w]=xe*P,me[y]=U*z,me[M]=oe,p.push(me.x,me.y,me.z),me[w]=0,me[y]=0,me[M]=N>0?1:-1,g.push(me.x,me.y,me.z),v.push(K/I),v.push(1-Se/T),H+=1}}for(let Se=0;Se<T;Se++)for(let U=0;U<I;U++){const K=_+U+Y*Se,xe=_+U+Y*(Se+1),Te=_+(U+1)+Y*(Se+1),Ue=_+(U+1)+Y*Se;m.push(K,xe,Ue),m.push(xe,Te,Ue),$+=6}h.addGroup(x,$,D),x+=$,_+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class vE{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){rt("Curve: .getPoint() not implemented.")}getPointAt(e,i){const r=this.getUtoTmapping(e);return this.getPoint(r,i)}getPoints(e=5){const i=[];for(let r=0;r<=e;r++)i.push(this.getPoint(r/e));return i}getSpacedPoints(e=5){const i=[];for(let r=0;r<=e;r++)i.push(this.getPointAt(r/e));return i}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const i=[];let r,o=this.getPoint(0),c=0;i.push(0);for(let u=1;u<=e;u++)r=this.getPoint(u/e),c+=r.distanceTo(o),i.push(c),o=r;return this.cacheArcLengths=i,i}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,i=null){const r=this.getLengths();let o=0;const c=r.length;let u;i?u=i:u=e*r[c-1];let h=0,m=c-1,p;for(;h<=m;)if(o=Math.floor(h+(m-h)/2),p=r[o]-u,p<0)h=o+1;else if(p>0)m=o-1;else{m=o;break}if(o=m,r[o]===u)return o/(c-1);const g=r[o],_=r[o+1]-g,x=(u-g)/_;return(o+x)/(c-1)}getTangent(e,i){let o=e-1e-4,c=e+1e-4;o<0&&(o=0),c>1&&(c=1);const u=this.getPoint(o),h=this.getPoint(c),m=i||(u.isVector2?new Bt:new ee);return m.copy(h).sub(u).normalize(),m}getTangentAt(e,i){const r=this.getUtoTmapping(e);return this.getTangent(r,i)}computeFrenetFrames(e,i=!1){const r=new ee,o=[],c=[],u=[],h=new ee,m=new pn;for(let x=0;x<=e;x++){const b=x/e;o[x]=this.getTangentAt(b,new ee)}c[0]=new ee,u[0]=new ee;let p=Number.MAX_VALUE;const g=Math.abs(o[0].x),v=Math.abs(o[0].y),_=Math.abs(o[0].z);g<=p&&(p=g,r.set(1,0,0)),v<=p&&(p=v,r.set(0,1,0)),_<=p&&r.set(0,0,1),h.crossVectors(o[0],r).normalize(),c[0].crossVectors(o[0],h),u[0].crossVectors(o[0],c[0]);for(let x=1;x<=e;x++){if(c[x]=c[x-1].clone(),u[x]=u[x-1].clone(),h.crossVectors(o[x-1],o[x]),h.length()>Number.EPSILON){h.normalize();const b=Math.acos(xt(o[x-1].dot(o[x]),-1,1));c[x].applyMatrix4(m.makeRotationAxis(h,b))}u[x].crossVectors(o[x],c[x])}if(i===!0){let x=Math.acos(xt(c[0].dot(c[e]),-1,1));x/=e,o[0].dot(h.crossVectors(c[0],c[e]))>0&&(x=-x);for(let b=1;b<=e;b++)c[b].applyMatrix4(m.makeRotationAxis(o[b],x*b)),u[b].crossVectors(o[b],c[b])}return{tangents:o,normals:c,binormals:u}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}function Sp(){let a=0,e=0,i=0,r=0;function o(c,u,h,m){a=c,e=h,i=-3*c+3*u-2*h-m,r=2*c-2*u+h+m}return{initCatmullRom:function(c,u,h,m,p){o(u,h,p*(h-c),p*(m-u))},initNonuniformCatmullRom:function(c,u,h,m,p,g,v){let _=(u-c)/p-(h-c)/(p+g)+(h-u)/g,x=(h-u)/g-(m-u)/(g+v)+(m-h)/v;_*=g,x*=g,o(u,h,_,x)},calc:function(c){const u=c*c,h=u*c;return a+e*c+i*u+r*h}}}const V_=new ee,k_=new ee,ih=new Sp,ah=new Sp,sh=new Sp;class SE extends vE{constructor(e=[],i=!1,r="centripetal",o=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=i,this.curveType=r,this.tension=o}getPoint(e,i=new ee){const r=i,o=this.points,c=o.length,u=(c-(this.closed?0:1))*e;let h=Math.floor(u),m=u-h;this.closed?h+=h>0?0:(Math.floor(Math.abs(h)/c)+1)*c:m===0&&h===c-1&&(h=c-2,m=1);let p,g;this.closed||h>0?p=o[(h-1)%c]:(k_.subVectors(o[0],o[1]).add(o[0]),p=k_);const v=o[h%c],_=o[(h+1)%c];if(this.closed||h+2<c?g=o[(h+2)%c]:(V_.subVectors(o[c-1],o[c-2]).add(o[c-1]),g=V_),this.curveType==="centripetal"||this.curveType==="chordal"){const x=this.curveType==="chordal"?.5:.25;let b=Math.pow(p.distanceToSquared(v),x),w=Math.pow(v.distanceToSquared(_),x),y=Math.pow(_.distanceToSquared(g),x);w<1e-4&&(w=1),b<1e-4&&(b=w),y<1e-4&&(y=w),ih.initNonuniformCatmullRom(p.x,v.x,_.x,g.x,b,w,y),ah.initNonuniformCatmullRom(p.y,v.y,_.y,g.y,b,w,y),sh.initNonuniformCatmullRom(p.z,v.z,_.z,g.z,b,w,y)}else this.curveType==="catmullrom"&&(ih.initCatmullRom(p.x,v.x,_.x,g.x,this.tension),ah.initCatmullRom(p.y,v.y,_.y,g.y,this.tension),sh.initCatmullRom(p.z,v.z,_.z,g.z,this.tension));return r.set(ih.calc(m),ah.calc(m),sh.calc(m)),r}copy(e){super.copy(e),this.points=[];for(let i=0,r=e.points.length;i<r;i++){const o=e.points[i];this.points.push(o.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let i=0,r=this.points.length;i<r;i++){const o=this.points[i];e.points.push(o.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let i=0,r=e.points.length;i<r;i++){const o=e.points[i];this.points.push(new ee().fromArray(o))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}class Qs extends Ni{constructor(e=1,i=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:o};const c=e/2,u=i/2,h=Math.floor(r),m=Math.floor(o),p=h+1,g=m+1,v=e/h,_=i/m,x=[],b=[],w=[],y=[];for(let M=0;M<g;M++){const P=M*_-u;for(let z=0;z<p;z++){const C=z*v-c;b.push(C,-P,0),w.push(0,0,1),y.push(z/h),y.push(1-M/m)}}for(let M=0;M<m;M++)for(let P=0;P<h;P++){const z=P+p*M,C=P+p*(M+1),O=P+1+p*(M+1),N=P+1+p*M;x.push(z,C,N),x.push(C,O,N)}this.setIndex(x),this.setAttribute("position",new wi(b,3)),this.setAttribute("normal",new wi(w,3)),this.setAttribute("uv",new wi(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qs(e.width,e.height,e.widthSegments,e.heightSegments)}}function so(a){const e={};for(const i in a){e[i]={};for(const r in a[i]){const o=a[i][r];if(X_(o))o.isRenderTargetTexture?(rt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=o.clone();else if(Array.isArray(o))if(X_(o[0])){const c=[];for(let u=0,h=o.length;u<h;u++)c[u]=o[u].clone();e[i][r]=c}else e[i][r]=o.slice();else e[i][r]=o}}return e}function Zn(a){const e={};for(let i=0;i<a.length;i++){const r=so(a[i]);for(const o in r)e[o]=r[o]}return e}function X_(a){return a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)}function xE(a){const e=[];for(let i=0;i<a.length;i++)e.push(a[i].clone());return e}function rS(a){const e=a.getRenderTarget();return e===null?a.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ct.workingColorSpace}const ME={clone:so,merge:Zn};var yE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,EE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ki extends pu{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=yE,this.fragmentShader=EE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=so(e.uniforms),this.uniformsGroups=xE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?i.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?i.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?i.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?i.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?i.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?i.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?i.uniforms[o]={type:"m4",value:u.toArray()}:i.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}fromJSON(e,i){if(super.fromJSON(e,i),e.uniforms!==void 0)for(const r in e.uniforms){const o=e.uniforms[r];switch(this.uniforms[r]={},o.type){case"t":this.uniforms[r].value=i[o.value]||null;break;case"c":this.uniforms[r].value=new Nt().setHex(o.value);break;case"v2":this.uniforms[r].value=new Bt().fromArray(o.value);break;case"v3":this.uniforms[r].value=new ee().fromArray(o.value);break;case"v4":this.uniforms[r].value=new un().fromArray(o.value);break;case"m3":this.uniforms[r].value=new ct().fromArray(o.value);break;case"m4":this.uniforms[r].value=new pn().fromArray(o.value);break;default:this.uniforms[r].value=o.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)this.extensions[r]=e.extensions[r];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class bE extends ki{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class TE extends pu{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Sy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class AE extends pu{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Yc=new ee,Zc=new oo,Ki=new ee;class oS extends _i{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pn,this.projectionMatrix=new pn,this.projectionMatrixInverse=new pn,this.coordinateSystem=ta,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Yc,Zc,Ki),Ki.x===1&&Ki.y===1&&Ki.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Yc,Zc,Ki.set(1,1,1)).invert()}updateWorldMatrix(e,i,r=!1){super.updateWorldMatrix(e,i,r),this.matrixWorld.decompose(Yc,Zc,Ki),Ki.x===1&&Ki.y===1&&Ki.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Yc,Zc,Ki.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const vs=new ee,W_=new Bt,q_=new Bt;class Ri extends oS{constructor(e=50,i=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=ml*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(cl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ml*2*Math.atan(Math.tan(cl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){vs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(vs.x,vs.y).multiplyScalar(-e/vs.z),vs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(vs.x,vs.y).multiplyScalar(-e/vs.z)}getViewSize(e,i){return this.getViewBounds(e,W_,q_),i.subVectors(q_,W_)}setViewOffset(e,i,r,o,c,u){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(cl*.5*this.fov)/this.zoom,r=2*i,o=this.aspect*r,c=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const m=u.fullWidth,p=u.fullHeight;c+=u.offsetX*o/m,i-=u.offsetY*r/p,o*=u.width/m,r*=u.height/p}const h=this.filmOffset;h!==0&&(c+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+o,i,i-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class lS extends oS{constructor(e=-1,i=1,r=1,o=-1,c=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=o,this.near=c,this.far=u,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,o,c,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let c=r-e,u=r+e,h=o+i,m=o-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,u=c+p*this.view.width,h-=g*this.view.offsetY,m=h-g*this.view.height}this.projectionMatrix.makeOrthographic(c,u,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const qr=-90,Yr=1;class RE extends _i{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Ri(qr,Yr,e,i);o.layers=this.layers,this.add(o);const c=new Ri(qr,Yr,e,i);c.layers=this.layers,this.add(c);const u=new Ri(qr,Yr,e,i);u.layers=this.layers,this.add(u);const h=new Ri(qr,Yr,e,i);h.layers=this.layers,this.add(h);const m=new Ri(qr,Yr,e,i);m.layers=this.layers,this.add(m);const p=new Ri(qr,Yr,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,o,c,u,h,m]=i;for(const p of i)this.remove(p);if(e===ta)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===lu)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,u,h,m,p,g]=this.children,v=e.getRenderTarget(),_=e.getActiveCubeFace(),x=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const w=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let y=!1;e.isWebGLRenderer===!0?y=e.state.buffers.depth.getReversed():y=e.reversedDepthBuffer,e.setRenderTarget(r,0,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,c),e.setRenderTarget(r,1,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,u),e.setRenderTarget(r,2,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,h),e.setRenderTarget(r,3,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,m),e.setRenderTarget(r,4,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,p),r.texture.generateMipmaps=w,e.setRenderTarget(r,5,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,g),e.setRenderTarget(v,_,x),e.xr.enabled=b,r.texture.needsPMREMUpdate=!0}}class CE extends Ri{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Rp=class Rp{constructor(e,i,r,o){this.elements=[1,0,0,1],e!==void 0&&this.set(e,i,r,o)}identity(){return this.set(1,0,0,1),this}fromArray(e,i=0){for(let r=0;r<4;r++)this.elements[r]=e[r+i];return this}set(e,i,r,o){const c=this.elements;return c[0]=e,c[2]=i,c[1]=r,c[3]=o,this}};Rp.prototype.isMatrix2=!0;let Y_=Rp;function Z_(a,e,i,r){const o=wE(r);switch(i){case Yv:return a*e;case jv:return a*e/o.components*o.byteLength;case fp:return a*e/o.components*o.byteLength;case $s:return a*e*2/o.components*o.byteLength;case dp:return a*e*2/o.components*o.byteLength;case Zv:return a*e*3/o.components*o.byteLength;case Vi:return a*e*4/o.components*o.byteLength;case hp:return a*e*4/o.components*o.byteLength;case $c:case eu:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case tu:case nu:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Ch:case Dh:return Math.max(a,16)*Math.max(e,8)/4;case Rh:case wh:return Math.max(a,8)*Math.max(e,8)/2;case Nh:case Lh:case Oh:case Ph:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case Uh:case au:case Ih:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Fh:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Bh:return Math.floor((a+4)/5)*Math.floor((e+3)/4)*16;case zh:return Math.floor((a+4)/5)*Math.floor((e+4)/5)*16;case Hh:return Math.floor((a+5)/6)*Math.floor((e+4)/5)*16;case Gh:return Math.floor((a+5)/6)*Math.floor((e+5)/6)*16;case Vh:return Math.floor((a+7)/8)*Math.floor((e+4)/5)*16;case kh:return Math.floor((a+7)/8)*Math.floor((e+5)/6)*16;case Xh:return Math.floor((a+7)/8)*Math.floor((e+7)/8)*16;case Wh:return Math.floor((a+9)/10)*Math.floor((e+4)/5)*16;case qh:return Math.floor((a+9)/10)*Math.floor((e+5)/6)*16;case Yh:return Math.floor((a+9)/10)*Math.floor((e+7)/8)*16;case Zh:return Math.floor((a+9)/10)*Math.floor((e+9)/10)*16;case jh:return Math.floor((a+11)/12)*Math.floor((e+9)/10)*16;case Kh:return Math.floor((a+11)/12)*Math.floor((e+11)/12)*16;case Qh:case Jh:case $h:return Math.ceil(a/4)*Math.ceil(e/4)*16;case ep:case tp:return Math.ceil(a/4)*Math.ceil(e/4)*8;case su:case np:return Math.ceil(a/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function wE(a){switch(a){case Ci:case kv:return{byteLength:1,components:1};case hl:case Xv:case Pa:return{byteLength:2,components:1};case cp:case up:return{byteLength:2,components:4};case sa:case lp:case ea:return{byteLength:4,components:1};case Wv:case qv:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${a}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:op}}));typeof window<"u"&&(window.__THREE__?rt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=op);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function cS(){let a=null,e=!1,i=null,r=null;function o(c,u){i(c,u),r=a.requestAnimationFrame(o)}return{start:function(){e!==!0&&i!==null&&a!==null&&(r=a.requestAnimationFrame(o),e=!0)},stop:function(){a!==null&&a.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){a=c}}}function DE(a){const e=new WeakMap;function i(h,m){const p=h.array,g=h.usage,v=p.byteLength,_=a.createBuffer();a.bindBuffer(m,_),a.bufferData(m,p,g),h.onUploadCallback();let x;if(p instanceof Float32Array)x=a.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)x=a.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?x=a.HALF_FLOAT:x=a.UNSIGNED_SHORT;else if(p instanceof Int16Array)x=a.SHORT;else if(p instanceof Uint32Array)x=a.UNSIGNED_INT;else if(p instanceof Int32Array)x=a.INT;else if(p instanceof Int8Array)x=a.BYTE;else if(p instanceof Uint8Array)x=a.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)x=a.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:_,type:x,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:v}}function r(h,m,p){const g=m.array,v=m.updateRanges;if(a.bindBuffer(p,h),v.length===0)a.bufferSubData(p,0,g);else{v.sort((x,b)=>x.start-b.start);let _=0;for(let x=1;x<v.length;x++){const b=v[_],w=v[x];w.start<=b.start+b.count+1?b.count=Math.max(b.count,w.start+w.count-b.start):(++_,v[_]=w)}v.length=_+1;for(let x=0,b=v.length;x<b;x++){const w=v[x];a.bufferSubData(p,w.start*g.BYTES_PER_ELEMENT,g,w.start,w.count)}m.clearUpdateRanges()}m.onUploadCallback()}function o(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=e.get(h);m&&(a.deleteBuffer(m.buffer),e.delete(h))}function u(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const g=e.get(h);(!g||g.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=e.get(h);if(p===void 0)e.set(h,i(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,h,m),p.version=h.version}}return{get:o,remove:c,update:u}}var NE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,LE=`#ifdef USE_ALPHAHASH
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
#endif`,UE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,OE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,PE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,IE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,FE=`#ifdef USE_AOMAP
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
#endif`,BE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,zE=`#ifdef USE_BATCHING
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
#endif`,HE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,GE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,VE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,kE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,XE=`#ifdef USE_IRIDESCENCE
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
#endif`,WE=`#ifdef USE_BUMPMAP
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
#endif`,qE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,YE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ZE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,jE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,KE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,QE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,JE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,$E=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,eb=`#define PI 3.141592653589793
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
} // validated`,tb=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,nb=`vec3 transformedNormal = objectNormal;
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
#endif`,ib=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ab=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,sb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,rb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ob="gl_FragColor = linearToOutputTexel( gl_FragColor );",lb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,cb=`#ifdef USE_ENVMAP
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
#endif`,ub=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,fb=`#ifdef USE_ENVMAP
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
#endif`,db=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,hb=`#ifdef USE_ENVMAP
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
#endif`,pb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,mb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,gb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,_b=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,vb=`#ifdef USE_GRADIENTMAP
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
}`,Sb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,xb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Mb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,yb=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Eb=`#ifdef USE_ENVMAP
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
#endif`,bb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Tb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ab=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Rb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Cb=`PhysicalMaterial material;
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
#endif`,wb=`uniform sampler2D dfgLUT;
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
}`,Db=`
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
#endif`,Nb=`#if defined( RE_IndirectDiffuse )
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
#endif`,Lb=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ub=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Ob=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Pb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ib=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Fb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Bb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,zb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Hb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Gb=`#if defined( USE_POINTS_UV )
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
#endif`,Vb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,kb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Xb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Wb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,qb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Yb=`#ifdef USE_MORPHTARGETS
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
#endif`,Zb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Kb=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Qb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$b=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,eT=`#ifdef USE_NORMALMAP
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
#endif`,tT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,nT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,iT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,aT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,sT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,rT=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,oT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,lT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,cT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,uT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,fT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,dT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,hT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,pT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,mT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,gT=`float getShadowMask() {
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
}`,_T=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,vT=`#ifdef USE_SKINNING
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
#endif`,ST=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,xT=`#ifdef USE_SKINNING
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
#endif`,MT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,yT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ET=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,bT=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,TT=`#ifdef USE_TRANSMISSION
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
#endif`,AT=`#ifdef USE_TRANSMISSION
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
#endif`,RT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,CT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,DT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const NT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,LT=`uniform sampler2D t2D;
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
}`,UT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,OT=`#ifdef ENVMAP_TYPE_CUBE
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
}`,PT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,IT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,FT=`#include <common>
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
}`,BT=`#if DEPTH_PACKING == 3200
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
}`,zT=`#define DISTANCE
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
}`,HT=`#define DISTANCE
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
}`,GT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,VT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kT=`uniform float scale;
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
}`,XT=`uniform vec3 diffuse;
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
}`,WT=`#include <common>
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
}`,qT=`uniform vec3 diffuse;
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
}`,YT=`#define LAMBERT
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
}`,ZT=`#define LAMBERT
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
}`,jT=`#define MATCAP
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
}`,KT=`#define MATCAP
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
}`,QT=`#define NORMAL
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
}`,JT=`#define NORMAL
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
}`,$T=`#define PHONG
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
}`,e1=`#define PHONG
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
}`,t1=`#define STANDARD
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
}`,n1=`#define STANDARD
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
}`,i1=`#define TOON
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
}`,a1=`#define TOON
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
}`,s1=`uniform float size;
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
}`,r1=`uniform vec3 diffuse;
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
}`,o1=`#include <common>
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
}`,l1=`uniform vec3 color;
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
}`,c1=`uniform float rotation;
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
}`,u1=`uniform vec3 diffuse;
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
}`,gt={alphahash_fragment:NE,alphahash_pars_fragment:LE,alphamap_fragment:UE,alphamap_pars_fragment:OE,alphatest_fragment:PE,alphatest_pars_fragment:IE,aomap_fragment:FE,aomap_pars_fragment:BE,batching_pars_vertex:zE,batching_vertex:HE,begin_vertex:GE,beginnormal_vertex:VE,bsdfs:kE,iridescence_fragment:XE,bumpmap_pars_fragment:WE,clipping_planes_fragment:qE,clipping_planes_pars_fragment:YE,clipping_planes_pars_vertex:ZE,clipping_planes_vertex:jE,color_fragment:KE,color_pars_fragment:QE,color_pars_vertex:JE,color_vertex:$E,common:eb,cube_uv_reflection_fragment:tb,defaultnormal_vertex:nb,displacementmap_pars_vertex:ib,displacementmap_vertex:ab,emissivemap_fragment:sb,emissivemap_pars_fragment:rb,colorspace_fragment:ob,colorspace_pars_fragment:lb,envmap_fragment:cb,envmap_common_pars_fragment:ub,envmap_pars_fragment:fb,envmap_pars_vertex:db,envmap_physical_pars_fragment:Eb,envmap_vertex:hb,fog_vertex:pb,fog_pars_vertex:mb,fog_fragment:gb,fog_pars_fragment:_b,gradientmap_pars_fragment:vb,lightmap_pars_fragment:Sb,lights_lambert_fragment:xb,lights_lambert_pars_fragment:Mb,lights_pars_begin:yb,lights_toon_fragment:bb,lights_toon_pars_fragment:Tb,lights_phong_fragment:Ab,lights_phong_pars_fragment:Rb,lights_physical_fragment:Cb,lights_physical_pars_fragment:wb,lights_fragment_begin:Db,lights_fragment_maps:Nb,lights_fragment_end:Lb,lightprobes_pars_fragment:Ub,logdepthbuf_fragment:Ob,logdepthbuf_pars_fragment:Pb,logdepthbuf_pars_vertex:Ib,logdepthbuf_vertex:Fb,map_fragment:Bb,map_pars_fragment:zb,map_particle_fragment:Hb,map_particle_pars_fragment:Gb,metalnessmap_fragment:Vb,metalnessmap_pars_fragment:kb,morphinstance_vertex:Xb,morphcolor_vertex:Wb,morphnormal_vertex:qb,morphtarget_pars_vertex:Yb,morphtarget_vertex:Zb,normal_fragment_begin:jb,normal_fragment_maps:Kb,normal_pars_fragment:Qb,normal_pars_vertex:Jb,normal_vertex:$b,normalmap_pars_fragment:eT,clearcoat_normal_fragment_begin:tT,clearcoat_normal_fragment_maps:nT,clearcoat_pars_fragment:iT,iridescence_pars_fragment:aT,opaque_fragment:sT,packing:rT,premultiplied_alpha_fragment:oT,project_vertex:lT,dithering_fragment:cT,dithering_pars_fragment:uT,roughnessmap_fragment:fT,roughnessmap_pars_fragment:dT,shadowmap_pars_fragment:hT,shadowmap_pars_vertex:pT,shadowmap_vertex:mT,shadowmask_pars_fragment:gT,skinbase_vertex:_T,skinning_pars_vertex:vT,skinning_vertex:ST,skinnormal_vertex:xT,specularmap_fragment:MT,specularmap_pars_fragment:yT,tonemapping_fragment:ET,tonemapping_pars_fragment:bT,transmission_fragment:TT,transmission_pars_fragment:AT,uv_pars_fragment:RT,uv_pars_vertex:CT,uv_vertex:wT,worldpos_vertex:DT,background_vert:NT,background_frag:LT,backgroundCube_vert:UT,backgroundCube_frag:OT,cube_vert:PT,cube_frag:IT,depth_vert:FT,depth_frag:BT,distance_vert:zT,distance_frag:HT,equirect_vert:GT,equirect_frag:VT,linedashed_vert:kT,linedashed_frag:XT,meshbasic_vert:WT,meshbasic_frag:qT,meshlambert_vert:YT,meshlambert_frag:ZT,meshmatcap_vert:jT,meshmatcap_frag:KT,meshnormal_vert:QT,meshnormal_frag:JT,meshphong_vert:$T,meshphong_frag:e1,meshphysical_vert:t1,meshphysical_frag:n1,meshtoon_vert:i1,meshtoon_frag:a1,points_vert:s1,points_frag:r1,shadow_vert:o1,shadow_frag:l1,sprite_vert:c1,sprite_frag:u1},Fe={common:{diffuse:{value:new Nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ct}},envmap:{envMap:{value:null},envMapRotation:{value:new ct},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ct}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ct}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ct},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ct},normalScale:{value:new Bt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ct},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ct}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ct}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ct}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new ee},probesMax:{value:new ee},probesResolution:{value:new ee}},points:{diffuse:{value:new Nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0},uvTransform:{value:new ct}},sprite:{diffuse:{value:new Nt(16777215)},opacity:{value:1},center:{value:new Bt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}}},Ji={basic:{uniforms:Zn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.fog]),vertexShader:gt.meshbasic_vert,fragmentShader:gt.meshbasic_frag},lambert:{uniforms:Zn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new Nt(0)},envMapIntensity:{value:1}}]),vertexShader:gt.meshlambert_vert,fragmentShader:gt.meshlambert_frag},phong:{uniforms:Zn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new Nt(0)},specular:{value:new Nt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:gt.meshphong_vert,fragmentShader:gt.meshphong_frag},standard:{uniforms:Zn([Fe.common,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.roughnessmap,Fe.metalnessmap,Fe.fog,Fe.lights,{emissive:{value:new Nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag},toon:{uniforms:Zn([Fe.common,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.gradientmap,Fe.fog,Fe.lights,{emissive:{value:new Nt(0)}}]),vertexShader:gt.meshtoon_vert,fragmentShader:gt.meshtoon_frag},matcap:{uniforms:Zn([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,{matcap:{value:null}}]),vertexShader:gt.meshmatcap_vert,fragmentShader:gt.meshmatcap_frag},points:{uniforms:Zn([Fe.points,Fe.fog]),vertexShader:gt.points_vert,fragmentShader:gt.points_frag},dashed:{uniforms:Zn([Fe.common,Fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:gt.linedashed_vert,fragmentShader:gt.linedashed_frag},depth:{uniforms:Zn([Fe.common,Fe.displacementmap]),vertexShader:gt.depth_vert,fragmentShader:gt.depth_frag},normal:{uniforms:Zn([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,{opacity:{value:1}}]),vertexShader:gt.meshnormal_vert,fragmentShader:gt.meshnormal_frag},sprite:{uniforms:Zn([Fe.sprite,Fe.fog]),vertexShader:gt.sprite_vert,fragmentShader:gt.sprite_frag},background:{uniforms:{uvTransform:{value:new ct},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:gt.background_vert,fragmentShader:gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ct}},vertexShader:gt.backgroundCube_vert,fragmentShader:gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:gt.cube_vert,fragmentShader:gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:gt.equirect_vert,fragmentShader:gt.equirect_frag},distance:{uniforms:Zn([Fe.common,Fe.displacementmap,{referencePosition:{value:new ee},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:gt.distance_vert,fragmentShader:gt.distance_frag},shadow:{uniforms:Zn([Fe.lights,Fe.fog,{color:{value:new Nt(0)},opacity:{value:1}}]),vertexShader:gt.shadow_vert,fragmentShader:gt.shadow_frag}};Ji.physical={uniforms:Zn([Ji.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ct},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ct},clearcoatNormalScale:{value:new Bt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ct},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ct},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ct},sheen:{value:0},sheenColor:{value:new Nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ct},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ct},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ct},transmissionSamplerSize:{value:new Bt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ct},attenuationDistance:{value:0},attenuationColor:{value:new Nt(0)},specularColor:{value:new Nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ct},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ct},anisotropyVector:{value:new Bt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ct}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag};const jc={r:0,b:0,g:0},f1=new pn,uS=new ct;uS.set(-1,0,0,0,1,0,0,0,1);function d1(a,e,i,r,o,c){const u=new Nt(0);let h=o===!0?0:1,m,p,g=null,v=0,_=null;function x(P){let z=P.isScene===!0?P.background:null;if(z&&z.isTexture){const C=P.backgroundBlurriness>0;z=e.get(z,C)}return z}function b(P){let z=!1;const C=x(P);C===null?y(u,h):C&&C.isColor&&(y(C,1),z=!0);const O=a.xr.getEnvironmentBlendMode();O==="additive"?i.buffers.color.setClear(0,0,0,1,c):O==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(a.autoClear||z)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil))}function w(P,z){const C=x(z);C&&(C.isCubeTexture||C.mapping===hu)?(p===void 0&&(p=new Di(new vl(1,1,1),new ki({name:"BackgroundCubeMaterial",uniforms:so(Ji.backgroundCube.uniforms),vertexShader:Ji.backgroundCube.vertexShader,fragmentShader:Ji.backgroundCube.fragmentShader,side:ai,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(O,N,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(p)),p.material.uniforms.envMap.value=C,p.material.uniforms.backgroundBlurriness.value=z.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=z.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(f1.makeRotationFromEuler(z.backgroundRotation)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&p.material.uniforms.backgroundRotation.value.premultiply(uS),p.material.toneMapped=Ct.getTransfer(C.colorSpace)!==Yt,(g!==C||v!==C.version||_!==a.toneMapping)&&(p.material.needsUpdate=!0,g=C,v=C.version,_=a.toneMapping),p.layers.enableAll(),P.unshift(p,p.geometry,p.material,0,0,null)):C&&C.isTexture&&(m===void 0&&(m=new Di(new Qs(2,2),new ki({name:"BackgroundMaterial",uniforms:so(Ji.background.uniforms),vertexShader:Ji.background.vertexShader,fragmentShader:Ji.background.fragmentShader,side:Oa,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(m)),m.material.uniforms.t2D.value=C,m.material.uniforms.backgroundIntensity.value=z.backgroundIntensity,m.material.toneMapped=Ct.getTransfer(C.colorSpace)!==Yt,C.matrixAutoUpdate===!0&&C.updateMatrix(),m.material.uniforms.uvTransform.value.copy(C.matrix),(g!==C||v!==C.version||_!==a.toneMapping)&&(m.material.needsUpdate=!0,g=C,v=C.version,_=a.toneMapping),m.layers.enableAll(),P.unshift(m,m.geometry,m.material,0,0,null))}function y(P,z){P.getRGB(jc,rS(a)),i.buffers.color.setClear(jc.r,jc.g,jc.b,z,c)}function M(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return u},setClearColor:function(P,z=1){u.set(P),h=z,y(u,h)},getClearAlpha:function(){return h},setClearAlpha:function(P){h=P,y(u,h)},render:b,addToRenderList:w,dispose:M}}function h1(a,e){const i=a.getParameter(a.MAX_VERTEX_ATTRIBS),r={},o=_(null);let c=o,u=!1;function h(G,Z,de,oe,Y){let F=!1;const H=v(G,oe,de,Z);c!==H&&(c=H,p(c.object)),F=x(G,oe,de,Y),F&&b(G,oe,de,Y),Y!==null&&e.update(Y,a.ELEMENT_ARRAY_BUFFER),(F||u)&&(u=!1,C(G,Z,de,oe),Y!==null&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function m(){return a.createVertexArray()}function p(G){return a.bindVertexArray(G)}function g(G){return a.deleteVertexArray(G)}function v(G,Z,de,oe){const Y=oe.wireframe===!0;let F=r[Z.id];F===void 0&&(F={},r[Z.id]=F);const H=G.isInstancedMesh===!0?G.id:0;let $=F[H];$===void 0&&($={},F[H]=$);let me=$[de.id];me===void 0&&(me={},$[de.id]=me);let Se=me[Y];return Se===void 0&&(Se=_(m()),me[Y]=Se),Se}function _(G){const Z=[],de=[],oe=[];for(let Y=0;Y<i;Y++)Z[Y]=0,de[Y]=0,oe[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Z,enabledAttributes:de,attributeDivisors:oe,object:G,attributes:{},index:null}}function x(G,Z,de,oe){const Y=c.attributes,F=Z.attributes;let H=0;const $=de.getAttributes();for(const me in $)if($[me].location>=0){const U=Y[me];let K=F[me];if(K===void 0&&(me==="instanceMatrix"&&G.instanceMatrix&&(K=G.instanceMatrix),me==="instanceColor"&&G.instanceColor&&(K=G.instanceColor)),U===void 0||U.attribute!==K||K&&U.data!==K.data)return!0;H++}return c.attributesNum!==H||c.index!==oe}function b(G,Z,de,oe){const Y={},F=Z.attributes;let H=0;const $=de.getAttributes();for(const me in $)if($[me].location>=0){let U=F[me];U===void 0&&(me==="instanceMatrix"&&G.instanceMatrix&&(U=G.instanceMatrix),me==="instanceColor"&&G.instanceColor&&(U=G.instanceColor));const K={};K.attribute=U,U&&U.data&&(K.data=U.data),Y[me]=K,H++}c.attributes=Y,c.attributesNum=H,c.index=oe}function w(){const G=c.newAttributes;for(let Z=0,de=G.length;Z<de;Z++)G[Z]=0}function y(G){M(G,0)}function M(G,Z){const de=c.newAttributes,oe=c.enabledAttributes,Y=c.attributeDivisors;de[G]=1,oe[G]===0&&(a.enableVertexAttribArray(G),oe[G]=1),Y[G]!==Z&&(a.vertexAttribDivisor(G,Z),Y[G]=Z)}function P(){const G=c.newAttributes,Z=c.enabledAttributes;for(let de=0,oe=Z.length;de<oe;de++)Z[de]!==G[de]&&(a.disableVertexAttribArray(de),Z[de]=0)}function z(G,Z,de,oe,Y,F,H){H===!0?a.vertexAttribIPointer(G,Z,de,Y,F):a.vertexAttribPointer(G,Z,de,oe,Y,F)}function C(G,Z,de,oe){w();const Y=oe.attributes,F=de.getAttributes(),H=Z.defaultAttributeValues;for(const $ in F){const me=F[$];if(me.location>=0){let Se=Y[$];if(Se===void 0&&($==="instanceMatrix"&&G.instanceMatrix&&(Se=G.instanceMatrix),$==="instanceColor"&&G.instanceColor&&(Se=G.instanceColor)),Se!==void 0){const U=Se.normalized,K=Se.itemSize,xe=e.get(Se);if(xe===void 0)continue;const Te=xe.buffer,Ue=xe.type,ie=xe.bytesPerElement,ye=Ue===a.INT||Ue===a.UNSIGNED_INT||Se.gpuType===lp;if(Se.isInterleavedBufferAttribute){const Ee=Se.data,ze=Ee.stride,it=Se.offset;if(Ee.isInstancedInterleavedBuffer){for(let Je=0;Je<me.locationSize;Je++)M(me.location+Je,Ee.meshPerAttribute);G.isInstancedMesh!==!0&&oe._maxInstanceCount===void 0&&(oe._maxInstanceCount=Ee.meshPerAttribute*Ee.count)}else for(let Je=0;Je<me.locationSize;Je++)y(me.location+Je);a.bindBuffer(a.ARRAY_BUFFER,Te);for(let Je=0;Je<me.locationSize;Je++)z(me.location+Je,K/me.locationSize,Ue,U,ze*ie,(it+K/me.locationSize*Je)*ie,ye)}else{if(Se.isInstancedBufferAttribute){for(let Ee=0;Ee<me.locationSize;Ee++)M(me.location+Ee,Se.meshPerAttribute);G.isInstancedMesh!==!0&&oe._maxInstanceCount===void 0&&(oe._maxInstanceCount=Se.meshPerAttribute*Se.count)}else for(let Ee=0;Ee<me.locationSize;Ee++)y(me.location+Ee);a.bindBuffer(a.ARRAY_BUFFER,Te);for(let Ee=0;Ee<me.locationSize;Ee++)z(me.location+Ee,K/me.locationSize,Ue,U,K*ie,K/me.locationSize*Ee*ie,ye)}}else if(H!==void 0){const U=H[$];if(U!==void 0)switch(U.length){case 2:a.vertexAttrib2fv(me.location,U);break;case 3:a.vertexAttrib3fv(me.location,U);break;case 4:a.vertexAttrib4fv(me.location,U);break;default:a.vertexAttrib1fv(me.location,U)}}}}P()}function O(){D();for(const G in r){const Z=r[G];for(const de in Z){const oe=Z[de];for(const Y in oe){const F=oe[Y];for(const H in F)g(F[H].object),delete F[H];delete oe[Y]}}delete r[G]}}function N(G){if(r[G.id]===void 0)return;const Z=r[G.id];for(const de in Z){const oe=Z[de];for(const Y in oe){const F=oe[Y];for(const H in F)g(F[H].object),delete F[H];delete oe[Y]}}delete r[G.id]}function I(G){for(const Z in r){const de=r[Z];for(const oe in de){const Y=de[oe];if(Y[G.id]===void 0)continue;const F=Y[G.id];for(const H in F)g(F[H].object),delete F[H];delete Y[G.id]}}}function T(G){for(const Z in r){const de=r[Z],oe=G.isInstancedMesh===!0?G.id:0,Y=de[oe];if(Y!==void 0){for(const F in Y){const H=Y[F];for(const $ in H)g(H[$].object),delete H[$];delete Y[F]}delete de[oe],Object.keys(de).length===0&&delete r[Z]}}}function D(){q(),u=!0,c!==o&&(c=o,p(c.object))}function q(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:h,reset:D,resetDefaultState:q,dispose:O,releaseStatesOfGeometry:N,releaseStatesOfObject:T,releaseStatesOfProgram:I,initAttributes:w,enableAttribute:y,disableUnusedAttributes:P}}function p1(a,e,i){let r;function o(m){r=m}function c(m,p){a.drawArrays(r,m,p),i.update(p,r,1)}function u(m,p,g){g!==0&&(a.drawArraysInstanced(r,m,p,g),i.update(p,r,g))}function h(m,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,p,0,g);let _=0;for(let x=0;x<g;x++)_+=p[x];i.update(_,r,1)}this.setMode=o,this.render=c,this.renderInstances=u,this.renderMultiDraw=h}function m1(a,e,i,r){let o;function c(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");o=a.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(I){return!(I!==Vi&&r.convert(I)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(I){const T=I===Pa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==Ci&&r.convert(I)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==ea&&!T)}function m(I){if(I==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const g=m(p);g!==p&&(rt("WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const v=i.logarithmicDepthBuffer===!0,_=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control");i.reversedDepthBuffer===!0&&_===!1&&rt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const x=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),b=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=a.getParameter(a.MAX_TEXTURE_SIZE),y=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),M=a.getParameter(a.MAX_VERTEX_ATTRIBS),P=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),z=a.getParameter(a.MAX_VARYING_VECTORS),C=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),O=a.getParameter(a.MAX_SAMPLES),N=a.getParameter(a.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:u,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:v,reversedDepthBuffer:_,maxTextures:x,maxVertexTextures:b,maxTextureSize:w,maxCubemapSize:y,maxAttributes:M,maxVertexUniforms:P,maxVaryings:z,maxFragmentUniforms:C,maxSamples:O,samples:N}}function g1(a){const e=this;let i=null,r=0,o=!1,c=!1;const u=new Ys,h=new ct,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(v,_){const x=v.length!==0||_||r!==0||o;return o=_,r=v.length,x},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(v,_){i=g(v,_,0)},this.setState=function(v,_,x){const b=v.clippingPlanes,w=v.clipIntersection,y=v.clipShadows,M=a.get(v);if(!o||b===null||b.length===0||c&&!y)c?g(null):p();else{const P=c?0:r,z=P*4;let C=M.clippingState||null;m.value=C,C=g(b,_,z,x);for(let O=0;O!==z;++O)C[O]=i[O];M.clippingState=C,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=P}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function g(v,_,x,b){const w=v!==null?v.length:0;let y=null;if(w!==0){if(y=m.value,b!==!0||y===null){const M=x+w*4,P=_.matrixWorldInverse;h.getNormalMatrix(P),(y===null||y.length<M)&&(y=new Float32Array(M));for(let z=0,C=x;z!==w;++z,C+=4)u.copy(v[z]).applyMatrix4(P,h),u.normal.toArray(y,C),y[C+3]=u.constant}m.value=y,m.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,y}}const Ms=4,j_=[.125,.215,.35,.446,.526,.582],js=20,_1=256,il=new lS,K_=new Nt;let rh=null,oh=0,lh=0,ch=!1;const v1=new ee;class Q_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,r=.1,o=100,c={}){const{size:u=256,position:h=v1}=c;rh=this._renderer.getRenderTarget(),oh=this._renderer.getActiveCubeFace(),lh=this._renderer.getActiveMipmapLevel(),ch=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,r,o,m,h),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ev(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(rh,oh,lh),this._renderer.xr.enabled=ch,e.scissorTest=!1,Zr(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Js||e.mapping===io?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),rh=this._renderer.getRenderTarget(),oh=this._renderer.getActiveCubeFace(),lh=this._renderer.getActiveMipmapLevel(),ch=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:bn,minFilter:bn,generateMipmaps:!1,type:Pa,format:Vi,colorSpace:ru,depthBuffer:!1},o=J_(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=J_(e,i,r);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=S1(c)),this._blurMaterial=M1(c,e,i),this._ggxMaterial=x1(c,e,i)}return o}_compileMaterial(e){const i=new Di(new Ni,e);this._renderer.compile(i,il)}_sceneToCubeUV(e,i,r,o,c){const m=new Ri(90,1,i,r),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],v=this._renderer,_=v.autoClear,x=v.toneMapping;v.getClearColor(K_),v.toneMapping=na,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(o),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Di(new vl,new uu({name:"PMREM.Background",side:ai,depthWrite:!1,depthTest:!1})));const w=this._backgroundBox,y=w.material;let M=!1;const P=e.background;P?P.isColor&&(y.color.copy(P),e.background=null,M=!0):(y.color.copy(K_),M=!0);for(let z=0;z<6;z++){const C=z%3;C===0?(m.up.set(0,p[z],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+g[z],c.y,c.z)):C===1?(m.up.set(0,0,p[z]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+g[z],c.z)):(m.up.set(0,p[z],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+g[z]));const O=this._cubeSize;Zr(o,C*O,z>2?O:0,O,O),v.setRenderTarget(o),M&&v.render(w,m),v.render(e,m)}v.toneMapping=x,v.autoClear=_,e.background=P}_textureToCubeUV(e,i){const r=this._renderer,o=e.mapping===Js||e.mapping===io;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=ev()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$_());const c=o?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=c;const h=c.uniforms;h.envMap.value=e;const m=this._cubeSize;Zr(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(u,il)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const o=this._lodMeshes.length;for(let c=1;c<o;c++)this._applyGGXFilter(e,c-1,c);i.autoClear=r}_applyGGXFilter(e,i,r){const o=this._renderer,c=this._pingPongRenderTarget,u=this._ggxMaterial,h=this._lodMeshes[r];h.material=u;const m=u.uniforms,p=r/(this._lodMeshes.length-1),g=i/(this._lodMeshes.length-1),v=Math.sqrt(p*p-g*g),_=0+p*1.25,x=v*_,{_lodMax:b}=this,w=this._sizeLods[r],y=3*w*(r>b-Ms?r-b+Ms:0),M=4*(this._cubeSize-w);m.envMap.value=e.texture,m.roughness.value=x,m.mipInt.value=b-i,Zr(c,y,M,3*w,2*w),o.setRenderTarget(c),o.render(h,il),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=b-r,Zr(e,y,M,3*w,2*w),o.setRenderTarget(e),o.render(h,il)}_blur(e,i,r,o,c){const u=this._pingPongRenderTarget;this._halfBlur(e,u,i,r,o,"latitudinal",c),this._halfBlur(u,e,r,r,o,"longitudinal",c)}_halfBlur(e,i,r,o,c,u,h){const m=this._renderer,p=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&Ut("blur direction must be either latitudinal or longitudinal!");const g=3,v=this._lodMeshes[o];v.material=p;const _=p.uniforms,x=this._sizeLods[r]-1,b=isFinite(c)?Math.PI/(2*x):2*Math.PI/(2*js-1),w=c/b,y=isFinite(c)?1+Math.floor(g*w):js;y>js&&rt(`sigmaRadians, ${c}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${js}`);const M=[];let P=0;for(let I=0;I<js;++I){const T=I/w,D=Math.exp(-T*T/2);M.push(D),I===0?P+=D:I<y&&(P+=2*D)}for(let I=0;I<M.length;I++)M[I]=M[I]/P;_.envMap.value=e.texture,_.samples.value=y,_.weights.value=M,_.latitudinal.value=u==="latitudinal",h&&(_.poleAxis.value=h);const{_lodMax:z}=this;_.dTheta.value=b,_.mipInt.value=z-r;const C=this._sizeLods[o],O=3*C*(o>z-Ms?o-z+Ms:0),N=4*(this._cubeSize-C);Zr(i,O,N,3*C,2*C),m.setRenderTarget(i),m.render(v,il)}}function S1(a){const e=[],i=[],r=[];let o=a;const c=a-Ms+1+j_.length;for(let u=0;u<c;u++){const h=Math.pow(2,o);e.push(h);let m=1/h;u>a-Ms?m=j_[u-a+Ms-1]:u===0&&(m=0),i.push(m);const p=1/(h-2),g=-p,v=1+p,_=[g,g,v,g,v,v,g,g,v,v,g,v],x=6,b=6,w=3,y=2,M=1,P=new Float32Array(w*b*x),z=new Float32Array(y*b*x),C=new Float32Array(M*b*x);for(let N=0;N<x;N++){const I=N%3*2/3-1,T=N>2?0:-1,D=[I,T,0,I+2/3,T,0,I+2/3,T+1,0,I,T,0,I+2/3,T+1,0,I,T+1,0];P.set(D,w*b*N),z.set(_,y*b*N);const q=[N,N,N,N,N,N];C.set(q,M*b*N)}const O=new Ni;O.setAttribute("position",new aa(P,w)),O.setAttribute("uv",new aa(z,y)),O.setAttribute("faceIndex",new aa(C,M)),r.push(new Di(O,null)),o>Ms&&o--}return{lodMeshes:r,sizeLods:e,sigmas:i}}function J_(a,e,i){const r=new ia(a,e,i);return r.texture.mapping=hu,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Zr(a,e,i,r,o){a.viewport.set(e,i,r,o),a.scissor.set(e,i,r,o)}function x1(a,e,i){return new ki({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:_1,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:mu(),fragmentShader:`

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
		`,blending:La,depthTest:!1,depthWrite:!1})}function M1(a,e,i){const r=new Float32Array(js),o=new ee(0,1,0);return new ki({name:"SphericalGaussianBlur",defines:{n:js,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:mu(),fragmentShader:`

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
		`,blending:La,depthTest:!1,depthWrite:!1})}function $_(){return new ki({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:mu(),fragmentShader:`

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
		`,blending:La,depthTest:!1,depthWrite:!1})}function ev(){return new ki({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:mu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:La,depthTest:!1,depthWrite:!1})}function mu(){return`

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
	`}class fS extends ia{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new iS(o),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new vl(5,5,5),c=new ki({name:"CubemapFromEquirect",uniforms:so(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:ai,blending:La});c.uniforms.tEquirect.value=i;const u=new Di(o,c),h=i.minFilter;return i.minFilter===xs&&(i.minFilter=bn),new RE(1,10,this).update(e,u),i.minFilter=h,u.geometry.dispose(),u.material.dispose(),this}clear(e,i=!0,r=!0,o=!0){const c=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(i,r,o);e.setRenderTarget(c)}}function y1(a){let e=new WeakMap,i=new WeakMap,r=null;function o(_,x=!1){return _==null?null:x?u(_):c(_)}function c(_){if(_&&_.isTexture){const x=_.mapping;if(x===Ld||x===Ud)if(e.has(_)){const b=e.get(_).texture;return h(b,_.mapping)}else{const b=_.image;if(b&&b.height>0){const w=new fS(b.height);return w.fromEquirectangularTexture(a,_),e.set(_,w),_.addEventListener("dispose",p),h(w.texture,_.mapping)}else return null}}return _}function u(_){if(_&&_.isTexture){const x=_.mapping,b=x===Ld||x===Ud,w=x===Js||x===io;if(b||w){let y=i.get(_);const M=y!==void 0?y.texture.pmremVersion:0;if(_.isRenderTargetTexture&&_.pmremVersion!==M)return r===null&&(r=new Q_(a)),y=b?r.fromEquirectangular(_,y):r.fromCubemap(_,y),y.texture.pmremVersion=_.pmremVersion,i.set(_,y),y.texture;if(y!==void 0)return y.texture;{const P=_.image;return b&&P&&P.height>0||w&&P&&m(P)?(r===null&&(r=new Q_(a)),y=b?r.fromEquirectangular(_):r.fromCubemap(_),y.texture.pmremVersion=_.pmremVersion,i.set(_,y),_.addEventListener("dispose",g),y.texture):null}}}return _}function h(_,x){return x===Ld?_.mapping=Js:x===Ud&&(_.mapping=io),_}function m(_){let x=0;const b=6;for(let w=0;w<b;w++)_[w]!==void 0&&x++;return x===b}function p(_){const x=_.target;x.removeEventListener("dispose",p);const b=e.get(x);b!==void 0&&(e.delete(x),b.dispose())}function g(_){const x=_.target;x.removeEventListener("dispose",g);const b=i.get(x);b!==void 0&&(i.delete(x),b.dispose())}function v(){e=new WeakMap,i=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:o,dispose:v}}function E1(a){const e={};function i(r){if(e[r]!==void 0)return e[r];const o=a.getExtension(r);return e[r]=o,o}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const o=i(r);return o===null&&Jr("WebGLRenderer: "+r+" extension not supported."),o}}}function b1(a,e,i,r){const o={},c=new WeakMap;function u(v){const _=v.target;_.index!==null&&e.remove(_.index);for(const b in _.attributes)e.remove(_.attributes[b]);_.removeEventListener("dispose",u),delete o[_.id];const x=c.get(_);x&&(e.remove(x),c.delete(_)),r.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,i.memory.geometries--}function h(v,_){return o[_.id]===!0||(_.addEventListener("dispose",u),o[_.id]=!0,i.memory.geometries++),_}function m(v){const _=v.attributes;for(const x in _)e.update(_[x],a.ARRAY_BUFFER)}function p(v){const _=[],x=v.index,b=v.attributes.position;let w=0;if(b===void 0)return;if(x!==null){const P=x.array;w=x.version;for(let z=0,C=P.length;z<C;z+=3){const O=P[z+0],N=P[z+1],I=P[z+2];_.push(O,N,N,I,I,O)}}else{const P=b.array;w=b.version;for(let z=0,C=P.length/3-1;z<C;z+=3){const O=z+0,N=z+1,I=z+2;_.push(O,N,N,I,I,O)}}const y=new(b.count>=65535?tS:eS)(_,1);y.version=w;const M=c.get(v);M&&e.remove(M),c.set(v,y)}function g(v){const _=c.get(v);if(_){const x=v.index;x!==null&&_.version<x.version&&p(v)}else p(v);return c.get(v)}return{get:h,update:m,getWireframeAttribute:g}}function T1(a,e,i){let r;function o(v){r=v}let c,u;function h(v){c=v.type,u=v.bytesPerElement}function m(v,_){a.drawElements(r,_,c,v*u),i.update(_,r,1)}function p(v,_,x){x!==0&&(a.drawElementsInstanced(r,_,c,v*u,x),i.update(_,r,x))}function g(v,_,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,_,0,c,v,0,x);let w=0;for(let y=0;y<x;y++)w+=_[y];i.update(w,r,1)}this.setMode=o,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=g}function A1(a){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,u,h){switch(i.calls++,u){case a.TRIANGLES:i.triangles+=h*(c/3);break;case a.LINES:i.lines+=h*(c/2);break;case a.LINE_STRIP:i.lines+=h*(c-1);break;case a.LINE_LOOP:i.lines+=h*c;break;case a.POINTS:i.points+=h*c;break;default:Ut("WebGLInfo: Unknown draw mode:",u);break}}function o(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:o,update:r}}function R1(a,e,i){const r=new WeakMap,o=new un;function c(u,h,m){const p=u.morphTargetInfluences,g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,v=g!==void 0?g.length:0;let _=r.get(h);if(_===void 0||_.count!==v){let q=function(){T.dispose(),r.delete(h),h.removeEventListener("dispose",q)};var x=q;_!==void 0&&_.texture.dispose();const b=h.morphAttributes.position!==void 0,w=h.morphAttributes.normal!==void 0,y=h.morphAttributes.color!==void 0,M=h.morphAttributes.position||[],P=h.morphAttributes.normal||[],z=h.morphAttributes.color||[];let C=0;b===!0&&(C=1),w===!0&&(C=2),y===!0&&(C=3);let O=h.attributes.position.count*C,N=1;O>e.maxTextureSize&&(N=Math.ceil(O/e.maxTextureSize),O=e.maxTextureSize);const I=new Float32Array(O*N*4*v),T=new Qv(I,O,N,v);T.type=ea,T.needsUpdate=!0;const D=C*4;for(let G=0;G<v;G++){const Z=M[G],de=P[G],oe=z[G],Y=O*N*4*G;for(let F=0;F<Z.count;F++){const H=F*D;b===!0&&(o.fromBufferAttribute(Z,F),I[Y+H+0]=o.x,I[Y+H+1]=o.y,I[Y+H+2]=o.z,I[Y+H+3]=0),w===!0&&(o.fromBufferAttribute(de,F),I[Y+H+4]=o.x,I[Y+H+5]=o.y,I[Y+H+6]=o.z,I[Y+H+7]=0),y===!0&&(o.fromBufferAttribute(oe,F),I[Y+H+8]=o.x,I[Y+H+9]=o.y,I[Y+H+10]=o.z,I[Y+H+11]=oe.itemSize===4?o.w:1)}}_={count:v,texture:T,size:new Bt(O,N)},r.set(h,_),h.addEventListener("dispose",q)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)m.getUniforms().setValue(a,"morphTexture",u.morphTexture,i);else{let b=0;for(let y=0;y<p.length;y++)b+=p[y];const w=h.morphTargetsRelative?1:1-b;m.getUniforms().setValue(a,"morphTargetBaseInfluence",w),m.getUniforms().setValue(a,"morphTargetInfluences",p)}m.getUniforms().setValue(a,"morphTargetsTexture",_.texture,i),m.getUniforms().setValue(a,"morphTargetsTextureSize",_.size)}return{update:c}}function C1(a,e,i,r,o){let c=new WeakMap;function u(p){const g=o.render.frame,v=p.geometry,_=e.get(p,v);if(c.get(_)!==g&&(e.update(_),c.set(_,g)),p.isInstancedMesh&&(p.hasEventListener("dispose",m)===!1&&p.addEventListener("dispose",m),c.get(p)!==g&&(i.update(p.instanceMatrix,a.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,a.ARRAY_BUFFER),c.set(p,g))),p.isSkinnedMesh){const x=p.skeleton;c.get(x)!==g&&(x.update(),c.set(x,g))}return _}function h(){c=new WeakMap}function m(p){const g=p.target;g.removeEventListener("dispose",m),r.releaseStatesOfObject(g),i.remove(g.instanceMatrix),g.instanceColor!==null&&i.remove(g.instanceColor)}return{update:u,dispose:h}}const w1={[Pv]:"LINEAR_TONE_MAPPING",[Iv]:"REINHARD_TONE_MAPPING",[Fv]:"CINEON_TONE_MAPPING",[Bv]:"ACES_FILMIC_TONE_MAPPING",[Hv]:"AGX_TONE_MAPPING",[Gv]:"NEUTRAL_TONE_MAPPING",[zv]:"CUSTOM_TONE_MAPPING"};function D1(a,e,i,r,o,c){const u=new ia(e,i,{type:a,depthBuffer:o,stencilBuffer:c,samples:r?4:0,depthTexture:o?new ao(e,i):void 0}),h=new ia(e,i,{type:Pa,depthBuffer:!1,stencilBuffer:!1}),m=new Ni;m.setAttribute("position",new wi([-1,3,0,-1,-1,0,3,-1,0],3)),m.setAttribute("uv",new wi([0,2,0,0,2,0],2));const p=new bE({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),g=new Di(m,p),v=new lS(-1,1,1,-1,0,1);let _=null,x=null,b=!1,w,y=null,M=[],P=!1;this.setSize=function(z,C){u.setSize(z,C),h.setSize(z,C);for(let O=0;O<M.length;O++){const N=M[O];N.setSize&&N.setSize(z,C)}},this.setEffects=function(z){M=z,P=M.length>0&&M[0].isRenderPass===!0;const C=u.width,O=u.height;for(let N=0;N<M.length;N++){const I=M[N];I.setSize&&I.setSize(C,O)}},this.begin=function(z,C){if(b||z.toneMapping===na&&M.length===0)return!1;if(y=C,C!==null){const O=C.width,N=C.height;(u.width!==O||u.height!==N)&&this.setSize(O,N)}return P===!1&&z.setRenderTarget(u),w=z.toneMapping,z.toneMapping=na,!0},this.hasRenderPass=function(){return P},this.end=function(z,C){z.toneMapping=w,b=!0;let O=u,N=h;for(let I=0;I<M.length;I++){const T=M[I];if(T.enabled!==!1&&(T.render(z,N,O,C),T.needsSwap!==!1)){const D=O;O=N,N=D}}if(_!==z.outputColorSpace||x!==z.toneMapping){_=z.outputColorSpace,x=z.toneMapping,p.defines={},Ct.getTransfer(_)===Yt&&(p.defines.SRGB_TRANSFER="");const I=w1[x];I&&(p.defines[I]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=O.texture,z.setRenderTarget(y),z.render(g,v),y=null,b=!1},this.isCompositing=function(){return b},this.dispose=function(){u.depthTexture&&u.depthTexture.dispose(),u.dispose(),h.dispose(),m.dispose(),p.dispose()}}const dS=new Xn,ip=new ao(1,1),hS=new Qv,pS=new Jy,mS=new iS,tv=[],nv=[],iv=new Float32Array(16),av=new Float32Array(9),sv=new Float32Array(4);function lo(a,e,i){const r=a[0];if(r<=0||r>0)return a;const o=e*i;let c=tv[o];if(c===void 0&&(c=new Float32Array(o),tv[o]=c),e!==0){r.toArray(c,0);for(let u=1,h=0;u!==e;++u)h+=i,a[u].toArray(c,h)}return c}function Cn(a,e){if(a.length!==e.length)return!1;for(let i=0,r=a.length;i<r;i++)if(a[i]!==e[i])return!1;return!0}function wn(a,e){for(let i=0,r=e.length;i<r;i++)a[i]=e[i]}function gu(a,e){let i=nv[e];i===void 0&&(i=new Int32Array(e),nv[e]=i);for(let r=0;r!==e;++r)i[r]=a.allocateTextureUnit();return i}function N1(a,e){const i=this.cache;i[0]!==e&&(a.uniform1f(this.addr,e),i[0]=e)}function L1(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Cn(i,e))return;a.uniform2fv(this.addr,e),wn(i,e)}}function U1(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(Cn(i,e))return;a.uniform3fv(this.addr,e),wn(i,e)}}function O1(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Cn(i,e))return;a.uniform4fv(this.addr,e),wn(i,e)}}function P1(a,e){const i=this.cache,r=e.elements;if(r===void 0){if(Cn(i,e))return;a.uniformMatrix2fv(this.addr,!1,e),wn(i,e)}else{if(Cn(i,r))return;sv.set(r),a.uniformMatrix2fv(this.addr,!1,sv),wn(i,r)}}function I1(a,e){const i=this.cache,r=e.elements;if(r===void 0){if(Cn(i,e))return;a.uniformMatrix3fv(this.addr,!1,e),wn(i,e)}else{if(Cn(i,r))return;av.set(r),a.uniformMatrix3fv(this.addr,!1,av),wn(i,r)}}function F1(a,e){const i=this.cache,r=e.elements;if(r===void 0){if(Cn(i,e))return;a.uniformMatrix4fv(this.addr,!1,e),wn(i,e)}else{if(Cn(i,r))return;iv.set(r),a.uniformMatrix4fv(this.addr,!1,iv),wn(i,r)}}function B1(a,e){const i=this.cache;i[0]!==e&&(a.uniform1i(this.addr,e),i[0]=e)}function z1(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(a.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Cn(i,e))return;a.uniform2iv(this.addr,e),wn(i,e)}}function H1(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(a.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Cn(i,e))return;a.uniform3iv(this.addr,e),wn(i,e)}}function G1(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Cn(i,e))return;a.uniform4iv(this.addr,e),wn(i,e)}}function V1(a,e){const i=this.cache;i[0]!==e&&(a.uniform1ui(this.addr,e),i[0]=e)}function k1(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(a.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Cn(i,e))return;a.uniform2uiv(this.addr,e),wn(i,e)}}function X1(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(a.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Cn(i,e))return;a.uniform3uiv(this.addr,e),wn(i,e)}}function W1(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Cn(i,e))return;a.uniform4uiv(this.addr,e),wn(i,e)}}function q1(a,e,i){const r=this.cache,o=i.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o);let c;this.type===a.SAMPLER_2D_SHADOW?(ip.compareFunction=i.isReversedDepthBuffer()?mp:pp,c=ip):c=dS,i.setTexture2D(e||c,o)}function Y1(a,e,i){const r=this.cache,o=i.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o),i.setTexture3D(e||pS,o)}function Z1(a,e,i){const r=this.cache,o=i.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o),i.setTextureCube(e||mS,o)}function j1(a,e,i){const r=this.cache,o=i.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o),i.setTexture2DArray(e||hS,o)}function K1(a){switch(a){case 5126:return N1;case 35664:return L1;case 35665:return U1;case 35666:return O1;case 35674:return P1;case 35675:return I1;case 35676:return F1;case 5124:case 35670:return B1;case 35667:case 35671:return z1;case 35668:case 35672:return H1;case 35669:case 35673:return G1;case 5125:return V1;case 36294:return k1;case 36295:return X1;case 36296:return W1;case 35678:case 36198:case 36298:case 36306:case 35682:return q1;case 35679:case 36299:case 36307:return Y1;case 35680:case 36300:case 36308:case 36293:return Z1;case 36289:case 36303:case 36311:case 36292:return j1}}function Q1(a,e){a.uniform1fv(this.addr,e)}function J1(a,e){const i=lo(e,this.size,2);a.uniform2fv(this.addr,i)}function $1(a,e){const i=lo(e,this.size,3);a.uniform3fv(this.addr,i)}function eA(a,e){const i=lo(e,this.size,4);a.uniform4fv(this.addr,i)}function tA(a,e){const i=lo(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,i)}function nA(a,e){const i=lo(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,i)}function iA(a,e){const i=lo(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,i)}function aA(a,e){a.uniform1iv(this.addr,e)}function sA(a,e){a.uniform2iv(this.addr,e)}function rA(a,e){a.uniform3iv(this.addr,e)}function oA(a,e){a.uniform4iv(this.addr,e)}function lA(a,e){a.uniform1uiv(this.addr,e)}function cA(a,e){a.uniform2uiv(this.addr,e)}function uA(a,e){a.uniform3uiv(this.addr,e)}function fA(a,e){a.uniform4uiv(this.addr,e)}function dA(a,e,i){const r=this.cache,o=e.length,c=gu(i,o);Cn(r,c)||(a.uniform1iv(this.addr,c),wn(r,c));let u;this.type===a.SAMPLER_2D_SHADOW?u=ip:u=dS;for(let h=0;h!==o;++h)i.setTexture2D(e[h]||u,c[h])}function hA(a,e,i){const r=this.cache,o=e.length,c=gu(i,o);Cn(r,c)||(a.uniform1iv(this.addr,c),wn(r,c));for(let u=0;u!==o;++u)i.setTexture3D(e[u]||pS,c[u])}function pA(a,e,i){const r=this.cache,o=e.length,c=gu(i,o);Cn(r,c)||(a.uniform1iv(this.addr,c),wn(r,c));for(let u=0;u!==o;++u)i.setTextureCube(e[u]||mS,c[u])}function mA(a,e,i){const r=this.cache,o=e.length,c=gu(i,o);Cn(r,c)||(a.uniform1iv(this.addr,c),wn(r,c));for(let u=0;u!==o;++u)i.setTexture2DArray(e[u]||hS,c[u])}function gA(a){switch(a){case 5126:return Q1;case 35664:return J1;case 35665:return $1;case 35666:return eA;case 35674:return tA;case 35675:return nA;case 35676:return iA;case 5124:case 35670:return aA;case 35667:case 35671:return sA;case 35668:case 35672:return rA;case 35669:case 35673:return oA;case 5125:return lA;case 36294:return cA;case 36295:return uA;case 36296:return fA;case 35678:case 36198:case 36298:case 36306:case 35682:return dA;case 35679:case 36299:case 36307:return hA;case 35680:case 36300:case 36308:case 36293:return pA;case 36289:case 36303:case 36311:case 36292:return mA}}class _A{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=K1(i.type)}}class vA{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=gA(i.type)}}class SA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const o=this.seq;for(let c=0,u=o.length;c!==u;++c){const h=o[c];h.setValue(e,i[h.id],r)}}}const uh=/(\w+)(\])?(\[|\.)?/g;function rv(a,e){a.seq.push(e),a.map[e.id]=e}function xA(a,e,i){const r=a.name,o=r.length;for(uh.lastIndex=0;;){const c=uh.exec(r),u=uh.lastIndex;let h=c[1];const m=c[2]==="]",p=c[3];if(m&&(h=h|0),p===void 0||p==="["&&u+2===o){rv(i,p===void 0?new _A(h,a,e):new vA(h,a,e));break}else{let v=i.map[h];v===void 0&&(v=new SA(h),rv(i,v)),i=v}}}class iu{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let u=0;u<r;++u){const h=e.getActiveUniform(i,u),m=e.getUniformLocation(i,h.name);xA(h,m,this)}const o=[],c=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(u):c.push(u);o.length>0&&(this.seq=o.concat(c))}setValue(e,i,r,o){const c=this.map[i];c!==void 0&&c.setValue(e,r,o)}setOptional(e,i,r){const o=i[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,i,r,o){for(let c=0,u=i.length;c!==u;++c){const h=i[c],m=r[h.id];m.needsUpdate!==!1&&h.setValue(e,m.value,o)}}static seqWithValue(e,i){const r=[];for(let o=0,c=e.length;o!==c;++o){const u=e[o];u.id in i&&r.push(u)}return r}}function ov(a,e,i){const r=a.createShader(e);return a.shaderSource(r,i),a.compileShader(r),r}const MA=37297;let yA=0;function EA(a,e){const i=a.split(`
`),r=[],o=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let u=o;u<c;u++){const h=u+1;r.push(`${h===e?">":" "} ${h}: ${i[u]}`)}return r.join(`
`)}const lv=new ct;function bA(a){Ct._getMatrix(lv,Ct.workingColorSpace,a);const e=`mat3( ${lv.elements.map(i=>i.toFixed(4))} )`;switch(Ct.getTransfer(a)){case ou:return[e,"LinearTransferOETF"];case Yt:return[e,"sRGBTransferOETF"];default:return rt("WebGLProgram: Unsupported color space: ",a),[e,"LinearTransferOETF"]}}function cv(a,e,i){const r=a.getShaderParameter(e,a.COMPILE_STATUS),c=(a.getShaderInfoLog(e)||"").trim();if(r&&c==="")return"";const u=/ERROR: 0:(\d+)/.exec(c);if(u){const h=parseInt(u[1]);return i.toUpperCase()+`

`+c+`

`+EA(a.getShaderSource(e),h)}else return c}function TA(a,e){const i=bA(e);return[`vec4 ${a}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const AA={[Pv]:"Linear",[Iv]:"Reinhard",[Fv]:"Cineon",[Bv]:"ACESFilmic",[Hv]:"AgX",[Gv]:"Neutral",[zv]:"Custom"};function RA(a,e){const i=AA[e];return i===void 0?(rt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+a+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+a+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Kc=new ee;function CA(){Ct.getLuminanceCoefficients(Kc);const a=Kc.x.toFixed(4),e=Kc.y.toFixed(4),i=Kc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${a}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function wA(a){return[a.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",a.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ol).join(`
`)}function DA(a){const e=[];for(const i in a){const r=a[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function NA(a,e){const i={},r=a.getProgramParameter(e,a.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const c=a.getActiveAttrib(e,o),u=c.name;let h=1;c.type===a.FLOAT_MAT2&&(h=2),c.type===a.FLOAT_MAT3&&(h=3),c.type===a.FLOAT_MAT4&&(h=4),i[u]={type:c.type,location:a.getAttribLocation(e,u),locationSize:h}}return i}function ol(a){return a!==""}function uv(a,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function fv(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const LA=/^[ \t]*#include +<([\w\d./]+)>/gm;function ap(a){return a.replace(LA,OA)}const UA=new Map;function OA(a,e){let i=gt[e];if(i===void 0){const r=UA.get(e);if(r!==void 0)i=gt[r],rt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return ap(i)}const PA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function dv(a){return a.replace(PA,IA)}function IA(a,e,i,r){let o="";for(let c=parseInt(e);c<parseInt(i);c++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return o}function hv(a){let e=`precision ${a.precision} float;
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
#define LOW_PRECISION`),e}const FA={[Jc]:"SHADOWMAP_TYPE_PCF",[sl]:"SHADOWMAP_TYPE_VSM"};function BA(a){return FA[a.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const zA={[Js]:"ENVMAP_TYPE_CUBE",[io]:"ENVMAP_TYPE_CUBE",[hu]:"ENVMAP_TYPE_CUBE_UV"};function HA(a){return a.envMap===!1?"ENVMAP_TYPE_CUBE":zA[a.envMapMode]||"ENVMAP_TYPE_CUBE"}const GA={[io]:"ENVMAP_MODE_REFRACTION"};function VA(a){return a.envMap===!1?"ENVMAP_MODE_REFLECTION":GA[a.envMapMode]||"ENVMAP_MODE_REFLECTION"}const kA={[Ov]:"ENVMAP_BLENDING_MULTIPLY",[gy]:"ENVMAP_BLENDING_MIX",[_y]:"ENVMAP_BLENDING_ADD"};function XA(a){return a.envMap===!1?"ENVMAP_BLENDING_NONE":kA[a.combine]||"ENVMAP_BLENDING_NONE"}function WA(a){const e=a.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function qA(a,e,i,r){const o=a.getContext(),c=i.defines;let u=i.vertexShader,h=i.fragmentShader;const m=BA(i),p=HA(i),g=VA(i),v=XA(i),_=WA(i),x=wA(i),b=DA(c),w=o.createProgram();let y,M,P=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(ol).join(`
`),y.length>0&&(y+=`
`),M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(ol).join(`
`),M.length>0&&(M+=`
`)):(y=[hv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ol).join(`
`),M=[hv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+g:"",i.envMap?"#define "+v:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==na?"#define TONE_MAPPING":"",i.toneMapping!==na?gt.tonemapping_pars_fragment:"",i.toneMapping!==na?RA("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",gt.colorspace_pars_fragment,TA("linearToOutputTexel",i.outputColorSpace),CA(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(ol).join(`
`)),u=ap(u),u=uv(u,i),u=fv(u,i),h=ap(h),h=uv(h,i),h=fv(h,i),u=dv(u),h=dv(h),i.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,y=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,M=["#define varying in",i.glslVersion===b_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===b_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+M);const z=P+y+u,C=P+M+h,O=ov(o,o.VERTEX_SHADER,z),N=ov(o,o.FRAGMENT_SHADER,C);o.attachShader(w,O),o.attachShader(w,N),i.index0AttributeName!==void 0?o.bindAttribLocation(w,0,i.index0AttributeName):i.hasPositionAttribute===!0&&o.bindAttribLocation(w,0,"position"),o.linkProgram(w);function I(G){if(a.debug.checkShaderErrors){const Z=o.getProgramInfoLog(w)||"",de=o.getShaderInfoLog(O)||"",oe=o.getShaderInfoLog(N)||"",Y=Z.trim(),F=de.trim(),H=oe.trim();let $=!0,me=!0;if(o.getProgramParameter(w,o.LINK_STATUS)===!1)if($=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(o,w,O,N);else{const Se=cv(o,O,"vertex"),U=cv(o,N,"fragment");Ut("WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(w,o.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+Y+`
`+Se+`
`+U)}else Y!==""?rt("WebGLProgram: Program Info Log:",Y):(F===""||H==="")&&(me=!1);me&&(G.diagnostics={runnable:$,programLog:Y,vertexShader:{log:F,prefix:y},fragmentShader:{log:H,prefix:M}})}o.deleteShader(O),o.deleteShader(N),T=new iu(o,w),D=NA(o,w)}let T;this.getUniforms=function(){return T===void 0&&I(this),T};let D;this.getAttributes=function(){return D===void 0&&I(this),D};let q=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return q===!1&&(q=o.getProgramParameter(w,MA)),q},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(w),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=yA++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=O,this.fragmentShader=N,this}let YA=0;class ZA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,i,r){const o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new jA(e),i.set(e,r)),r}}class jA{constructor(e){this.id=YA++,this.code=e,this.usedTimes=0}}function KA(a){return a===$s||a===au||a===su}function QA(a,e,i,r,o,c){const u=new Jv,h=new ZA,m=new Set,p=[],g=new Map,v=r.logarithmicDepthBuffer;let _=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(T){return m.add(T),T===0?"uv":`uv${T}`}function w(T,D,q,G,Z,de){const oe=G.fog,Y=Z.geometry,F=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?G.environment:null,H=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,$=e.get(T.envMap||F,H),me=$&&$.mapping===hu?$.image.height:null,Se=x[T.type];T.precision!==null&&(_=r.getMaxPrecision(T.precision),_!==T.precision&&rt("WebGLProgram.getParameters:",T.precision,"not supported, using",_,"instead."));const U=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,K=U!==void 0?U.length:0;let xe=0;Y.morphAttributes.position!==void 0&&(xe=1),Y.morphAttributes.normal!==void 0&&(xe=2),Y.morphAttributes.color!==void 0&&(xe=3);let Te,Ue,ie,ye;if(Se){const He=Ji[Se];Te=He.vertexShader,Ue=He.fragmentShader}else{Te=T.vertexShader,Ue=T.fragmentShader;const He=h.getVertexShaderStage(T),Gt=h.getFragmentShaderStage(T);h.update(T,He,Gt),ie=He.id,ye=Gt.id}const Ee=a.getRenderTarget(),ze=a.state.buffers.depth.getReversed(),it=Z.isInstancedMesh===!0,Je=Z.isBatchedMesh===!0,Zt=!!T.map,ut=!!T.matcap,vt=!!$,Ye=!!T.aoMap,Ze=!!T.lightMap,ot=!!T.bumpMap&&T.wireframe===!1,mt=!!T.normalMap,wt=!!T.displacementMap,Dt=!!T.emissiveMap,ft=!!T.metalnessMap,_t=!!T.roughnessMap,X=T.anisotropy>0,Mt=T.clearcoat>0,St=T.dispersion>0,L=T.iridescence>0,E=T.sheen>0,J=T.transmission>0,te=X&&!!T.anisotropyMap,fe=Mt&&!!T.clearcoatMap,Ce=Mt&&!!T.clearcoatNormalMap,De=Mt&&!!T.clearcoatRoughnessMap,he=L&&!!T.iridescenceMap,pe=L&&!!T.iridescenceThicknessMap,Ae=E&&!!T.sheenColorMap,Be=E&&!!T.sheenRoughnessMap,Ne=!!T.specularMap,Le=!!T.specularColorMap,$e=!!T.specularIntensityMap,je=J&&!!T.transmissionMap,st=J&&!!T.thicknessMap,W=!!T.gradientMap,Re=!!T.alphaMap,ge=T.alphaTest>0,we=!!T.alphaHash,Pe=!!T.extensions;let be=na;T.toneMapped&&(Ee===null||Ee.isXRRenderTarget===!0)&&(be=a.toneMapping);const Xe={shaderID:Se,shaderType:T.type,shaderName:T.name,vertexShader:Te,fragmentShader:Ue,defines:T.defines,customVertexShaderID:ie,customFragmentShaderID:ye,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:_,batching:Je,batchingColor:Je&&Z._colorsTexture!==null,instancing:it,instancingColor:it&&Z.instanceColor!==null,instancingMorph:it&&Z.morphTexture!==null,outputColorSpace:Ee===null?a.outputColorSpace:Ee.isXRRenderTarget===!0?Ee.texture.colorSpace:Ct.workingColorSpace,alphaToCoverage:!!T.alphaToCoverage,map:Zt,matcap:ut,envMap:vt,envMapMode:vt&&$.mapping,envMapCubeUVHeight:me,aoMap:Ye,lightMap:Ze,bumpMap:ot,normalMap:mt,displacementMap:wt,emissiveMap:Dt,normalMapObjectSpace:mt&&T.normalMapType===xy,normalMapTangentSpace:mt&&T.normalMapType===M_,packedNormalMap:mt&&T.normalMapType===M_&&KA(T.normalMap.format),metalnessMap:ft,roughnessMap:_t,anisotropy:X,anisotropyMap:te,clearcoat:Mt,clearcoatMap:fe,clearcoatNormalMap:Ce,clearcoatRoughnessMap:De,dispersion:St,iridescence:L,iridescenceMap:he,iridescenceThicknessMap:pe,sheen:E,sheenColorMap:Ae,sheenRoughnessMap:Be,specularMap:Ne,specularColorMap:Le,specularIntensityMap:$e,transmission:J,transmissionMap:je,thicknessMap:st,gradientMap:W,opaque:T.transparent===!1&&T.blending===Qr&&T.alphaToCoverage===!1,alphaMap:Re,alphaTest:ge,alphaHash:we,combine:T.combine,mapUv:Zt&&b(T.map.channel),aoMapUv:Ye&&b(T.aoMap.channel),lightMapUv:Ze&&b(T.lightMap.channel),bumpMapUv:ot&&b(T.bumpMap.channel),normalMapUv:mt&&b(T.normalMap.channel),displacementMapUv:wt&&b(T.displacementMap.channel),emissiveMapUv:Dt&&b(T.emissiveMap.channel),metalnessMapUv:ft&&b(T.metalnessMap.channel),roughnessMapUv:_t&&b(T.roughnessMap.channel),anisotropyMapUv:te&&b(T.anisotropyMap.channel),clearcoatMapUv:fe&&b(T.clearcoatMap.channel),clearcoatNormalMapUv:Ce&&b(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:De&&b(T.clearcoatRoughnessMap.channel),iridescenceMapUv:he&&b(T.iridescenceMap.channel),iridescenceThicknessMapUv:pe&&b(T.iridescenceThicknessMap.channel),sheenColorMapUv:Ae&&b(T.sheenColorMap.channel),sheenRoughnessMapUv:Be&&b(T.sheenRoughnessMap.channel),specularMapUv:Ne&&b(T.specularMap.channel),specularColorMapUv:Le&&b(T.specularColorMap.channel),specularIntensityMapUv:$e&&b(T.specularIntensityMap.channel),transmissionMapUv:je&&b(T.transmissionMap.channel),thicknessMapUv:st&&b(T.thicknessMap.channel),alphaMapUv:Re&&b(T.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(mt||X),vertexNormals:!!Y.attributes.normal,vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:Z.isPoints===!0&&!!Y.attributes.uv&&(Zt||Re),fog:!!oe,useFog:T.fog===!0,fogExp2:!!oe&&oe.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||Y.attributes.normal===void 0&&mt===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:ze,skinning:Z.isSkinnedMesh===!0,hasPositionAttribute:Y.attributes.position!==void 0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:xe,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numLightProbeGrids:de.length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:T.dithering,shadowMapEnabled:a.shadowMap.enabled&&q.length>0,shadowMapType:a.shadowMap.type,toneMapping:be,decodeVideoTexture:Zt&&T.map.isVideoTexture===!0&&Ct.getTransfer(T.map.colorSpace)===Yt,decodeVideoTextureEmissive:Dt&&T.emissiveMap.isVideoTexture===!0&&Ct.getTransfer(T.emissiveMap.colorSpace)===Yt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===$i,flipSided:T.side===ai,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Pe&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Pe&&T.extensions.multiDraw===!0||Je)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Xe.vertexUv1s=m.has(1),Xe.vertexUv2s=m.has(2),Xe.vertexUv3s=m.has(3),m.clear(),Xe}function y(T){const D=[];if(T.shaderID?D.push(T.shaderID):(D.push(T.customVertexShaderID),D.push(T.customFragmentShaderID)),T.defines!==void 0)for(const q in T.defines)D.push(q),D.push(T.defines[q]);return T.isRawShaderMaterial===!1&&(M(D,T),P(D,T),D.push(a.outputColorSpace)),D.push(T.customProgramCacheKey),D.join()}function M(T,D){T.push(D.precision),T.push(D.outputColorSpace),T.push(D.envMapMode),T.push(D.envMapCubeUVHeight),T.push(D.mapUv),T.push(D.alphaMapUv),T.push(D.lightMapUv),T.push(D.aoMapUv),T.push(D.bumpMapUv),T.push(D.normalMapUv),T.push(D.displacementMapUv),T.push(D.emissiveMapUv),T.push(D.metalnessMapUv),T.push(D.roughnessMapUv),T.push(D.anisotropyMapUv),T.push(D.clearcoatMapUv),T.push(D.clearcoatNormalMapUv),T.push(D.clearcoatRoughnessMapUv),T.push(D.iridescenceMapUv),T.push(D.iridescenceThicknessMapUv),T.push(D.sheenColorMapUv),T.push(D.sheenRoughnessMapUv),T.push(D.specularMapUv),T.push(D.specularColorMapUv),T.push(D.specularIntensityMapUv),T.push(D.transmissionMapUv),T.push(D.thicknessMapUv),T.push(D.combine),T.push(D.fogExp2),T.push(D.sizeAttenuation),T.push(D.morphTargetsCount),T.push(D.morphAttributeCount),T.push(D.numDirLights),T.push(D.numPointLights),T.push(D.numSpotLights),T.push(D.numSpotLightMaps),T.push(D.numHemiLights),T.push(D.numRectAreaLights),T.push(D.numDirLightShadows),T.push(D.numPointLightShadows),T.push(D.numSpotLightShadows),T.push(D.numSpotLightShadowsWithMaps),T.push(D.numLightProbes),T.push(D.shadowMapType),T.push(D.toneMapping),T.push(D.numClippingPlanes),T.push(D.numClipIntersection),T.push(D.depthPacking)}function P(T,D){u.disableAll(),D.instancing&&u.enable(0),D.instancingColor&&u.enable(1),D.instancingMorph&&u.enable(2),D.matcap&&u.enable(3),D.envMap&&u.enable(4),D.normalMapObjectSpace&&u.enable(5),D.normalMapTangentSpace&&u.enable(6),D.clearcoat&&u.enable(7),D.iridescence&&u.enable(8),D.alphaTest&&u.enable(9),D.vertexColors&&u.enable(10),D.vertexAlphas&&u.enable(11),D.vertexUv1s&&u.enable(12),D.vertexUv2s&&u.enable(13),D.vertexUv3s&&u.enable(14),D.vertexTangents&&u.enable(15),D.anisotropy&&u.enable(16),D.alphaHash&&u.enable(17),D.batching&&u.enable(18),D.dispersion&&u.enable(19),D.batchingColor&&u.enable(20),D.gradientMap&&u.enable(21),D.packedNormalMap&&u.enable(22),D.vertexNormals&&u.enable(23),T.push(u.mask),u.disableAll(),D.fog&&u.enable(0),D.useFog&&u.enable(1),D.flatShading&&u.enable(2),D.logarithmicDepthBuffer&&u.enable(3),D.reversedDepthBuffer&&u.enable(4),D.skinning&&u.enable(5),D.morphTargets&&u.enable(6),D.morphNormals&&u.enable(7),D.morphColors&&u.enable(8),D.premultipliedAlpha&&u.enable(9),D.shadowMapEnabled&&u.enable(10),D.doubleSided&&u.enable(11),D.flipSided&&u.enable(12),D.useDepthPacking&&u.enable(13),D.dithering&&u.enable(14),D.transmission&&u.enable(15),D.sheen&&u.enable(16),D.opaque&&u.enable(17),D.pointsUvs&&u.enable(18),D.decodeVideoTexture&&u.enable(19),D.decodeVideoTextureEmissive&&u.enable(20),D.alphaToCoverage&&u.enable(21),D.numLightProbeGrids>0&&u.enable(22),D.hasPositionAttribute&&u.enable(23),T.push(u.mask)}function z(T){const D=x[T.type];let q;if(D){const G=Ji[D];q=ME.clone(G.uniforms)}else q=T.uniforms;return q}function C(T,D){let q=g.get(D);return q!==void 0?++q.usedTimes:(q=new qA(a,D,T,o),p.push(q),g.set(D,q)),q}function O(T){if(--T.usedTimes===0){const D=p.indexOf(T);p[D]=p[p.length-1],p.pop(),g.delete(T.cacheKey),T.destroy()}}function N(T){h.remove(T)}function I(){h.dispose()}return{getParameters:w,getProgramCacheKey:y,getUniforms:z,acquireProgram:C,releaseProgram:O,releaseShaderCache:N,programs:p,dispose:I}}function JA(){let a=new WeakMap;function e(u){return a.has(u)}function i(u){let h=a.get(u);return h===void 0&&(h={},a.set(u,h)),h}function r(u){a.delete(u)}function o(u,h,m){a.get(u)[h]=m}function c(){a=new WeakMap}return{has:e,get:i,remove:r,update:o,dispose:c}}function $A(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.materialVariant!==e.materialVariant?a.materialVariant-e.materialVariant:a.z!==e.z?a.z-e.z:a.id-e.id}function pv(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function mv(){const a=[];let e=0;const i=[],r=[],o=[];function c(){e=0,i.length=0,r.length=0,o.length=0}function u(_){let x=0;return _.isInstancedMesh&&(x+=2),_.isSkinnedMesh&&(x+=1),x}function h(_,x,b,w,y,M){let P=a[e];return P===void 0?(P={id:_.id,object:_,geometry:x,material:b,materialVariant:u(_),groupOrder:w,renderOrder:_.renderOrder,z:y,group:M},a[e]=P):(P.id=_.id,P.object=_,P.geometry=x,P.material=b,P.materialVariant=u(_),P.groupOrder=w,P.renderOrder=_.renderOrder,P.z=y,P.group=M),e++,P}function m(_,x,b,w,y,M){const P=h(_,x,b,w,y,M);b.transmission>0?r.push(P):b.transparent===!0?o.push(P):i.push(P)}function p(_,x,b,w,y,M){const P=h(_,x,b,w,y,M);b.transmission>0?r.unshift(P):b.transparent===!0?o.unshift(P):i.unshift(P)}function g(_,x,b){i.length>1&&i.sort(_||$A),r.length>1&&r.sort(x||pv),o.length>1&&o.sort(x||pv),b&&(i.reverse(),r.reverse(),o.reverse())}function v(){for(let _=e,x=a.length;_<x;_++){const b=a[_];if(b.id===null)break;b.id=null,b.object=null,b.geometry=null,b.material=null,b.group=null}}return{opaque:i,transmissive:r,transparent:o,init:c,push:m,unshift:p,finish:v,sort:g}}function e2(){let a=new WeakMap;function e(r,o){const c=a.get(r);let u;return c===void 0?(u=new mv,a.set(r,[u])):o>=c.length?(u=new mv,c.push(u)):u=c[o],u}function i(){a=new WeakMap}return{get:e,dispose:i}}function t2(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new ee,color:new Nt};break;case"SpotLight":i={position:new ee,direction:new ee,color:new Nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new ee,color:new Nt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new ee,skyColor:new Nt,groundColor:new Nt};break;case"RectAreaLight":i={color:new Nt,position:new ee,halfWidth:new ee,halfHeight:new ee};break}return a[e.id]=i,i}}}function n2(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=i,i}}}let i2=0;function a2(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function s2(a){const e=new t2,i=n2(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new ee);const o=new ee,c=new pn,u=new pn;function h(p){let g=0,v=0,_=0;for(let D=0;D<9;D++)r.probe[D].set(0,0,0);let x=0,b=0,w=0,y=0,M=0,P=0,z=0,C=0,O=0,N=0,I=0;p.sort(a2);for(let D=0,q=p.length;D<q;D++){const G=p[D],Z=G.color,de=G.intensity,oe=G.distance;let Y=null;if(G.shadow&&G.shadow.map&&(G.shadow.map.texture.format===$s?Y=G.shadow.map.texture:Y=G.shadow.map.depthTexture||G.shadow.map.texture),G.isAmbientLight)g+=Z.r*de,v+=Z.g*de,_+=Z.b*de;else if(G.isLightProbe){for(let F=0;F<9;F++)r.probe[F].addScaledVector(G.sh.coefficients[F],de);I++}else if(G.isDirectionalLight){const F=e.get(G);if(F.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const H=G.shadow,$=i.get(G);$.shadowIntensity=H.intensity,$.shadowBias=H.bias,$.shadowNormalBias=H.normalBias,$.shadowRadius=H.radius,$.shadowMapSize=H.mapSize,r.directionalShadow[x]=$,r.directionalShadowMap[x]=Y,r.directionalShadowMatrix[x]=G.shadow.matrix,P++}r.directional[x]=F,x++}else if(G.isSpotLight){const F=e.get(G);F.position.setFromMatrixPosition(G.matrixWorld),F.color.copy(Z).multiplyScalar(de),F.distance=oe,F.coneCos=Math.cos(G.angle),F.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),F.decay=G.decay,r.spot[w]=F;const H=G.shadow;if(G.map&&(r.spotLightMap[O]=G.map,O++,H.updateMatrices(G),G.castShadow&&N++),r.spotLightMatrix[w]=H.matrix,G.castShadow){const $=i.get(G);$.shadowIntensity=H.intensity,$.shadowBias=H.bias,$.shadowNormalBias=H.normalBias,$.shadowRadius=H.radius,$.shadowMapSize=H.mapSize,r.spotShadow[w]=$,r.spotShadowMap[w]=Y,C++}w++}else if(G.isRectAreaLight){const F=e.get(G);F.color.copy(Z).multiplyScalar(de),F.halfWidth.set(G.width*.5,0,0),F.halfHeight.set(0,G.height*.5,0),r.rectArea[y]=F,y++}else if(G.isPointLight){const F=e.get(G);if(F.color.copy(G.color).multiplyScalar(G.intensity),F.distance=G.distance,F.decay=G.decay,G.castShadow){const H=G.shadow,$=i.get(G);$.shadowIntensity=H.intensity,$.shadowBias=H.bias,$.shadowNormalBias=H.normalBias,$.shadowRadius=H.radius,$.shadowMapSize=H.mapSize,$.shadowCameraNear=H.camera.near,$.shadowCameraFar=H.camera.far,r.pointShadow[b]=$,r.pointShadowMap[b]=Y,r.pointShadowMatrix[b]=G.shadow.matrix,z++}r.point[b]=F,b++}else if(G.isHemisphereLight){const F=e.get(G);F.skyColor.copy(G.color).multiplyScalar(de),F.groundColor.copy(G.groundColor).multiplyScalar(de),r.hemi[M]=F,M++}}y>0&&(a.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Fe.LTC_FLOAT_1,r.rectAreaLTC2=Fe.LTC_FLOAT_2):(r.rectAreaLTC1=Fe.LTC_HALF_1,r.rectAreaLTC2=Fe.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=v,r.ambient[2]=_;const T=r.hash;(T.directionalLength!==x||T.pointLength!==b||T.spotLength!==w||T.rectAreaLength!==y||T.hemiLength!==M||T.numDirectionalShadows!==P||T.numPointShadows!==z||T.numSpotShadows!==C||T.numSpotMaps!==O||T.numLightProbes!==I)&&(r.directional.length=x,r.spot.length=w,r.rectArea.length=y,r.point.length=b,r.hemi.length=M,r.directionalShadow.length=P,r.directionalShadowMap.length=P,r.pointShadow.length=z,r.pointShadowMap.length=z,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=P,r.pointShadowMatrix.length=z,r.spotLightMatrix.length=C+O-N,r.spotLightMap.length=O,r.numSpotLightShadowsWithMaps=N,r.numLightProbes=I,T.directionalLength=x,T.pointLength=b,T.spotLength=w,T.rectAreaLength=y,T.hemiLength=M,T.numDirectionalShadows=P,T.numPointShadows=z,T.numSpotShadows=C,T.numSpotMaps=O,T.numLightProbes=I,r.version=i2++)}function m(p,g){let v=0,_=0,x=0,b=0,w=0;const y=g.matrixWorldInverse;for(let M=0,P=p.length;M<P;M++){const z=p[M];if(z.isDirectionalLight){const C=r.directional[v];C.direction.setFromMatrixPosition(z.matrixWorld),o.setFromMatrixPosition(z.target.matrixWorld),C.direction.sub(o),C.direction.transformDirection(y),v++}else if(z.isSpotLight){const C=r.spot[x];C.position.setFromMatrixPosition(z.matrixWorld),C.position.applyMatrix4(y),C.direction.setFromMatrixPosition(z.matrixWorld),o.setFromMatrixPosition(z.target.matrixWorld),C.direction.sub(o),C.direction.transformDirection(y),x++}else if(z.isRectAreaLight){const C=r.rectArea[b];C.position.setFromMatrixPosition(z.matrixWorld),C.position.applyMatrix4(y),u.identity(),c.copy(z.matrixWorld),c.premultiply(y),u.extractRotation(c),C.halfWidth.set(z.width*.5,0,0),C.halfHeight.set(0,z.height*.5,0),C.halfWidth.applyMatrix4(u),C.halfHeight.applyMatrix4(u),b++}else if(z.isPointLight){const C=r.point[_];C.position.setFromMatrixPosition(z.matrixWorld),C.position.applyMatrix4(y),_++}else if(z.isHemisphereLight){const C=r.hemi[w];C.direction.setFromMatrixPosition(z.matrixWorld),C.direction.transformDirection(y),w++}}}return{setup:h,setupView:m,state:r}}function gv(a){const e=new s2(a),i=[],r=[],o=[];function c(_){v.camera=_,i.length=0,r.length=0,o.length=0}function u(_){i.push(_)}function h(_){r.push(_)}function m(_){o.push(_)}function p(){e.setup(i)}function g(_){e.setupView(i,_)}const v={lightsArray:i,shadowsArray:r,lightProbeGridArray:o,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:v,setupLights:p,setupLightsView:g,pushLight:u,pushShadow:h,pushLightProbeGrid:m}}function r2(a){let e=new WeakMap;function i(o,c=0){const u=e.get(o);let h;return u===void 0?(h=new gv(a),e.set(o,[h])):c>=u.length?(h=new gv(a),u.push(h)):h=u[c],h}function r(){e=new WeakMap}return{get:i,dispose:r}}const o2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,l2=`uniform sampler2D shadow_pass;
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
}`,c2=[new ee(1,0,0),new ee(-1,0,0),new ee(0,1,0),new ee(0,-1,0),new ee(0,0,1),new ee(0,0,-1)],u2=[new ee(0,-1,0),new ee(0,-1,0),new ee(0,0,1),new ee(0,0,-1),new ee(0,-1,0),new ee(0,-1,0)],_v=new pn,al=new ee,fh=new ee;function f2(a,e,i){let r=new nS;const o=new Bt,c=new Bt,u=new un,h=new TE,m=new AE,p={},g=i.maxTextureSize,v={[Oa]:ai,[ai]:Oa,[$i]:$i},_=new ki({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Bt},radius:{value:4}},vertexShader:o2,fragmentShader:l2}),x=_.clone();x.defines.HORIZONTAL_PASS=1;const b=new Ni;b.setAttribute("position",new aa(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new Di(b,_),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Jc;let M=this.type;this.render=function(N,I,T){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||N.length===0)return;this.type===QM&&(rt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Jc);const D=a.getRenderTarget(),q=a.getActiveCubeFace(),G=a.getActiveMipmapLevel(),Z=a.state;Z.setBlending(La),Z.buffers.depth.getReversed()===!0?Z.buffers.color.setClear(0,0,0,0):Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);const de=M!==this.type;de&&I.traverse(function(oe){oe.material&&(Array.isArray(oe.material)?oe.material.forEach(Y=>Y.needsUpdate=!0):oe.material.needsUpdate=!0)});for(let oe=0,Y=N.length;oe<Y;oe++){const F=N[oe],H=F.shadow;if(H===void 0){rt("WebGLShadowMap:",F,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;o.copy(H.mapSize);const $=H.getFrameExtents();o.multiply($),c.copy(H.mapSize),(o.x>g||o.y>g)&&(o.x>g&&(c.x=Math.floor(g/$.x),o.x=c.x*$.x,H.mapSize.x=c.x),o.y>g&&(c.y=Math.floor(g/$.y),o.y=c.y*$.y,H.mapSize.y=c.y));const me=a.state.buffers.depth.getReversed();if(H.camera._reversedDepth=me,H.map===null||de===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===sl){if(F.isPointLight){rt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new ia(o.x,o.y,{format:$s,type:Pa,minFilter:bn,magFilter:bn,generateMipmaps:!1}),H.map.texture.name=F.name+".shadowMap",H.map.depthTexture=new ao(o.x,o.y,ea),H.map.depthTexture.name=F.name+".shadowMapDepth",H.map.depthTexture.format=Ia,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Bn,H.map.depthTexture.magFilter=Bn}else F.isPointLight?(H.map=new fS(o.x),H.map.depthTexture=new _E(o.x,sa)):(H.map=new ia(o.x,o.y),H.map.depthTexture=new ao(o.x,o.y,sa)),H.map.depthTexture.name=F.name+".shadowMap",H.map.depthTexture.format=Ia,this.type===Jc?(H.map.depthTexture.compareFunction=me?mp:pp,H.map.depthTexture.minFilter=bn,H.map.depthTexture.magFilter=bn):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Bn,H.map.depthTexture.magFilter=Bn);H.camera.updateProjectionMatrix()}const Se=H.map.isWebGLCubeRenderTarget?6:1;for(let U=0;U<Se;U++){if(H.map.isWebGLCubeRenderTarget)a.setRenderTarget(H.map,U),a.clear();else{U===0&&(a.setRenderTarget(H.map),a.clear());const K=H.getViewport(U);u.set(c.x*K.x,c.y*K.y,c.x*K.z,c.y*K.w),Z.viewport(u)}if(F.isPointLight){const K=H.camera,xe=H.matrix,Te=F.distance||K.far;Te!==K.far&&(K.far=Te,K.updateProjectionMatrix()),al.setFromMatrixPosition(F.matrixWorld),K.position.copy(al),fh.copy(K.position),fh.add(c2[U]),K.up.copy(u2[U]),K.lookAt(fh),K.updateMatrixWorld(),xe.makeTranslation(-al.x,-al.y,-al.z),_v.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),H._frustum.setFromProjectionMatrix(_v,K.coordinateSystem,K.reversedDepth)}else H.updateMatrices(F);r=H.getFrustum(),C(I,T,H.camera,F,this.type)}H.isPointLightShadow!==!0&&this.type===sl&&P(H,T),H.needsUpdate=!1}M=this.type,y.needsUpdate=!1,a.setRenderTarget(D,q,G)};function P(N,I){const T=e.update(w);_.defines.VSM_SAMPLES!==N.blurSamples&&(_.defines.VSM_SAMPLES=N.blurSamples,x.defines.VSM_SAMPLES=N.blurSamples,_.needsUpdate=!0,x.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new ia(o.x,o.y,{format:$s,type:Pa})),_.uniforms.shadow_pass.value=N.map.depthTexture,_.uniforms.resolution.value=N.mapSize,_.uniforms.radius.value=N.radius,a.setRenderTarget(N.mapPass),a.clear(),a.renderBufferDirect(I,null,T,_,w,null),x.uniforms.shadow_pass.value=N.mapPass.texture,x.uniforms.resolution.value=N.mapSize,x.uniforms.radius.value=N.radius,a.setRenderTarget(N.map),a.clear(),a.renderBufferDirect(I,null,T,x,w,null)}function z(N,I,T,D){let q=null;const G=T.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(G!==void 0)q=G;else if(q=T.isPointLight===!0?m:h,a.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const Z=q.uuid,de=I.uuid;let oe=p[Z];oe===void 0&&(oe={},p[Z]=oe);let Y=oe[de];Y===void 0&&(Y=q.clone(),oe[de]=Y,I.addEventListener("dispose",O)),q=Y}if(q.visible=I.visible,q.wireframe=I.wireframe,D===sl?q.side=I.shadowSide!==null?I.shadowSide:I.side:q.side=I.shadowSide!==null?I.shadowSide:v[I.side],q.alphaMap=I.alphaMap,q.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,q.map=I.map,q.clipShadows=I.clipShadows,q.clippingPlanes=I.clippingPlanes,q.clipIntersection=I.clipIntersection,q.displacementMap=I.displacementMap,q.displacementScale=I.displacementScale,q.displacementBias=I.displacementBias,q.wireframeLinewidth=I.wireframeLinewidth,q.linewidth=I.linewidth,T.isPointLight===!0&&q.isMeshDistanceMaterial===!0){const Z=a.properties.get(q);Z.light=T}return q}function C(N,I,T,D,q){if(N.visible===!1)return;if(N.layers.test(I.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&q===sl)&&(!N.frustumCulled||r.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,N.matrixWorld);const de=e.update(N),oe=N.material;if(Array.isArray(oe)){const Y=de.groups;for(let F=0,H=Y.length;F<H;F++){const $=Y[F],me=oe[$.materialIndex];if(me&&me.visible){const Se=z(N,me,D,q);N.onBeforeShadow(a,N,I,T,de,Se,$),a.renderBufferDirect(T,null,de,Se,N,$),N.onAfterShadow(a,N,I,T,de,Se,$)}}}else if(oe.visible){const Y=z(N,oe,D,q);N.onBeforeShadow(a,N,I,T,de,Y,null),a.renderBufferDirect(T,null,de,Y,N,null),N.onAfterShadow(a,N,I,T,de,Y,null)}}const Z=N.children;for(let de=0,oe=Z.length;de<oe;de++)C(Z[de],I,T,D,q)}function O(N){N.target.removeEventListener("dispose",O);for(const T in p){const D=p[T],q=N.target.uuid;q in D&&(D[q].dispose(),delete D[q])}}}function d2(a,e){function i(){let W=!1;const Re=new un;let ge=null;const we=new un(0,0,0,0);return{setMask:function(Pe){ge!==Pe&&!W&&(a.colorMask(Pe,Pe,Pe,Pe),ge=Pe)},setLocked:function(Pe){W=Pe},setClear:function(Pe,be,Xe,He,Gt){Gt===!0&&(Pe*=He,be*=He,Xe*=He),Re.set(Pe,be,Xe,He),we.equals(Re)===!1&&(a.clearColor(Pe,be,Xe,He),we.copy(Re))},reset:function(){W=!1,ge=null,we.set(-1,0,0,0)}}}function r(){let W=!1,Re=!1,ge=null,we=null,Pe=null;return{setReversed:function(be){if(Re!==be){const Xe=e.get("EXT_clip_control");be?Xe.clipControlEXT(Xe.LOWER_LEFT_EXT,Xe.ZERO_TO_ONE_EXT):Xe.clipControlEXT(Xe.LOWER_LEFT_EXT,Xe.NEGATIVE_ONE_TO_ONE_EXT),Re=be;const He=Pe;Pe=null,this.setClear(He)}},getReversed:function(){return Re},setTest:function(be){be?Ee(a.DEPTH_TEST):ze(a.DEPTH_TEST)},setMask:function(be){ge!==be&&!W&&(a.depthMask(be),ge=be)},setFunc:function(be){if(Re&&(be=Dy[be]),we!==be){switch(be){case vh:a.depthFunc(a.NEVER);break;case Sh:a.depthFunc(a.ALWAYS);break;case xh:a.depthFunc(a.LESS);break;case no:a.depthFunc(a.LEQUAL);break;case Mh:a.depthFunc(a.EQUAL);break;case yh:a.depthFunc(a.GEQUAL);break;case Eh:a.depthFunc(a.GREATER);break;case bh:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}we=be}},setLocked:function(be){W=be},setClear:function(be){Pe!==be&&(Pe=be,Re&&(be=1-be),a.clearDepth(be))},reset:function(){W=!1,ge=null,we=null,Pe=null,Re=!1}}}function o(){let W=!1,Re=null,ge=null,we=null,Pe=null,be=null,Xe=null,He=null,Gt=null;return{setTest:function(Lt){W||(Lt?Ee(a.STENCIL_TEST):ze(a.STENCIL_TEST))},setMask:function(Lt){Re!==Lt&&!W&&(a.stencilMask(Lt),Re=Lt)},setFunc:function(Lt,Wn,zn){(ge!==Lt||we!==Wn||Pe!==zn)&&(a.stencilFunc(Lt,Wn,zn),ge=Lt,we=Wn,Pe=zn)},setOp:function(Lt,Wn,zn){(be!==Lt||Xe!==Wn||He!==zn)&&(a.stencilOp(Lt,Wn,zn),be=Lt,Xe=Wn,He=zn)},setLocked:function(Lt){W=Lt},setClear:function(Lt){Gt!==Lt&&(a.clearStencil(Lt),Gt=Lt)},reset:function(){W=!1,Re=null,ge=null,we=null,Pe=null,be=null,Xe=null,He=null,Gt=null}}}const c=new i,u=new r,h=new o,m=new WeakMap,p=new WeakMap;let g={},v={},_={},x=new WeakMap,b=[],w=null,y=!1,M=null,P=null,z=null,C=null,O=null,N=null,I=null,T=new Nt(0,0,0),D=0,q=!1,G=null,Z=null,de=null,oe=null,Y=null;const F=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,$=0;const me=a.getParameter(a.VERSION);me.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(me)[1]),H=$>=1):me.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(me)[1]),H=$>=2);let Se=null,U={};const K=a.getParameter(a.SCISSOR_BOX),xe=a.getParameter(a.VIEWPORT),Te=new un().fromArray(K),Ue=new un().fromArray(xe);function ie(W,Re,ge,we){const Pe=new Uint8Array(4),be=a.createTexture();a.bindTexture(W,be),a.texParameteri(W,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(W,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let Xe=0;Xe<ge;Xe++)W===a.TEXTURE_3D||W===a.TEXTURE_2D_ARRAY?a.texImage3D(Re,0,a.RGBA,1,1,we,0,a.RGBA,a.UNSIGNED_BYTE,Pe):a.texImage2D(Re+Xe,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,Pe);return be}const ye={};ye[a.TEXTURE_2D]=ie(a.TEXTURE_2D,a.TEXTURE_2D,1),ye[a.TEXTURE_CUBE_MAP]=ie(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),ye[a.TEXTURE_2D_ARRAY]=ie(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1),ye[a.TEXTURE_3D]=ie(a.TEXTURE_3D,a.TEXTURE_3D,1,1),c.setClear(0,0,0,1),u.setClear(1),h.setClear(0),Ee(a.DEPTH_TEST),u.setFunc(no),ot(!1),mt(v_),Ee(a.CULL_FACE),Ye(La);function Ee(W){g[W]!==!0&&(a.enable(W),g[W]=!0)}function ze(W){g[W]!==!1&&(a.disable(W),g[W]=!1)}function it(W,Re){return _[W]!==Re?(a.bindFramebuffer(W,Re),_[W]=Re,W===a.DRAW_FRAMEBUFFER&&(_[a.FRAMEBUFFER]=Re),W===a.FRAMEBUFFER&&(_[a.DRAW_FRAMEBUFFER]=Re),!0):!1}function Je(W,Re){let ge=b,we=!1;if(W){ge=x.get(Re),ge===void 0&&(ge=[],x.set(Re,ge));const Pe=W.textures;if(ge.length!==Pe.length||ge[0]!==a.COLOR_ATTACHMENT0){for(let be=0,Xe=Pe.length;be<Xe;be++)ge[be]=a.COLOR_ATTACHMENT0+be;ge.length=Pe.length,we=!0}}else ge[0]!==a.BACK&&(ge[0]=a.BACK,we=!0);we&&a.drawBuffers(ge)}function Zt(W){return w!==W?(a.useProgram(W),w=W,!0):!1}const ut={[Zs]:a.FUNC_ADD,[$M]:a.FUNC_SUBTRACT,[ey]:a.FUNC_REVERSE_SUBTRACT};ut[ty]=a.MIN,ut[ny]=a.MAX;const vt={[iy]:a.ZERO,[ay]:a.ONE,[sy]:a.SRC_COLOR,[gh]:a.SRC_ALPHA,[fy]:a.SRC_ALPHA_SATURATE,[cy]:a.DST_COLOR,[oy]:a.DST_ALPHA,[ry]:a.ONE_MINUS_SRC_COLOR,[_h]:a.ONE_MINUS_SRC_ALPHA,[uy]:a.ONE_MINUS_DST_COLOR,[ly]:a.ONE_MINUS_DST_ALPHA,[dy]:a.CONSTANT_COLOR,[hy]:a.ONE_MINUS_CONSTANT_COLOR,[py]:a.CONSTANT_ALPHA,[my]:a.ONE_MINUS_CONSTANT_ALPHA};function Ye(W,Re,ge,we,Pe,be,Xe,He,Gt,Lt){if(W===La){y===!0&&(ze(a.BLEND),y=!1);return}if(y===!1&&(Ee(a.BLEND),y=!0),W!==JM){if(W!==M||Lt!==q){if((P!==Zs||O!==Zs)&&(a.blendEquation(a.FUNC_ADD),P=Zs,O=Zs),Lt)switch(W){case Qr:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case mh:a.blendFunc(a.ONE,a.ONE);break;case S_:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case x_:a.blendFuncSeparate(a.DST_COLOR,a.ONE_MINUS_SRC_ALPHA,a.ZERO,a.ONE);break;default:Ut("WebGLState: Invalid blending: ",W);break}else switch(W){case Qr:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case mh:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE,a.ONE,a.ONE);break;case S_:Ut("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case x_:Ut("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ut("WebGLState: Invalid blending: ",W);break}z=null,C=null,N=null,I=null,T.set(0,0,0),D=0,M=W,q=Lt}return}Pe=Pe||Re,be=be||ge,Xe=Xe||we,(Re!==P||Pe!==O)&&(a.blendEquationSeparate(ut[Re],ut[Pe]),P=Re,O=Pe),(ge!==z||we!==C||be!==N||Xe!==I)&&(a.blendFuncSeparate(vt[ge],vt[we],vt[be],vt[Xe]),z=ge,C=we,N=be,I=Xe),(He.equals(T)===!1||Gt!==D)&&(a.blendColor(He.r,He.g,He.b,Gt),T.copy(He),D=Gt),M=W,q=!1}function Ze(W,Re){W.side===$i?ze(a.CULL_FACE):Ee(a.CULL_FACE);let ge=W.side===ai;Re&&(ge=!ge),ot(ge),W.blending===Qr&&W.transparent===!1?Ye(La):Ye(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),u.setFunc(W.depthFunc),u.setTest(W.depthTest),u.setMask(W.depthWrite),c.setMask(W.colorWrite);const we=W.stencilWrite;h.setTest(we),we&&(h.setMask(W.stencilWriteMask),h.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),h.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),Dt(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?Ee(a.SAMPLE_ALPHA_TO_COVERAGE):ze(a.SAMPLE_ALPHA_TO_COVERAGE)}function ot(W){G!==W&&(W?a.frontFace(a.CW):a.frontFace(a.CCW),G=W)}function mt(W){W!==jM?(Ee(a.CULL_FACE),W!==Z&&(W===v_?a.cullFace(a.BACK):W===KM?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):ze(a.CULL_FACE),Z=W}function wt(W){W!==de&&(H&&a.lineWidth(W),de=W)}function Dt(W,Re,ge){W?(Ee(a.POLYGON_OFFSET_FILL),(oe!==Re||Y!==ge)&&(oe=Re,Y=ge,u.getReversed()&&(Re=-Re),a.polygonOffset(Re,ge))):ze(a.POLYGON_OFFSET_FILL)}function ft(W){W?Ee(a.SCISSOR_TEST):ze(a.SCISSOR_TEST)}function _t(W){W===void 0&&(W=a.TEXTURE0+F-1),Se!==W&&(a.activeTexture(W),Se=W)}function X(W,Re,ge){ge===void 0&&(Se===null?ge=a.TEXTURE0+F-1:ge=Se);let we=U[ge];we===void 0&&(we={type:void 0,texture:void 0},U[ge]=we),(we.type!==W||we.texture!==Re)&&(Se!==ge&&(a.activeTexture(ge),Se=ge),a.bindTexture(W,Re||ye[W]),we.type=W,we.texture=Re)}function Mt(){const W=U[Se];W!==void 0&&W.type!==void 0&&(a.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function St(){try{a.compressedTexImage2D(...arguments)}catch(W){Ut("WebGLState:",W)}}function L(){try{a.compressedTexImage3D(...arguments)}catch(W){Ut("WebGLState:",W)}}function E(){try{a.texSubImage2D(...arguments)}catch(W){Ut("WebGLState:",W)}}function J(){try{a.texSubImage3D(...arguments)}catch(W){Ut("WebGLState:",W)}}function te(){try{a.compressedTexSubImage2D(...arguments)}catch(W){Ut("WebGLState:",W)}}function fe(){try{a.compressedTexSubImage3D(...arguments)}catch(W){Ut("WebGLState:",W)}}function Ce(){try{a.texStorage2D(...arguments)}catch(W){Ut("WebGLState:",W)}}function De(){try{a.texStorage3D(...arguments)}catch(W){Ut("WebGLState:",W)}}function he(){try{a.texImage2D(...arguments)}catch(W){Ut("WebGLState:",W)}}function pe(){try{a.texImage3D(...arguments)}catch(W){Ut("WebGLState:",W)}}function Ae(W){return v[W]!==void 0?v[W]:a.getParameter(W)}function Be(W,Re){v[W]!==Re&&(a.pixelStorei(W,Re),v[W]=Re)}function Ne(W){Te.equals(W)===!1&&(a.scissor(W.x,W.y,W.z,W.w),Te.copy(W))}function Le(W){Ue.equals(W)===!1&&(a.viewport(W.x,W.y,W.z,W.w),Ue.copy(W))}function $e(W,Re){let ge=p.get(Re);ge===void 0&&(ge=new WeakMap,p.set(Re,ge));let we=ge.get(W);we===void 0&&(we=a.getUniformBlockIndex(Re,W.name),ge.set(W,we))}function je(W,Re){const we=p.get(Re).get(W);m.get(Re)!==we&&(a.uniformBlockBinding(Re,we,W.__bindingPointIndex),m.set(Re,we))}function st(){a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.DEPTH_TEST),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SCISSOR_TEST),a.disable(a.STENCIL_TEST),a.disable(a.SAMPLE_ALPHA_TO_COVERAGE),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ONE,a.ZERO),a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO),a.blendColor(0,0,0,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(a.LESS),u.setReversed(!1),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(a.ALWAYS,0,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.clearStencil(0),a.cullFace(a.BACK),a.frontFace(a.CCW),a.polygonOffset(0,0),a.activeTexture(a.TEXTURE0),a.bindFramebuffer(a.FRAMEBUFFER,null),a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,null),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),a.pixelStorei(a.PACK_ALIGNMENT,4),a.pixelStorei(a.UNPACK_ALIGNMENT,4),a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,!1),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,a.BROWSER_DEFAULT_WEBGL),a.pixelStorei(a.PACK_ROW_LENGTH,0),a.pixelStorei(a.PACK_SKIP_PIXELS,0),a.pixelStorei(a.PACK_SKIP_ROWS,0),a.pixelStorei(a.UNPACK_ROW_LENGTH,0),a.pixelStorei(a.UNPACK_IMAGE_HEIGHT,0),a.pixelStorei(a.UNPACK_SKIP_PIXELS,0),a.pixelStorei(a.UNPACK_SKIP_ROWS,0),a.pixelStorei(a.UNPACK_SKIP_IMAGES,0),g={},v={},Se=null,U={},_={},x=new WeakMap,b=[],w=null,y=!1,M=null,P=null,z=null,C=null,O=null,N=null,I=null,T=new Nt(0,0,0),D=0,q=!1,G=null,Z=null,de=null,oe=null,Y=null,Te.set(0,0,a.canvas.width,a.canvas.height),Ue.set(0,0,a.canvas.width,a.canvas.height),c.reset(),u.reset(),h.reset()}return{buffers:{color:c,depth:u,stencil:h},enable:Ee,disable:ze,bindFramebuffer:it,drawBuffers:Je,useProgram:Zt,setBlending:Ye,setMaterial:Ze,setFlipSided:ot,setCullFace:mt,setLineWidth:wt,setPolygonOffset:Dt,setScissorTest:ft,activeTexture:_t,bindTexture:X,unbindTexture:Mt,compressedTexImage2D:St,compressedTexImage3D:L,texImage2D:he,texImage3D:pe,pixelStorei:Be,getParameter:Ae,updateUBOMapping:$e,uniformBlockBinding:je,texStorage2D:Ce,texStorage3D:De,texSubImage2D:E,texSubImage3D:J,compressedTexSubImage2D:te,compressedTexSubImage3D:fe,scissor:Ne,viewport:Le,reset:st}}function h2(a,e,i,r,o,c,u){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Bt,g=new WeakMap,v=new Set;let _;const x=new WeakMap;let b=!1;try{b=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(L,E){return b?new OffscreenCanvas(L,E):cu("canvas")}function y(L,E,J){let te=1;const fe=St(L);if((fe.width>J||fe.height>J)&&(te=J/Math.max(fe.width,fe.height)),te<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const Ce=Math.floor(te*fe.width),De=Math.floor(te*fe.height);_===void 0&&(_=w(Ce,De));const he=E?w(Ce,De):_;return he.width=Ce,he.height=De,he.getContext("2d").drawImage(L,0,0,Ce,De),rt("WebGLRenderer: Texture has been resized from ("+fe.width+"x"+fe.height+") to ("+Ce+"x"+De+")."),he}else return"data"in L&&rt("WebGLRenderer: Image in DataTexture is too big ("+fe.width+"x"+fe.height+")."),L;return L}function M(L){return L.generateMipmaps}function P(L){a.generateMipmap(L)}function z(L){return L.isWebGLCubeRenderTarget?a.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?a.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?a.TEXTURE_2D_ARRAY:a.TEXTURE_2D}function C(L,E,J,te,fe,Ce=!1){if(L!==null){if(a[L]!==void 0)return a[L];rt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let De;te&&(De=e.get("EXT_texture_norm16"),De||rt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let he=E;if(E===a.RED&&(J===a.FLOAT&&(he=a.R32F),J===a.HALF_FLOAT&&(he=a.R16F),J===a.UNSIGNED_BYTE&&(he=a.R8),J===a.UNSIGNED_SHORT&&De&&(he=De.R16_EXT),J===a.SHORT&&De&&(he=De.R16_SNORM_EXT)),E===a.RED_INTEGER&&(J===a.UNSIGNED_BYTE&&(he=a.R8UI),J===a.UNSIGNED_SHORT&&(he=a.R16UI),J===a.UNSIGNED_INT&&(he=a.R32UI),J===a.BYTE&&(he=a.R8I),J===a.SHORT&&(he=a.R16I),J===a.INT&&(he=a.R32I)),E===a.RG&&(J===a.FLOAT&&(he=a.RG32F),J===a.HALF_FLOAT&&(he=a.RG16F),J===a.UNSIGNED_BYTE&&(he=a.RG8),J===a.UNSIGNED_SHORT&&De&&(he=De.RG16_EXT),J===a.SHORT&&De&&(he=De.RG16_SNORM_EXT)),E===a.RG_INTEGER&&(J===a.UNSIGNED_BYTE&&(he=a.RG8UI),J===a.UNSIGNED_SHORT&&(he=a.RG16UI),J===a.UNSIGNED_INT&&(he=a.RG32UI),J===a.BYTE&&(he=a.RG8I),J===a.SHORT&&(he=a.RG16I),J===a.INT&&(he=a.RG32I)),E===a.RGB_INTEGER&&(J===a.UNSIGNED_BYTE&&(he=a.RGB8UI),J===a.UNSIGNED_SHORT&&(he=a.RGB16UI),J===a.UNSIGNED_INT&&(he=a.RGB32UI),J===a.BYTE&&(he=a.RGB8I),J===a.SHORT&&(he=a.RGB16I),J===a.INT&&(he=a.RGB32I)),E===a.RGBA_INTEGER&&(J===a.UNSIGNED_BYTE&&(he=a.RGBA8UI),J===a.UNSIGNED_SHORT&&(he=a.RGBA16UI),J===a.UNSIGNED_INT&&(he=a.RGBA32UI),J===a.BYTE&&(he=a.RGBA8I),J===a.SHORT&&(he=a.RGBA16I),J===a.INT&&(he=a.RGBA32I)),E===a.RGB&&(J===a.UNSIGNED_SHORT&&De&&(he=De.RGB16_EXT),J===a.SHORT&&De&&(he=De.RGB16_SNORM_EXT),J===a.UNSIGNED_INT_5_9_9_9_REV&&(he=a.RGB9_E5),J===a.UNSIGNED_INT_10F_11F_11F_REV&&(he=a.R11F_G11F_B10F)),E===a.RGBA){const pe=Ce?ou:Ct.getTransfer(fe);J===a.FLOAT&&(he=a.RGBA32F),J===a.HALF_FLOAT&&(he=a.RGBA16F),J===a.UNSIGNED_BYTE&&(he=pe===Yt?a.SRGB8_ALPHA8:a.RGBA8),J===a.UNSIGNED_SHORT&&De&&(he=De.RGBA16_EXT),J===a.SHORT&&De&&(he=De.RGBA16_SNORM_EXT),J===a.UNSIGNED_SHORT_4_4_4_4&&(he=a.RGBA4),J===a.UNSIGNED_SHORT_5_5_5_1&&(he=a.RGB5_A1)}return(he===a.R16F||he===a.R32F||he===a.RG16F||he===a.RG32F||he===a.RGBA16F||he===a.RGBA32F)&&e.get("EXT_color_buffer_float"),he}function O(L,E){let J;return L?E===null||E===sa||E===pl?J=a.DEPTH24_STENCIL8:E===ea?J=a.DEPTH32F_STENCIL8:E===hl&&(J=a.DEPTH24_STENCIL8,rt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===sa||E===pl?J=a.DEPTH_COMPONENT24:E===ea?J=a.DEPTH_COMPONENT32F:E===hl&&(J=a.DEPTH_COMPONENT16),J}function N(L,E){return M(L)===!0||L.isFramebufferTexture&&L.minFilter!==Bn&&L.minFilter!==bn?Math.log2(Math.max(E.width,E.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?E.mipmaps.length:1}function I(L){const E=L.target;E.removeEventListener("dispose",I),D(E),E.isVideoTexture&&g.delete(E),E.isHTMLTexture&&v.delete(E)}function T(L){const E=L.target;E.removeEventListener("dispose",T),G(E)}function D(L){const E=r.get(L);if(E.__webglInit===void 0)return;const J=L.source,te=x.get(J);if(te){const fe=te[E.__cacheKey];fe.usedTimes--,fe.usedTimes===0&&q(L),Object.keys(te).length===0&&x.delete(J)}r.remove(L)}function q(L){const E=r.get(L);a.deleteTexture(E.__webglTexture);const J=L.source,te=x.get(J);delete te[E.__cacheKey],u.memory.textures--}function G(L){const E=r.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),r.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(E.__webglFramebuffer[te]))for(let fe=0;fe<E.__webglFramebuffer[te].length;fe++)a.deleteFramebuffer(E.__webglFramebuffer[te][fe]);else a.deleteFramebuffer(E.__webglFramebuffer[te]);E.__webglDepthbuffer&&a.deleteRenderbuffer(E.__webglDepthbuffer[te])}else{if(Array.isArray(E.__webglFramebuffer))for(let te=0;te<E.__webglFramebuffer.length;te++)a.deleteFramebuffer(E.__webglFramebuffer[te]);else a.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&a.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&a.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let te=0;te<E.__webglColorRenderbuffer.length;te++)E.__webglColorRenderbuffer[te]&&a.deleteRenderbuffer(E.__webglColorRenderbuffer[te]);E.__webglDepthRenderbuffer&&a.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const J=L.textures;for(let te=0,fe=J.length;te<fe;te++){const Ce=r.get(J[te]);Ce.__webglTexture&&(a.deleteTexture(Ce.__webglTexture),u.memory.textures--),r.remove(J[te])}r.remove(L)}let Z=0;function de(){Z=0}function oe(){return Z}function Y(L){Z=L}function F(){const L=Z;return L>=o.maxTextures&&rt("WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+o.maxTextures),Z+=1,L}function H(L){const E=[];return E.push(L.wrapS),E.push(L.wrapT),E.push(L.wrapR||0),E.push(L.magFilter),E.push(L.minFilter),E.push(L.anisotropy),E.push(L.internalFormat),E.push(L.format),E.push(L.type),E.push(L.generateMipmaps),E.push(L.premultiplyAlpha),E.push(L.flipY),E.push(L.unpackAlignment),E.push(L.colorSpace),E.join()}function $(L,E){const J=r.get(L);if(L.isVideoTexture&&X(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&J.__version!==L.version){const te=L.image;if(te===null)rt("WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)rt("WebGLRenderer: Texture marked for update but image is incomplete");else{ze(J,L,E);return}}else L.isExternalTexture&&(J.__webglTexture=L.sourceTexture?L.sourceTexture:null);i.bindTexture(a.TEXTURE_2D,J.__webglTexture,a.TEXTURE0+E)}function me(L,E){const J=r.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&J.__version!==L.version){ze(J,L,E);return}else L.isExternalTexture&&(J.__webglTexture=L.sourceTexture?L.sourceTexture:null);i.bindTexture(a.TEXTURE_2D_ARRAY,J.__webglTexture,a.TEXTURE0+E)}function Se(L,E){const J=r.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&J.__version!==L.version){ze(J,L,E);return}i.bindTexture(a.TEXTURE_3D,J.__webglTexture,a.TEXTURE0+E)}function U(L,E){const J=r.get(L);if(L.isCubeDepthTexture!==!0&&L.version>0&&J.__version!==L.version){it(J,L,E);return}i.bindTexture(a.TEXTURE_CUBE_MAP,J.__webglTexture,a.TEXTURE0+E)}const K={[Th]:a.REPEAT,[Gi]:a.CLAMP_TO_EDGE,[Ah]:a.MIRRORED_REPEAT},xe={[Bn]:a.NEAREST,[vy]:a.NEAREST_MIPMAP_NEAREST,[wc]:a.NEAREST_MIPMAP_LINEAR,[bn]:a.LINEAR,[Od]:a.LINEAR_MIPMAP_NEAREST,[xs]:a.LINEAR_MIPMAP_LINEAR},Te={[My]:a.NEVER,[Ay]:a.ALWAYS,[yy]:a.LESS,[pp]:a.LEQUAL,[Ey]:a.EQUAL,[mp]:a.GEQUAL,[by]:a.GREATER,[Ty]:a.NOTEQUAL};function Ue(L,E){if(E.type===ea&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===bn||E.magFilter===Od||E.magFilter===wc||E.magFilter===xs||E.minFilter===bn||E.minFilter===Od||E.minFilter===wc||E.minFilter===xs)&&rt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),a.texParameteri(L,a.TEXTURE_WRAP_S,K[E.wrapS]),a.texParameteri(L,a.TEXTURE_WRAP_T,K[E.wrapT]),(L===a.TEXTURE_3D||L===a.TEXTURE_2D_ARRAY)&&a.texParameteri(L,a.TEXTURE_WRAP_R,K[E.wrapR]),a.texParameteri(L,a.TEXTURE_MAG_FILTER,xe[E.magFilter]),a.texParameteri(L,a.TEXTURE_MIN_FILTER,xe[E.minFilter]),E.compareFunction&&(a.texParameteri(L,a.TEXTURE_COMPARE_MODE,a.COMPARE_REF_TO_TEXTURE),a.texParameteri(L,a.TEXTURE_COMPARE_FUNC,Te[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Bn||E.minFilter!==wc&&E.minFilter!==xs||E.type===ea&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const J=e.get("EXT_texture_filter_anisotropic");a.texParameterf(L,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,o.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function ie(L,E){let J=!1;L.__webglInit===void 0&&(L.__webglInit=!0,E.addEventListener("dispose",I));const te=E.source;let fe=x.get(te);fe===void 0&&(fe={},x.set(te,fe));const Ce=H(E);if(Ce!==L.__cacheKey){fe[Ce]===void 0&&(fe[Ce]={texture:a.createTexture(),usedTimes:0},u.memory.textures++,J=!0),fe[Ce].usedTimes++;const De=fe[L.__cacheKey];De!==void 0&&(fe[L.__cacheKey].usedTimes--,De.usedTimes===0&&q(E)),L.__cacheKey=Ce,L.__webglTexture=fe[Ce].texture}return J}function ye(L,E,J){return Math.floor(Math.floor(L/J)/E)}function Ee(L,E,J,te){const Ce=L.updateRanges;if(Ce.length===0)i.texSubImage2D(a.TEXTURE_2D,0,0,0,E.width,E.height,J,te,E.data);else{Ce.sort((Be,Ne)=>Be.start-Ne.start);let De=0;for(let Be=1;Be<Ce.length;Be++){const Ne=Ce[De],Le=Ce[Be],$e=Ne.start+Ne.count,je=ye(Le.start,E.width,4),st=ye(Ne.start,E.width,4);Le.start<=$e+1&&je===st&&ye(Le.start+Le.count-1,E.width,4)===je?Ne.count=Math.max(Ne.count,Le.start+Le.count-Ne.start):(++De,Ce[De]=Le)}Ce.length=De+1;const he=i.getParameter(a.UNPACK_ROW_LENGTH),pe=i.getParameter(a.UNPACK_SKIP_PIXELS),Ae=i.getParameter(a.UNPACK_SKIP_ROWS);i.pixelStorei(a.UNPACK_ROW_LENGTH,E.width);for(let Be=0,Ne=Ce.length;Be<Ne;Be++){const Le=Ce[Be],$e=Math.floor(Le.start/4),je=Math.ceil(Le.count/4),st=$e%E.width,W=Math.floor($e/E.width),Re=je,ge=1;i.pixelStorei(a.UNPACK_SKIP_PIXELS,st),i.pixelStorei(a.UNPACK_SKIP_ROWS,W),i.texSubImage2D(a.TEXTURE_2D,0,st,W,Re,ge,J,te,E.data)}L.clearUpdateRanges(),i.pixelStorei(a.UNPACK_ROW_LENGTH,he),i.pixelStorei(a.UNPACK_SKIP_PIXELS,pe),i.pixelStorei(a.UNPACK_SKIP_ROWS,Ae)}}function ze(L,E,J){let te=a.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(te=a.TEXTURE_2D_ARRAY),E.isData3DTexture&&(te=a.TEXTURE_3D);const fe=ie(L,E),Ce=E.source;i.bindTexture(te,L.__webglTexture,a.TEXTURE0+J);const De=r.get(Ce);if(Ce.version!==De.__version||fe===!0){if(i.activeTexture(a.TEXTURE0+J),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){const ge=Ct.getPrimaries(Ct.workingColorSpace),we=E.colorSpace===Ss?null:Ct.getPrimaries(E.colorSpace),Pe=E.colorSpace===Ss||ge===we?a.NONE:a.BROWSER_DEFAULT_WEBGL;i.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe)}i.pixelStorei(a.UNPACK_ALIGNMENT,E.unpackAlignment);let pe=y(E.image,!1,o.maxTextureSize);pe=Mt(E,pe);const Ae=c.convert(E.format,E.colorSpace),Be=c.convert(E.type);let Ne=C(E.internalFormat,Ae,Be,E.normalized,E.colorSpace,E.isVideoTexture);Ue(te,E);let Le;const $e=E.mipmaps,je=E.isVideoTexture!==!0,st=De.__version===void 0||fe===!0,W=Ce.dataReady,Re=N(E,pe);if(E.isDepthTexture)Ne=O(E.format===Ks,E.type),st&&(je?i.texStorage2D(a.TEXTURE_2D,1,Ne,pe.width,pe.height):i.texImage2D(a.TEXTURE_2D,0,Ne,pe.width,pe.height,0,Ae,Be,null));else if(E.isDataTexture)if($e.length>0){je&&st&&i.texStorage2D(a.TEXTURE_2D,Re,Ne,$e[0].width,$e[0].height);for(let ge=0,we=$e.length;ge<we;ge++)Le=$e[ge],je?W&&i.texSubImage2D(a.TEXTURE_2D,ge,0,0,Le.width,Le.height,Ae,Be,Le.data):i.texImage2D(a.TEXTURE_2D,ge,Ne,Le.width,Le.height,0,Ae,Be,Le.data);E.generateMipmaps=!1}else je?(st&&i.texStorage2D(a.TEXTURE_2D,Re,Ne,pe.width,pe.height),W&&Ee(E,pe,Ae,Be)):i.texImage2D(a.TEXTURE_2D,0,Ne,pe.width,pe.height,0,Ae,Be,pe.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){je&&st&&i.texStorage3D(a.TEXTURE_2D_ARRAY,Re,Ne,$e[0].width,$e[0].height,pe.depth);for(let ge=0,we=$e.length;ge<we;ge++)if(Le=$e[ge],E.format!==Vi)if(Ae!==null)if(je){if(W)if(E.layerUpdates.size>0){const Pe=Z_(Le.width,Le.height,E.format,E.type);for(const be of E.layerUpdates){const Xe=Le.data.subarray(be*Pe/Le.data.BYTES_PER_ELEMENT,(be+1)*Pe/Le.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,ge,0,0,be,Le.width,Le.height,1,Ae,Xe)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,ge,0,0,0,Le.width,Le.height,pe.depth,Ae,Le.data)}else i.compressedTexImage3D(a.TEXTURE_2D_ARRAY,ge,Ne,Le.width,Le.height,pe.depth,0,Le.data,0,0);else rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else je?W&&i.texSubImage3D(a.TEXTURE_2D_ARRAY,ge,0,0,0,Le.width,Le.height,pe.depth,Ae,Be,Le.data):i.texImage3D(a.TEXTURE_2D_ARRAY,ge,Ne,Le.width,Le.height,pe.depth,0,Ae,Be,Le.data)}else{je&&st&&i.texStorage2D(a.TEXTURE_2D,Re,Ne,$e[0].width,$e[0].height);for(let ge=0,we=$e.length;ge<we;ge++)Le=$e[ge],E.format!==Vi?Ae!==null?je?W&&i.compressedTexSubImage2D(a.TEXTURE_2D,ge,0,0,Le.width,Le.height,Ae,Le.data):i.compressedTexImage2D(a.TEXTURE_2D,ge,Ne,Le.width,Le.height,0,Le.data):rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):je?W&&i.texSubImage2D(a.TEXTURE_2D,ge,0,0,Le.width,Le.height,Ae,Be,Le.data):i.texImage2D(a.TEXTURE_2D,ge,Ne,Le.width,Le.height,0,Ae,Be,Le.data)}else if(E.isDataArrayTexture)if(je){if(st&&i.texStorage3D(a.TEXTURE_2D_ARRAY,Re,Ne,pe.width,pe.height,pe.depth),W)if(E.layerUpdates.size>0){const ge=Z_(pe.width,pe.height,E.format,E.type);for(const we of E.layerUpdates){const Pe=pe.data.subarray(we*ge/pe.data.BYTES_PER_ELEMENT,(we+1)*ge/pe.data.BYTES_PER_ELEMENT);i.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,we,pe.width,pe.height,1,Ae,Be,Pe)}E.clearLayerUpdates()}else i.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,pe.width,pe.height,pe.depth,Ae,Be,pe.data)}else i.texImage3D(a.TEXTURE_2D_ARRAY,0,Ne,pe.width,pe.height,pe.depth,0,Ae,Be,pe.data);else if(E.isData3DTexture)je?(st&&i.texStorage3D(a.TEXTURE_3D,Re,Ne,pe.width,pe.height,pe.depth),W&&i.texSubImage3D(a.TEXTURE_3D,0,0,0,0,pe.width,pe.height,pe.depth,Ae,Be,pe.data)):i.texImage3D(a.TEXTURE_3D,0,Ne,pe.width,pe.height,pe.depth,0,Ae,Be,pe.data);else if(E.isFramebufferTexture){if(st)if(je)i.texStorage2D(a.TEXTURE_2D,Re,Ne,pe.width,pe.height);else{let ge=pe.width,we=pe.height;for(let Pe=0;Pe<Re;Pe++)i.texImage2D(a.TEXTURE_2D,Pe,Ne,ge,we,0,Ae,Be,null),ge>>=1,we>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in a){const ge=a.canvas;if(ge.hasAttribute("layoutsubtree")||ge.setAttribute("layoutsubtree","true"),pe.parentNode!==ge){ge.appendChild(pe),v.add(E),ge.onpaint=we=>{const Pe=we.changedElements;for(const be of v)Pe.includes(be.image)&&(be.needsUpdate=!0)},ge.requestPaint();return}if(a.texElementImage2D.length===3)a.texElementImage2D(a.TEXTURE_2D,a.RGBA8,pe);else{const Pe=a.RGBA,be=a.RGBA,Xe=a.UNSIGNED_BYTE;a.texElementImage2D(a.TEXTURE_2D,0,Pe,be,Xe,pe)}a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MIN_FILTER,a.LINEAR),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE)}}else if($e.length>0){if(je&&st){const ge=St($e[0]);i.texStorage2D(a.TEXTURE_2D,Re,Ne,ge.width,ge.height)}for(let ge=0,we=$e.length;ge<we;ge++)Le=$e[ge],je?W&&i.texSubImage2D(a.TEXTURE_2D,ge,0,0,Ae,Be,Le):i.texImage2D(a.TEXTURE_2D,ge,Ne,Ae,Be,Le);E.generateMipmaps=!1}else if(je){if(st){const ge=St(pe);i.texStorage2D(a.TEXTURE_2D,Re,Ne,ge.width,ge.height)}W&&i.texSubImage2D(a.TEXTURE_2D,0,0,0,Ae,Be,pe)}else i.texImage2D(a.TEXTURE_2D,0,Ne,Ae,Be,pe);M(E)&&P(te),De.__version=Ce.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function it(L,E,J){if(E.image.length!==6)return;const te=ie(L,E),fe=E.source;i.bindTexture(a.TEXTURE_CUBE_MAP,L.__webglTexture,a.TEXTURE0+J);const Ce=r.get(fe);if(fe.version!==Ce.__version||te===!0){i.activeTexture(a.TEXTURE0+J);const De=Ct.getPrimaries(Ct.workingColorSpace),he=E.colorSpace===Ss?null:Ct.getPrimaries(E.colorSpace),pe=E.colorSpace===Ss||De===he?a.NONE:a.BROWSER_DEFAULT_WEBGL;i.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(a.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);const Ae=E.isCompressedTexture||E.image[0].isCompressedTexture,Be=E.image[0]&&E.image[0].isDataTexture,Ne=[];for(let be=0;be<6;be++)!Ae&&!Be?Ne[be]=y(E.image[be],!0,o.maxCubemapSize):Ne[be]=Be?E.image[be].image:E.image[be],Ne[be]=Mt(E,Ne[be]);const Le=Ne[0],$e=c.convert(E.format,E.colorSpace),je=c.convert(E.type),st=C(E.internalFormat,$e,je,E.normalized,E.colorSpace),W=E.isVideoTexture!==!0,Re=Ce.__version===void 0||te===!0,ge=fe.dataReady;let we=N(E,Le);Ue(a.TEXTURE_CUBE_MAP,E);let Pe;if(Ae){W&&Re&&i.texStorage2D(a.TEXTURE_CUBE_MAP,we,st,Le.width,Le.height);for(let be=0;be<6;be++){Pe=Ne[be].mipmaps;for(let Xe=0;Xe<Pe.length;Xe++){const He=Pe[Xe];E.format!==Vi?$e!==null?W?ge&&i.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+be,Xe,0,0,He.width,He.height,$e,He.data):i.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+be,Xe,st,He.width,He.height,0,He.data):rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?ge&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+be,Xe,0,0,He.width,He.height,$e,je,He.data):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+be,Xe,st,He.width,He.height,0,$e,je,He.data)}}}else{if(Pe=E.mipmaps,W&&Re){Pe.length>0&&we++;const be=St(Ne[0]);i.texStorage2D(a.TEXTURE_CUBE_MAP,we,st,be.width,be.height)}for(let be=0;be<6;be++)if(Be){W?ge&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,Ne[be].width,Ne[be].height,$e,je,Ne[be].data):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,st,Ne[be].width,Ne[be].height,0,$e,je,Ne[be].data);for(let Xe=0;Xe<Pe.length;Xe++){const Gt=Pe[Xe].image[be].image;W?ge&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+be,Xe+1,0,0,Gt.width,Gt.height,$e,je,Gt.data):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+be,Xe+1,st,Gt.width,Gt.height,0,$e,je,Gt.data)}}else{W?ge&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,$e,je,Ne[be]):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,st,$e,je,Ne[be]);for(let Xe=0;Xe<Pe.length;Xe++){const He=Pe[Xe];W?ge&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+be,Xe+1,0,0,$e,je,He.image[be]):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+be,Xe+1,st,$e,je,He.image[be])}}}M(E)&&P(a.TEXTURE_CUBE_MAP),Ce.__version=fe.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function Je(L,E,J,te,fe,Ce){const De=c.convert(J.format,J.colorSpace),he=c.convert(J.type),pe=C(J.internalFormat,De,he,J.normalized,J.colorSpace),Ae=r.get(E),Be=r.get(J);if(Be.__renderTarget=E,!Ae.__hasExternalTextures){const Ne=Math.max(1,E.width>>Ce),Le=Math.max(1,E.height>>Ce);fe===a.TEXTURE_3D||fe===a.TEXTURE_2D_ARRAY?i.texImage3D(fe,Ce,pe,Ne,Le,E.depth,0,De,he,null):i.texImage2D(fe,Ce,pe,Ne,Le,0,De,he,null)}i.bindFramebuffer(a.FRAMEBUFFER,L),_t(E)?h.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,te,fe,Be.__webglTexture,0,ft(E)):(fe===a.TEXTURE_2D||fe>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&fe<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&a.framebufferTexture2D(a.FRAMEBUFFER,te,fe,Be.__webglTexture,Ce),i.bindFramebuffer(a.FRAMEBUFFER,null)}function Zt(L,E,J){if(a.bindRenderbuffer(a.RENDERBUFFER,L),E.depthBuffer){const te=E.depthTexture,fe=te&&te.isDepthTexture?te.type:null,Ce=O(E.stencilBuffer,fe),De=E.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;_t(E)?h.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,ft(E),Ce,E.width,E.height):J?a.renderbufferStorageMultisample(a.RENDERBUFFER,ft(E),Ce,E.width,E.height):a.renderbufferStorage(a.RENDERBUFFER,Ce,E.width,E.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,De,a.RENDERBUFFER,L)}else{const te=E.textures;for(let fe=0;fe<te.length;fe++){const Ce=te[fe],De=c.convert(Ce.format,Ce.colorSpace),he=c.convert(Ce.type),pe=C(Ce.internalFormat,De,he,Ce.normalized,Ce.colorSpace);_t(E)?h.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,ft(E),pe,E.width,E.height):J?a.renderbufferStorageMultisample(a.RENDERBUFFER,ft(E),pe,E.width,E.height):a.renderbufferStorage(a.RENDERBUFFER,pe,E.width,E.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function ut(L,E,J){const te=E.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(a.FRAMEBUFFER,L),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const fe=r.get(E.depthTexture);if(fe.__renderTarget=E,(!fe.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),te){if(fe.__webglInit===void 0&&(fe.__webglInit=!0,E.depthTexture.addEventListener("dispose",I)),fe.__webglTexture===void 0){fe.__webglTexture=a.createTexture(),i.bindTexture(a.TEXTURE_CUBE_MAP,fe.__webglTexture),Ue(a.TEXTURE_CUBE_MAP,E.depthTexture);const Ae=c.convert(E.depthTexture.format),Be=c.convert(E.depthTexture.type);let Ne;E.depthTexture.format===Ia?Ne=a.DEPTH_COMPONENT24:E.depthTexture.format===Ks&&(Ne=a.DEPTH24_STENCIL8);for(let Le=0;Le<6;Le++)a.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0,Ne,E.width,E.height,0,Ae,Be,null)}}else $(E.depthTexture,0);const Ce=fe.__webglTexture,De=ft(E),he=te?a.TEXTURE_CUBE_MAP_POSITIVE_X+J:a.TEXTURE_2D,pe=E.depthTexture.format===Ks?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;if(E.depthTexture.format===Ia)_t(E)?h.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,pe,he,Ce,0,De):a.framebufferTexture2D(a.FRAMEBUFFER,pe,he,Ce,0);else if(E.depthTexture.format===Ks)_t(E)?h.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,pe,he,Ce,0,De):a.framebufferTexture2D(a.FRAMEBUFFER,pe,he,Ce,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function vt(L){const E=r.get(L),J=L.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==L.depthTexture){const te=L.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),te){const fe=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,te.removeEventListener("dispose",fe)};te.addEventListener("dispose",fe),E.__depthDisposeCallback=fe}E.__boundDepthTexture=te}if(L.depthTexture&&!E.__autoAllocateDepthBuffer)if(J)for(let te=0;te<6;te++)ut(E.__webglFramebuffer[te],L,te);else{const te=L.texture.mipmaps;te&&te.length>0?ut(E.__webglFramebuffer[0],L,0):ut(E.__webglFramebuffer,L,0)}else if(J){E.__webglDepthbuffer=[];for(let te=0;te<6;te++)if(i.bindFramebuffer(a.FRAMEBUFFER,E.__webglFramebuffer[te]),E.__webglDepthbuffer[te]===void 0)E.__webglDepthbuffer[te]=a.createRenderbuffer(),Zt(E.__webglDepthbuffer[te],L,!1);else{const fe=L.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Ce=E.__webglDepthbuffer[te];a.bindRenderbuffer(a.RENDERBUFFER,Ce),a.framebufferRenderbuffer(a.FRAMEBUFFER,fe,a.RENDERBUFFER,Ce)}}else{const te=L.texture.mipmaps;if(te&&te.length>0?i.bindFramebuffer(a.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(a.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=a.createRenderbuffer(),Zt(E.__webglDepthbuffer,L,!1);else{const fe=L.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Ce=E.__webglDepthbuffer;a.bindRenderbuffer(a.RENDERBUFFER,Ce),a.framebufferRenderbuffer(a.FRAMEBUFFER,fe,a.RENDERBUFFER,Ce)}}i.bindFramebuffer(a.FRAMEBUFFER,null)}function Ye(L,E,J){const te=r.get(L);E!==void 0&&Je(te.__webglFramebuffer,L,L.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,0),J!==void 0&&vt(L)}function Ze(L){const E=L.texture,J=r.get(L),te=r.get(E);L.addEventListener("dispose",T);const fe=L.textures,Ce=L.isWebGLCubeRenderTarget===!0,De=fe.length>1;if(De||(te.__webglTexture===void 0&&(te.__webglTexture=a.createTexture()),te.__version=E.version,u.memory.textures++),Ce){J.__webglFramebuffer=[];for(let he=0;he<6;he++)if(E.mipmaps&&E.mipmaps.length>0){J.__webglFramebuffer[he]=[];for(let pe=0;pe<E.mipmaps.length;pe++)J.__webglFramebuffer[he][pe]=a.createFramebuffer()}else J.__webglFramebuffer[he]=a.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){J.__webglFramebuffer=[];for(let he=0;he<E.mipmaps.length;he++)J.__webglFramebuffer[he]=a.createFramebuffer()}else J.__webglFramebuffer=a.createFramebuffer();if(De)for(let he=0,pe=fe.length;he<pe;he++){const Ae=r.get(fe[he]);Ae.__webglTexture===void 0&&(Ae.__webglTexture=a.createTexture(),u.memory.textures++)}if(L.samples>0&&_t(L)===!1){J.__webglMultisampledFramebuffer=a.createFramebuffer(),J.__webglColorRenderbuffer=[],i.bindFramebuffer(a.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let he=0;he<fe.length;he++){const pe=fe[he];J.__webglColorRenderbuffer[he]=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,J.__webglColorRenderbuffer[he]);const Ae=c.convert(pe.format,pe.colorSpace),Be=c.convert(pe.type),Ne=C(pe.internalFormat,Ae,Be,pe.normalized,pe.colorSpace,L.isXRRenderTarget===!0),Le=ft(L);a.renderbufferStorageMultisample(a.RENDERBUFFER,Le,Ne,L.width,L.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+he,a.RENDERBUFFER,J.__webglColorRenderbuffer[he])}a.bindRenderbuffer(a.RENDERBUFFER,null),L.depthBuffer&&(J.__webglDepthRenderbuffer=a.createRenderbuffer(),Zt(J.__webglDepthRenderbuffer,L,!0)),i.bindFramebuffer(a.FRAMEBUFFER,null)}}if(Ce){i.bindTexture(a.TEXTURE_CUBE_MAP,te.__webglTexture),Ue(a.TEXTURE_CUBE_MAP,E);for(let he=0;he<6;he++)if(E.mipmaps&&E.mipmaps.length>0)for(let pe=0;pe<E.mipmaps.length;pe++)Je(J.__webglFramebuffer[he][pe],L,E,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+he,pe);else Je(J.__webglFramebuffer[he],L,E,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);M(E)&&P(a.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(De){for(let he=0,pe=fe.length;he<pe;he++){const Ae=fe[he],Be=r.get(Ae);let Ne=a.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Ne=L.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),i.bindTexture(Ne,Be.__webglTexture),Ue(Ne,Ae),Je(J.__webglFramebuffer,L,Ae,a.COLOR_ATTACHMENT0+he,Ne,0),M(Ae)&&P(Ne)}i.unbindTexture()}else{let he=a.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(he=L.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),i.bindTexture(he,te.__webglTexture),Ue(he,E),E.mipmaps&&E.mipmaps.length>0)for(let pe=0;pe<E.mipmaps.length;pe++)Je(J.__webglFramebuffer[pe],L,E,a.COLOR_ATTACHMENT0,he,pe);else Je(J.__webglFramebuffer,L,E,a.COLOR_ATTACHMENT0,he,0);M(E)&&P(he),i.unbindTexture()}L.depthBuffer&&vt(L)}function ot(L){const E=L.textures;for(let J=0,te=E.length;J<te;J++){const fe=E[J];if(M(fe)){const Ce=z(L),De=r.get(fe).__webglTexture;i.bindTexture(Ce,De),P(Ce),i.unbindTexture()}}}const mt=[],wt=[];function Dt(L){if(L.samples>0){if(_t(L)===!1){const E=L.textures,J=L.width,te=L.height;let fe=a.COLOR_BUFFER_BIT;const Ce=L.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,De=r.get(L),he=E.length>1;if(he)for(let Ae=0;Ae<E.length;Ae++)i.bindFramebuffer(a.FRAMEBUFFER,De.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ae,a.RENDERBUFFER,null),i.bindFramebuffer(a.FRAMEBUFFER,De.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ae,a.TEXTURE_2D,null,0);i.bindFramebuffer(a.READ_FRAMEBUFFER,De.__webglMultisampledFramebuffer);const pe=L.texture.mipmaps;pe&&pe.length>0?i.bindFramebuffer(a.DRAW_FRAMEBUFFER,De.__webglFramebuffer[0]):i.bindFramebuffer(a.DRAW_FRAMEBUFFER,De.__webglFramebuffer);for(let Ae=0;Ae<E.length;Ae++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(fe|=a.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(fe|=a.STENCIL_BUFFER_BIT)),he){a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,De.__webglColorRenderbuffer[Ae]);const Be=r.get(E[Ae]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,Be,0)}a.blitFramebuffer(0,0,J,te,0,0,J,te,fe,a.NEAREST),m===!0&&(mt.length=0,wt.length=0,mt.push(a.COLOR_ATTACHMENT0+Ae),L.depthBuffer&&L.resolveDepthBuffer===!1&&(mt.push(Ce),wt.push(Ce),a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,wt)),a.invalidateFramebuffer(a.READ_FRAMEBUFFER,mt))}if(i.bindFramebuffer(a.READ_FRAMEBUFFER,null),i.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),he)for(let Ae=0;Ae<E.length;Ae++){i.bindFramebuffer(a.FRAMEBUFFER,De.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ae,a.RENDERBUFFER,De.__webglColorRenderbuffer[Ae]);const Be=r.get(E[Ae]).__webglTexture;i.bindFramebuffer(a.FRAMEBUFFER,De.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ae,a.TEXTURE_2D,Be,0)}i.bindFramebuffer(a.DRAW_FRAMEBUFFER,De.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&m){const E=L.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[E])}}}function ft(L){return Math.min(o.maxSamples,L.samples)}function _t(L){const E=r.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function X(L){const E=u.render.frame;g.get(L)!==E&&(g.set(L,E),L.update())}function Mt(L,E){const J=L.colorSpace,te=L.format,fe=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||J!==ru&&J!==Ss&&(Ct.getTransfer(J)===Yt?(te!==Vi||fe!==Ci)&&rt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ut("WebGLTextures: Unsupported texture color space:",J)),E}function St(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(p.width=L.naturalWidth||L.width,p.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(p.width=L.displayWidth,p.height=L.displayHeight):(p.width=L.width,p.height=L.height),p}this.allocateTextureUnit=F,this.resetTextureUnits=de,this.getTextureUnits=oe,this.setTextureUnits=Y,this.setTexture2D=$,this.setTexture2DArray=me,this.setTexture3D=Se,this.setTextureCube=U,this.rebindTextures=Ye,this.setupRenderTarget=Ze,this.updateRenderTargetMipmap=ot,this.updateMultisampleRenderTarget=Dt,this.setupDepthRenderbuffer=vt,this.setupFrameBufferTexture=Je,this.useMultisampledRTT=_t,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function p2(a,e){function i(r,o=Ss){let c;const u=Ct.getTransfer(o);if(r===Ci)return a.UNSIGNED_BYTE;if(r===cp)return a.UNSIGNED_SHORT_4_4_4_4;if(r===up)return a.UNSIGNED_SHORT_5_5_5_1;if(r===Wv)return a.UNSIGNED_INT_5_9_9_9_REV;if(r===qv)return a.UNSIGNED_INT_10F_11F_11F_REV;if(r===kv)return a.BYTE;if(r===Xv)return a.SHORT;if(r===hl)return a.UNSIGNED_SHORT;if(r===lp)return a.INT;if(r===sa)return a.UNSIGNED_INT;if(r===ea)return a.FLOAT;if(r===Pa)return a.HALF_FLOAT;if(r===Yv)return a.ALPHA;if(r===Zv)return a.RGB;if(r===Vi)return a.RGBA;if(r===Ia)return a.DEPTH_COMPONENT;if(r===Ks)return a.DEPTH_STENCIL;if(r===jv)return a.RED;if(r===fp)return a.RED_INTEGER;if(r===$s)return a.RG;if(r===dp)return a.RG_INTEGER;if(r===hp)return a.RGBA_INTEGER;if(r===$c||r===eu||r===tu||r===nu)if(u===Yt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===$c)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===eu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===tu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===nu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===$c)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===eu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===tu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===nu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Rh||r===Ch||r===wh||r===Dh)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===Rh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Ch)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===wh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Dh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Nh||r===Lh||r===Uh||r===Oh||r===Ph||r===au||r===Ih)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===Nh||r===Lh)return u===Yt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===Uh)return u===Yt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(r===Oh)return c.COMPRESSED_R11_EAC;if(r===Ph)return c.COMPRESSED_SIGNED_R11_EAC;if(r===au)return c.COMPRESSED_RG11_EAC;if(r===Ih)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===Fh||r===Bh||r===zh||r===Hh||r===Gh||r===Vh||r===kh||r===Xh||r===Wh||r===qh||r===Yh||r===Zh||r===jh||r===Kh)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===Fh)return u===Yt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Bh)return u===Yt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===zh)return u===Yt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Hh)return u===Yt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Gh)return u===Yt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Vh)return u===Yt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===kh)return u===Yt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Xh)return u===Yt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Wh)return u===Yt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===qh)return u===Yt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Yh)return u===Yt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Zh)return u===Yt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===jh)return u===Yt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Kh)return u===Yt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Qh||r===Jh||r===$h)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===Qh)return u===Yt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Jh)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===$h)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===ep||r===tp||r===su||r===np)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===ep)return c.COMPRESSED_RED_RGTC1_EXT;if(r===tp)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===su)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===np)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===pl?a.UNSIGNED_INT_24_8:a[r]!==void 0?a[r]:null}return{convert:i}}const m2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,g2=`
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

}`;class _2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const r=new sS(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new ki({vertexShader:m2,fragmentShader:g2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Di(new Qs(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class v2 extends tr{constructor(e,i){super();const r=this;let o=null,c=1,u=null,h="local-floor",m=1,p=null,g=null,v=null,_=null,x=null,b=null;const w=typeof XRWebGLBinding<"u",y=new _2,M={},P=i.getContextAttributes();let z=null,C=null;const O=[],N=[],I=new Bt;let T=null;const D=new Ri;D.viewport=new un;const q=new Ri;q.viewport=new un;const G=[D,q],Z=new CE;let de=null,oe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ie){let ye=O[ie];return ye===void 0&&(ye=new Hd,O[ie]=ye),ye.getTargetRaySpace()},this.getControllerGrip=function(ie){let ye=O[ie];return ye===void 0&&(ye=new Hd,O[ie]=ye),ye.getGripSpace()},this.getHand=function(ie){let ye=O[ie];return ye===void 0&&(ye=new Hd,O[ie]=ye),ye.getHandSpace()};function Y(ie){const ye=N.indexOf(ie.inputSource);if(ye===-1)return;const Ee=O[ye];Ee!==void 0&&(Ee.update(ie.inputSource,ie.frame,p||u),Ee.dispatchEvent({type:ie.type,data:ie.inputSource}))}function F(){o.removeEventListener("select",Y),o.removeEventListener("selectstart",Y),o.removeEventListener("selectend",Y),o.removeEventListener("squeeze",Y),o.removeEventListener("squeezestart",Y),o.removeEventListener("squeezeend",Y),o.removeEventListener("end",F),o.removeEventListener("inputsourceschange",H);for(let ie=0;ie<O.length;ie++){const ye=N[ie];ye!==null&&(N[ie]=null,O[ie].disconnect(ye))}de=null,oe=null,y.reset();for(const ie in M)delete M[ie];e.setRenderTarget(z),x=null,_=null,v=null,o=null,C=null,Ue.stop(),r.isPresenting=!1,e.setPixelRatio(T),e.setSize(I.width,I.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ie){c=ie,r.isPresenting===!0&&rt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ie){h=ie,r.isPresenting===!0&&rt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||u},this.setReferenceSpace=function(ie){p=ie},this.getBaseLayer=function(){return _!==null?_:x},this.getBinding=function(){return v===null&&w&&(v=new XRWebGLBinding(o,i)),v},this.getFrame=function(){return b},this.getSession=function(){return o},this.setSession=async function(ie){if(o=ie,o!==null){if(z=e.getRenderTarget(),o.addEventListener("select",Y),o.addEventListener("selectstart",Y),o.addEventListener("selectend",Y),o.addEventListener("squeeze",Y),o.addEventListener("squeezestart",Y),o.addEventListener("squeezeend",Y),o.addEventListener("end",F),o.addEventListener("inputsourceschange",H),P.xrCompatible!==!0&&await i.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(I),w&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ee=null,ze=null,it=null;P.depth&&(it=P.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Ee=P.stencil?Ks:Ia,ze=P.stencil?pl:sa);const Je={colorFormat:i.RGBA8,depthFormat:it,scaleFactor:c};v=this.getBinding(),_=v.createProjectionLayer(Je),o.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),C=new ia(_.textureWidth,_.textureHeight,{format:Vi,type:Ci,depthTexture:new ao(_.textureWidth,_.textureHeight,ze,void 0,void 0,void 0,void 0,void 0,void 0,Ee),stencilBuffer:P.stencil,colorSpace:e.outputColorSpace,samples:P.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}else{const Ee={antialias:P.antialias,alpha:!0,depth:P.depth,stencil:P.stencil,framebufferScaleFactor:c};x=new XRWebGLLayer(o,i,Ee),o.updateRenderState({baseLayer:x}),e.setPixelRatio(1),e.setSize(x.framebufferWidth,x.framebufferHeight,!1),C=new ia(x.framebufferWidth,x.framebufferHeight,{format:Vi,type:Ci,colorSpace:e.outputColorSpace,stencilBuffer:P.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(m),p=null,u=await o.requestReferenceSpace(h),Ue.setContext(o),Ue.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function H(ie){for(let ye=0;ye<ie.removed.length;ye++){const Ee=ie.removed[ye],ze=N.indexOf(Ee);ze>=0&&(N[ze]=null,O[ze].disconnect(Ee))}for(let ye=0;ye<ie.added.length;ye++){const Ee=ie.added[ye];let ze=N.indexOf(Ee);if(ze===-1){for(let Je=0;Je<O.length;Je++)if(Je>=N.length){N.push(Ee),ze=Je;break}else if(N[Je]===null){N[Je]=Ee,ze=Je;break}if(ze===-1)break}const it=O[ze];it&&it.connect(Ee)}}const $=new ee,me=new ee;function Se(ie,ye,Ee){$.setFromMatrixPosition(ye.matrixWorld),me.setFromMatrixPosition(Ee.matrixWorld);const ze=$.distanceTo(me),it=ye.projectionMatrix.elements,Je=Ee.projectionMatrix.elements,Zt=it[14]/(it[10]-1),ut=it[14]/(it[10]+1),vt=(it[9]+1)/it[5],Ye=(it[9]-1)/it[5],Ze=(it[8]-1)/it[0],ot=(Je[8]+1)/Je[0],mt=Zt*Ze,wt=Zt*ot,Dt=ze/(-Ze+ot),ft=Dt*-Ze;if(ye.matrixWorld.decompose(ie.position,ie.quaternion,ie.scale),ie.translateX(ft),ie.translateZ(Dt),ie.matrixWorld.compose(ie.position,ie.quaternion,ie.scale),ie.matrixWorldInverse.copy(ie.matrixWorld).invert(),it[10]===-1)ie.projectionMatrix.copy(ye.projectionMatrix),ie.projectionMatrixInverse.copy(ye.projectionMatrixInverse);else{const _t=Zt+Dt,X=ut+Dt,Mt=mt-ft,St=wt+(ze-ft),L=vt*ut/X*_t,E=Ye*ut/X*_t;ie.projectionMatrix.makePerspective(Mt,St,L,E,_t,X),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert()}}function U(ie,ye){ye===null?ie.matrixWorld.copy(ie.matrix):ie.matrixWorld.multiplyMatrices(ye.matrixWorld,ie.matrix),ie.matrixWorldInverse.copy(ie.matrixWorld).invert()}this.updateCamera=function(ie){if(o===null)return;let ye=ie.near,Ee=ie.far;y.texture!==null&&(y.depthNear>0&&(ye=y.depthNear),y.depthFar>0&&(Ee=y.depthFar)),Z.near=q.near=D.near=ye,Z.far=q.far=D.far=Ee,(de!==Z.near||oe!==Z.far)&&(o.updateRenderState({depthNear:Z.near,depthFar:Z.far}),de=Z.near,oe=Z.far),Z.layers.mask=ie.layers.mask|6,D.layers.mask=Z.layers.mask&-5,q.layers.mask=Z.layers.mask&-3;const ze=ie.parent,it=Z.cameras;U(Z,ze);for(let Je=0;Je<it.length;Je++)U(it[Je],ze);it.length===2?Se(Z,D,q):Z.projectionMatrix.copy(D.projectionMatrix),K(ie,Z,ze)};function K(ie,ye,Ee){Ee===null?ie.matrix.copy(ye.matrixWorld):(ie.matrix.copy(Ee.matrixWorld),ie.matrix.invert(),ie.matrix.multiply(ye.matrixWorld)),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.updateMatrixWorld(!0),ie.projectionMatrix.copy(ye.projectionMatrix),ie.projectionMatrixInverse.copy(ye.projectionMatrixInverse),ie.isPerspectiveCamera&&(ie.fov=ml*2*Math.atan(1/ie.projectionMatrix.elements[5]),ie.zoom=1)}this.getCamera=function(){return Z},this.getFoveation=function(){if(!(_===null&&x===null))return m},this.setFoveation=function(ie){m=ie,_!==null&&(_.fixedFoveation=ie),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=ie)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(Z)},this.getCameraTexture=function(ie){return M[ie]};let xe=null;function Te(ie,ye){if(g=ye.getViewerPose(p||u),b=ye,g!==null){const Ee=g.views;x!==null&&(e.setRenderTargetFramebuffer(C,x.framebuffer),e.setRenderTarget(C));let ze=!1;Ee.length!==Z.cameras.length&&(Z.cameras.length=0,ze=!0);for(let ut=0;ut<Ee.length;ut++){const vt=Ee[ut];let Ye=null;if(x!==null)Ye=x.getViewport(vt);else{const ot=v.getViewSubImage(_,vt);Ye=ot.viewport,ut===0&&(e.setRenderTargetTextures(C,ot.colorTexture,ot.depthStencilTexture),e.setRenderTarget(C))}let Ze=G[ut];Ze===void 0&&(Ze=new Ri,Ze.layers.enable(ut),Ze.viewport=new un,G[ut]=Ze),Ze.matrix.fromArray(vt.transform.matrix),Ze.matrix.decompose(Ze.position,Ze.quaternion,Ze.scale),Ze.projectionMatrix.fromArray(vt.projectionMatrix),Ze.projectionMatrixInverse.copy(Ze.projectionMatrix).invert(),Ze.viewport.set(Ye.x,Ye.y,Ye.width,Ye.height),ut===0&&(Z.matrix.copy(Ze.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale)),ze===!0&&Z.cameras.push(Ze)}const it=o.enabledFeatures;if(it&&it.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&w){v=r.getBinding();const ut=v.getDepthInformation(Ee[0]);ut&&ut.isValid&&ut.texture&&y.init(ut,o.renderState)}if(it&&it.includes("camera-access")&&w){e.state.unbindTexture(),v=r.getBinding();for(let ut=0;ut<Ee.length;ut++){const vt=Ee[ut].camera;if(vt){let Ye=M[vt];Ye||(Ye=new sS,M[vt]=Ye);const Ze=v.getCameraImage(vt);Ye.sourceTexture=Ze}}}}for(let Ee=0;Ee<O.length;Ee++){const ze=N[Ee],it=O[Ee];ze!==null&&it!==void 0&&it.update(ze,ye,p||u)}xe&&xe(ie,ye),ye.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ye}),b=null}const Ue=new cS;Ue.setAnimationLoop(Te),this.setAnimationLoop=function(ie){xe=ie},this.dispose=function(){}}}const S2=new pn,gS=new ct;gS.set(-1,0,0,0,1,0,0,0,1);function x2(a,e){function i(y,M){y.matrixAutoUpdate===!0&&y.updateMatrix(),M.value.copy(y.matrix)}function r(y,M){M.color.getRGB(y.fogColor.value,rS(a)),M.isFog?(y.fogNear.value=M.near,y.fogFar.value=M.far):M.isFogExp2&&(y.fogDensity.value=M.density)}function o(y,M,P,z,C){M.isNodeMaterial?M.uniformsNeedUpdate=!1:M.isMeshBasicMaterial?c(y,M):M.isMeshLambertMaterial?(c(y,M),M.envMap&&(y.envMapIntensity.value=M.envMapIntensity)):M.isMeshToonMaterial?(c(y,M),v(y,M)):M.isMeshPhongMaterial?(c(y,M),g(y,M),M.envMap&&(y.envMapIntensity.value=M.envMapIntensity)):M.isMeshStandardMaterial?(c(y,M),_(y,M),M.isMeshPhysicalMaterial&&x(y,M,C)):M.isMeshMatcapMaterial?(c(y,M),b(y,M)):M.isMeshDepthMaterial?c(y,M):M.isMeshDistanceMaterial?(c(y,M),w(y,M)):M.isMeshNormalMaterial?c(y,M):M.isLineBasicMaterial?(u(y,M),M.isLineDashedMaterial&&h(y,M)):M.isPointsMaterial?m(y,M,P,z):M.isSpriteMaterial?p(y,M):M.isShadowMaterial?(y.color.value.copy(M.color),y.opacity.value=M.opacity):M.isShaderMaterial&&(M.uniformsNeedUpdate=!1)}function c(y,M){y.opacity.value=M.opacity,M.color&&y.diffuse.value.copy(M.color),M.emissive&&y.emissive.value.copy(M.emissive).multiplyScalar(M.emissiveIntensity),M.map&&(y.map.value=M.map,i(M.map,y.mapTransform)),M.alphaMap&&(y.alphaMap.value=M.alphaMap,i(M.alphaMap,y.alphaMapTransform)),M.bumpMap&&(y.bumpMap.value=M.bumpMap,i(M.bumpMap,y.bumpMapTransform),y.bumpScale.value=M.bumpScale,M.side===ai&&(y.bumpScale.value*=-1)),M.normalMap&&(y.normalMap.value=M.normalMap,i(M.normalMap,y.normalMapTransform),y.normalScale.value.copy(M.normalScale),M.side===ai&&y.normalScale.value.negate()),M.displacementMap&&(y.displacementMap.value=M.displacementMap,i(M.displacementMap,y.displacementMapTransform),y.displacementScale.value=M.displacementScale,y.displacementBias.value=M.displacementBias),M.emissiveMap&&(y.emissiveMap.value=M.emissiveMap,i(M.emissiveMap,y.emissiveMapTransform)),M.specularMap&&(y.specularMap.value=M.specularMap,i(M.specularMap,y.specularMapTransform)),M.alphaTest>0&&(y.alphaTest.value=M.alphaTest);const P=e.get(M),z=P.envMap,C=P.envMapRotation;z&&(y.envMap.value=z,y.envMapRotation.value.setFromMatrix4(S2.makeRotationFromEuler(C)).transpose(),z.isCubeTexture&&z.isRenderTargetTexture===!1&&y.envMapRotation.value.premultiply(gS),y.reflectivity.value=M.reflectivity,y.ior.value=M.ior,y.refractionRatio.value=M.refractionRatio),M.lightMap&&(y.lightMap.value=M.lightMap,y.lightMapIntensity.value=M.lightMapIntensity,i(M.lightMap,y.lightMapTransform)),M.aoMap&&(y.aoMap.value=M.aoMap,y.aoMapIntensity.value=M.aoMapIntensity,i(M.aoMap,y.aoMapTransform))}function u(y,M){y.diffuse.value.copy(M.color),y.opacity.value=M.opacity,M.map&&(y.map.value=M.map,i(M.map,y.mapTransform))}function h(y,M){y.dashSize.value=M.dashSize,y.totalSize.value=M.dashSize+M.gapSize,y.scale.value=M.scale}function m(y,M,P,z){y.diffuse.value.copy(M.color),y.opacity.value=M.opacity,y.size.value=M.size*P,y.scale.value=z*.5,M.map&&(y.map.value=M.map,i(M.map,y.uvTransform)),M.alphaMap&&(y.alphaMap.value=M.alphaMap,i(M.alphaMap,y.alphaMapTransform)),M.alphaTest>0&&(y.alphaTest.value=M.alphaTest)}function p(y,M){y.diffuse.value.copy(M.color),y.opacity.value=M.opacity,y.rotation.value=M.rotation,M.map&&(y.map.value=M.map,i(M.map,y.mapTransform)),M.alphaMap&&(y.alphaMap.value=M.alphaMap,i(M.alphaMap,y.alphaMapTransform)),M.alphaTest>0&&(y.alphaTest.value=M.alphaTest)}function g(y,M){y.specular.value.copy(M.specular),y.shininess.value=Math.max(M.shininess,1e-4)}function v(y,M){M.gradientMap&&(y.gradientMap.value=M.gradientMap)}function _(y,M){y.metalness.value=M.metalness,M.metalnessMap&&(y.metalnessMap.value=M.metalnessMap,i(M.metalnessMap,y.metalnessMapTransform)),y.roughness.value=M.roughness,M.roughnessMap&&(y.roughnessMap.value=M.roughnessMap,i(M.roughnessMap,y.roughnessMapTransform)),M.envMap&&(y.envMapIntensity.value=M.envMapIntensity)}function x(y,M,P){y.ior.value=M.ior,M.sheen>0&&(y.sheenColor.value.copy(M.sheenColor).multiplyScalar(M.sheen),y.sheenRoughness.value=M.sheenRoughness,M.sheenColorMap&&(y.sheenColorMap.value=M.sheenColorMap,i(M.sheenColorMap,y.sheenColorMapTransform)),M.sheenRoughnessMap&&(y.sheenRoughnessMap.value=M.sheenRoughnessMap,i(M.sheenRoughnessMap,y.sheenRoughnessMapTransform))),M.clearcoat>0&&(y.clearcoat.value=M.clearcoat,y.clearcoatRoughness.value=M.clearcoatRoughness,M.clearcoatMap&&(y.clearcoatMap.value=M.clearcoatMap,i(M.clearcoatMap,y.clearcoatMapTransform)),M.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=M.clearcoatRoughnessMap,i(M.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),M.clearcoatNormalMap&&(y.clearcoatNormalMap.value=M.clearcoatNormalMap,i(M.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(M.clearcoatNormalScale),M.side===ai&&y.clearcoatNormalScale.value.negate())),M.dispersion>0&&(y.dispersion.value=M.dispersion),M.iridescence>0&&(y.iridescence.value=M.iridescence,y.iridescenceIOR.value=M.iridescenceIOR,y.iridescenceThicknessMinimum.value=M.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=M.iridescenceThicknessRange[1],M.iridescenceMap&&(y.iridescenceMap.value=M.iridescenceMap,i(M.iridescenceMap,y.iridescenceMapTransform)),M.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=M.iridescenceThicknessMap,i(M.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),M.transmission>0&&(y.transmission.value=M.transmission,y.transmissionSamplerMap.value=P.texture,y.transmissionSamplerSize.value.set(P.width,P.height),M.transmissionMap&&(y.transmissionMap.value=M.transmissionMap,i(M.transmissionMap,y.transmissionMapTransform)),y.thickness.value=M.thickness,M.thicknessMap&&(y.thicknessMap.value=M.thicknessMap,i(M.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=M.attenuationDistance,y.attenuationColor.value.copy(M.attenuationColor)),M.anisotropy>0&&(y.anisotropyVector.value.set(M.anisotropy*Math.cos(M.anisotropyRotation),M.anisotropy*Math.sin(M.anisotropyRotation)),M.anisotropyMap&&(y.anisotropyMap.value=M.anisotropyMap,i(M.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=M.specularIntensity,y.specularColor.value.copy(M.specularColor),M.specularColorMap&&(y.specularColorMap.value=M.specularColorMap,i(M.specularColorMap,y.specularColorMapTransform)),M.specularIntensityMap&&(y.specularIntensityMap.value=M.specularIntensityMap,i(M.specularIntensityMap,y.specularIntensityMapTransform))}function b(y,M){M.matcap&&(y.matcap.value=M.matcap)}function w(y,M){const P=e.get(M).light;y.referencePosition.value.setFromMatrixPosition(P.matrixWorld),y.nearDistance.value=P.shadow.camera.near,y.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function M2(a,e,i,r){let o={},c={},u=[];const h=a.getParameter(a.MAX_UNIFORM_BUFFER_BINDINGS);function m(C,O){const N=O.program;r.uniformBlockBinding(C,N)}function p(C,O){let N=o[C.id];N===void 0&&(y(C),N=g(C),o[C.id]=N,C.addEventListener("dispose",P));const I=O.program;r.updateUBOMapping(C,I);const T=e.render.frame;c[C.id]!==T&&(_(C),c[C.id]=T)}function g(C){const O=v();C.__bindingPointIndex=O;const N=a.createBuffer(),I=C.__size,T=C.usage;return a.bindBuffer(a.UNIFORM_BUFFER,N),a.bufferData(a.UNIFORM_BUFFER,I,T),a.bindBuffer(a.UNIFORM_BUFFER,null),a.bindBufferBase(a.UNIFORM_BUFFER,O,N),N}function v(){for(let C=0;C<h;C++)if(u.indexOf(C)===-1)return u.push(C),C;return Ut("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(C){const O=o[C.id],N=C.uniforms,I=C.__cache;a.bindBuffer(a.UNIFORM_BUFFER,O);for(let T=0,D=N.length;T<D;T++){const q=N[T];if(Array.isArray(q))for(let G=0,Z=q.length;G<Z;G++)x(q[G],T,G,I);else x(q,T,0,I)}a.bindBuffer(a.UNIFORM_BUFFER,null)}function x(C,O,N,I){if(w(C,O,N,I)===!0){const T=C.__offset,D=C.value;if(Array.isArray(D)){let q=0;for(let G=0;G<D.length;G++){const Z=D[G],de=M(Z);b(Z,C.__data,q),typeof Z!="number"&&typeof Z!="boolean"&&!Z.isMatrix3&&!ArrayBuffer.isView(Z)&&(q+=de.storage/Float32Array.BYTES_PER_ELEMENT)}}else b(D,C.__data,0);a.bufferSubData(a.UNIFORM_BUFFER,T,C.__data)}}function b(C,O,N){typeof C=="number"||typeof C=="boolean"?O[0]=C:C.isMatrix3?(O[0]=C.elements[0],O[1]=C.elements[1],O[2]=C.elements[2],O[3]=0,O[4]=C.elements[3],O[5]=C.elements[4],O[6]=C.elements[5],O[7]=0,O[8]=C.elements[6],O[9]=C.elements[7],O[10]=C.elements[8],O[11]=0):ArrayBuffer.isView(C)?O.set(new C.constructor(C.buffer,C.byteOffset,O.length)):C.toArray(O,N)}function w(C,O,N,I){const T=C.value,D=O+"_"+N;if(I[D]===void 0)return typeof T=="number"||typeof T=="boolean"?I[D]=T:ArrayBuffer.isView(T)?I[D]=T.slice():I[D]=T.clone(),!0;{const q=I[D];if(typeof T=="number"||typeof T=="boolean"){if(q!==T)return I[D]=T,!0}else{if(ArrayBuffer.isView(T))return!0;if(q.equals(T)===!1)return q.copy(T),!0}}return!1}function y(C){const O=C.uniforms;let N=0;const I=16;for(let D=0,q=O.length;D<q;D++){const G=Array.isArray(O[D])?O[D]:[O[D]];for(let Z=0,de=G.length;Z<de;Z++){const oe=G[Z],Y=Array.isArray(oe.value)?oe.value:[oe.value];for(let F=0,H=Y.length;F<H;F++){const $=Y[F],me=M($),Se=N%I,U=Se%me.boundary,K=Se+U;N+=U,K!==0&&I-K<me.storage&&(N+=I-K),oe.__data=new Float32Array(me.storage/Float32Array.BYTES_PER_ELEMENT),oe.__offset=N,N+=me.storage}}}const T=N%I;return T>0&&(N+=I-T),C.__size=N,C.__cache={},this}function M(C){const O={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(O.boundary=4,O.storage=4):C.isVector2?(O.boundary=8,O.storage=8):C.isVector3||C.isColor?(O.boundary=16,O.storage=12):C.isVector4?(O.boundary=16,O.storage=16):C.isMatrix3?(O.boundary=48,O.storage=48):C.isMatrix4?(O.boundary=64,O.storage=64):C.isTexture?rt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(C)?(O.boundary=16,O.storage=C.byteLength):rt("WebGLRenderer: Unsupported uniform value type.",C),O}function P(C){const O=C.target;O.removeEventListener("dispose",P);const N=u.indexOf(O.__bindingPointIndex);u.splice(N,1),a.deleteBuffer(o[O.id]),delete o[O.id],delete c[O.id]}function z(){for(const C in o)a.deleteBuffer(o[C]);u=[],o={},c={}}return{bind:m,update:p,dispose:z}}const y2=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Qi=null;function E2(){return Qi===null&&(Qi=new hE(y2,16,16,$s,Pa),Qi.name="DFG_LUT",Qi.minFilter=bn,Qi.magFilter=bn,Qi.wrapS=Gi,Qi.wrapT=Gi,Qi.generateMipmaps=!1,Qi.needsUpdate=!0),Qi}class b2{constructor(e={}){const{canvas:i=Cy(),context:r=null,depth:o=!0,stencil:c=!1,alpha:u=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:_=!1,outputBufferType:x=Ci}=e;this.isWebGLRenderer=!0;let b;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=r.getContextAttributes().alpha}else b=u;const w=x,y=new Set([hp,dp,fp]),M=new Set([Ci,sa,hl,pl,cp,up]),P=new Uint32Array(4),z=new Int32Array(4),C=new ee;let O=null,N=null;const I=[],T=[];let D=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=na,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const q=this;let G=!1,Z=null,de=null,oe=null,Y=null;this._outputColorSpace=Kn;let F=0,H=0,$=null,me=-1,Se=null;const U=new un,K=new un;let xe=null;const Te=new Nt(0);let Ue=0,ie=i.width,ye=i.height,Ee=1,ze=null,it=null;const Je=new un(0,0,ie,ye),Zt=new un(0,0,ie,ye);let ut=!1;const vt=new nS;let Ye=!1,Ze=!1;const ot=new pn,mt=new ee,wt=new un,Dt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ft=!1;function _t(){return $===null?Ee:1}let X=r;function Mt(A,j){return i.getContext(A,j)}try{const A={alpha:!0,depth:o,stencil:c,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${op}`),i.addEventListener("webglcontextlost",Gt,!1),i.addEventListener("webglcontextrestored",Lt,!1),i.addEventListener("webglcontextcreationerror",Wn,!1),X===null){const j="webgl2";if(X=Mt(j,A),X===null)throw Mt(j)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(A){throw Ut("WebGLRenderer: "+A.message),A}let St,L,E,J,te,fe,Ce,De,he,pe,Ae,Be,Ne,Le,$e,je,st,W,Re,ge,we,Pe,be;function Xe(){St=new E1(X),St.init(),we=new p2(X,St),L=new m1(X,St,e,we),E=new d2(X,St),L.reversedDepthBuffer&&_&&E.buffers.depth.setReversed(!0),de=X.createFramebuffer(),oe=X.createFramebuffer(),Y=X.createFramebuffer(),J=new A1(X),te=new JA,fe=new h2(X,St,E,te,L,we,J),Ce=new y1(q),De=new DE(X),Pe=new h1(X,De),he=new b1(X,De,J,Pe),pe=new C1(X,he,De,Pe,J),W=new R1(X,L,fe),$e=new g1(te),Ae=new QA(q,Ce,St,L,Pe,$e),Be=new x2(q,te),Ne=new e2,Le=new r2(St),st=new d1(q,Ce,E,pe,b,m),je=new f2(q,pe,L),be=new M2(X,J,L,E),Re=new p1(X,St,J),ge=new T1(X,St,J),J.programs=Ae.programs,q.capabilities=L,q.extensions=St,q.properties=te,q.renderLists=Ne,q.shadowMap=je,q.state=E,q.info=J}Xe(),w!==Ci&&(D=new D1(w,i.width,i.height,h,o,c));const He=new v2(q,X);this.xr=He,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const A=St.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=St.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Ee},this.setPixelRatio=function(A){A!==void 0&&(Ee=A,this.setSize(ie,ye,!1))},this.getSize=function(A){return A.set(ie,ye)},this.setSize=function(A,j,le=!0){if(He.isPresenting){rt("WebGLRenderer: Can't change size while VR device is presenting.");return}ie=A,ye=j,i.width=Math.floor(A*Ee),i.height=Math.floor(j*Ee),le===!0&&(i.style.width=A+"px",i.style.height=j+"px"),D!==null&&D.setSize(i.width,i.height),this.setViewport(0,0,A,j)},this.getDrawingBufferSize=function(A){return A.set(ie*Ee,ye*Ee).floor()},this.setDrawingBufferSize=function(A,j,le){ie=A,ye=j,Ee=le,i.width=Math.floor(A*le),i.height=Math.floor(j*le),this.setViewport(0,0,A,j)},this.setEffects=function(A){if(w===Ci){Ut("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let j=0;j<A.length;j++)if(A[j].isOutputPass===!0){rt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}D.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(U)},this.getViewport=function(A){return A.copy(Je)},this.setViewport=function(A,j,le,se){A.isVector4?Je.set(A.x,A.y,A.z,A.w):Je.set(A,j,le,se),E.viewport(U.copy(Je).multiplyScalar(Ee).round())},this.getScissor=function(A){return A.copy(Zt)},this.setScissor=function(A,j,le,se){A.isVector4?Zt.set(A.x,A.y,A.z,A.w):Zt.set(A,j,le,se),E.scissor(K.copy(Zt).multiplyScalar(Ee).round())},this.getScissorTest=function(){return ut},this.setScissorTest=function(A){E.setScissorTest(ut=A)},this.setOpaqueSort=function(A){ze=A},this.setTransparentSort=function(A){it=A},this.getClearColor=function(A){return A.copy(st.getClearColor())},this.setClearColor=function(){st.setClearColor(...arguments)},this.getClearAlpha=function(){return st.getClearAlpha()},this.setClearAlpha=function(){st.setClearAlpha(...arguments)},this.clear=function(A=!0,j=!0,le=!0){let se=0;if(A){let re=!1;if($!==null){const Ie=$.texture.format;re=y.has(Ie)}if(re){const Ie=$.texture.type,Ve=M.has(Ie),Oe=st.getClearColor(),We=st.getClearAlpha(),ke=Oe.r,tt=Oe.g,dt=Oe.b;Ve?(P[0]=ke,P[1]=tt,P[2]=dt,P[3]=We,X.clearBufferuiv(X.COLOR,0,P)):(z[0]=ke,z[1]=tt,z[2]=dt,z[3]=We,X.clearBufferiv(X.COLOR,0,z))}else se|=X.COLOR_BUFFER_BIT}j&&(se|=X.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),le&&(se|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),se!==0&&X.clear(se)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),Z=A},this.dispose=function(){i.removeEventListener("webglcontextlost",Gt,!1),i.removeEventListener("webglcontextrestored",Lt,!1),i.removeEventListener("webglcontextcreationerror",Wn,!1),st.dispose(),Ne.dispose(),Le.dispose(),te.dispose(),Ce.dispose(),pe.dispose(),Pe.dispose(),be.dispose(),Ae.dispose(),He.dispose(),He.removeEventListener("sessionstart",Ot),He.removeEventListener("sessionend",en),Dn.stop()};function Gt(A){A.preventDefault(),A_("WebGLRenderer: Context Lost."),G=!0}function Lt(){A_("WebGLRenderer: Context Restored."),G=!1;const A=J.autoReset,j=je.enabled,le=je.autoUpdate,se=je.needsUpdate,re=je.type;Xe(),J.autoReset=A,je.enabled=j,je.autoUpdate=le,je.needsUpdate=se,je.type=re}function Wn(A){Ut("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function zn(A){const j=A.target;j.removeEventListener("dispose",zn),Fa(j)}function Fa(A){mn(A),te.remove(A)}function mn(A){const j=te.get(A).programs;j!==void 0&&(j.forEach(function(le){Ae.releaseProgram(le)}),A.isShaderMaterial&&Ae.releaseShaderCache(A))}this.renderBufferDirect=function(A,j,le,se,re,Ie){j===null&&(j=Dt);const Ve=re.isMesh&&re.matrixWorld.determinantAffine()<0,Oe=Ga(A,j,le,se,re);E.setMaterial(se,Ve);let We=le.index,ke=1;if(se.wireframe===!0){if(We=he.getWireframeAttribute(le),We===void 0)return;ke=2}const tt=le.drawRange,dt=le.attributes.position;let et=tt.start*ke,Pt=(tt.start+tt.count)*ke;Ie!==null&&(et=Math.max(et,Ie.start*ke),Pt=Math.min(Pt,(Ie.start+Ie.count)*ke)),We!==null?(et=Math.max(et,0),Pt=Math.min(Pt,We.count)):dt!=null&&(et=Math.max(et,0),Pt=Math.min(Pt,dt.count));const sn=Pt-et;if(sn<0||sn===1/0)return;Pe.setup(re,se,Oe,le,We);let Jt,Vt=Re;if(We!==null&&(Jt=De.get(We),Vt=ge,Vt.setIndex(Jt)),re.isMesh)se.wireframe===!0?(E.setLineWidth(se.wireframeLinewidth*_t()),Vt.setMode(X.LINES)):Vt.setMode(X.TRIANGLES);else if(re.isLine){let kt=se.linewidth;kt===void 0&&(kt=1),E.setLineWidth(kt*_t()),re.isLineSegments?Vt.setMode(X.LINES):re.isLineLoop?Vt.setMode(X.LINE_LOOP):Vt.setMode(X.LINE_STRIP)}else re.isPoints?Vt.setMode(X.POINTS):re.isSprite&&Vt.setMode(X.TRIANGLES);if(re.isBatchedMesh)if(St.get("WEBGL_multi_draw"))Vt.renderMultiDraw(re._multiDrawStarts,re._multiDrawCounts,re._multiDrawCount);else{const kt=re._multiDrawStarts,Ge=re._multiDrawCounts,Hn=re._multiDrawCount,yt=We?De.get(We).bytesPerElement:1,An=te.get(se).currentProgram.getUniforms();for(let ri=0;ri<Hn;ri++)An.setValue(X,"_gl_DrawID",ri),Vt.render(kt[ri]/yt,Ge[ri])}else if(re.isInstancedMesh)Vt.renderInstances(et,sn,re.count);else if(le.isInstancedBufferGeometry){const kt=le._maxInstanceCount!==void 0?le._maxInstanceCount:1/0,Ge=Math.min(le.instanceCount,kt);Vt.renderInstances(et,sn,Ge)}else Vt.render(et,sn)};function Tn(A,j,le){A.transparent===!0&&A.side===$i&&A.forceSinglePass===!1?(A.side=ai,A.needsUpdate=!0,Ha(A,j,le),A.side=Oa,A.needsUpdate=!0,Ha(A,j,le),A.side=$i):Ha(A,j,le)}this.compile=function(A,j,le=null){le===null&&(le=A),N=Le.get(le),N.init(j),T.push(N),le.traverseVisible(function(re){re.isLight&&re.layers.test(j.layers)&&(N.pushLight(re),re.castShadow&&N.pushShadow(re))}),A!==le&&A.traverseVisible(function(re){re.isLight&&re.layers.test(j.layers)&&(N.pushLight(re),re.castShadow&&N.pushShadow(re))}),N.setupLights();const se=new Set;return A.traverse(function(re){if(!(re.isMesh||re.isPoints||re.isLine||re.isSprite))return;const Ie=re.material;if(Ie)if(Array.isArray(Ie))for(let Ve=0;Ve<Ie.length;Ve++){const Oe=Ie[Ve];Tn(Oe,le,re),se.add(Oe)}else Tn(Ie,le,re),se.add(Ie)}),N=T.pop(),se},this.compileAsync=function(A,j,le=null){const se=this.compile(A,j,le);return new Promise(re=>{function Ie(){if(se.forEach(function(Ve){te.get(Ve).currentProgram.isReady()&&se.delete(Ve)}),se.size===0){re(A);return}setTimeout(Ie,10)}St.get("KHR_parallel_shader_compile")!==null?Ie():setTimeout(Ie,10)})};let si=null;function gn(A){si&&si(A)}function Ot(){Dn.stop()}function en(){Dn.start()}const Dn=new cS;Dn.setAnimationLoop(gn),typeof self<"u"&&Dn.setContext(self),this.setAnimationLoop=function(A){si=A,He.setAnimationLoop(A),A===null?Dn.stop():Dn.start()},He.addEventListener("sessionstart",Ot),He.addEventListener("sessionend",en),this.render=function(A,j){if(j!==void 0&&j.isCamera!==!0){Ut("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;Z!==null&&Z.renderStart(A,j);const le=He.enabled===!0&&He.isPresenting===!0,se=D!==null&&($===null||le)&&D.begin(q,$);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),He.enabled===!0&&He.isPresenting===!0&&(D===null||D.isCompositing()===!1)&&(He.cameraAutoUpdate===!0&&He.updateCamera(j),j=He.getCamera()),A.isScene===!0&&A.onBeforeRender(q,A,j,$),N=Le.get(A,T.length),N.init(j),N.state.textureUnits=fe.getTextureUnits(),T.push(N),ot.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),vt.setFromProjectionMatrix(ot,ta,j.reversedDepth),Ze=this.localClippingEnabled,Ye=$e.init(this.clippingPlanes,Ze),O=Ne.get(A,I.length),O.init(),I.push(O),He.enabled===!0&&He.isPresenting===!0){const Ve=q.xr.getDepthSensingMesh();Ve!==null&&Qn(Ve,j,-1/0,q.sortObjects)}Qn(A,j,0,q.sortObjects),O.finish(),q.sortObjects===!0&&O.sort(ze,it,j.reversedDepth),ft=He.enabled===!1||He.isPresenting===!1||He.hasDepthSensing()===!1,ft&&st.addToRenderList(O,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ye===!0&&$e.beginShadows();const re=N.state.shadowsArray;if(je.render(re,A,j),Ye===!0&&$e.endShadows(),(se&&D.hasRenderPass())===!1){const Ve=O.opaque,Oe=O.transmissive;if(N.setupLights(),j.isArrayCamera){const We=j.cameras;if(Oe.length>0)for(let ke=0,tt=We.length;ke<tt;ke++){const dt=We[ke];Ba(Ve,Oe,A,dt)}ft&&st.render(A);for(let ke=0,tt=We.length;ke<tt;ke++){const dt=We[ke];ys(O,A,dt,dt.viewport)}}else Oe.length>0&&Ba(Ve,Oe,A,j),ft&&st.render(A),ys(O,A,j)}$!==null&&H===0&&(fe.updateMultisampleRenderTarget($),fe.updateRenderTargetMipmap($)),se&&D.end(q),A.isScene===!0&&A.onAfterRender(q,A,j),Pe.resetDefaultState(),me=-1,Se=null,T.pop(),T.length>0?(N=T[T.length-1],fe.setTextureUnits(N.state.textureUnits),Ye===!0&&$e.setGlobalState(q.clippingPlanes,N.state.camera)):N=null,I.pop(),I.length>0?O=I[I.length-1]:O=null,Z!==null&&Z.renderEnd()};function Qn(A,j,le,se){if(A.visible===!1)return;if(A.layers.test(j.layers)){if(A.isGroup)le=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(j);else if(A.isLightProbeGrid)N.pushLightProbeGrid(A);else if(A.isLight)N.pushLight(A),A.castShadow&&N.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||vt.intersectsSprite(A)){se&&wt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ot);const Ve=pe.update(A),Oe=A.material;Oe.visible&&O.push(A,Ve,Oe,le,wt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||vt.intersectsObject(A))){const Ve=pe.update(A),Oe=A.material;if(se&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),wt.copy(A.boundingSphere.center)):(Ve.boundingSphere===null&&Ve.computeBoundingSphere(),wt.copy(Ve.boundingSphere.center)),wt.applyMatrix4(A.matrixWorld).applyMatrix4(ot)),Array.isArray(Oe)){const We=Ve.groups;for(let ke=0,tt=We.length;ke<tt;ke++){const dt=We[ke],et=Oe[dt.materialIndex];et&&et.visible&&O.push(A,Ve,et,le,wt.z,dt)}}else Oe.visible&&O.push(A,Ve,Oe,le,wt.z,null)}}const Ie=A.children;for(let Ve=0,Oe=Ie.length;Ve<Oe;Ve++)Qn(Ie[Ve],j,le,se)}function ys(A,j,le,se){const{opaque:re,transmissive:Ie,transparent:Ve}=A;N.setupLightsView(le),Ye===!0&&$e.setGlobalState(q.clippingPlanes,le),se&&E.viewport(U.copy(se)),re.length>0&&Xi(re,j,le),Ie.length>0&&Xi(Ie,j,le),Ve.length>0&&Xi(Ve,j,le),E.buffers.depth.setTest(!0),E.buffers.depth.setMask(!0),E.buffers.color.setMask(!0),E.setPolygonOffset(!1)}function Ba(A,j,le,se){if((le.isScene===!0?le.overrideMaterial:null)!==null)return;if(N.state.transmissionRenderTarget[se.id]===void 0){const et=St.has("EXT_color_buffer_half_float")||St.has("EXT_color_buffer_float");N.state.transmissionRenderTarget[se.id]=new ia(1,1,{generateMipmaps:!0,type:et?Pa:Ci,minFilter:xs,samples:Math.max(4,L.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ct.workingColorSpace})}const Ie=N.state.transmissionRenderTarget[se.id],Ve=se.viewport||U;Ie.setSize(Ve.z*q.transmissionResolutionScale,Ve.w*q.transmissionResolutionScale);const Oe=q.getRenderTarget(),We=q.getActiveCubeFace(),ke=q.getActiveMipmapLevel();q.setRenderTarget(Ie),q.getClearColor(Te),Ue=q.getClearAlpha(),Ue<1&&q.setClearColor(16777215,.5),q.clear(),ft&&st.render(le);const tt=q.toneMapping;q.toneMapping=na;const dt=se.viewport;if(se.viewport!==void 0&&(se.viewport=void 0),N.setupLightsView(se),Ye===!0&&$e.setGlobalState(q.clippingPlanes,se),Xi(A,le,se),fe.updateMultisampleRenderTarget(Ie),fe.updateRenderTargetMipmap(Ie),St.has("WEBGL_multisampled_render_to_texture")===!1){let et=!1;for(let Pt=0,sn=j.length;Pt<sn;Pt++){const Jt=j[Pt],{object:Vt,geometry:kt,material:Ge,group:Hn}=Jt;if(Ge.side===$i&&Vt.layers.test(se.layers)){const yt=Ge.side;Ge.side=ai,Ge.needsUpdate=!0,za(Vt,le,se,kt,Ge,Hn),Ge.side=yt,Ge.needsUpdate=!0,et=!0}}et===!0&&(fe.updateMultisampleRenderTarget(Ie),fe.updateRenderTargetMipmap(Ie))}q.setRenderTarget(Oe,We,ke),q.setClearColor(Te,Ue),dt!==void 0&&(se.viewport=dt),q.toneMapping=tt}function Xi(A,j,le){const se=j.isScene===!0?j.overrideMaterial:null;for(let re=0,Ie=A.length;re<Ie;re++){const Ve=A[re],{object:Oe,geometry:We,group:ke}=Ve;let tt=Ve.material;tt.allowOverride===!0&&se!==null&&(tt=se),Oe.layers.test(le.layers)&&za(Oe,j,le,We,tt,ke)}}function za(A,j,le,se,re,Ie){A.onBeforeRender(q,j,le,se,re,Ie),A.modelViewMatrix.multiplyMatrices(le.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),re.onBeforeRender(q,j,le,se,A,Ie),re.transparent===!0&&re.side===$i&&re.forceSinglePass===!1?(re.side=ai,re.needsUpdate=!0,q.renderBufferDirect(le,j,se,re,A,Ie),re.side=Oa,re.needsUpdate=!0,q.renderBufferDirect(le,j,se,re,A,Ie),re.side=$i):q.renderBufferDirect(le,j,se,re,A,Ie),A.onAfterRender(q,j,le,se,re,Ie)}function Ha(A,j,le){j.isScene!==!0&&(j=Dt);const se=te.get(A),re=N.state.lights,Ie=N.state.shadowsArray,Ve=re.state.version,Oe=Ae.getParameters(A,re.state,Ie,j,le,N.state.lightProbeGridArray),We=Ae.getProgramCacheKey(Oe);let ke=se.programs;se.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?j.environment:null,se.fog=j.fog;const tt=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;se.envMap=Ce.get(A.envMap||se.environment,tt),se.envMapRotation=se.environment!==null&&A.envMap===null?j.environmentRotation:A.envMapRotation,ke===void 0&&(A.addEventListener("dispose",zn),ke=new Map,se.programs=ke);let dt=ke.get(We);if(dt!==void 0){if(se.currentProgram===dt&&se.lightsStateVersion===Ve)return oa(A,Oe),dt}else Oe.uniforms=Ae.getUniforms(A),Z!==null&&A.isNodeMaterial&&Z.build(A,le,Oe),A.onBeforeCompile(Oe,q),dt=Ae.acquireProgram(Oe,We),ke.set(We,dt),se.uniforms=Oe.uniforms;const et=se.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(et.clippingPlanes=$e.uniform),oa(A,Oe),se.needsLights=Sl(A),se.lightsStateVersion=Ve,se.needsLights&&(et.ambientLightColor.value=re.state.ambient,et.lightProbe.value=re.state.probe,et.directionalLights.value=re.state.directional,et.directionalLightShadows.value=re.state.directionalShadow,et.spotLights.value=re.state.spot,et.spotLightShadows.value=re.state.spotShadow,et.rectAreaLights.value=re.state.rectArea,et.ltc_1.value=re.state.rectAreaLTC1,et.ltc_2.value=re.state.rectAreaLTC2,et.pointLights.value=re.state.point,et.pointLightShadows.value=re.state.pointShadow,et.hemisphereLights.value=re.state.hemi,et.directionalShadowMatrix.value=re.state.directionalShadowMatrix,et.spotLightMatrix.value=re.state.spotLightMatrix,et.spotLightMap.value=re.state.spotLightMap,et.pointShadowMatrix.value=re.state.pointShadowMatrix),se.lightProbeGrid=N.state.lightProbeGridArray.length>0,se.currentProgram=dt,se.uniformsList=null,dt}function ra(A){if(A.uniformsList===null){const j=A.currentProgram.getUniforms();A.uniformsList=iu.seqWithValue(j.seq,A.uniforms)}return A.uniformsList}function oa(A,j){const le=te.get(A);le.outputColorSpace=j.outputColorSpace,le.batching=j.batching,le.batchingColor=j.batchingColor,le.instancing=j.instancing,le.instancingColor=j.instancingColor,le.instancingMorph=j.instancingMorph,le.skinning=j.skinning,le.morphTargets=j.morphTargets,le.morphNormals=j.morphNormals,le.morphColors=j.morphColors,le.morphTargetsCount=j.morphTargetsCount,le.numClippingPlanes=j.numClippingPlanes,le.numIntersection=j.numClipIntersection,le.vertexAlphas=j.vertexAlphas,le.vertexTangents=j.vertexTangents,le.toneMapping=j.toneMapping}function Es(A,j){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;C.setFromMatrixPosition(j.matrixWorld);for(let le=0,se=A.length;le<se;le++){const re=A[le];if(re.texture!==null&&re.boundingBox.containsPoint(C))return re}return null}function Ga(A,j,le,se,re){j.isScene!==!0&&(j=Dt),fe.resetTextureUnits();const Ie=j.fog,Ve=se.isMeshStandardMaterial||se.isMeshLambertMaterial||se.isMeshPhongMaterial?j.environment:null,Oe=$===null?q.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:Ct.workingColorSpace,We=se.isMeshStandardMaterial||se.isMeshLambertMaterial&&!se.envMap||se.isMeshPhongMaterial&&!se.envMap,ke=Ce.get(se.envMap||Ve,We),tt=se.vertexColors===!0&&!!le.attributes.color&&le.attributes.color.itemSize===4,dt=!!le.attributes.tangent&&(!!se.normalMap||se.anisotropy>0),et=!!le.morphAttributes.position,Pt=!!le.morphAttributes.normal,sn=!!le.morphAttributes.color;let Jt=na;se.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(Jt=q.toneMapping);const Vt=le.morphAttributes.position||le.morphAttributes.normal||le.morphAttributes.color,kt=Vt!==void 0?Vt.length:0,Ge=te.get(se),Hn=N.state.lights;if(Ye===!0&&(Ze===!0||A!==Se)){const Ht=A===Se&&se.id===me;$e.setState(se,A,Ht)}let yt=!1;se.version===Ge.__version?(Ge.needsLights&&Ge.lightsStateVersion!==Hn.state.version||Ge.outputColorSpace!==Oe||re.isBatchedMesh&&Ge.batching===!1||!re.isBatchedMesh&&Ge.batching===!0||re.isBatchedMesh&&Ge.batchingColor===!0&&re.colorTexture===null||re.isBatchedMesh&&Ge.batchingColor===!1&&re.colorTexture!==null||re.isInstancedMesh&&Ge.instancing===!1||!re.isInstancedMesh&&Ge.instancing===!0||re.isSkinnedMesh&&Ge.skinning===!1||!re.isSkinnedMesh&&Ge.skinning===!0||re.isInstancedMesh&&Ge.instancingColor===!0&&re.instanceColor===null||re.isInstancedMesh&&Ge.instancingColor===!1&&re.instanceColor!==null||re.isInstancedMesh&&Ge.instancingMorph===!0&&re.morphTexture===null||re.isInstancedMesh&&Ge.instancingMorph===!1&&re.morphTexture!==null||Ge.envMap!==ke||se.fog===!0&&Ge.fog!==Ie||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==$e.numPlanes||Ge.numIntersection!==$e.numIntersection)||Ge.vertexAlphas!==tt||Ge.vertexTangents!==dt||Ge.morphTargets!==et||Ge.morphNormals!==Pt||Ge.morphColors!==sn||Ge.toneMapping!==Jt||Ge.morphTargetsCount!==kt||!!Ge.lightProbeGrid!=N.state.lightProbeGridArray.length>0)&&(yt=!0):(yt=!0,Ge.__version=se.version);let An=Ge.currentProgram;yt===!0&&(An=Ha(se,j,re),Z&&se.isNodeMaterial&&Z.onUpdateProgram(se,An,Ge));let ri=!1,Li=!1,oi=!1;const Xt=An.getUniforms(),rn=Ge.uniforms;if(E.useProgram(An.program)&&(ri=!0,Li=!0,oi=!0),se.id!==me&&(me=se.id,Li=!0),Ge.needsLights){const Ht=Es(N.state.lightProbeGridArray,re);Ge.lightProbeGrid!==Ht&&(Ge.lightProbeGrid=Ht,Li=!0)}if(ri||Se!==A){E.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Xt.setValue(X,"projectionMatrix",A.projectionMatrix),Xt.setValue(X,"viewMatrix",A.matrixWorldInverse);const Wi=Xt.map.cameraPosition;Wi!==void 0&&Wi.setValue(X,mt.setFromMatrixPosition(A.matrixWorld)),L.logarithmicDepthBuffer&&Xt.setValue(X,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(se.isMeshPhongMaterial||se.isMeshToonMaterial||se.isMeshLambertMaterial||se.isMeshBasicMaterial||se.isMeshStandardMaterial||se.isShaderMaterial)&&Xt.setValue(X,"isOrthographic",A.isOrthographicCamera===!0),Se!==A&&(Se=A,Li=!0,oi=!0)}if(Ge.needsLights&&(Hn.state.directionalShadowMap.length>0&&Xt.setValue(X,"directionalShadowMap",Hn.state.directionalShadowMap,fe),Hn.state.spotShadowMap.length>0&&Xt.setValue(X,"spotShadowMap",Hn.state.spotShadowMap,fe),Hn.state.pointShadowMap.length>0&&Xt.setValue(X,"pointShadowMap",Hn.state.pointShadowMap,fe)),re.isSkinnedMesh){Xt.setOptional(X,re,"bindMatrix"),Xt.setOptional(X,re,"bindMatrixInverse");const Ht=re.skeleton;Ht&&(Ht.boneTexture===null&&Ht.computeBoneTexture(),Xt.setValue(X,"boneTexture",Ht.boneTexture,fe))}re.isBatchedMesh&&(Xt.setOptional(X,re,"batchingTexture"),Xt.setValue(X,"batchingTexture",re._matricesTexture,fe),Xt.setOptional(X,re,"batchingIdTexture"),Xt.setValue(X,"batchingIdTexture",re._indirectTexture,fe),Xt.setOptional(X,re,"batchingColorTexture"),re._colorsTexture!==null&&Xt.setValue(X,"batchingColorTexture",re._colorsTexture,fe));const Ui=le.morphAttributes;if((Ui.position!==void 0||Ui.normal!==void 0||Ui.color!==void 0)&&W.update(re,le,An),(Li||Ge.receiveShadow!==re.receiveShadow)&&(Ge.receiveShadow=re.receiveShadow,Xt.setValue(X,"receiveShadow",re.receiveShadow)),(se.isMeshStandardMaterial||se.isMeshLambertMaterial||se.isMeshPhongMaterial)&&se.envMap===null&&j.environment!==null&&(rn.envMapIntensity.value=j.environmentIntensity),rn.dfgLUT!==void 0&&(rn.dfgLUT.value=E2()),Li){if(Xt.setValue(X,"toneMappingExposure",q.toneMappingExposure),Ge.needsLights&&_n(rn,oi),Ie&&se.fog===!0&&Be.refreshFogUniforms(rn,Ie),Be.refreshMaterialUniforms(rn,se,Ee,ye,N.state.transmissionRenderTarget[A.id]),Ge.needsLights&&Ge.lightProbeGrid){const Ht=Ge.lightProbeGrid;rn.probesSH.value=Ht.texture,rn.probesMin.value.copy(Ht.boundingBox.min),rn.probesMax.value.copy(Ht.boundingBox.max),rn.probesResolution.value.copy(Ht.resolution)}iu.upload(X,ra(Ge),rn,fe)}if(se.isShaderMaterial&&se.uniformsNeedUpdate===!0&&(iu.upload(X,ra(Ge),rn,fe),se.uniformsNeedUpdate=!1),se.isSpriteMaterial&&Xt.setValue(X,"center",re.center),Xt.setValue(X,"modelViewMatrix",re.modelViewMatrix),Xt.setValue(X,"normalMatrix",re.normalMatrix),Xt.setValue(X,"modelMatrix",re.matrixWorld),se.uniformsGroups!==void 0){const Ht=se.uniformsGroups;for(let Wi=0,Va=Ht.length;Wi<Va;Wi++){const bs=Ht[Wi];be.update(bs,An),be.bind(bs,An)}}return An}function _n(A,j){A.ambientLightColor.needsUpdate=j,A.lightProbe.needsUpdate=j,A.directionalLights.needsUpdate=j,A.directionalLightShadows.needsUpdate=j,A.pointLights.needsUpdate=j,A.pointLightShadows.needsUpdate=j,A.spotLights.needsUpdate=j,A.spotLightShadows.needsUpdate=j,A.rectAreaLights.needsUpdate=j,A.hemisphereLights.needsUpdate=j}function Sl(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return $},this.setRenderTargetTextures=function(A,j,le){const se=te.get(A);se.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,se.__autoAllocateDepthBuffer===!1&&(se.__useRenderToTexture=!1),te.get(A.texture).__webglTexture=j,te.get(A.depthTexture).__webglTexture=se.__autoAllocateDepthBuffer?void 0:le,se.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,j){const le=te.get(A);le.__webglFramebuffer=j,le.__useDefaultFramebuffer=j===void 0},this.setRenderTarget=function(A,j=0,le=0){$=A,F=j,H=le;let se=null,re=!1,Ie=!1;if(A){const Oe=te.get(A);if(Oe.__useDefaultFramebuffer!==void 0){E.bindFramebuffer(X.FRAMEBUFFER,Oe.__webglFramebuffer),U.copy(A.viewport),K.copy(A.scissor),xe=A.scissorTest,E.viewport(U),E.scissor(K),E.setScissorTest(xe),me=-1;return}else if(Oe.__webglFramebuffer===void 0)fe.setupRenderTarget(A);else if(Oe.__hasExternalTextures)fe.rebindTextures(A,te.get(A.texture).__webglTexture,te.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const tt=A.depthTexture;if(Oe.__boundDepthTexture!==tt){if(tt!==null&&te.has(tt)&&(A.width!==tt.image.width||A.height!==tt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");fe.setupDepthRenderbuffer(A)}}const We=A.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(Ie=!0);const ke=te.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(ke[j])?se=ke[j][le]:se=ke[j],re=!0):A.samples>0&&fe.useMultisampledRTT(A)===!1?se=te.get(A).__webglMultisampledFramebuffer:Array.isArray(ke)?se=ke[le]:se=ke,U.copy(A.viewport),K.copy(A.scissor),xe=A.scissorTest}else U.copy(Je).multiplyScalar(Ee).floor(),K.copy(Zt).multiplyScalar(Ee).floor(),xe=ut;if(le!==0&&(se=de),E.bindFramebuffer(X.FRAMEBUFFER,se)&&E.drawBuffers(A,se),E.viewport(U),E.scissor(K),E.setScissorTest(xe),re){const Oe=te.get(A.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+j,Oe.__webglTexture,le)}else if(Ie){const Oe=j;for(let We=0;We<A.textures.length;We++){const ke=te.get(A.textures[We]);X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0+We,ke.__webglTexture,le,Oe)}}else if(A!==null&&le!==0){const Oe=te.get(A.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,Oe.__webglTexture,le)}me=-1},this.readRenderTargetPixels=function(A,j,le,se,re,Ie,Ve,Oe=0){if(!(A&&A.isWebGLRenderTarget)){Ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let We=te.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ve!==void 0&&(We=We[Ve]),We){E.bindFramebuffer(X.FRAMEBUFFER,We);try{const ke=A.textures[Oe],tt=ke.format,dt=ke.type;if(A.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+Oe),!L.textureFormatReadable(tt)){Ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!L.textureTypeReadable(dt)){Ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=A.width-se&&le>=0&&le<=A.height-re&&X.readPixels(j,le,se,re,we.convert(tt),we.convert(dt),Ie)}finally{const ke=$!==null?te.get($).__webglFramebuffer:null;E.bindFramebuffer(X.FRAMEBUFFER,ke)}}},this.readRenderTargetPixelsAsync=async function(A,j,le,se,re,Ie,Ve,Oe=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let We=te.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ve!==void 0&&(We=We[Ve]),We)if(j>=0&&j<=A.width-se&&le>=0&&le<=A.height-re){E.bindFramebuffer(X.FRAMEBUFFER,We);const ke=A.textures[Oe],tt=ke.format,dt=ke.type;if(A.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+Oe),!L.textureFormatReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!L.textureTypeReadable(dt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const et=X.createBuffer();X.bindBuffer(X.PIXEL_PACK_BUFFER,et),X.bufferData(X.PIXEL_PACK_BUFFER,Ie.byteLength,X.STREAM_READ),X.readPixels(j,le,se,re,we.convert(tt),we.convert(dt),0);const Pt=$!==null?te.get($).__webglFramebuffer:null;E.bindFramebuffer(X.FRAMEBUFFER,Pt);const sn=X.fenceSync(X.SYNC_GPU_COMMANDS_COMPLETE,0);return X.flush(),await wy(X,sn,4),X.bindBuffer(X.PIXEL_PACK_BUFFER,et),X.getBufferSubData(X.PIXEL_PACK_BUFFER,0,Ie),X.deleteBuffer(et),X.deleteSync(sn),Ie}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,j=null,le=0){const se=Math.pow(2,-le),re=Math.floor(A.image.width*se),Ie=Math.floor(A.image.height*se),Ve=j!==null?j.x:0,Oe=j!==null?j.y:0;fe.setTexture2D(A,0),X.copyTexSubImage2D(X.TEXTURE_2D,le,0,0,Ve,Oe,re,Ie),E.unbindTexture()},this.copyTextureToTexture=function(A,j,le=null,se=null,re=0,Ie=0){let Ve,Oe,We,ke,tt,dt,et,Pt,sn;const Jt=A.isCompressedTexture?A.mipmaps[Ie]:A.image;if(le!==null)Ve=le.max.x-le.min.x,Oe=le.max.y-le.min.y,We=le.isBox3?le.max.z-le.min.z:1,ke=le.min.x,tt=le.min.y,dt=le.isBox3?le.min.z:0;else{const rn=Math.pow(2,-re);Ve=Math.floor(Jt.width*rn),Oe=Math.floor(Jt.height*rn),A.isDataArrayTexture?We=Jt.depth:A.isData3DTexture?We=Math.floor(Jt.depth*rn):We=1,ke=0,tt=0,dt=0}se!==null?(et=se.x,Pt=se.y,sn=se.z):(et=0,Pt=0,sn=0);const Vt=we.convert(j.format),kt=we.convert(j.type);let Ge;j.isData3DTexture?(fe.setTexture3D(j,0),Ge=X.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(fe.setTexture2DArray(j,0),Ge=X.TEXTURE_2D_ARRAY):(fe.setTexture2D(j,0),Ge=X.TEXTURE_2D),E.activeTexture(X.TEXTURE0),E.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,j.flipY),E.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),E.pixelStorei(X.UNPACK_ALIGNMENT,j.unpackAlignment);const Hn=E.getParameter(X.UNPACK_ROW_LENGTH),yt=E.getParameter(X.UNPACK_IMAGE_HEIGHT),An=E.getParameter(X.UNPACK_SKIP_PIXELS),ri=E.getParameter(X.UNPACK_SKIP_ROWS),Li=E.getParameter(X.UNPACK_SKIP_IMAGES);E.pixelStorei(X.UNPACK_ROW_LENGTH,Jt.width),E.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Jt.height),E.pixelStorei(X.UNPACK_SKIP_PIXELS,ke),E.pixelStorei(X.UNPACK_SKIP_ROWS,tt),E.pixelStorei(X.UNPACK_SKIP_IMAGES,dt);const oi=A.isDataArrayTexture||A.isData3DTexture,Xt=j.isDataArrayTexture||j.isData3DTexture;if(A.isDepthTexture){const rn=te.get(A),Ui=te.get(j),Ht=te.get(rn.__renderTarget),Wi=te.get(Ui.__renderTarget);E.bindFramebuffer(X.READ_FRAMEBUFFER,Ht.__webglFramebuffer),E.bindFramebuffer(X.DRAW_FRAMEBUFFER,Wi.__webglFramebuffer);for(let Va=0;Va<We;Va++)oi&&(X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,te.get(A).__webglTexture,re,dt+Va),X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,te.get(j).__webglTexture,Ie,sn+Va)),X.blitFramebuffer(ke,tt,Ve,Oe,et,Pt,Ve,Oe,X.DEPTH_BUFFER_BIT,X.NEAREST);E.bindFramebuffer(X.READ_FRAMEBUFFER,null),E.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else if(re!==0||A.isRenderTargetTexture||te.has(A)){const rn=te.get(A),Ui=te.get(j);E.bindFramebuffer(X.READ_FRAMEBUFFER,oe),E.bindFramebuffer(X.DRAW_FRAMEBUFFER,Y);for(let Ht=0;Ht<We;Ht++)oi?X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,rn.__webglTexture,re,dt+Ht):X.framebufferTexture2D(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,rn.__webglTexture,re),Xt?X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,Ui.__webglTexture,Ie,sn+Ht):X.framebufferTexture2D(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,Ui.__webglTexture,Ie),re!==0?X.blitFramebuffer(ke,tt,Ve,Oe,et,Pt,Ve,Oe,X.COLOR_BUFFER_BIT,X.NEAREST):Xt?X.copyTexSubImage3D(Ge,Ie,et,Pt,sn+Ht,ke,tt,Ve,Oe):X.copyTexSubImage2D(Ge,Ie,et,Pt,ke,tt,Ve,Oe);E.bindFramebuffer(X.READ_FRAMEBUFFER,null),E.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else Xt?A.isDataTexture||A.isData3DTexture?X.texSubImage3D(Ge,Ie,et,Pt,sn,Ve,Oe,We,Vt,kt,Jt.data):j.isCompressedArrayTexture?X.compressedTexSubImage3D(Ge,Ie,et,Pt,sn,Ve,Oe,We,Vt,Jt.data):X.texSubImage3D(Ge,Ie,et,Pt,sn,Ve,Oe,We,Vt,kt,Jt):A.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,Ie,et,Pt,Ve,Oe,Vt,kt,Jt.data):A.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,Ie,et,Pt,Jt.width,Jt.height,Vt,Jt.data):X.texSubImage2D(X.TEXTURE_2D,Ie,et,Pt,Ve,Oe,Vt,kt,Jt);E.pixelStorei(X.UNPACK_ROW_LENGTH,Hn),E.pixelStorei(X.UNPACK_IMAGE_HEIGHT,yt),E.pixelStorei(X.UNPACK_SKIP_PIXELS,An),E.pixelStorei(X.UNPACK_SKIP_ROWS,ri),E.pixelStorei(X.UNPACK_SKIP_IMAGES,Li),Ie===0&&j.generateMipmaps&&X.generateMipmap(Ge),E.unbindTexture()},this.initRenderTarget=function(A){te.get(A).__webglFramebuffer===void 0&&fe.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?fe.setTextureCube(A,0):A.isData3DTexture?fe.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?fe.setTexture2DArray(A,0):fe.setTexture2D(A,0),E.unbindTexture()},this.resetState=function(){F=0,H=0,$=null,E.reset(),Pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ta}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Ct._getDrawingBufferColorSpace(e),i.unpackColorSpace=Ct._getUnpackColorSpace()}}const T2="/assets/Reckk-RegularItalic-DLM8ilig.ttf",A2="/assets/Reckk-MediumItalic-D_uyfX4p.otf",R2="/assets/CXLMediumItalic-DYSp-DoC.otf",C2=4,w2=5,Na={fleet:"MAEX",name:"SharpeShark",version:"v1",role:"Executor",didShort:"0xf8a2…6035"};function _S(a){return["discover","copy","supervise","isolate"][a]??"discover"}function D2(a){return _S(a)}function N2(a,e,i){const r=e.split(/\s+/),o=[];let c="";for(const u of r){const h=c?`${c} ${u}`:u;a.measureText(h).width<=i?c=h:(c&&o.push(c),c=u)}return c&&o.push(c),o}function L2(a,e){const r=e<520?300:400,o=Math.round(r*a),c=Math.round(o*w2/C2);return{W:o,H:c}}function vS(a,e,i,r,o,c){const u=Math.min(c,r/2,o/2);a.beginPath(),a.moveTo(e+u,i),a.arcTo(e+r,i,e+r,i+o,u),a.arcTo(e+r,i+o,e,i+o,u),a.arcTo(e,i+o,e,i,u),a.arcTo(e,i,e+r,i,u),a.closePath()}function an(a,e,i,r,o,c,u){vS(a,e,i,r,o,c),a.fillStyle=u,a.fill()}function fn(a,e,i,r,o,c,u,h){vS(a,e,i,r,o,c),a.strokeStyle=u,a.lineWidth=h,a.stroke()}function _u(a,e,i,r,o,c){an(a,e,i,r,o,c,"#0c0e12"),fn(a,e,i,r,o,c,"rgba(255,255,255,0.12)",Math.max(1,c*.12))}function vu(a,e,i,r,o,c,u){const h=11*u;a.fillStyle="#c8f5a8",a.font=`700 ${h}px "DM Mono", ui-monospace, monospace`,a.textAlign="left",a.fillText(c,e+o,i+o+h);const m=22*u,p=e+r-o-m,g=i+o-2*u;return fn(a,p,g,m,m,4*u,"rgba(255,255,255,0.14)",1),a.strokeStyle="rgba(255,255,255,0.55)",a.lineWidth=Math.max(1,1.25*u),a.beginPath(),a.moveTo(p+6*u,g+6*u),a.lineTo(p+m-6*u,g+m-6*u),a.moveTo(p+m-6*u,g+6*u),a.lineTo(p+6*u,g+m-6*u),a.stroke(),i+o+h+10*u}function SS(a,e,i,r,o,c,u,h){const m=28*h,p=(r-o*2)/2,g=10*h;a.font=`700 ${g}px "DM Mono", ui-monospace, monospace`;for(let v=0;v<2;v++){const _=e+o+v*p,x=v===u;a.fillStyle=x?"rgba(255,255,255,0.92)":"rgba(255,255,255,0.38)",a.textAlign="center",a.fillText(c[v],_+p/2,i+14*h),x&&(a.fillStyle="#c8f5a8",a.fillRect(_+4*h,i+m-2*h,p-8*h,2*h))}return a.textAlign="left",a.strokeStyle="rgba(255,255,255,0.08)",a.lineWidth=1,a.beginPath(),a.moveTo(e+o,i+m),a.lineTo(e+r-o,i+m),a.stroke(),i+m+10*h}function U2(a,e,i,r,o,c,u,h,m){const p=10*m,g=22*m;a.fillStyle="rgba(255,255,255,0.92)",a.font=`700 ${p}px "DM Mono", ui-monospace, monospace`,a.textAlign="left",a.fillText(c,e+o,i+14*m);const v=`${String(u).padStart(2,"0")} / ${String(h).padStart(2,"0")}`;a.fillStyle="rgba(255,255,255,0.38)",a.font=`700 ${8*m}px "DM Mono", ui-monospace, monospace`,a.textAlign="right",a.fillText(v,e+r-o,i+14*m),a.textAlign="left",a.strokeStyle="rgba(255,255,255,0.08)",a.lineWidth=1,a.beginPath(),a.moveTo(e+o,i+g),a.lineTo(e+r-o,i+g),a.stroke(),a.fillStyle="#c8f5a8";const _=Math.min(72*m,r*.28);return a.fillRect(e+o,i+g-2*m,_,2*m),i+g+10*m}function O2(a,e,i,r,o,c,u){const h=9*u;a.fillStyle="rgba(255,255,255,0.38)",a.font=`700 ${h}px "DM Mono", ui-monospace, monospace`,a.textAlign="left",a.fillText(o,e,i+h);const m=i+h+6*u,p=34*u;an(a,e,m,r,p,6*u,"rgba(255,255,255,0.04)"),fn(a,e,m,r,p,6*u,"rgba(255,255,255,0.12)",1),a.fillStyle=c.startsWith("Select")||c==="0x..."?"rgba(255,255,255,0.35)":"rgba(255,255,255,0.88)",a.font=`500 ${11*u}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText(c,e+10*u,m+p*.62),a.strokeStyle="rgba(255,255,255,0.4)",a.lineWidth=Math.max(1,1.2*u);const g=e+r-14*u,v=m+p/2;return a.beginPath(),a.moveTo(g-4*u,v-2*u),a.lineTo(g,v+3*u),a.lineTo(g+4*u,v-2*u),a.stroke(),h+6*u+p}function P2(a,e,i,r,o){const c=9*o;a.fillStyle="rgba(255,255,255,0.38)",a.font=`700 ${c}px "DM Mono", ui-monospace, monospace`,a.textAlign="left",a.fillText("AMOUNT",e,i+c),a.textAlign="right",a.fillStyle="rgba(255,255,255,0.45)",a.fillText("AVAILABLE 5,000.00",e+r,i+c),a.textAlign="left";const u=i+c+6*o,h=44*o;an(a,e,u,r,h,8*o,"#050508"),fn(a,e,u,r,h,8*o,"rgba(255,255,255,0.1)",1),a.fillStyle="rgba(255,255,255,0.92)",a.font=`700 ${22*o}px "DM Mono", ui-monospace, monospace`,a.fillText("0.00",e+12*o,u+h*.68);const m=u+h+10*o;return a.strokeStyle="rgba(255,255,255,0.12)",a.lineWidth=Math.max(2,2*o),a.beginPath(),a.moveTo(e,m),a.lineTo(e+r,m),a.stroke(),an(a,e,m-5*o,14*o,10*o,5*o,"rgba(255,255,255,0.85)"),a.fillStyle="rgba(255,255,255,0.35)",a.font=`500 ${8*o}px "DM Mono", ui-monospace, monospace`,a.fillText("0.01",e,m+14*o),a.textAlign="right",a.fillText("5,000.00",e+r,m+14*o),a.textAlign="left",c+6*o+h+10*o+16*o}function I2(a,e,i,r,o,c){a.strokeStyle="rgba(255,255,255,0.08)",a.lineWidth=1,a.beginPath(),a.moveTo(e,i),a.lineTo(e+r,i),a.stroke();const u=i+10*o,h=36*o,m=72*o;fn(a,e,u,m,h,6*o,"rgba(255,255,255,0.14)",1),a.fillStyle="rgba(255,255,255,0.55)",a.font=`700 ${9*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText("CANCEL",e+m/2,u+h*.62);const p=e+m+8*o,g=r-m-8*o;return an(a,p,u,g,h,6*o,"rgba(255,255,255,0.06)"),fn(a,p,u,g,h,6*o,"rgba(255,255,255,0.1)",1),a.fillStyle="#c8f5a8",a.fillRect(p,u+4*o,3*o,h-8*o),a.fillStyle="rgba(255,255,255,0.55)",a.font=`700 ${8.5*o}px "DM Mono", ui-monospace, monospace`,a.fillText(c,p+g/2+2*o,u+h*.62),a.textAlign="left",10*o+h}function xp(a,e,i,r,o){const c=44*o;an(a,e,i,r,c,8*o,"rgba(200,245,168,0.08)"),fn(a,e,i,r,c,8*o,"rgba(200,245,168,0.22)",1);const u=28*o;return an(a,e+8*o,i+(c-u)/2,u,u,4*o,"rgba(200,245,168,0.14)"),a.fillStyle="#c8f5a8",a.font=`700 ${10*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText("SS",e+8*o+u/2,i+c*.58),a.textAlign="left",a.fillStyle="rgba(255,255,255,0.92)",a.font=`700 ${11*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText(Na.name,e+8*o+u+8*o,i+16*o),a.fillStyle="rgba(255,255,255,0.42)",a.font=`500 ${9*o}px "DM Mono", ui-monospace, monospace`,a.fillText(`${Na.role} · ${Na.didShort}`,e+8*o+u+8*o,i+32*o),c}function F2(a,e,i,r,o){const c=Math.min(r*190/316,r*.58),u=12*o,h=8*o,m=a.createLinearGradient(e,i+c,e+r,i);m.addColorStop(0,"#050508"),m.addColorStop(1,"rgba(200,245,168,0.14)"),an(a,e,i,r,c,h,m),fn(a,e,i,r,c,h,"rgba(255,255,255,0.14)",Math.max(1,1.25*o)),fn(a,e+2.5*o,i+2.5*o,r-5*o,c-5*o,h-1.5*o,"rgba(200,245,168,0.35)",Math.max(1,o)),a.fillStyle="rgba(255,255,255,0.92)",a.font=`700 ${11*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText(Na.fleet,e+u,i+u+10*o),a.fillStyle="#c8f5a8",a.beginPath(),a.arc(e+r-u-7*o,i+u+5*o,6*o,0,Math.PI*2),a.fill(),a.fillStyle="#0a0a0c",a.font=`700 ${8*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText("✓",e+r-u-7*o,i+u+8*o),a.textAlign="left";const p=i+c-u-2*o;a.fillStyle="rgba(255,255,255,0.92)",a.font=`700 ${10*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText(Na.name.toUpperCase(),e+u,p-24*o),a.fillStyle="rgba(255,255,255,0.45)",a.font=`500 ${9*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText(`${Na.role} · ${Na.version}`,e+u,p-10*o),a.fillStyle="#c8f5a8",a.font=`700 ${10*o}px "DM Mono", ui-monospace, monospace`,a.fillText(Na.didShort,e+u,p);const g=28*o;return an(a,e+r-u-g,i+c-u-g,g,g,4*o,"rgba(200,245,168,0.14)"),fn(a,e+r-u-g,i+c-u-g,g,g,4*o,"rgba(200,245,168,0.28)",1),a.fillStyle="#c8f5a8",a.font=`700 ${11*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText("SS",e+r-u-g/2,i+c-u-g*.35),a.textAlign="left",c}function B2(a,e,i,r,o){const c=Math.min(r*190/316,r*.58),u=10*o,h=8*o,m=a.createLinearGradient(e,i,e+r,i+c);m.addColorStop(0,"#0a0c10"),m.addColorStop(.55,"#12161c"),m.addColorStop(1,"rgba(200,245,168,0.18)"),an(a,e,i,r,c,h,m),fn(a,e,i,r,c,h,"rgba(255,255,255,0.14)",Math.max(1,1.25*o)),a.fillStyle="rgba(255,255,255,0.92)",a.font=`700 ${10*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText("Morpheum.",e+u,i+u+10*o),a.strokeStyle="rgba(255,255,255,0.45)",a.lineWidth=Math.max(1,o);for(let p=0;p<3;p++){const g=5*o+p*3.5*o,v=4*o+p*2.5*o;a.beginPath(),a.ellipse(e+r-u-4*o,i+u+8*o,g,v,-.4,-.2,1.2),a.stroke()}return a.fillStyle="rgba(255,255,255,0.88)",a.font=`700 ${9*o}px "DM Mono", ui-monospace, monospace`,a.fillText("5678  ····  ····  7890",e+u,i+c*.52),a.fillStyle="rgba(255,255,255,0.92)",a.font=`700 ${8*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText(Na.name.toUpperCase(),e+u,i+c-u-2*o),a.textAlign="right",a.fillStyle="rgba(255,255,255,0.55)",a.font=`700 ${8*o}px "DM Mono", ui-monospace, monospace`,a.fillText("12/28",e+r-u,i+c-u-2*o),a.textAlign="left",c}function z2(a,e,i,r,o,c=25){const u=9*o;a.fillStyle="rgba(255,255,255,0.38)",a.font=`700 ${u}px "DM Mono", ui-monospace, monospace`,a.textAlign="left",a.fillText("MIRROR SIZE",e,i+u),a.textAlign="right",a.fillStyle="#c8f5a8",a.fillText(`${c}%`,e+r,i+u),a.textAlign="left";const h=i+u+12*o,m=Math.max(4,5*o);an(a,e,h,r,m,m/2,"rgba(255,255,255,0.1)");const p=Math.max(m,r*c/100);an(a,e,h,p,m,m/2,"rgba(200,245,168,0.75)");const g=7*o;return a.fillStyle="#f4f6f0",a.beginPath(),a.arc(e+p,h+m/2,g,0,Math.PI*2),a.fill(),a.strokeStyle="rgba(200,245,168,0.55)",a.lineWidth=Math.max(1,o),a.stroke(),a.fillStyle="rgba(255,255,255,0.35)",a.font=`500 ${7.5*o}px "DM Mono", ui-monospace, monospace`,a.fillText("5%",e,h+m+14*o),a.textAlign="right",a.fillText("100%",e+r,h+m+14*o),a.textAlign="left",u+12*o+m+16*o}function H2(a,e,i,r,o){const c=9*o;a.fillStyle="rgba(255,255,255,0.38)",a.font=`700 ${c}px "DM Mono", ui-monospace, monospace`,a.fillText("AGENTIC PROTECTION",e,i+c);const u=5*o,h=(r-u*2)/3,m=52*o,p=i+c+8*o;return[{label:"Manual",tone:"rgba(255,255,255,0.12)",active:!1},{label:"Guarded",tone:"rgba(234,179,8,0.55)",active:!0},{label:"High",tone:"rgba(255,71,87,0.35)",active:!1}].forEach((v,_)=>{const x=e+_*(h+u);an(a,x,p,h,m,6*o,"rgba(255,255,255,0.04)"),fn(a,x,p,h,m,6*o,v.active?v.tone:"rgba(255,255,255,0.1)",v.active?Math.max(1.5,1.5*o):1),v.active&&(a.fillStyle="rgba(234,179,8,0.12)",a.fillRect(x+1,p+1,3*o,m-2)),a.fillStyle=v.active?"rgba(255,255,255,0.92)":"rgba(255,255,255,0.55)",a.font=`700 ${9*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.textAlign="center",a.fillText(v.label,x+h/2,p+18*o),a.fillStyle="rgba(255,255,255,0.38)",a.font=`400 ${7*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`;const b=v.label==="Guarded"?"safe default":v.label==="Manual"?"signals":"silent";a.fillText(b,x+h/2,p+34*o)}),a.textAlign="left",c+8*o+m}function G2(a,e,i,r,o,c="SLIDE TO START COPY"){const u=40*o;an(a,e,i,r,u,8*o,"rgba(255,255,255,0.05)"),fn(a,e,i,r,u,8*o,"rgba(255,255,255,0.12)",1);const h=.22,m=4*o,p=u-m*2,g=r-m*2-p;return an(a,e+m,i+m,p+g*h,p,p/2,"rgba(200,245,168,0.18)"),an(a,e+m,i+m,p,p,p/2,"rgba(200,245,168,0.85)"),a.fillStyle="#0a0a0c",a.font=`700 ${12*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText("›",e+m+p/2,i+u*.62),a.fillStyle="rgba(255,255,255,0.5)",a.font=`700 ${8*o}px "DM Mono", ui-monospace, monospace`,a.fillText(c,e+r/2+p*.15,i+u*.62),a.textAlign="left",u}const ll=2,eo={sharpe:"2.41",roi:"+38.2%",riskScore:"72",reputation:"84",receipts:[{action:"Close BTC long",pnl:"+103.09"},{action:"Open ETH long",pnl:null},{action:"Close SOL short",pnl:"+41.20"}]};function vv(a,e,i,r,o,c){const u=6*c,h=o.length,m=(r-u*(h-1))/h,p=36*c;return o.forEach(([g,v],_)=>{const x=e+_*(m+u);an(a,x,i,m,p,6*c,"rgba(255,255,255,0.04)"),fn(a,x,i,m,p,6*c,"rgba(255,255,255,0.1)",1),a.fillStyle="rgba(255,255,255,0.4)",a.font=`700 ${7*c}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText(g,x+m/2,i+12*c),a.fillStyle="#c8f5a8",a.font=`700 ${11*c}px "DM Mono", ui-monospace, monospace`,a.fillText(v,x+m/2,i+26*c)}),a.textAlign="left",p}function V2(a,e,i,r,o){const c=[{label:"Verified",brand:!0},{label:"Receipt"},{label:"Risk",value:eo.riskScore},{label:"Rep",value:eo.reputation}],u=4*o,h=22*o,m=5*o;let p=e;a.font=`700 ${6.5*o}px "DM Mono", ui-monospace, monospace`;for(const g of c){const v=a.measureText(g.label.toUpperCase()).width,_=g.value?a.measureText(g.value).width+3*o:0,x=m*2+6*o+v+_;if(p+x>e+r)break;const b=g.brand?"rgba(200,245,168,0.12)":"rgba(255,255,255,0.04)",w=g.brand?"rgba(200,245,168,0.35)":"rgba(255,255,255,0.12)";an(a,p,i,x,h,4*o,b),fn(a,p,i,x,h,4*o,w,1);const y=2*o;a.beginPath(),a.arc(p+m+y,i+h/2,y,0,Math.PI*2),a.fillStyle=g.brand?"#c8f5a8":"rgba(255,255,255,0.35)",a.fill();let M=p+m+y*2+4*o;a.fillStyle=g.brand?"#c8f5a8":"rgba(255,255,255,0.55)",a.textAlign="left",a.fillText(g.label.toUpperCase(),M,i+h*.68),M+=v+3*o,g.value&&(a.fillStyle="rgba(255,255,255,0.92)",a.fillText(g.value,M,i+h*.68)),p+=x+u}return a.textAlign="left",h}function k2(a,e,i,r,o){const c=eo.receipts,u=22*o,h=14*o+c.length*u;return an(a,e,i,r,h,6*o,"rgba(255,255,255,0.03)"),fn(a,e,i,r,h,6*o,"rgba(255,255,255,0.08)",1),a.fillStyle="rgba(255,255,255,0.4)",a.font=`700 ${6.5*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="left",a.fillText("RECEIPTS",e+8*o,i+10*o),c.forEach((m,p)=>{const g=i+14*o+p*u;a.fillStyle="rgba(255,255,255,0.72)",a.font=`500 ${8*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="left",a.fillText(m.action,e+8*o,g+u*.62),a.textAlign="right",m.pnl?(a.fillStyle="#c8f5a8",a.font=`700 ${8*o}px "DM Mono", ui-monospace, monospace`,a.fillText(m.pnl,e+r-8*o,g+u*.62)):(a.fillStyle="rgba(255,255,255,0.35)",a.fillText("—",e+r-8*o,g+u*.62))}),a.textAlign="left",h}function X2(a,e,i,r,o){const c=Math.min(r*150/316,r*.48),u=12*o,h=8*o,m=a.createLinearGradient(e,i+c,e+r,i);m.addColorStop(0,"#050508"),m.addColorStop(1,"rgba(200,245,168,0.14)"),an(a,e,i,r,c,h,m),fn(a,e,i,r,c,h,"rgba(255,255,255,0.14)",Math.max(1,1.25*o)),fn(a,e+2.5*o,i+2.5*o,r-5*o,c-5*o,h-1.5*o,"rgba(200,245,168,0.35)",Math.max(1,o)),a.fillStyle="rgba(255,255,255,0.92)",a.font=`700 ${11*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText("MAEX",e+u,i+u+10*o);const p=40*o,g=16*o,v=e+r-u-p,_=i+u-1*o;return an(a,v,_,p,g,8*o,"rgba(200,245,168,0.14)"),fn(a,v,_,p,g,8*o,"rgba(200,245,168,0.28)",1),a.fillStyle="#c8f5a8",a.font=`700 ${8*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText("LIVE",v+p/2,_+11*o),a.textAlign="left",a.fillStyle="rgba(255,255,255,0.92)",a.font=`700 ${14*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText("MAEX Core",e+u,i+u+36*o),a.fillStyle="rgba(255,255,255,0.45)",a.font=`500 ${9*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText("Curated agent basket · 4 agents",e+u,i+u+52*o),a.fillStyle="#c8f5a8",a.font=`700 ${18*o}px "DM Mono", ui-monospace, monospace`,a.fillText("+12.8%",e+u,i+c-u-4*o),a.fillStyle="rgba(255,255,255,0.4)",a.font=`700 ${8*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="right",a.fillText("30D RETURN",e+r-u,i+c-u-8*o),a.textAlign="left",c}function W2(a,e,i,r,o){const c=[["SharpeShark","42%","+38%"],["SortinoSloth","33%","+21%"],["FundingFox","25%","−4%"]],u=26*o,h=c.length*u;return an(a,e,i,r,h,6*o,"rgba(255,255,255,0.03)"),fn(a,e,i,r,h,6*o,"rgba(255,255,255,0.08)",1),c.forEach(([m,p,g],v)=>{const _=i+v*u;v>0&&(a.strokeStyle="rgba(255,255,255,0.06)",a.lineWidth=1,a.beginPath(),a.moveTo(e+8*o,_),a.lineTo(e+r-8*o,_),a.stroke()),a.fillStyle="rgba(255,255,255,0.85)",a.font=`600 ${9*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.textAlign="left",a.fillText(m,e+10*o,_+u*.62),a.fillStyle="rgba(255,255,255,0.4)",a.font=`700 ${8*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText(p,e+r*.58,_+u*.62);const x=!g.startsWith("−")&&!g.startsWith("-");a.fillStyle=x?"#c8f5a8":"rgba(255,120,120,0.85)",a.textAlign="right",a.fillText(g,e+r-10*o,_+u*.62)}),a.textAlign="left",h}function q2(a,e,i,r,o,c=0){const u=r/300,h=12*u,m=10*u,p=(c%ll+ll)%ll,g=[{header:"AGENT PROOF",segment:"AGENTS"},{header:"INDEX PROOF",segment:"INDICES"}][p];_u(a,e,i,r,o,m);let v=vu(a,e,i,r,h,g.header,u);v=U2(a,e,v,r,h,g.segment,p+1,ll,u);const _=i+o-h;if(p===0){v+=xp(a,e+h,v,r-h*2,u)+8*u,v+22*u<=_&&(v+=V2(a,e+h,v,r-h*2,u)+8*u);const b=[["SHARPE",eo.sharpe],["ROI",eo.roi],["RISK",eo.riskScore]];v+36*u<=_&&(v+=vv(a,e+h,v,r-h*2,b,u)+8*u),v+70*u<=_&&k2(a,e+h,v,r-h*2,u);return}v+=X2(a,e+h,v,r-h*2,u)+8*u,v+78*u<=_&&(v+=W2(a,e+h,v,r-h*2,u)+8*u);const x=[["RETURN","+12.8%"],["RISK","58"],["AGENTS","4"]];v+36*u<=_&&vv(a,e+h,v,r-h*2,x,u)}function Y2(a,e,i,r,o,c=0){const u=r/300,h=12*u,m=10*u;_u(a,e,i,r,o,m);let p=vu(a,e,i,r,h,"COPY TRADE",u);p=SS(a,e,p,r,h,["MIRROR","BUCKET"],0,u);const g=40*u,v=i+o-h-g,_=v-10*u;if(c%2===0){const b=6*u,w=r-h*2;let y=(w-b)/2,M=Math.min(y*190/316,y*.58);const P=Math.max(64*u,_-p-28*u);M>P&&(y=y*(P/M),M=P);const z=u*(y/((w-b)/2)),C=e+h+(w-(y*2+b))/2;B2(a,C,p,y,z),F2(a,C+y+b,p,y,z),p+=M+10*u;const O=[["SPREAD","0.02%"],["FUNDING","8h"],["SIZE","25%"]],N=5*u,I=(r-h*2-N*2)/3,T=32*u;p+T<=_&&(O.forEach(([D,q],G)=>{const Z=e+h+G*(I+N);an(a,Z,p,I,T,6*u,"rgba(255,255,255,0.04)"),fn(a,Z,p,I,T,6*u,"rgba(255,255,255,0.1)",1),a.fillStyle="rgba(255,255,255,0.4)",a.font=`700 ${6.5*u}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText(D,Z+I/2,p+11*u),a.fillStyle="#c8f5a8",a.font=`700 ${10*u}px "DM Mono", ui-monospace, monospace`,a.fillText(q,Z+I/2,p+24*u)}),a.textAlign="left")}else p+=xp(a,e+h,p,r-h*2,u)+10*u,p+36*u<_&&(p+=z2(a,e+h,p,r-h*2,u,25)+10*u),p+50*u<_&&H2(a,e+h,p,r-h*2,u);G2(a,e+h,v,r-h*2,u)}const Z2=2,j2=[{agent:"SharpeShark",timeLabel:"07-08, 15:42",status:"want-to",statusLabel:"Want to",action:"Open ETH long · 1.2 ETH",showActions:!0},{agent:"NightOwl",timeLabel:"07-08, 15:31",status:"rejected",statusLabel:"Rejected",action:"Open BTC short · 0.04 BTC"},{agent:"SharpeShark",timeLabel:"07-08, 15:25",status:"short",statusLabel:"Close Long",action:"BTCUSDT · 0.04 BTC",pnl:{text:"+103.09",tone:"long"}},{agent:"FluxRunner",timeLabel:"07-08, 14:10",status:"long",statusLabel:"Open Long",action:"ETHUSDT · 0.8 ETH"},{agent:"NightOwl",timeLabel:"07-07, 09:42",status:"short",statusLabel:"Open Short",action:"SOLUSDT · 12 SOL"}];function K2(a){switch(a){case"want-to":return{fg:"rgba(200,245,168,0.95)",bg:"rgba(184,245,168,0.12)"};case"rejected":return{fg:"#ff4757",bg:"rgba(255,71,87,0.12)"};case"long":return{fg:"#00ff88",bg:"rgba(0,255,136,0.12)"};case"short":return{fg:"#ff4757",bg:"rgba(255,71,87,0.12)"}}}function Q2(a,e,i,r,o){const c=r/300,u=12*c,h=10*c;_u(a,e,i,r,o,h);let m=vu(a,e,i,r,u,"ACTIVITY LOG",c);const p=i+o-u,g=58*c,v=10*c,_=6*c,x=e+u+g+_+v+_,b=e+r-u-x,w=e+u+g+_+v/2,y=j2,M=4*c;y.forEach((P,z)=>{if(m>=p-8*c)return;const C=z===0,O=z===y.length-1,N=K2(P.status),I=8*c,T=6*c,D=7*c,q=8*c,G=P.showActions?22*c:0,Z=P.showActions?5*c:0,oe=Math.max(I+2*c+T,D+4*c+q)+Z+G+M;if(m+Math.min(oe,28*c)>p)return;a.textAlign="right",a.fillStyle="rgba(255,255,255,0.88)",a.font=`500 ${I}px "DM Mono", ui-monospace, monospace`,a.fillText(P.agent,e+u+g,m+I),a.fillStyle="rgba(255,255,255,0.38)",a.font=`500 ${T}px "DM Mono", ui-monospace, monospace`,a.fillText(P.timeLabel,e+u+g,m+I+2*c+T),a.textAlign="left",O||(a.strokeStyle="rgba(255,255,255,0.14)",a.lineWidth=Math.max(1,c),a.beginPath(),a.moveTo(w,m+6*c),a.lineTo(w,m+oe),a.stroke());const Y=2.4*c;a.beginPath(),a.arc(w,m+5*c,Y,0,Math.PI*2),a.fillStyle=C?"#c8f5a8":"rgba(255,255,255,0.32)",a.fill(),C&&(a.beginPath(),a.arc(w,m+5*c,Y+2.2*c,0,Math.PI*2),a.fillStyle="rgba(200,245,168,0.16)",a.fill());const F=4*c,H=2*c;a.font=`700 ${D}px "DM Mono", ui-monospace, monospace`;const $=P.statusLabel.toUpperCase(),me=a.measureText($).width+F*2,Se=D+H*2;an(a,x,m,me,Se,3*c,N.bg),a.fillStyle=N.fg,a.fillText($,x+F,m+D+H*.35),a.fillStyle="rgba(255,255,255,0.55)",a.font=`400 ${q}px "DM Mono", ui-monospace, monospace`;const U=m+Se+3*c+q;let K=P.action;if(P.pnl){const xe=`${P.action} · `;a.fillText(xe,x,U);const Te=a.measureText(xe).width;a.fillStyle=P.pnl.tone==="long"?"#00ff88":"#ff4757",a.font=`700 ${q}px "DM Mono", ui-monospace, monospace`,a.fillText(P.pnl.text,x+Te,U)}else{for(;K.length>8&&a.measureText(K).width>b;)K=`${K.slice(0,-2)}…`;a.fillText(K,x,U)}if(P.showActions&&m+Se+3*c+q+Z+G<=p){const xe=m+Se+3*c+q+Z,Te=(b-5*c)/2;fn(a,x,xe,Te,G,3*c,"rgba(255,255,255,0.18)",1),a.fillStyle="rgba(255,255,255,0.72)",a.font=`700 ${7*c}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText("REJECT",x+Te/2,xe+G*.68),an(a,x+Te+5*c,xe,Te,G,3*c,"rgba(184,245,168,0.88)"),a.fillStyle="rgba(8,14,10,0.92)",a.fillText("APPROVE",x+Te+5*c+Te/2,xe+G*.68),a.textAlign="left"}m+=oe})}function J2(a,e,i,r,o){const c=r/300,u=12*c,h=10*c;_u(a,e,i,r,o,h);let m=vu(a,e,i,r,u,"FUND BUCKET",c);m=SS(a,e,m,r,u,["FUND BUCKET","CREATE BUCKET"],0,c),m+=xp(a,e+u,m,r-u*2,c)+8*c,m+=O2(a,e+u,m,r-u*2,"FROM","Select source bucket",c)+8*c;const p=10*c+36*c;i+o-u-p-m-8*c>70*c&&(m+=P2(a,e+u,m,r-u*2,c)+6*c),I2(a,e+u,i+o-u-p,r-u*2,c,"COMPLETE REQUIRED FIELDS")}function xS(a,e,i,r,o,c,u=0){switch(e){case"discover":q2(a,i,r,o,c,u);break;case"copy":Y2(a,i,r,o,c,u);break;case"supervise":Q2(a,i,r,o,c);break;case"isolate":J2(a,i,r,o,c);break}}function $2(a,e,i,r,o=0){a.clearRect(0,0,i,r),xS(a,e,0,0,i,r,o)}function eR(a,e,i,r,o){const{W:c,H:u}=L2(i,r),h=document.createElement("canvas");h.width=c,h.height=u;const m=h.getContext("2d"),p=m.createLinearGradient(0,0,0,u);p.addColorStop(0,"#080a0e"),p.addColorStop(.55,"#05070d"),p.addColorStop(1,"#030406"),m.fillStyle=p,m.fillRect(0,0,c,u);const g=Math.round(22*i),v=Math.round(.05*u),_=Math.round(.045*u),x=c-g*2;let b=v;const w=Math.min(34*i,c*.095);m.fillStyle="rgba(255,255,255,0.94)",m.font=`normal 400 ${w}px ${o}`,m.textBaseline="alphabetic",m.fillText(a.verb,g,b+w*.85),b+=Math.round(.09*u);const y=Math.min(13*i,c*.036);m.fillStyle="rgba(255,255,255,0.55)",m.font=`400 ${y}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`;const M=N2(m,a.description,x);m.fillText(M[0]??a.description,g,b+y),b+=Math.round(.07*u),b+=Math.round(.03*u);const P=g,z=b,C=x,O=Math.max(80*i,u-b-_);xS(m,D2(e),P,z,C,O);const N=new aS(h);return N.colorSpace=Kn,N.minFilter=xs,N.generateMipmaps=!0,N}const Kr=ph.verbs.map((a,e)=>{const i=[{top:"#c8f5a8",mid:"#0a1410",bot:"#1a3d2e"},{top:"#9ee089",mid:"#060e18",bot:"#1e3a52"},{top:"#f0e6a0",mid:"#0c1008",bot:"#2a3820"},{top:"#7fd9a8",mid:"#080810",bot:"#243048"}];return{verb:a.verb,description:a.description,mood:i[e]??i[0]}}),jn=Kr.length,Da=2.95,fl=6.9,Mp=32,MS=4,yS=5,sp=2.05,tR=1,nR=Da*.55,Sv=.35,xv=.85;function ES(a){return a<520?{mode:"mobile",canvasW:1280,canvasH:320,fontPx:112,planeBaseW:4.55,frustumFill:.9}:a<900?{mode:"tablet",canvasW:1600,canvasH:360,fontPx:132,planeBaseW:5.25,frustumFill:.94}:{mode:"desktop",canvasW:1920,canvasH:420,fontPx:152,planeBaseW:6.1,frustumFill:.96}}const iR=1.35,aR=.72,sR=.62,rR=.2,oR=14,lR=.42,cR=128,uR=12,fR=.004,dR=.0022,Mv=.12,hR=.88,pR=4,mR=22,gR=32,_R=40,vR=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,SR=`
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
`,xR='"Reckk Heading", Georgia, "Times New Roman", serif',bS="Morpheum Wordmark",gl=`"${bS}"`,MR=[{t:0,c:"#e8ffe0"},{t:.45,c:"#c8f5a8"},{t:1,c:"#f0e6a0"}];async function yR(){if(typeof document>"u"||!document.fonts)return!1;try{const a=new FontFace(bS,`url(${R2})`,{weight:"normal",style:"normal"});document.fonts.add(await a.load()),await document.fonts.load(`normal 152px ${gl}`);const e=document.fonts.check(`normal 152px ${gl}`);return e||console.error("[FlowIntro] Morpheum Wordmark failed to bind — title will not use Reckk fallback"),e}catch(a){return console.error("[FlowIntro] Morpheum Wordmark load failed",a),!1}}async function ER(){if(!(typeof document>"u"||!document.fonts))try{await yR();const a=new FontFace("Reckk Title",`url(${A2})`,{weight:"normal",style:"normal"});document.fonts.add(await a.load());const e=new FontFace("Reckk Heading",`url(${T2})`,{weight:"normal",style:"normal"});document.fonts.add(await e.load()),await document.fonts.ready,await document.fonts.load(`normal 152px ${gl}`),await document.fonts.load('normal 64px "Reckk Heading"'),await document.fonts.load('normal 124px "Reckk Title"')}catch{}}const qs="flow-intro-hide-chrome";function bR(a){return a<=72}const TR=280;function AR(a){const e=document.documentElement,i=e.style.scrollBehavior;e.style.scrollBehavior="auto",window.scrollTo(0,Math.max(0,a)),e.style.scrollBehavior=i}function dh(){const a=document.getElementById("hero");if(!a)return;const e=a.getBoundingClientRect().top+window.scrollY;AR(e)}function dl(a){const e=Un.clamp(a,0,1);return e*e*e*(e*(e*6-15)+10)}function hh(a){const e=Math.max(1,a),i=Math.max(1,jn*e*tR),r=Math.max(1,i/Math.max(1,jn-1));return{cardPx:i,titlePx:r,totalPx:i+r}}function TS(a,e){const i=a/Math.max(1,e),r=Mp*Math.PI/180,o=2*fl*Math.tan(r/2),c=o*i,u=sp*MS/yS,h=.992,m=h*o/sp,p=h*c/u;return Un.clamp(Math.min(m,p),.52,2.35)}function yv(a,e,i){const r=ES(a),o=TS(a,e),c=a/Math.max(1,e),u=Mp*Math.PI/180,m=2*fl*Math.tan(u/2)*c,p=r.frustumFill*m/Math.max(1e-6,o),g=Math.min(r.planeBaseW,p);return{w:g,h:g*i}}function RR(a,e){const i=a/Math.max(1,jn-1),r=Math.min(Math.max(1,e*.38),Math.max(1,i*.34));return i<=r+.001?0:1-r/i}function CR(a,e){const i=Math.min(Math.max(1,e*.38),Math.max(1,a*.34));return a<=i+.001?0:1-i/a}function wR(a,e){const i=Un.clamp(e,0,.999);if(a<i)return{titleOp:1,lastCardOp:0};const r=Math.max(1e-6,1-i),o=dl(Un.clamp((a-i)/r,0,1));return{titleOp:1-o,lastCardOp:o}}function DR(a,e,i){const r=jn-1;if(a<=0)return{opacity:e===0?1:0};if(a>=r-1e-5)return{opacity:e===r?1:0};const o=Math.floor(a);if(o>=r)return{opacity:e===r?1:0};if(e!==o&&e!==o+1)return{opacity:0};const c=a-o,u=Un.clamp(i,0,.999);if(c<u)return{opacity:e===o?1:0};const h=dl(Un.clamp((c-u)/Math.max(1e-6,1-u),0,1));return{opacity:e===o?1:h}}function NR(a,e){return a>1.5&&a<e-.5}function LR(a){return Un.clamp(540/Math.max(a,340),.2,.55)}function UR(a,e,i){const r=[],o=oR;for(let c=0;c<o;c++){const u=Un.clamp(a-c/Math.max(1,o-1)*lR,-.08,1.08),h=Math.sin(u*Math.PI*2*iR)*sR*i,m=Math.sin(u*Math.PI*2*aR)*rR,p=Mv+c/Math.max(1,o-1)*(hR-Mv),g=e-p;r.push(new ee(h,m,g))}return r}function OR(a,e,i,r){const o=a.length;if(o<2)return new Ni;const c=[],u=[],h=[],m=[],p=new ee,g=new ee,v=new ee,_=new ee(0,1,0),x=e+1;for(let w=0;w<o;w++){w===0?p.subVectors(a[1],a[0]).normalize():w===o-1?p.subVectors(a[o-1],a[o-2]).normalize():p.subVectors(a[w+1],a[w-1]).normalize(),g.copy(_).cross(p),g.lengthSq()<1e-8&&g.set(1,0,0).cross(p),g.normalize(),v.crossVectors(p,g).normalize();const y=o===1?0:w/(o-1),M=i+(r-i)*Math.pow(y,1.5);for(let P=0;P<=e;P++){const z=P/e*Math.PI*2,C=Math.cos(z),O=Math.sin(z),N=a[w];c.push(N.x+(C*g.x+O*v.x)*M,N.y+(C*g.y+O*v.y)*M,N.z+(C*g.z+O*v.z)*M),u.push(C*g.x+O*v.x,C*g.y+O*v.y,C*g.z+O*v.z),h.push(o===1?0:w/(o-1),P/e)}}for(let w=0;w<o-1;w++)for(let y=0;y<e;y++){const M=w*x+y,P=M+1,z=M+x,C=z+1;m.push(M,z,P,P,z,C)}const b=new Ni;return b.setAttribute("position",new wi(c,3)),b.setAttribute("normal",new wi(u,3)),b.setAttribute("uv",new wi(h,2)),b.setIndex(m),b.computeBoundingSphere(),b}function Ev(a,e,i,r){const o={verb:a.verb,description:a.description};return eR(o,e,i,r,xR)}function bv(a,e){const i=ES(e),r=Math.min(a*2.35,3.25),o=Math.round(i.canvasW*r),c=Math.round(i.canvasH*r),u=document.createElement("canvas");u.width=o,u.height=c;const h=u.getContext("2d");h.clearRect(0,0,o,c);const m="Morpheum";let p=i.fontPx;h.textAlign="left",h.textBaseline="alphabetic";const g=()=>{h.font=`normal ${p*r}px ${gl}`};g();const v=O=>{h.font=`normal ${O*r}px ${gl}`;const N=h.measureText(m),I=Math.abs(N.actualBoundingBoxLeft??0),T=Math.abs(N.actualBoundingBoxRight??N.width),D=Math.abs(N.actualBoundingBoxAscent??O*r*.8),q=Math.abs(N.actualBoundingBoxDescent??O*r*.25);return{left:I,right:T,width:I+T,ascent:D,descent:q}},_=Math.max(1.25,1.85*r)*2,x=64*r+_,b=40*r+_,w=O=>{const N=v(O);return N.width+x*2<=o&&N.ascent+N.descent+b*2<=c};for(;!w(p)&&p>64;)p-=2;for(;w(p+2)&&p<i.fontPx+24;)p+=2;g();const y=v(p),M=(o-y.width)/2+y.left,P=c/2+(y.ascent-y.descent)/2,z=h.createLinearGradient(M-y.left,P-y.ascent,M+y.right,P+y.descent);MR.forEach(O=>z.addColorStop(O.t,O.c)),h.lineJoin="round",h.miterLimit=2,h.lineWidth=Math.max(1.25,1.85*r),h.strokeStyle="rgba(8,12,10,0.22)",h.strokeText(m,M,P),h.fillStyle=z,h.fillText(m,M,P);const C=new aS(u);return C.colorSpace=Kn,C.minFilter=bn,C.magFilter=bn,C.generateMipmaps=!1,C}function Tv(a,e){a.generateMipmaps=!1,a.minFilter=bn,a.magFilter=bn,a.wrapS=Gi,a.wrapT=Gi;const i=e.capabilities.getMaxAnisotropy();a.anisotropy=Math.min(16,i),a.needsUpdate=!0}function PR(){const a=Qe.useRef(null),e=Qe.useRef(null),i=Qe.useRef(null),r=Qe.useRef(null),o=Qe.useRef(!1),c=Qe.useCallback(()=>{if(o.current)return;o.current=!0;const u=e.current;u==null||u.classList.add("flow-intro__sticky--exit"),window.setTimeout(()=>{document.body.classList.remove(qs),dh(),requestAnimationFrame(()=>{dh(),requestAnimationFrame(()=>{dh(),window.setTimeout(()=>{o.current=!1},100)})})},TR)},[]);return Qe.useLayoutEffect(()=>{const u=window.matchMedia("(prefers-reduced-motion: reduce)").matches,h=window.location.hash.replace(/^#/,"");return u||h!==""&&h!=="flow"&&h!=="hero"||document.body.classList.add(qs),()=>{document.body.classList.remove(qs)}},[]),Qe.useEffect(()=>{const u=h=>{if(h.key!=="Escape")return;const m=document.getElementById("hero");m&&m.getBoundingClientRect().top>8&&(h.preventDefault(),c())};return window.addEventListener("keydown",u),()=>window.removeEventListener("keydown",u)},[c]),Qe.useEffect(()=>{const u=window.location.hash.replace(/^#/,"");u&&u!=="flow"&&u!=="hero"&&requestAnimationFrame(()=>{var h;(h=document.getElementById(u))==null||h.scrollIntoView({block:"start"})})},[]),Qe.useEffect(()=>{const u=i.current,h=a.current;if(!u||!h)return;const m=u,p=h;let g=!1;if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){document.body.classList.remove(qs);const x=r.current;x&&(x.style.height="0px");return}let _;return(async()=>{if(await ER(),g)return;const x=Math.min(window.devicePixelRatio,2),b=Math.max(320,m.clientWidth||window.innerWidth),w=Math.max(1,m.clientHeight||window.innerHeight),y=[],M=[],P=[];Kr.forEach((Ye,Ze)=>{const ot=jn-1-Ze,mt=Kr[ot],wt=Ev(mt,ot,x,b);P.push(wt);const Dt=new uu({map:wt,transparent:!0,opacity:1,depthWrite:!0,depthTest:!0,side:Oa});y.push(Dt);const ft=sp,_t=ft*MS/yS,X=new Di(new Qs(_t,ft),Dt);X.position.set(0,0,-Ze*Da),X.renderOrder=Ze,M.push(X)});const z=bv(x,b),C=new uu({map:z,transparent:!0,opacity:0,depthWrite:!1,depthTest:!0,side:$i}),O=z.image.height/z.image.width,{w:N,h:I}=yv(b,w,O),T=new Di(new Qs(N,I),C);T.position.set(0,0,-(jn-1)*Da),T.renderOrder=_R;const D=new rE,q=new Ri(Mp,1,.08,120),G=new b2({antialias:!0,alpha:!1,powerPreference:"high-performance"});G.setPixelRatio(Math.min(window.devicePixelRatio,2)),G.outputColorSpace=Kn,G.sortObjects=!0,m.appendChild(G.domElement),Tv(z,G);const Z=new rl;M.forEach(Ye=>Z.add(Ye)),Z.add(T),D.add(Z);const de=new ki({uniforms:{uStrength:{value:0}},vertexShader:vR,fragmentShader:SR,transparent:!0,toneMapped:!1,depthTest:!1,depthWrite:!1,blending:mh}),oe=new Di(new Ni,de);oe.frustumCulled=!1,oe.renderOrder=mR,oe.visible=!1,D.add(oe);const Y=Kr.map(Ye=>new Nt(Ye.mood.mid)),F=Y[0].clone();D.background=F;const H=0,$=-(jn-1)*Da,me=fl,Se=-.1*Da,U=.1*Da;function K(Ye,Ze){const ot=Ye+fl;return(me-ot)/Ze}function xe(){const Ye=Math.max(1,window.innerHeight),{totalPx:Ze}=hh(Ye),ot=Math.max(1,Ze),mt=H+Se,wt=$+U-nR,ft=(mt-wt)/ot,_t=K(mt,ft),X=K(wt,ft);return{ih:Ye,totalPx:ot,scrollToWorldFactor:ft,minScroll:_t,maxScroll:X}}let{scrollToWorldFactor:Te,minScroll:Ue,maxScroll:ie}=xe();const ye=new Nt,Ee=new Nt,ze=new Nt;function it(){var _t;const Ye=Math.max(320,m.clientWidth||window.innerWidth),Ze=Math.min(window.devicePixelRatio,2);P.forEach((X,Mt)=>{X.dispose();const St=jn-1-Mt,L=Ev(Kr[St],St,Ze,Ye);P[Mt]=L,y[Mt].map=L,y[Mt].needsUpdate=!0}),(_t=C.map)==null||_t.dispose();const ot=bv(Ze,Ye);C.map=ot,C.needsUpdate=!0,Tv(ot,G);const mt=ot.image.height/ot.image.width,wt=Math.max(1,m.clientHeight||window.innerHeight),{w:Dt,h:ft}=yv(Ye,wt,mt);T.geometry.dispose(),T.geometry=new Qs(Dt,ft)}function Je(){const Ye=m.clientWidth,Ze=m.clientHeight;if(Ye<2||Ze<2)return;q.aspect=Ye/Ze,q.updateProjectionMatrix(),G.setSize(Ye,Ze,!1),it();const ot=xe();Te=ot.scrollToWorldFactor,Ue=ot.minScroll,ie=ot.maxScroll;const mt=Math.max(1,window.innerHeight),{totalPx:wt}=hh(mt),Dt=r.current;if(Dt){const ft=mt*Sv,_t=Math.max(Math.ceil(wt+ft+mt*xv+32),Math.ceil(mt*1.08));Dt.style.height=`${_t}px`}}Je(),requestAnimationFrame(()=>{g||it()});let Zt=0;function ut(){var zn,Fa;if(g)return;Zt=requestAnimationFrame(ut);const Ye=Math.max(1,window.innerHeight),{cardPx:Ze,titlePx:ot,totalPx:mt}=hh(Ye),wt=p.getBoundingClientRect(),Dt=Math.max(1,p.offsetHeight-Ye),ft=Un.clamp(-wt.top,0,Dt),_t=Math.min(ft,mt),X=Math.max(1,mt),Mt=Ye*Sv,St=dl(Un.clamp((ft-mt)/Math.max(1,Mt),0,1)),L=Un.mapLinear(Ze,0,X,Ue,ie),E=m.clientWidth,J=m.clientHeight,te=Math.max(1,ot),fe=_t<te,Ce=fe?Un.clamp(_t/te,0,1):0,De=Math.max(0,_t-te),he=Math.max(1,Ze),Ae=Un.clamp(De/he,0,1)*(jn-1),Be=TS(E,J),Ne=document.getElementById("hero"),Le=Ne?Ne.getBoundingClientRect().top:0,$e=Ne?bR(Le):!0;o.current||document.body.classList.toggle(qs,!$e);let je;fe?je=Un.mapLinear(_t,0,te,ie,L):je=Un.mapLinear(_t,te,X,L,Ue),je=Un.clamp(je,Ue,ie);const st=RR(Ze,Ye),W=CR(te,Ye),Re=wR(Ce,W),ge=jn-1;if(fe)ze.copy(Y[0]);else{const mn=Math.min(jn-2,Math.floor(Ae)),Tn=Math.min(mn+1,jn-1),si=dl(Ae-mn);ye.copy(Y[mn]),Ee.copy(Y[Tn]),ze.lerpColors(ye,Ee,si)}D.background=F.copy(ze);const we=me-je*Te;q.position.set(0,0,we),q.lookAt(0,0,we-fl);const Pe=Un.clamp(_t/X,0,1);if(NR(_t,X)){const mn=UR(Pe,we,LR(E)),si=new SE(mn,!1,"centripetal").getSpacedPoints(cR);if(si.length>=2){const gn=OR(si,uR,fR,dR),Ot=oe.geometry.getAttribute("position"),en=gn.getAttribute("position");if(Ot&&en&&Ot.count===en.count&&((zn=oe.geometry.getIndex())==null?void 0:zn.count)===((Fa=gn.getIndex())==null?void 0:Fa.count)&&Ot&&en){Ot.array.set(en.array),Ot.needsUpdate=!0;const Qn=oe.geometry.getAttribute("normal"),ys=gn.getAttribute("normal");Qn&&ys&&(Qn.array.set(ys.array),Qn.needsUpdate=!0);const Ba=oe.geometry.getAttribute("uv"),Xi=gn.getAttribute("uv");Ba&&Xi&&(Ba.array.set(Xi.array),Ba.needsUpdate=!0),gn.dispose()}else oe.geometry.dispose(),oe.geometry=gn;oe.visible=!0,de.uniforms.uStrength.value=.36}else oe.visible=!1,de.uniforms.uStrength.value=0}else oe.visible=!1,de.uniforms.uStrength.value=0;const Xe=Math.floor((jn-1)/2);M.forEach((mn,Tn)=>{const si=-Tn*Da,gn=jn-1-Tn;let{opacity:Ot}=DR(Ae,gn,st);fe&&Tn===ge&&(Ot*=Re.lastCardOp);let en=1,Dn=0;!fe&&gn===jn-1&&Ot>.02&&St>0&&(en=1-.28*St,Dn=-Da*.32*St),mn.position.set(0,0,si+Dn),mn.scale.setScalar(Be*en);const Qn=y[Tn];Qn.opacity=Ot,Qn.depthWrite=Ot>=.995,mn.visible=Ot>.003,mn.renderOrder=Tn<=Xe?pR+Tn:gR+(Tn-Xe-1)}),T.position.set(0,0,-ge*Da),T.scale.setScalar(Be),C.opacity=fe?Re.titleOp:0,C.depthWrite=C.opacity>=.995,T.visible=C.opacity>.003;const He=mt+Mt;let Gt=0;if(Dt>He&&ft>=He){const mn=Math.max(1,Dt-He);Gt=dl(Un.clamp((ft-He)/mn,0,1))}Gt>.02&&(oe.visible=!1,de.uniforms.uStrength.value=0);const Lt=r.current;if(Lt){const mn=Mt+Ye*xv+32,Tn=Math.max(Math.ceil(mt+mn),Math.ceil(Ye*1.08));Lt.style.height!==`${Tn}px`&&(Lt.style.height=`${Tn}px`)}const Wn=1-Gt*.96;e.current&&e.current.style.setProperty("--intro-ui-opacity",String(Wn)),G.domElement.style.opacity=String(1-Gt),G.render(D,q)}ut(),window.addEventListener("resize",Je,{passive:!0});const vt=new ResizeObserver(Je);vt.observe(m),_=()=>{var Ye;cancelAnimationFrame(Zt),document.body.classList.remove(qs),window.removeEventListener("resize",Je),vt.disconnect(),y.forEach(Ze=>{var ot;(ot=Ze.map)==null||ot.dispose(),Ze.dispose()}),P.forEach(Ze=>Ze.dispose()),(Ye=C.map)==null||Ye.dispose(),C.dispose(),M.forEach(Ze=>Ze.geometry.dispose()),T.geometry.dispose(),oe.geometry.dispose(),de.dispose(),D.remove(oe),G.dispose(),m.contains(G.domElement)&&m.removeChild(G.domElement)},g&&_()})(),()=>{g=!0,document.body.classList.remove(qs),_==null||_()}},[]),B.jsxs("section",{ref:a,id:"flow",className:"flow-intro","aria-label":"Morpheum — Discover, Copy, Supervise, Isolate",children:[B.jsxs("div",{ref:e,className:"flow-intro__sticky",children:[B.jsx("div",{ref:i,className:"flow-intro__canvas","aria-hidden":!0}),B.jsxs("div",{className:"flow-intro__top",children:[B.jsx("p",{className:"flow-intro__eyebrow",children:"/// Morpheum"}),B.jsxs("button",{type:"button",className:"flow-intro__skip",onClick:c,children:["Skip ",B.jsx("span",{className:"flow-intro__skip-key",children:"Esc"})]})]}),B.jsx("div",{className:"flow-intro__sr","aria-live":"polite",children:Kr.map((u,h)=>B.jsxs("p",{children:["Step ",String(h+1).padStart(2,"0"),": ",u.verb,". ",u.description]},u.verb))})]}),B.jsx("div",{ref:r,className:"flow-intro__spacer","aria-hidden":!0})]})}const IR=280,FR=5/4,BR=3800,zR={discover:ll,copy:Z2};function HR(){return typeof window<"u"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches}function GR({stepIndex:a,kind:e,className:i,width:r=IR}){const o=Qe.useRef(null),c=e??_S(a),u=Math.round(r*FR);return Qe.useEffect(()=>{const h=o.current;if(!h)return;let m=0,p;const g=()=>{const x=Math.min(window.devicePixelRatio||1,2),b=Math.round(r*x),w=Math.round(u*x);(h.width!==b||h.height!==w)&&(h.width=b,h.height=w);const y=h.getContext("2d");y&&$2(y,c,b,w,m)};g();const v=zR[c];v&&v>1&&!HR()&&(p=setInterval(()=>{m=(m+1)%v,g()},BR));const _=()=>g();return window.addEventListener("resize",_),()=>{window.removeEventListener("resize",_),p&&clearInterval(p)}},[c,r,u]),B.jsx("div",{className:["loop-step-sheet",i].filter(Boolean).join(" "),style:{width:r,height:u},children:B.jsx("canvas",{ref:o,className:"loop-step-sheet__canvas",style:{width:r,height:u},"aria-hidden":!0})})}const Av=[{id:"want-eth",agent:"SharpeShark",timestamp:"2026-07-08T15:42:00.000Z",timeLabel:"07-08, 15:42:00",status:"want-to",statusLabel:"Want to",action:"Open ETH long · 1.2 ETH",showActions:!0},{id:"rejected-btc",agent:"NightOwl",timestamp:"2026-07-08T15:31:00.000Z",timeLabel:"07-08, 15:31:00",status:"rejected",statusLabel:"Rejected",action:"Open BTC short · 0.04 BTC"},{id:"close-btc-profit",agent:"SharpeShark",timestamp:"2026-07-08T15:25:00.000Z",timeLabel:"07-08, 15:25:00",status:"short",statusLabel:"Close Long",action:"BTCUSDT · 0.04 BTC · 2,465.12 USDT",pnl:{text:"+103.09",tone:"long"}},{id:"open-eth-long",agent:"FluxRunner",timestamp:"2026-07-08T14:10:00.000Z",timeLabel:"07-08, 14:10:00",status:"long",statusLabel:"Open Long",action:"ETHUSDT · 0.8 ETH · 2,560.00 USDT"},{id:"open-sol-short",agent:"NightOwl",timestamp:"2026-07-07T09:42:00.000Z",timeLabel:"07-07, 09:42:00",status:"short",statusLabel:"Open Short",action:"SOLUSDT · 12 SOL · 1,824.00 USDT"}];function VR(){return B.jsxs("aside",{className:"supervise-log","aria-label":"Agent activity log",children:[B.jsx("header",{className:"supervise-log__header",children:B.jsx("span",{className:"supervise-log__kicker",children:"Activity log"})}),B.jsx("ol",{className:"supervise-log__timeline",children:Av.map((a,e)=>{const i=e===Av.length-1,r=e===0;return B.jsxs("li",{className:"supervise-log__item",children:[B.jsxs("div",{className:"supervise-log__meta",children:[B.jsx("span",{className:"supervise-log__agent",children:a.agent}),B.jsx("time",{className:"supervise-log__time",dateTime:a.timestamp,children:a.timeLabel})]}),B.jsxs("div",{className:"supervise-log__track","aria-hidden":!0,children:[i?null:B.jsx("span",{className:"supervise-log__track-line"}),B.jsx("span",{className:["supervise-log__dot",r?"supervise-log__dot--latest":""].filter(Boolean).join(" ")})]}),B.jsxs("div",{className:"supervise-log__body",children:[B.jsx("span",{className:`supervise-log__badge supervise-log__badge--${a.status}`,children:a.statusLabel}),B.jsxs("p",{className:"supervise-log__action",children:[a.action,a.pnl?B.jsxs(B.Fragment,{children:[" · ",B.jsx("span",{className:`supervise-log__pnl supervise-log__pnl--${a.pnl.tone}`,children:a.pnl.text})]}):null]}),a.showActions?B.jsxs("div",{className:"supervise-log__actions",children:[B.jsx("button",{type:"button",className:"supervise-log__btn supervise-log__btn--reject",children:"Reject"}),B.jsx("button",{type:"button",className:"supervise-log__btn supervise-log__btn--approve",children:"Approve"})]}):null]})]},a.id)})})]})}const kR=/^(action)$/i;function XR(a){return a.split(/(\s*[·/]\s*)/).map((i,r)=>kR.test(i.trim())?B.jsx("span",{className:"stat-chip__brand",children:i},r):B.jsx("span",{children:i},r))}function AS({label:a,status:e,live:i}){return B.jsxs("span",{className:`stat-chip ${i?"stat-chip--live":""}`,children:[B.jsx("span",{className:"stat-chip__label",children:a}),B.jsx("span",{className:"stat-chip__sep",children:"·"}),B.jsx("span",{className:"stat-chip__status",children:XR(e)})]})}var WR=Uv();function qR(a,e,i=!1){a.style.fontFamily=e.fontFamily,a.style.fontSize=e.fontSize,a.style.fontWeight=e.fontWeight,a.style.letterSpacing=e.letterSpacing,a.style.lineHeight=e.lineHeight,a.style.textTransform=e.textTransform,a.style.whiteSpace=i?"nowrap":"normal",a.style.wordBreak=i?"normal":"break-word"}function YR(a,e,i,r){const o=getComputedStyle(i),c=document.createElement("div");c.style.position="fixed",c.style.left="-99999px",c.style.top="0",c.style.visibility="hidden",c.style.pointerEvents="none",c.style.width=`${e}px`,qR(c,o,!r);const u=document.createTextNode(a);return c.appendChild(u),document.body.appendChild(c),{probe:c,textNode:u}}function Rv(a,e,i,r=!0){if(!a)return{lines:[],blockHeight:0};if(e<=0)return{lines:[a],blockHeight:0};const{probe:o,textNode:c}=YR(a,e,i,r),u=o.offsetHeight;if(!r)return document.body.removeChild(o),{lines:[a],blockHeight:u};const h=document.createRange(),m=[];let p=0,g=0;for(let v=1;v<=a.length;v++){h.setStart(c,0),h.setEnd(c,v);const _=h.getClientRects().length;_>g&&g>0&&(m.push(a.slice(p,v-1)),p=v-1),g=_}return p<a.length&&m.push(a.slice(p)),document.body.removeChild(o),{lines:m.length>0?m:[a],blockHeight:u}}const ZR=40,jR=5,KR="typewriter-reveal",Cv=1e3,QR=4e3;function wv(){return Cv+Math.random()*(QR-Cv)}function RS(){return typeof window>"u"?!1:window.matchMedia("(prefers-reduced-motion: reduce)").matches}function JR({text:a,content:e,speed:i,cursorWidth:r,active:o,waiting:c,completed:u,holdCursor:h=!1,onComplete:m}){const p=Qe.useRef(null),g=Qe.useRef(m),v=Qe.useRef(null),_=Qe.useRef(null),x=Qe.useRef(null),b=Qe.useRef("idle"),[w,y]=Qe.useState("idle");g.current=m;const M=Qe.useCallback(()=>{v.current&&(clearTimeout(v.current),v.current=null)},[]),P=Qe.useCallback(()=>{var D;M(),_.current=null,x.current=null,b.current="complete",y("complete"),(D=g.current)==null||D.call(g)},[M]),z=Qe.useCallback(D=>{M(),_.current=Date.now()+D,v.current=setTimeout(P,D)},[M,P]);Qe.useLayoutEffect(()=>{b.current="idle",y("idle"),x.current=null,_.current=null,M()},[a,i,r,M]),Qe.useLayoutEffect(()=>{var H,$,me;if(c||u||b.current==="complete")return;if(!o){b.current==="cursor-hold"&&v.current&&_.current!=null&&(M(),x.current=Math.max(0,_.current-Date.now()),_.current=null);return}if(b.current==="cursor-hold"&&!v.current){const Se=x.current??wv();x.current=null,z(Se);return}if(b.current==="animating"||b.current==="cursor-hold")return;if(RS()){(H=g.current)==null||H.call(g);return}const D=p.current;if(!D||!a){($=g.current)==null||$.call(g);return}D.style.width="",D.offsetWidth;const q=Math.max(a.length/i*1e3,120),G=Math.max(a.length,1),Z=D.closest(".typewriter-block"),de=(Z==null?void 0:Z.clientWidth)??((me=D.parentElement)==null?void 0:me.clientWidth)??0;D.style.whiteSpace="nowrap",D.style.width="auto";const oe=D.scrollWidth,Y=de>0?Math.min(oe,de):oe;D.style.width="0",D.style.setProperty("--tw-duration",`${q}ms`),D.style.setProperty("--tw-target-width",`${Y}px`),D.style.setProperty("--tw-steps",String(G)),D.style.setProperty("--tw-cursor-width",`${r}px`),D.offsetWidth,b.current="animating",y("animating");const F=Se=>{if(Se.animationName===KR){if(h){D.style.width=`${Y}px`,b.current="cursor-hold",y("cursor-hold"),z(wv());return}D.style.width="",P()}};return D.addEventListener("animationend",F),()=>{D.removeEventListener("animationend",F)}},[o,u,P,h,z,i,a,c,M,r]);const C=w==="animating",O=w==="cursor-hold",N=w==="complete",T=["typewriter","typewriter-line",c?"is-waiting":"",C?"is-animating":"",O?"is-cursor-hold":"",u||N?"is-complete":"",!o&&!c&&!u&&!N&&(C||O)?"is-paused":""].filter(Boolean).join(" ");return B.jsx("span",{ref:p,className:T,children:e??a})}function yp({text:a,children:e,className:i,speed:r=ZR,cursorWidth:o=jR,multiline:c="auto",active:u=!0,holdCursor:h=!0,onComplete:m}){const p=Qe.useRef(null),g=Qe.useRef(m),[v,_]=Qe.useState([]),[x,b]=Qe.useState(0),[w,y]=Qe.useState(0),[M,P]=Qe.useState(!1),[z,C]=Qe.useState(!1),O=RS();g.current=m;const N=Qe.useCallback(()=>{const oe=p.current;if(!oe||!a)return _([]),b(0),C(!0),!0;const Y=oe.clientWidth;if(Y<1)return!1;const H=(c==="auto"||c===!0)&&!O,{lines:$,blockHeight:me}=Rv(a,Y,oe,H);let Se=me;if(!H){const U=Rv(a,Y,oe,!0);Se=Math.max(me,U.blockHeight)}return _($),b(Se),C(!0),!0},[a,c,O]);Qe.useLayoutEffect(()=>{var oe,Y;if(y(0),P(!1),C(!1),_([]),b(0),O){(oe=g.current)==null||oe.call(g),C(!0);return}if(!a){(Y=g.current)==null||Y.call(g),C(!0);return}if(!N()){const F=new ResizeObserver(()=>{N()&&F.disconnect()});return p.current&&F.observe(p.current),()=>F.disconnect()}},[a,c,N,O]);const I=Qe.useCallback(oe=>{var F;const Y=oe>=v.length-1;WR.flushSync(()=>{if(!Y){y(oe+1);return}P(!0)}),Y&&((F=g.current)==null||F.call(g))},[v]),D=["typewriter-block",v.length>1?"typewriter-lines":"typewriter-host",i??"",M?"is-complete":"",z?"":"is-measuring",O?"is-static":""].filter(Boolean).join(" "),q={...!M&&!O&&x>0?{height:x,minHeight:x}:void 0},G=e??a;if(!z)return B.jsx("span",{ref:p,className:D,style:q,children:G});if(O||!a)return B.jsx("span",{ref:p,className:["typewriter","is-static",i??""].filter(Boolean).join(" "),children:G});if(M)return B.jsx("span",{ref:p,className:["typewriter-block","typewriter-host","is-complete",i??""].filter(Boolean).join(" "),children:G});const Z=v.length>0?v:[a],de=!!e&&Z.length<=1;return B.jsxs("span",{ref:p,className:D,style:q,"aria-label":a,children:[B.jsx("span",{className:"typewriter-ghost","aria-hidden":!0,children:G}),B.jsx("span",{className:"typewriter-overlay","aria-hidden":!0,children:Z.map((oe,Y)=>B.jsx(JR,{text:oe,content:de?e:void 0,speed:r,cursorWidth:o,waiting:Y>w,active:u&&Y===w,completed:Y<w,holdCursor:h&&Y===Z.length-1,onComplete:Y===w?()=>I(Y):void 0},`${Y}-${oe}`))})]})}function $R(){return typeof window<"u"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches}function CS(a,e){const i=(e==null?void 0:e.amount)??.2,[r,o]=Qe.useState(!1);return Qe.useLayoutEffect(()=>{if(r)return;if($R()){o(!0);return}const c=a.current;if(!c)return;const u=new IntersectionObserver(h=>{for(const m of h)if(m.isIntersecting&&m.intersectionRatio>=Math.min(i,1)){o(!0),u.disconnect();return}},{root:null,threshold:[0,i,Math.min(i+.15,1),1],rootMargin:"0px"});return u.observe(c),()=>u.disconnect()},[i,r,a]),r}function e3(a){return String(a).padStart(2,"0")}function fu(){return typeof window<"u"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches}const t3=1600,n3=1500,Dv=5e3,i3=7e3;function a3(){return Dv+Math.random()*(i3-Dv)}function s3({text:a,active:e}){const[i,r]=Qe.useState(!1),[o,c]=Qe.useState(0),u=Qe.useRef(null),h=`> ${a}`,m=Qe.useCallback(()=>{u.current&&(clearTimeout(u.current),u.current=null)},[]);Qe.useLayoutEffect(()=>{if(m(),!e){r(!1),c(0);return}if(fu()){r(!0);return}const g=window.setTimeout(()=>r(!0),n3);return()=>{window.clearTimeout(g),m()}},[e,m]);const p=Qe.useCallback(()=>{fu()||(m(),u.current=setTimeout(()=>{u.current=null,c(g=>g+1)},a3()))},[m]);return B.jsx("p",{className:"flow-step__example",children:i?B.jsx(yp,{text:h,className:"flow-step__example-type",speed:42,multiline:"auto",active:!0,holdCursor:!0,onComplete:p},o):B.jsx("span",{className:"flow-step__example-type","aria-hidden":!0,children:h})})}function r3(){const[a,e]=Qe.useState(()=>new Set),[i,r]=Qe.useState(!1),o=Qe.useRef(new Map),c=Qe.useRef(null),u=CS(c,{amount:.35}),h=ds.steps.every(v=>a.has(`step-${v.n}`));Qe.useLayoutEffect(()=>{if(fu()){e(new Set(ds.steps.map(_=>`step-${_.n}`))),r(!0);return}const v=new IntersectionObserver(_=>{e(x=>{const b=new Set(x);for(const w of _){const y=w.target.dataset.flowKey;y&&w.isIntersecting&&b.add(y)}return b})},{root:null,threshold:[0,.01,.08,.15,.25],rootMargin:"-42% 0px -42% 0px"});for(const _ of o.current.values())v.observe(_);return()=>{v.disconnect()}},[]),Qe.useLayoutEffect(()=>{if(fu())return;if(!h){r(!1);return}const v=window.setTimeout(()=>{r(!0)},t3);return()=>window.clearTimeout(v)},[h]);const m=Qe.useCallback((v,_)=>{_?o.current.set(v,_):o.current.delete(v)},[]),p=Qe.useCallback(v=>{e(_=>new Set(_).add(v))},[]),g=u&&i;return B.jsx("section",{id:"how",className:"section flow",children:B.jsxs("div",{className:"container",children:[B.jsx("p",{className:"section-kicker",children:ds.kicker}),B.jsx("h2",{className:"section-title flow__title",children:ds.title}),B.jsx("div",{className:"flow__chips",children:ds.chips.map(v=>B.jsx(AS,{label:v.label,status:v.value},v.label))}),B.jsx("div",{className:"flow__steps",role:"list",children:ds.steps.map((v,_)=>{const x=`step-${v.n}`,b=a.has(x);return B.jsxs("article",{ref:w=>m(x,w),"data-flow-key":x,role:"listitem",className:`flow-step${b?" flow-step--expanded":""}`,"aria-expanded":b,children:[B.jsxs("button",{type:"button",className:"flow-step__head",onClick:()=>p(x),"aria-label":b?`${v.title}, expanded`:`${v.title}, tap to expand`,children:[B.jsxs("span",{className:"flow-step__idx",children:["Step ",e3(v.n)]}),B.jsx("h3",{className:"flow-step__title",children:v.title}),B.jsx("span",{className:"flow-step__chevron","aria-hidden":!0,children:b?"−":"+"})]}),B.jsx("div",{className:"flow-step__expand","aria-hidden":!b,children:B.jsx("div",{className:"flow-step__expand-inner",children:B.jsxs("div",{className:`flow-step__split${_===2?" flow-step__split--supervise":""}`,children:[B.jsx("p",{className:"flow-step__meta",children:v.feature}),B.jsxs("div",{className:"flow-step__copy",children:[B.jsx("p",{className:"flow-step__detail",children:v.body}),B.jsx(s3,{text:v.example,active:b}),B.jsx("div",{className:"flow-step__actions",children:B.jsx("a",{href:En.explore,className:"flow-step__open","aria-label":`Explore after ${v.title}`,children:B.jsx("span",{"aria-hidden":!0,className:"flow-step__open-arrow",children:"→"})})})]}),B.jsx("div",{className:`flow-step__sheet${_===2?" flow-step__sheet--log":""}`,"aria-hidden":!b,children:b?_===2?B.jsx(VR,{}):B.jsx(GR,{stepIndex:_,width:280}):null})]})})})]},x)})}),B.jsx("p",{ref:c,className:"flow__outcome",children:g?B.jsx(yp,{text:ds.outcome,className:"flow__outcome-type",speed:42,multiline:"auto",active:!0,holdCursor:!0}):B.jsx("span",{className:"flow__outcome-type","aria-hidden":!0,children:ds.outcome})})]})})}const o3=["M41.9213 3.43614C43.0393 3.43614 43.8716 3.77154 44.4182 4.44235C44.9647 5.138 45.1262 6.1939 44.9026 7.61005L41.884 26.8026C41.7846 27.4982 41.8467 28.0075 42.0703 28.3305C42.2691 28.6784 42.6542 28.8771 43.2256 28.9268L43.8591 28.9641L43.8219 29.2622L36.7784 30.492L36.4803 30.492L40.1324 7.46098C40.3064 6.26843 40.0206 5.67216 39.2753 5.67216C38.9523 5.67216 38.6045 5.75912 38.2318 5.93303C37.8343 6.10694 37.3995 6.44235 36.9275 6.93924L36.7411 6.79017C38.0828 4.55415 39.8095 3.43614 41.9213 3.43614Z","M29.9958 3.43614C31.1138 3.43614 31.9461 3.77154 32.4927 4.44235C33.0393 5.138 33.2007 6.1939 32.9771 7.61005L29.9585 26.8026C29.8591 27.4982 29.9212 28.0075 30.1449 28.3305C30.3436 28.6784 30.7287 28.8771 31.3001 28.9268L31.9337 28.9641L31.8964 29.2622L24.8529 30.492L24.5548 30.492L28.207 7.46098C28.3809 6.26843 28.0952 5.67216 27.3498 5.67216C27.0268 5.67216 26.679 5.75912 26.3063 5.93303C25.9088 6.10694 25.474 6.44235 25.002 6.93924L24.8157 6.79017C26.1573 4.55415 27.884 3.43614 29.9958 3.43614Z","M18.0703 3.43614C19.1883 3.43614 20.0206 3.77154 20.5672 4.44235C21.1138 5.138 21.2753 6.1939 21.0517 7.61005L18.033 26.8026C17.9337 27.4982 17.9958 28.0075 18.2194 28.3305C18.4181 28.6784 18.8032 28.8771 19.3747 28.9268L20.0082 28.9641L19.9709 29.2622L12.9275 30.492L12.6293 30.492L16.2815 7.46098C16.4554 6.26843 16.1697 5.67216 15.4243 5.67216C15.1014 5.67216 14.7535 5.75912 14.3809 5.93303C13.9834 6.10694 13.5486 6.44235 13.0765 6.93924L12.8902 6.79017C14.2318 4.55415 15.9585 3.43614 18.0703 3.43614Z","M45.5631 10.8482C46.0378 11.9189 46.0912 12.9315 45.7231 13.8861C45.3095 14.8231 44.3453 15.4956 42.8305 15.9035L16.576 22.853C15.2325 23.2226 14.7771 24.0651 15.2096 25.3806L15.7698 26.7714L13.8491 27.2839L9.924 22.1284L9.25377 20.6168L40.8242 12.2711C41.6674 12.048 42.2133 11.7494 42.4619 11.3754C42.6651 10.9838 42.669 10.5676 42.4735 10.1267C42.3199 9.78031 42.1016 9.5003 41.8185 9.2867C41.4899 9.05556 41.0511 8.87329 40.5021 8.7399L41.5734 7.5866C42.563 7.86379 43.3915 8.28774 44.0591 8.85845C44.7127 9.39767 45.214 10.0609 45.5631 10.8482Z"],l3=58,c3=35;function u3({fill:a="#C8F5A8",width:e=58,height:i=35,padding:r=10,"aria-hidden":o=!0,...c}){const u=[-r,-r,l3+r*2,c3+r*2].join(" ");return B.jsx("svg",{width:e,height:i,viewBox:u,fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":o,...c,children:o3.map(h=>B.jsx("path",{d:h,fill:a},h.slice(0,24)))})}const f3={sm:{width:46,height:28},md:{width:46,height:28},lg:{width:69,height:42},hero:{width:119,height:72}};function wS({size:a="md",showWordmark:e=!0,className:i="",brandName:r="Morpheum"}){const o=f3[a];return B.jsxs("span",{className:`brand-mark brand-mark--${a} ${i}`.trim(),children:[B.jsx(u3,{className:"brand-mark__icon",width:o.width,height:o.height,padding:0,fill:"var(--terminal-brand)"}),e?B.jsx("span",{className:"brand-mark__word",children:r}):null]})}function d3(){return B.jsx("footer",{className:"site-footer",children:B.jsxs("div",{className:"container site-footer__inner",children:[B.jsxs("div",{className:"site-footer__brand",children:[B.jsx("a",{className:"site-footer__logo",href:"#hero","aria-label":"Morpheum home",children:B.jsx(wS,{size:"sm"})}),B.jsx("p",{className:"site-footer__legal",children:XM.legal})]}),B.jsxs("nav",{className:"site-footer__nav","aria-label":"Footer",children:[Qc.map(a=>B.jsx("a",{href:a.href,children:a.label},a.id)),B.jsx("a",{href:En.docs,children:"Docs"}),B.jsx("a",{href:En.manifesto,children:"Manifesto"}),B.jsx("a",{href:En.discord,children:"Discord"}),B.jsx("a",{href:En.x,children:"X"})]})]})})}function h3(){const[a,e]=Gs.headline;return B.jsxs("section",{id:"hero",className:"hero","aria-labelledby":"hero-heading",children:[B.jsx("div",{className:"hero__atmosphere","aria-hidden":!0}),B.jsx("div",{className:"hero__grid","aria-hidden":!0}),B.jsx("div",{className:"hero__scanlines","aria-hidden":!0}),B.jsx("div",{className:"hero__grain","aria-hidden":!0}),B.jsx("div",{className:"hero__veil","aria-hidden":!0}),B.jsxs("div",{className:"container hero__content",children:[B.jsxs("a",{className:"hero__eyebrow",href:Gs.eyebrow.href,children:[Gs.eyebrow.label,B.jsx("span",{className:"hero__eyebrow-chevron","aria-hidden":!0,children:"›"})]}),B.jsxs("h1",{id:"hero-heading",className:"hero__headline",children:[B.jsx("span",{className:"hero__line hero__line--lead",children:a}),B.jsx("span",{className:"hero__line hero__line--punch",children:e})]}),B.jsxs("div",{className:"hero__ctas",children:[B.jsx(to,{href:Gs.primaryCta.href,variant:"primary",children:Gs.primaryCta.label}),B.jsx(to,{href:Gs.secondaryCta.href,variant:"secondary",children:Gs.secondaryCta.label})]})]})]})}const Nv="!@#$%^&*()_+{}[]|;:,.<>?/0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",p3=50,DS=3500,m3=4e3,g3=DS+m3;function _3(){return typeof window>"u"?!1:window.matchMedia("(prefers-reduced-motion: reduce)").matches}function Lv(a){return/[A-Za-z0-9]/.test(a)}function v3(){return Nv[Math.floor(Math.random()*Nv.length)]??"?"}function S3(a){return Math.random()<.5?v3():a}function x3(a,e){const i=[];for(let m=0;m<a.length;m++)Lv(a[m]??"")&&i.push(m);const r=i.length,o=r===0?1:Math.min(e/DS,1),c=Math.floor(o*r),u=new Set(i.slice(0,c));let h="";for(let m=0;m<a.length;m++){const p=a[m]??"";!Lv(p)||u.has(m)?h+=p:h+=S3(p)}return h}function NS(a,e=!0){const[i,r]=Qe.useState(a);return Qe.useEffect(()=>{if(!e||_3()){r(a);return}let o=Date.now();const c=()=>{const h=Date.now();let m=h-o;m>=g3&&(o=h,m=0),r(x3(a,m))};c();const u=setInterval(c,p3);return()=>{clearInterval(u)}},[a,e]),i}function M3(){const a=NS(wd.text);return B.jsx("div",{className:"manifesto-strip",children:B.jsx("a",{className:"manifesto-strip__link manifesto-strip__link--matrix",href:wd.href,"aria-label":wd.text,children:a})})}function y3(){const a=[...__,...__];return B.jsx("div",{className:"marquee","aria-label":"Live status",children:B.jsx("div",{className:"marquee__viewport",children:B.jsx("div",{className:"marquee__track",children:a.map((e,i)=>B.jsx(AS,{label:e.label,status:e.status,live:"live"in e?e.live:!1},`${e.label}-${i}`))})})})}function E3({text:a}){const e=NS(a);return B.jsx("span",{className:"persona-card__status persona-card__status--matrix","aria-label":a,children:e})}function b3(){return B.jsx("section",{id:"personas",className:"section personas",children:B.jsxs("div",{className:"container",children:[B.jsx("p",{className:"section-kicker",children:Dd.kicker}),B.jsx("h2",{className:"section-title personas__title",children:Dd.title}),B.jsx("div",{className:"personas__grid",children:Dd.items.map(a=>B.jsxs("article",{className:`persona-card persona-card--${a.weight}`,children:[B.jsx("h3",{className:"persona-card__title",children:a.title}),B.jsx("ol",{className:"persona-card__steps",children:a.steps.map(e=>B.jsxs("li",{children:[B.jsxs("span",{className:"persona-card__chevron","aria-hidden":!0,children:[">"," "]}),e]},e))}),B.jsxs("div",{className:"persona-card__cta-row",children:[B.jsx(to,{href:a.cta.href,variant:"ghost",className:"persona-card__cta",children:a.cta.label}),B.jsx(E3,{text:a.status})]})]},a.title))})]})})}function T3(){const[a,e]=Qe.useState(!1),[i,r]=Qe.useState(!1),[o,c]=Qe.useState("");return Qe.useEffect(()=>{const u=()=>e(window.scrollY>24);return u(),window.addEventListener("scroll",u,{passive:!0}),()=>window.removeEventListener("scroll",u)},[]),Qe.useEffect(()=>{const u=Qc.map(m=>m.id),h=new IntersectionObserver(m=>{var g;const p=m.filter(v=>v.isIntersecting).sort((v,_)=>_.intersectionRatio-v.intersectionRatio);(g=p[0])!=null&&g.target.id&&c(p[0].target.id)},{rootMargin:"-30% 0px -55% 0px",threshold:[0,.25,.5]});return u.forEach(m=>{const p=document.getElementById(m);p&&h.observe(p)}),()=>h.disconnect()},[]),Qe.useEffect(()=>(document.body.style.overflow=i?"hidden":"",()=>{document.body.style.overflow=""}),[i]),B.jsxs(B.Fragment,{children:[B.jsx("header",{className:`sticky-header ${a?"sticky-header--solid":""}`,children:B.jsxs("div",{className:"sticky-header__inner",children:[B.jsx("a",{className:"sticky-header__logo",href:"#hero","aria-label":"Morpheum home",children:B.jsx(wS,{size:"sm",brandName:"Morpheum"})}),B.jsx("nav",{className:"sticky-header__nav","aria-label":"Primary",children:Qc.map(u=>B.jsx("a",{href:u.href,className:`sticky-header__link ${o===u.id?"is-active":""}`,children:u.label},u.id))}),B.jsxs("div",{className:"sticky-header__actions",children:[B.jsx("a",{className:"sticky-header__docs",href:En.docs,children:"Docs"}),B.jsx(to,{href:En.app,variant:"primary",className:"sticky-header__launch",children:"Launch Demo"}),B.jsxs("button",{type:"button",className:"sticky-header__menu","aria-expanded":i,"aria-controls":"mobile-nav","aria-label":i?"Close menu":"Open menu",onClick:()=>r(u=>!u),children:[B.jsx("span",{}),B.jsx("span",{}),B.jsx("span",{})]})]})]})}),B.jsx("div",{id:"mobile-nav",className:`mobile-sheet ${i?"is-open":""}`,hidden:!i,children:B.jsxs("nav",{className:"mobile-sheet__nav","aria-label":"Mobile",children:[Qc.map(u=>B.jsx("a",{href:u.href,onClick:()=>r(!1),className:o===u.id?"is-active":"",children:u.label},u.id)),B.jsx("a",{href:En.docs,onClick:()=>r(!1),children:"Docs"})]})})]})}function A3(){const a=Qe.useRef(null),e=CS(a,{amount:.35});return B.jsx("section",{className:"thesis section","aria-label":"Thesis",children:B.jsxs("div",{className:"container thesis__inner",children:[B.jsx("p",{ref:a,className:"thesis__close",children:e?B.jsxs(yp,{text:g_.close,className:"thesis__close-type",speed:36,multiline:!1,active:!0,holdCursor:!0,children:["The Agent-native"," ",B.jsx("span",{className:"thesis__close-accent",children:"L1 DEX"})," — faster, safer trades."]}):B.jsxs("span",{className:"thesis__close-type","aria-hidden":!0,children:["The Agent-native"," ",B.jsx("span",{className:"thesis__close-accent",children:"L1 DEX"})," — faster, safer trades."]})}),B.jsx("p",{className:"section-kicker",children:"Two Risks in Agentic Economy"}),B.jsx("div",{className:"thesis__risks",children:g_.risks.map(i=>B.jsxs("article",{className:"thesis__pair",children:[B.jsxs("div",{className:"thesis__risk",children:[B.jsx("p",{className:"thesis__label",children:"Risk"}),B.jsx("h3",{className:"thesis__risk-title",children:i.risk}),B.jsxs("p",{className:"thesis__failure",children:[B.jsx("span",{"aria-hidden":!0,children:"> "}),i.failure]})]}),B.jsxs("div",{className:"thesis__solve",children:[B.jsx("p",{className:"thesis__label thesis__label--solve",children:"Solution"}),B.jsx("p",{className:"thesis__solve-body",children:i.solve})]})]},i.risk))})]})})}function R3(){return B.jsxs("div",{className:"page",children:[B.jsx("a",{className:"skip-link",href:"#hero",children:"Skip to content"}),B.jsx(M3,{}),B.jsx(T3,{}),B.jsxs("main",{className:"page__main",children:[B.jsx(PR,{}),B.jsx(h3,{}),B.jsx(A3,{}),B.jsx(y3,{}),B.jsx(qM,{}),B.jsx(b3,{}),B.jsx(r3,{}),B.jsx(ZM,{}),B.jsx(WM,{})]}),B.jsx(d3,{})]})}VM.createRoot(document.getElementById("root")).render(B.jsx(Qe.StrictMode,{children:B.jsx(R3,{})}));
