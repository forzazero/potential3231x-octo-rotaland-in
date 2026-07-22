(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function i(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(o){if(o.ep)return;o.ep=!0;const c=i(o);fetch(o.href,c)}})();var ih={exports:{}},Ll={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var q_;function Ly(){if(q_)return Ll;q_=1;var a=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,o,c){var u=null;if(c!==void 0&&(u=""+c),o.key!==void 0&&(u=""+o.key),"key"in o){c={};for(var d in o)d!=="key"&&(c[d]=o[d])}else c=o;return o=c.ref,{$$typeof:a,type:r,key:u,ref:o!==void 0?o:null,props:c}}return Ll.Fragment=e,Ll.jsx=i,Ll.jsxs=i,Ll}var j_;function Ny(){return j_||(j_=1,ih.exports=Ly()),ih.exports}var D=Ny(),ah={exports:{}},ft={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Z_;function Uy(){if(Z_)return ft;Z_=1;var a=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),u=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),v=Symbol.iterator;function S(B){return B===null||typeof B!="object"?null:(B=v&&B[v]||B["@@iterator"],typeof B=="function"?B:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},A=Object.assign,y={};function x(B,q,Ce){this.props=B,this.context=q,this.refs=y,this.updater=Ce||E}x.prototype.isReactComponent={},x.prototype.setState=function(B,q){if(typeof B!="object"&&typeof B!="function"&&B!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,B,q,"setState")},x.prototype.forceUpdate=function(B){this.updater.enqueueForceUpdate(this,B,"forceUpdate")};function O(){}O.prototype=x.prototype;function P(B,q,Ce){this.props=B,this.context=q,this.refs=y,this.updater=Ce||E}var C=P.prototype=new O;C.constructor=P,A(C,x.prototype),C.isPureReactComponent=!0;var N=Array.isArray;function L(){}var F={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function U(B,q,Ce){var Le=Ce.ref;return{$$typeof:a,type:B,key:q,ref:Le!==void 0?Le:null,props:Ce}}function k(B,q){return U(B.type,q,B.props)}function G(B){return typeof B=="object"&&B!==null&&B.$$typeof===a}function Q(B){var q={"=":"=0",":":"=2"};return"$"+B.replace(/[=:]/g,function(Ce){return q[Ce]})}var de=/\/+/g;function ue(B,q){return typeof B=="object"&&B!==null&&B.key!=null?Q(""+B.key):q.toString(36)}function Y(B){switch(B.status){case"fulfilled":return B.value;case"rejected":throw B.reason;default:switch(typeof B.status=="string"?B.then(L,L):(B.status="pending",B.then(function(q){B.status==="pending"&&(B.status="fulfilled",B.value=q)},function(q){B.status==="pending"&&(B.status="rejected",B.reason=q)})),B.status){case"fulfilled":return B.value;case"rejected":throw B.reason}}throw B}function z(B,q,Ce,Le,Ne){var te=typeof B;(te==="undefined"||te==="boolean")&&(B=null);var Te=!1;if(B===null)Te=!0;else switch(te){case"bigint":case"string":case"number":Te=!0;break;case"object":switch(B.$$typeof){case a:case e:Te=!0;break;case g:return Te=B._init,z(Te(B._payload),q,Ce,Le,Ne)}}if(Te)return Ne=Ne(B),Te=Le===""?"."+ue(B,0):Le,N(Ne)?(Ce="",Te!=null&&(Ce=Te.replace(de,"$&/")+"/"),z(Ne,q,Ce,"",function(tt){return tt})):Ne!=null&&(G(Ne)&&(Ne=k(Ne,Ce+(Ne.key==null||B&&B.key===Ne.key?"":(""+Ne.key).replace(de,"$&/")+"/")+Te)),q.push(Ne)),1;Te=0;var ye=Le===""?".":Le+":";if(N(B))for(var ke=0;ke<B.length;ke++)Le=B[ke],te=ye+ue(Le,ke),Te+=z(Le,q,Ce,te,Ne);else if(ke=S(B),typeof ke=="function")for(B=ke.call(B),ke=0;!(Le=B.next()).done;)Le=Le.value,te=ye+ue(Le,ke++),Te+=z(Le,q,Ce,te,Ne);else if(te==="object"){if(typeof B.then=="function")return z(Y(B),q,Ce,Le,Ne);throw q=String(B),Error("Objects are not valid as a React child (found: "+(q==="[object Object]"?"object with keys {"+Object.keys(B).join(", ")+"}":q)+"). If you meant to render a collection of children, use an array instead.")}return Te}function H(B,q,Ce){if(B==null)return B;var Le=[],Ne=0;return z(B,Le,"","",function(te){return q.call(Ce,te,Ne++)}),Le}function J(B){if(B._status===-1){var q=B._result;q=q(),q.then(function(Ce){(B._status===0||B._status===-1)&&(B._status=1,B._result=Ce)},function(Ce){(B._status===0||B._status===-1)&&(B._status=2,B._result=Ce)}),B._status===-1&&(B._status=0,B._result=q)}if(B._status===1)return B._result.default;throw B._result}var he=typeof reportError=="function"?reportError:function(B){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var q=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof B=="object"&&B!==null&&typeof B.message=="string"?String(B.message):String(B),error:B});if(!window.dispatchEvent(q))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",B);return}console.error(B)},Se={map:H,forEach:function(B,q,Ce){H(B,function(){q.apply(this,arguments)},Ce)},count:function(B){var q=0;return H(B,function(){q++}),q},toArray:function(B){return H(B,function(q){return q})||[]},only:function(B){if(!G(B))throw Error("React.Children.only expected to receive a single React element child.");return B}};return ft.Activity=_,ft.Children=Se,ft.Component=x,ft.Fragment=i,ft.Profiler=o,ft.PureComponent=P,ft.StrictMode=r,ft.Suspense=m,ft.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=F,ft.__COMPILER_RUNTIME={__proto__:null,c:function(B){return F.H.useMemoCache(B)}},ft.cache=function(B){return function(){return B.apply(null,arguments)}},ft.cacheSignal=function(){return null},ft.cloneElement=function(B,q,Ce){if(B==null)throw Error("The argument must be a React element, but you passed "+B+".");var Le=A({},B.props),Ne=B.key;if(q!=null)for(te in q.key!==void 0&&(Ne=""+q.key),q)!T.call(q,te)||te==="key"||te==="__self"||te==="__source"||te==="ref"&&q.ref===void 0||(Le[te]=q[te]);var te=arguments.length-2;if(te===1)Le.children=Ce;else if(1<te){for(var Te=Array(te),ye=0;ye<te;ye++)Te[ye]=arguments[ye+2];Le.children=Te}return U(B.type,Ne,Le)},ft.createContext=function(B){return B={$$typeof:u,_currentValue:B,_currentValue2:B,_threadCount:0,Provider:null,Consumer:null},B.Provider=B,B.Consumer={$$typeof:c,_context:B},B},ft.createElement=function(B,q,Ce){var Le,Ne={},te=null;if(q!=null)for(Le in q.key!==void 0&&(te=""+q.key),q)T.call(q,Le)&&Le!=="key"&&Le!=="__self"&&Le!=="__source"&&(Ne[Le]=q[Le]);var Te=arguments.length-2;if(Te===1)Ne.children=Ce;else if(1<Te){for(var ye=Array(Te),ke=0;ke<Te;ke++)ye[ke]=arguments[ke+2];Ne.children=ye}if(B&&B.defaultProps)for(Le in Te=B.defaultProps,Te)Ne[Le]===void 0&&(Ne[Le]=Te[Le]);return U(B,te,Ne)},ft.createRef=function(){return{current:null}},ft.forwardRef=function(B){return{$$typeof:d,render:B}},ft.isValidElement=G,ft.lazy=function(B){return{$$typeof:g,_payload:{_status:-1,_result:B},_init:J}},ft.memo=function(B,q){return{$$typeof:h,type:B,compare:q===void 0?null:q}},ft.startTransition=function(B){var q=F.T,Ce={};F.T=Ce;try{var Le=B(),Ne=F.S;Ne!==null&&Ne(Ce,Le),typeof Le=="object"&&Le!==null&&typeof Le.then=="function"&&Le.then(L,he)}catch(te){he(te)}finally{q!==null&&Ce.types!==null&&(q.types=Ce.types),F.T=q}},ft.unstable_useCacheRefresh=function(){return F.H.useCacheRefresh()},ft.use=function(B){return F.H.use(B)},ft.useActionState=function(B,q,Ce){return F.H.useActionState(B,q,Ce)},ft.useCallback=function(B,q){return F.H.useCallback(B,q)},ft.useContext=function(B){return F.H.useContext(B)},ft.useDebugValue=function(){},ft.useDeferredValue=function(B,q){return F.H.useDeferredValue(B,q)},ft.useEffect=function(B,q){return F.H.useEffect(B,q)},ft.useEffectEvent=function(B){return F.H.useEffectEvent(B)},ft.useId=function(){return F.H.useId()},ft.useImperativeHandle=function(B,q,Ce){return F.H.useImperativeHandle(B,q,Ce)},ft.useInsertionEffect=function(B,q){return F.H.useInsertionEffect(B,q)},ft.useLayoutEffect=function(B,q){return F.H.useLayoutEffect(B,q)},ft.useMemo=function(B,q){return F.H.useMemo(B,q)},ft.useOptimistic=function(B,q){return F.H.useOptimistic(B,q)},ft.useReducer=function(B,q,Ce){return F.H.useReducer(B,q,Ce)},ft.useRef=function(B){return F.H.useRef(B)},ft.useState=function(B){return F.H.useState(B)},ft.useSyncExternalStore=function(B,q,Ce){return F.H.useSyncExternalStore(B,q,Ce)},ft.useTransition=function(){return F.H.useTransition()},ft.version="19.2.7",ft}var K_;function qp(){return K_||(K_=1,ah.exports=Uy()),ah.exports}var Xe=qp(),sh={exports:{}},Nl={},rh={exports:{}},oh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Q_;function Oy(){return Q_||(Q_=1,(function(a){function e(z,H){var J=z.length;z.push(H);e:for(;0<J;){var he=J-1>>>1,Se=z[he];if(0<o(Se,H))z[he]=H,z[J]=Se,J=he;else break e}}function i(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var H=z[0],J=z.pop();if(J!==H){z[0]=J;e:for(var he=0,Se=z.length,B=Se>>>1;he<B;){var q=2*(he+1)-1,Ce=z[q],Le=q+1,Ne=z[Le];if(0>o(Ce,J))Le<Se&&0>o(Ne,Ce)?(z[he]=Ne,z[Le]=J,he=Le):(z[he]=Ce,z[q]=J,he=q);else if(Le<Se&&0>o(Ne,J))z[he]=Ne,z[Le]=J,he=Le;else break e}}return H}function o(z,H){var J=z.sortIndex-H.sortIndex;return J!==0?J:z.id-H.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;a.unstable_now=function(){return c.now()}}else{var u=Date,d=u.now();a.unstable_now=function(){return u.now()-d}}var m=[],h=[],g=1,_=null,v=3,S=!1,E=!1,A=!1,y=!1,x=typeof setTimeout=="function"?setTimeout:null,O=typeof clearTimeout=="function"?clearTimeout:null,P=typeof setImmediate<"u"?setImmediate:null;function C(z){for(var H=i(h);H!==null;){if(H.callback===null)r(h);else if(H.startTime<=z)r(h),H.sortIndex=H.expirationTime,e(m,H);else break;H=i(h)}}function N(z){if(A=!1,C(z),!E)if(i(m)!==null)E=!0,L||(L=!0,Q());else{var H=i(h);H!==null&&Y(N,H.startTime-z)}}var L=!1,F=-1,T=5,U=-1;function k(){return y?!0:!(a.unstable_now()-U<T)}function G(){if(y=!1,L){var z=a.unstable_now();U=z;var H=!0;try{e:{E=!1,A&&(A=!1,O(F),F=-1),S=!0;var J=v;try{t:{for(C(z),_=i(m);_!==null&&!(_.expirationTime>z&&k());){var he=_.callback;if(typeof he=="function"){_.callback=null,v=_.priorityLevel;var Se=he(_.expirationTime<=z);if(z=a.unstable_now(),typeof Se=="function"){_.callback=Se,C(z),H=!0;break t}_===i(m)&&r(m),C(z)}else r(m);_=i(m)}if(_!==null)H=!0;else{var B=i(h);B!==null&&Y(N,B.startTime-z),H=!1}}break e}finally{_=null,v=J,S=!1}H=void 0}}finally{H?Q():L=!1}}}var Q;if(typeof P=="function")Q=function(){P(G)};else if(typeof MessageChannel<"u"){var de=new MessageChannel,ue=de.port2;de.port1.onmessage=G,Q=function(){ue.postMessage(null)}}else Q=function(){x(G,0)};function Y(z,H){F=x(function(){z(a.unstable_now())},H)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(z){z.callback=null},a.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<z?Math.floor(1e3/z):5},a.unstable_getCurrentPriorityLevel=function(){return v},a.unstable_next=function(z){switch(v){case 1:case 2:case 3:var H=3;break;default:H=v}var J=v;v=H;try{return z()}finally{v=J}},a.unstable_requestPaint=function(){y=!0},a.unstable_runWithPriority=function(z,H){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var J=v;v=z;try{return H()}finally{v=J}},a.unstable_scheduleCallback=function(z,H,J){var he=a.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?he+J:he):J=he,z){case 1:var Se=-1;break;case 2:Se=250;break;case 5:Se=1073741823;break;case 4:Se=1e4;break;default:Se=5e3}return Se=J+Se,z={id:g++,callback:H,priorityLevel:z,startTime:J,expirationTime:Se,sortIndex:-1},J>he?(z.sortIndex=J,e(h,z),i(m)===null&&z===i(h)&&(A?(O(F),F=-1):A=!0,Y(N,J-he))):(z.sortIndex=Se,e(m,z),E||S||(E=!0,L||(L=!0,Q()))),z},a.unstable_shouldYield=k,a.unstable_wrapCallback=function(z){var H=v;return function(){var J=v;v=H;try{return z.apply(this,arguments)}finally{v=J}}}})(oh)),oh}var J_;function Py(){return J_||(J_=1,rh.exports=Oy()),rh.exports}var lh={exports:{}},Jn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $_;function Iy(){if($_)return Jn;$_=1;var a=qp();function e(m){var h="https://react.dev/errors/"+m;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)h+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},o=Symbol.for("react.portal");function c(m,h,g){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:_==null?null:""+_,children:m,containerInfo:h,implementation:g}}var u=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,h){if(m==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return Jn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Jn.createPortal=function(m,h){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(e(299));return c(m,h,null,g)},Jn.flushSync=function(m){var h=u.T,g=r.p;try{if(u.T=null,r.p=2,m)return m()}finally{u.T=h,r.p=g,r.d.f()}},Jn.preconnect=function(m,h){typeof m=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,r.d.C(m,h))},Jn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},Jn.preinit=function(m,h){if(typeof m=="string"&&h&&typeof h.as=="string"){var g=h.as,_=d(g,h.crossOrigin),v=typeof h.integrity=="string"?h.integrity:void 0,S=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;g==="style"?r.d.S(m,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:_,integrity:v,fetchPriority:S}):g==="script"&&r.d.X(m,{crossOrigin:_,integrity:v,fetchPriority:S,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},Jn.preinitModule=function(m,h){if(typeof m=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var g=d(h.as,h.crossOrigin);r.d.M(m,{crossOrigin:g,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&r.d.M(m)},Jn.preload=function(m,h){if(typeof m=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var g=h.as,_=d(g,h.crossOrigin);r.d.L(m,g,{crossOrigin:_,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},Jn.preloadModule=function(m,h){if(typeof m=="string")if(h){var g=d(h.as,h.crossOrigin);r.d.m(m,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:g,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else r.d.m(m)},Jn.requestFormReset=function(m){r.d.r(m)},Jn.unstable_batchedUpdates=function(m,h){return m(h)},Jn.useFormState=function(m,h,g){return u.H.useFormState(m,h,g)},Jn.useFormStatus=function(){return u.H.useHostTransitionStatus()},Jn.version="19.2.7",Jn}var ev;function Px(){if(ev)return lh.exports;ev=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(e){console.error(e)}}return a(),lh.exports=Iy(),lh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tv;function By(){if(tv)return Nl;tv=1;var a=Py(),e=qp(),i=Px();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)n+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,s=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(s=n.return),t=n.return;while(t)}return n.tag===3?s:null}function u(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function d(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(r(188))}function h(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(r(188));return n!==t?null:t}for(var s=t,l=n;;){var f=s.return;if(f===null)break;var p=f.alternate;if(p===null){if(l=f.return,l!==null){s=l;continue}break}if(f.child===p.child){for(p=f.child;p;){if(p===s)return m(f),t;if(p===l)return m(f),n;p=p.sibling}throw Error(r(188))}if(s.return!==l.return)s=f,l=p;else{for(var M=!1,w=f.child;w;){if(w===s){M=!0,s=f,l=p;break}if(w===l){M=!0,l=f,s=p;break}w=w.sibling}if(!M){for(w=p.child;w;){if(w===s){M=!0,s=p,l=f;break}if(w===l){M=!0,l=p,s=f;break}w=w.sibling}if(!M)throw Error(r(189))}}if(s.alternate!==l)throw Error(r(190))}if(s.tag!==3)throw Error(r(188));return s.stateNode.current===s?t:n}function g(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=g(t),n!==null)return n;t=t.sibling}return null}var _=Object.assign,v=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),A=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),O=Symbol.for("react.consumer"),P=Symbol.for("react.context"),C=Symbol.for("react.forward_ref"),N=Symbol.for("react.suspense"),L=Symbol.for("react.suspense_list"),F=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),U=Symbol.for("react.activity"),k=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function Q(t){return t===null||typeof t!="object"?null:(t=G&&t[G]||t["@@iterator"],typeof t=="function"?t:null)}var de=Symbol.for("react.client.reference");function ue(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===de?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case A:return"Fragment";case x:return"Profiler";case y:return"StrictMode";case N:return"Suspense";case L:return"SuspenseList";case U:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case E:return"Portal";case P:return t.displayName||"Context";case O:return(t._context.displayName||"Context")+".Consumer";case C:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case F:return n=t.displayName||null,n!==null?n:ue(t.type)||"Memo";case T:n=t._payload,t=t._init;try{return ue(t(n))}catch{}}return null}var Y=Array.isArray,z=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,J={pending:!1,data:null,method:null,action:null},he=[],Se=-1;function B(t){return{current:t}}function q(t){0>Se||(t.current=he[Se],he[Se]=null,Se--)}function Ce(t,n){Se++,he[Se]=t.current,t.current=n}var Le=B(null),Ne=B(null),te=B(null),Te=B(null);function ye(t,n){switch(Ce(te,n),Ce(Ne,t),Ce(Le,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?g_(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=g_(n),t=__(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}q(Le),Ce(Le,t)}function ke(){q(Le),q(Ne),q(te)}function tt(t){t.memoizedState!==null&&Ce(Te,t);var n=Le.current,s=__(n,t.type);n!==s&&(Ce(Ne,t),Ce(Le,s))}function qe(t){Ne.current===t&&(q(Le),q(Ne)),Te.current===t&&(q(Te),Rl._currentValue=J)}var xt,gt;function St(t){if(xt===void 0)try{throw Error()}catch(s){var n=s.stack.trim().match(/\n( *(at )?)/);xt=n&&n[1]||"",gt=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+xt+t+gt}var Mt=!1;function yt(t,n){if(!t||Mt)return"";Mt=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(n){var Re=function(){throw Error()};if(Object.defineProperty(Re.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Re,[])}catch(pe){var fe=pe}Reflect.construct(t,[],Re)}else{try{Re.call()}catch(pe){fe=pe}t.call(Re.prototype)}}else{try{throw Error()}catch(pe){fe=pe}(Re=t())&&typeof Re.catch=="function"&&Re.catch(function(){})}}catch(pe){if(pe&&fe&&typeof pe.stack=="string")return[pe.stack,fe.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var p=l.DetermineComponentFrameRoot(),M=p[0],w=p[1];if(M&&w){var V=M.split(`
`),oe=w.split(`
`);for(f=l=0;l<V.length&&!V[l].includes("DetermineComponentFrameRoot");)l++;for(;f<oe.length&&!oe[f].includes("DetermineComponentFrameRoot");)f++;if(l===V.length||f===oe.length)for(l=V.length-1,f=oe.length-1;1<=l&&0<=f&&V[l]!==oe[f];)f--;for(;1<=l&&0<=f;l--,f--)if(V[l]!==oe[f]){if(l!==1||f!==1)do if(l--,f--,0>f||V[l]!==oe[f]){var Me=`
`+V[l].replace(" at new "," at ");return t.displayName&&Me.includes("<anonymous>")&&(Me=Me.replace("<anonymous>",t.displayName)),Me}while(1<=l&&0<=f);break}}}finally{Mt=!1,Error.prepareStackTrace=s}return(s=t?t.displayName||t.name:"")?St(s):""}function tn(t,n){switch(t.tag){case 26:case 27:case 5:return St(t.type);case 16:return St("Lazy");case 13:return t.child!==n&&n!==null?St("Suspense Fallback"):St("Suspense");case 19:return St("SuspenseList");case 0:case 15:return yt(t.type,!1);case 11:return yt(t.type.render,!1);case 1:return yt(t.type,!0);case 31:return St("Activity");default:return""}}function nn(t){try{var n="",s=null;do n+=tn(t,s),s=t,t=t.return;while(t);return n}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var on=Object.prototype.hasOwnProperty,fn=a.unstable_scheduleCallback,ct=a.unstable_cancelCallback,Vt=a.unstable_shouldYield,Z=a.unstable_requestPaint,Ut=a.unstable_now,bt=a.unstable_getCurrentPriorityLevel,I=a.unstable_ImmediatePriority,b=a.unstable_UserBlockingPriority,ee=a.unstable_NormalPriority,le=a.unstable_LowPriority,me=a.unstable_IdlePriority,Pe=a.log,Oe=a.unstable_setDisableYieldValue,ge=null,_e=null;function Ie(t){if(typeof Pe=="function"&&Oe(t),_e&&typeof _e.setStrictMode=="function")try{_e.setStrictMode(ge,t)}catch{}}var Ge=Math.clz32?Math.clz32:Ke,ze=Math.log,we=Math.LN2;function Ke(t){return t>>>=0,t===0?32:31-(ze(t)/we|0)|0}var Qe=256,it=262144,X=4194304;function De(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function ve(t,n,s){var l=t.pendingLanes;if(l===0)return 0;var f=0,p=t.suspendedLanes,M=t.pingedLanes;t=t.warmLanes;var w=l&134217727;return w!==0?(l=w&~p,l!==0?f=De(l):(M&=w,M!==0?f=De(M):s||(s=w&~t,s!==0&&(f=De(s))))):(w=l&~p,w!==0?f=De(w):M!==0?f=De(M):s||(s=l&~t,s!==0&&(f=De(s)))),f===0?0:n!==0&&n!==f&&(n&p)===0&&(p=f&-f,s=n&-n,p>=s||p===32&&(s&4194048)!==0)?n:f}function Fe(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function He(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ae(){var t=X;return X<<=1,(X&62914560)===0&&(X=4194304),t}function Je(t){for(var n=[],s=0;31>s;s++)n.push(t);return n}function je(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Xt(t,n,s,l,f,p){var M=t.pendingLanes;t.pendingLanes=s,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=s,t.entangledLanes&=s,t.errorRecoveryDisabledLanes&=s,t.shellSuspendCounter=0;var w=t.entanglements,V=t.expirationTimes,oe=t.hiddenUpdates;for(s=M&~s;0<s;){var Me=31-Ge(s),Re=1<<Me;w[Me]=0,V[Me]=-1;var fe=oe[Me];if(fe!==null)for(oe[Me]=null,Me=0;Me<fe.length;Me++){var pe=fe[Me];pe!==null&&(pe.lane&=-536870913)}s&=~Re}l!==0&&Ht(t,l,0),p!==0&&f===0&&t.tag!==0&&(t.suspendedLanes|=p&~(M&~n))}function Ht(t,n,s){t.pendingLanes|=n,t.suspendedLanes&=~n;var l=31-Ge(n);t.entangledLanes|=n,t.entanglements[l]=t.entanglements[l]|1073741824|s&261930}function jn(t,n){var s=t.entangledLanes|=n;for(t=t.entanglements;s;){var l=31-Ge(s),f=1<<l;f&n|t[l]&n&&(t[l]|=n),s&=~f}}function Hn(t,n){var s=n&-n;return s=(s&42)!==0?1:In(s),(s&(t.suspendedLanes|n))!==0?0:s}function In(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function ii(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function En(){var t=H.p;return t!==0?t:(t=window.event,t===void 0?32:H_(t.type))}function rs(t,n){var s=H.p;try{return H.p=t,n()}finally{H.p=s}}var Oi=Math.random().toString(36).slice(2),ln="__reactFiber$"+Oi,Dn="__reactProps$"+Oi,Ln="__reactContainer$"+Oi,Pi="__reactEvents$"+Oi,os="__reactListeners$"+Oi,Qs="__reactHandles$"+Oi,pa="__reactResources$"+Oi,Ji="__reactMarker$"+Oi;function $i(t){delete t[ln],delete t[Dn],delete t[Pi],delete t[os],delete t[Qs]}function ui(t){var n=t[ln];if(n)return n;for(var s=t.parentNode;s;){if(n=s[Ln]||s[ln]){if(s=n.alternate,n.child!==null||s!==null&&s.child!==null)for(t=b_(t);t!==null;){if(s=t[ln])return s;t=b_(t)}return n}t=s,s=t.parentNode}return null}function Ii(t){if(t=t[ln]||t[Ln]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function ma(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function ea(t){var n=t[pa];return n||(n=t[pa]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function dn(t){t[Ji]=!0}var Js=new Set,R={};function K(t,n){ce(t,n),ce(t+"Capture",n)}function ce(t,n){for(R[t]=n,t=0;t<n.length;t++)Js.add(n[t])}var se=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ae={},Ve={};function j(t){return on.call(Ve,t)?!0:on.call(ae,t)?!1:se.test(t)?Ve[t]=!0:(ae[t]=!0,!1)}function ne(t,n,s){if(j(n))if(s===null)t.removeAttribute(n);else{switch(typeof s){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var l=n.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+s)}}function xe(t,n,s){if(s===null)t.removeAttribute(n);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+s)}}function be(t,n,s,l){if(l===null)t.removeAttribute(s);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(s);return}t.setAttributeNS(n,s,""+l)}}function Be(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ze(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Ye(t,n,s){var l=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var f=l.get,p=l.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return f.call(this)},set:function(M){s=""+M,p.call(this,M)}}),Object.defineProperty(t,n,{enumerable:l.enumerable}),{getValue:function(){return s},setValue:function(M){s=""+M},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function lt(t){if(!t._valueTracker){var n=Ze(t)?"checked":"value";t._valueTracker=Ye(t,n,""+t[n])}}function Tt(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var s=n.getValue(),l="";return t&&(l=Ze(t)?t.checked?"true":"false":t.value),t=l,t!==s?(n.setValue(t),!0):!1}function st(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var ht=/[\n"\\]/g;function ut(t){return t.replace(ht,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Ue(t,n,s,l,f,p,M,w){t.name="",M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"?t.type=M:t.removeAttribute("type"),n!=null?M==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+Be(n)):t.value!==""+Be(n)&&(t.value=""+Be(n)):M!=="submit"&&M!=="reset"||t.removeAttribute("value"),n!=null?ot(t,M,Be(n)):s!=null?ot(t,M,Be(s)):l!=null&&t.removeAttribute("value"),f==null&&p!=null&&(t.defaultChecked=!!p),f!=null&&(t.checked=f&&typeof f!="function"&&typeof f!="symbol"),w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"?t.name=""+Be(w):t.removeAttribute("name")}function vn(t,n,s,l,f,p,M,w){if(p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"&&(t.type=p),n!=null||s!=null){if(!(p!=="submit"&&p!=="reset"||n!=null)){lt(t);return}s=s!=null?""+Be(s):"",n=n!=null?""+Be(n):s,w||n===t.value||(t.value=n),t.defaultValue=n}l=l??f,l=typeof l!="function"&&typeof l!="symbol"&&!!l,t.checked=w?t.checked:!!l,t.defaultChecked=!!l,M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"&&(t.name=M),lt(t)}function ot(t,n,s){n==="number"&&st(t.ownerDocument)===t||t.defaultValue===""+s||(t.defaultValue=""+s)}function hn(t,n,s,l){if(t=t.options,n){n={};for(var f=0;f<s.length;f++)n["$"+s[f]]=!0;for(s=0;s<t.length;s++)f=n.hasOwnProperty("$"+t[s].value),t[s].selected!==f&&(t[s].selected=f),f&&l&&(t[s].defaultSelected=!0)}else{for(s=""+Be(s),n=null,f=0;f<t.length;f++){if(t[f].value===s){t[f].selected=!0,l&&(t[f].defaultSelected=!0);return}n!==null||t[f].disabled||(n=t[f])}n!==null&&(n.selected=!0)}}function Zn(t,n,s){if(n!=null&&(n=""+Be(n),n!==t.value&&(t.value=n),s==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=s!=null?""+Be(s):""}function ai(t,n,s,l){if(n==null){if(l!=null){if(s!=null)throw Error(r(92));if(Y(l)){if(1<l.length)throw Error(r(93));l=l[0]}s=l}s==null&&(s=""),n=s}s=Be(n),t.defaultValue=s,l=t.textContent,l===s&&l!==""&&l!==null&&(t.value=l),lt(t)}function Kn(t,n){if(n){var s=t.firstChild;if(s&&s===t.lastChild&&s.nodeType===3){s.nodeValue=n;return}}t.textContent=n}var Nt=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function jt(t,n,s){var l=n.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?l?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":l?t.setProperty(n,s):typeof s!="number"||s===0||Nt.has(n)?n==="float"?t.cssFloat=s:t[n]=(""+s).trim():t[n]=s+"px"}function si(t,n,s){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,s!=null){for(var l in s)!s.hasOwnProperty(l)||n!=null&&n.hasOwnProperty(l)||(l.indexOf("--")===0?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="");for(var f in n)l=n[f],n.hasOwnProperty(f)&&s[f]!==l&&jt(t,f,l)}else for(var p in n)n.hasOwnProperty(p)&&jt(t,p,n[p])}function Ot(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var fi=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),ta=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function xi(t){return ta.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Bn(){}var wr=null;function ko(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ls=null,$s=null;function Da(t){var n=Ii(t);if(n&&(t=n.stateNode)){var s=t[Dn]||null;e:switch(t=n.stateNode,n.type){case"input":if(Ue(t,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),n=s.name,s.type==="radio"&&n!=null){for(s=t;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+ut(""+n)+'"][type="radio"]'),n=0;n<s.length;n++){var l=s[n];if(l!==t&&l.form===t.form){var f=l[Dn]||null;if(!f)throw Error(r(90));Ue(l,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(n=0;n<s.length;n++)l=s[n],l.form===t.form&&Tt(l)}break e;case"textarea":Zn(t,s.value,s.defaultValue);break e;case"select":n=s.value,n!=null&&hn(t,!!s.multiple,n,!1)}}}var Xo=!1;function nc(t,n,s){if(Xo)return t(n,s);Xo=!0;try{var l=t(n);return l}finally{if(Xo=!1,(ls!==null||$s!==null)&&(zc(),ls&&(n=ls,t=$s,$s=ls=null,Da(n),t)))for(n=0;n<t.length;n++)Da(t[n])}}function La(t,n){var s=t.stateNode;if(s===null)return null;var l=s[Dn]||null;if(l===null)return null;s=l[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(s&&typeof s!="function")throw Error(r(231,n,typeof s));return s}var Si=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Wo=!1;if(Si)try{var cs={};Object.defineProperty(cs,"passive",{get:function(){Wo=!0}}),window.addEventListener("test",cs,cs),window.removeEventListener("test",cs,cs)}catch{Wo=!1}var na=null,Yo=null,Na=null;function er(){if(Na)return Na;var t,n=Yo,s=n.length,l,f="value"in na?na.value:na.textContent,p=f.length;for(t=0;t<s&&n[t]===f[t];t++);var M=s-t;for(l=1;l<=M&&n[s-l]===f[p-l];l++);return Na=f.slice(t,1<l?1-l:void 0)}function Dr(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Lr(){return!0}function rf(){return!1}function Gn(t){function n(s,l,f,p,M){this._reactName=s,this._targetInst=f,this.type=l,this.nativeEvent=p,this.target=M,this.currentTarget=null;for(var w in t)t.hasOwnProperty(w)&&(s=t[w],this[w]=s?s(p):p[w]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?Lr:rf,this.isPropagationStopped=rf,this}return _(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=Lr)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=Lr)},persist:function(){},isPersistent:Lr}),n}var ia={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Nr=Gn(ia),tr=_({},ia,{view:0,detail:0}),of=Gn(tr),Ur,Or,pt,xn=_({},tr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:lf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==pt&&(pt&&t.type==="mousemove"?(Ur=t.screenX-pt.screenX,Or=t.screenY-pt.screenY):Or=Ur=0,pt=t),Ur)},movementY:function(t){return"movementY"in t?t.movementY:Or}}),Mi=Gn(xn),Nn=_({},xn,{dataTransfer:0}),Bi=Gn(Nn),Qn=_({},tr,{relatedTarget:0}),yi=Gn(Qn),Pr=_({},ia,{animationName:0,elapsedTime:0,pseudoElement:0}),us=Gn(Pr),fs=_({},ia,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),qo=Gn(fs),ic=_({},ia,{data:0}),Sm=Gn(ic),FS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},zS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},HS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function GS(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=HS[t])?!!n[t]:!1}function lf(){return GS}var VS=_({},tr,{key:function(t){if(t.key){var n=FS[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Dr(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?zS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:lf,charCode:function(t){return t.type==="keypress"?Dr(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Dr(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),kS=Gn(VS),XS=_({},xn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Mm=Gn(XS),WS=_({},tr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:lf}),YS=Gn(WS),qS=_({},ia,{propertyName:0,elapsedTime:0,pseudoElement:0}),jS=Gn(qS),ZS=_({},xn,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),KS=Gn(ZS),QS=_({},ia,{newState:0,oldState:0}),JS=Gn(QS),$S=[9,13,27,32],cf=Si&&"CompositionEvent"in window,jo=null;Si&&"documentMode"in document&&(jo=document.documentMode);var eM=Si&&"TextEvent"in window&&!jo,ym=Si&&(!cf||jo&&8<jo&&11>=jo),Em=" ",bm=!1;function Tm(t,n){switch(t){case"keyup":return $S.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Am(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ir=!1;function tM(t,n){switch(t){case"compositionend":return Am(n);case"keypress":return n.which!==32?null:(bm=!0,Em);case"textInput":return t=n.data,t===Em&&bm?null:t;default:return null}}function nM(t,n){if(Ir)return t==="compositionend"||!cf&&Tm(t,n)?(t=er(),Na=Yo=na=null,Ir=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return ym&&n.locale!=="ko"?null:n.data;default:return null}}var iM={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Rm(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!iM[t.type]:n==="textarea"}function Cm(t,n,s,l){ls?$s?$s.push(l):$s=[l]:ls=l,n=Yc(n,"onChange"),0<n.length&&(s=new Nr("onChange","change",null,s,l),t.push({event:s,listeners:n}))}var Zo=null,Ko=null;function aM(t){u_(t,0)}function ac(t){var n=ma(t);if(Tt(n))return t}function wm(t,n){if(t==="change")return n}var Dm=!1;if(Si){var uf;if(Si){var ff="oninput"in document;if(!ff){var Lm=document.createElement("div");Lm.setAttribute("oninput","return;"),ff=typeof Lm.oninput=="function"}uf=ff}else uf=!1;Dm=uf&&(!document.documentMode||9<document.documentMode)}function Nm(){Zo&&(Zo.detachEvent("onpropertychange",Um),Ko=Zo=null)}function Um(t){if(t.propertyName==="value"&&ac(Ko)){var n=[];Cm(n,Ko,t,ko(t)),nc(aM,n)}}function sM(t,n,s){t==="focusin"?(Nm(),Zo=n,Ko=s,Zo.attachEvent("onpropertychange",Um)):t==="focusout"&&Nm()}function rM(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ac(Ko)}function oM(t,n){if(t==="click")return ac(n)}function lM(t,n){if(t==="input"||t==="change")return ac(n)}function cM(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Ei=typeof Object.is=="function"?Object.is:cM;function Qo(t,n){if(Ei(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var s=Object.keys(t),l=Object.keys(n);if(s.length!==l.length)return!1;for(l=0;l<s.length;l++){var f=s[l];if(!on.call(n,f)||!Ei(t[f],n[f]))return!1}return!0}function Om(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Pm(t,n){var s=Om(t);t=0;for(var l;s;){if(s.nodeType===3){if(l=t+s.textContent.length,t<=n&&l>=n)return{node:s,offset:n-t};t=l}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=Om(s)}}function Im(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Im(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Bm(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=st(t.document);n instanceof t.HTMLIFrameElement;){try{var s=typeof n.contentWindow.location.href=="string"}catch{s=!1}if(s)t=n.contentWindow;else break;n=st(t.document)}return n}function df(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var uM=Si&&"documentMode"in document&&11>=document.documentMode,Br=null,hf=null,Jo=null,pf=!1;function Fm(t,n,s){var l=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;pf||Br==null||Br!==st(l)||(l=Br,"selectionStart"in l&&df(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Jo&&Qo(Jo,l)||(Jo=l,l=Yc(hf,"onSelect"),0<l.length&&(n=new Nr("onSelect","select",null,n,s),t.push({event:n,listeners:l}),n.target=Br)))}function nr(t,n){var s={};return s[t.toLowerCase()]=n.toLowerCase(),s["Webkit"+t]="webkit"+n,s["Moz"+t]="moz"+n,s}var Fr={animationend:nr("Animation","AnimationEnd"),animationiteration:nr("Animation","AnimationIteration"),animationstart:nr("Animation","AnimationStart"),transitionrun:nr("Transition","TransitionRun"),transitionstart:nr("Transition","TransitionStart"),transitioncancel:nr("Transition","TransitionCancel"),transitionend:nr("Transition","TransitionEnd")},mf={},zm={};Si&&(zm=document.createElement("div").style,"AnimationEvent"in window||(delete Fr.animationend.animation,delete Fr.animationiteration.animation,delete Fr.animationstart.animation),"TransitionEvent"in window||delete Fr.transitionend.transition);function ir(t){if(mf[t])return mf[t];if(!Fr[t])return t;var n=Fr[t],s;for(s in n)if(n.hasOwnProperty(s)&&s in zm)return mf[t]=n[s];return t}var Hm=ir("animationend"),Gm=ir("animationiteration"),Vm=ir("animationstart"),fM=ir("transitionrun"),dM=ir("transitionstart"),hM=ir("transitioncancel"),km=ir("transitionend"),Xm=new Map,gf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");gf.push("scrollEnd");function aa(t,n){Xm.set(t,n),K(n,[t])}var sc=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},Fi=[],zr=0,_f=0;function rc(){for(var t=zr,n=_f=zr=0;n<t;){var s=Fi[n];Fi[n++]=null;var l=Fi[n];Fi[n++]=null;var f=Fi[n];Fi[n++]=null;var p=Fi[n];if(Fi[n++]=null,l!==null&&f!==null){var M=l.pending;M===null?f.next=f:(f.next=M.next,M.next=f),l.pending=f}p!==0&&Wm(s,f,p)}}function oc(t,n,s,l){Fi[zr++]=t,Fi[zr++]=n,Fi[zr++]=s,Fi[zr++]=l,_f|=l,t.lanes|=l,t=t.alternate,t!==null&&(t.lanes|=l)}function vf(t,n,s,l){return oc(t,n,s,l),lc(t)}function ar(t,n){return oc(t,null,null,n),lc(t)}function Wm(t,n,s){t.lanes|=s;var l=t.alternate;l!==null&&(l.lanes|=s);for(var f=!1,p=t.return;p!==null;)p.childLanes|=s,l=p.alternate,l!==null&&(l.childLanes|=s),p.tag===22&&(t=p.stateNode,t===null||t._visibility&1||(f=!0)),t=p,p=p.return;return t.tag===3?(p=t.stateNode,f&&n!==null&&(f=31-Ge(s),t=p.hiddenUpdates,l=t[f],l===null?t[f]=[n]:l.push(n),n.lane=s|536870912),p):null}function lc(t){if(50<Sl)throw Sl=0,Rd=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Hr={};function pM(t,n,s,l){this.tag=t,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function bi(t,n,s,l){return new pM(t,n,s,l)}function xf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ua(t,n){var s=t.alternate;return s===null?(s=bi(t.tag,n,t.key,t.mode),s.elementType=t.elementType,s.type=t.type,s.stateNode=t.stateNode,s.alternate=t,t.alternate=s):(s.pendingProps=n,s.type=t.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=t.flags&65011712,s.childLanes=t.childLanes,s.lanes=t.lanes,s.child=t.child,s.memoizedProps=t.memoizedProps,s.memoizedState=t.memoizedState,s.updateQueue=t.updateQueue,n=t.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},s.sibling=t.sibling,s.index=t.index,s.ref=t.ref,s.refCleanup=t.refCleanup,s}function Ym(t,n){t.flags&=65011714;var s=t.alternate;return s===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=s.childLanes,t.lanes=s.lanes,t.child=s.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=s.memoizedProps,t.memoizedState=s.memoizedState,t.updateQueue=s.updateQueue,t.type=s.type,n=s.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function cc(t,n,s,l,f,p){var M=0;if(l=t,typeof t=="function")xf(t)&&(M=1);else if(typeof t=="string")M=xy(t,s,Le.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case U:return t=bi(31,s,n,f),t.elementType=U,t.lanes=p,t;case A:return sr(s.children,f,p,n);case y:M=8,f|=24;break;case x:return t=bi(12,s,n,f|2),t.elementType=x,t.lanes=p,t;case N:return t=bi(13,s,n,f),t.elementType=N,t.lanes=p,t;case L:return t=bi(19,s,n,f),t.elementType=L,t.lanes=p,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case P:M=10;break e;case O:M=9;break e;case C:M=11;break e;case F:M=14;break e;case T:M=16,l=null;break e}M=29,s=Error(r(130,t===null?"null":typeof t,"")),l=null}return n=bi(M,s,n,f),n.elementType=t,n.type=l,n.lanes=p,n}function sr(t,n,s,l){return t=bi(7,t,l,n),t.lanes=s,t}function Sf(t,n,s){return t=bi(6,t,null,n),t.lanes=s,t}function qm(t){var n=bi(18,null,null,0);return n.stateNode=t,n}function Mf(t,n,s){return n=bi(4,t.children!==null?t.children:[],t.key,n),n.lanes=s,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var jm=new WeakMap;function zi(t,n){if(typeof t=="object"&&t!==null){var s=jm.get(t);return s!==void 0?s:(n={value:t,source:n,stack:nn(n)},jm.set(t,n),n)}return{value:t,source:n,stack:nn(n)}}var Gr=[],Vr=0,uc=null,$o=0,Hi=[],Gi=0,ds=null,ga=1,_a="";function Oa(t,n){Gr[Vr++]=$o,Gr[Vr++]=uc,uc=t,$o=n}function Zm(t,n,s){Hi[Gi++]=ga,Hi[Gi++]=_a,Hi[Gi++]=ds,ds=t;var l=ga;t=_a;var f=32-Ge(l)-1;l&=~(1<<f),s+=1;var p=32-Ge(n)+f;if(30<p){var M=f-f%5;p=(l&(1<<M)-1).toString(32),l>>=M,f-=M,ga=1<<32-Ge(n)+f|s<<f|l,_a=p+t}else ga=1<<p|s<<f|l,_a=t}function yf(t){t.return!==null&&(Oa(t,1),Zm(t,1,0))}function Ef(t){for(;t===uc;)uc=Gr[--Vr],Gr[Vr]=null,$o=Gr[--Vr],Gr[Vr]=null;for(;t===ds;)ds=Hi[--Gi],Hi[Gi]=null,_a=Hi[--Gi],Hi[Gi]=null,ga=Hi[--Gi],Hi[Gi]=null}function Km(t,n){Hi[Gi++]=ga,Hi[Gi++]=_a,Hi[Gi++]=ds,ga=n.id,_a=n.overflow,ds=t}var Vn=null,an=null,Dt=!1,hs=null,Vi=!1,bf=Error(r(519));function ps(t){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw el(zi(n,t)),bf}function Qm(t){var n=t.stateNode,s=t.type,l=t.memoizedProps;switch(n[ln]=t,n[Dn]=l,s){case"dialog":Rt("cancel",n),Rt("close",n);break;case"iframe":case"object":case"embed":Rt("load",n);break;case"video":case"audio":for(s=0;s<yl.length;s++)Rt(yl[s],n);break;case"source":Rt("error",n);break;case"img":case"image":case"link":Rt("error",n),Rt("load",n);break;case"details":Rt("toggle",n);break;case"input":Rt("invalid",n),vn(n,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":Rt("invalid",n);break;case"textarea":Rt("invalid",n),ai(n,l.value,l.defaultValue,l.children)}s=l.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||n.textContent===""+s||l.suppressHydrationWarning===!0||p_(n.textContent,s)?(l.popover!=null&&(Rt("beforetoggle",n),Rt("toggle",n)),l.onScroll!=null&&Rt("scroll",n),l.onScrollEnd!=null&&Rt("scrollend",n),l.onClick!=null&&(n.onclick=Bn),n=!0):n=!1,n||ps(t,!0)}function Jm(t){for(Vn=t.return;Vn;)switch(Vn.tag){case 5:case 31:case 13:Vi=!1;return;case 27:case 3:Vi=!0;return;default:Vn=Vn.return}}function kr(t){if(t!==Vn)return!1;if(!Dt)return Jm(t),Dt=!0,!1;var n=t.tag,s;if((s=n!==3&&n!==27)&&((s=n===5)&&(s=t.type,s=!(s!=="form"&&s!=="button")||Vd(t.type,t.memoizedProps)),s=!s),s&&an&&ps(t),Jm(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));an=E_(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));an=E_(t)}else n===27?(n=an,Cs(t.type)?(t=qd,qd=null,an=t):an=n):an=Vn?Xi(t.stateNode.nextSibling):null;return!0}function rr(){an=Vn=null,Dt=!1}function Tf(){var t=hs;return t!==null&&(mi===null?mi=t:mi.push.apply(mi,t),hs=null),t}function el(t){hs===null?hs=[t]:hs.push(t)}var Af=B(null),or=null,Pa=null;function ms(t,n,s){Ce(Af,n._currentValue),n._currentValue=s}function Ia(t){t._currentValue=Af.current,q(Af)}function Rf(t,n,s){for(;t!==null;){var l=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,l!==null&&(l.childLanes|=n)):l!==null&&(l.childLanes&n)!==n&&(l.childLanes|=n),t===s)break;t=t.return}}function Cf(t,n,s,l){var f=t.child;for(f!==null&&(f.return=t);f!==null;){var p=f.dependencies;if(p!==null){var M=f.child;p=p.firstContext;e:for(;p!==null;){var w=p;p=f;for(var V=0;V<n.length;V++)if(w.context===n[V]){p.lanes|=s,w=p.alternate,w!==null&&(w.lanes|=s),Rf(p.return,s,t),l||(M=null);break e}p=w.next}}else if(f.tag===18){if(M=f.return,M===null)throw Error(r(341));M.lanes|=s,p=M.alternate,p!==null&&(p.lanes|=s),Rf(M,s,t),M=null}else M=f.child;if(M!==null)M.return=f;else for(M=f;M!==null;){if(M===t){M=null;break}if(f=M.sibling,f!==null){f.return=M.return,M=f;break}M=M.return}f=M}}function Xr(t,n,s,l){t=null;for(var f=n,p=!1;f!==null;){if(!p){if((f.flags&524288)!==0)p=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var M=f.alternate;if(M===null)throw Error(r(387));if(M=M.memoizedProps,M!==null){var w=f.type;Ei(f.pendingProps.value,M.value)||(t!==null?t.push(w):t=[w])}}else if(f===Te.current){if(M=f.alternate,M===null)throw Error(r(387));M.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(t!==null?t.push(Rl):t=[Rl])}f=f.return}t!==null&&Cf(n,t,s,l),n.flags|=262144}function fc(t){for(t=t.firstContext;t!==null;){if(!Ei(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function lr(t){or=t,Pa=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function kn(t){return $m(or,t)}function dc(t,n){return or===null&&lr(t),$m(t,n)}function $m(t,n){var s=n._currentValue;if(n={context:n,memoizedValue:s,next:null},Pa===null){if(t===null)throw Error(r(308));Pa=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Pa=Pa.next=n;return s}var mM=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(s,l){t.push(l)}};this.abort=function(){n.aborted=!0,t.forEach(function(s){return s()})}},gM=a.unstable_scheduleCallback,_M=a.unstable_NormalPriority,bn={$$typeof:P,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function wf(){return{controller:new mM,data:new Map,refCount:0}}function tl(t){t.refCount--,t.refCount===0&&gM(_M,function(){t.controller.abort()})}var nl=null,Df=0,Wr=0,Yr=null;function vM(t,n){if(nl===null){var s=nl=[];Df=0,Wr=Ud(),Yr={status:"pending",value:void 0,then:function(l){s.push(l)}}}return Df++,n.then(e0,e0),n}function e0(){if(--Df===0&&nl!==null){Yr!==null&&(Yr.status="fulfilled");var t=nl;nl=null,Wr=0,Yr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function xM(t,n){var s=[],l={status:"pending",value:null,reason:null,then:function(f){s.push(f)}};return t.then(function(){l.status="fulfilled",l.value=n;for(var f=0;f<s.length;f++)(0,s[f])(n)},function(f){for(l.status="rejected",l.reason=f,f=0;f<s.length;f++)(0,s[f])(void 0)}),l}var t0=z.S;z.S=function(t,n){Fg=Ut(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&vM(t,n),t0!==null&&t0(t,n)};var cr=B(null);function Lf(){var t=cr.current;return t!==null?t:Jt.pooledCache}function hc(t,n){n===null?Ce(cr,cr.current):Ce(cr,n.pool)}function n0(){var t=Lf();return t===null?null:{parent:bn._currentValue,pool:t}}var qr=Error(r(460)),Nf=Error(r(474)),pc=Error(r(542)),mc={then:function(){}};function i0(t){return t=t.status,t==="fulfilled"||t==="rejected"}function a0(t,n,s){switch(s=t[s],s===void 0?t.push(n):s!==n&&(n.then(Bn,Bn),n=s),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,r0(t),t;default:if(typeof n.status=="string")n.then(Bn,Bn);else{if(t=Jt,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(l){if(n.status==="pending"){var f=n;f.status="fulfilled",f.value=l}},function(l){if(n.status==="pending"){var f=n;f.status="rejected",f.reason=l}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,r0(t),t}throw fr=n,qr}}function ur(t){try{var n=t._init;return n(t._payload)}catch(s){throw s!==null&&typeof s=="object"&&typeof s.then=="function"?(fr=s,qr):s}}var fr=null;function s0(){if(fr===null)throw Error(r(459));var t=fr;return fr=null,t}function r0(t){if(t===qr||t===pc)throw Error(r(483))}var jr=null,il=0;function gc(t){var n=il;return il+=1,jr===null&&(jr=[]),a0(jr,t,n)}function al(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function _c(t,n){throw n.$$typeof===v?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function o0(t){function n($,W){if(t){var re=$.deletions;re===null?($.deletions=[W],$.flags|=16):re.push(W)}}function s($,W){if(!t)return null;for(;W!==null;)n($,W),W=W.sibling;return null}function l($){for(var W=new Map;$!==null;)$.key!==null?W.set($.key,$):W.set($.index,$),$=$.sibling;return W}function f($,W){return $=Ua($,W),$.index=0,$.sibling=null,$}function p($,W,re){return $.index=re,t?(re=$.alternate,re!==null?(re=re.index,re<W?($.flags|=67108866,W):re):($.flags|=67108866,W)):($.flags|=1048576,W)}function M($){return t&&$.alternate===null&&($.flags|=67108866),$}function w($,W,re,Ee){return W===null||W.tag!==6?(W=Sf(re,$.mode,Ee),W.return=$,W):(W=f(W,re),W.return=$,W)}function V($,W,re,Ee){var nt=re.type;return nt===A?Me($,W,re.props.children,Ee,re.key):W!==null&&(W.elementType===nt||typeof nt=="object"&&nt!==null&&nt.$$typeof===T&&ur(nt)===W.type)?(W=f(W,re.props),al(W,re),W.return=$,W):(W=cc(re.type,re.key,re.props,null,$.mode,Ee),al(W,re),W.return=$,W)}function oe($,W,re,Ee){return W===null||W.tag!==4||W.stateNode.containerInfo!==re.containerInfo||W.stateNode.implementation!==re.implementation?(W=Mf(re,$.mode,Ee),W.return=$,W):(W=f(W,re.children||[]),W.return=$,W)}function Me($,W,re,Ee,nt){return W===null||W.tag!==7?(W=sr(re,$.mode,Ee,nt),W.return=$,W):(W=f(W,re),W.return=$,W)}function Re($,W,re){if(typeof W=="string"&&W!==""||typeof W=="number"||typeof W=="bigint")return W=Sf(""+W,$.mode,re),W.return=$,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case S:return re=cc(W.type,W.key,W.props,null,$.mode,re),al(re,W),re.return=$,re;case E:return W=Mf(W,$.mode,re),W.return=$,W;case T:return W=ur(W),Re($,W,re)}if(Y(W)||Q(W))return W=sr(W,$.mode,re,null),W.return=$,W;if(typeof W.then=="function")return Re($,gc(W),re);if(W.$$typeof===P)return Re($,dc($,W),re);_c($,W)}return null}function fe($,W,re,Ee){var nt=W!==null?W.key:null;if(typeof re=="string"&&re!==""||typeof re=="number"||typeof re=="bigint")return nt!==null?null:w($,W,""+re,Ee);if(typeof re=="object"&&re!==null){switch(re.$$typeof){case S:return re.key===nt?V($,W,re,Ee):null;case E:return re.key===nt?oe($,W,re,Ee):null;case T:return re=ur(re),fe($,W,re,Ee)}if(Y(re)||Q(re))return nt!==null?null:Me($,W,re,Ee,null);if(typeof re.then=="function")return fe($,W,gc(re),Ee);if(re.$$typeof===P)return fe($,W,dc($,re),Ee);_c($,re)}return null}function pe($,W,re,Ee,nt){if(typeof Ee=="string"&&Ee!==""||typeof Ee=="number"||typeof Ee=="bigint")return $=$.get(re)||null,w(W,$,""+Ee,nt);if(typeof Ee=="object"&&Ee!==null){switch(Ee.$$typeof){case S:return $=$.get(Ee.key===null?re:Ee.key)||null,V(W,$,Ee,nt);case E:return $=$.get(Ee.key===null?re:Ee.key)||null,oe(W,$,Ee,nt);case T:return Ee=ur(Ee),pe($,W,re,Ee,nt)}if(Y(Ee)||Q(Ee))return $=$.get(re)||null,Me(W,$,Ee,nt,null);if(typeof Ee.then=="function")return pe($,W,re,gc(Ee),nt);if(Ee.$$typeof===P)return pe($,W,re,dc(W,Ee),nt);_c(W,Ee)}return null}function $e($,W,re,Ee){for(var nt=null,Bt=null,et=W,_t=W=0,wt=null;et!==null&&_t<re.length;_t++){et.index>_t?(wt=et,et=null):wt=et.sibling;var Ft=fe($,et,re[_t],Ee);if(Ft===null){et===null&&(et=wt);break}t&&et&&Ft.alternate===null&&n($,et),W=p(Ft,W,_t),Bt===null?nt=Ft:Bt.sibling=Ft,Bt=Ft,et=wt}if(_t===re.length)return s($,et),Dt&&Oa($,_t),nt;if(et===null){for(;_t<re.length;_t++)et=Re($,re[_t],Ee),et!==null&&(W=p(et,W,_t),Bt===null?nt=et:Bt.sibling=et,Bt=et);return Dt&&Oa($,_t),nt}for(et=l(et);_t<re.length;_t++)wt=pe(et,$,_t,re[_t],Ee),wt!==null&&(t&&wt.alternate!==null&&et.delete(wt.key===null?_t:wt.key),W=p(wt,W,_t),Bt===null?nt=wt:Bt.sibling=wt,Bt=wt);return t&&et.forEach(function(Us){return n($,Us)}),Dt&&Oa($,_t),nt}function at($,W,re,Ee){if(re==null)throw Error(r(151));for(var nt=null,Bt=null,et=W,_t=W=0,wt=null,Ft=re.next();et!==null&&!Ft.done;_t++,Ft=re.next()){et.index>_t?(wt=et,et=null):wt=et.sibling;var Us=fe($,et,Ft.value,Ee);if(Us===null){et===null&&(et=wt);break}t&&et&&Us.alternate===null&&n($,et),W=p(Us,W,_t),Bt===null?nt=Us:Bt.sibling=Us,Bt=Us,et=wt}if(Ft.done)return s($,et),Dt&&Oa($,_t),nt;if(et===null){for(;!Ft.done;_t++,Ft=re.next())Ft=Re($,Ft.value,Ee),Ft!==null&&(W=p(Ft,W,_t),Bt===null?nt=Ft:Bt.sibling=Ft,Bt=Ft);return Dt&&Oa($,_t),nt}for(et=l(et);!Ft.done;_t++,Ft=re.next())Ft=pe(et,$,_t,Ft.value,Ee),Ft!==null&&(t&&Ft.alternate!==null&&et.delete(Ft.key===null?_t:Ft.key),W=p(Ft,W,_t),Bt===null?nt=Ft:Bt.sibling=Ft,Bt=Ft);return t&&et.forEach(function(Dy){return n($,Dy)}),Dt&&Oa($,_t),nt}function Qt($,W,re,Ee){if(typeof re=="object"&&re!==null&&re.type===A&&re.key===null&&(re=re.props.children),typeof re=="object"&&re!==null){switch(re.$$typeof){case S:e:{for(var nt=re.key;W!==null;){if(W.key===nt){if(nt=re.type,nt===A){if(W.tag===7){s($,W.sibling),Ee=f(W,re.props.children),Ee.return=$,$=Ee;break e}}else if(W.elementType===nt||typeof nt=="object"&&nt!==null&&nt.$$typeof===T&&ur(nt)===W.type){s($,W.sibling),Ee=f(W,re.props),al(Ee,re),Ee.return=$,$=Ee;break e}s($,W);break}else n($,W);W=W.sibling}re.type===A?(Ee=sr(re.props.children,$.mode,Ee,re.key),Ee.return=$,$=Ee):(Ee=cc(re.type,re.key,re.props,null,$.mode,Ee),al(Ee,re),Ee.return=$,$=Ee)}return M($);case E:e:{for(nt=re.key;W!==null;){if(W.key===nt)if(W.tag===4&&W.stateNode.containerInfo===re.containerInfo&&W.stateNode.implementation===re.implementation){s($,W.sibling),Ee=f(W,re.children||[]),Ee.return=$,$=Ee;break e}else{s($,W);break}else n($,W);W=W.sibling}Ee=Mf(re,$.mode,Ee),Ee.return=$,$=Ee}return M($);case T:return re=ur(re),Qt($,W,re,Ee)}if(Y(re))return $e($,W,re,Ee);if(Q(re)){if(nt=Q(re),typeof nt!="function")throw Error(r(150));return re=nt.call(re),at($,W,re,Ee)}if(typeof re.then=="function")return Qt($,W,gc(re),Ee);if(re.$$typeof===P)return Qt($,W,dc($,re),Ee);_c($,re)}return typeof re=="string"&&re!==""||typeof re=="number"||typeof re=="bigint"?(re=""+re,W!==null&&W.tag===6?(s($,W.sibling),Ee=f(W,re),Ee.return=$,$=Ee):(s($,W),Ee=Sf(re,$.mode,Ee),Ee.return=$,$=Ee),M($)):s($,W)}return function($,W,re,Ee){try{il=0;var nt=Qt($,W,re,Ee);return jr=null,nt}catch(et){if(et===qr||et===pc)throw et;var Bt=bi(29,et,null,$.mode);return Bt.lanes=Ee,Bt.return=$,Bt}finally{}}}var dr=o0(!0),l0=o0(!1),gs=!1;function Uf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Of(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function _s(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function vs(t,n,s){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(Gt&2)!==0){var f=l.pending;return f===null?n.next=n:(n.next=f.next,f.next=n),l.pending=n,n=lc(t),Wm(t,null,s),n}return oc(t,l,n,s),lc(t)}function sl(t,n,s){if(n=n.updateQueue,n!==null&&(n=n.shared,(s&4194048)!==0)){var l=n.lanes;l&=t.pendingLanes,s|=l,n.lanes=s,jn(t,s)}}function Pf(t,n){var s=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,s===l)){var f=null,p=null;if(s=s.firstBaseUpdate,s!==null){do{var M={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};p===null?f=p=M:p=p.next=M,s=s.next}while(s!==null);p===null?f=p=n:p=p.next=n}else f=p=n;s={baseState:l.baseState,firstBaseUpdate:f,lastBaseUpdate:p,shared:l.shared,callbacks:l.callbacks},t.updateQueue=s;return}t=s.lastBaseUpdate,t===null?s.firstBaseUpdate=n:t.next=n,s.lastBaseUpdate=n}var If=!1;function rl(){if(If){var t=Yr;if(t!==null)throw t}}function ol(t,n,s,l){If=!1;var f=t.updateQueue;gs=!1;var p=f.firstBaseUpdate,M=f.lastBaseUpdate,w=f.shared.pending;if(w!==null){f.shared.pending=null;var V=w,oe=V.next;V.next=null,M===null?p=oe:M.next=oe,M=V;var Me=t.alternate;Me!==null&&(Me=Me.updateQueue,w=Me.lastBaseUpdate,w!==M&&(w===null?Me.firstBaseUpdate=oe:w.next=oe,Me.lastBaseUpdate=V))}if(p!==null){var Re=f.baseState;M=0,Me=oe=V=null,w=p;do{var fe=w.lane&-536870913,pe=fe!==w.lane;if(pe?(Ct&fe)===fe:(l&fe)===fe){fe!==0&&fe===Wr&&(If=!0),Me!==null&&(Me=Me.next={lane:0,tag:w.tag,payload:w.payload,callback:null,next:null});e:{var $e=t,at=w;fe=n;var Qt=s;switch(at.tag){case 1:if($e=at.payload,typeof $e=="function"){Re=$e.call(Qt,Re,fe);break e}Re=$e;break e;case 3:$e.flags=$e.flags&-65537|128;case 0:if($e=at.payload,fe=typeof $e=="function"?$e.call(Qt,Re,fe):$e,fe==null)break e;Re=_({},Re,fe);break e;case 2:gs=!0}}fe=w.callback,fe!==null&&(t.flags|=64,pe&&(t.flags|=8192),pe=f.callbacks,pe===null?f.callbacks=[fe]:pe.push(fe))}else pe={lane:fe,tag:w.tag,payload:w.payload,callback:w.callback,next:null},Me===null?(oe=Me=pe,V=Re):Me=Me.next=pe,M|=fe;if(w=w.next,w===null){if(w=f.shared.pending,w===null)break;pe=w,w=pe.next,pe.next=null,f.lastBaseUpdate=pe,f.shared.pending=null}}while(!0);Me===null&&(V=Re),f.baseState=V,f.firstBaseUpdate=oe,f.lastBaseUpdate=Me,p===null&&(f.shared.lanes=0),Es|=M,t.lanes=M,t.memoizedState=Re}}function c0(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function u0(t,n){var s=t.callbacks;if(s!==null)for(t.callbacks=null,t=0;t<s.length;t++)c0(s[t],n)}var Zr=B(null),vc=B(0);function f0(t,n){t=Wa,Ce(vc,t),Ce(Zr,n),Wa=t|n.baseLanes}function Bf(){Ce(vc,Wa),Ce(Zr,Zr.current)}function Ff(){Wa=vc.current,q(Zr),q(vc)}var Ti=B(null),ki=null;function xs(t){var n=t.alternate;Ce(Sn,Sn.current&1),Ce(Ti,t),ki===null&&(n===null||Zr.current!==null||n.memoizedState!==null)&&(ki=t)}function zf(t){Ce(Sn,Sn.current),Ce(Ti,t),ki===null&&(ki=t)}function d0(t){t.tag===22?(Ce(Sn,Sn.current),Ce(Ti,t),ki===null&&(ki=t)):Ss()}function Ss(){Ce(Sn,Sn.current),Ce(Ti,Ti.current)}function Ai(t){q(Ti),ki===t&&(ki=null),q(Sn)}var Sn=B(0);function xc(t){for(var n=t;n!==null;){if(n.tag===13){var s=n.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||Wd(s)||Yd(s)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Ba=0,mt=null,Zt=null,Tn=null,Sc=!1,Kr=!1,hr=!1,Mc=0,ll=0,Qr=null,SM=0;function pn(){throw Error(r(321))}function Hf(t,n){if(n===null)return!1;for(var s=0;s<n.length&&s<t.length;s++)if(!Ei(t[s],n[s]))return!1;return!0}function Gf(t,n,s,l,f,p){return Ba=p,mt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,z.H=t===null||t.memoizedState===null?Z0:nd,hr=!1,p=s(l,f),hr=!1,Kr&&(p=p0(n,s,l,f)),h0(t),p}function h0(t){z.H=fl;var n=Zt!==null&&Zt.next!==null;if(Ba=0,Tn=Zt=mt=null,Sc=!1,ll=0,Qr=null,n)throw Error(r(300));t===null||An||(t=t.dependencies,t!==null&&fc(t)&&(An=!0))}function p0(t,n,s,l){mt=t;var f=0;do{if(Kr&&(Qr=null),ll=0,Kr=!1,25<=f)throw Error(r(301));if(f+=1,Tn=Zt=null,t.updateQueue!=null){var p=t.updateQueue;p.lastEffect=null,p.events=null,p.stores=null,p.memoCache!=null&&(p.memoCache.index=0)}z.H=K0,p=n(s,l)}while(Kr);return p}function MM(){var t=z.H,n=t.useState()[0];return n=typeof n.then=="function"?cl(n):n,t=t.useState()[0],(Zt!==null?Zt.memoizedState:null)!==t&&(mt.flags|=1024),n}function Vf(){var t=Mc!==0;return Mc=0,t}function kf(t,n,s){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~s}function Xf(t){if(Sc){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Sc=!1}Ba=0,Tn=Zt=mt=null,Kr=!1,ll=Mc=0,Qr=null}function ri(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Tn===null?mt.memoizedState=Tn=t:Tn=Tn.next=t,Tn}function Mn(){if(Zt===null){var t=mt.alternate;t=t!==null?t.memoizedState:null}else t=Zt.next;var n=Tn===null?mt.memoizedState:Tn.next;if(n!==null)Tn=n,Zt=t;else{if(t===null)throw mt.alternate===null?Error(r(467)):Error(r(310));Zt=t,t={memoizedState:Zt.memoizedState,baseState:Zt.baseState,baseQueue:Zt.baseQueue,queue:Zt.queue,next:null},Tn===null?mt.memoizedState=Tn=t:Tn=Tn.next=t}return Tn}function yc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function cl(t){var n=ll;return ll+=1,Qr===null&&(Qr=[]),t=a0(Qr,t,n),n=mt,(Tn===null?n.memoizedState:Tn.next)===null&&(n=n.alternate,z.H=n===null||n.memoizedState===null?Z0:nd),t}function Ec(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return cl(t);if(t.$$typeof===P)return kn(t)}throw Error(r(438,String(t)))}function Wf(t){var n=null,s=mt.updateQueue;if(s!==null&&(n=s.memoCache),n==null){var l=mt.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(n={data:l.data.map(function(f){return f.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),s===null&&(s=yc(),mt.updateQueue=s),s.memoCache=n,s=n.data[n.index],s===void 0)for(s=n.data[n.index]=Array(t),l=0;l<t;l++)s[l]=k;return n.index++,s}function Fa(t,n){return typeof n=="function"?n(t):n}function bc(t){var n=Mn();return Yf(n,Zt,t)}function Yf(t,n,s){var l=t.queue;if(l===null)throw Error(r(311));l.lastRenderedReducer=s;var f=t.baseQueue,p=l.pending;if(p!==null){if(f!==null){var M=f.next;f.next=p.next,p.next=M}n.baseQueue=f=p,l.pending=null}if(p=t.baseState,f===null)t.memoizedState=p;else{n=f.next;var w=M=null,V=null,oe=n,Me=!1;do{var Re=oe.lane&-536870913;if(Re!==oe.lane?(Ct&Re)===Re:(Ba&Re)===Re){var fe=oe.revertLane;if(fe===0)V!==null&&(V=V.next={lane:0,revertLane:0,gesture:null,action:oe.action,hasEagerState:oe.hasEagerState,eagerState:oe.eagerState,next:null}),Re===Wr&&(Me=!0);else if((Ba&fe)===fe){oe=oe.next,fe===Wr&&(Me=!0);continue}else Re={lane:0,revertLane:oe.revertLane,gesture:null,action:oe.action,hasEagerState:oe.hasEagerState,eagerState:oe.eagerState,next:null},V===null?(w=V=Re,M=p):V=V.next=Re,mt.lanes|=fe,Es|=fe;Re=oe.action,hr&&s(p,Re),p=oe.hasEagerState?oe.eagerState:s(p,Re)}else fe={lane:Re,revertLane:oe.revertLane,gesture:oe.gesture,action:oe.action,hasEagerState:oe.hasEagerState,eagerState:oe.eagerState,next:null},V===null?(w=V=fe,M=p):V=V.next=fe,mt.lanes|=Re,Es|=Re;oe=oe.next}while(oe!==null&&oe!==n);if(V===null?M=p:V.next=w,!Ei(p,t.memoizedState)&&(An=!0,Me&&(s=Yr,s!==null)))throw s;t.memoizedState=p,t.baseState=M,t.baseQueue=V,l.lastRenderedState=p}return f===null&&(l.lanes=0),[t.memoizedState,l.dispatch]}function qf(t){var n=Mn(),s=n.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=t;var l=s.dispatch,f=s.pending,p=n.memoizedState;if(f!==null){s.pending=null;var M=f=f.next;do p=t(p,M.action),M=M.next;while(M!==f);Ei(p,n.memoizedState)||(An=!0),n.memoizedState=p,n.baseQueue===null&&(n.baseState=p),s.lastRenderedState=p}return[p,l]}function m0(t,n,s){var l=mt,f=Mn(),p=Dt;if(p){if(s===void 0)throw Error(r(407));s=s()}else s=n();var M=!Ei((Zt||f).memoizedState,s);if(M&&(f.memoizedState=s,An=!0),f=f.queue,Kf(v0.bind(null,l,f,t),[t]),f.getSnapshot!==n||M||Tn!==null&&Tn.memoizedState.tag&1){if(l.flags|=2048,Jr(9,{destroy:void 0},_0.bind(null,l,f,s,n),null),Jt===null)throw Error(r(349));p||(Ba&127)!==0||g0(l,n,s)}return s}function g0(t,n,s){t.flags|=16384,t={getSnapshot:n,value:s},n=mt.updateQueue,n===null?(n=yc(),mt.updateQueue=n,n.stores=[t]):(s=n.stores,s===null?n.stores=[t]:s.push(t))}function _0(t,n,s,l){n.value=s,n.getSnapshot=l,x0(n)&&S0(t)}function v0(t,n,s){return s(function(){x0(n)&&S0(t)})}function x0(t){var n=t.getSnapshot;t=t.value;try{var s=n();return!Ei(t,s)}catch{return!0}}function S0(t){var n=ar(t,2);n!==null&&gi(n,t,2)}function jf(t){var n=ri();if(typeof t=="function"){var s=t;if(t=s(),hr){Ie(!0);try{s()}finally{Ie(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fa,lastRenderedState:t},n}function M0(t,n,s,l){return t.baseState=s,Yf(t,Zt,typeof l=="function"?l:Fa)}function yM(t,n,s,l,f){if(Rc(t))throw Error(r(485));if(t=n.action,t!==null){var p={payload:f,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(M){p.listeners.push(M)}};z.T!==null?s(!0):p.isTransition=!1,l(p),s=n.pending,s===null?(p.next=n.pending=p,y0(n,p)):(p.next=s.next,n.pending=s.next=p)}}function y0(t,n){var s=n.action,l=n.payload,f=t.state;if(n.isTransition){var p=z.T,M={};z.T=M;try{var w=s(f,l),V=z.S;V!==null&&V(M,w),E0(t,n,w)}catch(oe){Zf(t,n,oe)}finally{p!==null&&M.types!==null&&(p.types=M.types),z.T=p}}else try{p=s(f,l),E0(t,n,p)}catch(oe){Zf(t,n,oe)}}function E0(t,n,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(l){b0(t,n,l)},function(l){return Zf(t,n,l)}):b0(t,n,s)}function b0(t,n,s){n.status="fulfilled",n.value=s,T0(n),t.state=s,n=t.pending,n!==null&&(s=n.next,s===n?t.pending=null:(s=s.next,n.next=s,y0(t,s)))}function Zf(t,n,s){var l=t.pending;if(t.pending=null,l!==null){l=l.next;do n.status="rejected",n.reason=s,T0(n),n=n.next;while(n!==l)}t.action=null}function T0(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function A0(t,n){return n}function R0(t,n){if(Dt){var s=Jt.formState;if(s!==null){e:{var l=mt;if(Dt){if(an){t:{for(var f=an,p=Vi;f.nodeType!==8;){if(!p){f=null;break t}if(f=Xi(f.nextSibling),f===null){f=null;break t}}p=f.data,f=p==="F!"||p==="F"?f:null}if(f){an=Xi(f.nextSibling),l=f.data==="F!";break e}}ps(l)}l=!1}l&&(n=s[0])}}return s=ri(),s.memoizedState=s.baseState=n,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:A0,lastRenderedState:n},s.queue=l,s=Y0.bind(null,mt,l),l.dispatch=s,l=jf(!1),p=td.bind(null,mt,!1,l.queue),l=ri(),f={state:n,dispatch:null,action:t,pending:null},l.queue=f,s=yM.bind(null,mt,f,p,s),f.dispatch=s,l.memoizedState=t,[n,s,!1]}function C0(t){var n=Mn();return w0(n,Zt,t)}function w0(t,n,s){if(n=Yf(t,n,A0)[0],t=bc(Fa)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var l=cl(n)}catch(M){throw M===qr?pc:M}else l=n;n=Mn();var f=n.queue,p=f.dispatch;return s!==n.memoizedState&&(mt.flags|=2048,Jr(9,{destroy:void 0},EM.bind(null,f,s),null)),[l,p,t]}function EM(t,n){t.action=n}function D0(t){var n=Mn(),s=Zt;if(s!==null)return w0(n,s,t);Mn(),n=n.memoizedState,s=Mn();var l=s.queue.dispatch;return s.memoizedState=t,[n,l,!1]}function Jr(t,n,s,l){return t={tag:t,create:s,deps:l,inst:n,next:null},n=mt.updateQueue,n===null&&(n=yc(),mt.updateQueue=n),s=n.lastEffect,s===null?n.lastEffect=t.next=t:(l=s.next,s.next=t,t.next=l,n.lastEffect=t),t}function L0(){return Mn().memoizedState}function Tc(t,n,s,l){var f=ri();mt.flags|=t,f.memoizedState=Jr(1|n,{destroy:void 0},s,l===void 0?null:l)}function Ac(t,n,s,l){var f=Mn();l=l===void 0?null:l;var p=f.memoizedState.inst;Zt!==null&&l!==null&&Hf(l,Zt.memoizedState.deps)?f.memoizedState=Jr(n,p,s,l):(mt.flags|=t,f.memoizedState=Jr(1|n,p,s,l))}function N0(t,n){Tc(8390656,8,t,n)}function Kf(t,n){Ac(2048,8,t,n)}function bM(t){mt.flags|=4;var n=mt.updateQueue;if(n===null)n=yc(),mt.updateQueue=n,n.events=[t];else{var s=n.events;s===null?n.events=[t]:s.push(t)}}function U0(t){var n=Mn().memoizedState;return bM({ref:n,nextImpl:t}),function(){if((Gt&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function O0(t,n){return Ac(4,2,t,n)}function P0(t,n){return Ac(4,4,t,n)}function I0(t,n){if(typeof n=="function"){t=t();var s=n(t);return function(){typeof s=="function"?s():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function B0(t,n,s){s=s!=null?s.concat([t]):null,Ac(4,4,I0.bind(null,n,t),s)}function Qf(){}function F0(t,n){var s=Mn();n=n===void 0?null:n;var l=s.memoizedState;return n!==null&&Hf(n,l[1])?l[0]:(s.memoizedState=[t,n],t)}function z0(t,n){var s=Mn();n=n===void 0?null:n;var l=s.memoizedState;if(n!==null&&Hf(n,l[1]))return l[0];if(l=t(),hr){Ie(!0);try{t()}finally{Ie(!1)}}return s.memoizedState=[l,n],l}function Jf(t,n,s){return s===void 0||(Ba&1073741824)!==0&&(Ct&261930)===0?t.memoizedState=n:(t.memoizedState=s,t=Hg(),mt.lanes|=t,Es|=t,s)}function H0(t,n,s,l){return Ei(s,n)?s:Zr.current!==null?(t=Jf(t,s,l),Ei(t,n)||(An=!0),t):(Ba&42)===0||(Ba&1073741824)!==0&&(Ct&261930)===0?(An=!0,t.memoizedState=s):(t=Hg(),mt.lanes|=t,Es|=t,n)}function G0(t,n,s,l,f){var p=H.p;H.p=p!==0&&8>p?p:8;var M=z.T,w={};z.T=w,td(t,!1,n,s);try{var V=f(),oe=z.S;if(oe!==null&&oe(w,V),V!==null&&typeof V=="object"&&typeof V.then=="function"){var Me=xM(V,l);ul(t,n,Me,wi(t))}else ul(t,n,l,wi(t))}catch(Re){ul(t,n,{then:function(){},status:"rejected",reason:Re},wi())}finally{H.p=p,M!==null&&w.types!==null&&(M.types=w.types),z.T=M}}function TM(){}function $f(t,n,s,l){if(t.tag!==5)throw Error(r(476));var f=V0(t).queue;G0(t,f,n,J,s===null?TM:function(){return k0(t),s(l)})}function V0(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:J,baseState:J,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fa,lastRenderedState:J},next:null};var s={};return n.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fa,lastRenderedState:s},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function k0(t){var n=V0(t);n.next===null&&(n=t.alternate.memoizedState),ul(t,n.next.queue,{},wi())}function ed(){return kn(Rl)}function X0(){return Mn().memoizedState}function W0(){return Mn().memoizedState}function AM(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var s=wi();t=_s(s);var l=vs(n,t,s);l!==null&&(gi(l,n,s),sl(l,n,s)),n={cache:wf()},t.payload=n;return}n=n.return}}function RM(t,n,s){var l=wi();s={lane:l,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},Rc(t)?q0(n,s):(s=vf(t,n,s,l),s!==null&&(gi(s,t,l),j0(s,n,l)))}function Y0(t,n,s){var l=wi();ul(t,n,s,l)}function ul(t,n,s,l){var f={lane:l,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null};if(Rc(t))q0(n,f);else{var p=t.alternate;if(t.lanes===0&&(p===null||p.lanes===0)&&(p=n.lastRenderedReducer,p!==null))try{var M=n.lastRenderedState,w=p(M,s);if(f.hasEagerState=!0,f.eagerState=w,Ei(w,M))return oc(t,n,f,0),Jt===null&&rc(),!1}catch{}finally{}if(s=vf(t,n,f,l),s!==null)return gi(s,t,l),j0(s,n,l),!0}return!1}function td(t,n,s,l){if(l={lane:2,revertLane:Ud(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Rc(t)){if(n)throw Error(r(479))}else n=vf(t,s,l,2),n!==null&&gi(n,t,2)}function Rc(t){var n=t.alternate;return t===mt||n!==null&&n===mt}function q0(t,n){Kr=Sc=!0;var s=t.pending;s===null?n.next=n:(n.next=s.next,s.next=n),t.pending=n}function j0(t,n,s){if((s&4194048)!==0){var l=n.lanes;l&=t.pendingLanes,s|=l,n.lanes=s,jn(t,s)}}var fl={readContext:kn,use:Ec,useCallback:pn,useContext:pn,useEffect:pn,useImperativeHandle:pn,useLayoutEffect:pn,useInsertionEffect:pn,useMemo:pn,useReducer:pn,useRef:pn,useState:pn,useDebugValue:pn,useDeferredValue:pn,useTransition:pn,useSyncExternalStore:pn,useId:pn,useHostTransitionStatus:pn,useFormState:pn,useActionState:pn,useOptimistic:pn,useMemoCache:pn,useCacheRefresh:pn};fl.useEffectEvent=pn;var Z0={readContext:kn,use:Ec,useCallback:function(t,n){return ri().memoizedState=[t,n===void 0?null:n],t},useContext:kn,useEffect:N0,useImperativeHandle:function(t,n,s){s=s!=null?s.concat([t]):null,Tc(4194308,4,I0.bind(null,n,t),s)},useLayoutEffect:function(t,n){return Tc(4194308,4,t,n)},useInsertionEffect:function(t,n){Tc(4,2,t,n)},useMemo:function(t,n){var s=ri();n=n===void 0?null:n;var l=t();if(hr){Ie(!0);try{t()}finally{Ie(!1)}}return s.memoizedState=[l,n],l},useReducer:function(t,n,s){var l=ri();if(s!==void 0){var f=s(n);if(hr){Ie(!0);try{s(n)}finally{Ie(!1)}}}else f=n;return l.memoizedState=l.baseState=f,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:f},l.queue=t,t=t.dispatch=RM.bind(null,mt,t),[l.memoizedState,t]},useRef:function(t){var n=ri();return t={current:t},n.memoizedState=t},useState:function(t){t=jf(t);var n=t.queue,s=Y0.bind(null,mt,n);return n.dispatch=s,[t.memoizedState,s]},useDebugValue:Qf,useDeferredValue:function(t,n){var s=ri();return Jf(s,t,n)},useTransition:function(){var t=jf(!1);return t=G0.bind(null,mt,t.queue,!0,!1),ri().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,s){var l=mt,f=ri();if(Dt){if(s===void 0)throw Error(r(407));s=s()}else{if(s=n(),Jt===null)throw Error(r(349));(Ct&127)!==0||g0(l,n,s)}f.memoizedState=s;var p={value:s,getSnapshot:n};return f.queue=p,N0(v0.bind(null,l,p,t),[t]),l.flags|=2048,Jr(9,{destroy:void 0},_0.bind(null,l,p,s,n),null),s},useId:function(){var t=ri(),n=Jt.identifierPrefix;if(Dt){var s=_a,l=ga;s=(l&~(1<<32-Ge(l)-1)).toString(32)+s,n="_"+n+"R_"+s,s=Mc++,0<s&&(n+="H"+s.toString(32)),n+="_"}else s=SM++,n="_"+n+"r_"+s.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:ed,useFormState:R0,useActionState:R0,useOptimistic:function(t){var n=ri();n.memoizedState=n.baseState=t;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=s,n=td.bind(null,mt,!0,s),s.dispatch=n,[t,n]},useMemoCache:Wf,useCacheRefresh:function(){return ri().memoizedState=AM.bind(null,mt)},useEffectEvent:function(t){var n=ri(),s={impl:t};return n.memoizedState=s,function(){if((Gt&2)!==0)throw Error(r(440));return s.impl.apply(void 0,arguments)}}},nd={readContext:kn,use:Ec,useCallback:F0,useContext:kn,useEffect:Kf,useImperativeHandle:B0,useInsertionEffect:O0,useLayoutEffect:P0,useMemo:z0,useReducer:bc,useRef:L0,useState:function(){return bc(Fa)},useDebugValue:Qf,useDeferredValue:function(t,n){var s=Mn();return H0(s,Zt.memoizedState,t,n)},useTransition:function(){var t=bc(Fa)[0],n=Mn().memoizedState;return[typeof t=="boolean"?t:cl(t),n]},useSyncExternalStore:m0,useId:X0,useHostTransitionStatus:ed,useFormState:C0,useActionState:C0,useOptimistic:function(t,n){var s=Mn();return M0(s,Zt,t,n)},useMemoCache:Wf,useCacheRefresh:W0};nd.useEffectEvent=U0;var K0={readContext:kn,use:Ec,useCallback:F0,useContext:kn,useEffect:Kf,useImperativeHandle:B0,useInsertionEffect:O0,useLayoutEffect:P0,useMemo:z0,useReducer:qf,useRef:L0,useState:function(){return qf(Fa)},useDebugValue:Qf,useDeferredValue:function(t,n){var s=Mn();return Zt===null?Jf(s,t,n):H0(s,Zt.memoizedState,t,n)},useTransition:function(){var t=qf(Fa)[0],n=Mn().memoizedState;return[typeof t=="boolean"?t:cl(t),n]},useSyncExternalStore:m0,useId:X0,useHostTransitionStatus:ed,useFormState:D0,useActionState:D0,useOptimistic:function(t,n){var s=Mn();return Zt!==null?M0(s,Zt,t,n):(s.baseState=t,[t,s.queue.dispatch])},useMemoCache:Wf,useCacheRefresh:W0};K0.useEffectEvent=U0;function id(t,n,s,l){n=t.memoizedState,s=s(l,n),s=s==null?n:_({},n,s),t.memoizedState=s,t.lanes===0&&(t.updateQueue.baseState=s)}var ad={enqueueSetState:function(t,n,s){t=t._reactInternals;var l=wi(),f=_s(l);f.payload=n,s!=null&&(f.callback=s),n=vs(t,f,l),n!==null&&(gi(n,t,l),sl(n,t,l))},enqueueReplaceState:function(t,n,s){t=t._reactInternals;var l=wi(),f=_s(l);f.tag=1,f.payload=n,s!=null&&(f.callback=s),n=vs(t,f,l),n!==null&&(gi(n,t,l),sl(n,t,l))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var s=wi(),l=_s(s);l.tag=2,n!=null&&(l.callback=n),n=vs(t,l,s),n!==null&&(gi(n,t,s),sl(n,t,s))}};function Q0(t,n,s,l,f,p,M){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,p,M):n.prototype&&n.prototype.isPureReactComponent?!Qo(s,l)||!Qo(f,p):!0}function J0(t,n,s,l){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(s,l),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(s,l),n.state!==t&&ad.enqueueReplaceState(n,n.state,null)}function pr(t,n){var s=n;if("ref"in n){s={};for(var l in n)l!=="ref"&&(s[l]=n[l])}if(t=t.defaultProps){s===n&&(s=_({},s));for(var f in t)s[f]===void 0&&(s[f]=t[f])}return s}function $0(t){sc(t)}function eg(t){console.error(t)}function tg(t){sc(t)}function Cc(t,n){try{var s=t.onUncaughtError;s(n.value,{componentStack:n.stack})}catch(l){setTimeout(function(){throw l})}}function ng(t,n,s){try{var l=t.onCaughtError;l(s.value,{componentStack:s.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function sd(t,n,s){return s=_s(s),s.tag=3,s.payload={element:null},s.callback=function(){Cc(t,n)},s}function ig(t){return t=_s(t),t.tag=3,t}function ag(t,n,s,l){var f=s.type.getDerivedStateFromError;if(typeof f=="function"){var p=l.value;t.payload=function(){return f(p)},t.callback=function(){ng(n,s,l)}}var M=s.stateNode;M!==null&&typeof M.componentDidCatch=="function"&&(t.callback=function(){ng(n,s,l),typeof f!="function"&&(bs===null?bs=new Set([this]):bs.add(this));var w=l.stack;this.componentDidCatch(l.value,{componentStack:w!==null?w:""})})}function CM(t,n,s,l,f){if(s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(n=s.alternate,n!==null&&Xr(n,s,f,!0),s=Ti.current,s!==null){switch(s.tag){case 31:case 13:return ki===null?Hc():s.alternate===null&&mn===0&&(mn=3),s.flags&=-257,s.flags|=65536,s.lanes=f,l===mc?s.flags|=16384:(n=s.updateQueue,n===null?s.updateQueue=new Set([l]):n.add(l),Dd(t,l,f)),!1;case 22:return s.flags|=65536,l===mc?s.flags|=16384:(n=s.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([l])},s.updateQueue=n):(s=n.retryQueue,s===null?n.retryQueue=new Set([l]):s.add(l)),Dd(t,l,f)),!1}throw Error(r(435,s.tag))}return Dd(t,l,f),Hc(),!1}if(Dt)return n=Ti.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=f,l!==bf&&(t=Error(r(422),{cause:l}),el(zi(t,s)))):(l!==bf&&(n=Error(r(423),{cause:l}),el(zi(n,s))),t=t.current.alternate,t.flags|=65536,f&=-f,t.lanes|=f,l=zi(l,s),f=sd(t.stateNode,l,f),Pf(t,f),mn!==4&&(mn=2)),!1;var p=Error(r(520),{cause:l});if(p=zi(p,s),xl===null?xl=[p]:xl.push(p),mn!==4&&(mn=2),n===null)return!0;l=zi(l,s),s=n;do{switch(s.tag){case 3:return s.flags|=65536,t=f&-f,s.lanes|=t,t=sd(s.stateNode,l,t),Pf(s,t),!1;case 1:if(n=s.type,p=s.stateNode,(s.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(bs===null||!bs.has(p))))return s.flags|=65536,f&=-f,s.lanes|=f,f=ig(f),ag(f,t,s,l),Pf(s,f),!1}s=s.return}while(s!==null);return!1}var rd=Error(r(461)),An=!1;function Xn(t,n,s,l){n.child=t===null?l0(n,null,s,l):dr(n,t.child,s,l)}function sg(t,n,s,l,f){s=s.render;var p=n.ref;if("ref"in l){var M={};for(var w in l)w!=="ref"&&(M[w]=l[w])}else M=l;return lr(n),l=Gf(t,n,s,M,p,f),w=Vf(),t!==null&&!An?(kf(t,n,f),za(t,n,f)):(Dt&&w&&yf(n),n.flags|=1,Xn(t,n,l,f),n.child)}function rg(t,n,s,l,f){if(t===null){var p=s.type;return typeof p=="function"&&!xf(p)&&p.defaultProps===void 0&&s.compare===null?(n.tag=15,n.type=p,og(t,n,p,l,f)):(t=cc(s.type,null,l,n,n.mode,f),t.ref=n.ref,t.return=n,n.child=t)}if(p=t.child,!pd(t,f)){var M=p.memoizedProps;if(s=s.compare,s=s!==null?s:Qo,s(M,l)&&t.ref===n.ref)return za(t,n,f)}return n.flags|=1,t=Ua(p,l),t.ref=n.ref,t.return=n,n.child=t}function og(t,n,s,l,f){if(t!==null){var p=t.memoizedProps;if(Qo(p,l)&&t.ref===n.ref)if(An=!1,n.pendingProps=l=p,pd(t,f))(t.flags&131072)!==0&&(An=!0);else return n.lanes=t.lanes,za(t,n,f)}return od(t,n,s,l,f)}function lg(t,n,s,l){var f=l.children,p=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((n.flags&128)!==0){if(p=p!==null?p.baseLanes|s:s,t!==null){for(l=n.child=t.child,f=0;l!==null;)f=f|l.lanes|l.childLanes,l=l.sibling;l=f&~p}else l=0,n.child=null;return cg(t,n,p,s,l)}if((s&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&hc(n,p!==null?p.cachePool:null),p!==null?f0(n,p):Bf(),d0(n);else return l=n.lanes=536870912,cg(t,n,p!==null?p.baseLanes|s:s,s,l)}else p!==null?(hc(n,p.cachePool),f0(n,p),Ss(),n.memoizedState=null):(t!==null&&hc(n,null),Bf(),Ss());return Xn(t,n,f,s),n.child}function dl(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function cg(t,n,s,l,f){var p=Lf();return p=p===null?null:{parent:bn._currentValue,pool:p},n.memoizedState={baseLanes:s,cachePool:p},t!==null&&hc(n,null),Bf(),d0(n),t!==null&&Xr(t,n,l,!0),n.childLanes=f,null}function wc(t,n){return n=Lc({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function ug(t,n,s){return dr(n,t.child,null,s),t=wc(n,n.pendingProps),t.flags|=2,Ai(n),n.memoizedState=null,t}function wM(t,n,s){var l=n.pendingProps,f=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(Dt){if(l.mode==="hidden")return t=wc(n,l),n.lanes=536870912,dl(null,t);if(zf(n),(t=an)?(t=y_(t,Vi),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:ds!==null?{id:ga,overflow:_a}:null,retryLane:536870912,hydrationErrors:null},s=qm(t),s.return=n,n.child=s,Vn=n,an=null)):t=null,t===null)throw ps(n);return n.lanes=536870912,null}return wc(n,l)}var p=t.memoizedState;if(p!==null){var M=p.dehydrated;if(zf(n),f)if(n.flags&256)n.flags&=-257,n=ug(t,n,s);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(r(558));else if(An||Xr(t,n,s,!1),f=(s&t.childLanes)!==0,An||f){if(l=Jt,l!==null&&(M=Hn(l,s),M!==0&&M!==p.retryLane))throw p.retryLane=M,ar(t,M),gi(l,t,M),rd;Hc(),n=ug(t,n,s)}else t=p.treeContext,an=Xi(M.nextSibling),Vn=n,Dt=!0,hs=null,Vi=!1,t!==null&&Km(n,t),n=wc(n,l),n.flags|=4096;return n}return t=Ua(t.child,{mode:l.mode,children:l.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Dc(t,n){var s=n.ref;if(s===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(r(284));(t===null||t.ref!==s)&&(n.flags|=4194816)}}function od(t,n,s,l,f){return lr(n),s=Gf(t,n,s,l,void 0,f),l=Vf(),t!==null&&!An?(kf(t,n,f),za(t,n,f)):(Dt&&l&&yf(n),n.flags|=1,Xn(t,n,s,f),n.child)}function fg(t,n,s,l,f,p){return lr(n),n.updateQueue=null,s=p0(n,l,s,f),h0(t),l=Vf(),t!==null&&!An?(kf(t,n,p),za(t,n,p)):(Dt&&l&&yf(n),n.flags|=1,Xn(t,n,s,p),n.child)}function dg(t,n,s,l,f){if(lr(n),n.stateNode===null){var p=Hr,M=s.contextType;typeof M=="object"&&M!==null&&(p=kn(M)),p=new s(l,p),n.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,p.updater=ad,n.stateNode=p,p._reactInternals=n,p=n.stateNode,p.props=l,p.state=n.memoizedState,p.refs={},Uf(n),M=s.contextType,p.context=typeof M=="object"&&M!==null?kn(M):Hr,p.state=n.memoizedState,M=s.getDerivedStateFromProps,typeof M=="function"&&(id(n,s,M,l),p.state=n.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(M=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),M!==p.state&&ad.enqueueReplaceState(p,p.state,null),ol(n,l,p,f),rl(),p.state=n.memoizedState),typeof p.componentDidMount=="function"&&(n.flags|=4194308),l=!0}else if(t===null){p=n.stateNode;var w=n.memoizedProps,V=pr(s,w);p.props=V;var oe=p.context,Me=s.contextType;M=Hr,typeof Me=="object"&&Me!==null&&(M=kn(Me));var Re=s.getDerivedStateFromProps;Me=typeof Re=="function"||typeof p.getSnapshotBeforeUpdate=="function",w=n.pendingProps!==w,Me||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(w||oe!==M)&&J0(n,p,l,M),gs=!1;var fe=n.memoizedState;p.state=fe,ol(n,l,p,f),rl(),oe=n.memoizedState,w||fe!==oe||gs?(typeof Re=="function"&&(id(n,s,Re,l),oe=n.memoizedState),(V=gs||Q0(n,s,V,l,fe,oe,M))?(Me||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount()),typeof p.componentDidMount=="function"&&(n.flags|=4194308)):(typeof p.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=l,n.memoizedState=oe),p.props=l,p.state=oe,p.context=M,l=V):(typeof p.componentDidMount=="function"&&(n.flags|=4194308),l=!1)}else{p=n.stateNode,Of(t,n),M=n.memoizedProps,Me=pr(s,M),p.props=Me,Re=n.pendingProps,fe=p.context,oe=s.contextType,V=Hr,typeof oe=="object"&&oe!==null&&(V=kn(oe)),w=s.getDerivedStateFromProps,(oe=typeof w=="function"||typeof p.getSnapshotBeforeUpdate=="function")||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(M!==Re||fe!==V)&&J0(n,p,l,V),gs=!1,fe=n.memoizedState,p.state=fe,ol(n,l,p,f),rl();var pe=n.memoizedState;M!==Re||fe!==pe||gs||t!==null&&t.dependencies!==null&&fc(t.dependencies)?(typeof w=="function"&&(id(n,s,w,l),pe=n.memoizedState),(Me=gs||Q0(n,s,Me,l,fe,pe,V)||t!==null&&t.dependencies!==null&&fc(t.dependencies))?(oe||typeof p.UNSAFE_componentWillUpdate!="function"&&typeof p.componentWillUpdate!="function"||(typeof p.componentWillUpdate=="function"&&p.componentWillUpdate(l,pe,V),typeof p.UNSAFE_componentWillUpdate=="function"&&p.UNSAFE_componentWillUpdate(l,pe,V)),typeof p.componentDidUpdate=="function"&&(n.flags|=4),typeof p.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof p.componentDidUpdate!="function"||M===t.memoizedProps&&fe===t.memoizedState||(n.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||M===t.memoizedProps&&fe===t.memoizedState||(n.flags|=1024),n.memoizedProps=l,n.memoizedState=pe),p.props=l,p.state=pe,p.context=V,l=Me):(typeof p.componentDidUpdate!="function"||M===t.memoizedProps&&fe===t.memoizedState||(n.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||M===t.memoizedProps&&fe===t.memoizedState||(n.flags|=1024),l=!1)}return p=l,Dc(t,n),l=(n.flags&128)!==0,p||l?(p=n.stateNode,s=l&&typeof s.getDerivedStateFromError!="function"?null:p.render(),n.flags|=1,t!==null&&l?(n.child=dr(n,t.child,null,f),n.child=dr(n,null,s,f)):Xn(t,n,s,f),n.memoizedState=p.state,t=n.child):t=za(t,n,f),t}function hg(t,n,s,l){return rr(),n.flags|=256,Xn(t,n,s,l),n.child}var ld={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function cd(t){return{baseLanes:t,cachePool:n0()}}function ud(t,n,s){return t=t!==null?t.childLanes&~s:0,n&&(t|=Ci),t}function pg(t,n,s){var l=n.pendingProps,f=!1,p=(n.flags&128)!==0,M;if((M=p)||(M=t!==null&&t.memoizedState===null?!1:(Sn.current&2)!==0),M&&(f=!0,n.flags&=-129),M=(n.flags&32)!==0,n.flags&=-33,t===null){if(Dt){if(f?xs(n):Ss(),(t=an)?(t=y_(t,Vi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:ds!==null?{id:ga,overflow:_a}:null,retryLane:536870912,hydrationErrors:null},s=qm(t),s.return=n,n.child=s,Vn=n,an=null)):t=null,t===null)throw ps(n);return Yd(t)?n.lanes=32:n.lanes=536870912,null}var w=l.children;return l=l.fallback,f?(Ss(),f=n.mode,w=Lc({mode:"hidden",children:w},f),l=sr(l,f,s,null),w.return=n,l.return=n,w.sibling=l,n.child=w,l=n.child,l.memoizedState=cd(s),l.childLanes=ud(t,M,s),n.memoizedState=ld,dl(null,l)):(xs(n),fd(n,w))}var V=t.memoizedState;if(V!==null&&(w=V.dehydrated,w!==null)){if(p)n.flags&256?(xs(n),n.flags&=-257,n=dd(t,n,s)):n.memoizedState!==null?(Ss(),n.child=t.child,n.flags|=128,n=null):(Ss(),w=l.fallback,f=n.mode,l=Lc({mode:"visible",children:l.children},f),w=sr(w,f,s,null),w.flags|=2,l.return=n,w.return=n,l.sibling=w,n.child=l,dr(n,t.child,null,s),l=n.child,l.memoizedState=cd(s),l.childLanes=ud(t,M,s),n.memoizedState=ld,n=dl(null,l));else if(xs(n),Yd(w)){if(M=w.nextSibling&&w.nextSibling.dataset,M)var oe=M.dgst;M=oe,l=Error(r(419)),l.stack="",l.digest=M,el({value:l,source:null,stack:null}),n=dd(t,n,s)}else if(An||Xr(t,n,s,!1),M=(s&t.childLanes)!==0,An||M){if(M=Jt,M!==null&&(l=Hn(M,s),l!==0&&l!==V.retryLane))throw V.retryLane=l,ar(t,l),gi(M,t,l),rd;Wd(w)||Hc(),n=dd(t,n,s)}else Wd(w)?(n.flags|=192,n.child=t.child,n=null):(t=V.treeContext,an=Xi(w.nextSibling),Vn=n,Dt=!0,hs=null,Vi=!1,t!==null&&Km(n,t),n=fd(n,l.children),n.flags|=4096);return n}return f?(Ss(),w=l.fallback,f=n.mode,V=t.child,oe=V.sibling,l=Ua(V,{mode:"hidden",children:l.children}),l.subtreeFlags=V.subtreeFlags&65011712,oe!==null?w=Ua(oe,w):(w=sr(w,f,s,null),w.flags|=2),w.return=n,l.return=n,l.sibling=w,n.child=l,dl(null,l),l=n.child,w=t.child.memoizedState,w===null?w=cd(s):(f=w.cachePool,f!==null?(V=bn._currentValue,f=f.parent!==V?{parent:V,pool:V}:f):f=n0(),w={baseLanes:w.baseLanes|s,cachePool:f}),l.memoizedState=w,l.childLanes=ud(t,M,s),n.memoizedState=ld,dl(t.child,l)):(xs(n),s=t.child,t=s.sibling,s=Ua(s,{mode:"visible",children:l.children}),s.return=n,s.sibling=null,t!==null&&(M=n.deletions,M===null?(n.deletions=[t],n.flags|=16):M.push(t)),n.child=s,n.memoizedState=null,s)}function fd(t,n){return n=Lc({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Lc(t,n){return t=bi(22,t,null,n),t.lanes=0,t}function dd(t,n,s){return dr(n,t.child,null,s),t=fd(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function mg(t,n,s){t.lanes|=n;var l=t.alternate;l!==null&&(l.lanes|=n),Rf(t.return,n,s)}function hd(t,n,s,l,f,p){var M=t.memoizedState;M===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:l,tail:s,tailMode:f,treeForkCount:p}:(M.isBackwards=n,M.rendering=null,M.renderingStartTime=0,M.last=l,M.tail=s,M.tailMode=f,M.treeForkCount=p)}function gg(t,n,s){var l=n.pendingProps,f=l.revealOrder,p=l.tail;l=l.children;var M=Sn.current,w=(M&2)!==0;if(w?(M=M&1|2,n.flags|=128):M&=1,Ce(Sn,M),Xn(t,n,l,s),l=Dt?$o:0,!w&&t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&mg(t,s,n);else if(t.tag===19)mg(t,s,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(f){case"forwards":for(s=n.child,f=null;s!==null;)t=s.alternate,t!==null&&xc(t)===null&&(f=s),s=s.sibling;s=f,s===null?(f=n.child,n.child=null):(f=s.sibling,s.sibling=null),hd(n,!1,f,s,p,l);break;case"backwards":case"unstable_legacy-backwards":for(s=null,f=n.child,n.child=null;f!==null;){if(t=f.alternate,t!==null&&xc(t)===null){n.child=f;break}t=f.sibling,f.sibling=s,s=f,f=t}hd(n,!0,s,null,p,l);break;case"together":hd(n,!1,null,null,void 0,l);break;default:n.memoizedState=null}return n.child}function za(t,n,s){if(t!==null&&(n.dependencies=t.dependencies),Es|=n.lanes,(s&n.childLanes)===0)if(t!==null){if(Xr(t,n,s,!1),(s&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,s=Ua(t,t.pendingProps),n.child=s,s.return=n;t.sibling!==null;)t=t.sibling,s=s.sibling=Ua(t,t.pendingProps),s.return=n;s.sibling=null}return n.child}function pd(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&fc(t)))}function DM(t,n,s){switch(n.tag){case 3:ye(n,n.stateNode.containerInfo),ms(n,bn,t.memoizedState.cache),rr();break;case 27:case 5:tt(n);break;case 4:ye(n,n.stateNode.containerInfo);break;case 10:ms(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,zf(n),null;break;case 13:var l=n.memoizedState;if(l!==null)return l.dehydrated!==null?(xs(n),n.flags|=128,null):(s&n.child.childLanes)!==0?pg(t,n,s):(xs(n),t=za(t,n,s),t!==null?t.sibling:null);xs(n);break;case 19:var f=(t.flags&128)!==0;if(l=(s&n.childLanes)!==0,l||(Xr(t,n,s,!1),l=(s&n.childLanes)!==0),f){if(l)return gg(t,n,s);n.flags|=128}if(f=n.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),Ce(Sn,Sn.current),l)break;return null;case 22:return n.lanes=0,lg(t,n,s,n.pendingProps);case 24:ms(n,bn,t.memoizedState.cache)}return za(t,n,s)}function _g(t,n,s){if(t!==null)if(t.memoizedProps!==n.pendingProps)An=!0;else{if(!pd(t,s)&&(n.flags&128)===0)return An=!1,DM(t,n,s);An=(t.flags&131072)!==0}else An=!1,Dt&&(n.flags&1048576)!==0&&Zm(n,$o,n.index);switch(n.lanes=0,n.tag){case 16:e:{var l=n.pendingProps;if(t=ur(n.elementType),n.type=t,typeof t=="function")xf(t)?(l=pr(t,l),n.tag=1,n=dg(null,n,t,l,s)):(n.tag=0,n=od(null,n,t,l,s));else{if(t!=null){var f=t.$$typeof;if(f===C){n.tag=11,n=sg(null,n,t,l,s);break e}else if(f===F){n.tag=14,n=rg(null,n,t,l,s);break e}}throw n=ue(t)||t,Error(r(306,n,""))}}return n;case 0:return od(t,n,n.type,n.pendingProps,s);case 1:return l=n.type,f=pr(l,n.pendingProps),dg(t,n,l,f,s);case 3:e:{if(ye(n,n.stateNode.containerInfo),t===null)throw Error(r(387));l=n.pendingProps;var p=n.memoizedState;f=p.element,Of(t,n),ol(n,l,null,s);var M=n.memoizedState;if(l=M.cache,ms(n,bn,l),l!==p.cache&&Cf(n,[bn],s,!0),rl(),l=M.element,p.isDehydrated)if(p={element:l,isDehydrated:!1,cache:M.cache},n.updateQueue.baseState=p,n.memoizedState=p,n.flags&256){n=hg(t,n,l,s);break e}else if(l!==f){f=zi(Error(r(424)),n),el(f),n=hg(t,n,l,s);break e}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(an=Xi(t.firstChild),Vn=n,Dt=!0,hs=null,Vi=!0,s=l0(n,null,l,s),n.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling}else{if(rr(),l===f){n=za(t,n,s);break e}Xn(t,n,l,s)}n=n.child}return n;case 26:return Dc(t,n),t===null?(s=C_(n.type,null,n.pendingProps,null))?n.memoizedState=s:Dt||(s=n.type,t=n.pendingProps,l=qc(te.current).createElement(s),l[ln]=n,l[Dn]=t,Wn(l,s,t),dn(l),n.stateNode=l):n.memoizedState=C_(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return tt(n),t===null&&Dt&&(l=n.stateNode=T_(n.type,n.pendingProps,te.current),Vn=n,Vi=!0,f=an,Cs(n.type)?(qd=f,an=Xi(l.firstChild)):an=f),Xn(t,n,n.pendingProps.children,s),Dc(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Dt&&((f=l=an)&&(l=ry(l,n.type,n.pendingProps,Vi),l!==null?(n.stateNode=l,Vn=n,an=Xi(l.firstChild),Vi=!1,f=!0):f=!1),f||ps(n)),tt(n),f=n.type,p=n.pendingProps,M=t!==null?t.memoizedProps:null,l=p.children,Vd(f,p)?l=null:M!==null&&Vd(f,M)&&(n.flags|=32),n.memoizedState!==null&&(f=Gf(t,n,MM,null,null,s),Rl._currentValue=f),Dc(t,n),Xn(t,n,l,s),n.child;case 6:return t===null&&Dt&&((t=s=an)&&(s=oy(s,n.pendingProps,Vi),s!==null?(n.stateNode=s,Vn=n,an=null,t=!0):t=!1),t||ps(n)),null;case 13:return pg(t,n,s);case 4:return ye(n,n.stateNode.containerInfo),l=n.pendingProps,t===null?n.child=dr(n,null,l,s):Xn(t,n,l,s),n.child;case 11:return sg(t,n,n.type,n.pendingProps,s);case 7:return Xn(t,n,n.pendingProps,s),n.child;case 8:return Xn(t,n,n.pendingProps.children,s),n.child;case 12:return Xn(t,n,n.pendingProps.children,s),n.child;case 10:return l=n.pendingProps,ms(n,n.type,l.value),Xn(t,n,l.children,s),n.child;case 9:return f=n.type._context,l=n.pendingProps.children,lr(n),f=kn(f),l=l(f),n.flags|=1,Xn(t,n,l,s),n.child;case 14:return rg(t,n,n.type,n.pendingProps,s);case 15:return og(t,n,n.type,n.pendingProps,s);case 19:return gg(t,n,s);case 31:return wM(t,n,s);case 22:return lg(t,n,s,n.pendingProps);case 24:return lr(n),l=kn(bn),t===null?(f=Lf(),f===null&&(f=Jt,p=wf(),f.pooledCache=p,p.refCount++,p!==null&&(f.pooledCacheLanes|=s),f=p),n.memoizedState={parent:l,cache:f},Uf(n),ms(n,bn,f)):((t.lanes&s)!==0&&(Of(t,n),ol(n,null,null,s),rl()),f=t.memoizedState,p=n.memoizedState,f.parent!==l?(f={parent:l,cache:l},n.memoizedState=f,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=f),ms(n,bn,l)):(l=p.cache,ms(n,bn,l),l!==f.cache&&Cf(n,[bn],s,!0))),Xn(t,n,n.pendingProps.children,s),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function Ha(t){t.flags|=4}function md(t,n,s,l,f){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(f&335544128)===f)if(t.stateNode.complete)t.flags|=8192;else if(Xg())t.flags|=8192;else throw fr=mc,Nf}else t.flags&=-16777217}function vg(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!U_(n))if(Xg())t.flags|=8192;else throw fr=mc,Nf}function Nc(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Ae():536870912,t.lanes|=n,no|=n)}function hl(t,n){if(!Dt)switch(t.tailMode){case"hidden":n=t.tail;for(var s=null;n!==null;)n.alternate!==null&&(s=n),n=n.sibling;s===null?t.tail=null:s.sibling=null;break;case"collapsed":s=t.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function sn(t){var n=t.alternate!==null&&t.alternate.child===t.child,s=0,l=0;if(n)for(var f=t.child;f!==null;)s|=f.lanes|f.childLanes,l|=f.subtreeFlags&65011712,l|=f.flags&65011712,f.return=t,f=f.sibling;else for(f=t.child;f!==null;)s|=f.lanes|f.childLanes,l|=f.subtreeFlags,l|=f.flags,f.return=t,f=f.sibling;return t.subtreeFlags|=l,t.childLanes=s,n}function LM(t,n,s){var l=n.pendingProps;switch(Ef(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return sn(n),null;case 1:return sn(n),null;case 3:return s=n.stateNode,l=null,t!==null&&(l=t.memoizedState.cache),n.memoizedState.cache!==l&&(n.flags|=2048),Ia(bn),ke(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(t===null||t.child===null)&&(kr(n)?Ha(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Tf())),sn(n),null;case 26:var f=n.type,p=n.memoizedState;return t===null?(Ha(n),p!==null?(sn(n),vg(n,p)):(sn(n),md(n,f,null,l,s))):p?p!==t.memoizedState?(Ha(n),sn(n),vg(n,p)):(sn(n),n.flags&=-16777217):(t=t.memoizedProps,t!==l&&Ha(n),sn(n),md(n,f,t,l,s)),null;case 27:if(qe(n),s=te.current,f=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==l&&Ha(n);else{if(!l){if(n.stateNode===null)throw Error(r(166));return sn(n),null}t=Le.current,kr(n)?Qm(n):(t=T_(f,l,s),n.stateNode=t,Ha(n))}return sn(n),null;case 5:if(qe(n),f=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==l&&Ha(n);else{if(!l){if(n.stateNode===null)throw Error(r(166));return sn(n),null}if(p=Le.current,kr(n))Qm(n);else{var M=qc(te.current);switch(p){case 1:p=M.createElementNS("http://www.w3.org/2000/svg",f);break;case 2:p=M.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;default:switch(f){case"svg":p=M.createElementNS("http://www.w3.org/2000/svg",f);break;case"math":p=M.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;case"script":p=M.createElement("div"),p.innerHTML="<script><\/script>",p=p.removeChild(p.firstChild);break;case"select":p=typeof l.is=="string"?M.createElement("select",{is:l.is}):M.createElement("select"),l.multiple?p.multiple=!0:l.size&&(p.size=l.size);break;default:p=typeof l.is=="string"?M.createElement(f,{is:l.is}):M.createElement(f)}}p[ln]=n,p[Dn]=l;e:for(M=n.child;M!==null;){if(M.tag===5||M.tag===6)p.appendChild(M.stateNode);else if(M.tag!==4&&M.tag!==27&&M.child!==null){M.child.return=M,M=M.child;continue}if(M===n)break e;for(;M.sibling===null;){if(M.return===null||M.return===n)break e;M=M.return}M.sibling.return=M.return,M=M.sibling}n.stateNode=p;e:switch(Wn(p,f,l),f){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&Ha(n)}}return sn(n),md(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,s),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==l&&Ha(n);else{if(typeof l!="string"&&n.stateNode===null)throw Error(r(166));if(t=te.current,kr(n)){if(t=n.stateNode,s=n.memoizedProps,l=null,f=Vn,f!==null)switch(f.tag){case 27:case 5:l=f.memoizedProps}t[ln]=n,t=!!(t.nodeValue===s||l!==null&&l.suppressHydrationWarning===!0||p_(t.nodeValue,s)),t||ps(n,!0)}else t=qc(t).createTextNode(l),t[ln]=n,n.stateNode=t}return sn(n),null;case 31:if(s=n.memoizedState,t===null||t.memoizedState!==null){if(l=kr(n),s!==null){if(t===null){if(!l)throw Error(r(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[ln]=n}else rr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;sn(n),t=!1}else s=Tf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=s),t=!0;if(!t)return n.flags&256?(Ai(n),n):(Ai(n),null);if((n.flags&128)!==0)throw Error(r(558))}return sn(n),null;case 13:if(l=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(f=kr(n),l!==null&&l.dehydrated!==null){if(t===null){if(!f)throw Error(r(318));if(f=n.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(r(317));f[ln]=n}else rr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;sn(n),f=!1}else f=Tf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=f),f=!0;if(!f)return n.flags&256?(Ai(n),n):(Ai(n),null)}return Ai(n),(n.flags&128)!==0?(n.lanes=s,n):(s=l!==null,t=t!==null&&t.memoizedState!==null,s&&(l=n.child,f=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(f=l.alternate.memoizedState.cachePool.pool),p=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(p=l.memoizedState.cachePool.pool),p!==f&&(l.flags|=2048)),s!==t&&s&&(n.child.flags|=8192),Nc(n,n.updateQueue),sn(n),null);case 4:return ke(),t===null&&Bd(n.stateNode.containerInfo),sn(n),null;case 10:return Ia(n.type),sn(n),null;case 19:if(q(Sn),l=n.memoizedState,l===null)return sn(n),null;if(f=(n.flags&128)!==0,p=l.rendering,p===null)if(f)hl(l,!1);else{if(mn!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(p=xc(t),p!==null){for(n.flags|=128,hl(l,!1),t=p.updateQueue,n.updateQueue=t,Nc(n,t),n.subtreeFlags=0,t=s,s=n.child;s!==null;)Ym(s,t),s=s.sibling;return Ce(Sn,Sn.current&1|2),Dt&&Oa(n,l.treeForkCount),n.child}t=t.sibling}l.tail!==null&&Ut()>Bc&&(n.flags|=128,f=!0,hl(l,!1),n.lanes=4194304)}else{if(!f)if(t=xc(p),t!==null){if(n.flags|=128,f=!0,t=t.updateQueue,n.updateQueue=t,Nc(n,t),hl(l,!0),l.tail===null&&l.tailMode==="hidden"&&!p.alternate&&!Dt)return sn(n),null}else 2*Ut()-l.renderingStartTime>Bc&&s!==536870912&&(n.flags|=128,f=!0,hl(l,!1),n.lanes=4194304);l.isBackwards?(p.sibling=n.child,n.child=p):(t=l.last,t!==null?t.sibling=p:n.child=p,l.last=p)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=Ut(),t.sibling=null,s=Sn.current,Ce(Sn,f?s&1|2:s&1),Dt&&Oa(n,l.treeForkCount),t):(sn(n),null);case 22:case 23:return Ai(n),Ff(),l=n.memoizedState!==null,t!==null?t.memoizedState!==null!==l&&(n.flags|=8192):l&&(n.flags|=8192),l?(s&536870912)!==0&&(n.flags&128)===0&&(sn(n),n.subtreeFlags&6&&(n.flags|=8192)):sn(n),s=n.updateQueue,s!==null&&Nc(n,s.retryQueue),s=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),l=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(l=n.memoizedState.cachePool.pool),l!==s&&(n.flags|=2048),t!==null&&q(cr),null;case 24:return s=null,t!==null&&(s=t.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),Ia(bn),sn(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function NM(t,n){switch(Ef(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Ia(bn),ke(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return qe(n),null;case 31:if(n.memoizedState!==null){if(Ai(n),n.alternate===null)throw Error(r(340));rr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(Ai(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));rr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return q(Sn),null;case 4:return ke(),null;case 10:return Ia(n.type),null;case 22:case 23:return Ai(n),Ff(),t!==null&&q(cr),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Ia(bn),null;case 25:return null;default:return null}}function xg(t,n){switch(Ef(n),n.tag){case 3:Ia(bn),ke();break;case 26:case 27:case 5:qe(n);break;case 4:ke();break;case 31:n.memoizedState!==null&&Ai(n);break;case 13:Ai(n);break;case 19:q(Sn);break;case 10:Ia(n.type);break;case 22:case 23:Ai(n),Ff(),t!==null&&q(cr);break;case 24:Ia(bn)}}function pl(t,n){try{var s=n.updateQueue,l=s!==null?s.lastEffect:null;if(l!==null){var f=l.next;s=f;do{if((s.tag&t)===t){l=void 0;var p=s.create,M=s.inst;l=p(),M.destroy=l}s=s.next}while(s!==f)}}catch(w){Yt(n,n.return,w)}}function Ms(t,n,s){try{var l=n.updateQueue,f=l!==null?l.lastEffect:null;if(f!==null){var p=f.next;l=p;do{if((l.tag&t)===t){var M=l.inst,w=M.destroy;if(w!==void 0){M.destroy=void 0,f=n;var V=s,oe=w;try{oe()}catch(Me){Yt(f,V,Me)}}}l=l.next}while(l!==p)}}catch(Me){Yt(n,n.return,Me)}}function Sg(t){var n=t.updateQueue;if(n!==null){var s=t.stateNode;try{u0(n,s)}catch(l){Yt(t,t.return,l)}}}function Mg(t,n,s){s.props=pr(t.type,t.memoizedProps),s.state=t.memoizedState;try{s.componentWillUnmount()}catch(l){Yt(t,n,l)}}function ml(t,n){try{var s=t.ref;if(s!==null){switch(t.tag){case 26:case 27:case 5:var l=t.stateNode;break;case 30:l=t.stateNode;break;default:l=t.stateNode}typeof s=="function"?t.refCleanup=s(l):s.current=l}}catch(f){Yt(t,n,f)}}function va(t,n){var s=t.ref,l=t.refCleanup;if(s!==null)if(typeof l=="function")try{l()}catch(f){Yt(t,n,f)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(f){Yt(t,n,f)}else s.current=null}function yg(t){var n=t.type,s=t.memoizedProps,l=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":s.autoFocus&&l.focus();break e;case"img":s.src?l.src=s.src:s.srcSet&&(l.srcset=s.srcSet)}}catch(f){Yt(t,t.return,f)}}function gd(t,n,s){try{var l=t.stateNode;ey(l,t.type,s,n),l[Dn]=n}catch(f){Yt(t,t.return,f)}}function Eg(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Cs(t.type)||t.tag===4}function _d(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Eg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Cs(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function vd(t,n,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,n?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(t,n):(n=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,n.appendChild(t),s=s._reactRootContainer,s!=null||n.onclick!==null||(n.onclick=Bn));else if(l!==4&&(l===27&&Cs(t.type)&&(s=t.stateNode,n=null),t=t.child,t!==null))for(vd(t,n,s),t=t.sibling;t!==null;)vd(t,n,s),t=t.sibling}function Uc(t,n,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,n?s.insertBefore(t,n):s.appendChild(t);else if(l!==4&&(l===27&&Cs(t.type)&&(s=t.stateNode),t=t.child,t!==null))for(Uc(t,n,s),t=t.sibling;t!==null;)Uc(t,n,s),t=t.sibling}function bg(t){var n=t.stateNode,s=t.memoizedProps;try{for(var l=t.type,f=n.attributes;f.length;)n.removeAttributeNode(f[0]);Wn(n,l,s),n[ln]=t,n[Dn]=s}catch(p){Yt(t,t.return,p)}}var Ga=!1,Rn=!1,xd=!1,Tg=typeof WeakSet=="function"?WeakSet:Set,Fn=null;function UM(t,n){if(t=t.containerInfo,Hd=eu,t=Bm(t),df(t)){if("selectionStart"in t)var s={start:t.selectionStart,end:t.selectionEnd};else e:{s=(s=t.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var f=l.anchorOffset,p=l.focusNode;l=l.focusOffset;try{s.nodeType,p.nodeType}catch{s=null;break e}var M=0,w=-1,V=-1,oe=0,Me=0,Re=t,fe=null;t:for(;;){for(var pe;Re!==s||f!==0&&Re.nodeType!==3||(w=M+f),Re!==p||l!==0&&Re.nodeType!==3||(V=M+l),Re.nodeType===3&&(M+=Re.nodeValue.length),(pe=Re.firstChild)!==null;)fe=Re,Re=pe;for(;;){if(Re===t)break t;if(fe===s&&++oe===f&&(w=M),fe===p&&++Me===l&&(V=M),(pe=Re.nextSibling)!==null)break;Re=fe,fe=Re.parentNode}Re=pe}s=w===-1||V===-1?null:{start:w,end:V}}else s=null}s=s||{start:0,end:0}}else s=null;for(Gd={focusedElem:t,selectionRange:s},eu=!1,Fn=n;Fn!==null;)if(n=Fn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,Fn=t;else for(;Fn!==null;){switch(n=Fn,p=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(s=0;s<t.length;s++)f=t[s],f.ref.impl=f.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&p!==null){t=void 0,s=n,f=p.memoizedProps,p=p.memoizedState,l=s.stateNode;try{var $e=pr(s.type,f);t=l.getSnapshotBeforeUpdate($e,p),l.__reactInternalSnapshotBeforeUpdate=t}catch(at){Yt(s,s.return,at)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,s=t.nodeType,s===9)Xd(t);else if(s===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Xd(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,Fn=t;break}Fn=n.return}}function Ag(t,n,s){var l=s.flags;switch(s.tag){case 0:case 11:case 15:ka(t,s),l&4&&pl(5,s);break;case 1:if(ka(t,s),l&4)if(t=s.stateNode,n===null)try{t.componentDidMount()}catch(M){Yt(s,s.return,M)}else{var f=pr(s.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(f,n,t.__reactInternalSnapshotBeforeUpdate)}catch(M){Yt(s,s.return,M)}}l&64&&Sg(s),l&512&&ml(s,s.return);break;case 3:if(ka(t,s),l&64&&(t=s.updateQueue,t!==null)){if(n=null,s.child!==null)switch(s.child.tag){case 27:case 5:n=s.child.stateNode;break;case 1:n=s.child.stateNode}try{u0(t,n)}catch(M){Yt(s,s.return,M)}}break;case 27:n===null&&l&4&&bg(s);case 26:case 5:ka(t,s),n===null&&l&4&&yg(s),l&512&&ml(s,s.return);break;case 12:ka(t,s);break;case 31:ka(t,s),l&4&&wg(t,s);break;case 13:ka(t,s),l&4&&Dg(t,s),l&64&&(t=s.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(s=VM.bind(null,s),ly(t,s))));break;case 22:if(l=s.memoizedState!==null||Ga,!l){n=n!==null&&n.memoizedState!==null||Rn,f=Ga;var p=Rn;Ga=l,(Rn=n)&&!p?Xa(t,s,(s.subtreeFlags&8772)!==0):ka(t,s),Ga=f,Rn=p}break;case 30:break;default:ka(t,s)}}function Rg(t){var n=t.alternate;n!==null&&(t.alternate=null,Rg(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&$i(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var cn=null,di=!1;function Va(t,n,s){for(s=s.child;s!==null;)Cg(t,n,s),s=s.sibling}function Cg(t,n,s){if(_e&&typeof _e.onCommitFiberUnmount=="function")try{_e.onCommitFiberUnmount(ge,s)}catch{}switch(s.tag){case 26:Rn||va(s,n),Va(t,n,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:Rn||va(s,n);var l=cn,f=di;Cs(s.type)&&(cn=s.stateNode,di=!1),Va(t,n,s),bl(s.stateNode),cn=l,di=f;break;case 5:Rn||va(s,n);case 6:if(l=cn,f=di,cn=null,Va(t,n,s),cn=l,di=f,cn!==null)if(di)try{(cn.nodeType===9?cn.body:cn.nodeName==="HTML"?cn.ownerDocument.body:cn).removeChild(s.stateNode)}catch(p){Yt(s,n,p)}else try{cn.removeChild(s.stateNode)}catch(p){Yt(s,n,p)}break;case 18:cn!==null&&(di?(t=cn,S_(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,s.stateNode),uo(t)):S_(cn,s.stateNode));break;case 4:l=cn,f=di,cn=s.stateNode.containerInfo,di=!0,Va(t,n,s),cn=l,di=f;break;case 0:case 11:case 14:case 15:Ms(2,s,n),Rn||Ms(4,s,n),Va(t,n,s);break;case 1:Rn||(va(s,n),l=s.stateNode,typeof l.componentWillUnmount=="function"&&Mg(s,n,l)),Va(t,n,s);break;case 21:Va(t,n,s);break;case 22:Rn=(l=Rn)||s.memoizedState!==null,Va(t,n,s),Rn=l;break;default:Va(t,n,s)}}function wg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{uo(t)}catch(s){Yt(n,n.return,s)}}}function Dg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{uo(t)}catch(s){Yt(n,n.return,s)}}function OM(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new Tg),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new Tg),n;default:throw Error(r(435,t.tag))}}function Oc(t,n){var s=OM(t);n.forEach(function(l){if(!s.has(l)){s.add(l);var f=kM.bind(null,t,l);l.then(f,f)}})}function hi(t,n){var s=n.deletions;if(s!==null)for(var l=0;l<s.length;l++){var f=s[l],p=t,M=n,w=M;e:for(;w!==null;){switch(w.tag){case 27:if(Cs(w.type)){cn=w.stateNode,di=!1;break e}break;case 5:cn=w.stateNode,di=!1;break e;case 3:case 4:cn=w.stateNode.containerInfo,di=!0;break e}w=w.return}if(cn===null)throw Error(r(160));Cg(p,M,f),cn=null,di=!1,p=f.alternate,p!==null&&(p.return=null),f.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Lg(n,t),n=n.sibling}var sa=null;function Lg(t,n){var s=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:hi(n,t),pi(t),l&4&&(Ms(3,t,t.return),pl(3,t),Ms(5,t,t.return));break;case 1:hi(n,t),pi(t),l&512&&(Rn||s===null||va(s,s.return)),l&64&&Ga&&(t=t.updateQueue,t!==null&&(l=t.callbacks,l!==null&&(s=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=s===null?l:s.concat(l))));break;case 26:var f=sa;if(hi(n,t),pi(t),l&512&&(Rn||s===null||va(s,s.return)),l&4){var p=s!==null?s.memoizedState:null;if(l=t.memoizedState,s===null)if(l===null)if(t.stateNode===null){e:{l=t.type,s=t.memoizedProps,f=f.ownerDocument||f;t:switch(l){case"title":p=f.getElementsByTagName("title")[0],(!p||p[Ji]||p[ln]||p.namespaceURI==="http://www.w3.org/2000/svg"||p.hasAttribute("itemprop"))&&(p=f.createElement(l),f.head.insertBefore(p,f.querySelector("head > title"))),Wn(p,l,s),p[ln]=t,dn(p),l=p;break e;case"link":var M=L_("link","href",f).get(l+(s.href||""));if(M){for(var w=0;w<M.length;w++)if(p=M[w],p.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&p.getAttribute("rel")===(s.rel==null?null:s.rel)&&p.getAttribute("title")===(s.title==null?null:s.title)&&p.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){M.splice(w,1);break t}}p=f.createElement(l),Wn(p,l,s),f.head.appendChild(p);break;case"meta":if(M=L_("meta","content",f).get(l+(s.content||""))){for(w=0;w<M.length;w++)if(p=M[w],p.getAttribute("content")===(s.content==null?null:""+s.content)&&p.getAttribute("name")===(s.name==null?null:s.name)&&p.getAttribute("property")===(s.property==null?null:s.property)&&p.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&p.getAttribute("charset")===(s.charSet==null?null:s.charSet)){M.splice(w,1);break t}}p=f.createElement(l),Wn(p,l,s),f.head.appendChild(p);break;default:throw Error(r(468,l))}p[ln]=t,dn(p),l=p}t.stateNode=l}else N_(f,t.type,t.stateNode);else t.stateNode=D_(f,l,t.memoizedProps);else p!==l?(p===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):p.count--,l===null?N_(f,t.type,t.stateNode):D_(f,l,t.memoizedProps)):l===null&&t.stateNode!==null&&gd(t,t.memoizedProps,s.memoizedProps)}break;case 27:hi(n,t),pi(t),l&512&&(Rn||s===null||va(s,s.return)),s!==null&&l&4&&gd(t,t.memoizedProps,s.memoizedProps);break;case 5:if(hi(n,t),pi(t),l&512&&(Rn||s===null||va(s,s.return)),t.flags&32){f=t.stateNode;try{Kn(f,"")}catch($e){Yt(t,t.return,$e)}}l&4&&t.stateNode!=null&&(f=t.memoizedProps,gd(t,f,s!==null?s.memoizedProps:f)),l&1024&&(xd=!0);break;case 6:if(hi(n,t),pi(t),l&4){if(t.stateNode===null)throw Error(r(162));l=t.memoizedProps,s=t.stateNode;try{s.nodeValue=l}catch($e){Yt(t,t.return,$e)}}break;case 3:if(Kc=null,f=sa,sa=jc(n.containerInfo),hi(n,t),sa=f,pi(t),l&4&&s!==null&&s.memoizedState.isDehydrated)try{uo(n.containerInfo)}catch($e){Yt(t,t.return,$e)}xd&&(xd=!1,Ng(t));break;case 4:l=sa,sa=jc(t.stateNode.containerInfo),hi(n,t),pi(t),sa=l;break;case 12:hi(n,t),pi(t);break;case 31:hi(n,t),pi(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Oc(t,l)));break;case 13:hi(n,t),pi(t),t.child.flags&8192&&t.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(Ic=Ut()),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Oc(t,l)));break;case 22:f=t.memoizedState!==null;var V=s!==null&&s.memoizedState!==null,oe=Ga,Me=Rn;if(Ga=oe||f,Rn=Me||V,hi(n,t),Rn=Me,Ga=oe,pi(t),l&8192)e:for(n=t.stateNode,n._visibility=f?n._visibility&-2:n._visibility|1,f&&(s===null||V||Ga||Rn||mr(t)),s=null,n=t;;){if(n.tag===5||n.tag===26){if(s===null){V=s=n;try{if(p=V.stateNode,f)M=p.style,typeof M.setProperty=="function"?M.setProperty("display","none","important"):M.display="none";else{w=V.stateNode;var Re=V.memoizedProps.style,fe=Re!=null&&Re.hasOwnProperty("display")?Re.display:null;w.style.display=fe==null||typeof fe=="boolean"?"":(""+fe).trim()}}catch($e){Yt(V,V.return,$e)}}}else if(n.tag===6){if(s===null){V=n;try{V.stateNode.nodeValue=f?"":V.memoizedProps}catch($e){Yt(V,V.return,$e)}}}else if(n.tag===18){if(s===null){V=n;try{var pe=V.stateNode;f?M_(pe,!0):M_(V.stateNode,!1)}catch($e){Yt(V,V.return,$e)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;s===n&&(s=null),n=n.return}s===n&&(s=null),n.sibling.return=n.return,n=n.sibling}l&4&&(l=t.updateQueue,l!==null&&(s=l.retryQueue,s!==null&&(l.retryQueue=null,Oc(t,s))));break;case 19:hi(n,t),pi(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Oc(t,l)));break;case 30:break;case 21:break;default:hi(n,t),pi(t)}}function pi(t){var n=t.flags;if(n&2){try{for(var s,l=t.return;l!==null;){if(Eg(l)){s=l;break}l=l.return}if(s==null)throw Error(r(160));switch(s.tag){case 27:var f=s.stateNode,p=_d(t);Uc(t,p,f);break;case 5:var M=s.stateNode;s.flags&32&&(Kn(M,""),s.flags&=-33);var w=_d(t);Uc(t,w,M);break;case 3:case 4:var V=s.stateNode.containerInfo,oe=_d(t);vd(t,oe,V);break;default:throw Error(r(161))}}catch(Me){Yt(t,t.return,Me)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function Ng(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;Ng(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function ka(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Ag(t,n.alternate,n),n=n.sibling}function mr(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Ms(4,n,n.return),mr(n);break;case 1:va(n,n.return);var s=n.stateNode;typeof s.componentWillUnmount=="function"&&Mg(n,n.return,s),mr(n);break;case 27:bl(n.stateNode);case 26:case 5:va(n,n.return),mr(n);break;case 22:n.memoizedState===null&&mr(n);break;case 30:mr(n);break;default:mr(n)}t=t.sibling}}function Xa(t,n,s){for(s=s&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var l=n.alternate,f=t,p=n,M=p.flags;switch(p.tag){case 0:case 11:case 15:Xa(f,p,s),pl(4,p);break;case 1:if(Xa(f,p,s),l=p,f=l.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(oe){Yt(l,l.return,oe)}if(l=p,f=l.updateQueue,f!==null){var w=l.stateNode;try{var V=f.shared.hiddenCallbacks;if(V!==null)for(f.shared.hiddenCallbacks=null,f=0;f<V.length;f++)c0(V[f],w)}catch(oe){Yt(l,l.return,oe)}}s&&M&64&&Sg(p),ml(p,p.return);break;case 27:bg(p);case 26:case 5:Xa(f,p,s),s&&l===null&&M&4&&yg(p),ml(p,p.return);break;case 12:Xa(f,p,s);break;case 31:Xa(f,p,s),s&&M&4&&wg(f,p);break;case 13:Xa(f,p,s),s&&M&4&&Dg(f,p);break;case 22:p.memoizedState===null&&Xa(f,p,s),ml(p,p.return);break;case 30:break;default:Xa(f,p,s)}n=n.sibling}}function Sd(t,n){var s=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==s&&(t!=null&&t.refCount++,s!=null&&tl(s))}function Md(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&tl(t))}function ra(t,n,s,l){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Ug(t,n,s,l),n=n.sibling}function Ug(t,n,s,l){var f=n.flags;switch(n.tag){case 0:case 11:case 15:ra(t,n,s,l),f&2048&&pl(9,n);break;case 1:ra(t,n,s,l);break;case 3:ra(t,n,s,l),f&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&tl(t)));break;case 12:if(f&2048){ra(t,n,s,l),t=n.stateNode;try{var p=n.memoizedProps,M=p.id,w=p.onPostCommit;typeof w=="function"&&w(M,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(V){Yt(n,n.return,V)}}else ra(t,n,s,l);break;case 31:ra(t,n,s,l);break;case 13:ra(t,n,s,l);break;case 23:break;case 22:p=n.stateNode,M=n.alternate,n.memoizedState!==null?p._visibility&2?ra(t,n,s,l):gl(t,n):p._visibility&2?ra(t,n,s,l):(p._visibility|=2,$r(t,n,s,l,(n.subtreeFlags&10256)!==0||!1)),f&2048&&Sd(M,n);break;case 24:ra(t,n,s,l),f&2048&&Md(n.alternate,n);break;default:ra(t,n,s,l)}}function $r(t,n,s,l,f){for(f=f&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var p=t,M=n,w=s,V=l,oe=M.flags;switch(M.tag){case 0:case 11:case 15:$r(p,M,w,V,f),pl(8,M);break;case 23:break;case 22:var Me=M.stateNode;M.memoizedState!==null?Me._visibility&2?$r(p,M,w,V,f):gl(p,M):(Me._visibility|=2,$r(p,M,w,V,f)),f&&oe&2048&&Sd(M.alternate,M);break;case 24:$r(p,M,w,V,f),f&&oe&2048&&Md(M.alternate,M);break;default:$r(p,M,w,V,f)}n=n.sibling}}function gl(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var s=t,l=n,f=l.flags;switch(l.tag){case 22:gl(s,l),f&2048&&Sd(l.alternate,l);break;case 24:gl(s,l),f&2048&&Md(l.alternate,l);break;default:gl(s,l)}n=n.sibling}}var _l=8192;function eo(t,n,s){if(t.subtreeFlags&_l)for(t=t.child;t!==null;)Og(t,n,s),t=t.sibling}function Og(t,n,s){switch(t.tag){case 26:eo(t,n,s),t.flags&_l&&t.memoizedState!==null&&Sy(s,sa,t.memoizedState,t.memoizedProps);break;case 5:eo(t,n,s);break;case 3:case 4:var l=sa;sa=jc(t.stateNode.containerInfo),eo(t,n,s),sa=l;break;case 22:t.memoizedState===null&&(l=t.alternate,l!==null&&l.memoizedState!==null?(l=_l,_l=16777216,eo(t,n,s),_l=l):eo(t,n,s));break;default:eo(t,n,s)}}function Pg(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function vl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var s=0;s<n.length;s++){var l=n[s];Fn=l,Bg(l,t)}Pg(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Ig(t),t=t.sibling}function Ig(t){switch(t.tag){case 0:case 11:case 15:vl(t),t.flags&2048&&Ms(9,t,t.return);break;case 3:vl(t);break;case 12:vl(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Pc(t)):vl(t);break;default:vl(t)}}function Pc(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var s=0;s<n.length;s++){var l=n[s];Fn=l,Bg(l,t)}Pg(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Ms(8,n,n.return),Pc(n);break;case 22:s=n.stateNode,s._visibility&2&&(s._visibility&=-3,Pc(n));break;default:Pc(n)}t=t.sibling}}function Bg(t,n){for(;Fn!==null;){var s=Fn;switch(s.tag){case 0:case 11:case 15:Ms(8,s,n);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var l=s.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:tl(s.memoizedState.cache)}if(l=s.child,l!==null)l.return=s,Fn=l;else e:for(s=t;Fn!==null;){l=Fn;var f=l.sibling,p=l.return;if(Rg(l),l===s){Fn=null;break e}if(f!==null){f.return=p,Fn=f;break e}Fn=p}}}var PM={getCacheForType:function(t){var n=kn(bn),s=n.data.get(t);return s===void 0&&(s=t(),n.data.set(t,s)),s},cacheSignal:function(){return kn(bn).controller.signal}},IM=typeof WeakMap=="function"?WeakMap:Map,Gt=0,Jt=null,At=null,Ct=0,Wt=0,Ri=null,ys=!1,to=!1,yd=!1,Wa=0,mn=0,Es=0,gr=0,Ed=0,Ci=0,no=0,xl=null,mi=null,bd=!1,Ic=0,Fg=0,Bc=1/0,Fc=null,bs=null,Un=0,Ts=null,io=null,Ya=0,Td=0,Ad=null,zg=null,Sl=0,Rd=null;function wi(){return(Gt&2)!==0&&Ct!==0?Ct&-Ct:z.T!==null?Ud():En()}function Hg(){if(Ci===0)if((Ct&536870912)===0||Dt){var t=it;it<<=1,(it&3932160)===0&&(it=262144),Ci=t}else Ci=536870912;return t=Ti.current,t!==null&&(t.flags|=32),Ci}function gi(t,n,s){(t===Jt&&(Wt===2||Wt===9)||t.cancelPendingCommit!==null)&&(ao(t,0),As(t,Ct,Ci,!1)),je(t,s),((Gt&2)===0||t!==Jt)&&(t===Jt&&((Gt&2)===0&&(gr|=s),mn===4&&As(t,Ct,Ci,!1)),xa(t))}function Gg(t,n,s){if((Gt&6)!==0)throw Error(r(327));var l=!s&&(n&127)===0&&(n&t.expiredLanes)===0||Fe(t,n),f=l?zM(t,n):wd(t,n,!0),p=l;do{if(f===0){to&&!l&&As(t,n,0,!1);break}else{if(s=t.current.alternate,p&&!BM(s)){f=wd(t,n,!1),p=!1;continue}if(f===2){if(p=n,t.errorRecoveryDisabledLanes&p)var M=0;else M=t.pendingLanes&-536870913,M=M!==0?M:M&536870912?536870912:0;if(M!==0){n=M;e:{var w=t;f=xl;var V=w.current.memoizedState.isDehydrated;if(V&&(ao(w,M).flags|=256),M=wd(w,M,!1),M!==2){if(yd&&!V){w.errorRecoveryDisabledLanes|=p,gr|=p,f=4;break e}p=mi,mi=f,p!==null&&(mi===null?mi=p:mi.push.apply(mi,p))}f=M}if(p=!1,f!==2)continue}}if(f===1){ao(t,0),As(t,n,0,!0);break}e:{switch(l=t,p=f,p){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:As(l,n,Ci,!ys);break e;case 2:mi=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(f=Ic+300-Ut(),10<f)){if(As(l,n,Ci,!ys),ve(l,0,!0)!==0)break e;Ya=n,l.timeoutHandle=v_(Vg.bind(null,l,s,mi,Fc,bd,n,Ci,gr,no,ys,p,"Throttled",-0,0),f);break e}Vg(l,s,mi,Fc,bd,n,Ci,gr,no,ys,p,null,-0,0)}}break}while(!0);xa(t)}function Vg(t,n,s,l,f,p,M,w,V,oe,Me,Re,fe,pe){if(t.timeoutHandle=-1,Re=n.subtreeFlags,Re&8192||(Re&16785408)===16785408){Re={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Bn},Og(n,p,Re);var $e=(p&62914560)===p?Ic-Ut():(p&4194048)===p?Fg-Ut():0;if($e=My(Re,$e),$e!==null){Ya=p,t.cancelPendingCommit=$e(Kg.bind(null,t,n,p,s,l,f,M,w,V,Me,Re,null,fe,pe)),As(t,p,M,!oe);return}}Kg(t,n,p,s,l,f,M,w,V)}function BM(t){for(var n=t;;){var s=n.tag;if((s===0||s===11||s===15)&&n.flags&16384&&(s=n.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var l=0;l<s.length;l++){var f=s[l],p=f.getSnapshot;f=f.value;try{if(!Ei(p(),f))return!1}catch{return!1}}if(s=n.child,n.subtreeFlags&16384&&s!==null)s.return=n,n=s;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function As(t,n,s,l){n&=~Ed,n&=~gr,t.suspendedLanes|=n,t.pingedLanes&=~n,l&&(t.warmLanes|=n),l=t.expirationTimes;for(var f=n;0<f;){var p=31-Ge(f),M=1<<p;l[p]=-1,f&=~M}s!==0&&Ht(t,s,n)}function zc(){return(Gt&6)===0?(Ml(0),!1):!0}function Cd(){if(At!==null){if(Wt===0)var t=At.return;else t=At,Pa=or=null,Xf(t),jr=null,il=0,t=At;for(;t!==null;)xg(t.alternate,t),t=t.return;At=null}}function ao(t,n){var s=t.timeoutHandle;s!==-1&&(t.timeoutHandle=-1,iy(s)),s=t.cancelPendingCommit,s!==null&&(t.cancelPendingCommit=null,s()),Ya=0,Cd(),Jt=t,At=s=Ua(t.current,null),Ct=n,Wt=0,Ri=null,ys=!1,to=Fe(t,n),yd=!1,no=Ci=Ed=gr=Es=mn=0,mi=xl=null,bd=!1,(n&8)!==0&&(n|=n&32);var l=t.entangledLanes;if(l!==0)for(t=t.entanglements,l&=n;0<l;){var f=31-Ge(l),p=1<<f;n|=t[f],l&=~p}return Wa=n,rc(),s}function kg(t,n){mt=null,z.H=fl,n===qr||n===pc?(n=s0(),Wt=3):n===Nf?(n=s0(),Wt=4):Wt=n===rd?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Ri=n,At===null&&(mn=1,Cc(t,zi(n,t.current)))}function Xg(){var t=Ti.current;return t===null?!0:(Ct&4194048)===Ct?ki===null:(Ct&62914560)===Ct||(Ct&536870912)!==0?t===ki:!1}function Wg(){var t=z.H;return z.H=fl,t===null?fl:t}function Yg(){var t=z.A;return z.A=PM,t}function Hc(){mn=4,ys||(Ct&4194048)!==Ct&&Ti.current!==null||(to=!0),(Es&134217727)===0&&(gr&134217727)===0||Jt===null||As(Jt,Ct,Ci,!1)}function wd(t,n,s){var l=Gt;Gt|=2;var f=Wg(),p=Yg();(Jt!==t||Ct!==n)&&(Fc=null,ao(t,n)),n=!1;var M=mn;e:do try{if(Wt!==0&&At!==null){var w=At,V=Ri;switch(Wt){case 8:Cd(),M=6;break e;case 3:case 2:case 9:case 6:Ti.current===null&&(n=!0);var oe=Wt;if(Wt=0,Ri=null,so(t,w,V,oe),s&&to){M=0;break e}break;default:oe=Wt,Wt=0,Ri=null,so(t,w,V,oe)}}FM(),M=mn;break}catch(Me){kg(t,Me)}while(!0);return n&&t.shellSuspendCounter++,Pa=or=null,Gt=l,z.H=f,z.A=p,At===null&&(Jt=null,Ct=0,rc()),M}function FM(){for(;At!==null;)qg(At)}function zM(t,n){var s=Gt;Gt|=2;var l=Wg(),f=Yg();Jt!==t||Ct!==n?(Fc=null,Bc=Ut()+500,ao(t,n)):to=Fe(t,n);e:do try{if(Wt!==0&&At!==null){n=At;var p=Ri;t:switch(Wt){case 1:Wt=0,Ri=null,so(t,n,p,1);break;case 2:case 9:if(i0(p)){Wt=0,Ri=null,jg(n);break}n=function(){Wt!==2&&Wt!==9||Jt!==t||(Wt=7),xa(t)},p.then(n,n);break e;case 3:Wt=7;break e;case 4:Wt=5;break e;case 7:i0(p)?(Wt=0,Ri=null,jg(n)):(Wt=0,Ri=null,so(t,n,p,7));break;case 5:var M=null;switch(At.tag){case 26:M=At.memoizedState;case 5:case 27:var w=At;if(M?U_(M):w.stateNode.complete){Wt=0,Ri=null;var V=w.sibling;if(V!==null)At=V;else{var oe=w.return;oe!==null?(At=oe,Gc(oe)):At=null}break t}}Wt=0,Ri=null,so(t,n,p,5);break;case 6:Wt=0,Ri=null,so(t,n,p,6);break;case 8:Cd(),mn=6;break e;default:throw Error(r(462))}}HM();break}catch(Me){kg(t,Me)}while(!0);return Pa=or=null,z.H=l,z.A=f,Gt=s,At!==null?0:(Jt=null,Ct=0,rc(),mn)}function HM(){for(;At!==null&&!Vt();)qg(At)}function qg(t){var n=_g(t.alternate,t,Wa);t.memoizedProps=t.pendingProps,n===null?Gc(t):At=n}function jg(t){var n=t,s=n.alternate;switch(n.tag){case 15:case 0:n=fg(s,n,n.pendingProps,n.type,void 0,Ct);break;case 11:n=fg(s,n,n.pendingProps,n.type.render,n.ref,Ct);break;case 5:Xf(n);default:xg(s,n),n=At=Ym(n,Wa),n=_g(s,n,Wa)}t.memoizedProps=t.pendingProps,n===null?Gc(t):At=n}function so(t,n,s,l){Pa=or=null,Xf(n),jr=null,il=0;var f=n.return;try{if(CM(t,f,n,s,Ct)){mn=1,Cc(t,zi(s,t.current)),At=null;return}}catch(p){if(f!==null)throw At=f,p;mn=1,Cc(t,zi(s,t.current)),At=null;return}n.flags&32768?(Dt||l===1?t=!0:to||(Ct&536870912)!==0?t=!1:(ys=t=!0,(l===2||l===9||l===3||l===6)&&(l=Ti.current,l!==null&&l.tag===13&&(l.flags|=16384))),Zg(n,t)):Gc(n)}function Gc(t){var n=t;do{if((n.flags&32768)!==0){Zg(n,ys);return}t=n.return;var s=LM(n.alternate,n,Wa);if(s!==null){At=s;return}if(n=n.sibling,n!==null){At=n;return}At=n=t}while(n!==null);mn===0&&(mn=5)}function Zg(t,n){do{var s=NM(t.alternate,t);if(s!==null){s.flags&=32767,At=s;return}if(s=t.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!n&&(t=t.sibling,t!==null)){At=t;return}At=t=s}while(t!==null);mn=6,At=null}function Kg(t,n,s,l,f,p,M,w,V){t.cancelPendingCommit=null;do Vc();while(Un!==0);if((Gt&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));if(p=n.lanes|n.childLanes,p|=_f,Xt(t,s,p,M,w,V),t===Jt&&(At=Jt=null,Ct=0),io=n,Ts=t,Ya=s,Td=p,Ad=f,zg=l,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,XM(ee,function(){return t_(),null})):(t.callbackNode=null,t.callbackPriority=0),l=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||l){l=z.T,z.T=null,f=H.p,H.p=2,M=Gt,Gt|=4;try{UM(t,n,s)}finally{Gt=M,H.p=f,z.T=l}}Un=1,Qg(),Jg(),$g()}}function Qg(){if(Un===1){Un=0;var t=Ts,n=io,s=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||s){s=z.T,z.T=null;var l=H.p;H.p=2;var f=Gt;Gt|=4;try{Lg(n,t);var p=Gd,M=Bm(t.containerInfo),w=p.focusedElem,V=p.selectionRange;if(M!==w&&w&&w.ownerDocument&&Im(w.ownerDocument.documentElement,w)){if(V!==null&&df(w)){var oe=V.start,Me=V.end;if(Me===void 0&&(Me=oe),"selectionStart"in w)w.selectionStart=oe,w.selectionEnd=Math.min(Me,w.value.length);else{var Re=w.ownerDocument||document,fe=Re&&Re.defaultView||window;if(fe.getSelection){var pe=fe.getSelection(),$e=w.textContent.length,at=Math.min(V.start,$e),Qt=V.end===void 0?at:Math.min(V.end,$e);!pe.extend&&at>Qt&&(M=Qt,Qt=at,at=M);var $=Pm(w,at),W=Pm(w,Qt);if($&&W&&(pe.rangeCount!==1||pe.anchorNode!==$.node||pe.anchorOffset!==$.offset||pe.focusNode!==W.node||pe.focusOffset!==W.offset)){var re=Re.createRange();re.setStart($.node,$.offset),pe.removeAllRanges(),at>Qt?(pe.addRange(re),pe.extend(W.node,W.offset)):(re.setEnd(W.node,W.offset),pe.addRange(re))}}}}for(Re=[],pe=w;pe=pe.parentNode;)pe.nodeType===1&&Re.push({element:pe,left:pe.scrollLeft,top:pe.scrollTop});for(typeof w.focus=="function"&&w.focus(),w=0;w<Re.length;w++){var Ee=Re[w];Ee.element.scrollLeft=Ee.left,Ee.element.scrollTop=Ee.top}}eu=!!Hd,Gd=Hd=null}finally{Gt=f,H.p=l,z.T=s}}t.current=n,Un=2}}function Jg(){if(Un===2){Un=0;var t=Ts,n=io,s=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||s){s=z.T,z.T=null;var l=H.p;H.p=2;var f=Gt;Gt|=4;try{Ag(t,n.alternate,n)}finally{Gt=f,H.p=l,z.T=s}}Un=3}}function $g(){if(Un===4||Un===3){Un=0,Z();var t=Ts,n=io,s=Ya,l=zg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Un=5:(Un=0,io=Ts=null,e_(t,t.pendingLanes));var f=t.pendingLanes;if(f===0&&(bs=null),ii(s),n=n.stateNode,_e&&typeof _e.onCommitFiberRoot=="function")try{_e.onCommitFiberRoot(ge,n,void 0,(n.current.flags&128)===128)}catch{}if(l!==null){n=z.T,f=H.p,H.p=2,z.T=null;try{for(var p=t.onRecoverableError,M=0;M<l.length;M++){var w=l[M];p(w.value,{componentStack:w.stack})}}finally{z.T=n,H.p=f}}(Ya&3)!==0&&Vc(),xa(t),f=t.pendingLanes,(s&261930)!==0&&(f&42)!==0?t===Rd?Sl++:(Sl=0,Rd=t):Sl=0,Ml(0)}}function e_(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,tl(n)))}function Vc(){return Qg(),Jg(),$g(),t_()}function t_(){if(Un!==5)return!1;var t=Ts,n=Td;Td=0;var s=ii(Ya),l=z.T,f=H.p;try{H.p=32>s?32:s,z.T=null,s=Ad,Ad=null;var p=Ts,M=Ya;if(Un=0,io=Ts=null,Ya=0,(Gt&6)!==0)throw Error(r(331));var w=Gt;if(Gt|=4,Ig(p.current),Ug(p,p.current,M,s),Gt=w,Ml(0,!1),_e&&typeof _e.onPostCommitFiberRoot=="function")try{_e.onPostCommitFiberRoot(ge,p)}catch{}return!0}finally{H.p=f,z.T=l,e_(t,n)}}function n_(t,n,s){n=zi(s,n),n=sd(t.stateNode,n,2),t=vs(t,n,2),t!==null&&(je(t,2),xa(t))}function Yt(t,n,s){if(t.tag===3)n_(t,t,s);else for(;n!==null;){if(n.tag===3){n_(n,t,s);break}else if(n.tag===1){var l=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(bs===null||!bs.has(l))){t=zi(s,t),s=ig(2),l=vs(n,s,2),l!==null&&(ag(s,l,n,t),je(l,2),xa(l));break}}n=n.return}}function Dd(t,n,s){var l=t.pingCache;if(l===null){l=t.pingCache=new IM;var f=new Set;l.set(n,f)}else f=l.get(n),f===void 0&&(f=new Set,l.set(n,f));f.has(s)||(yd=!0,f.add(s),t=GM.bind(null,t,n,s),n.then(t,t))}function GM(t,n,s){var l=t.pingCache;l!==null&&l.delete(n),t.pingedLanes|=t.suspendedLanes&s,t.warmLanes&=~s,Jt===t&&(Ct&s)===s&&(mn===4||mn===3&&(Ct&62914560)===Ct&&300>Ut()-Ic?(Gt&2)===0&&ao(t,0):Ed|=s,no===Ct&&(no=0)),xa(t)}function i_(t,n){n===0&&(n=Ae()),t=ar(t,n),t!==null&&(je(t,n),xa(t))}function VM(t){var n=t.memoizedState,s=0;n!==null&&(s=n.retryLane),i_(t,s)}function kM(t,n){var s=0;switch(t.tag){case 31:case 13:var l=t.stateNode,f=t.memoizedState;f!==null&&(s=f.retryLane);break;case 19:l=t.stateNode;break;case 22:l=t.stateNode._retryCache;break;default:throw Error(r(314))}l!==null&&l.delete(n),i_(t,s)}function XM(t,n){return fn(t,n)}var kc=null,ro=null,Ld=!1,Xc=!1,Nd=!1,Rs=0;function xa(t){t!==ro&&t.next===null&&(ro===null?kc=ro=t:ro=ro.next=t),Xc=!0,Ld||(Ld=!0,YM())}function Ml(t,n){if(!Nd&&Xc){Nd=!0;do for(var s=!1,l=kc;l!==null;){if(t!==0){var f=l.pendingLanes;if(f===0)var p=0;else{var M=l.suspendedLanes,w=l.pingedLanes;p=(1<<31-Ge(42|t)+1)-1,p&=f&~(M&~w),p=p&201326741?p&201326741|1:p?p|2:0}p!==0&&(s=!0,o_(l,p))}else p=Ct,p=ve(l,l===Jt?p:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(p&3)===0||Fe(l,p)||(s=!0,o_(l,p));l=l.next}while(s);Nd=!1}}function WM(){a_()}function a_(){Xc=Ld=!1;var t=0;Rs!==0&&ny()&&(t=Rs);for(var n=Ut(),s=null,l=kc;l!==null;){var f=l.next,p=s_(l,n);p===0?(l.next=null,s===null?kc=f:s.next=f,f===null&&(ro=s)):(s=l,(t!==0||(p&3)!==0)&&(Xc=!0)),l=f}Un!==0&&Un!==5||Ml(t),Rs!==0&&(Rs=0)}function s_(t,n){for(var s=t.suspendedLanes,l=t.pingedLanes,f=t.expirationTimes,p=t.pendingLanes&-62914561;0<p;){var M=31-Ge(p),w=1<<M,V=f[M];V===-1?((w&s)===0||(w&l)!==0)&&(f[M]=He(w,n)):V<=n&&(t.expiredLanes|=w),p&=~w}if(n=Jt,s=Ct,s=ve(t,t===n?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l=t.callbackNode,s===0||t===n&&(Wt===2||Wt===9)||t.cancelPendingCommit!==null)return l!==null&&l!==null&&ct(l),t.callbackNode=null,t.callbackPriority=0;if((s&3)===0||Fe(t,s)){if(n=s&-s,n===t.callbackPriority)return n;switch(l!==null&&ct(l),ii(s)){case 2:case 8:s=b;break;case 32:s=ee;break;case 268435456:s=me;break;default:s=ee}return l=r_.bind(null,t),s=fn(s,l),t.callbackPriority=n,t.callbackNode=s,n}return l!==null&&l!==null&&ct(l),t.callbackPriority=2,t.callbackNode=null,2}function r_(t,n){if(Un!==0&&Un!==5)return t.callbackNode=null,t.callbackPriority=0,null;var s=t.callbackNode;if(Vc()&&t.callbackNode!==s)return null;var l=Ct;return l=ve(t,t===Jt?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l===0?null:(Gg(t,l,n),s_(t,Ut()),t.callbackNode!=null&&t.callbackNode===s?r_.bind(null,t):null)}function o_(t,n){if(Vc())return null;Gg(t,n,!0)}function YM(){ay(function(){(Gt&6)!==0?fn(I,WM):a_()})}function Ud(){if(Rs===0){var t=Wr;t===0&&(t=Qe,Qe<<=1,(Qe&261888)===0&&(Qe=256)),Rs=t}return Rs}function l_(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:xi(""+t)}function c_(t,n){var s=n.ownerDocument.createElement("input");return s.name=n.name,s.value=n.value,t.id&&s.setAttribute("form",t.id),n.parentNode.insertBefore(s,n),t=new FormData(t),s.parentNode.removeChild(s),t}function qM(t,n,s,l,f){if(n==="submit"&&s&&s.stateNode===f){var p=l_((f[Dn]||null).action),M=l.submitter;M&&(n=(n=M[Dn]||null)?l_(n.formAction):M.getAttribute("formAction"),n!==null&&(p=n,M=null));var w=new Nr("action","action",null,l,f);t.push({event:w,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Rs!==0){var V=M?c_(f,M):new FormData(f);$f(s,{pending:!0,data:V,method:f.method,action:p},null,V)}}else typeof p=="function"&&(w.preventDefault(),V=M?c_(f,M):new FormData(f),$f(s,{pending:!0,data:V,method:f.method,action:p},p,V))},currentTarget:f}]})}}for(var Od=0;Od<gf.length;Od++){var Pd=gf[Od],jM=Pd.toLowerCase(),ZM=Pd[0].toUpperCase()+Pd.slice(1);aa(jM,"on"+ZM)}aa(Hm,"onAnimationEnd"),aa(Gm,"onAnimationIteration"),aa(Vm,"onAnimationStart"),aa("dblclick","onDoubleClick"),aa("focusin","onFocus"),aa("focusout","onBlur"),aa(fM,"onTransitionRun"),aa(dM,"onTransitionStart"),aa(hM,"onTransitionCancel"),aa(km,"onTransitionEnd"),ce("onMouseEnter",["mouseout","mouseover"]),ce("onMouseLeave",["mouseout","mouseover"]),ce("onPointerEnter",["pointerout","pointerover"]),ce("onPointerLeave",["pointerout","pointerover"]),K("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),K("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),K("onBeforeInput",["compositionend","keypress","textInput","paste"]),K("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),K("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),K("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var yl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),KM=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(yl));function u_(t,n){n=(n&4)!==0;for(var s=0;s<t.length;s++){var l=t[s],f=l.event;l=l.listeners;e:{var p=void 0;if(n)for(var M=l.length-1;0<=M;M--){var w=l[M],V=w.instance,oe=w.currentTarget;if(w=w.listener,V!==p&&f.isPropagationStopped())break e;p=w,f.currentTarget=oe;try{p(f)}catch(Me){sc(Me)}f.currentTarget=null,p=V}else for(M=0;M<l.length;M++){if(w=l[M],V=w.instance,oe=w.currentTarget,w=w.listener,V!==p&&f.isPropagationStopped())break e;p=w,f.currentTarget=oe;try{p(f)}catch(Me){sc(Me)}f.currentTarget=null,p=V}}}}function Rt(t,n){var s=n[Pi];s===void 0&&(s=n[Pi]=new Set);var l=t+"__bubble";s.has(l)||(f_(n,t,2,!1),s.add(l))}function Id(t,n,s){var l=0;n&&(l|=4),f_(s,t,l,n)}var Wc="_reactListening"+Math.random().toString(36).slice(2);function Bd(t){if(!t[Wc]){t[Wc]=!0,Js.forEach(function(s){s!=="selectionchange"&&(KM.has(s)||Id(s,!1,t),Id(s,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Wc]||(n[Wc]=!0,Id("selectionchange",!1,n))}}function f_(t,n,s,l){switch(H_(n)){case 2:var f=by;break;case 8:f=Ty;break;default:f=Jd}s=f.bind(null,n,s,t),f=void 0,!Wo||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(f=!0),l?f!==void 0?t.addEventListener(n,s,{capture:!0,passive:f}):t.addEventListener(n,s,!0):f!==void 0?t.addEventListener(n,s,{passive:f}):t.addEventListener(n,s,!1)}function Fd(t,n,s,l,f){var p=l;if((n&1)===0&&(n&2)===0&&l!==null)e:for(;;){if(l===null)return;var M=l.tag;if(M===3||M===4){var w=l.stateNode.containerInfo;if(w===f)break;if(M===4)for(M=l.return;M!==null;){var V=M.tag;if((V===3||V===4)&&M.stateNode.containerInfo===f)return;M=M.return}for(;w!==null;){if(M=ui(w),M===null)return;if(V=M.tag,V===5||V===6||V===26||V===27){l=p=M;continue e}w=w.parentNode}}l=l.return}nc(function(){var oe=p,Me=ko(s),Re=[];e:{var fe=Xm.get(t);if(fe!==void 0){var pe=Nr,$e=t;switch(t){case"keypress":if(Dr(s)===0)break e;case"keydown":case"keyup":pe=kS;break;case"focusin":$e="focus",pe=yi;break;case"focusout":$e="blur",pe=yi;break;case"beforeblur":case"afterblur":pe=yi;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":pe=Mi;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":pe=Bi;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":pe=YS;break;case Hm:case Gm:case Vm:pe=us;break;case km:pe=jS;break;case"scroll":case"scrollend":pe=of;break;case"wheel":pe=KS;break;case"copy":case"cut":case"paste":pe=qo;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":pe=Mm;break;case"toggle":case"beforetoggle":pe=JS}var at=(n&4)!==0,Qt=!at&&(t==="scroll"||t==="scrollend"),$=at?fe!==null?fe+"Capture":null:fe;at=[];for(var W=oe,re;W!==null;){var Ee=W;if(re=Ee.stateNode,Ee=Ee.tag,Ee!==5&&Ee!==26&&Ee!==27||re===null||$===null||(Ee=La(W,$),Ee!=null&&at.push(El(W,Ee,re))),Qt)break;W=W.return}0<at.length&&(fe=new pe(fe,$e,null,s,Me),Re.push({event:fe,listeners:at}))}}if((n&7)===0){e:{if(fe=t==="mouseover"||t==="pointerover",pe=t==="mouseout"||t==="pointerout",fe&&s!==wr&&($e=s.relatedTarget||s.fromElement)&&(ui($e)||$e[Ln]))break e;if((pe||fe)&&(fe=Me.window===Me?Me:(fe=Me.ownerDocument)?fe.defaultView||fe.parentWindow:window,pe?($e=s.relatedTarget||s.toElement,pe=oe,$e=$e?ui($e):null,$e!==null&&(Qt=c($e),at=$e.tag,$e!==Qt||at!==5&&at!==27&&at!==6)&&($e=null)):(pe=null,$e=oe),pe!==$e)){if(at=Mi,Ee="onMouseLeave",$="onMouseEnter",W="mouse",(t==="pointerout"||t==="pointerover")&&(at=Mm,Ee="onPointerLeave",$="onPointerEnter",W="pointer"),Qt=pe==null?fe:ma(pe),re=$e==null?fe:ma($e),fe=new at(Ee,W+"leave",pe,s,Me),fe.target=Qt,fe.relatedTarget=re,Ee=null,ui(Me)===oe&&(at=new at($,W+"enter",$e,s,Me),at.target=re,at.relatedTarget=Qt,Ee=at),Qt=Ee,pe&&$e)t:{for(at=QM,$=pe,W=$e,re=0,Ee=$;Ee;Ee=at(Ee))re++;Ee=0;for(var nt=W;nt;nt=at(nt))Ee++;for(;0<re-Ee;)$=at($),re--;for(;0<Ee-re;)W=at(W),Ee--;for(;re--;){if($===W||W!==null&&$===W.alternate){at=$;break t}$=at($),W=at(W)}at=null}else at=null;pe!==null&&d_(Re,fe,pe,at,!1),$e!==null&&Qt!==null&&d_(Re,Qt,$e,at,!0)}}e:{if(fe=oe?ma(oe):window,pe=fe.nodeName&&fe.nodeName.toLowerCase(),pe==="select"||pe==="input"&&fe.type==="file")var Bt=wm;else if(Rm(fe))if(Dm)Bt=lM;else{Bt=rM;var et=sM}else pe=fe.nodeName,!pe||pe.toLowerCase()!=="input"||fe.type!=="checkbox"&&fe.type!=="radio"?oe&&Ot(oe.elementType)&&(Bt=wm):Bt=oM;if(Bt&&(Bt=Bt(t,oe))){Cm(Re,Bt,s,Me);break e}et&&et(t,fe,oe),t==="focusout"&&oe&&fe.type==="number"&&oe.memoizedProps.value!=null&&ot(fe,"number",fe.value)}switch(et=oe?ma(oe):window,t){case"focusin":(Rm(et)||et.contentEditable==="true")&&(Br=et,hf=oe,Jo=null);break;case"focusout":Jo=hf=Br=null;break;case"mousedown":pf=!0;break;case"contextmenu":case"mouseup":case"dragend":pf=!1,Fm(Re,s,Me);break;case"selectionchange":if(uM)break;case"keydown":case"keyup":Fm(Re,s,Me)}var _t;if(cf)e:{switch(t){case"compositionstart":var wt="onCompositionStart";break e;case"compositionend":wt="onCompositionEnd";break e;case"compositionupdate":wt="onCompositionUpdate";break e}wt=void 0}else Ir?Tm(t,s)&&(wt="onCompositionEnd"):t==="keydown"&&s.keyCode===229&&(wt="onCompositionStart");wt&&(ym&&s.locale!=="ko"&&(Ir||wt!=="onCompositionStart"?wt==="onCompositionEnd"&&Ir&&(_t=er()):(na=Me,Yo="value"in na?na.value:na.textContent,Ir=!0)),et=Yc(oe,wt),0<et.length&&(wt=new Sm(wt,t,null,s,Me),Re.push({event:wt,listeners:et}),_t?wt.data=_t:(_t=Am(s),_t!==null&&(wt.data=_t)))),(_t=eM?tM(t,s):nM(t,s))&&(wt=Yc(oe,"onBeforeInput"),0<wt.length&&(et=new Sm("onBeforeInput","beforeinput",null,s,Me),Re.push({event:et,listeners:wt}),et.data=_t)),qM(Re,t,oe,s,Me)}u_(Re,n)})}function El(t,n,s){return{instance:t,listener:n,currentTarget:s}}function Yc(t,n){for(var s=n+"Capture",l=[];t!==null;){var f=t,p=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||p===null||(f=La(t,s),f!=null&&l.unshift(El(t,f,p)),f=La(t,n),f!=null&&l.push(El(t,f,p))),t.tag===3)return l;t=t.return}return[]}function QM(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function d_(t,n,s,l,f){for(var p=n._reactName,M=[];s!==null&&s!==l;){var w=s,V=w.alternate,oe=w.stateNode;if(w=w.tag,V!==null&&V===l)break;w!==5&&w!==26&&w!==27||oe===null||(V=oe,f?(oe=La(s,p),oe!=null&&M.unshift(El(s,oe,V))):f||(oe=La(s,p),oe!=null&&M.push(El(s,oe,V)))),s=s.return}M.length!==0&&t.push({event:n,listeners:M})}var JM=/\r\n?/g,$M=/\u0000|\uFFFD/g;function h_(t){return(typeof t=="string"?t:""+t).replace(JM,`
`).replace($M,"")}function p_(t,n){return n=h_(n),h_(t)===n}function Kt(t,n,s,l,f,p){switch(s){case"children":typeof l=="string"?n==="body"||n==="textarea"&&l===""||Kn(t,l):(typeof l=="number"||typeof l=="bigint")&&n!=="body"&&Kn(t,""+l);break;case"className":xe(t,"class",l);break;case"tabIndex":xe(t,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":xe(t,s,l);break;case"style":si(t,l,p);break;case"data":if(n!=="object"){xe(t,"data",l);break}case"src":case"href":if(l===""&&(n!=="a"||s!=="href")){t.removeAttribute(s);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(s);break}l=xi(""+l),t.setAttribute(s,l);break;case"action":case"formAction":if(typeof l=="function"){t.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof p=="function"&&(s==="formAction"?(n!=="input"&&Kt(t,n,"name",f.name,f,null),Kt(t,n,"formEncType",f.formEncType,f,null),Kt(t,n,"formMethod",f.formMethod,f,null),Kt(t,n,"formTarget",f.formTarget,f,null)):(Kt(t,n,"encType",f.encType,f,null),Kt(t,n,"method",f.method,f,null),Kt(t,n,"target",f.target,f,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(s);break}l=xi(""+l),t.setAttribute(s,l);break;case"onClick":l!=null&&(t.onclick=Bn);break;case"onScroll":l!=null&&Rt("scroll",t);break;case"onScrollEnd":l!=null&&Rt("scrollend",t);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(s=l.__html,s!=null){if(f.children!=null)throw Error(r(60));t.innerHTML=s}}break;case"multiple":t.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":t.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){t.removeAttribute("xlink:href");break}s=xi(""+l),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,""+l):t.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,""):t.removeAttribute(s);break;case"capture":case"download":l===!0?t.setAttribute(s,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,l):t.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?t.setAttribute(s,l):t.removeAttribute(s);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?t.removeAttribute(s):t.setAttribute(s,l);break;case"popover":Rt("beforetoggle",t),Rt("toggle",t),ne(t,"popover",l);break;case"xlinkActuate":be(t,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":be(t,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":be(t,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":be(t,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":be(t,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":be(t,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":be(t,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":be(t,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":be(t,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":ne(t,"is",l);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=fi.get(s)||s,ne(t,s,l))}}function zd(t,n,s,l,f,p){switch(s){case"style":si(t,l,p);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(s=l.__html,s!=null){if(f.children!=null)throw Error(r(60));t.innerHTML=s}}break;case"children":typeof l=="string"?Kn(t,l):(typeof l=="number"||typeof l=="bigint")&&Kn(t,""+l);break;case"onScroll":l!=null&&Rt("scroll",t);break;case"onScrollEnd":l!=null&&Rt("scrollend",t);break;case"onClick":l!=null&&(t.onclick=Bn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!R.hasOwnProperty(s))e:{if(s[0]==="o"&&s[1]==="n"&&(f=s.endsWith("Capture"),n=s.slice(2,f?s.length-7:void 0),p=t[Dn]||null,p=p!=null?p[s]:null,typeof p=="function"&&t.removeEventListener(n,p,f),typeof l=="function")){typeof p!="function"&&p!==null&&(s in t?t[s]=null:t.hasAttribute(s)&&t.removeAttribute(s)),t.addEventListener(n,l,f);break e}s in t?t[s]=l:l===!0?t.setAttribute(s,""):ne(t,s,l)}}}function Wn(t,n,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Rt("error",t),Rt("load",t);var l=!1,f=!1,p;for(p in s)if(s.hasOwnProperty(p)){var M=s[p];if(M!=null)switch(p){case"src":l=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Kt(t,n,p,M,s,null)}}f&&Kt(t,n,"srcSet",s.srcSet,s,null),l&&Kt(t,n,"src",s.src,s,null);return;case"input":Rt("invalid",t);var w=p=M=f=null,V=null,oe=null;for(l in s)if(s.hasOwnProperty(l)){var Me=s[l];if(Me!=null)switch(l){case"name":f=Me;break;case"type":M=Me;break;case"checked":V=Me;break;case"defaultChecked":oe=Me;break;case"value":p=Me;break;case"defaultValue":w=Me;break;case"children":case"dangerouslySetInnerHTML":if(Me!=null)throw Error(r(137,n));break;default:Kt(t,n,l,Me,s,null)}}vn(t,p,w,V,oe,M,f,!1);return;case"select":Rt("invalid",t),l=M=p=null;for(f in s)if(s.hasOwnProperty(f)&&(w=s[f],w!=null))switch(f){case"value":p=w;break;case"defaultValue":M=w;break;case"multiple":l=w;default:Kt(t,n,f,w,s,null)}n=p,s=M,t.multiple=!!l,n!=null?hn(t,!!l,n,!1):s!=null&&hn(t,!!l,s,!0);return;case"textarea":Rt("invalid",t),p=f=l=null;for(M in s)if(s.hasOwnProperty(M)&&(w=s[M],w!=null))switch(M){case"value":l=w;break;case"defaultValue":f=w;break;case"children":p=w;break;case"dangerouslySetInnerHTML":if(w!=null)throw Error(r(91));break;default:Kt(t,n,M,w,s,null)}ai(t,l,f,p);return;case"option":for(V in s)if(s.hasOwnProperty(V)&&(l=s[V],l!=null))switch(V){case"selected":t.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Kt(t,n,V,l,s,null)}return;case"dialog":Rt("beforetoggle",t),Rt("toggle",t),Rt("cancel",t),Rt("close",t);break;case"iframe":case"object":Rt("load",t);break;case"video":case"audio":for(l=0;l<yl.length;l++)Rt(yl[l],t);break;case"image":Rt("error",t),Rt("load",t);break;case"details":Rt("toggle",t);break;case"embed":case"source":case"link":Rt("error",t),Rt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(oe in s)if(s.hasOwnProperty(oe)&&(l=s[oe],l!=null))switch(oe){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Kt(t,n,oe,l,s,null)}return;default:if(Ot(n)){for(Me in s)s.hasOwnProperty(Me)&&(l=s[Me],l!==void 0&&zd(t,n,Me,l,s,void 0));return}}for(w in s)s.hasOwnProperty(w)&&(l=s[w],l!=null&&Kt(t,n,w,l,s,null))}function ey(t,n,s,l){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,p=null,M=null,w=null,V=null,oe=null,Me=null;for(pe in s){var Re=s[pe];if(s.hasOwnProperty(pe)&&Re!=null)switch(pe){case"checked":break;case"value":break;case"defaultValue":V=Re;default:l.hasOwnProperty(pe)||Kt(t,n,pe,null,l,Re)}}for(var fe in l){var pe=l[fe];if(Re=s[fe],l.hasOwnProperty(fe)&&(pe!=null||Re!=null))switch(fe){case"type":p=pe;break;case"name":f=pe;break;case"checked":oe=pe;break;case"defaultChecked":Me=pe;break;case"value":M=pe;break;case"defaultValue":w=pe;break;case"children":case"dangerouslySetInnerHTML":if(pe!=null)throw Error(r(137,n));break;default:pe!==Re&&Kt(t,n,fe,pe,l,Re)}}Ue(t,M,w,V,oe,Me,p,f);return;case"select":pe=M=w=fe=null;for(p in s)if(V=s[p],s.hasOwnProperty(p)&&V!=null)switch(p){case"value":break;case"multiple":pe=V;default:l.hasOwnProperty(p)||Kt(t,n,p,null,l,V)}for(f in l)if(p=l[f],V=s[f],l.hasOwnProperty(f)&&(p!=null||V!=null))switch(f){case"value":fe=p;break;case"defaultValue":w=p;break;case"multiple":M=p;default:p!==V&&Kt(t,n,f,p,l,V)}n=w,s=M,l=pe,fe!=null?hn(t,!!s,fe,!1):!!l!=!!s&&(n!=null?hn(t,!!s,n,!0):hn(t,!!s,s?[]:"",!1));return;case"textarea":pe=fe=null;for(w in s)if(f=s[w],s.hasOwnProperty(w)&&f!=null&&!l.hasOwnProperty(w))switch(w){case"value":break;case"children":break;default:Kt(t,n,w,null,l,f)}for(M in l)if(f=l[M],p=s[M],l.hasOwnProperty(M)&&(f!=null||p!=null))switch(M){case"value":fe=f;break;case"defaultValue":pe=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(r(91));break;default:f!==p&&Kt(t,n,M,f,l,p)}Zn(t,fe,pe);return;case"option":for(var $e in s)if(fe=s[$e],s.hasOwnProperty($e)&&fe!=null&&!l.hasOwnProperty($e))switch($e){case"selected":t.selected=!1;break;default:Kt(t,n,$e,null,l,fe)}for(V in l)if(fe=l[V],pe=s[V],l.hasOwnProperty(V)&&fe!==pe&&(fe!=null||pe!=null))switch(V){case"selected":t.selected=fe&&typeof fe!="function"&&typeof fe!="symbol";break;default:Kt(t,n,V,fe,l,pe)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var at in s)fe=s[at],s.hasOwnProperty(at)&&fe!=null&&!l.hasOwnProperty(at)&&Kt(t,n,at,null,l,fe);for(oe in l)if(fe=l[oe],pe=s[oe],l.hasOwnProperty(oe)&&fe!==pe&&(fe!=null||pe!=null))switch(oe){case"children":case"dangerouslySetInnerHTML":if(fe!=null)throw Error(r(137,n));break;default:Kt(t,n,oe,fe,l,pe)}return;default:if(Ot(n)){for(var Qt in s)fe=s[Qt],s.hasOwnProperty(Qt)&&fe!==void 0&&!l.hasOwnProperty(Qt)&&zd(t,n,Qt,void 0,l,fe);for(Me in l)fe=l[Me],pe=s[Me],!l.hasOwnProperty(Me)||fe===pe||fe===void 0&&pe===void 0||zd(t,n,Me,fe,l,pe);return}}for(var $ in s)fe=s[$],s.hasOwnProperty($)&&fe!=null&&!l.hasOwnProperty($)&&Kt(t,n,$,null,l,fe);for(Re in l)fe=l[Re],pe=s[Re],!l.hasOwnProperty(Re)||fe===pe||fe==null&&pe==null||Kt(t,n,Re,fe,l,pe)}function m_(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function ty(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,s=performance.getEntriesByType("resource"),l=0;l<s.length;l++){var f=s[l],p=f.transferSize,M=f.initiatorType,w=f.duration;if(p&&w&&m_(M)){for(M=0,w=f.responseEnd,l+=1;l<s.length;l++){var V=s[l],oe=V.startTime;if(oe>w)break;var Me=V.transferSize,Re=V.initiatorType;Me&&m_(Re)&&(V=V.responseEnd,M+=Me*(V<w?1:(w-oe)/(V-oe)))}if(--l,n+=8*(p+M)/(f.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Hd=null,Gd=null;function qc(t){return t.nodeType===9?t:t.ownerDocument}function g_(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function __(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Vd(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var kd=null;function ny(){var t=window.event;return t&&t.type==="popstate"?t===kd?!1:(kd=t,!0):(kd=null,!1)}var v_=typeof setTimeout=="function"?setTimeout:void 0,iy=typeof clearTimeout=="function"?clearTimeout:void 0,x_=typeof Promise=="function"?Promise:void 0,ay=typeof queueMicrotask=="function"?queueMicrotask:typeof x_<"u"?function(t){return x_.resolve(null).then(t).catch(sy)}:v_;function sy(t){setTimeout(function(){throw t})}function Cs(t){return t==="head"}function S_(t,n){var s=n,l=0;do{var f=s.nextSibling;if(t.removeChild(s),f&&f.nodeType===8)if(s=f.data,s==="/$"||s==="/&"){if(l===0){t.removeChild(f),uo(n);return}l--}else if(s==="$"||s==="$?"||s==="$~"||s==="$!"||s==="&")l++;else if(s==="html")bl(t.ownerDocument.documentElement);else if(s==="head"){s=t.ownerDocument.head,bl(s);for(var p=s.firstChild;p;){var M=p.nextSibling,w=p.nodeName;p[Ji]||w==="SCRIPT"||w==="STYLE"||w==="LINK"&&p.rel.toLowerCase()==="stylesheet"||s.removeChild(p),p=M}}else s==="body"&&bl(t.ownerDocument.body);s=f}while(s);uo(n)}function M_(t,n){var s=t;t=0;do{var l=s.nextSibling;if(s.nodeType===1?n?(s._stashedDisplay=s.style.display,s.style.display="none"):(s.style.display=s._stashedDisplay||"",s.getAttribute("style")===""&&s.removeAttribute("style")):s.nodeType===3&&(n?(s._stashedText=s.nodeValue,s.nodeValue=""):s.nodeValue=s._stashedText||""),l&&l.nodeType===8)if(s=l.data,s==="/$"){if(t===0)break;t--}else s!=="$"&&s!=="$?"&&s!=="$~"&&s!=="$!"||t++;s=l}while(s)}function Xd(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var s=n;switch(n=n.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":Xd(s),$i(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}t.removeChild(s)}}function ry(t,n,s,l){for(;t.nodeType===1;){var f=s;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!l&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(l){if(!t[Ji])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(p=t.getAttribute("rel"),p==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(p!==f.rel||t.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||t.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||t.getAttribute("title")!==(f.title==null?null:f.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(p=t.getAttribute("src"),(p!==(f.src==null?null:f.src)||t.getAttribute("type")!==(f.type==null?null:f.type)||t.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&p&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var p=f.name==null?null:""+f.name;if(f.type==="hidden"&&t.getAttribute("name")===p)return t}else return t;if(t=Xi(t.nextSibling),t===null)break}return null}function oy(t,n,s){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!s||(t=Xi(t.nextSibling),t===null))return null;return t}function y_(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=Xi(t.nextSibling),t===null))return null;return t}function Wd(t){return t.data==="$?"||t.data==="$~"}function Yd(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function ly(t,n){var s=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||s.readyState!=="loading")n();else{var l=function(){n(),s.removeEventListener("DOMContentLoaded",l)};s.addEventListener("DOMContentLoaded",l),t._reactRetry=l}}function Xi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var qd=null;function E_(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var s=t.data;if(s==="/$"||s==="/&"){if(n===0)return Xi(t.nextSibling);n--}else s!=="$"&&s!=="$!"&&s!=="$?"&&s!=="$~"&&s!=="&"||n++}t=t.nextSibling}return null}function b_(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var s=t.data;if(s==="$"||s==="$!"||s==="$?"||s==="$~"||s==="&"){if(n===0)return t;n--}else s!=="/$"&&s!=="/&"||n++}t=t.previousSibling}return null}function T_(t,n,s){switch(n=qc(s),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function bl(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);$i(t)}var Wi=new Map,A_=new Set;function jc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var qa=H.d;H.d={f:cy,r:uy,D:fy,C:dy,L:hy,m:py,X:gy,S:my,M:_y};function cy(){var t=qa.f(),n=zc();return t||n}function uy(t){var n=Ii(t);n!==null&&n.tag===5&&n.type==="form"?k0(n):qa.r(t)}var oo=typeof document>"u"?null:document;function R_(t,n,s){var l=oo;if(l&&typeof n=="string"&&n){var f=ut(n);f='link[rel="'+t+'"][href="'+f+'"]',typeof s=="string"&&(f+='[crossorigin="'+s+'"]'),A_.has(f)||(A_.add(f),t={rel:t,crossOrigin:s,href:n},l.querySelector(f)===null&&(n=l.createElement("link"),Wn(n,"link",t),dn(n),l.head.appendChild(n)))}}function fy(t){qa.D(t),R_("dns-prefetch",t,null)}function dy(t,n){qa.C(t,n),R_("preconnect",t,n)}function hy(t,n,s){qa.L(t,n,s);var l=oo;if(l&&t&&n){var f='link[rel="preload"][as="'+ut(n)+'"]';n==="image"&&s&&s.imageSrcSet?(f+='[imagesrcset="'+ut(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(f+='[imagesizes="'+ut(s.imageSizes)+'"]')):f+='[href="'+ut(t)+'"]';var p=f;switch(n){case"style":p=lo(t);break;case"script":p=co(t)}Wi.has(p)||(t=_({rel:"preload",href:n==="image"&&s&&s.imageSrcSet?void 0:t,as:n},s),Wi.set(p,t),l.querySelector(f)!==null||n==="style"&&l.querySelector(Tl(p))||n==="script"&&l.querySelector(Al(p))||(n=l.createElement("link"),Wn(n,"link",t),dn(n),l.head.appendChild(n)))}}function py(t,n){qa.m(t,n);var s=oo;if(s&&t){var l=n&&typeof n.as=="string"?n.as:"script",f='link[rel="modulepreload"][as="'+ut(l)+'"][href="'+ut(t)+'"]',p=f;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":p=co(t)}if(!Wi.has(p)&&(t=_({rel:"modulepreload",href:t},n),Wi.set(p,t),s.querySelector(f)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(Al(p)))return}l=s.createElement("link"),Wn(l,"link",t),dn(l),s.head.appendChild(l)}}}function my(t,n,s){qa.S(t,n,s);var l=oo;if(l&&t){var f=ea(l).hoistableStyles,p=lo(t);n=n||"default";var M=f.get(p);if(!M){var w={loading:0,preload:null};if(M=l.querySelector(Tl(p)))w.loading=5;else{t=_({rel:"stylesheet",href:t,"data-precedence":n},s),(s=Wi.get(p))&&jd(t,s);var V=M=l.createElement("link");dn(V),Wn(V,"link",t),V._p=new Promise(function(oe,Me){V.onload=oe,V.onerror=Me}),V.addEventListener("load",function(){w.loading|=1}),V.addEventListener("error",function(){w.loading|=2}),w.loading|=4,Zc(M,n,l)}M={type:"stylesheet",instance:M,count:1,state:w},f.set(p,M)}}}function gy(t,n){qa.X(t,n);var s=oo;if(s&&t){var l=ea(s).hoistableScripts,f=co(t),p=l.get(f);p||(p=s.querySelector(Al(f)),p||(t=_({src:t,async:!0},n),(n=Wi.get(f))&&Zd(t,n),p=s.createElement("script"),dn(p),Wn(p,"link",t),s.head.appendChild(p)),p={type:"script",instance:p,count:1,state:null},l.set(f,p))}}function _y(t,n){qa.M(t,n);var s=oo;if(s&&t){var l=ea(s).hoistableScripts,f=co(t),p=l.get(f);p||(p=s.querySelector(Al(f)),p||(t=_({src:t,async:!0,type:"module"},n),(n=Wi.get(f))&&Zd(t,n),p=s.createElement("script"),dn(p),Wn(p,"link",t),s.head.appendChild(p)),p={type:"script",instance:p,count:1,state:null},l.set(f,p))}}function C_(t,n,s,l){var f=(f=te.current)?jc(f):null;if(!f)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(n=lo(s.href),s=ea(f).hoistableStyles,l=s.get(n),l||(l={type:"style",instance:null,count:0,state:null},s.set(n,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){t=lo(s.href);var p=ea(f).hoistableStyles,M=p.get(t);if(M||(f=f.ownerDocument||f,M={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},p.set(t,M),(p=f.querySelector(Tl(t)))&&!p._p&&(M.instance=p,M.state.loading=5),Wi.has(t)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},Wi.set(t,s),p||vy(f,t,s,M.state))),n&&l===null)throw Error(r(528,""));return M}if(n&&l!==null)throw Error(r(529,""));return null;case"script":return n=s.async,s=s.src,typeof s=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=co(s),s=ea(f).hoistableScripts,l=s.get(n),l||(l={type:"script",instance:null,count:0,state:null},s.set(n,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function lo(t){return'href="'+ut(t)+'"'}function Tl(t){return'link[rel="stylesheet"]['+t+"]"}function w_(t){return _({},t,{"data-precedence":t.precedence,precedence:null})}function vy(t,n,s,l){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?l.loading=1:(n=t.createElement("link"),l.preload=n,n.addEventListener("load",function(){return l.loading|=1}),n.addEventListener("error",function(){return l.loading|=2}),Wn(n,"link",s),dn(n),t.head.appendChild(n))}function co(t){return'[src="'+ut(t)+'"]'}function Al(t){return"script[async]"+t}function D_(t,n,s){if(n.count++,n.instance===null)switch(n.type){case"style":var l=t.querySelector('style[data-href~="'+ut(s.href)+'"]');if(l)return n.instance=l,dn(l),l;var f=_({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return l=(t.ownerDocument||t).createElement("style"),dn(l),Wn(l,"style",f),Zc(l,s.precedence,t),n.instance=l;case"stylesheet":f=lo(s.href);var p=t.querySelector(Tl(f));if(p)return n.state.loading|=4,n.instance=p,dn(p),p;l=w_(s),(f=Wi.get(f))&&jd(l,f),p=(t.ownerDocument||t).createElement("link"),dn(p);var M=p;return M._p=new Promise(function(w,V){M.onload=w,M.onerror=V}),Wn(p,"link",l),n.state.loading|=4,Zc(p,s.precedence,t),n.instance=p;case"script":return p=co(s.src),(f=t.querySelector(Al(p)))?(n.instance=f,dn(f),f):(l=s,(f=Wi.get(p))&&(l=_({},s),Zd(l,f)),t=t.ownerDocument||t,f=t.createElement("script"),dn(f),Wn(f,"link",l),t.head.appendChild(f),n.instance=f);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(l=n.instance,n.state.loading|=4,Zc(l,s.precedence,t));return n.instance}function Zc(t,n,s){for(var l=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=l.length?l[l.length-1]:null,p=f,M=0;M<l.length;M++){var w=l[M];if(w.dataset.precedence===n)p=w;else if(p!==f)break}p?p.parentNode.insertBefore(t,p.nextSibling):(n=s.nodeType===9?s.head:s,n.insertBefore(t,n.firstChild))}function jd(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Zd(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Kc=null;function L_(t,n,s){if(Kc===null){var l=new Map,f=Kc=new Map;f.set(s,l)}else f=Kc,l=f.get(s),l||(l=new Map,f.set(s,l));if(l.has(t))return l;for(l.set(t,null),s=s.getElementsByTagName(t),f=0;f<s.length;f++){var p=s[f];if(!(p[Ji]||p[ln]||t==="link"&&p.getAttribute("rel")==="stylesheet")&&p.namespaceURI!=="http://www.w3.org/2000/svg"){var M=p.getAttribute(n)||"";M=t+M;var w=l.get(M);w?w.push(p):l.set(M,[p])}}return l}function N_(t,n,s){t=t.ownerDocument||t,t.head.insertBefore(s,n==="title"?t.querySelector("head > title"):null)}function xy(t,n,s){if(s===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function U_(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function Sy(t,n,s,l){if(s.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(s.state.loading&4)===0){if(s.instance===null){var f=lo(l.href),p=n.querySelector(Tl(f));if(p){n=p._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=Qc.bind(t),n.then(t,t)),s.state.loading|=4,s.instance=p,dn(p);return}p=n.ownerDocument||n,l=w_(l),(f=Wi.get(f))&&jd(l,f),p=p.createElement("link"),dn(p);var M=p;M._p=new Promise(function(w,V){M.onload=w,M.onerror=V}),Wn(p,"link",l),s.instance=p}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(s,n),(n=s.state.preload)&&(s.state.loading&3)===0&&(t.count++,s=Qc.bind(t),n.addEventListener("load",s),n.addEventListener("error",s))}}var Kd=0;function My(t,n){return t.stylesheets&&t.count===0&&$c(t,t.stylesheets),0<t.count||0<t.imgCount?function(s){var l=setTimeout(function(){if(t.stylesheets&&$c(t,t.stylesheets),t.unsuspend){var p=t.unsuspend;t.unsuspend=null,p()}},6e4+n);0<t.imgBytes&&Kd===0&&(Kd=62500*ty());var f=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&$c(t,t.stylesheets),t.unsuspend)){var p=t.unsuspend;t.unsuspend=null,p()}},(t.imgBytes>Kd?50:800)+n);return t.unsuspend=s,function(){t.unsuspend=null,clearTimeout(l),clearTimeout(f)}}:null}function Qc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)$c(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Jc=null;function $c(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Jc=new Map,n.forEach(yy,t),Jc=null,Qc.call(t))}function yy(t,n){if(!(n.state.loading&4)){var s=Jc.get(t);if(s)var l=s.get(null);else{s=new Map,Jc.set(t,s);for(var f=t.querySelectorAll("link[data-precedence],style[data-precedence]"),p=0;p<f.length;p++){var M=f[p];(M.nodeName==="LINK"||M.getAttribute("media")!=="not all")&&(s.set(M.dataset.precedence,M),l=M)}l&&s.set(null,l)}f=n.instance,M=f.getAttribute("data-precedence"),p=s.get(M)||l,p===l&&s.set(null,f),s.set(M,f),this.count++,l=Qc.bind(this),f.addEventListener("load",l),f.addEventListener("error",l),p?p.parentNode.insertBefore(f,p.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(f,t.firstChild)),n.state.loading|=4}}var Rl={$$typeof:P,Provider:null,Consumer:null,_currentValue:J,_currentValue2:J,_threadCount:0};function Ey(t,n,s,l,f,p,M,w,V){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Je(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Je(0),this.hiddenUpdates=Je(null),this.identifierPrefix=l,this.onUncaughtError=f,this.onCaughtError=p,this.onRecoverableError=M,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=V,this.incompleteTransitions=new Map}function O_(t,n,s,l,f,p,M,w,V,oe,Me,Re){return t=new Ey(t,n,s,M,V,oe,Me,Re,w),n=1,p===!0&&(n|=24),p=bi(3,null,null,n),t.current=p,p.stateNode=t,n=wf(),n.refCount++,t.pooledCache=n,n.refCount++,p.memoizedState={element:l,isDehydrated:s,cache:n},Uf(p),t}function P_(t){return t?(t=Hr,t):Hr}function I_(t,n,s,l,f,p){f=P_(f),l.context===null?l.context=f:l.pendingContext=f,l=_s(n),l.payload={element:s},p=p===void 0?null:p,p!==null&&(l.callback=p),s=vs(t,l,n),s!==null&&(gi(s,t,n),sl(s,t,n))}function B_(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var s=t.retryLane;t.retryLane=s!==0&&s<n?s:n}}function Qd(t,n){B_(t,n),(t=t.alternate)&&B_(t,n)}function F_(t){if(t.tag===13||t.tag===31){var n=ar(t,67108864);n!==null&&gi(n,t,67108864),Qd(t,67108864)}}function z_(t){if(t.tag===13||t.tag===31){var n=wi();n=In(n);var s=ar(t,n);s!==null&&gi(s,t,n),Qd(t,n)}}var eu=!0;function by(t,n,s,l){var f=z.T;z.T=null;var p=H.p;try{H.p=2,Jd(t,n,s,l)}finally{H.p=p,z.T=f}}function Ty(t,n,s,l){var f=z.T;z.T=null;var p=H.p;try{H.p=8,Jd(t,n,s,l)}finally{H.p=p,z.T=f}}function Jd(t,n,s,l){if(eu){var f=$d(l);if(f===null)Fd(t,n,l,tu,s),G_(t,l);else if(Ry(f,t,n,s,l))l.stopPropagation();else if(G_(t,l),n&4&&-1<Ay.indexOf(t)){for(;f!==null;){var p=Ii(f);if(p!==null)switch(p.tag){case 3:if(p=p.stateNode,p.current.memoizedState.isDehydrated){var M=De(p.pendingLanes);if(M!==0){var w=p;for(w.pendingLanes|=2,w.entangledLanes|=2;M;){var V=1<<31-Ge(M);w.entanglements[1]|=V,M&=~V}xa(p),(Gt&6)===0&&(Bc=Ut()+500,Ml(0))}}break;case 31:case 13:w=ar(p,2),w!==null&&gi(w,p,2),zc(),Qd(p,2)}if(p=$d(l),p===null&&Fd(t,n,l,tu,s),p===f)break;f=p}f!==null&&l.stopPropagation()}else Fd(t,n,l,null,s)}}function $d(t){return t=ko(t),eh(t)}var tu=null;function eh(t){if(tu=null,t=ui(t),t!==null){var n=c(t);if(n===null)t=null;else{var s=n.tag;if(s===13){if(t=u(n),t!==null)return t;t=null}else if(s===31){if(t=d(n),t!==null)return t;t=null}else if(s===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return tu=t,null}function H_(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(bt()){case I:return 2;case b:return 8;case ee:case le:return 32;case me:return 268435456;default:return 32}default:return 32}}var th=!1,ws=null,Ds=null,Ls=null,Cl=new Map,wl=new Map,Ns=[],Ay="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function G_(t,n){switch(t){case"focusin":case"focusout":ws=null;break;case"dragenter":case"dragleave":Ds=null;break;case"mouseover":case"mouseout":Ls=null;break;case"pointerover":case"pointerout":Cl.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":wl.delete(n.pointerId)}}function Dl(t,n,s,l,f,p){return t===null||t.nativeEvent!==p?(t={blockedOn:n,domEventName:s,eventSystemFlags:l,nativeEvent:p,targetContainers:[f]},n!==null&&(n=Ii(n),n!==null&&F_(n)),t):(t.eventSystemFlags|=l,n=t.targetContainers,f!==null&&n.indexOf(f)===-1&&n.push(f),t)}function Ry(t,n,s,l,f){switch(n){case"focusin":return ws=Dl(ws,t,n,s,l,f),!0;case"dragenter":return Ds=Dl(Ds,t,n,s,l,f),!0;case"mouseover":return Ls=Dl(Ls,t,n,s,l,f),!0;case"pointerover":var p=f.pointerId;return Cl.set(p,Dl(Cl.get(p)||null,t,n,s,l,f)),!0;case"gotpointercapture":return p=f.pointerId,wl.set(p,Dl(wl.get(p)||null,t,n,s,l,f)),!0}return!1}function V_(t){var n=ui(t.target);if(n!==null){var s=c(n);if(s!==null){if(n=s.tag,n===13){if(n=u(s),n!==null){t.blockedOn=n,rs(t.priority,function(){z_(s)});return}}else if(n===31){if(n=d(s),n!==null){t.blockedOn=n,rs(t.priority,function(){z_(s)});return}}else if(n===3&&s.stateNode.current.memoizedState.isDehydrated){t.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}t.blockedOn=null}function nu(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var s=$d(t.nativeEvent);if(s===null){s=t.nativeEvent;var l=new s.constructor(s.type,s);wr=l,s.target.dispatchEvent(l),wr=null}else return n=Ii(s),n!==null&&F_(n),t.blockedOn=s,!1;n.shift()}return!0}function k_(t,n,s){nu(t)&&s.delete(n)}function Cy(){th=!1,ws!==null&&nu(ws)&&(ws=null),Ds!==null&&nu(Ds)&&(Ds=null),Ls!==null&&nu(Ls)&&(Ls=null),Cl.forEach(k_),wl.forEach(k_)}function iu(t,n){t.blockedOn===n&&(t.blockedOn=null,th||(th=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,Cy)))}var au=null;function X_(t){au!==t&&(au=t,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){au===t&&(au=null);for(var n=0;n<t.length;n+=3){var s=t[n],l=t[n+1],f=t[n+2];if(typeof l!="function"){if(eh(l||s)===null)continue;break}var p=Ii(s);p!==null&&(t.splice(n,3),n-=3,$f(p,{pending:!0,data:f,method:s.method,action:l},l,f))}}))}function uo(t){function n(V){return iu(V,t)}ws!==null&&iu(ws,t),Ds!==null&&iu(Ds,t),Ls!==null&&iu(Ls,t),Cl.forEach(n),wl.forEach(n);for(var s=0;s<Ns.length;s++){var l=Ns[s];l.blockedOn===t&&(l.blockedOn=null)}for(;0<Ns.length&&(s=Ns[0],s.blockedOn===null);)V_(s),s.blockedOn===null&&Ns.shift();if(s=(t.ownerDocument||t).$$reactFormReplay,s!=null)for(l=0;l<s.length;l+=3){var f=s[l],p=s[l+1],M=f[Dn]||null;if(typeof p=="function")M||X_(s);else if(M){var w=null;if(p&&p.hasAttribute("formAction")){if(f=p,M=p[Dn]||null)w=M.formAction;else if(eh(f)!==null)continue}else w=M.action;typeof w=="function"?s[l+1]=w:(s.splice(l,3),l-=3),X_(s)}}}function W_(){function t(p){p.canIntercept&&p.info==="react-transition"&&p.intercept({handler:function(){return new Promise(function(M){return f=M})},focusReset:"manual",scroll:"manual"})}function n(){f!==null&&(f(),f=null),l||setTimeout(s,20)}function s(){if(!l&&!navigation.transition){var p=navigation.currentEntry;p&&p.url!=null&&navigation.navigate(p.url,{state:p.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,f=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(s,100),function(){l=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),f!==null&&(f(),f=null)}}}function nh(t){this._internalRoot=t}su.prototype.render=nh.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var s=n.current,l=wi();I_(s,l,t,n,null,null)},su.prototype.unmount=nh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;I_(t.current,2,null,t,null,null),zc(),n[Ln]=null}};function su(t){this._internalRoot=t}su.prototype.unstable_scheduleHydration=function(t){if(t){var n=En();t={blockedOn:null,target:t,priority:n};for(var s=0;s<Ns.length&&n!==0&&n<Ns[s].priority;s++);Ns.splice(s,0,t),s===0&&V_(t)}};var Y_=e.version;if(Y_!=="19.2.7")throw Error(r(527,Y_,"19.2.7"));H.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=h(n),t=t!==null?g(t):null,t=t===null?null:t.stateNode,t};var wy={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ru=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ru.isDisabled&&ru.supportsFiber)try{ge=ru.inject(wy),_e=ru}catch{}}return Nl.createRoot=function(t,n){if(!o(t))throw Error(r(299));var s=!1,l="",f=$0,p=eg,M=tg;return n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onUncaughtError!==void 0&&(f=n.onUncaughtError),n.onCaughtError!==void 0&&(p=n.onCaughtError),n.onRecoverableError!==void 0&&(M=n.onRecoverableError)),n=O_(t,1,!1,null,null,s,l,null,f,p,M,W_),t[Ln]=n.current,Bd(t),new nh(n)},Nl.hydrateRoot=function(t,n,s){if(!o(t))throw Error(r(299));var l=!1,f="",p=$0,M=eg,w=tg,V=null;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(f=s.identifierPrefix),s.onUncaughtError!==void 0&&(p=s.onUncaughtError),s.onCaughtError!==void 0&&(M=s.onCaughtError),s.onRecoverableError!==void 0&&(w=s.onRecoverableError),s.formState!==void 0&&(V=s.formState)),n=O_(t,1,!0,n,s??null,l,f,V,p,M,w,W_),n.context=P_(null),s=n.current,l=wi(),l=In(l),f=_s(l),f.callback=null,vs(s,f,l),s=l,n.current.lanes=s,je(n,s),xa(n),t[Ln]=n.current,Bd(t),new su(n)},Nl.version="19.2.7",Nl}var nv;function Fy(){if(nv)return sh.exports;nv=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(e){console.error(e)}}return a(),sh.exports=By(),sh.exports}var zy=Fy();const Hy={BASE_URL:"/",DEV:!1,MODE:"production",PROD:!0,SSR:!1,VITE_APP_URL:"https://demo.morpheum.io",VITE_DISCORD_URL:"",VITE_DOCS_URL:"",VITE_MANIFESTO_URL:"",VITE_TUTORIAL_VIDEO_URL:"",VITE_X_URL:""},fo=(a,e="#")=>{var i;return((i=Hy[a])==null?void 0:i.trim())||e},wn={app:fo("VITE_APP_URL","https://demo.morpheum.io"),docs:fo("VITE_DOCS_URL"),manifesto:fo("VITE_MANIFESTO_URL"),discord:fo("VITE_DISCORD_URL"),x:fo("VITE_X_URL"),tutorialVideo:fo("VITE_TUTORIAL_VIDEO_URL",""),explore:"#explore",exploreAgents:"#explore-agents",exploreVaults:"#explore-vaults"},Nu=[{id:"demo",label:"Demo",href:"#demo"},{id:"personas",label:"Personas",href:"#personas"},{id:"how",label:"How it works",href:"#how"},{id:"explore",label:"Explore",href:"#explore"}],ch={text:"> The agent-native L1 DEX, for faster and safer trades.",href:wn.manifesto},Os={eyebrow:{label:"A manifesto for verifiable agents",href:wn.manifesto},headline:["Agents you can trust.","Assets you can trade."],primaryCta:{label:"Launch Morpheum",href:wn.app},secondaryCta:{label:"Explore agents",href:wn.explore}},iv={risks:[{risk:"Speculation without underwriting",failure:"Buy random agent tokens on narrative alone.",solveLabel:"Proof",solve:"Underwrite on receipts, reputation, and risk scores — before you commit a dollar."},{risk:"Automation without capital controls",failure:"Run an agent with unbounded capital and no kill switch.",solveLabel:"Controls",solve:"Set Risk Level, approve gated moves, and isolate each strategy in its own bucket."}],close:"The Agent-native L1 DEX — faster, safer trades."},av=[{label:"MAEX indices",status:"LIVE",live:!0},{label:"Agents",status:"REPUTATION / SHARPE / ROI"},{label:"Risk level",status:"MANUAL / HITL / HANDS-OFF"},{label:"Agent notifications",status:"WANT-TO / ACTION / PAUSED / REJECTED"},{label:"Copy buckets",status:"LIVE",live:!0},{label:"Buckets",status:"RISK-ISOLATED"},{label:"Vaults",status:"ONCHAIN"},{label:"Staking",status:"LIVE",live:!0}],ep={kicker:"Product tour",videoCaption:"See an agent discovered, copied, supervised, and isolated in ~60s.",verbs:[{verb:"Discover",description:"Agents & indices — proof first."},{verb:"Copy",description:"Mirror a proven agent into your bucket."},{verb:"Supervise",description:"Approve gated moves on HITL."},{verb:"Isolate",description:"Risk contained in its own bucket."}]},uh={kicker:"Choose your path",title:"Become part of the agent economy",items:[{title:"Become an Operator",weight:"major",steps:["Mint an agent and set its mandate.","Choose a Risk Level: Manual · HITL · Hands-off.","Build a proven track record investors can underwrite."],cta:{label:"Run an agent",href:wn.exploreAgents},meta:{kind:"identity",name:"SharpeShark",tx:"0xa4c2…8f1d",hash:"did:morph:0x7a3f…c91e",chain:"Morpheum · hop 0",verified:"yes",rep:"72",portable:"yes",next:"minting mandate…"}},{title:"Become a Copy Trader",weight:"major",steps:["Screen agents on real proof — receipts and risk scores.","Mirror the best into your own dedicated bucket.","Track PnL and rebalance anytime."],cta:{label:"Start copying",href:wn.exploreAgents},meta:{kind:"chain",label:"on-chain transactions",chain:"Morpheum · hop 0",steps:[{op:"mint agent",tx:"0xa4c2…8f1d",status:"settled"},{op:"mint bucket",tx:"0xb91e…4c02",status:"settled"},{op:"fund transfer",tx:"0xe81a…3b70",status:"settled",from:"SortinoSloth",to:"your bucket",asset:"USDC",amt:"2500"}]}},{title:"Provide Capital",weight:"light",steps:["Deposit into a vault or bucket.","Stake to earn.","Withdraw on your terms."],cta:{label:"Explore vaults",href:wn.exploreVaults},meta:{kind:"community",label:"on-chain transaction",tx:"0x12af…9e44",from:"you",to:"Vault-Alpha",asset:"USDC",amt:"10000",chain:"Morpheum · hop 0",status:"queued"}}]},Ps={kicker:"How it works",title:"Discover → Copy → Supervise → Isolate",outcome:"A proven, risk-isolated capital position — not a bet on a black box.",chips:[{label:"Risk level",value:"Manual · HITL · Hands-off"},{label:"Notifications",value:"Want-to · Action · Paused · Rejected"},{label:"Capital",value:"Bucket / Vault"}],steps:[{n:1,title:"Discover",feature:"Agents & Indices + proof",body:"Browse the MAEX roster and index catalog and read the proof before you commit a dollar.",example:"Open SharpeShark and see its receipts, reputation, risk score, and Sharpe / ROI side by side."},{n:2,title:"Copy",feature:"Copy Trade",body:"Mirror a proven performer into your own bucket in one click, sized to your capital, with spread / funding cost shown before you confirm.",example:"One click clones SharpeShark's strategy into a fresh bucket bound to your wallet."},{n:3,title:"Supervise",feature:"Risk Level + Agent Notifications",body:"Set how much the agent may act on its own — Manual · HITL · Hands-off — and stay in the loop through Agent Notifications: Want to · Action · Paused · Rejected.",example:'On HITL, a "Want to open ETH long" notification waits for your inline Approve / Reject, and Explain shows why the agent wants the trade.'},{n:4,title:"Isolate",feature:"Buckets",body:"Every mirror lands in its own dedicated cross-margin bucket bound to a wallet executor agent, so risk is contained per strategy.",example:"SharpeShark runs in its own bucket with its own margin and exposure — if it draws down, only that bucket's capital is at risk; your other buckets and spot balance are untouched."}]},ho={kicker:"Explore",title:"Agents. Indices. Buckets. Vaults.",cards:[{title:"Agents",verbs:["Browse","Compare","Copy"],agents:[{name:"SharpeShark",sharpe:"2.41",roi:"+38.2%",risk:"72",positive:!0},{name:"SortinoSloth",sharpe:"1.86",roi:"+21.4%",risk:"58",positive:!0},{name:"FundingFox",sharpe:"1.12",roi:"-4.1%",risk:"41",positive:!1}]},{title:"Indices",verbs:["Track","Weight","Hold"],blurb:"Curated agent baskets for one-click exposure to proven strategies.",sample:[{label:"MAEX Core",value:"+12.8%",positive:!0},{label:"Risk-Off Bucket",value:"+4.2%",positive:!0}]},{title:"Buckets",verbs:["Isolate","Trade","Contain"],blurb:"Risk-isolated positions — each strategy in its own margin shell.",sample:[{label:"Bucket A",value:"ISOLATED",positive:!1},{label:"Bucket B",value:"ISOLATED",positive:!1}]},{title:"Vaults",verbs:["Deposit","Earn","Withdraw"],blurb:"Pooled onchain capital — graded vaults with live APR and TVL.",sample:[{label:"MLP (House Liq.)",value:"A · 18.4%",meta:"$9.8M TVL"},{label:"Basis Capture",value:"A · 14.2%",meta:"$2.1M TVL"}]}]},ou={line:"Back agents you can prove. Own the upside.",primaryCta:{label:"Launch Demo",href:wn.app},social:[{label:"Join Discord",href:wn.discord},{label:"Join X",href:wn.x}]},sv={legal:"© 2026 Morpheum. Capital funds proof.",labels:["validators","stakings","ZKProof"]};function Oo({variant:a="primary",children:e,className:i="",...r}){const o=`cta cta--${a} terminal-interactive ${i}`.trim();if("href"in r&&r.href!==void 0){const{href:c,...u}=r;return D.jsx("a",{className:o,href:c,...u,children:e})}return D.jsx("button",{className:o,type:"button",...r,children:e})}function Gy(){return D.jsx("section",{id:"join",className:"section community",children:D.jsxs("div",{className:"container community__inner",children:[D.jsx("h2",{className:"community__line",children:ou.line}),D.jsxs("div",{className:"community__ctas",children:[D.jsx(Oo,{href:ou.primaryCta.href,variant:"primary",children:ou.primaryCta.label}),ou.social.map(a=>D.jsx(Oo,{href:a.href,variant:"ghost",children:a.label},a.label))]})]})})}function Vy(){const[a,e]=Xe.useState(!1),i=!!wn.tutorialVideo;return D.jsx("section",{id:"demo",className:"section demo",children:D.jsxs("div",{className:"container",children:[D.jsx("p",{className:"section-kicker",children:ep.kicker}),D.jsxs("div",{className:"demo__video",children:[a&&i?D.jsx("video",{className:"demo__player",src:wn.tutorialVideo,controls:!0,autoPlay:!0,playsInline:!0}):D.jsxs("button",{type:"button",className:"demo__poster",onClick:()=>i&&e(!0),"aria-label":i?"Play tutorial video":"Tutorial video coming soon",children:[D.jsx("span",{className:"demo__play","aria-hidden":!0,children:"▶"}),D.jsx("span",{className:"demo__poster-label",children:"Tutorial"})]}),D.jsx("p",{className:"demo__caption",children:ep.videoCaption})]})]})})}const ky={receipt:"Receipt",riskScore:"Risk",credential:"Credential",verified:"Verified"};function fh({type:a,value:e}){return D.jsxs("span",{className:`proof-chip proof-chip--${a}`,children:[D.jsx("span",{className:"proof-chip__dot","aria-hidden":!0}),D.jsx("span",{className:"proof-chip__label",children:ky[a]}),e?D.jsx("span",{className:"proof-chip__value",children:e}):null]})}function Xy(){const a=ho.cards[0],e=ho.cards[1],i=ho.cards[2],r=ho.cards[3];return D.jsx("section",{id:"explore",className:"section explore",children:D.jsxs("div",{className:"container",children:[D.jsx("p",{className:"section-kicker",children:ho.kicker}),D.jsx("h2",{className:"section-title explore__title",children:ho.title}),D.jsxs("div",{className:"explore__grid",children:[D.jsxs("article",{id:"explore-agents",className:"explore-card explore-card--major",children:[D.jsxs("header",{className:"explore-card__header",children:[D.jsx("h3",{className:"explore-card__title",children:a.title}),D.jsx("p",{className:"explore-card__verbs",children:a.verbs.join(" · ").toUpperCase()})]}),D.jsx("ul",{className:"explore-roster",children:a.agents.map(o=>D.jsxs("li",{className:"explore-roster__row",children:[D.jsxs("div",{className:"explore-roster__top",children:[D.jsx("span",{className:"explore-roster__name",children:o.name}),D.jsx("span",{className:`terminal-value ${o.positive?"terminal-long":"terminal-short"}`,children:o.roi})]}),D.jsxs("div",{className:"explore-roster__proof",children:[D.jsx(fh,{type:"verified"}),D.jsx(fh,{type:"riskScore",value:o.risk}),D.jsx(fh,{type:"receipt"}),D.jsxs("span",{className:"terminal-value explore-roster__sharpe",children:["Sharpe ",o.sharpe]})]})]},o.name))})]}),D.jsxs("article",{className:"explore-card explore-card--major",children:[D.jsxs("header",{className:"explore-card__header",children:[D.jsx("h3",{className:"explore-card__title",children:e.title}),D.jsx("p",{className:"explore-card__verbs",children:e.verbs.join(" · ").toUpperCase()})]}),D.jsx("p",{className:"explore-card__blurb",children:e.blurb}),D.jsx("ul",{className:"explore-sample",children:e.sample.map(o=>D.jsxs("li",{children:[D.jsx("span",{className:"terminal-label",children:o.label}),D.jsx("span",{className:`terminal-value ${o.positive?"terminal-long":""}`,children:o.value})]},o.label))})]}),D.jsxs("article",{id:"explore-buckets",className:"explore-card explore-card--major",children:[D.jsxs("header",{className:"explore-card__header",children:[D.jsx("h3",{className:"explore-card__title",children:i.title}),D.jsx("p",{className:"explore-card__verbs",children:i.verbs.join(" · ").toUpperCase()})]}),D.jsx("p",{className:"explore-card__blurb",children:i.blurb}),D.jsx("ul",{className:"explore-sample",children:i.sample.map(o=>D.jsxs("li",{children:[D.jsx("span",{className:"terminal-label",children:o.label}),D.jsx("span",{className:"terminal-value explore-sample__status",children:o.value})]},o.label))})]}),D.jsxs("article",{id:"explore-vaults",className:"explore-card explore-card--major",children:[D.jsxs("header",{className:"explore-card__header",children:[D.jsx("h3",{className:"explore-card__title",children:r.title}),D.jsx("p",{className:"explore-card__verbs",children:r.verbs.join(" · ").toUpperCase()})]}),D.jsx("p",{className:"explore-card__blurb",children:r.blurb}),D.jsx("ul",{className:"explore-sample",children:r.sample.map(o=>D.jsxs("li",{children:[D.jsx("span",{className:"terminal-label",children:o.label}),D.jsxs("span",{className:"explore-sample__metrics",children:[D.jsx("span",{className:"terminal-value terminal-long",children:o.value}),D.jsx("span",{className:"terminal-value explore-sample__meta",children:o.meta})]})]},o.label))})]})]})]})})}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const jp="185",Wy=0,rv=1,Yy=2,Uu=1,qy=2,Gl=3,is=0,vi=1,Ea=2,ts=0,Do=1,tp=2,ov=3,lv=4,jy=5,yr=100,Zy=101,Ky=102,Qy=103,Jy=104,$y=200,eE=201,tE=202,nE=203,np=204,ip=205,iE=206,aE=207,sE=208,rE=209,oE=210,lE=211,cE=212,uE=213,fE=214,ap=0,sp=1,rp=2,Po=3,op=4,lp=5,cp=6,up=7,Ix=0,dE=1,hE=2,Aa=0,Bx=1,Fx=2,zx=3,Hx=4,Gx=5,Vx=6,kx=7,Xx=300,Tr=301,Io=302,dh=303,hh=304,Qu=306,fp=1e3,da=1001,dp=1002,qn=1003,pE=1004,lu=1005,_n=1006,ph=1007,Ws=1008,ji=1009,Wx=1010,Yx=1011,Zl=1012,Zp=1013,wa=1014,ba=1015,as=1016,Kp=1017,Qp=1018,Kl=1020,qx=35902,jx=35899,Zx=1021,Kx=1022,ha=1023,ss=1026,br=1027,Qx=1028,Jp=1029,Ar=1030,$p=1031,em=1033,Ou=33776,Pu=33777,Iu=33778,Bu=33779,hp=35840,pp=35841,mp=35842,gp=35843,_p=36196,vp=37492,xp=37496,Sp=37488,Mp=37489,Hu=37490,yp=37491,Ep=37808,bp=37809,Tp=37810,Ap=37811,Rp=37812,Cp=37813,wp=37814,Dp=37815,Lp=37816,Np=37817,Up=37818,Op=37819,Pp=37820,Ip=37821,Bp=36492,Fp=36494,zp=36495,Hp=36283,Gp=36284,Gu=36285,Vp=36286,mE=3200,cv=0,gE=1,Xs="",ti="srgb",Vu="srgb-linear",ku="linear",qt="srgb",po=7680,uv=519,_E=512,vE=513,xE=514,tm=515,SE=516,ME=517,nm=518,yE=519,fv=35044,dv="300 es",Ta=2e3,Xu=2001;function EE(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function Wu(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function bE(){const a=Wu("canvas");return a.style.display="block",a}const hv={};function pv(...a){const e="THREE."+a.shift();console.log(e,...a)}function Jx(a){const e=a[0];if(typeof e=="string"&&e.startsWith("TSL:")){const i=a[1];i&&i.isStackTrace?a[0]+=" "+i.getLocation():a[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return a}function rt(...a){a=Jx(a);const e="THREE."+a.shift();{const i=a[0];i&&i.isStackTrace?console.warn(i.getError(e)):console.warn(e,...a)}}function It(...a){a=Jx(a);const e="THREE."+a.shift();{const i=a[0];i&&i.isStackTrace?console.error(i.getError(e)):console.error(e,...a)}}function Lo(...a){const e=a.join(" ");e in hv||(hv[e]=!0,rt(...a))}function TE(a,e,i){return new Promise(function(r,o){function c(){switch(a.clientWaitSync(e,a.SYNC_FLUSH_COMMANDS_BIT,0)){case a.WAIT_FAILED:o();break;case a.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:r()}}setTimeout(c,i)})}const AE={[ap]:sp,[rp]:cp,[op]:up,[Po]:lp,[sp]:ap,[cp]:rp,[up]:op,[lp]:Po};class Cr{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const c=o.indexOf(i);c!==-1&&o.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let c=0,u=o.length;c<u;c++)o[c].call(this,e);e.target=null}}}const $n=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let mv=1234567;const Yl=Math.PI/180,Ql=180/Math.PI;function Ho(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return($n[a&255]+$n[a>>8&255]+$n[a>>16&255]+$n[a>>24&255]+"-"+$n[e&255]+$n[e>>8&255]+"-"+$n[e>>16&15|64]+$n[e>>24&255]+"-"+$n[i&63|128]+$n[i>>8&255]+"-"+$n[i>>16&255]+$n[i>>24&255]+$n[r&255]+$n[r>>8&255]+$n[r>>16&255]+$n[r>>24&255]).toLowerCase()}function Et(a,e,i){return Math.max(e,Math.min(i,a))}function im(a,e){return(a%e+e)%e}function RE(a,e,i,r,o){return r+(a-e)*(o-r)/(i-e)}function CE(a,e,i){return a!==e?(i-a)/(e-a):0}function ql(a,e,i){return(1-i)*a+i*e}function wE(a,e,i,r){return ql(a,e,1-Math.exp(-i*r))}function DE(a,e=1){return e-Math.abs(im(a,e*2)-e)}function LE(a,e,i){return a<=e?0:a>=i?1:(a=(a-e)/(i-e),a*a*(3-2*a))}function NE(a,e,i){return a<=e?0:a>=i?1:(a=(a-e)/(i-e),a*a*a*(a*(a*6-15)+10))}function UE(a,e){return a+Math.floor(Math.random()*(e-a+1))}function OE(a,e){return a+Math.random()*(e-a)}function PE(a){return a*(.5-Math.random())}function IE(a){a!==void 0&&(mv=a);let e=mv+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function BE(a){return a*Yl}function FE(a){return a*Ql}function zE(a){return(a&a-1)===0&&a!==0}function HE(a){return Math.pow(2,Math.ceil(Math.log(a)/Math.LN2))}function GE(a){return Math.pow(2,Math.floor(Math.log(a)/Math.LN2))}function VE(a,e,i,r,o){const c=Math.cos,u=Math.sin,d=c(i/2),m=u(i/2),h=c((e+r)/2),g=u((e+r)/2),_=c((e-r)/2),v=u((e-r)/2),S=c((r-e)/2),E=u((r-e)/2);switch(o){case"XYX":a.set(d*g,m*_,m*v,d*h);break;case"YZY":a.set(m*v,d*g,m*_,d*h);break;case"ZXZ":a.set(m*_,m*v,d*g,d*h);break;case"XZX":a.set(d*g,m*E,m*S,d*h);break;case"YXY":a.set(m*S,d*g,m*E,d*h);break;case"ZYZ":a.set(m*E,m*S,d*g,d*h);break;default:rt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+o)}}function Co(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return a/4294967295;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int32Array:return Math.max(a/2147483647,-1);case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function oi(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return Math.round(a*4294967295);case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int32Array:return Math.round(a*2147483647);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Pt={DEG2RAD:Yl,RAD2DEG:Ql,generateUUID:Ho,clamp:Et,euclideanModulo:im,mapLinear:RE,inverseLerp:CE,lerp:ql,damp:wE,pingpong:DE,smoothstep:LE,smootherstep:NE,randInt:UE,randFloat:OE,randFloatSpread:PE,seededRandom:IE,degToRad:BE,radToDeg:FE,isPowerOfTwo:zE,ceilPowerOfTwo:HE,floorPowerOfTwo:GE,setQuaternionFromProperEuler:VE,normalize:oi,denormalize:Co},mm=class mm{constructor(e=0,i=0){this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,o=e.elements;return this.x=o[0]*i+o[3]*r+o[6],this.y=o[1]*i+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Et(this.x,e.x,i.x),this.y=Et(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Et(this.x,e,i),this.y=Et(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Et(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Et(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),o=Math.sin(i),c=this.x-e.x,u=this.y-e.y;return this.x=c*r-u*o+e.x,this.y=c*o+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};mm.prototype.isVector2=!0;let zt=mm;class Go{constructor(e=0,i=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=o}static slerpFlat(e,i,r,o,c,u,d){let m=r[o+0],h=r[o+1],g=r[o+2],_=r[o+3],v=c[u+0],S=c[u+1],E=c[u+2],A=c[u+3];if(_!==A||m!==v||h!==S||g!==E){let y=m*v+h*S+g*E+_*A;y<0&&(v=-v,S=-S,E=-E,A=-A,y=-y);let x=1-d;if(y<.9995){const O=Math.acos(y),P=Math.sin(O);x=Math.sin(x*O)/P,d=Math.sin(d*O)/P,m=m*x+v*d,h=h*x+S*d,g=g*x+E*d,_=_*x+A*d}else{m=m*x+v*d,h=h*x+S*d,g=g*x+E*d,_=_*x+A*d;const O=1/Math.sqrt(m*m+h*h+g*g+_*_);m*=O,h*=O,g*=O,_*=O}}e[i]=m,e[i+1]=h,e[i+2]=g,e[i+3]=_}static multiplyQuaternionsFlat(e,i,r,o,c,u){const d=r[o],m=r[o+1],h=r[o+2],g=r[o+3],_=c[u],v=c[u+1],S=c[u+2],E=c[u+3];return e[i]=d*E+g*_+m*S-h*v,e[i+1]=m*E+g*v+h*_-d*S,e[i+2]=h*E+g*S+d*v-m*_,e[i+3]=g*E-d*_-m*v-h*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,o){return this._x=e,this._y=i,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,o=e._y,c=e._z,u=e._order,d=Math.cos,m=Math.sin,h=d(r/2),g=d(o/2),_=d(c/2),v=m(r/2),S=m(o/2),E=m(c/2);switch(u){case"XYZ":this._x=v*g*_+h*S*E,this._y=h*S*_-v*g*E,this._z=h*g*E+v*S*_,this._w=h*g*_-v*S*E;break;case"YXZ":this._x=v*g*_+h*S*E,this._y=h*S*_-v*g*E,this._z=h*g*E-v*S*_,this._w=h*g*_+v*S*E;break;case"ZXY":this._x=v*g*_-h*S*E,this._y=h*S*_+v*g*E,this._z=h*g*E+v*S*_,this._w=h*g*_-v*S*E;break;case"ZYX":this._x=v*g*_-h*S*E,this._y=h*S*_+v*g*E,this._z=h*g*E-v*S*_,this._w=h*g*_+v*S*E;break;case"YZX":this._x=v*g*_+h*S*E,this._y=h*S*_+v*g*E,this._z=h*g*E-v*S*_,this._w=h*g*_-v*S*E;break;case"XZY":this._x=v*g*_-h*S*E,this._y=h*S*_-v*g*E,this._z=h*g*E+v*S*_,this._w=h*g*_+v*S*E;break;default:rt("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],o=i[4],c=i[8],u=i[1],d=i[5],m=i[9],h=i[2],g=i[6],_=i[10],v=r+d+_;if(v>0){const S=.5/Math.sqrt(v+1);this._w=.25/S,this._x=(g-m)*S,this._y=(c-h)*S,this._z=(u-o)*S}else if(r>d&&r>_){const S=2*Math.sqrt(1+r-d-_);this._w=(g-m)/S,this._x=.25*S,this._y=(o+u)/S,this._z=(c+h)/S}else if(d>_){const S=2*Math.sqrt(1+d-r-_);this._w=(c-h)/S,this._x=(o+u)/S,this._y=.25*S,this._z=(m+g)/S}else{const S=2*Math.sqrt(1+_-r-d);this._w=(u-o)/S,this._x=(c+h)/S,this._y=(m+g)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Et(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,i/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,o=e._y,c=e._z,u=e._w,d=i._x,m=i._y,h=i._z,g=i._w;return this._x=r*g+u*d+o*h-c*m,this._y=o*g+u*m+c*d-r*h,this._z=c*g+u*h+r*m-o*d,this._w=u*g-r*d-o*m-c*h,this._onChangeCallback(),this}slerp(e,i){let r=e._x,o=e._y,c=e._z,u=e._w,d=this.dot(e);d<0&&(r=-r,o=-o,c=-c,u=-u,d=-d);let m=1-i;if(d<.9995){const h=Math.acos(d),g=Math.sin(h);m=Math.sin(m*h)/g,i=Math.sin(i*h)/g,this._x=this._x*m+r*i,this._y=this._y*m+o*i,this._z=this._z*m+c*i,this._w=this._w*m+u*i,this._onChangeCallback()}else this._x=this._x*m+r*i,this._y=this._y*m+o*i,this._z=this._z*m+c*i,this._w=this._w*m+u*i,this.normalize();return this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const gm=class gm{constructor(e=0,i=0,r=0){this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(gv.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(gv.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,o=this.z,c=e.elements;return this.x=c[0]*i+c[3]*r+c[6]*o,this.y=c[1]*i+c[4]*r+c[7]*o,this.z=c[2]*i+c[5]*r+c[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,o=this.z,c=e.elements,u=1/(c[3]*i+c[7]*r+c[11]*o+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*o+c[12])*u,this.y=(c[1]*i+c[5]*r+c[9]*o+c[13])*u,this.z=(c[2]*i+c[6]*r+c[10]*o+c[14])*u,this}applyQuaternion(e){const i=this.x,r=this.y,o=this.z,c=e.x,u=e.y,d=e.z,m=e.w,h=2*(u*o-d*r),g=2*(d*i-c*o),_=2*(c*r-u*i);return this.x=i+m*h+u*_-d*g,this.y=r+m*g+d*h-c*_,this.z=o+m*_+c*g-u*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,o=this.z,c=e.elements;return this.x=c[0]*i+c[4]*r+c[8]*o,this.y=c[1]*i+c[5]*r+c[9]*o,this.z=c[2]*i+c[6]*r+c[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Et(this.x,e.x,i.x),this.y=Et(this.y,e.y,i.y),this.z=Et(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Et(this.x,e,i),this.y=Et(this.y,e,i),this.z=Et(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Et(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,o=e.y,c=e.z,u=i.x,d=i.y,m=i.z;return this.x=o*m-c*d,this.y=c*u-r*m,this.z=r*d-o*u,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return mh.copy(this).projectOnVector(e),this.sub(mh)}reflect(e){return this.sub(mh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Et(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return i*i+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const o=Math.sin(i)*e;return this.x=o*Math.sin(r),this.y=Math.cos(i)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=o,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};gm.prototype.isVector3=!0;let ie=gm;const mh=new ie,gv=new Go,_m=class _m{constructor(e,i,r,o,c,u,d,m,h){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,o,c,u,d,m,h)}set(e,i,r,o,c,u,d,m,h){const g=this.elements;return g[0]=e,g[1]=o,g[2]=d,g[3]=i,g[4]=c,g[5]=m,g[6]=r,g[7]=u,g[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,o=i.elements,c=this.elements,u=r[0],d=r[3],m=r[6],h=r[1],g=r[4],_=r[7],v=r[2],S=r[5],E=r[8],A=o[0],y=o[3],x=o[6],O=o[1],P=o[4],C=o[7],N=o[2],L=o[5],F=o[8];return c[0]=u*A+d*O+m*N,c[3]=u*y+d*P+m*L,c[6]=u*x+d*C+m*F,c[1]=h*A+g*O+_*N,c[4]=h*y+g*P+_*L,c[7]=h*x+g*C+_*F,c[2]=v*A+S*O+E*N,c[5]=v*y+S*P+E*L,c[8]=v*x+S*C+E*F,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],o=e[2],c=e[3],u=e[4],d=e[5],m=e[6],h=e[7],g=e[8];return i*u*g-i*d*h-r*c*g+r*d*m+o*c*h-o*u*m}invert(){const e=this.elements,i=e[0],r=e[1],o=e[2],c=e[3],u=e[4],d=e[5],m=e[6],h=e[7],g=e[8],_=g*u-d*h,v=d*m-g*c,S=h*c-u*m,E=i*_+r*v+o*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/E;return e[0]=_*A,e[1]=(o*h-g*r)*A,e[2]=(d*r-o*u)*A,e[3]=v*A,e[4]=(g*i-o*m)*A,e[5]=(o*c-d*i)*A,e[6]=S*A,e[7]=(r*m-h*i)*A,e[8]=(u*i-r*c)*A,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,o,c,u,d){const m=Math.cos(c),h=Math.sin(c);return this.set(r*m,r*h,-r*(m*u+h*d)+u+e,-o*h,o*m,-o*(-h*u+m*d)+d+i,0,0,1),this}scale(e,i){return Lo("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(gh.makeScale(e,i)),this}rotate(e){return Lo("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(gh.makeRotation(-e)),this}translate(e,i){return Lo("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(gh.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let o=0;o<9;o++)if(i[o]!==r[o])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};_m.prototype.isMatrix3=!0;let dt=_m;const gh=new dt,_v=new dt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),vv=new dt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function kE(){const a={enabled:!0,workingColorSpace:Vu,spaces:{},convert:function(o,c,u){return this.enabled===!1||c===u||!c||!u||(this.spaces[c].transfer===qt&&(o.r=ns(o.r),o.g=ns(o.g),o.b=ns(o.b)),this.spaces[c].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[c].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===qt&&(o.r=No(o.r),o.g=No(o.g),o.b=No(o.b))),o},workingToColorSpace:function(o,c){return this.convert(o,this.workingColorSpace,c)},colorSpaceToWorking:function(o,c){return this.convert(o,c,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Xs?ku:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,c=this.workingColorSpace){return o.fromArray(this.spaces[c].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,c,u){return o.copy(this.spaces[c].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,c){return Lo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),a.workingToColorSpace(o,c)},toWorkingColorSpace:function(o,c){return Lo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),a.colorSpaceToWorking(o,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return a.define({[Vu]:{primaries:e,whitePoint:r,transfer:ku,toXYZ:_v,fromXYZ:vv,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:ti},outputColorSpaceConfig:{drawingBufferColorSpace:ti}},[ti]:{primaries:e,whitePoint:r,transfer:qt,toXYZ:_v,fromXYZ:vv,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:ti}}}),a}const Lt=kE();function ns(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function No(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}let mo;class XE{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{mo===void 0&&(mo=Wu("canvas")),mo.width=e.width,mo.height=e.height;const o=mo.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=mo}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Wu("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),c=o.data;for(let u=0;u<c.length;u++)c[u]=ns(c[u]/255)*255;return r.putImageData(o,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(ns(i[r]/255)*255):i[r]=ns(i[r]);return{data:i,width:e.width,height:e.height}}else return rt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let WE=0;class am{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:WE++}),this.uuid=Ho(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayWidth,i.displayHeight,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let c;if(Array.isArray(o)){c=[];for(let u=0,d=o.length;u<d;u++)o[u].isDataTexture?c.push(_h(o[u].image)):c.push(_h(o[u]))}else c=_h(o);r.url=c}return i||(e.images[this.uuid]=r),r}}function _h(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?XE.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(rt("Texture: Unable to serialize Texture."),{})}let YE=0;const vh=new ie;class ni extends Cr{constructor(e=ni.DEFAULT_IMAGE,i=ni.DEFAULT_MAPPING,r=da,o=da,c=_n,u=Ws,d=ha,m=ji,h=ni.DEFAULT_ANISOTROPY,g=Xs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:YE++}),this.uuid=Ho(),this.name="",this.source=new am(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=c,this.minFilter=u,this.anisotropy=h,this.format=d,this.internalFormat=null,this.type=m,this.offset=new zt(0,0),this.repeat=new zt(1,1),this.center=new zt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new dt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(vh).x}get height(){return this.source.getSize(vh).y}get depth(){return this.source.getSize(vh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const r=e[i];if(r===void 0){rt(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const o=this[i];if(o===void 0){rt(`Texture.setValues(): property '${i}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Xx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case fp:e.x=e.x-Math.floor(e.x);break;case da:e.x=e.x<0?0:1;break;case dp:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case fp:e.y=e.y-Math.floor(e.y);break;case da:e.y=e.y<0?0:1;break;case dp:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}ni.DEFAULT_IMAGE=null;ni.DEFAULT_MAPPING=Xx;ni.DEFAULT_ANISOTROPY=1;const vm=class vm{constructor(e=0,i=0,r=0,o=1){this.x=e,this.y=i,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,o){return this.x=e,this.y=i,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,o=this.z,c=this.w,u=e.elements;return this.x=u[0]*i+u[4]*r+u[8]*o+u[12]*c,this.y=u[1]*i+u[5]*r+u[9]*o+u[13]*c,this.z=u[2]*i+u[6]*r+u[10]*o+u[14]*c,this.w=u[3]*i+u[7]*r+u[11]*o+u[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,o,c;const m=e.elements,h=m[0],g=m[4],_=m[8],v=m[1],S=m[5],E=m[9],A=m[2],y=m[6],x=m[10];if(Math.abs(g-v)<.01&&Math.abs(_-A)<.01&&Math.abs(E-y)<.01){if(Math.abs(g+v)<.1&&Math.abs(_+A)<.1&&Math.abs(E+y)<.1&&Math.abs(h+S+x-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const P=(h+1)/2,C=(S+1)/2,N=(x+1)/2,L=(g+v)/4,F=(_+A)/4,T=(E+y)/4;return P>C&&P>N?P<.01?(r=0,o=.707106781,c=.707106781):(r=Math.sqrt(P),o=L/r,c=F/r):C>N?C<.01?(r=.707106781,o=0,c=.707106781):(o=Math.sqrt(C),r=L/o,c=T/o):N<.01?(r=.707106781,o=.707106781,c=0):(c=Math.sqrt(N),r=F/c,o=T/c),this.set(r,o,c,i),this}let O=Math.sqrt((y-E)*(y-E)+(_-A)*(_-A)+(v-g)*(v-g));return Math.abs(O)<.001&&(O=1),this.x=(y-E)/O,this.y=(_-A)/O,this.z=(v-g)/O,this.w=Math.acos((h+S+x-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Et(this.x,e.x,i.x),this.y=Et(this.y,e.y,i.y),this.z=Et(this.z,e.z,i.z),this.w=Et(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Et(this.x,e,i),this.y=Et(this.y,e,i),this.z=Et(this.z,e,i),this.w=Et(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Et(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};vm.prototype.isVector4=!0;let gn=vm;class qE extends Cr{constructor(e=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:_n,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},r),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=r.depth,this.scissor=new gn(0,0,e,i),this.scissorTest=!1,this.viewport=new gn(0,0,e,i),this.textures=[];const o={width:e,height:i,depth:r.depth},c=new ni(o),u=r.count;for(let d=0;d<u;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview,this.useArrayDepthTexture=r.useArrayDepthTexture}_setTextureOptions(e={}){const i={minFilter:_n,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let o=0,c=this.textures.length;o<c;o++)this.textures[o].image.width=e,this.textures[o].image.height=i,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const o=Object.assign({},e.textures[i].image);this.textures[i].source=new am(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ra extends qE{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class $x extends ni{constructor(e=null,i=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:o},this.magFilter=qn,this.minFilter=qn,this.wrapR=da,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class jE extends ni{constructor(e=null,i=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:o},this.magFilter=qn,this.minFilter=qn,this.wrapR=da,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ku=class Ku{constructor(e,i,r,o,c,u,d,m,h,g,_,v,S,E,A,y){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,o,c,u,d,m,h,g,_,v,S,E,A,y)}set(e,i,r,o,c,u,d,m,h,g,_,v,S,E,A,y){const x=this.elements;return x[0]=e,x[4]=i,x[8]=r,x[12]=o,x[1]=c,x[5]=u,x[9]=d,x[13]=m,x[2]=h,x[6]=g,x[10]=_,x[14]=v,x[3]=S,x[7]=E,x[11]=A,x[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ku().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return this.determinantAffine()===0?(e.set(1,0,0),i.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const i=this.elements,r=e.elements,o=1/go.setFromMatrixColumn(e,0).length(),c=1/go.setFromMatrixColumn(e,1).length(),u=1/go.setFromMatrixColumn(e,2).length();return i[0]=r[0]*o,i[1]=r[1]*o,i[2]=r[2]*o,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*u,i[9]=r[9]*u,i[10]=r[10]*u,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,o=e.y,c=e.z,u=Math.cos(r),d=Math.sin(r),m=Math.cos(o),h=Math.sin(o),g=Math.cos(c),_=Math.sin(c);if(e.order==="XYZ"){const v=u*g,S=u*_,E=d*g,A=d*_;i[0]=m*g,i[4]=-m*_,i[8]=h,i[1]=S+E*h,i[5]=v-A*h,i[9]=-d*m,i[2]=A-v*h,i[6]=E+S*h,i[10]=u*m}else if(e.order==="YXZ"){const v=m*g,S=m*_,E=h*g,A=h*_;i[0]=v+A*d,i[4]=E*d-S,i[8]=u*h,i[1]=u*_,i[5]=u*g,i[9]=-d,i[2]=S*d-E,i[6]=A+v*d,i[10]=u*m}else if(e.order==="ZXY"){const v=m*g,S=m*_,E=h*g,A=h*_;i[0]=v-A*d,i[4]=-u*_,i[8]=E+S*d,i[1]=S+E*d,i[5]=u*g,i[9]=A-v*d,i[2]=-u*h,i[6]=d,i[10]=u*m}else if(e.order==="ZYX"){const v=u*g,S=u*_,E=d*g,A=d*_;i[0]=m*g,i[4]=E*h-S,i[8]=v*h+A,i[1]=m*_,i[5]=A*h+v,i[9]=S*h-E,i[2]=-h,i[6]=d*m,i[10]=u*m}else if(e.order==="YZX"){const v=u*m,S=u*h,E=d*m,A=d*h;i[0]=m*g,i[4]=A-v*_,i[8]=E*_+S,i[1]=_,i[5]=u*g,i[9]=-d*g,i[2]=-h*g,i[6]=S*_+E,i[10]=v-A*_}else if(e.order==="XZY"){const v=u*m,S=u*h,E=d*m,A=d*h;i[0]=m*g,i[4]=-_,i[8]=h*g,i[1]=v*_+A,i[5]=u*g,i[9]=S*_-E,i[2]=E*_-S,i[6]=d*g,i[10]=A*_+v}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ZE,e,KE)}lookAt(e,i,r){const o=this.elements;return Di.subVectors(e,i),Di.lengthSq()===0&&(Di.z=1),Di.normalize(),Is.crossVectors(r,Di),Is.lengthSq()===0&&(Math.abs(r.z)===1?Di.x+=1e-4:Di.z+=1e-4,Di.normalize(),Is.crossVectors(r,Di)),Is.normalize(),cu.crossVectors(Di,Is),o[0]=Is.x,o[4]=cu.x,o[8]=Di.x,o[1]=Is.y,o[5]=cu.y,o[9]=Di.y,o[2]=Is.z,o[6]=cu.z,o[10]=Di.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,o=i.elements,c=this.elements,u=r[0],d=r[4],m=r[8],h=r[12],g=r[1],_=r[5],v=r[9],S=r[13],E=r[2],A=r[6],y=r[10],x=r[14],O=r[3],P=r[7],C=r[11],N=r[15],L=o[0],F=o[4],T=o[8],U=o[12],k=o[1],G=o[5],Q=o[9],de=o[13],ue=o[2],Y=o[6],z=o[10],H=o[14],J=o[3],he=o[7],Se=o[11],B=o[15];return c[0]=u*L+d*k+m*ue+h*J,c[4]=u*F+d*G+m*Y+h*he,c[8]=u*T+d*Q+m*z+h*Se,c[12]=u*U+d*de+m*H+h*B,c[1]=g*L+_*k+v*ue+S*J,c[5]=g*F+_*G+v*Y+S*he,c[9]=g*T+_*Q+v*z+S*Se,c[13]=g*U+_*de+v*H+S*B,c[2]=E*L+A*k+y*ue+x*J,c[6]=E*F+A*G+y*Y+x*he,c[10]=E*T+A*Q+y*z+x*Se,c[14]=E*U+A*de+y*H+x*B,c[3]=O*L+P*k+C*ue+N*J,c[7]=O*F+P*G+C*Y+N*he,c[11]=O*T+P*Q+C*z+N*Se,c[15]=O*U+P*de+C*H+N*B,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],o=e[8],c=e[12],u=e[1],d=e[5],m=e[9],h=e[13],g=e[2],_=e[6],v=e[10],S=e[14],E=e[3],A=e[7],y=e[11],x=e[15],O=m*S-h*v,P=d*S-h*_,C=d*v-m*_,N=u*S-h*g,L=u*v-m*g,F=u*_-d*g;return i*(A*O-y*P+x*C)-r*(E*O-y*N+x*L)+o*(E*P-A*N+x*F)-c*(E*C-A*L+y*F)}determinantAffine(){const e=this.elements,i=e[0],r=e[4],o=e[8],c=e[1],u=e[5],d=e[9],m=e[2],h=e[6],g=e[10];return i*(u*g-d*h)-r*(c*g-d*m)+o*(c*h-u*m)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=i,o[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],o=e[2],c=e[3],u=e[4],d=e[5],m=e[6],h=e[7],g=e[8],_=e[9],v=e[10],S=e[11],E=e[12],A=e[13],y=e[14],x=e[15],O=i*d-r*u,P=i*m-o*u,C=i*h-c*u,N=r*m-o*d,L=r*h-c*d,F=o*h-c*m,T=g*A-_*E,U=g*y-v*E,k=g*x-S*E,G=_*y-v*A,Q=_*x-S*A,de=v*x-S*y,ue=O*de-P*Q+C*G+N*k-L*U+F*T;if(ue===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const Y=1/ue;return e[0]=(d*de-m*Q+h*G)*Y,e[1]=(o*Q-r*de-c*G)*Y,e[2]=(A*F-y*L+x*N)*Y,e[3]=(v*L-_*F-S*N)*Y,e[4]=(m*k-u*de-h*U)*Y,e[5]=(i*de-o*k+c*U)*Y,e[6]=(y*C-E*F-x*P)*Y,e[7]=(g*F-v*C+S*P)*Y,e[8]=(u*Q-d*k+h*T)*Y,e[9]=(r*k-i*Q-c*T)*Y,e[10]=(E*L-A*C+x*O)*Y,e[11]=(_*C-g*L-S*O)*Y,e[12]=(d*U-u*G-m*T)*Y,e[13]=(i*G-r*U+o*T)*Y,e[14]=(A*P-E*N-y*O)*Y,e[15]=(g*N-_*P+v*O)*Y,this}scale(e){const i=this.elements,r=e.x,o=e.y,c=e.z;return i[0]*=r,i[4]*=o,i[8]*=c,i[1]*=r,i[5]*=o,i[9]*=c,i[2]*=r,i[6]*=o,i[10]*=c,i[3]*=r,i[7]*=o,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,o))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),o=Math.sin(i),c=1-r,u=e.x,d=e.y,m=e.z,h=c*u,g=c*d;return this.set(h*u+r,h*d-o*m,h*m+o*d,0,h*d+o*m,g*d+r,g*m-o*u,0,h*m-o*d,g*m+o*u,c*m*m+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,o,c,u){return this.set(1,r,c,0,e,1,u,0,i,o,1,0,0,0,0,1),this}compose(e,i,r){const o=this.elements,c=i._x,u=i._y,d=i._z,m=i._w,h=c+c,g=u+u,_=d+d,v=c*h,S=c*g,E=c*_,A=u*g,y=u*_,x=d*_,O=m*h,P=m*g,C=m*_,N=r.x,L=r.y,F=r.z;return o[0]=(1-(A+x))*N,o[1]=(S+C)*N,o[2]=(E-P)*N,o[3]=0,o[4]=(S-C)*L,o[5]=(1-(v+x))*L,o[6]=(y+O)*L,o[7]=0,o[8]=(E+P)*F,o[9]=(y-O)*F,o[10]=(1-(v+A))*F,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,i,r){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const c=this.determinantAffine();if(c===0)return r.set(1,1,1),i.identity(),this;let u=go.set(o[0],o[1],o[2]).length();const d=go.set(o[4],o[5],o[6]).length(),m=go.set(o[8],o[9],o[10]).length();c<0&&(u=-u),oa.copy(this);const h=1/u,g=1/d,_=1/m;return oa.elements[0]*=h,oa.elements[1]*=h,oa.elements[2]*=h,oa.elements[4]*=g,oa.elements[5]*=g,oa.elements[6]*=g,oa.elements[8]*=_,oa.elements[9]*=_,oa.elements[10]*=_,i.setFromRotationMatrix(oa),r.x=u,r.y=d,r.z=m,this}makePerspective(e,i,r,o,c,u,d=Ta,m=!1){const h=this.elements,g=2*c/(i-e),_=2*c/(r-o),v=(i+e)/(i-e),S=(r+o)/(r-o);let E,A;if(m)E=c/(u-c),A=u*c/(u-c);else if(d===Ta)E=-(u+c)/(u-c),A=-2*u*c/(u-c);else if(d===Xu)E=-u/(u-c),A=-u*c/(u-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return h[0]=g,h[4]=0,h[8]=v,h[12]=0,h[1]=0,h[5]=_,h[9]=S,h[13]=0,h[2]=0,h[6]=0,h[10]=E,h[14]=A,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,i,r,o,c,u,d=Ta,m=!1){const h=this.elements,g=2/(i-e),_=2/(r-o),v=-(i+e)/(i-e),S=-(r+o)/(r-o);let E,A;if(m)E=1/(u-c),A=u/(u-c);else if(d===Ta)E=-2/(u-c),A=-(u+c)/(u-c);else if(d===Xu)E=-1/(u-c),A=-c/(u-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return h[0]=g,h[4]=0,h[8]=0,h[12]=v,h[1]=0,h[5]=_,h[9]=0,h[13]=S,h[2]=0,h[6]=0,h[10]=E,h[14]=A,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let o=0;o<16;o++)if(i[o]!==r[o])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}};Ku.prototype.isMatrix4=!0;let yn=Ku;const go=new ie,oa=new yn,ZE=new ie(0,0,0),KE=new ie(1,1,1),Is=new ie,cu=new ie,Di=new ie,xv=new yn,Sv=new Go;class Rr{constructor(e=0,i=0,r=0,o=Rr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,o=this._order){return this._x=e,this._y=i,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const o=e.elements,c=o[0],u=o[4],d=o[8],m=o[1],h=o[5],g=o[9],_=o[2],v=o[6],S=o[10];switch(i){case"XYZ":this._y=Math.asin(Et(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,S),this._z=Math.atan2(-u,c)):(this._x=Math.atan2(v,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Et(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,S),this._z=Math.atan2(m,h)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(Et(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-_,S),this._z=Math.atan2(-u,h)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Et(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(v,S),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-u,h));break;case"YZX":this._z=Math.asin(Et(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,h),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(d,S));break;case"XZY":this._z=Math.asin(-Et(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(v,h),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-g,S),this._y=0);break;default:rt("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return xv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(xv,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return Sv.setFromEuler(this),this.setFromQuaternion(Sv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Rr.DEFAULT_ORDER="XYZ";class eS{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let QE=0;const Mv=new ie,_o=new Go,ja=new yn,uu=new ie,Ul=new ie,JE=new ie,$E=new Go,yv=new ie(1,0,0),Ev=new ie(0,1,0),bv=new ie(0,0,1),Tv={type:"added"},eb={type:"removed"},vo={type:"childadded",child:null},xh={type:"childremoved",child:null};class Ui extends Cr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:QE++}),this.uuid=Ho(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ui.DEFAULT_UP.clone();const e=new ie,i=new Rr,r=new Go,o=new ie(1,1,1);function c(){r.setFromEuler(i,!1)}function u(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new yn},normalMatrix:{value:new dt}}),this.matrix=new yn,this.matrixWorld=new yn,this.matrixAutoUpdate=Ui.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ui.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new eS,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return _o.setFromAxisAngle(e,i),this.quaternion.multiply(_o),this}rotateOnWorldAxis(e,i){return _o.setFromAxisAngle(e,i),this.quaternion.premultiply(_o),this}rotateX(e){return this.rotateOnAxis(yv,e)}rotateY(e){return this.rotateOnAxis(Ev,e)}rotateZ(e){return this.rotateOnAxis(bv,e)}translateOnAxis(e,i){return Mv.copy(e).applyQuaternion(this.quaternion),this.position.add(Mv.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(yv,e)}translateY(e){return this.translateOnAxis(Ev,e)}translateZ(e){return this.translateOnAxis(bv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ja.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?uu.copy(e):uu.set(e,i,r);const o=this.parent;this.updateWorldMatrix(!0,!1),Ul.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ja.lookAt(Ul,uu,this.up):ja.lookAt(uu,Ul,this.up),this.quaternion.setFromRotationMatrix(ja),o&&(ja.extractRotation(o.matrixWorld),_o.setFromRotationMatrix(ja),this.quaternion.premultiply(_o.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(It("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Tv),vo.child=e,this.dispatchEvent(vo),vo.child=null):It("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(eb),xh.child=e,this.dispatchEvent(xh),xh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ja.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ja.multiply(e.parent.matrixWorld)),e.applyMatrix4(ja),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Tv),vo.child=e,this.dispatchEvent(vo),vo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,o=this.children.length;r<o;r++){const u=this.children[r].getObjectByProperty(e,i);if(u!==void 0)return u}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const o=this.children;for(let c=0,u=o.length;c<u;c++)o[c].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ul,e,JE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ul,$E,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const i=e.x,r=e.y,o=e.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*r-c[8]*o,c[13]+=r-c[1]*i-c[5]*r-c[9]*o,c[14]+=o-c[2]*i-c[6]*r-c[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i,r=!1){const o=this.parent;if(e===!0&&o!==null&&o.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),i===!0){const c=this.children;for(let u=0,d=c.length;u<d;u++)c[u].updateWorldMatrix(!1,!0,r)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),this.static!==!1&&(o.static=this.static),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(d=>({...d})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function c(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=c(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let h=0,g=m.length;h<g;h++){const _=m[h];c(e.shapes,_)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,h=this.material.length;m<h;m++)d.push(c(e.materials,this.material[m]));o.material=d}else o.material=c(e.materials,this.material);if(this.children.length>0){o.children=[];for(let d=0;d<this.children.length;d++)o.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];o.animations.push(c(e.animations,m))}}if(i){const d=u(e.geometries),m=u(e.materials),h=u(e.textures),g=u(e.images),_=u(e.shapes),v=u(e.skeletons),S=u(e.animations),E=u(e.nodes);d.length>0&&(r.geometries=d),m.length>0&&(r.materials=m),h.length>0&&(r.textures=h),g.length>0&&(r.images=g),_.length>0&&(r.shapes=_),v.length>0&&(r.skeletons=v),S.length>0&&(r.animations=S),E.length>0&&(r.nodes=E)}return r.object=o,r;function u(d){const m=[];for(const h in d){const g=d[h];delete g.metadata,m.push(g)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}Ui.DEFAULT_UP=new ie(0,1,0);Ui.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ui.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Vl extends Ui{constructor(){super(),this.isGroup=!0,this.type="Group"}}const tb={type:"move"};class Sh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Vl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Vl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ie,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ie),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Vl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ie,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ie,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let o=null,c=null,u=null;const d=this._targetRay,m=this._grip,h=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(h&&e.hand){u=!0;for(const A of e.hand.values()){const y=i.getJointPose(A,r),x=this._getHandJoint(h,A);y!==null&&(x.matrix.fromArray(y.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=y.radius),x.visible=y!==null}const g=h.joints["index-finger-tip"],_=h.joints["thumb-tip"],v=g.position.distanceTo(_.position),S=.02,E=.005;h.inputState.pinching&&v>S+E?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&v<=S-E&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,r),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1,m.eventsEnabled&&m.dispatchEvent({type:"gripUpdated",data:e,target:this})));d!==null&&(o=i.getPose(e.targetRaySpace,r),o===null&&c!==null&&(o=c),o!==null&&(d.matrix.fromArray(o.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,o.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(o.linearVelocity)):d.hasLinearVelocity=!1,o.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(o.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(tb)))}return d!==null&&(d.visible=o!==null),m!==null&&(m.visible=c!==null),h!==null&&(h.visible=u!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new Vl;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}const tS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Bs={h:0,s:0,l:0},fu={h:0,s:0,l:0};function Mh(a,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?a+(e-a)*6*i:i<1/2?e:i<2/3?a+(e-a)*6*(2/3-i):a}class kt{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=ti){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Lt.colorSpaceToWorking(this,i),this}setRGB(e,i,r,o=Lt.workingColorSpace){return this.r=e,this.g=i,this.b=r,Lt.colorSpaceToWorking(this,o),this}setHSL(e,i,r,o=Lt.workingColorSpace){if(e=im(e,1),i=Et(i,0,1),r=Et(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,u=2*r-c;this.r=Mh(u,c,e+1/3),this.g=Mh(u,c,e),this.b=Mh(u,c,e-1/3)}return Lt.colorSpaceToWorking(this,o),this}setStyle(e,i=ti){function r(c){c!==void 0&&parseFloat(c)<1&&rt("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const u=o[1],d=o[2];switch(u){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:rt("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=o[1],u=c.length;if(u===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(u===6)return this.setHex(parseInt(c,16),i);rt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=ti){const r=tS[e.toLowerCase()];return r!==void 0?this.setHex(r,i):rt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ns(e.r),this.g=ns(e.g),this.b=ns(e.b),this}copyLinearToSRGB(e){return this.r=No(e.r),this.g=No(e.g),this.b=No(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ti){return Lt.workingToColorSpace(ei.copy(this),e),Math.round(Et(ei.r*255,0,255))*65536+Math.round(Et(ei.g*255,0,255))*256+Math.round(Et(ei.b*255,0,255))}getHexString(e=ti){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Lt.workingColorSpace){Lt.workingToColorSpace(ei.copy(this),i);const r=ei.r,o=ei.g,c=ei.b,u=Math.max(r,o,c),d=Math.min(r,o,c);let m,h;const g=(d+u)/2;if(d===u)m=0,h=0;else{const _=u-d;switch(h=g<=.5?_/(u+d):_/(2-u-d),u){case r:m=(o-c)/_+(o<c?6:0);break;case o:m=(c-r)/_+2;break;case c:m=(r-o)/_+4;break}m/=6}return e.h=m,e.s=h,e.l=g,e}getRGB(e,i=Lt.workingColorSpace){return Lt.workingToColorSpace(ei.copy(this),i),e.r=ei.r,e.g=ei.g,e.b=ei.b,e}getStyle(e=ti){Lt.workingToColorSpace(ei.copy(this),e);const i=ei.r,r=ei.g,o=ei.b;return e!==ti?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,i,r){return this.getHSL(Bs),this.setHSL(Bs.h+e,Bs.s+i,Bs.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(Bs),e.getHSL(fu);const r=ql(Bs.h,fu.h,i),o=ql(Bs.s,fu.s,i),c=ql(Bs.l,fu.l,i);return this.setHSL(r,o,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,o=this.b,c=e.elements;return this.r=c[0]*i+c[3]*r+c[6]*o,this.g=c[1]*i+c[4]*r+c[7]*o,this.b=c[2]*i+c[5]*r+c[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ei=new kt;kt.NAMES=tS;class nb extends Ui{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Rr,this.environmentIntensity=1,this.environmentRotation=new Rr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const la=new ie,Za=new ie,yh=new ie,Ka=new ie,xo=new ie,So=new ie,Av=new ie,Eh=new ie,bh=new ie,Th=new ie,Ah=new gn,Rh=new gn,Ch=new gn;class fa{constructor(e=new ie,i=new ie,r=new ie){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,o){o.subVectors(r,i),la.subVectors(e,i),o.cross(la);const c=o.lengthSq();return c>0?o.multiplyScalar(1/Math.sqrt(c)):o.set(0,0,0)}static getBarycoord(e,i,r,o,c){la.subVectors(o,i),Za.subVectors(r,i),yh.subVectors(e,i);const u=la.dot(la),d=la.dot(Za),m=la.dot(yh),h=Za.dot(Za),g=Za.dot(yh),_=u*h-d*d;if(_===0)return c.set(0,0,0),null;const v=1/_,S=(h*m-d*g)*v,E=(u*g-d*m)*v;return c.set(1-S-E,E,S)}static containsPoint(e,i,r,o){return this.getBarycoord(e,i,r,o,Ka)===null?!1:Ka.x>=0&&Ka.y>=0&&Ka.x+Ka.y<=1}static getInterpolation(e,i,r,o,c,u,d,m){return this.getBarycoord(e,i,r,o,Ka)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,Ka.x),m.addScaledVector(u,Ka.y),m.addScaledVector(d,Ka.z),m)}static getInterpolatedAttribute(e,i,r,o,c,u){return Ah.setScalar(0),Rh.setScalar(0),Ch.setScalar(0),Ah.fromBufferAttribute(e,i),Rh.fromBufferAttribute(e,r),Ch.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(Ah,c.x),u.addScaledVector(Rh,c.y),u.addScaledVector(Ch,c.z),u}static isFrontFacing(e,i,r,o){return la.subVectors(r,i),Za.subVectors(e,i),la.cross(Za).dot(o)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,o){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,i,r,o){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return la.subVectors(this.c,this.b),Za.subVectors(this.a,this.b),la.cross(Za).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return fa.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return fa.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,o,c){return fa.getInterpolation(e,this.a,this.b,this.c,i,r,o,c)}containsPoint(e){return fa.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return fa.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,o=this.b,c=this.c;let u,d;xo.subVectors(o,r),So.subVectors(c,r),Eh.subVectors(e,r);const m=xo.dot(Eh),h=So.dot(Eh);if(m<=0&&h<=0)return i.copy(r);bh.subVectors(e,o);const g=xo.dot(bh),_=So.dot(bh);if(g>=0&&_<=g)return i.copy(o);const v=m*_-g*h;if(v<=0&&m>=0&&g<=0)return u=m/(m-g),i.copy(r).addScaledVector(xo,u);Th.subVectors(e,c);const S=xo.dot(Th),E=So.dot(Th);if(E>=0&&S<=E)return i.copy(c);const A=S*h-m*E;if(A<=0&&h>=0&&E<=0)return d=h/(h-E),i.copy(r).addScaledVector(So,d);const y=g*E-S*_;if(y<=0&&_-g>=0&&S-E>=0)return Av.subVectors(c,o),d=(_-g)/(_-g+(S-E)),i.copy(o).addScaledVector(Av,d);const x=1/(y+A+v);return u=A*x,d=v*x,i.copy(r).addScaledVector(xo,u).addScaledVector(So,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class ec{constructor(e=new ie(1/0,1/0,1/0),i=new ie(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(ca.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(ca.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=ca.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let u=0,d=c.count;u<d;u++)e.isMesh===!0?e.getVertexPosition(u,ca):ca.fromBufferAttribute(c,u),ca.applyMatrix4(e.matrixWorld),this.expandByPoint(ca);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),du.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),du.copy(r.boundingBox)),du.applyMatrix4(e.matrixWorld),this.union(du)}const o=e.children;for(let c=0,u=o.length;c<u;c++)this.expandByObject(o[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ca),ca.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ol),hu.subVectors(this.max,Ol),Mo.subVectors(e.a,Ol),yo.subVectors(e.b,Ol),Eo.subVectors(e.c,Ol),Fs.subVectors(yo,Mo),zs.subVectors(Eo,yo),_r.subVectors(Mo,Eo);let i=[0,-Fs.z,Fs.y,0,-zs.z,zs.y,0,-_r.z,_r.y,Fs.z,0,-Fs.x,zs.z,0,-zs.x,_r.z,0,-_r.x,-Fs.y,Fs.x,0,-zs.y,zs.x,0,-_r.y,_r.x,0];return!wh(i,Mo,yo,Eo,hu)||(i=[1,0,0,0,1,0,0,0,1],!wh(i,Mo,yo,Eo,hu))?!1:(pu.crossVectors(Fs,zs),i=[pu.x,pu.y,pu.z],wh(i,Mo,yo,Eo,hu))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ca).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ca).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Qa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Qa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Qa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Qa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Qa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Qa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Qa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Qa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Qa),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Qa=[new ie,new ie,new ie,new ie,new ie,new ie,new ie,new ie],ca=new ie,du=new ec,Mo=new ie,yo=new ie,Eo=new ie,Fs=new ie,zs=new ie,_r=new ie,Ol=new ie,hu=new ie,pu=new ie,vr=new ie;function wh(a,e,i,r,o){for(let c=0,u=a.length-3;c<=u;c+=3){vr.fromArray(a,c);const d=o.x*Math.abs(vr.x)+o.y*Math.abs(vr.y)+o.z*Math.abs(vr.z),m=e.dot(vr),h=i.dot(vr),g=r.dot(vr);if(Math.max(-Math.max(m,h,g),Math.min(m,h,g))>d)return!1}return!0}const Cn=new ie,mu=new zt;let ib=0;class Ca extends Cr{constructor(e,i,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ib++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=fv,this.updateRanges=[],this.gpuType=ba,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let o=0,c=this.itemSize;o<c;o++)this.array[e+o]=i.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)mu.fromBufferAttribute(this,i),mu.applyMatrix3(e),this.setXY(i,mu.x,mu.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)Cn.fromBufferAttribute(this,i),Cn.applyMatrix3(e),this.setXYZ(i,Cn.x,Cn.y,Cn.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)Cn.fromBufferAttribute(this,i),Cn.applyMatrix4(e),this.setXYZ(i,Cn.x,Cn.y,Cn.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)Cn.fromBufferAttribute(this,i),Cn.applyNormalMatrix(e),this.setXYZ(i,Cn.x,Cn.y,Cn.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)Cn.fromBufferAttribute(this,i),Cn.transformDirection(e),this.setXYZ(i,Cn.x,Cn.y,Cn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=Co(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=oi(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Co(i,this.array)),i}setX(e,i){return this.normalized&&(i=oi(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Co(i,this.array)),i}setY(e,i){return this.normalized&&(i=oi(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Co(i,this.array)),i}setZ(e,i){return this.normalized&&(i=oi(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Co(i,this.array)),i}setW(e,i){return this.normalized&&(i=oi(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=oi(i,this.array),r=oi(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,o){return e*=this.itemSize,this.normalized&&(i=oi(i,this.array),r=oi(r,this.array),o=oi(o,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,i,r,o,c){return e*=this.itemSize,this.normalized&&(i=oi(i,this.array),r=oi(r,this.array),o=oi(o,this.array),c=oi(c,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==fv&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class nS extends Ca{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class iS extends Ca{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class Zi extends Ca{constructor(e,i,r){super(new Float32Array(e),i,r)}}const ab=new ec,Pl=new ie,Dh=new ie;class sm{constructor(e=new ie,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):ab.setFromPoints(e).getCenter(r);let o=0;for(let c=0,u=e.length;c<u;c++)o=Math.max(o,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Pl.subVectors(e,this.center);const i=Pl.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),o=(r-this.radius)*.5;this.center.addScaledVector(Pl,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Dh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Pl.copy(e.center).add(Dh)),this.expandByPoint(Pl.copy(e.center).sub(Dh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let sb=0;const Yi=new yn,Lh=new Ui,bo=new ie,Li=new ec,Il=new ec,zn=new ie;class Ki extends Cr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:sb++}),this.uuid=Ho(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(EE(e)?iS:nS)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new dt().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Yi.makeRotationFromQuaternion(e),this.applyMatrix4(Yi),this}rotateX(e){return Yi.makeRotationX(e),this.applyMatrix4(Yi),this}rotateY(e){return Yi.makeRotationY(e),this.applyMatrix4(Yi),this}rotateZ(e){return Yi.makeRotationZ(e),this.applyMatrix4(Yi),this}translate(e,i,r){return Yi.makeTranslation(e,i,r),this.applyMatrix4(Yi),this}scale(e,i,r){return Yi.makeScale(e,i,r),this.applyMatrix4(Yi),this}lookAt(e){return Lh.lookAt(e),Lh.updateMatrix(),this.applyMatrix4(Lh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(bo).negate(),this.translate(bo.x,bo.y,bo.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let o=0,c=e.length;o<c;o++){const u=e[o];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new Zi(r,3))}else{const r=Math.min(e.length,i.count);for(let o=0;o<r;o++){const c=e[o];i.setXYZ(o,c.x,c.y,c.z||0)}e.length>i.count&&rt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ec);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){It("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ie(-1/0,-1/0,-1/0),new ie(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,o=i.length;r<o;r++){const c=i[r];Li.setFromBufferAttribute(c),this.morphTargetsRelative?(zn.addVectors(this.boundingBox.min,Li.min),this.boundingBox.expandByPoint(zn),zn.addVectors(this.boundingBox.max,Li.max),this.boundingBox.expandByPoint(zn)):(this.boundingBox.expandByPoint(Li.min),this.boundingBox.expandByPoint(Li.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&It('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new sm);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){It("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ie,1/0);return}if(e){const r=this.boundingSphere.center;if(Li.setFromBufferAttribute(e),i)for(let c=0,u=i.length;c<u;c++){const d=i[c];Il.setFromBufferAttribute(d),this.morphTargetsRelative?(zn.addVectors(Li.min,Il.min),Li.expandByPoint(zn),zn.addVectors(Li.max,Il.max),Li.expandByPoint(zn)):(Li.expandByPoint(Il.min),Li.expandByPoint(Il.max))}Li.getCenter(r);let o=0;for(let c=0,u=e.count;c<u;c++)zn.fromBufferAttribute(e,c),o=Math.max(o,r.distanceToSquared(zn));if(i)for(let c=0,u=i.length;c<u;c++){const d=i[c],m=this.morphTargetsRelative;for(let h=0,g=d.count;h<g;h++)zn.fromBufferAttribute(d,h),m&&(bo.fromBufferAttribute(e,h),zn.add(bo)),o=Math.max(o,r.distanceToSquared(zn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&It('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){It("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,o=i.normal,c=i.uv;let u=this.getAttribute("tangent");(u===void 0||u.count!==r.count)&&(u=new Ca(new Float32Array(4*r.count),4),this.setAttribute("tangent",u));const d=[],m=[];for(let T=0;T<r.count;T++)d[T]=new ie,m[T]=new ie;const h=new ie,g=new ie,_=new ie,v=new zt,S=new zt,E=new zt,A=new ie,y=new ie;function x(T,U,k){h.fromBufferAttribute(r,T),g.fromBufferAttribute(r,U),_.fromBufferAttribute(r,k),v.fromBufferAttribute(c,T),S.fromBufferAttribute(c,U),E.fromBufferAttribute(c,k),g.sub(h),_.sub(h),S.sub(v),E.sub(v);const G=1/(S.x*E.y-E.x*S.y);isFinite(G)&&(A.copy(g).multiplyScalar(E.y).addScaledVector(_,-S.y).multiplyScalar(G),y.copy(_).multiplyScalar(S.x).addScaledVector(g,-E.x).multiplyScalar(G),d[T].add(A),d[U].add(A),d[k].add(A),m[T].add(y),m[U].add(y),m[k].add(y))}let O=this.groups;O.length===0&&(O=[{start:0,count:e.count}]);for(let T=0,U=O.length;T<U;++T){const k=O[T],G=k.start,Q=k.count;for(let de=G,ue=G+Q;de<ue;de+=3)x(e.getX(de+0),e.getX(de+1),e.getX(de+2))}const P=new ie,C=new ie,N=new ie,L=new ie;function F(T){N.fromBufferAttribute(o,T),L.copy(N);const U=d[T];P.copy(U),P.sub(N.multiplyScalar(N.dot(U))).normalize(),C.crossVectors(L,U);const G=C.dot(m[T])<0?-1:1;u.setXYZW(T,P.x,P.y,P.z,G)}for(let T=0,U=O.length;T<U;++T){const k=O[T],G=k.start,Q=k.count;for(let de=G,ue=G+Q;de<ue;de+=3)F(e.getX(de+0)),F(e.getX(de+1)),F(e.getX(de+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==i.count)r=new Ca(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let v=0,S=r.count;v<S;v++)r.setXYZ(v,0,0,0);const o=new ie,c=new ie,u=new ie,d=new ie,m=new ie,h=new ie,g=new ie,_=new ie;if(e)for(let v=0,S=e.count;v<S;v+=3){const E=e.getX(v+0),A=e.getX(v+1),y=e.getX(v+2);o.fromBufferAttribute(i,E),c.fromBufferAttribute(i,A),u.fromBufferAttribute(i,y),g.subVectors(u,c),_.subVectors(o,c),g.cross(_),d.fromBufferAttribute(r,E),m.fromBufferAttribute(r,A),h.fromBufferAttribute(r,y),d.add(g),m.add(g),h.add(g),r.setXYZ(E,d.x,d.y,d.z),r.setXYZ(A,m.x,m.y,m.z),r.setXYZ(y,h.x,h.y,h.z)}else for(let v=0,S=i.count;v<S;v+=3)o.fromBufferAttribute(i,v+0),c.fromBufferAttribute(i,v+1),u.fromBufferAttribute(i,v+2),g.subVectors(u,c),_.subVectors(o,c),g.cross(_),r.setXYZ(v+0,g.x,g.y,g.z),r.setXYZ(v+1,g.x,g.y,g.z),r.setXYZ(v+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)zn.fromBufferAttribute(e,i),zn.normalize(),e.setXYZ(i,zn.x,zn.y,zn.z)}toNonIndexed(){function e(d,m){const h=d.array,g=d.itemSize,_=d.normalized,v=new h.constructor(m.length*g);let S=0,E=0;for(let A=0,y=m.length;A<y;A++){d.isInterleavedBufferAttribute?S=m[A]*d.data.stride+d.offset:S=m[A]*g;for(let x=0;x<g;x++)v[E++]=h[S++]}return new Ca(v,g,_)}if(this.index===null)return rt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Ki,r=this.index.array,o=this.attributes;for(const d in o){const m=o[d],h=e(m,r);i.setAttribute(d,h)}const c=this.morphAttributes;for(const d in c){const m=[],h=c[d];for(let g=0,_=h.length;g<_;g++){const v=h[g],S=e(v,r);m.push(S)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let d=0,m=u.length;d<m;d++){const h=u[d];i.addGroup(h.start,h.count,h.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const m=this.parameters;for(const h in m)m[h]!==void 0&&(e[h]=m[h]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const h=r[m];e.data.attributes[m]=h.toJSON(e.data)}const o={};let c=!1;for(const m in this.morphAttributes){const h=this.morphAttributes[m],g=[];for(let _=0,v=h.length;_<v;_++){const S=h[_];g.push(S.toJSON(e.data))}g.length>0&&(o[m]=g,c=!0)}c&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const h in o){const g=o[h];this.setAttribute(h,g.clone(i))}const c=e.morphAttributes;for(const h in c){const g=[],_=c[h];for(let v=0,S=_.length;v<S;v++)g.push(_[v].clone(i));this.morphAttributes[h]=g}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let h=0,g=u.length;h<g;h++){const _=u[h];this.addGroup(_.start,_.count,_.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let rb=0;class Ju extends Cr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:rb++}),this.uuid=Ho(),this.name="",this.type="Material",this.blending=Do,this.side=is,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=np,this.blendDst=ip,this.blendEquation=yr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new kt(0,0,0),this.blendAlpha=0,this.depthFunc=Po,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=uv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=po,this.stencilZFail=po,this.stencilZPass=po,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){rt(`Material: parameter '${i}' has value of undefined.`);continue}const o=this[i];if(o===void 0){rt(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector2&&r&&r.isVector2||o&&o.isEuler&&r&&r.isEuler||o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Do&&(r.blending=this.blending),this.side!==is&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==np&&(r.blendSrc=this.blendSrc),this.blendDst!==ip&&(r.blendDst=this.blendDst),this.blendEquation!==yr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Po&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==uv&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==po&&(r.stencilFail=this.stencilFail),this.stencilZFail!==po&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==po&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(c){const u=[];for(const d in c){const m=c[d];delete m.metadata,u.push(m)}return u}if(i){const c=o(e.textures),u=o(e.images);c.length>0&&(r.textures=c),u.length>0&&(r.images=u)}return r}fromJSON(e,i){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new kt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=i[e.map]||null),e.matcap!==void 0&&(this.matcap=i[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=i[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=i[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=i[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),this.normalScale=new zt().fromArray(r)}return e.displacementMap!==void 0&&(this.displacementMap=i[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=i[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=i[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=i[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=i[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=i[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=i[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=i[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=i[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=i[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=i[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=i[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=i[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=i[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new zt().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=i[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=i[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=i[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=i[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=i[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=i[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=i[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const o=i.length;r=new Array(o);for(let c=0;c!==o;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Ja=new ie,Nh=new ie,gu=new ie,Hs=new ie,Uh=new ie,_u=new ie,Oh=new ie;class ob{constructor(e=new ie,i=new ie(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ja)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=Ja.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(Ja.copy(this.origin).addScaledVector(this.direction,i),Ja.distanceToSquared(e))}distanceSqToSegment(e,i,r,o){Nh.copy(e).add(i).multiplyScalar(.5),gu.copy(i).sub(e).normalize(),Hs.copy(this.origin).sub(Nh);const c=e.distanceTo(i)*.5,u=-this.direction.dot(gu),d=Hs.dot(this.direction),m=-Hs.dot(gu),h=Hs.lengthSq(),g=Math.abs(1-u*u);let _,v,S,E;if(g>0)if(_=u*m-d,v=u*d-m,E=c*g,_>=0)if(v>=-E)if(v<=E){const A=1/g;_*=A,v*=A,S=_*(_+u*v+2*d)+v*(u*_+v+2*m)+h}else v=c,_=Math.max(0,-(u*v+d)),S=-_*_+v*(v+2*m)+h;else v=-c,_=Math.max(0,-(u*v+d)),S=-_*_+v*(v+2*m)+h;else v<=-E?(_=Math.max(0,-(-u*c+d)),v=_>0?-c:Math.min(Math.max(-c,-m),c),S=-_*_+v*(v+2*m)+h):v<=E?(_=0,v=Math.min(Math.max(-c,-m),c),S=v*(v+2*m)+h):(_=Math.max(0,-(u*c+d)),v=_>0?c:Math.min(Math.max(-c,-m),c),S=-_*_+v*(v+2*m)+h);else v=u>0?-c:c,_=Math.max(0,-(u*v+d)),S=-_*_+v*(v+2*m)+h;return r&&r.copy(this.origin).addScaledVector(this.direction,_),o&&o.copy(Nh).addScaledVector(gu,v),S}intersectSphere(e,i){Ja.subVectors(e.center,this.origin);const r=Ja.dot(this.direction),o=Ja.dot(Ja)-r*r,c=e.radius*e.radius;if(o>c)return null;const u=Math.sqrt(c-o),d=r-u,m=r+u;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,o,c,u,d,m;const h=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,v=this.origin;return h>=0?(r=(e.min.x-v.x)*h,o=(e.max.x-v.x)*h):(r=(e.max.x-v.x)*h,o=(e.min.x-v.x)*h),g>=0?(c=(e.min.y-v.y)*g,u=(e.max.y-v.y)*g):(c=(e.max.y-v.y)*g,u=(e.min.y-v.y)*g),r>u||c>o||((c>r||isNaN(r))&&(r=c),(u<o||isNaN(o))&&(o=u),_>=0?(d=(e.min.z-v.z)*_,m=(e.max.z-v.z)*_):(d=(e.max.z-v.z)*_,m=(e.min.z-v.z)*_),r>m||d>o)||((d>r||r!==r)&&(r=d),(m<o||o!==o)&&(o=m),o<0)?null:this.at(r>=0?r:o,i)}intersectsBox(e){return this.intersectBox(e,Ja)!==null}intersectTriangle(e,i,r,o,c){Uh.subVectors(i,e),_u.subVectors(r,e),Oh.crossVectors(Uh,_u);let u=this.direction.dot(Oh),d;if(u>0){if(o)return null;d=1}else if(u<0)d=-1,u=-u;else return null;Hs.subVectors(this.origin,e);const m=d*this.direction.dot(_u.crossVectors(Hs,_u));if(m<0)return null;const h=d*this.direction.dot(Uh.cross(Hs));if(h<0||m+h>u)return null;const g=-d*Hs.dot(Oh);return g<0?null:this.at(g/u,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Yu extends Ju{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rr,this.combine=Ix,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Rv=new yn,xr=new ob,vu=new sm,Cv=new ie,xu=new ie,Su=new ie,Mu=new ie,Ph=new ie,yu=new ie,wv=new ie,Eu=new ie;class Ni extends Ui{constructor(e=new Ki,i=new Yu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const o=i[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const d=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(e,i){const r=this.geometry,o=r.attributes.position,c=r.morphAttributes.position,u=r.morphTargetsRelative;i.fromBufferAttribute(o,e);const d=this.morphTargetInfluences;if(c&&d){yu.set(0,0,0);for(let m=0,h=c.length;m<h;m++){const g=d[m],_=c[m];g!==0&&(Ph.fromBufferAttribute(_,e),u?yu.addScaledVector(Ph,g):yu.addScaledVector(Ph.sub(i),g))}i.add(yu)}return i}raycast(e,i){const r=this.geometry,o=this.material,c=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),vu.copy(r.boundingSphere),vu.applyMatrix4(c),xr.copy(e.ray).recast(e.near),!(vu.containsPoint(xr.origin)===!1&&(xr.intersectSphere(vu,Cv)===null||xr.origin.distanceToSquared(Cv)>(e.far-e.near)**2))&&(Rv.copy(c).invert(),xr.copy(e.ray).applyMatrix4(Rv),!(r.boundingBox!==null&&xr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,xr)))}_computeIntersections(e,i,r){let o;const c=this.geometry,u=this.material,d=c.index,m=c.attributes.position,h=c.attributes.uv,g=c.attributes.uv1,_=c.attributes.normal,v=c.groups,S=c.drawRange;if(d!==null)if(Array.isArray(u))for(let E=0,A=v.length;E<A;E++){const y=v[E],x=u[y.materialIndex],O=Math.max(y.start,S.start),P=Math.min(d.count,Math.min(y.start+y.count,S.start+S.count));for(let C=O,N=P;C<N;C+=3){const L=d.getX(C),F=d.getX(C+1),T=d.getX(C+2);o=bu(this,x,e,r,h,g,_,L,F,T),o&&(o.faceIndex=Math.floor(C/3),o.face.materialIndex=y.materialIndex,i.push(o))}}else{const E=Math.max(0,S.start),A=Math.min(d.count,S.start+S.count);for(let y=E,x=A;y<x;y+=3){const O=d.getX(y),P=d.getX(y+1),C=d.getX(y+2);o=bu(this,u,e,r,h,g,_,O,P,C),o&&(o.faceIndex=Math.floor(y/3),i.push(o))}}else if(m!==void 0)if(Array.isArray(u))for(let E=0,A=v.length;E<A;E++){const y=v[E],x=u[y.materialIndex],O=Math.max(y.start,S.start),P=Math.min(m.count,Math.min(y.start+y.count,S.start+S.count));for(let C=O,N=P;C<N;C+=3){const L=C,F=C+1,T=C+2;o=bu(this,x,e,r,h,g,_,L,F,T),o&&(o.faceIndex=Math.floor(C/3),o.face.materialIndex=y.materialIndex,i.push(o))}}else{const E=Math.max(0,S.start),A=Math.min(m.count,S.start+S.count);for(let y=E,x=A;y<x;y+=3){const O=y,P=y+1,C=y+2;o=bu(this,u,e,r,h,g,_,O,P,C),o&&(o.faceIndex=Math.floor(y/3),i.push(o))}}}}function lb(a,e,i,r,o,c,u,d){let m;if(e.side===vi?m=r.intersectTriangle(u,c,o,!0,d):m=r.intersectTriangle(o,c,u,e.side===is,d),m===null)return null;Eu.copy(d),Eu.applyMatrix4(a.matrixWorld);const h=i.ray.origin.distanceTo(Eu);return h<i.near||h>i.far?null:{distance:h,point:Eu.clone(),object:a}}function bu(a,e,i,r,o,c,u,d,m,h){a.getVertexPosition(d,xu),a.getVertexPosition(m,Su),a.getVertexPosition(h,Mu);const g=lb(a,e,i,r,xu,Su,Mu,wv);if(g){const _=new ie;fa.getBarycoord(wv,xu,Su,Mu,_),o&&(g.uv=fa.getInterpolatedAttribute(o,d,m,h,_,new zt)),c&&(g.uv1=fa.getInterpolatedAttribute(c,d,m,h,_,new zt)),u&&(g.normal=fa.getInterpolatedAttribute(u,d,m,h,_,new ie),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const v={a:d,b:m,c:h,normal:new ie,materialIndex:0};fa.getNormal(xu,Su,Mu,v.normal),g.face=v,g.barycoord=_}return g}class cb extends ni{constructor(e=null,i=1,r=1,o,c,u,d,m,h=qn,g=qn,_,v){super(null,u,d,m,h,g,o,c,_,v),this.isDataTexture=!0,this.image={data:e,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ih=new ie,ub=new ie,fb=new dt;class Mr{constructor(e=new ie(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,o){return this.normal.set(e,i,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const o=Ih.subVectors(r,i).cross(ub.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i,r=!0){const o=e.delta(Ih),c=this.normal.dot(o);if(c===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/c;return r===!0&&(u<0||u>1)?null:i.copy(e.start).addScaledVector(o,u)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||fb.getNormalMatrix(e),o=this.coplanarPoint(Ih).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Sr=new sm,db=new zt(.5,.5),Tu=new ie;class aS{constructor(e=new Mr,i=new Mr,r=new Mr,o=new Mr,c=new Mr,u=new Mr){this.planes=[e,i,r,o,c,u]}set(e,i,r,o,c,u){const d=this.planes;return d[0].copy(e),d[1].copy(i),d[2].copy(r),d[3].copy(o),d[4].copy(c),d[5].copy(u),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=Ta,r=!1){const o=this.planes,c=e.elements,u=c[0],d=c[1],m=c[2],h=c[3],g=c[4],_=c[5],v=c[6],S=c[7],E=c[8],A=c[9],y=c[10],x=c[11],O=c[12],P=c[13],C=c[14],N=c[15];if(o[0].setComponents(h-u,S-g,x-E,N-O).normalize(),o[1].setComponents(h+u,S+g,x+E,N+O).normalize(),o[2].setComponents(h+d,S+_,x+A,N+P).normalize(),o[3].setComponents(h-d,S-_,x-A,N-P).normalize(),r)o[4].setComponents(m,v,y,C).normalize(),o[5].setComponents(h-m,S-v,x-y,N-C).normalize();else if(o[4].setComponents(h-m,S-v,x-y,N-C).normalize(),i===Ta)o[5].setComponents(h+m,S+v,x+y,N+C).normalize();else if(i===Xu)o[5].setComponents(m,v,y,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Sr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Sr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Sr)}intersectsSprite(e){Sr.center.set(0,0,0);const i=db.distanceTo(e.center);return Sr.radius=.7071067811865476+i,Sr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Sr)}intersectsSphere(e){const i=this.planes,r=e.center,o=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const o=i[r];if(Tu.x=o.normal.x>0?e.max.x:e.min.x,Tu.y=o.normal.y>0?e.max.y:e.min.y,Tu.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Tu)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class sS extends ni{constructor(e=[],i=Tr,r,o,c,u,d,m,h,g){super(e,i,r,o,c,u,d,m,h,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class rm extends ni{constructor(e,i,r,o,c,u,d,m,h){super(e,i,r,o,c,u,d,m,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Bo extends ni{constructor(e,i,r=wa,o,c,u,d=qn,m=qn,h,g=ss,_=1){if(g!==ss&&g!==br)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:e,height:i,depth:_};super(v,o,c,u,d,m,g,r,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new am(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class hb extends Bo{constructor(e,i=wa,r=Tr,o,c,u=qn,d=qn,m,h=ss){const g={width:e,height:e,depth:1},_=[g,g,g,g,g,g];super(e,e,i,r,o,c,u,d,m,h),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class rS extends ni{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class tc extends Ki{constructor(e=1,i=1,r=1,o=1,c=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:o,heightSegments:c,depthSegments:u};const d=this;o=Math.floor(o),c=Math.floor(c),u=Math.floor(u);const m=[],h=[],g=[],_=[];let v=0,S=0;E("z","y","x",-1,-1,r,i,e,u,c,0),E("z","y","x",1,-1,r,i,-e,u,c,1),E("x","z","y",1,1,e,r,i,o,u,2),E("x","z","y",1,-1,e,r,-i,o,u,3),E("x","y","z",1,-1,e,i,r,o,c,4),E("x","y","z",-1,-1,e,i,-r,o,c,5),this.setIndex(m),this.setAttribute("position",new Zi(h,3)),this.setAttribute("normal",new Zi(g,3)),this.setAttribute("uv",new Zi(_,2));function E(A,y,x,O,P,C,N,L,F,T,U){const k=C/F,G=N/T,Q=C/2,de=N/2,ue=L/2,Y=F+1,z=T+1;let H=0,J=0;const he=new ie;for(let Se=0;Se<z;Se++){const B=Se*G-de;for(let q=0;q<Y;q++){const Ce=q*k-Q;he[A]=Ce*O,he[y]=B*P,he[x]=ue,h.push(he.x,he.y,he.z),he[A]=0,he[y]=0,he[x]=L>0?1:-1,g.push(he.x,he.y,he.z),_.push(q/F),_.push(1-Se/T),H+=1}}for(let Se=0;Se<T;Se++)for(let B=0;B<F;B++){const q=v+B+Y*Se,Ce=v+B+Y*(Se+1),Le=v+(B+1)+Y*(Se+1),Ne=v+(B+1)+Y*Se;m.push(q,Ce,Ne),m.push(Ce,Le,Ne),J+=6}d.addGroup(S,J,U),S+=J,v+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new tc(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class pb{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){rt("Curve: .getPoint() not implemented.")}getPointAt(e,i){const r=this.getUtoTmapping(e);return this.getPoint(r,i)}getPoints(e=5){const i=[];for(let r=0;r<=e;r++)i.push(this.getPoint(r/e));return i}getSpacedPoints(e=5){const i=[];for(let r=0;r<=e;r++)i.push(this.getPointAt(r/e));return i}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const i=[];let r,o=this.getPoint(0),c=0;i.push(0);for(let u=1;u<=e;u++)r=this.getPoint(u/e),c+=r.distanceTo(o),i.push(c),o=r;return this.cacheArcLengths=i,i}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,i=null){const r=this.getLengths();let o=0;const c=r.length;let u;i?u=i:u=e*r[c-1];let d=0,m=c-1,h;for(;d<=m;)if(o=Math.floor(d+(m-d)/2),h=r[o]-u,h<0)d=o+1;else if(h>0)m=o-1;else{m=o;break}if(o=m,r[o]===u)return o/(c-1);const g=r[o],v=r[o+1]-g,S=(u-g)/v;return(o+S)/(c-1)}getTangent(e,i){let o=e-1e-4,c=e+1e-4;o<0&&(o=0),c>1&&(c=1);const u=this.getPoint(o),d=this.getPoint(c),m=i||(u.isVector2?new zt:new ie);return m.copy(d).sub(u).normalize(),m}getTangentAt(e,i){const r=this.getUtoTmapping(e);return this.getTangent(r,i)}computeFrenetFrames(e,i=!1){const r=new ie,o=[],c=[],u=[],d=new ie,m=new yn;for(let S=0;S<=e;S++){const E=S/e;o[S]=this.getTangentAt(E,new ie)}c[0]=new ie,u[0]=new ie;let h=Number.MAX_VALUE;const g=Math.abs(o[0].x),_=Math.abs(o[0].y),v=Math.abs(o[0].z);g<=h&&(h=g,r.set(1,0,0)),_<=h&&(h=_,r.set(0,1,0)),v<=h&&r.set(0,0,1),d.crossVectors(o[0],r).normalize(),c[0].crossVectors(o[0],d),u[0].crossVectors(o[0],c[0]);for(let S=1;S<=e;S++){if(c[S]=c[S-1].clone(),u[S]=u[S-1].clone(),d.crossVectors(o[S-1],o[S]),d.length()>Number.EPSILON){d.normalize();const E=Math.acos(Et(o[S-1].dot(o[S]),-1,1));c[S].applyMatrix4(m.makeRotationAxis(d,E))}u[S].crossVectors(o[S],c[S])}if(i===!0){let S=Math.acos(Et(c[0].dot(c[e]),-1,1));S/=e,o[0].dot(d.crossVectors(c[0],c[e]))>0&&(S=-S);for(let E=1;E<=e;E++)c[E].applyMatrix4(m.makeRotationAxis(o[E],S*E)),u[E].crossVectors(o[E],c[E])}return{tangents:o,normals:c,binormals:u}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}function om(){let a=0,e=0,i=0,r=0;function o(c,u,d,m){a=c,e=d,i=-3*c+3*u-2*d-m,r=2*c-2*u+d+m}return{initCatmullRom:function(c,u,d,m,h){o(u,d,h*(d-c),h*(m-u))},initNonuniformCatmullRom:function(c,u,d,m,h,g,_){let v=(u-c)/h-(d-c)/(h+g)+(d-u)/g,S=(d-u)/g-(m-u)/(g+_)+(m-d)/_;v*=g,S*=g,o(u,d,v,S)},calc:function(c){const u=c*c,d=u*c;return a+e*c+i*u+r*d}}}const Dv=new ie,Lv=new ie,Bh=new om,Fh=new om,zh=new om;class mb extends pb{constructor(e=[],i=!1,r="centripetal",o=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=i,this.curveType=r,this.tension=o}getPoint(e,i=new ie){const r=i,o=this.points,c=o.length,u=(c-(this.closed?0:1))*e;let d=Math.floor(u),m=u-d;this.closed?d+=d>0?0:(Math.floor(Math.abs(d)/c)+1)*c:m===0&&d===c-1&&(d=c-2,m=1);let h,g;this.closed||d>0?h=o[(d-1)%c]:(Lv.subVectors(o[0],o[1]).add(o[0]),h=Lv);const _=o[d%c],v=o[(d+1)%c];if(this.closed||d+2<c?g=o[(d+2)%c]:(Dv.subVectors(o[c-1],o[c-2]).add(o[c-1]),g=Dv),this.curveType==="centripetal"||this.curveType==="chordal"){const S=this.curveType==="chordal"?.5:.25;let E=Math.pow(h.distanceToSquared(_),S),A=Math.pow(_.distanceToSquared(v),S),y=Math.pow(v.distanceToSquared(g),S);A<1e-4&&(A=1),E<1e-4&&(E=A),y<1e-4&&(y=A),Bh.initNonuniformCatmullRom(h.x,_.x,v.x,g.x,E,A,y),Fh.initNonuniformCatmullRom(h.y,_.y,v.y,g.y,E,A,y),zh.initNonuniformCatmullRom(h.z,_.z,v.z,g.z,E,A,y)}else this.curveType==="catmullrom"&&(Bh.initCatmullRom(h.x,_.x,v.x,g.x,this.tension),Fh.initCatmullRom(h.y,_.y,v.y,g.y,this.tension),zh.initCatmullRom(h.z,_.z,v.z,g.z,this.tension));return r.set(Bh.calc(m),Fh.calc(m),zh.calc(m)),r}copy(e){super.copy(e),this.points=[];for(let i=0,r=e.points.length;i<r;i++){const o=e.points[i];this.points.push(o.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let i=0,r=this.points.length;i<r;i++){const o=this.points[i];e.points.push(o.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let i=0,r=e.points.length;i<r;i++){const o=e.points[i];this.points.push(new ie().fromArray(o))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}class Ys extends Ki{constructor(e=1,i=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:o};const c=e/2,u=i/2,d=Math.floor(r),m=Math.floor(o),h=d+1,g=m+1,_=e/d,v=i/m,S=[],E=[],A=[],y=[];for(let x=0;x<g;x++){const O=x*v-u;for(let P=0;P<h;P++){const C=P*_-c;E.push(C,-O,0),A.push(0,0,1),y.push(P/d),y.push(1-x/m)}}for(let x=0;x<m;x++)for(let O=0;O<d;O++){const P=O+h*x,C=O+h*(x+1),N=O+1+h*(x+1),L=O+1+h*x;S.push(P,C,L),S.push(C,N,L)}this.setIndex(S),this.setAttribute("position",new Zi(E,3)),this.setAttribute("normal",new Zi(A,3)),this.setAttribute("uv",new Zi(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ys(e.width,e.height,e.widthSegments,e.heightSegments)}}function Fo(a){const e={};for(const i in a){e[i]={};for(const r in a[i]){const o=a[i][r];if(Nv(o))o.isRenderTargetTexture?(rt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=o.clone();else if(Array.isArray(o))if(Nv(o[0])){const c=[];for(let u=0,d=o.length;u<d;u++)c[u]=o[u].clone();e[i][r]=c}else e[i][r]=o.slice();else e[i][r]=o}}return e}function li(a){const e={};for(let i=0;i<a.length;i++){const r=Fo(a[i]);for(const o in r)e[o]=r[o]}return e}function Nv(a){return a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)}function gb(a){const e=[];for(let i=0;i<a.length;i++)e.push(a[i].clone());return e}function oS(a){const e=a.getRenderTarget();return e===null?a.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Lt.workingColorSpace}const _b={clone:Fo,merge:li};var vb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,xb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Qi extends Ju{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=vb,this.fragmentShader=xb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Fo(e.uniforms),this.uniformsGroups=gb(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?i.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?i.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?i.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?i.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?i.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?i.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?i.uniforms[o]={type:"m4",value:u.toArray()}:i.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}fromJSON(e,i){if(super.fromJSON(e,i),e.uniforms!==void 0)for(const r in e.uniforms){const o=e.uniforms[r];switch(this.uniforms[r]={},o.type){case"t":this.uniforms[r].value=i[o.value]||null;break;case"c":this.uniforms[r].value=new kt().setHex(o.value);break;case"v2":this.uniforms[r].value=new zt().fromArray(o.value);break;case"v3":this.uniforms[r].value=new ie().fromArray(o.value);break;case"v4":this.uniforms[r].value=new gn().fromArray(o.value);break;case"m3":this.uniforms[r].value=new dt().fromArray(o.value);break;case"m4":this.uniforms[r].value=new yn().fromArray(o.value);break;default:this.uniforms[r].value=o.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)this.extensions[r]=e.extensions[r];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Sb extends Qi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Mb extends Ju{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=mE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class yb extends Ju{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Au=new ie,Ru=new Go,Sa=new ie;class lS extends Ui{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new yn,this.projectionMatrix=new yn,this.projectionMatrixInverse=new yn,this.coordinateSystem=Ta,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Au,Ru,Sa),Sa.x===1&&Sa.y===1&&Sa.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Au,Ru,Sa.set(1,1,1)).invert()}updateWorldMatrix(e,i,r=!1){super.updateWorldMatrix(e,i,r),this.matrixWorld.decompose(Au,Ru,Sa),Sa.x===1&&Sa.y===1&&Sa.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Au,Ru,Sa.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Gs=new ie,Uv=new zt,Ov=new zt;class qi extends lS{constructor(e=50,i=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Ql*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Yl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ql*2*Math.atan(Math.tan(Yl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){Gs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Gs.x,Gs.y).multiplyScalar(-e/Gs.z),Gs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Gs.x,Gs.y).multiplyScalar(-e/Gs.z)}getViewSize(e,i){return this.getViewBounds(e,Uv,Ov),i.subVectors(Ov,Uv)}setViewOffset(e,i,r,o,c,u){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Yl*.5*this.fov)/this.zoom,r=2*i,o=this.aspect*r,c=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const m=u.fullWidth,h=u.fullHeight;c+=u.offsetX*o/m,i-=u.offsetY*r/h,o*=u.width/m,r*=u.height/h}const d=this.filmOffset;d!==0&&(c+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+o,i,i-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class cS extends lS{constructor(e=-1,i=1,r=1,o=-1,c=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=o,this.near=c,this.far=u,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,o,c,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let c=r-e,u=r+e,d=o+i,m=o-i;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=h*this.view.offsetX,u=c+h*this.view.width,d-=g*this.view.offsetY,m=d-g*this.view.height}this.projectionMatrix.makeOrthographic(c,u,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const To=-90,Ao=1;class Eb extends Ui{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new qi(To,Ao,e,i);o.layers=this.layers,this.add(o);const c=new qi(To,Ao,e,i);c.layers=this.layers,this.add(c);const u=new qi(To,Ao,e,i);u.layers=this.layers,this.add(u);const d=new qi(To,Ao,e,i);d.layers=this.layers,this.add(d);const m=new qi(To,Ao,e,i);m.layers=this.layers,this.add(m);const h=new qi(To,Ao,e,i);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,o,c,u,d,m]=i;for(const h of i)this.remove(h);if(e===Ta)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===Xu)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of i)this.add(h),h.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,u,d,m,h,g]=this.children,_=e.getRenderTarget(),v=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const A=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let y=!1;e.isWebGLRenderer===!0?y=e.state.buffers.depth.getReversed():y=e.reversedDepthBuffer,e.setRenderTarget(r,0,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,c),e.setRenderTarget(r,1,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,u),e.setRenderTarget(r,2,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,d),e.setRenderTarget(r,3,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,m),e.setRenderTarget(r,4,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,h),r.texture.generateMipmaps=A,e.setRenderTarget(r,5,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,g),e.setRenderTarget(_,v,S),e.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class bb extends qi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const xm=class xm{constructor(e,i,r,o){this.elements=[1,0,0,1],e!==void 0&&this.set(e,i,r,o)}identity(){return this.set(1,0,0,1),this}fromArray(e,i=0){for(let r=0;r<4;r++)this.elements[r]=e[r+i];return this}set(e,i,r,o){const c=this.elements;return c[0]=e,c[2]=i,c[1]=r,c[3]=o,this}};xm.prototype.isMatrix2=!0;let Pv=xm;function Iv(a,e,i,r){const o=Tb(r);switch(i){case Zx:return a*e;case Qx:return a*e/o.components*o.byteLength;case Jp:return a*e/o.components*o.byteLength;case Ar:return a*e*2/o.components*o.byteLength;case $p:return a*e*2/o.components*o.byteLength;case Kx:return a*e*3/o.components*o.byteLength;case ha:return a*e*4/o.components*o.byteLength;case em:return a*e*4/o.components*o.byteLength;case Ou:case Pu:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case Iu:case Bu:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case pp:case gp:return Math.max(a,16)*Math.max(e,8)/4;case hp:case mp:return Math.max(a,8)*Math.max(e,8)/2;case _p:case vp:case Sp:case Mp:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case xp:case Hu:case yp:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Ep:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case bp:return Math.floor((a+4)/5)*Math.floor((e+3)/4)*16;case Tp:return Math.floor((a+4)/5)*Math.floor((e+4)/5)*16;case Ap:return Math.floor((a+5)/6)*Math.floor((e+4)/5)*16;case Rp:return Math.floor((a+5)/6)*Math.floor((e+5)/6)*16;case Cp:return Math.floor((a+7)/8)*Math.floor((e+4)/5)*16;case wp:return Math.floor((a+7)/8)*Math.floor((e+5)/6)*16;case Dp:return Math.floor((a+7)/8)*Math.floor((e+7)/8)*16;case Lp:return Math.floor((a+9)/10)*Math.floor((e+4)/5)*16;case Np:return Math.floor((a+9)/10)*Math.floor((e+5)/6)*16;case Up:return Math.floor((a+9)/10)*Math.floor((e+7)/8)*16;case Op:return Math.floor((a+9)/10)*Math.floor((e+9)/10)*16;case Pp:return Math.floor((a+11)/12)*Math.floor((e+9)/10)*16;case Ip:return Math.floor((a+11)/12)*Math.floor((e+11)/12)*16;case Bp:case Fp:case zp:return Math.ceil(a/4)*Math.ceil(e/4)*16;case Hp:case Gp:return Math.ceil(a/4)*Math.ceil(e/4)*8;case Gu:case Vp:return Math.ceil(a/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function Tb(a){switch(a){case ji:case Wx:return{byteLength:1,components:1};case Zl:case Yx:case as:return{byteLength:2,components:1};case Kp:case Qp:return{byteLength:2,components:4};case wa:case Zp:case ba:return{byteLength:4,components:1};case qx:case jx:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${a}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:jp}}));typeof window<"u"&&(window.__THREE__?rt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=jp);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function uS(){let a=null,e=!1,i=null,r=null;function o(c,u){i(c,u),r=a.requestAnimationFrame(o)}return{start:function(){e!==!0&&i!==null&&a!==null&&(r=a.requestAnimationFrame(o),e=!0)},stop:function(){a!==null&&a.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){a=c}}}function Ab(a){const e=new WeakMap;function i(d,m){const h=d.array,g=d.usage,_=h.byteLength,v=a.createBuffer();a.bindBuffer(m,v),a.bufferData(m,h,g),d.onUploadCallback();let S;if(h instanceof Float32Array)S=a.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)S=a.HALF_FLOAT;else if(h instanceof Uint16Array)d.isFloat16BufferAttribute?S=a.HALF_FLOAT:S=a.UNSIGNED_SHORT;else if(h instanceof Int16Array)S=a.SHORT;else if(h instanceof Uint32Array)S=a.UNSIGNED_INT;else if(h instanceof Int32Array)S=a.INT;else if(h instanceof Int8Array)S=a.BYTE;else if(h instanceof Uint8Array)S=a.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)S=a.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:v,type:S,bytesPerElement:h.BYTES_PER_ELEMENT,version:d.version,size:_}}function r(d,m,h){const g=m.array,_=m.updateRanges;if(a.bindBuffer(h,d),_.length===0)a.bufferSubData(h,0,g);else{_.sort((S,E)=>S.start-E.start);let v=0;for(let S=1;S<_.length;S++){const E=_[v],A=_[S];A.start<=E.start+E.count+1?E.count=Math.max(E.count,A.start+A.count-E.start):(++v,_[v]=A)}_.length=v+1;for(let S=0,E=_.length;S<E;S++){const A=_[S];a.bufferSubData(h,A.start*g.BYTES_PER_ELEMENT,g,A.start,A.count)}m.clearUpdateRanges()}m.onUploadCallback()}function o(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=e.get(d);m&&(a.deleteBuffer(m.buffer),e.delete(d))}function u(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=e.get(d);(!g||g.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const h=e.get(d);if(h===void 0)e.set(d,i(d,m));else if(h.version<d.version){if(h.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,d,m),h.version=d.version}}return{get:o,remove:c,update:u}}var Rb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Cb=`#ifdef USE_ALPHAHASH
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
#endif`,wb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Db=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Lb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Nb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ub=`#ifdef USE_AOMAP
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
#endif`,Ob=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Pb=`#ifdef USE_BATCHING
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
#endif`,Ib=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Bb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Fb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,zb=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Hb=`#ifdef USE_IRIDESCENCE
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
#endif`,Gb=`#ifdef USE_BUMPMAP
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
#endif`,Vb=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,kb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Xb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Wb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Yb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,qb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,jb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Zb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Kb=`#define PI 3.141592653589793
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
} // validated`,Qb=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Jb=`vec3 transformedNormal = objectNormal;
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
#endif`,$b=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,e1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,t1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,n1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,i1="gl_FragColor = linearToOutputTexel( gl_FragColor );",a1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,s1=`#ifdef USE_ENVMAP
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
#endif`,r1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,o1=`#ifdef USE_ENVMAP
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
#endif`,l1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,c1=`#ifdef USE_ENVMAP
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
#endif`,u1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,f1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,d1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,h1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,p1=`#ifdef USE_GRADIENTMAP
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
}`,m1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,g1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,v1=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,x1=`#ifdef USE_ENVMAP
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
#endif`,S1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,M1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,y1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,E1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,b1=`PhysicalMaterial material;
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
#endif`,T1=`uniform sampler2D dfgLUT;
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
}`,A1=`
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
#endif`,R1=`#if defined( RE_IndirectDiffuse )
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
#endif`,C1=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,w1=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,D1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,L1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,N1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,U1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,O1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,P1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,I1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,B1=`#if defined( USE_POINTS_UV )
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
#endif`,F1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,z1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,H1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,G1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,V1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,k1=`#ifdef USE_MORPHTARGETS
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
#endif`,X1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,W1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Y1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,q1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,j1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Z1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,K1=`#ifdef USE_NORMALMAP
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
#endif`,Q1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,J1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,eT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,tT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,nT=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,iT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,aT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,sT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,rT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,oT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,lT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,cT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,uT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,fT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,dT=`float getShadowMask() {
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
}`,hT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,pT=`#ifdef USE_SKINNING
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
#endif`,mT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,gT=`#ifdef USE_SKINNING
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
#endif`,_T=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,vT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,xT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ST=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,MT=`#ifdef USE_TRANSMISSION
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
#endif`,yT=`#ifdef USE_TRANSMISSION
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
#endif`,ET=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,TT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,AT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const RT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,CT=`uniform sampler2D t2D;
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
}`,wT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,DT=`#ifdef ENVMAP_TYPE_CUBE
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
}`,LT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,NT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,UT=`#include <common>
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
}`,OT=`#if DEPTH_PACKING == 3200
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
}`,PT=`#define DISTANCE
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
}`,IT=`#define DISTANCE
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
}`,BT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,FT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zT=`uniform float scale;
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
}`,HT=`uniform vec3 diffuse;
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
}`,GT=`#include <common>
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
}`,VT=`uniform vec3 diffuse;
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
}`,kT=`#define LAMBERT
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
}`,XT=`#define LAMBERT
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
}`,WT=`#define MATCAP
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
}`,YT=`#define MATCAP
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
}`,qT=`#define NORMAL
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
}`,jT=`#define NORMAL
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
}`,ZT=`#define PHONG
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
}`,KT=`#define PHONG
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
}`,QT=`#define STANDARD
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
}`,JT=`#define STANDARD
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
}`,$T=`#define TOON
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
}`,eA=`#define TOON
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
}`,tA=`uniform float size;
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
}`,nA=`uniform vec3 diffuse;
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
}`,iA=`#include <common>
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
}`,aA=`uniform vec3 color;
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
}`,sA=`uniform float rotation;
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
}`,rA=`uniform vec3 diffuse;
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
}`,vt={alphahash_fragment:Rb,alphahash_pars_fragment:Cb,alphamap_fragment:wb,alphamap_pars_fragment:Db,alphatest_fragment:Lb,alphatest_pars_fragment:Nb,aomap_fragment:Ub,aomap_pars_fragment:Ob,batching_pars_vertex:Pb,batching_vertex:Ib,begin_vertex:Bb,beginnormal_vertex:Fb,bsdfs:zb,iridescence_fragment:Hb,bumpmap_pars_fragment:Gb,clipping_planes_fragment:Vb,clipping_planes_pars_fragment:kb,clipping_planes_pars_vertex:Xb,clipping_planes_vertex:Wb,color_fragment:Yb,color_pars_fragment:qb,color_pars_vertex:jb,color_vertex:Zb,common:Kb,cube_uv_reflection_fragment:Qb,defaultnormal_vertex:Jb,displacementmap_pars_vertex:$b,displacementmap_vertex:e1,emissivemap_fragment:t1,emissivemap_pars_fragment:n1,colorspace_fragment:i1,colorspace_pars_fragment:a1,envmap_fragment:s1,envmap_common_pars_fragment:r1,envmap_pars_fragment:o1,envmap_pars_vertex:l1,envmap_physical_pars_fragment:x1,envmap_vertex:c1,fog_vertex:u1,fog_pars_vertex:f1,fog_fragment:d1,fog_pars_fragment:h1,gradientmap_pars_fragment:p1,lightmap_pars_fragment:m1,lights_lambert_fragment:g1,lights_lambert_pars_fragment:_1,lights_pars_begin:v1,lights_toon_fragment:S1,lights_toon_pars_fragment:M1,lights_phong_fragment:y1,lights_phong_pars_fragment:E1,lights_physical_fragment:b1,lights_physical_pars_fragment:T1,lights_fragment_begin:A1,lights_fragment_maps:R1,lights_fragment_end:C1,lightprobes_pars_fragment:w1,logdepthbuf_fragment:D1,logdepthbuf_pars_fragment:L1,logdepthbuf_pars_vertex:N1,logdepthbuf_vertex:U1,map_fragment:O1,map_pars_fragment:P1,map_particle_fragment:I1,map_particle_pars_fragment:B1,metalnessmap_fragment:F1,metalnessmap_pars_fragment:z1,morphinstance_vertex:H1,morphcolor_vertex:G1,morphnormal_vertex:V1,morphtarget_pars_vertex:k1,morphtarget_vertex:X1,normal_fragment_begin:W1,normal_fragment_maps:Y1,normal_pars_fragment:q1,normal_pars_vertex:j1,normal_vertex:Z1,normalmap_pars_fragment:K1,clearcoat_normal_fragment_begin:Q1,clearcoat_normal_fragment_maps:J1,clearcoat_pars_fragment:$1,iridescence_pars_fragment:eT,opaque_fragment:tT,packing:nT,premultiplied_alpha_fragment:iT,project_vertex:aT,dithering_fragment:sT,dithering_pars_fragment:rT,roughnessmap_fragment:oT,roughnessmap_pars_fragment:lT,shadowmap_pars_fragment:cT,shadowmap_pars_vertex:uT,shadowmap_vertex:fT,shadowmask_pars_fragment:dT,skinbase_vertex:hT,skinning_pars_vertex:pT,skinning_vertex:mT,skinnormal_vertex:gT,specularmap_fragment:_T,specularmap_pars_fragment:vT,tonemapping_fragment:xT,tonemapping_pars_fragment:ST,transmission_fragment:MT,transmission_pars_fragment:yT,uv_pars_fragment:ET,uv_pars_vertex:bT,uv_vertex:TT,worldpos_vertex:AT,background_vert:RT,background_frag:CT,backgroundCube_vert:wT,backgroundCube_frag:DT,cube_vert:LT,cube_frag:NT,depth_vert:UT,depth_frag:OT,distance_vert:PT,distance_frag:IT,equirect_vert:BT,equirect_frag:FT,linedashed_vert:zT,linedashed_frag:HT,meshbasic_vert:GT,meshbasic_frag:VT,meshlambert_vert:kT,meshlambert_frag:XT,meshmatcap_vert:WT,meshmatcap_frag:YT,meshnormal_vert:qT,meshnormal_frag:jT,meshphong_vert:ZT,meshphong_frag:KT,meshphysical_vert:QT,meshphysical_frag:JT,meshtoon_vert:$T,meshtoon_frag:eA,points_vert:tA,points_frag:nA,shadow_vert:iA,shadow_frag:aA,sprite_vert:sA,sprite_frag:rA},We={common:{diffuse:{value:new kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new dt}},envmap:{envMap:{value:null},envMapRotation:{value:new dt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new dt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new dt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new dt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new dt},normalScale:{value:new zt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new dt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new dt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new dt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new dt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new ie},probesMax:{value:new ie},probesResolution:{value:new ie}},points:{diffuse:{value:new kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0},uvTransform:{value:new dt}},sprite:{diffuse:{value:new kt(16777215)},opacity:{value:1},center:{value:new zt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}}},ya={basic:{uniforms:li([We.common,We.specularmap,We.envmap,We.aomap,We.lightmap,We.fog]),vertexShader:vt.meshbasic_vert,fragmentShader:vt.meshbasic_frag},lambert:{uniforms:li([We.common,We.specularmap,We.envmap,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.fog,We.lights,{emissive:{value:new kt(0)},envMapIntensity:{value:1}}]),vertexShader:vt.meshlambert_vert,fragmentShader:vt.meshlambert_frag},phong:{uniforms:li([We.common,We.specularmap,We.envmap,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.fog,We.lights,{emissive:{value:new kt(0)},specular:{value:new kt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:vt.meshphong_vert,fragmentShader:vt.meshphong_frag},standard:{uniforms:li([We.common,We.envmap,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.roughnessmap,We.metalnessmap,We.fog,We.lights,{emissive:{value:new kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:vt.meshphysical_vert,fragmentShader:vt.meshphysical_frag},toon:{uniforms:li([We.common,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.gradientmap,We.fog,We.lights,{emissive:{value:new kt(0)}}]),vertexShader:vt.meshtoon_vert,fragmentShader:vt.meshtoon_frag},matcap:{uniforms:li([We.common,We.bumpmap,We.normalmap,We.displacementmap,We.fog,{matcap:{value:null}}]),vertexShader:vt.meshmatcap_vert,fragmentShader:vt.meshmatcap_frag},points:{uniforms:li([We.points,We.fog]),vertexShader:vt.points_vert,fragmentShader:vt.points_frag},dashed:{uniforms:li([We.common,We.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:vt.linedashed_vert,fragmentShader:vt.linedashed_frag},depth:{uniforms:li([We.common,We.displacementmap]),vertexShader:vt.depth_vert,fragmentShader:vt.depth_frag},normal:{uniforms:li([We.common,We.bumpmap,We.normalmap,We.displacementmap,{opacity:{value:1}}]),vertexShader:vt.meshnormal_vert,fragmentShader:vt.meshnormal_frag},sprite:{uniforms:li([We.sprite,We.fog]),vertexShader:vt.sprite_vert,fragmentShader:vt.sprite_frag},background:{uniforms:{uvTransform:{value:new dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:vt.background_vert,fragmentShader:vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new dt}},vertexShader:vt.backgroundCube_vert,fragmentShader:vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:vt.cube_vert,fragmentShader:vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:vt.equirect_vert,fragmentShader:vt.equirect_frag},distance:{uniforms:li([We.common,We.displacementmap,{referencePosition:{value:new ie},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:vt.distance_vert,fragmentShader:vt.distance_frag},shadow:{uniforms:li([We.lights,We.fog,{color:{value:new kt(0)},opacity:{value:1}}]),vertexShader:vt.shadow_vert,fragmentShader:vt.shadow_frag}};ya.physical={uniforms:li([ya.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new dt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new dt},clearcoatNormalScale:{value:new zt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new dt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new dt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new dt},sheen:{value:0},sheenColor:{value:new kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new dt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new dt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new dt},transmissionSamplerSize:{value:new zt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new dt},attenuationDistance:{value:0},attenuationColor:{value:new kt(0)},specularColor:{value:new kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new dt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new dt},anisotropyVector:{value:new zt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new dt}}]),vertexShader:vt.meshphysical_vert,fragmentShader:vt.meshphysical_frag};const Cu={r:0,b:0,g:0},oA=new yn,fS=new dt;fS.set(-1,0,0,0,1,0,0,0,1);function lA(a,e,i,r,o,c){const u=new kt(0);let d=o===!0?0:1,m,h,g=null,_=0,v=null;function S(O){let P=O.isScene===!0?O.background:null;if(P&&P.isTexture){const C=O.backgroundBlurriness>0;P=e.get(P,C)}return P}function E(O){let P=!1;const C=S(O);C===null?y(u,d):C&&C.isColor&&(y(C,1),P=!0);const N=a.xr.getEnvironmentBlendMode();N==="additive"?i.buffers.color.setClear(0,0,0,1,c):N==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(a.autoClear||P)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil))}function A(O,P){const C=S(P);C&&(C.isCubeTexture||C.mapping===Qu)?(h===void 0&&(h=new Ni(new tc(1,1,1),new Qi({name:"BackgroundCubeMaterial",uniforms:Fo(ya.backgroundCube.uniforms),vertexShader:ya.backgroundCube.vertexShader,fragmentShader:ya.backgroundCube.fragmentShader,side:vi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(N,L,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),h.material.uniforms.envMap.value=C,h.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(oA.makeRotationFromEuler(P.backgroundRotation)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(fS),h.material.toneMapped=Lt.getTransfer(C.colorSpace)!==qt,(g!==C||_!==C.version||v!==a.toneMapping)&&(h.material.needsUpdate=!0,g=C,_=C.version,v=a.toneMapping),h.layers.enableAll(),O.unshift(h,h.geometry,h.material,0,0,null)):C&&C.isTexture&&(m===void 0&&(m=new Ni(new Ys(2,2),new Qi({name:"BackgroundMaterial",uniforms:Fo(ya.background.uniforms),vertexShader:ya.background.vertexShader,fragmentShader:ya.background.fragmentShader,side:is,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(m)),m.material.uniforms.t2D.value=C,m.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,m.material.toneMapped=Lt.getTransfer(C.colorSpace)!==qt,C.matrixAutoUpdate===!0&&C.updateMatrix(),m.material.uniforms.uvTransform.value.copy(C.matrix),(g!==C||_!==C.version||v!==a.toneMapping)&&(m.material.needsUpdate=!0,g=C,_=C.version,v=a.toneMapping),m.layers.enableAll(),O.unshift(m,m.geometry,m.material,0,0,null))}function y(O,P){O.getRGB(Cu,oS(a)),i.buffers.color.setClear(Cu.r,Cu.g,Cu.b,P,c)}function x(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return u},setClearColor:function(O,P=1){u.set(O),d=P,y(u,d)},getClearAlpha:function(){return d},setClearAlpha:function(O){d=O,y(u,d)},render:E,addToRenderList:A,dispose:x}}function cA(a,e){const i=a.getParameter(a.MAX_VERTEX_ATTRIBS),r={},o=v(null);let c=o,u=!1;function d(G,Q,de,ue,Y){let z=!1;const H=_(G,ue,de,Q);c!==H&&(c=H,h(c.object)),z=S(G,ue,de,Y),z&&E(G,ue,de,Y),Y!==null&&e.update(Y,a.ELEMENT_ARRAY_BUFFER),(z||u)&&(u=!1,C(G,Q,de,ue),Y!==null&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function m(){return a.createVertexArray()}function h(G){return a.bindVertexArray(G)}function g(G){return a.deleteVertexArray(G)}function _(G,Q,de,ue){const Y=ue.wireframe===!0;let z=r[Q.id];z===void 0&&(z={},r[Q.id]=z);const H=G.isInstancedMesh===!0?G.id:0;let J=z[H];J===void 0&&(J={},z[H]=J);let he=J[de.id];he===void 0&&(he={},J[de.id]=he);let Se=he[Y];return Se===void 0&&(Se=v(m()),he[Y]=Se),Se}function v(G){const Q=[],de=[],ue=[];for(let Y=0;Y<i;Y++)Q[Y]=0,de[Y]=0,ue[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Q,enabledAttributes:de,attributeDivisors:ue,object:G,attributes:{},index:null}}function S(G,Q,de,ue){const Y=c.attributes,z=Q.attributes;let H=0;const J=de.getAttributes();for(const he in J)if(J[he].location>=0){const B=Y[he];let q=z[he];if(q===void 0&&(he==="instanceMatrix"&&G.instanceMatrix&&(q=G.instanceMatrix),he==="instanceColor"&&G.instanceColor&&(q=G.instanceColor)),B===void 0||B.attribute!==q||q&&B.data!==q.data)return!0;H++}return c.attributesNum!==H||c.index!==ue}function E(G,Q,de,ue){const Y={},z=Q.attributes;let H=0;const J=de.getAttributes();for(const he in J)if(J[he].location>=0){let B=z[he];B===void 0&&(he==="instanceMatrix"&&G.instanceMatrix&&(B=G.instanceMatrix),he==="instanceColor"&&G.instanceColor&&(B=G.instanceColor));const q={};q.attribute=B,B&&B.data&&(q.data=B.data),Y[he]=q,H++}c.attributes=Y,c.attributesNum=H,c.index=ue}function A(){const G=c.newAttributes;for(let Q=0,de=G.length;Q<de;Q++)G[Q]=0}function y(G){x(G,0)}function x(G,Q){const de=c.newAttributes,ue=c.enabledAttributes,Y=c.attributeDivisors;de[G]=1,ue[G]===0&&(a.enableVertexAttribArray(G),ue[G]=1),Y[G]!==Q&&(a.vertexAttribDivisor(G,Q),Y[G]=Q)}function O(){const G=c.newAttributes,Q=c.enabledAttributes;for(let de=0,ue=Q.length;de<ue;de++)Q[de]!==G[de]&&(a.disableVertexAttribArray(de),Q[de]=0)}function P(G,Q,de,ue,Y,z,H){H===!0?a.vertexAttribIPointer(G,Q,de,Y,z):a.vertexAttribPointer(G,Q,de,ue,Y,z)}function C(G,Q,de,ue){A();const Y=ue.attributes,z=de.getAttributes(),H=Q.defaultAttributeValues;for(const J in z){const he=z[J];if(he.location>=0){let Se=Y[J];if(Se===void 0&&(J==="instanceMatrix"&&G.instanceMatrix&&(Se=G.instanceMatrix),J==="instanceColor"&&G.instanceColor&&(Se=G.instanceColor)),Se!==void 0){const B=Se.normalized,q=Se.itemSize,Ce=e.get(Se);if(Ce===void 0)continue;const Le=Ce.buffer,Ne=Ce.type,te=Ce.bytesPerElement,Te=Ne===a.INT||Ne===a.UNSIGNED_INT||Se.gpuType===Zp;if(Se.isInterleavedBufferAttribute){const ye=Se.data,ke=ye.stride,tt=Se.offset;if(ye.isInstancedInterleavedBuffer){for(let qe=0;qe<he.locationSize;qe++)x(he.location+qe,ye.meshPerAttribute);G.isInstancedMesh!==!0&&ue._maxInstanceCount===void 0&&(ue._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let qe=0;qe<he.locationSize;qe++)y(he.location+qe);a.bindBuffer(a.ARRAY_BUFFER,Le);for(let qe=0;qe<he.locationSize;qe++)P(he.location+qe,q/he.locationSize,Ne,B,ke*te,(tt+q/he.locationSize*qe)*te,Te)}else{if(Se.isInstancedBufferAttribute){for(let ye=0;ye<he.locationSize;ye++)x(he.location+ye,Se.meshPerAttribute);G.isInstancedMesh!==!0&&ue._maxInstanceCount===void 0&&(ue._maxInstanceCount=Se.meshPerAttribute*Se.count)}else for(let ye=0;ye<he.locationSize;ye++)y(he.location+ye);a.bindBuffer(a.ARRAY_BUFFER,Le);for(let ye=0;ye<he.locationSize;ye++)P(he.location+ye,q/he.locationSize,Ne,B,q*te,q/he.locationSize*ye*te,Te)}}else if(H!==void 0){const B=H[J];if(B!==void 0)switch(B.length){case 2:a.vertexAttrib2fv(he.location,B);break;case 3:a.vertexAttrib3fv(he.location,B);break;case 4:a.vertexAttrib4fv(he.location,B);break;default:a.vertexAttrib1fv(he.location,B)}}}}O()}function N(){U();for(const G in r){const Q=r[G];for(const de in Q){const ue=Q[de];for(const Y in ue){const z=ue[Y];for(const H in z)g(z[H].object),delete z[H];delete ue[Y]}}delete r[G]}}function L(G){if(r[G.id]===void 0)return;const Q=r[G.id];for(const de in Q){const ue=Q[de];for(const Y in ue){const z=ue[Y];for(const H in z)g(z[H].object),delete z[H];delete ue[Y]}}delete r[G.id]}function F(G){for(const Q in r){const de=r[Q];for(const ue in de){const Y=de[ue];if(Y[G.id]===void 0)continue;const z=Y[G.id];for(const H in z)g(z[H].object),delete z[H];delete Y[G.id]}}}function T(G){for(const Q in r){const de=r[Q],ue=G.isInstancedMesh===!0?G.id:0,Y=de[ue];if(Y!==void 0){for(const z in Y){const H=Y[z];for(const J in H)g(H[J].object),delete H[J];delete Y[z]}delete de[ue],Object.keys(de).length===0&&delete r[Q]}}}function U(){k(),u=!0,c!==o&&(c=o,h(c.object))}function k(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:d,reset:U,resetDefaultState:k,dispose:N,releaseStatesOfGeometry:L,releaseStatesOfObject:T,releaseStatesOfProgram:F,initAttributes:A,enableAttribute:y,disableUnusedAttributes:O}}function uA(a,e,i){let r;function o(m){r=m}function c(m,h){a.drawArrays(r,m,h),i.update(h,r,1)}function u(m,h,g){g!==0&&(a.drawArraysInstanced(r,m,h,g),i.update(h,r,g))}function d(m,h,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,h,0,g);let v=0;for(let S=0;S<g;S++)v+=h[S];i.update(v,r,1)}this.setMode=o,this.render=c,this.renderInstances=u,this.renderMultiDraw=d}function fA(a,e,i,r){let o;function c(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");o=a.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(F){return!(F!==ha&&r.convert(F)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(F){const T=F===as&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==ji&&r.convert(F)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==ba&&!T)}function m(F){if(F==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=i.precision!==void 0?i.precision:"highp";const g=m(h);g!==h&&(rt("WebGLRenderer:",h,"not supported, using",g,"instead."),h=g);const _=i.logarithmicDepthBuffer===!0,v=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control");i.reversedDepthBuffer===!0&&v===!1&&rt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const S=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),E=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=a.getParameter(a.MAX_TEXTURE_SIZE),y=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),x=a.getParameter(a.MAX_VERTEX_ATTRIBS),O=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),P=a.getParameter(a.MAX_VARYING_VECTORS),C=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),N=a.getParameter(a.MAX_SAMPLES),L=a.getParameter(a.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:u,textureTypeReadable:d,precision:h,logarithmicDepthBuffer:_,reversedDepthBuffer:v,maxTextures:S,maxVertexTextures:E,maxTextureSize:A,maxCubemapSize:y,maxAttributes:x,maxVertexUniforms:O,maxVaryings:P,maxFragmentUniforms:C,maxSamples:N,samples:L}}function dA(a){const e=this;let i=null,r=0,o=!1,c=!1;const u=new Mr,d=new dt,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(_,v){const S=_.length!==0||v||r!==0||o;return o=v,r=_.length,S},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,v){i=g(_,v,0)},this.setState=function(_,v,S){const E=_.clippingPlanes,A=_.clipIntersection,y=_.clipShadows,x=a.get(_);if(!o||E===null||E.length===0||c&&!y)c?g(null):h();else{const O=c?0:r,P=O*4;let C=x.clippingState||null;m.value=C,C=g(E,v,P,S);for(let N=0;N!==P;++N)C[N]=i[N];x.clippingState=C,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=O}};function h(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function g(_,v,S,E){const A=_!==null?_.length:0;let y=null;if(A!==0){if(y=m.value,E!==!0||y===null){const x=S+A*4,O=v.matrixWorldInverse;d.getNormalMatrix(O),(y===null||y.length<x)&&(y=new Float32Array(x));for(let P=0,C=S;P!==A;++P,C+=4)u.copy(_[P]).applyMatrix4(O,d),u.normal.toArray(y,C),y[C+3]=u.constant}m.value=y,m.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,y}}const qs=4,Bv=[.125,.215,.35,.446,.526,.582],Er=20,hA=256,Bl=new cS,Fv=new kt;let Hh=null,Gh=0,Vh=0,kh=!1;const pA=new ie;class zv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,r=.1,o=100,c={}){const{size:u=256,position:d=pA}=c;Hh=this._renderer.getRenderTarget(),Gh=this._renderer.getActiveCubeFace(),Vh=this._renderer.getActiveMipmapLevel(),kh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,r,o,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Gv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Hh,Gh,Vh),this._renderer.xr.enabled=kh,e.scissorTest=!1,Ro(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Tr||e.mapping===Io?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Hh=this._renderer.getRenderTarget(),Gh=this._renderer.getActiveCubeFace(),Vh=this._renderer.getActiveMipmapLevel(),kh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:_n,minFilter:_n,generateMipmaps:!1,type:as,format:ha,colorSpace:Vu,depthBuffer:!1},o=Hv(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Hv(e,i,r);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=mA(c)),this._blurMaterial=_A(c,e,i),this._ggxMaterial=gA(c,e,i)}return o}_compileMaterial(e){const i=new Ni(new Ki,e);this._renderer.compile(i,Bl)}_sceneToCubeUV(e,i,r,o,c){const m=new qi(90,1,i,r),h=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],_=this._renderer,v=_.autoClear,S=_.toneMapping;_.getClearColor(Fv),_.toneMapping=Aa,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(o),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ni(new tc,new Yu({name:"PMREM.Background",side:vi,depthWrite:!1,depthTest:!1})));const A=this._backgroundBox,y=A.material;let x=!1;const O=e.background;O?O.isColor&&(y.color.copy(O),e.background=null,x=!0):(y.color.copy(Fv),x=!0);for(let P=0;P<6;P++){const C=P%3;C===0?(m.up.set(0,h[P],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+g[P],c.y,c.z)):C===1?(m.up.set(0,0,h[P]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+g[P],c.z)):(m.up.set(0,h[P],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+g[P]));const N=this._cubeSize;Ro(o,C*N,P>2?N:0,N,N),_.setRenderTarget(o),x&&_.render(A,m),_.render(e,m)}_.toneMapping=S,_.autoClear=v,e.background=O}_textureToCubeUV(e,i){const r=this._renderer,o=e.mapping===Tr||e.mapping===Io;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Gv());const c=o?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=c;const d=c.uniforms;d.envMap.value=e;const m=this._cubeSize;Ro(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(u,Bl)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const o=this._lodMeshes.length;for(let c=1;c<o;c++)this._applyGGXFilter(e,c-1,c);i.autoClear=r}_applyGGXFilter(e,i,r){const o=this._renderer,c=this._pingPongRenderTarget,u=this._ggxMaterial,d=this._lodMeshes[r];d.material=u;const m=u.uniforms,h=r/(this._lodMeshes.length-1),g=i/(this._lodMeshes.length-1),_=Math.sqrt(h*h-g*g),v=0+h*1.25,S=_*v,{_lodMax:E}=this,A=this._sizeLods[r],y=3*A*(r>E-qs?r-E+qs:0),x=4*(this._cubeSize-A);m.envMap.value=e.texture,m.roughness.value=S,m.mipInt.value=E-i,Ro(c,y,x,3*A,2*A),o.setRenderTarget(c),o.render(d,Bl),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=E-r,Ro(e,y,x,3*A,2*A),o.setRenderTarget(e),o.render(d,Bl)}_blur(e,i,r,o,c){const u=this._pingPongRenderTarget;this._halfBlur(e,u,i,r,o,"latitudinal",c),this._halfBlur(u,e,r,r,o,"longitudinal",c)}_halfBlur(e,i,r,o,c,u,d){const m=this._renderer,h=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&It("blur direction must be either latitudinal or longitudinal!");const g=3,_=this._lodMeshes[o];_.material=h;const v=h.uniforms,S=this._sizeLods[r]-1,E=isFinite(c)?Math.PI/(2*S):2*Math.PI/(2*Er-1),A=c/E,y=isFinite(c)?1+Math.floor(g*A):Er;y>Er&&rt(`sigmaRadians, ${c}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Er}`);const x=[];let O=0;for(let F=0;F<Er;++F){const T=F/A,U=Math.exp(-T*T/2);x.push(U),F===0?O+=U:F<y&&(O+=2*U)}for(let F=0;F<x.length;F++)x[F]=x[F]/O;v.envMap.value=e.texture,v.samples.value=y,v.weights.value=x,v.latitudinal.value=u==="latitudinal",d&&(v.poleAxis.value=d);const{_lodMax:P}=this;v.dTheta.value=E,v.mipInt.value=P-r;const C=this._sizeLods[o],N=3*C*(o>P-qs?o-P+qs:0),L=4*(this._cubeSize-C);Ro(i,N,L,3*C,2*C),m.setRenderTarget(i),m.render(_,Bl)}}function mA(a){const e=[],i=[],r=[];let o=a;const c=a-qs+1+Bv.length;for(let u=0;u<c;u++){const d=Math.pow(2,o);e.push(d);let m=1/d;u>a-qs?m=Bv[u-a+qs-1]:u===0&&(m=0),i.push(m);const h=1/(d-2),g=-h,_=1+h,v=[g,g,_,g,_,_,g,g,_,_,g,_],S=6,E=6,A=3,y=2,x=1,O=new Float32Array(A*E*S),P=new Float32Array(y*E*S),C=new Float32Array(x*E*S);for(let L=0;L<S;L++){const F=L%3*2/3-1,T=L>2?0:-1,U=[F,T,0,F+2/3,T,0,F+2/3,T+1,0,F,T,0,F+2/3,T+1,0,F,T+1,0];O.set(U,A*E*L),P.set(v,y*E*L);const k=[L,L,L,L,L,L];C.set(k,x*E*L)}const N=new Ki;N.setAttribute("position",new Ca(O,A)),N.setAttribute("uv",new Ca(P,y)),N.setAttribute("faceIndex",new Ca(C,x)),r.push(new Ni(N,null)),o>qs&&o--}return{lodMeshes:r,sizeLods:e,sigmas:i}}function Hv(a,e,i){const r=new Ra(a,e,i);return r.texture.mapping=Qu,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Ro(a,e,i,r,o){a.viewport.set(e,i,r,o),a.scissor.set(e,i,r,o)}function gA(a,e,i){return new Qi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:hA,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:$u(),fragmentShader:`

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
		`,blending:ts,depthTest:!1,depthWrite:!1})}function _A(a,e,i){const r=new Float32Array(Er),o=new ie(0,1,0);return new Qi({name:"SphericalGaussianBlur",defines:{n:Er,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:$u(),fragmentShader:`

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
		`,blending:ts,depthTest:!1,depthWrite:!1})}function Gv(){return new Qi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:$u(),fragmentShader:`

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
		`,blending:ts,depthTest:!1,depthWrite:!1})}function Vv(){return new Qi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:$u(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ts,depthTest:!1,depthWrite:!1})}function $u(){return`

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
	`}class dS extends Ra{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new sS(o),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new tc(5,5,5),c=new Qi({name:"CubemapFromEquirect",uniforms:Fo(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:vi,blending:ts});c.uniforms.tEquirect.value=i;const u=new Ni(o,c),d=i.minFilter;return i.minFilter===Ws&&(i.minFilter=_n),new Eb(1,10,this).update(e,u),i.minFilter=d,u.geometry.dispose(),u.material.dispose(),this}clear(e,i=!0,r=!0,o=!0){const c=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(i,r,o);e.setRenderTarget(c)}}function vA(a){let e=new WeakMap,i=new WeakMap,r=null;function o(v,S=!1){return v==null?null:S?u(v):c(v)}function c(v){if(v&&v.isTexture){const S=v.mapping;if(S===dh||S===hh)if(e.has(v)){const E=e.get(v).texture;return d(E,v.mapping)}else{const E=v.image;if(E&&E.height>0){const A=new dS(E.height);return A.fromEquirectangularTexture(a,v),e.set(v,A),v.addEventListener("dispose",h),d(A.texture,v.mapping)}else return null}}return v}function u(v){if(v&&v.isTexture){const S=v.mapping,E=S===dh||S===hh,A=S===Tr||S===Io;if(E||A){let y=i.get(v);const x=y!==void 0?y.texture.pmremVersion:0;if(v.isRenderTargetTexture&&v.pmremVersion!==x)return r===null&&(r=new zv(a)),y=E?r.fromEquirectangular(v,y):r.fromCubemap(v,y),y.texture.pmremVersion=v.pmremVersion,i.set(v,y),y.texture;if(y!==void 0)return y.texture;{const O=v.image;return E&&O&&O.height>0||A&&O&&m(O)?(r===null&&(r=new zv(a)),y=E?r.fromEquirectangular(v):r.fromCubemap(v),y.texture.pmremVersion=v.pmremVersion,i.set(v,y),v.addEventListener("dispose",g),y.texture):null}}}return v}function d(v,S){return S===dh?v.mapping=Tr:S===hh&&(v.mapping=Io),v}function m(v){let S=0;const E=6;for(let A=0;A<E;A++)v[A]!==void 0&&S++;return S===E}function h(v){const S=v.target;S.removeEventListener("dispose",h);const E=e.get(S);E!==void 0&&(e.delete(S),E.dispose())}function g(v){const S=v.target;S.removeEventListener("dispose",g);const E=i.get(S);E!==void 0&&(i.delete(S),E.dispose())}function _(){e=new WeakMap,i=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:o,dispose:_}}function xA(a){const e={};function i(r){if(e[r]!==void 0)return e[r];const o=a.getExtension(r);return e[r]=o,o}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const o=i(r);return o===null&&Lo("WebGLRenderer: "+r+" extension not supported."),o}}}function SA(a,e,i,r){const o={},c=new WeakMap;function u(_){const v=_.target;v.index!==null&&e.remove(v.index);for(const E in v.attributes)e.remove(v.attributes[E]);v.removeEventListener("dispose",u),delete o[v.id];const S=c.get(v);S&&(e.remove(S),c.delete(v)),r.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,i.memory.geometries--}function d(_,v){return o[v.id]===!0||(v.addEventListener("dispose",u),o[v.id]=!0,i.memory.geometries++),v}function m(_){const v=_.attributes;for(const S in v)e.update(v[S],a.ARRAY_BUFFER)}function h(_){const v=[],S=_.index,E=_.attributes.position;let A=0;if(E===void 0)return;if(S!==null){const O=S.array;A=S.version;for(let P=0,C=O.length;P<C;P+=3){const N=O[P+0],L=O[P+1],F=O[P+2];v.push(N,L,L,F,F,N)}}else{const O=E.array;A=E.version;for(let P=0,C=O.length/3-1;P<C;P+=3){const N=P+0,L=P+1,F=P+2;v.push(N,L,L,F,F,N)}}const y=new(E.count>=65535?iS:nS)(v,1);y.version=A;const x=c.get(_);x&&e.remove(x),c.set(_,y)}function g(_){const v=c.get(_);if(v){const S=_.index;S!==null&&v.version<S.version&&h(_)}else h(_);return c.get(_)}return{get:d,update:m,getWireframeAttribute:g}}function MA(a,e,i){let r;function o(_){r=_}let c,u;function d(_){c=_.type,u=_.bytesPerElement}function m(_,v){a.drawElements(r,v,c,_*u),i.update(v,r,1)}function h(_,v,S){S!==0&&(a.drawElementsInstanced(r,v,c,_*u,S),i.update(v,r,S))}function g(_,v,S){if(S===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,v,0,c,_,0,S);let A=0;for(let y=0;y<S;y++)A+=v[y];i.update(A,r,1)}this.setMode=o,this.setIndex=d,this.render=m,this.renderInstances=h,this.renderMultiDraw=g}function yA(a){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,u,d){switch(i.calls++,u){case a.TRIANGLES:i.triangles+=d*(c/3);break;case a.LINES:i.lines+=d*(c/2);break;case a.LINE_STRIP:i.lines+=d*(c-1);break;case a.LINE_LOOP:i.lines+=d*c;break;case a.POINTS:i.points+=d*c;break;default:It("WebGLInfo: Unknown draw mode:",u);break}}function o(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:o,update:r}}function EA(a,e,i){const r=new WeakMap,o=new gn;function c(u,d,m){const h=u.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,_=g!==void 0?g.length:0;let v=r.get(d);if(v===void 0||v.count!==_){let k=function(){T.dispose(),r.delete(d),d.removeEventListener("dispose",k)};var S=k;v!==void 0&&v.texture.dispose();const E=d.morphAttributes.position!==void 0,A=d.morphAttributes.normal!==void 0,y=d.morphAttributes.color!==void 0,x=d.morphAttributes.position||[],O=d.morphAttributes.normal||[],P=d.morphAttributes.color||[];let C=0;E===!0&&(C=1),A===!0&&(C=2),y===!0&&(C=3);let N=d.attributes.position.count*C,L=1;N>e.maxTextureSize&&(L=Math.ceil(N/e.maxTextureSize),N=e.maxTextureSize);const F=new Float32Array(N*L*4*_),T=new $x(F,N,L,_);T.type=ba,T.needsUpdate=!0;const U=C*4;for(let G=0;G<_;G++){const Q=x[G],de=O[G],ue=P[G],Y=N*L*4*G;for(let z=0;z<Q.count;z++){const H=z*U;E===!0&&(o.fromBufferAttribute(Q,z),F[Y+H+0]=o.x,F[Y+H+1]=o.y,F[Y+H+2]=o.z,F[Y+H+3]=0),A===!0&&(o.fromBufferAttribute(de,z),F[Y+H+4]=o.x,F[Y+H+5]=o.y,F[Y+H+6]=o.z,F[Y+H+7]=0),y===!0&&(o.fromBufferAttribute(ue,z),F[Y+H+8]=o.x,F[Y+H+9]=o.y,F[Y+H+10]=o.z,F[Y+H+11]=ue.itemSize===4?o.w:1)}}v={count:_,texture:T,size:new zt(N,L)},r.set(d,v),d.addEventListener("dispose",k)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)m.getUniforms().setValue(a,"morphTexture",u.morphTexture,i);else{let E=0;for(let y=0;y<h.length;y++)E+=h[y];const A=d.morphTargetsRelative?1:1-E;m.getUniforms().setValue(a,"morphTargetBaseInfluence",A),m.getUniforms().setValue(a,"morphTargetInfluences",h)}m.getUniforms().setValue(a,"morphTargetsTexture",v.texture,i),m.getUniforms().setValue(a,"morphTargetsTextureSize",v.size)}return{update:c}}function bA(a,e,i,r,o){let c=new WeakMap;function u(h){const g=o.render.frame,_=h.geometry,v=e.get(h,_);if(c.get(v)!==g&&(e.update(v),c.set(v,g)),h.isInstancedMesh&&(h.hasEventListener("dispose",m)===!1&&h.addEventListener("dispose",m),c.get(h)!==g&&(i.update(h.instanceMatrix,a.ARRAY_BUFFER),h.instanceColor!==null&&i.update(h.instanceColor,a.ARRAY_BUFFER),c.set(h,g))),h.isSkinnedMesh){const S=h.skeleton;c.get(S)!==g&&(S.update(),c.set(S,g))}return v}function d(){c=new WeakMap}function m(h){const g=h.target;g.removeEventListener("dispose",m),r.releaseStatesOfObject(g),i.remove(g.instanceMatrix),g.instanceColor!==null&&i.remove(g.instanceColor)}return{update:u,dispose:d}}const TA={[Bx]:"LINEAR_TONE_MAPPING",[Fx]:"REINHARD_TONE_MAPPING",[zx]:"CINEON_TONE_MAPPING",[Hx]:"ACES_FILMIC_TONE_MAPPING",[Vx]:"AGX_TONE_MAPPING",[kx]:"NEUTRAL_TONE_MAPPING",[Gx]:"CUSTOM_TONE_MAPPING"};function AA(a,e,i,r,o,c){const u=new Ra(e,i,{type:a,depthBuffer:o,stencilBuffer:c,samples:r?4:0,depthTexture:o?new Bo(e,i):void 0}),d=new Ra(e,i,{type:as,depthBuffer:!1,stencilBuffer:!1}),m=new Ki;m.setAttribute("position",new Zi([-1,3,0,-1,-1,0,3,-1,0],3)),m.setAttribute("uv",new Zi([0,2,0,0,2,0],2));const h=new Sb({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),g=new Ni(m,h),_=new cS(-1,1,1,-1,0,1);let v=null,S=null,E=!1,A,y=null,x=[],O=!1;this.setSize=function(P,C){u.setSize(P,C),d.setSize(P,C);for(let N=0;N<x.length;N++){const L=x[N];L.setSize&&L.setSize(P,C)}},this.setEffects=function(P){x=P,O=x.length>0&&x[0].isRenderPass===!0;const C=u.width,N=u.height;for(let L=0;L<x.length;L++){const F=x[L];F.setSize&&F.setSize(C,N)}},this.begin=function(P,C){if(E||P.toneMapping===Aa&&x.length===0)return!1;if(y=C,C!==null){const N=C.width,L=C.height;(u.width!==N||u.height!==L)&&this.setSize(N,L)}return O===!1&&P.setRenderTarget(u),A=P.toneMapping,P.toneMapping=Aa,!0},this.hasRenderPass=function(){return O},this.end=function(P,C){P.toneMapping=A,E=!0;let N=u,L=d;for(let F=0;F<x.length;F++){const T=x[F];if(T.enabled!==!1&&(T.render(P,L,N,C),T.needsSwap!==!1)){const U=N;N=L,L=U}}if(v!==P.outputColorSpace||S!==P.toneMapping){v=P.outputColorSpace,S=P.toneMapping,h.defines={},Lt.getTransfer(v)===qt&&(h.defines.SRGB_TRANSFER="");const F=TA[S];F&&(h.defines[F]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=N.texture,P.setRenderTarget(y),P.render(g,_),y=null,E=!1},this.isCompositing=function(){return E},this.dispose=function(){u.depthTexture&&u.depthTexture.dispose(),u.dispose(),d.dispose(),m.dispose(),h.dispose()}}const hS=new ni,kp=new Bo(1,1),pS=new $x,mS=new jE,gS=new sS,kv=[],Xv=[],Wv=new Float32Array(16),Yv=new Float32Array(9),qv=new Float32Array(4);function Vo(a,e,i){const r=a[0];if(r<=0||r>0)return a;const o=e*i;let c=kv[o];if(c===void 0&&(c=new Float32Array(o),kv[o]=c),e!==0){r.toArray(c,0);for(let u=1,d=0;u!==e;++u)d+=i,a[u].toArray(c,d)}return c}function On(a,e){if(a.length!==e.length)return!1;for(let i=0,r=a.length;i<r;i++)if(a[i]!==e[i])return!1;return!0}function Pn(a,e){for(let i=0,r=e.length;i<r;i++)a[i]=e[i]}function ef(a,e){let i=Xv[e];i===void 0&&(i=new Int32Array(e),Xv[e]=i);for(let r=0;r!==e;++r)i[r]=a.allocateTextureUnit();return i}function RA(a,e){const i=this.cache;i[0]!==e&&(a.uniform1f(this.addr,e),i[0]=e)}function CA(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(On(i,e))return;a.uniform2fv(this.addr,e),Pn(i,e)}}function wA(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(On(i,e))return;a.uniform3fv(this.addr,e),Pn(i,e)}}function DA(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(On(i,e))return;a.uniform4fv(this.addr,e),Pn(i,e)}}function LA(a,e){const i=this.cache,r=e.elements;if(r===void 0){if(On(i,e))return;a.uniformMatrix2fv(this.addr,!1,e),Pn(i,e)}else{if(On(i,r))return;qv.set(r),a.uniformMatrix2fv(this.addr,!1,qv),Pn(i,r)}}function NA(a,e){const i=this.cache,r=e.elements;if(r===void 0){if(On(i,e))return;a.uniformMatrix3fv(this.addr,!1,e),Pn(i,e)}else{if(On(i,r))return;Yv.set(r),a.uniformMatrix3fv(this.addr,!1,Yv),Pn(i,r)}}function UA(a,e){const i=this.cache,r=e.elements;if(r===void 0){if(On(i,e))return;a.uniformMatrix4fv(this.addr,!1,e),Pn(i,e)}else{if(On(i,r))return;Wv.set(r),a.uniformMatrix4fv(this.addr,!1,Wv),Pn(i,r)}}function OA(a,e){const i=this.cache;i[0]!==e&&(a.uniform1i(this.addr,e),i[0]=e)}function PA(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(a.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(On(i,e))return;a.uniform2iv(this.addr,e),Pn(i,e)}}function IA(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(a.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(On(i,e))return;a.uniform3iv(this.addr,e),Pn(i,e)}}function BA(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(On(i,e))return;a.uniform4iv(this.addr,e),Pn(i,e)}}function FA(a,e){const i=this.cache;i[0]!==e&&(a.uniform1ui(this.addr,e),i[0]=e)}function zA(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(a.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(On(i,e))return;a.uniform2uiv(this.addr,e),Pn(i,e)}}function HA(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(a.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(On(i,e))return;a.uniform3uiv(this.addr,e),Pn(i,e)}}function GA(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(On(i,e))return;a.uniform4uiv(this.addr,e),Pn(i,e)}}function VA(a,e,i){const r=this.cache,o=i.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o);let c;this.type===a.SAMPLER_2D_SHADOW?(kp.compareFunction=i.isReversedDepthBuffer()?nm:tm,c=kp):c=hS,i.setTexture2D(e||c,o)}function kA(a,e,i){const r=this.cache,o=i.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o),i.setTexture3D(e||mS,o)}function XA(a,e,i){const r=this.cache,o=i.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o),i.setTextureCube(e||gS,o)}function WA(a,e,i){const r=this.cache,o=i.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o),i.setTexture2DArray(e||pS,o)}function YA(a){switch(a){case 5126:return RA;case 35664:return CA;case 35665:return wA;case 35666:return DA;case 35674:return LA;case 35675:return NA;case 35676:return UA;case 5124:case 35670:return OA;case 35667:case 35671:return PA;case 35668:case 35672:return IA;case 35669:case 35673:return BA;case 5125:return FA;case 36294:return zA;case 36295:return HA;case 36296:return GA;case 35678:case 36198:case 36298:case 36306:case 35682:return VA;case 35679:case 36299:case 36307:return kA;case 35680:case 36300:case 36308:case 36293:return XA;case 36289:case 36303:case 36311:case 36292:return WA}}function qA(a,e){a.uniform1fv(this.addr,e)}function jA(a,e){const i=Vo(e,this.size,2);a.uniform2fv(this.addr,i)}function ZA(a,e){const i=Vo(e,this.size,3);a.uniform3fv(this.addr,i)}function KA(a,e){const i=Vo(e,this.size,4);a.uniform4fv(this.addr,i)}function QA(a,e){const i=Vo(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,i)}function JA(a,e){const i=Vo(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,i)}function $A(a,e){const i=Vo(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,i)}function e2(a,e){a.uniform1iv(this.addr,e)}function t2(a,e){a.uniform2iv(this.addr,e)}function n2(a,e){a.uniform3iv(this.addr,e)}function i2(a,e){a.uniform4iv(this.addr,e)}function a2(a,e){a.uniform1uiv(this.addr,e)}function s2(a,e){a.uniform2uiv(this.addr,e)}function r2(a,e){a.uniform3uiv(this.addr,e)}function o2(a,e){a.uniform4uiv(this.addr,e)}function l2(a,e,i){const r=this.cache,o=e.length,c=ef(i,o);On(r,c)||(a.uniform1iv(this.addr,c),Pn(r,c));let u;this.type===a.SAMPLER_2D_SHADOW?u=kp:u=hS;for(let d=0;d!==o;++d)i.setTexture2D(e[d]||u,c[d])}function c2(a,e,i){const r=this.cache,o=e.length,c=ef(i,o);On(r,c)||(a.uniform1iv(this.addr,c),Pn(r,c));for(let u=0;u!==o;++u)i.setTexture3D(e[u]||mS,c[u])}function u2(a,e,i){const r=this.cache,o=e.length,c=ef(i,o);On(r,c)||(a.uniform1iv(this.addr,c),Pn(r,c));for(let u=0;u!==o;++u)i.setTextureCube(e[u]||gS,c[u])}function f2(a,e,i){const r=this.cache,o=e.length,c=ef(i,o);On(r,c)||(a.uniform1iv(this.addr,c),Pn(r,c));for(let u=0;u!==o;++u)i.setTexture2DArray(e[u]||pS,c[u])}function d2(a){switch(a){case 5126:return qA;case 35664:return jA;case 35665:return ZA;case 35666:return KA;case 35674:return QA;case 35675:return JA;case 35676:return $A;case 5124:case 35670:return e2;case 35667:case 35671:return t2;case 35668:case 35672:return n2;case 35669:case 35673:return i2;case 5125:return a2;case 36294:return s2;case 36295:return r2;case 36296:return o2;case 35678:case 36198:case 36298:case 36306:case 35682:return l2;case 35679:case 36299:case 36307:return c2;case 35680:case 36300:case 36308:case 36293:return u2;case 36289:case 36303:case 36311:case 36292:return f2}}class h2{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=YA(i.type)}}class p2{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=d2(i.type)}}class m2{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const o=this.seq;for(let c=0,u=o.length;c!==u;++c){const d=o[c];d.setValue(e,i[d.id],r)}}}const Xh=/(\w+)(\])?(\[|\.)?/g;function jv(a,e){a.seq.push(e),a.map[e.id]=e}function g2(a,e,i){const r=a.name,o=r.length;for(Xh.lastIndex=0;;){const c=Xh.exec(r),u=Xh.lastIndex;let d=c[1];const m=c[2]==="]",h=c[3];if(m&&(d=d|0),h===void 0||h==="["&&u+2===o){jv(i,h===void 0?new h2(d,a,e):new p2(d,a,e));break}else{let _=i.map[d];_===void 0&&(_=new m2(d),jv(i,_)),i=_}}}class Fu{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let u=0;u<r;++u){const d=e.getActiveUniform(i,u),m=e.getUniformLocation(i,d.name);g2(d,m,this)}const o=[],c=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(u):c.push(u);o.length>0&&(this.seq=o.concat(c))}setValue(e,i,r,o){const c=this.map[i];c!==void 0&&c.setValue(e,r,o)}setOptional(e,i,r){const o=i[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,i,r,o){for(let c=0,u=i.length;c!==u;++c){const d=i[c],m=r[d.id];m.needsUpdate!==!1&&d.setValue(e,m.value,o)}}static seqWithValue(e,i){const r=[];for(let o=0,c=e.length;o!==c;++o){const u=e[o];u.id in i&&r.push(u)}return r}}function Zv(a,e,i){const r=a.createShader(e);return a.shaderSource(r,i),a.compileShader(r),r}const _2=37297;let v2=0;function x2(a,e){const i=a.split(`
`),r=[],o=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let u=o;u<c;u++){const d=u+1;r.push(`${d===e?">":" "} ${d}: ${i[u]}`)}return r.join(`
`)}const Kv=new dt;function S2(a){Lt._getMatrix(Kv,Lt.workingColorSpace,a);const e=`mat3( ${Kv.elements.map(i=>i.toFixed(4))} )`;switch(Lt.getTransfer(a)){case ku:return[e,"LinearTransferOETF"];case qt:return[e,"sRGBTransferOETF"];default:return rt("WebGLProgram: Unsupported color space: ",a),[e,"LinearTransferOETF"]}}function Qv(a,e,i){const r=a.getShaderParameter(e,a.COMPILE_STATUS),c=(a.getShaderInfoLog(e)||"").trim();if(r&&c==="")return"";const u=/ERROR: 0:(\d+)/.exec(c);if(u){const d=parseInt(u[1]);return i.toUpperCase()+`

`+c+`

`+x2(a.getShaderSource(e),d)}else return c}function M2(a,e){const i=S2(e);return[`vec4 ${a}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const y2={[Bx]:"Linear",[Fx]:"Reinhard",[zx]:"Cineon",[Hx]:"ACESFilmic",[Vx]:"AgX",[kx]:"Neutral",[Gx]:"Custom"};function E2(a,e){const i=y2[e];return i===void 0?(rt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+a+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+a+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const wu=new ie;function b2(){Lt.getLuminanceCoefficients(wu);const a=wu.x.toFixed(4),e=wu.y.toFixed(4),i=wu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${a}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function T2(a){return[a.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",a.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(kl).join(`
`)}function A2(a){const e=[];for(const i in a){const r=a[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function R2(a,e){const i={},r=a.getProgramParameter(e,a.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const c=a.getActiveAttrib(e,o),u=c.name;let d=1;c.type===a.FLOAT_MAT2&&(d=2),c.type===a.FLOAT_MAT3&&(d=3),c.type===a.FLOAT_MAT4&&(d=4),i[u]={type:c.type,location:a.getAttribLocation(e,u),locationSize:d}}return i}function kl(a){return a!==""}function Jv(a,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function $v(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const C2=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xp(a){return a.replace(C2,D2)}const w2=new Map;function D2(a,e){let i=vt[e];if(i===void 0){const r=w2.get(e);if(r!==void 0)i=vt[r],rt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Xp(i)}const L2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ex(a){return a.replace(L2,N2)}function N2(a,e,i,r){let o="";for(let c=parseInt(e);c<parseInt(i);c++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return o}function tx(a){let e=`precision ${a.precision} float;
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
#define LOW_PRECISION`),e}const U2={[Uu]:"SHADOWMAP_TYPE_PCF",[Gl]:"SHADOWMAP_TYPE_VSM"};function O2(a){return U2[a.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const P2={[Tr]:"ENVMAP_TYPE_CUBE",[Io]:"ENVMAP_TYPE_CUBE",[Qu]:"ENVMAP_TYPE_CUBE_UV"};function I2(a){return a.envMap===!1?"ENVMAP_TYPE_CUBE":P2[a.envMapMode]||"ENVMAP_TYPE_CUBE"}const B2={[Io]:"ENVMAP_MODE_REFRACTION"};function F2(a){return a.envMap===!1?"ENVMAP_MODE_REFLECTION":B2[a.envMapMode]||"ENVMAP_MODE_REFLECTION"}const z2={[Ix]:"ENVMAP_BLENDING_MULTIPLY",[dE]:"ENVMAP_BLENDING_MIX",[hE]:"ENVMAP_BLENDING_ADD"};function H2(a){return a.envMap===!1?"ENVMAP_BLENDING_NONE":z2[a.combine]||"ENVMAP_BLENDING_NONE"}function G2(a){const e=a.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function V2(a,e,i,r){const o=a.getContext(),c=i.defines;let u=i.vertexShader,d=i.fragmentShader;const m=O2(i),h=I2(i),g=F2(i),_=H2(i),v=G2(i),S=T2(i),E=A2(c),A=o.createProgram();let y,x,O=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(kl).join(`
`),y.length>0&&(y+=`
`),x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(kl).join(`
`),x.length>0&&(x+=`
`)):(y=[tx(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(kl).join(`
`),x=[tx(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+h:"",i.envMap?"#define "+g:"",i.envMap?"#define "+_:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Aa?"#define TONE_MAPPING":"",i.toneMapping!==Aa?vt.tonemapping_pars_fragment:"",i.toneMapping!==Aa?E2("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",vt.colorspace_pars_fragment,M2("linearToOutputTexel",i.outputColorSpace),b2(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(kl).join(`
`)),u=Xp(u),u=Jv(u,i),u=$v(u,i),d=Xp(d),d=Jv(d,i),d=$v(d,i),u=ex(u),d=ex(d),i.isRawShaderMaterial!==!0&&(O=`#version 300 es
`,y=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,x=["#define varying in",i.glslVersion===dv?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===dv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const P=O+y+u,C=O+x+d,N=Zv(o,o.VERTEX_SHADER,P),L=Zv(o,o.FRAGMENT_SHADER,C);o.attachShader(A,N),o.attachShader(A,L),i.index0AttributeName!==void 0?o.bindAttribLocation(A,0,i.index0AttributeName):i.hasPositionAttribute===!0&&o.bindAttribLocation(A,0,"position"),o.linkProgram(A);function F(G){if(a.debug.checkShaderErrors){const Q=o.getProgramInfoLog(A)||"",de=o.getShaderInfoLog(N)||"",ue=o.getShaderInfoLog(L)||"",Y=Q.trim(),z=de.trim(),H=ue.trim();let J=!0,he=!0;if(o.getProgramParameter(A,o.LINK_STATUS)===!1)if(J=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(o,A,N,L);else{const Se=Qv(o,N,"vertex"),B=Qv(o,L,"fragment");It("WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(A,o.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+Y+`
`+Se+`
`+B)}else Y!==""?rt("WebGLProgram: Program Info Log:",Y):(z===""||H==="")&&(he=!1);he&&(G.diagnostics={runnable:J,programLog:Y,vertexShader:{log:z,prefix:y},fragmentShader:{log:H,prefix:x}})}o.deleteShader(N),o.deleteShader(L),T=new Fu(o,A),U=R2(o,A)}let T;this.getUniforms=function(){return T===void 0&&F(this),T};let U;this.getAttributes=function(){return U===void 0&&F(this),U};let k=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return k===!1&&(k=o.getProgramParameter(A,_2)),k},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(A),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=v2++,this.cacheKey=e,this.usedTimes=1,this.program=A,this.vertexShader=N,this.fragmentShader=L,this}let k2=0;class X2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,i,r){const o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new W2(e),i.set(e,r)),r}}class W2{constructor(e){this.id=k2++,this.code=e,this.usedTimes=0}}function Y2(a){return a===Ar||a===Hu||a===Gu}function q2(a,e,i,r,o,c){const u=new eS,d=new X2,m=new Set,h=[],g=new Map,_=r.logarithmicDepthBuffer;let v=r.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(T){return m.add(T),T===0?"uv":`uv${T}`}function A(T,U,k,G,Q,de){const ue=G.fog,Y=Q.geometry,z=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?G.environment:null,H=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,J=e.get(T.envMap||z,H),he=J&&J.mapping===Qu?J.image.height:null,Se=S[T.type];T.precision!==null&&(v=r.getMaxPrecision(T.precision),v!==T.precision&&rt("WebGLProgram.getParameters:",T.precision,"not supported, using",v,"instead."));const B=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,q=B!==void 0?B.length:0;let Ce=0;Y.morphAttributes.position!==void 0&&(Ce=1),Y.morphAttributes.normal!==void 0&&(Ce=2),Y.morphAttributes.color!==void 0&&(Ce=3);let Le,Ne,te,Te;if(Se){const je=ya[Se];Le=je.vertexShader,Ne=je.fragmentShader}else{Le=T.vertexShader,Ne=T.fragmentShader;const je=d.getVertexShaderStage(T),Xt=d.getFragmentShaderStage(T);d.update(T,je,Xt),te=je.id,Te=Xt.id}const ye=a.getRenderTarget(),ke=a.state.buffers.depth.getReversed(),tt=Q.isInstancedMesh===!0,qe=Q.isBatchedMesh===!0,xt=!!T.map,gt=!!T.matcap,St=!!J,Mt=!!T.aoMap,yt=!!T.lightMap,tn=!!T.bumpMap&&T.wireframe===!1,nn=!!T.normalMap,on=!!T.displacementMap,fn=!!T.emissiveMap,ct=!!T.metalnessMap,Vt=!!T.roughnessMap,Z=T.anisotropy>0,Ut=T.clearcoat>0,bt=T.dispersion>0,I=T.iridescence>0,b=T.sheen>0,ee=T.transmission>0,le=Z&&!!T.anisotropyMap,me=Ut&&!!T.clearcoatMap,Pe=Ut&&!!T.clearcoatNormalMap,Oe=Ut&&!!T.clearcoatRoughnessMap,ge=I&&!!T.iridescenceMap,_e=I&&!!T.iridescenceThicknessMap,Ie=b&&!!T.sheenColorMap,Ge=b&&!!T.sheenRoughnessMap,ze=!!T.specularMap,we=!!T.specularColorMap,Ke=!!T.specularIntensityMap,Qe=ee&&!!T.transmissionMap,it=ee&&!!T.thicknessMap,X=!!T.gradientMap,De=!!T.alphaMap,ve=T.alphaTest>0,Fe=!!T.alphaHash,He=!!T.extensions;let Ae=Aa;T.toneMapped&&(ye===null||ye.isXRRenderTarget===!0)&&(Ae=a.toneMapping);const Je={shaderID:Se,shaderType:T.type,shaderName:T.name,vertexShader:Le,fragmentShader:Ne,defines:T.defines,customVertexShaderID:te,customFragmentShaderID:Te,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:v,batching:qe,batchingColor:qe&&Q._colorsTexture!==null,instancing:tt,instancingColor:tt&&Q.instanceColor!==null,instancingMorph:tt&&Q.morphTexture!==null,outputColorSpace:ye===null?a.outputColorSpace:ye.isXRRenderTarget===!0?ye.texture.colorSpace:Lt.workingColorSpace,alphaToCoverage:!!T.alphaToCoverage,map:xt,matcap:gt,envMap:St,envMapMode:St&&J.mapping,envMapCubeUVHeight:he,aoMap:Mt,lightMap:yt,bumpMap:tn,normalMap:nn,displacementMap:on,emissiveMap:fn,normalMapObjectSpace:nn&&T.normalMapType===gE,normalMapTangentSpace:nn&&T.normalMapType===cv,packedNormalMap:nn&&T.normalMapType===cv&&Y2(T.normalMap.format),metalnessMap:ct,roughnessMap:Vt,anisotropy:Z,anisotropyMap:le,clearcoat:Ut,clearcoatMap:me,clearcoatNormalMap:Pe,clearcoatRoughnessMap:Oe,dispersion:bt,iridescence:I,iridescenceMap:ge,iridescenceThicknessMap:_e,sheen:b,sheenColorMap:Ie,sheenRoughnessMap:Ge,specularMap:ze,specularColorMap:we,specularIntensityMap:Ke,transmission:ee,transmissionMap:Qe,thicknessMap:it,gradientMap:X,opaque:T.transparent===!1&&T.blending===Do&&T.alphaToCoverage===!1,alphaMap:De,alphaTest:ve,alphaHash:Fe,combine:T.combine,mapUv:xt&&E(T.map.channel),aoMapUv:Mt&&E(T.aoMap.channel),lightMapUv:yt&&E(T.lightMap.channel),bumpMapUv:tn&&E(T.bumpMap.channel),normalMapUv:nn&&E(T.normalMap.channel),displacementMapUv:on&&E(T.displacementMap.channel),emissiveMapUv:fn&&E(T.emissiveMap.channel),metalnessMapUv:ct&&E(T.metalnessMap.channel),roughnessMapUv:Vt&&E(T.roughnessMap.channel),anisotropyMapUv:le&&E(T.anisotropyMap.channel),clearcoatMapUv:me&&E(T.clearcoatMap.channel),clearcoatNormalMapUv:Pe&&E(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Oe&&E(T.clearcoatRoughnessMap.channel),iridescenceMapUv:ge&&E(T.iridescenceMap.channel),iridescenceThicknessMapUv:_e&&E(T.iridescenceThicknessMap.channel),sheenColorMapUv:Ie&&E(T.sheenColorMap.channel),sheenRoughnessMapUv:Ge&&E(T.sheenRoughnessMap.channel),specularMapUv:ze&&E(T.specularMap.channel),specularColorMapUv:we&&E(T.specularColorMap.channel),specularIntensityMapUv:Ke&&E(T.specularIntensityMap.channel),transmissionMapUv:Qe&&E(T.transmissionMap.channel),thicknessMapUv:it&&E(T.thicknessMap.channel),alphaMapUv:De&&E(T.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(nn||Z),vertexNormals:!!Y.attributes.normal,vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:Q.isPoints===!0&&!!Y.attributes.uv&&(xt||De),fog:!!ue,useFog:T.fog===!0,fogExp2:!!ue&&ue.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||Y.attributes.normal===void 0&&nn===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:ke,skinning:Q.isSkinnedMesh===!0,hasPositionAttribute:Y.attributes.position!==void 0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:q,morphTextureStride:Ce,numDirLights:U.directional.length,numPointLights:U.point.length,numSpotLights:U.spot.length,numSpotLightMaps:U.spotLightMap.length,numRectAreaLights:U.rectArea.length,numHemiLights:U.hemi.length,numDirLightShadows:U.directionalShadowMap.length,numPointLightShadows:U.pointShadowMap.length,numSpotLightShadows:U.spotShadowMap.length,numSpotLightShadowsWithMaps:U.numSpotLightShadowsWithMaps,numLightProbes:U.numLightProbes,numLightProbeGrids:de.length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:T.dithering,shadowMapEnabled:a.shadowMap.enabled&&k.length>0,shadowMapType:a.shadowMap.type,toneMapping:Ae,decodeVideoTexture:xt&&T.map.isVideoTexture===!0&&Lt.getTransfer(T.map.colorSpace)===qt,decodeVideoTextureEmissive:fn&&T.emissiveMap.isVideoTexture===!0&&Lt.getTransfer(T.emissiveMap.colorSpace)===qt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Ea,flipSided:T.side===vi,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:He&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(He&&T.extensions.multiDraw===!0||qe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Je.vertexUv1s=m.has(1),Je.vertexUv2s=m.has(2),Je.vertexUv3s=m.has(3),m.clear(),Je}function y(T){const U=[];if(T.shaderID?U.push(T.shaderID):(U.push(T.customVertexShaderID),U.push(T.customFragmentShaderID)),T.defines!==void 0)for(const k in T.defines)U.push(k),U.push(T.defines[k]);return T.isRawShaderMaterial===!1&&(x(U,T),O(U,T),U.push(a.outputColorSpace)),U.push(T.customProgramCacheKey),U.join()}function x(T,U){T.push(U.precision),T.push(U.outputColorSpace),T.push(U.envMapMode),T.push(U.envMapCubeUVHeight),T.push(U.mapUv),T.push(U.alphaMapUv),T.push(U.lightMapUv),T.push(U.aoMapUv),T.push(U.bumpMapUv),T.push(U.normalMapUv),T.push(U.displacementMapUv),T.push(U.emissiveMapUv),T.push(U.metalnessMapUv),T.push(U.roughnessMapUv),T.push(U.anisotropyMapUv),T.push(U.clearcoatMapUv),T.push(U.clearcoatNormalMapUv),T.push(U.clearcoatRoughnessMapUv),T.push(U.iridescenceMapUv),T.push(U.iridescenceThicknessMapUv),T.push(U.sheenColorMapUv),T.push(U.sheenRoughnessMapUv),T.push(U.specularMapUv),T.push(U.specularColorMapUv),T.push(U.specularIntensityMapUv),T.push(U.transmissionMapUv),T.push(U.thicknessMapUv),T.push(U.combine),T.push(U.fogExp2),T.push(U.sizeAttenuation),T.push(U.morphTargetsCount),T.push(U.morphAttributeCount),T.push(U.numDirLights),T.push(U.numPointLights),T.push(U.numSpotLights),T.push(U.numSpotLightMaps),T.push(U.numHemiLights),T.push(U.numRectAreaLights),T.push(U.numDirLightShadows),T.push(U.numPointLightShadows),T.push(U.numSpotLightShadows),T.push(U.numSpotLightShadowsWithMaps),T.push(U.numLightProbes),T.push(U.shadowMapType),T.push(U.toneMapping),T.push(U.numClippingPlanes),T.push(U.numClipIntersection),T.push(U.depthPacking)}function O(T,U){u.disableAll(),U.instancing&&u.enable(0),U.instancingColor&&u.enable(1),U.instancingMorph&&u.enable(2),U.matcap&&u.enable(3),U.envMap&&u.enable(4),U.normalMapObjectSpace&&u.enable(5),U.normalMapTangentSpace&&u.enable(6),U.clearcoat&&u.enable(7),U.iridescence&&u.enable(8),U.alphaTest&&u.enable(9),U.vertexColors&&u.enable(10),U.vertexAlphas&&u.enable(11),U.vertexUv1s&&u.enable(12),U.vertexUv2s&&u.enable(13),U.vertexUv3s&&u.enable(14),U.vertexTangents&&u.enable(15),U.anisotropy&&u.enable(16),U.alphaHash&&u.enable(17),U.batching&&u.enable(18),U.dispersion&&u.enable(19),U.batchingColor&&u.enable(20),U.gradientMap&&u.enable(21),U.packedNormalMap&&u.enable(22),U.vertexNormals&&u.enable(23),T.push(u.mask),u.disableAll(),U.fog&&u.enable(0),U.useFog&&u.enable(1),U.flatShading&&u.enable(2),U.logarithmicDepthBuffer&&u.enable(3),U.reversedDepthBuffer&&u.enable(4),U.skinning&&u.enable(5),U.morphTargets&&u.enable(6),U.morphNormals&&u.enable(7),U.morphColors&&u.enable(8),U.premultipliedAlpha&&u.enable(9),U.shadowMapEnabled&&u.enable(10),U.doubleSided&&u.enable(11),U.flipSided&&u.enable(12),U.useDepthPacking&&u.enable(13),U.dithering&&u.enable(14),U.transmission&&u.enable(15),U.sheen&&u.enable(16),U.opaque&&u.enable(17),U.pointsUvs&&u.enable(18),U.decodeVideoTexture&&u.enable(19),U.decodeVideoTextureEmissive&&u.enable(20),U.alphaToCoverage&&u.enable(21),U.numLightProbeGrids>0&&u.enable(22),U.hasPositionAttribute&&u.enable(23),T.push(u.mask)}function P(T){const U=S[T.type];let k;if(U){const G=ya[U];k=_b.clone(G.uniforms)}else k=T.uniforms;return k}function C(T,U){let k=g.get(U);return k!==void 0?++k.usedTimes:(k=new V2(a,U,T,o),h.push(k),g.set(U,k)),k}function N(T){if(--T.usedTimes===0){const U=h.indexOf(T);h[U]=h[h.length-1],h.pop(),g.delete(T.cacheKey),T.destroy()}}function L(T){d.remove(T)}function F(){d.dispose()}return{getParameters:A,getProgramCacheKey:y,getUniforms:P,acquireProgram:C,releaseProgram:N,releaseShaderCache:L,programs:h,dispose:F}}function j2(){let a=new WeakMap;function e(u){return a.has(u)}function i(u){let d=a.get(u);return d===void 0&&(d={},a.set(u,d)),d}function r(u){a.delete(u)}function o(u,d,m){a.get(u)[d]=m}function c(){a=new WeakMap}return{has:e,get:i,remove:r,update:o,dispose:c}}function Z2(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.materialVariant!==e.materialVariant?a.materialVariant-e.materialVariant:a.z!==e.z?a.z-e.z:a.id-e.id}function nx(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function ix(){const a=[];let e=0;const i=[],r=[],o=[];function c(){e=0,i.length=0,r.length=0,o.length=0}function u(v){let S=0;return v.isInstancedMesh&&(S+=2),v.isSkinnedMesh&&(S+=1),S}function d(v,S,E,A,y,x){let O=a[e];return O===void 0?(O={id:v.id,object:v,geometry:S,material:E,materialVariant:u(v),groupOrder:A,renderOrder:v.renderOrder,z:y,group:x},a[e]=O):(O.id=v.id,O.object=v,O.geometry=S,O.material=E,O.materialVariant=u(v),O.groupOrder=A,O.renderOrder=v.renderOrder,O.z=y,O.group=x),e++,O}function m(v,S,E,A,y,x){const O=d(v,S,E,A,y,x);E.transmission>0?r.push(O):E.transparent===!0?o.push(O):i.push(O)}function h(v,S,E,A,y,x){const O=d(v,S,E,A,y,x);E.transmission>0?r.unshift(O):E.transparent===!0?o.unshift(O):i.unshift(O)}function g(v,S,E){i.length>1&&i.sort(v||Z2),r.length>1&&r.sort(S||nx),o.length>1&&o.sort(S||nx),E&&(i.reverse(),r.reverse(),o.reverse())}function _(){for(let v=e,S=a.length;v<S;v++){const E=a[v];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:i,transmissive:r,transparent:o,init:c,push:m,unshift:h,finish:_,sort:g}}function K2(){let a=new WeakMap;function e(r,o){const c=a.get(r);let u;return c===void 0?(u=new ix,a.set(r,[u])):o>=c.length?(u=new ix,c.push(u)):u=c[o],u}function i(){a=new WeakMap}return{get:e,dispose:i}}function Q2(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new ie,color:new kt};break;case"SpotLight":i={position:new ie,direction:new ie,color:new kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new ie,color:new kt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new ie,skyColor:new kt,groundColor:new kt};break;case"RectAreaLight":i={color:new kt,position:new ie,halfWidth:new ie,halfHeight:new ie};break}return a[e.id]=i,i}}}function J2(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=i,i}}}let $2=0;function eR(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function tR(a){const e=new Q2,i=J2(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new ie);const o=new ie,c=new yn,u=new yn;function d(h){let g=0,_=0,v=0;for(let U=0;U<9;U++)r.probe[U].set(0,0,0);let S=0,E=0,A=0,y=0,x=0,O=0,P=0,C=0,N=0,L=0,F=0;h.sort(eR);for(let U=0,k=h.length;U<k;U++){const G=h[U],Q=G.color,de=G.intensity,ue=G.distance;let Y=null;if(G.shadow&&G.shadow.map&&(G.shadow.map.texture.format===Ar?Y=G.shadow.map.texture:Y=G.shadow.map.depthTexture||G.shadow.map.texture),G.isAmbientLight)g+=Q.r*de,_+=Q.g*de,v+=Q.b*de;else if(G.isLightProbe){for(let z=0;z<9;z++)r.probe[z].addScaledVector(G.sh.coefficients[z],de);F++}else if(G.isDirectionalLight){const z=e.get(G);if(z.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const H=G.shadow,J=i.get(G);J.shadowIntensity=H.intensity,J.shadowBias=H.bias,J.shadowNormalBias=H.normalBias,J.shadowRadius=H.radius,J.shadowMapSize=H.mapSize,r.directionalShadow[S]=J,r.directionalShadowMap[S]=Y,r.directionalShadowMatrix[S]=G.shadow.matrix,O++}r.directional[S]=z,S++}else if(G.isSpotLight){const z=e.get(G);z.position.setFromMatrixPosition(G.matrixWorld),z.color.copy(Q).multiplyScalar(de),z.distance=ue,z.coneCos=Math.cos(G.angle),z.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),z.decay=G.decay,r.spot[A]=z;const H=G.shadow;if(G.map&&(r.spotLightMap[N]=G.map,N++,H.updateMatrices(G),G.castShadow&&L++),r.spotLightMatrix[A]=H.matrix,G.castShadow){const J=i.get(G);J.shadowIntensity=H.intensity,J.shadowBias=H.bias,J.shadowNormalBias=H.normalBias,J.shadowRadius=H.radius,J.shadowMapSize=H.mapSize,r.spotShadow[A]=J,r.spotShadowMap[A]=Y,C++}A++}else if(G.isRectAreaLight){const z=e.get(G);z.color.copy(Q).multiplyScalar(de),z.halfWidth.set(G.width*.5,0,0),z.halfHeight.set(0,G.height*.5,0),r.rectArea[y]=z,y++}else if(G.isPointLight){const z=e.get(G);if(z.color.copy(G.color).multiplyScalar(G.intensity),z.distance=G.distance,z.decay=G.decay,G.castShadow){const H=G.shadow,J=i.get(G);J.shadowIntensity=H.intensity,J.shadowBias=H.bias,J.shadowNormalBias=H.normalBias,J.shadowRadius=H.radius,J.shadowMapSize=H.mapSize,J.shadowCameraNear=H.camera.near,J.shadowCameraFar=H.camera.far,r.pointShadow[E]=J,r.pointShadowMap[E]=Y,r.pointShadowMatrix[E]=G.shadow.matrix,P++}r.point[E]=z,E++}else if(G.isHemisphereLight){const z=e.get(G);z.skyColor.copy(G.color).multiplyScalar(de),z.groundColor.copy(G.groundColor).multiplyScalar(de),r.hemi[x]=z,x++}}y>0&&(a.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=We.LTC_FLOAT_1,r.rectAreaLTC2=We.LTC_FLOAT_2):(r.rectAreaLTC1=We.LTC_HALF_1,r.rectAreaLTC2=We.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=_,r.ambient[2]=v;const T=r.hash;(T.directionalLength!==S||T.pointLength!==E||T.spotLength!==A||T.rectAreaLength!==y||T.hemiLength!==x||T.numDirectionalShadows!==O||T.numPointShadows!==P||T.numSpotShadows!==C||T.numSpotMaps!==N||T.numLightProbes!==F)&&(r.directional.length=S,r.spot.length=A,r.rectArea.length=y,r.point.length=E,r.hemi.length=x,r.directionalShadow.length=O,r.directionalShadowMap.length=O,r.pointShadow.length=P,r.pointShadowMap.length=P,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=O,r.pointShadowMatrix.length=P,r.spotLightMatrix.length=C+N-L,r.spotLightMap.length=N,r.numSpotLightShadowsWithMaps=L,r.numLightProbes=F,T.directionalLength=S,T.pointLength=E,T.spotLength=A,T.rectAreaLength=y,T.hemiLength=x,T.numDirectionalShadows=O,T.numPointShadows=P,T.numSpotShadows=C,T.numSpotMaps=N,T.numLightProbes=F,r.version=$2++)}function m(h,g){let _=0,v=0,S=0,E=0,A=0;const y=g.matrixWorldInverse;for(let x=0,O=h.length;x<O;x++){const P=h[x];if(P.isDirectionalLight){const C=r.directional[_];C.direction.setFromMatrixPosition(P.matrixWorld),o.setFromMatrixPosition(P.target.matrixWorld),C.direction.sub(o),C.direction.transformDirection(y),_++}else if(P.isSpotLight){const C=r.spot[S];C.position.setFromMatrixPosition(P.matrixWorld),C.position.applyMatrix4(y),C.direction.setFromMatrixPosition(P.matrixWorld),o.setFromMatrixPosition(P.target.matrixWorld),C.direction.sub(o),C.direction.transformDirection(y),S++}else if(P.isRectAreaLight){const C=r.rectArea[E];C.position.setFromMatrixPosition(P.matrixWorld),C.position.applyMatrix4(y),u.identity(),c.copy(P.matrixWorld),c.premultiply(y),u.extractRotation(c),C.halfWidth.set(P.width*.5,0,0),C.halfHeight.set(0,P.height*.5,0),C.halfWidth.applyMatrix4(u),C.halfHeight.applyMatrix4(u),E++}else if(P.isPointLight){const C=r.point[v];C.position.setFromMatrixPosition(P.matrixWorld),C.position.applyMatrix4(y),v++}else if(P.isHemisphereLight){const C=r.hemi[A];C.direction.setFromMatrixPosition(P.matrixWorld),C.direction.transformDirection(y),A++}}}return{setup:d,setupView:m,state:r}}function ax(a){const e=new tR(a),i=[],r=[],o=[];function c(v){_.camera=v,i.length=0,r.length=0,o.length=0}function u(v){i.push(v)}function d(v){r.push(v)}function m(v){o.push(v)}function h(){e.setup(i)}function g(v){e.setupView(i,v)}const _={lightsArray:i,shadowsArray:r,lightProbeGridArray:o,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:_,setupLights:h,setupLightsView:g,pushLight:u,pushShadow:d,pushLightProbeGrid:m}}function nR(a){let e=new WeakMap;function i(o,c=0){const u=e.get(o);let d;return u===void 0?(d=new ax(a),e.set(o,[d])):c>=u.length?(d=new ax(a),u.push(d)):d=u[c],d}function r(){e=new WeakMap}return{get:i,dispose:r}}const iR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,aR=`uniform sampler2D shadow_pass;
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
}`,sR=[new ie(1,0,0),new ie(-1,0,0),new ie(0,1,0),new ie(0,-1,0),new ie(0,0,1),new ie(0,0,-1)],rR=[new ie(0,-1,0),new ie(0,-1,0),new ie(0,0,1),new ie(0,0,-1),new ie(0,-1,0),new ie(0,-1,0)],sx=new yn,Fl=new ie,Wh=new ie;function oR(a,e,i){let r=new aS;const o=new zt,c=new zt,u=new gn,d=new Mb,m=new yb,h={},g=i.maxTextureSize,_={[is]:vi,[vi]:is,[Ea]:Ea},v=new Qi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new zt},radius:{value:4}},vertexShader:iR,fragmentShader:aR}),S=v.clone();S.defines.HORIZONTAL_PASS=1;const E=new Ki;E.setAttribute("position",new Ca(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new Ni(E,v),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Uu;let x=this.type;this.render=function(L,F,T){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||L.length===0)return;this.type===qy&&(rt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Uu);const U=a.getRenderTarget(),k=a.getActiveCubeFace(),G=a.getActiveMipmapLevel(),Q=a.state;Q.setBlending(ts),Q.buffers.depth.getReversed()===!0?Q.buffers.color.setClear(0,0,0,0):Q.buffers.color.setClear(1,1,1,1),Q.buffers.depth.setTest(!0),Q.setScissorTest(!1);const de=x!==this.type;de&&F.traverse(function(ue){ue.material&&(Array.isArray(ue.material)?ue.material.forEach(Y=>Y.needsUpdate=!0):ue.material.needsUpdate=!0)});for(let ue=0,Y=L.length;ue<Y;ue++){const z=L[ue],H=z.shadow;if(H===void 0){rt("WebGLShadowMap:",z,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;o.copy(H.mapSize);const J=H.getFrameExtents();o.multiply(J),c.copy(H.mapSize),(o.x>g||o.y>g)&&(o.x>g&&(c.x=Math.floor(g/J.x),o.x=c.x*J.x,H.mapSize.x=c.x),o.y>g&&(c.y=Math.floor(g/J.y),o.y=c.y*J.y,H.mapSize.y=c.y));const he=a.state.buffers.depth.getReversed();if(H.camera._reversedDepth=he,H.map===null||de===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===Gl){if(z.isPointLight){rt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new Ra(o.x,o.y,{format:Ar,type:as,minFilter:_n,magFilter:_n,generateMipmaps:!1}),H.map.texture.name=z.name+".shadowMap",H.map.depthTexture=new Bo(o.x,o.y,ba),H.map.depthTexture.name=z.name+".shadowMapDepth",H.map.depthTexture.format=ss,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=qn,H.map.depthTexture.magFilter=qn}else z.isPointLight?(H.map=new dS(o.x),H.map.depthTexture=new hb(o.x,wa)):(H.map=new Ra(o.x,o.y),H.map.depthTexture=new Bo(o.x,o.y,wa)),H.map.depthTexture.name=z.name+".shadowMap",H.map.depthTexture.format=ss,this.type===Uu?(H.map.depthTexture.compareFunction=he?nm:tm,H.map.depthTexture.minFilter=_n,H.map.depthTexture.magFilter=_n):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=qn,H.map.depthTexture.magFilter=qn);H.camera.updateProjectionMatrix()}const Se=H.map.isWebGLCubeRenderTarget?6:1;for(let B=0;B<Se;B++){if(H.map.isWebGLCubeRenderTarget)a.setRenderTarget(H.map,B),a.clear();else{B===0&&(a.setRenderTarget(H.map),a.clear());const q=H.getViewport(B);u.set(c.x*q.x,c.y*q.y,c.x*q.z,c.y*q.w),Q.viewport(u)}if(z.isPointLight){const q=H.camera,Ce=H.matrix,Le=z.distance||q.far;Le!==q.far&&(q.far=Le,q.updateProjectionMatrix()),Fl.setFromMatrixPosition(z.matrixWorld),q.position.copy(Fl),Wh.copy(q.position),Wh.add(sR[B]),q.up.copy(rR[B]),q.lookAt(Wh),q.updateMatrixWorld(),Ce.makeTranslation(-Fl.x,-Fl.y,-Fl.z),sx.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),H._frustum.setFromProjectionMatrix(sx,q.coordinateSystem,q.reversedDepth)}else H.updateMatrices(z);r=H.getFrustum(),C(F,T,H.camera,z,this.type)}H.isPointLightShadow!==!0&&this.type===Gl&&O(H,T),H.needsUpdate=!1}x=this.type,y.needsUpdate=!1,a.setRenderTarget(U,k,G)};function O(L,F){const T=e.update(A);v.defines.VSM_SAMPLES!==L.blurSamples&&(v.defines.VSM_SAMPLES=L.blurSamples,S.defines.VSM_SAMPLES=L.blurSamples,v.needsUpdate=!0,S.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new Ra(o.x,o.y,{format:Ar,type:as})),v.uniforms.shadow_pass.value=L.map.depthTexture,v.uniforms.resolution.value=L.mapSize,v.uniforms.radius.value=L.radius,a.setRenderTarget(L.mapPass),a.clear(),a.renderBufferDirect(F,null,T,v,A,null),S.uniforms.shadow_pass.value=L.mapPass.texture,S.uniforms.resolution.value=L.mapSize,S.uniforms.radius.value=L.radius,a.setRenderTarget(L.map),a.clear(),a.renderBufferDirect(F,null,T,S,A,null)}function P(L,F,T,U){let k=null;const G=T.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(G!==void 0)k=G;else if(k=T.isPointLight===!0?m:d,a.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const Q=k.uuid,de=F.uuid;let ue=h[Q];ue===void 0&&(ue={},h[Q]=ue);let Y=ue[de];Y===void 0&&(Y=k.clone(),ue[de]=Y,F.addEventListener("dispose",N)),k=Y}if(k.visible=F.visible,k.wireframe=F.wireframe,U===Gl?k.side=F.shadowSide!==null?F.shadowSide:F.side:k.side=F.shadowSide!==null?F.shadowSide:_[F.side],k.alphaMap=F.alphaMap,k.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,k.map=F.map,k.clipShadows=F.clipShadows,k.clippingPlanes=F.clippingPlanes,k.clipIntersection=F.clipIntersection,k.displacementMap=F.displacementMap,k.displacementScale=F.displacementScale,k.displacementBias=F.displacementBias,k.wireframeLinewidth=F.wireframeLinewidth,k.linewidth=F.linewidth,T.isPointLight===!0&&k.isMeshDistanceMaterial===!0){const Q=a.properties.get(k);Q.light=T}return k}function C(L,F,T,U,k){if(L.visible===!1)return;if(L.layers.test(F.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&k===Gl)&&(!L.frustumCulled||r.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,L.matrixWorld);const de=e.update(L),ue=L.material;if(Array.isArray(ue)){const Y=de.groups;for(let z=0,H=Y.length;z<H;z++){const J=Y[z],he=ue[J.materialIndex];if(he&&he.visible){const Se=P(L,he,U,k);L.onBeforeShadow(a,L,F,T,de,Se,J),a.renderBufferDirect(T,null,de,Se,L,J),L.onAfterShadow(a,L,F,T,de,Se,J)}}}else if(ue.visible){const Y=P(L,ue,U,k);L.onBeforeShadow(a,L,F,T,de,Y,null),a.renderBufferDirect(T,null,de,Y,L,null),L.onAfterShadow(a,L,F,T,de,Y,null)}}const Q=L.children;for(let de=0,ue=Q.length;de<ue;de++)C(Q[de],F,T,U,k)}function N(L){L.target.removeEventListener("dispose",N);for(const T in h){const U=h[T],k=L.target.uuid;k in U&&(U[k].dispose(),delete U[k])}}}function lR(a,e){function i(){let X=!1;const De=new gn;let ve=null;const Fe=new gn(0,0,0,0);return{setMask:function(He){ve!==He&&!X&&(a.colorMask(He,He,He,He),ve=He)},setLocked:function(He){X=He},setClear:function(He,Ae,Je,je,Xt){Xt===!0&&(He*=je,Ae*=je,Je*=je),De.set(He,Ae,Je,je),Fe.equals(De)===!1&&(a.clearColor(He,Ae,Je,je),Fe.copy(De))},reset:function(){X=!1,ve=null,Fe.set(-1,0,0,0)}}}function r(){let X=!1,De=!1,ve=null,Fe=null,He=null;return{setReversed:function(Ae){if(De!==Ae){const Je=e.get("EXT_clip_control");Ae?Je.clipControlEXT(Je.LOWER_LEFT_EXT,Je.ZERO_TO_ONE_EXT):Je.clipControlEXT(Je.LOWER_LEFT_EXT,Je.NEGATIVE_ONE_TO_ONE_EXT),De=Ae;const je=He;He=null,this.setClear(je)}},getReversed:function(){return De},setTest:function(Ae){Ae?ye(a.DEPTH_TEST):ke(a.DEPTH_TEST)},setMask:function(Ae){ve!==Ae&&!X&&(a.depthMask(Ae),ve=Ae)},setFunc:function(Ae){if(De&&(Ae=AE[Ae]),Fe!==Ae){switch(Ae){case ap:a.depthFunc(a.NEVER);break;case sp:a.depthFunc(a.ALWAYS);break;case rp:a.depthFunc(a.LESS);break;case Po:a.depthFunc(a.LEQUAL);break;case op:a.depthFunc(a.EQUAL);break;case lp:a.depthFunc(a.GEQUAL);break;case cp:a.depthFunc(a.GREATER);break;case up:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}Fe=Ae}},setLocked:function(Ae){X=Ae},setClear:function(Ae){He!==Ae&&(He=Ae,De&&(Ae=1-Ae),a.clearDepth(Ae))},reset:function(){X=!1,ve=null,Fe=null,He=null,De=!1}}}function o(){let X=!1,De=null,ve=null,Fe=null,He=null,Ae=null,Je=null,je=null,Xt=null;return{setTest:function(Ht){X||(Ht?ye(a.STENCIL_TEST):ke(a.STENCIL_TEST))},setMask:function(Ht){De!==Ht&&!X&&(a.stencilMask(Ht),De=Ht)},setFunc:function(Ht,jn,Hn){(ve!==Ht||Fe!==jn||He!==Hn)&&(a.stencilFunc(Ht,jn,Hn),ve=Ht,Fe=jn,He=Hn)},setOp:function(Ht,jn,Hn){(Ae!==Ht||Je!==jn||je!==Hn)&&(a.stencilOp(Ht,jn,Hn),Ae=Ht,Je=jn,je=Hn)},setLocked:function(Ht){X=Ht},setClear:function(Ht){Xt!==Ht&&(a.clearStencil(Ht),Xt=Ht)},reset:function(){X=!1,De=null,ve=null,Fe=null,He=null,Ae=null,Je=null,je=null,Xt=null}}}const c=new i,u=new r,d=new o,m=new WeakMap,h=new WeakMap;let g={},_={},v={},S=new WeakMap,E=[],A=null,y=!1,x=null,O=null,P=null,C=null,N=null,L=null,F=null,T=new kt(0,0,0),U=0,k=!1,G=null,Q=null,de=null,ue=null,Y=null;const z=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,J=0;const he=a.getParameter(a.VERSION);he.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(he)[1]),H=J>=1):he.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(he)[1]),H=J>=2);let Se=null,B={};const q=a.getParameter(a.SCISSOR_BOX),Ce=a.getParameter(a.VIEWPORT),Le=new gn().fromArray(q),Ne=new gn().fromArray(Ce);function te(X,De,ve,Fe){const He=new Uint8Array(4),Ae=a.createTexture();a.bindTexture(X,Ae),a.texParameteri(X,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(X,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let Je=0;Je<ve;Je++)X===a.TEXTURE_3D||X===a.TEXTURE_2D_ARRAY?a.texImage3D(De,0,a.RGBA,1,1,Fe,0,a.RGBA,a.UNSIGNED_BYTE,He):a.texImage2D(De+Je,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,He);return Ae}const Te={};Te[a.TEXTURE_2D]=te(a.TEXTURE_2D,a.TEXTURE_2D,1),Te[a.TEXTURE_CUBE_MAP]=te(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),Te[a.TEXTURE_2D_ARRAY]=te(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1),Te[a.TEXTURE_3D]=te(a.TEXTURE_3D,a.TEXTURE_3D,1,1),c.setClear(0,0,0,1),u.setClear(1),d.setClear(0),ye(a.DEPTH_TEST),u.setFunc(Po),tn(!1),nn(rv),ye(a.CULL_FACE),Mt(ts);function ye(X){g[X]!==!0&&(a.enable(X),g[X]=!0)}function ke(X){g[X]!==!1&&(a.disable(X),g[X]=!1)}function tt(X,De){return v[X]!==De?(a.bindFramebuffer(X,De),v[X]=De,X===a.DRAW_FRAMEBUFFER&&(v[a.FRAMEBUFFER]=De),X===a.FRAMEBUFFER&&(v[a.DRAW_FRAMEBUFFER]=De),!0):!1}function qe(X,De){let ve=E,Fe=!1;if(X){ve=S.get(De),ve===void 0&&(ve=[],S.set(De,ve));const He=X.textures;if(ve.length!==He.length||ve[0]!==a.COLOR_ATTACHMENT0){for(let Ae=0,Je=He.length;Ae<Je;Ae++)ve[Ae]=a.COLOR_ATTACHMENT0+Ae;ve.length=He.length,Fe=!0}}else ve[0]!==a.BACK&&(ve[0]=a.BACK,Fe=!0);Fe&&a.drawBuffers(ve)}function xt(X){return A!==X?(a.useProgram(X),A=X,!0):!1}const gt={[yr]:a.FUNC_ADD,[Zy]:a.FUNC_SUBTRACT,[Ky]:a.FUNC_REVERSE_SUBTRACT};gt[Qy]=a.MIN,gt[Jy]=a.MAX;const St={[$y]:a.ZERO,[eE]:a.ONE,[tE]:a.SRC_COLOR,[np]:a.SRC_ALPHA,[oE]:a.SRC_ALPHA_SATURATE,[sE]:a.DST_COLOR,[iE]:a.DST_ALPHA,[nE]:a.ONE_MINUS_SRC_COLOR,[ip]:a.ONE_MINUS_SRC_ALPHA,[rE]:a.ONE_MINUS_DST_COLOR,[aE]:a.ONE_MINUS_DST_ALPHA,[lE]:a.CONSTANT_COLOR,[cE]:a.ONE_MINUS_CONSTANT_COLOR,[uE]:a.CONSTANT_ALPHA,[fE]:a.ONE_MINUS_CONSTANT_ALPHA};function Mt(X,De,ve,Fe,He,Ae,Je,je,Xt,Ht){if(X===ts){y===!0&&(ke(a.BLEND),y=!1);return}if(y===!1&&(ye(a.BLEND),y=!0),X!==jy){if(X!==x||Ht!==k){if((O!==yr||N!==yr)&&(a.blendEquation(a.FUNC_ADD),O=yr,N=yr),Ht)switch(X){case Do:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case tp:a.blendFunc(a.ONE,a.ONE);break;case ov:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case lv:a.blendFuncSeparate(a.DST_COLOR,a.ONE_MINUS_SRC_ALPHA,a.ZERO,a.ONE);break;default:It("WebGLState: Invalid blending: ",X);break}else switch(X){case Do:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case tp:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE,a.ONE,a.ONE);break;case ov:It("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case lv:It("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:It("WebGLState: Invalid blending: ",X);break}P=null,C=null,L=null,F=null,T.set(0,0,0),U=0,x=X,k=Ht}return}He=He||De,Ae=Ae||ve,Je=Je||Fe,(De!==O||He!==N)&&(a.blendEquationSeparate(gt[De],gt[He]),O=De,N=He),(ve!==P||Fe!==C||Ae!==L||Je!==F)&&(a.blendFuncSeparate(St[ve],St[Fe],St[Ae],St[Je]),P=ve,C=Fe,L=Ae,F=Je),(je.equals(T)===!1||Xt!==U)&&(a.blendColor(je.r,je.g,je.b,Xt),T.copy(je),U=Xt),x=X,k=!1}function yt(X,De){X.side===Ea?ke(a.CULL_FACE):ye(a.CULL_FACE);let ve=X.side===vi;De&&(ve=!ve),tn(ve),X.blending===Do&&X.transparent===!1?Mt(ts):Mt(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),u.setFunc(X.depthFunc),u.setTest(X.depthTest),u.setMask(X.depthWrite),c.setMask(X.colorWrite);const Fe=X.stencilWrite;d.setTest(Fe),Fe&&(d.setMask(X.stencilWriteMask),d.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),d.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),fn(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?ye(a.SAMPLE_ALPHA_TO_COVERAGE):ke(a.SAMPLE_ALPHA_TO_COVERAGE)}function tn(X){G!==X&&(X?a.frontFace(a.CW):a.frontFace(a.CCW),G=X)}function nn(X){X!==Wy?(ye(a.CULL_FACE),X!==Q&&(X===rv?a.cullFace(a.BACK):X===Yy?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):ke(a.CULL_FACE),Q=X}function on(X){X!==de&&(H&&a.lineWidth(X),de=X)}function fn(X,De,ve){X?(ye(a.POLYGON_OFFSET_FILL),(ue!==De||Y!==ve)&&(ue=De,Y=ve,u.getReversed()&&(De=-De),a.polygonOffset(De,ve))):ke(a.POLYGON_OFFSET_FILL)}function ct(X){X?ye(a.SCISSOR_TEST):ke(a.SCISSOR_TEST)}function Vt(X){X===void 0&&(X=a.TEXTURE0+z-1),Se!==X&&(a.activeTexture(X),Se=X)}function Z(X,De,ve){ve===void 0&&(Se===null?ve=a.TEXTURE0+z-1:ve=Se);let Fe=B[ve];Fe===void 0&&(Fe={type:void 0,texture:void 0},B[ve]=Fe),(Fe.type!==X||Fe.texture!==De)&&(Se!==ve&&(a.activeTexture(ve),Se=ve),a.bindTexture(X,De||Te[X]),Fe.type=X,Fe.texture=De)}function Ut(){const X=B[Se];X!==void 0&&X.type!==void 0&&(a.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function bt(){try{a.compressedTexImage2D(...arguments)}catch(X){It("WebGLState:",X)}}function I(){try{a.compressedTexImage3D(...arguments)}catch(X){It("WebGLState:",X)}}function b(){try{a.texSubImage2D(...arguments)}catch(X){It("WebGLState:",X)}}function ee(){try{a.texSubImage3D(...arguments)}catch(X){It("WebGLState:",X)}}function le(){try{a.compressedTexSubImage2D(...arguments)}catch(X){It("WebGLState:",X)}}function me(){try{a.compressedTexSubImage3D(...arguments)}catch(X){It("WebGLState:",X)}}function Pe(){try{a.texStorage2D(...arguments)}catch(X){It("WebGLState:",X)}}function Oe(){try{a.texStorage3D(...arguments)}catch(X){It("WebGLState:",X)}}function ge(){try{a.texImage2D(...arguments)}catch(X){It("WebGLState:",X)}}function _e(){try{a.texImage3D(...arguments)}catch(X){It("WebGLState:",X)}}function Ie(X){return _[X]!==void 0?_[X]:a.getParameter(X)}function Ge(X,De){_[X]!==De&&(a.pixelStorei(X,De),_[X]=De)}function ze(X){Le.equals(X)===!1&&(a.scissor(X.x,X.y,X.z,X.w),Le.copy(X))}function we(X){Ne.equals(X)===!1&&(a.viewport(X.x,X.y,X.z,X.w),Ne.copy(X))}function Ke(X,De){let ve=h.get(De);ve===void 0&&(ve=new WeakMap,h.set(De,ve));let Fe=ve.get(X);Fe===void 0&&(Fe=a.getUniformBlockIndex(De,X.name),ve.set(X,Fe))}function Qe(X,De){const Fe=h.get(De).get(X);m.get(De)!==Fe&&(a.uniformBlockBinding(De,Fe,X.__bindingPointIndex),m.set(De,Fe))}function it(){a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.DEPTH_TEST),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SCISSOR_TEST),a.disable(a.STENCIL_TEST),a.disable(a.SAMPLE_ALPHA_TO_COVERAGE),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ONE,a.ZERO),a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO),a.blendColor(0,0,0,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(a.LESS),u.setReversed(!1),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(a.ALWAYS,0,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.clearStencil(0),a.cullFace(a.BACK),a.frontFace(a.CCW),a.polygonOffset(0,0),a.activeTexture(a.TEXTURE0),a.bindFramebuffer(a.FRAMEBUFFER,null),a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,null),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),a.pixelStorei(a.PACK_ALIGNMENT,4),a.pixelStorei(a.UNPACK_ALIGNMENT,4),a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,!1),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,a.BROWSER_DEFAULT_WEBGL),a.pixelStorei(a.PACK_ROW_LENGTH,0),a.pixelStorei(a.PACK_SKIP_PIXELS,0),a.pixelStorei(a.PACK_SKIP_ROWS,0),a.pixelStorei(a.UNPACK_ROW_LENGTH,0),a.pixelStorei(a.UNPACK_IMAGE_HEIGHT,0),a.pixelStorei(a.UNPACK_SKIP_PIXELS,0),a.pixelStorei(a.UNPACK_SKIP_ROWS,0),a.pixelStorei(a.UNPACK_SKIP_IMAGES,0),g={},_={},Se=null,B={},v={},S=new WeakMap,E=[],A=null,y=!1,x=null,O=null,P=null,C=null,N=null,L=null,F=null,T=new kt(0,0,0),U=0,k=!1,G=null,Q=null,de=null,ue=null,Y=null,Le.set(0,0,a.canvas.width,a.canvas.height),Ne.set(0,0,a.canvas.width,a.canvas.height),c.reset(),u.reset(),d.reset()}return{buffers:{color:c,depth:u,stencil:d},enable:ye,disable:ke,bindFramebuffer:tt,drawBuffers:qe,useProgram:xt,setBlending:Mt,setMaterial:yt,setFlipSided:tn,setCullFace:nn,setLineWidth:on,setPolygonOffset:fn,setScissorTest:ct,activeTexture:Vt,bindTexture:Z,unbindTexture:Ut,compressedTexImage2D:bt,compressedTexImage3D:I,texImage2D:ge,texImage3D:_e,pixelStorei:Ge,getParameter:Ie,updateUBOMapping:Ke,uniformBlockBinding:Qe,texStorage2D:Pe,texStorage3D:Oe,texSubImage2D:b,texSubImage3D:ee,compressedTexSubImage2D:le,compressedTexSubImage3D:me,scissor:ze,viewport:we,reset:it}}function cR(a,e,i,r,o,c,u){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new zt,g=new WeakMap,_=new Set;let v;const S=new WeakMap;let E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(I,b){return E?new OffscreenCanvas(I,b):Wu("canvas")}function y(I,b,ee){let le=1;const me=bt(I);if((me.width>ee||me.height>ee)&&(le=ee/Math.max(me.width,me.height)),le<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const Pe=Math.floor(le*me.width),Oe=Math.floor(le*me.height);v===void 0&&(v=A(Pe,Oe));const ge=b?A(Pe,Oe):v;return ge.width=Pe,ge.height=Oe,ge.getContext("2d").drawImage(I,0,0,Pe,Oe),rt("WebGLRenderer: Texture has been resized from ("+me.width+"x"+me.height+") to ("+Pe+"x"+Oe+")."),ge}else return"data"in I&&rt("WebGLRenderer: Image in DataTexture is too big ("+me.width+"x"+me.height+")."),I;return I}function x(I){return I.generateMipmaps}function O(I){a.generateMipmap(I)}function P(I){return I.isWebGLCubeRenderTarget?a.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?a.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?a.TEXTURE_2D_ARRAY:a.TEXTURE_2D}function C(I,b,ee,le,me,Pe=!1){if(I!==null){if(a[I]!==void 0)return a[I];rt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let Oe;le&&(Oe=e.get("EXT_texture_norm16"),Oe||rt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ge=b;if(b===a.RED&&(ee===a.FLOAT&&(ge=a.R32F),ee===a.HALF_FLOAT&&(ge=a.R16F),ee===a.UNSIGNED_BYTE&&(ge=a.R8),ee===a.UNSIGNED_SHORT&&Oe&&(ge=Oe.R16_EXT),ee===a.SHORT&&Oe&&(ge=Oe.R16_SNORM_EXT)),b===a.RED_INTEGER&&(ee===a.UNSIGNED_BYTE&&(ge=a.R8UI),ee===a.UNSIGNED_SHORT&&(ge=a.R16UI),ee===a.UNSIGNED_INT&&(ge=a.R32UI),ee===a.BYTE&&(ge=a.R8I),ee===a.SHORT&&(ge=a.R16I),ee===a.INT&&(ge=a.R32I)),b===a.RG&&(ee===a.FLOAT&&(ge=a.RG32F),ee===a.HALF_FLOAT&&(ge=a.RG16F),ee===a.UNSIGNED_BYTE&&(ge=a.RG8),ee===a.UNSIGNED_SHORT&&Oe&&(ge=Oe.RG16_EXT),ee===a.SHORT&&Oe&&(ge=Oe.RG16_SNORM_EXT)),b===a.RG_INTEGER&&(ee===a.UNSIGNED_BYTE&&(ge=a.RG8UI),ee===a.UNSIGNED_SHORT&&(ge=a.RG16UI),ee===a.UNSIGNED_INT&&(ge=a.RG32UI),ee===a.BYTE&&(ge=a.RG8I),ee===a.SHORT&&(ge=a.RG16I),ee===a.INT&&(ge=a.RG32I)),b===a.RGB_INTEGER&&(ee===a.UNSIGNED_BYTE&&(ge=a.RGB8UI),ee===a.UNSIGNED_SHORT&&(ge=a.RGB16UI),ee===a.UNSIGNED_INT&&(ge=a.RGB32UI),ee===a.BYTE&&(ge=a.RGB8I),ee===a.SHORT&&(ge=a.RGB16I),ee===a.INT&&(ge=a.RGB32I)),b===a.RGBA_INTEGER&&(ee===a.UNSIGNED_BYTE&&(ge=a.RGBA8UI),ee===a.UNSIGNED_SHORT&&(ge=a.RGBA16UI),ee===a.UNSIGNED_INT&&(ge=a.RGBA32UI),ee===a.BYTE&&(ge=a.RGBA8I),ee===a.SHORT&&(ge=a.RGBA16I),ee===a.INT&&(ge=a.RGBA32I)),b===a.RGB&&(ee===a.UNSIGNED_SHORT&&Oe&&(ge=Oe.RGB16_EXT),ee===a.SHORT&&Oe&&(ge=Oe.RGB16_SNORM_EXT),ee===a.UNSIGNED_INT_5_9_9_9_REV&&(ge=a.RGB9_E5),ee===a.UNSIGNED_INT_10F_11F_11F_REV&&(ge=a.R11F_G11F_B10F)),b===a.RGBA){const _e=Pe?ku:Lt.getTransfer(me);ee===a.FLOAT&&(ge=a.RGBA32F),ee===a.HALF_FLOAT&&(ge=a.RGBA16F),ee===a.UNSIGNED_BYTE&&(ge=_e===qt?a.SRGB8_ALPHA8:a.RGBA8),ee===a.UNSIGNED_SHORT&&Oe&&(ge=Oe.RGBA16_EXT),ee===a.SHORT&&Oe&&(ge=Oe.RGBA16_SNORM_EXT),ee===a.UNSIGNED_SHORT_4_4_4_4&&(ge=a.RGBA4),ee===a.UNSIGNED_SHORT_5_5_5_1&&(ge=a.RGB5_A1)}return(ge===a.R16F||ge===a.R32F||ge===a.RG16F||ge===a.RG32F||ge===a.RGBA16F||ge===a.RGBA32F)&&e.get("EXT_color_buffer_float"),ge}function N(I,b){let ee;return I?b===null||b===wa||b===Kl?ee=a.DEPTH24_STENCIL8:b===ba?ee=a.DEPTH32F_STENCIL8:b===Zl&&(ee=a.DEPTH24_STENCIL8,rt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===wa||b===Kl?ee=a.DEPTH_COMPONENT24:b===ba?ee=a.DEPTH_COMPONENT32F:b===Zl&&(ee=a.DEPTH_COMPONENT16),ee}function L(I,b){return x(I)===!0||I.isFramebufferTexture&&I.minFilter!==qn&&I.minFilter!==_n?Math.log2(Math.max(b.width,b.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?b.mipmaps.length:1}function F(I){const b=I.target;b.removeEventListener("dispose",F),U(b),b.isVideoTexture&&g.delete(b),b.isHTMLTexture&&_.delete(b)}function T(I){const b=I.target;b.removeEventListener("dispose",T),G(b)}function U(I){const b=r.get(I);if(b.__webglInit===void 0)return;const ee=I.source,le=S.get(ee);if(le){const me=le[b.__cacheKey];me.usedTimes--,me.usedTimes===0&&k(I),Object.keys(le).length===0&&S.delete(ee)}r.remove(I)}function k(I){const b=r.get(I);a.deleteTexture(b.__webglTexture);const ee=I.source,le=S.get(ee);delete le[b.__cacheKey],u.memory.textures--}function G(I){const b=r.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),r.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let le=0;le<6;le++){if(Array.isArray(b.__webglFramebuffer[le]))for(let me=0;me<b.__webglFramebuffer[le].length;me++)a.deleteFramebuffer(b.__webglFramebuffer[le][me]);else a.deleteFramebuffer(b.__webglFramebuffer[le]);b.__webglDepthbuffer&&a.deleteRenderbuffer(b.__webglDepthbuffer[le])}else{if(Array.isArray(b.__webglFramebuffer))for(let le=0;le<b.__webglFramebuffer.length;le++)a.deleteFramebuffer(b.__webglFramebuffer[le]);else a.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&a.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&a.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let le=0;le<b.__webglColorRenderbuffer.length;le++)b.__webglColorRenderbuffer[le]&&a.deleteRenderbuffer(b.__webglColorRenderbuffer[le]);b.__webglDepthRenderbuffer&&a.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const ee=I.textures;for(let le=0,me=ee.length;le<me;le++){const Pe=r.get(ee[le]);Pe.__webglTexture&&(a.deleteTexture(Pe.__webglTexture),u.memory.textures--),r.remove(ee[le])}r.remove(I)}let Q=0;function de(){Q=0}function ue(){return Q}function Y(I){Q=I}function z(){const I=Q;return I>=o.maxTextures&&rt("WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+o.maxTextures),Q+=1,I}function H(I){const b=[];return b.push(I.wrapS),b.push(I.wrapT),b.push(I.wrapR||0),b.push(I.magFilter),b.push(I.minFilter),b.push(I.anisotropy),b.push(I.internalFormat),b.push(I.format),b.push(I.type),b.push(I.generateMipmaps),b.push(I.premultiplyAlpha),b.push(I.flipY),b.push(I.unpackAlignment),b.push(I.colorSpace),b.join()}function J(I,b){const ee=r.get(I);if(I.isVideoTexture&&Z(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&ee.__version!==I.version){const le=I.image;if(le===null)rt("WebGLRenderer: Texture marked for update but no image data found.");else if(le.complete===!1)rt("WebGLRenderer: Texture marked for update but image is incomplete");else{ke(ee,I,b);return}}else I.isExternalTexture&&(ee.__webglTexture=I.sourceTexture?I.sourceTexture:null);i.bindTexture(a.TEXTURE_2D,ee.__webglTexture,a.TEXTURE0+b)}function he(I,b){const ee=r.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&ee.__version!==I.version){ke(ee,I,b);return}else I.isExternalTexture&&(ee.__webglTexture=I.sourceTexture?I.sourceTexture:null);i.bindTexture(a.TEXTURE_2D_ARRAY,ee.__webglTexture,a.TEXTURE0+b)}function Se(I,b){const ee=r.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&ee.__version!==I.version){ke(ee,I,b);return}i.bindTexture(a.TEXTURE_3D,ee.__webglTexture,a.TEXTURE0+b)}function B(I,b){const ee=r.get(I);if(I.isCubeDepthTexture!==!0&&I.version>0&&ee.__version!==I.version){tt(ee,I,b);return}i.bindTexture(a.TEXTURE_CUBE_MAP,ee.__webglTexture,a.TEXTURE0+b)}const q={[fp]:a.REPEAT,[da]:a.CLAMP_TO_EDGE,[dp]:a.MIRRORED_REPEAT},Ce={[qn]:a.NEAREST,[pE]:a.NEAREST_MIPMAP_NEAREST,[lu]:a.NEAREST_MIPMAP_LINEAR,[_n]:a.LINEAR,[ph]:a.LINEAR_MIPMAP_NEAREST,[Ws]:a.LINEAR_MIPMAP_LINEAR},Le={[_E]:a.NEVER,[yE]:a.ALWAYS,[vE]:a.LESS,[tm]:a.LEQUAL,[xE]:a.EQUAL,[nm]:a.GEQUAL,[SE]:a.GREATER,[ME]:a.NOTEQUAL};function Ne(I,b){if(b.type===ba&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===_n||b.magFilter===ph||b.magFilter===lu||b.magFilter===Ws||b.minFilter===_n||b.minFilter===ph||b.minFilter===lu||b.minFilter===Ws)&&rt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),a.texParameteri(I,a.TEXTURE_WRAP_S,q[b.wrapS]),a.texParameteri(I,a.TEXTURE_WRAP_T,q[b.wrapT]),(I===a.TEXTURE_3D||I===a.TEXTURE_2D_ARRAY)&&a.texParameteri(I,a.TEXTURE_WRAP_R,q[b.wrapR]),a.texParameteri(I,a.TEXTURE_MAG_FILTER,Ce[b.magFilter]),a.texParameteri(I,a.TEXTURE_MIN_FILTER,Ce[b.minFilter]),b.compareFunction&&(a.texParameteri(I,a.TEXTURE_COMPARE_MODE,a.COMPARE_REF_TO_TEXTURE),a.texParameteri(I,a.TEXTURE_COMPARE_FUNC,Le[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===qn||b.minFilter!==lu&&b.minFilter!==Ws||b.type===ba&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||r.get(b).__currentAnisotropy){const ee=e.get("EXT_texture_filter_anisotropic");a.texParameterf(I,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,o.getMaxAnisotropy())),r.get(b).__currentAnisotropy=b.anisotropy}}}function te(I,b){let ee=!1;I.__webglInit===void 0&&(I.__webglInit=!0,b.addEventListener("dispose",F));const le=b.source;let me=S.get(le);me===void 0&&(me={},S.set(le,me));const Pe=H(b);if(Pe!==I.__cacheKey){me[Pe]===void 0&&(me[Pe]={texture:a.createTexture(),usedTimes:0},u.memory.textures++,ee=!0),me[Pe].usedTimes++;const Oe=me[I.__cacheKey];Oe!==void 0&&(me[I.__cacheKey].usedTimes--,Oe.usedTimes===0&&k(b)),I.__cacheKey=Pe,I.__webglTexture=me[Pe].texture}return ee}function Te(I,b,ee){return Math.floor(Math.floor(I/ee)/b)}function ye(I,b,ee,le){const Pe=I.updateRanges;if(Pe.length===0)i.texSubImage2D(a.TEXTURE_2D,0,0,0,b.width,b.height,ee,le,b.data);else{Pe.sort((Ge,ze)=>Ge.start-ze.start);let Oe=0;for(let Ge=1;Ge<Pe.length;Ge++){const ze=Pe[Oe],we=Pe[Ge],Ke=ze.start+ze.count,Qe=Te(we.start,b.width,4),it=Te(ze.start,b.width,4);we.start<=Ke+1&&Qe===it&&Te(we.start+we.count-1,b.width,4)===Qe?ze.count=Math.max(ze.count,we.start+we.count-ze.start):(++Oe,Pe[Oe]=we)}Pe.length=Oe+1;const ge=i.getParameter(a.UNPACK_ROW_LENGTH),_e=i.getParameter(a.UNPACK_SKIP_PIXELS),Ie=i.getParameter(a.UNPACK_SKIP_ROWS);i.pixelStorei(a.UNPACK_ROW_LENGTH,b.width);for(let Ge=0,ze=Pe.length;Ge<ze;Ge++){const we=Pe[Ge],Ke=Math.floor(we.start/4),Qe=Math.ceil(we.count/4),it=Ke%b.width,X=Math.floor(Ke/b.width),De=Qe,ve=1;i.pixelStorei(a.UNPACK_SKIP_PIXELS,it),i.pixelStorei(a.UNPACK_SKIP_ROWS,X),i.texSubImage2D(a.TEXTURE_2D,0,it,X,De,ve,ee,le,b.data)}I.clearUpdateRanges(),i.pixelStorei(a.UNPACK_ROW_LENGTH,ge),i.pixelStorei(a.UNPACK_SKIP_PIXELS,_e),i.pixelStorei(a.UNPACK_SKIP_ROWS,Ie)}}function ke(I,b,ee){let le=a.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(le=a.TEXTURE_2D_ARRAY),b.isData3DTexture&&(le=a.TEXTURE_3D);const me=te(I,b),Pe=b.source;i.bindTexture(le,I.__webglTexture,a.TEXTURE0+ee);const Oe=r.get(Pe);if(Pe.version!==Oe.__version||me===!0){if(i.activeTexture(a.TEXTURE0+ee),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){const ve=Lt.getPrimaries(Lt.workingColorSpace),Fe=b.colorSpace===Xs?null:Lt.getPrimaries(b.colorSpace),He=b.colorSpace===Xs||ve===Fe?a.NONE:a.BROWSER_DEFAULT_WEBGL;i.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,He)}i.pixelStorei(a.UNPACK_ALIGNMENT,b.unpackAlignment);let _e=y(b.image,!1,o.maxTextureSize);_e=Ut(b,_e);const Ie=c.convert(b.format,b.colorSpace),Ge=c.convert(b.type);let ze=C(b.internalFormat,Ie,Ge,b.normalized,b.colorSpace,b.isVideoTexture);Ne(le,b);let we;const Ke=b.mipmaps,Qe=b.isVideoTexture!==!0,it=Oe.__version===void 0||me===!0,X=Pe.dataReady,De=L(b,_e);if(b.isDepthTexture)ze=N(b.format===br,b.type),it&&(Qe?i.texStorage2D(a.TEXTURE_2D,1,ze,_e.width,_e.height):i.texImage2D(a.TEXTURE_2D,0,ze,_e.width,_e.height,0,Ie,Ge,null));else if(b.isDataTexture)if(Ke.length>0){Qe&&it&&i.texStorage2D(a.TEXTURE_2D,De,ze,Ke[0].width,Ke[0].height);for(let ve=0,Fe=Ke.length;ve<Fe;ve++)we=Ke[ve],Qe?X&&i.texSubImage2D(a.TEXTURE_2D,ve,0,0,we.width,we.height,Ie,Ge,we.data):i.texImage2D(a.TEXTURE_2D,ve,ze,we.width,we.height,0,Ie,Ge,we.data);b.generateMipmaps=!1}else Qe?(it&&i.texStorage2D(a.TEXTURE_2D,De,ze,_e.width,_e.height),X&&ye(b,_e,Ie,Ge)):i.texImage2D(a.TEXTURE_2D,0,ze,_e.width,_e.height,0,Ie,Ge,_e.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Qe&&it&&i.texStorage3D(a.TEXTURE_2D_ARRAY,De,ze,Ke[0].width,Ke[0].height,_e.depth);for(let ve=0,Fe=Ke.length;ve<Fe;ve++)if(we=Ke[ve],b.format!==ha)if(Ie!==null)if(Qe){if(X)if(b.layerUpdates.size>0){const He=Iv(we.width,we.height,b.format,b.type);for(const Ae of b.layerUpdates){const Je=we.data.subarray(Ae*He/we.data.BYTES_PER_ELEMENT,(Ae+1)*He/we.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,ve,0,0,Ae,we.width,we.height,1,Ie,Je)}b.clearLayerUpdates()}else i.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,ve,0,0,0,we.width,we.height,_e.depth,Ie,we.data)}else i.compressedTexImage3D(a.TEXTURE_2D_ARRAY,ve,ze,we.width,we.height,_e.depth,0,we.data,0,0);else rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Qe?X&&i.texSubImage3D(a.TEXTURE_2D_ARRAY,ve,0,0,0,we.width,we.height,_e.depth,Ie,Ge,we.data):i.texImage3D(a.TEXTURE_2D_ARRAY,ve,ze,we.width,we.height,_e.depth,0,Ie,Ge,we.data)}else{Qe&&it&&i.texStorage2D(a.TEXTURE_2D,De,ze,Ke[0].width,Ke[0].height);for(let ve=0,Fe=Ke.length;ve<Fe;ve++)we=Ke[ve],b.format!==ha?Ie!==null?Qe?X&&i.compressedTexSubImage2D(a.TEXTURE_2D,ve,0,0,we.width,we.height,Ie,we.data):i.compressedTexImage2D(a.TEXTURE_2D,ve,ze,we.width,we.height,0,we.data):rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Qe?X&&i.texSubImage2D(a.TEXTURE_2D,ve,0,0,we.width,we.height,Ie,Ge,we.data):i.texImage2D(a.TEXTURE_2D,ve,ze,we.width,we.height,0,Ie,Ge,we.data)}else if(b.isDataArrayTexture)if(Qe){if(it&&i.texStorage3D(a.TEXTURE_2D_ARRAY,De,ze,_e.width,_e.height,_e.depth),X)if(b.layerUpdates.size>0){const ve=Iv(_e.width,_e.height,b.format,b.type);for(const Fe of b.layerUpdates){const He=_e.data.subarray(Fe*ve/_e.data.BYTES_PER_ELEMENT,(Fe+1)*ve/_e.data.BYTES_PER_ELEMENT);i.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,Fe,_e.width,_e.height,1,Ie,Ge,He)}b.clearLayerUpdates()}else i.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,_e.width,_e.height,_e.depth,Ie,Ge,_e.data)}else i.texImage3D(a.TEXTURE_2D_ARRAY,0,ze,_e.width,_e.height,_e.depth,0,Ie,Ge,_e.data);else if(b.isData3DTexture)Qe?(it&&i.texStorage3D(a.TEXTURE_3D,De,ze,_e.width,_e.height,_e.depth),X&&i.texSubImage3D(a.TEXTURE_3D,0,0,0,0,_e.width,_e.height,_e.depth,Ie,Ge,_e.data)):i.texImage3D(a.TEXTURE_3D,0,ze,_e.width,_e.height,_e.depth,0,Ie,Ge,_e.data);else if(b.isFramebufferTexture){if(it)if(Qe)i.texStorage2D(a.TEXTURE_2D,De,ze,_e.width,_e.height);else{let ve=_e.width,Fe=_e.height;for(let He=0;He<De;He++)i.texImage2D(a.TEXTURE_2D,He,ze,ve,Fe,0,Ie,Ge,null),ve>>=1,Fe>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in a){const ve=a.canvas;if(ve.hasAttribute("layoutsubtree")||ve.setAttribute("layoutsubtree","true"),_e.parentNode!==ve){ve.appendChild(_e),_.add(b),ve.onpaint=Fe=>{const He=Fe.changedElements;for(const Ae of _)He.includes(Ae.image)&&(Ae.needsUpdate=!0)},ve.requestPaint();return}if(a.texElementImage2D.length===3)a.texElementImage2D(a.TEXTURE_2D,a.RGBA8,_e);else{const He=a.RGBA,Ae=a.RGBA,Je=a.UNSIGNED_BYTE;a.texElementImage2D(a.TEXTURE_2D,0,He,Ae,Je,_e)}a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MIN_FILTER,a.LINEAR),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE)}}else if(Ke.length>0){if(Qe&&it){const ve=bt(Ke[0]);i.texStorage2D(a.TEXTURE_2D,De,ze,ve.width,ve.height)}for(let ve=0,Fe=Ke.length;ve<Fe;ve++)we=Ke[ve],Qe?X&&i.texSubImage2D(a.TEXTURE_2D,ve,0,0,Ie,Ge,we):i.texImage2D(a.TEXTURE_2D,ve,ze,Ie,Ge,we);b.generateMipmaps=!1}else if(Qe){if(it){const ve=bt(_e);i.texStorage2D(a.TEXTURE_2D,De,ze,ve.width,ve.height)}X&&i.texSubImage2D(a.TEXTURE_2D,0,0,0,Ie,Ge,_e)}else i.texImage2D(a.TEXTURE_2D,0,ze,Ie,Ge,_e);x(b)&&O(le),Oe.__version=Pe.version,b.onUpdate&&b.onUpdate(b)}I.__version=b.version}function tt(I,b,ee){if(b.image.length!==6)return;const le=te(I,b),me=b.source;i.bindTexture(a.TEXTURE_CUBE_MAP,I.__webglTexture,a.TEXTURE0+ee);const Pe=r.get(me);if(me.version!==Pe.__version||le===!0){i.activeTexture(a.TEXTURE0+ee);const Oe=Lt.getPrimaries(Lt.workingColorSpace),ge=b.colorSpace===Xs?null:Lt.getPrimaries(b.colorSpace),_e=b.colorSpace===Xs||Oe===ge?a.NONE:a.BROWSER_DEFAULT_WEBGL;i.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(a.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);const Ie=b.isCompressedTexture||b.image[0].isCompressedTexture,Ge=b.image[0]&&b.image[0].isDataTexture,ze=[];for(let Ae=0;Ae<6;Ae++)!Ie&&!Ge?ze[Ae]=y(b.image[Ae],!0,o.maxCubemapSize):ze[Ae]=Ge?b.image[Ae].image:b.image[Ae],ze[Ae]=Ut(b,ze[Ae]);const we=ze[0],Ke=c.convert(b.format,b.colorSpace),Qe=c.convert(b.type),it=C(b.internalFormat,Ke,Qe,b.normalized,b.colorSpace),X=b.isVideoTexture!==!0,De=Pe.__version===void 0||le===!0,ve=me.dataReady;let Fe=L(b,we);Ne(a.TEXTURE_CUBE_MAP,b);let He;if(Ie){X&&De&&i.texStorage2D(a.TEXTURE_CUBE_MAP,Fe,it,we.width,we.height);for(let Ae=0;Ae<6;Ae++){He=ze[Ae].mipmaps;for(let Je=0;Je<He.length;Je++){const je=He[Je];b.format!==ha?Ke!==null?X?ve&&i.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Je,0,0,je.width,je.height,Ke,je.data):i.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Je,it,je.width,je.height,0,je.data):rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?ve&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Je,0,0,je.width,je.height,Ke,Qe,je.data):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Je,it,je.width,je.height,0,Ke,Qe,je.data)}}}else{if(He=b.mipmaps,X&&De){He.length>0&&Fe++;const Ae=bt(ze[0]);i.texStorage2D(a.TEXTURE_CUBE_MAP,Fe,it,Ae.width,Ae.height)}for(let Ae=0;Ae<6;Ae++)if(Ge){X?ve&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,0,0,ze[Ae].width,ze[Ae].height,Ke,Qe,ze[Ae].data):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,it,ze[Ae].width,ze[Ae].height,0,Ke,Qe,ze[Ae].data);for(let Je=0;Je<He.length;Je++){const Xt=He[Je].image[Ae].image;X?ve&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Je+1,0,0,Xt.width,Xt.height,Ke,Qe,Xt.data):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Je+1,it,Xt.width,Xt.height,0,Ke,Qe,Xt.data)}}else{X?ve&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,0,0,Ke,Qe,ze[Ae]):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,it,Ke,Qe,ze[Ae]);for(let Je=0;Je<He.length;Je++){const je=He[Je];X?ve&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Je+1,0,0,Ke,Qe,je.image[Ae]):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Je+1,it,Ke,Qe,je.image[Ae])}}}x(b)&&O(a.TEXTURE_CUBE_MAP),Pe.__version=me.version,b.onUpdate&&b.onUpdate(b)}I.__version=b.version}function qe(I,b,ee,le,me,Pe){const Oe=c.convert(ee.format,ee.colorSpace),ge=c.convert(ee.type),_e=C(ee.internalFormat,Oe,ge,ee.normalized,ee.colorSpace),Ie=r.get(b),Ge=r.get(ee);if(Ge.__renderTarget=b,!Ie.__hasExternalTextures){const ze=Math.max(1,b.width>>Pe),we=Math.max(1,b.height>>Pe);me===a.TEXTURE_3D||me===a.TEXTURE_2D_ARRAY?i.texImage3D(me,Pe,_e,ze,we,b.depth,0,Oe,ge,null):i.texImage2D(me,Pe,_e,ze,we,0,Oe,ge,null)}i.bindFramebuffer(a.FRAMEBUFFER,I),Vt(b)?d.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,le,me,Ge.__webglTexture,0,ct(b)):(me===a.TEXTURE_2D||me>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&me<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&a.framebufferTexture2D(a.FRAMEBUFFER,le,me,Ge.__webglTexture,Pe),i.bindFramebuffer(a.FRAMEBUFFER,null)}function xt(I,b,ee){if(a.bindRenderbuffer(a.RENDERBUFFER,I),b.depthBuffer){const le=b.depthTexture,me=le&&le.isDepthTexture?le.type:null,Pe=N(b.stencilBuffer,me),Oe=b.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;Vt(b)?d.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,ct(b),Pe,b.width,b.height):ee?a.renderbufferStorageMultisample(a.RENDERBUFFER,ct(b),Pe,b.width,b.height):a.renderbufferStorage(a.RENDERBUFFER,Pe,b.width,b.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,Oe,a.RENDERBUFFER,I)}else{const le=b.textures;for(let me=0;me<le.length;me++){const Pe=le[me],Oe=c.convert(Pe.format,Pe.colorSpace),ge=c.convert(Pe.type),_e=C(Pe.internalFormat,Oe,ge,Pe.normalized,Pe.colorSpace);Vt(b)?d.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,ct(b),_e,b.width,b.height):ee?a.renderbufferStorageMultisample(a.RENDERBUFFER,ct(b),_e,b.width,b.height):a.renderbufferStorage(a.RENDERBUFFER,_e,b.width,b.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function gt(I,b,ee){const le=b.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(a.FRAMEBUFFER,I),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const me=r.get(b.depthTexture);if(me.__renderTarget=b,(!me.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),le){if(me.__webglInit===void 0&&(me.__webglInit=!0,b.depthTexture.addEventListener("dispose",F)),me.__webglTexture===void 0){me.__webglTexture=a.createTexture(),i.bindTexture(a.TEXTURE_CUBE_MAP,me.__webglTexture),Ne(a.TEXTURE_CUBE_MAP,b.depthTexture);const Ie=c.convert(b.depthTexture.format),Ge=c.convert(b.depthTexture.type);let ze;b.depthTexture.format===ss?ze=a.DEPTH_COMPONENT24:b.depthTexture.format===br&&(ze=a.DEPTH24_STENCIL8);for(let we=0;we<6;we++)a.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,ze,b.width,b.height,0,Ie,Ge,null)}}else J(b.depthTexture,0);const Pe=me.__webglTexture,Oe=ct(b),ge=le?a.TEXTURE_CUBE_MAP_POSITIVE_X+ee:a.TEXTURE_2D,_e=b.depthTexture.format===br?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;if(b.depthTexture.format===ss)Vt(b)?d.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,_e,ge,Pe,0,Oe):a.framebufferTexture2D(a.FRAMEBUFFER,_e,ge,Pe,0);else if(b.depthTexture.format===br)Vt(b)?d.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,_e,ge,Pe,0,Oe):a.framebufferTexture2D(a.FRAMEBUFFER,_e,ge,Pe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function St(I){const b=r.get(I),ee=I.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==I.depthTexture){const le=I.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),le){const me=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,le.removeEventListener("dispose",me)};le.addEventListener("dispose",me),b.__depthDisposeCallback=me}b.__boundDepthTexture=le}if(I.depthTexture&&!b.__autoAllocateDepthBuffer)if(ee)for(let le=0;le<6;le++)gt(b.__webglFramebuffer[le],I,le);else{const le=I.texture.mipmaps;le&&le.length>0?gt(b.__webglFramebuffer[0],I,0):gt(b.__webglFramebuffer,I,0)}else if(ee){b.__webglDepthbuffer=[];for(let le=0;le<6;le++)if(i.bindFramebuffer(a.FRAMEBUFFER,b.__webglFramebuffer[le]),b.__webglDepthbuffer[le]===void 0)b.__webglDepthbuffer[le]=a.createRenderbuffer(),xt(b.__webglDepthbuffer[le],I,!1);else{const me=I.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Pe=b.__webglDepthbuffer[le];a.bindRenderbuffer(a.RENDERBUFFER,Pe),a.framebufferRenderbuffer(a.FRAMEBUFFER,me,a.RENDERBUFFER,Pe)}}else{const le=I.texture.mipmaps;if(le&&le.length>0?i.bindFramebuffer(a.FRAMEBUFFER,b.__webglFramebuffer[0]):i.bindFramebuffer(a.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=a.createRenderbuffer(),xt(b.__webglDepthbuffer,I,!1);else{const me=I.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Pe=b.__webglDepthbuffer;a.bindRenderbuffer(a.RENDERBUFFER,Pe),a.framebufferRenderbuffer(a.FRAMEBUFFER,me,a.RENDERBUFFER,Pe)}}i.bindFramebuffer(a.FRAMEBUFFER,null)}function Mt(I,b,ee){const le=r.get(I);b!==void 0&&qe(le.__webglFramebuffer,I,I.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,0),ee!==void 0&&St(I)}function yt(I){const b=I.texture,ee=r.get(I),le=r.get(b);I.addEventListener("dispose",T);const me=I.textures,Pe=I.isWebGLCubeRenderTarget===!0,Oe=me.length>1;if(Oe||(le.__webglTexture===void 0&&(le.__webglTexture=a.createTexture()),le.__version=b.version,u.memory.textures++),Pe){ee.__webglFramebuffer=[];for(let ge=0;ge<6;ge++)if(b.mipmaps&&b.mipmaps.length>0){ee.__webglFramebuffer[ge]=[];for(let _e=0;_e<b.mipmaps.length;_e++)ee.__webglFramebuffer[ge][_e]=a.createFramebuffer()}else ee.__webglFramebuffer[ge]=a.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){ee.__webglFramebuffer=[];for(let ge=0;ge<b.mipmaps.length;ge++)ee.__webglFramebuffer[ge]=a.createFramebuffer()}else ee.__webglFramebuffer=a.createFramebuffer();if(Oe)for(let ge=0,_e=me.length;ge<_e;ge++){const Ie=r.get(me[ge]);Ie.__webglTexture===void 0&&(Ie.__webglTexture=a.createTexture(),u.memory.textures++)}if(I.samples>0&&Vt(I)===!1){ee.__webglMultisampledFramebuffer=a.createFramebuffer(),ee.__webglColorRenderbuffer=[],i.bindFramebuffer(a.FRAMEBUFFER,ee.__webglMultisampledFramebuffer);for(let ge=0;ge<me.length;ge++){const _e=me[ge];ee.__webglColorRenderbuffer[ge]=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,ee.__webglColorRenderbuffer[ge]);const Ie=c.convert(_e.format,_e.colorSpace),Ge=c.convert(_e.type),ze=C(_e.internalFormat,Ie,Ge,_e.normalized,_e.colorSpace,I.isXRRenderTarget===!0),we=ct(I);a.renderbufferStorageMultisample(a.RENDERBUFFER,we,ze,I.width,I.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+ge,a.RENDERBUFFER,ee.__webglColorRenderbuffer[ge])}a.bindRenderbuffer(a.RENDERBUFFER,null),I.depthBuffer&&(ee.__webglDepthRenderbuffer=a.createRenderbuffer(),xt(ee.__webglDepthRenderbuffer,I,!0)),i.bindFramebuffer(a.FRAMEBUFFER,null)}}if(Pe){i.bindTexture(a.TEXTURE_CUBE_MAP,le.__webglTexture),Ne(a.TEXTURE_CUBE_MAP,b);for(let ge=0;ge<6;ge++)if(b.mipmaps&&b.mipmaps.length>0)for(let _e=0;_e<b.mipmaps.length;_e++)qe(ee.__webglFramebuffer[ge][_e],I,b,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+ge,_e);else qe(ee.__webglFramebuffer[ge],I,b,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0);x(b)&&O(a.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Oe){for(let ge=0,_e=me.length;ge<_e;ge++){const Ie=me[ge],Ge=r.get(Ie);let ze=a.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(ze=I.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),i.bindTexture(ze,Ge.__webglTexture),Ne(ze,Ie),qe(ee.__webglFramebuffer,I,Ie,a.COLOR_ATTACHMENT0+ge,ze,0),x(Ie)&&O(ze)}i.unbindTexture()}else{let ge=a.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(ge=I.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),i.bindTexture(ge,le.__webglTexture),Ne(ge,b),b.mipmaps&&b.mipmaps.length>0)for(let _e=0;_e<b.mipmaps.length;_e++)qe(ee.__webglFramebuffer[_e],I,b,a.COLOR_ATTACHMENT0,ge,_e);else qe(ee.__webglFramebuffer,I,b,a.COLOR_ATTACHMENT0,ge,0);x(b)&&O(ge),i.unbindTexture()}I.depthBuffer&&St(I)}function tn(I){const b=I.textures;for(let ee=0,le=b.length;ee<le;ee++){const me=b[ee];if(x(me)){const Pe=P(I),Oe=r.get(me).__webglTexture;i.bindTexture(Pe,Oe),O(Pe),i.unbindTexture()}}}const nn=[],on=[];function fn(I){if(I.samples>0){if(Vt(I)===!1){const b=I.textures,ee=I.width,le=I.height;let me=a.COLOR_BUFFER_BIT;const Pe=I.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Oe=r.get(I),ge=b.length>1;if(ge)for(let Ie=0;Ie<b.length;Ie++)i.bindFramebuffer(a.FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ie,a.RENDERBUFFER,null),i.bindFramebuffer(a.FRAMEBUFFER,Oe.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ie,a.TEXTURE_2D,null,0);i.bindFramebuffer(a.READ_FRAMEBUFFER,Oe.__webglMultisampledFramebuffer);const _e=I.texture.mipmaps;_e&&_e.length>0?i.bindFramebuffer(a.DRAW_FRAMEBUFFER,Oe.__webglFramebuffer[0]):i.bindFramebuffer(a.DRAW_FRAMEBUFFER,Oe.__webglFramebuffer);for(let Ie=0;Ie<b.length;Ie++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(me|=a.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(me|=a.STENCIL_BUFFER_BIT)),ge){a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,Oe.__webglColorRenderbuffer[Ie]);const Ge=r.get(b[Ie]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,Ge,0)}a.blitFramebuffer(0,0,ee,le,0,0,ee,le,me,a.NEAREST),m===!0&&(nn.length=0,on.length=0,nn.push(a.COLOR_ATTACHMENT0+Ie),I.depthBuffer&&I.resolveDepthBuffer===!1&&(nn.push(Pe),on.push(Pe),a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,on)),a.invalidateFramebuffer(a.READ_FRAMEBUFFER,nn))}if(i.bindFramebuffer(a.READ_FRAMEBUFFER,null),i.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),ge)for(let Ie=0;Ie<b.length;Ie++){i.bindFramebuffer(a.FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ie,a.RENDERBUFFER,Oe.__webglColorRenderbuffer[Ie]);const Ge=r.get(b[Ie]).__webglTexture;i.bindFramebuffer(a.FRAMEBUFFER,Oe.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ie,a.TEXTURE_2D,Ge,0)}i.bindFramebuffer(a.DRAW_FRAMEBUFFER,Oe.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&m){const b=I.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[b])}}}function ct(I){return Math.min(o.maxSamples,I.samples)}function Vt(I){const b=r.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Z(I){const b=u.render.frame;g.get(I)!==b&&(g.set(I,b),I.update())}function Ut(I,b){const ee=I.colorSpace,le=I.format,me=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||ee!==Vu&&ee!==Xs&&(Lt.getTransfer(ee)===qt?(le!==ha||me!==ji)&&rt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):It("WebGLTextures: Unsupported texture color space:",ee)),b}function bt(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(h.width=I.naturalWidth||I.width,h.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(h.width=I.displayWidth,h.height=I.displayHeight):(h.width=I.width,h.height=I.height),h}this.allocateTextureUnit=z,this.resetTextureUnits=de,this.getTextureUnits=ue,this.setTextureUnits=Y,this.setTexture2D=J,this.setTexture2DArray=he,this.setTexture3D=Se,this.setTextureCube=B,this.rebindTextures=Mt,this.setupRenderTarget=yt,this.updateRenderTargetMipmap=tn,this.updateMultisampleRenderTarget=fn,this.setupDepthRenderbuffer=St,this.setupFrameBufferTexture=qe,this.useMultisampledRTT=Vt,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function uR(a,e){function i(r,o=Xs){let c;const u=Lt.getTransfer(o);if(r===ji)return a.UNSIGNED_BYTE;if(r===Kp)return a.UNSIGNED_SHORT_4_4_4_4;if(r===Qp)return a.UNSIGNED_SHORT_5_5_5_1;if(r===qx)return a.UNSIGNED_INT_5_9_9_9_REV;if(r===jx)return a.UNSIGNED_INT_10F_11F_11F_REV;if(r===Wx)return a.BYTE;if(r===Yx)return a.SHORT;if(r===Zl)return a.UNSIGNED_SHORT;if(r===Zp)return a.INT;if(r===wa)return a.UNSIGNED_INT;if(r===ba)return a.FLOAT;if(r===as)return a.HALF_FLOAT;if(r===Zx)return a.ALPHA;if(r===Kx)return a.RGB;if(r===ha)return a.RGBA;if(r===ss)return a.DEPTH_COMPONENT;if(r===br)return a.DEPTH_STENCIL;if(r===Qx)return a.RED;if(r===Jp)return a.RED_INTEGER;if(r===Ar)return a.RG;if(r===$p)return a.RG_INTEGER;if(r===em)return a.RGBA_INTEGER;if(r===Ou||r===Pu||r===Iu||r===Bu)if(u===qt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===Ou)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Pu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Iu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Bu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===Ou)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Pu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Iu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Bu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===hp||r===pp||r===mp||r===gp)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===hp)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===pp)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===mp)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===gp)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===_p||r===vp||r===xp||r===Sp||r===Mp||r===Hu||r===yp)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===_p||r===vp)return u===qt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===xp)return u===qt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(r===Sp)return c.COMPRESSED_R11_EAC;if(r===Mp)return c.COMPRESSED_SIGNED_R11_EAC;if(r===Hu)return c.COMPRESSED_RG11_EAC;if(r===yp)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===Ep||r===bp||r===Tp||r===Ap||r===Rp||r===Cp||r===wp||r===Dp||r===Lp||r===Np||r===Up||r===Op||r===Pp||r===Ip)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===Ep)return u===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===bp)return u===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Tp)return u===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Ap)return u===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Rp)return u===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Cp)return u===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===wp)return u===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Dp)return u===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Lp)return u===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Np)return u===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Up)return u===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Op)return u===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Pp)return u===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Ip)return u===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Bp||r===Fp||r===zp)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===Bp)return u===qt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Fp)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===zp)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Hp||r===Gp||r===Gu||r===Vp)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===Hp)return c.COMPRESSED_RED_RGTC1_EXT;if(r===Gp)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Gu)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Vp)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Kl?a.UNSIGNED_INT_24_8:a[r]!==void 0?a[r]:null}return{convert:i}}const fR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,dR=`
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

}`;class hR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const r=new rS(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new Qi({vertexShader:fR,fragmentShader:dR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Ni(new Ys(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class pR extends Cr{constructor(e,i){super();const r=this;let o=null,c=1,u=null,d="local-floor",m=1,h=null,g=null,_=null,v=null,S=null,E=null;const A=typeof XRWebGLBinding<"u",y=new hR,x={},O=i.getContextAttributes();let P=null,C=null;const N=[],L=[],F=new zt;let T=null;const U=new qi;U.viewport=new gn;const k=new qi;k.viewport=new gn;const G=[U,k],Q=new bb;let de=null,ue=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let Te=N[te];return Te===void 0&&(Te=new Sh,N[te]=Te),Te.getTargetRaySpace()},this.getControllerGrip=function(te){let Te=N[te];return Te===void 0&&(Te=new Sh,N[te]=Te),Te.getGripSpace()},this.getHand=function(te){let Te=N[te];return Te===void 0&&(Te=new Sh,N[te]=Te),Te.getHandSpace()};function Y(te){const Te=L.indexOf(te.inputSource);if(Te===-1)return;const ye=N[Te];ye!==void 0&&(ye.update(te.inputSource,te.frame,h||u),ye.dispatchEvent({type:te.type,data:te.inputSource}))}function z(){o.removeEventListener("select",Y),o.removeEventListener("selectstart",Y),o.removeEventListener("selectend",Y),o.removeEventListener("squeeze",Y),o.removeEventListener("squeezestart",Y),o.removeEventListener("squeezeend",Y),o.removeEventListener("end",z),o.removeEventListener("inputsourceschange",H);for(let te=0;te<N.length;te++){const Te=L[te];Te!==null&&(L[te]=null,N[te].disconnect(Te))}de=null,ue=null,y.reset();for(const te in x)delete x[te];e.setRenderTarget(P),S=null,v=null,_=null,o=null,C=null,Ne.stop(),r.isPresenting=!1,e.setPixelRatio(T),e.setSize(F.width,F.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){c=te,r.isPresenting===!0&&rt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){d=te,r.isPresenting===!0&&rt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||u},this.setReferenceSpace=function(te){h=te},this.getBaseLayer=function(){return v!==null?v:S},this.getBinding=function(){return _===null&&A&&(_=new XRWebGLBinding(o,i)),_},this.getFrame=function(){return E},this.getSession=function(){return o},this.setSession=async function(te){if(o=te,o!==null){if(P=e.getRenderTarget(),o.addEventListener("select",Y),o.addEventListener("selectstart",Y),o.addEventListener("selectend",Y),o.addEventListener("squeeze",Y),o.addEventListener("squeezestart",Y),o.addEventListener("squeezeend",Y),o.addEventListener("end",z),o.addEventListener("inputsourceschange",H),O.xrCompatible!==!0&&await i.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(F),A&&"createProjectionLayer"in XRWebGLBinding.prototype){let ye=null,ke=null,tt=null;O.depth&&(tt=O.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,ye=O.stencil?br:ss,ke=O.stencil?Kl:wa);const qe={colorFormat:i.RGBA8,depthFormat:tt,scaleFactor:c};_=this.getBinding(),v=_.createProjectionLayer(qe),o.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),C=new Ra(v.textureWidth,v.textureHeight,{format:ha,type:ji,depthTexture:new Bo(v.textureWidth,v.textureHeight,ke,void 0,void 0,void 0,void 0,void 0,void 0,ye),stencilBuffer:O.stencil,colorSpace:e.outputColorSpace,samples:O.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const ye={antialias:O.antialias,alpha:!0,depth:O.depth,stencil:O.stencil,framebufferScaleFactor:c};S=new XRWebGLLayer(o,i,ye),o.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),C=new Ra(S.framebufferWidth,S.framebufferHeight,{format:ha,type:ji,colorSpace:e.outputColorSpace,stencilBuffer:O.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(m),h=null,u=await o.requestReferenceSpace(d),Ne.setContext(o),Ne.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function H(te){for(let Te=0;Te<te.removed.length;Te++){const ye=te.removed[Te],ke=L.indexOf(ye);ke>=0&&(L[ke]=null,N[ke].disconnect(ye))}for(let Te=0;Te<te.added.length;Te++){const ye=te.added[Te];let ke=L.indexOf(ye);if(ke===-1){for(let qe=0;qe<N.length;qe++)if(qe>=L.length){L.push(ye),ke=qe;break}else if(L[qe]===null){L[qe]=ye,ke=qe;break}if(ke===-1)break}const tt=N[ke];tt&&tt.connect(ye)}}const J=new ie,he=new ie;function Se(te,Te,ye){J.setFromMatrixPosition(Te.matrixWorld),he.setFromMatrixPosition(ye.matrixWorld);const ke=J.distanceTo(he),tt=Te.projectionMatrix.elements,qe=ye.projectionMatrix.elements,xt=tt[14]/(tt[10]-1),gt=tt[14]/(tt[10]+1),St=(tt[9]+1)/tt[5],Mt=(tt[9]-1)/tt[5],yt=(tt[8]-1)/tt[0],tn=(qe[8]+1)/qe[0],nn=xt*yt,on=xt*tn,fn=ke/(-yt+tn),ct=fn*-yt;if(Te.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(ct),te.translateZ(fn),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert(),tt[10]===-1)te.projectionMatrix.copy(Te.projectionMatrix),te.projectionMatrixInverse.copy(Te.projectionMatrixInverse);else{const Vt=xt+fn,Z=gt+fn,Ut=nn-ct,bt=on+(ke-ct),I=St*gt/Z*Vt,b=Mt*gt/Z*Vt;te.projectionMatrix.makePerspective(Ut,bt,I,b,Vt,Z),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}}function B(te,Te){Te===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(Te.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(o===null)return;let Te=te.near,ye=te.far;y.texture!==null&&(y.depthNear>0&&(Te=y.depthNear),y.depthFar>0&&(ye=y.depthFar)),Q.near=k.near=U.near=Te,Q.far=k.far=U.far=ye,(de!==Q.near||ue!==Q.far)&&(o.updateRenderState({depthNear:Q.near,depthFar:Q.far}),de=Q.near,ue=Q.far),Q.layers.mask=te.layers.mask|6,U.layers.mask=Q.layers.mask&-5,k.layers.mask=Q.layers.mask&-3;const ke=te.parent,tt=Q.cameras;B(Q,ke);for(let qe=0;qe<tt.length;qe++)B(tt[qe],ke);tt.length===2?Se(Q,U,k):Q.projectionMatrix.copy(U.projectionMatrix),q(te,Q,ke)};function q(te,Te,ye){ye===null?te.matrix.copy(Te.matrixWorld):(te.matrix.copy(ye.matrixWorld),te.matrix.invert(),te.matrix.multiply(Te.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(Te.projectionMatrix),te.projectionMatrixInverse.copy(Te.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=Ql*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return Q},this.getFoveation=function(){if(!(v===null&&S===null))return m},this.setFoveation=function(te){m=te,v!==null&&(v.fixedFoveation=te),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=te)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(Q)},this.getCameraTexture=function(te){return x[te]};let Ce=null;function Le(te,Te){if(g=Te.getViewerPose(h||u),E=Te,g!==null){const ye=g.views;S!==null&&(e.setRenderTargetFramebuffer(C,S.framebuffer),e.setRenderTarget(C));let ke=!1;ye.length!==Q.cameras.length&&(Q.cameras.length=0,ke=!0);for(let gt=0;gt<ye.length;gt++){const St=ye[gt];let Mt=null;if(S!==null)Mt=S.getViewport(St);else{const tn=_.getViewSubImage(v,St);Mt=tn.viewport,gt===0&&(e.setRenderTargetTextures(C,tn.colorTexture,tn.depthStencilTexture),e.setRenderTarget(C))}let yt=G[gt];yt===void 0&&(yt=new qi,yt.layers.enable(gt),yt.viewport=new gn,G[gt]=yt),yt.matrix.fromArray(St.transform.matrix),yt.matrix.decompose(yt.position,yt.quaternion,yt.scale),yt.projectionMatrix.fromArray(St.projectionMatrix),yt.projectionMatrixInverse.copy(yt.projectionMatrix).invert(),yt.viewport.set(Mt.x,Mt.y,Mt.width,Mt.height),gt===0&&(Q.matrix.copy(yt.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale)),ke===!0&&Q.cameras.push(yt)}const tt=o.enabledFeatures;if(tt&&tt.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&A){_=r.getBinding();const gt=_.getDepthInformation(ye[0]);gt&&gt.isValid&&gt.texture&&y.init(gt,o.renderState)}if(tt&&tt.includes("camera-access")&&A){e.state.unbindTexture(),_=r.getBinding();for(let gt=0;gt<ye.length;gt++){const St=ye[gt].camera;if(St){let Mt=x[St];Mt||(Mt=new rS,x[St]=Mt);const yt=_.getCameraImage(St);Mt.sourceTexture=yt}}}}for(let ye=0;ye<N.length;ye++){const ke=L[ye],tt=N[ye];ke!==null&&tt!==void 0&&tt.update(ke,Te,h||u)}Ce&&Ce(te,Te),Te.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:Te}),E=null}const Ne=new uS;Ne.setAnimationLoop(Le),this.setAnimationLoop=function(te){Ce=te},this.dispose=function(){}}}const mR=new yn,_S=new dt;_S.set(-1,0,0,0,1,0,0,0,1);function gR(a,e){function i(y,x){y.matrixAutoUpdate===!0&&y.updateMatrix(),x.value.copy(y.matrix)}function r(y,x){x.color.getRGB(y.fogColor.value,oS(a)),x.isFog?(y.fogNear.value=x.near,y.fogFar.value=x.far):x.isFogExp2&&(y.fogDensity.value=x.density)}function o(y,x,O,P,C){x.isNodeMaterial?x.uniformsNeedUpdate=!1:x.isMeshBasicMaterial?c(y,x):x.isMeshLambertMaterial?(c(y,x),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)):x.isMeshToonMaterial?(c(y,x),_(y,x)):x.isMeshPhongMaterial?(c(y,x),g(y,x),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)):x.isMeshStandardMaterial?(c(y,x),v(y,x),x.isMeshPhysicalMaterial&&S(y,x,C)):x.isMeshMatcapMaterial?(c(y,x),E(y,x)):x.isMeshDepthMaterial?c(y,x):x.isMeshDistanceMaterial?(c(y,x),A(y,x)):x.isMeshNormalMaterial?c(y,x):x.isLineBasicMaterial?(u(y,x),x.isLineDashedMaterial&&d(y,x)):x.isPointsMaterial?m(y,x,O,P):x.isSpriteMaterial?h(y,x):x.isShadowMaterial?(y.color.value.copy(x.color),y.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function c(y,x){y.opacity.value=x.opacity,x.color&&y.diffuse.value.copy(x.color),x.emissive&&y.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(y.map.value=x.map,i(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,i(x.alphaMap,y.alphaMapTransform)),x.bumpMap&&(y.bumpMap.value=x.bumpMap,i(x.bumpMap,y.bumpMapTransform),y.bumpScale.value=x.bumpScale,x.side===vi&&(y.bumpScale.value*=-1)),x.normalMap&&(y.normalMap.value=x.normalMap,i(x.normalMap,y.normalMapTransform),y.normalScale.value.copy(x.normalScale),x.side===vi&&y.normalScale.value.negate()),x.displacementMap&&(y.displacementMap.value=x.displacementMap,i(x.displacementMap,y.displacementMapTransform),y.displacementScale.value=x.displacementScale,y.displacementBias.value=x.displacementBias),x.emissiveMap&&(y.emissiveMap.value=x.emissiveMap,i(x.emissiveMap,y.emissiveMapTransform)),x.specularMap&&(y.specularMap.value=x.specularMap,i(x.specularMap,y.specularMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest);const O=e.get(x),P=O.envMap,C=O.envMapRotation;P&&(y.envMap.value=P,y.envMapRotation.value.setFromMatrix4(mR.makeRotationFromEuler(C)).transpose(),P.isCubeTexture&&P.isRenderTargetTexture===!1&&y.envMapRotation.value.premultiply(_S),y.reflectivity.value=x.reflectivity,y.ior.value=x.ior,y.refractionRatio.value=x.refractionRatio),x.lightMap&&(y.lightMap.value=x.lightMap,y.lightMapIntensity.value=x.lightMapIntensity,i(x.lightMap,y.lightMapTransform)),x.aoMap&&(y.aoMap.value=x.aoMap,y.aoMapIntensity.value=x.aoMapIntensity,i(x.aoMap,y.aoMapTransform))}function u(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,x.map&&(y.map.value=x.map,i(x.map,y.mapTransform))}function d(y,x){y.dashSize.value=x.dashSize,y.totalSize.value=x.dashSize+x.gapSize,y.scale.value=x.scale}function m(y,x,O,P){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.size.value=x.size*O,y.scale.value=P*.5,x.map&&(y.map.value=x.map,i(x.map,y.uvTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,i(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function h(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.rotation.value=x.rotation,x.map&&(y.map.value=x.map,i(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,i(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function g(y,x){y.specular.value.copy(x.specular),y.shininess.value=Math.max(x.shininess,1e-4)}function _(y,x){x.gradientMap&&(y.gradientMap.value=x.gradientMap)}function v(y,x){y.metalness.value=x.metalness,x.metalnessMap&&(y.metalnessMap.value=x.metalnessMap,i(x.metalnessMap,y.metalnessMapTransform)),y.roughness.value=x.roughness,x.roughnessMap&&(y.roughnessMap.value=x.roughnessMap,i(x.roughnessMap,y.roughnessMapTransform)),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)}function S(y,x,O){y.ior.value=x.ior,x.sheen>0&&(y.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),y.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(y.sheenColorMap.value=x.sheenColorMap,i(x.sheenColorMap,y.sheenColorMapTransform)),x.sheenRoughnessMap&&(y.sheenRoughnessMap.value=x.sheenRoughnessMap,i(x.sheenRoughnessMap,y.sheenRoughnessMapTransform))),x.clearcoat>0&&(y.clearcoat.value=x.clearcoat,y.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(y.clearcoatMap.value=x.clearcoatMap,i(x.clearcoatMap,y.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,i(x.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(y.clearcoatNormalMap.value=x.clearcoatNormalMap,i(x.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===vi&&y.clearcoatNormalScale.value.negate())),x.dispersion>0&&(y.dispersion.value=x.dispersion),x.iridescence>0&&(y.iridescence.value=x.iridescence,y.iridescenceIOR.value=x.iridescenceIOR,y.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(y.iridescenceMap.value=x.iridescenceMap,i(x.iridescenceMap,y.iridescenceMapTransform)),x.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=x.iridescenceThicknessMap,i(x.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),x.transmission>0&&(y.transmission.value=x.transmission,y.transmissionSamplerMap.value=O.texture,y.transmissionSamplerSize.value.set(O.width,O.height),x.transmissionMap&&(y.transmissionMap.value=x.transmissionMap,i(x.transmissionMap,y.transmissionMapTransform)),y.thickness.value=x.thickness,x.thicknessMap&&(y.thicknessMap.value=x.thicknessMap,i(x.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=x.attenuationDistance,y.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(y.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(y.anisotropyMap.value=x.anisotropyMap,i(x.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=x.specularIntensity,y.specularColor.value.copy(x.specularColor),x.specularColorMap&&(y.specularColorMap.value=x.specularColorMap,i(x.specularColorMap,y.specularColorMapTransform)),x.specularIntensityMap&&(y.specularIntensityMap.value=x.specularIntensityMap,i(x.specularIntensityMap,y.specularIntensityMapTransform))}function E(y,x){x.matcap&&(y.matcap.value=x.matcap)}function A(y,x){const O=e.get(x).light;y.referencePosition.value.setFromMatrixPosition(O.matrixWorld),y.nearDistance.value=O.shadow.camera.near,y.farDistance.value=O.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function _R(a,e,i,r){let o={},c={},u=[];const d=a.getParameter(a.MAX_UNIFORM_BUFFER_BINDINGS);function m(C,N){const L=N.program;r.uniformBlockBinding(C,L)}function h(C,N){let L=o[C.id];L===void 0&&(y(C),L=g(C),o[C.id]=L,C.addEventListener("dispose",O));const F=N.program;r.updateUBOMapping(C,F);const T=e.render.frame;c[C.id]!==T&&(v(C),c[C.id]=T)}function g(C){const N=_();C.__bindingPointIndex=N;const L=a.createBuffer(),F=C.__size,T=C.usage;return a.bindBuffer(a.UNIFORM_BUFFER,L),a.bufferData(a.UNIFORM_BUFFER,F,T),a.bindBuffer(a.UNIFORM_BUFFER,null),a.bindBufferBase(a.UNIFORM_BUFFER,N,L),L}function _(){for(let C=0;C<d;C++)if(u.indexOf(C)===-1)return u.push(C),C;return It("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(C){const N=o[C.id],L=C.uniforms,F=C.__cache;a.bindBuffer(a.UNIFORM_BUFFER,N);for(let T=0,U=L.length;T<U;T++){const k=L[T];if(Array.isArray(k))for(let G=0,Q=k.length;G<Q;G++)S(k[G],T,G,F);else S(k,T,0,F)}a.bindBuffer(a.UNIFORM_BUFFER,null)}function S(C,N,L,F){if(A(C,N,L,F)===!0){const T=C.__offset,U=C.value;if(Array.isArray(U)){let k=0;for(let G=0;G<U.length;G++){const Q=U[G],de=x(Q);E(Q,C.__data,k),typeof Q!="number"&&typeof Q!="boolean"&&!Q.isMatrix3&&!ArrayBuffer.isView(Q)&&(k+=de.storage/Float32Array.BYTES_PER_ELEMENT)}}else E(U,C.__data,0);a.bufferSubData(a.UNIFORM_BUFFER,T,C.__data)}}function E(C,N,L){typeof C=="number"||typeof C=="boolean"?N[0]=C:C.isMatrix3?(N[0]=C.elements[0],N[1]=C.elements[1],N[2]=C.elements[2],N[3]=0,N[4]=C.elements[3],N[5]=C.elements[4],N[6]=C.elements[5],N[7]=0,N[8]=C.elements[6],N[9]=C.elements[7],N[10]=C.elements[8],N[11]=0):ArrayBuffer.isView(C)?N.set(new C.constructor(C.buffer,C.byteOffset,N.length)):C.toArray(N,L)}function A(C,N,L,F){const T=C.value,U=N+"_"+L;if(F[U]===void 0)return typeof T=="number"||typeof T=="boolean"?F[U]=T:ArrayBuffer.isView(T)?F[U]=T.slice():F[U]=T.clone(),!0;{const k=F[U];if(typeof T=="number"||typeof T=="boolean"){if(k!==T)return F[U]=T,!0}else{if(ArrayBuffer.isView(T))return!0;if(k.equals(T)===!1)return k.copy(T),!0}}return!1}function y(C){const N=C.uniforms;let L=0;const F=16;for(let U=0,k=N.length;U<k;U++){const G=Array.isArray(N[U])?N[U]:[N[U]];for(let Q=0,de=G.length;Q<de;Q++){const ue=G[Q],Y=Array.isArray(ue.value)?ue.value:[ue.value];for(let z=0,H=Y.length;z<H;z++){const J=Y[z],he=x(J),Se=L%F,B=Se%he.boundary,q=Se+B;L+=B,q!==0&&F-q<he.storage&&(L+=F-q),ue.__data=new Float32Array(he.storage/Float32Array.BYTES_PER_ELEMENT),ue.__offset=L,L+=he.storage}}}const T=L%F;return T>0&&(L+=F-T),C.__size=L,C.__cache={},this}function x(C){const N={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(N.boundary=4,N.storage=4):C.isVector2?(N.boundary=8,N.storage=8):C.isVector3||C.isColor?(N.boundary=16,N.storage=12):C.isVector4?(N.boundary=16,N.storage=16):C.isMatrix3?(N.boundary=48,N.storage=48):C.isMatrix4?(N.boundary=64,N.storage=64):C.isTexture?rt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(C)?(N.boundary=16,N.storage=C.byteLength):rt("WebGLRenderer: Unsupported uniform value type.",C),N}function O(C){const N=C.target;N.removeEventListener("dispose",O);const L=u.indexOf(N.__bindingPointIndex);u.splice(L,1),a.deleteBuffer(o[N.id]),delete o[N.id],delete c[N.id]}function P(){for(const C in o)a.deleteBuffer(o[C]);u=[],o={},c={}}return{bind:m,update:h,dispose:P}}const vR=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ma=null;function xR(){return Ma===null&&(Ma=new cb(vR,16,16,Ar,as),Ma.name="DFG_LUT",Ma.minFilter=_n,Ma.magFilter=_n,Ma.wrapS=da,Ma.wrapT=da,Ma.generateMipmaps=!1,Ma.needsUpdate=!0),Ma}class SR{constructor(e={}){const{canvas:i=bE(),context:r=null,depth:o=!0,stencil:c=!1,alpha:u=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:h=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:v=!1,outputBufferType:S=ji}=e;this.isWebGLRenderer=!0;let E;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=r.getContextAttributes().alpha}else E=u;const A=S,y=new Set([em,$p,Jp]),x=new Set([ji,wa,Zl,Kl,Kp,Qp]),O=new Uint32Array(4),P=new Int32Array(4),C=new ie;let N=null,L=null;const F=[],T=[];let U=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Aa,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const k=this;let G=!1,Q=null,de=null,ue=null,Y=null;this._outputColorSpace=ti;let z=0,H=0,J=null,he=-1,Se=null;const B=new gn,q=new gn;let Ce=null;const Le=new kt(0);let Ne=0,te=i.width,Te=i.height,ye=1,ke=null,tt=null;const qe=new gn(0,0,te,Te),xt=new gn(0,0,te,Te);let gt=!1;const St=new aS;let Mt=!1,yt=!1;const tn=new yn,nn=new ie,on=new gn,fn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ct=!1;function Vt(){return J===null?ye:1}let Z=r;function Ut(R,K){return i.getContext(R,K)}try{const R={alpha:!0,depth:o,stencil:c,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:h,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${jp}`),i.addEventListener("webglcontextlost",Xt,!1),i.addEventListener("webglcontextrestored",Ht,!1),i.addEventListener("webglcontextcreationerror",jn,!1),Z===null){const K="webgl2";if(Z=Ut(K,R),Z===null)throw Ut(K)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(R){throw It("WebGLRenderer: "+R.message),R}let bt,I,b,ee,le,me,Pe,Oe,ge,_e,Ie,Ge,ze,we,Ke,Qe,it,X,De,ve,Fe,He,Ae;function Je(){bt=new xA(Z),bt.init(),Fe=new uR(Z,bt),I=new fA(Z,bt,e,Fe),b=new lR(Z,bt),I.reversedDepthBuffer&&v&&b.buffers.depth.setReversed(!0),de=Z.createFramebuffer(),ue=Z.createFramebuffer(),Y=Z.createFramebuffer(),ee=new yA(Z),le=new j2,me=new cR(Z,bt,b,le,I,Fe,ee),Pe=new vA(k),Oe=new Ab(Z),He=new cA(Z,Oe),ge=new SA(Z,Oe,ee,He),_e=new bA(Z,ge,Oe,He,ee),X=new EA(Z,I,me),Ke=new dA(le),Ie=new q2(k,Pe,bt,I,He,Ke),Ge=new gR(k,le),ze=new K2,we=new nR(bt),it=new lA(k,Pe,b,_e,E,m),Qe=new oR(k,_e,I),Ae=new _R(Z,ee,I,b),De=new uA(Z,bt,ee),ve=new MA(Z,bt,ee),ee.programs=Ie.programs,k.capabilities=I,k.extensions=bt,k.properties=le,k.renderLists=ze,k.shadowMap=Qe,k.state=b,k.info=ee}Je(),A!==ji&&(U=new AA(A,i.width,i.height,d,o,c));const je=new pR(k,Z);this.xr=je,this.getContext=function(){return Z},this.getContextAttributes=function(){return Z.getContextAttributes()},this.forceContextLoss=function(){const R=bt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=bt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return ye},this.setPixelRatio=function(R){R!==void 0&&(ye=R,this.setSize(te,Te,!1))},this.getSize=function(R){return R.set(te,Te)},this.setSize=function(R,K,ce=!0){if(je.isPresenting){rt("WebGLRenderer: Can't change size while VR device is presenting.");return}te=R,Te=K,i.width=Math.floor(R*ye),i.height=Math.floor(K*ye),ce===!0&&(i.style.width=R+"px",i.style.height=K+"px"),U!==null&&U.setSize(i.width,i.height),this.setViewport(0,0,R,K)},this.getDrawingBufferSize=function(R){return R.set(te*ye,Te*ye).floor()},this.setDrawingBufferSize=function(R,K,ce){te=R,Te=K,ye=ce,i.width=Math.floor(R*ce),i.height=Math.floor(K*ce),this.setViewport(0,0,R,K)},this.setEffects=function(R){if(A===ji){It("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let K=0;K<R.length;K++)if(R[K].isOutputPass===!0){rt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}U.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(B)},this.getViewport=function(R){return R.copy(qe)},this.setViewport=function(R,K,ce,se){R.isVector4?qe.set(R.x,R.y,R.z,R.w):qe.set(R,K,ce,se),b.viewport(B.copy(qe).multiplyScalar(ye).round())},this.getScissor=function(R){return R.copy(xt)},this.setScissor=function(R,K,ce,se){R.isVector4?xt.set(R.x,R.y,R.z,R.w):xt.set(R,K,ce,se),b.scissor(q.copy(xt).multiplyScalar(ye).round())},this.getScissorTest=function(){return gt},this.setScissorTest=function(R){b.setScissorTest(gt=R)},this.setOpaqueSort=function(R){ke=R},this.setTransparentSort=function(R){tt=R},this.getClearColor=function(R){return R.copy(it.getClearColor())},this.setClearColor=function(){it.setClearColor(...arguments)},this.getClearAlpha=function(){return it.getClearAlpha()},this.setClearAlpha=function(){it.setClearAlpha(...arguments)},this.clear=function(R=!0,K=!0,ce=!0){let se=0;if(R){let ae=!1;if(J!==null){const Ve=J.texture.format;ae=y.has(Ve)}if(ae){const Ve=J.texture.type,j=x.has(Ve),ne=it.getClearColor(),xe=it.getClearAlpha(),be=ne.r,Be=ne.g,Ze=ne.b;j?(O[0]=be,O[1]=Be,O[2]=Ze,O[3]=xe,Z.clearBufferuiv(Z.COLOR,0,O)):(P[0]=be,P[1]=Be,P[2]=Ze,P[3]=xe,Z.clearBufferiv(Z.COLOR,0,P))}else se|=Z.COLOR_BUFFER_BIT}K&&(se|=Z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ce&&(se|=Z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),se!==0&&Z.clear(se)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(R){R.setRenderer(this),Q=R},this.dispose=function(){i.removeEventListener("webglcontextlost",Xt,!1),i.removeEventListener("webglcontextrestored",Ht,!1),i.removeEventListener("webglcontextcreationerror",jn,!1),it.dispose(),ze.dispose(),we.dispose(),le.dispose(),Pe.dispose(),_e.dispose(),He.dispose(),Ae.dispose(),Ie.dispose(),je.dispose(),je.removeEventListener("sessionstart",ln),je.removeEventListener("sessionend",Dn),Ln.stop()};function Xt(R){R.preventDefault(),pv("WebGLRenderer: Context Lost."),G=!0}function Ht(){pv("WebGLRenderer: Context Restored."),G=!1;const R=ee.autoReset,K=Qe.enabled,ce=Qe.autoUpdate,se=Qe.needsUpdate,ae=Qe.type;Je(),ee.autoReset=R,Qe.enabled=K,Qe.autoUpdate=ce,Qe.needsUpdate=se,Qe.type=ae}function jn(R){It("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Hn(R){const K=R.target;K.removeEventListener("dispose",Hn),In(K)}function In(R){ii(R),le.remove(R)}function ii(R){const K=le.get(R).programs;K!==void 0&&(K.forEach(function(ce){Ie.releaseProgram(ce)}),R.isShaderMaterial&&Ie.releaseShaderCache(R))}this.renderBufferDirect=function(R,K,ce,se,ae,Ve){K===null&&(K=fn);const j=ae.isMesh&&ae.matrixWorld.determinantAffine()<0,ne=ea(R,K,ce,se,ae);b.setMaterial(se,j);let xe=ce.index,be=1;if(se.wireframe===!0){if(xe=ge.getWireframeAttribute(ce),xe===void 0)return;be=2}const Be=ce.drawRange,Ze=ce.attributes.position;let Ye=Be.start*be,lt=(Be.start+Be.count)*be;Ve!==null&&(Ye=Math.max(Ye,Ve.start*be),lt=Math.min(lt,(Ve.start+Ve.count)*be)),xe!==null?(Ye=Math.max(Ye,0),lt=Math.min(lt,xe.count)):Ze!=null&&(Ye=Math.max(Ye,0),lt=Math.min(lt,Ze.count));const Tt=lt-Ye;if(Tt<0||Tt===1/0)return;He.setup(ae,se,ne,ce,xe);let st,ht=De;if(xe!==null&&(st=Oe.get(xe),ht=ve,ht.setIndex(st)),ae.isMesh)se.wireframe===!0?(b.setLineWidth(se.wireframeLinewidth*Vt()),ht.setMode(Z.LINES)):ht.setMode(Z.TRIANGLES);else if(ae.isLine){let ut=se.linewidth;ut===void 0&&(ut=1),b.setLineWidth(ut*Vt()),ae.isLineSegments?ht.setMode(Z.LINES):ae.isLineLoop?ht.setMode(Z.LINE_LOOP):ht.setMode(Z.LINE_STRIP)}else ae.isPoints?ht.setMode(Z.POINTS):ae.isSprite&&ht.setMode(Z.TRIANGLES);if(ae.isBatchedMesh)if(bt.get("WEBGL_multi_draw"))ht.renderMultiDraw(ae._multiDrawStarts,ae._multiDrawCounts,ae._multiDrawCount);else{const ut=ae._multiDrawStarts,Ue=ae._multiDrawCounts,vn=ae._multiDrawCount,ot=xe?Oe.get(xe).bytesPerElement:1,hn=le.get(se).currentProgram.getUniforms();for(let Zn=0;Zn<vn;Zn++)hn.setValue(Z,"_gl_DrawID",Zn),ht.render(ut[Zn]/ot,Ue[Zn])}else if(ae.isInstancedMesh)ht.renderInstances(Ye,Tt,ae.count);else if(ce.isInstancedBufferGeometry){const ut=ce._maxInstanceCount!==void 0?ce._maxInstanceCount:1/0,Ue=Math.min(ce.instanceCount,ut);ht.renderInstances(Ye,Tt,Ue)}else ht.render(Ye,Tt)};function En(R,K,ce){R.transparent===!0&&R.side===Ea&&R.forceSinglePass===!1?(R.side=vi,R.needsUpdate=!0,$i(R,K,ce),R.side=is,R.needsUpdate=!0,$i(R,K,ce),R.side=Ea):$i(R,K,ce)}this.compile=function(R,K,ce=null){ce===null&&(ce=R),L=we.get(ce),L.init(K),T.push(L),ce.traverseVisible(function(ae){ae.isLight&&ae.layers.test(K.layers)&&(L.pushLight(ae),ae.castShadow&&L.pushShadow(ae))}),R!==ce&&R.traverseVisible(function(ae){ae.isLight&&ae.layers.test(K.layers)&&(L.pushLight(ae),ae.castShadow&&L.pushShadow(ae))}),L.setupLights();const se=new Set;return R.traverse(function(ae){if(!(ae.isMesh||ae.isPoints||ae.isLine||ae.isSprite))return;const Ve=ae.material;if(Ve)if(Array.isArray(Ve))for(let j=0;j<Ve.length;j++){const ne=Ve[j];En(ne,ce,ae),se.add(ne)}else En(Ve,ce,ae),se.add(Ve)}),L=T.pop(),se},this.compileAsync=function(R,K,ce=null){const se=this.compile(R,K,ce);return new Promise(ae=>{function Ve(){if(se.forEach(function(j){le.get(j).currentProgram.isReady()&&se.delete(j)}),se.size===0){ae(R);return}setTimeout(Ve,10)}bt.get("KHR_parallel_shader_compile")!==null?Ve():setTimeout(Ve,10)})};let rs=null;function Oi(R){rs&&rs(R)}function ln(){Ln.stop()}function Dn(){Ln.start()}const Ln=new uS;Ln.setAnimationLoop(Oi),typeof self<"u"&&Ln.setContext(self),this.setAnimationLoop=function(R){rs=R,je.setAnimationLoop(R),R===null?Ln.stop():Ln.start()},je.addEventListener("sessionstart",ln),je.addEventListener("sessionend",Dn),this.render=function(R,K){if(K!==void 0&&K.isCamera!==!0){It("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;Q!==null&&Q.renderStart(R,K);const ce=je.enabled===!0&&je.isPresenting===!0,se=U!==null&&(J===null||ce)&&U.begin(k,J);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),je.enabled===!0&&je.isPresenting===!0&&(U===null||U.isCompositing()===!1)&&(je.cameraAutoUpdate===!0&&je.updateCamera(K),K=je.getCamera()),R.isScene===!0&&R.onBeforeRender(k,R,K,J),L=we.get(R,T.length),L.init(K),L.state.textureUnits=me.getTextureUnits(),T.push(L),tn.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),St.setFromProjectionMatrix(tn,Ta,K.reversedDepth),yt=this.localClippingEnabled,Mt=Ke.init(this.clippingPlanes,yt),N=ze.get(R,F.length),N.init(),F.push(N),je.enabled===!0&&je.isPresenting===!0){const j=k.xr.getDepthSensingMesh();j!==null&&Pi(j,K,-1/0,k.sortObjects)}Pi(R,K,0,k.sortObjects),N.finish(),k.sortObjects===!0&&N.sort(ke,tt,K.reversedDepth),ct=je.enabled===!1||je.isPresenting===!1||je.hasDepthSensing()===!1,ct&&it.addToRenderList(N,R),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Mt===!0&&Ke.beginShadows();const ae=L.state.shadowsArray;if(Qe.render(ae,R,K),Mt===!0&&Ke.endShadows(),(se&&U.hasRenderPass())===!1){const j=N.opaque,ne=N.transmissive;if(L.setupLights(),K.isArrayCamera){const xe=K.cameras;if(ne.length>0)for(let be=0,Be=xe.length;be<Be;be++){const Ze=xe[be];Qs(j,ne,R,Ze)}ct&&it.render(R);for(let be=0,Be=xe.length;be<Be;be++){const Ze=xe[be];os(N,R,Ze,Ze.viewport)}}else ne.length>0&&Qs(j,ne,R,K),ct&&it.render(R),os(N,R,K)}J!==null&&H===0&&(me.updateMultisampleRenderTarget(J),me.updateRenderTargetMipmap(J)),se&&U.end(k),R.isScene===!0&&R.onAfterRender(k,R,K),He.resetDefaultState(),he=-1,Se=null,T.pop(),T.length>0?(L=T[T.length-1],me.setTextureUnits(L.state.textureUnits),Mt===!0&&Ke.setGlobalState(k.clippingPlanes,L.state.camera)):L=null,F.pop(),F.length>0?N=F[F.length-1]:N=null,Q!==null&&Q.renderEnd()};function Pi(R,K,ce,se){if(R.visible===!1)return;if(R.layers.test(K.layers)){if(R.isGroup)ce=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(K);else if(R.isLightProbeGrid)L.pushLightProbeGrid(R);else if(R.isLight)L.pushLight(R),R.castShadow&&L.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||St.intersectsSprite(R)){se&&on.setFromMatrixPosition(R.matrixWorld).applyMatrix4(tn);const j=_e.update(R),ne=R.material;ne.visible&&N.push(R,j,ne,ce,on.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||St.intersectsObject(R))){const j=_e.update(R),ne=R.material;if(se&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),on.copy(R.boundingSphere.center)):(j.boundingSphere===null&&j.computeBoundingSphere(),on.copy(j.boundingSphere.center)),on.applyMatrix4(R.matrixWorld).applyMatrix4(tn)),Array.isArray(ne)){const xe=j.groups;for(let be=0,Be=xe.length;be<Be;be++){const Ze=xe[be],Ye=ne[Ze.materialIndex];Ye&&Ye.visible&&N.push(R,j,Ye,ce,on.z,Ze)}}else ne.visible&&N.push(R,j,ne,ce,on.z,null)}}const Ve=R.children;for(let j=0,ne=Ve.length;j<ne;j++)Pi(Ve[j],K,ce,se)}function os(R,K,ce,se){const{opaque:ae,transmissive:Ve,transparent:j}=R;L.setupLightsView(ce),Mt===!0&&Ke.setGlobalState(k.clippingPlanes,ce),se&&b.viewport(B.copy(se)),ae.length>0&&pa(ae,K,ce),Ve.length>0&&pa(Ve,K,ce),j.length>0&&pa(j,K,ce),b.buffers.depth.setTest(!0),b.buffers.depth.setMask(!0),b.buffers.color.setMask(!0),b.setPolygonOffset(!1)}function Qs(R,K,ce,se){if((ce.isScene===!0?ce.overrideMaterial:null)!==null)return;if(L.state.transmissionRenderTarget[se.id]===void 0){const Ye=bt.has("EXT_color_buffer_half_float")||bt.has("EXT_color_buffer_float");L.state.transmissionRenderTarget[se.id]=new Ra(1,1,{generateMipmaps:!0,type:Ye?as:ji,minFilter:Ws,samples:Math.max(4,I.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Lt.workingColorSpace})}const Ve=L.state.transmissionRenderTarget[se.id],j=se.viewport||B;Ve.setSize(j.z*k.transmissionResolutionScale,j.w*k.transmissionResolutionScale);const ne=k.getRenderTarget(),xe=k.getActiveCubeFace(),be=k.getActiveMipmapLevel();k.setRenderTarget(Ve),k.getClearColor(Le),Ne=k.getClearAlpha(),Ne<1&&k.setClearColor(16777215,.5),k.clear(),ct&&it.render(ce);const Be=k.toneMapping;k.toneMapping=Aa;const Ze=se.viewport;if(se.viewport!==void 0&&(se.viewport=void 0),L.setupLightsView(se),Mt===!0&&Ke.setGlobalState(k.clippingPlanes,se),pa(R,ce,se),me.updateMultisampleRenderTarget(Ve),me.updateRenderTargetMipmap(Ve),bt.has("WEBGL_multisampled_render_to_texture")===!1){let Ye=!1;for(let lt=0,Tt=K.length;lt<Tt;lt++){const st=K[lt],{object:ht,geometry:ut,material:Ue,group:vn}=st;if(Ue.side===Ea&&ht.layers.test(se.layers)){const ot=Ue.side;Ue.side=vi,Ue.needsUpdate=!0,Ji(ht,ce,se,ut,Ue,vn),Ue.side=ot,Ue.needsUpdate=!0,Ye=!0}}Ye===!0&&(me.updateMultisampleRenderTarget(Ve),me.updateRenderTargetMipmap(Ve))}k.setRenderTarget(ne,xe,be),k.setClearColor(Le,Ne),Ze!==void 0&&(se.viewport=Ze),k.toneMapping=Be}function pa(R,K,ce){const se=K.isScene===!0?K.overrideMaterial:null;for(let ae=0,Ve=R.length;ae<Ve;ae++){const j=R[ae],{object:ne,geometry:xe,group:be}=j;let Be=j.material;Be.allowOverride===!0&&se!==null&&(Be=se),ne.layers.test(ce.layers)&&Ji(ne,K,ce,xe,Be,be)}}function Ji(R,K,ce,se,ae,Ve){R.onBeforeRender(k,K,ce,se,ae,Ve),R.modelViewMatrix.multiplyMatrices(ce.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),ae.onBeforeRender(k,K,ce,se,R,Ve),ae.transparent===!0&&ae.side===Ea&&ae.forceSinglePass===!1?(ae.side=vi,ae.needsUpdate=!0,k.renderBufferDirect(ce,K,se,ae,R,Ve),ae.side=is,ae.needsUpdate=!0,k.renderBufferDirect(ce,K,se,ae,R,Ve),ae.side=Ea):k.renderBufferDirect(ce,K,se,ae,R,Ve),R.onAfterRender(k,K,ce,se,ae,Ve)}function $i(R,K,ce){K.isScene!==!0&&(K=fn);const se=le.get(R),ae=L.state.lights,Ve=L.state.shadowsArray,j=ae.state.version,ne=Ie.getParameters(R,ae.state,Ve,K,ce,L.state.lightProbeGridArray),xe=Ie.getProgramCacheKey(ne);let be=se.programs;se.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?K.environment:null,se.fog=K.fog;const Be=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;se.envMap=Pe.get(R.envMap||se.environment,Be),se.envMapRotation=se.environment!==null&&R.envMap===null?K.environmentRotation:R.envMapRotation,be===void 0&&(R.addEventListener("dispose",Hn),be=new Map,se.programs=be);let Ze=be.get(xe);if(Ze!==void 0){if(se.currentProgram===Ze&&se.lightsStateVersion===j)return Ii(R,ne),Ze}else ne.uniforms=Ie.getUniforms(R),Q!==null&&R.isNodeMaterial&&Q.build(R,ce,ne),R.onBeforeCompile(ne,k),Ze=Ie.acquireProgram(ne,xe),be.set(xe,Ze),se.uniforms=ne.uniforms;const Ye=se.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ye.clippingPlanes=Ke.uniform),Ii(R,ne),se.needsLights=Js(R),se.lightsStateVersion=j,se.needsLights&&(Ye.ambientLightColor.value=ae.state.ambient,Ye.lightProbe.value=ae.state.probe,Ye.directionalLights.value=ae.state.directional,Ye.directionalLightShadows.value=ae.state.directionalShadow,Ye.spotLights.value=ae.state.spot,Ye.spotLightShadows.value=ae.state.spotShadow,Ye.rectAreaLights.value=ae.state.rectArea,Ye.ltc_1.value=ae.state.rectAreaLTC1,Ye.ltc_2.value=ae.state.rectAreaLTC2,Ye.pointLights.value=ae.state.point,Ye.pointLightShadows.value=ae.state.pointShadow,Ye.hemisphereLights.value=ae.state.hemi,Ye.directionalShadowMatrix.value=ae.state.directionalShadowMatrix,Ye.spotLightMatrix.value=ae.state.spotLightMatrix,Ye.spotLightMap.value=ae.state.spotLightMap,Ye.pointShadowMatrix.value=ae.state.pointShadowMatrix),se.lightProbeGrid=L.state.lightProbeGridArray.length>0,se.currentProgram=Ze,se.uniformsList=null,Ze}function ui(R){if(R.uniformsList===null){const K=R.currentProgram.getUniforms();R.uniformsList=Fu.seqWithValue(K.seq,R.uniforms)}return R.uniformsList}function Ii(R,K){const ce=le.get(R);ce.outputColorSpace=K.outputColorSpace,ce.batching=K.batching,ce.batchingColor=K.batchingColor,ce.instancing=K.instancing,ce.instancingColor=K.instancingColor,ce.instancingMorph=K.instancingMorph,ce.skinning=K.skinning,ce.morphTargets=K.morphTargets,ce.morphNormals=K.morphNormals,ce.morphColors=K.morphColors,ce.morphTargetsCount=K.morphTargetsCount,ce.numClippingPlanes=K.numClippingPlanes,ce.numIntersection=K.numClipIntersection,ce.vertexAlphas=K.vertexAlphas,ce.vertexTangents=K.vertexTangents,ce.toneMapping=K.toneMapping}function ma(R,K){if(R.length===0)return null;if(R.length===1)return R[0].texture!==null?R[0]:null;C.setFromMatrixPosition(K.matrixWorld);for(let ce=0,se=R.length;ce<se;ce++){const ae=R[ce];if(ae.texture!==null&&ae.boundingBox.containsPoint(C))return ae}return null}function ea(R,K,ce,se,ae){K.isScene!==!0&&(K=fn),me.resetTextureUnits();const Ve=K.fog,j=se.isMeshStandardMaterial||se.isMeshLambertMaterial||se.isMeshPhongMaterial?K.environment:null,ne=J===null?k.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:Lt.workingColorSpace,xe=se.isMeshStandardMaterial||se.isMeshLambertMaterial&&!se.envMap||se.isMeshPhongMaterial&&!se.envMap,be=Pe.get(se.envMap||j,xe),Be=se.vertexColors===!0&&!!ce.attributes.color&&ce.attributes.color.itemSize===4,Ze=!!ce.attributes.tangent&&(!!se.normalMap||se.anisotropy>0),Ye=!!ce.morphAttributes.position,lt=!!ce.morphAttributes.normal,Tt=!!ce.morphAttributes.color;let st=Aa;se.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(st=k.toneMapping);const ht=ce.morphAttributes.position||ce.morphAttributes.normal||ce.morphAttributes.color,ut=ht!==void 0?ht.length:0,Ue=le.get(se),vn=L.state.lights;if(Mt===!0&&(yt===!0||R!==Se)){const Ot=R===Se&&se.id===he;Ke.setState(se,R,Ot)}let ot=!1;se.version===Ue.__version?(Ue.needsLights&&Ue.lightsStateVersion!==vn.state.version||Ue.outputColorSpace!==ne||ae.isBatchedMesh&&Ue.batching===!1||!ae.isBatchedMesh&&Ue.batching===!0||ae.isBatchedMesh&&Ue.batchingColor===!0&&ae.colorTexture===null||ae.isBatchedMesh&&Ue.batchingColor===!1&&ae.colorTexture!==null||ae.isInstancedMesh&&Ue.instancing===!1||!ae.isInstancedMesh&&Ue.instancing===!0||ae.isSkinnedMesh&&Ue.skinning===!1||!ae.isSkinnedMesh&&Ue.skinning===!0||ae.isInstancedMesh&&Ue.instancingColor===!0&&ae.instanceColor===null||ae.isInstancedMesh&&Ue.instancingColor===!1&&ae.instanceColor!==null||ae.isInstancedMesh&&Ue.instancingMorph===!0&&ae.morphTexture===null||ae.isInstancedMesh&&Ue.instancingMorph===!1&&ae.morphTexture!==null||Ue.envMap!==be||se.fog===!0&&Ue.fog!==Ve||Ue.numClippingPlanes!==void 0&&(Ue.numClippingPlanes!==Ke.numPlanes||Ue.numIntersection!==Ke.numIntersection)||Ue.vertexAlphas!==Be||Ue.vertexTangents!==Ze||Ue.morphTargets!==Ye||Ue.morphNormals!==lt||Ue.morphColors!==Tt||Ue.toneMapping!==st||Ue.morphTargetsCount!==ut||!!Ue.lightProbeGrid!=L.state.lightProbeGridArray.length>0)&&(ot=!0):(ot=!0,Ue.__version=se.version);let hn=Ue.currentProgram;ot===!0&&(hn=$i(se,K,ae),Q&&se.isNodeMaterial&&Q.onUpdateProgram(se,hn,Ue));let Zn=!1,ai=!1,Kn=!1;const Nt=hn.getUniforms(),jt=Ue.uniforms;if(b.useProgram(hn.program)&&(Zn=!0,ai=!0,Kn=!0),se.id!==he&&(he=se.id,ai=!0),Ue.needsLights){const Ot=ma(L.state.lightProbeGridArray,ae);Ue.lightProbeGrid!==Ot&&(Ue.lightProbeGrid=Ot,ai=!0)}if(Zn||Se!==R){b.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Nt.setValue(Z,"projectionMatrix",R.projectionMatrix),Nt.setValue(Z,"viewMatrix",R.matrixWorldInverse);const fi=Nt.map.cameraPosition;fi!==void 0&&fi.setValue(Z,nn.setFromMatrixPosition(R.matrixWorld)),I.logarithmicDepthBuffer&&Nt.setValue(Z,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(se.isMeshPhongMaterial||se.isMeshToonMaterial||se.isMeshLambertMaterial||se.isMeshBasicMaterial||se.isMeshStandardMaterial||se.isShaderMaterial)&&Nt.setValue(Z,"isOrthographic",R.isOrthographicCamera===!0),Se!==R&&(Se=R,ai=!0,Kn=!0)}if(Ue.needsLights&&(vn.state.directionalShadowMap.length>0&&Nt.setValue(Z,"directionalShadowMap",vn.state.directionalShadowMap,me),vn.state.spotShadowMap.length>0&&Nt.setValue(Z,"spotShadowMap",vn.state.spotShadowMap,me),vn.state.pointShadowMap.length>0&&Nt.setValue(Z,"pointShadowMap",vn.state.pointShadowMap,me)),ae.isSkinnedMesh){Nt.setOptional(Z,ae,"bindMatrix"),Nt.setOptional(Z,ae,"bindMatrixInverse");const Ot=ae.skeleton;Ot&&(Ot.boneTexture===null&&Ot.computeBoneTexture(),Nt.setValue(Z,"boneTexture",Ot.boneTexture,me))}ae.isBatchedMesh&&(Nt.setOptional(Z,ae,"batchingTexture"),Nt.setValue(Z,"batchingTexture",ae._matricesTexture,me),Nt.setOptional(Z,ae,"batchingIdTexture"),Nt.setValue(Z,"batchingIdTexture",ae._indirectTexture,me),Nt.setOptional(Z,ae,"batchingColorTexture"),ae._colorsTexture!==null&&Nt.setValue(Z,"batchingColorTexture",ae._colorsTexture,me));const si=ce.morphAttributes;if((si.position!==void 0||si.normal!==void 0||si.color!==void 0)&&X.update(ae,ce,hn),(ai||Ue.receiveShadow!==ae.receiveShadow)&&(Ue.receiveShadow=ae.receiveShadow,Nt.setValue(Z,"receiveShadow",ae.receiveShadow)),(se.isMeshStandardMaterial||se.isMeshLambertMaterial||se.isMeshPhongMaterial)&&se.envMap===null&&K.environment!==null&&(jt.envMapIntensity.value=K.environmentIntensity),jt.dfgLUT!==void 0&&(jt.dfgLUT.value=xR()),ai){if(Nt.setValue(Z,"toneMappingExposure",k.toneMappingExposure),Ue.needsLights&&dn(jt,Kn),Ve&&se.fog===!0&&Ge.refreshFogUniforms(jt,Ve),Ge.refreshMaterialUniforms(jt,se,ye,Te,L.state.transmissionRenderTarget[R.id]),Ue.needsLights&&Ue.lightProbeGrid){const Ot=Ue.lightProbeGrid;jt.probesSH.value=Ot.texture,jt.probesMin.value.copy(Ot.boundingBox.min),jt.probesMax.value.copy(Ot.boundingBox.max),jt.probesResolution.value.copy(Ot.resolution)}Fu.upload(Z,ui(Ue),jt,me)}if(se.isShaderMaterial&&se.uniformsNeedUpdate===!0&&(Fu.upload(Z,ui(Ue),jt,me),se.uniformsNeedUpdate=!1),se.isSpriteMaterial&&Nt.setValue(Z,"center",ae.center),Nt.setValue(Z,"modelViewMatrix",ae.modelViewMatrix),Nt.setValue(Z,"normalMatrix",ae.normalMatrix),Nt.setValue(Z,"modelMatrix",ae.matrixWorld),se.uniformsGroups!==void 0){const Ot=se.uniformsGroups;for(let fi=0,ta=Ot.length;fi<ta;fi++){const xi=Ot[fi];Ae.update(xi,hn),Ae.bind(xi,hn)}}return hn}function dn(R,K){R.ambientLightColor.needsUpdate=K,R.lightProbe.needsUpdate=K,R.directionalLights.needsUpdate=K,R.directionalLightShadows.needsUpdate=K,R.pointLights.needsUpdate=K,R.pointLightShadows.needsUpdate=K,R.spotLights.needsUpdate=K,R.spotLightShadows.needsUpdate=K,R.rectAreaLights.needsUpdate=K,R.hemisphereLights.needsUpdate=K}function Js(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return J},this.setRenderTargetTextures=function(R,K,ce){const se=le.get(R);se.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,se.__autoAllocateDepthBuffer===!1&&(se.__useRenderToTexture=!1),le.get(R.texture).__webglTexture=K,le.get(R.depthTexture).__webglTexture=se.__autoAllocateDepthBuffer?void 0:ce,se.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,K){const ce=le.get(R);ce.__webglFramebuffer=K,ce.__useDefaultFramebuffer=K===void 0},this.setRenderTarget=function(R,K=0,ce=0){J=R,z=K,H=ce;let se=null,ae=!1,Ve=!1;if(R){const ne=le.get(R);if(ne.__useDefaultFramebuffer!==void 0){b.bindFramebuffer(Z.FRAMEBUFFER,ne.__webglFramebuffer),B.copy(R.viewport),q.copy(R.scissor),Ce=R.scissorTest,b.viewport(B),b.scissor(q),b.setScissorTest(Ce),he=-1;return}else if(ne.__webglFramebuffer===void 0)me.setupRenderTarget(R);else if(ne.__hasExternalTextures)me.rebindTextures(R,le.get(R.texture).__webglTexture,le.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Be=R.depthTexture;if(ne.__boundDepthTexture!==Be){if(Be!==null&&le.has(Be)&&(R.width!==Be.image.width||R.height!==Be.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");me.setupDepthRenderbuffer(R)}}const xe=R.texture;(xe.isData3DTexture||xe.isDataArrayTexture||xe.isCompressedArrayTexture)&&(Ve=!0);const be=le.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(be[K])?se=be[K][ce]:se=be[K],ae=!0):R.samples>0&&me.useMultisampledRTT(R)===!1?se=le.get(R).__webglMultisampledFramebuffer:Array.isArray(be)?se=be[ce]:se=be,B.copy(R.viewport),q.copy(R.scissor),Ce=R.scissorTest}else B.copy(qe).multiplyScalar(ye).floor(),q.copy(xt).multiplyScalar(ye).floor(),Ce=gt;if(ce!==0&&(se=de),b.bindFramebuffer(Z.FRAMEBUFFER,se)&&b.drawBuffers(R,se),b.viewport(B),b.scissor(q),b.setScissorTest(Ce),ae){const ne=le.get(R.texture);Z.framebufferTexture2D(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_CUBE_MAP_POSITIVE_X+K,ne.__webglTexture,ce)}else if(Ve){const ne=K;for(let xe=0;xe<R.textures.length;xe++){const be=le.get(R.textures[xe]);Z.framebufferTextureLayer(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0+xe,be.__webglTexture,ce,ne)}}else if(R!==null&&ce!==0){const ne=le.get(R.texture);Z.framebufferTexture2D(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_2D,ne.__webglTexture,ce)}he=-1},this.readRenderTargetPixels=function(R,K,ce,se,ae,Ve,j,ne=0){if(!(R&&R.isWebGLRenderTarget)){It("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xe=le.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&j!==void 0&&(xe=xe[j]),xe){b.bindFramebuffer(Z.FRAMEBUFFER,xe);try{const be=R.textures[ne],Be=be.format,Ze=be.type;if(R.textures.length>1&&Z.readBuffer(Z.COLOR_ATTACHMENT0+ne),!I.textureFormatReadable(Be)){It("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!I.textureTypeReadable(Ze)){It("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=R.width-se&&ce>=0&&ce<=R.height-ae&&Z.readPixels(K,ce,se,ae,Fe.convert(Be),Fe.convert(Ze),Ve)}finally{const be=J!==null?le.get(J).__webglFramebuffer:null;b.bindFramebuffer(Z.FRAMEBUFFER,be)}}},this.readRenderTargetPixelsAsync=async function(R,K,ce,se,ae,Ve,j,ne=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xe=le.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&j!==void 0&&(xe=xe[j]),xe)if(K>=0&&K<=R.width-se&&ce>=0&&ce<=R.height-ae){b.bindFramebuffer(Z.FRAMEBUFFER,xe);const be=R.textures[ne],Be=be.format,Ze=be.type;if(R.textures.length>1&&Z.readBuffer(Z.COLOR_ATTACHMENT0+ne),!I.textureFormatReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!I.textureTypeReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ye=Z.createBuffer();Z.bindBuffer(Z.PIXEL_PACK_BUFFER,Ye),Z.bufferData(Z.PIXEL_PACK_BUFFER,Ve.byteLength,Z.STREAM_READ),Z.readPixels(K,ce,se,ae,Fe.convert(Be),Fe.convert(Ze),0);const lt=J!==null?le.get(J).__webglFramebuffer:null;b.bindFramebuffer(Z.FRAMEBUFFER,lt);const Tt=Z.fenceSync(Z.SYNC_GPU_COMMANDS_COMPLETE,0);return Z.flush(),await TE(Z,Tt,4),Z.bindBuffer(Z.PIXEL_PACK_BUFFER,Ye),Z.getBufferSubData(Z.PIXEL_PACK_BUFFER,0,Ve),Z.deleteBuffer(Ye),Z.deleteSync(Tt),Ve}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,K=null,ce=0){const se=Math.pow(2,-ce),ae=Math.floor(R.image.width*se),Ve=Math.floor(R.image.height*se),j=K!==null?K.x:0,ne=K!==null?K.y:0;me.setTexture2D(R,0),Z.copyTexSubImage2D(Z.TEXTURE_2D,ce,0,0,j,ne,ae,Ve),b.unbindTexture()},this.copyTextureToTexture=function(R,K,ce=null,se=null,ae=0,Ve=0){let j,ne,xe,be,Be,Ze,Ye,lt,Tt;const st=R.isCompressedTexture?R.mipmaps[Ve]:R.image;if(ce!==null)j=ce.max.x-ce.min.x,ne=ce.max.y-ce.min.y,xe=ce.isBox3?ce.max.z-ce.min.z:1,be=ce.min.x,Be=ce.min.y,Ze=ce.isBox3?ce.min.z:0;else{const jt=Math.pow(2,-ae);j=Math.floor(st.width*jt),ne=Math.floor(st.height*jt),R.isDataArrayTexture?xe=st.depth:R.isData3DTexture?xe=Math.floor(st.depth*jt):xe=1,be=0,Be=0,Ze=0}se!==null?(Ye=se.x,lt=se.y,Tt=se.z):(Ye=0,lt=0,Tt=0);const ht=Fe.convert(K.format),ut=Fe.convert(K.type);let Ue;K.isData3DTexture?(me.setTexture3D(K,0),Ue=Z.TEXTURE_3D):K.isDataArrayTexture||K.isCompressedArrayTexture?(me.setTexture2DArray(K,0),Ue=Z.TEXTURE_2D_ARRAY):(me.setTexture2D(K,0),Ue=Z.TEXTURE_2D),b.activeTexture(Z.TEXTURE0),b.pixelStorei(Z.UNPACK_FLIP_Y_WEBGL,K.flipY),b.pixelStorei(Z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),b.pixelStorei(Z.UNPACK_ALIGNMENT,K.unpackAlignment);const vn=b.getParameter(Z.UNPACK_ROW_LENGTH),ot=b.getParameter(Z.UNPACK_IMAGE_HEIGHT),hn=b.getParameter(Z.UNPACK_SKIP_PIXELS),Zn=b.getParameter(Z.UNPACK_SKIP_ROWS),ai=b.getParameter(Z.UNPACK_SKIP_IMAGES);b.pixelStorei(Z.UNPACK_ROW_LENGTH,st.width),b.pixelStorei(Z.UNPACK_IMAGE_HEIGHT,st.height),b.pixelStorei(Z.UNPACK_SKIP_PIXELS,be),b.pixelStorei(Z.UNPACK_SKIP_ROWS,Be),b.pixelStorei(Z.UNPACK_SKIP_IMAGES,Ze);const Kn=R.isDataArrayTexture||R.isData3DTexture,Nt=K.isDataArrayTexture||K.isData3DTexture;if(R.isDepthTexture){const jt=le.get(R),si=le.get(K),Ot=le.get(jt.__renderTarget),fi=le.get(si.__renderTarget);b.bindFramebuffer(Z.READ_FRAMEBUFFER,Ot.__webglFramebuffer),b.bindFramebuffer(Z.DRAW_FRAMEBUFFER,fi.__webglFramebuffer);for(let ta=0;ta<xe;ta++)Kn&&(Z.framebufferTextureLayer(Z.READ_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,le.get(R).__webglTexture,ae,Ze+ta),Z.framebufferTextureLayer(Z.DRAW_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,le.get(K).__webglTexture,Ve,Tt+ta)),Z.blitFramebuffer(be,Be,j,ne,Ye,lt,j,ne,Z.DEPTH_BUFFER_BIT,Z.NEAREST);b.bindFramebuffer(Z.READ_FRAMEBUFFER,null),b.bindFramebuffer(Z.DRAW_FRAMEBUFFER,null)}else if(ae!==0||R.isRenderTargetTexture||le.has(R)){const jt=le.get(R),si=le.get(K);b.bindFramebuffer(Z.READ_FRAMEBUFFER,ue),b.bindFramebuffer(Z.DRAW_FRAMEBUFFER,Y);for(let Ot=0;Ot<xe;Ot++)Kn?Z.framebufferTextureLayer(Z.READ_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,jt.__webglTexture,ae,Ze+Ot):Z.framebufferTexture2D(Z.READ_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_2D,jt.__webglTexture,ae),Nt?Z.framebufferTextureLayer(Z.DRAW_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,si.__webglTexture,Ve,Tt+Ot):Z.framebufferTexture2D(Z.DRAW_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_2D,si.__webglTexture,Ve),ae!==0?Z.blitFramebuffer(be,Be,j,ne,Ye,lt,j,ne,Z.COLOR_BUFFER_BIT,Z.NEAREST):Nt?Z.copyTexSubImage3D(Ue,Ve,Ye,lt,Tt+Ot,be,Be,j,ne):Z.copyTexSubImage2D(Ue,Ve,Ye,lt,be,Be,j,ne);b.bindFramebuffer(Z.READ_FRAMEBUFFER,null),b.bindFramebuffer(Z.DRAW_FRAMEBUFFER,null)}else Nt?R.isDataTexture||R.isData3DTexture?Z.texSubImage3D(Ue,Ve,Ye,lt,Tt,j,ne,xe,ht,ut,st.data):K.isCompressedArrayTexture?Z.compressedTexSubImage3D(Ue,Ve,Ye,lt,Tt,j,ne,xe,ht,st.data):Z.texSubImage3D(Ue,Ve,Ye,lt,Tt,j,ne,xe,ht,ut,st):R.isDataTexture?Z.texSubImage2D(Z.TEXTURE_2D,Ve,Ye,lt,j,ne,ht,ut,st.data):R.isCompressedTexture?Z.compressedTexSubImage2D(Z.TEXTURE_2D,Ve,Ye,lt,st.width,st.height,ht,st.data):Z.texSubImage2D(Z.TEXTURE_2D,Ve,Ye,lt,j,ne,ht,ut,st);b.pixelStorei(Z.UNPACK_ROW_LENGTH,vn),b.pixelStorei(Z.UNPACK_IMAGE_HEIGHT,ot),b.pixelStorei(Z.UNPACK_SKIP_PIXELS,hn),b.pixelStorei(Z.UNPACK_SKIP_ROWS,Zn),b.pixelStorei(Z.UNPACK_SKIP_IMAGES,ai),Ve===0&&K.generateMipmaps&&Z.generateMipmap(Ue),b.unbindTexture()},this.initRenderTarget=function(R){le.get(R).__webglFramebuffer===void 0&&me.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?me.setTextureCube(R,0):R.isData3DTexture?me.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?me.setTexture2DArray(R,0):me.setTexture2D(R,0),b.unbindTexture()},this.resetState=function(){z=0,H=0,J=null,b.reset(),He.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ta}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Lt._getDrawingBufferColorSpace(e),i.unpackColorSpace=Lt._getUnpackColorSpace()}}const MR="/assets/Reckk-RegularItalic-DLM8ilig.ttf",yR="/assets/Reckk-MediumItalic-D_uyfX4p.otf",ER="/assets/CXLMediumItalic-DYSp-DoC.otf",rx=4,ox=5,es={fleet:"MAEX",name:"SharpeShark",version:"v1",role:"Executor",didShort:"0xf8a2…6035"};function vS(a){return["discover","copy","supervise","isolate"][a]??"discover"}function bR(a){return vS(a)}function TR(a,e,i){const r=e.split(/\s+/),o=[];let c="";for(const u of r){const d=c?`${c} ${u}`:u;a.measureText(d).width<=i?c=d:(c&&o.push(c),c=u)}return c&&o.push(c),o}const Yh=2048,AR=1.1;function RR(a,e){const i=Math.max(240,a);let r=Math.round(i*e*AR),o=Math.round(r*ox/rx);if(r>Yh||o>Yh){const c=Yh/Math.max(r,o);r=Math.max(280,Math.round(r*c)),o=Math.round(r*ox/rx)}return{W:r,H:o,layoutDpr:r/i}}function xS(a,e,i,r,o,c){const u=Math.min(c,r/2,o/2);a.beginPath(),a.moveTo(e+u,i),a.arcTo(e+r,i,e+r,i+o,u),a.arcTo(e+r,i+o,e,i+o,u),a.arcTo(e,i+o,e,i,u),a.arcTo(e,i,e+r,i,u),a.closePath()}function en(a,e,i,r,o,c,u){xS(a,e,i,r,o,c),a.fillStyle=u,a.fill()}function un(a,e,i,r,o,c,u,d){xS(a,e,i,r,o,c),a.strokeStyle=u,a.lineWidth=d,a.stroke()}function tf(a,e,i,r,o,c,u=1){const d=Math.min(1,Math.max(0,u));en(a,e,i,r,o,c,`rgba(12, 14, 18, ${d})`),un(a,e,i,r,o,c,"rgba(255,255,255,0.12)",Math.max(1,c*.12))}function Jl(a,e,i,r,o,c,u){if(r<2||o<2)return;const d=8*c,m=a.createLinearGradient(e,i+o,e+r,i);if(m.addColorStop(0,"#050508"),m.addColorStop(1,"rgba(200,245,168,0.14)"),en(a,e,i,r,o,d,m),un(a,e,i,r,o,d,"rgba(255,255,255,0.14)",Math.max(1,1.25*c)),(u==null?void 0:u.innerStroke)!==!1){const h=2.5*c;un(a,e+h,i+h,r-h*2,o-h*2,Math.max(2,d-1.5*c),"rgba(200,245,168,0.35)",Math.max(1,c))}}const Zs="rgba(255,255,255,0.08)",Ks="rgba(255,255,255,0.14)";function nf(a,e,i,r,o,c,u){const d=11*u;a.fillStyle="#c8f5a8",a.font=`700 ${d}px "DM Mono", ui-monospace, monospace`,a.textAlign="left",a.fillText(c,e+o,i+o+d);const m=22*u,h=e+r-o-m,g=i+o-2*u;return un(a,h,g,m,m,4*u,"rgba(255,255,255,0.14)",1),a.strokeStyle="rgba(255,255,255,0.55)",a.lineWidth=Math.max(1,1.25*u),a.beginPath(),a.moveTo(h+6*u,g+6*u),a.lineTo(h+m-6*u,g+m-6*u),a.moveTo(h+m-6*u,g+6*u),a.lineTo(h+6*u,g+m-6*u),a.stroke(),i+o+d+10*u}function SS(a,e,i,r,o,c,u,d){const m=28*d,h=(r-o*2)/2,g=10*d;a.font=`700 ${g}px "DM Mono", ui-monospace, monospace`;for(let _=0;_<2;_++){const v=e+o+_*h,S=_===u;a.fillStyle=S?"rgba(255,255,255,0.92)":"rgba(255,255,255,0.38)",a.textAlign="center",a.fillText(c[_],v+h/2,i+14*d),S&&(a.fillStyle="#c8f5a8",a.fillRect(v+4*d,i+m-2*d,h-8*d,2*d))}return a.textAlign="left",a.strokeStyle="rgba(255,255,255,0.08)",a.lineWidth=1,a.beginPath(),a.moveTo(e+o,i+m),a.lineTo(e+r-o,i+m),a.stroke(),i+m+10*d}function CR(a,e,i,r,o,c,u,d,m){const h=10*m,g=22*m;a.fillStyle="rgba(255,255,255,0.92)",a.font=`700 ${h}px "DM Mono", ui-monospace, monospace`,a.textAlign="left",a.fillText(c,e+o,i+14*m);const _=`${String(u).padStart(2,"0")} / ${String(d).padStart(2,"0")}`;a.fillStyle="rgba(255,255,255,0.38)",a.font=`700 ${8*m}px "DM Mono", ui-monospace, monospace`,a.textAlign="right",a.fillText(_,e+r-o,i+14*m),a.textAlign="left",a.strokeStyle="rgba(255,255,255,0.08)",a.lineWidth=1,a.beginPath(),a.moveTo(e+o,i+g),a.lineTo(e+r-o,i+g),a.stroke(),a.fillStyle="#c8f5a8";const v=Math.min(72*m,r*.28);return a.fillRect(e+o,i+g-2*m,v,2*m),i+g+10*m}function wR(a,e,i,r,o,c,u){const d=9*u;a.fillStyle="rgba(255,255,255,0.38)",a.font=`700 ${d}px "DM Mono", ui-monospace, monospace`,a.textAlign="left",a.fillText(o,e,i+d);const m=i+d+6*u,h=34*u;en(a,e,m,r,h,6*u,Zs),un(a,e,m,r,h,6*u,Ks,1),a.fillStyle=c.startsWith("Select")||c==="0x..."?"rgba(255,255,255,0.35)":"rgba(255,255,255,0.88)",a.font=`500 ${11*u}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText(c,e+10*u,m+h*.62),a.strokeStyle="rgba(255,255,255,0.4)",a.lineWidth=Math.max(1,1.2*u);const g=e+r-14*u,_=m+h/2;return a.beginPath(),a.moveTo(g-4*u,_-2*u),a.lineTo(g,_+3*u),a.lineTo(g+4*u,_-2*u),a.stroke(),d+6*u+h}function DR(a,e,i,r,o){const c=9*o;a.fillStyle="rgba(255,255,255,0.38)",a.font=`700 ${c}px "DM Mono", ui-monospace, monospace`,a.textAlign="left",a.fillText("AMOUNT",e,i+c),a.textAlign="right",a.fillStyle="rgba(255,255,255,0.45)",a.fillText("AVAILABLE 5,000.00",e+r,i+c),a.textAlign="left";const u=i+c+6*o,d=44*o;en(a,e,u,r,d,8*o,"#050508"),un(a,e,u,r,d,8*o,"rgba(255,255,255,0.1)",1),a.fillStyle="rgba(255,255,255,0.92)",a.font=`700 ${22*o}px "DM Mono", ui-monospace, monospace`,a.fillText("0.00",e+12*o,u+d*.68);const m=u+d+10*o;return a.strokeStyle="rgba(255,255,255,0.12)",a.lineWidth=Math.max(2,2*o),a.beginPath(),a.moveTo(e,m),a.lineTo(e+r,m),a.stroke(),en(a,e,m-5*o,14*o,10*o,5*o,"rgba(255,255,255,0.85)"),a.fillStyle="rgba(255,255,255,0.35)",a.font=`500 ${8*o}px "DM Mono", ui-monospace, monospace`,a.fillText("0.01",e,m+14*o),a.textAlign="right",a.fillText("5,000.00",e+r,m+14*o),a.textAlign="left",c+6*o+d+10*o+16*o}function LR(a,e,i,r,o,c){a.strokeStyle="rgba(255,255,255,0.08)",a.lineWidth=1,a.beginPath(),a.moveTo(e,i),a.lineTo(e+r,i),a.stroke();const u=i+10*o,d=36*o,m=72*o;un(a,e,u,m,d,6*o,"rgba(255,255,255,0.14)",1),a.fillStyle="rgba(255,255,255,0.55)",a.font=`700 ${9*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText("CANCEL",e+m/2,u+d*.62);const h=e+m+8*o,g=r-m-8*o;return en(a,h,u,g,d,6*o,"rgba(255,255,255,0.06)"),un(a,h,u,g,d,6*o,"rgba(255,255,255,0.1)",1),a.fillStyle="#c8f5a8",a.fillRect(h,u+4*o,3*o,d-8*o),a.fillStyle="rgba(255,255,255,0.55)",a.font=`700 ${8.5*o}px "DM Mono", ui-monospace, monospace`,a.fillText(c,h+g/2+2*o,u+d*.62),a.textAlign="left",10*o+d}function lm(a,e,i,r,o){const c=44*o;en(a,e,i,r,c,8*o,"rgba(200,245,168,0.08)"),un(a,e,i,r,c,8*o,"rgba(200,245,168,0.22)",1);const u=28*o;return en(a,e+8*o,i+(c-u)/2,u,u,4*o,"rgba(200,245,168,0.14)"),a.fillStyle="#c8f5a8",a.font=`700 ${10*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText("SS",e+8*o+u/2,i+c*.58),a.textAlign="left",a.fillStyle="rgba(255,255,255,0.92)",a.font=`700 ${11*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText(es.name,e+8*o+u+8*o,i+16*o),a.fillStyle="rgba(255,255,255,0.42)",a.font=`500 ${9*o}px "DM Mono", ui-monospace, monospace`,a.fillText(`${es.role} · ${es.didShort}`,e+8*o+u+8*o,i+32*o),c}function NR(a,e,i,r,o){const c=Math.min(r*190/316,r*.58),u=12*o,d=8*o,m=a.createLinearGradient(e,i+c,e+r,i);m.addColorStop(0,"#050508"),m.addColorStop(1,"rgba(200,245,168,0.14)"),en(a,e,i,r,c,d,m),un(a,e,i,r,c,d,"rgba(255,255,255,0.14)",Math.max(1,1.25*o)),un(a,e+2.5*o,i+2.5*o,r-5*o,c-5*o,d-1.5*o,"rgba(200,245,168,0.35)",Math.max(1,o)),a.fillStyle="rgba(255,255,255,0.92)",a.font=`700 ${11*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText(es.fleet,e+u,i+u+10*o),a.fillStyle="#c8f5a8",a.beginPath(),a.arc(e+r-u-7*o,i+u+5*o,6*o,0,Math.PI*2),a.fill(),a.fillStyle="#0a0a0c",a.font=`700 ${8*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText("✓",e+r-u-7*o,i+u+8*o),a.textAlign="left";const h=i+c-u-2*o;a.fillStyle="rgba(255,255,255,0.92)",a.font=`700 ${10*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText(es.name.toUpperCase(),e+u,h-24*o),a.fillStyle="rgba(255,255,255,0.45)",a.font=`500 ${9*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText(`${es.role} · ${es.version}`,e+u,h-10*o),a.fillStyle="#c8f5a8",a.font=`700 ${10*o}px "DM Mono", ui-monospace, monospace`,a.fillText(es.didShort,e+u,h);const g=28*o;return en(a,e+r-u-g,i+c-u-g,g,g,4*o,"rgba(200,245,168,0.14)"),un(a,e+r-u-g,i+c-u-g,g,g,4*o,"rgba(200,245,168,0.28)",1),a.fillStyle="#c8f5a8",a.font=`700 ${11*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText("SS",e+r-u-g/2,i+c-u-g*.35),a.textAlign="left",c}function UR(a,e,i,r,o){const c=Math.min(r*190/316,r*.58),u=10*o,d=8*o,m=a.createLinearGradient(e,i,e+r,i+c);m.addColorStop(0,"#0a0c10"),m.addColorStop(.55,"#12161c"),m.addColorStop(1,"rgba(200,245,168,0.18)"),en(a,e,i,r,c,d,m),un(a,e,i,r,c,d,"rgba(255,255,255,0.14)",Math.max(1,1.25*o)),a.fillStyle="rgba(255,255,255,0.92)",a.font=`700 ${10*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText("Morpheum.",e+u,i+u+10*o),a.strokeStyle="rgba(255,255,255,0.45)",a.lineWidth=Math.max(1,o);for(let h=0;h<3;h++){const g=5*o+h*3.5*o,_=4*o+h*2.5*o;a.beginPath(),a.ellipse(e+r-u-4*o,i+u+8*o,g,_,-.4,-.2,1.2),a.stroke()}return a.fillStyle="rgba(255,255,255,0.88)",a.font=`700 ${9*o}px "DM Mono", ui-monospace, monospace`,a.fillText("5678  ····  ····  7890",e+u,i+c*.52),a.fillStyle="rgba(255,255,255,0.92)",a.font=`700 ${8*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText(es.name.toUpperCase(),e+u,i+c-u-2*o),a.textAlign="right",a.fillStyle="rgba(255,255,255,0.55)",a.font=`700 ${8*o}px "DM Mono", ui-monospace, monospace`,a.fillText("12/28",e+r-u,i+c-u-2*o),a.textAlign="left",c}function OR(a,e,i,r,o,c=25){const u=9*o;a.fillStyle="rgba(255,255,255,0.38)",a.font=`700 ${u}px "DM Mono", ui-monospace, monospace`,a.textAlign="left",a.fillText("MIRROR SIZE",e,i+u),a.textAlign="right",a.fillStyle="#c8f5a8",a.fillText(`${c}%`,e+r,i+u),a.textAlign="left";const d=i+u+12*o,m=Math.max(4,5*o);en(a,e,d,r,m,m/2,"rgba(255,255,255,0.1)");const h=Math.max(m,r*c/100);en(a,e,d,h,m,m/2,"rgba(200,245,168,0.75)");const g=7*o;return a.fillStyle="#f4f6f0",a.beginPath(),a.arc(e+h,d+m/2,g,0,Math.PI*2),a.fill(),a.strokeStyle="rgba(200,245,168,0.55)",a.lineWidth=Math.max(1,o),a.stroke(),a.fillStyle="rgba(255,255,255,0.35)",a.font=`500 ${7.5*o}px "DM Mono", ui-monospace, monospace`,a.fillText("5%",e,d+m+14*o),a.textAlign="right",a.fillText("100%",e+r,d+m+14*o),a.textAlign="left",u+12*o+m+16*o}function PR(a,e,i,r,o){const c=9*o;a.fillStyle="rgba(255,255,255,0.38)",a.font=`700 ${c}px "DM Mono", ui-monospace, monospace`,a.fillText("AGENTIC PROTECTION",e,i+c);const u=5*o,d=(r-u*2)/3,m=52*o,h=i+c+8*o;return[{label:"Manual",tone:"rgba(255,255,255,0.12)",active:!1},{label:"Guarded",tone:"rgba(234,179,8,0.55)",active:!0},{label:"High",tone:"rgba(255,71,87,0.35)",active:!1}].forEach((_,v)=>{const S=e+v*(d+u);en(a,S,h,d,m,6*o,Zs),un(a,S,h,d,m,6*o,_.active?_.tone:Ks,_.active?Math.max(1.5,1.5*o):1),_.active&&(a.fillStyle="rgba(234,179,8,0.12)",a.fillRect(S+1,h+1,3*o,m-2)),a.fillStyle=_.active?"rgba(255,255,255,0.92)":"rgba(255,255,255,0.55)",a.font=`700 ${9*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.textAlign="center",a.fillText(_.label,S+d/2,h+18*o),a.fillStyle="rgba(255,255,255,0.38)",a.font=`400 ${7*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`;const E=_.label==="Guarded"?"safe default":_.label==="Manual"?"signals":"silent";a.fillText(E,S+d/2,h+34*o)}),a.textAlign="left",c+8*o+m}function IR(a,e,i,r,o,c="SLIDE TO START COPY"){const u=40*o;en(a,e,i,r,u,8*o,Zs),un(a,e,i,r,u,8*o,Ks,1);const d=.22,m=4*o,h=u-m*2,g=r-m*2-h;return en(a,e+m,i+m,h+g*d,h,h/2,"rgba(200,245,168,0.18)"),en(a,e+m,i+m,h,h,h/2,"rgba(200,245,168,0.85)"),a.fillStyle="#0a0a0c",a.font=`700 ${12*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText("›",e+m+h/2,i+u*.62),a.fillStyle="rgba(255,255,255,0.5)",a.font=`700 ${8*o}px "DM Mono", ui-monospace, monospace`,a.fillText(c,e+r/2+h*.15,i+u*.62),a.textAlign="left",u}const Xl=2,Uo={sharpe:"2.41",roi:"+38.2%",riskScore:"72",reputation:"84",receipts:[{action:"Close BTC long",pnl:"+103.09"},{action:"Open ETH long",pnl:null},{action:"Close SOL short",pnl:"+41.20"}]};function lx(a,e,i,r,o,c){const u=6*c,d=o.length,m=(r-u*(d-1))/d,h=36*c;return o.forEach(([g,_],v)=>{const S=e+v*(m+u);en(a,S,i,m,h,6*c,Zs),un(a,S,i,m,h,6*c,Ks,1),a.fillStyle="rgba(255,255,255,0.4)",a.font=`700 ${7*c}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText(g,S+m/2,i+12*c),a.fillStyle="#c8f5a8",a.font=`700 ${11*c}px "DM Mono", ui-monospace, monospace`,a.fillText(_,S+m/2,i+26*c)}),a.textAlign="left",h}function BR(a,e,i,r,o){const c=[{label:"Verified",brand:!0},{label:"Receipt"},{label:"Risk",value:Uo.riskScore},{label:"Rep",value:Uo.reputation}],u=4*o,d=22*o,m=5*o;let h=e;a.font=`700 ${6.5*o}px "DM Mono", ui-monospace, monospace`;for(const g of c){const _=a.measureText(g.label.toUpperCase()).width,v=g.value?a.measureText(g.value).width+3*o:0,S=m*2+6*o+_+v;if(h+S>e+r)break;const E=g.brand?"rgba(200,245,168,0.12)":Zs,A=g.brand?"rgba(200,245,168,0.35)":Ks;en(a,h,i,S,d,4*o,E),un(a,h,i,S,d,4*o,A,1);const y=2*o;a.beginPath(),a.arc(h+m+y,i+d/2,y,0,Math.PI*2),a.fillStyle=g.brand?"#c8f5a8":"rgba(255,255,255,0.35)",a.fill();let x=h+m+y*2+4*o;a.fillStyle=g.brand?"#c8f5a8":"rgba(255,255,255,0.55)",a.textAlign="left",a.fillText(g.label.toUpperCase(),x,i+d*.68),x+=_+3*o,g.value&&(a.fillStyle="rgba(255,255,255,0.92)",a.fillText(g.value,x,i+d*.68)),h+=S+u}return a.textAlign="left",d}function FR(a,e,i,r,o){const c=Uo.receipts,u=22*o,d=14*o+c.length*u;return en(a,e,i,r,d,6*o,Zs),un(a,e,i,r,d,6*o,Ks,1),a.fillStyle="rgba(255,255,255,0.4)",a.font=`700 ${6.5*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="left",a.fillText("RECEIPTS",e+8*o,i+10*o),c.forEach((m,h)=>{const g=i+14*o+h*u;a.fillStyle="rgba(255,255,255,0.72)",a.font=`500 ${8*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="left",a.fillText(m.action,e+8*o,g+u*.62),a.textAlign="right",m.pnl?(a.fillStyle="#c8f5a8",a.font=`700 ${8*o}px "DM Mono", ui-monospace, monospace`,a.fillText(m.pnl,e+r-8*o,g+u*.62)):(a.fillStyle="rgba(255,255,255,0.35)",a.fillText("—",e+r-8*o,g+u*.62))}),a.textAlign="left",d}function zR(a,e,i,r,o){const c=Math.min(r*150/316,r*.48),u=12*o,d=8*o,m=a.createLinearGradient(e,i+c,e+r,i);m.addColorStop(0,"#050508"),m.addColorStop(1,"rgba(200,245,168,0.14)"),en(a,e,i,r,c,d,m),un(a,e,i,r,c,d,"rgba(255,255,255,0.14)",Math.max(1,1.25*o)),un(a,e+2.5*o,i+2.5*o,r-5*o,c-5*o,d-1.5*o,"rgba(200,245,168,0.35)",Math.max(1,o)),a.fillStyle="rgba(255,255,255,0.92)",a.font=`700 ${11*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText("MAEX",e+u,i+u+10*o);const h=40*o,g=16*o,_=e+r-u-h,v=i+u-1*o;return en(a,_,v,h,g,8*o,"rgba(200,245,168,0.14)"),un(a,_,v,h,g,8*o,"rgba(200,245,168,0.28)",1),a.fillStyle="#c8f5a8",a.font=`700 ${8*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText("LIVE",_+h/2,v+11*o),a.textAlign="left",a.fillStyle="rgba(255,255,255,0.92)",a.font=`700 ${14*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText("MAEX Core",e+u,i+u+36*o),a.fillStyle="rgba(255,255,255,0.45)",a.font=`500 ${9*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText("Curated agent basket · 4 agents",e+u,i+u+52*o),a.fillStyle="#c8f5a8",a.font=`700 ${18*o}px "DM Mono", ui-monospace, monospace`,a.fillText("+12.8%",e+u,i+c-u-4*o),a.fillStyle="rgba(255,255,255,0.4)",a.font=`700 ${8*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="right",a.fillText("30D RETURN",e+r-u,i+c-u-8*o),a.textAlign="left",c}function HR(a,e,i,r,o){const c=[["SharpeShark","42%","+38%"],["SortinoSloth","33%","+21%"],["FundingFox","25%","−4%"]],u=26*o,d=c.length*u;return en(a,e,i,r,d,6*o,Zs),un(a,e,i,r,d,6*o,Ks,1),c.forEach(([m,h,g],_)=>{const v=i+_*u;_>0&&(a.strokeStyle="rgba(255,255,255,0.06)",a.lineWidth=1,a.beginPath(),a.moveTo(e+8*o,v),a.lineTo(e+r-8*o,v),a.stroke()),a.fillStyle="rgba(255,255,255,0.85)",a.font=`600 ${9*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.textAlign="left",a.fillText(m,e+10*o,v+u*.62),a.fillStyle="rgba(255,255,255,0.4)",a.font=`700 ${8*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText(h,e+r*.58,v+u*.62);const S=!g.startsWith("−")&&!g.startsWith("-");a.fillStyle=S?"#c8f5a8":"rgba(255,120,120,0.85)",a.textAlign="right",a.fillText(g,e+r-10*o,v+u*.62)}),a.textAlign="left",d}function GR(a,e,i,r,o,c=0,u=1){const d=r/300,m=12*d,h=10*d,g=(c%Xl+Xl)%Xl,_=[{header:"AGENT PROOF",segment:"AGENTS"},{header:"INDEX PROOF",segment:"INDICES"}][g];tf(a,e,i,r,o,h,u);let v=nf(a,e,i,r,m,_.header,d);v=CR(a,e,v,r,m,_.segment,g+1,Xl,d);const S=i+o-m,E=e+m,A=v,y=r-m*2,x=Math.max(48*d,S-v),O=10*d;Jl(a,E,A,y,x,d);const P=E+O,C=y-O*2;let N=A+O;const L=A+x-O;if(g===0){N+=lm(a,P,N,C,d)+8*d,N+22*d<=L&&(N+=BR(a,P,N,C,d)+8*d);const T=[["SHARPE",Uo.sharpe],["ROI",Uo.roi],["RISK",Uo.riskScore]];N+36*d<=L&&(N+=lx(a,P,N,C,T,d)+8*d),N+70*d<=L&&FR(a,P,N,C,d);return}N+=zR(a,P,N,C,d)+8*d,N+78*d<=L&&(N+=HR(a,P,N,C,d)+8*d);const F=[["RETURN","+12.8%"],["RISK","58"],["AGENTS","4"]];N+36*d<=L&&lx(a,P,N,C,F,d)}function VR(a,e,i,r,o,c=0,u=1){const d=r/300,m=12*d,h=10*d;tf(a,e,i,r,o,h,u);let g=nf(a,e,i,r,m,"COPY TRADE",d);g=SS(a,e,g,r,m,["MIRROR","BUCKET"],0,d);const _=40*d,v=i+o-m-_,S=v-10*d;if(c%2===0){const A=6*d,y=r-m*2;let x=(y-A)/2,O=Math.min(x*190/316,x*.58);const P=Math.max(64*d,S-g-28*d);O>P&&(x=x*(P/O),O=P);const C=d*(x/((y-A)/2)),N=e+m+(y-(x*2+A))/2;UR(a,N,g,x,C),NR(a,N+x+A,g,x,C),g+=O+10*d;const L=[["SPREAD","0.02%"],["FUNDING","8h"],["SIZE","25%"]],F=5*d,T=(r-m*2-F*2)/3,U=32*d;if(g+U<=S){const k=6*d;Jl(a,e+m,g-k,r-m*2,U+k*2,d,{innerStroke:!1}),L.forEach(([G,Q],de)=>{const ue=e+m+de*(T+F);en(a,ue,g,T,U,6*d,Zs),un(a,ue,g,T,U,6*d,Ks,1),a.fillStyle="rgba(255,255,255,0.4)",a.font=`700 ${6.5*d}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText(G,ue+T/2,g+11*d),a.fillStyle="#c8f5a8",a.font=`700 ${10*d}px "DM Mono", ui-monospace, monospace`,a.fillText(Q,ue+T/2,g+24*d)}),a.textAlign="left"}}else{const A=e+m,y=g,x=r-m*2,O=Math.max(48*d,S-g),P=10*d;Jl(a,A,y,x,O,d);const C=A+P,N=x-P*2;let L=y+P;const F=y+O-P;L+=lm(a,C,L,N,d)+10*d,L+36*d<F&&(L+=OR(a,C,L,N,d,25)+10*d),L+50*d<F&&PR(a,C,L,N,d)}IR(a,e+m,v,r-m*2,d)}const kR=2,XR=[{agent:"SharpeShark",timeLabel:"07-08, 15:42",status:"want-to",statusLabel:"Want to",action:"Open ETH long · 1.2 ETH",showActions:!0},{agent:"NightOwl",timeLabel:"07-08, 15:31",status:"rejected",statusLabel:"Rejected",action:"Open BTC short · 0.04 BTC"},{agent:"SharpeShark",timeLabel:"07-08, 15:25",status:"short",statusLabel:"Close Long",action:"BTCUSDT · 0.04 BTC",pnl:{text:"+103.09",tone:"long"}},{agent:"FluxRunner",timeLabel:"07-08, 14:10",status:"long",statusLabel:"Open Long",action:"ETHUSDT · 0.8 ETH"},{agent:"NightOwl",timeLabel:"07-07, 09:42",status:"short",statusLabel:"Open Short",action:"SOLUSDT · 12 SOL"}];function WR(a){switch(a){case"want-to":return{fg:"rgba(200,245,168,0.95)",bg:"rgba(184,245,168,0.12)"};case"rejected":return{fg:"#ff4757",bg:"rgba(255,71,87,0.12)"};case"long":return{fg:"#00ff88",bg:"rgba(0,255,136,0.12)"};case"short":return{fg:"#ff4757",bg:"rgba(255,71,87,0.12)"}}}function YR(a,e,i,r,o,c=1){const u=r/300,d=12*u,m=10*u;tf(a,e,i,r,o,m,c);let h=nf(a,e,i,r,d,"ACTIVITY LOG",u);const g=i+o-d,_=e+d,v=h,S=r-d*2,E=Math.max(48*u,g-h),A=10*u;Jl(a,_,v,S,E,u);const y=58*u,x=10*u,O=6*u,P=_+A+y+O+x+O,C=_+S-A-P,N=_+A+y+O+x/2,L=_+A;h=v+A;const F=v+E-A,T=XR,U=4*u;T.forEach((k,G)=>{if(h>=F-8*u)return;const Q=G===0,de=G===T.length-1,ue=WR(k.status),Y=8*u,z=6*u,H=7*u,J=8*u,he=k.showActions?22*u:0,Se=k.showActions?5*u:0,q=Math.max(Y+2*u+z,H+4*u+J)+Se+he+U;if(h+Math.min(q,28*u)>F)return;a.textAlign="right",a.fillStyle="rgba(255,255,255,0.88)",a.font=`500 ${Y}px "DM Mono", ui-monospace, monospace`,a.fillText(k.agent,L+y,h+Y),a.fillStyle="rgba(255,255,255,0.38)",a.font=`500 ${z}px "DM Mono", ui-monospace, monospace`,a.fillText(k.timeLabel,L+y,h+Y+2*u+z),a.textAlign="left",de||(a.strokeStyle="rgba(255,255,255,0.14)",a.lineWidth=Math.max(1,u),a.beginPath(),a.moveTo(N,h+6*u),a.lineTo(N,h+q),a.stroke());const Ce=2.4*u;a.beginPath(),a.arc(N,h+5*u,Ce,0,Math.PI*2),a.fillStyle=Q?"#c8f5a8":"rgba(255,255,255,0.32)",a.fill(),Q&&(a.beginPath(),a.arc(N,h+5*u,Ce+2.2*u,0,Math.PI*2),a.fillStyle="rgba(200,245,168,0.16)",a.fill());const Le=4*u,Ne=2*u;a.font=`700 ${H}px "DM Mono", ui-monospace, monospace`;const te=k.statusLabel.toUpperCase(),Te=a.measureText(te).width+Le*2,ye=H+Ne*2;en(a,P,h,Te,ye,3*u,ue.bg),a.fillStyle=ue.fg,a.fillText(te,P+Le,h+H+Ne*.35),a.fillStyle="rgba(255,255,255,0.55)",a.font=`400 ${J}px "DM Mono", ui-monospace, monospace`;const ke=h+ye+3*u+J;let tt=k.action;if(k.pnl){const qe=`${k.action} · `;a.fillText(qe,P,ke);const xt=a.measureText(qe).width;a.fillStyle=k.pnl.tone==="long"?"#00ff88":"#ff4757",a.font=`700 ${J}px "DM Mono", ui-monospace, monospace`,a.fillText(k.pnl.text,P+xt,ke)}else{for(;tt.length>8&&a.measureText(tt).width>C;)tt=`${tt.slice(0,-2)}…`;a.fillText(tt,P,ke)}if(k.showActions&&h+ye+3*u+J+Se+he<=F){const qe=h+ye+3*u+J+Se,xt=(C-5*u)/2;un(a,P,qe,xt,he,3*u,"rgba(255,255,255,0.18)",1),a.fillStyle="rgba(255,255,255,0.72)",a.font=`700 ${7*u}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText("REJECT",P+xt/2,qe+he*.68),en(a,P+xt+5*u,qe,xt,he,3*u,"rgba(184,245,168,0.88)"),a.fillStyle="rgba(8,14,10,0.92)",a.fillText("APPROVE",P+xt+5*u+xt/2,qe+he*.68),a.textAlign="left"}h+=q})}function qR(a,e,i,r,o,c=1){const u=r/300,d=12*u,m=10*u;tf(a,e,i,r,o,m,c);let h=nf(a,e,i,r,d,"FUND BUCKET",u);h=SS(a,e,h,r,d,["FUND BUCKET","CREATE BUCKET"],0,u);const g=10*u+36*u,_=e+d,v=h,S=r-d*2,E=Math.max(48*u,i+o-d-g-8*u-h),A=10*u;Jl(a,_,v,S,E,u);const y=_+A,x=S-A*2;let O=v+A;O+=lm(a,y,O,x,u)+8*u,O+=wR(a,y,O,x,"FROM","Select source bucket",u)+8*u,v+E-A-O>70*u&&DR(a,y,O,x,u),LR(a,e+d,i+o-d-g,r-d*2,u,"COMPLETE REQUIRED FIELDS")}function MS(a,e,i,r,o,c,u=0,d=1){switch(e){case"discover":GR(a,i,r,o,c,u,d);break;case"copy":VR(a,i,r,o,c,u,d);break;case"supervise":YR(a,i,r,o,c,d);break;case"isolate":qR(a,i,r,o,c,d);break}}function jR(a,e,i,r,o=0,c=1){a.clearRect(0,0,i,r),MS(a,e,0,0,i,r,o,c)}function ZR(a,e,i,r,o,c=.8,u=1){const{W:d,H:m,layoutDpr:h}=RR(r,i),g=document.createElement("canvas");g.width=d,g.height=m;const _=g.getContext("2d"),v=Math.min(1,Math.max(0,c)),S=_.createLinearGradient(0,0,0,m);S.addColorStop(0,`rgba(8, 10, 14, ${v})`),S.addColorStop(.55,`rgba(5, 7, 13, ${v})`),S.addColorStop(1,`rgba(3, 4, 6, ${v})`),_.fillStyle=S,_.fillRect(0,0,d,m);const E=Math.round(22*h),A=Math.round(.05*m),y=Math.round(.045*m),x=d-E*2;let O=A;const P=Math.min(34*h,d*.095);_.fillStyle="rgba(255,255,255,0.94)",_.font=`normal 400 ${P}px ${o}`,_.textBaseline="alphabetic",_.shadowColor="rgba(10, 14, 23, 0.55)",_.shadowBlur=Math.max(8,12*h),_.shadowOffsetX=0,_.shadowOffsetY=Math.max(1,1.5*h),_.fillText(a.verb,E,O+P*.85),_.shadowColor="transparent",_.shadowBlur=0,_.shadowOffsetY=0,O+=Math.round(.09*m);const C=Math.min(13*h,d*.036);_.fillStyle="rgba(255,255,255,0.94)",_.font=`400 ${C}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`;const N=TR(_,a.description,x),L=O+C;_.shadowColor="rgba(10, 14, 23, 0.45)",_.shadowBlur=Math.max(4,6*h),_.shadowOffsetY=Math.max(.5,1*h),_.fillText(N[0]??a.description,E,L),_.shadowColor="transparent",_.shadowBlur=0,_.shadowOffsetY=0,O=Math.round(L+20*h);const F=E,T=O,U=x,k=Math.max(80*h,m-O-y);MS(_,bR(e),F,T,U,k,0,u);const G=new rm(g);return G.colorSpace=ti,G.minFilter=Ws,G.generateMipmaps=!0,G}const Wp=["M41.9213 3.43614C43.0393 3.43614 43.8716 3.77154 44.4182 4.44235C44.9647 5.138 45.1262 6.1939 44.9026 7.61005L41.884 26.8026C41.7846 27.4982 41.8467 28.0075 42.0703 28.3305C42.2691 28.6784 42.6542 28.8771 43.2256 28.9268L43.8591 28.9641L43.8219 29.2622L36.7784 30.492L36.4803 30.492L40.1324 7.46098C40.3064 6.26843 40.0206 5.67216 39.2753 5.67216C38.9523 5.67216 38.6045 5.75912 38.2318 5.93303C37.8343 6.10694 37.3995 6.44235 36.9275 6.93924L36.7411 6.79017C38.0828 4.55415 39.8095 3.43614 41.9213 3.43614Z","M29.9958 3.43614C31.1138 3.43614 31.9461 3.77154 32.4927 4.44235C33.0393 5.138 33.2007 6.1939 32.9771 7.61005L29.9585 26.8026C29.8591 27.4982 29.9212 28.0075 30.1449 28.3305C30.3436 28.6784 30.7287 28.8771 31.3001 28.9268L31.9337 28.9641L31.8964 29.2622L24.8529 30.492L24.5548 30.492L28.207 7.46098C28.3809 6.26843 28.0952 5.67216 27.3498 5.67216C27.0268 5.67216 26.679 5.75912 26.3063 5.93303C25.9088 6.10694 25.474 6.44235 25.002 6.93924L24.8157 6.79017C26.1573 4.55415 27.884 3.43614 29.9958 3.43614Z","M18.0703 3.43614C19.1883 3.43614 20.0206 3.77154 20.5672 4.44235C21.1138 5.138 21.2753 6.1939 21.0517 7.61005L18.033 26.8026C17.9337 27.4982 17.9958 28.0075 18.2194 28.3305C18.4181 28.6784 18.8032 28.8771 19.3747 28.9268L20.0082 28.9641L19.9709 29.2622L12.9275 30.492L12.6293 30.492L16.2815 7.46098C16.4554 6.26843 16.1697 5.67216 15.4243 5.67216C15.1014 5.67216 14.7535 5.75912 14.3809 5.93303C13.9834 6.10694 13.5486 6.44235 13.0765 6.93924L12.8902 6.79017C14.2318 4.55415 15.9585 3.43614 18.0703 3.43614Z","M45.5631 10.8482C46.0378 11.9189 46.0912 12.9315 45.7231 13.8861C45.3095 14.8231 44.3453 15.4956 42.8305 15.9035L16.576 22.853C15.2325 23.2226 14.7771 24.0651 15.2096 25.3806L15.7698 26.7714L13.8491 27.2839L9.924 22.1284L9.25377 20.6168L40.8242 12.2711C41.6674 12.048 42.2133 11.7494 42.4619 11.3754C42.6651 10.9838 42.669 10.5676 42.4735 10.1267C42.3199 9.78031 42.1016 9.5003 41.8185 9.2867C41.4899 9.05556 41.0511 8.87329 40.5021 8.7399L41.5734 7.5866C42.563 7.86379 43.3915 8.28774 44.0591 8.85845C44.7127 9.39767 45.214 10.0609 45.5631 10.8482Z"],KR="0 0 58 35",QR=58,JR=35;function $R({fill:a="#C8F5A8",width:e=58,height:i=35,padding:r=10,"aria-hidden":o=!0,...c}){const u=[-r,-r,QR+r*2,JR+r*2].join(" ");return D.jsx("svg",{width:e,height:i,viewBox:u,fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":o,...c,children:Wp.map(d=>D.jsx("path",{d,fill:a},d.slice(0,24)))})}const e3={sm:{width:30,height:18},md:{width:30,height:18},lg:{width:44,height:27},hero:{width:76,height:46}};function cm({size:a="md",showWordmark:e=!0,className:i="",brandName:r="Morpheum"}){const o=e3[a];return D.jsxs("span",{className:`brand-mark brand-mark--${a} ${i}`.trim(),children:[D.jsx($R,{className:"brand-mark__icon",width:o.width,height:o.height,padding:0,fill:"var(--terminal-brand)"}),e?D.jsx("span",{className:"brand-mark__word",children:r}):null]})}const cx="!@#$%^&*()_+{}[]|;:,.<>?/0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",t3=50,zu=500,qh=100,ux=168;function n3(){return typeof window>"u"?!1:window.matchMedia("(prefers-reduced-motion: reduce)").matches}function i3(){return cx[Math.floor(Math.random()*cx.length)]??"?"}function fx(a){return Array.from(a).map(e=>{const i=Math.random()*(zu-qh),r=qh+Math.random()*(zu-i-qh),o=Math.min(zu,i+r);return{original:e,start:i,end:o}})}function a3(a){return Math.min(1,Math.max(0,a))}function s3({text:a,className:e,scrollerRef:i}){const r=Xe.useRef(null),o=Xe.useRef(fx(a)),c=n3();return Xe.useEffect(()=>{o.current=fx(a)},[a]),Xe.useEffect(()=>{if(c)return;const u=r.current;if(!u)return;let d=0,m=!0,h=-1;const g=()=>{const v=i.current;if(!v)return;const S=Math.max(0,-v.getBoundingClientRect().top),E=Math.min(zu,Math.max(0,S-t3));if(E===h&&h>=0)return;h=E;const A=o.current,y=u.querySelectorAll(".scroll-dissolve__glyph");let x=A.length>0;for(let O=0;O<A.length;O++){const P=A[O],C=y[O];if(!C)continue;const N=Math.max(.001,P.end-P.start),L=a3((E-P.start)/N);if(L<1&&(x=!1),L<=0){C.textContent=P.original===" "?" ":P.original,C.style.transform="translateY(0)",C.style.opacity="1",C.style.visibility="visible";continue}if(L>=1){C.textContent=P.original===" "?" ":P.original,C.style.transform=`translateY(${-ux}px)`,C.style.opacity="0",C.style.visibility="hidden";continue}C.textContent=i3(),C.style.transform=`translateY(${-L*ux}px)`,C.style.opacity=String(1-L),C.style.visibility="visible"}u.style.visibility=x?"hidden":"visible",u.style.display=x?"none":"block"},_=()=>{m&&(g(),d=requestAnimationFrame(_))};return d=requestAnimationFrame(_),()=>{m=!1,cancelAnimationFrame(d)}},[c,i,a]),c?D.jsx("p",{className:e,"aria-label":a,children:a}):D.jsx("p",{ref:r,className:["scroll-dissolve",e].filter(Boolean).join(" "),"aria-label":a,children:Array.from(a).map((u,d)=>D.jsx("span",{className:"scroll-dissolve__glyph","aria-hidden":!0,children:u===" "?" ":u},`${d}-${u}`))})}const r3="Enter the agentic economy →",Wl=ep.verbs.map((a,e)=>{const i=[{top:"#c8f5a8",mid:"#0a1410",bot:"#1a3d2e"},{top:"#9ee089",mid:"#060e18",bot:"#1e3a52"},{top:"#f0e6a0",mid:"#0c1008",bot:"#2a3820"},{top:"#7fd9a8",mid:"#080810",bot:"#243048"}];return{verb:a.verb,description:a.description,mood:i[e]??i[0]}}),$t=Wl.length,ua=2.95,js=6.9,zo=32,um=4,fm=5,qu=2.05,o3=1,yS=ua*.55,ES=.28,bS=.35,dx=ES+bS,jh=.85,hx=300,l3=35,px=l3/60*1e3,c3=.1;function TS(a){return a<520?{mode:"mobile",canvasAspect:1280/320,fontRefH:320,fontPx:112,planeBaseW:4.55,frustumFill:.9}:a<900?{mode:"tablet",canvasAspect:1600/360,fontRefH:360,fontPx:132,planeBaseW:5.25,frustumFill:.94}:{mode:"desktop",canvasAspect:1920/420,fontRefH:420,fontPx:152,planeBaseW:6.1,frustumFill:.96}}const Zh=4096,mx=1.15;function u3(a,e){const i=window.devicePixelRatio||1,r=e<520?2.5:e<900?2.75:3;return Math.min(Math.max(a*1.35,Math.min(i,r)*1.25),3.5)}function f3(){const a=-($t-1)*ua,e=-.1*ua,r=a+js+e-yS,o=a+.05;return Math.max(.5,r-o)}function d3(a,e,i){const{w:r,h:o}=Yp(a,e,i),c=sf(a,e),u=f3(),d=a/Math.max(1,e),m=zo*Math.PI/180,h=2*u*Math.tan(m/2),g=h*d;return{w:r*c/Math.max(1e-6,g)*a,h:o*c/Math.max(1e-6,h)*e}}const h3=1.35,p3=.72,m3=.62,g3=.2,_3=14,v3=.42,x3=128,S3=12,M3=.002,y3=.0011,gx=.12,E3=.88,AS=4,b3=32,T3=40,A3=AS-1,_x=50,R3=-10,vx=28,C3="/intro-frames",RS=12,jl=121,w3=1,zl=960,Hl=540,D3=10;function Du(){const a=window.devicePixelRatio||1,e=window.innerWidth<900,i=typeof window.matchMedia=="function"&&window.matchMedia("(pointer: coarse)").matches;return Math.min(a,e||i?1.5:2)}const ju=(jl-1)/RS,CS=[0,2,4,6,8,ju],L3=[{in:2,out:2.2},{in:1.5,out:2.4},{in:2.3,out:1.7},{in:1.8,out:2.1},{in:2.1,out:2.6}];function N3(a){const e=w3+a;return`${C3}/frame_${String(e).padStart(3,"0")}.webp`}function U3(a){const e=jl-1,i=Pt.clamp(a,0,ju);return Pt.clamp(Math.round(i*RS),0,e)}function O3(a,e){const i=L3[a]??{in:2,out:2},r=Pt.clamp(e,0,1);return r<.5?.5*Math.pow(2*r,i.in):1-.5*Math.pow(2*(1-r),i.out)}function xx(a,e,i,r,o){const c=Math.max(1,$t-1),u=[0,e,e+1/c*i,e+2/c*i,r,Math.max(r+.001,o)],d=CS,m=u.length-1;if(a<=u[0])return d[0];if(a>=u[m])return d[m];let h=0;for(;h<m-1&&a>=u[h+1];)h+=1;const g=u[h],_=u[h+1],v=_>g?Pt.clamp((a-g)/(_-g),0,1):1;return Pt.lerp(d[h],d[h+1],O3(h,v))}function P3(a){let e=!1;const i=new Array(jl).fill(null);async function r(c){if(e)return;const u=new Image;u.decoding="async",u.src=N3(c),await new Promise(d=>{u.onload=()=>d(),u.onerror=()=>d()}),!(e||!u.complete||u.naturalWidth<1)&&(i[c]=u,a==null||a(c,u))}const o=(async()=>{await r(0);let c=1;for(;c<jl&&!e;){const u=[];for(let d=0;d<D3&&c<jl;d+=1,c+=1)u.push(r(c));await Promise.all(u)}})();return{frames:i,cancel:()=>{e=!0},ready:o}}const I3=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,B3=`
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
`,F3=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,z3=`
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
`,H3='"Reckk Heading", Georgia, "Times New Roman", serif',wS="Morpheum Wordmark",$l=`"${wS}"`,G3=[{t:0,c:"#e8ffe0"},{t:.45,c:"#c8f5a8"},{t:1,c:"#f0e6a0"}];async function V3(){if(typeof document>"u"||!document.fonts)return!1;try{const a=new FontFace(wS,`url(${ER})`,{weight:"normal",style:"normal"});document.fonts.add(await a.load()),await document.fonts.load(`normal 152px ${$l}`);const e=document.fonts.check(`normal 152px ${$l}`);return e||console.error("[FlowIntro] Morpheum Wordmark failed to bind — title will not use Reckk fallback"),e}catch(a){return console.error("[FlowIntro] Morpheum Wordmark load failed",a),!1}}async function k3(){if(!(typeof document>"u"||!document.fonts))try{await V3();const a=new FontFace("Reckk Title",`url(${yR})`,{weight:"normal",style:"normal"});document.fonts.add(await a.load());const e=new FontFace("Reckk Heading",`url(${MR})`,{weight:"normal",style:"normal"});document.fonts.add(await e.load()),await document.fonts.ready,await document.fonts.load(`normal 152px ${$l}`),await document.fonts.load('normal 64px "Reckk Heading"'),await document.fonts.load('normal 124px "Reckk Title"')}catch{}}const Vs="flow-intro-hide-chrome",X3=72,W3=120,Kh=80;function Y3(a){return a<=X3}const q3=280,j3=2,Qh=.42;function ks(a){const e=document.documentElement,i=e.style.scrollBehavior;e.style.scrollBehavior="auto",window.scrollTo(0,Math.max(0,a)),e.style.scrollBehavior=i}function Jh(){const a=document.getElementById("hero");if(!a)return;const e=a.getBoundingClientRect().top+window.scrollY;ks(e)}function Sx(){document.body.classList.remove(Vs),Jh(),requestAnimationFrame(()=>{Jh(),requestAnimationFrame(()=>{Jh()})})}function $a(a){const e=Pt.clamp(a,0,1);return e*e*e*(e*(e*6-15)+10)}function wo(a){const e=Math.max(1,a),i=Math.max(1,$t*e*o3),r=Math.max(1,i/Math.max(1,$t-1));return{cardPx:i,titlePx:r,totalPx:i+r}}const Z3=900,K3=1100,Q3=1300,J3=1500,$3=6,eC=36,tC=50,nC=.5,iC=1024,aC=.75,af=.8;function dm(a){return a>=iC}function sC(a){return dm(a)?Z3:K3}function rC(a){return dm(a)?Q3:J3}function DS(a){return Math.max(2,Math.max(1,a)*.004)}function oC(a,e){const{cardPx:i,titlePx:r}=wo(e),o=Math.max(1,$t-1),c=Pt.clamp(Math.round(a),0,$t-1);return r+c/o*i}function lC(a){return a.offsetTop}function cC(a,e,i){return a.offsetTop+oC(e,i)}function Lu(){const a=document.getElementById("hero");return a?a.getBoundingClientRect().top+window.scrollY:null}function uC(a){const e=$t-1;return Pt.clamp(Math.round(a),0,e)}function $h(a,e,i,r){const o=DS(r);return a<e-o?{kind:"title"}:{kind:"card",idx:uC(i)}}function fC(a,e,i,r,o,c,u){if(o)return!1;const d=i/Math.max(1,$t-1),m=r+d*nC;return!(a>m||c<u*.5)}function sf(a,e){const i=a/Math.max(1,e),r=zo*Math.PI/180,o=2*js*Math.tan(r/2),c=o*i,u=qu*um/fm,d=.992,m=d*o/qu,h=d*c/u;return Pt.clamp(Math.min(m,h),.52,2.35)}function LS(a,e,i=af){const r=sf(a,e);return(dm(a)?r*aC:r)*i}function dC(a,e){const i=window.devicePixelRatio||1,r=e<520?2.5:e<900?2.75:3;return Math.min(Math.max(a*1.25,Math.min(i,r)),3)}function hC(a,e,i=af){const r=LS(a,e,i),o=qu*r,c=o*um/fm,u=a/Math.max(1,e),d=zo*Math.PI/180,m=2*js*Math.tan(d/2),h=m*u;return{w:c/Math.max(1e-6,h)*a,h:o/Math.max(1e-6,m)*e}}function Yp(a,e,i){const r=TS(a),o=sf(a,e),c=a/Math.max(1,e),u=zo*Math.PI/180,m=2*js*Math.tan(u/2)*c,h=r.frustumFill*m/Math.max(1e-6,o),g=Math.min(r.planeBaseW,h);return{w:g,h:g*i}}function pC(a,e){const i=a/Math.max(1,$t-1),r=Math.min(Math.max(1,e*.38),Math.max(1,i*.34));return i<=r+.001?0:1-r/i}function mC(a,e){const i=Math.min(Math.max(1,e*.38),Math.max(1,a*.34));return a<=i+.001?0:1-i/a}function gC(a,e){const i=Pt.clamp(e,0,.999);if(a<i)return{titleOp:1,lastCardOp:0};const r=Math.max(1e-6,1-i),o=$a(Pt.clamp((a-i)/r,0,1));return{titleOp:1-o,lastCardOp:o}}function _C(a,e,i,r=0){const o=$t-1;if(a<=0)return{opacity:e===0?1:0};if(a>=o-1e-5)return{opacity:e===o?1:0};const c=Math.floor(a);if(c>=o)return{opacity:e===o?1:0};if(e!==c&&e!==c+1)return{opacity:0};const u=a-c,d=Pt.clamp(i,0,.999);if(u<d)return{opacity:e===c?1:0};const m=$a(Pt.clamp((u-d)/Math.max(1e-6,1-d),0,1));return e===c?{opacity:r>=.999?0:1}:{opacity:Math.max(m,r)}}function vC(a){return new Qi({uniforms:{uMap:{value:a},uOpacity:{value:1},uWipe:{value:0},uWipeEdge:{value:c3}},vertexShader:F3,fragmentShader:z3,transparent:!0,depthWrite:!0,depthTest:!0,side:is})}function xC(a,e){return a>1.5&&a<e-.5}function SC(a){return Pt.clamp(540/Math.max(a,340),.2,.55)}function MC(a,e,i){const r=[],o=_3;for(let c=0;c<o;c++){const u=Pt.clamp(a-c/Math.max(1,o-1)*v3,-.08,1.08),d=Math.sin(u*Math.PI*2*h3)*m3*i,m=Math.sin(u*Math.PI*2*p3)*g3,h=gx+c/Math.max(1,o-1)*(E3-gx),g=e-h;r.push(new ie(d,m,g))}return r}function yC(a,e,i,r){const o=a.length;if(o<2)return new Ki;const c=[],u=[],d=[],m=[],h=new ie,g=new ie,_=new ie,v=new ie(0,1,0),S=e+1;for(let A=0;A<o;A++){A===0?h.subVectors(a[1],a[0]).normalize():A===o-1?h.subVectors(a[o-1],a[o-2]).normalize():h.subVectors(a[A+1],a[A-1]).normalize(),g.copy(v).cross(h),g.lengthSq()<1e-8&&g.set(1,0,0).cross(h),g.normalize(),_.crossVectors(h,g).normalize();const y=o===1?0:A/(o-1),x=i+(r-i)*Math.pow(y,1.5);for(let O=0;O<=e;O++){const P=O/e*Math.PI*2,C=Math.cos(P),N=Math.sin(P),L=a[A];c.push(L.x+(C*g.x+N*_.x)*x,L.y+(C*g.y+N*_.y)*x,L.z+(C*g.z+N*_.z)*x),u.push(C*g.x+N*_.x,C*g.y+N*_.y,C*g.z+N*_.z),d.push(o===1?0:A/(o-1),O/e)}}for(let A=0;A<o-1;A++)for(let y=0;y<e;y++){const x=A*S+y,O=x+1,P=x+S,C=P+1;m.push(x,P,O,O,P,C)}const E=new Ki;return E.setAttribute("position",new Zi(c,3)),E.setAttribute("normal",new Zi(u,3)),E.setAttribute("uv",new Zi(d,2)),E.setIndex(m),E.computeBoundingSphere(),E}function Mx(a,e,i,r,o,c,u,d=af){const m={verb:a.verb,description:a.description},h=hC(r,o,d),g=dC(i,r);return ZR(m,e,g,h.w,H3,c,u)}function yx(a,e,i){const r=TS(e),o=u3(a,e),c=d3(e,i,1/r.canvasAspect);let u=Math.round(Math.max(256,c.w*o*mx)),d=Math.round(Math.max(64,c.h*o*mx));const m=Math.round(u/r.canvasAspect);if(Math.abs(m-d)/Math.max(d,1)>.08&&(d=Math.max(64,m)),u>Zh||d>Zh){const k=Zh/Math.max(u,d);u=Math.max(256,Math.round(u*k)),d=Math.max(64,Math.round(d*k))}const h=document.createElement("canvas");h.width=u,h.height=d;const g=h.getContext("2d");g.clearRect(0,0,u,d);const _="Morpheum",v=d/o;let S=r.fontPx*(v/r.fontRefH);g.textAlign="left",g.textBaseline="alphabetic";const E=()=>{g.font=`normal ${S*o}px ${$l}`};E();const A=k=>{g.font=`normal ${k*o}px ${$l}`;const G=g.measureText(_),Q=Math.abs(G.actualBoundingBoxLeft??0),de=Math.abs(G.actualBoundingBoxRight??G.width),ue=Math.abs(G.actualBoundingBoxAscent??k*o*.8),Y=Math.abs(G.actualBoundingBoxDescent??k*o*.25);return{left:Q,right:de,width:Q+de,ascent:ue,descent:Y}},y=Math.max(1.25,1.85*o)*2,x=64*o+y,O=40*o+y,P=k=>{const G=A(k);return G.width+x*2<=u&&G.ascent+G.descent+O*2<=d},C=S+24;for(;!P(S)&&S>48;)S-=2;for(;P(S+2)&&S<C;)S+=2;E();const N=A(S),L=(u-N.width)/2+N.left,F=d/2+(N.ascent-N.descent)/2,T=g.createLinearGradient(L-N.left,F-N.ascent,L+N.right,F+N.descent);G3.forEach(k=>T.addColorStop(k.t,k.c)),g.lineJoin="round",g.miterLimit=2,g.lineWidth=Math.max(1.25,1.85*o),g.strokeStyle="rgba(8,12,10,0.22)",g.shadowColor="rgba(10, 14, 23, 0.55)",g.shadowBlur=Math.max(10,16*o),g.shadowOffsetX=0,g.shadowOffsetY=Math.max(1,2*o),g.strokeText(_,L,F),g.fillStyle=T,g.fillText(_,L,F),g.shadowColor="transparent",g.shadowBlur=0,g.shadowOffsetY=0;const U=new rm(h);return U.colorSpace=ti,U.minFilter=_n,U.magFilter=_n,U.generateMipmaps=!1,U}function Ex(a,e){a.generateMipmaps=!1,a.minFilter=_n,a.magFilter=_n,a.wrapS=da,a.wrapT=da;const i=e.capabilities.getMaxAnisotropy();a.anisotropy=Math.min(16,i),a.needsUpdate=!0}function EC({cardAlpha:a=.8,modalChassisAlpha:e=1,cardSize:i=af}){const r=Xe.useRef(null),o=Xe.useRef(null),c=Xe.useRef(null),u=Xe.useRef(null),d=Xe.useRef(!1),m=Xe.useRef(!1),h=Xe.useRef(null),g=Xe.useRef(null),_=Xe.useRef(a);_.current=Math.min(1,Math.max(0,a));const v=Xe.useRef(e);v.current=Math.min(1,Math.max(0,e));const S=Xe.useRef(i);S.current=Math.max(.1,i);const E=Xe.useCallback(()=>{var O;if(d.current)return;d.current=!0,m.current=!1,(O=h.current)==null||O.call(h);const A=()=>{const P=o.current;P==null||P.classList.add("flow-intro__sticky--exit"),window.setTimeout(()=>{Sx(),window.setTimeout(()=>{d.current=!1},100)},q3)};if(window.matchMedia("(prefers-reduced-motion: reduce)").matches||!g.current){A();return}g.current()||A()},[]);return Xe.useLayoutEffect(()=>{const A=window.matchMedia("(prefers-reduced-motion: reduce)").matches,y=window.location.hash.replace(/^#/,"");return A||y!==""&&y!=="flow"&&y!=="hero"||document.body.classList.add(Vs),()=>{document.body.classList.remove(Vs)}},[]),Xe.useEffect(()=>{const A=y=>{if(y.key!=="Escape")return;const x=document.getElementById("hero");x&&x.getBoundingClientRect().top>8&&(y.preventDefault(),E())};return window.addEventListener("keydown",A),()=>window.removeEventListener("keydown",A)},[E]),Xe.useEffect(()=>{const A=window.location.hash.replace(/^#/,"");A&&A!=="flow"&&A!=="hero"&&requestAnimationFrame(()=>{var y;(y=document.getElementById(A))==null||y.scrollIntoView({block:"start"})})},[]),Xe.useEffect(()=>{const A=c.current,y=r.current;if(!A||!y)return;const x=A,O=y;let P=!1;if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){document.body.classList.remove(Vs);const L=u.current;L&&(L.style.height="0px");return}let N;return(async()=>{if(await k3(),P)return;const L=Du(),F=Math.max(320,x.clientWidth||window.innerWidth),T=Math.max(1,x.clientHeight||window.innerHeight),U=[],k=[],G=[],Q=new Float64Array($t).fill(-1);Wl.forEach((j,ne)=>{const xe=$t-1-ne,be=Wl[xe],Be=Mx(be,xe,L,F,T,_.current,v.current,S.current);G.push(Be);const Ze=vC(Be);U.push(Ze);const Ye=qu,lt=Ye*um/fm,Tt=new Ni(new Ys(lt,Ye),Ze);Tt.position.set(0,0,-ne*ua),Tt.renderOrder=ne,k.push(Tt)});const de=yx(L,F,T),ue=new Yu({map:de,transparent:!0,opacity:0,depthWrite:!1,depthTest:!1,side:Ea}),Y=de.image.height/de.image.width,{w:z,h:H}=Yp(F,T,Y),J=new Ni(new Ys(z,H),ue);J.position.set(0,0,-($t-1)*ua+.05),J.renderOrder=T3;const he=new nb,Se=new qi(zo,1,.08,120),B=typeof window.matchMedia=="function"&&window.matchMedia("(pointer: coarse)").matches,q=new SR({antialias:!B,alpha:!1,powerPreference:"high-performance"});q.setPixelRatio(Du()),q.outputColorSpace=ti,q.sortObjects=!0,x.appendChild(q.domElement),Ex(de,q);const Ce=new Vl;k.forEach(j=>Ce.add(j)),Ce.add(J),he.add(Ce);const Le=new Qi({uniforms:{uStrength:{value:0}},vertexShader:I3,fragmentShader:B3,transparent:!0,toneMapped:!1,depthTest:!1,depthWrite:!1,blending:tp}),Ne=new Ni(new Ki,Le);Ne.frustumCulled=!1,Ne.renderOrder=_x,Ne.visible=!1,he.add(Ne);let te=null,Te=null,ye=null,ke=-1;const tt=document.createElement("canvas");tt.width=zl,tt.height=Hl;const qe=tt.getContext("2d",{alpha:!1,desynchronized:!0}),xt=P3((j,ne)=>{P||!qe||!te||j===0&&ke<0&&(qe.drawImage(ne,0,0,zl,Hl),te.needsUpdate=!0,ke=0)});function gt(j){const ne=xt.frames[j];if(ne)return ne;for(let xe=1;xe<12;xe+=1){const be=xt.frames[j-xe];if(be)return be;const Be=xt.frames[j+xe];if(Be)return Be}return null}function St(j){if(!qe||!te)return;const ne=U3(j);if(ne===ke)return;const xe=gt(ne);xe&&(qe.drawImage(xe,0,0,zl,Hl),te.needsUpdate=!0,ke=ne)}qe&&(qe.fillStyle="#000",qe.fillRect(0,0,zl,Hl),te=new rm(tt),te.colorSpace=ti,te.minFilter=_n,te.magFilter=_n,te.generateMipmaps=!1,Te=new Yu({map:te,depthTest:!1,depthWrite:!1,toneMapped:!1}),ye=new Ni(new Ys(1,1),Te),ye.frustumCulled=!1,ye.renderOrder=R3,ye.position.set(0,0,-vx),Se.add(ye),he.add(Se),St(CS[0]));function Mt(){if(!ye)return;const j=vx,ne=zo*Math.PI/180,xe=2*Math.tan(ne/2)*j,be=xe*Se.aspect,Be=zl/Hl;be/Math.max(1e-6,xe)>Be?ye.scale.set(be,be/Be,1):ye.scale.set(xe*Be,xe,1)}const yt=-($t-1)*ua,tn=-.1*ua,nn=yt+js+tn,on=nn-yS;function fn(j){const ne=$t-1,xe=Pt.clamp(j,0,ne);return-(ne-xe)*ua+js+tn}let ct=Math.max(1,x.clientHeight||window.innerHeight),Vt=!1,Z=window.innerWidth,Ut=!1,bt=!1;function I(){return Math.max(1,window.innerHeight)}function b(j){return Ut?j>W3&&(Ut=!1):Y3(j)&&(Ut=!0),Ut}function ee(){const j=u.current;if(!j)return;const{totalPx:ne}=wo(ct),xe=ct*dx,Be=`${Math.max(Math.ceil(ne+xe+ct*jh+32-hx),Math.ceil(ct*1.08))}px`;j.style.height!==Be&&(j.style.height=Be)}function le(){var lt;const j=Math.max(320,x.clientWidth||window.innerWidth),ne=Math.max(1,x.clientHeight||ct),xe=Du();G.forEach((Tt,st)=>{Tt.dispose();const ht=$t-1-st,ut=Mx(Wl[ht],ht,xe,j,ne,_.current,v.current,S.current);G[st]=ut,U[st].uniforms.uMap.value=ut}),(lt=ue.map)==null||lt.dispose();const be=yx(xe,j,ne);ue.map=be,ue.needsUpdate=!0,Ex(be,q);const Be=be.image.height/be.image.width,{w:Ze,h:Ye}=Yp(j,ne,Be);J.geometry.dispose(),J.geometry=new Ys(Ze,Ye)}function me(){const j=x.clientWidth,ne=x.clientHeight;j<2||ne<2||(Se.aspect=j/ne,Se.updateProjectionMatrix(),q.setPixelRatio(Du()),q.setSize(j,ne,!1),Mt(),le(),Vt||ee())}function Pe(){Vt=!1,ct=I(),Z=window.innerWidth,me()}me(),requestAnimationFrame(()=>{P||le()});let Oe=null;function ge(){if(P||Oe)return!1;const j=Math.max(1,ct),{cardPx:ne,titlePx:xe,totalPx:be}=wo(j),Be=O.getBoundingClientRect(),Ze=Math.max(1,O.offsetHeight-j),Ye=Pt.clamp(-Be.top,0,Ze),lt=j*dx,Tt=be+lt,st=xx(Ye,xe,ne,be,Tt),ht=Math.max(.08,ju-st),ut=Lu()??O.offsetTop+Ze;Oe={startMs:performance.now(),startBgSec:st,startScrollY:window.scrollY,endScrollY:ut,durationMs:ht/j3*1e3,camZ:Se.position.z};const Ue=o.current;return Ue&&(Ue.style.setProperty("--intro-ui-opacity","0"),Ue.classList.contains("flow-intro__sticky--exit")&&(Ue.style.transition="none",Ue.classList.remove("flow-intro__sticky--exit"),Ue.offsetWidth,Ue.style.transition="")),!0}g.current=ge;let _e=0;function Ie(){var Ur,Or;if(P)return;if(_e=requestAnimationFrame(Ie),Oe){const pt=Oe,xn=Math.min(1,(performance.now()-pt.startMs)/pt.durationMs),Mi=$a(xn);St(Pt.lerp(pt.startBgSec,ju,xn)),Mt(),Se.position.set(0,0,pt.camZ),Se.lookAt(0,0,pt.camZ-js),k.forEach((Bi,Qn)=>{const yi=U[Qn];yi.uniforms.uOpacity.value=0,yi.uniforms.uWipe.value=1,Bi.visible=!1}),ue.opacity=0,J.visible=!1,Ne.visible=!1,Le.uniforms.uStrength.value=0,ks(Pt.lerp(pt.startScrollY,pt.endScrollY,Mi));let Nn=0;xn>Qh&&(Nn=$a((xn-Qh)/Math.max(1e-6,1-Qh))),o.current&&(o.current.style.setProperty("--intro-ui-opacity","0"),o.current.style.setProperty("--intro-tagline-opacity","0")),q.domElement.style.opacity=String(1-Nn),document.body.classList.add(Vs),q.render(he,Se),xn>=1&&(Oe=null,Sx(),window.setTimeout(()=>{d.current=!1},100));return}const j=I(),ne=document.getElementById("hero"),xe=ne?ne.getBoundingClientRect().top:0,be=ne?b(xe):!0,{totalPx:Be}=wo(ct),Ze=O.getBoundingClientRect(),Ye=Math.max(1,O.offsetHeight-ct),lt=Pt.clamp(-Ze.top,0,Ye);!be&&lt<=Be?(Vt=!1,Math.abs(j-ct)>Kh&&(ct=j,ee())):Vt=!0;const st=ct,{cardPx:ht,titlePx:ut,totalPx:Ue}=wo(st),vn=Math.max(1,O.offsetHeight-st),ot=Pt.clamp(-Ze.top,0,vn),hn=Math.min(ot,Ue),Zn=Math.max(1,Ue),ai=st*ES,Kn=st*bS,Nt=ai+Kn,jt=ot-Ue,si=$a(Pt.clamp(jt/Math.max(1,ai),0,1)),Ot=$a(Pt.clamp((jt-ai)/Math.max(1,Kn),0,1)),fi=x.clientWidth,ta=x.clientHeight,xi=Math.max(1,ut),Bn=hn<xi,wr=Bn?Pt.clamp(hn/xi,0,1):0,ko=Math.max(0,hn-xi),ls=Math.max(1,ht),Da=Pt.clamp(ko/ls,0,1)*($t-1),Xo=sf(fi,ta),nc=LS(fi,ta,S.current),La=Bn?Pt.lerp(on,nn,wr):fn(Da),Si=pC(ht,st),Wo=mC(xi,st),cs=gC(wr,Wo),na=$t-1,Yo=Ue+Nt;St(xx(ot,xi,ht,Ue,Yo)),Mt(),Se.position.set(0,0,La),Se.lookAt(0,0,La-js);const Na=Ue+Nt;let er=0;if(vn>Na&&ot>=Na){const pt=Math.max(1,vn-Na);er=$a(Pt.clamp((ot-Na)/pt,0,1))}const Dr=Math.max(1,Nt+st*jh),Lr=ot<=Zn?Pt.clamp(ot/Zn,0,1):1+Pt.clamp(jt/Dr,0,1)*.45;if(xC(ot,vn)){const pt=MC(Lr,La,SC(fi)),Mi=new mb(pt,!1,"centripetal").getSpacedPoints(x3);if(Mi.length>=2){const Nn=yC(Mi,S3,M3,y3),Bi=Ne.geometry.getAttribute("position"),Qn=Nn.getAttribute("position");if(Bi&&Qn&&Bi.count===Qn.count&&((Ur=Ne.geometry.getIndex())==null?void 0:Ur.count)===((Or=Nn.getIndex())==null?void 0:Or.count)&&Bi&&Qn){Bi.array.set(Qn.array),Bi.needsUpdate=!0;const us=Ne.geometry.getAttribute("normal"),fs=Nn.getAttribute("normal");us&&fs&&(us.array.set(fs.array),us.needsUpdate=!0);const qo=Ne.geometry.getAttribute("uv"),ic=Nn.getAttribute("uv");qo&&ic&&(qo.array.set(ic.array),qo.needsUpdate=!0),Nn.dispose()}else Ne.geometry.dispose(),Ne.geometry=Nn;Ne.visible=!0;const Pr=Bn||Da<Pt.clamp(Si,0,.999);Ne.renderOrder=Pr?A3:_x,Le.uniforms.uStrength.value=.36*(1-er*.92)}else Ne.visible=!1,Le.uniforms.uStrength.value=0}else Ne.visible=!1,Le.uniforms.uStrength.value=0;const Gn=Math.floor(($t-1)/2),ia=performance.now(),Nr=Pt.clamp(Si,0,.999);for(let pt=0;pt<$t;pt++){if(Bn||Da<=pt+1e-5||Da<pt+Nr){Q[pt]=-1;continue}Q[pt]<0&&(Da>=pt+1-1e-5?Q[pt]=ia-px:Q[pt]=ia)}if(k.forEach((pt,xn)=>{const Mi=-xn*ua,Nn=$t-1-xn,Bi=Q[Nn];let Qn=Bi<0?0:$a(Pt.clamp((ia-Bi)/px,0,1));!Bn&&Nn===$t-1&&Ot>0&&(Qn=Math.max(Qn,Ot));let{opacity:yi}=_C(Da,Nn,Si,Qn);Bn&&xn===na&&(yi*=cs.lastCardOp,Qn=0);let Pr=1,us=0;!Bn&&Nn===$t-1&&yi>.02&&si>0&&(Pr=1-.28*si,us=-ua*.32*si),pt.position.set(0,0,Mi+us),pt.scale.setScalar(nc*Pr);const fs=U[xn];fs.uniforms.uOpacity.value=yi,fs.uniforms.uWipe.value=Qn,fs.depthWrite=yi>=.995&&Qn<.02,pt.visible=yi>.003&&Qn<.997,pt.renderOrder=xn<=Gn?AS+xn:b3+(xn-Gn-1)}),J.position.set(0,0,-na*ua+.05),J.scale.setScalar(Xo),ue.opacity=Bn?cs.titleOp:0,J.visible=ue.opacity>.003,!d.current){m.current?bt=!1:be?bt=!0:bt&&ot<Ue-st*.25&&(bt=!1),document.body.classList.toggle(Vs,!bt);const pt=o.current;pt!=null&&pt.classList.contains("flow-intro__sticky--exit")&&!be&&(pt.style.transition="none",pt.classList.remove("flow-intro__sticky--exit"),pt.offsetWidth,pt.style.transition="")}if(!Vt){const pt=Nt+st*jh+32-hx,xn=Math.max(Math.ceil(Ue+pt),Math.ceil(st*1.08)),Mi=u.current;if(Mi){const Nn=`${xn}px`;Mi.style.height!==Nn&&(Mi.style.height=Nn)}}const tr=1-er*.96;o.current&&(o.current.style.setProperty("--intro-ui-opacity",String(tr)),o.current.style.setProperty("--intro-tagline-opacity","1"));const of=String(1-er);q.domElement.style.opacity=of,q.render(he,Se)}Ie();let Ge=0,ze=0,we=!1,Ke="page",Qe=!1,it=!1,X=!1,De=0,ve=0,Fe=0,He=!1,Ae=!1,Je=0,je=window.scrollY,Xt={kind:"title"};const Ht=8;function jn(){ze&&(window.clearTimeout(ze),ze=0)}function Hn(){Ge&&(cancelAnimationFrame(Ge),Ge=0),we=!1,Ke="page",m.current=!1}function In(){Hn(),jn(),Qe=!1}h.current=In;function ii(){var Ue;const j=Math.max(1,ct),{cardPx:ne,titlePx:xe,totalPx:be}=wo(j),Be=O.getBoundingClientRect(),Ze=Math.max(1,O.offsetHeight-j),Ye=Pt.clamp(-Be.top,0,Ze),lt=document.getElementById("hero"),Tt=lt?b(lt.getBoundingClientRect().top):!0,st=((Ue=o.current)==null?void 0:Ue.getBoundingClientRect().bottom)??j,ut=Math.max(0,Math.min(Ye,be)-xe)/Math.max(1,ne)*($t-1);return{innerH:j,cardPx:ne,titlePx:xe,totalPx:be,scrolledPx:Ye,landed:Tt,stickyBottom:st,depthT:ut}}function En(j=ii()){return fC(j.scrolledPx,j.titlePx,j.cardPx,j.totalPx,j.landed,j.stickyBottom,j.innerH)}function rs(){return we||En()}function Oi(j){let ne=j.deltaY;return j.deltaMode===1?ne*=16:j.deltaMode===2&&(ne*=window.innerHeight),ne}function ln(){jn(),Qe=!0,ze=window.setTimeout(()=>{ze=0,Qe=!1},tC)}function Dn(j,ne){return j.kind==="title"?lC(O):j.kind==="card"?cC(O,j.idx,ne.innerH):Lu()}function Ln(j){if(P||d.current||we)return;const ne=ii(),xe=j.kind==="hero";if(!xe&&!En(ne))return;const be=Dn(j,ne);if(be==null)return;const Be=window.scrollY,Ze=be-Be;if(Xt=j.kind==="hero"?{kind:"card",idx:$t-1}:j,Math.abs(Ze)<DS(ne.innerH)){ks(be),ln();return}we=!0,Ke=xe?"exit":"page",m.current=xe,Qe=!0;const Ye=xe?rC(window.innerWidth):sC(window.innerWidth),lt=performance.now(),Tt=ht=>{if(ks(ht),we=!1,Ke="page",Ge=0,!xe){m.current=!1,ln();return}m.current=!1,requestAnimationFrame(()=>{const ut=Lu();ut!=null&&ks(ut),requestAnimationFrame(()=>{const Ue=Lu();Ue!=null&&ks(Ue),ln()})})},st=ht=>{if(P||d.current){we=!1,Ke="page",Ge=0,m.current=!1;return}if(Ke==="page"&&!En(ii())){Hn(),Qe=!1;return}const ut=Math.min(1,(ht-lt)/Ye);ks(Be+Ze*$a(ut)),ut<1?Ge=requestAnimationFrame(st):Tt(be)};Ge=requestAnimationFrame(st)}function Pi(j,ne){const xe=$t-1,be=ne>0?1:-1,Be=$h(j.scrolledPx,j.titlePx,j.depthT,j.innerH);if(Be.kind==="title")return be<0?null:{kind:"card",idx:0};const Ze=Be.idx+be;return Ze<0?{kind:"title"}:Ze>xe?be>0?{kind:"hero"}:{kind:"card",idx:xe}:{kind:"card",idx:Ze}}function os(j){const ne=ii();if(!En(ne)&&!(we&&Ke==="exit"))return!1;const xe=Pi(ne,j);return xe===null?!1:(Ln(xe),!0)}function Qs(j,ne){return Pi(j,ne)===null}function pa(j){if(d.current||Oe){j.preventDefault();return}if(!rs())return;const ne=Oi(j),xe=ii();if(!En(xe)&&Ke!=="exit")return;const be=Pi(xe,ne>0?1:-1);if(be===null){(we||Qe)&&In();return}if(we||Qe){j.preventDefault();return}if(Math.abs(ne)<$3){j.preventDefault();return}j.preventDefault(),Ln(be)}function Ji(j){var ne;if(!(d.current||Oe)&&(ve=((ne=j.touches[0])==null?void 0:ne.clientY)??ve,De=ve,Fe=window.scrollY,it=!1,X=we||En(),X&&!we)){const xe=ii();Xt=$h(xe.scrolledPx,xe.titlePx,xe.depthT,xe.innerH)}}function $i(j){var xe;if(d.current||Oe){j.preventDefault();return}const ne=((xe=j.touches[0])==null?void 0:xe.clientY)??De;if(!it){if(!X&&(we||En())&&(X=!0,ve=ne,De=ne,Fe=window.scrollY),!X)return;const be=ve-ne;if(Math.abs(be)<Ht){De=ne;return}const Be=be>0?1:-1,Ze=ii();if(!we&&!En(Ze)){X=!1,De=ne;return}if(Qs(Ze,Be)){X=!1,In(),De=ne;return}we&&In(),it=!0,X=!1,Fe=window.scrollY,Xt=$h(Ze.scrolledPx,Ze.titlePx,Ze.depthT,Ze.innerH)}j.preventDefault(),De=ne,we||ks(Fe)}function ui(){if(d.current||Oe){it=!1,X=!1;return}const j=it,ne=X,xe=ve-De;if(it=!1,X=!1,we)return;if(!j){ne&&In();return}if(!En())return;if(Math.abs(xe)<eC){Ln(Xt);return}const be=xe>0?1:-1,Be=ii();if(Qs(Be,be)){In();return}os(be)}function Ii(j){j.pointerType!=="touch"&&j.button===0&&(He=!0,Ae=!1,Je=window.scrollY,En()&&Hn())}function ma(j){if(j.pointerType==="touch"||!He)return;if(He=!1,!Ae||!En()){Ae=!1;return}const ne=ii(),xe=window.scrollY>=Je?1:-1,be=Pi(ne,xe);if(Ae=!1,be===null){In();return}Ln(be)}function ea(j){j.pointerType!=="touch"&&(He=!1,Ae=!1)}function dn(j){j.button===0&&(d.current||Oe||Ae||we||Qe||En()&&(j.preventDefault(),os(1)))}function Js(j){var Be;const ne=j.target;if((Be=ne==null?void 0:ne.closest)!=null&&Be.call(ne,"input, textarea, select, [contenteditable=true]"))return;if(d.current||Oe){(j.key==="ArrowDown"||j.key==="ArrowRight"||j.key==="ArrowUp"||j.key==="ArrowLeft"||j.key==="Enter"||j.key===" ")&&j.preventDefault();return}const xe=j.key==="ArrowDown"||j.key==="ArrowRight"||j.key==="Enter"||j.key===" ",be=j.key==="ArrowUp"||j.key==="ArrowLeft";if(!(!xe&&!be)){if(we||Qe){j.preventDefault();return}En()&&(j.preventDefault(),os(xe?1:-1))}}function R(){const j=window.scrollY,ne=j-je;je=j,He&&Math.abs(ne)>.5&&(Ae=!0),we&&Ke==="page"&&!En()&&In()}function K(){In(),Pe()}function ce(){In();const j=I(),ne=window.innerWidth,xe=Math.abs(j-ct),be=Math.abs(ne-Z)>1;if(Vt){xe>Kh||be?Pe():me();return}ct=j,Z=ne,me()}function se(){In();const j=I();Math.abs(j-ct)<=Kh||(Vt?Pe():(ct=j,Z=window.innerWidth,me()))}window.addEventListener("wheel",pa,{passive:!1}),window.addEventListener("touchstart",Ji,{passive:!0}),window.addEventListener("touchmove",$i,{passive:!1}),window.addEventListener("touchend",ui,{passive:!0}),window.addEventListener("touchcancel",ui,{passive:!0}),window.addEventListener("pointerdown",Ii,{passive:!0}),window.addEventListener("pointerup",ma,{passive:!0}),window.addEventListener("pointercancel",ea,{passive:!0}),window.addEventListener("scroll",R,{passive:!0}),window.addEventListener("resize",ce,{passive:!0}),window.addEventListener("orientationchange",K,{passive:!0}),x.addEventListener("click",dn),window.addEventListener("keydown",Js);const ae=window.visualViewport;ae&&ae.addEventListener("resize",se);const Ve=new ResizeObserver(me);Ve.observe(x),N=()=>{var j;In(),h.current=null,g.current=null,Oe=null,cancelAnimationFrame(_e),document.body.classList.remove(Vs),window.removeEventListener("wheel",pa),window.removeEventListener("touchstart",Ji),window.removeEventListener("touchmove",$i),window.removeEventListener("touchend",ui),window.removeEventListener("touchcancel",ui),window.removeEventListener("pointerdown",Ii),window.removeEventListener("pointerup",ma),window.removeEventListener("pointercancel",ea),window.removeEventListener("scroll",R),window.removeEventListener("resize",ce),window.removeEventListener("orientationchange",K),x.removeEventListener("click",dn),window.removeEventListener("keydown",Js),ae&&ae.removeEventListener("resize",se),Ve.disconnect(),U.forEach(ne=>{ne.dispose()}),G.forEach(ne=>ne.dispose()),(j=ue.map)==null||j.dispose(),ue.dispose(),k.forEach(ne=>ne.geometry.dispose()),J.geometry.dispose(),Ne.geometry.dispose(),Le.dispose(),he.remove(Ne),ye&&(Se.remove(ye),ye.geometry.dispose()),Te==null||Te.dispose(),te==null||te.dispose(),xt.cancel(),q.dispose(),x.contains(q.domElement)&&x.removeChild(q.domElement)},P&&N()})(),()=>{var L;P=!0,(L=h.current)==null||L.call(h),h.current=null,g.current=null,document.body.classList.remove(Vs),N==null||N()}},[]),D.jsxs("section",{ref:r,id:"flow",className:"flow-intro","aria-label":"Morpheum — Discover, Copy, Supervise, Isolate",children:[D.jsxs("div",{ref:o,className:"flow-intro__sticky",children:[D.jsx("div",{ref:c,className:"flow-intro__canvas","aria-hidden":!0}),D.jsxs("div",{className:"flow-intro__top",children:[D.jsx("div",{className:"flow-intro__brand",children:D.jsx(cm,{size:"sm",brandName:"Morpheum",className:"flow-intro__brand-mark"})}),D.jsxs("button",{type:"button",className:"flow-intro__skip",onClick:E,children:["Skip ",D.jsx("span",{className:"flow-intro__skip-key",children:"Esc"})]})]}),D.jsx("div",{className:"flow-intro__tagline-wrap",children:D.jsx(s3,{text:r3,className:"flow-intro__tagline",scrollerRef:r})}),D.jsx("div",{className:"flow-intro__sr","aria-live":"polite",children:Wl.map((A,y)=>D.jsxs("p",{children:["Step ",String(y+1).padStart(2,"0"),": ",A.verb,". ",A.description]},A.verb))})]}),D.jsx("div",{ref:u,className:"flow-intro__spacer","aria-hidden":!0})]})}const bC=280,TC=5/4,AC=3800,RC={discover:Xl,copy:kR};function CC(){return typeof window<"u"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches}function wC({stepIndex:a,kind:e,className:i,width:r=bC}){const o=Xe.useRef(null),c=e??vS(a),u=Math.round(r*TC);return Xe.useEffect(()=>{const d=o.current;if(!d)return;let m=0,h;const g=()=>{const S=Math.min(window.devicePixelRatio||1,2),E=Math.round(r*S),A=Math.round(u*S);(d.width!==E||d.height!==A)&&(d.width=E,d.height=A);const y=d.getContext("2d");y&&jR(y,c,E,A,m)};g();const _=RC[c];_&&_>1&&!CC()&&(h=setInterval(()=>{m=(m+1)%_,g()},AC));const v=()=>g();return window.addEventListener("resize",v),()=>{window.removeEventListener("resize",v),h&&clearInterval(h)}},[c,r,u]),D.jsx("div",{className:["loop-step-sheet",i].filter(Boolean).join(" "),style:{width:r,height:u},children:D.jsx("canvas",{ref:o,className:"loop-step-sheet__canvas",style:{width:r,height:u},"aria-hidden":!0})})}const bx=[{id:"want-eth",agent:"SharpeShark",timestamp:"2026-07-08T15:42:00.000Z",timeLabel:"07-08, 15:42:00",status:"want-to",statusLabel:"Want to",action:"Open ETH long · 1.2 ETH",showActions:!0},{id:"rejected-btc",agent:"NightOwl",timestamp:"2026-07-08T15:31:00.000Z",timeLabel:"07-08, 15:31:00",status:"rejected",statusLabel:"Rejected",action:"Open BTC short · 0.04 BTC"},{id:"close-btc-profit",agent:"SharpeShark",timestamp:"2026-07-08T15:25:00.000Z",timeLabel:"07-08, 15:25:00",status:"short",statusLabel:"Close Long",action:"BTCUSDT · 0.04 BTC · 2,465.12 USDT",pnl:{text:"+103.09",tone:"long"}},{id:"open-eth-long",agent:"FluxRunner",timestamp:"2026-07-08T14:10:00.000Z",timeLabel:"07-08, 14:10:00",status:"long",statusLabel:"Open Long",action:"ETHUSDT · 0.8 ETH · 2,560.00 USDT"},{id:"open-sol-short",agent:"NightOwl",timestamp:"2026-07-07T09:42:00.000Z",timeLabel:"07-07, 09:42:00",status:"short",statusLabel:"Open Short",action:"SOLUSDT · 12 SOL · 1,824.00 USDT"}];function DC(){return D.jsxs("aside",{className:"supervise-log","aria-label":"Agent activity log",children:[D.jsx("header",{className:"supervise-log__header",children:D.jsx("span",{className:"supervise-log__kicker",children:"Activity log"})}),D.jsx("ol",{className:"supervise-log__timeline",children:bx.map((a,e)=>{const i=e===bx.length-1,r=e===0;return D.jsxs("li",{className:"supervise-log__item",children:[D.jsxs("div",{className:"supervise-log__meta",children:[D.jsx("span",{className:"supervise-log__agent",children:a.agent}),D.jsx("time",{className:"supervise-log__time",dateTime:a.timestamp,children:a.timeLabel})]}),D.jsxs("div",{className:"supervise-log__track","aria-hidden":!0,children:[i?null:D.jsx("span",{className:"supervise-log__track-line"}),D.jsx("span",{className:["supervise-log__dot",r?"supervise-log__dot--latest":""].filter(Boolean).join(" ")})]}),D.jsxs("div",{className:"supervise-log__body",children:[D.jsx("span",{className:`supervise-log__badge supervise-log__badge--${a.status}`,children:a.statusLabel}),D.jsxs("p",{className:"supervise-log__action",children:[a.action,a.pnl?D.jsxs(D.Fragment,{children:[" · ",D.jsx("span",{className:`supervise-log__pnl supervise-log__pnl--${a.pnl.tone}`,children:a.pnl.text})]}):null]}),a.showActions?D.jsxs("div",{className:"supervise-log__actions",children:[D.jsx("button",{type:"button",className:"supervise-log__btn supervise-log__btn--reject",children:"Reject"}),D.jsx("button",{type:"button",className:"supervise-log__btn supervise-log__btn--approve",children:"Approve"})]}):null]})]},a.id)})})]})}const LC=/^(action)$/i;function NC(a){return a.split(/(\s*[·/]\s*)/).map((i,r)=>LC.test(i.trim())?D.jsx("span",{className:"stat-chip__brand",children:i},r):D.jsx("span",{children:i},r))}function NS({label:a,status:e,live:i}){return D.jsxs("span",{className:`stat-chip ${i?"stat-chip--live":""}`,children:[D.jsx("span",{className:"stat-chip__label",children:a}),D.jsx("span",{className:"stat-chip__sep",children:"·"}),D.jsx("span",{className:"stat-chip__status",children:NC(e)})]})}var UC=Px();function OC(a,e,i=!1){a.style.fontFamily=e.fontFamily,a.style.fontSize=e.fontSize,a.style.fontWeight=e.fontWeight,a.style.letterSpacing=e.letterSpacing,a.style.lineHeight=e.lineHeight,a.style.textTransform=e.textTransform,a.style.whiteSpace=i?"nowrap":"normal",a.style.wordBreak=i?"normal":"break-word"}function PC(a,e,i,r){const o=getComputedStyle(i),c=document.createElement("div");c.style.position="fixed",c.style.left="-99999px",c.style.top="0",c.style.visibility="hidden",c.style.pointerEvents="none",c.style.width=`${e}px`,OC(c,o,!r);const u=document.createTextNode(a);return c.appendChild(u),document.body.appendChild(c),{probe:c,textNode:u}}function Tx(a,e,i,r=!0){if(!a)return{lines:[],blockHeight:0};if(e<=0)return{lines:[a],blockHeight:0};const{probe:o,textNode:c}=PC(a,e,i,r),u=o.offsetHeight;if(!r)return document.body.removeChild(o),{lines:[a],blockHeight:u};const d=document.createRange(),m=[];let h=0,g=0;for(let _=1;_<=a.length;_++){d.setStart(c,0),d.setEnd(c,_);const v=d.getClientRects().length;v>g&&g>0&&(m.push(a.slice(h,_-1)),h=_-1),g=v}return h<a.length&&m.push(a.slice(h)),document.body.removeChild(o),{lines:m.length>0?m:[a],blockHeight:u}}const IC=40,BC=5,FC="typewriter-reveal",Ax=1e3,zC=4e3;function Rx(){return Ax+Math.random()*(zC-Ax)}function US(){return typeof window>"u"?!1:window.matchMedia("(prefers-reduced-motion: reduce)").matches}function HC({text:a,content:e,speed:i,cursorWidth:r,active:o,waiting:c,completed:u,holdCursor:d=!1,onComplete:m}){const h=Xe.useRef(null),g=Xe.useRef(m),_=Xe.useRef(null),v=Xe.useRef(null),S=Xe.useRef(null),E=Xe.useRef("idle"),[A,y]=Xe.useState("idle");g.current=m;const x=Xe.useCallback(()=>{_.current&&(clearTimeout(_.current),_.current=null)},[]),O=Xe.useCallback(()=>{var U;x(),v.current=null,S.current=null,E.current="complete",y("complete"),(U=g.current)==null||U.call(g)},[x]),P=Xe.useCallback(U=>{x(),v.current=Date.now()+U,_.current=setTimeout(O,U)},[x,O]);Xe.useLayoutEffect(()=>{E.current="idle",y("idle"),S.current=null,v.current=null,x()},[a,i,r,x]),Xe.useLayoutEffect(()=>{var H,J,he;if(c||u||E.current==="complete")return;if(!o){E.current==="cursor-hold"&&_.current&&v.current!=null&&(x(),S.current=Math.max(0,v.current-Date.now()),v.current=null);return}if(E.current==="cursor-hold"&&!_.current){const Se=S.current??Rx();S.current=null,P(Se);return}if(E.current==="animating"||E.current==="cursor-hold")return;if(US()){(H=g.current)==null||H.call(g);return}const U=h.current;if(!U||!a){(J=g.current)==null||J.call(g);return}U.style.width="",U.offsetWidth;const k=Math.max(a.length/i*1e3,120),G=Math.max(a.length,1),Q=U.closest(".typewriter-block"),de=(Q==null?void 0:Q.clientWidth)??((he=U.parentElement)==null?void 0:he.clientWidth)??0;U.style.whiteSpace="nowrap",U.style.width="auto";const ue=U.scrollWidth,Y=de>0?Math.min(ue,de):ue;U.style.width="0",U.style.setProperty("--tw-duration",`${k}ms`),U.style.setProperty("--tw-target-width",`${Y}px`),U.style.setProperty("--tw-steps",String(G)),U.style.setProperty("--tw-cursor-width",`${r}px`),U.offsetWidth,E.current="animating",y("animating");const z=Se=>{if(Se.animationName===FC){if(d){U.style.width=`${Y}px`,E.current="cursor-hold",y("cursor-hold"),P(Rx());return}U.style.width="",O()}};return U.addEventListener("animationend",z),()=>{U.removeEventListener("animationend",z)}},[o,u,O,d,P,i,a,c,x,r]);const C=A==="animating",N=A==="cursor-hold",L=A==="complete",T=["typewriter","typewriter-line",c?"is-waiting":"",C?"is-animating":"",N?"is-cursor-hold":"",u||L?"is-complete":"",!o&&!c&&!u&&!L&&(C||N)?"is-paused":""].filter(Boolean).join(" ");return D.jsx("span",{ref:h,className:T,children:e??a})}function hm({text:a,children:e,className:i,speed:r=IC,cursorWidth:o=BC,multiline:c="auto",active:u=!0,holdCursor:d=!0,onComplete:m}){const h=Xe.useRef(null),g=Xe.useRef(m),[_,v]=Xe.useState([]),[S,E]=Xe.useState(0),[A,y]=Xe.useState(0),[x,O]=Xe.useState(!1),[P,C]=Xe.useState(!1),N=US();g.current=m;const L=Xe.useCallback(()=>{const ue=h.current;if(!ue||!a)return v([]),E(0),C(!0),!0;const Y=ue.clientWidth;if(Y<1)return!1;const H=(c==="auto"||c===!0)&&!N,{lines:J,blockHeight:he}=Tx(a,Y,ue,H);let Se=he;if(!H){const B=Tx(a,Y,ue,!0);Se=Math.max(he,B.blockHeight)}return v(J),E(Se),C(!0),!0},[a,c,N]);Xe.useLayoutEffect(()=>{var ue,Y;if(y(0),O(!1),C(!1),v([]),E(0),N){(ue=g.current)==null||ue.call(g),C(!0);return}if(!a){(Y=g.current)==null||Y.call(g),C(!0);return}if(!L()){const z=new ResizeObserver(()=>{L()&&z.disconnect()});return h.current&&z.observe(h.current),()=>z.disconnect()}},[a,c,L,N]);const F=Xe.useCallback(ue=>{var z;const Y=ue>=_.length-1;UC.flushSync(()=>{if(!Y){y(ue+1);return}O(!0)}),Y&&((z=g.current)==null||z.call(g))},[_]),U=["typewriter-block",_.length>1?"typewriter-lines":"typewriter-host",i??"",x?"is-complete":"",P?"":"is-measuring",N?"is-static":""].filter(Boolean).join(" "),k={...!x&&!N&&S>0?{height:S,minHeight:S}:void 0},G=e??a;if(!P)return D.jsx("span",{ref:h,className:U,style:k,children:G});if(N||!a)return D.jsx("span",{ref:h,className:["typewriter","is-static",i??""].filter(Boolean).join(" "),children:G});if(x)return D.jsx("span",{ref:h,className:["typewriter-block","typewriter-host","is-complete",i??""].filter(Boolean).join(" "),children:G});const Q=_.length>0?_:[a],de=!!e&&Q.length<=1;return D.jsxs("span",{ref:h,className:U,style:k,"aria-label":a,children:[D.jsx("span",{className:"typewriter-ghost","aria-hidden":!0,children:G}),D.jsx("span",{className:"typewriter-overlay","aria-hidden":!0,children:Q.map((ue,Y)=>D.jsx(HC,{text:ue,content:de?e:void 0,speed:r,cursorWidth:o,waiting:Y>A,active:u&&Y===A,completed:Y<A,holdCursor:d&&Y===Q.length-1,onComplete:Y===A?()=>F(Y):void 0},`${Y}-${ue}`))})]})}function GC(){return typeof window<"u"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches}function pm(a,e){const i=(e==null?void 0:e.amount)??.2,[r,o]=Xe.useState(!1);return Xe.useLayoutEffect(()=>{if(r)return;if(GC()){o(!0);return}const c=a.current;if(!c)return;const u=new IntersectionObserver(d=>{for(const m of d)if(m.isIntersecting&&m.intersectionRatio>=Math.min(i,1)){o(!0),u.disconnect();return}},{root:null,threshold:[0,i,Math.min(i+.15,1),1],rootMargin:"0px"});return u.observe(c),()=>u.disconnect()},[i,r,a]),r}function VC(a){return String(a).padStart(2,"0")}function Zu(){return typeof window<"u"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches}const kC=1600,XC=1500,Cx=5e3,WC=7e3;function YC(){return Cx+Math.random()*(WC-Cx)}function qC({text:a,active:e}){const[i,r]=Xe.useState(!1),[o,c]=Xe.useState(0),u=Xe.useRef(null),d=`> ${a}`,m=Xe.useCallback(()=>{u.current&&(clearTimeout(u.current),u.current=null)},[]);Xe.useLayoutEffect(()=>{if(m(),!e){r(!1),c(0);return}if(Zu()){r(!0);return}const g=window.setTimeout(()=>r(!0),XC);return()=>{window.clearTimeout(g),m()}},[e,m]);const h=Xe.useCallback(()=>{Zu()||(m(),u.current=setTimeout(()=>{u.current=null,c(g=>g+1)},YC()))},[m]);return D.jsx("p",{className:"flow-step__example",children:i?D.jsx(hm,{text:d,className:"flow-step__example-type",speed:42,multiline:"auto",active:!0,holdCursor:!0,onComplete:h},o):D.jsx("span",{className:"flow-step__example-type","aria-hidden":!0,children:d})})}function jC(){const[a,e]=Xe.useState(()=>new Set),[i,r]=Xe.useState(!1),o=Xe.useRef(new Map),c=Xe.useRef(null),u=pm(c,{amount:.35}),d=Ps.steps.every(_=>a.has(`step-${_.n}`));Xe.useLayoutEffect(()=>{if(Zu()){e(new Set(Ps.steps.map(v=>`step-${v.n}`))),r(!0);return}const _=new IntersectionObserver(v=>{e(S=>{const E=new Set(S);for(const A of v){const y=A.target.dataset.flowKey;y&&A.isIntersecting&&E.add(y)}return E})},{root:null,threshold:[0,.01,.08,.15,.25],rootMargin:"-42% 0px -42% 0px"});for(const v of o.current.values())_.observe(v);return()=>{_.disconnect()}},[]),Xe.useLayoutEffect(()=>{if(Zu())return;if(!d){r(!1);return}const _=window.setTimeout(()=>{r(!0)},kC);return()=>window.clearTimeout(_)},[d]);const m=Xe.useCallback((_,v)=>{v?o.current.set(_,v):o.current.delete(_)},[]),h=Xe.useCallback(_=>{e(v=>new Set(v).add(_))},[]),g=u&&i;return D.jsx("section",{id:"how",className:"section flow",children:D.jsxs("div",{className:"container",children:[D.jsx("p",{className:"section-kicker",children:Ps.kicker}),D.jsx("h2",{className:"section-title flow__title",children:Ps.title}),D.jsx("div",{className:"flow__chips",children:Ps.chips.map(_=>D.jsx(NS,{label:_.label,status:_.value},_.label))}),D.jsx("div",{className:"flow__steps",role:"list",children:Ps.steps.map((_,v)=>{const S=`step-${_.n}`,E=a.has(S);return D.jsxs("article",{ref:A=>m(S,A),"data-flow-key":S,role:"listitem",className:`flow-step${E?" flow-step--expanded":""}`,"aria-expanded":E,children:[D.jsxs("button",{type:"button",className:"flow-step__head",onClick:()=>h(S),"aria-label":E?`${_.title}, expanded`:`${_.title}, tap to expand`,children:[D.jsxs("span",{className:"flow-step__idx",children:["Step ",VC(_.n)]}),D.jsx("h3",{className:"flow-step__title",children:_.title}),D.jsx("span",{className:"flow-step__chevron","aria-hidden":!0,children:E?"−":"+"})]}),D.jsx("div",{className:"flow-step__expand","aria-hidden":!E,children:D.jsx("div",{className:"flow-step__expand-inner",children:D.jsxs("div",{className:`flow-step__split${v===2?" flow-step__split--supervise":""}`,children:[D.jsx("p",{className:"flow-step__meta",children:_.feature}),D.jsxs("div",{className:"flow-step__copy",children:[D.jsx("p",{className:"flow-step__detail",children:_.body}),D.jsx(qC,{text:_.example,active:E}),D.jsx("div",{className:"flow-step__actions",children:D.jsx("a",{href:wn.explore,className:"flow-step__open","aria-label":`Explore after ${_.title}`,children:D.jsx("span",{"aria-hidden":!0,className:"flow-step__open-arrow",children:"→"})})})]}),D.jsx("div",{className:`flow-step__sheet${v===2?" flow-step__sheet--log":""}`,"aria-hidden":!E,children:E?v===2?D.jsx(DC,{}):D.jsx(wC,{stepIndex:v,width:280}):null})]})})})]},S)})}),D.jsx("p",{ref:c,className:"flow__outcome",children:g?D.jsx(hm,{text:Ps.outcome,className:"flow__outcome-type",speed:42,multiline:"auto",active:!0,holdCursor:!0}):D.jsx("span",{className:"flow__outcome-type","aria-hidden":!0,children:Ps.outcome})})]})})}function ZC(){return D.jsx("footer",{className:"site-footer",children:D.jsxs("div",{className:"container site-footer__inner",children:[D.jsxs("div",{className:"site-footer__brand",children:[D.jsx("a",{className:"site-footer__logo",href:"#hero","aria-label":"Morpheum home",children:D.jsx(cm,{size:"sm"})}),D.jsx("p",{className:"site-footer__legal",children:sv.legal})]}),D.jsxs("div",{className:"site-footer__meta",children:[D.jsxs("nav",{className:"site-footer__nav","aria-label":"Footer",children:[Nu.map(a=>D.jsx("a",{href:a.href,children:a.label},a.id)),D.jsx("a",{href:wn.docs,children:"Docs"}),D.jsx("a",{href:wn.manifesto,children:"Manifesto"}),D.jsx("a",{href:wn.discord,children:"Discord"}),D.jsx("a",{href:wn.x,children:"X"})]}),D.jsx("div",{className:"site-footer__labels","aria-label":"Protocol",children:sv.labels.map(a=>D.jsx("span",{className:"site-footer__label",children:a},a))})]})]})})}const wx="!@#$%^&*()_+{}[]|;:,.<>?/0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",OS=50,Dx=3500,Lx=4e3,KC=1400,QC=1200,JC=4500;function PS(){return typeof window>"u"?!1:window.matchMedia("(prefers-reduced-motion: reduce)").matches}function Nx(a){return/[A-Za-z0-9]/.test(a)}function $C(){return wx[Math.floor(Math.random()*wx.length)]??"?"}function ew(a){return Math.random()<.5?$C():a}function IS(a,e,i){const r=[];for(let h=0;h<a.length;h++)Nx(a[h]??"")&&r.push(h);const o=r.length,c=o===0?1:Math.min(e/i,1),u=Math.floor(c*o),d=new Set(r.slice(0,u));let m="";for(let h=0;h<a.length;h++){const g=a[h]??"";!Nx(g)||d.has(h)?m+=g:m+=ew(g)}return m}function tw(a){return typeof a=="boolean"?{enabled:a,decryptMs:Dx,pauseMs:Lx}:{enabled:a.enabled??!0,decryptMs:a.decryptMs??Dx,pauseMs:a.pauseMs??Lx}}function Yn(a,e=!0){const{enabled:i,decryptMs:r,pauseMs:o}=tw(e),c=r+o,[u,d]=Xe.useState(a);return Xe.useEffect(()=>{if(!i||PS()){d(a);return}let m=Date.now();const h=()=>{const _=Date.now();let v=_-m;v>=c&&(m=_,v=0),d(IS(a,v,r))};h();const g=setInterval(h,OS);return()=>{clearInterval(g)}},[a,i,r,c]),u}function Ux(a,e={}){const i=e.enabled??!0,r=e.stepDelayMs??KC,o=e.stepDecryptMs??QC,c=e.holdMs??JC,u=a.join("\0"),[d,m]=Xe.useState(a),[h,g]=Xe.useState(()=>a.map(()=>!1));return Xe.useEffect(()=>{const _=u.length>0?u.split("\0"):[];if(!i||PS()||_.length===0){m(_),g(_.map(()=>!0));return}const S=(_.length-1)*r+o+c;let E=Date.now();const A=()=>{const x=Date.now();let O=x-E;O>=S&&(E=x,O=0);const P=[],C=[];for(let N=0;N<_.length;N++){const L=_[N]??"",F=N*r,T=O>=F;if(C.push(T),!T){P.push(L);continue}const U=O-F;P.push(IS(L,U,o))}m(P),g(C)};A();const y=setInterval(A,OS);return()=>{clearInterval(y)}},[u,i,r,o,c]),{displays:d,started:h}}function nw(){const a=[...av,...av];return D.jsx("div",{className:"marquee","aria-label":"Live status",children:D.jsx("div",{className:"marquee__viewport",children:D.jsx("div",{className:"marquee__track",children:a.map((e,i)=>D.jsx(NS,{label:e.label,status:e.status,live:"live"in e?e.live:!1},`${e.label}-${i}`))})})})}function iw({showGrid:a=!1,maskAlpha:e=.72,contentOffsetY:i=-50}){const[r,o]=Os.headline,c=Yn(Os.eyebrow.label),u=Math.min(1,Math.max(0,e));return D.jsxs("section",{id:"hero",className:"hero","aria-labelledby":"hero-heading",children:[D.jsx("video",{className:"hero__video",autoPlay:!0,muted:!0,loop:!0,playsInline:!0,"aria-hidden":!0,children:D.jsx("source",{src:"/Morm_IntroAnimation_2.mp4",type:"video/mp4"})}),D.jsx("div",{className:"hero__video-mask",style:{"--hero-mask-alpha":u},"aria-hidden":!0}),D.jsx("div",{className:"hero__atmosphere","aria-hidden":!0}),a?D.jsx("div",{className:"hero__grid","aria-hidden":!0}):null,D.jsx("div",{className:"hero__logo-anim","aria-hidden":!0,children:D.jsxs("svg",{className:"hero__logo-anim-svg",viewBox:KR,fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[D.jsx("g",{className:"hero__logo-anim-ghost",children:Wp.map(d=>D.jsx("path",{d,fill:"#C8F5A8"},`ghost-${d.slice(0,24)}`))}),D.jsx("g",{className:"hero__logo-anim-fill",children:Wp.map(d=>D.jsx("path",{d,fill:"#C8F5A8"},`fill-${d.slice(0,24)}`))})]})}),D.jsx("div",{className:"hero__scanlines","aria-hidden":!0}),D.jsx("div",{className:"hero__grain","aria-hidden":!0}),D.jsx("div",{className:"hero__veil","aria-hidden":!0}),D.jsxs("div",{className:"container hero__content",style:{"--hero-content-offset-y":`${i}px`},children:[D.jsxs("a",{className:"hero__eyebrow hero__eyebrow--matrix",href:Os.eyebrow.href,"aria-label":`${Os.eyebrow.label}›`,children:[c,D.jsx("span",{className:"hero__eyebrow-chevron","aria-hidden":!0,children:"›"})]}),D.jsxs("h1",{id:"hero-heading",className:"hero__headline",children:[D.jsx("span",{className:"hero__line hero__line--lead",children:r}),D.jsx("span",{className:"hero__line hero__line--punch",children:o})]}),D.jsxs("div",{className:"hero__ctas",children:[D.jsx(Oo,{href:Os.primaryCta.href,variant:"primary",children:Os.primaryCta.label}),D.jsx(Oo,{href:Os.secondaryCta.href,variant:"secondary",children:Os.secondaryCta.label})]})]}),D.jsx(nw,{})]})}function aw(){const a=Yn(ch.text);return D.jsx("div",{className:"manifesto-strip",children:D.jsx("a",{className:"manifesto-strip__link manifesto-strip__link--matrix",href:ch.href,"aria-label":ch.text,children:a})})}const ci={decryptMs:2800,pauseMs:5200},Ox={stepDelayMs:1400,stepDecryptMs:1200,holdMs:4500};function BS(a){return String(a+1).padStart(2,"0")}function sw(a,e,i,r){return`${BS(a)}  ${e}  ·  ${i}  ·  ${r}`}function rw(a,e,i){return`${BS(a)}  ${e}  ·  ${i}`}function ow(a){return!a.from||!a.to||!a.asset||!a.amt?null:`${a.from} → ${a.to} · ${a.asset} ${a.amt}`}function _i({label:a,value:e,display:i}){return D.jsxs("div",{className:"persona-card__meta-row",children:[D.jsx("span",{className:"terminal-label",children:a}),D.jsx("span",{className:"terminal-value persona-card__meta-value persona-card__meta-value--matrix","aria-label":e,children:i})]})}function rn({value:a,display:e,className:i="terminal-value persona-card__meta-value persona-card__meta-value--matrix",hidden:r=!1}){return D.jsx("p",{className:i,"aria-label":a,"aria-hidden":r||void 0,"data-pending":r?"true":void 0,children:e})}function lw({meta:a}){const e=Yn(a.name,ci),i=Yn(a.tx,ci),r=Yn(a.hash,ci),o=Yn(a.chain,ci),c=Yn(a.verified,ci),u=Yn(a.rep,ci),d=Yn(a.portable,ci),m=Yn(a.next,ci),h=`tx ${a.tx}`,g=`tx ${i}`,_=`did · ${a.name}`,v=`identity · ${e}`,S=`hash ${a.hash}`,E=`hash ${r}`,A=`chain ${a.chain}`,y=`chain ${o}`,x=`verified ${a.verified} · rep ${a.rep} · portable ${a.portable}`,O=`verified ${c} · rep ${u} · portable ${d}`,P=`next ${a.next}`,C=`next ${m}`,N=`rep ${a.rep} · portable ${a.portable}`,L=`rep ${u} · portable ${d}`,F=`verified ${a.verified}`,T=`verified ${c}`;return D.jsxs("div",{className:"persona-card__meta persona-card__meta--identity",children:[D.jsx("p",{className:"persona-card__meta-kind terminal-label",children:"become an operator"}),D.jsx("p",{className:"terminal-label",children:"on-chain transaction"}),D.jsxs("div",{className:"persona-card__meta-rows",children:[D.jsx(_i,{label:"tx",value:a.tx,display:i}),D.jsx(_i,{label:"hash",value:a.hash,display:r}),D.jsx(_i,{label:"chain",value:a.chain,display:o}),D.jsx(_i,{label:"verified",value:a.verified,display:c}),D.jsx(_i,{label:"rep",value:a.rep,display:u}),D.jsx(_i,{label:"portable",value:a.portable,display:d}),D.jsx(_i,{label:"next",value:a.next,display:m})]}),D.jsxs("div",{className:"persona-card__meta-compact",children:[D.jsx(rn,{value:h,display:g}),D.jsx(rn,{value:_,display:v,className:"terminal-value persona-card__meta-value--matrix"}),D.jsx(rn,{value:S,display:E}),D.jsx(rn,{value:A,display:y}),D.jsx(rn,{value:x,display:O}),D.jsx(rn,{value:P,display:C})]}),D.jsxs("div",{className:"persona-card__meta-xxs",children:[D.jsx(rn,{value:h,display:g}),D.jsx(rn,{value:a.name,display:e,className:"terminal-value persona-card__meta-value--matrix"}),D.jsx(rn,{value:S,display:E}),D.jsx(rn,{value:A,display:y}),D.jsx(rn,{value:F,display:T}),D.jsx(rn,{value:N,display:L}),D.jsx(rn,{value:P,display:C})]})]})}function cw({meta:a}){const e=Yn(a.tx,ci),i=Yn(a.from,ci),r=Yn(a.to,ci),o=Yn(a.asset,ci),c=Yn(a.amt,ci),u=Yn(a.chain,ci),d=Yn(a.status,ci),m=`${a.from} → ${a.to}`,h=`${i} → ${r}`,g=`tx ${a.tx}`,_=`tx ${e}`,v=`${a.asset} ${a.amt} · ${a.chain}`,S=`${o} ${c} · ${u}`,E=`${a.asset} ${a.amt}`,A=`${o} ${c}`,y=`status ${a.status}`,x=`status ${d}`;return D.jsxs("div",{className:"persona-card__meta persona-card__meta--community",children:[D.jsx("p",{className:"persona-card__meta-kind terminal-label",children:a.label}),D.jsxs("div",{className:"persona-card__meta-rows",children:[D.jsx(_i,{label:"tx",value:a.tx,display:e}),D.jsx(_i,{label:"from",value:a.from,display:i}),D.jsx(_i,{label:"to",value:a.to,display:r}),D.jsx(_i,{label:"asset",value:a.asset,display:o}),D.jsx(_i,{label:"amt",value:a.amt,display:c}),D.jsx(_i,{label:"chain",value:a.chain,display:u}),D.jsx(_i,{label:"status",value:a.status,display:d})]}),D.jsxs("div",{className:"persona-card__meta-compact",children:[D.jsx("p",{className:"terminal-label",children:a.label}),D.jsx(rn,{value:g,display:_}),D.jsx(rn,{value:m,display:h}),D.jsx(rn,{value:v,display:S}),D.jsx(rn,{value:y,display:x})]}),D.jsxs("div",{className:"persona-card__meta-xxs",children:[D.jsx("p",{className:"terminal-label",children:a.label}),D.jsx(rn,{value:g,display:_}),D.jsx(rn,{value:m,display:h}),D.jsx(rn,{value:E,display:A}),D.jsx(rn,{value:a.chain,display:u}),D.jsx(rn,{value:y,display:x})]})]})}function uw({meta:a}){const e=Xe.useRef(null),i=pm(e,{amount:.15}),r=a.steps.find(h=>h.from&&h.to&&h.asset&&h.amt),o=r?ow(r):null,c=Xe.useMemo(()=>{const h=a.steps.map((g,_)=>sw(_,g.op,g.tx,g.status));return o&&h.push(o),h.push(a.chain),h},[a.steps,a.chain,o]),u=Xe.useMemo(()=>{const h=a.steps.map((g,_)=>rw(_,g.op,g.tx));return o&&h.push(o),h},[a.steps,o]),d=Ux(c,{...Ox,enabled:i}),m=Ux(u,{...Ox,enabled:i});return D.jsxs("div",{ref:e,className:"persona-card__meta persona-card__meta--chain",children:[D.jsx("p",{className:"persona-card__meta-kind terminal-label",children:a.label}),D.jsx("div",{className:"persona-card__meta-rows",children:c.map((h,g)=>D.jsx(rn,{value:h,display:d.displays[g]??h,hidden:!(d.started[g]??!0)},`rows-${h}`))}),D.jsxs("div",{className:"persona-card__meta-compact",children:[D.jsx("p",{className:"terminal-label",children:a.label}),c.map((h,g)=>D.jsx(rn,{value:h,display:d.displays[g]??h,hidden:!(d.started[g]??!0)},`compact-${h}`))]}),D.jsxs("div",{className:"persona-card__meta-xxs",children:[D.jsx("p",{className:"terminal-label",children:a.label}),u.map((h,g)=>D.jsx(rn,{value:h,display:m.displays[g]??h,hidden:!(m.started[g]??!0)},`xxs-${h}`))]})]})}function fw({meta:a}){return a.kind==="identity"?D.jsx(lw,{meta:a}):a.kind==="chain"?D.jsx(uw,{meta:a}):D.jsx(cw,{meta:a})}function dw({persona:a}){return D.jsxs("article",{className:`persona-card persona-card--${a.weight}`,children:[D.jsx("h3",{className:"persona-card__title",children:a.title}),D.jsx("ol",{className:"persona-card__steps",children:a.steps.map(e=>D.jsxs("li",{children:[D.jsxs("span",{className:"persona-card__chevron","aria-hidden":!0,children:[">"," "]}),e]},e))}),D.jsx(Oo,{href:a.cta.href,variant:"ghost",className:"persona-card__cta",children:a.cta.label}),D.jsx(fw,{meta:a.meta})]})}function hw(){return D.jsx("section",{id:"personas",className:"section personas",children:D.jsxs("div",{className:"container",children:[D.jsx("p",{className:"section-kicker",children:uh.kicker}),D.jsx("h2",{className:"section-title personas__title",children:uh.title}),D.jsx("div",{className:"personas__grid",children:uh.items.map(a=>D.jsx(dw,{persona:a},a.title))})]})})}function pw(){const[a,e]=Xe.useState(!1),[i,r]=Xe.useState(!1),[o,c]=Xe.useState("");return Xe.useEffect(()=>{const u=()=>e(window.scrollY>24);return u(),window.addEventListener("scroll",u,{passive:!0}),()=>window.removeEventListener("scroll",u)},[]),Xe.useEffect(()=>{const u=Nu.map(m=>m.id),d=new IntersectionObserver(m=>{var g;const h=m.filter(_=>_.isIntersecting).sort((_,v)=>v.intersectionRatio-_.intersectionRatio);(g=h[0])!=null&&g.target.id&&c(h[0].target.id)},{rootMargin:"-30% 0px -55% 0px",threshold:[0,.25,.5]});return u.forEach(m=>{const h=document.getElementById(m);h&&d.observe(h)}),()=>d.disconnect()},[]),Xe.useEffect(()=>(document.body.style.overflow=i?"hidden":"",()=>{document.body.style.overflow=""}),[i]),D.jsxs(D.Fragment,{children:[D.jsx("header",{className:`sticky-header ${a?"sticky-header--solid":""}`,children:D.jsxs("div",{className:"sticky-header__inner",children:[D.jsx("a",{className:"sticky-header__logo",href:"#hero","aria-label":"Morpheum home",children:D.jsx(cm,{size:"sm",brandName:"Morpheum"})}),D.jsx("nav",{className:"sticky-header__nav","aria-label":"Primary",children:Nu.map(u=>D.jsx("a",{href:u.href,className:`sticky-header__link ${o===u.id?"is-active":""}`,children:u.label},u.id))}),D.jsxs("div",{className:"sticky-header__actions",children:[D.jsx("a",{className:"sticky-header__docs",href:wn.docs,children:"Docs"}),D.jsx(Oo,{href:wn.app,variant:"primary",className:"sticky-header__launch",children:"Launch Demo"}),D.jsxs("button",{type:"button",className:"sticky-header__menu","aria-expanded":i,"aria-controls":"mobile-nav","aria-label":i?"Close menu":"Open menu",onClick:()=>r(u=>!u),children:[D.jsx("span",{}),D.jsx("span",{}),D.jsx("span",{})]})]})]})}),D.jsx("div",{id:"mobile-nav",className:`mobile-sheet ${i?"is-open":""}`,hidden:!i,children:D.jsxs("nav",{className:"mobile-sheet__nav","aria-label":"Mobile",children:[Nu.map(u=>D.jsx("a",{href:u.href,onClick:()=>r(!1),className:o===u.id?"is-active":"",children:u.label},u.id)),D.jsx("a",{href:wn.docs,onClick:()=>r(!1),children:"Docs"})]})})]})}function mw(){const a=Xe.useRef(null),e=pm(a,{amount:.35});return D.jsx("section",{className:"thesis section","aria-label":"Thesis",children:D.jsxs("div",{className:"container thesis__inner",children:[D.jsx("p",{ref:a,className:"thesis__close",children:e?D.jsxs(hm,{text:iv.close,className:"thesis__close-type",speed:36,multiline:"auto",active:!0,holdCursor:!0,children:["The Agent-native"," ",D.jsx("span",{className:"thesis__close-accent",children:"L1 DEX"})," — ",D.jsx("span",{className:"thesis__close-phrase",children:"faster, safer trades."})]}):D.jsxs("span",{className:"thesis__close-type","aria-hidden":!0,children:["The Agent-native"," ",D.jsx("span",{className:"thesis__close-accent",children:"L1 DEX"})," — ",D.jsx("span",{className:"thesis__close-phrase",children:"faster, safer trades."})]})}),D.jsx("p",{className:"section-kicker",children:"Two Risks in Agentic Economy"}),D.jsx("div",{className:"thesis__risks",children:iv.risks.map(i=>D.jsxs("article",{className:"thesis__pair",children:[D.jsxs("div",{className:"thesis__risk",children:[D.jsx("p",{className:"thesis__label",children:"Risk"}),D.jsx("h3",{className:"thesis__risk-title",children:i.risk}),D.jsxs("p",{className:"thesis__failure",children:[D.jsx("span",{"aria-hidden":!0,children:"> "}),i.failure]})]}),D.jsxs("div",{className:"thesis__solve",children:[D.jsx("p",{className:"thesis__label thesis__label--solve",children:"Solution"}),D.jsx("p",{className:"thesis__solve-body",children:i.solve})]})]},i.risk))})]})})}function gw(){return D.jsxs("div",{className:"page",children:[D.jsx("a",{className:"skip-link",href:"#hero",children:"Skip to content"}),D.jsx(aw,{}),D.jsx(pw,{}),D.jsxs("main",{className:"page__main",children:[D.jsx(EC,{cardAlpha:0,modalChassisAlpha:.8,cardSize:.8}),D.jsx(iw,{contentOffsetY:0,maskAlpha:.5}),D.jsx(mw,{}),D.jsx(Vy,{}),D.jsx(hw,{}),D.jsx(jC,{}),D.jsx(Xy,{}),D.jsx(Gy,{})]}),D.jsx(ZC,{})]})}zy.createRoot(document.getElementById("root")).render(D.jsx(Xe.StrictMode,{children:D.jsx(gw,{})}));
