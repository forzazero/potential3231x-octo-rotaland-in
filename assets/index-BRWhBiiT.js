(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function i(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(o){if(o.ep)return;o.ep=!0;const c=i(o);fetch(o.href,c)}})();var Bd={exports:{}},vl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var b_;function dy(){if(b_)return vl;b_=1;var a=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,o,c){var u=null;if(c!==void 0&&(u=""+c),o.key!==void 0&&(u=""+o.key),"key"in o){c={};for(var d in o)d!=="key"&&(c[d]=o[d])}else c=o;return o=c.ref,{$$typeof:a,type:r,key:u,ref:o!==void 0?o:null,props:c}}return vl.Fragment=e,vl.jsx=i,vl.jsxs=i,vl}var T_;function hy(){return T_||(T_=1,Bd.exports=dy()),Bd.exports}var D=hy(),zd={exports:{}},ut={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var A_;function py(){if(A_)return ut;A_=1;var a=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),u=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),_=Symbol.iterator;function S(U){return U===null||typeof U!="object"?null:(U=_&&U[_]||U["@@iterator"],typeof U=="function"?U:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},R=Object.assign,y={};function x(U,K,be){this.props=U,this.context=K,this.refs=y,this.updater=be||E}x.prototype.isReactComponent={},x.prototype.setState=function(U,K){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,K,"setState")},x.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function F(){}F.prototype=x.prototype;function I(U,K,be){this.props=U,this.context=K,this.refs=y,this.updater=be||E}var w=I.prototype=new F;w.constructor=I,R(w,x.prototype),w.isPureReactComponent=!0;var O=Array.isArray;function L(){}var B={H:null,A:null,T:null,S:null},A=Object.prototype.hasOwnProperty;function N(U,K,be){var Ae=be.ref;return{$$typeof:a,type:U,key:K,ref:Ae!==void 0?Ae:null,props:be}}function Y(U,K){return N(U.type,K,U.props)}function k(U){return typeof U=="object"&&U!==null&&U.$$typeof===a}function j(U){var K={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(be){return K[be]})}var ue=/\/+/g;function fe(U,K){return typeof U=="object"&&U!==null&&U.key!=null?j(""+U.key):K.toString(36)}function q(U){switch(U.status){case"fulfilled":return U.value;case"rejected":throw U.reason;default:switch(typeof U.status=="string"?U.then(L,L):(U.status="pending",U.then(function(K){U.status==="pending"&&(U.status="fulfilled",U.value=K)},function(K){U.status==="pending"&&(U.status="rejected",U.reason=K)})),U.status){case"fulfilled":return U.value;case"rejected":throw U.reason}}throw U}function z(U,K,be,Ae,Ce){var ae=typeof U;(ae==="undefined"||ae==="boolean")&&(U=null);var Me=!1;if(U===null)Me=!0;else switch(ae){case"bigint":case"string":case"number":Me=!0;break;case"object":switch(U.$$typeof){case a:case e:Me=!0;break;case g:return Me=U._init,z(Me(U._payload),K,be,Ae,Ce)}}if(Me)return Ce=Ce(U),Me=Ae===""?"."+fe(U,0):Ae,O(Ce)?(be="",Me!=null&&(be=Me.replace(ue,"$&/")+"/"),z(Ce,K,be,"",function(st){return st})):Ce!=null&&(k(Ce)&&(Ce=Y(Ce,be+(Ce.key==null||U&&U.key===Ce.key?"":(""+Ce.key).replace(ue,"$&/")+"/")+Me)),K.push(Ce)),1;Me=0;var ge=Ae===""?".":Ae+":";if(O(U))for(var qe=0;qe<U.length;qe++)Ae=U[qe],ae=ge+fe(Ae,qe),Me+=z(Ae,K,be,ae,Ce);else if(qe=S(U),typeof qe=="function")for(U=qe.call(U),qe=0;!(Ae=U.next()).done;)Ae=Ae.value,ae=ge+fe(Ae,qe++),Me+=z(Ae,K,be,ae,Ce);else if(ae==="object"){if(typeof U.then=="function")return z(q(U),K,be,Ae,Ce);throw K=String(U),Error("Objects are not valid as a React child (found: "+(K==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":K)+"). If you meant to render a collection of children, use an array instead.")}return Me}function H(U,K,be){if(U==null)return U;var Ae=[],Ce=0;return z(U,Ae,"","",function(ae){return K.call(be,ae,Ce++)}),Ae}function te(U){if(U._status===-1){var K=U._result;K=K(),K.then(function(be){(U._status===0||U._status===-1)&&(U._status=1,U._result=be)},function(be){(U._status===0||U._status===-1)&&(U._status=2,U._result=be)}),U._status===-1&&(U._status=0,U._result=K)}if(U._status===1)return U._result.default;throw U._result}var me=typeof reportError=="function"?reportError:function(U){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var K=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof U=="object"&&U!==null&&typeof U.message=="string"?String(U.message):String(U),error:U});if(!window.dispatchEvent(K))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",U);return}console.error(U)},Se={map:H,forEach:function(U,K,be){H(U,function(){K.apply(this,arguments)},be)},count:function(U){var K=0;return H(U,function(){K++}),K},toArray:function(U){return H(U,function(K){return K})||[]},only:function(U){if(!k(U))throw Error("React.Children.only expected to receive a single React element child.");return U}};return ut.Activity=v,ut.Children=Se,ut.Component=x,ut.Fragment=i,ut.Profiler=o,ut.PureComponent=I,ut.StrictMode=r,ut.Suspense=m,ut.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=B,ut.__COMPILER_RUNTIME={__proto__:null,c:function(U){return B.H.useMemoCache(U)}},ut.cache=function(U){return function(){return U.apply(null,arguments)}},ut.cacheSignal=function(){return null},ut.cloneElement=function(U,K,be){if(U==null)throw Error("The argument must be a React element, but you passed "+U+".");var Ae=R({},U.props),Ce=U.key;if(K!=null)for(ae in K.key!==void 0&&(Ce=""+K.key),K)!A.call(K,ae)||ae==="key"||ae==="__self"||ae==="__source"||ae==="ref"&&K.ref===void 0||(Ae[ae]=K[ae]);var ae=arguments.length-2;if(ae===1)Ae.children=be;else if(1<ae){for(var Me=Array(ae),ge=0;ge<ae;ge++)Me[ge]=arguments[ge+2];Ae.children=Me}return N(U.type,Ce,Ae)},ut.createContext=function(U){return U={$$typeof:u,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null},U.Provider=U,U.Consumer={$$typeof:c,_context:U},U},ut.createElement=function(U,K,be){var Ae,Ce={},ae=null;if(K!=null)for(Ae in K.key!==void 0&&(ae=""+K.key),K)A.call(K,Ae)&&Ae!=="key"&&Ae!=="__self"&&Ae!=="__source"&&(Ce[Ae]=K[Ae]);var Me=arguments.length-2;if(Me===1)Ce.children=be;else if(1<Me){for(var ge=Array(Me),qe=0;qe<Me;qe++)ge[qe]=arguments[qe+2];Ce.children=ge}if(U&&U.defaultProps)for(Ae in Me=U.defaultProps,Me)Ce[Ae]===void 0&&(Ce[Ae]=Me[Ae]);return N(U,ae,Ce)},ut.createRef=function(){return{current:null}},ut.forwardRef=function(U){return{$$typeof:d,render:U}},ut.isValidElement=k,ut.lazy=function(U){return{$$typeof:g,_payload:{_status:-1,_result:U},_init:te}},ut.memo=function(U,K){return{$$typeof:h,type:U,compare:K===void 0?null:K}},ut.startTransition=function(U){var K=B.T,be={};B.T=be;try{var Ae=U(),Ce=B.S;Ce!==null&&Ce(be,Ae),typeof Ae=="object"&&Ae!==null&&typeof Ae.then=="function"&&Ae.then(L,me)}catch(ae){me(ae)}finally{K!==null&&be.types!==null&&(K.types=be.types),B.T=K}},ut.unstable_useCacheRefresh=function(){return B.H.useCacheRefresh()},ut.use=function(U){return B.H.use(U)},ut.useActionState=function(U,K,be){return B.H.useActionState(U,K,be)},ut.useCallback=function(U,K){return B.H.useCallback(U,K)},ut.useContext=function(U){return B.H.useContext(U)},ut.useDebugValue=function(){},ut.useDeferredValue=function(U,K){return B.H.useDeferredValue(U,K)},ut.useEffect=function(U,K){return B.H.useEffect(U,K)},ut.useEffectEvent=function(U){return B.H.useEffectEvent(U)},ut.useId=function(){return B.H.useId()},ut.useImperativeHandle=function(U,K,be){return B.H.useImperativeHandle(U,K,be)},ut.useInsertionEffect=function(U,K){return B.H.useInsertionEffect(U,K)},ut.useLayoutEffect=function(U,K){return B.H.useLayoutEffect(U,K)},ut.useMemo=function(U,K){return B.H.useMemo(U,K)},ut.useOptimistic=function(U,K){return B.H.useOptimistic(U,K)},ut.useReducer=function(U,K,be){return B.H.useReducer(U,K,be)},ut.useRef=function(U){return B.H.useRef(U)},ut.useState=function(U){return B.H.useState(U)},ut.useSyncExternalStore=function(U,K,be){return B.H.useSyncExternalStore(U,K,be)},ut.useTransition=function(){return B.H.useTransition()},ut.version="19.2.7",ut}var R_;function Ap(){return R_||(R_=1,zd.exports=py()),zd.exports}var Xe=Ap(),Hd={exports:{}},xl={},Gd={exports:{}},Vd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var C_;function my(){return C_||(C_=1,(function(a){function e(z,H){var te=z.length;z.push(H);e:for(;0<te;){var me=te-1>>>1,Se=z[me];if(0<o(Se,H))z[me]=H,z[te]=Se,te=me;else break e}}function i(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var H=z[0],te=z.pop();if(te!==H){z[0]=te;e:for(var me=0,Se=z.length,U=Se>>>1;me<U;){var K=2*(me+1)-1,be=z[K],Ae=K+1,Ce=z[Ae];if(0>o(be,te))Ae<Se&&0>o(Ce,be)?(z[me]=Ce,z[Ae]=te,me=Ae):(z[me]=be,z[K]=te,me=K);else if(Ae<Se&&0>o(Ce,te))z[me]=Ce,z[Ae]=te,me=Ae;else break e}}return H}function o(z,H){var te=z.sortIndex-H.sortIndex;return te!==0?te:z.id-H.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;a.unstable_now=function(){return c.now()}}else{var u=Date,d=u.now();a.unstable_now=function(){return u.now()-d}}var m=[],h=[],g=1,v=null,_=3,S=!1,E=!1,R=!1,y=!1,x=typeof setTimeout=="function"?setTimeout:null,F=typeof clearTimeout=="function"?clearTimeout:null,I=typeof setImmediate<"u"?setImmediate:null;function w(z){for(var H=i(h);H!==null;){if(H.callback===null)r(h);else if(H.startTime<=z)r(h),H.sortIndex=H.expirationTime,e(m,H);else break;H=i(h)}}function O(z){if(R=!1,w(z),!E)if(i(m)!==null)E=!0,L||(L=!0,j());else{var H=i(h);H!==null&&q(O,H.startTime-z)}}var L=!1,B=-1,A=5,N=-1;function Y(){return y?!0:!(a.unstable_now()-N<A)}function k(){if(y=!1,L){var z=a.unstable_now();N=z;var H=!0;try{e:{E=!1,R&&(R=!1,F(B),B=-1),S=!0;var te=_;try{t:{for(w(z),v=i(m);v!==null&&!(v.expirationTime>z&&Y());){var me=v.callback;if(typeof me=="function"){v.callback=null,_=v.priorityLevel;var Se=me(v.expirationTime<=z);if(z=a.unstable_now(),typeof Se=="function"){v.callback=Se,w(z),H=!0;break t}v===i(m)&&r(m),w(z)}else r(m);v=i(m)}if(v!==null)H=!0;else{var U=i(h);U!==null&&q(O,U.startTime-z),H=!1}}break e}finally{v=null,_=te,S=!1}H=void 0}}finally{H?j():L=!1}}}var j;if(typeof I=="function")j=function(){I(k)};else if(typeof MessageChannel<"u"){var ue=new MessageChannel,fe=ue.port2;ue.port1.onmessage=k,j=function(){fe.postMessage(null)}}else j=function(){x(k,0)};function q(z,H){B=x(function(){z(a.unstable_now())},H)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(z){z.callback=null},a.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<z?Math.floor(1e3/z):5},a.unstable_getCurrentPriorityLevel=function(){return _},a.unstable_next=function(z){switch(_){case 1:case 2:case 3:var H=3;break;default:H=_}var te=_;_=H;try{return z()}finally{_=te}},a.unstable_requestPaint=function(){y=!0},a.unstable_runWithPriority=function(z,H){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var te=_;_=z;try{return H()}finally{_=te}},a.unstable_scheduleCallback=function(z,H,te){var me=a.unstable_now();switch(typeof te=="object"&&te!==null?(te=te.delay,te=typeof te=="number"&&0<te?me+te:me):te=me,z){case 1:var Se=-1;break;case 2:Se=250;break;case 5:Se=1073741823;break;case 4:Se=1e4;break;default:Se=5e3}return Se=te+Se,z={id:g++,callback:H,priorityLevel:z,startTime:te,expirationTime:Se,sortIndex:-1},te>me?(z.sortIndex=te,e(h,z),i(m)===null&&z===i(h)&&(R?(F(B),B=-1):R=!0,q(O,te-me))):(z.sortIndex=Se,e(m,z),E||S||(E=!0,L||(L=!0,j()))),z},a.unstable_shouldYield=Y,a.unstable_wrapCallback=function(z){var H=_;return function(){var te=_;_=H;try{return z.apply(this,arguments)}finally{_=te}}}})(Vd)),Vd}var w_;function gy(){return w_||(w_=1,Gd.exports=my()),Gd.exports}var kd={exports:{}},Qn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var D_;function _y(){if(D_)return Qn;D_=1;var a=Ap();function e(m){var h="https://react.dev/errors/"+m;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)h+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},o=Symbol.for("react.portal");function c(m,h,g){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:v==null?null:""+v,children:m,containerInfo:h,implementation:g}}var u=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,h){if(m==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return Qn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Qn.createPortal=function(m,h){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(e(299));return c(m,h,null,g)},Qn.flushSync=function(m){var h=u.T,g=r.p;try{if(u.T=null,r.p=2,m)return m()}finally{u.T=h,r.p=g,r.d.f()}},Qn.preconnect=function(m,h){typeof m=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,r.d.C(m,h))},Qn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},Qn.preinit=function(m,h){if(typeof m=="string"&&h&&typeof h.as=="string"){var g=h.as,v=d(g,h.crossOrigin),_=typeof h.integrity=="string"?h.integrity:void 0,S=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;g==="style"?r.d.S(m,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:v,integrity:_,fetchPriority:S}):g==="script"&&r.d.X(m,{crossOrigin:v,integrity:_,fetchPriority:S,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},Qn.preinitModule=function(m,h){if(typeof m=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var g=d(h.as,h.crossOrigin);r.d.M(m,{crossOrigin:g,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&r.d.M(m)},Qn.preload=function(m,h){if(typeof m=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var g=h.as,v=d(g,h.crossOrigin);r.d.L(m,g,{crossOrigin:v,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},Qn.preloadModule=function(m,h){if(typeof m=="string")if(h){var g=d(h.as,h.crossOrigin);r.d.m(m,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:g,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else r.d.m(m)},Qn.requestFormReset=function(m){r.d.r(m)},Qn.unstable_batchedUpdates=function(m,h){return m(h)},Qn.useFormState=function(m,h,g){return u.H.useFormState(m,h,g)},Qn.useFormStatus=function(){return u.H.useHostTransitionStatus()},Qn.version="19.2.7",Qn}var L_;function lx(){if(L_)return kd.exports;L_=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(e){console.error(e)}}return a(),kd.exports=_y(),kd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var N_;function vy(){if(N_)return xl;N_=1;var a=gy(),e=Ap(),i=lx();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)n+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,s=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(s=n.return),t=n.return;while(t)}return n.tag===3?s:null}function u(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function d(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(r(188))}function h(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(r(188));return n!==t?null:t}for(var s=t,l=n;;){var f=s.return;if(f===null)break;var p=f.alternate;if(p===null){if(l=f.return,l!==null){s=l;continue}break}if(f.child===p.child){for(p=f.child;p;){if(p===s)return m(f),t;if(p===l)return m(f),n;p=p.sibling}throw Error(r(188))}if(s.return!==l.return)s=f,l=p;else{for(var M=!1,C=f.child;C;){if(C===s){M=!0,s=f,l=p;break}if(C===l){M=!0,l=f,s=p;break}C=C.sibling}if(!M){for(C=p.child;C;){if(C===s){M=!0,s=p,l=f;break}if(C===l){M=!0,l=p,s=f;break}C=C.sibling}if(!M)throw Error(r(189))}}if(s.alternate!==l)throw Error(r(190))}if(s.tag!==3)throw Error(r(188));return s.stateNode.current===s?t:n}function g(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=g(t),n!==null)return n;t=t.sibling}return null}var v=Object.assign,_=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),R=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),F=Symbol.for("react.consumer"),I=Symbol.for("react.context"),w=Symbol.for("react.forward_ref"),O=Symbol.for("react.suspense"),L=Symbol.for("react.suspense_list"),B=Symbol.for("react.memo"),A=Symbol.for("react.lazy"),N=Symbol.for("react.activity"),Y=Symbol.for("react.memo_cache_sentinel"),k=Symbol.iterator;function j(t){return t===null||typeof t!="object"?null:(t=k&&t[k]||t["@@iterator"],typeof t=="function"?t:null)}var ue=Symbol.for("react.client.reference");function fe(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===ue?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case R:return"Fragment";case x:return"Profiler";case y:return"StrictMode";case O:return"Suspense";case L:return"SuspenseList";case N:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case E:return"Portal";case I:return t.displayName||"Context";case F:return(t._context.displayName||"Context")+".Consumer";case w:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case B:return n=t.displayName||null,n!==null?n:fe(t.type)||"Memo";case A:n=t._payload,t=t._init;try{return fe(t(n))}catch{}}return null}var q=Array.isArray,z=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,te={pending:!1,data:null,method:null,action:null},me=[],Se=-1;function U(t){return{current:t}}function K(t){0>Se||(t.current=me[Se],me[Se]=null,Se--)}function be(t,n){Se++,me[Se]=t.current,t.current=n}var Ae=U(null),Ce=U(null),ae=U(null),Me=U(null);function ge(t,n){switch(be(ae,n),be(Ce,t),be(Ae,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?qg(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=qg(n),t=jg(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}K(Ae),be(Ae,t)}function qe(){K(Ae),K(Ce),K(ae)}function st(t){t.memoizedState!==null&&be(Me,t);var n=Ae.current,s=jg(n,t.type);n!==s&&(be(Ce,t),be(Ae,s))}function et(t){Ce.current===t&&(K(Ae),K(Ce)),Me.current===t&&(K(Me),pl._currentValue=te)}var Yt,ht;function vt(t){if(Yt===void 0)try{throw Error()}catch(s){var n=s.stack.trim().match(/\n( *(at )?)/);Yt=n&&n[1]||"",ht=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Yt+t+ht}var it=!1;function ct(t,n){if(!t||it)return"";it=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(n){var Te=function(){throw Error()};if(Object.defineProperty(Te.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Te,[])}catch(he){var ce=he}Reflect.construct(t,[],Te)}else{try{Te.call()}catch(he){ce=he}t.call(Te.prototype)}}else{try{throw Error()}catch(he){ce=he}(Te=t())&&typeof Te.catch=="function"&&Te.catch(function(){})}}catch(he){if(he&&ce&&typeof he.stack=="string")return[he.stack,ce.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var p=l.DetermineComponentFrameRoot(),M=p[0],C=p[1];if(M&&C){var V=M.split(`
`),oe=C.split(`
`);for(f=l=0;l<V.length&&!V[l].includes("DetermineComponentFrameRoot");)l++;for(;f<oe.length&&!oe[f].includes("DetermineComponentFrameRoot");)f++;if(l===V.length||f===oe.length)for(l=V.length-1,f=oe.length-1;1<=l&&0<=f&&V[l]!==oe[f];)f--;for(;1<=l&&0<=f;l--,f--)if(V[l]!==oe[f]){if(l!==1||f!==1)do if(l--,f--,0>f||V[l]!==oe[f]){var xe=`
`+V[l].replace(" at new "," at ");return t.displayName&&xe.includes("<anonymous>")&&(xe=xe.replace("<anonymous>",t.displayName)),xe}while(1<=l&&0<=f);break}}}finally{it=!1,Error.prepareStackTrace=s}return(s=t?t.displayName||t.name:"")?vt(s):""}function Qt(t,n){switch(t.tag){case 26:case 27:case 5:return vt(t.type);case 16:return vt("Lazy");case 13:return t.child!==n&&n!==null?vt("Suspense Fallback"):vt("Suspense");case 19:return vt("SuspenseList");case 0:case 15:return ct(t.type,!1);case 11:return ct(t.type.render,!1);case 1:return ct(t.type,!0);case 31:return vt("Activity");default:return""}}function Jt(t){try{var n="",s=null;do n+=Qt(t,s),s=t,t=t.return;while(t);return n}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var qt=Object.prototype.hasOwnProperty,tn=a.unstable_scheduleCallback,Gt=a.unstable_cancelCallback,sn=a.unstable_shouldYield,Z=a.unstable_requestPaint,bt=a.unstable_now,Tt=a.unstable_getCurrentPriorityLevel,P=a.unstable_ImmediatePriority,b=a.unstable_UserBlockingPriority,J=a.unstable_NormalPriority,re=a.unstable_LowPriority,le=a.unstable_IdlePriority,we=a.log,Le=a.unstable_setDisableYieldValue,pe=null,de=null;function De(t){if(typeof we=="function"&&Le(t),de&&typeof de.setStrictMode=="function")try{de.setStrictMode(pe,t)}catch{}}var Ge=Math.clz32?Math.clz32:Je,Fe=Math.log,Ie=Math.LN2;function Je(t){return t>>>=0,t===0?32:31-(Fe(t)/Ie|0)|0}var tt=256,rt=262144,X=4194304;function Ne(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function ve(t,n,s){var l=t.pendingLanes;if(l===0)return 0;var f=0,p=t.suspendedLanes,M=t.pingedLanes;t=t.warmLanes;var C=l&134217727;return C!==0?(l=C&~p,l!==0?f=Ne(l):(M&=C,M!==0?f=Ne(M):s||(s=C&~t,s!==0&&(f=Ne(s))))):(C=l&~p,C!==0?f=Ne(C):M!==0?f=Ne(M):s||(s=l&~t,s!==0&&(f=Ne(s)))),f===0?0:n!==0&&n!==f&&(n&p)===0&&(p=f&-f,s=n&-n,p>=s||p===32&&(s&4194048)!==0)?n:f}function Oe(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function Pe(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ee(){var t=X;return X<<=1,(X&62914560)===0&&(X=4194304),t}function Ve(t){for(var n=[],s=0;31>s;s++)n.push(t);return n}function Ze(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function nn(t,n,s,l,f,p){var M=t.pendingLanes;t.pendingLanes=s,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=s,t.entangledLanes&=s,t.errorRecoveryDisabledLanes&=s,t.shellSuspendCounter=0;var C=t.entanglements,V=t.expirationTimes,oe=t.hiddenUpdates;for(s=M&~s;0<s;){var xe=31-Ge(s),Te=1<<xe;C[xe]=0,V[xe]=-1;var ce=oe[xe];if(ce!==null)for(oe[xe]=null,xe=0;xe<ce.length;xe++){var he=ce[xe];he!==null&&(he.lane&=-536870913)}s&=~Te}l!==0&&wt(t,l,0),p!==0&&f===0&&t.tag!==0&&(t.suspendedLanes|=p&~(M&~n))}function wt(t,n,s){t.pendingLanes|=n,t.suspendedLanes&=~n;var l=31-Ge(n);t.entangledLanes|=n,t.entanglements[l]=t.entanglements[l]|1073741824|s&261930}function ti(t,n){var s=t.entangledLanes|=n;for(t=t.entanglements;s;){var l=31-Ge(s),f=1<<l;f&n|t[l]&n&&(t[l]|=n),s&=~f}}function In(t,n){var s=n&-n;return s=(s&42)!==0?1:la(s),(s&(t.suspendedLanes|n))!==0?0:s}function la(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Ra(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function ss(){var t=H.p;return t!==0?t:(t=window.event,t===void 0?32:__(t.type))}function Ca(t,n){var s=H.p;try{return H.p=t,n()}finally{H.p=s}}var mi=Math.random().toString(36).slice(2),pn="__reactFiber$"+mi,gn="__reactProps$"+mi,zn="__reactContainer$"+mi,ca="__reactEvents$"+mi,ks="__reactListeners$"+mi,Xs="__reactHandles$"+mi,ua="__reactResources$"+mi,ji="__reactMarker$"+mi;function Zi(t){delete t[pn],delete t[gn],delete t[ca],delete t[ks],delete t[Xs]}function wi(t){var n=t[pn];if(n)return n;for(var s=t.parentNode;s;){if(n=s[zn]||s[pn]){if(s=n.alternate,n.child!==null||s!==null&&s.child!==null)for(t=t_(t);t!==null;){if(s=t[pn])return s;t=t_(t)}return n}t=s,s=t.parentNode}return null}function Di(t){if(t=t[pn]||t[zn]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function Li(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function Ki(t){var n=t[ua];return n||(n=t[ua]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function _e(t){t[ji]=!0}var Be=new Set,T={};function G(t,n){$(t,n),$(t+"Capture",n)}function $(t,n){for(T[t]=n,t=0;t<n.length;t++)Be.add(n[t])}var Q=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ne={},Ue={};function He(t){return qt.call(Ue,t)?!0:qt.call(ne,t)?!1:Q.test(t)?Ue[t]=!0:(ne[t]=!0,!1)}function Re(t,n,s){if(He(n))if(s===null)t.removeAttribute(n);else{switch(typeof s){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var l=n.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+s)}}function ke(t,n,s){if(s===null)t.removeAttribute(n);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+s)}}function ze(t,n,s,l){if(l===null)t.removeAttribute(s);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(s);return}t.setAttributeNS(n,s,""+l)}}function je(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function lt(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Ke(t,n,s){var l=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var f=l.get,p=l.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return f.call(this)},set:function(M){s=""+M,p.call(this,M)}}),Object.defineProperty(t,n,{enumerable:l.enumerable}),{getValue:function(){return s},setValue:function(M){s=""+M},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Mt(t){if(!t._valueTracker){var n=lt(t)?"checked":"value";t._valueTracker=Ke(t,n,""+t[n])}}function $t(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var s=n.getValue(),l="";return t&&(l=lt(t)?t.checked?"true":"false":t.value),t=l,t!==s?(n.setValue(t),!0):!1}function It(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Lt=/[\n"\\]/g;function Ct(t){return t.replace(Lt,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function We(t,n,s,l,f,p,M,C){t.name="",M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"?t.type=M:t.removeAttribute("type"),n!=null?M==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+je(n)):t.value!==""+je(n)&&(t.value=""+je(n)):M!=="submit"&&M!=="reset"||t.removeAttribute("value"),n!=null?mt(t,M,je(n)):s!=null?mt(t,M,je(s)):l!=null&&t.removeAttribute("value"),f==null&&p!=null&&(t.defaultChecked=!!p),f!=null&&(t.checked=f&&typeof f!="function"&&typeof f!="symbol"),C!=null&&typeof C!="function"&&typeof C!="symbol"&&typeof C!="boolean"?t.name=""+je(C):t.removeAttribute("name")}function Tn(t,n,s,l,f,p,M,C){if(p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"&&(t.type=p),n!=null||s!=null){if(!(p!=="submit"&&p!=="reset"||n!=null)){Mt(t);return}s=s!=null?""+je(s):"",n=n!=null?""+je(n):s,C||n===t.value||(t.value=n),t.defaultValue=n}l=l??f,l=typeof l!="function"&&typeof l!="symbol"&&!!l,t.checked=C?t.checked:!!l,t.defaultChecked=!!l,M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"&&(t.name=M),Mt(t)}function mt(t,n,s){n==="number"&&It(t.ownerDocument)===t||t.defaultValue===""+s||(t.defaultValue=""+s)}function mn(t,n,s,l){if(t=t.options,n){n={};for(var f=0;f<s.length;f++)n["$"+s[f]]=!0;for(s=0;s<t.length;s++)f=n.hasOwnProperty("$"+t[s].value),t[s].selected!==f&&(t[s].selected=f),f&&l&&(t[s].defaultSelected=!0)}else{for(s=""+je(s),n=null,f=0;f<t.length;f++){if(t[f].value===s){t[f].selected=!0,l&&(t[f].defaultSelected=!0);return}n!==null||t[f].disabled||(n=t[f])}n!==null&&(n.selected=!0)}}function Zn(t,n,s){if(n!=null&&(n=""+je(n),n!==t.value&&(t.value=n),s==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=s!=null?""+je(s):""}function Hn(t,n,s,l){if(n==null){if(l!=null){if(s!=null)throw Error(r(92));if(q(l)){if(1<l.length)throw Error(r(93));l=l[0]}s=l}s==null&&(s=""),n=s}s=je(n),t.defaultValue=s,l=t.textContent,l===s&&l!==""&&l!==null&&(t.value=l),Mt(t)}function _n(t,n){if(n){var s=t.firstChild;if(s&&s===t.lastChild&&s.nodeType===3){s.nodeValue=n;return}}t.textContent=n}var Nt=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function an(t,n,s){var l=n.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?l?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":l?t.setProperty(n,s):typeof s!="number"||s===0||Nt.has(n)?n==="float"?t.cssFloat=s:t[n]=(""+s).trim():t[n]=s+"px"}function gi(t,n,s){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,s!=null){for(var l in s)!s.hasOwnProperty(l)||n!=null&&n.hasOwnProperty(l)||(l.indexOf("--")===0?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="");for(var f in n)l=n[f],n.hasOwnProperty(f)&&s[f]!==l&&an(t,f,l)}else for(var p in n)n.hasOwnProperty(p)&&an(t,p,n[p])}function Ft(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Gn=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),fa=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function wa(t){return fa.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function _i(){}var Ws=null;function Uo(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Da=null,La=null;function Gl(t){var n=Di(t);if(n&&(t=n.stateNode)){var s=t[gn]||null;e:switch(t=n.stateNode,n.type){case"input":if(We(t,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),n=s.name,s.type==="radio"&&n!=null){for(s=t;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+Ct(""+n)+'"][type="radio"]'),n=0;n<s.length;n++){var l=s[n];if(l!==t&&l.form===t.form){var f=l[gn]||null;if(!f)throw Error(r(90));We(l,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(n=0;n<s.length;n++)l=s[n],l.form===t.form&&$t(l)}break e;case"textarea":Zn(t,s.value,s.defaultValue);break e;case"select":n=s.value,n!=null&&mn(t,!!s.multiple,n,!1)}}}var rs=!1;function Ys(t,n,s){if(rs)return t(n,s);rs=!0;try{var l=t(n);return l}finally{if(rs=!1,(Da!==null||La!==null)&&(Ac(),Da&&(n=Da,t=La,La=Da=null,Gl(n),t)))for(n=0;n<t.length;n++)Gl(t[n])}}function qs(t,n){var s=t.stateNode;if(s===null)return null;var l=s[gn]||null;if(l===null)return null;s=l[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(s&&typeof s!="function")throw Error(r(231,n,typeof s));return s}var Qi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Vl=!1;if(Qi)try{var os={};Object.defineProperty(os,"passive",{get:function(){Vl=!0}}),window.addEventListener("test",os,os),window.removeEventListener("test",os,os)}catch{Vl=!1}var Ni=null,Oo=null,Ar=null;function kl(){if(Ar)return Ar;var t,n=Oo,s=n.length,l,f="value"in Ni?Ni.value:Ni.textContent,p=f.length;for(t=0;t<s&&n[t]===f[t];t++);var M=s-t;for(l=1;l<=M&&n[s-l]===f[p-l];l++);return Ar=f.slice(t,1<l?1-l:void 0)}function js(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Zs(){return!0}function Bt(){return!1}function rn(t){function n(s,l,f,p,M){this._reactName=s,this._targetInst=f,this.type=l,this.nativeEvent=p,this.target=M,this.currentTarget=null;for(var C in t)t.hasOwnProperty(C)&&(s=t[C],this[C]=s?s(p):p[C]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?Zs:Bt,this.isPropagationStopped=Bt,this}return v(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=Zs)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=Zs)},persist:function(){},isPersistent:Zs}),n}var Kn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Nn=rn(Kn),ri=v({},Kn,{view:0,detail:0}),oi=rn(ri),da,ls,Ui,Ji=v({},ri,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Vu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ui&&(Ui&&t.type==="mousemove"?(da=t.screenX-Ui.screenX,ls=t.screenY-Ui.screenY):ls=da=0,Ui=t),da)},movementY:function(t){return"movementY"in t?t.movementY:ls}}),Rr=rn(Ji),Xl=v({},Ji,{dataTransfer:0}),dS=rn(Xl),hS=v({},ri,{relatedTarget:0}),Gu=rn(hS),pS=v({},Kn,{animationName:0,elapsedTime:0,pseudoElement:0}),mS=rn(pS),gS=v({},Kn,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),_S=rn(gS),vS=v({},Kn,{data:0}),Qp=rn(vS),xS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},SS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},MS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function yS(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=MS[t])?!!n[t]:!1}function Vu(){return yS}var ES=v({},ri,{key:function(t){if(t.key){var n=xS[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=js(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?SS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Vu,charCode:function(t){return t.type==="keypress"?js(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?js(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),bS=rn(ES),TS=v({},Ji,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Jp=rn(TS),AS=v({},ri,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Vu}),RS=rn(AS),CS=v({},Kn,{propertyName:0,elapsedTime:0,pseudoElement:0}),wS=rn(CS),DS=v({},Ji,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),LS=rn(DS),NS=v({},Kn,{newState:0,oldState:0}),US=rn(NS),OS=[9,13,27,32],ku=Qi&&"CompositionEvent"in window,Po=null;Qi&&"documentMode"in document&&(Po=document.documentMode);var PS=Qi&&"TextEvent"in window&&!Po,$p=Qi&&(!ku||Po&&8<Po&&11>=Po),em=" ",tm=!1;function nm(t,n){switch(t){case"keyup":return OS.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function im(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Cr=!1;function IS(t,n){switch(t){case"compositionend":return im(n);case"keypress":return n.which!==32?null:(tm=!0,em);case"textInput":return t=n.data,t===em&&tm?null:t;default:return null}}function FS(t,n){if(Cr)return t==="compositionend"||!ku&&nm(t,n)?(t=kl(),Ar=Oo=Ni=null,Cr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return $p&&n.locale!=="ko"?null:n.data;default:return null}}var BS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function am(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!BS[t.type]:n==="textarea"}function sm(t,n,s,l){Da?La?La.push(l):La=[l]:Da=l,n=Uc(n,"onChange"),0<n.length&&(s=new Nn("onChange","change",null,s,l),t.push({event:s,listeners:n}))}var Io=null,Fo=null;function zS(t){Gg(t,0)}function Wl(t){var n=Li(t);if($t(n))return t}function rm(t,n){if(t==="change")return n}var om=!1;if(Qi){var Xu;if(Qi){var Wu="oninput"in document;if(!Wu){var lm=document.createElement("div");lm.setAttribute("oninput","return;"),Wu=typeof lm.oninput=="function"}Xu=Wu}else Xu=!1;om=Xu&&(!document.documentMode||9<document.documentMode)}function cm(){Io&&(Io.detachEvent("onpropertychange",um),Fo=Io=null)}function um(t){if(t.propertyName==="value"&&Wl(Fo)){var n=[];sm(n,Fo,t,Uo(t)),Ys(zS,n)}}function HS(t,n,s){t==="focusin"?(cm(),Io=n,Fo=s,Io.attachEvent("onpropertychange",um)):t==="focusout"&&cm()}function GS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Wl(Fo)}function VS(t,n){if(t==="click")return Wl(n)}function kS(t,n){if(t==="input"||t==="change")return Wl(n)}function XS(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var vi=typeof Object.is=="function"?Object.is:XS;function Bo(t,n){if(vi(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var s=Object.keys(t),l=Object.keys(n);if(s.length!==l.length)return!1;for(l=0;l<s.length;l++){var f=s[l];if(!qt.call(n,f)||!vi(t[f],n[f]))return!1}return!0}function fm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function dm(t,n){var s=fm(t);t=0;for(var l;s;){if(s.nodeType===3){if(l=t+s.textContent.length,t<=n&&l>=n)return{node:s,offset:n-t};t=l}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=fm(s)}}function hm(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?hm(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function pm(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=It(t.document);n instanceof t.HTMLIFrameElement;){try{var s=typeof n.contentWindow.location.href=="string"}catch{s=!1}if(s)t=n.contentWindow;else break;n=It(t.document)}return n}function Yu(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var WS=Qi&&"documentMode"in document&&11>=document.documentMode,wr=null,qu=null,zo=null,ju=!1;function mm(t,n,s){var l=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;ju||wr==null||wr!==It(l)||(l=wr,"selectionStart"in l&&Yu(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),zo&&Bo(zo,l)||(zo=l,l=Uc(qu,"onSelect"),0<l.length&&(n=new Nn("onSelect","select",null,n,s),t.push({event:n,listeners:l}),n.target=wr)))}function Ks(t,n){var s={};return s[t.toLowerCase()]=n.toLowerCase(),s["Webkit"+t]="webkit"+n,s["Moz"+t]="moz"+n,s}var Dr={animationend:Ks("Animation","AnimationEnd"),animationiteration:Ks("Animation","AnimationIteration"),animationstart:Ks("Animation","AnimationStart"),transitionrun:Ks("Transition","TransitionRun"),transitionstart:Ks("Transition","TransitionStart"),transitioncancel:Ks("Transition","TransitionCancel"),transitionend:Ks("Transition","TransitionEnd")},Zu={},gm={};Qi&&(gm=document.createElement("div").style,"AnimationEvent"in window||(delete Dr.animationend.animation,delete Dr.animationiteration.animation,delete Dr.animationstart.animation),"TransitionEvent"in window||delete Dr.transitionend.transition);function Qs(t){if(Zu[t])return Zu[t];if(!Dr[t])return t;var n=Dr[t],s;for(s in n)if(n.hasOwnProperty(s)&&s in gm)return Zu[t]=n[s];return t}var _m=Qs("animationend"),vm=Qs("animationiteration"),xm=Qs("animationstart"),YS=Qs("transitionrun"),qS=Qs("transitionstart"),jS=Qs("transitioncancel"),Sm=Qs("transitionend"),Mm=new Map,Ku="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Ku.push("scrollEnd");function $i(t,n){Mm.set(t,n),G(n,[t])}var Yl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},Oi=[],Lr=0,Qu=0;function ql(){for(var t=Lr,n=Qu=Lr=0;n<t;){var s=Oi[n];Oi[n++]=null;var l=Oi[n];Oi[n++]=null;var f=Oi[n];Oi[n++]=null;var p=Oi[n];if(Oi[n++]=null,l!==null&&f!==null){var M=l.pending;M===null?f.next=f:(f.next=M.next,M.next=f),l.pending=f}p!==0&&ym(s,f,p)}}function jl(t,n,s,l){Oi[Lr++]=t,Oi[Lr++]=n,Oi[Lr++]=s,Oi[Lr++]=l,Qu|=l,t.lanes|=l,t=t.alternate,t!==null&&(t.lanes|=l)}function Ju(t,n,s,l){return jl(t,n,s,l),Zl(t)}function Js(t,n){return jl(t,null,null,n),Zl(t)}function ym(t,n,s){t.lanes|=s;var l=t.alternate;l!==null&&(l.lanes|=s);for(var f=!1,p=t.return;p!==null;)p.childLanes|=s,l=p.alternate,l!==null&&(l.childLanes|=s),p.tag===22&&(t=p.stateNode,t===null||t._visibility&1||(f=!0)),t=p,p=p.return;return t.tag===3?(p=t.stateNode,f&&n!==null&&(f=31-Ge(s),t=p.hiddenUpdates,l=t[f],l===null?t[f]=[n]:l.push(n),n.lane=s|536870912),p):null}function Zl(t){if(50<ol)throw ol=0,ld=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Nr={};function ZS(t,n,s,l){this.tag=t,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function xi(t,n,s,l){return new ZS(t,n,s,l)}function $u(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Na(t,n){var s=t.alternate;return s===null?(s=xi(t.tag,n,t.key,t.mode),s.elementType=t.elementType,s.type=t.type,s.stateNode=t.stateNode,s.alternate=t,t.alternate=s):(s.pendingProps=n,s.type=t.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=t.flags&65011712,s.childLanes=t.childLanes,s.lanes=t.lanes,s.child=t.child,s.memoizedProps=t.memoizedProps,s.memoizedState=t.memoizedState,s.updateQueue=t.updateQueue,n=t.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},s.sibling=t.sibling,s.index=t.index,s.ref=t.ref,s.refCleanup=t.refCleanup,s}function Em(t,n){t.flags&=65011714;var s=t.alternate;return s===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=s.childLanes,t.lanes=s.lanes,t.child=s.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=s.memoizedProps,t.memoizedState=s.memoizedState,t.updateQueue=s.updateQueue,t.type=s.type,n=s.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function Kl(t,n,s,l,f,p){var M=0;if(l=t,typeof t=="function")$u(t)&&(M=1);else if(typeof t=="string")M=ey(t,s,Ae.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case N:return t=xi(31,s,n,f),t.elementType=N,t.lanes=p,t;case R:return $s(s.children,f,p,n);case y:M=8,f|=24;break;case x:return t=xi(12,s,n,f|2),t.elementType=x,t.lanes=p,t;case O:return t=xi(13,s,n,f),t.elementType=O,t.lanes=p,t;case L:return t=xi(19,s,n,f),t.elementType=L,t.lanes=p,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case I:M=10;break e;case F:M=9;break e;case w:M=11;break e;case B:M=14;break e;case A:M=16,l=null;break e}M=29,s=Error(r(130,t===null?"null":typeof t,"")),l=null}return n=xi(M,s,n,f),n.elementType=t,n.type=l,n.lanes=p,n}function $s(t,n,s,l){return t=xi(7,t,l,n),t.lanes=s,t}function ef(t,n,s){return t=xi(6,t,null,n),t.lanes=s,t}function bm(t){var n=xi(18,null,null,0);return n.stateNode=t,n}function tf(t,n,s){return n=xi(4,t.children!==null?t.children:[],t.key,n),n.lanes=s,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Tm=new WeakMap;function Pi(t,n){if(typeof t=="object"&&t!==null){var s=Tm.get(t);return s!==void 0?s:(n={value:t,source:n,stack:Jt(n)},Tm.set(t,n),n)}return{value:t,source:n,stack:Jt(n)}}var Ur=[],Or=0,Ql=null,Ho=0,Ii=[],Fi=0,cs=null,ha=1,pa="";function Ua(t,n){Ur[Or++]=Ho,Ur[Or++]=Ql,Ql=t,Ho=n}function Am(t,n,s){Ii[Fi++]=ha,Ii[Fi++]=pa,Ii[Fi++]=cs,cs=t;var l=ha;t=pa;var f=32-Ge(l)-1;l&=~(1<<f),s+=1;var p=32-Ge(n)+f;if(30<p){var M=f-f%5;p=(l&(1<<M)-1).toString(32),l>>=M,f-=M,ha=1<<32-Ge(n)+f|s<<f|l,pa=p+t}else ha=1<<p|s<<f|l,pa=t}function nf(t){t.return!==null&&(Ua(t,1),Am(t,1,0))}function af(t){for(;t===Ql;)Ql=Ur[--Or],Ur[Or]=null,Ho=Ur[--Or],Ur[Or]=null;for(;t===cs;)cs=Ii[--Fi],Ii[Fi]=null,pa=Ii[--Fi],Ii[Fi]=null,ha=Ii[--Fi],Ii[Fi]=null}function Rm(t,n){Ii[Fi++]=ha,Ii[Fi++]=pa,Ii[Fi++]=cs,ha=n.id,pa=n.overflow,cs=t}var Vn=null,on=null,At=!1,us=null,Bi=!1,sf=Error(r(519));function fs(t){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Go(Pi(n,t)),sf}function Cm(t){var n=t.stateNode,s=t.type,l=t.memoizedProps;switch(n[pn]=t,n[gn]=l,s){case"dialog":St("cancel",n),St("close",n);break;case"iframe":case"object":case"embed":St("load",n);break;case"video":case"audio":for(s=0;s<cl.length;s++)St(cl[s],n);break;case"source":St("error",n);break;case"img":case"image":case"link":St("error",n),St("load",n);break;case"details":St("toggle",n);break;case"input":St("invalid",n),Tn(n,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":St("invalid",n);break;case"textarea":St("invalid",n),Hn(n,l.value,l.defaultValue,l.children)}s=l.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||n.textContent===""+s||l.suppressHydrationWarning===!0||Wg(n.textContent,s)?(l.popover!=null&&(St("beforetoggle",n),St("toggle",n)),l.onScroll!=null&&St("scroll",n),l.onScrollEnd!=null&&St("scrollend",n),l.onClick!=null&&(n.onclick=_i),n=!0):n=!1,n||fs(t,!0)}function wm(t){for(Vn=t.return;Vn;)switch(Vn.tag){case 5:case 31:case 13:Bi=!1;return;case 27:case 3:Bi=!0;return;default:Vn=Vn.return}}function Pr(t){if(t!==Vn)return!1;if(!At)return wm(t),At=!0,!1;var n=t.tag,s;if((s=n!==3&&n!==27)&&((s=n===5)&&(s=t.type,s=!(s!=="form"&&s!=="button")||Ed(t.type,t.memoizedProps)),s=!s),s&&on&&fs(t),wm(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));on=e_(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));on=e_(t)}else n===27?(n=on,Ts(t.type)?(t=Cd,Cd=null,on=t):on=n):on=Vn?Hi(t.stateNode.nextSibling):null;return!0}function er(){on=Vn=null,At=!1}function rf(){var t=us;return t!==null&&(fi===null?fi=t:fi.push.apply(fi,t),us=null),t}function Go(t){us===null?us=[t]:us.push(t)}var of=U(null),tr=null,Oa=null;function ds(t,n,s){be(of,n._currentValue),n._currentValue=s}function Pa(t){t._currentValue=of.current,K(of)}function lf(t,n,s){for(;t!==null;){var l=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,l!==null&&(l.childLanes|=n)):l!==null&&(l.childLanes&n)!==n&&(l.childLanes|=n),t===s)break;t=t.return}}function cf(t,n,s,l){var f=t.child;for(f!==null&&(f.return=t);f!==null;){var p=f.dependencies;if(p!==null){var M=f.child;p=p.firstContext;e:for(;p!==null;){var C=p;p=f;for(var V=0;V<n.length;V++)if(C.context===n[V]){p.lanes|=s,C=p.alternate,C!==null&&(C.lanes|=s),lf(p.return,s,t),l||(M=null);break e}p=C.next}}else if(f.tag===18){if(M=f.return,M===null)throw Error(r(341));M.lanes|=s,p=M.alternate,p!==null&&(p.lanes|=s),lf(M,s,t),M=null}else M=f.child;if(M!==null)M.return=f;else for(M=f;M!==null;){if(M===t){M=null;break}if(f=M.sibling,f!==null){f.return=M.return,M=f;break}M=M.return}f=M}}function Ir(t,n,s,l){t=null;for(var f=n,p=!1;f!==null;){if(!p){if((f.flags&524288)!==0)p=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var M=f.alternate;if(M===null)throw Error(r(387));if(M=M.memoizedProps,M!==null){var C=f.type;vi(f.pendingProps.value,M.value)||(t!==null?t.push(C):t=[C])}}else if(f===Me.current){if(M=f.alternate,M===null)throw Error(r(387));M.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(t!==null?t.push(pl):t=[pl])}f=f.return}t!==null&&cf(n,t,s,l),n.flags|=262144}function Jl(t){for(t=t.firstContext;t!==null;){if(!vi(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function nr(t){tr=t,Oa=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function kn(t){return Dm(tr,t)}function $l(t,n){return tr===null&&nr(t),Dm(t,n)}function Dm(t,n){var s=n._currentValue;if(n={context:n,memoizedValue:s,next:null},Oa===null){if(t===null)throw Error(r(308));Oa=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Oa=Oa.next=n;return s}var KS=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(s,l){t.push(l)}};this.abort=function(){n.aborted=!0,t.forEach(function(s){return s()})}},QS=a.unstable_scheduleCallback,JS=a.unstable_NormalPriority,An={$$typeof:I,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function uf(){return{controller:new KS,data:new Map,refCount:0}}function Vo(t){t.refCount--,t.refCount===0&&QS(JS,function(){t.controller.abort()})}var ko=null,ff=0,Fr=0,Br=null;function $S(t,n){if(ko===null){var s=ko=[];ff=0,Fr=pd(),Br={status:"pending",value:void 0,then:function(l){s.push(l)}}}return ff++,n.then(Lm,Lm),n}function Lm(){if(--ff===0&&ko!==null){Br!==null&&(Br.status="fulfilled");var t=ko;ko=null,Fr=0,Br=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function eM(t,n){var s=[],l={status:"pending",value:null,reason:null,then:function(f){s.push(f)}};return t.then(function(){l.status="fulfilled",l.value=n;for(var f=0;f<s.length;f++)(0,s[f])(n)},function(f){for(l.status="rejected",l.reason=f,f=0;f<s.length;f++)(0,s[f])(void 0)}),l}var Nm=z.S;z.S=function(t,n){mg=bt(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&$S(t,n),Nm!==null&&Nm(t,n)};var ir=U(null);function df(){var t=ir.current;return t!==null?t:en.pooledCache}function ec(t,n){n===null?be(ir,ir.current):be(ir,n.pool)}function Um(){var t=df();return t===null?null:{parent:An._currentValue,pool:t}}var zr=Error(r(460)),hf=Error(r(474)),tc=Error(r(542)),nc={then:function(){}};function Om(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Pm(t,n,s){switch(s=t[s],s===void 0?t.push(n):s!==n&&(n.then(_i,_i),n=s),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Fm(t),t;default:if(typeof n.status=="string")n.then(_i,_i);else{if(t=en,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(l){if(n.status==="pending"){var f=n;f.status="fulfilled",f.value=l}},function(l){if(n.status==="pending"){var f=n;f.status="rejected",f.reason=l}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Fm(t),t}throw sr=n,zr}}function ar(t){try{var n=t._init;return n(t._payload)}catch(s){throw s!==null&&typeof s=="object"&&typeof s.then=="function"?(sr=s,zr):s}}var sr=null;function Im(){if(sr===null)throw Error(r(459));var t=sr;return sr=null,t}function Fm(t){if(t===zr||t===tc)throw Error(r(483))}var Hr=null,Xo=0;function ic(t){var n=Xo;return Xo+=1,Hr===null&&(Hr=[]),Pm(Hr,t,n)}function Wo(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function ac(t,n){throw n.$$typeof===_?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Bm(t){function n(ee,W){if(t){var se=ee.deletions;se===null?(ee.deletions=[W],ee.flags|=16):se.push(W)}}function s(ee,W){if(!t)return null;for(;W!==null;)n(ee,W),W=W.sibling;return null}function l(ee){for(var W=new Map;ee!==null;)ee.key!==null?W.set(ee.key,ee):W.set(ee.index,ee),ee=ee.sibling;return W}function f(ee,W){return ee=Na(ee,W),ee.index=0,ee.sibling=null,ee}function p(ee,W,se){return ee.index=se,t?(se=ee.alternate,se!==null?(se=se.index,se<W?(ee.flags|=67108866,W):se):(ee.flags|=67108866,W)):(ee.flags|=1048576,W)}function M(ee){return t&&ee.alternate===null&&(ee.flags|=67108866),ee}function C(ee,W,se,ye){return W===null||W.tag!==6?(W=ef(se,ee.mode,ye),W.return=ee,W):(W=f(W,se),W.return=ee,W)}function V(ee,W,se,ye){var nt=se.type;return nt===R?xe(ee,W,se.props.children,ye,se.key):W!==null&&(W.elementType===nt||typeof nt=="object"&&nt!==null&&nt.$$typeof===A&&ar(nt)===W.type)?(W=f(W,se.props),Wo(W,se),W.return=ee,W):(W=Kl(se.type,se.key,se.props,null,ee.mode,ye),Wo(W,se),W.return=ee,W)}function oe(ee,W,se,ye){return W===null||W.tag!==4||W.stateNode.containerInfo!==se.containerInfo||W.stateNode.implementation!==se.implementation?(W=tf(se,ee.mode,ye),W.return=ee,W):(W=f(W,se.children||[]),W.return=ee,W)}function xe(ee,W,se,ye,nt){return W===null||W.tag!==7?(W=$s(se,ee.mode,ye,nt),W.return=ee,W):(W=f(W,se),W.return=ee,W)}function Te(ee,W,se){if(typeof W=="string"&&W!==""||typeof W=="number"||typeof W=="bigint")return W=ef(""+W,ee.mode,se),W.return=ee,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case S:return se=Kl(W.type,W.key,W.props,null,ee.mode,se),Wo(se,W),se.return=ee,se;case E:return W=tf(W,ee.mode,se),W.return=ee,W;case A:return W=ar(W),Te(ee,W,se)}if(q(W)||j(W))return W=$s(W,ee.mode,se,null),W.return=ee,W;if(typeof W.then=="function")return Te(ee,ic(W),se);if(W.$$typeof===I)return Te(ee,$l(ee,W),se);ac(ee,W)}return null}function ce(ee,W,se,ye){var nt=W!==null?W.key:null;if(typeof se=="string"&&se!==""||typeof se=="number"||typeof se=="bigint")return nt!==null?null:C(ee,W,""+se,ye);if(typeof se=="object"&&se!==null){switch(se.$$typeof){case S:return se.key===nt?V(ee,W,se,ye):null;case E:return se.key===nt?oe(ee,W,se,ye):null;case A:return se=ar(se),ce(ee,W,se,ye)}if(q(se)||j(se))return nt!==null?null:xe(ee,W,se,ye,null);if(typeof se.then=="function")return ce(ee,W,ic(se),ye);if(se.$$typeof===I)return ce(ee,W,$l(ee,se),ye);ac(ee,se)}return null}function he(ee,W,se,ye,nt){if(typeof ye=="string"&&ye!==""||typeof ye=="number"||typeof ye=="bigint")return ee=ee.get(se)||null,C(W,ee,""+ye,nt);if(typeof ye=="object"&&ye!==null){switch(ye.$$typeof){case S:return ee=ee.get(ye.key===null?se:ye.key)||null,V(W,ee,ye,nt);case E:return ee=ee.get(ye.key===null?se:ye.key)||null,oe(W,ee,ye,nt);case A:return ye=ar(ye),he(ee,W,se,ye,nt)}if(q(ye)||j(ye))return ee=ee.get(se)||null,xe(W,ee,ye,nt,null);if(typeof ye.then=="function")return he(ee,W,se,ic(ye),nt);if(ye.$$typeof===I)return he(ee,W,se,$l(W,ye),nt);ac(W,ye)}return null}function Qe(ee,W,se,ye){for(var nt=null,Ut=null,$e=W,pt=W=0,Et=null;$e!==null&&pt<se.length;pt++){$e.index>pt?(Et=$e,$e=null):Et=$e.sibling;var Ot=ce(ee,$e,se[pt],ye);if(Ot===null){$e===null&&($e=Et);break}t&&$e&&Ot.alternate===null&&n(ee,$e),W=p(Ot,W,pt),Ut===null?nt=Ot:Ut.sibling=Ot,Ut=Ot,$e=Et}if(pt===se.length)return s(ee,$e),At&&Ua(ee,pt),nt;if($e===null){for(;pt<se.length;pt++)$e=Te(ee,se[pt],ye),$e!==null&&(W=p($e,W,pt),Ut===null?nt=$e:Ut.sibling=$e,Ut=$e);return At&&Ua(ee,pt),nt}for($e=l($e);pt<se.length;pt++)Et=he($e,ee,pt,se[pt],ye),Et!==null&&(t&&Et.alternate!==null&&$e.delete(Et.key===null?pt:Et.key),W=p(Et,W,pt),Ut===null?nt=Et:Ut.sibling=Et,Ut=Et);return t&&$e.forEach(function(Ds){return n(ee,Ds)}),At&&Ua(ee,pt),nt}function at(ee,W,se,ye){if(se==null)throw Error(r(151));for(var nt=null,Ut=null,$e=W,pt=W=0,Et=null,Ot=se.next();$e!==null&&!Ot.done;pt++,Ot=se.next()){$e.index>pt?(Et=$e,$e=null):Et=$e.sibling;var Ds=ce(ee,$e,Ot.value,ye);if(Ds===null){$e===null&&($e=Et);break}t&&$e&&Ds.alternate===null&&n(ee,$e),W=p(Ds,W,pt),Ut===null?nt=Ds:Ut.sibling=Ds,Ut=Ds,$e=Et}if(Ot.done)return s(ee,$e),At&&Ua(ee,pt),nt;if($e===null){for(;!Ot.done;pt++,Ot=se.next())Ot=Te(ee,Ot.value,ye),Ot!==null&&(W=p(Ot,W,pt),Ut===null?nt=Ot:Ut.sibling=Ot,Ut=Ot);return At&&Ua(ee,pt),nt}for($e=l($e);!Ot.done;pt++,Ot=se.next())Ot=he($e,ee,pt,Ot.value,ye),Ot!==null&&(t&&Ot.alternate!==null&&$e.delete(Ot.key===null?pt:Ot.key),W=p(Ot,W,pt),Ut===null?nt=Ot:Ut.sibling=Ot,Ut=Ot);return t&&$e.forEach(function(fy){return n(ee,fy)}),At&&Ua(ee,pt),nt}function Kt(ee,W,se,ye){if(typeof se=="object"&&se!==null&&se.type===R&&se.key===null&&(se=se.props.children),typeof se=="object"&&se!==null){switch(se.$$typeof){case S:e:{for(var nt=se.key;W!==null;){if(W.key===nt){if(nt=se.type,nt===R){if(W.tag===7){s(ee,W.sibling),ye=f(W,se.props.children),ye.return=ee,ee=ye;break e}}else if(W.elementType===nt||typeof nt=="object"&&nt!==null&&nt.$$typeof===A&&ar(nt)===W.type){s(ee,W.sibling),ye=f(W,se.props),Wo(ye,se),ye.return=ee,ee=ye;break e}s(ee,W);break}else n(ee,W);W=W.sibling}se.type===R?(ye=$s(se.props.children,ee.mode,ye,se.key),ye.return=ee,ee=ye):(ye=Kl(se.type,se.key,se.props,null,ee.mode,ye),Wo(ye,se),ye.return=ee,ee=ye)}return M(ee);case E:e:{for(nt=se.key;W!==null;){if(W.key===nt)if(W.tag===4&&W.stateNode.containerInfo===se.containerInfo&&W.stateNode.implementation===se.implementation){s(ee,W.sibling),ye=f(W,se.children||[]),ye.return=ee,ee=ye;break e}else{s(ee,W);break}else n(ee,W);W=W.sibling}ye=tf(se,ee.mode,ye),ye.return=ee,ee=ye}return M(ee);case A:return se=ar(se),Kt(ee,W,se,ye)}if(q(se))return Qe(ee,W,se,ye);if(j(se)){if(nt=j(se),typeof nt!="function")throw Error(r(150));return se=nt.call(se),at(ee,W,se,ye)}if(typeof se.then=="function")return Kt(ee,W,ic(se),ye);if(se.$$typeof===I)return Kt(ee,W,$l(ee,se),ye);ac(ee,se)}return typeof se=="string"&&se!==""||typeof se=="number"||typeof se=="bigint"?(se=""+se,W!==null&&W.tag===6?(s(ee,W.sibling),ye=f(W,se),ye.return=ee,ee=ye):(s(ee,W),ye=ef(se,ee.mode,ye),ye.return=ee,ee=ye),M(ee)):s(ee,W)}return function(ee,W,se,ye){try{Xo=0;var nt=Kt(ee,W,se,ye);return Hr=null,nt}catch($e){if($e===zr||$e===tc)throw $e;var Ut=xi(29,$e,null,ee.mode);return Ut.lanes=ye,Ut.return=ee,Ut}finally{}}}var rr=Bm(!0),zm=Bm(!1),hs=!1;function pf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function mf(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function ps(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function ms(t,n,s){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(zt&2)!==0){var f=l.pending;return f===null?n.next=n:(n.next=f.next,f.next=n),l.pending=n,n=Zl(t),ym(t,null,s),n}return jl(t,l,n,s),Zl(t)}function Yo(t,n,s){if(n=n.updateQueue,n!==null&&(n=n.shared,(s&4194048)!==0)){var l=n.lanes;l&=t.pendingLanes,s|=l,n.lanes=s,ti(t,s)}}function gf(t,n){var s=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,s===l)){var f=null,p=null;if(s=s.firstBaseUpdate,s!==null){do{var M={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};p===null?f=p=M:p=p.next=M,s=s.next}while(s!==null);p===null?f=p=n:p=p.next=n}else f=p=n;s={baseState:l.baseState,firstBaseUpdate:f,lastBaseUpdate:p,shared:l.shared,callbacks:l.callbacks},t.updateQueue=s;return}t=s.lastBaseUpdate,t===null?s.firstBaseUpdate=n:t.next=n,s.lastBaseUpdate=n}var _f=!1;function qo(){if(_f){var t=Br;if(t!==null)throw t}}function jo(t,n,s,l){_f=!1;var f=t.updateQueue;hs=!1;var p=f.firstBaseUpdate,M=f.lastBaseUpdate,C=f.shared.pending;if(C!==null){f.shared.pending=null;var V=C,oe=V.next;V.next=null,M===null?p=oe:M.next=oe,M=V;var xe=t.alternate;xe!==null&&(xe=xe.updateQueue,C=xe.lastBaseUpdate,C!==M&&(C===null?xe.firstBaseUpdate=oe:C.next=oe,xe.lastBaseUpdate=V))}if(p!==null){var Te=f.baseState;M=0,xe=oe=V=null,C=p;do{var ce=C.lane&-536870913,he=ce!==C.lane;if(he?(yt&ce)===ce:(l&ce)===ce){ce!==0&&ce===Fr&&(_f=!0),xe!==null&&(xe=xe.next={lane:0,tag:C.tag,payload:C.payload,callback:null,next:null});e:{var Qe=t,at=C;ce=n;var Kt=s;switch(at.tag){case 1:if(Qe=at.payload,typeof Qe=="function"){Te=Qe.call(Kt,Te,ce);break e}Te=Qe;break e;case 3:Qe.flags=Qe.flags&-65537|128;case 0:if(Qe=at.payload,ce=typeof Qe=="function"?Qe.call(Kt,Te,ce):Qe,ce==null)break e;Te=v({},Te,ce);break e;case 2:hs=!0}}ce=C.callback,ce!==null&&(t.flags|=64,he&&(t.flags|=8192),he=f.callbacks,he===null?f.callbacks=[ce]:he.push(ce))}else he={lane:ce,tag:C.tag,payload:C.payload,callback:C.callback,next:null},xe===null?(oe=xe=he,V=Te):xe=xe.next=he,M|=ce;if(C=C.next,C===null){if(C=f.shared.pending,C===null)break;he=C,C=he.next,he.next=null,f.lastBaseUpdate=he,f.shared.pending=null}}while(!0);xe===null&&(V=Te),f.baseState=V,f.firstBaseUpdate=oe,f.lastBaseUpdate=xe,p===null&&(f.shared.lanes=0),Ss|=M,t.lanes=M,t.memoizedState=Te}}function Hm(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function Gm(t,n){var s=t.callbacks;if(s!==null)for(t.callbacks=null,t=0;t<s.length;t++)Hm(s[t],n)}var Gr=U(null),sc=U(0);function Vm(t,n){t=Xa,be(sc,t),be(Gr,n),Xa=t|n.baseLanes}function vf(){be(sc,Xa),be(Gr,Gr.current)}function xf(){Xa=sc.current,K(Gr),K(sc)}var Si=U(null),zi=null;function gs(t){var n=t.alternate;be(yn,yn.current&1),be(Si,t),zi===null&&(n===null||Gr.current!==null||n.memoizedState!==null)&&(zi=t)}function Sf(t){be(yn,yn.current),be(Si,t),zi===null&&(zi=t)}function km(t){t.tag===22?(be(yn,yn.current),be(Si,t),zi===null&&(zi=t)):_s()}function _s(){be(yn,yn.current),be(Si,Si.current)}function Mi(t){K(Si),zi===t&&(zi=null),K(yn)}var yn=U(0);function rc(t){for(var n=t;n!==null;){if(n.tag===13){var s=n.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||Ad(s)||Rd(s)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Ia=0,dt=null,jt=null,Rn=null,oc=!1,Vr=!1,or=!1,lc=0,Zo=0,kr=null,tM=0;function vn(){throw Error(r(321))}function Mf(t,n){if(n===null)return!1;for(var s=0;s<n.length&&s<t.length;s++)if(!vi(t[s],n[s]))return!1;return!0}function yf(t,n,s,l,f,p){return Ia=p,dt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,z.H=t===null||t.memoizedState===null?A0:Ff,or=!1,p=s(l,f),or=!1,Vr&&(p=Wm(n,s,l,f)),Xm(t),p}function Xm(t){z.H=Jo;var n=jt!==null&&jt.next!==null;if(Ia=0,Rn=jt=dt=null,oc=!1,Zo=0,kr=null,n)throw Error(r(300));t===null||Cn||(t=t.dependencies,t!==null&&Jl(t)&&(Cn=!0))}function Wm(t,n,s,l){dt=t;var f=0;do{if(Vr&&(kr=null),Zo=0,Vr=!1,25<=f)throw Error(r(301));if(f+=1,Rn=jt=null,t.updateQueue!=null){var p=t.updateQueue;p.lastEffect=null,p.events=null,p.stores=null,p.memoCache!=null&&(p.memoCache.index=0)}z.H=R0,p=n(s,l)}while(Vr);return p}function nM(){var t=z.H,n=t.useState()[0];return n=typeof n.then=="function"?Ko(n):n,t=t.useState()[0],(jt!==null?jt.memoizedState:null)!==t&&(dt.flags|=1024),n}function Ef(){var t=lc!==0;return lc=0,t}function bf(t,n,s){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~s}function Tf(t){if(oc){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}oc=!1}Ia=0,Rn=jt=dt=null,Vr=!1,Zo=lc=0,kr=null}function ni(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Rn===null?dt.memoizedState=Rn=t:Rn=Rn.next=t,Rn}function En(){if(jt===null){var t=dt.alternate;t=t!==null?t.memoizedState:null}else t=jt.next;var n=Rn===null?dt.memoizedState:Rn.next;if(n!==null)Rn=n,jt=t;else{if(t===null)throw dt.alternate===null?Error(r(467)):Error(r(310));jt=t,t={memoizedState:jt.memoizedState,baseState:jt.baseState,baseQueue:jt.baseQueue,queue:jt.queue,next:null},Rn===null?dt.memoizedState=Rn=t:Rn=Rn.next=t}return Rn}function cc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ko(t){var n=Zo;return Zo+=1,kr===null&&(kr=[]),t=Pm(kr,t,n),n=dt,(Rn===null?n.memoizedState:Rn.next)===null&&(n=n.alternate,z.H=n===null||n.memoizedState===null?A0:Ff),t}function uc(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Ko(t);if(t.$$typeof===I)return kn(t)}throw Error(r(438,String(t)))}function Af(t){var n=null,s=dt.updateQueue;if(s!==null&&(n=s.memoCache),n==null){var l=dt.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(n={data:l.data.map(function(f){return f.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),s===null&&(s=cc(),dt.updateQueue=s),s.memoCache=n,s=n.data[n.index],s===void 0)for(s=n.data[n.index]=Array(t),l=0;l<t;l++)s[l]=Y;return n.index++,s}function Fa(t,n){return typeof n=="function"?n(t):n}function fc(t){var n=En();return Rf(n,jt,t)}function Rf(t,n,s){var l=t.queue;if(l===null)throw Error(r(311));l.lastRenderedReducer=s;var f=t.baseQueue,p=l.pending;if(p!==null){if(f!==null){var M=f.next;f.next=p.next,p.next=M}n.baseQueue=f=p,l.pending=null}if(p=t.baseState,f===null)t.memoizedState=p;else{n=f.next;var C=M=null,V=null,oe=n,xe=!1;do{var Te=oe.lane&-536870913;if(Te!==oe.lane?(yt&Te)===Te:(Ia&Te)===Te){var ce=oe.revertLane;if(ce===0)V!==null&&(V=V.next={lane:0,revertLane:0,gesture:null,action:oe.action,hasEagerState:oe.hasEagerState,eagerState:oe.eagerState,next:null}),Te===Fr&&(xe=!0);else if((Ia&ce)===ce){oe=oe.next,ce===Fr&&(xe=!0);continue}else Te={lane:0,revertLane:oe.revertLane,gesture:null,action:oe.action,hasEagerState:oe.hasEagerState,eagerState:oe.eagerState,next:null},V===null?(C=V=Te,M=p):V=V.next=Te,dt.lanes|=ce,Ss|=ce;Te=oe.action,or&&s(p,Te),p=oe.hasEagerState?oe.eagerState:s(p,Te)}else ce={lane:Te,revertLane:oe.revertLane,gesture:oe.gesture,action:oe.action,hasEagerState:oe.hasEagerState,eagerState:oe.eagerState,next:null},V===null?(C=V=ce,M=p):V=V.next=ce,dt.lanes|=Te,Ss|=Te;oe=oe.next}while(oe!==null&&oe!==n);if(V===null?M=p:V.next=C,!vi(p,t.memoizedState)&&(Cn=!0,xe&&(s=Br,s!==null)))throw s;t.memoizedState=p,t.baseState=M,t.baseQueue=V,l.lastRenderedState=p}return f===null&&(l.lanes=0),[t.memoizedState,l.dispatch]}function Cf(t){var n=En(),s=n.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=t;var l=s.dispatch,f=s.pending,p=n.memoizedState;if(f!==null){s.pending=null;var M=f=f.next;do p=t(p,M.action),M=M.next;while(M!==f);vi(p,n.memoizedState)||(Cn=!0),n.memoizedState=p,n.baseQueue===null&&(n.baseState=p),s.lastRenderedState=p}return[p,l]}function Ym(t,n,s){var l=dt,f=En(),p=At;if(p){if(s===void 0)throw Error(r(407));s=s()}else s=n();var M=!vi((jt||f).memoizedState,s);if(M&&(f.memoizedState=s,Cn=!0),f=f.queue,Lf(Zm.bind(null,l,f,t),[t]),f.getSnapshot!==n||M||Rn!==null&&Rn.memoizedState.tag&1){if(l.flags|=2048,Xr(9,{destroy:void 0},jm.bind(null,l,f,s,n),null),en===null)throw Error(r(349));p||(Ia&127)!==0||qm(l,n,s)}return s}function qm(t,n,s){t.flags|=16384,t={getSnapshot:n,value:s},n=dt.updateQueue,n===null?(n=cc(),dt.updateQueue=n,n.stores=[t]):(s=n.stores,s===null?n.stores=[t]:s.push(t))}function jm(t,n,s,l){n.value=s,n.getSnapshot=l,Km(n)&&Qm(t)}function Zm(t,n,s){return s(function(){Km(n)&&Qm(t)})}function Km(t){var n=t.getSnapshot;t=t.value;try{var s=n();return!vi(t,s)}catch{return!0}}function Qm(t){var n=Js(t,2);n!==null&&di(n,t,2)}function wf(t){var n=ni();if(typeof t=="function"){var s=t;if(t=s(),or){De(!0);try{s()}finally{De(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fa,lastRenderedState:t},n}function Jm(t,n,s,l){return t.baseState=s,Rf(t,jt,typeof l=="function"?l:Fa)}function iM(t,n,s,l,f){if(pc(t))throw Error(r(485));if(t=n.action,t!==null){var p={payload:f,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(M){p.listeners.push(M)}};z.T!==null?s(!0):p.isTransition=!1,l(p),s=n.pending,s===null?(p.next=n.pending=p,$m(n,p)):(p.next=s.next,n.pending=s.next=p)}}function $m(t,n){var s=n.action,l=n.payload,f=t.state;if(n.isTransition){var p=z.T,M={};z.T=M;try{var C=s(f,l),V=z.S;V!==null&&V(M,C),e0(t,n,C)}catch(oe){Df(t,n,oe)}finally{p!==null&&M.types!==null&&(p.types=M.types),z.T=p}}else try{p=s(f,l),e0(t,n,p)}catch(oe){Df(t,n,oe)}}function e0(t,n,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(l){t0(t,n,l)},function(l){return Df(t,n,l)}):t0(t,n,s)}function t0(t,n,s){n.status="fulfilled",n.value=s,n0(n),t.state=s,n=t.pending,n!==null&&(s=n.next,s===n?t.pending=null:(s=s.next,n.next=s,$m(t,s)))}function Df(t,n,s){var l=t.pending;if(t.pending=null,l!==null){l=l.next;do n.status="rejected",n.reason=s,n0(n),n=n.next;while(n!==l)}t.action=null}function n0(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function i0(t,n){return n}function a0(t,n){if(At){var s=en.formState;if(s!==null){e:{var l=dt;if(At){if(on){t:{for(var f=on,p=Bi;f.nodeType!==8;){if(!p){f=null;break t}if(f=Hi(f.nextSibling),f===null){f=null;break t}}p=f.data,f=p==="F!"||p==="F"?f:null}if(f){on=Hi(f.nextSibling),l=f.data==="F!";break e}}fs(l)}l=!1}l&&(n=s[0])}}return s=ni(),s.memoizedState=s.baseState=n,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:i0,lastRenderedState:n},s.queue=l,s=E0.bind(null,dt,l),l.dispatch=s,l=wf(!1),p=If.bind(null,dt,!1,l.queue),l=ni(),f={state:n,dispatch:null,action:t,pending:null},l.queue=f,s=iM.bind(null,dt,f,p,s),f.dispatch=s,l.memoizedState=t,[n,s,!1]}function s0(t){var n=En();return r0(n,jt,t)}function r0(t,n,s){if(n=Rf(t,n,i0)[0],t=fc(Fa)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var l=Ko(n)}catch(M){throw M===zr?tc:M}else l=n;n=En();var f=n.queue,p=f.dispatch;return s!==n.memoizedState&&(dt.flags|=2048,Xr(9,{destroy:void 0},aM.bind(null,f,s),null)),[l,p,t]}function aM(t,n){t.action=n}function o0(t){var n=En(),s=jt;if(s!==null)return r0(n,s,t);En(),n=n.memoizedState,s=En();var l=s.queue.dispatch;return s.memoizedState=t,[n,l,!1]}function Xr(t,n,s,l){return t={tag:t,create:s,deps:l,inst:n,next:null},n=dt.updateQueue,n===null&&(n=cc(),dt.updateQueue=n),s=n.lastEffect,s===null?n.lastEffect=t.next=t:(l=s.next,s.next=t,t.next=l,n.lastEffect=t),t}function l0(){return En().memoizedState}function dc(t,n,s,l){var f=ni();dt.flags|=t,f.memoizedState=Xr(1|n,{destroy:void 0},s,l===void 0?null:l)}function hc(t,n,s,l){var f=En();l=l===void 0?null:l;var p=f.memoizedState.inst;jt!==null&&l!==null&&Mf(l,jt.memoizedState.deps)?f.memoizedState=Xr(n,p,s,l):(dt.flags|=t,f.memoizedState=Xr(1|n,p,s,l))}function c0(t,n){dc(8390656,8,t,n)}function Lf(t,n){hc(2048,8,t,n)}function sM(t){dt.flags|=4;var n=dt.updateQueue;if(n===null)n=cc(),dt.updateQueue=n,n.events=[t];else{var s=n.events;s===null?n.events=[t]:s.push(t)}}function u0(t){var n=En().memoizedState;return sM({ref:n,nextImpl:t}),function(){if((zt&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function f0(t,n){return hc(4,2,t,n)}function d0(t,n){return hc(4,4,t,n)}function h0(t,n){if(typeof n=="function"){t=t();var s=n(t);return function(){typeof s=="function"?s():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function p0(t,n,s){s=s!=null?s.concat([t]):null,hc(4,4,h0.bind(null,n,t),s)}function Nf(){}function m0(t,n){var s=En();n=n===void 0?null:n;var l=s.memoizedState;return n!==null&&Mf(n,l[1])?l[0]:(s.memoizedState=[t,n],t)}function g0(t,n){var s=En();n=n===void 0?null:n;var l=s.memoizedState;if(n!==null&&Mf(n,l[1]))return l[0];if(l=t(),or){De(!0);try{t()}finally{De(!1)}}return s.memoizedState=[l,n],l}function Uf(t,n,s){return s===void 0||(Ia&1073741824)!==0&&(yt&261930)===0?t.memoizedState=n:(t.memoizedState=s,t=_g(),dt.lanes|=t,Ss|=t,s)}function _0(t,n,s,l){return vi(s,n)?s:Gr.current!==null?(t=Uf(t,s,l),vi(t,n)||(Cn=!0),t):(Ia&42)===0||(Ia&1073741824)!==0&&(yt&261930)===0?(Cn=!0,t.memoizedState=s):(t=_g(),dt.lanes|=t,Ss|=t,n)}function v0(t,n,s,l,f){var p=H.p;H.p=p!==0&&8>p?p:8;var M=z.T,C={};z.T=C,If(t,!1,n,s);try{var V=f(),oe=z.S;if(oe!==null&&oe(C,V),V!==null&&typeof V=="object"&&typeof V.then=="function"){var xe=eM(V,l);Qo(t,n,xe,bi(t))}else Qo(t,n,l,bi(t))}catch(Te){Qo(t,n,{then:function(){},status:"rejected",reason:Te},bi())}finally{H.p=p,M!==null&&C.types!==null&&(M.types=C.types),z.T=M}}function rM(){}function Of(t,n,s,l){if(t.tag!==5)throw Error(r(476));var f=x0(t).queue;v0(t,f,n,te,s===null?rM:function(){return S0(t),s(l)})}function x0(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:te,baseState:te,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fa,lastRenderedState:te},next:null};var s={};return n.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fa,lastRenderedState:s},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function S0(t){var n=x0(t);n.next===null&&(n=t.alternate.memoizedState),Qo(t,n.next.queue,{},bi())}function Pf(){return kn(pl)}function M0(){return En().memoizedState}function y0(){return En().memoizedState}function oM(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var s=bi();t=ps(s);var l=ms(n,t,s);l!==null&&(di(l,n,s),Yo(l,n,s)),n={cache:uf()},t.payload=n;return}n=n.return}}function lM(t,n,s){var l=bi();s={lane:l,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},pc(t)?b0(n,s):(s=Ju(t,n,s,l),s!==null&&(di(s,t,l),T0(s,n,l)))}function E0(t,n,s){var l=bi();Qo(t,n,s,l)}function Qo(t,n,s,l){var f={lane:l,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null};if(pc(t))b0(n,f);else{var p=t.alternate;if(t.lanes===0&&(p===null||p.lanes===0)&&(p=n.lastRenderedReducer,p!==null))try{var M=n.lastRenderedState,C=p(M,s);if(f.hasEagerState=!0,f.eagerState=C,vi(C,M))return jl(t,n,f,0),en===null&&ql(),!1}catch{}finally{}if(s=Ju(t,n,f,l),s!==null)return di(s,t,l),T0(s,n,l),!0}return!1}function If(t,n,s,l){if(l={lane:2,revertLane:pd(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},pc(t)){if(n)throw Error(r(479))}else n=Ju(t,s,l,2),n!==null&&di(n,t,2)}function pc(t){var n=t.alternate;return t===dt||n!==null&&n===dt}function b0(t,n){Vr=oc=!0;var s=t.pending;s===null?n.next=n:(n.next=s.next,s.next=n),t.pending=n}function T0(t,n,s){if((s&4194048)!==0){var l=n.lanes;l&=t.pendingLanes,s|=l,n.lanes=s,ti(t,s)}}var Jo={readContext:kn,use:uc,useCallback:vn,useContext:vn,useEffect:vn,useImperativeHandle:vn,useLayoutEffect:vn,useInsertionEffect:vn,useMemo:vn,useReducer:vn,useRef:vn,useState:vn,useDebugValue:vn,useDeferredValue:vn,useTransition:vn,useSyncExternalStore:vn,useId:vn,useHostTransitionStatus:vn,useFormState:vn,useActionState:vn,useOptimistic:vn,useMemoCache:vn,useCacheRefresh:vn};Jo.useEffectEvent=vn;var A0={readContext:kn,use:uc,useCallback:function(t,n){return ni().memoizedState=[t,n===void 0?null:n],t},useContext:kn,useEffect:c0,useImperativeHandle:function(t,n,s){s=s!=null?s.concat([t]):null,dc(4194308,4,h0.bind(null,n,t),s)},useLayoutEffect:function(t,n){return dc(4194308,4,t,n)},useInsertionEffect:function(t,n){dc(4,2,t,n)},useMemo:function(t,n){var s=ni();n=n===void 0?null:n;var l=t();if(or){De(!0);try{t()}finally{De(!1)}}return s.memoizedState=[l,n],l},useReducer:function(t,n,s){var l=ni();if(s!==void 0){var f=s(n);if(or){De(!0);try{s(n)}finally{De(!1)}}}else f=n;return l.memoizedState=l.baseState=f,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:f},l.queue=t,t=t.dispatch=lM.bind(null,dt,t),[l.memoizedState,t]},useRef:function(t){var n=ni();return t={current:t},n.memoizedState=t},useState:function(t){t=wf(t);var n=t.queue,s=E0.bind(null,dt,n);return n.dispatch=s,[t.memoizedState,s]},useDebugValue:Nf,useDeferredValue:function(t,n){var s=ni();return Uf(s,t,n)},useTransition:function(){var t=wf(!1);return t=v0.bind(null,dt,t.queue,!0,!1),ni().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,s){var l=dt,f=ni();if(At){if(s===void 0)throw Error(r(407));s=s()}else{if(s=n(),en===null)throw Error(r(349));(yt&127)!==0||qm(l,n,s)}f.memoizedState=s;var p={value:s,getSnapshot:n};return f.queue=p,c0(Zm.bind(null,l,p,t),[t]),l.flags|=2048,Xr(9,{destroy:void 0},jm.bind(null,l,p,s,n),null),s},useId:function(){var t=ni(),n=en.identifierPrefix;if(At){var s=pa,l=ha;s=(l&~(1<<32-Ge(l)-1)).toString(32)+s,n="_"+n+"R_"+s,s=lc++,0<s&&(n+="H"+s.toString(32)),n+="_"}else s=tM++,n="_"+n+"r_"+s.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:Pf,useFormState:a0,useActionState:a0,useOptimistic:function(t){var n=ni();n.memoizedState=n.baseState=t;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=s,n=If.bind(null,dt,!0,s),s.dispatch=n,[t,n]},useMemoCache:Af,useCacheRefresh:function(){return ni().memoizedState=oM.bind(null,dt)},useEffectEvent:function(t){var n=ni(),s={impl:t};return n.memoizedState=s,function(){if((zt&2)!==0)throw Error(r(440));return s.impl.apply(void 0,arguments)}}},Ff={readContext:kn,use:uc,useCallback:m0,useContext:kn,useEffect:Lf,useImperativeHandle:p0,useInsertionEffect:f0,useLayoutEffect:d0,useMemo:g0,useReducer:fc,useRef:l0,useState:function(){return fc(Fa)},useDebugValue:Nf,useDeferredValue:function(t,n){var s=En();return _0(s,jt.memoizedState,t,n)},useTransition:function(){var t=fc(Fa)[0],n=En().memoizedState;return[typeof t=="boolean"?t:Ko(t),n]},useSyncExternalStore:Ym,useId:M0,useHostTransitionStatus:Pf,useFormState:s0,useActionState:s0,useOptimistic:function(t,n){var s=En();return Jm(s,jt,t,n)},useMemoCache:Af,useCacheRefresh:y0};Ff.useEffectEvent=u0;var R0={readContext:kn,use:uc,useCallback:m0,useContext:kn,useEffect:Lf,useImperativeHandle:p0,useInsertionEffect:f0,useLayoutEffect:d0,useMemo:g0,useReducer:Cf,useRef:l0,useState:function(){return Cf(Fa)},useDebugValue:Nf,useDeferredValue:function(t,n){var s=En();return jt===null?Uf(s,t,n):_0(s,jt.memoizedState,t,n)},useTransition:function(){var t=Cf(Fa)[0],n=En().memoizedState;return[typeof t=="boolean"?t:Ko(t),n]},useSyncExternalStore:Ym,useId:M0,useHostTransitionStatus:Pf,useFormState:o0,useActionState:o0,useOptimistic:function(t,n){var s=En();return jt!==null?Jm(s,jt,t,n):(s.baseState=t,[t,s.queue.dispatch])},useMemoCache:Af,useCacheRefresh:y0};R0.useEffectEvent=u0;function Bf(t,n,s,l){n=t.memoizedState,s=s(l,n),s=s==null?n:v({},n,s),t.memoizedState=s,t.lanes===0&&(t.updateQueue.baseState=s)}var zf={enqueueSetState:function(t,n,s){t=t._reactInternals;var l=bi(),f=ps(l);f.payload=n,s!=null&&(f.callback=s),n=ms(t,f,l),n!==null&&(di(n,t,l),Yo(n,t,l))},enqueueReplaceState:function(t,n,s){t=t._reactInternals;var l=bi(),f=ps(l);f.tag=1,f.payload=n,s!=null&&(f.callback=s),n=ms(t,f,l),n!==null&&(di(n,t,l),Yo(n,t,l))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var s=bi(),l=ps(s);l.tag=2,n!=null&&(l.callback=n),n=ms(t,l,s),n!==null&&(di(n,t,s),Yo(n,t,s))}};function C0(t,n,s,l,f,p,M){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,p,M):n.prototype&&n.prototype.isPureReactComponent?!Bo(s,l)||!Bo(f,p):!0}function w0(t,n,s,l){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(s,l),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(s,l),n.state!==t&&zf.enqueueReplaceState(n,n.state,null)}function lr(t,n){var s=n;if("ref"in n){s={};for(var l in n)l!=="ref"&&(s[l]=n[l])}if(t=t.defaultProps){s===n&&(s=v({},s));for(var f in t)s[f]===void 0&&(s[f]=t[f])}return s}function D0(t){Yl(t)}function L0(t){console.error(t)}function N0(t){Yl(t)}function mc(t,n){try{var s=t.onUncaughtError;s(n.value,{componentStack:n.stack})}catch(l){setTimeout(function(){throw l})}}function U0(t,n,s){try{var l=t.onCaughtError;l(s.value,{componentStack:s.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function Hf(t,n,s){return s=ps(s),s.tag=3,s.payload={element:null},s.callback=function(){mc(t,n)},s}function O0(t){return t=ps(t),t.tag=3,t}function P0(t,n,s,l){var f=s.type.getDerivedStateFromError;if(typeof f=="function"){var p=l.value;t.payload=function(){return f(p)},t.callback=function(){U0(n,s,l)}}var M=s.stateNode;M!==null&&typeof M.componentDidCatch=="function"&&(t.callback=function(){U0(n,s,l),typeof f!="function"&&(Ms===null?Ms=new Set([this]):Ms.add(this));var C=l.stack;this.componentDidCatch(l.value,{componentStack:C!==null?C:""})})}function cM(t,n,s,l,f){if(s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(n=s.alternate,n!==null&&Ir(n,s,f,!0),s=Si.current,s!==null){switch(s.tag){case 31:case 13:return zi===null?Rc():s.alternate===null&&xn===0&&(xn=3),s.flags&=-257,s.flags|=65536,s.lanes=f,l===nc?s.flags|=16384:(n=s.updateQueue,n===null?s.updateQueue=new Set([l]):n.add(l),fd(t,l,f)),!1;case 22:return s.flags|=65536,l===nc?s.flags|=16384:(n=s.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([l])},s.updateQueue=n):(s=n.retryQueue,s===null?n.retryQueue=new Set([l]):s.add(l)),fd(t,l,f)),!1}throw Error(r(435,s.tag))}return fd(t,l,f),Rc(),!1}if(At)return n=Si.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=f,l!==sf&&(t=Error(r(422),{cause:l}),Go(Pi(t,s)))):(l!==sf&&(n=Error(r(423),{cause:l}),Go(Pi(n,s))),t=t.current.alternate,t.flags|=65536,f&=-f,t.lanes|=f,l=Pi(l,s),f=Hf(t.stateNode,l,f),gf(t,f),xn!==4&&(xn=2)),!1;var p=Error(r(520),{cause:l});if(p=Pi(p,s),rl===null?rl=[p]:rl.push(p),xn!==4&&(xn=2),n===null)return!0;l=Pi(l,s),s=n;do{switch(s.tag){case 3:return s.flags|=65536,t=f&-f,s.lanes|=t,t=Hf(s.stateNode,l,t),gf(s,t),!1;case 1:if(n=s.type,p=s.stateNode,(s.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Ms===null||!Ms.has(p))))return s.flags|=65536,f&=-f,s.lanes|=f,f=O0(f),P0(f,t,s,l),gf(s,f),!1}s=s.return}while(s!==null);return!1}var Gf=Error(r(461)),Cn=!1;function Xn(t,n,s,l){n.child=t===null?zm(n,null,s,l):rr(n,t.child,s,l)}function I0(t,n,s,l,f){s=s.render;var p=n.ref;if("ref"in l){var M={};for(var C in l)C!=="ref"&&(M[C]=l[C])}else M=l;return nr(n),l=yf(t,n,s,M,p,f),C=Ef(),t!==null&&!Cn?(bf(t,n,f),Ba(t,n,f)):(At&&C&&nf(n),n.flags|=1,Xn(t,n,l,f),n.child)}function F0(t,n,s,l,f){if(t===null){var p=s.type;return typeof p=="function"&&!$u(p)&&p.defaultProps===void 0&&s.compare===null?(n.tag=15,n.type=p,B0(t,n,p,l,f)):(t=Kl(s.type,null,l,n,n.mode,f),t.ref=n.ref,t.return=n,n.child=t)}if(p=t.child,!Zf(t,f)){var M=p.memoizedProps;if(s=s.compare,s=s!==null?s:Bo,s(M,l)&&t.ref===n.ref)return Ba(t,n,f)}return n.flags|=1,t=Na(p,l),t.ref=n.ref,t.return=n,n.child=t}function B0(t,n,s,l,f){if(t!==null){var p=t.memoizedProps;if(Bo(p,l)&&t.ref===n.ref)if(Cn=!1,n.pendingProps=l=p,Zf(t,f))(t.flags&131072)!==0&&(Cn=!0);else return n.lanes=t.lanes,Ba(t,n,f)}return Vf(t,n,s,l,f)}function z0(t,n,s,l){var f=l.children,p=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((n.flags&128)!==0){if(p=p!==null?p.baseLanes|s:s,t!==null){for(l=n.child=t.child,f=0;l!==null;)f=f|l.lanes|l.childLanes,l=l.sibling;l=f&~p}else l=0,n.child=null;return H0(t,n,p,s,l)}if((s&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&ec(n,p!==null?p.cachePool:null),p!==null?Vm(n,p):vf(),km(n);else return l=n.lanes=536870912,H0(t,n,p!==null?p.baseLanes|s:s,s,l)}else p!==null?(ec(n,p.cachePool),Vm(n,p),_s(),n.memoizedState=null):(t!==null&&ec(n,null),vf(),_s());return Xn(t,n,f,s),n.child}function $o(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function H0(t,n,s,l,f){var p=df();return p=p===null?null:{parent:An._currentValue,pool:p},n.memoizedState={baseLanes:s,cachePool:p},t!==null&&ec(n,null),vf(),km(n),t!==null&&Ir(t,n,l,!0),n.childLanes=f,null}function gc(t,n){return n=vc({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function G0(t,n,s){return rr(n,t.child,null,s),t=gc(n,n.pendingProps),t.flags|=2,Mi(n),n.memoizedState=null,t}function uM(t,n,s){var l=n.pendingProps,f=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(At){if(l.mode==="hidden")return t=gc(n,l),n.lanes=536870912,$o(null,t);if(Sf(n),(t=on)?(t=$g(t,Bi),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:cs!==null?{id:ha,overflow:pa}:null,retryLane:536870912,hydrationErrors:null},s=bm(t),s.return=n,n.child=s,Vn=n,on=null)):t=null,t===null)throw fs(n);return n.lanes=536870912,null}return gc(n,l)}var p=t.memoizedState;if(p!==null){var M=p.dehydrated;if(Sf(n),f)if(n.flags&256)n.flags&=-257,n=G0(t,n,s);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(r(558));else if(Cn||Ir(t,n,s,!1),f=(s&t.childLanes)!==0,Cn||f){if(l=en,l!==null&&(M=In(l,s),M!==0&&M!==p.retryLane))throw p.retryLane=M,Js(t,M),di(l,t,M),Gf;Rc(),n=G0(t,n,s)}else t=p.treeContext,on=Hi(M.nextSibling),Vn=n,At=!0,us=null,Bi=!1,t!==null&&Rm(n,t),n=gc(n,l),n.flags|=4096;return n}return t=Na(t.child,{mode:l.mode,children:l.children}),t.ref=n.ref,n.child=t,t.return=n,t}function _c(t,n){var s=n.ref;if(s===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(r(284));(t===null||t.ref!==s)&&(n.flags|=4194816)}}function Vf(t,n,s,l,f){return nr(n),s=yf(t,n,s,l,void 0,f),l=Ef(),t!==null&&!Cn?(bf(t,n,f),Ba(t,n,f)):(At&&l&&nf(n),n.flags|=1,Xn(t,n,s,f),n.child)}function V0(t,n,s,l,f,p){return nr(n),n.updateQueue=null,s=Wm(n,l,s,f),Xm(t),l=Ef(),t!==null&&!Cn?(bf(t,n,p),Ba(t,n,p)):(At&&l&&nf(n),n.flags|=1,Xn(t,n,s,p),n.child)}function k0(t,n,s,l,f){if(nr(n),n.stateNode===null){var p=Nr,M=s.contextType;typeof M=="object"&&M!==null&&(p=kn(M)),p=new s(l,p),n.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,p.updater=zf,n.stateNode=p,p._reactInternals=n,p=n.stateNode,p.props=l,p.state=n.memoizedState,p.refs={},pf(n),M=s.contextType,p.context=typeof M=="object"&&M!==null?kn(M):Nr,p.state=n.memoizedState,M=s.getDerivedStateFromProps,typeof M=="function"&&(Bf(n,s,M,l),p.state=n.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(M=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),M!==p.state&&zf.enqueueReplaceState(p,p.state,null),jo(n,l,p,f),qo(),p.state=n.memoizedState),typeof p.componentDidMount=="function"&&(n.flags|=4194308),l=!0}else if(t===null){p=n.stateNode;var C=n.memoizedProps,V=lr(s,C);p.props=V;var oe=p.context,xe=s.contextType;M=Nr,typeof xe=="object"&&xe!==null&&(M=kn(xe));var Te=s.getDerivedStateFromProps;xe=typeof Te=="function"||typeof p.getSnapshotBeforeUpdate=="function",C=n.pendingProps!==C,xe||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(C||oe!==M)&&w0(n,p,l,M),hs=!1;var ce=n.memoizedState;p.state=ce,jo(n,l,p,f),qo(),oe=n.memoizedState,C||ce!==oe||hs?(typeof Te=="function"&&(Bf(n,s,Te,l),oe=n.memoizedState),(V=hs||C0(n,s,V,l,ce,oe,M))?(xe||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount()),typeof p.componentDidMount=="function"&&(n.flags|=4194308)):(typeof p.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=l,n.memoizedState=oe),p.props=l,p.state=oe,p.context=M,l=V):(typeof p.componentDidMount=="function"&&(n.flags|=4194308),l=!1)}else{p=n.stateNode,mf(t,n),M=n.memoizedProps,xe=lr(s,M),p.props=xe,Te=n.pendingProps,ce=p.context,oe=s.contextType,V=Nr,typeof oe=="object"&&oe!==null&&(V=kn(oe)),C=s.getDerivedStateFromProps,(oe=typeof C=="function"||typeof p.getSnapshotBeforeUpdate=="function")||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(M!==Te||ce!==V)&&w0(n,p,l,V),hs=!1,ce=n.memoizedState,p.state=ce,jo(n,l,p,f),qo();var he=n.memoizedState;M!==Te||ce!==he||hs||t!==null&&t.dependencies!==null&&Jl(t.dependencies)?(typeof C=="function"&&(Bf(n,s,C,l),he=n.memoizedState),(xe=hs||C0(n,s,xe,l,ce,he,V)||t!==null&&t.dependencies!==null&&Jl(t.dependencies))?(oe||typeof p.UNSAFE_componentWillUpdate!="function"&&typeof p.componentWillUpdate!="function"||(typeof p.componentWillUpdate=="function"&&p.componentWillUpdate(l,he,V),typeof p.UNSAFE_componentWillUpdate=="function"&&p.UNSAFE_componentWillUpdate(l,he,V)),typeof p.componentDidUpdate=="function"&&(n.flags|=4),typeof p.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof p.componentDidUpdate!="function"||M===t.memoizedProps&&ce===t.memoizedState||(n.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||M===t.memoizedProps&&ce===t.memoizedState||(n.flags|=1024),n.memoizedProps=l,n.memoizedState=he),p.props=l,p.state=he,p.context=V,l=xe):(typeof p.componentDidUpdate!="function"||M===t.memoizedProps&&ce===t.memoizedState||(n.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||M===t.memoizedProps&&ce===t.memoizedState||(n.flags|=1024),l=!1)}return p=l,_c(t,n),l=(n.flags&128)!==0,p||l?(p=n.stateNode,s=l&&typeof s.getDerivedStateFromError!="function"?null:p.render(),n.flags|=1,t!==null&&l?(n.child=rr(n,t.child,null,f),n.child=rr(n,null,s,f)):Xn(t,n,s,f),n.memoizedState=p.state,t=n.child):t=Ba(t,n,f),t}function X0(t,n,s,l){return er(),n.flags|=256,Xn(t,n,s,l),n.child}var kf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Xf(t){return{baseLanes:t,cachePool:Um()}}function Wf(t,n,s){return t=t!==null?t.childLanes&~s:0,n&&(t|=Ei),t}function W0(t,n,s){var l=n.pendingProps,f=!1,p=(n.flags&128)!==0,M;if((M=p)||(M=t!==null&&t.memoizedState===null?!1:(yn.current&2)!==0),M&&(f=!0,n.flags&=-129),M=(n.flags&32)!==0,n.flags&=-33,t===null){if(At){if(f?gs(n):_s(),(t=on)?(t=$g(t,Bi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:cs!==null?{id:ha,overflow:pa}:null,retryLane:536870912,hydrationErrors:null},s=bm(t),s.return=n,n.child=s,Vn=n,on=null)):t=null,t===null)throw fs(n);return Rd(t)?n.lanes=32:n.lanes=536870912,null}var C=l.children;return l=l.fallback,f?(_s(),f=n.mode,C=vc({mode:"hidden",children:C},f),l=$s(l,f,s,null),C.return=n,l.return=n,C.sibling=l,n.child=C,l=n.child,l.memoizedState=Xf(s),l.childLanes=Wf(t,M,s),n.memoizedState=kf,$o(null,l)):(gs(n),Yf(n,C))}var V=t.memoizedState;if(V!==null&&(C=V.dehydrated,C!==null)){if(p)n.flags&256?(gs(n),n.flags&=-257,n=qf(t,n,s)):n.memoizedState!==null?(_s(),n.child=t.child,n.flags|=128,n=null):(_s(),C=l.fallback,f=n.mode,l=vc({mode:"visible",children:l.children},f),C=$s(C,f,s,null),C.flags|=2,l.return=n,C.return=n,l.sibling=C,n.child=l,rr(n,t.child,null,s),l=n.child,l.memoizedState=Xf(s),l.childLanes=Wf(t,M,s),n.memoizedState=kf,n=$o(null,l));else if(gs(n),Rd(C)){if(M=C.nextSibling&&C.nextSibling.dataset,M)var oe=M.dgst;M=oe,l=Error(r(419)),l.stack="",l.digest=M,Go({value:l,source:null,stack:null}),n=qf(t,n,s)}else if(Cn||Ir(t,n,s,!1),M=(s&t.childLanes)!==0,Cn||M){if(M=en,M!==null&&(l=In(M,s),l!==0&&l!==V.retryLane))throw V.retryLane=l,Js(t,l),di(M,t,l),Gf;Ad(C)||Rc(),n=qf(t,n,s)}else Ad(C)?(n.flags|=192,n.child=t.child,n=null):(t=V.treeContext,on=Hi(C.nextSibling),Vn=n,At=!0,us=null,Bi=!1,t!==null&&Rm(n,t),n=Yf(n,l.children),n.flags|=4096);return n}return f?(_s(),C=l.fallback,f=n.mode,V=t.child,oe=V.sibling,l=Na(V,{mode:"hidden",children:l.children}),l.subtreeFlags=V.subtreeFlags&65011712,oe!==null?C=Na(oe,C):(C=$s(C,f,s,null),C.flags|=2),C.return=n,l.return=n,l.sibling=C,n.child=l,$o(null,l),l=n.child,C=t.child.memoizedState,C===null?C=Xf(s):(f=C.cachePool,f!==null?(V=An._currentValue,f=f.parent!==V?{parent:V,pool:V}:f):f=Um(),C={baseLanes:C.baseLanes|s,cachePool:f}),l.memoizedState=C,l.childLanes=Wf(t,M,s),n.memoizedState=kf,$o(t.child,l)):(gs(n),s=t.child,t=s.sibling,s=Na(s,{mode:"visible",children:l.children}),s.return=n,s.sibling=null,t!==null&&(M=n.deletions,M===null?(n.deletions=[t],n.flags|=16):M.push(t)),n.child=s,n.memoizedState=null,s)}function Yf(t,n){return n=vc({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function vc(t,n){return t=xi(22,t,null,n),t.lanes=0,t}function qf(t,n,s){return rr(n,t.child,null,s),t=Yf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function Y0(t,n,s){t.lanes|=n;var l=t.alternate;l!==null&&(l.lanes|=n),lf(t.return,n,s)}function jf(t,n,s,l,f,p){var M=t.memoizedState;M===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:l,tail:s,tailMode:f,treeForkCount:p}:(M.isBackwards=n,M.rendering=null,M.renderingStartTime=0,M.last=l,M.tail=s,M.tailMode=f,M.treeForkCount=p)}function q0(t,n,s){var l=n.pendingProps,f=l.revealOrder,p=l.tail;l=l.children;var M=yn.current,C=(M&2)!==0;if(C?(M=M&1|2,n.flags|=128):M&=1,be(yn,M),Xn(t,n,l,s),l=At?Ho:0,!C&&t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Y0(t,s,n);else if(t.tag===19)Y0(t,s,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(f){case"forwards":for(s=n.child,f=null;s!==null;)t=s.alternate,t!==null&&rc(t)===null&&(f=s),s=s.sibling;s=f,s===null?(f=n.child,n.child=null):(f=s.sibling,s.sibling=null),jf(n,!1,f,s,p,l);break;case"backwards":case"unstable_legacy-backwards":for(s=null,f=n.child,n.child=null;f!==null;){if(t=f.alternate,t!==null&&rc(t)===null){n.child=f;break}t=f.sibling,f.sibling=s,s=f,f=t}jf(n,!0,s,null,p,l);break;case"together":jf(n,!1,null,null,void 0,l);break;default:n.memoizedState=null}return n.child}function Ba(t,n,s){if(t!==null&&(n.dependencies=t.dependencies),Ss|=n.lanes,(s&n.childLanes)===0)if(t!==null){if(Ir(t,n,s,!1),(s&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,s=Na(t,t.pendingProps),n.child=s,s.return=n;t.sibling!==null;)t=t.sibling,s=s.sibling=Na(t,t.pendingProps),s.return=n;s.sibling=null}return n.child}function Zf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&Jl(t)))}function fM(t,n,s){switch(n.tag){case 3:ge(n,n.stateNode.containerInfo),ds(n,An,t.memoizedState.cache),er();break;case 27:case 5:st(n);break;case 4:ge(n,n.stateNode.containerInfo);break;case 10:ds(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Sf(n),null;break;case 13:var l=n.memoizedState;if(l!==null)return l.dehydrated!==null?(gs(n),n.flags|=128,null):(s&n.child.childLanes)!==0?W0(t,n,s):(gs(n),t=Ba(t,n,s),t!==null?t.sibling:null);gs(n);break;case 19:var f=(t.flags&128)!==0;if(l=(s&n.childLanes)!==0,l||(Ir(t,n,s,!1),l=(s&n.childLanes)!==0),f){if(l)return q0(t,n,s);n.flags|=128}if(f=n.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),be(yn,yn.current),l)break;return null;case 22:return n.lanes=0,z0(t,n,s,n.pendingProps);case 24:ds(n,An,t.memoizedState.cache)}return Ba(t,n,s)}function j0(t,n,s){if(t!==null)if(t.memoizedProps!==n.pendingProps)Cn=!0;else{if(!Zf(t,s)&&(n.flags&128)===0)return Cn=!1,fM(t,n,s);Cn=(t.flags&131072)!==0}else Cn=!1,At&&(n.flags&1048576)!==0&&Am(n,Ho,n.index);switch(n.lanes=0,n.tag){case 16:e:{var l=n.pendingProps;if(t=ar(n.elementType),n.type=t,typeof t=="function")$u(t)?(l=lr(t,l),n.tag=1,n=k0(null,n,t,l,s)):(n.tag=0,n=Vf(null,n,t,l,s));else{if(t!=null){var f=t.$$typeof;if(f===w){n.tag=11,n=I0(null,n,t,l,s);break e}else if(f===B){n.tag=14,n=F0(null,n,t,l,s);break e}}throw n=fe(t)||t,Error(r(306,n,""))}}return n;case 0:return Vf(t,n,n.type,n.pendingProps,s);case 1:return l=n.type,f=lr(l,n.pendingProps),k0(t,n,l,f,s);case 3:e:{if(ge(n,n.stateNode.containerInfo),t===null)throw Error(r(387));l=n.pendingProps;var p=n.memoizedState;f=p.element,mf(t,n),jo(n,l,null,s);var M=n.memoizedState;if(l=M.cache,ds(n,An,l),l!==p.cache&&cf(n,[An],s,!0),qo(),l=M.element,p.isDehydrated)if(p={element:l,isDehydrated:!1,cache:M.cache},n.updateQueue.baseState=p,n.memoizedState=p,n.flags&256){n=X0(t,n,l,s);break e}else if(l!==f){f=Pi(Error(r(424)),n),Go(f),n=X0(t,n,l,s);break e}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(on=Hi(t.firstChild),Vn=n,At=!0,us=null,Bi=!0,s=zm(n,null,l,s),n.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling}else{if(er(),l===f){n=Ba(t,n,s);break e}Xn(t,n,l,s)}n=n.child}return n;case 26:return _c(t,n),t===null?(s=s_(n.type,null,n.pendingProps,null))?n.memoizedState=s:At||(s=n.type,t=n.pendingProps,l=Oc(ae.current).createElement(s),l[pn]=n,l[gn]=t,Wn(l,s,t),_e(l),n.stateNode=l):n.memoizedState=s_(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return st(n),t===null&&At&&(l=n.stateNode=n_(n.type,n.pendingProps,ae.current),Vn=n,Bi=!0,f=on,Ts(n.type)?(Cd=f,on=Hi(l.firstChild)):on=f),Xn(t,n,n.pendingProps.children,s),_c(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&At&&((f=l=on)&&(l=GM(l,n.type,n.pendingProps,Bi),l!==null?(n.stateNode=l,Vn=n,on=Hi(l.firstChild),Bi=!1,f=!0):f=!1),f||fs(n)),st(n),f=n.type,p=n.pendingProps,M=t!==null?t.memoizedProps:null,l=p.children,Ed(f,p)?l=null:M!==null&&Ed(f,M)&&(n.flags|=32),n.memoizedState!==null&&(f=yf(t,n,nM,null,null,s),pl._currentValue=f),_c(t,n),Xn(t,n,l,s),n.child;case 6:return t===null&&At&&((t=s=on)&&(s=VM(s,n.pendingProps,Bi),s!==null?(n.stateNode=s,Vn=n,on=null,t=!0):t=!1),t||fs(n)),null;case 13:return W0(t,n,s);case 4:return ge(n,n.stateNode.containerInfo),l=n.pendingProps,t===null?n.child=rr(n,null,l,s):Xn(t,n,l,s),n.child;case 11:return I0(t,n,n.type,n.pendingProps,s);case 7:return Xn(t,n,n.pendingProps,s),n.child;case 8:return Xn(t,n,n.pendingProps.children,s),n.child;case 12:return Xn(t,n,n.pendingProps.children,s),n.child;case 10:return l=n.pendingProps,ds(n,n.type,l.value),Xn(t,n,l.children,s),n.child;case 9:return f=n.type._context,l=n.pendingProps.children,nr(n),f=kn(f),l=l(f),n.flags|=1,Xn(t,n,l,s),n.child;case 14:return F0(t,n,n.type,n.pendingProps,s);case 15:return B0(t,n,n.type,n.pendingProps,s);case 19:return q0(t,n,s);case 31:return uM(t,n,s);case 22:return z0(t,n,s,n.pendingProps);case 24:return nr(n),l=kn(An),t===null?(f=df(),f===null&&(f=en,p=uf(),f.pooledCache=p,p.refCount++,p!==null&&(f.pooledCacheLanes|=s),f=p),n.memoizedState={parent:l,cache:f},pf(n),ds(n,An,f)):((t.lanes&s)!==0&&(mf(t,n),jo(n,null,null,s),qo()),f=t.memoizedState,p=n.memoizedState,f.parent!==l?(f={parent:l,cache:l},n.memoizedState=f,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=f),ds(n,An,l)):(l=p.cache,ds(n,An,l),l!==f.cache&&cf(n,[An],s,!0))),Xn(t,n,n.pendingProps.children,s),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function za(t){t.flags|=4}function Kf(t,n,s,l,f){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(f&335544128)===f)if(t.stateNode.complete)t.flags|=8192;else if(Mg())t.flags|=8192;else throw sr=nc,hf}else t.flags&=-16777217}function Z0(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!u_(n))if(Mg())t.flags|=8192;else throw sr=nc,hf}function xc(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Ee():536870912,t.lanes|=n,jr|=n)}function el(t,n){if(!At)switch(t.tailMode){case"hidden":n=t.tail;for(var s=null;n!==null;)n.alternate!==null&&(s=n),n=n.sibling;s===null?t.tail=null:s.sibling=null;break;case"collapsed":s=t.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function ln(t){var n=t.alternate!==null&&t.alternate.child===t.child,s=0,l=0;if(n)for(var f=t.child;f!==null;)s|=f.lanes|f.childLanes,l|=f.subtreeFlags&65011712,l|=f.flags&65011712,f.return=t,f=f.sibling;else for(f=t.child;f!==null;)s|=f.lanes|f.childLanes,l|=f.subtreeFlags,l|=f.flags,f.return=t,f=f.sibling;return t.subtreeFlags|=l,t.childLanes=s,n}function dM(t,n,s){var l=n.pendingProps;switch(af(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ln(n),null;case 1:return ln(n),null;case 3:return s=n.stateNode,l=null,t!==null&&(l=t.memoizedState.cache),n.memoizedState.cache!==l&&(n.flags|=2048),Pa(An),qe(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(t===null||t.child===null)&&(Pr(n)?za(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,rf())),ln(n),null;case 26:var f=n.type,p=n.memoizedState;return t===null?(za(n),p!==null?(ln(n),Z0(n,p)):(ln(n),Kf(n,f,null,l,s))):p?p!==t.memoizedState?(za(n),ln(n),Z0(n,p)):(ln(n),n.flags&=-16777217):(t=t.memoizedProps,t!==l&&za(n),ln(n),Kf(n,f,t,l,s)),null;case 27:if(et(n),s=ae.current,f=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==l&&za(n);else{if(!l){if(n.stateNode===null)throw Error(r(166));return ln(n),null}t=Ae.current,Pr(n)?Cm(n):(t=n_(f,l,s),n.stateNode=t,za(n))}return ln(n),null;case 5:if(et(n),f=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==l&&za(n);else{if(!l){if(n.stateNode===null)throw Error(r(166));return ln(n),null}if(p=Ae.current,Pr(n))Cm(n);else{var M=Oc(ae.current);switch(p){case 1:p=M.createElementNS("http://www.w3.org/2000/svg",f);break;case 2:p=M.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;default:switch(f){case"svg":p=M.createElementNS("http://www.w3.org/2000/svg",f);break;case"math":p=M.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;case"script":p=M.createElement("div"),p.innerHTML="<script><\/script>",p=p.removeChild(p.firstChild);break;case"select":p=typeof l.is=="string"?M.createElement("select",{is:l.is}):M.createElement("select"),l.multiple?p.multiple=!0:l.size&&(p.size=l.size);break;default:p=typeof l.is=="string"?M.createElement(f,{is:l.is}):M.createElement(f)}}p[pn]=n,p[gn]=l;e:for(M=n.child;M!==null;){if(M.tag===5||M.tag===6)p.appendChild(M.stateNode);else if(M.tag!==4&&M.tag!==27&&M.child!==null){M.child.return=M,M=M.child;continue}if(M===n)break e;for(;M.sibling===null;){if(M.return===null||M.return===n)break e;M=M.return}M.sibling.return=M.return,M=M.sibling}n.stateNode=p;e:switch(Wn(p,f,l),f){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&za(n)}}return ln(n),Kf(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,s),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==l&&za(n);else{if(typeof l!="string"&&n.stateNode===null)throw Error(r(166));if(t=ae.current,Pr(n)){if(t=n.stateNode,s=n.memoizedProps,l=null,f=Vn,f!==null)switch(f.tag){case 27:case 5:l=f.memoizedProps}t[pn]=n,t=!!(t.nodeValue===s||l!==null&&l.suppressHydrationWarning===!0||Wg(t.nodeValue,s)),t||fs(n,!0)}else t=Oc(t).createTextNode(l),t[pn]=n,n.stateNode=t}return ln(n),null;case 31:if(s=n.memoizedState,t===null||t.memoizedState!==null){if(l=Pr(n),s!==null){if(t===null){if(!l)throw Error(r(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[pn]=n}else er(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;ln(n),t=!1}else s=rf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=s),t=!0;if(!t)return n.flags&256?(Mi(n),n):(Mi(n),null);if((n.flags&128)!==0)throw Error(r(558))}return ln(n),null;case 13:if(l=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(f=Pr(n),l!==null&&l.dehydrated!==null){if(t===null){if(!f)throw Error(r(318));if(f=n.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(r(317));f[pn]=n}else er(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;ln(n),f=!1}else f=rf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=f),f=!0;if(!f)return n.flags&256?(Mi(n),n):(Mi(n),null)}return Mi(n),(n.flags&128)!==0?(n.lanes=s,n):(s=l!==null,t=t!==null&&t.memoizedState!==null,s&&(l=n.child,f=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(f=l.alternate.memoizedState.cachePool.pool),p=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(p=l.memoizedState.cachePool.pool),p!==f&&(l.flags|=2048)),s!==t&&s&&(n.child.flags|=8192),xc(n,n.updateQueue),ln(n),null);case 4:return qe(),t===null&&vd(n.stateNode.containerInfo),ln(n),null;case 10:return Pa(n.type),ln(n),null;case 19:if(K(yn),l=n.memoizedState,l===null)return ln(n),null;if(f=(n.flags&128)!==0,p=l.rendering,p===null)if(f)el(l,!1);else{if(xn!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(p=rc(t),p!==null){for(n.flags|=128,el(l,!1),t=p.updateQueue,n.updateQueue=t,xc(n,t),n.subtreeFlags=0,t=s,s=n.child;s!==null;)Em(s,t),s=s.sibling;return be(yn,yn.current&1|2),At&&Ua(n,l.treeForkCount),n.child}t=t.sibling}l.tail!==null&&bt()>bc&&(n.flags|=128,f=!0,el(l,!1),n.lanes=4194304)}else{if(!f)if(t=rc(p),t!==null){if(n.flags|=128,f=!0,t=t.updateQueue,n.updateQueue=t,xc(n,t),el(l,!0),l.tail===null&&l.tailMode==="hidden"&&!p.alternate&&!At)return ln(n),null}else 2*bt()-l.renderingStartTime>bc&&s!==536870912&&(n.flags|=128,f=!0,el(l,!1),n.lanes=4194304);l.isBackwards?(p.sibling=n.child,n.child=p):(t=l.last,t!==null?t.sibling=p:n.child=p,l.last=p)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=bt(),t.sibling=null,s=yn.current,be(yn,f?s&1|2:s&1),At&&Ua(n,l.treeForkCount),t):(ln(n),null);case 22:case 23:return Mi(n),xf(),l=n.memoizedState!==null,t!==null?t.memoizedState!==null!==l&&(n.flags|=8192):l&&(n.flags|=8192),l?(s&536870912)!==0&&(n.flags&128)===0&&(ln(n),n.subtreeFlags&6&&(n.flags|=8192)):ln(n),s=n.updateQueue,s!==null&&xc(n,s.retryQueue),s=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),l=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(l=n.memoizedState.cachePool.pool),l!==s&&(n.flags|=2048),t!==null&&K(ir),null;case 24:return s=null,t!==null&&(s=t.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),Pa(An),ln(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function hM(t,n){switch(af(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Pa(An),qe(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return et(n),null;case 31:if(n.memoizedState!==null){if(Mi(n),n.alternate===null)throw Error(r(340));er()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(Mi(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));er()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return K(yn),null;case 4:return qe(),null;case 10:return Pa(n.type),null;case 22:case 23:return Mi(n),xf(),t!==null&&K(ir),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Pa(An),null;case 25:return null;default:return null}}function K0(t,n){switch(af(n),n.tag){case 3:Pa(An),qe();break;case 26:case 27:case 5:et(n);break;case 4:qe();break;case 31:n.memoizedState!==null&&Mi(n);break;case 13:Mi(n);break;case 19:K(yn);break;case 10:Pa(n.type);break;case 22:case 23:Mi(n),xf(),t!==null&&K(ir);break;case 24:Pa(An)}}function tl(t,n){try{var s=n.updateQueue,l=s!==null?s.lastEffect:null;if(l!==null){var f=l.next;s=f;do{if((s.tag&t)===t){l=void 0;var p=s.create,M=s.inst;l=p(),M.destroy=l}s=s.next}while(s!==f)}}catch(C){kt(n,n.return,C)}}function vs(t,n,s){try{var l=n.updateQueue,f=l!==null?l.lastEffect:null;if(f!==null){var p=f.next;l=p;do{if((l.tag&t)===t){var M=l.inst,C=M.destroy;if(C!==void 0){M.destroy=void 0,f=n;var V=s,oe=C;try{oe()}catch(xe){kt(f,V,xe)}}}l=l.next}while(l!==p)}}catch(xe){kt(n,n.return,xe)}}function Q0(t){var n=t.updateQueue;if(n!==null){var s=t.stateNode;try{Gm(n,s)}catch(l){kt(t,t.return,l)}}}function J0(t,n,s){s.props=lr(t.type,t.memoizedProps),s.state=t.memoizedState;try{s.componentWillUnmount()}catch(l){kt(t,n,l)}}function nl(t,n){try{var s=t.ref;if(s!==null){switch(t.tag){case 26:case 27:case 5:var l=t.stateNode;break;case 30:l=t.stateNode;break;default:l=t.stateNode}typeof s=="function"?t.refCleanup=s(l):s.current=l}}catch(f){kt(t,n,f)}}function ma(t,n){var s=t.ref,l=t.refCleanup;if(s!==null)if(typeof l=="function")try{l()}catch(f){kt(t,n,f)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(f){kt(t,n,f)}else s.current=null}function $0(t){var n=t.type,s=t.memoizedProps,l=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":s.autoFocus&&l.focus();break e;case"img":s.src?l.src=s.src:s.srcSet&&(l.srcset=s.srcSet)}}catch(f){kt(t,t.return,f)}}function Qf(t,n,s){try{var l=t.stateNode;PM(l,t.type,s,n),l[gn]=n}catch(f){kt(t,t.return,f)}}function eg(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Ts(t.type)||t.tag===4}function Jf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||eg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Ts(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function $f(t,n,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,n?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(t,n):(n=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,n.appendChild(t),s=s._reactRootContainer,s!=null||n.onclick!==null||(n.onclick=_i));else if(l!==4&&(l===27&&Ts(t.type)&&(s=t.stateNode,n=null),t=t.child,t!==null))for($f(t,n,s),t=t.sibling;t!==null;)$f(t,n,s),t=t.sibling}function Sc(t,n,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,n?s.insertBefore(t,n):s.appendChild(t);else if(l!==4&&(l===27&&Ts(t.type)&&(s=t.stateNode),t=t.child,t!==null))for(Sc(t,n,s),t=t.sibling;t!==null;)Sc(t,n,s),t=t.sibling}function tg(t){var n=t.stateNode,s=t.memoizedProps;try{for(var l=t.type,f=n.attributes;f.length;)n.removeAttributeNode(f[0]);Wn(n,l,s),n[pn]=t,n[gn]=s}catch(p){kt(t,t.return,p)}}var Ha=!1,wn=!1,ed=!1,ng=typeof WeakSet=="function"?WeakSet:Set,Fn=null;function pM(t,n){if(t=t.containerInfo,Md=Gc,t=pm(t),Yu(t)){if("selectionStart"in t)var s={start:t.selectionStart,end:t.selectionEnd};else e:{s=(s=t.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var f=l.anchorOffset,p=l.focusNode;l=l.focusOffset;try{s.nodeType,p.nodeType}catch{s=null;break e}var M=0,C=-1,V=-1,oe=0,xe=0,Te=t,ce=null;t:for(;;){for(var he;Te!==s||f!==0&&Te.nodeType!==3||(C=M+f),Te!==p||l!==0&&Te.nodeType!==3||(V=M+l),Te.nodeType===3&&(M+=Te.nodeValue.length),(he=Te.firstChild)!==null;)ce=Te,Te=he;for(;;){if(Te===t)break t;if(ce===s&&++oe===f&&(C=M),ce===p&&++xe===l&&(V=M),(he=Te.nextSibling)!==null)break;Te=ce,ce=Te.parentNode}Te=he}s=C===-1||V===-1?null:{start:C,end:V}}else s=null}s=s||{start:0,end:0}}else s=null;for(yd={focusedElem:t,selectionRange:s},Gc=!1,Fn=n;Fn!==null;)if(n=Fn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,Fn=t;else for(;Fn!==null;){switch(n=Fn,p=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(s=0;s<t.length;s++)f=t[s],f.ref.impl=f.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&p!==null){t=void 0,s=n,f=p.memoizedProps,p=p.memoizedState,l=s.stateNode;try{var Qe=lr(s.type,f);t=l.getSnapshotBeforeUpdate(Qe,p),l.__reactInternalSnapshotBeforeUpdate=t}catch(at){kt(s,s.return,at)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,s=t.nodeType,s===9)Td(t);else if(s===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Td(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,Fn=t;break}Fn=n.return}}function ig(t,n,s){var l=s.flags;switch(s.tag){case 0:case 11:case 15:Va(t,s),l&4&&tl(5,s);break;case 1:if(Va(t,s),l&4)if(t=s.stateNode,n===null)try{t.componentDidMount()}catch(M){kt(s,s.return,M)}else{var f=lr(s.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(f,n,t.__reactInternalSnapshotBeforeUpdate)}catch(M){kt(s,s.return,M)}}l&64&&Q0(s),l&512&&nl(s,s.return);break;case 3:if(Va(t,s),l&64&&(t=s.updateQueue,t!==null)){if(n=null,s.child!==null)switch(s.child.tag){case 27:case 5:n=s.child.stateNode;break;case 1:n=s.child.stateNode}try{Gm(t,n)}catch(M){kt(s,s.return,M)}}break;case 27:n===null&&l&4&&tg(s);case 26:case 5:Va(t,s),n===null&&l&4&&$0(s),l&512&&nl(s,s.return);break;case 12:Va(t,s);break;case 31:Va(t,s),l&4&&rg(t,s);break;case 13:Va(t,s),l&4&&og(t,s),l&64&&(t=s.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(s=EM.bind(null,s),kM(t,s))));break;case 22:if(l=s.memoizedState!==null||Ha,!l){n=n!==null&&n.memoizedState!==null||wn,f=Ha;var p=wn;Ha=l,(wn=n)&&!p?ka(t,s,(s.subtreeFlags&8772)!==0):Va(t,s),Ha=f,wn=p}break;case 30:break;default:Va(t,s)}}function ag(t){var n=t.alternate;n!==null&&(t.alternate=null,ag(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Zi(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var dn=null,li=!1;function Ga(t,n,s){for(s=s.child;s!==null;)sg(t,n,s),s=s.sibling}function sg(t,n,s){if(de&&typeof de.onCommitFiberUnmount=="function")try{de.onCommitFiberUnmount(pe,s)}catch{}switch(s.tag){case 26:wn||ma(s,n),Ga(t,n,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:wn||ma(s,n);var l=dn,f=li;Ts(s.type)&&(dn=s.stateNode,li=!1),Ga(t,n,s),fl(s.stateNode),dn=l,li=f;break;case 5:wn||ma(s,n);case 6:if(l=dn,f=li,dn=null,Ga(t,n,s),dn=l,li=f,dn!==null)if(li)try{(dn.nodeType===9?dn.body:dn.nodeName==="HTML"?dn.ownerDocument.body:dn).removeChild(s.stateNode)}catch(p){kt(s,n,p)}else try{dn.removeChild(s.stateNode)}catch(p){kt(s,n,p)}break;case 18:dn!==null&&(li?(t=dn,Qg(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,s.stateNode),no(t)):Qg(dn,s.stateNode));break;case 4:l=dn,f=li,dn=s.stateNode.containerInfo,li=!0,Ga(t,n,s),dn=l,li=f;break;case 0:case 11:case 14:case 15:vs(2,s,n),wn||vs(4,s,n),Ga(t,n,s);break;case 1:wn||(ma(s,n),l=s.stateNode,typeof l.componentWillUnmount=="function"&&J0(s,n,l)),Ga(t,n,s);break;case 21:Ga(t,n,s);break;case 22:wn=(l=wn)||s.memoizedState!==null,Ga(t,n,s),wn=l;break;default:Ga(t,n,s)}}function rg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{no(t)}catch(s){kt(n,n.return,s)}}}function og(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{no(t)}catch(s){kt(n,n.return,s)}}function mM(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new ng),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new ng),n;default:throw Error(r(435,t.tag))}}function Mc(t,n){var s=mM(t);n.forEach(function(l){if(!s.has(l)){s.add(l);var f=bM.bind(null,t,l);l.then(f,f)}})}function ci(t,n){var s=n.deletions;if(s!==null)for(var l=0;l<s.length;l++){var f=s[l],p=t,M=n,C=M;e:for(;C!==null;){switch(C.tag){case 27:if(Ts(C.type)){dn=C.stateNode,li=!1;break e}break;case 5:dn=C.stateNode,li=!1;break e;case 3:case 4:dn=C.stateNode.containerInfo,li=!0;break e}C=C.return}if(dn===null)throw Error(r(160));sg(p,M,f),dn=null,li=!1,p=f.alternate,p!==null&&(p.return=null),f.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)lg(n,t),n=n.sibling}var ea=null;function lg(t,n){var s=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:ci(n,t),ui(t),l&4&&(vs(3,t,t.return),tl(3,t),vs(5,t,t.return));break;case 1:ci(n,t),ui(t),l&512&&(wn||s===null||ma(s,s.return)),l&64&&Ha&&(t=t.updateQueue,t!==null&&(l=t.callbacks,l!==null&&(s=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=s===null?l:s.concat(l))));break;case 26:var f=ea;if(ci(n,t),ui(t),l&512&&(wn||s===null||ma(s,s.return)),l&4){var p=s!==null?s.memoizedState:null;if(l=t.memoizedState,s===null)if(l===null)if(t.stateNode===null){e:{l=t.type,s=t.memoizedProps,f=f.ownerDocument||f;t:switch(l){case"title":p=f.getElementsByTagName("title")[0],(!p||p[ji]||p[pn]||p.namespaceURI==="http://www.w3.org/2000/svg"||p.hasAttribute("itemprop"))&&(p=f.createElement(l),f.head.insertBefore(p,f.querySelector("head > title"))),Wn(p,l,s),p[pn]=t,_e(p),l=p;break e;case"link":var M=l_("link","href",f).get(l+(s.href||""));if(M){for(var C=0;C<M.length;C++)if(p=M[C],p.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&p.getAttribute("rel")===(s.rel==null?null:s.rel)&&p.getAttribute("title")===(s.title==null?null:s.title)&&p.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){M.splice(C,1);break t}}p=f.createElement(l),Wn(p,l,s),f.head.appendChild(p);break;case"meta":if(M=l_("meta","content",f).get(l+(s.content||""))){for(C=0;C<M.length;C++)if(p=M[C],p.getAttribute("content")===(s.content==null?null:""+s.content)&&p.getAttribute("name")===(s.name==null?null:s.name)&&p.getAttribute("property")===(s.property==null?null:s.property)&&p.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&p.getAttribute("charset")===(s.charSet==null?null:s.charSet)){M.splice(C,1);break t}}p=f.createElement(l),Wn(p,l,s),f.head.appendChild(p);break;default:throw Error(r(468,l))}p[pn]=t,_e(p),l=p}t.stateNode=l}else c_(f,t.type,t.stateNode);else t.stateNode=o_(f,l,t.memoizedProps);else p!==l?(p===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):p.count--,l===null?c_(f,t.type,t.stateNode):o_(f,l,t.memoizedProps)):l===null&&t.stateNode!==null&&Qf(t,t.memoizedProps,s.memoizedProps)}break;case 27:ci(n,t),ui(t),l&512&&(wn||s===null||ma(s,s.return)),s!==null&&l&4&&Qf(t,t.memoizedProps,s.memoizedProps);break;case 5:if(ci(n,t),ui(t),l&512&&(wn||s===null||ma(s,s.return)),t.flags&32){f=t.stateNode;try{_n(f,"")}catch(Qe){kt(t,t.return,Qe)}}l&4&&t.stateNode!=null&&(f=t.memoizedProps,Qf(t,f,s!==null?s.memoizedProps:f)),l&1024&&(ed=!0);break;case 6:if(ci(n,t),ui(t),l&4){if(t.stateNode===null)throw Error(r(162));l=t.memoizedProps,s=t.stateNode;try{s.nodeValue=l}catch(Qe){kt(t,t.return,Qe)}}break;case 3:if(Fc=null,f=ea,ea=Pc(n.containerInfo),ci(n,t),ea=f,ui(t),l&4&&s!==null&&s.memoizedState.isDehydrated)try{no(n.containerInfo)}catch(Qe){kt(t,t.return,Qe)}ed&&(ed=!1,cg(t));break;case 4:l=ea,ea=Pc(t.stateNode.containerInfo),ci(n,t),ui(t),ea=l;break;case 12:ci(n,t),ui(t);break;case 31:ci(n,t),ui(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Mc(t,l)));break;case 13:ci(n,t),ui(t),t.child.flags&8192&&t.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(Ec=bt()),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Mc(t,l)));break;case 22:f=t.memoizedState!==null;var V=s!==null&&s.memoizedState!==null,oe=Ha,xe=wn;if(Ha=oe||f,wn=xe||V,ci(n,t),wn=xe,Ha=oe,ui(t),l&8192)e:for(n=t.stateNode,n._visibility=f?n._visibility&-2:n._visibility|1,f&&(s===null||V||Ha||wn||cr(t)),s=null,n=t;;){if(n.tag===5||n.tag===26){if(s===null){V=s=n;try{if(p=V.stateNode,f)M=p.style,typeof M.setProperty=="function"?M.setProperty("display","none","important"):M.display="none";else{C=V.stateNode;var Te=V.memoizedProps.style,ce=Te!=null&&Te.hasOwnProperty("display")?Te.display:null;C.style.display=ce==null||typeof ce=="boolean"?"":(""+ce).trim()}}catch(Qe){kt(V,V.return,Qe)}}}else if(n.tag===6){if(s===null){V=n;try{V.stateNode.nodeValue=f?"":V.memoizedProps}catch(Qe){kt(V,V.return,Qe)}}}else if(n.tag===18){if(s===null){V=n;try{var he=V.stateNode;f?Jg(he,!0):Jg(V.stateNode,!1)}catch(Qe){kt(V,V.return,Qe)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;s===n&&(s=null),n=n.return}s===n&&(s=null),n.sibling.return=n.return,n=n.sibling}l&4&&(l=t.updateQueue,l!==null&&(s=l.retryQueue,s!==null&&(l.retryQueue=null,Mc(t,s))));break;case 19:ci(n,t),ui(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Mc(t,l)));break;case 30:break;case 21:break;default:ci(n,t),ui(t)}}function ui(t){var n=t.flags;if(n&2){try{for(var s,l=t.return;l!==null;){if(eg(l)){s=l;break}l=l.return}if(s==null)throw Error(r(160));switch(s.tag){case 27:var f=s.stateNode,p=Jf(t);Sc(t,p,f);break;case 5:var M=s.stateNode;s.flags&32&&(_n(M,""),s.flags&=-33);var C=Jf(t);Sc(t,C,M);break;case 3:case 4:var V=s.stateNode.containerInfo,oe=Jf(t);$f(t,oe,V);break;default:throw Error(r(161))}}catch(xe){kt(t,t.return,xe)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function cg(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;cg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function Va(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)ig(t,n.alternate,n),n=n.sibling}function cr(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:vs(4,n,n.return),cr(n);break;case 1:ma(n,n.return);var s=n.stateNode;typeof s.componentWillUnmount=="function"&&J0(n,n.return,s),cr(n);break;case 27:fl(n.stateNode);case 26:case 5:ma(n,n.return),cr(n);break;case 22:n.memoizedState===null&&cr(n);break;case 30:cr(n);break;default:cr(n)}t=t.sibling}}function ka(t,n,s){for(s=s&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var l=n.alternate,f=t,p=n,M=p.flags;switch(p.tag){case 0:case 11:case 15:ka(f,p,s),tl(4,p);break;case 1:if(ka(f,p,s),l=p,f=l.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(oe){kt(l,l.return,oe)}if(l=p,f=l.updateQueue,f!==null){var C=l.stateNode;try{var V=f.shared.hiddenCallbacks;if(V!==null)for(f.shared.hiddenCallbacks=null,f=0;f<V.length;f++)Hm(V[f],C)}catch(oe){kt(l,l.return,oe)}}s&&M&64&&Q0(p),nl(p,p.return);break;case 27:tg(p);case 26:case 5:ka(f,p,s),s&&l===null&&M&4&&$0(p),nl(p,p.return);break;case 12:ka(f,p,s);break;case 31:ka(f,p,s),s&&M&4&&rg(f,p);break;case 13:ka(f,p,s),s&&M&4&&og(f,p);break;case 22:p.memoizedState===null&&ka(f,p,s),nl(p,p.return);break;case 30:break;default:ka(f,p,s)}n=n.sibling}}function td(t,n){var s=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==s&&(t!=null&&t.refCount++,s!=null&&Vo(s))}function nd(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Vo(t))}function ta(t,n,s,l){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)ug(t,n,s,l),n=n.sibling}function ug(t,n,s,l){var f=n.flags;switch(n.tag){case 0:case 11:case 15:ta(t,n,s,l),f&2048&&tl(9,n);break;case 1:ta(t,n,s,l);break;case 3:ta(t,n,s,l),f&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Vo(t)));break;case 12:if(f&2048){ta(t,n,s,l),t=n.stateNode;try{var p=n.memoizedProps,M=p.id,C=p.onPostCommit;typeof C=="function"&&C(M,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(V){kt(n,n.return,V)}}else ta(t,n,s,l);break;case 31:ta(t,n,s,l);break;case 13:ta(t,n,s,l);break;case 23:break;case 22:p=n.stateNode,M=n.alternate,n.memoizedState!==null?p._visibility&2?ta(t,n,s,l):il(t,n):p._visibility&2?ta(t,n,s,l):(p._visibility|=2,Wr(t,n,s,l,(n.subtreeFlags&10256)!==0||!1)),f&2048&&td(M,n);break;case 24:ta(t,n,s,l),f&2048&&nd(n.alternate,n);break;default:ta(t,n,s,l)}}function Wr(t,n,s,l,f){for(f=f&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var p=t,M=n,C=s,V=l,oe=M.flags;switch(M.tag){case 0:case 11:case 15:Wr(p,M,C,V,f),tl(8,M);break;case 23:break;case 22:var xe=M.stateNode;M.memoizedState!==null?xe._visibility&2?Wr(p,M,C,V,f):il(p,M):(xe._visibility|=2,Wr(p,M,C,V,f)),f&&oe&2048&&td(M.alternate,M);break;case 24:Wr(p,M,C,V,f),f&&oe&2048&&nd(M.alternate,M);break;default:Wr(p,M,C,V,f)}n=n.sibling}}function il(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var s=t,l=n,f=l.flags;switch(l.tag){case 22:il(s,l),f&2048&&td(l.alternate,l);break;case 24:il(s,l),f&2048&&nd(l.alternate,l);break;default:il(s,l)}n=n.sibling}}var al=8192;function Yr(t,n,s){if(t.subtreeFlags&al)for(t=t.child;t!==null;)fg(t,n,s),t=t.sibling}function fg(t,n,s){switch(t.tag){case 26:Yr(t,n,s),t.flags&al&&t.memoizedState!==null&&ty(s,ea,t.memoizedState,t.memoizedProps);break;case 5:Yr(t,n,s);break;case 3:case 4:var l=ea;ea=Pc(t.stateNode.containerInfo),Yr(t,n,s),ea=l;break;case 22:t.memoizedState===null&&(l=t.alternate,l!==null&&l.memoizedState!==null?(l=al,al=16777216,Yr(t,n,s),al=l):Yr(t,n,s));break;default:Yr(t,n,s)}}function dg(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function sl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var s=0;s<n.length;s++){var l=n[s];Fn=l,pg(l,t)}dg(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)hg(t),t=t.sibling}function hg(t){switch(t.tag){case 0:case 11:case 15:sl(t),t.flags&2048&&vs(9,t,t.return);break;case 3:sl(t);break;case 12:sl(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,yc(t)):sl(t);break;default:sl(t)}}function yc(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var s=0;s<n.length;s++){var l=n[s];Fn=l,pg(l,t)}dg(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:vs(8,n,n.return),yc(n);break;case 22:s=n.stateNode,s._visibility&2&&(s._visibility&=-3,yc(n));break;default:yc(n)}t=t.sibling}}function pg(t,n){for(;Fn!==null;){var s=Fn;switch(s.tag){case 0:case 11:case 15:vs(8,s,n);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var l=s.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Vo(s.memoizedState.cache)}if(l=s.child,l!==null)l.return=s,Fn=l;else e:for(s=t;Fn!==null;){l=Fn;var f=l.sibling,p=l.return;if(ag(l),l===s){Fn=null;break e}if(f!==null){f.return=p,Fn=f;break e}Fn=p}}}var gM={getCacheForType:function(t){var n=kn(An),s=n.data.get(t);return s===void 0&&(s=t(),n.data.set(t,s)),s},cacheSignal:function(){return kn(An).controller.signal}},_M=typeof WeakMap=="function"?WeakMap:Map,zt=0,en=null,xt=null,yt=0,Vt=0,yi=null,xs=!1,qr=!1,id=!1,Xa=0,xn=0,Ss=0,ur=0,ad=0,Ei=0,jr=0,rl=null,fi=null,sd=!1,Ec=0,mg=0,bc=1/0,Tc=null,Ms=null,Un=0,ys=null,Zr=null,Wa=0,rd=0,od=null,gg=null,ol=0,ld=null;function bi(){return(zt&2)!==0&&yt!==0?yt&-yt:z.T!==null?pd():ss()}function _g(){if(Ei===0)if((yt&536870912)===0||At){var t=rt;rt<<=1,(rt&3932160)===0&&(rt=262144),Ei=t}else Ei=536870912;return t=Si.current,t!==null&&(t.flags|=32),Ei}function di(t,n,s){(t===en&&(Vt===2||Vt===9)||t.cancelPendingCommit!==null)&&(Kr(t,0),Es(t,yt,Ei,!1)),Ze(t,s),((zt&2)===0||t!==en)&&(t===en&&((zt&2)===0&&(ur|=s),xn===4&&Es(t,yt,Ei,!1)),ga(t))}function vg(t,n,s){if((zt&6)!==0)throw Error(r(327));var l=!s&&(n&127)===0&&(n&t.expiredLanes)===0||Oe(t,n),f=l?SM(t,n):ud(t,n,!0),p=l;do{if(f===0){qr&&!l&&Es(t,n,0,!1);break}else{if(s=t.current.alternate,p&&!vM(s)){f=ud(t,n,!1),p=!1;continue}if(f===2){if(p=n,t.errorRecoveryDisabledLanes&p)var M=0;else M=t.pendingLanes&-536870913,M=M!==0?M:M&536870912?536870912:0;if(M!==0){n=M;e:{var C=t;f=rl;var V=C.current.memoizedState.isDehydrated;if(V&&(Kr(C,M).flags|=256),M=ud(C,M,!1),M!==2){if(id&&!V){C.errorRecoveryDisabledLanes|=p,ur|=p,f=4;break e}p=fi,fi=f,p!==null&&(fi===null?fi=p:fi.push.apply(fi,p))}f=M}if(p=!1,f!==2)continue}}if(f===1){Kr(t,0),Es(t,n,0,!0);break}e:{switch(l=t,p=f,p){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Es(l,n,Ei,!xs);break e;case 2:fi=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(f=Ec+300-bt(),10<f)){if(Es(l,n,Ei,!xs),ve(l,0,!0)!==0)break e;Wa=n,l.timeoutHandle=Zg(xg.bind(null,l,s,fi,Tc,sd,n,Ei,ur,jr,xs,p,"Throttled",-0,0),f);break e}xg(l,s,fi,Tc,sd,n,Ei,ur,jr,xs,p,null,-0,0)}}break}while(!0);ga(t)}function xg(t,n,s,l,f,p,M,C,V,oe,xe,Te,ce,he){if(t.timeoutHandle=-1,Te=n.subtreeFlags,Te&8192||(Te&16785408)===16785408){Te={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:_i},fg(n,p,Te);var Qe=(p&62914560)===p?Ec-bt():(p&4194048)===p?mg-bt():0;if(Qe=ny(Te,Qe),Qe!==null){Wa=p,t.cancelPendingCommit=Qe(Rg.bind(null,t,n,p,s,l,f,M,C,V,xe,Te,null,ce,he)),Es(t,p,M,!oe);return}}Rg(t,n,p,s,l,f,M,C,V)}function vM(t){for(var n=t;;){var s=n.tag;if((s===0||s===11||s===15)&&n.flags&16384&&(s=n.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var l=0;l<s.length;l++){var f=s[l],p=f.getSnapshot;f=f.value;try{if(!vi(p(),f))return!1}catch{return!1}}if(s=n.child,n.subtreeFlags&16384&&s!==null)s.return=n,n=s;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Es(t,n,s,l){n&=~ad,n&=~ur,t.suspendedLanes|=n,t.pingedLanes&=~n,l&&(t.warmLanes|=n),l=t.expirationTimes;for(var f=n;0<f;){var p=31-Ge(f),M=1<<p;l[p]=-1,f&=~M}s!==0&&wt(t,s,n)}function Ac(){return(zt&6)===0?(ll(0),!1):!0}function cd(){if(xt!==null){if(Vt===0)var t=xt.return;else t=xt,Oa=tr=null,Tf(t),Hr=null,Xo=0,t=xt;for(;t!==null;)K0(t.alternate,t),t=t.return;xt=null}}function Kr(t,n){var s=t.timeoutHandle;s!==-1&&(t.timeoutHandle=-1,BM(s)),s=t.cancelPendingCommit,s!==null&&(t.cancelPendingCommit=null,s()),Wa=0,cd(),en=t,xt=s=Na(t.current,null),yt=n,Vt=0,yi=null,xs=!1,qr=Oe(t,n),id=!1,jr=Ei=ad=ur=Ss=xn=0,fi=rl=null,sd=!1,(n&8)!==0&&(n|=n&32);var l=t.entangledLanes;if(l!==0)for(t=t.entanglements,l&=n;0<l;){var f=31-Ge(l),p=1<<f;n|=t[f],l&=~p}return Xa=n,ql(),s}function Sg(t,n){dt=null,z.H=Jo,n===zr||n===tc?(n=Im(),Vt=3):n===hf?(n=Im(),Vt=4):Vt=n===Gf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,yi=n,xt===null&&(xn=1,mc(t,Pi(n,t.current)))}function Mg(){var t=Si.current;return t===null?!0:(yt&4194048)===yt?zi===null:(yt&62914560)===yt||(yt&536870912)!==0?t===zi:!1}function yg(){var t=z.H;return z.H=Jo,t===null?Jo:t}function Eg(){var t=z.A;return z.A=gM,t}function Rc(){xn=4,xs||(yt&4194048)!==yt&&Si.current!==null||(qr=!0),(Ss&134217727)===0&&(ur&134217727)===0||en===null||Es(en,yt,Ei,!1)}function ud(t,n,s){var l=zt;zt|=2;var f=yg(),p=Eg();(en!==t||yt!==n)&&(Tc=null,Kr(t,n)),n=!1;var M=xn;e:do try{if(Vt!==0&&xt!==null){var C=xt,V=yi;switch(Vt){case 8:cd(),M=6;break e;case 3:case 2:case 9:case 6:Si.current===null&&(n=!0);var oe=Vt;if(Vt=0,yi=null,Qr(t,C,V,oe),s&&qr){M=0;break e}break;default:oe=Vt,Vt=0,yi=null,Qr(t,C,V,oe)}}xM(),M=xn;break}catch(xe){Sg(t,xe)}while(!0);return n&&t.shellSuspendCounter++,Oa=tr=null,zt=l,z.H=f,z.A=p,xt===null&&(en=null,yt=0,ql()),M}function xM(){for(;xt!==null;)bg(xt)}function SM(t,n){var s=zt;zt|=2;var l=yg(),f=Eg();en!==t||yt!==n?(Tc=null,bc=bt()+500,Kr(t,n)):qr=Oe(t,n);e:do try{if(Vt!==0&&xt!==null){n=xt;var p=yi;t:switch(Vt){case 1:Vt=0,yi=null,Qr(t,n,p,1);break;case 2:case 9:if(Om(p)){Vt=0,yi=null,Tg(n);break}n=function(){Vt!==2&&Vt!==9||en!==t||(Vt=7),ga(t)},p.then(n,n);break e;case 3:Vt=7;break e;case 4:Vt=5;break e;case 7:Om(p)?(Vt=0,yi=null,Tg(n)):(Vt=0,yi=null,Qr(t,n,p,7));break;case 5:var M=null;switch(xt.tag){case 26:M=xt.memoizedState;case 5:case 27:var C=xt;if(M?u_(M):C.stateNode.complete){Vt=0,yi=null;var V=C.sibling;if(V!==null)xt=V;else{var oe=C.return;oe!==null?(xt=oe,Cc(oe)):xt=null}break t}}Vt=0,yi=null,Qr(t,n,p,5);break;case 6:Vt=0,yi=null,Qr(t,n,p,6);break;case 8:cd(),xn=6;break e;default:throw Error(r(462))}}MM();break}catch(xe){Sg(t,xe)}while(!0);return Oa=tr=null,z.H=l,z.A=f,zt=s,xt!==null?0:(en=null,yt=0,ql(),xn)}function MM(){for(;xt!==null&&!sn();)bg(xt)}function bg(t){var n=j0(t.alternate,t,Xa);t.memoizedProps=t.pendingProps,n===null?Cc(t):xt=n}function Tg(t){var n=t,s=n.alternate;switch(n.tag){case 15:case 0:n=V0(s,n,n.pendingProps,n.type,void 0,yt);break;case 11:n=V0(s,n,n.pendingProps,n.type.render,n.ref,yt);break;case 5:Tf(n);default:K0(s,n),n=xt=Em(n,Xa),n=j0(s,n,Xa)}t.memoizedProps=t.pendingProps,n===null?Cc(t):xt=n}function Qr(t,n,s,l){Oa=tr=null,Tf(n),Hr=null,Xo=0;var f=n.return;try{if(cM(t,f,n,s,yt)){xn=1,mc(t,Pi(s,t.current)),xt=null;return}}catch(p){if(f!==null)throw xt=f,p;xn=1,mc(t,Pi(s,t.current)),xt=null;return}n.flags&32768?(At||l===1?t=!0:qr||(yt&536870912)!==0?t=!1:(xs=t=!0,(l===2||l===9||l===3||l===6)&&(l=Si.current,l!==null&&l.tag===13&&(l.flags|=16384))),Ag(n,t)):Cc(n)}function Cc(t){var n=t;do{if((n.flags&32768)!==0){Ag(n,xs);return}t=n.return;var s=dM(n.alternate,n,Xa);if(s!==null){xt=s;return}if(n=n.sibling,n!==null){xt=n;return}xt=n=t}while(n!==null);xn===0&&(xn=5)}function Ag(t,n){do{var s=hM(t.alternate,t);if(s!==null){s.flags&=32767,xt=s;return}if(s=t.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!n&&(t=t.sibling,t!==null)){xt=t;return}xt=t=s}while(t!==null);xn=6,xt=null}function Rg(t,n,s,l,f,p,M,C,V){t.cancelPendingCommit=null;do wc();while(Un!==0);if((zt&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));if(p=n.lanes|n.childLanes,p|=Qu,nn(t,s,p,M,C,V),t===en&&(xt=en=null,yt=0),Zr=n,ys=t,Wa=s,rd=p,od=f,gg=l,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,TM(J,function(){return Ng(),null})):(t.callbackNode=null,t.callbackPriority=0),l=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||l){l=z.T,z.T=null,f=H.p,H.p=2,M=zt,zt|=4;try{pM(t,n,s)}finally{zt=M,H.p=f,z.T=l}}Un=1,Cg(),wg(),Dg()}}function Cg(){if(Un===1){Un=0;var t=ys,n=Zr,s=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||s){s=z.T,z.T=null;var l=H.p;H.p=2;var f=zt;zt|=4;try{lg(n,t);var p=yd,M=pm(t.containerInfo),C=p.focusedElem,V=p.selectionRange;if(M!==C&&C&&C.ownerDocument&&hm(C.ownerDocument.documentElement,C)){if(V!==null&&Yu(C)){var oe=V.start,xe=V.end;if(xe===void 0&&(xe=oe),"selectionStart"in C)C.selectionStart=oe,C.selectionEnd=Math.min(xe,C.value.length);else{var Te=C.ownerDocument||document,ce=Te&&Te.defaultView||window;if(ce.getSelection){var he=ce.getSelection(),Qe=C.textContent.length,at=Math.min(V.start,Qe),Kt=V.end===void 0?at:Math.min(V.end,Qe);!he.extend&&at>Kt&&(M=Kt,Kt=at,at=M);var ee=dm(C,at),W=dm(C,Kt);if(ee&&W&&(he.rangeCount!==1||he.anchorNode!==ee.node||he.anchorOffset!==ee.offset||he.focusNode!==W.node||he.focusOffset!==W.offset)){var se=Te.createRange();se.setStart(ee.node,ee.offset),he.removeAllRanges(),at>Kt?(he.addRange(se),he.extend(W.node,W.offset)):(se.setEnd(W.node,W.offset),he.addRange(se))}}}}for(Te=[],he=C;he=he.parentNode;)he.nodeType===1&&Te.push({element:he,left:he.scrollLeft,top:he.scrollTop});for(typeof C.focus=="function"&&C.focus(),C=0;C<Te.length;C++){var ye=Te[C];ye.element.scrollLeft=ye.left,ye.element.scrollTop=ye.top}}Gc=!!Md,yd=Md=null}finally{zt=f,H.p=l,z.T=s}}t.current=n,Un=2}}function wg(){if(Un===2){Un=0;var t=ys,n=Zr,s=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||s){s=z.T,z.T=null;var l=H.p;H.p=2;var f=zt;zt|=4;try{ig(t,n.alternate,n)}finally{zt=f,H.p=l,z.T=s}}Un=3}}function Dg(){if(Un===4||Un===3){Un=0,Z();var t=ys,n=Zr,s=Wa,l=gg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Un=5:(Un=0,Zr=ys=null,Lg(t,t.pendingLanes));var f=t.pendingLanes;if(f===0&&(Ms=null),Ra(s),n=n.stateNode,de&&typeof de.onCommitFiberRoot=="function")try{de.onCommitFiberRoot(pe,n,void 0,(n.current.flags&128)===128)}catch{}if(l!==null){n=z.T,f=H.p,H.p=2,z.T=null;try{for(var p=t.onRecoverableError,M=0;M<l.length;M++){var C=l[M];p(C.value,{componentStack:C.stack})}}finally{z.T=n,H.p=f}}(Wa&3)!==0&&wc(),ga(t),f=t.pendingLanes,(s&261930)!==0&&(f&42)!==0?t===ld?ol++:(ol=0,ld=t):ol=0,ll(0)}}function Lg(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Vo(n)))}function wc(){return Cg(),wg(),Dg(),Ng()}function Ng(){if(Un!==5)return!1;var t=ys,n=rd;rd=0;var s=Ra(Wa),l=z.T,f=H.p;try{H.p=32>s?32:s,z.T=null,s=od,od=null;var p=ys,M=Wa;if(Un=0,Zr=ys=null,Wa=0,(zt&6)!==0)throw Error(r(331));var C=zt;if(zt|=4,hg(p.current),ug(p,p.current,M,s),zt=C,ll(0,!1),de&&typeof de.onPostCommitFiberRoot=="function")try{de.onPostCommitFiberRoot(pe,p)}catch{}return!0}finally{H.p=f,z.T=l,Lg(t,n)}}function Ug(t,n,s){n=Pi(s,n),n=Hf(t.stateNode,n,2),t=ms(t,n,2),t!==null&&(Ze(t,2),ga(t))}function kt(t,n,s){if(t.tag===3)Ug(t,t,s);else for(;n!==null;){if(n.tag===3){Ug(n,t,s);break}else if(n.tag===1){var l=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Ms===null||!Ms.has(l))){t=Pi(s,t),s=O0(2),l=ms(n,s,2),l!==null&&(P0(s,l,n,t),Ze(l,2),ga(l));break}}n=n.return}}function fd(t,n,s){var l=t.pingCache;if(l===null){l=t.pingCache=new _M;var f=new Set;l.set(n,f)}else f=l.get(n),f===void 0&&(f=new Set,l.set(n,f));f.has(s)||(id=!0,f.add(s),t=yM.bind(null,t,n,s),n.then(t,t))}function yM(t,n,s){var l=t.pingCache;l!==null&&l.delete(n),t.pingedLanes|=t.suspendedLanes&s,t.warmLanes&=~s,en===t&&(yt&s)===s&&(xn===4||xn===3&&(yt&62914560)===yt&&300>bt()-Ec?(zt&2)===0&&Kr(t,0):ad|=s,jr===yt&&(jr=0)),ga(t)}function Og(t,n){n===0&&(n=Ee()),t=Js(t,n),t!==null&&(Ze(t,n),ga(t))}function EM(t){var n=t.memoizedState,s=0;n!==null&&(s=n.retryLane),Og(t,s)}function bM(t,n){var s=0;switch(t.tag){case 31:case 13:var l=t.stateNode,f=t.memoizedState;f!==null&&(s=f.retryLane);break;case 19:l=t.stateNode;break;case 22:l=t.stateNode._retryCache;break;default:throw Error(r(314))}l!==null&&l.delete(n),Og(t,s)}function TM(t,n){return tn(t,n)}var Dc=null,Jr=null,dd=!1,Lc=!1,hd=!1,bs=0;function ga(t){t!==Jr&&t.next===null&&(Jr===null?Dc=Jr=t:Jr=Jr.next=t),Lc=!0,dd||(dd=!0,RM())}function ll(t,n){if(!hd&&Lc){hd=!0;do for(var s=!1,l=Dc;l!==null;){if(t!==0){var f=l.pendingLanes;if(f===0)var p=0;else{var M=l.suspendedLanes,C=l.pingedLanes;p=(1<<31-Ge(42|t)+1)-1,p&=f&~(M&~C),p=p&201326741?p&201326741|1:p?p|2:0}p!==0&&(s=!0,Bg(l,p))}else p=yt,p=ve(l,l===en?p:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(p&3)===0||Oe(l,p)||(s=!0,Bg(l,p));l=l.next}while(s);hd=!1}}function AM(){Pg()}function Pg(){Lc=dd=!1;var t=0;bs!==0&&FM()&&(t=bs);for(var n=bt(),s=null,l=Dc;l!==null;){var f=l.next,p=Ig(l,n);p===0?(l.next=null,s===null?Dc=f:s.next=f,f===null&&(Jr=s)):(s=l,(t!==0||(p&3)!==0)&&(Lc=!0)),l=f}Un!==0&&Un!==5||ll(t),bs!==0&&(bs=0)}function Ig(t,n){for(var s=t.suspendedLanes,l=t.pingedLanes,f=t.expirationTimes,p=t.pendingLanes&-62914561;0<p;){var M=31-Ge(p),C=1<<M,V=f[M];V===-1?((C&s)===0||(C&l)!==0)&&(f[M]=Pe(C,n)):V<=n&&(t.expiredLanes|=C),p&=~C}if(n=en,s=yt,s=ve(t,t===n?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l=t.callbackNode,s===0||t===n&&(Vt===2||Vt===9)||t.cancelPendingCommit!==null)return l!==null&&l!==null&&Gt(l),t.callbackNode=null,t.callbackPriority=0;if((s&3)===0||Oe(t,s)){if(n=s&-s,n===t.callbackPriority)return n;switch(l!==null&&Gt(l),Ra(s)){case 2:case 8:s=b;break;case 32:s=J;break;case 268435456:s=le;break;default:s=J}return l=Fg.bind(null,t),s=tn(s,l),t.callbackPriority=n,t.callbackNode=s,n}return l!==null&&l!==null&&Gt(l),t.callbackPriority=2,t.callbackNode=null,2}function Fg(t,n){if(Un!==0&&Un!==5)return t.callbackNode=null,t.callbackPriority=0,null;var s=t.callbackNode;if(wc()&&t.callbackNode!==s)return null;var l=yt;return l=ve(t,t===en?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l===0?null:(vg(t,l,n),Ig(t,bt()),t.callbackNode!=null&&t.callbackNode===s?Fg.bind(null,t):null)}function Bg(t,n){if(wc())return null;vg(t,n,!0)}function RM(){zM(function(){(zt&6)!==0?tn(P,AM):Pg()})}function pd(){if(bs===0){var t=Fr;t===0&&(t=tt,tt<<=1,(tt&261888)===0&&(tt=256)),bs=t}return bs}function zg(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:wa(""+t)}function Hg(t,n){var s=n.ownerDocument.createElement("input");return s.name=n.name,s.value=n.value,t.id&&s.setAttribute("form",t.id),n.parentNode.insertBefore(s,n),t=new FormData(t),s.parentNode.removeChild(s),t}function CM(t,n,s,l,f){if(n==="submit"&&s&&s.stateNode===f){var p=zg((f[gn]||null).action),M=l.submitter;M&&(n=(n=M[gn]||null)?zg(n.formAction):M.getAttribute("formAction"),n!==null&&(p=n,M=null));var C=new Nn("action","action",null,l,f);t.push({event:C,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(bs!==0){var V=M?Hg(f,M):new FormData(f);Of(s,{pending:!0,data:V,method:f.method,action:p},null,V)}}else typeof p=="function"&&(C.preventDefault(),V=M?Hg(f,M):new FormData(f),Of(s,{pending:!0,data:V,method:f.method,action:p},p,V))},currentTarget:f}]})}}for(var md=0;md<Ku.length;md++){var gd=Ku[md],wM=gd.toLowerCase(),DM=gd[0].toUpperCase()+gd.slice(1);$i(wM,"on"+DM)}$i(_m,"onAnimationEnd"),$i(vm,"onAnimationIteration"),$i(xm,"onAnimationStart"),$i("dblclick","onDoubleClick"),$i("focusin","onFocus"),$i("focusout","onBlur"),$i(YS,"onTransitionRun"),$i(qS,"onTransitionStart"),$i(jS,"onTransitionCancel"),$i(Sm,"onTransitionEnd"),$("onMouseEnter",["mouseout","mouseover"]),$("onMouseLeave",["mouseout","mouseover"]),$("onPointerEnter",["pointerout","pointerover"]),$("onPointerLeave",["pointerout","pointerover"]),G("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),G("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),G("onBeforeInput",["compositionend","keypress","textInput","paste"]),G("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),G("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),G("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var cl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),LM=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(cl));function Gg(t,n){n=(n&4)!==0;for(var s=0;s<t.length;s++){var l=t[s],f=l.event;l=l.listeners;e:{var p=void 0;if(n)for(var M=l.length-1;0<=M;M--){var C=l[M],V=C.instance,oe=C.currentTarget;if(C=C.listener,V!==p&&f.isPropagationStopped())break e;p=C,f.currentTarget=oe;try{p(f)}catch(xe){Yl(xe)}f.currentTarget=null,p=V}else for(M=0;M<l.length;M++){if(C=l[M],V=C.instance,oe=C.currentTarget,C=C.listener,V!==p&&f.isPropagationStopped())break e;p=C,f.currentTarget=oe;try{p(f)}catch(xe){Yl(xe)}f.currentTarget=null,p=V}}}}function St(t,n){var s=n[ca];s===void 0&&(s=n[ca]=new Set);var l=t+"__bubble";s.has(l)||(Vg(n,t,2,!1),s.add(l))}function _d(t,n,s){var l=0;n&&(l|=4),Vg(s,t,l,n)}var Nc="_reactListening"+Math.random().toString(36).slice(2);function vd(t){if(!t[Nc]){t[Nc]=!0,Be.forEach(function(s){s!=="selectionchange"&&(LM.has(s)||_d(s,!1,t),_d(s,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Nc]||(n[Nc]=!0,_d("selectionchange",!1,n))}}function Vg(t,n,s,l){switch(__(n)){case 2:var f=sy;break;case 8:f=ry;break;default:f=Ud}s=f.bind(null,n,s,t),f=void 0,!Vl||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(f=!0),l?f!==void 0?t.addEventListener(n,s,{capture:!0,passive:f}):t.addEventListener(n,s,!0):f!==void 0?t.addEventListener(n,s,{passive:f}):t.addEventListener(n,s,!1)}function xd(t,n,s,l,f){var p=l;if((n&1)===0&&(n&2)===0&&l!==null)e:for(;;){if(l===null)return;var M=l.tag;if(M===3||M===4){var C=l.stateNode.containerInfo;if(C===f)break;if(M===4)for(M=l.return;M!==null;){var V=M.tag;if((V===3||V===4)&&M.stateNode.containerInfo===f)return;M=M.return}for(;C!==null;){if(M=wi(C),M===null)return;if(V=M.tag,V===5||V===6||V===26||V===27){l=p=M;continue e}C=C.parentNode}}l=l.return}Ys(function(){var oe=p,xe=Uo(s),Te=[];e:{var ce=Mm.get(t);if(ce!==void 0){var he=Nn,Qe=t;switch(t){case"keypress":if(js(s)===0)break e;case"keydown":case"keyup":he=bS;break;case"focusin":Qe="focus",he=Gu;break;case"focusout":Qe="blur",he=Gu;break;case"beforeblur":case"afterblur":he=Gu;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":he=Rr;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":he=dS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":he=RS;break;case _m:case vm:case xm:he=mS;break;case Sm:he=wS;break;case"scroll":case"scrollend":he=oi;break;case"wheel":he=LS;break;case"copy":case"cut":case"paste":he=_S;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":he=Jp;break;case"toggle":case"beforetoggle":he=US}var at=(n&4)!==0,Kt=!at&&(t==="scroll"||t==="scrollend"),ee=at?ce!==null?ce+"Capture":null:ce;at=[];for(var W=oe,se;W!==null;){var ye=W;if(se=ye.stateNode,ye=ye.tag,ye!==5&&ye!==26&&ye!==27||se===null||ee===null||(ye=qs(W,ee),ye!=null&&at.push(ul(W,ye,se))),Kt)break;W=W.return}0<at.length&&(ce=new he(ce,Qe,null,s,xe),Te.push({event:ce,listeners:at}))}}if((n&7)===0){e:{if(ce=t==="mouseover"||t==="pointerover",he=t==="mouseout"||t==="pointerout",ce&&s!==Ws&&(Qe=s.relatedTarget||s.fromElement)&&(wi(Qe)||Qe[zn]))break e;if((he||ce)&&(ce=xe.window===xe?xe:(ce=xe.ownerDocument)?ce.defaultView||ce.parentWindow:window,he?(Qe=s.relatedTarget||s.toElement,he=oe,Qe=Qe?wi(Qe):null,Qe!==null&&(Kt=c(Qe),at=Qe.tag,Qe!==Kt||at!==5&&at!==27&&at!==6)&&(Qe=null)):(he=null,Qe=oe),he!==Qe)){if(at=Rr,ye="onMouseLeave",ee="onMouseEnter",W="mouse",(t==="pointerout"||t==="pointerover")&&(at=Jp,ye="onPointerLeave",ee="onPointerEnter",W="pointer"),Kt=he==null?ce:Li(he),se=Qe==null?ce:Li(Qe),ce=new at(ye,W+"leave",he,s,xe),ce.target=Kt,ce.relatedTarget=se,ye=null,wi(xe)===oe&&(at=new at(ee,W+"enter",Qe,s,xe),at.target=se,at.relatedTarget=Kt,ye=at),Kt=ye,he&&Qe)t:{for(at=NM,ee=he,W=Qe,se=0,ye=ee;ye;ye=at(ye))se++;ye=0;for(var nt=W;nt;nt=at(nt))ye++;for(;0<se-ye;)ee=at(ee),se--;for(;0<ye-se;)W=at(W),ye--;for(;se--;){if(ee===W||W!==null&&ee===W.alternate){at=ee;break t}ee=at(ee),W=at(W)}at=null}else at=null;he!==null&&kg(Te,ce,he,at,!1),Qe!==null&&Kt!==null&&kg(Te,Kt,Qe,at,!0)}}e:{if(ce=oe?Li(oe):window,he=ce.nodeName&&ce.nodeName.toLowerCase(),he==="select"||he==="input"&&ce.type==="file")var Ut=rm;else if(am(ce))if(om)Ut=kS;else{Ut=GS;var $e=HS}else he=ce.nodeName,!he||he.toLowerCase()!=="input"||ce.type!=="checkbox"&&ce.type!=="radio"?oe&&Ft(oe.elementType)&&(Ut=rm):Ut=VS;if(Ut&&(Ut=Ut(t,oe))){sm(Te,Ut,s,xe);break e}$e&&$e(t,ce,oe),t==="focusout"&&oe&&ce.type==="number"&&oe.memoizedProps.value!=null&&mt(ce,"number",ce.value)}switch($e=oe?Li(oe):window,t){case"focusin":(am($e)||$e.contentEditable==="true")&&(wr=$e,qu=oe,zo=null);break;case"focusout":zo=qu=wr=null;break;case"mousedown":ju=!0;break;case"contextmenu":case"mouseup":case"dragend":ju=!1,mm(Te,s,xe);break;case"selectionchange":if(WS)break;case"keydown":case"keyup":mm(Te,s,xe)}var pt;if(ku)e:{switch(t){case"compositionstart":var Et="onCompositionStart";break e;case"compositionend":Et="onCompositionEnd";break e;case"compositionupdate":Et="onCompositionUpdate";break e}Et=void 0}else Cr?nm(t,s)&&(Et="onCompositionEnd"):t==="keydown"&&s.keyCode===229&&(Et="onCompositionStart");Et&&($p&&s.locale!=="ko"&&(Cr||Et!=="onCompositionStart"?Et==="onCompositionEnd"&&Cr&&(pt=kl()):(Ni=xe,Oo="value"in Ni?Ni.value:Ni.textContent,Cr=!0)),$e=Uc(oe,Et),0<$e.length&&(Et=new Qp(Et,t,null,s,xe),Te.push({event:Et,listeners:$e}),pt?Et.data=pt:(pt=im(s),pt!==null&&(Et.data=pt)))),(pt=PS?IS(t,s):FS(t,s))&&(Et=Uc(oe,"onBeforeInput"),0<Et.length&&($e=new Qp("onBeforeInput","beforeinput",null,s,xe),Te.push({event:$e,listeners:Et}),$e.data=pt)),CM(Te,t,oe,s,xe)}Gg(Te,n)})}function ul(t,n,s){return{instance:t,listener:n,currentTarget:s}}function Uc(t,n){for(var s=n+"Capture",l=[];t!==null;){var f=t,p=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||p===null||(f=qs(t,s),f!=null&&l.unshift(ul(t,f,p)),f=qs(t,n),f!=null&&l.push(ul(t,f,p))),t.tag===3)return l;t=t.return}return[]}function NM(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function kg(t,n,s,l,f){for(var p=n._reactName,M=[];s!==null&&s!==l;){var C=s,V=C.alternate,oe=C.stateNode;if(C=C.tag,V!==null&&V===l)break;C!==5&&C!==26&&C!==27||oe===null||(V=oe,f?(oe=qs(s,p),oe!=null&&M.unshift(ul(s,oe,V))):f||(oe=qs(s,p),oe!=null&&M.push(ul(s,oe,V)))),s=s.return}M.length!==0&&t.push({event:n,listeners:M})}var UM=/\r\n?/g,OM=/\u0000|\uFFFD/g;function Xg(t){return(typeof t=="string"?t:""+t).replace(UM,`
`).replace(OM,"")}function Wg(t,n){return n=Xg(n),Xg(t)===n}function Zt(t,n,s,l,f,p){switch(s){case"children":typeof l=="string"?n==="body"||n==="textarea"&&l===""||_n(t,l):(typeof l=="number"||typeof l=="bigint")&&n!=="body"&&_n(t,""+l);break;case"className":ke(t,"class",l);break;case"tabIndex":ke(t,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":ke(t,s,l);break;case"style":gi(t,l,p);break;case"data":if(n!=="object"){ke(t,"data",l);break}case"src":case"href":if(l===""&&(n!=="a"||s!=="href")){t.removeAttribute(s);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(s);break}l=wa(""+l),t.setAttribute(s,l);break;case"action":case"formAction":if(typeof l=="function"){t.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof p=="function"&&(s==="formAction"?(n!=="input"&&Zt(t,n,"name",f.name,f,null),Zt(t,n,"formEncType",f.formEncType,f,null),Zt(t,n,"formMethod",f.formMethod,f,null),Zt(t,n,"formTarget",f.formTarget,f,null)):(Zt(t,n,"encType",f.encType,f,null),Zt(t,n,"method",f.method,f,null),Zt(t,n,"target",f.target,f,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(s);break}l=wa(""+l),t.setAttribute(s,l);break;case"onClick":l!=null&&(t.onclick=_i);break;case"onScroll":l!=null&&St("scroll",t);break;case"onScrollEnd":l!=null&&St("scrollend",t);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(s=l.__html,s!=null){if(f.children!=null)throw Error(r(60));t.innerHTML=s}}break;case"multiple":t.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":t.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){t.removeAttribute("xlink:href");break}s=wa(""+l),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,""+l):t.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,""):t.removeAttribute(s);break;case"capture":case"download":l===!0?t.setAttribute(s,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,l):t.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?t.setAttribute(s,l):t.removeAttribute(s);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?t.removeAttribute(s):t.setAttribute(s,l);break;case"popover":St("beforetoggle",t),St("toggle",t),Re(t,"popover",l);break;case"xlinkActuate":ze(t,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":ze(t,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":ze(t,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":ze(t,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":ze(t,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":ze(t,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":ze(t,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":ze(t,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":ze(t,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Re(t,"is",l);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=Gn.get(s)||s,Re(t,s,l))}}function Sd(t,n,s,l,f,p){switch(s){case"style":gi(t,l,p);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(s=l.__html,s!=null){if(f.children!=null)throw Error(r(60));t.innerHTML=s}}break;case"children":typeof l=="string"?_n(t,l):(typeof l=="number"||typeof l=="bigint")&&_n(t,""+l);break;case"onScroll":l!=null&&St("scroll",t);break;case"onScrollEnd":l!=null&&St("scrollend",t);break;case"onClick":l!=null&&(t.onclick=_i);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!T.hasOwnProperty(s))e:{if(s[0]==="o"&&s[1]==="n"&&(f=s.endsWith("Capture"),n=s.slice(2,f?s.length-7:void 0),p=t[gn]||null,p=p!=null?p[s]:null,typeof p=="function"&&t.removeEventListener(n,p,f),typeof l=="function")){typeof p!="function"&&p!==null&&(s in t?t[s]=null:t.hasAttribute(s)&&t.removeAttribute(s)),t.addEventListener(n,l,f);break e}s in t?t[s]=l:l===!0?t.setAttribute(s,""):Re(t,s,l)}}}function Wn(t,n,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":St("error",t),St("load",t);var l=!1,f=!1,p;for(p in s)if(s.hasOwnProperty(p)){var M=s[p];if(M!=null)switch(p){case"src":l=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Zt(t,n,p,M,s,null)}}f&&Zt(t,n,"srcSet",s.srcSet,s,null),l&&Zt(t,n,"src",s.src,s,null);return;case"input":St("invalid",t);var C=p=M=f=null,V=null,oe=null;for(l in s)if(s.hasOwnProperty(l)){var xe=s[l];if(xe!=null)switch(l){case"name":f=xe;break;case"type":M=xe;break;case"checked":V=xe;break;case"defaultChecked":oe=xe;break;case"value":p=xe;break;case"defaultValue":C=xe;break;case"children":case"dangerouslySetInnerHTML":if(xe!=null)throw Error(r(137,n));break;default:Zt(t,n,l,xe,s,null)}}Tn(t,p,C,V,oe,M,f,!1);return;case"select":St("invalid",t),l=M=p=null;for(f in s)if(s.hasOwnProperty(f)&&(C=s[f],C!=null))switch(f){case"value":p=C;break;case"defaultValue":M=C;break;case"multiple":l=C;default:Zt(t,n,f,C,s,null)}n=p,s=M,t.multiple=!!l,n!=null?mn(t,!!l,n,!1):s!=null&&mn(t,!!l,s,!0);return;case"textarea":St("invalid",t),p=f=l=null;for(M in s)if(s.hasOwnProperty(M)&&(C=s[M],C!=null))switch(M){case"value":l=C;break;case"defaultValue":f=C;break;case"children":p=C;break;case"dangerouslySetInnerHTML":if(C!=null)throw Error(r(91));break;default:Zt(t,n,M,C,s,null)}Hn(t,l,f,p);return;case"option":for(V in s)if(s.hasOwnProperty(V)&&(l=s[V],l!=null))switch(V){case"selected":t.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Zt(t,n,V,l,s,null)}return;case"dialog":St("beforetoggle",t),St("toggle",t),St("cancel",t),St("close",t);break;case"iframe":case"object":St("load",t);break;case"video":case"audio":for(l=0;l<cl.length;l++)St(cl[l],t);break;case"image":St("error",t),St("load",t);break;case"details":St("toggle",t);break;case"embed":case"source":case"link":St("error",t),St("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(oe in s)if(s.hasOwnProperty(oe)&&(l=s[oe],l!=null))switch(oe){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Zt(t,n,oe,l,s,null)}return;default:if(Ft(n)){for(xe in s)s.hasOwnProperty(xe)&&(l=s[xe],l!==void 0&&Sd(t,n,xe,l,s,void 0));return}}for(C in s)s.hasOwnProperty(C)&&(l=s[C],l!=null&&Zt(t,n,C,l,s,null))}function PM(t,n,s,l){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,p=null,M=null,C=null,V=null,oe=null,xe=null;for(he in s){var Te=s[he];if(s.hasOwnProperty(he)&&Te!=null)switch(he){case"checked":break;case"value":break;case"defaultValue":V=Te;default:l.hasOwnProperty(he)||Zt(t,n,he,null,l,Te)}}for(var ce in l){var he=l[ce];if(Te=s[ce],l.hasOwnProperty(ce)&&(he!=null||Te!=null))switch(ce){case"type":p=he;break;case"name":f=he;break;case"checked":oe=he;break;case"defaultChecked":xe=he;break;case"value":M=he;break;case"defaultValue":C=he;break;case"children":case"dangerouslySetInnerHTML":if(he!=null)throw Error(r(137,n));break;default:he!==Te&&Zt(t,n,ce,he,l,Te)}}We(t,M,C,V,oe,xe,p,f);return;case"select":he=M=C=ce=null;for(p in s)if(V=s[p],s.hasOwnProperty(p)&&V!=null)switch(p){case"value":break;case"multiple":he=V;default:l.hasOwnProperty(p)||Zt(t,n,p,null,l,V)}for(f in l)if(p=l[f],V=s[f],l.hasOwnProperty(f)&&(p!=null||V!=null))switch(f){case"value":ce=p;break;case"defaultValue":C=p;break;case"multiple":M=p;default:p!==V&&Zt(t,n,f,p,l,V)}n=C,s=M,l=he,ce!=null?mn(t,!!s,ce,!1):!!l!=!!s&&(n!=null?mn(t,!!s,n,!0):mn(t,!!s,s?[]:"",!1));return;case"textarea":he=ce=null;for(C in s)if(f=s[C],s.hasOwnProperty(C)&&f!=null&&!l.hasOwnProperty(C))switch(C){case"value":break;case"children":break;default:Zt(t,n,C,null,l,f)}for(M in l)if(f=l[M],p=s[M],l.hasOwnProperty(M)&&(f!=null||p!=null))switch(M){case"value":ce=f;break;case"defaultValue":he=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(r(91));break;default:f!==p&&Zt(t,n,M,f,l,p)}Zn(t,ce,he);return;case"option":for(var Qe in s)if(ce=s[Qe],s.hasOwnProperty(Qe)&&ce!=null&&!l.hasOwnProperty(Qe))switch(Qe){case"selected":t.selected=!1;break;default:Zt(t,n,Qe,null,l,ce)}for(V in l)if(ce=l[V],he=s[V],l.hasOwnProperty(V)&&ce!==he&&(ce!=null||he!=null))switch(V){case"selected":t.selected=ce&&typeof ce!="function"&&typeof ce!="symbol";break;default:Zt(t,n,V,ce,l,he)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var at in s)ce=s[at],s.hasOwnProperty(at)&&ce!=null&&!l.hasOwnProperty(at)&&Zt(t,n,at,null,l,ce);for(oe in l)if(ce=l[oe],he=s[oe],l.hasOwnProperty(oe)&&ce!==he&&(ce!=null||he!=null))switch(oe){case"children":case"dangerouslySetInnerHTML":if(ce!=null)throw Error(r(137,n));break;default:Zt(t,n,oe,ce,l,he)}return;default:if(Ft(n)){for(var Kt in s)ce=s[Kt],s.hasOwnProperty(Kt)&&ce!==void 0&&!l.hasOwnProperty(Kt)&&Sd(t,n,Kt,void 0,l,ce);for(xe in l)ce=l[xe],he=s[xe],!l.hasOwnProperty(xe)||ce===he||ce===void 0&&he===void 0||Sd(t,n,xe,ce,l,he);return}}for(var ee in s)ce=s[ee],s.hasOwnProperty(ee)&&ce!=null&&!l.hasOwnProperty(ee)&&Zt(t,n,ee,null,l,ce);for(Te in l)ce=l[Te],he=s[Te],!l.hasOwnProperty(Te)||ce===he||ce==null&&he==null||Zt(t,n,Te,ce,l,he)}function Yg(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function IM(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,s=performance.getEntriesByType("resource"),l=0;l<s.length;l++){var f=s[l],p=f.transferSize,M=f.initiatorType,C=f.duration;if(p&&C&&Yg(M)){for(M=0,C=f.responseEnd,l+=1;l<s.length;l++){var V=s[l],oe=V.startTime;if(oe>C)break;var xe=V.transferSize,Te=V.initiatorType;xe&&Yg(Te)&&(V=V.responseEnd,M+=xe*(V<C?1:(C-oe)/(V-oe)))}if(--l,n+=8*(p+M)/(f.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Md=null,yd=null;function Oc(t){return t.nodeType===9?t:t.ownerDocument}function qg(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function jg(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Ed(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var bd=null;function FM(){var t=window.event;return t&&t.type==="popstate"?t===bd?!1:(bd=t,!0):(bd=null,!1)}var Zg=typeof setTimeout=="function"?setTimeout:void 0,BM=typeof clearTimeout=="function"?clearTimeout:void 0,Kg=typeof Promise=="function"?Promise:void 0,zM=typeof queueMicrotask=="function"?queueMicrotask:typeof Kg<"u"?function(t){return Kg.resolve(null).then(t).catch(HM)}:Zg;function HM(t){setTimeout(function(){throw t})}function Ts(t){return t==="head"}function Qg(t,n){var s=n,l=0;do{var f=s.nextSibling;if(t.removeChild(s),f&&f.nodeType===8)if(s=f.data,s==="/$"||s==="/&"){if(l===0){t.removeChild(f),no(n);return}l--}else if(s==="$"||s==="$?"||s==="$~"||s==="$!"||s==="&")l++;else if(s==="html")fl(t.ownerDocument.documentElement);else if(s==="head"){s=t.ownerDocument.head,fl(s);for(var p=s.firstChild;p;){var M=p.nextSibling,C=p.nodeName;p[ji]||C==="SCRIPT"||C==="STYLE"||C==="LINK"&&p.rel.toLowerCase()==="stylesheet"||s.removeChild(p),p=M}}else s==="body"&&fl(t.ownerDocument.body);s=f}while(s);no(n)}function Jg(t,n){var s=t;t=0;do{var l=s.nextSibling;if(s.nodeType===1?n?(s._stashedDisplay=s.style.display,s.style.display="none"):(s.style.display=s._stashedDisplay||"",s.getAttribute("style")===""&&s.removeAttribute("style")):s.nodeType===3&&(n?(s._stashedText=s.nodeValue,s.nodeValue=""):s.nodeValue=s._stashedText||""),l&&l.nodeType===8)if(s=l.data,s==="/$"){if(t===0)break;t--}else s!=="$"&&s!=="$?"&&s!=="$~"&&s!=="$!"||t++;s=l}while(s)}function Td(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var s=n;switch(n=n.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":Td(s),Zi(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}t.removeChild(s)}}function GM(t,n,s,l){for(;t.nodeType===1;){var f=s;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!l&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(l){if(!t[ji])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(p=t.getAttribute("rel"),p==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(p!==f.rel||t.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||t.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||t.getAttribute("title")!==(f.title==null?null:f.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(p=t.getAttribute("src"),(p!==(f.src==null?null:f.src)||t.getAttribute("type")!==(f.type==null?null:f.type)||t.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&p&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var p=f.name==null?null:""+f.name;if(f.type==="hidden"&&t.getAttribute("name")===p)return t}else return t;if(t=Hi(t.nextSibling),t===null)break}return null}function VM(t,n,s){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!s||(t=Hi(t.nextSibling),t===null))return null;return t}function $g(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=Hi(t.nextSibling),t===null))return null;return t}function Ad(t){return t.data==="$?"||t.data==="$~"}function Rd(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function kM(t,n){var s=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||s.readyState!=="loading")n();else{var l=function(){n(),s.removeEventListener("DOMContentLoaded",l)};s.addEventListener("DOMContentLoaded",l),t._reactRetry=l}}function Hi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var Cd=null;function e_(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var s=t.data;if(s==="/$"||s==="/&"){if(n===0)return Hi(t.nextSibling);n--}else s!=="$"&&s!=="$!"&&s!=="$?"&&s!=="$~"&&s!=="&"||n++}t=t.nextSibling}return null}function t_(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var s=t.data;if(s==="$"||s==="$!"||s==="$?"||s==="$~"||s==="&"){if(n===0)return t;n--}else s!=="/$"&&s!=="/&"||n++}t=t.previousSibling}return null}function n_(t,n,s){switch(n=Oc(s),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function fl(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Zi(t)}var Gi=new Map,i_=new Set;function Pc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Ya=H.d;H.d={f:XM,r:WM,D:YM,C:qM,L:jM,m:ZM,X:QM,S:KM,M:JM};function XM(){var t=Ya.f(),n=Ac();return t||n}function WM(t){var n=Di(t);n!==null&&n.tag===5&&n.type==="form"?S0(n):Ya.r(t)}var $r=typeof document>"u"?null:document;function a_(t,n,s){var l=$r;if(l&&typeof n=="string"&&n){var f=Ct(n);f='link[rel="'+t+'"][href="'+f+'"]',typeof s=="string"&&(f+='[crossorigin="'+s+'"]'),i_.has(f)||(i_.add(f),t={rel:t,crossOrigin:s,href:n},l.querySelector(f)===null&&(n=l.createElement("link"),Wn(n,"link",t),_e(n),l.head.appendChild(n)))}}function YM(t){Ya.D(t),a_("dns-prefetch",t,null)}function qM(t,n){Ya.C(t,n),a_("preconnect",t,n)}function jM(t,n,s){Ya.L(t,n,s);var l=$r;if(l&&t&&n){var f='link[rel="preload"][as="'+Ct(n)+'"]';n==="image"&&s&&s.imageSrcSet?(f+='[imagesrcset="'+Ct(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(f+='[imagesizes="'+Ct(s.imageSizes)+'"]')):f+='[href="'+Ct(t)+'"]';var p=f;switch(n){case"style":p=eo(t);break;case"script":p=to(t)}Gi.has(p)||(t=v({rel:"preload",href:n==="image"&&s&&s.imageSrcSet?void 0:t,as:n},s),Gi.set(p,t),l.querySelector(f)!==null||n==="style"&&l.querySelector(dl(p))||n==="script"&&l.querySelector(hl(p))||(n=l.createElement("link"),Wn(n,"link",t),_e(n),l.head.appendChild(n)))}}function ZM(t,n){Ya.m(t,n);var s=$r;if(s&&t){var l=n&&typeof n.as=="string"?n.as:"script",f='link[rel="modulepreload"][as="'+Ct(l)+'"][href="'+Ct(t)+'"]',p=f;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":p=to(t)}if(!Gi.has(p)&&(t=v({rel:"modulepreload",href:t},n),Gi.set(p,t),s.querySelector(f)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(hl(p)))return}l=s.createElement("link"),Wn(l,"link",t),_e(l),s.head.appendChild(l)}}}function KM(t,n,s){Ya.S(t,n,s);var l=$r;if(l&&t){var f=Ki(l).hoistableStyles,p=eo(t);n=n||"default";var M=f.get(p);if(!M){var C={loading:0,preload:null};if(M=l.querySelector(dl(p)))C.loading=5;else{t=v({rel:"stylesheet",href:t,"data-precedence":n},s),(s=Gi.get(p))&&wd(t,s);var V=M=l.createElement("link");_e(V),Wn(V,"link",t),V._p=new Promise(function(oe,xe){V.onload=oe,V.onerror=xe}),V.addEventListener("load",function(){C.loading|=1}),V.addEventListener("error",function(){C.loading|=2}),C.loading|=4,Ic(M,n,l)}M={type:"stylesheet",instance:M,count:1,state:C},f.set(p,M)}}}function QM(t,n){Ya.X(t,n);var s=$r;if(s&&t){var l=Ki(s).hoistableScripts,f=to(t),p=l.get(f);p||(p=s.querySelector(hl(f)),p||(t=v({src:t,async:!0},n),(n=Gi.get(f))&&Dd(t,n),p=s.createElement("script"),_e(p),Wn(p,"link",t),s.head.appendChild(p)),p={type:"script",instance:p,count:1,state:null},l.set(f,p))}}function JM(t,n){Ya.M(t,n);var s=$r;if(s&&t){var l=Ki(s).hoistableScripts,f=to(t),p=l.get(f);p||(p=s.querySelector(hl(f)),p||(t=v({src:t,async:!0,type:"module"},n),(n=Gi.get(f))&&Dd(t,n),p=s.createElement("script"),_e(p),Wn(p,"link",t),s.head.appendChild(p)),p={type:"script",instance:p,count:1,state:null},l.set(f,p))}}function s_(t,n,s,l){var f=(f=ae.current)?Pc(f):null;if(!f)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(n=eo(s.href),s=Ki(f).hoistableStyles,l=s.get(n),l||(l={type:"style",instance:null,count:0,state:null},s.set(n,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){t=eo(s.href);var p=Ki(f).hoistableStyles,M=p.get(t);if(M||(f=f.ownerDocument||f,M={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},p.set(t,M),(p=f.querySelector(dl(t)))&&!p._p&&(M.instance=p,M.state.loading=5),Gi.has(t)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},Gi.set(t,s),p||$M(f,t,s,M.state))),n&&l===null)throw Error(r(528,""));return M}if(n&&l!==null)throw Error(r(529,""));return null;case"script":return n=s.async,s=s.src,typeof s=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=to(s),s=Ki(f).hoistableScripts,l=s.get(n),l||(l={type:"script",instance:null,count:0,state:null},s.set(n,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function eo(t){return'href="'+Ct(t)+'"'}function dl(t){return'link[rel="stylesheet"]['+t+"]"}function r_(t){return v({},t,{"data-precedence":t.precedence,precedence:null})}function $M(t,n,s,l){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?l.loading=1:(n=t.createElement("link"),l.preload=n,n.addEventListener("load",function(){return l.loading|=1}),n.addEventListener("error",function(){return l.loading|=2}),Wn(n,"link",s),_e(n),t.head.appendChild(n))}function to(t){return'[src="'+Ct(t)+'"]'}function hl(t){return"script[async]"+t}function o_(t,n,s){if(n.count++,n.instance===null)switch(n.type){case"style":var l=t.querySelector('style[data-href~="'+Ct(s.href)+'"]');if(l)return n.instance=l,_e(l),l;var f=v({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return l=(t.ownerDocument||t).createElement("style"),_e(l),Wn(l,"style",f),Ic(l,s.precedence,t),n.instance=l;case"stylesheet":f=eo(s.href);var p=t.querySelector(dl(f));if(p)return n.state.loading|=4,n.instance=p,_e(p),p;l=r_(s),(f=Gi.get(f))&&wd(l,f),p=(t.ownerDocument||t).createElement("link"),_e(p);var M=p;return M._p=new Promise(function(C,V){M.onload=C,M.onerror=V}),Wn(p,"link",l),n.state.loading|=4,Ic(p,s.precedence,t),n.instance=p;case"script":return p=to(s.src),(f=t.querySelector(hl(p)))?(n.instance=f,_e(f),f):(l=s,(f=Gi.get(p))&&(l=v({},s),Dd(l,f)),t=t.ownerDocument||t,f=t.createElement("script"),_e(f),Wn(f,"link",l),t.head.appendChild(f),n.instance=f);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(l=n.instance,n.state.loading|=4,Ic(l,s.precedence,t));return n.instance}function Ic(t,n,s){for(var l=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=l.length?l[l.length-1]:null,p=f,M=0;M<l.length;M++){var C=l[M];if(C.dataset.precedence===n)p=C;else if(p!==f)break}p?p.parentNode.insertBefore(t,p.nextSibling):(n=s.nodeType===9?s.head:s,n.insertBefore(t,n.firstChild))}function wd(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Dd(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Fc=null;function l_(t,n,s){if(Fc===null){var l=new Map,f=Fc=new Map;f.set(s,l)}else f=Fc,l=f.get(s),l||(l=new Map,f.set(s,l));if(l.has(t))return l;for(l.set(t,null),s=s.getElementsByTagName(t),f=0;f<s.length;f++){var p=s[f];if(!(p[ji]||p[pn]||t==="link"&&p.getAttribute("rel")==="stylesheet")&&p.namespaceURI!=="http://www.w3.org/2000/svg"){var M=p.getAttribute(n)||"";M=t+M;var C=l.get(M);C?C.push(p):l.set(M,[p])}}return l}function c_(t,n,s){t=t.ownerDocument||t,t.head.insertBefore(s,n==="title"?t.querySelector("head > title"):null)}function ey(t,n,s){if(s===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function u_(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function ty(t,n,s,l){if(s.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(s.state.loading&4)===0){if(s.instance===null){var f=eo(l.href),p=n.querySelector(dl(f));if(p){n=p._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=Bc.bind(t),n.then(t,t)),s.state.loading|=4,s.instance=p,_e(p);return}p=n.ownerDocument||n,l=r_(l),(f=Gi.get(f))&&wd(l,f),p=p.createElement("link"),_e(p);var M=p;M._p=new Promise(function(C,V){M.onload=C,M.onerror=V}),Wn(p,"link",l),s.instance=p}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(s,n),(n=s.state.preload)&&(s.state.loading&3)===0&&(t.count++,s=Bc.bind(t),n.addEventListener("load",s),n.addEventListener("error",s))}}var Ld=0;function ny(t,n){return t.stylesheets&&t.count===0&&Hc(t,t.stylesheets),0<t.count||0<t.imgCount?function(s){var l=setTimeout(function(){if(t.stylesheets&&Hc(t,t.stylesheets),t.unsuspend){var p=t.unsuspend;t.unsuspend=null,p()}},6e4+n);0<t.imgBytes&&Ld===0&&(Ld=62500*IM());var f=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Hc(t,t.stylesheets),t.unsuspend)){var p=t.unsuspend;t.unsuspend=null,p()}},(t.imgBytes>Ld?50:800)+n);return t.unsuspend=s,function(){t.unsuspend=null,clearTimeout(l),clearTimeout(f)}}:null}function Bc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Hc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var zc=null;function Hc(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,zc=new Map,n.forEach(iy,t),zc=null,Bc.call(t))}function iy(t,n){if(!(n.state.loading&4)){var s=zc.get(t);if(s)var l=s.get(null);else{s=new Map,zc.set(t,s);for(var f=t.querySelectorAll("link[data-precedence],style[data-precedence]"),p=0;p<f.length;p++){var M=f[p];(M.nodeName==="LINK"||M.getAttribute("media")!=="not all")&&(s.set(M.dataset.precedence,M),l=M)}l&&s.set(null,l)}f=n.instance,M=f.getAttribute("data-precedence"),p=s.get(M)||l,p===l&&s.set(null,f),s.set(M,f),this.count++,l=Bc.bind(this),f.addEventListener("load",l),f.addEventListener("error",l),p?p.parentNode.insertBefore(f,p.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(f,t.firstChild)),n.state.loading|=4}}var pl={$$typeof:I,Provider:null,Consumer:null,_currentValue:te,_currentValue2:te,_threadCount:0};function ay(t,n,s,l,f,p,M,C,V){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ve(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ve(0),this.hiddenUpdates=Ve(null),this.identifierPrefix=l,this.onUncaughtError=f,this.onCaughtError=p,this.onRecoverableError=M,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=V,this.incompleteTransitions=new Map}function f_(t,n,s,l,f,p,M,C,V,oe,xe,Te){return t=new ay(t,n,s,M,V,oe,xe,Te,C),n=1,p===!0&&(n|=24),p=xi(3,null,null,n),t.current=p,p.stateNode=t,n=uf(),n.refCount++,t.pooledCache=n,n.refCount++,p.memoizedState={element:l,isDehydrated:s,cache:n},pf(p),t}function d_(t){return t?(t=Nr,t):Nr}function h_(t,n,s,l,f,p){f=d_(f),l.context===null?l.context=f:l.pendingContext=f,l=ps(n),l.payload={element:s},p=p===void 0?null:p,p!==null&&(l.callback=p),s=ms(t,l,n),s!==null&&(di(s,t,n),Yo(s,t,n))}function p_(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var s=t.retryLane;t.retryLane=s!==0&&s<n?s:n}}function Nd(t,n){p_(t,n),(t=t.alternate)&&p_(t,n)}function m_(t){if(t.tag===13||t.tag===31){var n=Js(t,67108864);n!==null&&di(n,t,67108864),Nd(t,67108864)}}function g_(t){if(t.tag===13||t.tag===31){var n=bi();n=la(n);var s=Js(t,n);s!==null&&di(s,t,n),Nd(t,n)}}var Gc=!0;function sy(t,n,s,l){var f=z.T;z.T=null;var p=H.p;try{H.p=2,Ud(t,n,s,l)}finally{H.p=p,z.T=f}}function ry(t,n,s,l){var f=z.T;z.T=null;var p=H.p;try{H.p=8,Ud(t,n,s,l)}finally{H.p=p,z.T=f}}function Ud(t,n,s,l){if(Gc){var f=Od(l);if(f===null)xd(t,n,l,Vc,s),v_(t,l);else if(ly(f,t,n,s,l))l.stopPropagation();else if(v_(t,l),n&4&&-1<oy.indexOf(t)){for(;f!==null;){var p=Di(f);if(p!==null)switch(p.tag){case 3:if(p=p.stateNode,p.current.memoizedState.isDehydrated){var M=Ne(p.pendingLanes);if(M!==0){var C=p;for(C.pendingLanes|=2,C.entangledLanes|=2;M;){var V=1<<31-Ge(M);C.entanglements[1]|=V,M&=~V}ga(p),(zt&6)===0&&(bc=bt()+500,ll(0))}}break;case 31:case 13:C=Js(p,2),C!==null&&di(C,p,2),Ac(),Nd(p,2)}if(p=Od(l),p===null&&xd(t,n,l,Vc,s),p===f)break;f=p}f!==null&&l.stopPropagation()}else xd(t,n,l,null,s)}}function Od(t){return t=Uo(t),Pd(t)}var Vc=null;function Pd(t){if(Vc=null,t=wi(t),t!==null){var n=c(t);if(n===null)t=null;else{var s=n.tag;if(s===13){if(t=u(n),t!==null)return t;t=null}else if(s===31){if(t=d(n),t!==null)return t;t=null}else if(s===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return Vc=t,null}function __(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Tt()){case P:return 2;case b:return 8;case J:case re:return 32;case le:return 268435456;default:return 32}default:return 32}}var Id=!1,As=null,Rs=null,Cs=null,ml=new Map,gl=new Map,ws=[],oy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function v_(t,n){switch(t){case"focusin":case"focusout":As=null;break;case"dragenter":case"dragleave":Rs=null;break;case"mouseover":case"mouseout":Cs=null;break;case"pointerover":case"pointerout":ml.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":gl.delete(n.pointerId)}}function _l(t,n,s,l,f,p){return t===null||t.nativeEvent!==p?(t={blockedOn:n,domEventName:s,eventSystemFlags:l,nativeEvent:p,targetContainers:[f]},n!==null&&(n=Di(n),n!==null&&m_(n)),t):(t.eventSystemFlags|=l,n=t.targetContainers,f!==null&&n.indexOf(f)===-1&&n.push(f),t)}function ly(t,n,s,l,f){switch(n){case"focusin":return As=_l(As,t,n,s,l,f),!0;case"dragenter":return Rs=_l(Rs,t,n,s,l,f),!0;case"mouseover":return Cs=_l(Cs,t,n,s,l,f),!0;case"pointerover":var p=f.pointerId;return ml.set(p,_l(ml.get(p)||null,t,n,s,l,f)),!0;case"gotpointercapture":return p=f.pointerId,gl.set(p,_l(gl.get(p)||null,t,n,s,l,f)),!0}return!1}function x_(t){var n=wi(t.target);if(n!==null){var s=c(n);if(s!==null){if(n=s.tag,n===13){if(n=u(s),n!==null){t.blockedOn=n,Ca(t.priority,function(){g_(s)});return}}else if(n===31){if(n=d(s),n!==null){t.blockedOn=n,Ca(t.priority,function(){g_(s)});return}}else if(n===3&&s.stateNode.current.memoizedState.isDehydrated){t.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}t.blockedOn=null}function kc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var s=Od(t.nativeEvent);if(s===null){s=t.nativeEvent;var l=new s.constructor(s.type,s);Ws=l,s.target.dispatchEvent(l),Ws=null}else return n=Di(s),n!==null&&m_(n),t.blockedOn=s,!1;n.shift()}return!0}function S_(t,n,s){kc(t)&&s.delete(n)}function cy(){Id=!1,As!==null&&kc(As)&&(As=null),Rs!==null&&kc(Rs)&&(Rs=null),Cs!==null&&kc(Cs)&&(Cs=null),ml.forEach(S_),gl.forEach(S_)}function Xc(t,n){t.blockedOn===n&&(t.blockedOn=null,Id||(Id=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,cy)))}var Wc=null;function M_(t){Wc!==t&&(Wc=t,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){Wc===t&&(Wc=null);for(var n=0;n<t.length;n+=3){var s=t[n],l=t[n+1],f=t[n+2];if(typeof l!="function"){if(Pd(l||s)===null)continue;break}var p=Di(s);p!==null&&(t.splice(n,3),n-=3,Of(p,{pending:!0,data:f,method:s.method,action:l},l,f))}}))}function no(t){function n(V){return Xc(V,t)}As!==null&&Xc(As,t),Rs!==null&&Xc(Rs,t),Cs!==null&&Xc(Cs,t),ml.forEach(n),gl.forEach(n);for(var s=0;s<ws.length;s++){var l=ws[s];l.blockedOn===t&&(l.blockedOn=null)}for(;0<ws.length&&(s=ws[0],s.blockedOn===null);)x_(s),s.blockedOn===null&&ws.shift();if(s=(t.ownerDocument||t).$$reactFormReplay,s!=null)for(l=0;l<s.length;l+=3){var f=s[l],p=s[l+1],M=f[gn]||null;if(typeof p=="function")M||M_(s);else if(M){var C=null;if(p&&p.hasAttribute("formAction")){if(f=p,M=p[gn]||null)C=M.formAction;else if(Pd(f)!==null)continue}else C=M.action;typeof C=="function"?s[l+1]=C:(s.splice(l,3),l-=3),M_(s)}}}function y_(){function t(p){p.canIntercept&&p.info==="react-transition"&&p.intercept({handler:function(){return new Promise(function(M){return f=M})},focusReset:"manual",scroll:"manual"})}function n(){f!==null&&(f(),f=null),l||setTimeout(s,20)}function s(){if(!l&&!navigation.transition){var p=navigation.currentEntry;p&&p.url!=null&&navigation.navigate(p.url,{state:p.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,f=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(s,100),function(){l=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),f!==null&&(f(),f=null)}}}function Fd(t){this._internalRoot=t}Yc.prototype.render=Fd.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var s=n.current,l=bi();h_(s,l,t,n,null,null)},Yc.prototype.unmount=Fd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;h_(t.current,2,null,t,null,null),Ac(),n[zn]=null}};function Yc(t){this._internalRoot=t}Yc.prototype.unstable_scheduleHydration=function(t){if(t){var n=ss();t={blockedOn:null,target:t,priority:n};for(var s=0;s<ws.length&&n!==0&&n<ws[s].priority;s++);ws.splice(s,0,t),s===0&&x_(t)}};var E_=e.version;if(E_!=="19.2.7")throw Error(r(527,E_,"19.2.7"));H.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=h(n),t=t!==null?g(t):null,t=t===null?null:t.stateNode,t};var uy={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var qc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!qc.isDisabled&&qc.supportsFiber)try{pe=qc.inject(uy),de=qc}catch{}}return xl.createRoot=function(t,n){if(!o(t))throw Error(r(299));var s=!1,l="",f=D0,p=L0,M=N0;return n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onUncaughtError!==void 0&&(f=n.onUncaughtError),n.onCaughtError!==void 0&&(p=n.onCaughtError),n.onRecoverableError!==void 0&&(M=n.onRecoverableError)),n=f_(t,1,!1,null,null,s,l,null,f,p,M,y_),t[zn]=n.current,vd(t),new Fd(n)},xl.hydrateRoot=function(t,n,s){if(!o(t))throw Error(r(299));var l=!1,f="",p=D0,M=L0,C=N0,V=null;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(f=s.identifierPrefix),s.onUncaughtError!==void 0&&(p=s.onUncaughtError),s.onCaughtError!==void 0&&(M=s.onCaughtError),s.onRecoverableError!==void 0&&(C=s.onRecoverableError),s.formState!==void 0&&(V=s.formState)),n=f_(t,1,!0,n,s??null,l,f,V,p,M,C,y_),n.context=d_(null),s=n.current,l=bi(),l=la(l),f=ps(l),f.callback=null,ms(s,f,l),s=l,n.current.lanes=s,Ze(n,s),ga(n),t[zn]=n.current,vd(t),new Yc(n)},xl.version="19.2.7",xl}var U_;function xy(){if(U_)return Hd.exports;U_=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(e){console.error(e)}}return a(),Hd.exports=vy(),Hd.exports}var Sy=xy();const My={BASE_URL:"/",DEV:!1,MODE:"production",PROD:!0,SSR:!1,VITE_APP_URL:"https://demo.morpheum.io",VITE_DISCORD_URL:"",VITE_DOCS_URL:"",VITE_MANIFESTO_URL:"",VITE_TUTORIAL_VIDEO_URL:"",VITE_X_URL:""},io=(a,e="#")=>{var i;return((i=My[a])==null?void 0:i.trim())||e},Ln={app:io("VITE_APP_URL","https://demo.morpheum.io"),docs:io("VITE_DOCS_URL"),manifesto:io("VITE_MANIFESTO_URL"),discord:io("VITE_DISCORD_URL"),x:io("VITE_X_URL"),tutorialVideo:io("VITE_TUTORIAL_VIDEO_URL",""),explore:"#explore",exploreAgents:"#explore-agents",exploreVaults:"#explore-vaults"},_u=[{id:"demo",label:"Demo",href:"#demo"},{id:"personas",label:"Personas",href:"#personas"},{id:"how",label:"How it works",href:"#how"},{id:"explore",label:"Explore",href:"#explore"}],Xd={text:"> The agent-native L1 DEX, for faster and safer trades.",href:Ln.manifesto},Ls={eyebrow:{label:"A manifesto for verifiable agents",href:Ln.manifesto},headline:["Agents you can trust.","Assets you can trade."],primaryCta:{label:"Launch Morpheum",href:Ln.app},secondaryCta:{label:"Explore agents",href:Ln.explore}},O_={risks:[{risk:"Speculation without underwriting",failure:"Buy random agent tokens on narrative alone.",solveLabel:"Proof",solve:"Underwrite on receipts, reputation, and risk scores — before you commit a dollar."},{risk:"Automation without capital controls",failure:"Run an agent with unbounded capital and no kill switch.",solveLabel:"Controls",solve:"Set Risk Level, approve gated moves, and isolate each strategy in its own bucket."}],close:"The Agent-native L1 DEX — faster, safer trades."},P_=[{label:"MAEX indices",status:"LIVE",live:!0},{label:"Agents",status:"REPUTATION / SHARPE / ROI"},{label:"Risk level",status:"MANUAL / HITL / HANDS-OFF"},{label:"Agent notifications",status:"WANT-TO / ACTION / PAUSED / REJECTED"},{label:"Copy buckets",status:"LIVE",live:!0},{label:"Buckets",status:"RISK-ISOLATED"},{label:"Vaults",status:"ONCHAIN"},{label:"Staking",status:"LIVE",live:!0}],Uh={kicker:"Product tour",videoCaption:"See an agent discovered, copied, supervised, and isolated in ~60s.",verbs:[{verb:"Discover",description:"Agents & indices — proof first."},{verb:"Copy",description:"Mirror a proven agent into your bucket."},{verb:"Supervise",description:"Approve gated moves on HITL."},{verb:"Isolate",description:"Risk contained in its own bucket."}]},Wd={kicker:"Choose your path",title:"Become part of the agent economy",items:[{title:"Become an Operator",weight:"major",steps:["Mint an agent and set its mandate.","Choose a Risk Level: Manual · HITL · Hands-off.","Build a proven track record investors can underwrite."],cta:{label:"Run an agent",href:Ln.exploreAgents},meta:{kind:"identity",name:"SharpeShark",tx:"0xa4c2…8f1d",hash:"did:morph:0x7a3f…c91e",chain:"Morpheum · hop 0",verified:"yes",rep:"72",portable:"yes",next:"minting mandate…"}},{title:"Become a Copy Trader",weight:"major",steps:["Screen agents on real proof — receipts and risk scores.","Mirror the best into your own dedicated bucket.","Track PnL and rebalance anytime."],cta:{label:"Start copying",href:Ln.exploreAgents},meta:{kind:"chain",label:"on-chain transactions",chain:"Morpheum · hop 0",steps:[{op:"mint agent",tx:"0xa4c2…8f1d",status:"settled"},{op:"mint bucket",tx:"0xb91e…4c02",status:"settled"},{op:"fund transfer",tx:"0xe81a…3b70",status:"settled",from:"SortinoSloth",to:"your bucket",asset:"USDC",amt:"2500"}]}},{title:"Provide Capital",weight:"light",steps:["Deposit into a vault or bucket.","Stake to earn.","Withdraw on your terms."],cta:{label:"Explore vaults",href:Ln.exploreVaults},meta:{kind:"community",label:"on-chain transaction",tx:"0x12af…9e44",from:"you",to:"Vault-Alpha",asset:"USDC",amt:"10000",chain:"Morpheum · hop 0",status:"queued"}}]},Ns={kicker:"How it works",title:"Discover → Copy → Supervise → Isolate",outcome:"A proven, risk-isolated capital position — not a bet on a black box.",chips:[{label:"Risk level",value:"Manual · HITL · Hands-off"},{label:"Notifications",value:"Want-to · Action · Paused · Rejected"},{label:"Capital",value:"Bucket / Vault"}],steps:[{n:1,title:"Discover",feature:"Agents & Indices + proof",body:"Browse the MAEX roster and index catalog and read the proof before you commit a dollar.",example:"Open SharpeShark and see its receipts, reputation, risk score, and Sharpe / ROI side by side."},{n:2,title:"Copy",feature:"Copy Trade",body:"Mirror a proven performer into your own bucket in one click, sized to your capital, with spread / funding cost shown before you confirm.",example:"One click clones SharpeShark's strategy into a fresh bucket bound to your wallet."},{n:3,title:"Supervise",feature:"Risk Level + Agent Notifications",body:"Set how much the agent may act on its own — Manual · HITL · Hands-off — and stay in the loop through Agent Notifications: Want to · Action · Paused · Rejected.",example:'On HITL, a "Want to open ETH long" notification waits for your inline Approve / Reject, and Explain shows why the agent wants the trade.'},{n:4,title:"Isolate",feature:"Buckets",body:"Every mirror lands in its own dedicated cross-margin bucket bound to a wallet executor agent, so risk is contained per strategy.",example:"SharpeShark runs in its own bucket with its own margin and exposure — if it draws down, only that bucket's capital is at risk; your other buckets and spot balance are untouched."}]},ao={kicker:"Explore",title:"Agents. Indices. Buckets. Vaults.",cards:[{title:"Agents",verbs:["Browse","Compare","Copy"],agents:[{name:"SharpeShark",sharpe:"2.41",roi:"+38.2%",risk:"72",positive:!0},{name:"SortinoSloth",sharpe:"1.86",roi:"+21.4%",risk:"58",positive:!0},{name:"FundingFox",sharpe:"1.12",roi:"-4.1%",risk:"41",positive:!1}]},{title:"Indices",verbs:["Track","Weight","Hold"],blurb:"Curated agent baskets for one-click exposure to proven strategies.",sample:[{label:"MAEX Core",value:"+12.8%",positive:!0},{label:"Risk-Off Bucket",value:"+4.2%",positive:!0}]},{title:"Buckets",verbs:["Isolate","Trade","Contain"],blurb:"Risk-isolated positions — each strategy in its own margin shell.",sample:[{label:"Bucket A",value:"ISOLATED",positive:!1},{label:"Bucket B",value:"ISOLATED",positive:!1}]},{title:"Vaults",verbs:["Deposit","Earn","Withdraw"],blurb:"Pooled onchain capital — graded vaults with live APR and TVL.",sample:[{label:"MLP (House Liq.)",value:"A · 18.4%",meta:"$9.8M TVL"},{label:"Basis Capture",value:"A · 14.2%",meta:"$2.1M TVL"}]}]},jc={line:"Back agents you can prove. Own the upside.",primaryCta:{label:"Launch Demo",href:Ln.app},social:[{label:"Join Discord",href:Ln.discord},{label:"Join X",href:Ln.x}]},I_={legal:"© 2026 Morpheum. Capital funds proof.",labels:["validators","stakings","ZKProof"]};function To({variant:a="primary",children:e,className:i="",...r}){const o=`cta cta--${a} terminal-interactive ${i}`.trim();if("href"in r&&r.href!==void 0){const{href:c,...u}=r;return D.jsx("a",{className:o,href:c,...u,children:e})}return D.jsx("button",{className:o,type:"button",...r,children:e})}function yy(){return D.jsx("section",{id:"join",className:"section community",children:D.jsxs("div",{className:"container community__inner",children:[D.jsx("h2",{className:"community__line",children:jc.line}),D.jsxs("div",{className:"community__ctas",children:[D.jsx(To,{href:jc.primaryCta.href,variant:"primary",children:jc.primaryCta.label}),jc.social.map(a=>D.jsx(To,{href:a.href,variant:"ghost",children:a.label},a.label))]})]})})}function Ey(){const[a,e]=Xe.useState(!1),i=!!Ln.tutorialVideo;return D.jsx("section",{id:"demo",className:"section demo",children:D.jsxs("div",{className:"container",children:[D.jsx("p",{className:"section-kicker",children:Uh.kicker}),D.jsxs("div",{className:"demo__video",children:[a&&i?D.jsx("video",{className:"demo__player",src:Ln.tutorialVideo,controls:!0,autoPlay:!0,playsInline:!0}):D.jsxs("button",{type:"button",className:"demo__poster",onClick:()=>i&&e(!0),"aria-label":i?"Play tutorial video":"Tutorial video coming soon",children:[D.jsx("span",{className:"demo__play","aria-hidden":!0,children:"▶"}),D.jsx("span",{className:"demo__poster-label",children:"Tutorial"})]}),D.jsx("p",{className:"demo__caption",children:Uh.videoCaption})]})]})})}const by={receipt:"Receipt",riskScore:"Risk",credential:"Credential",verified:"Verified"};function Yd({type:a,value:e}){return D.jsxs("span",{className:`proof-chip proof-chip--${a}`,children:[D.jsx("span",{className:"proof-chip__dot","aria-hidden":!0}),D.jsx("span",{className:"proof-chip__label",children:by[a]}),e?D.jsx("span",{className:"proof-chip__value",children:e}):null]})}function Ty(){const a=ao.cards[0],e=ao.cards[1],i=ao.cards[2],r=ao.cards[3];return D.jsx("section",{id:"explore",className:"section explore",children:D.jsxs("div",{className:"container",children:[D.jsx("p",{className:"section-kicker",children:ao.kicker}),D.jsx("h2",{className:"section-title explore__title",children:ao.title}),D.jsxs("div",{className:"explore__grid",children:[D.jsxs("article",{id:"explore-agents",className:"explore-card explore-card--major",children:[D.jsxs("header",{className:"explore-card__header",children:[D.jsx("h3",{className:"explore-card__title",children:a.title}),D.jsx("p",{className:"explore-card__verbs",children:a.verbs.join(" · ").toUpperCase()})]}),D.jsx("ul",{className:"explore-roster",children:a.agents.map(o=>D.jsxs("li",{className:"explore-roster__row",children:[D.jsxs("div",{className:"explore-roster__top",children:[D.jsx("span",{className:"explore-roster__name",children:o.name}),D.jsx("span",{className:`terminal-value ${o.positive?"terminal-long":"terminal-short"}`,children:o.roi})]}),D.jsxs("div",{className:"explore-roster__proof",children:[D.jsx(Yd,{type:"verified"}),D.jsx(Yd,{type:"riskScore",value:o.risk}),D.jsx(Yd,{type:"receipt"}),D.jsxs("span",{className:"terminal-value explore-roster__sharpe",children:["Sharpe ",o.sharpe]})]})]},o.name))})]}),D.jsxs("article",{className:"explore-card explore-card--major",children:[D.jsxs("header",{className:"explore-card__header",children:[D.jsx("h3",{className:"explore-card__title",children:e.title}),D.jsx("p",{className:"explore-card__verbs",children:e.verbs.join(" · ").toUpperCase()})]}),D.jsx("p",{className:"explore-card__blurb",children:e.blurb}),D.jsx("ul",{className:"explore-sample",children:e.sample.map(o=>D.jsxs("li",{children:[D.jsx("span",{className:"terminal-label",children:o.label}),D.jsx("span",{className:`terminal-value ${o.positive?"terminal-long":""}`,children:o.value})]},o.label))})]}),D.jsxs("article",{id:"explore-buckets",className:"explore-card explore-card--major",children:[D.jsxs("header",{className:"explore-card__header",children:[D.jsx("h3",{className:"explore-card__title",children:i.title}),D.jsx("p",{className:"explore-card__verbs",children:i.verbs.join(" · ").toUpperCase()})]}),D.jsx("p",{className:"explore-card__blurb",children:i.blurb}),D.jsx("ul",{className:"explore-sample",children:i.sample.map(o=>D.jsxs("li",{children:[D.jsx("span",{className:"terminal-label",children:o.label}),D.jsx("span",{className:"terminal-value explore-sample__status",children:o.value})]},o.label))})]}),D.jsxs("article",{id:"explore-vaults",className:"explore-card explore-card--major",children:[D.jsxs("header",{className:"explore-card__header",children:[D.jsx("h3",{className:"explore-card__title",children:r.title}),D.jsx("p",{className:"explore-card__verbs",children:r.verbs.join(" · ").toUpperCase()})]}),D.jsx("p",{className:"explore-card__blurb",children:r.blurb}),D.jsx("ul",{className:"explore-sample",children:r.sample.map(o=>D.jsxs("li",{children:[D.jsx("span",{className:"terminal-label",children:o.label}),D.jsxs("span",{className:"explore-sample__metrics",children:[D.jsx("span",{className:"terminal-value terminal-long",children:o.value}),D.jsx("span",{className:"terminal-value explore-sample__meta",children:o.meta})]})]},o.label))})]})]})]})})}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Rp="185",Ay=0,F_=1,Ry=2,vu=1,Cy=2,Al=3,ns=0,pi=1,Sa=2,es=0,Mo=1,Oh=2,B_=3,z_=4,wy=5,vr=100,Dy=101,Ly=102,Ny=103,Uy=104,Oy=200,Py=201,Iy=202,Fy=203,Ph=204,Ih=205,By=206,zy=207,Hy=208,Gy=209,Vy=210,ky=211,Xy=212,Wy=213,Yy=214,Fh=0,Bh=1,zh=2,Ao=3,Hh=4,Gh=5,Vh=6,kh=7,cx=0,qy=1,jy=2,Ea=0,ux=1,fx=2,dx=3,hx=4,px=5,mx=6,gx=7,_x=300,yr=301,Ro=302,qd=303,jd=304,Pu=306,Xh=1e3,ra=1001,Wh=1002,qn=1003,Zy=1004,Zc=1005,hn=1006,Zd=1007,Hs=1008,Xi=1009,vx=1010,xx=1011,Pl=1012,Cp=1013,Aa=1014,Ma=1015,is=1016,wp=1017,Dp=1018,Il=1020,Sx=35902,Mx=35899,yx=1021,Ex=1022,oa=1023,as=1026,Mr=1027,bx=1028,Lp=1029,Er=1030,Np=1031,Up=1033,xu=33776,Su=33777,Mu=33778,yu=33779,Yh=35840,qh=35841,jh=35842,Zh=35843,Kh=36196,Qh=37492,Jh=37496,$h=37488,ep=37489,Tu=37490,tp=37491,np=37808,ip=37809,ap=37810,sp=37811,rp=37812,op=37813,lp=37814,cp=37815,up=37816,fp=37817,dp=37818,hp=37819,pp=37820,mp=37821,gp=36492,_p=36494,vp=36495,xp=36283,Sp=36284,Au=36285,Mp=36286,Ky=3200,H_=0,Qy=1,zs="",ei="srgb",Ru="srgb-linear",Cu="linear",Xt="srgb",so=7680,G_=519,Jy=512,$y=513,eE=514,Op=515,tE=516,nE=517,Pp=518,iE=519,V_=35044,k_="300 es",ya=2e3,wu=2001;function aE(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function Du(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function sE(){const a=Du("canvas");return a.style.display="block",a}const X_={};function W_(...a){const e="THREE."+a.shift();console.log(e,...a)}function Tx(a){const e=a[0];if(typeof e=="string"&&e.startsWith("TSL:")){const i=a[1];i&&i.isStackTrace?a[0]+=" "+i.getLocation():a[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return a}function ot(...a){a=Tx(a);const e="THREE."+a.shift();{const i=a[0];i&&i.isStackTrace?console.warn(i.getError(e)):console.warn(e,...a)}}function Dt(...a){a=Tx(a);const e="THREE."+a.shift();{const i=a[0];i&&i.isStackTrace?console.error(i.getError(e)):console.error(e,...a)}}function yo(...a){const e=a.join(" ");e in X_||(X_[e]=!0,ot(...a))}function rE(a,e,i){return new Promise(function(r,o){function c(){switch(a.clientWaitSync(e,a.SYNC_FLUSH_COMMANDS_BIT,0)){case a.WAIT_FAILED:o();break;case a.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:r()}}setTimeout(c,i)})}const oE={[Fh]:Bh,[zh]:Vh,[Hh]:kh,[Ao]:Gh,[Bh]:Fh,[Vh]:zh,[kh]:Hh,[Gh]:Ao};class Tr{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const c=o.indexOf(i);c!==-1&&o.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let c=0,u=o.length;c<u;c++)o[c].call(this,e);e.target=null}}}const Jn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Y_=1234567;const Nl=Math.PI/180,Fl=180/Math.PI;function Do(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Jn[a&255]+Jn[a>>8&255]+Jn[a>>16&255]+Jn[a>>24&255]+"-"+Jn[e&255]+Jn[e>>8&255]+"-"+Jn[e>>16&15|64]+Jn[e>>24&255]+"-"+Jn[i&63|128]+Jn[i>>8&255]+"-"+Jn[i>>16&255]+Jn[i>>24&255]+Jn[r&255]+Jn[r>>8&255]+Jn[r>>16&255]+Jn[r>>24&255]).toLowerCase()}function _t(a,e,i){return Math.max(e,Math.min(i,a))}function Ip(a,e){return(a%e+e)%e}function lE(a,e,i,r,o){return r+(a-e)*(o-r)/(i-e)}function cE(a,e,i){return a!==e?(i-a)/(e-a):0}function Ul(a,e,i){return(1-i)*a+i*e}function uE(a,e,i,r){return Ul(a,e,1-Math.exp(-i*r))}function fE(a,e=1){return e-Math.abs(Ip(a,e*2)-e)}function dE(a,e,i){return a<=e?0:a>=i?1:(a=(a-e)/(i-e),a*a*(3-2*a))}function hE(a,e,i){return a<=e?0:a>=i?1:(a=(a-e)/(i-e),a*a*a*(a*(a*6-15)+10))}function pE(a,e){return a+Math.floor(Math.random()*(e-a+1))}function mE(a,e){return a+Math.random()*(e-a)}function gE(a){return a*(.5-Math.random())}function _E(a){a!==void 0&&(Y_=a);let e=Y_+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function vE(a){return a*Nl}function xE(a){return a*Fl}function SE(a){return(a&a-1)===0&&a!==0}function ME(a){return Math.pow(2,Math.ceil(Math.log(a)/Math.LN2))}function yE(a){return Math.pow(2,Math.floor(Math.log(a)/Math.LN2))}function EE(a,e,i,r,o){const c=Math.cos,u=Math.sin,d=c(i/2),m=u(i/2),h=c((e+r)/2),g=u((e+r)/2),v=c((e-r)/2),_=u((e-r)/2),S=c((r-e)/2),E=u((r-e)/2);switch(o){case"XYX":a.set(d*g,m*v,m*_,d*h);break;case"YZY":a.set(m*_,d*g,m*v,d*h);break;case"ZXZ":a.set(m*v,m*_,d*g,d*h);break;case"XZX":a.set(d*g,m*E,m*S,d*h);break;case"YXY":a.set(m*S,d*g,m*E,d*h);break;case"ZYZ":a.set(m*E,m*S,d*g,d*h);break;default:ot("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+o)}}function So(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return a/4294967295;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int32Array:return Math.max(a/2147483647,-1);case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ii(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return Math.round(a*4294967295);case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int32Array:return Math.round(a*2147483647);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Wt={DEG2RAD:Nl,RAD2DEG:Fl,generateUUID:Do,clamp:_t,euclideanModulo:Ip,mapLinear:lE,inverseLerp:cE,lerp:Ul,damp:uE,pingpong:fE,smoothstep:dE,smootherstep:hE,randInt:pE,randFloat:mE,randFloatSpread:gE,seededRandom:_E,degToRad:vE,radToDeg:xE,isPowerOfTwo:SE,ceilPowerOfTwo:ME,floorPowerOfTwo:yE,setQuaternionFromProperEuler:EE,normalize:ii,denormalize:So},Yp=class Yp{constructor(e=0,i=0){this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,o=e.elements;return this.x=o[0]*i+o[3]*r+o[6],this.y=o[1]*i+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=_t(this.x,e.x,i.x),this.y=_t(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=_t(this.x,e,i),this.y=_t(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(_t(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(_t(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),o=Math.sin(i),c=this.x-e.x,u=this.y-e.y;return this.x=c*r-u*o+e.x,this.y=c*o+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Yp.prototype.isVector2=!0;let Pt=Yp;class Lo{constructor(e=0,i=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=o}static slerpFlat(e,i,r,o,c,u,d){let m=r[o+0],h=r[o+1],g=r[o+2],v=r[o+3],_=c[u+0],S=c[u+1],E=c[u+2],R=c[u+3];if(v!==R||m!==_||h!==S||g!==E){let y=m*_+h*S+g*E+v*R;y<0&&(_=-_,S=-S,E=-E,R=-R,y=-y);let x=1-d;if(y<.9995){const F=Math.acos(y),I=Math.sin(F);x=Math.sin(x*F)/I,d=Math.sin(d*F)/I,m=m*x+_*d,h=h*x+S*d,g=g*x+E*d,v=v*x+R*d}else{m=m*x+_*d,h=h*x+S*d,g=g*x+E*d,v=v*x+R*d;const F=1/Math.sqrt(m*m+h*h+g*g+v*v);m*=F,h*=F,g*=F,v*=F}}e[i]=m,e[i+1]=h,e[i+2]=g,e[i+3]=v}static multiplyQuaternionsFlat(e,i,r,o,c,u){const d=r[o],m=r[o+1],h=r[o+2],g=r[o+3],v=c[u],_=c[u+1],S=c[u+2],E=c[u+3];return e[i]=d*E+g*v+m*S-h*_,e[i+1]=m*E+g*_+h*v-d*S,e[i+2]=h*E+g*S+d*_-m*v,e[i+3]=g*E-d*v-m*_-h*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,o){return this._x=e,this._y=i,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,o=e._y,c=e._z,u=e._order,d=Math.cos,m=Math.sin,h=d(r/2),g=d(o/2),v=d(c/2),_=m(r/2),S=m(o/2),E=m(c/2);switch(u){case"XYZ":this._x=_*g*v+h*S*E,this._y=h*S*v-_*g*E,this._z=h*g*E+_*S*v,this._w=h*g*v-_*S*E;break;case"YXZ":this._x=_*g*v+h*S*E,this._y=h*S*v-_*g*E,this._z=h*g*E-_*S*v,this._w=h*g*v+_*S*E;break;case"ZXY":this._x=_*g*v-h*S*E,this._y=h*S*v+_*g*E,this._z=h*g*E+_*S*v,this._w=h*g*v-_*S*E;break;case"ZYX":this._x=_*g*v-h*S*E,this._y=h*S*v+_*g*E,this._z=h*g*E-_*S*v,this._w=h*g*v+_*S*E;break;case"YZX":this._x=_*g*v+h*S*E,this._y=h*S*v+_*g*E,this._z=h*g*E-_*S*v,this._w=h*g*v-_*S*E;break;case"XZY":this._x=_*g*v-h*S*E,this._y=h*S*v-_*g*E,this._z=h*g*E+_*S*v,this._w=h*g*v+_*S*E;break;default:ot("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],o=i[4],c=i[8],u=i[1],d=i[5],m=i[9],h=i[2],g=i[6],v=i[10],_=r+d+v;if(_>0){const S=.5/Math.sqrt(_+1);this._w=.25/S,this._x=(g-m)*S,this._y=(c-h)*S,this._z=(u-o)*S}else if(r>d&&r>v){const S=2*Math.sqrt(1+r-d-v);this._w=(g-m)/S,this._x=.25*S,this._y=(o+u)/S,this._z=(c+h)/S}else if(d>v){const S=2*Math.sqrt(1+d-r-v);this._w=(c-h)/S,this._x=(o+u)/S,this._y=.25*S,this._z=(m+g)/S}else{const S=2*Math.sqrt(1+v-r-d);this._w=(u-o)/S,this._x=(c+h)/S,this._y=(m+g)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(_t(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,i/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,o=e._y,c=e._z,u=e._w,d=i._x,m=i._y,h=i._z,g=i._w;return this._x=r*g+u*d+o*h-c*m,this._y=o*g+u*m+c*d-r*h,this._z=c*g+u*h+r*m-o*d,this._w=u*g-r*d-o*m-c*h,this._onChangeCallback(),this}slerp(e,i){let r=e._x,o=e._y,c=e._z,u=e._w,d=this.dot(e);d<0&&(r=-r,o=-o,c=-c,u=-u,d=-d);let m=1-i;if(d<.9995){const h=Math.acos(d),g=Math.sin(h);m=Math.sin(m*h)/g,i=Math.sin(i*h)/g,this._x=this._x*m+r*i,this._y=this._y*m+o*i,this._z=this._z*m+c*i,this._w=this._w*m+u*i,this._onChangeCallback()}else this._x=this._x*m+r*i,this._y=this._y*m+o*i,this._z=this._z*m+c*i,this._w=this._w*m+u*i,this.normalize();return this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const qp=class qp{constructor(e=0,i=0,r=0){this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(q_.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(q_.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,o=this.z,c=e.elements;return this.x=c[0]*i+c[3]*r+c[6]*o,this.y=c[1]*i+c[4]*r+c[7]*o,this.z=c[2]*i+c[5]*r+c[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,o=this.z,c=e.elements,u=1/(c[3]*i+c[7]*r+c[11]*o+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*o+c[12])*u,this.y=(c[1]*i+c[5]*r+c[9]*o+c[13])*u,this.z=(c[2]*i+c[6]*r+c[10]*o+c[14])*u,this}applyQuaternion(e){const i=this.x,r=this.y,o=this.z,c=e.x,u=e.y,d=e.z,m=e.w,h=2*(u*o-d*r),g=2*(d*i-c*o),v=2*(c*r-u*i);return this.x=i+m*h+u*v-d*g,this.y=r+m*g+d*h-c*v,this.z=o+m*v+c*g-u*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,o=this.z,c=e.elements;return this.x=c[0]*i+c[4]*r+c[8]*o,this.y=c[1]*i+c[5]*r+c[9]*o,this.z=c[2]*i+c[6]*r+c[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=_t(this.x,e.x,i.x),this.y=_t(this.y,e.y,i.y),this.z=_t(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=_t(this.x,e,i),this.y=_t(this.y,e,i),this.z=_t(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(_t(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,o=e.y,c=e.z,u=i.x,d=i.y,m=i.z;return this.x=o*m-c*d,this.y=c*u-r*m,this.z=r*d-o*u,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Kd.copy(this).projectOnVector(e),this.sub(Kd)}reflect(e){return this.sub(Kd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(_t(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return i*i+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const o=Math.sin(i)*e;return this.x=o*Math.sin(r),this.y=Math.cos(i)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=o,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};qp.prototype.isVector3=!0;let ie=qp;const Kd=new ie,q_=new Lo,jp=class jp{constructor(e,i,r,o,c,u,d,m,h){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,o,c,u,d,m,h)}set(e,i,r,o,c,u,d,m,h){const g=this.elements;return g[0]=e,g[1]=o,g[2]=d,g[3]=i,g[4]=c,g[5]=m,g[6]=r,g[7]=u,g[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,o=i.elements,c=this.elements,u=r[0],d=r[3],m=r[6],h=r[1],g=r[4],v=r[7],_=r[2],S=r[5],E=r[8],R=o[0],y=o[3],x=o[6],F=o[1],I=o[4],w=o[7],O=o[2],L=o[5],B=o[8];return c[0]=u*R+d*F+m*O,c[3]=u*y+d*I+m*L,c[6]=u*x+d*w+m*B,c[1]=h*R+g*F+v*O,c[4]=h*y+g*I+v*L,c[7]=h*x+g*w+v*B,c[2]=_*R+S*F+E*O,c[5]=_*y+S*I+E*L,c[8]=_*x+S*w+E*B,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],o=e[2],c=e[3],u=e[4],d=e[5],m=e[6],h=e[7],g=e[8];return i*u*g-i*d*h-r*c*g+r*d*m+o*c*h-o*u*m}invert(){const e=this.elements,i=e[0],r=e[1],o=e[2],c=e[3],u=e[4],d=e[5],m=e[6],h=e[7],g=e[8],v=g*u-d*h,_=d*m-g*c,S=h*c-u*m,E=i*v+r*_+o*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/E;return e[0]=v*R,e[1]=(o*h-g*r)*R,e[2]=(d*r-o*u)*R,e[3]=_*R,e[4]=(g*i-o*m)*R,e[5]=(o*c-d*i)*R,e[6]=S*R,e[7]=(r*m-h*i)*R,e[8]=(u*i-r*c)*R,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,o,c,u,d){const m=Math.cos(c),h=Math.sin(c);return this.set(r*m,r*h,-r*(m*u+h*d)+u+e,-o*h,o*m,-o*(-h*u+m*d)+d+i,0,0,1),this}scale(e,i){return yo("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Qd.makeScale(e,i)),this}rotate(e){return yo("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Qd.makeRotation(-e)),this}translate(e,i){return yo("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Qd.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let o=0;o<9;o++)if(i[o]!==r[o])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};jp.prototype.isMatrix3=!0;let ft=jp;const Qd=new ft,j_=new ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Z_=new ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function bE(){const a={enabled:!0,workingColorSpace:Ru,spaces:{},convert:function(o,c,u){return this.enabled===!1||c===u||!c||!u||(this.spaces[c].transfer===Xt&&(o.r=ts(o.r),o.g=ts(o.g),o.b=ts(o.b)),this.spaces[c].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[c].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Xt&&(o.r=Eo(o.r),o.g=Eo(o.g),o.b=Eo(o.b))),o},workingToColorSpace:function(o,c){return this.convert(o,this.workingColorSpace,c)},colorSpaceToWorking:function(o,c){return this.convert(o,c,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===zs?Cu:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,c=this.workingColorSpace){return o.fromArray(this.spaces[c].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,c,u){return o.copy(this.spaces[c].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,c){return yo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),a.workingToColorSpace(o,c)},toWorkingColorSpace:function(o,c){return yo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),a.colorSpaceToWorking(o,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return a.define({[Ru]:{primaries:e,whitePoint:r,transfer:Cu,toXYZ:j_,fromXYZ:Z_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:ei},outputColorSpaceConfig:{drawingBufferColorSpace:ei}},[ei]:{primaries:e,whitePoint:r,transfer:Xt,toXYZ:j_,fromXYZ:Z_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:ei}}}),a}const Rt=bE();function ts(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function Eo(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}let ro;class TE{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{ro===void 0&&(ro=Du("canvas")),ro.width=e.width,ro.height=e.height;const o=ro.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=ro}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Du("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),c=o.data;for(let u=0;u<c.length;u++)c[u]=ts(c[u]/255)*255;return r.putImageData(o,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(ts(i[r]/255)*255):i[r]=ts(i[r]);return{data:i,width:e.width,height:e.height}}else return ot("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let AE=0;class Fp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:AE++}),this.uuid=Do(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayWidth,i.displayHeight,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let c;if(Array.isArray(o)){c=[];for(let u=0,d=o.length;u<d;u++)o[u].isDataTexture?c.push(Jd(o[u].image)):c.push(Jd(o[u]))}else c=Jd(o);r.url=c}return i||(e.images[this.uuid]=r),r}}function Jd(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?TE.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(ot("Texture: Unable to serialize Texture."),{})}let RE=0;const $d=new ie;class jn extends Tr{constructor(e=jn.DEFAULT_IMAGE,i=jn.DEFAULT_MAPPING,r=ra,o=ra,c=hn,u=Hs,d=oa,m=Xi,h=jn.DEFAULT_ANISOTROPY,g=zs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:RE++}),this.uuid=Do(),this.name="",this.source=new Fp(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=c,this.minFilter=u,this.anisotropy=h,this.format=d,this.internalFormat=null,this.type=m,this.offset=new Pt(0,0),this.repeat=new Pt(1,1),this.center=new Pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize($d).x}get height(){return this.source.getSize($d).y}get depth(){return this.source.getSize($d).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const r=e[i];if(r===void 0){ot(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const o=this[i];if(o===void 0){ot(`Texture.setValues(): property '${i}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==_x)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Xh:e.x=e.x-Math.floor(e.x);break;case ra:e.x=e.x<0?0:1;break;case Wh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Xh:e.y=e.y-Math.floor(e.y);break;case ra:e.y=e.y<0?0:1;break;case Wh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}jn.DEFAULT_IMAGE=null;jn.DEFAULT_MAPPING=_x;jn.DEFAULT_ANISOTROPY=1;const Zp=class Zp{constructor(e=0,i=0,r=0,o=1){this.x=e,this.y=i,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,o){return this.x=e,this.y=i,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,o=this.z,c=this.w,u=e.elements;return this.x=u[0]*i+u[4]*r+u[8]*o+u[12]*c,this.y=u[1]*i+u[5]*r+u[9]*o+u[13]*c,this.z=u[2]*i+u[6]*r+u[10]*o+u[14]*c,this.w=u[3]*i+u[7]*r+u[11]*o+u[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,o,c;const m=e.elements,h=m[0],g=m[4],v=m[8],_=m[1],S=m[5],E=m[9],R=m[2],y=m[6],x=m[10];if(Math.abs(g-_)<.01&&Math.abs(v-R)<.01&&Math.abs(E-y)<.01){if(Math.abs(g+_)<.1&&Math.abs(v+R)<.1&&Math.abs(E+y)<.1&&Math.abs(h+S+x-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const I=(h+1)/2,w=(S+1)/2,O=(x+1)/2,L=(g+_)/4,B=(v+R)/4,A=(E+y)/4;return I>w&&I>O?I<.01?(r=0,o=.707106781,c=.707106781):(r=Math.sqrt(I),o=L/r,c=B/r):w>O?w<.01?(r=.707106781,o=0,c=.707106781):(o=Math.sqrt(w),r=L/o,c=A/o):O<.01?(r=.707106781,o=.707106781,c=0):(c=Math.sqrt(O),r=B/c,o=A/c),this.set(r,o,c,i),this}let F=Math.sqrt((y-E)*(y-E)+(v-R)*(v-R)+(_-g)*(_-g));return Math.abs(F)<.001&&(F=1),this.x=(y-E)/F,this.y=(v-R)/F,this.z=(_-g)/F,this.w=Math.acos((h+S+x-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=_t(this.x,e.x,i.x),this.y=_t(this.y,e.y,i.y),this.z=_t(this.z,e.z,i.z),this.w=_t(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=_t(this.x,e,i),this.y=_t(this.y,e,i),this.z=_t(this.z,e,i),this.w=_t(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(_t(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Zp.prototype.isVector4=!0;let Sn=Zp;class CE extends Tr{constructor(e=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:hn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},r),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=r.depth,this.scissor=new Sn(0,0,e,i),this.scissorTest=!1,this.viewport=new Sn(0,0,e,i),this.textures=[];const o={width:e,height:i,depth:r.depth},c=new jn(o),u=r.count;for(let d=0;d<u;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview,this.useArrayDepthTexture=r.useArrayDepthTexture}_setTextureOptions(e={}){const i={minFilter:hn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let o=0,c=this.textures.length;o<c;o++)this.textures[o].image.width=e,this.textures[o].image.height=i,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const o=Object.assign({},e.textures[i].image);this.textures[i].source=new Fp(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ba extends CE{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class Ax extends jn{constructor(e=null,i=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:o},this.magFilter=qn,this.minFilter=qn,this.wrapR=ra,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class wE extends jn{constructor(e=null,i=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:o},this.magFilter=qn,this.minFilter=qn,this.wrapR=ra,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ou=class Ou{constructor(e,i,r,o,c,u,d,m,h,g,v,_,S,E,R,y){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,o,c,u,d,m,h,g,v,_,S,E,R,y)}set(e,i,r,o,c,u,d,m,h,g,v,_,S,E,R,y){const x=this.elements;return x[0]=e,x[4]=i,x[8]=r,x[12]=o,x[1]=c,x[5]=u,x[9]=d,x[13]=m,x[2]=h,x[6]=g,x[10]=v,x[14]=_,x[3]=S,x[7]=E,x[11]=R,x[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ou().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return this.determinantAffine()===0?(e.set(1,0,0),i.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const i=this.elements,r=e.elements,o=1/oo.setFromMatrixColumn(e,0).length(),c=1/oo.setFromMatrixColumn(e,1).length(),u=1/oo.setFromMatrixColumn(e,2).length();return i[0]=r[0]*o,i[1]=r[1]*o,i[2]=r[2]*o,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*u,i[9]=r[9]*u,i[10]=r[10]*u,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,o=e.y,c=e.z,u=Math.cos(r),d=Math.sin(r),m=Math.cos(o),h=Math.sin(o),g=Math.cos(c),v=Math.sin(c);if(e.order==="XYZ"){const _=u*g,S=u*v,E=d*g,R=d*v;i[0]=m*g,i[4]=-m*v,i[8]=h,i[1]=S+E*h,i[5]=_-R*h,i[9]=-d*m,i[2]=R-_*h,i[6]=E+S*h,i[10]=u*m}else if(e.order==="YXZ"){const _=m*g,S=m*v,E=h*g,R=h*v;i[0]=_+R*d,i[4]=E*d-S,i[8]=u*h,i[1]=u*v,i[5]=u*g,i[9]=-d,i[2]=S*d-E,i[6]=R+_*d,i[10]=u*m}else if(e.order==="ZXY"){const _=m*g,S=m*v,E=h*g,R=h*v;i[0]=_-R*d,i[4]=-u*v,i[8]=E+S*d,i[1]=S+E*d,i[5]=u*g,i[9]=R-_*d,i[2]=-u*h,i[6]=d,i[10]=u*m}else if(e.order==="ZYX"){const _=u*g,S=u*v,E=d*g,R=d*v;i[0]=m*g,i[4]=E*h-S,i[8]=_*h+R,i[1]=m*v,i[5]=R*h+_,i[9]=S*h-E,i[2]=-h,i[6]=d*m,i[10]=u*m}else if(e.order==="YZX"){const _=u*m,S=u*h,E=d*m,R=d*h;i[0]=m*g,i[4]=R-_*v,i[8]=E*v+S,i[1]=v,i[5]=u*g,i[9]=-d*g,i[2]=-h*g,i[6]=S*v+E,i[10]=_-R*v}else if(e.order==="XZY"){const _=u*m,S=u*h,E=d*m,R=d*h;i[0]=m*g,i[4]=-v,i[8]=h*g,i[1]=_*v+R,i[5]=u*g,i[9]=S*v-E,i[2]=E*v-S,i[6]=d*g,i[10]=R*v+_}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(DE,e,LE)}lookAt(e,i,r){const o=this.elements;return Ti.subVectors(e,i),Ti.lengthSq()===0&&(Ti.z=1),Ti.normalize(),Us.crossVectors(r,Ti),Us.lengthSq()===0&&(Math.abs(r.z)===1?Ti.x+=1e-4:Ti.z+=1e-4,Ti.normalize(),Us.crossVectors(r,Ti)),Us.normalize(),Kc.crossVectors(Ti,Us),o[0]=Us.x,o[4]=Kc.x,o[8]=Ti.x,o[1]=Us.y,o[5]=Kc.y,o[9]=Ti.y,o[2]=Us.z,o[6]=Kc.z,o[10]=Ti.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,o=i.elements,c=this.elements,u=r[0],d=r[4],m=r[8],h=r[12],g=r[1],v=r[5],_=r[9],S=r[13],E=r[2],R=r[6],y=r[10],x=r[14],F=r[3],I=r[7],w=r[11],O=r[15],L=o[0],B=o[4],A=o[8],N=o[12],Y=o[1],k=o[5],j=o[9],ue=o[13],fe=o[2],q=o[6],z=o[10],H=o[14],te=o[3],me=o[7],Se=o[11],U=o[15];return c[0]=u*L+d*Y+m*fe+h*te,c[4]=u*B+d*k+m*q+h*me,c[8]=u*A+d*j+m*z+h*Se,c[12]=u*N+d*ue+m*H+h*U,c[1]=g*L+v*Y+_*fe+S*te,c[5]=g*B+v*k+_*q+S*me,c[9]=g*A+v*j+_*z+S*Se,c[13]=g*N+v*ue+_*H+S*U,c[2]=E*L+R*Y+y*fe+x*te,c[6]=E*B+R*k+y*q+x*me,c[10]=E*A+R*j+y*z+x*Se,c[14]=E*N+R*ue+y*H+x*U,c[3]=F*L+I*Y+w*fe+O*te,c[7]=F*B+I*k+w*q+O*me,c[11]=F*A+I*j+w*z+O*Se,c[15]=F*N+I*ue+w*H+O*U,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],o=e[8],c=e[12],u=e[1],d=e[5],m=e[9],h=e[13],g=e[2],v=e[6],_=e[10],S=e[14],E=e[3],R=e[7],y=e[11],x=e[15],F=m*S-h*_,I=d*S-h*v,w=d*_-m*v,O=u*S-h*g,L=u*_-m*g,B=u*v-d*g;return i*(R*F-y*I+x*w)-r*(E*F-y*O+x*L)+o*(E*I-R*O+x*B)-c*(E*w-R*L+y*B)}determinantAffine(){const e=this.elements,i=e[0],r=e[4],o=e[8],c=e[1],u=e[5],d=e[9],m=e[2],h=e[6],g=e[10];return i*(u*g-d*h)-r*(c*g-d*m)+o*(c*h-u*m)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=i,o[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],o=e[2],c=e[3],u=e[4],d=e[5],m=e[6],h=e[7],g=e[8],v=e[9],_=e[10],S=e[11],E=e[12],R=e[13],y=e[14],x=e[15],F=i*d-r*u,I=i*m-o*u,w=i*h-c*u,O=r*m-o*d,L=r*h-c*d,B=o*h-c*m,A=g*R-v*E,N=g*y-_*E,Y=g*x-S*E,k=v*y-_*R,j=v*x-S*R,ue=_*x-S*y,fe=F*ue-I*j+w*k+O*Y-L*N+B*A;if(fe===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const q=1/fe;return e[0]=(d*ue-m*j+h*k)*q,e[1]=(o*j-r*ue-c*k)*q,e[2]=(R*B-y*L+x*O)*q,e[3]=(_*L-v*B-S*O)*q,e[4]=(m*Y-u*ue-h*N)*q,e[5]=(i*ue-o*Y+c*N)*q,e[6]=(y*w-E*B-x*I)*q,e[7]=(g*B-_*w+S*I)*q,e[8]=(u*j-d*Y+h*A)*q,e[9]=(r*Y-i*j-c*A)*q,e[10]=(E*L-R*w+x*F)*q,e[11]=(v*w-g*L-S*F)*q,e[12]=(d*N-u*k-m*A)*q,e[13]=(i*k-r*N+o*A)*q,e[14]=(R*I-E*O-y*F)*q,e[15]=(g*O-v*I+_*F)*q,this}scale(e){const i=this.elements,r=e.x,o=e.y,c=e.z;return i[0]*=r,i[4]*=o,i[8]*=c,i[1]*=r,i[5]*=o,i[9]*=c,i[2]*=r,i[6]*=o,i[10]*=c,i[3]*=r,i[7]*=o,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,o))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),o=Math.sin(i),c=1-r,u=e.x,d=e.y,m=e.z,h=c*u,g=c*d;return this.set(h*u+r,h*d-o*m,h*m+o*d,0,h*d+o*m,g*d+r,g*m-o*u,0,h*m-o*d,g*m+o*u,c*m*m+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,o,c,u){return this.set(1,r,c,0,e,1,u,0,i,o,1,0,0,0,0,1),this}compose(e,i,r){const o=this.elements,c=i._x,u=i._y,d=i._z,m=i._w,h=c+c,g=u+u,v=d+d,_=c*h,S=c*g,E=c*v,R=u*g,y=u*v,x=d*v,F=m*h,I=m*g,w=m*v,O=r.x,L=r.y,B=r.z;return o[0]=(1-(R+x))*O,o[1]=(S+w)*O,o[2]=(E-I)*O,o[3]=0,o[4]=(S-w)*L,o[5]=(1-(_+x))*L,o[6]=(y+F)*L,o[7]=0,o[8]=(E+I)*B,o[9]=(y-F)*B,o[10]=(1-(_+R))*B,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,i,r){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const c=this.determinantAffine();if(c===0)return r.set(1,1,1),i.identity(),this;let u=oo.set(o[0],o[1],o[2]).length();const d=oo.set(o[4],o[5],o[6]).length(),m=oo.set(o[8],o[9],o[10]).length();c<0&&(u=-u),na.copy(this);const h=1/u,g=1/d,v=1/m;return na.elements[0]*=h,na.elements[1]*=h,na.elements[2]*=h,na.elements[4]*=g,na.elements[5]*=g,na.elements[6]*=g,na.elements[8]*=v,na.elements[9]*=v,na.elements[10]*=v,i.setFromRotationMatrix(na),r.x=u,r.y=d,r.z=m,this}makePerspective(e,i,r,o,c,u,d=ya,m=!1){const h=this.elements,g=2*c/(i-e),v=2*c/(r-o),_=(i+e)/(i-e),S=(r+o)/(r-o);let E,R;if(m)E=c/(u-c),R=u*c/(u-c);else if(d===ya)E=-(u+c)/(u-c),R=-2*u*c/(u-c);else if(d===wu)E=-u/(u-c),R=-u*c/(u-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return h[0]=g,h[4]=0,h[8]=_,h[12]=0,h[1]=0,h[5]=v,h[9]=S,h[13]=0,h[2]=0,h[6]=0,h[10]=E,h[14]=R,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,i,r,o,c,u,d=ya,m=!1){const h=this.elements,g=2/(i-e),v=2/(r-o),_=-(i+e)/(i-e),S=-(r+o)/(r-o);let E,R;if(m)E=1/(u-c),R=u/(u-c);else if(d===ya)E=-2/(u-c),R=-(u+c)/(u-c);else if(d===wu)E=-1/(u-c),R=-c/(u-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return h[0]=g,h[4]=0,h[8]=0,h[12]=_,h[1]=0,h[5]=v,h[9]=0,h[13]=S,h[2]=0,h[6]=0,h[10]=E,h[14]=R,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let o=0;o<16;o++)if(i[o]!==r[o])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}};Ou.prototype.isMatrix4=!0;let bn=Ou;const oo=new ie,na=new bn,DE=new ie(0,0,0),LE=new ie(1,1,1),Us=new ie,Kc=new ie,Ti=new ie,K_=new bn,Q_=new Lo;class br{constructor(e=0,i=0,r=0,o=br.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,o=this._order){return this._x=e,this._y=i,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const o=e.elements,c=o[0],u=o[4],d=o[8],m=o[1],h=o[5],g=o[9],v=o[2],_=o[6],S=o[10];switch(i){case"XYZ":this._y=Math.asin(_t(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,S),this._z=Math.atan2(-u,c)):(this._x=Math.atan2(_,h),this._z=0);break;case"YXZ":this._x=Math.asin(-_t(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,S),this._z=Math.atan2(m,h)):(this._y=Math.atan2(-v,c),this._z=0);break;case"ZXY":this._x=Math.asin(_t(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-v,S),this._z=Math.atan2(-u,h)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-_t(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(_,S),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-u,h));break;case"YZX":this._z=Math.asin(_t(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,h),this._y=Math.atan2(-v,c)):(this._x=0,this._y=Math.atan2(d,S));break;case"XZY":this._z=Math.asin(-_t(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(_,h),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-g,S),this._y=0);break;default:ot("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return K_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(K_,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return Q_.setFromEuler(this),this.setFromQuaternion(Q_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}br.DEFAULT_ORDER="XYZ";class Rx{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let NE=0;const J_=new ie,lo=new Lo,qa=new bn,Qc=new ie,Sl=new ie,UE=new ie,OE=new Lo,$_=new ie(1,0,0),ev=new ie(0,1,0),tv=new ie(0,0,1),nv={type:"added"},PE={type:"removed"},co={type:"childadded",child:null},eh={type:"childremoved",child:null};class Ci extends Tr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:NE++}),this.uuid=Do(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ci.DEFAULT_UP.clone();const e=new ie,i=new br,r=new Lo,o=new ie(1,1,1);function c(){r.setFromEuler(i,!1)}function u(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new bn},normalMatrix:{value:new ft}}),this.matrix=new bn,this.matrixWorld=new bn,this.matrixAutoUpdate=Ci.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ci.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Rx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return lo.setFromAxisAngle(e,i),this.quaternion.multiply(lo),this}rotateOnWorldAxis(e,i){return lo.setFromAxisAngle(e,i),this.quaternion.premultiply(lo),this}rotateX(e){return this.rotateOnAxis($_,e)}rotateY(e){return this.rotateOnAxis(ev,e)}rotateZ(e){return this.rotateOnAxis(tv,e)}translateOnAxis(e,i){return J_.copy(e).applyQuaternion(this.quaternion),this.position.add(J_.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis($_,e)}translateY(e){return this.translateOnAxis(ev,e)}translateZ(e){return this.translateOnAxis(tv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(qa.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?Qc.copy(e):Qc.set(e,i,r);const o=this.parent;this.updateWorldMatrix(!0,!1),Sl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?qa.lookAt(Sl,Qc,this.up):qa.lookAt(Qc,Sl,this.up),this.quaternion.setFromRotationMatrix(qa),o&&(qa.extractRotation(o.matrixWorld),lo.setFromRotationMatrix(qa),this.quaternion.premultiply(lo.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(Dt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(nv),co.child=e,this.dispatchEvent(co),co.child=null):Dt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(PE),eh.child=e,this.dispatchEvent(eh),eh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),qa.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),qa.multiply(e.parent.matrixWorld)),e.applyMatrix4(qa),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(nv),co.child=e,this.dispatchEvent(co),co.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,o=this.children.length;r<o;r++){const u=this.children[r].getObjectByProperty(e,i);if(u!==void 0)return u}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const o=this.children;for(let c=0,u=o.length;c<u;c++)o[c].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sl,e,UE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sl,OE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const i=e.x,r=e.y,o=e.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*r-c[8]*o,c[13]+=r-c[1]*i-c[5]*r-c[9]*o,c[14]+=o-c[2]*i-c[6]*r-c[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i,r=!1){const o=this.parent;if(e===!0&&o!==null&&o.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),i===!0){const c=this.children;for(let u=0,d=c.length;u<d;u++)c[u].updateWorldMatrix(!1,!0,r)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),this.static!==!1&&(o.static=this.static),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(d=>({...d})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function c(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=c(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let h=0,g=m.length;h<g;h++){const v=m[h];c(e.shapes,v)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,h=this.material.length;m<h;m++)d.push(c(e.materials,this.material[m]));o.material=d}else o.material=c(e.materials,this.material);if(this.children.length>0){o.children=[];for(let d=0;d<this.children.length;d++)o.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];o.animations.push(c(e.animations,m))}}if(i){const d=u(e.geometries),m=u(e.materials),h=u(e.textures),g=u(e.images),v=u(e.shapes),_=u(e.skeletons),S=u(e.animations),E=u(e.nodes);d.length>0&&(r.geometries=d),m.length>0&&(r.materials=m),h.length>0&&(r.textures=h),g.length>0&&(r.images=g),v.length>0&&(r.shapes=v),_.length>0&&(r.skeletons=_),S.length>0&&(r.animations=S),E.length>0&&(r.nodes=E)}return r.object=o,r;function u(d){const m=[];for(const h in d){const g=d[h];delete g.metadata,m.push(g)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}Ci.DEFAULT_UP=new ie(0,1,0);Ci.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ci.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Rl extends Ci{constructor(){super(),this.isGroup=!0,this.type="Group"}}const IE={type:"move"};class th{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Rl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Rl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ie,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ie),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Rl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ie,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ie,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let o=null,c=null,u=null;const d=this._targetRay,m=this._grip,h=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(h&&e.hand){u=!0;for(const R of e.hand.values()){const y=i.getJointPose(R,r),x=this._getHandJoint(h,R);y!==null&&(x.matrix.fromArray(y.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=y.radius),x.visible=y!==null}const g=h.joints["index-finger-tip"],v=h.joints["thumb-tip"],_=g.position.distanceTo(v.position),S=.02,E=.005;h.inputState.pinching&&_>S+E?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&_<=S-E&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,r),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1,m.eventsEnabled&&m.dispatchEvent({type:"gripUpdated",data:e,target:this})));d!==null&&(o=i.getPose(e.targetRaySpace,r),o===null&&c!==null&&(o=c),o!==null&&(d.matrix.fromArray(o.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,o.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(o.linearVelocity)):d.hasLinearVelocity=!1,o.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(o.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(IE)))}return d!==null&&(d.visible=o!==null),m!==null&&(m.visible=c!==null),h!==null&&(h.visible=u!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new Rl;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}const Cx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Os={h:0,s:0,l:0},Jc={h:0,s:0,l:0};function nh(a,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?a+(e-a)*6*i:i<1/2?e:i<2/3?a+(e-a)*6*(2/3-i):a}class Ht{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=ei){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Rt.colorSpaceToWorking(this,i),this}setRGB(e,i,r,o=Rt.workingColorSpace){return this.r=e,this.g=i,this.b=r,Rt.colorSpaceToWorking(this,o),this}setHSL(e,i,r,o=Rt.workingColorSpace){if(e=Ip(e,1),i=_t(i,0,1),r=_t(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,u=2*r-c;this.r=nh(u,c,e+1/3),this.g=nh(u,c,e),this.b=nh(u,c,e-1/3)}return Rt.colorSpaceToWorking(this,o),this}setStyle(e,i=ei){function r(c){c!==void 0&&parseFloat(c)<1&&ot("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const u=o[1],d=o[2];switch(u){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:ot("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=o[1],u=c.length;if(u===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(u===6)return this.setHex(parseInt(c,16),i);ot("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=ei){const r=Cx[e.toLowerCase()];return r!==void 0?this.setHex(r,i):ot("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ts(e.r),this.g=ts(e.g),this.b=ts(e.b),this}copyLinearToSRGB(e){return this.r=Eo(e.r),this.g=Eo(e.g),this.b=Eo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ei){return Rt.workingToColorSpace($n.copy(this),e),Math.round(_t($n.r*255,0,255))*65536+Math.round(_t($n.g*255,0,255))*256+Math.round(_t($n.b*255,0,255))}getHexString(e=ei){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Rt.workingColorSpace){Rt.workingToColorSpace($n.copy(this),i);const r=$n.r,o=$n.g,c=$n.b,u=Math.max(r,o,c),d=Math.min(r,o,c);let m,h;const g=(d+u)/2;if(d===u)m=0,h=0;else{const v=u-d;switch(h=g<=.5?v/(u+d):v/(2-u-d),u){case r:m=(o-c)/v+(o<c?6:0);break;case o:m=(c-r)/v+2;break;case c:m=(r-o)/v+4;break}m/=6}return e.h=m,e.s=h,e.l=g,e}getRGB(e,i=Rt.workingColorSpace){return Rt.workingToColorSpace($n.copy(this),i),e.r=$n.r,e.g=$n.g,e.b=$n.b,e}getStyle(e=ei){Rt.workingToColorSpace($n.copy(this),e);const i=$n.r,r=$n.g,o=$n.b;return e!==ei?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,i,r){return this.getHSL(Os),this.setHSL(Os.h+e,Os.s+i,Os.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(Os),e.getHSL(Jc);const r=Ul(Os.h,Jc.h,i),o=Ul(Os.s,Jc.s,i),c=Ul(Os.l,Jc.l,i);return this.setHSL(r,o,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,o=this.b,c=e.elements;return this.r=c[0]*i+c[3]*r+c[6]*o,this.g=c[1]*i+c[4]*r+c[7]*o,this.b=c[2]*i+c[5]*r+c[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const $n=new Ht;Ht.NAMES=Cx;class FE extends Ci{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new br,this.environmentIntensity=1,this.environmentRotation=new br,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const ia=new ie,ja=new ie,ih=new ie,Za=new ie,uo=new ie,fo=new ie,iv=new ie,ah=new ie,sh=new ie,rh=new ie,oh=new Sn,lh=new Sn,ch=new Sn;class sa{constructor(e=new ie,i=new ie,r=new ie){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,o){o.subVectors(r,i),ia.subVectors(e,i),o.cross(ia);const c=o.lengthSq();return c>0?o.multiplyScalar(1/Math.sqrt(c)):o.set(0,0,0)}static getBarycoord(e,i,r,o,c){ia.subVectors(o,i),ja.subVectors(r,i),ih.subVectors(e,i);const u=ia.dot(ia),d=ia.dot(ja),m=ia.dot(ih),h=ja.dot(ja),g=ja.dot(ih),v=u*h-d*d;if(v===0)return c.set(0,0,0),null;const _=1/v,S=(h*m-d*g)*_,E=(u*g-d*m)*_;return c.set(1-S-E,E,S)}static containsPoint(e,i,r,o){return this.getBarycoord(e,i,r,o,Za)===null?!1:Za.x>=0&&Za.y>=0&&Za.x+Za.y<=1}static getInterpolation(e,i,r,o,c,u,d,m){return this.getBarycoord(e,i,r,o,Za)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,Za.x),m.addScaledVector(u,Za.y),m.addScaledVector(d,Za.z),m)}static getInterpolatedAttribute(e,i,r,o,c,u){return oh.setScalar(0),lh.setScalar(0),ch.setScalar(0),oh.fromBufferAttribute(e,i),lh.fromBufferAttribute(e,r),ch.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(oh,c.x),u.addScaledVector(lh,c.y),u.addScaledVector(ch,c.z),u}static isFrontFacing(e,i,r,o){return ia.subVectors(r,i),ja.subVectors(e,i),ia.cross(ja).dot(o)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,o){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,i,r,o){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ia.subVectors(this.c,this.b),ja.subVectors(this.a,this.b),ia.cross(ja).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return sa.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return sa.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,o,c){return sa.getInterpolation(e,this.a,this.b,this.c,i,r,o,c)}containsPoint(e){return sa.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return sa.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,o=this.b,c=this.c;let u,d;uo.subVectors(o,r),fo.subVectors(c,r),ah.subVectors(e,r);const m=uo.dot(ah),h=fo.dot(ah);if(m<=0&&h<=0)return i.copy(r);sh.subVectors(e,o);const g=uo.dot(sh),v=fo.dot(sh);if(g>=0&&v<=g)return i.copy(o);const _=m*v-g*h;if(_<=0&&m>=0&&g<=0)return u=m/(m-g),i.copy(r).addScaledVector(uo,u);rh.subVectors(e,c);const S=uo.dot(rh),E=fo.dot(rh);if(E>=0&&S<=E)return i.copy(c);const R=S*h-m*E;if(R<=0&&h>=0&&E<=0)return d=h/(h-E),i.copy(r).addScaledVector(fo,d);const y=g*E-S*v;if(y<=0&&v-g>=0&&S-E>=0)return iv.subVectors(c,o),d=(v-g)/(v-g+(S-E)),i.copy(o).addScaledVector(iv,d);const x=1/(y+R+_);return u=R*x,d=_*x,i.copy(r).addScaledVector(uo,u).addScaledVector(fo,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class zl{constructor(e=new ie(1/0,1/0,1/0),i=new ie(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(aa.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(aa.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=aa.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let u=0,d=c.count;u<d;u++)e.isMesh===!0?e.getVertexPosition(u,aa):aa.fromBufferAttribute(c,u),aa.applyMatrix4(e.matrixWorld),this.expandByPoint(aa);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),$c.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),$c.copy(r.boundingBox)),$c.applyMatrix4(e.matrixWorld),this.union($c)}const o=e.children;for(let c=0,u=o.length;c<u;c++)this.expandByObject(o[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,aa),aa.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ml),eu.subVectors(this.max,Ml),ho.subVectors(e.a,Ml),po.subVectors(e.b,Ml),mo.subVectors(e.c,Ml),Ps.subVectors(po,ho),Is.subVectors(mo,po),fr.subVectors(ho,mo);let i=[0,-Ps.z,Ps.y,0,-Is.z,Is.y,0,-fr.z,fr.y,Ps.z,0,-Ps.x,Is.z,0,-Is.x,fr.z,0,-fr.x,-Ps.y,Ps.x,0,-Is.y,Is.x,0,-fr.y,fr.x,0];return!uh(i,ho,po,mo,eu)||(i=[1,0,0,0,1,0,0,0,1],!uh(i,ho,po,mo,eu))?!1:(tu.crossVectors(Ps,Is),i=[tu.x,tu.y,tu.z],uh(i,ho,po,mo,eu))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,aa).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(aa).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ka[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ka[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ka[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ka[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ka[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ka[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ka[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ka[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ka),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ka=[new ie,new ie,new ie,new ie,new ie,new ie,new ie,new ie],aa=new ie,$c=new zl,ho=new ie,po=new ie,mo=new ie,Ps=new ie,Is=new ie,fr=new ie,Ml=new ie,eu=new ie,tu=new ie,dr=new ie;function uh(a,e,i,r,o){for(let c=0,u=a.length-3;c<=u;c+=3){dr.fromArray(a,c);const d=o.x*Math.abs(dr.x)+o.y*Math.abs(dr.y)+o.z*Math.abs(dr.z),m=e.dot(dr),h=i.dot(dr),g=r.dot(dr);if(Math.max(-Math.max(m,h,g),Math.min(m,h,g))>d)return!1}return!0}const Dn=new ie,nu=new Pt;let BE=0;class Ta extends Tr{constructor(e,i,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:BE++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=V_,this.updateRanges=[],this.gpuType=Ma,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let o=0,c=this.itemSize;o<c;o++)this.array[e+o]=i.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)nu.fromBufferAttribute(this,i),nu.applyMatrix3(e),this.setXY(i,nu.x,nu.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)Dn.fromBufferAttribute(this,i),Dn.applyMatrix3(e),this.setXYZ(i,Dn.x,Dn.y,Dn.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)Dn.fromBufferAttribute(this,i),Dn.applyMatrix4(e),this.setXYZ(i,Dn.x,Dn.y,Dn.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)Dn.fromBufferAttribute(this,i),Dn.applyNormalMatrix(e),this.setXYZ(i,Dn.x,Dn.y,Dn.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)Dn.fromBufferAttribute(this,i),Dn.transformDirection(e),this.setXYZ(i,Dn.x,Dn.y,Dn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=So(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=ii(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=So(i,this.array)),i}setX(e,i){return this.normalized&&(i=ii(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=So(i,this.array)),i}setY(e,i){return this.normalized&&(i=ii(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=So(i,this.array)),i}setZ(e,i){return this.normalized&&(i=ii(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=So(i,this.array)),i}setW(e,i){return this.normalized&&(i=ii(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=ii(i,this.array),r=ii(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,o){return e*=this.itemSize,this.normalized&&(i=ii(i,this.array),r=ii(r,this.array),o=ii(o,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,i,r,o,c){return e*=this.itemSize,this.normalized&&(i=ii(i,this.array),r=ii(r,this.array),o=ii(o,this.array),c=ii(c,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==V_&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class wx extends Ta{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class Dx extends Ta{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class Wi extends Ta{constructor(e,i,r){super(new Float32Array(e),i,r)}}const zE=new zl,yl=new ie,fh=new ie;class Bp{constructor(e=new ie,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):zE.setFromPoints(e).getCenter(r);let o=0;for(let c=0,u=e.length;c<u;c++)o=Math.max(o,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;yl.subVectors(e,this.center);const i=yl.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),o=(r-this.radius)*.5;this.center.addScaledVector(yl,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(fh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(yl.copy(e.center).add(fh)),this.expandByPoint(yl.copy(e.center).sub(fh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let HE=0;const Vi=new bn,dh=new Ci,go=new ie,Ai=new zl,El=new zl,Bn=new ie;class Yi extends Tr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:HE++}),this.uuid=Do(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(aE(e)?Dx:wx)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new ft().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Vi.makeRotationFromQuaternion(e),this.applyMatrix4(Vi),this}rotateX(e){return Vi.makeRotationX(e),this.applyMatrix4(Vi),this}rotateY(e){return Vi.makeRotationY(e),this.applyMatrix4(Vi),this}rotateZ(e){return Vi.makeRotationZ(e),this.applyMatrix4(Vi),this}translate(e,i,r){return Vi.makeTranslation(e,i,r),this.applyMatrix4(Vi),this}scale(e,i,r){return Vi.makeScale(e,i,r),this.applyMatrix4(Vi),this}lookAt(e){return dh.lookAt(e),dh.updateMatrix(),this.applyMatrix4(dh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(go).negate(),this.translate(go.x,go.y,go.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let o=0,c=e.length;o<c;o++){const u=e[o];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new Wi(r,3))}else{const r=Math.min(e.length,i.count);for(let o=0;o<r;o++){const c=e[o];i.setXYZ(o,c.x,c.y,c.z||0)}e.length>i.count&&ot("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zl);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Dt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ie(-1/0,-1/0,-1/0),new ie(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,o=i.length;r<o;r++){const c=i[r];Ai.setFromBufferAttribute(c),this.morphTargetsRelative?(Bn.addVectors(this.boundingBox.min,Ai.min),this.boundingBox.expandByPoint(Bn),Bn.addVectors(this.boundingBox.max,Ai.max),this.boundingBox.expandByPoint(Bn)):(this.boundingBox.expandByPoint(Ai.min),this.boundingBox.expandByPoint(Ai.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Dt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Bp);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Dt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ie,1/0);return}if(e){const r=this.boundingSphere.center;if(Ai.setFromBufferAttribute(e),i)for(let c=0,u=i.length;c<u;c++){const d=i[c];El.setFromBufferAttribute(d),this.morphTargetsRelative?(Bn.addVectors(Ai.min,El.min),Ai.expandByPoint(Bn),Bn.addVectors(Ai.max,El.max),Ai.expandByPoint(Bn)):(Ai.expandByPoint(El.min),Ai.expandByPoint(El.max))}Ai.getCenter(r);let o=0;for(let c=0,u=e.count;c<u;c++)Bn.fromBufferAttribute(e,c),o=Math.max(o,r.distanceToSquared(Bn));if(i)for(let c=0,u=i.length;c<u;c++){const d=i[c],m=this.morphTargetsRelative;for(let h=0,g=d.count;h<g;h++)Bn.fromBufferAttribute(d,h),m&&(go.fromBufferAttribute(e,h),Bn.add(go)),o=Math.max(o,r.distanceToSquared(Bn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Dt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Dt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,o=i.normal,c=i.uv;let u=this.getAttribute("tangent");(u===void 0||u.count!==r.count)&&(u=new Ta(new Float32Array(4*r.count),4),this.setAttribute("tangent",u));const d=[],m=[];for(let A=0;A<r.count;A++)d[A]=new ie,m[A]=new ie;const h=new ie,g=new ie,v=new ie,_=new Pt,S=new Pt,E=new Pt,R=new ie,y=new ie;function x(A,N,Y){h.fromBufferAttribute(r,A),g.fromBufferAttribute(r,N),v.fromBufferAttribute(r,Y),_.fromBufferAttribute(c,A),S.fromBufferAttribute(c,N),E.fromBufferAttribute(c,Y),g.sub(h),v.sub(h),S.sub(_),E.sub(_);const k=1/(S.x*E.y-E.x*S.y);isFinite(k)&&(R.copy(g).multiplyScalar(E.y).addScaledVector(v,-S.y).multiplyScalar(k),y.copy(v).multiplyScalar(S.x).addScaledVector(g,-E.x).multiplyScalar(k),d[A].add(R),d[N].add(R),d[Y].add(R),m[A].add(y),m[N].add(y),m[Y].add(y))}let F=this.groups;F.length===0&&(F=[{start:0,count:e.count}]);for(let A=0,N=F.length;A<N;++A){const Y=F[A],k=Y.start,j=Y.count;for(let ue=k,fe=k+j;ue<fe;ue+=3)x(e.getX(ue+0),e.getX(ue+1),e.getX(ue+2))}const I=new ie,w=new ie,O=new ie,L=new ie;function B(A){O.fromBufferAttribute(o,A),L.copy(O);const N=d[A];I.copy(N),I.sub(O.multiplyScalar(O.dot(N))).normalize(),w.crossVectors(L,N);const k=w.dot(m[A])<0?-1:1;u.setXYZW(A,I.x,I.y,I.z,k)}for(let A=0,N=F.length;A<N;++A){const Y=F[A],k=Y.start,j=Y.count;for(let ue=k,fe=k+j;ue<fe;ue+=3)B(e.getX(ue+0)),B(e.getX(ue+1)),B(e.getX(ue+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==i.count)r=new Ta(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let _=0,S=r.count;_<S;_++)r.setXYZ(_,0,0,0);const o=new ie,c=new ie,u=new ie,d=new ie,m=new ie,h=new ie,g=new ie,v=new ie;if(e)for(let _=0,S=e.count;_<S;_+=3){const E=e.getX(_+0),R=e.getX(_+1),y=e.getX(_+2);o.fromBufferAttribute(i,E),c.fromBufferAttribute(i,R),u.fromBufferAttribute(i,y),g.subVectors(u,c),v.subVectors(o,c),g.cross(v),d.fromBufferAttribute(r,E),m.fromBufferAttribute(r,R),h.fromBufferAttribute(r,y),d.add(g),m.add(g),h.add(g),r.setXYZ(E,d.x,d.y,d.z),r.setXYZ(R,m.x,m.y,m.z),r.setXYZ(y,h.x,h.y,h.z)}else for(let _=0,S=i.count;_<S;_+=3)o.fromBufferAttribute(i,_+0),c.fromBufferAttribute(i,_+1),u.fromBufferAttribute(i,_+2),g.subVectors(u,c),v.subVectors(o,c),g.cross(v),r.setXYZ(_+0,g.x,g.y,g.z),r.setXYZ(_+1,g.x,g.y,g.z),r.setXYZ(_+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)Bn.fromBufferAttribute(e,i),Bn.normalize(),e.setXYZ(i,Bn.x,Bn.y,Bn.z)}toNonIndexed(){function e(d,m){const h=d.array,g=d.itemSize,v=d.normalized,_=new h.constructor(m.length*g);let S=0,E=0;for(let R=0,y=m.length;R<y;R++){d.isInterleavedBufferAttribute?S=m[R]*d.data.stride+d.offset:S=m[R]*g;for(let x=0;x<g;x++)_[E++]=h[S++]}return new Ta(_,g,v)}if(this.index===null)return ot("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Yi,r=this.index.array,o=this.attributes;for(const d in o){const m=o[d],h=e(m,r);i.setAttribute(d,h)}const c=this.morphAttributes;for(const d in c){const m=[],h=c[d];for(let g=0,v=h.length;g<v;g++){const _=h[g],S=e(_,r);m.push(S)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let d=0,m=u.length;d<m;d++){const h=u[d];i.addGroup(h.start,h.count,h.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const m=this.parameters;for(const h in m)m[h]!==void 0&&(e[h]=m[h]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const h=r[m];e.data.attributes[m]=h.toJSON(e.data)}const o={};let c=!1;for(const m in this.morphAttributes){const h=this.morphAttributes[m],g=[];for(let v=0,_=h.length;v<_;v++){const S=h[v];g.push(S.toJSON(e.data))}g.length>0&&(o[m]=g,c=!0)}c&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const h in o){const g=o[h];this.setAttribute(h,g.clone(i))}const c=e.morphAttributes;for(const h in c){const g=[],v=c[h];for(let _=0,S=v.length;_<S;_++)g.push(v[_].clone(i));this.morphAttributes[h]=g}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let h=0,g=u.length;h<g;h++){const v=u[h];this.addGroup(v.start,v.count,v.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let GE=0;class Iu extends Tr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:GE++}),this.uuid=Do(),this.name="",this.type="Material",this.blending=Mo,this.side=ns,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ph,this.blendDst=Ih,this.blendEquation=vr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ht(0,0,0),this.blendAlpha=0,this.depthFunc=Ao,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=G_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=so,this.stencilZFail=so,this.stencilZPass=so,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){ot(`Material: parameter '${i}' has value of undefined.`);continue}const o=this[i];if(o===void 0){ot(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector2&&r&&r.isVector2||o&&o.isEuler&&r&&r.isEuler||o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Mo&&(r.blending=this.blending),this.side!==ns&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Ph&&(r.blendSrc=this.blendSrc),this.blendDst!==Ih&&(r.blendDst=this.blendDst),this.blendEquation!==vr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Ao&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==G_&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==so&&(r.stencilFail=this.stencilFail),this.stencilZFail!==so&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==so&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(c){const u=[];for(const d in c){const m=c[d];delete m.metadata,u.push(m)}return u}if(i){const c=o(e.textures),u=o(e.images);c.length>0&&(r.textures=c),u.length>0&&(r.images=u)}return r}fromJSON(e,i){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ht().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=i[e.map]||null),e.matcap!==void 0&&(this.matcap=i[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=i[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=i[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=i[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),this.normalScale=new Pt().fromArray(r)}return e.displacementMap!==void 0&&(this.displacementMap=i[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=i[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=i[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=i[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=i[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=i[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=i[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=i[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=i[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=i[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=i[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=i[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=i[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=i[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Pt().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=i[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=i[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=i[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=i[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=i[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=i[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=i[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const o=i.length;r=new Array(o);for(let c=0;c!==o;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Qa=new ie,hh=new ie,iu=new ie,Fs=new ie,ph=new ie,au=new ie,mh=new ie;class VE{constructor(e=new ie,i=new ie(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Qa)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=Qa.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(Qa.copy(this.origin).addScaledVector(this.direction,i),Qa.distanceToSquared(e))}distanceSqToSegment(e,i,r,o){hh.copy(e).add(i).multiplyScalar(.5),iu.copy(i).sub(e).normalize(),Fs.copy(this.origin).sub(hh);const c=e.distanceTo(i)*.5,u=-this.direction.dot(iu),d=Fs.dot(this.direction),m=-Fs.dot(iu),h=Fs.lengthSq(),g=Math.abs(1-u*u);let v,_,S,E;if(g>0)if(v=u*m-d,_=u*d-m,E=c*g,v>=0)if(_>=-E)if(_<=E){const R=1/g;v*=R,_*=R,S=v*(v+u*_+2*d)+_*(u*v+_+2*m)+h}else _=c,v=Math.max(0,-(u*_+d)),S=-v*v+_*(_+2*m)+h;else _=-c,v=Math.max(0,-(u*_+d)),S=-v*v+_*(_+2*m)+h;else _<=-E?(v=Math.max(0,-(-u*c+d)),_=v>0?-c:Math.min(Math.max(-c,-m),c),S=-v*v+_*(_+2*m)+h):_<=E?(v=0,_=Math.min(Math.max(-c,-m),c),S=_*(_+2*m)+h):(v=Math.max(0,-(u*c+d)),_=v>0?c:Math.min(Math.max(-c,-m),c),S=-v*v+_*(_+2*m)+h);else _=u>0?-c:c,v=Math.max(0,-(u*_+d)),S=-v*v+_*(_+2*m)+h;return r&&r.copy(this.origin).addScaledVector(this.direction,v),o&&o.copy(hh).addScaledVector(iu,_),S}intersectSphere(e,i){Qa.subVectors(e.center,this.origin);const r=Qa.dot(this.direction),o=Qa.dot(Qa)-r*r,c=e.radius*e.radius;if(o>c)return null;const u=Math.sqrt(c-o),d=r-u,m=r+u;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,o,c,u,d,m;const h=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,_=this.origin;return h>=0?(r=(e.min.x-_.x)*h,o=(e.max.x-_.x)*h):(r=(e.max.x-_.x)*h,o=(e.min.x-_.x)*h),g>=0?(c=(e.min.y-_.y)*g,u=(e.max.y-_.y)*g):(c=(e.max.y-_.y)*g,u=(e.min.y-_.y)*g),r>u||c>o||((c>r||isNaN(r))&&(r=c),(u<o||isNaN(o))&&(o=u),v>=0?(d=(e.min.z-_.z)*v,m=(e.max.z-_.z)*v):(d=(e.max.z-_.z)*v,m=(e.min.z-_.z)*v),r>m||d>o)||((d>r||r!==r)&&(r=d),(m<o||o!==o)&&(o=m),o<0)?null:this.at(r>=0?r:o,i)}intersectsBox(e){return this.intersectBox(e,Qa)!==null}intersectTriangle(e,i,r,o,c){ph.subVectors(i,e),au.subVectors(r,e),mh.crossVectors(ph,au);let u=this.direction.dot(mh),d;if(u>0){if(o)return null;d=1}else if(u<0)d=-1,u=-u;else return null;Fs.subVectors(this.origin,e);const m=d*this.direction.dot(au.crossVectors(Fs,au));if(m<0)return null;const h=d*this.direction.dot(ph.cross(Fs));if(h<0||m+h>u)return null;const g=-d*Fs.dot(mh);return g<0?null:this.at(g/u,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Lu extends Iu{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new br,this.combine=cx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const av=new bn,hr=new VE,su=new Bp,sv=new ie,ru=new ie,ou=new ie,lu=new ie,gh=new ie,cu=new ie,rv=new ie,uu=new ie;class Ri extends Ci{constructor(e=new Yi,i=new Lu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const o=i[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const d=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(e,i){const r=this.geometry,o=r.attributes.position,c=r.morphAttributes.position,u=r.morphTargetsRelative;i.fromBufferAttribute(o,e);const d=this.morphTargetInfluences;if(c&&d){cu.set(0,0,0);for(let m=0,h=c.length;m<h;m++){const g=d[m],v=c[m];g!==0&&(gh.fromBufferAttribute(v,e),u?cu.addScaledVector(gh,g):cu.addScaledVector(gh.sub(i),g))}i.add(cu)}return i}raycast(e,i){const r=this.geometry,o=this.material,c=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),su.copy(r.boundingSphere),su.applyMatrix4(c),hr.copy(e.ray).recast(e.near),!(su.containsPoint(hr.origin)===!1&&(hr.intersectSphere(su,sv)===null||hr.origin.distanceToSquared(sv)>(e.far-e.near)**2))&&(av.copy(c).invert(),hr.copy(e.ray).applyMatrix4(av),!(r.boundingBox!==null&&hr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,hr)))}_computeIntersections(e,i,r){let o;const c=this.geometry,u=this.material,d=c.index,m=c.attributes.position,h=c.attributes.uv,g=c.attributes.uv1,v=c.attributes.normal,_=c.groups,S=c.drawRange;if(d!==null)if(Array.isArray(u))for(let E=0,R=_.length;E<R;E++){const y=_[E],x=u[y.materialIndex],F=Math.max(y.start,S.start),I=Math.min(d.count,Math.min(y.start+y.count,S.start+S.count));for(let w=F,O=I;w<O;w+=3){const L=d.getX(w),B=d.getX(w+1),A=d.getX(w+2);o=fu(this,x,e,r,h,g,v,L,B,A),o&&(o.faceIndex=Math.floor(w/3),o.face.materialIndex=y.materialIndex,i.push(o))}}else{const E=Math.max(0,S.start),R=Math.min(d.count,S.start+S.count);for(let y=E,x=R;y<x;y+=3){const F=d.getX(y),I=d.getX(y+1),w=d.getX(y+2);o=fu(this,u,e,r,h,g,v,F,I,w),o&&(o.faceIndex=Math.floor(y/3),i.push(o))}}else if(m!==void 0)if(Array.isArray(u))for(let E=0,R=_.length;E<R;E++){const y=_[E],x=u[y.materialIndex],F=Math.max(y.start,S.start),I=Math.min(m.count,Math.min(y.start+y.count,S.start+S.count));for(let w=F,O=I;w<O;w+=3){const L=w,B=w+1,A=w+2;o=fu(this,x,e,r,h,g,v,L,B,A),o&&(o.faceIndex=Math.floor(w/3),o.face.materialIndex=y.materialIndex,i.push(o))}}else{const E=Math.max(0,S.start),R=Math.min(m.count,S.start+S.count);for(let y=E,x=R;y<x;y+=3){const F=y,I=y+1,w=y+2;o=fu(this,u,e,r,h,g,v,F,I,w),o&&(o.faceIndex=Math.floor(y/3),i.push(o))}}}}function kE(a,e,i,r,o,c,u,d){let m;if(e.side===pi?m=r.intersectTriangle(u,c,o,!0,d):m=r.intersectTriangle(o,c,u,e.side===ns,d),m===null)return null;uu.copy(d),uu.applyMatrix4(a.matrixWorld);const h=i.ray.origin.distanceTo(uu);return h<i.near||h>i.far?null:{distance:h,point:uu.clone(),object:a}}function fu(a,e,i,r,o,c,u,d,m,h){a.getVertexPosition(d,ru),a.getVertexPosition(m,ou),a.getVertexPosition(h,lu);const g=kE(a,e,i,r,ru,ou,lu,rv);if(g){const v=new ie;sa.getBarycoord(rv,ru,ou,lu,v),o&&(g.uv=sa.getInterpolatedAttribute(o,d,m,h,v,new Pt)),c&&(g.uv1=sa.getInterpolatedAttribute(c,d,m,h,v,new Pt)),u&&(g.normal=sa.getInterpolatedAttribute(u,d,m,h,v,new ie),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const _={a:d,b:m,c:h,normal:new ie,materialIndex:0};sa.getNormal(ru,ou,lu,_.normal),g.face=_,g.barycoord=v}return g}class XE extends jn{constructor(e=null,i=1,r=1,o,c,u,d,m,h=qn,g=qn,v,_){super(null,u,d,m,h,g,o,c,v,_),this.isDataTexture=!0,this.image={data:e,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const _h=new ie,WE=new ie,YE=new ft;class gr{constructor(e=new ie(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,o){return this.normal.set(e,i,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const o=_h.subVectors(r,i).cross(WE.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i,r=!0){const o=e.delta(_h),c=this.normal.dot(o);if(c===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/c;return r===!0&&(u<0||u>1)?null:i.copy(e.start).addScaledVector(o,u)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||YE.getNormalMatrix(e),o=this.coplanarPoint(_h).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const pr=new Bp,qE=new Pt(.5,.5),du=new ie;class Lx{constructor(e=new gr,i=new gr,r=new gr,o=new gr,c=new gr,u=new gr){this.planes=[e,i,r,o,c,u]}set(e,i,r,o,c,u){const d=this.planes;return d[0].copy(e),d[1].copy(i),d[2].copy(r),d[3].copy(o),d[4].copy(c),d[5].copy(u),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=ya,r=!1){const o=this.planes,c=e.elements,u=c[0],d=c[1],m=c[2],h=c[3],g=c[4],v=c[5],_=c[6],S=c[7],E=c[8],R=c[9],y=c[10],x=c[11],F=c[12],I=c[13],w=c[14],O=c[15];if(o[0].setComponents(h-u,S-g,x-E,O-F).normalize(),o[1].setComponents(h+u,S+g,x+E,O+F).normalize(),o[2].setComponents(h+d,S+v,x+R,O+I).normalize(),o[3].setComponents(h-d,S-v,x-R,O-I).normalize(),r)o[4].setComponents(m,_,y,w).normalize(),o[5].setComponents(h-m,S-_,x-y,O-w).normalize();else if(o[4].setComponents(h-m,S-_,x-y,O-w).normalize(),i===ya)o[5].setComponents(h+m,S+_,x+y,O+w).normalize();else if(i===wu)o[5].setComponents(m,_,y,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),pr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),pr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(pr)}intersectsSprite(e){pr.center.set(0,0,0);const i=qE.distanceTo(e.center);return pr.radius=.7071067811865476+i,pr.applyMatrix4(e.matrixWorld),this.intersectsSphere(pr)}intersectsSphere(e){const i=this.planes,r=e.center,o=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const o=i[r];if(du.x=o.normal.x>0?e.max.x:e.min.x,du.y=o.normal.y>0?e.max.y:e.min.y,du.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(du)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class jE extends jn{constructor(e,i,r,o,c=hn,u=hn,d,m,h){super(e,i,r,o,c,u,d,m,h),this.isVideoTexture=!0,this.generateMipmaps=!1,this._requestVideoFrameCallbackId=0;const g=this;function v(){g.needsUpdate=!0,g._requestVideoFrameCallbackId=e.requestVideoFrameCallback(v)}"requestVideoFrameCallback"in e&&(this._requestVideoFrameCallbackId=e.requestVideoFrameCallback(v))}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}dispose(){this._requestVideoFrameCallbackId!==0&&(this.source.data.cancelVideoFrameCallback(this._requestVideoFrameCallbackId),this._requestVideoFrameCallbackId=0),super.dispose()}}class Nx extends jn{constructor(e=[],i=yr,r,o,c,u,d,m,h,g){super(e,i,r,o,c,u,d,m,h,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ux extends jn{constructor(e,i,r,o,c,u,d,m,h){super(e,i,r,o,c,u,d,m,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Co extends jn{constructor(e,i,r=Aa,o,c,u,d=qn,m=qn,h,g=as,v=1){if(g!==as&&g!==Mr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const _={width:e,height:i,depth:v};super(_,o,c,u,d,m,g,r,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Fp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class ZE extends Co{constructor(e,i=Aa,r=yr,o,c,u=qn,d=qn,m,h=as){const g={width:e,height:e,depth:1},v=[g,g,g,g,g,g];super(e,e,i,r,o,c,u,d,m,h),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Ox extends jn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Hl extends Yi{constructor(e=1,i=1,r=1,o=1,c=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:o,heightSegments:c,depthSegments:u};const d=this;o=Math.floor(o),c=Math.floor(c),u=Math.floor(u);const m=[],h=[],g=[],v=[];let _=0,S=0;E("z","y","x",-1,-1,r,i,e,u,c,0),E("z","y","x",1,-1,r,i,-e,u,c,1),E("x","z","y",1,1,e,r,i,o,u,2),E("x","z","y",1,-1,e,r,-i,o,u,3),E("x","y","z",1,-1,e,i,r,o,c,4),E("x","y","z",-1,-1,e,i,-r,o,c,5),this.setIndex(m),this.setAttribute("position",new Wi(h,3)),this.setAttribute("normal",new Wi(g,3)),this.setAttribute("uv",new Wi(v,2));function E(R,y,x,F,I,w,O,L,B,A,N){const Y=w/B,k=O/A,j=w/2,ue=O/2,fe=L/2,q=B+1,z=A+1;let H=0,te=0;const me=new ie;for(let Se=0;Se<z;Se++){const U=Se*k-ue;for(let K=0;K<q;K++){const be=K*Y-j;me[R]=be*F,me[y]=U*I,me[x]=fe,h.push(me.x,me.y,me.z),me[R]=0,me[y]=0,me[x]=L>0?1:-1,g.push(me.x,me.y,me.z),v.push(K/B),v.push(1-Se/A),H+=1}}for(let Se=0;Se<A;Se++)for(let U=0;U<B;U++){const K=_+U+q*Se,be=_+U+q*(Se+1),Ae=_+(U+1)+q*(Se+1),Ce=_+(U+1)+q*Se;m.push(K,be,Ce),m.push(be,Ae,Ce),te+=6}d.addGroup(S,te,N),S+=te,_+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class KE{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){ot("Curve: .getPoint() not implemented.")}getPointAt(e,i){const r=this.getUtoTmapping(e);return this.getPoint(r,i)}getPoints(e=5){const i=[];for(let r=0;r<=e;r++)i.push(this.getPoint(r/e));return i}getSpacedPoints(e=5){const i=[];for(let r=0;r<=e;r++)i.push(this.getPointAt(r/e));return i}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const i=[];let r,o=this.getPoint(0),c=0;i.push(0);for(let u=1;u<=e;u++)r=this.getPoint(u/e),c+=r.distanceTo(o),i.push(c),o=r;return this.cacheArcLengths=i,i}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,i=null){const r=this.getLengths();let o=0;const c=r.length;let u;i?u=i:u=e*r[c-1];let d=0,m=c-1,h;for(;d<=m;)if(o=Math.floor(d+(m-d)/2),h=r[o]-u,h<0)d=o+1;else if(h>0)m=o-1;else{m=o;break}if(o=m,r[o]===u)return o/(c-1);const g=r[o],_=r[o+1]-g,S=(u-g)/_;return(o+S)/(c-1)}getTangent(e,i){let o=e-1e-4,c=e+1e-4;o<0&&(o=0),c>1&&(c=1);const u=this.getPoint(o),d=this.getPoint(c),m=i||(u.isVector2?new Pt:new ie);return m.copy(d).sub(u).normalize(),m}getTangentAt(e,i){const r=this.getUtoTmapping(e);return this.getTangent(r,i)}computeFrenetFrames(e,i=!1){const r=new ie,o=[],c=[],u=[],d=new ie,m=new bn;for(let S=0;S<=e;S++){const E=S/e;o[S]=this.getTangentAt(E,new ie)}c[0]=new ie,u[0]=new ie;let h=Number.MAX_VALUE;const g=Math.abs(o[0].x),v=Math.abs(o[0].y),_=Math.abs(o[0].z);g<=h&&(h=g,r.set(1,0,0)),v<=h&&(h=v,r.set(0,1,0)),_<=h&&r.set(0,0,1),d.crossVectors(o[0],r).normalize(),c[0].crossVectors(o[0],d),u[0].crossVectors(o[0],c[0]);for(let S=1;S<=e;S++){if(c[S]=c[S-1].clone(),u[S]=u[S-1].clone(),d.crossVectors(o[S-1],o[S]),d.length()>Number.EPSILON){d.normalize();const E=Math.acos(_t(o[S-1].dot(o[S]),-1,1));c[S].applyMatrix4(m.makeRotationAxis(d,E))}u[S].crossVectors(o[S],c[S])}if(i===!0){let S=Math.acos(_t(c[0].dot(c[e]),-1,1));S/=e,o[0].dot(d.crossVectors(c[0],c[e]))>0&&(S=-S);for(let E=1;E<=e;E++)c[E].applyMatrix4(m.makeRotationAxis(o[E],S*E)),u[E].crossVectors(o[E],c[E])}return{tangents:o,normals:c,binormals:u}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}function zp(){let a=0,e=0,i=0,r=0;function o(c,u,d,m){a=c,e=d,i=-3*c+3*u-2*d-m,r=2*c-2*u+d+m}return{initCatmullRom:function(c,u,d,m,h){o(u,d,h*(d-c),h*(m-u))},initNonuniformCatmullRom:function(c,u,d,m,h,g,v){let _=(u-c)/h-(d-c)/(h+g)+(d-u)/g,S=(d-u)/g-(m-u)/(g+v)+(m-d)/v;_*=g,S*=g,o(u,d,_,S)},calc:function(c){const u=c*c,d=u*c;return a+e*c+i*u+r*d}}}const ov=new ie,lv=new ie,vh=new zp,xh=new zp,Sh=new zp;class QE extends KE{constructor(e=[],i=!1,r="centripetal",o=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=i,this.curveType=r,this.tension=o}getPoint(e,i=new ie){const r=i,o=this.points,c=o.length,u=(c-(this.closed?0:1))*e;let d=Math.floor(u),m=u-d;this.closed?d+=d>0?0:(Math.floor(Math.abs(d)/c)+1)*c:m===0&&d===c-1&&(d=c-2,m=1);let h,g;this.closed||d>0?h=o[(d-1)%c]:(lv.subVectors(o[0],o[1]).add(o[0]),h=lv);const v=o[d%c],_=o[(d+1)%c];if(this.closed||d+2<c?g=o[(d+2)%c]:(ov.subVectors(o[c-1],o[c-2]).add(o[c-1]),g=ov),this.curveType==="centripetal"||this.curveType==="chordal"){const S=this.curveType==="chordal"?.5:.25;let E=Math.pow(h.distanceToSquared(v),S),R=Math.pow(v.distanceToSquared(_),S),y=Math.pow(_.distanceToSquared(g),S);R<1e-4&&(R=1),E<1e-4&&(E=R),y<1e-4&&(y=R),vh.initNonuniformCatmullRom(h.x,v.x,_.x,g.x,E,R,y),xh.initNonuniformCatmullRom(h.y,v.y,_.y,g.y,E,R,y),Sh.initNonuniformCatmullRom(h.z,v.z,_.z,g.z,E,R,y)}else this.curveType==="catmullrom"&&(vh.initCatmullRom(h.x,v.x,_.x,g.x,this.tension),xh.initCatmullRom(h.y,v.y,_.y,g.y,this.tension),Sh.initCatmullRom(h.z,v.z,_.z,g.z,this.tension));return r.set(vh.calc(m),xh.calc(m),Sh.calc(m)),r}copy(e){super.copy(e),this.points=[];for(let i=0,r=e.points.length;i<r;i++){const o=e.points[i];this.points.push(o.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let i=0,r=this.points.length;i<r;i++){const o=this.points[i];e.points.push(o.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let i=0,r=e.points.length;i<r;i++){const o=e.points[i];this.points.push(new ie().fromArray(o))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}class Gs extends Yi{constructor(e=1,i=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:o};const c=e/2,u=i/2,d=Math.floor(r),m=Math.floor(o),h=d+1,g=m+1,v=e/d,_=i/m,S=[],E=[],R=[],y=[];for(let x=0;x<g;x++){const F=x*_-u;for(let I=0;I<h;I++){const w=I*v-c;E.push(w,-F,0),R.push(0,0,1),y.push(I/d),y.push(1-x/m)}}for(let x=0;x<m;x++)for(let F=0;F<d;F++){const I=F+h*x,w=F+h*(x+1),O=F+1+h*(x+1),L=F+1+h*x;S.push(I,w,L),S.push(w,O,L)}this.setIndex(S),this.setAttribute("position",new Wi(E,3)),this.setAttribute("normal",new Wi(R,3)),this.setAttribute("uv",new Wi(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gs(e.width,e.height,e.widthSegments,e.heightSegments)}}function wo(a){const e={};for(const i in a){e[i]={};for(const r in a[i]){const o=a[i][r];if(cv(o))o.isRenderTargetTexture?(ot("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=o.clone();else if(Array.isArray(o))if(cv(o[0])){const c=[];for(let u=0,d=o.length;u<d;u++)c[u]=o[u].clone();e[i][r]=c}else e[i][r]=o.slice();else e[i][r]=o}}return e}function ai(a){const e={};for(let i=0;i<a.length;i++){const r=wo(a[i]);for(const o in r)e[o]=r[o]}return e}function cv(a){return a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)}function JE(a){const e=[];for(let i=0;i<a.length;i++)e.push(a[i].clone());return e}function Px(a){const e=a.getRenderTarget();return e===null?a.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Rt.workingColorSpace}const $E={clone:wo,merge:ai};var eb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,tb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class qi extends Iu{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=eb,this.fragmentShader=tb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=wo(e.uniforms),this.uniformsGroups=JE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?i.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?i.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?i.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?i.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?i.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?i.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?i.uniforms[o]={type:"m4",value:u.toArray()}:i.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}fromJSON(e,i){if(super.fromJSON(e,i),e.uniforms!==void 0)for(const r in e.uniforms){const o=e.uniforms[r];switch(this.uniforms[r]={},o.type){case"t":this.uniforms[r].value=i[o.value]||null;break;case"c":this.uniforms[r].value=new Ht().setHex(o.value);break;case"v2":this.uniforms[r].value=new Pt().fromArray(o.value);break;case"v3":this.uniforms[r].value=new ie().fromArray(o.value);break;case"v4":this.uniforms[r].value=new Sn().fromArray(o.value);break;case"m3":this.uniforms[r].value=new ft().fromArray(o.value);break;case"m4":this.uniforms[r].value=new bn().fromArray(o.value);break;default:this.uniforms[r].value=o.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)this.extensions[r]=e.extensions[r];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class nb extends qi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ib extends Iu{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ky,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ab extends Iu{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const hu=new ie,pu=new Lo,_a=new ie;class Ix extends Ci{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new bn,this.projectionMatrix=new bn,this.projectionMatrixInverse=new bn,this.coordinateSystem=ya,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(hu,pu,_a),_a.x===1&&_a.y===1&&_a.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(hu,pu,_a.set(1,1,1)).invert()}updateWorldMatrix(e,i,r=!1){super.updateWorldMatrix(e,i,r),this.matrixWorld.decompose(hu,pu,_a),_a.x===1&&_a.y===1&&_a.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(hu,pu,_a.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Bs=new ie,uv=new Pt,fv=new Pt;class ki extends Ix{constructor(e=50,i=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Fl*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Nl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Fl*2*Math.atan(Math.tan(Nl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){Bs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Bs.x,Bs.y).multiplyScalar(-e/Bs.z),Bs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Bs.x,Bs.y).multiplyScalar(-e/Bs.z)}getViewSize(e,i){return this.getViewBounds(e,uv,fv),i.subVectors(fv,uv)}setViewOffset(e,i,r,o,c,u){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Nl*.5*this.fov)/this.zoom,r=2*i,o=this.aspect*r,c=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const m=u.fullWidth,h=u.fullHeight;c+=u.offsetX*o/m,i-=u.offsetY*r/h,o*=u.width/m,r*=u.height/h}const d=this.filmOffset;d!==0&&(c+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+o,i,i-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class Fx extends Ix{constructor(e=-1,i=1,r=1,o=-1,c=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=o,this.near=c,this.far=u,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,o,c,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let c=r-e,u=r+e,d=o+i,m=o-i;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=h*this.view.offsetX,u=c+h*this.view.width,d-=g*this.view.offsetY,m=d-g*this.view.height}this.projectionMatrix.makeOrthographic(c,u,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const _o=-90,vo=1;class sb extends Ci{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new ki(_o,vo,e,i);o.layers=this.layers,this.add(o);const c=new ki(_o,vo,e,i);c.layers=this.layers,this.add(c);const u=new ki(_o,vo,e,i);u.layers=this.layers,this.add(u);const d=new ki(_o,vo,e,i);d.layers=this.layers,this.add(d);const m=new ki(_o,vo,e,i);m.layers=this.layers,this.add(m);const h=new ki(_o,vo,e,i);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,o,c,u,d,m]=i;for(const h of i)this.remove(h);if(e===ya)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===wu)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of i)this.add(h),h.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,u,d,m,h,g]=this.children,v=e.getRenderTarget(),_=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const R=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let y=!1;e.isWebGLRenderer===!0?y=e.state.buffers.depth.getReversed():y=e.reversedDepthBuffer,e.setRenderTarget(r,0,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,c),e.setRenderTarget(r,1,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,u),e.setRenderTarget(r,2,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,d),e.setRenderTarget(r,3,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,m),e.setRenderTarget(r,4,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,h),r.texture.generateMipmaps=R,e.setRenderTarget(r,5,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,g),e.setRenderTarget(v,_,S),e.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class rb extends ki{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Kp=class Kp{constructor(e,i,r,o){this.elements=[1,0,0,1],e!==void 0&&this.set(e,i,r,o)}identity(){return this.set(1,0,0,1),this}fromArray(e,i=0){for(let r=0;r<4;r++)this.elements[r]=e[r+i];return this}set(e,i,r,o){const c=this.elements;return c[0]=e,c[2]=i,c[1]=r,c[3]=o,this}};Kp.prototype.isMatrix2=!0;let dv=Kp;function hv(a,e,i,r){const o=ob(r);switch(i){case yx:return a*e;case bx:return a*e/o.components*o.byteLength;case Lp:return a*e/o.components*o.byteLength;case Er:return a*e*2/o.components*o.byteLength;case Np:return a*e*2/o.components*o.byteLength;case Ex:return a*e*3/o.components*o.byteLength;case oa:return a*e*4/o.components*o.byteLength;case Up:return a*e*4/o.components*o.byteLength;case xu:case Su:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case Mu:case yu:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case qh:case Zh:return Math.max(a,16)*Math.max(e,8)/4;case Yh:case jh:return Math.max(a,8)*Math.max(e,8)/2;case Kh:case Qh:case $h:case ep:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case Jh:case Tu:case tp:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case np:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case ip:return Math.floor((a+4)/5)*Math.floor((e+3)/4)*16;case ap:return Math.floor((a+4)/5)*Math.floor((e+4)/5)*16;case sp:return Math.floor((a+5)/6)*Math.floor((e+4)/5)*16;case rp:return Math.floor((a+5)/6)*Math.floor((e+5)/6)*16;case op:return Math.floor((a+7)/8)*Math.floor((e+4)/5)*16;case lp:return Math.floor((a+7)/8)*Math.floor((e+5)/6)*16;case cp:return Math.floor((a+7)/8)*Math.floor((e+7)/8)*16;case up:return Math.floor((a+9)/10)*Math.floor((e+4)/5)*16;case fp:return Math.floor((a+9)/10)*Math.floor((e+5)/6)*16;case dp:return Math.floor((a+9)/10)*Math.floor((e+7)/8)*16;case hp:return Math.floor((a+9)/10)*Math.floor((e+9)/10)*16;case pp:return Math.floor((a+11)/12)*Math.floor((e+9)/10)*16;case mp:return Math.floor((a+11)/12)*Math.floor((e+11)/12)*16;case gp:case _p:case vp:return Math.ceil(a/4)*Math.ceil(e/4)*16;case xp:case Sp:return Math.ceil(a/4)*Math.ceil(e/4)*8;case Au:case Mp:return Math.ceil(a/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function ob(a){switch(a){case Xi:case vx:return{byteLength:1,components:1};case Pl:case xx:case is:return{byteLength:2,components:1};case wp:case Dp:return{byteLength:2,components:4};case Aa:case Cp:case Ma:return{byteLength:4,components:1};case Sx:case Mx:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${a}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Rp}}));typeof window<"u"&&(window.__THREE__?ot("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Rp);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Bx(){let a=null,e=!1,i=null,r=null;function o(c,u){i(c,u),r=a.requestAnimationFrame(o)}return{start:function(){e!==!0&&i!==null&&a!==null&&(r=a.requestAnimationFrame(o),e=!0)},stop:function(){a!==null&&a.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){a=c}}}function lb(a){const e=new WeakMap;function i(d,m){const h=d.array,g=d.usage,v=h.byteLength,_=a.createBuffer();a.bindBuffer(m,_),a.bufferData(m,h,g),d.onUploadCallback();let S;if(h instanceof Float32Array)S=a.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)S=a.HALF_FLOAT;else if(h instanceof Uint16Array)d.isFloat16BufferAttribute?S=a.HALF_FLOAT:S=a.UNSIGNED_SHORT;else if(h instanceof Int16Array)S=a.SHORT;else if(h instanceof Uint32Array)S=a.UNSIGNED_INT;else if(h instanceof Int32Array)S=a.INT;else if(h instanceof Int8Array)S=a.BYTE;else if(h instanceof Uint8Array)S=a.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)S=a.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:_,type:S,bytesPerElement:h.BYTES_PER_ELEMENT,version:d.version,size:v}}function r(d,m,h){const g=m.array,v=m.updateRanges;if(a.bindBuffer(h,d),v.length===0)a.bufferSubData(h,0,g);else{v.sort((S,E)=>S.start-E.start);let _=0;for(let S=1;S<v.length;S++){const E=v[_],R=v[S];R.start<=E.start+E.count+1?E.count=Math.max(E.count,R.start+R.count-E.start):(++_,v[_]=R)}v.length=_+1;for(let S=0,E=v.length;S<E;S++){const R=v[S];a.bufferSubData(h,R.start*g.BYTES_PER_ELEMENT,g,R.start,R.count)}m.clearUpdateRanges()}m.onUploadCallback()}function o(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=e.get(d);m&&(a.deleteBuffer(m.buffer),e.delete(d))}function u(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=e.get(d);(!g||g.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const h=e.get(d);if(h===void 0)e.set(d,i(d,m));else if(h.version<d.version){if(h.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,d,m),h.version=d.version}}return{get:o,remove:c,update:u}}var cb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ub=`#ifdef USE_ALPHAHASH
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
#endif`,fb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,db=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,pb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,mb=`#ifdef USE_AOMAP
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
#endif`,gb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,_b=`#ifdef USE_BATCHING
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
#endif`,vb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,xb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Sb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Mb=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,yb=`#ifdef USE_IRIDESCENCE
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
#endif`,Eb=`#ifdef USE_BUMPMAP
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
#endif`,bb=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Tb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ab=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Rb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Cb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,wb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Db=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Lb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Nb=`#define PI 3.141592653589793
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
} // validated`,Ub=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ob=`vec3 transformedNormal = objectNormal;
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
#endif`,Pb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ib=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Fb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Bb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,zb="gl_FragColor = linearToOutputTexel( gl_FragColor );",Hb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Gb=`#ifdef USE_ENVMAP
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
#endif`,Vb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,kb=`#ifdef USE_ENVMAP
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
#endif`,Xb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Wb=`#ifdef USE_ENVMAP
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
#endif`,Yb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,qb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,jb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Zb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Kb=`#ifdef USE_GRADIENTMAP
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
}`,Qb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Jb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,$b=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,e1=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,t1=`#ifdef USE_ENVMAP
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
#endif`,n1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,i1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,a1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,s1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,r1=`PhysicalMaterial material;
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
#endif`,o1=`uniform sampler2D dfgLUT;
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
}`,l1=`
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
#endif`,c1=`#if defined( RE_IndirectDiffuse )
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
#endif`,u1=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,f1=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,d1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,h1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,p1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,m1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,g1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,v1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,x1=`#if defined( USE_POINTS_UV )
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
#endif`,S1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,M1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,y1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,E1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,b1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,T1=`#ifdef USE_MORPHTARGETS
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
#endif`,A1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,R1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,C1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,w1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,D1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,L1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,N1=`#ifdef USE_NORMALMAP
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
#endif`,U1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,O1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,P1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,I1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,F1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,B1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,z1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,H1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,G1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,V1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,k1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,X1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,W1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Y1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,j1=`float getShadowMask() {
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
}`,Z1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,K1=`#ifdef USE_SKINNING
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
#endif`,Q1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,J1=`#ifdef USE_SKINNING
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
#endif`,$1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,eT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,nT=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,iT=`#ifdef USE_TRANSMISSION
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
#endif`,aT=`#ifdef USE_TRANSMISSION
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
#endif`,sT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,oT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const cT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,uT=`uniform sampler2D t2D;
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
}`,fT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dT=`#ifdef ENVMAP_TYPE_CUBE
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
}`,hT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mT=`#include <common>
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
}`,gT=`#if DEPTH_PACKING == 3200
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
}`,_T=`#define DISTANCE
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
}`,vT=`#define DISTANCE
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
}`,xT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ST=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,MT=`uniform float scale;
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
}`,yT=`uniform vec3 diffuse;
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
}`,ET=`#include <common>
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
}`,bT=`uniform vec3 diffuse;
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
}`,TT=`#define LAMBERT
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
}`,AT=`#define LAMBERT
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
}`,RT=`#define MATCAP
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
}`,CT=`#define MATCAP
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
}`,wT=`#define NORMAL
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
}`,DT=`#define NORMAL
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
}`,LT=`#define PHONG
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
}`,NT=`#define PHONG
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
}`,UT=`#define STANDARD
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
}`,OT=`#define STANDARD
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
}`,PT=`#define TOON
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
}`,IT=`#define TOON
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
}`,FT=`uniform float size;
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
}`,BT=`uniform vec3 diffuse;
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
}`,zT=`#include <common>
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
}`,HT=`uniform vec3 color;
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
}`,GT=`uniform float rotation;
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
}`,VT=`uniform vec3 diffuse;
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
}`,gt={alphahash_fragment:cb,alphahash_pars_fragment:ub,alphamap_fragment:fb,alphamap_pars_fragment:db,alphatest_fragment:hb,alphatest_pars_fragment:pb,aomap_fragment:mb,aomap_pars_fragment:gb,batching_pars_vertex:_b,batching_vertex:vb,begin_vertex:xb,beginnormal_vertex:Sb,bsdfs:Mb,iridescence_fragment:yb,bumpmap_pars_fragment:Eb,clipping_planes_fragment:bb,clipping_planes_pars_fragment:Tb,clipping_planes_pars_vertex:Ab,clipping_planes_vertex:Rb,color_fragment:Cb,color_pars_fragment:wb,color_pars_vertex:Db,color_vertex:Lb,common:Nb,cube_uv_reflection_fragment:Ub,defaultnormal_vertex:Ob,displacementmap_pars_vertex:Pb,displacementmap_vertex:Ib,emissivemap_fragment:Fb,emissivemap_pars_fragment:Bb,colorspace_fragment:zb,colorspace_pars_fragment:Hb,envmap_fragment:Gb,envmap_common_pars_fragment:Vb,envmap_pars_fragment:kb,envmap_pars_vertex:Xb,envmap_physical_pars_fragment:t1,envmap_vertex:Wb,fog_vertex:Yb,fog_pars_vertex:qb,fog_fragment:jb,fog_pars_fragment:Zb,gradientmap_pars_fragment:Kb,lightmap_pars_fragment:Qb,lights_lambert_fragment:Jb,lights_lambert_pars_fragment:$b,lights_pars_begin:e1,lights_toon_fragment:n1,lights_toon_pars_fragment:i1,lights_phong_fragment:a1,lights_phong_pars_fragment:s1,lights_physical_fragment:r1,lights_physical_pars_fragment:o1,lights_fragment_begin:l1,lights_fragment_maps:c1,lights_fragment_end:u1,lightprobes_pars_fragment:f1,logdepthbuf_fragment:d1,logdepthbuf_pars_fragment:h1,logdepthbuf_pars_vertex:p1,logdepthbuf_vertex:m1,map_fragment:g1,map_pars_fragment:_1,map_particle_fragment:v1,map_particle_pars_fragment:x1,metalnessmap_fragment:S1,metalnessmap_pars_fragment:M1,morphinstance_vertex:y1,morphcolor_vertex:E1,morphnormal_vertex:b1,morphtarget_pars_vertex:T1,morphtarget_vertex:A1,normal_fragment_begin:R1,normal_fragment_maps:C1,normal_pars_fragment:w1,normal_pars_vertex:D1,normal_vertex:L1,normalmap_pars_fragment:N1,clearcoat_normal_fragment_begin:U1,clearcoat_normal_fragment_maps:O1,clearcoat_pars_fragment:P1,iridescence_pars_fragment:I1,opaque_fragment:F1,packing:B1,premultiplied_alpha_fragment:z1,project_vertex:H1,dithering_fragment:G1,dithering_pars_fragment:V1,roughnessmap_fragment:k1,roughnessmap_pars_fragment:X1,shadowmap_pars_fragment:W1,shadowmap_pars_vertex:Y1,shadowmap_vertex:q1,shadowmask_pars_fragment:j1,skinbase_vertex:Z1,skinning_pars_vertex:K1,skinning_vertex:Q1,skinnormal_vertex:J1,specularmap_fragment:$1,specularmap_pars_fragment:eT,tonemapping_fragment:tT,tonemapping_pars_fragment:nT,transmission_fragment:iT,transmission_pars_fragment:aT,uv_pars_fragment:sT,uv_pars_vertex:rT,uv_vertex:oT,worldpos_vertex:lT,background_vert:cT,background_frag:uT,backgroundCube_vert:fT,backgroundCube_frag:dT,cube_vert:hT,cube_frag:pT,depth_vert:mT,depth_frag:gT,distance_vert:_T,distance_frag:vT,equirect_vert:xT,equirect_frag:ST,linedashed_vert:MT,linedashed_frag:yT,meshbasic_vert:ET,meshbasic_frag:bT,meshlambert_vert:TT,meshlambert_frag:AT,meshmatcap_vert:RT,meshmatcap_frag:CT,meshnormal_vert:wT,meshnormal_frag:DT,meshphong_vert:LT,meshphong_frag:NT,meshphysical_vert:UT,meshphysical_frag:OT,meshtoon_vert:PT,meshtoon_frag:IT,points_vert:FT,points_frag:BT,shadow_vert:zT,shadow_frag:HT,sprite_vert:GT,sprite_frag:VT},Ye={common:{diffuse:{value:new Ht(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ft}},envmap:{envMap:{value:null},envMapRotation:{value:new ft},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ft},normalScale:{value:new Pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ht(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new ie},probesMax:{value:new ie},probesResolution:{value:new ie}},points:{diffuse:{value:new Ht(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0},uvTransform:{value:new ft}},sprite:{diffuse:{value:new Ht(16777215)},opacity:{value:1},center:{value:new Pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}}},xa={basic:{uniforms:ai([Ye.common,Ye.specularmap,Ye.envmap,Ye.aomap,Ye.lightmap,Ye.fog]),vertexShader:gt.meshbasic_vert,fragmentShader:gt.meshbasic_frag},lambert:{uniforms:ai([Ye.common,Ye.specularmap,Ye.envmap,Ye.aomap,Ye.lightmap,Ye.emissivemap,Ye.bumpmap,Ye.normalmap,Ye.displacementmap,Ye.fog,Ye.lights,{emissive:{value:new Ht(0)},envMapIntensity:{value:1}}]),vertexShader:gt.meshlambert_vert,fragmentShader:gt.meshlambert_frag},phong:{uniforms:ai([Ye.common,Ye.specularmap,Ye.envmap,Ye.aomap,Ye.lightmap,Ye.emissivemap,Ye.bumpmap,Ye.normalmap,Ye.displacementmap,Ye.fog,Ye.lights,{emissive:{value:new Ht(0)},specular:{value:new Ht(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:gt.meshphong_vert,fragmentShader:gt.meshphong_frag},standard:{uniforms:ai([Ye.common,Ye.envmap,Ye.aomap,Ye.lightmap,Ye.emissivemap,Ye.bumpmap,Ye.normalmap,Ye.displacementmap,Ye.roughnessmap,Ye.metalnessmap,Ye.fog,Ye.lights,{emissive:{value:new Ht(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag},toon:{uniforms:ai([Ye.common,Ye.aomap,Ye.lightmap,Ye.emissivemap,Ye.bumpmap,Ye.normalmap,Ye.displacementmap,Ye.gradientmap,Ye.fog,Ye.lights,{emissive:{value:new Ht(0)}}]),vertexShader:gt.meshtoon_vert,fragmentShader:gt.meshtoon_frag},matcap:{uniforms:ai([Ye.common,Ye.bumpmap,Ye.normalmap,Ye.displacementmap,Ye.fog,{matcap:{value:null}}]),vertexShader:gt.meshmatcap_vert,fragmentShader:gt.meshmatcap_frag},points:{uniforms:ai([Ye.points,Ye.fog]),vertexShader:gt.points_vert,fragmentShader:gt.points_frag},dashed:{uniforms:ai([Ye.common,Ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:gt.linedashed_vert,fragmentShader:gt.linedashed_frag},depth:{uniforms:ai([Ye.common,Ye.displacementmap]),vertexShader:gt.depth_vert,fragmentShader:gt.depth_frag},normal:{uniforms:ai([Ye.common,Ye.bumpmap,Ye.normalmap,Ye.displacementmap,{opacity:{value:1}}]),vertexShader:gt.meshnormal_vert,fragmentShader:gt.meshnormal_frag},sprite:{uniforms:ai([Ye.sprite,Ye.fog]),vertexShader:gt.sprite_vert,fragmentShader:gt.sprite_frag},background:{uniforms:{uvTransform:{value:new ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:gt.background_vert,fragmentShader:gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ft}},vertexShader:gt.backgroundCube_vert,fragmentShader:gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:gt.cube_vert,fragmentShader:gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:gt.equirect_vert,fragmentShader:gt.equirect_frag},distance:{uniforms:ai([Ye.common,Ye.displacementmap,{referencePosition:{value:new ie},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:gt.distance_vert,fragmentShader:gt.distance_frag},shadow:{uniforms:ai([Ye.lights,Ye.fog,{color:{value:new Ht(0)},opacity:{value:1}}]),vertexShader:gt.shadow_vert,fragmentShader:gt.shadow_frag}};xa.physical={uniforms:ai([xa.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ft},clearcoatNormalScale:{value:new Pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ft},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ft},sheen:{value:0},sheenColor:{value:new Ht(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ft},transmissionSamplerSize:{value:new Pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ft},attenuationDistance:{value:0},attenuationColor:{value:new Ht(0)},specularColor:{value:new Ht(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ft},anisotropyVector:{value:new Pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ft}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag};const mu={r:0,b:0,g:0},kT=new bn,zx=new ft;zx.set(-1,0,0,0,1,0,0,0,1);function XT(a,e,i,r,o,c){const u=new Ht(0);let d=o===!0?0:1,m,h,g=null,v=0,_=null;function S(F){let I=F.isScene===!0?F.background:null;if(I&&I.isTexture){const w=F.backgroundBlurriness>0;I=e.get(I,w)}return I}function E(F){let I=!1;const w=S(F);w===null?y(u,d):w&&w.isColor&&(y(w,1),I=!0);const O=a.xr.getEnvironmentBlendMode();O==="additive"?i.buffers.color.setClear(0,0,0,1,c):O==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(a.autoClear||I)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil))}function R(F,I){const w=S(I);w&&(w.isCubeTexture||w.mapping===Pu)?(h===void 0&&(h=new Ri(new Hl(1,1,1),new qi({name:"BackgroundCubeMaterial",uniforms:wo(xa.backgroundCube.uniforms),vertexShader:xa.backgroundCube.vertexShader,fragmentShader:xa.backgroundCube.fragmentShader,side:pi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(O,L,B){this.matrixWorld.copyPosition(B.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),h.material.uniforms.envMap.value=w,h.material.uniforms.backgroundBlurriness.value=I.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(kT.makeRotationFromEuler(I.backgroundRotation)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(zx),h.material.toneMapped=Rt.getTransfer(w.colorSpace)!==Xt,(g!==w||v!==w.version||_!==a.toneMapping)&&(h.material.needsUpdate=!0,g=w,v=w.version,_=a.toneMapping),h.layers.enableAll(),F.unshift(h,h.geometry,h.material,0,0,null)):w&&w.isTexture&&(m===void 0&&(m=new Ri(new Gs(2,2),new qi({name:"BackgroundMaterial",uniforms:wo(xa.background.uniforms),vertexShader:xa.background.vertexShader,fragmentShader:xa.background.fragmentShader,side:ns,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(m)),m.material.uniforms.t2D.value=w,m.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,m.material.toneMapped=Rt.getTransfer(w.colorSpace)!==Xt,w.matrixAutoUpdate===!0&&w.updateMatrix(),m.material.uniforms.uvTransform.value.copy(w.matrix),(g!==w||v!==w.version||_!==a.toneMapping)&&(m.material.needsUpdate=!0,g=w,v=w.version,_=a.toneMapping),m.layers.enableAll(),F.unshift(m,m.geometry,m.material,0,0,null))}function y(F,I){F.getRGB(mu,Px(a)),i.buffers.color.setClear(mu.r,mu.g,mu.b,I,c)}function x(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return u},setClearColor:function(F,I=1){u.set(F),d=I,y(u,d)},getClearAlpha:function(){return d},setClearAlpha:function(F){d=F,y(u,d)},render:E,addToRenderList:R,dispose:x}}function WT(a,e){const i=a.getParameter(a.MAX_VERTEX_ATTRIBS),r={},o=_(null);let c=o,u=!1;function d(k,j,ue,fe,q){let z=!1;const H=v(k,fe,ue,j);c!==H&&(c=H,h(c.object)),z=S(k,fe,ue,q),z&&E(k,fe,ue,q),q!==null&&e.update(q,a.ELEMENT_ARRAY_BUFFER),(z||u)&&(u=!1,w(k,j,ue,fe),q!==null&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function m(){return a.createVertexArray()}function h(k){return a.bindVertexArray(k)}function g(k){return a.deleteVertexArray(k)}function v(k,j,ue,fe){const q=fe.wireframe===!0;let z=r[j.id];z===void 0&&(z={},r[j.id]=z);const H=k.isInstancedMesh===!0?k.id:0;let te=z[H];te===void 0&&(te={},z[H]=te);let me=te[ue.id];me===void 0&&(me={},te[ue.id]=me);let Se=me[q];return Se===void 0&&(Se=_(m()),me[q]=Se),Se}function _(k){const j=[],ue=[],fe=[];for(let q=0;q<i;q++)j[q]=0,ue[q]=0,fe[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:j,enabledAttributes:ue,attributeDivisors:fe,object:k,attributes:{},index:null}}function S(k,j,ue,fe){const q=c.attributes,z=j.attributes;let H=0;const te=ue.getAttributes();for(const me in te)if(te[me].location>=0){const U=q[me];let K=z[me];if(K===void 0&&(me==="instanceMatrix"&&k.instanceMatrix&&(K=k.instanceMatrix),me==="instanceColor"&&k.instanceColor&&(K=k.instanceColor)),U===void 0||U.attribute!==K||K&&U.data!==K.data)return!0;H++}return c.attributesNum!==H||c.index!==fe}function E(k,j,ue,fe){const q={},z=j.attributes;let H=0;const te=ue.getAttributes();for(const me in te)if(te[me].location>=0){let U=z[me];U===void 0&&(me==="instanceMatrix"&&k.instanceMatrix&&(U=k.instanceMatrix),me==="instanceColor"&&k.instanceColor&&(U=k.instanceColor));const K={};K.attribute=U,U&&U.data&&(K.data=U.data),q[me]=K,H++}c.attributes=q,c.attributesNum=H,c.index=fe}function R(){const k=c.newAttributes;for(let j=0,ue=k.length;j<ue;j++)k[j]=0}function y(k){x(k,0)}function x(k,j){const ue=c.newAttributes,fe=c.enabledAttributes,q=c.attributeDivisors;ue[k]=1,fe[k]===0&&(a.enableVertexAttribArray(k),fe[k]=1),q[k]!==j&&(a.vertexAttribDivisor(k,j),q[k]=j)}function F(){const k=c.newAttributes,j=c.enabledAttributes;for(let ue=0,fe=j.length;ue<fe;ue++)j[ue]!==k[ue]&&(a.disableVertexAttribArray(ue),j[ue]=0)}function I(k,j,ue,fe,q,z,H){H===!0?a.vertexAttribIPointer(k,j,ue,q,z):a.vertexAttribPointer(k,j,ue,fe,q,z)}function w(k,j,ue,fe){R();const q=fe.attributes,z=ue.getAttributes(),H=j.defaultAttributeValues;for(const te in z){const me=z[te];if(me.location>=0){let Se=q[te];if(Se===void 0&&(te==="instanceMatrix"&&k.instanceMatrix&&(Se=k.instanceMatrix),te==="instanceColor"&&k.instanceColor&&(Se=k.instanceColor)),Se!==void 0){const U=Se.normalized,K=Se.itemSize,be=e.get(Se);if(be===void 0)continue;const Ae=be.buffer,Ce=be.type,ae=be.bytesPerElement,Me=Ce===a.INT||Ce===a.UNSIGNED_INT||Se.gpuType===Cp;if(Se.isInterleavedBufferAttribute){const ge=Se.data,qe=ge.stride,st=Se.offset;if(ge.isInstancedInterleavedBuffer){for(let et=0;et<me.locationSize;et++)x(me.location+et,ge.meshPerAttribute);k.isInstancedMesh!==!0&&fe._maxInstanceCount===void 0&&(fe._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let et=0;et<me.locationSize;et++)y(me.location+et);a.bindBuffer(a.ARRAY_BUFFER,Ae);for(let et=0;et<me.locationSize;et++)I(me.location+et,K/me.locationSize,Ce,U,qe*ae,(st+K/me.locationSize*et)*ae,Me)}else{if(Se.isInstancedBufferAttribute){for(let ge=0;ge<me.locationSize;ge++)x(me.location+ge,Se.meshPerAttribute);k.isInstancedMesh!==!0&&fe._maxInstanceCount===void 0&&(fe._maxInstanceCount=Se.meshPerAttribute*Se.count)}else for(let ge=0;ge<me.locationSize;ge++)y(me.location+ge);a.bindBuffer(a.ARRAY_BUFFER,Ae);for(let ge=0;ge<me.locationSize;ge++)I(me.location+ge,K/me.locationSize,Ce,U,K*ae,K/me.locationSize*ge*ae,Me)}}else if(H!==void 0){const U=H[te];if(U!==void 0)switch(U.length){case 2:a.vertexAttrib2fv(me.location,U);break;case 3:a.vertexAttrib3fv(me.location,U);break;case 4:a.vertexAttrib4fv(me.location,U);break;default:a.vertexAttrib1fv(me.location,U)}}}}F()}function O(){N();for(const k in r){const j=r[k];for(const ue in j){const fe=j[ue];for(const q in fe){const z=fe[q];for(const H in z)g(z[H].object),delete z[H];delete fe[q]}}delete r[k]}}function L(k){if(r[k.id]===void 0)return;const j=r[k.id];for(const ue in j){const fe=j[ue];for(const q in fe){const z=fe[q];for(const H in z)g(z[H].object),delete z[H];delete fe[q]}}delete r[k.id]}function B(k){for(const j in r){const ue=r[j];for(const fe in ue){const q=ue[fe];if(q[k.id]===void 0)continue;const z=q[k.id];for(const H in z)g(z[H].object),delete z[H];delete q[k.id]}}}function A(k){for(const j in r){const ue=r[j],fe=k.isInstancedMesh===!0?k.id:0,q=ue[fe];if(q!==void 0){for(const z in q){const H=q[z];for(const te in H)g(H[te].object),delete H[te];delete q[z]}delete ue[fe],Object.keys(ue).length===0&&delete r[j]}}}function N(){Y(),u=!0,c!==o&&(c=o,h(c.object))}function Y(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:d,reset:N,resetDefaultState:Y,dispose:O,releaseStatesOfGeometry:L,releaseStatesOfObject:A,releaseStatesOfProgram:B,initAttributes:R,enableAttribute:y,disableUnusedAttributes:F}}function YT(a,e,i){let r;function o(m){r=m}function c(m,h){a.drawArrays(r,m,h),i.update(h,r,1)}function u(m,h,g){g!==0&&(a.drawArraysInstanced(r,m,h,g),i.update(h,r,g))}function d(m,h,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,h,0,g);let _=0;for(let S=0;S<g;S++)_+=h[S];i.update(_,r,1)}this.setMode=o,this.render=c,this.renderInstances=u,this.renderMultiDraw=d}function qT(a,e,i,r){let o;function c(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const B=e.get("EXT_texture_filter_anisotropic");o=a.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(B){return!(B!==oa&&r.convert(B)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(B){const A=B===is&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(B!==Xi&&r.convert(B)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_TYPE)&&B!==Ma&&!A)}function m(B){if(B==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=i.precision!==void 0?i.precision:"highp";const g=m(h);g!==h&&(ot("WebGLRenderer:",h,"not supported, using",g,"instead."),h=g);const v=i.logarithmicDepthBuffer===!0,_=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control");i.reversedDepthBuffer===!0&&_===!1&&ot("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const S=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),E=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=a.getParameter(a.MAX_TEXTURE_SIZE),y=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),x=a.getParameter(a.MAX_VERTEX_ATTRIBS),F=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),I=a.getParameter(a.MAX_VARYING_VECTORS),w=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),O=a.getParameter(a.MAX_SAMPLES),L=a.getParameter(a.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:u,textureTypeReadable:d,precision:h,logarithmicDepthBuffer:v,reversedDepthBuffer:_,maxTextures:S,maxVertexTextures:E,maxTextureSize:R,maxCubemapSize:y,maxAttributes:x,maxVertexUniforms:F,maxVaryings:I,maxFragmentUniforms:w,maxSamples:O,samples:L}}function jT(a){const e=this;let i=null,r=0,o=!1,c=!1;const u=new gr,d=new ft,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(v,_){const S=v.length!==0||_||r!==0||o;return o=_,r=v.length,S},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(v,_){i=g(v,_,0)},this.setState=function(v,_,S){const E=v.clippingPlanes,R=v.clipIntersection,y=v.clipShadows,x=a.get(v);if(!o||E===null||E.length===0||c&&!y)c?g(null):h();else{const F=c?0:r,I=F*4;let w=x.clippingState||null;m.value=w,w=g(E,_,I,S);for(let O=0;O!==I;++O)w[O]=i[O];x.clippingState=w,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=F}};function h(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function g(v,_,S,E){const R=v!==null?v.length:0;let y=null;if(R!==0){if(y=m.value,E!==!0||y===null){const x=S+R*4,F=_.matrixWorldInverse;d.getNormalMatrix(F),(y===null||y.length<x)&&(y=new Float32Array(x));for(let I=0,w=S;I!==R;++I,w+=4)u.copy(v[I]).applyMatrix4(F,d),u.normal.toArray(y,w),y[w+3]=u.constant}m.value=y,m.needsUpdate=!0}return e.numPlanes=R,e.numIntersection=0,y}}const Vs=4,pv=[.125,.215,.35,.446,.526,.582],xr=20,ZT=256,bl=new Fx,mv=new Ht;let Mh=null,yh=0,Eh=0,bh=!1;const KT=new ie;class gv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,r=.1,o=100,c={}){const{size:u=256,position:d=KT}=c;Mh=this._renderer.getRenderTarget(),yh=this._renderer.getActiveCubeFace(),Eh=this._renderer.getActiveMipmapLevel(),bh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,r,o,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=xv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=vv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Mh,yh,Eh),this._renderer.xr.enabled=bh,e.scissorTest=!1,xo(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===yr||e.mapping===Ro?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Mh=this._renderer.getRenderTarget(),yh=this._renderer.getActiveCubeFace(),Eh=this._renderer.getActiveMipmapLevel(),bh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:hn,minFilter:hn,generateMipmaps:!1,type:is,format:oa,colorSpace:Ru,depthBuffer:!1},o=_v(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_v(e,i,r);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=QT(c)),this._blurMaterial=$T(c,e,i),this._ggxMaterial=JT(c,e,i)}return o}_compileMaterial(e){const i=new Ri(new Yi,e);this._renderer.compile(i,bl)}_sceneToCubeUV(e,i,r,o,c){const m=new ki(90,1,i,r),h=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],v=this._renderer,_=v.autoClear,S=v.toneMapping;v.getClearColor(mv),v.toneMapping=Ea,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(o),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ri(new Hl,new Lu({name:"PMREM.Background",side:pi,depthWrite:!1,depthTest:!1})));const R=this._backgroundBox,y=R.material;let x=!1;const F=e.background;F?F.isColor&&(y.color.copy(F),e.background=null,x=!0):(y.color.copy(mv),x=!0);for(let I=0;I<6;I++){const w=I%3;w===0?(m.up.set(0,h[I],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+g[I],c.y,c.z)):w===1?(m.up.set(0,0,h[I]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+g[I],c.z)):(m.up.set(0,h[I],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+g[I]));const O=this._cubeSize;xo(o,w*O,I>2?O:0,O,O),v.setRenderTarget(o),x&&v.render(R,m),v.render(e,m)}v.toneMapping=S,v.autoClear=_,e.background=F}_textureToCubeUV(e,i){const r=this._renderer,o=e.mapping===yr||e.mapping===Ro;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=xv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=vv());const c=o?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=c;const d=c.uniforms;d.envMap.value=e;const m=this._cubeSize;xo(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(u,bl)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const o=this._lodMeshes.length;for(let c=1;c<o;c++)this._applyGGXFilter(e,c-1,c);i.autoClear=r}_applyGGXFilter(e,i,r){const o=this._renderer,c=this._pingPongRenderTarget,u=this._ggxMaterial,d=this._lodMeshes[r];d.material=u;const m=u.uniforms,h=r/(this._lodMeshes.length-1),g=i/(this._lodMeshes.length-1),v=Math.sqrt(h*h-g*g),_=0+h*1.25,S=v*_,{_lodMax:E}=this,R=this._sizeLods[r],y=3*R*(r>E-Vs?r-E+Vs:0),x=4*(this._cubeSize-R);m.envMap.value=e.texture,m.roughness.value=S,m.mipInt.value=E-i,xo(c,y,x,3*R,2*R),o.setRenderTarget(c),o.render(d,bl),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=E-r,xo(e,y,x,3*R,2*R),o.setRenderTarget(e),o.render(d,bl)}_blur(e,i,r,o,c){const u=this._pingPongRenderTarget;this._halfBlur(e,u,i,r,o,"latitudinal",c),this._halfBlur(u,e,r,r,o,"longitudinal",c)}_halfBlur(e,i,r,o,c,u,d){const m=this._renderer,h=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&Dt("blur direction must be either latitudinal or longitudinal!");const g=3,v=this._lodMeshes[o];v.material=h;const _=h.uniforms,S=this._sizeLods[r]-1,E=isFinite(c)?Math.PI/(2*S):2*Math.PI/(2*xr-1),R=c/E,y=isFinite(c)?1+Math.floor(g*R):xr;y>xr&&ot(`sigmaRadians, ${c}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${xr}`);const x=[];let F=0;for(let B=0;B<xr;++B){const A=B/R,N=Math.exp(-A*A/2);x.push(N),B===0?F+=N:B<y&&(F+=2*N)}for(let B=0;B<x.length;B++)x[B]=x[B]/F;_.envMap.value=e.texture,_.samples.value=y,_.weights.value=x,_.latitudinal.value=u==="latitudinal",d&&(_.poleAxis.value=d);const{_lodMax:I}=this;_.dTheta.value=E,_.mipInt.value=I-r;const w=this._sizeLods[o],O=3*w*(o>I-Vs?o-I+Vs:0),L=4*(this._cubeSize-w);xo(i,O,L,3*w,2*w),m.setRenderTarget(i),m.render(v,bl)}}function QT(a){const e=[],i=[],r=[];let o=a;const c=a-Vs+1+pv.length;for(let u=0;u<c;u++){const d=Math.pow(2,o);e.push(d);let m=1/d;u>a-Vs?m=pv[u-a+Vs-1]:u===0&&(m=0),i.push(m);const h=1/(d-2),g=-h,v=1+h,_=[g,g,v,g,v,v,g,g,v,v,g,v],S=6,E=6,R=3,y=2,x=1,F=new Float32Array(R*E*S),I=new Float32Array(y*E*S),w=new Float32Array(x*E*S);for(let L=0;L<S;L++){const B=L%3*2/3-1,A=L>2?0:-1,N=[B,A,0,B+2/3,A,0,B+2/3,A+1,0,B,A,0,B+2/3,A+1,0,B,A+1,0];F.set(N,R*E*L),I.set(_,y*E*L);const Y=[L,L,L,L,L,L];w.set(Y,x*E*L)}const O=new Yi;O.setAttribute("position",new Ta(F,R)),O.setAttribute("uv",new Ta(I,y)),O.setAttribute("faceIndex",new Ta(w,x)),r.push(new Ri(O,null)),o>Vs&&o--}return{lodMeshes:r,sizeLods:e,sigmas:i}}function _v(a,e,i){const r=new ba(a,e,i);return r.texture.mapping=Pu,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function xo(a,e,i,r,o){a.viewport.set(e,i,r,o),a.scissor.set(e,i,r,o)}function JT(a,e,i){return new qi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:ZT,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Fu(),fragmentShader:`

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
		`,blending:es,depthTest:!1,depthWrite:!1})}function $T(a,e,i){const r=new Float32Array(xr),o=new ie(0,1,0);return new qi({name:"SphericalGaussianBlur",defines:{n:xr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Fu(),fragmentShader:`

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
		`,blending:es,depthTest:!1,depthWrite:!1})}function vv(){return new qi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Fu(),fragmentShader:`

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
		`,blending:es,depthTest:!1,depthWrite:!1})}function xv(){return new qi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Fu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:es,depthTest:!1,depthWrite:!1})}function Fu(){return`

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
	`}class Hx extends ba{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new Nx(o),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new Hl(5,5,5),c=new qi({name:"CubemapFromEquirect",uniforms:wo(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:pi,blending:es});c.uniforms.tEquirect.value=i;const u=new Ri(o,c),d=i.minFilter;return i.minFilter===Hs&&(i.minFilter=hn),new sb(1,10,this).update(e,u),i.minFilter=d,u.geometry.dispose(),u.material.dispose(),this}clear(e,i=!0,r=!0,o=!0){const c=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(i,r,o);e.setRenderTarget(c)}}function eA(a){let e=new WeakMap,i=new WeakMap,r=null;function o(_,S=!1){return _==null?null:S?u(_):c(_)}function c(_){if(_&&_.isTexture){const S=_.mapping;if(S===qd||S===jd)if(e.has(_)){const E=e.get(_).texture;return d(E,_.mapping)}else{const E=_.image;if(E&&E.height>0){const R=new Hx(E.height);return R.fromEquirectangularTexture(a,_),e.set(_,R),_.addEventListener("dispose",h),d(R.texture,_.mapping)}else return null}}return _}function u(_){if(_&&_.isTexture){const S=_.mapping,E=S===qd||S===jd,R=S===yr||S===Ro;if(E||R){let y=i.get(_);const x=y!==void 0?y.texture.pmremVersion:0;if(_.isRenderTargetTexture&&_.pmremVersion!==x)return r===null&&(r=new gv(a)),y=E?r.fromEquirectangular(_,y):r.fromCubemap(_,y),y.texture.pmremVersion=_.pmremVersion,i.set(_,y),y.texture;if(y!==void 0)return y.texture;{const F=_.image;return E&&F&&F.height>0||R&&F&&m(F)?(r===null&&(r=new gv(a)),y=E?r.fromEquirectangular(_):r.fromCubemap(_),y.texture.pmremVersion=_.pmremVersion,i.set(_,y),_.addEventListener("dispose",g),y.texture):null}}}return _}function d(_,S){return S===qd?_.mapping=yr:S===jd&&(_.mapping=Ro),_}function m(_){let S=0;const E=6;for(let R=0;R<E;R++)_[R]!==void 0&&S++;return S===E}function h(_){const S=_.target;S.removeEventListener("dispose",h);const E=e.get(S);E!==void 0&&(e.delete(S),E.dispose())}function g(_){const S=_.target;S.removeEventListener("dispose",g);const E=i.get(S);E!==void 0&&(i.delete(S),E.dispose())}function v(){e=new WeakMap,i=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:o,dispose:v}}function tA(a){const e={};function i(r){if(e[r]!==void 0)return e[r];const o=a.getExtension(r);return e[r]=o,o}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const o=i(r);return o===null&&yo("WebGLRenderer: "+r+" extension not supported."),o}}}function nA(a,e,i,r){const o={},c=new WeakMap;function u(v){const _=v.target;_.index!==null&&e.remove(_.index);for(const E in _.attributes)e.remove(_.attributes[E]);_.removeEventListener("dispose",u),delete o[_.id];const S=c.get(_);S&&(e.remove(S),c.delete(_)),r.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,i.memory.geometries--}function d(v,_){return o[_.id]===!0||(_.addEventListener("dispose",u),o[_.id]=!0,i.memory.geometries++),_}function m(v){const _=v.attributes;for(const S in _)e.update(_[S],a.ARRAY_BUFFER)}function h(v){const _=[],S=v.index,E=v.attributes.position;let R=0;if(E===void 0)return;if(S!==null){const F=S.array;R=S.version;for(let I=0,w=F.length;I<w;I+=3){const O=F[I+0],L=F[I+1],B=F[I+2];_.push(O,L,L,B,B,O)}}else{const F=E.array;R=E.version;for(let I=0,w=F.length/3-1;I<w;I+=3){const O=I+0,L=I+1,B=I+2;_.push(O,L,L,B,B,O)}}const y=new(E.count>=65535?Dx:wx)(_,1);y.version=R;const x=c.get(v);x&&e.remove(x),c.set(v,y)}function g(v){const _=c.get(v);if(_){const S=v.index;S!==null&&_.version<S.version&&h(v)}else h(v);return c.get(v)}return{get:d,update:m,getWireframeAttribute:g}}function iA(a,e,i){let r;function o(v){r=v}let c,u;function d(v){c=v.type,u=v.bytesPerElement}function m(v,_){a.drawElements(r,_,c,v*u),i.update(_,r,1)}function h(v,_,S){S!==0&&(a.drawElementsInstanced(r,_,c,v*u,S),i.update(_,r,S))}function g(v,_,S){if(S===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,_,0,c,v,0,S);let R=0;for(let y=0;y<S;y++)R+=_[y];i.update(R,r,1)}this.setMode=o,this.setIndex=d,this.render=m,this.renderInstances=h,this.renderMultiDraw=g}function aA(a){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,u,d){switch(i.calls++,u){case a.TRIANGLES:i.triangles+=d*(c/3);break;case a.LINES:i.lines+=d*(c/2);break;case a.LINE_STRIP:i.lines+=d*(c-1);break;case a.LINE_LOOP:i.lines+=d*c;break;case a.POINTS:i.points+=d*c;break;default:Dt("WebGLInfo: Unknown draw mode:",u);break}}function o(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:o,update:r}}function sA(a,e,i){const r=new WeakMap,o=new Sn;function c(u,d,m){const h=u.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,v=g!==void 0?g.length:0;let _=r.get(d);if(_===void 0||_.count!==v){let Y=function(){A.dispose(),r.delete(d),d.removeEventListener("dispose",Y)};var S=Y;_!==void 0&&_.texture.dispose();const E=d.morphAttributes.position!==void 0,R=d.morphAttributes.normal!==void 0,y=d.morphAttributes.color!==void 0,x=d.morphAttributes.position||[],F=d.morphAttributes.normal||[],I=d.morphAttributes.color||[];let w=0;E===!0&&(w=1),R===!0&&(w=2),y===!0&&(w=3);let O=d.attributes.position.count*w,L=1;O>e.maxTextureSize&&(L=Math.ceil(O/e.maxTextureSize),O=e.maxTextureSize);const B=new Float32Array(O*L*4*v),A=new Ax(B,O,L,v);A.type=Ma,A.needsUpdate=!0;const N=w*4;for(let k=0;k<v;k++){const j=x[k],ue=F[k],fe=I[k],q=O*L*4*k;for(let z=0;z<j.count;z++){const H=z*N;E===!0&&(o.fromBufferAttribute(j,z),B[q+H+0]=o.x,B[q+H+1]=o.y,B[q+H+2]=o.z,B[q+H+3]=0),R===!0&&(o.fromBufferAttribute(ue,z),B[q+H+4]=o.x,B[q+H+5]=o.y,B[q+H+6]=o.z,B[q+H+7]=0),y===!0&&(o.fromBufferAttribute(fe,z),B[q+H+8]=o.x,B[q+H+9]=o.y,B[q+H+10]=o.z,B[q+H+11]=fe.itemSize===4?o.w:1)}}_={count:v,texture:A,size:new Pt(O,L)},r.set(d,_),d.addEventListener("dispose",Y)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)m.getUniforms().setValue(a,"morphTexture",u.morphTexture,i);else{let E=0;for(let y=0;y<h.length;y++)E+=h[y];const R=d.morphTargetsRelative?1:1-E;m.getUniforms().setValue(a,"morphTargetBaseInfluence",R),m.getUniforms().setValue(a,"morphTargetInfluences",h)}m.getUniforms().setValue(a,"morphTargetsTexture",_.texture,i),m.getUniforms().setValue(a,"morphTargetsTextureSize",_.size)}return{update:c}}function rA(a,e,i,r,o){let c=new WeakMap;function u(h){const g=o.render.frame,v=h.geometry,_=e.get(h,v);if(c.get(_)!==g&&(e.update(_),c.set(_,g)),h.isInstancedMesh&&(h.hasEventListener("dispose",m)===!1&&h.addEventListener("dispose",m),c.get(h)!==g&&(i.update(h.instanceMatrix,a.ARRAY_BUFFER),h.instanceColor!==null&&i.update(h.instanceColor,a.ARRAY_BUFFER),c.set(h,g))),h.isSkinnedMesh){const S=h.skeleton;c.get(S)!==g&&(S.update(),c.set(S,g))}return _}function d(){c=new WeakMap}function m(h){const g=h.target;g.removeEventListener("dispose",m),r.releaseStatesOfObject(g),i.remove(g.instanceMatrix),g.instanceColor!==null&&i.remove(g.instanceColor)}return{update:u,dispose:d}}const oA={[ux]:"LINEAR_TONE_MAPPING",[fx]:"REINHARD_TONE_MAPPING",[dx]:"CINEON_TONE_MAPPING",[hx]:"ACES_FILMIC_TONE_MAPPING",[mx]:"AGX_TONE_MAPPING",[gx]:"NEUTRAL_TONE_MAPPING",[px]:"CUSTOM_TONE_MAPPING"};function lA(a,e,i,r,o,c){const u=new ba(e,i,{type:a,depthBuffer:o,stencilBuffer:c,samples:r?4:0,depthTexture:o?new Co(e,i):void 0}),d=new ba(e,i,{type:is,depthBuffer:!1,stencilBuffer:!1}),m=new Yi;m.setAttribute("position",new Wi([-1,3,0,-1,-1,0,3,-1,0],3)),m.setAttribute("uv",new Wi([0,2,0,0,2,0],2));const h=new nb({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),g=new Ri(m,h),v=new Fx(-1,1,1,-1,0,1);let _=null,S=null,E=!1,R,y=null,x=[],F=!1;this.setSize=function(I,w){u.setSize(I,w),d.setSize(I,w);for(let O=0;O<x.length;O++){const L=x[O];L.setSize&&L.setSize(I,w)}},this.setEffects=function(I){x=I,F=x.length>0&&x[0].isRenderPass===!0;const w=u.width,O=u.height;for(let L=0;L<x.length;L++){const B=x[L];B.setSize&&B.setSize(w,O)}},this.begin=function(I,w){if(E||I.toneMapping===Ea&&x.length===0)return!1;if(y=w,w!==null){const O=w.width,L=w.height;(u.width!==O||u.height!==L)&&this.setSize(O,L)}return F===!1&&I.setRenderTarget(u),R=I.toneMapping,I.toneMapping=Ea,!0},this.hasRenderPass=function(){return F},this.end=function(I,w){I.toneMapping=R,E=!0;let O=u,L=d;for(let B=0;B<x.length;B++){const A=x[B];if(A.enabled!==!1&&(A.render(I,L,O,w),A.needsSwap!==!1)){const N=O;O=L,L=N}}if(_!==I.outputColorSpace||S!==I.toneMapping){_=I.outputColorSpace,S=I.toneMapping,h.defines={},Rt.getTransfer(_)===Xt&&(h.defines.SRGB_TRANSFER="");const B=oA[S];B&&(h.defines[B]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=O.texture,I.setRenderTarget(y),I.render(g,v),y=null,E=!1},this.isCompositing=function(){return E},this.dispose=function(){u.depthTexture&&u.depthTexture.dispose(),u.dispose(),d.dispose(),m.dispose(),h.dispose()}}const Gx=new jn,yp=new Co(1,1),Vx=new Ax,kx=new wE,Xx=new Nx,Sv=[],Mv=[],yv=new Float32Array(16),Ev=new Float32Array(9),bv=new Float32Array(4);function No(a,e,i){const r=a[0];if(r<=0||r>0)return a;const o=e*i;let c=Sv[o];if(c===void 0&&(c=new Float32Array(o),Sv[o]=c),e!==0){r.toArray(c,0);for(let u=1,d=0;u!==e;++u)d+=i,a[u].toArray(c,d)}return c}function On(a,e){if(a.length!==e.length)return!1;for(let i=0,r=a.length;i<r;i++)if(a[i]!==e[i])return!1;return!0}function Pn(a,e){for(let i=0,r=e.length;i<r;i++)a[i]=e[i]}function Bu(a,e){let i=Mv[e];i===void 0&&(i=new Int32Array(e),Mv[e]=i);for(let r=0;r!==e;++r)i[r]=a.allocateTextureUnit();return i}function cA(a,e){const i=this.cache;i[0]!==e&&(a.uniform1f(this.addr,e),i[0]=e)}function uA(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(On(i,e))return;a.uniform2fv(this.addr,e),Pn(i,e)}}function fA(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(On(i,e))return;a.uniform3fv(this.addr,e),Pn(i,e)}}function dA(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(On(i,e))return;a.uniform4fv(this.addr,e),Pn(i,e)}}function hA(a,e){const i=this.cache,r=e.elements;if(r===void 0){if(On(i,e))return;a.uniformMatrix2fv(this.addr,!1,e),Pn(i,e)}else{if(On(i,r))return;bv.set(r),a.uniformMatrix2fv(this.addr,!1,bv),Pn(i,r)}}function pA(a,e){const i=this.cache,r=e.elements;if(r===void 0){if(On(i,e))return;a.uniformMatrix3fv(this.addr,!1,e),Pn(i,e)}else{if(On(i,r))return;Ev.set(r),a.uniformMatrix3fv(this.addr,!1,Ev),Pn(i,r)}}function mA(a,e){const i=this.cache,r=e.elements;if(r===void 0){if(On(i,e))return;a.uniformMatrix4fv(this.addr,!1,e),Pn(i,e)}else{if(On(i,r))return;yv.set(r),a.uniformMatrix4fv(this.addr,!1,yv),Pn(i,r)}}function gA(a,e){const i=this.cache;i[0]!==e&&(a.uniform1i(this.addr,e),i[0]=e)}function _A(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(a.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(On(i,e))return;a.uniform2iv(this.addr,e),Pn(i,e)}}function vA(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(a.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(On(i,e))return;a.uniform3iv(this.addr,e),Pn(i,e)}}function xA(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(On(i,e))return;a.uniform4iv(this.addr,e),Pn(i,e)}}function SA(a,e){const i=this.cache;i[0]!==e&&(a.uniform1ui(this.addr,e),i[0]=e)}function MA(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(a.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(On(i,e))return;a.uniform2uiv(this.addr,e),Pn(i,e)}}function yA(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(a.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(On(i,e))return;a.uniform3uiv(this.addr,e),Pn(i,e)}}function EA(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(On(i,e))return;a.uniform4uiv(this.addr,e),Pn(i,e)}}function bA(a,e,i){const r=this.cache,o=i.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o);let c;this.type===a.SAMPLER_2D_SHADOW?(yp.compareFunction=i.isReversedDepthBuffer()?Pp:Op,c=yp):c=Gx,i.setTexture2D(e||c,o)}function TA(a,e,i){const r=this.cache,o=i.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o),i.setTexture3D(e||kx,o)}function AA(a,e,i){const r=this.cache,o=i.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o),i.setTextureCube(e||Xx,o)}function RA(a,e,i){const r=this.cache,o=i.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o),i.setTexture2DArray(e||Vx,o)}function CA(a){switch(a){case 5126:return cA;case 35664:return uA;case 35665:return fA;case 35666:return dA;case 35674:return hA;case 35675:return pA;case 35676:return mA;case 5124:case 35670:return gA;case 35667:case 35671:return _A;case 35668:case 35672:return vA;case 35669:case 35673:return xA;case 5125:return SA;case 36294:return MA;case 36295:return yA;case 36296:return EA;case 35678:case 36198:case 36298:case 36306:case 35682:return bA;case 35679:case 36299:case 36307:return TA;case 35680:case 36300:case 36308:case 36293:return AA;case 36289:case 36303:case 36311:case 36292:return RA}}function wA(a,e){a.uniform1fv(this.addr,e)}function DA(a,e){const i=No(e,this.size,2);a.uniform2fv(this.addr,i)}function LA(a,e){const i=No(e,this.size,3);a.uniform3fv(this.addr,i)}function NA(a,e){const i=No(e,this.size,4);a.uniform4fv(this.addr,i)}function UA(a,e){const i=No(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,i)}function OA(a,e){const i=No(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,i)}function PA(a,e){const i=No(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,i)}function IA(a,e){a.uniform1iv(this.addr,e)}function FA(a,e){a.uniform2iv(this.addr,e)}function BA(a,e){a.uniform3iv(this.addr,e)}function zA(a,e){a.uniform4iv(this.addr,e)}function HA(a,e){a.uniform1uiv(this.addr,e)}function GA(a,e){a.uniform2uiv(this.addr,e)}function VA(a,e){a.uniform3uiv(this.addr,e)}function kA(a,e){a.uniform4uiv(this.addr,e)}function XA(a,e,i){const r=this.cache,o=e.length,c=Bu(i,o);On(r,c)||(a.uniform1iv(this.addr,c),Pn(r,c));let u;this.type===a.SAMPLER_2D_SHADOW?u=yp:u=Gx;for(let d=0;d!==o;++d)i.setTexture2D(e[d]||u,c[d])}function WA(a,e,i){const r=this.cache,o=e.length,c=Bu(i,o);On(r,c)||(a.uniform1iv(this.addr,c),Pn(r,c));for(let u=0;u!==o;++u)i.setTexture3D(e[u]||kx,c[u])}function YA(a,e,i){const r=this.cache,o=e.length,c=Bu(i,o);On(r,c)||(a.uniform1iv(this.addr,c),Pn(r,c));for(let u=0;u!==o;++u)i.setTextureCube(e[u]||Xx,c[u])}function qA(a,e,i){const r=this.cache,o=e.length,c=Bu(i,o);On(r,c)||(a.uniform1iv(this.addr,c),Pn(r,c));for(let u=0;u!==o;++u)i.setTexture2DArray(e[u]||Vx,c[u])}function jA(a){switch(a){case 5126:return wA;case 35664:return DA;case 35665:return LA;case 35666:return NA;case 35674:return UA;case 35675:return OA;case 35676:return PA;case 5124:case 35670:return IA;case 35667:case 35671:return FA;case 35668:case 35672:return BA;case 35669:case 35673:return zA;case 5125:return HA;case 36294:return GA;case 36295:return VA;case 36296:return kA;case 35678:case 36198:case 36298:case 36306:case 35682:return XA;case 35679:case 36299:case 36307:return WA;case 35680:case 36300:case 36308:case 36293:return YA;case 36289:case 36303:case 36311:case 36292:return qA}}class ZA{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=CA(i.type)}}class KA{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=jA(i.type)}}class QA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const o=this.seq;for(let c=0,u=o.length;c!==u;++c){const d=o[c];d.setValue(e,i[d.id],r)}}}const Th=/(\w+)(\])?(\[|\.)?/g;function Tv(a,e){a.seq.push(e),a.map[e.id]=e}function JA(a,e,i){const r=a.name,o=r.length;for(Th.lastIndex=0;;){const c=Th.exec(r),u=Th.lastIndex;let d=c[1];const m=c[2]==="]",h=c[3];if(m&&(d=d|0),h===void 0||h==="["&&u+2===o){Tv(i,h===void 0?new ZA(d,a,e):new KA(d,a,e));break}else{let v=i.map[d];v===void 0&&(v=new QA(d),Tv(i,v)),i=v}}}class Eu{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let u=0;u<r;++u){const d=e.getActiveUniform(i,u),m=e.getUniformLocation(i,d.name);JA(d,m,this)}const o=[],c=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(u):c.push(u);o.length>0&&(this.seq=o.concat(c))}setValue(e,i,r,o){const c=this.map[i];c!==void 0&&c.setValue(e,r,o)}setOptional(e,i,r){const o=i[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,i,r,o){for(let c=0,u=i.length;c!==u;++c){const d=i[c],m=r[d.id];m.needsUpdate!==!1&&d.setValue(e,m.value,o)}}static seqWithValue(e,i){const r=[];for(let o=0,c=e.length;o!==c;++o){const u=e[o];u.id in i&&r.push(u)}return r}}function Av(a,e,i){const r=a.createShader(e);return a.shaderSource(r,i),a.compileShader(r),r}const $A=37297;let e2=0;function t2(a,e){const i=a.split(`
`),r=[],o=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let u=o;u<c;u++){const d=u+1;r.push(`${d===e?">":" "} ${d}: ${i[u]}`)}return r.join(`
`)}const Rv=new ft;function n2(a){Rt._getMatrix(Rv,Rt.workingColorSpace,a);const e=`mat3( ${Rv.elements.map(i=>i.toFixed(4))} )`;switch(Rt.getTransfer(a)){case Cu:return[e,"LinearTransferOETF"];case Xt:return[e,"sRGBTransferOETF"];default:return ot("WebGLProgram: Unsupported color space: ",a),[e,"LinearTransferOETF"]}}function Cv(a,e,i){const r=a.getShaderParameter(e,a.COMPILE_STATUS),c=(a.getShaderInfoLog(e)||"").trim();if(r&&c==="")return"";const u=/ERROR: 0:(\d+)/.exec(c);if(u){const d=parseInt(u[1]);return i.toUpperCase()+`

`+c+`

`+t2(a.getShaderSource(e),d)}else return c}function i2(a,e){const i=n2(e);return[`vec4 ${a}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const a2={[ux]:"Linear",[fx]:"Reinhard",[dx]:"Cineon",[hx]:"ACESFilmic",[mx]:"AgX",[gx]:"Neutral",[px]:"Custom"};function s2(a,e){const i=a2[e];return i===void 0?(ot("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+a+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+a+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const gu=new ie;function r2(){Rt.getLuminanceCoefficients(gu);const a=gu.x.toFixed(4),e=gu.y.toFixed(4),i=gu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${a}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function o2(a){return[a.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",a.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Cl).join(`
`)}function l2(a){const e=[];for(const i in a){const r=a[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function c2(a,e){const i={},r=a.getProgramParameter(e,a.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const c=a.getActiveAttrib(e,o),u=c.name;let d=1;c.type===a.FLOAT_MAT2&&(d=2),c.type===a.FLOAT_MAT3&&(d=3),c.type===a.FLOAT_MAT4&&(d=4),i[u]={type:c.type,location:a.getAttribLocation(e,u),locationSize:d}}return i}function Cl(a){return a!==""}function wv(a,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Dv(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const u2=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ep(a){return a.replace(u2,d2)}const f2=new Map;function d2(a,e){let i=gt[e];if(i===void 0){const r=f2.get(e);if(r!==void 0)i=gt[r],ot('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Ep(i)}const h2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Lv(a){return a.replace(h2,p2)}function p2(a,e,i,r){let o="";for(let c=parseInt(e);c<parseInt(i);c++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return o}function Nv(a){let e=`precision ${a.precision} float;
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
#define LOW_PRECISION`),e}const m2={[vu]:"SHADOWMAP_TYPE_PCF",[Al]:"SHADOWMAP_TYPE_VSM"};function g2(a){return m2[a.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const _2={[yr]:"ENVMAP_TYPE_CUBE",[Ro]:"ENVMAP_TYPE_CUBE",[Pu]:"ENVMAP_TYPE_CUBE_UV"};function v2(a){return a.envMap===!1?"ENVMAP_TYPE_CUBE":_2[a.envMapMode]||"ENVMAP_TYPE_CUBE"}const x2={[Ro]:"ENVMAP_MODE_REFRACTION"};function S2(a){return a.envMap===!1?"ENVMAP_MODE_REFLECTION":x2[a.envMapMode]||"ENVMAP_MODE_REFLECTION"}const M2={[cx]:"ENVMAP_BLENDING_MULTIPLY",[qy]:"ENVMAP_BLENDING_MIX",[jy]:"ENVMAP_BLENDING_ADD"};function y2(a){return a.envMap===!1?"ENVMAP_BLENDING_NONE":M2[a.combine]||"ENVMAP_BLENDING_NONE"}function E2(a){const e=a.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function b2(a,e,i,r){const o=a.getContext(),c=i.defines;let u=i.vertexShader,d=i.fragmentShader;const m=g2(i),h=v2(i),g=S2(i),v=y2(i),_=E2(i),S=o2(i),E=l2(c),R=o.createProgram();let y,x,F=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Cl).join(`
`),y.length>0&&(y+=`
`),x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Cl).join(`
`),x.length>0&&(x+=`
`)):(y=[Nv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Cl).join(`
`),x=[Nv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+h:"",i.envMap?"#define "+g:"",i.envMap?"#define "+v:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Ea?"#define TONE_MAPPING":"",i.toneMapping!==Ea?gt.tonemapping_pars_fragment:"",i.toneMapping!==Ea?s2("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",gt.colorspace_pars_fragment,i2("linearToOutputTexel",i.outputColorSpace),r2(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Cl).join(`
`)),u=Ep(u),u=wv(u,i),u=Dv(u,i),d=Ep(d),d=wv(d,i),d=Dv(d,i),u=Lv(u),d=Lv(d),i.isRawShaderMaterial!==!0&&(F=`#version 300 es
`,y=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,x=["#define varying in",i.glslVersion===k_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===k_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const I=F+y+u,w=F+x+d,O=Av(o,o.VERTEX_SHADER,I),L=Av(o,o.FRAGMENT_SHADER,w);o.attachShader(R,O),o.attachShader(R,L),i.index0AttributeName!==void 0?o.bindAttribLocation(R,0,i.index0AttributeName):i.hasPositionAttribute===!0&&o.bindAttribLocation(R,0,"position"),o.linkProgram(R);function B(k){if(a.debug.checkShaderErrors){const j=o.getProgramInfoLog(R)||"",ue=o.getShaderInfoLog(O)||"",fe=o.getShaderInfoLog(L)||"",q=j.trim(),z=ue.trim(),H=fe.trim();let te=!0,me=!0;if(o.getProgramParameter(R,o.LINK_STATUS)===!1)if(te=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(o,R,O,L);else{const Se=Cv(o,O,"vertex"),U=Cv(o,L,"fragment");Dt("WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(R,o.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+q+`
`+Se+`
`+U)}else q!==""?ot("WebGLProgram: Program Info Log:",q):(z===""||H==="")&&(me=!1);me&&(k.diagnostics={runnable:te,programLog:q,vertexShader:{log:z,prefix:y},fragmentShader:{log:H,prefix:x}})}o.deleteShader(O),o.deleteShader(L),A=new Eu(o,R),N=c2(o,R)}let A;this.getUniforms=function(){return A===void 0&&B(this),A};let N;this.getAttributes=function(){return N===void 0&&B(this),N};let Y=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return Y===!1&&(Y=o.getProgramParameter(R,$A)),Y},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(R),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=e2++,this.cacheKey=e,this.usedTimes=1,this.program=R,this.vertexShader=O,this.fragmentShader=L,this}let T2=0;class A2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,i,r){const o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new R2(e),i.set(e,r)),r}}class R2{constructor(e){this.id=T2++,this.code=e,this.usedTimes=0}}function C2(a){return a===Er||a===Tu||a===Au}function w2(a,e,i,r,o,c){const u=new Rx,d=new A2,m=new Set,h=[],g=new Map,v=r.logarithmicDepthBuffer;let _=r.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(A){return m.add(A),A===0?"uv":`uv${A}`}function R(A,N,Y,k,j,ue){const fe=k.fog,q=j.geometry,z=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?k.environment:null,H=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap,te=e.get(A.envMap||z,H),me=te&&te.mapping===Pu?te.image.height:null,Se=S[A.type];A.precision!==null&&(_=r.getMaxPrecision(A.precision),_!==A.precision&&ot("WebGLProgram.getParameters:",A.precision,"not supported, using",_,"instead."));const U=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,K=U!==void 0?U.length:0;let be=0;q.morphAttributes.position!==void 0&&(be=1),q.morphAttributes.normal!==void 0&&(be=2),q.morphAttributes.color!==void 0&&(be=3);let Ae,Ce,ae,Me;if(Se){const Ze=xa[Se];Ae=Ze.vertexShader,Ce=Ze.fragmentShader}else{Ae=A.vertexShader,Ce=A.fragmentShader;const Ze=d.getVertexShaderStage(A),nn=d.getFragmentShaderStage(A);d.update(A,Ze,nn),ae=Ze.id,Me=nn.id}const ge=a.getRenderTarget(),qe=a.state.buffers.depth.getReversed(),st=j.isInstancedMesh===!0,et=j.isBatchedMesh===!0,Yt=!!A.map,ht=!!A.matcap,vt=!!te,it=!!A.aoMap,ct=!!A.lightMap,Qt=!!A.bumpMap&&A.wireframe===!1,Jt=!!A.normalMap,qt=!!A.displacementMap,tn=!!A.emissiveMap,Gt=!!A.metalnessMap,sn=!!A.roughnessMap,Z=A.anisotropy>0,bt=A.clearcoat>0,Tt=A.dispersion>0,P=A.iridescence>0,b=A.sheen>0,J=A.transmission>0,re=Z&&!!A.anisotropyMap,le=bt&&!!A.clearcoatMap,we=bt&&!!A.clearcoatNormalMap,Le=bt&&!!A.clearcoatRoughnessMap,pe=P&&!!A.iridescenceMap,de=P&&!!A.iridescenceThicknessMap,De=b&&!!A.sheenColorMap,Ge=b&&!!A.sheenRoughnessMap,Fe=!!A.specularMap,Ie=!!A.specularColorMap,Je=!!A.specularIntensityMap,tt=J&&!!A.transmissionMap,rt=J&&!!A.thicknessMap,X=!!A.gradientMap,Ne=!!A.alphaMap,ve=A.alphaTest>0,Oe=!!A.alphaHash,Pe=!!A.extensions;let Ee=Ea;A.toneMapped&&(ge===null||ge.isXRRenderTarget===!0)&&(Ee=a.toneMapping);const Ve={shaderID:Se,shaderType:A.type,shaderName:A.name,vertexShader:Ae,fragmentShader:Ce,defines:A.defines,customVertexShaderID:ae,customFragmentShaderID:Me,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:_,batching:et,batchingColor:et&&j._colorsTexture!==null,instancing:st,instancingColor:st&&j.instanceColor!==null,instancingMorph:st&&j.morphTexture!==null,outputColorSpace:ge===null?a.outputColorSpace:ge.isXRRenderTarget===!0?ge.texture.colorSpace:Rt.workingColorSpace,alphaToCoverage:!!A.alphaToCoverage,map:Yt,matcap:ht,envMap:vt,envMapMode:vt&&te.mapping,envMapCubeUVHeight:me,aoMap:it,lightMap:ct,bumpMap:Qt,normalMap:Jt,displacementMap:qt,emissiveMap:tn,normalMapObjectSpace:Jt&&A.normalMapType===Qy,normalMapTangentSpace:Jt&&A.normalMapType===H_,packedNormalMap:Jt&&A.normalMapType===H_&&C2(A.normalMap.format),metalnessMap:Gt,roughnessMap:sn,anisotropy:Z,anisotropyMap:re,clearcoat:bt,clearcoatMap:le,clearcoatNormalMap:we,clearcoatRoughnessMap:Le,dispersion:Tt,iridescence:P,iridescenceMap:pe,iridescenceThicknessMap:de,sheen:b,sheenColorMap:De,sheenRoughnessMap:Ge,specularMap:Fe,specularColorMap:Ie,specularIntensityMap:Je,transmission:J,transmissionMap:tt,thicknessMap:rt,gradientMap:X,opaque:A.transparent===!1&&A.blending===Mo&&A.alphaToCoverage===!1,alphaMap:Ne,alphaTest:ve,alphaHash:Oe,combine:A.combine,mapUv:Yt&&E(A.map.channel),aoMapUv:it&&E(A.aoMap.channel),lightMapUv:ct&&E(A.lightMap.channel),bumpMapUv:Qt&&E(A.bumpMap.channel),normalMapUv:Jt&&E(A.normalMap.channel),displacementMapUv:qt&&E(A.displacementMap.channel),emissiveMapUv:tn&&E(A.emissiveMap.channel),metalnessMapUv:Gt&&E(A.metalnessMap.channel),roughnessMapUv:sn&&E(A.roughnessMap.channel),anisotropyMapUv:re&&E(A.anisotropyMap.channel),clearcoatMapUv:le&&E(A.clearcoatMap.channel),clearcoatNormalMapUv:we&&E(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Le&&E(A.clearcoatRoughnessMap.channel),iridescenceMapUv:pe&&E(A.iridescenceMap.channel),iridescenceThicknessMapUv:de&&E(A.iridescenceThicknessMap.channel),sheenColorMapUv:De&&E(A.sheenColorMap.channel),sheenRoughnessMapUv:Ge&&E(A.sheenRoughnessMap.channel),specularMapUv:Fe&&E(A.specularMap.channel),specularColorMapUv:Ie&&E(A.specularColorMap.channel),specularIntensityMapUv:Je&&E(A.specularIntensityMap.channel),transmissionMapUv:tt&&E(A.transmissionMap.channel),thicknessMapUv:rt&&E(A.thicknessMap.channel),alphaMapUv:Ne&&E(A.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(Jt||Z),vertexNormals:!!q.attributes.normal,vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:j.isPoints===!0&&!!q.attributes.uv&&(Yt||Ne),fog:!!fe,useFog:A.fog===!0,fogExp2:!!fe&&fe.isFogExp2,flatShading:A.wireframe===!1&&(A.flatShading===!0||q.attributes.normal===void 0&&Jt===!1&&(A.isMeshLambertMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isMeshPhysicalMaterial)),sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:qe,skinning:j.isSkinnedMesh===!0,hasPositionAttribute:q.attributes.position!==void 0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:be,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numLightProbes:N.numLightProbes,numLightProbeGrids:ue.length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:A.dithering,shadowMapEnabled:a.shadowMap.enabled&&Y.length>0,shadowMapType:a.shadowMap.type,toneMapping:Ee,decodeVideoTexture:Yt&&A.map.isVideoTexture===!0&&Rt.getTransfer(A.map.colorSpace)===Xt,decodeVideoTextureEmissive:tn&&A.emissiveMap.isVideoTexture===!0&&Rt.getTransfer(A.emissiveMap.colorSpace)===Xt,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===Sa,flipSided:A.side===pi,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:Pe&&A.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Pe&&A.extensions.multiDraw===!0||et)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return Ve.vertexUv1s=m.has(1),Ve.vertexUv2s=m.has(2),Ve.vertexUv3s=m.has(3),m.clear(),Ve}function y(A){const N=[];if(A.shaderID?N.push(A.shaderID):(N.push(A.customVertexShaderID),N.push(A.customFragmentShaderID)),A.defines!==void 0)for(const Y in A.defines)N.push(Y),N.push(A.defines[Y]);return A.isRawShaderMaterial===!1&&(x(N,A),F(N,A),N.push(a.outputColorSpace)),N.push(A.customProgramCacheKey),N.join()}function x(A,N){A.push(N.precision),A.push(N.outputColorSpace),A.push(N.envMapMode),A.push(N.envMapCubeUVHeight),A.push(N.mapUv),A.push(N.alphaMapUv),A.push(N.lightMapUv),A.push(N.aoMapUv),A.push(N.bumpMapUv),A.push(N.normalMapUv),A.push(N.displacementMapUv),A.push(N.emissiveMapUv),A.push(N.metalnessMapUv),A.push(N.roughnessMapUv),A.push(N.anisotropyMapUv),A.push(N.clearcoatMapUv),A.push(N.clearcoatNormalMapUv),A.push(N.clearcoatRoughnessMapUv),A.push(N.iridescenceMapUv),A.push(N.iridescenceThicknessMapUv),A.push(N.sheenColorMapUv),A.push(N.sheenRoughnessMapUv),A.push(N.specularMapUv),A.push(N.specularColorMapUv),A.push(N.specularIntensityMapUv),A.push(N.transmissionMapUv),A.push(N.thicknessMapUv),A.push(N.combine),A.push(N.fogExp2),A.push(N.sizeAttenuation),A.push(N.morphTargetsCount),A.push(N.morphAttributeCount),A.push(N.numDirLights),A.push(N.numPointLights),A.push(N.numSpotLights),A.push(N.numSpotLightMaps),A.push(N.numHemiLights),A.push(N.numRectAreaLights),A.push(N.numDirLightShadows),A.push(N.numPointLightShadows),A.push(N.numSpotLightShadows),A.push(N.numSpotLightShadowsWithMaps),A.push(N.numLightProbes),A.push(N.shadowMapType),A.push(N.toneMapping),A.push(N.numClippingPlanes),A.push(N.numClipIntersection),A.push(N.depthPacking)}function F(A,N){u.disableAll(),N.instancing&&u.enable(0),N.instancingColor&&u.enable(1),N.instancingMorph&&u.enable(2),N.matcap&&u.enable(3),N.envMap&&u.enable(4),N.normalMapObjectSpace&&u.enable(5),N.normalMapTangentSpace&&u.enable(6),N.clearcoat&&u.enable(7),N.iridescence&&u.enable(8),N.alphaTest&&u.enable(9),N.vertexColors&&u.enable(10),N.vertexAlphas&&u.enable(11),N.vertexUv1s&&u.enable(12),N.vertexUv2s&&u.enable(13),N.vertexUv3s&&u.enable(14),N.vertexTangents&&u.enable(15),N.anisotropy&&u.enable(16),N.alphaHash&&u.enable(17),N.batching&&u.enable(18),N.dispersion&&u.enable(19),N.batchingColor&&u.enable(20),N.gradientMap&&u.enable(21),N.packedNormalMap&&u.enable(22),N.vertexNormals&&u.enable(23),A.push(u.mask),u.disableAll(),N.fog&&u.enable(0),N.useFog&&u.enable(1),N.flatShading&&u.enable(2),N.logarithmicDepthBuffer&&u.enable(3),N.reversedDepthBuffer&&u.enable(4),N.skinning&&u.enable(5),N.morphTargets&&u.enable(6),N.morphNormals&&u.enable(7),N.morphColors&&u.enable(8),N.premultipliedAlpha&&u.enable(9),N.shadowMapEnabled&&u.enable(10),N.doubleSided&&u.enable(11),N.flipSided&&u.enable(12),N.useDepthPacking&&u.enable(13),N.dithering&&u.enable(14),N.transmission&&u.enable(15),N.sheen&&u.enable(16),N.opaque&&u.enable(17),N.pointsUvs&&u.enable(18),N.decodeVideoTexture&&u.enable(19),N.decodeVideoTextureEmissive&&u.enable(20),N.alphaToCoverage&&u.enable(21),N.numLightProbeGrids>0&&u.enable(22),N.hasPositionAttribute&&u.enable(23),A.push(u.mask)}function I(A){const N=S[A.type];let Y;if(N){const k=xa[N];Y=$E.clone(k.uniforms)}else Y=A.uniforms;return Y}function w(A,N){let Y=g.get(N);return Y!==void 0?++Y.usedTimes:(Y=new b2(a,N,A,o),h.push(Y),g.set(N,Y)),Y}function O(A){if(--A.usedTimes===0){const N=h.indexOf(A);h[N]=h[h.length-1],h.pop(),g.delete(A.cacheKey),A.destroy()}}function L(A){d.remove(A)}function B(){d.dispose()}return{getParameters:R,getProgramCacheKey:y,getUniforms:I,acquireProgram:w,releaseProgram:O,releaseShaderCache:L,programs:h,dispose:B}}function D2(){let a=new WeakMap;function e(u){return a.has(u)}function i(u){let d=a.get(u);return d===void 0&&(d={},a.set(u,d)),d}function r(u){a.delete(u)}function o(u,d,m){a.get(u)[d]=m}function c(){a=new WeakMap}return{has:e,get:i,remove:r,update:o,dispose:c}}function L2(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.materialVariant!==e.materialVariant?a.materialVariant-e.materialVariant:a.z!==e.z?a.z-e.z:a.id-e.id}function Uv(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function Ov(){const a=[];let e=0;const i=[],r=[],o=[];function c(){e=0,i.length=0,r.length=0,o.length=0}function u(_){let S=0;return _.isInstancedMesh&&(S+=2),_.isSkinnedMesh&&(S+=1),S}function d(_,S,E,R,y,x){let F=a[e];return F===void 0?(F={id:_.id,object:_,geometry:S,material:E,materialVariant:u(_),groupOrder:R,renderOrder:_.renderOrder,z:y,group:x},a[e]=F):(F.id=_.id,F.object=_,F.geometry=S,F.material=E,F.materialVariant=u(_),F.groupOrder=R,F.renderOrder=_.renderOrder,F.z=y,F.group=x),e++,F}function m(_,S,E,R,y,x){const F=d(_,S,E,R,y,x);E.transmission>0?r.push(F):E.transparent===!0?o.push(F):i.push(F)}function h(_,S,E,R,y,x){const F=d(_,S,E,R,y,x);E.transmission>0?r.unshift(F):E.transparent===!0?o.unshift(F):i.unshift(F)}function g(_,S,E){i.length>1&&i.sort(_||L2),r.length>1&&r.sort(S||Uv),o.length>1&&o.sort(S||Uv),E&&(i.reverse(),r.reverse(),o.reverse())}function v(){for(let _=e,S=a.length;_<S;_++){const E=a[_];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:i,transmissive:r,transparent:o,init:c,push:m,unshift:h,finish:v,sort:g}}function N2(){let a=new WeakMap;function e(r,o){const c=a.get(r);let u;return c===void 0?(u=new Ov,a.set(r,[u])):o>=c.length?(u=new Ov,c.push(u)):u=c[o],u}function i(){a=new WeakMap}return{get:e,dispose:i}}function U2(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new ie,color:new Ht};break;case"SpotLight":i={position:new ie,direction:new ie,color:new Ht,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new ie,color:new Ht,distance:0,decay:0};break;case"HemisphereLight":i={direction:new ie,skyColor:new Ht,groundColor:new Ht};break;case"RectAreaLight":i={color:new Ht,position:new ie,halfWidth:new ie,halfHeight:new ie};break}return a[e.id]=i,i}}}function O2(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=i,i}}}let P2=0;function I2(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function F2(a){const e=new U2,i=O2(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new ie);const o=new ie,c=new bn,u=new bn;function d(h){let g=0,v=0,_=0;for(let N=0;N<9;N++)r.probe[N].set(0,0,0);let S=0,E=0,R=0,y=0,x=0,F=0,I=0,w=0,O=0,L=0,B=0;h.sort(I2);for(let N=0,Y=h.length;N<Y;N++){const k=h[N],j=k.color,ue=k.intensity,fe=k.distance;let q=null;if(k.shadow&&k.shadow.map&&(k.shadow.map.texture.format===Er?q=k.shadow.map.texture:q=k.shadow.map.depthTexture||k.shadow.map.texture),k.isAmbientLight)g+=j.r*ue,v+=j.g*ue,_+=j.b*ue;else if(k.isLightProbe){for(let z=0;z<9;z++)r.probe[z].addScaledVector(k.sh.coefficients[z],ue);B++}else if(k.isDirectionalLight){const z=e.get(k);if(z.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const H=k.shadow,te=i.get(k);te.shadowIntensity=H.intensity,te.shadowBias=H.bias,te.shadowNormalBias=H.normalBias,te.shadowRadius=H.radius,te.shadowMapSize=H.mapSize,r.directionalShadow[S]=te,r.directionalShadowMap[S]=q,r.directionalShadowMatrix[S]=k.shadow.matrix,F++}r.directional[S]=z,S++}else if(k.isSpotLight){const z=e.get(k);z.position.setFromMatrixPosition(k.matrixWorld),z.color.copy(j).multiplyScalar(ue),z.distance=fe,z.coneCos=Math.cos(k.angle),z.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),z.decay=k.decay,r.spot[R]=z;const H=k.shadow;if(k.map&&(r.spotLightMap[O]=k.map,O++,H.updateMatrices(k),k.castShadow&&L++),r.spotLightMatrix[R]=H.matrix,k.castShadow){const te=i.get(k);te.shadowIntensity=H.intensity,te.shadowBias=H.bias,te.shadowNormalBias=H.normalBias,te.shadowRadius=H.radius,te.shadowMapSize=H.mapSize,r.spotShadow[R]=te,r.spotShadowMap[R]=q,w++}R++}else if(k.isRectAreaLight){const z=e.get(k);z.color.copy(j).multiplyScalar(ue),z.halfWidth.set(k.width*.5,0,0),z.halfHeight.set(0,k.height*.5,0),r.rectArea[y]=z,y++}else if(k.isPointLight){const z=e.get(k);if(z.color.copy(k.color).multiplyScalar(k.intensity),z.distance=k.distance,z.decay=k.decay,k.castShadow){const H=k.shadow,te=i.get(k);te.shadowIntensity=H.intensity,te.shadowBias=H.bias,te.shadowNormalBias=H.normalBias,te.shadowRadius=H.radius,te.shadowMapSize=H.mapSize,te.shadowCameraNear=H.camera.near,te.shadowCameraFar=H.camera.far,r.pointShadow[E]=te,r.pointShadowMap[E]=q,r.pointShadowMatrix[E]=k.shadow.matrix,I++}r.point[E]=z,E++}else if(k.isHemisphereLight){const z=e.get(k);z.skyColor.copy(k.color).multiplyScalar(ue),z.groundColor.copy(k.groundColor).multiplyScalar(ue),r.hemi[x]=z,x++}}y>0&&(a.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ye.LTC_FLOAT_1,r.rectAreaLTC2=Ye.LTC_FLOAT_2):(r.rectAreaLTC1=Ye.LTC_HALF_1,r.rectAreaLTC2=Ye.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=v,r.ambient[2]=_;const A=r.hash;(A.directionalLength!==S||A.pointLength!==E||A.spotLength!==R||A.rectAreaLength!==y||A.hemiLength!==x||A.numDirectionalShadows!==F||A.numPointShadows!==I||A.numSpotShadows!==w||A.numSpotMaps!==O||A.numLightProbes!==B)&&(r.directional.length=S,r.spot.length=R,r.rectArea.length=y,r.point.length=E,r.hemi.length=x,r.directionalShadow.length=F,r.directionalShadowMap.length=F,r.pointShadow.length=I,r.pointShadowMap.length=I,r.spotShadow.length=w,r.spotShadowMap.length=w,r.directionalShadowMatrix.length=F,r.pointShadowMatrix.length=I,r.spotLightMatrix.length=w+O-L,r.spotLightMap.length=O,r.numSpotLightShadowsWithMaps=L,r.numLightProbes=B,A.directionalLength=S,A.pointLength=E,A.spotLength=R,A.rectAreaLength=y,A.hemiLength=x,A.numDirectionalShadows=F,A.numPointShadows=I,A.numSpotShadows=w,A.numSpotMaps=O,A.numLightProbes=B,r.version=P2++)}function m(h,g){let v=0,_=0,S=0,E=0,R=0;const y=g.matrixWorldInverse;for(let x=0,F=h.length;x<F;x++){const I=h[x];if(I.isDirectionalLight){const w=r.directional[v];w.direction.setFromMatrixPosition(I.matrixWorld),o.setFromMatrixPosition(I.target.matrixWorld),w.direction.sub(o),w.direction.transformDirection(y),v++}else if(I.isSpotLight){const w=r.spot[S];w.position.setFromMatrixPosition(I.matrixWorld),w.position.applyMatrix4(y),w.direction.setFromMatrixPosition(I.matrixWorld),o.setFromMatrixPosition(I.target.matrixWorld),w.direction.sub(o),w.direction.transformDirection(y),S++}else if(I.isRectAreaLight){const w=r.rectArea[E];w.position.setFromMatrixPosition(I.matrixWorld),w.position.applyMatrix4(y),u.identity(),c.copy(I.matrixWorld),c.premultiply(y),u.extractRotation(c),w.halfWidth.set(I.width*.5,0,0),w.halfHeight.set(0,I.height*.5,0),w.halfWidth.applyMatrix4(u),w.halfHeight.applyMatrix4(u),E++}else if(I.isPointLight){const w=r.point[_];w.position.setFromMatrixPosition(I.matrixWorld),w.position.applyMatrix4(y),_++}else if(I.isHemisphereLight){const w=r.hemi[R];w.direction.setFromMatrixPosition(I.matrixWorld),w.direction.transformDirection(y),R++}}}return{setup:d,setupView:m,state:r}}function Pv(a){const e=new F2(a),i=[],r=[],o=[];function c(_){v.camera=_,i.length=0,r.length=0,o.length=0}function u(_){i.push(_)}function d(_){r.push(_)}function m(_){o.push(_)}function h(){e.setup(i)}function g(_){e.setupView(i,_)}const v={lightsArray:i,shadowsArray:r,lightProbeGridArray:o,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:v,setupLights:h,setupLightsView:g,pushLight:u,pushShadow:d,pushLightProbeGrid:m}}function B2(a){let e=new WeakMap;function i(o,c=0){const u=e.get(o);let d;return u===void 0?(d=new Pv(a),e.set(o,[d])):c>=u.length?(d=new Pv(a),u.push(d)):d=u[c],d}function r(){e=new WeakMap}return{get:i,dispose:r}}const z2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,H2=`uniform sampler2D shadow_pass;
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
}`,G2=[new ie(1,0,0),new ie(-1,0,0),new ie(0,1,0),new ie(0,-1,0),new ie(0,0,1),new ie(0,0,-1)],V2=[new ie(0,-1,0),new ie(0,-1,0),new ie(0,0,1),new ie(0,0,-1),new ie(0,-1,0),new ie(0,-1,0)],Iv=new bn,Tl=new ie,Ah=new ie;function k2(a,e,i){let r=new Lx;const o=new Pt,c=new Pt,u=new Sn,d=new ib,m=new ab,h={},g=i.maxTextureSize,v={[ns]:pi,[pi]:ns,[Sa]:Sa},_=new qi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Pt},radius:{value:4}},vertexShader:z2,fragmentShader:H2}),S=_.clone();S.defines.HORIZONTAL_PASS=1;const E=new Yi;E.setAttribute("position",new Ta(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new Ri(E,_),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=vu;let x=this.type;this.render=function(L,B,A){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||L.length===0)return;this.type===Cy&&(ot("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=vu);const N=a.getRenderTarget(),Y=a.getActiveCubeFace(),k=a.getActiveMipmapLevel(),j=a.state;j.setBlending(es),j.buffers.depth.getReversed()===!0?j.buffers.color.setClear(0,0,0,0):j.buffers.color.setClear(1,1,1,1),j.buffers.depth.setTest(!0),j.setScissorTest(!1);const ue=x!==this.type;ue&&B.traverse(function(fe){fe.material&&(Array.isArray(fe.material)?fe.material.forEach(q=>q.needsUpdate=!0):fe.material.needsUpdate=!0)});for(let fe=0,q=L.length;fe<q;fe++){const z=L[fe],H=z.shadow;if(H===void 0){ot("WebGLShadowMap:",z,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;o.copy(H.mapSize);const te=H.getFrameExtents();o.multiply(te),c.copy(H.mapSize),(o.x>g||o.y>g)&&(o.x>g&&(c.x=Math.floor(g/te.x),o.x=c.x*te.x,H.mapSize.x=c.x),o.y>g&&(c.y=Math.floor(g/te.y),o.y=c.y*te.y,H.mapSize.y=c.y));const me=a.state.buffers.depth.getReversed();if(H.camera._reversedDepth=me,H.map===null||ue===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===Al){if(z.isPointLight){ot("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new ba(o.x,o.y,{format:Er,type:is,minFilter:hn,magFilter:hn,generateMipmaps:!1}),H.map.texture.name=z.name+".shadowMap",H.map.depthTexture=new Co(o.x,o.y,Ma),H.map.depthTexture.name=z.name+".shadowMapDepth",H.map.depthTexture.format=as,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=qn,H.map.depthTexture.magFilter=qn}else z.isPointLight?(H.map=new Hx(o.x),H.map.depthTexture=new ZE(o.x,Aa)):(H.map=new ba(o.x,o.y),H.map.depthTexture=new Co(o.x,o.y,Aa)),H.map.depthTexture.name=z.name+".shadowMap",H.map.depthTexture.format=as,this.type===vu?(H.map.depthTexture.compareFunction=me?Pp:Op,H.map.depthTexture.minFilter=hn,H.map.depthTexture.magFilter=hn):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=qn,H.map.depthTexture.magFilter=qn);H.camera.updateProjectionMatrix()}const Se=H.map.isWebGLCubeRenderTarget?6:1;for(let U=0;U<Se;U++){if(H.map.isWebGLCubeRenderTarget)a.setRenderTarget(H.map,U),a.clear();else{U===0&&(a.setRenderTarget(H.map),a.clear());const K=H.getViewport(U);u.set(c.x*K.x,c.y*K.y,c.x*K.z,c.y*K.w),j.viewport(u)}if(z.isPointLight){const K=H.camera,be=H.matrix,Ae=z.distance||K.far;Ae!==K.far&&(K.far=Ae,K.updateProjectionMatrix()),Tl.setFromMatrixPosition(z.matrixWorld),K.position.copy(Tl),Ah.copy(K.position),Ah.add(G2[U]),K.up.copy(V2[U]),K.lookAt(Ah),K.updateMatrixWorld(),be.makeTranslation(-Tl.x,-Tl.y,-Tl.z),Iv.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),H._frustum.setFromProjectionMatrix(Iv,K.coordinateSystem,K.reversedDepth)}else H.updateMatrices(z);r=H.getFrustum(),w(B,A,H.camera,z,this.type)}H.isPointLightShadow!==!0&&this.type===Al&&F(H,A),H.needsUpdate=!1}x=this.type,y.needsUpdate=!1,a.setRenderTarget(N,Y,k)};function F(L,B){const A=e.update(R);_.defines.VSM_SAMPLES!==L.blurSamples&&(_.defines.VSM_SAMPLES=L.blurSamples,S.defines.VSM_SAMPLES=L.blurSamples,_.needsUpdate=!0,S.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new ba(o.x,o.y,{format:Er,type:is})),_.uniforms.shadow_pass.value=L.map.depthTexture,_.uniforms.resolution.value=L.mapSize,_.uniforms.radius.value=L.radius,a.setRenderTarget(L.mapPass),a.clear(),a.renderBufferDirect(B,null,A,_,R,null),S.uniforms.shadow_pass.value=L.mapPass.texture,S.uniforms.resolution.value=L.mapSize,S.uniforms.radius.value=L.radius,a.setRenderTarget(L.map),a.clear(),a.renderBufferDirect(B,null,A,S,R,null)}function I(L,B,A,N){let Y=null;const k=A.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(k!==void 0)Y=k;else if(Y=A.isPointLight===!0?m:d,a.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0||B.alphaToCoverage===!0){const j=Y.uuid,ue=B.uuid;let fe=h[j];fe===void 0&&(fe={},h[j]=fe);let q=fe[ue];q===void 0&&(q=Y.clone(),fe[ue]=q,B.addEventListener("dispose",O)),Y=q}if(Y.visible=B.visible,Y.wireframe=B.wireframe,N===Al?Y.side=B.shadowSide!==null?B.shadowSide:B.side:Y.side=B.shadowSide!==null?B.shadowSide:v[B.side],Y.alphaMap=B.alphaMap,Y.alphaTest=B.alphaToCoverage===!0?.5:B.alphaTest,Y.map=B.map,Y.clipShadows=B.clipShadows,Y.clippingPlanes=B.clippingPlanes,Y.clipIntersection=B.clipIntersection,Y.displacementMap=B.displacementMap,Y.displacementScale=B.displacementScale,Y.displacementBias=B.displacementBias,Y.wireframeLinewidth=B.wireframeLinewidth,Y.linewidth=B.linewidth,A.isPointLight===!0&&Y.isMeshDistanceMaterial===!0){const j=a.properties.get(Y);j.light=A}return Y}function w(L,B,A,N,Y){if(L.visible===!1)return;if(L.layers.test(B.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&Y===Al)&&(!L.frustumCulled||r.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,L.matrixWorld);const ue=e.update(L),fe=L.material;if(Array.isArray(fe)){const q=ue.groups;for(let z=0,H=q.length;z<H;z++){const te=q[z],me=fe[te.materialIndex];if(me&&me.visible){const Se=I(L,me,N,Y);L.onBeforeShadow(a,L,B,A,ue,Se,te),a.renderBufferDirect(A,null,ue,Se,L,te),L.onAfterShadow(a,L,B,A,ue,Se,te)}}}else if(fe.visible){const q=I(L,fe,N,Y);L.onBeforeShadow(a,L,B,A,ue,q,null),a.renderBufferDirect(A,null,ue,q,L,null),L.onAfterShadow(a,L,B,A,ue,q,null)}}const j=L.children;for(let ue=0,fe=j.length;ue<fe;ue++)w(j[ue],B,A,N,Y)}function O(L){L.target.removeEventListener("dispose",O);for(const A in h){const N=h[A],Y=L.target.uuid;Y in N&&(N[Y].dispose(),delete N[Y])}}}function X2(a,e){function i(){let X=!1;const Ne=new Sn;let ve=null;const Oe=new Sn(0,0,0,0);return{setMask:function(Pe){ve!==Pe&&!X&&(a.colorMask(Pe,Pe,Pe,Pe),ve=Pe)},setLocked:function(Pe){X=Pe},setClear:function(Pe,Ee,Ve,Ze,nn){nn===!0&&(Pe*=Ze,Ee*=Ze,Ve*=Ze),Ne.set(Pe,Ee,Ve,Ze),Oe.equals(Ne)===!1&&(a.clearColor(Pe,Ee,Ve,Ze),Oe.copy(Ne))},reset:function(){X=!1,ve=null,Oe.set(-1,0,0,0)}}}function r(){let X=!1,Ne=!1,ve=null,Oe=null,Pe=null;return{setReversed:function(Ee){if(Ne!==Ee){const Ve=e.get("EXT_clip_control");Ee?Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.ZERO_TO_ONE_EXT):Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.NEGATIVE_ONE_TO_ONE_EXT),Ne=Ee;const Ze=Pe;Pe=null,this.setClear(Ze)}},getReversed:function(){return Ne},setTest:function(Ee){Ee?ge(a.DEPTH_TEST):qe(a.DEPTH_TEST)},setMask:function(Ee){ve!==Ee&&!X&&(a.depthMask(Ee),ve=Ee)},setFunc:function(Ee){if(Ne&&(Ee=oE[Ee]),Oe!==Ee){switch(Ee){case Fh:a.depthFunc(a.NEVER);break;case Bh:a.depthFunc(a.ALWAYS);break;case zh:a.depthFunc(a.LESS);break;case Ao:a.depthFunc(a.LEQUAL);break;case Hh:a.depthFunc(a.EQUAL);break;case Gh:a.depthFunc(a.GEQUAL);break;case Vh:a.depthFunc(a.GREATER);break;case kh:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}Oe=Ee}},setLocked:function(Ee){X=Ee},setClear:function(Ee){Pe!==Ee&&(Pe=Ee,Ne&&(Ee=1-Ee),a.clearDepth(Ee))},reset:function(){X=!1,ve=null,Oe=null,Pe=null,Ne=!1}}}function o(){let X=!1,Ne=null,ve=null,Oe=null,Pe=null,Ee=null,Ve=null,Ze=null,nn=null;return{setTest:function(wt){X||(wt?ge(a.STENCIL_TEST):qe(a.STENCIL_TEST))},setMask:function(wt){Ne!==wt&&!X&&(a.stencilMask(wt),Ne=wt)},setFunc:function(wt,ti,In){(ve!==wt||Oe!==ti||Pe!==In)&&(a.stencilFunc(wt,ti,In),ve=wt,Oe=ti,Pe=In)},setOp:function(wt,ti,In){(Ee!==wt||Ve!==ti||Ze!==In)&&(a.stencilOp(wt,ti,In),Ee=wt,Ve=ti,Ze=In)},setLocked:function(wt){X=wt},setClear:function(wt){nn!==wt&&(a.clearStencil(wt),nn=wt)},reset:function(){X=!1,Ne=null,ve=null,Oe=null,Pe=null,Ee=null,Ve=null,Ze=null,nn=null}}}const c=new i,u=new r,d=new o,m=new WeakMap,h=new WeakMap;let g={},v={},_={},S=new WeakMap,E=[],R=null,y=!1,x=null,F=null,I=null,w=null,O=null,L=null,B=null,A=new Ht(0,0,0),N=0,Y=!1,k=null,j=null,ue=null,fe=null,q=null;const z=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,te=0;const me=a.getParameter(a.VERSION);me.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(me)[1]),H=te>=1):me.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(me)[1]),H=te>=2);let Se=null,U={};const K=a.getParameter(a.SCISSOR_BOX),be=a.getParameter(a.VIEWPORT),Ae=new Sn().fromArray(K),Ce=new Sn().fromArray(be);function ae(X,Ne,ve,Oe){const Pe=new Uint8Array(4),Ee=a.createTexture();a.bindTexture(X,Ee),a.texParameteri(X,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(X,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let Ve=0;Ve<ve;Ve++)X===a.TEXTURE_3D||X===a.TEXTURE_2D_ARRAY?a.texImage3D(Ne,0,a.RGBA,1,1,Oe,0,a.RGBA,a.UNSIGNED_BYTE,Pe):a.texImage2D(Ne+Ve,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,Pe);return Ee}const Me={};Me[a.TEXTURE_2D]=ae(a.TEXTURE_2D,a.TEXTURE_2D,1),Me[a.TEXTURE_CUBE_MAP]=ae(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),Me[a.TEXTURE_2D_ARRAY]=ae(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1),Me[a.TEXTURE_3D]=ae(a.TEXTURE_3D,a.TEXTURE_3D,1,1),c.setClear(0,0,0,1),u.setClear(1),d.setClear(0),ge(a.DEPTH_TEST),u.setFunc(Ao),Qt(!1),Jt(F_),ge(a.CULL_FACE),it(es);function ge(X){g[X]!==!0&&(a.enable(X),g[X]=!0)}function qe(X){g[X]!==!1&&(a.disable(X),g[X]=!1)}function st(X,Ne){return _[X]!==Ne?(a.bindFramebuffer(X,Ne),_[X]=Ne,X===a.DRAW_FRAMEBUFFER&&(_[a.FRAMEBUFFER]=Ne),X===a.FRAMEBUFFER&&(_[a.DRAW_FRAMEBUFFER]=Ne),!0):!1}function et(X,Ne){let ve=E,Oe=!1;if(X){ve=S.get(Ne),ve===void 0&&(ve=[],S.set(Ne,ve));const Pe=X.textures;if(ve.length!==Pe.length||ve[0]!==a.COLOR_ATTACHMENT0){for(let Ee=0,Ve=Pe.length;Ee<Ve;Ee++)ve[Ee]=a.COLOR_ATTACHMENT0+Ee;ve.length=Pe.length,Oe=!0}}else ve[0]!==a.BACK&&(ve[0]=a.BACK,Oe=!0);Oe&&a.drawBuffers(ve)}function Yt(X){return R!==X?(a.useProgram(X),R=X,!0):!1}const ht={[vr]:a.FUNC_ADD,[Dy]:a.FUNC_SUBTRACT,[Ly]:a.FUNC_REVERSE_SUBTRACT};ht[Ny]=a.MIN,ht[Uy]=a.MAX;const vt={[Oy]:a.ZERO,[Py]:a.ONE,[Iy]:a.SRC_COLOR,[Ph]:a.SRC_ALPHA,[Vy]:a.SRC_ALPHA_SATURATE,[Hy]:a.DST_COLOR,[By]:a.DST_ALPHA,[Fy]:a.ONE_MINUS_SRC_COLOR,[Ih]:a.ONE_MINUS_SRC_ALPHA,[Gy]:a.ONE_MINUS_DST_COLOR,[zy]:a.ONE_MINUS_DST_ALPHA,[ky]:a.CONSTANT_COLOR,[Xy]:a.ONE_MINUS_CONSTANT_COLOR,[Wy]:a.CONSTANT_ALPHA,[Yy]:a.ONE_MINUS_CONSTANT_ALPHA};function it(X,Ne,ve,Oe,Pe,Ee,Ve,Ze,nn,wt){if(X===es){y===!0&&(qe(a.BLEND),y=!1);return}if(y===!1&&(ge(a.BLEND),y=!0),X!==wy){if(X!==x||wt!==Y){if((F!==vr||O!==vr)&&(a.blendEquation(a.FUNC_ADD),F=vr,O=vr),wt)switch(X){case Mo:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case Oh:a.blendFunc(a.ONE,a.ONE);break;case B_:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case z_:a.blendFuncSeparate(a.DST_COLOR,a.ONE_MINUS_SRC_ALPHA,a.ZERO,a.ONE);break;default:Dt("WebGLState: Invalid blending: ",X);break}else switch(X){case Mo:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case Oh:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE,a.ONE,a.ONE);break;case B_:Dt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case z_:Dt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Dt("WebGLState: Invalid blending: ",X);break}I=null,w=null,L=null,B=null,A.set(0,0,0),N=0,x=X,Y=wt}return}Pe=Pe||Ne,Ee=Ee||ve,Ve=Ve||Oe,(Ne!==F||Pe!==O)&&(a.blendEquationSeparate(ht[Ne],ht[Pe]),F=Ne,O=Pe),(ve!==I||Oe!==w||Ee!==L||Ve!==B)&&(a.blendFuncSeparate(vt[ve],vt[Oe],vt[Ee],vt[Ve]),I=ve,w=Oe,L=Ee,B=Ve),(Ze.equals(A)===!1||nn!==N)&&(a.blendColor(Ze.r,Ze.g,Ze.b,nn),A.copy(Ze),N=nn),x=X,Y=!1}function ct(X,Ne){X.side===Sa?qe(a.CULL_FACE):ge(a.CULL_FACE);let ve=X.side===pi;Ne&&(ve=!ve),Qt(ve),X.blending===Mo&&X.transparent===!1?it(es):it(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),u.setFunc(X.depthFunc),u.setTest(X.depthTest),u.setMask(X.depthWrite),c.setMask(X.colorWrite);const Oe=X.stencilWrite;d.setTest(Oe),Oe&&(d.setMask(X.stencilWriteMask),d.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),d.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),tn(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?ge(a.SAMPLE_ALPHA_TO_COVERAGE):qe(a.SAMPLE_ALPHA_TO_COVERAGE)}function Qt(X){k!==X&&(X?a.frontFace(a.CW):a.frontFace(a.CCW),k=X)}function Jt(X){X!==Ay?(ge(a.CULL_FACE),X!==j&&(X===F_?a.cullFace(a.BACK):X===Ry?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):qe(a.CULL_FACE),j=X}function qt(X){X!==ue&&(H&&a.lineWidth(X),ue=X)}function tn(X,Ne,ve){X?(ge(a.POLYGON_OFFSET_FILL),(fe!==Ne||q!==ve)&&(fe=Ne,q=ve,u.getReversed()&&(Ne=-Ne),a.polygonOffset(Ne,ve))):qe(a.POLYGON_OFFSET_FILL)}function Gt(X){X?ge(a.SCISSOR_TEST):qe(a.SCISSOR_TEST)}function sn(X){X===void 0&&(X=a.TEXTURE0+z-1),Se!==X&&(a.activeTexture(X),Se=X)}function Z(X,Ne,ve){ve===void 0&&(Se===null?ve=a.TEXTURE0+z-1:ve=Se);let Oe=U[ve];Oe===void 0&&(Oe={type:void 0,texture:void 0},U[ve]=Oe),(Oe.type!==X||Oe.texture!==Ne)&&(Se!==ve&&(a.activeTexture(ve),Se=ve),a.bindTexture(X,Ne||Me[X]),Oe.type=X,Oe.texture=Ne)}function bt(){const X=U[Se];X!==void 0&&X.type!==void 0&&(a.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function Tt(){try{a.compressedTexImage2D(...arguments)}catch(X){Dt("WebGLState:",X)}}function P(){try{a.compressedTexImage3D(...arguments)}catch(X){Dt("WebGLState:",X)}}function b(){try{a.texSubImage2D(...arguments)}catch(X){Dt("WebGLState:",X)}}function J(){try{a.texSubImage3D(...arguments)}catch(X){Dt("WebGLState:",X)}}function re(){try{a.compressedTexSubImage2D(...arguments)}catch(X){Dt("WebGLState:",X)}}function le(){try{a.compressedTexSubImage3D(...arguments)}catch(X){Dt("WebGLState:",X)}}function we(){try{a.texStorage2D(...arguments)}catch(X){Dt("WebGLState:",X)}}function Le(){try{a.texStorage3D(...arguments)}catch(X){Dt("WebGLState:",X)}}function pe(){try{a.texImage2D(...arguments)}catch(X){Dt("WebGLState:",X)}}function de(){try{a.texImage3D(...arguments)}catch(X){Dt("WebGLState:",X)}}function De(X){return v[X]!==void 0?v[X]:a.getParameter(X)}function Ge(X,Ne){v[X]!==Ne&&(a.pixelStorei(X,Ne),v[X]=Ne)}function Fe(X){Ae.equals(X)===!1&&(a.scissor(X.x,X.y,X.z,X.w),Ae.copy(X))}function Ie(X){Ce.equals(X)===!1&&(a.viewport(X.x,X.y,X.z,X.w),Ce.copy(X))}function Je(X,Ne){let ve=h.get(Ne);ve===void 0&&(ve=new WeakMap,h.set(Ne,ve));let Oe=ve.get(X);Oe===void 0&&(Oe=a.getUniformBlockIndex(Ne,X.name),ve.set(X,Oe))}function tt(X,Ne){const Oe=h.get(Ne).get(X);m.get(Ne)!==Oe&&(a.uniformBlockBinding(Ne,Oe,X.__bindingPointIndex),m.set(Ne,Oe))}function rt(){a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.DEPTH_TEST),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SCISSOR_TEST),a.disable(a.STENCIL_TEST),a.disable(a.SAMPLE_ALPHA_TO_COVERAGE),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ONE,a.ZERO),a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO),a.blendColor(0,0,0,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(a.LESS),u.setReversed(!1),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(a.ALWAYS,0,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.clearStencil(0),a.cullFace(a.BACK),a.frontFace(a.CCW),a.polygonOffset(0,0),a.activeTexture(a.TEXTURE0),a.bindFramebuffer(a.FRAMEBUFFER,null),a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,null),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),a.pixelStorei(a.PACK_ALIGNMENT,4),a.pixelStorei(a.UNPACK_ALIGNMENT,4),a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,!1),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,a.BROWSER_DEFAULT_WEBGL),a.pixelStorei(a.PACK_ROW_LENGTH,0),a.pixelStorei(a.PACK_SKIP_PIXELS,0),a.pixelStorei(a.PACK_SKIP_ROWS,0),a.pixelStorei(a.UNPACK_ROW_LENGTH,0),a.pixelStorei(a.UNPACK_IMAGE_HEIGHT,0),a.pixelStorei(a.UNPACK_SKIP_PIXELS,0),a.pixelStorei(a.UNPACK_SKIP_ROWS,0),a.pixelStorei(a.UNPACK_SKIP_IMAGES,0),g={},v={},Se=null,U={},_={},S=new WeakMap,E=[],R=null,y=!1,x=null,F=null,I=null,w=null,O=null,L=null,B=null,A=new Ht(0,0,0),N=0,Y=!1,k=null,j=null,ue=null,fe=null,q=null,Ae.set(0,0,a.canvas.width,a.canvas.height),Ce.set(0,0,a.canvas.width,a.canvas.height),c.reset(),u.reset(),d.reset()}return{buffers:{color:c,depth:u,stencil:d},enable:ge,disable:qe,bindFramebuffer:st,drawBuffers:et,useProgram:Yt,setBlending:it,setMaterial:ct,setFlipSided:Qt,setCullFace:Jt,setLineWidth:qt,setPolygonOffset:tn,setScissorTest:Gt,activeTexture:sn,bindTexture:Z,unbindTexture:bt,compressedTexImage2D:Tt,compressedTexImage3D:P,texImage2D:pe,texImage3D:de,pixelStorei:Ge,getParameter:De,updateUBOMapping:Je,uniformBlockBinding:tt,texStorage2D:we,texStorage3D:Le,texSubImage2D:b,texSubImage3D:J,compressedTexSubImage2D:re,compressedTexSubImage3D:le,scissor:Fe,viewport:Ie,reset:rt}}function W2(a,e,i,r,o,c,u){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Pt,g=new WeakMap,v=new Set;let _;const S=new WeakMap;let E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function R(P,b){return E?new OffscreenCanvas(P,b):Du("canvas")}function y(P,b,J){let re=1;const le=Tt(P);if((le.width>J||le.height>J)&&(re=J/Math.max(le.width,le.height)),re<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const we=Math.floor(re*le.width),Le=Math.floor(re*le.height);_===void 0&&(_=R(we,Le));const pe=b?R(we,Le):_;return pe.width=we,pe.height=Le,pe.getContext("2d").drawImage(P,0,0,we,Le),ot("WebGLRenderer: Texture has been resized from ("+le.width+"x"+le.height+") to ("+we+"x"+Le+")."),pe}else return"data"in P&&ot("WebGLRenderer: Image in DataTexture is too big ("+le.width+"x"+le.height+")."),P;return P}function x(P){return P.generateMipmaps}function F(P){a.generateMipmap(P)}function I(P){return P.isWebGLCubeRenderTarget?a.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?a.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?a.TEXTURE_2D_ARRAY:a.TEXTURE_2D}function w(P,b,J,re,le,we=!1){if(P!==null){if(a[P]!==void 0)return a[P];ot("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let Le;re&&(Le=e.get("EXT_texture_norm16"),Le||ot("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let pe=b;if(b===a.RED&&(J===a.FLOAT&&(pe=a.R32F),J===a.HALF_FLOAT&&(pe=a.R16F),J===a.UNSIGNED_BYTE&&(pe=a.R8),J===a.UNSIGNED_SHORT&&Le&&(pe=Le.R16_EXT),J===a.SHORT&&Le&&(pe=Le.R16_SNORM_EXT)),b===a.RED_INTEGER&&(J===a.UNSIGNED_BYTE&&(pe=a.R8UI),J===a.UNSIGNED_SHORT&&(pe=a.R16UI),J===a.UNSIGNED_INT&&(pe=a.R32UI),J===a.BYTE&&(pe=a.R8I),J===a.SHORT&&(pe=a.R16I),J===a.INT&&(pe=a.R32I)),b===a.RG&&(J===a.FLOAT&&(pe=a.RG32F),J===a.HALF_FLOAT&&(pe=a.RG16F),J===a.UNSIGNED_BYTE&&(pe=a.RG8),J===a.UNSIGNED_SHORT&&Le&&(pe=Le.RG16_EXT),J===a.SHORT&&Le&&(pe=Le.RG16_SNORM_EXT)),b===a.RG_INTEGER&&(J===a.UNSIGNED_BYTE&&(pe=a.RG8UI),J===a.UNSIGNED_SHORT&&(pe=a.RG16UI),J===a.UNSIGNED_INT&&(pe=a.RG32UI),J===a.BYTE&&(pe=a.RG8I),J===a.SHORT&&(pe=a.RG16I),J===a.INT&&(pe=a.RG32I)),b===a.RGB_INTEGER&&(J===a.UNSIGNED_BYTE&&(pe=a.RGB8UI),J===a.UNSIGNED_SHORT&&(pe=a.RGB16UI),J===a.UNSIGNED_INT&&(pe=a.RGB32UI),J===a.BYTE&&(pe=a.RGB8I),J===a.SHORT&&(pe=a.RGB16I),J===a.INT&&(pe=a.RGB32I)),b===a.RGBA_INTEGER&&(J===a.UNSIGNED_BYTE&&(pe=a.RGBA8UI),J===a.UNSIGNED_SHORT&&(pe=a.RGBA16UI),J===a.UNSIGNED_INT&&(pe=a.RGBA32UI),J===a.BYTE&&(pe=a.RGBA8I),J===a.SHORT&&(pe=a.RGBA16I),J===a.INT&&(pe=a.RGBA32I)),b===a.RGB&&(J===a.UNSIGNED_SHORT&&Le&&(pe=Le.RGB16_EXT),J===a.SHORT&&Le&&(pe=Le.RGB16_SNORM_EXT),J===a.UNSIGNED_INT_5_9_9_9_REV&&(pe=a.RGB9_E5),J===a.UNSIGNED_INT_10F_11F_11F_REV&&(pe=a.R11F_G11F_B10F)),b===a.RGBA){const de=we?Cu:Rt.getTransfer(le);J===a.FLOAT&&(pe=a.RGBA32F),J===a.HALF_FLOAT&&(pe=a.RGBA16F),J===a.UNSIGNED_BYTE&&(pe=de===Xt?a.SRGB8_ALPHA8:a.RGBA8),J===a.UNSIGNED_SHORT&&Le&&(pe=Le.RGBA16_EXT),J===a.SHORT&&Le&&(pe=Le.RGBA16_SNORM_EXT),J===a.UNSIGNED_SHORT_4_4_4_4&&(pe=a.RGBA4),J===a.UNSIGNED_SHORT_5_5_5_1&&(pe=a.RGB5_A1)}return(pe===a.R16F||pe===a.R32F||pe===a.RG16F||pe===a.RG32F||pe===a.RGBA16F||pe===a.RGBA32F)&&e.get("EXT_color_buffer_float"),pe}function O(P,b){let J;return P?b===null||b===Aa||b===Il?J=a.DEPTH24_STENCIL8:b===Ma?J=a.DEPTH32F_STENCIL8:b===Pl&&(J=a.DEPTH24_STENCIL8,ot("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Aa||b===Il?J=a.DEPTH_COMPONENT24:b===Ma?J=a.DEPTH_COMPONENT32F:b===Pl&&(J=a.DEPTH_COMPONENT16),J}function L(P,b){return x(P)===!0||P.isFramebufferTexture&&P.minFilter!==qn&&P.minFilter!==hn?Math.log2(Math.max(b.width,b.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?b.mipmaps.length:1}function B(P){const b=P.target;b.removeEventListener("dispose",B),N(b),b.isVideoTexture&&g.delete(b),b.isHTMLTexture&&v.delete(b)}function A(P){const b=P.target;b.removeEventListener("dispose",A),k(b)}function N(P){const b=r.get(P);if(b.__webglInit===void 0)return;const J=P.source,re=S.get(J);if(re){const le=re[b.__cacheKey];le.usedTimes--,le.usedTimes===0&&Y(P),Object.keys(re).length===0&&S.delete(J)}r.remove(P)}function Y(P){const b=r.get(P);a.deleteTexture(b.__webglTexture);const J=P.source,re=S.get(J);delete re[b.__cacheKey],u.memory.textures--}function k(P){const b=r.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),r.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let re=0;re<6;re++){if(Array.isArray(b.__webglFramebuffer[re]))for(let le=0;le<b.__webglFramebuffer[re].length;le++)a.deleteFramebuffer(b.__webglFramebuffer[re][le]);else a.deleteFramebuffer(b.__webglFramebuffer[re]);b.__webglDepthbuffer&&a.deleteRenderbuffer(b.__webglDepthbuffer[re])}else{if(Array.isArray(b.__webglFramebuffer))for(let re=0;re<b.__webglFramebuffer.length;re++)a.deleteFramebuffer(b.__webglFramebuffer[re]);else a.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&a.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&a.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let re=0;re<b.__webglColorRenderbuffer.length;re++)b.__webglColorRenderbuffer[re]&&a.deleteRenderbuffer(b.__webglColorRenderbuffer[re]);b.__webglDepthRenderbuffer&&a.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const J=P.textures;for(let re=0,le=J.length;re<le;re++){const we=r.get(J[re]);we.__webglTexture&&(a.deleteTexture(we.__webglTexture),u.memory.textures--),r.remove(J[re])}r.remove(P)}let j=0;function ue(){j=0}function fe(){return j}function q(P){j=P}function z(){const P=j;return P>=o.maxTextures&&ot("WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+o.maxTextures),j+=1,P}function H(P){const b=[];return b.push(P.wrapS),b.push(P.wrapT),b.push(P.wrapR||0),b.push(P.magFilter),b.push(P.minFilter),b.push(P.anisotropy),b.push(P.internalFormat),b.push(P.format),b.push(P.type),b.push(P.generateMipmaps),b.push(P.premultiplyAlpha),b.push(P.flipY),b.push(P.unpackAlignment),b.push(P.colorSpace),b.join()}function te(P,b){const J=r.get(P);if(P.isVideoTexture&&Z(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&J.__version!==P.version){const re=P.image;if(re===null)ot("WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)ot("WebGLRenderer: Texture marked for update but image is incomplete");else{qe(J,P,b);return}}else P.isExternalTexture&&(J.__webglTexture=P.sourceTexture?P.sourceTexture:null);i.bindTexture(a.TEXTURE_2D,J.__webglTexture,a.TEXTURE0+b)}function me(P,b){const J=r.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&J.__version!==P.version){qe(J,P,b);return}else P.isExternalTexture&&(J.__webglTexture=P.sourceTexture?P.sourceTexture:null);i.bindTexture(a.TEXTURE_2D_ARRAY,J.__webglTexture,a.TEXTURE0+b)}function Se(P,b){const J=r.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&J.__version!==P.version){qe(J,P,b);return}i.bindTexture(a.TEXTURE_3D,J.__webglTexture,a.TEXTURE0+b)}function U(P,b){const J=r.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&J.__version!==P.version){st(J,P,b);return}i.bindTexture(a.TEXTURE_CUBE_MAP,J.__webglTexture,a.TEXTURE0+b)}const K={[Xh]:a.REPEAT,[ra]:a.CLAMP_TO_EDGE,[Wh]:a.MIRRORED_REPEAT},be={[qn]:a.NEAREST,[Zy]:a.NEAREST_MIPMAP_NEAREST,[Zc]:a.NEAREST_MIPMAP_LINEAR,[hn]:a.LINEAR,[Zd]:a.LINEAR_MIPMAP_NEAREST,[Hs]:a.LINEAR_MIPMAP_LINEAR},Ae={[Jy]:a.NEVER,[iE]:a.ALWAYS,[$y]:a.LESS,[Op]:a.LEQUAL,[eE]:a.EQUAL,[Pp]:a.GEQUAL,[tE]:a.GREATER,[nE]:a.NOTEQUAL};function Ce(P,b){if(b.type===Ma&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===hn||b.magFilter===Zd||b.magFilter===Zc||b.magFilter===Hs||b.minFilter===hn||b.minFilter===Zd||b.minFilter===Zc||b.minFilter===Hs)&&ot("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),a.texParameteri(P,a.TEXTURE_WRAP_S,K[b.wrapS]),a.texParameteri(P,a.TEXTURE_WRAP_T,K[b.wrapT]),(P===a.TEXTURE_3D||P===a.TEXTURE_2D_ARRAY)&&a.texParameteri(P,a.TEXTURE_WRAP_R,K[b.wrapR]),a.texParameteri(P,a.TEXTURE_MAG_FILTER,be[b.magFilter]),a.texParameteri(P,a.TEXTURE_MIN_FILTER,be[b.minFilter]),b.compareFunction&&(a.texParameteri(P,a.TEXTURE_COMPARE_MODE,a.COMPARE_REF_TO_TEXTURE),a.texParameteri(P,a.TEXTURE_COMPARE_FUNC,Ae[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===qn||b.minFilter!==Zc&&b.minFilter!==Hs||b.type===Ma&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||r.get(b).__currentAnisotropy){const J=e.get("EXT_texture_filter_anisotropic");a.texParameterf(P,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,o.getMaxAnisotropy())),r.get(b).__currentAnisotropy=b.anisotropy}}}function ae(P,b){let J=!1;P.__webglInit===void 0&&(P.__webglInit=!0,b.addEventListener("dispose",B));const re=b.source;let le=S.get(re);le===void 0&&(le={},S.set(re,le));const we=H(b);if(we!==P.__cacheKey){le[we]===void 0&&(le[we]={texture:a.createTexture(),usedTimes:0},u.memory.textures++,J=!0),le[we].usedTimes++;const Le=le[P.__cacheKey];Le!==void 0&&(le[P.__cacheKey].usedTimes--,Le.usedTimes===0&&Y(b)),P.__cacheKey=we,P.__webglTexture=le[we].texture}return J}function Me(P,b,J){return Math.floor(Math.floor(P/J)/b)}function ge(P,b,J,re){const we=P.updateRanges;if(we.length===0)i.texSubImage2D(a.TEXTURE_2D,0,0,0,b.width,b.height,J,re,b.data);else{we.sort((Ge,Fe)=>Ge.start-Fe.start);let Le=0;for(let Ge=1;Ge<we.length;Ge++){const Fe=we[Le],Ie=we[Ge],Je=Fe.start+Fe.count,tt=Me(Ie.start,b.width,4),rt=Me(Fe.start,b.width,4);Ie.start<=Je+1&&tt===rt&&Me(Ie.start+Ie.count-1,b.width,4)===tt?Fe.count=Math.max(Fe.count,Ie.start+Ie.count-Fe.start):(++Le,we[Le]=Ie)}we.length=Le+1;const pe=i.getParameter(a.UNPACK_ROW_LENGTH),de=i.getParameter(a.UNPACK_SKIP_PIXELS),De=i.getParameter(a.UNPACK_SKIP_ROWS);i.pixelStorei(a.UNPACK_ROW_LENGTH,b.width);for(let Ge=0,Fe=we.length;Ge<Fe;Ge++){const Ie=we[Ge],Je=Math.floor(Ie.start/4),tt=Math.ceil(Ie.count/4),rt=Je%b.width,X=Math.floor(Je/b.width),Ne=tt,ve=1;i.pixelStorei(a.UNPACK_SKIP_PIXELS,rt),i.pixelStorei(a.UNPACK_SKIP_ROWS,X),i.texSubImage2D(a.TEXTURE_2D,0,rt,X,Ne,ve,J,re,b.data)}P.clearUpdateRanges(),i.pixelStorei(a.UNPACK_ROW_LENGTH,pe),i.pixelStorei(a.UNPACK_SKIP_PIXELS,de),i.pixelStorei(a.UNPACK_SKIP_ROWS,De)}}function qe(P,b,J){let re=a.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(re=a.TEXTURE_2D_ARRAY),b.isData3DTexture&&(re=a.TEXTURE_3D);const le=ae(P,b),we=b.source;i.bindTexture(re,P.__webglTexture,a.TEXTURE0+J);const Le=r.get(we);if(we.version!==Le.__version||le===!0){if(i.activeTexture(a.TEXTURE0+J),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){const ve=Rt.getPrimaries(Rt.workingColorSpace),Oe=b.colorSpace===zs?null:Rt.getPrimaries(b.colorSpace),Pe=b.colorSpace===zs||ve===Oe?a.NONE:a.BROWSER_DEFAULT_WEBGL;i.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe)}i.pixelStorei(a.UNPACK_ALIGNMENT,b.unpackAlignment);let de=y(b.image,!1,o.maxTextureSize);de=bt(b,de);const De=c.convert(b.format,b.colorSpace),Ge=c.convert(b.type);let Fe=w(b.internalFormat,De,Ge,b.normalized,b.colorSpace,b.isVideoTexture);Ce(re,b);let Ie;const Je=b.mipmaps,tt=b.isVideoTexture!==!0,rt=Le.__version===void 0||le===!0,X=we.dataReady,Ne=L(b,de);if(b.isDepthTexture)Fe=O(b.format===Mr,b.type),rt&&(tt?i.texStorage2D(a.TEXTURE_2D,1,Fe,de.width,de.height):i.texImage2D(a.TEXTURE_2D,0,Fe,de.width,de.height,0,De,Ge,null));else if(b.isDataTexture)if(Je.length>0){tt&&rt&&i.texStorage2D(a.TEXTURE_2D,Ne,Fe,Je[0].width,Je[0].height);for(let ve=0,Oe=Je.length;ve<Oe;ve++)Ie=Je[ve],tt?X&&i.texSubImage2D(a.TEXTURE_2D,ve,0,0,Ie.width,Ie.height,De,Ge,Ie.data):i.texImage2D(a.TEXTURE_2D,ve,Fe,Ie.width,Ie.height,0,De,Ge,Ie.data);b.generateMipmaps=!1}else tt?(rt&&i.texStorage2D(a.TEXTURE_2D,Ne,Fe,de.width,de.height),X&&ge(b,de,De,Ge)):i.texImage2D(a.TEXTURE_2D,0,Fe,de.width,de.height,0,De,Ge,de.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){tt&&rt&&i.texStorage3D(a.TEXTURE_2D_ARRAY,Ne,Fe,Je[0].width,Je[0].height,de.depth);for(let ve=0,Oe=Je.length;ve<Oe;ve++)if(Ie=Je[ve],b.format!==oa)if(De!==null)if(tt){if(X)if(b.layerUpdates.size>0){const Pe=hv(Ie.width,Ie.height,b.format,b.type);for(const Ee of b.layerUpdates){const Ve=Ie.data.subarray(Ee*Pe/Ie.data.BYTES_PER_ELEMENT,(Ee+1)*Pe/Ie.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,ve,0,0,Ee,Ie.width,Ie.height,1,De,Ve)}b.clearLayerUpdates()}else i.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,ve,0,0,0,Ie.width,Ie.height,de.depth,De,Ie.data)}else i.compressedTexImage3D(a.TEXTURE_2D_ARRAY,ve,Fe,Ie.width,Ie.height,de.depth,0,Ie.data,0,0);else ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else tt?X&&i.texSubImage3D(a.TEXTURE_2D_ARRAY,ve,0,0,0,Ie.width,Ie.height,de.depth,De,Ge,Ie.data):i.texImage3D(a.TEXTURE_2D_ARRAY,ve,Fe,Ie.width,Ie.height,de.depth,0,De,Ge,Ie.data)}else{tt&&rt&&i.texStorage2D(a.TEXTURE_2D,Ne,Fe,Je[0].width,Je[0].height);for(let ve=0,Oe=Je.length;ve<Oe;ve++)Ie=Je[ve],b.format!==oa?De!==null?tt?X&&i.compressedTexSubImage2D(a.TEXTURE_2D,ve,0,0,Ie.width,Ie.height,De,Ie.data):i.compressedTexImage2D(a.TEXTURE_2D,ve,Fe,Ie.width,Ie.height,0,Ie.data):ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):tt?X&&i.texSubImage2D(a.TEXTURE_2D,ve,0,0,Ie.width,Ie.height,De,Ge,Ie.data):i.texImage2D(a.TEXTURE_2D,ve,Fe,Ie.width,Ie.height,0,De,Ge,Ie.data)}else if(b.isDataArrayTexture)if(tt){if(rt&&i.texStorage3D(a.TEXTURE_2D_ARRAY,Ne,Fe,de.width,de.height,de.depth),X)if(b.layerUpdates.size>0){const ve=hv(de.width,de.height,b.format,b.type);for(const Oe of b.layerUpdates){const Pe=de.data.subarray(Oe*ve/de.data.BYTES_PER_ELEMENT,(Oe+1)*ve/de.data.BYTES_PER_ELEMENT);i.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,Oe,de.width,de.height,1,De,Ge,Pe)}b.clearLayerUpdates()}else i.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,de.width,de.height,de.depth,De,Ge,de.data)}else i.texImage3D(a.TEXTURE_2D_ARRAY,0,Fe,de.width,de.height,de.depth,0,De,Ge,de.data);else if(b.isData3DTexture)tt?(rt&&i.texStorage3D(a.TEXTURE_3D,Ne,Fe,de.width,de.height,de.depth),X&&i.texSubImage3D(a.TEXTURE_3D,0,0,0,0,de.width,de.height,de.depth,De,Ge,de.data)):i.texImage3D(a.TEXTURE_3D,0,Fe,de.width,de.height,de.depth,0,De,Ge,de.data);else if(b.isFramebufferTexture){if(rt)if(tt)i.texStorage2D(a.TEXTURE_2D,Ne,Fe,de.width,de.height);else{let ve=de.width,Oe=de.height;for(let Pe=0;Pe<Ne;Pe++)i.texImage2D(a.TEXTURE_2D,Pe,Fe,ve,Oe,0,De,Ge,null),ve>>=1,Oe>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in a){const ve=a.canvas;if(ve.hasAttribute("layoutsubtree")||ve.setAttribute("layoutsubtree","true"),de.parentNode!==ve){ve.appendChild(de),v.add(b),ve.onpaint=Oe=>{const Pe=Oe.changedElements;for(const Ee of v)Pe.includes(Ee.image)&&(Ee.needsUpdate=!0)},ve.requestPaint();return}if(a.texElementImage2D.length===3)a.texElementImage2D(a.TEXTURE_2D,a.RGBA8,de);else{const Pe=a.RGBA,Ee=a.RGBA,Ve=a.UNSIGNED_BYTE;a.texElementImage2D(a.TEXTURE_2D,0,Pe,Ee,Ve,de)}a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MIN_FILTER,a.LINEAR),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE)}}else if(Je.length>0){if(tt&&rt){const ve=Tt(Je[0]);i.texStorage2D(a.TEXTURE_2D,Ne,Fe,ve.width,ve.height)}for(let ve=0,Oe=Je.length;ve<Oe;ve++)Ie=Je[ve],tt?X&&i.texSubImage2D(a.TEXTURE_2D,ve,0,0,De,Ge,Ie):i.texImage2D(a.TEXTURE_2D,ve,Fe,De,Ge,Ie);b.generateMipmaps=!1}else if(tt){if(rt){const ve=Tt(de);i.texStorage2D(a.TEXTURE_2D,Ne,Fe,ve.width,ve.height)}X&&i.texSubImage2D(a.TEXTURE_2D,0,0,0,De,Ge,de)}else i.texImage2D(a.TEXTURE_2D,0,Fe,De,Ge,de);x(b)&&F(re),Le.__version=we.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function st(P,b,J){if(b.image.length!==6)return;const re=ae(P,b),le=b.source;i.bindTexture(a.TEXTURE_CUBE_MAP,P.__webglTexture,a.TEXTURE0+J);const we=r.get(le);if(le.version!==we.__version||re===!0){i.activeTexture(a.TEXTURE0+J);const Le=Rt.getPrimaries(Rt.workingColorSpace),pe=b.colorSpace===zs?null:Rt.getPrimaries(b.colorSpace),de=b.colorSpace===zs||Le===pe?a.NONE:a.BROWSER_DEFAULT_WEBGL;i.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(a.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);const De=b.isCompressedTexture||b.image[0].isCompressedTexture,Ge=b.image[0]&&b.image[0].isDataTexture,Fe=[];for(let Ee=0;Ee<6;Ee++)!De&&!Ge?Fe[Ee]=y(b.image[Ee],!0,o.maxCubemapSize):Fe[Ee]=Ge?b.image[Ee].image:b.image[Ee],Fe[Ee]=bt(b,Fe[Ee]);const Ie=Fe[0],Je=c.convert(b.format,b.colorSpace),tt=c.convert(b.type),rt=w(b.internalFormat,Je,tt,b.normalized,b.colorSpace),X=b.isVideoTexture!==!0,Ne=we.__version===void 0||re===!0,ve=le.dataReady;let Oe=L(b,Ie);Ce(a.TEXTURE_CUBE_MAP,b);let Pe;if(De){X&&Ne&&i.texStorage2D(a.TEXTURE_CUBE_MAP,Oe,rt,Ie.width,Ie.height);for(let Ee=0;Ee<6;Ee++){Pe=Fe[Ee].mipmaps;for(let Ve=0;Ve<Pe.length;Ve++){const Ze=Pe[Ve];b.format!==oa?Je!==null?X?ve&&i.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Ve,0,0,Ze.width,Ze.height,Je,Ze.data):i.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Ve,rt,Ze.width,Ze.height,0,Ze.data):ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?ve&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Ve,0,0,Ze.width,Ze.height,Je,tt,Ze.data):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Ve,rt,Ze.width,Ze.height,0,Je,tt,Ze.data)}}}else{if(Pe=b.mipmaps,X&&Ne){Pe.length>0&&Oe++;const Ee=Tt(Fe[0]);i.texStorage2D(a.TEXTURE_CUBE_MAP,Oe,rt,Ee.width,Ee.height)}for(let Ee=0;Ee<6;Ee++)if(Ge){X?ve&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,0,0,Fe[Ee].width,Fe[Ee].height,Je,tt,Fe[Ee].data):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,rt,Fe[Ee].width,Fe[Ee].height,0,Je,tt,Fe[Ee].data);for(let Ve=0;Ve<Pe.length;Ve++){const nn=Pe[Ve].image[Ee].image;X?ve&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Ve+1,0,0,nn.width,nn.height,Je,tt,nn.data):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Ve+1,rt,nn.width,nn.height,0,Je,tt,nn.data)}}else{X?ve&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,0,0,Je,tt,Fe[Ee]):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,rt,Je,tt,Fe[Ee]);for(let Ve=0;Ve<Pe.length;Ve++){const Ze=Pe[Ve];X?ve&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Ve+1,0,0,Je,tt,Ze.image[Ee]):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Ve+1,rt,Je,tt,Ze.image[Ee])}}}x(b)&&F(a.TEXTURE_CUBE_MAP),we.__version=le.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function et(P,b,J,re,le,we){const Le=c.convert(J.format,J.colorSpace),pe=c.convert(J.type),de=w(J.internalFormat,Le,pe,J.normalized,J.colorSpace),De=r.get(b),Ge=r.get(J);if(Ge.__renderTarget=b,!De.__hasExternalTextures){const Fe=Math.max(1,b.width>>we),Ie=Math.max(1,b.height>>we);le===a.TEXTURE_3D||le===a.TEXTURE_2D_ARRAY?i.texImage3D(le,we,de,Fe,Ie,b.depth,0,Le,pe,null):i.texImage2D(le,we,de,Fe,Ie,0,Le,pe,null)}i.bindFramebuffer(a.FRAMEBUFFER,P),sn(b)?d.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,re,le,Ge.__webglTexture,0,Gt(b)):(le===a.TEXTURE_2D||le>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&le<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&a.framebufferTexture2D(a.FRAMEBUFFER,re,le,Ge.__webglTexture,we),i.bindFramebuffer(a.FRAMEBUFFER,null)}function Yt(P,b,J){if(a.bindRenderbuffer(a.RENDERBUFFER,P),b.depthBuffer){const re=b.depthTexture,le=re&&re.isDepthTexture?re.type:null,we=O(b.stencilBuffer,le),Le=b.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;sn(b)?d.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,Gt(b),we,b.width,b.height):J?a.renderbufferStorageMultisample(a.RENDERBUFFER,Gt(b),we,b.width,b.height):a.renderbufferStorage(a.RENDERBUFFER,we,b.width,b.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,Le,a.RENDERBUFFER,P)}else{const re=b.textures;for(let le=0;le<re.length;le++){const we=re[le],Le=c.convert(we.format,we.colorSpace),pe=c.convert(we.type),de=w(we.internalFormat,Le,pe,we.normalized,we.colorSpace);sn(b)?d.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,Gt(b),de,b.width,b.height):J?a.renderbufferStorageMultisample(a.RENDERBUFFER,Gt(b),de,b.width,b.height):a.renderbufferStorage(a.RENDERBUFFER,de,b.width,b.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function ht(P,b,J){const re=b.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(a.FRAMEBUFFER,P),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const le=r.get(b.depthTexture);if(le.__renderTarget=b,(!le.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),re){if(le.__webglInit===void 0&&(le.__webglInit=!0,b.depthTexture.addEventListener("dispose",B)),le.__webglTexture===void 0){le.__webglTexture=a.createTexture(),i.bindTexture(a.TEXTURE_CUBE_MAP,le.__webglTexture),Ce(a.TEXTURE_CUBE_MAP,b.depthTexture);const De=c.convert(b.depthTexture.format),Ge=c.convert(b.depthTexture.type);let Fe;b.depthTexture.format===as?Fe=a.DEPTH_COMPONENT24:b.depthTexture.format===Mr&&(Fe=a.DEPTH24_STENCIL8);for(let Ie=0;Ie<6;Ie++)a.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,0,Fe,b.width,b.height,0,De,Ge,null)}}else te(b.depthTexture,0);const we=le.__webglTexture,Le=Gt(b),pe=re?a.TEXTURE_CUBE_MAP_POSITIVE_X+J:a.TEXTURE_2D,de=b.depthTexture.format===Mr?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;if(b.depthTexture.format===as)sn(b)?d.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,de,pe,we,0,Le):a.framebufferTexture2D(a.FRAMEBUFFER,de,pe,we,0);else if(b.depthTexture.format===Mr)sn(b)?d.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,de,pe,we,0,Le):a.framebufferTexture2D(a.FRAMEBUFFER,de,pe,we,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function vt(P){const b=r.get(P),J=P.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==P.depthTexture){const re=P.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),re){const le=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,re.removeEventListener("dispose",le)};re.addEventListener("dispose",le),b.__depthDisposeCallback=le}b.__boundDepthTexture=re}if(P.depthTexture&&!b.__autoAllocateDepthBuffer)if(J)for(let re=0;re<6;re++)ht(b.__webglFramebuffer[re],P,re);else{const re=P.texture.mipmaps;re&&re.length>0?ht(b.__webglFramebuffer[0],P,0):ht(b.__webglFramebuffer,P,0)}else if(J){b.__webglDepthbuffer=[];for(let re=0;re<6;re++)if(i.bindFramebuffer(a.FRAMEBUFFER,b.__webglFramebuffer[re]),b.__webglDepthbuffer[re]===void 0)b.__webglDepthbuffer[re]=a.createRenderbuffer(),Yt(b.__webglDepthbuffer[re],P,!1);else{const le=P.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,we=b.__webglDepthbuffer[re];a.bindRenderbuffer(a.RENDERBUFFER,we),a.framebufferRenderbuffer(a.FRAMEBUFFER,le,a.RENDERBUFFER,we)}}else{const re=P.texture.mipmaps;if(re&&re.length>0?i.bindFramebuffer(a.FRAMEBUFFER,b.__webglFramebuffer[0]):i.bindFramebuffer(a.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=a.createRenderbuffer(),Yt(b.__webglDepthbuffer,P,!1);else{const le=P.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,we=b.__webglDepthbuffer;a.bindRenderbuffer(a.RENDERBUFFER,we),a.framebufferRenderbuffer(a.FRAMEBUFFER,le,a.RENDERBUFFER,we)}}i.bindFramebuffer(a.FRAMEBUFFER,null)}function it(P,b,J){const re=r.get(P);b!==void 0&&et(re.__webglFramebuffer,P,P.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,0),J!==void 0&&vt(P)}function ct(P){const b=P.texture,J=r.get(P),re=r.get(b);P.addEventListener("dispose",A);const le=P.textures,we=P.isWebGLCubeRenderTarget===!0,Le=le.length>1;if(Le||(re.__webglTexture===void 0&&(re.__webglTexture=a.createTexture()),re.__version=b.version,u.memory.textures++),we){J.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(b.mipmaps&&b.mipmaps.length>0){J.__webglFramebuffer[pe]=[];for(let de=0;de<b.mipmaps.length;de++)J.__webglFramebuffer[pe][de]=a.createFramebuffer()}else J.__webglFramebuffer[pe]=a.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){J.__webglFramebuffer=[];for(let pe=0;pe<b.mipmaps.length;pe++)J.__webglFramebuffer[pe]=a.createFramebuffer()}else J.__webglFramebuffer=a.createFramebuffer();if(Le)for(let pe=0,de=le.length;pe<de;pe++){const De=r.get(le[pe]);De.__webglTexture===void 0&&(De.__webglTexture=a.createTexture(),u.memory.textures++)}if(P.samples>0&&sn(P)===!1){J.__webglMultisampledFramebuffer=a.createFramebuffer(),J.__webglColorRenderbuffer=[],i.bindFramebuffer(a.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let pe=0;pe<le.length;pe++){const de=le[pe];J.__webglColorRenderbuffer[pe]=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,J.__webglColorRenderbuffer[pe]);const De=c.convert(de.format,de.colorSpace),Ge=c.convert(de.type),Fe=w(de.internalFormat,De,Ge,de.normalized,de.colorSpace,P.isXRRenderTarget===!0),Ie=Gt(P);a.renderbufferStorageMultisample(a.RENDERBUFFER,Ie,Fe,P.width,P.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+pe,a.RENDERBUFFER,J.__webglColorRenderbuffer[pe])}a.bindRenderbuffer(a.RENDERBUFFER,null),P.depthBuffer&&(J.__webglDepthRenderbuffer=a.createRenderbuffer(),Yt(J.__webglDepthRenderbuffer,P,!0)),i.bindFramebuffer(a.FRAMEBUFFER,null)}}if(we){i.bindTexture(a.TEXTURE_CUBE_MAP,re.__webglTexture),Ce(a.TEXTURE_CUBE_MAP,b);for(let pe=0;pe<6;pe++)if(b.mipmaps&&b.mipmaps.length>0)for(let de=0;de<b.mipmaps.length;de++)et(J.__webglFramebuffer[pe][de],P,b,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+pe,de);else et(J.__webglFramebuffer[pe],P,b,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);x(b)&&F(a.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Le){for(let pe=0,de=le.length;pe<de;pe++){const De=le[pe],Ge=r.get(De);let Fe=a.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Fe=P.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),i.bindTexture(Fe,Ge.__webglTexture),Ce(Fe,De),et(J.__webglFramebuffer,P,De,a.COLOR_ATTACHMENT0+pe,Fe,0),x(De)&&F(Fe)}i.unbindTexture()}else{let pe=a.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(pe=P.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),i.bindTexture(pe,re.__webglTexture),Ce(pe,b),b.mipmaps&&b.mipmaps.length>0)for(let de=0;de<b.mipmaps.length;de++)et(J.__webglFramebuffer[de],P,b,a.COLOR_ATTACHMENT0,pe,de);else et(J.__webglFramebuffer,P,b,a.COLOR_ATTACHMENT0,pe,0);x(b)&&F(pe),i.unbindTexture()}P.depthBuffer&&vt(P)}function Qt(P){const b=P.textures;for(let J=0,re=b.length;J<re;J++){const le=b[J];if(x(le)){const we=I(P),Le=r.get(le).__webglTexture;i.bindTexture(we,Le),F(we),i.unbindTexture()}}}const Jt=[],qt=[];function tn(P){if(P.samples>0){if(sn(P)===!1){const b=P.textures,J=P.width,re=P.height;let le=a.COLOR_BUFFER_BIT;const we=P.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Le=r.get(P),pe=b.length>1;if(pe)for(let De=0;De<b.length;De++)i.bindFramebuffer(a.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+De,a.RENDERBUFFER,null),i.bindFramebuffer(a.FRAMEBUFFER,Le.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+De,a.TEXTURE_2D,null,0);i.bindFramebuffer(a.READ_FRAMEBUFFER,Le.__webglMultisampledFramebuffer);const de=P.texture.mipmaps;de&&de.length>0?i.bindFramebuffer(a.DRAW_FRAMEBUFFER,Le.__webglFramebuffer[0]):i.bindFramebuffer(a.DRAW_FRAMEBUFFER,Le.__webglFramebuffer);for(let De=0;De<b.length;De++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(le|=a.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(le|=a.STENCIL_BUFFER_BIT)),pe){a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,Le.__webglColorRenderbuffer[De]);const Ge=r.get(b[De]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,Ge,0)}a.blitFramebuffer(0,0,J,re,0,0,J,re,le,a.NEAREST),m===!0&&(Jt.length=0,qt.length=0,Jt.push(a.COLOR_ATTACHMENT0+De),P.depthBuffer&&P.resolveDepthBuffer===!1&&(Jt.push(we),qt.push(we),a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,qt)),a.invalidateFramebuffer(a.READ_FRAMEBUFFER,Jt))}if(i.bindFramebuffer(a.READ_FRAMEBUFFER,null),i.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),pe)for(let De=0;De<b.length;De++){i.bindFramebuffer(a.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+De,a.RENDERBUFFER,Le.__webglColorRenderbuffer[De]);const Ge=r.get(b[De]).__webglTexture;i.bindFramebuffer(a.FRAMEBUFFER,Le.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+De,a.TEXTURE_2D,Ge,0)}i.bindFramebuffer(a.DRAW_FRAMEBUFFER,Le.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&m){const b=P.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[b])}}}function Gt(P){return Math.min(o.maxSamples,P.samples)}function sn(P){const b=r.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Z(P){const b=u.render.frame;g.get(P)!==b&&(g.set(P,b),P.update())}function bt(P,b){const J=P.colorSpace,re=P.format,le=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||J!==Ru&&J!==zs&&(Rt.getTransfer(J)===Xt?(re!==oa||le!==Xi)&&ot("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Dt("WebGLTextures: Unsupported texture color space:",J)),b}function Tt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(h.width=P.naturalWidth||P.width,h.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(h.width=P.displayWidth,h.height=P.displayHeight):(h.width=P.width,h.height=P.height),h}this.allocateTextureUnit=z,this.resetTextureUnits=ue,this.getTextureUnits=fe,this.setTextureUnits=q,this.setTexture2D=te,this.setTexture2DArray=me,this.setTexture3D=Se,this.setTextureCube=U,this.rebindTextures=it,this.setupRenderTarget=ct,this.updateRenderTargetMipmap=Qt,this.updateMultisampleRenderTarget=tn,this.setupDepthRenderbuffer=vt,this.setupFrameBufferTexture=et,this.useMultisampledRTT=sn,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function Y2(a,e){function i(r,o=zs){let c;const u=Rt.getTransfer(o);if(r===Xi)return a.UNSIGNED_BYTE;if(r===wp)return a.UNSIGNED_SHORT_4_4_4_4;if(r===Dp)return a.UNSIGNED_SHORT_5_5_5_1;if(r===Sx)return a.UNSIGNED_INT_5_9_9_9_REV;if(r===Mx)return a.UNSIGNED_INT_10F_11F_11F_REV;if(r===vx)return a.BYTE;if(r===xx)return a.SHORT;if(r===Pl)return a.UNSIGNED_SHORT;if(r===Cp)return a.INT;if(r===Aa)return a.UNSIGNED_INT;if(r===Ma)return a.FLOAT;if(r===is)return a.HALF_FLOAT;if(r===yx)return a.ALPHA;if(r===Ex)return a.RGB;if(r===oa)return a.RGBA;if(r===as)return a.DEPTH_COMPONENT;if(r===Mr)return a.DEPTH_STENCIL;if(r===bx)return a.RED;if(r===Lp)return a.RED_INTEGER;if(r===Er)return a.RG;if(r===Np)return a.RG_INTEGER;if(r===Up)return a.RGBA_INTEGER;if(r===xu||r===Su||r===Mu||r===yu)if(u===Xt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===xu)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Su)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Mu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===yu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===xu)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Su)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Mu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===yu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Yh||r===qh||r===jh||r===Zh)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===Yh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===qh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===jh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Zh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Kh||r===Qh||r===Jh||r===$h||r===ep||r===Tu||r===tp)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===Kh||r===Qh)return u===Xt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===Jh)return u===Xt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(r===$h)return c.COMPRESSED_R11_EAC;if(r===ep)return c.COMPRESSED_SIGNED_R11_EAC;if(r===Tu)return c.COMPRESSED_RG11_EAC;if(r===tp)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===np||r===ip||r===ap||r===sp||r===rp||r===op||r===lp||r===cp||r===up||r===fp||r===dp||r===hp||r===pp||r===mp)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===np)return u===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===ip)return u===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===ap)return u===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===sp)return u===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===rp)return u===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===op)return u===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===lp)return u===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===cp)return u===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===up)return u===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===fp)return u===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===dp)return u===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===hp)return u===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===pp)return u===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===mp)return u===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===gp||r===_p||r===vp)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===gp)return u===Xt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===_p)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===vp)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===xp||r===Sp||r===Au||r===Mp)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===xp)return c.COMPRESSED_RED_RGTC1_EXT;if(r===Sp)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Au)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Mp)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Il?a.UNSIGNED_INT_24_8:a[r]!==void 0?a[r]:null}return{convert:i}}const q2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,j2=`
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

}`;class Z2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const r=new Ox(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new qi({vertexShader:q2,fragmentShader:j2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Ri(new Gs(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class K2 extends Tr{constructor(e,i){super();const r=this;let o=null,c=1,u=null,d="local-floor",m=1,h=null,g=null,v=null,_=null,S=null,E=null;const R=typeof XRWebGLBinding<"u",y=new Z2,x={},F=i.getContextAttributes();let I=null,w=null;const O=[],L=[],B=new Pt;let A=null;const N=new ki;N.viewport=new Sn;const Y=new ki;Y.viewport=new Sn;const k=[N,Y],j=new rb;let ue=null,fe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ae){let Me=O[ae];return Me===void 0&&(Me=new th,O[ae]=Me),Me.getTargetRaySpace()},this.getControllerGrip=function(ae){let Me=O[ae];return Me===void 0&&(Me=new th,O[ae]=Me),Me.getGripSpace()},this.getHand=function(ae){let Me=O[ae];return Me===void 0&&(Me=new th,O[ae]=Me),Me.getHandSpace()};function q(ae){const Me=L.indexOf(ae.inputSource);if(Me===-1)return;const ge=O[Me];ge!==void 0&&(ge.update(ae.inputSource,ae.frame,h||u),ge.dispatchEvent({type:ae.type,data:ae.inputSource}))}function z(){o.removeEventListener("select",q),o.removeEventListener("selectstart",q),o.removeEventListener("selectend",q),o.removeEventListener("squeeze",q),o.removeEventListener("squeezestart",q),o.removeEventListener("squeezeend",q),o.removeEventListener("end",z),o.removeEventListener("inputsourceschange",H);for(let ae=0;ae<O.length;ae++){const Me=L[ae];Me!==null&&(L[ae]=null,O[ae].disconnect(Me))}ue=null,fe=null,y.reset();for(const ae in x)delete x[ae];e.setRenderTarget(I),S=null,_=null,v=null,o=null,w=null,Ce.stop(),r.isPresenting=!1,e.setPixelRatio(A),e.setSize(B.width,B.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ae){c=ae,r.isPresenting===!0&&ot("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ae){d=ae,r.isPresenting===!0&&ot("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||u},this.setReferenceSpace=function(ae){h=ae},this.getBaseLayer=function(){return _!==null?_:S},this.getBinding=function(){return v===null&&R&&(v=new XRWebGLBinding(o,i)),v},this.getFrame=function(){return E},this.getSession=function(){return o},this.setSession=async function(ae){if(o=ae,o!==null){if(I=e.getRenderTarget(),o.addEventListener("select",q),o.addEventListener("selectstart",q),o.addEventListener("selectend",q),o.addEventListener("squeeze",q),o.addEventListener("squeezestart",q),o.addEventListener("squeezeend",q),o.addEventListener("end",z),o.addEventListener("inputsourceschange",H),F.xrCompatible!==!0&&await i.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(B),R&&"createProjectionLayer"in XRWebGLBinding.prototype){let ge=null,qe=null,st=null;F.depth&&(st=F.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,ge=F.stencil?Mr:as,qe=F.stencil?Il:Aa);const et={colorFormat:i.RGBA8,depthFormat:st,scaleFactor:c};v=this.getBinding(),_=v.createProjectionLayer(et),o.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),w=new ba(_.textureWidth,_.textureHeight,{format:oa,type:Xi,depthTexture:new Co(_.textureWidth,_.textureHeight,qe,void 0,void 0,void 0,void 0,void 0,void 0,ge),stencilBuffer:F.stencil,colorSpace:e.outputColorSpace,samples:F.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}else{const ge={antialias:F.antialias,alpha:!0,depth:F.depth,stencil:F.stencil,framebufferScaleFactor:c};S=new XRWebGLLayer(o,i,ge),o.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),w=new ba(S.framebufferWidth,S.framebufferHeight,{format:oa,type:Xi,colorSpace:e.outputColorSpace,stencilBuffer:F.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(m),h=null,u=await o.requestReferenceSpace(d),Ce.setContext(o),Ce.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function H(ae){for(let Me=0;Me<ae.removed.length;Me++){const ge=ae.removed[Me],qe=L.indexOf(ge);qe>=0&&(L[qe]=null,O[qe].disconnect(ge))}for(let Me=0;Me<ae.added.length;Me++){const ge=ae.added[Me];let qe=L.indexOf(ge);if(qe===-1){for(let et=0;et<O.length;et++)if(et>=L.length){L.push(ge),qe=et;break}else if(L[et]===null){L[et]=ge,qe=et;break}if(qe===-1)break}const st=O[qe];st&&st.connect(ge)}}const te=new ie,me=new ie;function Se(ae,Me,ge){te.setFromMatrixPosition(Me.matrixWorld),me.setFromMatrixPosition(ge.matrixWorld);const qe=te.distanceTo(me),st=Me.projectionMatrix.elements,et=ge.projectionMatrix.elements,Yt=st[14]/(st[10]-1),ht=st[14]/(st[10]+1),vt=(st[9]+1)/st[5],it=(st[9]-1)/st[5],ct=(st[8]-1)/st[0],Qt=(et[8]+1)/et[0],Jt=Yt*ct,qt=Yt*Qt,tn=qe/(-ct+Qt),Gt=tn*-ct;if(Me.matrixWorld.decompose(ae.position,ae.quaternion,ae.scale),ae.translateX(Gt),ae.translateZ(tn),ae.matrixWorld.compose(ae.position,ae.quaternion,ae.scale),ae.matrixWorldInverse.copy(ae.matrixWorld).invert(),st[10]===-1)ae.projectionMatrix.copy(Me.projectionMatrix),ae.projectionMatrixInverse.copy(Me.projectionMatrixInverse);else{const sn=Yt+tn,Z=ht+tn,bt=Jt-Gt,Tt=qt+(qe-Gt),P=vt*ht/Z*sn,b=it*ht/Z*sn;ae.projectionMatrix.makePerspective(bt,Tt,P,b,sn,Z),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert()}}function U(ae,Me){Me===null?ae.matrixWorld.copy(ae.matrix):ae.matrixWorld.multiplyMatrices(Me.matrixWorld,ae.matrix),ae.matrixWorldInverse.copy(ae.matrixWorld).invert()}this.updateCamera=function(ae){if(o===null)return;let Me=ae.near,ge=ae.far;y.texture!==null&&(y.depthNear>0&&(Me=y.depthNear),y.depthFar>0&&(ge=y.depthFar)),j.near=Y.near=N.near=Me,j.far=Y.far=N.far=ge,(ue!==j.near||fe!==j.far)&&(o.updateRenderState({depthNear:j.near,depthFar:j.far}),ue=j.near,fe=j.far),j.layers.mask=ae.layers.mask|6,N.layers.mask=j.layers.mask&-5,Y.layers.mask=j.layers.mask&-3;const qe=ae.parent,st=j.cameras;U(j,qe);for(let et=0;et<st.length;et++)U(st[et],qe);st.length===2?Se(j,N,Y):j.projectionMatrix.copy(N.projectionMatrix),K(ae,j,qe)};function K(ae,Me,ge){ge===null?ae.matrix.copy(Me.matrixWorld):(ae.matrix.copy(ge.matrixWorld),ae.matrix.invert(),ae.matrix.multiply(Me.matrixWorld)),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.updateMatrixWorld(!0),ae.projectionMatrix.copy(Me.projectionMatrix),ae.projectionMatrixInverse.copy(Me.projectionMatrixInverse),ae.isPerspectiveCamera&&(ae.fov=Fl*2*Math.atan(1/ae.projectionMatrix.elements[5]),ae.zoom=1)}this.getCamera=function(){return j},this.getFoveation=function(){if(!(_===null&&S===null))return m},this.setFoveation=function(ae){m=ae,_!==null&&(_.fixedFoveation=ae),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=ae)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(j)},this.getCameraTexture=function(ae){return x[ae]};let be=null;function Ae(ae,Me){if(g=Me.getViewerPose(h||u),E=Me,g!==null){const ge=g.views;S!==null&&(e.setRenderTargetFramebuffer(w,S.framebuffer),e.setRenderTarget(w));let qe=!1;ge.length!==j.cameras.length&&(j.cameras.length=0,qe=!0);for(let ht=0;ht<ge.length;ht++){const vt=ge[ht];let it=null;if(S!==null)it=S.getViewport(vt);else{const Qt=v.getViewSubImage(_,vt);it=Qt.viewport,ht===0&&(e.setRenderTargetTextures(w,Qt.colorTexture,Qt.depthStencilTexture),e.setRenderTarget(w))}let ct=k[ht];ct===void 0&&(ct=new ki,ct.layers.enable(ht),ct.viewport=new Sn,k[ht]=ct),ct.matrix.fromArray(vt.transform.matrix),ct.matrix.decompose(ct.position,ct.quaternion,ct.scale),ct.projectionMatrix.fromArray(vt.projectionMatrix),ct.projectionMatrixInverse.copy(ct.projectionMatrix).invert(),ct.viewport.set(it.x,it.y,it.width,it.height),ht===0&&(j.matrix.copy(ct.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale)),qe===!0&&j.cameras.push(ct)}const st=o.enabledFeatures;if(st&&st.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&R){v=r.getBinding();const ht=v.getDepthInformation(ge[0]);ht&&ht.isValid&&ht.texture&&y.init(ht,o.renderState)}if(st&&st.includes("camera-access")&&R){e.state.unbindTexture(),v=r.getBinding();for(let ht=0;ht<ge.length;ht++){const vt=ge[ht].camera;if(vt){let it=x[vt];it||(it=new Ox,x[vt]=it);const ct=v.getCameraImage(vt);it.sourceTexture=ct}}}}for(let ge=0;ge<O.length;ge++){const qe=L[ge],st=O[ge];qe!==null&&st!==void 0&&st.update(qe,Me,h||u)}be&&be(ae,Me),Me.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:Me}),E=null}const Ce=new Bx;Ce.setAnimationLoop(Ae),this.setAnimationLoop=function(ae){be=ae},this.dispose=function(){}}}const Q2=new bn,Wx=new ft;Wx.set(-1,0,0,0,1,0,0,0,1);function J2(a,e){function i(y,x){y.matrixAutoUpdate===!0&&y.updateMatrix(),x.value.copy(y.matrix)}function r(y,x){x.color.getRGB(y.fogColor.value,Px(a)),x.isFog?(y.fogNear.value=x.near,y.fogFar.value=x.far):x.isFogExp2&&(y.fogDensity.value=x.density)}function o(y,x,F,I,w){x.isNodeMaterial?x.uniformsNeedUpdate=!1:x.isMeshBasicMaterial?c(y,x):x.isMeshLambertMaterial?(c(y,x),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)):x.isMeshToonMaterial?(c(y,x),v(y,x)):x.isMeshPhongMaterial?(c(y,x),g(y,x),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)):x.isMeshStandardMaterial?(c(y,x),_(y,x),x.isMeshPhysicalMaterial&&S(y,x,w)):x.isMeshMatcapMaterial?(c(y,x),E(y,x)):x.isMeshDepthMaterial?c(y,x):x.isMeshDistanceMaterial?(c(y,x),R(y,x)):x.isMeshNormalMaterial?c(y,x):x.isLineBasicMaterial?(u(y,x),x.isLineDashedMaterial&&d(y,x)):x.isPointsMaterial?m(y,x,F,I):x.isSpriteMaterial?h(y,x):x.isShadowMaterial?(y.color.value.copy(x.color),y.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function c(y,x){y.opacity.value=x.opacity,x.color&&y.diffuse.value.copy(x.color),x.emissive&&y.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(y.map.value=x.map,i(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,i(x.alphaMap,y.alphaMapTransform)),x.bumpMap&&(y.bumpMap.value=x.bumpMap,i(x.bumpMap,y.bumpMapTransform),y.bumpScale.value=x.bumpScale,x.side===pi&&(y.bumpScale.value*=-1)),x.normalMap&&(y.normalMap.value=x.normalMap,i(x.normalMap,y.normalMapTransform),y.normalScale.value.copy(x.normalScale),x.side===pi&&y.normalScale.value.negate()),x.displacementMap&&(y.displacementMap.value=x.displacementMap,i(x.displacementMap,y.displacementMapTransform),y.displacementScale.value=x.displacementScale,y.displacementBias.value=x.displacementBias),x.emissiveMap&&(y.emissiveMap.value=x.emissiveMap,i(x.emissiveMap,y.emissiveMapTransform)),x.specularMap&&(y.specularMap.value=x.specularMap,i(x.specularMap,y.specularMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest);const F=e.get(x),I=F.envMap,w=F.envMapRotation;I&&(y.envMap.value=I,y.envMapRotation.value.setFromMatrix4(Q2.makeRotationFromEuler(w)).transpose(),I.isCubeTexture&&I.isRenderTargetTexture===!1&&y.envMapRotation.value.premultiply(Wx),y.reflectivity.value=x.reflectivity,y.ior.value=x.ior,y.refractionRatio.value=x.refractionRatio),x.lightMap&&(y.lightMap.value=x.lightMap,y.lightMapIntensity.value=x.lightMapIntensity,i(x.lightMap,y.lightMapTransform)),x.aoMap&&(y.aoMap.value=x.aoMap,y.aoMapIntensity.value=x.aoMapIntensity,i(x.aoMap,y.aoMapTransform))}function u(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,x.map&&(y.map.value=x.map,i(x.map,y.mapTransform))}function d(y,x){y.dashSize.value=x.dashSize,y.totalSize.value=x.dashSize+x.gapSize,y.scale.value=x.scale}function m(y,x,F,I){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.size.value=x.size*F,y.scale.value=I*.5,x.map&&(y.map.value=x.map,i(x.map,y.uvTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,i(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function h(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.rotation.value=x.rotation,x.map&&(y.map.value=x.map,i(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,i(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function g(y,x){y.specular.value.copy(x.specular),y.shininess.value=Math.max(x.shininess,1e-4)}function v(y,x){x.gradientMap&&(y.gradientMap.value=x.gradientMap)}function _(y,x){y.metalness.value=x.metalness,x.metalnessMap&&(y.metalnessMap.value=x.metalnessMap,i(x.metalnessMap,y.metalnessMapTransform)),y.roughness.value=x.roughness,x.roughnessMap&&(y.roughnessMap.value=x.roughnessMap,i(x.roughnessMap,y.roughnessMapTransform)),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)}function S(y,x,F){y.ior.value=x.ior,x.sheen>0&&(y.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),y.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(y.sheenColorMap.value=x.sheenColorMap,i(x.sheenColorMap,y.sheenColorMapTransform)),x.sheenRoughnessMap&&(y.sheenRoughnessMap.value=x.sheenRoughnessMap,i(x.sheenRoughnessMap,y.sheenRoughnessMapTransform))),x.clearcoat>0&&(y.clearcoat.value=x.clearcoat,y.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(y.clearcoatMap.value=x.clearcoatMap,i(x.clearcoatMap,y.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,i(x.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(y.clearcoatNormalMap.value=x.clearcoatNormalMap,i(x.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===pi&&y.clearcoatNormalScale.value.negate())),x.dispersion>0&&(y.dispersion.value=x.dispersion),x.iridescence>0&&(y.iridescence.value=x.iridescence,y.iridescenceIOR.value=x.iridescenceIOR,y.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(y.iridescenceMap.value=x.iridescenceMap,i(x.iridescenceMap,y.iridescenceMapTransform)),x.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=x.iridescenceThicknessMap,i(x.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),x.transmission>0&&(y.transmission.value=x.transmission,y.transmissionSamplerMap.value=F.texture,y.transmissionSamplerSize.value.set(F.width,F.height),x.transmissionMap&&(y.transmissionMap.value=x.transmissionMap,i(x.transmissionMap,y.transmissionMapTransform)),y.thickness.value=x.thickness,x.thicknessMap&&(y.thicknessMap.value=x.thicknessMap,i(x.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=x.attenuationDistance,y.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(y.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(y.anisotropyMap.value=x.anisotropyMap,i(x.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=x.specularIntensity,y.specularColor.value.copy(x.specularColor),x.specularColorMap&&(y.specularColorMap.value=x.specularColorMap,i(x.specularColorMap,y.specularColorMapTransform)),x.specularIntensityMap&&(y.specularIntensityMap.value=x.specularIntensityMap,i(x.specularIntensityMap,y.specularIntensityMapTransform))}function E(y,x){x.matcap&&(y.matcap.value=x.matcap)}function R(y,x){const F=e.get(x).light;y.referencePosition.value.setFromMatrixPosition(F.matrixWorld),y.nearDistance.value=F.shadow.camera.near,y.farDistance.value=F.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function $2(a,e,i,r){let o={},c={},u=[];const d=a.getParameter(a.MAX_UNIFORM_BUFFER_BINDINGS);function m(w,O){const L=O.program;r.uniformBlockBinding(w,L)}function h(w,O){let L=o[w.id];L===void 0&&(y(w),L=g(w),o[w.id]=L,w.addEventListener("dispose",F));const B=O.program;r.updateUBOMapping(w,B);const A=e.render.frame;c[w.id]!==A&&(_(w),c[w.id]=A)}function g(w){const O=v();w.__bindingPointIndex=O;const L=a.createBuffer(),B=w.__size,A=w.usage;return a.bindBuffer(a.UNIFORM_BUFFER,L),a.bufferData(a.UNIFORM_BUFFER,B,A),a.bindBuffer(a.UNIFORM_BUFFER,null),a.bindBufferBase(a.UNIFORM_BUFFER,O,L),L}function v(){for(let w=0;w<d;w++)if(u.indexOf(w)===-1)return u.push(w),w;return Dt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(w){const O=o[w.id],L=w.uniforms,B=w.__cache;a.bindBuffer(a.UNIFORM_BUFFER,O);for(let A=0,N=L.length;A<N;A++){const Y=L[A];if(Array.isArray(Y))for(let k=0,j=Y.length;k<j;k++)S(Y[k],A,k,B);else S(Y,A,0,B)}a.bindBuffer(a.UNIFORM_BUFFER,null)}function S(w,O,L,B){if(R(w,O,L,B)===!0){const A=w.__offset,N=w.value;if(Array.isArray(N)){let Y=0;for(let k=0;k<N.length;k++){const j=N[k],ue=x(j);E(j,w.__data,Y),typeof j!="number"&&typeof j!="boolean"&&!j.isMatrix3&&!ArrayBuffer.isView(j)&&(Y+=ue.storage/Float32Array.BYTES_PER_ELEMENT)}}else E(N,w.__data,0);a.bufferSubData(a.UNIFORM_BUFFER,A,w.__data)}}function E(w,O,L){typeof w=="number"||typeof w=="boolean"?O[0]=w:w.isMatrix3?(O[0]=w.elements[0],O[1]=w.elements[1],O[2]=w.elements[2],O[3]=0,O[4]=w.elements[3],O[5]=w.elements[4],O[6]=w.elements[5],O[7]=0,O[8]=w.elements[6],O[9]=w.elements[7],O[10]=w.elements[8],O[11]=0):ArrayBuffer.isView(w)?O.set(new w.constructor(w.buffer,w.byteOffset,O.length)):w.toArray(O,L)}function R(w,O,L,B){const A=w.value,N=O+"_"+L;if(B[N]===void 0)return typeof A=="number"||typeof A=="boolean"?B[N]=A:ArrayBuffer.isView(A)?B[N]=A.slice():B[N]=A.clone(),!0;{const Y=B[N];if(typeof A=="number"||typeof A=="boolean"){if(Y!==A)return B[N]=A,!0}else{if(ArrayBuffer.isView(A))return!0;if(Y.equals(A)===!1)return Y.copy(A),!0}}return!1}function y(w){const O=w.uniforms;let L=0;const B=16;for(let N=0,Y=O.length;N<Y;N++){const k=Array.isArray(O[N])?O[N]:[O[N]];for(let j=0,ue=k.length;j<ue;j++){const fe=k[j],q=Array.isArray(fe.value)?fe.value:[fe.value];for(let z=0,H=q.length;z<H;z++){const te=q[z],me=x(te),Se=L%B,U=Se%me.boundary,K=Se+U;L+=U,K!==0&&B-K<me.storage&&(L+=B-K),fe.__data=new Float32Array(me.storage/Float32Array.BYTES_PER_ELEMENT),fe.__offset=L,L+=me.storage}}}const A=L%B;return A>0&&(L+=B-A),w.__size=L,w.__cache={},this}function x(w){const O={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(O.boundary=4,O.storage=4):w.isVector2?(O.boundary=8,O.storage=8):w.isVector3||w.isColor?(O.boundary=16,O.storage=12):w.isVector4?(O.boundary=16,O.storage=16):w.isMatrix3?(O.boundary=48,O.storage=48):w.isMatrix4?(O.boundary=64,O.storage=64):w.isTexture?ot("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(w)?(O.boundary=16,O.storage=w.byteLength):ot("WebGLRenderer: Unsupported uniform value type.",w),O}function F(w){const O=w.target;O.removeEventListener("dispose",F);const L=u.indexOf(O.__bindingPointIndex);u.splice(L,1),a.deleteBuffer(o[O.id]),delete o[O.id],delete c[O.id]}function I(){for(const w in o)a.deleteBuffer(o[w]);u=[],o={},c={}}return{bind:m,update:h,dispose:I}}const eR=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let va=null;function tR(){return va===null&&(va=new XE(eR,16,16,Er,is),va.name="DFG_LUT",va.minFilter=hn,va.magFilter=hn,va.wrapS=ra,va.wrapT=ra,va.generateMipmaps=!1,va.needsUpdate=!0),va}class nR{constructor(e={}){const{canvas:i=sE(),context:r=null,depth:o=!0,stencil:c=!1,alpha:u=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:h=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:_=!1,outputBufferType:S=Xi}=e;this.isWebGLRenderer=!0;let E;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=r.getContextAttributes().alpha}else E=u;const R=S,y=new Set([Up,Np,Lp]),x=new Set([Xi,Aa,Pl,Il,wp,Dp]),F=new Uint32Array(4),I=new Int32Array(4),w=new ie;let O=null,L=null;const B=[],A=[];let N=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ea,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const Y=this;let k=!1,j=null,ue=null,fe=null,q=null;this._outputColorSpace=ei;let z=0,H=0,te=null,me=-1,Se=null;const U=new Sn,K=new Sn;let be=null;const Ae=new Ht(0);let Ce=0,ae=i.width,Me=i.height,ge=1,qe=null,st=null;const et=new Sn(0,0,ae,Me),Yt=new Sn(0,0,ae,Me);let ht=!1;const vt=new Lx;let it=!1,ct=!1;const Qt=new bn,Jt=new ie,qt=new Sn,tn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Gt=!1;function sn(){return te===null?ge:1}let Z=r;function bt(T,G){return i.getContext(T,G)}try{const T={alpha:!0,depth:o,stencil:c,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:h,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Rp}`),i.addEventListener("webglcontextlost",nn,!1),i.addEventListener("webglcontextrestored",wt,!1),i.addEventListener("webglcontextcreationerror",ti,!1),Z===null){const G="webgl2";if(Z=bt(G,T),Z===null)throw bt(G)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(T){throw Dt("WebGLRenderer: "+T.message),T}let Tt,P,b,J,re,le,we,Le,pe,de,De,Ge,Fe,Ie,Je,tt,rt,X,Ne,ve,Oe,Pe,Ee;function Ve(){Tt=new tA(Z),Tt.init(),Oe=new Y2(Z,Tt),P=new qT(Z,Tt,e,Oe),b=new X2(Z,Tt),P.reversedDepthBuffer&&_&&b.buffers.depth.setReversed(!0),ue=Z.createFramebuffer(),fe=Z.createFramebuffer(),q=Z.createFramebuffer(),J=new aA(Z),re=new D2,le=new W2(Z,Tt,b,re,P,Oe,J),we=new eA(Y),Le=new lb(Z),Pe=new WT(Z,Le),pe=new nA(Z,Le,J,Pe),de=new rA(Z,pe,Le,Pe,J),X=new sA(Z,P,le),Je=new jT(re),De=new w2(Y,we,Tt,P,Pe,Je),Ge=new J2(Y,re),Fe=new N2,Ie=new B2(Tt),rt=new XT(Y,we,b,de,E,m),tt=new k2(Y,de,P),Ee=new $2(Z,J,P,b),Ne=new YT(Z,Tt,J),ve=new iA(Z,Tt,J),J.programs=De.programs,Y.capabilities=P,Y.extensions=Tt,Y.properties=re,Y.renderLists=Fe,Y.shadowMap=tt,Y.state=b,Y.info=J}Ve(),R!==Xi&&(N=new lA(R,i.width,i.height,d,o,c));const Ze=new K2(Y,Z);this.xr=Ze,this.getContext=function(){return Z},this.getContextAttributes=function(){return Z.getContextAttributes()},this.forceContextLoss=function(){const T=Tt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Tt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return ge},this.setPixelRatio=function(T){T!==void 0&&(ge=T,this.setSize(ae,Me,!1))},this.getSize=function(T){return T.set(ae,Me)},this.setSize=function(T,G,$=!0){if(Ze.isPresenting){ot("WebGLRenderer: Can't change size while VR device is presenting.");return}ae=T,Me=G,i.width=Math.floor(T*ge),i.height=Math.floor(G*ge),$===!0&&(i.style.width=T+"px",i.style.height=G+"px"),N!==null&&N.setSize(i.width,i.height),this.setViewport(0,0,T,G)},this.getDrawingBufferSize=function(T){return T.set(ae*ge,Me*ge).floor()},this.setDrawingBufferSize=function(T,G,$){ae=T,Me=G,ge=$,i.width=Math.floor(T*$),i.height=Math.floor(G*$),this.setViewport(0,0,T,G)},this.setEffects=function(T){if(R===Xi){Dt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let G=0;G<T.length;G++)if(T[G].isOutputPass===!0){ot("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}N.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(U)},this.getViewport=function(T){return T.copy(et)},this.setViewport=function(T,G,$,Q){T.isVector4?et.set(T.x,T.y,T.z,T.w):et.set(T,G,$,Q),b.viewport(U.copy(et).multiplyScalar(ge).round())},this.getScissor=function(T){return T.copy(Yt)},this.setScissor=function(T,G,$,Q){T.isVector4?Yt.set(T.x,T.y,T.z,T.w):Yt.set(T,G,$,Q),b.scissor(K.copy(Yt).multiplyScalar(ge).round())},this.getScissorTest=function(){return ht},this.setScissorTest=function(T){b.setScissorTest(ht=T)},this.setOpaqueSort=function(T){qe=T},this.setTransparentSort=function(T){st=T},this.getClearColor=function(T){return T.copy(rt.getClearColor())},this.setClearColor=function(){rt.setClearColor(...arguments)},this.getClearAlpha=function(){return rt.getClearAlpha()},this.setClearAlpha=function(){rt.setClearAlpha(...arguments)},this.clear=function(T=!0,G=!0,$=!0){let Q=0;if(T){let ne=!1;if(te!==null){const Ue=te.texture.format;ne=y.has(Ue)}if(ne){const Ue=te.texture.type,He=x.has(Ue),Re=rt.getClearColor(),ke=rt.getClearAlpha(),ze=Re.r,je=Re.g,lt=Re.b;He?(F[0]=ze,F[1]=je,F[2]=lt,F[3]=ke,Z.clearBufferuiv(Z.COLOR,0,F)):(I[0]=ze,I[1]=je,I[2]=lt,I[3]=ke,Z.clearBufferiv(Z.COLOR,0,I))}else Q|=Z.COLOR_BUFFER_BIT}G&&(Q|=Z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),$&&(Q|=Z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Q!==0&&Z.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),j=T},this.dispose=function(){i.removeEventListener("webglcontextlost",nn,!1),i.removeEventListener("webglcontextrestored",wt,!1),i.removeEventListener("webglcontextcreationerror",ti,!1),rt.dispose(),Fe.dispose(),Ie.dispose(),re.dispose(),we.dispose(),de.dispose(),Pe.dispose(),Ee.dispose(),De.dispose(),Ze.dispose(),Ze.removeEventListener("sessionstart",pn),Ze.removeEventListener("sessionend",gn),zn.stop()};function nn(T){T.preventDefault(),W_("WebGLRenderer: Context Lost."),k=!0}function wt(){W_("WebGLRenderer: Context Restored."),k=!1;const T=J.autoReset,G=tt.enabled,$=tt.autoUpdate,Q=tt.needsUpdate,ne=tt.type;Ve(),J.autoReset=T,tt.enabled=G,tt.autoUpdate=$,tt.needsUpdate=Q,tt.type=ne}function ti(T){Dt("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function In(T){const G=T.target;G.removeEventListener("dispose",In),la(G)}function la(T){Ra(T),re.remove(T)}function Ra(T){const G=re.get(T).programs;G!==void 0&&(G.forEach(function($){De.releaseProgram($)}),T.isShaderMaterial&&De.releaseShaderCache(T))}this.renderBufferDirect=function(T,G,$,Q,ne,Ue){G===null&&(G=tn);const He=ne.isMesh&&ne.matrixWorld.determinantAffine()<0,Re=Ki(T,G,$,Q,ne);b.setMaterial(Q,He);let ke=$.index,ze=1;if(Q.wireframe===!0){if(ke=pe.getWireframeAttribute($),ke===void 0)return;ze=2}const je=$.drawRange,lt=$.attributes.position;let Ke=je.start*ze,Mt=(je.start+je.count)*ze;Ue!==null&&(Ke=Math.max(Ke,Ue.start*ze),Mt=Math.min(Mt,(Ue.start+Ue.count)*ze)),ke!==null?(Ke=Math.max(Ke,0),Mt=Math.min(Mt,ke.count)):lt!=null&&(Ke=Math.max(Ke,0),Mt=Math.min(Mt,lt.count));const $t=Mt-Ke;if($t<0||$t===1/0)return;Pe.setup(ne,Q,Re,$,ke);let It,Lt=Ne;if(ke!==null&&(It=Le.get(ke),Lt=ve,Lt.setIndex(It)),ne.isMesh)Q.wireframe===!0?(b.setLineWidth(Q.wireframeLinewidth*sn()),Lt.setMode(Z.LINES)):Lt.setMode(Z.TRIANGLES);else if(ne.isLine){let Ct=Q.linewidth;Ct===void 0&&(Ct=1),b.setLineWidth(Ct*sn()),ne.isLineSegments?Lt.setMode(Z.LINES):ne.isLineLoop?Lt.setMode(Z.LINE_LOOP):Lt.setMode(Z.LINE_STRIP)}else ne.isPoints?Lt.setMode(Z.POINTS):ne.isSprite&&Lt.setMode(Z.TRIANGLES);if(ne.isBatchedMesh)if(Tt.get("WEBGL_multi_draw"))Lt.renderMultiDraw(ne._multiDrawStarts,ne._multiDrawCounts,ne._multiDrawCount);else{const Ct=ne._multiDrawStarts,We=ne._multiDrawCounts,Tn=ne._multiDrawCount,mt=ke?Le.get(ke).bytesPerElement:1,mn=re.get(Q).currentProgram.getUniforms();for(let Zn=0;Zn<Tn;Zn++)mn.setValue(Z,"_gl_DrawID",Zn),Lt.render(Ct[Zn]/mt,We[Zn])}else if(ne.isInstancedMesh)Lt.renderInstances(Ke,$t,ne.count);else if($.isInstancedBufferGeometry){const Ct=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,We=Math.min($.instanceCount,Ct);Lt.renderInstances(Ke,$t,We)}else Lt.render(Ke,$t)};function ss(T,G,$){T.transparent===!0&&T.side===Sa&&T.forceSinglePass===!1?(T.side=pi,T.needsUpdate=!0,Zi(T,G,$),T.side=ns,T.needsUpdate=!0,Zi(T,G,$),T.side=Sa):Zi(T,G,$)}this.compile=function(T,G,$=null){$===null&&($=T),L=Ie.get($),L.init(G),A.push(L),$.traverseVisible(function(ne){ne.isLight&&ne.layers.test(G.layers)&&(L.pushLight(ne),ne.castShadow&&L.pushShadow(ne))}),T!==$&&T.traverseVisible(function(ne){ne.isLight&&ne.layers.test(G.layers)&&(L.pushLight(ne),ne.castShadow&&L.pushShadow(ne))}),L.setupLights();const Q=new Set;return T.traverse(function(ne){if(!(ne.isMesh||ne.isPoints||ne.isLine||ne.isSprite))return;const Ue=ne.material;if(Ue)if(Array.isArray(Ue))for(let He=0;He<Ue.length;He++){const Re=Ue[He];ss(Re,$,ne),Q.add(Re)}else ss(Ue,$,ne),Q.add(Ue)}),L=A.pop(),Q},this.compileAsync=function(T,G,$=null){const Q=this.compile(T,G,$);return new Promise(ne=>{function Ue(){if(Q.forEach(function(He){re.get(He).currentProgram.isReady()&&Q.delete(He)}),Q.size===0){ne(T);return}setTimeout(Ue,10)}Tt.get("KHR_parallel_shader_compile")!==null?Ue():setTimeout(Ue,10)})};let Ca=null;function mi(T){Ca&&Ca(T)}function pn(){zn.stop()}function gn(){zn.start()}const zn=new Bx;zn.setAnimationLoop(mi),typeof self<"u"&&zn.setContext(self),this.setAnimationLoop=function(T){Ca=T,Ze.setAnimationLoop(T),T===null?zn.stop():zn.start()},Ze.addEventListener("sessionstart",pn),Ze.addEventListener("sessionend",gn),this.render=function(T,G){if(G!==void 0&&G.isCamera!==!0){Dt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;j!==null&&j.renderStart(T,G);const $=Ze.enabled===!0&&Ze.isPresenting===!0,Q=N!==null&&(te===null||$)&&N.begin(Y,te);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),Ze.enabled===!0&&Ze.isPresenting===!0&&(N===null||N.isCompositing()===!1)&&(Ze.cameraAutoUpdate===!0&&Ze.updateCamera(G),G=Ze.getCamera()),T.isScene===!0&&T.onBeforeRender(Y,T,G,te),L=Ie.get(T,A.length),L.init(G),L.state.textureUnits=le.getTextureUnits(),A.push(L),Qt.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),vt.setFromProjectionMatrix(Qt,ya,G.reversedDepth),ct=this.localClippingEnabled,it=Je.init(this.clippingPlanes,ct),O=Fe.get(T,B.length),O.init(),B.push(O),Ze.enabled===!0&&Ze.isPresenting===!0){const He=Y.xr.getDepthSensingMesh();He!==null&&ca(He,G,-1/0,Y.sortObjects)}ca(T,G,0,Y.sortObjects),O.finish(),Y.sortObjects===!0&&O.sort(qe,st,G.reversedDepth),Gt=Ze.enabled===!1||Ze.isPresenting===!1||Ze.hasDepthSensing()===!1,Gt&&rt.addToRenderList(O,T),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),it===!0&&Je.beginShadows();const ne=L.state.shadowsArray;if(tt.render(ne,T,G),it===!0&&Je.endShadows(),(Q&&N.hasRenderPass())===!1){const He=O.opaque,Re=O.transmissive;if(L.setupLights(),G.isArrayCamera){const ke=G.cameras;if(Re.length>0)for(let ze=0,je=ke.length;ze<je;ze++){const lt=ke[ze];Xs(He,Re,T,lt)}Gt&&rt.render(T);for(let ze=0,je=ke.length;ze<je;ze++){const lt=ke[ze];ks(O,T,lt,lt.viewport)}}else Re.length>0&&Xs(He,Re,T,G),Gt&&rt.render(T),ks(O,T,G)}te!==null&&H===0&&(le.updateMultisampleRenderTarget(te),le.updateRenderTargetMipmap(te)),Q&&N.end(Y),T.isScene===!0&&T.onAfterRender(Y,T,G),Pe.resetDefaultState(),me=-1,Se=null,A.pop(),A.length>0?(L=A[A.length-1],le.setTextureUnits(L.state.textureUnits),it===!0&&Je.setGlobalState(Y.clippingPlanes,L.state.camera)):L=null,B.pop(),B.length>0?O=B[B.length-1]:O=null,j!==null&&j.renderEnd()};function ca(T,G,$,Q){if(T.visible===!1)return;if(T.layers.test(G.layers)){if(T.isGroup)$=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(G);else if(T.isLightProbeGrid)L.pushLightProbeGrid(T);else if(T.isLight)L.pushLight(T),T.castShadow&&L.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||vt.intersectsSprite(T)){Q&&qt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Qt);const He=de.update(T),Re=T.material;Re.visible&&O.push(T,He,Re,$,qt.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||vt.intersectsObject(T))){const He=de.update(T),Re=T.material;if(Q&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),qt.copy(T.boundingSphere.center)):(He.boundingSphere===null&&He.computeBoundingSphere(),qt.copy(He.boundingSphere.center)),qt.applyMatrix4(T.matrixWorld).applyMatrix4(Qt)),Array.isArray(Re)){const ke=He.groups;for(let ze=0,je=ke.length;ze<je;ze++){const lt=ke[ze],Ke=Re[lt.materialIndex];Ke&&Ke.visible&&O.push(T,He,Ke,$,qt.z,lt)}}else Re.visible&&O.push(T,He,Re,$,qt.z,null)}}const Ue=T.children;for(let He=0,Re=Ue.length;He<Re;He++)ca(Ue[He],G,$,Q)}function ks(T,G,$,Q){const{opaque:ne,transmissive:Ue,transparent:He}=T;L.setupLightsView($),it===!0&&Je.setGlobalState(Y.clippingPlanes,$),Q&&b.viewport(U.copy(Q)),ne.length>0&&ua(ne,G,$),Ue.length>0&&ua(Ue,G,$),He.length>0&&ua(He,G,$),b.buffers.depth.setTest(!0),b.buffers.depth.setMask(!0),b.buffers.color.setMask(!0),b.setPolygonOffset(!1)}function Xs(T,G,$,Q){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;if(L.state.transmissionRenderTarget[Q.id]===void 0){const Ke=Tt.has("EXT_color_buffer_half_float")||Tt.has("EXT_color_buffer_float");L.state.transmissionRenderTarget[Q.id]=new ba(1,1,{generateMipmaps:!0,type:Ke?is:Xi,minFilter:Hs,samples:Math.max(4,P.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Rt.workingColorSpace})}const Ue=L.state.transmissionRenderTarget[Q.id],He=Q.viewport||U;Ue.setSize(He.z*Y.transmissionResolutionScale,He.w*Y.transmissionResolutionScale);const Re=Y.getRenderTarget(),ke=Y.getActiveCubeFace(),ze=Y.getActiveMipmapLevel();Y.setRenderTarget(Ue),Y.getClearColor(Ae),Ce=Y.getClearAlpha(),Ce<1&&Y.setClearColor(16777215,.5),Y.clear(),Gt&&rt.render($);const je=Y.toneMapping;Y.toneMapping=Ea;const lt=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),L.setupLightsView(Q),it===!0&&Je.setGlobalState(Y.clippingPlanes,Q),ua(T,$,Q),le.updateMultisampleRenderTarget(Ue),le.updateRenderTargetMipmap(Ue),Tt.has("WEBGL_multisampled_render_to_texture")===!1){let Ke=!1;for(let Mt=0,$t=G.length;Mt<$t;Mt++){const It=G[Mt],{object:Lt,geometry:Ct,material:We,group:Tn}=It;if(We.side===Sa&&Lt.layers.test(Q.layers)){const mt=We.side;We.side=pi,We.needsUpdate=!0,ji(Lt,$,Q,Ct,We,Tn),We.side=mt,We.needsUpdate=!0,Ke=!0}}Ke===!0&&(le.updateMultisampleRenderTarget(Ue),le.updateRenderTargetMipmap(Ue))}Y.setRenderTarget(Re,ke,ze),Y.setClearColor(Ae,Ce),lt!==void 0&&(Q.viewport=lt),Y.toneMapping=je}function ua(T,G,$){const Q=G.isScene===!0?G.overrideMaterial:null;for(let ne=0,Ue=T.length;ne<Ue;ne++){const He=T[ne],{object:Re,geometry:ke,group:ze}=He;let je=He.material;je.allowOverride===!0&&Q!==null&&(je=Q),Re.layers.test($.layers)&&ji(Re,G,$,ke,je,ze)}}function ji(T,G,$,Q,ne,Ue){T.onBeforeRender(Y,G,$,Q,ne,Ue),T.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),ne.onBeforeRender(Y,G,$,Q,T,Ue),ne.transparent===!0&&ne.side===Sa&&ne.forceSinglePass===!1?(ne.side=pi,ne.needsUpdate=!0,Y.renderBufferDirect($,G,Q,ne,T,Ue),ne.side=ns,ne.needsUpdate=!0,Y.renderBufferDirect($,G,Q,ne,T,Ue),ne.side=Sa):Y.renderBufferDirect($,G,Q,ne,T,Ue),T.onAfterRender(Y,G,$,Q,ne,Ue)}function Zi(T,G,$){G.isScene!==!0&&(G=tn);const Q=re.get(T),ne=L.state.lights,Ue=L.state.shadowsArray,He=ne.state.version,Re=De.getParameters(T,ne.state,Ue,G,$,L.state.lightProbeGridArray),ke=De.getProgramCacheKey(Re);let ze=Q.programs;Q.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?G.environment:null,Q.fog=G.fog;const je=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;Q.envMap=we.get(T.envMap||Q.environment,je),Q.envMapRotation=Q.environment!==null&&T.envMap===null?G.environmentRotation:T.envMapRotation,ze===void 0&&(T.addEventListener("dispose",In),ze=new Map,Q.programs=ze);let lt=ze.get(ke);if(lt!==void 0){if(Q.currentProgram===lt&&Q.lightsStateVersion===He)return Di(T,Re),lt}else Re.uniforms=De.getUniforms(T),j!==null&&T.isNodeMaterial&&j.build(T,$,Re),T.onBeforeCompile(Re,Y),lt=De.acquireProgram(Re,ke),ze.set(ke,lt),Q.uniforms=Re.uniforms;const Ke=Q.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ke.clippingPlanes=Je.uniform),Di(T,Re),Q.needsLights=Be(T),Q.lightsStateVersion=He,Q.needsLights&&(Ke.ambientLightColor.value=ne.state.ambient,Ke.lightProbe.value=ne.state.probe,Ke.directionalLights.value=ne.state.directional,Ke.directionalLightShadows.value=ne.state.directionalShadow,Ke.spotLights.value=ne.state.spot,Ke.spotLightShadows.value=ne.state.spotShadow,Ke.rectAreaLights.value=ne.state.rectArea,Ke.ltc_1.value=ne.state.rectAreaLTC1,Ke.ltc_2.value=ne.state.rectAreaLTC2,Ke.pointLights.value=ne.state.point,Ke.pointLightShadows.value=ne.state.pointShadow,Ke.hemisphereLights.value=ne.state.hemi,Ke.directionalShadowMatrix.value=ne.state.directionalShadowMatrix,Ke.spotLightMatrix.value=ne.state.spotLightMatrix,Ke.spotLightMap.value=ne.state.spotLightMap,Ke.pointShadowMatrix.value=ne.state.pointShadowMatrix),Q.lightProbeGrid=L.state.lightProbeGridArray.length>0,Q.currentProgram=lt,Q.uniformsList=null,lt}function wi(T){if(T.uniformsList===null){const G=T.currentProgram.getUniforms();T.uniformsList=Eu.seqWithValue(G.seq,T.uniforms)}return T.uniformsList}function Di(T,G){const $=re.get(T);$.outputColorSpace=G.outputColorSpace,$.batching=G.batching,$.batchingColor=G.batchingColor,$.instancing=G.instancing,$.instancingColor=G.instancingColor,$.instancingMorph=G.instancingMorph,$.skinning=G.skinning,$.morphTargets=G.morphTargets,$.morphNormals=G.morphNormals,$.morphColors=G.morphColors,$.morphTargetsCount=G.morphTargetsCount,$.numClippingPlanes=G.numClippingPlanes,$.numIntersection=G.numClipIntersection,$.vertexAlphas=G.vertexAlphas,$.vertexTangents=G.vertexTangents,$.toneMapping=G.toneMapping}function Li(T,G){if(T.length===0)return null;if(T.length===1)return T[0].texture!==null?T[0]:null;w.setFromMatrixPosition(G.matrixWorld);for(let $=0,Q=T.length;$<Q;$++){const ne=T[$];if(ne.texture!==null&&ne.boundingBox.containsPoint(w))return ne}return null}function Ki(T,G,$,Q,ne){G.isScene!==!0&&(G=tn),le.resetTextureUnits();const Ue=G.fog,He=Q.isMeshStandardMaterial||Q.isMeshLambertMaterial||Q.isMeshPhongMaterial?G.environment:null,Re=te===null?Y.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:Rt.workingColorSpace,ke=Q.isMeshStandardMaterial||Q.isMeshLambertMaterial&&!Q.envMap||Q.isMeshPhongMaterial&&!Q.envMap,ze=we.get(Q.envMap||He,ke),je=Q.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,lt=!!$.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),Ke=!!$.morphAttributes.position,Mt=!!$.morphAttributes.normal,$t=!!$.morphAttributes.color;let It=Ea;Q.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(It=Y.toneMapping);const Lt=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Ct=Lt!==void 0?Lt.length:0,We=re.get(Q),Tn=L.state.lights;if(it===!0&&(ct===!0||T!==Se)){const Ft=T===Se&&Q.id===me;Je.setState(Q,T,Ft)}let mt=!1;Q.version===We.__version?(We.needsLights&&We.lightsStateVersion!==Tn.state.version||We.outputColorSpace!==Re||ne.isBatchedMesh&&We.batching===!1||!ne.isBatchedMesh&&We.batching===!0||ne.isBatchedMesh&&We.batchingColor===!0&&ne.colorTexture===null||ne.isBatchedMesh&&We.batchingColor===!1&&ne.colorTexture!==null||ne.isInstancedMesh&&We.instancing===!1||!ne.isInstancedMesh&&We.instancing===!0||ne.isSkinnedMesh&&We.skinning===!1||!ne.isSkinnedMesh&&We.skinning===!0||ne.isInstancedMesh&&We.instancingColor===!0&&ne.instanceColor===null||ne.isInstancedMesh&&We.instancingColor===!1&&ne.instanceColor!==null||ne.isInstancedMesh&&We.instancingMorph===!0&&ne.morphTexture===null||ne.isInstancedMesh&&We.instancingMorph===!1&&ne.morphTexture!==null||We.envMap!==ze||Q.fog===!0&&We.fog!==Ue||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==Je.numPlanes||We.numIntersection!==Je.numIntersection)||We.vertexAlphas!==je||We.vertexTangents!==lt||We.morphTargets!==Ke||We.morphNormals!==Mt||We.morphColors!==$t||We.toneMapping!==It||We.morphTargetsCount!==Ct||!!We.lightProbeGrid!=L.state.lightProbeGridArray.length>0)&&(mt=!0):(mt=!0,We.__version=Q.version);let mn=We.currentProgram;mt===!0&&(mn=Zi(Q,G,ne),j&&Q.isNodeMaterial&&j.onUpdateProgram(Q,mn,We));let Zn=!1,Hn=!1,_n=!1;const Nt=mn.getUniforms(),an=We.uniforms;if(b.useProgram(mn.program)&&(Zn=!0,Hn=!0,_n=!0),Q.id!==me&&(me=Q.id,Hn=!0),We.needsLights){const Ft=Li(L.state.lightProbeGridArray,ne);We.lightProbeGrid!==Ft&&(We.lightProbeGrid=Ft,Hn=!0)}if(Zn||Se!==T){b.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),Nt.setValue(Z,"projectionMatrix",T.projectionMatrix),Nt.setValue(Z,"viewMatrix",T.matrixWorldInverse);const Gn=Nt.map.cameraPosition;Gn!==void 0&&Gn.setValue(Z,Jt.setFromMatrixPosition(T.matrixWorld)),P.logarithmicDepthBuffer&&Nt.setValue(Z,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&Nt.setValue(Z,"isOrthographic",T.isOrthographicCamera===!0),Se!==T&&(Se=T,Hn=!0,_n=!0)}if(We.needsLights&&(Tn.state.directionalShadowMap.length>0&&Nt.setValue(Z,"directionalShadowMap",Tn.state.directionalShadowMap,le),Tn.state.spotShadowMap.length>0&&Nt.setValue(Z,"spotShadowMap",Tn.state.spotShadowMap,le),Tn.state.pointShadowMap.length>0&&Nt.setValue(Z,"pointShadowMap",Tn.state.pointShadowMap,le)),ne.isSkinnedMesh){Nt.setOptional(Z,ne,"bindMatrix"),Nt.setOptional(Z,ne,"bindMatrixInverse");const Ft=ne.skeleton;Ft&&(Ft.boneTexture===null&&Ft.computeBoneTexture(),Nt.setValue(Z,"boneTexture",Ft.boneTexture,le))}ne.isBatchedMesh&&(Nt.setOptional(Z,ne,"batchingTexture"),Nt.setValue(Z,"batchingTexture",ne._matricesTexture,le),Nt.setOptional(Z,ne,"batchingIdTexture"),Nt.setValue(Z,"batchingIdTexture",ne._indirectTexture,le),Nt.setOptional(Z,ne,"batchingColorTexture"),ne._colorsTexture!==null&&Nt.setValue(Z,"batchingColorTexture",ne._colorsTexture,le));const gi=$.morphAttributes;if((gi.position!==void 0||gi.normal!==void 0||gi.color!==void 0)&&X.update(ne,$,mn),(Hn||We.receiveShadow!==ne.receiveShadow)&&(We.receiveShadow=ne.receiveShadow,Nt.setValue(Z,"receiveShadow",ne.receiveShadow)),(Q.isMeshStandardMaterial||Q.isMeshLambertMaterial||Q.isMeshPhongMaterial)&&Q.envMap===null&&G.environment!==null&&(an.envMapIntensity.value=G.environmentIntensity),an.dfgLUT!==void 0&&(an.dfgLUT.value=tR()),Hn){if(Nt.setValue(Z,"toneMappingExposure",Y.toneMappingExposure),We.needsLights&&_e(an,_n),Ue&&Q.fog===!0&&Ge.refreshFogUniforms(an,Ue),Ge.refreshMaterialUniforms(an,Q,ge,Me,L.state.transmissionRenderTarget[T.id]),We.needsLights&&We.lightProbeGrid){const Ft=We.lightProbeGrid;an.probesSH.value=Ft.texture,an.probesMin.value.copy(Ft.boundingBox.min),an.probesMax.value.copy(Ft.boundingBox.max),an.probesResolution.value.copy(Ft.resolution)}Eu.upload(Z,wi(We),an,le)}if(Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(Eu.upload(Z,wi(We),an,le),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&Nt.setValue(Z,"center",ne.center),Nt.setValue(Z,"modelViewMatrix",ne.modelViewMatrix),Nt.setValue(Z,"normalMatrix",ne.normalMatrix),Nt.setValue(Z,"modelMatrix",ne.matrixWorld),Q.uniformsGroups!==void 0){const Ft=Q.uniformsGroups;for(let Gn=0,fa=Ft.length;Gn<fa;Gn++){const wa=Ft[Gn];Ee.update(wa,mn),Ee.bind(wa,mn)}}return mn}function _e(T,G){T.ambientLightColor.needsUpdate=G,T.lightProbe.needsUpdate=G,T.directionalLights.needsUpdate=G,T.directionalLightShadows.needsUpdate=G,T.pointLights.needsUpdate=G,T.pointLightShadows.needsUpdate=G,T.spotLights.needsUpdate=G,T.spotLightShadows.needsUpdate=G,T.rectAreaLights.needsUpdate=G,T.hemisphereLights.needsUpdate=G}function Be(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return te},this.setRenderTargetTextures=function(T,G,$){const Q=re.get(T);Q.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,Q.__autoAllocateDepthBuffer===!1&&(Q.__useRenderToTexture=!1),re.get(T.texture).__webglTexture=G,re.get(T.depthTexture).__webglTexture=Q.__autoAllocateDepthBuffer?void 0:$,Q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,G){const $=re.get(T);$.__webglFramebuffer=G,$.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(T,G=0,$=0){te=T,z=G,H=$;let Q=null,ne=!1,Ue=!1;if(T){const Re=re.get(T);if(Re.__useDefaultFramebuffer!==void 0){b.bindFramebuffer(Z.FRAMEBUFFER,Re.__webglFramebuffer),U.copy(T.viewport),K.copy(T.scissor),be=T.scissorTest,b.viewport(U),b.scissor(K),b.setScissorTest(be),me=-1;return}else if(Re.__webglFramebuffer===void 0)le.setupRenderTarget(T);else if(Re.__hasExternalTextures)le.rebindTextures(T,re.get(T.texture).__webglTexture,re.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const je=T.depthTexture;if(Re.__boundDepthTexture!==je){if(je!==null&&re.has(je)&&(T.width!==je.image.width||T.height!==je.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");le.setupDepthRenderbuffer(T)}}const ke=T.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(Ue=!0);const ze=re.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(ze[G])?Q=ze[G][$]:Q=ze[G],ne=!0):T.samples>0&&le.useMultisampledRTT(T)===!1?Q=re.get(T).__webglMultisampledFramebuffer:Array.isArray(ze)?Q=ze[$]:Q=ze,U.copy(T.viewport),K.copy(T.scissor),be=T.scissorTest}else U.copy(et).multiplyScalar(ge).floor(),K.copy(Yt).multiplyScalar(ge).floor(),be=ht;if($!==0&&(Q=ue),b.bindFramebuffer(Z.FRAMEBUFFER,Q)&&b.drawBuffers(T,Q),b.viewport(U),b.scissor(K),b.setScissorTest(be),ne){const Re=re.get(T.texture);Z.framebufferTexture2D(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_CUBE_MAP_POSITIVE_X+G,Re.__webglTexture,$)}else if(Ue){const Re=G;for(let ke=0;ke<T.textures.length;ke++){const ze=re.get(T.textures[ke]);Z.framebufferTextureLayer(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0+ke,ze.__webglTexture,$,Re)}}else if(T!==null&&$!==0){const Re=re.get(T.texture);Z.framebufferTexture2D(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_2D,Re.__webglTexture,$)}me=-1},this.readRenderTargetPixels=function(T,G,$,Q,ne,Ue,He,Re=0){if(!(T&&T.isWebGLRenderTarget)){Dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ke=re.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&He!==void 0&&(ke=ke[He]),ke){b.bindFramebuffer(Z.FRAMEBUFFER,ke);try{const ze=T.textures[Re],je=ze.format,lt=ze.type;if(T.textures.length>1&&Z.readBuffer(Z.COLOR_ATTACHMENT0+Re),!P.textureFormatReadable(je)){Dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!P.textureTypeReadable(lt)){Dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=T.width-Q&&$>=0&&$<=T.height-ne&&Z.readPixels(G,$,Q,ne,Oe.convert(je),Oe.convert(lt),Ue)}finally{const ze=te!==null?re.get(te).__webglFramebuffer:null;b.bindFramebuffer(Z.FRAMEBUFFER,ze)}}},this.readRenderTargetPixelsAsync=async function(T,G,$,Q,ne,Ue,He,Re=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ke=re.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&He!==void 0&&(ke=ke[He]),ke)if(G>=0&&G<=T.width-Q&&$>=0&&$<=T.height-ne){b.bindFramebuffer(Z.FRAMEBUFFER,ke);const ze=T.textures[Re],je=ze.format,lt=ze.type;if(T.textures.length>1&&Z.readBuffer(Z.COLOR_ATTACHMENT0+Re),!P.textureFormatReadable(je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!P.textureTypeReadable(lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ke=Z.createBuffer();Z.bindBuffer(Z.PIXEL_PACK_BUFFER,Ke),Z.bufferData(Z.PIXEL_PACK_BUFFER,Ue.byteLength,Z.STREAM_READ),Z.readPixels(G,$,Q,ne,Oe.convert(je),Oe.convert(lt),0);const Mt=te!==null?re.get(te).__webglFramebuffer:null;b.bindFramebuffer(Z.FRAMEBUFFER,Mt);const $t=Z.fenceSync(Z.SYNC_GPU_COMMANDS_COMPLETE,0);return Z.flush(),await rE(Z,$t,4),Z.bindBuffer(Z.PIXEL_PACK_BUFFER,Ke),Z.getBufferSubData(Z.PIXEL_PACK_BUFFER,0,Ue),Z.deleteBuffer(Ke),Z.deleteSync($t),Ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,G=null,$=0){const Q=Math.pow(2,-$),ne=Math.floor(T.image.width*Q),Ue=Math.floor(T.image.height*Q),He=G!==null?G.x:0,Re=G!==null?G.y:0;le.setTexture2D(T,0),Z.copyTexSubImage2D(Z.TEXTURE_2D,$,0,0,He,Re,ne,Ue),b.unbindTexture()},this.copyTextureToTexture=function(T,G,$=null,Q=null,ne=0,Ue=0){let He,Re,ke,ze,je,lt,Ke,Mt,$t;const It=T.isCompressedTexture?T.mipmaps[Ue]:T.image;if($!==null)He=$.max.x-$.min.x,Re=$.max.y-$.min.y,ke=$.isBox3?$.max.z-$.min.z:1,ze=$.min.x,je=$.min.y,lt=$.isBox3?$.min.z:0;else{const an=Math.pow(2,-ne);He=Math.floor(It.width*an),Re=Math.floor(It.height*an),T.isDataArrayTexture?ke=It.depth:T.isData3DTexture?ke=Math.floor(It.depth*an):ke=1,ze=0,je=0,lt=0}Q!==null?(Ke=Q.x,Mt=Q.y,$t=Q.z):(Ke=0,Mt=0,$t=0);const Lt=Oe.convert(G.format),Ct=Oe.convert(G.type);let We;G.isData3DTexture?(le.setTexture3D(G,0),We=Z.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(le.setTexture2DArray(G,0),We=Z.TEXTURE_2D_ARRAY):(le.setTexture2D(G,0),We=Z.TEXTURE_2D),b.activeTexture(Z.TEXTURE0),b.pixelStorei(Z.UNPACK_FLIP_Y_WEBGL,G.flipY),b.pixelStorei(Z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),b.pixelStorei(Z.UNPACK_ALIGNMENT,G.unpackAlignment);const Tn=b.getParameter(Z.UNPACK_ROW_LENGTH),mt=b.getParameter(Z.UNPACK_IMAGE_HEIGHT),mn=b.getParameter(Z.UNPACK_SKIP_PIXELS),Zn=b.getParameter(Z.UNPACK_SKIP_ROWS),Hn=b.getParameter(Z.UNPACK_SKIP_IMAGES);b.pixelStorei(Z.UNPACK_ROW_LENGTH,It.width),b.pixelStorei(Z.UNPACK_IMAGE_HEIGHT,It.height),b.pixelStorei(Z.UNPACK_SKIP_PIXELS,ze),b.pixelStorei(Z.UNPACK_SKIP_ROWS,je),b.pixelStorei(Z.UNPACK_SKIP_IMAGES,lt);const _n=T.isDataArrayTexture||T.isData3DTexture,Nt=G.isDataArrayTexture||G.isData3DTexture;if(T.isDepthTexture){const an=re.get(T),gi=re.get(G),Ft=re.get(an.__renderTarget),Gn=re.get(gi.__renderTarget);b.bindFramebuffer(Z.READ_FRAMEBUFFER,Ft.__webglFramebuffer),b.bindFramebuffer(Z.DRAW_FRAMEBUFFER,Gn.__webglFramebuffer);for(let fa=0;fa<ke;fa++)_n&&(Z.framebufferTextureLayer(Z.READ_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,re.get(T).__webglTexture,ne,lt+fa),Z.framebufferTextureLayer(Z.DRAW_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,re.get(G).__webglTexture,Ue,$t+fa)),Z.blitFramebuffer(ze,je,He,Re,Ke,Mt,He,Re,Z.DEPTH_BUFFER_BIT,Z.NEAREST);b.bindFramebuffer(Z.READ_FRAMEBUFFER,null),b.bindFramebuffer(Z.DRAW_FRAMEBUFFER,null)}else if(ne!==0||T.isRenderTargetTexture||re.has(T)){const an=re.get(T),gi=re.get(G);b.bindFramebuffer(Z.READ_FRAMEBUFFER,fe),b.bindFramebuffer(Z.DRAW_FRAMEBUFFER,q);for(let Ft=0;Ft<ke;Ft++)_n?Z.framebufferTextureLayer(Z.READ_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,an.__webglTexture,ne,lt+Ft):Z.framebufferTexture2D(Z.READ_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_2D,an.__webglTexture,ne),Nt?Z.framebufferTextureLayer(Z.DRAW_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,gi.__webglTexture,Ue,$t+Ft):Z.framebufferTexture2D(Z.DRAW_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_2D,gi.__webglTexture,Ue),ne!==0?Z.blitFramebuffer(ze,je,He,Re,Ke,Mt,He,Re,Z.COLOR_BUFFER_BIT,Z.NEAREST):Nt?Z.copyTexSubImage3D(We,Ue,Ke,Mt,$t+Ft,ze,je,He,Re):Z.copyTexSubImage2D(We,Ue,Ke,Mt,ze,je,He,Re);b.bindFramebuffer(Z.READ_FRAMEBUFFER,null),b.bindFramebuffer(Z.DRAW_FRAMEBUFFER,null)}else Nt?T.isDataTexture||T.isData3DTexture?Z.texSubImage3D(We,Ue,Ke,Mt,$t,He,Re,ke,Lt,Ct,It.data):G.isCompressedArrayTexture?Z.compressedTexSubImage3D(We,Ue,Ke,Mt,$t,He,Re,ke,Lt,It.data):Z.texSubImage3D(We,Ue,Ke,Mt,$t,He,Re,ke,Lt,Ct,It):T.isDataTexture?Z.texSubImage2D(Z.TEXTURE_2D,Ue,Ke,Mt,He,Re,Lt,Ct,It.data):T.isCompressedTexture?Z.compressedTexSubImage2D(Z.TEXTURE_2D,Ue,Ke,Mt,It.width,It.height,Lt,It.data):Z.texSubImage2D(Z.TEXTURE_2D,Ue,Ke,Mt,He,Re,Lt,Ct,It);b.pixelStorei(Z.UNPACK_ROW_LENGTH,Tn),b.pixelStorei(Z.UNPACK_IMAGE_HEIGHT,mt),b.pixelStorei(Z.UNPACK_SKIP_PIXELS,mn),b.pixelStorei(Z.UNPACK_SKIP_ROWS,Zn),b.pixelStorei(Z.UNPACK_SKIP_IMAGES,Hn),Ue===0&&G.generateMipmaps&&Z.generateMipmap(We),b.unbindTexture()},this.initRenderTarget=function(T){re.get(T).__webglFramebuffer===void 0&&le.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?le.setTextureCube(T,0):T.isData3DTexture?le.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?le.setTexture2DArray(T,0):le.setTexture2D(T,0),b.unbindTexture()},this.resetState=function(){z=0,H=0,te=null,b.reset(),Pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ya}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Rt._getDrawingBufferColorSpace(e),i.unpackColorSpace=Rt._getUnpackColorSpace()}}const iR="/assets/Reckk-RegularItalic-DLM8ilig.ttf",aR="/assets/Reckk-MediumItalic-D_uyfX4p.otf",sR="/assets/CXLMediumItalic-DYSp-DoC.otf",rR=4,oR=5,$a={fleet:"MAEX",name:"SharpeShark",version:"v1",role:"Executor",didShort:"0xf8a2…6035"};function Yx(a){return["discover","copy","supervise","isolate"][a]??"discover"}function lR(a){return Yx(a)}function cR(a,e,i){const r=e.split(/\s+/),o=[];let c="";for(const u of r){const d=c?`${c} ${u}`:u;a.measureText(d).width<=i?c=d:(c&&o.push(c),c=u)}return c&&o.push(c),o}function uR(a,e){const r=e<520?300:400,o=Math.round(r*a),c=Math.round(o*oR/rR);return{W:o,H:c}}function qx(a,e,i,r,o,c){const u=Math.min(c,r/2,o/2);a.beginPath(),a.moveTo(e+u,i),a.arcTo(e+r,i,e+r,i+o,u),a.arcTo(e+r,i+o,e,i+o,u),a.arcTo(e,i+o,e,i,u),a.arcTo(e,i,e+r,i,u),a.closePath()}function fn(a,e,i,r,o,c,u){qx(a,e,i,r,o,c),a.fillStyle=u,a.fill()}function Mn(a,e,i,r,o,c,u,d){qx(a,e,i,r,o,c),a.strokeStyle=u,a.lineWidth=d,a.stroke()}function zu(a,e,i,r,o,c,u=1){const d=Math.min(1,Math.max(0,u));fn(a,e,i,r,o,c,`rgba(12, 14, 18, ${d})`),Mn(a,e,i,r,o,c,"rgba(255,255,255,0.12)",Math.max(1,c*.12))}function Hu(a,e,i,r,o,c,u){const d=11*u;a.fillStyle="#c8f5a8",a.font=`700 ${d}px "DM Mono", ui-monospace, monospace`,a.textAlign="left",a.fillText(c,e+o,i+o+d);const m=22*u,h=e+r-o-m,g=i+o-2*u;return Mn(a,h,g,m,m,4*u,"rgba(255,255,255,0.14)",1),a.strokeStyle="rgba(255,255,255,0.55)",a.lineWidth=Math.max(1,1.25*u),a.beginPath(),a.moveTo(h+6*u,g+6*u),a.lineTo(h+m-6*u,g+m-6*u),a.moveTo(h+m-6*u,g+6*u),a.lineTo(h+6*u,g+m-6*u),a.stroke(),i+o+d+10*u}function jx(a,e,i,r,o,c,u,d){const m=28*d,h=(r-o*2)/2,g=10*d;a.font=`700 ${g}px "DM Mono", ui-monospace, monospace`;for(let v=0;v<2;v++){const _=e+o+v*h,S=v===u;a.fillStyle=S?"rgba(255,255,255,0.92)":"rgba(255,255,255,0.38)",a.textAlign="center",a.fillText(c[v],_+h/2,i+14*d),S&&(a.fillStyle="#c8f5a8",a.fillRect(_+4*d,i+m-2*d,h-8*d,2*d))}return a.textAlign="left",a.strokeStyle="rgba(255,255,255,0.08)",a.lineWidth=1,a.beginPath(),a.moveTo(e+o,i+m),a.lineTo(e+r-o,i+m),a.stroke(),i+m+10*d}function fR(a,e,i,r,o,c,u,d,m){const h=10*m,g=22*m;a.fillStyle="rgba(255,255,255,0.92)",a.font=`700 ${h}px "DM Mono", ui-monospace, monospace`,a.textAlign="left",a.fillText(c,e+o,i+14*m);const v=`${String(u).padStart(2,"0")} / ${String(d).padStart(2,"0")}`;a.fillStyle="rgba(255,255,255,0.38)",a.font=`700 ${8*m}px "DM Mono", ui-monospace, monospace`,a.textAlign="right",a.fillText(v,e+r-o,i+14*m),a.textAlign="left",a.strokeStyle="rgba(255,255,255,0.08)",a.lineWidth=1,a.beginPath(),a.moveTo(e+o,i+g),a.lineTo(e+r-o,i+g),a.stroke(),a.fillStyle="#c8f5a8";const _=Math.min(72*m,r*.28);return a.fillRect(e+o,i+g-2*m,_,2*m),i+g+10*m}function dR(a,e,i,r,o,c,u){const d=9*u;a.fillStyle="rgba(255,255,255,0.38)",a.font=`700 ${d}px "DM Mono", ui-monospace, monospace`,a.textAlign="left",a.fillText(o,e,i+d);const m=i+d+6*u,h=34*u;fn(a,e,m,r,h,6*u,"rgba(255,255,255,0.04)"),Mn(a,e,m,r,h,6*u,"rgba(255,255,255,0.12)",1),a.fillStyle=c.startsWith("Select")||c==="0x..."?"rgba(255,255,255,0.35)":"rgba(255,255,255,0.88)",a.font=`500 ${11*u}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText(c,e+10*u,m+h*.62),a.strokeStyle="rgba(255,255,255,0.4)",a.lineWidth=Math.max(1,1.2*u);const g=e+r-14*u,v=m+h/2;return a.beginPath(),a.moveTo(g-4*u,v-2*u),a.lineTo(g,v+3*u),a.lineTo(g+4*u,v-2*u),a.stroke(),d+6*u+h}function hR(a,e,i,r,o){const c=9*o;a.fillStyle="rgba(255,255,255,0.38)",a.font=`700 ${c}px "DM Mono", ui-monospace, monospace`,a.textAlign="left",a.fillText("AMOUNT",e,i+c),a.textAlign="right",a.fillStyle="rgba(255,255,255,0.45)",a.fillText("AVAILABLE 5,000.00",e+r,i+c),a.textAlign="left";const u=i+c+6*o,d=44*o;fn(a,e,u,r,d,8*o,"#050508"),Mn(a,e,u,r,d,8*o,"rgba(255,255,255,0.1)",1),a.fillStyle="rgba(255,255,255,0.92)",a.font=`700 ${22*o}px "DM Mono", ui-monospace, monospace`,a.fillText("0.00",e+12*o,u+d*.68);const m=u+d+10*o;return a.strokeStyle="rgba(255,255,255,0.12)",a.lineWidth=Math.max(2,2*o),a.beginPath(),a.moveTo(e,m),a.lineTo(e+r,m),a.stroke(),fn(a,e,m-5*o,14*o,10*o,5*o,"rgba(255,255,255,0.85)"),a.fillStyle="rgba(255,255,255,0.35)",a.font=`500 ${8*o}px "DM Mono", ui-monospace, monospace`,a.fillText("0.01",e,m+14*o),a.textAlign="right",a.fillText("5,000.00",e+r,m+14*o),a.textAlign="left",c+6*o+d+10*o+16*o}function pR(a,e,i,r,o,c){a.strokeStyle="rgba(255,255,255,0.08)",a.lineWidth=1,a.beginPath(),a.moveTo(e,i),a.lineTo(e+r,i),a.stroke();const u=i+10*o,d=36*o,m=72*o;Mn(a,e,u,m,d,6*o,"rgba(255,255,255,0.14)",1),a.fillStyle="rgba(255,255,255,0.55)",a.font=`700 ${9*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText("CANCEL",e+m/2,u+d*.62);const h=e+m+8*o,g=r-m-8*o;return fn(a,h,u,g,d,6*o,"rgba(255,255,255,0.06)"),Mn(a,h,u,g,d,6*o,"rgba(255,255,255,0.1)",1),a.fillStyle="#c8f5a8",a.fillRect(h,u+4*o,3*o,d-8*o),a.fillStyle="rgba(255,255,255,0.55)",a.font=`700 ${8.5*o}px "DM Mono", ui-monospace, monospace`,a.fillText(c,h+g/2+2*o,u+d*.62),a.textAlign="left",10*o+d}function Hp(a,e,i,r,o){const c=44*o;fn(a,e,i,r,c,8*o,"rgba(200,245,168,0.08)"),Mn(a,e,i,r,c,8*o,"rgba(200,245,168,0.22)",1);const u=28*o;return fn(a,e+8*o,i+(c-u)/2,u,u,4*o,"rgba(200,245,168,0.14)"),a.fillStyle="#c8f5a8",a.font=`700 ${10*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText("SS",e+8*o+u/2,i+c*.58),a.textAlign="left",a.fillStyle="rgba(255,255,255,0.92)",a.font=`700 ${11*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText($a.name,e+8*o+u+8*o,i+16*o),a.fillStyle="rgba(255,255,255,0.42)",a.font=`500 ${9*o}px "DM Mono", ui-monospace, monospace`,a.fillText(`${$a.role} · ${$a.didShort}`,e+8*o+u+8*o,i+32*o),c}function mR(a,e,i,r,o){const c=Math.min(r*190/316,r*.58),u=12*o,d=8*o,m=a.createLinearGradient(e,i+c,e+r,i);m.addColorStop(0,"#050508"),m.addColorStop(1,"rgba(200,245,168,0.14)"),fn(a,e,i,r,c,d,m),Mn(a,e,i,r,c,d,"rgba(255,255,255,0.14)",Math.max(1,1.25*o)),Mn(a,e+2.5*o,i+2.5*o,r-5*o,c-5*o,d-1.5*o,"rgba(200,245,168,0.35)",Math.max(1,o)),a.fillStyle="rgba(255,255,255,0.92)",a.font=`700 ${11*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText($a.fleet,e+u,i+u+10*o),a.fillStyle="#c8f5a8",a.beginPath(),a.arc(e+r-u-7*o,i+u+5*o,6*o,0,Math.PI*2),a.fill(),a.fillStyle="#0a0a0c",a.font=`700 ${8*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText("✓",e+r-u-7*o,i+u+8*o),a.textAlign="left";const h=i+c-u-2*o;a.fillStyle="rgba(255,255,255,0.92)",a.font=`700 ${10*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText($a.name.toUpperCase(),e+u,h-24*o),a.fillStyle="rgba(255,255,255,0.45)",a.font=`500 ${9*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText(`${$a.role} · ${$a.version}`,e+u,h-10*o),a.fillStyle="#c8f5a8",a.font=`700 ${10*o}px "DM Mono", ui-monospace, monospace`,a.fillText($a.didShort,e+u,h);const g=28*o;return fn(a,e+r-u-g,i+c-u-g,g,g,4*o,"rgba(200,245,168,0.14)"),Mn(a,e+r-u-g,i+c-u-g,g,g,4*o,"rgba(200,245,168,0.28)",1),a.fillStyle="#c8f5a8",a.font=`700 ${11*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText("SS",e+r-u-g/2,i+c-u-g*.35),a.textAlign="left",c}function gR(a,e,i,r,o){const c=Math.min(r*190/316,r*.58),u=10*o,d=8*o,m=a.createLinearGradient(e,i,e+r,i+c);m.addColorStop(0,"#0a0c10"),m.addColorStop(.55,"#12161c"),m.addColorStop(1,"rgba(200,245,168,0.18)"),fn(a,e,i,r,c,d,m),Mn(a,e,i,r,c,d,"rgba(255,255,255,0.14)",Math.max(1,1.25*o)),a.fillStyle="rgba(255,255,255,0.92)",a.font=`700 ${10*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText("Morpheum.",e+u,i+u+10*o),a.strokeStyle="rgba(255,255,255,0.45)",a.lineWidth=Math.max(1,o);for(let h=0;h<3;h++){const g=5*o+h*3.5*o,v=4*o+h*2.5*o;a.beginPath(),a.ellipse(e+r-u-4*o,i+u+8*o,g,v,-.4,-.2,1.2),a.stroke()}return a.fillStyle="rgba(255,255,255,0.88)",a.font=`700 ${9*o}px "DM Mono", ui-monospace, monospace`,a.fillText("5678  ····  ····  7890",e+u,i+c*.52),a.fillStyle="rgba(255,255,255,0.92)",a.font=`700 ${8*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText($a.name.toUpperCase(),e+u,i+c-u-2*o),a.textAlign="right",a.fillStyle="rgba(255,255,255,0.55)",a.font=`700 ${8*o}px "DM Mono", ui-monospace, monospace`,a.fillText("12/28",e+r-u,i+c-u-2*o),a.textAlign="left",c}function _R(a,e,i,r,o,c=25){const u=9*o;a.fillStyle="rgba(255,255,255,0.38)",a.font=`700 ${u}px "DM Mono", ui-monospace, monospace`,a.textAlign="left",a.fillText("MIRROR SIZE",e,i+u),a.textAlign="right",a.fillStyle="#c8f5a8",a.fillText(`${c}%`,e+r,i+u),a.textAlign="left";const d=i+u+12*o,m=Math.max(4,5*o);fn(a,e,d,r,m,m/2,"rgba(255,255,255,0.1)");const h=Math.max(m,r*c/100);fn(a,e,d,h,m,m/2,"rgba(200,245,168,0.75)");const g=7*o;return a.fillStyle="#f4f6f0",a.beginPath(),a.arc(e+h,d+m/2,g,0,Math.PI*2),a.fill(),a.strokeStyle="rgba(200,245,168,0.55)",a.lineWidth=Math.max(1,o),a.stroke(),a.fillStyle="rgba(255,255,255,0.35)",a.font=`500 ${7.5*o}px "DM Mono", ui-monospace, monospace`,a.fillText("5%",e,d+m+14*o),a.textAlign="right",a.fillText("100%",e+r,d+m+14*o),a.textAlign="left",u+12*o+m+16*o}function vR(a,e,i,r,o){const c=9*o;a.fillStyle="rgba(255,255,255,0.38)",a.font=`700 ${c}px "DM Mono", ui-monospace, monospace`,a.fillText("AGENTIC PROTECTION",e,i+c);const u=5*o,d=(r-u*2)/3,m=52*o,h=i+c+8*o;return[{label:"Manual",tone:"rgba(255,255,255,0.12)",active:!1},{label:"Guarded",tone:"rgba(234,179,8,0.55)",active:!0},{label:"High",tone:"rgba(255,71,87,0.35)",active:!1}].forEach((v,_)=>{const S=e+_*(d+u);fn(a,S,h,d,m,6*o,"rgba(255,255,255,0.04)"),Mn(a,S,h,d,m,6*o,v.active?v.tone:"rgba(255,255,255,0.1)",v.active?Math.max(1.5,1.5*o):1),v.active&&(a.fillStyle="rgba(234,179,8,0.12)",a.fillRect(S+1,h+1,3*o,m-2)),a.fillStyle=v.active?"rgba(255,255,255,0.92)":"rgba(255,255,255,0.55)",a.font=`700 ${9*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.textAlign="center",a.fillText(v.label,S+d/2,h+18*o),a.fillStyle="rgba(255,255,255,0.38)",a.font=`400 ${7*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`;const E=v.label==="Guarded"?"safe default":v.label==="Manual"?"signals":"silent";a.fillText(E,S+d/2,h+34*o)}),a.textAlign="left",c+8*o+m}function xR(a,e,i,r,o,c="SLIDE TO START COPY"){const u=40*o;fn(a,e,i,r,u,8*o,"rgba(255,255,255,0.05)"),Mn(a,e,i,r,u,8*o,"rgba(255,255,255,0.12)",1);const d=.22,m=4*o,h=u-m*2,g=r-m*2-h;return fn(a,e+m,i+m,h+g*d,h,h/2,"rgba(200,245,168,0.18)"),fn(a,e+m,i+m,h,h,h/2,"rgba(200,245,168,0.85)"),a.fillStyle="#0a0a0c",a.font=`700 ${12*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText("›",e+m+h/2,i+u*.62),a.fillStyle="rgba(255,255,255,0.5)",a.font=`700 ${8*o}px "DM Mono", ui-monospace, monospace`,a.fillText(c,e+r/2+h*.15,i+u*.62),a.textAlign="left",u}const wl=2,bo={sharpe:"2.41",roi:"+38.2%",riskScore:"72",reputation:"84",receipts:[{action:"Close BTC long",pnl:"+103.09"},{action:"Open ETH long",pnl:null},{action:"Close SOL short",pnl:"+41.20"}]};function Fv(a,e,i,r,o,c){const u=6*c,d=o.length,m=(r-u*(d-1))/d,h=36*c;return o.forEach(([g,v],_)=>{const S=e+_*(m+u);fn(a,S,i,m,h,6*c,"rgba(255,255,255,0.04)"),Mn(a,S,i,m,h,6*c,"rgba(255,255,255,0.1)",1),a.fillStyle="rgba(255,255,255,0.4)",a.font=`700 ${7*c}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText(g,S+m/2,i+12*c),a.fillStyle="#c8f5a8",a.font=`700 ${11*c}px "DM Mono", ui-monospace, monospace`,a.fillText(v,S+m/2,i+26*c)}),a.textAlign="left",h}function SR(a,e,i,r,o){const c=[{label:"Verified",brand:!0},{label:"Receipt"},{label:"Risk",value:bo.riskScore},{label:"Rep",value:bo.reputation}],u=4*o,d=22*o,m=5*o;let h=e;a.font=`700 ${6.5*o}px "DM Mono", ui-monospace, monospace`;for(const g of c){const v=a.measureText(g.label.toUpperCase()).width,_=g.value?a.measureText(g.value).width+3*o:0,S=m*2+6*o+v+_;if(h+S>e+r)break;const E=g.brand?"rgba(200,245,168,0.12)":"rgba(255,255,255,0.04)",R=g.brand?"rgba(200,245,168,0.35)":"rgba(255,255,255,0.12)";fn(a,h,i,S,d,4*o,E),Mn(a,h,i,S,d,4*o,R,1);const y=2*o;a.beginPath(),a.arc(h+m+y,i+d/2,y,0,Math.PI*2),a.fillStyle=g.brand?"#c8f5a8":"rgba(255,255,255,0.35)",a.fill();let x=h+m+y*2+4*o;a.fillStyle=g.brand?"#c8f5a8":"rgba(255,255,255,0.55)",a.textAlign="left",a.fillText(g.label.toUpperCase(),x,i+d*.68),x+=v+3*o,g.value&&(a.fillStyle="rgba(255,255,255,0.92)",a.fillText(g.value,x,i+d*.68)),h+=S+u}return a.textAlign="left",d}function MR(a,e,i,r,o){const c=bo.receipts,u=22*o,d=14*o+c.length*u;return fn(a,e,i,r,d,6*o,"rgba(255,255,255,0.03)"),Mn(a,e,i,r,d,6*o,"rgba(255,255,255,0.08)",1),a.fillStyle="rgba(255,255,255,0.4)",a.font=`700 ${6.5*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="left",a.fillText("RECEIPTS",e+8*o,i+10*o),c.forEach((m,h)=>{const g=i+14*o+h*u;a.fillStyle="rgba(255,255,255,0.72)",a.font=`500 ${8*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="left",a.fillText(m.action,e+8*o,g+u*.62),a.textAlign="right",m.pnl?(a.fillStyle="#c8f5a8",a.font=`700 ${8*o}px "DM Mono", ui-monospace, monospace`,a.fillText(m.pnl,e+r-8*o,g+u*.62)):(a.fillStyle="rgba(255,255,255,0.35)",a.fillText("—",e+r-8*o,g+u*.62))}),a.textAlign="left",d}function yR(a,e,i,r,o){const c=Math.min(r*150/316,r*.48),u=12*o,d=8*o,m=a.createLinearGradient(e,i+c,e+r,i);m.addColorStop(0,"#050508"),m.addColorStop(1,"rgba(200,245,168,0.14)"),fn(a,e,i,r,c,d,m),Mn(a,e,i,r,c,d,"rgba(255,255,255,0.14)",Math.max(1,1.25*o)),Mn(a,e+2.5*o,i+2.5*o,r-5*o,c-5*o,d-1.5*o,"rgba(200,245,168,0.35)",Math.max(1,o)),a.fillStyle="rgba(255,255,255,0.92)",a.font=`700 ${11*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText("MAEX",e+u,i+u+10*o);const h=40*o,g=16*o,v=e+r-u-h,_=i+u-1*o;return fn(a,v,_,h,g,8*o,"rgba(200,245,168,0.14)"),Mn(a,v,_,h,g,8*o,"rgba(200,245,168,0.28)",1),a.fillStyle="#c8f5a8",a.font=`700 ${8*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText("LIVE",v+h/2,_+11*o),a.textAlign="left",a.fillStyle="rgba(255,255,255,0.92)",a.font=`700 ${14*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText("MAEX Core",e+u,i+u+36*o),a.fillStyle="rgba(255,255,255,0.45)",a.font=`500 ${9*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText("Curated agent basket · 4 agents",e+u,i+u+52*o),a.fillStyle="#c8f5a8",a.font=`700 ${18*o}px "DM Mono", ui-monospace, monospace`,a.fillText("+12.8%",e+u,i+c-u-4*o),a.fillStyle="rgba(255,255,255,0.4)",a.font=`700 ${8*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="right",a.fillText("30D RETURN",e+r-u,i+c-u-8*o),a.textAlign="left",c}function ER(a,e,i,r,o){const c=[["SharpeShark","42%","+38%"],["SortinoSloth","33%","+21%"],["FundingFox","25%","−4%"]],u=26*o,d=c.length*u;return fn(a,e,i,r,d,6*o,"rgba(255,255,255,0.03)"),Mn(a,e,i,r,d,6*o,"rgba(255,255,255,0.08)",1),c.forEach(([m,h,g],v)=>{const _=i+v*u;v>0&&(a.strokeStyle="rgba(255,255,255,0.06)",a.lineWidth=1,a.beginPath(),a.moveTo(e+8*o,_),a.lineTo(e+r-8*o,_),a.stroke()),a.fillStyle="rgba(255,255,255,0.85)",a.font=`600 ${9*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.textAlign="left",a.fillText(m,e+10*o,_+u*.62),a.fillStyle="rgba(255,255,255,0.4)",a.font=`700 ${8*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText(h,e+r*.58,_+u*.62);const S=!g.startsWith("−")&&!g.startsWith("-");a.fillStyle=S?"#c8f5a8":"rgba(255,120,120,0.85)",a.textAlign="right",a.fillText(g,e+r-10*o,_+u*.62)}),a.textAlign="left",d}function bR(a,e,i,r,o,c=0,u=1){const d=r/300,m=12*d,h=10*d,g=(c%wl+wl)%wl,v=[{header:"AGENT PROOF",segment:"AGENTS"},{header:"INDEX PROOF",segment:"INDICES"}][g];zu(a,e,i,r,o,h,u);let _=Hu(a,e,i,r,m,v.header,d);_=fR(a,e,_,r,m,v.segment,g+1,wl,d);const S=i+o-m;if(g===0){_+=Hp(a,e+m,_,r-m*2,d)+8*d,_+22*d<=S&&(_+=SR(a,e+m,_,r-m*2,d)+8*d);const R=[["SHARPE",bo.sharpe],["ROI",bo.roi],["RISK",bo.riskScore]];_+36*d<=S&&(_+=Fv(a,e+m,_,r-m*2,R,d)+8*d),_+70*d<=S&&MR(a,e+m,_,r-m*2,d);return}_+=yR(a,e+m,_,r-m*2,d)+8*d,_+78*d<=S&&(_+=ER(a,e+m,_,r-m*2,d)+8*d);const E=[["RETURN","+12.8%"],["RISK","58"],["AGENTS","4"]];_+36*d<=S&&Fv(a,e+m,_,r-m*2,E,d)}function TR(a,e,i,r,o,c=0,u=1){const d=r/300,m=12*d,h=10*d;zu(a,e,i,r,o,h,u);let g=Hu(a,e,i,r,m,"COPY TRADE",d);g=jx(a,e,g,r,m,["MIRROR","BUCKET"],0,d);const v=40*d,_=i+o-m-v,S=_-10*d;if(c%2===0){const R=6*d,y=r-m*2;let x=(y-R)/2,F=Math.min(x*190/316,x*.58);const I=Math.max(64*d,S-g-28*d);F>I&&(x=x*(I/F),F=I);const w=d*(x/((y-R)/2)),O=e+m+(y-(x*2+R))/2;gR(a,O,g,x,w),mR(a,O+x+R,g,x,w),g+=F+10*d;const L=[["SPREAD","0.02%"],["FUNDING","8h"],["SIZE","25%"]],B=5*d,A=(r-m*2-B*2)/3,N=32*d;g+N<=S&&(L.forEach(([Y,k],j)=>{const ue=e+m+j*(A+B);fn(a,ue,g,A,N,6*d,"rgba(255,255,255,0.04)"),Mn(a,ue,g,A,N,6*d,"rgba(255,255,255,0.1)",1),a.fillStyle="rgba(255,255,255,0.4)",a.font=`700 ${6.5*d}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText(Y,ue+A/2,g+11*d),a.fillStyle="#c8f5a8",a.font=`700 ${10*d}px "DM Mono", ui-monospace, monospace`,a.fillText(k,ue+A/2,g+24*d)}),a.textAlign="left")}else g+=Hp(a,e+m,g,r-m*2,d)+10*d,g+36*d<S&&(g+=_R(a,e+m,g,r-m*2,d,25)+10*d),g+50*d<S&&vR(a,e+m,g,r-m*2,d);xR(a,e+m,_,r-m*2,d)}const AR=2,RR=[{agent:"SharpeShark",timeLabel:"07-08, 15:42",status:"want-to",statusLabel:"Want to",action:"Open ETH long · 1.2 ETH",showActions:!0},{agent:"NightOwl",timeLabel:"07-08, 15:31",status:"rejected",statusLabel:"Rejected",action:"Open BTC short · 0.04 BTC"},{agent:"SharpeShark",timeLabel:"07-08, 15:25",status:"short",statusLabel:"Close Long",action:"BTCUSDT · 0.04 BTC",pnl:{text:"+103.09",tone:"long"}},{agent:"FluxRunner",timeLabel:"07-08, 14:10",status:"long",statusLabel:"Open Long",action:"ETHUSDT · 0.8 ETH"},{agent:"NightOwl",timeLabel:"07-07, 09:42",status:"short",statusLabel:"Open Short",action:"SOLUSDT · 12 SOL"}];function CR(a){switch(a){case"want-to":return{fg:"rgba(200,245,168,0.95)",bg:"rgba(184,245,168,0.12)"};case"rejected":return{fg:"#ff4757",bg:"rgba(255,71,87,0.12)"};case"long":return{fg:"#00ff88",bg:"rgba(0,255,136,0.12)"};case"short":return{fg:"#ff4757",bg:"rgba(255,71,87,0.12)"}}}function wR(a,e,i,r,o,c=1){const u=r/300,d=12*u,m=10*u;zu(a,e,i,r,o,m,c);let h=Hu(a,e,i,r,d,"ACTIVITY LOG",u);const g=i+o-d,v=58*u,_=10*u,S=6*u,E=e+d+v+S+_+S,R=e+r-d-E,y=e+d+v+S+_/2,x=RR,F=4*u;x.forEach((I,w)=>{if(h>=g-8*u)return;const O=w===0,L=w===x.length-1,B=CR(I.status),A=8*u,N=6*u,Y=7*u,k=8*u,j=I.showActions?22*u:0,ue=I.showActions?5*u:0,q=Math.max(A+2*u+N,Y+4*u+k)+ue+j+F;if(h+Math.min(q,28*u)>g)return;a.textAlign="right",a.fillStyle="rgba(255,255,255,0.88)",a.font=`500 ${A}px "DM Mono", ui-monospace, monospace`,a.fillText(I.agent,e+d+v,h+A),a.fillStyle="rgba(255,255,255,0.38)",a.font=`500 ${N}px "DM Mono", ui-monospace, monospace`,a.fillText(I.timeLabel,e+d+v,h+A+2*u+N),a.textAlign="left",L||(a.strokeStyle="rgba(255,255,255,0.14)",a.lineWidth=Math.max(1,u),a.beginPath(),a.moveTo(y,h+6*u),a.lineTo(y,h+q),a.stroke());const z=2.4*u;a.beginPath(),a.arc(y,h+5*u,z,0,Math.PI*2),a.fillStyle=O?"#c8f5a8":"rgba(255,255,255,0.32)",a.fill(),O&&(a.beginPath(),a.arc(y,h+5*u,z+2.2*u,0,Math.PI*2),a.fillStyle="rgba(200,245,168,0.16)",a.fill());const H=4*u,te=2*u;a.font=`700 ${Y}px "DM Mono", ui-monospace, monospace`;const me=I.statusLabel.toUpperCase(),Se=a.measureText(me).width+H*2,U=Y+te*2;fn(a,E,h,Se,U,3*u,B.bg),a.fillStyle=B.fg,a.fillText(me,E+H,h+Y+te*.35),a.fillStyle="rgba(255,255,255,0.55)",a.font=`400 ${k}px "DM Mono", ui-monospace, monospace`;const K=h+U+3*u+k;let be=I.action;if(I.pnl){const Ae=`${I.action} · `;a.fillText(Ae,E,K);const Ce=a.measureText(Ae).width;a.fillStyle=I.pnl.tone==="long"?"#00ff88":"#ff4757",a.font=`700 ${k}px "DM Mono", ui-monospace, monospace`,a.fillText(I.pnl.text,E+Ce,K)}else{for(;be.length>8&&a.measureText(be).width>R;)be=`${be.slice(0,-2)}…`;a.fillText(be,E,K)}if(I.showActions&&h+U+3*u+k+ue+j<=g){const Ae=h+U+3*u+k+ue,Ce=(R-5*u)/2;Mn(a,E,Ae,Ce,j,3*u,"rgba(255,255,255,0.18)",1),a.fillStyle="rgba(255,255,255,0.72)",a.font=`700 ${7*u}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText("REJECT",E+Ce/2,Ae+j*.68),fn(a,E+Ce+5*u,Ae,Ce,j,3*u,"rgba(184,245,168,0.88)"),a.fillStyle="rgba(8,14,10,0.92)",a.fillText("APPROVE",E+Ce+5*u+Ce/2,Ae+j*.68),a.textAlign="left"}h+=q})}function DR(a,e,i,r,o,c=1){const u=r/300,d=12*u,m=10*u;zu(a,e,i,r,o,m,c);let h=Hu(a,e,i,r,d,"FUND BUCKET",u);h=jx(a,e,h,r,d,["FUND BUCKET","CREATE BUCKET"],0,u),h+=Hp(a,e+d,h,r-d*2,u)+8*u,h+=dR(a,e+d,h,r-d*2,"FROM","Select source bucket",u)+8*u;const g=10*u+36*u;i+o-d-g-h-8*u>70*u&&(h+=hR(a,e+d,h,r-d*2,u)+6*u),pR(a,e+d,i+o-d-g,r-d*2,u,"COMPLETE REQUIRED FIELDS")}function Zx(a,e,i,r,o,c,u=0,d=1){switch(e){case"discover":bR(a,i,r,o,c,u,d);break;case"copy":TR(a,i,r,o,c,u,d);break;case"supervise":wR(a,i,r,o,c,d);break;case"isolate":DR(a,i,r,o,c,d);break}}function LR(a,e,i,r,o=0,c=1){a.clearRect(0,0,i,r),Zx(a,e,0,0,i,r,o,c)}function NR(a,e,i,r,o,c=.8,u=1){const{W:d,H:m}=uR(i,r),h=document.createElement("canvas");h.width=d,h.height=m;const g=h.getContext("2d"),v=Math.min(1,Math.max(0,c)),_=g.createLinearGradient(0,0,0,m);_.addColorStop(0,`rgba(8, 10, 14, ${v})`),_.addColorStop(.55,`rgba(5, 7, 13, ${v})`),_.addColorStop(1,`rgba(3, 4, 6, ${v})`),g.fillStyle=_,g.fillRect(0,0,d,m);const S=Math.round(22*i),E=Math.round(.05*m),R=Math.round(.045*m),y=d-S*2;let x=E;const F=Math.min(34*i,d*.095);g.fillStyle="rgba(255,255,255,0.94)",g.font=`normal 400 ${F}px ${o}`,g.textBaseline="alphabetic",g.shadowColor="rgba(10, 14, 23, 0.55)",g.shadowBlur=Math.max(8,12*i),g.shadowOffsetX=0,g.shadowOffsetY=Math.max(1,1.5*i),g.fillText(a.verb,S,x+F*.85),g.shadowColor="transparent",g.shadowBlur=0,g.shadowOffsetY=0,x+=Math.round(.09*m);const I=Math.min(13*i,d*.036);g.fillStyle="rgba(255,255,255,0.94)",g.font=`400 ${I}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`;const w=cR(g,a.description,y),O=x+I;g.shadowColor="rgba(10, 14, 23, 0.45)",g.shadowBlur=Math.max(4,6*i),g.shadowOffsetY=Math.max(.5,1*i),g.fillText(w[0]??a.description,S,O),g.shadowColor="transparent",g.shadowBlur=0,g.shadowOffsetY=0,x=Math.round(O+20*i);const L=S,B=x,A=y,N=Math.max(80*i,m-x-R);Zx(g,lR(e),L,B,A,N,0,u);const Y=new Ux(h);return Y.colorSpace=ei,Y.minFilter=Hs,Y.generateMipmaps=!0,Y}const bp=["M41.9213 3.43614C43.0393 3.43614 43.8716 3.77154 44.4182 4.44235C44.9647 5.138 45.1262 6.1939 44.9026 7.61005L41.884 26.8026C41.7846 27.4982 41.8467 28.0075 42.0703 28.3305C42.2691 28.6784 42.6542 28.8771 43.2256 28.9268L43.8591 28.9641L43.8219 29.2622L36.7784 30.492L36.4803 30.492L40.1324 7.46098C40.3064 6.26843 40.0206 5.67216 39.2753 5.67216C38.9523 5.67216 38.6045 5.75912 38.2318 5.93303C37.8343 6.10694 37.3995 6.44235 36.9275 6.93924L36.7411 6.79017C38.0828 4.55415 39.8095 3.43614 41.9213 3.43614Z","M29.9958 3.43614C31.1138 3.43614 31.9461 3.77154 32.4927 4.44235C33.0393 5.138 33.2007 6.1939 32.9771 7.61005L29.9585 26.8026C29.8591 27.4982 29.9212 28.0075 30.1449 28.3305C30.3436 28.6784 30.7287 28.8771 31.3001 28.9268L31.9337 28.9641L31.8964 29.2622L24.8529 30.492L24.5548 30.492L28.207 7.46098C28.3809 6.26843 28.0952 5.67216 27.3498 5.67216C27.0268 5.67216 26.679 5.75912 26.3063 5.93303C25.9088 6.10694 25.474 6.44235 25.002 6.93924L24.8157 6.79017C26.1573 4.55415 27.884 3.43614 29.9958 3.43614Z","M18.0703 3.43614C19.1883 3.43614 20.0206 3.77154 20.5672 4.44235C21.1138 5.138 21.2753 6.1939 21.0517 7.61005L18.033 26.8026C17.9337 27.4982 17.9958 28.0075 18.2194 28.3305C18.4181 28.6784 18.8032 28.8771 19.3747 28.9268L20.0082 28.9641L19.9709 29.2622L12.9275 30.492L12.6293 30.492L16.2815 7.46098C16.4554 6.26843 16.1697 5.67216 15.4243 5.67216C15.1014 5.67216 14.7535 5.75912 14.3809 5.93303C13.9834 6.10694 13.5486 6.44235 13.0765 6.93924L12.8902 6.79017C14.2318 4.55415 15.9585 3.43614 18.0703 3.43614Z","M45.5631 10.8482C46.0378 11.9189 46.0912 12.9315 45.7231 13.8861C45.3095 14.8231 44.3453 15.4956 42.8305 15.9035L16.576 22.853C15.2325 23.2226 14.7771 24.0651 15.2096 25.3806L15.7698 26.7714L13.8491 27.2839L9.924 22.1284L9.25377 20.6168L40.8242 12.2711C41.6674 12.048 42.2133 11.7494 42.4619 11.3754C42.6651 10.9838 42.669 10.5676 42.4735 10.1267C42.3199 9.78031 42.1016 9.5003 41.8185 9.2867C41.4899 9.05556 41.0511 8.87329 40.5021 8.7399L41.5734 7.5866C42.563 7.86379 43.3915 8.28774 44.0591 8.85845C44.7127 9.39767 45.214 10.0609 45.5631 10.8482Z"],UR="0 0 58 35",OR=58,PR=35;function IR({fill:a="#C8F5A8",width:e=58,height:i=35,padding:r=10,"aria-hidden":o=!0,...c}){const u=[-r,-r,OR+r*2,PR+r*2].join(" ");return D.jsx("svg",{width:e,height:i,viewBox:u,fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":o,...c,children:bp.map(d=>D.jsx("path",{d,fill:a},d.slice(0,24)))})}const FR={sm:{width:30,height:18},md:{width:30,height:18},lg:{width:44,height:27},hero:{width:76,height:46}};function Gp({size:a="md",showWordmark:e=!0,className:i="",brandName:r="Morpheum"}){const o=FR[a];return D.jsxs("span",{className:`brand-mark brand-mark--${a} ${i}`.trim(),children:[D.jsx(IR,{className:"brand-mark__icon",width:o.width,height:o.height,padding:0,fill:"var(--terminal-brand)"}),e?D.jsx("span",{className:"brand-mark__word",children:r}):null]})}const Bv="!@#$%^&*()_+{}[]|;:,.<>?/0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",BR=50,bu=500,Rh=100,zv=168;function zR(){return typeof window>"u"?!1:window.matchMedia("(prefers-reduced-motion: reduce)").matches}function HR(){return Bv[Math.floor(Math.random()*Bv.length)]??"?"}function Hv(a){return Array.from(a).map(e=>{const i=Math.random()*(bu-Rh),r=Rh+Math.random()*(bu-i-Rh),o=Math.min(bu,i+r);return{original:e,start:i,end:o}})}function GR(a){return Math.min(1,Math.max(0,a))}function VR({text:a,className:e,scrollerRef:i}){const r=Xe.useRef(null),o=Xe.useRef(Hv(a)),c=zR();return Xe.useEffect(()=>{o.current=Hv(a)},[a]),Xe.useEffect(()=>{if(c)return;const u=r.current;if(!u)return;let d=0,m=!0,h=-1;const g=()=>{const _=i.current;if(!_)return;const S=Math.max(0,-_.getBoundingClientRect().top),E=Math.min(bu,Math.max(0,S-BR));if(E===h&&h>=0)return;h=E;const R=o.current,y=u.querySelectorAll(".scroll-dissolve__glyph");let x=R.length>0;for(let F=0;F<R.length;F++){const I=R[F],w=y[F];if(!w)continue;const O=Math.max(.001,I.end-I.start),L=GR((E-I.start)/O);if(L<1&&(x=!1),L<=0){w.textContent=I.original===" "?" ":I.original,w.style.transform="translateY(0)",w.style.opacity="1",w.style.visibility="visible";continue}if(L>=1){w.textContent=I.original===" "?" ":I.original,w.style.transform=`translateY(${-zv}px)`,w.style.opacity="0",w.style.visibility="hidden";continue}w.textContent=HR(),w.style.transform=`translateY(${-L*zv}px)`,w.style.opacity=String(1-L),w.style.visibility="visible"}u.style.visibility=x?"hidden":"visible",u.style.display=x?"none":"block"},v=()=>{m&&(g(),d=requestAnimationFrame(v))};return d=requestAnimationFrame(v),()=>{m=!1,cancelAnimationFrame(d)}},[c,i,a]),c?D.jsx("p",{className:e,"aria-label":a,children:a}):D.jsx("p",{ref:r,className:["scroll-dissolve",e].filter(Boolean).join(" "),"aria-label":a,children:Array.from(a).map((u,d)=>D.jsx("span",{className:"scroll-dissolve__glyph","aria-hidden":!0,children:u===" "?" ":u},`${d}-${u}`))})}const kR="Enter the agentic economy →",Dl=Uh.verbs.map((a,e)=>{const i=[{top:"#c8f5a8",mid:"#0a1410",bot:"#1a3d2e"},{top:"#9ee089",mid:"#060e18",bot:"#1e3a52"},{top:"#f0e6a0",mid:"#0c1008",bot:"#2a3820"},{top:"#7fd9a8",mid:"#080810",bot:"#243048"}];return{verb:a.verb,description:a.description,mood:i[e]??i[0]}}),cn=Dl.length,Ja=2.95,Ol=6.9,Nu=32,Kx=4,Qx=5,Tp=2.05,XR=1,WR=Ja*.55,Jx=.28,$x=.35,YR=Jx+$x,Ch=.85,Gv=300,qR=35,Vv=qR/60*1e3,jR=.1;function eS(a){return a<520?{mode:"mobile",canvasW:1280,canvasH:320,fontPx:112,planeBaseW:4.55,frustumFill:.9}:a<900?{mode:"tablet",canvasW:1600,canvasH:360,fontPx:132,planeBaseW:5.25,frustumFill:.94}:{mode:"desktop",canvasW:1920,canvasH:420,fontPx:152,planeBaseW:6.1,frustumFill:.96}}const ZR=1.35,KR=.72,QR=.62,JR=.2,$R=14,e3=.42,t3=128,n3=12,i3=.002,a3=.0011,kv=.12,s3=.88,tS=4,r3=32,o3=40,l3=tS-1,Xv=50,c3=-10,Wv=28,u3="/Morm_IntroAnimation_1.mp4",f3=10,nS=[0,2,4,6,8,10],d3=[{in:2,out:2.2},{in:1.5,out:2.4},{in:2.3,out:1.7},{in:1.8,out:2.1},{in:2.1,out:2.6}];function h3(a,e){const i=d3[a]??{in:2,out:2},r=Wt.clamp(e,0,1);return r<.5?.5*Math.pow(2*r,i.in):1-.5*Math.pow(2*(1-r),i.out)}function p3(a,e,i,r,o){const c=Math.max(1,cn-1),u=[0,e,e+1/c*i,e+2/c*i,r,Math.max(r+.001,o)],d=nS,m=u.length-1;if(a<=u[0])return d[0];if(a>=u[m])return d[m];let h=0;for(;h<m-1&&a>=u[h+1];)h+=1;const g=u[h],v=u[h+1],_=v>g?Wt.clamp((a-g)/(v-g),0,1):1;return Wt.lerp(d[h],d[h+1],h3(h,_))}function Yv(a,e){const i=Number.isFinite(a.duration)&&a.duration>0?a.duration:f3,r=Wt.clamp(e,0,Math.max(0,i-.04));if(!(Math.abs(a.currentTime-r)<1/48))try{a.currentTime=r}catch{}}const m3=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,g3=`
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
`,_3=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,v3=`
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
`,x3='"Reckk Heading", Georgia, "Times New Roman", serif',iS="Morpheum Wordmark",Bl=`"${iS}"`,S3=[{t:0,c:"#e8ffe0"},{t:.45,c:"#c8f5a8"},{t:1,c:"#f0e6a0"}];async function M3(){if(typeof document>"u"||!document.fonts)return!1;try{const a=new FontFace(iS,`url(${sR})`,{weight:"normal",style:"normal"});document.fonts.add(await a.load()),await document.fonts.load(`normal 152px ${Bl}`);const e=document.fonts.check(`normal 152px ${Bl}`);return e||console.error("[FlowIntro] Morpheum Wordmark failed to bind — title will not use Reckk fallback"),e}catch(a){return console.error("[FlowIntro] Morpheum Wordmark load failed",a),!1}}async function y3(){if(!(typeof document>"u"||!document.fonts))try{await M3();const a=new FontFace("Reckk Title",`url(${aR})`,{weight:"normal",style:"normal"});document.fonts.add(await a.load());const e=new FontFace("Reckk Heading",`url(${iR})`,{weight:"normal",style:"normal"});document.fonts.add(await e.load()),await document.fonts.ready,await document.fonts.load(`normal 152px ${Bl}`),await document.fonts.load('normal 64px "Reckk Heading"'),await document.fonts.load('normal 124px "Reckk Title"')}catch{}}const mr="flow-intro-hide-chrome",E3=72,b3=120,wh=80;function T3(a){return a<=E3}const A3=280;function _r(a){const e=document.documentElement,i=e.style.scrollBehavior;e.style.scrollBehavior="auto",window.scrollTo(0,Math.max(0,a)),e.style.scrollBehavior=i}function Dh(){const a=document.getElementById("hero");if(!a)return;const e=a.getBoundingClientRect().top+window.scrollY;_r(e)}function Sr(a){const e=Wt.clamp(a,0,1);return e*e*e*(e*(e*6-15)+10)}function Ll(a){const e=Math.max(1,a),i=Math.max(1,cn*e*XR),r=Math.max(1,i/Math.max(1,cn-1));return{cardPx:i,titlePx:r,totalPx:i+r}}const R3=900,C3=1100,w3=1300,D3=1500,L3=6,N3=36,U3=50,O3=.5,P3=1024,I3=.75,aS=.8;function Vp(a){return a>=P3}function F3(a){return Vp(a)?R3:C3}function B3(a){return Vp(a)?w3:D3}function sS(a){return Math.max(2,Math.max(1,a)*.004)}function z3(a,e){const{cardPx:i,titlePx:r}=Ll(e),o=Math.max(1,cn-1),c=Wt.clamp(Math.round(a),0,cn-1);return r+c/o*i}function H3(a){return a.offsetTop}function G3(a,e,i){return a.offsetTop+z3(e,i)}function Lh(){const a=document.getElementById("hero");return a?a.getBoundingClientRect().top+window.scrollY:null}function V3(a){const e=cn-1;return Wt.clamp(Math.round(a),0,e)}function Nh(a,e,i,r){const o=sS(r);return a<e-o?{kind:"title"}:{kind:"card",idx:V3(i)}}function k3(a,e,i,r,o,c,u){if(o)return!1;const d=i/Math.max(1,cn-1),m=r+d*O3;return!(a>m||c<u*.5)}function kp(a,e){const i=a/Math.max(1,e),r=Nu*Math.PI/180,o=2*Ol*Math.tan(r/2),c=o*i,u=Tp*Kx/Qx,d=.992,m=d*o/Tp,h=d*c/u;return Wt.clamp(Math.min(m,h),.52,2.35)}function X3(a,e,i=aS){const r=kp(a,e);return(Vp(a)?r*I3:r)*i}function qv(a,e,i){const r=eS(a),o=kp(a,e),c=a/Math.max(1,e),u=Nu*Math.PI/180,m=2*Ol*Math.tan(u/2)*c,h=r.frustumFill*m/Math.max(1e-6,o),g=Math.min(r.planeBaseW,h);return{w:g,h:g*i}}function W3(a,e){const i=a/Math.max(1,cn-1),r=Math.min(Math.max(1,e*.38),Math.max(1,i*.34));return i<=r+.001?0:1-r/i}function Y3(a,e){const i=Math.min(Math.max(1,e*.38),Math.max(1,a*.34));return a<=i+.001?0:1-i/a}function q3(a,e){const i=Wt.clamp(e,0,.999);if(a<i)return{titleOp:1,lastCardOp:0};const r=Math.max(1e-6,1-i),o=Sr(Wt.clamp((a-i)/r,0,1));return{titleOp:1-o,lastCardOp:o}}function j3(a,e,i,r=0){const o=cn-1;if(a<=0)return{opacity:e===0?1:0};if(a>=o-1e-5)return{opacity:e===o?1:0};const c=Math.floor(a);if(c>=o)return{opacity:e===o?1:0};if(e!==c&&e!==c+1)return{opacity:0};const u=a-c,d=Wt.clamp(i,0,.999);if(u<d)return{opacity:e===c?1:0};const m=Sr(Wt.clamp((u-d)/Math.max(1e-6,1-d),0,1));return e===c?{opacity:r>=.999?0:1}:{opacity:Math.max(m,r)}}function Z3(a){return new qi({uniforms:{uMap:{value:a},uOpacity:{value:1},uWipe:{value:0},uWipeEdge:{value:jR}},vertexShader:_3,fragmentShader:v3,transparent:!0,depthWrite:!0,depthTest:!0,side:ns})}function K3(a,e){return a>1.5&&a<e-.5}function Q3(a){return Wt.clamp(540/Math.max(a,340),.2,.55)}function J3(a,e,i){const r=[],o=$R;for(let c=0;c<o;c++){const u=Wt.clamp(a-c/Math.max(1,o-1)*e3,-.08,1.08),d=Math.sin(u*Math.PI*2*ZR)*QR*i,m=Math.sin(u*Math.PI*2*KR)*JR,h=kv+c/Math.max(1,o-1)*(s3-kv),g=e-h;r.push(new ie(d,m,g))}return r}function $3(a,e,i,r){const o=a.length;if(o<2)return new Yi;const c=[],u=[],d=[],m=[],h=new ie,g=new ie,v=new ie,_=new ie(0,1,0),S=e+1;for(let R=0;R<o;R++){R===0?h.subVectors(a[1],a[0]).normalize():R===o-1?h.subVectors(a[o-1],a[o-2]).normalize():h.subVectors(a[R+1],a[R-1]).normalize(),g.copy(_).cross(h),g.lengthSq()<1e-8&&g.set(1,0,0).cross(h),g.normalize(),v.crossVectors(h,g).normalize();const y=o===1?0:R/(o-1),x=i+(r-i)*Math.pow(y,1.5);for(let F=0;F<=e;F++){const I=F/e*Math.PI*2,w=Math.cos(I),O=Math.sin(I),L=a[R];c.push(L.x+(w*g.x+O*v.x)*x,L.y+(w*g.y+O*v.y)*x,L.z+(w*g.z+O*v.z)*x),u.push(w*g.x+O*v.x,w*g.y+O*v.y,w*g.z+O*v.z),d.push(o===1?0:R/(o-1),F/e)}}for(let R=0;R<o-1;R++)for(let y=0;y<e;y++){const x=R*S+y,F=x+1,I=x+S,w=I+1;m.push(x,I,F,F,I,w)}const E=new Yi;return E.setAttribute("position",new Wi(c,3)),E.setAttribute("normal",new Wi(u,3)),E.setAttribute("uv",new Wi(d,2)),E.setIndex(m),E.computeBoundingSphere(),E}function jv(a,e,i,r,o,c){const u={verb:a.verb,description:a.description};return NR(u,e,i,r,x3,o,c)}function Zv(a,e){const i=eS(e),r=Math.min(a*2.35,3.25),o=Math.round(i.canvasW*r),c=Math.round(i.canvasH*r),u=document.createElement("canvas");u.width=o,u.height=c;const d=u.getContext("2d");d.clearRect(0,0,o,c);const m="Morpheum";let h=i.fontPx;d.textAlign="left",d.textBaseline="alphabetic";const g=()=>{d.font=`normal ${h*r}px ${Bl}`};g();const v=O=>{d.font=`normal ${O*r}px ${Bl}`;const L=d.measureText(m),B=Math.abs(L.actualBoundingBoxLeft??0),A=Math.abs(L.actualBoundingBoxRight??L.width),N=Math.abs(L.actualBoundingBoxAscent??O*r*.8),Y=Math.abs(L.actualBoundingBoxDescent??O*r*.25);return{left:B,right:A,width:B+A,ascent:N,descent:Y}},_=Math.max(1.25,1.85*r)*2,S=64*r+_,E=40*r+_,R=O=>{const L=v(O);return L.width+S*2<=o&&L.ascent+L.descent+E*2<=c};for(;!R(h)&&h>64;)h-=2;for(;R(h+2)&&h<i.fontPx+24;)h+=2;g();const y=v(h),x=(o-y.width)/2+y.left,F=c/2+(y.ascent-y.descent)/2,I=d.createLinearGradient(x-y.left,F-y.ascent,x+y.right,F+y.descent);S3.forEach(O=>I.addColorStop(O.t,O.c)),d.lineJoin="round",d.miterLimit=2,d.lineWidth=Math.max(1.25,1.85*r),d.strokeStyle="rgba(8,12,10,0.22)",d.shadowColor="rgba(10, 14, 23, 0.55)",d.shadowBlur=Math.max(10,16*r),d.shadowOffsetX=0,d.shadowOffsetY=Math.max(1,2*r),d.strokeText(m,x,F),d.fillStyle=I,d.fillText(m,x,F),d.shadowColor="transparent",d.shadowBlur=0,d.shadowOffsetY=0;const w=new Ux(u);return w.colorSpace=ei,w.minFilter=hn,w.magFilter=hn,w.generateMipmaps=!1,w}function Kv(a,e){a.generateMipmaps=!1,a.minFilter=hn,a.magFilter=hn,a.wrapS=ra,a.wrapT=ra;const i=e.capabilities.getMaxAnisotropy();a.anisotropy=Math.min(16,i),a.needsUpdate=!0}function eC({cardAlpha:a=.8,modalChassisAlpha:e=1,cardSize:i=aS}){const r=Xe.useRef(null),o=Xe.useRef(null),c=Xe.useRef(null),u=Xe.useRef(null),d=Xe.useRef(null),m=Xe.useRef(!1),h=Xe.useRef(!1),g=Xe.useRef(null),v=Xe.useRef(a);v.current=Math.min(1,Math.max(0,a));const _=Xe.useRef(e);_.current=Math.min(1,Math.max(0,e));const S=Xe.useRef(i);S.current=Math.max(.1,i);const E=Xe.useCallback(()=>{var y;if(m.current)return;m.current=!0,h.current=!1,(y=g.current)==null||y.call(g);const R=o.current;R==null||R.classList.add("flow-intro__sticky--exit"),window.setTimeout(()=>{document.body.classList.remove(mr),Dh(),requestAnimationFrame(()=>{Dh(),requestAnimationFrame(()=>{Dh(),window.setTimeout(()=>{m.current=!1},100)})})},A3)},[]);return Xe.useLayoutEffect(()=>{const R=window.matchMedia("(prefers-reduced-motion: reduce)").matches,y=window.location.hash.replace(/^#/,"");return R||y!==""&&y!=="flow"&&y!=="hero"||document.body.classList.add(mr),()=>{document.body.classList.remove(mr)}},[]),Xe.useEffect(()=>{const R=y=>{if(y.key!=="Escape")return;const x=document.getElementById("hero");x&&x.getBoundingClientRect().top>8&&(y.preventDefault(),E())};return window.addEventListener("keydown",R),()=>window.removeEventListener("keydown",R)},[E]),Xe.useEffect(()=>{const R=window.location.hash.replace(/^#/,"");R&&R!=="flow"&&R!=="hero"&&requestAnimationFrame(()=>{var y;(y=document.getElementById(R))==null||y.scrollIntoView({block:"start"})})},[]),Xe.useEffect(()=>{const R=c.current,y=r.current;if(!R||!y)return;const x=R,F=y;let I=!1;if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){document.body.classList.remove(mr);const L=d.current;L&&(L.style.height="0px");return}let O;return(async()=>{if(await y3(),I)return;const L=Math.min(window.devicePixelRatio,2),B=Math.max(320,x.clientWidth||window.innerWidth),A=Math.max(1,x.clientHeight||window.innerHeight),N=[],Y=[],k=[],j=new Float64Array(cn).fill(-1);Dl.forEach((_e,Be)=>{const T=cn-1-Be,G=Dl[T],$=jv(G,T,L,B,v.current,_.current);k.push($);const Q=Z3($);N.push(Q);const ne=Tp,Ue=ne*Kx/Qx,He=new Ri(new Gs(Ue,ne),Q);He.position.set(0,0,-Be*Ja),He.renderOrder=Be,Y.push(He)});const ue=Zv(L,B),fe=new Lu({map:ue,transparent:!0,opacity:0,depthWrite:!1,depthTest:!1,side:Sa}),q=ue.image.height/ue.image.width,{w:z,h:H}=qv(B,A,q),te=new Ri(new Gs(z,H),fe);te.position.set(0,0,-(cn-1)*Ja+.05),te.renderOrder=o3;const me=new FE,Se=new ki(Nu,1,.08,120),U=new nR({antialias:!0,alpha:!1,powerPreference:"high-performance"});U.setPixelRatio(Math.min(window.devicePixelRatio,2)),U.outputColorSpace=ei,U.sortObjects=!0,x.appendChild(U.domElement),Kv(ue,U);const K=new Rl;Y.forEach(_e=>K.add(_e)),K.add(te),me.add(K);const be=new qi({uniforms:{uStrength:{value:0}},vertexShader:m3,fragmentShader:g3,transparent:!0,toneMapped:!1,depthTest:!1,depthWrite:!1,blending:Oh}),Ae=new Ri(new Yi,be);Ae.frustumCulled=!1,Ae.renderOrder=Xv,Ae.visible=!1,me.add(Ae);let Ce=null,ae=null,Me=null;const ge=u.current;if(ge){ge.muted=!0,ge.defaultMuted=!0,ge.playsInline=!0,ge.preload="auto",ge.pause(),Ce=new jE(ge),Ce.colorSpace=ei,Ce.minFilter=hn,Ce.magFilter=hn,Ce.generateMipmaps=!1,ae=new Lu({map:Ce,depthTest:!1,depthWrite:!1,toneMapped:!1}),Me=new Ri(new Gs(1,1),ae),Me.frustumCulled=!1,Me.renderOrder=c3,Me.position.set(0,0,-Wv),Se.add(Me),me.add(Se);const _e=()=>{Yv(ge,nS[0]),Ce.needsUpdate=!0};ge.readyState>=1?_e():ge.addEventListener("loadedmetadata",_e,{once:!0})}function qe(){if(!Me)return;const _e=Wv,Be=Nu*Math.PI/180,T=2*Math.tan(Be/2)*_e,G=T*Se.aspect,$=(ge==null?void 0:ge.videoWidth)||1280,Q=(ge==null?void 0:ge.videoHeight)||720,ne=$/Math.max(1,Q);G/Math.max(1e-6,T)>ne?Me.scale.set(G,G/ne,1):Me.scale.set(T*ne,T,1)}const st=-(cn-1)*Ja,et=-.1*Ja,Yt=st+Ol+et,ht=Yt-WR;function vt(_e){const Be=cn-1,T=Wt.clamp(_e,0,Be);return-(Be-T)*Ja+Ol+et}let it=Math.max(1,x.clientHeight||window.innerHeight),ct=!1,Qt=window.innerWidth,Jt=!1,qt=!1;function tn(){return Math.max(1,window.innerHeight)}function Gt(_e){return Jt?_e>b3&&(Jt=!1):T3(_e)&&(Jt=!0),Jt}function sn(){const _e=d.current;if(!_e)return;const{totalPx:Be}=Ll(it),T=it*YR,$=`${Math.max(Math.ceil(Be+T+it*Ch+32-Gv),Math.ceil(it*1.08))}px`;_e.style.height!==$&&(_e.style.height=$)}function Z(){var Ue;const _e=Math.max(320,x.clientWidth||window.innerWidth),Be=Math.min(window.devicePixelRatio,2);k.forEach((He,Re)=>{He.dispose();const ke=cn-1-Re,ze=jv(Dl[ke],ke,Be,_e,v.current,_.current);k[Re]=ze,N[Re].uniforms.uMap.value=ze}),(Ue=fe.map)==null||Ue.dispose();const T=Zv(Be,_e);fe.map=T,fe.needsUpdate=!0,Kv(T,U);const G=T.image.height/T.image.width,$=Math.max(1,x.clientHeight||it),{w:Q,h:ne}=qv(_e,$,G);te.geometry.dispose(),te.geometry=new Gs(Q,ne)}function bt(){const _e=x.clientWidth,Be=x.clientHeight;_e<2||Be<2||(Se.aspect=_e/Be,Se.updateProjectionMatrix(),U.setSize(_e,Be,!1),qe(),Z(),ct||sn())}function Tt(){ct=!1,it=tn(),Qt=window.innerWidth,bt()}bt(),requestAnimationFrame(()=>{I||Z()});let P=0;function b(){var js,Zs;if(I)return;P=requestAnimationFrame(b);const _e=tn(),Be=document.getElementById("hero"),T=Be?Be.getBoundingClientRect().top:0,G=Be?Gt(T):!0,{totalPx:$}=Ll(it),Q=F.getBoundingClientRect(),ne=Math.max(1,F.offsetHeight-it),Ue=Wt.clamp(-Q.top,0,ne);!G&&Ue<=$?(ct=!1,Math.abs(_e-it)>wh&&(it=_e,sn())):ct=!0;const Re=it,{cardPx:ke,titlePx:ze,totalPx:je}=Ll(Re),lt=Math.max(1,F.offsetHeight-Re),Ke=Wt.clamp(-Q.top,0,lt),Mt=Math.min(Ke,je),$t=Math.max(1,je),It=Re*Jx,Lt=Re*$x,Ct=It+Lt,We=Ke-je,Tn=Sr(Wt.clamp(We/Math.max(1,It),0,1)),mt=Sr(Wt.clamp((We-It)/Math.max(1,Lt),0,1)),mn=x.clientWidth,Zn=x.clientHeight,Hn=Math.max(1,ze),_n=Mt<Hn,Nt=_n?Wt.clamp(Mt/Hn,0,1):0,an=Math.max(0,Mt-Hn),gi=Math.max(1,ke),Gn=Wt.clamp(an/gi,0,1)*(cn-1),fa=kp(mn,Zn),wa=X3(mn,Zn,S.current),_i=_n?Wt.lerp(ht,Yt,Nt):vt(Gn),Ws=W3(ke,Re),Uo=Y3(Hn,Re),Da=q3(Nt,Uo),La=cn-1,Gl=je+Ct;ge&&(Yv(ge,p3(Ke,Hn,ke,je,Gl)),Ce&&(Ce.needsUpdate=!0)),qe(),Se.position.set(0,0,_i),Se.lookAt(0,0,_i-Ol);const rs=je+Ct;let Ys=0;if(lt>rs&&Ke>=rs){const Bt=Math.max(1,lt-rs);Ys=Sr(Wt.clamp((Ke-rs)/Bt,0,1))}const qs=Math.max(1,Ct+Re*Ch),Qi=Ke<=$t?Wt.clamp(Ke/$t,0,1):1+Wt.clamp(We/qs,0,1)*.45;if(K3(Ke,lt)){const Bt=J3(Qi,_i,Q3(mn)),Kn=new QE(Bt,!1,"centripetal").getSpacedPoints(t3);if(Kn.length>=2){const Nn=$3(Kn,n3,i3,a3),ri=Ae.geometry.getAttribute("position"),oi=Nn.getAttribute("position");if(ri&&oi&&ri.count===oi.count&&((js=Ae.geometry.getIndex())==null?void 0:js.count)===((Zs=Nn.getIndex())==null?void 0:Zs.count)&&ri&&oi){ri.array.set(oi.array),ri.needsUpdate=!0;const Ui=Ae.geometry.getAttribute("normal"),Ji=Nn.getAttribute("normal");Ui&&Ji&&(Ui.array.set(Ji.array),Ui.needsUpdate=!0);const Rr=Ae.geometry.getAttribute("uv"),Xl=Nn.getAttribute("uv");Rr&&Xl&&(Rr.array.set(Xl.array),Rr.needsUpdate=!0),Nn.dispose()}else Ae.geometry.dispose(),Ae.geometry=Nn;Ae.visible=!0;const ls=_n||Gn<Wt.clamp(Ws,0,.999);Ae.renderOrder=ls?l3:Xv,be.uniforms.uStrength.value=.36*(1-Ys*.92)}else Ae.visible=!1,be.uniforms.uStrength.value=0}else Ae.visible=!1,be.uniforms.uStrength.value=0;const os=Math.floor((cn-1)/2),Ni=performance.now(),Oo=Wt.clamp(Ws,0,.999);for(let Bt=0;Bt<cn;Bt++){if(_n||Gn<=Bt+1e-5||Gn<Bt+Oo){j[Bt]=-1;continue}j[Bt]<0&&(Gn>=Bt+1-1e-5?j[Bt]=Ni-Vv:j[Bt]=Ni)}if(Y.forEach((Bt,rn)=>{const Kn=-rn*Ja,Nn=cn-1-rn,ri=j[Nn];let oi=ri<0?0:Sr(Wt.clamp((Ni-ri)/Vv,0,1));!_n&&Nn===cn-1&&mt>0&&(oi=Math.max(oi,mt));let{opacity:da}=j3(Gn,Nn,Ws,oi);_n&&rn===La&&(da*=Da.lastCardOp,oi=0);let ls=1,Ui=0;!_n&&Nn===cn-1&&da>.02&&Tn>0&&(ls=1-.28*Tn,Ui=-Ja*.32*Tn),Bt.position.set(0,0,Kn+Ui),Bt.scale.setScalar(wa*ls);const Ji=N[rn];Ji.uniforms.uOpacity.value=da,Ji.uniforms.uWipe.value=oi,Ji.depthWrite=da>=.995&&oi<.02,Bt.visible=da>.003&&oi<.997,Bt.renderOrder=rn<=os?tS+rn:r3+(rn-os-1)}),te.position.set(0,0,-La*Ja+.05),te.scale.setScalar(fa),fe.opacity=_n?Da.titleOp:0,te.visible=fe.opacity>.003,!m.current){h.current?qt=!1:G?qt=!0:qt&&Ke<je-Re*.25&&(qt=!1),document.body.classList.toggle(mr,!qt);const Bt=o.current;Bt!=null&&Bt.classList.contains("flow-intro__sticky--exit")&&!G&&(Bt.style.transition="none",Bt.classList.remove("flow-intro__sticky--exit"),Bt.offsetWidth,Bt.style.transition="")}if(!ct){const Bt=Ct+Re*Ch+32-Gv,rn=Math.max(Math.ceil(je+Bt),Math.ceil(Re*1.08)),Kn=d.current;if(Kn){const Nn=`${rn}px`;Kn.style.height!==Nn&&(Kn.style.height=Nn)}}const Ar=1-Ys*.96;o.current&&(o.current.style.setProperty("--intro-ui-opacity",String(Ar)),o.current.style.setProperty("--intro-tagline-opacity","1"));const kl=String(1-Ys);U.domElement.style.opacity=kl,U.render(me,Se)}b();let J=0,re=0,le=!1,we="page",Le=!1,pe=!1,de=!1,De=0,Ge=0,Fe=0,Ie=!1,Je=!1,tt=0,rt=window.scrollY,X={kind:"title"};const Ne=8;function ve(){re&&(window.clearTimeout(re),re=0)}function Oe(){J&&(cancelAnimationFrame(J),J=0),le=!1,we="page",h.current=!1}function Pe(){Oe(),ve(),Le=!1}g.current=Pe;function Ee(){var je;const _e=Math.max(1,it),{cardPx:Be,titlePx:T,totalPx:G}=Ll(_e),$=F.getBoundingClientRect(),Q=Math.max(1,F.offsetHeight-_e),ne=Wt.clamp(-$.top,0,Q),Ue=document.getElementById("hero"),He=Ue?Gt(Ue.getBoundingClientRect().top):!0,Re=((je=o.current)==null?void 0:je.getBoundingClientRect().bottom)??_e,ze=Math.max(0,Math.min(ne,G)-T)/Math.max(1,Be)*(cn-1);return{innerH:_e,cardPx:Be,titlePx:T,totalPx:G,scrolledPx:ne,landed:He,stickyBottom:Re,depthT:ze}}function Ve(_e=Ee()){return k3(_e.scrolledPx,_e.titlePx,_e.cardPx,_e.totalPx,_e.landed,_e.stickyBottom,_e.innerH)}function Ze(){return le||Ve()}function nn(_e){let Be=_e.deltaY;return _e.deltaMode===1?Be*=16:_e.deltaMode===2&&(Be*=window.innerHeight),Be}function wt(){ve(),Le=!0,re=window.setTimeout(()=>{re=0,Le=!1},U3)}function ti(_e,Be){return _e.kind==="title"?H3(F):_e.kind==="card"?G3(F,_e.idx,Be.innerH):Lh()}function In(_e){if(I||m.current||le)return;const Be=Ee(),T=_e.kind==="hero";if(!T&&!Ve(Be))return;const G=ti(_e,Be);if(G==null)return;const $=window.scrollY,Q=G-$;if(X=_e.kind==="hero"?{kind:"card",idx:cn-1}:_e,Math.abs(Q)<sS(Be.innerH)){_r(G),wt();return}le=!0,we=T?"exit":"page",h.current=T,Le=!0;const ne=T?B3(window.innerWidth):F3(window.innerWidth),Ue=performance.now(),He=ke=>{if(_r(ke),le=!1,we="page",J=0,!T){h.current=!1,wt();return}h.current=!1,requestAnimationFrame(()=>{const ze=Lh();ze!=null&&_r(ze),requestAnimationFrame(()=>{const je=Lh();je!=null&&_r(je),wt()})})},Re=ke=>{if(I||m.current){le=!1,we="page",J=0,h.current=!1;return}if(we==="page"&&!Ve(Ee())){Oe(),Le=!1;return}const ze=Math.min(1,(ke-Ue)/ne);_r($+Q*Sr(ze)),ze<1?J=requestAnimationFrame(Re):He(G)};J=requestAnimationFrame(Re)}function la(_e,Be){const T=cn-1,G=Be>0?1:-1,$=Nh(_e.scrolledPx,_e.titlePx,_e.depthT,_e.innerH);if($.kind==="title")return G<0?null:{kind:"card",idx:0};const Q=$.idx+G;return Q<0?{kind:"title"}:Q>T?G>0?{kind:"hero"}:{kind:"card",idx:T}:{kind:"card",idx:Q}}function Ra(_e){const Be=Ee();if(!Ve(Be)&&!(le&&we==="exit"))return!1;const T=la(Be,_e);return T===null?!1:(In(T),!0)}function ss(_e,Be){return la(_e,Be)===null}function Ca(_e){if(!Ze())return;const Be=nn(_e),T=Ee();if(!Ve(T)&&we!=="exit")return;const G=la(T,Be>0?1:-1);if(G===null){(le||Le)&&Pe();return}if(le||Le){_e.preventDefault();return}if(Math.abs(Be)<L3){_e.preventDefault();return}_e.preventDefault(),In(G)}function mi(_e){var Be;if(Ge=((Be=_e.touches[0])==null?void 0:Be.clientY)??Ge,De=Ge,Fe=window.scrollY,pe=!1,de=le||Ve(),de&&!le){const T=Ee();X=Nh(T.scrolledPx,T.titlePx,T.depthT,T.innerH)}}function pn(_e){var T;const Be=((T=_e.touches[0])==null?void 0:T.clientY)??De;if(!pe){if(!de&&(le||Ve())&&(de=!0,Ge=Be,De=Be,Fe=window.scrollY),!de)return;const G=Ge-Be;if(Math.abs(G)<Ne){De=Be;return}const $=G>0?1:-1,Q=Ee();if(!le&&!Ve(Q)){de=!1,De=Be;return}if(ss(Q,$)){de=!1,Pe(),De=Be;return}le&&Pe(),pe=!0,de=!1,Fe=window.scrollY,X=Nh(Q.scrolledPx,Q.titlePx,Q.depthT,Q.innerH)}_e.preventDefault(),De=Be,le||_r(Fe)}function gn(){const _e=pe,Be=de,T=Ge-De;if(pe=!1,de=!1,le)return;if(!_e){Be&&Pe();return}if(!Ve())return;if(Math.abs(T)<N3){In(X);return}const G=T>0?1:-1,$=Ee();if(ss($,G)){Pe();return}Ra(G)}function zn(_e){_e.pointerType!=="touch"&&_e.button===0&&(Ie=!0,Je=!1,tt=window.scrollY,Ve()&&Oe())}function ca(_e){if(_e.pointerType==="touch"||!Ie)return;if(Ie=!1,!Je||!Ve()){Je=!1;return}const Be=Ee(),T=window.scrollY>=tt?1:-1,G=la(Be,T);if(Je=!1,G===null){Pe();return}In(G)}function ks(_e){_e.pointerType!=="touch"&&(Ie=!1,Je=!1)}function Xs(_e){_e.button===0&&(Je||le||Le||Ve()&&(_e.preventDefault(),Ra(1)))}function ua(_e){var $;const Be=_e.target;if(($=Be==null?void 0:Be.closest)!=null&&$.call(Be,"input, textarea, select, [contenteditable=true]"))return;const T=_e.key==="ArrowDown"||_e.key==="ArrowRight"||_e.key==="Enter"||_e.key===" ",G=_e.key==="ArrowUp"||_e.key==="ArrowLeft";if(!(!T&&!G)){if(le||Le){_e.preventDefault();return}Ve()&&(_e.preventDefault(),Ra(T?1:-1))}}function ji(){const _e=window.scrollY,Be=_e-rt;rt=_e,Ie&&Math.abs(Be)>.5&&(Je=!0),le&&we==="page"&&!Ve()&&Pe()}function Zi(){Pe(),Tt()}function wi(){Pe();const _e=tn(),Be=window.innerWidth,T=Math.abs(_e-it),G=Math.abs(Be-Qt)>1;if(ct){T>wh||G?Tt():bt();return}it=_e,Qt=Be,bt()}function Di(){Pe();const _e=tn();Math.abs(_e-it)<=wh||(ct?Tt():(it=_e,Qt=window.innerWidth,bt()))}window.addEventListener("wheel",Ca,{passive:!1}),window.addEventListener("touchstart",mi,{passive:!0}),window.addEventListener("touchmove",pn,{passive:!1}),window.addEventListener("touchend",gn,{passive:!0}),window.addEventListener("touchcancel",gn,{passive:!0}),window.addEventListener("pointerdown",zn,{passive:!0}),window.addEventListener("pointerup",ca,{passive:!0}),window.addEventListener("pointercancel",ks,{passive:!0}),window.addEventListener("scroll",ji,{passive:!0}),window.addEventListener("resize",wi,{passive:!0}),window.addEventListener("orientationchange",Zi,{passive:!0}),x.addEventListener("click",Xs),window.addEventListener("keydown",ua);const Li=window.visualViewport;Li&&Li.addEventListener("resize",Di);const Ki=new ResizeObserver(bt);Ki.observe(x),O=()=>{var _e;Pe(),g.current=null,cancelAnimationFrame(P),document.body.classList.remove(mr),window.removeEventListener("wheel",Ca),window.removeEventListener("touchstart",mi),window.removeEventListener("touchmove",pn),window.removeEventListener("touchend",gn),window.removeEventListener("touchcancel",gn),window.removeEventListener("pointerdown",zn),window.removeEventListener("pointerup",ca),window.removeEventListener("pointercancel",ks),window.removeEventListener("scroll",ji),window.removeEventListener("resize",wi),window.removeEventListener("orientationchange",Zi),x.removeEventListener("click",Xs),window.removeEventListener("keydown",ua),Li&&Li.removeEventListener("resize",Di),Ki.disconnect(),N.forEach(Be=>{Be.dispose()}),k.forEach(Be=>Be.dispose()),(_e=fe.map)==null||_e.dispose(),fe.dispose(),Y.forEach(Be=>Be.geometry.dispose()),te.geometry.dispose(),Ae.geometry.dispose(),be.dispose(),me.remove(Ae),Me&&(Se.remove(Me),Me.geometry.dispose()),ae==null||ae.dispose(),Ce==null||Ce.dispose(),ge&&ge.pause(),U.dispose(),x.contains(U.domElement)&&x.removeChild(U.domElement)},I&&O()})(),()=>{var L;I=!0,(L=g.current)==null||L.call(g),g.current=null,document.body.classList.remove(mr),O==null||O()}},[]),D.jsxs("section",{ref:r,id:"flow",className:"flow-intro","aria-label":"Morpheum — Discover, Copy, Supervise, Isolate",children:[D.jsxs("div",{ref:o,className:"flow-intro__sticky",children:[D.jsx("video",{ref:u,className:"flow-intro__bg-video",src:u3,muted:!0,playsInline:!0,preload:"auto","aria-hidden":!0}),D.jsx("div",{ref:c,className:"flow-intro__canvas","aria-hidden":!0}),D.jsxs("div",{className:"flow-intro__top",children:[D.jsx("div",{className:"flow-intro__brand",children:D.jsx(Gp,{size:"sm",brandName:"Morpheum",className:"flow-intro__brand-mark"})}),D.jsxs("button",{type:"button",className:"flow-intro__skip",onClick:E,children:["Skip ",D.jsx("span",{className:"flow-intro__skip-key",children:"Esc"})]})]}),D.jsx("div",{className:"flow-intro__tagline-wrap",children:D.jsx(VR,{text:kR,className:"flow-intro__tagline",scrollerRef:r})}),D.jsx("div",{className:"flow-intro__sr","aria-live":"polite",children:Dl.map((R,y)=>D.jsxs("p",{children:["Step ",String(y+1).padStart(2,"0"),": ",R.verb,". ",R.description]},R.verb))})]}),D.jsx("div",{ref:d,className:"flow-intro__spacer","aria-hidden":!0})]})}const tC=280,nC=5/4,iC=3800,aC={discover:wl,copy:AR};function sC(){return typeof window<"u"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches}function rC({stepIndex:a,kind:e,className:i,width:r=tC}){const o=Xe.useRef(null),c=e??Yx(a),u=Math.round(r*nC);return Xe.useEffect(()=>{const d=o.current;if(!d)return;let m=0,h;const g=()=>{const S=Math.min(window.devicePixelRatio||1,2),E=Math.round(r*S),R=Math.round(u*S);(d.width!==E||d.height!==R)&&(d.width=E,d.height=R);const y=d.getContext("2d");y&&LR(y,c,E,R,m)};g();const v=aC[c];v&&v>1&&!sC()&&(h=setInterval(()=>{m=(m+1)%v,g()},iC));const _=()=>g();return window.addEventListener("resize",_),()=>{window.removeEventListener("resize",_),h&&clearInterval(h)}},[c,r,u]),D.jsx("div",{className:["loop-step-sheet",i].filter(Boolean).join(" "),style:{width:r,height:u},children:D.jsx("canvas",{ref:o,className:"loop-step-sheet__canvas",style:{width:r,height:u},"aria-hidden":!0})})}const Qv=[{id:"want-eth",agent:"SharpeShark",timestamp:"2026-07-08T15:42:00.000Z",timeLabel:"07-08, 15:42:00",status:"want-to",statusLabel:"Want to",action:"Open ETH long · 1.2 ETH",showActions:!0},{id:"rejected-btc",agent:"NightOwl",timestamp:"2026-07-08T15:31:00.000Z",timeLabel:"07-08, 15:31:00",status:"rejected",statusLabel:"Rejected",action:"Open BTC short · 0.04 BTC"},{id:"close-btc-profit",agent:"SharpeShark",timestamp:"2026-07-08T15:25:00.000Z",timeLabel:"07-08, 15:25:00",status:"short",statusLabel:"Close Long",action:"BTCUSDT · 0.04 BTC · 2,465.12 USDT",pnl:{text:"+103.09",tone:"long"}},{id:"open-eth-long",agent:"FluxRunner",timestamp:"2026-07-08T14:10:00.000Z",timeLabel:"07-08, 14:10:00",status:"long",statusLabel:"Open Long",action:"ETHUSDT · 0.8 ETH · 2,560.00 USDT"},{id:"open-sol-short",agent:"NightOwl",timestamp:"2026-07-07T09:42:00.000Z",timeLabel:"07-07, 09:42:00",status:"short",statusLabel:"Open Short",action:"SOLUSDT · 12 SOL · 1,824.00 USDT"}];function oC(){return D.jsxs("aside",{className:"supervise-log","aria-label":"Agent activity log",children:[D.jsx("header",{className:"supervise-log__header",children:D.jsx("span",{className:"supervise-log__kicker",children:"Activity log"})}),D.jsx("ol",{className:"supervise-log__timeline",children:Qv.map((a,e)=>{const i=e===Qv.length-1,r=e===0;return D.jsxs("li",{className:"supervise-log__item",children:[D.jsxs("div",{className:"supervise-log__meta",children:[D.jsx("span",{className:"supervise-log__agent",children:a.agent}),D.jsx("time",{className:"supervise-log__time",dateTime:a.timestamp,children:a.timeLabel})]}),D.jsxs("div",{className:"supervise-log__track","aria-hidden":!0,children:[i?null:D.jsx("span",{className:"supervise-log__track-line"}),D.jsx("span",{className:["supervise-log__dot",r?"supervise-log__dot--latest":""].filter(Boolean).join(" ")})]}),D.jsxs("div",{className:"supervise-log__body",children:[D.jsx("span",{className:`supervise-log__badge supervise-log__badge--${a.status}`,children:a.statusLabel}),D.jsxs("p",{className:"supervise-log__action",children:[a.action,a.pnl?D.jsxs(D.Fragment,{children:[" · ",D.jsx("span",{className:`supervise-log__pnl supervise-log__pnl--${a.pnl.tone}`,children:a.pnl.text})]}):null]}),a.showActions?D.jsxs("div",{className:"supervise-log__actions",children:[D.jsx("button",{type:"button",className:"supervise-log__btn supervise-log__btn--reject",children:"Reject"}),D.jsx("button",{type:"button",className:"supervise-log__btn supervise-log__btn--approve",children:"Approve"})]}):null]})]},a.id)})})]})}const lC=/^(action)$/i;function cC(a){return a.split(/(\s*[·/]\s*)/).map((i,r)=>lC.test(i.trim())?D.jsx("span",{className:"stat-chip__brand",children:i},r):D.jsx("span",{children:i},r))}function rS({label:a,status:e,live:i}){return D.jsxs("span",{className:`stat-chip ${i?"stat-chip--live":""}`,children:[D.jsx("span",{className:"stat-chip__label",children:a}),D.jsx("span",{className:"stat-chip__sep",children:"·"}),D.jsx("span",{className:"stat-chip__status",children:cC(e)})]})}var uC=lx();function fC(a,e,i=!1){a.style.fontFamily=e.fontFamily,a.style.fontSize=e.fontSize,a.style.fontWeight=e.fontWeight,a.style.letterSpacing=e.letterSpacing,a.style.lineHeight=e.lineHeight,a.style.textTransform=e.textTransform,a.style.whiteSpace=i?"nowrap":"normal",a.style.wordBreak=i?"normal":"break-word"}function dC(a,e,i,r){const o=getComputedStyle(i),c=document.createElement("div");c.style.position="fixed",c.style.left="-99999px",c.style.top="0",c.style.visibility="hidden",c.style.pointerEvents="none",c.style.width=`${e}px`,fC(c,o,!r);const u=document.createTextNode(a);return c.appendChild(u),document.body.appendChild(c),{probe:c,textNode:u}}function Jv(a,e,i,r=!0){if(!a)return{lines:[],blockHeight:0};if(e<=0)return{lines:[a],blockHeight:0};const{probe:o,textNode:c}=dC(a,e,i,r),u=o.offsetHeight;if(!r)return document.body.removeChild(o),{lines:[a],blockHeight:u};const d=document.createRange(),m=[];let h=0,g=0;for(let v=1;v<=a.length;v++){d.setStart(c,0),d.setEnd(c,v);const _=d.getClientRects().length;_>g&&g>0&&(m.push(a.slice(h,v-1)),h=v-1),g=_}return h<a.length&&m.push(a.slice(h)),document.body.removeChild(o),{lines:m.length>0?m:[a],blockHeight:u}}const hC=40,pC=5,mC="typewriter-reveal",$v=1e3,gC=4e3;function ex(){return $v+Math.random()*(gC-$v)}function oS(){return typeof window>"u"?!1:window.matchMedia("(prefers-reduced-motion: reduce)").matches}function _C({text:a,content:e,speed:i,cursorWidth:r,active:o,waiting:c,completed:u,holdCursor:d=!1,onComplete:m}){const h=Xe.useRef(null),g=Xe.useRef(m),v=Xe.useRef(null),_=Xe.useRef(null),S=Xe.useRef(null),E=Xe.useRef("idle"),[R,y]=Xe.useState("idle");g.current=m;const x=Xe.useCallback(()=>{v.current&&(clearTimeout(v.current),v.current=null)},[]),F=Xe.useCallback(()=>{var N;x(),_.current=null,S.current=null,E.current="complete",y("complete"),(N=g.current)==null||N.call(g)},[x]),I=Xe.useCallback(N=>{x(),_.current=Date.now()+N,v.current=setTimeout(F,N)},[x,F]);Xe.useLayoutEffect(()=>{E.current="idle",y("idle"),S.current=null,_.current=null,x()},[a,i,r,x]),Xe.useLayoutEffect(()=>{var H,te,me;if(c||u||E.current==="complete")return;if(!o){E.current==="cursor-hold"&&v.current&&_.current!=null&&(x(),S.current=Math.max(0,_.current-Date.now()),_.current=null);return}if(E.current==="cursor-hold"&&!v.current){const Se=S.current??ex();S.current=null,I(Se);return}if(E.current==="animating"||E.current==="cursor-hold")return;if(oS()){(H=g.current)==null||H.call(g);return}const N=h.current;if(!N||!a){(te=g.current)==null||te.call(g);return}N.style.width="",N.offsetWidth;const Y=Math.max(a.length/i*1e3,120),k=Math.max(a.length,1),j=N.closest(".typewriter-block"),ue=(j==null?void 0:j.clientWidth)??((me=N.parentElement)==null?void 0:me.clientWidth)??0;N.style.whiteSpace="nowrap",N.style.width="auto";const fe=N.scrollWidth,q=ue>0?Math.min(fe,ue):fe;N.style.width="0",N.style.setProperty("--tw-duration",`${Y}ms`),N.style.setProperty("--tw-target-width",`${q}px`),N.style.setProperty("--tw-steps",String(k)),N.style.setProperty("--tw-cursor-width",`${r}px`),N.offsetWidth,E.current="animating",y("animating");const z=Se=>{if(Se.animationName===mC){if(d){N.style.width=`${q}px`,E.current="cursor-hold",y("cursor-hold"),I(ex());return}N.style.width="",F()}};return N.addEventListener("animationend",z),()=>{N.removeEventListener("animationend",z)}},[o,u,F,d,I,i,a,c,x,r]);const w=R==="animating",O=R==="cursor-hold",L=R==="complete",A=["typewriter","typewriter-line",c?"is-waiting":"",w?"is-animating":"",O?"is-cursor-hold":"",u||L?"is-complete":"",!o&&!c&&!u&&!L&&(w||O)?"is-paused":""].filter(Boolean).join(" ");return D.jsx("span",{ref:h,className:A,children:e??a})}function Xp({text:a,children:e,className:i,speed:r=hC,cursorWidth:o=pC,multiline:c="auto",active:u=!0,holdCursor:d=!0,onComplete:m}){const h=Xe.useRef(null),g=Xe.useRef(m),[v,_]=Xe.useState([]),[S,E]=Xe.useState(0),[R,y]=Xe.useState(0),[x,F]=Xe.useState(!1),[I,w]=Xe.useState(!1),O=oS();g.current=m;const L=Xe.useCallback(()=>{const fe=h.current;if(!fe||!a)return _([]),E(0),w(!0),!0;const q=fe.clientWidth;if(q<1)return!1;const H=(c==="auto"||c===!0)&&!O,{lines:te,blockHeight:me}=Jv(a,q,fe,H);let Se=me;if(!H){const U=Jv(a,q,fe,!0);Se=Math.max(me,U.blockHeight)}return _(te),E(Se),w(!0),!0},[a,c,O]);Xe.useLayoutEffect(()=>{var fe,q;if(y(0),F(!1),w(!1),_([]),E(0),O){(fe=g.current)==null||fe.call(g),w(!0);return}if(!a){(q=g.current)==null||q.call(g),w(!0);return}if(!L()){const z=new ResizeObserver(()=>{L()&&z.disconnect()});return h.current&&z.observe(h.current),()=>z.disconnect()}},[a,c,L,O]);const B=Xe.useCallback(fe=>{var z;const q=fe>=v.length-1;uC.flushSync(()=>{if(!q){y(fe+1);return}F(!0)}),q&&((z=g.current)==null||z.call(g))},[v]),N=["typewriter-block",v.length>1?"typewriter-lines":"typewriter-host",i??"",x?"is-complete":"",I?"":"is-measuring",O?"is-static":""].filter(Boolean).join(" "),Y={...!x&&!O&&S>0?{height:S,minHeight:S}:void 0},k=e??a;if(!I)return D.jsx("span",{ref:h,className:N,style:Y,children:k});if(O||!a)return D.jsx("span",{ref:h,className:["typewriter","is-static",i??""].filter(Boolean).join(" "),children:k});if(x)return D.jsx("span",{ref:h,className:["typewriter-block","typewriter-host","is-complete",i??""].filter(Boolean).join(" "),children:k});const j=v.length>0?v:[a],ue=!!e&&j.length<=1;return D.jsxs("span",{ref:h,className:N,style:Y,"aria-label":a,children:[D.jsx("span",{className:"typewriter-ghost","aria-hidden":!0,children:k}),D.jsx("span",{className:"typewriter-overlay","aria-hidden":!0,children:j.map((fe,q)=>D.jsx(_C,{text:fe,content:ue?e:void 0,speed:r,cursorWidth:o,waiting:q>R,active:u&&q===R,completed:q<R,holdCursor:d&&q===j.length-1,onComplete:q===R?()=>B(q):void 0},`${q}-${fe}`))})]})}function vC(){return typeof window<"u"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches}function Wp(a,e){const i=(e==null?void 0:e.amount)??.2,[r,o]=Xe.useState(!1);return Xe.useLayoutEffect(()=>{if(r)return;if(vC()){o(!0);return}const c=a.current;if(!c)return;const u=new IntersectionObserver(d=>{for(const m of d)if(m.isIntersecting&&m.intersectionRatio>=Math.min(i,1)){o(!0),u.disconnect();return}},{root:null,threshold:[0,i,Math.min(i+.15,1),1],rootMargin:"0px"});return u.observe(c),()=>u.disconnect()},[i,r,a]),r}function xC(a){return String(a).padStart(2,"0")}function Uu(){return typeof window<"u"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches}const SC=1600,MC=1500,tx=5e3,yC=7e3;function EC(){return tx+Math.random()*(yC-tx)}function bC({text:a,active:e}){const[i,r]=Xe.useState(!1),[o,c]=Xe.useState(0),u=Xe.useRef(null),d=`> ${a}`,m=Xe.useCallback(()=>{u.current&&(clearTimeout(u.current),u.current=null)},[]);Xe.useLayoutEffect(()=>{if(m(),!e){r(!1),c(0);return}if(Uu()){r(!0);return}const g=window.setTimeout(()=>r(!0),MC);return()=>{window.clearTimeout(g),m()}},[e,m]);const h=Xe.useCallback(()=>{Uu()||(m(),u.current=setTimeout(()=>{u.current=null,c(g=>g+1)},EC()))},[m]);return D.jsx("p",{className:"flow-step__example",children:i?D.jsx(Xp,{text:d,className:"flow-step__example-type",speed:42,multiline:"auto",active:!0,holdCursor:!0,onComplete:h},o):D.jsx("span",{className:"flow-step__example-type","aria-hidden":!0,children:d})})}function TC(){const[a,e]=Xe.useState(()=>new Set),[i,r]=Xe.useState(!1),o=Xe.useRef(new Map),c=Xe.useRef(null),u=Wp(c,{amount:.35}),d=Ns.steps.every(v=>a.has(`step-${v.n}`));Xe.useLayoutEffect(()=>{if(Uu()){e(new Set(Ns.steps.map(_=>`step-${_.n}`))),r(!0);return}const v=new IntersectionObserver(_=>{e(S=>{const E=new Set(S);for(const R of _){const y=R.target.dataset.flowKey;y&&R.isIntersecting&&E.add(y)}return E})},{root:null,threshold:[0,.01,.08,.15,.25],rootMargin:"-42% 0px -42% 0px"});for(const _ of o.current.values())v.observe(_);return()=>{v.disconnect()}},[]),Xe.useLayoutEffect(()=>{if(Uu())return;if(!d){r(!1);return}const v=window.setTimeout(()=>{r(!0)},SC);return()=>window.clearTimeout(v)},[d]);const m=Xe.useCallback((v,_)=>{_?o.current.set(v,_):o.current.delete(v)},[]),h=Xe.useCallback(v=>{e(_=>new Set(_).add(v))},[]),g=u&&i;return D.jsx("section",{id:"how",className:"section flow",children:D.jsxs("div",{className:"container",children:[D.jsx("p",{className:"section-kicker",children:Ns.kicker}),D.jsx("h2",{className:"section-title flow__title",children:Ns.title}),D.jsx("div",{className:"flow__chips",children:Ns.chips.map(v=>D.jsx(rS,{label:v.label,status:v.value},v.label))}),D.jsx("div",{className:"flow__steps",role:"list",children:Ns.steps.map((v,_)=>{const S=`step-${v.n}`,E=a.has(S);return D.jsxs("article",{ref:R=>m(S,R),"data-flow-key":S,role:"listitem",className:`flow-step${E?" flow-step--expanded":""}`,"aria-expanded":E,children:[D.jsxs("button",{type:"button",className:"flow-step__head",onClick:()=>h(S),"aria-label":E?`${v.title}, expanded`:`${v.title}, tap to expand`,children:[D.jsxs("span",{className:"flow-step__idx",children:["Step ",xC(v.n)]}),D.jsx("h3",{className:"flow-step__title",children:v.title}),D.jsx("span",{className:"flow-step__chevron","aria-hidden":!0,children:E?"−":"+"})]}),D.jsx("div",{className:"flow-step__expand","aria-hidden":!E,children:D.jsx("div",{className:"flow-step__expand-inner",children:D.jsxs("div",{className:`flow-step__split${_===2?" flow-step__split--supervise":""}`,children:[D.jsx("p",{className:"flow-step__meta",children:v.feature}),D.jsxs("div",{className:"flow-step__copy",children:[D.jsx("p",{className:"flow-step__detail",children:v.body}),D.jsx(bC,{text:v.example,active:E}),D.jsx("div",{className:"flow-step__actions",children:D.jsx("a",{href:Ln.explore,className:"flow-step__open","aria-label":`Explore after ${v.title}`,children:D.jsx("span",{"aria-hidden":!0,className:"flow-step__open-arrow",children:"→"})})})]}),D.jsx("div",{className:`flow-step__sheet${_===2?" flow-step__sheet--log":""}`,"aria-hidden":!E,children:E?_===2?D.jsx(oC,{}):D.jsx(rC,{stepIndex:_,width:280}):null})]})})})]},S)})}),D.jsx("p",{ref:c,className:"flow__outcome",children:g?D.jsx(Xp,{text:Ns.outcome,className:"flow__outcome-type",speed:42,multiline:"auto",active:!0,holdCursor:!0}):D.jsx("span",{className:"flow__outcome-type","aria-hidden":!0,children:Ns.outcome})})]})})}function AC(){return D.jsx("footer",{className:"site-footer",children:D.jsxs("div",{className:"container site-footer__inner",children:[D.jsxs("div",{className:"site-footer__brand",children:[D.jsx("a",{className:"site-footer__logo",href:"#hero","aria-label":"Morpheum home",children:D.jsx(Gp,{size:"sm"})}),D.jsx("p",{className:"site-footer__legal",children:I_.legal})]}),D.jsxs("div",{className:"site-footer__meta",children:[D.jsxs("nav",{className:"site-footer__nav","aria-label":"Footer",children:[_u.map(a=>D.jsx("a",{href:a.href,children:a.label},a.id)),D.jsx("a",{href:Ln.docs,children:"Docs"}),D.jsx("a",{href:Ln.manifesto,children:"Manifesto"}),D.jsx("a",{href:Ln.discord,children:"Discord"}),D.jsx("a",{href:Ln.x,children:"X"})]}),D.jsx("div",{className:"site-footer__labels","aria-label":"Protocol",children:I_.labels.map(a=>D.jsx("span",{className:"site-footer__label",children:a},a))})]})]})})}const nx="!@#$%^&*()_+{}[]|;:,.<>?/0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",lS=50,ix=3500,ax=4e3,RC=1400,CC=1200,wC=4500;function cS(){return typeof window>"u"?!1:window.matchMedia("(prefers-reduced-motion: reduce)").matches}function sx(a){return/[A-Za-z0-9]/.test(a)}function DC(){return nx[Math.floor(Math.random()*nx.length)]??"?"}function LC(a){return Math.random()<.5?DC():a}function uS(a,e,i){const r=[];for(let h=0;h<a.length;h++)sx(a[h]??"")&&r.push(h);const o=r.length,c=o===0?1:Math.min(e/i,1),u=Math.floor(c*o),d=new Set(r.slice(0,u));let m="";for(let h=0;h<a.length;h++){const g=a[h]??"";!sx(g)||d.has(h)?m+=g:m+=LC(g)}return m}function NC(a){return typeof a=="boolean"?{enabled:a,decryptMs:ix,pauseMs:ax}:{enabled:a.enabled??!0,decryptMs:a.decryptMs??ix,pauseMs:a.pauseMs??ax}}function Yn(a,e=!0){const{enabled:i,decryptMs:r,pauseMs:o}=NC(e),c=r+o,[u,d]=Xe.useState(a);return Xe.useEffect(()=>{if(!i||cS()){d(a);return}let m=Date.now();const h=()=>{const v=Date.now();let _=v-m;_>=c&&(m=v,_=0),d(uS(a,_,r))};h();const g=setInterval(h,lS);return()=>{clearInterval(g)}},[a,i,r,c]),u}function rx(a,e={}){const i=e.enabled??!0,r=e.stepDelayMs??RC,o=e.stepDecryptMs??CC,c=e.holdMs??wC,u=a.join("\0"),[d,m]=Xe.useState(a),[h,g]=Xe.useState(()=>a.map(()=>!1));return Xe.useEffect(()=>{const v=u.length>0?u.split("\0"):[];if(!i||cS()||v.length===0){m(v),g(v.map(()=>!0));return}const S=(v.length-1)*r+o+c;let E=Date.now();const R=()=>{const x=Date.now();let F=x-E;F>=S&&(E=x,F=0);const I=[],w=[];for(let O=0;O<v.length;O++){const L=v[O]??"",B=O*r,A=F>=B;if(w.push(A),!A){I.push(L);continue}const N=F-B;I.push(uS(L,N,o))}m(I),g(w)};R();const y=setInterval(R,lS);return()=>{clearInterval(y)}},[u,i,r,o,c]),{displays:d,started:h}}function UC(){const a=[...P_,...P_];return D.jsx("div",{className:"marquee","aria-label":"Live status",children:D.jsx("div",{className:"marquee__viewport",children:D.jsx("div",{className:"marquee__track",children:a.map((e,i)=>D.jsx(rS,{label:e.label,status:e.status,live:"live"in e?e.live:!1},`${e.label}-${i}`))})})})}function OC({showGrid:a=!1,maskAlpha:e=.72,contentOffsetY:i=-50}){const[r,o]=Ls.headline,c=Yn(Ls.eyebrow.label),u=Math.min(1,Math.max(0,e));return D.jsxs("section",{id:"hero",className:"hero","aria-labelledby":"hero-heading",children:[D.jsx("video",{className:"hero__video",autoPlay:!0,muted:!0,loop:!0,playsInline:!0,"aria-hidden":!0,children:D.jsx("source",{src:"/Morm_IntroAnimation_2.mp4",type:"video/mp4"})}),D.jsx("div",{className:"hero__video-mask",style:{"--hero-mask-alpha":u},"aria-hidden":!0}),D.jsx("div",{className:"hero__atmosphere","aria-hidden":!0}),a?D.jsx("div",{className:"hero__grid","aria-hidden":!0}):null,D.jsx("div",{className:"hero__logo-anim","aria-hidden":!0,children:D.jsxs("svg",{className:"hero__logo-anim-svg",viewBox:UR,fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[D.jsx("g",{className:"hero__logo-anim-ghost",children:bp.map(d=>D.jsx("path",{d,fill:"#C8F5A8"},`ghost-${d.slice(0,24)}`))}),D.jsx("g",{className:"hero__logo-anim-fill",children:bp.map(d=>D.jsx("path",{d,fill:"#C8F5A8"},`fill-${d.slice(0,24)}`))})]})}),D.jsx("div",{className:"hero__scanlines","aria-hidden":!0}),D.jsx("div",{className:"hero__grain","aria-hidden":!0}),D.jsx("div",{className:"hero__veil","aria-hidden":!0}),D.jsxs("div",{className:"container hero__content",style:{"--hero-content-offset-y":`${i}px`},children:[D.jsxs("a",{className:"hero__eyebrow hero__eyebrow--matrix",href:Ls.eyebrow.href,"aria-label":`${Ls.eyebrow.label}›`,children:[c,D.jsx("span",{className:"hero__eyebrow-chevron","aria-hidden":!0,children:"›"})]}),D.jsxs("h1",{id:"hero-heading",className:"hero__headline",children:[D.jsx("span",{className:"hero__line hero__line--lead",children:r}),D.jsx("span",{className:"hero__line hero__line--punch",children:o})]}),D.jsxs("div",{className:"hero__ctas",children:[D.jsx(To,{href:Ls.primaryCta.href,variant:"primary",children:Ls.primaryCta.label}),D.jsx(To,{href:Ls.secondaryCta.href,variant:"secondary",children:Ls.secondaryCta.label})]})]}),D.jsx(UC,{})]})}function PC(){const a=Yn(Xd.text);return D.jsx("div",{className:"manifesto-strip",children:D.jsx("a",{className:"manifesto-strip__link manifesto-strip__link--matrix",href:Xd.href,"aria-label":Xd.text,children:a})})}const si={decryptMs:2800,pauseMs:5200},ox={stepDelayMs:1400,stepDecryptMs:1200,holdMs:4500};function fS(a){return String(a+1).padStart(2,"0")}function IC(a,e,i,r){return`${fS(a)}  ${e}  ·  ${i}  ·  ${r}`}function FC(a,e,i){return`${fS(a)}  ${e}  ·  ${i}`}function BC(a){return!a.from||!a.to||!a.asset||!a.amt?null:`${a.from} → ${a.to} · ${a.asset} ${a.amt}`}function hi({label:a,value:e,display:i}){return D.jsxs("div",{className:"persona-card__meta-row",children:[D.jsx("span",{className:"terminal-label",children:a}),D.jsx("span",{className:"terminal-value persona-card__meta-value persona-card__meta-value--matrix","aria-label":e,children:i})]})}function un({value:a,display:e,className:i="terminal-value persona-card__meta-value persona-card__meta-value--matrix",hidden:r=!1}){return D.jsx("p",{className:i,"aria-label":a,"aria-hidden":r||void 0,"data-pending":r?"true":void 0,children:e})}function zC({meta:a}){const e=Yn(a.name,si),i=Yn(a.tx,si),r=Yn(a.hash,si),o=Yn(a.chain,si),c=Yn(a.verified,si),u=Yn(a.rep,si),d=Yn(a.portable,si),m=Yn(a.next,si),h=`tx ${a.tx}`,g=`tx ${i}`,v=`did · ${a.name}`,_=`identity · ${e}`,S=`hash ${a.hash}`,E=`hash ${r}`,R=`chain ${a.chain}`,y=`chain ${o}`,x=`verified ${a.verified} · rep ${a.rep} · portable ${a.portable}`,F=`verified ${c} · rep ${u} · portable ${d}`,I=`next ${a.next}`,w=`next ${m}`,O=`rep ${a.rep} · portable ${a.portable}`,L=`rep ${u} · portable ${d}`,B=`verified ${a.verified}`,A=`verified ${c}`;return D.jsxs("div",{className:"persona-card__meta persona-card__meta--identity",children:[D.jsx("p",{className:"persona-card__meta-kind terminal-label",children:"become an operator"}),D.jsx("p",{className:"terminal-label",children:"on-chain transaction"}),D.jsxs("div",{className:"persona-card__meta-rows",children:[D.jsx(hi,{label:"tx",value:a.tx,display:i}),D.jsx(hi,{label:"hash",value:a.hash,display:r}),D.jsx(hi,{label:"chain",value:a.chain,display:o}),D.jsx(hi,{label:"verified",value:a.verified,display:c}),D.jsx(hi,{label:"rep",value:a.rep,display:u}),D.jsx(hi,{label:"portable",value:a.portable,display:d}),D.jsx(hi,{label:"next",value:a.next,display:m})]}),D.jsxs("div",{className:"persona-card__meta-compact",children:[D.jsx(un,{value:h,display:g}),D.jsx(un,{value:v,display:_,className:"terminal-value persona-card__meta-value--matrix"}),D.jsx(un,{value:S,display:E}),D.jsx(un,{value:R,display:y}),D.jsx(un,{value:x,display:F}),D.jsx(un,{value:I,display:w})]}),D.jsxs("div",{className:"persona-card__meta-xxs",children:[D.jsx(un,{value:h,display:g}),D.jsx(un,{value:a.name,display:e,className:"terminal-value persona-card__meta-value--matrix"}),D.jsx(un,{value:S,display:E}),D.jsx(un,{value:R,display:y}),D.jsx(un,{value:B,display:A}),D.jsx(un,{value:O,display:L}),D.jsx(un,{value:I,display:w})]})]})}function HC({meta:a}){const e=Yn(a.tx,si),i=Yn(a.from,si),r=Yn(a.to,si),o=Yn(a.asset,si),c=Yn(a.amt,si),u=Yn(a.chain,si),d=Yn(a.status,si),m=`${a.from} → ${a.to}`,h=`${i} → ${r}`,g=`tx ${a.tx}`,v=`tx ${e}`,_=`${a.asset} ${a.amt} · ${a.chain}`,S=`${o} ${c} · ${u}`,E=`${a.asset} ${a.amt}`,R=`${o} ${c}`,y=`status ${a.status}`,x=`status ${d}`;return D.jsxs("div",{className:"persona-card__meta persona-card__meta--community",children:[D.jsx("p",{className:"persona-card__meta-kind terminal-label",children:a.label}),D.jsxs("div",{className:"persona-card__meta-rows",children:[D.jsx(hi,{label:"tx",value:a.tx,display:e}),D.jsx(hi,{label:"from",value:a.from,display:i}),D.jsx(hi,{label:"to",value:a.to,display:r}),D.jsx(hi,{label:"asset",value:a.asset,display:o}),D.jsx(hi,{label:"amt",value:a.amt,display:c}),D.jsx(hi,{label:"chain",value:a.chain,display:u}),D.jsx(hi,{label:"status",value:a.status,display:d})]}),D.jsxs("div",{className:"persona-card__meta-compact",children:[D.jsx("p",{className:"terminal-label",children:a.label}),D.jsx(un,{value:g,display:v}),D.jsx(un,{value:m,display:h}),D.jsx(un,{value:_,display:S}),D.jsx(un,{value:y,display:x})]}),D.jsxs("div",{className:"persona-card__meta-xxs",children:[D.jsx("p",{className:"terminal-label",children:a.label}),D.jsx(un,{value:g,display:v}),D.jsx(un,{value:m,display:h}),D.jsx(un,{value:E,display:R}),D.jsx(un,{value:a.chain,display:u}),D.jsx(un,{value:y,display:x})]})]})}function GC({meta:a}){const e=Xe.useRef(null),i=Wp(e,{amount:.15}),r=a.steps.find(h=>h.from&&h.to&&h.asset&&h.amt),o=r?BC(r):null,c=Xe.useMemo(()=>{const h=a.steps.map((g,v)=>IC(v,g.op,g.tx,g.status));return o&&h.push(o),h.push(a.chain),h},[a.steps,a.chain,o]),u=Xe.useMemo(()=>{const h=a.steps.map((g,v)=>FC(v,g.op,g.tx));return o&&h.push(o),h},[a.steps,o]),d=rx(c,{...ox,enabled:i}),m=rx(u,{...ox,enabled:i});return D.jsxs("div",{ref:e,className:"persona-card__meta persona-card__meta--chain",children:[D.jsx("p",{className:"persona-card__meta-kind terminal-label",children:a.label}),D.jsx("div",{className:"persona-card__meta-rows",children:c.map((h,g)=>D.jsx(un,{value:h,display:d.displays[g]??h,hidden:!(d.started[g]??!0)},`rows-${h}`))}),D.jsxs("div",{className:"persona-card__meta-compact",children:[D.jsx("p",{className:"terminal-label",children:a.label}),c.map((h,g)=>D.jsx(un,{value:h,display:d.displays[g]??h,hidden:!(d.started[g]??!0)},`compact-${h}`))]}),D.jsxs("div",{className:"persona-card__meta-xxs",children:[D.jsx("p",{className:"terminal-label",children:a.label}),u.map((h,g)=>D.jsx(un,{value:h,display:m.displays[g]??h,hidden:!(m.started[g]??!0)},`xxs-${h}`))]})]})}function VC({meta:a}){return a.kind==="identity"?D.jsx(zC,{meta:a}):a.kind==="chain"?D.jsx(GC,{meta:a}):D.jsx(HC,{meta:a})}function kC({persona:a}){return D.jsxs("article",{className:`persona-card persona-card--${a.weight}`,children:[D.jsx("h3",{className:"persona-card__title",children:a.title}),D.jsx("ol",{className:"persona-card__steps",children:a.steps.map(e=>D.jsxs("li",{children:[D.jsxs("span",{className:"persona-card__chevron","aria-hidden":!0,children:[">"," "]}),e]},e))}),D.jsx(To,{href:a.cta.href,variant:"ghost",className:"persona-card__cta",children:a.cta.label}),D.jsx(VC,{meta:a.meta})]})}function XC(){return D.jsx("section",{id:"personas",className:"section personas",children:D.jsxs("div",{className:"container",children:[D.jsx("p",{className:"section-kicker",children:Wd.kicker}),D.jsx("h2",{className:"section-title personas__title",children:Wd.title}),D.jsx("div",{className:"personas__grid",children:Wd.items.map(a=>D.jsx(kC,{persona:a},a.title))})]})})}function WC(){const[a,e]=Xe.useState(!1),[i,r]=Xe.useState(!1),[o,c]=Xe.useState("");return Xe.useEffect(()=>{const u=()=>e(window.scrollY>24);return u(),window.addEventListener("scroll",u,{passive:!0}),()=>window.removeEventListener("scroll",u)},[]),Xe.useEffect(()=>{const u=_u.map(m=>m.id),d=new IntersectionObserver(m=>{var g;const h=m.filter(v=>v.isIntersecting).sort((v,_)=>_.intersectionRatio-v.intersectionRatio);(g=h[0])!=null&&g.target.id&&c(h[0].target.id)},{rootMargin:"-30% 0px -55% 0px",threshold:[0,.25,.5]});return u.forEach(m=>{const h=document.getElementById(m);h&&d.observe(h)}),()=>d.disconnect()},[]),Xe.useEffect(()=>(document.body.style.overflow=i?"hidden":"",()=>{document.body.style.overflow=""}),[i]),D.jsxs(D.Fragment,{children:[D.jsx("header",{className:`sticky-header ${a?"sticky-header--solid":""}`,children:D.jsxs("div",{className:"sticky-header__inner",children:[D.jsx("a",{className:"sticky-header__logo",href:"#hero","aria-label":"Morpheum home",children:D.jsx(Gp,{size:"sm",brandName:"Morpheum"})}),D.jsx("nav",{className:"sticky-header__nav","aria-label":"Primary",children:_u.map(u=>D.jsx("a",{href:u.href,className:`sticky-header__link ${o===u.id?"is-active":""}`,children:u.label},u.id))}),D.jsxs("div",{className:"sticky-header__actions",children:[D.jsx("a",{className:"sticky-header__docs",href:Ln.docs,children:"Docs"}),D.jsx(To,{href:Ln.app,variant:"primary",className:"sticky-header__launch",children:"Launch Demo"}),D.jsxs("button",{type:"button",className:"sticky-header__menu","aria-expanded":i,"aria-controls":"mobile-nav","aria-label":i?"Close menu":"Open menu",onClick:()=>r(u=>!u),children:[D.jsx("span",{}),D.jsx("span",{}),D.jsx("span",{})]})]})]})}),D.jsx("div",{id:"mobile-nav",className:`mobile-sheet ${i?"is-open":""}`,hidden:!i,children:D.jsxs("nav",{className:"mobile-sheet__nav","aria-label":"Mobile",children:[_u.map(u=>D.jsx("a",{href:u.href,onClick:()=>r(!1),className:o===u.id?"is-active":"",children:u.label},u.id)),D.jsx("a",{href:Ln.docs,onClick:()=>r(!1),children:"Docs"})]})})]})}function YC(){const a=Xe.useRef(null),e=Wp(a,{amount:.35});return D.jsx("section",{className:"thesis section","aria-label":"Thesis",children:D.jsxs("div",{className:"container thesis__inner",children:[D.jsx("p",{ref:a,className:"thesis__close",children:e?D.jsxs(Xp,{text:O_.close,className:"thesis__close-type",speed:36,multiline:"auto",active:!0,holdCursor:!0,children:["The Agent-native"," ",D.jsx("span",{className:"thesis__close-accent",children:"L1 DEX"})," — ",D.jsx("span",{className:"thesis__close-phrase",children:"faster, safer trades."})]}):D.jsxs("span",{className:"thesis__close-type","aria-hidden":!0,children:["The Agent-native"," ",D.jsx("span",{className:"thesis__close-accent",children:"L1 DEX"})," — ",D.jsx("span",{className:"thesis__close-phrase",children:"faster, safer trades."})]})}),D.jsx("p",{className:"section-kicker",children:"Two Risks in Agentic Economy"}),D.jsx("div",{className:"thesis__risks",children:O_.risks.map(i=>D.jsxs("article",{className:"thesis__pair",children:[D.jsxs("div",{className:"thesis__risk",children:[D.jsx("p",{className:"thesis__label",children:"Risk"}),D.jsx("h3",{className:"thesis__risk-title",children:i.risk}),D.jsxs("p",{className:"thesis__failure",children:[D.jsx("span",{"aria-hidden":!0,children:"> "}),i.failure]})]}),D.jsxs("div",{className:"thesis__solve",children:[D.jsx("p",{className:"thesis__label thesis__label--solve",children:"Solution"}),D.jsx("p",{className:"thesis__solve-body",children:i.solve})]})]},i.risk))})]})})}function qC(){return D.jsxs("div",{className:"page",children:[D.jsx("a",{className:"skip-link",href:"#hero",children:"Skip to content"}),D.jsx(PC,{}),D.jsx(WC,{}),D.jsxs("main",{className:"page__main",children:[D.jsx(eC,{cardAlpha:0,modalChassisAlpha:.7,cardSize:.8}),D.jsx(OC,{contentOffsetY:0,maskAlpha:.5}),D.jsx(YC,{}),D.jsx(Ey,{}),D.jsx(XC,{}),D.jsx(TC,{}),D.jsx(Ty,{}),D.jsx(yy,{})]}),D.jsx(AC,{})]})}Sy.createRoot(document.getElementById("root")).render(D.jsx(Xe.StrictMode,{children:D.jsx(qC,{})}));
