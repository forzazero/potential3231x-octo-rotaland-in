(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function i(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(o){if(o.ep)return;o.ep=!0;const c=i(o);fetch(o.href,c)}})();var hh={exports:{}},Bl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nv;function Iy(){if(nv)return Bl;nv=1;var a=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,o,c){var u=null;if(c!==void 0&&(u=""+c),o.key!==void 0&&(u=""+o.key),"key"in o){c={};for(var d in o)d!=="key"&&(c[d]=o[d])}else c=o;return o=c.ref,{$$typeof:a,type:r,key:u,ref:o!==void 0?o:null,props:c}}return Bl.Fragment=e,Bl.jsx=i,Bl.jsxs=i,Bl}var iv;function By(){return iv||(iv=1,hh.exports=Iy()),hh.exports}var D=By(),ph={exports:{}},mt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var av;function Fy(){if(av)return mt;av=1;var a=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),u=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),v=Symbol.iterator;function x(P){return P===null||typeof P!="object"?null:(P=v&&P[v]||P["@@iterator"],typeof P=="function"?P:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,y={};function S(P,K,ye){this.props=P,this.context=K,this.refs=y,this.updater=ye||b}S.prototype.isReactComponent={},S.prototype.setState=function(P,K){if(typeof P!="object"&&typeof P!="function"&&P!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,P,K,"setState")},S.prototype.forceUpdate=function(P){this.updater.enqueueForceUpdate(this,P,"forceUpdate")};function I(){}I.prototype=S.prototype;function O(P,K,ye){this.props=P,this.context=K,this.refs=y,this.updater=ye||b}var A=O.prototype=new I;A.constructor=O,C(A,S.prototype),A.isPureReactComponent=!0;var U=Array.isArray;function L(){}var B={H:null,A:null,T:null,S:null},E=Object.prototype.hasOwnProperty;function N(P,K,ye){var Ce=ye.ref;return{$$typeof:a,type:P,key:K,ref:Ce!==void 0?Ce:null,props:ye}}function V(P,K){return N(P.type,K,P.props)}function H(P){return typeof P=="object"&&P!==null&&P.$$typeof===a}function Y(P){var K={"=":"=0",":":"=2"};return"$"+P.replace(/[=:]/g,function(ye){return K[ye]})}var he=/\/+/g;function ue(P,K){return typeof P=="object"&&P!==null&&P.key!=null?Y(""+P.key):K.toString(36)}function X(P){switch(P.status){case"fulfilled":return P.value;case"rejected":throw P.reason;default:switch(typeof P.status=="string"?P.then(L,L):(P.status="pending",P.then(function(K){P.status==="pending"&&(P.status="fulfilled",P.value=K)},function(K){P.status==="pending"&&(P.status="rejected",P.reason=K)})),P.status){case"fulfilled":return P.value;case"rejected":throw P.reason}}throw P}function z(P,K,ye,Ce,ze){var se=typeof P;(se==="undefined"||se==="boolean")&&(P=null);var Se=!1;if(P===null)Se=!0;else switch(se){case"bigint":case"string":case"number":Se=!0;break;case"object":switch(P.$$typeof){case a:case e:Se=!0;break;case g:return Se=P._init,z(Se(P._payload),K,ye,Ce,ze)}}if(Se)return ze=ze(P),Se=Ce===""?"."+ue(P,0):Ce,U(ze)?(ye="",Se!=null&&(ye=Se.replace(he,"$&/")+"/"),z(ze,K,ye,"",function(st){return st})):ze!=null&&(H(ze)&&(ze=V(ze,ye+(ze.key==null||P&&P.key===ze.key?"":(""+ze.key).replace(he,"$&/")+"/")+Se)),K.push(ze)),1;Se=0;var Ee=Ce===""?".":Ce+":";if(U(P))for(var Ue=0;Ue<P.length;Ue++)Ce=P[Ue],se=Ee+ue(Ce,Ue),Se+=z(Ce,K,ye,se,ze);else if(Ue=x(P),typeof Ue=="function")for(P=Ue.call(P),Ue=0;!(Ce=P.next()).done;)Ce=Ce.value,se=Ee+ue(Ce,Ue++),Se+=z(Ce,K,ye,se,ze);else if(se==="object"){if(typeof P.then=="function")return z(X(P),K,ye,Ce,ze);throw K=String(P),Error("Objects are not valid as a React child (found: "+(K==="[object Object]"?"object with keys {"+Object.keys(P).join(", ")+"}":K)+"). If you meant to render a collection of children, use an array instead.")}return Se}function G(P,K,ye){if(P==null)return P;var Ce=[],ze=0;return z(P,Ce,"","",function(se){return K.call(ye,se,ze++)}),Ce}function J(P){if(P._status===-1){var K=P._result;K=K(),K.then(function(ye){(P._status===0||P._status===-1)&&(P._status=1,P._result=ye)},function(ye){(P._status===0||P._status===-1)&&(P._status=2,P._result=ye)}),P._status===-1&&(P._status=0,P._result=K)}if(P._status===1)return P._result.default;throw P._result}var fe=typeof reportError=="function"?reportError:function(P){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var K=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof P=="object"&&P!==null&&typeof P.message=="string"?String(P.message):String(P),error:P});if(!window.dispatchEvent(K))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",P);return}console.error(P)},xe={map:G,forEach:function(P,K,ye){G(P,function(){K.apply(this,arguments)},ye)},count:function(P){var K=0;return G(P,function(){K++}),K},toArray:function(P){return G(P,function(K){return K})||[]},only:function(P){if(!H(P))throw Error("React.Children.only expected to receive a single React element child.");return P}};return mt.Activity=_,mt.Children=xe,mt.Component=S,mt.Fragment=i,mt.Profiler=o,mt.PureComponent=O,mt.StrictMode=r,mt.Suspense=m,mt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=B,mt.__COMPILER_RUNTIME={__proto__:null,c:function(P){return B.H.useMemoCache(P)}},mt.cache=function(P){return function(){return P.apply(null,arguments)}},mt.cacheSignal=function(){return null},mt.cloneElement=function(P,K,ye){if(P==null)throw Error("The argument must be a React element, but you passed "+P+".");var Ce=C({},P.props),ze=P.key;if(K!=null)for(se in K.key!==void 0&&(ze=""+K.key),K)!E.call(K,se)||se==="key"||se==="__self"||se==="__source"||se==="ref"&&K.ref===void 0||(Ce[se]=K[se]);var se=arguments.length-2;if(se===1)Ce.children=ye;else if(1<se){for(var Se=Array(se),Ee=0;Ee<se;Ee++)Se[Ee]=arguments[Ee+2];Ce.children=Se}return N(P.type,ze,Ce)},mt.createContext=function(P){return P={$$typeof:u,_currentValue:P,_currentValue2:P,_threadCount:0,Provider:null,Consumer:null},P.Provider=P,P.Consumer={$$typeof:c,_context:P},P},mt.createElement=function(P,K,ye){var Ce,ze={},se=null;if(K!=null)for(Ce in K.key!==void 0&&(se=""+K.key),K)E.call(K,Ce)&&Ce!=="key"&&Ce!=="__self"&&Ce!=="__source"&&(ze[Ce]=K[Ce]);var Se=arguments.length-2;if(Se===1)ze.children=ye;else if(1<Se){for(var Ee=Array(Se),Ue=0;Ue<Se;Ue++)Ee[Ue]=arguments[Ue+2];ze.children=Ee}if(P&&P.defaultProps)for(Ce in Se=P.defaultProps,Se)ze[Ce]===void 0&&(ze[Ce]=Se[Ce]);return N(P,se,ze)},mt.createRef=function(){return{current:null}},mt.forwardRef=function(P){return{$$typeof:d,render:P}},mt.isValidElement=H,mt.lazy=function(P){return{$$typeof:g,_payload:{_status:-1,_result:P},_init:J}},mt.memo=function(P,K){return{$$typeof:h,type:P,compare:K===void 0?null:K}},mt.startTransition=function(P){var K=B.T,ye={};B.T=ye;try{var Ce=P(),ze=B.S;ze!==null&&ze(ye,Ce),typeof Ce=="object"&&Ce!==null&&typeof Ce.then=="function"&&Ce.then(L,fe)}catch(se){fe(se)}finally{K!==null&&ye.types!==null&&(K.types=ye.types),B.T=K}},mt.unstable_useCacheRefresh=function(){return B.H.useCacheRefresh()},mt.use=function(P){return B.H.use(P)},mt.useActionState=function(P,K,ye){return B.H.useActionState(P,K,ye)},mt.useCallback=function(P,K){return B.H.useCallback(P,K)},mt.useContext=function(P){return B.H.useContext(P)},mt.useDebugValue=function(){},mt.useDeferredValue=function(P,K){return B.H.useDeferredValue(P,K)},mt.useEffect=function(P,K){return B.H.useEffect(P,K)},mt.useEffectEvent=function(P){return B.H.useEffectEvent(P)},mt.useId=function(){return B.H.useId()},mt.useImperativeHandle=function(P,K,ye){return B.H.useImperativeHandle(P,K,ye)},mt.useInsertionEffect=function(P,K){return B.H.useInsertionEffect(P,K)},mt.useLayoutEffect=function(P,K){return B.H.useLayoutEffect(P,K)},mt.useMemo=function(P,K){return B.H.useMemo(P,K)},mt.useOptimistic=function(P,K){return B.H.useOptimistic(P,K)},mt.useReducer=function(P,K,ye){return B.H.useReducer(P,K,ye)},mt.useRef=function(P){return B.H.useRef(P)},mt.useState=function(P){return B.H.useState(P)},mt.useSyncExternalStore=function(P,K,ye){return B.H.useSyncExternalStore(P,K,ye)},mt.useTransition=function(){return B.H.useTransition()},mt.version="19.2.7",mt}var sv;function am(){return sv||(sv=1,ph.exports=Fy()),ph.exports}var Pe=am(),mh={exports:{}},Fl={},gh={exports:{}},_h={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rv;function zy(){return rv||(rv=1,(function(a){function e(z,G){var J=z.length;z.push(G);e:for(;0<J;){var fe=J-1>>>1,xe=z[fe];if(0<o(xe,G))z[fe]=G,z[J]=xe,J=fe;else break e}}function i(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var G=z[0],J=z.pop();if(J!==G){z[0]=J;e:for(var fe=0,xe=z.length,P=xe>>>1;fe<P;){var K=2*(fe+1)-1,ye=z[K],Ce=K+1,ze=z[Ce];if(0>o(ye,J))Ce<xe&&0>o(ze,ye)?(z[fe]=ze,z[Ce]=J,fe=Ce):(z[fe]=ye,z[K]=J,fe=K);else if(Ce<xe&&0>o(ze,J))z[fe]=ze,z[Ce]=J,fe=Ce;else break e}}return G}function o(z,G){var J=z.sortIndex-G.sortIndex;return J!==0?J:z.id-G.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;a.unstable_now=function(){return c.now()}}else{var u=Date,d=u.now();a.unstable_now=function(){return u.now()-d}}var m=[],h=[],g=1,_=null,v=3,x=!1,b=!1,C=!1,y=!1,S=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,O=typeof setImmediate<"u"?setImmediate:null;function A(z){for(var G=i(h);G!==null;){if(G.callback===null)r(h);else if(G.startTime<=z)r(h),G.sortIndex=G.expirationTime,e(m,G);else break;G=i(h)}}function U(z){if(C=!1,A(z),!b)if(i(m)!==null)b=!0,L||(L=!0,Y());else{var G=i(h);G!==null&&X(U,G.startTime-z)}}var L=!1,B=-1,E=5,N=-1;function V(){return y?!0:!(a.unstable_now()-N<E)}function H(){if(y=!1,L){var z=a.unstable_now();N=z;var G=!0;try{e:{b=!1,C&&(C=!1,I(B),B=-1),x=!0;var J=v;try{t:{for(A(z),_=i(m);_!==null&&!(_.expirationTime>z&&V());){var fe=_.callback;if(typeof fe=="function"){_.callback=null,v=_.priorityLevel;var xe=fe(_.expirationTime<=z);if(z=a.unstable_now(),typeof xe=="function"){_.callback=xe,A(z),G=!0;break t}_===i(m)&&r(m),A(z)}else r(m);_=i(m)}if(_!==null)G=!0;else{var P=i(h);P!==null&&X(U,P.startTime-z),G=!1}}break e}finally{_=null,v=J,x=!1}G=void 0}}finally{G?Y():L=!1}}}var Y;if(typeof O=="function")Y=function(){O(H)};else if(typeof MessageChannel<"u"){var he=new MessageChannel,ue=he.port2;he.port1.onmessage=H,Y=function(){ue.postMessage(null)}}else Y=function(){S(H,0)};function X(z,G){B=S(function(){z(a.unstable_now())},G)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(z){z.callback=null},a.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<z?Math.floor(1e3/z):5},a.unstable_getCurrentPriorityLevel=function(){return v},a.unstable_next=function(z){switch(v){case 1:case 2:case 3:var G=3;break;default:G=v}var J=v;v=G;try{return z()}finally{v=J}},a.unstable_requestPaint=function(){y=!0},a.unstable_runWithPriority=function(z,G){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var J=v;v=z;try{return G()}finally{v=J}},a.unstable_scheduleCallback=function(z,G,J){var fe=a.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?fe+J:fe):J=fe,z){case 1:var xe=-1;break;case 2:xe=250;break;case 5:xe=1073741823;break;case 4:xe=1e4;break;default:xe=5e3}return xe=J+xe,z={id:g++,callback:G,priorityLevel:z,startTime:J,expirationTime:xe,sortIndex:-1},J>fe?(z.sortIndex=J,e(h,z),i(m)===null&&z===i(h)&&(C?(I(B),B=-1):C=!0,X(U,J-fe))):(z.sortIndex=xe,e(m,z),b||x||(b=!0,L||(L=!0,Y()))),z},a.unstable_shouldYield=V,a.unstable_wrapCallback=function(z){var G=v;return function(){var J=v;v=G;try{return z.apply(this,arguments)}finally{v=J}}}})(_h)),_h}var ov;function Hy(){return ov||(ov=1,gh.exports=zy()),gh.exports}var vh={exports:{}},li={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lv;function Gy(){if(lv)return li;lv=1;var a=am();function e(m){var h="https://react.dev/errors/"+m;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)h+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},o=Symbol.for("react.portal");function c(m,h,g){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:_==null?null:""+_,children:m,containerInfo:h,implementation:g}}var u=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,h){if(m==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return li.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,li.createPortal=function(m,h){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(e(299));return c(m,h,null,g)},li.flushSync=function(m){var h=u.T,g=r.p;try{if(u.T=null,r.p=2,m)return m()}finally{u.T=h,r.p=g,r.d.f()}},li.preconnect=function(m,h){typeof m=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,r.d.C(m,h))},li.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},li.preinit=function(m,h){if(typeof m=="string"&&h&&typeof h.as=="string"){var g=h.as,_=d(g,h.crossOrigin),v=typeof h.integrity=="string"?h.integrity:void 0,x=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;g==="style"?r.d.S(m,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:_,integrity:v,fetchPriority:x}):g==="script"&&r.d.X(m,{crossOrigin:_,integrity:v,fetchPriority:x,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},li.preinitModule=function(m,h){if(typeof m=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var g=d(h.as,h.crossOrigin);r.d.M(m,{crossOrigin:g,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&r.d.M(m)},li.preload=function(m,h){if(typeof m=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var g=h.as,_=d(g,h.crossOrigin);r.d.L(m,g,{crossOrigin:_,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},li.preloadModule=function(m,h){if(typeof m=="string")if(h){var g=d(h.as,h.crossOrigin);r.d.m(m,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:g,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else r.d.m(m)},li.requestFormReset=function(m){r.d.r(m)},li.unstable_batchedUpdates=function(m,h){return m(h)},li.useFormState=function(m,h,g){return u.H.useFormState(m,h,g)},li.useFormStatus=function(){return u.H.useHostTransitionStatus()},li.version="19.2.7",li}var cv;function Zx(){if(cv)return vh.exports;cv=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(e){console.error(e)}}return a(),vh.exports=Gy(),vh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uv;function Vy(){if(uv)return Fl;uv=1;var a=Hy(),e=am(),i=Zx();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)n+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,s=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(s=n.return),t=n.return;while(t)}return n.tag===3?s:null}function u(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function d(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(r(188))}function h(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(r(188));return n!==t?null:t}for(var s=t,l=n;;){var f=s.return;if(f===null)break;var p=f.alternate;if(p===null){if(l=f.return,l!==null){s=l;continue}break}if(f.child===p.child){for(p=f.child;p;){if(p===s)return m(f),t;if(p===l)return m(f),n;p=p.sibling}throw Error(r(188))}if(s.return!==l.return)s=f,l=p;else{for(var M=!1,w=f.child;w;){if(w===s){M=!0,s=f,l=p;break}if(w===l){M=!0,l=f,s=p;break}w=w.sibling}if(!M){for(w=p.child;w;){if(w===s){M=!0,s=p,l=f;break}if(w===l){M=!0,l=p,s=f;break}w=w.sibling}if(!M)throw Error(r(189))}}if(s.alternate!==l)throw Error(r(190))}if(s.tag!==3)throw Error(r(188));return s.stateNode.current===s?t:n}function g(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=g(t),n!==null)return n;t=t.sibling}return null}var _=Object.assign,v=Symbol.for("react.element"),x=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),I=Symbol.for("react.consumer"),O=Symbol.for("react.context"),A=Symbol.for("react.forward_ref"),U=Symbol.for("react.suspense"),L=Symbol.for("react.suspense_list"),B=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),N=Symbol.for("react.activity"),V=Symbol.for("react.memo_cache_sentinel"),H=Symbol.iterator;function Y(t){return t===null||typeof t!="object"?null:(t=H&&t[H]||t["@@iterator"],typeof t=="function"?t:null)}var he=Symbol.for("react.client.reference");function ue(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===he?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case C:return"Fragment";case S:return"Profiler";case y:return"StrictMode";case U:return"Suspense";case L:return"SuspenseList";case N:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case b:return"Portal";case O:return t.displayName||"Context";case I:return(t._context.displayName||"Context")+".Consumer";case A:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case B:return n=t.displayName||null,n!==null?n:ue(t.type)||"Memo";case E:n=t._payload,t=t._init;try{return ue(t(n))}catch{}}return null}var X=Array.isArray,z=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,J={pending:!1,data:null,method:null,action:null},fe=[],xe=-1;function P(t){return{current:t}}function K(t){0>xe||(t.current=fe[xe],fe[xe]=null,xe--)}function ye(t,n){xe++,fe[xe]=t.current,t.current=n}var Ce=P(null),ze=P(null),se=P(null),Se=P(null);function Ee(t,n){switch(ye(se,n),ye(ze,t),ye(Ce,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?T_(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=T_(n),t=A_(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}K(Ce),ye(Ce,t)}function Ue(){K(Ce),K(ze),K(se)}function st(t){t.memoizedState!==null&&ye(Se,t);var n=Ce.current,s=A_(n,t.type);n!==s&&(ye(ze,t),ye(Ce,s))}function He(t){ze.current===t&&(K(Ce),K(ze)),Se.current===t&&(K(Se),Ul._currentValue=J)}var bt,ht;function ot(t){if(bt===void 0)try{throw Error()}catch(s){var n=s.stack.trim().match(/\n( *(at )?)/);bt=n&&n[1]||"",ht=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+bt+t+ht}var lt=!1;function _t(t,n){if(!t||lt)return"";lt=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(n){var be=function(){throw Error()};if(Object.defineProperty(be.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(be,[])}catch(de){var ce=de}Reflect.construct(t,[],be)}else{try{be.call()}catch(de){ce=de}t.call(be.prototype)}}else{try{throw Error()}catch(de){ce=de}(be=t())&&typeof be.catch=="function"&&be.catch(function(){})}}catch(de){if(de&&ce&&typeof de.stack=="string")return[de.stack,ce.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var p=l.DetermineComponentFrameRoot(),M=p[0],w=p[1];if(M&&w){var k=M.split(`
`),re=w.split(`
`);for(f=l=0;l<k.length&&!k[l].includes("DetermineComponentFrameRoot");)l++;for(;f<re.length&&!re[f].includes("DetermineComponentFrameRoot");)f++;if(l===k.length||f===re.length)for(l=k.length-1,f=re.length-1;1<=l&&0<=f&&k[l]!==re[f];)f--;for(;1<=l&&0<=f;l--,f--)if(k[l]!==re[f]){if(l!==1||f!==1)do if(l--,f--,0>f||k[l]!==re[f]){var ve=`
`+k[l].replace(" at new "," at ");return t.displayName&&ve.includes("<anonymous>")&&(ve=ve.replace("<anonymous>",t.displayName)),ve}while(1<=l&&0<=f);break}}}finally{lt=!1,Error.prepareStackTrace=s}return(s=t?t.displayName||t.name:"")?ot(s):""}function It(t,n){switch(t.tag){case 26:case 27:case 5:return ot(t.type);case 16:return ot("Lazy");case 13:return t.child!==n&&n!==null?ot("Suspense Fallback"):ot("Suspense");case 19:return ot("SuspenseList");case 0:case 15:return _t(t.type,!1);case 11:return _t(t.type.render,!1);case 1:return _t(t.type,!0);case 31:return ot("Activity");default:return""}}function sn(t){try{var n="",s=null;do n+=It(t,s),s=t,t=t.return;while(t);return n}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var Jt=Object.prototype.hasOwnProperty,Zt=a.unstable_scheduleCallback,Lt=a.unstable_cancelCallback,$t=a.unstable_shouldYield,j=a.unstable_requestPaint,qt=a.unstable_now,Tt=a.unstable_getCurrentPriorityLevel,F=a.unstable_ImmediatePriority,T=a.unstable_UserBlockingPriority,$=a.unstable_NormalPriority,oe=a.unstable_LowPriority,me=a.unstable_IdlePriority,we=a.log,Ie=a.unstable_setDisableYieldValue,pe=null,ge=null;function Re(t){if(typeof we=="function"&&Ie(t),ge&&typeof ge.setStrictMode=="function")try{ge.setStrictMode(pe,t)}catch{}}var Ge=Math.clz32?Math.clz32:Je,Be=Math.log,Oe=Math.LN2;function Je(t){return t>>>=0,t===0?32:31-(Be(t)/Oe|0)|0}var nt=256,ut=262144,q=4194304;function De(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function _e(t,n,s){var l=t.pendingLanes;if(l===0)return 0;var f=0,p=t.suspendedLanes,M=t.pingedLanes;t=t.warmLanes;var w=l&134217727;return w!==0?(l=w&~p,l!==0?f=De(l):(M&=w,M!==0?f=De(M):s||(s=w&~t,s!==0&&(f=De(s))))):(w=l&~p,w!==0?f=De(w):M!==0?f=De(M):s||(s=l&~t,s!==0&&(f=De(s)))),f===0?0:n!==0&&n!==f&&(n&p)===0&&(p=f&-f,s=n&-n,p>=s||p===32&&(s&4194048)!==0)?n:f}function Le(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function Ne(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ae(){var t=q;return q<<=1,(q&62914560)===0&&(q=4194304),t}function Ke(t){for(var n=[],s=0;31>s;s++)n.push(t);return n}function qe(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Ht(t,n,s,l,f,p){var M=t.pendingLanes;t.pendingLanes=s,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=s,t.entangledLanes&=s,t.errorRecoveryDisabledLanes&=s,t.shellSuspendCounter=0;var w=t.entanglements,k=t.expirationTimes,re=t.hiddenUpdates;for(s=M&~s;0<s;){var ve=31-Ge(s),be=1<<ve;w[ve]=0,k[ve]=-1;var ce=re[ve];if(ce!==null)for(re[ve]=null,ve=0;ve<ce.length;ve++){var de=ce[ve];de!==null&&(de.lane&=-536870913)}s&=~be}l!==0&&Nt(t,l,0),p!==0&&f===0&&t.tag!==0&&(t.suspendedLanes|=p&~(M&~n))}function Nt(t,n,s){t.pendingLanes|=n,t.suspendedLanes&=~n;var l=31-Ge(n);t.entangledLanes|=n,t.entanglements[l]=t.entanglements[l]|1073741824|s&261930}function Bt(t,n){var s=t.entangledLanes|=n;for(t=t.entanglements;s;){var l=31-Ge(s),f=1<<l;f&n|t[l]&n&&(t[l]|=n),s&=~f}}function Mn(t,n){var s=n&-n;return s=(s&42)!==0?1:hi(s),(s&(t.suspendedLanes|n))!==0?0:s}function hi(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Gi(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function $n(){var t=G.p;return t!==0?t:(t=window.event,t===void 0?32:Z_(t.type))}function pi(t,n){var s=G.p;try{return G.p=t,n()}finally{G.p=s}}var ei=Math.random().toString(36).slice(2),dn="__reactFiber$"+ei,Sn="__reactProps$"+ei,yn="__reactContainer$"+ei,xa="__reactEvents$"+ei,rr="__reactListeners$"+ei,Sa="__reactHandles$"+ei,Ba="__reactResources$"+ei,ra="__reactMarker$"+ei;function Vi(t){delete t[dn],delete t[Sn],delete t[xa],delete t[rr],delete t[Sa]}function En(t){var n=t[dn];if(n)return n;for(var s=t.parentNode;s;){if(n=s[yn]||s[dn]){if(s=n.alternate,n.child!==null||s!==null&&s.child!==null)for(t=U_(t);t!==null;){if(s=t[dn])return s;t=U_(t)}return n}t=s,s=t.parentNode}return null}function kn(t){if(t=t[dn]||t[yn]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function bn(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function Ma(t){var n=t[Ba];return n||(n=t[Ba]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Tn(t){t[ra]=!0}var _s=new Set,R={};function Z(t,n){le(t,n),le(t+"Capture",n)}function le(t,n){for(R[t]=n,t=0;t<n.length;t++)_s.add(n[t])}var ne=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ie={},Ve={};function Ye(t){return Jt.call(Ve,t)?!0:Jt.call(ie,t)?!1:ne.test(t)?Ve[t]=!0:(ie[t]=!0,!1)}function Fe(t,n,s){if(Ye(n))if(s===null)t.removeAttribute(n);else{switch(typeof s){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var l=n.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+s)}}function je(t,n,s){if(s===null)t.removeAttribute(n);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+s)}}function Ze(t,n,s,l){if(l===null)t.removeAttribute(s);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(s);return}t.setAttributeNS(n,s,""+l)}}function it(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function pt(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function et(t,n,s){var l=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var f=l.get,p=l.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return f.call(this)},set:function(M){s=""+M,p.call(this,M)}}),Object.defineProperty(t,n,{enumerable:l.enumerable}),{getValue:function(){return s},setValue:function(M){s=""+M},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Ut(t){if(!t._valueTracker){var n=pt(t)?"checked":"value";t._valueTracker=et(t,n,""+t[n])}}function cn(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var s=n.getValue(),l="";return t&&(l=pt(t)?t.checked?"true":"false":t.value),t=l,t!==s?(n.setValue(t),!0):!1}function Kt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Gt=/[\n"\\]/g;function Vt(t){return t.replace(Gt,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Xe(t,n,s,l,f,p,M,w){t.name="",M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"?t.type=M:t.removeAttribute("type"),n!=null?M==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+it(n)):t.value!==""+it(n)&&(t.value=""+it(n)):M!=="submit"&&M!=="reset"||t.removeAttribute("value"),n!=null?ee(t,M,it(n)):s!=null?ee(t,M,it(s)):l!=null&&t.removeAttribute("value"),f==null&&p!=null&&(t.defaultChecked=!!p),f!=null&&(t.checked=f&&typeof f!="function"&&typeof f!="symbol"),w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"?t.name=""+it(w):t.removeAttribute("name")}function Xn(t,n,s,l,f,p,M,w){if(p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"&&(t.type=p),n!=null||s!=null){if(!(p!=="submit"&&p!=="reset"||n!=null)){Ut(t);return}s=s!=null?""+it(s):"",n=n!=null?""+it(n):s,w||n===t.value||(t.value=n),t.defaultValue=n}l=l??f,l=typeof l!="function"&&typeof l!="symbol"&&!!l,t.checked=w?t.checked:!!l,t.defaultChecked=!!l,M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"&&(t.name=M),Ut(t)}function ee(t,n,s){n==="number"&&Kt(t.ownerDocument)===t||t.defaultValue===""+s||(t.defaultValue=""+s)}function Te(t,n,s,l){if(t=t.options,n){n={};for(var f=0;f<s.length;f++)n["$"+s[f]]=!0;for(s=0;s<t.length;s++)f=n.hasOwnProperty("$"+t[s].value),t[s].selected!==f&&(t[s].selected=f),f&&l&&(t[s].defaultSelected=!0)}else{for(s=""+it(s),n=null,f=0;f<t.length;f++){if(t[f].value===s){t[f].selected=!0,l&&(t[f].defaultSelected=!0);return}n!==null||t[f].disabled||(n=t[f])}n!==null&&(n.selected=!0)}}function ke(t,n,s){if(n!=null&&(n=""+it(n),n!==t.value&&(t.value=n),s==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=s!=null?""+it(s):""}function $e(t,n,s,l){if(n==null){if(l!=null){if(s!=null)throw Error(r(92));if(X(l)){if(1<l.length)throw Error(r(93));l=l[0]}s=l}s==null&&(s=""),n=s}s=it(n),t.defaultValue=s,l=t.textContent,l===s&&l!==""&&l!==null&&(t.value=l),Ut(t)}function dt(t,n){if(n){var s=t.firstChild;if(s&&s===t.lastChild&&s.nodeType===3){s.nodeValue=n;return}}t.textContent=n}var at=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Mt(t,n,s){var l=n.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?l?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":l?t.setProperty(n,s):typeof s!="number"||s===0||at.has(n)?n==="float"?t.cssFloat=s:t[n]=(""+s).trim():t[n]=s+"px"}function hn(t,n,s){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,s!=null){for(var l in s)!s.hasOwnProperty(l)||n!=null&&n.hasOwnProperty(l)||(l.indexOf("--")===0?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="");for(var f in n)l=n[f],n.hasOwnProperty(f)&&s[f]!==l&&Mt(t,f,l)}else for(var p in n)n.hasOwnProperty(p)&&Mt(t,p,n[p])}function vt(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var kt=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Dn=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Pn(t){return Dn.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function en(){}var Si=null;function oi(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Mi=null,ki=null;function vs(t){var n=kn(t);if(n&&(t=n.stateNode)){var s=t[Sn]||null;e:switch(t=n.stateNode,n.type){case"input":if(Xe(t,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),n=s.name,s.type==="radio"&&n!=null){for(s=t;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+Vt(""+n)+'"][type="radio"]'),n=0;n<s.length;n++){var l=s[n];if(l!==t&&l.form===t.form){var f=l[Sn]||null;if(!f)throw Error(r(90));Xe(l,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(n=0;n<s.length;n++)l=s[n],l.form===t.form&&cn(l)}break e;case"textarea":ke(t,s.value,s.defaultValue);break e;case"select":n=s.value,n!=null&&Te(t,!!s.multiple,n,!1)}}}var xs=!1;function Kn(t,n,s){if(xs)return t(n,s);xs=!0;try{var l=t(n);return l}finally{if(xs=!1,(Mi!==null||ki!==null)&&(qc(),Mi&&(n=Mi,t=ki,ki=Mi=null,vs(n),t)))for(n=0;n<t.length;n++)vs(t[n])}}function Fa(t,n){var s=t.stateNode;if(s===null)return null;var l=s[Sn]||null;if(l===null)return null;s=l[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(s&&typeof s!="function")throw Error(r(231,n,typeof s));return s}var wi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ir=!1;if(wi)try{var za={};Object.defineProperty(za,"passive",{get:function(){Ir=!0}}),window.addEventListener("test",za,za),window.removeEventListener("test",za,za)}catch{Ir=!1}var oa=null,Ha=null,Xi=null;function Ko(){if(Xi)return Xi;var t,n=Ha,s=n.length,l,f="value"in oa?oa.value:oa.textContent,p=f.length;for(t=0;t<s&&n[t]===f[t];t++);var M=s-t;for(l=1;l<=M&&n[s-l]===f[p-l];l++);return Xi=f.slice(t,1<l?1-l:void 0)}function Br(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Fr(){return!0}function hf(){return!1}function In(t){function n(s,l,f,p,M){this._reactName=s,this._targetInst=f,this.type=l,this.nativeEvent=p,this.target=M,this.currentTarget=null;for(var w in t)t.hasOwnProperty(w)&&(s=t[w],this[w]=s?s(p):p[w]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?Fr:hf,this.isPropagationStopped=hf,this}return _(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=Fr)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=Fr)},persist:function(){},isPersistent:Fr}),n}var Ga={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},zr=In(Ga),Va=_({},Ga,{view:0,detail:0}),oc=In(Va),Qo,Hr,Ss,Gr=_({},Va,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ln,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ss&&(Ss&&t.type==="mousemove"?(Qo=t.screenX-Ss.screenX,Hr=t.screenY-Ss.screenY):Hr=Qo=0,Ss=t),Qo)},movementY:function(t){return"movementY"in t?t.movementY:Hr}}),or=In(Gr),Vr=_({},Gr,{dataTransfer:0}),pf=In(Vr),mf=_({},Va,{relatedTarget:0}),lc=In(mf),cc=_({},Ga,{animationName:0,elapsedTime:0,pseudoElement:0}),Jo=In(cc),gf=_({},Ga,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),_f=In(gf),vf=_({},Ga,{data:0}),$o=In(vf),uc={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},xt={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Wn={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Wi(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=Wn[t])?!!n[t]:!1}function Ln(){return Wi}var mi=_({},Va,{key:function(t){if(t.key){var n=uc[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Br(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?xt[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ln,charCode:function(t){return t.type==="keypress"?Br(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Br(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Yn=In(mi),la=_({},Gr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ka=In(la),lr=_({},Va,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ln}),Xa=In(lr),fc=_({},Ga,{propertyName:0,elapsedTime:0,pseudoElement:0}),$S=In(fc),eM=_({},Gr,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),tM=In(eM),nM=_({},Ga,{newState:0,oldState:0}),iM=In(nM),aM=[9,13,27,32],xf=wi&&"CompositionEvent"in window,el=null;wi&&"documentMode"in document&&(el=document.documentMode);var sM=wi&&"TextEvent"in window&&!el,Lm=wi&&(!xf||el&&8<el&&11>=el),Nm=" ",Um=!1;function Om(t,n){switch(t){case"keyup":return aM.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Pm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var kr=!1;function rM(t,n){switch(t){case"compositionend":return Pm(n);case"keypress":return n.which!==32?null:(Um=!0,Nm);case"textInput":return t=n.data,t===Nm&&Um?null:t;default:return null}}function oM(t,n){if(kr)return t==="compositionend"||!xf&&Om(t,n)?(t=Ko(),Xi=Ha=oa=null,kr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Lm&&n.locale!=="ko"?null:n.data;default:return null}}var lM={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Im(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!lM[t.type]:n==="textarea"}function Bm(t,n,s,l){Mi?ki?ki.push(l):ki=[l]:Mi=l,n=eu(n,"onChange"),0<n.length&&(s=new zr("onChange","change",null,s,l),t.push({event:s,listeners:n}))}var tl=null,nl=null;function cM(t){x_(t,0)}function dc(t){var n=bn(t);if(cn(n))return t}function Fm(t,n){if(t==="change")return n}var zm=!1;if(wi){var Sf;if(wi){var Mf="oninput"in document;if(!Mf){var Hm=document.createElement("div");Hm.setAttribute("oninput","return;"),Mf=typeof Hm.oninput=="function"}Sf=Mf}else Sf=!1;zm=Sf&&(!document.documentMode||9<document.documentMode)}function Gm(){tl&&(tl.detachEvent("onpropertychange",Vm),nl=tl=null)}function Vm(t){if(t.propertyName==="value"&&dc(nl)){var n=[];Bm(n,nl,t,oi(t)),Kn(cM,n)}}function uM(t,n,s){t==="focusin"?(Gm(),tl=n,nl=s,tl.attachEvent("onpropertychange",Vm)):t==="focusout"&&Gm()}function fM(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return dc(nl)}function dM(t,n){if(t==="click")return dc(n)}function hM(t,n){if(t==="input"||t==="change")return dc(n)}function pM(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Di=typeof Object.is=="function"?Object.is:pM;function il(t,n){if(Di(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var s=Object.keys(t),l=Object.keys(n);if(s.length!==l.length)return!1;for(l=0;l<s.length;l++){var f=s[l];if(!Jt.call(n,f)||!Di(t[f],n[f]))return!1}return!0}function km(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Xm(t,n){var s=km(t);t=0;for(var l;s;){if(s.nodeType===3){if(l=t+s.textContent.length,t<=n&&l>=n)return{node:s,offset:n-t};t=l}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=km(s)}}function Wm(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Wm(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Ym(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=Kt(t.document);n instanceof t.HTMLIFrameElement;){try{var s=typeof n.contentWindow.location.href=="string"}catch{s=!1}if(s)t=n.contentWindow;else break;n=Kt(t.document)}return n}function yf(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var mM=wi&&"documentMode"in document&&11>=document.documentMode,Xr=null,Ef=null,al=null,bf=!1;function qm(t,n,s){var l=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;bf||Xr==null||Xr!==Kt(l)||(l=Xr,"selectionStart"in l&&yf(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),al&&il(al,l)||(al=l,l=eu(Ef,"onSelect"),0<l.length&&(n=new zr("onSelect","select",null,n,s),t.push({event:n,listeners:l}),n.target=Xr)))}function cr(t,n){var s={};return s[t.toLowerCase()]=n.toLowerCase(),s["Webkit"+t]="webkit"+n,s["Moz"+t]="moz"+n,s}var Wr={animationend:cr("Animation","AnimationEnd"),animationiteration:cr("Animation","AnimationIteration"),animationstart:cr("Animation","AnimationStart"),transitionrun:cr("Transition","TransitionRun"),transitionstart:cr("Transition","TransitionStart"),transitioncancel:cr("Transition","TransitionCancel"),transitionend:cr("Transition","TransitionEnd")},Tf={},jm={};wi&&(jm=document.createElement("div").style,"AnimationEvent"in window||(delete Wr.animationend.animation,delete Wr.animationiteration.animation,delete Wr.animationstart.animation),"TransitionEvent"in window||delete Wr.transitionend.transition);function ur(t){if(Tf[t])return Tf[t];if(!Wr[t])return t;var n=Wr[t],s;for(s in n)if(n.hasOwnProperty(s)&&s in jm)return Tf[t]=n[s];return t}var Zm=ur("animationend"),Km=ur("animationiteration"),Qm=ur("animationstart"),gM=ur("transitionrun"),_M=ur("transitionstart"),vM=ur("transitioncancel"),Jm=ur("transitionend"),$m=new Map,Af="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Af.push("scrollEnd");function ca(t,n){$m.set(t,n),Z(n,[t])}var hc=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},Yi=[],Yr=0,Rf=0;function pc(){for(var t=Yr,n=Rf=Yr=0;n<t;){var s=Yi[n];Yi[n++]=null;var l=Yi[n];Yi[n++]=null;var f=Yi[n];Yi[n++]=null;var p=Yi[n];if(Yi[n++]=null,l!==null&&f!==null){var M=l.pending;M===null?f.next=f:(f.next=M.next,M.next=f),l.pending=f}p!==0&&e0(s,f,p)}}function mc(t,n,s,l){Yi[Yr++]=t,Yi[Yr++]=n,Yi[Yr++]=s,Yi[Yr++]=l,Rf|=l,t.lanes|=l,t=t.alternate,t!==null&&(t.lanes|=l)}function Cf(t,n,s,l){return mc(t,n,s,l),gc(t)}function fr(t,n){return mc(t,null,null,n),gc(t)}function e0(t,n,s){t.lanes|=s;var l=t.alternate;l!==null&&(l.lanes|=s);for(var f=!1,p=t.return;p!==null;)p.childLanes|=s,l=p.alternate,l!==null&&(l.childLanes|=s),p.tag===22&&(t=p.stateNode,t===null||t._visibility&1||(f=!0)),t=p,p=p.return;return t.tag===3?(p=t.stateNode,f&&n!==null&&(f=31-Ge(s),t=p.hiddenUpdates,l=t[f],l===null?t[f]=[n]:l.push(n),n.lane=s|536870912),p):null}function gc(t){if(50<Al)throw Al=0,Bd=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var qr={};function xM(t,n,s,l){this.tag=t,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Li(t,n,s,l){return new xM(t,n,s,l)}function wf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Wa(t,n){var s=t.alternate;return s===null?(s=Li(t.tag,n,t.key,t.mode),s.elementType=t.elementType,s.type=t.type,s.stateNode=t.stateNode,s.alternate=t,t.alternate=s):(s.pendingProps=n,s.type=t.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=t.flags&65011712,s.childLanes=t.childLanes,s.lanes=t.lanes,s.child=t.child,s.memoizedProps=t.memoizedProps,s.memoizedState=t.memoizedState,s.updateQueue=t.updateQueue,n=t.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},s.sibling=t.sibling,s.index=t.index,s.ref=t.ref,s.refCleanup=t.refCleanup,s}function t0(t,n){t.flags&=65011714;var s=t.alternate;return s===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=s.childLanes,t.lanes=s.lanes,t.child=s.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=s.memoizedProps,t.memoizedState=s.memoizedState,t.updateQueue=s.updateQueue,t.type=s.type,n=s.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function _c(t,n,s,l,f,p){var M=0;if(l=t,typeof t=="function")wf(t)&&(M=1);else if(typeof t=="string")M=by(t,s,Ce.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case N:return t=Li(31,s,n,f),t.elementType=N,t.lanes=p,t;case C:return dr(s.children,f,p,n);case y:M=8,f|=24;break;case S:return t=Li(12,s,n,f|2),t.elementType=S,t.lanes=p,t;case U:return t=Li(13,s,n,f),t.elementType=U,t.lanes=p,t;case L:return t=Li(19,s,n,f),t.elementType=L,t.lanes=p,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case O:M=10;break e;case I:M=9;break e;case A:M=11;break e;case B:M=14;break e;case E:M=16,l=null;break e}M=29,s=Error(r(130,t===null?"null":typeof t,"")),l=null}return n=Li(M,s,n,f),n.elementType=t,n.type=l,n.lanes=p,n}function dr(t,n,s,l){return t=Li(7,t,l,n),t.lanes=s,t}function Df(t,n,s){return t=Li(6,t,null,n),t.lanes=s,t}function n0(t){var n=Li(18,null,null,0);return n.stateNode=t,n}function Lf(t,n,s){return n=Li(4,t.children!==null?t.children:[],t.key,n),n.lanes=s,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var i0=new WeakMap;function qi(t,n){if(typeof t=="object"&&t!==null){var s=i0.get(t);return s!==void 0?s:(n={value:t,source:n,stack:sn(n)},i0.set(t,n),n)}return{value:t,source:n,stack:sn(n)}}var jr=[],Zr=0,vc=null,sl=0,ji=[],Zi=0,Ms=null,ya=1,Ea="";function Ya(t,n){jr[Zr++]=sl,jr[Zr++]=vc,vc=t,sl=n}function a0(t,n,s){ji[Zi++]=ya,ji[Zi++]=Ea,ji[Zi++]=Ms,Ms=t;var l=ya;t=Ea;var f=32-Ge(l)-1;l&=~(1<<f),s+=1;var p=32-Ge(n)+f;if(30<p){var M=f-f%5;p=(l&(1<<M)-1).toString(32),l>>=M,f-=M,ya=1<<32-Ge(n)+f|s<<f|l,Ea=p+t}else ya=1<<p|s<<f|l,Ea=t}function Nf(t){t.return!==null&&(Ya(t,1),a0(t,1,0))}function Uf(t){for(;t===vc;)vc=jr[--Zr],jr[Zr]=null,sl=jr[--Zr],jr[Zr]=null;for(;t===Ms;)Ms=ji[--Zi],ji[Zi]=null,Ea=ji[--Zi],ji[Zi]=null,ya=ji[--Zi],ji[Zi]=null}function s0(t,n){ji[Zi++]=ya,ji[Zi++]=Ea,ji[Zi++]=Ms,ya=n.id,Ea=n.overflow,Ms=t}var ti=null,pn=null,Ot=!1,ys=null,Ki=!1,Of=Error(r(519));function Es(t){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw rl(qi(n,t)),Of}function r0(t){var n=t.stateNode,s=t.type,l=t.memoizedProps;switch(n[dn]=t,n[Sn]=l,s){case"dialog":Ct("cancel",n),Ct("close",n);break;case"iframe":case"object":case"embed":Ct("load",n);break;case"video":case"audio":for(s=0;s<Cl.length;s++)Ct(Cl[s],n);break;case"source":Ct("error",n);break;case"img":case"image":case"link":Ct("error",n),Ct("load",n);break;case"details":Ct("toggle",n);break;case"input":Ct("invalid",n),Xn(n,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":Ct("invalid",n);break;case"textarea":Ct("invalid",n),$e(n,l.value,l.defaultValue,l.children)}s=l.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||n.textContent===""+s||l.suppressHydrationWarning===!0||E_(n.textContent,s)?(l.popover!=null&&(Ct("beforetoggle",n),Ct("toggle",n)),l.onScroll!=null&&Ct("scroll",n),l.onScrollEnd!=null&&Ct("scrollend",n),l.onClick!=null&&(n.onclick=en),n=!0):n=!1,n||Es(t,!0)}function o0(t){for(ti=t.return;ti;)switch(ti.tag){case 5:case 31:case 13:Ki=!1;return;case 27:case 3:Ki=!0;return;default:ti=ti.return}}function Kr(t){if(t!==ti)return!1;if(!Ot)return o0(t),Ot=!0,!1;var n=t.tag,s;if((s=n!==3&&n!==27)&&((s=n===5)&&(s=t.type,s=!(s!=="form"&&s!=="button")||Jd(t.type,t.memoizedProps)),s=!s),s&&pn&&Es(t),o0(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));pn=N_(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));pn=N_(t)}else n===27?(n=pn,Bs(t.type)?(t=ih,ih=null,pn=t):pn=n):pn=ti?Ji(t.stateNode.nextSibling):null;return!0}function hr(){pn=ti=null,Ot=!1}function Pf(){var t=ys;return t!==null&&(Ti===null?Ti=t:Ti.push.apply(Ti,t),ys=null),t}function rl(t){ys===null?ys=[t]:ys.push(t)}var If=P(null),pr=null,qa=null;function bs(t,n,s){ye(If,n._currentValue),n._currentValue=s}function ja(t){t._currentValue=If.current,K(If)}function Bf(t,n,s){for(;t!==null;){var l=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,l!==null&&(l.childLanes|=n)):l!==null&&(l.childLanes&n)!==n&&(l.childLanes|=n),t===s)break;t=t.return}}function Ff(t,n,s,l){var f=t.child;for(f!==null&&(f.return=t);f!==null;){var p=f.dependencies;if(p!==null){var M=f.child;p=p.firstContext;e:for(;p!==null;){var w=p;p=f;for(var k=0;k<n.length;k++)if(w.context===n[k]){p.lanes|=s,w=p.alternate,w!==null&&(w.lanes|=s),Bf(p.return,s,t),l||(M=null);break e}p=w.next}}else if(f.tag===18){if(M=f.return,M===null)throw Error(r(341));M.lanes|=s,p=M.alternate,p!==null&&(p.lanes|=s),Bf(M,s,t),M=null}else M=f.child;if(M!==null)M.return=f;else for(M=f;M!==null;){if(M===t){M=null;break}if(f=M.sibling,f!==null){f.return=M.return,M=f;break}M=M.return}f=M}}function Qr(t,n,s,l){t=null;for(var f=n,p=!1;f!==null;){if(!p){if((f.flags&524288)!==0)p=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var M=f.alternate;if(M===null)throw Error(r(387));if(M=M.memoizedProps,M!==null){var w=f.type;Di(f.pendingProps.value,M.value)||(t!==null?t.push(w):t=[w])}}else if(f===Se.current){if(M=f.alternate,M===null)throw Error(r(387));M.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(t!==null?t.push(Ul):t=[Ul])}f=f.return}t!==null&&Ff(n,t,s,l),n.flags|=262144}function xc(t){for(t=t.firstContext;t!==null;){if(!Di(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function mr(t){pr=t,qa=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function ni(t){return l0(pr,t)}function Sc(t,n){return pr===null&&mr(t),l0(t,n)}function l0(t,n){var s=n._currentValue;if(n={context:n,memoizedValue:s,next:null},qa===null){if(t===null)throw Error(r(308));qa=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else qa=qa.next=n;return s}var SM=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(s,l){t.push(l)}};this.abort=function(){n.aborted=!0,t.forEach(function(s){return s()})}},MM=a.unstable_scheduleCallback,yM=a.unstable_NormalPriority,Bn={$$typeof:O,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function zf(){return{controller:new SM,data:new Map,refCount:0}}function ol(t){t.refCount--,t.refCount===0&&MM(yM,function(){t.controller.abort()})}var ll=null,Hf=0,Jr=0,$r=null;function EM(t,n){if(ll===null){var s=ll=[];Hf=0,Jr=kd(),$r={status:"pending",value:void 0,then:function(l){s.push(l)}}}return Hf++,n.then(c0,c0),n}function c0(){if(--Hf===0&&ll!==null){$r!==null&&($r.status="fulfilled");var t=ll;ll=null,Jr=0,$r=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function bM(t,n){var s=[],l={status:"pending",value:null,reason:null,then:function(f){s.push(f)}};return t.then(function(){l.status="fulfilled",l.value=n;for(var f=0;f<s.length;f++)(0,s[f])(n)},function(f){for(l.status="rejected",l.reason=f,f=0;f<s.length;f++)(0,s[f])(void 0)}),l}var u0=z.S;z.S=function(t,n){qg=qt(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&EM(t,n),u0!==null&&u0(t,n)};var gr=P(null);function Gf(){var t=gr.current;return t!==null?t:un.pooledCache}function Mc(t,n){n===null?ye(gr,gr.current):ye(gr,n.pool)}function f0(){var t=Gf();return t===null?null:{parent:Bn._currentValue,pool:t}}var eo=Error(r(460)),Vf=Error(r(474)),yc=Error(r(542)),Ec={then:function(){}};function d0(t){return t=t.status,t==="fulfilled"||t==="rejected"}function h0(t,n,s){switch(s=t[s],s===void 0?t.push(n):s!==n&&(n.then(en,en),n=s),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,m0(t),t;default:if(typeof n.status=="string")n.then(en,en);else{if(t=un,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(l){if(n.status==="pending"){var f=n;f.status="fulfilled",f.value=l}},function(l){if(n.status==="pending"){var f=n;f.status="rejected",f.reason=l}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,m0(t),t}throw vr=n,eo}}function _r(t){try{var n=t._init;return n(t._payload)}catch(s){throw s!==null&&typeof s=="object"&&typeof s.then=="function"?(vr=s,eo):s}}var vr=null;function p0(){if(vr===null)throw Error(r(459));var t=vr;return vr=null,t}function m0(t){if(t===eo||t===yc)throw Error(r(483))}var to=null,cl=0;function bc(t){var n=cl;return cl+=1,to===null&&(to=[]),h0(to,t,n)}function ul(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Tc(t,n){throw n.$$typeof===v?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function g0(t){function n(Q,W){if(t){var ae=Q.deletions;ae===null?(Q.deletions=[W],Q.flags|=16):ae.push(W)}}function s(Q,W){if(!t)return null;for(;W!==null;)n(Q,W),W=W.sibling;return null}function l(Q){for(var W=new Map;Q!==null;)Q.key!==null?W.set(Q.key,Q):W.set(Q.index,Q),Q=Q.sibling;return W}function f(Q,W){return Q=Wa(Q,W),Q.index=0,Q.sibling=null,Q}function p(Q,W,ae){return Q.index=ae,t?(ae=Q.alternate,ae!==null?(ae=ae.index,ae<W?(Q.flags|=67108866,W):ae):(Q.flags|=67108866,W)):(Q.flags|=1048576,W)}function M(Q){return t&&Q.alternate===null&&(Q.flags|=67108866),Q}function w(Q,W,ae,Me){return W===null||W.tag!==6?(W=Df(ae,Q.mode,Me),W.return=Q,W):(W=f(W,ae),W.return=Q,W)}function k(Q,W,ae,Me){var rt=ae.type;return rt===C?ve(Q,W,ae.props.children,Me,ae.key):W!==null&&(W.elementType===rt||typeof rt=="object"&&rt!==null&&rt.$$typeof===E&&_r(rt)===W.type)?(W=f(W,ae.props),ul(W,ae),W.return=Q,W):(W=_c(ae.type,ae.key,ae.props,null,Q.mode,Me),ul(W,ae),W.return=Q,W)}function re(Q,W,ae,Me){return W===null||W.tag!==4||W.stateNode.containerInfo!==ae.containerInfo||W.stateNode.implementation!==ae.implementation?(W=Lf(ae,Q.mode,Me),W.return=Q,W):(W=f(W,ae.children||[]),W.return=Q,W)}function ve(Q,W,ae,Me,rt){return W===null||W.tag!==7?(W=dr(ae,Q.mode,Me,rt),W.return=Q,W):(W=f(W,ae),W.return=Q,W)}function be(Q,W,ae){if(typeof W=="string"&&W!==""||typeof W=="number"||typeof W=="bigint")return W=Df(""+W,Q.mode,ae),W.return=Q,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case x:return ae=_c(W.type,W.key,W.props,null,Q.mode,ae),ul(ae,W),ae.return=Q,ae;case b:return W=Lf(W,Q.mode,ae),W.return=Q,W;case E:return W=_r(W),be(Q,W,ae)}if(X(W)||Y(W))return W=dr(W,Q.mode,ae,null),W.return=Q,W;if(typeof W.then=="function")return be(Q,bc(W),ae);if(W.$$typeof===O)return be(Q,Sc(Q,W),ae);Tc(Q,W)}return null}function ce(Q,W,ae,Me){var rt=W!==null?W.key:null;if(typeof ae=="string"&&ae!==""||typeof ae=="number"||typeof ae=="bigint")return rt!==null?null:w(Q,W,""+ae,Me);if(typeof ae=="object"&&ae!==null){switch(ae.$$typeof){case x:return ae.key===rt?k(Q,W,ae,Me):null;case b:return ae.key===rt?re(Q,W,ae,Me):null;case E:return ae=_r(ae),ce(Q,W,ae,Me)}if(X(ae)||Y(ae))return rt!==null?null:ve(Q,W,ae,Me,null);if(typeof ae.then=="function")return ce(Q,W,bc(ae),Me);if(ae.$$typeof===O)return ce(Q,W,Sc(Q,ae),Me);Tc(Q,ae)}return null}function de(Q,W,ae,Me,rt){if(typeof Me=="string"&&Me!==""||typeof Me=="number"||typeof Me=="bigint")return Q=Q.get(ae)||null,w(W,Q,""+Me,rt);if(typeof Me=="object"&&Me!==null){switch(Me.$$typeof){case x:return Q=Q.get(Me.key===null?ae:Me.key)||null,k(W,Q,Me,rt);case b:return Q=Q.get(Me.key===null?ae:Me.key)||null,re(W,Q,Me,rt);case E:return Me=_r(Me),de(Q,W,ae,Me,rt)}if(X(Me)||Y(Me))return Q=Q.get(ae)||null,ve(W,Q,Me,rt,null);if(typeof Me.then=="function")return de(Q,W,ae,bc(Me),rt);if(Me.$$typeof===O)return de(Q,W,ae,Sc(W,Me),rt);Tc(W,Me)}return null}function Qe(Q,W,ae,Me){for(var rt=null,Xt=null,tt=W,yt=W=0,Dt=null;tt!==null&&yt<ae.length;yt++){tt.index>yt?(Dt=tt,tt=null):Dt=tt.sibling;var Wt=ce(Q,tt,ae[yt],Me);if(Wt===null){tt===null&&(tt=Dt);break}t&&tt&&Wt.alternate===null&&n(Q,tt),W=p(Wt,W,yt),Xt===null?rt=Wt:Xt.sibling=Wt,Xt=Wt,tt=Dt}if(yt===ae.length)return s(Q,tt),Ot&&Ya(Q,yt),rt;if(tt===null){for(;yt<ae.length;yt++)tt=be(Q,ae[yt],Me),tt!==null&&(W=p(tt,W,yt),Xt===null?rt=tt:Xt.sibling=tt,Xt=tt);return Ot&&Ya(Q,yt),rt}for(tt=l(tt);yt<ae.length;yt++)Dt=de(tt,Q,yt,ae[yt],Me),Dt!==null&&(t&&Dt.alternate!==null&&tt.delete(Dt.key===null?yt:Dt.key),W=p(Dt,W,yt),Xt===null?rt=Dt:Xt.sibling=Dt,Xt=Dt);return t&&tt.forEach(function(Vs){return n(Q,Vs)}),Ot&&Ya(Q,yt),rt}function ct(Q,W,ae,Me){if(ae==null)throw Error(r(151));for(var rt=null,Xt=null,tt=W,yt=W=0,Dt=null,Wt=ae.next();tt!==null&&!Wt.done;yt++,Wt=ae.next()){tt.index>yt?(Dt=tt,tt=null):Dt=tt.sibling;var Vs=ce(Q,tt,Wt.value,Me);if(Vs===null){tt===null&&(tt=Dt);break}t&&tt&&Vs.alternate===null&&n(Q,tt),W=p(Vs,W,yt),Xt===null?rt=Vs:Xt.sibling=Vs,Xt=Vs,tt=Dt}if(Wt.done)return s(Q,tt),Ot&&Ya(Q,yt),rt;if(tt===null){for(;!Wt.done;yt++,Wt=ae.next())Wt=be(Q,Wt.value,Me),Wt!==null&&(W=p(Wt,W,yt),Xt===null?rt=Wt:Xt.sibling=Wt,Xt=Wt);return Ot&&Ya(Q,yt),rt}for(tt=l(tt);!Wt.done;yt++,Wt=ae.next())Wt=de(tt,Q,yt,Wt.value,Me),Wt!==null&&(t&&Wt.alternate!==null&&tt.delete(Wt.key===null?yt:Wt.key),W=p(Wt,W,yt),Xt===null?rt=Wt:Xt.sibling=Wt,Xt=Wt);return t&&tt.forEach(function(Py){return n(Q,Py)}),Ot&&Ya(Q,yt),rt}function ln(Q,W,ae,Me){if(typeof ae=="object"&&ae!==null&&ae.type===C&&ae.key===null&&(ae=ae.props.children),typeof ae=="object"&&ae!==null){switch(ae.$$typeof){case x:e:{for(var rt=ae.key;W!==null;){if(W.key===rt){if(rt=ae.type,rt===C){if(W.tag===7){s(Q,W.sibling),Me=f(W,ae.props.children),Me.return=Q,Q=Me;break e}}else if(W.elementType===rt||typeof rt=="object"&&rt!==null&&rt.$$typeof===E&&_r(rt)===W.type){s(Q,W.sibling),Me=f(W,ae.props),ul(Me,ae),Me.return=Q,Q=Me;break e}s(Q,W);break}else n(Q,W);W=W.sibling}ae.type===C?(Me=dr(ae.props.children,Q.mode,Me,ae.key),Me.return=Q,Q=Me):(Me=_c(ae.type,ae.key,ae.props,null,Q.mode,Me),ul(Me,ae),Me.return=Q,Q=Me)}return M(Q);case b:e:{for(rt=ae.key;W!==null;){if(W.key===rt)if(W.tag===4&&W.stateNode.containerInfo===ae.containerInfo&&W.stateNode.implementation===ae.implementation){s(Q,W.sibling),Me=f(W,ae.children||[]),Me.return=Q,Q=Me;break e}else{s(Q,W);break}else n(Q,W);W=W.sibling}Me=Lf(ae,Q.mode,Me),Me.return=Q,Q=Me}return M(Q);case E:return ae=_r(ae),ln(Q,W,ae,Me)}if(X(ae))return Qe(Q,W,ae,Me);if(Y(ae)){if(rt=Y(ae),typeof rt!="function")throw Error(r(150));return ae=rt.call(ae),ct(Q,W,ae,Me)}if(typeof ae.then=="function")return ln(Q,W,bc(ae),Me);if(ae.$$typeof===O)return ln(Q,W,Sc(Q,ae),Me);Tc(Q,ae)}return typeof ae=="string"&&ae!==""||typeof ae=="number"||typeof ae=="bigint"?(ae=""+ae,W!==null&&W.tag===6?(s(Q,W.sibling),Me=f(W,ae),Me.return=Q,Q=Me):(s(Q,W),Me=Df(ae,Q.mode,Me),Me.return=Q,Q=Me),M(Q)):s(Q,W)}return function(Q,W,ae,Me){try{cl=0;var rt=ln(Q,W,ae,Me);return to=null,rt}catch(tt){if(tt===eo||tt===yc)throw tt;var Xt=Li(29,tt,null,Q.mode);return Xt.lanes=Me,Xt.return=Q,Xt}finally{}}}var xr=g0(!0),_0=g0(!1),Ts=!1;function kf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Xf(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function As(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Rs(t,n,s){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(jt&2)!==0){var f=l.pending;return f===null?n.next=n:(n.next=f.next,f.next=n),l.pending=n,n=gc(t),e0(t,null,s),n}return mc(t,l,n,s),gc(t)}function fl(t,n,s){if(n=n.updateQueue,n!==null&&(n=n.shared,(s&4194048)!==0)){var l=n.lanes;l&=t.pendingLanes,s|=l,n.lanes=s,Bt(t,s)}}function Wf(t,n){var s=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,s===l)){var f=null,p=null;if(s=s.firstBaseUpdate,s!==null){do{var M={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};p===null?f=p=M:p=p.next=M,s=s.next}while(s!==null);p===null?f=p=n:p=p.next=n}else f=p=n;s={baseState:l.baseState,firstBaseUpdate:f,lastBaseUpdate:p,shared:l.shared,callbacks:l.callbacks},t.updateQueue=s;return}t=s.lastBaseUpdate,t===null?s.firstBaseUpdate=n:t.next=n,s.lastBaseUpdate=n}var Yf=!1;function dl(){if(Yf){var t=$r;if(t!==null)throw t}}function hl(t,n,s,l){Yf=!1;var f=t.updateQueue;Ts=!1;var p=f.firstBaseUpdate,M=f.lastBaseUpdate,w=f.shared.pending;if(w!==null){f.shared.pending=null;var k=w,re=k.next;k.next=null,M===null?p=re:M.next=re,M=k;var ve=t.alternate;ve!==null&&(ve=ve.updateQueue,w=ve.lastBaseUpdate,w!==M&&(w===null?ve.firstBaseUpdate=re:w.next=re,ve.lastBaseUpdate=k))}if(p!==null){var be=f.baseState;M=0,ve=re=k=null,w=p;do{var ce=w.lane&-536870913,de=ce!==w.lane;if(de?(wt&ce)===ce:(l&ce)===ce){ce!==0&&ce===Jr&&(Yf=!0),ve!==null&&(ve=ve.next={lane:0,tag:w.tag,payload:w.payload,callback:null,next:null});e:{var Qe=t,ct=w;ce=n;var ln=s;switch(ct.tag){case 1:if(Qe=ct.payload,typeof Qe=="function"){be=Qe.call(ln,be,ce);break e}be=Qe;break e;case 3:Qe.flags=Qe.flags&-65537|128;case 0:if(Qe=ct.payload,ce=typeof Qe=="function"?Qe.call(ln,be,ce):Qe,ce==null)break e;be=_({},be,ce);break e;case 2:Ts=!0}}ce=w.callback,ce!==null&&(t.flags|=64,de&&(t.flags|=8192),de=f.callbacks,de===null?f.callbacks=[ce]:de.push(ce))}else de={lane:ce,tag:w.tag,payload:w.payload,callback:w.callback,next:null},ve===null?(re=ve=de,k=be):ve=ve.next=de,M|=ce;if(w=w.next,w===null){if(w=f.shared.pending,w===null)break;de=w,w=de.next,de.next=null,f.lastBaseUpdate=de,f.shared.pending=null}}while(!0);ve===null&&(k=be),f.baseState=k,f.firstBaseUpdate=re,f.lastBaseUpdate=ve,p===null&&(f.shared.lanes=0),Ns|=M,t.lanes=M,t.memoizedState=be}}function v0(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function x0(t,n){var s=t.callbacks;if(s!==null)for(t.callbacks=null,t=0;t<s.length;t++)v0(s[t],n)}var no=P(null),Ac=P(0);function S0(t,n){t=is,ye(Ac,t),ye(no,n),is=t|n.baseLanes}function qf(){ye(Ac,is),ye(no,no.current)}function jf(){is=Ac.current,K(no),K(Ac)}var Ni=P(null),Qi=null;function Cs(t){var n=t.alternate;ye(Nn,Nn.current&1),ye(Ni,t),Qi===null&&(n===null||no.current!==null||n.memoizedState!==null)&&(Qi=t)}function Zf(t){ye(Nn,Nn.current),ye(Ni,t),Qi===null&&(Qi=t)}function M0(t){t.tag===22?(ye(Nn,Nn.current),ye(Ni,t),Qi===null&&(Qi=t)):ws()}function ws(){ye(Nn,Nn.current),ye(Ni,Ni.current)}function Ui(t){K(Ni),Qi===t&&(Qi=null),K(Nn)}var Nn=P(0);function Rc(t){for(var n=t;n!==null;){if(n.tag===13){var s=n.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||th(s)||nh(s)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Za=0,St=null,rn=null,Fn=null,Cc=!1,io=!1,Sr=!1,wc=0,pl=0,ao=null,TM=0;function An(){throw Error(r(321))}function Kf(t,n){if(n===null)return!1;for(var s=0;s<n.length&&s<t.length;s++)if(!Di(t[s],n[s]))return!1;return!0}function Qf(t,n,s,l,f,p){return Za=p,St=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,z.H=t===null||t.memoizedState===null?ag:dd,Sr=!1,p=s(l,f),Sr=!1,io&&(p=E0(n,s,l,f)),y0(t),p}function y0(t){z.H=_l;var n=rn!==null&&rn.next!==null;if(Za=0,Fn=rn=St=null,Cc=!1,pl=0,ao=null,n)throw Error(r(300));t===null||zn||(t=t.dependencies,t!==null&&xc(t)&&(zn=!0))}function E0(t,n,s,l){St=t;var f=0;do{if(io&&(ao=null),pl=0,io=!1,25<=f)throw Error(r(301));if(f+=1,Fn=rn=null,t.updateQueue!=null){var p=t.updateQueue;p.lastEffect=null,p.events=null,p.stores=null,p.memoCache!=null&&(p.memoCache.index=0)}z.H=sg,p=n(s,l)}while(io);return p}function AM(){var t=z.H,n=t.useState()[0];return n=typeof n.then=="function"?ml(n):n,t=t.useState()[0],(rn!==null?rn.memoizedState:null)!==t&&(St.flags|=1024),n}function Jf(){var t=wc!==0;return wc=0,t}function $f(t,n,s){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~s}function ed(t){if(Cc){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Cc=!1}Za=0,Fn=rn=St=null,io=!1,pl=wc=0,ao=null}function gi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Fn===null?St.memoizedState=Fn=t:Fn=Fn.next=t,Fn}function Un(){if(rn===null){var t=St.alternate;t=t!==null?t.memoizedState:null}else t=rn.next;var n=Fn===null?St.memoizedState:Fn.next;if(n!==null)Fn=n,rn=t;else{if(t===null)throw St.alternate===null?Error(r(467)):Error(r(310));rn=t,t={memoizedState:rn.memoizedState,baseState:rn.baseState,baseQueue:rn.baseQueue,queue:rn.queue,next:null},Fn===null?St.memoizedState=Fn=t:Fn=Fn.next=t}return Fn}function Dc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ml(t){var n=pl;return pl+=1,ao===null&&(ao=[]),t=h0(ao,t,n),n=St,(Fn===null?n.memoizedState:Fn.next)===null&&(n=n.alternate,z.H=n===null||n.memoizedState===null?ag:dd),t}function Lc(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return ml(t);if(t.$$typeof===O)return ni(t)}throw Error(r(438,String(t)))}function td(t){var n=null,s=St.updateQueue;if(s!==null&&(n=s.memoCache),n==null){var l=St.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(n={data:l.data.map(function(f){return f.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),s===null&&(s=Dc(),St.updateQueue=s),s.memoCache=n,s=n.data[n.index],s===void 0)for(s=n.data[n.index]=Array(t),l=0;l<t;l++)s[l]=V;return n.index++,s}function Ka(t,n){return typeof n=="function"?n(t):n}function Nc(t){var n=Un();return nd(n,rn,t)}function nd(t,n,s){var l=t.queue;if(l===null)throw Error(r(311));l.lastRenderedReducer=s;var f=t.baseQueue,p=l.pending;if(p!==null){if(f!==null){var M=f.next;f.next=p.next,p.next=M}n.baseQueue=f=p,l.pending=null}if(p=t.baseState,f===null)t.memoizedState=p;else{n=f.next;var w=M=null,k=null,re=n,ve=!1;do{var be=re.lane&-536870913;if(be!==re.lane?(wt&be)===be:(Za&be)===be){var ce=re.revertLane;if(ce===0)k!==null&&(k=k.next={lane:0,revertLane:0,gesture:null,action:re.action,hasEagerState:re.hasEagerState,eagerState:re.eagerState,next:null}),be===Jr&&(ve=!0);else if((Za&ce)===ce){re=re.next,ce===Jr&&(ve=!0);continue}else be={lane:0,revertLane:re.revertLane,gesture:null,action:re.action,hasEagerState:re.hasEagerState,eagerState:re.eagerState,next:null},k===null?(w=k=be,M=p):k=k.next=be,St.lanes|=ce,Ns|=ce;be=re.action,Sr&&s(p,be),p=re.hasEagerState?re.eagerState:s(p,be)}else ce={lane:be,revertLane:re.revertLane,gesture:re.gesture,action:re.action,hasEagerState:re.hasEagerState,eagerState:re.eagerState,next:null},k===null?(w=k=ce,M=p):k=k.next=ce,St.lanes|=be,Ns|=be;re=re.next}while(re!==null&&re!==n);if(k===null?M=p:k.next=w,!Di(p,t.memoizedState)&&(zn=!0,ve&&(s=$r,s!==null)))throw s;t.memoizedState=p,t.baseState=M,t.baseQueue=k,l.lastRenderedState=p}return f===null&&(l.lanes=0),[t.memoizedState,l.dispatch]}function id(t){var n=Un(),s=n.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=t;var l=s.dispatch,f=s.pending,p=n.memoizedState;if(f!==null){s.pending=null;var M=f=f.next;do p=t(p,M.action),M=M.next;while(M!==f);Di(p,n.memoizedState)||(zn=!0),n.memoizedState=p,n.baseQueue===null&&(n.baseState=p),s.lastRenderedState=p}return[p,l]}function b0(t,n,s){var l=St,f=Un(),p=Ot;if(p){if(s===void 0)throw Error(r(407));s=s()}else s=n();var M=!Di((rn||f).memoizedState,s);if(M&&(f.memoizedState=s,zn=!0),f=f.queue,rd(R0.bind(null,l,f,t),[t]),f.getSnapshot!==n||M||Fn!==null&&Fn.memoizedState.tag&1){if(l.flags|=2048,so(9,{destroy:void 0},A0.bind(null,l,f,s,n),null),un===null)throw Error(r(349));p||(Za&127)!==0||T0(l,n,s)}return s}function T0(t,n,s){t.flags|=16384,t={getSnapshot:n,value:s},n=St.updateQueue,n===null?(n=Dc(),St.updateQueue=n,n.stores=[t]):(s=n.stores,s===null?n.stores=[t]:s.push(t))}function A0(t,n,s,l){n.value=s,n.getSnapshot=l,C0(n)&&w0(t)}function R0(t,n,s){return s(function(){C0(n)&&w0(t)})}function C0(t){var n=t.getSnapshot;t=t.value;try{var s=n();return!Di(t,s)}catch{return!0}}function w0(t){var n=fr(t,2);n!==null&&Ai(n,t,2)}function ad(t){var n=gi();if(typeof t=="function"){var s=t;if(t=s(),Sr){Re(!0);try{s()}finally{Re(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ka,lastRenderedState:t},n}function D0(t,n,s,l){return t.baseState=s,nd(t,rn,typeof l=="function"?l:Ka)}function RM(t,n,s,l,f){if(Pc(t))throw Error(r(485));if(t=n.action,t!==null){var p={payload:f,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(M){p.listeners.push(M)}};z.T!==null?s(!0):p.isTransition=!1,l(p),s=n.pending,s===null?(p.next=n.pending=p,L0(n,p)):(p.next=s.next,n.pending=s.next=p)}}function L0(t,n){var s=n.action,l=n.payload,f=t.state;if(n.isTransition){var p=z.T,M={};z.T=M;try{var w=s(f,l),k=z.S;k!==null&&k(M,w),N0(t,n,w)}catch(re){sd(t,n,re)}finally{p!==null&&M.types!==null&&(p.types=M.types),z.T=p}}else try{p=s(f,l),N0(t,n,p)}catch(re){sd(t,n,re)}}function N0(t,n,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(l){U0(t,n,l)},function(l){return sd(t,n,l)}):U0(t,n,s)}function U0(t,n,s){n.status="fulfilled",n.value=s,O0(n),t.state=s,n=t.pending,n!==null&&(s=n.next,s===n?t.pending=null:(s=s.next,n.next=s,L0(t,s)))}function sd(t,n,s){var l=t.pending;if(t.pending=null,l!==null){l=l.next;do n.status="rejected",n.reason=s,O0(n),n=n.next;while(n!==l)}t.action=null}function O0(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function P0(t,n){return n}function I0(t,n){if(Ot){var s=un.formState;if(s!==null){e:{var l=St;if(Ot){if(pn){t:{for(var f=pn,p=Ki;f.nodeType!==8;){if(!p){f=null;break t}if(f=Ji(f.nextSibling),f===null){f=null;break t}}p=f.data,f=p==="F!"||p==="F"?f:null}if(f){pn=Ji(f.nextSibling),l=f.data==="F!";break e}}Es(l)}l=!1}l&&(n=s[0])}}return s=gi(),s.memoizedState=s.baseState=n,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:P0,lastRenderedState:n},s.queue=l,s=tg.bind(null,St,l),l.dispatch=s,l=ad(!1),p=fd.bind(null,St,!1,l.queue),l=gi(),f={state:n,dispatch:null,action:t,pending:null},l.queue=f,s=RM.bind(null,St,f,p,s),f.dispatch=s,l.memoizedState=t,[n,s,!1]}function B0(t){var n=Un();return F0(n,rn,t)}function F0(t,n,s){if(n=nd(t,n,P0)[0],t=Nc(Ka)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var l=ml(n)}catch(M){throw M===eo?yc:M}else l=n;n=Un();var f=n.queue,p=f.dispatch;return s!==n.memoizedState&&(St.flags|=2048,so(9,{destroy:void 0},CM.bind(null,f,s),null)),[l,p,t]}function CM(t,n){t.action=n}function z0(t){var n=Un(),s=rn;if(s!==null)return F0(n,s,t);Un(),n=n.memoizedState,s=Un();var l=s.queue.dispatch;return s.memoizedState=t,[n,l,!1]}function so(t,n,s,l){return t={tag:t,create:s,deps:l,inst:n,next:null},n=St.updateQueue,n===null&&(n=Dc(),St.updateQueue=n),s=n.lastEffect,s===null?n.lastEffect=t.next=t:(l=s.next,s.next=t,t.next=l,n.lastEffect=t),t}function H0(){return Un().memoizedState}function Uc(t,n,s,l){var f=gi();St.flags|=t,f.memoizedState=so(1|n,{destroy:void 0},s,l===void 0?null:l)}function Oc(t,n,s,l){var f=Un();l=l===void 0?null:l;var p=f.memoizedState.inst;rn!==null&&l!==null&&Kf(l,rn.memoizedState.deps)?f.memoizedState=so(n,p,s,l):(St.flags|=t,f.memoizedState=so(1|n,p,s,l))}function G0(t,n){Uc(8390656,8,t,n)}function rd(t,n){Oc(2048,8,t,n)}function wM(t){St.flags|=4;var n=St.updateQueue;if(n===null)n=Dc(),St.updateQueue=n,n.events=[t];else{var s=n.events;s===null?n.events=[t]:s.push(t)}}function V0(t){var n=Un().memoizedState;return wM({ref:n,nextImpl:t}),function(){if((jt&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function k0(t,n){return Oc(4,2,t,n)}function X0(t,n){return Oc(4,4,t,n)}function W0(t,n){if(typeof n=="function"){t=t();var s=n(t);return function(){typeof s=="function"?s():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Y0(t,n,s){s=s!=null?s.concat([t]):null,Oc(4,4,W0.bind(null,n,t),s)}function od(){}function q0(t,n){var s=Un();n=n===void 0?null:n;var l=s.memoizedState;return n!==null&&Kf(n,l[1])?l[0]:(s.memoizedState=[t,n],t)}function j0(t,n){var s=Un();n=n===void 0?null:n;var l=s.memoizedState;if(n!==null&&Kf(n,l[1]))return l[0];if(l=t(),Sr){Re(!0);try{t()}finally{Re(!1)}}return s.memoizedState=[l,n],l}function ld(t,n,s){return s===void 0||(Za&1073741824)!==0&&(wt&261930)===0?t.memoizedState=n:(t.memoizedState=s,t=Zg(),St.lanes|=t,Ns|=t,s)}function Z0(t,n,s,l){return Di(s,n)?s:no.current!==null?(t=ld(t,s,l),Di(t,n)||(zn=!0),t):(Za&42)===0||(Za&1073741824)!==0&&(wt&261930)===0?(zn=!0,t.memoizedState=s):(t=Zg(),St.lanes|=t,Ns|=t,n)}function K0(t,n,s,l,f){var p=G.p;G.p=p!==0&&8>p?p:8;var M=z.T,w={};z.T=w,fd(t,!1,n,s);try{var k=f(),re=z.S;if(re!==null&&re(w,k),k!==null&&typeof k=="object"&&typeof k.then=="function"){var ve=bM(k,l);gl(t,n,ve,Ii(t))}else gl(t,n,l,Ii(t))}catch(be){gl(t,n,{then:function(){},status:"rejected",reason:be},Ii())}finally{G.p=p,M!==null&&w.types!==null&&(M.types=w.types),z.T=M}}function DM(){}function cd(t,n,s,l){if(t.tag!==5)throw Error(r(476));var f=Q0(t).queue;K0(t,f,n,J,s===null?DM:function(){return J0(t),s(l)})}function Q0(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:J,baseState:J,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ka,lastRenderedState:J},next:null};var s={};return n.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ka,lastRenderedState:s},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function J0(t){var n=Q0(t);n.next===null&&(n=t.alternate.memoizedState),gl(t,n.next.queue,{},Ii())}function ud(){return ni(Ul)}function $0(){return Un().memoizedState}function eg(){return Un().memoizedState}function LM(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var s=Ii();t=As(s);var l=Rs(n,t,s);l!==null&&(Ai(l,n,s),fl(l,n,s)),n={cache:zf()},t.payload=n;return}n=n.return}}function NM(t,n,s){var l=Ii();s={lane:l,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},Pc(t)?ng(n,s):(s=Cf(t,n,s,l),s!==null&&(Ai(s,t,l),ig(s,n,l)))}function tg(t,n,s){var l=Ii();gl(t,n,s,l)}function gl(t,n,s,l){var f={lane:l,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null};if(Pc(t))ng(n,f);else{var p=t.alternate;if(t.lanes===0&&(p===null||p.lanes===0)&&(p=n.lastRenderedReducer,p!==null))try{var M=n.lastRenderedState,w=p(M,s);if(f.hasEagerState=!0,f.eagerState=w,Di(w,M))return mc(t,n,f,0),un===null&&pc(),!1}catch{}finally{}if(s=Cf(t,n,f,l),s!==null)return Ai(s,t,l),ig(s,n,l),!0}return!1}function fd(t,n,s,l){if(l={lane:2,revertLane:kd(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Pc(t)){if(n)throw Error(r(479))}else n=Cf(t,s,l,2),n!==null&&Ai(n,t,2)}function Pc(t){var n=t.alternate;return t===St||n!==null&&n===St}function ng(t,n){io=Cc=!0;var s=t.pending;s===null?n.next=n:(n.next=s.next,s.next=n),t.pending=n}function ig(t,n,s){if((s&4194048)!==0){var l=n.lanes;l&=t.pendingLanes,s|=l,n.lanes=s,Bt(t,s)}}var _l={readContext:ni,use:Lc,useCallback:An,useContext:An,useEffect:An,useImperativeHandle:An,useLayoutEffect:An,useInsertionEffect:An,useMemo:An,useReducer:An,useRef:An,useState:An,useDebugValue:An,useDeferredValue:An,useTransition:An,useSyncExternalStore:An,useId:An,useHostTransitionStatus:An,useFormState:An,useActionState:An,useOptimistic:An,useMemoCache:An,useCacheRefresh:An};_l.useEffectEvent=An;var ag={readContext:ni,use:Lc,useCallback:function(t,n){return gi().memoizedState=[t,n===void 0?null:n],t},useContext:ni,useEffect:G0,useImperativeHandle:function(t,n,s){s=s!=null?s.concat([t]):null,Uc(4194308,4,W0.bind(null,n,t),s)},useLayoutEffect:function(t,n){return Uc(4194308,4,t,n)},useInsertionEffect:function(t,n){Uc(4,2,t,n)},useMemo:function(t,n){var s=gi();n=n===void 0?null:n;var l=t();if(Sr){Re(!0);try{t()}finally{Re(!1)}}return s.memoizedState=[l,n],l},useReducer:function(t,n,s){var l=gi();if(s!==void 0){var f=s(n);if(Sr){Re(!0);try{s(n)}finally{Re(!1)}}}else f=n;return l.memoizedState=l.baseState=f,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:f},l.queue=t,t=t.dispatch=NM.bind(null,St,t),[l.memoizedState,t]},useRef:function(t){var n=gi();return t={current:t},n.memoizedState=t},useState:function(t){t=ad(t);var n=t.queue,s=tg.bind(null,St,n);return n.dispatch=s,[t.memoizedState,s]},useDebugValue:od,useDeferredValue:function(t,n){var s=gi();return ld(s,t,n)},useTransition:function(){var t=ad(!1);return t=K0.bind(null,St,t.queue,!0,!1),gi().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,s){var l=St,f=gi();if(Ot){if(s===void 0)throw Error(r(407));s=s()}else{if(s=n(),un===null)throw Error(r(349));(wt&127)!==0||T0(l,n,s)}f.memoizedState=s;var p={value:s,getSnapshot:n};return f.queue=p,G0(R0.bind(null,l,p,t),[t]),l.flags|=2048,so(9,{destroy:void 0},A0.bind(null,l,p,s,n),null),s},useId:function(){var t=gi(),n=un.identifierPrefix;if(Ot){var s=Ea,l=ya;s=(l&~(1<<32-Ge(l)-1)).toString(32)+s,n="_"+n+"R_"+s,s=wc++,0<s&&(n+="H"+s.toString(32)),n+="_"}else s=TM++,n="_"+n+"r_"+s.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:ud,useFormState:I0,useActionState:I0,useOptimistic:function(t){var n=gi();n.memoizedState=n.baseState=t;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=s,n=fd.bind(null,St,!0,s),s.dispatch=n,[t,n]},useMemoCache:td,useCacheRefresh:function(){return gi().memoizedState=LM.bind(null,St)},useEffectEvent:function(t){var n=gi(),s={impl:t};return n.memoizedState=s,function(){if((jt&2)!==0)throw Error(r(440));return s.impl.apply(void 0,arguments)}}},dd={readContext:ni,use:Lc,useCallback:q0,useContext:ni,useEffect:rd,useImperativeHandle:Y0,useInsertionEffect:k0,useLayoutEffect:X0,useMemo:j0,useReducer:Nc,useRef:H0,useState:function(){return Nc(Ka)},useDebugValue:od,useDeferredValue:function(t,n){var s=Un();return Z0(s,rn.memoizedState,t,n)},useTransition:function(){var t=Nc(Ka)[0],n=Un().memoizedState;return[typeof t=="boolean"?t:ml(t),n]},useSyncExternalStore:b0,useId:$0,useHostTransitionStatus:ud,useFormState:B0,useActionState:B0,useOptimistic:function(t,n){var s=Un();return D0(s,rn,t,n)},useMemoCache:td,useCacheRefresh:eg};dd.useEffectEvent=V0;var sg={readContext:ni,use:Lc,useCallback:q0,useContext:ni,useEffect:rd,useImperativeHandle:Y0,useInsertionEffect:k0,useLayoutEffect:X0,useMemo:j0,useReducer:id,useRef:H0,useState:function(){return id(Ka)},useDebugValue:od,useDeferredValue:function(t,n){var s=Un();return rn===null?ld(s,t,n):Z0(s,rn.memoizedState,t,n)},useTransition:function(){var t=id(Ka)[0],n=Un().memoizedState;return[typeof t=="boolean"?t:ml(t),n]},useSyncExternalStore:b0,useId:$0,useHostTransitionStatus:ud,useFormState:z0,useActionState:z0,useOptimistic:function(t,n){var s=Un();return rn!==null?D0(s,rn,t,n):(s.baseState=t,[t,s.queue.dispatch])},useMemoCache:td,useCacheRefresh:eg};sg.useEffectEvent=V0;function hd(t,n,s,l){n=t.memoizedState,s=s(l,n),s=s==null?n:_({},n,s),t.memoizedState=s,t.lanes===0&&(t.updateQueue.baseState=s)}var pd={enqueueSetState:function(t,n,s){t=t._reactInternals;var l=Ii(),f=As(l);f.payload=n,s!=null&&(f.callback=s),n=Rs(t,f,l),n!==null&&(Ai(n,t,l),fl(n,t,l))},enqueueReplaceState:function(t,n,s){t=t._reactInternals;var l=Ii(),f=As(l);f.tag=1,f.payload=n,s!=null&&(f.callback=s),n=Rs(t,f,l),n!==null&&(Ai(n,t,l),fl(n,t,l))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var s=Ii(),l=As(s);l.tag=2,n!=null&&(l.callback=n),n=Rs(t,l,s),n!==null&&(Ai(n,t,s),fl(n,t,s))}};function rg(t,n,s,l,f,p,M){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,p,M):n.prototype&&n.prototype.isPureReactComponent?!il(s,l)||!il(f,p):!0}function og(t,n,s,l){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(s,l),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(s,l),n.state!==t&&pd.enqueueReplaceState(n,n.state,null)}function Mr(t,n){var s=n;if("ref"in n){s={};for(var l in n)l!=="ref"&&(s[l]=n[l])}if(t=t.defaultProps){s===n&&(s=_({},s));for(var f in t)s[f]===void 0&&(s[f]=t[f])}return s}function lg(t){hc(t)}function cg(t){console.error(t)}function ug(t){hc(t)}function Ic(t,n){try{var s=t.onUncaughtError;s(n.value,{componentStack:n.stack})}catch(l){setTimeout(function(){throw l})}}function fg(t,n,s){try{var l=t.onCaughtError;l(s.value,{componentStack:s.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function md(t,n,s){return s=As(s),s.tag=3,s.payload={element:null},s.callback=function(){Ic(t,n)},s}function dg(t){return t=As(t),t.tag=3,t}function hg(t,n,s,l){var f=s.type.getDerivedStateFromError;if(typeof f=="function"){var p=l.value;t.payload=function(){return f(p)},t.callback=function(){fg(n,s,l)}}var M=s.stateNode;M!==null&&typeof M.componentDidCatch=="function"&&(t.callback=function(){fg(n,s,l),typeof f!="function"&&(Us===null?Us=new Set([this]):Us.add(this));var w=l.stack;this.componentDidCatch(l.value,{componentStack:w!==null?w:""})})}function UM(t,n,s,l,f){if(s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(n=s.alternate,n!==null&&Qr(n,s,f,!0),s=Ni.current,s!==null){switch(s.tag){case 31:case 13:return Qi===null?jc():s.alternate===null&&Rn===0&&(Rn=3),s.flags&=-257,s.flags|=65536,s.lanes=f,l===Ec?s.flags|=16384:(n=s.updateQueue,n===null?s.updateQueue=new Set([l]):n.add(l),Hd(t,l,f)),!1;case 22:return s.flags|=65536,l===Ec?s.flags|=16384:(n=s.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([l])},s.updateQueue=n):(s=n.retryQueue,s===null?n.retryQueue=new Set([l]):s.add(l)),Hd(t,l,f)),!1}throw Error(r(435,s.tag))}return Hd(t,l,f),jc(),!1}if(Ot)return n=Ni.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=f,l!==Of&&(t=Error(r(422),{cause:l}),rl(qi(t,s)))):(l!==Of&&(n=Error(r(423),{cause:l}),rl(qi(n,s))),t=t.current.alternate,t.flags|=65536,f&=-f,t.lanes|=f,l=qi(l,s),f=md(t.stateNode,l,f),Wf(t,f),Rn!==4&&(Rn=2)),!1;var p=Error(r(520),{cause:l});if(p=qi(p,s),Tl===null?Tl=[p]:Tl.push(p),Rn!==4&&(Rn=2),n===null)return!0;l=qi(l,s),s=n;do{switch(s.tag){case 3:return s.flags|=65536,t=f&-f,s.lanes|=t,t=md(s.stateNode,l,t),Wf(s,t),!1;case 1:if(n=s.type,p=s.stateNode,(s.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Us===null||!Us.has(p))))return s.flags|=65536,f&=-f,s.lanes|=f,f=dg(f),hg(f,t,s,l),Wf(s,f),!1}s=s.return}while(s!==null);return!1}var gd=Error(r(461)),zn=!1;function ii(t,n,s,l){n.child=t===null?_0(n,null,s,l):xr(n,t.child,s,l)}function pg(t,n,s,l,f){s=s.render;var p=n.ref;if("ref"in l){var M={};for(var w in l)w!=="ref"&&(M[w]=l[w])}else M=l;return mr(n),l=Qf(t,n,s,M,p,f),w=Jf(),t!==null&&!zn?($f(t,n,f),Qa(t,n,f)):(Ot&&w&&Nf(n),n.flags|=1,ii(t,n,l,f),n.child)}function mg(t,n,s,l,f){if(t===null){var p=s.type;return typeof p=="function"&&!wf(p)&&p.defaultProps===void 0&&s.compare===null?(n.tag=15,n.type=p,gg(t,n,p,l,f)):(t=_c(s.type,null,l,n,n.mode,f),t.ref=n.ref,t.return=n,n.child=t)}if(p=t.child,!bd(t,f)){var M=p.memoizedProps;if(s=s.compare,s=s!==null?s:il,s(M,l)&&t.ref===n.ref)return Qa(t,n,f)}return n.flags|=1,t=Wa(p,l),t.ref=n.ref,t.return=n,n.child=t}function gg(t,n,s,l,f){if(t!==null){var p=t.memoizedProps;if(il(p,l)&&t.ref===n.ref)if(zn=!1,n.pendingProps=l=p,bd(t,f))(t.flags&131072)!==0&&(zn=!0);else return n.lanes=t.lanes,Qa(t,n,f)}return _d(t,n,s,l,f)}function _g(t,n,s,l){var f=l.children,p=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((n.flags&128)!==0){if(p=p!==null?p.baseLanes|s:s,t!==null){for(l=n.child=t.child,f=0;l!==null;)f=f|l.lanes|l.childLanes,l=l.sibling;l=f&~p}else l=0,n.child=null;return vg(t,n,p,s,l)}if((s&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Mc(n,p!==null?p.cachePool:null),p!==null?S0(n,p):qf(),M0(n);else return l=n.lanes=536870912,vg(t,n,p!==null?p.baseLanes|s:s,s,l)}else p!==null?(Mc(n,p.cachePool),S0(n,p),ws(),n.memoizedState=null):(t!==null&&Mc(n,null),qf(),ws());return ii(t,n,f,s),n.child}function vl(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function vg(t,n,s,l,f){var p=Gf();return p=p===null?null:{parent:Bn._currentValue,pool:p},n.memoizedState={baseLanes:s,cachePool:p},t!==null&&Mc(n,null),qf(),M0(n),t!==null&&Qr(t,n,l,!0),n.childLanes=f,null}function Bc(t,n){return n=zc({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function xg(t,n,s){return xr(n,t.child,null,s),t=Bc(n,n.pendingProps),t.flags|=2,Ui(n),n.memoizedState=null,t}function OM(t,n,s){var l=n.pendingProps,f=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(Ot){if(l.mode==="hidden")return t=Bc(n,l),n.lanes=536870912,vl(null,t);if(Zf(n),(t=pn)?(t=L_(t,Ki),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Ms!==null?{id:ya,overflow:Ea}:null,retryLane:536870912,hydrationErrors:null},s=n0(t),s.return=n,n.child=s,ti=n,pn=null)):t=null,t===null)throw Es(n);return n.lanes=536870912,null}return Bc(n,l)}var p=t.memoizedState;if(p!==null){var M=p.dehydrated;if(Zf(n),f)if(n.flags&256)n.flags&=-257,n=xg(t,n,s);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(r(558));else if(zn||Qr(t,n,s,!1),f=(s&t.childLanes)!==0,zn||f){if(l=un,l!==null&&(M=Mn(l,s),M!==0&&M!==p.retryLane))throw p.retryLane=M,fr(t,M),Ai(l,t,M),gd;jc(),n=xg(t,n,s)}else t=p.treeContext,pn=Ji(M.nextSibling),ti=n,Ot=!0,ys=null,Ki=!1,t!==null&&s0(n,t),n=Bc(n,l),n.flags|=4096;return n}return t=Wa(t.child,{mode:l.mode,children:l.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Fc(t,n){var s=n.ref;if(s===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(r(284));(t===null||t.ref!==s)&&(n.flags|=4194816)}}function _d(t,n,s,l,f){return mr(n),s=Qf(t,n,s,l,void 0,f),l=Jf(),t!==null&&!zn?($f(t,n,f),Qa(t,n,f)):(Ot&&l&&Nf(n),n.flags|=1,ii(t,n,s,f),n.child)}function Sg(t,n,s,l,f,p){return mr(n),n.updateQueue=null,s=E0(n,l,s,f),y0(t),l=Jf(),t!==null&&!zn?($f(t,n,p),Qa(t,n,p)):(Ot&&l&&Nf(n),n.flags|=1,ii(t,n,s,p),n.child)}function Mg(t,n,s,l,f){if(mr(n),n.stateNode===null){var p=qr,M=s.contextType;typeof M=="object"&&M!==null&&(p=ni(M)),p=new s(l,p),n.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,p.updater=pd,n.stateNode=p,p._reactInternals=n,p=n.stateNode,p.props=l,p.state=n.memoizedState,p.refs={},kf(n),M=s.contextType,p.context=typeof M=="object"&&M!==null?ni(M):qr,p.state=n.memoizedState,M=s.getDerivedStateFromProps,typeof M=="function"&&(hd(n,s,M,l),p.state=n.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(M=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),M!==p.state&&pd.enqueueReplaceState(p,p.state,null),hl(n,l,p,f),dl(),p.state=n.memoizedState),typeof p.componentDidMount=="function"&&(n.flags|=4194308),l=!0}else if(t===null){p=n.stateNode;var w=n.memoizedProps,k=Mr(s,w);p.props=k;var re=p.context,ve=s.contextType;M=qr,typeof ve=="object"&&ve!==null&&(M=ni(ve));var be=s.getDerivedStateFromProps;ve=typeof be=="function"||typeof p.getSnapshotBeforeUpdate=="function",w=n.pendingProps!==w,ve||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(w||re!==M)&&og(n,p,l,M),Ts=!1;var ce=n.memoizedState;p.state=ce,hl(n,l,p,f),dl(),re=n.memoizedState,w||ce!==re||Ts?(typeof be=="function"&&(hd(n,s,be,l),re=n.memoizedState),(k=Ts||rg(n,s,k,l,ce,re,M))?(ve||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount()),typeof p.componentDidMount=="function"&&(n.flags|=4194308)):(typeof p.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=l,n.memoizedState=re),p.props=l,p.state=re,p.context=M,l=k):(typeof p.componentDidMount=="function"&&(n.flags|=4194308),l=!1)}else{p=n.stateNode,Xf(t,n),M=n.memoizedProps,ve=Mr(s,M),p.props=ve,be=n.pendingProps,ce=p.context,re=s.contextType,k=qr,typeof re=="object"&&re!==null&&(k=ni(re)),w=s.getDerivedStateFromProps,(re=typeof w=="function"||typeof p.getSnapshotBeforeUpdate=="function")||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(M!==be||ce!==k)&&og(n,p,l,k),Ts=!1,ce=n.memoizedState,p.state=ce,hl(n,l,p,f),dl();var de=n.memoizedState;M!==be||ce!==de||Ts||t!==null&&t.dependencies!==null&&xc(t.dependencies)?(typeof w=="function"&&(hd(n,s,w,l),de=n.memoizedState),(ve=Ts||rg(n,s,ve,l,ce,de,k)||t!==null&&t.dependencies!==null&&xc(t.dependencies))?(re||typeof p.UNSAFE_componentWillUpdate!="function"&&typeof p.componentWillUpdate!="function"||(typeof p.componentWillUpdate=="function"&&p.componentWillUpdate(l,de,k),typeof p.UNSAFE_componentWillUpdate=="function"&&p.UNSAFE_componentWillUpdate(l,de,k)),typeof p.componentDidUpdate=="function"&&(n.flags|=4),typeof p.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof p.componentDidUpdate!="function"||M===t.memoizedProps&&ce===t.memoizedState||(n.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||M===t.memoizedProps&&ce===t.memoizedState||(n.flags|=1024),n.memoizedProps=l,n.memoizedState=de),p.props=l,p.state=de,p.context=k,l=ve):(typeof p.componentDidUpdate!="function"||M===t.memoizedProps&&ce===t.memoizedState||(n.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||M===t.memoizedProps&&ce===t.memoizedState||(n.flags|=1024),l=!1)}return p=l,Fc(t,n),l=(n.flags&128)!==0,p||l?(p=n.stateNode,s=l&&typeof s.getDerivedStateFromError!="function"?null:p.render(),n.flags|=1,t!==null&&l?(n.child=xr(n,t.child,null,f),n.child=xr(n,null,s,f)):ii(t,n,s,f),n.memoizedState=p.state,t=n.child):t=Qa(t,n,f),t}function yg(t,n,s,l){return hr(),n.flags|=256,ii(t,n,s,l),n.child}var vd={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function xd(t){return{baseLanes:t,cachePool:f0()}}function Sd(t,n,s){return t=t!==null?t.childLanes&~s:0,n&&(t|=Pi),t}function Eg(t,n,s){var l=n.pendingProps,f=!1,p=(n.flags&128)!==0,M;if((M=p)||(M=t!==null&&t.memoizedState===null?!1:(Nn.current&2)!==0),M&&(f=!0,n.flags&=-129),M=(n.flags&32)!==0,n.flags&=-33,t===null){if(Ot){if(f?Cs(n):ws(),(t=pn)?(t=L_(t,Ki),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Ms!==null?{id:ya,overflow:Ea}:null,retryLane:536870912,hydrationErrors:null},s=n0(t),s.return=n,n.child=s,ti=n,pn=null)):t=null,t===null)throw Es(n);return nh(t)?n.lanes=32:n.lanes=536870912,null}var w=l.children;return l=l.fallback,f?(ws(),f=n.mode,w=zc({mode:"hidden",children:w},f),l=dr(l,f,s,null),w.return=n,l.return=n,w.sibling=l,n.child=w,l=n.child,l.memoizedState=xd(s),l.childLanes=Sd(t,M,s),n.memoizedState=vd,vl(null,l)):(Cs(n),Md(n,w))}var k=t.memoizedState;if(k!==null&&(w=k.dehydrated,w!==null)){if(p)n.flags&256?(Cs(n),n.flags&=-257,n=yd(t,n,s)):n.memoizedState!==null?(ws(),n.child=t.child,n.flags|=128,n=null):(ws(),w=l.fallback,f=n.mode,l=zc({mode:"visible",children:l.children},f),w=dr(w,f,s,null),w.flags|=2,l.return=n,w.return=n,l.sibling=w,n.child=l,xr(n,t.child,null,s),l=n.child,l.memoizedState=xd(s),l.childLanes=Sd(t,M,s),n.memoizedState=vd,n=vl(null,l));else if(Cs(n),nh(w)){if(M=w.nextSibling&&w.nextSibling.dataset,M)var re=M.dgst;M=re,l=Error(r(419)),l.stack="",l.digest=M,rl({value:l,source:null,stack:null}),n=yd(t,n,s)}else if(zn||Qr(t,n,s,!1),M=(s&t.childLanes)!==0,zn||M){if(M=un,M!==null&&(l=Mn(M,s),l!==0&&l!==k.retryLane))throw k.retryLane=l,fr(t,l),Ai(M,t,l),gd;th(w)||jc(),n=yd(t,n,s)}else th(w)?(n.flags|=192,n.child=t.child,n=null):(t=k.treeContext,pn=Ji(w.nextSibling),ti=n,Ot=!0,ys=null,Ki=!1,t!==null&&s0(n,t),n=Md(n,l.children),n.flags|=4096);return n}return f?(ws(),w=l.fallback,f=n.mode,k=t.child,re=k.sibling,l=Wa(k,{mode:"hidden",children:l.children}),l.subtreeFlags=k.subtreeFlags&65011712,re!==null?w=Wa(re,w):(w=dr(w,f,s,null),w.flags|=2),w.return=n,l.return=n,l.sibling=w,n.child=l,vl(null,l),l=n.child,w=t.child.memoizedState,w===null?w=xd(s):(f=w.cachePool,f!==null?(k=Bn._currentValue,f=f.parent!==k?{parent:k,pool:k}:f):f=f0(),w={baseLanes:w.baseLanes|s,cachePool:f}),l.memoizedState=w,l.childLanes=Sd(t,M,s),n.memoizedState=vd,vl(t.child,l)):(Cs(n),s=t.child,t=s.sibling,s=Wa(s,{mode:"visible",children:l.children}),s.return=n,s.sibling=null,t!==null&&(M=n.deletions,M===null?(n.deletions=[t],n.flags|=16):M.push(t)),n.child=s,n.memoizedState=null,s)}function Md(t,n){return n=zc({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function zc(t,n){return t=Li(22,t,null,n),t.lanes=0,t}function yd(t,n,s){return xr(n,t.child,null,s),t=Md(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function bg(t,n,s){t.lanes|=n;var l=t.alternate;l!==null&&(l.lanes|=n),Bf(t.return,n,s)}function Ed(t,n,s,l,f,p){var M=t.memoizedState;M===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:l,tail:s,tailMode:f,treeForkCount:p}:(M.isBackwards=n,M.rendering=null,M.renderingStartTime=0,M.last=l,M.tail=s,M.tailMode=f,M.treeForkCount=p)}function Tg(t,n,s){var l=n.pendingProps,f=l.revealOrder,p=l.tail;l=l.children;var M=Nn.current,w=(M&2)!==0;if(w?(M=M&1|2,n.flags|=128):M&=1,ye(Nn,M),ii(t,n,l,s),l=Ot?sl:0,!w&&t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&bg(t,s,n);else if(t.tag===19)bg(t,s,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(f){case"forwards":for(s=n.child,f=null;s!==null;)t=s.alternate,t!==null&&Rc(t)===null&&(f=s),s=s.sibling;s=f,s===null?(f=n.child,n.child=null):(f=s.sibling,s.sibling=null),Ed(n,!1,f,s,p,l);break;case"backwards":case"unstable_legacy-backwards":for(s=null,f=n.child,n.child=null;f!==null;){if(t=f.alternate,t!==null&&Rc(t)===null){n.child=f;break}t=f.sibling,f.sibling=s,s=f,f=t}Ed(n,!0,s,null,p,l);break;case"together":Ed(n,!1,null,null,void 0,l);break;default:n.memoizedState=null}return n.child}function Qa(t,n,s){if(t!==null&&(n.dependencies=t.dependencies),Ns|=n.lanes,(s&n.childLanes)===0)if(t!==null){if(Qr(t,n,s,!1),(s&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,s=Wa(t,t.pendingProps),n.child=s,s.return=n;t.sibling!==null;)t=t.sibling,s=s.sibling=Wa(t,t.pendingProps),s.return=n;s.sibling=null}return n.child}function bd(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&xc(t)))}function PM(t,n,s){switch(n.tag){case 3:Ee(n,n.stateNode.containerInfo),bs(n,Bn,t.memoizedState.cache),hr();break;case 27:case 5:st(n);break;case 4:Ee(n,n.stateNode.containerInfo);break;case 10:bs(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Zf(n),null;break;case 13:var l=n.memoizedState;if(l!==null)return l.dehydrated!==null?(Cs(n),n.flags|=128,null):(s&n.child.childLanes)!==0?Eg(t,n,s):(Cs(n),t=Qa(t,n,s),t!==null?t.sibling:null);Cs(n);break;case 19:var f=(t.flags&128)!==0;if(l=(s&n.childLanes)!==0,l||(Qr(t,n,s,!1),l=(s&n.childLanes)!==0),f){if(l)return Tg(t,n,s);n.flags|=128}if(f=n.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),ye(Nn,Nn.current),l)break;return null;case 22:return n.lanes=0,_g(t,n,s,n.pendingProps);case 24:bs(n,Bn,t.memoizedState.cache)}return Qa(t,n,s)}function Ag(t,n,s){if(t!==null)if(t.memoizedProps!==n.pendingProps)zn=!0;else{if(!bd(t,s)&&(n.flags&128)===0)return zn=!1,PM(t,n,s);zn=(t.flags&131072)!==0}else zn=!1,Ot&&(n.flags&1048576)!==0&&a0(n,sl,n.index);switch(n.lanes=0,n.tag){case 16:e:{var l=n.pendingProps;if(t=_r(n.elementType),n.type=t,typeof t=="function")wf(t)?(l=Mr(t,l),n.tag=1,n=Mg(null,n,t,l,s)):(n.tag=0,n=_d(null,n,t,l,s));else{if(t!=null){var f=t.$$typeof;if(f===A){n.tag=11,n=pg(null,n,t,l,s);break e}else if(f===B){n.tag=14,n=mg(null,n,t,l,s);break e}}throw n=ue(t)||t,Error(r(306,n,""))}}return n;case 0:return _d(t,n,n.type,n.pendingProps,s);case 1:return l=n.type,f=Mr(l,n.pendingProps),Mg(t,n,l,f,s);case 3:e:{if(Ee(n,n.stateNode.containerInfo),t===null)throw Error(r(387));l=n.pendingProps;var p=n.memoizedState;f=p.element,Xf(t,n),hl(n,l,null,s);var M=n.memoizedState;if(l=M.cache,bs(n,Bn,l),l!==p.cache&&Ff(n,[Bn],s,!0),dl(),l=M.element,p.isDehydrated)if(p={element:l,isDehydrated:!1,cache:M.cache},n.updateQueue.baseState=p,n.memoizedState=p,n.flags&256){n=yg(t,n,l,s);break e}else if(l!==f){f=qi(Error(r(424)),n),rl(f),n=yg(t,n,l,s);break e}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(pn=Ji(t.firstChild),ti=n,Ot=!0,ys=null,Ki=!0,s=_0(n,null,l,s),n.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling}else{if(hr(),l===f){n=Qa(t,n,s);break e}ii(t,n,l,s)}n=n.child}return n;case 26:return Fc(t,n),t===null?(s=B_(n.type,null,n.pendingProps,null))?n.memoizedState=s:Ot||(s=n.type,t=n.pendingProps,l=tu(se.current).createElement(s),l[dn]=n,l[Sn]=t,ai(l,s,t),Tn(l),n.stateNode=l):n.memoizedState=B_(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return st(n),t===null&&Ot&&(l=n.stateNode=O_(n.type,n.pendingProps,se.current),ti=n,Ki=!0,f=pn,Bs(n.type)?(ih=f,pn=Ji(l.firstChild)):pn=f),ii(t,n,n.pendingProps.children,s),Fc(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Ot&&((f=l=pn)&&(l=fy(l,n.type,n.pendingProps,Ki),l!==null?(n.stateNode=l,ti=n,pn=Ji(l.firstChild),Ki=!1,f=!0):f=!1),f||Es(n)),st(n),f=n.type,p=n.pendingProps,M=t!==null?t.memoizedProps:null,l=p.children,Jd(f,p)?l=null:M!==null&&Jd(f,M)&&(n.flags|=32),n.memoizedState!==null&&(f=Qf(t,n,AM,null,null,s),Ul._currentValue=f),Fc(t,n),ii(t,n,l,s),n.child;case 6:return t===null&&Ot&&((t=s=pn)&&(s=dy(s,n.pendingProps,Ki),s!==null?(n.stateNode=s,ti=n,pn=null,t=!0):t=!1),t||Es(n)),null;case 13:return Eg(t,n,s);case 4:return Ee(n,n.stateNode.containerInfo),l=n.pendingProps,t===null?n.child=xr(n,null,l,s):ii(t,n,l,s),n.child;case 11:return pg(t,n,n.type,n.pendingProps,s);case 7:return ii(t,n,n.pendingProps,s),n.child;case 8:return ii(t,n,n.pendingProps.children,s),n.child;case 12:return ii(t,n,n.pendingProps.children,s),n.child;case 10:return l=n.pendingProps,bs(n,n.type,l.value),ii(t,n,l.children,s),n.child;case 9:return f=n.type._context,l=n.pendingProps.children,mr(n),f=ni(f),l=l(f),n.flags|=1,ii(t,n,l,s),n.child;case 14:return mg(t,n,n.type,n.pendingProps,s);case 15:return gg(t,n,n.type,n.pendingProps,s);case 19:return Tg(t,n,s);case 31:return OM(t,n,s);case 22:return _g(t,n,s,n.pendingProps);case 24:return mr(n),l=ni(Bn),t===null?(f=Gf(),f===null&&(f=un,p=zf(),f.pooledCache=p,p.refCount++,p!==null&&(f.pooledCacheLanes|=s),f=p),n.memoizedState={parent:l,cache:f},kf(n),bs(n,Bn,f)):((t.lanes&s)!==0&&(Xf(t,n),hl(n,null,null,s),dl()),f=t.memoizedState,p=n.memoizedState,f.parent!==l?(f={parent:l,cache:l},n.memoizedState=f,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=f),bs(n,Bn,l)):(l=p.cache,bs(n,Bn,l),l!==f.cache&&Ff(n,[Bn],s,!0))),ii(t,n,n.pendingProps.children,s),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function Ja(t){t.flags|=4}function Td(t,n,s,l,f){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(f&335544128)===f)if(t.stateNode.complete)t.flags|=8192;else if($g())t.flags|=8192;else throw vr=Ec,Vf}else t.flags&=-16777217}function Rg(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!V_(n))if($g())t.flags|=8192;else throw vr=Ec,Vf}function Hc(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Ae():536870912,t.lanes|=n,co|=n)}function xl(t,n){if(!Ot)switch(t.tailMode){case"hidden":n=t.tail;for(var s=null;n!==null;)n.alternate!==null&&(s=n),n=n.sibling;s===null?t.tail=null:s.sibling=null;break;case"collapsed":s=t.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function mn(t){var n=t.alternate!==null&&t.alternate.child===t.child,s=0,l=0;if(n)for(var f=t.child;f!==null;)s|=f.lanes|f.childLanes,l|=f.subtreeFlags&65011712,l|=f.flags&65011712,f.return=t,f=f.sibling;else for(f=t.child;f!==null;)s|=f.lanes|f.childLanes,l|=f.subtreeFlags,l|=f.flags,f.return=t,f=f.sibling;return t.subtreeFlags|=l,t.childLanes=s,n}function IM(t,n,s){var l=n.pendingProps;switch(Uf(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return mn(n),null;case 1:return mn(n),null;case 3:return s=n.stateNode,l=null,t!==null&&(l=t.memoizedState.cache),n.memoizedState.cache!==l&&(n.flags|=2048),ja(Bn),Ue(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(t===null||t.child===null)&&(Kr(n)?Ja(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Pf())),mn(n),null;case 26:var f=n.type,p=n.memoizedState;return t===null?(Ja(n),p!==null?(mn(n),Rg(n,p)):(mn(n),Td(n,f,null,l,s))):p?p!==t.memoizedState?(Ja(n),mn(n),Rg(n,p)):(mn(n),n.flags&=-16777217):(t=t.memoizedProps,t!==l&&Ja(n),mn(n),Td(n,f,t,l,s)),null;case 27:if(He(n),s=se.current,f=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==l&&Ja(n);else{if(!l){if(n.stateNode===null)throw Error(r(166));return mn(n),null}t=Ce.current,Kr(n)?r0(n):(t=O_(f,l,s),n.stateNode=t,Ja(n))}return mn(n),null;case 5:if(He(n),f=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==l&&Ja(n);else{if(!l){if(n.stateNode===null)throw Error(r(166));return mn(n),null}if(p=Ce.current,Kr(n))r0(n);else{var M=tu(se.current);switch(p){case 1:p=M.createElementNS("http://www.w3.org/2000/svg",f);break;case 2:p=M.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;default:switch(f){case"svg":p=M.createElementNS("http://www.w3.org/2000/svg",f);break;case"math":p=M.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;case"script":p=M.createElement("div"),p.innerHTML="<script><\/script>",p=p.removeChild(p.firstChild);break;case"select":p=typeof l.is=="string"?M.createElement("select",{is:l.is}):M.createElement("select"),l.multiple?p.multiple=!0:l.size&&(p.size=l.size);break;default:p=typeof l.is=="string"?M.createElement(f,{is:l.is}):M.createElement(f)}}p[dn]=n,p[Sn]=l;e:for(M=n.child;M!==null;){if(M.tag===5||M.tag===6)p.appendChild(M.stateNode);else if(M.tag!==4&&M.tag!==27&&M.child!==null){M.child.return=M,M=M.child;continue}if(M===n)break e;for(;M.sibling===null;){if(M.return===null||M.return===n)break e;M=M.return}M.sibling.return=M.return,M=M.sibling}n.stateNode=p;e:switch(ai(p,f,l),f){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&Ja(n)}}return mn(n),Td(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,s),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==l&&Ja(n);else{if(typeof l!="string"&&n.stateNode===null)throw Error(r(166));if(t=se.current,Kr(n)){if(t=n.stateNode,s=n.memoizedProps,l=null,f=ti,f!==null)switch(f.tag){case 27:case 5:l=f.memoizedProps}t[dn]=n,t=!!(t.nodeValue===s||l!==null&&l.suppressHydrationWarning===!0||E_(t.nodeValue,s)),t||Es(n,!0)}else t=tu(t).createTextNode(l),t[dn]=n,n.stateNode=t}return mn(n),null;case 31:if(s=n.memoizedState,t===null||t.memoizedState!==null){if(l=Kr(n),s!==null){if(t===null){if(!l)throw Error(r(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[dn]=n}else hr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;mn(n),t=!1}else s=Pf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=s),t=!0;if(!t)return n.flags&256?(Ui(n),n):(Ui(n),null);if((n.flags&128)!==0)throw Error(r(558))}return mn(n),null;case 13:if(l=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(f=Kr(n),l!==null&&l.dehydrated!==null){if(t===null){if(!f)throw Error(r(318));if(f=n.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(r(317));f[dn]=n}else hr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;mn(n),f=!1}else f=Pf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=f),f=!0;if(!f)return n.flags&256?(Ui(n),n):(Ui(n),null)}return Ui(n),(n.flags&128)!==0?(n.lanes=s,n):(s=l!==null,t=t!==null&&t.memoizedState!==null,s&&(l=n.child,f=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(f=l.alternate.memoizedState.cachePool.pool),p=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(p=l.memoizedState.cachePool.pool),p!==f&&(l.flags|=2048)),s!==t&&s&&(n.child.flags|=8192),Hc(n,n.updateQueue),mn(n),null);case 4:return Ue(),t===null&&qd(n.stateNode.containerInfo),mn(n),null;case 10:return ja(n.type),mn(n),null;case 19:if(K(Nn),l=n.memoizedState,l===null)return mn(n),null;if(f=(n.flags&128)!==0,p=l.rendering,p===null)if(f)xl(l,!1);else{if(Rn!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(p=Rc(t),p!==null){for(n.flags|=128,xl(l,!1),t=p.updateQueue,n.updateQueue=t,Hc(n,t),n.subtreeFlags=0,t=s,s=n.child;s!==null;)t0(s,t),s=s.sibling;return ye(Nn,Nn.current&1|2),Ot&&Ya(n,l.treeForkCount),n.child}t=t.sibling}l.tail!==null&&qt()>Wc&&(n.flags|=128,f=!0,xl(l,!1),n.lanes=4194304)}else{if(!f)if(t=Rc(p),t!==null){if(n.flags|=128,f=!0,t=t.updateQueue,n.updateQueue=t,Hc(n,t),xl(l,!0),l.tail===null&&l.tailMode==="hidden"&&!p.alternate&&!Ot)return mn(n),null}else 2*qt()-l.renderingStartTime>Wc&&s!==536870912&&(n.flags|=128,f=!0,xl(l,!1),n.lanes=4194304);l.isBackwards?(p.sibling=n.child,n.child=p):(t=l.last,t!==null?t.sibling=p:n.child=p,l.last=p)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=qt(),t.sibling=null,s=Nn.current,ye(Nn,f?s&1|2:s&1),Ot&&Ya(n,l.treeForkCount),t):(mn(n),null);case 22:case 23:return Ui(n),jf(),l=n.memoizedState!==null,t!==null?t.memoizedState!==null!==l&&(n.flags|=8192):l&&(n.flags|=8192),l?(s&536870912)!==0&&(n.flags&128)===0&&(mn(n),n.subtreeFlags&6&&(n.flags|=8192)):mn(n),s=n.updateQueue,s!==null&&Hc(n,s.retryQueue),s=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),l=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(l=n.memoizedState.cachePool.pool),l!==s&&(n.flags|=2048),t!==null&&K(gr),null;case 24:return s=null,t!==null&&(s=t.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),ja(Bn),mn(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function BM(t,n){switch(Uf(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return ja(Bn),Ue(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return He(n),null;case 31:if(n.memoizedState!==null){if(Ui(n),n.alternate===null)throw Error(r(340));hr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(Ui(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));hr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return K(Nn),null;case 4:return Ue(),null;case 10:return ja(n.type),null;case 22:case 23:return Ui(n),jf(),t!==null&&K(gr),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return ja(Bn),null;case 25:return null;default:return null}}function Cg(t,n){switch(Uf(n),n.tag){case 3:ja(Bn),Ue();break;case 26:case 27:case 5:He(n);break;case 4:Ue();break;case 31:n.memoizedState!==null&&Ui(n);break;case 13:Ui(n);break;case 19:K(Nn);break;case 10:ja(n.type);break;case 22:case 23:Ui(n),jf(),t!==null&&K(gr);break;case 24:ja(Bn)}}function Sl(t,n){try{var s=n.updateQueue,l=s!==null?s.lastEffect:null;if(l!==null){var f=l.next;s=f;do{if((s.tag&t)===t){l=void 0;var p=s.create,M=s.inst;l=p(),M.destroy=l}s=s.next}while(s!==f)}}catch(w){nn(n,n.return,w)}}function Ds(t,n,s){try{var l=n.updateQueue,f=l!==null?l.lastEffect:null;if(f!==null){var p=f.next;l=p;do{if((l.tag&t)===t){var M=l.inst,w=M.destroy;if(w!==void 0){M.destroy=void 0,f=n;var k=s,re=w;try{re()}catch(ve){nn(f,k,ve)}}}l=l.next}while(l!==p)}}catch(ve){nn(n,n.return,ve)}}function wg(t){var n=t.updateQueue;if(n!==null){var s=t.stateNode;try{x0(n,s)}catch(l){nn(t,t.return,l)}}}function Dg(t,n,s){s.props=Mr(t.type,t.memoizedProps),s.state=t.memoizedState;try{s.componentWillUnmount()}catch(l){nn(t,n,l)}}function Ml(t,n){try{var s=t.ref;if(s!==null){switch(t.tag){case 26:case 27:case 5:var l=t.stateNode;break;case 30:l=t.stateNode;break;default:l=t.stateNode}typeof s=="function"?t.refCleanup=s(l):s.current=l}}catch(f){nn(t,n,f)}}function ba(t,n){var s=t.ref,l=t.refCleanup;if(s!==null)if(typeof l=="function")try{l()}catch(f){nn(t,n,f)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(f){nn(t,n,f)}else s.current=null}function Lg(t){var n=t.type,s=t.memoizedProps,l=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":s.autoFocus&&l.focus();break e;case"img":s.src?l.src=s.src:s.srcSet&&(l.srcset=s.srcSet)}}catch(f){nn(t,t.return,f)}}function Ad(t,n,s){try{var l=t.stateNode;sy(l,t.type,s,n),l[Sn]=n}catch(f){nn(t,t.return,f)}}function Ng(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Bs(t.type)||t.tag===4}function Rd(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Ng(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Bs(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Cd(t,n,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,n?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(t,n):(n=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,n.appendChild(t),s=s._reactRootContainer,s!=null||n.onclick!==null||(n.onclick=en));else if(l!==4&&(l===27&&Bs(t.type)&&(s=t.stateNode,n=null),t=t.child,t!==null))for(Cd(t,n,s),t=t.sibling;t!==null;)Cd(t,n,s),t=t.sibling}function Gc(t,n,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,n?s.insertBefore(t,n):s.appendChild(t);else if(l!==4&&(l===27&&Bs(t.type)&&(s=t.stateNode),t=t.child,t!==null))for(Gc(t,n,s),t=t.sibling;t!==null;)Gc(t,n,s),t=t.sibling}function Ug(t){var n=t.stateNode,s=t.memoizedProps;try{for(var l=t.type,f=n.attributes;f.length;)n.removeAttributeNode(f[0]);ai(n,l,s),n[dn]=t,n[Sn]=s}catch(p){nn(t,t.return,p)}}var $a=!1,Hn=!1,wd=!1,Og=typeof WeakSet=="function"?WeakSet:Set,Qn=null;function FM(t,n){if(t=t.containerInfo,Kd=lu,t=Ym(t),yf(t)){if("selectionStart"in t)var s={start:t.selectionStart,end:t.selectionEnd};else e:{s=(s=t.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var f=l.anchorOffset,p=l.focusNode;l=l.focusOffset;try{s.nodeType,p.nodeType}catch{s=null;break e}var M=0,w=-1,k=-1,re=0,ve=0,be=t,ce=null;t:for(;;){for(var de;be!==s||f!==0&&be.nodeType!==3||(w=M+f),be!==p||l!==0&&be.nodeType!==3||(k=M+l),be.nodeType===3&&(M+=be.nodeValue.length),(de=be.firstChild)!==null;)ce=be,be=de;for(;;){if(be===t)break t;if(ce===s&&++re===f&&(w=M),ce===p&&++ve===l&&(k=M),(de=be.nextSibling)!==null)break;be=ce,ce=be.parentNode}be=de}s=w===-1||k===-1?null:{start:w,end:k}}else s=null}s=s||{start:0,end:0}}else s=null;for(Qd={focusedElem:t,selectionRange:s},lu=!1,Qn=n;Qn!==null;)if(n=Qn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,Qn=t;else for(;Qn!==null;){switch(n=Qn,p=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(s=0;s<t.length;s++)f=t[s],f.ref.impl=f.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&p!==null){t=void 0,s=n,f=p.memoizedProps,p=p.memoizedState,l=s.stateNode;try{var Qe=Mr(s.type,f);t=l.getSnapshotBeforeUpdate(Qe,p),l.__reactInternalSnapshotBeforeUpdate=t}catch(ct){nn(s,s.return,ct)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,s=t.nodeType,s===9)eh(t);else if(s===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":eh(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,Qn=t;break}Qn=n.return}}function Pg(t,n,s){var l=s.flags;switch(s.tag){case 0:case 11:case 15:ts(t,s),l&4&&Sl(5,s);break;case 1:if(ts(t,s),l&4)if(t=s.stateNode,n===null)try{t.componentDidMount()}catch(M){nn(s,s.return,M)}else{var f=Mr(s.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(f,n,t.__reactInternalSnapshotBeforeUpdate)}catch(M){nn(s,s.return,M)}}l&64&&wg(s),l&512&&Ml(s,s.return);break;case 3:if(ts(t,s),l&64&&(t=s.updateQueue,t!==null)){if(n=null,s.child!==null)switch(s.child.tag){case 27:case 5:n=s.child.stateNode;break;case 1:n=s.child.stateNode}try{x0(t,n)}catch(M){nn(s,s.return,M)}}break;case 27:n===null&&l&4&&Ug(s);case 26:case 5:ts(t,s),n===null&&l&4&&Lg(s),l&512&&Ml(s,s.return);break;case 12:ts(t,s);break;case 31:ts(t,s),l&4&&Fg(t,s);break;case 13:ts(t,s),l&4&&zg(t,s),l&64&&(t=s.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(s=qM.bind(null,s),hy(t,s))));break;case 22:if(l=s.memoizedState!==null||$a,!l){n=n!==null&&n.memoizedState!==null||Hn,f=$a;var p=Hn;$a=l,(Hn=n)&&!p?ns(t,s,(s.subtreeFlags&8772)!==0):ts(t,s),$a=f,Hn=p}break;case 30:break;default:ts(t,s)}}function Ig(t){var n=t.alternate;n!==null&&(t.alternate=null,Ig(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Vi(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var vn=null,yi=!1;function es(t,n,s){for(s=s.child;s!==null;)Bg(t,n,s),s=s.sibling}function Bg(t,n,s){if(ge&&typeof ge.onCommitFiberUnmount=="function")try{ge.onCommitFiberUnmount(pe,s)}catch{}switch(s.tag){case 26:Hn||ba(s,n),es(t,n,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:Hn||ba(s,n);var l=vn,f=yi;Bs(s.type)&&(vn=s.stateNode,yi=!1),es(t,n,s),Dl(s.stateNode),vn=l,yi=f;break;case 5:Hn||ba(s,n);case 6:if(l=vn,f=yi,vn=null,es(t,n,s),vn=l,yi=f,vn!==null)if(yi)try{(vn.nodeType===9?vn.body:vn.nodeName==="HTML"?vn.ownerDocument.body:vn).removeChild(s.stateNode)}catch(p){nn(s,n,p)}else try{vn.removeChild(s.stateNode)}catch(p){nn(s,n,p)}break;case 18:vn!==null&&(yi?(t=vn,w_(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,s.stateNode),vo(t)):w_(vn,s.stateNode));break;case 4:l=vn,f=yi,vn=s.stateNode.containerInfo,yi=!0,es(t,n,s),vn=l,yi=f;break;case 0:case 11:case 14:case 15:Ds(2,s,n),Hn||Ds(4,s,n),es(t,n,s);break;case 1:Hn||(ba(s,n),l=s.stateNode,typeof l.componentWillUnmount=="function"&&Dg(s,n,l)),es(t,n,s);break;case 21:es(t,n,s);break;case 22:Hn=(l=Hn)||s.memoizedState!==null,es(t,n,s),Hn=l;break;default:es(t,n,s)}}function Fg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{vo(t)}catch(s){nn(n,n.return,s)}}}function zg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{vo(t)}catch(s){nn(n,n.return,s)}}function zM(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new Og),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new Og),n;default:throw Error(r(435,t.tag))}}function Vc(t,n){var s=zM(t);n.forEach(function(l){if(!s.has(l)){s.add(l);var f=jM.bind(null,t,l);l.then(f,f)}})}function Ei(t,n){var s=n.deletions;if(s!==null)for(var l=0;l<s.length;l++){var f=s[l],p=t,M=n,w=M;e:for(;w!==null;){switch(w.tag){case 27:if(Bs(w.type)){vn=w.stateNode,yi=!1;break e}break;case 5:vn=w.stateNode,yi=!1;break e;case 3:case 4:vn=w.stateNode.containerInfo,yi=!0;break e}w=w.return}if(vn===null)throw Error(r(160));Bg(p,M,f),vn=null,yi=!1,p=f.alternate,p!==null&&(p.return=null),f.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Hg(n,t),n=n.sibling}var ua=null;function Hg(t,n){var s=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Ei(n,t),bi(t),l&4&&(Ds(3,t,t.return),Sl(3,t),Ds(5,t,t.return));break;case 1:Ei(n,t),bi(t),l&512&&(Hn||s===null||ba(s,s.return)),l&64&&$a&&(t=t.updateQueue,t!==null&&(l=t.callbacks,l!==null&&(s=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=s===null?l:s.concat(l))));break;case 26:var f=ua;if(Ei(n,t),bi(t),l&512&&(Hn||s===null||ba(s,s.return)),l&4){var p=s!==null?s.memoizedState:null;if(l=t.memoizedState,s===null)if(l===null)if(t.stateNode===null){e:{l=t.type,s=t.memoizedProps,f=f.ownerDocument||f;t:switch(l){case"title":p=f.getElementsByTagName("title")[0],(!p||p[ra]||p[dn]||p.namespaceURI==="http://www.w3.org/2000/svg"||p.hasAttribute("itemprop"))&&(p=f.createElement(l),f.head.insertBefore(p,f.querySelector("head > title"))),ai(p,l,s),p[dn]=t,Tn(p),l=p;break e;case"link":var M=H_("link","href",f).get(l+(s.href||""));if(M){for(var w=0;w<M.length;w++)if(p=M[w],p.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&p.getAttribute("rel")===(s.rel==null?null:s.rel)&&p.getAttribute("title")===(s.title==null?null:s.title)&&p.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){M.splice(w,1);break t}}p=f.createElement(l),ai(p,l,s),f.head.appendChild(p);break;case"meta":if(M=H_("meta","content",f).get(l+(s.content||""))){for(w=0;w<M.length;w++)if(p=M[w],p.getAttribute("content")===(s.content==null?null:""+s.content)&&p.getAttribute("name")===(s.name==null?null:s.name)&&p.getAttribute("property")===(s.property==null?null:s.property)&&p.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&p.getAttribute("charset")===(s.charSet==null?null:s.charSet)){M.splice(w,1);break t}}p=f.createElement(l),ai(p,l,s),f.head.appendChild(p);break;default:throw Error(r(468,l))}p[dn]=t,Tn(p),l=p}t.stateNode=l}else G_(f,t.type,t.stateNode);else t.stateNode=z_(f,l,t.memoizedProps);else p!==l?(p===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):p.count--,l===null?G_(f,t.type,t.stateNode):z_(f,l,t.memoizedProps)):l===null&&t.stateNode!==null&&Ad(t,t.memoizedProps,s.memoizedProps)}break;case 27:Ei(n,t),bi(t),l&512&&(Hn||s===null||ba(s,s.return)),s!==null&&l&4&&Ad(t,t.memoizedProps,s.memoizedProps);break;case 5:if(Ei(n,t),bi(t),l&512&&(Hn||s===null||ba(s,s.return)),t.flags&32){f=t.stateNode;try{dt(f,"")}catch(Qe){nn(t,t.return,Qe)}}l&4&&t.stateNode!=null&&(f=t.memoizedProps,Ad(t,f,s!==null?s.memoizedProps:f)),l&1024&&(wd=!0);break;case 6:if(Ei(n,t),bi(t),l&4){if(t.stateNode===null)throw Error(r(162));l=t.memoizedProps,s=t.stateNode;try{s.nodeValue=l}catch(Qe){nn(t,t.return,Qe)}}break;case 3:if(au=null,f=ua,ua=nu(n.containerInfo),Ei(n,t),ua=f,bi(t),l&4&&s!==null&&s.memoizedState.isDehydrated)try{vo(n.containerInfo)}catch(Qe){nn(t,t.return,Qe)}wd&&(wd=!1,Gg(t));break;case 4:l=ua,ua=nu(t.stateNode.containerInfo),Ei(n,t),bi(t),ua=l;break;case 12:Ei(n,t),bi(t);break;case 31:Ei(n,t),bi(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Vc(t,l)));break;case 13:Ei(n,t),bi(t),t.child.flags&8192&&t.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(Xc=qt()),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Vc(t,l)));break;case 22:f=t.memoizedState!==null;var k=s!==null&&s.memoizedState!==null,re=$a,ve=Hn;if($a=re||f,Hn=ve||k,Ei(n,t),Hn=ve,$a=re,bi(t),l&8192)e:for(n=t.stateNode,n._visibility=f?n._visibility&-2:n._visibility|1,f&&(s===null||k||$a||Hn||yr(t)),s=null,n=t;;){if(n.tag===5||n.tag===26){if(s===null){k=s=n;try{if(p=k.stateNode,f)M=p.style,typeof M.setProperty=="function"?M.setProperty("display","none","important"):M.display="none";else{w=k.stateNode;var be=k.memoizedProps.style,ce=be!=null&&be.hasOwnProperty("display")?be.display:null;w.style.display=ce==null||typeof ce=="boolean"?"":(""+ce).trim()}}catch(Qe){nn(k,k.return,Qe)}}}else if(n.tag===6){if(s===null){k=n;try{k.stateNode.nodeValue=f?"":k.memoizedProps}catch(Qe){nn(k,k.return,Qe)}}}else if(n.tag===18){if(s===null){k=n;try{var de=k.stateNode;f?D_(de,!0):D_(k.stateNode,!1)}catch(Qe){nn(k,k.return,Qe)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;s===n&&(s=null),n=n.return}s===n&&(s=null),n.sibling.return=n.return,n=n.sibling}l&4&&(l=t.updateQueue,l!==null&&(s=l.retryQueue,s!==null&&(l.retryQueue=null,Vc(t,s))));break;case 19:Ei(n,t),bi(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Vc(t,l)));break;case 30:break;case 21:break;default:Ei(n,t),bi(t)}}function bi(t){var n=t.flags;if(n&2){try{for(var s,l=t.return;l!==null;){if(Ng(l)){s=l;break}l=l.return}if(s==null)throw Error(r(160));switch(s.tag){case 27:var f=s.stateNode,p=Rd(t);Gc(t,p,f);break;case 5:var M=s.stateNode;s.flags&32&&(dt(M,""),s.flags&=-33);var w=Rd(t);Gc(t,w,M);break;case 3:case 4:var k=s.stateNode.containerInfo,re=Rd(t);Cd(t,re,k);break;default:throw Error(r(161))}}catch(ve){nn(t,t.return,ve)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function Gg(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;Gg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function ts(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Pg(t,n.alternate,n),n=n.sibling}function yr(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Ds(4,n,n.return),yr(n);break;case 1:ba(n,n.return);var s=n.stateNode;typeof s.componentWillUnmount=="function"&&Dg(n,n.return,s),yr(n);break;case 27:Dl(n.stateNode);case 26:case 5:ba(n,n.return),yr(n);break;case 22:n.memoizedState===null&&yr(n);break;case 30:yr(n);break;default:yr(n)}t=t.sibling}}function ns(t,n,s){for(s=s&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var l=n.alternate,f=t,p=n,M=p.flags;switch(p.tag){case 0:case 11:case 15:ns(f,p,s),Sl(4,p);break;case 1:if(ns(f,p,s),l=p,f=l.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(re){nn(l,l.return,re)}if(l=p,f=l.updateQueue,f!==null){var w=l.stateNode;try{var k=f.shared.hiddenCallbacks;if(k!==null)for(f.shared.hiddenCallbacks=null,f=0;f<k.length;f++)v0(k[f],w)}catch(re){nn(l,l.return,re)}}s&&M&64&&wg(p),Ml(p,p.return);break;case 27:Ug(p);case 26:case 5:ns(f,p,s),s&&l===null&&M&4&&Lg(p),Ml(p,p.return);break;case 12:ns(f,p,s);break;case 31:ns(f,p,s),s&&M&4&&Fg(f,p);break;case 13:ns(f,p,s),s&&M&4&&zg(f,p);break;case 22:p.memoizedState===null&&ns(f,p,s),Ml(p,p.return);break;case 30:break;default:ns(f,p,s)}n=n.sibling}}function Dd(t,n){var s=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==s&&(t!=null&&t.refCount++,s!=null&&ol(s))}function Ld(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&ol(t))}function fa(t,n,s,l){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Vg(t,n,s,l),n=n.sibling}function Vg(t,n,s,l){var f=n.flags;switch(n.tag){case 0:case 11:case 15:fa(t,n,s,l),f&2048&&Sl(9,n);break;case 1:fa(t,n,s,l);break;case 3:fa(t,n,s,l),f&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&ol(t)));break;case 12:if(f&2048){fa(t,n,s,l),t=n.stateNode;try{var p=n.memoizedProps,M=p.id,w=p.onPostCommit;typeof w=="function"&&w(M,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(k){nn(n,n.return,k)}}else fa(t,n,s,l);break;case 31:fa(t,n,s,l);break;case 13:fa(t,n,s,l);break;case 23:break;case 22:p=n.stateNode,M=n.alternate,n.memoizedState!==null?p._visibility&2?fa(t,n,s,l):yl(t,n):p._visibility&2?fa(t,n,s,l):(p._visibility|=2,ro(t,n,s,l,(n.subtreeFlags&10256)!==0||!1)),f&2048&&Dd(M,n);break;case 24:fa(t,n,s,l),f&2048&&Ld(n.alternate,n);break;default:fa(t,n,s,l)}}function ro(t,n,s,l,f){for(f=f&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var p=t,M=n,w=s,k=l,re=M.flags;switch(M.tag){case 0:case 11:case 15:ro(p,M,w,k,f),Sl(8,M);break;case 23:break;case 22:var ve=M.stateNode;M.memoizedState!==null?ve._visibility&2?ro(p,M,w,k,f):yl(p,M):(ve._visibility|=2,ro(p,M,w,k,f)),f&&re&2048&&Dd(M.alternate,M);break;case 24:ro(p,M,w,k,f),f&&re&2048&&Ld(M.alternate,M);break;default:ro(p,M,w,k,f)}n=n.sibling}}function yl(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var s=t,l=n,f=l.flags;switch(l.tag){case 22:yl(s,l),f&2048&&Dd(l.alternate,l);break;case 24:yl(s,l),f&2048&&Ld(l.alternate,l);break;default:yl(s,l)}n=n.sibling}}var El=8192;function oo(t,n,s){if(t.subtreeFlags&El)for(t=t.child;t!==null;)kg(t,n,s),t=t.sibling}function kg(t,n,s){switch(t.tag){case 26:oo(t,n,s),t.flags&El&&t.memoizedState!==null&&Ty(s,ua,t.memoizedState,t.memoizedProps);break;case 5:oo(t,n,s);break;case 3:case 4:var l=ua;ua=nu(t.stateNode.containerInfo),oo(t,n,s),ua=l;break;case 22:t.memoizedState===null&&(l=t.alternate,l!==null&&l.memoizedState!==null?(l=El,El=16777216,oo(t,n,s),El=l):oo(t,n,s));break;default:oo(t,n,s)}}function Xg(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function bl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var s=0;s<n.length;s++){var l=n[s];Qn=l,Yg(l,t)}Xg(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Wg(t),t=t.sibling}function Wg(t){switch(t.tag){case 0:case 11:case 15:bl(t),t.flags&2048&&Ds(9,t,t.return);break;case 3:bl(t);break;case 12:bl(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,kc(t)):bl(t);break;default:bl(t)}}function kc(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var s=0;s<n.length;s++){var l=n[s];Qn=l,Yg(l,t)}Xg(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Ds(8,n,n.return),kc(n);break;case 22:s=n.stateNode,s._visibility&2&&(s._visibility&=-3,kc(n));break;default:kc(n)}t=t.sibling}}function Yg(t,n){for(;Qn!==null;){var s=Qn;switch(s.tag){case 0:case 11:case 15:Ds(8,s,n);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var l=s.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:ol(s.memoizedState.cache)}if(l=s.child,l!==null)l.return=s,Qn=l;else e:for(s=t;Qn!==null;){l=Qn;var f=l.sibling,p=l.return;if(Ig(l),l===s){Qn=null;break e}if(f!==null){f.return=p,Qn=f;break e}Qn=p}}}var HM={getCacheForType:function(t){var n=ni(Bn),s=n.data.get(t);return s===void 0&&(s=t(),n.data.set(t,s)),s},cacheSignal:function(){return ni(Bn).controller.signal}},GM=typeof WeakMap=="function"?WeakMap:Map,jt=0,un=null,Rt=null,wt=0,tn=0,Oi=null,Ls=!1,lo=!1,Nd=!1,is=0,Rn=0,Ns=0,Er=0,Ud=0,Pi=0,co=0,Tl=null,Ti=null,Od=!1,Xc=0,qg=0,Wc=1/0,Yc=null,Us=null,qn=0,Os=null,uo=null,as=0,Pd=0,Id=null,jg=null,Al=0,Bd=null;function Ii(){return(jt&2)!==0&&wt!==0?wt&-wt:z.T!==null?kd():$n()}function Zg(){if(Pi===0)if((wt&536870912)===0||Ot){var t=ut;ut<<=1,(ut&3932160)===0&&(ut=262144),Pi=t}else Pi=536870912;return t=Ni.current,t!==null&&(t.flags|=32),Pi}function Ai(t,n,s){(t===un&&(tn===2||tn===9)||t.cancelPendingCommit!==null)&&(fo(t,0),Ps(t,wt,Pi,!1)),qe(t,s),((jt&2)===0||t!==un)&&(t===un&&((jt&2)===0&&(Er|=s),Rn===4&&Ps(t,wt,Pi,!1)),Ta(t))}function Kg(t,n,s){if((jt&6)!==0)throw Error(r(327));var l=!s&&(n&127)===0&&(n&t.expiredLanes)===0||Le(t,n),f=l?XM(t,n):zd(t,n,!0),p=l;do{if(f===0){lo&&!l&&Ps(t,n,0,!1);break}else{if(s=t.current.alternate,p&&!VM(s)){f=zd(t,n,!1),p=!1;continue}if(f===2){if(p=n,t.errorRecoveryDisabledLanes&p)var M=0;else M=t.pendingLanes&-536870913,M=M!==0?M:M&536870912?536870912:0;if(M!==0){n=M;e:{var w=t;f=Tl;var k=w.current.memoizedState.isDehydrated;if(k&&(fo(w,M).flags|=256),M=zd(w,M,!1),M!==2){if(Nd&&!k){w.errorRecoveryDisabledLanes|=p,Er|=p,f=4;break e}p=Ti,Ti=f,p!==null&&(Ti===null?Ti=p:Ti.push.apply(Ti,p))}f=M}if(p=!1,f!==2)continue}}if(f===1){fo(t,0),Ps(t,n,0,!0);break}e:{switch(l=t,p=f,p){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Ps(l,n,Pi,!Ls);break e;case 2:Ti=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(f=Xc+300-qt(),10<f)){if(Ps(l,n,Pi,!Ls),_e(l,0,!0)!==0)break e;as=n,l.timeoutHandle=R_(Qg.bind(null,l,s,Ti,Yc,Od,n,Pi,Er,co,Ls,p,"Throttled",-0,0),f);break e}Qg(l,s,Ti,Yc,Od,n,Pi,Er,co,Ls,p,null,-0,0)}}break}while(!0);Ta(t)}function Qg(t,n,s,l,f,p,M,w,k,re,ve,be,ce,de){if(t.timeoutHandle=-1,be=n.subtreeFlags,be&8192||(be&16785408)===16785408){be={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:en},kg(n,p,be);var Qe=(p&62914560)===p?Xc-qt():(p&4194048)===p?qg-qt():0;if(Qe=Ay(be,Qe),Qe!==null){as=p,t.cancelPendingCommit=Qe(s_.bind(null,t,n,p,s,l,f,M,w,k,ve,be,null,ce,de)),Ps(t,p,M,!re);return}}s_(t,n,p,s,l,f,M,w,k)}function VM(t){for(var n=t;;){var s=n.tag;if((s===0||s===11||s===15)&&n.flags&16384&&(s=n.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var l=0;l<s.length;l++){var f=s[l],p=f.getSnapshot;f=f.value;try{if(!Di(p(),f))return!1}catch{return!1}}if(s=n.child,n.subtreeFlags&16384&&s!==null)s.return=n,n=s;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ps(t,n,s,l){n&=~Ud,n&=~Er,t.suspendedLanes|=n,t.pingedLanes&=~n,l&&(t.warmLanes|=n),l=t.expirationTimes;for(var f=n;0<f;){var p=31-Ge(f),M=1<<p;l[p]=-1,f&=~M}s!==0&&Nt(t,s,n)}function qc(){return(jt&6)===0?(Rl(0),!1):!0}function Fd(){if(Rt!==null){if(tn===0)var t=Rt.return;else t=Rt,qa=pr=null,ed(t),to=null,cl=0,t=Rt;for(;t!==null;)Cg(t.alternate,t),t=t.return;Rt=null}}function fo(t,n){var s=t.timeoutHandle;s!==-1&&(t.timeoutHandle=-1,ly(s)),s=t.cancelPendingCommit,s!==null&&(t.cancelPendingCommit=null,s()),as=0,Fd(),un=t,Rt=s=Wa(t.current,null),wt=n,tn=0,Oi=null,Ls=!1,lo=Le(t,n),Nd=!1,co=Pi=Ud=Er=Ns=Rn=0,Ti=Tl=null,Od=!1,(n&8)!==0&&(n|=n&32);var l=t.entangledLanes;if(l!==0)for(t=t.entanglements,l&=n;0<l;){var f=31-Ge(l),p=1<<f;n|=t[f],l&=~p}return is=n,pc(),s}function Jg(t,n){St=null,z.H=_l,n===eo||n===yc?(n=p0(),tn=3):n===Vf?(n=p0(),tn=4):tn=n===gd?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Oi=n,Rt===null&&(Rn=1,Ic(t,qi(n,t.current)))}function $g(){var t=Ni.current;return t===null?!0:(wt&4194048)===wt?Qi===null:(wt&62914560)===wt||(wt&536870912)!==0?t===Qi:!1}function e_(){var t=z.H;return z.H=_l,t===null?_l:t}function t_(){var t=z.A;return z.A=HM,t}function jc(){Rn=4,Ls||(wt&4194048)!==wt&&Ni.current!==null||(lo=!0),(Ns&134217727)===0&&(Er&134217727)===0||un===null||Ps(un,wt,Pi,!1)}function zd(t,n,s){var l=jt;jt|=2;var f=e_(),p=t_();(un!==t||wt!==n)&&(Yc=null,fo(t,n)),n=!1;var M=Rn;e:do try{if(tn!==0&&Rt!==null){var w=Rt,k=Oi;switch(tn){case 8:Fd(),M=6;break e;case 3:case 2:case 9:case 6:Ni.current===null&&(n=!0);var re=tn;if(tn=0,Oi=null,ho(t,w,k,re),s&&lo){M=0;break e}break;default:re=tn,tn=0,Oi=null,ho(t,w,k,re)}}kM(),M=Rn;break}catch(ve){Jg(t,ve)}while(!0);return n&&t.shellSuspendCounter++,qa=pr=null,jt=l,z.H=f,z.A=p,Rt===null&&(un=null,wt=0,pc()),M}function kM(){for(;Rt!==null;)n_(Rt)}function XM(t,n){var s=jt;jt|=2;var l=e_(),f=t_();un!==t||wt!==n?(Yc=null,Wc=qt()+500,fo(t,n)):lo=Le(t,n);e:do try{if(tn!==0&&Rt!==null){n=Rt;var p=Oi;t:switch(tn){case 1:tn=0,Oi=null,ho(t,n,p,1);break;case 2:case 9:if(d0(p)){tn=0,Oi=null,i_(n);break}n=function(){tn!==2&&tn!==9||un!==t||(tn=7),Ta(t)},p.then(n,n);break e;case 3:tn=7;break e;case 4:tn=5;break e;case 7:d0(p)?(tn=0,Oi=null,i_(n)):(tn=0,Oi=null,ho(t,n,p,7));break;case 5:var M=null;switch(Rt.tag){case 26:M=Rt.memoizedState;case 5:case 27:var w=Rt;if(M?V_(M):w.stateNode.complete){tn=0,Oi=null;var k=w.sibling;if(k!==null)Rt=k;else{var re=w.return;re!==null?(Rt=re,Zc(re)):Rt=null}break t}}tn=0,Oi=null,ho(t,n,p,5);break;case 6:tn=0,Oi=null,ho(t,n,p,6);break;case 8:Fd(),Rn=6;break e;default:throw Error(r(462))}}WM();break}catch(ve){Jg(t,ve)}while(!0);return qa=pr=null,z.H=l,z.A=f,jt=s,Rt!==null?0:(un=null,wt=0,pc(),Rn)}function WM(){for(;Rt!==null&&!$t();)n_(Rt)}function n_(t){var n=Ag(t.alternate,t,is);t.memoizedProps=t.pendingProps,n===null?Zc(t):Rt=n}function i_(t){var n=t,s=n.alternate;switch(n.tag){case 15:case 0:n=Sg(s,n,n.pendingProps,n.type,void 0,wt);break;case 11:n=Sg(s,n,n.pendingProps,n.type.render,n.ref,wt);break;case 5:ed(n);default:Cg(s,n),n=Rt=t0(n,is),n=Ag(s,n,is)}t.memoizedProps=t.pendingProps,n===null?Zc(t):Rt=n}function ho(t,n,s,l){qa=pr=null,ed(n),to=null,cl=0;var f=n.return;try{if(UM(t,f,n,s,wt)){Rn=1,Ic(t,qi(s,t.current)),Rt=null;return}}catch(p){if(f!==null)throw Rt=f,p;Rn=1,Ic(t,qi(s,t.current)),Rt=null;return}n.flags&32768?(Ot||l===1?t=!0:lo||(wt&536870912)!==0?t=!1:(Ls=t=!0,(l===2||l===9||l===3||l===6)&&(l=Ni.current,l!==null&&l.tag===13&&(l.flags|=16384))),a_(n,t)):Zc(n)}function Zc(t){var n=t;do{if((n.flags&32768)!==0){a_(n,Ls);return}t=n.return;var s=IM(n.alternate,n,is);if(s!==null){Rt=s;return}if(n=n.sibling,n!==null){Rt=n;return}Rt=n=t}while(n!==null);Rn===0&&(Rn=5)}function a_(t,n){do{var s=BM(t.alternate,t);if(s!==null){s.flags&=32767,Rt=s;return}if(s=t.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!n&&(t=t.sibling,t!==null)){Rt=t;return}Rt=t=s}while(t!==null);Rn=6,Rt=null}function s_(t,n,s,l,f,p,M,w,k){t.cancelPendingCommit=null;do Kc();while(qn!==0);if((jt&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));if(p=n.lanes|n.childLanes,p|=Rf,Ht(t,s,p,M,w,k),t===un&&(Rt=un=null,wt=0),uo=n,Os=t,as=s,Pd=p,Id=f,jg=l,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,ZM($,function(){return u_(),null})):(t.callbackNode=null,t.callbackPriority=0),l=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||l){l=z.T,z.T=null,f=G.p,G.p=2,M=jt,jt|=4;try{FM(t,n,s)}finally{jt=M,G.p=f,z.T=l}}qn=1,r_(),o_(),l_()}}function r_(){if(qn===1){qn=0;var t=Os,n=uo,s=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||s){s=z.T,z.T=null;var l=G.p;G.p=2;var f=jt;jt|=4;try{Hg(n,t);var p=Qd,M=Ym(t.containerInfo),w=p.focusedElem,k=p.selectionRange;if(M!==w&&w&&w.ownerDocument&&Wm(w.ownerDocument.documentElement,w)){if(k!==null&&yf(w)){var re=k.start,ve=k.end;if(ve===void 0&&(ve=re),"selectionStart"in w)w.selectionStart=re,w.selectionEnd=Math.min(ve,w.value.length);else{var be=w.ownerDocument||document,ce=be&&be.defaultView||window;if(ce.getSelection){var de=ce.getSelection(),Qe=w.textContent.length,ct=Math.min(k.start,Qe),ln=k.end===void 0?ct:Math.min(k.end,Qe);!de.extend&&ct>ln&&(M=ln,ln=ct,ct=M);var Q=Xm(w,ct),W=Xm(w,ln);if(Q&&W&&(de.rangeCount!==1||de.anchorNode!==Q.node||de.anchorOffset!==Q.offset||de.focusNode!==W.node||de.focusOffset!==W.offset)){var ae=be.createRange();ae.setStart(Q.node,Q.offset),de.removeAllRanges(),ct>ln?(de.addRange(ae),de.extend(W.node,W.offset)):(ae.setEnd(W.node,W.offset),de.addRange(ae))}}}}for(be=[],de=w;de=de.parentNode;)de.nodeType===1&&be.push({element:de,left:de.scrollLeft,top:de.scrollTop});for(typeof w.focus=="function"&&w.focus(),w=0;w<be.length;w++){var Me=be[w];Me.element.scrollLeft=Me.left,Me.element.scrollTop=Me.top}}lu=!!Kd,Qd=Kd=null}finally{jt=f,G.p=l,z.T=s}}t.current=n,qn=2}}function o_(){if(qn===2){qn=0;var t=Os,n=uo,s=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||s){s=z.T,z.T=null;var l=G.p;G.p=2;var f=jt;jt|=4;try{Pg(t,n.alternate,n)}finally{jt=f,G.p=l,z.T=s}}qn=3}}function l_(){if(qn===4||qn===3){qn=0,j();var t=Os,n=uo,s=as,l=jg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?qn=5:(qn=0,uo=Os=null,c_(t,t.pendingLanes));var f=t.pendingLanes;if(f===0&&(Us=null),Gi(s),n=n.stateNode,ge&&typeof ge.onCommitFiberRoot=="function")try{ge.onCommitFiberRoot(pe,n,void 0,(n.current.flags&128)===128)}catch{}if(l!==null){n=z.T,f=G.p,G.p=2,z.T=null;try{for(var p=t.onRecoverableError,M=0;M<l.length;M++){var w=l[M];p(w.value,{componentStack:w.stack})}}finally{z.T=n,G.p=f}}(as&3)!==0&&Kc(),Ta(t),f=t.pendingLanes,(s&261930)!==0&&(f&42)!==0?t===Bd?Al++:(Al=0,Bd=t):Al=0,Rl(0)}}function c_(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,ol(n)))}function Kc(){return r_(),o_(),l_(),u_()}function u_(){if(qn!==5)return!1;var t=Os,n=Pd;Pd=0;var s=Gi(as),l=z.T,f=G.p;try{G.p=32>s?32:s,z.T=null,s=Id,Id=null;var p=Os,M=as;if(qn=0,uo=Os=null,as=0,(jt&6)!==0)throw Error(r(331));var w=jt;if(jt|=4,Wg(p.current),Vg(p,p.current,M,s),jt=w,Rl(0,!1),ge&&typeof ge.onPostCommitFiberRoot=="function")try{ge.onPostCommitFiberRoot(pe,p)}catch{}return!0}finally{G.p=f,z.T=l,c_(t,n)}}function f_(t,n,s){n=qi(s,n),n=md(t.stateNode,n,2),t=Rs(t,n,2),t!==null&&(qe(t,2),Ta(t))}function nn(t,n,s){if(t.tag===3)f_(t,t,s);else for(;n!==null;){if(n.tag===3){f_(n,t,s);break}else if(n.tag===1){var l=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Us===null||!Us.has(l))){t=qi(s,t),s=dg(2),l=Rs(n,s,2),l!==null&&(hg(s,l,n,t),qe(l,2),Ta(l));break}}n=n.return}}function Hd(t,n,s){var l=t.pingCache;if(l===null){l=t.pingCache=new GM;var f=new Set;l.set(n,f)}else f=l.get(n),f===void 0&&(f=new Set,l.set(n,f));f.has(s)||(Nd=!0,f.add(s),t=YM.bind(null,t,n,s),n.then(t,t))}function YM(t,n,s){var l=t.pingCache;l!==null&&l.delete(n),t.pingedLanes|=t.suspendedLanes&s,t.warmLanes&=~s,un===t&&(wt&s)===s&&(Rn===4||Rn===3&&(wt&62914560)===wt&&300>qt()-Xc?(jt&2)===0&&fo(t,0):Ud|=s,co===wt&&(co=0)),Ta(t)}function d_(t,n){n===0&&(n=Ae()),t=fr(t,n),t!==null&&(qe(t,n),Ta(t))}function qM(t){var n=t.memoizedState,s=0;n!==null&&(s=n.retryLane),d_(t,s)}function jM(t,n){var s=0;switch(t.tag){case 31:case 13:var l=t.stateNode,f=t.memoizedState;f!==null&&(s=f.retryLane);break;case 19:l=t.stateNode;break;case 22:l=t.stateNode._retryCache;break;default:throw Error(r(314))}l!==null&&l.delete(n),d_(t,s)}function ZM(t,n){return Zt(t,n)}var Qc=null,po=null,Gd=!1,Jc=!1,Vd=!1,Is=0;function Ta(t){t!==po&&t.next===null&&(po===null?Qc=po=t:po=po.next=t),Jc=!0,Gd||(Gd=!0,QM())}function Rl(t,n){if(!Vd&&Jc){Vd=!0;do for(var s=!1,l=Qc;l!==null;){if(t!==0){var f=l.pendingLanes;if(f===0)var p=0;else{var M=l.suspendedLanes,w=l.pingedLanes;p=(1<<31-Ge(42|t)+1)-1,p&=f&~(M&~w),p=p&201326741?p&201326741|1:p?p|2:0}p!==0&&(s=!0,g_(l,p))}else p=wt,p=_e(l,l===un?p:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(p&3)===0||Le(l,p)||(s=!0,g_(l,p));l=l.next}while(s);Vd=!1}}function KM(){h_()}function h_(){Jc=Gd=!1;var t=0;Is!==0&&oy()&&(t=Is);for(var n=qt(),s=null,l=Qc;l!==null;){var f=l.next,p=p_(l,n);p===0?(l.next=null,s===null?Qc=f:s.next=f,f===null&&(po=s)):(s=l,(t!==0||(p&3)!==0)&&(Jc=!0)),l=f}qn!==0&&qn!==5||Rl(t),Is!==0&&(Is=0)}function p_(t,n){for(var s=t.suspendedLanes,l=t.pingedLanes,f=t.expirationTimes,p=t.pendingLanes&-62914561;0<p;){var M=31-Ge(p),w=1<<M,k=f[M];k===-1?((w&s)===0||(w&l)!==0)&&(f[M]=Ne(w,n)):k<=n&&(t.expiredLanes|=w),p&=~w}if(n=un,s=wt,s=_e(t,t===n?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l=t.callbackNode,s===0||t===n&&(tn===2||tn===9)||t.cancelPendingCommit!==null)return l!==null&&l!==null&&Lt(l),t.callbackNode=null,t.callbackPriority=0;if((s&3)===0||Le(t,s)){if(n=s&-s,n===t.callbackPriority)return n;switch(l!==null&&Lt(l),Gi(s)){case 2:case 8:s=T;break;case 32:s=$;break;case 268435456:s=me;break;default:s=$}return l=m_.bind(null,t),s=Zt(s,l),t.callbackPriority=n,t.callbackNode=s,n}return l!==null&&l!==null&&Lt(l),t.callbackPriority=2,t.callbackNode=null,2}function m_(t,n){if(qn!==0&&qn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var s=t.callbackNode;if(Kc()&&t.callbackNode!==s)return null;var l=wt;return l=_e(t,t===un?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l===0?null:(Kg(t,l,n),p_(t,qt()),t.callbackNode!=null&&t.callbackNode===s?m_.bind(null,t):null)}function g_(t,n){if(Kc())return null;Kg(t,n,!0)}function QM(){cy(function(){(jt&6)!==0?Zt(F,KM):h_()})}function kd(){if(Is===0){var t=Jr;t===0&&(t=nt,nt<<=1,(nt&261888)===0&&(nt=256)),Is=t}return Is}function __(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Pn(""+t)}function v_(t,n){var s=n.ownerDocument.createElement("input");return s.name=n.name,s.value=n.value,t.id&&s.setAttribute("form",t.id),n.parentNode.insertBefore(s,n),t=new FormData(t),s.parentNode.removeChild(s),t}function JM(t,n,s,l,f){if(n==="submit"&&s&&s.stateNode===f){var p=__((f[Sn]||null).action),M=l.submitter;M&&(n=(n=M[Sn]||null)?__(n.formAction):M.getAttribute("formAction"),n!==null&&(p=n,M=null));var w=new zr("action","action",null,l,f);t.push({event:w,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Is!==0){var k=M?v_(f,M):new FormData(f);cd(s,{pending:!0,data:k,method:f.method,action:p},null,k)}}else typeof p=="function"&&(w.preventDefault(),k=M?v_(f,M):new FormData(f),cd(s,{pending:!0,data:k,method:f.method,action:p},p,k))},currentTarget:f}]})}}for(var Xd=0;Xd<Af.length;Xd++){var Wd=Af[Xd],$M=Wd.toLowerCase(),ey=Wd[0].toUpperCase()+Wd.slice(1);ca($M,"on"+ey)}ca(Zm,"onAnimationEnd"),ca(Km,"onAnimationIteration"),ca(Qm,"onAnimationStart"),ca("dblclick","onDoubleClick"),ca("focusin","onFocus"),ca("focusout","onBlur"),ca(gM,"onTransitionRun"),ca(_M,"onTransitionStart"),ca(vM,"onTransitionCancel"),ca(Jm,"onTransitionEnd"),le("onMouseEnter",["mouseout","mouseover"]),le("onMouseLeave",["mouseout","mouseover"]),le("onPointerEnter",["pointerout","pointerover"]),le("onPointerLeave",["pointerout","pointerover"]),Z("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Z("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Z("onBeforeInput",["compositionend","keypress","textInput","paste"]),Z("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Z("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Z("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Cl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ty=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Cl));function x_(t,n){n=(n&4)!==0;for(var s=0;s<t.length;s++){var l=t[s],f=l.event;l=l.listeners;e:{var p=void 0;if(n)for(var M=l.length-1;0<=M;M--){var w=l[M],k=w.instance,re=w.currentTarget;if(w=w.listener,k!==p&&f.isPropagationStopped())break e;p=w,f.currentTarget=re;try{p(f)}catch(ve){hc(ve)}f.currentTarget=null,p=k}else for(M=0;M<l.length;M++){if(w=l[M],k=w.instance,re=w.currentTarget,w=w.listener,k!==p&&f.isPropagationStopped())break e;p=w,f.currentTarget=re;try{p(f)}catch(ve){hc(ve)}f.currentTarget=null,p=k}}}}function Ct(t,n){var s=n[xa];s===void 0&&(s=n[xa]=new Set);var l=t+"__bubble";s.has(l)||(S_(n,t,2,!1),s.add(l))}function Yd(t,n,s){var l=0;n&&(l|=4),S_(s,t,l,n)}var $c="_reactListening"+Math.random().toString(36).slice(2);function qd(t){if(!t[$c]){t[$c]=!0,_s.forEach(function(s){s!=="selectionchange"&&(ty.has(s)||Yd(s,!1,t),Yd(s,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[$c]||(n[$c]=!0,Yd("selectionchange",!1,n))}}function S_(t,n,s,l){switch(Z_(n)){case 2:var f=wy;break;case 8:f=Dy;break;default:f=lh}s=f.bind(null,n,s,t),f=void 0,!Ir||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(f=!0),l?f!==void 0?t.addEventListener(n,s,{capture:!0,passive:f}):t.addEventListener(n,s,!0):f!==void 0?t.addEventListener(n,s,{passive:f}):t.addEventListener(n,s,!1)}function jd(t,n,s,l,f){var p=l;if((n&1)===0&&(n&2)===0&&l!==null)e:for(;;){if(l===null)return;var M=l.tag;if(M===3||M===4){var w=l.stateNode.containerInfo;if(w===f)break;if(M===4)for(M=l.return;M!==null;){var k=M.tag;if((k===3||k===4)&&M.stateNode.containerInfo===f)return;M=M.return}for(;w!==null;){if(M=En(w),M===null)return;if(k=M.tag,k===5||k===6||k===26||k===27){l=p=M;continue e}w=w.parentNode}}l=l.return}Kn(function(){var re=p,ve=oi(s),be=[];e:{var ce=$m.get(t);if(ce!==void 0){var de=zr,Qe=t;switch(t){case"keypress":if(Br(s)===0)break e;case"keydown":case"keyup":de=Yn;break;case"focusin":Qe="focus",de=lc;break;case"focusout":Qe="blur",de=lc;break;case"beforeblur":case"afterblur":de=lc;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":de=or;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":de=pf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":de=Xa;break;case Zm:case Km:case Qm:de=Jo;break;case Jm:de=$S;break;case"scroll":case"scrollend":de=oc;break;case"wheel":de=tM;break;case"copy":case"cut":case"paste":de=_f;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":de=ka;break;case"toggle":case"beforetoggle":de=iM}var ct=(n&4)!==0,ln=!ct&&(t==="scroll"||t==="scrollend"),Q=ct?ce!==null?ce+"Capture":null:ce;ct=[];for(var W=re,ae;W!==null;){var Me=W;if(ae=Me.stateNode,Me=Me.tag,Me!==5&&Me!==26&&Me!==27||ae===null||Q===null||(Me=Fa(W,Q),Me!=null&&ct.push(wl(W,Me,ae))),ln)break;W=W.return}0<ct.length&&(ce=new de(ce,Qe,null,s,ve),be.push({event:ce,listeners:ct}))}}if((n&7)===0){e:{if(ce=t==="mouseover"||t==="pointerover",de=t==="mouseout"||t==="pointerout",ce&&s!==Si&&(Qe=s.relatedTarget||s.fromElement)&&(En(Qe)||Qe[yn]))break e;if((de||ce)&&(ce=ve.window===ve?ve:(ce=ve.ownerDocument)?ce.defaultView||ce.parentWindow:window,de?(Qe=s.relatedTarget||s.toElement,de=re,Qe=Qe?En(Qe):null,Qe!==null&&(ln=c(Qe),ct=Qe.tag,Qe!==ln||ct!==5&&ct!==27&&ct!==6)&&(Qe=null)):(de=null,Qe=re),de!==Qe)){if(ct=or,Me="onMouseLeave",Q="onMouseEnter",W="mouse",(t==="pointerout"||t==="pointerover")&&(ct=ka,Me="onPointerLeave",Q="onPointerEnter",W="pointer"),ln=de==null?ce:bn(de),ae=Qe==null?ce:bn(Qe),ce=new ct(Me,W+"leave",de,s,ve),ce.target=ln,ce.relatedTarget=ae,Me=null,En(ve)===re&&(ct=new ct(Q,W+"enter",Qe,s,ve),ct.target=ae,ct.relatedTarget=ln,Me=ct),ln=Me,de&&Qe)t:{for(ct=ny,Q=de,W=Qe,ae=0,Me=Q;Me;Me=ct(Me))ae++;Me=0;for(var rt=W;rt;rt=ct(rt))Me++;for(;0<ae-Me;)Q=ct(Q),ae--;for(;0<Me-ae;)W=ct(W),Me--;for(;ae--;){if(Q===W||W!==null&&Q===W.alternate){ct=Q;break t}Q=ct(Q),W=ct(W)}ct=null}else ct=null;de!==null&&M_(be,ce,de,ct,!1),Qe!==null&&ln!==null&&M_(be,ln,Qe,ct,!0)}}e:{if(ce=re?bn(re):window,de=ce.nodeName&&ce.nodeName.toLowerCase(),de==="select"||de==="input"&&ce.type==="file")var Xt=Fm;else if(Im(ce))if(zm)Xt=hM;else{Xt=fM;var tt=uM}else de=ce.nodeName,!de||de.toLowerCase()!=="input"||ce.type!=="checkbox"&&ce.type!=="radio"?re&&vt(re.elementType)&&(Xt=Fm):Xt=dM;if(Xt&&(Xt=Xt(t,re))){Bm(be,Xt,s,ve);break e}tt&&tt(t,ce,re),t==="focusout"&&re&&ce.type==="number"&&re.memoizedProps.value!=null&&ee(ce,"number",ce.value)}switch(tt=re?bn(re):window,t){case"focusin":(Im(tt)||tt.contentEditable==="true")&&(Xr=tt,Ef=re,al=null);break;case"focusout":al=Ef=Xr=null;break;case"mousedown":bf=!0;break;case"contextmenu":case"mouseup":case"dragend":bf=!1,qm(be,s,ve);break;case"selectionchange":if(mM)break;case"keydown":case"keyup":qm(be,s,ve)}var yt;if(xf)e:{switch(t){case"compositionstart":var Dt="onCompositionStart";break e;case"compositionend":Dt="onCompositionEnd";break e;case"compositionupdate":Dt="onCompositionUpdate";break e}Dt=void 0}else kr?Om(t,s)&&(Dt="onCompositionEnd"):t==="keydown"&&s.keyCode===229&&(Dt="onCompositionStart");Dt&&(Lm&&s.locale!=="ko"&&(kr||Dt!=="onCompositionStart"?Dt==="onCompositionEnd"&&kr&&(yt=Ko()):(oa=ve,Ha="value"in oa?oa.value:oa.textContent,kr=!0)),tt=eu(re,Dt),0<tt.length&&(Dt=new $o(Dt,t,null,s,ve),be.push({event:Dt,listeners:tt}),yt?Dt.data=yt:(yt=Pm(s),yt!==null&&(Dt.data=yt)))),(yt=sM?rM(t,s):oM(t,s))&&(Dt=eu(re,"onBeforeInput"),0<Dt.length&&(tt=new $o("onBeforeInput","beforeinput",null,s,ve),be.push({event:tt,listeners:Dt}),tt.data=yt)),JM(be,t,re,s,ve)}x_(be,n)})}function wl(t,n,s){return{instance:t,listener:n,currentTarget:s}}function eu(t,n){for(var s=n+"Capture",l=[];t!==null;){var f=t,p=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||p===null||(f=Fa(t,s),f!=null&&l.unshift(wl(t,f,p)),f=Fa(t,n),f!=null&&l.push(wl(t,f,p))),t.tag===3)return l;t=t.return}return[]}function ny(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function M_(t,n,s,l,f){for(var p=n._reactName,M=[];s!==null&&s!==l;){var w=s,k=w.alternate,re=w.stateNode;if(w=w.tag,k!==null&&k===l)break;w!==5&&w!==26&&w!==27||re===null||(k=re,f?(re=Fa(s,p),re!=null&&M.unshift(wl(s,re,k))):f||(re=Fa(s,p),re!=null&&M.push(wl(s,re,k)))),s=s.return}M.length!==0&&t.push({event:n,listeners:M})}var iy=/\r\n?/g,ay=/\u0000|\uFFFD/g;function y_(t){return(typeof t=="string"?t:""+t).replace(iy,`
`).replace(ay,"")}function E_(t,n){return n=y_(n),y_(t)===n}function on(t,n,s,l,f,p){switch(s){case"children":typeof l=="string"?n==="body"||n==="textarea"&&l===""||dt(t,l):(typeof l=="number"||typeof l=="bigint")&&n!=="body"&&dt(t,""+l);break;case"className":je(t,"class",l);break;case"tabIndex":je(t,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":je(t,s,l);break;case"style":hn(t,l,p);break;case"data":if(n!=="object"){je(t,"data",l);break}case"src":case"href":if(l===""&&(n!=="a"||s!=="href")){t.removeAttribute(s);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(s);break}l=Pn(""+l),t.setAttribute(s,l);break;case"action":case"formAction":if(typeof l=="function"){t.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof p=="function"&&(s==="formAction"?(n!=="input"&&on(t,n,"name",f.name,f,null),on(t,n,"formEncType",f.formEncType,f,null),on(t,n,"formMethod",f.formMethod,f,null),on(t,n,"formTarget",f.formTarget,f,null)):(on(t,n,"encType",f.encType,f,null),on(t,n,"method",f.method,f,null),on(t,n,"target",f.target,f,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(s);break}l=Pn(""+l),t.setAttribute(s,l);break;case"onClick":l!=null&&(t.onclick=en);break;case"onScroll":l!=null&&Ct("scroll",t);break;case"onScrollEnd":l!=null&&Ct("scrollend",t);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(s=l.__html,s!=null){if(f.children!=null)throw Error(r(60));t.innerHTML=s}}break;case"multiple":t.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":t.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){t.removeAttribute("xlink:href");break}s=Pn(""+l),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,""+l):t.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,""):t.removeAttribute(s);break;case"capture":case"download":l===!0?t.setAttribute(s,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,l):t.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?t.setAttribute(s,l):t.removeAttribute(s);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?t.removeAttribute(s):t.setAttribute(s,l);break;case"popover":Ct("beforetoggle",t),Ct("toggle",t),Fe(t,"popover",l);break;case"xlinkActuate":Ze(t,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Ze(t,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Ze(t,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Ze(t,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Ze(t,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Ze(t,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Ze(t,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Ze(t,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Ze(t,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Fe(t,"is",l);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=kt.get(s)||s,Fe(t,s,l))}}function Zd(t,n,s,l,f,p){switch(s){case"style":hn(t,l,p);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(s=l.__html,s!=null){if(f.children!=null)throw Error(r(60));t.innerHTML=s}}break;case"children":typeof l=="string"?dt(t,l):(typeof l=="number"||typeof l=="bigint")&&dt(t,""+l);break;case"onScroll":l!=null&&Ct("scroll",t);break;case"onScrollEnd":l!=null&&Ct("scrollend",t);break;case"onClick":l!=null&&(t.onclick=en);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!R.hasOwnProperty(s))e:{if(s[0]==="o"&&s[1]==="n"&&(f=s.endsWith("Capture"),n=s.slice(2,f?s.length-7:void 0),p=t[Sn]||null,p=p!=null?p[s]:null,typeof p=="function"&&t.removeEventListener(n,p,f),typeof l=="function")){typeof p!="function"&&p!==null&&(s in t?t[s]=null:t.hasAttribute(s)&&t.removeAttribute(s)),t.addEventListener(n,l,f);break e}s in t?t[s]=l:l===!0?t.setAttribute(s,""):Fe(t,s,l)}}}function ai(t,n,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ct("error",t),Ct("load",t);var l=!1,f=!1,p;for(p in s)if(s.hasOwnProperty(p)){var M=s[p];if(M!=null)switch(p){case"src":l=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:on(t,n,p,M,s,null)}}f&&on(t,n,"srcSet",s.srcSet,s,null),l&&on(t,n,"src",s.src,s,null);return;case"input":Ct("invalid",t);var w=p=M=f=null,k=null,re=null;for(l in s)if(s.hasOwnProperty(l)){var ve=s[l];if(ve!=null)switch(l){case"name":f=ve;break;case"type":M=ve;break;case"checked":k=ve;break;case"defaultChecked":re=ve;break;case"value":p=ve;break;case"defaultValue":w=ve;break;case"children":case"dangerouslySetInnerHTML":if(ve!=null)throw Error(r(137,n));break;default:on(t,n,l,ve,s,null)}}Xn(t,p,w,k,re,M,f,!1);return;case"select":Ct("invalid",t),l=M=p=null;for(f in s)if(s.hasOwnProperty(f)&&(w=s[f],w!=null))switch(f){case"value":p=w;break;case"defaultValue":M=w;break;case"multiple":l=w;default:on(t,n,f,w,s,null)}n=p,s=M,t.multiple=!!l,n!=null?Te(t,!!l,n,!1):s!=null&&Te(t,!!l,s,!0);return;case"textarea":Ct("invalid",t),p=f=l=null;for(M in s)if(s.hasOwnProperty(M)&&(w=s[M],w!=null))switch(M){case"value":l=w;break;case"defaultValue":f=w;break;case"children":p=w;break;case"dangerouslySetInnerHTML":if(w!=null)throw Error(r(91));break;default:on(t,n,M,w,s,null)}$e(t,l,f,p);return;case"option":for(k in s)if(s.hasOwnProperty(k)&&(l=s[k],l!=null))switch(k){case"selected":t.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:on(t,n,k,l,s,null)}return;case"dialog":Ct("beforetoggle",t),Ct("toggle",t),Ct("cancel",t),Ct("close",t);break;case"iframe":case"object":Ct("load",t);break;case"video":case"audio":for(l=0;l<Cl.length;l++)Ct(Cl[l],t);break;case"image":Ct("error",t),Ct("load",t);break;case"details":Ct("toggle",t);break;case"embed":case"source":case"link":Ct("error",t),Ct("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(re in s)if(s.hasOwnProperty(re)&&(l=s[re],l!=null))switch(re){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:on(t,n,re,l,s,null)}return;default:if(vt(n)){for(ve in s)s.hasOwnProperty(ve)&&(l=s[ve],l!==void 0&&Zd(t,n,ve,l,s,void 0));return}}for(w in s)s.hasOwnProperty(w)&&(l=s[w],l!=null&&on(t,n,w,l,s,null))}function sy(t,n,s,l){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,p=null,M=null,w=null,k=null,re=null,ve=null;for(de in s){var be=s[de];if(s.hasOwnProperty(de)&&be!=null)switch(de){case"checked":break;case"value":break;case"defaultValue":k=be;default:l.hasOwnProperty(de)||on(t,n,de,null,l,be)}}for(var ce in l){var de=l[ce];if(be=s[ce],l.hasOwnProperty(ce)&&(de!=null||be!=null))switch(ce){case"type":p=de;break;case"name":f=de;break;case"checked":re=de;break;case"defaultChecked":ve=de;break;case"value":M=de;break;case"defaultValue":w=de;break;case"children":case"dangerouslySetInnerHTML":if(de!=null)throw Error(r(137,n));break;default:de!==be&&on(t,n,ce,de,l,be)}}Xe(t,M,w,k,re,ve,p,f);return;case"select":de=M=w=ce=null;for(p in s)if(k=s[p],s.hasOwnProperty(p)&&k!=null)switch(p){case"value":break;case"multiple":de=k;default:l.hasOwnProperty(p)||on(t,n,p,null,l,k)}for(f in l)if(p=l[f],k=s[f],l.hasOwnProperty(f)&&(p!=null||k!=null))switch(f){case"value":ce=p;break;case"defaultValue":w=p;break;case"multiple":M=p;default:p!==k&&on(t,n,f,p,l,k)}n=w,s=M,l=de,ce!=null?Te(t,!!s,ce,!1):!!l!=!!s&&(n!=null?Te(t,!!s,n,!0):Te(t,!!s,s?[]:"",!1));return;case"textarea":de=ce=null;for(w in s)if(f=s[w],s.hasOwnProperty(w)&&f!=null&&!l.hasOwnProperty(w))switch(w){case"value":break;case"children":break;default:on(t,n,w,null,l,f)}for(M in l)if(f=l[M],p=s[M],l.hasOwnProperty(M)&&(f!=null||p!=null))switch(M){case"value":ce=f;break;case"defaultValue":de=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(r(91));break;default:f!==p&&on(t,n,M,f,l,p)}ke(t,ce,de);return;case"option":for(var Qe in s)if(ce=s[Qe],s.hasOwnProperty(Qe)&&ce!=null&&!l.hasOwnProperty(Qe))switch(Qe){case"selected":t.selected=!1;break;default:on(t,n,Qe,null,l,ce)}for(k in l)if(ce=l[k],de=s[k],l.hasOwnProperty(k)&&ce!==de&&(ce!=null||de!=null))switch(k){case"selected":t.selected=ce&&typeof ce!="function"&&typeof ce!="symbol";break;default:on(t,n,k,ce,l,de)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ct in s)ce=s[ct],s.hasOwnProperty(ct)&&ce!=null&&!l.hasOwnProperty(ct)&&on(t,n,ct,null,l,ce);for(re in l)if(ce=l[re],de=s[re],l.hasOwnProperty(re)&&ce!==de&&(ce!=null||de!=null))switch(re){case"children":case"dangerouslySetInnerHTML":if(ce!=null)throw Error(r(137,n));break;default:on(t,n,re,ce,l,de)}return;default:if(vt(n)){for(var ln in s)ce=s[ln],s.hasOwnProperty(ln)&&ce!==void 0&&!l.hasOwnProperty(ln)&&Zd(t,n,ln,void 0,l,ce);for(ve in l)ce=l[ve],de=s[ve],!l.hasOwnProperty(ve)||ce===de||ce===void 0&&de===void 0||Zd(t,n,ve,ce,l,de);return}}for(var Q in s)ce=s[Q],s.hasOwnProperty(Q)&&ce!=null&&!l.hasOwnProperty(Q)&&on(t,n,Q,null,l,ce);for(be in l)ce=l[be],de=s[be],!l.hasOwnProperty(be)||ce===de||ce==null&&de==null||on(t,n,be,ce,l,de)}function b_(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function ry(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,s=performance.getEntriesByType("resource"),l=0;l<s.length;l++){var f=s[l],p=f.transferSize,M=f.initiatorType,w=f.duration;if(p&&w&&b_(M)){for(M=0,w=f.responseEnd,l+=1;l<s.length;l++){var k=s[l],re=k.startTime;if(re>w)break;var ve=k.transferSize,be=k.initiatorType;ve&&b_(be)&&(k=k.responseEnd,M+=ve*(k<w?1:(w-re)/(k-re)))}if(--l,n+=8*(p+M)/(f.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Kd=null,Qd=null;function tu(t){return t.nodeType===9?t:t.ownerDocument}function T_(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function A_(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Jd(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var $d=null;function oy(){var t=window.event;return t&&t.type==="popstate"?t===$d?!1:($d=t,!0):($d=null,!1)}var R_=typeof setTimeout=="function"?setTimeout:void 0,ly=typeof clearTimeout=="function"?clearTimeout:void 0,C_=typeof Promise=="function"?Promise:void 0,cy=typeof queueMicrotask=="function"?queueMicrotask:typeof C_<"u"?function(t){return C_.resolve(null).then(t).catch(uy)}:R_;function uy(t){setTimeout(function(){throw t})}function Bs(t){return t==="head"}function w_(t,n){var s=n,l=0;do{var f=s.nextSibling;if(t.removeChild(s),f&&f.nodeType===8)if(s=f.data,s==="/$"||s==="/&"){if(l===0){t.removeChild(f),vo(n);return}l--}else if(s==="$"||s==="$?"||s==="$~"||s==="$!"||s==="&")l++;else if(s==="html")Dl(t.ownerDocument.documentElement);else if(s==="head"){s=t.ownerDocument.head,Dl(s);for(var p=s.firstChild;p;){var M=p.nextSibling,w=p.nodeName;p[ra]||w==="SCRIPT"||w==="STYLE"||w==="LINK"&&p.rel.toLowerCase()==="stylesheet"||s.removeChild(p),p=M}}else s==="body"&&Dl(t.ownerDocument.body);s=f}while(s);vo(n)}function D_(t,n){var s=t;t=0;do{var l=s.nextSibling;if(s.nodeType===1?n?(s._stashedDisplay=s.style.display,s.style.display="none"):(s.style.display=s._stashedDisplay||"",s.getAttribute("style")===""&&s.removeAttribute("style")):s.nodeType===3&&(n?(s._stashedText=s.nodeValue,s.nodeValue=""):s.nodeValue=s._stashedText||""),l&&l.nodeType===8)if(s=l.data,s==="/$"){if(t===0)break;t--}else s!=="$"&&s!=="$?"&&s!=="$~"&&s!=="$!"||t++;s=l}while(s)}function eh(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var s=n;switch(n=n.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":eh(s),Vi(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}t.removeChild(s)}}function fy(t,n,s,l){for(;t.nodeType===1;){var f=s;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!l&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(l){if(!t[ra])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(p=t.getAttribute("rel"),p==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(p!==f.rel||t.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||t.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||t.getAttribute("title")!==(f.title==null?null:f.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(p=t.getAttribute("src"),(p!==(f.src==null?null:f.src)||t.getAttribute("type")!==(f.type==null?null:f.type)||t.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&p&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var p=f.name==null?null:""+f.name;if(f.type==="hidden"&&t.getAttribute("name")===p)return t}else return t;if(t=Ji(t.nextSibling),t===null)break}return null}function dy(t,n,s){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!s||(t=Ji(t.nextSibling),t===null))return null;return t}function L_(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=Ji(t.nextSibling),t===null))return null;return t}function th(t){return t.data==="$?"||t.data==="$~"}function nh(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function hy(t,n){var s=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||s.readyState!=="loading")n();else{var l=function(){n(),s.removeEventListener("DOMContentLoaded",l)};s.addEventListener("DOMContentLoaded",l),t._reactRetry=l}}function Ji(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var ih=null;function N_(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var s=t.data;if(s==="/$"||s==="/&"){if(n===0)return Ji(t.nextSibling);n--}else s!=="$"&&s!=="$!"&&s!=="$?"&&s!=="$~"&&s!=="&"||n++}t=t.nextSibling}return null}function U_(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var s=t.data;if(s==="$"||s==="$!"||s==="$?"||s==="$~"||s==="&"){if(n===0)return t;n--}else s!=="/$"&&s!=="/&"||n++}t=t.previousSibling}return null}function O_(t,n,s){switch(n=tu(s),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function Dl(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Vi(t)}var $i=new Map,P_=new Set;function nu(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var ss=G.d;G.d={f:py,r:my,D:gy,C:_y,L:vy,m:xy,X:My,S:Sy,M:yy};function py(){var t=ss.f(),n=qc();return t||n}function my(t){var n=kn(t);n!==null&&n.tag===5&&n.type==="form"?J0(n):ss.r(t)}var mo=typeof document>"u"?null:document;function I_(t,n,s){var l=mo;if(l&&typeof n=="string"&&n){var f=Vt(n);f='link[rel="'+t+'"][href="'+f+'"]',typeof s=="string"&&(f+='[crossorigin="'+s+'"]'),P_.has(f)||(P_.add(f),t={rel:t,crossOrigin:s,href:n},l.querySelector(f)===null&&(n=l.createElement("link"),ai(n,"link",t),Tn(n),l.head.appendChild(n)))}}function gy(t){ss.D(t),I_("dns-prefetch",t,null)}function _y(t,n){ss.C(t,n),I_("preconnect",t,n)}function vy(t,n,s){ss.L(t,n,s);var l=mo;if(l&&t&&n){var f='link[rel="preload"][as="'+Vt(n)+'"]';n==="image"&&s&&s.imageSrcSet?(f+='[imagesrcset="'+Vt(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(f+='[imagesizes="'+Vt(s.imageSizes)+'"]')):f+='[href="'+Vt(t)+'"]';var p=f;switch(n){case"style":p=go(t);break;case"script":p=_o(t)}$i.has(p)||(t=_({rel:"preload",href:n==="image"&&s&&s.imageSrcSet?void 0:t,as:n},s),$i.set(p,t),l.querySelector(f)!==null||n==="style"&&l.querySelector(Ll(p))||n==="script"&&l.querySelector(Nl(p))||(n=l.createElement("link"),ai(n,"link",t),Tn(n),l.head.appendChild(n)))}}function xy(t,n){ss.m(t,n);var s=mo;if(s&&t){var l=n&&typeof n.as=="string"?n.as:"script",f='link[rel="modulepreload"][as="'+Vt(l)+'"][href="'+Vt(t)+'"]',p=f;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":p=_o(t)}if(!$i.has(p)&&(t=_({rel:"modulepreload",href:t},n),$i.set(p,t),s.querySelector(f)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(Nl(p)))return}l=s.createElement("link"),ai(l,"link",t),Tn(l),s.head.appendChild(l)}}}function Sy(t,n,s){ss.S(t,n,s);var l=mo;if(l&&t){var f=Ma(l).hoistableStyles,p=go(t);n=n||"default";var M=f.get(p);if(!M){var w={loading:0,preload:null};if(M=l.querySelector(Ll(p)))w.loading=5;else{t=_({rel:"stylesheet",href:t,"data-precedence":n},s),(s=$i.get(p))&&ah(t,s);var k=M=l.createElement("link");Tn(k),ai(k,"link",t),k._p=new Promise(function(re,ve){k.onload=re,k.onerror=ve}),k.addEventListener("load",function(){w.loading|=1}),k.addEventListener("error",function(){w.loading|=2}),w.loading|=4,iu(M,n,l)}M={type:"stylesheet",instance:M,count:1,state:w},f.set(p,M)}}}function My(t,n){ss.X(t,n);var s=mo;if(s&&t){var l=Ma(s).hoistableScripts,f=_o(t),p=l.get(f);p||(p=s.querySelector(Nl(f)),p||(t=_({src:t,async:!0},n),(n=$i.get(f))&&sh(t,n),p=s.createElement("script"),Tn(p),ai(p,"link",t),s.head.appendChild(p)),p={type:"script",instance:p,count:1,state:null},l.set(f,p))}}function yy(t,n){ss.M(t,n);var s=mo;if(s&&t){var l=Ma(s).hoistableScripts,f=_o(t),p=l.get(f);p||(p=s.querySelector(Nl(f)),p||(t=_({src:t,async:!0,type:"module"},n),(n=$i.get(f))&&sh(t,n),p=s.createElement("script"),Tn(p),ai(p,"link",t),s.head.appendChild(p)),p={type:"script",instance:p,count:1,state:null},l.set(f,p))}}function B_(t,n,s,l){var f=(f=se.current)?nu(f):null;if(!f)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(n=go(s.href),s=Ma(f).hoistableStyles,l=s.get(n),l||(l={type:"style",instance:null,count:0,state:null},s.set(n,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){t=go(s.href);var p=Ma(f).hoistableStyles,M=p.get(t);if(M||(f=f.ownerDocument||f,M={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},p.set(t,M),(p=f.querySelector(Ll(t)))&&!p._p&&(M.instance=p,M.state.loading=5),$i.has(t)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},$i.set(t,s),p||Ey(f,t,s,M.state))),n&&l===null)throw Error(r(528,""));return M}if(n&&l!==null)throw Error(r(529,""));return null;case"script":return n=s.async,s=s.src,typeof s=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=_o(s),s=Ma(f).hoistableScripts,l=s.get(n),l||(l={type:"script",instance:null,count:0,state:null},s.set(n,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function go(t){return'href="'+Vt(t)+'"'}function Ll(t){return'link[rel="stylesheet"]['+t+"]"}function F_(t){return _({},t,{"data-precedence":t.precedence,precedence:null})}function Ey(t,n,s,l){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?l.loading=1:(n=t.createElement("link"),l.preload=n,n.addEventListener("load",function(){return l.loading|=1}),n.addEventListener("error",function(){return l.loading|=2}),ai(n,"link",s),Tn(n),t.head.appendChild(n))}function _o(t){return'[src="'+Vt(t)+'"]'}function Nl(t){return"script[async]"+t}function z_(t,n,s){if(n.count++,n.instance===null)switch(n.type){case"style":var l=t.querySelector('style[data-href~="'+Vt(s.href)+'"]');if(l)return n.instance=l,Tn(l),l;var f=_({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return l=(t.ownerDocument||t).createElement("style"),Tn(l),ai(l,"style",f),iu(l,s.precedence,t),n.instance=l;case"stylesheet":f=go(s.href);var p=t.querySelector(Ll(f));if(p)return n.state.loading|=4,n.instance=p,Tn(p),p;l=F_(s),(f=$i.get(f))&&ah(l,f),p=(t.ownerDocument||t).createElement("link"),Tn(p);var M=p;return M._p=new Promise(function(w,k){M.onload=w,M.onerror=k}),ai(p,"link",l),n.state.loading|=4,iu(p,s.precedence,t),n.instance=p;case"script":return p=_o(s.src),(f=t.querySelector(Nl(p)))?(n.instance=f,Tn(f),f):(l=s,(f=$i.get(p))&&(l=_({},s),sh(l,f)),t=t.ownerDocument||t,f=t.createElement("script"),Tn(f),ai(f,"link",l),t.head.appendChild(f),n.instance=f);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(l=n.instance,n.state.loading|=4,iu(l,s.precedence,t));return n.instance}function iu(t,n,s){for(var l=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=l.length?l[l.length-1]:null,p=f,M=0;M<l.length;M++){var w=l[M];if(w.dataset.precedence===n)p=w;else if(p!==f)break}p?p.parentNode.insertBefore(t,p.nextSibling):(n=s.nodeType===9?s.head:s,n.insertBefore(t,n.firstChild))}function ah(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function sh(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var au=null;function H_(t,n,s){if(au===null){var l=new Map,f=au=new Map;f.set(s,l)}else f=au,l=f.get(s),l||(l=new Map,f.set(s,l));if(l.has(t))return l;for(l.set(t,null),s=s.getElementsByTagName(t),f=0;f<s.length;f++){var p=s[f];if(!(p[ra]||p[dn]||t==="link"&&p.getAttribute("rel")==="stylesheet")&&p.namespaceURI!=="http://www.w3.org/2000/svg"){var M=p.getAttribute(n)||"";M=t+M;var w=l.get(M);w?w.push(p):l.set(M,[p])}}return l}function G_(t,n,s){t=t.ownerDocument||t,t.head.insertBefore(s,n==="title"?t.querySelector("head > title"):null)}function by(t,n,s){if(s===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function V_(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function Ty(t,n,s,l){if(s.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(s.state.loading&4)===0){if(s.instance===null){var f=go(l.href),p=n.querySelector(Ll(f));if(p){n=p._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=su.bind(t),n.then(t,t)),s.state.loading|=4,s.instance=p,Tn(p);return}p=n.ownerDocument||n,l=F_(l),(f=$i.get(f))&&ah(l,f),p=p.createElement("link"),Tn(p);var M=p;M._p=new Promise(function(w,k){M.onload=w,M.onerror=k}),ai(p,"link",l),s.instance=p}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(s,n),(n=s.state.preload)&&(s.state.loading&3)===0&&(t.count++,s=su.bind(t),n.addEventListener("load",s),n.addEventListener("error",s))}}var rh=0;function Ay(t,n){return t.stylesheets&&t.count===0&&ou(t,t.stylesheets),0<t.count||0<t.imgCount?function(s){var l=setTimeout(function(){if(t.stylesheets&&ou(t,t.stylesheets),t.unsuspend){var p=t.unsuspend;t.unsuspend=null,p()}},6e4+n);0<t.imgBytes&&rh===0&&(rh=62500*ry());var f=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&ou(t,t.stylesheets),t.unsuspend)){var p=t.unsuspend;t.unsuspend=null,p()}},(t.imgBytes>rh?50:800)+n);return t.unsuspend=s,function(){t.unsuspend=null,clearTimeout(l),clearTimeout(f)}}:null}function su(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)ou(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var ru=null;function ou(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,ru=new Map,n.forEach(Ry,t),ru=null,su.call(t))}function Ry(t,n){if(!(n.state.loading&4)){var s=ru.get(t);if(s)var l=s.get(null);else{s=new Map,ru.set(t,s);for(var f=t.querySelectorAll("link[data-precedence],style[data-precedence]"),p=0;p<f.length;p++){var M=f[p];(M.nodeName==="LINK"||M.getAttribute("media")!=="not all")&&(s.set(M.dataset.precedence,M),l=M)}l&&s.set(null,l)}f=n.instance,M=f.getAttribute("data-precedence"),p=s.get(M)||l,p===l&&s.set(null,f),s.set(M,f),this.count++,l=su.bind(this),f.addEventListener("load",l),f.addEventListener("error",l),p?p.parentNode.insertBefore(f,p.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(f,t.firstChild)),n.state.loading|=4}}var Ul={$$typeof:O,Provider:null,Consumer:null,_currentValue:J,_currentValue2:J,_threadCount:0};function Cy(t,n,s,l,f,p,M,w,k){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ke(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ke(0),this.hiddenUpdates=Ke(null),this.identifierPrefix=l,this.onUncaughtError=f,this.onCaughtError=p,this.onRecoverableError=M,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=k,this.incompleteTransitions=new Map}function k_(t,n,s,l,f,p,M,w,k,re,ve,be){return t=new Cy(t,n,s,M,k,re,ve,be,w),n=1,p===!0&&(n|=24),p=Li(3,null,null,n),t.current=p,p.stateNode=t,n=zf(),n.refCount++,t.pooledCache=n,n.refCount++,p.memoizedState={element:l,isDehydrated:s,cache:n},kf(p),t}function X_(t){return t?(t=qr,t):qr}function W_(t,n,s,l,f,p){f=X_(f),l.context===null?l.context=f:l.pendingContext=f,l=As(n),l.payload={element:s},p=p===void 0?null:p,p!==null&&(l.callback=p),s=Rs(t,l,n),s!==null&&(Ai(s,t,n),fl(s,t,n))}function Y_(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var s=t.retryLane;t.retryLane=s!==0&&s<n?s:n}}function oh(t,n){Y_(t,n),(t=t.alternate)&&Y_(t,n)}function q_(t){if(t.tag===13||t.tag===31){var n=fr(t,67108864);n!==null&&Ai(n,t,67108864),oh(t,67108864)}}function j_(t){if(t.tag===13||t.tag===31){var n=Ii();n=hi(n);var s=fr(t,n);s!==null&&Ai(s,t,n),oh(t,n)}}var lu=!0;function wy(t,n,s,l){var f=z.T;z.T=null;var p=G.p;try{G.p=2,lh(t,n,s,l)}finally{G.p=p,z.T=f}}function Dy(t,n,s,l){var f=z.T;z.T=null;var p=G.p;try{G.p=8,lh(t,n,s,l)}finally{G.p=p,z.T=f}}function lh(t,n,s,l){if(lu){var f=ch(l);if(f===null)jd(t,n,l,cu,s),K_(t,l);else if(Ny(f,t,n,s,l))l.stopPropagation();else if(K_(t,l),n&4&&-1<Ly.indexOf(t)){for(;f!==null;){var p=kn(f);if(p!==null)switch(p.tag){case 3:if(p=p.stateNode,p.current.memoizedState.isDehydrated){var M=De(p.pendingLanes);if(M!==0){var w=p;for(w.pendingLanes|=2,w.entangledLanes|=2;M;){var k=1<<31-Ge(M);w.entanglements[1]|=k,M&=~k}Ta(p),(jt&6)===0&&(Wc=qt()+500,Rl(0))}}break;case 31:case 13:w=fr(p,2),w!==null&&Ai(w,p,2),qc(),oh(p,2)}if(p=ch(l),p===null&&jd(t,n,l,cu,s),p===f)break;f=p}f!==null&&l.stopPropagation()}else jd(t,n,l,null,s)}}function ch(t){return t=oi(t),uh(t)}var cu=null;function uh(t){if(cu=null,t=En(t),t!==null){var n=c(t);if(n===null)t=null;else{var s=n.tag;if(s===13){if(t=u(n),t!==null)return t;t=null}else if(s===31){if(t=d(n),t!==null)return t;t=null}else if(s===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return cu=t,null}function Z_(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Tt()){case F:return 2;case T:return 8;case $:case oe:return 32;case me:return 268435456;default:return 32}default:return 32}}var fh=!1,Fs=null,zs=null,Hs=null,Ol=new Map,Pl=new Map,Gs=[],Ly="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function K_(t,n){switch(t){case"focusin":case"focusout":Fs=null;break;case"dragenter":case"dragleave":zs=null;break;case"mouseover":case"mouseout":Hs=null;break;case"pointerover":case"pointerout":Ol.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Pl.delete(n.pointerId)}}function Il(t,n,s,l,f,p){return t===null||t.nativeEvent!==p?(t={blockedOn:n,domEventName:s,eventSystemFlags:l,nativeEvent:p,targetContainers:[f]},n!==null&&(n=kn(n),n!==null&&q_(n)),t):(t.eventSystemFlags|=l,n=t.targetContainers,f!==null&&n.indexOf(f)===-1&&n.push(f),t)}function Ny(t,n,s,l,f){switch(n){case"focusin":return Fs=Il(Fs,t,n,s,l,f),!0;case"dragenter":return zs=Il(zs,t,n,s,l,f),!0;case"mouseover":return Hs=Il(Hs,t,n,s,l,f),!0;case"pointerover":var p=f.pointerId;return Ol.set(p,Il(Ol.get(p)||null,t,n,s,l,f)),!0;case"gotpointercapture":return p=f.pointerId,Pl.set(p,Il(Pl.get(p)||null,t,n,s,l,f)),!0}return!1}function Q_(t){var n=En(t.target);if(n!==null){var s=c(n);if(s!==null){if(n=s.tag,n===13){if(n=u(s),n!==null){t.blockedOn=n,pi(t.priority,function(){j_(s)});return}}else if(n===31){if(n=d(s),n!==null){t.blockedOn=n,pi(t.priority,function(){j_(s)});return}}else if(n===3&&s.stateNode.current.memoizedState.isDehydrated){t.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}t.blockedOn=null}function uu(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var s=ch(t.nativeEvent);if(s===null){s=t.nativeEvent;var l=new s.constructor(s.type,s);Si=l,s.target.dispatchEvent(l),Si=null}else return n=kn(s),n!==null&&q_(n),t.blockedOn=s,!1;n.shift()}return!0}function J_(t,n,s){uu(t)&&s.delete(n)}function Uy(){fh=!1,Fs!==null&&uu(Fs)&&(Fs=null),zs!==null&&uu(zs)&&(zs=null),Hs!==null&&uu(Hs)&&(Hs=null),Ol.forEach(J_),Pl.forEach(J_)}function fu(t,n){t.blockedOn===n&&(t.blockedOn=null,fh||(fh=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,Uy)))}var du=null;function $_(t){du!==t&&(du=t,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){du===t&&(du=null);for(var n=0;n<t.length;n+=3){var s=t[n],l=t[n+1],f=t[n+2];if(typeof l!="function"){if(uh(l||s)===null)continue;break}var p=kn(s);p!==null&&(t.splice(n,3),n-=3,cd(p,{pending:!0,data:f,method:s.method,action:l},l,f))}}))}function vo(t){function n(k){return fu(k,t)}Fs!==null&&fu(Fs,t),zs!==null&&fu(zs,t),Hs!==null&&fu(Hs,t),Ol.forEach(n),Pl.forEach(n);for(var s=0;s<Gs.length;s++){var l=Gs[s];l.blockedOn===t&&(l.blockedOn=null)}for(;0<Gs.length&&(s=Gs[0],s.blockedOn===null);)Q_(s),s.blockedOn===null&&Gs.shift();if(s=(t.ownerDocument||t).$$reactFormReplay,s!=null)for(l=0;l<s.length;l+=3){var f=s[l],p=s[l+1],M=f[Sn]||null;if(typeof p=="function")M||$_(s);else if(M){var w=null;if(p&&p.hasAttribute("formAction")){if(f=p,M=p[Sn]||null)w=M.formAction;else if(uh(f)!==null)continue}else w=M.action;typeof w=="function"?s[l+1]=w:(s.splice(l,3),l-=3),$_(s)}}}function ev(){function t(p){p.canIntercept&&p.info==="react-transition"&&p.intercept({handler:function(){return new Promise(function(M){return f=M})},focusReset:"manual",scroll:"manual"})}function n(){f!==null&&(f(),f=null),l||setTimeout(s,20)}function s(){if(!l&&!navigation.transition){var p=navigation.currentEntry;p&&p.url!=null&&navigation.navigate(p.url,{state:p.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,f=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(s,100),function(){l=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),f!==null&&(f(),f=null)}}}function dh(t){this._internalRoot=t}hu.prototype.render=dh.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var s=n.current,l=Ii();W_(s,l,t,n,null,null)},hu.prototype.unmount=dh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;W_(t.current,2,null,t,null,null),qc(),n[yn]=null}};function hu(t){this._internalRoot=t}hu.prototype.unstable_scheduleHydration=function(t){if(t){var n=$n();t={blockedOn:null,target:t,priority:n};for(var s=0;s<Gs.length&&n!==0&&n<Gs[s].priority;s++);Gs.splice(s,0,t),s===0&&Q_(t)}};var tv=e.version;if(tv!=="19.2.7")throw Error(r(527,tv,"19.2.7"));G.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=h(n),t=t!==null?g(t):null,t=t===null?null:t.stateNode,t};var Oy={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var pu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!pu.isDisabled&&pu.supportsFiber)try{pe=pu.inject(Oy),ge=pu}catch{}}return Fl.createRoot=function(t,n){if(!o(t))throw Error(r(299));var s=!1,l="",f=lg,p=cg,M=ug;return n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onUncaughtError!==void 0&&(f=n.onUncaughtError),n.onCaughtError!==void 0&&(p=n.onCaughtError),n.onRecoverableError!==void 0&&(M=n.onRecoverableError)),n=k_(t,1,!1,null,null,s,l,null,f,p,M,ev),t[yn]=n.current,qd(t),new dh(n)},Fl.hydrateRoot=function(t,n,s){if(!o(t))throw Error(r(299));var l=!1,f="",p=lg,M=cg,w=ug,k=null;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(f=s.identifierPrefix),s.onUncaughtError!==void 0&&(p=s.onUncaughtError),s.onCaughtError!==void 0&&(M=s.onCaughtError),s.onRecoverableError!==void 0&&(w=s.onRecoverableError),s.formState!==void 0&&(k=s.formState)),n=k_(t,1,!0,n,s??null,l,f,k,p,M,w,ev),n.context=X_(null),s=n.current,l=Ii(),l=hi(l),f=As(l),f.callback=null,Rs(s,f,l),s=l,n.current.lanes=s,qe(n,s),Ta(n),t[yn]=n.current,qd(t),new hu(n)},Fl.version="19.2.7",Fl}var fv;function ky(){if(fv)return mh.exports;fv=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(e){console.error(e)}}return a(),mh.exports=Vy(),mh.exports}var Xy=ky();const Wy={BASE_URL:"/",DEV:!1,MODE:"production",PROD:!0,SSR:!1,VITE_APP_URL:"https://demo.morpheum.io",VITE_DISCORD_URL:"",VITE_DOCS_URL:"",VITE_MANIFESTO_URL:"",VITE_TUTORIAL_VIDEO_URL:"",VITE_X_URL:""},xo=(a,e="#")=>{var i;return((i=Wy[a])==null?void 0:i.trim())||e},Vn={app:xo("VITE_APP_URL","https://demo.morpheum.io"),docs:xo("VITE_DOCS_URL"),manifesto:xo("VITE_MANIFESTO_URL"),discord:xo("VITE_DISCORD_URL"),x:xo("VITE_X_URL"),tutorialVideo:xo("VITE_TUTORIAL_VIDEO_URL",""),explore:"#explore",exploreAgents:"#explore-agents",exploreVaults:"#explore-vaults"},Hu=[{id:"demo",label:"Demo",href:"#demo"},{id:"personas",label:"Personas",href:"#personas"},{id:"how",label:"How it works",href:"#how"},{id:"explore",label:"Explore",href:"#explore"}],xh={text:"> The agent-native L1 DEX, for faster and safer trades.",href:Vn.manifesto},ks={eyebrow:{label:"A manifesto for verifiable agents",href:Vn.manifesto},headline:["Agents you can trust.","Assets you can trade."],primaryCta:{label:"Launch Morpheum",href:Vn.app},secondaryCta:{label:"Explore agents",href:Vn.explore}},dv={risks:[{risk:"Speculation without underwriting",failure:"Buy random agent tokens on narrative alone.",solveLabel:"Proof",solve:"Underwrite on receipts, reputation, and risk scores — before you commit a dollar."},{risk:"Automation without capital controls",failure:"Run an agent with unbounded capital and no kill switch.",solveLabel:"Controls",solve:"Set Risk Level, approve gated moves, and isolate each strategy in its own bucket."}],close:"The Agent-native L1 DEX — faster, safer trades."},hv=[{label:"MAEX indices",status:"LIVE",live:!0},{label:"Agents",status:"REPUTATION / SHARPE / ROI"},{label:"Risk level",status:"MANUAL / HITL / HANDS-OFF"},{label:"Agent notifications",status:"WANT-TO / ACTION / PAUSED / REJECTED"},{label:"Copy buckets",status:"LIVE",live:!0},{label:"Buckets",status:"RISK-ISOLATED"},{label:"Vaults",status:"ONCHAIN"},{label:"Staking",status:"LIVE",live:!0}],up={kicker:"Product tour",videoCaption:"See an agent discovered, copied, supervised, and isolated in ~60s.",verbs:[{verb:"Discover",description:"Agents & indices — proof first."},{verb:"Copy",description:"Mirror a proven agent into your bucket."},{verb:"Supervise",description:"Approve gated moves on HITL."},{verb:"Isolate",description:"Risk contained in its own bucket."}]},Sh={kicker:"Choose your path",title:"Become part of the agent economy",items:[{title:"Become an Operator",weight:"major",steps:["Mint an agent and set its mandate.","Choose a Risk Level: Manual · HITL · Hands-off.","Build a proven track record investors can underwrite."],cta:{label:"Run an agent",href:Vn.exploreAgents},meta:{kind:"identity",name:"SharpeShark",tx:"0xa4c2…8f1d",hash:"did:morph:0x7a3f…c91e",chain:"Morpheum · hop 0",verified:"yes",rep:"72",portable:"yes",next:"minting mandate…"}},{title:"Become a Copy Trader",weight:"major",steps:["Screen agents on real proof — receipts and risk scores.","Mirror the best into your own dedicated bucket.","Track PnL and rebalance anytime."],cta:{label:"Start copying",href:Vn.exploreAgents},meta:{kind:"chain",label:"on-chain transactions",chain:"Morpheum · hop 0",steps:[{op:"mint agent",tx:"0xa4c2…8f1d",status:"settled"},{op:"mint bucket",tx:"0xb91e…4c02",status:"settled"},{op:"fund transfer",tx:"0xe81a…3b70",status:"settled",from:"SortinoSloth",to:"your bucket",asset:"USDC",amt:"2500"}]}},{title:"Provide Capital",weight:"light",steps:["Deposit into a vault or bucket.","Stake to earn.","Withdraw on your terms."],cta:{label:"Explore vaults",href:Vn.exploreVaults},meta:{kind:"community",label:"on-chain transaction",tx:"0x12af…9e44",from:"you",to:"Vault-Alpha",asset:"USDC",amt:"10000",chain:"Morpheum · hop 0",status:"queued"}}]},Xs={kicker:"How it works",title:"Discover → Copy → Supervise → Isolate",outcome:"A proven, risk-isolated capital position — not a bet on a black box.",chips:[{label:"Risk level",value:"Manual · HITL · Hands-off"},{label:"Notifications",value:"Want-to · Action · Paused · Rejected"},{label:"Capital",value:"Bucket / Vault"}],steps:[{n:1,title:"Discover",feature:"Agents & Indices + proof",body:"Browse the MAEX roster and index catalog and read the proof before you commit a dollar.",example:"Open SharpeShark and see its receipts, reputation, risk score, and Sharpe / ROI side by side."},{n:2,title:"Copy",feature:"Copy Trade",body:"Mirror a proven performer into your own bucket in one click, sized to your capital, with spread / funding cost shown before you confirm.",example:"One click clones SharpeShark's strategy into a fresh bucket bound to your wallet."},{n:3,title:"Supervise",feature:"Risk Level + Agent Notifications",body:"Set how much the agent may act on its own — Manual · HITL · Hands-off — and stay in the loop through Agent Notifications: Want to · Action · Paused · Rejected.",example:'On HITL, a "Want to open ETH long" notification waits for your inline Approve / Reject, and Explain shows why the agent wants the trade.'},{n:4,title:"Isolate",feature:"Buckets",body:"Every mirror lands in its own dedicated cross-margin bucket bound to a wallet executor agent, so risk is contained per strategy.",example:"SharpeShark runs in its own bucket with its own margin and exposure — if it draws down, only that bucket's capital is at risk; your other buckets and spot balance are untouched."}]},So={kicker:"Explore",title:"Agents. Indices. Buckets. Vaults.",cards:[{title:"Agents",verbs:["Browse","Compare","Copy"],agents:[{name:"SharpeShark",sharpe:"2.41",roi:"+38.2%",risk:"72",positive:!0},{name:"SortinoSloth",sharpe:"1.86",roi:"+21.4%",risk:"58",positive:!0},{name:"FundingFox",sharpe:"1.12",roi:"-4.1%",risk:"41",positive:!1}]},{title:"Indices",verbs:["Track","Weight","Hold"],blurb:"Curated agent baskets for one-click exposure to proven strategies.",sample:[{label:"MAEX Core",value:"+12.8%",positive:!0},{label:"Risk-Off Bucket",value:"+4.2%",positive:!0}]},{title:"Buckets",verbs:["Isolate","Trade","Contain"],blurb:"Risk-isolated positions — each strategy in its own margin shell.",sample:[{label:"Bucket A",value:"ISOLATED",positive:!1},{label:"Bucket B",value:"ISOLATED",positive:!1}]},{title:"Vaults",verbs:["Deposit","Earn","Withdraw"],blurb:"Pooled onchain capital — graded vaults with live APR and TVL.",sample:[{label:"MLP (House Liq.)",value:"A · 18.4%",meta:"$9.8M TVL"},{label:"Basis Capture",value:"A · 14.2%",meta:"$2.1M TVL"}]}]},mu={line:"Back agents you can prove. Own the upside.",primaryCta:{label:"Launch Demo",href:Vn.app},social:[{label:"Join Discord",href:Vn.discord},{label:"Join X",href:Vn.x}]},pv={legal:"© 2026 Morpheum. Capital funds proof.",labels:["validators","stakings","ZKProof"]};function Go({variant:a="primary",children:e,className:i="",...r}){const o=`cta cta--${a} terminal-interactive ${i}`.trim();if("href"in r&&r.href!==void 0){const{href:c,...u}=r;return D.jsx("a",{className:o,href:c,...u,children:e})}return D.jsx("button",{className:o,type:"button",...r,children:e})}function Yy(){return D.jsx("section",{id:"join",className:"section community",children:D.jsxs("div",{className:"container community__inner",children:[D.jsx("h2",{className:"community__line",children:mu.line}),D.jsxs("div",{className:"community__ctas",children:[D.jsx(Go,{href:mu.primaryCta.href,variant:"primary",children:mu.primaryCta.label}),mu.social.map(a=>D.jsx(Go,{href:a.href,variant:"ghost",children:a.label},a.label))]})]})})}function qy(){const[a,e]=Pe.useState(!1),i=!!Vn.tutorialVideo;return D.jsx("section",{id:"demo",className:"section demo",children:D.jsxs("div",{className:"container",children:[D.jsx("p",{className:"section-kicker",children:up.kicker}),D.jsxs("div",{className:"demo__video",children:[a&&i?D.jsx("video",{className:"demo__player",src:Vn.tutorialVideo,controls:!0,autoPlay:!0,playsInline:!0}):D.jsxs("button",{type:"button",className:"demo__poster",onClick:()=>i&&e(!0),"aria-label":i?"Play tutorial video":"Tutorial video coming soon",children:[D.jsx("span",{className:"demo__play","aria-hidden":!0,children:"▶"}),D.jsx("span",{className:"demo__poster-label",children:"Tutorial"})]}),D.jsx("p",{className:"demo__caption",children:up.videoCaption})]})]})})}const jy={receipt:"Receipt",riskScore:"Risk",credential:"Credential",verified:"Verified"};function Mh({type:a,value:e}){return D.jsxs("span",{className:`proof-chip proof-chip--${a}`,children:[D.jsx("span",{className:"proof-chip__dot","aria-hidden":!0}),D.jsx("span",{className:"proof-chip__label",children:jy[a]}),e?D.jsx("span",{className:"proof-chip__value",children:e}):null]})}function Zy(){const a=So.cards[0],e=So.cards[1],i=So.cards[2],r=So.cards[3];return D.jsx("section",{id:"explore",className:"section explore",children:D.jsxs("div",{className:"container",children:[D.jsx("p",{className:"section-kicker",children:So.kicker}),D.jsx("h2",{className:"section-title explore__title",children:So.title}),D.jsxs("div",{className:"explore__grid",children:[D.jsxs("article",{id:"explore-agents",className:"explore-card explore-card--major",children:[D.jsxs("header",{className:"explore-card__header",children:[D.jsx("h3",{className:"explore-card__title",children:a.title}),D.jsx("p",{className:"explore-card__verbs",children:a.verbs.join(" · ").toUpperCase()})]}),D.jsx("ul",{className:"explore-roster",children:a.agents.map(o=>D.jsxs("li",{className:"explore-roster__row",children:[D.jsxs("div",{className:"explore-roster__top",children:[D.jsx("span",{className:"explore-roster__name",children:o.name}),D.jsx("span",{className:`terminal-value ${o.positive?"terminal-long":"terminal-short"}`,children:o.roi})]}),D.jsxs("div",{className:"explore-roster__proof",children:[D.jsx(Mh,{type:"verified"}),D.jsx(Mh,{type:"riskScore",value:o.risk}),D.jsx(Mh,{type:"receipt"}),D.jsxs("span",{className:"terminal-value explore-roster__sharpe",children:["Sharpe ",o.sharpe]})]})]},o.name))})]}),D.jsxs("article",{className:"explore-card explore-card--major",children:[D.jsxs("header",{className:"explore-card__header",children:[D.jsx("h3",{className:"explore-card__title",children:e.title}),D.jsx("p",{className:"explore-card__verbs",children:e.verbs.join(" · ").toUpperCase()})]}),D.jsx("p",{className:"explore-card__blurb",children:e.blurb}),D.jsx("ul",{className:"explore-sample",children:e.sample.map(o=>D.jsxs("li",{children:[D.jsx("span",{className:"terminal-label",children:o.label}),D.jsx("span",{className:`terminal-value ${o.positive?"terminal-long":""}`,children:o.value})]},o.label))})]}),D.jsxs("article",{id:"explore-buckets",className:"explore-card explore-card--major",children:[D.jsxs("header",{className:"explore-card__header",children:[D.jsx("h3",{className:"explore-card__title",children:i.title}),D.jsx("p",{className:"explore-card__verbs",children:i.verbs.join(" · ").toUpperCase()})]}),D.jsx("p",{className:"explore-card__blurb",children:i.blurb}),D.jsx("ul",{className:"explore-sample",children:i.sample.map(o=>D.jsxs("li",{children:[D.jsx("span",{className:"terminal-label",children:o.label}),D.jsx("span",{className:"terminal-value explore-sample__status",children:o.value})]},o.label))})]}),D.jsxs("article",{id:"explore-vaults",className:"explore-card explore-card--major",children:[D.jsxs("header",{className:"explore-card__header",children:[D.jsx("h3",{className:"explore-card__title",children:r.title}),D.jsx("p",{className:"explore-card__verbs",children:r.verbs.join(" · ").toUpperCase()})]}),D.jsx("p",{className:"explore-card__blurb",children:r.blurb}),D.jsx("ul",{className:"explore-sample",children:r.sample.map(o=>D.jsxs("li",{children:[D.jsx("span",{className:"terminal-label",children:o.label}),D.jsxs("span",{className:"explore-sample__metrics",children:[D.jsx("span",{className:"terminal-value terminal-long",children:o.value}),D.jsx("span",{className:"terminal-value explore-sample__meta",children:o.meta})]})]},o.label))})]})]})]})})}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const sm="185",Ky=0,mv=1,Qy=2,Gu=1,Jy=2,Wl=3,ps=0,Ci=1,Da=2,ds=0,Bo=1,fp=2,gv=3,_v=4,$y=5,wr=100,eE=101,tE=102,nE=103,iE=104,aE=200,sE=201,rE=202,oE=203,dp=204,hp=205,lE=206,cE=207,uE=208,fE=209,dE=210,hE=211,pE=212,mE=213,gE=214,pp=0,mp=1,gp=2,Vo=3,_p=4,vp=5,xp=6,Sp=7,Kx=0,_E=1,vE=2,Ua=0,Qx=1,Jx=2,$x=3,eS=4,tS=5,nS=6,iS=7,aS=300,Nr=301,ko=302,yh=303,Eh=304,sf=306,Mp=1e3,_a=1001,yp=1002,ri=1003,xE=1004,gu=1005,wn=1006,bh=1007,er=1008,na=1009,sS=1010,rS=1011,ec=1012,rm=1013,Ia=1014,La=1015,ms=1016,om=1017,lm=1018,tc=1020,oS=35902,lS=35899,cS=1021,uS=1022,va=1023,gs=1026,Lr=1027,fS=1028,cm=1029,Ur=1030,um=1031,fm=1033,Vu=33776,ku=33777,Xu=33778,Wu=33779,Ep=35840,bp=35841,Tp=35842,Ap=35843,Rp=36196,Cp=37492,wp=37496,Dp=37488,Lp=37489,qu=37490,Np=37491,Up=37808,Op=37809,Pp=37810,Ip=37811,Bp=37812,Fp=37813,zp=37814,Hp=37815,Gp=37816,Vp=37817,kp=37818,Xp=37819,Wp=37820,Yp=37821,qp=36492,jp=36494,Zp=36495,Kp=36283,Qp=36284,ju=36285,Jp=36286,SE=3200,vv=0,ME=1,$s="",fi="srgb",Zu="srgb-linear",Ku="linear",an="srgb",Mo=7680,xv=519,yE=512,EE=513,bE=514,dm=515,TE=516,AE=517,hm=518,RE=519,Sv=35044,Mv="300 es",Na=2e3,Qu=2001;function CE(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function Ju(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function wE(){const a=Ju("canvas");return a.style.display="block",a}const yv={};function Ev(...a){const e="THREE."+a.shift();console.log(e,...a)}function dS(a){const e=a[0];if(typeof e=="string"&&e.startsWith("TSL:")){const i=a[1];i&&i.isStackTrace?a[0]+=" "+i.getLocation():a[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return a}function ft(...a){a=dS(a);const e="THREE."+a.shift();{const i=a[0];i&&i.isStackTrace?console.warn(i.getError(e)):console.warn(e,...a)}}function zt(...a){a=dS(a);const e="THREE."+a.shift();{const i=a[0];i&&i.isStackTrace?console.error(i.getError(e)):console.error(e,...a)}}function Fo(...a){const e=a.join(" ");e in yv||(yv[e]=!0,ft(...a))}function DE(a,e,i){return new Promise(function(r,o){function c(){switch(a.clientWaitSync(e,a.SYNC_FLUSH_COMMANDS_BIT,0)){case a.WAIT_FAILED:o();break;case a.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:r()}}setTimeout(c,i)})}const LE={[pp]:mp,[gp]:xp,[_p]:Sp,[Vo]:vp,[mp]:pp,[xp]:gp,[Sp]:_p,[vp]:Vo};class Pr{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const c=o.indexOf(i);c!==-1&&o.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let c=0,u=o.length;c<u;c++)o[c].call(this,e);e.target=null}}}const ci=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let bv=1234567;const Kl=Math.PI/180,nc=180/Math.PI;function qo(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(ci[a&255]+ci[a>>8&255]+ci[a>>16&255]+ci[a>>24&255]+"-"+ci[e&255]+ci[e>>8&255]+"-"+ci[e>>16&15|64]+ci[e>>24&255]+"-"+ci[i&63|128]+ci[i>>8&255]+"-"+ci[i>>16&255]+ci[i>>24&255]+ci[r&255]+ci[r>>8&255]+ci[r>>16&255]+ci[r>>24&255]).toLowerCase()}function At(a,e,i){return Math.max(e,Math.min(i,a))}function pm(a,e){return(a%e+e)%e}function NE(a,e,i,r,o){return r+(a-e)*(o-r)/(i-e)}function UE(a,e,i){return a!==e?(i-a)/(e-a):0}function Ql(a,e,i){return(1-i)*a+i*e}function OE(a,e,i,r){return Ql(a,e,1-Math.exp(-i*r))}function PE(a,e=1){return e-Math.abs(pm(a,e*2)-e)}function IE(a,e,i){return a<=e?0:a>=i?1:(a=(a-e)/(i-e),a*a*(3-2*a))}function BE(a,e,i){return a<=e?0:a>=i?1:(a=(a-e)/(i-e),a*a*a*(a*(a*6-15)+10))}function FE(a,e){return a+Math.floor(Math.random()*(e-a+1))}function zE(a,e){return a+Math.random()*(e-a)}function HE(a){return a*(.5-Math.random())}function GE(a){a!==void 0&&(bv=a);let e=bv+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function VE(a){return a*Kl}function kE(a){return a*nc}function XE(a){return(a&a-1)===0&&a!==0}function WE(a){return Math.pow(2,Math.ceil(Math.log(a)/Math.LN2))}function YE(a){return Math.pow(2,Math.floor(Math.log(a)/Math.LN2))}function qE(a,e,i,r,o){const c=Math.cos,u=Math.sin,d=c(i/2),m=u(i/2),h=c((e+r)/2),g=u((e+r)/2),_=c((e-r)/2),v=u((e-r)/2),x=c((r-e)/2),b=u((r-e)/2);switch(o){case"XYX":a.set(d*g,m*_,m*v,d*h);break;case"YZY":a.set(m*v,d*g,m*_,d*h);break;case"ZXZ":a.set(m*_,m*v,d*g,d*h);break;case"XZX":a.set(d*g,m*b,m*x,d*h);break;case"YXY":a.set(m*x,d*g,m*b,d*h);break;case"ZYZ":a.set(m*b,m*x,d*g,d*h);break;default:ft("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+o)}}function Po(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return a/4294967295;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int32Array:return Math.max(a/2147483647,-1);case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function _i(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return Math.round(a*4294967295);case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int32Array:return Math.round(a*2147483647);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Ft={DEG2RAD:Kl,RAD2DEG:nc,generateUUID:qo,clamp:At,euclideanModulo:pm,mapLinear:NE,inverseLerp:UE,lerp:Ql,damp:OE,pingpong:PE,smoothstep:IE,smootherstep:BE,randInt:FE,randFloat:zE,randFloatSpread:HE,seededRandom:GE,degToRad:VE,radToDeg:kE,isPowerOfTwo:XE,ceilPowerOfTwo:WE,floorPowerOfTwo:YE,setQuaternionFromProperEuler:qE,normalize:_i,denormalize:Po},Am=class Am{constructor(e=0,i=0){this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,o=e.elements;return this.x=o[0]*i+o[3]*r+o[6],this.y=o[1]*i+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=At(this.x,e.x,i.x),this.y=At(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=At(this.x,e,i),this.y=At(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(At(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(At(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),o=Math.sin(i),c=this.x-e.x,u=this.y-e.y;return this.x=c*r-u*o+e.x,this.y=c*o+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Am.prototype.isVector2=!0;let Yt=Am;class jo{constructor(e=0,i=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=o}static slerpFlat(e,i,r,o,c,u,d){let m=r[o+0],h=r[o+1],g=r[o+2],_=r[o+3],v=c[u+0],x=c[u+1],b=c[u+2],C=c[u+3];if(_!==C||m!==v||h!==x||g!==b){let y=m*v+h*x+g*b+_*C;y<0&&(v=-v,x=-x,b=-b,C=-C,y=-y);let S=1-d;if(y<.9995){const I=Math.acos(y),O=Math.sin(I);S=Math.sin(S*I)/O,d=Math.sin(d*I)/O,m=m*S+v*d,h=h*S+x*d,g=g*S+b*d,_=_*S+C*d}else{m=m*S+v*d,h=h*S+x*d,g=g*S+b*d,_=_*S+C*d;const I=1/Math.sqrt(m*m+h*h+g*g+_*_);m*=I,h*=I,g*=I,_*=I}}e[i]=m,e[i+1]=h,e[i+2]=g,e[i+3]=_}static multiplyQuaternionsFlat(e,i,r,o,c,u){const d=r[o],m=r[o+1],h=r[o+2],g=r[o+3],_=c[u],v=c[u+1],x=c[u+2],b=c[u+3];return e[i]=d*b+g*_+m*x-h*v,e[i+1]=m*b+g*v+h*_-d*x,e[i+2]=h*b+g*x+d*v-m*_,e[i+3]=g*b-d*_-m*v-h*x,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,o){return this._x=e,this._y=i,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,o=e._y,c=e._z,u=e._order,d=Math.cos,m=Math.sin,h=d(r/2),g=d(o/2),_=d(c/2),v=m(r/2),x=m(o/2),b=m(c/2);switch(u){case"XYZ":this._x=v*g*_+h*x*b,this._y=h*x*_-v*g*b,this._z=h*g*b+v*x*_,this._w=h*g*_-v*x*b;break;case"YXZ":this._x=v*g*_+h*x*b,this._y=h*x*_-v*g*b,this._z=h*g*b-v*x*_,this._w=h*g*_+v*x*b;break;case"ZXY":this._x=v*g*_-h*x*b,this._y=h*x*_+v*g*b,this._z=h*g*b+v*x*_,this._w=h*g*_-v*x*b;break;case"ZYX":this._x=v*g*_-h*x*b,this._y=h*x*_+v*g*b,this._z=h*g*b-v*x*_,this._w=h*g*_+v*x*b;break;case"YZX":this._x=v*g*_+h*x*b,this._y=h*x*_+v*g*b,this._z=h*g*b-v*x*_,this._w=h*g*_-v*x*b;break;case"XZY":this._x=v*g*_-h*x*b,this._y=h*x*_-v*g*b,this._z=h*g*b+v*x*_,this._w=h*g*_+v*x*b;break;default:ft("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],o=i[4],c=i[8],u=i[1],d=i[5],m=i[9],h=i[2],g=i[6],_=i[10],v=r+d+_;if(v>0){const x=.5/Math.sqrt(v+1);this._w=.25/x,this._x=(g-m)*x,this._y=(c-h)*x,this._z=(u-o)*x}else if(r>d&&r>_){const x=2*Math.sqrt(1+r-d-_);this._w=(g-m)/x,this._x=.25*x,this._y=(o+u)/x,this._z=(c+h)/x}else if(d>_){const x=2*Math.sqrt(1+d-r-_);this._w=(c-h)/x,this._x=(o+u)/x,this._y=.25*x,this._z=(m+g)/x}else{const x=2*Math.sqrt(1+_-r-d);this._w=(u-o)/x,this._x=(c+h)/x,this._y=(m+g)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(At(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,i/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,o=e._y,c=e._z,u=e._w,d=i._x,m=i._y,h=i._z,g=i._w;return this._x=r*g+u*d+o*h-c*m,this._y=o*g+u*m+c*d-r*h,this._z=c*g+u*h+r*m-o*d,this._w=u*g-r*d-o*m-c*h,this._onChangeCallback(),this}slerp(e,i){let r=e._x,o=e._y,c=e._z,u=e._w,d=this.dot(e);d<0&&(r=-r,o=-o,c=-c,u=-u,d=-d);let m=1-i;if(d<.9995){const h=Math.acos(d),g=Math.sin(h);m=Math.sin(m*h)/g,i=Math.sin(i*h)/g,this._x=this._x*m+r*i,this._y=this._y*m+o*i,this._z=this._z*m+c*i,this._w=this._w*m+u*i,this._onChangeCallback()}else this._x=this._x*m+r*i,this._y=this._y*m+o*i,this._z=this._z*m+c*i,this._w=this._w*m+u*i,this.normalize();return this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Rm=class Rm{constructor(e=0,i=0,r=0){this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(Tv.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(Tv.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,o=this.z,c=e.elements;return this.x=c[0]*i+c[3]*r+c[6]*o,this.y=c[1]*i+c[4]*r+c[7]*o,this.z=c[2]*i+c[5]*r+c[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,o=this.z,c=e.elements,u=1/(c[3]*i+c[7]*r+c[11]*o+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*o+c[12])*u,this.y=(c[1]*i+c[5]*r+c[9]*o+c[13])*u,this.z=(c[2]*i+c[6]*r+c[10]*o+c[14])*u,this}applyQuaternion(e){const i=this.x,r=this.y,o=this.z,c=e.x,u=e.y,d=e.z,m=e.w,h=2*(u*o-d*r),g=2*(d*i-c*o),_=2*(c*r-u*i);return this.x=i+m*h+u*_-d*g,this.y=r+m*g+d*h-c*_,this.z=o+m*_+c*g-u*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,o=this.z,c=e.elements;return this.x=c[0]*i+c[4]*r+c[8]*o,this.y=c[1]*i+c[5]*r+c[9]*o,this.z=c[2]*i+c[6]*r+c[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=At(this.x,e.x,i.x),this.y=At(this.y,e.y,i.y),this.z=At(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=At(this.x,e,i),this.y=At(this.y,e,i),this.z=At(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(At(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,o=e.y,c=e.z,u=i.x,d=i.y,m=i.z;return this.x=o*m-c*d,this.y=c*u-r*m,this.z=r*d-o*u,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Th.copy(this).projectOnVector(e),this.sub(Th)}reflect(e){return this.sub(Th.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(At(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return i*i+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const o=Math.sin(i)*e;return this.x=o*Math.sin(r),this.y=Math.cos(i)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=o,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Rm.prototype.isVector3=!0;let te=Rm;const Th=new te,Tv=new jo,Cm=class Cm{constructor(e,i,r,o,c,u,d,m,h){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,o,c,u,d,m,h)}set(e,i,r,o,c,u,d,m,h){const g=this.elements;return g[0]=e,g[1]=o,g[2]=d,g[3]=i,g[4]=c,g[5]=m,g[6]=r,g[7]=u,g[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,o=i.elements,c=this.elements,u=r[0],d=r[3],m=r[6],h=r[1],g=r[4],_=r[7],v=r[2],x=r[5],b=r[8],C=o[0],y=o[3],S=o[6],I=o[1],O=o[4],A=o[7],U=o[2],L=o[5],B=o[8];return c[0]=u*C+d*I+m*U,c[3]=u*y+d*O+m*L,c[6]=u*S+d*A+m*B,c[1]=h*C+g*I+_*U,c[4]=h*y+g*O+_*L,c[7]=h*S+g*A+_*B,c[2]=v*C+x*I+b*U,c[5]=v*y+x*O+b*L,c[8]=v*S+x*A+b*B,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],o=e[2],c=e[3],u=e[4],d=e[5],m=e[6],h=e[7],g=e[8];return i*u*g-i*d*h-r*c*g+r*d*m+o*c*h-o*u*m}invert(){const e=this.elements,i=e[0],r=e[1],o=e[2],c=e[3],u=e[4],d=e[5],m=e[6],h=e[7],g=e[8],_=g*u-d*h,v=d*m-g*c,x=h*c-u*m,b=i*_+r*v+o*x;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/b;return e[0]=_*C,e[1]=(o*h-g*r)*C,e[2]=(d*r-o*u)*C,e[3]=v*C,e[4]=(g*i-o*m)*C,e[5]=(o*c-d*i)*C,e[6]=x*C,e[7]=(r*m-h*i)*C,e[8]=(u*i-r*c)*C,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,o,c,u,d){const m=Math.cos(c),h=Math.sin(c);return this.set(r*m,r*h,-r*(m*u+h*d)+u+e,-o*h,o*m,-o*(-h*u+m*d)+d+i,0,0,1),this}scale(e,i){return Fo("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ah.makeScale(e,i)),this}rotate(e){return Fo("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ah.makeRotation(-e)),this}translate(e,i){return Fo("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ah.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let o=0;o<9;o++)if(i[o]!==r[o])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Cm.prototype.isMatrix3=!0;let gt=Cm;const Ah=new gt,Av=new gt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Rv=new gt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function jE(){const a={enabled:!0,workingColorSpace:Zu,spaces:{},convert:function(o,c,u){return this.enabled===!1||c===u||!c||!u||(this.spaces[c].transfer===an&&(o.r=hs(o.r),o.g=hs(o.g),o.b=hs(o.b)),this.spaces[c].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[c].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===an&&(o.r=zo(o.r),o.g=zo(o.g),o.b=zo(o.b))),o},workingToColorSpace:function(o,c){return this.convert(o,this.workingColorSpace,c)},colorSpaceToWorking:function(o,c){return this.convert(o,c,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===$s?Ku:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,c=this.workingColorSpace){return o.fromArray(this.spaces[c].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,c,u){return o.copy(this.spaces[c].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,c){return Fo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),a.workingToColorSpace(o,c)},toWorkingColorSpace:function(o,c){return Fo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),a.colorSpaceToWorking(o,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return a.define({[Zu]:{primaries:e,whitePoint:r,transfer:Ku,toXYZ:Av,fromXYZ:Rv,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:fi},outputColorSpaceConfig:{drawingBufferColorSpace:fi}},[fi]:{primaries:e,whitePoint:r,transfer:an,toXYZ:Av,fromXYZ:Rv,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:fi}}}),a}const Pt=jE();function hs(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function zo(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}let yo;class ZE{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{yo===void 0&&(yo=Ju("canvas")),yo.width=e.width,yo.height=e.height;const o=yo.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=yo}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Ju("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),c=o.data;for(let u=0;u<c.length;u++)c[u]=hs(c[u]/255)*255;return r.putImageData(o,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(hs(i[r]/255)*255):i[r]=hs(i[r]);return{data:i,width:e.width,height:e.height}}else return ft("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let KE=0;class mm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:KE++}),this.uuid=qo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayWidth,i.displayHeight,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let c;if(Array.isArray(o)){c=[];for(let u=0,d=o.length;u<d;u++)o[u].isDataTexture?c.push(Rh(o[u].image)):c.push(Rh(o[u]))}else c=Rh(o);r.url=c}return i||(e.images[this.uuid]=r),r}}function Rh(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?ZE.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(ft("Texture: Unable to serialize Texture."),{})}let QE=0;const Ch=new te;class di extends Pr{constructor(e=di.DEFAULT_IMAGE,i=di.DEFAULT_MAPPING,r=_a,o=_a,c=wn,u=er,d=va,m=na,h=di.DEFAULT_ANISOTROPY,g=$s){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:QE++}),this.uuid=qo(),this.name="",this.source=new mm(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=c,this.minFilter=u,this.anisotropy=h,this.format=d,this.internalFormat=null,this.type=m,this.offset=new Yt(0,0),this.repeat=new Yt(1,1),this.center=new Yt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new gt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ch).x}get height(){return this.source.getSize(Ch).y}get depth(){return this.source.getSize(Ch).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const r=e[i];if(r===void 0){ft(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const o=this[i];if(o===void 0){ft(`Texture.setValues(): property '${i}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==aS)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Mp:e.x=e.x-Math.floor(e.x);break;case _a:e.x=e.x<0?0:1;break;case yp:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Mp:e.y=e.y-Math.floor(e.y);break;case _a:e.y=e.y<0?0:1;break;case yp:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}di.DEFAULT_IMAGE=null;di.DEFAULT_MAPPING=aS;di.DEFAULT_ANISOTROPY=1;const wm=class wm{constructor(e=0,i=0,r=0,o=1){this.x=e,this.y=i,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,o){return this.x=e,this.y=i,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,o=this.z,c=this.w,u=e.elements;return this.x=u[0]*i+u[4]*r+u[8]*o+u[12]*c,this.y=u[1]*i+u[5]*r+u[9]*o+u[13]*c,this.z=u[2]*i+u[6]*r+u[10]*o+u[14]*c,this.w=u[3]*i+u[7]*r+u[11]*o+u[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,o,c;const m=e.elements,h=m[0],g=m[4],_=m[8],v=m[1],x=m[5],b=m[9],C=m[2],y=m[6],S=m[10];if(Math.abs(g-v)<.01&&Math.abs(_-C)<.01&&Math.abs(b-y)<.01){if(Math.abs(g+v)<.1&&Math.abs(_+C)<.1&&Math.abs(b+y)<.1&&Math.abs(h+x+S-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const O=(h+1)/2,A=(x+1)/2,U=(S+1)/2,L=(g+v)/4,B=(_+C)/4,E=(b+y)/4;return O>A&&O>U?O<.01?(r=0,o=.707106781,c=.707106781):(r=Math.sqrt(O),o=L/r,c=B/r):A>U?A<.01?(r=.707106781,o=0,c=.707106781):(o=Math.sqrt(A),r=L/o,c=E/o):U<.01?(r=.707106781,o=.707106781,c=0):(c=Math.sqrt(U),r=B/c,o=E/c),this.set(r,o,c,i),this}let I=Math.sqrt((y-b)*(y-b)+(_-C)*(_-C)+(v-g)*(v-g));return Math.abs(I)<.001&&(I=1),this.x=(y-b)/I,this.y=(_-C)/I,this.z=(v-g)/I,this.w=Math.acos((h+x+S-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=At(this.x,e.x,i.x),this.y=At(this.y,e.y,i.y),this.z=At(this.z,e.z,i.z),this.w=At(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=At(this.x,e,i),this.y=At(this.y,e,i),this.z=At(this.z,e,i),this.w=At(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(At(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};wm.prototype.isVector4=!0;let Cn=wm;class JE extends Pr{constructor(e=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:wn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},r),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=r.depth,this.scissor=new Cn(0,0,e,i),this.scissorTest=!1,this.viewport=new Cn(0,0,e,i),this.textures=[];const o={width:e,height:i,depth:r.depth},c=new di(o),u=r.count;for(let d=0;d<u;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview,this.useArrayDepthTexture=r.useArrayDepthTexture}_setTextureOptions(e={}){const i={minFilter:wn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let o=0,c=this.textures.length;o<c;o++)this.textures[o].image.width=e,this.textures[o].image.height=i,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const o=Object.assign({},e.textures[i].image);this.textures[i].source=new mm(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Oa extends JE{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class hS extends di{constructor(e=null,i=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:o},this.magFilter=ri,this.minFilter=ri,this.wrapR=_a,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class $E extends di{constructor(e=null,i=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:o},this.magFilter=ri,this.minFilter=ri,this.wrapR=_a,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const af=class af{constructor(e,i,r,o,c,u,d,m,h,g,_,v,x,b,C,y){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,o,c,u,d,m,h,g,_,v,x,b,C,y)}set(e,i,r,o,c,u,d,m,h,g,_,v,x,b,C,y){const S=this.elements;return S[0]=e,S[4]=i,S[8]=r,S[12]=o,S[1]=c,S[5]=u,S[9]=d,S[13]=m,S[2]=h,S[6]=g,S[10]=_,S[14]=v,S[3]=x,S[7]=b,S[11]=C,S[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new af().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return this.determinantAffine()===0?(e.set(1,0,0),i.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const i=this.elements,r=e.elements,o=1/Eo.setFromMatrixColumn(e,0).length(),c=1/Eo.setFromMatrixColumn(e,1).length(),u=1/Eo.setFromMatrixColumn(e,2).length();return i[0]=r[0]*o,i[1]=r[1]*o,i[2]=r[2]*o,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*u,i[9]=r[9]*u,i[10]=r[10]*u,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,o=e.y,c=e.z,u=Math.cos(r),d=Math.sin(r),m=Math.cos(o),h=Math.sin(o),g=Math.cos(c),_=Math.sin(c);if(e.order==="XYZ"){const v=u*g,x=u*_,b=d*g,C=d*_;i[0]=m*g,i[4]=-m*_,i[8]=h,i[1]=x+b*h,i[5]=v-C*h,i[9]=-d*m,i[2]=C-v*h,i[6]=b+x*h,i[10]=u*m}else if(e.order==="YXZ"){const v=m*g,x=m*_,b=h*g,C=h*_;i[0]=v+C*d,i[4]=b*d-x,i[8]=u*h,i[1]=u*_,i[5]=u*g,i[9]=-d,i[2]=x*d-b,i[6]=C+v*d,i[10]=u*m}else if(e.order==="ZXY"){const v=m*g,x=m*_,b=h*g,C=h*_;i[0]=v-C*d,i[4]=-u*_,i[8]=b+x*d,i[1]=x+b*d,i[5]=u*g,i[9]=C-v*d,i[2]=-u*h,i[6]=d,i[10]=u*m}else if(e.order==="ZYX"){const v=u*g,x=u*_,b=d*g,C=d*_;i[0]=m*g,i[4]=b*h-x,i[8]=v*h+C,i[1]=m*_,i[5]=C*h+v,i[9]=x*h-b,i[2]=-h,i[6]=d*m,i[10]=u*m}else if(e.order==="YZX"){const v=u*m,x=u*h,b=d*m,C=d*h;i[0]=m*g,i[4]=C-v*_,i[8]=b*_+x,i[1]=_,i[5]=u*g,i[9]=-d*g,i[2]=-h*g,i[6]=x*_+b,i[10]=v-C*_}else if(e.order==="XZY"){const v=u*m,x=u*h,b=d*m,C=d*h;i[0]=m*g,i[4]=-_,i[8]=h*g,i[1]=v*_+C,i[5]=u*g,i[9]=x*_-b,i[2]=b*_-x,i[6]=d*g,i[10]=C*_+v}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(eb,e,tb)}lookAt(e,i,r){const o=this.elements;return Bi.subVectors(e,i),Bi.lengthSq()===0&&(Bi.z=1),Bi.normalize(),Ws.crossVectors(r,Bi),Ws.lengthSq()===0&&(Math.abs(r.z)===1?Bi.x+=1e-4:Bi.z+=1e-4,Bi.normalize(),Ws.crossVectors(r,Bi)),Ws.normalize(),_u.crossVectors(Bi,Ws),o[0]=Ws.x,o[4]=_u.x,o[8]=Bi.x,o[1]=Ws.y,o[5]=_u.y,o[9]=Bi.y,o[2]=Ws.z,o[6]=_u.z,o[10]=Bi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,o=i.elements,c=this.elements,u=r[0],d=r[4],m=r[8],h=r[12],g=r[1],_=r[5],v=r[9],x=r[13],b=r[2],C=r[6],y=r[10],S=r[14],I=r[3],O=r[7],A=r[11],U=r[15],L=o[0],B=o[4],E=o[8],N=o[12],V=o[1],H=o[5],Y=o[9],he=o[13],ue=o[2],X=o[6],z=o[10],G=o[14],J=o[3],fe=o[7],xe=o[11],P=o[15];return c[0]=u*L+d*V+m*ue+h*J,c[4]=u*B+d*H+m*X+h*fe,c[8]=u*E+d*Y+m*z+h*xe,c[12]=u*N+d*he+m*G+h*P,c[1]=g*L+_*V+v*ue+x*J,c[5]=g*B+_*H+v*X+x*fe,c[9]=g*E+_*Y+v*z+x*xe,c[13]=g*N+_*he+v*G+x*P,c[2]=b*L+C*V+y*ue+S*J,c[6]=b*B+C*H+y*X+S*fe,c[10]=b*E+C*Y+y*z+S*xe,c[14]=b*N+C*he+y*G+S*P,c[3]=I*L+O*V+A*ue+U*J,c[7]=I*B+O*H+A*X+U*fe,c[11]=I*E+O*Y+A*z+U*xe,c[15]=I*N+O*he+A*G+U*P,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],o=e[8],c=e[12],u=e[1],d=e[5],m=e[9],h=e[13],g=e[2],_=e[6],v=e[10],x=e[14],b=e[3],C=e[7],y=e[11],S=e[15],I=m*x-h*v,O=d*x-h*_,A=d*v-m*_,U=u*x-h*g,L=u*v-m*g,B=u*_-d*g;return i*(C*I-y*O+S*A)-r*(b*I-y*U+S*L)+o*(b*O-C*U+S*B)-c*(b*A-C*L+y*B)}determinantAffine(){const e=this.elements,i=e[0],r=e[4],o=e[8],c=e[1],u=e[5],d=e[9],m=e[2],h=e[6],g=e[10];return i*(u*g-d*h)-r*(c*g-d*m)+o*(c*h-u*m)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=i,o[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],o=e[2],c=e[3],u=e[4],d=e[5],m=e[6],h=e[7],g=e[8],_=e[9],v=e[10],x=e[11],b=e[12],C=e[13],y=e[14],S=e[15],I=i*d-r*u,O=i*m-o*u,A=i*h-c*u,U=r*m-o*d,L=r*h-c*d,B=o*h-c*m,E=g*C-_*b,N=g*y-v*b,V=g*S-x*b,H=_*y-v*C,Y=_*S-x*C,he=v*S-x*y,ue=I*he-O*Y+A*H+U*V-L*N+B*E;if(ue===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const X=1/ue;return e[0]=(d*he-m*Y+h*H)*X,e[1]=(o*Y-r*he-c*H)*X,e[2]=(C*B-y*L+S*U)*X,e[3]=(v*L-_*B-x*U)*X,e[4]=(m*V-u*he-h*N)*X,e[5]=(i*he-o*V+c*N)*X,e[6]=(y*A-b*B-S*O)*X,e[7]=(g*B-v*A+x*O)*X,e[8]=(u*Y-d*V+h*E)*X,e[9]=(r*V-i*Y-c*E)*X,e[10]=(b*L-C*A+S*I)*X,e[11]=(_*A-g*L-x*I)*X,e[12]=(d*N-u*H-m*E)*X,e[13]=(i*H-r*N+o*E)*X,e[14]=(C*O-b*U-y*I)*X,e[15]=(g*U-_*O+v*I)*X,this}scale(e){const i=this.elements,r=e.x,o=e.y,c=e.z;return i[0]*=r,i[4]*=o,i[8]*=c,i[1]*=r,i[5]*=o,i[9]*=c,i[2]*=r,i[6]*=o,i[10]*=c,i[3]*=r,i[7]*=o,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,o))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),o=Math.sin(i),c=1-r,u=e.x,d=e.y,m=e.z,h=c*u,g=c*d;return this.set(h*u+r,h*d-o*m,h*m+o*d,0,h*d+o*m,g*d+r,g*m-o*u,0,h*m-o*d,g*m+o*u,c*m*m+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,o,c,u){return this.set(1,r,c,0,e,1,u,0,i,o,1,0,0,0,0,1),this}compose(e,i,r){const o=this.elements,c=i._x,u=i._y,d=i._z,m=i._w,h=c+c,g=u+u,_=d+d,v=c*h,x=c*g,b=c*_,C=u*g,y=u*_,S=d*_,I=m*h,O=m*g,A=m*_,U=r.x,L=r.y,B=r.z;return o[0]=(1-(C+S))*U,o[1]=(x+A)*U,o[2]=(b-O)*U,o[3]=0,o[4]=(x-A)*L,o[5]=(1-(v+S))*L,o[6]=(y+I)*L,o[7]=0,o[8]=(b+O)*B,o[9]=(y-I)*B,o[10]=(1-(v+C))*B,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,i,r){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const c=this.determinantAffine();if(c===0)return r.set(1,1,1),i.identity(),this;let u=Eo.set(o[0],o[1],o[2]).length();const d=Eo.set(o[4],o[5],o[6]).length(),m=Eo.set(o[8],o[9],o[10]).length();c<0&&(u=-u),da.copy(this);const h=1/u,g=1/d,_=1/m;return da.elements[0]*=h,da.elements[1]*=h,da.elements[2]*=h,da.elements[4]*=g,da.elements[5]*=g,da.elements[6]*=g,da.elements[8]*=_,da.elements[9]*=_,da.elements[10]*=_,i.setFromRotationMatrix(da),r.x=u,r.y=d,r.z=m,this}makePerspective(e,i,r,o,c,u,d=Na,m=!1){const h=this.elements,g=2*c/(i-e),_=2*c/(r-o),v=(i+e)/(i-e),x=(r+o)/(r-o);let b,C;if(m)b=c/(u-c),C=u*c/(u-c);else if(d===Na)b=-(u+c)/(u-c),C=-2*u*c/(u-c);else if(d===Qu)b=-u/(u-c),C=-u*c/(u-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return h[0]=g,h[4]=0,h[8]=v,h[12]=0,h[1]=0,h[5]=_,h[9]=x,h[13]=0,h[2]=0,h[6]=0,h[10]=b,h[14]=C,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,i,r,o,c,u,d=Na,m=!1){const h=this.elements,g=2/(i-e),_=2/(r-o),v=-(i+e)/(i-e),x=-(r+o)/(r-o);let b,C;if(m)b=1/(u-c),C=u/(u-c);else if(d===Na)b=-2/(u-c),C=-(u+c)/(u-c);else if(d===Qu)b=-1/(u-c),C=-c/(u-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return h[0]=g,h[4]=0,h[8]=0,h[12]=v,h[1]=0,h[5]=_,h[9]=0,h[13]=x,h[2]=0,h[6]=0,h[10]=b,h[14]=C,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let o=0;o<16;o++)if(i[o]!==r[o])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}};af.prototype.isMatrix4=!0;let On=af;const Eo=new te,da=new On,eb=new te(0,0,0),tb=new te(1,1,1),Ws=new te,_u=new te,Bi=new te,Cv=new On,wv=new jo;class Or{constructor(e=0,i=0,r=0,o=Or.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,o=this._order){return this._x=e,this._y=i,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const o=e.elements,c=o[0],u=o[4],d=o[8],m=o[1],h=o[5],g=o[9],_=o[2],v=o[6],x=o[10];switch(i){case"XYZ":this._y=Math.asin(At(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,x),this._z=Math.atan2(-u,c)):(this._x=Math.atan2(v,h),this._z=0);break;case"YXZ":this._x=Math.asin(-At(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,x),this._z=Math.atan2(m,h)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(At(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-_,x),this._z=Math.atan2(-u,h)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-At(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(v,x),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-u,h));break;case"YZX":this._z=Math.asin(At(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,h),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(d,x));break;case"XZY":this._z=Math.asin(-At(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(v,h),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-g,x),this._y=0);break;default:ft("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return Cv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Cv,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return wv.setFromEuler(this),this.setFromQuaternion(wv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Or.DEFAULT_ORDER="XYZ";class pS{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let nb=0;const Dv=new te,bo=new jo,rs=new On,vu=new te,zl=new te,ib=new te,ab=new jo,Lv=new te(1,0,0),Nv=new te(0,1,0),Uv=new te(0,0,1),Ov={type:"added"},sb={type:"removed"},To={type:"childadded",child:null},wh={type:"childremoved",child:null};class Hi extends Pr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:nb++}),this.uuid=qo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Hi.DEFAULT_UP.clone();const e=new te,i=new Or,r=new jo,o=new te(1,1,1);function c(){r.setFromEuler(i,!1)}function u(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new On},normalMatrix:{value:new gt}}),this.matrix=new On,this.matrixWorld=new On,this.matrixAutoUpdate=Hi.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Hi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new pS,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return bo.setFromAxisAngle(e,i),this.quaternion.multiply(bo),this}rotateOnWorldAxis(e,i){return bo.setFromAxisAngle(e,i),this.quaternion.premultiply(bo),this}rotateX(e){return this.rotateOnAxis(Lv,e)}rotateY(e){return this.rotateOnAxis(Nv,e)}rotateZ(e){return this.rotateOnAxis(Uv,e)}translateOnAxis(e,i){return Dv.copy(e).applyQuaternion(this.quaternion),this.position.add(Dv.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(Lv,e)}translateY(e){return this.translateOnAxis(Nv,e)}translateZ(e){return this.translateOnAxis(Uv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(rs.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?vu.copy(e):vu.set(e,i,r);const o=this.parent;this.updateWorldMatrix(!0,!1),zl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?rs.lookAt(zl,vu,this.up):rs.lookAt(vu,zl,this.up),this.quaternion.setFromRotationMatrix(rs),o&&(rs.extractRotation(o.matrixWorld),bo.setFromRotationMatrix(rs),this.quaternion.premultiply(bo.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(zt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ov),To.child=e,this.dispatchEvent(To),To.child=null):zt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(sb),wh.child=e,this.dispatchEvent(wh),wh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),rs.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),rs.multiply(e.parent.matrixWorld)),e.applyMatrix4(rs),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ov),To.child=e,this.dispatchEvent(To),To.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,o=this.children.length;r<o;r++){const u=this.children[r].getObjectByProperty(e,i);if(u!==void 0)return u}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const o=this.children;for(let c=0,u=o.length;c<u;c++)o[c].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zl,e,ib),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zl,ab,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const i=e.x,r=e.y,o=e.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*r-c[8]*o,c[13]+=r-c[1]*i-c[5]*r-c[9]*o,c[14]+=o-c[2]*i-c[6]*r-c[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i,r=!1){const o=this.parent;if(e===!0&&o!==null&&o.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),i===!0){const c=this.children;for(let u=0,d=c.length;u<d;u++)c[u].updateWorldMatrix(!1,!0,r)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),this.static!==!1&&(o.static=this.static),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(d=>({...d})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function c(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=c(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let h=0,g=m.length;h<g;h++){const _=m[h];c(e.shapes,_)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,h=this.material.length;m<h;m++)d.push(c(e.materials,this.material[m]));o.material=d}else o.material=c(e.materials,this.material);if(this.children.length>0){o.children=[];for(let d=0;d<this.children.length;d++)o.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];o.animations.push(c(e.animations,m))}}if(i){const d=u(e.geometries),m=u(e.materials),h=u(e.textures),g=u(e.images),_=u(e.shapes),v=u(e.skeletons),x=u(e.animations),b=u(e.nodes);d.length>0&&(r.geometries=d),m.length>0&&(r.materials=m),h.length>0&&(r.textures=h),g.length>0&&(r.images=g),_.length>0&&(r.shapes=_),v.length>0&&(r.skeletons=v),x.length>0&&(r.animations=x),b.length>0&&(r.nodes=b)}return r.object=o,r;function u(d){const m=[];for(const h in d){const g=d[h];delete g.metadata,m.push(g)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}Hi.DEFAULT_UP=new te(0,1,0);Hi.DEFAULT_MATRIX_AUTO_UPDATE=!0;Hi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Yl extends Hi{constructor(){super(),this.isGroup=!0,this.type="Group"}}const rb={type:"move"};class Dh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Yl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Yl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new te,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new te),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Yl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new te,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new te,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let o=null,c=null,u=null;const d=this._targetRay,m=this._grip,h=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(h&&e.hand){u=!0;for(const C of e.hand.values()){const y=i.getJointPose(C,r),S=this._getHandJoint(h,C);y!==null&&(S.matrix.fromArray(y.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=y.radius),S.visible=y!==null}const g=h.joints["index-finger-tip"],_=h.joints["thumb-tip"],v=g.position.distanceTo(_.position),x=.02,b=.005;h.inputState.pinching&&v>x+b?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&v<=x-b&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,r),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1,m.eventsEnabled&&m.dispatchEvent({type:"gripUpdated",data:e,target:this})));d!==null&&(o=i.getPose(e.targetRaySpace,r),o===null&&c!==null&&(o=c),o!==null&&(d.matrix.fromArray(o.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,o.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(o.linearVelocity)):d.hasLinearVelocity=!1,o.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(o.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(rb)))}return d!==null&&(d.visible=o!==null),m!==null&&(m.visible=c!==null),h!==null&&(h.visible=u!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new Yl;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}const mS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ys={h:0,s:0,l:0},xu={h:0,s:0,l:0};function Lh(a,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?a+(e-a)*6*i:i<1/2?e:i<2/3?a+(e-a)*6*(2/3-i):a}class Qt{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=fi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Pt.colorSpaceToWorking(this,i),this}setRGB(e,i,r,o=Pt.workingColorSpace){return this.r=e,this.g=i,this.b=r,Pt.colorSpaceToWorking(this,o),this}setHSL(e,i,r,o=Pt.workingColorSpace){if(e=pm(e,1),i=At(i,0,1),r=At(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,u=2*r-c;this.r=Lh(u,c,e+1/3),this.g=Lh(u,c,e),this.b=Lh(u,c,e-1/3)}return Pt.colorSpaceToWorking(this,o),this}setStyle(e,i=fi){function r(c){c!==void 0&&parseFloat(c)<1&&ft("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const u=o[1],d=o[2];switch(u){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:ft("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=o[1],u=c.length;if(u===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(u===6)return this.setHex(parseInt(c,16),i);ft("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=fi){const r=mS[e.toLowerCase()];return r!==void 0?this.setHex(r,i):ft("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=hs(e.r),this.g=hs(e.g),this.b=hs(e.b),this}copyLinearToSRGB(e){return this.r=zo(e.r),this.g=zo(e.g),this.b=zo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=fi){return Pt.workingToColorSpace(ui.copy(this),e),Math.round(At(ui.r*255,0,255))*65536+Math.round(At(ui.g*255,0,255))*256+Math.round(At(ui.b*255,0,255))}getHexString(e=fi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Pt.workingColorSpace){Pt.workingToColorSpace(ui.copy(this),i);const r=ui.r,o=ui.g,c=ui.b,u=Math.max(r,o,c),d=Math.min(r,o,c);let m,h;const g=(d+u)/2;if(d===u)m=0,h=0;else{const _=u-d;switch(h=g<=.5?_/(u+d):_/(2-u-d),u){case r:m=(o-c)/_+(o<c?6:0);break;case o:m=(c-r)/_+2;break;case c:m=(r-o)/_+4;break}m/=6}return e.h=m,e.s=h,e.l=g,e}getRGB(e,i=Pt.workingColorSpace){return Pt.workingToColorSpace(ui.copy(this),i),e.r=ui.r,e.g=ui.g,e.b=ui.b,e}getStyle(e=fi){Pt.workingToColorSpace(ui.copy(this),e);const i=ui.r,r=ui.g,o=ui.b;return e!==fi?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,i,r){return this.getHSL(Ys),this.setHSL(Ys.h+e,Ys.s+i,Ys.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(Ys),e.getHSL(xu);const r=Ql(Ys.h,xu.h,i),o=Ql(Ys.s,xu.s,i),c=Ql(Ys.l,xu.l,i);return this.setHSL(r,o,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,o=this.b,c=e.elements;return this.r=c[0]*i+c[3]*r+c[6]*o,this.g=c[1]*i+c[4]*r+c[7]*o,this.b=c[2]*i+c[5]*r+c[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ui=new Qt;Qt.NAMES=mS;class ob extends Hi{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Or,this.environmentIntensity=1,this.environmentRotation=new Or,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const ha=new te,os=new te,Nh=new te,ls=new te,Ao=new te,Ro=new te,Pv=new te,Uh=new te,Oh=new te,Ph=new te,Ih=new Cn,Bh=new Cn,Fh=new Cn;class ga{constructor(e=new te,i=new te,r=new te){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,o){o.subVectors(r,i),ha.subVectors(e,i),o.cross(ha);const c=o.lengthSq();return c>0?o.multiplyScalar(1/Math.sqrt(c)):o.set(0,0,0)}static getBarycoord(e,i,r,o,c){ha.subVectors(o,i),os.subVectors(r,i),Nh.subVectors(e,i);const u=ha.dot(ha),d=ha.dot(os),m=ha.dot(Nh),h=os.dot(os),g=os.dot(Nh),_=u*h-d*d;if(_===0)return c.set(0,0,0),null;const v=1/_,x=(h*m-d*g)*v,b=(u*g-d*m)*v;return c.set(1-x-b,b,x)}static containsPoint(e,i,r,o){return this.getBarycoord(e,i,r,o,ls)===null?!1:ls.x>=0&&ls.y>=0&&ls.x+ls.y<=1}static getInterpolation(e,i,r,o,c,u,d,m){return this.getBarycoord(e,i,r,o,ls)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,ls.x),m.addScaledVector(u,ls.y),m.addScaledVector(d,ls.z),m)}static getInterpolatedAttribute(e,i,r,o,c,u){return Ih.setScalar(0),Bh.setScalar(0),Fh.setScalar(0),Ih.fromBufferAttribute(e,i),Bh.fromBufferAttribute(e,r),Fh.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(Ih,c.x),u.addScaledVector(Bh,c.y),u.addScaledVector(Fh,c.z),u}static isFrontFacing(e,i,r,o){return ha.subVectors(r,i),os.subVectors(e,i),ha.cross(os).dot(o)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,o){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,i,r,o){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ha.subVectors(this.c,this.b),os.subVectors(this.a,this.b),ha.cross(os).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ga.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return ga.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,o,c){return ga.getInterpolation(e,this.a,this.b,this.c,i,r,o,c)}containsPoint(e){return ga.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ga.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,o=this.b,c=this.c;let u,d;Ao.subVectors(o,r),Ro.subVectors(c,r),Uh.subVectors(e,r);const m=Ao.dot(Uh),h=Ro.dot(Uh);if(m<=0&&h<=0)return i.copy(r);Oh.subVectors(e,o);const g=Ao.dot(Oh),_=Ro.dot(Oh);if(g>=0&&_<=g)return i.copy(o);const v=m*_-g*h;if(v<=0&&m>=0&&g<=0)return u=m/(m-g),i.copy(r).addScaledVector(Ao,u);Ph.subVectors(e,c);const x=Ao.dot(Ph),b=Ro.dot(Ph);if(b>=0&&x<=b)return i.copy(c);const C=x*h-m*b;if(C<=0&&h>=0&&b<=0)return d=h/(h-b),i.copy(r).addScaledVector(Ro,d);const y=g*b-x*_;if(y<=0&&_-g>=0&&x-b>=0)return Pv.subVectors(c,o),d=(_-g)/(_-g+(x-b)),i.copy(o).addScaledVector(Pv,d);const S=1/(y+C+v);return u=C*S,d=v*S,i.copy(r).addScaledVector(Ao,u).addScaledVector(Ro,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class sc{constructor(e=new te(1/0,1/0,1/0),i=new te(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(pa.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(pa.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=pa.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let u=0,d=c.count;u<d;u++)e.isMesh===!0?e.getVertexPosition(u,pa):pa.fromBufferAttribute(c,u),pa.applyMatrix4(e.matrixWorld),this.expandByPoint(pa);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Su.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Su.copy(r.boundingBox)),Su.applyMatrix4(e.matrixWorld),this.union(Su)}const o=e.children;for(let c=0,u=o.length;c<u;c++)this.expandByObject(o[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,pa),pa.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Hl),Mu.subVectors(this.max,Hl),Co.subVectors(e.a,Hl),wo.subVectors(e.b,Hl),Do.subVectors(e.c,Hl),qs.subVectors(wo,Co),js.subVectors(Do,wo),br.subVectors(Co,Do);let i=[0,-qs.z,qs.y,0,-js.z,js.y,0,-br.z,br.y,qs.z,0,-qs.x,js.z,0,-js.x,br.z,0,-br.x,-qs.y,qs.x,0,-js.y,js.x,0,-br.y,br.x,0];return!zh(i,Co,wo,Do,Mu)||(i=[1,0,0,0,1,0,0,0,1],!zh(i,Co,wo,Do,Mu))?!1:(yu.crossVectors(qs,js),i=[yu.x,yu.y,yu.z],zh(i,Co,wo,Do,Mu))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,pa).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(pa).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(cs[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),cs[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),cs[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),cs[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),cs[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),cs[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),cs[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),cs[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(cs),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const cs=[new te,new te,new te,new te,new te,new te,new te,new te],pa=new te,Su=new sc,Co=new te,wo=new te,Do=new te,qs=new te,js=new te,br=new te,Hl=new te,Mu=new te,yu=new te,Tr=new te;function zh(a,e,i,r,o){for(let c=0,u=a.length-3;c<=u;c+=3){Tr.fromArray(a,c);const d=o.x*Math.abs(Tr.x)+o.y*Math.abs(Tr.y)+o.z*Math.abs(Tr.z),m=e.dot(Tr),h=i.dot(Tr),g=r.dot(Tr);if(Math.max(-Math.max(m,h,g),Math.min(m,h,g))>d)return!1}return!0}const Gn=new te,Eu=new Yt;let lb=0;class Pa extends Pr{constructor(e,i,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:lb++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=Sv,this.updateRanges=[],this.gpuType=La,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let o=0,c=this.itemSize;o<c;o++)this.array[e+o]=i.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)Eu.fromBufferAttribute(this,i),Eu.applyMatrix3(e),this.setXY(i,Eu.x,Eu.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)Gn.fromBufferAttribute(this,i),Gn.applyMatrix3(e),this.setXYZ(i,Gn.x,Gn.y,Gn.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)Gn.fromBufferAttribute(this,i),Gn.applyMatrix4(e),this.setXYZ(i,Gn.x,Gn.y,Gn.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)Gn.fromBufferAttribute(this,i),Gn.applyNormalMatrix(e),this.setXYZ(i,Gn.x,Gn.y,Gn.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)Gn.fromBufferAttribute(this,i),Gn.transformDirection(e),this.setXYZ(i,Gn.x,Gn.y,Gn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=Po(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=_i(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Po(i,this.array)),i}setX(e,i){return this.normalized&&(i=_i(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Po(i,this.array)),i}setY(e,i){return this.normalized&&(i=_i(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Po(i,this.array)),i}setZ(e,i){return this.normalized&&(i=_i(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Po(i,this.array)),i}setW(e,i){return this.normalized&&(i=_i(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=_i(i,this.array),r=_i(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,o){return e*=this.itemSize,this.normalized&&(i=_i(i,this.array),r=_i(r,this.array),o=_i(o,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,i,r,o,c){return e*=this.itemSize,this.normalized&&(i=_i(i,this.array),r=_i(r,this.array),o=_i(o,this.array),c=_i(c,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Sv&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class gS extends Pa{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class _S extends Pa{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class ia extends Pa{constructor(e,i,r){super(new Float32Array(e),i,r)}}const cb=new sc,Gl=new te,Hh=new te;class gm{constructor(e=new te,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):cb.setFromPoints(e).getCenter(r);let o=0;for(let c=0,u=e.length;c<u;c++)o=Math.max(o,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Gl.subVectors(e,this.center);const i=Gl.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),o=(r-this.radius)*.5;this.center.addScaledVector(Gl,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Hh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Gl.copy(e.center).add(Hh)),this.expandByPoint(Gl.copy(e.center).sub(Hh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let ub=0;const ea=new On,Gh=new Hi,Lo=new te,Fi=new sc,Vl=new sc,Jn=new te;class aa extends Pr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ub++}),this.uuid=qo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(CE(e)?_S:gS)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new gt().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return ea.makeRotationFromQuaternion(e),this.applyMatrix4(ea),this}rotateX(e){return ea.makeRotationX(e),this.applyMatrix4(ea),this}rotateY(e){return ea.makeRotationY(e),this.applyMatrix4(ea),this}rotateZ(e){return ea.makeRotationZ(e),this.applyMatrix4(ea),this}translate(e,i,r){return ea.makeTranslation(e,i,r),this.applyMatrix4(ea),this}scale(e,i,r){return ea.makeScale(e,i,r),this.applyMatrix4(ea),this}lookAt(e){return Gh.lookAt(e),Gh.updateMatrix(),this.applyMatrix4(Gh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Lo).negate(),this.translate(Lo.x,Lo.y,Lo.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let o=0,c=e.length;o<c;o++){const u=e[o];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new ia(r,3))}else{const r=Math.min(e.length,i.count);for(let o=0;o<r;o++){const c=e[o];i.setXYZ(o,c.x,c.y,c.z||0)}e.length>i.count&&ft("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new sc);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){zt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new te(-1/0,-1/0,-1/0),new te(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,o=i.length;r<o;r++){const c=i[r];Fi.setFromBufferAttribute(c),this.morphTargetsRelative?(Jn.addVectors(this.boundingBox.min,Fi.min),this.boundingBox.expandByPoint(Jn),Jn.addVectors(this.boundingBox.max,Fi.max),this.boundingBox.expandByPoint(Jn)):(this.boundingBox.expandByPoint(Fi.min),this.boundingBox.expandByPoint(Fi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&zt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new gm);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){zt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new te,1/0);return}if(e){const r=this.boundingSphere.center;if(Fi.setFromBufferAttribute(e),i)for(let c=0,u=i.length;c<u;c++){const d=i[c];Vl.setFromBufferAttribute(d),this.morphTargetsRelative?(Jn.addVectors(Fi.min,Vl.min),Fi.expandByPoint(Jn),Jn.addVectors(Fi.max,Vl.max),Fi.expandByPoint(Jn)):(Fi.expandByPoint(Vl.min),Fi.expandByPoint(Vl.max))}Fi.getCenter(r);let o=0;for(let c=0,u=e.count;c<u;c++)Jn.fromBufferAttribute(e,c),o=Math.max(o,r.distanceToSquared(Jn));if(i)for(let c=0,u=i.length;c<u;c++){const d=i[c],m=this.morphTargetsRelative;for(let h=0,g=d.count;h<g;h++)Jn.fromBufferAttribute(d,h),m&&(Lo.fromBufferAttribute(e,h),Jn.add(Lo)),o=Math.max(o,r.distanceToSquared(Jn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&zt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){zt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,o=i.normal,c=i.uv;let u=this.getAttribute("tangent");(u===void 0||u.count!==r.count)&&(u=new Pa(new Float32Array(4*r.count),4),this.setAttribute("tangent",u));const d=[],m=[];for(let E=0;E<r.count;E++)d[E]=new te,m[E]=new te;const h=new te,g=new te,_=new te,v=new Yt,x=new Yt,b=new Yt,C=new te,y=new te;function S(E,N,V){h.fromBufferAttribute(r,E),g.fromBufferAttribute(r,N),_.fromBufferAttribute(r,V),v.fromBufferAttribute(c,E),x.fromBufferAttribute(c,N),b.fromBufferAttribute(c,V),g.sub(h),_.sub(h),x.sub(v),b.sub(v);const H=1/(x.x*b.y-b.x*x.y);isFinite(H)&&(C.copy(g).multiplyScalar(b.y).addScaledVector(_,-x.y).multiplyScalar(H),y.copy(_).multiplyScalar(x.x).addScaledVector(g,-b.x).multiplyScalar(H),d[E].add(C),d[N].add(C),d[V].add(C),m[E].add(y),m[N].add(y),m[V].add(y))}let I=this.groups;I.length===0&&(I=[{start:0,count:e.count}]);for(let E=0,N=I.length;E<N;++E){const V=I[E],H=V.start,Y=V.count;for(let he=H,ue=H+Y;he<ue;he+=3)S(e.getX(he+0),e.getX(he+1),e.getX(he+2))}const O=new te,A=new te,U=new te,L=new te;function B(E){U.fromBufferAttribute(o,E),L.copy(U);const N=d[E];O.copy(N),O.sub(U.multiplyScalar(U.dot(N))).normalize(),A.crossVectors(L,N);const H=A.dot(m[E])<0?-1:1;u.setXYZW(E,O.x,O.y,O.z,H)}for(let E=0,N=I.length;E<N;++E){const V=I[E],H=V.start,Y=V.count;for(let he=H,ue=H+Y;he<ue;he+=3)B(e.getX(he+0)),B(e.getX(he+1)),B(e.getX(he+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==i.count)r=new Pa(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let v=0,x=r.count;v<x;v++)r.setXYZ(v,0,0,0);const o=new te,c=new te,u=new te,d=new te,m=new te,h=new te,g=new te,_=new te;if(e)for(let v=0,x=e.count;v<x;v+=3){const b=e.getX(v+0),C=e.getX(v+1),y=e.getX(v+2);o.fromBufferAttribute(i,b),c.fromBufferAttribute(i,C),u.fromBufferAttribute(i,y),g.subVectors(u,c),_.subVectors(o,c),g.cross(_),d.fromBufferAttribute(r,b),m.fromBufferAttribute(r,C),h.fromBufferAttribute(r,y),d.add(g),m.add(g),h.add(g),r.setXYZ(b,d.x,d.y,d.z),r.setXYZ(C,m.x,m.y,m.z),r.setXYZ(y,h.x,h.y,h.z)}else for(let v=0,x=i.count;v<x;v+=3)o.fromBufferAttribute(i,v+0),c.fromBufferAttribute(i,v+1),u.fromBufferAttribute(i,v+2),g.subVectors(u,c),_.subVectors(o,c),g.cross(_),r.setXYZ(v+0,g.x,g.y,g.z),r.setXYZ(v+1,g.x,g.y,g.z),r.setXYZ(v+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)Jn.fromBufferAttribute(e,i),Jn.normalize(),e.setXYZ(i,Jn.x,Jn.y,Jn.z)}toNonIndexed(){function e(d,m){const h=d.array,g=d.itemSize,_=d.normalized,v=new h.constructor(m.length*g);let x=0,b=0;for(let C=0,y=m.length;C<y;C++){d.isInterleavedBufferAttribute?x=m[C]*d.data.stride+d.offset:x=m[C]*g;for(let S=0;S<g;S++)v[b++]=h[x++]}return new Pa(v,g,_)}if(this.index===null)return ft("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new aa,r=this.index.array,o=this.attributes;for(const d in o){const m=o[d],h=e(m,r);i.setAttribute(d,h)}const c=this.morphAttributes;for(const d in c){const m=[],h=c[d];for(let g=0,_=h.length;g<_;g++){const v=h[g],x=e(v,r);m.push(x)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let d=0,m=u.length;d<m;d++){const h=u[d];i.addGroup(h.start,h.count,h.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const m=this.parameters;for(const h in m)m[h]!==void 0&&(e[h]=m[h]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const h=r[m];e.data.attributes[m]=h.toJSON(e.data)}const o={};let c=!1;for(const m in this.morphAttributes){const h=this.morphAttributes[m],g=[];for(let _=0,v=h.length;_<v;_++){const x=h[_];g.push(x.toJSON(e.data))}g.length>0&&(o[m]=g,c=!0)}c&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const h in o){const g=o[h];this.setAttribute(h,g.clone(i))}const c=e.morphAttributes;for(const h in c){const g=[],_=c[h];for(let v=0,x=_.length;v<x;v++)g.push(_[v].clone(i));this.morphAttributes[h]=g}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let h=0,g=u.length;h<g;h++){const _=u[h];this.addGroup(_.start,_.count,_.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let fb=0;class rf extends Pr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:fb++}),this.uuid=qo(),this.name="",this.type="Material",this.blending=Bo,this.side=ps,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=dp,this.blendDst=hp,this.blendEquation=wr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qt(0,0,0),this.blendAlpha=0,this.depthFunc=Vo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=xv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Mo,this.stencilZFail=Mo,this.stencilZPass=Mo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){ft(`Material: parameter '${i}' has value of undefined.`);continue}const o=this[i];if(o===void 0){ft(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector2&&r&&r.isVector2||o&&o.isEuler&&r&&r.isEuler||o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Bo&&(r.blending=this.blending),this.side!==ps&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==dp&&(r.blendSrc=this.blendSrc),this.blendDst!==hp&&(r.blendDst=this.blendDst),this.blendEquation!==wr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Vo&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==xv&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Mo&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Mo&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Mo&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(c){const u=[];for(const d in c){const m=c[d];delete m.metadata,u.push(m)}return u}if(i){const c=o(e.textures),u=o(e.images);c.length>0&&(r.textures=c),u.length>0&&(r.images=u)}return r}fromJSON(e,i){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Qt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=i[e.map]||null),e.matcap!==void 0&&(this.matcap=i[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=i[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=i[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=i[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),this.normalScale=new Yt().fromArray(r)}return e.displacementMap!==void 0&&(this.displacementMap=i[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=i[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=i[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=i[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=i[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=i[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=i[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=i[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=i[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=i[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=i[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=i[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=i[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=i[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Yt().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=i[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=i[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=i[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=i[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=i[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=i[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=i[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const o=i.length;r=new Array(o);for(let c=0;c!==o;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const us=new te,Vh=new te,bu=new te,Zs=new te,kh=new te,Tu=new te,Xh=new te;class db{constructor(e=new te,i=new te(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,us)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=us.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(us.copy(this.origin).addScaledVector(this.direction,i),us.distanceToSquared(e))}distanceSqToSegment(e,i,r,o){Vh.copy(e).add(i).multiplyScalar(.5),bu.copy(i).sub(e).normalize(),Zs.copy(this.origin).sub(Vh);const c=e.distanceTo(i)*.5,u=-this.direction.dot(bu),d=Zs.dot(this.direction),m=-Zs.dot(bu),h=Zs.lengthSq(),g=Math.abs(1-u*u);let _,v,x,b;if(g>0)if(_=u*m-d,v=u*d-m,b=c*g,_>=0)if(v>=-b)if(v<=b){const C=1/g;_*=C,v*=C,x=_*(_+u*v+2*d)+v*(u*_+v+2*m)+h}else v=c,_=Math.max(0,-(u*v+d)),x=-_*_+v*(v+2*m)+h;else v=-c,_=Math.max(0,-(u*v+d)),x=-_*_+v*(v+2*m)+h;else v<=-b?(_=Math.max(0,-(-u*c+d)),v=_>0?-c:Math.min(Math.max(-c,-m),c),x=-_*_+v*(v+2*m)+h):v<=b?(_=0,v=Math.min(Math.max(-c,-m),c),x=v*(v+2*m)+h):(_=Math.max(0,-(u*c+d)),v=_>0?c:Math.min(Math.max(-c,-m),c),x=-_*_+v*(v+2*m)+h);else v=u>0?-c:c,_=Math.max(0,-(u*v+d)),x=-_*_+v*(v+2*m)+h;return r&&r.copy(this.origin).addScaledVector(this.direction,_),o&&o.copy(Vh).addScaledVector(bu,v),x}intersectSphere(e,i){us.subVectors(e.center,this.origin);const r=us.dot(this.direction),o=us.dot(us)-r*r,c=e.radius*e.radius;if(o>c)return null;const u=Math.sqrt(c-o),d=r-u,m=r+u;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,o,c,u,d,m;const h=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,v=this.origin;return h>=0?(r=(e.min.x-v.x)*h,o=(e.max.x-v.x)*h):(r=(e.max.x-v.x)*h,o=(e.min.x-v.x)*h),g>=0?(c=(e.min.y-v.y)*g,u=(e.max.y-v.y)*g):(c=(e.max.y-v.y)*g,u=(e.min.y-v.y)*g),r>u||c>o||((c>r||isNaN(r))&&(r=c),(u<o||isNaN(o))&&(o=u),_>=0?(d=(e.min.z-v.z)*_,m=(e.max.z-v.z)*_):(d=(e.max.z-v.z)*_,m=(e.min.z-v.z)*_),r>m||d>o)||((d>r||r!==r)&&(r=d),(m<o||o!==o)&&(o=m),o<0)?null:this.at(r>=0?r:o,i)}intersectsBox(e){return this.intersectBox(e,us)!==null}intersectTriangle(e,i,r,o,c){kh.subVectors(i,e),Tu.subVectors(r,e),Xh.crossVectors(kh,Tu);let u=this.direction.dot(Xh),d;if(u>0){if(o)return null;d=1}else if(u<0)d=-1,u=-u;else return null;Zs.subVectors(this.origin,e);const m=d*this.direction.dot(Tu.crossVectors(Zs,Tu));if(m<0)return null;const h=d*this.direction.dot(kh.cross(Zs));if(h<0||m+h>u)return null;const g=-d*Zs.dot(Xh);return g<0?null:this.at(g/u,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class $u extends rf{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Or,this.combine=Kx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Iv=new On,Ar=new db,Au=new gm,Bv=new te,Ru=new te,Cu=new te,wu=new te,Wh=new te,Du=new te,Fv=new te,Lu=new te;class zi extends Hi{constructor(e=new aa,i=new $u){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const o=i[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const d=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(e,i){const r=this.geometry,o=r.attributes.position,c=r.morphAttributes.position,u=r.morphTargetsRelative;i.fromBufferAttribute(o,e);const d=this.morphTargetInfluences;if(c&&d){Du.set(0,0,0);for(let m=0,h=c.length;m<h;m++){const g=d[m],_=c[m];g!==0&&(Wh.fromBufferAttribute(_,e),u?Du.addScaledVector(Wh,g):Du.addScaledVector(Wh.sub(i),g))}i.add(Du)}return i}raycast(e,i){const r=this.geometry,o=this.material,c=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Au.copy(r.boundingSphere),Au.applyMatrix4(c),Ar.copy(e.ray).recast(e.near),!(Au.containsPoint(Ar.origin)===!1&&(Ar.intersectSphere(Au,Bv)===null||Ar.origin.distanceToSquared(Bv)>(e.far-e.near)**2))&&(Iv.copy(c).invert(),Ar.copy(e.ray).applyMatrix4(Iv),!(r.boundingBox!==null&&Ar.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,Ar)))}_computeIntersections(e,i,r){let o;const c=this.geometry,u=this.material,d=c.index,m=c.attributes.position,h=c.attributes.uv,g=c.attributes.uv1,_=c.attributes.normal,v=c.groups,x=c.drawRange;if(d!==null)if(Array.isArray(u))for(let b=0,C=v.length;b<C;b++){const y=v[b],S=u[y.materialIndex],I=Math.max(y.start,x.start),O=Math.min(d.count,Math.min(y.start+y.count,x.start+x.count));for(let A=I,U=O;A<U;A+=3){const L=d.getX(A),B=d.getX(A+1),E=d.getX(A+2);o=Nu(this,S,e,r,h,g,_,L,B,E),o&&(o.faceIndex=Math.floor(A/3),o.face.materialIndex=y.materialIndex,i.push(o))}}else{const b=Math.max(0,x.start),C=Math.min(d.count,x.start+x.count);for(let y=b,S=C;y<S;y+=3){const I=d.getX(y),O=d.getX(y+1),A=d.getX(y+2);o=Nu(this,u,e,r,h,g,_,I,O,A),o&&(o.faceIndex=Math.floor(y/3),i.push(o))}}else if(m!==void 0)if(Array.isArray(u))for(let b=0,C=v.length;b<C;b++){const y=v[b],S=u[y.materialIndex],I=Math.max(y.start,x.start),O=Math.min(m.count,Math.min(y.start+y.count,x.start+x.count));for(let A=I,U=O;A<U;A+=3){const L=A,B=A+1,E=A+2;o=Nu(this,S,e,r,h,g,_,L,B,E),o&&(o.faceIndex=Math.floor(A/3),o.face.materialIndex=y.materialIndex,i.push(o))}}else{const b=Math.max(0,x.start),C=Math.min(m.count,x.start+x.count);for(let y=b,S=C;y<S;y+=3){const I=y,O=y+1,A=y+2;o=Nu(this,u,e,r,h,g,_,I,O,A),o&&(o.faceIndex=Math.floor(y/3),i.push(o))}}}}function hb(a,e,i,r,o,c,u,d){let m;if(e.side===Ci?m=r.intersectTriangle(u,c,o,!0,d):m=r.intersectTriangle(o,c,u,e.side===ps,d),m===null)return null;Lu.copy(d),Lu.applyMatrix4(a.matrixWorld);const h=i.ray.origin.distanceTo(Lu);return h<i.near||h>i.far?null:{distance:h,point:Lu.clone(),object:a}}function Nu(a,e,i,r,o,c,u,d,m,h){a.getVertexPosition(d,Ru),a.getVertexPosition(m,Cu),a.getVertexPosition(h,wu);const g=hb(a,e,i,r,Ru,Cu,wu,Fv);if(g){const _=new te;ga.getBarycoord(Fv,Ru,Cu,wu,_),o&&(g.uv=ga.getInterpolatedAttribute(o,d,m,h,_,new Yt)),c&&(g.uv1=ga.getInterpolatedAttribute(c,d,m,h,_,new Yt)),u&&(g.normal=ga.getInterpolatedAttribute(u,d,m,h,_,new te),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const v={a:d,b:m,c:h,normal:new te,materialIndex:0};ga.getNormal(Ru,Cu,wu,v.normal),g.face=v,g.barycoord=_}return g}class pb extends di{constructor(e=null,i=1,r=1,o,c,u,d,m,h=ri,g=ri,_,v){super(null,u,d,m,h,g,o,c,_,v),this.isDataTexture=!0,this.image={data:e,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Yh=new te,mb=new te,gb=new gt;class Cr{constructor(e=new te(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,o){return this.normal.set(e,i,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const o=Yh.subVectors(r,i).cross(mb.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i,r=!0){const o=e.delta(Yh),c=this.normal.dot(o);if(c===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/c;return r===!0&&(u<0||u>1)?null:i.copy(e.start).addScaledVector(o,u)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||gb.getNormalMatrix(e),o=this.coplanarPoint(Yh).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Rr=new gm,_b=new Yt(.5,.5),Uu=new te;class vS{constructor(e=new Cr,i=new Cr,r=new Cr,o=new Cr,c=new Cr,u=new Cr){this.planes=[e,i,r,o,c,u]}set(e,i,r,o,c,u){const d=this.planes;return d[0].copy(e),d[1].copy(i),d[2].copy(r),d[3].copy(o),d[4].copy(c),d[5].copy(u),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=Na,r=!1){const o=this.planes,c=e.elements,u=c[0],d=c[1],m=c[2],h=c[3],g=c[4],_=c[5],v=c[6],x=c[7],b=c[8],C=c[9],y=c[10],S=c[11],I=c[12],O=c[13],A=c[14],U=c[15];if(o[0].setComponents(h-u,x-g,S-b,U-I).normalize(),o[1].setComponents(h+u,x+g,S+b,U+I).normalize(),o[2].setComponents(h+d,x+_,S+C,U+O).normalize(),o[3].setComponents(h-d,x-_,S-C,U-O).normalize(),r)o[4].setComponents(m,v,y,A).normalize(),o[5].setComponents(h-m,x-v,S-y,U-A).normalize();else if(o[4].setComponents(h-m,x-v,S-y,U-A).normalize(),i===Na)o[5].setComponents(h+m,x+v,S+y,U+A).normalize();else if(i===Qu)o[5].setComponents(m,v,y,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Rr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Rr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Rr)}intersectsSprite(e){Rr.center.set(0,0,0);const i=_b.distanceTo(e.center);return Rr.radius=.7071067811865476+i,Rr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Rr)}intersectsSphere(e){const i=this.planes,r=e.center,o=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const o=i[r];if(Uu.x=o.normal.x>0?e.max.x:e.min.x,Uu.y=o.normal.y>0?e.max.y:e.min.y,Uu.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Uu)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class xS extends di{constructor(e=[],i=Nr,r,o,c,u,d,m,h,g){super(e,i,r,o,c,u,d,m,h,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class _m extends di{constructor(e,i,r,o,c,u,d,m,h){super(e,i,r,o,c,u,d,m,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Xo extends di{constructor(e,i,r=Ia,o,c,u,d=ri,m=ri,h,g=gs,_=1){if(g!==gs&&g!==Lr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:e,height:i,depth:_};super(v,o,c,u,d,m,g,r,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new mm(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class vb extends Xo{constructor(e,i=Ia,r=Nr,o,c,u=ri,d=ri,m,h=gs){const g={width:e,height:e,depth:1},_=[g,g,g,g,g,g];super(e,e,i,r,o,c,u,d,m,h),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class SS extends di{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class rc extends aa{constructor(e=1,i=1,r=1,o=1,c=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:o,heightSegments:c,depthSegments:u};const d=this;o=Math.floor(o),c=Math.floor(c),u=Math.floor(u);const m=[],h=[],g=[],_=[];let v=0,x=0;b("z","y","x",-1,-1,r,i,e,u,c,0),b("z","y","x",1,-1,r,i,-e,u,c,1),b("x","z","y",1,1,e,r,i,o,u,2),b("x","z","y",1,-1,e,r,-i,o,u,3),b("x","y","z",1,-1,e,i,r,o,c,4),b("x","y","z",-1,-1,e,i,-r,o,c,5),this.setIndex(m),this.setAttribute("position",new ia(h,3)),this.setAttribute("normal",new ia(g,3)),this.setAttribute("uv",new ia(_,2));function b(C,y,S,I,O,A,U,L,B,E,N){const V=A/B,H=U/E,Y=A/2,he=U/2,ue=L/2,X=B+1,z=E+1;let G=0,J=0;const fe=new te;for(let xe=0;xe<z;xe++){const P=xe*H-he;for(let K=0;K<X;K++){const ye=K*V-Y;fe[C]=ye*I,fe[y]=P*O,fe[S]=ue,h.push(fe.x,fe.y,fe.z),fe[C]=0,fe[y]=0,fe[S]=L>0?1:-1,g.push(fe.x,fe.y,fe.z),_.push(K/B),_.push(1-xe/E),G+=1}}for(let xe=0;xe<E;xe++)for(let P=0;P<B;P++){const K=v+P+X*xe,ye=v+P+X*(xe+1),Ce=v+(P+1)+X*(xe+1),ze=v+(P+1)+X*xe;m.push(K,ye,ze),m.push(ye,Ce,ze),J+=6}d.addGroup(x,J,N),x+=J,v+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rc(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class xb{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){ft("Curve: .getPoint() not implemented.")}getPointAt(e,i){const r=this.getUtoTmapping(e);return this.getPoint(r,i)}getPoints(e=5){const i=[];for(let r=0;r<=e;r++)i.push(this.getPoint(r/e));return i}getSpacedPoints(e=5){const i=[];for(let r=0;r<=e;r++)i.push(this.getPointAt(r/e));return i}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const i=[];let r,o=this.getPoint(0),c=0;i.push(0);for(let u=1;u<=e;u++)r=this.getPoint(u/e),c+=r.distanceTo(o),i.push(c),o=r;return this.cacheArcLengths=i,i}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,i=null){const r=this.getLengths();let o=0;const c=r.length;let u;i?u=i:u=e*r[c-1];let d=0,m=c-1,h;for(;d<=m;)if(o=Math.floor(d+(m-d)/2),h=r[o]-u,h<0)d=o+1;else if(h>0)m=o-1;else{m=o;break}if(o=m,r[o]===u)return o/(c-1);const g=r[o],v=r[o+1]-g,x=(u-g)/v;return(o+x)/(c-1)}getTangent(e,i){let o=e-1e-4,c=e+1e-4;o<0&&(o=0),c>1&&(c=1);const u=this.getPoint(o),d=this.getPoint(c),m=i||(u.isVector2?new Yt:new te);return m.copy(d).sub(u).normalize(),m}getTangentAt(e,i){const r=this.getUtoTmapping(e);return this.getTangent(r,i)}computeFrenetFrames(e,i=!1){const r=new te,o=[],c=[],u=[],d=new te,m=new On;for(let x=0;x<=e;x++){const b=x/e;o[x]=this.getTangentAt(b,new te)}c[0]=new te,u[0]=new te;let h=Number.MAX_VALUE;const g=Math.abs(o[0].x),_=Math.abs(o[0].y),v=Math.abs(o[0].z);g<=h&&(h=g,r.set(1,0,0)),_<=h&&(h=_,r.set(0,1,0)),v<=h&&r.set(0,0,1),d.crossVectors(o[0],r).normalize(),c[0].crossVectors(o[0],d),u[0].crossVectors(o[0],c[0]);for(let x=1;x<=e;x++){if(c[x]=c[x-1].clone(),u[x]=u[x-1].clone(),d.crossVectors(o[x-1],o[x]),d.length()>Number.EPSILON){d.normalize();const b=Math.acos(At(o[x-1].dot(o[x]),-1,1));c[x].applyMatrix4(m.makeRotationAxis(d,b))}u[x].crossVectors(o[x],c[x])}if(i===!0){let x=Math.acos(At(c[0].dot(c[e]),-1,1));x/=e,o[0].dot(d.crossVectors(c[0],c[e]))>0&&(x=-x);for(let b=1;b<=e;b++)c[b].applyMatrix4(m.makeRotationAxis(o[b],x*b)),u[b].crossVectors(o[b],c[b])}return{tangents:o,normals:c,binormals:u}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}function vm(){let a=0,e=0,i=0,r=0;function o(c,u,d,m){a=c,e=d,i=-3*c+3*u-2*d-m,r=2*c-2*u+d+m}return{initCatmullRom:function(c,u,d,m,h){o(u,d,h*(d-c),h*(m-u))},initNonuniformCatmullRom:function(c,u,d,m,h,g,_){let v=(u-c)/h-(d-c)/(h+g)+(d-u)/g,x=(d-u)/g-(m-u)/(g+_)+(m-d)/_;v*=g,x*=g,o(u,d,v,x)},calc:function(c){const u=c*c,d=u*c;return a+e*c+i*u+r*d}}}const zv=new te,Hv=new te,qh=new vm,jh=new vm,Zh=new vm;class Sb extends xb{constructor(e=[],i=!1,r="centripetal",o=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=i,this.curveType=r,this.tension=o}getPoint(e,i=new te){const r=i,o=this.points,c=o.length,u=(c-(this.closed?0:1))*e;let d=Math.floor(u),m=u-d;this.closed?d+=d>0?0:(Math.floor(Math.abs(d)/c)+1)*c:m===0&&d===c-1&&(d=c-2,m=1);let h,g;this.closed||d>0?h=o[(d-1)%c]:(Hv.subVectors(o[0],o[1]).add(o[0]),h=Hv);const _=o[d%c],v=o[(d+1)%c];if(this.closed||d+2<c?g=o[(d+2)%c]:(zv.subVectors(o[c-1],o[c-2]).add(o[c-1]),g=zv),this.curveType==="centripetal"||this.curveType==="chordal"){const x=this.curveType==="chordal"?.5:.25;let b=Math.pow(h.distanceToSquared(_),x),C=Math.pow(_.distanceToSquared(v),x),y=Math.pow(v.distanceToSquared(g),x);C<1e-4&&(C=1),b<1e-4&&(b=C),y<1e-4&&(y=C),qh.initNonuniformCatmullRom(h.x,_.x,v.x,g.x,b,C,y),jh.initNonuniformCatmullRom(h.y,_.y,v.y,g.y,b,C,y),Zh.initNonuniformCatmullRom(h.z,_.z,v.z,g.z,b,C,y)}else this.curveType==="catmullrom"&&(qh.initCatmullRom(h.x,_.x,v.x,g.x,this.tension),jh.initCatmullRom(h.y,_.y,v.y,g.y,this.tension),Zh.initCatmullRom(h.z,_.z,v.z,g.z,this.tension));return r.set(qh.calc(m),jh.calc(m),Zh.calc(m)),r}copy(e){super.copy(e),this.points=[];for(let i=0,r=e.points.length;i<r;i++){const o=e.points[i];this.points.push(o.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let i=0,r=this.points.length;i<r;i++){const o=this.points[i];e.points.push(o.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let i=0,r=e.points.length;i<r;i++){const o=e.points[i];this.points.push(new te().fromArray(o))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}class tr extends aa{constructor(e=1,i=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:o};const c=e/2,u=i/2,d=Math.floor(r),m=Math.floor(o),h=d+1,g=m+1,_=e/d,v=i/m,x=[],b=[],C=[],y=[];for(let S=0;S<g;S++){const I=S*v-u;for(let O=0;O<h;O++){const A=O*_-c;b.push(A,-I,0),C.push(0,0,1),y.push(O/d),y.push(1-S/m)}}for(let S=0;S<m;S++)for(let I=0;I<d;I++){const O=I+h*S,A=I+h*(S+1),U=I+1+h*(S+1),L=I+1+h*S;x.push(O,A,L),x.push(A,U,L)}this.setIndex(x),this.setAttribute("position",new ia(b,3)),this.setAttribute("normal",new ia(C,3)),this.setAttribute("uv",new ia(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new tr(e.width,e.height,e.widthSegments,e.heightSegments)}}function Wo(a){const e={};for(const i in a){e[i]={};for(const r in a[i]){const o=a[i][r];if(Gv(o))o.isRenderTargetTexture?(ft("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=o.clone();else if(Array.isArray(o))if(Gv(o[0])){const c=[];for(let u=0,d=o.length;u<d;u++)c[u]=o[u].clone();e[i][r]=c}else e[i][r]=o.slice();else e[i][r]=o}}return e}function vi(a){const e={};for(let i=0;i<a.length;i++){const r=Wo(a[i]);for(const o in r)e[o]=r[o]}return e}function Gv(a){return a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)}function Mb(a){const e=[];for(let i=0;i<a.length;i++)e.push(a[i].clone());return e}function MS(a){const e=a.getRenderTarget();return e===null?a.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Pt.workingColorSpace}const yb={clone:Wo,merge:vi};var Eb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,bb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class sa extends rf{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Eb,this.fragmentShader=bb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Wo(e.uniforms),this.uniformsGroups=Mb(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?i.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?i.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?i.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?i.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?i.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?i.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?i.uniforms[o]={type:"m4",value:u.toArray()}:i.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}fromJSON(e,i){if(super.fromJSON(e,i),e.uniforms!==void 0)for(const r in e.uniforms){const o=e.uniforms[r];switch(this.uniforms[r]={},o.type){case"t":this.uniforms[r].value=i[o.value]||null;break;case"c":this.uniforms[r].value=new Qt().setHex(o.value);break;case"v2":this.uniforms[r].value=new Yt().fromArray(o.value);break;case"v3":this.uniforms[r].value=new te().fromArray(o.value);break;case"v4":this.uniforms[r].value=new Cn().fromArray(o.value);break;case"m3":this.uniforms[r].value=new gt().fromArray(o.value);break;case"m4":this.uniforms[r].value=new On().fromArray(o.value);break;default:this.uniforms[r].value=o.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)this.extensions[r]=e.extensions[r];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Tb extends sa{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ab extends rf{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=SE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Rb extends rf{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Ou=new te,Pu=new jo,Aa=new te;class yS extends Hi{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new On,this.projectionMatrix=new On,this.projectionMatrixInverse=new On,this.coordinateSystem=Na,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ou,Pu,Aa),Aa.x===1&&Aa.y===1&&Aa.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ou,Pu,Aa.set(1,1,1)).invert()}updateWorldMatrix(e,i,r=!1){super.updateWorldMatrix(e,i,r),this.matrixWorld.decompose(Ou,Pu,Aa),Aa.x===1&&Aa.y===1&&Aa.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ou,Pu,Aa.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Ks=new te,Vv=new Yt,kv=new Yt;class ta extends yS{constructor(e=50,i=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=nc*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Kl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return nc*2*Math.atan(Math.tan(Kl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){Ks.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ks.x,Ks.y).multiplyScalar(-e/Ks.z),Ks.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Ks.x,Ks.y).multiplyScalar(-e/Ks.z)}getViewSize(e,i){return this.getViewBounds(e,Vv,kv),i.subVectors(kv,Vv)}setViewOffset(e,i,r,o,c,u){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Kl*.5*this.fov)/this.zoom,r=2*i,o=this.aspect*r,c=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const m=u.fullWidth,h=u.fullHeight;c+=u.offsetX*o/m,i-=u.offsetY*r/h,o*=u.width/m,r*=u.height/h}const d=this.filmOffset;d!==0&&(c+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+o,i,i-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class ES extends yS{constructor(e=-1,i=1,r=1,o=-1,c=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=o,this.near=c,this.far=u,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,o,c,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let c=r-e,u=r+e,d=o+i,m=o-i;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=h*this.view.offsetX,u=c+h*this.view.width,d-=g*this.view.offsetY,m=d-g*this.view.height}this.projectionMatrix.makeOrthographic(c,u,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const No=-90,Uo=1;class Cb extends Hi{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new ta(No,Uo,e,i);o.layers=this.layers,this.add(o);const c=new ta(No,Uo,e,i);c.layers=this.layers,this.add(c);const u=new ta(No,Uo,e,i);u.layers=this.layers,this.add(u);const d=new ta(No,Uo,e,i);d.layers=this.layers,this.add(d);const m=new ta(No,Uo,e,i);m.layers=this.layers,this.add(m);const h=new ta(No,Uo,e,i);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,o,c,u,d,m]=i;for(const h of i)this.remove(h);if(e===Na)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===Qu)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of i)this.add(h),h.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,u,d,m,h,g]=this.children,_=e.getRenderTarget(),v=e.getActiveCubeFace(),x=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const C=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let y=!1;e.isWebGLRenderer===!0?y=e.state.buffers.depth.getReversed():y=e.reversedDepthBuffer,e.setRenderTarget(r,0,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,c),e.setRenderTarget(r,1,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,u),e.setRenderTarget(r,2,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,d),e.setRenderTarget(r,3,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,m),e.setRenderTarget(r,4,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,h),r.texture.generateMipmaps=C,e.setRenderTarget(r,5,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,g),e.setRenderTarget(_,v,x),e.xr.enabled=b,r.texture.needsPMREMUpdate=!0}}class wb extends ta{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Dm=class Dm{constructor(e,i,r,o){this.elements=[1,0,0,1],e!==void 0&&this.set(e,i,r,o)}identity(){return this.set(1,0,0,1),this}fromArray(e,i=0){for(let r=0;r<4;r++)this.elements[r]=e[r+i];return this}set(e,i,r,o){const c=this.elements;return c[0]=e,c[2]=i,c[1]=r,c[3]=o,this}};Dm.prototype.isMatrix2=!0;let Xv=Dm;function Wv(a,e,i,r){const o=Db(r);switch(i){case cS:return a*e;case fS:return a*e/o.components*o.byteLength;case cm:return a*e/o.components*o.byteLength;case Ur:return a*e*2/o.components*o.byteLength;case um:return a*e*2/o.components*o.byteLength;case uS:return a*e*3/o.components*o.byteLength;case va:return a*e*4/o.components*o.byteLength;case fm:return a*e*4/o.components*o.byteLength;case Vu:case ku:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case Xu:case Wu:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case bp:case Ap:return Math.max(a,16)*Math.max(e,8)/4;case Ep:case Tp:return Math.max(a,8)*Math.max(e,8)/2;case Rp:case Cp:case Dp:case Lp:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case wp:case qu:case Np:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Up:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Op:return Math.floor((a+4)/5)*Math.floor((e+3)/4)*16;case Pp:return Math.floor((a+4)/5)*Math.floor((e+4)/5)*16;case Ip:return Math.floor((a+5)/6)*Math.floor((e+4)/5)*16;case Bp:return Math.floor((a+5)/6)*Math.floor((e+5)/6)*16;case Fp:return Math.floor((a+7)/8)*Math.floor((e+4)/5)*16;case zp:return Math.floor((a+7)/8)*Math.floor((e+5)/6)*16;case Hp:return Math.floor((a+7)/8)*Math.floor((e+7)/8)*16;case Gp:return Math.floor((a+9)/10)*Math.floor((e+4)/5)*16;case Vp:return Math.floor((a+9)/10)*Math.floor((e+5)/6)*16;case kp:return Math.floor((a+9)/10)*Math.floor((e+7)/8)*16;case Xp:return Math.floor((a+9)/10)*Math.floor((e+9)/10)*16;case Wp:return Math.floor((a+11)/12)*Math.floor((e+9)/10)*16;case Yp:return Math.floor((a+11)/12)*Math.floor((e+11)/12)*16;case qp:case jp:case Zp:return Math.ceil(a/4)*Math.ceil(e/4)*16;case Kp:case Qp:return Math.ceil(a/4)*Math.ceil(e/4)*8;case ju:case Jp:return Math.ceil(a/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function Db(a){switch(a){case na:case sS:return{byteLength:1,components:1};case ec:case rS:case ms:return{byteLength:2,components:1};case om:case lm:return{byteLength:2,components:4};case Ia:case rm:case La:return{byteLength:4,components:1};case oS:case lS:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${a}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:sm}}));typeof window<"u"&&(window.__THREE__?ft("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=sm);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function bS(){let a=null,e=!1,i=null,r=null;function o(c,u){i(c,u),r=a.requestAnimationFrame(o)}return{start:function(){e!==!0&&i!==null&&a!==null&&(r=a.requestAnimationFrame(o),e=!0)},stop:function(){a!==null&&a.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){a=c}}}function Lb(a){const e=new WeakMap;function i(d,m){const h=d.array,g=d.usage,_=h.byteLength,v=a.createBuffer();a.bindBuffer(m,v),a.bufferData(m,h,g),d.onUploadCallback();let x;if(h instanceof Float32Array)x=a.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)x=a.HALF_FLOAT;else if(h instanceof Uint16Array)d.isFloat16BufferAttribute?x=a.HALF_FLOAT:x=a.UNSIGNED_SHORT;else if(h instanceof Int16Array)x=a.SHORT;else if(h instanceof Uint32Array)x=a.UNSIGNED_INT;else if(h instanceof Int32Array)x=a.INT;else if(h instanceof Int8Array)x=a.BYTE;else if(h instanceof Uint8Array)x=a.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)x=a.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:v,type:x,bytesPerElement:h.BYTES_PER_ELEMENT,version:d.version,size:_}}function r(d,m,h){const g=m.array,_=m.updateRanges;if(a.bindBuffer(h,d),_.length===0)a.bufferSubData(h,0,g);else{_.sort((x,b)=>x.start-b.start);let v=0;for(let x=1;x<_.length;x++){const b=_[v],C=_[x];C.start<=b.start+b.count+1?b.count=Math.max(b.count,C.start+C.count-b.start):(++v,_[v]=C)}_.length=v+1;for(let x=0,b=_.length;x<b;x++){const C=_[x];a.bufferSubData(h,C.start*g.BYTES_PER_ELEMENT,g,C.start,C.count)}m.clearUpdateRanges()}m.onUploadCallback()}function o(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=e.get(d);m&&(a.deleteBuffer(m.buffer),e.delete(d))}function u(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=e.get(d);(!g||g.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const h=e.get(d);if(h===void 0)e.set(d,i(d,m));else if(h.version<d.version){if(h.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,d,m),h.version=d.version}}return{get:o,remove:c,update:u}}var Nb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ub=`#ifdef USE_ALPHAHASH
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
#endif`,Ob=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Pb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ib=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Bb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Fb=`#ifdef USE_AOMAP
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
#endif`,zb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Hb=`#ifdef USE_BATCHING
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
#endif`,Gb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Vb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,kb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Xb=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Wb=`#ifdef USE_IRIDESCENCE
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
#endif`,Yb=`#ifdef USE_BUMPMAP
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
#endif`,qb=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,jb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Zb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Kb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Qb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Jb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,$b=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,e1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,t1=`#define PI 3.141592653589793
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
} // validated`,n1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,i1=`vec3 transformedNormal = objectNormal;
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
#endif`,a1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,s1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,r1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,o1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,l1="gl_FragColor = linearToOutputTexel( gl_FragColor );",c1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,u1=`#ifdef USE_ENVMAP
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
#endif`,f1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,d1=`#ifdef USE_ENVMAP
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
#endif`,h1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,p1=`#ifdef USE_ENVMAP
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
#endif`,m1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,g1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,_1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,v1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,x1=`#ifdef USE_GRADIENTMAP
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
}`,S1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,M1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,y1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,E1=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,b1=`#ifdef USE_ENVMAP
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
#endif`,T1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,A1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,R1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,C1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,w1=`PhysicalMaterial material;
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
#endif`,D1=`uniform sampler2D dfgLUT;
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
}`,L1=`
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
#endif`,N1=`#if defined( RE_IndirectDiffuse )
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
#endif`,U1=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,O1=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,P1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,I1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,B1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,F1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,z1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,H1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,G1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,V1=`#if defined( USE_POINTS_UV )
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
#endif`,k1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,X1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,W1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Y1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,q1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,j1=`#ifdef USE_MORPHTARGETS
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
#endif`,Z1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,K1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Q1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,J1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,eT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,tT=`#ifdef USE_NORMALMAP
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
#endif`,nT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,iT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,aT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,sT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,rT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,oT=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,lT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,cT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,uT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,fT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,dT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,hT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,pT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,mT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,gT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,_T=`float getShadowMask() {
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
}`,vT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,xT=`#ifdef USE_SKINNING
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
#endif`,MT=`#ifdef USE_SKINNING
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
#endif`,yT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ET=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,bT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,TT=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,AT=`#ifdef USE_TRANSMISSION
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
#endif`,RT=`#ifdef USE_TRANSMISSION
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
#endif`,CT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,DT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,LT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
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
}`,UT=`uniform sampler2D t2D;
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
}`,OT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,PT=`#ifdef ENVMAP_TYPE_CUBE
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
}`,IT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,BT=`uniform samplerCube tCube;
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
}`,zT=`#if DEPTH_PACKING == 3200
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
}`,HT=`#define DISTANCE
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
}`,GT=`#define DISTANCE
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
}`,VT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,kT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,XT=`uniform float scale;
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
}`,WT=`uniform vec3 diffuse;
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
}`,YT=`#include <common>
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
}`,jT=`#define LAMBERT
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
}`,KT=`#define MATCAP
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
}`,QT=`#define MATCAP
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
}`,JT=`#define NORMAL
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
}`,$T=`#define NORMAL
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
}`,eA=`#define PHONG
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
}`,tA=`#define PHONG
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
}`,nA=`#define STANDARD
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
}`,iA=`#define STANDARD
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
}`,aA=`#define TOON
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
}`,sA=`#define TOON
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
}`,rA=`uniform float size;
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
}`,oA=`uniform vec3 diffuse;
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
}`,lA=`#include <common>
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
}`,cA=`uniform vec3 color;
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
}`,uA=`uniform float rotation;
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
}`,fA=`uniform vec3 diffuse;
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
}`,Et={alphahash_fragment:Nb,alphahash_pars_fragment:Ub,alphamap_fragment:Ob,alphamap_pars_fragment:Pb,alphatest_fragment:Ib,alphatest_pars_fragment:Bb,aomap_fragment:Fb,aomap_pars_fragment:zb,batching_pars_vertex:Hb,batching_vertex:Gb,begin_vertex:Vb,beginnormal_vertex:kb,bsdfs:Xb,iridescence_fragment:Wb,bumpmap_pars_fragment:Yb,clipping_planes_fragment:qb,clipping_planes_pars_fragment:jb,clipping_planes_pars_vertex:Zb,clipping_planes_vertex:Kb,color_fragment:Qb,color_pars_fragment:Jb,color_pars_vertex:$b,color_vertex:e1,common:t1,cube_uv_reflection_fragment:n1,defaultnormal_vertex:i1,displacementmap_pars_vertex:a1,displacementmap_vertex:s1,emissivemap_fragment:r1,emissivemap_pars_fragment:o1,colorspace_fragment:l1,colorspace_pars_fragment:c1,envmap_fragment:u1,envmap_common_pars_fragment:f1,envmap_pars_fragment:d1,envmap_pars_vertex:h1,envmap_physical_pars_fragment:b1,envmap_vertex:p1,fog_vertex:m1,fog_pars_vertex:g1,fog_fragment:_1,fog_pars_fragment:v1,gradientmap_pars_fragment:x1,lightmap_pars_fragment:S1,lights_lambert_fragment:M1,lights_lambert_pars_fragment:y1,lights_pars_begin:E1,lights_toon_fragment:T1,lights_toon_pars_fragment:A1,lights_phong_fragment:R1,lights_phong_pars_fragment:C1,lights_physical_fragment:w1,lights_physical_pars_fragment:D1,lights_fragment_begin:L1,lights_fragment_maps:N1,lights_fragment_end:U1,lightprobes_pars_fragment:O1,logdepthbuf_fragment:P1,logdepthbuf_pars_fragment:I1,logdepthbuf_pars_vertex:B1,logdepthbuf_vertex:F1,map_fragment:z1,map_pars_fragment:H1,map_particle_fragment:G1,map_particle_pars_fragment:V1,metalnessmap_fragment:k1,metalnessmap_pars_fragment:X1,morphinstance_vertex:W1,morphcolor_vertex:Y1,morphnormal_vertex:q1,morphtarget_pars_vertex:j1,morphtarget_vertex:Z1,normal_fragment_begin:K1,normal_fragment_maps:Q1,normal_pars_fragment:J1,normal_pars_vertex:$1,normal_vertex:eT,normalmap_pars_fragment:tT,clearcoat_normal_fragment_begin:nT,clearcoat_normal_fragment_maps:iT,clearcoat_pars_fragment:aT,iridescence_pars_fragment:sT,opaque_fragment:rT,packing:oT,premultiplied_alpha_fragment:lT,project_vertex:cT,dithering_fragment:uT,dithering_pars_fragment:fT,roughnessmap_fragment:dT,roughnessmap_pars_fragment:hT,shadowmap_pars_fragment:pT,shadowmap_pars_vertex:mT,shadowmap_vertex:gT,shadowmask_pars_fragment:_T,skinbase_vertex:vT,skinning_pars_vertex:xT,skinning_vertex:ST,skinnormal_vertex:MT,specularmap_fragment:yT,specularmap_pars_fragment:ET,tonemapping_fragment:bT,tonemapping_pars_fragment:TT,transmission_fragment:AT,transmission_pars_fragment:RT,uv_pars_fragment:CT,uv_pars_vertex:wT,uv_vertex:DT,worldpos_vertex:LT,background_vert:NT,background_frag:UT,backgroundCube_vert:OT,backgroundCube_frag:PT,cube_vert:IT,cube_frag:BT,depth_vert:FT,depth_frag:zT,distance_vert:HT,distance_frag:GT,equirect_vert:VT,equirect_frag:kT,linedashed_vert:XT,linedashed_frag:WT,meshbasic_vert:YT,meshbasic_frag:qT,meshlambert_vert:jT,meshlambert_frag:ZT,meshmatcap_vert:KT,meshmatcap_frag:QT,meshnormal_vert:JT,meshnormal_frag:$T,meshphong_vert:eA,meshphong_frag:tA,meshphysical_vert:nA,meshphysical_frag:iA,meshtoon_vert:aA,meshtoon_frag:sA,points_vert:rA,points_frag:oA,shadow_vert:lA,shadow_frag:cA,sprite_vert:uA,sprite_frag:fA},We={common:{diffuse:{value:new Qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new gt},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new gt}},envmap:{envMap:{value:null},envMapRotation:{value:new gt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new gt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new gt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new gt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new gt},normalScale:{value:new Yt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new gt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new gt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new gt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new gt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new te},probesMax:{value:new te},probesResolution:{value:new te}},points:{diffuse:{value:new Qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0},uvTransform:{value:new gt}},sprite:{diffuse:{value:new Qt(16777215)},opacity:{value:1},center:{value:new Yt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new gt},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0}}},wa={basic:{uniforms:vi([We.common,We.specularmap,We.envmap,We.aomap,We.lightmap,We.fog]),vertexShader:Et.meshbasic_vert,fragmentShader:Et.meshbasic_frag},lambert:{uniforms:vi([We.common,We.specularmap,We.envmap,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.fog,We.lights,{emissive:{value:new Qt(0)},envMapIntensity:{value:1}}]),vertexShader:Et.meshlambert_vert,fragmentShader:Et.meshlambert_frag},phong:{uniforms:vi([We.common,We.specularmap,We.envmap,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.fog,We.lights,{emissive:{value:new Qt(0)},specular:{value:new Qt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Et.meshphong_vert,fragmentShader:Et.meshphong_frag},standard:{uniforms:vi([We.common,We.envmap,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.roughnessmap,We.metalnessmap,We.fog,We.lights,{emissive:{value:new Qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Et.meshphysical_vert,fragmentShader:Et.meshphysical_frag},toon:{uniforms:vi([We.common,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.gradientmap,We.fog,We.lights,{emissive:{value:new Qt(0)}}]),vertexShader:Et.meshtoon_vert,fragmentShader:Et.meshtoon_frag},matcap:{uniforms:vi([We.common,We.bumpmap,We.normalmap,We.displacementmap,We.fog,{matcap:{value:null}}]),vertexShader:Et.meshmatcap_vert,fragmentShader:Et.meshmatcap_frag},points:{uniforms:vi([We.points,We.fog]),vertexShader:Et.points_vert,fragmentShader:Et.points_frag},dashed:{uniforms:vi([We.common,We.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Et.linedashed_vert,fragmentShader:Et.linedashed_frag},depth:{uniforms:vi([We.common,We.displacementmap]),vertexShader:Et.depth_vert,fragmentShader:Et.depth_frag},normal:{uniforms:vi([We.common,We.bumpmap,We.normalmap,We.displacementmap,{opacity:{value:1}}]),vertexShader:Et.meshnormal_vert,fragmentShader:Et.meshnormal_frag},sprite:{uniforms:vi([We.sprite,We.fog]),vertexShader:Et.sprite_vert,fragmentShader:Et.sprite_frag},background:{uniforms:{uvTransform:{value:new gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Et.background_vert,fragmentShader:Et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new gt}},vertexShader:Et.backgroundCube_vert,fragmentShader:Et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Et.cube_vert,fragmentShader:Et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Et.equirect_vert,fragmentShader:Et.equirect_frag},distance:{uniforms:vi([We.common,We.displacementmap,{referencePosition:{value:new te},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Et.distance_vert,fragmentShader:Et.distance_frag},shadow:{uniforms:vi([We.lights,We.fog,{color:{value:new Qt(0)},opacity:{value:1}}]),vertexShader:Et.shadow_vert,fragmentShader:Et.shadow_frag}};wa.physical={uniforms:vi([wa.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new gt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new gt},clearcoatNormalScale:{value:new Yt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new gt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new gt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new gt},sheen:{value:0},sheenColor:{value:new Qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new gt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new gt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new gt},transmissionSamplerSize:{value:new Yt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new gt},attenuationDistance:{value:0},attenuationColor:{value:new Qt(0)},specularColor:{value:new Qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new gt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new gt},anisotropyVector:{value:new Yt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new gt}}]),vertexShader:Et.meshphysical_vert,fragmentShader:Et.meshphysical_frag};const Iu={r:0,b:0,g:0},dA=new On,TS=new gt;TS.set(-1,0,0,0,1,0,0,0,1);function hA(a,e,i,r,o,c){const u=new Qt(0);let d=o===!0?0:1,m,h,g=null,_=0,v=null;function x(I){let O=I.isScene===!0?I.background:null;if(O&&O.isTexture){const A=I.backgroundBlurriness>0;O=e.get(O,A)}return O}function b(I){let O=!1;const A=x(I);A===null?y(u,d):A&&A.isColor&&(y(A,1),O=!0);const U=a.xr.getEnvironmentBlendMode();U==="additive"?i.buffers.color.setClear(0,0,0,1,c):U==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(a.autoClear||O)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil))}function C(I,O){const A=x(O);A&&(A.isCubeTexture||A.mapping===sf)?(h===void 0&&(h=new zi(new rc(1,1,1),new sa({name:"BackgroundCubeMaterial",uniforms:Wo(wa.backgroundCube.uniforms),vertexShader:wa.backgroundCube.vertexShader,fragmentShader:wa.backgroundCube.fragmentShader,side:Ci,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(U,L,B){this.matrixWorld.copyPosition(B.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),h.material.uniforms.envMap.value=A,h.material.uniforms.backgroundBlurriness.value=O.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=O.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(dA.makeRotationFromEuler(O.backgroundRotation)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(TS),h.material.toneMapped=Pt.getTransfer(A.colorSpace)!==an,(g!==A||_!==A.version||v!==a.toneMapping)&&(h.material.needsUpdate=!0,g=A,_=A.version,v=a.toneMapping),h.layers.enableAll(),I.unshift(h,h.geometry,h.material,0,0,null)):A&&A.isTexture&&(m===void 0&&(m=new zi(new tr(2,2),new sa({name:"BackgroundMaterial",uniforms:Wo(wa.background.uniforms),vertexShader:wa.background.vertexShader,fragmentShader:wa.background.fragmentShader,side:ps,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(m)),m.material.uniforms.t2D.value=A,m.material.uniforms.backgroundIntensity.value=O.backgroundIntensity,m.material.toneMapped=Pt.getTransfer(A.colorSpace)!==an,A.matrixAutoUpdate===!0&&A.updateMatrix(),m.material.uniforms.uvTransform.value.copy(A.matrix),(g!==A||_!==A.version||v!==a.toneMapping)&&(m.material.needsUpdate=!0,g=A,_=A.version,v=a.toneMapping),m.layers.enableAll(),I.unshift(m,m.geometry,m.material,0,0,null))}function y(I,O){I.getRGB(Iu,MS(a)),i.buffers.color.setClear(Iu.r,Iu.g,Iu.b,O,c)}function S(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return u},setClearColor:function(I,O=1){u.set(I),d=O,y(u,d)},getClearAlpha:function(){return d},setClearAlpha:function(I){d=I,y(u,d)},render:b,addToRenderList:C,dispose:S}}function pA(a,e){const i=a.getParameter(a.MAX_VERTEX_ATTRIBS),r={},o=v(null);let c=o,u=!1;function d(H,Y,he,ue,X){let z=!1;const G=_(H,ue,he,Y);c!==G&&(c=G,h(c.object)),z=x(H,ue,he,X),z&&b(H,ue,he,X),X!==null&&e.update(X,a.ELEMENT_ARRAY_BUFFER),(z||u)&&(u=!1,A(H,Y,he,ue),X!==null&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function m(){return a.createVertexArray()}function h(H){return a.bindVertexArray(H)}function g(H){return a.deleteVertexArray(H)}function _(H,Y,he,ue){const X=ue.wireframe===!0;let z=r[Y.id];z===void 0&&(z={},r[Y.id]=z);const G=H.isInstancedMesh===!0?H.id:0;let J=z[G];J===void 0&&(J={},z[G]=J);let fe=J[he.id];fe===void 0&&(fe={},J[he.id]=fe);let xe=fe[X];return xe===void 0&&(xe=v(m()),fe[X]=xe),xe}function v(H){const Y=[],he=[],ue=[];for(let X=0;X<i;X++)Y[X]=0,he[X]=0,ue[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Y,enabledAttributes:he,attributeDivisors:ue,object:H,attributes:{},index:null}}function x(H,Y,he,ue){const X=c.attributes,z=Y.attributes;let G=0;const J=he.getAttributes();for(const fe in J)if(J[fe].location>=0){const P=X[fe];let K=z[fe];if(K===void 0&&(fe==="instanceMatrix"&&H.instanceMatrix&&(K=H.instanceMatrix),fe==="instanceColor"&&H.instanceColor&&(K=H.instanceColor)),P===void 0||P.attribute!==K||K&&P.data!==K.data)return!0;G++}return c.attributesNum!==G||c.index!==ue}function b(H,Y,he,ue){const X={},z=Y.attributes;let G=0;const J=he.getAttributes();for(const fe in J)if(J[fe].location>=0){let P=z[fe];P===void 0&&(fe==="instanceMatrix"&&H.instanceMatrix&&(P=H.instanceMatrix),fe==="instanceColor"&&H.instanceColor&&(P=H.instanceColor));const K={};K.attribute=P,P&&P.data&&(K.data=P.data),X[fe]=K,G++}c.attributes=X,c.attributesNum=G,c.index=ue}function C(){const H=c.newAttributes;for(let Y=0,he=H.length;Y<he;Y++)H[Y]=0}function y(H){S(H,0)}function S(H,Y){const he=c.newAttributes,ue=c.enabledAttributes,X=c.attributeDivisors;he[H]=1,ue[H]===0&&(a.enableVertexAttribArray(H),ue[H]=1),X[H]!==Y&&(a.vertexAttribDivisor(H,Y),X[H]=Y)}function I(){const H=c.newAttributes,Y=c.enabledAttributes;for(let he=0,ue=Y.length;he<ue;he++)Y[he]!==H[he]&&(a.disableVertexAttribArray(he),Y[he]=0)}function O(H,Y,he,ue,X,z,G){G===!0?a.vertexAttribIPointer(H,Y,he,X,z):a.vertexAttribPointer(H,Y,he,ue,X,z)}function A(H,Y,he,ue){C();const X=ue.attributes,z=he.getAttributes(),G=Y.defaultAttributeValues;for(const J in z){const fe=z[J];if(fe.location>=0){let xe=X[J];if(xe===void 0&&(J==="instanceMatrix"&&H.instanceMatrix&&(xe=H.instanceMatrix),J==="instanceColor"&&H.instanceColor&&(xe=H.instanceColor)),xe!==void 0){const P=xe.normalized,K=xe.itemSize,ye=e.get(xe);if(ye===void 0)continue;const Ce=ye.buffer,ze=ye.type,se=ye.bytesPerElement,Se=ze===a.INT||ze===a.UNSIGNED_INT||xe.gpuType===rm;if(xe.isInterleavedBufferAttribute){const Ee=xe.data,Ue=Ee.stride,st=xe.offset;if(Ee.isInstancedInterleavedBuffer){for(let He=0;He<fe.locationSize;He++)S(fe.location+He,Ee.meshPerAttribute);H.isInstancedMesh!==!0&&ue._maxInstanceCount===void 0&&(ue._maxInstanceCount=Ee.meshPerAttribute*Ee.count)}else for(let He=0;He<fe.locationSize;He++)y(fe.location+He);a.bindBuffer(a.ARRAY_BUFFER,Ce);for(let He=0;He<fe.locationSize;He++)O(fe.location+He,K/fe.locationSize,ze,P,Ue*se,(st+K/fe.locationSize*He)*se,Se)}else{if(xe.isInstancedBufferAttribute){for(let Ee=0;Ee<fe.locationSize;Ee++)S(fe.location+Ee,xe.meshPerAttribute);H.isInstancedMesh!==!0&&ue._maxInstanceCount===void 0&&(ue._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let Ee=0;Ee<fe.locationSize;Ee++)y(fe.location+Ee);a.bindBuffer(a.ARRAY_BUFFER,Ce);for(let Ee=0;Ee<fe.locationSize;Ee++)O(fe.location+Ee,K/fe.locationSize,ze,P,K*se,K/fe.locationSize*Ee*se,Se)}}else if(G!==void 0){const P=G[J];if(P!==void 0)switch(P.length){case 2:a.vertexAttrib2fv(fe.location,P);break;case 3:a.vertexAttrib3fv(fe.location,P);break;case 4:a.vertexAttrib4fv(fe.location,P);break;default:a.vertexAttrib1fv(fe.location,P)}}}}I()}function U(){N();for(const H in r){const Y=r[H];for(const he in Y){const ue=Y[he];for(const X in ue){const z=ue[X];for(const G in z)g(z[G].object),delete z[G];delete ue[X]}}delete r[H]}}function L(H){if(r[H.id]===void 0)return;const Y=r[H.id];for(const he in Y){const ue=Y[he];for(const X in ue){const z=ue[X];for(const G in z)g(z[G].object),delete z[G];delete ue[X]}}delete r[H.id]}function B(H){for(const Y in r){const he=r[Y];for(const ue in he){const X=he[ue];if(X[H.id]===void 0)continue;const z=X[H.id];for(const G in z)g(z[G].object),delete z[G];delete X[H.id]}}}function E(H){for(const Y in r){const he=r[Y],ue=H.isInstancedMesh===!0?H.id:0,X=he[ue];if(X!==void 0){for(const z in X){const G=X[z];for(const J in G)g(G[J].object),delete G[J];delete X[z]}delete he[ue],Object.keys(he).length===0&&delete r[Y]}}}function N(){V(),u=!0,c!==o&&(c=o,h(c.object))}function V(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:d,reset:N,resetDefaultState:V,dispose:U,releaseStatesOfGeometry:L,releaseStatesOfObject:E,releaseStatesOfProgram:B,initAttributes:C,enableAttribute:y,disableUnusedAttributes:I}}function mA(a,e,i){let r;function o(m){r=m}function c(m,h){a.drawArrays(r,m,h),i.update(h,r,1)}function u(m,h,g){g!==0&&(a.drawArraysInstanced(r,m,h,g),i.update(h,r,g))}function d(m,h,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,h,0,g);let v=0;for(let x=0;x<g;x++)v+=h[x];i.update(v,r,1)}this.setMode=o,this.render=c,this.renderInstances=u,this.renderMultiDraw=d}function gA(a,e,i,r){let o;function c(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const B=e.get("EXT_texture_filter_anisotropic");o=a.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(B){return!(B!==va&&r.convert(B)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(B){const E=B===ms&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(B!==na&&r.convert(B)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_TYPE)&&B!==La&&!E)}function m(B){if(B==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=i.precision!==void 0?i.precision:"highp";const g=m(h);g!==h&&(ft("WebGLRenderer:",h,"not supported, using",g,"instead."),h=g);const _=i.logarithmicDepthBuffer===!0,v=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control");i.reversedDepthBuffer===!0&&v===!1&&ft("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const x=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),b=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=a.getParameter(a.MAX_TEXTURE_SIZE),y=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),S=a.getParameter(a.MAX_VERTEX_ATTRIBS),I=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),O=a.getParameter(a.MAX_VARYING_VECTORS),A=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),U=a.getParameter(a.MAX_SAMPLES),L=a.getParameter(a.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:u,textureTypeReadable:d,precision:h,logarithmicDepthBuffer:_,reversedDepthBuffer:v,maxTextures:x,maxVertexTextures:b,maxTextureSize:C,maxCubemapSize:y,maxAttributes:S,maxVertexUniforms:I,maxVaryings:O,maxFragmentUniforms:A,maxSamples:U,samples:L}}function _A(a){const e=this;let i=null,r=0,o=!1,c=!1;const u=new Cr,d=new gt,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(_,v){const x=_.length!==0||v||r!==0||o;return o=v,r=_.length,x},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,v){i=g(_,v,0)},this.setState=function(_,v,x){const b=_.clippingPlanes,C=_.clipIntersection,y=_.clipShadows,S=a.get(_);if(!o||b===null||b.length===0||c&&!y)c?g(null):h();else{const I=c?0:r,O=I*4;let A=S.clippingState||null;m.value=A,A=g(b,v,O,x);for(let U=0;U!==O;++U)A[U]=i[U];S.clippingState=A,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=I}};function h(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function g(_,v,x,b){const C=_!==null?_.length:0;let y=null;if(C!==0){if(y=m.value,b!==!0||y===null){const S=x+C*4,I=v.matrixWorldInverse;d.getNormalMatrix(I),(y===null||y.length<S)&&(y=new Float32Array(S));for(let O=0,A=x;O!==C;++O,A+=4)u.copy(_[O]).applyMatrix4(I,d),u.normal.toArray(y,A),y[A+3]=u.constant}m.value=y,m.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,y}}const nr=4,Yv=[.125,.215,.35,.446,.526,.582],Dr=20,vA=256,kl=new ES,qv=new Qt;let Kh=null,Qh=0,Jh=0,$h=!1;const xA=new te;class jv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,r=.1,o=100,c={}){const{size:u=256,position:d=xA}=c;Kh=this._renderer.getRenderTarget(),Qh=this._renderer.getActiveCubeFace(),Jh=this._renderer.getActiveMipmapLevel(),$h=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,r,o,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Qv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Kv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Kh,Qh,Jh),this._renderer.xr.enabled=$h,e.scissorTest=!1,Oo(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Nr||e.mapping===ko?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Kh=this._renderer.getRenderTarget(),Qh=this._renderer.getActiveCubeFace(),Jh=this._renderer.getActiveMipmapLevel(),$h=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:wn,minFilter:wn,generateMipmaps:!1,type:ms,format:va,colorSpace:Zu,depthBuffer:!1},o=Zv(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Zv(e,i,r);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=SA(c)),this._blurMaterial=yA(c,e,i),this._ggxMaterial=MA(c,e,i)}return o}_compileMaterial(e){const i=new zi(new aa,e);this._renderer.compile(i,kl)}_sceneToCubeUV(e,i,r,o,c){const m=new ta(90,1,i,r),h=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],_=this._renderer,v=_.autoClear,x=_.toneMapping;_.getClearColor(qv),_.toneMapping=Ua,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(o),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new zi(new rc,new $u({name:"PMREM.Background",side:Ci,depthWrite:!1,depthTest:!1})));const C=this._backgroundBox,y=C.material;let S=!1;const I=e.background;I?I.isColor&&(y.color.copy(I),e.background=null,S=!0):(y.color.copy(qv),S=!0);for(let O=0;O<6;O++){const A=O%3;A===0?(m.up.set(0,h[O],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+g[O],c.y,c.z)):A===1?(m.up.set(0,0,h[O]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+g[O],c.z)):(m.up.set(0,h[O],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+g[O]));const U=this._cubeSize;Oo(o,A*U,O>2?U:0,U,U),_.setRenderTarget(o),S&&_.render(C,m),_.render(e,m)}_.toneMapping=x,_.autoClear=v,e.background=I}_textureToCubeUV(e,i){const r=this._renderer,o=e.mapping===Nr||e.mapping===ko;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=Qv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Kv());const c=o?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=c;const d=c.uniforms;d.envMap.value=e;const m=this._cubeSize;Oo(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(u,kl)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const o=this._lodMeshes.length;for(let c=1;c<o;c++)this._applyGGXFilter(e,c-1,c);i.autoClear=r}_applyGGXFilter(e,i,r){const o=this._renderer,c=this._pingPongRenderTarget,u=this._ggxMaterial,d=this._lodMeshes[r];d.material=u;const m=u.uniforms,h=r/(this._lodMeshes.length-1),g=i/(this._lodMeshes.length-1),_=Math.sqrt(h*h-g*g),v=0+h*1.25,x=_*v,{_lodMax:b}=this,C=this._sizeLods[r],y=3*C*(r>b-nr?r-b+nr:0),S=4*(this._cubeSize-C);m.envMap.value=e.texture,m.roughness.value=x,m.mipInt.value=b-i,Oo(c,y,S,3*C,2*C),o.setRenderTarget(c),o.render(d,kl),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=b-r,Oo(e,y,S,3*C,2*C),o.setRenderTarget(e),o.render(d,kl)}_blur(e,i,r,o,c){const u=this._pingPongRenderTarget;this._halfBlur(e,u,i,r,o,"latitudinal",c),this._halfBlur(u,e,r,r,o,"longitudinal",c)}_halfBlur(e,i,r,o,c,u,d){const m=this._renderer,h=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&zt("blur direction must be either latitudinal or longitudinal!");const g=3,_=this._lodMeshes[o];_.material=h;const v=h.uniforms,x=this._sizeLods[r]-1,b=isFinite(c)?Math.PI/(2*x):2*Math.PI/(2*Dr-1),C=c/b,y=isFinite(c)?1+Math.floor(g*C):Dr;y>Dr&&ft(`sigmaRadians, ${c}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Dr}`);const S=[];let I=0;for(let B=0;B<Dr;++B){const E=B/C,N=Math.exp(-E*E/2);S.push(N),B===0?I+=N:B<y&&(I+=2*N)}for(let B=0;B<S.length;B++)S[B]=S[B]/I;v.envMap.value=e.texture,v.samples.value=y,v.weights.value=S,v.latitudinal.value=u==="latitudinal",d&&(v.poleAxis.value=d);const{_lodMax:O}=this;v.dTheta.value=b,v.mipInt.value=O-r;const A=this._sizeLods[o],U=3*A*(o>O-nr?o-O+nr:0),L=4*(this._cubeSize-A);Oo(i,U,L,3*A,2*A),m.setRenderTarget(i),m.render(_,kl)}}function SA(a){const e=[],i=[],r=[];let o=a;const c=a-nr+1+Yv.length;for(let u=0;u<c;u++){const d=Math.pow(2,o);e.push(d);let m=1/d;u>a-nr?m=Yv[u-a+nr-1]:u===0&&(m=0),i.push(m);const h=1/(d-2),g=-h,_=1+h,v=[g,g,_,g,_,_,g,g,_,_,g,_],x=6,b=6,C=3,y=2,S=1,I=new Float32Array(C*b*x),O=new Float32Array(y*b*x),A=new Float32Array(S*b*x);for(let L=0;L<x;L++){const B=L%3*2/3-1,E=L>2?0:-1,N=[B,E,0,B+2/3,E,0,B+2/3,E+1,0,B,E,0,B+2/3,E+1,0,B,E+1,0];I.set(N,C*b*L),O.set(v,y*b*L);const V=[L,L,L,L,L,L];A.set(V,S*b*L)}const U=new aa;U.setAttribute("position",new Pa(I,C)),U.setAttribute("uv",new Pa(O,y)),U.setAttribute("faceIndex",new Pa(A,S)),r.push(new zi(U,null)),o>nr&&o--}return{lodMeshes:r,sizeLods:e,sigmas:i}}function Zv(a,e,i){const r=new Oa(a,e,i);return r.texture.mapping=sf,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Oo(a,e,i,r,o){a.viewport.set(e,i,r,o),a.scissor.set(e,i,r,o)}function MA(a,e,i){return new sa({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:vA,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:of(),fragmentShader:`

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
		`,blending:ds,depthTest:!1,depthWrite:!1})}function yA(a,e,i){const r=new Float32Array(Dr),o=new te(0,1,0);return new sa({name:"SphericalGaussianBlur",defines:{n:Dr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:of(),fragmentShader:`

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
		`,blending:ds,depthTest:!1,depthWrite:!1})}function Kv(){return new sa({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:of(),fragmentShader:`

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
		`,blending:ds,depthTest:!1,depthWrite:!1})}function Qv(){return new sa({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:of(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ds,depthTest:!1,depthWrite:!1})}function of(){return`

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
	`}class AS extends Oa{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new xS(o),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new rc(5,5,5),c=new sa({name:"CubemapFromEquirect",uniforms:Wo(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Ci,blending:ds});c.uniforms.tEquirect.value=i;const u=new zi(o,c),d=i.minFilter;return i.minFilter===er&&(i.minFilter=wn),new Cb(1,10,this).update(e,u),i.minFilter=d,u.geometry.dispose(),u.material.dispose(),this}clear(e,i=!0,r=!0,o=!0){const c=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(i,r,o);e.setRenderTarget(c)}}function EA(a){let e=new WeakMap,i=new WeakMap,r=null;function o(v,x=!1){return v==null?null:x?u(v):c(v)}function c(v){if(v&&v.isTexture){const x=v.mapping;if(x===yh||x===Eh)if(e.has(v)){const b=e.get(v).texture;return d(b,v.mapping)}else{const b=v.image;if(b&&b.height>0){const C=new AS(b.height);return C.fromEquirectangularTexture(a,v),e.set(v,C),v.addEventListener("dispose",h),d(C.texture,v.mapping)}else return null}}return v}function u(v){if(v&&v.isTexture){const x=v.mapping,b=x===yh||x===Eh,C=x===Nr||x===ko;if(b||C){let y=i.get(v);const S=y!==void 0?y.texture.pmremVersion:0;if(v.isRenderTargetTexture&&v.pmremVersion!==S)return r===null&&(r=new jv(a)),y=b?r.fromEquirectangular(v,y):r.fromCubemap(v,y),y.texture.pmremVersion=v.pmremVersion,i.set(v,y),y.texture;if(y!==void 0)return y.texture;{const I=v.image;return b&&I&&I.height>0||C&&I&&m(I)?(r===null&&(r=new jv(a)),y=b?r.fromEquirectangular(v):r.fromCubemap(v),y.texture.pmremVersion=v.pmremVersion,i.set(v,y),v.addEventListener("dispose",g),y.texture):null}}}return v}function d(v,x){return x===yh?v.mapping=Nr:x===Eh&&(v.mapping=ko),v}function m(v){let x=0;const b=6;for(let C=0;C<b;C++)v[C]!==void 0&&x++;return x===b}function h(v){const x=v.target;x.removeEventListener("dispose",h);const b=e.get(x);b!==void 0&&(e.delete(x),b.dispose())}function g(v){const x=v.target;x.removeEventListener("dispose",g);const b=i.get(x);b!==void 0&&(i.delete(x),b.dispose())}function _(){e=new WeakMap,i=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:o,dispose:_}}function bA(a){const e={};function i(r){if(e[r]!==void 0)return e[r];const o=a.getExtension(r);return e[r]=o,o}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const o=i(r);return o===null&&Fo("WebGLRenderer: "+r+" extension not supported."),o}}}function TA(a,e,i,r){const o={},c=new WeakMap;function u(_){const v=_.target;v.index!==null&&e.remove(v.index);for(const b in v.attributes)e.remove(v.attributes[b]);v.removeEventListener("dispose",u),delete o[v.id];const x=c.get(v);x&&(e.remove(x),c.delete(v)),r.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,i.memory.geometries--}function d(_,v){return o[v.id]===!0||(v.addEventListener("dispose",u),o[v.id]=!0,i.memory.geometries++),v}function m(_){const v=_.attributes;for(const x in v)e.update(v[x],a.ARRAY_BUFFER)}function h(_){const v=[],x=_.index,b=_.attributes.position;let C=0;if(b===void 0)return;if(x!==null){const I=x.array;C=x.version;for(let O=0,A=I.length;O<A;O+=3){const U=I[O+0],L=I[O+1],B=I[O+2];v.push(U,L,L,B,B,U)}}else{const I=b.array;C=b.version;for(let O=0,A=I.length/3-1;O<A;O+=3){const U=O+0,L=O+1,B=O+2;v.push(U,L,L,B,B,U)}}const y=new(b.count>=65535?_S:gS)(v,1);y.version=C;const S=c.get(_);S&&e.remove(S),c.set(_,y)}function g(_){const v=c.get(_);if(v){const x=_.index;x!==null&&v.version<x.version&&h(_)}else h(_);return c.get(_)}return{get:d,update:m,getWireframeAttribute:g}}function AA(a,e,i){let r;function o(_){r=_}let c,u;function d(_){c=_.type,u=_.bytesPerElement}function m(_,v){a.drawElements(r,v,c,_*u),i.update(v,r,1)}function h(_,v,x){x!==0&&(a.drawElementsInstanced(r,v,c,_*u,x),i.update(v,r,x))}function g(_,v,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,v,0,c,_,0,x);let C=0;for(let y=0;y<x;y++)C+=v[y];i.update(C,r,1)}this.setMode=o,this.setIndex=d,this.render=m,this.renderInstances=h,this.renderMultiDraw=g}function RA(a){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,u,d){switch(i.calls++,u){case a.TRIANGLES:i.triangles+=d*(c/3);break;case a.LINES:i.lines+=d*(c/2);break;case a.LINE_STRIP:i.lines+=d*(c-1);break;case a.LINE_LOOP:i.lines+=d*c;break;case a.POINTS:i.points+=d*c;break;default:zt("WebGLInfo: Unknown draw mode:",u);break}}function o(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:o,update:r}}function CA(a,e,i){const r=new WeakMap,o=new Cn;function c(u,d,m){const h=u.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,_=g!==void 0?g.length:0;let v=r.get(d);if(v===void 0||v.count!==_){let V=function(){E.dispose(),r.delete(d),d.removeEventListener("dispose",V)};var x=V;v!==void 0&&v.texture.dispose();const b=d.morphAttributes.position!==void 0,C=d.morphAttributes.normal!==void 0,y=d.morphAttributes.color!==void 0,S=d.morphAttributes.position||[],I=d.morphAttributes.normal||[],O=d.morphAttributes.color||[];let A=0;b===!0&&(A=1),C===!0&&(A=2),y===!0&&(A=3);let U=d.attributes.position.count*A,L=1;U>e.maxTextureSize&&(L=Math.ceil(U/e.maxTextureSize),U=e.maxTextureSize);const B=new Float32Array(U*L*4*_),E=new hS(B,U,L,_);E.type=La,E.needsUpdate=!0;const N=A*4;for(let H=0;H<_;H++){const Y=S[H],he=I[H],ue=O[H],X=U*L*4*H;for(let z=0;z<Y.count;z++){const G=z*N;b===!0&&(o.fromBufferAttribute(Y,z),B[X+G+0]=o.x,B[X+G+1]=o.y,B[X+G+2]=o.z,B[X+G+3]=0),C===!0&&(o.fromBufferAttribute(he,z),B[X+G+4]=o.x,B[X+G+5]=o.y,B[X+G+6]=o.z,B[X+G+7]=0),y===!0&&(o.fromBufferAttribute(ue,z),B[X+G+8]=o.x,B[X+G+9]=o.y,B[X+G+10]=o.z,B[X+G+11]=ue.itemSize===4?o.w:1)}}v={count:_,texture:E,size:new Yt(U,L)},r.set(d,v),d.addEventListener("dispose",V)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)m.getUniforms().setValue(a,"morphTexture",u.morphTexture,i);else{let b=0;for(let y=0;y<h.length;y++)b+=h[y];const C=d.morphTargetsRelative?1:1-b;m.getUniforms().setValue(a,"morphTargetBaseInfluence",C),m.getUniforms().setValue(a,"morphTargetInfluences",h)}m.getUniforms().setValue(a,"morphTargetsTexture",v.texture,i),m.getUniforms().setValue(a,"morphTargetsTextureSize",v.size)}return{update:c}}function wA(a,e,i,r,o){let c=new WeakMap;function u(h){const g=o.render.frame,_=h.geometry,v=e.get(h,_);if(c.get(v)!==g&&(e.update(v),c.set(v,g)),h.isInstancedMesh&&(h.hasEventListener("dispose",m)===!1&&h.addEventListener("dispose",m),c.get(h)!==g&&(i.update(h.instanceMatrix,a.ARRAY_BUFFER),h.instanceColor!==null&&i.update(h.instanceColor,a.ARRAY_BUFFER),c.set(h,g))),h.isSkinnedMesh){const x=h.skeleton;c.get(x)!==g&&(x.update(),c.set(x,g))}return v}function d(){c=new WeakMap}function m(h){const g=h.target;g.removeEventListener("dispose",m),r.releaseStatesOfObject(g),i.remove(g.instanceMatrix),g.instanceColor!==null&&i.remove(g.instanceColor)}return{update:u,dispose:d}}const DA={[Qx]:"LINEAR_TONE_MAPPING",[Jx]:"REINHARD_TONE_MAPPING",[$x]:"CINEON_TONE_MAPPING",[eS]:"ACES_FILMIC_TONE_MAPPING",[nS]:"AGX_TONE_MAPPING",[iS]:"NEUTRAL_TONE_MAPPING",[tS]:"CUSTOM_TONE_MAPPING"};function LA(a,e,i,r,o,c){const u=new Oa(e,i,{type:a,depthBuffer:o,stencilBuffer:c,samples:r?4:0,depthTexture:o?new Xo(e,i):void 0}),d=new Oa(e,i,{type:ms,depthBuffer:!1,stencilBuffer:!1}),m=new aa;m.setAttribute("position",new ia([-1,3,0,-1,-1,0,3,-1,0],3)),m.setAttribute("uv",new ia([0,2,0,0,2,0],2));const h=new Tb({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),g=new zi(m,h),_=new ES(-1,1,1,-1,0,1);let v=null,x=null,b=!1,C,y=null,S=[],I=!1;this.setSize=function(O,A){u.setSize(O,A),d.setSize(O,A);for(let U=0;U<S.length;U++){const L=S[U];L.setSize&&L.setSize(O,A)}},this.setEffects=function(O){S=O,I=S.length>0&&S[0].isRenderPass===!0;const A=u.width,U=u.height;for(let L=0;L<S.length;L++){const B=S[L];B.setSize&&B.setSize(A,U)}},this.begin=function(O,A){if(b||O.toneMapping===Ua&&S.length===0)return!1;if(y=A,A!==null){const U=A.width,L=A.height;(u.width!==U||u.height!==L)&&this.setSize(U,L)}return I===!1&&O.setRenderTarget(u),C=O.toneMapping,O.toneMapping=Ua,!0},this.hasRenderPass=function(){return I},this.end=function(O,A){O.toneMapping=C,b=!0;let U=u,L=d;for(let B=0;B<S.length;B++){const E=S[B];if(E.enabled!==!1&&(E.render(O,L,U,A),E.needsSwap!==!1)){const N=U;U=L,L=N}}if(v!==O.outputColorSpace||x!==O.toneMapping){v=O.outputColorSpace,x=O.toneMapping,h.defines={},Pt.getTransfer(v)===an&&(h.defines.SRGB_TRANSFER="");const B=DA[x];B&&(h.defines[B]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=U.texture,O.setRenderTarget(y),O.render(g,_),y=null,b=!1},this.isCompositing=function(){return b},this.dispose=function(){u.depthTexture&&u.depthTexture.dispose(),u.dispose(),d.dispose(),m.dispose(),h.dispose()}}const RS=new di,$p=new Xo(1,1),CS=new hS,wS=new $E,DS=new xS,Jv=[],$v=[],ex=new Float32Array(16),tx=new Float32Array(9),nx=new Float32Array(4);function Zo(a,e,i){const r=a[0];if(r<=0||r>0)return a;const o=e*i;let c=Jv[o];if(c===void 0&&(c=new Float32Array(o),Jv[o]=c),e!==0){r.toArray(c,0);for(let u=1,d=0;u!==e;++u)d+=i,a[u].toArray(c,d)}return c}function jn(a,e){if(a.length!==e.length)return!1;for(let i=0,r=a.length;i<r;i++)if(a[i]!==e[i])return!1;return!0}function Zn(a,e){for(let i=0,r=e.length;i<r;i++)a[i]=e[i]}function lf(a,e){let i=$v[e];i===void 0&&(i=new Int32Array(e),$v[e]=i);for(let r=0;r!==e;++r)i[r]=a.allocateTextureUnit();return i}function NA(a,e){const i=this.cache;i[0]!==e&&(a.uniform1f(this.addr,e),i[0]=e)}function UA(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(jn(i,e))return;a.uniform2fv(this.addr,e),Zn(i,e)}}function OA(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(jn(i,e))return;a.uniform3fv(this.addr,e),Zn(i,e)}}function PA(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(jn(i,e))return;a.uniform4fv(this.addr,e),Zn(i,e)}}function IA(a,e){const i=this.cache,r=e.elements;if(r===void 0){if(jn(i,e))return;a.uniformMatrix2fv(this.addr,!1,e),Zn(i,e)}else{if(jn(i,r))return;nx.set(r),a.uniformMatrix2fv(this.addr,!1,nx),Zn(i,r)}}function BA(a,e){const i=this.cache,r=e.elements;if(r===void 0){if(jn(i,e))return;a.uniformMatrix3fv(this.addr,!1,e),Zn(i,e)}else{if(jn(i,r))return;tx.set(r),a.uniformMatrix3fv(this.addr,!1,tx),Zn(i,r)}}function FA(a,e){const i=this.cache,r=e.elements;if(r===void 0){if(jn(i,e))return;a.uniformMatrix4fv(this.addr,!1,e),Zn(i,e)}else{if(jn(i,r))return;ex.set(r),a.uniformMatrix4fv(this.addr,!1,ex),Zn(i,r)}}function zA(a,e){const i=this.cache;i[0]!==e&&(a.uniform1i(this.addr,e),i[0]=e)}function HA(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(a.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(jn(i,e))return;a.uniform2iv(this.addr,e),Zn(i,e)}}function GA(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(a.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(jn(i,e))return;a.uniform3iv(this.addr,e),Zn(i,e)}}function VA(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(jn(i,e))return;a.uniform4iv(this.addr,e),Zn(i,e)}}function kA(a,e){const i=this.cache;i[0]!==e&&(a.uniform1ui(this.addr,e),i[0]=e)}function XA(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(a.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(jn(i,e))return;a.uniform2uiv(this.addr,e),Zn(i,e)}}function WA(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(a.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(jn(i,e))return;a.uniform3uiv(this.addr,e),Zn(i,e)}}function YA(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(jn(i,e))return;a.uniform4uiv(this.addr,e),Zn(i,e)}}function qA(a,e,i){const r=this.cache,o=i.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o);let c;this.type===a.SAMPLER_2D_SHADOW?($p.compareFunction=i.isReversedDepthBuffer()?hm:dm,c=$p):c=RS,i.setTexture2D(e||c,o)}function jA(a,e,i){const r=this.cache,o=i.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o),i.setTexture3D(e||wS,o)}function ZA(a,e,i){const r=this.cache,o=i.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o),i.setTextureCube(e||DS,o)}function KA(a,e,i){const r=this.cache,o=i.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o),i.setTexture2DArray(e||CS,o)}function QA(a){switch(a){case 5126:return NA;case 35664:return UA;case 35665:return OA;case 35666:return PA;case 35674:return IA;case 35675:return BA;case 35676:return FA;case 5124:case 35670:return zA;case 35667:case 35671:return HA;case 35668:case 35672:return GA;case 35669:case 35673:return VA;case 5125:return kA;case 36294:return XA;case 36295:return WA;case 36296:return YA;case 35678:case 36198:case 36298:case 36306:case 35682:return qA;case 35679:case 36299:case 36307:return jA;case 35680:case 36300:case 36308:case 36293:return ZA;case 36289:case 36303:case 36311:case 36292:return KA}}function JA(a,e){a.uniform1fv(this.addr,e)}function $A(a,e){const i=Zo(e,this.size,2);a.uniform2fv(this.addr,i)}function e2(a,e){const i=Zo(e,this.size,3);a.uniform3fv(this.addr,i)}function t2(a,e){const i=Zo(e,this.size,4);a.uniform4fv(this.addr,i)}function n2(a,e){const i=Zo(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,i)}function i2(a,e){const i=Zo(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,i)}function a2(a,e){const i=Zo(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,i)}function s2(a,e){a.uniform1iv(this.addr,e)}function r2(a,e){a.uniform2iv(this.addr,e)}function o2(a,e){a.uniform3iv(this.addr,e)}function l2(a,e){a.uniform4iv(this.addr,e)}function c2(a,e){a.uniform1uiv(this.addr,e)}function u2(a,e){a.uniform2uiv(this.addr,e)}function f2(a,e){a.uniform3uiv(this.addr,e)}function d2(a,e){a.uniform4uiv(this.addr,e)}function h2(a,e,i){const r=this.cache,o=e.length,c=lf(i,o);jn(r,c)||(a.uniform1iv(this.addr,c),Zn(r,c));let u;this.type===a.SAMPLER_2D_SHADOW?u=$p:u=RS;for(let d=0;d!==o;++d)i.setTexture2D(e[d]||u,c[d])}function p2(a,e,i){const r=this.cache,o=e.length,c=lf(i,o);jn(r,c)||(a.uniform1iv(this.addr,c),Zn(r,c));for(let u=0;u!==o;++u)i.setTexture3D(e[u]||wS,c[u])}function m2(a,e,i){const r=this.cache,o=e.length,c=lf(i,o);jn(r,c)||(a.uniform1iv(this.addr,c),Zn(r,c));for(let u=0;u!==o;++u)i.setTextureCube(e[u]||DS,c[u])}function g2(a,e,i){const r=this.cache,o=e.length,c=lf(i,o);jn(r,c)||(a.uniform1iv(this.addr,c),Zn(r,c));for(let u=0;u!==o;++u)i.setTexture2DArray(e[u]||CS,c[u])}function _2(a){switch(a){case 5126:return JA;case 35664:return $A;case 35665:return e2;case 35666:return t2;case 35674:return n2;case 35675:return i2;case 35676:return a2;case 5124:case 35670:return s2;case 35667:case 35671:return r2;case 35668:case 35672:return o2;case 35669:case 35673:return l2;case 5125:return c2;case 36294:return u2;case 36295:return f2;case 36296:return d2;case 35678:case 36198:case 36298:case 36306:case 35682:return h2;case 35679:case 36299:case 36307:return p2;case 35680:case 36300:case 36308:case 36293:return m2;case 36289:case 36303:case 36311:case 36292:return g2}}class v2{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=QA(i.type)}}class x2{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=_2(i.type)}}class S2{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const o=this.seq;for(let c=0,u=o.length;c!==u;++c){const d=o[c];d.setValue(e,i[d.id],r)}}}const ep=/(\w+)(\])?(\[|\.)?/g;function ix(a,e){a.seq.push(e),a.map[e.id]=e}function M2(a,e,i){const r=a.name,o=r.length;for(ep.lastIndex=0;;){const c=ep.exec(r),u=ep.lastIndex;let d=c[1];const m=c[2]==="]",h=c[3];if(m&&(d=d|0),h===void 0||h==="["&&u+2===o){ix(i,h===void 0?new v2(d,a,e):new x2(d,a,e));break}else{let _=i.map[d];_===void 0&&(_=new S2(d),ix(i,_)),i=_}}}class Yu{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let u=0;u<r;++u){const d=e.getActiveUniform(i,u),m=e.getUniformLocation(i,d.name);M2(d,m,this)}const o=[],c=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(u):c.push(u);o.length>0&&(this.seq=o.concat(c))}setValue(e,i,r,o){const c=this.map[i];c!==void 0&&c.setValue(e,r,o)}setOptional(e,i,r){const o=i[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,i,r,o){for(let c=0,u=i.length;c!==u;++c){const d=i[c],m=r[d.id];m.needsUpdate!==!1&&d.setValue(e,m.value,o)}}static seqWithValue(e,i){const r=[];for(let o=0,c=e.length;o!==c;++o){const u=e[o];u.id in i&&r.push(u)}return r}}function ax(a,e,i){const r=a.createShader(e);return a.shaderSource(r,i),a.compileShader(r),r}const y2=37297;let E2=0;function b2(a,e){const i=a.split(`
`),r=[],o=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let u=o;u<c;u++){const d=u+1;r.push(`${d===e?">":" "} ${d}: ${i[u]}`)}return r.join(`
`)}const sx=new gt;function T2(a){Pt._getMatrix(sx,Pt.workingColorSpace,a);const e=`mat3( ${sx.elements.map(i=>i.toFixed(4))} )`;switch(Pt.getTransfer(a)){case Ku:return[e,"LinearTransferOETF"];case an:return[e,"sRGBTransferOETF"];default:return ft("WebGLProgram: Unsupported color space: ",a),[e,"LinearTransferOETF"]}}function rx(a,e,i){const r=a.getShaderParameter(e,a.COMPILE_STATUS),c=(a.getShaderInfoLog(e)||"").trim();if(r&&c==="")return"";const u=/ERROR: 0:(\d+)/.exec(c);if(u){const d=parseInt(u[1]);return i.toUpperCase()+`

`+c+`

`+b2(a.getShaderSource(e),d)}else return c}function A2(a,e){const i=T2(e);return[`vec4 ${a}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const R2={[Qx]:"Linear",[Jx]:"Reinhard",[$x]:"Cineon",[eS]:"ACESFilmic",[nS]:"AgX",[iS]:"Neutral",[tS]:"Custom"};function C2(a,e){const i=R2[e];return i===void 0?(ft("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+a+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+a+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Bu=new te;function w2(){Pt.getLuminanceCoefficients(Bu);const a=Bu.x.toFixed(4),e=Bu.y.toFixed(4),i=Bu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${a}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function D2(a){return[a.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",a.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ql).join(`
`)}function L2(a){const e=[];for(const i in a){const r=a[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function N2(a,e){const i={},r=a.getProgramParameter(e,a.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const c=a.getActiveAttrib(e,o),u=c.name;let d=1;c.type===a.FLOAT_MAT2&&(d=2),c.type===a.FLOAT_MAT3&&(d=3),c.type===a.FLOAT_MAT4&&(d=4),i[u]={type:c.type,location:a.getAttribLocation(e,u),locationSize:d}}return i}function ql(a){return a!==""}function ox(a,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function lx(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const U2=/^[ \t]*#include +<([\w\d./]+)>/gm;function em(a){return a.replace(U2,P2)}const O2=new Map;function P2(a,e){let i=Et[e];if(i===void 0){const r=O2.get(e);if(r!==void 0)i=Et[r],ft('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return em(i)}const I2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function cx(a){return a.replace(I2,B2)}function B2(a,e,i,r){let o="";for(let c=parseInt(e);c<parseInt(i);c++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return o}function ux(a){let e=`precision ${a.precision} float;
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
#define LOW_PRECISION`),e}const F2={[Gu]:"SHADOWMAP_TYPE_PCF",[Wl]:"SHADOWMAP_TYPE_VSM"};function z2(a){return F2[a.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const H2={[Nr]:"ENVMAP_TYPE_CUBE",[ko]:"ENVMAP_TYPE_CUBE",[sf]:"ENVMAP_TYPE_CUBE_UV"};function G2(a){return a.envMap===!1?"ENVMAP_TYPE_CUBE":H2[a.envMapMode]||"ENVMAP_TYPE_CUBE"}const V2={[ko]:"ENVMAP_MODE_REFRACTION"};function k2(a){return a.envMap===!1?"ENVMAP_MODE_REFLECTION":V2[a.envMapMode]||"ENVMAP_MODE_REFLECTION"}const X2={[Kx]:"ENVMAP_BLENDING_MULTIPLY",[_E]:"ENVMAP_BLENDING_MIX",[vE]:"ENVMAP_BLENDING_ADD"};function W2(a){return a.envMap===!1?"ENVMAP_BLENDING_NONE":X2[a.combine]||"ENVMAP_BLENDING_NONE"}function Y2(a){const e=a.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function q2(a,e,i,r){const o=a.getContext(),c=i.defines;let u=i.vertexShader,d=i.fragmentShader;const m=z2(i),h=G2(i),g=k2(i),_=W2(i),v=Y2(i),x=D2(i),b=L2(c),C=o.createProgram();let y,S,I=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(ql).join(`
`),y.length>0&&(y+=`
`),S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(ql).join(`
`),S.length>0&&(S+=`
`)):(y=[ux(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ql).join(`
`),S=[ux(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+h:"",i.envMap?"#define "+g:"",i.envMap?"#define "+_:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Ua?"#define TONE_MAPPING":"",i.toneMapping!==Ua?Et.tonemapping_pars_fragment:"",i.toneMapping!==Ua?C2("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",Et.colorspace_pars_fragment,A2("linearToOutputTexel",i.outputColorSpace),w2(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(ql).join(`
`)),u=em(u),u=ox(u,i),u=lx(u,i),d=em(d),d=ox(d,i),d=lx(d,i),u=cx(u),d=cx(d),i.isRawShaderMaterial!==!0&&(I=`#version 300 es
`,y=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,S=["#define varying in",i.glslVersion===Mv?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Mv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const O=I+y+u,A=I+S+d,U=ax(o,o.VERTEX_SHADER,O),L=ax(o,o.FRAGMENT_SHADER,A);o.attachShader(C,U),o.attachShader(C,L),i.index0AttributeName!==void 0?o.bindAttribLocation(C,0,i.index0AttributeName):i.hasPositionAttribute===!0&&o.bindAttribLocation(C,0,"position"),o.linkProgram(C);function B(H){if(a.debug.checkShaderErrors){const Y=o.getProgramInfoLog(C)||"",he=o.getShaderInfoLog(U)||"",ue=o.getShaderInfoLog(L)||"",X=Y.trim(),z=he.trim(),G=ue.trim();let J=!0,fe=!0;if(o.getProgramParameter(C,o.LINK_STATUS)===!1)if(J=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(o,C,U,L);else{const xe=rx(o,U,"vertex"),P=rx(o,L,"fragment");zt("WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(C,o.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+X+`
`+xe+`
`+P)}else X!==""?ft("WebGLProgram: Program Info Log:",X):(z===""||G==="")&&(fe=!1);fe&&(H.diagnostics={runnable:J,programLog:X,vertexShader:{log:z,prefix:y},fragmentShader:{log:G,prefix:S}})}o.deleteShader(U),o.deleteShader(L),E=new Yu(o,C),N=N2(o,C)}let E;this.getUniforms=function(){return E===void 0&&B(this),E};let N;this.getAttributes=function(){return N===void 0&&B(this),N};let V=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return V===!1&&(V=o.getProgramParameter(C,y2)),V},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(C),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=E2++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=U,this.fragmentShader=L,this}let j2=0;class Z2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,i,r){const o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new K2(e),i.set(e,r)),r}}class K2{constructor(e){this.id=j2++,this.code=e,this.usedTimes=0}}function Q2(a){return a===Ur||a===qu||a===ju}function J2(a,e,i,r,o,c){const u=new pS,d=new Z2,m=new Set,h=[],g=new Map,_=r.logarithmicDepthBuffer;let v=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(E){return m.add(E),E===0?"uv":`uv${E}`}function C(E,N,V,H,Y,he){const ue=H.fog,X=Y.geometry,z=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?H.environment:null,G=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap,J=e.get(E.envMap||z,G),fe=J&&J.mapping===sf?J.image.height:null,xe=x[E.type];E.precision!==null&&(v=r.getMaxPrecision(E.precision),v!==E.precision&&ft("WebGLProgram.getParameters:",E.precision,"not supported, using",v,"instead."));const P=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,K=P!==void 0?P.length:0;let ye=0;X.morphAttributes.position!==void 0&&(ye=1),X.morphAttributes.normal!==void 0&&(ye=2),X.morphAttributes.color!==void 0&&(ye=3);let Ce,ze,se,Se;if(xe){const qe=wa[xe];Ce=qe.vertexShader,ze=qe.fragmentShader}else{Ce=E.vertexShader,ze=E.fragmentShader;const qe=d.getVertexShaderStage(E),Ht=d.getFragmentShaderStage(E);d.update(E,qe,Ht),se=qe.id,Se=Ht.id}const Ee=a.getRenderTarget(),Ue=a.state.buffers.depth.getReversed(),st=Y.isInstancedMesh===!0,He=Y.isBatchedMesh===!0,bt=!!E.map,ht=!!E.matcap,ot=!!J,lt=!!E.aoMap,_t=!!E.lightMap,It=!!E.bumpMap&&E.wireframe===!1,sn=!!E.normalMap,Jt=!!E.displacementMap,Zt=!!E.emissiveMap,Lt=!!E.metalnessMap,$t=!!E.roughnessMap,j=E.anisotropy>0,qt=E.clearcoat>0,Tt=E.dispersion>0,F=E.iridescence>0,T=E.sheen>0,$=E.transmission>0,oe=j&&!!E.anisotropyMap,me=qt&&!!E.clearcoatMap,we=qt&&!!E.clearcoatNormalMap,Ie=qt&&!!E.clearcoatRoughnessMap,pe=F&&!!E.iridescenceMap,ge=F&&!!E.iridescenceThicknessMap,Re=T&&!!E.sheenColorMap,Ge=T&&!!E.sheenRoughnessMap,Be=!!E.specularMap,Oe=!!E.specularColorMap,Je=!!E.specularIntensityMap,nt=$&&!!E.transmissionMap,ut=$&&!!E.thicknessMap,q=!!E.gradientMap,De=!!E.alphaMap,_e=E.alphaTest>0,Le=!!E.alphaHash,Ne=!!E.extensions;let Ae=Ua;E.toneMapped&&(Ee===null||Ee.isXRRenderTarget===!0)&&(Ae=a.toneMapping);const Ke={shaderID:xe,shaderType:E.type,shaderName:E.name,vertexShader:Ce,fragmentShader:ze,defines:E.defines,customVertexShaderID:se,customFragmentShaderID:Se,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:v,batching:He,batchingColor:He&&Y._colorsTexture!==null,instancing:st,instancingColor:st&&Y.instanceColor!==null,instancingMorph:st&&Y.morphTexture!==null,outputColorSpace:Ee===null?a.outputColorSpace:Ee.isXRRenderTarget===!0?Ee.texture.colorSpace:Pt.workingColorSpace,alphaToCoverage:!!E.alphaToCoverage,map:bt,matcap:ht,envMap:ot,envMapMode:ot&&J.mapping,envMapCubeUVHeight:fe,aoMap:lt,lightMap:_t,bumpMap:It,normalMap:sn,displacementMap:Jt,emissiveMap:Zt,normalMapObjectSpace:sn&&E.normalMapType===ME,normalMapTangentSpace:sn&&E.normalMapType===vv,packedNormalMap:sn&&E.normalMapType===vv&&Q2(E.normalMap.format),metalnessMap:Lt,roughnessMap:$t,anisotropy:j,anisotropyMap:oe,clearcoat:qt,clearcoatMap:me,clearcoatNormalMap:we,clearcoatRoughnessMap:Ie,dispersion:Tt,iridescence:F,iridescenceMap:pe,iridescenceThicknessMap:ge,sheen:T,sheenColorMap:Re,sheenRoughnessMap:Ge,specularMap:Be,specularColorMap:Oe,specularIntensityMap:Je,transmission:$,transmissionMap:nt,thicknessMap:ut,gradientMap:q,opaque:E.transparent===!1&&E.blending===Bo&&E.alphaToCoverage===!1,alphaMap:De,alphaTest:_e,alphaHash:Le,combine:E.combine,mapUv:bt&&b(E.map.channel),aoMapUv:lt&&b(E.aoMap.channel),lightMapUv:_t&&b(E.lightMap.channel),bumpMapUv:It&&b(E.bumpMap.channel),normalMapUv:sn&&b(E.normalMap.channel),displacementMapUv:Jt&&b(E.displacementMap.channel),emissiveMapUv:Zt&&b(E.emissiveMap.channel),metalnessMapUv:Lt&&b(E.metalnessMap.channel),roughnessMapUv:$t&&b(E.roughnessMap.channel),anisotropyMapUv:oe&&b(E.anisotropyMap.channel),clearcoatMapUv:me&&b(E.clearcoatMap.channel),clearcoatNormalMapUv:we&&b(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ie&&b(E.clearcoatRoughnessMap.channel),iridescenceMapUv:pe&&b(E.iridescenceMap.channel),iridescenceThicknessMapUv:ge&&b(E.iridescenceThicknessMap.channel),sheenColorMapUv:Re&&b(E.sheenColorMap.channel),sheenRoughnessMapUv:Ge&&b(E.sheenRoughnessMap.channel),specularMapUv:Be&&b(E.specularMap.channel),specularColorMapUv:Oe&&b(E.specularColorMap.channel),specularIntensityMapUv:Je&&b(E.specularIntensityMap.channel),transmissionMapUv:nt&&b(E.transmissionMap.channel),thicknessMapUv:ut&&b(E.thicknessMap.channel),alphaMapUv:De&&b(E.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(sn||j),vertexNormals:!!X.attributes.normal,vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:Y.isPoints===!0&&!!X.attributes.uv&&(bt||De),fog:!!ue,useFog:E.fog===!0,fogExp2:!!ue&&ue.isFogExp2,flatShading:E.wireframe===!1&&(E.flatShading===!0||X.attributes.normal===void 0&&sn===!1&&(E.isMeshLambertMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isMeshPhysicalMaterial)),sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:Ue,skinning:Y.isSkinnedMesh===!0,hasPositionAttribute:X.attributes.position!==void 0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:ye,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numLightProbes:N.numLightProbes,numLightProbeGrids:he.length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:E.dithering,shadowMapEnabled:a.shadowMap.enabled&&V.length>0,shadowMapType:a.shadowMap.type,toneMapping:Ae,decodeVideoTexture:bt&&E.map.isVideoTexture===!0&&Pt.getTransfer(E.map.colorSpace)===an,decodeVideoTextureEmissive:Zt&&E.emissiveMap.isVideoTexture===!0&&Pt.getTransfer(E.emissiveMap.colorSpace)===an,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Da,flipSided:E.side===Ci,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Ne&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ne&&E.extensions.multiDraw===!0||He)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Ke.vertexUv1s=m.has(1),Ke.vertexUv2s=m.has(2),Ke.vertexUv3s=m.has(3),m.clear(),Ke}function y(E){const N=[];if(E.shaderID?N.push(E.shaderID):(N.push(E.customVertexShaderID),N.push(E.customFragmentShaderID)),E.defines!==void 0)for(const V in E.defines)N.push(V),N.push(E.defines[V]);return E.isRawShaderMaterial===!1&&(S(N,E),I(N,E),N.push(a.outputColorSpace)),N.push(E.customProgramCacheKey),N.join()}function S(E,N){E.push(N.precision),E.push(N.outputColorSpace),E.push(N.envMapMode),E.push(N.envMapCubeUVHeight),E.push(N.mapUv),E.push(N.alphaMapUv),E.push(N.lightMapUv),E.push(N.aoMapUv),E.push(N.bumpMapUv),E.push(N.normalMapUv),E.push(N.displacementMapUv),E.push(N.emissiveMapUv),E.push(N.metalnessMapUv),E.push(N.roughnessMapUv),E.push(N.anisotropyMapUv),E.push(N.clearcoatMapUv),E.push(N.clearcoatNormalMapUv),E.push(N.clearcoatRoughnessMapUv),E.push(N.iridescenceMapUv),E.push(N.iridescenceThicknessMapUv),E.push(N.sheenColorMapUv),E.push(N.sheenRoughnessMapUv),E.push(N.specularMapUv),E.push(N.specularColorMapUv),E.push(N.specularIntensityMapUv),E.push(N.transmissionMapUv),E.push(N.thicknessMapUv),E.push(N.combine),E.push(N.fogExp2),E.push(N.sizeAttenuation),E.push(N.morphTargetsCount),E.push(N.morphAttributeCount),E.push(N.numDirLights),E.push(N.numPointLights),E.push(N.numSpotLights),E.push(N.numSpotLightMaps),E.push(N.numHemiLights),E.push(N.numRectAreaLights),E.push(N.numDirLightShadows),E.push(N.numPointLightShadows),E.push(N.numSpotLightShadows),E.push(N.numSpotLightShadowsWithMaps),E.push(N.numLightProbes),E.push(N.shadowMapType),E.push(N.toneMapping),E.push(N.numClippingPlanes),E.push(N.numClipIntersection),E.push(N.depthPacking)}function I(E,N){u.disableAll(),N.instancing&&u.enable(0),N.instancingColor&&u.enable(1),N.instancingMorph&&u.enable(2),N.matcap&&u.enable(3),N.envMap&&u.enable(4),N.normalMapObjectSpace&&u.enable(5),N.normalMapTangentSpace&&u.enable(6),N.clearcoat&&u.enable(7),N.iridescence&&u.enable(8),N.alphaTest&&u.enable(9),N.vertexColors&&u.enable(10),N.vertexAlphas&&u.enable(11),N.vertexUv1s&&u.enable(12),N.vertexUv2s&&u.enable(13),N.vertexUv3s&&u.enable(14),N.vertexTangents&&u.enable(15),N.anisotropy&&u.enable(16),N.alphaHash&&u.enable(17),N.batching&&u.enable(18),N.dispersion&&u.enable(19),N.batchingColor&&u.enable(20),N.gradientMap&&u.enable(21),N.packedNormalMap&&u.enable(22),N.vertexNormals&&u.enable(23),E.push(u.mask),u.disableAll(),N.fog&&u.enable(0),N.useFog&&u.enable(1),N.flatShading&&u.enable(2),N.logarithmicDepthBuffer&&u.enable(3),N.reversedDepthBuffer&&u.enable(4),N.skinning&&u.enable(5),N.morphTargets&&u.enable(6),N.morphNormals&&u.enable(7),N.morphColors&&u.enable(8),N.premultipliedAlpha&&u.enable(9),N.shadowMapEnabled&&u.enable(10),N.doubleSided&&u.enable(11),N.flipSided&&u.enable(12),N.useDepthPacking&&u.enable(13),N.dithering&&u.enable(14),N.transmission&&u.enable(15),N.sheen&&u.enable(16),N.opaque&&u.enable(17),N.pointsUvs&&u.enable(18),N.decodeVideoTexture&&u.enable(19),N.decodeVideoTextureEmissive&&u.enable(20),N.alphaToCoverage&&u.enable(21),N.numLightProbeGrids>0&&u.enable(22),N.hasPositionAttribute&&u.enable(23),E.push(u.mask)}function O(E){const N=x[E.type];let V;if(N){const H=wa[N];V=yb.clone(H.uniforms)}else V=E.uniforms;return V}function A(E,N){let V=g.get(N);return V!==void 0?++V.usedTimes:(V=new q2(a,N,E,o),h.push(V),g.set(N,V)),V}function U(E){if(--E.usedTimes===0){const N=h.indexOf(E);h[N]=h[h.length-1],h.pop(),g.delete(E.cacheKey),E.destroy()}}function L(E){d.remove(E)}function B(){d.dispose()}return{getParameters:C,getProgramCacheKey:y,getUniforms:O,acquireProgram:A,releaseProgram:U,releaseShaderCache:L,programs:h,dispose:B}}function $2(){let a=new WeakMap;function e(u){return a.has(u)}function i(u){let d=a.get(u);return d===void 0&&(d={},a.set(u,d)),d}function r(u){a.delete(u)}function o(u,d,m){a.get(u)[d]=m}function c(){a=new WeakMap}return{has:e,get:i,remove:r,update:o,dispose:c}}function eR(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.materialVariant!==e.materialVariant?a.materialVariant-e.materialVariant:a.z!==e.z?a.z-e.z:a.id-e.id}function fx(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function dx(){const a=[];let e=0;const i=[],r=[],o=[];function c(){e=0,i.length=0,r.length=0,o.length=0}function u(v){let x=0;return v.isInstancedMesh&&(x+=2),v.isSkinnedMesh&&(x+=1),x}function d(v,x,b,C,y,S){let I=a[e];return I===void 0?(I={id:v.id,object:v,geometry:x,material:b,materialVariant:u(v),groupOrder:C,renderOrder:v.renderOrder,z:y,group:S},a[e]=I):(I.id=v.id,I.object=v,I.geometry=x,I.material=b,I.materialVariant=u(v),I.groupOrder=C,I.renderOrder=v.renderOrder,I.z=y,I.group=S),e++,I}function m(v,x,b,C,y,S){const I=d(v,x,b,C,y,S);b.transmission>0?r.push(I):b.transparent===!0?o.push(I):i.push(I)}function h(v,x,b,C,y,S){const I=d(v,x,b,C,y,S);b.transmission>0?r.unshift(I):b.transparent===!0?o.unshift(I):i.unshift(I)}function g(v,x,b){i.length>1&&i.sort(v||eR),r.length>1&&r.sort(x||fx),o.length>1&&o.sort(x||fx),b&&(i.reverse(),r.reverse(),o.reverse())}function _(){for(let v=e,x=a.length;v<x;v++){const b=a[v];if(b.id===null)break;b.id=null,b.object=null,b.geometry=null,b.material=null,b.group=null}}return{opaque:i,transmissive:r,transparent:o,init:c,push:m,unshift:h,finish:_,sort:g}}function tR(){let a=new WeakMap;function e(r,o){const c=a.get(r);let u;return c===void 0?(u=new dx,a.set(r,[u])):o>=c.length?(u=new dx,c.push(u)):u=c[o],u}function i(){a=new WeakMap}return{get:e,dispose:i}}function nR(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new te,color:new Qt};break;case"SpotLight":i={position:new te,direction:new te,color:new Qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new te,color:new Qt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new te,skyColor:new Qt,groundColor:new Qt};break;case"RectAreaLight":i={color:new Qt,position:new te,halfWidth:new te,halfHeight:new te};break}return a[e.id]=i,i}}}function iR(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Yt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Yt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Yt,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=i,i}}}let aR=0;function sR(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function rR(a){const e=new nR,i=iR(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new te);const o=new te,c=new On,u=new On;function d(h){let g=0,_=0,v=0;for(let N=0;N<9;N++)r.probe[N].set(0,0,0);let x=0,b=0,C=0,y=0,S=0,I=0,O=0,A=0,U=0,L=0,B=0;h.sort(sR);for(let N=0,V=h.length;N<V;N++){const H=h[N],Y=H.color,he=H.intensity,ue=H.distance;let X=null;if(H.shadow&&H.shadow.map&&(H.shadow.map.texture.format===Ur?X=H.shadow.map.texture:X=H.shadow.map.depthTexture||H.shadow.map.texture),H.isAmbientLight)g+=Y.r*he,_+=Y.g*he,v+=Y.b*he;else if(H.isLightProbe){for(let z=0;z<9;z++)r.probe[z].addScaledVector(H.sh.coefficients[z],he);B++}else if(H.isDirectionalLight){const z=e.get(H);if(z.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const G=H.shadow,J=i.get(H);J.shadowIntensity=G.intensity,J.shadowBias=G.bias,J.shadowNormalBias=G.normalBias,J.shadowRadius=G.radius,J.shadowMapSize=G.mapSize,r.directionalShadow[x]=J,r.directionalShadowMap[x]=X,r.directionalShadowMatrix[x]=H.shadow.matrix,I++}r.directional[x]=z,x++}else if(H.isSpotLight){const z=e.get(H);z.position.setFromMatrixPosition(H.matrixWorld),z.color.copy(Y).multiplyScalar(he),z.distance=ue,z.coneCos=Math.cos(H.angle),z.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),z.decay=H.decay,r.spot[C]=z;const G=H.shadow;if(H.map&&(r.spotLightMap[U]=H.map,U++,G.updateMatrices(H),H.castShadow&&L++),r.spotLightMatrix[C]=G.matrix,H.castShadow){const J=i.get(H);J.shadowIntensity=G.intensity,J.shadowBias=G.bias,J.shadowNormalBias=G.normalBias,J.shadowRadius=G.radius,J.shadowMapSize=G.mapSize,r.spotShadow[C]=J,r.spotShadowMap[C]=X,A++}C++}else if(H.isRectAreaLight){const z=e.get(H);z.color.copy(Y).multiplyScalar(he),z.halfWidth.set(H.width*.5,0,0),z.halfHeight.set(0,H.height*.5,0),r.rectArea[y]=z,y++}else if(H.isPointLight){const z=e.get(H);if(z.color.copy(H.color).multiplyScalar(H.intensity),z.distance=H.distance,z.decay=H.decay,H.castShadow){const G=H.shadow,J=i.get(H);J.shadowIntensity=G.intensity,J.shadowBias=G.bias,J.shadowNormalBias=G.normalBias,J.shadowRadius=G.radius,J.shadowMapSize=G.mapSize,J.shadowCameraNear=G.camera.near,J.shadowCameraFar=G.camera.far,r.pointShadow[b]=J,r.pointShadowMap[b]=X,r.pointShadowMatrix[b]=H.shadow.matrix,O++}r.point[b]=z,b++}else if(H.isHemisphereLight){const z=e.get(H);z.skyColor.copy(H.color).multiplyScalar(he),z.groundColor.copy(H.groundColor).multiplyScalar(he),r.hemi[S]=z,S++}}y>0&&(a.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=We.LTC_FLOAT_1,r.rectAreaLTC2=We.LTC_FLOAT_2):(r.rectAreaLTC1=We.LTC_HALF_1,r.rectAreaLTC2=We.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=_,r.ambient[2]=v;const E=r.hash;(E.directionalLength!==x||E.pointLength!==b||E.spotLength!==C||E.rectAreaLength!==y||E.hemiLength!==S||E.numDirectionalShadows!==I||E.numPointShadows!==O||E.numSpotShadows!==A||E.numSpotMaps!==U||E.numLightProbes!==B)&&(r.directional.length=x,r.spot.length=C,r.rectArea.length=y,r.point.length=b,r.hemi.length=S,r.directionalShadow.length=I,r.directionalShadowMap.length=I,r.pointShadow.length=O,r.pointShadowMap.length=O,r.spotShadow.length=A,r.spotShadowMap.length=A,r.directionalShadowMatrix.length=I,r.pointShadowMatrix.length=O,r.spotLightMatrix.length=A+U-L,r.spotLightMap.length=U,r.numSpotLightShadowsWithMaps=L,r.numLightProbes=B,E.directionalLength=x,E.pointLength=b,E.spotLength=C,E.rectAreaLength=y,E.hemiLength=S,E.numDirectionalShadows=I,E.numPointShadows=O,E.numSpotShadows=A,E.numSpotMaps=U,E.numLightProbes=B,r.version=aR++)}function m(h,g){let _=0,v=0,x=0,b=0,C=0;const y=g.matrixWorldInverse;for(let S=0,I=h.length;S<I;S++){const O=h[S];if(O.isDirectionalLight){const A=r.directional[_];A.direction.setFromMatrixPosition(O.matrixWorld),o.setFromMatrixPosition(O.target.matrixWorld),A.direction.sub(o),A.direction.transformDirection(y),_++}else if(O.isSpotLight){const A=r.spot[x];A.position.setFromMatrixPosition(O.matrixWorld),A.position.applyMatrix4(y),A.direction.setFromMatrixPosition(O.matrixWorld),o.setFromMatrixPosition(O.target.matrixWorld),A.direction.sub(o),A.direction.transformDirection(y),x++}else if(O.isRectAreaLight){const A=r.rectArea[b];A.position.setFromMatrixPosition(O.matrixWorld),A.position.applyMatrix4(y),u.identity(),c.copy(O.matrixWorld),c.premultiply(y),u.extractRotation(c),A.halfWidth.set(O.width*.5,0,0),A.halfHeight.set(0,O.height*.5,0),A.halfWidth.applyMatrix4(u),A.halfHeight.applyMatrix4(u),b++}else if(O.isPointLight){const A=r.point[v];A.position.setFromMatrixPosition(O.matrixWorld),A.position.applyMatrix4(y),v++}else if(O.isHemisphereLight){const A=r.hemi[C];A.direction.setFromMatrixPosition(O.matrixWorld),A.direction.transformDirection(y),C++}}}return{setup:d,setupView:m,state:r}}function hx(a){const e=new rR(a),i=[],r=[],o=[];function c(v){_.camera=v,i.length=0,r.length=0,o.length=0}function u(v){i.push(v)}function d(v){r.push(v)}function m(v){o.push(v)}function h(){e.setup(i)}function g(v){e.setupView(i,v)}const _={lightsArray:i,shadowsArray:r,lightProbeGridArray:o,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:_,setupLights:h,setupLightsView:g,pushLight:u,pushShadow:d,pushLightProbeGrid:m}}function oR(a){let e=new WeakMap;function i(o,c=0){const u=e.get(o);let d;return u===void 0?(d=new hx(a),e.set(o,[d])):c>=u.length?(d=new hx(a),u.push(d)):d=u[c],d}function r(){e=new WeakMap}return{get:i,dispose:r}}const lR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,cR=`uniform sampler2D shadow_pass;
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
}`,uR=[new te(1,0,0),new te(-1,0,0),new te(0,1,0),new te(0,-1,0),new te(0,0,1),new te(0,0,-1)],fR=[new te(0,-1,0),new te(0,-1,0),new te(0,0,1),new te(0,0,-1),new te(0,-1,0),new te(0,-1,0)],px=new On,Xl=new te,tp=new te;function dR(a,e,i){let r=new vS;const o=new Yt,c=new Yt,u=new Cn,d=new Ab,m=new Rb,h={},g=i.maxTextureSize,_={[ps]:Ci,[Ci]:ps,[Da]:Da},v=new sa({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Yt},radius:{value:4}},vertexShader:lR,fragmentShader:cR}),x=v.clone();x.defines.HORIZONTAL_PASS=1;const b=new aa;b.setAttribute("position",new Pa(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new zi(b,v),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Gu;let S=this.type;this.render=function(L,B,E){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||L.length===0)return;this.type===Jy&&(ft("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Gu);const N=a.getRenderTarget(),V=a.getActiveCubeFace(),H=a.getActiveMipmapLevel(),Y=a.state;Y.setBlending(ds),Y.buffers.depth.getReversed()===!0?Y.buffers.color.setClear(0,0,0,0):Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const he=S!==this.type;he&&B.traverse(function(ue){ue.material&&(Array.isArray(ue.material)?ue.material.forEach(X=>X.needsUpdate=!0):ue.material.needsUpdate=!0)});for(let ue=0,X=L.length;ue<X;ue++){const z=L[ue],G=z.shadow;if(G===void 0){ft("WebGLShadowMap:",z,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;o.copy(G.mapSize);const J=G.getFrameExtents();o.multiply(J),c.copy(G.mapSize),(o.x>g||o.y>g)&&(o.x>g&&(c.x=Math.floor(g/J.x),o.x=c.x*J.x,G.mapSize.x=c.x),o.y>g&&(c.y=Math.floor(g/J.y),o.y=c.y*J.y,G.mapSize.y=c.y));const fe=a.state.buffers.depth.getReversed();if(G.camera._reversedDepth=fe,G.map===null||he===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===Wl){if(z.isPointLight){ft("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new Oa(o.x,o.y,{format:Ur,type:ms,minFilter:wn,magFilter:wn,generateMipmaps:!1}),G.map.texture.name=z.name+".shadowMap",G.map.depthTexture=new Xo(o.x,o.y,La),G.map.depthTexture.name=z.name+".shadowMapDepth",G.map.depthTexture.format=gs,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=ri,G.map.depthTexture.magFilter=ri}else z.isPointLight?(G.map=new AS(o.x),G.map.depthTexture=new vb(o.x,Ia)):(G.map=new Oa(o.x,o.y),G.map.depthTexture=new Xo(o.x,o.y,Ia)),G.map.depthTexture.name=z.name+".shadowMap",G.map.depthTexture.format=gs,this.type===Gu?(G.map.depthTexture.compareFunction=fe?hm:dm,G.map.depthTexture.minFilter=wn,G.map.depthTexture.magFilter=wn):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=ri,G.map.depthTexture.magFilter=ri);G.camera.updateProjectionMatrix()}const xe=G.map.isWebGLCubeRenderTarget?6:1;for(let P=0;P<xe;P++){if(G.map.isWebGLCubeRenderTarget)a.setRenderTarget(G.map,P),a.clear();else{P===0&&(a.setRenderTarget(G.map),a.clear());const K=G.getViewport(P);u.set(c.x*K.x,c.y*K.y,c.x*K.z,c.y*K.w),Y.viewport(u)}if(z.isPointLight){const K=G.camera,ye=G.matrix,Ce=z.distance||K.far;Ce!==K.far&&(K.far=Ce,K.updateProjectionMatrix()),Xl.setFromMatrixPosition(z.matrixWorld),K.position.copy(Xl),tp.copy(K.position),tp.add(uR[P]),K.up.copy(fR[P]),K.lookAt(tp),K.updateMatrixWorld(),ye.makeTranslation(-Xl.x,-Xl.y,-Xl.z),px.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),G._frustum.setFromProjectionMatrix(px,K.coordinateSystem,K.reversedDepth)}else G.updateMatrices(z);r=G.getFrustum(),A(B,E,G.camera,z,this.type)}G.isPointLightShadow!==!0&&this.type===Wl&&I(G,E),G.needsUpdate=!1}S=this.type,y.needsUpdate=!1,a.setRenderTarget(N,V,H)};function I(L,B){const E=e.update(C);v.defines.VSM_SAMPLES!==L.blurSamples&&(v.defines.VSM_SAMPLES=L.blurSamples,x.defines.VSM_SAMPLES=L.blurSamples,v.needsUpdate=!0,x.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new Oa(o.x,o.y,{format:Ur,type:ms})),v.uniforms.shadow_pass.value=L.map.depthTexture,v.uniforms.resolution.value=L.mapSize,v.uniforms.radius.value=L.radius,a.setRenderTarget(L.mapPass),a.clear(),a.renderBufferDirect(B,null,E,v,C,null),x.uniforms.shadow_pass.value=L.mapPass.texture,x.uniforms.resolution.value=L.mapSize,x.uniforms.radius.value=L.radius,a.setRenderTarget(L.map),a.clear(),a.renderBufferDirect(B,null,E,x,C,null)}function O(L,B,E,N){let V=null;const H=E.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(H!==void 0)V=H;else if(V=E.isPointLight===!0?m:d,a.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0||B.alphaToCoverage===!0){const Y=V.uuid,he=B.uuid;let ue=h[Y];ue===void 0&&(ue={},h[Y]=ue);let X=ue[he];X===void 0&&(X=V.clone(),ue[he]=X,B.addEventListener("dispose",U)),V=X}if(V.visible=B.visible,V.wireframe=B.wireframe,N===Wl?V.side=B.shadowSide!==null?B.shadowSide:B.side:V.side=B.shadowSide!==null?B.shadowSide:_[B.side],V.alphaMap=B.alphaMap,V.alphaTest=B.alphaToCoverage===!0?.5:B.alphaTest,V.map=B.map,V.clipShadows=B.clipShadows,V.clippingPlanes=B.clippingPlanes,V.clipIntersection=B.clipIntersection,V.displacementMap=B.displacementMap,V.displacementScale=B.displacementScale,V.displacementBias=B.displacementBias,V.wireframeLinewidth=B.wireframeLinewidth,V.linewidth=B.linewidth,E.isPointLight===!0&&V.isMeshDistanceMaterial===!0){const Y=a.properties.get(V);Y.light=E}return V}function A(L,B,E,N,V){if(L.visible===!1)return;if(L.layers.test(B.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&V===Wl)&&(!L.frustumCulled||r.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,L.matrixWorld);const he=e.update(L),ue=L.material;if(Array.isArray(ue)){const X=he.groups;for(let z=0,G=X.length;z<G;z++){const J=X[z],fe=ue[J.materialIndex];if(fe&&fe.visible){const xe=O(L,fe,N,V);L.onBeforeShadow(a,L,B,E,he,xe,J),a.renderBufferDirect(E,null,he,xe,L,J),L.onAfterShadow(a,L,B,E,he,xe,J)}}}else if(ue.visible){const X=O(L,ue,N,V);L.onBeforeShadow(a,L,B,E,he,X,null),a.renderBufferDirect(E,null,he,X,L,null),L.onAfterShadow(a,L,B,E,he,X,null)}}const Y=L.children;for(let he=0,ue=Y.length;he<ue;he++)A(Y[he],B,E,N,V)}function U(L){L.target.removeEventListener("dispose",U);for(const E in h){const N=h[E],V=L.target.uuid;V in N&&(N[V].dispose(),delete N[V])}}}function hR(a,e){function i(){let q=!1;const De=new Cn;let _e=null;const Le=new Cn(0,0,0,0);return{setMask:function(Ne){_e!==Ne&&!q&&(a.colorMask(Ne,Ne,Ne,Ne),_e=Ne)},setLocked:function(Ne){q=Ne},setClear:function(Ne,Ae,Ke,qe,Ht){Ht===!0&&(Ne*=qe,Ae*=qe,Ke*=qe),De.set(Ne,Ae,Ke,qe),Le.equals(De)===!1&&(a.clearColor(Ne,Ae,Ke,qe),Le.copy(De))},reset:function(){q=!1,_e=null,Le.set(-1,0,0,0)}}}function r(){let q=!1,De=!1,_e=null,Le=null,Ne=null;return{setReversed:function(Ae){if(De!==Ae){const Ke=e.get("EXT_clip_control");Ae?Ke.clipControlEXT(Ke.LOWER_LEFT_EXT,Ke.ZERO_TO_ONE_EXT):Ke.clipControlEXT(Ke.LOWER_LEFT_EXT,Ke.NEGATIVE_ONE_TO_ONE_EXT),De=Ae;const qe=Ne;Ne=null,this.setClear(qe)}},getReversed:function(){return De},setTest:function(Ae){Ae?Ee(a.DEPTH_TEST):Ue(a.DEPTH_TEST)},setMask:function(Ae){_e!==Ae&&!q&&(a.depthMask(Ae),_e=Ae)},setFunc:function(Ae){if(De&&(Ae=LE[Ae]),Le!==Ae){switch(Ae){case pp:a.depthFunc(a.NEVER);break;case mp:a.depthFunc(a.ALWAYS);break;case gp:a.depthFunc(a.LESS);break;case Vo:a.depthFunc(a.LEQUAL);break;case _p:a.depthFunc(a.EQUAL);break;case vp:a.depthFunc(a.GEQUAL);break;case xp:a.depthFunc(a.GREATER);break;case Sp:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}Le=Ae}},setLocked:function(Ae){q=Ae},setClear:function(Ae){Ne!==Ae&&(Ne=Ae,De&&(Ae=1-Ae),a.clearDepth(Ae))},reset:function(){q=!1,_e=null,Le=null,Ne=null,De=!1}}}function o(){let q=!1,De=null,_e=null,Le=null,Ne=null,Ae=null,Ke=null,qe=null,Ht=null;return{setTest:function(Nt){q||(Nt?Ee(a.STENCIL_TEST):Ue(a.STENCIL_TEST))},setMask:function(Nt){De!==Nt&&!q&&(a.stencilMask(Nt),De=Nt)},setFunc:function(Nt,Bt,Mn){(_e!==Nt||Le!==Bt||Ne!==Mn)&&(a.stencilFunc(Nt,Bt,Mn),_e=Nt,Le=Bt,Ne=Mn)},setOp:function(Nt,Bt,Mn){(Ae!==Nt||Ke!==Bt||qe!==Mn)&&(a.stencilOp(Nt,Bt,Mn),Ae=Nt,Ke=Bt,qe=Mn)},setLocked:function(Nt){q=Nt},setClear:function(Nt){Ht!==Nt&&(a.clearStencil(Nt),Ht=Nt)},reset:function(){q=!1,De=null,_e=null,Le=null,Ne=null,Ae=null,Ke=null,qe=null,Ht=null}}}const c=new i,u=new r,d=new o,m=new WeakMap,h=new WeakMap;let g={},_={},v={},x=new WeakMap,b=[],C=null,y=!1,S=null,I=null,O=null,A=null,U=null,L=null,B=null,E=new Qt(0,0,0),N=0,V=!1,H=null,Y=null,he=null,ue=null,X=null;const z=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,J=0;const fe=a.getParameter(a.VERSION);fe.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(fe)[1]),G=J>=1):fe.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(fe)[1]),G=J>=2);let xe=null,P={};const K=a.getParameter(a.SCISSOR_BOX),ye=a.getParameter(a.VIEWPORT),Ce=new Cn().fromArray(K),ze=new Cn().fromArray(ye);function se(q,De,_e,Le){const Ne=new Uint8Array(4),Ae=a.createTexture();a.bindTexture(q,Ae),a.texParameteri(q,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(q,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let Ke=0;Ke<_e;Ke++)q===a.TEXTURE_3D||q===a.TEXTURE_2D_ARRAY?a.texImage3D(De,0,a.RGBA,1,1,Le,0,a.RGBA,a.UNSIGNED_BYTE,Ne):a.texImage2D(De+Ke,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,Ne);return Ae}const Se={};Se[a.TEXTURE_2D]=se(a.TEXTURE_2D,a.TEXTURE_2D,1),Se[a.TEXTURE_CUBE_MAP]=se(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),Se[a.TEXTURE_2D_ARRAY]=se(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1),Se[a.TEXTURE_3D]=se(a.TEXTURE_3D,a.TEXTURE_3D,1,1),c.setClear(0,0,0,1),u.setClear(1),d.setClear(0),Ee(a.DEPTH_TEST),u.setFunc(Vo),It(!1),sn(mv),Ee(a.CULL_FACE),lt(ds);function Ee(q){g[q]!==!0&&(a.enable(q),g[q]=!0)}function Ue(q){g[q]!==!1&&(a.disable(q),g[q]=!1)}function st(q,De){return v[q]!==De?(a.bindFramebuffer(q,De),v[q]=De,q===a.DRAW_FRAMEBUFFER&&(v[a.FRAMEBUFFER]=De),q===a.FRAMEBUFFER&&(v[a.DRAW_FRAMEBUFFER]=De),!0):!1}function He(q,De){let _e=b,Le=!1;if(q){_e=x.get(De),_e===void 0&&(_e=[],x.set(De,_e));const Ne=q.textures;if(_e.length!==Ne.length||_e[0]!==a.COLOR_ATTACHMENT0){for(let Ae=0,Ke=Ne.length;Ae<Ke;Ae++)_e[Ae]=a.COLOR_ATTACHMENT0+Ae;_e.length=Ne.length,Le=!0}}else _e[0]!==a.BACK&&(_e[0]=a.BACK,Le=!0);Le&&a.drawBuffers(_e)}function bt(q){return C!==q?(a.useProgram(q),C=q,!0):!1}const ht={[wr]:a.FUNC_ADD,[eE]:a.FUNC_SUBTRACT,[tE]:a.FUNC_REVERSE_SUBTRACT};ht[nE]=a.MIN,ht[iE]=a.MAX;const ot={[aE]:a.ZERO,[sE]:a.ONE,[rE]:a.SRC_COLOR,[dp]:a.SRC_ALPHA,[dE]:a.SRC_ALPHA_SATURATE,[uE]:a.DST_COLOR,[lE]:a.DST_ALPHA,[oE]:a.ONE_MINUS_SRC_COLOR,[hp]:a.ONE_MINUS_SRC_ALPHA,[fE]:a.ONE_MINUS_DST_COLOR,[cE]:a.ONE_MINUS_DST_ALPHA,[hE]:a.CONSTANT_COLOR,[pE]:a.ONE_MINUS_CONSTANT_COLOR,[mE]:a.CONSTANT_ALPHA,[gE]:a.ONE_MINUS_CONSTANT_ALPHA};function lt(q,De,_e,Le,Ne,Ae,Ke,qe,Ht,Nt){if(q===ds){y===!0&&(Ue(a.BLEND),y=!1);return}if(y===!1&&(Ee(a.BLEND),y=!0),q!==$y){if(q!==S||Nt!==V){if((I!==wr||U!==wr)&&(a.blendEquation(a.FUNC_ADD),I=wr,U=wr),Nt)switch(q){case Bo:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case fp:a.blendFunc(a.ONE,a.ONE);break;case gv:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case _v:a.blendFuncSeparate(a.DST_COLOR,a.ONE_MINUS_SRC_ALPHA,a.ZERO,a.ONE);break;default:zt("WebGLState: Invalid blending: ",q);break}else switch(q){case Bo:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case fp:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE,a.ONE,a.ONE);break;case gv:zt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case _v:zt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:zt("WebGLState: Invalid blending: ",q);break}O=null,A=null,L=null,B=null,E.set(0,0,0),N=0,S=q,V=Nt}return}Ne=Ne||De,Ae=Ae||_e,Ke=Ke||Le,(De!==I||Ne!==U)&&(a.blendEquationSeparate(ht[De],ht[Ne]),I=De,U=Ne),(_e!==O||Le!==A||Ae!==L||Ke!==B)&&(a.blendFuncSeparate(ot[_e],ot[Le],ot[Ae],ot[Ke]),O=_e,A=Le,L=Ae,B=Ke),(qe.equals(E)===!1||Ht!==N)&&(a.blendColor(qe.r,qe.g,qe.b,Ht),E.copy(qe),N=Ht),S=q,V=!1}function _t(q,De){q.side===Da?Ue(a.CULL_FACE):Ee(a.CULL_FACE);let _e=q.side===Ci;De&&(_e=!_e),It(_e),q.blending===Bo&&q.transparent===!1?lt(ds):lt(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),u.setFunc(q.depthFunc),u.setTest(q.depthTest),u.setMask(q.depthWrite),c.setMask(q.colorWrite);const Le=q.stencilWrite;d.setTest(Le),Le&&(d.setMask(q.stencilWriteMask),d.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),d.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),Zt(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?Ee(a.SAMPLE_ALPHA_TO_COVERAGE):Ue(a.SAMPLE_ALPHA_TO_COVERAGE)}function It(q){H!==q&&(q?a.frontFace(a.CW):a.frontFace(a.CCW),H=q)}function sn(q){q!==Ky?(Ee(a.CULL_FACE),q!==Y&&(q===mv?a.cullFace(a.BACK):q===Qy?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):Ue(a.CULL_FACE),Y=q}function Jt(q){q!==he&&(G&&a.lineWidth(q),he=q)}function Zt(q,De,_e){q?(Ee(a.POLYGON_OFFSET_FILL),(ue!==De||X!==_e)&&(ue=De,X=_e,u.getReversed()&&(De=-De),a.polygonOffset(De,_e))):Ue(a.POLYGON_OFFSET_FILL)}function Lt(q){q?Ee(a.SCISSOR_TEST):Ue(a.SCISSOR_TEST)}function $t(q){q===void 0&&(q=a.TEXTURE0+z-1),xe!==q&&(a.activeTexture(q),xe=q)}function j(q,De,_e){_e===void 0&&(xe===null?_e=a.TEXTURE0+z-1:_e=xe);let Le=P[_e];Le===void 0&&(Le={type:void 0,texture:void 0},P[_e]=Le),(Le.type!==q||Le.texture!==De)&&(xe!==_e&&(a.activeTexture(_e),xe=_e),a.bindTexture(q,De||Se[q]),Le.type=q,Le.texture=De)}function qt(){const q=P[xe];q!==void 0&&q.type!==void 0&&(a.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function Tt(){try{a.compressedTexImage2D(...arguments)}catch(q){zt("WebGLState:",q)}}function F(){try{a.compressedTexImage3D(...arguments)}catch(q){zt("WebGLState:",q)}}function T(){try{a.texSubImage2D(...arguments)}catch(q){zt("WebGLState:",q)}}function $(){try{a.texSubImage3D(...arguments)}catch(q){zt("WebGLState:",q)}}function oe(){try{a.compressedTexSubImage2D(...arguments)}catch(q){zt("WebGLState:",q)}}function me(){try{a.compressedTexSubImage3D(...arguments)}catch(q){zt("WebGLState:",q)}}function we(){try{a.texStorage2D(...arguments)}catch(q){zt("WebGLState:",q)}}function Ie(){try{a.texStorage3D(...arguments)}catch(q){zt("WebGLState:",q)}}function pe(){try{a.texImage2D(...arguments)}catch(q){zt("WebGLState:",q)}}function ge(){try{a.texImage3D(...arguments)}catch(q){zt("WebGLState:",q)}}function Re(q){return _[q]!==void 0?_[q]:a.getParameter(q)}function Ge(q,De){_[q]!==De&&(a.pixelStorei(q,De),_[q]=De)}function Be(q){Ce.equals(q)===!1&&(a.scissor(q.x,q.y,q.z,q.w),Ce.copy(q))}function Oe(q){ze.equals(q)===!1&&(a.viewport(q.x,q.y,q.z,q.w),ze.copy(q))}function Je(q,De){let _e=h.get(De);_e===void 0&&(_e=new WeakMap,h.set(De,_e));let Le=_e.get(q);Le===void 0&&(Le=a.getUniformBlockIndex(De,q.name),_e.set(q,Le))}function nt(q,De){const Le=h.get(De).get(q);m.get(De)!==Le&&(a.uniformBlockBinding(De,Le,q.__bindingPointIndex),m.set(De,Le))}function ut(){a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.DEPTH_TEST),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SCISSOR_TEST),a.disable(a.STENCIL_TEST),a.disable(a.SAMPLE_ALPHA_TO_COVERAGE),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ONE,a.ZERO),a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO),a.blendColor(0,0,0,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(a.LESS),u.setReversed(!1),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(a.ALWAYS,0,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.clearStencil(0),a.cullFace(a.BACK),a.frontFace(a.CCW),a.polygonOffset(0,0),a.activeTexture(a.TEXTURE0),a.bindFramebuffer(a.FRAMEBUFFER,null),a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,null),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),a.pixelStorei(a.PACK_ALIGNMENT,4),a.pixelStorei(a.UNPACK_ALIGNMENT,4),a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,!1),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,a.BROWSER_DEFAULT_WEBGL),a.pixelStorei(a.PACK_ROW_LENGTH,0),a.pixelStorei(a.PACK_SKIP_PIXELS,0),a.pixelStorei(a.PACK_SKIP_ROWS,0),a.pixelStorei(a.UNPACK_ROW_LENGTH,0),a.pixelStorei(a.UNPACK_IMAGE_HEIGHT,0),a.pixelStorei(a.UNPACK_SKIP_PIXELS,0),a.pixelStorei(a.UNPACK_SKIP_ROWS,0),a.pixelStorei(a.UNPACK_SKIP_IMAGES,0),g={},_={},xe=null,P={},v={},x=new WeakMap,b=[],C=null,y=!1,S=null,I=null,O=null,A=null,U=null,L=null,B=null,E=new Qt(0,0,0),N=0,V=!1,H=null,Y=null,he=null,ue=null,X=null,Ce.set(0,0,a.canvas.width,a.canvas.height),ze.set(0,0,a.canvas.width,a.canvas.height),c.reset(),u.reset(),d.reset()}return{buffers:{color:c,depth:u,stencil:d},enable:Ee,disable:Ue,bindFramebuffer:st,drawBuffers:He,useProgram:bt,setBlending:lt,setMaterial:_t,setFlipSided:It,setCullFace:sn,setLineWidth:Jt,setPolygonOffset:Zt,setScissorTest:Lt,activeTexture:$t,bindTexture:j,unbindTexture:qt,compressedTexImage2D:Tt,compressedTexImage3D:F,texImage2D:pe,texImage3D:ge,pixelStorei:Ge,getParameter:Re,updateUBOMapping:Je,uniformBlockBinding:nt,texStorage2D:we,texStorage3D:Ie,texSubImage2D:T,texSubImage3D:$,compressedTexSubImage2D:oe,compressedTexSubImage3D:me,scissor:Be,viewport:Oe,reset:ut}}function pR(a,e,i,r,o,c,u){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Yt,g=new WeakMap,_=new Set;let v;const x=new WeakMap;let b=!1;try{b=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function C(F,T){return b?new OffscreenCanvas(F,T):Ju("canvas")}function y(F,T,$){let oe=1;const me=Tt(F);if((me.width>$||me.height>$)&&(oe=$/Math.max(me.width,me.height)),oe<1)if(typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&F instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&F instanceof ImageBitmap||typeof VideoFrame<"u"&&F instanceof VideoFrame){const we=Math.floor(oe*me.width),Ie=Math.floor(oe*me.height);v===void 0&&(v=C(we,Ie));const pe=T?C(we,Ie):v;return pe.width=we,pe.height=Ie,pe.getContext("2d").drawImage(F,0,0,we,Ie),ft("WebGLRenderer: Texture has been resized from ("+me.width+"x"+me.height+") to ("+we+"x"+Ie+")."),pe}else return"data"in F&&ft("WebGLRenderer: Image in DataTexture is too big ("+me.width+"x"+me.height+")."),F;return F}function S(F){return F.generateMipmaps}function I(F){a.generateMipmap(F)}function O(F){return F.isWebGLCubeRenderTarget?a.TEXTURE_CUBE_MAP:F.isWebGL3DRenderTarget?a.TEXTURE_3D:F.isWebGLArrayRenderTarget||F.isCompressedArrayTexture?a.TEXTURE_2D_ARRAY:a.TEXTURE_2D}function A(F,T,$,oe,me,we=!1){if(F!==null){if(a[F]!==void 0)return a[F];ft("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let Ie;oe&&(Ie=e.get("EXT_texture_norm16"),Ie||ft("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let pe=T;if(T===a.RED&&($===a.FLOAT&&(pe=a.R32F),$===a.HALF_FLOAT&&(pe=a.R16F),$===a.UNSIGNED_BYTE&&(pe=a.R8),$===a.UNSIGNED_SHORT&&Ie&&(pe=Ie.R16_EXT),$===a.SHORT&&Ie&&(pe=Ie.R16_SNORM_EXT)),T===a.RED_INTEGER&&($===a.UNSIGNED_BYTE&&(pe=a.R8UI),$===a.UNSIGNED_SHORT&&(pe=a.R16UI),$===a.UNSIGNED_INT&&(pe=a.R32UI),$===a.BYTE&&(pe=a.R8I),$===a.SHORT&&(pe=a.R16I),$===a.INT&&(pe=a.R32I)),T===a.RG&&($===a.FLOAT&&(pe=a.RG32F),$===a.HALF_FLOAT&&(pe=a.RG16F),$===a.UNSIGNED_BYTE&&(pe=a.RG8),$===a.UNSIGNED_SHORT&&Ie&&(pe=Ie.RG16_EXT),$===a.SHORT&&Ie&&(pe=Ie.RG16_SNORM_EXT)),T===a.RG_INTEGER&&($===a.UNSIGNED_BYTE&&(pe=a.RG8UI),$===a.UNSIGNED_SHORT&&(pe=a.RG16UI),$===a.UNSIGNED_INT&&(pe=a.RG32UI),$===a.BYTE&&(pe=a.RG8I),$===a.SHORT&&(pe=a.RG16I),$===a.INT&&(pe=a.RG32I)),T===a.RGB_INTEGER&&($===a.UNSIGNED_BYTE&&(pe=a.RGB8UI),$===a.UNSIGNED_SHORT&&(pe=a.RGB16UI),$===a.UNSIGNED_INT&&(pe=a.RGB32UI),$===a.BYTE&&(pe=a.RGB8I),$===a.SHORT&&(pe=a.RGB16I),$===a.INT&&(pe=a.RGB32I)),T===a.RGBA_INTEGER&&($===a.UNSIGNED_BYTE&&(pe=a.RGBA8UI),$===a.UNSIGNED_SHORT&&(pe=a.RGBA16UI),$===a.UNSIGNED_INT&&(pe=a.RGBA32UI),$===a.BYTE&&(pe=a.RGBA8I),$===a.SHORT&&(pe=a.RGBA16I),$===a.INT&&(pe=a.RGBA32I)),T===a.RGB&&($===a.UNSIGNED_SHORT&&Ie&&(pe=Ie.RGB16_EXT),$===a.SHORT&&Ie&&(pe=Ie.RGB16_SNORM_EXT),$===a.UNSIGNED_INT_5_9_9_9_REV&&(pe=a.RGB9_E5),$===a.UNSIGNED_INT_10F_11F_11F_REV&&(pe=a.R11F_G11F_B10F)),T===a.RGBA){const ge=we?Ku:Pt.getTransfer(me);$===a.FLOAT&&(pe=a.RGBA32F),$===a.HALF_FLOAT&&(pe=a.RGBA16F),$===a.UNSIGNED_BYTE&&(pe=ge===an?a.SRGB8_ALPHA8:a.RGBA8),$===a.UNSIGNED_SHORT&&Ie&&(pe=Ie.RGBA16_EXT),$===a.SHORT&&Ie&&(pe=Ie.RGBA16_SNORM_EXT),$===a.UNSIGNED_SHORT_4_4_4_4&&(pe=a.RGBA4),$===a.UNSIGNED_SHORT_5_5_5_1&&(pe=a.RGB5_A1)}return(pe===a.R16F||pe===a.R32F||pe===a.RG16F||pe===a.RG32F||pe===a.RGBA16F||pe===a.RGBA32F)&&e.get("EXT_color_buffer_float"),pe}function U(F,T){let $;return F?T===null||T===Ia||T===tc?$=a.DEPTH24_STENCIL8:T===La?$=a.DEPTH32F_STENCIL8:T===ec&&($=a.DEPTH24_STENCIL8,ft("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Ia||T===tc?$=a.DEPTH_COMPONENT24:T===La?$=a.DEPTH_COMPONENT32F:T===ec&&($=a.DEPTH_COMPONENT16),$}function L(F,T){return S(F)===!0||F.isFramebufferTexture&&F.minFilter!==ri&&F.minFilter!==wn?Math.log2(Math.max(T.width,T.height))+1:F.mipmaps!==void 0&&F.mipmaps.length>0?F.mipmaps.length:F.isCompressedTexture&&Array.isArray(F.image)?T.mipmaps.length:1}function B(F){const T=F.target;T.removeEventListener("dispose",B),N(T),T.isVideoTexture&&g.delete(T),T.isHTMLTexture&&_.delete(T)}function E(F){const T=F.target;T.removeEventListener("dispose",E),H(T)}function N(F){const T=r.get(F);if(T.__webglInit===void 0)return;const $=F.source,oe=x.get($);if(oe){const me=oe[T.__cacheKey];me.usedTimes--,me.usedTimes===0&&V(F),Object.keys(oe).length===0&&x.delete($)}r.remove(F)}function V(F){const T=r.get(F);a.deleteTexture(T.__webglTexture);const $=F.source,oe=x.get($);delete oe[T.__cacheKey],u.memory.textures--}function H(F){const T=r.get(F);if(F.depthTexture&&(F.depthTexture.dispose(),r.remove(F.depthTexture)),F.isWebGLCubeRenderTarget)for(let oe=0;oe<6;oe++){if(Array.isArray(T.__webglFramebuffer[oe]))for(let me=0;me<T.__webglFramebuffer[oe].length;me++)a.deleteFramebuffer(T.__webglFramebuffer[oe][me]);else a.deleteFramebuffer(T.__webglFramebuffer[oe]);T.__webglDepthbuffer&&a.deleteRenderbuffer(T.__webglDepthbuffer[oe])}else{if(Array.isArray(T.__webglFramebuffer))for(let oe=0;oe<T.__webglFramebuffer.length;oe++)a.deleteFramebuffer(T.__webglFramebuffer[oe]);else a.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&a.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&a.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let oe=0;oe<T.__webglColorRenderbuffer.length;oe++)T.__webglColorRenderbuffer[oe]&&a.deleteRenderbuffer(T.__webglColorRenderbuffer[oe]);T.__webglDepthRenderbuffer&&a.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const $=F.textures;for(let oe=0,me=$.length;oe<me;oe++){const we=r.get($[oe]);we.__webglTexture&&(a.deleteTexture(we.__webglTexture),u.memory.textures--),r.remove($[oe])}r.remove(F)}let Y=0;function he(){Y=0}function ue(){return Y}function X(F){Y=F}function z(){const F=Y;return F>=o.maxTextures&&ft("WebGLTextures: Trying to use "+F+" texture units while this GPU supports only "+o.maxTextures),Y+=1,F}function G(F){const T=[];return T.push(F.wrapS),T.push(F.wrapT),T.push(F.wrapR||0),T.push(F.magFilter),T.push(F.minFilter),T.push(F.anisotropy),T.push(F.internalFormat),T.push(F.format),T.push(F.type),T.push(F.generateMipmaps),T.push(F.premultiplyAlpha),T.push(F.flipY),T.push(F.unpackAlignment),T.push(F.colorSpace),T.join()}function J(F,T){const $=r.get(F);if(F.isVideoTexture&&j(F),F.isRenderTargetTexture===!1&&F.isExternalTexture!==!0&&F.version>0&&$.__version!==F.version){const oe=F.image;if(oe===null)ft("WebGLRenderer: Texture marked for update but no image data found.");else if(oe.complete===!1)ft("WebGLRenderer: Texture marked for update but image is incomplete");else{Ue($,F,T);return}}else F.isExternalTexture&&($.__webglTexture=F.sourceTexture?F.sourceTexture:null);i.bindTexture(a.TEXTURE_2D,$.__webglTexture,a.TEXTURE0+T)}function fe(F,T){const $=r.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&$.__version!==F.version){Ue($,F,T);return}else F.isExternalTexture&&($.__webglTexture=F.sourceTexture?F.sourceTexture:null);i.bindTexture(a.TEXTURE_2D_ARRAY,$.__webglTexture,a.TEXTURE0+T)}function xe(F,T){const $=r.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&$.__version!==F.version){Ue($,F,T);return}i.bindTexture(a.TEXTURE_3D,$.__webglTexture,a.TEXTURE0+T)}function P(F,T){const $=r.get(F);if(F.isCubeDepthTexture!==!0&&F.version>0&&$.__version!==F.version){st($,F,T);return}i.bindTexture(a.TEXTURE_CUBE_MAP,$.__webglTexture,a.TEXTURE0+T)}const K={[Mp]:a.REPEAT,[_a]:a.CLAMP_TO_EDGE,[yp]:a.MIRRORED_REPEAT},ye={[ri]:a.NEAREST,[xE]:a.NEAREST_MIPMAP_NEAREST,[gu]:a.NEAREST_MIPMAP_LINEAR,[wn]:a.LINEAR,[bh]:a.LINEAR_MIPMAP_NEAREST,[er]:a.LINEAR_MIPMAP_LINEAR},Ce={[yE]:a.NEVER,[RE]:a.ALWAYS,[EE]:a.LESS,[dm]:a.LEQUAL,[bE]:a.EQUAL,[hm]:a.GEQUAL,[TE]:a.GREATER,[AE]:a.NOTEQUAL};function ze(F,T){if(T.type===La&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===wn||T.magFilter===bh||T.magFilter===gu||T.magFilter===er||T.minFilter===wn||T.minFilter===bh||T.minFilter===gu||T.minFilter===er)&&ft("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),a.texParameteri(F,a.TEXTURE_WRAP_S,K[T.wrapS]),a.texParameteri(F,a.TEXTURE_WRAP_T,K[T.wrapT]),(F===a.TEXTURE_3D||F===a.TEXTURE_2D_ARRAY)&&a.texParameteri(F,a.TEXTURE_WRAP_R,K[T.wrapR]),a.texParameteri(F,a.TEXTURE_MAG_FILTER,ye[T.magFilter]),a.texParameteri(F,a.TEXTURE_MIN_FILTER,ye[T.minFilter]),T.compareFunction&&(a.texParameteri(F,a.TEXTURE_COMPARE_MODE,a.COMPARE_REF_TO_TEXTURE),a.texParameteri(F,a.TEXTURE_COMPARE_FUNC,Ce[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===ri||T.minFilter!==gu&&T.minFilter!==er||T.type===La&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||r.get(T).__currentAnisotropy){const $=e.get("EXT_texture_filter_anisotropic");a.texParameterf(F,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,o.getMaxAnisotropy())),r.get(T).__currentAnisotropy=T.anisotropy}}}function se(F,T){let $=!1;F.__webglInit===void 0&&(F.__webglInit=!0,T.addEventListener("dispose",B));const oe=T.source;let me=x.get(oe);me===void 0&&(me={},x.set(oe,me));const we=G(T);if(we!==F.__cacheKey){me[we]===void 0&&(me[we]={texture:a.createTexture(),usedTimes:0},u.memory.textures++,$=!0),me[we].usedTimes++;const Ie=me[F.__cacheKey];Ie!==void 0&&(me[F.__cacheKey].usedTimes--,Ie.usedTimes===0&&V(T)),F.__cacheKey=we,F.__webglTexture=me[we].texture}return $}function Se(F,T,$){return Math.floor(Math.floor(F/$)/T)}function Ee(F,T,$,oe){const we=F.updateRanges;if(we.length===0)i.texSubImage2D(a.TEXTURE_2D,0,0,0,T.width,T.height,$,oe,T.data);else{we.sort((Ge,Be)=>Ge.start-Be.start);let Ie=0;for(let Ge=1;Ge<we.length;Ge++){const Be=we[Ie],Oe=we[Ge],Je=Be.start+Be.count,nt=Se(Oe.start,T.width,4),ut=Se(Be.start,T.width,4);Oe.start<=Je+1&&nt===ut&&Se(Oe.start+Oe.count-1,T.width,4)===nt?Be.count=Math.max(Be.count,Oe.start+Oe.count-Be.start):(++Ie,we[Ie]=Oe)}we.length=Ie+1;const pe=i.getParameter(a.UNPACK_ROW_LENGTH),ge=i.getParameter(a.UNPACK_SKIP_PIXELS),Re=i.getParameter(a.UNPACK_SKIP_ROWS);i.pixelStorei(a.UNPACK_ROW_LENGTH,T.width);for(let Ge=0,Be=we.length;Ge<Be;Ge++){const Oe=we[Ge],Je=Math.floor(Oe.start/4),nt=Math.ceil(Oe.count/4),ut=Je%T.width,q=Math.floor(Je/T.width),De=nt,_e=1;i.pixelStorei(a.UNPACK_SKIP_PIXELS,ut),i.pixelStorei(a.UNPACK_SKIP_ROWS,q),i.texSubImage2D(a.TEXTURE_2D,0,ut,q,De,_e,$,oe,T.data)}F.clearUpdateRanges(),i.pixelStorei(a.UNPACK_ROW_LENGTH,pe),i.pixelStorei(a.UNPACK_SKIP_PIXELS,ge),i.pixelStorei(a.UNPACK_SKIP_ROWS,Re)}}function Ue(F,T,$){let oe=a.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(oe=a.TEXTURE_2D_ARRAY),T.isData3DTexture&&(oe=a.TEXTURE_3D);const me=se(F,T),we=T.source;i.bindTexture(oe,F.__webglTexture,a.TEXTURE0+$);const Ie=r.get(we);if(we.version!==Ie.__version||me===!0){if(i.activeTexture(a.TEXTURE0+$),(typeof ImageBitmap<"u"&&T.image instanceof ImageBitmap)===!1){const _e=Pt.getPrimaries(Pt.workingColorSpace),Le=T.colorSpace===$s?null:Pt.getPrimaries(T.colorSpace),Ne=T.colorSpace===$s||_e===Le?a.NONE:a.BROWSER_DEFAULT_WEBGL;i.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne)}i.pixelStorei(a.UNPACK_ALIGNMENT,T.unpackAlignment);let ge=y(T.image,!1,o.maxTextureSize);ge=qt(T,ge);const Re=c.convert(T.format,T.colorSpace),Ge=c.convert(T.type);let Be=A(T.internalFormat,Re,Ge,T.normalized,T.colorSpace,T.isVideoTexture);ze(oe,T);let Oe;const Je=T.mipmaps,nt=T.isVideoTexture!==!0,ut=Ie.__version===void 0||me===!0,q=we.dataReady,De=L(T,ge);if(T.isDepthTexture)Be=U(T.format===Lr,T.type),ut&&(nt?i.texStorage2D(a.TEXTURE_2D,1,Be,ge.width,ge.height):i.texImage2D(a.TEXTURE_2D,0,Be,ge.width,ge.height,0,Re,Ge,null));else if(T.isDataTexture)if(Je.length>0){nt&&ut&&i.texStorage2D(a.TEXTURE_2D,De,Be,Je[0].width,Je[0].height);for(let _e=0,Le=Je.length;_e<Le;_e++)Oe=Je[_e],nt?q&&i.texSubImage2D(a.TEXTURE_2D,_e,0,0,Oe.width,Oe.height,Re,Ge,Oe.data):i.texImage2D(a.TEXTURE_2D,_e,Be,Oe.width,Oe.height,0,Re,Ge,Oe.data);T.generateMipmaps=!1}else nt?(ut&&i.texStorage2D(a.TEXTURE_2D,De,Be,ge.width,ge.height),q&&Ee(T,ge,Re,Ge)):i.texImage2D(a.TEXTURE_2D,0,Be,ge.width,ge.height,0,Re,Ge,ge.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){nt&&ut&&i.texStorage3D(a.TEXTURE_2D_ARRAY,De,Be,Je[0].width,Je[0].height,ge.depth);for(let _e=0,Le=Je.length;_e<Le;_e++)if(Oe=Je[_e],T.format!==va)if(Re!==null)if(nt){if(q)if(T.layerUpdates.size>0){const Ne=Wv(Oe.width,Oe.height,T.format,T.type);for(const Ae of T.layerUpdates){const Ke=Oe.data.subarray(Ae*Ne/Oe.data.BYTES_PER_ELEMENT,(Ae+1)*Ne/Oe.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,_e,0,0,Ae,Oe.width,Oe.height,1,Re,Ke)}T.clearLayerUpdates()}else i.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,_e,0,0,0,Oe.width,Oe.height,ge.depth,Re,Oe.data)}else i.compressedTexImage3D(a.TEXTURE_2D_ARRAY,_e,Be,Oe.width,Oe.height,ge.depth,0,Oe.data,0,0);else ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else nt?q&&i.texSubImage3D(a.TEXTURE_2D_ARRAY,_e,0,0,0,Oe.width,Oe.height,ge.depth,Re,Ge,Oe.data):i.texImage3D(a.TEXTURE_2D_ARRAY,_e,Be,Oe.width,Oe.height,ge.depth,0,Re,Ge,Oe.data)}else{nt&&ut&&i.texStorage2D(a.TEXTURE_2D,De,Be,Je[0].width,Je[0].height);for(let _e=0,Le=Je.length;_e<Le;_e++)Oe=Je[_e],T.format!==va?Re!==null?nt?q&&i.compressedTexSubImage2D(a.TEXTURE_2D,_e,0,0,Oe.width,Oe.height,Re,Oe.data):i.compressedTexImage2D(a.TEXTURE_2D,_e,Be,Oe.width,Oe.height,0,Oe.data):ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):nt?q&&i.texSubImage2D(a.TEXTURE_2D,_e,0,0,Oe.width,Oe.height,Re,Ge,Oe.data):i.texImage2D(a.TEXTURE_2D,_e,Be,Oe.width,Oe.height,0,Re,Ge,Oe.data)}else if(T.isDataArrayTexture)if(nt){if(ut&&i.texStorage3D(a.TEXTURE_2D_ARRAY,De,Be,ge.width,ge.height,ge.depth),q)if(T.layerUpdates.size>0){const _e=Wv(ge.width,ge.height,T.format,T.type);for(const Le of T.layerUpdates){const Ne=ge.data.subarray(Le*_e/ge.data.BYTES_PER_ELEMENT,(Le+1)*_e/ge.data.BYTES_PER_ELEMENT);i.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,Le,ge.width,ge.height,1,Re,Ge,Ne)}T.clearLayerUpdates()}else i.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,ge.width,ge.height,ge.depth,Re,Ge,ge.data)}else i.texImage3D(a.TEXTURE_2D_ARRAY,0,Be,ge.width,ge.height,ge.depth,0,Re,Ge,ge.data);else if(T.isData3DTexture)nt?(ut&&i.texStorage3D(a.TEXTURE_3D,De,Be,ge.width,ge.height,ge.depth),q&&i.texSubImage3D(a.TEXTURE_3D,0,0,0,0,ge.width,ge.height,ge.depth,Re,Ge,ge.data)):i.texImage3D(a.TEXTURE_3D,0,Be,ge.width,ge.height,ge.depth,0,Re,Ge,ge.data);else if(T.isFramebufferTexture){if(ut)if(nt)i.texStorage2D(a.TEXTURE_2D,De,Be,ge.width,ge.height);else{let _e=ge.width,Le=ge.height;for(let Ne=0;Ne<De;Ne++)i.texImage2D(a.TEXTURE_2D,Ne,Be,_e,Le,0,Re,Ge,null),_e>>=1,Le>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in a){const _e=a.canvas;if(_e.hasAttribute("layoutsubtree")||_e.setAttribute("layoutsubtree","true"),ge.parentNode!==_e){_e.appendChild(ge),_.add(T),_e.onpaint=Le=>{const Ne=Le.changedElements;for(const Ae of _)Ne.includes(Ae.image)&&(Ae.needsUpdate=!0)},_e.requestPaint();return}if(a.texElementImage2D.length===3)a.texElementImage2D(a.TEXTURE_2D,a.RGBA8,ge);else{const Ne=a.RGBA,Ae=a.RGBA,Ke=a.UNSIGNED_BYTE;a.texElementImage2D(a.TEXTURE_2D,0,Ne,Ae,Ke,ge)}a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MIN_FILTER,a.LINEAR),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE)}}else if(Je.length>0){if(nt&&ut){const _e=Tt(Je[0]);i.texStorage2D(a.TEXTURE_2D,De,Be,_e.width,_e.height)}for(let _e=0,Le=Je.length;_e<Le;_e++)Oe=Je[_e],nt?q&&i.texSubImage2D(a.TEXTURE_2D,_e,0,0,Re,Ge,Oe):i.texImage2D(a.TEXTURE_2D,_e,Be,Re,Ge,Oe);T.generateMipmaps=!1}else if(nt){if(ut){const _e=Tt(ge);i.texStorage2D(a.TEXTURE_2D,De,Be,_e.width,_e.height)}q&&i.texSubImage2D(a.TEXTURE_2D,0,0,0,Re,Ge,ge)}else i.texImage2D(a.TEXTURE_2D,0,Be,Re,Ge,ge);S(T)&&I(oe),Ie.__version=we.version,T.onUpdate&&T.onUpdate(T)}F.__version=T.version}function st(F,T,$){if(T.image.length!==6)return;const oe=se(F,T),me=T.source;i.bindTexture(a.TEXTURE_CUBE_MAP,F.__webglTexture,a.TEXTURE0+$);const we=r.get(me);if(me.version!==we.__version||oe===!0){i.activeTexture(a.TEXTURE0+$);const Ie=Pt.getPrimaries(Pt.workingColorSpace),pe=T.colorSpace===$s?null:Pt.getPrimaries(T.colorSpace),ge=T.colorSpace===$s||Ie===pe?a.NONE:a.BROWSER_DEFAULT_WEBGL;i.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(a.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);const Re=T.isCompressedTexture||T.image[0].isCompressedTexture,Ge=T.image[0]&&T.image[0].isDataTexture,Be=[];for(let Ae=0;Ae<6;Ae++)!Re&&!Ge?Be[Ae]=y(T.image[Ae],!0,o.maxCubemapSize):Be[Ae]=Ge?T.image[Ae].image:T.image[Ae],Be[Ae]=qt(T,Be[Ae]);const Oe=Be[0],Je=c.convert(T.format,T.colorSpace),nt=c.convert(T.type),ut=A(T.internalFormat,Je,nt,T.normalized,T.colorSpace),q=T.isVideoTexture!==!0,De=we.__version===void 0||oe===!0,_e=me.dataReady;let Le=L(T,Oe);ze(a.TEXTURE_CUBE_MAP,T);let Ne;if(Re){q&&De&&i.texStorage2D(a.TEXTURE_CUBE_MAP,Le,ut,Oe.width,Oe.height);for(let Ae=0;Ae<6;Ae++){Ne=Be[Ae].mipmaps;for(let Ke=0;Ke<Ne.length;Ke++){const qe=Ne[Ke];T.format!==va?Je!==null?q?_e&&i.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Ke,0,0,qe.width,qe.height,Je,qe.data):i.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Ke,ut,qe.width,qe.height,0,qe.data):ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):q?_e&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Ke,0,0,qe.width,qe.height,Je,nt,qe.data):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Ke,ut,qe.width,qe.height,0,Je,nt,qe.data)}}}else{if(Ne=T.mipmaps,q&&De){Ne.length>0&&Le++;const Ae=Tt(Be[0]);i.texStorage2D(a.TEXTURE_CUBE_MAP,Le,ut,Ae.width,Ae.height)}for(let Ae=0;Ae<6;Ae++)if(Ge){q?_e&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,0,0,Be[Ae].width,Be[Ae].height,Je,nt,Be[Ae].data):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,ut,Be[Ae].width,Be[Ae].height,0,Je,nt,Be[Ae].data);for(let Ke=0;Ke<Ne.length;Ke++){const Ht=Ne[Ke].image[Ae].image;q?_e&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Ke+1,0,0,Ht.width,Ht.height,Je,nt,Ht.data):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Ke+1,ut,Ht.width,Ht.height,0,Je,nt,Ht.data)}}else{q?_e&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,0,0,Je,nt,Be[Ae]):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,ut,Je,nt,Be[Ae]);for(let Ke=0;Ke<Ne.length;Ke++){const qe=Ne[Ke];q?_e&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Ke+1,0,0,Je,nt,qe.image[Ae]):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Ke+1,ut,Je,nt,qe.image[Ae])}}}S(T)&&I(a.TEXTURE_CUBE_MAP),we.__version=me.version,T.onUpdate&&T.onUpdate(T)}F.__version=T.version}function He(F,T,$,oe,me,we){const Ie=c.convert($.format,$.colorSpace),pe=c.convert($.type),ge=A($.internalFormat,Ie,pe,$.normalized,$.colorSpace),Re=r.get(T),Ge=r.get($);if(Ge.__renderTarget=T,!Re.__hasExternalTextures){const Be=Math.max(1,T.width>>we),Oe=Math.max(1,T.height>>we);me===a.TEXTURE_3D||me===a.TEXTURE_2D_ARRAY?i.texImage3D(me,we,ge,Be,Oe,T.depth,0,Ie,pe,null):i.texImage2D(me,we,ge,Be,Oe,0,Ie,pe,null)}i.bindFramebuffer(a.FRAMEBUFFER,F),$t(T)?d.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,oe,me,Ge.__webglTexture,0,Lt(T)):(me===a.TEXTURE_2D||me>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&me<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&a.framebufferTexture2D(a.FRAMEBUFFER,oe,me,Ge.__webglTexture,we),i.bindFramebuffer(a.FRAMEBUFFER,null)}function bt(F,T,$){if(a.bindRenderbuffer(a.RENDERBUFFER,F),T.depthBuffer){const oe=T.depthTexture,me=oe&&oe.isDepthTexture?oe.type:null,we=U(T.stencilBuffer,me),Ie=T.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;$t(T)?d.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,Lt(T),we,T.width,T.height):$?a.renderbufferStorageMultisample(a.RENDERBUFFER,Lt(T),we,T.width,T.height):a.renderbufferStorage(a.RENDERBUFFER,we,T.width,T.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,Ie,a.RENDERBUFFER,F)}else{const oe=T.textures;for(let me=0;me<oe.length;me++){const we=oe[me],Ie=c.convert(we.format,we.colorSpace),pe=c.convert(we.type),ge=A(we.internalFormat,Ie,pe,we.normalized,we.colorSpace);$t(T)?d.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,Lt(T),ge,T.width,T.height):$?a.renderbufferStorageMultisample(a.RENDERBUFFER,Lt(T),ge,T.width,T.height):a.renderbufferStorage(a.RENDERBUFFER,ge,T.width,T.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function ht(F,T,$){const oe=T.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(a.FRAMEBUFFER,F),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const me=r.get(T.depthTexture);if(me.__renderTarget=T,(!me.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),oe){if(me.__webglInit===void 0&&(me.__webglInit=!0,T.depthTexture.addEventListener("dispose",B)),me.__webglTexture===void 0){me.__webglTexture=a.createTexture(),i.bindTexture(a.TEXTURE_CUBE_MAP,me.__webglTexture),ze(a.TEXTURE_CUBE_MAP,T.depthTexture);const Re=c.convert(T.depthTexture.format),Ge=c.convert(T.depthTexture.type);let Be;T.depthTexture.format===gs?Be=a.DEPTH_COMPONENT24:T.depthTexture.format===Lr&&(Be=a.DEPTH24_STENCIL8);for(let Oe=0;Oe<6;Oe++)a.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,0,Be,T.width,T.height,0,Re,Ge,null)}}else J(T.depthTexture,0);const we=me.__webglTexture,Ie=Lt(T),pe=oe?a.TEXTURE_CUBE_MAP_POSITIVE_X+$:a.TEXTURE_2D,ge=T.depthTexture.format===Lr?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;if(T.depthTexture.format===gs)$t(T)?d.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,ge,pe,we,0,Ie):a.framebufferTexture2D(a.FRAMEBUFFER,ge,pe,we,0);else if(T.depthTexture.format===Lr)$t(T)?d.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,ge,pe,we,0,Ie):a.framebufferTexture2D(a.FRAMEBUFFER,ge,pe,we,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ot(F){const T=r.get(F),$=F.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==F.depthTexture){const oe=F.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),oe){const me=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,oe.removeEventListener("dispose",me)};oe.addEventListener("dispose",me),T.__depthDisposeCallback=me}T.__boundDepthTexture=oe}if(F.depthTexture&&!T.__autoAllocateDepthBuffer)if($)for(let oe=0;oe<6;oe++)ht(T.__webglFramebuffer[oe],F,oe);else{const oe=F.texture.mipmaps;oe&&oe.length>0?ht(T.__webglFramebuffer[0],F,0):ht(T.__webglFramebuffer,F,0)}else if($){T.__webglDepthbuffer=[];for(let oe=0;oe<6;oe++)if(i.bindFramebuffer(a.FRAMEBUFFER,T.__webglFramebuffer[oe]),T.__webglDepthbuffer[oe]===void 0)T.__webglDepthbuffer[oe]=a.createRenderbuffer(),bt(T.__webglDepthbuffer[oe],F,!1);else{const me=F.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,we=T.__webglDepthbuffer[oe];a.bindRenderbuffer(a.RENDERBUFFER,we),a.framebufferRenderbuffer(a.FRAMEBUFFER,me,a.RENDERBUFFER,we)}}else{const oe=F.texture.mipmaps;if(oe&&oe.length>0?i.bindFramebuffer(a.FRAMEBUFFER,T.__webglFramebuffer[0]):i.bindFramebuffer(a.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=a.createRenderbuffer(),bt(T.__webglDepthbuffer,F,!1);else{const me=F.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,we=T.__webglDepthbuffer;a.bindRenderbuffer(a.RENDERBUFFER,we),a.framebufferRenderbuffer(a.FRAMEBUFFER,me,a.RENDERBUFFER,we)}}i.bindFramebuffer(a.FRAMEBUFFER,null)}function lt(F,T,$){const oe=r.get(F);T!==void 0&&He(oe.__webglFramebuffer,F,F.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,0),$!==void 0&&ot(F)}function _t(F){const T=F.texture,$=r.get(F),oe=r.get(T);F.addEventListener("dispose",E);const me=F.textures,we=F.isWebGLCubeRenderTarget===!0,Ie=me.length>1;if(Ie||(oe.__webglTexture===void 0&&(oe.__webglTexture=a.createTexture()),oe.__version=T.version,u.memory.textures++),we){$.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(T.mipmaps&&T.mipmaps.length>0){$.__webglFramebuffer[pe]=[];for(let ge=0;ge<T.mipmaps.length;ge++)$.__webglFramebuffer[pe][ge]=a.createFramebuffer()}else $.__webglFramebuffer[pe]=a.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){$.__webglFramebuffer=[];for(let pe=0;pe<T.mipmaps.length;pe++)$.__webglFramebuffer[pe]=a.createFramebuffer()}else $.__webglFramebuffer=a.createFramebuffer();if(Ie)for(let pe=0,ge=me.length;pe<ge;pe++){const Re=r.get(me[pe]);Re.__webglTexture===void 0&&(Re.__webglTexture=a.createTexture(),u.memory.textures++)}if(F.samples>0&&$t(F)===!1){$.__webglMultisampledFramebuffer=a.createFramebuffer(),$.__webglColorRenderbuffer=[],i.bindFramebuffer(a.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let pe=0;pe<me.length;pe++){const ge=me[pe];$.__webglColorRenderbuffer[pe]=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,$.__webglColorRenderbuffer[pe]);const Re=c.convert(ge.format,ge.colorSpace),Ge=c.convert(ge.type),Be=A(ge.internalFormat,Re,Ge,ge.normalized,ge.colorSpace,F.isXRRenderTarget===!0),Oe=Lt(F);a.renderbufferStorageMultisample(a.RENDERBUFFER,Oe,Be,F.width,F.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+pe,a.RENDERBUFFER,$.__webglColorRenderbuffer[pe])}a.bindRenderbuffer(a.RENDERBUFFER,null),F.depthBuffer&&($.__webglDepthRenderbuffer=a.createRenderbuffer(),bt($.__webglDepthRenderbuffer,F,!0)),i.bindFramebuffer(a.FRAMEBUFFER,null)}}if(we){i.bindTexture(a.TEXTURE_CUBE_MAP,oe.__webglTexture),ze(a.TEXTURE_CUBE_MAP,T);for(let pe=0;pe<6;pe++)if(T.mipmaps&&T.mipmaps.length>0)for(let ge=0;ge<T.mipmaps.length;ge++)He($.__webglFramebuffer[pe][ge],F,T,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+pe,ge);else He($.__webglFramebuffer[pe],F,T,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);S(T)&&I(a.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ie){for(let pe=0,ge=me.length;pe<ge;pe++){const Re=me[pe],Ge=r.get(Re);let Be=a.TEXTURE_2D;(F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(Be=F.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),i.bindTexture(Be,Ge.__webglTexture),ze(Be,Re),He($.__webglFramebuffer,F,Re,a.COLOR_ATTACHMENT0+pe,Be,0),S(Re)&&I(Be)}i.unbindTexture()}else{let pe=a.TEXTURE_2D;if((F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(pe=F.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),i.bindTexture(pe,oe.__webglTexture),ze(pe,T),T.mipmaps&&T.mipmaps.length>0)for(let ge=0;ge<T.mipmaps.length;ge++)He($.__webglFramebuffer[ge],F,T,a.COLOR_ATTACHMENT0,pe,ge);else He($.__webglFramebuffer,F,T,a.COLOR_ATTACHMENT0,pe,0);S(T)&&I(pe),i.unbindTexture()}F.depthBuffer&&ot(F)}function It(F){const T=F.textures;for(let $=0,oe=T.length;$<oe;$++){const me=T[$];if(S(me)){const we=O(F),Ie=r.get(me).__webglTexture;i.bindTexture(we,Ie),I(we),i.unbindTexture()}}}const sn=[],Jt=[];function Zt(F){if(F.samples>0){if($t(F)===!1){const T=F.textures,$=F.width,oe=F.height;let me=a.COLOR_BUFFER_BIT;const we=F.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Ie=r.get(F),pe=T.length>1;if(pe)for(let Re=0;Re<T.length;Re++)i.bindFramebuffer(a.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Re,a.RENDERBUFFER,null),i.bindFramebuffer(a.FRAMEBUFFER,Ie.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+Re,a.TEXTURE_2D,null,0);i.bindFramebuffer(a.READ_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer);const ge=F.texture.mipmaps;ge&&ge.length>0?i.bindFramebuffer(a.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer[0]):i.bindFramebuffer(a.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer);for(let Re=0;Re<T.length;Re++){if(F.resolveDepthBuffer&&(F.depthBuffer&&(me|=a.DEPTH_BUFFER_BIT),F.stencilBuffer&&F.resolveStencilBuffer&&(me|=a.STENCIL_BUFFER_BIT)),pe){a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,Ie.__webglColorRenderbuffer[Re]);const Ge=r.get(T[Re]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,Ge,0)}a.blitFramebuffer(0,0,$,oe,0,0,$,oe,me,a.NEAREST),m===!0&&(sn.length=0,Jt.length=0,sn.push(a.COLOR_ATTACHMENT0+Re),F.depthBuffer&&F.resolveDepthBuffer===!1&&(sn.push(we),Jt.push(we),a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,Jt)),a.invalidateFramebuffer(a.READ_FRAMEBUFFER,sn))}if(i.bindFramebuffer(a.READ_FRAMEBUFFER,null),i.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),pe)for(let Re=0;Re<T.length;Re++){i.bindFramebuffer(a.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Re,a.RENDERBUFFER,Ie.__webglColorRenderbuffer[Re]);const Ge=r.get(T[Re]).__webglTexture;i.bindFramebuffer(a.FRAMEBUFFER,Ie.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+Re,a.TEXTURE_2D,Ge,0)}i.bindFramebuffer(a.DRAW_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer)}else if(F.depthBuffer&&F.resolveDepthBuffer===!1&&m){const T=F.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[T])}}}function Lt(F){return Math.min(o.maxSamples,F.samples)}function $t(F){const T=r.get(F);return F.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function j(F){const T=u.render.frame;g.get(F)!==T&&(g.set(F,T),F.update())}function qt(F,T){const $=F.colorSpace,oe=F.format,me=F.type;return F.isCompressedTexture===!0||F.isVideoTexture===!0||$!==Zu&&$!==$s&&(Pt.getTransfer($)===an?(oe!==va||me!==na)&&ft("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):zt("WebGLTextures: Unsupported texture color space:",$)),T}function Tt(F){return typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement?(h.width=F.naturalWidth||F.width,h.height=F.naturalHeight||F.height):typeof VideoFrame<"u"&&F instanceof VideoFrame?(h.width=F.displayWidth,h.height=F.displayHeight):(h.width=F.width,h.height=F.height),h}this.allocateTextureUnit=z,this.resetTextureUnits=he,this.getTextureUnits=ue,this.setTextureUnits=X,this.setTexture2D=J,this.setTexture2DArray=fe,this.setTexture3D=xe,this.setTextureCube=P,this.rebindTextures=lt,this.setupRenderTarget=_t,this.updateRenderTargetMipmap=It,this.updateMultisampleRenderTarget=Zt,this.setupDepthRenderbuffer=ot,this.setupFrameBufferTexture=He,this.useMultisampledRTT=$t,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function mR(a,e){function i(r,o=$s){let c;const u=Pt.getTransfer(o);if(r===na)return a.UNSIGNED_BYTE;if(r===om)return a.UNSIGNED_SHORT_4_4_4_4;if(r===lm)return a.UNSIGNED_SHORT_5_5_5_1;if(r===oS)return a.UNSIGNED_INT_5_9_9_9_REV;if(r===lS)return a.UNSIGNED_INT_10F_11F_11F_REV;if(r===sS)return a.BYTE;if(r===rS)return a.SHORT;if(r===ec)return a.UNSIGNED_SHORT;if(r===rm)return a.INT;if(r===Ia)return a.UNSIGNED_INT;if(r===La)return a.FLOAT;if(r===ms)return a.HALF_FLOAT;if(r===cS)return a.ALPHA;if(r===uS)return a.RGB;if(r===va)return a.RGBA;if(r===gs)return a.DEPTH_COMPONENT;if(r===Lr)return a.DEPTH_STENCIL;if(r===fS)return a.RED;if(r===cm)return a.RED_INTEGER;if(r===Ur)return a.RG;if(r===um)return a.RG_INTEGER;if(r===fm)return a.RGBA_INTEGER;if(r===Vu||r===ku||r===Xu||r===Wu)if(u===an)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===Vu)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===ku)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Xu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Wu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===Vu)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===ku)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Xu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Wu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Ep||r===bp||r===Tp||r===Ap)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===Ep)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===bp)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Tp)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Ap)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Rp||r===Cp||r===wp||r===Dp||r===Lp||r===qu||r===Np)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===Rp||r===Cp)return u===an?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===wp)return u===an?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(r===Dp)return c.COMPRESSED_R11_EAC;if(r===Lp)return c.COMPRESSED_SIGNED_R11_EAC;if(r===qu)return c.COMPRESSED_RG11_EAC;if(r===Np)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===Up||r===Op||r===Pp||r===Ip||r===Bp||r===Fp||r===zp||r===Hp||r===Gp||r===Vp||r===kp||r===Xp||r===Wp||r===Yp)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===Up)return u===an?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Op)return u===an?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Pp)return u===an?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Ip)return u===an?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Bp)return u===an?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Fp)return u===an?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===zp)return u===an?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Hp)return u===an?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Gp)return u===an?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Vp)return u===an?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===kp)return u===an?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Xp)return u===an?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Wp)return u===an?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Yp)return u===an?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===qp||r===jp||r===Zp)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===qp)return u===an?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===jp)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Zp)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Kp||r===Qp||r===ju||r===Jp)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===Kp)return c.COMPRESSED_RED_RGTC1_EXT;if(r===Qp)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===ju)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Jp)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===tc?a.UNSIGNED_INT_24_8:a[r]!==void 0?a[r]:null}return{convert:i}}const gR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,_R=`
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

}`;class vR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const r=new SS(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new sa({vertexShader:gR,fragmentShader:_R,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new zi(new tr(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class xR extends Pr{constructor(e,i){super();const r=this;let o=null,c=1,u=null,d="local-floor",m=1,h=null,g=null,_=null,v=null,x=null,b=null;const C=typeof XRWebGLBinding<"u",y=new vR,S={},I=i.getContextAttributes();let O=null,A=null;const U=[],L=[],B=new Yt;let E=null;const N=new ta;N.viewport=new Cn;const V=new ta;V.viewport=new Cn;const H=[N,V],Y=new wb;let he=null,ue=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(se){let Se=U[se];return Se===void 0&&(Se=new Dh,U[se]=Se),Se.getTargetRaySpace()},this.getControllerGrip=function(se){let Se=U[se];return Se===void 0&&(Se=new Dh,U[se]=Se),Se.getGripSpace()},this.getHand=function(se){let Se=U[se];return Se===void 0&&(Se=new Dh,U[se]=Se),Se.getHandSpace()};function X(se){const Se=L.indexOf(se.inputSource);if(Se===-1)return;const Ee=U[Se];Ee!==void 0&&(Ee.update(se.inputSource,se.frame,h||u),Ee.dispatchEvent({type:se.type,data:se.inputSource}))}function z(){o.removeEventListener("select",X),o.removeEventListener("selectstart",X),o.removeEventListener("selectend",X),o.removeEventListener("squeeze",X),o.removeEventListener("squeezestart",X),o.removeEventListener("squeezeend",X),o.removeEventListener("end",z),o.removeEventListener("inputsourceschange",G);for(let se=0;se<U.length;se++){const Se=L[se];Se!==null&&(L[se]=null,U[se].disconnect(Se))}he=null,ue=null,y.reset();for(const se in S)delete S[se];e.setRenderTarget(O),x=null,v=null,_=null,o=null,A=null,ze.stop(),r.isPresenting=!1,e.setPixelRatio(E),e.setSize(B.width,B.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(se){c=se,r.isPresenting===!0&&ft("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(se){d=se,r.isPresenting===!0&&ft("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||u},this.setReferenceSpace=function(se){h=se},this.getBaseLayer=function(){return v!==null?v:x},this.getBinding=function(){return _===null&&C&&(_=new XRWebGLBinding(o,i)),_},this.getFrame=function(){return b},this.getSession=function(){return o},this.setSession=async function(se){if(o=se,o!==null){if(O=e.getRenderTarget(),o.addEventListener("select",X),o.addEventListener("selectstart",X),o.addEventListener("selectend",X),o.addEventListener("squeeze",X),o.addEventListener("squeezestart",X),o.addEventListener("squeezeend",X),o.addEventListener("end",z),o.addEventListener("inputsourceschange",G),I.xrCompatible!==!0&&await i.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(B),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ee=null,Ue=null,st=null;I.depth&&(st=I.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Ee=I.stencil?Lr:gs,Ue=I.stencil?tc:Ia);const He={colorFormat:i.RGBA8,depthFormat:st,scaleFactor:c};_=this.getBinding(),v=_.createProjectionLayer(He),o.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),A=new Oa(v.textureWidth,v.textureHeight,{format:va,type:na,depthTexture:new Xo(v.textureWidth,v.textureHeight,Ue,void 0,void 0,void 0,void 0,void 0,void 0,Ee),stencilBuffer:I.stencil,colorSpace:e.outputColorSpace,samples:I.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const Ee={antialias:I.antialias,alpha:!0,depth:I.depth,stencil:I.stencil,framebufferScaleFactor:c};x=new XRWebGLLayer(o,i,Ee),o.updateRenderState({baseLayer:x}),e.setPixelRatio(1),e.setSize(x.framebufferWidth,x.framebufferHeight,!1),A=new Oa(x.framebufferWidth,x.framebufferHeight,{format:va,type:na,colorSpace:e.outputColorSpace,stencilBuffer:I.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(m),h=null,u=await o.requestReferenceSpace(d),ze.setContext(o),ze.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function G(se){for(let Se=0;Se<se.removed.length;Se++){const Ee=se.removed[Se],Ue=L.indexOf(Ee);Ue>=0&&(L[Ue]=null,U[Ue].disconnect(Ee))}for(let Se=0;Se<se.added.length;Se++){const Ee=se.added[Se];let Ue=L.indexOf(Ee);if(Ue===-1){for(let He=0;He<U.length;He++)if(He>=L.length){L.push(Ee),Ue=He;break}else if(L[He]===null){L[He]=Ee,Ue=He;break}if(Ue===-1)break}const st=U[Ue];st&&st.connect(Ee)}}const J=new te,fe=new te;function xe(se,Se,Ee){J.setFromMatrixPosition(Se.matrixWorld),fe.setFromMatrixPosition(Ee.matrixWorld);const Ue=J.distanceTo(fe),st=Se.projectionMatrix.elements,He=Ee.projectionMatrix.elements,bt=st[14]/(st[10]-1),ht=st[14]/(st[10]+1),ot=(st[9]+1)/st[5],lt=(st[9]-1)/st[5],_t=(st[8]-1)/st[0],It=(He[8]+1)/He[0],sn=bt*_t,Jt=bt*It,Zt=Ue/(-_t+It),Lt=Zt*-_t;if(Se.matrixWorld.decompose(se.position,se.quaternion,se.scale),se.translateX(Lt),se.translateZ(Zt),se.matrixWorld.compose(se.position,se.quaternion,se.scale),se.matrixWorldInverse.copy(se.matrixWorld).invert(),st[10]===-1)se.projectionMatrix.copy(Se.projectionMatrix),se.projectionMatrixInverse.copy(Se.projectionMatrixInverse);else{const $t=bt+Zt,j=ht+Zt,qt=sn-Lt,Tt=Jt+(Ue-Lt),F=ot*ht/j*$t,T=lt*ht/j*$t;se.projectionMatrix.makePerspective(qt,Tt,F,T,$t,j),se.projectionMatrixInverse.copy(se.projectionMatrix).invert()}}function P(se,Se){Se===null?se.matrixWorld.copy(se.matrix):se.matrixWorld.multiplyMatrices(Se.matrixWorld,se.matrix),se.matrixWorldInverse.copy(se.matrixWorld).invert()}this.updateCamera=function(se){if(o===null)return;let Se=se.near,Ee=se.far;y.texture!==null&&(y.depthNear>0&&(Se=y.depthNear),y.depthFar>0&&(Ee=y.depthFar)),Y.near=V.near=N.near=Se,Y.far=V.far=N.far=Ee,(he!==Y.near||ue!==Y.far)&&(o.updateRenderState({depthNear:Y.near,depthFar:Y.far}),he=Y.near,ue=Y.far),Y.layers.mask=se.layers.mask|6,N.layers.mask=Y.layers.mask&-5,V.layers.mask=Y.layers.mask&-3;const Ue=se.parent,st=Y.cameras;P(Y,Ue);for(let He=0;He<st.length;He++)P(st[He],Ue);st.length===2?xe(Y,N,V):Y.projectionMatrix.copy(N.projectionMatrix),K(se,Y,Ue)};function K(se,Se,Ee){Ee===null?se.matrix.copy(Se.matrixWorld):(se.matrix.copy(Ee.matrixWorld),se.matrix.invert(),se.matrix.multiply(Se.matrixWorld)),se.matrix.decompose(se.position,se.quaternion,se.scale),se.updateMatrixWorld(!0),se.projectionMatrix.copy(Se.projectionMatrix),se.projectionMatrixInverse.copy(Se.projectionMatrixInverse),se.isPerspectiveCamera&&(se.fov=nc*2*Math.atan(1/se.projectionMatrix.elements[5]),se.zoom=1)}this.getCamera=function(){return Y},this.getFoveation=function(){if(!(v===null&&x===null))return m},this.setFoveation=function(se){m=se,v!==null&&(v.fixedFoveation=se),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=se)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(Y)},this.getCameraTexture=function(se){return S[se]};let ye=null;function Ce(se,Se){if(g=Se.getViewerPose(h||u),b=Se,g!==null){const Ee=g.views;x!==null&&(e.setRenderTargetFramebuffer(A,x.framebuffer),e.setRenderTarget(A));let Ue=!1;Ee.length!==Y.cameras.length&&(Y.cameras.length=0,Ue=!0);for(let ht=0;ht<Ee.length;ht++){const ot=Ee[ht];let lt=null;if(x!==null)lt=x.getViewport(ot);else{const It=_.getViewSubImage(v,ot);lt=It.viewport,ht===0&&(e.setRenderTargetTextures(A,It.colorTexture,It.depthStencilTexture),e.setRenderTarget(A))}let _t=H[ht];_t===void 0&&(_t=new ta,_t.layers.enable(ht),_t.viewport=new Cn,H[ht]=_t),_t.matrix.fromArray(ot.transform.matrix),_t.matrix.decompose(_t.position,_t.quaternion,_t.scale),_t.projectionMatrix.fromArray(ot.projectionMatrix),_t.projectionMatrixInverse.copy(_t.projectionMatrix).invert(),_t.viewport.set(lt.x,lt.y,lt.width,lt.height),ht===0&&(Y.matrix.copy(_t.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale)),Ue===!0&&Y.cameras.push(_t)}const st=o.enabledFeatures;if(st&&st.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&C){_=r.getBinding();const ht=_.getDepthInformation(Ee[0]);ht&&ht.isValid&&ht.texture&&y.init(ht,o.renderState)}if(st&&st.includes("camera-access")&&C){e.state.unbindTexture(),_=r.getBinding();for(let ht=0;ht<Ee.length;ht++){const ot=Ee[ht].camera;if(ot){let lt=S[ot];lt||(lt=new SS,S[ot]=lt);const _t=_.getCameraImage(ot);lt.sourceTexture=_t}}}}for(let Ee=0;Ee<U.length;Ee++){const Ue=L[Ee],st=U[Ee];Ue!==null&&st!==void 0&&st.update(Ue,Se,h||u)}ye&&ye(se,Se),Se.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:Se}),b=null}const ze=new bS;ze.setAnimationLoop(Ce),this.setAnimationLoop=function(se){ye=se},this.dispose=function(){}}}const SR=new On,LS=new gt;LS.set(-1,0,0,0,1,0,0,0,1);function MR(a,e){function i(y,S){y.matrixAutoUpdate===!0&&y.updateMatrix(),S.value.copy(y.matrix)}function r(y,S){S.color.getRGB(y.fogColor.value,MS(a)),S.isFog?(y.fogNear.value=S.near,y.fogFar.value=S.far):S.isFogExp2&&(y.fogDensity.value=S.density)}function o(y,S,I,O,A){S.isNodeMaterial?S.uniformsNeedUpdate=!1:S.isMeshBasicMaterial?c(y,S):S.isMeshLambertMaterial?(c(y,S),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)):S.isMeshToonMaterial?(c(y,S),_(y,S)):S.isMeshPhongMaterial?(c(y,S),g(y,S),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)):S.isMeshStandardMaterial?(c(y,S),v(y,S),S.isMeshPhysicalMaterial&&x(y,S,A)):S.isMeshMatcapMaterial?(c(y,S),b(y,S)):S.isMeshDepthMaterial?c(y,S):S.isMeshDistanceMaterial?(c(y,S),C(y,S)):S.isMeshNormalMaterial?c(y,S):S.isLineBasicMaterial?(u(y,S),S.isLineDashedMaterial&&d(y,S)):S.isPointsMaterial?m(y,S,I,O):S.isSpriteMaterial?h(y,S):S.isShadowMaterial?(y.color.value.copy(S.color),y.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function c(y,S){y.opacity.value=S.opacity,S.color&&y.diffuse.value.copy(S.color),S.emissive&&y.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(y.map.value=S.map,i(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,i(S.alphaMap,y.alphaMapTransform)),S.bumpMap&&(y.bumpMap.value=S.bumpMap,i(S.bumpMap,y.bumpMapTransform),y.bumpScale.value=S.bumpScale,S.side===Ci&&(y.bumpScale.value*=-1)),S.normalMap&&(y.normalMap.value=S.normalMap,i(S.normalMap,y.normalMapTransform),y.normalScale.value.copy(S.normalScale),S.side===Ci&&y.normalScale.value.negate()),S.displacementMap&&(y.displacementMap.value=S.displacementMap,i(S.displacementMap,y.displacementMapTransform),y.displacementScale.value=S.displacementScale,y.displacementBias.value=S.displacementBias),S.emissiveMap&&(y.emissiveMap.value=S.emissiveMap,i(S.emissiveMap,y.emissiveMapTransform)),S.specularMap&&(y.specularMap.value=S.specularMap,i(S.specularMap,y.specularMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest);const I=e.get(S),O=I.envMap,A=I.envMapRotation;O&&(y.envMap.value=O,y.envMapRotation.value.setFromMatrix4(SR.makeRotationFromEuler(A)).transpose(),O.isCubeTexture&&O.isRenderTargetTexture===!1&&y.envMapRotation.value.premultiply(LS),y.reflectivity.value=S.reflectivity,y.ior.value=S.ior,y.refractionRatio.value=S.refractionRatio),S.lightMap&&(y.lightMap.value=S.lightMap,y.lightMapIntensity.value=S.lightMapIntensity,i(S.lightMap,y.lightMapTransform)),S.aoMap&&(y.aoMap.value=S.aoMap,y.aoMapIntensity.value=S.aoMapIntensity,i(S.aoMap,y.aoMapTransform))}function u(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,S.map&&(y.map.value=S.map,i(S.map,y.mapTransform))}function d(y,S){y.dashSize.value=S.dashSize,y.totalSize.value=S.dashSize+S.gapSize,y.scale.value=S.scale}function m(y,S,I,O){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.size.value=S.size*I,y.scale.value=O*.5,S.map&&(y.map.value=S.map,i(S.map,y.uvTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,i(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function h(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.rotation.value=S.rotation,S.map&&(y.map.value=S.map,i(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,i(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function g(y,S){y.specular.value.copy(S.specular),y.shininess.value=Math.max(S.shininess,1e-4)}function _(y,S){S.gradientMap&&(y.gradientMap.value=S.gradientMap)}function v(y,S){y.metalness.value=S.metalness,S.metalnessMap&&(y.metalnessMap.value=S.metalnessMap,i(S.metalnessMap,y.metalnessMapTransform)),y.roughness.value=S.roughness,S.roughnessMap&&(y.roughnessMap.value=S.roughnessMap,i(S.roughnessMap,y.roughnessMapTransform)),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)}function x(y,S,I){y.ior.value=S.ior,S.sheen>0&&(y.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),y.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(y.sheenColorMap.value=S.sheenColorMap,i(S.sheenColorMap,y.sheenColorMapTransform)),S.sheenRoughnessMap&&(y.sheenRoughnessMap.value=S.sheenRoughnessMap,i(S.sheenRoughnessMap,y.sheenRoughnessMapTransform))),S.clearcoat>0&&(y.clearcoat.value=S.clearcoat,y.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(y.clearcoatMap.value=S.clearcoatMap,i(S.clearcoatMap,y.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,i(S.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(y.clearcoatNormalMap.value=S.clearcoatNormalMap,i(S.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===Ci&&y.clearcoatNormalScale.value.negate())),S.dispersion>0&&(y.dispersion.value=S.dispersion),S.iridescence>0&&(y.iridescence.value=S.iridescence,y.iridescenceIOR.value=S.iridescenceIOR,y.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(y.iridescenceMap.value=S.iridescenceMap,i(S.iridescenceMap,y.iridescenceMapTransform)),S.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=S.iridescenceThicknessMap,i(S.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),S.transmission>0&&(y.transmission.value=S.transmission,y.transmissionSamplerMap.value=I.texture,y.transmissionSamplerSize.value.set(I.width,I.height),S.transmissionMap&&(y.transmissionMap.value=S.transmissionMap,i(S.transmissionMap,y.transmissionMapTransform)),y.thickness.value=S.thickness,S.thicknessMap&&(y.thicknessMap.value=S.thicknessMap,i(S.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=S.attenuationDistance,y.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(y.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(y.anisotropyMap.value=S.anisotropyMap,i(S.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=S.specularIntensity,y.specularColor.value.copy(S.specularColor),S.specularColorMap&&(y.specularColorMap.value=S.specularColorMap,i(S.specularColorMap,y.specularColorMapTransform)),S.specularIntensityMap&&(y.specularIntensityMap.value=S.specularIntensityMap,i(S.specularIntensityMap,y.specularIntensityMapTransform))}function b(y,S){S.matcap&&(y.matcap.value=S.matcap)}function C(y,S){const I=e.get(S).light;y.referencePosition.value.setFromMatrixPosition(I.matrixWorld),y.nearDistance.value=I.shadow.camera.near,y.farDistance.value=I.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function yR(a,e,i,r){let o={},c={},u=[];const d=a.getParameter(a.MAX_UNIFORM_BUFFER_BINDINGS);function m(A,U){const L=U.program;r.uniformBlockBinding(A,L)}function h(A,U){let L=o[A.id];L===void 0&&(y(A),L=g(A),o[A.id]=L,A.addEventListener("dispose",I));const B=U.program;r.updateUBOMapping(A,B);const E=e.render.frame;c[A.id]!==E&&(v(A),c[A.id]=E)}function g(A){const U=_();A.__bindingPointIndex=U;const L=a.createBuffer(),B=A.__size,E=A.usage;return a.bindBuffer(a.UNIFORM_BUFFER,L),a.bufferData(a.UNIFORM_BUFFER,B,E),a.bindBuffer(a.UNIFORM_BUFFER,null),a.bindBufferBase(a.UNIFORM_BUFFER,U,L),L}function _(){for(let A=0;A<d;A++)if(u.indexOf(A)===-1)return u.push(A),A;return zt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(A){const U=o[A.id],L=A.uniforms,B=A.__cache;a.bindBuffer(a.UNIFORM_BUFFER,U);for(let E=0,N=L.length;E<N;E++){const V=L[E];if(Array.isArray(V))for(let H=0,Y=V.length;H<Y;H++)x(V[H],E,H,B);else x(V,E,0,B)}a.bindBuffer(a.UNIFORM_BUFFER,null)}function x(A,U,L,B){if(C(A,U,L,B)===!0){const E=A.__offset,N=A.value;if(Array.isArray(N)){let V=0;for(let H=0;H<N.length;H++){const Y=N[H],he=S(Y);b(Y,A.__data,V),typeof Y!="number"&&typeof Y!="boolean"&&!Y.isMatrix3&&!ArrayBuffer.isView(Y)&&(V+=he.storage/Float32Array.BYTES_PER_ELEMENT)}}else b(N,A.__data,0);a.bufferSubData(a.UNIFORM_BUFFER,E,A.__data)}}function b(A,U,L){typeof A=="number"||typeof A=="boolean"?U[0]=A:A.isMatrix3?(U[0]=A.elements[0],U[1]=A.elements[1],U[2]=A.elements[2],U[3]=0,U[4]=A.elements[3],U[5]=A.elements[4],U[6]=A.elements[5],U[7]=0,U[8]=A.elements[6],U[9]=A.elements[7],U[10]=A.elements[8],U[11]=0):ArrayBuffer.isView(A)?U.set(new A.constructor(A.buffer,A.byteOffset,U.length)):A.toArray(U,L)}function C(A,U,L,B){const E=A.value,N=U+"_"+L;if(B[N]===void 0)return typeof E=="number"||typeof E=="boolean"?B[N]=E:ArrayBuffer.isView(E)?B[N]=E.slice():B[N]=E.clone(),!0;{const V=B[N];if(typeof E=="number"||typeof E=="boolean"){if(V!==E)return B[N]=E,!0}else{if(ArrayBuffer.isView(E))return!0;if(V.equals(E)===!1)return V.copy(E),!0}}return!1}function y(A){const U=A.uniforms;let L=0;const B=16;for(let N=0,V=U.length;N<V;N++){const H=Array.isArray(U[N])?U[N]:[U[N]];for(let Y=0,he=H.length;Y<he;Y++){const ue=H[Y],X=Array.isArray(ue.value)?ue.value:[ue.value];for(let z=0,G=X.length;z<G;z++){const J=X[z],fe=S(J),xe=L%B,P=xe%fe.boundary,K=xe+P;L+=P,K!==0&&B-K<fe.storage&&(L+=B-K),ue.__data=new Float32Array(fe.storage/Float32Array.BYTES_PER_ELEMENT),ue.__offset=L,L+=fe.storage}}}const E=L%B;return E>0&&(L+=B-E),A.__size=L,A.__cache={},this}function S(A){const U={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(U.boundary=4,U.storage=4):A.isVector2?(U.boundary=8,U.storage=8):A.isVector3||A.isColor?(U.boundary=16,U.storage=12):A.isVector4?(U.boundary=16,U.storage=16):A.isMatrix3?(U.boundary=48,U.storage=48):A.isMatrix4?(U.boundary=64,U.storage=64):A.isTexture?ft("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(A)?(U.boundary=16,U.storage=A.byteLength):ft("WebGLRenderer: Unsupported uniform value type.",A),U}function I(A){const U=A.target;U.removeEventListener("dispose",I);const L=u.indexOf(U.__bindingPointIndex);u.splice(L,1),a.deleteBuffer(o[U.id]),delete o[U.id],delete c[U.id]}function O(){for(const A in o)a.deleteBuffer(o[A]);u=[],o={},c={}}return{bind:m,update:h,dispose:O}}const ER=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ra=null;function bR(){return Ra===null&&(Ra=new pb(ER,16,16,Ur,ms),Ra.name="DFG_LUT",Ra.minFilter=wn,Ra.magFilter=wn,Ra.wrapS=_a,Ra.wrapT=_a,Ra.generateMipmaps=!1,Ra.needsUpdate=!0),Ra}class TR{constructor(e={}){const{canvas:i=wE(),context:r=null,depth:o=!0,stencil:c=!1,alpha:u=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:h=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:v=!1,outputBufferType:x=na}=e;this.isWebGLRenderer=!0;let b;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=r.getContextAttributes().alpha}else b=u;const C=x,y=new Set([fm,um,cm]),S=new Set([na,Ia,ec,tc,om,lm]),I=new Uint32Array(4),O=new Int32Array(4),A=new te;let U=null,L=null;const B=[],E=[];let N=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ua,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const V=this;let H=!1,Y=null,he=null,ue=null,X=null;this._outputColorSpace=fi;let z=0,G=0,J=null,fe=-1,xe=null;const P=new Cn,K=new Cn;let ye=null;const Ce=new Qt(0);let ze=0,se=i.width,Se=i.height,Ee=1,Ue=null,st=null;const He=new Cn(0,0,se,Se),bt=new Cn(0,0,se,Se);let ht=!1;const ot=new vS;let lt=!1,_t=!1;const It=new On,sn=new te,Jt=new Cn,Zt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Lt=!1;function $t(){return J===null?Ee:1}let j=r;function qt(R,Z){return i.getContext(R,Z)}try{const R={alpha:!0,depth:o,stencil:c,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:h,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${sm}`),i.addEventListener("webglcontextlost",Ht,!1),i.addEventListener("webglcontextrestored",Nt,!1),i.addEventListener("webglcontextcreationerror",Bt,!1),j===null){const Z="webgl2";if(j=qt(Z,R),j===null)throw qt(Z)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(R){throw zt("WebGLRenderer: "+R.message),R}let Tt,F,T,$,oe,me,we,Ie,pe,ge,Re,Ge,Be,Oe,Je,nt,ut,q,De,_e,Le,Ne,Ae;function Ke(){Tt=new bA(j),Tt.init(),Le=new mR(j,Tt),F=new gA(j,Tt,e,Le),T=new hR(j,Tt),F.reversedDepthBuffer&&v&&T.buffers.depth.setReversed(!0),he=j.createFramebuffer(),ue=j.createFramebuffer(),X=j.createFramebuffer(),$=new RA(j),oe=new $2,me=new pR(j,Tt,T,oe,F,Le,$),we=new EA(V),Ie=new Lb(j),Ne=new pA(j,Ie),pe=new TA(j,Ie,$,Ne),ge=new wA(j,pe,Ie,Ne,$),q=new CA(j,F,me),Je=new _A(oe),Re=new J2(V,we,Tt,F,Ne,Je),Ge=new MR(V,oe),Be=new tR,Oe=new oR(Tt),ut=new hA(V,we,T,ge,b,m),nt=new dR(V,ge,F),Ae=new yR(j,$,F,T),De=new mA(j,Tt,$),_e=new AA(j,Tt,$),$.programs=Re.programs,V.capabilities=F,V.extensions=Tt,V.properties=oe,V.renderLists=Be,V.shadowMap=nt,V.state=T,V.info=$}Ke(),C!==na&&(N=new LA(C,i.width,i.height,d,o,c));const qe=new xR(V,j);this.xr=qe,this.getContext=function(){return j},this.getContextAttributes=function(){return j.getContextAttributes()},this.forceContextLoss=function(){const R=Tt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Tt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return Ee},this.setPixelRatio=function(R){R!==void 0&&(Ee=R,this.setSize(se,Se,!1))},this.getSize=function(R){return R.set(se,Se)},this.setSize=function(R,Z,le=!0){if(qe.isPresenting){ft("WebGLRenderer: Can't change size while VR device is presenting.");return}se=R,Se=Z,i.width=Math.floor(R*Ee),i.height=Math.floor(Z*Ee),le===!0&&(i.style.width=R+"px",i.style.height=Z+"px"),N!==null&&N.setSize(i.width,i.height),this.setViewport(0,0,R,Z)},this.getDrawingBufferSize=function(R){return R.set(se*Ee,Se*Ee).floor()},this.setDrawingBufferSize=function(R,Z,le){se=R,Se=Z,Ee=le,i.width=Math.floor(R*le),i.height=Math.floor(Z*le),this.setViewport(0,0,R,Z)},this.setEffects=function(R){if(C===na){zt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let Z=0;Z<R.length;Z++)if(R[Z].isOutputPass===!0){ft("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}N.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(P)},this.getViewport=function(R){return R.copy(He)},this.setViewport=function(R,Z,le,ne){R.isVector4?He.set(R.x,R.y,R.z,R.w):He.set(R,Z,le,ne),T.viewport(P.copy(He).multiplyScalar(Ee).round())},this.getScissor=function(R){return R.copy(bt)},this.setScissor=function(R,Z,le,ne){R.isVector4?bt.set(R.x,R.y,R.z,R.w):bt.set(R,Z,le,ne),T.scissor(K.copy(bt).multiplyScalar(Ee).round())},this.getScissorTest=function(){return ht},this.setScissorTest=function(R){T.setScissorTest(ht=R)},this.setOpaqueSort=function(R){Ue=R},this.setTransparentSort=function(R){st=R},this.getClearColor=function(R){return R.copy(ut.getClearColor())},this.setClearColor=function(){ut.setClearColor(...arguments)},this.getClearAlpha=function(){return ut.getClearAlpha()},this.setClearAlpha=function(){ut.setClearAlpha(...arguments)},this.clear=function(R=!0,Z=!0,le=!0){let ne=0;if(R){let ie=!1;if(J!==null){const Ve=J.texture.format;ie=y.has(Ve)}if(ie){const Ve=J.texture.type,Ye=S.has(Ve),Fe=ut.getClearColor(),je=ut.getClearAlpha(),Ze=Fe.r,it=Fe.g,pt=Fe.b;Ye?(I[0]=Ze,I[1]=it,I[2]=pt,I[3]=je,j.clearBufferuiv(j.COLOR,0,I)):(O[0]=Ze,O[1]=it,O[2]=pt,O[3]=je,j.clearBufferiv(j.COLOR,0,O))}else ne|=j.COLOR_BUFFER_BIT}Z&&(ne|=j.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),le&&(ne|=j.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ne!==0&&j.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(R){R.setRenderer(this),Y=R},this.dispose=function(){i.removeEventListener("webglcontextlost",Ht,!1),i.removeEventListener("webglcontextrestored",Nt,!1),i.removeEventListener("webglcontextcreationerror",Bt,!1),ut.dispose(),Be.dispose(),Oe.dispose(),oe.dispose(),we.dispose(),ge.dispose(),Ne.dispose(),Ae.dispose(),Re.dispose(),qe.dispose(),qe.removeEventListener("sessionstart",dn),qe.removeEventListener("sessionend",Sn),yn.stop()};function Ht(R){R.preventDefault(),Ev("WebGLRenderer: Context Lost."),H=!0}function Nt(){Ev("WebGLRenderer: Context Restored."),H=!1;const R=$.autoReset,Z=nt.enabled,le=nt.autoUpdate,ne=nt.needsUpdate,ie=nt.type;Ke(),$.autoReset=R,nt.enabled=Z,nt.autoUpdate=le,nt.needsUpdate=ne,nt.type=ie}function Bt(R){zt("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Mn(R){const Z=R.target;Z.removeEventListener("dispose",Mn),hi(Z)}function hi(R){Gi(R),oe.remove(R)}function Gi(R){const Z=oe.get(R).programs;Z!==void 0&&(Z.forEach(function(le){Re.releaseProgram(le)}),R.isShaderMaterial&&Re.releaseShaderCache(R))}this.renderBufferDirect=function(R,Z,le,ne,ie,Ve){Z===null&&(Z=Zt);const Ye=ie.isMesh&&ie.matrixWorld.determinantAffine()<0,Fe=Ma(R,Z,le,ne,ie);T.setMaterial(ne,Ye);let je=le.index,Ze=1;if(ne.wireframe===!0){if(je=pe.getWireframeAttribute(le),je===void 0)return;Ze=2}const it=le.drawRange,pt=le.attributes.position;let et=it.start*Ze,Ut=(it.start+it.count)*Ze;Ve!==null&&(et=Math.max(et,Ve.start*Ze),Ut=Math.min(Ut,(Ve.start+Ve.count)*Ze)),je!==null?(et=Math.max(et,0),Ut=Math.min(Ut,je.count)):pt!=null&&(et=Math.max(et,0),Ut=Math.min(Ut,pt.count));const cn=Ut-et;if(cn<0||cn===1/0)return;Ne.setup(ie,ne,Fe,le,je);let Kt,Gt=De;if(je!==null&&(Kt=Ie.get(je),Gt=_e,Gt.setIndex(Kt)),ie.isMesh)ne.wireframe===!0?(T.setLineWidth(ne.wireframeLinewidth*$t()),Gt.setMode(j.LINES)):Gt.setMode(j.TRIANGLES);else if(ie.isLine){let Vt=ne.linewidth;Vt===void 0&&(Vt=1),T.setLineWidth(Vt*$t()),ie.isLineSegments?Gt.setMode(j.LINES):ie.isLineLoop?Gt.setMode(j.LINE_LOOP):Gt.setMode(j.LINE_STRIP)}else ie.isPoints?Gt.setMode(j.POINTS):ie.isSprite&&Gt.setMode(j.TRIANGLES);if(ie.isBatchedMesh)if(Tt.get("WEBGL_multi_draw"))Gt.renderMultiDraw(ie._multiDrawStarts,ie._multiDrawCounts,ie._multiDrawCount);else{const Vt=ie._multiDrawStarts,Xe=ie._multiDrawCounts,Xn=ie._multiDrawCount,ee=je?Ie.get(je).bytesPerElement:1,Te=oe.get(ne).currentProgram.getUniforms();for(let ke=0;ke<Xn;ke++)Te.setValue(j,"_gl_DrawID",ke),Gt.render(Vt[ke]/ee,Xe[ke])}else if(ie.isInstancedMesh)Gt.renderInstances(et,cn,ie.count);else if(le.isInstancedBufferGeometry){const Vt=le._maxInstanceCount!==void 0?le._maxInstanceCount:1/0,Xe=Math.min(le.instanceCount,Vt);Gt.renderInstances(et,cn,Xe)}else Gt.render(et,cn)};function $n(R,Z,le){R.transparent===!0&&R.side===Da&&R.forceSinglePass===!1?(R.side=Ci,R.needsUpdate=!0,Vi(R,Z,le),R.side=ps,R.needsUpdate=!0,Vi(R,Z,le),R.side=Da):Vi(R,Z,le)}this.compile=function(R,Z,le=null){le===null&&(le=R),L=Oe.get(le),L.init(Z),E.push(L),le.traverseVisible(function(ie){ie.isLight&&ie.layers.test(Z.layers)&&(L.pushLight(ie),ie.castShadow&&L.pushShadow(ie))}),R!==le&&R.traverseVisible(function(ie){ie.isLight&&ie.layers.test(Z.layers)&&(L.pushLight(ie),ie.castShadow&&L.pushShadow(ie))}),L.setupLights();const ne=new Set;return R.traverse(function(ie){if(!(ie.isMesh||ie.isPoints||ie.isLine||ie.isSprite))return;const Ve=ie.material;if(Ve)if(Array.isArray(Ve))for(let Ye=0;Ye<Ve.length;Ye++){const Fe=Ve[Ye];$n(Fe,le,ie),ne.add(Fe)}else $n(Ve,le,ie),ne.add(Ve)}),L=E.pop(),ne},this.compileAsync=function(R,Z,le=null){const ne=this.compile(R,Z,le);return new Promise(ie=>{function Ve(){if(ne.forEach(function(Ye){oe.get(Ye).currentProgram.isReady()&&ne.delete(Ye)}),ne.size===0){ie(R);return}setTimeout(Ve,10)}Tt.get("KHR_parallel_shader_compile")!==null?Ve():setTimeout(Ve,10)})};let pi=null;function ei(R){pi&&pi(R)}function dn(){yn.stop()}function Sn(){yn.start()}const yn=new bS;yn.setAnimationLoop(ei),typeof self<"u"&&yn.setContext(self),this.setAnimationLoop=function(R){pi=R,qe.setAnimationLoop(R),R===null?yn.stop():yn.start()},qe.addEventListener("sessionstart",dn),qe.addEventListener("sessionend",Sn),this.render=function(R,Z){if(Z!==void 0&&Z.isCamera!==!0){zt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(H===!0)return;Y!==null&&Y.renderStart(R,Z);const le=qe.enabled===!0&&qe.isPresenting===!0,ne=N!==null&&(J===null||le)&&N.begin(V,J);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),qe.enabled===!0&&qe.isPresenting===!0&&(N===null||N.isCompositing()===!1)&&(qe.cameraAutoUpdate===!0&&qe.updateCamera(Z),Z=qe.getCamera()),R.isScene===!0&&R.onBeforeRender(V,R,Z,J),L=Oe.get(R,E.length),L.init(Z),L.state.textureUnits=me.getTextureUnits(),E.push(L),It.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),ot.setFromProjectionMatrix(It,Na,Z.reversedDepth),_t=this.localClippingEnabled,lt=Je.init(this.clippingPlanes,_t),U=Be.get(R,B.length),U.init(),B.push(U),qe.enabled===!0&&qe.isPresenting===!0){const Ye=V.xr.getDepthSensingMesh();Ye!==null&&xa(Ye,Z,-1/0,V.sortObjects)}xa(R,Z,0,V.sortObjects),U.finish(),V.sortObjects===!0&&U.sort(Ue,st,Z.reversedDepth),Lt=qe.enabled===!1||qe.isPresenting===!1||qe.hasDepthSensing()===!1,Lt&&ut.addToRenderList(U,R),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),lt===!0&&Je.beginShadows();const ie=L.state.shadowsArray;if(nt.render(ie,R,Z),lt===!0&&Je.endShadows(),(ne&&N.hasRenderPass())===!1){const Ye=U.opaque,Fe=U.transmissive;if(L.setupLights(),Z.isArrayCamera){const je=Z.cameras;if(Fe.length>0)for(let Ze=0,it=je.length;Ze<it;Ze++){const pt=je[Ze];Sa(Ye,Fe,R,pt)}Lt&&ut.render(R);for(let Ze=0,it=je.length;Ze<it;Ze++){const pt=je[Ze];rr(U,R,pt,pt.viewport)}}else Fe.length>0&&Sa(Ye,Fe,R,Z),Lt&&ut.render(R),rr(U,R,Z)}J!==null&&G===0&&(me.updateMultisampleRenderTarget(J),me.updateRenderTargetMipmap(J)),ne&&N.end(V),R.isScene===!0&&R.onAfterRender(V,R,Z),Ne.resetDefaultState(),fe=-1,xe=null,E.pop(),E.length>0?(L=E[E.length-1],me.setTextureUnits(L.state.textureUnits),lt===!0&&Je.setGlobalState(V.clippingPlanes,L.state.camera)):L=null,B.pop(),B.length>0?U=B[B.length-1]:U=null,Y!==null&&Y.renderEnd()};function xa(R,Z,le,ne){if(R.visible===!1)return;if(R.layers.test(Z.layers)){if(R.isGroup)le=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(Z);else if(R.isLightProbeGrid)L.pushLightProbeGrid(R);else if(R.isLight)L.pushLight(R),R.castShadow&&L.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||ot.intersectsSprite(R)){ne&&Jt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(It);const Ye=ge.update(R),Fe=R.material;Fe.visible&&U.push(R,Ye,Fe,le,Jt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||ot.intersectsObject(R))){const Ye=ge.update(R),Fe=R.material;if(ne&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Jt.copy(R.boundingSphere.center)):(Ye.boundingSphere===null&&Ye.computeBoundingSphere(),Jt.copy(Ye.boundingSphere.center)),Jt.applyMatrix4(R.matrixWorld).applyMatrix4(It)),Array.isArray(Fe)){const je=Ye.groups;for(let Ze=0,it=je.length;Ze<it;Ze++){const pt=je[Ze],et=Fe[pt.materialIndex];et&&et.visible&&U.push(R,Ye,et,le,Jt.z,pt)}}else Fe.visible&&U.push(R,Ye,Fe,le,Jt.z,null)}}const Ve=R.children;for(let Ye=0,Fe=Ve.length;Ye<Fe;Ye++)xa(Ve[Ye],Z,le,ne)}function rr(R,Z,le,ne){const{opaque:ie,transmissive:Ve,transparent:Ye}=R;L.setupLightsView(le),lt===!0&&Je.setGlobalState(V.clippingPlanes,le),ne&&T.viewport(P.copy(ne)),ie.length>0&&Ba(ie,Z,le),Ve.length>0&&Ba(Ve,Z,le),Ye.length>0&&Ba(Ye,Z,le),T.buffers.depth.setTest(!0),T.buffers.depth.setMask(!0),T.buffers.color.setMask(!0),T.setPolygonOffset(!1)}function Sa(R,Z,le,ne){if((le.isScene===!0?le.overrideMaterial:null)!==null)return;if(L.state.transmissionRenderTarget[ne.id]===void 0){const et=Tt.has("EXT_color_buffer_half_float")||Tt.has("EXT_color_buffer_float");L.state.transmissionRenderTarget[ne.id]=new Oa(1,1,{generateMipmaps:!0,type:et?ms:na,minFilter:er,samples:Math.max(4,F.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Pt.workingColorSpace})}const Ve=L.state.transmissionRenderTarget[ne.id],Ye=ne.viewport||P;Ve.setSize(Ye.z*V.transmissionResolutionScale,Ye.w*V.transmissionResolutionScale);const Fe=V.getRenderTarget(),je=V.getActiveCubeFace(),Ze=V.getActiveMipmapLevel();V.setRenderTarget(Ve),V.getClearColor(Ce),ze=V.getClearAlpha(),ze<1&&V.setClearColor(16777215,.5),V.clear(),Lt&&ut.render(le);const it=V.toneMapping;V.toneMapping=Ua;const pt=ne.viewport;if(ne.viewport!==void 0&&(ne.viewport=void 0),L.setupLightsView(ne),lt===!0&&Je.setGlobalState(V.clippingPlanes,ne),Ba(R,le,ne),me.updateMultisampleRenderTarget(Ve),me.updateRenderTargetMipmap(Ve),Tt.has("WEBGL_multisampled_render_to_texture")===!1){let et=!1;for(let Ut=0,cn=Z.length;Ut<cn;Ut++){const Kt=Z[Ut],{object:Gt,geometry:Vt,material:Xe,group:Xn}=Kt;if(Xe.side===Da&&Gt.layers.test(ne.layers)){const ee=Xe.side;Xe.side=Ci,Xe.needsUpdate=!0,ra(Gt,le,ne,Vt,Xe,Xn),Xe.side=ee,Xe.needsUpdate=!0,et=!0}}et===!0&&(me.updateMultisampleRenderTarget(Ve),me.updateRenderTargetMipmap(Ve))}V.setRenderTarget(Fe,je,Ze),V.setClearColor(Ce,ze),pt!==void 0&&(ne.viewport=pt),V.toneMapping=it}function Ba(R,Z,le){const ne=Z.isScene===!0?Z.overrideMaterial:null;for(let ie=0,Ve=R.length;ie<Ve;ie++){const Ye=R[ie],{object:Fe,geometry:je,group:Ze}=Ye;let it=Ye.material;it.allowOverride===!0&&ne!==null&&(it=ne),Fe.layers.test(le.layers)&&ra(Fe,Z,le,je,it,Ze)}}function ra(R,Z,le,ne,ie,Ve){R.onBeforeRender(V,Z,le,ne,ie,Ve),R.modelViewMatrix.multiplyMatrices(le.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),ie.onBeforeRender(V,Z,le,ne,R,Ve),ie.transparent===!0&&ie.side===Da&&ie.forceSinglePass===!1?(ie.side=Ci,ie.needsUpdate=!0,V.renderBufferDirect(le,Z,ne,ie,R,Ve),ie.side=ps,ie.needsUpdate=!0,V.renderBufferDirect(le,Z,ne,ie,R,Ve),ie.side=Da):V.renderBufferDirect(le,Z,ne,ie,R,Ve),R.onAfterRender(V,Z,le,ne,ie,Ve)}function Vi(R,Z,le){Z.isScene!==!0&&(Z=Zt);const ne=oe.get(R),ie=L.state.lights,Ve=L.state.shadowsArray,Ye=ie.state.version,Fe=Re.getParameters(R,ie.state,Ve,Z,le,L.state.lightProbeGridArray),je=Re.getProgramCacheKey(Fe);let Ze=ne.programs;ne.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?Z.environment:null,ne.fog=Z.fog;const it=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;ne.envMap=we.get(R.envMap||ne.environment,it),ne.envMapRotation=ne.environment!==null&&R.envMap===null?Z.environmentRotation:R.envMapRotation,Ze===void 0&&(R.addEventListener("dispose",Mn),Ze=new Map,ne.programs=Ze);let pt=Ze.get(je);if(pt!==void 0){if(ne.currentProgram===pt&&ne.lightsStateVersion===Ye)return kn(R,Fe),pt}else Fe.uniforms=Re.getUniforms(R),Y!==null&&R.isNodeMaterial&&Y.build(R,le,Fe),R.onBeforeCompile(Fe,V),pt=Re.acquireProgram(Fe,je),Ze.set(je,pt),ne.uniforms=Fe.uniforms;const et=ne.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(et.clippingPlanes=Je.uniform),kn(R,Fe),ne.needsLights=_s(R),ne.lightsStateVersion=Ye,ne.needsLights&&(et.ambientLightColor.value=ie.state.ambient,et.lightProbe.value=ie.state.probe,et.directionalLights.value=ie.state.directional,et.directionalLightShadows.value=ie.state.directionalShadow,et.spotLights.value=ie.state.spot,et.spotLightShadows.value=ie.state.spotShadow,et.rectAreaLights.value=ie.state.rectArea,et.ltc_1.value=ie.state.rectAreaLTC1,et.ltc_2.value=ie.state.rectAreaLTC2,et.pointLights.value=ie.state.point,et.pointLightShadows.value=ie.state.pointShadow,et.hemisphereLights.value=ie.state.hemi,et.directionalShadowMatrix.value=ie.state.directionalShadowMatrix,et.spotLightMatrix.value=ie.state.spotLightMatrix,et.spotLightMap.value=ie.state.spotLightMap,et.pointShadowMatrix.value=ie.state.pointShadowMatrix),ne.lightProbeGrid=L.state.lightProbeGridArray.length>0,ne.currentProgram=pt,ne.uniformsList=null,pt}function En(R){if(R.uniformsList===null){const Z=R.currentProgram.getUniforms();R.uniformsList=Yu.seqWithValue(Z.seq,R.uniforms)}return R.uniformsList}function kn(R,Z){const le=oe.get(R);le.outputColorSpace=Z.outputColorSpace,le.batching=Z.batching,le.batchingColor=Z.batchingColor,le.instancing=Z.instancing,le.instancingColor=Z.instancingColor,le.instancingMorph=Z.instancingMorph,le.skinning=Z.skinning,le.morphTargets=Z.morphTargets,le.morphNormals=Z.morphNormals,le.morphColors=Z.morphColors,le.morphTargetsCount=Z.morphTargetsCount,le.numClippingPlanes=Z.numClippingPlanes,le.numIntersection=Z.numClipIntersection,le.vertexAlphas=Z.vertexAlphas,le.vertexTangents=Z.vertexTangents,le.toneMapping=Z.toneMapping}function bn(R,Z){if(R.length===0)return null;if(R.length===1)return R[0].texture!==null?R[0]:null;A.setFromMatrixPosition(Z.matrixWorld);for(let le=0,ne=R.length;le<ne;le++){const ie=R[le];if(ie.texture!==null&&ie.boundingBox.containsPoint(A))return ie}return null}function Ma(R,Z,le,ne,ie){Z.isScene!==!0&&(Z=Zt),me.resetTextureUnits();const Ve=Z.fog,Ye=ne.isMeshStandardMaterial||ne.isMeshLambertMaterial||ne.isMeshPhongMaterial?Z.environment:null,Fe=J===null?V.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:Pt.workingColorSpace,je=ne.isMeshStandardMaterial||ne.isMeshLambertMaterial&&!ne.envMap||ne.isMeshPhongMaterial&&!ne.envMap,Ze=we.get(ne.envMap||Ye,je),it=ne.vertexColors===!0&&!!le.attributes.color&&le.attributes.color.itemSize===4,pt=!!le.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),et=!!le.morphAttributes.position,Ut=!!le.morphAttributes.normal,cn=!!le.morphAttributes.color;let Kt=Ua;ne.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(Kt=V.toneMapping);const Gt=le.morphAttributes.position||le.morphAttributes.normal||le.morphAttributes.color,Vt=Gt!==void 0?Gt.length:0,Xe=oe.get(ne),Xn=L.state.lights;if(lt===!0&&(_t===!0||R!==xe)){const vt=R===xe&&ne.id===fe;Je.setState(ne,R,vt)}let ee=!1;ne.version===Xe.__version?(Xe.needsLights&&Xe.lightsStateVersion!==Xn.state.version||Xe.outputColorSpace!==Fe||ie.isBatchedMesh&&Xe.batching===!1||!ie.isBatchedMesh&&Xe.batching===!0||ie.isBatchedMesh&&Xe.batchingColor===!0&&ie.colorTexture===null||ie.isBatchedMesh&&Xe.batchingColor===!1&&ie.colorTexture!==null||ie.isInstancedMesh&&Xe.instancing===!1||!ie.isInstancedMesh&&Xe.instancing===!0||ie.isSkinnedMesh&&Xe.skinning===!1||!ie.isSkinnedMesh&&Xe.skinning===!0||ie.isInstancedMesh&&Xe.instancingColor===!0&&ie.instanceColor===null||ie.isInstancedMesh&&Xe.instancingColor===!1&&ie.instanceColor!==null||ie.isInstancedMesh&&Xe.instancingMorph===!0&&ie.morphTexture===null||ie.isInstancedMesh&&Xe.instancingMorph===!1&&ie.morphTexture!==null||Xe.envMap!==Ze||ne.fog===!0&&Xe.fog!==Ve||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==Je.numPlanes||Xe.numIntersection!==Je.numIntersection)||Xe.vertexAlphas!==it||Xe.vertexTangents!==pt||Xe.morphTargets!==et||Xe.morphNormals!==Ut||Xe.morphColors!==cn||Xe.toneMapping!==Kt||Xe.morphTargetsCount!==Vt||!!Xe.lightProbeGrid!=L.state.lightProbeGridArray.length>0)&&(ee=!0):(ee=!0,Xe.__version=ne.version);let Te=Xe.currentProgram;ee===!0&&(Te=Vi(ne,Z,ie),Y&&ne.isNodeMaterial&&Y.onUpdateProgram(ne,Te,Xe));let ke=!1,$e=!1,dt=!1;const at=Te.getUniforms(),Mt=Xe.uniforms;if(T.useProgram(Te.program)&&(ke=!0,$e=!0,dt=!0),ne.id!==fe&&(fe=ne.id,$e=!0),Xe.needsLights){const vt=bn(L.state.lightProbeGridArray,ie);Xe.lightProbeGrid!==vt&&(Xe.lightProbeGrid=vt,$e=!0)}if(ke||xe!==R){T.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),at.setValue(j,"projectionMatrix",R.projectionMatrix),at.setValue(j,"viewMatrix",R.matrixWorldInverse);const kt=at.map.cameraPosition;kt!==void 0&&kt.setValue(j,sn.setFromMatrixPosition(R.matrixWorld)),F.logarithmicDepthBuffer&&at.setValue(j,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&at.setValue(j,"isOrthographic",R.isOrthographicCamera===!0),xe!==R&&(xe=R,$e=!0,dt=!0)}if(Xe.needsLights&&(Xn.state.directionalShadowMap.length>0&&at.setValue(j,"directionalShadowMap",Xn.state.directionalShadowMap,me),Xn.state.spotShadowMap.length>0&&at.setValue(j,"spotShadowMap",Xn.state.spotShadowMap,me),Xn.state.pointShadowMap.length>0&&at.setValue(j,"pointShadowMap",Xn.state.pointShadowMap,me)),ie.isSkinnedMesh){at.setOptional(j,ie,"bindMatrix"),at.setOptional(j,ie,"bindMatrixInverse");const vt=ie.skeleton;vt&&(vt.boneTexture===null&&vt.computeBoneTexture(),at.setValue(j,"boneTexture",vt.boneTexture,me))}ie.isBatchedMesh&&(at.setOptional(j,ie,"batchingTexture"),at.setValue(j,"batchingTexture",ie._matricesTexture,me),at.setOptional(j,ie,"batchingIdTexture"),at.setValue(j,"batchingIdTexture",ie._indirectTexture,me),at.setOptional(j,ie,"batchingColorTexture"),ie._colorsTexture!==null&&at.setValue(j,"batchingColorTexture",ie._colorsTexture,me));const hn=le.morphAttributes;if((hn.position!==void 0||hn.normal!==void 0||hn.color!==void 0)&&q.update(ie,le,Te),($e||Xe.receiveShadow!==ie.receiveShadow)&&(Xe.receiveShadow=ie.receiveShadow,at.setValue(j,"receiveShadow",ie.receiveShadow)),(ne.isMeshStandardMaterial||ne.isMeshLambertMaterial||ne.isMeshPhongMaterial)&&ne.envMap===null&&Z.environment!==null&&(Mt.envMapIntensity.value=Z.environmentIntensity),Mt.dfgLUT!==void 0&&(Mt.dfgLUT.value=bR()),$e){if(at.setValue(j,"toneMappingExposure",V.toneMappingExposure),Xe.needsLights&&Tn(Mt,dt),Ve&&ne.fog===!0&&Ge.refreshFogUniforms(Mt,Ve),Ge.refreshMaterialUniforms(Mt,ne,Ee,Se,L.state.transmissionRenderTarget[R.id]),Xe.needsLights&&Xe.lightProbeGrid){const vt=Xe.lightProbeGrid;Mt.probesSH.value=vt.texture,Mt.probesMin.value.copy(vt.boundingBox.min),Mt.probesMax.value.copy(vt.boundingBox.max),Mt.probesResolution.value.copy(vt.resolution)}Yu.upload(j,En(Xe),Mt,me)}if(ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(Yu.upload(j,En(Xe),Mt,me),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&at.setValue(j,"center",ie.center),at.setValue(j,"modelViewMatrix",ie.modelViewMatrix),at.setValue(j,"normalMatrix",ie.normalMatrix),at.setValue(j,"modelMatrix",ie.matrixWorld),ne.uniformsGroups!==void 0){const vt=ne.uniformsGroups;for(let kt=0,Dn=vt.length;kt<Dn;kt++){const Pn=vt[kt];Ae.update(Pn,Te),Ae.bind(Pn,Te)}}return Te}function Tn(R,Z){R.ambientLightColor.needsUpdate=Z,R.lightProbe.needsUpdate=Z,R.directionalLights.needsUpdate=Z,R.directionalLightShadows.needsUpdate=Z,R.pointLights.needsUpdate=Z,R.pointLightShadows.needsUpdate=Z,R.spotLights.needsUpdate=Z,R.spotLightShadows.needsUpdate=Z,R.rectAreaLights.needsUpdate=Z,R.hemisphereLights.needsUpdate=Z}function _s(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return J},this.setRenderTargetTextures=function(R,Z,le){const ne=oe.get(R);ne.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,ne.__autoAllocateDepthBuffer===!1&&(ne.__useRenderToTexture=!1),oe.get(R.texture).__webglTexture=Z,oe.get(R.depthTexture).__webglTexture=ne.__autoAllocateDepthBuffer?void 0:le,ne.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,Z){const le=oe.get(R);le.__webglFramebuffer=Z,le.__useDefaultFramebuffer=Z===void 0},this.setRenderTarget=function(R,Z=0,le=0){J=R,z=Z,G=le;let ne=null,ie=!1,Ve=!1;if(R){const Fe=oe.get(R);if(Fe.__useDefaultFramebuffer!==void 0){T.bindFramebuffer(j.FRAMEBUFFER,Fe.__webglFramebuffer),P.copy(R.viewport),K.copy(R.scissor),ye=R.scissorTest,T.viewport(P),T.scissor(K),T.setScissorTest(ye),fe=-1;return}else if(Fe.__webglFramebuffer===void 0)me.setupRenderTarget(R);else if(Fe.__hasExternalTextures)me.rebindTextures(R,oe.get(R.texture).__webglTexture,oe.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const it=R.depthTexture;if(Fe.__boundDepthTexture!==it){if(it!==null&&oe.has(it)&&(R.width!==it.image.width||R.height!==it.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");me.setupDepthRenderbuffer(R)}}const je=R.texture;(je.isData3DTexture||je.isDataArrayTexture||je.isCompressedArrayTexture)&&(Ve=!0);const Ze=oe.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Ze[Z])?ne=Ze[Z][le]:ne=Ze[Z],ie=!0):R.samples>0&&me.useMultisampledRTT(R)===!1?ne=oe.get(R).__webglMultisampledFramebuffer:Array.isArray(Ze)?ne=Ze[le]:ne=Ze,P.copy(R.viewport),K.copy(R.scissor),ye=R.scissorTest}else P.copy(He).multiplyScalar(Ee).floor(),K.copy(bt).multiplyScalar(Ee).floor(),ye=ht;if(le!==0&&(ne=he),T.bindFramebuffer(j.FRAMEBUFFER,ne)&&T.drawBuffers(R,ne),T.viewport(P),T.scissor(K),T.setScissorTest(ye),ie){const Fe=oe.get(R.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Fe.__webglTexture,le)}else if(Ve){const Fe=Z;for(let je=0;je<R.textures.length;je++){const Ze=oe.get(R.textures[je]);j.framebufferTextureLayer(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0+je,Ze.__webglTexture,le,Fe)}}else if(R!==null&&le!==0){const Fe=oe.get(R.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,Fe.__webglTexture,le)}fe=-1},this.readRenderTargetPixels=function(R,Z,le,ne,ie,Ve,Ye,Fe=0){if(!(R&&R.isWebGLRenderTarget)){zt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let je=oe.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ye!==void 0&&(je=je[Ye]),je){T.bindFramebuffer(j.FRAMEBUFFER,je);try{const Ze=R.textures[Fe],it=Ze.format,pt=Ze.type;if(R.textures.length>1&&j.readBuffer(j.COLOR_ATTACHMENT0+Fe),!F.textureFormatReadable(it)){zt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!F.textureTypeReadable(pt)){zt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=R.width-ne&&le>=0&&le<=R.height-ie&&j.readPixels(Z,le,ne,ie,Le.convert(it),Le.convert(pt),Ve)}finally{const Ze=J!==null?oe.get(J).__webglFramebuffer:null;T.bindFramebuffer(j.FRAMEBUFFER,Ze)}}},this.readRenderTargetPixelsAsync=async function(R,Z,le,ne,ie,Ve,Ye,Fe=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let je=oe.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ye!==void 0&&(je=je[Ye]),je)if(Z>=0&&Z<=R.width-ne&&le>=0&&le<=R.height-ie){T.bindFramebuffer(j.FRAMEBUFFER,je);const Ze=R.textures[Fe],it=Ze.format,pt=Ze.type;if(R.textures.length>1&&j.readBuffer(j.COLOR_ATTACHMENT0+Fe),!F.textureFormatReadable(it))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!F.textureTypeReadable(pt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const et=j.createBuffer();j.bindBuffer(j.PIXEL_PACK_BUFFER,et),j.bufferData(j.PIXEL_PACK_BUFFER,Ve.byteLength,j.STREAM_READ),j.readPixels(Z,le,ne,ie,Le.convert(it),Le.convert(pt),0);const Ut=J!==null?oe.get(J).__webglFramebuffer:null;T.bindFramebuffer(j.FRAMEBUFFER,Ut);const cn=j.fenceSync(j.SYNC_GPU_COMMANDS_COMPLETE,0);return j.flush(),await DE(j,cn,4),j.bindBuffer(j.PIXEL_PACK_BUFFER,et),j.getBufferSubData(j.PIXEL_PACK_BUFFER,0,Ve),j.deleteBuffer(et),j.deleteSync(cn),Ve}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,Z=null,le=0){const ne=Math.pow(2,-le),ie=Math.floor(R.image.width*ne),Ve=Math.floor(R.image.height*ne),Ye=Z!==null?Z.x:0,Fe=Z!==null?Z.y:0;me.setTexture2D(R,0),j.copyTexSubImage2D(j.TEXTURE_2D,le,0,0,Ye,Fe,ie,Ve),T.unbindTexture()},this.copyTextureToTexture=function(R,Z,le=null,ne=null,ie=0,Ve=0){let Ye,Fe,je,Ze,it,pt,et,Ut,cn;const Kt=R.isCompressedTexture?R.mipmaps[Ve]:R.image;if(le!==null)Ye=le.max.x-le.min.x,Fe=le.max.y-le.min.y,je=le.isBox3?le.max.z-le.min.z:1,Ze=le.min.x,it=le.min.y,pt=le.isBox3?le.min.z:0;else{const Mt=Math.pow(2,-ie);Ye=Math.floor(Kt.width*Mt),Fe=Math.floor(Kt.height*Mt),R.isDataArrayTexture?je=Kt.depth:R.isData3DTexture?je=Math.floor(Kt.depth*Mt):je=1,Ze=0,it=0,pt=0}ne!==null?(et=ne.x,Ut=ne.y,cn=ne.z):(et=0,Ut=0,cn=0);const Gt=Le.convert(Z.format),Vt=Le.convert(Z.type);let Xe;Z.isData3DTexture?(me.setTexture3D(Z,0),Xe=j.TEXTURE_3D):Z.isDataArrayTexture||Z.isCompressedArrayTexture?(me.setTexture2DArray(Z,0),Xe=j.TEXTURE_2D_ARRAY):(me.setTexture2D(Z,0),Xe=j.TEXTURE_2D),T.activeTexture(j.TEXTURE0),T.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,Z.flipY),T.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),T.pixelStorei(j.UNPACK_ALIGNMENT,Z.unpackAlignment);const Xn=T.getParameter(j.UNPACK_ROW_LENGTH),ee=T.getParameter(j.UNPACK_IMAGE_HEIGHT),Te=T.getParameter(j.UNPACK_SKIP_PIXELS),ke=T.getParameter(j.UNPACK_SKIP_ROWS),$e=T.getParameter(j.UNPACK_SKIP_IMAGES);T.pixelStorei(j.UNPACK_ROW_LENGTH,Kt.width),T.pixelStorei(j.UNPACK_IMAGE_HEIGHT,Kt.height),T.pixelStorei(j.UNPACK_SKIP_PIXELS,Ze),T.pixelStorei(j.UNPACK_SKIP_ROWS,it),T.pixelStorei(j.UNPACK_SKIP_IMAGES,pt);const dt=R.isDataArrayTexture||R.isData3DTexture,at=Z.isDataArrayTexture||Z.isData3DTexture;if(R.isDepthTexture){const Mt=oe.get(R),hn=oe.get(Z),vt=oe.get(Mt.__renderTarget),kt=oe.get(hn.__renderTarget);T.bindFramebuffer(j.READ_FRAMEBUFFER,vt.__webglFramebuffer),T.bindFramebuffer(j.DRAW_FRAMEBUFFER,kt.__webglFramebuffer);for(let Dn=0;Dn<je;Dn++)dt&&(j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,oe.get(R).__webglTexture,ie,pt+Dn),j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,oe.get(Z).__webglTexture,Ve,cn+Dn)),j.blitFramebuffer(Ze,it,Ye,Fe,et,Ut,Ye,Fe,j.DEPTH_BUFFER_BIT,j.NEAREST);T.bindFramebuffer(j.READ_FRAMEBUFFER,null),T.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else if(ie!==0||R.isRenderTargetTexture||oe.has(R)){const Mt=oe.get(R),hn=oe.get(Z);T.bindFramebuffer(j.READ_FRAMEBUFFER,ue),T.bindFramebuffer(j.DRAW_FRAMEBUFFER,X);for(let vt=0;vt<je;vt++)dt?j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,Mt.__webglTexture,ie,pt+vt):j.framebufferTexture2D(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,Mt.__webglTexture,ie),at?j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,hn.__webglTexture,Ve,cn+vt):j.framebufferTexture2D(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,hn.__webglTexture,Ve),ie!==0?j.blitFramebuffer(Ze,it,Ye,Fe,et,Ut,Ye,Fe,j.COLOR_BUFFER_BIT,j.NEAREST):at?j.copyTexSubImage3D(Xe,Ve,et,Ut,cn+vt,Ze,it,Ye,Fe):j.copyTexSubImage2D(Xe,Ve,et,Ut,Ze,it,Ye,Fe);T.bindFramebuffer(j.READ_FRAMEBUFFER,null),T.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else at?R.isDataTexture||R.isData3DTexture?j.texSubImage3D(Xe,Ve,et,Ut,cn,Ye,Fe,je,Gt,Vt,Kt.data):Z.isCompressedArrayTexture?j.compressedTexSubImage3D(Xe,Ve,et,Ut,cn,Ye,Fe,je,Gt,Kt.data):j.texSubImage3D(Xe,Ve,et,Ut,cn,Ye,Fe,je,Gt,Vt,Kt):R.isDataTexture?j.texSubImage2D(j.TEXTURE_2D,Ve,et,Ut,Ye,Fe,Gt,Vt,Kt.data):R.isCompressedTexture?j.compressedTexSubImage2D(j.TEXTURE_2D,Ve,et,Ut,Kt.width,Kt.height,Gt,Kt.data):j.texSubImage2D(j.TEXTURE_2D,Ve,et,Ut,Ye,Fe,Gt,Vt,Kt);T.pixelStorei(j.UNPACK_ROW_LENGTH,Xn),T.pixelStorei(j.UNPACK_IMAGE_HEIGHT,ee),T.pixelStorei(j.UNPACK_SKIP_PIXELS,Te),T.pixelStorei(j.UNPACK_SKIP_ROWS,ke),T.pixelStorei(j.UNPACK_SKIP_IMAGES,$e),Ve===0&&Z.generateMipmaps&&j.generateMipmap(Xe),T.unbindTexture()},this.initRenderTarget=function(R){oe.get(R).__webglFramebuffer===void 0&&me.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?me.setTextureCube(R,0):R.isData3DTexture?me.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?me.setTexture2DArray(R,0):me.setTexture2D(R,0),T.unbindTexture()},this.resetState=function(){z=0,G=0,J=null,T.reset(),Ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Na}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Pt._getDrawingBufferColorSpace(e),i.unpackColorSpace=Pt._getUnpackColorSpace()}}const AR="/assets/Reckk-RegularItalic-DLM8ilig.ttf",RR="/assets/Reckk-MediumItalic-D_uyfX4p.otf",CR="/assets/CXLMediumItalic-DYSp-DoC.otf",mx=4,gx=5,fs={fleet:"MAEX",name:"SharpeShark",version:"v1",role:"Executor",didShort:"0xf8a2…6035"};function NS(a){return["discover","copy","supervise","isolate"][a]??"discover"}function wR(a){return NS(a)}function DR(a,e,i){const r=e.split(/\s+/),o=[];let c="";for(const u of r){const d=c?`${c} ${u}`:u;a.measureText(d).width<=i?c=d:(c&&o.push(c),c=u)}return c&&o.push(c),o}const np=2048,LR=1.1;function NR(a,e){const i=Math.max(240,a);let r=Math.round(i*e*LR),o=Math.round(r*gx/mx);if(r>np||o>np){const c=np/Math.max(r,o);r=Math.max(280,Math.round(r*c)),o=Math.round(r*gx/mx)}return{W:r,H:o,layoutDpr:r/i}}function US(a,e,i,r,o,c){const u=Math.min(c,r/2,o/2);a.beginPath(),a.moveTo(e+u,i),a.arcTo(e+r,i,e+r,i+o,u),a.arcTo(e+r,i+o,e,i+o,u),a.arcTo(e,i+o,e,i,u),a.arcTo(e,i,e+r,i,u),a.closePath()}function fn(a,e,i,r,o,c,u){US(a,e,i,r,o,c),a.fillStyle=u,a.fill()}function xn(a,e,i,r,o,c,u,d){US(a,e,i,r,o,c),a.strokeStyle=u,a.lineWidth=d,a.stroke()}function cf(a,e,i,r,o,c,u=1){const d=Math.min(1,Math.max(0,u));fn(a,e,i,r,o,c,`rgba(12, 14, 18, ${d})`),xn(a,e,i,r,o,c,"rgba(255,255,255,0.12)",Math.max(1,c*.12))}function ic(a,e,i,r,o,c,u){if(r<2||o<2)return;const d=8*c,m=a.createLinearGradient(e,i+o,e+r,i);if(m.addColorStop(0,"#050508"),m.addColorStop(1,"rgba(200,245,168,0.14)"),fn(a,e,i,r,o,d,m),xn(a,e,i,r,o,d,"rgba(255,255,255,0.14)",Math.max(1,1.25*c)),(u==null?void 0:u.innerStroke)!==!1){const h=2.5*c;xn(a,e+h,i+h,r-h*2,o-h*2,Math.max(2,d-1.5*c),"rgba(200,245,168,0.35)",Math.max(1,c))}}const ar="rgba(255,255,255,0.08)",sr="rgba(255,255,255,0.14)";function uf(a,e,i,r,o,c,u){const d=11*u;a.fillStyle="#c8f5a8",a.font=`700 ${d}px "DM Mono", ui-monospace, monospace`,a.textAlign="left",a.fillText(c,e+o,i+o+d);const m=22*u,h=e+r-o-m,g=i+o-2*u;return xn(a,h,g,m,m,4*u,"rgba(255,255,255,0.14)",1),a.strokeStyle="rgba(255,255,255,0.55)",a.lineWidth=Math.max(1,1.25*u),a.beginPath(),a.moveTo(h+6*u,g+6*u),a.lineTo(h+m-6*u,g+m-6*u),a.moveTo(h+m-6*u,g+6*u),a.lineTo(h+6*u,g+m-6*u),a.stroke(),i+o+d+10*u}function OS(a,e,i,r,o,c,u,d){const m=28*d,h=(r-o*2)/2,g=10*d;a.font=`700 ${g}px "DM Mono", ui-monospace, monospace`;for(let _=0;_<2;_++){const v=e+o+_*h,x=_===u;a.fillStyle=x?"rgba(255,255,255,0.92)":"rgba(255,255,255,0.38)",a.textAlign="center",a.fillText(c[_],v+h/2,i+14*d),x&&(a.fillStyle="#c8f5a8",a.fillRect(v+4*d,i+m-2*d,h-8*d,2*d))}return a.textAlign="left",a.strokeStyle="rgba(255,255,255,0.08)",a.lineWidth=1,a.beginPath(),a.moveTo(e+o,i+m),a.lineTo(e+r-o,i+m),a.stroke(),i+m+10*d}function UR(a,e,i,r,o,c,u,d,m){const h=10*m,g=22*m;a.fillStyle="rgba(255,255,255,0.92)",a.font=`700 ${h}px "DM Mono", ui-monospace, monospace`,a.textAlign="left",a.fillText(c,e+o,i+14*m);const _=`${String(u).padStart(2,"0")} / ${String(d).padStart(2,"0")}`;a.fillStyle="rgba(255,255,255,0.38)",a.font=`700 ${8*m}px "DM Mono", ui-monospace, monospace`,a.textAlign="right",a.fillText(_,e+r-o,i+14*m),a.textAlign="left",a.strokeStyle="rgba(255,255,255,0.08)",a.lineWidth=1,a.beginPath(),a.moveTo(e+o,i+g),a.lineTo(e+r-o,i+g),a.stroke(),a.fillStyle="#c8f5a8";const v=Math.min(72*m,r*.28);return a.fillRect(e+o,i+g-2*m,v,2*m),i+g+10*m}function OR(a,e,i,r,o,c,u){const d=9*u;a.fillStyle="rgba(255,255,255,0.38)",a.font=`700 ${d}px "DM Mono", ui-monospace, monospace`,a.textAlign="left",a.fillText(o,e,i+d);const m=i+d+6*u,h=34*u;fn(a,e,m,r,h,6*u,ar),xn(a,e,m,r,h,6*u,sr,1),a.fillStyle=c.startsWith("Select")||c==="0x..."?"rgba(255,255,255,0.35)":"rgba(255,255,255,0.88)",a.font=`500 ${11*u}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText(c,e+10*u,m+h*.62),a.strokeStyle="rgba(255,255,255,0.4)",a.lineWidth=Math.max(1,1.2*u);const g=e+r-14*u,_=m+h/2;return a.beginPath(),a.moveTo(g-4*u,_-2*u),a.lineTo(g,_+3*u),a.lineTo(g+4*u,_-2*u),a.stroke(),d+6*u+h}function PR(a,e,i,r,o){const c=9*o;a.fillStyle="rgba(255,255,255,0.38)",a.font=`700 ${c}px "DM Mono", ui-monospace, monospace`,a.textAlign="left",a.fillText("AMOUNT",e,i+c),a.textAlign="right",a.fillStyle="rgba(255,255,255,0.45)",a.fillText("AVAILABLE 5,000.00",e+r,i+c),a.textAlign="left";const u=i+c+6*o,d=44*o;fn(a,e,u,r,d,8*o,"#050508"),xn(a,e,u,r,d,8*o,"rgba(255,255,255,0.1)",1),a.fillStyle="rgba(255,255,255,0.92)",a.font=`700 ${22*o}px "DM Mono", ui-monospace, monospace`,a.fillText("0.00",e+12*o,u+d*.68);const m=u+d+10*o;return a.strokeStyle="rgba(255,255,255,0.12)",a.lineWidth=Math.max(2,2*o),a.beginPath(),a.moveTo(e,m),a.lineTo(e+r,m),a.stroke(),fn(a,e,m-5*o,14*o,10*o,5*o,"rgba(255,255,255,0.85)"),a.fillStyle="rgba(255,255,255,0.35)",a.font=`500 ${8*o}px "DM Mono", ui-monospace, monospace`,a.fillText("0.01",e,m+14*o),a.textAlign="right",a.fillText("5,000.00",e+r,m+14*o),a.textAlign="left",c+6*o+d+10*o+16*o}function IR(a,e,i,r,o,c){a.strokeStyle="rgba(255,255,255,0.08)",a.lineWidth=1,a.beginPath(),a.moveTo(e,i),a.lineTo(e+r,i),a.stroke();const u=i+10*o,d=36*o,m=72*o;xn(a,e,u,m,d,6*o,"rgba(255,255,255,0.14)",1),a.fillStyle="rgba(255,255,255,0.55)",a.font=`700 ${9*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText("CANCEL",e+m/2,u+d*.62);const h=e+m+8*o,g=r-m-8*o;return fn(a,h,u,g,d,6*o,"rgba(255,255,255,0.06)"),xn(a,h,u,g,d,6*o,"rgba(255,255,255,0.1)",1),a.fillStyle="#c8f5a8",a.fillRect(h,u+4*o,3*o,d-8*o),a.fillStyle="rgba(255,255,255,0.55)",a.font=`700 ${8.5*o}px "DM Mono", ui-monospace, monospace`,a.fillText(c,h+g/2+2*o,u+d*.62),a.textAlign="left",10*o+d}function xm(a,e,i,r,o){const c=44*o;fn(a,e,i,r,c,8*o,"rgba(200,245,168,0.08)"),xn(a,e,i,r,c,8*o,"rgba(200,245,168,0.22)",1);const u=28*o;return fn(a,e+8*o,i+(c-u)/2,u,u,4*o,"rgba(200,245,168,0.14)"),a.fillStyle="#c8f5a8",a.font=`700 ${10*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText("SS",e+8*o+u/2,i+c*.58),a.textAlign="left",a.fillStyle="rgba(255,255,255,0.92)",a.font=`700 ${11*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText(fs.name,e+8*o+u+8*o,i+16*o),a.fillStyle="rgba(255,255,255,0.42)",a.font=`500 ${9*o}px "DM Mono", ui-monospace, monospace`,a.fillText(`${fs.role} · ${fs.didShort}`,e+8*o+u+8*o,i+32*o),c}function BR(a,e,i,r,o){const c=Math.min(r*190/316,r*.58),u=12*o,d=8*o,m=a.createLinearGradient(e,i+c,e+r,i);m.addColorStop(0,"#050508"),m.addColorStop(1,"rgba(200,245,168,0.14)"),fn(a,e,i,r,c,d,m),xn(a,e,i,r,c,d,"rgba(255,255,255,0.14)",Math.max(1,1.25*o)),xn(a,e+2.5*o,i+2.5*o,r-5*o,c-5*o,d-1.5*o,"rgba(200,245,168,0.35)",Math.max(1,o)),a.fillStyle="rgba(255,255,255,0.92)",a.font=`700 ${11*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText(fs.fleet,e+u,i+u+10*o),a.fillStyle="#c8f5a8",a.beginPath(),a.arc(e+r-u-7*o,i+u+5*o,6*o,0,Math.PI*2),a.fill(),a.fillStyle="#0a0a0c",a.font=`700 ${8*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText("✓",e+r-u-7*o,i+u+8*o),a.textAlign="left";const h=i+c-u-2*o;a.fillStyle="rgba(255,255,255,0.92)",a.font=`700 ${10*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText(fs.name.toUpperCase(),e+u,h-24*o),a.fillStyle="rgba(255,255,255,0.45)",a.font=`500 ${9*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText(`${fs.role} · ${fs.version}`,e+u,h-10*o),a.fillStyle="#c8f5a8",a.font=`700 ${10*o}px "DM Mono", ui-monospace, monospace`,a.fillText(fs.didShort,e+u,h);const g=28*o;return fn(a,e+r-u-g,i+c-u-g,g,g,4*o,"rgba(200,245,168,0.14)"),xn(a,e+r-u-g,i+c-u-g,g,g,4*o,"rgba(200,245,168,0.28)",1),a.fillStyle="#c8f5a8",a.font=`700 ${11*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText("SS",e+r-u-g/2,i+c-u-g*.35),a.textAlign="left",c}function FR(a,e,i,r,o){const c=Math.min(r*190/316,r*.58),u=10*o,d=8*o,m=a.createLinearGradient(e,i,e+r,i+c);m.addColorStop(0,"#0a0c10"),m.addColorStop(.55,"#12161c"),m.addColorStop(1,"rgba(200,245,168,0.18)"),fn(a,e,i,r,c,d,m),xn(a,e,i,r,c,d,"rgba(255,255,255,0.14)",Math.max(1,1.25*o)),a.fillStyle="rgba(255,255,255,0.92)",a.font=`700 ${10*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText("Morpheum.",e+u,i+u+10*o),a.strokeStyle="rgba(255,255,255,0.45)",a.lineWidth=Math.max(1,o);for(let h=0;h<3;h++){const g=5*o+h*3.5*o,_=4*o+h*2.5*o;a.beginPath(),a.ellipse(e+r-u-4*o,i+u+8*o,g,_,-.4,-.2,1.2),a.stroke()}return a.fillStyle="rgba(255,255,255,0.88)",a.font=`700 ${9*o}px "DM Mono", ui-monospace, monospace`,a.fillText("5678  ····  ····  7890",e+u,i+c*.52),a.fillStyle="rgba(255,255,255,0.92)",a.font=`700 ${8*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText(fs.name.toUpperCase(),e+u,i+c-u-2*o),a.textAlign="right",a.fillStyle="rgba(255,255,255,0.55)",a.font=`700 ${8*o}px "DM Mono", ui-monospace, monospace`,a.fillText("12/28",e+r-u,i+c-u-2*o),a.textAlign="left",c}function zR(a,e,i,r,o,c=25){const u=9*o;a.fillStyle="rgba(255,255,255,0.38)",a.font=`700 ${u}px "DM Mono", ui-monospace, monospace`,a.textAlign="left",a.fillText("MIRROR SIZE",e,i+u),a.textAlign="right",a.fillStyle="#c8f5a8",a.fillText(`${c}%`,e+r,i+u),a.textAlign="left";const d=i+u+12*o,m=Math.max(4,5*o);fn(a,e,d,r,m,m/2,"rgba(255,255,255,0.1)");const h=Math.max(m,r*c/100);fn(a,e,d,h,m,m/2,"rgba(200,245,168,0.75)");const g=7*o;return a.fillStyle="#f4f6f0",a.beginPath(),a.arc(e+h,d+m/2,g,0,Math.PI*2),a.fill(),a.strokeStyle="rgba(200,245,168,0.55)",a.lineWidth=Math.max(1,o),a.stroke(),a.fillStyle="rgba(255,255,255,0.35)",a.font=`500 ${7.5*o}px "DM Mono", ui-monospace, monospace`,a.fillText("5%",e,d+m+14*o),a.textAlign="right",a.fillText("100%",e+r,d+m+14*o),a.textAlign="left",u+12*o+m+16*o}function HR(a,e,i,r,o){const c=9*o;a.fillStyle="rgba(255,255,255,0.38)",a.font=`700 ${c}px "DM Mono", ui-monospace, monospace`,a.fillText("AGENTIC PROTECTION",e,i+c);const u=5*o,d=(r-u*2)/3,m=52*o,h=i+c+8*o;return[{label:"Manual",tone:"rgba(255,255,255,0.12)",active:!1},{label:"Guarded",tone:"rgba(234,179,8,0.55)",active:!0},{label:"High",tone:"rgba(255,71,87,0.35)",active:!1}].forEach((_,v)=>{const x=e+v*(d+u);fn(a,x,h,d,m,6*o,ar),xn(a,x,h,d,m,6*o,_.active?_.tone:sr,_.active?Math.max(1.5,1.5*o):1),_.active&&(a.fillStyle="rgba(234,179,8,0.12)",a.fillRect(x+1,h+1,3*o,m-2)),a.fillStyle=_.active?"rgba(255,255,255,0.92)":"rgba(255,255,255,0.55)",a.font=`700 ${9*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.textAlign="center",a.fillText(_.label,x+d/2,h+18*o),a.fillStyle="rgba(255,255,255,0.38)",a.font=`400 ${7*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`;const b=_.label==="Guarded"?"safe default":_.label==="Manual"?"signals":"silent";a.fillText(b,x+d/2,h+34*o)}),a.textAlign="left",c+8*o+m}function GR(a,e,i,r,o,c="SLIDE TO START COPY"){const u=40*o;fn(a,e,i,r,u,8*o,ar),xn(a,e,i,r,u,8*o,sr,1);const d=.22,m=4*o,h=u-m*2,g=r-m*2-h;return fn(a,e+m,i+m,h+g*d,h,h/2,"rgba(200,245,168,0.18)"),fn(a,e+m,i+m,h,h,h/2,"rgba(200,245,168,0.85)"),a.fillStyle="#0a0a0c",a.font=`700 ${12*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText("›",e+m+h/2,i+u*.62),a.fillStyle="rgba(255,255,255,0.5)",a.font=`700 ${8*o}px "DM Mono", ui-monospace, monospace`,a.fillText(c,e+r/2+h*.15,i+u*.62),a.textAlign="left",u}const jl=2,Ho={sharpe:"2.41",roi:"+38.2%",riskScore:"72",reputation:"84",receipts:[{action:"Close BTC long",pnl:"+103.09"},{action:"Open ETH long",pnl:null},{action:"Close SOL short",pnl:"+41.20"}]};function _x(a,e,i,r,o,c){const u=6*c,d=o.length,m=(r-u*(d-1))/d,h=36*c;return o.forEach(([g,_],v)=>{const x=e+v*(m+u);fn(a,x,i,m,h,6*c,ar),xn(a,x,i,m,h,6*c,sr,1),a.fillStyle="rgba(255,255,255,0.4)",a.font=`700 ${7*c}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText(g,x+m/2,i+12*c),a.fillStyle="#c8f5a8",a.font=`700 ${11*c}px "DM Mono", ui-monospace, monospace`,a.fillText(_,x+m/2,i+26*c)}),a.textAlign="left",h}function VR(a,e,i,r,o){const c=[{label:"Verified",brand:!0},{label:"Receipt"},{label:"Risk",value:Ho.riskScore},{label:"Rep",value:Ho.reputation}],u=4*o,d=22*o,m=5*o;let h=e;a.font=`700 ${6.5*o}px "DM Mono", ui-monospace, monospace`;for(const g of c){const _=a.measureText(g.label.toUpperCase()).width,v=g.value?a.measureText(g.value).width+3*o:0,x=m*2+6*o+_+v;if(h+x>e+r)break;const b=g.brand?"rgba(200,245,168,0.12)":ar,C=g.brand?"rgba(200,245,168,0.35)":sr;fn(a,h,i,x,d,4*o,b),xn(a,h,i,x,d,4*o,C,1);const y=2*o;a.beginPath(),a.arc(h+m+y,i+d/2,y,0,Math.PI*2),a.fillStyle=g.brand?"#c8f5a8":"rgba(255,255,255,0.35)",a.fill();let S=h+m+y*2+4*o;a.fillStyle=g.brand?"#c8f5a8":"rgba(255,255,255,0.55)",a.textAlign="left",a.fillText(g.label.toUpperCase(),S,i+d*.68),S+=_+3*o,g.value&&(a.fillStyle="rgba(255,255,255,0.92)",a.fillText(g.value,S,i+d*.68)),h+=x+u}return a.textAlign="left",d}function kR(a,e,i,r,o){const c=Ho.receipts,u=22*o,d=14*o+c.length*u;return fn(a,e,i,r,d,6*o,ar),xn(a,e,i,r,d,6*o,sr,1),a.fillStyle="rgba(255,255,255,0.4)",a.font=`700 ${6.5*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="left",a.fillText("RECEIPTS",e+8*o,i+10*o),c.forEach((m,h)=>{const g=i+14*o+h*u;a.fillStyle="rgba(255,255,255,0.72)",a.font=`500 ${8*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="left",a.fillText(m.action,e+8*o,g+u*.62),a.textAlign="right",m.pnl?(a.fillStyle="#c8f5a8",a.font=`700 ${8*o}px "DM Mono", ui-monospace, monospace`,a.fillText(m.pnl,e+r-8*o,g+u*.62)):(a.fillStyle="rgba(255,255,255,0.35)",a.fillText("—",e+r-8*o,g+u*.62))}),a.textAlign="left",d}function XR(a,e,i,r,o){const c=Math.min(r*150/316,r*.48),u=12*o,d=8*o,m=a.createLinearGradient(e,i+c,e+r,i);m.addColorStop(0,"#050508"),m.addColorStop(1,"rgba(200,245,168,0.14)"),fn(a,e,i,r,c,d,m),xn(a,e,i,r,c,d,"rgba(255,255,255,0.14)",Math.max(1,1.25*o)),xn(a,e+2.5*o,i+2.5*o,r-5*o,c-5*o,d-1.5*o,"rgba(200,245,168,0.35)",Math.max(1,o)),a.fillStyle="rgba(255,255,255,0.92)",a.font=`700 ${11*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText("MAEX",e+u,i+u+10*o);const h=40*o,g=16*o,_=e+r-u-h,v=i+u-1*o;return fn(a,_,v,h,g,8*o,"rgba(200,245,168,0.14)"),xn(a,_,v,h,g,8*o,"rgba(200,245,168,0.28)",1),a.fillStyle="#c8f5a8",a.font=`700 ${8*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText("LIVE",_+h/2,v+11*o),a.textAlign="left",a.fillStyle="rgba(255,255,255,0.92)",a.font=`700 ${14*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText("MAEX Core",e+u,i+u+36*o),a.fillStyle="rgba(255,255,255,0.45)",a.font=`500 ${9*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText("Curated agent basket · 4 agents",e+u,i+u+52*o),a.fillStyle="#c8f5a8",a.font=`700 ${18*o}px "DM Mono", ui-monospace, monospace`,a.fillText("+12.8%",e+u,i+c-u-4*o),a.fillStyle="rgba(255,255,255,0.4)",a.font=`700 ${8*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="right",a.fillText("30D RETURN",e+r-u,i+c-u-8*o),a.textAlign="left",c}function WR(a,e,i,r,o){const c=[["SharpeShark","42%","+38%"],["SortinoSloth","33%","+21%"],["FundingFox","25%","−4%"]],u=26*o,d=c.length*u;return fn(a,e,i,r,d,6*o,ar),xn(a,e,i,r,d,6*o,sr,1),c.forEach(([m,h,g],_)=>{const v=i+_*u;_>0&&(a.strokeStyle="rgba(255,255,255,0.06)",a.lineWidth=1,a.beginPath(),a.moveTo(e+8*o,v),a.lineTo(e+r-8*o,v),a.stroke()),a.fillStyle="rgba(255,255,255,0.85)",a.font=`600 ${9*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.textAlign="left",a.fillText(m,e+10*o,v+u*.62),a.fillStyle="rgba(255,255,255,0.4)",a.font=`700 ${8*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText(h,e+r*.58,v+u*.62);const x=!g.startsWith("−")&&!g.startsWith("-");a.fillStyle=x?"#c8f5a8":"rgba(255,120,120,0.85)",a.textAlign="right",a.fillText(g,e+r-10*o,v+u*.62)}),a.textAlign="left",d}function YR(a,e,i,r,o,c=0,u=1){const d=r/300,m=12*d,h=10*d,g=(c%jl+jl)%jl,_=[{header:"AGENT PROOF",segment:"AGENTS"},{header:"INDEX PROOF",segment:"INDICES"}][g];cf(a,e,i,r,o,h,u);let v=uf(a,e,i,r,m,_.header,d);v=UR(a,e,v,r,m,_.segment,g+1,jl,d);const x=i+o-m,b=e+m,C=v,y=r-m*2,S=Math.max(48*d,x-v),I=10*d;ic(a,b,C,y,S,d);const O=b+I,A=y-I*2;let U=C+I;const L=C+S-I;if(g===0){U+=xm(a,O,U,A,d)+8*d,U+22*d<=L&&(U+=VR(a,O,U,A,d)+8*d);const E=[["SHARPE",Ho.sharpe],["ROI",Ho.roi],["RISK",Ho.riskScore]];U+36*d<=L&&(U+=_x(a,O,U,A,E,d)+8*d),U+70*d<=L&&kR(a,O,U,A,d);return}U+=XR(a,O,U,A,d)+8*d,U+78*d<=L&&(U+=WR(a,O,U,A,d)+8*d);const B=[["RETURN","+12.8%"],["RISK","58"],["AGENTS","4"]];U+36*d<=L&&_x(a,O,U,A,B,d)}function qR(a,e,i,r,o,c=0,u=1){const d=r/300,m=12*d,h=10*d;cf(a,e,i,r,o,h,u);let g=uf(a,e,i,r,m,"COPY TRADE",d);g=OS(a,e,g,r,m,["MIRROR","BUCKET"],0,d);const _=40*d,v=i+o-m-_,x=v-10*d;if(c%2===0){const C=6*d,y=r-m*2;let S=(y-C)/2,I=Math.min(S*190/316,S*.58);const O=Math.max(64*d,x-g-28*d);I>O&&(S=S*(O/I),I=O);const A=d*(S/((y-C)/2)),U=e+m+(y-(S*2+C))/2;FR(a,U,g,S,A),BR(a,U+S+C,g,S,A),g+=I+10*d;const L=[["SPREAD","0.02%"],["FUNDING","8h"],["SIZE","25%"]],B=5*d,E=(r-m*2-B*2)/3,N=32*d;if(g+N<=x){const V=6*d;ic(a,e+m,g-V,r-m*2,N+V*2,d,{innerStroke:!1}),L.forEach(([H,Y],he)=>{const ue=e+m+he*(E+B);fn(a,ue,g,E,N,6*d,ar),xn(a,ue,g,E,N,6*d,sr,1),a.fillStyle="rgba(255,255,255,0.4)",a.font=`700 ${6.5*d}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText(H,ue+E/2,g+11*d),a.fillStyle="#c8f5a8",a.font=`700 ${10*d}px "DM Mono", ui-monospace, monospace`,a.fillText(Y,ue+E/2,g+24*d)}),a.textAlign="left"}}else{const C=e+m,y=g,S=r-m*2,I=Math.max(48*d,x-g),O=10*d;ic(a,C,y,S,I,d);const A=C+O,U=S-O*2;let L=y+O;const B=y+I-O;L+=xm(a,A,L,U,d)+10*d,L+36*d<B&&(L+=zR(a,A,L,U,d,25)+10*d),L+50*d<B&&HR(a,A,L,U,d)}GR(a,e+m,v,r-m*2,d)}const jR=2,ZR=[{agent:"SharpeShark",timeLabel:"07-08, 15:42",status:"want-to",statusLabel:"Want to",action:"Open ETH long · 1.2 ETH",showActions:!0},{agent:"NightOwl",timeLabel:"07-08, 15:31",status:"rejected",statusLabel:"Rejected",action:"Open BTC short · 0.04 BTC"},{agent:"SharpeShark",timeLabel:"07-08, 15:25",status:"short",statusLabel:"Close Long",action:"BTCUSDT · 0.04 BTC",pnl:{text:"+103.09",tone:"long"}},{agent:"FluxRunner",timeLabel:"07-08, 14:10",status:"long",statusLabel:"Open Long",action:"ETHUSDT · 0.8 ETH"},{agent:"NightOwl",timeLabel:"07-07, 09:42",status:"short",statusLabel:"Open Short",action:"SOLUSDT · 12 SOL"}];function KR(a){switch(a){case"want-to":return{fg:"rgba(200,245,168,0.95)",bg:"rgba(184,245,168,0.12)"};case"rejected":return{fg:"#ff4757",bg:"rgba(255,71,87,0.12)"};case"long":return{fg:"#00ff88",bg:"rgba(0,255,136,0.12)"};case"short":return{fg:"#ff4757",bg:"rgba(255,71,87,0.12)"}}}function QR(a,e,i,r,o,c=1){const u=r/300,d=12*u,m=10*u;cf(a,e,i,r,o,m,c);let h=uf(a,e,i,r,d,"ACTIVITY LOG",u);const g=i+o-d,_=e+d,v=h,x=r-d*2,b=Math.max(48*u,g-h),C=10*u;ic(a,_,v,x,b,u);const y=58*u,S=10*u,I=6*u,O=_+C+y+I+S+I,A=_+x-C-O,U=_+C+y+I+S/2,L=_+C;h=v+C;const B=v+b-C,E=ZR,N=4*u;E.forEach((V,H)=>{if(h>=B-8*u)return;const Y=H===0,he=H===E.length-1,ue=KR(V.status),X=8*u,z=6*u,G=7*u,J=8*u,fe=V.showActions?22*u:0,xe=V.showActions?5*u:0,K=Math.max(X+2*u+z,G+4*u+J)+xe+fe+N;if(h+Math.min(K,28*u)>B)return;a.textAlign="right",a.fillStyle="rgba(255,255,255,0.88)",a.font=`500 ${X}px "DM Mono", ui-monospace, monospace`,a.fillText(V.agent,L+y,h+X),a.fillStyle="rgba(255,255,255,0.38)",a.font=`500 ${z}px "DM Mono", ui-monospace, monospace`,a.fillText(V.timeLabel,L+y,h+X+2*u+z),a.textAlign="left",he||(a.strokeStyle="rgba(255,255,255,0.14)",a.lineWidth=Math.max(1,u),a.beginPath(),a.moveTo(U,h+6*u),a.lineTo(U,h+K),a.stroke());const ye=2.4*u;a.beginPath(),a.arc(U,h+5*u,ye,0,Math.PI*2),a.fillStyle=Y?"#c8f5a8":"rgba(255,255,255,0.32)",a.fill(),Y&&(a.beginPath(),a.arc(U,h+5*u,ye+2.2*u,0,Math.PI*2),a.fillStyle="rgba(200,245,168,0.16)",a.fill());const Ce=4*u,ze=2*u;a.font=`700 ${G}px "DM Mono", ui-monospace, monospace`;const se=V.statusLabel.toUpperCase(),Se=a.measureText(se).width+Ce*2,Ee=G+ze*2;fn(a,O,h,Se,Ee,3*u,ue.bg),a.fillStyle=ue.fg,a.fillText(se,O+Ce,h+G+ze*.35),a.fillStyle="rgba(255,255,255,0.55)",a.font=`400 ${J}px "DM Mono", ui-monospace, monospace`;const Ue=h+Ee+3*u+J;let st=V.action;if(V.pnl){const He=`${V.action} · `;a.fillText(He,O,Ue);const bt=a.measureText(He).width;a.fillStyle=V.pnl.tone==="long"?"#00ff88":"#ff4757",a.font=`700 ${J}px "DM Mono", ui-monospace, monospace`,a.fillText(V.pnl.text,O+bt,Ue)}else{for(;st.length>8&&a.measureText(st).width>A;)st=`${st.slice(0,-2)}…`;a.fillText(st,O,Ue)}if(V.showActions&&h+Ee+3*u+J+xe+fe<=B){const He=h+Ee+3*u+J+xe,bt=(A-5*u)/2;xn(a,O,He,bt,fe,3*u,"rgba(255,255,255,0.18)",1),a.fillStyle="rgba(255,255,255,0.72)",a.font=`700 ${7*u}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText("REJECT",O+bt/2,He+fe*.68),fn(a,O+bt+5*u,He,bt,fe,3*u,"rgba(184,245,168,0.88)"),a.fillStyle="rgba(8,14,10,0.92)",a.fillText("APPROVE",O+bt+5*u+bt/2,He+fe*.68),a.textAlign="left"}h+=K})}function JR(a,e,i,r,o,c=1){const u=r/300,d=12*u,m=10*u;cf(a,e,i,r,o,m,c);let h=uf(a,e,i,r,d,"FUND BUCKET",u);h=OS(a,e,h,r,d,["FUND BUCKET","CREATE BUCKET"],0,u);const g=10*u+36*u,_=e+d,v=h,x=r-d*2,b=Math.max(48*u,i+o-d-g-8*u-h),C=10*u;ic(a,_,v,x,b,u);const y=_+C,S=x-C*2;let I=v+C;I+=xm(a,y,I,S,u)+8*u,I+=OR(a,y,I,S,"FROM","Select source bucket",u)+8*u,v+b-C-I>70*u&&PR(a,y,I,S,u),IR(a,e+d,i+o-d-g,r-d*2,u,"COMPLETE REQUIRED FIELDS")}function PS(a,e,i,r,o,c,u=0,d=1){switch(e){case"discover":YR(a,i,r,o,c,u,d);break;case"copy":qR(a,i,r,o,c,u,d);break;case"supervise":QR(a,i,r,o,c,d);break;case"isolate":JR(a,i,r,o,c,d);break}}function $R(a,e,i,r,o=0,c=1){a.clearRect(0,0,i,r),PS(a,e,0,0,i,r,o,c)}function e3(a,e,i,r,o,c=.8,u=1){const{W:d,H:m,layoutDpr:h}=NR(r,i),g=document.createElement("canvas");g.width=d,g.height=m;const _=g.getContext("2d"),v=Math.min(1,Math.max(0,c)),x=_.createLinearGradient(0,0,0,m);x.addColorStop(0,`rgba(8, 10, 14, ${v})`),x.addColorStop(.55,`rgba(5, 7, 13, ${v})`),x.addColorStop(1,`rgba(3, 4, 6, ${v})`),_.fillStyle=x,_.fillRect(0,0,d,m);const b=Math.round(22*h),C=Math.round(.05*m),y=Math.round(.045*m),S=d-b*2,I=10*h,O=20*h,A=Math.min(34*h,d*.095);_.fillStyle="rgba(255,255,255,0.94)",_.font=`normal 400 ${A}px ${o}`,_.textBaseline="alphabetic";const U=_.measureText(a.verb),L=Math.abs(U.actualBoundingBoxAscent??A*.8),B=Math.abs(U.actualBoundingBoxDescent??A*.2),E=C+L;_.shadowColor="rgba(10, 14, 23, 0.55)",_.shadowBlur=Math.max(8,12*h),_.shadowOffsetX=0,_.shadowOffsetY=Math.max(1,1.5*h),_.fillText(a.verb,b,E),_.shadowColor="transparent",_.shadowBlur=0,_.shadowOffsetY=0;const N=Math.min(13*h,d*.036);_.fillStyle="rgba(255,255,255,0.94)",_.font=`400 ${N}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`;const H=DR(_,a.description,S)[0]??a.description,Y=_.measureText(H),he=Math.abs(Y.actualBoundingBoxAscent??N*.75),ue=E+B+I+he;_.shadowColor="rgba(10, 14, 23, 0.45)",_.shadowBlur=Math.max(4,6*h),_.shadowOffsetY=Math.max(.5,1*h),_.fillText(H,b,ue),_.shadowColor="transparent",_.shadowBlur=0,_.shadowOffsetY=0;const X=Math.round(ue+O),z=b,G=X,J=S,fe=Math.max(80*h,m-X-y);PS(_,wR(e),z,G,J,fe,0,u);const xe=new _m(g);return xe.colorSpace=fi,xe.minFilter=er,xe.generateMipmaps=!0,xe}const tm=["M41.9213 3.43614C43.0393 3.43614 43.8716 3.77154 44.4182 4.44235C44.9647 5.138 45.1262 6.1939 44.9026 7.61005L41.884 26.8026C41.7846 27.4982 41.8467 28.0075 42.0703 28.3305C42.2691 28.6784 42.6542 28.8771 43.2256 28.9268L43.8591 28.9641L43.8219 29.2622L36.7784 30.492L36.4803 30.492L40.1324 7.46098C40.3064 6.26843 40.0206 5.67216 39.2753 5.67216C38.9523 5.67216 38.6045 5.75912 38.2318 5.93303C37.8343 6.10694 37.3995 6.44235 36.9275 6.93924L36.7411 6.79017C38.0828 4.55415 39.8095 3.43614 41.9213 3.43614Z","M29.9958 3.43614C31.1138 3.43614 31.9461 3.77154 32.4927 4.44235C33.0393 5.138 33.2007 6.1939 32.9771 7.61005L29.9585 26.8026C29.8591 27.4982 29.9212 28.0075 30.1449 28.3305C30.3436 28.6784 30.7287 28.8771 31.3001 28.9268L31.9337 28.9641L31.8964 29.2622L24.8529 30.492L24.5548 30.492L28.207 7.46098C28.3809 6.26843 28.0952 5.67216 27.3498 5.67216C27.0268 5.67216 26.679 5.75912 26.3063 5.93303C25.9088 6.10694 25.474 6.44235 25.002 6.93924L24.8157 6.79017C26.1573 4.55415 27.884 3.43614 29.9958 3.43614Z","M18.0703 3.43614C19.1883 3.43614 20.0206 3.77154 20.5672 4.44235C21.1138 5.138 21.2753 6.1939 21.0517 7.61005L18.033 26.8026C17.9337 27.4982 17.9958 28.0075 18.2194 28.3305C18.4181 28.6784 18.8032 28.8771 19.3747 28.9268L20.0082 28.9641L19.9709 29.2622L12.9275 30.492L12.6293 30.492L16.2815 7.46098C16.4554 6.26843 16.1697 5.67216 15.4243 5.67216C15.1014 5.67216 14.7535 5.75912 14.3809 5.93303C13.9834 6.10694 13.5486 6.44235 13.0765 6.93924L12.8902 6.79017C14.2318 4.55415 15.9585 3.43614 18.0703 3.43614Z","M45.5631 10.8482C46.0378 11.9189 46.0912 12.9315 45.7231 13.8861C45.3095 14.8231 44.3453 15.4956 42.8305 15.9035L16.576 22.853C15.2325 23.2226 14.7771 24.0651 15.2096 25.3806L15.7698 26.7714L13.8491 27.2839L9.924 22.1284L9.25377 20.6168L40.8242 12.2711C41.6674 12.048 42.2133 11.7494 42.4619 11.3754C42.6651 10.9838 42.669 10.5676 42.4735 10.1267C42.3199 9.78031 42.1016 9.5003 41.8185 9.2867C41.4899 9.05556 41.0511 8.87329 40.5021 8.7399L41.5734 7.5866C42.563 7.86379 43.3915 8.28774 44.0591 8.85845C44.7127 9.39767 45.214 10.0609 45.5631 10.8482Z"],t3="0 0 58 35",n3=58,i3=35;function a3({fill:a="#C8F5A8",width:e=58,height:i=35,padding:r=10,"aria-hidden":o=!0,...c}){const u=[-r,-r,n3+r*2,i3+r*2].join(" ");return D.jsx("svg",{width:e,height:i,viewBox:u,fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":o,...c,children:tm.map(d=>D.jsx("path",{d,fill:a},d.slice(0,24)))})}const s3={sm:{width:30,height:18},md:{width:30,height:18},lg:{width:44,height:27},hero:{width:76,height:46}};function Sm({size:a="md",showWordmark:e=!0,className:i="",brandName:r="Morpheum"}){const o=s3[a];return D.jsxs("span",{className:`brand-mark brand-mark--${a} ${i}`.trim(),children:[D.jsx(a3,{className:"brand-mark__icon",width:o.width,height:o.height,padding:0,fill:"var(--terminal-brand)"}),e?D.jsx("span",{className:"brand-mark__word",children:r}):null]})}const vx="!@#$%^&*()_+{}[]|;:,.<>?/0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",IS=80,Jl=430,nm=430,ip=160,xx=168;function r3(){return typeof window>"u"?!1:window.matchMedia("(prefers-reduced-motion: reduce)").matches}function o3(){return vx[Math.floor(Math.random()*vx.length)]??"?"}function Sx(a){return Array.from(a).map(e=>{const i=Math.random()*(Jl-ip),r=ip+Math.random()*(Jl-i-ip),o=Math.min(Jl,i+r);return{original:e,start:i,end:o}})}function Mx(a){return Math.min(1,Math.max(0,a))}function l3({text:a,className:e,scrollerRef:i,effect:r="matrix",progressPxRef:o}){const c=Pe.useRef(null),u=Pe.useRef(Sx(a)),d=r3();return Pe.useEffect(()=>{u.current=Sx(a)},[a]),Pe.useEffect(()=>{if(d)return;const m=c.current;if(!m)return;let h=0,g=!0,_=-1;const v=()=>{const b=r==="fadeout"?nm:Jl,C=o==null?void 0:o.current;let y;if(C!=null&&Number.isFinite(C))y=Math.min(b,Math.max(0,C));else{const A=i.current;if(!A)return;const U=Math.max(0,-A.getBoundingClientRect().top);y=Math.min(b,Math.max(0,U-IS))}if(y===_&&_>=0)return;_=y;const S=u.current,I=m.querySelectorAll(".scroll-dissolve__glyph");let O=S.length>0;if(r==="fadeout"){const A=Mx(y/nm),U=String(1-A);O=A>=1;for(let L=0;L<S.length;L++){const B=S[L],E=I[L];E&&(E.textContent=B.original===" "?" ":B.original,E.style.transform="translateY(0)",E.style.opacity=U,E.style.visibility=O?"hidden":"visible")}m.style.opacity="1",m.style.visibility=O?"hidden":"visible",m.style.display=O?"none":"block";return}for(let A=0;A<S.length;A++){const U=S[A],L=I[A];if(!L)continue;const B=Math.max(.001,U.end-U.start),E=Mx((y-U.start)/B);if(E<1&&(O=!1),E<=0){L.textContent=U.original===" "?" ":U.original,L.style.transform="translateY(0)",L.style.opacity="1",L.style.visibility="visible";continue}if(E>=1){L.textContent=U.original===" "?" ":U.original,L.style.transform=`translateY(${-xx}px)`,L.style.opacity="0",L.style.visibility="hidden";continue}L.textContent=o3(),L.style.transform=`translateY(${-E*xx}px)`,L.style.opacity=String(1-E),L.style.visibility="visible"}m.style.opacity="1",m.style.visibility=O?"hidden":"visible",m.style.display=O?"none":"block"},x=()=>{g&&(v(),h=requestAnimationFrame(x))};return h=requestAnimationFrame(x),()=>{g=!1,cancelAnimationFrame(h)}},[d,i,a,r,o]),d?D.jsx("p",{className:e,"aria-label":a,children:a}):D.jsx("p",{ref:c,className:["scroll-dissolve",e].filter(Boolean).join(" "),"aria-label":a,children:Array.from(a).map((m,h)=>D.jsx("span",{className:"scroll-dissolve__glyph","aria-hidden":!0,children:m===" "?" ":m},`${h}-${m}`))})}const c3="Enter the agentic economy →",Zl=up.verbs.map((a,e)=>{const i=[{top:"#c8f5a8",mid:"#0a1410",bot:"#1a3d2e"},{top:"#9ee089",mid:"#060e18",bot:"#1e3a52"},{top:"#f0e6a0",mid:"#0c1008",bot:"#2a3820"},{top:"#7fd9a8",mid:"#080810",bot:"#243048"}];return{verb:a.verb,description:a.description,mood:i[e]??i[0]}}),gn=Zl.length,ma=2.95,ir=6.9,Yo=32,Mm=4,ym=5,ef=2.05,u3=1,f3=520,BS=ma*.55,FS=.28,zS=.35,yx=FS+zS,ap=.85,Ex=300,d3=35,bx=d3/60*1e3,h3=.1;function HS(a){return a<520?{mode:"mobile",canvasAspect:1280/320,fontRefH:320,fontPx:112,planeBaseW:4.55,frustumFill:.9}:a<900?{mode:"tablet",canvasAspect:1600/360,fontRefH:360,fontPx:132,planeBaseW:5.25,frustumFill:.94}:{mode:"desktop",canvasAspect:1920/420,fontRefH:420,fontPx:152,planeBaseW:6.1,frustumFill:.96}}const sp=4096,Tx=1.15;function p3(a,e){const i=window.devicePixelRatio||1,r=e<520?2.5:e<900?2.75:3;return Math.min(Math.max(a*1.35,Math.min(i,r)*1.25),3.5)}function m3(){const a=-(gn-1)*ma,e=-.1*ma,r=a+ir+e-BS,o=a+.05;return Math.max(.5,r-o)}function g3(a,e,i){const{w:r,h:o}=im(a,e,i),c=df(a,e),u=m3(),d=a/Math.max(1,e),m=Yo*Math.PI/180,h=2*u*Math.tan(m/2),g=h*d;return{w:r*c/Math.max(1e-6,g)*a,h:o*c/Math.max(1e-6,h)*e}}const _3=1.35,v3=.72,x3=.62,S3=.2,M3=14,y3=.42,E3=128,b3=12,T3=.002,A3=.0011,Ax=.12,R3=.88,GS=4,C3=32,w3=40,Rx=GS-1,D3=-10,Cx=28,L3={dir:"/intro-frames",w:960,h:540},N3={dir:"/intro-frames-mobile",w:720,h:1280},U3=900,VS=12,$l=121,O3=1,P3=10;function wx(a){return a<U3?N3:L3}function Fu(){const a=window.devicePixelRatio||1,e=window.innerWidth<900,i=typeof window.matchMedia=="function"&&window.matchMedia("(pointer: coarse)").matches;return Math.min(a,e||i?1.5:2)}const tf=($l-1)/VS,kS=[0,2,4,6,8,tf],I3=[{in:2,out:2.2},{in:1.5,out:2.4},{in:2.3,out:1.7},{in:1.8,out:2.1},{in:2.1,out:2.6}];function B3(a,e){const i=O3+e;return`${a.dir}/frame_${String(i).padStart(3,"0")}.webp`}function F3(a){const e=$l-1,i=Ft.clamp(a,0,tf);return Ft.clamp(Math.round(i*VS),0,e)}function z3(a,e){const i=I3[a]??{in:2,out:2},r=Ft.clamp(e,0,1);return r<.5?.5*Math.pow(2*r,i.in):1-.5*Math.pow(2*(1-r),i.out)}function Dx(a,e,i,r,o){const c=Math.max(1,gn-1),u=[0,e,e+1/c*i,e+2/c*i,r,Math.max(r+.001,o)],d=kS,m=u.length-1;if(a<=u[0])return d[0];if(a>=u[m])return d[m];let h=0;for(;h<m-1&&a>=u[h+1];)h+=1;const g=u[h],_=u[h+1],v=_>g?Ft.clamp((a-g)/(_-g),0,1):1;return Ft.lerp(d[h],d[h+1],z3(h,v))}function Lx(a,e){let i=!1;const r=new Array($l).fill(null);async function o(u){if(i)return;const d=new Image;d.decoding="async",d.src=B3(a,u),await new Promise(m=>{d.onload=()=>m(),d.onerror=()=>m()}),!(i||!d.complete||d.naturalWidth<1)&&(r[u]=d,e==null||e(u,d))}const c=(async()=>{await o(0);let u=1;for(;u<$l&&!i;){const d=[];for(let m=0;m<P3&&u<$l;m+=1,u+=1)d.push(o(u));await Promise.all(d)}})();return{frames:r,cancel:()=>{i=!0},ready:c}}const H3=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,G3=`
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
`,V3=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,k3=`
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
`,X3='"Reckk Heading", Georgia, "Times New Roman", serif',XS="Morpheum Wordmark",ac=`"${XS}"`,W3=[{t:0,c:"#e8ffe0"},{t:.45,c:"#c8f5a8"},{t:1,c:"#f0e6a0"}];async function Y3(){if(typeof document>"u"||!document.fonts)return!1;try{const a=new FontFace(XS,`url(${CR})`,{weight:"normal",style:"normal"});document.fonts.add(await a.load()),await document.fonts.load(`normal 152px ${ac}`);const e=document.fonts.check(`normal 152px ${ac}`);return e||console.error("[FlowIntro] Morpheum Wordmark failed to bind — title will not use Reckk fallback"),e}catch(a){return console.error("[FlowIntro] Morpheum Wordmark load failed",a),!1}}async function q3(){if(!(typeof document>"u"||!document.fonts))try{await Y3();const a=new FontFace("Reckk Title",`url(${RR})`,{weight:"normal",style:"normal"});document.fonts.add(await a.load());const e=new FontFace("Reckk Heading",`url(${AR})`,{weight:"normal",style:"normal"});document.fonts.add(await e.load()),await document.fonts.ready,await document.fonts.load(`normal 152px ${ac}`),await document.fonts.load('normal 64px "Reckk Heading"'),await document.fonts.load('normal 124px "Reckk Title"')}catch{}}const Qs="flow-intro-hide-chrome",j3=72,Z3=120,rp=80;function K3(a){return a<=j3}const Q3=280,op=.42,J3=.48;function Js(a){const e=document.documentElement,i=e.style.scrollBehavior;e.style.scrollBehavior="auto",window.scrollTo(0,Math.max(0,a)),e.style.scrollBehavior=i}function lp(){const a=document.getElementById("hero");if(!a)return;const e=a.getBoundingClientRect().top+window.scrollY;Js(e)}function Nx(){document.body.classList.remove(Qs),lp(),requestAnimationFrame(()=>{lp(),requestAnimationFrame(()=>{lp()})})}function Ca(a){const e=Ft.clamp(a,0,1);return e*e*e*(e*(e*6-15)+10)}function Io(a){const e=Math.max(1,a),i=Math.max(1,gn*e*u3),r=Math.max(1,f3);return{cardPx:i,titlePx:r,totalPx:i+r}}const $3=900,eC=1100,tC=1300,nC=1500,iC=6,aC=36,sC=50,rC=.5,oC=1024,lC=.75,ff=.8;function Em(a){return a>=oC}function cC(a){return Em(a)?$3:eC}function uC(a){return Em(a)?tC:nC}function WS(a){return Math.max(2,Math.max(1,a)*.004)}function fC(a,e){const{cardPx:i,titlePx:r}=Io(e),o=Math.max(1,gn-1),c=Ft.clamp(Math.round(a),0,gn-1);return r+c/o*i}function dC(a){return a.offsetTop}function hC(a,e,i){return a.offsetTop+fC(e,i)}function zu(){const a=document.getElementById("hero");return a?a.getBoundingClientRect().top+window.scrollY:null}function pC(a){const e=gn-1;return Ft.clamp(Math.round(a),0,e)}function cp(a,e,i,r){const o=WS(r);return a<e-o?{kind:"title"}:{kind:"card",idx:pC(i)}}function mC(a,e,i,r,o,c,u){if(o)return!1;const d=i/Math.max(1,gn-1),m=r+d*rC;return!(a>m||c<u*.5)}function df(a,e){const i=a/Math.max(1,e),r=Yo*Math.PI/180,o=2*ir*Math.tan(r/2),c=o*i,u=ef*Mm/ym,d=.992,m=d*o/ef,h=d*c/u;return Ft.clamp(Math.min(m,h),.52,2.35)}function YS(a,e,i=ff){const r=df(a,e);return(Em(a)?r*lC:r)*i}function gC(a,e){const i=window.devicePixelRatio||1,r=e<520?2.5:e<900?2.75:3;return Math.min(Math.max(a*1.25,Math.min(i,r)),3)}function _C(a,e,i=ff){const r=YS(a,e,i),o=ef*r,c=o*Mm/ym,u=a/Math.max(1,e),d=Yo*Math.PI/180,m=2*ir*Math.tan(d/2),h=m*u;return{w:c/Math.max(1e-6,h)*a,h:o/Math.max(1e-6,m)*e}}function im(a,e,i){const r=HS(a),o=df(a,e),c=a/Math.max(1,e),u=Yo*Math.PI/180,m=2*ir*Math.tan(u/2)*c,h=r.frustumFill*m/Math.max(1e-6,o),g=Math.min(r.planeBaseW,h);return{w:g,h:g*i}}function vC(a,e){const i=a/Math.max(1,gn-1),r=Math.min(Math.max(1,e*.38),Math.max(1,i*.34));return i<=r+.001?0:1-r/i}function Ux(a,e){const i=Math.min(Math.max(1,e*.55),Math.max(1,a*.52));return a<=i+.001?0:1-i/a}function Ox(a,e){const i=Ft.clamp(e,0,.999);if(a<i)return{titleOp:1,lastCardOp:0};const r=Math.max(1e-6,1-i),o=Ca(Ft.clamp((a-i)/r,0,1));return{titleOp:1-o,lastCardOp:o}}function xC(a,e,i,r=0){const o=gn-1;if(a<=0)return{opacity:e===0?1:0};if(a>=o-1e-5)return{opacity:e===o?1:0};const c=Math.floor(a);if(c>=o)return{opacity:e===o?1:0};if(e!==c&&e!==c+1)return{opacity:0};const u=a-c,d=Ft.clamp(i,0,.999);if(u<d)return{opacity:e===c?1:0};const m=Ca(Ft.clamp((u-d)/Math.max(1e-6,1-d),0,1));return e===c?{opacity:r>=.999?0:1}:{opacity:Math.max(m,r)}}function SC(a){return new sa({uniforms:{uMap:{value:a},uOpacity:{value:1},uWipe:{value:0},uWipeEdge:{value:h3}},vertexShader:V3,fragmentShader:k3,transparent:!0,depthWrite:!0,depthTest:!0,side:ps})}function MC(a,e){return a>1.5&&a<e-.5}function yC(a){return Ft.clamp(540/Math.max(a,340),.2,.55)}function EC(a,e,i){const r=[],o=M3;for(let c=0;c<o;c++){const u=Ft.clamp(a-c/Math.max(1,o-1)*y3,-.08,1.08),d=Math.sin(u*Math.PI*2*_3)*x3*i,m=Math.sin(u*Math.PI*2*v3)*S3,h=Ax+c/Math.max(1,o-1)*(R3-Ax),g=e-h;r.push(new te(d,m,g))}return r}function bC(a,e,i,r){const o=a.length;if(o<2)return new aa;const c=[],u=[],d=[],m=[],h=new te,g=new te,_=new te,v=new te(0,1,0),x=e+1;for(let C=0;C<o;C++){C===0?h.subVectors(a[1],a[0]).normalize():C===o-1?h.subVectors(a[o-1],a[o-2]).normalize():h.subVectors(a[C+1],a[C-1]).normalize(),g.copy(v).cross(h),g.lengthSq()<1e-8&&g.set(1,0,0).cross(h),g.normalize(),_.crossVectors(h,g).normalize();const y=o===1?0:C/(o-1),S=i+(r-i)*Math.pow(y,1.5);for(let I=0;I<=e;I++){const O=I/e*Math.PI*2,A=Math.cos(O),U=Math.sin(O),L=a[C];c.push(L.x+(A*g.x+U*_.x)*S,L.y+(A*g.y+U*_.y)*S,L.z+(A*g.z+U*_.z)*S),u.push(A*g.x+U*_.x,A*g.y+U*_.y,A*g.z+U*_.z),d.push(o===1?0:C/(o-1),I/e)}}for(let C=0;C<o-1;C++)for(let y=0;y<e;y++){const S=C*x+y,I=S+1,O=S+x,A=O+1;m.push(S,O,I,I,O,A)}const b=new aa;return b.setAttribute("position",new ia(c,3)),b.setAttribute("normal",new ia(u,3)),b.setAttribute("uv",new ia(d,2)),b.setIndex(m),b.computeBoundingSphere(),b}function Px(a,e,i,r,o,c,u,d=ff){const m={verb:a.verb,description:a.description},h=_C(r,o,d),g=gC(i,r);return e3(m,e,g,h.w,X3,c,u)}function Ix(a,e,i){const r=HS(e),o=p3(a,e),c=g3(e,i,1/r.canvasAspect);let u=Math.round(Math.max(256,c.w*o*Tx)),d=Math.round(Math.max(64,c.h*o*Tx));const m=Math.round(u/r.canvasAspect);if(Math.abs(m-d)/Math.max(d,1)>.08&&(d=Math.max(64,m)),u>sp||d>sp){const V=sp/Math.max(u,d);u=Math.max(256,Math.round(u*V)),d=Math.max(64,Math.round(d*V))}const h=document.createElement("canvas");h.width=u,h.height=d;const g=h.getContext("2d");g.clearRect(0,0,u,d);const _="Morpheum",v=d/o;let x=r.fontPx*(v/r.fontRefH);g.textAlign="left",g.textBaseline="alphabetic";const b=()=>{g.font=`normal ${x*o}px ${ac}`};b();const C=V=>{g.font=`normal ${V*o}px ${ac}`;const H=g.measureText(_),Y=Math.abs(H.actualBoundingBoxLeft??0),he=Math.abs(H.actualBoundingBoxRight??H.width),ue=Math.abs(H.actualBoundingBoxAscent??V*o*.8),X=Math.abs(H.actualBoundingBoxDescent??V*o*.25);return{left:Y,right:he,width:Y+he,ascent:ue,descent:X}},y=Math.max(1.25,1.85*o)*2,S=64*o+y,I=40*o+y,O=V=>{const H=C(V);return H.width+S*2<=u&&H.ascent+H.descent+I*2<=d},A=x+24;for(;!O(x)&&x>48;)x-=2;for(;O(x+2)&&x<A;)x+=2;b();const U=C(x),L=(u-U.width)/2+U.left,B=d/2+(U.ascent-U.descent)/2,E=g.createLinearGradient(L-U.left,B-U.ascent,L+U.right,B+U.descent);W3.forEach(V=>E.addColorStop(V.t,V.c)),g.lineJoin="round",g.miterLimit=2,g.lineWidth=Math.max(1.25,1.85*o),g.strokeStyle="rgba(8,12,10,0.22)",g.shadowColor="rgba(10, 14, 23, 0.55)",g.shadowBlur=Math.max(10,16*o),g.shadowOffsetX=0,g.shadowOffsetY=Math.max(1,2*o),g.strokeText(_,L,B),g.fillStyle=E,g.fillText(_,L,B),g.shadowColor="transparent",g.shadowBlur=0,g.shadowOffsetY=0;const N=new _m(h);return N.colorSpace=fi,N.minFilter=wn,N.magFilter=wn,N.generateMipmaps=!1,N}function Bx(a,e){a.generateMipmaps=!1,a.minFilter=wn,a.magFilter=wn,a.wrapS=_a,a.wrapT=_a;const i=e.capabilities.getMaxAnisotropy();a.anisotropy=Math.min(16,i),a.needsUpdate=!0}function TC({cardAlpha:a=.8,modalChassisAlpha:e=1,cardSize:i=ff,skipAnimationSpeed:r=1,subtitleFadeEffect:o="matrix",enterSoundSrc:c}){const u=Pe.useRef(null),d=Pe.useRef(null),m=Pe.useRef(null),h=Pe.useRef(null),g=Pe.useRef(null),_=Pe.useRef(!1),v=Pe.useRef(!1),x=Pe.useRef(null),b=Pe.useRef(null),C=Pe.useRef(a);C.current=Math.min(1,Math.max(0,a));const y=Pe.useRef(e);y.current=Math.min(1,Math.max(0,e));const S=Pe.useRef(i);S.current=Math.max(.1,i);const I=Pe.useRef(r);I.current=Math.max(.1,r);const O=Pe.useRef(c);O.current=c;const A=Pe.useRef(null),U=Pe.useRef(()=>{});Pe.useEffect(()=>{if(!c){A.current=null;return}const E=new Audio(c);return E.preload="auto",A.current=E,()=>{E.pause(),A.current===E&&(A.current=null)}},[c]);const L=Pe.useCallback(()=>{if(!O.current)return;const E=A.current;if(E)try{E.currentTime=0,E.play().catch(()=>{})}catch{}},[]);U.current=L;const B=Pe.useCallback(()=>{var H;if(_.current)return;_.current=!0,v.current=!1,(H=x.current)==null||H.call(x),L();const E=()=>{const Y=d.current;Y==null||Y.classList.add("flow-intro__sticky--exit"),window.setTimeout(()=>{Nx(),window.setTimeout(()=>{_.current=!1},100)},Q3)};if(window.matchMedia("(prefers-reduced-motion: reduce)").matches||!b.current){E();return}b.current()||E()},[L]);return Pe.useLayoutEffect(()=>{const E=window.matchMedia("(prefers-reduced-motion: reduce)").matches,N=window.location.hash.replace(/^#/,"");return E||N!==""&&N!=="flow"&&N!=="hero"||document.body.classList.add(Qs),()=>{document.body.classList.remove(Qs)}},[]),Pe.useEffect(()=>{const E=N=>{if(N.key!=="Escape")return;const V=document.getElementById("hero");V&&V.getBoundingClientRect().top>8&&(N.preventDefault(),B())};return window.addEventListener("keydown",E),()=>window.removeEventListener("keydown",E)},[B]),Pe.useEffect(()=>{const E=window.location.hash.replace(/^#/,"");E&&E!=="flow"&&E!=="hero"&&requestAnimationFrame(()=>{var N;(N=document.getElementById(E))==null||N.scrollIntoView({block:"start"})})},[]),Pe.useEffect(()=>{const E=m.current,N=u.current;if(!E||!N)return;const V=E,H=N;let Y=!1;if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){document.body.classList.remove(Qs);const X=h.current;X&&(X.style.height="0px");return}let ue;return(async()=>{if(await q3(),Y)return;const X=Fu(),z=Math.max(320,V.clientWidth||window.innerWidth),G=Math.max(1,V.clientHeight||window.innerHeight),J=[],fe=[],xe=[],P=new Float64Array(gn).fill(-1);Zl.forEach((ee,Te)=>{const ke=gn-1-Te,$e=Zl[ke],dt=Px($e,ke,X,z,G,C.current,y.current,S.current);xe.push(dt);const at=SC(dt);J.push(at);const Mt=ef,hn=Mt*Mm/ym,vt=new zi(new tr(hn,Mt),at);vt.position.set(0,0,-Te*ma),vt.renderOrder=Te,fe.push(vt)});const K=Ix(X,z,G),ye=new $u({map:K,transparent:!0,opacity:0,depthWrite:!1,depthTest:!1,side:Da}),Ce=K.image.height/K.image.width,{w:ze,h:se}=im(z,G,Ce),Se=new zi(new tr(ze,se),ye);Se.position.set(0,0,-(gn-1)*ma+.05),Se.renderOrder=w3;const Ee=new ob,Ue=new ta(Yo,1,.08,120),st=typeof window.matchMedia=="function"&&window.matchMedia("(pointer: coarse)").matches,He=new TR({antialias:!st,alpha:!1,powerPreference:"high-performance"});He.setPixelRatio(Fu()),He.outputColorSpace=fi,He.sortObjects=!0,V.appendChild(He.domElement),Bx(K,He);const bt=new Yl;fe.forEach(ee=>bt.add(ee)),bt.add(Se),Ee.add(bt);const ht=new sa({uniforms:{uStrength:{value:0}},vertexShader:H3,fragmentShader:G3,transparent:!0,toneMapped:!1,depthTest:!1,depthWrite:!1,blending:fp}),ot=new zi(new aa,ht);ot.frustumCulled=!1,ot.renderOrder=Rx,ot.visible=!1,Ee.add(ot);let lt=null,_t=null,It=null,sn=-1,Jt=wx(window.innerWidth),Zt=Jt.w,Lt=Jt.h;const $t=document.createElement("canvas");$t.width=Zt,$t.height=Lt;const j=$t.getContext("2d",{alpha:!1,desynchronized:!0});function qt(ee,Te){Y||!j||!lt||ee===0&&sn<0&&(j.drawImage(Te,0,0,Zt,Lt),lt.needsUpdate=!0,sn=0)}let Tt=Lx(Jt,qt);function F(ee){const Te=Tt.frames[ee];if(Te)return Te;for(let ke=1;ke<12;ke+=1){const $e=Tt.frames[ee-ke];if($e)return $e;const dt=Tt.frames[ee+ke];if(dt)return dt}return null}function T(ee){if(!j||!lt)return;const Te=F3(ee);if(Te===sn)return;const ke=F(Te);ke&&(j.drawImage(ke,0,0,Zt,Lt),lt.needsUpdate=!0,sn=Te)}function $(ee){const Te=wx(ee);Te.dir!==Jt.dir&&(Tt.cancel(),Jt=Te,Zt=Te.w,Lt=Te.h,$t.width=Zt,$t.height=Lt,sn=-1,j&&(j.fillStyle="#000",j.fillRect(0,0,Zt,Lt),lt&&(lt.needsUpdate=!0)),Tt=Lx(Jt,qt),oe())}j&&(j.fillStyle="#000",j.fillRect(0,0,Zt,Lt),lt=new _m($t),lt.colorSpace=fi,lt.minFilter=wn,lt.magFilter=wn,lt.generateMipmaps=!1,_t=new $u({map:lt,depthTest:!1,depthWrite:!1,toneMapped:!1}),It=new zi(new tr(1,1),_t),It.frustumCulled=!1,It.renderOrder=D3,It.position.set(0,0,-Cx),Ue.add(It),Ee.add(Ue),T(kS[0]));function oe(){if(!It)return;const ee=Cx,Te=Yo*Math.PI/180,ke=2*Math.tan(Te/2)*ee,$e=ke*Ue.aspect,dt=Zt/Lt;$e/Math.max(1e-6,ke)>dt?It.scale.set($e,$e/dt,1):It.scale.set(ke*dt,ke,1)}const me=-(gn-1)*ma,we=-.1*ma,Ie=me+ir+we,pe=Ie-BS;function ge(ee){const Te=gn-1,ke=Ft.clamp(ee,0,Te);return-(Te-ke)*ma+ir+we}let Re=Math.max(1,V.clientHeight||window.innerHeight),Ge=!1,Be=window.innerWidth,Oe=!1,Je=!1;function nt(){return Math.max(1,window.innerHeight)}function ut(ee){return Oe?ee>Z3&&(Oe=!1):K3(ee)&&(Oe=!0),Oe}function q(){const ee=h.current;if(!ee)return;const{totalPx:Te}=Io(Re),ke=Re*yx,dt=`${Math.max(Math.ceil(Te+ke+Re*ap+32-Ex),Math.ceil(Re*1.08))}px`;ee.style.height!==dt&&(ee.style.height=dt)}function De(){var hn;const ee=Math.max(320,V.clientWidth||window.innerWidth),Te=Math.max(1,V.clientHeight||Re),ke=Fu();xe.forEach((vt,kt)=>{vt.dispose();const Dn=gn-1-kt,Pn=Px(Zl[Dn],Dn,ke,ee,Te,C.current,y.current,S.current);xe[kt]=Pn,J[kt].uniforms.uMap.value=Pn}),(hn=ye.map)==null||hn.dispose();const $e=Ix(ke,ee,Te);ye.map=$e,ye.needsUpdate=!0,Bx($e,He);const dt=$e.image.height/$e.image.width,{w:at,h:Mt}=im(ee,Te,dt);Se.geometry.dispose(),Se.geometry=new tr(at,Mt)}function _e(){const ee=V.clientWidth,Te=V.clientHeight;ee<2||Te<2||($(window.innerWidth),Ue.aspect=ee/Te,Ue.updateProjectionMatrix(),He.setPixelRatio(Fu()),He.setSize(ee,Te,!1),oe(),De(),Ge||q())}function Le(){Ge=!1,Re=nt(),Be=window.innerWidth,_e()}_e(),requestAnimationFrame(()=>{Y||De()});let Ne=null;function Ae(){if(Y||Ne)return!1;const ee=Math.max(1,Re),{cardPx:Te,titlePx:ke,totalPx:$e}=Io(ee),dt=H.getBoundingClientRect(),at=Math.max(1,H.offsetHeight-ee),Mt=Ft.clamp(-dt.top,0,at),hn=ee*yx,vt=$e+hn,kt=Dx(Mt,ke,Te,$e,vt),Dn=Math.max(.08,tf-kt),Pn=zu()??H.offsetTop+at,en=Math.max(.1,I.current),Si=o==="fadeout"?nm:Jl,oi=Math.min(Si,Math.max(0,Mt-IS)),Mi=Math.max(1,ke),ki=Mt<Mi,vs=ki?Ft.clamp(Mt/Mi,0,1):1,xs=ki?Ox(vs,Ux(Mi,ee)).titleOp:0;Ne={startMs:performance.now(),startBgSec:kt,startScrollY:window.scrollY,endScrollY:Pn,durationMs:Dn/en*1e3,camZ:Ue.position.z,dissolveStartProg:oi,dissolveMaxPx:Si,titleStartOp:xs},g.current=oi;const Kn=d.current;return Kn&&(Kn.style.setProperty("--intro-ui-opacity","1"),Kn.style.setProperty("--intro-tagline-opacity","1"),Kn.style.setProperty("--intro-brand-opacity","0"),Kn.style.setProperty("--intro-skip-opacity","0"),Kn.classList.contains("flow-intro__sticky--exit")&&(Kn.style.transition="none",Kn.classList.remove("flow-intro__sticky--exit"),Kn.offsetWidth,Kn.style.transition="")),!0}b.current=Ae;let Ke=0;function qe(){var $o,uc;if(Y)return;if(Ke=requestAnimationFrame(qe),Ne){const xt=Ne,Wn=Math.min(1,(performance.now()-xt.startMs)/xt.durationMs),Wi=Ca(Wn);T(Ft.lerp(xt.startBgSec,tf,Wn)),oe(),Ue.position.set(0,0,xt.camZ),Ue.lookAt(0,0,xt.camZ-ir),fe.forEach((mi,Yn)=>{const la=J[Yn];la.uniforms.uOpacity.value=0,la.uniforms.uWipe.value=1,mi.visible=!1}),ot.visible=!1,ht.uniforms.uStrength.value=0,Js(Ft.lerp(xt.startScrollY,xt.endScrollY,Wi));{const mi=Ca(Math.min(1,Wn/Math.max(1e-6,J3)));g.current=xt.dissolveStartProg+(xt.dissolveMaxPx-xt.dissolveStartProg)*mi;const Yn=xt.titleStartOp*(1-mi);ye.opacity=Yn,Se.visible=Yn>.003}let Ln=0;Wn>op&&(Ln=Ca((Wn-op)/Math.max(1e-6,1-op))),d.current&&(d.current.style.setProperty("--intro-ui-opacity","1"),d.current.style.setProperty("--intro-tagline-opacity","1"),d.current.style.setProperty("--intro-brand-opacity","0"),d.current.style.setProperty("--intro-skip-opacity","0")),He.domElement.style.opacity=String(1-Ln),document.body.classList.add(Qs),He.render(Ee,Ue),Wn>=1&&(Ne=null,g.current=null,Nx(),window.setTimeout(()=>{_.current=!1},100));return}const ee=nt(),Te=document.getElementById("hero"),ke=Te?Te.getBoundingClientRect().top:0,$e=Te?ut(ke):!0,{totalPx:dt}=Io(Re),at=H.getBoundingClientRect(),Mt=Math.max(1,H.offsetHeight-Re),hn=Ft.clamp(-at.top,0,Mt);!$e&&hn<=dt?(Ge=!1,Math.abs(ee-Re)>rp&&(Re=ee,q())):Ge=!0;const kt=Re,{cardPx:Dn,titlePx:Pn,totalPx:en}=Io(kt),Si=Math.max(1,H.offsetHeight-kt),oi=Ft.clamp(-at.top,0,Si),Mi=Math.min(oi,en),ki=Math.max(1,en),vs=kt*FS,xs=kt*zS,Kn=vs+xs,Fa=oi-en,wi=Ca(Ft.clamp(Fa/Math.max(1,vs),0,1)),Ir=Ca(Ft.clamp((Fa-vs)/Math.max(1,xs),0,1)),za=V.clientWidth,oa=V.clientHeight,Ha=Math.max(1,Pn),Xi=Mi<Ha,Ko=Xi?Ft.clamp(Mi/Ha,0,1):0,Br=Math.max(0,Mi-Ha),Fr=Math.max(1,Dn),In=Ft.clamp(Br/Fr,0,1)*(gn-1),Ga=df(za,oa),zr=YS(za,oa,S.current),Va=Xi?Ft.lerp(pe,Ie,Ko):ge(In),oc=vC(Dn,kt),Qo=Ux(Ha,kt),Hr=Ox(Ko,Qo),Ss=gn-1,Gr=en+Kn;T(Dx(oi,Ha,Dn,en,Gr)),oe(),Ue.position.set(0,0,Va),Ue.lookAt(0,0,Va-ir);const or=en+Kn;let Vr=0;if(Si>or&&oi>=or){const xt=Math.max(1,Si-or);Vr=Ca(Ft.clamp((oi-or)/xt,0,1))}const pf=Math.max(1,Kn+kt*ap),mf=oi<=ki?Ft.clamp(oi/ki,0,1):1+Ft.clamp(Fa/pf,0,1)*.45;if(MC(oi,Si)){const xt=EC(mf,Va,yC(za)),Wi=new Sb(xt,!1,"centripetal").getSpacedPoints(E3);if(Wi.length>=2){const Ln=bC(Wi,b3,T3,A3),mi=ot.geometry.getAttribute("position"),Yn=Ln.getAttribute("position");if(mi&&Yn&&mi.count===Yn.count&&(($o=ot.geometry.getIndex())==null?void 0:$o.count)===((uc=Ln.getIndex())==null?void 0:uc.count)&&mi&&Yn){mi.array.set(Yn.array),mi.needsUpdate=!0;const ka=ot.geometry.getAttribute("normal"),lr=Ln.getAttribute("normal");ka&&lr&&(ka.array.set(lr.array),ka.needsUpdate=!0);const Xa=ot.geometry.getAttribute("uv"),fc=Ln.getAttribute("uv");Xa&&fc&&(Xa.array.set(fc.array),Xa.needsUpdate=!0),Ln.dispose()}else ot.geometry.dispose(),ot.geometry=Ln;ot.visible=!0,ot.renderOrder=Rx,ht.uniforms.uStrength.value=.36*(1-Vr*.92)}else ot.visible=!1,ht.uniforms.uStrength.value=0}else ot.visible=!1,ht.uniforms.uStrength.value=0;const cc=Math.floor((gn-1)/2),Jo=performance.now(),gf=Ft.clamp(oc,0,.999);for(let xt=0;xt<gn;xt++){if(Xi||In<=xt+1e-5||In<xt+gf){P[xt]=-1;continue}P[xt]<0&&(In>=xt+1-1e-5?P[xt]=Jo-bx:P[xt]=Jo)}if(fe.forEach((xt,Wn)=>{const Wi=-Wn*ma,Ln=gn-1-Wn,mi=P[Ln];let Yn=mi<0?0:Ca(Ft.clamp((Jo-mi)/bx,0,1));!Xi&&Ln===gn-1&&Ir>0&&(Yn=Math.max(Yn,Ir));let{opacity:la}=xC(In,Ln,oc,Yn);Xi&&Wn===Ss&&(la*=Hr.lastCardOp,Yn=0);let ka=1,lr=0;!Xi&&Ln===gn-1&&la>.02&&wi>0&&(ka=1-.28*wi,lr=-ma*.32*wi),xt.position.set(0,0,Wi+lr),xt.scale.setScalar(zr*ka);const Xa=J[Wn];Xa.uniforms.uOpacity.value=la,Xa.uniforms.uWipe.value=Yn,Xa.depthWrite=la>=.995&&Yn<.02,xt.visible=la>.003&&Yn<.997,xt.renderOrder=Wn<=cc?GS+Wn:C3+(Wn-cc-1)}),Se.position.set(0,0,-Ss*ma+.05),Se.scale.setScalar(Ga),ye.opacity=Xi?Hr.titleOp:0,Se.visible=ye.opacity>.003,!_.current){v.current?Je=!1:$e?Je=!0:Je&&oi<en-kt*.25&&(Je=!1),document.body.classList.toggle(Qs,!Je);const xt=d.current;xt!=null&&xt.classList.contains("flow-intro__sticky--exit")&&!$e&&(xt.style.transition="none",xt.classList.remove("flow-intro__sticky--exit"),xt.offsetWidth,xt.style.transition="")}if(!Ge){const xt=Kn+kt*ap+32-Ex,Wn=Math.max(Math.ceil(en+xt),Math.ceil(kt*1.08)),Wi=h.current;if(Wi){const Ln=`${Wn}px`;Wi.style.height!==Ln&&(Wi.style.height=Ln)}}const _f=1-Vr*.96;d.current&&(d.current.style.setProperty("--intro-ui-opacity",String(_f)),d.current.style.setProperty("--intro-tagline-opacity","1"),d.current.style.setProperty("--intro-brand-opacity","1"),d.current.style.setProperty("--intro-skip-opacity","1"));const vf=String(1-Vr);He.domElement.style.opacity=vf,He.render(Ee,Ue)}qe();let Ht=0,Nt=0,Bt=!1,Mn="page",hi=!1,Gi=!1,$n=!1,pi=0,ei=0,dn=0,Sn=!1,yn=!1,xa=0,rr=window.scrollY,Sa={kind:"title"};const Ba=8;function ra(){Nt&&(window.clearTimeout(Nt),Nt=0)}function Vi(){Ht&&(cancelAnimationFrame(Ht),Ht=0),Bt=!1,Mn="page",v.current=!1}function En(){Vi(),ra(),hi=!1}x.current=En;function kn(){var en;const ee=Math.max(1,Re),{cardPx:Te,titlePx:ke,totalPx:$e}=Io(ee),dt=H.getBoundingClientRect(),at=Math.max(1,H.offsetHeight-ee),Mt=Ft.clamp(-dt.top,0,at),hn=document.getElementById("hero"),vt=hn?ut(hn.getBoundingClientRect().top):!0,kt=((en=d.current)==null?void 0:en.getBoundingClientRect().bottom)??ee,Pn=Math.max(0,Math.min(Mt,$e)-ke)/Math.max(1,Te)*(gn-1);return{innerH:ee,cardPx:Te,titlePx:ke,totalPx:$e,scrolledPx:Mt,landed:vt,stickyBottom:kt,depthT:Pn}}function bn(ee=kn()){return mC(ee.scrolledPx,ee.titlePx,ee.cardPx,ee.totalPx,ee.landed,ee.stickyBottom,ee.innerH)}function Ma(){return Bt||bn()}function Tn(ee){let Te=ee.deltaY;return ee.deltaMode===1?Te*=16:ee.deltaMode===2&&(Te*=window.innerHeight),Te}function _s(){ra(),hi=!0,Nt=window.setTimeout(()=>{Nt=0,hi=!1},sC)}function R(ee,Te){return ee.kind==="title"?dC(H):ee.kind==="card"?hC(H,ee.idx,Te.innerH):zu()}function Z(ee){if(Y||_.current||Bt)return;const Te=kn(),ke=ee.kind==="hero";if(!ke&&!bn(Te))return;const $e=R(ee,Te);if($e==null)return;const dt=window.scrollY,at=$e-dt,Mt=Sa;if(Sa=ee.kind==="hero"?{kind:"card",idx:gn-1}:ee,ee.kind==="card"&&ee.idx===0&&Mt.kind==="title"&&U.current(),Math.abs(at)<WS(Te.innerH)){Js($e),_s();return}Bt=!0,Mn=ke?"exit":"page",v.current=ke,hi=!0;const hn=ke?uC(window.innerWidth):cC(window.innerWidth),vt=performance.now(),kt=Pn=>{if(Js(Pn),Bt=!1,Mn="page",Ht=0,!ke){v.current=!1,_s();return}v.current=!1,requestAnimationFrame(()=>{const en=zu();en!=null&&Js(en),requestAnimationFrame(()=>{const Si=zu();Si!=null&&Js(Si),_s()})})},Dn=Pn=>{if(Y||_.current){Bt=!1,Mn="page",Ht=0,v.current=!1;return}if(Mn==="page"&&!bn(kn())){Vi(),hi=!1;return}const en=Math.min(1,(Pn-vt)/hn);Js(dt+at*Ca(en)),en<1?Ht=requestAnimationFrame(Dn):kt($e)};Ht=requestAnimationFrame(Dn)}function le(ee,Te){const ke=gn-1,$e=Te>0?1:-1,dt=cp(ee.scrolledPx,ee.titlePx,ee.depthT,ee.innerH);if(dt.kind==="title")return $e<0?null:{kind:"card",idx:0};const at=dt.idx+$e;return at<0?{kind:"title"}:at>ke?$e>0?{kind:"hero"}:{kind:"card",idx:ke}:{kind:"card",idx:at}}function ne(ee){const Te=kn();if(!bn(Te)&&!(Bt&&Mn==="exit"))return!1;const ke=le(Te,ee);return ke===null?!1:(Z(ke),!0)}function ie(ee,Te){return le(ee,Te)===null}function Ve(ee){if(_.current||Ne){ee.preventDefault();return}if(!Ma())return;const Te=Tn(ee),ke=kn();if(!bn(ke)&&Mn!=="exit")return;const $e=le(ke,Te>0?1:-1);if($e===null){(Bt||hi)&&En();return}if(Bt||hi){ee.preventDefault();return}if(Math.abs(Te)<iC){ee.preventDefault();return}ee.preventDefault(),Z($e)}function Ye(ee){var Te;if(!(_.current||Ne)&&(ei=((Te=ee.touches[0])==null?void 0:Te.clientY)??ei,pi=ei,dn=window.scrollY,Gi=!1,$n=Bt||bn(),$n&&!Bt)){const ke=kn();Sa=cp(ke.scrolledPx,ke.titlePx,ke.depthT,ke.innerH)}}function Fe(ee){var ke;if(_.current||Ne){ee.preventDefault();return}const Te=((ke=ee.touches[0])==null?void 0:ke.clientY)??pi;if(!Gi){if(!$n&&(Bt||bn())&&($n=!0,ei=Te,pi=Te,dn=window.scrollY),!$n)return;const $e=ei-Te;if(Math.abs($e)<Ba){pi=Te;return}const dt=$e>0?1:-1,at=kn();if(!Bt&&!bn(at)){$n=!1,pi=Te;return}if(ie(at,dt)){$n=!1,En(),pi=Te;return}Bt&&En(),Gi=!0,$n=!1,dn=window.scrollY,Sa=cp(at.scrolledPx,at.titlePx,at.depthT,at.innerH)}ee.preventDefault(),pi=Te,Bt||Js(dn)}function je(){if(_.current||Ne){Gi=!1,$n=!1;return}const ee=Gi,Te=$n,ke=ei-pi;if(Gi=!1,$n=!1,Bt)return;if(!ee){Te&&En();return}if(!bn())return;if(Math.abs(ke)<aC){Z(Sa);return}const $e=ke>0?1:-1,dt=kn();if(ie(dt,$e)){En();return}ne($e)}function Ze(ee){ee.pointerType!=="touch"&&ee.button===0&&(Sn=!0,yn=!1,xa=window.scrollY,bn()&&Vi())}function it(ee){if(ee.pointerType==="touch"||!Sn)return;if(Sn=!1,!yn||!bn()){yn=!1;return}const Te=kn(),ke=window.scrollY>=xa?1:-1,$e=le(Te,ke);if(yn=!1,$e===null){En();return}Z($e)}function pt(ee){ee.pointerType!=="touch"&&(Sn=!1,yn=!1)}function et(ee){ee.button===0&&(_.current||Ne||yn||Bt||hi||bn()&&(ee.preventDefault(),ne(1)))}function Ut(ee){var dt;const Te=ee.target;if((dt=Te==null?void 0:Te.closest)!=null&&dt.call(Te,"input, textarea, select, [contenteditable=true]"))return;if(_.current||Ne){(ee.key==="ArrowDown"||ee.key==="ArrowRight"||ee.key==="ArrowUp"||ee.key==="ArrowLeft"||ee.key==="Enter"||ee.key===" ")&&ee.preventDefault();return}const ke=ee.key==="ArrowDown"||ee.key==="ArrowRight"||ee.key==="Enter"||ee.key===" ",$e=ee.key==="ArrowUp"||ee.key==="ArrowLeft";if(!(!ke&&!$e)){if(Bt||hi){ee.preventDefault();return}bn()&&(ee.preventDefault(),ne(ke?1:-1))}}function cn(){const ee=window.scrollY,Te=ee-rr;rr=ee,Sn&&Math.abs(Te)>.5&&(yn=!0),Bt&&Mn==="page"&&!bn()&&En()}function Kt(){En(),Le()}function Gt(){En();const ee=nt(),Te=window.innerWidth,ke=Math.abs(ee-Re),$e=Math.abs(Te-Be)>1;if(Ge){ke>rp||$e?Le():_e();return}Re=ee,Be=Te,_e()}function Vt(){En();const ee=nt();Math.abs(ee-Re)<=rp||(Ge?Le():(Re=ee,Be=window.innerWidth,_e()))}window.addEventListener("wheel",Ve,{passive:!1}),window.addEventListener("touchstart",Ye,{passive:!0}),window.addEventListener("touchmove",Fe,{passive:!1}),window.addEventListener("touchend",je,{passive:!0}),window.addEventListener("touchcancel",je,{passive:!0}),window.addEventListener("pointerdown",Ze,{passive:!0}),window.addEventListener("pointerup",it,{passive:!0}),window.addEventListener("pointercancel",pt,{passive:!0}),window.addEventListener("scroll",cn,{passive:!0}),window.addEventListener("resize",Gt,{passive:!0}),window.addEventListener("orientationchange",Kt,{passive:!0}),V.addEventListener("click",et),window.addEventListener("keydown",Ut);const Xe=window.visualViewport;Xe&&Xe.addEventListener("resize",Vt);const Xn=new ResizeObserver(_e);Xn.observe(V),ue=()=>{var ee;En(),x.current=null,b.current=null,Ne=null,g.current=null,cancelAnimationFrame(Ke),document.body.classList.remove(Qs),window.removeEventListener("wheel",Ve),window.removeEventListener("touchstart",Ye),window.removeEventListener("touchmove",Fe),window.removeEventListener("touchend",je),window.removeEventListener("touchcancel",je),window.removeEventListener("pointerdown",Ze),window.removeEventListener("pointerup",it),window.removeEventListener("pointercancel",pt),window.removeEventListener("scroll",cn),window.removeEventListener("resize",Gt),window.removeEventListener("orientationchange",Kt),V.removeEventListener("click",et),window.removeEventListener("keydown",Ut),Xe&&Xe.removeEventListener("resize",Vt),Xn.disconnect(),J.forEach(Te=>{Te.dispose()}),xe.forEach(Te=>Te.dispose()),(ee=ye.map)==null||ee.dispose(),ye.dispose(),fe.forEach(Te=>Te.geometry.dispose()),Se.geometry.dispose(),ot.geometry.dispose(),ht.dispose(),Ee.remove(ot),It&&(Ue.remove(It),It.geometry.dispose()),_t==null||_t.dispose(),lt==null||lt.dispose(),Tt.cancel(),He.dispose(),V.contains(He.domElement)&&V.removeChild(He.domElement)},Y&&ue()})(),()=>{var X;Y=!0,(X=x.current)==null||X.call(x),x.current=null,b.current=null,document.body.classList.remove(Qs),ue==null||ue()}},[]),D.jsxs("section",{ref:u,id:"flow",className:"flow-intro","aria-label":"Morpheum — Discover, Copy, Supervise, Isolate",children:[D.jsxs("div",{ref:d,className:"flow-intro__sticky",children:[D.jsx("div",{ref:m,className:"flow-intro__canvas","aria-hidden":!0}),D.jsxs("div",{className:"flow-intro__top",children:[D.jsx("div",{className:"flow-intro__brand",children:D.jsx(Sm,{size:"sm",brandName:"Morpheum",className:"flow-intro__brand-mark"})}),D.jsxs("button",{type:"button",className:"flow-intro__skip",onClick:B,children:["Skip ",D.jsx("span",{className:"flow-intro__skip-key",children:"Esc"})]})]}),D.jsx("div",{className:"flow-intro__tagline-wrap",children:D.jsx(l3,{text:c3,className:"flow-intro__tagline",scrollerRef:u,effect:o,progressPxRef:g})}),D.jsx("div",{className:"flow-intro__sr","aria-live":"polite",children:Zl.map((E,N)=>D.jsxs("p",{children:["Step ",String(N+1).padStart(2,"0"),": ",E.verb,". ",E.description]},E.verb))})]}),D.jsx("div",{ref:h,className:"flow-intro__spacer","aria-hidden":!0})]})}const AC=280,RC=5/4,CC=3800,wC={discover:jl,copy:jR};function DC(){return typeof window<"u"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches}function LC({stepIndex:a,kind:e,className:i,width:r=AC}){const o=Pe.useRef(null),c=e??NS(a),u=Math.round(r*RC);return Pe.useEffect(()=>{const d=o.current;if(!d)return;let m=0,h;const g=()=>{const x=Math.min(window.devicePixelRatio||1,2),b=Math.round(r*x),C=Math.round(u*x);(d.width!==b||d.height!==C)&&(d.width=b,d.height=C);const y=d.getContext("2d");y&&$R(y,c,b,C,m)};g();const _=wC[c];_&&_>1&&!DC()&&(h=setInterval(()=>{m=(m+1)%_,g()},CC));const v=()=>g();return window.addEventListener("resize",v),()=>{window.removeEventListener("resize",v),h&&clearInterval(h)}},[c,r,u]),D.jsx("div",{className:["loop-step-sheet",i].filter(Boolean).join(" "),style:{width:r,height:u},children:D.jsx("canvas",{ref:o,className:"loop-step-sheet__canvas",style:{width:r,height:u},"aria-hidden":!0})})}const Fx=[{id:"want-eth",agent:"SharpeShark",timestamp:"2026-07-08T15:42:00.000Z",timeLabel:"07-08, 15:42:00",status:"want-to",statusLabel:"Want to",action:"Open ETH long · 1.2 ETH",showActions:!0},{id:"rejected-btc",agent:"NightOwl",timestamp:"2026-07-08T15:31:00.000Z",timeLabel:"07-08, 15:31:00",status:"rejected",statusLabel:"Rejected",action:"Open BTC short · 0.04 BTC"},{id:"close-btc-profit",agent:"SharpeShark",timestamp:"2026-07-08T15:25:00.000Z",timeLabel:"07-08, 15:25:00",status:"short",statusLabel:"Close Long",action:"BTCUSDT · 0.04 BTC · 2,465.12 USDT",pnl:{text:"+103.09",tone:"long"}},{id:"open-eth-long",agent:"FluxRunner",timestamp:"2026-07-08T14:10:00.000Z",timeLabel:"07-08, 14:10:00",status:"long",statusLabel:"Open Long",action:"ETHUSDT · 0.8 ETH · 2,560.00 USDT"},{id:"open-sol-short",agent:"NightOwl",timestamp:"2026-07-07T09:42:00.000Z",timeLabel:"07-07, 09:42:00",status:"short",statusLabel:"Open Short",action:"SOLUSDT · 12 SOL · 1,824.00 USDT"}];function NC(){return D.jsxs("aside",{className:"supervise-log","aria-label":"Agent activity log",children:[D.jsx("header",{className:"supervise-log__header",children:D.jsx("span",{className:"supervise-log__kicker",children:"Activity log"})}),D.jsx("ol",{className:"supervise-log__timeline",children:Fx.map((a,e)=>{const i=e===Fx.length-1,r=e===0;return D.jsxs("li",{className:"supervise-log__item",children:[D.jsxs("div",{className:"supervise-log__meta",children:[D.jsx("span",{className:"supervise-log__agent",children:a.agent}),D.jsx("time",{className:"supervise-log__time",dateTime:a.timestamp,children:a.timeLabel})]}),D.jsxs("div",{className:"supervise-log__track","aria-hidden":!0,children:[i?null:D.jsx("span",{className:"supervise-log__track-line"}),D.jsx("span",{className:["supervise-log__dot",r?"supervise-log__dot--latest":""].filter(Boolean).join(" ")})]}),D.jsxs("div",{className:"supervise-log__body",children:[D.jsx("span",{className:`supervise-log__badge supervise-log__badge--${a.status}`,children:a.statusLabel}),D.jsxs("p",{className:"supervise-log__action",children:[a.action,a.pnl?D.jsxs(D.Fragment,{children:[" · ",D.jsx("span",{className:`supervise-log__pnl supervise-log__pnl--${a.pnl.tone}`,children:a.pnl.text})]}):null]}),a.showActions?D.jsxs("div",{className:"supervise-log__actions",children:[D.jsx("button",{type:"button",className:"supervise-log__btn supervise-log__btn--reject",children:"Reject"}),D.jsx("button",{type:"button",className:"supervise-log__btn supervise-log__btn--approve",children:"Approve"})]}):null]})]},a.id)})})]})}const UC=/^(action)$/i;function OC(a){return a.split(/(\s*[·/]\s*)/).map((i,r)=>UC.test(i.trim())?D.jsx("span",{className:"stat-chip__brand",children:i},r):D.jsx("span",{children:i},r))}function qS({label:a,status:e,live:i}){return D.jsxs("span",{className:`stat-chip ${i?"stat-chip--live":""}`,children:[D.jsx("span",{className:"stat-chip__label",children:a}),D.jsx("span",{className:"stat-chip__sep",children:"·"}),D.jsx("span",{className:"stat-chip__status",children:OC(e)})]})}var PC=Zx();function IC(a,e,i=!1){a.style.fontFamily=e.fontFamily,a.style.fontSize=e.fontSize,a.style.fontWeight=e.fontWeight,a.style.letterSpacing=e.letterSpacing,a.style.lineHeight=e.lineHeight,a.style.textTransform=e.textTransform,a.style.whiteSpace=i?"nowrap":"normal",a.style.wordBreak=i?"normal":"break-word"}function BC(a,e,i,r){const o=getComputedStyle(i),c=document.createElement("div");c.style.position="fixed",c.style.left="-99999px",c.style.top="0",c.style.visibility="hidden",c.style.pointerEvents="none",c.style.width=`${e}px`,IC(c,o,!r);const u=document.createTextNode(a);return c.appendChild(u),document.body.appendChild(c),{probe:c,textNode:u}}function zx(a,e,i,r=!0){if(!a)return{lines:[],blockHeight:0};if(e<=0)return{lines:[a],blockHeight:0};const{probe:o,textNode:c}=BC(a,e,i,r),u=o.offsetHeight;if(!r)return document.body.removeChild(o),{lines:[a],blockHeight:u};const d=document.createRange(),m=[];let h=0,g=0;for(let _=1;_<=a.length;_++){d.setStart(c,0),d.setEnd(c,_);const v=d.getClientRects().length;v>g&&g>0&&(m.push(a.slice(h,_-1)),h=_-1),g=v}return h<a.length&&m.push(a.slice(h)),document.body.removeChild(o),{lines:m.length>0?m:[a],blockHeight:u}}const FC=40,zC=5,HC="typewriter-reveal",Hx=1e3,GC=4e3;function Gx(){return Hx+Math.random()*(GC-Hx)}function jS(){return typeof window>"u"?!1:window.matchMedia("(prefers-reduced-motion: reduce)").matches}function VC({text:a,content:e,speed:i,cursorWidth:r,active:o,waiting:c,completed:u,holdCursor:d=!1,onComplete:m}){const h=Pe.useRef(null),g=Pe.useRef(m),_=Pe.useRef(null),v=Pe.useRef(null),x=Pe.useRef(null),b=Pe.useRef("idle"),[C,y]=Pe.useState("idle");g.current=m;const S=Pe.useCallback(()=>{_.current&&(clearTimeout(_.current),_.current=null)},[]),I=Pe.useCallback(()=>{var N;S(),v.current=null,x.current=null,b.current="complete",y("complete"),(N=g.current)==null||N.call(g)},[S]),O=Pe.useCallback(N=>{S(),v.current=Date.now()+N,_.current=setTimeout(I,N)},[S,I]);Pe.useLayoutEffect(()=>{b.current="idle",y("idle"),x.current=null,v.current=null,S()},[a,i,r,S]),Pe.useLayoutEffect(()=>{var G,J,fe;if(c||u||b.current==="complete")return;if(!o){b.current==="cursor-hold"&&_.current&&v.current!=null&&(S(),x.current=Math.max(0,v.current-Date.now()),v.current=null);return}if(b.current==="cursor-hold"&&!_.current){const xe=x.current??Gx();x.current=null,O(xe);return}if(b.current==="animating"||b.current==="cursor-hold")return;if(jS()){(G=g.current)==null||G.call(g);return}const N=h.current;if(!N||!a){(J=g.current)==null||J.call(g);return}N.style.width="",N.offsetWidth;const V=Math.max(a.length/i*1e3,120),H=Math.max(a.length,1),Y=N.closest(".typewriter-block"),he=(Y==null?void 0:Y.clientWidth)??((fe=N.parentElement)==null?void 0:fe.clientWidth)??0;N.style.whiteSpace="nowrap",N.style.width="auto";const ue=N.scrollWidth,X=he>0?Math.min(ue,he):ue;N.style.width="0",N.style.setProperty("--tw-duration",`${V}ms`),N.style.setProperty("--tw-target-width",`${X}px`),N.style.setProperty("--tw-steps",String(H)),N.style.setProperty("--tw-cursor-width",`${r}px`),N.offsetWidth,b.current="animating",y("animating");const z=xe=>{if(xe.animationName===HC){if(d){N.style.width=`${X}px`,b.current="cursor-hold",y("cursor-hold"),O(Gx());return}N.style.width="",I()}};return N.addEventListener("animationend",z),()=>{N.removeEventListener("animationend",z)}},[o,u,I,d,O,i,a,c,S,r]);const A=C==="animating",U=C==="cursor-hold",L=C==="complete",E=["typewriter","typewriter-line",c?"is-waiting":"",A?"is-animating":"",U?"is-cursor-hold":"",u||L?"is-complete":"",!o&&!c&&!u&&!L&&(A||U)?"is-paused":""].filter(Boolean).join(" ");return D.jsx("span",{ref:h,className:E,children:e??a})}function bm({text:a,children:e,className:i,speed:r=FC,cursorWidth:o=zC,multiline:c="auto",active:u=!0,holdCursor:d=!0,onComplete:m}){const h=Pe.useRef(null),g=Pe.useRef(m),[_,v]=Pe.useState([]),[x,b]=Pe.useState(0),[C,y]=Pe.useState(0),[S,I]=Pe.useState(!1),[O,A]=Pe.useState(!1),U=jS();g.current=m;const L=Pe.useCallback(()=>{const ue=h.current;if(!ue||!a)return v([]),b(0),A(!0),!0;const X=ue.clientWidth;if(X<1)return!1;const G=(c==="auto"||c===!0)&&!U,{lines:J,blockHeight:fe}=zx(a,X,ue,G);let xe=fe;if(!G){const P=zx(a,X,ue,!0);xe=Math.max(fe,P.blockHeight)}return v(J),b(xe),A(!0),!0},[a,c,U]);Pe.useLayoutEffect(()=>{var ue,X;if(y(0),I(!1),A(!1),v([]),b(0),U){(ue=g.current)==null||ue.call(g),A(!0);return}if(!a){(X=g.current)==null||X.call(g),A(!0);return}if(!L()){const z=new ResizeObserver(()=>{L()&&z.disconnect()});return h.current&&z.observe(h.current),()=>z.disconnect()}},[a,c,L,U]);const B=Pe.useCallback(ue=>{var z;const X=ue>=_.length-1;PC.flushSync(()=>{if(!X){y(ue+1);return}I(!0)}),X&&((z=g.current)==null||z.call(g))},[_]),N=["typewriter-block",_.length>1?"typewriter-lines":"typewriter-host",i??"",S?"is-complete":"",O?"":"is-measuring",U?"is-static":""].filter(Boolean).join(" "),V={...!S&&!U&&x>0?{height:x,minHeight:x}:void 0},H=e??a;if(!O)return D.jsx("span",{ref:h,className:N,style:V,children:H});if(U||!a)return D.jsx("span",{ref:h,className:["typewriter","is-static",i??""].filter(Boolean).join(" "),children:H});if(S)return D.jsx("span",{ref:h,className:["typewriter-block","typewriter-host","is-complete",i??""].filter(Boolean).join(" "),children:H});const Y=_.length>0?_:[a],he=!!e&&Y.length<=1;return D.jsxs("span",{ref:h,className:N,style:V,"aria-label":a,children:[D.jsx("span",{className:"typewriter-ghost","aria-hidden":!0,children:H}),D.jsx("span",{className:"typewriter-overlay","aria-hidden":!0,children:Y.map((ue,X)=>D.jsx(VC,{text:ue,content:he?e:void 0,speed:r,cursorWidth:o,waiting:X>C,active:u&&X===C,completed:X<C,holdCursor:d&&X===Y.length-1,onComplete:X===C?()=>B(X):void 0},`${X}-${ue}`))})]})}function kC(){return typeof window<"u"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches}function Tm(a,e){const i=(e==null?void 0:e.amount)??.2,[r,o]=Pe.useState(!1);return Pe.useLayoutEffect(()=>{if(r)return;if(kC()){o(!0);return}const c=a.current;if(!c)return;const u=new IntersectionObserver(d=>{for(const m of d)if(m.isIntersecting&&m.intersectionRatio>=Math.min(i,1)){o(!0),u.disconnect();return}},{root:null,threshold:[0,i,Math.min(i+.15,1),1],rootMargin:"0px"});return u.observe(c),()=>u.disconnect()},[i,r,a]),r}function XC(a){return String(a).padStart(2,"0")}function nf(){return typeof window<"u"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches}const WC=1600,YC=1500,Vx=5e3,qC=7e3;function jC(){return Vx+Math.random()*(qC-Vx)}function ZC({text:a,active:e}){const[i,r]=Pe.useState(!1),[o,c]=Pe.useState(0),u=Pe.useRef(null),d=`> ${a}`,m=Pe.useCallback(()=>{u.current&&(clearTimeout(u.current),u.current=null)},[]);Pe.useLayoutEffect(()=>{if(m(),!e){r(!1),c(0);return}if(nf()){r(!0);return}const g=window.setTimeout(()=>r(!0),YC);return()=>{window.clearTimeout(g),m()}},[e,m]);const h=Pe.useCallback(()=>{nf()||(m(),u.current=setTimeout(()=>{u.current=null,c(g=>g+1)},jC()))},[m]);return D.jsx("p",{className:"flow-step__example",children:i?D.jsx(bm,{text:d,className:"flow-step__example-type",speed:42,multiline:"auto",active:!0,holdCursor:!0,onComplete:h},o):D.jsx("span",{className:"flow-step__example-type","aria-hidden":!0,children:d})})}function KC(){const[a,e]=Pe.useState(()=>new Set),[i,r]=Pe.useState(!1),o=Pe.useRef(new Map),c=Pe.useRef(null),u=Tm(c,{amount:.35}),d=Xs.steps.every(_=>a.has(`step-${_.n}`));Pe.useLayoutEffect(()=>{if(nf()){e(new Set(Xs.steps.map(v=>`step-${v.n}`))),r(!0);return}const _=new IntersectionObserver(v=>{e(x=>{const b=new Set(x);for(const C of v){const y=C.target.dataset.flowKey;y&&C.isIntersecting&&b.add(y)}return b})},{root:null,threshold:[0,.01,.08,.15,.25],rootMargin:"-42% 0px -42% 0px"});for(const v of o.current.values())_.observe(v);return()=>{_.disconnect()}},[]),Pe.useLayoutEffect(()=>{if(nf())return;if(!d){r(!1);return}const _=window.setTimeout(()=>{r(!0)},WC);return()=>window.clearTimeout(_)},[d]);const m=Pe.useCallback((_,v)=>{v?o.current.set(_,v):o.current.delete(_)},[]),h=Pe.useCallback(_=>{e(v=>new Set(v).add(_))},[]),g=u&&i;return D.jsx("section",{id:"how",className:"section flow",children:D.jsxs("div",{className:"container",children:[D.jsx("p",{className:"section-kicker",children:Xs.kicker}),D.jsx("h2",{className:"section-title flow__title",children:Xs.title}),D.jsx("div",{className:"flow__chips",children:Xs.chips.map(_=>D.jsx(qS,{label:_.label,status:_.value},_.label))}),D.jsx("div",{className:"flow__steps",role:"list",children:Xs.steps.map((_,v)=>{const x=`step-${_.n}`,b=a.has(x);return D.jsxs("article",{ref:C=>m(x,C),"data-flow-key":x,role:"listitem",className:`flow-step${b?" flow-step--expanded":""}`,"aria-expanded":b,children:[D.jsxs("button",{type:"button",className:"flow-step__head",onClick:()=>h(x),"aria-label":b?`${_.title}, expanded`:`${_.title}, tap to expand`,children:[D.jsxs("span",{className:"flow-step__idx",children:["Step ",XC(_.n)]}),D.jsx("h3",{className:"flow-step__title",children:_.title}),D.jsx("span",{className:"flow-step__chevron","aria-hidden":!0,children:b?"−":"+"})]}),D.jsx("div",{className:"flow-step__expand","aria-hidden":!b,children:D.jsx("div",{className:"flow-step__expand-inner",children:D.jsxs("div",{className:`flow-step__split${v===2?" flow-step__split--supervise":""}`,children:[D.jsx("p",{className:"flow-step__meta",children:_.feature}),D.jsxs("div",{className:"flow-step__copy",children:[D.jsx("p",{className:"flow-step__detail",children:_.body}),D.jsx(ZC,{text:_.example,active:b}),D.jsx("div",{className:"flow-step__actions",children:D.jsx("a",{href:Vn.explore,className:"flow-step__open","aria-label":`Explore after ${_.title}`,children:D.jsx("span",{"aria-hidden":!0,className:"flow-step__open-arrow",children:"→"})})})]}),D.jsx("div",{className:`flow-step__sheet${v===2?" flow-step__sheet--log":""}`,"aria-hidden":!b,children:b?v===2?D.jsx(NC,{}):D.jsx(LC,{stepIndex:v,width:280}):null})]})})})]},x)})}),D.jsx("p",{ref:c,className:"flow__outcome",children:g?D.jsx(bm,{text:Xs.outcome,className:"flow__outcome-type",speed:42,multiline:"auto",active:!0,holdCursor:!0}):D.jsx("span",{className:"flow__outcome-type","aria-hidden":!0,children:Xs.outcome})})]})})}function QC(){return D.jsx("footer",{className:"site-footer",children:D.jsxs("div",{className:"container site-footer__inner",children:[D.jsxs("div",{className:"site-footer__brand",children:[D.jsx("a",{className:"site-footer__logo",href:"#hero","aria-label":"Morpheum home",children:D.jsx(Sm,{size:"sm"})}),D.jsx("p",{className:"site-footer__legal",children:pv.legal})]}),D.jsxs("div",{className:"site-footer__meta",children:[D.jsxs("nav",{className:"site-footer__nav","aria-label":"Footer",children:[Hu.map(a=>D.jsx("a",{href:a.href,children:a.label},a.id)),D.jsx("a",{href:Vn.docs,children:"Docs"}),D.jsx("a",{href:Vn.manifesto,children:"Manifesto"}),D.jsx("a",{href:Vn.discord,children:"Discord"}),D.jsx("a",{href:Vn.x,children:"X"})]}),D.jsx("div",{className:"site-footer__labels","aria-label":"Protocol",children:pv.labels.map(a=>D.jsx("span",{className:"site-footer__label",children:a},a))})]})]})})}const kx="!@#$%^&*()_+{}[]|;:,.<>?/0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",ZS=50,Xx=3500,Wx=4e3,JC=1400,$C=1200,ew=4500;function KS(){return typeof window>"u"?!1:window.matchMedia("(prefers-reduced-motion: reduce)").matches}function Yx(a){return/[A-Za-z0-9]/.test(a)}function tw(){return kx[Math.floor(Math.random()*kx.length)]??"?"}function nw(a){return Math.random()<.5?tw():a}function QS(a,e,i){const r=[];for(let h=0;h<a.length;h++)Yx(a[h]??"")&&r.push(h);const o=r.length,c=o===0?1:Math.min(e/i,1),u=Math.floor(c*o),d=new Set(r.slice(0,u));let m="";for(let h=0;h<a.length;h++){const g=a[h]??"";!Yx(g)||d.has(h)?m+=g:m+=nw(g)}return m}function iw(a){return typeof a=="boolean"?{enabled:a,decryptMs:Xx,pauseMs:Wx}:{enabled:a.enabled??!0,decryptMs:a.decryptMs??Xx,pauseMs:a.pauseMs??Wx}}function si(a,e=!0){const{enabled:i,decryptMs:r,pauseMs:o}=iw(e),c=r+o,[u,d]=Pe.useState(a);return Pe.useEffect(()=>{if(!i||KS()){d(a);return}let m=Date.now();const h=()=>{const _=Date.now();let v=_-m;v>=c&&(m=_,v=0),d(QS(a,v,r))};h();const g=setInterval(h,ZS);return()=>{clearInterval(g)}},[a,i,r,c]),u}function qx(a,e={}){const i=e.enabled??!0,r=e.stepDelayMs??JC,o=e.stepDecryptMs??$C,c=e.holdMs??ew,u=a.join("\0"),[d,m]=Pe.useState(a),[h,g]=Pe.useState(()=>a.map(()=>!1));return Pe.useEffect(()=>{const _=u.length>0?u.split("\0"):[];if(!i||KS()||_.length===0){m(_),g(_.map(()=>!0));return}const x=(_.length-1)*r+o+c;let b=Date.now();const C=()=>{const S=Date.now();let I=S-b;I>=x&&(b=S,I=0);const O=[],A=[];for(let U=0;U<_.length;U++){const L=_[U]??"",B=U*r,E=I>=B;if(A.push(E),!E){O.push(L);continue}const N=I-B;O.push(QS(L,N,o))}m(O),g(A)};C();const y=setInterval(C,ZS);return()=>{clearInterval(y)}},[u,i,r,o,c]),{displays:d,started:h}}function aw(){const a=[...hv,...hv];return D.jsx("div",{className:"marquee","aria-label":"Live status",children:D.jsx("div",{className:"marquee__viewport",children:D.jsx("div",{className:"marquee__track",children:a.map((e,i)=>D.jsx(qS,{label:e.label,status:e.status,live:"live"in e?e.live:!1},`${e.label}-${i}`))})})})}function sw({showGrid:a=!1,maskAlpha:e=.72,contentOffsetY:i=-50}){const[r,o]=ks.headline,c=si(ks.eyebrow.label),u=Math.min(1,Math.max(0,e));return D.jsxs("section",{id:"hero",className:"hero","aria-labelledby":"hero-heading",children:[D.jsx("video",{className:"hero__video",autoPlay:!0,muted:!0,loop:!0,playsInline:!0,"aria-hidden":!0,children:D.jsx("source",{src:"/Morm_IntroAnimation_2.mp4",type:"video/mp4"})}),D.jsx("div",{className:"hero__video-mask",style:{"--hero-mask-alpha":u},"aria-hidden":!0}),D.jsx("div",{className:"hero__atmosphere","aria-hidden":!0}),a?D.jsx("div",{className:"hero__grid","aria-hidden":!0}):null,D.jsx("div",{className:"hero__logo-anim","aria-hidden":!0,children:D.jsxs("svg",{className:"hero__logo-anim-svg",viewBox:t3,fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[D.jsx("g",{className:"hero__logo-anim-ghost",children:tm.map(d=>D.jsx("path",{d,fill:"#C8F5A8"},`ghost-${d.slice(0,24)}`))}),D.jsx("g",{className:"hero__logo-anim-fill",children:tm.map(d=>D.jsx("path",{d,fill:"#C8F5A8"},`fill-${d.slice(0,24)}`))})]})}),D.jsx("div",{className:"hero__scanlines","aria-hidden":!0}),D.jsx("div",{className:"hero__grain","aria-hidden":!0}),D.jsx("div",{className:"hero__veil","aria-hidden":!0}),D.jsxs("div",{className:"container hero__content",style:{"--hero-content-offset-y":`${i}px`},children:[D.jsxs("a",{className:"hero__eyebrow hero__eyebrow--matrix",href:ks.eyebrow.href,"aria-label":`${ks.eyebrow.label}›`,children:[c,D.jsx("span",{className:"hero__eyebrow-chevron","aria-hidden":!0,children:"›"})]}),D.jsxs("h1",{id:"hero-heading",className:"hero__headline",children:[D.jsx("span",{className:"hero__line hero__line--lead",children:r}),D.jsx("span",{className:"hero__line hero__line--punch",children:o})]}),D.jsxs("div",{className:"hero__ctas",children:[D.jsx(Go,{href:ks.primaryCta.href,variant:"primary",children:ks.primaryCta.label}),D.jsx(Go,{href:ks.secondaryCta.href,variant:"secondary",children:ks.secondaryCta.label})]})]}),D.jsx(aw,{})]})}function rw(){const a=si(xh.text);return D.jsx("div",{className:"manifesto-strip",children:D.jsx("a",{className:"manifesto-strip__link manifesto-strip__link--matrix",href:xh.href,"aria-label":xh.text,children:a})})}const xi={decryptMs:2800,pauseMs:5200},jx={stepDelayMs:1400,stepDecryptMs:1200,holdMs:4500};function JS(a){return String(a+1).padStart(2,"0")}function ow(a,e,i,r){return`${JS(a)}  ${e}  ·  ${i}  ·  ${r}`}function lw(a,e,i){return`${JS(a)}  ${e}  ·  ${i}`}function cw(a){return!a.from||!a.to||!a.asset||!a.amt?null:`${a.from} → ${a.to} · ${a.asset} ${a.amt}`}function Ri({label:a,value:e,display:i}){return D.jsxs("div",{className:"persona-card__meta-row",children:[D.jsx("span",{className:"terminal-label",children:a}),D.jsx("span",{className:"terminal-value persona-card__meta-value persona-card__meta-value--matrix","aria-label":e,children:i})]})}function _n({value:a,display:e,className:i="terminal-value persona-card__meta-value persona-card__meta-value--matrix",hidden:r=!1}){return D.jsx("p",{className:i,"aria-label":a,"aria-hidden":r||void 0,"data-pending":r?"true":void 0,children:e})}function uw({meta:a}){const e=si(a.name,xi),i=si(a.tx,xi),r=si(a.hash,xi),o=si(a.chain,xi),c=si(a.verified,xi),u=si(a.rep,xi),d=si(a.portable,xi),m=si(a.next,xi),h=`tx ${a.tx}`,g=`tx ${i}`,_=`did · ${a.name}`,v=`identity · ${e}`,x=`hash ${a.hash}`,b=`hash ${r}`,C=`chain ${a.chain}`,y=`chain ${o}`,S=`verified ${a.verified} · rep ${a.rep} · portable ${a.portable}`,I=`verified ${c} · rep ${u} · portable ${d}`,O=`next ${a.next}`,A=`next ${m}`,U=`rep ${a.rep} · portable ${a.portable}`,L=`rep ${u} · portable ${d}`,B=`verified ${a.verified}`,E=`verified ${c}`;return D.jsxs("div",{className:"persona-card__meta persona-card__meta--identity",children:[D.jsx("p",{className:"persona-card__meta-kind terminal-label",children:"become an operator"}),D.jsx("p",{className:"terminal-label",children:"on-chain transaction"}),D.jsxs("div",{className:"persona-card__meta-rows",children:[D.jsx(Ri,{label:"tx",value:a.tx,display:i}),D.jsx(Ri,{label:"hash",value:a.hash,display:r}),D.jsx(Ri,{label:"chain",value:a.chain,display:o}),D.jsx(Ri,{label:"verified",value:a.verified,display:c}),D.jsx(Ri,{label:"rep",value:a.rep,display:u}),D.jsx(Ri,{label:"portable",value:a.portable,display:d}),D.jsx(Ri,{label:"next",value:a.next,display:m})]}),D.jsxs("div",{className:"persona-card__meta-compact",children:[D.jsx(_n,{value:h,display:g}),D.jsx(_n,{value:_,display:v,className:"terminal-value persona-card__meta-value--matrix"}),D.jsx(_n,{value:x,display:b}),D.jsx(_n,{value:C,display:y}),D.jsx(_n,{value:S,display:I}),D.jsx(_n,{value:O,display:A})]}),D.jsxs("div",{className:"persona-card__meta-xxs",children:[D.jsx(_n,{value:h,display:g}),D.jsx(_n,{value:a.name,display:e,className:"terminal-value persona-card__meta-value--matrix"}),D.jsx(_n,{value:x,display:b}),D.jsx(_n,{value:C,display:y}),D.jsx(_n,{value:B,display:E}),D.jsx(_n,{value:U,display:L}),D.jsx(_n,{value:O,display:A})]})]})}function fw({meta:a}){const e=si(a.tx,xi),i=si(a.from,xi),r=si(a.to,xi),o=si(a.asset,xi),c=si(a.amt,xi),u=si(a.chain,xi),d=si(a.status,xi),m=`${a.from} → ${a.to}`,h=`${i} → ${r}`,g=`tx ${a.tx}`,_=`tx ${e}`,v=`${a.asset} ${a.amt} · ${a.chain}`,x=`${o} ${c} · ${u}`,b=`${a.asset} ${a.amt}`,C=`${o} ${c}`,y=`status ${a.status}`,S=`status ${d}`;return D.jsxs("div",{className:"persona-card__meta persona-card__meta--community",children:[D.jsx("p",{className:"persona-card__meta-kind terminal-label",children:a.label}),D.jsxs("div",{className:"persona-card__meta-rows",children:[D.jsx(Ri,{label:"tx",value:a.tx,display:e}),D.jsx(Ri,{label:"from",value:a.from,display:i}),D.jsx(Ri,{label:"to",value:a.to,display:r}),D.jsx(Ri,{label:"asset",value:a.asset,display:o}),D.jsx(Ri,{label:"amt",value:a.amt,display:c}),D.jsx(Ri,{label:"chain",value:a.chain,display:u}),D.jsx(Ri,{label:"status",value:a.status,display:d})]}),D.jsxs("div",{className:"persona-card__meta-compact",children:[D.jsx("p",{className:"terminal-label",children:a.label}),D.jsx(_n,{value:g,display:_}),D.jsx(_n,{value:m,display:h}),D.jsx(_n,{value:v,display:x}),D.jsx(_n,{value:y,display:S})]}),D.jsxs("div",{className:"persona-card__meta-xxs",children:[D.jsx("p",{className:"terminal-label",children:a.label}),D.jsx(_n,{value:g,display:_}),D.jsx(_n,{value:m,display:h}),D.jsx(_n,{value:b,display:C}),D.jsx(_n,{value:a.chain,display:u}),D.jsx(_n,{value:y,display:S})]})]})}function dw({meta:a}){const e=Pe.useRef(null),i=Tm(e,{amount:.15}),r=a.steps.find(h=>h.from&&h.to&&h.asset&&h.amt),o=r?cw(r):null,c=Pe.useMemo(()=>{const h=a.steps.map((g,_)=>ow(_,g.op,g.tx,g.status));return o&&h.push(o),h.push(a.chain),h},[a.steps,a.chain,o]),u=Pe.useMemo(()=>{const h=a.steps.map((g,_)=>lw(_,g.op,g.tx));return o&&h.push(o),h},[a.steps,o]),d=qx(c,{...jx,enabled:i}),m=qx(u,{...jx,enabled:i});return D.jsxs("div",{ref:e,className:"persona-card__meta persona-card__meta--chain",children:[D.jsx("p",{className:"persona-card__meta-kind terminal-label",children:a.label}),D.jsx("div",{className:"persona-card__meta-rows",children:c.map((h,g)=>D.jsx(_n,{value:h,display:d.displays[g]??h,hidden:!(d.started[g]??!0)},`rows-${h}`))}),D.jsxs("div",{className:"persona-card__meta-compact",children:[D.jsx("p",{className:"terminal-label",children:a.label}),c.map((h,g)=>D.jsx(_n,{value:h,display:d.displays[g]??h,hidden:!(d.started[g]??!0)},`compact-${h}`))]}),D.jsxs("div",{className:"persona-card__meta-xxs",children:[D.jsx("p",{className:"terminal-label",children:a.label}),u.map((h,g)=>D.jsx(_n,{value:h,display:m.displays[g]??h,hidden:!(m.started[g]??!0)},`xxs-${h}`))]})]})}function hw({meta:a}){return a.kind==="identity"?D.jsx(uw,{meta:a}):a.kind==="chain"?D.jsx(dw,{meta:a}):D.jsx(fw,{meta:a})}function pw({persona:a}){return D.jsxs("article",{className:`persona-card persona-card--${a.weight}`,children:[D.jsx("h3",{className:"persona-card__title",children:a.title}),D.jsx("ol",{className:"persona-card__steps",children:a.steps.map(e=>D.jsxs("li",{children:[D.jsxs("span",{className:"persona-card__chevron","aria-hidden":!0,children:[">"," "]}),e]},e))}),D.jsx(Go,{href:a.cta.href,variant:"ghost",className:"persona-card__cta",children:a.cta.label}),D.jsx(hw,{meta:a.meta})]})}function mw(){return D.jsx("section",{id:"personas",className:"section personas",children:D.jsxs("div",{className:"container",children:[D.jsx("p",{className:"section-kicker",children:Sh.kicker}),D.jsx("h2",{className:"section-title personas__title",children:Sh.title}),D.jsx("div",{className:"personas__grid",children:Sh.items.map(a=>D.jsx(pw,{persona:a},a.title))})]})})}function gw(){const[a,e]=Pe.useState(!1),[i,r]=Pe.useState(!1),[o,c]=Pe.useState("");return Pe.useEffect(()=>{const u=()=>e(window.scrollY>24);return u(),window.addEventListener("scroll",u,{passive:!0}),()=>window.removeEventListener("scroll",u)},[]),Pe.useEffect(()=>{const u=Hu.map(m=>m.id),d=new IntersectionObserver(m=>{var g;const h=m.filter(_=>_.isIntersecting).sort((_,v)=>v.intersectionRatio-_.intersectionRatio);(g=h[0])!=null&&g.target.id&&c(h[0].target.id)},{rootMargin:"-30% 0px -55% 0px",threshold:[0,.25,.5]});return u.forEach(m=>{const h=document.getElementById(m);h&&d.observe(h)}),()=>d.disconnect()},[]),Pe.useEffect(()=>(document.body.style.overflow=i?"hidden":"",()=>{document.body.style.overflow=""}),[i]),D.jsxs(D.Fragment,{children:[D.jsx("header",{className:`sticky-header ${a?"sticky-header--solid":""}`,children:D.jsxs("div",{className:"sticky-header__inner",children:[D.jsx("a",{className:"sticky-header__logo",href:"#hero","aria-label":"Morpheum home",children:D.jsx(Sm,{size:"sm",brandName:"Morpheum"})}),D.jsx("nav",{className:"sticky-header__nav","aria-label":"Primary",children:Hu.map(u=>D.jsx("a",{href:u.href,className:`sticky-header__link ${o===u.id?"is-active":""}`,children:u.label},u.id))}),D.jsxs("div",{className:"sticky-header__actions",children:[D.jsx("a",{className:"sticky-header__docs",href:Vn.docs,children:"Docs"}),D.jsx(Go,{href:Vn.app,variant:"primary",className:"sticky-header__launch",children:"Launch Demo"}),D.jsxs("button",{type:"button",className:"sticky-header__menu","aria-expanded":i,"aria-controls":"mobile-nav","aria-label":i?"Close menu":"Open menu",onClick:()=>r(u=>!u),children:[D.jsx("span",{}),D.jsx("span",{}),D.jsx("span",{})]})]})]})}),D.jsx("div",{id:"mobile-nav",className:`mobile-sheet ${i?"is-open":""}`,hidden:!i,children:D.jsxs("nav",{className:"mobile-sheet__nav","aria-label":"Mobile",children:[Hu.map(u=>D.jsx("a",{href:u.href,onClick:()=>r(!1),className:o===u.id?"is-active":"",children:u.label},u.id)),D.jsx("a",{href:Vn.docs,onClick:()=>r(!1),children:"Docs"})]})})]})}function _w(){const a=Pe.useRef(null),e=Tm(a,{amount:.35});return D.jsx("section",{className:"thesis section","aria-label":"Thesis",children:D.jsxs("div",{className:"container thesis__inner",children:[D.jsx("p",{ref:a,className:"thesis__close",children:e?D.jsxs(bm,{text:dv.close,className:"thesis__close-type",speed:36,multiline:"auto",active:!0,holdCursor:!0,children:["The Agent-native"," ",D.jsx("span",{className:"thesis__close-accent",children:"L1 DEX"})," — ",D.jsx("span",{className:"thesis__close-phrase",children:"faster, safer trades."})]}):D.jsxs("span",{className:"thesis__close-type","aria-hidden":!0,children:["The Agent-native"," ",D.jsx("span",{className:"thesis__close-accent",children:"L1 DEX"})," — ",D.jsx("span",{className:"thesis__close-phrase",children:"faster, safer trades."})]})}),D.jsx("p",{className:"section-kicker",children:"Two Risks in Agentic Economy"}),D.jsx("div",{className:"thesis__risks",children:dv.risks.map(i=>D.jsxs("article",{className:"thesis__pair",children:[D.jsxs("div",{className:"thesis__risk",children:[D.jsx("p",{className:"thesis__label",children:"Risk"}),D.jsx("h3",{className:"thesis__risk-title",children:i.risk}),D.jsxs("p",{className:"thesis__failure",children:[D.jsx("span",{"aria-hidden":!0,children:"> "}),i.failure]})]}),D.jsxs("div",{className:"thesis__solve",children:[D.jsx("p",{className:"thesis__label thesis__label--solve",children:"Solution"}),D.jsx("p",{className:"thesis__solve-body",children:i.solve})]})]},i.risk))})]})})}function vw(){return D.jsxs("div",{className:"page",children:[D.jsx("a",{className:"skip-link",href:"#hero",children:"Skip to content"}),D.jsx(rw,{}),D.jsx(gw,{}),D.jsxs("main",{className:"page__main",children:[D.jsx(TC,{cardAlpha:0,modalChassisAlpha:.8,cardSize:.8,subtitleFadeEffect:"matrix",skipAnimationSpeed:1.6,enterSoundSrc:"/snd/glitchz.mp3"}),D.jsx(sw,{contentOffsetY:0,maskAlpha:.5}),D.jsx(_w,{}),D.jsx(qy,{}),D.jsx(mw,{}),D.jsx(KC,{}),D.jsx(Zy,{}),D.jsx(Yy,{})]}),D.jsx(QC,{})]})}Xy.createRoot(document.getElementById("root")).render(D.jsx(Pe.StrictMode,{children:D.jsx(vw,{})}));
