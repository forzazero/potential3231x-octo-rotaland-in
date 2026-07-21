(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function i(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(o){if(o.ep)return;o.ep=!0;const c=i(o);fetch(o.href,c)}})();var Gd={exports:{}},Sl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var R_;function my(){if(R_)return Sl;R_=1;var a=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,o,c){var u=null;if(c!==void 0&&(u=""+c),o.key!==void 0&&(u=""+o.key),"key"in o){c={};for(var d in o)d!=="key"&&(c[d]=o[d])}else c=o;return o=c.ref,{$$typeof:a,type:r,key:u,ref:o!==void 0?o:null,props:c}}return Sl.Fragment=e,Sl.jsx=i,Sl.jsxs=i,Sl}var C_;function gy(){return C_||(C_=1,Gd.exports=my()),Gd.exports}var D=gy(),Vd={exports:{}},ut={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var w_;function _y(){if(w_)return ut;w_=1;var a=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),u=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),_=Symbol.iterator;function M(I){return I===null||typeof I!="object"?null:(I=_&&I[_]||I["@@iterator"],typeof I=="function"?I:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},R=Object.assign,y={};function x(I,K,Te){this.props=I,this.context=K,this.refs=y,this.updater=Te||b}x.prototype.isReactComponent={},x.prototype.setState=function(I,K){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,K,"setState")},x.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function O(){}O.prototype=x.prototype;function P(I,K,Te){this.props=I,this.context=K,this.refs=y,this.updater=Te||b}var C=P.prototype=new O;C.constructor=P,R(C,x.prototype),C.isPureReactComponent=!0;var N=Array.isArray;function L(){}var B={H:null,A:null,T:null,S:null},A=Object.prototype.hasOwnProperty;function U(I,K,Te){var Ae=Te.ref;return{$$typeof:a,type:I,key:K,ref:Ae!==void 0?Ae:null,props:Te}}function X(I,K){return U(I.type,K,I.props)}function k(I){return typeof I=="object"&&I!==null&&I.$$typeof===a}function Z(I){var K={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(Te){return K[Te]})}var me=/\/+/g;function ue(I,K){return typeof I=="object"&&I!==null&&I.key!=null?Z(""+I.key):K.toString(36)}function q(I){switch(I.status){case"fulfilled":return I.value;case"rejected":throw I.reason;default:switch(typeof I.status=="string"?I.then(L,L):(I.status="pending",I.then(function(K){I.status==="pending"&&(I.status="fulfilled",I.value=K)},function(K){I.status==="pending"&&(I.status="rejected",I.reason=K)})),I.status){case"fulfilled":return I.value;case"rejected":throw I.reason}}throw I}function z(I,K,Te,Ae,De){var ae=typeof I;(ae==="undefined"||ae==="boolean")&&(I=null);var Me=!1;if(I===null)Me=!0;else switch(ae){case"bigint":case"string":case"number":Me=!0;break;case"object":switch(I.$$typeof){case a:case e:Me=!0;break;case g:return Me=I._init,z(Me(I._payload),K,Te,Ae,De)}}if(Me)return De=De(I),Me=Ae===""?"."+ue(I,0):Ae,N(De)?(Te="",Me!=null&&(Te=Me.replace(me,"$&/")+"/"),z(De,K,Te,"",function(nt){return nt})):De!=null&&(k(De)&&(De=X(De,Te+(De.key==null||I&&I.key===De.key?"":(""+De.key).replace(me,"$&/")+"/")+Me)),K.push(De)),1;Me=0;var ge=Ae===""?".":Ae+":";if(N(I))for(var We=0;We<I.length;We++)Ae=I[We],ae=ge+ue(Ae,We),Me+=z(Ae,K,Te,ae,De);else if(We=M(I),typeof We=="function")for(I=We.call(I),We=0;!(Ae=I.next()).done;)Ae=Ae.value,ae=ge+ue(Ae,We++),Me+=z(Ae,K,Te,ae,De);else if(ae==="object"){if(typeof I.then=="function")return z(q(I),K,Te,Ae,De);throw K=String(I),Error("Objects are not valid as a React child (found: "+(K==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":K)+"). If you meant to render a collection of children, use an array instead.")}return Me}function H(I,K,Te){if(I==null)return I;var Ae=[],De=0;return z(I,Ae,"","",function(ae){return K.call(Te,ae,De++)}),Ae}function $(I){if(I._status===-1){var K=I._result;K=K(),K.then(function(Te){(I._status===0||I._status===-1)&&(I._status=1,I._result=Te)},function(Te){(I._status===0||I._status===-1)&&(I._status=2,I._result=Te)}),I._status===-1&&(I._status=0,I._result=K)}if(I._status===1)return I._result.default;throw I._result}var he=typeof reportError=="function"?reportError:function(I){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var K=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof I=="object"&&I!==null&&typeof I.message=="string"?String(I.message):String(I),error:I});if(!window.dispatchEvent(K))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",I);return}console.error(I)},Se={map:H,forEach:function(I,K,Te){H(I,function(){K.apply(this,arguments)},Te)},count:function(I){var K=0;return H(I,function(){K++}),K},toArray:function(I){return H(I,function(K){return K})||[]},only:function(I){if(!k(I))throw Error("React.Children.only expected to receive a single React element child.");return I}};return ut.Activity=v,ut.Children=Se,ut.Component=x,ut.Fragment=i,ut.Profiler=o,ut.PureComponent=P,ut.StrictMode=r,ut.Suspense=m,ut.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=B,ut.__COMPILER_RUNTIME={__proto__:null,c:function(I){return B.H.useMemoCache(I)}},ut.cache=function(I){return function(){return I.apply(null,arguments)}},ut.cacheSignal=function(){return null},ut.cloneElement=function(I,K,Te){if(I==null)throw Error("The argument must be a React element, but you passed "+I+".");var Ae=R({},I.props),De=I.key;if(K!=null)for(ae in K.key!==void 0&&(De=""+K.key),K)!A.call(K,ae)||ae==="key"||ae==="__self"||ae==="__source"||ae==="ref"&&K.ref===void 0||(Ae[ae]=K[ae]);var ae=arguments.length-2;if(ae===1)Ae.children=Te;else if(1<ae){for(var Me=Array(ae),ge=0;ge<ae;ge++)Me[ge]=arguments[ge+2];Ae.children=Me}return U(I.type,De,Ae)},ut.createContext=function(I){return I={$$typeof:u,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null},I.Provider=I,I.Consumer={$$typeof:c,_context:I},I},ut.createElement=function(I,K,Te){var Ae,De={},ae=null;if(K!=null)for(Ae in K.key!==void 0&&(ae=""+K.key),K)A.call(K,Ae)&&Ae!=="key"&&Ae!=="__self"&&Ae!=="__source"&&(De[Ae]=K[Ae]);var Me=arguments.length-2;if(Me===1)De.children=Te;else if(1<Me){for(var ge=Array(Me),We=0;We<Me;We++)ge[We]=arguments[We+2];De.children=ge}if(I&&I.defaultProps)for(Ae in Me=I.defaultProps,Me)De[Ae]===void 0&&(De[Ae]=Me[Ae]);return U(I,ae,De)},ut.createRef=function(){return{current:null}},ut.forwardRef=function(I){return{$$typeof:d,render:I}},ut.isValidElement=k,ut.lazy=function(I){return{$$typeof:g,_payload:{_status:-1,_result:I},_init:$}},ut.memo=function(I,K){return{$$typeof:h,type:I,compare:K===void 0?null:K}},ut.startTransition=function(I){var K=B.T,Te={};B.T=Te;try{var Ae=I(),De=B.S;De!==null&&De(Te,Ae),typeof Ae=="object"&&Ae!==null&&typeof Ae.then=="function"&&Ae.then(L,he)}catch(ae){he(ae)}finally{K!==null&&Te.types!==null&&(K.types=Te.types),B.T=K}},ut.unstable_useCacheRefresh=function(){return B.H.useCacheRefresh()},ut.use=function(I){return B.H.use(I)},ut.useActionState=function(I,K,Te){return B.H.useActionState(I,K,Te)},ut.useCallback=function(I,K){return B.H.useCallback(I,K)},ut.useContext=function(I){return B.H.useContext(I)},ut.useDebugValue=function(){},ut.useDeferredValue=function(I,K){return B.H.useDeferredValue(I,K)},ut.useEffect=function(I,K){return B.H.useEffect(I,K)},ut.useEffectEvent=function(I){return B.H.useEffectEvent(I)},ut.useId=function(){return B.H.useId()},ut.useImperativeHandle=function(I,K,Te){return B.H.useImperativeHandle(I,K,Te)},ut.useInsertionEffect=function(I,K){return B.H.useInsertionEffect(I,K)},ut.useLayoutEffect=function(I,K){return B.H.useLayoutEffect(I,K)},ut.useMemo=function(I,K){return B.H.useMemo(I,K)},ut.useOptimistic=function(I,K){return B.H.useOptimistic(I,K)},ut.useReducer=function(I,K,Te){return B.H.useReducer(I,K,Te)},ut.useRef=function(I){return B.H.useRef(I)},ut.useState=function(I){return B.H.useState(I)},ut.useSyncExternalStore=function(I,K,Te){return B.H.useSyncExternalStore(I,K,Te)},ut.useTransition=function(){return B.H.useTransition()},ut.version="19.2.7",ut}var D_;function wp(){return D_||(D_=1,Vd.exports=_y()),Vd.exports}var Xe=wp(),kd={exports:{}},Ml={},Xd={exports:{}},Wd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var L_;function vy(){return L_||(L_=1,(function(a){function e(z,H){var $=z.length;z.push(H);e:for(;0<$;){var he=$-1>>>1,Se=z[he];if(0<o(Se,H))z[he]=H,z[$]=Se,$=he;else break e}}function i(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var H=z[0],$=z.pop();if($!==H){z[0]=$;e:for(var he=0,Se=z.length,I=Se>>>1;he<I;){var K=2*(he+1)-1,Te=z[K],Ae=K+1,De=z[Ae];if(0>o(Te,$))Ae<Se&&0>o(De,Te)?(z[he]=De,z[Ae]=$,he=Ae):(z[he]=Te,z[K]=$,he=K);else if(Ae<Se&&0>o(De,$))z[he]=De,z[Ae]=$,he=Ae;else break e}}return H}function o(z,H){var $=z.sortIndex-H.sortIndex;return $!==0?$:z.id-H.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;a.unstable_now=function(){return c.now()}}else{var u=Date,d=u.now();a.unstable_now=function(){return u.now()-d}}var m=[],h=[],g=1,v=null,_=3,M=!1,b=!1,R=!1,y=!1,x=typeof setTimeout=="function"?setTimeout:null,O=typeof clearTimeout=="function"?clearTimeout:null,P=typeof setImmediate<"u"?setImmediate:null;function C(z){for(var H=i(h);H!==null;){if(H.callback===null)r(h);else if(H.startTime<=z)r(h),H.sortIndex=H.expirationTime,e(m,H);else break;H=i(h)}}function N(z){if(R=!1,C(z),!b)if(i(m)!==null)b=!0,L||(L=!0,Z());else{var H=i(h);H!==null&&q(N,H.startTime-z)}}var L=!1,B=-1,A=5,U=-1;function X(){return y?!0:!(a.unstable_now()-U<A)}function k(){if(y=!1,L){var z=a.unstable_now();U=z;var H=!0;try{e:{b=!1,R&&(R=!1,O(B),B=-1),M=!0;var $=_;try{t:{for(C(z),v=i(m);v!==null&&!(v.expirationTime>z&&X());){var he=v.callback;if(typeof he=="function"){v.callback=null,_=v.priorityLevel;var Se=he(v.expirationTime<=z);if(z=a.unstable_now(),typeof Se=="function"){v.callback=Se,C(z),H=!0;break t}v===i(m)&&r(m),C(z)}else r(m);v=i(m)}if(v!==null)H=!0;else{var I=i(h);I!==null&&q(N,I.startTime-z),H=!1}}break e}finally{v=null,_=$,M=!1}H=void 0}}finally{H?Z():L=!1}}}var Z;if(typeof P=="function")Z=function(){P(k)};else if(typeof MessageChannel<"u"){var me=new MessageChannel,ue=me.port2;me.port1.onmessage=k,Z=function(){ue.postMessage(null)}}else Z=function(){x(k,0)};function q(z,H){B=x(function(){z(a.unstable_now())},H)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(z){z.callback=null},a.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<z?Math.floor(1e3/z):5},a.unstable_getCurrentPriorityLevel=function(){return _},a.unstable_next=function(z){switch(_){case 1:case 2:case 3:var H=3;break;default:H=_}var $=_;_=H;try{return z()}finally{_=$}},a.unstable_requestPaint=function(){y=!0},a.unstable_runWithPriority=function(z,H){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var $=_;_=z;try{return H()}finally{_=$}},a.unstable_scheduleCallback=function(z,H,$){var he=a.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?he+$:he):$=he,z){case 1:var Se=-1;break;case 2:Se=250;break;case 5:Se=1073741823;break;case 4:Se=1e4;break;default:Se=5e3}return Se=$+Se,z={id:g++,callback:H,priorityLevel:z,startTime:$,expirationTime:Se,sortIndex:-1},$>he?(z.sortIndex=$,e(h,z),i(m)===null&&z===i(h)&&(R?(O(B),B=-1):R=!0,q(N,$-he))):(z.sortIndex=Se,e(m,z),b||M||(b=!0,L||(L=!0,Z()))),z},a.unstable_shouldYield=X,a.unstable_wrapCallback=function(z){var H=_;return function(){var $=_;_=H;try{return z.apply(this,arguments)}finally{_=$}}}})(Wd)),Wd}var N_;function xy(){return N_||(N_=1,Xd.exports=vy()),Xd.exports}var Yd={exports:{}},Qn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var U_;function Sy(){if(U_)return Qn;U_=1;var a=wp();function e(m){var h="https://react.dev/errors/"+m;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)h+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},o=Symbol.for("react.portal");function c(m,h,g){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:v==null?null:""+v,children:m,containerInfo:h,implementation:g}}var u=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,h){if(m==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return Qn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Qn.createPortal=function(m,h){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(e(299));return c(m,h,null,g)},Qn.flushSync=function(m){var h=u.T,g=r.p;try{if(u.T=null,r.p=2,m)return m()}finally{u.T=h,r.p=g,r.d.f()}},Qn.preconnect=function(m,h){typeof m=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,r.d.C(m,h))},Qn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},Qn.preinit=function(m,h){if(typeof m=="string"&&h&&typeof h.as=="string"){var g=h.as,v=d(g,h.crossOrigin),_=typeof h.integrity=="string"?h.integrity:void 0,M=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;g==="style"?r.d.S(m,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:v,integrity:_,fetchPriority:M}):g==="script"&&r.d.X(m,{crossOrigin:v,integrity:_,fetchPriority:M,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},Qn.preinitModule=function(m,h){if(typeof m=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var g=d(h.as,h.crossOrigin);r.d.M(m,{crossOrigin:g,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&r.d.M(m)},Qn.preload=function(m,h){if(typeof m=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var g=h.as,v=d(g,h.crossOrigin);r.d.L(m,g,{crossOrigin:v,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},Qn.preloadModule=function(m,h){if(typeof m=="string")if(h){var g=d(h.as,h.crossOrigin);r.d.m(m,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:g,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else r.d.m(m)},Qn.requestFormReset=function(m){r.d.r(m)},Qn.unstable_batchedUpdates=function(m,h){return m(h)},Qn.useFormState=function(m,h,g){return u.H.useFormState(m,h,g)},Qn.useFormStatus=function(){return u.H.useHostTransitionStatus()},Qn.version="19.2.7",Qn}var O_;function fx(){if(O_)return Yd.exports;O_=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(e){console.error(e)}}return a(),Yd.exports=Sy(),Yd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var P_;function My(){if(P_)return Ml;P_=1;var a=xy(),e=wp(),i=fx();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)n+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,s=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(s=n.return),t=n.return;while(t)}return n.tag===3?s:null}function u(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function d(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(r(188))}function h(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(r(188));return n!==t?null:t}for(var s=t,l=n;;){var f=s.return;if(f===null)break;var p=f.alternate;if(p===null){if(l=f.return,l!==null){s=l;continue}break}if(f.child===p.child){for(p=f.child;p;){if(p===s)return m(f),t;if(p===l)return m(f),n;p=p.sibling}throw Error(r(188))}if(s.return!==l.return)s=f,l=p;else{for(var S=!1,w=f.child;w;){if(w===s){S=!0,s=f,l=p;break}if(w===l){S=!0,l=f,s=p;break}w=w.sibling}if(!S){for(w=p.child;w;){if(w===s){S=!0,s=p,l=f;break}if(w===l){S=!0,l=p,s=f;break}w=w.sibling}if(!S)throw Error(r(189))}}if(s.alternate!==l)throw Error(r(190))}if(s.tag!==3)throw Error(r(188));return s.stateNode.current===s?t:n}function g(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=g(t),n!==null)return n;t=t.sibling}return null}var v=Object.assign,_=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),R=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),O=Symbol.for("react.consumer"),P=Symbol.for("react.context"),C=Symbol.for("react.forward_ref"),N=Symbol.for("react.suspense"),L=Symbol.for("react.suspense_list"),B=Symbol.for("react.memo"),A=Symbol.for("react.lazy"),U=Symbol.for("react.activity"),X=Symbol.for("react.memo_cache_sentinel"),k=Symbol.iterator;function Z(t){return t===null||typeof t!="object"?null:(t=k&&t[k]||t["@@iterator"],typeof t=="function"?t:null)}var me=Symbol.for("react.client.reference");function ue(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===me?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case R:return"Fragment";case x:return"Profiler";case y:return"StrictMode";case N:return"Suspense";case L:return"SuspenseList";case U:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case b:return"Portal";case P:return t.displayName||"Context";case O:return(t._context.displayName||"Context")+".Consumer";case C:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case B:return n=t.displayName||null,n!==null?n:ue(t.type)||"Memo";case A:n=t._payload,t=t._init;try{return ue(t(n))}catch{}}return null}var q=Array.isArray,z=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,$={pending:!1,data:null,method:null,action:null},he=[],Se=-1;function I(t){return{current:t}}function K(t){0>Se||(t.current=he[Se],he[Se]=null,Se--)}function Te(t,n){Se++,he[Se]=t.current,t.current=n}var Ae=I(null),De=I(null),ae=I(null),Me=I(null);function ge(t,n){switch(Te(ae,n),Te(De,t),Te(Ae,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?Kg(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=Kg(n),t=Qg(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}K(Ae),Te(Ae,t)}function We(){K(Ae),K(De),K(ae)}function nt(t){t.memoizedState!==null&&Te(Me,t);var n=Ae.current,s=Qg(n,t.type);n!==s&&(Te(De,t),Te(Ae,s))}function Qe(t){De.current===t&&(K(Ae),K(De)),Me.current===t&&(K(Me),gl._currentValue=$)}var vt,ht;function xt(t){if(vt===void 0)try{throw Error()}catch(s){var n=s.stack.trim().match(/\n( *(at )?)/);vt=n&&n[1]||"",ht=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+vt+t+ht}var at=!1;function ct(t,n){if(!t||at)return"";at=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(n){var be=function(){throw Error()};if(Object.defineProperty(be.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(be,[])}catch(de){var ce=de}Reflect.construct(t,[],be)}else{try{be.call()}catch(de){ce=de}t.call(be.prototype)}}else{try{throw Error()}catch(de){ce=de}(be=t())&&typeof be.catch=="function"&&be.catch(function(){})}}catch(de){if(de&&ce&&typeof de.stack=="string")return[de.stack,ce.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var p=l.DetermineComponentFrameRoot(),S=p[0],w=p[1];if(S&&w){var V=S.split(`
`),oe=w.split(`
`);for(f=l=0;l<V.length&&!V[l].includes("DetermineComponentFrameRoot");)l++;for(;f<oe.length&&!oe[f].includes("DetermineComponentFrameRoot");)f++;if(l===V.length||f===oe.length)for(l=V.length-1,f=oe.length-1;1<=l&&0<=f&&V[l]!==oe[f];)f--;for(;1<=l&&0<=f;l--,f--)if(V[l]!==oe[f]){if(l!==1||f!==1)do if(l--,f--,0>f||V[l]!==oe[f]){var xe=`
`+V[l].replace(" at new "," at ");return t.displayName&&xe.includes("<anonymous>")&&(xe=xe.replace("<anonymous>",t.displayName)),xe}while(1<=l&&0<=f);break}}}finally{at=!1,Error.prepareStackTrace=s}return(s=t?t.displayName||t.name:"")?xt(s):""}function Qt(t,n){switch(t.tag){case 26:case 27:case 5:return xt(t.type);case 16:return xt("Lazy");case 13:return t.child!==n&&n!==null?xt("Suspense Fallback"):xt("Suspense");case 19:return xt("SuspenseList");case 0:case 15:return ct(t.type,!1);case 11:return ct(t.type.render,!1);case 1:return ct(t.type,!0);case 31:return xt("Activity");default:return""}}function Jt(t){try{var n="",s=null;do n+=Qt(t,s),s=t,t=t.return;while(t);return n}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var qt=Object.prototype.hasOwnProperty,tn=a.unstable_scheduleCallback,Vt=a.unstable_cancelCallback,rn=a.unstable_shouldYield,j=a.unstable_requestPaint,Tt=a.unstable_now,At=a.unstable_getCurrentPriorityLevel,F=a.unstable_ImmediatePriority,E=a.unstable_UserBlockingPriority,J=a.unstable_NormalPriority,re=a.unstable_LowPriority,le=a.unstable_IdlePriority,Ce=a.log,Le=a.unstable_setDisableYieldValue,pe=null,fe=null;function we(t){if(typeof Ce=="function"&&Le(t),fe&&typeof fe.setStrictMode=="function")try{fe.setStrictMode(pe,t)}catch{}}var Ge=Math.clz32?Math.clz32:$e,Fe=Math.log,Ie=Math.LN2;function $e(t){return t>>>=0,t===0?32:31-(Fe(t)/Ie|0)|0}var tt=256,rt=262144,W=4194304;function Ne(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function ve(t,n,s){var l=t.pendingLanes;if(l===0)return 0;var f=0,p=t.suspendedLanes,S=t.pingedLanes;t=t.warmLanes;var w=l&134217727;return w!==0?(l=w&~p,l!==0?f=Ne(l):(S&=w,S!==0?f=Ne(S):s||(s=w&~t,s!==0&&(f=Ne(s))))):(w=l&~p,w!==0?f=Ne(w):S!==0?f=Ne(S):s||(s=l&~t,s!==0&&(f=Ne(s)))),f===0?0:n!==0&&n!==f&&(n&p)===0&&(p=f&-f,s=n&-n,p>=s||p===32&&(s&4194048)!==0)?n:f}function Oe(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function Pe(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ee(){var t=W;return W<<=1,(W&62914560)===0&&(W=4194304),t}function Ve(t){for(var n=[],s=0;31>s;s++)n.push(t);return n}function Ze(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function nn(t,n,s,l,f,p){var S=t.pendingLanes;t.pendingLanes=s,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=s,t.entangledLanes&=s,t.errorRecoveryDisabledLanes&=s,t.shellSuspendCounter=0;var w=t.entanglements,V=t.expirationTimes,oe=t.hiddenUpdates;for(s=S&~s;0<s;){var xe=31-Ge(s),be=1<<xe;w[xe]=0,V[xe]=-1;var ce=oe[xe];if(ce!==null)for(oe[xe]=null,xe=0;xe<ce.length;xe++){var de=ce[xe];de!==null&&(de.lane&=-536870913)}s&=~be}l!==0&&Dt(t,l,0),p!==0&&f===0&&t.tag!==0&&(t.suspendedLanes|=p&~(S&~n))}function Dt(t,n,s){t.pendingLanes|=n,t.suspendedLanes&=~n;var l=31-Ge(n);t.entangledLanes|=n,t.entanglements[l]=t.entanglements[l]|1073741824|s&261930}function ti(t,n){var s=t.entangledLanes|=n;for(t=t.entanglements;s;){var l=31-Ge(s),f=1<<l;f&n|t[l]&n&&(t[l]|=n),s&=~f}}function In(t,n){var s=n&-n;return s=(s&42)!==0?1:la(s),(s&(t.suspendedLanes|n))!==0?0:s}function la(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Ra(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function ss(){var t=H.p;return t!==0?t:(t=window.event,t===void 0?32:S_(t.type))}function Ca(t,n){var s=H.p;try{return H.p=t,n()}finally{H.p=s}}var mi=Math.random().toString(36).slice(2),mn="__reactFiber$"+mi,_n="__reactProps$"+mi,zn="__reactContainer$"+mi,ca="__reactEvents$"+mi,Ws="__reactListeners$"+mi,Ys="__reactHandles$"+mi,ua="__reactResources$"+mi,ji="__reactMarker$"+mi;function Zi(t){delete t[mn],delete t[_n],delete t[ca],delete t[Ws],delete t[Ys]}function wi(t){var n=t[mn];if(n)return n;for(var s=t.parentNode;s;){if(n=s[zn]||s[mn]){if(s=n.alternate,n.child!==null||s!==null&&s.child!==null)for(t=a_(t);t!==null;){if(s=t[mn])return s;t=a_(t)}return n}t=s,s=t.parentNode}return null}function Di(t){if(t=t[mn]||t[zn]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function Li(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function Ki(t){var n=t[ua];return n||(n=t[ua]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function _e(t){t[ji]=!0}var Be=new Set,T={};function G(t,n){ee(t,n),ee(t+"Capture",n)}function ee(t,n){for(T[t]=n,t=0;t<n.length;t++)Be.add(n[t])}var Q=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ne={},Ue={};function He(t){return qt.call(Ue,t)?!0:qt.call(ne,t)?!1:Q.test(t)?Ue[t]=!0:(ne[t]=!0,!1)}function Re(t,n,s){if(He(n))if(s===null)t.removeAttribute(n);else{switch(typeof s){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var l=n.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+s)}}function ke(t,n,s){if(s===null)t.removeAttribute(n);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+s)}}function ze(t,n,s,l){if(l===null)t.removeAttribute(s);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(s);return}t.setAttributeNS(n,s,""+l)}}function je(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function lt(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Ke(t,n,s){var l=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var f=l.get,p=l.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return f.call(this)},set:function(S){s=""+S,p.call(this,S)}}),Object.defineProperty(t,n,{enumerable:l.enumerable}),{getValue:function(){return s},setValue:function(S){s=""+S},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function yt(t){if(!t._valueTracker){var n=lt(t)?"checked":"value";t._valueTracker=Ke(t,n,""+t[n])}}function $t(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var s=n.getValue(),l="";return t&&(l=lt(t)?t.checked?"true":"false":t.value),t=l,t!==s?(n.setValue(t),!0):!1}function Ft(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Nt=/[\n"\\]/g;function wt(t){return t.replace(Nt,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Ye(t,n,s,l,f,p,S,w){t.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?t.type=S:t.removeAttribute("type"),n!=null?S==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+je(n)):t.value!==""+je(n)&&(t.value=""+je(n)):S!=="submit"&&S!=="reset"||t.removeAttribute("value"),n!=null?mt(t,S,je(n)):s!=null?mt(t,S,je(s)):l!=null&&t.removeAttribute("value"),f==null&&p!=null&&(t.defaultChecked=!!p),f!=null&&(t.checked=f&&typeof f!="function"&&typeof f!="symbol"),w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"?t.name=""+je(w):t.removeAttribute("name")}function Tn(t,n,s,l,f,p,S,w){if(p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"&&(t.type=p),n!=null||s!=null){if(!(p!=="submit"&&p!=="reset"||n!=null)){yt(t);return}s=s!=null?""+je(s):"",n=n!=null?""+je(n):s,w||n===t.value||(t.value=n),t.defaultValue=n}l=l??f,l=typeof l!="function"&&typeof l!="symbol"&&!!l,t.checked=w?t.checked:!!l,t.defaultChecked=!!l,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(t.name=S),yt(t)}function mt(t,n,s){n==="number"&&Ft(t.ownerDocument)===t||t.defaultValue===""+s||(t.defaultValue=""+s)}function gn(t,n,s,l){if(t=t.options,n){n={};for(var f=0;f<s.length;f++)n["$"+s[f]]=!0;for(s=0;s<t.length;s++)f=n.hasOwnProperty("$"+t[s].value),t[s].selected!==f&&(t[s].selected=f),f&&l&&(t[s].defaultSelected=!0)}else{for(s=""+je(s),n=null,f=0;f<t.length;f++){if(t[f].value===s){t[f].selected=!0,l&&(t[f].defaultSelected=!0);return}n!==null||t[f].disabled||(n=t[f])}n!==null&&(n.selected=!0)}}function Zn(t,n,s){if(n!=null&&(n=""+je(n),n!==t.value&&(t.value=n),s==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=s!=null?""+je(s):""}function Hn(t,n,s,l){if(n==null){if(l!=null){if(s!=null)throw Error(r(92));if(q(l)){if(1<l.length)throw Error(r(93));l=l[0]}s=l}s==null&&(s=""),n=s}s=je(n),t.defaultValue=s,l=t.textContent,l===s&&l!==""&&l!==null&&(t.value=l),yt(t)}function vn(t,n){if(n){var s=t.firstChild;if(s&&s===t.lastChild&&s.nodeType===3){s.nodeValue=n;return}}t.textContent=n}var Ut=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function an(t,n,s){var l=n.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?l?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":l?t.setProperty(n,s):typeof s!="number"||s===0||Ut.has(n)?n==="float"?t.cssFloat=s:t[n]=(""+s).trim():t[n]=s+"px"}function gi(t,n,s){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,s!=null){for(var l in s)!s.hasOwnProperty(l)||n!=null&&n.hasOwnProperty(l)||(l.indexOf("--")===0?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="");for(var f in n)l=n[f],n.hasOwnProperty(f)&&s[f]!==l&&an(t,f,l)}else for(var p in n)n.hasOwnProperty(p)&&an(t,p,n[p])}function Bt(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Gn=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),fa=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function wa(t){return fa.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function _i(){}var qs=null;function Po(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Da=null,La=null;function Xl(t){var n=Di(t);if(n&&(t=n.stateNode)){var s=t[_n]||null;e:switch(t=n.stateNode,n.type){case"input":if(Ye(t,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),n=s.name,s.type==="radio"&&n!=null){for(s=t;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+wt(""+n)+'"][type="radio"]'),n=0;n<s.length;n++){var l=s[n];if(l!==t&&l.form===t.form){var f=l[_n]||null;if(!f)throw Error(r(90));Ye(l,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(n=0;n<s.length;n++)l=s[n],l.form===t.form&&$t(l)}break e;case"textarea":Zn(t,s.value,s.defaultValue);break e;case"select":n=s.value,n!=null&&gn(t,!!s.multiple,n,!1)}}}var rs=!1;function js(t,n,s){if(rs)return t(n,s);rs=!0;try{var l=t(n);return l}finally{if(rs=!1,(Da!==null||La!==null)&&(wc(),Da&&(n=Da,t=La,La=Da=null,Xl(n),t)))for(n=0;n<t.length;n++)Xl(t[n])}}function Zs(t,n){var s=t.stateNode;if(s===null)return null;var l=s[_n]||null;if(l===null)return null;s=l[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(s&&typeof s!="function")throw Error(r(231,n,typeof s));return s}var Qi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Wl=!1;if(Qi)try{var os={};Object.defineProperty(os,"passive",{get:function(){Wl=!0}}),window.addEventListener("test",os,os),window.removeEventListener("test",os,os)}catch{Wl=!1}var Ni=null,Io=null,Cr=null;function Yl(){if(Cr)return Cr;var t,n=Io,s=n.length,l,f="value"in Ni?Ni.value:Ni.textContent,p=f.length;for(t=0;t<s&&n[t]===f[t];t++);var S=s-t;for(l=1;l<=S&&n[s-l]===f[p-l];l++);return Cr=f.slice(t,1<l?1-l:void 0)}function Ks(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Qs(){return!0}function zt(){return!1}function on(t){function n(s,l,f,p,S){this._reactName=s,this._targetInst=f,this.type=l,this.nativeEvent=p,this.target=S,this.currentTarget=null;for(var w in t)t.hasOwnProperty(w)&&(s=t[w],this[w]=s?s(p):p[w]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?Qs:zt,this.isPropagationStopped=zt,this}return v(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=Qs)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=Qs)},persist:function(){},isPersistent:Qs}),n}var Kn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Nn=on(Kn),ri=v({},Kn,{view:0,detail:0}),oi=on(ri),da,ls,Ui,Ji=v({},ri,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Wu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ui&&(Ui&&t.type==="mousemove"?(da=t.screenX-Ui.screenX,ls=t.screenY-Ui.screenY):ls=da=0,Ui=t),da)},movementY:function(t){return"movementY"in t?t.movementY:ls}}),wr=on(Ji),ql=v({},Ji,{dataTransfer:0}),mS=on(ql),gS=v({},ri,{relatedTarget:0}),Xu=on(gS),_S=v({},Kn,{animationName:0,elapsedTime:0,pseudoElement:0}),vS=on(_S),xS=v({},Kn,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),SS=on(xS),MS=v({},Kn,{data:0}),em=on(MS),yS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ES={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},bS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function TS(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=bS[t])?!!n[t]:!1}function Wu(){return TS}var AS=v({},ri,{key:function(t){if(t.key){var n=yS[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Ks(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?ES[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Wu,charCode:function(t){return t.type==="keypress"?Ks(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ks(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),RS=on(AS),CS=v({},Ji,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),tm=on(CS),wS=v({},ri,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Wu}),DS=on(wS),LS=v({},Kn,{propertyName:0,elapsedTime:0,pseudoElement:0}),NS=on(LS),US=v({},Ji,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),OS=on(US),PS=v({},Kn,{newState:0,oldState:0}),IS=on(PS),FS=[9,13,27,32],Yu=Qi&&"CompositionEvent"in window,Fo=null;Qi&&"documentMode"in document&&(Fo=document.documentMode);var BS=Qi&&"TextEvent"in window&&!Fo,nm=Qi&&(!Yu||Fo&&8<Fo&&11>=Fo),im=" ",am=!1;function sm(t,n){switch(t){case"keyup":return FS.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function rm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Dr=!1;function zS(t,n){switch(t){case"compositionend":return rm(n);case"keypress":return n.which!==32?null:(am=!0,im);case"textInput":return t=n.data,t===im&&am?null:t;default:return null}}function HS(t,n){if(Dr)return t==="compositionend"||!Yu&&sm(t,n)?(t=Yl(),Cr=Io=Ni=null,Dr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return nm&&n.locale!=="ko"?null:n.data;default:return null}}var GS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function om(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!GS[t.type]:n==="textarea"}function lm(t,n,s,l){Da?La?La.push(l):La=[l]:Da=l,n=Ic(n,"onChange"),0<n.length&&(s=new Nn("onChange","change",null,s,l),t.push({event:s,listeners:n}))}var Bo=null,zo=null;function VS(t){Xg(t,0)}function jl(t){var n=Li(t);if($t(n))return t}function cm(t,n){if(t==="change")return n}var um=!1;if(Qi){var qu;if(Qi){var ju="oninput"in document;if(!ju){var fm=document.createElement("div");fm.setAttribute("oninput","return;"),ju=typeof fm.oninput=="function"}qu=ju}else qu=!1;um=qu&&(!document.documentMode||9<document.documentMode)}function dm(){Bo&&(Bo.detachEvent("onpropertychange",hm),zo=Bo=null)}function hm(t){if(t.propertyName==="value"&&jl(zo)){var n=[];lm(n,zo,t,Po(t)),js(VS,n)}}function kS(t,n,s){t==="focusin"?(dm(),Bo=n,zo=s,Bo.attachEvent("onpropertychange",hm)):t==="focusout"&&dm()}function XS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return jl(zo)}function WS(t,n){if(t==="click")return jl(n)}function YS(t,n){if(t==="input"||t==="change")return jl(n)}function qS(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var vi=typeof Object.is=="function"?Object.is:qS;function Ho(t,n){if(vi(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var s=Object.keys(t),l=Object.keys(n);if(s.length!==l.length)return!1;for(l=0;l<s.length;l++){var f=s[l];if(!qt.call(n,f)||!vi(t[f],n[f]))return!1}return!0}function pm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function mm(t,n){var s=pm(t);t=0;for(var l;s;){if(s.nodeType===3){if(l=t+s.textContent.length,t<=n&&l>=n)return{node:s,offset:n-t};t=l}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=pm(s)}}function gm(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?gm(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function _m(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=Ft(t.document);n instanceof t.HTMLIFrameElement;){try{var s=typeof n.contentWindow.location.href=="string"}catch{s=!1}if(s)t=n.contentWindow;else break;n=Ft(t.document)}return n}function Zu(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var jS=Qi&&"documentMode"in document&&11>=document.documentMode,Lr=null,Ku=null,Go=null,Qu=!1;function vm(t,n,s){var l=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;Qu||Lr==null||Lr!==Ft(l)||(l=Lr,"selectionStart"in l&&Zu(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Go&&Ho(Go,l)||(Go=l,l=Ic(Ku,"onSelect"),0<l.length&&(n=new Nn("onSelect","select",null,n,s),t.push({event:n,listeners:l}),n.target=Lr)))}function Js(t,n){var s={};return s[t.toLowerCase()]=n.toLowerCase(),s["Webkit"+t]="webkit"+n,s["Moz"+t]="moz"+n,s}var Nr={animationend:Js("Animation","AnimationEnd"),animationiteration:Js("Animation","AnimationIteration"),animationstart:Js("Animation","AnimationStart"),transitionrun:Js("Transition","TransitionRun"),transitionstart:Js("Transition","TransitionStart"),transitioncancel:Js("Transition","TransitionCancel"),transitionend:Js("Transition","TransitionEnd")},Ju={},xm={};Qi&&(xm=document.createElement("div").style,"AnimationEvent"in window||(delete Nr.animationend.animation,delete Nr.animationiteration.animation,delete Nr.animationstart.animation),"TransitionEvent"in window||delete Nr.transitionend.transition);function $s(t){if(Ju[t])return Ju[t];if(!Nr[t])return t;var n=Nr[t],s;for(s in n)if(n.hasOwnProperty(s)&&s in xm)return Ju[t]=n[s];return t}var Sm=$s("animationend"),Mm=$s("animationiteration"),ym=$s("animationstart"),ZS=$s("transitionrun"),KS=$s("transitionstart"),QS=$s("transitioncancel"),Em=$s("transitionend"),bm=new Map,$u="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");$u.push("scrollEnd");function $i(t,n){bm.set(t,n),G(n,[t])}var Zl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},Oi=[],Ur=0,ef=0;function Kl(){for(var t=Ur,n=ef=Ur=0;n<t;){var s=Oi[n];Oi[n++]=null;var l=Oi[n];Oi[n++]=null;var f=Oi[n];Oi[n++]=null;var p=Oi[n];if(Oi[n++]=null,l!==null&&f!==null){var S=l.pending;S===null?f.next=f:(f.next=S.next,S.next=f),l.pending=f}p!==0&&Tm(s,f,p)}}function Ql(t,n,s,l){Oi[Ur++]=t,Oi[Ur++]=n,Oi[Ur++]=s,Oi[Ur++]=l,ef|=l,t.lanes|=l,t=t.alternate,t!==null&&(t.lanes|=l)}function tf(t,n,s,l){return Ql(t,n,s,l),Jl(t)}function er(t,n){return Ql(t,null,null,n),Jl(t)}function Tm(t,n,s){t.lanes|=s;var l=t.alternate;l!==null&&(l.lanes|=s);for(var f=!1,p=t.return;p!==null;)p.childLanes|=s,l=p.alternate,l!==null&&(l.childLanes|=s),p.tag===22&&(t=p.stateNode,t===null||t._visibility&1||(f=!0)),t=p,p=p.return;return t.tag===3?(p=t.stateNode,f&&n!==null&&(f=31-Ge(s),t=p.hiddenUpdates,l=t[f],l===null?t[f]=[n]:l.push(n),n.lane=s|536870912),p):null}function Jl(t){if(50<cl)throw cl=0,fd=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Or={};function JS(t,n,s,l){this.tag=t,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function xi(t,n,s,l){return new JS(t,n,s,l)}function nf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Na(t,n){var s=t.alternate;return s===null?(s=xi(t.tag,n,t.key,t.mode),s.elementType=t.elementType,s.type=t.type,s.stateNode=t.stateNode,s.alternate=t,t.alternate=s):(s.pendingProps=n,s.type=t.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=t.flags&65011712,s.childLanes=t.childLanes,s.lanes=t.lanes,s.child=t.child,s.memoizedProps=t.memoizedProps,s.memoizedState=t.memoizedState,s.updateQueue=t.updateQueue,n=t.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},s.sibling=t.sibling,s.index=t.index,s.ref=t.ref,s.refCleanup=t.refCleanup,s}function Am(t,n){t.flags&=65011714;var s=t.alternate;return s===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=s.childLanes,t.lanes=s.lanes,t.child=s.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=s.memoizedProps,t.memoizedState=s.memoizedState,t.updateQueue=s.updateQueue,t.type=s.type,n=s.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function $l(t,n,s,l,f,p){var S=0;if(l=t,typeof t=="function")nf(t)&&(S=1);else if(typeof t=="string")S=iy(t,s,Ae.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case U:return t=xi(31,s,n,f),t.elementType=U,t.lanes=p,t;case R:return tr(s.children,f,p,n);case y:S=8,f|=24;break;case x:return t=xi(12,s,n,f|2),t.elementType=x,t.lanes=p,t;case N:return t=xi(13,s,n,f),t.elementType=N,t.lanes=p,t;case L:return t=xi(19,s,n,f),t.elementType=L,t.lanes=p,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case P:S=10;break e;case O:S=9;break e;case C:S=11;break e;case B:S=14;break e;case A:S=16,l=null;break e}S=29,s=Error(r(130,t===null?"null":typeof t,"")),l=null}return n=xi(S,s,n,f),n.elementType=t,n.type=l,n.lanes=p,n}function tr(t,n,s,l){return t=xi(7,t,l,n),t.lanes=s,t}function af(t,n,s){return t=xi(6,t,null,n),t.lanes=s,t}function Rm(t){var n=xi(18,null,null,0);return n.stateNode=t,n}function sf(t,n,s){return n=xi(4,t.children!==null?t.children:[],t.key,n),n.lanes=s,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Cm=new WeakMap;function Pi(t,n){if(typeof t=="object"&&t!==null){var s=Cm.get(t);return s!==void 0?s:(n={value:t,source:n,stack:Jt(n)},Cm.set(t,n),n)}return{value:t,source:n,stack:Jt(n)}}var Pr=[],Ir=0,ec=null,Vo=0,Ii=[],Fi=0,cs=null,ha=1,pa="";function Ua(t,n){Pr[Ir++]=Vo,Pr[Ir++]=ec,ec=t,Vo=n}function wm(t,n,s){Ii[Fi++]=ha,Ii[Fi++]=pa,Ii[Fi++]=cs,cs=t;var l=ha;t=pa;var f=32-Ge(l)-1;l&=~(1<<f),s+=1;var p=32-Ge(n)+f;if(30<p){var S=f-f%5;p=(l&(1<<S)-1).toString(32),l>>=S,f-=S,ha=1<<32-Ge(n)+f|s<<f|l,pa=p+t}else ha=1<<p|s<<f|l,pa=t}function rf(t){t.return!==null&&(Ua(t,1),wm(t,1,0))}function of(t){for(;t===ec;)ec=Pr[--Ir],Pr[Ir]=null,Vo=Pr[--Ir],Pr[Ir]=null;for(;t===cs;)cs=Ii[--Fi],Ii[Fi]=null,pa=Ii[--Fi],Ii[Fi]=null,ha=Ii[--Fi],Ii[Fi]=null}function Dm(t,n){Ii[Fi++]=ha,Ii[Fi++]=pa,Ii[Fi++]=cs,ha=n.id,pa=n.overflow,cs=t}var Vn=null,ln=null,Rt=!1,us=null,Bi=!1,lf=Error(r(519));function fs(t){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ko(Pi(n,t)),lf}function Lm(t){var n=t.stateNode,s=t.type,l=t.memoizedProps;switch(n[mn]=t,n[_n]=l,s){case"dialog":Mt("cancel",n),Mt("close",n);break;case"iframe":case"object":case"embed":Mt("load",n);break;case"video":case"audio":for(s=0;s<fl.length;s++)Mt(fl[s],n);break;case"source":Mt("error",n);break;case"img":case"image":case"link":Mt("error",n),Mt("load",n);break;case"details":Mt("toggle",n);break;case"input":Mt("invalid",n),Tn(n,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":Mt("invalid",n);break;case"textarea":Mt("invalid",n),Hn(n,l.value,l.defaultValue,l.children)}s=l.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||n.textContent===""+s||l.suppressHydrationWarning===!0||jg(n.textContent,s)?(l.popover!=null&&(Mt("beforetoggle",n),Mt("toggle",n)),l.onScroll!=null&&Mt("scroll",n),l.onScrollEnd!=null&&Mt("scrollend",n),l.onClick!=null&&(n.onclick=_i),n=!0):n=!1,n||fs(t,!0)}function Nm(t){for(Vn=t.return;Vn;)switch(Vn.tag){case 5:case 31:case 13:Bi=!1;return;case 27:case 3:Bi=!0;return;default:Vn=Vn.return}}function Fr(t){if(t!==Vn)return!1;if(!Rt)return Nm(t),Rt=!0,!1;var n=t.tag,s;if((s=n!==3&&n!==27)&&((s=n===5)&&(s=t.type,s=!(s!=="form"&&s!=="button")||Ad(t.type,t.memoizedProps)),s=!s),s&&ln&&fs(t),Nm(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));ln=i_(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));ln=i_(t)}else n===27?(n=ln,Ts(t.type)?(t=Ld,Ld=null,ln=t):ln=n):ln=Vn?Hi(t.stateNode.nextSibling):null;return!0}function nr(){ln=Vn=null,Rt=!1}function cf(){var t=us;return t!==null&&(fi===null?fi=t:fi.push.apply(fi,t),us=null),t}function ko(t){us===null?us=[t]:us.push(t)}var uf=I(null),ir=null,Oa=null;function ds(t,n,s){Te(uf,n._currentValue),n._currentValue=s}function Pa(t){t._currentValue=uf.current,K(uf)}function ff(t,n,s){for(;t!==null;){var l=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,l!==null&&(l.childLanes|=n)):l!==null&&(l.childLanes&n)!==n&&(l.childLanes|=n),t===s)break;t=t.return}}function df(t,n,s,l){var f=t.child;for(f!==null&&(f.return=t);f!==null;){var p=f.dependencies;if(p!==null){var S=f.child;p=p.firstContext;e:for(;p!==null;){var w=p;p=f;for(var V=0;V<n.length;V++)if(w.context===n[V]){p.lanes|=s,w=p.alternate,w!==null&&(w.lanes|=s),ff(p.return,s,t),l||(S=null);break e}p=w.next}}else if(f.tag===18){if(S=f.return,S===null)throw Error(r(341));S.lanes|=s,p=S.alternate,p!==null&&(p.lanes|=s),ff(S,s,t),S=null}else S=f.child;if(S!==null)S.return=f;else for(S=f;S!==null;){if(S===t){S=null;break}if(f=S.sibling,f!==null){f.return=S.return,S=f;break}S=S.return}f=S}}function Br(t,n,s,l){t=null;for(var f=n,p=!1;f!==null;){if(!p){if((f.flags&524288)!==0)p=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var S=f.alternate;if(S===null)throw Error(r(387));if(S=S.memoizedProps,S!==null){var w=f.type;vi(f.pendingProps.value,S.value)||(t!==null?t.push(w):t=[w])}}else if(f===Me.current){if(S=f.alternate,S===null)throw Error(r(387));S.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(t!==null?t.push(gl):t=[gl])}f=f.return}t!==null&&df(n,t,s,l),n.flags|=262144}function tc(t){for(t=t.firstContext;t!==null;){if(!vi(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function ar(t){ir=t,Oa=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function kn(t){return Um(ir,t)}function nc(t,n){return ir===null&&ar(t),Um(t,n)}function Um(t,n){var s=n._currentValue;if(n={context:n,memoizedValue:s,next:null},Oa===null){if(t===null)throw Error(r(308));Oa=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Oa=Oa.next=n;return s}var $S=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(s,l){t.push(l)}};this.abort=function(){n.aborted=!0,t.forEach(function(s){return s()})}},eM=a.unstable_scheduleCallback,tM=a.unstable_NormalPriority,An={$$typeof:P,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function hf(){return{controller:new $S,data:new Map,refCount:0}}function Xo(t){t.refCount--,t.refCount===0&&eM(tM,function(){t.controller.abort()})}var Wo=null,pf=0,zr=0,Hr=null;function nM(t,n){if(Wo===null){var s=Wo=[];pf=0,zr=_d(),Hr={status:"pending",value:void 0,then:function(l){s.push(l)}}}return pf++,n.then(Om,Om),n}function Om(){if(--pf===0&&Wo!==null){Hr!==null&&(Hr.status="fulfilled");var t=Wo;Wo=null,zr=0,Hr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function iM(t,n){var s=[],l={status:"pending",value:null,reason:null,then:function(f){s.push(f)}};return t.then(function(){l.status="fulfilled",l.value=n;for(var f=0;f<s.length;f++)(0,s[f])(n)},function(f){for(l.status="rejected",l.reason=f,f=0;f<s.length;f++)(0,s[f])(void 0)}),l}var Pm=z.S;z.S=function(t,n){vg=Tt(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&nM(t,n),Pm!==null&&Pm(t,n)};var sr=I(null);function mf(){var t=sr.current;return t!==null?t:en.pooledCache}function ic(t,n){n===null?Te(sr,sr.current):Te(sr,n.pool)}function Im(){var t=mf();return t===null?null:{parent:An._currentValue,pool:t}}var Gr=Error(r(460)),gf=Error(r(474)),ac=Error(r(542)),sc={then:function(){}};function Fm(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Bm(t,n,s){switch(s=t[s],s===void 0?t.push(n):s!==n&&(n.then(_i,_i),n=s),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Hm(t),t;default:if(typeof n.status=="string")n.then(_i,_i);else{if(t=en,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(l){if(n.status==="pending"){var f=n;f.status="fulfilled",f.value=l}},function(l){if(n.status==="pending"){var f=n;f.status="rejected",f.reason=l}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Hm(t),t}throw or=n,Gr}}function rr(t){try{var n=t._init;return n(t._payload)}catch(s){throw s!==null&&typeof s=="object"&&typeof s.then=="function"?(or=s,Gr):s}}var or=null;function zm(){if(or===null)throw Error(r(459));var t=or;return or=null,t}function Hm(t){if(t===Gr||t===ac)throw Error(r(483))}var Vr=null,Yo=0;function rc(t){var n=Yo;return Yo+=1,Vr===null&&(Vr=[]),Bm(Vr,t,n)}function qo(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function oc(t,n){throw n.$$typeof===_?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Gm(t){function n(te,Y){if(t){var se=te.deletions;se===null?(te.deletions=[Y],te.flags|=16):se.push(Y)}}function s(te,Y){if(!t)return null;for(;Y!==null;)n(te,Y),Y=Y.sibling;return null}function l(te){for(var Y=new Map;te!==null;)te.key!==null?Y.set(te.key,te):Y.set(te.index,te),te=te.sibling;return Y}function f(te,Y){return te=Na(te,Y),te.index=0,te.sibling=null,te}function p(te,Y,se){return te.index=se,t?(se=te.alternate,se!==null?(se=se.index,se<Y?(te.flags|=67108866,Y):se):(te.flags|=67108866,Y)):(te.flags|=1048576,Y)}function S(te){return t&&te.alternate===null&&(te.flags|=67108866),te}function w(te,Y,se,ye){return Y===null||Y.tag!==6?(Y=af(se,te.mode,ye),Y.return=te,Y):(Y=f(Y,se),Y.return=te,Y)}function V(te,Y,se,ye){var it=se.type;return it===R?xe(te,Y,se.props.children,ye,se.key):Y!==null&&(Y.elementType===it||typeof it=="object"&&it!==null&&it.$$typeof===A&&rr(it)===Y.type)?(Y=f(Y,se.props),qo(Y,se),Y.return=te,Y):(Y=$l(se.type,se.key,se.props,null,te.mode,ye),qo(Y,se),Y.return=te,Y)}function oe(te,Y,se,ye){return Y===null||Y.tag!==4||Y.stateNode.containerInfo!==se.containerInfo||Y.stateNode.implementation!==se.implementation?(Y=sf(se,te.mode,ye),Y.return=te,Y):(Y=f(Y,se.children||[]),Y.return=te,Y)}function xe(te,Y,se,ye,it){return Y===null||Y.tag!==7?(Y=tr(se,te.mode,ye,it),Y.return=te,Y):(Y=f(Y,se),Y.return=te,Y)}function be(te,Y,se){if(typeof Y=="string"&&Y!==""||typeof Y=="number"||typeof Y=="bigint")return Y=af(""+Y,te.mode,se),Y.return=te,Y;if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case M:return se=$l(Y.type,Y.key,Y.props,null,te.mode,se),qo(se,Y),se.return=te,se;case b:return Y=sf(Y,te.mode,se),Y.return=te,Y;case A:return Y=rr(Y),be(te,Y,se)}if(q(Y)||Z(Y))return Y=tr(Y,te.mode,se,null),Y.return=te,Y;if(typeof Y.then=="function")return be(te,rc(Y),se);if(Y.$$typeof===P)return be(te,nc(te,Y),se);oc(te,Y)}return null}function ce(te,Y,se,ye){var it=Y!==null?Y.key:null;if(typeof se=="string"&&se!==""||typeof se=="number"||typeof se=="bigint")return it!==null?null:w(te,Y,""+se,ye);if(typeof se=="object"&&se!==null){switch(se.$$typeof){case M:return se.key===it?V(te,Y,se,ye):null;case b:return se.key===it?oe(te,Y,se,ye):null;case A:return se=rr(se),ce(te,Y,se,ye)}if(q(se)||Z(se))return it!==null?null:xe(te,Y,se,ye,null);if(typeof se.then=="function")return ce(te,Y,rc(se),ye);if(se.$$typeof===P)return ce(te,Y,nc(te,se),ye);oc(te,se)}return null}function de(te,Y,se,ye,it){if(typeof ye=="string"&&ye!==""||typeof ye=="number"||typeof ye=="bigint")return te=te.get(se)||null,w(Y,te,""+ye,it);if(typeof ye=="object"&&ye!==null){switch(ye.$$typeof){case M:return te=te.get(ye.key===null?se:ye.key)||null,V(Y,te,ye,it);case b:return te=te.get(ye.key===null?se:ye.key)||null,oe(Y,te,ye,it);case A:return ye=rr(ye),de(te,Y,se,ye,it)}if(q(ye)||Z(ye))return te=te.get(se)||null,xe(Y,te,ye,it,null);if(typeof ye.then=="function")return de(te,Y,se,rc(ye),it);if(ye.$$typeof===P)return de(te,Y,se,nc(Y,ye),it);oc(Y,ye)}return null}function Je(te,Y,se,ye){for(var it=null,Ot=null,et=Y,pt=Y=0,bt=null;et!==null&&pt<se.length;pt++){et.index>pt?(bt=et,et=null):bt=et.sibling;var Pt=ce(te,et,se[pt],ye);if(Pt===null){et===null&&(et=bt);break}t&&et&&Pt.alternate===null&&n(te,et),Y=p(Pt,Y,pt),Ot===null?it=Pt:Ot.sibling=Pt,Ot=Pt,et=bt}if(pt===se.length)return s(te,et),Rt&&Ua(te,pt),it;if(et===null){for(;pt<se.length;pt++)et=be(te,se[pt],ye),et!==null&&(Y=p(et,Y,pt),Ot===null?it=et:Ot.sibling=et,Ot=et);return Rt&&Ua(te,pt),it}for(et=l(et);pt<se.length;pt++)bt=de(et,te,pt,se[pt],ye),bt!==null&&(t&&bt.alternate!==null&&et.delete(bt.key===null?pt:bt.key),Y=p(bt,Y,pt),Ot===null?it=bt:Ot.sibling=bt,Ot=bt);return t&&et.forEach(function(Ds){return n(te,Ds)}),Rt&&Ua(te,pt),it}function st(te,Y,se,ye){if(se==null)throw Error(r(151));for(var it=null,Ot=null,et=Y,pt=Y=0,bt=null,Pt=se.next();et!==null&&!Pt.done;pt++,Pt=se.next()){et.index>pt?(bt=et,et=null):bt=et.sibling;var Ds=ce(te,et,Pt.value,ye);if(Ds===null){et===null&&(et=bt);break}t&&et&&Ds.alternate===null&&n(te,et),Y=p(Ds,Y,pt),Ot===null?it=Ds:Ot.sibling=Ds,Ot=Ds,et=bt}if(Pt.done)return s(te,et),Rt&&Ua(te,pt),it;if(et===null){for(;!Pt.done;pt++,Pt=se.next())Pt=be(te,Pt.value,ye),Pt!==null&&(Y=p(Pt,Y,pt),Ot===null?it=Pt:Ot.sibling=Pt,Ot=Pt);return Rt&&Ua(te,pt),it}for(et=l(et);!Pt.done;pt++,Pt=se.next())Pt=de(et,te,pt,Pt.value,ye),Pt!==null&&(t&&Pt.alternate!==null&&et.delete(Pt.key===null?pt:Pt.key),Y=p(Pt,Y,pt),Ot===null?it=Pt:Ot.sibling=Pt,Ot=Pt);return t&&et.forEach(function(py){return n(te,py)}),Rt&&Ua(te,pt),it}function Kt(te,Y,se,ye){if(typeof se=="object"&&se!==null&&se.type===R&&se.key===null&&(se=se.props.children),typeof se=="object"&&se!==null){switch(se.$$typeof){case M:e:{for(var it=se.key;Y!==null;){if(Y.key===it){if(it=se.type,it===R){if(Y.tag===7){s(te,Y.sibling),ye=f(Y,se.props.children),ye.return=te,te=ye;break e}}else if(Y.elementType===it||typeof it=="object"&&it!==null&&it.$$typeof===A&&rr(it)===Y.type){s(te,Y.sibling),ye=f(Y,se.props),qo(ye,se),ye.return=te,te=ye;break e}s(te,Y);break}else n(te,Y);Y=Y.sibling}se.type===R?(ye=tr(se.props.children,te.mode,ye,se.key),ye.return=te,te=ye):(ye=$l(se.type,se.key,se.props,null,te.mode,ye),qo(ye,se),ye.return=te,te=ye)}return S(te);case b:e:{for(it=se.key;Y!==null;){if(Y.key===it)if(Y.tag===4&&Y.stateNode.containerInfo===se.containerInfo&&Y.stateNode.implementation===se.implementation){s(te,Y.sibling),ye=f(Y,se.children||[]),ye.return=te,te=ye;break e}else{s(te,Y);break}else n(te,Y);Y=Y.sibling}ye=sf(se,te.mode,ye),ye.return=te,te=ye}return S(te);case A:return se=rr(se),Kt(te,Y,se,ye)}if(q(se))return Je(te,Y,se,ye);if(Z(se)){if(it=Z(se),typeof it!="function")throw Error(r(150));return se=it.call(se),st(te,Y,se,ye)}if(typeof se.then=="function")return Kt(te,Y,rc(se),ye);if(se.$$typeof===P)return Kt(te,Y,nc(te,se),ye);oc(te,se)}return typeof se=="string"&&se!==""||typeof se=="number"||typeof se=="bigint"?(se=""+se,Y!==null&&Y.tag===6?(s(te,Y.sibling),ye=f(Y,se),ye.return=te,te=ye):(s(te,Y),ye=af(se,te.mode,ye),ye.return=te,te=ye),S(te)):s(te,Y)}return function(te,Y,se,ye){try{Yo=0;var it=Kt(te,Y,se,ye);return Vr=null,it}catch(et){if(et===Gr||et===ac)throw et;var Ot=xi(29,et,null,te.mode);return Ot.lanes=ye,Ot.return=te,Ot}finally{}}}var lr=Gm(!0),Vm=Gm(!1),hs=!1;function _f(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function vf(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function ps(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function ms(t,n,s){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(Ht&2)!==0){var f=l.pending;return f===null?n.next=n:(n.next=f.next,f.next=n),l.pending=n,n=Jl(t),Tm(t,null,s),n}return Ql(t,l,n,s),Jl(t)}function jo(t,n,s){if(n=n.updateQueue,n!==null&&(n=n.shared,(s&4194048)!==0)){var l=n.lanes;l&=t.pendingLanes,s|=l,n.lanes=s,ti(t,s)}}function xf(t,n){var s=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,s===l)){var f=null,p=null;if(s=s.firstBaseUpdate,s!==null){do{var S={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};p===null?f=p=S:p=p.next=S,s=s.next}while(s!==null);p===null?f=p=n:p=p.next=n}else f=p=n;s={baseState:l.baseState,firstBaseUpdate:f,lastBaseUpdate:p,shared:l.shared,callbacks:l.callbacks},t.updateQueue=s;return}t=s.lastBaseUpdate,t===null?s.firstBaseUpdate=n:t.next=n,s.lastBaseUpdate=n}var Sf=!1;function Zo(){if(Sf){var t=Hr;if(t!==null)throw t}}function Ko(t,n,s,l){Sf=!1;var f=t.updateQueue;hs=!1;var p=f.firstBaseUpdate,S=f.lastBaseUpdate,w=f.shared.pending;if(w!==null){f.shared.pending=null;var V=w,oe=V.next;V.next=null,S===null?p=oe:S.next=oe,S=V;var xe=t.alternate;xe!==null&&(xe=xe.updateQueue,w=xe.lastBaseUpdate,w!==S&&(w===null?xe.firstBaseUpdate=oe:w.next=oe,xe.lastBaseUpdate=V))}if(p!==null){var be=f.baseState;S=0,xe=oe=V=null,w=p;do{var ce=w.lane&-536870913,de=ce!==w.lane;if(de?(Et&ce)===ce:(l&ce)===ce){ce!==0&&ce===zr&&(Sf=!0),xe!==null&&(xe=xe.next={lane:0,tag:w.tag,payload:w.payload,callback:null,next:null});e:{var Je=t,st=w;ce=n;var Kt=s;switch(st.tag){case 1:if(Je=st.payload,typeof Je=="function"){be=Je.call(Kt,be,ce);break e}be=Je;break e;case 3:Je.flags=Je.flags&-65537|128;case 0:if(Je=st.payload,ce=typeof Je=="function"?Je.call(Kt,be,ce):Je,ce==null)break e;be=v({},be,ce);break e;case 2:hs=!0}}ce=w.callback,ce!==null&&(t.flags|=64,de&&(t.flags|=8192),de=f.callbacks,de===null?f.callbacks=[ce]:de.push(ce))}else de={lane:ce,tag:w.tag,payload:w.payload,callback:w.callback,next:null},xe===null?(oe=xe=de,V=be):xe=xe.next=de,S|=ce;if(w=w.next,w===null){if(w=f.shared.pending,w===null)break;de=w,w=de.next,de.next=null,f.lastBaseUpdate=de,f.shared.pending=null}}while(!0);xe===null&&(V=be),f.baseState=V,f.firstBaseUpdate=oe,f.lastBaseUpdate=xe,p===null&&(f.shared.lanes=0),Ss|=S,t.lanes=S,t.memoizedState=be}}function km(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function Xm(t,n){var s=t.callbacks;if(s!==null)for(t.callbacks=null,t=0;t<s.length;t++)km(s[t],n)}var kr=I(null),lc=I(0);function Wm(t,n){t=Xa,Te(lc,t),Te(kr,n),Xa=t|n.baseLanes}function Mf(){Te(lc,Xa),Te(kr,kr.current)}function yf(){Xa=lc.current,K(kr),K(lc)}var Si=I(null),zi=null;function gs(t){var n=t.alternate;Te(yn,yn.current&1),Te(Si,t),zi===null&&(n===null||kr.current!==null||n.memoizedState!==null)&&(zi=t)}function Ef(t){Te(yn,yn.current),Te(Si,t),zi===null&&(zi=t)}function Ym(t){t.tag===22?(Te(yn,yn.current),Te(Si,t),zi===null&&(zi=t)):_s()}function _s(){Te(yn,yn.current),Te(Si,Si.current)}function Mi(t){K(Si),zi===t&&(zi=null),K(yn)}var yn=I(0);function cc(t){for(var n=t;n!==null;){if(n.tag===13){var s=n.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||wd(s)||Dd(s)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Ia=0,dt=null,jt=null,Rn=null,uc=!1,Xr=!1,cr=!1,fc=0,Qo=0,Wr=null,aM=0;function xn(){throw Error(r(321))}function bf(t,n){if(n===null)return!1;for(var s=0;s<n.length&&s<t.length;s++)if(!vi(t[s],n[s]))return!1;return!0}function Tf(t,n,s,l,f,p){return Ia=p,dt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,z.H=t===null||t.memoizedState===null?w0:Hf,cr=!1,p=s(l,f),cr=!1,Xr&&(p=jm(n,s,l,f)),qm(t),p}function qm(t){z.H=el;var n=jt!==null&&jt.next!==null;if(Ia=0,Rn=jt=dt=null,uc=!1,Qo=0,Wr=null,n)throw Error(r(300));t===null||Cn||(t=t.dependencies,t!==null&&tc(t)&&(Cn=!0))}function jm(t,n,s,l){dt=t;var f=0;do{if(Xr&&(Wr=null),Qo=0,Xr=!1,25<=f)throw Error(r(301));if(f+=1,Rn=jt=null,t.updateQueue!=null){var p=t.updateQueue;p.lastEffect=null,p.events=null,p.stores=null,p.memoCache!=null&&(p.memoCache.index=0)}z.H=D0,p=n(s,l)}while(Xr);return p}function sM(){var t=z.H,n=t.useState()[0];return n=typeof n.then=="function"?Jo(n):n,t=t.useState()[0],(jt!==null?jt.memoizedState:null)!==t&&(dt.flags|=1024),n}function Af(){var t=fc!==0;return fc=0,t}function Rf(t,n,s){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~s}function Cf(t){if(uc){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}uc=!1}Ia=0,Rn=jt=dt=null,Xr=!1,Qo=fc=0,Wr=null}function ni(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Rn===null?dt.memoizedState=Rn=t:Rn=Rn.next=t,Rn}function En(){if(jt===null){var t=dt.alternate;t=t!==null?t.memoizedState:null}else t=jt.next;var n=Rn===null?dt.memoizedState:Rn.next;if(n!==null)Rn=n,jt=t;else{if(t===null)throw dt.alternate===null?Error(r(467)):Error(r(310));jt=t,t={memoizedState:jt.memoizedState,baseState:jt.baseState,baseQueue:jt.baseQueue,queue:jt.queue,next:null},Rn===null?dt.memoizedState=Rn=t:Rn=Rn.next=t}return Rn}function dc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Jo(t){var n=Qo;return Qo+=1,Wr===null&&(Wr=[]),t=Bm(Wr,t,n),n=dt,(Rn===null?n.memoizedState:Rn.next)===null&&(n=n.alternate,z.H=n===null||n.memoizedState===null?w0:Hf),t}function hc(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Jo(t);if(t.$$typeof===P)return kn(t)}throw Error(r(438,String(t)))}function wf(t){var n=null,s=dt.updateQueue;if(s!==null&&(n=s.memoCache),n==null){var l=dt.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(n={data:l.data.map(function(f){return f.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),s===null&&(s=dc(),dt.updateQueue=s),s.memoCache=n,s=n.data[n.index],s===void 0)for(s=n.data[n.index]=Array(t),l=0;l<t;l++)s[l]=X;return n.index++,s}function Fa(t,n){return typeof n=="function"?n(t):n}function pc(t){var n=En();return Df(n,jt,t)}function Df(t,n,s){var l=t.queue;if(l===null)throw Error(r(311));l.lastRenderedReducer=s;var f=t.baseQueue,p=l.pending;if(p!==null){if(f!==null){var S=f.next;f.next=p.next,p.next=S}n.baseQueue=f=p,l.pending=null}if(p=t.baseState,f===null)t.memoizedState=p;else{n=f.next;var w=S=null,V=null,oe=n,xe=!1;do{var be=oe.lane&-536870913;if(be!==oe.lane?(Et&be)===be:(Ia&be)===be){var ce=oe.revertLane;if(ce===0)V!==null&&(V=V.next={lane:0,revertLane:0,gesture:null,action:oe.action,hasEagerState:oe.hasEagerState,eagerState:oe.eagerState,next:null}),be===zr&&(xe=!0);else if((Ia&ce)===ce){oe=oe.next,ce===zr&&(xe=!0);continue}else be={lane:0,revertLane:oe.revertLane,gesture:null,action:oe.action,hasEagerState:oe.hasEagerState,eagerState:oe.eagerState,next:null},V===null?(w=V=be,S=p):V=V.next=be,dt.lanes|=ce,Ss|=ce;be=oe.action,cr&&s(p,be),p=oe.hasEagerState?oe.eagerState:s(p,be)}else ce={lane:be,revertLane:oe.revertLane,gesture:oe.gesture,action:oe.action,hasEagerState:oe.hasEagerState,eagerState:oe.eagerState,next:null},V===null?(w=V=ce,S=p):V=V.next=ce,dt.lanes|=be,Ss|=be;oe=oe.next}while(oe!==null&&oe!==n);if(V===null?S=p:V.next=w,!vi(p,t.memoizedState)&&(Cn=!0,xe&&(s=Hr,s!==null)))throw s;t.memoizedState=p,t.baseState=S,t.baseQueue=V,l.lastRenderedState=p}return f===null&&(l.lanes=0),[t.memoizedState,l.dispatch]}function Lf(t){var n=En(),s=n.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=t;var l=s.dispatch,f=s.pending,p=n.memoizedState;if(f!==null){s.pending=null;var S=f=f.next;do p=t(p,S.action),S=S.next;while(S!==f);vi(p,n.memoizedState)||(Cn=!0),n.memoizedState=p,n.baseQueue===null&&(n.baseState=p),s.lastRenderedState=p}return[p,l]}function Zm(t,n,s){var l=dt,f=En(),p=Rt;if(p){if(s===void 0)throw Error(r(407));s=s()}else s=n();var S=!vi((jt||f).memoizedState,s);if(S&&(f.memoizedState=s,Cn=!0),f=f.queue,Of(Jm.bind(null,l,f,t),[t]),f.getSnapshot!==n||S||Rn!==null&&Rn.memoizedState.tag&1){if(l.flags|=2048,Yr(9,{destroy:void 0},Qm.bind(null,l,f,s,n),null),en===null)throw Error(r(349));p||(Ia&127)!==0||Km(l,n,s)}return s}function Km(t,n,s){t.flags|=16384,t={getSnapshot:n,value:s},n=dt.updateQueue,n===null?(n=dc(),dt.updateQueue=n,n.stores=[t]):(s=n.stores,s===null?n.stores=[t]:s.push(t))}function Qm(t,n,s,l){n.value=s,n.getSnapshot=l,$m(n)&&e0(t)}function Jm(t,n,s){return s(function(){$m(n)&&e0(t)})}function $m(t){var n=t.getSnapshot;t=t.value;try{var s=n();return!vi(t,s)}catch{return!0}}function e0(t){var n=er(t,2);n!==null&&di(n,t,2)}function Nf(t){var n=ni();if(typeof t=="function"){var s=t;if(t=s(),cr){we(!0);try{s()}finally{we(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fa,lastRenderedState:t},n}function t0(t,n,s,l){return t.baseState=s,Df(t,jt,typeof l=="function"?l:Fa)}function rM(t,n,s,l,f){if(_c(t))throw Error(r(485));if(t=n.action,t!==null){var p={payload:f,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){p.listeners.push(S)}};z.T!==null?s(!0):p.isTransition=!1,l(p),s=n.pending,s===null?(p.next=n.pending=p,n0(n,p)):(p.next=s.next,n.pending=s.next=p)}}function n0(t,n){var s=n.action,l=n.payload,f=t.state;if(n.isTransition){var p=z.T,S={};z.T=S;try{var w=s(f,l),V=z.S;V!==null&&V(S,w),i0(t,n,w)}catch(oe){Uf(t,n,oe)}finally{p!==null&&S.types!==null&&(p.types=S.types),z.T=p}}else try{p=s(f,l),i0(t,n,p)}catch(oe){Uf(t,n,oe)}}function i0(t,n,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(l){a0(t,n,l)},function(l){return Uf(t,n,l)}):a0(t,n,s)}function a0(t,n,s){n.status="fulfilled",n.value=s,s0(n),t.state=s,n=t.pending,n!==null&&(s=n.next,s===n?t.pending=null:(s=s.next,n.next=s,n0(t,s)))}function Uf(t,n,s){var l=t.pending;if(t.pending=null,l!==null){l=l.next;do n.status="rejected",n.reason=s,s0(n),n=n.next;while(n!==l)}t.action=null}function s0(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function r0(t,n){return n}function o0(t,n){if(Rt){var s=en.formState;if(s!==null){e:{var l=dt;if(Rt){if(ln){t:{for(var f=ln,p=Bi;f.nodeType!==8;){if(!p){f=null;break t}if(f=Hi(f.nextSibling),f===null){f=null;break t}}p=f.data,f=p==="F!"||p==="F"?f:null}if(f){ln=Hi(f.nextSibling),l=f.data==="F!";break e}}fs(l)}l=!1}l&&(n=s[0])}}return s=ni(),s.memoizedState=s.baseState=n,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:r0,lastRenderedState:n},s.queue=l,s=A0.bind(null,dt,l),l.dispatch=s,l=Nf(!1),p=zf.bind(null,dt,!1,l.queue),l=ni(),f={state:n,dispatch:null,action:t,pending:null},l.queue=f,s=rM.bind(null,dt,f,p,s),f.dispatch=s,l.memoizedState=t,[n,s,!1]}function l0(t){var n=En();return c0(n,jt,t)}function c0(t,n,s){if(n=Df(t,n,r0)[0],t=pc(Fa)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var l=Jo(n)}catch(S){throw S===Gr?ac:S}else l=n;n=En();var f=n.queue,p=f.dispatch;return s!==n.memoizedState&&(dt.flags|=2048,Yr(9,{destroy:void 0},oM.bind(null,f,s),null)),[l,p,t]}function oM(t,n){t.action=n}function u0(t){var n=En(),s=jt;if(s!==null)return c0(n,s,t);En(),n=n.memoizedState,s=En();var l=s.queue.dispatch;return s.memoizedState=t,[n,l,!1]}function Yr(t,n,s,l){return t={tag:t,create:s,deps:l,inst:n,next:null},n=dt.updateQueue,n===null&&(n=dc(),dt.updateQueue=n),s=n.lastEffect,s===null?n.lastEffect=t.next=t:(l=s.next,s.next=t,t.next=l,n.lastEffect=t),t}function f0(){return En().memoizedState}function mc(t,n,s,l){var f=ni();dt.flags|=t,f.memoizedState=Yr(1|n,{destroy:void 0},s,l===void 0?null:l)}function gc(t,n,s,l){var f=En();l=l===void 0?null:l;var p=f.memoizedState.inst;jt!==null&&l!==null&&bf(l,jt.memoizedState.deps)?f.memoizedState=Yr(n,p,s,l):(dt.flags|=t,f.memoizedState=Yr(1|n,p,s,l))}function d0(t,n){mc(8390656,8,t,n)}function Of(t,n){gc(2048,8,t,n)}function lM(t){dt.flags|=4;var n=dt.updateQueue;if(n===null)n=dc(),dt.updateQueue=n,n.events=[t];else{var s=n.events;s===null?n.events=[t]:s.push(t)}}function h0(t){var n=En().memoizedState;return lM({ref:n,nextImpl:t}),function(){if((Ht&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function p0(t,n){return gc(4,2,t,n)}function m0(t,n){return gc(4,4,t,n)}function g0(t,n){if(typeof n=="function"){t=t();var s=n(t);return function(){typeof s=="function"?s():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function _0(t,n,s){s=s!=null?s.concat([t]):null,gc(4,4,g0.bind(null,n,t),s)}function Pf(){}function v0(t,n){var s=En();n=n===void 0?null:n;var l=s.memoizedState;return n!==null&&bf(n,l[1])?l[0]:(s.memoizedState=[t,n],t)}function x0(t,n){var s=En();n=n===void 0?null:n;var l=s.memoizedState;if(n!==null&&bf(n,l[1]))return l[0];if(l=t(),cr){we(!0);try{t()}finally{we(!1)}}return s.memoizedState=[l,n],l}function If(t,n,s){return s===void 0||(Ia&1073741824)!==0&&(Et&261930)===0?t.memoizedState=n:(t.memoizedState=s,t=Sg(),dt.lanes|=t,Ss|=t,s)}function S0(t,n,s,l){return vi(s,n)?s:kr.current!==null?(t=If(t,s,l),vi(t,n)||(Cn=!0),t):(Ia&42)===0||(Ia&1073741824)!==0&&(Et&261930)===0?(Cn=!0,t.memoizedState=s):(t=Sg(),dt.lanes|=t,Ss|=t,n)}function M0(t,n,s,l,f){var p=H.p;H.p=p!==0&&8>p?p:8;var S=z.T,w={};z.T=w,zf(t,!1,n,s);try{var V=f(),oe=z.S;if(oe!==null&&oe(w,V),V!==null&&typeof V=="object"&&typeof V.then=="function"){var xe=iM(V,l);$o(t,n,xe,bi(t))}else $o(t,n,l,bi(t))}catch(be){$o(t,n,{then:function(){},status:"rejected",reason:be},bi())}finally{H.p=p,S!==null&&w.types!==null&&(S.types=w.types),z.T=S}}function cM(){}function Ff(t,n,s,l){if(t.tag!==5)throw Error(r(476));var f=y0(t).queue;M0(t,f,n,$,s===null?cM:function(){return E0(t),s(l)})}function y0(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:$,baseState:$,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fa,lastRenderedState:$},next:null};var s={};return n.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fa,lastRenderedState:s},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function E0(t){var n=y0(t);n.next===null&&(n=t.alternate.memoizedState),$o(t,n.next.queue,{},bi())}function Bf(){return kn(gl)}function b0(){return En().memoizedState}function T0(){return En().memoizedState}function uM(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var s=bi();t=ps(s);var l=ms(n,t,s);l!==null&&(di(l,n,s),jo(l,n,s)),n={cache:hf()},t.payload=n;return}n=n.return}}function fM(t,n,s){var l=bi();s={lane:l,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},_c(t)?R0(n,s):(s=tf(t,n,s,l),s!==null&&(di(s,t,l),C0(s,n,l)))}function A0(t,n,s){var l=bi();$o(t,n,s,l)}function $o(t,n,s,l){var f={lane:l,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null};if(_c(t))R0(n,f);else{var p=t.alternate;if(t.lanes===0&&(p===null||p.lanes===0)&&(p=n.lastRenderedReducer,p!==null))try{var S=n.lastRenderedState,w=p(S,s);if(f.hasEagerState=!0,f.eagerState=w,vi(w,S))return Ql(t,n,f,0),en===null&&Kl(),!1}catch{}finally{}if(s=tf(t,n,f,l),s!==null)return di(s,t,l),C0(s,n,l),!0}return!1}function zf(t,n,s,l){if(l={lane:2,revertLane:_d(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},_c(t)){if(n)throw Error(r(479))}else n=tf(t,s,l,2),n!==null&&di(n,t,2)}function _c(t){var n=t.alternate;return t===dt||n!==null&&n===dt}function R0(t,n){Xr=uc=!0;var s=t.pending;s===null?n.next=n:(n.next=s.next,s.next=n),t.pending=n}function C0(t,n,s){if((s&4194048)!==0){var l=n.lanes;l&=t.pendingLanes,s|=l,n.lanes=s,ti(t,s)}}var el={readContext:kn,use:hc,useCallback:xn,useContext:xn,useEffect:xn,useImperativeHandle:xn,useLayoutEffect:xn,useInsertionEffect:xn,useMemo:xn,useReducer:xn,useRef:xn,useState:xn,useDebugValue:xn,useDeferredValue:xn,useTransition:xn,useSyncExternalStore:xn,useId:xn,useHostTransitionStatus:xn,useFormState:xn,useActionState:xn,useOptimistic:xn,useMemoCache:xn,useCacheRefresh:xn};el.useEffectEvent=xn;var w0={readContext:kn,use:hc,useCallback:function(t,n){return ni().memoizedState=[t,n===void 0?null:n],t},useContext:kn,useEffect:d0,useImperativeHandle:function(t,n,s){s=s!=null?s.concat([t]):null,mc(4194308,4,g0.bind(null,n,t),s)},useLayoutEffect:function(t,n){return mc(4194308,4,t,n)},useInsertionEffect:function(t,n){mc(4,2,t,n)},useMemo:function(t,n){var s=ni();n=n===void 0?null:n;var l=t();if(cr){we(!0);try{t()}finally{we(!1)}}return s.memoizedState=[l,n],l},useReducer:function(t,n,s){var l=ni();if(s!==void 0){var f=s(n);if(cr){we(!0);try{s(n)}finally{we(!1)}}}else f=n;return l.memoizedState=l.baseState=f,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:f},l.queue=t,t=t.dispatch=fM.bind(null,dt,t),[l.memoizedState,t]},useRef:function(t){var n=ni();return t={current:t},n.memoizedState=t},useState:function(t){t=Nf(t);var n=t.queue,s=A0.bind(null,dt,n);return n.dispatch=s,[t.memoizedState,s]},useDebugValue:Pf,useDeferredValue:function(t,n){var s=ni();return If(s,t,n)},useTransition:function(){var t=Nf(!1);return t=M0.bind(null,dt,t.queue,!0,!1),ni().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,s){var l=dt,f=ni();if(Rt){if(s===void 0)throw Error(r(407));s=s()}else{if(s=n(),en===null)throw Error(r(349));(Et&127)!==0||Km(l,n,s)}f.memoizedState=s;var p={value:s,getSnapshot:n};return f.queue=p,d0(Jm.bind(null,l,p,t),[t]),l.flags|=2048,Yr(9,{destroy:void 0},Qm.bind(null,l,p,s,n),null),s},useId:function(){var t=ni(),n=en.identifierPrefix;if(Rt){var s=pa,l=ha;s=(l&~(1<<32-Ge(l)-1)).toString(32)+s,n="_"+n+"R_"+s,s=fc++,0<s&&(n+="H"+s.toString(32)),n+="_"}else s=aM++,n="_"+n+"r_"+s.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:Bf,useFormState:o0,useActionState:o0,useOptimistic:function(t){var n=ni();n.memoizedState=n.baseState=t;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=s,n=zf.bind(null,dt,!0,s),s.dispatch=n,[t,n]},useMemoCache:wf,useCacheRefresh:function(){return ni().memoizedState=uM.bind(null,dt)},useEffectEvent:function(t){var n=ni(),s={impl:t};return n.memoizedState=s,function(){if((Ht&2)!==0)throw Error(r(440));return s.impl.apply(void 0,arguments)}}},Hf={readContext:kn,use:hc,useCallback:v0,useContext:kn,useEffect:Of,useImperativeHandle:_0,useInsertionEffect:p0,useLayoutEffect:m0,useMemo:x0,useReducer:pc,useRef:f0,useState:function(){return pc(Fa)},useDebugValue:Pf,useDeferredValue:function(t,n){var s=En();return S0(s,jt.memoizedState,t,n)},useTransition:function(){var t=pc(Fa)[0],n=En().memoizedState;return[typeof t=="boolean"?t:Jo(t),n]},useSyncExternalStore:Zm,useId:b0,useHostTransitionStatus:Bf,useFormState:l0,useActionState:l0,useOptimistic:function(t,n){var s=En();return t0(s,jt,t,n)},useMemoCache:wf,useCacheRefresh:T0};Hf.useEffectEvent=h0;var D0={readContext:kn,use:hc,useCallback:v0,useContext:kn,useEffect:Of,useImperativeHandle:_0,useInsertionEffect:p0,useLayoutEffect:m0,useMemo:x0,useReducer:Lf,useRef:f0,useState:function(){return Lf(Fa)},useDebugValue:Pf,useDeferredValue:function(t,n){var s=En();return jt===null?If(s,t,n):S0(s,jt.memoizedState,t,n)},useTransition:function(){var t=Lf(Fa)[0],n=En().memoizedState;return[typeof t=="boolean"?t:Jo(t),n]},useSyncExternalStore:Zm,useId:b0,useHostTransitionStatus:Bf,useFormState:u0,useActionState:u0,useOptimistic:function(t,n){var s=En();return jt!==null?t0(s,jt,t,n):(s.baseState=t,[t,s.queue.dispatch])},useMemoCache:wf,useCacheRefresh:T0};D0.useEffectEvent=h0;function Gf(t,n,s,l){n=t.memoizedState,s=s(l,n),s=s==null?n:v({},n,s),t.memoizedState=s,t.lanes===0&&(t.updateQueue.baseState=s)}var Vf={enqueueSetState:function(t,n,s){t=t._reactInternals;var l=bi(),f=ps(l);f.payload=n,s!=null&&(f.callback=s),n=ms(t,f,l),n!==null&&(di(n,t,l),jo(n,t,l))},enqueueReplaceState:function(t,n,s){t=t._reactInternals;var l=bi(),f=ps(l);f.tag=1,f.payload=n,s!=null&&(f.callback=s),n=ms(t,f,l),n!==null&&(di(n,t,l),jo(n,t,l))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var s=bi(),l=ps(s);l.tag=2,n!=null&&(l.callback=n),n=ms(t,l,s),n!==null&&(di(n,t,s),jo(n,t,s))}};function L0(t,n,s,l,f,p,S){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,p,S):n.prototype&&n.prototype.isPureReactComponent?!Ho(s,l)||!Ho(f,p):!0}function N0(t,n,s,l){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(s,l),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(s,l),n.state!==t&&Vf.enqueueReplaceState(n,n.state,null)}function ur(t,n){var s=n;if("ref"in n){s={};for(var l in n)l!=="ref"&&(s[l]=n[l])}if(t=t.defaultProps){s===n&&(s=v({},s));for(var f in t)s[f]===void 0&&(s[f]=t[f])}return s}function U0(t){Zl(t)}function O0(t){console.error(t)}function P0(t){Zl(t)}function vc(t,n){try{var s=t.onUncaughtError;s(n.value,{componentStack:n.stack})}catch(l){setTimeout(function(){throw l})}}function I0(t,n,s){try{var l=t.onCaughtError;l(s.value,{componentStack:s.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function kf(t,n,s){return s=ps(s),s.tag=3,s.payload={element:null},s.callback=function(){vc(t,n)},s}function F0(t){return t=ps(t),t.tag=3,t}function B0(t,n,s,l){var f=s.type.getDerivedStateFromError;if(typeof f=="function"){var p=l.value;t.payload=function(){return f(p)},t.callback=function(){I0(n,s,l)}}var S=s.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(t.callback=function(){I0(n,s,l),typeof f!="function"&&(Ms===null?Ms=new Set([this]):Ms.add(this));var w=l.stack;this.componentDidCatch(l.value,{componentStack:w!==null?w:""})})}function dM(t,n,s,l,f){if(s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(n=s.alternate,n!==null&&Br(n,s,f,!0),s=Si.current,s!==null){switch(s.tag){case 31:case 13:return zi===null?Dc():s.alternate===null&&Sn===0&&(Sn=3),s.flags&=-257,s.flags|=65536,s.lanes=f,l===sc?s.flags|=16384:(n=s.updateQueue,n===null?s.updateQueue=new Set([l]):n.add(l),pd(t,l,f)),!1;case 22:return s.flags|=65536,l===sc?s.flags|=16384:(n=s.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([l])},s.updateQueue=n):(s=n.retryQueue,s===null?n.retryQueue=new Set([l]):s.add(l)),pd(t,l,f)),!1}throw Error(r(435,s.tag))}return pd(t,l,f),Dc(),!1}if(Rt)return n=Si.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=f,l!==lf&&(t=Error(r(422),{cause:l}),ko(Pi(t,s)))):(l!==lf&&(n=Error(r(423),{cause:l}),ko(Pi(n,s))),t=t.current.alternate,t.flags|=65536,f&=-f,t.lanes|=f,l=Pi(l,s),f=kf(t.stateNode,l,f),xf(t,f),Sn!==4&&(Sn=2)),!1;var p=Error(r(520),{cause:l});if(p=Pi(p,s),ll===null?ll=[p]:ll.push(p),Sn!==4&&(Sn=2),n===null)return!0;l=Pi(l,s),s=n;do{switch(s.tag){case 3:return s.flags|=65536,t=f&-f,s.lanes|=t,t=kf(s.stateNode,l,t),xf(s,t),!1;case 1:if(n=s.type,p=s.stateNode,(s.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Ms===null||!Ms.has(p))))return s.flags|=65536,f&=-f,s.lanes|=f,f=F0(f),B0(f,t,s,l),xf(s,f),!1}s=s.return}while(s!==null);return!1}var Xf=Error(r(461)),Cn=!1;function Xn(t,n,s,l){n.child=t===null?Vm(n,null,s,l):lr(n,t.child,s,l)}function z0(t,n,s,l,f){s=s.render;var p=n.ref;if("ref"in l){var S={};for(var w in l)w!=="ref"&&(S[w]=l[w])}else S=l;return ar(n),l=Tf(t,n,s,S,p,f),w=Af(),t!==null&&!Cn?(Rf(t,n,f),Ba(t,n,f)):(Rt&&w&&rf(n),n.flags|=1,Xn(t,n,l,f),n.child)}function H0(t,n,s,l,f){if(t===null){var p=s.type;return typeof p=="function"&&!nf(p)&&p.defaultProps===void 0&&s.compare===null?(n.tag=15,n.type=p,G0(t,n,p,l,f)):(t=$l(s.type,null,l,n,n.mode,f),t.ref=n.ref,t.return=n,n.child=t)}if(p=t.child,!Jf(t,f)){var S=p.memoizedProps;if(s=s.compare,s=s!==null?s:Ho,s(S,l)&&t.ref===n.ref)return Ba(t,n,f)}return n.flags|=1,t=Na(p,l),t.ref=n.ref,t.return=n,n.child=t}function G0(t,n,s,l,f){if(t!==null){var p=t.memoizedProps;if(Ho(p,l)&&t.ref===n.ref)if(Cn=!1,n.pendingProps=l=p,Jf(t,f))(t.flags&131072)!==0&&(Cn=!0);else return n.lanes=t.lanes,Ba(t,n,f)}return Wf(t,n,s,l,f)}function V0(t,n,s,l){var f=l.children,p=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((n.flags&128)!==0){if(p=p!==null?p.baseLanes|s:s,t!==null){for(l=n.child=t.child,f=0;l!==null;)f=f|l.lanes|l.childLanes,l=l.sibling;l=f&~p}else l=0,n.child=null;return k0(t,n,p,s,l)}if((s&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&ic(n,p!==null?p.cachePool:null),p!==null?Wm(n,p):Mf(),Ym(n);else return l=n.lanes=536870912,k0(t,n,p!==null?p.baseLanes|s:s,s,l)}else p!==null?(ic(n,p.cachePool),Wm(n,p),_s(),n.memoizedState=null):(t!==null&&ic(n,null),Mf(),_s());return Xn(t,n,f,s),n.child}function tl(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function k0(t,n,s,l,f){var p=mf();return p=p===null?null:{parent:An._currentValue,pool:p},n.memoizedState={baseLanes:s,cachePool:p},t!==null&&ic(n,null),Mf(),Ym(n),t!==null&&Br(t,n,l,!0),n.childLanes=f,null}function xc(t,n){return n=Mc({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function X0(t,n,s){return lr(n,t.child,null,s),t=xc(n,n.pendingProps),t.flags|=2,Mi(n),n.memoizedState=null,t}function hM(t,n,s){var l=n.pendingProps,f=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(Rt){if(l.mode==="hidden")return t=xc(n,l),n.lanes=536870912,tl(null,t);if(Ef(n),(t=ln)?(t=n_(t,Bi),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:cs!==null?{id:ha,overflow:pa}:null,retryLane:536870912,hydrationErrors:null},s=Rm(t),s.return=n,n.child=s,Vn=n,ln=null)):t=null,t===null)throw fs(n);return n.lanes=536870912,null}return xc(n,l)}var p=t.memoizedState;if(p!==null){var S=p.dehydrated;if(Ef(n),f)if(n.flags&256)n.flags&=-257,n=X0(t,n,s);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(r(558));else if(Cn||Br(t,n,s,!1),f=(s&t.childLanes)!==0,Cn||f){if(l=en,l!==null&&(S=In(l,s),S!==0&&S!==p.retryLane))throw p.retryLane=S,er(t,S),di(l,t,S),Xf;Dc(),n=X0(t,n,s)}else t=p.treeContext,ln=Hi(S.nextSibling),Vn=n,Rt=!0,us=null,Bi=!1,t!==null&&Dm(n,t),n=xc(n,l),n.flags|=4096;return n}return t=Na(t.child,{mode:l.mode,children:l.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Sc(t,n){var s=n.ref;if(s===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(r(284));(t===null||t.ref!==s)&&(n.flags|=4194816)}}function Wf(t,n,s,l,f){return ar(n),s=Tf(t,n,s,l,void 0,f),l=Af(),t!==null&&!Cn?(Rf(t,n,f),Ba(t,n,f)):(Rt&&l&&rf(n),n.flags|=1,Xn(t,n,s,f),n.child)}function W0(t,n,s,l,f,p){return ar(n),n.updateQueue=null,s=jm(n,l,s,f),qm(t),l=Af(),t!==null&&!Cn?(Rf(t,n,p),Ba(t,n,p)):(Rt&&l&&rf(n),n.flags|=1,Xn(t,n,s,p),n.child)}function Y0(t,n,s,l,f){if(ar(n),n.stateNode===null){var p=Or,S=s.contextType;typeof S=="object"&&S!==null&&(p=kn(S)),p=new s(l,p),n.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,p.updater=Vf,n.stateNode=p,p._reactInternals=n,p=n.stateNode,p.props=l,p.state=n.memoizedState,p.refs={},_f(n),S=s.contextType,p.context=typeof S=="object"&&S!==null?kn(S):Or,p.state=n.memoizedState,S=s.getDerivedStateFromProps,typeof S=="function"&&(Gf(n,s,S,l),p.state=n.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(S=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),S!==p.state&&Vf.enqueueReplaceState(p,p.state,null),Ko(n,l,p,f),Zo(),p.state=n.memoizedState),typeof p.componentDidMount=="function"&&(n.flags|=4194308),l=!0}else if(t===null){p=n.stateNode;var w=n.memoizedProps,V=ur(s,w);p.props=V;var oe=p.context,xe=s.contextType;S=Or,typeof xe=="object"&&xe!==null&&(S=kn(xe));var be=s.getDerivedStateFromProps;xe=typeof be=="function"||typeof p.getSnapshotBeforeUpdate=="function",w=n.pendingProps!==w,xe||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(w||oe!==S)&&N0(n,p,l,S),hs=!1;var ce=n.memoizedState;p.state=ce,Ko(n,l,p,f),Zo(),oe=n.memoizedState,w||ce!==oe||hs?(typeof be=="function"&&(Gf(n,s,be,l),oe=n.memoizedState),(V=hs||L0(n,s,V,l,ce,oe,S))?(xe||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount()),typeof p.componentDidMount=="function"&&(n.flags|=4194308)):(typeof p.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=l,n.memoizedState=oe),p.props=l,p.state=oe,p.context=S,l=V):(typeof p.componentDidMount=="function"&&(n.flags|=4194308),l=!1)}else{p=n.stateNode,vf(t,n),S=n.memoizedProps,xe=ur(s,S),p.props=xe,be=n.pendingProps,ce=p.context,oe=s.contextType,V=Or,typeof oe=="object"&&oe!==null&&(V=kn(oe)),w=s.getDerivedStateFromProps,(oe=typeof w=="function"||typeof p.getSnapshotBeforeUpdate=="function")||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(S!==be||ce!==V)&&N0(n,p,l,V),hs=!1,ce=n.memoizedState,p.state=ce,Ko(n,l,p,f),Zo();var de=n.memoizedState;S!==be||ce!==de||hs||t!==null&&t.dependencies!==null&&tc(t.dependencies)?(typeof w=="function"&&(Gf(n,s,w,l),de=n.memoizedState),(xe=hs||L0(n,s,xe,l,ce,de,V)||t!==null&&t.dependencies!==null&&tc(t.dependencies))?(oe||typeof p.UNSAFE_componentWillUpdate!="function"&&typeof p.componentWillUpdate!="function"||(typeof p.componentWillUpdate=="function"&&p.componentWillUpdate(l,de,V),typeof p.UNSAFE_componentWillUpdate=="function"&&p.UNSAFE_componentWillUpdate(l,de,V)),typeof p.componentDidUpdate=="function"&&(n.flags|=4),typeof p.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof p.componentDidUpdate!="function"||S===t.memoizedProps&&ce===t.memoizedState||(n.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||S===t.memoizedProps&&ce===t.memoizedState||(n.flags|=1024),n.memoizedProps=l,n.memoizedState=de),p.props=l,p.state=de,p.context=V,l=xe):(typeof p.componentDidUpdate!="function"||S===t.memoizedProps&&ce===t.memoizedState||(n.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||S===t.memoizedProps&&ce===t.memoizedState||(n.flags|=1024),l=!1)}return p=l,Sc(t,n),l=(n.flags&128)!==0,p||l?(p=n.stateNode,s=l&&typeof s.getDerivedStateFromError!="function"?null:p.render(),n.flags|=1,t!==null&&l?(n.child=lr(n,t.child,null,f),n.child=lr(n,null,s,f)):Xn(t,n,s,f),n.memoizedState=p.state,t=n.child):t=Ba(t,n,f),t}function q0(t,n,s,l){return nr(),n.flags|=256,Xn(t,n,s,l),n.child}var Yf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function qf(t){return{baseLanes:t,cachePool:Im()}}function jf(t,n,s){return t=t!==null?t.childLanes&~s:0,n&&(t|=Ei),t}function j0(t,n,s){var l=n.pendingProps,f=!1,p=(n.flags&128)!==0,S;if((S=p)||(S=t!==null&&t.memoizedState===null?!1:(yn.current&2)!==0),S&&(f=!0,n.flags&=-129),S=(n.flags&32)!==0,n.flags&=-33,t===null){if(Rt){if(f?gs(n):_s(),(t=ln)?(t=n_(t,Bi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:cs!==null?{id:ha,overflow:pa}:null,retryLane:536870912,hydrationErrors:null},s=Rm(t),s.return=n,n.child=s,Vn=n,ln=null)):t=null,t===null)throw fs(n);return Dd(t)?n.lanes=32:n.lanes=536870912,null}var w=l.children;return l=l.fallback,f?(_s(),f=n.mode,w=Mc({mode:"hidden",children:w},f),l=tr(l,f,s,null),w.return=n,l.return=n,w.sibling=l,n.child=w,l=n.child,l.memoizedState=qf(s),l.childLanes=jf(t,S,s),n.memoizedState=Yf,tl(null,l)):(gs(n),Zf(n,w))}var V=t.memoizedState;if(V!==null&&(w=V.dehydrated,w!==null)){if(p)n.flags&256?(gs(n),n.flags&=-257,n=Kf(t,n,s)):n.memoizedState!==null?(_s(),n.child=t.child,n.flags|=128,n=null):(_s(),w=l.fallback,f=n.mode,l=Mc({mode:"visible",children:l.children},f),w=tr(w,f,s,null),w.flags|=2,l.return=n,w.return=n,l.sibling=w,n.child=l,lr(n,t.child,null,s),l=n.child,l.memoizedState=qf(s),l.childLanes=jf(t,S,s),n.memoizedState=Yf,n=tl(null,l));else if(gs(n),Dd(w)){if(S=w.nextSibling&&w.nextSibling.dataset,S)var oe=S.dgst;S=oe,l=Error(r(419)),l.stack="",l.digest=S,ko({value:l,source:null,stack:null}),n=Kf(t,n,s)}else if(Cn||Br(t,n,s,!1),S=(s&t.childLanes)!==0,Cn||S){if(S=en,S!==null&&(l=In(S,s),l!==0&&l!==V.retryLane))throw V.retryLane=l,er(t,l),di(S,t,l),Xf;wd(w)||Dc(),n=Kf(t,n,s)}else wd(w)?(n.flags|=192,n.child=t.child,n=null):(t=V.treeContext,ln=Hi(w.nextSibling),Vn=n,Rt=!0,us=null,Bi=!1,t!==null&&Dm(n,t),n=Zf(n,l.children),n.flags|=4096);return n}return f?(_s(),w=l.fallback,f=n.mode,V=t.child,oe=V.sibling,l=Na(V,{mode:"hidden",children:l.children}),l.subtreeFlags=V.subtreeFlags&65011712,oe!==null?w=Na(oe,w):(w=tr(w,f,s,null),w.flags|=2),w.return=n,l.return=n,l.sibling=w,n.child=l,tl(null,l),l=n.child,w=t.child.memoizedState,w===null?w=qf(s):(f=w.cachePool,f!==null?(V=An._currentValue,f=f.parent!==V?{parent:V,pool:V}:f):f=Im(),w={baseLanes:w.baseLanes|s,cachePool:f}),l.memoizedState=w,l.childLanes=jf(t,S,s),n.memoizedState=Yf,tl(t.child,l)):(gs(n),s=t.child,t=s.sibling,s=Na(s,{mode:"visible",children:l.children}),s.return=n,s.sibling=null,t!==null&&(S=n.deletions,S===null?(n.deletions=[t],n.flags|=16):S.push(t)),n.child=s,n.memoizedState=null,s)}function Zf(t,n){return n=Mc({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Mc(t,n){return t=xi(22,t,null,n),t.lanes=0,t}function Kf(t,n,s){return lr(n,t.child,null,s),t=Zf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function Z0(t,n,s){t.lanes|=n;var l=t.alternate;l!==null&&(l.lanes|=n),ff(t.return,n,s)}function Qf(t,n,s,l,f,p){var S=t.memoizedState;S===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:l,tail:s,tailMode:f,treeForkCount:p}:(S.isBackwards=n,S.rendering=null,S.renderingStartTime=0,S.last=l,S.tail=s,S.tailMode=f,S.treeForkCount=p)}function K0(t,n,s){var l=n.pendingProps,f=l.revealOrder,p=l.tail;l=l.children;var S=yn.current,w=(S&2)!==0;if(w?(S=S&1|2,n.flags|=128):S&=1,Te(yn,S),Xn(t,n,l,s),l=Rt?Vo:0,!w&&t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Z0(t,s,n);else if(t.tag===19)Z0(t,s,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(f){case"forwards":for(s=n.child,f=null;s!==null;)t=s.alternate,t!==null&&cc(t)===null&&(f=s),s=s.sibling;s=f,s===null?(f=n.child,n.child=null):(f=s.sibling,s.sibling=null),Qf(n,!1,f,s,p,l);break;case"backwards":case"unstable_legacy-backwards":for(s=null,f=n.child,n.child=null;f!==null;){if(t=f.alternate,t!==null&&cc(t)===null){n.child=f;break}t=f.sibling,f.sibling=s,s=f,f=t}Qf(n,!0,s,null,p,l);break;case"together":Qf(n,!1,null,null,void 0,l);break;default:n.memoizedState=null}return n.child}function Ba(t,n,s){if(t!==null&&(n.dependencies=t.dependencies),Ss|=n.lanes,(s&n.childLanes)===0)if(t!==null){if(Br(t,n,s,!1),(s&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,s=Na(t,t.pendingProps),n.child=s,s.return=n;t.sibling!==null;)t=t.sibling,s=s.sibling=Na(t,t.pendingProps),s.return=n;s.sibling=null}return n.child}function Jf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&tc(t)))}function pM(t,n,s){switch(n.tag){case 3:ge(n,n.stateNode.containerInfo),ds(n,An,t.memoizedState.cache),nr();break;case 27:case 5:nt(n);break;case 4:ge(n,n.stateNode.containerInfo);break;case 10:ds(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Ef(n),null;break;case 13:var l=n.memoizedState;if(l!==null)return l.dehydrated!==null?(gs(n),n.flags|=128,null):(s&n.child.childLanes)!==0?j0(t,n,s):(gs(n),t=Ba(t,n,s),t!==null?t.sibling:null);gs(n);break;case 19:var f=(t.flags&128)!==0;if(l=(s&n.childLanes)!==0,l||(Br(t,n,s,!1),l=(s&n.childLanes)!==0),f){if(l)return K0(t,n,s);n.flags|=128}if(f=n.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),Te(yn,yn.current),l)break;return null;case 22:return n.lanes=0,V0(t,n,s,n.pendingProps);case 24:ds(n,An,t.memoizedState.cache)}return Ba(t,n,s)}function Q0(t,n,s){if(t!==null)if(t.memoizedProps!==n.pendingProps)Cn=!0;else{if(!Jf(t,s)&&(n.flags&128)===0)return Cn=!1,pM(t,n,s);Cn=(t.flags&131072)!==0}else Cn=!1,Rt&&(n.flags&1048576)!==0&&wm(n,Vo,n.index);switch(n.lanes=0,n.tag){case 16:e:{var l=n.pendingProps;if(t=rr(n.elementType),n.type=t,typeof t=="function")nf(t)?(l=ur(t,l),n.tag=1,n=Y0(null,n,t,l,s)):(n.tag=0,n=Wf(null,n,t,l,s));else{if(t!=null){var f=t.$$typeof;if(f===C){n.tag=11,n=z0(null,n,t,l,s);break e}else if(f===B){n.tag=14,n=H0(null,n,t,l,s);break e}}throw n=ue(t)||t,Error(r(306,n,""))}}return n;case 0:return Wf(t,n,n.type,n.pendingProps,s);case 1:return l=n.type,f=ur(l,n.pendingProps),Y0(t,n,l,f,s);case 3:e:{if(ge(n,n.stateNode.containerInfo),t===null)throw Error(r(387));l=n.pendingProps;var p=n.memoizedState;f=p.element,vf(t,n),Ko(n,l,null,s);var S=n.memoizedState;if(l=S.cache,ds(n,An,l),l!==p.cache&&df(n,[An],s,!0),Zo(),l=S.element,p.isDehydrated)if(p={element:l,isDehydrated:!1,cache:S.cache},n.updateQueue.baseState=p,n.memoizedState=p,n.flags&256){n=q0(t,n,l,s);break e}else if(l!==f){f=Pi(Error(r(424)),n),ko(f),n=q0(t,n,l,s);break e}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(ln=Hi(t.firstChild),Vn=n,Rt=!0,us=null,Bi=!0,s=Vm(n,null,l,s),n.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling}else{if(nr(),l===f){n=Ba(t,n,s);break e}Xn(t,n,l,s)}n=n.child}return n;case 26:return Sc(t,n),t===null?(s=l_(n.type,null,n.pendingProps,null))?n.memoizedState=s:Rt||(s=n.type,t=n.pendingProps,l=Fc(ae.current).createElement(s),l[mn]=n,l[_n]=t,Wn(l,s,t),_e(l),n.stateNode=l):n.memoizedState=l_(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return nt(n),t===null&&Rt&&(l=n.stateNode=s_(n.type,n.pendingProps,ae.current),Vn=n,Bi=!0,f=ln,Ts(n.type)?(Ld=f,ln=Hi(l.firstChild)):ln=f),Xn(t,n,n.pendingProps.children,s),Sc(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Rt&&((f=l=ln)&&(l=XM(l,n.type,n.pendingProps,Bi),l!==null?(n.stateNode=l,Vn=n,ln=Hi(l.firstChild),Bi=!1,f=!0):f=!1),f||fs(n)),nt(n),f=n.type,p=n.pendingProps,S=t!==null?t.memoizedProps:null,l=p.children,Ad(f,p)?l=null:S!==null&&Ad(f,S)&&(n.flags|=32),n.memoizedState!==null&&(f=Tf(t,n,sM,null,null,s),gl._currentValue=f),Sc(t,n),Xn(t,n,l,s),n.child;case 6:return t===null&&Rt&&((t=s=ln)&&(s=WM(s,n.pendingProps,Bi),s!==null?(n.stateNode=s,Vn=n,ln=null,t=!0):t=!1),t||fs(n)),null;case 13:return j0(t,n,s);case 4:return ge(n,n.stateNode.containerInfo),l=n.pendingProps,t===null?n.child=lr(n,null,l,s):Xn(t,n,l,s),n.child;case 11:return z0(t,n,n.type,n.pendingProps,s);case 7:return Xn(t,n,n.pendingProps,s),n.child;case 8:return Xn(t,n,n.pendingProps.children,s),n.child;case 12:return Xn(t,n,n.pendingProps.children,s),n.child;case 10:return l=n.pendingProps,ds(n,n.type,l.value),Xn(t,n,l.children,s),n.child;case 9:return f=n.type._context,l=n.pendingProps.children,ar(n),f=kn(f),l=l(f),n.flags|=1,Xn(t,n,l,s),n.child;case 14:return H0(t,n,n.type,n.pendingProps,s);case 15:return G0(t,n,n.type,n.pendingProps,s);case 19:return K0(t,n,s);case 31:return hM(t,n,s);case 22:return V0(t,n,s,n.pendingProps);case 24:return ar(n),l=kn(An),t===null?(f=mf(),f===null&&(f=en,p=hf(),f.pooledCache=p,p.refCount++,p!==null&&(f.pooledCacheLanes|=s),f=p),n.memoizedState={parent:l,cache:f},_f(n),ds(n,An,f)):((t.lanes&s)!==0&&(vf(t,n),Ko(n,null,null,s),Zo()),f=t.memoizedState,p=n.memoizedState,f.parent!==l?(f={parent:l,cache:l},n.memoizedState=f,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=f),ds(n,An,l)):(l=p.cache,ds(n,An,l),l!==f.cache&&df(n,[An],s,!0))),Xn(t,n,n.pendingProps.children,s),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function za(t){t.flags|=4}function $f(t,n,s,l,f){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(f&335544128)===f)if(t.stateNode.complete)t.flags|=8192;else if(bg())t.flags|=8192;else throw or=sc,gf}else t.flags&=-16777217}function J0(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!h_(n))if(bg())t.flags|=8192;else throw or=sc,gf}function yc(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Ee():536870912,t.lanes|=n,Kr|=n)}function nl(t,n){if(!Rt)switch(t.tailMode){case"hidden":n=t.tail;for(var s=null;n!==null;)n.alternate!==null&&(s=n),n=n.sibling;s===null?t.tail=null:s.sibling=null;break;case"collapsed":s=t.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function cn(t){var n=t.alternate!==null&&t.alternate.child===t.child,s=0,l=0;if(n)for(var f=t.child;f!==null;)s|=f.lanes|f.childLanes,l|=f.subtreeFlags&65011712,l|=f.flags&65011712,f.return=t,f=f.sibling;else for(f=t.child;f!==null;)s|=f.lanes|f.childLanes,l|=f.subtreeFlags,l|=f.flags,f.return=t,f=f.sibling;return t.subtreeFlags|=l,t.childLanes=s,n}function mM(t,n,s){var l=n.pendingProps;switch(of(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return cn(n),null;case 1:return cn(n),null;case 3:return s=n.stateNode,l=null,t!==null&&(l=t.memoizedState.cache),n.memoizedState.cache!==l&&(n.flags|=2048),Pa(An),We(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(t===null||t.child===null)&&(Fr(n)?za(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,cf())),cn(n),null;case 26:var f=n.type,p=n.memoizedState;return t===null?(za(n),p!==null?(cn(n),J0(n,p)):(cn(n),$f(n,f,null,l,s))):p?p!==t.memoizedState?(za(n),cn(n),J0(n,p)):(cn(n),n.flags&=-16777217):(t=t.memoizedProps,t!==l&&za(n),cn(n),$f(n,f,t,l,s)),null;case 27:if(Qe(n),s=ae.current,f=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==l&&za(n);else{if(!l){if(n.stateNode===null)throw Error(r(166));return cn(n),null}t=Ae.current,Fr(n)?Lm(n):(t=s_(f,l,s),n.stateNode=t,za(n))}return cn(n),null;case 5:if(Qe(n),f=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==l&&za(n);else{if(!l){if(n.stateNode===null)throw Error(r(166));return cn(n),null}if(p=Ae.current,Fr(n))Lm(n);else{var S=Fc(ae.current);switch(p){case 1:p=S.createElementNS("http://www.w3.org/2000/svg",f);break;case 2:p=S.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;default:switch(f){case"svg":p=S.createElementNS("http://www.w3.org/2000/svg",f);break;case"math":p=S.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;case"script":p=S.createElement("div"),p.innerHTML="<script><\/script>",p=p.removeChild(p.firstChild);break;case"select":p=typeof l.is=="string"?S.createElement("select",{is:l.is}):S.createElement("select"),l.multiple?p.multiple=!0:l.size&&(p.size=l.size);break;default:p=typeof l.is=="string"?S.createElement(f,{is:l.is}):S.createElement(f)}}p[mn]=n,p[_n]=l;e:for(S=n.child;S!==null;){if(S.tag===5||S.tag===6)p.appendChild(S.stateNode);else if(S.tag!==4&&S.tag!==27&&S.child!==null){S.child.return=S,S=S.child;continue}if(S===n)break e;for(;S.sibling===null;){if(S.return===null||S.return===n)break e;S=S.return}S.sibling.return=S.return,S=S.sibling}n.stateNode=p;e:switch(Wn(p,f,l),f){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&za(n)}}return cn(n),$f(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,s),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==l&&za(n);else{if(typeof l!="string"&&n.stateNode===null)throw Error(r(166));if(t=ae.current,Fr(n)){if(t=n.stateNode,s=n.memoizedProps,l=null,f=Vn,f!==null)switch(f.tag){case 27:case 5:l=f.memoizedProps}t[mn]=n,t=!!(t.nodeValue===s||l!==null&&l.suppressHydrationWarning===!0||jg(t.nodeValue,s)),t||fs(n,!0)}else t=Fc(t).createTextNode(l),t[mn]=n,n.stateNode=t}return cn(n),null;case 31:if(s=n.memoizedState,t===null||t.memoizedState!==null){if(l=Fr(n),s!==null){if(t===null){if(!l)throw Error(r(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[mn]=n}else nr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;cn(n),t=!1}else s=cf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=s),t=!0;if(!t)return n.flags&256?(Mi(n),n):(Mi(n),null);if((n.flags&128)!==0)throw Error(r(558))}return cn(n),null;case 13:if(l=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(f=Fr(n),l!==null&&l.dehydrated!==null){if(t===null){if(!f)throw Error(r(318));if(f=n.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(r(317));f[mn]=n}else nr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;cn(n),f=!1}else f=cf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=f),f=!0;if(!f)return n.flags&256?(Mi(n),n):(Mi(n),null)}return Mi(n),(n.flags&128)!==0?(n.lanes=s,n):(s=l!==null,t=t!==null&&t.memoizedState!==null,s&&(l=n.child,f=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(f=l.alternate.memoizedState.cachePool.pool),p=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(p=l.memoizedState.cachePool.pool),p!==f&&(l.flags|=2048)),s!==t&&s&&(n.child.flags|=8192),yc(n,n.updateQueue),cn(n),null);case 4:return We(),t===null&&Md(n.stateNode.containerInfo),cn(n),null;case 10:return Pa(n.type),cn(n),null;case 19:if(K(yn),l=n.memoizedState,l===null)return cn(n),null;if(f=(n.flags&128)!==0,p=l.rendering,p===null)if(f)nl(l,!1);else{if(Sn!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(p=cc(t),p!==null){for(n.flags|=128,nl(l,!1),t=p.updateQueue,n.updateQueue=t,yc(n,t),n.subtreeFlags=0,t=s,s=n.child;s!==null;)Am(s,t),s=s.sibling;return Te(yn,yn.current&1|2),Rt&&Ua(n,l.treeForkCount),n.child}t=t.sibling}l.tail!==null&&Tt()>Rc&&(n.flags|=128,f=!0,nl(l,!1),n.lanes=4194304)}else{if(!f)if(t=cc(p),t!==null){if(n.flags|=128,f=!0,t=t.updateQueue,n.updateQueue=t,yc(n,t),nl(l,!0),l.tail===null&&l.tailMode==="hidden"&&!p.alternate&&!Rt)return cn(n),null}else 2*Tt()-l.renderingStartTime>Rc&&s!==536870912&&(n.flags|=128,f=!0,nl(l,!1),n.lanes=4194304);l.isBackwards?(p.sibling=n.child,n.child=p):(t=l.last,t!==null?t.sibling=p:n.child=p,l.last=p)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=Tt(),t.sibling=null,s=yn.current,Te(yn,f?s&1|2:s&1),Rt&&Ua(n,l.treeForkCount),t):(cn(n),null);case 22:case 23:return Mi(n),yf(),l=n.memoizedState!==null,t!==null?t.memoizedState!==null!==l&&(n.flags|=8192):l&&(n.flags|=8192),l?(s&536870912)!==0&&(n.flags&128)===0&&(cn(n),n.subtreeFlags&6&&(n.flags|=8192)):cn(n),s=n.updateQueue,s!==null&&yc(n,s.retryQueue),s=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),l=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(l=n.memoizedState.cachePool.pool),l!==s&&(n.flags|=2048),t!==null&&K(sr),null;case 24:return s=null,t!==null&&(s=t.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),Pa(An),cn(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function gM(t,n){switch(of(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Pa(An),We(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return Qe(n),null;case 31:if(n.memoizedState!==null){if(Mi(n),n.alternate===null)throw Error(r(340));nr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(Mi(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));nr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return K(yn),null;case 4:return We(),null;case 10:return Pa(n.type),null;case 22:case 23:return Mi(n),yf(),t!==null&&K(sr),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Pa(An),null;case 25:return null;default:return null}}function $0(t,n){switch(of(n),n.tag){case 3:Pa(An),We();break;case 26:case 27:case 5:Qe(n);break;case 4:We();break;case 31:n.memoizedState!==null&&Mi(n);break;case 13:Mi(n);break;case 19:K(yn);break;case 10:Pa(n.type);break;case 22:case 23:Mi(n),yf(),t!==null&&K(sr);break;case 24:Pa(An)}}function il(t,n){try{var s=n.updateQueue,l=s!==null?s.lastEffect:null;if(l!==null){var f=l.next;s=f;do{if((s.tag&t)===t){l=void 0;var p=s.create,S=s.inst;l=p(),S.destroy=l}s=s.next}while(s!==f)}}catch(w){Xt(n,n.return,w)}}function vs(t,n,s){try{var l=n.updateQueue,f=l!==null?l.lastEffect:null;if(f!==null){var p=f.next;l=p;do{if((l.tag&t)===t){var S=l.inst,w=S.destroy;if(w!==void 0){S.destroy=void 0,f=n;var V=s,oe=w;try{oe()}catch(xe){Xt(f,V,xe)}}}l=l.next}while(l!==p)}}catch(xe){Xt(n,n.return,xe)}}function eg(t){var n=t.updateQueue;if(n!==null){var s=t.stateNode;try{Xm(n,s)}catch(l){Xt(t,t.return,l)}}}function tg(t,n,s){s.props=ur(t.type,t.memoizedProps),s.state=t.memoizedState;try{s.componentWillUnmount()}catch(l){Xt(t,n,l)}}function al(t,n){try{var s=t.ref;if(s!==null){switch(t.tag){case 26:case 27:case 5:var l=t.stateNode;break;case 30:l=t.stateNode;break;default:l=t.stateNode}typeof s=="function"?t.refCleanup=s(l):s.current=l}}catch(f){Xt(t,n,f)}}function ma(t,n){var s=t.ref,l=t.refCleanup;if(s!==null)if(typeof l=="function")try{l()}catch(f){Xt(t,n,f)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(f){Xt(t,n,f)}else s.current=null}function ng(t){var n=t.type,s=t.memoizedProps,l=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":s.autoFocus&&l.focus();break e;case"img":s.src?l.src=s.src:s.srcSet&&(l.srcset=s.srcSet)}}catch(f){Xt(t,t.return,f)}}function ed(t,n,s){try{var l=t.stateNode;BM(l,t.type,s,n),l[_n]=n}catch(f){Xt(t,t.return,f)}}function ig(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Ts(t.type)||t.tag===4}function td(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||ig(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Ts(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function nd(t,n,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,n?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(t,n):(n=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,n.appendChild(t),s=s._reactRootContainer,s!=null||n.onclick!==null||(n.onclick=_i));else if(l!==4&&(l===27&&Ts(t.type)&&(s=t.stateNode,n=null),t=t.child,t!==null))for(nd(t,n,s),t=t.sibling;t!==null;)nd(t,n,s),t=t.sibling}function Ec(t,n,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,n?s.insertBefore(t,n):s.appendChild(t);else if(l!==4&&(l===27&&Ts(t.type)&&(s=t.stateNode),t=t.child,t!==null))for(Ec(t,n,s),t=t.sibling;t!==null;)Ec(t,n,s),t=t.sibling}function ag(t){var n=t.stateNode,s=t.memoizedProps;try{for(var l=t.type,f=n.attributes;f.length;)n.removeAttributeNode(f[0]);Wn(n,l,s),n[mn]=t,n[_n]=s}catch(p){Xt(t,t.return,p)}}var Ha=!1,wn=!1,id=!1,sg=typeof WeakSet=="function"?WeakSet:Set,Fn=null;function _M(t,n){if(t=t.containerInfo,bd=Xc,t=_m(t),Zu(t)){if("selectionStart"in t)var s={start:t.selectionStart,end:t.selectionEnd};else e:{s=(s=t.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var f=l.anchorOffset,p=l.focusNode;l=l.focusOffset;try{s.nodeType,p.nodeType}catch{s=null;break e}var S=0,w=-1,V=-1,oe=0,xe=0,be=t,ce=null;t:for(;;){for(var de;be!==s||f!==0&&be.nodeType!==3||(w=S+f),be!==p||l!==0&&be.nodeType!==3||(V=S+l),be.nodeType===3&&(S+=be.nodeValue.length),(de=be.firstChild)!==null;)ce=be,be=de;for(;;){if(be===t)break t;if(ce===s&&++oe===f&&(w=S),ce===p&&++xe===l&&(V=S),(de=be.nextSibling)!==null)break;be=ce,ce=be.parentNode}be=de}s=w===-1||V===-1?null:{start:w,end:V}}else s=null}s=s||{start:0,end:0}}else s=null;for(Td={focusedElem:t,selectionRange:s},Xc=!1,Fn=n;Fn!==null;)if(n=Fn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,Fn=t;else for(;Fn!==null;){switch(n=Fn,p=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(s=0;s<t.length;s++)f=t[s],f.ref.impl=f.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&p!==null){t=void 0,s=n,f=p.memoizedProps,p=p.memoizedState,l=s.stateNode;try{var Je=ur(s.type,f);t=l.getSnapshotBeforeUpdate(Je,p),l.__reactInternalSnapshotBeforeUpdate=t}catch(st){Xt(s,s.return,st)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,s=t.nodeType,s===9)Cd(t);else if(s===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Cd(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,Fn=t;break}Fn=n.return}}function rg(t,n,s){var l=s.flags;switch(s.tag){case 0:case 11:case 15:Va(t,s),l&4&&il(5,s);break;case 1:if(Va(t,s),l&4)if(t=s.stateNode,n===null)try{t.componentDidMount()}catch(S){Xt(s,s.return,S)}else{var f=ur(s.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(f,n,t.__reactInternalSnapshotBeforeUpdate)}catch(S){Xt(s,s.return,S)}}l&64&&eg(s),l&512&&al(s,s.return);break;case 3:if(Va(t,s),l&64&&(t=s.updateQueue,t!==null)){if(n=null,s.child!==null)switch(s.child.tag){case 27:case 5:n=s.child.stateNode;break;case 1:n=s.child.stateNode}try{Xm(t,n)}catch(S){Xt(s,s.return,S)}}break;case 27:n===null&&l&4&&ag(s);case 26:case 5:Va(t,s),n===null&&l&4&&ng(s),l&512&&al(s,s.return);break;case 12:Va(t,s);break;case 31:Va(t,s),l&4&&cg(t,s);break;case 13:Va(t,s),l&4&&ug(t,s),l&64&&(t=s.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(s=AM.bind(null,s),YM(t,s))));break;case 22:if(l=s.memoizedState!==null||Ha,!l){n=n!==null&&n.memoizedState!==null||wn,f=Ha;var p=wn;Ha=l,(wn=n)&&!p?ka(t,s,(s.subtreeFlags&8772)!==0):Va(t,s),Ha=f,wn=p}break;case 30:break;default:Va(t,s)}}function og(t){var n=t.alternate;n!==null&&(t.alternate=null,og(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Zi(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var dn=null,li=!1;function Ga(t,n,s){for(s=s.child;s!==null;)lg(t,n,s),s=s.sibling}function lg(t,n,s){if(fe&&typeof fe.onCommitFiberUnmount=="function")try{fe.onCommitFiberUnmount(pe,s)}catch{}switch(s.tag){case 26:wn||ma(s,n),Ga(t,n,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:wn||ma(s,n);var l=dn,f=li;Ts(s.type)&&(dn=s.stateNode,li=!1),Ga(t,n,s),hl(s.stateNode),dn=l,li=f;break;case 5:wn||ma(s,n);case 6:if(l=dn,f=li,dn=null,Ga(t,n,s),dn=l,li=f,dn!==null)if(li)try{(dn.nodeType===9?dn.body:dn.nodeName==="HTML"?dn.ownerDocument.body:dn).removeChild(s.stateNode)}catch(p){Xt(s,n,p)}else try{dn.removeChild(s.stateNode)}catch(p){Xt(s,n,p)}break;case 18:dn!==null&&(li?(t=dn,e_(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,s.stateNode),ao(t)):e_(dn,s.stateNode));break;case 4:l=dn,f=li,dn=s.stateNode.containerInfo,li=!0,Ga(t,n,s),dn=l,li=f;break;case 0:case 11:case 14:case 15:vs(2,s,n),wn||vs(4,s,n),Ga(t,n,s);break;case 1:wn||(ma(s,n),l=s.stateNode,typeof l.componentWillUnmount=="function"&&tg(s,n,l)),Ga(t,n,s);break;case 21:Ga(t,n,s);break;case 22:wn=(l=wn)||s.memoizedState!==null,Ga(t,n,s),wn=l;break;default:Ga(t,n,s)}}function cg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{ao(t)}catch(s){Xt(n,n.return,s)}}}function ug(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{ao(t)}catch(s){Xt(n,n.return,s)}}function vM(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new sg),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new sg),n;default:throw Error(r(435,t.tag))}}function bc(t,n){var s=vM(t);n.forEach(function(l){if(!s.has(l)){s.add(l);var f=RM.bind(null,t,l);l.then(f,f)}})}function ci(t,n){var s=n.deletions;if(s!==null)for(var l=0;l<s.length;l++){var f=s[l],p=t,S=n,w=S;e:for(;w!==null;){switch(w.tag){case 27:if(Ts(w.type)){dn=w.stateNode,li=!1;break e}break;case 5:dn=w.stateNode,li=!1;break e;case 3:case 4:dn=w.stateNode.containerInfo,li=!0;break e}w=w.return}if(dn===null)throw Error(r(160));lg(p,S,f),dn=null,li=!1,p=f.alternate,p!==null&&(p.return=null),f.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)fg(n,t),n=n.sibling}var ea=null;function fg(t,n){var s=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:ci(n,t),ui(t),l&4&&(vs(3,t,t.return),il(3,t),vs(5,t,t.return));break;case 1:ci(n,t),ui(t),l&512&&(wn||s===null||ma(s,s.return)),l&64&&Ha&&(t=t.updateQueue,t!==null&&(l=t.callbacks,l!==null&&(s=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=s===null?l:s.concat(l))));break;case 26:var f=ea;if(ci(n,t),ui(t),l&512&&(wn||s===null||ma(s,s.return)),l&4){var p=s!==null?s.memoizedState:null;if(l=t.memoizedState,s===null)if(l===null)if(t.stateNode===null){e:{l=t.type,s=t.memoizedProps,f=f.ownerDocument||f;t:switch(l){case"title":p=f.getElementsByTagName("title")[0],(!p||p[ji]||p[mn]||p.namespaceURI==="http://www.w3.org/2000/svg"||p.hasAttribute("itemprop"))&&(p=f.createElement(l),f.head.insertBefore(p,f.querySelector("head > title"))),Wn(p,l,s),p[mn]=t,_e(p),l=p;break e;case"link":var S=f_("link","href",f).get(l+(s.href||""));if(S){for(var w=0;w<S.length;w++)if(p=S[w],p.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&p.getAttribute("rel")===(s.rel==null?null:s.rel)&&p.getAttribute("title")===(s.title==null?null:s.title)&&p.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){S.splice(w,1);break t}}p=f.createElement(l),Wn(p,l,s),f.head.appendChild(p);break;case"meta":if(S=f_("meta","content",f).get(l+(s.content||""))){for(w=0;w<S.length;w++)if(p=S[w],p.getAttribute("content")===(s.content==null?null:""+s.content)&&p.getAttribute("name")===(s.name==null?null:s.name)&&p.getAttribute("property")===(s.property==null?null:s.property)&&p.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&p.getAttribute("charset")===(s.charSet==null?null:s.charSet)){S.splice(w,1);break t}}p=f.createElement(l),Wn(p,l,s),f.head.appendChild(p);break;default:throw Error(r(468,l))}p[mn]=t,_e(p),l=p}t.stateNode=l}else d_(f,t.type,t.stateNode);else t.stateNode=u_(f,l,t.memoizedProps);else p!==l?(p===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):p.count--,l===null?d_(f,t.type,t.stateNode):u_(f,l,t.memoizedProps)):l===null&&t.stateNode!==null&&ed(t,t.memoizedProps,s.memoizedProps)}break;case 27:ci(n,t),ui(t),l&512&&(wn||s===null||ma(s,s.return)),s!==null&&l&4&&ed(t,t.memoizedProps,s.memoizedProps);break;case 5:if(ci(n,t),ui(t),l&512&&(wn||s===null||ma(s,s.return)),t.flags&32){f=t.stateNode;try{vn(f,"")}catch(Je){Xt(t,t.return,Je)}}l&4&&t.stateNode!=null&&(f=t.memoizedProps,ed(t,f,s!==null?s.memoizedProps:f)),l&1024&&(id=!0);break;case 6:if(ci(n,t),ui(t),l&4){if(t.stateNode===null)throw Error(r(162));l=t.memoizedProps,s=t.stateNode;try{s.nodeValue=l}catch(Je){Xt(t,t.return,Je)}}break;case 3:if(Hc=null,f=ea,ea=Bc(n.containerInfo),ci(n,t),ea=f,ui(t),l&4&&s!==null&&s.memoizedState.isDehydrated)try{ao(n.containerInfo)}catch(Je){Xt(t,t.return,Je)}id&&(id=!1,dg(t));break;case 4:l=ea,ea=Bc(t.stateNode.containerInfo),ci(n,t),ui(t),ea=l;break;case 12:ci(n,t),ui(t);break;case 31:ci(n,t),ui(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,bc(t,l)));break;case 13:ci(n,t),ui(t),t.child.flags&8192&&t.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(Ac=Tt()),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,bc(t,l)));break;case 22:f=t.memoizedState!==null;var V=s!==null&&s.memoizedState!==null,oe=Ha,xe=wn;if(Ha=oe||f,wn=xe||V,ci(n,t),wn=xe,Ha=oe,ui(t),l&8192)e:for(n=t.stateNode,n._visibility=f?n._visibility&-2:n._visibility|1,f&&(s===null||V||Ha||wn||fr(t)),s=null,n=t;;){if(n.tag===5||n.tag===26){if(s===null){V=s=n;try{if(p=V.stateNode,f)S=p.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{w=V.stateNode;var be=V.memoizedProps.style,ce=be!=null&&be.hasOwnProperty("display")?be.display:null;w.style.display=ce==null||typeof ce=="boolean"?"":(""+ce).trim()}}catch(Je){Xt(V,V.return,Je)}}}else if(n.tag===6){if(s===null){V=n;try{V.stateNode.nodeValue=f?"":V.memoizedProps}catch(Je){Xt(V,V.return,Je)}}}else if(n.tag===18){if(s===null){V=n;try{var de=V.stateNode;f?t_(de,!0):t_(V.stateNode,!1)}catch(Je){Xt(V,V.return,Je)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;s===n&&(s=null),n=n.return}s===n&&(s=null),n.sibling.return=n.return,n=n.sibling}l&4&&(l=t.updateQueue,l!==null&&(s=l.retryQueue,s!==null&&(l.retryQueue=null,bc(t,s))));break;case 19:ci(n,t),ui(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,bc(t,l)));break;case 30:break;case 21:break;default:ci(n,t),ui(t)}}function ui(t){var n=t.flags;if(n&2){try{for(var s,l=t.return;l!==null;){if(ig(l)){s=l;break}l=l.return}if(s==null)throw Error(r(160));switch(s.tag){case 27:var f=s.stateNode,p=td(t);Ec(t,p,f);break;case 5:var S=s.stateNode;s.flags&32&&(vn(S,""),s.flags&=-33);var w=td(t);Ec(t,w,S);break;case 3:case 4:var V=s.stateNode.containerInfo,oe=td(t);nd(t,oe,V);break;default:throw Error(r(161))}}catch(xe){Xt(t,t.return,xe)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function dg(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;dg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function Va(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)rg(t,n.alternate,n),n=n.sibling}function fr(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:vs(4,n,n.return),fr(n);break;case 1:ma(n,n.return);var s=n.stateNode;typeof s.componentWillUnmount=="function"&&tg(n,n.return,s),fr(n);break;case 27:hl(n.stateNode);case 26:case 5:ma(n,n.return),fr(n);break;case 22:n.memoizedState===null&&fr(n);break;case 30:fr(n);break;default:fr(n)}t=t.sibling}}function ka(t,n,s){for(s=s&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var l=n.alternate,f=t,p=n,S=p.flags;switch(p.tag){case 0:case 11:case 15:ka(f,p,s),il(4,p);break;case 1:if(ka(f,p,s),l=p,f=l.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(oe){Xt(l,l.return,oe)}if(l=p,f=l.updateQueue,f!==null){var w=l.stateNode;try{var V=f.shared.hiddenCallbacks;if(V!==null)for(f.shared.hiddenCallbacks=null,f=0;f<V.length;f++)km(V[f],w)}catch(oe){Xt(l,l.return,oe)}}s&&S&64&&eg(p),al(p,p.return);break;case 27:ag(p);case 26:case 5:ka(f,p,s),s&&l===null&&S&4&&ng(p),al(p,p.return);break;case 12:ka(f,p,s);break;case 31:ka(f,p,s),s&&S&4&&cg(f,p);break;case 13:ka(f,p,s),s&&S&4&&ug(f,p);break;case 22:p.memoizedState===null&&ka(f,p,s),al(p,p.return);break;case 30:break;default:ka(f,p,s)}n=n.sibling}}function ad(t,n){var s=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==s&&(t!=null&&t.refCount++,s!=null&&Xo(s))}function sd(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Xo(t))}function ta(t,n,s,l){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)hg(t,n,s,l),n=n.sibling}function hg(t,n,s,l){var f=n.flags;switch(n.tag){case 0:case 11:case 15:ta(t,n,s,l),f&2048&&il(9,n);break;case 1:ta(t,n,s,l);break;case 3:ta(t,n,s,l),f&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Xo(t)));break;case 12:if(f&2048){ta(t,n,s,l),t=n.stateNode;try{var p=n.memoizedProps,S=p.id,w=p.onPostCommit;typeof w=="function"&&w(S,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(V){Xt(n,n.return,V)}}else ta(t,n,s,l);break;case 31:ta(t,n,s,l);break;case 13:ta(t,n,s,l);break;case 23:break;case 22:p=n.stateNode,S=n.alternate,n.memoizedState!==null?p._visibility&2?ta(t,n,s,l):sl(t,n):p._visibility&2?ta(t,n,s,l):(p._visibility|=2,qr(t,n,s,l,(n.subtreeFlags&10256)!==0||!1)),f&2048&&ad(S,n);break;case 24:ta(t,n,s,l),f&2048&&sd(n.alternate,n);break;default:ta(t,n,s,l)}}function qr(t,n,s,l,f){for(f=f&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var p=t,S=n,w=s,V=l,oe=S.flags;switch(S.tag){case 0:case 11:case 15:qr(p,S,w,V,f),il(8,S);break;case 23:break;case 22:var xe=S.stateNode;S.memoizedState!==null?xe._visibility&2?qr(p,S,w,V,f):sl(p,S):(xe._visibility|=2,qr(p,S,w,V,f)),f&&oe&2048&&ad(S.alternate,S);break;case 24:qr(p,S,w,V,f),f&&oe&2048&&sd(S.alternate,S);break;default:qr(p,S,w,V,f)}n=n.sibling}}function sl(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var s=t,l=n,f=l.flags;switch(l.tag){case 22:sl(s,l),f&2048&&ad(l.alternate,l);break;case 24:sl(s,l),f&2048&&sd(l.alternate,l);break;default:sl(s,l)}n=n.sibling}}var rl=8192;function jr(t,n,s){if(t.subtreeFlags&rl)for(t=t.child;t!==null;)pg(t,n,s),t=t.sibling}function pg(t,n,s){switch(t.tag){case 26:jr(t,n,s),t.flags&rl&&t.memoizedState!==null&&ay(s,ea,t.memoizedState,t.memoizedProps);break;case 5:jr(t,n,s);break;case 3:case 4:var l=ea;ea=Bc(t.stateNode.containerInfo),jr(t,n,s),ea=l;break;case 22:t.memoizedState===null&&(l=t.alternate,l!==null&&l.memoizedState!==null?(l=rl,rl=16777216,jr(t,n,s),rl=l):jr(t,n,s));break;default:jr(t,n,s)}}function mg(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function ol(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var s=0;s<n.length;s++){var l=n[s];Fn=l,_g(l,t)}mg(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)gg(t),t=t.sibling}function gg(t){switch(t.tag){case 0:case 11:case 15:ol(t),t.flags&2048&&vs(9,t,t.return);break;case 3:ol(t);break;case 12:ol(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Tc(t)):ol(t);break;default:ol(t)}}function Tc(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var s=0;s<n.length;s++){var l=n[s];Fn=l,_g(l,t)}mg(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:vs(8,n,n.return),Tc(n);break;case 22:s=n.stateNode,s._visibility&2&&(s._visibility&=-3,Tc(n));break;default:Tc(n)}t=t.sibling}}function _g(t,n){for(;Fn!==null;){var s=Fn;switch(s.tag){case 0:case 11:case 15:vs(8,s,n);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var l=s.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Xo(s.memoizedState.cache)}if(l=s.child,l!==null)l.return=s,Fn=l;else e:for(s=t;Fn!==null;){l=Fn;var f=l.sibling,p=l.return;if(og(l),l===s){Fn=null;break e}if(f!==null){f.return=p,Fn=f;break e}Fn=p}}}var xM={getCacheForType:function(t){var n=kn(An),s=n.data.get(t);return s===void 0&&(s=t(),n.data.set(t,s)),s},cacheSignal:function(){return kn(An).controller.signal}},SM=typeof WeakMap=="function"?WeakMap:Map,Ht=0,en=null,St=null,Et=0,kt=0,yi=null,xs=!1,Zr=!1,rd=!1,Xa=0,Sn=0,Ss=0,dr=0,od=0,Ei=0,Kr=0,ll=null,fi=null,ld=!1,Ac=0,vg=0,Rc=1/0,Cc=null,Ms=null,Un=0,ys=null,Qr=null,Wa=0,cd=0,ud=null,xg=null,cl=0,fd=null;function bi(){return(Ht&2)!==0&&Et!==0?Et&-Et:z.T!==null?_d():ss()}function Sg(){if(Ei===0)if((Et&536870912)===0||Rt){var t=rt;rt<<=1,(rt&3932160)===0&&(rt=262144),Ei=t}else Ei=536870912;return t=Si.current,t!==null&&(t.flags|=32),Ei}function di(t,n,s){(t===en&&(kt===2||kt===9)||t.cancelPendingCommit!==null)&&(Jr(t,0),Es(t,Et,Ei,!1)),Ze(t,s),((Ht&2)===0||t!==en)&&(t===en&&((Ht&2)===0&&(dr|=s),Sn===4&&Es(t,Et,Ei,!1)),ga(t))}function Mg(t,n,s){if((Ht&6)!==0)throw Error(r(327));var l=!s&&(n&127)===0&&(n&t.expiredLanes)===0||Oe(t,n),f=l?EM(t,n):hd(t,n,!0),p=l;do{if(f===0){Zr&&!l&&Es(t,n,0,!1);break}else{if(s=t.current.alternate,p&&!MM(s)){f=hd(t,n,!1),p=!1;continue}if(f===2){if(p=n,t.errorRecoveryDisabledLanes&p)var S=0;else S=t.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){n=S;e:{var w=t;f=ll;var V=w.current.memoizedState.isDehydrated;if(V&&(Jr(w,S).flags|=256),S=hd(w,S,!1),S!==2){if(rd&&!V){w.errorRecoveryDisabledLanes|=p,dr|=p,f=4;break e}p=fi,fi=f,p!==null&&(fi===null?fi=p:fi.push.apply(fi,p))}f=S}if(p=!1,f!==2)continue}}if(f===1){Jr(t,0),Es(t,n,0,!0);break}e:{switch(l=t,p=f,p){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Es(l,n,Ei,!xs);break e;case 2:fi=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(f=Ac+300-Tt(),10<f)){if(Es(l,n,Ei,!xs),ve(l,0,!0)!==0)break e;Wa=n,l.timeoutHandle=Jg(yg.bind(null,l,s,fi,Cc,ld,n,Ei,dr,Kr,xs,p,"Throttled",-0,0),f);break e}yg(l,s,fi,Cc,ld,n,Ei,dr,Kr,xs,p,null,-0,0)}}break}while(!0);ga(t)}function yg(t,n,s,l,f,p,S,w,V,oe,xe,be,ce,de){if(t.timeoutHandle=-1,be=n.subtreeFlags,be&8192||(be&16785408)===16785408){be={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:_i},pg(n,p,be);var Je=(p&62914560)===p?Ac-Tt():(p&4194048)===p?vg-Tt():0;if(Je=sy(be,Je),Je!==null){Wa=p,t.cancelPendingCommit=Je(Dg.bind(null,t,n,p,s,l,f,S,w,V,xe,be,null,ce,de)),Es(t,p,S,!oe);return}}Dg(t,n,p,s,l,f,S,w,V)}function MM(t){for(var n=t;;){var s=n.tag;if((s===0||s===11||s===15)&&n.flags&16384&&(s=n.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var l=0;l<s.length;l++){var f=s[l],p=f.getSnapshot;f=f.value;try{if(!vi(p(),f))return!1}catch{return!1}}if(s=n.child,n.subtreeFlags&16384&&s!==null)s.return=n,n=s;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Es(t,n,s,l){n&=~od,n&=~dr,t.suspendedLanes|=n,t.pingedLanes&=~n,l&&(t.warmLanes|=n),l=t.expirationTimes;for(var f=n;0<f;){var p=31-Ge(f),S=1<<p;l[p]=-1,f&=~S}s!==0&&Dt(t,s,n)}function wc(){return(Ht&6)===0?(ul(0),!1):!0}function dd(){if(St!==null){if(kt===0)var t=St.return;else t=St,Oa=ir=null,Cf(t),Vr=null,Yo=0,t=St;for(;t!==null;)$0(t.alternate,t),t=t.return;St=null}}function Jr(t,n){var s=t.timeoutHandle;s!==-1&&(t.timeoutHandle=-1,GM(s)),s=t.cancelPendingCommit,s!==null&&(t.cancelPendingCommit=null,s()),Wa=0,dd(),en=t,St=s=Na(t.current,null),Et=n,kt=0,yi=null,xs=!1,Zr=Oe(t,n),rd=!1,Kr=Ei=od=dr=Ss=Sn=0,fi=ll=null,ld=!1,(n&8)!==0&&(n|=n&32);var l=t.entangledLanes;if(l!==0)for(t=t.entanglements,l&=n;0<l;){var f=31-Ge(l),p=1<<f;n|=t[f],l&=~p}return Xa=n,Kl(),s}function Eg(t,n){dt=null,z.H=el,n===Gr||n===ac?(n=zm(),kt=3):n===gf?(n=zm(),kt=4):kt=n===Xf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,yi=n,St===null&&(Sn=1,vc(t,Pi(n,t.current)))}function bg(){var t=Si.current;return t===null?!0:(Et&4194048)===Et?zi===null:(Et&62914560)===Et||(Et&536870912)!==0?t===zi:!1}function Tg(){var t=z.H;return z.H=el,t===null?el:t}function Ag(){var t=z.A;return z.A=xM,t}function Dc(){Sn=4,xs||(Et&4194048)!==Et&&Si.current!==null||(Zr=!0),(Ss&134217727)===0&&(dr&134217727)===0||en===null||Es(en,Et,Ei,!1)}function hd(t,n,s){var l=Ht;Ht|=2;var f=Tg(),p=Ag();(en!==t||Et!==n)&&(Cc=null,Jr(t,n)),n=!1;var S=Sn;e:do try{if(kt!==0&&St!==null){var w=St,V=yi;switch(kt){case 8:dd(),S=6;break e;case 3:case 2:case 9:case 6:Si.current===null&&(n=!0);var oe=kt;if(kt=0,yi=null,$r(t,w,V,oe),s&&Zr){S=0;break e}break;default:oe=kt,kt=0,yi=null,$r(t,w,V,oe)}}yM(),S=Sn;break}catch(xe){Eg(t,xe)}while(!0);return n&&t.shellSuspendCounter++,Oa=ir=null,Ht=l,z.H=f,z.A=p,St===null&&(en=null,Et=0,Kl()),S}function yM(){for(;St!==null;)Rg(St)}function EM(t,n){var s=Ht;Ht|=2;var l=Tg(),f=Ag();en!==t||Et!==n?(Cc=null,Rc=Tt()+500,Jr(t,n)):Zr=Oe(t,n);e:do try{if(kt!==0&&St!==null){n=St;var p=yi;t:switch(kt){case 1:kt=0,yi=null,$r(t,n,p,1);break;case 2:case 9:if(Fm(p)){kt=0,yi=null,Cg(n);break}n=function(){kt!==2&&kt!==9||en!==t||(kt=7),ga(t)},p.then(n,n);break e;case 3:kt=7;break e;case 4:kt=5;break e;case 7:Fm(p)?(kt=0,yi=null,Cg(n)):(kt=0,yi=null,$r(t,n,p,7));break;case 5:var S=null;switch(St.tag){case 26:S=St.memoizedState;case 5:case 27:var w=St;if(S?h_(S):w.stateNode.complete){kt=0,yi=null;var V=w.sibling;if(V!==null)St=V;else{var oe=w.return;oe!==null?(St=oe,Lc(oe)):St=null}break t}}kt=0,yi=null,$r(t,n,p,5);break;case 6:kt=0,yi=null,$r(t,n,p,6);break;case 8:dd(),Sn=6;break e;default:throw Error(r(462))}}bM();break}catch(xe){Eg(t,xe)}while(!0);return Oa=ir=null,z.H=l,z.A=f,Ht=s,St!==null?0:(en=null,Et=0,Kl(),Sn)}function bM(){for(;St!==null&&!rn();)Rg(St)}function Rg(t){var n=Q0(t.alternate,t,Xa);t.memoizedProps=t.pendingProps,n===null?Lc(t):St=n}function Cg(t){var n=t,s=n.alternate;switch(n.tag){case 15:case 0:n=W0(s,n,n.pendingProps,n.type,void 0,Et);break;case 11:n=W0(s,n,n.pendingProps,n.type.render,n.ref,Et);break;case 5:Cf(n);default:$0(s,n),n=St=Am(n,Xa),n=Q0(s,n,Xa)}t.memoizedProps=t.pendingProps,n===null?Lc(t):St=n}function $r(t,n,s,l){Oa=ir=null,Cf(n),Vr=null,Yo=0;var f=n.return;try{if(dM(t,f,n,s,Et)){Sn=1,vc(t,Pi(s,t.current)),St=null;return}}catch(p){if(f!==null)throw St=f,p;Sn=1,vc(t,Pi(s,t.current)),St=null;return}n.flags&32768?(Rt||l===1?t=!0:Zr||(Et&536870912)!==0?t=!1:(xs=t=!0,(l===2||l===9||l===3||l===6)&&(l=Si.current,l!==null&&l.tag===13&&(l.flags|=16384))),wg(n,t)):Lc(n)}function Lc(t){var n=t;do{if((n.flags&32768)!==0){wg(n,xs);return}t=n.return;var s=mM(n.alternate,n,Xa);if(s!==null){St=s;return}if(n=n.sibling,n!==null){St=n;return}St=n=t}while(n!==null);Sn===0&&(Sn=5)}function wg(t,n){do{var s=gM(t.alternate,t);if(s!==null){s.flags&=32767,St=s;return}if(s=t.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!n&&(t=t.sibling,t!==null)){St=t;return}St=t=s}while(t!==null);Sn=6,St=null}function Dg(t,n,s,l,f,p,S,w,V){t.cancelPendingCommit=null;do Nc();while(Un!==0);if((Ht&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));if(p=n.lanes|n.childLanes,p|=ef,nn(t,s,p,S,w,V),t===en&&(St=en=null,Et=0),Qr=n,ys=t,Wa=s,cd=p,ud=f,xg=l,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,CM(J,function(){return Pg(),null})):(t.callbackNode=null,t.callbackPriority=0),l=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||l){l=z.T,z.T=null,f=H.p,H.p=2,S=Ht,Ht|=4;try{_M(t,n,s)}finally{Ht=S,H.p=f,z.T=l}}Un=1,Lg(),Ng(),Ug()}}function Lg(){if(Un===1){Un=0;var t=ys,n=Qr,s=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||s){s=z.T,z.T=null;var l=H.p;H.p=2;var f=Ht;Ht|=4;try{fg(n,t);var p=Td,S=_m(t.containerInfo),w=p.focusedElem,V=p.selectionRange;if(S!==w&&w&&w.ownerDocument&&gm(w.ownerDocument.documentElement,w)){if(V!==null&&Zu(w)){var oe=V.start,xe=V.end;if(xe===void 0&&(xe=oe),"selectionStart"in w)w.selectionStart=oe,w.selectionEnd=Math.min(xe,w.value.length);else{var be=w.ownerDocument||document,ce=be&&be.defaultView||window;if(ce.getSelection){var de=ce.getSelection(),Je=w.textContent.length,st=Math.min(V.start,Je),Kt=V.end===void 0?st:Math.min(V.end,Je);!de.extend&&st>Kt&&(S=Kt,Kt=st,st=S);var te=mm(w,st),Y=mm(w,Kt);if(te&&Y&&(de.rangeCount!==1||de.anchorNode!==te.node||de.anchorOffset!==te.offset||de.focusNode!==Y.node||de.focusOffset!==Y.offset)){var se=be.createRange();se.setStart(te.node,te.offset),de.removeAllRanges(),st>Kt?(de.addRange(se),de.extend(Y.node,Y.offset)):(se.setEnd(Y.node,Y.offset),de.addRange(se))}}}}for(be=[],de=w;de=de.parentNode;)de.nodeType===1&&be.push({element:de,left:de.scrollLeft,top:de.scrollTop});for(typeof w.focus=="function"&&w.focus(),w=0;w<be.length;w++){var ye=be[w];ye.element.scrollLeft=ye.left,ye.element.scrollTop=ye.top}}Xc=!!bd,Td=bd=null}finally{Ht=f,H.p=l,z.T=s}}t.current=n,Un=2}}function Ng(){if(Un===2){Un=0;var t=ys,n=Qr,s=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||s){s=z.T,z.T=null;var l=H.p;H.p=2;var f=Ht;Ht|=4;try{rg(t,n.alternate,n)}finally{Ht=f,H.p=l,z.T=s}}Un=3}}function Ug(){if(Un===4||Un===3){Un=0,j();var t=ys,n=Qr,s=Wa,l=xg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Un=5:(Un=0,Qr=ys=null,Og(t,t.pendingLanes));var f=t.pendingLanes;if(f===0&&(Ms=null),Ra(s),n=n.stateNode,fe&&typeof fe.onCommitFiberRoot=="function")try{fe.onCommitFiberRoot(pe,n,void 0,(n.current.flags&128)===128)}catch{}if(l!==null){n=z.T,f=H.p,H.p=2,z.T=null;try{for(var p=t.onRecoverableError,S=0;S<l.length;S++){var w=l[S];p(w.value,{componentStack:w.stack})}}finally{z.T=n,H.p=f}}(Wa&3)!==0&&Nc(),ga(t),f=t.pendingLanes,(s&261930)!==0&&(f&42)!==0?t===fd?cl++:(cl=0,fd=t):cl=0,ul(0)}}function Og(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Xo(n)))}function Nc(){return Lg(),Ng(),Ug(),Pg()}function Pg(){if(Un!==5)return!1;var t=ys,n=cd;cd=0;var s=Ra(Wa),l=z.T,f=H.p;try{H.p=32>s?32:s,z.T=null,s=ud,ud=null;var p=ys,S=Wa;if(Un=0,Qr=ys=null,Wa=0,(Ht&6)!==0)throw Error(r(331));var w=Ht;if(Ht|=4,gg(p.current),hg(p,p.current,S,s),Ht=w,ul(0,!1),fe&&typeof fe.onPostCommitFiberRoot=="function")try{fe.onPostCommitFiberRoot(pe,p)}catch{}return!0}finally{H.p=f,z.T=l,Og(t,n)}}function Ig(t,n,s){n=Pi(s,n),n=kf(t.stateNode,n,2),t=ms(t,n,2),t!==null&&(Ze(t,2),ga(t))}function Xt(t,n,s){if(t.tag===3)Ig(t,t,s);else for(;n!==null;){if(n.tag===3){Ig(n,t,s);break}else if(n.tag===1){var l=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Ms===null||!Ms.has(l))){t=Pi(s,t),s=F0(2),l=ms(n,s,2),l!==null&&(B0(s,l,n,t),Ze(l,2),ga(l));break}}n=n.return}}function pd(t,n,s){var l=t.pingCache;if(l===null){l=t.pingCache=new SM;var f=new Set;l.set(n,f)}else f=l.get(n),f===void 0&&(f=new Set,l.set(n,f));f.has(s)||(rd=!0,f.add(s),t=TM.bind(null,t,n,s),n.then(t,t))}function TM(t,n,s){var l=t.pingCache;l!==null&&l.delete(n),t.pingedLanes|=t.suspendedLanes&s,t.warmLanes&=~s,en===t&&(Et&s)===s&&(Sn===4||Sn===3&&(Et&62914560)===Et&&300>Tt()-Ac?(Ht&2)===0&&Jr(t,0):od|=s,Kr===Et&&(Kr=0)),ga(t)}function Fg(t,n){n===0&&(n=Ee()),t=er(t,n),t!==null&&(Ze(t,n),ga(t))}function AM(t){var n=t.memoizedState,s=0;n!==null&&(s=n.retryLane),Fg(t,s)}function RM(t,n){var s=0;switch(t.tag){case 31:case 13:var l=t.stateNode,f=t.memoizedState;f!==null&&(s=f.retryLane);break;case 19:l=t.stateNode;break;case 22:l=t.stateNode._retryCache;break;default:throw Error(r(314))}l!==null&&l.delete(n),Fg(t,s)}function CM(t,n){return tn(t,n)}var Uc=null,eo=null,md=!1,Oc=!1,gd=!1,bs=0;function ga(t){t!==eo&&t.next===null&&(eo===null?Uc=eo=t:eo=eo.next=t),Oc=!0,md||(md=!0,DM())}function ul(t,n){if(!gd&&Oc){gd=!0;do for(var s=!1,l=Uc;l!==null;){if(t!==0){var f=l.pendingLanes;if(f===0)var p=0;else{var S=l.suspendedLanes,w=l.pingedLanes;p=(1<<31-Ge(42|t)+1)-1,p&=f&~(S&~w),p=p&201326741?p&201326741|1:p?p|2:0}p!==0&&(s=!0,Gg(l,p))}else p=Et,p=ve(l,l===en?p:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(p&3)===0||Oe(l,p)||(s=!0,Gg(l,p));l=l.next}while(s);gd=!1}}function wM(){Bg()}function Bg(){Oc=md=!1;var t=0;bs!==0&&HM()&&(t=bs);for(var n=Tt(),s=null,l=Uc;l!==null;){var f=l.next,p=zg(l,n);p===0?(l.next=null,s===null?Uc=f:s.next=f,f===null&&(eo=s)):(s=l,(t!==0||(p&3)!==0)&&(Oc=!0)),l=f}Un!==0&&Un!==5||ul(t),bs!==0&&(bs=0)}function zg(t,n){for(var s=t.suspendedLanes,l=t.pingedLanes,f=t.expirationTimes,p=t.pendingLanes&-62914561;0<p;){var S=31-Ge(p),w=1<<S,V=f[S];V===-1?((w&s)===0||(w&l)!==0)&&(f[S]=Pe(w,n)):V<=n&&(t.expiredLanes|=w),p&=~w}if(n=en,s=Et,s=ve(t,t===n?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l=t.callbackNode,s===0||t===n&&(kt===2||kt===9)||t.cancelPendingCommit!==null)return l!==null&&l!==null&&Vt(l),t.callbackNode=null,t.callbackPriority=0;if((s&3)===0||Oe(t,s)){if(n=s&-s,n===t.callbackPriority)return n;switch(l!==null&&Vt(l),Ra(s)){case 2:case 8:s=E;break;case 32:s=J;break;case 268435456:s=le;break;default:s=J}return l=Hg.bind(null,t),s=tn(s,l),t.callbackPriority=n,t.callbackNode=s,n}return l!==null&&l!==null&&Vt(l),t.callbackPriority=2,t.callbackNode=null,2}function Hg(t,n){if(Un!==0&&Un!==5)return t.callbackNode=null,t.callbackPriority=0,null;var s=t.callbackNode;if(Nc()&&t.callbackNode!==s)return null;var l=Et;return l=ve(t,t===en?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l===0?null:(Mg(t,l,n),zg(t,Tt()),t.callbackNode!=null&&t.callbackNode===s?Hg.bind(null,t):null)}function Gg(t,n){if(Nc())return null;Mg(t,n,!0)}function DM(){VM(function(){(Ht&6)!==0?tn(F,wM):Bg()})}function _d(){if(bs===0){var t=zr;t===0&&(t=tt,tt<<=1,(tt&261888)===0&&(tt=256)),bs=t}return bs}function Vg(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:wa(""+t)}function kg(t,n){var s=n.ownerDocument.createElement("input");return s.name=n.name,s.value=n.value,t.id&&s.setAttribute("form",t.id),n.parentNode.insertBefore(s,n),t=new FormData(t),s.parentNode.removeChild(s),t}function LM(t,n,s,l,f){if(n==="submit"&&s&&s.stateNode===f){var p=Vg((f[_n]||null).action),S=l.submitter;S&&(n=(n=S[_n]||null)?Vg(n.formAction):S.getAttribute("formAction"),n!==null&&(p=n,S=null));var w=new Nn("action","action",null,l,f);t.push({event:w,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(bs!==0){var V=S?kg(f,S):new FormData(f);Ff(s,{pending:!0,data:V,method:f.method,action:p},null,V)}}else typeof p=="function"&&(w.preventDefault(),V=S?kg(f,S):new FormData(f),Ff(s,{pending:!0,data:V,method:f.method,action:p},p,V))},currentTarget:f}]})}}for(var vd=0;vd<$u.length;vd++){var xd=$u[vd],NM=xd.toLowerCase(),UM=xd[0].toUpperCase()+xd.slice(1);$i(NM,"on"+UM)}$i(Sm,"onAnimationEnd"),$i(Mm,"onAnimationIteration"),$i(ym,"onAnimationStart"),$i("dblclick","onDoubleClick"),$i("focusin","onFocus"),$i("focusout","onBlur"),$i(ZS,"onTransitionRun"),$i(KS,"onTransitionStart"),$i(QS,"onTransitionCancel"),$i(Em,"onTransitionEnd"),ee("onMouseEnter",["mouseout","mouseover"]),ee("onMouseLeave",["mouseout","mouseover"]),ee("onPointerEnter",["pointerout","pointerover"]),ee("onPointerLeave",["pointerout","pointerover"]),G("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),G("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),G("onBeforeInput",["compositionend","keypress","textInput","paste"]),G("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),G("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),G("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var fl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),OM=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(fl));function Xg(t,n){n=(n&4)!==0;for(var s=0;s<t.length;s++){var l=t[s],f=l.event;l=l.listeners;e:{var p=void 0;if(n)for(var S=l.length-1;0<=S;S--){var w=l[S],V=w.instance,oe=w.currentTarget;if(w=w.listener,V!==p&&f.isPropagationStopped())break e;p=w,f.currentTarget=oe;try{p(f)}catch(xe){Zl(xe)}f.currentTarget=null,p=V}else for(S=0;S<l.length;S++){if(w=l[S],V=w.instance,oe=w.currentTarget,w=w.listener,V!==p&&f.isPropagationStopped())break e;p=w,f.currentTarget=oe;try{p(f)}catch(xe){Zl(xe)}f.currentTarget=null,p=V}}}}function Mt(t,n){var s=n[ca];s===void 0&&(s=n[ca]=new Set);var l=t+"__bubble";s.has(l)||(Wg(n,t,2,!1),s.add(l))}function Sd(t,n,s){var l=0;n&&(l|=4),Wg(s,t,l,n)}var Pc="_reactListening"+Math.random().toString(36).slice(2);function Md(t){if(!t[Pc]){t[Pc]=!0,Be.forEach(function(s){s!=="selectionchange"&&(OM.has(s)||Sd(s,!1,t),Sd(s,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Pc]||(n[Pc]=!0,Sd("selectionchange",!1,n))}}function Wg(t,n,s,l){switch(S_(n)){case 2:var f=ly;break;case 8:f=cy;break;default:f=Id}s=f.bind(null,n,s,t),f=void 0,!Wl||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(f=!0),l?f!==void 0?t.addEventListener(n,s,{capture:!0,passive:f}):t.addEventListener(n,s,!0):f!==void 0?t.addEventListener(n,s,{passive:f}):t.addEventListener(n,s,!1)}function yd(t,n,s,l,f){var p=l;if((n&1)===0&&(n&2)===0&&l!==null)e:for(;;){if(l===null)return;var S=l.tag;if(S===3||S===4){var w=l.stateNode.containerInfo;if(w===f)break;if(S===4)for(S=l.return;S!==null;){var V=S.tag;if((V===3||V===4)&&S.stateNode.containerInfo===f)return;S=S.return}for(;w!==null;){if(S=wi(w),S===null)return;if(V=S.tag,V===5||V===6||V===26||V===27){l=p=S;continue e}w=w.parentNode}}l=l.return}js(function(){var oe=p,xe=Po(s),be=[];e:{var ce=bm.get(t);if(ce!==void 0){var de=Nn,Je=t;switch(t){case"keypress":if(Ks(s)===0)break e;case"keydown":case"keyup":de=RS;break;case"focusin":Je="focus",de=Xu;break;case"focusout":Je="blur",de=Xu;break;case"beforeblur":case"afterblur":de=Xu;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":de=wr;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":de=mS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":de=DS;break;case Sm:case Mm:case ym:de=vS;break;case Em:de=NS;break;case"scroll":case"scrollend":de=oi;break;case"wheel":de=OS;break;case"copy":case"cut":case"paste":de=SS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":de=tm;break;case"toggle":case"beforetoggle":de=IS}var st=(n&4)!==0,Kt=!st&&(t==="scroll"||t==="scrollend"),te=st?ce!==null?ce+"Capture":null:ce;st=[];for(var Y=oe,se;Y!==null;){var ye=Y;if(se=ye.stateNode,ye=ye.tag,ye!==5&&ye!==26&&ye!==27||se===null||te===null||(ye=Zs(Y,te),ye!=null&&st.push(dl(Y,ye,se))),Kt)break;Y=Y.return}0<st.length&&(ce=new de(ce,Je,null,s,xe),be.push({event:ce,listeners:st}))}}if((n&7)===0){e:{if(ce=t==="mouseover"||t==="pointerover",de=t==="mouseout"||t==="pointerout",ce&&s!==qs&&(Je=s.relatedTarget||s.fromElement)&&(wi(Je)||Je[zn]))break e;if((de||ce)&&(ce=xe.window===xe?xe:(ce=xe.ownerDocument)?ce.defaultView||ce.parentWindow:window,de?(Je=s.relatedTarget||s.toElement,de=oe,Je=Je?wi(Je):null,Je!==null&&(Kt=c(Je),st=Je.tag,Je!==Kt||st!==5&&st!==27&&st!==6)&&(Je=null)):(de=null,Je=oe),de!==Je)){if(st=wr,ye="onMouseLeave",te="onMouseEnter",Y="mouse",(t==="pointerout"||t==="pointerover")&&(st=tm,ye="onPointerLeave",te="onPointerEnter",Y="pointer"),Kt=de==null?ce:Li(de),se=Je==null?ce:Li(Je),ce=new st(ye,Y+"leave",de,s,xe),ce.target=Kt,ce.relatedTarget=se,ye=null,wi(xe)===oe&&(st=new st(te,Y+"enter",Je,s,xe),st.target=se,st.relatedTarget=Kt,ye=st),Kt=ye,de&&Je)t:{for(st=PM,te=de,Y=Je,se=0,ye=te;ye;ye=st(ye))se++;ye=0;for(var it=Y;it;it=st(it))ye++;for(;0<se-ye;)te=st(te),se--;for(;0<ye-se;)Y=st(Y),ye--;for(;se--;){if(te===Y||Y!==null&&te===Y.alternate){st=te;break t}te=st(te),Y=st(Y)}st=null}else st=null;de!==null&&Yg(be,ce,de,st,!1),Je!==null&&Kt!==null&&Yg(be,Kt,Je,st,!0)}}e:{if(ce=oe?Li(oe):window,de=ce.nodeName&&ce.nodeName.toLowerCase(),de==="select"||de==="input"&&ce.type==="file")var Ot=cm;else if(om(ce))if(um)Ot=YS;else{Ot=XS;var et=kS}else de=ce.nodeName,!de||de.toLowerCase()!=="input"||ce.type!=="checkbox"&&ce.type!=="radio"?oe&&Bt(oe.elementType)&&(Ot=cm):Ot=WS;if(Ot&&(Ot=Ot(t,oe))){lm(be,Ot,s,xe);break e}et&&et(t,ce,oe),t==="focusout"&&oe&&ce.type==="number"&&oe.memoizedProps.value!=null&&mt(ce,"number",ce.value)}switch(et=oe?Li(oe):window,t){case"focusin":(om(et)||et.contentEditable==="true")&&(Lr=et,Ku=oe,Go=null);break;case"focusout":Go=Ku=Lr=null;break;case"mousedown":Qu=!0;break;case"contextmenu":case"mouseup":case"dragend":Qu=!1,vm(be,s,xe);break;case"selectionchange":if(jS)break;case"keydown":case"keyup":vm(be,s,xe)}var pt;if(Yu)e:{switch(t){case"compositionstart":var bt="onCompositionStart";break e;case"compositionend":bt="onCompositionEnd";break e;case"compositionupdate":bt="onCompositionUpdate";break e}bt=void 0}else Dr?sm(t,s)&&(bt="onCompositionEnd"):t==="keydown"&&s.keyCode===229&&(bt="onCompositionStart");bt&&(nm&&s.locale!=="ko"&&(Dr||bt!=="onCompositionStart"?bt==="onCompositionEnd"&&Dr&&(pt=Yl()):(Ni=xe,Io="value"in Ni?Ni.value:Ni.textContent,Dr=!0)),et=Ic(oe,bt),0<et.length&&(bt=new em(bt,t,null,s,xe),be.push({event:bt,listeners:et}),pt?bt.data=pt:(pt=rm(s),pt!==null&&(bt.data=pt)))),(pt=BS?zS(t,s):HS(t,s))&&(bt=Ic(oe,"onBeforeInput"),0<bt.length&&(et=new em("onBeforeInput","beforeinput",null,s,xe),be.push({event:et,listeners:bt}),et.data=pt)),LM(be,t,oe,s,xe)}Xg(be,n)})}function dl(t,n,s){return{instance:t,listener:n,currentTarget:s}}function Ic(t,n){for(var s=n+"Capture",l=[];t!==null;){var f=t,p=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||p===null||(f=Zs(t,s),f!=null&&l.unshift(dl(t,f,p)),f=Zs(t,n),f!=null&&l.push(dl(t,f,p))),t.tag===3)return l;t=t.return}return[]}function PM(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Yg(t,n,s,l,f){for(var p=n._reactName,S=[];s!==null&&s!==l;){var w=s,V=w.alternate,oe=w.stateNode;if(w=w.tag,V!==null&&V===l)break;w!==5&&w!==26&&w!==27||oe===null||(V=oe,f?(oe=Zs(s,p),oe!=null&&S.unshift(dl(s,oe,V))):f||(oe=Zs(s,p),oe!=null&&S.push(dl(s,oe,V)))),s=s.return}S.length!==0&&t.push({event:n,listeners:S})}var IM=/\r\n?/g,FM=/\u0000|\uFFFD/g;function qg(t){return(typeof t=="string"?t:""+t).replace(IM,`
`).replace(FM,"")}function jg(t,n){return n=qg(n),qg(t)===n}function Zt(t,n,s,l,f,p){switch(s){case"children":typeof l=="string"?n==="body"||n==="textarea"&&l===""||vn(t,l):(typeof l=="number"||typeof l=="bigint")&&n!=="body"&&vn(t,""+l);break;case"className":ke(t,"class",l);break;case"tabIndex":ke(t,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":ke(t,s,l);break;case"style":gi(t,l,p);break;case"data":if(n!=="object"){ke(t,"data",l);break}case"src":case"href":if(l===""&&(n!=="a"||s!=="href")){t.removeAttribute(s);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(s);break}l=wa(""+l),t.setAttribute(s,l);break;case"action":case"formAction":if(typeof l=="function"){t.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof p=="function"&&(s==="formAction"?(n!=="input"&&Zt(t,n,"name",f.name,f,null),Zt(t,n,"formEncType",f.formEncType,f,null),Zt(t,n,"formMethod",f.formMethod,f,null),Zt(t,n,"formTarget",f.formTarget,f,null)):(Zt(t,n,"encType",f.encType,f,null),Zt(t,n,"method",f.method,f,null),Zt(t,n,"target",f.target,f,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(s);break}l=wa(""+l),t.setAttribute(s,l);break;case"onClick":l!=null&&(t.onclick=_i);break;case"onScroll":l!=null&&Mt("scroll",t);break;case"onScrollEnd":l!=null&&Mt("scrollend",t);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(s=l.__html,s!=null){if(f.children!=null)throw Error(r(60));t.innerHTML=s}}break;case"multiple":t.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":t.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){t.removeAttribute("xlink:href");break}s=wa(""+l),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,""+l):t.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,""):t.removeAttribute(s);break;case"capture":case"download":l===!0?t.setAttribute(s,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,l):t.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?t.setAttribute(s,l):t.removeAttribute(s);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?t.removeAttribute(s):t.setAttribute(s,l);break;case"popover":Mt("beforetoggle",t),Mt("toggle",t),Re(t,"popover",l);break;case"xlinkActuate":ze(t,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":ze(t,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":ze(t,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":ze(t,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":ze(t,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":ze(t,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":ze(t,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":ze(t,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":ze(t,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Re(t,"is",l);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=Gn.get(s)||s,Re(t,s,l))}}function Ed(t,n,s,l,f,p){switch(s){case"style":gi(t,l,p);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(s=l.__html,s!=null){if(f.children!=null)throw Error(r(60));t.innerHTML=s}}break;case"children":typeof l=="string"?vn(t,l):(typeof l=="number"||typeof l=="bigint")&&vn(t,""+l);break;case"onScroll":l!=null&&Mt("scroll",t);break;case"onScrollEnd":l!=null&&Mt("scrollend",t);break;case"onClick":l!=null&&(t.onclick=_i);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!T.hasOwnProperty(s))e:{if(s[0]==="o"&&s[1]==="n"&&(f=s.endsWith("Capture"),n=s.slice(2,f?s.length-7:void 0),p=t[_n]||null,p=p!=null?p[s]:null,typeof p=="function"&&t.removeEventListener(n,p,f),typeof l=="function")){typeof p!="function"&&p!==null&&(s in t?t[s]=null:t.hasAttribute(s)&&t.removeAttribute(s)),t.addEventListener(n,l,f);break e}s in t?t[s]=l:l===!0?t.setAttribute(s,""):Re(t,s,l)}}}function Wn(t,n,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Mt("error",t),Mt("load",t);var l=!1,f=!1,p;for(p in s)if(s.hasOwnProperty(p)){var S=s[p];if(S!=null)switch(p){case"src":l=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Zt(t,n,p,S,s,null)}}f&&Zt(t,n,"srcSet",s.srcSet,s,null),l&&Zt(t,n,"src",s.src,s,null);return;case"input":Mt("invalid",t);var w=p=S=f=null,V=null,oe=null;for(l in s)if(s.hasOwnProperty(l)){var xe=s[l];if(xe!=null)switch(l){case"name":f=xe;break;case"type":S=xe;break;case"checked":V=xe;break;case"defaultChecked":oe=xe;break;case"value":p=xe;break;case"defaultValue":w=xe;break;case"children":case"dangerouslySetInnerHTML":if(xe!=null)throw Error(r(137,n));break;default:Zt(t,n,l,xe,s,null)}}Tn(t,p,w,V,oe,S,f,!1);return;case"select":Mt("invalid",t),l=S=p=null;for(f in s)if(s.hasOwnProperty(f)&&(w=s[f],w!=null))switch(f){case"value":p=w;break;case"defaultValue":S=w;break;case"multiple":l=w;default:Zt(t,n,f,w,s,null)}n=p,s=S,t.multiple=!!l,n!=null?gn(t,!!l,n,!1):s!=null&&gn(t,!!l,s,!0);return;case"textarea":Mt("invalid",t),p=f=l=null;for(S in s)if(s.hasOwnProperty(S)&&(w=s[S],w!=null))switch(S){case"value":l=w;break;case"defaultValue":f=w;break;case"children":p=w;break;case"dangerouslySetInnerHTML":if(w!=null)throw Error(r(91));break;default:Zt(t,n,S,w,s,null)}Hn(t,l,f,p);return;case"option":for(V in s)if(s.hasOwnProperty(V)&&(l=s[V],l!=null))switch(V){case"selected":t.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Zt(t,n,V,l,s,null)}return;case"dialog":Mt("beforetoggle",t),Mt("toggle",t),Mt("cancel",t),Mt("close",t);break;case"iframe":case"object":Mt("load",t);break;case"video":case"audio":for(l=0;l<fl.length;l++)Mt(fl[l],t);break;case"image":Mt("error",t),Mt("load",t);break;case"details":Mt("toggle",t);break;case"embed":case"source":case"link":Mt("error",t),Mt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(oe in s)if(s.hasOwnProperty(oe)&&(l=s[oe],l!=null))switch(oe){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Zt(t,n,oe,l,s,null)}return;default:if(Bt(n)){for(xe in s)s.hasOwnProperty(xe)&&(l=s[xe],l!==void 0&&Ed(t,n,xe,l,s,void 0));return}}for(w in s)s.hasOwnProperty(w)&&(l=s[w],l!=null&&Zt(t,n,w,l,s,null))}function BM(t,n,s,l){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,p=null,S=null,w=null,V=null,oe=null,xe=null;for(de in s){var be=s[de];if(s.hasOwnProperty(de)&&be!=null)switch(de){case"checked":break;case"value":break;case"defaultValue":V=be;default:l.hasOwnProperty(de)||Zt(t,n,de,null,l,be)}}for(var ce in l){var de=l[ce];if(be=s[ce],l.hasOwnProperty(ce)&&(de!=null||be!=null))switch(ce){case"type":p=de;break;case"name":f=de;break;case"checked":oe=de;break;case"defaultChecked":xe=de;break;case"value":S=de;break;case"defaultValue":w=de;break;case"children":case"dangerouslySetInnerHTML":if(de!=null)throw Error(r(137,n));break;default:de!==be&&Zt(t,n,ce,de,l,be)}}Ye(t,S,w,V,oe,xe,p,f);return;case"select":de=S=w=ce=null;for(p in s)if(V=s[p],s.hasOwnProperty(p)&&V!=null)switch(p){case"value":break;case"multiple":de=V;default:l.hasOwnProperty(p)||Zt(t,n,p,null,l,V)}for(f in l)if(p=l[f],V=s[f],l.hasOwnProperty(f)&&(p!=null||V!=null))switch(f){case"value":ce=p;break;case"defaultValue":w=p;break;case"multiple":S=p;default:p!==V&&Zt(t,n,f,p,l,V)}n=w,s=S,l=de,ce!=null?gn(t,!!s,ce,!1):!!l!=!!s&&(n!=null?gn(t,!!s,n,!0):gn(t,!!s,s?[]:"",!1));return;case"textarea":de=ce=null;for(w in s)if(f=s[w],s.hasOwnProperty(w)&&f!=null&&!l.hasOwnProperty(w))switch(w){case"value":break;case"children":break;default:Zt(t,n,w,null,l,f)}for(S in l)if(f=l[S],p=s[S],l.hasOwnProperty(S)&&(f!=null||p!=null))switch(S){case"value":ce=f;break;case"defaultValue":de=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(r(91));break;default:f!==p&&Zt(t,n,S,f,l,p)}Zn(t,ce,de);return;case"option":for(var Je in s)if(ce=s[Je],s.hasOwnProperty(Je)&&ce!=null&&!l.hasOwnProperty(Je))switch(Je){case"selected":t.selected=!1;break;default:Zt(t,n,Je,null,l,ce)}for(V in l)if(ce=l[V],de=s[V],l.hasOwnProperty(V)&&ce!==de&&(ce!=null||de!=null))switch(V){case"selected":t.selected=ce&&typeof ce!="function"&&typeof ce!="symbol";break;default:Zt(t,n,V,ce,l,de)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var st in s)ce=s[st],s.hasOwnProperty(st)&&ce!=null&&!l.hasOwnProperty(st)&&Zt(t,n,st,null,l,ce);for(oe in l)if(ce=l[oe],de=s[oe],l.hasOwnProperty(oe)&&ce!==de&&(ce!=null||de!=null))switch(oe){case"children":case"dangerouslySetInnerHTML":if(ce!=null)throw Error(r(137,n));break;default:Zt(t,n,oe,ce,l,de)}return;default:if(Bt(n)){for(var Kt in s)ce=s[Kt],s.hasOwnProperty(Kt)&&ce!==void 0&&!l.hasOwnProperty(Kt)&&Ed(t,n,Kt,void 0,l,ce);for(xe in l)ce=l[xe],de=s[xe],!l.hasOwnProperty(xe)||ce===de||ce===void 0&&de===void 0||Ed(t,n,xe,ce,l,de);return}}for(var te in s)ce=s[te],s.hasOwnProperty(te)&&ce!=null&&!l.hasOwnProperty(te)&&Zt(t,n,te,null,l,ce);for(be in l)ce=l[be],de=s[be],!l.hasOwnProperty(be)||ce===de||ce==null&&de==null||Zt(t,n,be,ce,l,de)}function Zg(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function zM(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,s=performance.getEntriesByType("resource"),l=0;l<s.length;l++){var f=s[l],p=f.transferSize,S=f.initiatorType,w=f.duration;if(p&&w&&Zg(S)){for(S=0,w=f.responseEnd,l+=1;l<s.length;l++){var V=s[l],oe=V.startTime;if(oe>w)break;var xe=V.transferSize,be=V.initiatorType;xe&&Zg(be)&&(V=V.responseEnd,S+=xe*(V<w?1:(w-oe)/(V-oe)))}if(--l,n+=8*(p+S)/(f.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var bd=null,Td=null;function Fc(t){return t.nodeType===9?t:t.ownerDocument}function Kg(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Qg(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Ad(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Rd=null;function HM(){var t=window.event;return t&&t.type==="popstate"?t===Rd?!1:(Rd=t,!0):(Rd=null,!1)}var Jg=typeof setTimeout=="function"?setTimeout:void 0,GM=typeof clearTimeout=="function"?clearTimeout:void 0,$g=typeof Promise=="function"?Promise:void 0,VM=typeof queueMicrotask=="function"?queueMicrotask:typeof $g<"u"?function(t){return $g.resolve(null).then(t).catch(kM)}:Jg;function kM(t){setTimeout(function(){throw t})}function Ts(t){return t==="head"}function e_(t,n){var s=n,l=0;do{var f=s.nextSibling;if(t.removeChild(s),f&&f.nodeType===8)if(s=f.data,s==="/$"||s==="/&"){if(l===0){t.removeChild(f),ao(n);return}l--}else if(s==="$"||s==="$?"||s==="$~"||s==="$!"||s==="&")l++;else if(s==="html")hl(t.ownerDocument.documentElement);else if(s==="head"){s=t.ownerDocument.head,hl(s);for(var p=s.firstChild;p;){var S=p.nextSibling,w=p.nodeName;p[ji]||w==="SCRIPT"||w==="STYLE"||w==="LINK"&&p.rel.toLowerCase()==="stylesheet"||s.removeChild(p),p=S}}else s==="body"&&hl(t.ownerDocument.body);s=f}while(s);ao(n)}function t_(t,n){var s=t;t=0;do{var l=s.nextSibling;if(s.nodeType===1?n?(s._stashedDisplay=s.style.display,s.style.display="none"):(s.style.display=s._stashedDisplay||"",s.getAttribute("style")===""&&s.removeAttribute("style")):s.nodeType===3&&(n?(s._stashedText=s.nodeValue,s.nodeValue=""):s.nodeValue=s._stashedText||""),l&&l.nodeType===8)if(s=l.data,s==="/$"){if(t===0)break;t--}else s!=="$"&&s!=="$?"&&s!=="$~"&&s!=="$!"||t++;s=l}while(s)}function Cd(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var s=n;switch(n=n.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":Cd(s),Zi(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}t.removeChild(s)}}function XM(t,n,s,l){for(;t.nodeType===1;){var f=s;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!l&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(l){if(!t[ji])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(p=t.getAttribute("rel"),p==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(p!==f.rel||t.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||t.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||t.getAttribute("title")!==(f.title==null?null:f.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(p=t.getAttribute("src"),(p!==(f.src==null?null:f.src)||t.getAttribute("type")!==(f.type==null?null:f.type)||t.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&p&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var p=f.name==null?null:""+f.name;if(f.type==="hidden"&&t.getAttribute("name")===p)return t}else return t;if(t=Hi(t.nextSibling),t===null)break}return null}function WM(t,n,s){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!s||(t=Hi(t.nextSibling),t===null))return null;return t}function n_(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=Hi(t.nextSibling),t===null))return null;return t}function wd(t){return t.data==="$?"||t.data==="$~"}function Dd(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function YM(t,n){var s=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||s.readyState!=="loading")n();else{var l=function(){n(),s.removeEventListener("DOMContentLoaded",l)};s.addEventListener("DOMContentLoaded",l),t._reactRetry=l}}function Hi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var Ld=null;function i_(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var s=t.data;if(s==="/$"||s==="/&"){if(n===0)return Hi(t.nextSibling);n--}else s!=="$"&&s!=="$!"&&s!=="$?"&&s!=="$~"&&s!=="&"||n++}t=t.nextSibling}return null}function a_(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var s=t.data;if(s==="$"||s==="$!"||s==="$?"||s==="$~"||s==="&"){if(n===0)return t;n--}else s!=="/$"&&s!=="/&"||n++}t=t.previousSibling}return null}function s_(t,n,s){switch(n=Fc(s),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function hl(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Zi(t)}var Gi=new Map,r_=new Set;function Bc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Ya=H.d;H.d={f:qM,r:jM,D:ZM,C:KM,L:QM,m:JM,X:ey,S:$M,M:ty};function qM(){var t=Ya.f(),n=wc();return t||n}function jM(t){var n=Di(t);n!==null&&n.tag===5&&n.type==="form"?E0(n):Ya.r(t)}var to=typeof document>"u"?null:document;function o_(t,n,s){var l=to;if(l&&typeof n=="string"&&n){var f=wt(n);f='link[rel="'+t+'"][href="'+f+'"]',typeof s=="string"&&(f+='[crossorigin="'+s+'"]'),r_.has(f)||(r_.add(f),t={rel:t,crossOrigin:s,href:n},l.querySelector(f)===null&&(n=l.createElement("link"),Wn(n,"link",t),_e(n),l.head.appendChild(n)))}}function ZM(t){Ya.D(t),o_("dns-prefetch",t,null)}function KM(t,n){Ya.C(t,n),o_("preconnect",t,n)}function QM(t,n,s){Ya.L(t,n,s);var l=to;if(l&&t&&n){var f='link[rel="preload"][as="'+wt(n)+'"]';n==="image"&&s&&s.imageSrcSet?(f+='[imagesrcset="'+wt(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(f+='[imagesizes="'+wt(s.imageSizes)+'"]')):f+='[href="'+wt(t)+'"]';var p=f;switch(n){case"style":p=no(t);break;case"script":p=io(t)}Gi.has(p)||(t=v({rel:"preload",href:n==="image"&&s&&s.imageSrcSet?void 0:t,as:n},s),Gi.set(p,t),l.querySelector(f)!==null||n==="style"&&l.querySelector(pl(p))||n==="script"&&l.querySelector(ml(p))||(n=l.createElement("link"),Wn(n,"link",t),_e(n),l.head.appendChild(n)))}}function JM(t,n){Ya.m(t,n);var s=to;if(s&&t){var l=n&&typeof n.as=="string"?n.as:"script",f='link[rel="modulepreload"][as="'+wt(l)+'"][href="'+wt(t)+'"]',p=f;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":p=io(t)}if(!Gi.has(p)&&(t=v({rel:"modulepreload",href:t},n),Gi.set(p,t),s.querySelector(f)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(ml(p)))return}l=s.createElement("link"),Wn(l,"link",t),_e(l),s.head.appendChild(l)}}}function $M(t,n,s){Ya.S(t,n,s);var l=to;if(l&&t){var f=Ki(l).hoistableStyles,p=no(t);n=n||"default";var S=f.get(p);if(!S){var w={loading:0,preload:null};if(S=l.querySelector(pl(p)))w.loading=5;else{t=v({rel:"stylesheet",href:t,"data-precedence":n},s),(s=Gi.get(p))&&Nd(t,s);var V=S=l.createElement("link");_e(V),Wn(V,"link",t),V._p=new Promise(function(oe,xe){V.onload=oe,V.onerror=xe}),V.addEventListener("load",function(){w.loading|=1}),V.addEventListener("error",function(){w.loading|=2}),w.loading|=4,zc(S,n,l)}S={type:"stylesheet",instance:S,count:1,state:w},f.set(p,S)}}}function ey(t,n){Ya.X(t,n);var s=to;if(s&&t){var l=Ki(s).hoistableScripts,f=io(t),p=l.get(f);p||(p=s.querySelector(ml(f)),p||(t=v({src:t,async:!0},n),(n=Gi.get(f))&&Ud(t,n),p=s.createElement("script"),_e(p),Wn(p,"link",t),s.head.appendChild(p)),p={type:"script",instance:p,count:1,state:null},l.set(f,p))}}function ty(t,n){Ya.M(t,n);var s=to;if(s&&t){var l=Ki(s).hoistableScripts,f=io(t),p=l.get(f);p||(p=s.querySelector(ml(f)),p||(t=v({src:t,async:!0,type:"module"},n),(n=Gi.get(f))&&Ud(t,n),p=s.createElement("script"),_e(p),Wn(p,"link",t),s.head.appendChild(p)),p={type:"script",instance:p,count:1,state:null},l.set(f,p))}}function l_(t,n,s,l){var f=(f=ae.current)?Bc(f):null;if(!f)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(n=no(s.href),s=Ki(f).hoistableStyles,l=s.get(n),l||(l={type:"style",instance:null,count:0,state:null},s.set(n,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){t=no(s.href);var p=Ki(f).hoistableStyles,S=p.get(t);if(S||(f=f.ownerDocument||f,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},p.set(t,S),(p=f.querySelector(pl(t)))&&!p._p&&(S.instance=p,S.state.loading=5),Gi.has(t)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},Gi.set(t,s),p||ny(f,t,s,S.state))),n&&l===null)throw Error(r(528,""));return S}if(n&&l!==null)throw Error(r(529,""));return null;case"script":return n=s.async,s=s.src,typeof s=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=io(s),s=Ki(f).hoistableScripts,l=s.get(n),l||(l={type:"script",instance:null,count:0,state:null},s.set(n,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function no(t){return'href="'+wt(t)+'"'}function pl(t){return'link[rel="stylesheet"]['+t+"]"}function c_(t){return v({},t,{"data-precedence":t.precedence,precedence:null})}function ny(t,n,s,l){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?l.loading=1:(n=t.createElement("link"),l.preload=n,n.addEventListener("load",function(){return l.loading|=1}),n.addEventListener("error",function(){return l.loading|=2}),Wn(n,"link",s),_e(n),t.head.appendChild(n))}function io(t){return'[src="'+wt(t)+'"]'}function ml(t){return"script[async]"+t}function u_(t,n,s){if(n.count++,n.instance===null)switch(n.type){case"style":var l=t.querySelector('style[data-href~="'+wt(s.href)+'"]');if(l)return n.instance=l,_e(l),l;var f=v({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return l=(t.ownerDocument||t).createElement("style"),_e(l),Wn(l,"style",f),zc(l,s.precedence,t),n.instance=l;case"stylesheet":f=no(s.href);var p=t.querySelector(pl(f));if(p)return n.state.loading|=4,n.instance=p,_e(p),p;l=c_(s),(f=Gi.get(f))&&Nd(l,f),p=(t.ownerDocument||t).createElement("link"),_e(p);var S=p;return S._p=new Promise(function(w,V){S.onload=w,S.onerror=V}),Wn(p,"link",l),n.state.loading|=4,zc(p,s.precedence,t),n.instance=p;case"script":return p=io(s.src),(f=t.querySelector(ml(p)))?(n.instance=f,_e(f),f):(l=s,(f=Gi.get(p))&&(l=v({},s),Ud(l,f)),t=t.ownerDocument||t,f=t.createElement("script"),_e(f),Wn(f,"link",l),t.head.appendChild(f),n.instance=f);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(l=n.instance,n.state.loading|=4,zc(l,s.precedence,t));return n.instance}function zc(t,n,s){for(var l=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=l.length?l[l.length-1]:null,p=f,S=0;S<l.length;S++){var w=l[S];if(w.dataset.precedence===n)p=w;else if(p!==f)break}p?p.parentNode.insertBefore(t,p.nextSibling):(n=s.nodeType===9?s.head:s,n.insertBefore(t,n.firstChild))}function Nd(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Ud(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Hc=null;function f_(t,n,s){if(Hc===null){var l=new Map,f=Hc=new Map;f.set(s,l)}else f=Hc,l=f.get(s),l||(l=new Map,f.set(s,l));if(l.has(t))return l;for(l.set(t,null),s=s.getElementsByTagName(t),f=0;f<s.length;f++){var p=s[f];if(!(p[ji]||p[mn]||t==="link"&&p.getAttribute("rel")==="stylesheet")&&p.namespaceURI!=="http://www.w3.org/2000/svg"){var S=p.getAttribute(n)||"";S=t+S;var w=l.get(S);w?w.push(p):l.set(S,[p])}}return l}function d_(t,n,s){t=t.ownerDocument||t,t.head.insertBefore(s,n==="title"?t.querySelector("head > title"):null)}function iy(t,n,s){if(s===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function h_(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function ay(t,n,s,l){if(s.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(s.state.loading&4)===0){if(s.instance===null){var f=no(l.href),p=n.querySelector(pl(f));if(p){n=p._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=Gc.bind(t),n.then(t,t)),s.state.loading|=4,s.instance=p,_e(p);return}p=n.ownerDocument||n,l=c_(l),(f=Gi.get(f))&&Nd(l,f),p=p.createElement("link"),_e(p);var S=p;S._p=new Promise(function(w,V){S.onload=w,S.onerror=V}),Wn(p,"link",l),s.instance=p}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(s,n),(n=s.state.preload)&&(s.state.loading&3)===0&&(t.count++,s=Gc.bind(t),n.addEventListener("load",s),n.addEventListener("error",s))}}var Od=0;function sy(t,n){return t.stylesheets&&t.count===0&&kc(t,t.stylesheets),0<t.count||0<t.imgCount?function(s){var l=setTimeout(function(){if(t.stylesheets&&kc(t,t.stylesheets),t.unsuspend){var p=t.unsuspend;t.unsuspend=null,p()}},6e4+n);0<t.imgBytes&&Od===0&&(Od=62500*zM());var f=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&kc(t,t.stylesheets),t.unsuspend)){var p=t.unsuspend;t.unsuspend=null,p()}},(t.imgBytes>Od?50:800)+n);return t.unsuspend=s,function(){t.unsuspend=null,clearTimeout(l),clearTimeout(f)}}:null}function Gc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)kc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Vc=null;function kc(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Vc=new Map,n.forEach(ry,t),Vc=null,Gc.call(t))}function ry(t,n){if(!(n.state.loading&4)){var s=Vc.get(t);if(s)var l=s.get(null);else{s=new Map,Vc.set(t,s);for(var f=t.querySelectorAll("link[data-precedence],style[data-precedence]"),p=0;p<f.length;p++){var S=f[p];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(s.set(S.dataset.precedence,S),l=S)}l&&s.set(null,l)}f=n.instance,S=f.getAttribute("data-precedence"),p=s.get(S)||l,p===l&&s.set(null,f),s.set(S,f),this.count++,l=Gc.bind(this),f.addEventListener("load",l),f.addEventListener("error",l),p?p.parentNode.insertBefore(f,p.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(f,t.firstChild)),n.state.loading|=4}}var gl={$$typeof:P,Provider:null,Consumer:null,_currentValue:$,_currentValue2:$,_threadCount:0};function oy(t,n,s,l,f,p,S,w,V){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ve(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ve(0),this.hiddenUpdates=Ve(null),this.identifierPrefix=l,this.onUncaughtError=f,this.onCaughtError=p,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=V,this.incompleteTransitions=new Map}function p_(t,n,s,l,f,p,S,w,V,oe,xe,be){return t=new oy(t,n,s,S,V,oe,xe,be,w),n=1,p===!0&&(n|=24),p=xi(3,null,null,n),t.current=p,p.stateNode=t,n=hf(),n.refCount++,t.pooledCache=n,n.refCount++,p.memoizedState={element:l,isDehydrated:s,cache:n},_f(p),t}function m_(t){return t?(t=Or,t):Or}function g_(t,n,s,l,f,p){f=m_(f),l.context===null?l.context=f:l.pendingContext=f,l=ps(n),l.payload={element:s},p=p===void 0?null:p,p!==null&&(l.callback=p),s=ms(t,l,n),s!==null&&(di(s,t,n),jo(s,t,n))}function __(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var s=t.retryLane;t.retryLane=s!==0&&s<n?s:n}}function Pd(t,n){__(t,n),(t=t.alternate)&&__(t,n)}function v_(t){if(t.tag===13||t.tag===31){var n=er(t,67108864);n!==null&&di(n,t,67108864),Pd(t,67108864)}}function x_(t){if(t.tag===13||t.tag===31){var n=bi();n=la(n);var s=er(t,n);s!==null&&di(s,t,n),Pd(t,n)}}var Xc=!0;function ly(t,n,s,l){var f=z.T;z.T=null;var p=H.p;try{H.p=2,Id(t,n,s,l)}finally{H.p=p,z.T=f}}function cy(t,n,s,l){var f=z.T;z.T=null;var p=H.p;try{H.p=8,Id(t,n,s,l)}finally{H.p=p,z.T=f}}function Id(t,n,s,l){if(Xc){var f=Fd(l);if(f===null)yd(t,n,l,Wc,s),M_(t,l);else if(fy(f,t,n,s,l))l.stopPropagation();else if(M_(t,l),n&4&&-1<uy.indexOf(t)){for(;f!==null;){var p=Di(f);if(p!==null)switch(p.tag){case 3:if(p=p.stateNode,p.current.memoizedState.isDehydrated){var S=Ne(p.pendingLanes);if(S!==0){var w=p;for(w.pendingLanes|=2,w.entangledLanes|=2;S;){var V=1<<31-Ge(S);w.entanglements[1]|=V,S&=~V}ga(p),(Ht&6)===0&&(Rc=Tt()+500,ul(0))}}break;case 31:case 13:w=er(p,2),w!==null&&di(w,p,2),wc(),Pd(p,2)}if(p=Fd(l),p===null&&yd(t,n,l,Wc,s),p===f)break;f=p}f!==null&&l.stopPropagation()}else yd(t,n,l,null,s)}}function Fd(t){return t=Po(t),Bd(t)}var Wc=null;function Bd(t){if(Wc=null,t=wi(t),t!==null){var n=c(t);if(n===null)t=null;else{var s=n.tag;if(s===13){if(t=u(n),t!==null)return t;t=null}else if(s===31){if(t=d(n),t!==null)return t;t=null}else if(s===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return Wc=t,null}function S_(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(At()){case F:return 2;case E:return 8;case J:case re:return 32;case le:return 268435456;default:return 32}default:return 32}}var zd=!1,As=null,Rs=null,Cs=null,_l=new Map,vl=new Map,ws=[],uy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function M_(t,n){switch(t){case"focusin":case"focusout":As=null;break;case"dragenter":case"dragleave":Rs=null;break;case"mouseover":case"mouseout":Cs=null;break;case"pointerover":case"pointerout":_l.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":vl.delete(n.pointerId)}}function xl(t,n,s,l,f,p){return t===null||t.nativeEvent!==p?(t={blockedOn:n,domEventName:s,eventSystemFlags:l,nativeEvent:p,targetContainers:[f]},n!==null&&(n=Di(n),n!==null&&v_(n)),t):(t.eventSystemFlags|=l,n=t.targetContainers,f!==null&&n.indexOf(f)===-1&&n.push(f),t)}function fy(t,n,s,l,f){switch(n){case"focusin":return As=xl(As,t,n,s,l,f),!0;case"dragenter":return Rs=xl(Rs,t,n,s,l,f),!0;case"mouseover":return Cs=xl(Cs,t,n,s,l,f),!0;case"pointerover":var p=f.pointerId;return _l.set(p,xl(_l.get(p)||null,t,n,s,l,f)),!0;case"gotpointercapture":return p=f.pointerId,vl.set(p,xl(vl.get(p)||null,t,n,s,l,f)),!0}return!1}function y_(t){var n=wi(t.target);if(n!==null){var s=c(n);if(s!==null){if(n=s.tag,n===13){if(n=u(s),n!==null){t.blockedOn=n,Ca(t.priority,function(){x_(s)});return}}else if(n===31){if(n=d(s),n!==null){t.blockedOn=n,Ca(t.priority,function(){x_(s)});return}}else if(n===3&&s.stateNode.current.memoizedState.isDehydrated){t.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Yc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var s=Fd(t.nativeEvent);if(s===null){s=t.nativeEvent;var l=new s.constructor(s.type,s);qs=l,s.target.dispatchEvent(l),qs=null}else return n=Di(s),n!==null&&v_(n),t.blockedOn=s,!1;n.shift()}return!0}function E_(t,n,s){Yc(t)&&s.delete(n)}function dy(){zd=!1,As!==null&&Yc(As)&&(As=null),Rs!==null&&Yc(Rs)&&(Rs=null),Cs!==null&&Yc(Cs)&&(Cs=null),_l.forEach(E_),vl.forEach(E_)}function qc(t,n){t.blockedOn===n&&(t.blockedOn=null,zd||(zd=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,dy)))}var jc=null;function b_(t){jc!==t&&(jc=t,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){jc===t&&(jc=null);for(var n=0;n<t.length;n+=3){var s=t[n],l=t[n+1],f=t[n+2];if(typeof l!="function"){if(Bd(l||s)===null)continue;break}var p=Di(s);p!==null&&(t.splice(n,3),n-=3,Ff(p,{pending:!0,data:f,method:s.method,action:l},l,f))}}))}function ao(t){function n(V){return qc(V,t)}As!==null&&qc(As,t),Rs!==null&&qc(Rs,t),Cs!==null&&qc(Cs,t),_l.forEach(n),vl.forEach(n);for(var s=0;s<ws.length;s++){var l=ws[s];l.blockedOn===t&&(l.blockedOn=null)}for(;0<ws.length&&(s=ws[0],s.blockedOn===null);)y_(s),s.blockedOn===null&&ws.shift();if(s=(t.ownerDocument||t).$$reactFormReplay,s!=null)for(l=0;l<s.length;l+=3){var f=s[l],p=s[l+1],S=f[_n]||null;if(typeof p=="function")S||b_(s);else if(S){var w=null;if(p&&p.hasAttribute("formAction")){if(f=p,S=p[_n]||null)w=S.formAction;else if(Bd(f)!==null)continue}else w=S.action;typeof w=="function"?s[l+1]=w:(s.splice(l,3),l-=3),b_(s)}}}function T_(){function t(p){p.canIntercept&&p.info==="react-transition"&&p.intercept({handler:function(){return new Promise(function(S){return f=S})},focusReset:"manual",scroll:"manual"})}function n(){f!==null&&(f(),f=null),l||setTimeout(s,20)}function s(){if(!l&&!navigation.transition){var p=navigation.currentEntry;p&&p.url!=null&&navigation.navigate(p.url,{state:p.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,f=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(s,100),function(){l=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),f!==null&&(f(),f=null)}}}function Hd(t){this._internalRoot=t}Zc.prototype.render=Hd.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var s=n.current,l=bi();g_(s,l,t,n,null,null)},Zc.prototype.unmount=Hd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;g_(t.current,2,null,t,null,null),wc(),n[zn]=null}};function Zc(t){this._internalRoot=t}Zc.prototype.unstable_scheduleHydration=function(t){if(t){var n=ss();t={blockedOn:null,target:t,priority:n};for(var s=0;s<ws.length&&n!==0&&n<ws[s].priority;s++);ws.splice(s,0,t),s===0&&y_(t)}};var A_=e.version;if(A_!=="19.2.7")throw Error(r(527,A_,"19.2.7"));H.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=h(n),t=t!==null?g(t):null,t=t===null?null:t.stateNode,t};var hy={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Kc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Kc.isDisabled&&Kc.supportsFiber)try{pe=Kc.inject(hy),fe=Kc}catch{}}return Ml.createRoot=function(t,n){if(!o(t))throw Error(r(299));var s=!1,l="",f=U0,p=O0,S=P0;return n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onUncaughtError!==void 0&&(f=n.onUncaughtError),n.onCaughtError!==void 0&&(p=n.onCaughtError),n.onRecoverableError!==void 0&&(S=n.onRecoverableError)),n=p_(t,1,!1,null,null,s,l,null,f,p,S,T_),t[zn]=n.current,Md(t),new Hd(n)},Ml.hydrateRoot=function(t,n,s){if(!o(t))throw Error(r(299));var l=!1,f="",p=U0,S=O0,w=P0,V=null;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(f=s.identifierPrefix),s.onUncaughtError!==void 0&&(p=s.onUncaughtError),s.onCaughtError!==void 0&&(S=s.onCaughtError),s.onRecoverableError!==void 0&&(w=s.onRecoverableError),s.formState!==void 0&&(V=s.formState)),n=p_(t,1,!0,n,s??null,l,f,V,p,S,w,T_),n.context=m_(null),s=n.current,l=bi(),l=la(l),f=ps(l),f.callback=null,ms(s,f,l),s=l,n.current.lanes=s,Ze(n,s),ga(n),t[zn]=n.current,Md(t),new Zc(n)},Ml.version="19.2.7",Ml}var I_;function yy(){if(I_)return kd.exports;I_=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(e){console.error(e)}}return a(),kd.exports=My(),kd.exports}var Ey=yy();const by={BASE_URL:"/",DEV:!1,MODE:"production",PROD:!0,SSR:!1,VITE_APP_URL:"https://demo.morpheum.io",VITE_DISCORD_URL:"",VITE_DOCS_URL:"",VITE_MANIFESTO_URL:"",VITE_TUTORIAL_VIDEO_URL:"",VITE_X_URL:""},so=(a,e="#")=>{var i;return((i=by[a])==null?void 0:i.trim())||e},Ln={app:so("VITE_APP_URL","https://demo.morpheum.io"),docs:so("VITE_DOCS_URL"),manifesto:so("VITE_MANIFESTO_URL"),discord:so("VITE_DISCORD_URL"),x:so("VITE_X_URL"),tutorialVideo:so("VITE_TUTORIAL_VIDEO_URL",""),explore:"#explore",exploreAgents:"#explore-agents",exploreVaults:"#explore-vaults"},Su=[{id:"demo",label:"Demo",href:"#demo"},{id:"personas",label:"Personas",href:"#personas"},{id:"how",label:"How it works",href:"#how"},{id:"explore",label:"Explore",href:"#explore"}],qd={text:"> The agent-native L1 DEX, for faster and safer trades.",href:Ln.manifesto},Ls={eyebrow:{label:"A manifesto for verifiable agents",href:Ln.manifesto},headline:["Agents you can trust.","Assets you can trade."],primaryCta:{label:"Launch Morpheum",href:Ln.app},secondaryCta:{label:"Explore agents",href:Ln.explore}},F_={risks:[{risk:"Speculation without underwriting",failure:"Buy random agent tokens on narrative alone.",solveLabel:"Proof",solve:"Underwrite on receipts, reputation, and risk scores — before you commit a dollar."},{risk:"Automation without capital controls",failure:"Run an agent with unbounded capital and no kill switch.",solveLabel:"Controls",solve:"Set Risk Level, approve gated moves, and isolate each strategy in its own bucket."}],close:"The Agent-native L1 DEX — faster, safer trades."},B_=[{label:"MAEX indices",status:"LIVE",live:!0},{label:"Agents",status:"REPUTATION / SHARPE / ROI"},{label:"Risk level",status:"MANUAL / HITL / HANDS-OFF"},{label:"Agent notifications",status:"WANT-TO / ACTION / PAUSED / REJECTED"},{label:"Copy buckets",status:"LIVE",live:!0},{label:"Buckets",status:"RISK-ISOLATED"},{label:"Vaults",status:"ONCHAIN"},{label:"Staking",status:"LIVE",live:!0}],Ih={kicker:"Product tour",videoCaption:"See an agent discovered, copied, supervised, and isolated in ~60s.",verbs:[{verb:"Discover",description:"Agents & indices — proof first."},{verb:"Copy",description:"Mirror a proven agent into your bucket."},{verb:"Supervise",description:"Approve gated moves on HITL."},{verb:"Isolate",description:"Risk contained in its own bucket."}]},jd={kicker:"Choose your path",title:"Become part of the agent economy",items:[{title:"Become an Operator",weight:"major",steps:["Mint an agent and set its mandate.","Choose a Risk Level: Manual · HITL · Hands-off.","Build a proven track record investors can underwrite."],cta:{label:"Run an agent",href:Ln.exploreAgents},meta:{kind:"identity",name:"SharpeShark",tx:"0xa4c2…8f1d",hash:"did:morph:0x7a3f…c91e",chain:"Morpheum · hop 0",verified:"yes",rep:"72",portable:"yes",next:"minting mandate…"}},{title:"Become a Copy Trader",weight:"major",steps:["Screen agents on real proof — receipts and risk scores.","Mirror the best into your own dedicated bucket.","Track PnL and rebalance anytime."],cta:{label:"Start copying",href:Ln.exploreAgents},meta:{kind:"chain",label:"on-chain transactions",chain:"Morpheum · hop 0",steps:[{op:"mint agent",tx:"0xa4c2…8f1d",status:"settled"},{op:"mint bucket",tx:"0xb91e…4c02",status:"settled"},{op:"fund transfer",tx:"0xe81a…3b70",status:"settled",from:"SortinoSloth",to:"your bucket",asset:"USDC",amt:"2500"}]}},{title:"Provide Capital",weight:"light",steps:["Deposit into a vault or bucket.","Stake to earn.","Withdraw on your terms."],cta:{label:"Explore vaults",href:Ln.exploreVaults},meta:{kind:"community",label:"on-chain transaction",tx:"0x12af…9e44",from:"you",to:"Vault-Alpha",asset:"USDC",amt:"10000",chain:"Morpheum · hop 0",status:"queued"}}]},Ns={kicker:"How it works",title:"Discover → Copy → Supervise → Isolate",outcome:"A proven, risk-isolated capital position — not a bet on a black box.",chips:[{label:"Risk level",value:"Manual · HITL · Hands-off"},{label:"Notifications",value:"Want-to · Action · Paused · Rejected"},{label:"Capital",value:"Bucket / Vault"}],steps:[{n:1,title:"Discover",feature:"Agents & Indices + proof",body:"Browse the MAEX roster and index catalog and read the proof before you commit a dollar.",example:"Open SharpeShark and see its receipts, reputation, risk score, and Sharpe / ROI side by side."},{n:2,title:"Copy",feature:"Copy Trade",body:"Mirror a proven performer into your own bucket in one click, sized to your capital, with spread / funding cost shown before you confirm.",example:"One click clones SharpeShark's strategy into a fresh bucket bound to your wallet."},{n:3,title:"Supervise",feature:"Risk Level + Agent Notifications",body:"Set how much the agent may act on its own — Manual · HITL · Hands-off — and stay in the loop through Agent Notifications: Want to · Action · Paused · Rejected.",example:'On HITL, a "Want to open ETH long" notification waits for your inline Approve / Reject, and Explain shows why the agent wants the trade.'},{n:4,title:"Isolate",feature:"Buckets",body:"Every mirror lands in its own dedicated cross-margin bucket bound to a wallet executor agent, so risk is contained per strategy.",example:"SharpeShark runs in its own bucket with its own margin and exposure — if it draws down, only that bucket's capital is at risk; your other buckets and spot balance are untouched."}]},ro={kicker:"Explore",title:"Agents. Indices. Buckets. Vaults.",cards:[{title:"Agents",verbs:["Browse","Compare","Copy"],agents:[{name:"SharpeShark",sharpe:"2.41",roi:"+38.2%",risk:"72",positive:!0},{name:"SortinoSloth",sharpe:"1.86",roi:"+21.4%",risk:"58",positive:!0},{name:"FundingFox",sharpe:"1.12",roi:"-4.1%",risk:"41",positive:!1}]},{title:"Indices",verbs:["Track","Weight","Hold"],blurb:"Curated agent baskets for one-click exposure to proven strategies.",sample:[{label:"MAEX Core",value:"+12.8%",positive:!0},{label:"Risk-Off Bucket",value:"+4.2%",positive:!0}]},{title:"Buckets",verbs:["Isolate","Trade","Contain"],blurb:"Risk-isolated positions — each strategy in its own margin shell.",sample:[{label:"Bucket A",value:"ISOLATED",positive:!1},{label:"Bucket B",value:"ISOLATED",positive:!1}]},{title:"Vaults",verbs:["Deposit","Earn","Withdraw"],blurb:"Pooled onchain capital — graded vaults with live APR and TVL.",sample:[{label:"MLP (House Liq.)",value:"A · 18.4%",meta:"$9.8M TVL"},{label:"Basis Capture",value:"A · 14.2%",meta:"$2.1M TVL"}]}]},Qc={line:"Back agents you can prove. Own the upside.",primaryCta:{label:"Launch Demo",href:Ln.app},social:[{label:"Join Discord",href:Ln.discord},{label:"Join X",href:Ln.x}]},z_={legal:"© 2026 Morpheum. Capital funds proof.",labels:["validators","stakings","ZKProof"]};function Ro({variant:a="primary",children:e,className:i="",...r}){const o=`cta cta--${a} terminal-interactive ${i}`.trim();if("href"in r&&r.href!==void 0){const{href:c,...u}=r;return D.jsx("a",{className:o,href:c,...u,children:e})}return D.jsx("button",{className:o,type:"button",...r,children:e})}function Ty(){return D.jsx("section",{id:"join",className:"section community",children:D.jsxs("div",{className:"container community__inner",children:[D.jsx("h2",{className:"community__line",children:Qc.line}),D.jsxs("div",{className:"community__ctas",children:[D.jsx(Ro,{href:Qc.primaryCta.href,variant:"primary",children:Qc.primaryCta.label}),Qc.social.map(a=>D.jsx(Ro,{href:a.href,variant:"ghost",children:a.label},a.label))]})]})})}function Ay(){const[a,e]=Xe.useState(!1),i=!!Ln.tutorialVideo;return D.jsx("section",{id:"demo",className:"section demo",children:D.jsxs("div",{className:"container",children:[D.jsx("p",{className:"section-kicker",children:Ih.kicker}),D.jsxs("div",{className:"demo__video",children:[a&&i?D.jsx("video",{className:"demo__player",src:Ln.tutorialVideo,controls:!0,autoPlay:!0,playsInline:!0}):D.jsxs("button",{type:"button",className:"demo__poster",onClick:()=>i&&e(!0),"aria-label":i?"Play tutorial video":"Tutorial video coming soon",children:[D.jsx("span",{className:"demo__play","aria-hidden":!0,children:"▶"}),D.jsx("span",{className:"demo__poster-label",children:"Tutorial"})]}),D.jsx("p",{className:"demo__caption",children:Ih.videoCaption})]})]})})}const Ry={receipt:"Receipt",riskScore:"Risk",credential:"Credential",verified:"Verified"};function Zd({type:a,value:e}){return D.jsxs("span",{className:`proof-chip proof-chip--${a}`,children:[D.jsx("span",{className:"proof-chip__dot","aria-hidden":!0}),D.jsx("span",{className:"proof-chip__label",children:Ry[a]}),e?D.jsx("span",{className:"proof-chip__value",children:e}):null]})}function Cy(){const a=ro.cards[0],e=ro.cards[1],i=ro.cards[2],r=ro.cards[3];return D.jsx("section",{id:"explore",className:"section explore",children:D.jsxs("div",{className:"container",children:[D.jsx("p",{className:"section-kicker",children:ro.kicker}),D.jsx("h2",{className:"section-title explore__title",children:ro.title}),D.jsxs("div",{className:"explore__grid",children:[D.jsxs("article",{id:"explore-agents",className:"explore-card explore-card--major",children:[D.jsxs("header",{className:"explore-card__header",children:[D.jsx("h3",{className:"explore-card__title",children:a.title}),D.jsx("p",{className:"explore-card__verbs",children:a.verbs.join(" · ").toUpperCase()})]}),D.jsx("ul",{className:"explore-roster",children:a.agents.map(o=>D.jsxs("li",{className:"explore-roster__row",children:[D.jsxs("div",{className:"explore-roster__top",children:[D.jsx("span",{className:"explore-roster__name",children:o.name}),D.jsx("span",{className:`terminal-value ${o.positive?"terminal-long":"terminal-short"}`,children:o.roi})]}),D.jsxs("div",{className:"explore-roster__proof",children:[D.jsx(Zd,{type:"verified"}),D.jsx(Zd,{type:"riskScore",value:o.risk}),D.jsx(Zd,{type:"receipt"}),D.jsxs("span",{className:"terminal-value explore-roster__sharpe",children:["Sharpe ",o.sharpe]})]})]},o.name))})]}),D.jsxs("article",{className:"explore-card explore-card--major",children:[D.jsxs("header",{className:"explore-card__header",children:[D.jsx("h3",{className:"explore-card__title",children:e.title}),D.jsx("p",{className:"explore-card__verbs",children:e.verbs.join(" · ").toUpperCase()})]}),D.jsx("p",{className:"explore-card__blurb",children:e.blurb}),D.jsx("ul",{className:"explore-sample",children:e.sample.map(o=>D.jsxs("li",{children:[D.jsx("span",{className:"terminal-label",children:o.label}),D.jsx("span",{className:`terminal-value ${o.positive?"terminal-long":""}`,children:o.value})]},o.label))})]}),D.jsxs("article",{id:"explore-buckets",className:"explore-card explore-card--major",children:[D.jsxs("header",{className:"explore-card__header",children:[D.jsx("h3",{className:"explore-card__title",children:i.title}),D.jsx("p",{className:"explore-card__verbs",children:i.verbs.join(" · ").toUpperCase()})]}),D.jsx("p",{className:"explore-card__blurb",children:i.blurb}),D.jsx("ul",{className:"explore-sample",children:i.sample.map(o=>D.jsxs("li",{children:[D.jsx("span",{className:"terminal-label",children:o.label}),D.jsx("span",{className:"terminal-value explore-sample__status",children:o.value})]},o.label))})]}),D.jsxs("article",{id:"explore-vaults",className:"explore-card explore-card--major",children:[D.jsxs("header",{className:"explore-card__header",children:[D.jsx("h3",{className:"explore-card__title",children:r.title}),D.jsx("p",{className:"explore-card__verbs",children:r.verbs.join(" · ").toUpperCase()})]}),D.jsx("p",{className:"explore-card__blurb",children:r.blurb}),D.jsx("ul",{className:"explore-sample",children:r.sample.map(o=>D.jsxs("li",{children:[D.jsx("span",{className:"terminal-label",children:o.label}),D.jsxs("span",{className:"explore-sample__metrics",children:[D.jsx("span",{className:"terminal-value terminal-long",children:o.value}),D.jsx("span",{className:"terminal-value explore-sample__meta",children:o.meta})]})]},o.label))})]})]})]})})}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Dp="185",wy=0,H_=1,Dy=2,Mu=1,Ly=2,Cl=3,ns=0,pi=1,Sa=2,es=0,Eo=1,Fh=2,G_=3,V_=4,Ny=5,Sr=100,Uy=101,Oy=102,Py=103,Iy=104,Fy=200,By=201,zy=202,Hy=203,Bh=204,zh=205,Gy=206,Vy=207,ky=208,Xy=209,Wy=210,Yy=211,qy=212,jy=213,Zy=214,Hh=0,Gh=1,Vh=2,Co=3,kh=4,Xh=5,Wh=6,Yh=7,dx=0,Ky=1,Qy=2,Ea=0,hx=1,px=2,mx=3,gx=4,_x=5,vx=6,xx=7,Sx=300,br=301,wo=302,Kd=303,Qd=304,Bu=306,qh=1e3,ra=1001,jh=1002,qn=1003,Jy=1004,Jc=1005,hn=1006,Jd=1007,Hs=1008,Xi=1009,Mx=1010,yx=1011,Fl=1012,Lp=1013,Aa=1014,Ma=1015,is=1016,Np=1017,Up=1018,Bl=1020,Ex=35902,bx=35899,Tx=1021,Ax=1022,oa=1023,as=1026,Er=1027,Rx=1028,Op=1029,Tr=1030,Pp=1031,Ip=1033,yu=33776,Eu=33777,bu=33778,Tu=33779,Zh=35840,Kh=35841,Qh=35842,Jh=35843,$h=36196,ep=37492,tp=37496,np=37488,ip=37489,Cu=37490,ap=37491,sp=37808,rp=37809,op=37810,lp=37811,cp=37812,up=37813,fp=37814,dp=37815,hp=37816,pp=37817,mp=37818,gp=37819,_p=37820,vp=37821,xp=36492,Sp=36494,Mp=36495,yp=36283,Ep=36284,wu=36285,bp=36286,$y=3200,k_=0,eE=1,zs="",ei="srgb",Du="srgb-linear",Lu="linear",Wt="srgb",oo=7680,X_=519,tE=512,nE=513,iE=514,Fp=515,aE=516,sE=517,Bp=518,rE=519,W_=35044,Y_="300 es",ya=2e3,Nu=2001;function oE(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function Uu(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function lE(){const a=Uu("canvas");return a.style.display="block",a}const q_={};function j_(...a){const e="THREE."+a.shift();console.log(e,...a)}function Cx(a){const e=a[0];if(typeof e=="string"&&e.startsWith("TSL:")){const i=a[1];i&&i.isStackTrace?a[0]+=" "+i.getLocation():a[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return a}function ot(...a){a=Cx(a);const e="THREE."+a.shift();{const i=a[0];i&&i.isStackTrace?console.warn(i.getError(e)):console.warn(e,...a)}}function Lt(...a){a=Cx(a);const e="THREE."+a.shift();{const i=a[0];i&&i.isStackTrace?console.error(i.getError(e)):console.error(e,...a)}}function bo(...a){const e=a.join(" ");e in q_||(q_[e]=!0,ot(...a))}function cE(a,e,i){return new Promise(function(r,o){function c(){switch(a.clientWaitSync(e,a.SYNC_FLUSH_COMMANDS_BIT,0)){case a.WAIT_FAILED:o();break;case a.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:r()}}setTimeout(c,i)})}const uE={[Hh]:Gh,[Vh]:Wh,[kh]:Yh,[Co]:Xh,[Gh]:Hh,[Wh]:Vh,[Yh]:kh,[Xh]:Co};class Rr{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const c=o.indexOf(i);c!==-1&&o.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let c=0,u=o.length;c<u;c++)o[c].call(this,e);e.target=null}}}const Jn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Z_=1234567;const Ol=Math.PI/180,zl=180/Math.PI;function No(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Jn[a&255]+Jn[a>>8&255]+Jn[a>>16&255]+Jn[a>>24&255]+"-"+Jn[e&255]+Jn[e>>8&255]+"-"+Jn[e>>16&15|64]+Jn[e>>24&255]+"-"+Jn[i&63|128]+Jn[i>>8&255]+"-"+Jn[i>>16&255]+Jn[i>>24&255]+Jn[r&255]+Jn[r>>8&255]+Jn[r>>16&255]+Jn[r>>24&255]).toLowerCase()}function _t(a,e,i){return Math.max(e,Math.min(i,a))}function zp(a,e){return(a%e+e)%e}function fE(a,e,i,r,o){return r+(a-e)*(o-r)/(i-e)}function dE(a,e,i){return a!==e?(i-a)/(e-a):0}function Pl(a,e,i){return(1-i)*a+i*e}function hE(a,e,i,r){return Pl(a,e,1-Math.exp(-i*r))}function pE(a,e=1){return e-Math.abs(zp(a,e*2)-e)}function mE(a,e,i){return a<=e?0:a>=i?1:(a=(a-e)/(i-e),a*a*(3-2*a))}function gE(a,e,i){return a<=e?0:a>=i?1:(a=(a-e)/(i-e),a*a*a*(a*(a*6-15)+10))}function _E(a,e){return a+Math.floor(Math.random()*(e-a+1))}function vE(a,e){return a+Math.random()*(e-a)}function xE(a){return a*(.5-Math.random())}function SE(a){a!==void 0&&(Z_=a);let e=Z_+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function ME(a){return a*Ol}function yE(a){return a*zl}function EE(a){return(a&a-1)===0&&a!==0}function bE(a){return Math.pow(2,Math.ceil(Math.log(a)/Math.LN2))}function TE(a){return Math.pow(2,Math.floor(Math.log(a)/Math.LN2))}function AE(a,e,i,r,o){const c=Math.cos,u=Math.sin,d=c(i/2),m=u(i/2),h=c((e+r)/2),g=u((e+r)/2),v=c((e-r)/2),_=u((e-r)/2),M=c((r-e)/2),b=u((r-e)/2);switch(o){case"XYX":a.set(d*g,m*v,m*_,d*h);break;case"YZY":a.set(m*_,d*g,m*v,d*h);break;case"ZXZ":a.set(m*v,m*_,d*g,d*h);break;case"XZX":a.set(d*g,m*b,m*M,d*h);break;case"YXY":a.set(m*M,d*g,m*b,d*h);break;case"ZYZ":a.set(m*b,m*M,d*g,d*h);break;default:ot("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+o)}}function yo(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return a/4294967295;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int32Array:return Math.max(a/2147483647,-1);case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ii(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return Math.round(a*4294967295);case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int32Array:return Math.round(a*2147483647);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Yt={DEG2RAD:Ol,RAD2DEG:zl,generateUUID:No,clamp:_t,euclideanModulo:zp,mapLinear:fE,inverseLerp:dE,lerp:Pl,damp:hE,pingpong:pE,smoothstep:mE,smootherstep:gE,randInt:_E,randFloat:vE,randFloatSpread:xE,seededRandom:SE,degToRad:ME,radToDeg:yE,isPowerOfTwo:EE,ceilPowerOfTwo:bE,floorPowerOfTwo:TE,setQuaternionFromProperEuler:AE,normalize:ii,denormalize:yo},Zp=class Zp{constructor(e=0,i=0){this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,o=e.elements;return this.x=o[0]*i+o[3]*r+o[6],this.y=o[1]*i+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=_t(this.x,e.x,i.x),this.y=_t(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=_t(this.x,e,i),this.y=_t(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(_t(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(_t(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),o=Math.sin(i),c=this.x-e.x,u=this.y-e.y;return this.x=c*r-u*o+e.x,this.y=c*o+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Zp.prototype.isVector2=!0;let It=Zp;class Uo{constructor(e=0,i=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=o}static slerpFlat(e,i,r,o,c,u,d){let m=r[o+0],h=r[o+1],g=r[o+2],v=r[o+3],_=c[u+0],M=c[u+1],b=c[u+2],R=c[u+3];if(v!==R||m!==_||h!==M||g!==b){let y=m*_+h*M+g*b+v*R;y<0&&(_=-_,M=-M,b=-b,R=-R,y=-y);let x=1-d;if(y<.9995){const O=Math.acos(y),P=Math.sin(O);x=Math.sin(x*O)/P,d=Math.sin(d*O)/P,m=m*x+_*d,h=h*x+M*d,g=g*x+b*d,v=v*x+R*d}else{m=m*x+_*d,h=h*x+M*d,g=g*x+b*d,v=v*x+R*d;const O=1/Math.sqrt(m*m+h*h+g*g+v*v);m*=O,h*=O,g*=O,v*=O}}e[i]=m,e[i+1]=h,e[i+2]=g,e[i+3]=v}static multiplyQuaternionsFlat(e,i,r,o,c,u){const d=r[o],m=r[o+1],h=r[o+2],g=r[o+3],v=c[u],_=c[u+1],M=c[u+2],b=c[u+3];return e[i]=d*b+g*v+m*M-h*_,e[i+1]=m*b+g*_+h*v-d*M,e[i+2]=h*b+g*M+d*_-m*v,e[i+3]=g*b-d*v-m*_-h*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,o){return this._x=e,this._y=i,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,o=e._y,c=e._z,u=e._order,d=Math.cos,m=Math.sin,h=d(r/2),g=d(o/2),v=d(c/2),_=m(r/2),M=m(o/2),b=m(c/2);switch(u){case"XYZ":this._x=_*g*v+h*M*b,this._y=h*M*v-_*g*b,this._z=h*g*b+_*M*v,this._w=h*g*v-_*M*b;break;case"YXZ":this._x=_*g*v+h*M*b,this._y=h*M*v-_*g*b,this._z=h*g*b-_*M*v,this._w=h*g*v+_*M*b;break;case"ZXY":this._x=_*g*v-h*M*b,this._y=h*M*v+_*g*b,this._z=h*g*b+_*M*v,this._w=h*g*v-_*M*b;break;case"ZYX":this._x=_*g*v-h*M*b,this._y=h*M*v+_*g*b,this._z=h*g*b-_*M*v,this._w=h*g*v+_*M*b;break;case"YZX":this._x=_*g*v+h*M*b,this._y=h*M*v+_*g*b,this._z=h*g*b-_*M*v,this._w=h*g*v-_*M*b;break;case"XZY":this._x=_*g*v-h*M*b,this._y=h*M*v-_*g*b,this._z=h*g*b+_*M*v,this._w=h*g*v+_*M*b;break;default:ot("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],o=i[4],c=i[8],u=i[1],d=i[5],m=i[9],h=i[2],g=i[6],v=i[10],_=r+d+v;if(_>0){const M=.5/Math.sqrt(_+1);this._w=.25/M,this._x=(g-m)*M,this._y=(c-h)*M,this._z=(u-o)*M}else if(r>d&&r>v){const M=2*Math.sqrt(1+r-d-v);this._w=(g-m)/M,this._x=.25*M,this._y=(o+u)/M,this._z=(c+h)/M}else if(d>v){const M=2*Math.sqrt(1+d-r-v);this._w=(c-h)/M,this._x=(o+u)/M,this._y=.25*M,this._z=(m+g)/M}else{const M=2*Math.sqrt(1+v-r-d);this._w=(u-o)/M,this._x=(c+h)/M,this._y=(m+g)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(_t(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,i/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,o=e._y,c=e._z,u=e._w,d=i._x,m=i._y,h=i._z,g=i._w;return this._x=r*g+u*d+o*h-c*m,this._y=o*g+u*m+c*d-r*h,this._z=c*g+u*h+r*m-o*d,this._w=u*g-r*d-o*m-c*h,this._onChangeCallback(),this}slerp(e,i){let r=e._x,o=e._y,c=e._z,u=e._w,d=this.dot(e);d<0&&(r=-r,o=-o,c=-c,u=-u,d=-d);let m=1-i;if(d<.9995){const h=Math.acos(d),g=Math.sin(h);m=Math.sin(m*h)/g,i=Math.sin(i*h)/g,this._x=this._x*m+r*i,this._y=this._y*m+o*i,this._z=this._z*m+c*i,this._w=this._w*m+u*i,this._onChangeCallback()}else this._x=this._x*m+r*i,this._y=this._y*m+o*i,this._z=this._z*m+c*i,this._w=this._w*m+u*i,this.normalize();return this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Kp=class Kp{constructor(e=0,i=0,r=0){this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(K_.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(K_.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,o=this.z,c=e.elements;return this.x=c[0]*i+c[3]*r+c[6]*o,this.y=c[1]*i+c[4]*r+c[7]*o,this.z=c[2]*i+c[5]*r+c[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,o=this.z,c=e.elements,u=1/(c[3]*i+c[7]*r+c[11]*o+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*o+c[12])*u,this.y=(c[1]*i+c[5]*r+c[9]*o+c[13])*u,this.z=(c[2]*i+c[6]*r+c[10]*o+c[14])*u,this}applyQuaternion(e){const i=this.x,r=this.y,o=this.z,c=e.x,u=e.y,d=e.z,m=e.w,h=2*(u*o-d*r),g=2*(d*i-c*o),v=2*(c*r-u*i);return this.x=i+m*h+u*v-d*g,this.y=r+m*g+d*h-c*v,this.z=o+m*v+c*g-u*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,o=this.z,c=e.elements;return this.x=c[0]*i+c[4]*r+c[8]*o,this.y=c[1]*i+c[5]*r+c[9]*o,this.z=c[2]*i+c[6]*r+c[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=_t(this.x,e.x,i.x),this.y=_t(this.y,e.y,i.y),this.z=_t(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=_t(this.x,e,i),this.y=_t(this.y,e,i),this.z=_t(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(_t(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,o=e.y,c=e.z,u=i.x,d=i.y,m=i.z;return this.x=o*m-c*d,this.y=c*u-r*m,this.z=r*d-o*u,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return $d.copy(this).projectOnVector(e),this.sub($d)}reflect(e){return this.sub($d.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(_t(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return i*i+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const o=Math.sin(i)*e;return this.x=o*Math.sin(r),this.y=Math.cos(i)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=o,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Kp.prototype.isVector3=!0;let ie=Kp;const $d=new ie,K_=new Uo,Qp=class Qp{constructor(e,i,r,o,c,u,d,m,h){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,o,c,u,d,m,h)}set(e,i,r,o,c,u,d,m,h){const g=this.elements;return g[0]=e,g[1]=o,g[2]=d,g[3]=i,g[4]=c,g[5]=m,g[6]=r,g[7]=u,g[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,o=i.elements,c=this.elements,u=r[0],d=r[3],m=r[6],h=r[1],g=r[4],v=r[7],_=r[2],M=r[5],b=r[8],R=o[0],y=o[3],x=o[6],O=o[1],P=o[4],C=o[7],N=o[2],L=o[5],B=o[8];return c[0]=u*R+d*O+m*N,c[3]=u*y+d*P+m*L,c[6]=u*x+d*C+m*B,c[1]=h*R+g*O+v*N,c[4]=h*y+g*P+v*L,c[7]=h*x+g*C+v*B,c[2]=_*R+M*O+b*N,c[5]=_*y+M*P+b*L,c[8]=_*x+M*C+b*B,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],o=e[2],c=e[3],u=e[4],d=e[5],m=e[6],h=e[7],g=e[8];return i*u*g-i*d*h-r*c*g+r*d*m+o*c*h-o*u*m}invert(){const e=this.elements,i=e[0],r=e[1],o=e[2],c=e[3],u=e[4],d=e[5],m=e[6],h=e[7],g=e[8],v=g*u-d*h,_=d*m-g*c,M=h*c-u*m,b=i*v+r*_+o*M;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/b;return e[0]=v*R,e[1]=(o*h-g*r)*R,e[2]=(d*r-o*u)*R,e[3]=_*R,e[4]=(g*i-o*m)*R,e[5]=(o*c-d*i)*R,e[6]=M*R,e[7]=(r*m-h*i)*R,e[8]=(u*i-r*c)*R,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,o,c,u,d){const m=Math.cos(c),h=Math.sin(c);return this.set(r*m,r*h,-r*(m*u+h*d)+u+e,-o*h,o*m,-o*(-h*u+m*d)+d+i,0,0,1),this}scale(e,i){return bo("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(eh.makeScale(e,i)),this}rotate(e){return bo("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(eh.makeRotation(-e)),this}translate(e,i){return bo("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(eh.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let o=0;o<9;o++)if(i[o]!==r[o])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Qp.prototype.isMatrix3=!0;let ft=Qp;const eh=new ft,Q_=new ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),J_=new ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function RE(){const a={enabled:!0,workingColorSpace:Du,spaces:{},convert:function(o,c,u){return this.enabled===!1||c===u||!c||!u||(this.spaces[c].transfer===Wt&&(o.r=ts(o.r),o.g=ts(o.g),o.b=ts(o.b)),this.spaces[c].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[c].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Wt&&(o.r=To(o.r),o.g=To(o.g),o.b=To(o.b))),o},workingToColorSpace:function(o,c){return this.convert(o,this.workingColorSpace,c)},colorSpaceToWorking:function(o,c){return this.convert(o,c,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===zs?Lu:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,c=this.workingColorSpace){return o.fromArray(this.spaces[c].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,c,u){return o.copy(this.spaces[c].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,c){return bo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),a.workingToColorSpace(o,c)},toWorkingColorSpace:function(o,c){return bo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),a.colorSpaceToWorking(o,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return a.define({[Du]:{primaries:e,whitePoint:r,transfer:Lu,toXYZ:Q_,fromXYZ:J_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:ei},outputColorSpaceConfig:{drawingBufferColorSpace:ei}},[ei]:{primaries:e,whitePoint:r,transfer:Wt,toXYZ:Q_,fromXYZ:J_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:ei}}}),a}const Ct=RE();function ts(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function To(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}let lo;class CE{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{lo===void 0&&(lo=Uu("canvas")),lo.width=e.width,lo.height=e.height;const o=lo.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=lo}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Uu("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),c=o.data;for(let u=0;u<c.length;u++)c[u]=ts(c[u]/255)*255;return r.putImageData(o,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(ts(i[r]/255)*255):i[r]=ts(i[r]);return{data:i,width:e.width,height:e.height}}else return ot("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let wE=0;class Hp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:wE++}),this.uuid=No(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayWidth,i.displayHeight,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let c;if(Array.isArray(o)){c=[];for(let u=0,d=o.length;u<d;u++)o[u].isDataTexture?c.push(th(o[u].image)):c.push(th(o[u]))}else c=th(o);r.url=c}return i||(e.images[this.uuid]=r),r}}function th(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?CE.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(ot("Texture: Unable to serialize Texture."),{})}let DE=0;const nh=new ie;class jn extends Rr{constructor(e=jn.DEFAULT_IMAGE,i=jn.DEFAULT_MAPPING,r=ra,o=ra,c=hn,u=Hs,d=oa,m=Xi,h=jn.DEFAULT_ANISOTROPY,g=zs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:DE++}),this.uuid=No(),this.name="",this.source=new Hp(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=c,this.minFilter=u,this.anisotropy=h,this.format=d,this.internalFormat=null,this.type=m,this.offset=new It(0,0),this.repeat=new It(1,1),this.center=new It(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(nh).x}get height(){return this.source.getSize(nh).y}get depth(){return this.source.getSize(nh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const r=e[i];if(r===void 0){ot(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const o=this[i];if(o===void 0){ot(`Texture.setValues(): property '${i}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Sx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case qh:e.x=e.x-Math.floor(e.x);break;case ra:e.x=e.x<0?0:1;break;case jh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case qh:e.y=e.y-Math.floor(e.y);break;case ra:e.y=e.y<0?0:1;break;case jh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}jn.DEFAULT_IMAGE=null;jn.DEFAULT_MAPPING=Sx;jn.DEFAULT_ANISOTROPY=1;const Jp=class Jp{constructor(e=0,i=0,r=0,o=1){this.x=e,this.y=i,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,o){return this.x=e,this.y=i,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,o=this.z,c=this.w,u=e.elements;return this.x=u[0]*i+u[4]*r+u[8]*o+u[12]*c,this.y=u[1]*i+u[5]*r+u[9]*o+u[13]*c,this.z=u[2]*i+u[6]*r+u[10]*o+u[14]*c,this.w=u[3]*i+u[7]*r+u[11]*o+u[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,o,c;const m=e.elements,h=m[0],g=m[4],v=m[8],_=m[1],M=m[5],b=m[9],R=m[2],y=m[6],x=m[10];if(Math.abs(g-_)<.01&&Math.abs(v-R)<.01&&Math.abs(b-y)<.01){if(Math.abs(g+_)<.1&&Math.abs(v+R)<.1&&Math.abs(b+y)<.1&&Math.abs(h+M+x-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const P=(h+1)/2,C=(M+1)/2,N=(x+1)/2,L=(g+_)/4,B=(v+R)/4,A=(b+y)/4;return P>C&&P>N?P<.01?(r=0,o=.707106781,c=.707106781):(r=Math.sqrt(P),o=L/r,c=B/r):C>N?C<.01?(r=.707106781,o=0,c=.707106781):(o=Math.sqrt(C),r=L/o,c=A/o):N<.01?(r=.707106781,o=.707106781,c=0):(c=Math.sqrt(N),r=B/c,o=A/c),this.set(r,o,c,i),this}let O=Math.sqrt((y-b)*(y-b)+(v-R)*(v-R)+(_-g)*(_-g));return Math.abs(O)<.001&&(O=1),this.x=(y-b)/O,this.y=(v-R)/O,this.z=(_-g)/O,this.w=Math.acos((h+M+x-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=_t(this.x,e.x,i.x),this.y=_t(this.y,e.y,i.y),this.z=_t(this.z,e.z,i.z),this.w=_t(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=_t(this.x,e,i),this.y=_t(this.y,e,i),this.z=_t(this.z,e,i),this.w=_t(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(_t(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Jp.prototype.isVector4=!0;let Mn=Jp;class LE extends Rr{constructor(e=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:hn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},r),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=r.depth,this.scissor=new Mn(0,0,e,i),this.scissorTest=!1,this.viewport=new Mn(0,0,e,i),this.textures=[];const o={width:e,height:i,depth:r.depth},c=new jn(o),u=r.count;for(let d=0;d<u;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview,this.useArrayDepthTexture=r.useArrayDepthTexture}_setTextureOptions(e={}){const i={minFilter:hn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let o=0,c=this.textures.length;o<c;o++)this.textures[o].image.width=e,this.textures[o].image.height=i,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const o=Object.assign({},e.textures[i].image);this.textures[i].source=new Hp(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ba extends LE{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class wx extends jn{constructor(e=null,i=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:o},this.magFilter=qn,this.minFilter=qn,this.wrapR=ra,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class NE extends jn{constructor(e=null,i=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:o},this.magFilter=qn,this.minFilter=qn,this.wrapR=ra,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Fu=class Fu{constructor(e,i,r,o,c,u,d,m,h,g,v,_,M,b,R,y){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,o,c,u,d,m,h,g,v,_,M,b,R,y)}set(e,i,r,o,c,u,d,m,h,g,v,_,M,b,R,y){const x=this.elements;return x[0]=e,x[4]=i,x[8]=r,x[12]=o,x[1]=c,x[5]=u,x[9]=d,x[13]=m,x[2]=h,x[6]=g,x[10]=v,x[14]=_,x[3]=M,x[7]=b,x[11]=R,x[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Fu().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return this.determinantAffine()===0?(e.set(1,0,0),i.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const i=this.elements,r=e.elements,o=1/co.setFromMatrixColumn(e,0).length(),c=1/co.setFromMatrixColumn(e,1).length(),u=1/co.setFromMatrixColumn(e,2).length();return i[0]=r[0]*o,i[1]=r[1]*o,i[2]=r[2]*o,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*u,i[9]=r[9]*u,i[10]=r[10]*u,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,o=e.y,c=e.z,u=Math.cos(r),d=Math.sin(r),m=Math.cos(o),h=Math.sin(o),g=Math.cos(c),v=Math.sin(c);if(e.order==="XYZ"){const _=u*g,M=u*v,b=d*g,R=d*v;i[0]=m*g,i[4]=-m*v,i[8]=h,i[1]=M+b*h,i[5]=_-R*h,i[9]=-d*m,i[2]=R-_*h,i[6]=b+M*h,i[10]=u*m}else if(e.order==="YXZ"){const _=m*g,M=m*v,b=h*g,R=h*v;i[0]=_+R*d,i[4]=b*d-M,i[8]=u*h,i[1]=u*v,i[5]=u*g,i[9]=-d,i[2]=M*d-b,i[6]=R+_*d,i[10]=u*m}else if(e.order==="ZXY"){const _=m*g,M=m*v,b=h*g,R=h*v;i[0]=_-R*d,i[4]=-u*v,i[8]=b+M*d,i[1]=M+b*d,i[5]=u*g,i[9]=R-_*d,i[2]=-u*h,i[6]=d,i[10]=u*m}else if(e.order==="ZYX"){const _=u*g,M=u*v,b=d*g,R=d*v;i[0]=m*g,i[4]=b*h-M,i[8]=_*h+R,i[1]=m*v,i[5]=R*h+_,i[9]=M*h-b,i[2]=-h,i[6]=d*m,i[10]=u*m}else if(e.order==="YZX"){const _=u*m,M=u*h,b=d*m,R=d*h;i[0]=m*g,i[4]=R-_*v,i[8]=b*v+M,i[1]=v,i[5]=u*g,i[9]=-d*g,i[2]=-h*g,i[6]=M*v+b,i[10]=_-R*v}else if(e.order==="XZY"){const _=u*m,M=u*h,b=d*m,R=d*h;i[0]=m*g,i[4]=-v,i[8]=h*g,i[1]=_*v+R,i[5]=u*g,i[9]=M*v-b,i[2]=b*v-M,i[6]=d*g,i[10]=R*v+_}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(UE,e,OE)}lookAt(e,i,r){const o=this.elements;return Ti.subVectors(e,i),Ti.lengthSq()===0&&(Ti.z=1),Ti.normalize(),Us.crossVectors(r,Ti),Us.lengthSq()===0&&(Math.abs(r.z)===1?Ti.x+=1e-4:Ti.z+=1e-4,Ti.normalize(),Us.crossVectors(r,Ti)),Us.normalize(),$c.crossVectors(Ti,Us),o[0]=Us.x,o[4]=$c.x,o[8]=Ti.x,o[1]=Us.y,o[5]=$c.y,o[9]=Ti.y,o[2]=Us.z,o[6]=$c.z,o[10]=Ti.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,o=i.elements,c=this.elements,u=r[0],d=r[4],m=r[8],h=r[12],g=r[1],v=r[5],_=r[9],M=r[13],b=r[2],R=r[6],y=r[10],x=r[14],O=r[3],P=r[7],C=r[11],N=r[15],L=o[0],B=o[4],A=o[8],U=o[12],X=o[1],k=o[5],Z=o[9],me=o[13],ue=o[2],q=o[6],z=o[10],H=o[14],$=o[3],he=o[7],Se=o[11],I=o[15];return c[0]=u*L+d*X+m*ue+h*$,c[4]=u*B+d*k+m*q+h*he,c[8]=u*A+d*Z+m*z+h*Se,c[12]=u*U+d*me+m*H+h*I,c[1]=g*L+v*X+_*ue+M*$,c[5]=g*B+v*k+_*q+M*he,c[9]=g*A+v*Z+_*z+M*Se,c[13]=g*U+v*me+_*H+M*I,c[2]=b*L+R*X+y*ue+x*$,c[6]=b*B+R*k+y*q+x*he,c[10]=b*A+R*Z+y*z+x*Se,c[14]=b*U+R*me+y*H+x*I,c[3]=O*L+P*X+C*ue+N*$,c[7]=O*B+P*k+C*q+N*he,c[11]=O*A+P*Z+C*z+N*Se,c[15]=O*U+P*me+C*H+N*I,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],o=e[8],c=e[12],u=e[1],d=e[5],m=e[9],h=e[13],g=e[2],v=e[6],_=e[10],M=e[14],b=e[3],R=e[7],y=e[11],x=e[15],O=m*M-h*_,P=d*M-h*v,C=d*_-m*v,N=u*M-h*g,L=u*_-m*g,B=u*v-d*g;return i*(R*O-y*P+x*C)-r*(b*O-y*N+x*L)+o*(b*P-R*N+x*B)-c*(b*C-R*L+y*B)}determinantAffine(){const e=this.elements,i=e[0],r=e[4],o=e[8],c=e[1],u=e[5],d=e[9],m=e[2],h=e[6],g=e[10];return i*(u*g-d*h)-r*(c*g-d*m)+o*(c*h-u*m)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=i,o[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],o=e[2],c=e[3],u=e[4],d=e[5],m=e[6],h=e[7],g=e[8],v=e[9],_=e[10],M=e[11],b=e[12],R=e[13],y=e[14],x=e[15],O=i*d-r*u,P=i*m-o*u,C=i*h-c*u,N=r*m-o*d,L=r*h-c*d,B=o*h-c*m,A=g*R-v*b,U=g*y-_*b,X=g*x-M*b,k=v*y-_*R,Z=v*x-M*R,me=_*x-M*y,ue=O*me-P*Z+C*k+N*X-L*U+B*A;if(ue===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const q=1/ue;return e[0]=(d*me-m*Z+h*k)*q,e[1]=(o*Z-r*me-c*k)*q,e[2]=(R*B-y*L+x*N)*q,e[3]=(_*L-v*B-M*N)*q,e[4]=(m*X-u*me-h*U)*q,e[5]=(i*me-o*X+c*U)*q,e[6]=(y*C-b*B-x*P)*q,e[7]=(g*B-_*C+M*P)*q,e[8]=(u*Z-d*X+h*A)*q,e[9]=(r*X-i*Z-c*A)*q,e[10]=(b*L-R*C+x*O)*q,e[11]=(v*C-g*L-M*O)*q,e[12]=(d*U-u*k-m*A)*q,e[13]=(i*k-r*U+o*A)*q,e[14]=(R*P-b*N-y*O)*q,e[15]=(g*N-v*P+_*O)*q,this}scale(e){const i=this.elements,r=e.x,o=e.y,c=e.z;return i[0]*=r,i[4]*=o,i[8]*=c,i[1]*=r,i[5]*=o,i[9]*=c,i[2]*=r,i[6]*=o,i[10]*=c,i[3]*=r,i[7]*=o,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,o))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),o=Math.sin(i),c=1-r,u=e.x,d=e.y,m=e.z,h=c*u,g=c*d;return this.set(h*u+r,h*d-o*m,h*m+o*d,0,h*d+o*m,g*d+r,g*m-o*u,0,h*m-o*d,g*m+o*u,c*m*m+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,o,c,u){return this.set(1,r,c,0,e,1,u,0,i,o,1,0,0,0,0,1),this}compose(e,i,r){const o=this.elements,c=i._x,u=i._y,d=i._z,m=i._w,h=c+c,g=u+u,v=d+d,_=c*h,M=c*g,b=c*v,R=u*g,y=u*v,x=d*v,O=m*h,P=m*g,C=m*v,N=r.x,L=r.y,B=r.z;return o[0]=(1-(R+x))*N,o[1]=(M+C)*N,o[2]=(b-P)*N,o[3]=0,o[4]=(M-C)*L,o[5]=(1-(_+x))*L,o[6]=(y+O)*L,o[7]=0,o[8]=(b+P)*B,o[9]=(y-O)*B,o[10]=(1-(_+R))*B,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,i,r){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const c=this.determinantAffine();if(c===0)return r.set(1,1,1),i.identity(),this;let u=co.set(o[0],o[1],o[2]).length();const d=co.set(o[4],o[5],o[6]).length(),m=co.set(o[8],o[9],o[10]).length();c<0&&(u=-u),na.copy(this);const h=1/u,g=1/d,v=1/m;return na.elements[0]*=h,na.elements[1]*=h,na.elements[2]*=h,na.elements[4]*=g,na.elements[5]*=g,na.elements[6]*=g,na.elements[8]*=v,na.elements[9]*=v,na.elements[10]*=v,i.setFromRotationMatrix(na),r.x=u,r.y=d,r.z=m,this}makePerspective(e,i,r,o,c,u,d=ya,m=!1){const h=this.elements,g=2*c/(i-e),v=2*c/(r-o),_=(i+e)/(i-e),M=(r+o)/(r-o);let b,R;if(m)b=c/(u-c),R=u*c/(u-c);else if(d===ya)b=-(u+c)/(u-c),R=-2*u*c/(u-c);else if(d===Nu)b=-u/(u-c),R=-u*c/(u-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return h[0]=g,h[4]=0,h[8]=_,h[12]=0,h[1]=0,h[5]=v,h[9]=M,h[13]=0,h[2]=0,h[6]=0,h[10]=b,h[14]=R,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,i,r,o,c,u,d=ya,m=!1){const h=this.elements,g=2/(i-e),v=2/(r-o),_=-(i+e)/(i-e),M=-(r+o)/(r-o);let b,R;if(m)b=1/(u-c),R=u/(u-c);else if(d===ya)b=-2/(u-c),R=-(u+c)/(u-c);else if(d===Nu)b=-1/(u-c),R=-c/(u-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return h[0]=g,h[4]=0,h[8]=0,h[12]=_,h[1]=0,h[5]=v,h[9]=0,h[13]=M,h[2]=0,h[6]=0,h[10]=b,h[14]=R,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let o=0;o<16;o++)if(i[o]!==r[o])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}};Fu.prototype.isMatrix4=!0;let bn=Fu;const co=new ie,na=new bn,UE=new ie(0,0,0),OE=new ie(1,1,1),Us=new ie,$c=new ie,Ti=new ie,$_=new bn,ev=new Uo;class Ar{constructor(e=0,i=0,r=0,o=Ar.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,o=this._order){return this._x=e,this._y=i,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const o=e.elements,c=o[0],u=o[4],d=o[8],m=o[1],h=o[5],g=o[9],v=o[2],_=o[6],M=o[10];switch(i){case"XYZ":this._y=Math.asin(_t(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,M),this._z=Math.atan2(-u,c)):(this._x=Math.atan2(_,h),this._z=0);break;case"YXZ":this._x=Math.asin(-_t(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(m,h)):(this._y=Math.atan2(-v,c),this._z=0);break;case"ZXY":this._x=Math.asin(_t(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-v,M),this._z=Math.atan2(-u,h)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-_t(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(_,M),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-u,h));break;case"YZX":this._z=Math.asin(_t(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,h),this._y=Math.atan2(-v,c)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-_t(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(_,h),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-g,M),this._y=0);break;default:ot("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return $_.makeRotationFromQuaternion(e),this.setFromRotationMatrix($_,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return ev.setFromEuler(this),this.setFromQuaternion(ev,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ar.DEFAULT_ORDER="XYZ";class Dx{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let PE=0;const tv=new ie,uo=new Uo,qa=new bn,eu=new ie,yl=new ie,IE=new ie,FE=new Uo,nv=new ie(1,0,0),iv=new ie(0,1,0),av=new ie(0,0,1),sv={type:"added"},BE={type:"removed"},fo={type:"childadded",child:null},ih={type:"childremoved",child:null};class Ci extends Rr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:PE++}),this.uuid=No(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ci.DEFAULT_UP.clone();const e=new ie,i=new Ar,r=new Uo,o=new ie(1,1,1);function c(){r.setFromEuler(i,!1)}function u(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new bn},normalMatrix:{value:new ft}}),this.matrix=new bn,this.matrixWorld=new bn,this.matrixAutoUpdate=Ci.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ci.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Dx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return uo.setFromAxisAngle(e,i),this.quaternion.multiply(uo),this}rotateOnWorldAxis(e,i){return uo.setFromAxisAngle(e,i),this.quaternion.premultiply(uo),this}rotateX(e){return this.rotateOnAxis(nv,e)}rotateY(e){return this.rotateOnAxis(iv,e)}rotateZ(e){return this.rotateOnAxis(av,e)}translateOnAxis(e,i){return tv.copy(e).applyQuaternion(this.quaternion),this.position.add(tv.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(nv,e)}translateY(e){return this.translateOnAxis(iv,e)}translateZ(e){return this.translateOnAxis(av,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(qa.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?eu.copy(e):eu.set(e,i,r);const o=this.parent;this.updateWorldMatrix(!0,!1),yl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?qa.lookAt(yl,eu,this.up):qa.lookAt(eu,yl,this.up),this.quaternion.setFromRotationMatrix(qa),o&&(qa.extractRotation(o.matrixWorld),uo.setFromRotationMatrix(qa),this.quaternion.premultiply(uo.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(Lt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(sv),fo.child=e,this.dispatchEvent(fo),fo.child=null):Lt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(BE),ih.child=e,this.dispatchEvent(ih),ih.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),qa.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),qa.multiply(e.parent.matrixWorld)),e.applyMatrix4(qa),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(sv),fo.child=e,this.dispatchEvent(fo),fo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,o=this.children.length;r<o;r++){const u=this.children[r].getObjectByProperty(e,i);if(u!==void 0)return u}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const o=this.children;for(let c=0,u=o.length;c<u;c++)o[c].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yl,e,IE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yl,FE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const i=e.x,r=e.y,o=e.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*r-c[8]*o,c[13]+=r-c[1]*i-c[5]*r-c[9]*o,c[14]+=o-c[2]*i-c[6]*r-c[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i,r=!1){const o=this.parent;if(e===!0&&o!==null&&o.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),i===!0){const c=this.children;for(let u=0,d=c.length;u<d;u++)c[u].updateWorldMatrix(!1,!0,r)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),this.static!==!1&&(o.static=this.static),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(d=>({...d})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function c(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=c(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let h=0,g=m.length;h<g;h++){const v=m[h];c(e.shapes,v)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,h=this.material.length;m<h;m++)d.push(c(e.materials,this.material[m]));o.material=d}else o.material=c(e.materials,this.material);if(this.children.length>0){o.children=[];for(let d=0;d<this.children.length;d++)o.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];o.animations.push(c(e.animations,m))}}if(i){const d=u(e.geometries),m=u(e.materials),h=u(e.textures),g=u(e.images),v=u(e.shapes),_=u(e.skeletons),M=u(e.animations),b=u(e.nodes);d.length>0&&(r.geometries=d),m.length>0&&(r.materials=m),h.length>0&&(r.textures=h),g.length>0&&(r.images=g),v.length>0&&(r.shapes=v),_.length>0&&(r.skeletons=_),M.length>0&&(r.animations=M),b.length>0&&(r.nodes=b)}return r.object=o,r;function u(d){const m=[];for(const h in d){const g=d[h];delete g.metadata,m.push(g)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}Ci.DEFAULT_UP=new ie(0,1,0);Ci.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ci.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class wl extends Ci{constructor(){super(),this.isGroup=!0,this.type="Group"}}const zE={type:"move"};class ah{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new wl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new wl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ie,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ie),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new wl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ie,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ie,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let o=null,c=null,u=null;const d=this._targetRay,m=this._grip,h=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(h&&e.hand){u=!0;for(const R of e.hand.values()){const y=i.getJointPose(R,r),x=this._getHandJoint(h,R);y!==null&&(x.matrix.fromArray(y.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=y.radius),x.visible=y!==null}const g=h.joints["index-finger-tip"],v=h.joints["thumb-tip"],_=g.position.distanceTo(v.position),M=.02,b=.005;h.inputState.pinching&&_>M+b?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&_<=M-b&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,r),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1,m.eventsEnabled&&m.dispatchEvent({type:"gripUpdated",data:e,target:this})));d!==null&&(o=i.getPose(e.targetRaySpace,r),o===null&&c!==null&&(o=c),o!==null&&(d.matrix.fromArray(o.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,o.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(o.linearVelocity)):d.hasLinearVelocity=!1,o.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(o.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(zE)))}return d!==null&&(d.visible=o!==null),m!==null&&(m.visible=c!==null),h!==null&&(h.visible=u!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new wl;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}const Lx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Os={h:0,s:0,l:0},tu={h:0,s:0,l:0};function sh(a,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?a+(e-a)*6*i:i<1/2?e:i<2/3?a+(e-a)*6*(2/3-i):a}class Gt{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=ei){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ct.colorSpaceToWorking(this,i),this}setRGB(e,i,r,o=Ct.workingColorSpace){return this.r=e,this.g=i,this.b=r,Ct.colorSpaceToWorking(this,o),this}setHSL(e,i,r,o=Ct.workingColorSpace){if(e=zp(e,1),i=_t(i,0,1),r=_t(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,u=2*r-c;this.r=sh(u,c,e+1/3),this.g=sh(u,c,e),this.b=sh(u,c,e-1/3)}return Ct.colorSpaceToWorking(this,o),this}setStyle(e,i=ei){function r(c){c!==void 0&&parseFloat(c)<1&&ot("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const u=o[1],d=o[2];switch(u){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:ot("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=o[1],u=c.length;if(u===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(u===6)return this.setHex(parseInt(c,16),i);ot("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=ei){const r=Lx[e.toLowerCase()];return r!==void 0?this.setHex(r,i):ot("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ts(e.r),this.g=ts(e.g),this.b=ts(e.b),this}copyLinearToSRGB(e){return this.r=To(e.r),this.g=To(e.g),this.b=To(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ei){return Ct.workingToColorSpace($n.copy(this),e),Math.round(_t($n.r*255,0,255))*65536+Math.round(_t($n.g*255,0,255))*256+Math.round(_t($n.b*255,0,255))}getHexString(e=ei){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Ct.workingColorSpace){Ct.workingToColorSpace($n.copy(this),i);const r=$n.r,o=$n.g,c=$n.b,u=Math.max(r,o,c),d=Math.min(r,o,c);let m,h;const g=(d+u)/2;if(d===u)m=0,h=0;else{const v=u-d;switch(h=g<=.5?v/(u+d):v/(2-u-d),u){case r:m=(o-c)/v+(o<c?6:0);break;case o:m=(c-r)/v+2;break;case c:m=(r-o)/v+4;break}m/=6}return e.h=m,e.s=h,e.l=g,e}getRGB(e,i=Ct.workingColorSpace){return Ct.workingToColorSpace($n.copy(this),i),e.r=$n.r,e.g=$n.g,e.b=$n.b,e}getStyle(e=ei){Ct.workingToColorSpace($n.copy(this),e);const i=$n.r,r=$n.g,o=$n.b;return e!==ei?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,i,r){return this.getHSL(Os),this.setHSL(Os.h+e,Os.s+i,Os.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(Os),e.getHSL(tu);const r=Pl(Os.h,tu.h,i),o=Pl(Os.s,tu.s,i),c=Pl(Os.l,tu.l,i);return this.setHSL(r,o,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,o=this.b,c=e.elements;return this.r=c[0]*i+c[3]*r+c[6]*o,this.g=c[1]*i+c[4]*r+c[7]*o,this.b=c[2]*i+c[5]*r+c[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const $n=new Gt;Gt.NAMES=Lx;class HE extends Ci{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ar,this.environmentIntensity=1,this.environmentRotation=new Ar,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const ia=new ie,ja=new ie,rh=new ie,Za=new ie,ho=new ie,po=new ie,rv=new ie,oh=new ie,lh=new ie,ch=new ie,uh=new Mn,fh=new Mn,dh=new Mn;class sa{constructor(e=new ie,i=new ie,r=new ie){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,o){o.subVectors(r,i),ia.subVectors(e,i),o.cross(ia);const c=o.lengthSq();return c>0?o.multiplyScalar(1/Math.sqrt(c)):o.set(0,0,0)}static getBarycoord(e,i,r,o,c){ia.subVectors(o,i),ja.subVectors(r,i),rh.subVectors(e,i);const u=ia.dot(ia),d=ia.dot(ja),m=ia.dot(rh),h=ja.dot(ja),g=ja.dot(rh),v=u*h-d*d;if(v===0)return c.set(0,0,0),null;const _=1/v,M=(h*m-d*g)*_,b=(u*g-d*m)*_;return c.set(1-M-b,b,M)}static containsPoint(e,i,r,o){return this.getBarycoord(e,i,r,o,Za)===null?!1:Za.x>=0&&Za.y>=0&&Za.x+Za.y<=1}static getInterpolation(e,i,r,o,c,u,d,m){return this.getBarycoord(e,i,r,o,Za)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,Za.x),m.addScaledVector(u,Za.y),m.addScaledVector(d,Za.z),m)}static getInterpolatedAttribute(e,i,r,o,c,u){return uh.setScalar(0),fh.setScalar(0),dh.setScalar(0),uh.fromBufferAttribute(e,i),fh.fromBufferAttribute(e,r),dh.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(uh,c.x),u.addScaledVector(fh,c.y),u.addScaledVector(dh,c.z),u}static isFrontFacing(e,i,r,o){return ia.subVectors(r,i),ja.subVectors(e,i),ia.cross(ja).dot(o)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,o){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,i,r,o){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ia.subVectors(this.c,this.b),ja.subVectors(this.a,this.b),ia.cross(ja).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return sa.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return sa.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,o,c){return sa.getInterpolation(e,this.a,this.b,this.c,i,r,o,c)}containsPoint(e){return sa.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return sa.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,o=this.b,c=this.c;let u,d;ho.subVectors(o,r),po.subVectors(c,r),oh.subVectors(e,r);const m=ho.dot(oh),h=po.dot(oh);if(m<=0&&h<=0)return i.copy(r);lh.subVectors(e,o);const g=ho.dot(lh),v=po.dot(lh);if(g>=0&&v<=g)return i.copy(o);const _=m*v-g*h;if(_<=0&&m>=0&&g<=0)return u=m/(m-g),i.copy(r).addScaledVector(ho,u);ch.subVectors(e,c);const M=ho.dot(ch),b=po.dot(ch);if(b>=0&&M<=b)return i.copy(c);const R=M*h-m*b;if(R<=0&&h>=0&&b<=0)return d=h/(h-b),i.copy(r).addScaledVector(po,d);const y=g*b-M*v;if(y<=0&&v-g>=0&&M-b>=0)return rv.subVectors(c,o),d=(v-g)/(v-g+(M-b)),i.copy(o).addScaledVector(rv,d);const x=1/(y+R+_);return u=R*x,d=_*x,i.copy(r).addScaledVector(ho,u).addScaledVector(po,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Vl{constructor(e=new ie(1/0,1/0,1/0),i=new ie(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(aa.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(aa.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=aa.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let u=0,d=c.count;u<d;u++)e.isMesh===!0?e.getVertexPosition(u,aa):aa.fromBufferAttribute(c,u),aa.applyMatrix4(e.matrixWorld),this.expandByPoint(aa);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),nu.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),nu.copy(r.boundingBox)),nu.applyMatrix4(e.matrixWorld),this.union(nu)}const o=e.children;for(let c=0,u=o.length;c<u;c++)this.expandByObject(o[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,aa),aa.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(El),iu.subVectors(this.max,El),mo.subVectors(e.a,El),go.subVectors(e.b,El),_o.subVectors(e.c,El),Ps.subVectors(go,mo),Is.subVectors(_o,go),hr.subVectors(mo,_o);let i=[0,-Ps.z,Ps.y,0,-Is.z,Is.y,0,-hr.z,hr.y,Ps.z,0,-Ps.x,Is.z,0,-Is.x,hr.z,0,-hr.x,-Ps.y,Ps.x,0,-Is.y,Is.x,0,-hr.y,hr.x,0];return!hh(i,mo,go,_o,iu)||(i=[1,0,0,0,1,0,0,0,1],!hh(i,mo,go,_o,iu))?!1:(au.crossVectors(Ps,Is),i=[au.x,au.y,au.z],hh(i,mo,go,_o,iu))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,aa).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(aa).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ka[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ka[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ka[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ka[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ka[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ka[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ka[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ka[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ka),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ka=[new ie,new ie,new ie,new ie,new ie,new ie,new ie,new ie],aa=new ie,nu=new Vl,mo=new ie,go=new ie,_o=new ie,Ps=new ie,Is=new ie,hr=new ie,El=new ie,iu=new ie,au=new ie,pr=new ie;function hh(a,e,i,r,o){for(let c=0,u=a.length-3;c<=u;c+=3){pr.fromArray(a,c);const d=o.x*Math.abs(pr.x)+o.y*Math.abs(pr.y)+o.z*Math.abs(pr.z),m=e.dot(pr),h=i.dot(pr),g=r.dot(pr);if(Math.max(-Math.max(m,h,g),Math.min(m,h,g))>d)return!1}return!0}const Dn=new ie,su=new It;let GE=0;class Ta extends Rr{constructor(e,i,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:GE++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=W_,this.updateRanges=[],this.gpuType=Ma,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let o=0,c=this.itemSize;o<c;o++)this.array[e+o]=i.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)su.fromBufferAttribute(this,i),su.applyMatrix3(e),this.setXY(i,su.x,su.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)Dn.fromBufferAttribute(this,i),Dn.applyMatrix3(e),this.setXYZ(i,Dn.x,Dn.y,Dn.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)Dn.fromBufferAttribute(this,i),Dn.applyMatrix4(e),this.setXYZ(i,Dn.x,Dn.y,Dn.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)Dn.fromBufferAttribute(this,i),Dn.applyNormalMatrix(e),this.setXYZ(i,Dn.x,Dn.y,Dn.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)Dn.fromBufferAttribute(this,i),Dn.transformDirection(e),this.setXYZ(i,Dn.x,Dn.y,Dn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=yo(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=ii(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=yo(i,this.array)),i}setX(e,i){return this.normalized&&(i=ii(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=yo(i,this.array)),i}setY(e,i){return this.normalized&&(i=ii(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=yo(i,this.array)),i}setZ(e,i){return this.normalized&&(i=ii(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=yo(i,this.array)),i}setW(e,i){return this.normalized&&(i=ii(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=ii(i,this.array),r=ii(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,o){return e*=this.itemSize,this.normalized&&(i=ii(i,this.array),r=ii(r,this.array),o=ii(o,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,i,r,o,c){return e*=this.itemSize,this.normalized&&(i=ii(i,this.array),r=ii(r,this.array),o=ii(o,this.array),c=ii(c,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==W_&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class Nx extends Ta{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class Ux extends Ta{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class Wi extends Ta{constructor(e,i,r){super(new Float32Array(e),i,r)}}const VE=new Vl,bl=new ie,ph=new ie;class Gp{constructor(e=new ie,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):VE.setFromPoints(e).getCenter(r);let o=0;for(let c=0,u=e.length;c<u;c++)o=Math.max(o,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;bl.subVectors(e,this.center);const i=bl.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),o=(r-this.radius)*.5;this.center.addScaledVector(bl,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ph.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(bl.copy(e.center).add(ph)),this.expandByPoint(bl.copy(e.center).sub(ph))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let kE=0;const Vi=new bn,mh=new Ci,vo=new ie,Ai=new Vl,Tl=new Vl,Bn=new ie;class Yi extends Rr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:kE++}),this.uuid=No(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(oE(e)?Ux:Nx)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new ft().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Vi.makeRotationFromQuaternion(e),this.applyMatrix4(Vi),this}rotateX(e){return Vi.makeRotationX(e),this.applyMatrix4(Vi),this}rotateY(e){return Vi.makeRotationY(e),this.applyMatrix4(Vi),this}rotateZ(e){return Vi.makeRotationZ(e),this.applyMatrix4(Vi),this}translate(e,i,r){return Vi.makeTranslation(e,i,r),this.applyMatrix4(Vi),this}scale(e,i,r){return Vi.makeScale(e,i,r),this.applyMatrix4(Vi),this}lookAt(e){return mh.lookAt(e),mh.updateMatrix(),this.applyMatrix4(mh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vo).negate(),this.translate(vo.x,vo.y,vo.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let o=0,c=e.length;o<c;o++){const u=e[o];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new Wi(r,3))}else{const r=Math.min(e.length,i.count);for(let o=0;o<r;o++){const c=e[o];i.setXYZ(o,c.x,c.y,c.z||0)}e.length>i.count&&ot("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vl);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Lt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ie(-1/0,-1/0,-1/0),new ie(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,o=i.length;r<o;r++){const c=i[r];Ai.setFromBufferAttribute(c),this.morphTargetsRelative?(Bn.addVectors(this.boundingBox.min,Ai.min),this.boundingBox.expandByPoint(Bn),Bn.addVectors(this.boundingBox.max,Ai.max),this.boundingBox.expandByPoint(Bn)):(this.boundingBox.expandByPoint(Ai.min),this.boundingBox.expandByPoint(Ai.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Lt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gp);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Lt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ie,1/0);return}if(e){const r=this.boundingSphere.center;if(Ai.setFromBufferAttribute(e),i)for(let c=0,u=i.length;c<u;c++){const d=i[c];Tl.setFromBufferAttribute(d),this.morphTargetsRelative?(Bn.addVectors(Ai.min,Tl.min),Ai.expandByPoint(Bn),Bn.addVectors(Ai.max,Tl.max),Ai.expandByPoint(Bn)):(Ai.expandByPoint(Tl.min),Ai.expandByPoint(Tl.max))}Ai.getCenter(r);let o=0;for(let c=0,u=e.count;c<u;c++)Bn.fromBufferAttribute(e,c),o=Math.max(o,r.distanceToSquared(Bn));if(i)for(let c=0,u=i.length;c<u;c++){const d=i[c],m=this.morphTargetsRelative;for(let h=0,g=d.count;h<g;h++)Bn.fromBufferAttribute(d,h),m&&(vo.fromBufferAttribute(e,h),Bn.add(vo)),o=Math.max(o,r.distanceToSquared(Bn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Lt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Lt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,o=i.normal,c=i.uv;let u=this.getAttribute("tangent");(u===void 0||u.count!==r.count)&&(u=new Ta(new Float32Array(4*r.count),4),this.setAttribute("tangent",u));const d=[],m=[];for(let A=0;A<r.count;A++)d[A]=new ie,m[A]=new ie;const h=new ie,g=new ie,v=new ie,_=new It,M=new It,b=new It,R=new ie,y=new ie;function x(A,U,X){h.fromBufferAttribute(r,A),g.fromBufferAttribute(r,U),v.fromBufferAttribute(r,X),_.fromBufferAttribute(c,A),M.fromBufferAttribute(c,U),b.fromBufferAttribute(c,X),g.sub(h),v.sub(h),M.sub(_),b.sub(_);const k=1/(M.x*b.y-b.x*M.y);isFinite(k)&&(R.copy(g).multiplyScalar(b.y).addScaledVector(v,-M.y).multiplyScalar(k),y.copy(v).multiplyScalar(M.x).addScaledVector(g,-b.x).multiplyScalar(k),d[A].add(R),d[U].add(R),d[X].add(R),m[A].add(y),m[U].add(y),m[X].add(y))}let O=this.groups;O.length===0&&(O=[{start:0,count:e.count}]);for(let A=0,U=O.length;A<U;++A){const X=O[A],k=X.start,Z=X.count;for(let me=k,ue=k+Z;me<ue;me+=3)x(e.getX(me+0),e.getX(me+1),e.getX(me+2))}const P=new ie,C=new ie,N=new ie,L=new ie;function B(A){N.fromBufferAttribute(o,A),L.copy(N);const U=d[A];P.copy(U),P.sub(N.multiplyScalar(N.dot(U))).normalize(),C.crossVectors(L,U);const k=C.dot(m[A])<0?-1:1;u.setXYZW(A,P.x,P.y,P.z,k)}for(let A=0,U=O.length;A<U;++A){const X=O[A],k=X.start,Z=X.count;for(let me=k,ue=k+Z;me<ue;me+=3)B(e.getX(me+0)),B(e.getX(me+1)),B(e.getX(me+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==i.count)r=new Ta(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let _=0,M=r.count;_<M;_++)r.setXYZ(_,0,0,0);const o=new ie,c=new ie,u=new ie,d=new ie,m=new ie,h=new ie,g=new ie,v=new ie;if(e)for(let _=0,M=e.count;_<M;_+=3){const b=e.getX(_+0),R=e.getX(_+1),y=e.getX(_+2);o.fromBufferAttribute(i,b),c.fromBufferAttribute(i,R),u.fromBufferAttribute(i,y),g.subVectors(u,c),v.subVectors(o,c),g.cross(v),d.fromBufferAttribute(r,b),m.fromBufferAttribute(r,R),h.fromBufferAttribute(r,y),d.add(g),m.add(g),h.add(g),r.setXYZ(b,d.x,d.y,d.z),r.setXYZ(R,m.x,m.y,m.z),r.setXYZ(y,h.x,h.y,h.z)}else for(let _=0,M=i.count;_<M;_+=3)o.fromBufferAttribute(i,_+0),c.fromBufferAttribute(i,_+1),u.fromBufferAttribute(i,_+2),g.subVectors(u,c),v.subVectors(o,c),g.cross(v),r.setXYZ(_+0,g.x,g.y,g.z),r.setXYZ(_+1,g.x,g.y,g.z),r.setXYZ(_+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)Bn.fromBufferAttribute(e,i),Bn.normalize(),e.setXYZ(i,Bn.x,Bn.y,Bn.z)}toNonIndexed(){function e(d,m){const h=d.array,g=d.itemSize,v=d.normalized,_=new h.constructor(m.length*g);let M=0,b=0;for(let R=0,y=m.length;R<y;R++){d.isInterleavedBufferAttribute?M=m[R]*d.data.stride+d.offset:M=m[R]*g;for(let x=0;x<g;x++)_[b++]=h[M++]}return new Ta(_,g,v)}if(this.index===null)return ot("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Yi,r=this.index.array,o=this.attributes;for(const d in o){const m=o[d],h=e(m,r);i.setAttribute(d,h)}const c=this.morphAttributes;for(const d in c){const m=[],h=c[d];for(let g=0,v=h.length;g<v;g++){const _=h[g],M=e(_,r);m.push(M)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let d=0,m=u.length;d<m;d++){const h=u[d];i.addGroup(h.start,h.count,h.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const m=this.parameters;for(const h in m)m[h]!==void 0&&(e[h]=m[h]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const h=r[m];e.data.attributes[m]=h.toJSON(e.data)}const o={};let c=!1;for(const m in this.morphAttributes){const h=this.morphAttributes[m],g=[];for(let v=0,_=h.length;v<_;v++){const M=h[v];g.push(M.toJSON(e.data))}g.length>0&&(o[m]=g,c=!0)}c&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const h in o){const g=o[h];this.setAttribute(h,g.clone(i))}const c=e.morphAttributes;for(const h in c){const g=[],v=c[h];for(let _=0,M=v.length;_<M;_++)g.push(v[_].clone(i));this.morphAttributes[h]=g}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let h=0,g=u.length;h<g;h++){const v=u[h];this.addGroup(v.start,v.count,v.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let XE=0;class zu extends Rr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:XE++}),this.uuid=No(),this.name="",this.type="Material",this.blending=Eo,this.side=ns,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Bh,this.blendDst=zh,this.blendEquation=Sr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Gt(0,0,0),this.blendAlpha=0,this.depthFunc=Co,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=X_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=oo,this.stencilZFail=oo,this.stencilZPass=oo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){ot(`Material: parameter '${i}' has value of undefined.`);continue}const o=this[i];if(o===void 0){ot(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector2&&r&&r.isVector2||o&&o.isEuler&&r&&r.isEuler||o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Eo&&(r.blending=this.blending),this.side!==ns&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Bh&&(r.blendSrc=this.blendSrc),this.blendDst!==zh&&(r.blendDst=this.blendDst),this.blendEquation!==Sr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Co&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==X_&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==oo&&(r.stencilFail=this.stencilFail),this.stencilZFail!==oo&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==oo&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(c){const u=[];for(const d in c){const m=c[d];delete m.metadata,u.push(m)}return u}if(i){const c=o(e.textures),u=o(e.images);c.length>0&&(r.textures=c),u.length>0&&(r.images=u)}return r}fromJSON(e,i){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Gt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=i[e.map]||null),e.matcap!==void 0&&(this.matcap=i[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=i[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=i[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=i[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),this.normalScale=new It().fromArray(r)}return e.displacementMap!==void 0&&(this.displacementMap=i[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=i[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=i[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=i[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=i[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=i[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=i[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=i[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=i[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=i[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=i[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=i[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=i[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=i[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new It().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=i[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=i[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=i[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=i[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=i[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=i[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=i[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const o=i.length;r=new Array(o);for(let c=0;c!==o;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Qa=new ie,gh=new ie,ru=new ie,Fs=new ie,_h=new ie,ou=new ie,vh=new ie;class WE{constructor(e=new ie,i=new ie(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Qa)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=Qa.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(Qa.copy(this.origin).addScaledVector(this.direction,i),Qa.distanceToSquared(e))}distanceSqToSegment(e,i,r,o){gh.copy(e).add(i).multiplyScalar(.5),ru.copy(i).sub(e).normalize(),Fs.copy(this.origin).sub(gh);const c=e.distanceTo(i)*.5,u=-this.direction.dot(ru),d=Fs.dot(this.direction),m=-Fs.dot(ru),h=Fs.lengthSq(),g=Math.abs(1-u*u);let v,_,M,b;if(g>0)if(v=u*m-d,_=u*d-m,b=c*g,v>=0)if(_>=-b)if(_<=b){const R=1/g;v*=R,_*=R,M=v*(v+u*_+2*d)+_*(u*v+_+2*m)+h}else _=c,v=Math.max(0,-(u*_+d)),M=-v*v+_*(_+2*m)+h;else _=-c,v=Math.max(0,-(u*_+d)),M=-v*v+_*(_+2*m)+h;else _<=-b?(v=Math.max(0,-(-u*c+d)),_=v>0?-c:Math.min(Math.max(-c,-m),c),M=-v*v+_*(_+2*m)+h):_<=b?(v=0,_=Math.min(Math.max(-c,-m),c),M=_*(_+2*m)+h):(v=Math.max(0,-(u*c+d)),_=v>0?c:Math.min(Math.max(-c,-m),c),M=-v*v+_*(_+2*m)+h);else _=u>0?-c:c,v=Math.max(0,-(u*_+d)),M=-v*v+_*(_+2*m)+h;return r&&r.copy(this.origin).addScaledVector(this.direction,v),o&&o.copy(gh).addScaledVector(ru,_),M}intersectSphere(e,i){Qa.subVectors(e.center,this.origin);const r=Qa.dot(this.direction),o=Qa.dot(Qa)-r*r,c=e.radius*e.radius;if(o>c)return null;const u=Math.sqrt(c-o),d=r-u,m=r+u;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,o,c,u,d,m;const h=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,_=this.origin;return h>=0?(r=(e.min.x-_.x)*h,o=(e.max.x-_.x)*h):(r=(e.max.x-_.x)*h,o=(e.min.x-_.x)*h),g>=0?(c=(e.min.y-_.y)*g,u=(e.max.y-_.y)*g):(c=(e.max.y-_.y)*g,u=(e.min.y-_.y)*g),r>u||c>o||((c>r||isNaN(r))&&(r=c),(u<o||isNaN(o))&&(o=u),v>=0?(d=(e.min.z-_.z)*v,m=(e.max.z-_.z)*v):(d=(e.max.z-_.z)*v,m=(e.min.z-_.z)*v),r>m||d>o)||((d>r||r!==r)&&(r=d),(m<o||o!==o)&&(o=m),o<0)?null:this.at(r>=0?r:o,i)}intersectsBox(e){return this.intersectBox(e,Qa)!==null}intersectTriangle(e,i,r,o,c){_h.subVectors(i,e),ou.subVectors(r,e),vh.crossVectors(_h,ou);let u=this.direction.dot(vh),d;if(u>0){if(o)return null;d=1}else if(u<0)d=-1,u=-u;else return null;Fs.subVectors(this.origin,e);const m=d*this.direction.dot(ou.crossVectors(Fs,ou));if(m<0)return null;const h=d*this.direction.dot(_h.cross(Fs));if(h<0||m+h>u)return null;const g=-d*Fs.dot(vh);return g<0?null:this.at(g/u,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ou extends zu{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ar,this.combine=dx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ov=new bn,mr=new WE,lu=new Gp,lv=new ie,cu=new ie,uu=new ie,fu=new ie,xh=new ie,du=new ie,cv=new ie,hu=new ie;class Ri extends Ci{constructor(e=new Yi,i=new Ou){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const o=i[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const d=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(e,i){const r=this.geometry,o=r.attributes.position,c=r.morphAttributes.position,u=r.morphTargetsRelative;i.fromBufferAttribute(o,e);const d=this.morphTargetInfluences;if(c&&d){du.set(0,0,0);for(let m=0,h=c.length;m<h;m++){const g=d[m],v=c[m];g!==0&&(xh.fromBufferAttribute(v,e),u?du.addScaledVector(xh,g):du.addScaledVector(xh.sub(i),g))}i.add(du)}return i}raycast(e,i){const r=this.geometry,o=this.material,c=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),lu.copy(r.boundingSphere),lu.applyMatrix4(c),mr.copy(e.ray).recast(e.near),!(lu.containsPoint(mr.origin)===!1&&(mr.intersectSphere(lu,lv)===null||mr.origin.distanceToSquared(lv)>(e.far-e.near)**2))&&(ov.copy(c).invert(),mr.copy(e.ray).applyMatrix4(ov),!(r.boundingBox!==null&&mr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,mr)))}_computeIntersections(e,i,r){let o;const c=this.geometry,u=this.material,d=c.index,m=c.attributes.position,h=c.attributes.uv,g=c.attributes.uv1,v=c.attributes.normal,_=c.groups,M=c.drawRange;if(d!==null)if(Array.isArray(u))for(let b=0,R=_.length;b<R;b++){const y=_[b],x=u[y.materialIndex],O=Math.max(y.start,M.start),P=Math.min(d.count,Math.min(y.start+y.count,M.start+M.count));for(let C=O,N=P;C<N;C+=3){const L=d.getX(C),B=d.getX(C+1),A=d.getX(C+2);o=pu(this,x,e,r,h,g,v,L,B,A),o&&(o.faceIndex=Math.floor(C/3),o.face.materialIndex=y.materialIndex,i.push(o))}}else{const b=Math.max(0,M.start),R=Math.min(d.count,M.start+M.count);for(let y=b,x=R;y<x;y+=3){const O=d.getX(y),P=d.getX(y+1),C=d.getX(y+2);o=pu(this,u,e,r,h,g,v,O,P,C),o&&(o.faceIndex=Math.floor(y/3),i.push(o))}}else if(m!==void 0)if(Array.isArray(u))for(let b=0,R=_.length;b<R;b++){const y=_[b],x=u[y.materialIndex],O=Math.max(y.start,M.start),P=Math.min(m.count,Math.min(y.start+y.count,M.start+M.count));for(let C=O,N=P;C<N;C+=3){const L=C,B=C+1,A=C+2;o=pu(this,x,e,r,h,g,v,L,B,A),o&&(o.faceIndex=Math.floor(C/3),o.face.materialIndex=y.materialIndex,i.push(o))}}else{const b=Math.max(0,M.start),R=Math.min(m.count,M.start+M.count);for(let y=b,x=R;y<x;y+=3){const O=y,P=y+1,C=y+2;o=pu(this,u,e,r,h,g,v,O,P,C),o&&(o.faceIndex=Math.floor(y/3),i.push(o))}}}}function YE(a,e,i,r,o,c,u,d){let m;if(e.side===pi?m=r.intersectTriangle(u,c,o,!0,d):m=r.intersectTriangle(o,c,u,e.side===ns,d),m===null)return null;hu.copy(d),hu.applyMatrix4(a.matrixWorld);const h=i.ray.origin.distanceTo(hu);return h<i.near||h>i.far?null:{distance:h,point:hu.clone(),object:a}}function pu(a,e,i,r,o,c,u,d,m,h){a.getVertexPosition(d,cu),a.getVertexPosition(m,uu),a.getVertexPosition(h,fu);const g=YE(a,e,i,r,cu,uu,fu,cv);if(g){const v=new ie;sa.getBarycoord(cv,cu,uu,fu,v),o&&(g.uv=sa.getInterpolatedAttribute(o,d,m,h,v,new It)),c&&(g.uv1=sa.getInterpolatedAttribute(c,d,m,h,v,new It)),u&&(g.normal=sa.getInterpolatedAttribute(u,d,m,h,v,new ie),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const _={a:d,b:m,c:h,normal:new ie,materialIndex:0};sa.getNormal(cu,uu,fu,_.normal),g.face=_,g.barycoord=v}return g}class qE extends jn{constructor(e=null,i=1,r=1,o,c,u,d,m,h=qn,g=qn,v,_){super(null,u,d,m,h,g,o,c,v,_),this.isDataTexture=!0,this.image={data:e,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Sh=new ie,jE=new ie,ZE=new ft;class vr{constructor(e=new ie(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,o){return this.normal.set(e,i,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const o=Sh.subVectors(r,i).cross(jE.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i,r=!0){const o=e.delta(Sh),c=this.normal.dot(o);if(c===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/c;return r===!0&&(u<0||u>1)?null:i.copy(e.start).addScaledVector(o,u)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||ZE.getNormalMatrix(e),o=this.coplanarPoint(Sh).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const gr=new Gp,KE=new It(.5,.5),mu=new ie;class Ox{constructor(e=new vr,i=new vr,r=new vr,o=new vr,c=new vr,u=new vr){this.planes=[e,i,r,o,c,u]}set(e,i,r,o,c,u){const d=this.planes;return d[0].copy(e),d[1].copy(i),d[2].copy(r),d[3].copy(o),d[4].copy(c),d[5].copy(u),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=ya,r=!1){const o=this.planes,c=e.elements,u=c[0],d=c[1],m=c[2],h=c[3],g=c[4],v=c[5],_=c[6],M=c[7],b=c[8],R=c[9],y=c[10],x=c[11],O=c[12],P=c[13],C=c[14],N=c[15];if(o[0].setComponents(h-u,M-g,x-b,N-O).normalize(),o[1].setComponents(h+u,M+g,x+b,N+O).normalize(),o[2].setComponents(h+d,M+v,x+R,N+P).normalize(),o[3].setComponents(h-d,M-v,x-R,N-P).normalize(),r)o[4].setComponents(m,_,y,C).normalize(),o[5].setComponents(h-m,M-_,x-y,N-C).normalize();else if(o[4].setComponents(h-m,M-_,x-y,N-C).normalize(),i===ya)o[5].setComponents(h+m,M+_,x+y,N+C).normalize();else if(i===Nu)o[5].setComponents(m,_,y,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),gr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),gr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(gr)}intersectsSprite(e){gr.center.set(0,0,0);const i=KE.distanceTo(e.center);return gr.radius=.7071067811865476+i,gr.applyMatrix4(e.matrixWorld),this.intersectsSphere(gr)}intersectsSphere(e){const i=this.planes,r=e.center,o=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const o=i[r];if(mu.x=o.normal.x>0?e.max.x:e.min.x,mu.y=o.normal.y>0?e.max.y:e.min.y,mu.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(mu)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class QE extends jn{constructor(e,i,r,o,c=hn,u=hn,d,m,h){super(e,i,r,o,c,u,d,m,h),this.isVideoTexture=!0,this.generateMipmaps=!1,this._requestVideoFrameCallbackId=0;const g=this;function v(){g.needsUpdate=!0,g._requestVideoFrameCallbackId=e.requestVideoFrameCallback(v)}"requestVideoFrameCallback"in e&&(this._requestVideoFrameCallbackId=e.requestVideoFrameCallback(v))}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}dispose(){this._requestVideoFrameCallbackId!==0&&(this.source.data.cancelVideoFrameCallback(this._requestVideoFrameCallbackId),this._requestVideoFrameCallbackId=0),super.dispose()}}class Px extends jn{constructor(e=[],i=br,r,o,c,u,d,m,h,g){super(e,i,r,o,c,u,d,m,h,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ix extends jn{constructor(e,i,r,o,c,u,d,m,h){super(e,i,r,o,c,u,d,m,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Do extends jn{constructor(e,i,r=Aa,o,c,u,d=qn,m=qn,h,g=as,v=1){if(g!==as&&g!==Er)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const _={width:e,height:i,depth:v};super(_,o,c,u,d,m,g,r,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Hp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class JE extends Do{constructor(e,i=Aa,r=br,o,c,u=qn,d=qn,m,h=as){const g={width:e,height:e,depth:1},v=[g,g,g,g,g,g];super(e,e,i,r,o,c,u,d,m,h),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Fx extends jn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class kl extends Yi{constructor(e=1,i=1,r=1,o=1,c=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:o,heightSegments:c,depthSegments:u};const d=this;o=Math.floor(o),c=Math.floor(c),u=Math.floor(u);const m=[],h=[],g=[],v=[];let _=0,M=0;b("z","y","x",-1,-1,r,i,e,u,c,0),b("z","y","x",1,-1,r,i,-e,u,c,1),b("x","z","y",1,1,e,r,i,o,u,2),b("x","z","y",1,-1,e,r,-i,o,u,3),b("x","y","z",1,-1,e,i,r,o,c,4),b("x","y","z",-1,-1,e,i,-r,o,c,5),this.setIndex(m),this.setAttribute("position",new Wi(h,3)),this.setAttribute("normal",new Wi(g,3)),this.setAttribute("uv",new Wi(v,2));function b(R,y,x,O,P,C,N,L,B,A,U){const X=C/B,k=N/A,Z=C/2,me=N/2,ue=L/2,q=B+1,z=A+1;let H=0,$=0;const he=new ie;for(let Se=0;Se<z;Se++){const I=Se*k-me;for(let K=0;K<q;K++){const Te=K*X-Z;he[R]=Te*O,he[y]=I*P,he[x]=ue,h.push(he.x,he.y,he.z),he[R]=0,he[y]=0,he[x]=L>0?1:-1,g.push(he.x,he.y,he.z),v.push(K/B),v.push(1-Se/A),H+=1}}for(let Se=0;Se<A;Se++)for(let I=0;I<B;I++){const K=_+I+q*Se,Te=_+I+q*(Se+1),Ae=_+(I+1)+q*(Se+1),De=_+(I+1)+q*Se;m.push(K,Te,De),m.push(Te,Ae,De),$+=6}d.addGroup(M,$,U),M+=$,_+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new kl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class $E{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){ot("Curve: .getPoint() not implemented.")}getPointAt(e,i){const r=this.getUtoTmapping(e);return this.getPoint(r,i)}getPoints(e=5){const i=[];for(let r=0;r<=e;r++)i.push(this.getPoint(r/e));return i}getSpacedPoints(e=5){const i=[];for(let r=0;r<=e;r++)i.push(this.getPointAt(r/e));return i}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const i=[];let r,o=this.getPoint(0),c=0;i.push(0);for(let u=1;u<=e;u++)r=this.getPoint(u/e),c+=r.distanceTo(o),i.push(c),o=r;return this.cacheArcLengths=i,i}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,i=null){const r=this.getLengths();let o=0;const c=r.length;let u;i?u=i:u=e*r[c-1];let d=0,m=c-1,h;for(;d<=m;)if(o=Math.floor(d+(m-d)/2),h=r[o]-u,h<0)d=o+1;else if(h>0)m=o-1;else{m=o;break}if(o=m,r[o]===u)return o/(c-1);const g=r[o],_=r[o+1]-g,M=(u-g)/_;return(o+M)/(c-1)}getTangent(e,i){let o=e-1e-4,c=e+1e-4;o<0&&(o=0),c>1&&(c=1);const u=this.getPoint(o),d=this.getPoint(c),m=i||(u.isVector2?new It:new ie);return m.copy(d).sub(u).normalize(),m}getTangentAt(e,i){const r=this.getUtoTmapping(e);return this.getTangent(r,i)}computeFrenetFrames(e,i=!1){const r=new ie,o=[],c=[],u=[],d=new ie,m=new bn;for(let M=0;M<=e;M++){const b=M/e;o[M]=this.getTangentAt(b,new ie)}c[0]=new ie,u[0]=new ie;let h=Number.MAX_VALUE;const g=Math.abs(o[0].x),v=Math.abs(o[0].y),_=Math.abs(o[0].z);g<=h&&(h=g,r.set(1,0,0)),v<=h&&(h=v,r.set(0,1,0)),_<=h&&r.set(0,0,1),d.crossVectors(o[0],r).normalize(),c[0].crossVectors(o[0],d),u[0].crossVectors(o[0],c[0]);for(let M=1;M<=e;M++){if(c[M]=c[M-1].clone(),u[M]=u[M-1].clone(),d.crossVectors(o[M-1],o[M]),d.length()>Number.EPSILON){d.normalize();const b=Math.acos(_t(o[M-1].dot(o[M]),-1,1));c[M].applyMatrix4(m.makeRotationAxis(d,b))}u[M].crossVectors(o[M],c[M])}if(i===!0){let M=Math.acos(_t(c[0].dot(c[e]),-1,1));M/=e,o[0].dot(d.crossVectors(c[0],c[e]))>0&&(M=-M);for(let b=1;b<=e;b++)c[b].applyMatrix4(m.makeRotationAxis(o[b],M*b)),u[b].crossVectors(o[b],c[b])}return{tangents:o,normals:c,binormals:u}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}function Vp(){let a=0,e=0,i=0,r=0;function o(c,u,d,m){a=c,e=d,i=-3*c+3*u-2*d-m,r=2*c-2*u+d+m}return{initCatmullRom:function(c,u,d,m,h){o(u,d,h*(d-c),h*(m-u))},initNonuniformCatmullRom:function(c,u,d,m,h,g,v){let _=(u-c)/h-(d-c)/(h+g)+(d-u)/g,M=(d-u)/g-(m-u)/(g+v)+(m-d)/v;_*=g,M*=g,o(u,d,_,M)},calc:function(c){const u=c*c,d=u*c;return a+e*c+i*u+r*d}}}const uv=new ie,fv=new ie,Mh=new Vp,yh=new Vp,Eh=new Vp;class eb extends $E{constructor(e=[],i=!1,r="centripetal",o=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=i,this.curveType=r,this.tension=o}getPoint(e,i=new ie){const r=i,o=this.points,c=o.length,u=(c-(this.closed?0:1))*e;let d=Math.floor(u),m=u-d;this.closed?d+=d>0?0:(Math.floor(Math.abs(d)/c)+1)*c:m===0&&d===c-1&&(d=c-2,m=1);let h,g;this.closed||d>0?h=o[(d-1)%c]:(fv.subVectors(o[0],o[1]).add(o[0]),h=fv);const v=o[d%c],_=o[(d+1)%c];if(this.closed||d+2<c?g=o[(d+2)%c]:(uv.subVectors(o[c-1],o[c-2]).add(o[c-1]),g=uv),this.curveType==="centripetal"||this.curveType==="chordal"){const M=this.curveType==="chordal"?.5:.25;let b=Math.pow(h.distanceToSquared(v),M),R=Math.pow(v.distanceToSquared(_),M),y=Math.pow(_.distanceToSquared(g),M);R<1e-4&&(R=1),b<1e-4&&(b=R),y<1e-4&&(y=R),Mh.initNonuniformCatmullRom(h.x,v.x,_.x,g.x,b,R,y),yh.initNonuniformCatmullRom(h.y,v.y,_.y,g.y,b,R,y),Eh.initNonuniformCatmullRom(h.z,v.z,_.z,g.z,b,R,y)}else this.curveType==="catmullrom"&&(Mh.initCatmullRom(h.x,v.x,_.x,g.x,this.tension),yh.initCatmullRom(h.y,v.y,_.y,g.y,this.tension),Eh.initCatmullRom(h.z,v.z,_.z,g.z,this.tension));return r.set(Mh.calc(m),yh.calc(m),Eh.calc(m)),r}copy(e){super.copy(e),this.points=[];for(let i=0,r=e.points.length;i<r;i++){const o=e.points[i];this.points.push(o.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let i=0,r=this.points.length;i<r;i++){const o=this.points[i];e.points.push(o.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let i=0,r=e.points.length;i<r;i++){const o=e.points[i];this.points.push(new ie().fromArray(o))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}class Gs extends Yi{constructor(e=1,i=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:o};const c=e/2,u=i/2,d=Math.floor(r),m=Math.floor(o),h=d+1,g=m+1,v=e/d,_=i/m,M=[],b=[],R=[],y=[];for(let x=0;x<g;x++){const O=x*_-u;for(let P=0;P<h;P++){const C=P*v-c;b.push(C,-O,0),R.push(0,0,1),y.push(P/d),y.push(1-x/m)}}for(let x=0;x<m;x++)for(let O=0;O<d;O++){const P=O+h*x,C=O+h*(x+1),N=O+1+h*(x+1),L=O+1+h*x;M.push(P,C,L),M.push(C,N,L)}this.setIndex(M),this.setAttribute("position",new Wi(b,3)),this.setAttribute("normal",new Wi(R,3)),this.setAttribute("uv",new Wi(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gs(e.width,e.height,e.widthSegments,e.heightSegments)}}function Lo(a){const e={};for(const i in a){e[i]={};for(const r in a[i]){const o=a[i][r];if(dv(o))o.isRenderTargetTexture?(ot("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=o.clone();else if(Array.isArray(o))if(dv(o[0])){const c=[];for(let u=0,d=o.length;u<d;u++)c[u]=o[u].clone();e[i][r]=c}else e[i][r]=o.slice();else e[i][r]=o}}return e}function ai(a){const e={};for(let i=0;i<a.length;i++){const r=Lo(a[i]);for(const o in r)e[o]=r[o]}return e}function dv(a){return a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)}function tb(a){const e=[];for(let i=0;i<a.length;i++)e.push(a[i].clone());return e}function Bx(a){const e=a.getRenderTarget();return e===null?a.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ct.workingColorSpace}const nb={clone:Lo,merge:ai};var ib=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ab=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class qi extends zu{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ib,this.fragmentShader=ab,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Lo(e.uniforms),this.uniformsGroups=tb(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?i.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?i.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?i.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?i.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?i.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?i.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?i.uniforms[o]={type:"m4",value:u.toArray()}:i.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}fromJSON(e,i){if(super.fromJSON(e,i),e.uniforms!==void 0)for(const r in e.uniforms){const o=e.uniforms[r];switch(this.uniforms[r]={},o.type){case"t":this.uniforms[r].value=i[o.value]||null;break;case"c":this.uniforms[r].value=new Gt().setHex(o.value);break;case"v2":this.uniforms[r].value=new It().fromArray(o.value);break;case"v3":this.uniforms[r].value=new ie().fromArray(o.value);break;case"v4":this.uniforms[r].value=new Mn().fromArray(o.value);break;case"m3":this.uniforms[r].value=new ft().fromArray(o.value);break;case"m4":this.uniforms[r].value=new bn().fromArray(o.value);break;default:this.uniforms[r].value=o.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)this.extensions[r]=e.extensions[r];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class sb extends qi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class rb extends zu{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=$y,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ob extends zu{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const gu=new ie,_u=new Uo,_a=new ie;class zx extends Ci{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new bn,this.projectionMatrix=new bn,this.projectionMatrixInverse=new bn,this.coordinateSystem=ya,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(gu,_u,_a),_a.x===1&&_a.y===1&&_a.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(gu,_u,_a.set(1,1,1)).invert()}updateWorldMatrix(e,i,r=!1){super.updateWorldMatrix(e,i,r),this.matrixWorld.decompose(gu,_u,_a),_a.x===1&&_a.y===1&&_a.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(gu,_u,_a.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Bs=new ie,hv=new It,pv=new It;class ki extends zx{constructor(e=50,i=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=zl*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ol*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return zl*2*Math.atan(Math.tan(Ol*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){Bs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Bs.x,Bs.y).multiplyScalar(-e/Bs.z),Bs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Bs.x,Bs.y).multiplyScalar(-e/Bs.z)}getViewSize(e,i){return this.getViewBounds(e,hv,pv),i.subVectors(pv,hv)}setViewOffset(e,i,r,o,c,u){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Ol*.5*this.fov)/this.zoom,r=2*i,o=this.aspect*r,c=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const m=u.fullWidth,h=u.fullHeight;c+=u.offsetX*o/m,i-=u.offsetY*r/h,o*=u.width/m,r*=u.height/h}const d=this.filmOffset;d!==0&&(c+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+o,i,i-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class Hx extends zx{constructor(e=-1,i=1,r=1,o=-1,c=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=o,this.near=c,this.far=u,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,o,c,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let c=r-e,u=r+e,d=o+i,m=o-i;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=h*this.view.offsetX,u=c+h*this.view.width,d-=g*this.view.offsetY,m=d-g*this.view.height}this.projectionMatrix.makeOrthographic(c,u,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const xo=-90,So=1;class lb extends Ci{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new ki(xo,So,e,i);o.layers=this.layers,this.add(o);const c=new ki(xo,So,e,i);c.layers=this.layers,this.add(c);const u=new ki(xo,So,e,i);u.layers=this.layers,this.add(u);const d=new ki(xo,So,e,i);d.layers=this.layers,this.add(d);const m=new ki(xo,So,e,i);m.layers=this.layers,this.add(m);const h=new ki(xo,So,e,i);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,o,c,u,d,m]=i;for(const h of i)this.remove(h);if(e===ya)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===Nu)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of i)this.add(h),h.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,u,d,m,h,g]=this.children,v=e.getRenderTarget(),_=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const R=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let y=!1;e.isWebGLRenderer===!0?y=e.state.buffers.depth.getReversed():y=e.reversedDepthBuffer,e.setRenderTarget(r,0,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,c),e.setRenderTarget(r,1,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,u),e.setRenderTarget(r,2,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,d),e.setRenderTarget(r,3,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,m),e.setRenderTarget(r,4,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,h),r.texture.generateMipmaps=R,e.setRenderTarget(r,5,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,g),e.setRenderTarget(v,_,M),e.xr.enabled=b,r.texture.needsPMREMUpdate=!0}}class cb extends ki{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const $p=class $p{constructor(e,i,r,o){this.elements=[1,0,0,1],e!==void 0&&this.set(e,i,r,o)}identity(){return this.set(1,0,0,1),this}fromArray(e,i=0){for(let r=0;r<4;r++)this.elements[r]=e[r+i];return this}set(e,i,r,o){const c=this.elements;return c[0]=e,c[2]=i,c[1]=r,c[3]=o,this}};$p.prototype.isMatrix2=!0;let mv=$p;function gv(a,e,i,r){const o=ub(r);switch(i){case Tx:return a*e;case Rx:return a*e/o.components*o.byteLength;case Op:return a*e/o.components*o.byteLength;case Tr:return a*e*2/o.components*o.byteLength;case Pp:return a*e*2/o.components*o.byteLength;case Ax:return a*e*3/o.components*o.byteLength;case oa:return a*e*4/o.components*o.byteLength;case Ip:return a*e*4/o.components*o.byteLength;case yu:case Eu:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case bu:case Tu:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Kh:case Jh:return Math.max(a,16)*Math.max(e,8)/4;case Zh:case Qh:return Math.max(a,8)*Math.max(e,8)/2;case $h:case ep:case np:case ip:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case tp:case Cu:case ap:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case sp:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case rp:return Math.floor((a+4)/5)*Math.floor((e+3)/4)*16;case op:return Math.floor((a+4)/5)*Math.floor((e+4)/5)*16;case lp:return Math.floor((a+5)/6)*Math.floor((e+4)/5)*16;case cp:return Math.floor((a+5)/6)*Math.floor((e+5)/6)*16;case up:return Math.floor((a+7)/8)*Math.floor((e+4)/5)*16;case fp:return Math.floor((a+7)/8)*Math.floor((e+5)/6)*16;case dp:return Math.floor((a+7)/8)*Math.floor((e+7)/8)*16;case hp:return Math.floor((a+9)/10)*Math.floor((e+4)/5)*16;case pp:return Math.floor((a+9)/10)*Math.floor((e+5)/6)*16;case mp:return Math.floor((a+9)/10)*Math.floor((e+7)/8)*16;case gp:return Math.floor((a+9)/10)*Math.floor((e+9)/10)*16;case _p:return Math.floor((a+11)/12)*Math.floor((e+9)/10)*16;case vp:return Math.floor((a+11)/12)*Math.floor((e+11)/12)*16;case xp:case Sp:case Mp:return Math.ceil(a/4)*Math.ceil(e/4)*16;case yp:case Ep:return Math.ceil(a/4)*Math.ceil(e/4)*8;case wu:case bp:return Math.ceil(a/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function ub(a){switch(a){case Xi:case Mx:return{byteLength:1,components:1};case Fl:case yx:case is:return{byteLength:2,components:1};case Np:case Up:return{byteLength:2,components:4};case Aa:case Lp:case Ma:return{byteLength:4,components:1};case Ex:case bx:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${a}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Dp}}));typeof window<"u"&&(window.__THREE__?ot("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Dp);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Gx(){let a=null,e=!1,i=null,r=null;function o(c,u){i(c,u),r=a.requestAnimationFrame(o)}return{start:function(){e!==!0&&i!==null&&a!==null&&(r=a.requestAnimationFrame(o),e=!0)},stop:function(){a!==null&&a.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){a=c}}}function fb(a){const e=new WeakMap;function i(d,m){const h=d.array,g=d.usage,v=h.byteLength,_=a.createBuffer();a.bindBuffer(m,_),a.bufferData(m,h,g),d.onUploadCallback();let M;if(h instanceof Float32Array)M=a.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)M=a.HALF_FLOAT;else if(h instanceof Uint16Array)d.isFloat16BufferAttribute?M=a.HALF_FLOAT:M=a.UNSIGNED_SHORT;else if(h instanceof Int16Array)M=a.SHORT;else if(h instanceof Uint32Array)M=a.UNSIGNED_INT;else if(h instanceof Int32Array)M=a.INT;else if(h instanceof Int8Array)M=a.BYTE;else if(h instanceof Uint8Array)M=a.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)M=a.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:_,type:M,bytesPerElement:h.BYTES_PER_ELEMENT,version:d.version,size:v}}function r(d,m,h){const g=m.array,v=m.updateRanges;if(a.bindBuffer(h,d),v.length===0)a.bufferSubData(h,0,g);else{v.sort((M,b)=>M.start-b.start);let _=0;for(let M=1;M<v.length;M++){const b=v[_],R=v[M];R.start<=b.start+b.count+1?b.count=Math.max(b.count,R.start+R.count-b.start):(++_,v[_]=R)}v.length=_+1;for(let M=0,b=v.length;M<b;M++){const R=v[M];a.bufferSubData(h,R.start*g.BYTES_PER_ELEMENT,g,R.start,R.count)}m.clearUpdateRanges()}m.onUploadCallback()}function o(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=e.get(d);m&&(a.deleteBuffer(m.buffer),e.delete(d))}function u(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=e.get(d);(!g||g.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const h=e.get(d);if(h===void 0)e.set(d,i(d,m));else if(h.version<d.version){if(h.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,d,m),h.version=d.version}}return{get:o,remove:c,update:u}}var db=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,hb=`#ifdef USE_ALPHAHASH
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
#endif`,pb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,mb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,_b=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,vb=`#ifdef USE_AOMAP
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
#endif`,xb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Sb=`#ifdef USE_BATCHING
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
#endif`,Mb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,yb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Eb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bb=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Tb=`#ifdef USE_IRIDESCENCE
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
#endif`,Ab=`#ifdef USE_BUMPMAP
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
#endif`,Rb=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Cb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,wb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Db=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Lb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Nb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Ub=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Ob=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Pb=`#define PI 3.141592653589793
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
} // validated`,Ib=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Fb=`vec3 transformedNormal = objectNormal;
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
#endif`,Bb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,zb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Hb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Gb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Vb="gl_FragColor = linearToOutputTexel( gl_FragColor );",kb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Xb=`#ifdef USE_ENVMAP
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
#endif`,Wb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Yb=`#ifdef USE_ENVMAP
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
#endif`,qb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,jb=`#ifdef USE_ENVMAP
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
#endif`,Zb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Kb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Qb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Jb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,$b=`#ifdef USE_GRADIENTMAP
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
}`,e1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,t1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,n1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,i1=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,a1=`#ifdef USE_ENVMAP
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
#endif`,s1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,r1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,o1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,l1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,c1=`PhysicalMaterial material;
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
#endif`,u1=`uniform sampler2D dfgLUT;
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
}`,f1=`
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
#endif`,d1=`#if defined( RE_IndirectDiffuse )
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
#endif`,h1=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,p1=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,m1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,g1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,v1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,x1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,S1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,M1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,y1=`#if defined( USE_POINTS_UV )
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
#endif`,E1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,b1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,T1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,A1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,R1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,C1=`#ifdef USE_MORPHTARGETS
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
#endif`,w1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,D1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,L1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,N1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,U1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,O1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,P1=`#ifdef USE_NORMALMAP
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
#endif`,I1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,F1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,B1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,z1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,H1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,G1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,V1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,k1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,X1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,W1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Y1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,q1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,j1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Z1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,K1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Q1=`float getShadowMask() {
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
}`,J1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$1=`#ifdef USE_SKINNING
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
#endif`,eT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,tT=`#ifdef USE_SKINNING
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
#endif`,nT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,iT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,aT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,sT=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,rT=`#ifdef USE_TRANSMISSION
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
#endif`,oT=`#ifdef USE_TRANSMISSION
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
#endif`,lT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const dT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,hT=`uniform sampler2D t2D;
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
}`,pT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mT=`#ifdef ENVMAP_TYPE_CUBE
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
}`,gT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_T=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vT=`#include <common>
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
}`,xT=`#if DEPTH_PACKING == 3200
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
}`,ST=`#define DISTANCE
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
}`,MT=`#define DISTANCE
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
}`,yT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ET=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bT=`uniform float scale;
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
}`,TT=`uniform vec3 diffuse;
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
}`,AT=`#include <common>
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
}`,RT=`uniform vec3 diffuse;
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
}`,CT=`#define LAMBERT
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
}`,wT=`#define LAMBERT
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
}`,DT=`#define MATCAP
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
}`,LT=`#define MATCAP
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
}`,NT=`#define NORMAL
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
}`,UT=`#define NORMAL
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
}`,OT=`#define PHONG
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
}`,PT=`#define PHONG
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
}`,IT=`#define STANDARD
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
}`,FT=`#define STANDARD
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
}`,BT=`#define TOON
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
}`,zT=`#define TOON
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
}`,HT=`uniform float size;
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
}`,GT=`uniform vec3 diffuse;
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
}`,VT=`#include <common>
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
}`,kT=`uniform vec3 color;
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
}`,XT=`uniform float rotation;
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
}`,WT=`uniform vec3 diffuse;
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
}`,gt={alphahash_fragment:db,alphahash_pars_fragment:hb,alphamap_fragment:pb,alphamap_pars_fragment:mb,alphatest_fragment:gb,alphatest_pars_fragment:_b,aomap_fragment:vb,aomap_pars_fragment:xb,batching_pars_vertex:Sb,batching_vertex:Mb,begin_vertex:yb,beginnormal_vertex:Eb,bsdfs:bb,iridescence_fragment:Tb,bumpmap_pars_fragment:Ab,clipping_planes_fragment:Rb,clipping_planes_pars_fragment:Cb,clipping_planes_pars_vertex:wb,clipping_planes_vertex:Db,color_fragment:Lb,color_pars_fragment:Nb,color_pars_vertex:Ub,color_vertex:Ob,common:Pb,cube_uv_reflection_fragment:Ib,defaultnormal_vertex:Fb,displacementmap_pars_vertex:Bb,displacementmap_vertex:zb,emissivemap_fragment:Hb,emissivemap_pars_fragment:Gb,colorspace_fragment:Vb,colorspace_pars_fragment:kb,envmap_fragment:Xb,envmap_common_pars_fragment:Wb,envmap_pars_fragment:Yb,envmap_pars_vertex:qb,envmap_physical_pars_fragment:a1,envmap_vertex:jb,fog_vertex:Zb,fog_pars_vertex:Kb,fog_fragment:Qb,fog_pars_fragment:Jb,gradientmap_pars_fragment:$b,lightmap_pars_fragment:e1,lights_lambert_fragment:t1,lights_lambert_pars_fragment:n1,lights_pars_begin:i1,lights_toon_fragment:s1,lights_toon_pars_fragment:r1,lights_phong_fragment:o1,lights_phong_pars_fragment:l1,lights_physical_fragment:c1,lights_physical_pars_fragment:u1,lights_fragment_begin:f1,lights_fragment_maps:d1,lights_fragment_end:h1,lightprobes_pars_fragment:p1,logdepthbuf_fragment:m1,logdepthbuf_pars_fragment:g1,logdepthbuf_pars_vertex:_1,logdepthbuf_vertex:v1,map_fragment:x1,map_pars_fragment:S1,map_particle_fragment:M1,map_particle_pars_fragment:y1,metalnessmap_fragment:E1,metalnessmap_pars_fragment:b1,morphinstance_vertex:T1,morphcolor_vertex:A1,morphnormal_vertex:R1,morphtarget_pars_vertex:C1,morphtarget_vertex:w1,normal_fragment_begin:D1,normal_fragment_maps:L1,normal_pars_fragment:N1,normal_pars_vertex:U1,normal_vertex:O1,normalmap_pars_fragment:P1,clearcoat_normal_fragment_begin:I1,clearcoat_normal_fragment_maps:F1,clearcoat_pars_fragment:B1,iridescence_pars_fragment:z1,opaque_fragment:H1,packing:G1,premultiplied_alpha_fragment:V1,project_vertex:k1,dithering_fragment:X1,dithering_pars_fragment:W1,roughnessmap_fragment:Y1,roughnessmap_pars_fragment:q1,shadowmap_pars_fragment:j1,shadowmap_pars_vertex:Z1,shadowmap_vertex:K1,shadowmask_pars_fragment:Q1,skinbase_vertex:J1,skinning_pars_vertex:$1,skinning_vertex:eT,skinnormal_vertex:tT,specularmap_fragment:nT,specularmap_pars_fragment:iT,tonemapping_fragment:aT,tonemapping_pars_fragment:sT,transmission_fragment:rT,transmission_pars_fragment:oT,uv_pars_fragment:lT,uv_pars_vertex:cT,uv_vertex:uT,worldpos_vertex:fT,background_vert:dT,background_frag:hT,backgroundCube_vert:pT,backgroundCube_frag:mT,cube_vert:gT,cube_frag:_T,depth_vert:vT,depth_frag:xT,distance_vert:ST,distance_frag:MT,equirect_vert:yT,equirect_frag:ET,linedashed_vert:bT,linedashed_frag:TT,meshbasic_vert:AT,meshbasic_frag:RT,meshlambert_vert:CT,meshlambert_frag:wT,meshmatcap_vert:DT,meshmatcap_frag:LT,meshnormal_vert:NT,meshnormal_frag:UT,meshphong_vert:OT,meshphong_frag:PT,meshphysical_vert:IT,meshphysical_frag:FT,meshtoon_vert:BT,meshtoon_frag:zT,points_vert:HT,points_frag:GT,shadow_vert:VT,shadow_frag:kT,sprite_vert:XT,sprite_frag:WT},qe={common:{diffuse:{value:new Gt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ft}},envmap:{envMap:{value:null},envMapRotation:{value:new ft},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ft},normalScale:{value:new It(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Gt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new ie},probesMax:{value:new ie},probesResolution:{value:new ie}},points:{diffuse:{value:new Gt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0},uvTransform:{value:new ft}},sprite:{diffuse:{value:new Gt(16777215)},opacity:{value:1},center:{value:new It(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}}},xa={basic:{uniforms:ai([qe.common,qe.specularmap,qe.envmap,qe.aomap,qe.lightmap,qe.fog]),vertexShader:gt.meshbasic_vert,fragmentShader:gt.meshbasic_frag},lambert:{uniforms:ai([qe.common,qe.specularmap,qe.envmap,qe.aomap,qe.lightmap,qe.emissivemap,qe.bumpmap,qe.normalmap,qe.displacementmap,qe.fog,qe.lights,{emissive:{value:new Gt(0)},envMapIntensity:{value:1}}]),vertexShader:gt.meshlambert_vert,fragmentShader:gt.meshlambert_frag},phong:{uniforms:ai([qe.common,qe.specularmap,qe.envmap,qe.aomap,qe.lightmap,qe.emissivemap,qe.bumpmap,qe.normalmap,qe.displacementmap,qe.fog,qe.lights,{emissive:{value:new Gt(0)},specular:{value:new Gt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:gt.meshphong_vert,fragmentShader:gt.meshphong_frag},standard:{uniforms:ai([qe.common,qe.envmap,qe.aomap,qe.lightmap,qe.emissivemap,qe.bumpmap,qe.normalmap,qe.displacementmap,qe.roughnessmap,qe.metalnessmap,qe.fog,qe.lights,{emissive:{value:new Gt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag},toon:{uniforms:ai([qe.common,qe.aomap,qe.lightmap,qe.emissivemap,qe.bumpmap,qe.normalmap,qe.displacementmap,qe.gradientmap,qe.fog,qe.lights,{emissive:{value:new Gt(0)}}]),vertexShader:gt.meshtoon_vert,fragmentShader:gt.meshtoon_frag},matcap:{uniforms:ai([qe.common,qe.bumpmap,qe.normalmap,qe.displacementmap,qe.fog,{matcap:{value:null}}]),vertexShader:gt.meshmatcap_vert,fragmentShader:gt.meshmatcap_frag},points:{uniforms:ai([qe.points,qe.fog]),vertexShader:gt.points_vert,fragmentShader:gt.points_frag},dashed:{uniforms:ai([qe.common,qe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:gt.linedashed_vert,fragmentShader:gt.linedashed_frag},depth:{uniforms:ai([qe.common,qe.displacementmap]),vertexShader:gt.depth_vert,fragmentShader:gt.depth_frag},normal:{uniforms:ai([qe.common,qe.bumpmap,qe.normalmap,qe.displacementmap,{opacity:{value:1}}]),vertexShader:gt.meshnormal_vert,fragmentShader:gt.meshnormal_frag},sprite:{uniforms:ai([qe.sprite,qe.fog]),vertexShader:gt.sprite_vert,fragmentShader:gt.sprite_frag},background:{uniforms:{uvTransform:{value:new ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:gt.background_vert,fragmentShader:gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ft}},vertexShader:gt.backgroundCube_vert,fragmentShader:gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:gt.cube_vert,fragmentShader:gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:gt.equirect_vert,fragmentShader:gt.equirect_frag},distance:{uniforms:ai([qe.common,qe.displacementmap,{referencePosition:{value:new ie},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:gt.distance_vert,fragmentShader:gt.distance_frag},shadow:{uniforms:ai([qe.lights,qe.fog,{color:{value:new Gt(0)},opacity:{value:1}}]),vertexShader:gt.shadow_vert,fragmentShader:gt.shadow_frag}};xa.physical={uniforms:ai([xa.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ft},clearcoatNormalScale:{value:new It(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ft},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ft},sheen:{value:0},sheenColor:{value:new Gt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ft},transmissionSamplerSize:{value:new It},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ft},attenuationDistance:{value:0},attenuationColor:{value:new Gt(0)},specularColor:{value:new Gt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ft},anisotropyVector:{value:new It},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ft}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag};const vu={r:0,b:0,g:0},YT=new bn,Vx=new ft;Vx.set(-1,0,0,0,1,0,0,0,1);function qT(a,e,i,r,o,c){const u=new Gt(0);let d=o===!0?0:1,m,h,g=null,v=0,_=null;function M(O){let P=O.isScene===!0?O.background:null;if(P&&P.isTexture){const C=O.backgroundBlurriness>0;P=e.get(P,C)}return P}function b(O){let P=!1;const C=M(O);C===null?y(u,d):C&&C.isColor&&(y(C,1),P=!0);const N=a.xr.getEnvironmentBlendMode();N==="additive"?i.buffers.color.setClear(0,0,0,1,c):N==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(a.autoClear||P)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil))}function R(O,P){const C=M(P);C&&(C.isCubeTexture||C.mapping===Bu)?(h===void 0&&(h=new Ri(new kl(1,1,1),new qi({name:"BackgroundCubeMaterial",uniforms:Lo(xa.backgroundCube.uniforms),vertexShader:xa.backgroundCube.vertexShader,fragmentShader:xa.backgroundCube.fragmentShader,side:pi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(N,L,B){this.matrixWorld.copyPosition(B.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),h.material.uniforms.envMap.value=C,h.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(YT.makeRotationFromEuler(P.backgroundRotation)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(Vx),h.material.toneMapped=Ct.getTransfer(C.colorSpace)!==Wt,(g!==C||v!==C.version||_!==a.toneMapping)&&(h.material.needsUpdate=!0,g=C,v=C.version,_=a.toneMapping),h.layers.enableAll(),O.unshift(h,h.geometry,h.material,0,0,null)):C&&C.isTexture&&(m===void 0&&(m=new Ri(new Gs(2,2),new qi({name:"BackgroundMaterial",uniforms:Lo(xa.background.uniforms),vertexShader:xa.background.vertexShader,fragmentShader:xa.background.fragmentShader,side:ns,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(m)),m.material.uniforms.t2D.value=C,m.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,m.material.toneMapped=Ct.getTransfer(C.colorSpace)!==Wt,C.matrixAutoUpdate===!0&&C.updateMatrix(),m.material.uniforms.uvTransform.value.copy(C.matrix),(g!==C||v!==C.version||_!==a.toneMapping)&&(m.material.needsUpdate=!0,g=C,v=C.version,_=a.toneMapping),m.layers.enableAll(),O.unshift(m,m.geometry,m.material,0,0,null))}function y(O,P){O.getRGB(vu,Bx(a)),i.buffers.color.setClear(vu.r,vu.g,vu.b,P,c)}function x(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return u},setClearColor:function(O,P=1){u.set(O),d=P,y(u,d)},getClearAlpha:function(){return d},setClearAlpha:function(O){d=O,y(u,d)},render:b,addToRenderList:R,dispose:x}}function jT(a,e){const i=a.getParameter(a.MAX_VERTEX_ATTRIBS),r={},o=_(null);let c=o,u=!1;function d(k,Z,me,ue,q){let z=!1;const H=v(k,ue,me,Z);c!==H&&(c=H,h(c.object)),z=M(k,ue,me,q),z&&b(k,ue,me,q),q!==null&&e.update(q,a.ELEMENT_ARRAY_BUFFER),(z||u)&&(u=!1,C(k,Z,me,ue),q!==null&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function m(){return a.createVertexArray()}function h(k){return a.bindVertexArray(k)}function g(k){return a.deleteVertexArray(k)}function v(k,Z,me,ue){const q=ue.wireframe===!0;let z=r[Z.id];z===void 0&&(z={},r[Z.id]=z);const H=k.isInstancedMesh===!0?k.id:0;let $=z[H];$===void 0&&($={},z[H]=$);let he=$[me.id];he===void 0&&(he={},$[me.id]=he);let Se=he[q];return Se===void 0&&(Se=_(m()),he[q]=Se),Se}function _(k){const Z=[],me=[],ue=[];for(let q=0;q<i;q++)Z[q]=0,me[q]=0,ue[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Z,enabledAttributes:me,attributeDivisors:ue,object:k,attributes:{},index:null}}function M(k,Z,me,ue){const q=c.attributes,z=Z.attributes;let H=0;const $=me.getAttributes();for(const he in $)if($[he].location>=0){const I=q[he];let K=z[he];if(K===void 0&&(he==="instanceMatrix"&&k.instanceMatrix&&(K=k.instanceMatrix),he==="instanceColor"&&k.instanceColor&&(K=k.instanceColor)),I===void 0||I.attribute!==K||K&&I.data!==K.data)return!0;H++}return c.attributesNum!==H||c.index!==ue}function b(k,Z,me,ue){const q={},z=Z.attributes;let H=0;const $=me.getAttributes();for(const he in $)if($[he].location>=0){let I=z[he];I===void 0&&(he==="instanceMatrix"&&k.instanceMatrix&&(I=k.instanceMatrix),he==="instanceColor"&&k.instanceColor&&(I=k.instanceColor));const K={};K.attribute=I,I&&I.data&&(K.data=I.data),q[he]=K,H++}c.attributes=q,c.attributesNum=H,c.index=ue}function R(){const k=c.newAttributes;for(let Z=0,me=k.length;Z<me;Z++)k[Z]=0}function y(k){x(k,0)}function x(k,Z){const me=c.newAttributes,ue=c.enabledAttributes,q=c.attributeDivisors;me[k]=1,ue[k]===0&&(a.enableVertexAttribArray(k),ue[k]=1),q[k]!==Z&&(a.vertexAttribDivisor(k,Z),q[k]=Z)}function O(){const k=c.newAttributes,Z=c.enabledAttributes;for(let me=0,ue=Z.length;me<ue;me++)Z[me]!==k[me]&&(a.disableVertexAttribArray(me),Z[me]=0)}function P(k,Z,me,ue,q,z,H){H===!0?a.vertexAttribIPointer(k,Z,me,q,z):a.vertexAttribPointer(k,Z,me,ue,q,z)}function C(k,Z,me,ue){R();const q=ue.attributes,z=me.getAttributes(),H=Z.defaultAttributeValues;for(const $ in z){const he=z[$];if(he.location>=0){let Se=q[$];if(Se===void 0&&($==="instanceMatrix"&&k.instanceMatrix&&(Se=k.instanceMatrix),$==="instanceColor"&&k.instanceColor&&(Se=k.instanceColor)),Se!==void 0){const I=Se.normalized,K=Se.itemSize,Te=e.get(Se);if(Te===void 0)continue;const Ae=Te.buffer,De=Te.type,ae=Te.bytesPerElement,Me=De===a.INT||De===a.UNSIGNED_INT||Se.gpuType===Lp;if(Se.isInterleavedBufferAttribute){const ge=Se.data,We=ge.stride,nt=Se.offset;if(ge.isInstancedInterleavedBuffer){for(let Qe=0;Qe<he.locationSize;Qe++)x(he.location+Qe,ge.meshPerAttribute);k.isInstancedMesh!==!0&&ue._maxInstanceCount===void 0&&(ue._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let Qe=0;Qe<he.locationSize;Qe++)y(he.location+Qe);a.bindBuffer(a.ARRAY_BUFFER,Ae);for(let Qe=0;Qe<he.locationSize;Qe++)P(he.location+Qe,K/he.locationSize,De,I,We*ae,(nt+K/he.locationSize*Qe)*ae,Me)}else{if(Se.isInstancedBufferAttribute){for(let ge=0;ge<he.locationSize;ge++)x(he.location+ge,Se.meshPerAttribute);k.isInstancedMesh!==!0&&ue._maxInstanceCount===void 0&&(ue._maxInstanceCount=Se.meshPerAttribute*Se.count)}else for(let ge=0;ge<he.locationSize;ge++)y(he.location+ge);a.bindBuffer(a.ARRAY_BUFFER,Ae);for(let ge=0;ge<he.locationSize;ge++)P(he.location+ge,K/he.locationSize,De,I,K*ae,K/he.locationSize*ge*ae,Me)}}else if(H!==void 0){const I=H[$];if(I!==void 0)switch(I.length){case 2:a.vertexAttrib2fv(he.location,I);break;case 3:a.vertexAttrib3fv(he.location,I);break;case 4:a.vertexAttrib4fv(he.location,I);break;default:a.vertexAttrib1fv(he.location,I)}}}}O()}function N(){U();for(const k in r){const Z=r[k];for(const me in Z){const ue=Z[me];for(const q in ue){const z=ue[q];for(const H in z)g(z[H].object),delete z[H];delete ue[q]}}delete r[k]}}function L(k){if(r[k.id]===void 0)return;const Z=r[k.id];for(const me in Z){const ue=Z[me];for(const q in ue){const z=ue[q];for(const H in z)g(z[H].object),delete z[H];delete ue[q]}}delete r[k.id]}function B(k){for(const Z in r){const me=r[Z];for(const ue in me){const q=me[ue];if(q[k.id]===void 0)continue;const z=q[k.id];for(const H in z)g(z[H].object),delete z[H];delete q[k.id]}}}function A(k){for(const Z in r){const me=r[Z],ue=k.isInstancedMesh===!0?k.id:0,q=me[ue];if(q!==void 0){for(const z in q){const H=q[z];for(const $ in H)g(H[$].object),delete H[$];delete q[z]}delete me[ue],Object.keys(me).length===0&&delete r[Z]}}}function U(){X(),u=!0,c!==o&&(c=o,h(c.object))}function X(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:d,reset:U,resetDefaultState:X,dispose:N,releaseStatesOfGeometry:L,releaseStatesOfObject:A,releaseStatesOfProgram:B,initAttributes:R,enableAttribute:y,disableUnusedAttributes:O}}function ZT(a,e,i){let r;function o(m){r=m}function c(m,h){a.drawArrays(r,m,h),i.update(h,r,1)}function u(m,h,g){g!==0&&(a.drawArraysInstanced(r,m,h,g),i.update(h,r,g))}function d(m,h,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,h,0,g);let _=0;for(let M=0;M<g;M++)_+=h[M];i.update(_,r,1)}this.setMode=o,this.render=c,this.renderInstances=u,this.renderMultiDraw=d}function KT(a,e,i,r){let o;function c(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const B=e.get("EXT_texture_filter_anisotropic");o=a.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(B){return!(B!==oa&&r.convert(B)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(B){const A=B===is&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(B!==Xi&&r.convert(B)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_TYPE)&&B!==Ma&&!A)}function m(B){if(B==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=i.precision!==void 0?i.precision:"highp";const g=m(h);g!==h&&(ot("WebGLRenderer:",h,"not supported, using",g,"instead."),h=g);const v=i.logarithmicDepthBuffer===!0,_=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control");i.reversedDepthBuffer===!0&&_===!1&&ot("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const M=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),b=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=a.getParameter(a.MAX_TEXTURE_SIZE),y=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),x=a.getParameter(a.MAX_VERTEX_ATTRIBS),O=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),P=a.getParameter(a.MAX_VARYING_VECTORS),C=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),N=a.getParameter(a.MAX_SAMPLES),L=a.getParameter(a.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:u,textureTypeReadable:d,precision:h,logarithmicDepthBuffer:v,reversedDepthBuffer:_,maxTextures:M,maxVertexTextures:b,maxTextureSize:R,maxCubemapSize:y,maxAttributes:x,maxVertexUniforms:O,maxVaryings:P,maxFragmentUniforms:C,maxSamples:N,samples:L}}function QT(a){const e=this;let i=null,r=0,o=!1,c=!1;const u=new vr,d=new ft,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(v,_){const M=v.length!==0||_||r!==0||o;return o=_,r=v.length,M},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(v,_){i=g(v,_,0)},this.setState=function(v,_,M){const b=v.clippingPlanes,R=v.clipIntersection,y=v.clipShadows,x=a.get(v);if(!o||b===null||b.length===0||c&&!y)c?g(null):h();else{const O=c?0:r,P=O*4;let C=x.clippingState||null;m.value=C,C=g(b,_,P,M);for(let N=0;N!==P;++N)C[N]=i[N];x.clippingState=C,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=O}};function h(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function g(v,_,M,b){const R=v!==null?v.length:0;let y=null;if(R!==0){if(y=m.value,b!==!0||y===null){const x=M+R*4,O=_.matrixWorldInverse;d.getNormalMatrix(O),(y===null||y.length<x)&&(y=new Float32Array(x));for(let P=0,C=M;P!==R;++P,C+=4)u.copy(v[P]).applyMatrix4(O,d),u.normal.toArray(y,C),y[C+3]=u.constant}m.value=y,m.needsUpdate=!0}return e.numPlanes=R,e.numIntersection=0,y}}const Vs=4,_v=[.125,.215,.35,.446,.526,.582],Mr=20,JT=256,Al=new Hx,vv=new Gt;let bh=null,Th=0,Ah=0,Rh=!1;const $T=new ie;class xv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,r=.1,o=100,c={}){const{size:u=256,position:d=$T}=c;bh=this._renderer.getRenderTarget(),Th=this._renderer.getActiveCubeFace(),Ah=this._renderer.getActiveMipmapLevel(),Rh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,r,o,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=yv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Mv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(bh,Th,Ah),this._renderer.xr.enabled=Rh,e.scissorTest=!1,Mo(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===br||e.mapping===wo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),bh=this._renderer.getRenderTarget(),Th=this._renderer.getActiveCubeFace(),Ah=this._renderer.getActiveMipmapLevel(),Rh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:hn,minFilter:hn,generateMipmaps:!1,type:is,format:oa,colorSpace:Du,depthBuffer:!1},o=Sv(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Sv(e,i,r);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=eA(c)),this._blurMaterial=nA(c,e,i),this._ggxMaterial=tA(c,e,i)}return o}_compileMaterial(e){const i=new Ri(new Yi,e);this._renderer.compile(i,Al)}_sceneToCubeUV(e,i,r,o,c){const m=new ki(90,1,i,r),h=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],v=this._renderer,_=v.autoClear,M=v.toneMapping;v.getClearColor(vv),v.toneMapping=Ea,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(o),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ri(new kl,new Ou({name:"PMREM.Background",side:pi,depthWrite:!1,depthTest:!1})));const R=this._backgroundBox,y=R.material;let x=!1;const O=e.background;O?O.isColor&&(y.color.copy(O),e.background=null,x=!0):(y.color.copy(vv),x=!0);for(let P=0;P<6;P++){const C=P%3;C===0?(m.up.set(0,h[P],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+g[P],c.y,c.z)):C===1?(m.up.set(0,0,h[P]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+g[P],c.z)):(m.up.set(0,h[P],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+g[P]));const N=this._cubeSize;Mo(o,C*N,P>2?N:0,N,N),v.setRenderTarget(o),x&&v.render(R,m),v.render(e,m)}v.toneMapping=M,v.autoClear=_,e.background=O}_textureToCubeUV(e,i){const r=this._renderer,o=e.mapping===br||e.mapping===wo;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=yv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Mv());const c=o?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=c;const d=c.uniforms;d.envMap.value=e;const m=this._cubeSize;Mo(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(u,Al)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const o=this._lodMeshes.length;for(let c=1;c<o;c++)this._applyGGXFilter(e,c-1,c);i.autoClear=r}_applyGGXFilter(e,i,r){const o=this._renderer,c=this._pingPongRenderTarget,u=this._ggxMaterial,d=this._lodMeshes[r];d.material=u;const m=u.uniforms,h=r/(this._lodMeshes.length-1),g=i/(this._lodMeshes.length-1),v=Math.sqrt(h*h-g*g),_=0+h*1.25,M=v*_,{_lodMax:b}=this,R=this._sizeLods[r],y=3*R*(r>b-Vs?r-b+Vs:0),x=4*(this._cubeSize-R);m.envMap.value=e.texture,m.roughness.value=M,m.mipInt.value=b-i,Mo(c,y,x,3*R,2*R),o.setRenderTarget(c),o.render(d,Al),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=b-r,Mo(e,y,x,3*R,2*R),o.setRenderTarget(e),o.render(d,Al)}_blur(e,i,r,o,c){const u=this._pingPongRenderTarget;this._halfBlur(e,u,i,r,o,"latitudinal",c),this._halfBlur(u,e,r,r,o,"longitudinal",c)}_halfBlur(e,i,r,o,c,u,d){const m=this._renderer,h=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&Lt("blur direction must be either latitudinal or longitudinal!");const g=3,v=this._lodMeshes[o];v.material=h;const _=h.uniforms,M=this._sizeLods[r]-1,b=isFinite(c)?Math.PI/(2*M):2*Math.PI/(2*Mr-1),R=c/b,y=isFinite(c)?1+Math.floor(g*R):Mr;y>Mr&&ot(`sigmaRadians, ${c}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Mr}`);const x=[];let O=0;for(let B=0;B<Mr;++B){const A=B/R,U=Math.exp(-A*A/2);x.push(U),B===0?O+=U:B<y&&(O+=2*U)}for(let B=0;B<x.length;B++)x[B]=x[B]/O;_.envMap.value=e.texture,_.samples.value=y,_.weights.value=x,_.latitudinal.value=u==="latitudinal",d&&(_.poleAxis.value=d);const{_lodMax:P}=this;_.dTheta.value=b,_.mipInt.value=P-r;const C=this._sizeLods[o],N=3*C*(o>P-Vs?o-P+Vs:0),L=4*(this._cubeSize-C);Mo(i,N,L,3*C,2*C),m.setRenderTarget(i),m.render(v,Al)}}function eA(a){const e=[],i=[],r=[];let o=a;const c=a-Vs+1+_v.length;for(let u=0;u<c;u++){const d=Math.pow(2,o);e.push(d);let m=1/d;u>a-Vs?m=_v[u-a+Vs-1]:u===0&&(m=0),i.push(m);const h=1/(d-2),g=-h,v=1+h,_=[g,g,v,g,v,v,g,g,v,v,g,v],M=6,b=6,R=3,y=2,x=1,O=new Float32Array(R*b*M),P=new Float32Array(y*b*M),C=new Float32Array(x*b*M);for(let L=0;L<M;L++){const B=L%3*2/3-1,A=L>2?0:-1,U=[B,A,0,B+2/3,A,0,B+2/3,A+1,0,B,A,0,B+2/3,A+1,0,B,A+1,0];O.set(U,R*b*L),P.set(_,y*b*L);const X=[L,L,L,L,L,L];C.set(X,x*b*L)}const N=new Yi;N.setAttribute("position",new Ta(O,R)),N.setAttribute("uv",new Ta(P,y)),N.setAttribute("faceIndex",new Ta(C,x)),r.push(new Ri(N,null)),o>Vs&&o--}return{lodMeshes:r,sizeLods:e,sigmas:i}}function Sv(a,e,i){const r=new ba(a,e,i);return r.texture.mapping=Bu,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Mo(a,e,i,r,o){a.viewport.set(e,i,r,o),a.scissor.set(e,i,r,o)}function tA(a,e,i){return new qi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:JT,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Hu(),fragmentShader:`

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
		`,blending:es,depthTest:!1,depthWrite:!1})}function nA(a,e,i){const r=new Float32Array(Mr),o=new ie(0,1,0);return new qi({name:"SphericalGaussianBlur",defines:{n:Mr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Hu(),fragmentShader:`

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
		`,blending:es,depthTest:!1,depthWrite:!1})}function Mv(){return new qi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Hu(),fragmentShader:`

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
		`,blending:es,depthTest:!1,depthWrite:!1})}function yv(){return new qi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Hu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:es,depthTest:!1,depthWrite:!1})}function Hu(){return`

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
	`}class kx extends ba{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new Px(o),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new kl(5,5,5),c=new qi({name:"CubemapFromEquirect",uniforms:Lo(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:pi,blending:es});c.uniforms.tEquirect.value=i;const u=new Ri(o,c),d=i.minFilter;return i.minFilter===Hs&&(i.minFilter=hn),new lb(1,10,this).update(e,u),i.minFilter=d,u.geometry.dispose(),u.material.dispose(),this}clear(e,i=!0,r=!0,o=!0){const c=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(i,r,o);e.setRenderTarget(c)}}function iA(a){let e=new WeakMap,i=new WeakMap,r=null;function o(_,M=!1){return _==null?null:M?u(_):c(_)}function c(_){if(_&&_.isTexture){const M=_.mapping;if(M===Kd||M===Qd)if(e.has(_)){const b=e.get(_).texture;return d(b,_.mapping)}else{const b=_.image;if(b&&b.height>0){const R=new kx(b.height);return R.fromEquirectangularTexture(a,_),e.set(_,R),_.addEventListener("dispose",h),d(R.texture,_.mapping)}else return null}}return _}function u(_){if(_&&_.isTexture){const M=_.mapping,b=M===Kd||M===Qd,R=M===br||M===wo;if(b||R){let y=i.get(_);const x=y!==void 0?y.texture.pmremVersion:0;if(_.isRenderTargetTexture&&_.pmremVersion!==x)return r===null&&(r=new xv(a)),y=b?r.fromEquirectangular(_,y):r.fromCubemap(_,y),y.texture.pmremVersion=_.pmremVersion,i.set(_,y),y.texture;if(y!==void 0)return y.texture;{const O=_.image;return b&&O&&O.height>0||R&&O&&m(O)?(r===null&&(r=new xv(a)),y=b?r.fromEquirectangular(_):r.fromCubemap(_),y.texture.pmremVersion=_.pmremVersion,i.set(_,y),_.addEventListener("dispose",g),y.texture):null}}}return _}function d(_,M){return M===Kd?_.mapping=br:M===Qd&&(_.mapping=wo),_}function m(_){let M=0;const b=6;for(let R=0;R<b;R++)_[R]!==void 0&&M++;return M===b}function h(_){const M=_.target;M.removeEventListener("dispose",h);const b=e.get(M);b!==void 0&&(e.delete(M),b.dispose())}function g(_){const M=_.target;M.removeEventListener("dispose",g);const b=i.get(M);b!==void 0&&(i.delete(M),b.dispose())}function v(){e=new WeakMap,i=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:o,dispose:v}}function aA(a){const e={};function i(r){if(e[r]!==void 0)return e[r];const o=a.getExtension(r);return e[r]=o,o}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const o=i(r);return o===null&&bo("WebGLRenderer: "+r+" extension not supported."),o}}}function sA(a,e,i,r){const o={},c=new WeakMap;function u(v){const _=v.target;_.index!==null&&e.remove(_.index);for(const b in _.attributes)e.remove(_.attributes[b]);_.removeEventListener("dispose",u),delete o[_.id];const M=c.get(_);M&&(e.remove(M),c.delete(_)),r.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,i.memory.geometries--}function d(v,_){return o[_.id]===!0||(_.addEventListener("dispose",u),o[_.id]=!0,i.memory.geometries++),_}function m(v){const _=v.attributes;for(const M in _)e.update(_[M],a.ARRAY_BUFFER)}function h(v){const _=[],M=v.index,b=v.attributes.position;let R=0;if(b===void 0)return;if(M!==null){const O=M.array;R=M.version;for(let P=0,C=O.length;P<C;P+=3){const N=O[P+0],L=O[P+1],B=O[P+2];_.push(N,L,L,B,B,N)}}else{const O=b.array;R=b.version;for(let P=0,C=O.length/3-1;P<C;P+=3){const N=P+0,L=P+1,B=P+2;_.push(N,L,L,B,B,N)}}const y=new(b.count>=65535?Ux:Nx)(_,1);y.version=R;const x=c.get(v);x&&e.remove(x),c.set(v,y)}function g(v){const _=c.get(v);if(_){const M=v.index;M!==null&&_.version<M.version&&h(v)}else h(v);return c.get(v)}return{get:d,update:m,getWireframeAttribute:g}}function rA(a,e,i){let r;function o(v){r=v}let c,u;function d(v){c=v.type,u=v.bytesPerElement}function m(v,_){a.drawElements(r,_,c,v*u),i.update(_,r,1)}function h(v,_,M){M!==0&&(a.drawElementsInstanced(r,_,c,v*u,M),i.update(_,r,M))}function g(v,_,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,_,0,c,v,0,M);let R=0;for(let y=0;y<M;y++)R+=_[y];i.update(R,r,1)}this.setMode=o,this.setIndex=d,this.render=m,this.renderInstances=h,this.renderMultiDraw=g}function oA(a){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,u,d){switch(i.calls++,u){case a.TRIANGLES:i.triangles+=d*(c/3);break;case a.LINES:i.lines+=d*(c/2);break;case a.LINE_STRIP:i.lines+=d*(c-1);break;case a.LINE_LOOP:i.lines+=d*c;break;case a.POINTS:i.points+=d*c;break;default:Lt("WebGLInfo: Unknown draw mode:",u);break}}function o(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:o,update:r}}function lA(a,e,i){const r=new WeakMap,o=new Mn;function c(u,d,m){const h=u.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,v=g!==void 0?g.length:0;let _=r.get(d);if(_===void 0||_.count!==v){let X=function(){A.dispose(),r.delete(d),d.removeEventListener("dispose",X)};var M=X;_!==void 0&&_.texture.dispose();const b=d.morphAttributes.position!==void 0,R=d.morphAttributes.normal!==void 0,y=d.morphAttributes.color!==void 0,x=d.morphAttributes.position||[],O=d.morphAttributes.normal||[],P=d.morphAttributes.color||[];let C=0;b===!0&&(C=1),R===!0&&(C=2),y===!0&&(C=3);let N=d.attributes.position.count*C,L=1;N>e.maxTextureSize&&(L=Math.ceil(N/e.maxTextureSize),N=e.maxTextureSize);const B=new Float32Array(N*L*4*v),A=new wx(B,N,L,v);A.type=Ma,A.needsUpdate=!0;const U=C*4;for(let k=0;k<v;k++){const Z=x[k],me=O[k],ue=P[k],q=N*L*4*k;for(let z=0;z<Z.count;z++){const H=z*U;b===!0&&(o.fromBufferAttribute(Z,z),B[q+H+0]=o.x,B[q+H+1]=o.y,B[q+H+2]=o.z,B[q+H+3]=0),R===!0&&(o.fromBufferAttribute(me,z),B[q+H+4]=o.x,B[q+H+5]=o.y,B[q+H+6]=o.z,B[q+H+7]=0),y===!0&&(o.fromBufferAttribute(ue,z),B[q+H+8]=o.x,B[q+H+9]=o.y,B[q+H+10]=o.z,B[q+H+11]=ue.itemSize===4?o.w:1)}}_={count:v,texture:A,size:new It(N,L)},r.set(d,_),d.addEventListener("dispose",X)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)m.getUniforms().setValue(a,"morphTexture",u.morphTexture,i);else{let b=0;for(let y=0;y<h.length;y++)b+=h[y];const R=d.morphTargetsRelative?1:1-b;m.getUniforms().setValue(a,"morphTargetBaseInfluence",R),m.getUniforms().setValue(a,"morphTargetInfluences",h)}m.getUniforms().setValue(a,"morphTargetsTexture",_.texture,i),m.getUniforms().setValue(a,"morphTargetsTextureSize",_.size)}return{update:c}}function cA(a,e,i,r,o){let c=new WeakMap;function u(h){const g=o.render.frame,v=h.geometry,_=e.get(h,v);if(c.get(_)!==g&&(e.update(_),c.set(_,g)),h.isInstancedMesh&&(h.hasEventListener("dispose",m)===!1&&h.addEventListener("dispose",m),c.get(h)!==g&&(i.update(h.instanceMatrix,a.ARRAY_BUFFER),h.instanceColor!==null&&i.update(h.instanceColor,a.ARRAY_BUFFER),c.set(h,g))),h.isSkinnedMesh){const M=h.skeleton;c.get(M)!==g&&(M.update(),c.set(M,g))}return _}function d(){c=new WeakMap}function m(h){const g=h.target;g.removeEventListener("dispose",m),r.releaseStatesOfObject(g),i.remove(g.instanceMatrix),g.instanceColor!==null&&i.remove(g.instanceColor)}return{update:u,dispose:d}}const uA={[hx]:"LINEAR_TONE_MAPPING",[px]:"REINHARD_TONE_MAPPING",[mx]:"CINEON_TONE_MAPPING",[gx]:"ACES_FILMIC_TONE_MAPPING",[vx]:"AGX_TONE_MAPPING",[xx]:"NEUTRAL_TONE_MAPPING",[_x]:"CUSTOM_TONE_MAPPING"};function fA(a,e,i,r,o,c){const u=new ba(e,i,{type:a,depthBuffer:o,stencilBuffer:c,samples:r?4:0,depthTexture:o?new Do(e,i):void 0}),d=new ba(e,i,{type:is,depthBuffer:!1,stencilBuffer:!1}),m=new Yi;m.setAttribute("position",new Wi([-1,3,0,-1,-1,0,3,-1,0],3)),m.setAttribute("uv",new Wi([0,2,0,0,2,0],2));const h=new sb({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),g=new Ri(m,h),v=new Hx(-1,1,1,-1,0,1);let _=null,M=null,b=!1,R,y=null,x=[],O=!1;this.setSize=function(P,C){u.setSize(P,C),d.setSize(P,C);for(let N=0;N<x.length;N++){const L=x[N];L.setSize&&L.setSize(P,C)}},this.setEffects=function(P){x=P,O=x.length>0&&x[0].isRenderPass===!0;const C=u.width,N=u.height;for(let L=0;L<x.length;L++){const B=x[L];B.setSize&&B.setSize(C,N)}},this.begin=function(P,C){if(b||P.toneMapping===Ea&&x.length===0)return!1;if(y=C,C!==null){const N=C.width,L=C.height;(u.width!==N||u.height!==L)&&this.setSize(N,L)}return O===!1&&P.setRenderTarget(u),R=P.toneMapping,P.toneMapping=Ea,!0},this.hasRenderPass=function(){return O},this.end=function(P,C){P.toneMapping=R,b=!0;let N=u,L=d;for(let B=0;B<x.length;B++){const A=x[B];if(A.enabled!==!1&&(A.render(P,L,N,C),A.needsSwap!==!1)){const U=N;N=L,L=U}}if(_!==P.outputColorSpace||M!==P.toneMapping){_=P.outputColorSpace,M=P.toneMapping,h.defines={},Ct.getTransfer(_)===Wt&&(h.defines.SRGB_TRANSFER="");const B=uA[M];B&&(h.defines[B]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=N.texture,P.setRenderTarget(y),P.render(g,v),y=null,b=!1},this.isCompositing=function(){return b},this.dispose=function(){u.depthTexture&&u.depthTexture.dispose(),u.dispose(),d.dispose(),m.dispose(),h.dispose()}}const Xx=new jn,Tp=new Do(1,1),Wx=new wx,Yx=new NE,qx=new Px,Ev=[],bv=[],Tv=new Float32Array(16),Av=new Float32Array(9),Rv=new Float32Array(4);function Oo(a,e,i){const r=a[0];if(r<=0||r>0)return a;const o=e*i;let c=Ev[o];if(c===void 0&&(c=new Float32Array(o),Ev[o]=c),e!==0){r.toArray(c,0);for(let u=1,d=0;u!==e;++u)d+=i,a[u].toArray(c,d)}return c}function On(a,e){if(a.length!==e.length)return!1;for(let i=0,r=a.length;i<r;i++)if(a[i]!==e[i])return!1;return!0}function Pn(a,e){for(let i=0,r=e.length;i<r;i++)a[i]=e[i]}function Gu(a,e){let i=bv[e];i===void 0&&(i=new Int32Array(e),bv[e]=i);for(let r=0;r!==e;++r)i[r]=a.allocateTextureUnit();return i}function dA(a,e){const i=this.cache;i[0]!==e&&(a.uniform1f(this.addr,e),i[0]=e)}function hA(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(On(i,e))return;a.uniform2fv(this.addr,e),Pn(i,e)}}function pA(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(On(i,e))return;a.uniform3fv(this.addr,e),Pn(i,e)}}function mA(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(On(i,e))return;a.uniform4fv(this.addr,e),Pn(i,e)}}function gA(a,e){const i=this.cache,r=e.elements;if(r===void 0){if(On(i,e))return;a.uniformMatrix2fv(this.addr,!1,e),Pn(i,e)}else{if(On(i,r))return;Rv.set(r),a.uniformMatrix2fv(this.addr,!1,Rv),Pn(i,r)}}function _A(a,e){const i=this.cache,r=e.elements;if(r===void 0){if(On(i,e))return;a.uniformMatrix3fv(this.addr,!1,e),Pn(i,e)}else{if(On(i,r))return;Av.set(r),a.uniformMatrix3fv(this.addr,!1,Av),Pn(i,r)}}function vA(a,e){const i=this.cache,r=e.elements;if(r===void 0){if(On(i,e))return;a.uniformMatrix4fv(this.addr,!1,e),Pn(i,e)}else{if(On(i,r))return;Tv.set(r),a.uniformMatrix4fv(this.addr,!1,Tv),Pn(i,r)}}function xA(a,e){const i=this.cache;i[0]!==e&&(a.uniform1i(this.addr,e),i[0]=e)}function SA(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(a.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(On(i,e))return;a.uniform2iv(this.addr,e),Pn(i,e)}}function MA(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(a.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(On(i,e))return;a.uniform3iv(this.addr,e),Pn(i,e)}}function yA(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(On(i,e))return;a.uniform4iv(this.addr,e),Pn(i,e)}}function EA(a,e){const i=this.cache;i[0]!==e&&(a.uniform1ui(this.addr,e),i[0]=e)}function bA(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(a.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(On(i,e))return;a.uniform2uiv(this.addr,e),Pn(i,e)}}function TA(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(a.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(On(i,e))return;a.uniform3uiv(this.addr,e),Pn(i,e)}}function AA(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(On(i,e))return;a.uniform4uiv(this.addr,e),Pn(i,e)}}function RA(a,e,i){const r=this.cache,o=i.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o);let c;this.type===a.SAMPLER_2D_SHADOW?(Tp.compareFunction=i.isReversedDepthBuffer()?Bp:Fp,c=Tp):c=Xx,i.setTexture2D(e||c,o)}function CA(a,e,i){const r=this.cache,o=i.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o),i.setTexture3D(e||Yx,o)}function wA(a,e,i){const r=this.cache,o=i.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o),i.setTextureCube(e||qx,o)}function DA(a,e,i){const r=this.cache,o=i.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o),i.setTexture2DArray(e||Wx,o)}function LA(a){switch(a){case 5126:return dA;case 35664:return hA;case 35665:return pA;case 35666:return mA;case 35674:return gA;case 35675:return _A;case 35676:return vA;case 5124:case 35670:return xA;case 35667:case 35671:return SA;case 35668:case 35672:return MA;case 35669:case 35673:return yA;case 5125:return EA;case 36294:return bA;case 36295:return TA;case 36296:return AA;case 35678:case 36198:case 36298:case 36306:case 35682:return RA;case 35679:case 36299:case 36307:return CA;case 35680:case 36300:case 36308:case 36293:return wA;case 36289:case 36303:case 36311:case 36292:return DA}}function NA(a,e){a.uniform1fv(this.addr,e)}function UA(a,e){const i=Oo(e,this.size,2);a.uniform2fv(this.addr,i)}function OA(a,e){const i=Oo(e,this.size,3);a.uniform3fv(this.addr,i)}function PA(a,e){const i=Oo(e,this.size,4);a.uniform4fv(this.addr,i)}function IA(a,e){const i=Oo(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,i)}function FA(a,e){const i=Oo(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,i)}function BA(a,e){const i=Oo(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,i)}function zA(a,e){a.uniform1iv(this.addr,e)}function HA(a,e){a.uniform2iv(this.addr,e)}function GA(a,e){a.uniform3iv(this.addr,e)}function VA(a,e){a.uniform4iv(this.addr,e)}function kA(a,e){a.uniform1uiv(this.addr,e)}function XA(a,e){a.uniform2uiv(this.addr,e)}function WA(a,e){a.uniform3uiv(this.addr,e)}function YA(a,e){a.uniform4uiv(this.addr,e)}function qA(a,e,i){const r=this.cache,o=e.length,c=Gu(i,o);On(r,c)||(a.uniform1iv(this.addr,c),Pn(r,c));let u;this.type===a.SAMPLER_2D_SHADOW?u=Tp:u=Xx;for(let d=0;d!==o;++d)i.setTexture2D(e[d]||u,c[d])}function jA(a,e,i){const r=this.cache,o=e.length,c=Gu(i,o);On(r,c)||(a.uniform1iv(this.addr,c),Pn(r,c));for(let u=0;u!==o;++u)i.setTexture3D(e[u]||Yx,c[u])}function ZA(a,e,i){const r=this.cache,o=e.length,c=Gu(i,o);On(r,c)||(a.uniform1iv(this.addr,c),Pn(r,c));for(let u=0;u!==o;++u)i.setTextureCube(e[u]||qx,c[u])}function KA(a,e,i){const r=this.cache,o=e.length,c=Gu(i,o);On(r,c)||(a.uniform1iv(this.addr,c),Pn(r,c));for(let u=0;u!==o;++u)i.setTexture2DArray(e[u]||Wx,c[u])}function QA(a){switch(a){case 5126:return NA;case 35664:return UA;case 35665:return OA;case 35666:return PA;case 35674:return IA;case 35675:return FA;case 35676:return BA;case 5124:case 35670:return zA;case 35667:case 35671:return HA;case 35668:case 35672:return GA;case 35669:case 35673:return VA;case 5125:return kA;case 36294:return XA;case 36295:return WA;case 36296:return YA;case 35678:case 36198:case 36298:case 36306:case 35682:return qA;case 35679:case 36299:case 36307:return jA;case 35680:case 36300:case 36308:case 36293:return ZA;case 36289:case 36303:case 36311:case 36292:return KA}}class JA{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=LA(i.type)}}class $A{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=QA(i.type)}}class e2{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const o=this.seq;for(let c=0,u=o.length;c!==u;++c){const d=o[c];d.setValue(e,i[d.id],r)}}}const Ch=/(\w+)(\])?(\[|\.)?/g;function Cv(a,e){a.seq.push(e),a.map[e.id]=e}function t2(a,e,i){const r=a.name,o=r.length;for(Ch.lastIndex=0;;){const c=Ch.exec(r),u=Ch.lastIndex;let d=c[1];const m=c[2]==="]",h=c[3];if(m&&(d=d|0),h===void 0||h==="["&&u+2===o){Cv(i,h===void 0?new JA(d,a,e):new $A(d,a,e));break}else{let v=i.map[d];v===void 0&&(v=new e2(d),Cv(i,v)),i=v}}}class Au{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let u=0;u<r;++u){const d=e.getActiveUniform(i,u),m=e.getUniformLocation(i,d.name);t2(d,m,this)}const o=[],c=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(u):c.push(u);o.length>0&&(this.seq=o.concat(c))}setValue(e,i,r,o){const c=this.map[i];c!==void 0&&c.setValue(e,r,o)}setOptional(e,i,r){const o=i[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,i,r,o){for(let c=0,u=i.length;c!==u;++c){const d=i[c],m=r[d.id];m.needsUpdate!==!1&&d.setValue(e,m.value,o)}}static seqWithValue(e,i){const r=[];for(let o=0,c=e.length;o!==c;++o){const u=e[o];u.id in i&&r.push(u)}return r}}function wv(a,e,i){const r=a.createShader(e);return a.shaderSource(r,i),a.compileShader(r),r}const n2=37297;let i2=0;function a2(a,e){const i=a.split(`
`),r=[],o=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let u=o;u<c;u++){const d=u+1;r.push(`${d===e?">":" "} ${d}: ${i[u]}`)}return r.join(`
`)}const Dv=new ft;function s2(a){Ct._getMatrix(Dv,Ct.workingColorSpace,a);const e=`mat3( ${Dv.elements.map(i=>i.toFixed(4))} )`;switch(Ct.getTransfer(a)){case Lu:return[e,"LinearTransferOETF"];case Wt:return[e,"sRGBTransferOETF"];default:return ot("WebGLProgram: Unsupported color space: ",a),[e,"LinearTransferOETF"]}}function Lv(a,e,i){const r=a.getShaderParameter(e,a.COMPILE_STATUS),c=(a.getShaderInfoLog(e)||"").trim();if(r&&c==="")return"";const u=/ERROR: 0:(\d+)/.exec(c);if(u){const d=parseInt(u[1]);return i.toUpperCase()+`

`+c+`

`+a2(a.getShaderSource(e),d)}else return c}function r2(a,e){const i=s2(e);return[`vec4 ${a}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const o2={[hx]:"Linear",[px]:"Reinhard",[mx]:"Cineon",[gx]:"ACESFilmic",[vx]:"AgX",[xx]:"Neutral",[_x]:"Custom"};function l2(a,e){const i=o2[e];return i===void 0?(ot("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+a+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+a+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const xu=new ie;function c2(){Ct.getLuminanceCoefficients(xu);const a=xu.x.toFixed(4),e=xu.y.toFixed(4),i=xu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${a}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function u2(a){return[a.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",a.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Dl).join(`
`)}function f2(a){const e=[];for(const i in a){const r=a[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function d2(a,e){const i={},r=a.getProgramParameter(e,a.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const c=a.getActiveAttrib(e,o),u=c.name;let d=1;c.type===a.FLOAT_MAT2&&(d=2),c.type===a.FLOAT_MAT3&&(d=3),c.type===a.FLOAT_MAT4&&(d=4),i[u]={type:c.type,location:a.getAttribLocation(e,u),locationSize:d}}return i}function Dl(a){return a!==""}function Nv(a,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Uv(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const h2=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ap(a){return a.replace(h2,m2)}const p2=new Map;function m2(a,e){let i=gt[e];if(i===void 0){const r=p2.get(e);if(r!==void 0)i=gt[r],ot('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Ap(i)}const g2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ov(a){return a.replace(g2,_2)}function _2(a,e,i,r){let o="";for(let c=parseInt(e);c<parseInt(i);c++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return o}function Pv(a){let e=`precision ${a.precision} float;
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
#define LOW_PRECISION`),e}const v2={[Mu]:"SHADOWMAP_TYPE_PCF",[Cl]:"SHADOWMAP_TYPE_VSM"};function x2(a){return v2[a.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const S2={[br]:"ENVMAP_TYPE_CUBE",[wo]:"ENVMAP_TYPE_CUBE",[Bu]:"ENVMAP_TYPE_CUBE_UV"};function M2(a){return a.envMap===!1?"ENVMAP_TYPE_CUBE":S2[a.envMapMode]||"ENVMAP_TYPE_CUBE"}const y2={[wo]:"ENVMAP_MODE_REFRACTION"};function E2(a){return a.envMap===!1?"ENVMAP_MODE_REFLECTION":y2[a.envMapMode]||"ENVMAP_MODE_REFLECTION"}const b2={[dx]:"ENVMAP_BLENDING_MULTIPLY",[Ky]:"ENVMAP_BLENDING_MIX",[Qy]:"ENVMAP_BLENDING_ADD"};function T2(a){return a.envMap===!1?"ENVMAP_BLENDING_NONE":b2[a.combine]||"ENVMAP_BLENDING_NONE"}function A2(a){const e=a.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function R2(a,e,i,r){const o=a.getContext(),c=i.defines;let u=i.vertexShader,d=i.fragmentShader;const m=x2(i),h=M2(i),g=E2(i),v=T2(i),_=A2(i),M=u2(i),b=f2(c),R=o.createProgram();let y,x,O=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Dl).join(`
`),y.length>0&&(y+=`
`),x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Dl).join(`
`),x.length>0&&(x+=`
`)):(y=[Pv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Dl).join(`
`),x=[Pv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+h:"",i.envMap?"#define "+g:"",i.envMap?"#define "+v:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Ea?"#define TONE_MAPPING":"",i.toneMapping!==Ea?gt.tonemapping_pars_fragment:"",i.toneMapping!==Ea?l2("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",gt.colorspace_pars_fragment,r2("linearToOutputTexel",i.outputColorSpace),c2(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Dl).join(`
`)),u=Ap(u),u=Nv(u,i),u=Uv(u,i),d=Ap(d),d=Nv(d,i),d=Uv(d,i),u=Ov(u),d=Ov(d),i.isRawShaderMaterial!==!0&&(O=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,x=["#define varying in",i.glslVersion===Y_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Y_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const P=O+y+u,C=O+x+d,N=wv(o,o.VERTEX_SHADER,P),L=wv(o,o.FRAGMENT_SHADER,C);o.attachShader(R,N),o.attachShader(R,L),i.index0AttributeName!==void 0?o.bindAttribLocation(R,0,i.index0AttributeName):i.hasPositionAttribute===!0&&o.bindAttribLocation(R,0,"position"),o.linkProgram(R);function B(k){if(a.debug.checkShaderErrors){const Z=o.getProgramInfoLog(R)||"",me=o.getShaderInfoLog(N)||"",ue=o.getShaderInfoLog(L)||"",q=Z.trim(),z=me.trim(),H=ue.trim();let $=!0,he=!0;if(o.getProgramParameter(R,o.LINK_STATUS)===!1)if($=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(o,R,N,L);else{const Se=Lv(o,N,"vertex"),I=Lv(o,L,"fragment");Lt("WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(R,o.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+q+`
`+Se+`
`+I)}else q!==""?ot("WebGLProgram: Program Info Log:",q):(z===""||H==="")&&(he=!1);he&&(k.diagnostics={runnable:$,programLog:q,vertexShader:{log:z,prefix:y},fragmentShader:{log:H,prefix:x}})}o.deleteShader(N),o.deleteShader(L),A=new Au(o,R),U=d2(o,R)}let A;this.getUniforms=function(){return A===void 0&&B(this),A};let U;this.getAttributes=function(){return U===void 0&&B(this),U};let X=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return X===!1&&(X=o.getProgramParameter(R,n2)),X},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(R),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=i2++,this.cacheKey=e,this.usedTimes=1,this.program=R,this.vertexShader=N,this.fragmentShader=L,this}let C2=0;class w2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,i,r){const o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new D2(e),i.set(e,r)),r}}class D2{constructor(e){this.id=C2++,this.code=e,this.usedTimes=0}}function L2(a){return a===Tr||a===Cu||a===wu}function N2(a,e,i,r,o,c){const u=new Dx,d=new w2,m=new Set,h=[],g=new Map,v=r.logarithmicDepthBuffer;let _=r.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(A){return m.add(A),A===0?"uv":`uv${A}`}function R(A,U,X,k,Z,me){const ue=k.fog,q=Z.geometry,z=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?k.environment:null,H=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap,$=e.get(A.envMap||z,H),he=$&&$.mapping===Bu?$.image.height:null,Se=M[A.type];A.precision!==null&&(_=r.getMaxPrecision(A.precision),_!==A.precision&&ot("WebGLProgram.getParameters:",A.precision,"not supported, using",_,"instead."));const I=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,K=I!==void 0?I.length:0;let Te=0;q.morphAttributes.position!==void 0&&(Te=1),q.morphAttributes.normal!==void 0&&(Te=2),q.morphAttributes.color!==void 0&&(Te=3);let Ae,De,ae,Me;if(Se){const Ze=xa[Se];Ae=Ze.vertexShader,De=Ze.fragmentShader}else{Ae=A.vertexShader,De=A.fragmentShader;const Ze=d.getVertexShaderStage(A),nn=d.getFragmentShaderStage(A);d.update(A,Ze,nn),ae=Ze.id,Me=nn.id}const ge=a.getRenderTarget(),We=a.state.buffers.depth.getReversed(),nt=Z.isInstancedMesh===!0,Qe=Z.isBatchedMesh===!0,vt=!!A.map,ht=!!A.matcap,xt=!!$,at=!!A.aoMap,ct=!!A.lightMap,Qt=!!A.bumpMap&&A.wireframe===!1,Jt=!!A.normalMap,qt=!!A.displacementMap,tn=!!A.emissiveMap,Vt=!!A.metalnessMap,rn=!!A.roughnessMap,j=A.anisotropy>0,Tt=A.clearcoat>0,At=A.dispersion>0,F=A.iridescence>0,E=A.sheen>0,J=A.transmission>0,re=j&&!!A.anisotropyMap,le=Tt&&!!A.clearcoatMap,Ce=Tt&&!!A.clearcoatNormalMap,Le=Tt&&!!A.clearcoatRoughnessMap,pe=F&&!!A.iridescenceMap,fe=F&&!!A.iridescenceThicknessMap,we=E&&!!A.sheenColorMap,Ge=E&&!!A.sheenRoughnessMap,Fe=!!A.specularMap,Ie=!!A.specularColorMap,$e=!!A.specularIntensityMap,tt=J&&!!A.transmissionMap,rt=J&&!!A.thicknessMap,W=!!A.gradientMap,Ne=!!A.alphaMap,ve=A.alphaTest>0,Oe=!!A.alphaHash,Pe=!!A.extensions;let Ee=Ea;A.toneMapped&&(ge===null||ge.isXRRenderTarget===!0)&&(Ee=a.toneMapping);const Ve={shaderID:Se,shaderType:A.type,shaderName:A.name,vertexShader:Ae,fragmentShader:De,defines:A.defines,customVertexShaderID:ae,customFragmentShaderID:Me,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:_,batching:Qe,batchingColor:Qe&&Z._colorsTexture!==null,instancing:nt,instancingColor:nt&&Z.instanceColor!==null,instancingMorph:nt&&Z.morphTexture!==null,outputColorSpace:ge===null?a.outputColorSpace:ge.isXRRenderTarget===!0?ge.texture.colorSpace:Ct.workingColorSpace,alphaToCoverage:!!A.alphaToCoverage,map:vt,matcap:ht,envMap:xt,envMapMode:xt&&$.mapping,envMapCubeUVHeight:he,aoMap:at,lightMap:ct,bumpMap:Qt,normalMap:Jt,displacementMap:qt,emissiveMap:tn,normalMapObjectSpace:Jt&&A.normalMapType===eE,normalMapTangentSpace:Jt&&A.normalMapType===k_,packedNormalMap:Jt&&A.normalMapType===k_&&L2(A.normalMap.format),metalnessMap:Vt,roughnessMap:rn,anisotropy:j,anisotropyMap:re,clearcoat:Tt,clearcoatMap:le,clearcoatNormalMap:Ce,clearcoatRoughnessMap:Le,dispersion:At,iridescence:F,iridescenceMap:pe,iridescenceThicknessMap:fe,sheen:E,sheenColorMap:we,sheenRoughnessMap:Ge,specularMap:Fe,specularColorMap:Ie,specularIntensityMap:$e,transmission:J,transmissionMap:tt,thicknessMap:rt,gradientMap:W,opaque:A.transparent===!1&&A.blending===Eo&&A.alphaToCoverage===!1,alphaMap:Ne,alphaTest:ve,alphaHash:Oe,combine:A.combine,mapUv:vt&&b(A.map.channel),aoMapUv:at&&b(A.aoMap.channel),lightMapUv:ct&&b(A.lightMap.channel),bumpMapUv:Qt&&b(A.bumpMap.channel),normalMapUv:Jt&&b(A.normalMap.channel),displacementMapUv:qt&&b(A.displacementMap.channel),emissiveMapUv:tn&&b(A.emissiveMap.channel),metalnessMapUv:Vt&&b(A.metalnessMap.channel),roughnessMapUv:rn&&b(A.roughnessMap.channel),anisotropyMapUv:re&&b(A.anisotropyMap.channel),clearcoatMapUv:le&&b(A.clearcoatMap.channel),clearcoatNormalMapUv:Ce&&b(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Le&&b(A.clearcoatRoughnessMap.channel),iridescenceMapUv:pe&&b(A.iridescenceMap.channel),iridescenceThicknessMapUv:fe&&b(A.iridescenceThicknessMap.channel),sheenColorMapUv:we&&b(A.sheenColorMap.channel),sheenRoughnessMapUv:Ge&&b(A.sheenRoughnessMap.channel),specularMapUv:Fe&&b(A.specularMap.channel),specularColorMapUv:Ie&&b(A.specularColorMap.channel),specularIntensityMapUv:$e&&b(A.specularIntensityMap.channel),transmissionMapUv:tt&&b(A.transmissionMap.channel),thicknessMapUv:rt&&b(A.thicknessMap.channel),alphaMapUv:Ne&&b(A.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(Jt||j),vertexNormals:!!q.attributes.normal,vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:Z.isPoints===!0&&!!q.attributes.uv&&(vt||Ne),fog:!!ue,useFog:A.fog===!0,fogExp2:!!ue&&ue.isFogExp2,flatShading:A.wireframe===!1&&(A.flatShading===!0||q.attributes.normal===void 0&&Jt===!1&&(A.isMeshLambertMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isMeshPhysicalMaterial)),sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:We,skinning:Z.isSkinnedMesh===!0,hasPositionAttribute:q.attributes.position!==void 0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:Te,numDirLights:U.directional.length,numPointLights:U.point.length,numSpotLights:U.spot.length,numSpotLightMaps:U.spotLightMap.length,numRectAreaLights:U.rectArea.length,numHemiLights:U.hemi.length,numDirLightShadows:U.directionalShadowMap.length,numPointLightShadows:U.pointShadowMap.length,numSpotLightShadows:U.spotShadowMap.length,numSpotLightShadowsWithMaps:U.numSpotLightShadowsWithMaps,numLightProbes:U.numLightProbes,numLightProbeGrids:me.length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:A.dithering,shadowMapEnabled:a.shadowMap.enabled&&X.length>0,shadowMapType:a.shadowMap.type,toneMapping:Ee,decodeVideoTexture:vt&&A.map.isVideoTexture===!0&&Ct.getTransfer(A.map.colorSpace)===Wt,decodeVideoTextureEmissive:tn&&A.emissiveMap.isVideoTexture===!0&&Ct.getTransfer(A.emissiveMap.colorSpace)===Wt,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===Sa,flipSided:A.side===pi,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:Pe&&A.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Pe&&A.extensions.multiDraw===!0||Qe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return Ve.vertexUv1s=m.has(1),Ve.vertexUv2s=m.has(2),Ve.vertexUv3s=m.has(3),m.clear(),Ve}function y(A){const U=[];if(A.shaderID?U.push(A.shaderID):(U.push(A.customVertexShaderID),U.push(A.customFragmentShaderID)),A.defines!==void 0)for(const X in A.defines)U.push(X),U.push(A.defines[X]);return A.isRawShaderMaterial===!1&&(x(U,A),O(U,A),U.push(a.outputColorSpace)),U.push(A.customProgramCacheKey),U.join()}function x(A,U){A.push(U.precision),A.push(U.outputColorSpace),A.push(U.envMapMode),A.push(U.envMapCubeUVHeight),A.push(U.mapUv),A.push(U.alphaMapUv),A.push(U.lightMapUv),A.push(U.aoMapUv),A.push(U.bumpMapUv),A.push(U.normalMapUv),A.push(U.displacementMapUv),A.push(U.emissiveMapUv),A.push(U.metalnessMapUv),A.push(U.roughnessMapUv),A.push(U.anisotropyMapUv),A.push(U.clearcoatMapUv),A.push(U.clearcoatNormalMapUv),A.push(U.clearcoatRoughnessMapUv),A.push(U.iridescenceMapUv),A.push(U.iridescenceThicknessMapUv),A.push(U.sheenColorMapUv),A.push(U.sheenRoughnessMapUv),A.push(U.specularMapUv),A.push(U.specularColorMapUv),A.push(U.specularIntensityMapUv),A.push(U.transmissionMapUv),A.push(U.thicknessMapUv),A.push(U.combine),A.push(U.fogExp2),A.push(U.sizeAttenuation),A.push(U.morphTargetsCount),A.push(U.morphAttributeCount),A.push(U.numDirLights),A.push(U.numPointLights),A.push(U.numSpotLights),A.push(U.numSpotLightMaps),A.push(U.numHemiLights),A.push(U.numRectAreaLights),A.push(U.numDirLightShadows),A.push(U.numPointLightShadows),A.push(U.numSpotLightShadows),A.push(U.numSpotLightShadowsWithMaps),A.push(U.numLightProbes),A.push(U.shadowMapType),A.push(U.toneMapping),A.push(U.numClippingPlanes),A.push(U.numClipIntersection),A.push(U.depthPacking)}function O(A,U){u.disableAll(),U.instancing&&u.enable(0),U.instancingColor&&u.enable(1),U.instancingMorph&&u.enable(2),U.matcap&&u.enable(3),U.envMap&&u.enable(4),U.normalMapObjectSpace&&u.enable(5),U.normalMapTangentSpace&&u.enable(6),U.clearcoat&&u.enable(7),U.iridescence&&u.enable(8),U.alphaTest&&u.enable(9),U.vertexColors&&u.enable(10),U.vertexAlphas&&u.enable(11),U.vertexUv1s&&u.enable(12),U.vertexUv2s&&u.enable(13),U.vertexUv3s&&u.enable(14),U.vertexTangents&&u.enable(15),U.anisotropy&&u.enable(16),U.alphaHash&&u.enable(17),U.batching&&u.enable(18),U.dispersion&&u.enable(19),U.batchingColor&&u.enable(20),U.gradientMap&&u.enable(21),U.packedNormalMap&&u.enable(22),U.vertexNormals&&u.enable(23),A.push(u.mask),u.disableAll(),U.fog&&u.enable(0),U.useFog&&u.enable(1),U.flatShading&&u.enable(2),U.logarithmicDepthBuffer&&u.enable(3),U.reversedDepthBuffer&&u.enable(4),U.skinning&&u.enable(5),U.morphTargets&&u.enable(6),U.morphNormals&&u.enable(7),U.morphColors&&u.enable(8),U.premultipliedAlpha&&u.enable(9),U.shadowMapEnabled&&u.enable(10),U.doubleSided&&u.enable(11),U.flipSided&&u.enable(12),U.useDepthPacking&&u.enable(13),U.dithering&&u.enable(14),U.transmission&&u.enable(15),U.sheen&&u.enable(16),U.opaque&&u.enable(17),U.pointsUvs&&u.enable(18),U.decodeVideoTexture&&u.enable(19),U.decodeVideoTextureEmissive&&u.enable(20),U.alphaToCoverage&&u.enable(21),U.numLightProbeGrids>0&&u.enable(22),U.hasPositionAttribute&&u.enable(23),A.push(u.mask)}function P(A){const U=M[A.type];let X;if(U){const k=xa[U];X=nb.clone(k.uniforms)}else X=A.uniforms;return X}function C(A,U){let X=g.get(U);return X!==void 0?++X.usedTimes:(X=new R2(a,U,A,o),h.push(X),g.set(U,X)),X}function N(A){if(--A.usedTimes===0){const U=h.indexOf(A);h[U]=h[h.length-1],h.pop(),g.delete(A.cacheKey),A.destroy()}}function L(A){d.remove(A)}function B(){d.dispose()}return{getParameters:R,getProgramCacheKey:y,getUniforms:P,acquireProgram:C,releaseProgram:N,releaseShaderCache:L,programs:h,dispose:B}}function U2(){let a=new WeakMap;function e(u){return a.has(u)}function i(u){let d=a.get(u);return d===void 0&&(d={},a.set(u,d)),d}function r(u){a.delete(u)}function o(u,d,m){a.get(u)[d]=m}function c(){a=new WeakMap}return{has:e,get:i,remove:r,update:o,dispose:c}}function O2(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.materialVariant!==e.materialVariant?a.materialVariant-e.materialVariant:a.z!==e.z?a.z-e.z:a.id-e.id}function Iv(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function Fv(){const a=[];let e=0;const i=[],r=[],o=[];function c(){e=0,i.length=0,r.length=0,o.length=0}function u(_){let M=0;return _.isInstancedMesh&&(M+=2),_.isSkinnedMesh&&(M+=1),M}function d(_,M,b,R,y,x){let O=a[e];return O===void 0?(O={id:_.id,object:_,geometry:M,material:b,materialVariant:u(_),groupOrder:R,renderOrder:_.renderOrder,z:y,group:x},a[e]=O):(O.id=_.id,O.object=_,O.geometry=M,O.material=b,O.materialVariant=u(_),O.groupOrder=R,O.renderOrder=_.renderOrder,O.z=y,O.group=x),e++,O}function m(_,M,b,R,y,x){const O=d(_,M,b,R,y,x);b.transmission>0?r.push(O):b.transparent===!0?o.push(O):i.push(O)}function h(_,M,b,R,y,x){const O=d(_,M,b,R,y,x);b.transmission>0?r.unshift(O):b.transparent===!0?o.unshift(O):i.unshift(O)}function g(_,M,b){i.length>1&&i.sort(_||O2),r.length>1&&r.sort(M||Iv),o.length>1&&o.sort(M||Iv),b&&(i.reverse(),r.reverse(),o.reverse())}function v(){for(let _=e,M=a.length;_<M;_++){const b=a[_];if(b.id===null)break;b.id=null,b.object=null,b.geometry=null,b.material=null,b.group=null}}return{opaque:i,transmissive:r,transparent:o,init:c,push:m,unshift:h,finish:v,sort:g}}function P2(){let a=new WeakMap;function e(r,o){const c=a.get(r);let u;return c===void 0?(u=new Fv,a.set(r,[u])):o>=c.length?(u=new Fv,c.push(u)):u=c[o],u}function i(){a=new WeakMap}return{get:e,dispose:i}}function I2(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new ie,color:new Gt};break;case"SpotLight":i={position:new ie,direction:new ie,color:new Gt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new ie,color:new Gt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new ie,skyColor:new Gt,groundColor:new Gt};break;case"RectAreaLight":i={color:new Gt,position:new ie,halfWidth:new ie,halfHeight:new ie};break}return a[e.id]=i,i}}}function F2(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=i,i}}}let B2=0;function z2(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function H2(a){const e=new I2,i=F2(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new ie);const o=new ie,c=new bn,u=new bn;function d(h){let g=0,v=0,_=0;for(let U=0;U<9;U++)r.probe[U].set(0,0,0);let M=0,b=0,R=0,y=0,x=0,O=0,P=0,C=0,N=0,L=0,B=0;h.sort(z2);for(let U=0,X=h.length;U<X;U++){const k=h[U],Z=k.color,me=k.intensity,ue=k.distance;let q=null;if(k.shadow&&k.shadow.map&&(k.shadow.map.texture.format===Tr?q=k.shadow.map.texture:q=k.shadow.map.depthTexture||k.shadow.map.texture),k.isAmbientLight)g+=Z.r*me,v+=Z.g*me,_+=Z.b*me;else if(k.isLightProbe){for(let z=0;z<9;z++)r.probe[z].addScaledVector(k.sh.coefficients[z],me);B++}else if(k.isDirectionalLight){const z=e.get(k);if(z.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const H=k.shadow,$=i.get(k);$.shadowIntensity=H.intensity,$.shadowBias=H.bias,$.shadowNormalBias=H.normalBias,$.shadowRadius=H.radius,$.shadowMapSize=H.mapSize,r.directionalShadow[M]=$,r.directionalShadowMap[M]=q,r.directionalShadowMatrix[M]=k.shadow.matrix,O++}r.directional[M]=z,M++}else if(k.isSpotLight){const z=e.get(k);z.position.setFromMatrixPosition(k.matrixWorld),z.color.copy(Z).multiplyScalar(me),z.distance=ue,z.coneCos=Math.cos(k.angle),z.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),z.decay=k.decay,r.spot[R]=z;const H=k.shadow;if(k.map&&(r.spotLightMap[N]=k.map,N++,H.updateMatrices(k),k.castShadow&&L++),r.spotLightMatrix[R]=H.matrix,k.castShadow){const $=i.get(k);$.shadowIntensity=H.intensity,$.shadowBias=H.bias,$.shadowNormalBias=H.normalBias,$.shadowRadius=H.radius,$.shadowMapSize=H.mapSize,r.spotShadow[R]=$,r.spotShadowMap[R]=q,C++}R++}else if(k.isRectAreaLight){const z=e.get(k);z.color.copy(Z).multiplyScalar(me),z.halfWidth.set(k.width*.5,0,0),z.halfHeight.set(0,k.height*.5,0),r.rectArea[y]=z,y++}else if(k.isPointLight){const z=e.get(k);if(z.color.copy(k.color).multiplyScalar(k.intensity),z.distance=k.distance,z.decay=k.decay,k.castShadow){const H=k.shadow,$=i.get(k);$.shadowIntensity=H.intensity,$.shadowBias=H.bias,$.shadowNormalBias=H.normalBias,$.shadowRadius=H.radius,$.shadowMapSize=H.mapSize,$.shadowCameraNear=H.camera.near,$.shadowCameraFar=H.camera.far,r.pointShadow[b]=$,r.pointShadowMap[b]=q,r.pointShadowMatrix[b]=k.shadow.matrix,P++}r.point[b]=z,b++}else if(k.isHemisphereLight){const z=e.get(k);z.skyColor.copy(k.color).multiplyScalar(me),z.groundColor.copy(k.groundColor).multiplyScalar(me),r.hemi[x]=z,x++}}y>0&&(a.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=qe.LTC_FLOAT_1,r.rectAreaLTC2=qe.LTC_FLOAT_2):(r.rectAreaLTC1=qe.LTC_HALF_1,r.rectAreaLTC2=qe.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=v,r.ambient[2]=_;const A=r.hash;(A.directionalLength!==M||A.pointLength!==b||A.spotLength!==R||A.rectAreaLength!==y||A.hemiLength!==x||A.numDirectionalShadows!==O||A.numPointShadows!==P||A.numSpotShadows!==C||A.numSpotMaps!==N||A.numLightProbes!==B)&&(r.directional.length=M,r.spot.length=R,r.rectArea.length=y,r.point.length=b,r.hemi.length=x,r.directionalShadow.length=O,r.directionalShadowMap.length=O,r.pointShadow.length=P,r.pointShadowMap.length=P,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=O,r.pointShadowMatrix.length=P,r.spotLightMatrix.length=C+N-L,r.spotLightMap.length=N,r.numSpotLightShadowsWithMaps=L,r.numLightProbes=B,A.directionalLength=M,A.pointLength=b,A.spotLength=R,A.rectAreaLength=y,A.hemiLength=x,A.numDirectionalShadows=O,A.numPointShadows=P,A.numSpotShadows=C,A.numSpotMaps=N,A.numLightProbes=B,r.version=B2++)}function m(h,g){let v=0,_=0,M=0,b=0,R=0;const y=g.matrixWorldInverse;for(let x=0,O=h.length;x<O;x++){const P=h[x];if(P.isDirectionalLight){const C=r.directional[v];C.direction.setFromMatrixPosition(P.matrixWorld),o.setFromMatrixPosition(P.target.matrixWorld),C.direction.sub(o),C.direction.transformDirection(y),v++}else if(P.isSpotLight){const C=r.spot[M];C.position.setFromMatrixPosition(P.matrixWorld),C.position.applyMatrix4(y),C.direction.setFromMatrixPosition(P.matrixWorld),o.setFromMatrixPosition(P.target.matrixWorld),C.direction.sub(o),C.direction.transformDirection(y),M++}else if(P.isRectAreaLight){const C=r.rectArea[b];C.position.setFromMatrixPosition(P.matrixWorld),C.position.applyMatrix4(y),u.identity(),c.copy(P.matrixWorld),c.premultiply(y),u.extractRotation(c),C.halfWidth.set(P.width*.5,0,0),C.halfHeight.set(0,P.height*.5,0),C.halfWidth.applyMatrix4(u),C.halfHeight.applyMatrix4(u),b++}else if(P.isPointLight){const C=r.point[_];C.position.setFromMatrixPosition(P.matrixWorld),C.position.applyMatrix4(y),_++}else if(P.isHemisphereLight){const C=r.hemi[R];C.direction.setFromMatrixPosition(P.matrixWorld),C.direction.transformDirection(y),R++}}}return{setup:d,setupView:m,state:r}}function Bv(a){const e=new H2(a),i=[],r=[],o=[];function c(_){v.camera=_,i.length=0,r.length=0,o.length=0}function u(_){i.push(_)}function d(_){r.push(_)}function m(_){o.push(_)}function h(){e.setup(i)}function g(_){e.setupView(i,_)}const v={lightsArray:i,shadowsArray:r,lightProbeGridArray:o,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:v,setupLights:h,setupLightsView:g,pushLight:u,pushShadow:d,pushLightProbeGrid:m}}function G2(a){let e=new WeakMap;function i(o,c=0){const u=e.get(o);let d;return u===void 0?(d=new Bv(a),e.set(o,[d])):c>=u.length?(d=new Bv(a),u.push(d)):d=u[c],d}function r(){e=new WeakMap}return{get:i,dispose:r}}const V2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,k2=`uniform sampler2D shadow_pass;
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
}`,X2=[new ie(1,0,0),new ie(-1,0,0),new ie(0,1,0),new ie(0,-1,0),new ie(0,0,1),new ie(0,0,-1)],W2=[new ie(0,-1,0),new ie(0,-1,0),new ie(0,0,1),new ie(0,0,-1),new ie(0,-1,0),new ie(0,-1,0)],zv=new bn,Rl=new ie,wh=new ie;function Y2(a,e,i){let r=new Ox;const o=new It,c=new It,u=new Mn,d=new rb,m=new ob,h={},g=i.maxTextureSize,v={[ns]:pi,[pi]:ns,[Sa]:Sa},_=new qi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new It},radius:{value:4}},vertexShader:V2,fragmentShader:k2}),M=_.clone();M.defines.HORIZONTAL_PASS=1;const b=new Yi;b.setAttribute("position",new Ta(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new Ri(b,_),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Mu;let x=this.type;this.render=function(L,B,A){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||L.length===0)return;this.type===Ly&&(ot("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Mu);const U=a.getRenderTarget(),X=a.getActiveCubeFace(),k=a.getActiveMipmapLevel(),Z=a.state;Z.setBlending(es),Z.buffers.depth.getReversed()===!0?Z.buffers.color.setClear(0,0,0,0):Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);const me=x!==this.type;me&&B.traverse(function(ue){ue.material&&(Array.isArray(ue.material)?ue.material.forEach(q=>q.needsUpdate=!0):ue.material.needsUpdate=!0)});for(let ue=0,q=L.length;ue<q;ue++){const z=L[ue],H=z.shadow;if(H===void 0){ot("WebGLShadowMap:",z,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;o.copy(H.mapSize);const $=H.getFrameExtents();o.multiply($),c.copy(H.mapSize),(o.x>g||o.y>g)&&(o.x>g&&(c.x=Math.floor(g/$.x),o.x=c.x*$.x,H.mapSize.x=c.x),o.y>g&&(c.y=Math.floor(g/$.y),o.y=c.y*$.y,H.mapSize.y=c.y));const he=a.state.buffers.depth.getReversed();if(H.camera._reversedDepth=he,H.map===null||me===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===Cl){if(z.isPointLight){ot("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new ba(o.x,o.y,{format:Tr,type:is,minFilter:hn,magFilter:hn,generateMipmaps:!1}),H.map.texture.name=z.name+".shadowMap",H.map.depthTexture=new Do(o.x,o.y,Ma),H.map.depthTexture.name=z.name+".shadowMapDepth",H.map.depthTexture.format=as,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=qn,H.map.depthTexture.magFilter=qn}else z.isPointLight?(H.map=new kx(o.x),H.map.depthTexture=new JE(o.x,Aa)):(H.map=new ba(o.x,o.y),H.map.depthTexture=new Do(o.x,o.y,Aa)),H.map.depthTexture.name=z.name+".shadowMap",H.map.depthTexture.format=as,this.type===Mu?(H.map.depthTexture.compareFunction=he?Bp:Fp,H.map.depthTexture.minFilter=hn,H.map.depthTexture.magFilter=hn):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=qn,H.map.depthTexture.magFilter=qn);H.camera.updateProjectionMatrix()}const Se=H.map.isWebGLCubeRenderTarget?6:1;for(let I=0;I<Se;I++){if(H.map.isWebGLCubeRenderTarget)a.setRenderTarget(H.map,I),a.clear();else{I===0&&(a.setRenderTarget(H.map),a.clear());const K=H.getViewport(I);u.set(c.x*K.x,c.y*K.y,c.x*K.z,c.y*K.w),Z.viewport(u)}if(z.isPointLight){const K=H.camera,Te=H.matrix,Ae=z.distance||K.far;Ae!==K.far&&(K.far=Ae,K.updateProjectionMatrix()),Rl.setFromMatrixPosition(z.matrixWorld),K.position.copy(Rl),wh.copy(K.position),wh.add(X2[I]),K.up.copy(W2[I]),K.lookAt(wh),K.updateMatrixWorld(),Te.makeTranslation(-Rl.x,-Rl.y,-Rl.z),zv.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),H._frustum.setFromProjectionMatrix(zv,K.coordinateSystem,K.reversedDepth)}else H.updateMatrices(z);r=H.getFrustum(),C(B,A,H.camera,z,this.type)}H.isPointLightShadow!==!0&&this.type===Cl&&O(H,A),H.needsUpdate=!1}x=this.type,y.needsUpdate=!1,a.setRenderTarget(U,X,k)};function O(L,B){const A=e.update(R);_.defines.VSM_SAMPLES!==L.blurSamples&&(_.defines.VSM_SAMPLES=L.blurSamples,M.defines.VSM_SAMPLES=L.blurSamples,_.needsUpdate=!0,M.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new ba(o.x,o.y,{format:Tr,type:is})),_.uniforms.shadow_pass.value=L.map.depthTexture,_.uniforms.resolution.value=L.mapSize,_.uniforms.radius.value=L.radius,a.setRenderTarget(L.mapPass),a.clear(),a.renderBufferDirect(B,null,A,_,R,null),M.uniforms.shadow_pass.value=L.mapPass.texture,M.uniforms.resolution.value=L.mapSize,M.uniforms.radius.value=L.radius,a.setRenderTarget(L.map),a.clear(),a.renderBufferDirect(B,null,A,M,R,null)}function P(L,B,A,U){let X=null;const k=A.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(k!==void 0)X=k;else if(X=A.isPointLight===!0?m:d,a.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0||B.alphaToCoverage===!0){const Z=X.uuid,me=B.uuid;let ue=h[Z];ue===void 0&&(ue={},h[Z]=ue);let q=ue[me];q===void 0&&(q=X.clone(),ue[me]=q,B.addEventListener("dispose",N)),X=q}if(X.visible=B.visible,X.wireframe=B.wireframe,U===Cl?X.side=B.shadowSide!==null?B.shadowSide:B.side:X.side=B.shadowSide!==null?B.shadowSide:v[B.side],X.alphaMap=B.alphaMap,X.alphaTest=B.alphaToCoverage===!0?.5:B.alphaTest,X.map=B.map,X.clipShadows=B.clipShadows,X.clippingPlanes=B.clippingPlanes,X.clipIntersection=B.clipIntersection,X.displacementMap=B.displacementMap,X.displacementScale=B.displacementScale,X.displacementBias=B.displacementBias,X.wireframeLinewidth=B.wireframeLinewidth,X.linewidth=B.linewidth,A.isPointLight===!0&&X.isMeshDistanceMaterial===!0){const Z=a.properties.get(X);Z.light=A}return X}function C(L,B,A,U,X){if(L.visible===!1)return;if(L.layers.test(B.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&X===Cl)&&(!L.frustumCulled||r.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,L.matrixWorld);const me=e.update(L),ue=L.material;if(Array.isArray(ue)){const q=me.groups;for(let z=0,H=q.length;z<H;z++){const $=q[z],he=ue[$.materialIndex];if(he&&he.visible){const Se=P(L,he,U,X);L.onBeforeShadow(a,L,B,A,me,Se,$),a.renderBufferDirect(A,null,me,Se,L,$),L.onAfterShadow(a,L,B,A,me,Se,$)}}}else if(ue.visible){const q=P(L,ue,U,X);L.onBeforeShadow(a,L,B,A,me,q,null),a.renderBufferDirect(A,null,me,q,L,null),L.onAfterShadow(a,L,B,A,me,q,null)}}const Z=L.children;for(let me=0,ue=Z.length;me<ue;me++)C(Z[me],B,A,U,X)}function N(L){L.target.removeEventListener("dispose",N);for(const A in h){const U=h[A],X=L.target.uuid;X in U&&(U[X].dispose(),delete U[X])}}}function q2(a,e){function i(){let W=!1;const Ne=new Mn;let ve=null;const Oe=new Mn(0,0,0,0);return{setMask:function(Pe){ve!==Pe&&!W&&(a.colorMask(Pe,Pe,Pe,Pe),ve=Pe)},setLocked:function(Pe){W=Pe},setClear:function(Pe,Ee,Ve,Ze,nn){nn===!0&&(Pe*=Ze,Ee*=Ze,Ve*=Ze),Ne.set(Pe,Ee,Ve,Ze),Oe.equals(Ne)===!1&&(a.clearColor(Pe,Ee,Ve,Ze),Oe.copy(Ne))},reset:function(){W=!1,ve=null,Oe.set(-1,0,0,0)}}}function r(){let W=!1,Ne=!1,ve=null,Oe=null,Pe=null;return{setReversed:function(Ee){if(Ne!==Ee){const Ve=e.get("EXT_clip_control");Ee?Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.ZERO_TO_ONE_EXT):Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.NEGATIVE_ONE_TO_ONE_EXT),Ne=Ee;const Ze=Pe;Pe=null,this.setClear(Ze)}},getReversed:function(){return Ne},setTest:function(Ee){Ee?ge(a.DEPTH_TEST):We(a.DEPTH_TEST)},setMask:function(Ee){ve!==Ee&&!W&&(a.depthMask(Ee),ve=Ee)},setFunc:function(Ee){if(Ne&&(Ee=uE[Ee]),Oe!==Ee){switch(Ee){case Hh:a.depthFunc(a.NEVER);break;case Gh:a.depthFunc(a.ALWAYS);break;case Vh:a.depthFunc(a.LESS);break;case Co:a.depthFunc(a.LEQUAL);break;case kh:a.depthFunc(a.EQUAL);break;case Xh:a.depthFunc(a.GEQUAL);break;case Wh:a.depthFunc(a.GREATER);break;case Yh:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}Oe=Ee}},setLocked:function(Ee){W=Ee},setClear:function(Ee){Pe!==Ee&&(Pe=Ee,Ne&&(Ee=1-Ee),a.clearDepth(Ee))},reset:function(){W=!1,ve=null,Oe=null,Pe=null,Ne=!1}}}function o(){let W=!1,Ne=null,ve=null,Oe=null,Pe=null,Ee=null,Ve=null,Ze=null,nn=null;return{setTest:function(Dt){W||(Dt?ge(a.STENCIL_TEST):We(a.STENCIL_TEST))},setMask:function(Dt){Ne!==Dt&&!W&&(a.stencilMask(Dt),Ne=Dt)},setFunc:function(Dt,ti,In){(ve!==Dt||Oe!==ti||Pe!==In)&&(a.stencilFunc(Dt,ti,In),ve=Dt,Oe=ti,Pe=In)},setOp:function(Dt,ti,In){(Ee!==Dt||Ve!==ti||Ze!==In)&&(a.stencilOp(Dt,ti,In),Ee=Dt,Ve=ti,Ze=In)},setLocked:function(Dt){W=Dt},setClear:function(Dt){nn!==Dt&&(a.clearStencil(Dt),nn=Dt)},reset:function(){W=!1,Ne=null,ve=null,Oe=null,Pe=null,Ee=null,Ve=null,Ze=null,nn=null}}}const c=new i,u=new r,d=new o,m=new WeakMap,h=new WeakMap;let g={},v={},_={},M=new WeakMap,b=[],R=null,y=!1,x=null,O=null,P=null,C=null,N=null,L=null,B=null,A=new Gt(0,0,0),U=0,X=!1,k=null,Z=null,me=null,ue=null,q=null;const z=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,$=0;const he=a.getParameter(a.VERSION);he.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(he)[1]),H=$>=1):he.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(he)[1]),H=$>=2);let Se=null,I={};const K=a.getParameter(a.SCISSOR_BOX),Te=a.getParameter(a.VIEWPORT),Ae=new Mn().fromArray(K),De=new Mn().fromArray(Te);function ae(W,Ne,ve,Oe){const Pe=new Uint8Array(4),Ee=a.createTexture();a.bindTexture(W,Ee),a.texParameteri(W,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(W,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let Ve=0;Ve<ve;Ve++)W===a.TEXTURE_3D||W===a.TEXTURE_2D_ARRAY?a.texImage3D(Ne,0,a.RGBA,1,1,Oe,0,a.RGBA,a.UNSIGNED_BYTE,Pe):a.texImage2D(Ne+Ve,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,Pe);return Ee}const Me={};Me[a.TEXTURE_2D]=ae(a.TEXTURE_2D,a.TEXTURE_2D,1),Me[a.TEXTURE_CUBE_MAP]=ae(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),Me[a.TEXTURE_2D_ARRAY]=ae(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1),Me[a.TEXTURE_3D]=ae(a.TEXTURE_3D,a.TEXTURE_3D,1,1),c.setClear(0,0,0,1),u.setClear(1),d.setClear(0),ge(a.DEPTH_TEST),u.setFunc(Co),Qt(!1),Jt(H_),ge(a.CULL_FACE),at(es);function ge(W){g[W]!==!0&&(a.enable(W),g[W]=!0)}function We(W){g[W]!==!1&&(a.disable(W),g[W]=!1)}function nt(W,Ne){return _[W]!==Ne?(a.bindFramebuffer(W,Ne),_[W]=Ne,W===a.DRAW_FRAMEBUFFER&&(_[a.FRAMEBUFFER]=Ne),W===a.FRAMEBUFFER&&(_[a.DRAW_FRAMEBUFFER]=Ne),!0):!1}function Qe(W,Ne){let ve=b,Oe=!1;if(W){ve=M.get(Ne),ve===void 0&&(ve=[],M.set(Ne,ve));const Pe=W.textures;if(ve.length!==Pe.length||ve[0]!==a.COLOR_ATTACHMENT0){for(let Ee=0,Ve=Pe.length;Ee<Ve;Ee++)ve[Ee]=a.COLOR_ATTACHMENT0+Ee;ve.length=Pe.length,Oe=!0}}else ve[0]!==a.BACK&&(ve[0]=a.BACK,Oe=!0);Oe&&a.drawBuffers(ve)}function vt(W){return R!==W?(a.useProgram(W),R=W,!0):!1}const ht={[Sr]:a.FUNC_ADD,[Uy]:a.FUNC_SUBTRACT,[Oy]:a.FUNC_REVERSE_SUBTRACT};ht[Py]=a.MIN,ht[Iy]=a.MAX;const xt={[Fy]:a.ZERO,[By]:a.ONE,[zy]:a.SRC_COLOR,[Bh]:a.SRC_ALPHA,[Wy]:a.SRC_ALPHA_SATURATE,[ky]:a.DST_COLOR,[Gy]:a.DST_ALPHA,[Hy]:a.ONE_MINUS_SRC_COLOR,[zh]:a.ONE_MINUS_SRC_ALPHA,[Xy]:a.ONE_MINUS_DST_COLOR,[Vy]:a.ONE_MINUS_DST_ALPHA,[Yy]:a.CONSTANT_COLOR,[qy]:a.ONE_MINUS_CONSTANT_COLOR,[jy]:a.CONSTANT_ALPHA,[Zy]:a.ONE_MINUS_CONSTANT_ALPHA};function at(W,Ne,ve,Oe,Pe,Ee,Ve,Ze,nn,Dt){if(W===es){y===!0&&(We(a.BLEND),y=!1);return}if(y===!1&&(ge(a.BLEND),y=!0),W!==Ny){if(W!==x||Dt!==X){if((O!==Sr||N!==Sr)&&(a.blendEquation(a.FUNC_ADD),O=Sr,N=Sr),Dt)switch(W){case Eo:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case Fh:a.blendFunc(a.ONE,a.ONE);break;case G_:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case V_:a.blendFuncSeparate(a.DST_COLOR,a.ONE_MINUS_SRC_ALPHA,a.ZERO,a.ONE);break;default:Lt("WebGLState: Invalid blending: ",W);break}else switch(W){case Eo:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case Fh:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE,a.ONE,a.ONE);break;case G_:Lt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case V_:Lt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Lt("WebGLState: Invalid blending: ",W);break}P=null,C=null,L=null,B=null,A.set(0,0,0),U=0,x=W,X=Dt}return}Pe=Pe||Ne,Ee=Ee||ve,Ve=Ve||Oe,(Ne!==O||Pe!==N)&&(a.blendEquationSeparate(ht[Ne],ht[Pe]),O=Ne,N=Pe),(ve!==P||Oe!==C||Ee!==L||Ve!==B)&&(a.blendFuncSeparate(xt[ve],xt[Oe],xt[Ee],xt[Ve]),P=ve,C=Oe,L=Ee,B=Ve),(Ze.equals(A)===!1||nn!==U)&&(a.blendColor(Ze.r,Ze.g,Ze.b,nn),A.copy(Ze),U=nn),x=W,X=!1}function ct(W,Ne){W.side===Sa?We(a.CULL_FACE):ge(a.CULL_FACE);let ve=W.side===pi;Ne&&(ve=!ve),Qt(ve),W.blending===Eo&&W.transparent===!1?at(es):at(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),u.setFunc(W.depthFunc),u.setTest(W.depthTest),u.setMask(W.depthWrite),c.setMask(W.colorWrite);const Oe=W.stencilWrite;d.setTest(Oe),Oe&&(d.setMask(W.stencilWriteMask),d.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),d.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),tn(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?ge(a.SAMPLE_ALPHA_TO_COVERAGE):We(a.SAMPLE_ALPHA_TO_COVERAGE)}function Qt(W){k!==W&&(W?a.frontFace(a.CW):a.frontFace(a.CCW),k=W)}function Jt(W){W!==wy?(ge(a.CULL_FACE),W!==Z&&(W===H_?a.cullFace(a.BACK):W===Dy?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):We(a.CULL_FACE),Z=W}function qt(W){W!==me&&(H&&a.lineWidth(W),me=W)}function tn(W,Ne,ve){W?(ge(a.POLYGON_OFFSET_FILL),(ue!==Ne||q!==ve)&&(ue=Ne,q=ve,u.getReversed()&&(Ne=-Ne),a.polygonOffset(Ne,ve))):We(a.POLYGON_OFFSET_FILL)}function Vt(W){W?ge(a.SCISSOR_TEST):We(a.SCISSOR_TEST)}function rn(W){W===void 0&&(W=a.TEXTURE0+z-1),Se!==W&&(a.activeTexture(W),Se=W)}function j(W,Ne,ve){ve===void 0&&(Se===null?ve=a.TEXTURE0+z-1:ve=Se);let Oe=I[ve];Oe===void 0&&(Oe={type:void 0,texture:void 0},I[ve]=Oe),(Oe.type!==W||Oe.texture!==Ne)&&(Se!==ve&&(a.activeTexture(ve),Se=ve),a.bindTexture(W,Ne||Me[W]),Oe.type=W,Oe.texture=Ne)}function Tt(){const W=I[Se];W!==void 0&&W.type!==void 0&&(a.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function At(){try{a.compressedTexImage2D(...arguments)}catch(W){Lt("WebGLState:",W)}}function F(){try{a.compressedTexImage3D(...arguments)}catch(W){Lt("WebGLState:",W)}}function E(){try{a.texSubImage2D(...arguments)}catch(W){Lt("WebGLState:",W)}}function J(){try{a.texSubImage3D(...arguments)}catch(W){Lt("WebGLState:",W)}}function re(){try{a.compressedTexSubImage2D(...arguments)}catch(W){Lt("WebGLState:",W)}}function le(){try{a.compressedTexSubImage3D(...arguments)}catch(W){Lt("WebGLState:",W)}}function Ce(){try{a.texStorage2D(...arguments)}catch(W){Lt("WebGLState:",W)}}function Le(){try{a.texStorage3D(...arguments)}catch(W){Lt("WebGLState:",W)}}function pe(){try{a.texImage2D(...arguments)}catch(W){Lt("WebGLState:",W)}}function fe(){try{a.texImage3D(...arguments)}catch(W){Lt("WebGLState:",W)}}function we(W){return v[W]!==void 0?v[W]:a.getParameter(W)}function Ge(W,Ne){v[W]!==Ne&&(a.pixelStorei(W,Ne),v[W]=Ne)}function Fe(W){Ae.equals(W)===!1&&(a.scissor(W.x,W.y,W.z,W.w),Ae.copy(W))}function Ie(W){De.equals(W)===!1&&(a.viewport(W.x,W.y,W.z,W.w),De.copy(W))}function $e(W,Ne){let ve=h.get(Ne);ve===void 0&&(ve=new WeakMap,h.set(Ne,ve));let Oe=ve.get(W);Oe===void 0&&(Oe=a.getUniformBlockIndex(Ne,W.name),ve.set(W,Oe))}function tt(W,Ne){const Oe=h.get(Ne).get(W);m.get(Ne)!==Oe&&(a.uniformBlockBinding(Ne,Oe,W.__bindingPointIndex),m.set(Ne,Oe))}function rt(){a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.DEPTH_TEST),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SCISSOR_TEST),a.disable(a.STENCIL_TEST),a.disable(a.SAMPLE_ALPHA_TO_COVERAGE),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ONE,a.ZERO),a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO),a.blendColor(0,0,0,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(a.LESS),u.setReversed(!1),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(a.ALWAYS,0,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.clearStencil(0),a.cullFace(a.BACK),a.frontFace(a.CCW),a.polygonOffset(0,0),a.activeTexture(a.TEXTURE0),a.bindFramebuffer(a.FRAMEBUFFER,null),a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,null),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),a.pixelStorei(a.PACK_ALIGNMENT,4),a.pixelStorei(a.UNPACK_ALIGNMENT,4),a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,!1),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,a.BROWSER_DEFAULT_WEBGL),a.pixelStorei(a.PACK_ROW_LENGTH,0),a.pixelStorei(a.PACK_SKIP_PIXELS,0),a.pixelStorei(a.PACK_SKIP_ROWS,0),a.pixelStorei(a.UNPACK_ROW_LENGTH,0),a.pixelStorei(a.UNPACK_IMAGE_HEIGHT,0),a.pixelStorei(a.UNPACK_SKIP_PIXELS,0),a.pixelStorei(a.UNPACK_SKIP_ROWS,0),a.pixelStorei(a.UNPACK_SKIP_IMAGES,0),g={},v={},Se=null,I={},_={},M=new WeakMap,b=[],R=null,y=!1,x=null,O=null,P=null,C=null,N=null,L=null,B=null,A=new Gt(0,0,0),U=0,X=!1,k=null,Z=null,me=null,ue=null,q=null,Ae.set(0,0,a.canvas.width,a.canvas.height),De.set(0,0,a.canvas.width,a.canvas.height),c.reset(),u.reset(),d.reset()}return{buffers:{color:c,depth:u,stencil:d},enable:ge,disable:We,bindFramebuffer:nt,drawBuffers:Qe,useProgram:vt,setBlending:at,setMaterial:ct,setFlipSided:Qt,setCullFace:Jt,setLineWidth:qt,setPolygonOffset:tn,setScissorTest:Vt,activeTexture:rn,bindTexture:j,unbindTexture:Tt,compressedTexImage2D:At,compressedTexImage3D:F,texImage2D:pe,texImage3D:fe,pixelStorei:Ge,getParameter:we,updateUBOMapping:$e,uniformBlockBinding:tt,texStorage2D:Ce,texStorage3D:Le,texSubImage2D:E,texSubImage3D:J,compressedTexSubImage2D:re,compressedTexSubImage3D:le,scissor:Fe,viewport:Ie,reset:rt}}function j2(a,e,i,r,o,c,u){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new It,g=new WeakMap,v=new Set;let _;const M=new WeakMap;let b=!1;try{b=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function R(F,E){return b?new OffscreenCanvas(F,E):Uu("canvas")}function y(F,E,J){let re=1;const le=At(F);if((le.width>J||le.height>J)&&(re=J/Math.max(le.width,le.height)),re<1)if(typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&F instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&F instanceof ImageBitmap||typeof VideoFrame<"u"&&F instanceof VideoFrame){const Ce=Math.floor(re*le.width),Le=Math.floor(re*le.height);_===void 0&&(_=R(Ce,Le));const pe=E?R(Ce,Le):_;return pe.width=Ce,pe.height=Le,pe.getContext("2d").drawImage(F,0,0,Ce,Le),ot("WebGLRenderer: Texture has been resized from ("+le.width+"x"+le.height+") to ("+Ce+"x"+Le+")."),pe}else return"data"in F&&ot("WebGLRenderer: Image in DataTexture is too big ("+le.width+"x"+le.height+")."),F;return F}function x(F){return F.generateMipmaps}function O(F){a.generateMipmap(F)}function P(F){return F.isWebGLCubeRenderTarget?a.TEXTURE_CUBE_MAP:F.isWebGL3DRenderTarget?a.TEXTURE_3D:F.isWebGLArrayRenderTarget||F.isCompressedArrayTexture?a.TEXTURE_2D_ARRAY:a.TEXTURE_2D}function C(F,E,J,re,le,Ce=!1){if(F!==null){if(a[F]!==void 0)return a[F];ot("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let Le;re&&(Le=e.get("EXT_texture_norm16"),Le||ot("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let pe=E;if(E===a.RED&&(J===a.FLOAT&&(pe=a.R32F),J===a.HALF_FLOAT&&(pe=a.R16F),J===a.UNSIGNED_BYTE&&(pe=a.R8),J===a.UNSIGNED_SHORT&&Le&&(pe=Le.R16_EXT),J===a.SHORT&&Le&&(pe=Le.R16_SNORM_EXT)),E===a.RED_INTEGER&&(J===a.UNSIGNED_BYTE&&(pe=a.R8UI),J===a.UNSIGNED_SHORT&&(pe=a.R16UI),J===a.UNSIGNED_INT&&(pe=a.R32UI),J===a.BYTE&&(pe=a.R8I),J===a.SHORT&&(pe=a.R16I),J===a.INT&&(pe=a.R32I)),E===a.RG&&(J===a.FLOAT&&(pe=a.RG32F),J===a.HALF_FLOAT&&(pe=a.RG16F),J===a.UNSIGNED_BYTE&&(pe=a.RG8),J===a.UNSIGNED_SHORT&&Le&&(pe=Le.RG16_EXT),J===a.SHORT&&Le&&(pe=Le.RG16_SNORM_EXT)),E===a.RG_INTEGER&&(J===a.UNSIGNED_BYTE&&(pe=a.RG8UI),J===a.UNSIGNED_SHORT&&(pe=a.RG16UI),J===a.UNSIGNED_INT&&(pe=a.RG32UI),J===a.BYTE&&(pe=a.RG8I),J===a.SHORT&&(pe=a.RG16I),J===a.INT&&(pe=a.RG32I)),E===a.RGB_INTEGER&&(J===a.UNSIGNED_BYTE&&(pe=a.RGB8UI),J===a.UNSIGNED_SHORT&&(pe=a.RGB16UI),J===a.UNSIGNED_INT&&(pe=a.RGB32UI),J===a.BYTE&&(pe=a.RGB8I),J===a.SHORT&&(pe=a.RGB16I),J===a.INT&&(pe=a.RGB32I)),E===a.RGBA_INTEGER&&(J===a.UNSIGNED_BYTE&&(pe=a.RGBA8UI),J===a.UNSIGNED_SHORT&&(pe=a.RGBA16UI),J===a.UNSIGNED_INT&&(pe=a.RGBA32UI),J===a.BYTE&&(pe=a.RGBA8I),J===a.SHORT&&(pe=a.RGBA16I),J===a.INT&&(pe=a.RGBA32I)),E===a.RGB&&(J===a.UNSIGNED_SHORT&&Le&&(pe=Le.RGB16_EXT),J===a.SHORT&&Le&&(pe=Le.RGB16_SNORM_EXT),J===a.UNSIGNED_INT_5_9_9_9_REV&&(pe=a.RGB9_E5),J===a.UNSIGNED_INT_10F_11F_11F_REV&&(pe=a.R11F_G11F_B10F)),E===a.RGBA){const fe=Ce?Lu:Ct.getTransfer(le);J===a.FLOAT&&(pe=a.RGBA32F),J===a.HALF_FLOAT&&(pe=a.RGBA16F),J===a.UNSIGNED_BYTE&&(pe=fe===Wt?a.SRGB8_ALPHA8:a.RGBA8),J===a.UNSIGNED_SHORT&&Le&&(pe=Le.RGBA16_EXT),J===a.SHORT&&Le&&(pe=Le.RGBA16_SNORM_EXT),J===a.UNSIGNED_SHORT_4_4_4_4&&(pe=a.RGBA4),J===a.UNSIGNED_SHORT_5_5_5_1&&(pe=a.RGB5_A1)}return(pe===a.R16F||pe===a.R32F||pe===a.RG16F||pe===a.RG32F||pe===a.RGBA16F||pe===a.RGBA32F)&&e.get("EXT_color_buffer_float"),pe}function N(F,E){let J;return F?E===null||E===Aa||E===Bl?J=a.DEPTH24_STENCIL8:E===Ma?J=a.DEPTH32F_STENCIL8:E===Fl&&(J=a.DEPTH24_STENCIL8,ot("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Aa||E===Bl?J=a.DEPTH_COMPONENT24:E===Ma?J=a.DEPTH_COMPONENT32F:E===Fl&&(J=a.DEPTH_COMPONENT16),J}function L(F,E){return x(F)===!0||F.isFramebufferTexture&&F.minFilter!==qn&&F.minFilter!==hn?Math.log2(Math.max(E.width,E.height))+1:F.mipmaps!==void 0&&F.mipmaps.length>0?F.mipmaps.length:F.isCompressedTexture&&Array.isArray(F.image)?E.mipmaps.length:1}function B(F){const E=F.target;E.removeEventListener("dispose",B),U(E),E.isVideoTexture&&g.delete(E),E.isHTMLTexture&&v.delete(E)}function A(F){const E=F.target;E.removeEventListener("dispose",A),k(E)}function U(F){const E=r.get(F);if(E.__webglInit===void 0)return;const J=F.source,re=M.get(J);if(re){const le=re[E.__cacheKey];le.usedTimes--,le.usedTimes===0&&X(F),Object.keys(re).length===0&&M.delete(J)}r.remove(F)}function X(F){const E=r.get(F);a.deleteTexture(E.__webglTexture);const J=F.source,re=M.get(J);delete re[E.__cacheKey],u.memory.textures--}function k(F){const E=r.get(F);if(F.depthTexture&&(F.depthTexture.dispose(),r.remove(F.depthTexture)),F.isWebGLCubeRenderTarget)for(let re=0;re<6;re++){if(Array.isArray(E.__webglFramebuffer[re]))for(let le=0;le<E.__webglFramebuffer[re].length;le++)a.deleteFramebuffer(E.__webglFramebuffer[re][le]);else a.deleteFramebuffer(E.__webglFramebuffer[re]);E.__webglDepthbuffer&&a.deleteRenderbuffer(E.__webglDepthbuffer[re])}else{if(Array.isArray(E.__webglFramebuffer))for(let re=0;re<E.__webglFramebuffer.length;re++)a.deleteFramebuffer(E.__webglFramebuffer[re]);else a.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&a.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&a.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let re=0;re<E.__webglColorRenderbuffer.length;re++)E.__webglColorRenderbuffer[re]&&a.deleteRenderbuffer(E.__webglColorRenderbuffer[re]);E.__webglDepthRenderbuffer&&a.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const J=F.textures;for(let re=0,le=J.length;re<le;re++){const Ce=r.get(J[re]);Ce.__webglTexture&&(a.deleteTexture(Ce.__webglTexture),u.memory.textures--),r.remove(J[re])}r.remove(F)}let Z=0;function me(){Z=0}function ue(){return Z}function q(F){Z=F}function z(){const F=Z;return F>=o.maxTextures&&ot("WebGLTextures: Trying to use "+F+" texture units while this GPU supports only "+o.maxTextures),Z+=1,F}function H(F){const E=[];return E.push(F.wrapS),E.push(F.wrapT),E.push(F.wrapR||0),E.push(F.magFilter),E.push(F.minFilter),E.push(F.anisotropy),E.push(F.internalFormat),E.push(F.format),E.push(F.type),E.push(F.generateMipmaps),E.push(F.premultiplyAlpha),E.push(F.flipY),E.push(F.unpackAlignment),E.push(F.colorSpace),E.join()}function $(F,E){const J=r.get(F);if(F.isVideoTexture&&j(F),F.isRenderTargetTexture===!1&&F.isExternalTexture!==!0&&F.version>0&&J.__version!==F.version){const re=F.image;if(re===null)ot("WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)ot("WebGLRenderer: Texture marked for update but image is incomplete");else{We(J,F,E);return}}else F.isExternalTexture&&(J.__webglTexture=F.sourceTexture?F.sourceTexture:null);i.bindTexture(a.TEXTURE_2D,J.__webglTexture,a.TEXTURE0+E)}function he(F,E){const J=r.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&J.__version!==F.version){We(J,F,E);return}else F.isExternalTexture&&(J.__webglTexture=F.sourceTexture?F.sourceTexture:null);i.bindTexture(a.TEXTURE_2D_ARRAY,J.__webglTexture,a.TEXTURE0+E)}function Se(F,E){const J=r.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&J.__version!==F.version){We(J,F,E);return}i.bindTexture(a.TEXTURE_3D,J.__webglTexture,a.TEXTURE0+E)}function I(F,E){const J=r.get(F);if(F.isCubeDepthTexture!==!0&&F.version>0&&J.__version!==F.version){nt(J,F,E);return}i.bindTexture(a.TEXTURE_CUBE_MAP,J.__webglTexture,a.TEXTURE0+E)}const K={[qh]:a.REPEAT,[ra]:a.CLAMP_TO_EDGE,[jh]:a.MIRRORED_REPEAT},Te={[qn]:a.NEAREST,[Jy]:a.NEAREST_MIPMAP_NEAREST,[Jc]:a.NEAREST_MIPMAP_LINEAR,[hn]:a.LINEAR,[Jd]:a.LINEAR_MIPMAP_NEAREST,[Hs]:a.LINEAR_MIPMAP_LINEAR},Ae={[tE]:a.NEVER,[rE]:a.ALWAYS,[nE]:a.LESS,[Fp]:a.LEQUAL,[iE]:a.EQUAL,[Bp]:a.GEQUAL,[aE]:a.GREATER,[sE]:a.NOTEQUAL};function De(F,E){if(E.type===Ma&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===hn||E.magFilter===Jd||E.magFilter===Jc||E.magFilter===Hs||E.minFilter===hn||E.minFilter===Jd||E.minFilter===Jc||E.minFilter===Hs)&&ot("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),a.texParameteri(F,a.TEXTURE_WRAP_S,K[E.wrapS]),a.texParameteri(F,a.TEXTURE_WRAP_T,K[E.wrapT]),(F===a.TEXTURE_3D||F===a.TEXTURE_2D_ARRAY)&&a.texParameteri(F,a.TEXTURE_WRAP_R,K[E.wrapR]),a.texParameteri(F,a.TEXTURE_MAG_FILTER,Te[E.magFilter]),a.texParameteri(F,a.TEXTURE_MIN_FILTER,Te[E.minFilter]),E.compareFunction&&(a.texParameteri(F,a.TEXTURE_COMPARE_MODE,a.COMPARE_REF_TO_TEXTURE),a.texParameteri(F,a.TEXTURE_COMPARE_FUNC,Ae[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===qn||E.minFilter!==Jc&&E.minFilter!==Hs||E.type===Ma&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const J=e.get("EXT_texture_filter_anisotropic");a.texParameterf(F,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,o.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function ae(F,E){let J=!1;F.__webglInit===void 0&&(F.__webglInit=!0,E.addEventListener("dispose",B));const re=E.source;let le=M.get(re);le===void 0&&(le={},M.set(re,le));const Ce=H(E);if(Ce!==F.__cacheKey){le[Ce]===void 0&&(le[Ce]={texture:a.createTexture(),usedTimes:0},u.memory.textures++,J=!0),le[Ce].usedTimes++;const Le=le[F.__cacheKey];Le!==void 0&&(le[F.__cacheKey].usedTimes--,Le.usedTimes===0&&X(E)),F.__cacheKey=Ce,F.__webglTexture=le[Ce].texture}return J}function Me(F,E,J){return Math.floor(Math.floor(F/J)/E)}function ge(F,E,J,re){const Ce=F.updateRanges;if(Ce.length===0)i.texSubImage2D(a.TEXTURE_2D,0,0,0,E.width,E.height,J,re,E.data);else{Ce.sort((Ge,Fe)=>Ge.start-Fe.start);let Le=0;for(let Ge=1;Ge<Ce.length;Ge++){const Fe=Ce[Le],Ie=Ce[Ge],$e=Fe.start+Fe.count,tt=Me(Ie.start,E.width,4),rt=Me(Fe.start,E.width,4);Ie.start<=$e+1&&tt===rt&&Me(Ie.start+Ie.count-1,E.width,4)===tt?Fe.count=Math.max(Fe.count,Ie.start+Ie.count-Fe.start):(++Le,Ce[Le]=Ie)}Ce.length=Le+1;const pe=i.getParameter(a.UNPACK_ROW_LENGTH),fe=i.getParameter(a.UNPACK_SKIP_PIXELS),we=i.getParameter(a.UNPACK_SKIP_ROWS);i.pixelStorei(a.UNPACK_ROW_LENGTH,E.width);for(let Ge=0,Fe=Ce.length;Ge<Fe;Ge++){const Ie=Ce[Ge],$e=Math.floor(Ie.start/4),tt=Math.ceil(Ie.count/4),rt=$e%E.width,W=Math.floor($e/E.width),Ne=tt,ve=1;i.pixelStorei(a.UNPACK_SKIP_PIXELS,rt),i.pixelStorei(a.UNPACK_SKIP_ROWS,W),i.texSubImage2D(a.TEXTURE_2D,0,rt,W,Ne,ve,J,re,E.data)}F.clearUpdateRanges(),i.pixelStorei(a.UNPACK_ROW_LENGTH,pe),i.pixelStorei(a.UNPACK_SKIP_PIXELS,fe),i.pixelStorei(a.UNPACK_SKIP_ROWS,we)}}function We(F,E,J){let re=a.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(re=a.TEXTURE_2D_ARRAY),E.isData3DTexture&&(re=a.TEXTURE_3D);const le=ae(F,E),Ce=E.source;i.bindTexture(re,F.__webglTexture,a.TEXTURE0+J);const Le=r.get(Ce);if(Ce.version!==Le.__version||le===!0){if(i.activeTexture(a.TEXTURE0+J),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){const ve=Ct.getPrimaries(Ct.workingColorSpace),Oe=E.colorSpace===zs?null:Ct.getPrimaries(E.colorSpace),Pe=E.colorSpace===zs||ve===Oe?a.NONE:a.BROWSER_DEFAULT_WEBGL;i.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe)}i.pixelStorei(a.UNPACK_ALIGNMENT,E.unpackAlignment);let fe=y(E.image,!1,o.maxTextureSize);fe=Tt(E,fe);const we=c.convert(E.format,E.colorSpace),Ge=c.convert(E.type);let Fe=C(E.internalFormat,we,Ge,E.normalized,E.colorSpace,E.isVideoTexture);De(re,E);let Ie;const $e=E.mipmaps,tt=E.isVideoTexture!==!0,rt=Le.__version===void 0||le===!0,W=Ce.dataReady,Ne=L(E,fe);if(E.isDepthTexture)Fe=N(E.format===Er,E.type),rt&&(tt?i.texStorage2D(a.TEXTURE_2D,1,Fe,fe.width,fe.height):i.texImage2D(a.TEXTURE_2D,0,Fe,fe.width,fe.height,0,we,Ge,null));else if(E.isDataTexture)if($e.length>0){tt&&rt&&i.texStorage2D(a.TEXTURE_2D,Ne,Fe,$e[0].width,$e[0].height);for(let ve=0,Oe=$e.length;ve<Oe;ve++)Ie=$e[ve],tt?W&&i.texSubImage2D(a.TEXTURE_2D,ve,0,0,Ie.width,Ie.height,we,Ge,Ie.data):i.texImage2D(a.TEXTURE_2D,ve,Fe,Ie.width,Ie.height,0,we,Ge,Ie.data);E.generateMipmaps=!1}else tt?(rt&&i.texStorage2D(a.TEXTURE_2D,Ne,Fe,fe.width,fe.height),W&&ge(E,fe,we,Ge)):i.texImage2D(a.TEXTURE_2D,0,Fe,fe.width,fe.height,0,we,Ge,fe.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){tt&&rt&&i.texStorage3D(a.TEXTURE_2D_ARRAY,Ne,Fe,$e[0].width,$e[0].height,fe.depth);for(let ve=0,Oe=$e.length;ve<Oe;ve++)if(Ie=$e[ve],E.format!==oa)if(we!==null)if(tt){if(W)if(E.layerUpdates.size>0){const Pe=gv(Ie.width,Ie.height,E.format,E.type);for(const Ee of E.layerUpdates){const Ve=Ie.data.subarray(Ee*Pe/Ie.data.BYTES_PER_ELEMENT,(Ee+1)*Pe/Ie.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,ve,0,0,Ee,Ie.width,Ie.height,1,we,Ve)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,ve,0,0,0,Ie.width,Ie.height,fe.depth,we,Ie.data)}else i.compressedTexImage3D(a.TEXTURE_2D_ARRAY,ve,Fe,Ie.width,Ie.height,fe.depth,0,Ie.data,0,0);else ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else tt?W&&i.texSubImage3D(a.TEXTURE_2D_ARRAY,ve,0,0,0,Ie.width,Ie.height,fe.depth,we,Ge,Ie.data):i.texImage3D(a.TEXTURE_2D_ARRAY,ve,Fe,Ie.width,Ie.height,fe.depth,0,we,Ge,Ie.data)}else{tt&&rt&&i.texStorage2D(a.TEXTURE_2D,Ne,Fe,$e[0].width,$e[0].height);for(let ve=0,Oe=$e.length;ve<Oe;ve++)Ie=$e[ve],E.format!==oa?we!==null?tt?W&&i.compressedTexSubImage2D(a.TEXTURE_2D,ve,0,0,Ie.width,Ie.height,we,Ie.data):i.compressedTexImage2D(a.TEXTURE_2D,ve,Fe,Ie.width,Ie.height,0,Ie.data):ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):tt?W&&i.texSubImage2D(a.TEXTURE_2D,ve,0,0,Ie.width,Ie.height,we,Ge,Ie.data):i.texImage2D(a.TEXTURE_2D,ve,Fe,Ie.width,Ie.height,0,we,Ge,Ie.data)}else if(E.isDataArrayTexture)if(tt){if(rt&&i.texStorage3D(a.TEXTURE_2D_ARRAY,Ne,Fe,fe.width,fe.height,fe.depth),W)if(E.layerUpdates.size>0){const ve=gv(fe.width,fe.height,E.format,E.type);for(const Oe of E.layerUpdates){const Pe=fe.data.subarray(Oe*ve/fe.data.BYTES_PER_ELEMENT,(Oe+1)*ve/fe.data.BYTES_PER_ELEMENT);i.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,Oe,fe.width,fe.height,1,we,Ge,Pe)}E.clearLayerUpdates()}else i.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,fe.width,fe.height,fe.depth,we,Ge,fe.data)}else i.texImage3D(a.TEXTURE_2D_ARRAY,0,Fe,fe.width,fe.height,fe.depth,0,we,Ge,fe.data);else if(E.isData3DTexture)tt?(rt&&i.texStorage3D(a.TEXTURE_3D,Ne,Fe,fe.width,fe.height,fe.depth),W&&i.texSubImage3D(a.TEXTURE_3D,0,0,0,0,fe.width,fe.height,fe.depth,we,Ge,fe.data)):i.texImage3D(a.TEXTURE_3D,0,Fe,fe.width,fe.height,fe.depth,0,we,Ge,fe.data);else if(E.isFramebufferTexture){if(rt)if(tt)i.texStorage2D(a.TEXTURE_2D,Ne,Fe,fe.width,fe.height);else{let ve=fe.width,Oe=fe.height;for(let Pe=0;Pe<Ne;Pe++)i.texImage2D(a.TEXTURE_2D,Pe,Fe,ve,Oe,0,we,Ge,null),ve>>=1,Oe>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in a){const ve=a.canvas;if(ve.hasAttribute("layoutsubtree")||ve.setAttribute("layoutsubtree","true"),fe.parentNode!==ve){ve.appendChild(fe),v.add(E),ve.onpaint=Oe=>{const Pe=Oe.changedElements;for(const Ee of v)Pe.includes(Ee.image)&&(Ee.needsUpdate=!0)},ve.requestPaint();return}if(a.texElementImage2D.length===3)a.texElementImage2D(a.TEXTURE_2D,a.RGBA8,fe);else{const Pe=a.RGBA,Ee=a.RGBA,Ve=a.UNSIGNED_BYTE;a.texElementImage2D(a.TEXTURE_2D,0,Pe,Ee,Ve,fe)}a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MIN_FILTER,a.LINEAR),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE)}}else if($e.length>0){if(tt&&rt){const ve=At($e[0]);i.texStorage2D(a.TEXTURE_2D,Ne,Fe,ve.width,ve.height)}for(let ve=0,Oe=$e.length;ve<Oe;ve++)Ie=$e[ve],tt?W&&i.texSubImage2D(a.TEXTURE_2D,ve,0,0,we,Ge,Ie):i.texImage2D(a.TEXTURE_2D,ve,Fe,we,Ge,Ie);E.generateMipmaps=!1}else if(tt){if(rt){const ve=At(fe);i.texStorage2D(a.TEXTURE_2D,Ne,Fe,ve.width,ve.height)}W&&i.texSubImage2D(a.TEXTURE_2D,0,0,0,we,Ge,fe)}else i.texImage2D(a.TEXTURE_2D,0,Fe,we,Ge,fe);x(E)&&O(re),Le.__version=Ce.version,E.onUpdate&&E.onUpdate(E)}F.__version=E.version}function nt(F,E,J){if(E.image.length!==6)return;const re=ae(F,E),le=E.source;i.bindTexture(a.TEXTURE_CUBE_MAP,F.__webglTexture,a.TEXTURE0+J);const Ce=r.get(le);if(le.version!==Ce.__version||re===!0){i.activeTexture(a.TEXTURE0+J);const Le=Ct.getPrimaries(Ct.workingColorSpace),pe=E.colorSpace===zs?null:Ct.getPrimaries(E.colorSpace),fe=E.colorSpace===zs||Le===pe?a.NONE:a.BROWSER_DEFAULT_WEBGL;i.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(a.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);const we=E.isCompressedTexture||E.image[0].isCompressedTexture,Ge=E.image[0]&&E.image[0].isDataTexture,Fe=[];for(let Ee=0;Ee<6;Ee++)!we&&!Ge?Fe[Ee]=y(E.image[Ee],!0,o.maxCubemapSize):Fe[Ee]=Ge?E.image[Ee].image:E.image[Ee],Fe[Ee]=Tt(E,Fe[Ee]);const Ie=Fe[0],$e=c.convert(E.format,E.colorSpace),tt=c.convert(E.type),rt=C(E.internalFormat,$e,tt,E.normalized,E.colorSpace),W=E.isVideoTexture!==!0,Ne=Ce.__version===void 0||re===!0,ve=le.dataReady;let Oe=L(E,Ie);De(a.TEXTURE_CUBE_MAP,E);let Pe;if(we){W&&Ne&&i.texStorage2D(a.TEXTURE_CUBE_MAP,Oe,rt,Ie.width,Ie.height);for(let Ee=0;Ee<6;Ee++){Pe=Fe[Ee].mipmaps;for(let Ve=0;Ve<Pe.length;Ve++){const Ze=Pe[Ve];E.format!==oa?$e!==null?W?ve&&i.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Ve,0,0,Ze.width,Ze.height,$e,Ze.data):i.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Ve,rt,Ze.width,Ze.height,0,Ze.data):ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?ve&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Ve,0,0,Ze.width,Ze.height,$e,tt,Ze.data):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Ve,rt,Ze.width,Ze.height,0,$e,tt,Ze.data)}}}else{if(Pe=E.mipmaps,W&&Ne){Pe.length>0&&Oe++;const Ee=At(Fe[0]);i.texStorage2D(a.TEXTURE_CUBE_MAP,Oe,rt,Ee.width,Ee.height)}for(let Ee=0;Ee<6;Ee++)if(Ge){W?ve&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,0,0,Fe[Ee].width,Fe[Ee].height,$e,tt,Fe[Ee].data):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,rt,Fe[Ee].width,Fe[Ee].height,0,$e,tt,Fe[Ee].data);for(let Ve=0;Ve<Pe.length;Ve++){const nn=Pe[Ve].image[Ee].image;W?ve&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Ve+1,0,0,nn.width,nn.height,$e,tt,nn.data):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Ve+1,rt,nn.width,nn.height,0,$e,tt,nn.data)}}else{W?ve&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,0,0,$e,tt,Fe[Ee]):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,rt,$e,tt,Fe[Ee]);for(let Ve=0;Ve<Pe.length;Ve++){const Ze=Pe[Ve];W?ve&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Ve+1,0,0,$e,tt,Ze.image[Ee]):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Ve+1,rt,$e,tt,Ze.image[Ee])}}}x(E)&&O(a.TEXTURE_CUBE_MAP),Ce.__version=le.version,E.onUpdate&&E.onUpdate(E)}F.__version=E.version}function Qe(F,E,J,re,le,Ce){const Le=c.convert(J.format,J.colorSpace),pe=c.convert(J.type),fe=C(J.internalFormat,Le,pe,J.normalized,J.colorSpace),we=r.get(E),Ge=r.get(J);if(Ge.__renderTarget=E,!we.__hasExternalTextures){const Fe=Math.max(1,E.width>>Ce),Ie=Math.max(1,E.height>>Ce);le===a.TEXTURE_3D||le===a.TEXTURE_2D_ARRAY?i.texImage3D(le,Ce,fe,Fe,Ie,E.depth,0,Le,pe,null):i.texImage2D(le,Ce,fe,Fe,Ie,0,Le,pe,null)}i.bindFramebuffer(a.FRAMEBUFFER,F),rn(E)?d.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,re,le,Ge.__webglTexture,0,Vt(E)):(le===a.TEXTURE_2D||le>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&le<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&a.framebufferTexture2D(a.FRAMEBUFFER,re,le,Ge.__webglTexture,Ce),i.bindFramebuffer(a.FRAMEBUFFER,null)}function vt(F,E,J){if(a.bindRenderbuffer(a.RENDERBUFFER,F),E.depthBuffer){const re=E.depthTexture,le=re&&re.isDepthTexture?re.type:null,Ce=N(E.stencilBuffer,le),Le=E.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;rn(E)?d.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,Vt(E),Ce,E.width,E.height):J?a.renderbufferStorageMultisample(a.RENDERBUFFER,Vt(E),Ce,E.width,E.height):a.renderbufferStorage(a.RENDERBUFFER,Ce,E.width,E.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,Le,a.RENDERBUFFER,F)}else{const re=E.textures;for(let le=0;le<re.length;le++){const Ce=re[le],Le=c.convert(Ce.format,Ce.colorSpace),pe=c.convert(Ce.type),fe=C(Ce.internalFormat,Le,pe,Ce.normalized,Ce.colorSpace);rn(E)?d.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,Vt(E),fe,E.width,E.height):J?a.renderbufferStorageMultisample(a.RENDERBUFFER,Vt(E),fe,E.width,E.height):a.renderbufferStorage(a.RENDERBUFFER,fe,E.width,E.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function ht(F,E,J){const re=E.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(a.FRAMEBUFFER,F),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const le=r.get(E.depthTexture);if(le.__renderTarget=E,(!le.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),re){if(le.__webglInit===void 0&&(le.__webglInit=!0,E.depthTexture.addEventListener("dispose",B)),le.__webglTexture===void 0){le.__webglTexture=a.createTexture(),i.bindTexture(a.TEXTURE_CUBE_MAP,le.__webglTexture),De(a.TEXTURE_CUBE_MAP,E.depthTexture);const we=c.convert(E.depthTexture.format),Ge=c.convert(E.depthTexture.type);let Fe;E.depthTexture.format===as?Fe=a.DEPTH_COMPONENT24:E.depthTexture.format===Er&&(Fe=a.DEPTH24_STENCIL8);for(let Ie=0;Ie<6;Ie++)a.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,0,Fe,E.width,E.height,0,we,Ge,null)}}else $(E.depthTexture,0);const Ce=le.__webglTexture,Le=Vt(E),pe=re?a.TEXTURE_CUBE_MAP_POSITIVE_X+J:a.TEXTURE_2D,fe=E.depthTexture.format===Er?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;if(E.depthTexture.format===as)rn(E)?d.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,fe,pe,Ce,0,Le):a.framebufferTexture2D(a.FRAMEBUFFER,fe,pe,Ce,0);else if(E.depthTexture.format===Er)rn(E)?d.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,fe,pe,Ce,0,Le):a.framebufferTexture2D(a.FRAMEBUFFER,fe,pe,Ce,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function xt(F){const E=r.get(F),J=F.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==F.depthTexture){const re=F.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),re){const le=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,re.removeEventListener("dispose",le)};re.addEventListener("dispose",le),E.__depthDisposeCallback=le}E.__boundDepthTexture=re}if(F.depthTexture&&!E.__autoAllocateDepthBuffer)if(J)for(let re=0;re<6;re++)ht(E.__webglFramebuffer[re],F,re);else{const re=F.texture.mipmaps;re&&re.length>0?ht(E.__webglFramebuffer[0],F,0):ht(E.__webglFramebuffer,F,0)}else if(J){E.__webglDepthbuffer=[];for(let re=0;re<6;re++)if(i.bindFramebuffer(a.FRAMEBUFFER,E.__webglFramebuffer[re]),E.__webglDepthbuffer[re]===void 0)E.__webglDepthbuffer[re]=a.createRenderbuffer(),vt(E.__webglDepthbuffer[re],F,!1);else{const le=F.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Ce=E.__webglDepthbuffer[re];a.bindRenderbuffer(a.RENDERBUFFER,Ce),a.framebufferRenderbuffer(a.FRAMEBUFFER,le,a.RENDERBUFFER,Ce)}}else{const re=F.texture.mipmaps;if(re&&re.length>0?i.bindFramebuffer(a.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(a.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=a.createRenderbuffer(),vt(E.__webglDepthbuffer,F,!1);else{const le=F.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Ce=E.__webglDepthbuffer;a.bindRenderbuffer(a.RENDERBUFFER,Ce),a.framebufferRenderbuffer(a.FRAMEBUFFER,le,a.RENDERBUFFER,Ce)}}i.bindFramebuffer(a.FRAMEBUFFER,null)}function at(F,E,J){const re=r.get(F);E!==void 0&&Qe(re.__webglFramebuffer,F,F.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,0),J!==void 0&&xt(F)}function ct(F){const E=F.texture,J=r.get(F),re=r.get(E);F.addEventListener("dispose",A);const le=F.textures,Ce=F.isWebGLCubeRenderTarget===!0,Le=le.length>1;if(Le||(re.__webglTexture===void 0&&(re.__webglTexture=a.createTexture()),re.__version=E.version,u.memory.textures++),Ce){J.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(E.mipmaps&&E.mipmaps.length>0){J.__webglFramebuffer[pe]=[];for(let fe=0;fe<E.mipmaps.length;fe++)J.__webglFramebuffer[pe][fe]=a.createFramebuffer()}else J.__webglFramebuffer[pe]=a.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){J.__webglFramebuffer=[];for(let pe=0;pe<E.mipmaps.length;pe++)J.__webglFramebuffer[pe]=a.createFramebuffer()}else J.__webglFramebuffer=a.createFramebuffer();if(Le)for(let pe=0,fe=le.length;pe<fe;pe++){const we=r.get(le[pe]);we.__webglTexture===void 0&&(we.__webglTexture=a.createTexture(),u.memory.textures++)}if(F.samples>0&&rn(F)===!1){J.__webglMultisampledFramebuffer=a.createFramebuffer(),J.__webglColorRenderbuffer=[],i.bindFramebuffer(a.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let pe=0;pe<le.length;pe++){const fe=le[pe];J.__webglColorRenderbuffer[pe]=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,J.__webglColorRenderbuffer[pe]);const we=c.convert(fe.format,fe.colorSpace),Ge=c.convert(fe.type),Fe=C(fe.internalFormat,we,Ge,fe.normalized,fe.colorSpace,F.isXRRenderTarget===!0),Ie=Vt(F);a.renderbufferStorageMultisample(a.RENDERBUFFER,Ie,Fe,F.width,F.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+pe,a.RENDERBUFFER,J.__webglColorRenderbuffer[pe])}a.bindRenderbuffer(a.RENDERBUFFER,null),F.depthBuffer&&(J.__webglDepthRenderbuffer=a.createRenderbuffer(),vt(J.__webglDepthRenderbuffer,F,!0)),i.bindFramebuffer(a.FRAMEBUFFER,null)}}if(Ce){i.bindTexture(a.TEXTURE_CUBE_MAP,re.__webglTexture),De(a.TEXTURE_CUBE_MAP,E);for(let pe=0;pe<6;pe++)if(E.mipmaps&&E.mipmaps.length>0)for(let fe=0;fe<E.mipmaps.length;fe++)Qe(J.__webglFramebuffer[pe][fe],F,E,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+pe,fe);else Qe(J.__webglFramebuffer[pe],F,E,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);x(E)&&O(a.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Le){for(let pe=0,fe=le.length;pe<fe;pe++){const we=le[pe],Ge=r.get(we);let Fe=a.TEXTURE_2D;(F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(Fe=F.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),i.bindTexture(Fe,Ge.__webglTexture),De(Fe,we),Qe(J.__webglFramebuffer,F,we,a.COLOR_ATTACHMENT0+pe,Fe,0),x(we)&&O(Fe)}i.unbindTexture()}else{let pe=a.TEXTURE_2D;if((F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(pe=F.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),i.bindTexture(pe,re.__webglTexture),De(pe,E),E.mipmaps&&E.mipmaps.length>0)for(let fe=0;fe<E.mipmaps.length;fe++)Qe(J.__webglFramebuffer[fe],F,E,a.COLOR_ATTACHMENT0,pe,fe);else Qe(J.__webglFramebuffer,F,E,a.COLOR_ATTACHMENT0,pe,0);x(E)&&O(pe),i.unbindTexture()}F.depthBuffer&&xt(F)}function Qt(F){const E=F.textures;for(let J=0,re=E.length;J<re;J++){const le=E[J];if(x(le)){const Ce=P(F),Le=r.get(le).__webglTexture;i.bindTexture(Ce,Le),O(Ce),i.unbindTexture()}}}const Jt=[],qt=[];function tn(F){if(F.samples>0){if(rn(F)===!1){const E=F.textures,J=F.width,re=F.height;let le=a.COLOR_BUFFER_BIT;const Ce=F.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Le=r.get(F),pe=E.length>1;if(pe)for(let we=0;we<E.length;we++)i.bindFramebuffer(a.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+we,a.RENDERBUFFER,null),i.bindFramebuffer(a.FRAMEBUFFER,Le.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+we,a.TEXTURE_2D,null,0);i.bindFramebuffer(a.READ_FRAMEBUFFER,Le.__webglMultisampledFramebuffer);const fe=F.texture.mipmaps;fe&&fe.length>0?i.bindFramebuffer(a.DRAW_FRAMEBUFFER,Le.__webglFramebuffer[0]):i.bindFramebuffer(a.DRAW_FRAMEBUFFER,Le.__webglFramebuffer);for(let we=0;we<E.length;we++){if(F.resolveDepthBuffer&&(F.depthBuffer&&(le|=a.DEPTH_BUFFER_BIT),F.stencilBuffer&&F.resolveStencilBuffer&&(le|=a.STENCIL_BUFFER_BIT)),pe){a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,Le.__webglColorRenderbuffer[we]);const Ge=r.get(E[we]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,Ge,0)}a.blitFramebuffer(0,0,J,re,0,0,J,re,le,a.NEAREST),m===!0&&(Jt.length=0,qt.length=0,Jt.push(a.COLOR_ATTACHMENT0+we),F.depthBuffer&&F.resolveDepthBuffer===!1&&(Jt.push(Ce),qt.push(Ce),a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,qt)),a.invalidateFramebuffer(a.READ_FRAMEBUFFER,Jt))}if(i.bindFramebuffer(a.READ_FRAMEBUFFER,null),i.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),pe)for(let we=0;we<E.length;we++){i.bindFramebuffer(a.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+we,a.RENDERBUFFER,Le.__webglColorRenderbuffer[we]);const Ge=r.get(E[we]).__webglTexture;i.bindFramebuffer(a.FRAMEBUFFER,Le.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+we,a.TEXTURE_2D,Ge,0)}i.bindFramebuffer(a.DRAW_FRAMEBUFFER,Le.__webglMultisampledFramebuffer)}else if(F.depthBuffer&&F.resolveDepthBuffer===!1&&m){const E=F.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[E])}}}function Vt(F){return Math.min(o.maxSamples,F.samples)}function rn(F){const E=r.get(F);return F.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function j(F){const E=u.render.frame;g.get(F)!==E&&(g.set(F,E),F.update())}function Tt(F,E){const J=F.colorSpace,re=F.format,le=F.type;return F.isCompressedTexture===!0||F.isVideoTexture===!0||J!==Du&&J!==zs&&(Ct.getTransfer(J)===Wt?(re!==oa||le!==Xi)&&ot("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Lt("WebGLTextures: Unsupported texture color space:",J)),E}function At(F){return typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement?(h.width=F.naturalWidth||F.width,h.height=F.naturalHeight||F.height):typeof VideoFrame<"u"&&F instanceof VideoFrame?(h.width=F.displayWidth,h.height=F.displayHeight):(h.width=F.width,h.height=F.height),h}this.allocateTextureUnit=z,this.resetTextureUnits=me,this.getTextureUnits=ue,this.setTextureUnits=q,this.setTexture2D=$,this.setTexture2DArray=he,this.setTexture3D=Se,this.setTextureCube=I,this.rebindTextures=at,this.setupRenderTarget=ct,this.updateRenderTargetMipmap=Qt,this.updateMultisampleRenderTarget=tn,this.setupDepthRenderbuffer=xt,this.setupFrameBufferTexture=Qe,this.useMultisampledRTT=rn,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function Z2(a,e){function i(r,o=zs){let c;const u=Ct.getTransfer(o);if(r===Xi)return a.UNSIGNED_BYTE;if(r===Np)return a.UNSIGNED_SHORT_4_4_4_4;if(r===Up)return a.UNSIGNED_SHORT_5_5_5_1;if(r===Ex)return a.UNSIGNED_INT_5_9_9_9_REV;if(r===bx)return a.UNSIGNED_INT_10F_11F_11F_REV;if(r===Mx)return a.BYTE;if(r===yx)return a.SHORT;if(r===Fl)return a.UNSIGNED_SHORT;if(r===Lp)return a.INT;if(r===Aa)return a.UNSIGNED_INT;if(r===Ma)return a.FLOAT;if(r===is)return a.HALF_FLOAT;if(r===Tx)return a.ALPHA;if(r===Ax)return a.RGB;if(r===oa)return a.RGBA;if(r===as)return a.DEPTH_COMPONENT;if(r===Er)return a.DEPTH_STENCIL;if(r===Rx)return a.RED;if(r===Op)return a.RED_INTEGER;if(r===Tr)return a.RG;if(r===Pp)return a.RG_INTEGER;if(r===Ip)return a.RGBA_INTEGER;if(r===yu||r===Eu||r===bu||r===Tu)if(u===Wt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===yu)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Eu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===bu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Tu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===yu)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Eu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===bu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Tu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Zh||r===Kh||r===Qh||r===Jh)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===Zh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Kh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Qh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Jh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===$h||r===ep||r===tp||r===np||r===ip||r===Cu||r===ap)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===$h||r===ep)return u===Wt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===tp)return u===Wt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(r===np)return c.COMPRESSED_R11_EAC;if(r===ip)return c.COMPRESSED_SIGNED_R11_EAC;if(r===Cu)return c.COMPRESSED_RG11_EAC;if(r===ap)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===sp||r===rp||r===op||r===lp||r===cp||r===up||r===fp||r===dp||r===hp||r===pp||r===mp||r===gp||r===_p||r===vp)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===sp)return u===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===rp)return u===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===op)return u===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===lp)return u===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===cp)return u===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===up)return u===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===fp)return u===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===dp)return u===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===hp)return u===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===pp)return u===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===mp)return u===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===gp)return u===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===_p)return u===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===vp)return u===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===xp||r===Sp||r===Mp)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===xp)return u===Wt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Sp)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Mp)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===yp||r===Ep||r===wu||r===bp)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===yp)return c.COMPRESSED_RED_RGTC1_EXT;if(r===Ep)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===wu)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===bp)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Bl?a.UNSIGNED_INT_24_8:a[r]!==void 0?a[r]:null}return{convert:i}}const K2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Q2=`
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

}`;class J2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const r=new Fx(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new qi({vertexShader:K2,fragmentShader:Q2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Ri(new Gs(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class $2 extends Rr{constructor(e,i){super();const r=this;let o=null,c=1,u=null,d="local-floor",m=1,h=null,g=null,v=null,_=null,M=null,b=null;const R=typeof XRWebGLBinding<"u",y=new J2,x={},O=i.getContextAttributes();let P=null,C=null;const N=[],L=[],B=new It;let A=null;const U=new ki;U.viewport=new Mn;const X=new ki;X.viewport=new Mn;const k=[U,X],Z=new cb;let me=null,ue=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ae){let Me=N[ae];return Me===void 0&&(Me=new ah,N[ae]=Me),Me.getTargetRaySpace()},this.getControllerGrip=function(ae){let Me=N[ae];return Me===void 0&&(Me=new ah,N[ae]=Me),Me.getGripSpace()},this.getHand=function(ae){let Me=N[ae];return Me===void 0&&(Me=new ah,N[ae]=Me),Me.getHandSpace()};function q(ae){const Me=L.indexOf(ae.inputSource);if(Me===-1)return;const ge=N[Me];ge!==void 0&&(ge.update(ae.inputSource,ae.frame,h||u),ge.dispatchEvent({type:ae.type,data:ae.inputSource}))}function z(){o.removeEventListener("select",q),o.removeEventListener("selectstart",q),o.removeEventListener("selectend",q),o.removeEventListener("squeeze",q),o.removeEventListener("squeezestart",q),o.removeEventListener("squeezeend",q),o.removeEventListener("end",z),o.removeEventListener("inputsourceschange",H);for(let ae=0;ae<N.length;ae++){const Me=L[ae];Me!==null&&(L[ae]=null,N[ae].disconnect(Me))}me=null,ue=null,y.reset();for(const ae in x)delete x[ae];e.setRenderTarget(P),M=null,_=null,v=null,o=null,C=null,De.stop(),r.isPresenting=!1,e.setPixelRatio(A),e.setSize(B.width,B.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ae){c=ae,r.isPresenting===!0&&ot("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ae){d=ae,r.isPresenting===!0&&ot("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||u},this.setReferenceSpace=function(ae){h=ae},this.getBaseLayer=function(){return _!==null?_:M},this.getBinding=function(){return v===null&&R&&(v=new XRWebGLBinding(o,i)),v},this.getFrame=function(){return b},this.getSession=function(){return o},this.setSession=async function(ae){if(o=ae,o!==null){if(P=e.getRenderTarget(),o.addEventListener("select",q),o.addEventListener("selectstart",q),o.addEventListener("selectend",q),o.addEventListener("squeeze",q),o.addEventListener("squeezestart",q),o.addEventListener("squeezeend",q),o.addEventListener("end",z),o.addEventListener("inputsourceschange",H),O.xrCompatible!==!0&&await i.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(B),R&&"createProjectionLayer"in XRWebGLBinding.prototype){let ge=null,We=null,nt=null;O.depth&&(nt=O.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,ge=O.stencil?Er:as,We=O.stencil?Bl:Aa);const Qe={colorFormat:i.RGBA8,depthFormat:nt,scaleFactor:c};v=this.getBinding(),_=v.createProjectionLayer(Qe),o.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),C=new ba(_.textureWidth,_.textureHeight,{format:oa,type:Xi,depthTexture:new Do(_.textureWidth,_.textureHeight,We,void 0,void 0,void 0,void 0,void 0,void 0,ge),stencilBuffer:O.stencil,colorSpace:e.outputColorSpace,samples:O.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}else{const ge={antialias:O.antialias,alpha:!0,depth:O.depth,stencil:O.stencil,framebufferScaleFactor:c};M=new XRWebGLLayer(o,i,ge),o.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),C=new ba(M.framebufferWidth,M.framebufferHeight,{format:oa,type:Xi,colorSpace:e.outputColorSpace,stencilBuffer:O.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(m),h=null,u=await o.requestReferenceSpace(d),De.setContext(o),De.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function H(ae){for(let Me=0;Me<ae.removed.length;Me++){const ge=ae.removed[Me],We=L.indexOf(ge);We>=0&&(L[We]=null,N[We].disconnect(ge))}for(let Me=0;Me<ae.added.length;Me++){const ge=ae.added[Me];let We=L.indexOf(ge);if(We===-1){for(let Qe=0;Qe<N.length;Qe++)if(Qe>=L.length){L.push(ge),We=Qe;break}else if(L[Qe]===null){L[Qe]=ge,We=Qe;break}if(We===-1)break}const nt=N[We];nt&&nt.connect(ge)}}const $=new ie,he=new ie;function Se(ae,Me,ge){$.setFromMatrixPosition(Me.matrixWorld),he.setFromMatrixPosition(ge.matrixWorld);const We=$.distanceTo(he),nt=Me.projectionMatrix.elements,Qe=ge.projectionMatrix.elements,vt=nt[14]/(nt[10]-1),ht=nt[14]/(nt[10]+1),xt=(nt[9]+1)/nt[5],at=(nt[9]-1)/nt[5],ct=(nt[8]-1)/nt[0],Qt=(Qe[8]+1)/Qe[0],Jt=vt*ct,qt=vt*Qt,tn=We/(-ct+Qt),Vt=tn*-ct;if(Me.matrixWorld.decompose(ae.position,ae.quaternion,ae.scale),ae.translateX(Vt),ae.translateZ(tn),ae.matrixWorld.compose(ae.position,ae.quaternion,ae.scale),ae.matrixWorldInverse.copy(ae.matrixWorld).invert(),nt[10]===-1)ae.projectionMatrix.copy(Me.projectionMatrix),ae.projectionMatrixInverse.copy(Me.projectionMatrixInverse);else{const rn=vt+tn,j=ht+tn,Tt=Jt-Vt,At=qt+(We-Vt),F=xt*ht/j*rn,E=at*ht/j*rn;ae.projectionMatrix.makePerspective(Tt,At,F,E,rn,j),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert()}}function I(ae,Me){Me===null?ae.matrixWorld.copy(ae.matrix):ae.matrixWorld.multiplyMatrices(Me.matrixWorld,ae.matrix),ae.matrixWorldInverse.copy(ae.matrixWorld).invert()}this.updateCamera=function(ae){if(o===null)return;let Me=ae.near,ge=ae.far;y.texture!==null&&(y.depthNear>0&&(Me=y.depthNear),y.depthFar>0&&(ge=y.depthFar)),Z.near=X.near=U.near=Me,Z.far=X.far=U.far=ge,(me!==Z.near||ue!==Z.far)&&(o.updateRenderState({depthNear:Z.near,depthFar:Z.far}),me=Z.near,ue=Z.far),Z.layers.mask=ae.layers.mask|6,U.layers.mask=Z.layers.mask&-5,X.layers.mask=Z.layers.mask&-3;const We=ae.parent,nt=Z.cameras;I(Z,We);for(let Qe=0;Qe<nt.length;Qe++)I(nt[Qe],We);nt.length===2?Se(Z,U,X):Z.projectionMatrix.copy(U.projectionMatrix),K(ae,Z,We)};function K(ae,Me,ge){ge===null?ae.matrix.copy(Me.matrixWorld):(ae.matrix.copy(ge.matrixWorld),ae.matrix.invert(),ae.matrix.multiply(Me.matrixWorld)),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.updateMatrixWorld(!0),ae.projectionMatrix.copy(Me.projectionMatrix),ae.projectionMatrixInverse.copy(Me.projectionMatrixInverse),ae.isPerspectiveCamera&&(ae.fov=zl*2*Math.atan(1/ae.projectionMatrix.elements[5]),ae.zoom=1)}this.getCamera=function(){return Z},this.getFoveation=function(){if(!(_===null&&M===null))return m},this.setFoveation=function(ae){m=ae,_!==null&&(_.fixedFoveation=ae),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=ae)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(Z)},this.getCameraTexture=function(ae){return x[ae]};let Te=null;function Ae(ae,Me){if(g=Me.getViewerPose(h||u),b=Me,g!==null){const ge=g.views;M!==null&&(e.setRenderTargetFramebuffer(C,M.framebuffer),e.setRenderTarget(C));let We=!1;ge.length!==Z.cameras.length&&(Z.cameras.length=0,We=!0);for(let ht=0;ht<ge.length;ht++){const xt=ge[ht];let at=null;if(M!==null)at=M.getViewport(xt);else{const Qt=v.getViewSubImage(_,xt);at=Qt.viewport,ht===0&&(e.setRenderTargetTextures(C,Qt.colorTexture,Qt.depthStencilTexture),e.setRenderTarget(C))}let ct=k[ht];ct===void 0&&(ct=new ki,ct.layers.enable(ht),ct.viewport=new Mn,k[ht]=ct),ct.matrix.fromArray(xt.transform.matrix),ct.matrix.decompose(ct.position,ct.quaternion,ct.scale),ct.projectionMatrix.fromArray(xt.projectionMatrix),ct.projectionMatrixInverse.copy(ct.projectionMatrix).invert(),ct.viewport.set(at.x,at.y,at.width,at.height),ht===0&&(Z.matrix.copy(ct.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale)),We===!0&&Z.cameras.push(ct)}const nt=o.enabledFeatures;if(nt&&nt.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&R){v=r.getBinding();const ht=v.getDepthInformation(ge[0]);ht&&ht.isValid&&ht.texture&&y.init(ht,o.renderState)}if(nt&&nt.includes("camera-access")&&R){e.state.unbindTexture(),v=r.getBinding();for(let ht=0;ht<ge.length;ht++){const xt=ge[ht].camera;if(xt){let at=x[xt];at||(at=new Fx,x[xt]=at);const ct=v.getCameraImage(xt);at.sourceTexture=ct}}}}for(let ge=0;ge<N.length;ge++){const We=L[ge],nt=N[ge];We!==null&&nt!==void 0&&nt.update(We,Me,h||u)}Te&&Te(ae,Me),Me.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:Me}),b=null}const De=new Gx;De.setAnimationLoop(Ae),this.setAnimationLoop=function(ae){Te=ae},this.dispose=function(){}}}const eR=new bn,jx=new ft;jx.set(-1,0,0,0,1,0,0,0,1);function tR(a,e){function i(y,x){y.matrixAutoUpdate===!0&&y.updateMatrix(),x.value.copy(y.matrix)}function r(y,x){x.color.getRGB(y.fogColor.value,Bx(a)),x.isFog?(y.fogNear.value=x.near,y.fogFar.value=x.far):x.isFogExp2&&(y.fogDensity.value=x.density)}function o(y,x,O,P,C){x.isNodeMaterial?x.uniformsNeedUpdate=!1:x.isMeshBasicMaterial?c(y,x):x.isMeshLambertMaterial?(c(y,x),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)):x.isMeshToonMaterial?(c(y,x),v(y,x)):x.isMeshPhongMaterial?(c(y,x),g(y,x),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)):x.isMeshStandardMaterial?(c(y,x),_(y,x),x.isMeshPhysicalMaterial&&M(y,x,C)):x.isMeshMatcapMaterial?(c(y,x),b(y,x)):x.isMeshDepthMaterial?c(y,x):x.isMeshDistanceMaterial?(c(y,x),R(y,x)):x.isMeshNormalMaterial?c(y,x):x.isLineBasicMaterial?(u(y,x),x.isLineDashedMaterial&&d(y,x)):x.isPointsMaterial?m(y,x,O,P):x.isSpriteMaterial?h(y,x):x.isShadowMaterial?(y.color.value.copy(x.color),y.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function c(y,x){y.opacity.value=x.opacity,x.color&&y.diffuse.value.copy(x.color),x.emissive&&y.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(y.map.value=x.map,i(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,i(x.alphaMap,y.alphaMapTransform)),x.bumpMap&&(y.bumpMap.value=x.bumpMap,i(x.bumpMap,y.bumpMapTransform),y.bumpScale.value=x.bumpScale,x.side===pi&&(y.bumpScale.value*=-1)),x.normalMap&&(y.normalMap.value=x.normalMap,i(x.normalMap,y.normalMapTransform),y.normalScale.value.copy(x.normalScale),x.side===pi&&y.normalScale.value.negate()),x.displacementMap&&(y.displacementMap.value=x.displacementMap,i(x.displacementMap,y.displacementMapTransform),y.displacementScale.value=x.displacementScale,y.displacementBias.value=x.displacementBias),x.emissiveMap&&(y.emissiveMap.value=x.emissiveMap,i(x.emissiveMap,y.emissiveMapTransform)),x.specularMap&&(y.specularMap.value=x.specularMap,i(x.specularMap,y.specularMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest);const O=e.get(x),P=O.envMap,C=O.envMapRotation;P&&(y.envMap.value=P,y.envMapRotation.value.setFromMatrix4(eR.makeRotationFromEuler(C)).transpose(),P.isCubeTexture&&P.isRenderTargetTexture===!1&&y.envMapRotation.value.premultiply(jx),y.reflectivity.value=x.reflectivity,y.ior.value=x.ior,y.refractionRatio.value=x.refractionRatio),x.lightMap&&(y.lightMap.value=x.lightMap,y.lightMapIntensity.value=x.lightMapIntensity,i(x.lightMap,y.lightMapTransform)),x.aoMap&&(y.aoMap.value=x.aoMap,y.aoMapIntensity.value=x.aoMapIntensity,i(x.aoMap,y.aoMapTransform))}function u(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,x.map&&(y.map.value=x.map,i(x.map,y.mapTransform))}function d(y,x){y.dashSize.value=x.dashSize,y.totalSize.value=x.dashSize+x.gapSize,y.scale.value=x.scale}function m(y,x,O,P){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.size.value=x.size*O,y.scale.value=P*.5,x.map&&(y.map.value=x.map,i(x.map,y.uvTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,i(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function h(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.rotation.value=x.rotation,x.map&&(y.map.value=x.map,i(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,i(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function g(y,x){y.specular.value.copy(x.specular),y.shininess.value=Math.max(x.shininess,1e-4)}function v(y,x){x.gradientMap&&(y.gradientMap.value=x.gradientMap)}function _(y,x){y.metalness.value=x.metalness,x.metalnessMap&&(y.metalnessMap.value=x.metalnessMap,i(x.metalnessMap,y.metalnessMapTransform)),y.roughness.value=x.roughness,x.roughnessMap&&(y.roughnessMap.value=x.roughnessMap,i(x.roughnessMap,y.roughnessMapTransform)),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)}function M(y,x,O){y.ior.value=x.ior,x.sheen>0&&(y.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),y.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(y.sheenColorMap.value=x.sheenColorMap,i(x.sheenColorMap,y.sheenColorMapTransform)),x.sheenRoughnessMap&&(y.sheenRoughnessMap.value=x.sheenRoughnessMap,i(x.sheenRoughnessMap,y.sheenRoughnessMapTransform))),x.clearcoat>0&&(y.clearcoat.value=x.clearcoat,y.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(y.clearcoatMap.value=x.clearcoatMap,i(x.clearcoatMap,y.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,i(x.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(y.clearcoatNormalMap.value=x.clearcoatNormalMap,i(x.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===pi&&y.clearcoatNormalScale.value.negate())),x.dispersion>0&&(y.dispersion.value=x.dispersion),x.iridescence>0&&(y.iridescence.value=x.iridescence,y.iridescenceIOR.value=x.iridescenceIOR,y.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(y.iridescenceMap.value=x.iridescenceMap,i(x.iridescenceMap,y.iridescenceMapTransform)),x.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=x.iridescenceThicknessMap,i(x.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),x.transmission>0&&(y.transmission.value=x.transmission,y.transmissionSamplerMap.value=O.texture,y.transmissionSamplerSize.value.set(O.width,O.height),x.transmissionMap&&(y.transmissionMap.value=x.transmissionMap,i(x.transmissionMap,y.transmissionMapTransform)),y.thickness.value=x.thickness,x.thicknessMap&&(y.thicknessMap.value=x.thicknessMap,i(x.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=x.attenuationDistance,y.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(y.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(y.anisotropyMap.value=x.anisotropyMap,i(x.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=x.specularIntensity,y.specularColor.value.copy(x.specularColor),x.specularColorMap&&(y.specularColorMap.value=x.specularColorMap,i(x.specularColorMap,y.specularColorMapTransform)),x.specularIntensityMap&&(y.specularIntensityMap.value=x.specularIntensityMap,i(x.specularIntensityMap,y.specularIntensityMapTransform))}function b(y,x){x.matcap&&(y.matcap.value=x.matcap)}function R(y,x){const O=e.get(x).light;y.referencePosition.value.setFromMatrixPosition(O.matrixWorld),y.nearDistance.value=O.shadow.camera.near,y.farDistance.value=O.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function nR(a,e,i,r){let o={},c={},u=[];const d=a.getParameter(a.MAX_UNIFORM_BUFFER_BINDINGS);function m(C,N){const L=N.program;r.uniformBlockBinding(C,L)}function h(C,N){let L=o[C.id];L===void 0&&(y(C),L=g(C),o[C.id]=L,C.addEventListener("dispose",O));const B=N.program;r.updateUBOMapping(C,B);const A=e.render.frame;c[C.id]!==A&&(_(C),c[C.id]=A)}function g(C){const N=v();C.__bindingPointIndex=N;const L=a.createBuffer(),B=C.__size,A=C.usage;return a.bindBuffer(a.UNIFORM_BUFFER,L),a.bufferData(a.UNIFORM_BUFFER,B,A),a.bindBuffer(a.UNIFORM_BUFFER,null),a.bindBufferBase(a.UNIFORM_BUFFER,N,L),L}function v(){for(let C=0;C<d;C++)if(u.indexOf(C)===-1)return u.push(C),C;return Lt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(C){const N=o[C.id],L=C.uniforms,B=C.__cache;a.bindBuffer(a.UNIFORM_BUFFER,N);for(let A=0,U=L.length;A<U;A++){const X=L[A];if(Array.isArray(X))for(let k=0,Z=X.length;k<Z;k++)M(X[k],A,k,B);else M(X,A,0,B)}a.bindBuffer(a.UNIFORM_BUFFER,null)}function M(C,N,L,B){if(R(C,N,L,B)===!0){const A=C.__offset,U=C.value;if(Array.isArray(U)){let X=0;for(let k=0;k<U.length;k++){const Z=U[k],me=x(Z);b(Z,C.__data,X),typeof Z!="number"&&typeof Z!="boolean"&&!Z.isMatrix3&&!ArrayBuffer.isView(Z)&&(X+=me.storage/Float32Array.BYTES_PER_ELEMENT)}}else b(U,C.__data,0);a.bufferSubData(a.UNIFORM_BUFFER,A,C.__data)}}function b(C,N,L){typeof C=="number"||typeof C=="boolean"?N[0]=C:C.isMatrix3?(N[0]=C.elements[0],N[1]=C.elements[1],N[2]=C.elements[2],N[3]=0,N[4]=C.elements[3],N[5]=C.elements[4],N[6]=C.elements[5],N[7]=0,N[8]=C.elements[6],N[9]=C.elements[7],N[10]=C.elements[8],N[11]=0):ArrayBuffer.isView(C)?N.set(new C.constructor(C.buffer,C.byteOffset,N.length)):C.toArray(N,L)}function R(C,N,L,B){const A=C.value,U=N+"_"+L;if(B[U]===void 0)return typeof A=="number"||typeof A=="boolean"?B[U]=A:ArrayBuffer.isView(A)?B[U]=A.slice():B[U]=A.clone(),!0;{const X=B[U];if(typeof A=="number"||typeof A=="boolean"){if(X!==A)return B[U]=A,!0}else{if(ArrayBuffer.isView(A))return!0;if(X.equals(A)===!1)return X.copy(A),!0}}return!1}function y(C){const N=C.uniforms;let L=0;const B=16;for(let U=0,X=N.length;U<X;U++){const k=Array.isArray(N[U])?N[U]:[N[U]];for(let Z=0,me=k.length;Z<me;Z++){const ue=k[Z],q=Array.isArray(ue.value)?ue.value:[ue.value];for(let z=0,H=q.length;z<H;z++){const $=q[z],he=x($),Se=L%B,I=Se%he.boundary,K=Se+I;L+=I,K!==0&&B-K<he.storage&&(L+=B-K),ue.__data=new Float32Array(he.storage/Float32Array.BYTES_PER_ELEMENT),ue.__offset=L,L+=he.storage}}}const A=L%B;return A>0&&(L+=B-A),C.__size=L,C.__cache={},this}function x(C){const N={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(N.boundary=4,N.storage=4):C.isVector2?(N.boundary=8,N.storage=8):C.isVector3||C.isColor?(N.boundary=16,N.storage=12):C.isVector4?(N.boundary=16,N.storage=16):C.isMatrix3?(N.boundary=48,N.storage=48):C.isMatrix4?(N.boundary=64,N.storage=64):C.isTexture?ot("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(C)?(N.boundary=16,N.storage=C.byteLength):ot("WebGLRenderer: Unsupported uniform value type.",C),N}function O(C){const N=C.target;N.removeEventListener("dispose",O);const L=u.indexOf(N.__bindingPointIndex);u.splice(L,1),a.deleteBuffer(o[N.id]),delete o[N.id],delete c[N.id]}function P(){for(const C in o)a.deleteBuffer(o[C]);u=[],o={},c={}}return{bind:m,update:h,dispose:P}}const iR=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let va=null;function aR(){return va===null&&(va=new qE(iR,16,16,Tr,is),va.name="DFG_LUT",va.minFilter=hn,va.magFilter=hn,va.wrapS=ra,va.wrapT=ra,va.generateMipmaps=!1,va.needsUpdate=!0),va}class sR{constructor(e={}){const{canvas:i=lE(),context:r=null,depth:o=!0,stencil:c=!1,alpha:u=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:h=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:_=!1,outputBufferType:M=Xi}=e;this.isWebGLRenderer=!0;let b;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=r.getContextAttributes().alpha}else b=u;const R=M,y=new Set([Ip,Pp,Op]),x=new Set([Xi,Aa,Fl,Bl,Np,Up]),O=new Uint32Array(4),P=new Int32Array(4),C=new ie;let N=null,L=null;const B=[],A=[];let U=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ea,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const X=this;let k=!1,Z=null,me=null,ue=null,q=null;this._outputColorSpace=ei;let z=0,H=0,$=null,he=-1,Se=null;const I=new Mn,K=new Mn;let Te=null;const Ae=new Gt(0);let De=0,ae=i.width,Me=i.height,ge=1,We=null,nt=null;const Qe=new Mn(0,0,ae,Me),vt=new Mn(0,0,ae,Me);let ht=!1;const xt=new Ox;let at=!1,ct=!1;const Qt=new bn,Jt=new ie,qt=new Mn,tn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Vt=!1;function rn(){return $===null?ge:1}let j=r;function Tt(T,G){return i.getContext(T,G)}try{const T={alpha:!0,depth:o,stencil:c,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:h,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Dp}`),i.addEventListener("webglcontextlost",nn,!1),i.addEventListener("webglcontextrestored",Dt,!1),i.addEventListener("webglcontextcreationerror",ti,!1),j===null){const G="webgl2";if(j=Tt(G,T),j===null)throw Tt(G)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(T){throw Lt("WebGLRenderer: "+T.message),T}let At,F,E,J,re,le,Ce,Le,pe,fe,we,Ge,Fe,Ie,$e,tt,rt,W,Ne,ve,Oe,Pe,Ee;function Ve(){At=new aA(j),At.init(),Oe=new Z2(j,At),F=new KT(j,At,e,Oe),E=new q2(j,At),F.reversedDepthBuffer&&_&&E.buffers.depth.setReversed(!0),me=j.createFramebuffer(),ue=j.createFramebuffer(),q=j.createFramebuffer(),J=new oA(j),re=new U2,le=new j2(j,At,E,re,F,Oe,J),Ce=new iA(X),Le=new fb(j),Pe=new jT(j,Le),pe=new sA(j,Le,J,Pe),fe=new cA(j,pe,Le,Pe,J),W=new lA(j,F,le),$e=new QT(re),we=new N2(X,Ce,At,F,Pe,$e),Ge=new tR(X,re),Fe=new P2,Ie=new G2(At),rt=new qT(X,Ce,E,fe,b,m),tt=new Y2(X,fe,F),Ee=new nR(j,J,F,E),Ne=new ZT(j,At,J),ve=new rA(j,At,J),J.programs=we.programs,X.capabilities=F,X.extensions=At,X.properties=re,X.renderLists=Fe,X.shadowMap=tt,X.state=E,X.info=J}Ve(),R!==Xi&&(U=new fA(R,i.width,i.height,d,o,c));const Ze=new $2(X,j);this.xr=Ze,this.getContext=function(){return j},this.getContextAttributes=function(){return j.getContextAttributes()},this.forceContextLoss=function(){const T=At.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=At.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return ge},this.setPixelRatio=function(T){T!==void 0&&(ge=T,this.setSize(ae,Me,!1))},this.getSize=function(T){return T.set(ae,Me)},this.setSize=function(T,G,ee=!0){if(Ze.isPresenting){ot("WebGLRenderer: Can't change size while VR device is presenting.");return}ae=T,Me=G,i.width=Math.floor(T*ge),i.height=Math.floor(G*ge),ee===!0&&(i.style.width=T+"px",i.style.height=G+"px"),U!==null&&U.setSize(i.width,i.height),this.setViewport(0,0,T,G)},this.getDrawingBufferSize=function(T){return T.set(ae*ge,Me*ge).floor()},this.setDrawingBufferSize=function(T,G,ee){ae=T,Me=G,ge=ee,i.width=Math.floor(T*ee),i.height=Math.floor(G*ee),this.setViewport(0,0,T,G)},this.setEffects=function(T){if(R===Xi){Lt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let G=0;G<T.length;G++)if(T[G].isOutputPass===!0){ot("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}U.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(I)},this.getViewport=function(T){return T.copy(Qe)},this.setViewport=function(T,G,ee,Q){T.isVector4?Qe.set(T.x,T.y,T.z,T.w):Qe.set(T,G,ee,Q),E.viewport(I.copy(Qe).multiplyScalar(ge).round())},this.getScissor=function(T){return T.copy(vt)},this.setScissor=function(T,G,ee,Q){T.isVector4?vt.set(T.x,T.y,T.z,T.w):vt.set(T,G,ee,Q),E.scissor(K.copy(vt).multiplyScalar(ge).round())},this.getScissorTest=function(){return ht},this.setScissorTest=function(T){E.setScissorTest(ht=T)},this.setOpaqueSort=function(T){We=T},this.setTransparentSort=function(T){nt=T},this.getClearColor=function(T){return T.copy(rt.getClearColor())},this.setClearColor=function(){rt.setClearColor(...arguments)},this.getClearAlpha=function(){return rt.getClearAlpha()},this.setClearAlpha=function(){rt.setClearAlpha(...arguments)},this.clear=function(T=!0,G=!0,ee=!0){let Q=0;if(T){let ne=!1;if($!==null){const Ue=$.texture.format;ne=y.has(Ue)}if(ne){const Ue=$.texture.type,He=x.has(Ue),Re=rt.getClearColor(),ke=rt.getClearAlpha(),ze=Re.r,je=Re.g,lt=Re.b;He?(O[0]=ze,O[1]=je,O[2]=lt,O[3]=ke,j.clearBufferuiv(j.COLOR,0,O)):(P[0]=ze,P[1]=je,P[2]=lt,P[3]=ke,j.clearBufferiv(j.COLOR,0,P))}else Q|=j.COLOR_BUFFER_BIT}G&&(Q|=j.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ee&&(Q|=j.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Q!==0&&j.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),Z=T},this.dispose=function(){i.removeEventListener("webglcontextlost",nn,!1),i.removeEventListener("webglcontextrestored",Dt,!1),i.removeEventListener("webglcontextcreationerror",ti,!1),rt.dispose(),Fe.dispose(),Ie.dispose(),re.dispose(),Ce.dispose(),fe.dispose(),Pe.dispose(),Ee.dispose(),we.dispose(),Ze.dispose(),Ze.removeEventListener("sessionstart",mn),Ze.removeEventListener("sessionend",_n),zn.stop()};function nn(T){T.preventDefault(),j_("WebGLRenderer: Context Lost."),k=!0}function Dt(){j_("WebGLRenderer: Context Restored."),k=!1;const T=J.autoReset,G=tt.enabled,ee=tt.autoUpdate,Q=tt.needsUpdate,ne=tt.type;Ve(),J.autoReset=T,tt.enabled=G,tt.autoUpdate=ee,tt.needsUpdate=Q,tt.type=ne}function ti(T){Lt("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function In(T){const G=T.target;G.removeEventListener("dispose",In),la(G)}function la(T){Ra(T),re.remove(T)}function Ra(T){const G=re.get(T).programs;G!==void 0&&(G.forEach(function(ee){we.releaseProgram(ee)}),T.isShaderMaterial&&we.releaseShaderCache(T))}this.renderBufferDirect=function(T,G,ee,Q,ne,Ue){G===null&&(G=tn);const He=ne.isMesh&&ne.matrixWorld.determinantAffine()<0,Re=Ki(T,G,ee,Q,ne);E.setMaterial(Q,He);let ke=ee.index,ze=1;if(Q.wireframe===!0){if(ke=pe.getWireframeAttribute(ee),ke===void 0)return;ze=2}const je=ee.drawRange,lt=ee.attributes.position;let Ke=je.start*ze,yt=(je.start+je.count)*ze;Ue!==null&&(Ke=Math.max(Ke,Ue.start*ze),yt=Math.min(yt,(Ue.start+Ue.count)*ze)),ke!==null?(Ke=Math.max(Ke,0),yt=Math.min(yt,ke.count)):lt!=null&&(Ke=Math.max(Ke,0),yt=Math.min(yt,lt.count));const $t=yt-Ke;if($t<0||$t===1/0)return;Pe.setup(ne,Q,Re,ee,ke);let Ft,Nt=Ne;if(ke!==null&&(Ft=Le.get(ke),Nt=ve,Nt.setIndex(Ft)),ne.isMesh)Q.wireframe===!0?(E.setLineWidth(Q.wireframeLinewidth*rn()),Nt.setMode(j.LINES)):Nt.setMode(j.TRIANGLES);else if(ne.isLine){let wt=Q.linewidth;wt===void 0&&(wt=1),E.setLineWidth(wt*rn()),ne.isLineSegments?Nt.setMode(j.LINES):ne.isLineLoop?Nt.setMode(j.LINE_LOOP):Nt.setMode(j.LINE_STRIP)}else ne.isPoints?Nt.setMode(j.POINTS):ne.isSprite&&Nt.setMode(j.TRIANGLES);if(ne.isBatchedMesh)if(At.get("WEBGL_multi_draw"))Nt.renderMultiDraw(ne._multiDrawStarts,ne._multiDrawCounts,ne._multiDrawCount);else{const wt=ne._multiDrawStarts,Ye=ne._multiDrawCounts,Tn=ne._multiDrawCount,mt=ke?Le.get(ke).bytesPerElement:1,gn=re.get(Q).currentProgram.getUniforms();for(let Zn=0;Zn<Tn;Zn++)gn.setValue(j,"_gl_DrawID",Zn),Nt.render(wt[Zn]/mt,Ye[Zn])}else if(ne.isInstancedMesh)Nt.renderInstances(Ke,$t,ne.count);else if(ee.isInstancedBufferGeometry){const wt=ee._maxInstanceCount!==void 0?ee._maxInstanceCount:1/0,Ye=Math.min(ee.instanceCount,wt);Nt.renderInstances(Ke,$t,Ye)}else Nt.render(Ke,$t)};function ss(T,G,ee){T.transparent===!0&&T.side===Sa&&T.forceSinglePass===!1?(T.side=pi,T.needsUpdate=!0,Zi(T,G,ee),T.side=ns,T.needsUpdate=!0,Zi(T,G,ee),T.side=Sa):Zi(T,G,ee)}this.compile=function(T,G,ee=null){ee===null&&(ee=T),L=Ie.get(ee),L.init(G),A.push(L),ee.traverseVisible(function(ne){ne.isLight&&ne.layers.test(G.layers)&&(L.pushLight(ne),ne.castShadow&&L.pushShadow(ne))}),T!==ee&&T.traverseVisible(function(ne){ne.isLight&&ne.layers.test(G.layers)&&(L.pushLight(ne),ne.castShadow&&L.pushShadow(ne))}),L.setupLights();const Q=new Set;return T.traverse(function(ne){if(!(ne.isMesh||ne.isPoints||ne.isLine||ne.isSprite))return;const Ue=ne.material;if(Ue)if(Array.isArray(Ue))for(let He=0;He<Ue.length;He++){const Re=Ue[He];ss(Re,ee,ne),Q.add(Re)}else ss(Ue,ee,ne),Q.add(Ue)}),L=A.pop(),Q},this.compileAsync=function(T,G,ee=null){const Q=this.compile(T,G,ee);return new Promise(ne=>{function Ue(){if(Q.forEach(function(He){re.get(He).currentProgram.isReady()&&Q.delete(He)}),Q.size===0){ne(T);return}setTimeout(Ue,10)}At.get("KHR_parallel_shader_compile")!==null?Ue():setTimeout(Ue,10)})};let Ca=null;function mi(T){Ca&&Ca(T)}function mn(){zn.stop()}function _n(){zn.start()}const zn=new Gx;zn.setAnimationLoop(mi),typeof self<"u"&&zn.setContext(self),this.setAnimationLoop=function(T){Ca=T,Ze.setAnimationLoop(T),T===null?zn.stop():zn.start()},Ze.addEventListener("sessionstart",mn),Ze.addEventListener("sessionend",_n),this.render=function(T,G){if(G!==void 0&&G.isCamera!==!0){Lt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;Z!==null&&Z.renderStart(T,G);const ee=Ze.enabled===!0&&Ze.isPresenting===!0,Q=U!==null&&($===null||ee)&&U.begin(X,$);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),Ze.enabled===!0&&Ze.isPresenting===!0&&(U===null||U.isCompositing()===!1)&&(Ze.cameraAutoUpdate===!0&&Ze.updateCamera(G),G=Ze.getCamera()),T.isScene===!0&&T.onBeforeRender(X,T,G,$),L=Ie.get(T,A.length),L.init(G),L.state.textureUnits=le.getTextureUnits(),A.push(L),Qt.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),xt.setFromProjectionMatrix(Qt,ya,G.reversedDepth),ct=this.localClippingEnabled,at=$e.init(this.clippingPlanes,ct),N=Fe.get(T,B.length),N.init(),B.push(N),Ze.enabled===!0&&Ze.isPresenting===!0){const He=X.xr.getDepthSensingMesh();He!==null&&ca(He,G,-1/0,X.sortObjects)}ca(T,G,0,X.sortObjects),N.finish(),X.sortObjects===!0&&N.sort(We,nt,G.reversedDepth),Vt=Ze.enabled===!1||Ze.isPresenting===!1||Ze.hasDepthSensing()===!1,Vt&&rt.addToRenderList(N,T),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),at===!0&&$e.beginShadows();const ne=L.state.shadowsArray;if(tt.render(ne,T,G),at===!0&&$e.endShadows(),(Q&&U.hasRenderPass())===!1){const He=N.opaque,Re=N.transmissive;if(L.setupLights(),G.isArrayCamera){const ke=G.cameras;if(Re.length>0)for(let ze=0,je=ke.length;ze<je;ze++){const lt=ke[ze];Ys(He,Re,T,lt)}Vt&&rt.render(T);for(let ze=0,je=ke.length;ze<je;ze++){const lt=ke[ze];Ws(N,T,lt,lt.viewport)}}else Re.length>0&&Ys(He,Re,T,G),Vt&&rt.render(T),Ws(N,T,G)}$!==null&&H===0&&(le.updateMultisampleRenderTarget($),le.updateRenderTargetMipmap($)),Q&&U.end(X),T.isScene===!0&&T.onAfterRender(X,T,G),Pe.resetDefaultState(),he=-1,Se=null,A.pop(),A.length>0?(L=A[A.length-1],le.setTextureUnits(L.state.textureUnits),at===!0&&$e.setGlobalState(X.clippingPlanes,L.state.camera)):L=null,B.pop(),B.length>0?N=B[B.length-1]:N=null,Z!==null&&Z.renderEnd()};function ca(T,G,ee,Q){if(T.visible===!1)return;if(T.layers.test(G.layers)){if(T.isGroup)ee=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(G);else if(T.isLightProbeGrid)L.pushLightProbeGrid(T);else if(T.isLight)L.pushLight(T),T.castShadow&&L.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||xt.intersectsSprite(T)){Q&&qt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Qt);const He=fe.update(T),Re=T.material;Re.visible&&N.push(T,He,Re,ee,qt.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||xt.intersectsObject(T))){const He=fe.update(T),Re=T.material;if(Q&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),qt.copy(T.boundingSphere.center)):(He.boundingSphere===null&&He.computeBoundingSphere(),qt.copy(He.boundingSphere.center)),qt.applyMatrix4(T.matrixWorld).applyMatrix4(Qt)),Array.isArray(Re)){const ke=He.groups;for(let ze=0,je=ke.length;ze<je;ze++){const lt=ke[ze],Ke=Re[lt.materialIndex];Ke&&Ke.visible&&N.push(T,He,Ke,ee,qt.z,lt)}}else Re.visible&&N.push(T,He,Re,ee,qt.z,null)}}const Ue=T.children;for(let He=0,Re=Ue.length;He<Re;He++)ca(Ue[He],G,ee,Q)}function Ws(T,G,ee,Q){const{opaque:ne,transmissive:Ue,transparent:He}=T;L.setupLightsView(ee),at===!0&&$e.setGlobalState(X.clippingPlanes,ee),Q&&E.viewport(I.copy(Q)),ne.length>0&&ua(ne,G,ee),Ue.length>0&&ua(Ue,G,ee),He.length>0&&ua(He,G,ee),E.buffers.depth.setTest(!0),E.buffers.depth.setMask(!0),E.buffers.color.setMask(!0),E.setPolygonOffset(!1)}function Ys(T,G,ee,Q){if((ee.isScene===!0?ee.overrideMaterial:null)!==null)return;if(L.state.transmissionRenderTarget[Q.id]===void 0){const Ke=At.has("EXT_color_buffer_half_float")||At.has("EXT_color_buffer_float");L.state.transmissionRenderTarget[Q.id]=new ba(1,1,{generateMipmaps:!0,type:Ke?is:Xi,minFilter:Hs,samples:Math.max(4,F.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ct.workingColorSpace})}const Ue=L.state.transmissionRenderTarget[Q.id],He=Q.viewport||I;Ue.setSize(He.z*X.transmissionResolutionScale,He.w*X.transmissionResolutionScale);const Re=X.getRenderTarget(),ke=X.getActiveCubeFace(),ze=X.getActiveMipmapLevel();X.setRenderTarget(Ue),X.getClearColor(Ae),De=X.getClearAlpha(),De<1&&X.setClearColor(16777215,.5),X.clear(),Vt&&rt.render(ee);const je=X.toneMapping;X.toneMapping=Ea;const lt=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),L.setupLightsView(Q),at===!0&&$e.setGlobalState(X.clippingPlanes,Q),ua(T,ee,Q),le.updateMultisampleRenderTarget(Ue),le.updateRenderTargetMipmap(Ue),At.has("WEBGL_multisampled_render_to_texture")===!1){let Ke=!1;for(let yt=0,$t=G.length;yt<$t;yt++){const Ft=G[yt],{object:Nt,geometry:wt,material:Ye,group:Tn}=Ft;if(Ye.side===Sa&&Nt.layers.test(Q.layers)){const mt=Ye.side;Ye.side=pi,Ye.needsUpdate=!0,ji(Nt,ee,Q,wt,Ye,Tn),Ye.side=mt,Ye.needsUpdate=!0,Ke=!0}}Ke===!0&&(le.updateMultisampleRenderTarget(Ue),le.updateRenderTargetMipmap(Ue))}X.setRenderTarget(Re,ke,ze),X.setClearColor(Ae,De),lt!==void 0&&(Q.viewport=lt),X.toneMapping=je}function ua(T,G,ee){const Q=G.isScene===!0?G.overrideMaterial:null;for(let ne=0,Ue=T.length;ne<Ue;ne++){const He=T[ne],{object:Re,geometry:ke,group:ze}=He;let je=He.material;je.allowOverride===!0&&Q!==null&&(je=Q),Re.layers.test(ee.layers)&&ji(Re,G,ee,ke,je,ze)}}function ji(T,G,ee,Q,ne,Ue){T.onBeforeRender(X,G,ee,Q,ne,Ue),T.modelViewMatrix.multiplyMatrices(ee.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),ne.onBeforeRender(X,G,ee,Q,T,Ue),ne.transparent===!0&&ne.side===Sa&&ne.forceSinglePass===!1?(ne.side=pi,ne.needsUpdate=!0,X.renderBufferDirect(ee,G,Q,ne,T,Ue),ne.side=ns,ne.needsUpdate=!0,X.renderBufferDirect(ee,G,Q,ne,T,Ue),ne.side=Sa):X.renderBufferDirect(ee,G,Q,ne,T,Ue),T.onAfterRender(X,G,ee,Q,ne,Ue)}function Zi(T,G,ee){G.isScene!==!0&&(G=tn);const Q=re.get(T),ne=L.state.lights,Ue=L.state.shadowsArray,He=ne.state.version,Re=we.getParameters(T,ne.state,Ue,G,ee,L.state.lightProbeGridArray),ke=we.getProgramCacheKey(Re);let ze=Q.programs;Q.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?G.environment:null,Q.fog=G.fog;const je=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;Q.envMap=Ce.get(T.envMap||Q.environment,je),Q.envMapRotation=Q.environment!==null&&T.envMap===null?G.environmentRotation:T.envMapRotation,ze===void 0&&(T.addEventListener("dispose",In),ze=new Map,Q.programs=ze);let lt=ze.get(ke);if(lt!==void 0){if(Q.currentProgram===lt&&Q.lightsStateVersion===He)return Di(T,Re),lt}else Re.uniforms=we.getUniforms(T),Z!==null&&T.isNodeMaterial&&Z.build(T,ee,Re),T.onBeforeCompile(Re,X),lt=we.acquireProgram(Re,ke),ze.set(ke,lt),Q.uniforms=Re.uniforms;const Ke=Q.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ke.clippingPlanes=$e.uniform),Di(T,Re),Q.needsLights=Be(T),Q.lightsStateVersion=He,Q.needsLights&&(Ke.ambientLightColor.value=ne.state.ambient,Ke.lightProbe.value=ne.state.probe,Ke.directionalLights.value=ne.state.directional,Ke.directionalLightShadows.value=ne.state.directionalShadow,Ke.spotLights.value=ne.state.spot,Ke.spotLightShadows.value=ne.state.spotShadow,Ke.rectAreaLights.value=ne.state.rectArea,Ke.ltc_1.value=ne.state.rectAreaLTC1,Ke.ltc_2.value=ne.state.rectAreaLTC2,Ke.pointLights.value=ne.state.point,Ke.pointLightShadows.value=ne.state.pointShadow,Ke.hemisphereLights.value=ne.state.hemi,Ke.directionalShadowMatrix.value=ne.state.directionalShadowMatrix,Ke.spotLightMatrix.value=ne.state.spotLightMatrix,Ke.spotLightMap.value=ne.state.spotLightMap,Ke.pointShadowMatrix.value=ne.state.pointShadowMatrix),Q.lightProbeGrid=L.state.lightProbeGridArray.length>0,Q.currentProgram=lt,Q.uniformsList=null,lt}function wi(T){if(T.uniformsList===null){const G=T.currentProgram.getUniforms();T.uniformsList=Au.seqWithValue(G.seq,T.uniforms)}return T.uniformsList}function Di(T,G){const ee=re.get(T);ee.outputColorSpace=G.outputColorSpace,ee.batching=G.batching,ee.batchingColor=G.batchingColor,ee.instancing=G.instancing,ee.instancingColor=G.instancingColor,ee.instancingMorph=G.instancingMorph,ee.skinning=G.skinning,ee.morphTargets=G.morphTargets,ee.morphNormals=G.morphNormals,ee.morphColors=G.morphColors,ee.morphTargetsCount=G.morphTargetsCount,ee.numClippingPlanes=G.numClippingPlanes,ee.numIntersection=G.numClipIntersection,ee.vertexAlphas=G.vertexAlphas,ee.vertexTangents=G.vertexTangents,ee.toneMapping=G.toneMapping}function Li(T,G){if(T.length===0)return null;if(T.length===1)return T[0].texture!==null?T[0]:null;C.setFromMatrixPosition(G.matrixWorld);for(let ee=0,Q=T.length;ee<Q;ee++){const ne=T[ee];if(ne.texture!==null&&ne.boundingBox.containsPoint(C))return ne}return null}function Ki(T,G,ee,Q,ne){G.isScene!==!0&&(G=tn),le.resetTextureUnits();const Ue=G.fog,He=Q.isMeshStandardMaterial||Q.isMeshLambertMaterial||Q.isMeshPhongMaterial?G.environment:null,Re=$===null?X.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:Ct.workingColorSpace,ke=Q.isMeshStandardMaterial||Q.isMeshLambertMaterial&&!Q.envMap||Q.isMeshPhongMaterial&&!Q.envMap,ze=Ce.get(Q.envMap||He,ke),je=Q.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,lt=!!ee.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),Ke=!!ee.morphAttributes.position,yt=!!ee.morphAttributes.normal,$t=!!ee.morphAttributes.color;let Ft=Ea;Q.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(Ft=X.toneMapping);const Nt=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,wt=Nt!==void 0?Nt.length:0,Ye=re.get(Q),Tn=L.state.lights;if(at===!0&&(ct===!0||T!==Se)){const Bt=T===Se&&Q.id===he;$e.setState(Q,T,Bt)}let mt=!1;Q.version===Ye.__version?(Ye.needsLights&&Ye.lightsStateVersion!==Tn.state.version||Ye.outputColorSpace!==Re||ne.isBatchedMesh&&Ye.batching===!1||!ne.isBatchedMesh&&Ye.batching===!0||ne.isBatchedMesh&&Ye.batchingColor===!0&&ne.colorTexture===null||ne.isBatchedMesh&&Ye.batchingColor===!1&&ne.colorTexture!==null||ne.isInstancedMesh&&Ye.instancing===!1||!ne.isInstancedMesh&&Ye.instancing===!0||ne.isSkinnedMesh&&Ye.skinning===!1||!ne.isSkinnedMesh&&Ye.skinning===!0||ne.isInstancedMesh&&Ye.instancingColor===!0&&ne.instanceColor===null||ne.isInstancedMesh&&Ye.instancingColor===!1&&ne.instanceColor!==null||ne.isInstancedMesh&&Ye.instancingMorph===!0&&ne.morphTexture===null||ne.isInstancedMesh&&Ye.instancingMorph===!1&&ne.morphTexture!==null||Ye.envMap!==ze||Q.fog===!0&&Ye.fog!==Ue||Ye.numClippingPlanes!==void 0&&(Ye.numClippingPlanes!==$e.numPlanes||Ye.numIntersection!==$e.numIntersection)||Ye.vertexAlphas!==je||Ye.vertexTangents!==lt||Ye.morphTargets!==Ke||Ye.morphNormals!==yt||Ye.morphColors!==$t||Ye.toneMapping!==Ft||Ye.morphTargetsCount!==wt||!!Ye.lightProbeGrid!=L.state.lightProbeGridArray.length>0)&&(mt=!0):(mt=!0,Ye.__version=Q.version);let gn=Ye.currentProgram;mt===!0&&(gn=Zi(Q,G,ne),Z&&Q.isNodeMaterial&&Z.onUpdateProgram(Q,gn,Ye));let Zn=!1,Hn=!1,vn=!1;const Ut=gn.getUniforms(),an=Ye.uniforms;if(E.useProgram(gn.program)&&(Zn=!0,Hn=!0,vn=!0),Q.id!==he&&(he=Q.id,Hn=!0),Ye.needsLights){const Bt=Li(L.state.lightProbeGridArray,ne);Ye.lightProbeGrid!==Bt&&(Ye.lightProbeGrid=Bt,Hn=!0)}if(Zn||Se!==T){E.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),Ut.setValue(j,"projectionMatrix",T.projectionMatrix),Ut.setValue(j,"viewMatrix",T.matrixWorldInverse);const Gn=Ut.map.cameraPosition;Gn!==void 0&&Gn.setValue(j,Jt.setFromMatrixPosition(T.matrixWorld)),F.logarithmicDepthBuffer&&Ut.setValue(j,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&Ut.setValue(j,"isOrthographic",T.isOrthographicCamera===!0),Se!==T&&(Se=T,Hn=!0,vn=!0)}if(Ye.needsLights&&(Tn.state.directionalShadowMap.length>0&&Ut.setValue(j,"directionalShadowMap",Tn.state.directionalShadowMap,le),Tn.state.spotShadowMap.length>0&&Ut.setValue(j,"spotShadowMap",Tn.state.spotShadowMap,le),Tn.state.pointShadowMap.length>0&&Ut.setValue(j,"pointShadowMap",Tn.state.pointShadowMap,le)),ne.isSkinnedMesh){Ut.setOptional(j,ne,"bindMatrix"),Ut.setOptional(j,ne,"bindMatrixInverse");const Bt=ne.skeleton;Bt&&(Bt.boneTexture===null&&Bt.computeBoneTexture(),Ut.setValue(j,"boneTexture",Bt.boneTexture,le))}ne.isBatchedMesh&&(Ut.setOptional(j,ne,"batchingTexture"),Ut.setValue(j,"batchingTexture",ne._matricesTexture,le),Ut.setOptional(j,ne,"batchingIdTexture"),Ut.setValue(j,"batchingIdTexture",ne._indirectTexture,le),Ut.setOptional(j,ne,"batchingColorTexture"),ne._colorsTexture!==null&&Ut.setValue(j,"batchingColorTexture",ne._colorsTexture,le));const gi=ee.morphAttributes;if((gi.position!==void 0||gi.normal!==void 0||gi.color!==void 0)&&W.update(ne,ee,gn),(Hn||Ye.receiveShadow!==ne.receiveShadow)&&(Ye.receiveShadow=ne.receiveShadow,Ut.setValue(j,"receiveShadow",ne.receiveShadow)),(Q.isMeshStandardMaterial||Q.isMeshLambertMaterial||Q.isMeshPhongMaterial)&&Q.envMap===null&&G.environment!==null&&(an.envMapIntensity.value=G.environmentIntensity),an.dfgLUT!==void 0&&(an.dfgLUT.value=aR()),Hn){if(Ut.setValue(j,"toneMappingExposure",X.toneMappingExposure),Ye.needsLights&&_e(an,vn),Ue&&Q.fog===!0&&Ge.refreshFogUniforms(an,Ue),Ge.refreshMaterialUniforms(an,Q,ge,Me,L.state.transmissionRenderTarget[T.id]),Ye.needsLights&&Ye.lightProbeGrid){const Bt=Ye.lightProbeGrid;an.probesSH.value=Bt.texture,an.probesMin.value.copy(Bt.boundingBox.min),an.probesMax.value.copy(Bt.boundingBox.max),an.probesResolution.value.copy(Bt.resolution)}Au.upload(j,wi(Ye),an,le)}if(Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(Au.upload(j,wi(Ye),an,le),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&Ut.setValue(j,"center",ne.center),Ut.setValue(j,"modelViewMatrix",ne.modelViewMatrix),Ut.setValue(j,"normalMatrix",ne.normalMatrix),Ut.setValue(j,"modelMatrix",ne.matrixWorld),Q.uniformsGroups!==void 0){const Bt=Q.uniformsGroups;for(let Gn=0,fa=Bt.length;Gn<fa;Gn++){const wa=Bt[Gn];Ee.update(wa,gn),Ee.bind(wa,gn)}}return gn}function _e(T,G){T.ambientLightColor.needsUpdate=G,T.lightProbe.needsUpdate=G,T.directionalLights.needsUpdate=G,T.directionalLightShadows.needsUpdate=G,T.pointLights.needsUpdate=G,T.pointLightShadows.needsUpdate=G,T.spotLights.needsUpdate=G,T.spotLightShadows.needsUpdate=G,T.rectAreaLights.needsUpdate=G,T.hemisphereLights.needsUpdate=G}function Be(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return $},this.setRenderTargetTextures=function(T,G,ee){const Q=re.get(T);Q.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,Q.__autoAllocateDepthBuffer===!1&&(Q.__useRenderToTexture=!1),re.get(T.texture).__webglTexture=G,re.get(T.depthTexture).__webglTexture=Q.__autoAllocateDepthBuffer?void 0:ee,Q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,G){const ee=re.get(T);ee.__webglFramebuffer=G,ee.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(T,G=0,ee=0){$=T,z=G,H=ee;let Q=null,ne=!1,Ue=!1;if(T){const Re=re.get(T);if(Re.__useDefaultFramebuffer!==void 0){E.bindFramebuffer(j.FRAMEBUFFER,Re.__webglFramebuffer),I.copy(T.viewport),K.copy(T.scissor),Te=T.scissorTest,E.viewport(I),E.scissor(K),E.setScissorTest(Te),he=-1;return}else if(Re.__webglFramebuffer===void 0)le.setupRenderTarget(T);else if(Re.__hasExternalTextures)le.rebindTextures(T,re.get(T.texture).__webglTexture,re.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const je=T.depthTexture;if(Re.__boundDepthTexture!==je){if(je!==null&&re.has(je)&&(T.width!==je.image.width||T.height!==je.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");le.setupDepthRenderbuffer(T)}}const ke=T.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(Ue=!0);const ze=re.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(ze[G])?Q=ze[G][ee]:Q=ze[G],ne=!0):T.samples>0&&le.useMultisampledRTT(T)===!1?Q=re.get(T).__webglMultisampledFramebuffer:Array.isArray(ze)?Q=ze[ee]:Q=ze,I.copy(T.viewport),K.copy(T.scissor),Te=T.scissorTest}else I.copy(Qe).multiplyScalar(ge).floor(),K.copy(vt).multiplyScalar(ge).floor(),Te=ht;if(ee!==0&&(Q=me),E.bindFramebuffer(j.FRAMEBUFFER,Q)&&E.drawBuffers(T,Q),E.viewport(I),E.scissor(K),E.setScissorTest(Te),ne){const Re=re.get(T.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_CUBE_MAP_POSITIVE_X+G,Re.__webglTexture,ee)}else if(Ue){const Re=G;for(let ke=0;ke<T.textures.length;ke++){const ze=re.get(T.textures[ke]);j.framebufferTextureLayer(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0+ke,ze.__webglTexture,ee,Re)}}else if(T!==null&&ee!==0){const Re=re.get(T.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,Re.__webglTexture,ee)}he=-1},this.readRenderTargetPixels=function(T,G,ee,Q,ne,Ue,He,Re=0){if(!(T&&T.isWebGLRenderTarget)){Lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ke=re.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&He!==void 0&&(ke=ke[He]),ke){E.bindFramebuffer(j.FRAMEBUFFER,ke);try{const ze=T.textures[Re],je=ze.format,lt=ze.type;if(T.textures.length>1&&j.readBuffer(j.COLOR_ATTACHMENT0+Re),!F.textureFormatReadable(je)){Lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!F.textureTypeReadable(lt)){Lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=T.width-Q&&ee>=0&&ee<=T.height-ne&&j.readPixels(G,ee,Q,ne,Oe.convert(je),Oe.convert(lt),Ue)}finally{const ze=$!==null?re.get($).__webglFramebuffer:null;E.bindFramebuffer(j.FRAMEBUFFER,ze)}}},this.readRenderTargetPixelsAsync=async function(T,G,ee,Q,ne,Ue,He,Re=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ke=re.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&He!==void 0&&(ke=ke[He]),ke)if(G>=0&&G<=T.width-Q&&ee>=0&&ee<=T.height-ne){E.bindFramebuffer(j.FRAMEBUFFER,ke);const ze=T.textures[Re],je=ze.format,lt=ze.type;if(T.textures.length>1&&j.readBuffer(j.COLOR_ATTACHMENT0+Re),!F.textureFormatReadable(je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!F.textureTypeReadable(lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ke=j.createBuffer();j.bindBuffer(j.PIXEL_PACK_BUFFER,Ke),j.bufferData(j.PIXEL_PACK_BUFFER,Ue.byteLength,j.STREAM_READ),j.readPixels(G,ee,Q,ne,Oe.convert(je),Oe.convert(lt),0);const yt=$!==null?re.get($).__webglFramebuffer:null;E.bindFramebuffer(j.FRAMEBUFFER,yt);const $t=j.fenceSync(j.SYNC_GPU_COMMANDS_COMPLETE,0);return j.flush(),await cE(j,$t,4),j.bindBuffer(j.PIXEL_PACK_BUFFER,Ke),j.getBufferSubData(j.PIXEL_PACK_BUFFER,0,Ue),j.deleteBuffer(Ke),j.deleteSync($t),Ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,G=null,ee=0){const Q=Math.pow(2,-ee),ne=Math.floor(T.image.width*Q),Ue=Math.floor(T.image.height*Q),He=G!==null?G.x:0,Re=G!==null?G.y:0;le.setTexture2D(T,0),j.copyTexSubImage2D(j.TEXTURE_2D,ee,0,0,He,Re,ne,Ue),E.unbindTexture()},this.copyTextureToTexture=function(T,G,ee=null,Q=null,ne=0,Ue=0){let He,Re,ke,ze,je,lt,Ke,yt,$t;const Ft=T.isCompressedTexture?T.mipmaps[Ue]:T.image;if(ee!==null)He=ee.max.x-ee.min.x,Re=ee.max.y-ee.min.y,ke=ee.isBox3?ee.max.z-ee.min.z:1,ze=ee.min.x,je=ee.min.y,lt=ee.isBox3?ee.min.z:0;else{const an=Math.pow(2,-ne);He=Math.floor(Ft.width*an),Re=Math.floor(Ft.height*an),T.isDataArrayTexture?ke=Ft.depth:T.isData3DTexture?ke=Math.floor(Ft.depth*an):ke=1,ze=0,je=0,lt=0}Q!==null?(Ke=Q.x,yt=Q.y,$t=Q.z):(Ke=0,yt=0,$t=0);const Nt=Oe.convert(G.format),wt=Oe.convert(G.type);let Ye;G.isData3DTexture?(le.setTexture3D(G,0),Ye=j.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(le.setTexture2DArray(G,0),Ye=j.TEXTURE_2D_ARRAY):(le.setTexture2D(G,0),Ye=j.TEXTURE_2D),E.activeTexture(j.TEXTURE0),E.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,G.flipY),E.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),E.pixelStorei(j.UNPACK_ALIGNMENT,G.unpackAlignment);const Tn=E.getParameter(j.UNPACK_ROW_LENGTH),mt=E.getParameter(j.UNPACK_IMAGE_HEIGHT),gn=E.getParameter(j.UNPACK_SKIP_PIXELS),Zn=E.getParameter(j.UNPACK_SKIP_ROWS),Hn=E.getParameter(j.UNPACK_SKIP_IMAGES);E.pixelStorei(j.UNPACK_ROW_LENGTH,Ft.width),E.pixelStorei(j.UNPACK_IMAGE_HEIGHT,Ft.height),E.pixelStorei(j.UNPACK_SKIP_PIXELS,ze),E.pixelStorei(j.UNPACK_SKIP_ROWS,je),E.pixelStorei(j.UNPACK_SKIP_IMAGES,lt);const vn=T.isDataArrayTexture||T.isData3DTexture,Ut=G.isDataArrayTexture||G.isData3DTexture;if(T.isDepthTexture){const an=re.get(T),gi=re.get(G),Bt=re.get(an.__renderTarget),Gn=re.get(gi.__renderTarget);E.bindFramebuffer(j.READ_FRAMEBUFFER,Bt.__webglFramebuffer),E.bindFramebuffer(j.DRAW_FRAMEBUFFER,Gn.__webglFramebuffer);for(let fa=0;fa<ke;fa++)vn&&(j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,re.get(T).__webglTexture,ne,lt+fa),j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,re.get(G).__webglTexture,Ue,$t+fa)),j.blitFramebuffer(ze,je,He,Re,Ke,yt,He,Re,j.DEPTH_BUFFER_BIT,j.NEAREST);E.bindFramebuffer(j.READ_FRAMEBUFFER,null),E.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else if(ne!==0||T.isRenderTargetTexture||re.has(T)){const an=re.get(T),gi=re.get(G);E.bindFramebuffer(j.READ_FRAMEBUFFER,ue),E.bindFramebuffer(j.DRAW_FRAMEBUFFER,q);for(let Bt=0;Bt<ke;Bt++)vn?j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,an.__webglTexture,ne,lt+Bt):j.framebufferTexture2D(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,an.__webglTexture,ne),Ut?j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,gi.__webglTexture,Ue,$t+Bt):j.framebufferTexture2D(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,gi.__webglTexture,Ue),ne!==0?j.blitFramebuffer(ze,je,He,Re,Ke,yt,He,Re,j.COLOR_BUFFER_BIT,j.NEAREST):Ut?j.copyTexSubImage3D(Ye,Ue,Ke,yt,$t+Bt,ze,je,He,Re):j.copyTexSubImage2D(Ye,Ue,Ke,yt,ze,je,He,Re);E.bindFramebuffer(j.READ_FRAMEBUFFER,null),E.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else Ut?T.isDataTexture||T.isData3DTexture?j.texSubImage3D(Ye,Ue,Ke,yt,$t,He,Re,ke,Nt,wt,Ft.data):G.isCompressedArrayTexture?j.compressedTexSubImage3D(Ye,Ue,Ke,yt,$t,He,Re,ke,Nt,Ft.data):j.texSubImage3D(Ye,Ue,Ke,yt,$t,He,Re,ke,Nt,wt,Ft):T.isDataTexture?j.texSubImage2D(j.TEXTURE_2D,Ue,Ke,yt,He,Re,Nt,wt,Ft.data):T.isCompressedTexture?j.compressedTexSubImage2D(j.TEXTURE_2D,Ue,Ke,yt,Ft.width,Ft.height,Nt,Ft.data):j.texSubImage2D(j.TEXTURE_2D,Ue,Ke,yt,He,Re,Nt,wt,Ft);E.pixelStorei(j.UNPACK_ROW_LENGTH,Tn),E.pixelStorei(j.UNPACK_IMAGE_HEIGHT,mt),E.pixelStorei(j.UNPACK_SKIP_PIXELS,gn),E.pixelStorei(j.UNPACK_SKIP_ROWS,Zn),E.pixelStorei(j.UNPACK_SKIP_IMAGES,Hn),Ue===0&&G.generateMipmaps&&j.generateMipmap(Ye),E.unbindTexture()},this.initRenderTarget=function(T){re.get(T).__webglFramebuffer===void 0&&le.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?le.setTextureCube(T,0):T.isData3DTexture?le.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?le.setTexture2DArray(T,0):le.setTexture2D(T,0),E.unbindTexture()},this.resetState=function(){z=0,H=0,$=null,E.reset(),Pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ya}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Ct._getDrawingBufferColorSpace(e),i.unpackColorSpace=Ct._getUnpackColorSpace()}}const rR="/assets/Reckk-RegularItalic-DLM8ilig.ttf",oR="/assets/Reckk-MediumItalic-D_uyfX4p.otf",lR="/assets/CXLMediumItalic-DYSp-DoC.otf",cR=4,uR=5,$a={fleet:"MAEX",name:"SharpeShark",version:"v1",role:"Executor",didShort:"0xf8a2…6035"};function Zx(a){return["discover","copy","supervise","isolate"][a]??"discover"}function fR(a){return Zx(a)}function dR(a,e,i){const r=e.split(/\s+/),o=[];let c="";for(const u of r){const d=c?`${c} ${u}`:u;a.measureText(d).width<=i?c=d:(c&&o.push(c),c=u)}return c&&o.push(c),o}function hR(a,e){const r=e<520?300:400,o=Math.round(r*a),c=Math.round(o*uR/cR);return{W:o,H:c}}function Kx(a,e,i,r,o,c){const u=Math.min(c,r/2,o/2);a.beginPath(),a.moveTo(e+u,i),a.arcTo(e+r,i,e+r,i+o,u),a.arcTo(e+r,i+o,e,i+o,u),a.arcTo(e,i+o,e,i,u),a.arcTo(e,i,e+r,i,u),a.closePath()}function sn(a,e,i,r,o,c,u){Kx(a,e,i,r,o,c),a.fillStyle=u,a.fill()}function pn(a,e,i,r,o,c,u,d){Kx(a,e,i,r,o,c),a.strokeStyle=u,a.lineWidth=d,a.stroke()}function Vu(a,e,i,r,o,c,u=1){const d=Math.min(1,Math.max(0,u));sn(a,e,i,r,o,c,`rgba(12, 14, 18, ${d})`),pn(a,e,i,r,o,c,"rgba(255,255,255,0.12)",Math.max(1,c*.12))}function Hl(a,e,i,r,o,c,u){if(r<2||o<2)return;const d=8*c,m=a.createLinearGradient(e,i+o,e+r,i);if(m.addColorStop(0,"#050508"),m.addColorStop(1,"rgba(200,245,168,0.14)"),sn(a,e,i,r,o,d,m),pn(a,e,i,r,o,d,"rgba(255,255,255,0.14)",Math.max(1,1.25*c)),(u==null?void 0:u.innerStroke)!==!1){const h=2.5*c;pn(a,e+h,i+h,r-h*2,o-h*2,Math.max(2,d-1.5*c),"rgba(200,245,168,0.35)",Math.max(1,c))}}const ks="rgba(255,255,255,0.08)",Xs="rgba(255,255,255,0.14)";function ku(a,e,i,r,o,c,u){const d=11*u;a.fillStyle="#c8f5a8",a.font=`700 ${d}px "DM Mono", ui-monospace, monospace`,a.textAlign="left",a.fillText(c,e+o,i+o+d);const m=22*u,h=e+r-o-m,g=i+o-2*u;return pn(a,h,g,m,m,4*u,"rgba(255,255,255,0.14)",1),a.strokeStyle="rgba(255,255,255,0.55)",a.lineWidth=Math.max(1,1.25*u),a.beginPath(),a.moveTo(h+6*u,g+6*u),a.lineTo(h+m-6*u,g+m-6*u),a.moveTo(h+m-6*u,g+6*u),a.lineTo(h+6*u,g+m-6*u),a.stroke(),i+o+d+10*u}function Qx(a,e,i,r,o,c,u,d){const m=28*d,h=(r-o*2)/2,g=10*d;a.font=`700 ${g}px "DM Mono", ui-monospace, monospace`;for(let v=0;v<2;v++){const _=e+o+v*h,M=v===u;a.fillStyle=M?"rgba(255,255,255,0.92)":"rgba(255,255,255,0.38)",a.textAlign="center",a.fillText(c[v],_+h/2,i+14*d),M&&(a.fillStyle="#c8f5a8",a.fillRect(_+4*d,i+m-2*d,h-8*d,2*d))}return a.textAlign="left",a.strokeStyle="rgba(255,255,255,0.08)",a.lineWidth=1,a.beginPath(),a.moveTo(e+o,i+m),a.lineTo(e+r-o,i+m),a.stroke(),i+m+10*d}function pR(a,e,i,r,o,c,u,d,m){const h=10*m,g=22*m;a.fillStyle="rgba(255,255,255,0.92)",a.font=`700 ${h}px "DM Mono", ui-monospace, monospace`,a.textAlign="left",a.fillText(c,e+o,i+14*m);const v=`${String(u).padStart(2,"0")} / ${String(d).padStart(2,"0")}`;a.fillStyle="rgba(255,255,255,0.38)",a.font=`700 ${8*m}px "DM Mono", ui-monospace, monospace`,a.textAlign="right",a.fillText(v,e+r-o,i+14*m),a.textAlign="left",a.strokeStyle="rgba(255,255,255,0.08)",a.lineWidth=1,a.beginPath(),a.moveTo(e+o,i+g),a.lineTo(e+r-o,i+g),a.stroke(),a.fillStyle="#c8f5a8";const _=Math.min(72*m,r*.28);return a.fillRect(e+o,i+g-2*m,_,2*m),i+g+10*m}function mR(a,e,i,r,o,c,u){const d=9*u;a.fillStyle="rgba(255,255,255,0.38)",a.font=`700 ${d}px "DM Mono", ui-monospace, monospace`,a.textAlign="left",a.fillText(o,e,i+d);const m=i+d+6*u,h=34*u;sn(a,e,m,r,h,6*u,ks),pn(a,e,m,r,h,6*u,Xs,1),a.fillStyle=c.startsWith("Select")||c==="0x..."?"rgba(255,255,255,0.35)":"rgba(255,255,255,0.88)",a.font=`500 ${11*u}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText(c,e+10*u,m+h*.62),a.strokeStyle="rgba(255,255,255,0.4)",a.lineWidth=Math.max(1,1.2*u);const g=e+r-14*u,v=m+h/2;return a.beginPath(),a.moveTo(g-4*u,v-2*u),a.lineTo(g,v+3*u),a.lineTo(g+4*u,v-2*u),a.stroke(),d+6*u+h}function gR(a,e,i,r,o){const c=9*o;a.fillStyle="rgba(255,255,255,0.38)",a.font=`700 ${c}px "DM Mono", ui-monospace, monospace`,a.textAlign="left",a.fillText("AMOUNT",e,i+c),a.textAlign="right",a.fillStyle="rgba(255,255,255,0.45)",a.fillText("AVAILABLE 5,000.00",e+r,i+c),a.textAlign="left";const u=i+c+6*o,d=44*o;sn(a,e,u,r,d,8*o,"#050508"),pn(a,e,u,r,d,8*o,"rgba(255,255,255,0.1)",1),a.fillStyle="rgba(255,255,255,0.92)",a.font=`700 ${22*o}px "DM Mono", ui-monospace, monospace`,a.fillText("0.00",e+12*o,u+d*.68);const m=u+d+10*o;return a.strokeStyle="rgba(255,255,255,0.12)",a.lineWidth=Math.max(2,2*o),a.beginPath(),a.moveTo(e,m),a.lineTo(e+r,m),a.stroke(),sn(a,e,m-5*o,14*o,10*o,5*o,"rgba(255,255,255,0.85)"),a.fillStyle="rgba(255,255,255,0.35)",a.font=`500 ${8*o}px "DM Mono", ui-monospace, monospace`,a.fillText("0.01",e,m+14*o),a.textAlign="right",a.fillText("5,000.00",e+r,m+14*o),a.textAlign="left",c+6*o+d+10*o+16*o}function _R(a,e,i,r,o,c){a.strokeStyle="rgba(255,255,255,0.08)",a.lineWidth=1,a.beginPath(),a.moveTo(e,i),a.lineTo(e+r,i),a.stroke();const u=i+10*o,d=36*o,m=72*o;pn(a,e,u,m,d,6*o,"rgba(255,255,255,0.14)",1),a.fillStyle="rgba(255,255,255,0.55)",a.font=`700 ${9*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText("CANCEL",e+m/2,u+d*.62);const h=e+m+8*o,g=r-m-8*o;return sn(a,h,u,g,d,6*o,"rgba(255,255,255,0.06)"),pn(a,h,u,g,d,6*o,"rgba(255,255,255,0.1)",1),a.fillStyle="#c8f5a8",a.fillRect(h,u+4*o,3*o,d-8*o),a.fillStyle="rgba(255,255,255,0.55)",a.font=`700 ${8.5*o}px "DM Mono", ui-monospace, monospace`,a.fillText(c,h+g/2+2*o,u+d*.62),a.textAlign="left",10*o+d}function kp(a,e,i,r,o){const c=44*o;sn(a,e,i,r,c,8*o,"rgba(200,245,168,0.08)"),pn(a,e,i,r,c,8*o,"rgba(200,245,168,0.22)",1);const u=28*o;return sn(a,e+8*o,i+(c-u)/2,u,u,4*o,"rgba(200,245,168,0.14)"),a.fillStyle="#c8f5a8",a.font=`700 ${10*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText("SS",e+8*o+u/2,i+c*.58),a.textAlign="left",a.fillStyle="rgba(255,255,255,0.92)",a.font=`700 ${11*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText($a.name,e+8*o+u+8*o,i+16*o),a.fillStyle="rgba(255,255,255,0.42)",a.font=`500 ${9*o}px "DM Mono", ui-monospace, monospace`,a.fillText(`${$a.role} · ${$a.didShort}`,e+8*o+u+8*o,i+32*o),c}function vR(a,e,i,r,o){const c=Math.min(r*190/316,r*.58),u=12*o,d=8*o,m=a.createLinearGradient(e,i+c,e+r,i);m.addColorStop(0,"#050508"),m.addColorStop(1,"rgba(200,245,168,0.14)"),sn(a,e,i,r,c,d,m),pn(a,e,i,r,c,d,"rgba(255,255,255,0.14)",Math.max(1,1.25*o)),pn(a,e+2.5*o,i+2.5*o,r-5*o,c-5*o,d-1.5*o,"rgba(200,245,168,0.35)",Math.max(1,o)),a.fillStyle="rgba(255,255,255,0.92)",a.font=`700 ${11*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText($a.fleet,e+u,i+u+10*o),a.fillStyle="#c8f5a8",a.beginPath(),a.arc(e+r-u-7*o,i+u+5*o,6*o,0,Math.PI*2),a.fill(),a.fillStyle="#0a0a0c",a.font=`700 ${8*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText("✓",e+r-u-7*o,i+u+8*o),a.textAlign="left";const h=i+c-u-2*o;a.fillStyle="rgba(255,255,255,0.92)",a.font=`700 ${10*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText($a.name.toUpperCase(),e+u,h-24*o),a.fillStyle="rgba(255,255,255,0.45)",a.font=`500 ${9*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText(`${$a.role} · ${$a.version}`,e+u,h-10*o),a.fillStyle="#c8f5a8",a.font=`700 ${10*o}px "DM Mono", ui-monospace, monospace`,a.fillText($a.didShort,e+u,h);const g=28*o;return sn(a,e+r-u-g,i+c-u-g,g,g,4*o,"rgba(200,245,168,0.14)"),pn(a,e+r-u-g,i+c-u-g,g,g,4*o,"rgba(200,245,168,0.28)",1),a.fillStyle="#c8f5a8",a.font=`700 ${11*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText("SS",e+r-u-g/2,i+c-u-g*.35),a.textAlign="left",c}function xR(a,e,i,r,o){const c=Math.min(r*190/316,r*.58),u=10*o,d=8*o,m=a.createLinearGradient(e,i,e+r,i+c);m.addColorStop(0,"#0a0c10"),m.addColorStop(.55,"#12161c"),m.addColorStop(1,"rgba(200,245,168,0.18)"),sn(a,e,i,r,c,d,m),pn(a,e,i,r,c,d,"rgba(255,255,255,0.14)",Math.max(1,1.25*o)),a.fillStyle="rgba(255,255,255,0.92)",a.font=`700 ${10*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText("Morpheum.",e+u,i+u+10*o),a.strokeStyle="rgba(255,255,255,0.45)",a.lineWidth=Math.max(1,o);for(let h=0;h<3;h++){const g=5*o+h*3.5*o,v=4*o+h*2.5*o;a.beginPath(),a.ellipse(e+r-u-4*o,i+u+8*o,g,v,-.4,-.2,1.2),a.stroke()}return a.fillStyle="rgba(255,255,255,0.88)",a.font=`700 ${9*o}px "DM Mono", ui-monospace, monospace`,a.fillText("5678  ····  ····  7890",e+u,i+c*.52),a.fillStyle="rgba(255,255,255,0.92)",a.font=`700 ${8*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText($a.name.toUpperCase(),e+u,i+c-u-2*o),a.textAlign="right",a.fillStyle="rgba(255,255,255,0.55)",a.font=`700 ${8*o}px "DM Mono", ui-monospace, monospace`,a.fillText("12/28",e+r-u,i+c-u-2*o),a.textAlign="left",c}function SR(a,e,i,r,o,c=25){const u=9*o;a.fillStyle="rgba(255,255,255,0.38)",a.font=`700 ${u}px "DM Mono", ui-monospace, monospace`,a.textAlign="left",a.fillText("MIRROR SIZE",e,i+u),a.textAlign="right",a.fillStyle="#c8f5a8",a.fillText(`${c}%`,e+r,i+u),a.textAlign="left";const d=i+u+12*o,m=Math.max(4,5*o);sn(a,e,d,r,m,m/2,"rgba(255,255,255,0.1)");const h=Math.max(m,r*c/100);sn(a,e,d,h,m,m/2,"rgba(200,245,168,0.75)");const g=7*o;return a.fillStyle="#f4f6f0",a.beginPath(),a.arc(e+h,d+m/2,g,0,Math.PI*2),a.fill(),a.strokeStyle="rgba(200,245,168,0.55)",a.lineWidth=Math.max(1,o),a.stroke(),a.fillStyle="rgba(255,255,255,0.35)",a.font=`500 ${7.5*o}px "DM Mono", ui-monospace, monospace`,a.fillText("5%",e,d+m+14*o),a.textAlign="right",a.fillText("100%",e+r,d+m+14*o),a.textAlign="left",u+12*o+m+16*o}function MR(a,e,i,r,o){const c=9*o;a.fillStyle="rgba(255,255,255,0.38)",a.font=`700 ${c}px "DM Mono", ui-monospace, monospace`,a.fillText("AGENTIC PROTECTION",e,i+c);const u=5*o,d=(r-u*2)/3,m=52*o,h=i+c+8*o;return[{label:"Manual",tone:"rgba(255,255,255,0.12)",active:!1},{label:"Guarded",tone:"rgba(234,179,8,0.55)",active:!0},{label:"High",tone:"rgba(255,71,87,0.35)",active:!1}].forEach((v,_)=>{const M=e+_*(d+u);sn(a,M,h,d,m,6*o,ks),pn(a,M,h,d,m,6*o,v.active?v.tone:Xs,v.active?Math.max(1.5,1.5*o):1),v.active&&(a.fillStyle="rgba(234,179,8,0.12)",a.fillRect(M+1,h+1,3*o,m-2)),a.fillStyle=v.active?"rgba(255,255,255,0.92)":"rgba(255,255,255,0.55)",a.font=`700 ${9*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.textAlign="center",a.fillText(v.label,M+d/2,h+18*o),a.fillStyle="rgba(255,255,255,0.38)",a.font=`400 ${7*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`;const b=v.label==="Guarded"?"safe default":v.label==="Manual"?"signals":"silent";a.fillText(b,M+d/2,h+34*o)}),a.textAlign="left",c+8*o+m}function yR(a,e,i,r,o,c="SLIDE TO START COPY"){const u=40*o;sn(a,e,i,r,u,8*o,ks),pn(a,e,i,r,u,8*o,Xs,1);const d=.22,m=4*o,h=u-m*2,g=r-m*2-h;return sn(a,e+m,i+m,h+g*d,h,h/2,"rgba(200,245,168,0.18)"),sn(a,e+m,i+m,h,h,h/2,"rgba(200,245,168,0.85)"),a.fillStyle="#0a0a0c",a.font=`700 ${12*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText("›",e+m+h/2,i+u*.62),a.fillStyle="rgba(255,255,255,0.5)",a.font=`700 ${8*o}px "DM Mono", ui-monospace, monospace`,a.fillText(c,e+r/2+h*.15,i+u*.62),a.textAlign="left",u}const Ll=2,Ao={sharpe:"2.41",roi:"+38.2%",riskScore:"72",reputation:"84",receipts:[{action:"Close BTC long",pnl:"+103.09"},{action:"Open ETH long",pnl:null},{action:"Close SOL short",pnl:"+41.20"}]};function Hv(a,e,i,r,o,c){const u=6*c,d=o.length,m=(r-u*(d-1))/d,h=36*c;return o.forEach(([g,v],_)=>{const M=e+_*(m+u);sn(a,M,i,m,h,6*c,ks),pn(a,M,i,m,h,6*c,Xs,1),a.fillStyle="rgba(255,255,255,0.4)",a.font=`700 ${7*c}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText(g,M+m/2,i+12*c),a.fillStyle="#c8f5a8",a.font=`700 ${11*c}px "DM Mono", ui-monospace, monospace`,a.fillText(v,M+m/2,i+26*c)}),a.textAlign="left",h}function ER(a,e,i,r,o){const c=[{label:"Verified",brand:!0},{label:"Receipt"},{label:"Risk",value:Ao.riskScore},{label:"Rep",value:Ao.reputation}],u=4*o,d=22*o,m=5*o;let h=e;a.font=`700 ${6.5*o}px "DM Mono", ui-monospace, monospace`;for(const g of c){const v=a.measureText(g.label.toUpperCase()).width,_=g.value?a.measureText(g.value).width+3*o:0,M=m*2+6*o+v+_;if(h+M>e+r)break;const b=g.brand?"rgba(200,245,168,0.12)":ks,R=g.brand?"rgba(200,245,168,0.35)":Xs;sn(a,h,i,M,d,4*o,b),pn(a,h,i,M,d,4*o,R,1);const y=2*o;a.beginPath(),a.arc(h+m+y,i+d/2,y,0,Math.PI*2),a.fillStyle=g.brand?"#c8f5a8":"rgba(255,255,255,0.35)",a.fill();let x=h+m+y*2+4*o;a.fillStyle=g.brand?"#c8f5a8":"rgba(255,255,255,0.55)",a.textAlign="left",a.fillText(g.label.toUpperCase(),x,i+d*.68),x+=v+3*o,g.value&&(a.fillStyle="rgba(255,255,255,0.92)",a.fillText(g.value,x,i+d*.68)),h+=M+u}return a.textAlign="left",d}function bR(a,e,i,r,o){const c=Ao.receipts,u=22*o,d=14*o+c.length*u;return sn(a,e,i,r,d,6*o,ks),pn(a,e,i,r,d,6*o,Xs,1),a.fillStyle="rgba(255,255,255,0.4)",a.font=`700 ${6.5*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="left",a.fillText("RECEIPTS",e+8*o,i+10*o),c.forEach((m,h)=>{const g=i+14*o+h*u;a.fillStyle="rgba(255,255,255,0.72)",a.font=`500 ${8*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="left",a.fillText(m.action,e+8*o,g+u*.62),a.textAlign="right",m.pnl?(a.fillStyle="#c8f5a8",a.font=`700 ${8*o}px "DM Mono", ui-monospace, monospace`,a.fillText(m.pnl,e+r-8*o,g+u*.62)):(a.fillStyle="rgba(255,255,255,0.35)",a.fillText("—",e+r-8*o,g+u*.62))}),a.textAlign="left",d}function TR(a,e,i,r,o){const c=Math.min(r*150/316,r*.48),u=12*o,d=8*o,m=a.createLinearGradient(e,i+c,e+r,i);m.addColorStop(0,"#050508"),m.addColorStop(1,"rgba(200,245,168,0.14)"),sn(a,e,i,r,c,d,m),pn(a,e,i,r,c,d,"rgba(255,255,255,0.14)",Math.max(1,1.25*o)),pn(a,e+2.5*o,i+2.5*o,r-5*o,c-5*o,d-1.5*o,"rgba(200,245,168,0.35)",Math.max(1,o)),a.fillStyle="rgba(255,255,255,0.92)",a.font=`700 ${11*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText("MAEX",e+u,i+u+10*o);const h=40*o,g=16*o,v=e+r-u-h,_=i+u-1*o;return sn(a,v,_,h,g,8*o,"rgba(200,245,168,0.14)"),pn(a,v,_,h,g,8*o,"rgba(200,245,168,0.28)",1),a.fillStyle="#c8f5a8",a.font=`700 ${8*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText("LIVE",v+h/2,_+11*o),a.textAlign="left",a.fillStyle="rgba(255,255,255,0.92)",a.font=`700 ${14*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText("MAEX Core",e+u,i+u+36*o),a.fillStyle="rgba(255,255,255,0.45)",a.font=`500 ${9*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText("Curated agent basket · 4 agents",e+u,i+u+52*o),a.fillStyle="#c8f5a8",a.font=`700 ${18*o}px "DM Mono", ui-monospace, monospace`,a.fillText("+12.8%",e+u,i+c-u-4*o),a.fillStyle="rgba(255,255,255,0.4)",a.font=`700 ${8*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="right",a.fillText("30D RETURN",e+r-u,i+c-u-8*o),a.textAlign="left",c}function AR(a,e,i,r,o){const c=[["SharpeShark","42%","+38%"],["SortinoSloth","33%","+21%"],["FundingFox","25%","−4%"]],u=26*o,d=c.length*u;return sn(a,e,i,r,d,6*o,ks),pn(a,e,i,r,d,6*o,Xs,1),c.forEach(([m,h,g],v)=>{const _=i+v*u;v>0&&(a.strokeStyle="rgba(255,255,255,0.06)",a.lineWidth=1,a.beginPath(),a.moveTo(e+8*o,_),a.lineTo(e+r-8*o,_),a.stroke()),a.fillStyle="rgba(255,255,255,0.85)",a.font=`600 ${9*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.textAlign="left",a.fillText(m,e+10*o,_+u*.62),a.fillStyle="rgba(255,255,255,0.4)",a.font=`700 ${8*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText(h,e+r*.58,_+u*.62);const M=!g.startsWith("−")&&!g.startsWith("-");a.fillStyle=M?"#c8f5a8":"rgba(255,120,120,0.85)",a.textAlign="right",a.fillText(g,e+r-10*o,_+u*.62)}),a.textAlign="left",d}function RR(a,e,i,r,o,c=0,u=1){const d=r/300,m=12*d,h=10*d,g=(c%Ll+Ll)%Ll,v=[{header:"AGENT PROOF",segment:"AGENTS"},{header:"INDEX PROOF",segment:"INDICES"}][g];Vu(a,e,i,r,o,h,u);let _=ku(a,e,i,r,m,v.header,d);_=pR(a,e,_,r,m,v.segment,g+1,Ll,d);const M=i+o-m,b=e+m,R=_,y=r-m*2,x=Math.max(48*d,M-_),O=10*d;Hl(a,b,R,y,x,d);const P=b+O,C=y-O*2;let N=R+O;const L=R+x-O;if(g===0){N+=kp(a,P,N,C,d)+8*d,N+22*d<=L&&(N+=ER(a,P,N,C,d)+8*d);const A=[["SHARPE",Ao.sharpe],["ROI",Ao.roi],["RISK",Ao.riskScore]];N+36*d<=L&&(N+=Hv(a,P,N,C,A,d)+8*d),N+70*d<=L&&bR(a,P,N,C,d);return}N+=TR(a,P,N,C,d)+8*d,N+78*d<=L&&(N+=AR(a,P,N,C,d)+8*d);const B=[["RETURN","+12.8%"],["RISK","58"],["AGENTS","4"]];N+36*d<=L&&Hv(a,P,N,C,B,d)}function CR(a,e,i,r,o,c=0,u=1){const d=r/300,m=12*d,h=10*d;Vu(a,e,i,r,o,h,u);let g=ku(a,e,i,r,m,"COPY TRADE",d);g=Qx(a,e,g,r,m,["MIRROR","BUCKET"],0,d);const v=40*d,_=i+o-m-v,M=_-10*d;if(c%2===0){const R=6*d,y=r-m*2;let x=(y-R)/2,O=Math.min(x*190/316,x*.58);const P=Math.max(64*d,M-g-28*d);O>P&&(x=x*(P/O),O=P);const C=d*(x/((y-R)/2)),N=e+m+(y-(x*2+R))/2;xR(a,N,g,x,C),vR(a,N+x+R,g,x,C),g+=O+10*d;const L=[["SPREAD","0.02%"],["FUNDING","8h"],["SIZE","25%"]],B=5*d,A=(r-m*2-B*2)/3,U=32*d;if(g+U<=M){const X=6*d;Hl(a,e+m,g-X,r-m*2,U+X*2,d,{innerStroke:!1}),L.forEach(([k,Z],me)=>{const ue=e+m+me*(A+B);sn(a,ue,g,A,U,6*d,ks),pn(a,ue,g,A,U,6*d,Xs,1),a.fillStyle="rgba(255,255,255,0.4)",a.font=`700 ${6.5*d}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText(k,ue+A/2,g+11*d),a.fillStyle="#c8f5a8",a.font=`700 ${10*d}px "DM Mono", ui-monospace, monospace`,a.fillText(Z,ue+A/2,g+24*d)}),a.textAlign="left"}}else{const R=e+m,y=g,x=r-m*2,O=Math.max(48*d,M-g),P=10*d;Hl(a,R,y,x,O,d);const C=R+P,N=x-P*2;let L=y+P;const B=y+O-P;L+=kp(a,C,L,N,d)+10*d,L+36*d<B&&(L+=SR(a,C,L,N,d,25)+10*d),L+50*d<B&&MR(a,C,L,N,d)}yR(a,e+m,_,r-m*2,d)}const wR=2,DR=[{agent:"SharpeShark",timeLabel:"07-08, 15:42",status:"want-to",statusLabel:"Want to",action:"Open ETH long · 1.2 ETH",showActions:!0},{agent:"NightOwl",timeLabel:"07-08, 15:31",status:"rejected",statusLabel:"Rejected",action:"Open BTC short · 0.04 BTC"},{agent:"SharpeShark",timeLabel:"07-08, 15:25",status:"short",statusLabel:"Close Long",action:"BTCUSDT · 0.04 BTC",pnl:{text:"+103.09",tone:"long"}},{agent:"FluxRunner",timeLabel:"07-08, 14:10",status:"long",statusLabel:"Open Long",action:"ETHUSDT · 0.8 ETH"},{agent:"NightOwl",timeLabel:"07-07, 09:42",status:"short",statusLabel:"Open Short",action:"SOLUSDT · 12 SOL"}];function LR(a){switch(a){case"want-to":return{fg:"rgba(200,245,168,0.95)",bg:"rgba(184,245,168,0.12)"};case"rejected":return{fg:"#ff4757",bg:"rgba(255,71,87,0.12)"};case"long":return{fg:"#00ff88",bg:"rgba(0,255,136,0.12)"};case"short":return{fg:"#ff4757",bg:"rgba(255,71,87,0.12)"}}}function NR(a,e,i,r,o,c=1){const u=r/300,d=12*u,m=10*u;Vu(a,e,i,r,o,m,c);let h=ku(a,e,i,r,d,"ACTIVITY LOG",u);const g=i+o-d,v=e+d,_=h,M=r-d*2,b=Math.max(48*u,g-h),R=10*u;Hl(a,v,_,M,b,u);const y=58*u,x=10*u,O=6*u,P=v+R+y+O+x+O,C=v+M-R-P,N=v+R+y+O+x/2,L=v+R;h=_+R;const B=_+b-R,A=DR,U=4*u;A.forEach((X,k)=>{if(h>=B-8*u)return;const Z=k===0,me=k===A.length-1,ue=LR(X.status),q=8*u,z=6*u,H=7*u,$=8*u,he=X.showActions?22*u:0,Se=X.showActions?5*u:0,K=Math.max(q+2*u+z,H+4*u+$)+Se+he+U;if(h+Math.min(K,28*u)>B)return;a.textAlign="right",a.fillStyle="rgba(255,255,255,0.88)",a.font=`500 ${q}px "DM Mono", ui-monospace, monospace`,a.fillText(X.agent,L+y,h+q),a.fillStyle="rgba(255,255,255,0.38)",a.font=`500 ${z}px "DM Mono", ui-monospace, monospace`,a.fillText(X.timeLabel,L+y,h+q+2*u+z),a.textAlign="left",me||(a.strokeStyle="rgba(255,255,255,0.14)",a.lineWidth=Math.max(1,u),a.beginPath(),a.moveTo(N,h+6*u),a.lineTo(N,h+K),a.stroke());const Te=2.4*u;a.beginPath(),a.arc(N,h+5*u,Te,0,Math.PI*2),a.fillStyle=Z?"#c8f5a8":"rgba(255,255,255,0.32)",a.fill(),Z&&(a.beginPath(),a.arc(N,h+5*u,Te+2.2*u,0,Math.PI*2),a.fillStyle="rgba(200,245,168,0.16)",a.fill());const Ae=4*u,De=2*u;a.font=`700 ${H}px "DM Mono", ui-monospace, monospace`;const ae=X.statusLabel.toUpperCase(),Me=a.measureText(ae).width+Ae*2,ge=H+De*2;sn(a,P,h,Me,ge,3*u,ue.bg),a.fillStyle=ue.fg,a.fillText(ae,P+Ae,h+H+De*.35),a.fillStyle="rgba(255,255,255,0.55)",a.font=`400 ${$}px "DM Mono", ui-monospace, monospace`;const We=h+ge+3*u+$;let nt=X.action;if(X.pnl){const Qe=`${X.action} · `;a.fillText(Qe,P,We);const vt=a.measureText(Qe).width;a.fillStyle=X.pnl.tone==="long"?"#00ff88":"#ff4757",a.font=`700 ${$}px "DM Mono", ui-monospace, monospace`,a.fillText(X.pnl.text,P+vt,We)}else{for(;nt.length>8&&a.measureText(nt).width>C;)nt=`${nt.slice(0,-2)}…`;a.fillText(nt,P,We)}if(X.showActions&&h+ge+3*u+$+Se+he<=B){const Qe=h+ge+3*u+$+Se,vt=(C-5*u)/2;pn(a,P,Qe,vt,he,3*u,"rgba(255,255,255,0.18)",1),a.fillStyle="rgba(255,255,255,0.72)",a.font=`700 ${7*u}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText("REJECT",P+vt/2,Qe+he*.68),sn(a,P+vt+5*u,Qe,vt,he,3*u,"rgba(184,245,168,0.88)"),a.fillStyle="rgba(8,14,10,0.92)",a.fillText("APPROVE",P+vt+5*u+vt/2,Qe+he*.68),a.textAlign="left"}h+=K})}function UR(a,e,i,r,o,c=1){const u=r/300,d=12*u,m=10*u;Vu(a,e,i,r,o,m,c);let h=ku(a,e,i,r,d,"FUND BUCKET",u);h=Qx(a,e,h,r,d,["FUND BUCKET","CREATE BUCKET"],0,u);const g=10*u+36*u,v=e+d,_=h,M=r-d*2,b=Math.max(48*u,i+o-d-g-8*u-h),R=10*u;Hl(a,v,_,M,b,u);const y=v+R,x=M-R*2;let O=_+R;O+=kp(a,y,O,x,u)+8*u,O+=mR(a,y,O,x,"FROM","Select source bucket",u)+8*u,_+b-R-O>70*u&&gR(a,y,O,x,u),_R(a,e+d,i+o-d-g,r-d*2,u,"COMPLETE REQUIRED FIELDS")}function Jx(a,e,i,r,o,c,u=0,d=1){switch(e){case"discover":RR(a,i,r,o,c,u,d);break;case"copy":CR(a,i,r,o,c,u,d);break;case"supervise":NR(a,i,r,o,c,d);break;case"isolate":UR(a,i,r,o,c,d);break}}function OR(a,e,i,r,o=0,c=1){a.clearRect(0,0,i,r),Jx(a,e,0,0,i,r,o,c)}function PR(a,e,i,r,o,c=.8,u=1){const{W:d,H:m}=hR(i,r),h=document.createElement("canvas");h.width=d,h.height=m;const g=h.getContext("2d"),v=Math.min(1,Math.max(0,c)),_=g.createLinearGradient(0,0,0,m);_.addColorStop(0,`rgba(8, 10, 14, ${v})`),_.addColorStop(.55,`rgba(5, 7, 13, ${v})`),_.addColorStop(1,`rgba(3, 4, 6, ${v})`),g.fillStyle=_,g.fillRect(0,0,d,m);const M=Math.round(22*i),b=Math.round(.05*m),R=Math.round(.045*m),y=d-M*2;let x=b;const O=Math.min(34*i,d*.095);g.fillStyle="rgba(255,255,255,0.94)",g.font=`normal 400 ${O}px ${o}`,g.textBaseline="alphabetic",g.shadowColor="rgba(10, 14, 23, 0.55)",g.shadowBlur=Math.max(8,12*i),g.shadowOffsetX=0,g.shadowOffsetY=Math.max(1,1.5*i),g.fillText(a.verb,M,x+O*.85),g.shadowColor="transparent",g.shadowBlur=0,g.shadowOffsetY=0,x+=Math.round(.09*m);const P=Math.min(13*i,d*.036);g.fillStyle="rgba(255,255,255,0.94)",g.font=`400 ${P}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`;const C=dR(g,a.description,y),N=x+P;g.shadowColor="rgba(10, 14, 23, 0.45)",g.shadowBlur=Math.max(4,6*i),g.shadowOffsetY=Math.max(.5,1*i),g.fillText(C[0]??a.description,M,N),g.shadowColor="transparent",g.shadowBlur=0,g.shadowOffsetY=0,x=Math.round(N+20*i);const L=M,B=x,A=y,U=Math.max(80*i,m-x-R);Jx(g,fR(e),L,B,A,U,0,u);const X=new Ix(h);return X.colorSpace=ei,X.minFilter=Hs,X.generateMipmaps=!0,X}const Rp=["M41.9213 3.43614C43.0393 3.43614 43.8716 3.77154 44.4182 4.44235C44.9647 5.138 45.1262 6.1939 44.9026 7.61005L41.884 26.8026C41.7846 27.4982 41.8467 28.0075 42.0703 28.3305C42.2691 28.6784 42.6542 28.8771 43.2256 28.9268L43.8591 28.9641L43.8219 29.2622L36.7784 30.492L36.4803 30.492L40.1324 7.46098C40.3064 6.26843 40.0206 5.67216 39.2753 5.67216C38.9523 5.67216 38.6045 5.75912 38.2318 5.93303C37.8343 6.10694 37.3995 6.44235 36.9275 6.93924L36.7411 6.79017C38.0828 4.55415 39.8095 3.43614 41.9213 3.43614Z","M29.9958 3.43614C31.1138 3.43614 31.9461 3.77154 32.4927 4.44235C33.0393 5.138 33.2007 6.1939 32.9771 7.61005L29.9585 26.8026C29.8591 27.4982 29.9212 28.0075 30.1449 28.3305C30.3436 28.6784 30.7287 28.8771 31.3001 28.9268L31.9337 28.9641L31.8964 29.2622L24.8529 30.492L24.5548 30.492L28.207 7.46098C28.3809 6.26843 28.0952 5.67216 27.3498 5.67216C27.0268 5.67216 26.679 5.75912 26.3063 5.93303C25.9088 6.10694 25.474 6.44235 25.002 6.93924L24.8157 6.79017C26.1573 4.55415 27.884 3.43614 29.9958 3.43614Z","M18.0703 3.43614C19.1883 3.43614 20.0206 3.77154 20.5672 4.44235C21.1138 5.138 21.2753 6.1939 21.0517 7.61005L18.033 26.8026C17.9337 27.4982 17.9958 28.0075 18.2194 28.3305C18.4181 28.6784 18.8032 28.8771 19.3747 28.9268L20.0082 28.9641L19.9709 29.2622L12.9275 30.492L12.6293 30.492L16.2815 7.46098C16.4554 6.26843 16.1697 5.67216 15.4243 5.67216C15.1014 5.67216 14.7535 5.75912 14.3809 5.93303C13.9834 6.10694 13.5486 6.44235 13.0765 6.93924L12.8902 6.79017C14.2318 4.55415 15.9585 3.43614 18.0703 3.43614Z","M45.5631 10.8482C46.0378 11.9189 46.0912 12.9315 45.7231 13.8861C45.3095 14.8231 44.3453 15.4956 42.8305 15.9035L16.576 22.853C15.2325 23.2226 14.7771 24.0651 15.2096 25.3806L15.7698 26.7714L13.8491 27.2839L9.924 22.1284L9.25377 20.6168L40.8242 12.2711C41.6674 12.048 42.2133 11.7494 42.4619 11.3754C42.6651 10.9838 42.669 10.5676 42.4735 10.1267C42.3199 9.78031 42.1016 9.5003 41.8185 9.2867C41.4899 9.05556 41.0511 8.87329 40.5021 8.7399L41.5734 7.5866C42.563 7.86379 43.3915 8.28774 44.0591 8.85845C44.7127 9.39767 45.214 10.0609 45.5631 10.8482Z"],IR="0 0 58 35",FR=58,BR=35;function zR({fill:a="#C8F5A8",width:e=58,height:i=35,padding:r=10,"aria-hidden":o=!0,...c}){const u=[-r,-r,FR+r*2,BR+r*2].join(" ");return D.jsx("svg",{width:e,height:i,viewBox:u,fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":o,...c,children:Rp.map(d=>D.jsx("path",{d,fill:a},d.slice(0,24)))})}const HR={sm:{width:30,height:18},md:{width:30,height:18},lg:{width:44,height:27},hero:{width:76,height:46}};function Xp({size:a="md",showWordmark:e=!0,className:i="",brandName:r="Morpheum"}){const o=HR[a];return D.jsxs("span",{className:`brand-mark brand-mark--${a} ${i}`.trim(),children:[D.jsx(zR,{className:"brand-mark__icon",width:o.width,height:o.height,padding:0,fill:"var(--terminal-brand)"}),e?D.jsx("span",{className:"brand-mark__word",children:r}):null]})}const Gv="!@#$%^&*()_+{}[]|;:,.<>?/0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",GR=50,Ru=500,Dh=100,Vv=168;function VR(){return typeof window>"u"?!1:window.matchMedia("(prefers-reduced-motion: reduce)").matches}function kR(){return Gv[Math.floor(Math.random()*Gv.length)]??"?"}function kv(a){return Array.from(a).map(e=>{const i=Math.random()*(Ru-Dh),r=Dh+Math.random()*(Ru-i-Dh),o=Math.min(Ru,i+r);return{original:e,start:i,end:o}})}function XR(a){return Math.min(1,Math.max(0,a))}function WR({text:a,className:e,scrollerRef:i}){const r=Xe.useRef(null),o=Xe.useRef(kv(a)),c=VR();return Xe.useEffect(()=>{o.current=kv(a)},[a]),Xe.useEffect(()=>{if(c)return;const u=r.current;if(!u)return;let d=0,m=!0,h=-1;const g=()=>{const _=i.current;if(!_)return;const M=Math.max(0,-_.getBoundingClientRect().top),b=Math.min(Ru,Math.max(0,M-GR));if(b===h&&h>=0)return;h=b;const R=o.current,y=u.querySelectorAll(".scroll-dissolve__glyph");let x=R.length>0;for(let O=0;O<R.length;O++){const P=R[O],C=y[O];if(!C)continue;const N=Math.max(.001,P.end-P.start),L=XR((b-P.start)/N);if(L<1&&(x=!1),L<=0){C.textContent=P.original===" "?" ":P.original,C.style.transform="translateY(0)",C.style.opacity="1",C.style.visibility="visible";continue}if(L>=1){C.textContent=P.original===" "?" ":P.original,C.style.transform=`translateY(${-Vv}px)`,C.style.opacity="0",C.style.visibility="hidden";continue}C.textContent=kR(),C.style.transform=`translateY(${-L*Vv}px)`,C.style.opacity=String(1-L),C.style.visibility="visible"}u.style.visibility=x?"hidden":"visible",u.style.display=x?"none":"block"},v=()=>{m&&(g(),d=requestAnimationFrame(v))};return d=requestAnimationFrame(v),()=>{m=!1,cancelAnimationFrame(d)}},[c,i,a]),c?D.jsx("p",{className:e,"aria-label":a,children:a}):D.jsx("p",{ref:r,className:["scroll-dissolve",e].filter(Boolean).join(" "),"aria-label":a,children:Array.from(a).map((u,d)=>D.jsx("span",{className:"scroll-dissolve__glyph","aria-hidden":!0,children:u===" "?" ":u},`${d}-${u}`))})}const YR="Enter the agentic economy →",Nl=Ih.verbs.map((a,e)=>{const i=[{top:"#c8f5a8",mid:"#0a1410",bot:"#1a3d2e"},{top:"#9ee089",mid:"#060e18",bot:"#1e3a52"},{top:"#f0e6a0",mid:"#0c1008",bot:"#2a3820"},{top:"#7fd9a8",mid:"#080810",bot:"#243048"}];return{verb:a.verb,description:a.description,mood:i[e]??i[0]}}),un=Nl.length,Ja=2.95,Il=6.9,Pu=32,$x=4,eS=5,Cp=2.05,qR=1,jR=Ja*.55,tS=.28,nS=.35,ZR=tS+nS,Lh=.85,Xv=300,KR=35,Wv=KR/60*1e3,QR=.1;function iS(a){return a<520?{mode:"mobile",canvasW:1280,canvasH:320,fontPx:112,planeBaseW:4.55,frustumFill:.9}:a<900?{mode:"tablet",canvasW:1600,canvasH:360,fontPx:132,planeBaseW:5.25,frustumFill:.94}:{mode:"desktop",canvasW:1920,canvasH:420,fontPx:152,planeBaseW:6.1,frustumFill:.96}}const JR=1.35,$R=.72,e3=.62,t3=.2,n3=14,i3=.42,a3=128,s3=12,r3=.002,o3=.0011,Yv=.12,l3=.88,aS=4,c3=32,u3=40,f3=aS-1,qv=50,d3=-10,jv=28,h3="/Morm_IntroAnimation_1.mp4",p3=10,sS=[0,2,4,6,8,10],m3=[{in:2,out:2.2},{in:1.5,out:2.4},{in:2.3,out:1.7},{in:1.8,out:2.1},{in:2.1,out:2.6}];function g3(a,e){const i=m3[a]??{in:2,out:2},r=Yt.clamp(e,0,1);return r<.5?.5*Math.pow(2*r,i.in):1-.5*Math.pow(2*(1-r),i.out)}function _3(a,e,i,r,o){const c=Math.max(1,un-1),u=[0,e,e+1/c*i,e+2/c*i,r,Math.max(r+.001,o)],d=sS,m=u.length-1;if(a<=u[0])return d[0];if(a>=u[m])return d[m];let h=0;for(;h<m-1&&a>=u[h+1];)h+=1;const g=u[h],v=u[h+1],_=v>g?Yt.clamp((a-g)/(v-g),0,1):1;return Yt.lerp(d[h],d[h+1],g3(h,_))}function Zv(a,e){const i=Number.isFinite(a.duration)&&a.duration>0?a.duration:p3,r=Yt.clamp(e,0,Math.max(0,i-.04));if(!(Math.abs(a.currentTime-r)<1/48))try{a.currentTime=r}catch{}}const v3=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,x3=`
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
`,S3=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,M3=`
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
`,y3='"Reckk Heading", Georgia, "Times New Roman", serif',rS="Morpheum Wordmark",Gl=`"${rS}"`,E3=[{t:0,c:"#e8ffe0"},{t:.45,c:"#c8f5a8"},{t:1,c:"#f0e6a0"}];async function b3(){if(typeof document>"u"||!document.fonts)return!1;try{const a=new FontFace(rS,`url(${lR})`,{weight:"normal",style:"normal"});document.fonts.add(await a.load()),await document.fonts.load(`normal 152px ${Gl}`);const e=document.fonts.check(`normal 152px ${Gl}`);return e||console.error("[FlowIntro] Morpheum Wordmark failed to bind — title will not use Reckk fallback"),e}catch(a){return console.error("[FlowIntro] Morpheum Wordmark load failed",a),!1}}async function T3(){if(!(typeof document>"u"||!document.fonts))try{await b3();const a=new FontFace("Reckk Title",`url(${oR})`,{weight:"normal",style:"normal"});document.fonts.add(await a.load());const e=new FontFace("Reckk Heading",`url(${rR})`,{weight:"normal",style:"normal"});document.fonts.add(await e.load()),await document.fonts.ready,await document.fonts.load(`normal 152px ${Gl}`),await document.fonts.load('normal 64px "Reckk Heading"'),await document.fonts.load('normal 124px "Reckk Title"')}catch{}}const _r="flow-intro-hide-chrome",A3=72,R3=120,Nh=80;function C3(a){return a<=A3}const w3=280;function xr(a){const e=document.documentElement,i=e.style.scrollBehavior;e.style.scrollBehavior="auto",window.scrollTo(0,Math.max(0,a)),e.style.scrollBehavior=i}function Uh(){const a=document.getElementById("hero");if(!a)return;const e=a.getBoundingClientRect().top+window.scrollY;xr(e)}function yr(a){const e=Yt.clamp(a,0,1);return e*e*e*(e*(e*6-15)+10)}function Ul(a){const e=Math.max(1,a),i=Math.max(1,un*e*qR),r=Math.max(1,i/Math.max(1,un-1));return{cardPx:i,titlePx:r,totalPx:i+r}}const D3=900,L3=1100,N3=1300,U3=1500,O3=6,P3=36,I3=50,F3=.5,B3=1024,z3=.75,oS=.8;function Wp(a){return a>=B3}function H3(a){return Wp(a)?D3:L3}function G3(a){return Wp(a)?N3:U3}function lS(a){return Math.max(2,Math.max(1,a)*.004)}function V3(a,e){const{cardPx:i,titlePx:r}=Ul(e),o=Math.max(1,un-1),c=Yt.clamp(Math.round(a),0,un-1);return r+c/o*i}function k3(a){return a.offsetTop}function X3(a,e,i){return a.offsetTop+V3(e,i)}function Oh(){const a=document.getElementById("hero");return a?a.getBoundingClientRect().top+window.scrollY:null}function W3(a){const e=un-1;return Yt.clamp(Math.round(a),0,e)}function Ph(a,e,i,r){const o=lS(r);return a<e-o?{kind:"title"}:{kind:"card",idx:W3(i)}}function Y3(a,e,i,r,o,c,u){if(o)return!1;const d=i/Math.max(1,un-1),m=r+d*F3;return!(a>m||c<u*.5)}function Yp(a,e){const i=a/Math.max(1,e),r=Pu*Math.PI/180,o=2*Il*Math.tan(r/2),c=o*i,u=Cp*$x/eS,d=.992,m=d*o/Cp,h=d*c/u;return Yt.clamp(Math.min(m,h),.52,2.35)}function q3(a,e,i=oS){const r=Yp(a,e);return(Wp(a)?r*z3:r)*i}function Kv(a,e,i){const r=iS(a),o=Yp(a,e),c=a/Math.max(1,e),u=Pu*Math.PI/180,m=2*Il*Math.tan(u/2)*c,h=r.frustumFill*m/Math.max(1e-6,o),g=Math.min(r.planeBaseW,h);return{w:g,h:g*i}}function j3(a,e){const i=a/Math.max(1,un-1),r=Math.min(Math.max(1,e*.38),Math.max(1,i*.34));return i<=r+.001?0:1-r/i}function Z3(a,e){const i=Math.min(Math.max(1,e*.38),Math.max(1,a*.34));return a<=i+.001?0:1-i/a}function K3(a,e){const i=Yt.clamp(e,0,.999);if(a<i)return{titleOp:1,lastCardOp:0};const r=Math.max(1e-6,1-i),o=yr(Yt.clamp((a-i)/r,0,1));return{titleOp:1-o,lastCardOp:o}}function Q3(a,e,i,r=0){const o=un-1;if(a<=0)return{opacity:e===0?1:0};if(a>=o-1e-5)return{opacity:e===o?1:0};const c=Math.floor(a);if(c>=o)return{opacity:e===o?1:0};if(e!==c&&e!==c+1)return{opacity:0};const u=a-c,d=Yt.clamp(i,0,.999);if(u<d)return{opacity:e===c?1:0};const m=yr(Yt.clamp((u-d)/Math.max(1e-6,1-d),0,1));return e===c?{opacity:r>=.999?0:1}:{opacity:Math.max(m,r)}}function J3(a){return new qi({uniforms:{uMap:{value:a},uOpacity:{value:1},uWipe:{value:0},uWipeEdge:{value:QR}},vertexShader:S3,fragmentShader:M3,transparent:!0,depthWrite:!0,depthTest:!0,side:ns})}function $3(a,e){return a>1.5&&a<e-.5}function eC(a){return Yt.clamp(540/Math.max(a,340),.2,.55)}function tC(a,e,i){const r=[],o=n3;for(let c=0;c<o;c++){const u=Yt.clamp(a-c/Math.max(1,o-1)*i3,-.08,1.08),d=Math.sin(u*Math.PI*2*JR)*e3*i,m=Math.sin(u*Math.PI*2*$R)*t3,h=Yv+c/Math.max(1,o-1)*(l3-Yv),g=e-h;r.push(new ie(d,m,g))}return r}function nC(a,e,i,r){const o=a.length;if(o<2)return new Yi;const c=[],u=[],d=[],m=[],h=new ie,g=new ie,v=new ie,_=new ie(0,1,0),M=e+1;for(let R=0;R<o;R++){R===0?h.subVectors(a[1],a[0]).normalize():R===o-1?h.subVectors(a[o-1],a[o-2]).normalize():h.subVectors(a[R+1],a[R-1]).normalize(),g.copy(_).cross(h),g.lengthSq()<1e-8&&g.set(1,0,0).cross(h),g.normalize(),v.crossVectors(h,g).normalize();const y=o===1?0:R/(o-1),x=i+(r-i)*Math.pow(y,1.5);for(let O=0;O<=e;O++){const P=O/e*Math.PI*2,C=Math.cos(P),N=Math.sin(P),L=a[R];c.push(L.x+(C*g.x+N*v.x)*x,L.y+(C*g.y+N*v.y)*x,L.z+(C*g.z+N*v.z)*x),u.push(C*g.x+N*v.x,C*g.y+N*v.y,C*g.z+N*v.z),d.push(o===1?0:R/(o-1),O/e)}}for(let R=0;R<o-1;R++)for(let y=0;y<e;y++){const x=R*M+y,O=x+1,P=x+M,C=P+1;m.push(x,P,O,O,P,C)}const b=new Yi;return b.setAttribute("position",new Wi(c,3)),b.setAttribute("normal",new Wi(u,3)),b.setAttribute("uv",new Wi(d,2)),b.setIndex(m),b.computeBoundingSphere(),b}function Qv(a,e,i,r,o,c){const u={verb:a.verb,description:a.description};return PR(u,e,i,r,y3,o,c)}function Jv(a,e){const i=iS(e),r=Math.min(a*2.35,3.25),o=Math.round(i.canvasW*r),c=Math.round(i.canvasH*r),u=document.createElement("canvas");u.width=o,u.height=c;const d=u.getContext("2d");d.clearRect(0,0,o,c);const m="Morpheum";let h=i.fontPx;d.textAlign="left",d.textBaseline="alphabetic";const g=()=>{d.font=`normal ${h*r}px ${Gl}`};g();const v=N=>{d.font=`normal ${N*r}px ${Gl}`;const L=d.measureText(m),B=Math.abs(L.actualBoundingBoxLeft??0),A=Math.abs(L.actualBoundingBoxRight??L.width),U=Math.abs(L.actualBoundingBoxAscent??N*r*.8),X=Math.abs(L.actualBoundingBoxDescent??N*r*.25);return{left:B,right:A,width:B+A,ascent:U,descent:X}},_=Math.max(1.25,1.85*r)*2,M=64*r+_,b=40*r+_,R=N=>{const L=v(N);return L.width+M*2<=o&&L.ascent+L.descent+b*2<=c};for(;!R(h)&&h>64;)h-=2;for(;R(h+2)&&h<i.fontPx+24;)h+=2;g();const y=v(h),x=(o-y.width)/2+y.left,O=c/2+(y.ascent-y.descent)/2,P=d.createLinearGradient(x-y.left,O-y.ascent,x+y.right,O+y.descent);E3.forEach(N=>P.addColorStop(N.t,N.c)),d.lineJoin="round",d.miterLimit=2,d.lineWidth=Math.max(1.25,1.85*r),d.strokeStyle="rgba(8,12,10,0.22)",d.shadowColor="rgba(10, 14, 23, 0.55)",d.shadowBlur=Math.max(10,16*r),d.shadowOffsetX=0,d.shadowOffsetY=Math.max(1,2*r),d.strokeText(m,x,O),d.fillStyle=P,d.fillText(m,x,O),d.shadowColor="transparent",d.shadowBlur=0,d.shadowOffsetY=0;const C=new Ix(u);return C.colorSpace=ei,C.minFilter=hn,C.magFilter=hn,C.generateMipmaps=!1,C}function $v(a,e){a.generateMipmaps=!1,a.minFilter=hn,a.magFilter=hn,a.wrapS=ra,a.wrapT=ra;const i=e.capabilities.getMaxAnisotropy();a.anisotropy=Math.min(16,i),a.needsUpdate=!0}function iC({cardAlpha:a=.8,modalChassisAlpha:e=1,cardSize:i=oS}){const r=Xe.useRef(null),o=Xe.useRef(null),c=Xe.useRef(null),u=Xe.useRef(null),d=Xe.useRef(null),m=Xe.useRef(!1),h=Xe.useRef(!1),g=Xe.useRef(null),v=Xe.useRef(a);v.current=Math.min(1,Math.max(0,a));const _=Xe.useRef(e);_.current=Math.min(1,Math.max(0,e));const M=Xe.useRef(i);M.current=Math.max(.1,i);const b=Xe.useCallback(()=>{var y;if(m.current)return;m.current=!0,h.current=!1,(y=g.current)==null||y.call(g);const R=o.current;R==null||R.classList.add("flow-intro__sticky--exit"),window.setTimeout(()=>{document.body.classList.remove(_r),Uh(),requestAnimationFrame(()=>{Uh(),requestAnimationFrame(()=>{Uh(),window.setTimeout(()=>{m.current=!1},100)})})},w3)},[]);return Xe.useLayoutEffect(()=>{const R=window.matchMedia("(prefers-reduced-motion: reduce)").matches,y=window.location.hash.replace(/^#/,"");return R||y!==""&&y!=="flow"&&y!=="hero"||document.body.classList.add(_r),()=>{document.body.classList.remove(_r)}},[]),Xe.useEffect(()=>{const R=y=>{if(y.key!=="Escape")return;const x=document.getElementById("hero");x&&x.getBoundingClientRect().top>8&&(y.preventDefault(),b())};return window.addEventListener("keydown",R),()=>window.removeEventListener("keydown",R)},[b]),Xe.useEffect(()=>{const R=window.location.hash.replace(/^#/,"");R&&R!=="flow"&&R!=="hero"&&requestAnimationFrame(()=>{var y;(y=document.getElementById(R))==null||y.scrollIntoView({block:"start"})})},[]),Xe.useEffect(()=>{const R=c.current,y=r.current;if(!R||!y)return;const x=R,O=y;let P=!1;if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){document.body.classList.remove(_r);const L=d.current;L&&(L.style.height="0px");return}let N;return(async()=>{if(await T3(),P)return;const L=Math.min(window.devicePixelRatio,2),B=Math.max(320,x.clientWidth||window.innerWidth),A=Math.max(1,x.clientHeight||window.innerHeight),U=[],X=[],k=[],Z=new Float64Array(un).fill(-1);Nl.forEach((_e,Be)=>{const T=un-1-Be,G=Nl[T],ee=Qv(G,T,L,B,v.current,_.current);k.push(ee);const Q=J3(ee);U.push(Q);const ne=Cp,Ue=ne*$x/eS,He=new Ri(new Gs(Ue,ne),Q);He.position.set(0,0,-Be*Ja),He.renderOrder=Be,X.push(He)});const me=Jv(L,B),ue=new Ou({map:me,transparent:!0,opacity:0,depthWrite:!1,depthTest:!1,side:Sa}),q=me.image.height/me.image.width,{w:z,h:H}=Kv(B,A,q),$=new Ri(new Gs(z,H),ue);$.position.set(0,0,-(un-1)*Ja+.05),$.renderOrder=u3;const he=new HE,Se=new ki(Pu,1,.08,120),I=new sR({antialias:!0,alpha:!1,powerPreference:"high-performance"});I.setPixelRatio(Math.min(window.devicePixelRatio,2)),I.outputColorSpace=ei,I.sortObjects=!0,x.appendChild(I.domElement),$v(me,I);const K=new wl;X.forEach(_e=>K.add(_e)),K.add($),he.add(K);const Te=new qi({uniforms:{uStrength:{value:0}},vertexShader:v3,fragmentShader:x3,transparent:!0,toneMapped:!1,depthTest:!1,depthWrite:!1,blending:Fh}),Ae=new Ri(new Yi,Te);Ae.frustumCulled=!1,Ae.renderOrder=qv,Ae.visible=!1,he.add(Ae);let De=null,ae=null,Me=null;const ge=u.current;if(ge){ge.muted=!0,ge.defaultMuted=!0,ge.playsInline=!0,ge.preload="auto",ge.pause(),De=new QE(ge),De.colorSpace=ei,De.minFilter=hn,De.magFilter=hn,De.generateMipmaps=!1,ae=new Ou({map:De,depthTest:!1,depthWrite:!1,toneMapped:!1}),Me=new Ri(new Gs(1,1),ae),Me.frustumCulled=!1,Me.renderOrder=d3,Me.position.set(0,0,-jv),Se.add(Me),he.add(Se);const _e=()=>{Zv(ge,sS[0]),De.needsUpdate=!0};ge.readyState>=1?_e():ge.addEventListener("loadedmetadata",_e,{once:!0})}function We(){if(!Me)return;const _e=jv,Be=Pu*Math.PI/180,T=2*Math.tan(Be/2)*_e,G=T*Se.aspect,ee=(ge==null?void 0:ge.videoWidth)||1280,Q=(ge==null?void 0:ge.videoHeight)||720,ne=ee/Math.max(1,Q);G/Math.max(1e-6,T)>ne?Me.scale.set(G,G/ne,1):Me.scale.set(T*ne,T,1)}const nt=-(un-1)*Ja,Qe=-.1*Ja,vt=nt+Il+Qe,ht=vt-jR;function xt(_e){const Be=un-1,T=Yt.clamp(_e,0,Be);return-(Be-T)*Ja+Il+Qe}let at=Math.max(1,x.clientHeight||window.innerHeight),ct=!1,Qt=window.innerWidth,Jt=!1,qt=!1;function tn(){return Math.max(1,window.innerHeight)}function Vt(_e){return Jt?_e>R3&&(Jt=!1):C3(_e)&&(Jt=!0),Jt}function rn(){const _e=d.current;if(!_e)return;const{totalPx:Be}=Ul(at),T=at*ZR,ee=`${Math.max(Math.ceil(Be+T+at*Lh+32-Xv),Math.ceil(at*1.08))}px`;_e.style.height!==ee&&(_e.style.height=ee)}function j(){var Ue;const _e=Math.max(320,x.clientWidth||window.innerWidth),Be=Math.min(window.devicePixelRatio,2);k.forEach((He,Re)=>{He.dispose();const ke=un-1-Re,ze=Qv(Nl[ke],ke,Be,_e,v.current,_.current);k[Re]=ze,U[Re].uniforms.uMap.value=ze}),(Ue=ue.map)==null||Ue.dispose();const T=Jv(Be,_e);ue.map=T,ue.needsUpdate=!0,$v(T,I);const G=T.image.height/T.image.width,ee=Math.max(1,x.clientHeight||at),{w:Q,h:ne}=Kv(_e,ee,G);$.geometry.dispose(),$.geometry=new Gs(Q,ne)}function Tt(){const _e=x.clientWidth,Be=x.clientHeight;_e<2||Be<2||(Se.aspect=_e/Be,Se.updateProjectionMatrix(),I.setSize(_e,Be,!1),We(),j(),ct||rn())}function At(){ct=!1,at=tn(),Qt=window.innerWidth,Tt()}Tt(),requestAnimationFrame(()=>{P||j()});let F=0;function E(){var Ks,Qs;if(P)return;F=requestAnimationFrame(E);const _e=tn(),Be=document.getElementById("hero"),T=Be?Be.getBoundingClientRect().top:0,G=Be?Vt(T):!0,{totalPx:ee}=Ul(at),Q=O.getBoundingClientRect(),ne=Math.max(1,O.offsetHeight-at),Ue=Yt.clamp(-Q.top,0,ne);!G&&Ue<=ee?(ct=!1,Math.abs(_e-at)>Nh&&(at=_e,rn())):ct=!0;const Re=at,{cardPx:ke,titlePx:ze,totalPx:je}=Ul(Re),lt=Math.max(1,O.offsetHeight-Re),Ke=Yt.clamp(-Q.top,0,lt),yt=Math.min(Ke,je),$t=Math.max(1,je),Ft=Re*tS,Nt=Re*nS,wt=Ft+Nt,Ye=Ke-je,Tn=yr(Yt.clamp(Ye/Math.max(1,Ft),0,1)),mt=yr(Yt.clamp((Ye-Ft)/Math.max(1,Nt),0,1)),gn=x.clientWidth,Zn=x.clientHeight,Hn=Math.max(1,ze),vn=yt<Hn,Ut=vn?Yt.clamp(yt/Hn,0,1):0,an=Math.max(0,yt-Hn),gi=Math.max(1,ke),Gn=Yt.clamp(an/gi,0,1)*(un-1),fa=Yp(gn,Zn),wa=q3(gn,Zn,M.current),_i=vn?Yt.lerp(ht,vt,Ut):xt(Gn),qs=j3(ke,Re),Po=Z3(Hn,Re),Da=K3(Ut,Po),La=un-1,Xl=je+wt;ge&&(Zv(ge,_3(Ke,Hn,ke,je,Xl)),De&&(De.needsUpdate=!0)),We(),Se.position.set(0,0,_i),Se.lookAt(0,0,_i-Il);const rs=je+wt;let js=0;if(lt>rs&&Ke>=rs){const zt=Math.max(1,lt-rs);js=yr(Yt.clamp((Ke-rs)/zt,0,1))}const Zs=Math.max(1,wt+Re*Lh),Qi=Ke<=$t?Yt.clamp(Ke/$t,0,1):1+Yt.clamp(Ye/Zs,0,1)*.45;if($3(Ke,lt)){const zt=tC(Qi,_i,eC(gn)),Kn=new eb(zt,!1,"centripetal").getSpacedPoints(a3);if(Kn.length>=2){const Nn=nC(Kn,s3,r3,o3),ri=Ae.geometry.getAttribute("position"),oi=Nn.getAttribute("position");if(ri&&oi&&ri.count===oi.count&&((Ks=Ae.geometry.getIndex())==null?void 0:Ks.count)===((Qs=Nn.getIndex())==null?void 0:Qs.count)&&ri&&oi){ri.array.set(oi.array),ri.needsUpdate=!0;const Ui=Ae.geometry.getAttribute("normal"),Ji=Nn.getAttribute("normal");Ui&&Ji&&(Ui.array.set(Ji.array),Ui.needsUpdate=!0);const wr=Ae.geometry.getAttribute("uv"),ql=Nn.getAttribute("uv");wr&&ql&&(wr.array.set(ql.array),wr.needsUpdate=!0),Nn.dispose()}else Ae.geometry.dispose(),Ae.geometry=Nn;Ae.visible=!0;const ls=vn||Gn<Yt.clamp(qs,0,.999);Ae.renderOrder=ls?f3:qv,Te.uniforms.uStrength.value=.36*(1-js*.92)}else Ae.visible=!1,Te.uniforms.uStrength.value=0}else Ae.visible=!1,Te.uniforms.uStrength.value=0;const os=Math.floor((un-1)/2),Ni=performance.now(),Io=Yt.clamp(qs,0,.999);for(let zt=0;zt<un;zt++){if(vn||Gn<=zt+1e-5||Gn<zt+Io){Z[zt]=-1;continue}Z[zt]<0&&(Gn>=zt+1-1e-5?Z[zt]=Ni-Wv:Z[zt]=Ni)}if(X.forEach((zt,on)=>{const Kn=-on*Ja,Nn=un-1-on,ri=Z[Nn];let oi=ri<0?0:yr(Yt.clamp((Ni-ri)/Wv,0,1));!vn&&Nn===un-1&&mt>0&&(oi=Math.max(oi,mt));let{opacity:da}=Q3(Gn,Nn,qs,oi);vn&&on===La&&(da*=Da.lastCardOp,oi=0);let ls=1,Ui=0;!vn&&Nn===un-1&&da>.02&&Tn>0&&(ls=1-.28*Tn,Ui=-Ja*.32*Tn),zt.position.set(0,0,Kn+Ui),zt.scale.setScalar(wa*ls);const Ji=U[on];Ji.uniforms.uOpacity.value=da,Ji.uniforms.uWipe.value=oi,Ji.depthWrite=da>=.995&&oi<.02,zt.visible=da>.003&&oi<.997,zt.renderOrder=on<=os?aS+on:c3+(on-os-1)}),$.position.set(0,0,-La*Ja+.05),$.scale.setScalar(fa),ue.opacity=vn?Da.titleOp:0,$.visible=ue.opacity>.003,!m.current){h.current?qt=!1:G?qt=!0:qt&&Ke<je-Re*.25&&(qt=!1),document.body.classList.toggle(_r,!qt);const zt=o.current;zt!=null&&zt.classList.contains("flow-intro__sticky--exit")&&!G&&(zt.style.transition="none",zt.classList.remove("flow-intro__sticky--exit"),zt.offsetWidth,zt.style.transition="")}if(!ct){const zt=wt+Re*Lh+32-Xv,on=Math.max(Math.ceil(je+zt),Math.ceil(Re*1.08)),Kn=d.current;if(Kn){const Nn=`${on}px`;Kn.style.height!==Nn&&(Kn.style.height=Nn)}}const Cr=1-js*.96;o.current&&(o.current.style.setProperty("--intro-ui-opacity",String(Cr)),o.current.style.setProperty("--intro-tagline-opacity","1"));const Yl=String(1-js);I.domElement.style.opacity=Yl,I.render(he,Se)}E();let J=0,re=0,le=!1,Ce="page",Le=!1,pe=!1,fe=!1,we=0,Ge=0,Fe=0,Ie=!1,$e=!1,tt=0,rt=window.scrollY,W={kind:"title"};const Ne=8;function ve(){re&&(window.clearTimeout(re),re=0)}function Oe(){J&&(cancelAnimationFrame(J),J=0),le=!1,Ce="page",h.current=!1}function Pe(){Oe(),ve(),Le=!1}g.current=Pe;function Ee(){var je;const _e=Math.max(1,at),{cardPx:Be,titlePx:T,totalPx:G}=Ul(_e),ee=O.getBoundingClientRect(),Q=Math.max(1,O.offsetHeight-_e),ne=Yt.clamp(-ee.top,0,Q),Ue=document.getElementById("hero"),He=Ue?Vt(Ue.getBoundingClientRect().top):!0,Re=((je=o.current)==null?void 0:je.getBoundingClientRect().bottom)??_e,ze=Math.max(0,Math.min(ne,G)-T)/Math.max(1,Be)*(un-1);return{innerH:_e,cardPx:Be,titlePx:T,totalPx:G,scrolledPx:ne,landed:He,stickyBottom:Re,depthT:ze}}function Ve(_e=Ee()){return Y3(_e.scrolledPx,_e.titlePx,_e.cardPx,_e.totalPx,_e.landed,_e.stickyBottom,_e.innerH)}function Ze(){return le||Ve()}function nn(_e){let Be=_e.deltaY;return _e.deltaMode===1?Be*=16:_e.deltaMode===2&&(Be*=window.innerHeight),Be}function Dt(){ve(),Le=!0,re=window.setTimeout(()=>{re=0,Le=!1},I3)}function ti(_e,Be){return _e.kind==="title"?k3(O):_e.kind==="card"?X3(O,_e.idx,Be.innerH):Oh()}function In(_e){if(P||m.current||le)return;const Be=Ee(),T=_e.kind==="hero";if(!T&&!Ve(Be))return;const G=ti(_e,Be);if(G==null)return;const ee=window.scrollY,Q=G-ee;if(W=_e.kind==="hero"?{kind:"card",idx:un-1}:_e,Math.abs(Q)<lS(Be.innerH)){xr(G),Dt();return}le=!0,Ce=T?"exit":"page",h.current=T,Le=!0;const ne=T?G3(window.innerWidth):H3(window.innerWidth),Ue=performance.now(),He=ke=>{if(xr(ke),le=!1,Ce="page",J=0,!T){h.current=!1,Dt();return}h.current=!1,requestAnimationFrame(()=>{const ze=Oh();ze!=null&&xr(ze),requestAnimationFrame(()=>{const je=Oh();je!=null&&xr(je),Dt()})})},Re=ke=>{if(P||m.current){le=!1,Ce="page",J=0,h.current=!1;return}if(Ce==="page"&&!Ve(Ee())){Oe(),Le=!1;return}const ze=Math.min(1,(ke-Ue)/ne);xr(ee+Q*yr(ze)),ze<1?J=requestAnimationFrame(Re):He(G)};J=requestAnimationFrame(Re)}function la(_e,Be){const T=un-1,G=Be>0?1:-1,ee=Ph(_e.scrolledPx,_e.titlePx,_e.depthT,_e.innerH);if(ee.kind==="title")return G<0?null:{kind:"card",idx:0};const Q=ee.idx+G;return Q<0?{kind:"title"}:Q>T?G>0?{kind:"hero"}:{kind:"card",idx:T}:{kind:"card",idx:Q}}function Ra(_e){const Be=Ee();if(!Ve(Be)&&!(le&&Ce==="exit"))return!1;const T=la(Be,_e);return T===null?!1:(In(T),!0)}function ss(_e,Be){return la(_e,Be)===null}function Ca(_e){if(!Ze())return;const Be=nn(_e),T=Ee();if(!Ve(T)&&Ce!=="exit")return;const G=la(T,Be>0?1:-1);if(G===null){(le||Le)&&Pe();return}if(le||Le){_e.preventDefault();return}if(Math.abs(Be)<O3){_e.preventDefault();return}_e.preventDefault(),In(G)}function mi(_e){var Be;if(Ge=((Be=_e.touches[0])==null?void 0:Be.clientY)??Ge,we=Ge,Fe=window.scrollY,pe=!1,fe=le||Ve(),fe&&!le){const T=Ee();W=Ph(T.scrolledPx,T.titlePx,T.depthT,T.innerH)}}function mn(_e){var T;const Be=((T=_e.touches[0])==null?void 0:T.clientY)??we;if(!pe){if(!fe&&(le||Ve())&&(fe=!0,Ge=Be,we=Be,Fe=window.scrollY),!fe)return;const G=Ge-Be;if(Math.abs(G)<Ne){we=Be;return}const ee=G>0?1:-1,Q=Ee();if(!le&&!Ve(Q)){fe=!1,we=Be;return}if(ss(Q,ee)){fe=!1,Pe(),we=Be;return}le&&Pe(),pe=!0,fe=!1,Fe=window.scrollY,W=Ph(Q.scrolledPx,Q.titlePx,Q.depthT,Q.innerH)}_e.preventDefault(),we=Be,le||xr(Fe)}function _n(){const _e=pe,Be=fe,T=Ge-we;if(pe=!1,fe=!1,le)return;if(!_e){Be&&Pe();return}if(!Ve())return;if(Math.abs(T)<P3){In(W);return}const G=T>0?1:-1,ee=Ee();if(ss(ee,G)){Pe();return}Ra(G)}function zn(_e){_e.pointerType!=="touch"&&_e.button===0&&(Ie=!0,$e=!1,tt=window.scrollY,Ve()&&Oe())}function ca(_e){if(_e.pointerType==="touch"||!Ie)return;if(Ie=!1,!$e||!Ve()){$e=!1;return}const Be=Ee(),T=window.scrollY>=tt?1:-1,G=la(Be,T);if($e=!1,G===null){Pe();return}In(G)}function Ws(_e){_e.pointerType!=="touch"&&(Ie=!1,$e=!1)}function Ys(_e){_e.button===0&&($e||le||Le||Ve()&&(_e.preventDefault(),Ra(1)))}function ua(_e){var ee;const Be=_e.target;if((ee=Be==null?void 0:Be.closest)!=null&&ee.call(Be,"input, textarea, select, [contenteditable=true]"))return;const T=_e.key==="ArrowDown"||_e.key==="ArrowRight"||_e.key==="Enter"||_e.key===" ",G=_e.key==="ArrowUp"||_e.key==="ArrowLeft";if(!(!T&&!G)){if(le||Le){_e.preventDefault();return}Ve()&&(_e.preventDefault(),Ra(T?1:-1))}}function ji(){const _e=window.scrollY,Be=_e-rt;rt=_e,Ie&&Math.abs(Be)>.5&&($e=!0),le&&Ce==="page"&&!Ve()&&Pe()}function Zi(){Pe(),At()}function wi(){Pe();const _e=tn(),Be=window.innerWidth,T=Math.abs(_e-at),G=Math.abs(Be-Qt)>1;if(ct){T>Nh||G?At():Tt();return}at=_e,Qt=Be,Tt()}function Di(){Pe();const _e=tn();Math.abs(_e-at)<=Nh||(ct?At():(at=_e,Qt=window.innerWidth,Tt()))}window.addEventListener("wheel",Ca,{passive:!1}),window.addEventListener("touchstart",mi,{passive:!0}),window.addEventListener("touchmove",mn,{passive:!1}),window.addEventListener("touchend",_n,{passive:!0}),window.addEventListener("touchcancel",_n,{passive:!0}),window.addEventListener("pointerdown",zn,{passive:!0}),window.addEventListener("pointerup",ca,{passive:!0}),window.addEventListener("pointercancel",Ws,{passive:!0}),window.addEventListener("scroll",ji,{passive:!0}),window.addEventListener("resize",wi,{passive:!0}),window.addEventListener("orientationchange",Zi,{passive:!0}),x.addEventListener("click",Ys),window.addEventListener("keydown",ua);const Li=window.visualViewport;Li&&Li.addEventListener("resize",Di);const Ki=new ResizeObserver(Tt);Ki.observe(x),N=()=>{var _e;Pe(),g.current=null,cancelAnimationFrame(F),document.body.classList.remove(_r),window.removeEventListener("wheel",Ca),window.removeEventListener("touchstart",mi),window.removeEventListener("touchmove",mn),window.removeEventListener("touchend",_n),window.removeEventListener("touchcancel",_n),window.removeEventListener("pointerdown",zn),window.removeEventListener("pointerup",ca),window.removeEventListener("pointercancel",Ws),window.removeEventListener("scroll",ji),window.removeEventListener("resize",wi),window.removeEventListener("orientationchange",Zi),x.removeEventListener("click",Ys),window.removeEventListener("keydown",ua),Li&&Li.removeEventListener("resize",Di),Ki.disconnect(),U.forEach(Be=>{Be.dispose()}),k.forEach(Be=>Be.dispose()),(_e=ue.map)==null||_e.dispose(),ue.dispose(),X.forEach(Be=>Be.geometry.dispose()),$.geometry.dispose(),Ae.geometry.dispose(),Te.dispose(),he.remove(Ae),Me&&(Se.remove(Me),Me.geometry.dispose()),ae==null||ae.dispose(),De==null||De.dispose(),ge&&ge.pause(),I.dispose(),x.contains(I.domElement)&&x.removeChild(I.domElement)},P&&N()})(),()=>{var L;P=!0,(L=g.current)==null||L.call(g),g.current=null,document.body.classList.remove(_r),N==null||N()}},[]),D.jsxs("section",{ref:r,id:"flow",className:"flow-intro","aria-label":"Morpheum — Discover, Copy, Supervise, Isolate",children:[D.jsxs("div",{ref:o,className:"flow-intro__sticky",children:[D.jsx("video",{ref:u,className:"flow-intro__bg-video",src:h3,muted:!0,playsInline:!0,preload:"auto","aria-hidden":!0}),D.jsx("div",{ref:c,className:"flow-intro__canvas","aria-hidden":!0}),D.jsxs("div",{className:"flow-intro__top",children:[D.jsx("div",{className:"flow-intro__brand",children:D.jsx(Xp,{size:"sm",brandName:"Morpheum",className:"flow-intro__brand-mark"})}),D.jsxs("button",{type:"button",className:"flow-intro__skip",onClick:b,children:["Skip ",D.jsx("span",{className:"flow-intro__skip-key",children:"Esc"})]})]}),D.jsx("div",{className:"flow-intro__tagline-wrap",children:D.jsx(WR,{text:YR,className:"flow-intro__tagline",scrollerRef:r})}),D.jsx("div",{className:"flow-intro__sr","aria-live":"polite",children:Nl.map((R,y)=>D.jsxs("p",{children:["Step ",String(y+1).padStart(2,"0"),": ",R.verb,". ",R.description]},R.verb))})]}),D.jsx("div",{ref:d,className:"flow-intro__spacer","aria-hidden":!0})]})}const aC=280,sC=5/4,rC=3800,oC={discover:Ll,copy:wR};function lC(){return typeof window<"u"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches}function cC({stepIndex:a,kind:e,className:i,width:r=aC}){const o=Xe.useRef(null),c=e??Zx(a),u=Math.round(r*sC);return Xe.useEffect(()=>{const d=o.current;if(!d)return;let m=0,h;const g=()=>{const M=Math.min(window.devicePixelRatio||1,2),b=Math.round(r*M),R=Math.round(u*M);(d.width!==b||d.height!==R)&&(d.width=b,d.height=R);const y=d.getContext("2d");y&&OR(y,c,b,R,m)};g();const v=oC[c];v&&v>1&&!lC()&&(h=setInterval(()=>{m=(m+1)%v,g()},rC));const _=()=>g();return window.addEventListener("resize",_),()=>{window.removeEventListener("resize",_),h&&clearInterval(h)}},[c,r,u]),D.jsx("div",{className:["loop-step-sheet",i].filter(Boolean).join(" "),style:{width:r,height:u},children:D.jsx("canvas",{ref:o,className:"loop-step-sheet__canvas",style:{width:r,height:u},"aria-hidden":!0})})}const ex=[{id:"want-eth",agent:"SharpeShark",timestamp:"2026-07-08T15:42:00.000Z",timeLabel:"07-08, 15:42:00",status:"want-to",statusLabel:"Want to",action:"Open ETH long · 1.2 ETH",showActions:!0},{id:"rejected-btc",agent:"NightOwl",timestamp:"2026-07-08T15:31:00.000Z",timeLabel:"07-08, 15:31:00",status:"rejected",statusLabel:"Rejected",action:"Open BTC short · 0.04 BTC"},{id:"close-btc-profit",agent:"SharpeShark",timestamp:"2026-07-08T15:25:00.000Z",timeLabel:"07-08, 15:25:00",status:"short",statusLabel:"Close Long",action:"BTCUSDT · 0.04 BTC · 2,465.12 USDT",pnl:{text:"+103.09",tone:"long"}},{id:"open-eth-long",agent:"FluxRunner",timestamp:"2026-07-08T14:10:00.000Z",timeLabel:"07-08, 14:10:00",status:"long",statusLabel:"Open Long",action:"ETHUSDT · 0.8 ETH · 2,560.00 USDT"},{id:"open-sol-short",agent:"NightOwl",timestamp:"2026-07-07T09:42:00.000Z",timeLabel:"07-07, 09:42:00",status:"short",statusLabel:"Open Short",action:"SOLUSDT · 12 SOL · 1,824.00 USDT"}];function uC(){return D.jsxs("aside",{className:"supervise-log","aria-label":"Agent activity log",children:[D.jsx("header",{className:"supervise-log__header",children:D.jsx("span",{className:"supervise-log__kicker",children:"Activity log"})}),D.jsx("ol",{className:"supervise-log__timeline",children:ex.map((a,e)=>{const i=e===ex.length-1,r=e===0;return D.jsxs("li",{className:"supervise-log__item",children:[D.jsxs("div",{className:"supervise-log__meta",children:[D.jsx("span",{className:"supervise-log__agent",children:a.agent}),D.jsx("time",{className:"supervise-log__time",dateTime:a.timestamp,children:a.timeLabel})]}),D.jsxs("div",{className:"supervise-log__track","aria-hidden":!0,children:[i?null:D.jsx("span",{className:"supervise-log__track-line"}),D.jsx("span",{className:["supervise-log__dot",r?"supervise-log__dot--latest":""].filter(Boolean).join(" ")})]}),D.jsxs("div",{className:"supervise-log__body",children:[D.jsx("span",{className:`supervise-log__badge supervise-log__badge--${a.status}`,children:a.statusLabel}),D.jsxs("p",{className:"supervise-log__action",children:[a.action,a.pnl?D.jsxs(D.Fragment,{children:[" · ",D.jsx("span",{className:`supervise-log__pnl supervise-log__pnl--${a.pnl.tone}`,children:a.pnl.text})]}):null]}),a.showActions?D.jsxs("div",{className:"supervise-log__actions",children:[D.jsx("button",{type:"button",className:"supervise-log__btn supervise-log__btn--reject",children:"Reject"}),D.jsx("button",{type:"button",className:"supervise-log__btn supervise-log__btn--approve",children:"Approve"})]}):null]})]},a.id)})})]})}const fC=/^(action)$/i;function dC(a){return a.split(/(\s*[·/]\s*)/).map((i,r)=>fC.test(i.trim())?D.jsx("span",{className:"stat-chip__brand",children:i},r):D.jsx("span",{children:i},r))}function cS({label:a,status:e,live:i}){return D.jsxs("span",{className:`stat-chip ${i?"stat-chip--live":""}`,children:[D.jsx("span",{className:"stat-chip__label",children:a}),D.jsx("span",{className:"stat-chip__sep",children:"·"}),D.jsx("span",{className:"stat-chip__status",children:dC(e)})]})}var hC=fx();function pC(a,e,i=!1){a.style.fontFamily=e.fontFamily,a.style.fontSize=e.fontSize,a.style.fontWeight=e.fontWeight,a.style.letterSpacing=e.letterSpacing,a.style.lineHeight=e.lineHeight,a.style.textTransform=e.textTransform,a.style.whiteSpace=i?"nowrap":"normal",a.style.wordBreak=i?"normal":"break-word"}function mC(a,e,i,r){const o=getComputedStyle(i),c=document.createElement("div");c.style.position="fixed",c.style.left="-99999px",c.style.top="0",c.style.visibility="hidden",c.style.pointerEvents="none",c.style.width=`${e}px`,pC(c,o,!r);const u=document.createTextNode(a);return c.appendChild(u),document.body.appendChild(c),{probe:c,textNode:u}}function tx(a,e,i,r=!0){if(!a)return{lines:[],blockHeight:0};if(e<=0)return{lines:[a],blockHeight:0};const{probe:o,textNode:c}=mC(a,e,i,r),u=o.offsetHeight;if(!r)return document.body.removeChild(o),{lines:[a],blockHeight:u};const d=document.createRange(),m=[];let h=0,g=0;for(let v=1;v<=a.length;v++){d.setStart(c,0),d.setEnd(c,v);const _=d.getClientRects().length;_>g&&g>0&&(m.push(a.slice(h,v-1)),h=v-1),g=_}return h<a.length&&m.push(a.slice(h)),document.body.removeChild(o),{lines:m.length>0?m:[a],blockHeight:u}}const gC=40,_C=5,vC="typewriter-reveal",nx=1e3,xC=4e3;function ix(){return nx+Math.random()*(xC-nx)}function uS(){return typeof window>"u"?!1:window.matchMedia("(prefers-reduced-motion: reduce)").matches}function SC({text:a,content:e,speed:i,cursorWidth:r,active:o,waiting:c,completed:u,holdCursor:d=!1,onComplete:m}){const h=Xe.useRef(null),g=Xe.useRef(m),v=Xe.useRef(null),_=Xe.useRef(null),M=Xe.useRef(null),b=Xe.useRef("idle"),[R,y]=Xe.useState("idle");g.current=m;const x=Xe.useCallback(()=>{v.current&&(clearTimeout(v.current),v.current=null)},[]),O=Xe.useCallback(()=>{var U;x(),_.current=null,M.current=null,b.current="complete",y("complete"),(U=g.current)==null||U.call(g)},[x]),P=Xe.useCallback(U=>{x(),_.current=Date.now()+U,v.current=setTimeout(O,U)},[x,O]);Xe.useLayoutEffect(()=>{b.current="idle",y("idle"),M.current=null,_.current=null,x()},[a,i,r,x]),Xe.useLayoutEffect(()=>{var H,$,he;if(c||u||b.current==="complete")return;if(!o){b.current==="cursor-hold"&&v.current&&_.current!=null&&(x(),M.current=Math.max(0,_.current-Date.now()),_.current=null);return}if(b.current==="cursor-hold"&&!v.current){const Se=M.current??ix();M.current=null,P(Se);return}if(b.current==="animating"||b.current==="cursor-hold")return;if(uS()){(H=g.current)==null||H.call(g);return}const U=h.current;if(!U||!a){($=g.current)==null||$.call(g);return}U.style.width="",U.offsetWidth;const X=Math.max(a.length/i*1e3,120),k=Math.max(a.length,1),Z=U.closest(".typewriter-block"),me=(Z==null?void 0:Z.clientWidth)??((he=U.parentElement)==null?void 0:he.clientWidth)??0;U.style.whiteSpace="nowrap",U.style.width="auto";const ue=U.scrollWidth,q=me>0?Math.min(ue,me):ue;U.style.width="0",U.style.setProperty("--tw-duration",`${X}ms`),U.style.setProperty("--tw-target-width",`${q}px`),U.style.setProperty("--tw-steps",String(k)),U.style.setProperty("--tw-cursor-width",`${r}px`),U.offsetWidth,b.current="animating",y("animating");const z=Se=>{if(Se.animationName===vC){if(d){U.style.width=`${q}px`,b.current="cursor-hold",y("cursor-hold"),P(ix());return}U.style.width="",O()}};return U.addEventListener("animationend",z),()=>{U.removeEventListener("animationend",z)}},[o,u,O,d,P,i,a,c,x,r]);const C=R==="animating",N=R==="cursor-hold",L=R==="complete",A=["typewriter","typewriter-line",c?"is-waiting":"",C?"is-animating":"",N?"is-cursor-hold":"",u||L?"is-complete":"",!o&&!c&&!u&&!L&&(C||N)?"is-paused":""].filter(Boolean).join(" ");return D.jsx("span",{ref:h,className:A,children:e??a})}function qp({text:a,children:e,className:i,speed:r=gC,cursorWidth:o=_C,multiline:c="auto",active:u=!0,holdCursor:d=!0,onComplete:m}){const h=Xe.useRef(null),g=Xe.useRef(m),[v,_]=Xe.useState([]),[M,b]=Xe.useState(0),[R,y]=Xe.useState(0),[x,O]=Xe.useState(!1),[P,C]=Xe.useState(!1),N=uS();g.current=m;const L=Xe.useCallback(()=>{const ue=h.current;if(!ue||!a)return _([]),b(0),C(!0),!0;const q=ue.clientWidth;if(q<1)return!1;const H=(c==="auto"||c===!0)&&!N,{lines:$,blockHeight:he}=tx(a,q,ue,H);let Se=he;if(!H){const I=tx(a,q,ue,!0);Se=Math.max(he,I.blockHeight)}return _($),b(Se),C(!0),!0},[a,c,N]);Xe.useLayoutEffect(()=>{var ue,q;if(y(0),O(!1),C(!1),_([]),b(0),N){(ue=g.current)==null||ue.call(g),C(!0);return}if(!a){(q=g.current)==null||q.call(g),C(!0);return}if(!L()){const z=new ResizeObserver(()=>{L()&&z.disconnect()});return h.current&&z.observe(h.current),()=>z.disconnect()}},[a,c,L,N]);const B=Xe.useCallback(ue=>{var z;const q=ue>=v.length-1;hC.flushSync(()=>{if(!q){y(ue+1);return}O(!0)}),q&&((z=g.current)==null||z.call(g))},[v]),U=["typewriter-block",v.length>1?"typewriter-lines":"typewriter-host",i??"",x?"is-complete":"",P?"":"is-measuring",N?"is-static":""].filter(Boolean).join(" "),X={...!x&&!N&&M>0?{height:M,minHeight:M}:void 0},k=e??a;if(!P)return D.jsx("span",{ref:h,className:U,style:X,children:k});if(N||!a)return D.jsx("span",{ref:h,className:["typewriter","is-static",i??""].filter(Boolean).join(" "),children:k});if(x)return D.jsx("span",{ref:h,className:["typewriter-block","typewriter-host","is-complete",i??""].filter(Boolean).join(" "),children:k});const Z=v.length>0?v:[a],me=!!e&&Z.length<=1;return D.jsxs("span",{ref:h,className:U,style:X,"aria-label":a,children:[D.jsx("span",{className:"typewriter-ghost","aria-hidden":!0,children:k}),D.jsx("span",{className:"typewriter-overlay","aria-hidden":!0,children:Z.map((ue,q)=>D.jsx(SC,{text:ue,content:me?e:void 0,speed:r,cursorWidth:o,waiting:q>R,active:u&&q===R,completed:q<R,holdCursor:d&&q===Z.length-1,onComplete:q===R?()=>B(q):void 0},`${q}-${ue}`))})]})}function MC(){return typeof window<"u"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches}function jp(a,e){const i=(e==null?void 0:e.amount)??.2,[r,o]=Xe.useState(!1);return Xe.useLayoutEffect(()=>{if(r)return;if(MC()){o(!0);return}const c=a.current;if(!c)return;const u=new IntersectionObserver(d=>{for(const m of d)if(m.isIntersecting&&m.intersectionRatio>=Math.min(i,1)){o(!0),u.disconnect();return}},{root:null,threshold:[0,i,Math.min(i+.15,1),1],rootMargin:"0px"});return u.observe(c),()=>u.disconnect()},[i,r,a]),r}function yC(a){return String(a).padStart(2,"0")}function Iu(){return typeof window<"u"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches}const EC=1600,bC=1500,ax=5e3,TC=7e3;function AC(){return ax+Math.random()*(TC-ax)}function RC({text:a,active:e}){const[i,r]=Xe.useState(!1),[o,c]=Xe.useState(0),u=Xe.useRef(null),d=`> ${a}`,m=Xe.useCallback(()=>{u.current&&(clearTimeout(u.current),u.current=null)},[]);Xe.useLayoutEffect(()=>{if(m(),!e){r(!1),c(0);return}if(Iu()){r(!0);return}const g=window.setTimeout(()=>r(!0),bC);return()=>{window.clearTimeout(g),m()}},[e,m]);const h=Xe.useCallback(()=>{Iu()||(m(),u.current=setTimeout(()=>{u.current=null,c(g=>g+1)},AC()))},[m]);return D.jsx("p",{className:"flow-step__example",children:i?D.jsx(qp,{text:d,className:"flow-step__example-type",speed:42,multiline:"auto",active:!0,holdCursor:!0,onComplete:h},o):D.jsx("span",{className:"flow-step__example-type","aria-hidden":!0,children:d})})}function CC(){const[a,e]=Xe.useState(()=>new Set),[i,r]=Xe.useState(!1),o=Xe.useRef(new Map),c=Xe.useRef(null),u=jp(c,{amount:.35}),d=Ns.steps.every(v=>a.has(`step-${v.n}`));Xe.useLayoutEffect(()=>{if(Iu()){e(new Set(Ns.steps.map(_=>`step-${_.n}`))),r(!0);return}const v=new IntersectionObserver(_=>{e(M=>{const b=new Set(M);for(const R of _){const y=R.target.dataset.flowKey;y&&R.isIntersecting&&b.add(y)}return b})},{root:null,threshold:[0,.01,.08,.15,.25],rootMargin:"-42% 0px -42% 0px"});for(const _ of o.current.values())v.observe(_);return()=>{v.disconnect()}},[]),Xe.useLayoutEffect(()=>{if(Iu())return;if(!d){r(!1);return}const v=window.setTimeout(()=>{r(!0)},EC);return()=>window.clearTimeout(v)},[d]);const m=Xe.useCallback((v,_)=>{_?o.current.set(v,_):o.current.delete(v)},[]),h=Xe.useCallback(v=>{e(_=>new Set(_).add(v))},[]),g=u&&i;return D.jsx("section",{id:"how",className:"section flow",children:D.jsxs("div",{className:"container",children:[D.jsx("p",{className:"section-kicker",children:Ns.kicker}),D.jsx("h2",{className:"section-title flow__title",children:Ns.title}),D.jsx("div",{className:"flow__chips",children:Ns.chips.map(v=>D.jsx(cS,{label:v.label,status:v.value},v.label))}),D.jsx("div",{className:"flow__steps",role:"list",children:Ns.steps.map((v,_)=>{const M=`step-${v.n}`,b=a.has(M);return D.jsxs("article",{ref:R=>m(M,R),"data-flow-key":M,role:"listitem",className:`flow-step${b?" flow-step--expanded":""}`,"aria-expanded":b,children:[D.jsxs("button",{type:"button",className:"flow-step__head",onClick:()=>h(M),"aria-label":b?`${v.title}, expanded`:`${v.title}, tap to expand`,children:[D.jsxs("span",{className:"flow-step__idx",children:["Step ",yC(v.n)]}),D.jsx("h3",{className:"flow-step__title",children:v.title}),D.jsx("span",{className:"flow-step__chevron","aria-hidden":!0,children:b?"−":"+"})]}),D.jsx("div",{className:"flow-step__expand","aria-hidden":!b,children:D.jsx("div",{className:"flow-step__expand-inner",children:D.jsxs("div",{className:`flow-step__split${_===2?" flow-step__split--supervise":""}`,children:[D.jsx("p",{className:"flow-step__meta",children:v.feature}),D.jsxs("div",{className:"flow-step__copy",children:[D.jsx("p",{className:"flow-step__detail",children:v.body}),D.jsx(RC,{text:v.example,active:b}),D.jsx("div",{className:"flow-step__actions",children:D.jsx("a",{href:Ln.explore,className:"flow-step__open","aria-label":`Explore after ${v.title}`,children:D.jsx("span",{"aria-hidden":!0,className:"flow-step__open-arrow",children:"→"})})})]}),D.jsx("div",{className:`flow-step__sheet${_===2?" flow-step__sheet--log":""}`,"aria-hidden":!b,children:b?_===2?D.jsx(uC,{}):D.jsx(cC,{stepIndex:_,width:280}):null})]})})})]},M)})}),D.jsx("p",{ref:c,className:"flow__outcome",children:g?D.jsx(qp,{text:Ns.outcome,className:"flow__outcome-type",speed:42,multiline:"auto",active:!0,holdCursor:!0}):D.jsx("span",{className:"flow__outcome-type","aria-hidden":!0,children:Ns.outcome})})]})})}function wC(){return D.jsx("footer",{className:"site-footer",children:D.jsxs("div",{className:"container site-footer__inner",children:[D.jsxs("div",{className:"site-footer__brand",children:[D.jsx("a",{className:"site-footer__logo",href:"#hero","aria-label":"Morpheum home",children:D.jsx(Xp,{size:"sm"})}),D.jsx("p",{className:"site-footer__legal",children:z_.legal})]}),D.jsxs("div",{className:"site-footer__meta",children:[D.jsxs("nav",{className:"site-footer__nav","aria-label":"Footer",children:[Su.map(a=>D.jsx("a",{href:a.href,children:a.label},a.id)),D.jsx("a",{href:Ln.docs,children:"Docs"}),D.jsx("a",{href:Ln.manifesto,children:"Manifesto"}),D.jsx("a",{href:Ln.discord,children:"Discord"}),D.jsx("a",{href:Ln.x,children:"X"})]}),D.jsx("div",{className:"site-footer__labels","aria-label":"Protocol",children:z_.labels.map(a=>D.jsx("span",{className:"site-footer__label",children:a},a))})]})]})})}const sx="!@#$%^&*()_+{}[]|;:,.<>?/0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",fS=50,rx=3500,ox=4e3,DC=1400,LC=1200,NC=4500;function dS(){return typeof window>"u"?!1:window.matchMedia("(prefers-reduced-motion: reduce)").matches}function lx(a){return/[A-Za-z0-9]/.test(a)}function UC(){return sx[Math.floor(Math.random()*sx.length)]??"?"}function OC(a){return Math.random()<.5?UC():a}function hS(a,e,i){const r=[];for(let h=0;h<a.length;h++)lx(a[h]??"")&&r.push(h);const o=r.length,c=o===0?1:Math.min(e/i,1),u=Math.floor(c*o),d=new Set(r.slice(0,u));let m="";for(let h=0;h<a.length;h++){const g=a[h]??"";!lx(g)||d.has(h)?m+=g:m+=OC(g)}return m}function PC(a){return typeof a=="boolean"?{enabled:a,decryptMs:rx,pauseMs:ox}:{enabled:a.enabled??!0,decryptMs:a.decryptMs??rx,pauseMs:a.pauseMs??ox}}function Yn(a,e=!0){const{enabled:i,decryptMs:r,pauseMs:o}=PC(e),c=r+o,[u,d]=Xe.useState(a);return Xe.useEffect(()=>{if(!i||dS()){d(a);return}let m=Date.now();const h=()=>{const v=Date.now();let _=v-m;_>=c&&(m=v,_=0),d(hS(a,_,r))};h();const g=setInterval(h,fS);return()=>{clearInterval(g)}},[a,i,r,c]),u}function cx(a,e={}){const i=e.enabled??!0,r=e.stepDelayMs??DC,o=e.stepDecryptMs??LC,c=e.holdMs??NC,u=a.join("\0"),[d,m]=Xe.useState(a),[h,g]=Xe.useState(()=>a.map(()=>!1));return Xe.useEffect(()=>{const v=u.length>0?u.split("\0"):[];if(!i||dS()||v.length===0){m(v),g(v.map(()=>!0));return}const M=(v.length-1)*r+o+c;let b=Date.now();const R=()=>{const x=Date.now();let O=x-b;O>=M&&(b=x,O=0);const P=[],C=[];for(let N=0;N<v.length;N++){const L=v[N]??"",B=N*r,A=O>=B;if(C.push(A),!A){P.push(L);continue}const U=O-B;P.push(hS(L,U,o))}m(P),g(C)};R();const y=setInterval(R,fS);return()=>{clearInterval(y)}},[u,i,r,o,c]),{displays:d,started:h}}function IC(){const a=[...B_,...B_];return D.jsx("div",{className:"marquee","aria-label":"Live status",children:D.jsx("div",{className:"marquee__viewport",children:D.jsx("div",{className:"marquee__track",children:a.map((e,i)=>D.jsx(cS,{label:e.label,status:e.status,live:"live"in e?e.live:!1},`${e.label}-${i}`))})})})}function FC({showGrid:a=!1,maskAlpha:e=.72,contentOffsetY:i=-50}){const[r,o]=Ls.headline,c=Yn(Ls.eyebrow.label),u=Math.min(1,Math.max(0,e));return D.jsxs("section",{id:"hero",className:"hero","aria-labelledby":"hero-heading",children:[D.jsx("video",{className:"hero__video",autoPlay:!0,muted:!0,loop:!0,playsInline:!0,"aria-hidden":!0,children:D.jsx("source",{src:"/Morm_IntroAnimation_2.mp4",type:"video/mp4"})}),D.jsx("div",{className:"hero__video-mask",style:{"--hero-mask-alpha":u},"aria-hidden":!0}),D.jsx("div",{className:"hero__atmosphere","aria-hidden":!0}),a?D.jsx("div",{className:"hero__grid","aria-hidden":!0}):null,D.jsx("div",{className:"hero__logo-anim","aria-hidden":!0,children:D.jsxs("svg",{className:"hero__logo-anim-svg",viewBox:IR,fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[D.jsx("g",{className:"hero__logo-anim-ghost",children:Rp.map(d=>D.jsx("path",{d,fill:"#C8F5A8"},`ghost-${d.slice(0,24)}`))}),D.jsx("g",{className:"hero__logo-anim-fill",children:Rp.map(d=>D.jsx("path",{d,fill:"#C8F5A8"},`fill-${d.slice(0,24)}`))})]})}),D.jsx("div",{className:"hero__scanlines","aria-hidden":!0}),D.jsx("div",{className:"hero__grain","aria-hidden":!0}),D.jsx("div",{className:"hero__veil","aria-hidden":!0}),D.jsxs("div",{className:"container hero__content",style:{"--hero-content-offset-y":`${i}px`},children:[D.jsxs("a",{className:"hero__eyebrow hero__eyebrow--matrix",href:Ls.eyebrow.href,"aria-label":`${Ls.eyebrow.label}›`,children:[c,D.jsx("span",{className:"hero__eyebrow-chevron","aria-hidden":!0,children:"›"})]}),D.jsxs("h1",{id:"hero-heading",className:"hero__headline",children:[D.jsx("span",{className:"hero__line hero__line--lead",children:r}),D.jsx("span",{className:"hero__line hero__line--punch",children:o})]}),D.jsxs("div",{className:"hero__ctas",children:[D.jsx(Ro,{href:Ls.primaryCta.href,variant:"primary",children:Ls.primaryCta.label}),D.jsx(Ro,{href:Ls.secondaryCta.href,variant:"secondary",children:Ls.secondaryCta.label})]})]}),D.jsx(IC,{})]})}function BC(){const a=Yn(qd.text);return D.jsx("div",{className:"manifesto-strip",children:D.jsx("a",{className:"manifesto-strip__link manifesto-strip__link--matrix",href:qd.href,"aria-label":qd.text,children:a})})}const si={decryptMs:2800,pauseMs:5200},ux={stepDelayMs:1400,stepDecryptMs:1200,holdMs:4500};function pS(a){return String(a+1).padStart(2,"0")}function zC(a,e,i,r){return`${pS(a)}  ${e}  ·  ${i}  ·  ${r}`}function HC(a,e,i){return`${pS(a)}  ${e}  ·  ${i}`}function GC(a){return!a.from||!a.to||!a.asset||!a.amt?null:`${a.from} → ${a.to} · ${a.asset} ${a.amt}`}function hi({label:a,value:e,display:i}){return D.jsxs("div",{className:"persona-card__meta-row",children:[D.jsx("span",{className:"terminal-label",children:a}),D.jsx("span",{className:"terminal-value persona-card__meta-value persona-card__meta-value--matrix","aria-label":e,children:i})]})}function fn({value:a,display:e,className:i="terminal-value persona-card__meta-value persona-card__meta-value--matrix",hidden:r=!1}){return D.jsx("p",{className:i,"aria-label":a,"aria-hidden":r||void 0,"data-pending":r?"true":void 0,children:e})}function VC({meta:a}){const e=Yn(a.name,si),i=Yn(a.tx,si),r=Yn(a.hash,si),o=Yn(a.chain,si),c=Yn(a.verified,si),u=Yn(a.rep,si),d=Yn(a.portable,si),m=Yn(a.next,si),h=`tx ${a.tx}`,g=`tx ${i}`,v=`did · ${a.name}`,_=`identity · ${e}`,M=`hash ${a.hash}`,b=`hash ${r}`,R=`chain ${a.chain}`,y=`chain ${o}`,x=`verified ${a.verified} · rep ${a.rep} · portable ${a.portable}`,O=`verified ${c} · rep ${u} · portable ${d}`,P=`next ${a.next}`,C=`next ${m}`,N=`rep ${a.rep} · portable ${a.portable}`,L=`rep ${u} · portable ${d}`,B=`verified ${a.verified}`,A=`verified ${c}`;return D.jsxs("div",{className:"persona-card__meta persona-card__meta--identity",children:[D.jsx("p",{className:"persona-card__meta-kind terminal-label",children:"become an operator"}),D.jsx("p",{className:"terminal-label",children:"on-chain transaction"}),D.jsxs("div",{className:"persona-card__meta-rows",children:[D.jsx(hi,{label:"tx",value:a.tx,display:i}),D.jsx(hi,{label:"hash",value:a.hash,display:r}),D.jsx(hi,{label:"chain",value:a.chain,display:o}),D.jsx(hi,{label:"verified",value:a.verified,display:c}),D.jsx(hi,{label:"rep",value:a.rep,display:u}),D.jsx(hi,{label:"portable",value:a.portable,display:d}),D.jsx(hi,{label:"next",value:a.next,display:m})]}),D.jsxs("div",{className:"persona-card__meta-compact",children:[D.jsx(fn,{value:h,display:g}),D.jsx(fn,{value:v,display:_,className:"terminal-value persona-card__meta-value--matrix"}),D.jsx(fn,{value:M,display:b}),D.jsx(fn,{value:R,display:y}),D.jsx(fn,{value:x,display:O}),D.jsx(fn,{value:P,display:C})]}),D.jsxs("div",{className:"persona-card__meta-xxs",children:[D.jsx(fn,{value:h,display:g}),D.jsx(fn,{value:a.name,display:e,className:"terminal-value persona-card__meta-value--matrix"}),D.jsx(fn,{value:M,display:b}),D.jsx(fn,{value:R,display:y}),D.jsx(fn,{value:B,display:A}),D.jsx(fn,{value:N,display:L}),D.jsx(fn,{value:P,display:C})]})]})}function kC({meta:a}){const e=Yn(a.tx,si),i=Yn(a.from,si),r=Yn(a.to,si),o=Yn(a.asset,si),c=Yn(a.amt,si),u=Yn(a.chain,si),d=Yn(a.status,si),m=`${a.from} → ${a.to}`,h=`${i} → ${r}`,g=`tx ${a.tx}`,v=`tx ${e}`,_=`${a.asset} ${a.amt} · ${a.chain}`,M=`${o} ${c} · ${u}`,b=`${a.asset} ${a.amt}`,R=`${o} ${c}`,y=`status ${a.status}`,x=`status ${d}`;return D.jsxs("div",{className:"persona-card__meta persona-card__meta--community",children:[D.jsx("p",{className:"persona-card__meta-kind terminal-label",children:a.label}),D.jsxs("div",{className:"persona-card__meta-rows",children:[D.jsx(hi,{label:"tx",value:a.tx,display:e}),D.jsx(hi,{label:"from",value:a.from,display:i}),D.jsx(hi,{label:"to",value:a.to,display:r}),D.jsx(hi,{label:"asset",value:a.asset,display:o}),D.jsx(hi,{label:"amt",value:a.amt,display:c}),D.jsx(hi,{label:"chain",value:a.chain,display:u}),D.jsx(hi,{label:"status",value:a.status,display:d})]}),D.jsxs("div",{className:"persona-card__meta-compact",children:[D.jsx("p",{className:"terminal-label",children:a.label}),D.jsx(fn,{value:g,display:v}),D.jsx(fn,{value:m,display:h}),D.jsx(fn,{value:_,display:M}),D.jsx(fn,{value:y,display:x})]}),D.jsxs("div",{className:"persona-card__meta-xxs",children:[D.jsx("p",{className:"terminal-label",children:a.label}),D.jsx(fn,{value:g,display:v}),D.jsx(fn,{value:m,display:h}),D.jsx(fn,{value:b,display:R}),D.jsx(fn,{value:a.chain,display:u}),D.jsx(fn,{value:y,display:x})]})]})}function XC({meta:a}){const e=Xe.useRef(null),i=jp(e,{amount:.15}),r=a.steps.find(h=>h.from&&h.to&&h.asset&&h.amt),o=r?GC(r):null,c=Xe.useMemo(()=>{const h=a.steps.map((g,v)=>zC(v,g.op,g.tx,g.status));return o&&h.push(o),h.push(a.chain),h},[a.steps,a.chain,o]),u=Xe.useMemo(()=>{const h=a.steps.map((g,v)=>HC(v,g.op,g.tx));return o&&h.push(o),h},[a.steps,o]),d=cx(c,{...ux,enabled:i}),m=cx(u,{...ux,enabled:i});return D.jsxs("div",{ref:e,className:"persona-card__meta persona-card__meta--chain",children:[D.jsx("p",{className:"persona-card__meta-kind terminal-label",children:a.label}),D.jsx("div",{className:"persona-card__meta-rows",children:c.map((h,g)=>D.jsx(fn,{value:h,display:d.displays[g]??h,hidden:!(d.started[g]??!0)},`rows-${h}`))}),D.jsxs("div",{className:"persona-card__meta-compact",children:[D.jsx("p",{className:"terminal-label",children:a.label}),c.map((h,g)=>D.jsx(fn,{value:h,display:d.displays[g]??h,hidden:!(d.started[g]??!0)},`compact-${h}`))]}),D.jsxs("div",{className:"persona-card__meta-xxs",children:[D.jsx("p",{className:"terminal-label",children:a.label}),u.map((h,g)=>D.jsx(fn,{value:h,display:m.displays[g]??h,hidden:!(m.started[g]??!0)},`xxs-${h}`))]})]})}function WC({meta:a}){return a.kind==="identity"?D.jsx(VC,{meta:a}):a.kind==="chain"?D.jsx(XC,{meta:a}):D.jsx(kC,{meta:a})}function YC({persona:a}){return D.jsxs("article",{className:`persona-card persona-card--${a.weight}`,children:[D.jsx("h3",{className:"persona-card__title",children:a.title}),D.jsx("ol",{className:"persona-card__steps",children:a.steps.map(e=>D.jsxs("li",{children:[D.jsxs("span",{className:"persona-card__chevron","aria-hidden":!0,children:[">"," "]}),e]},e))}),D.jsx(Ro,{href:a.cta.href,variant:"ghost",className:"persona-card__cta",children:a.cta.label}),D.jsx(WC,{meta:a.meta})]})}function qC(){return D.jsx("section",{id:"personas",className:"section personas",children:D.jsxs("div",{className:"container",children:[D.jsx("p",{className:"section-kicker",children:jd.kicker}),D.jsx("h2",{className:"section-title personas__title",children:jd.title}),D.jsx("div",{className:"personas__grid",children:jd.items.map(a=>D.jsx(YC,{persona:a},a.title))})]})})}function jC(){const[a,e]=Xe.useState(!1),[i,r]=Xe.useState(!1),[o,c]=Xe.useState("");return Xe.useEffect(()=>{const u=()=>e(window.scrollY>24);return u(),window.addEventListener("scroll",u,{passive:!0}),()=>window.removeEventListener("scroll",u)},[]),Xe.useEffect(()=>{const u=Su.map(m=>m.id),d=new IntersectionObserver(m=>{var g;const h=m.filter(v=>v.isIntersecting).sort((v,_)=>_.intersectionRatio-v.intersectionRatio);(g=h[0])!=null&&g.target.id&&c(h[0].target.id)},{rootMargin:"-30% 0px -55% 0px",threshold:[0,.25,.5]});return u.forEach(m=>{const h=document.getElementById(m);h&&d.observe(h)}),()=>d.disconnect()},[]),Xe.useEffect(()=>(document.body.style.overflow=i?"hidden":"",()=>{document.body.style.overflow=""}),[i]),D.jsxs(D.Fragment,{children:[D.jsx("header",{className:`sticky-header ${a?"sticky-header--solid":""}`,children:D.jsxs("div",{className:"sticky-header__inner",children:[D.jsx("a",{className:"sticky-header__logo",href:"#hero","aria-label":"Morpheum home",children:D.jsx(Xp,{size:"sm",brandName:"Morpheum"})}),D.jsx("nav",{className:"sticky-header__nav","aria-label":"Primary",children:Su.map(u=>D.jsx("a",{href:u.href,className:`sticky-header__link ${o===u.id?"is-active":""}`,children:u.label},u.id))}),D.jsxs("div",{className:"sticky-header__actions",children:[D.jsx("a",{className:"sticky-header__docs",href:Ln.docs,children:"Docs"}),D.jsx(Ro,{href:Ln.app,variant:"primary",className:"sticky-header__launch",children:"Launch Demo"}),D.jsxs("button",{type:"button",className:"sticky-header__menu","aria-expanded":i,"aria-controls":"mobile-nav","aria-label":i?"Close menu":"Open menu",onClick:()=>r(u=>!u),children:[D.jsx("span",{}),D.jsx("span",{}),D.jsx("span",{})]})]})]})}),D.jsx("div",{id:"mobile-nav",className:`mobile-sheet ${i?"is-open":""}`,hidden:!i,children:D.jsxs("nav",{className:"mobile-sheet__nav","aria-label":"Mobile",children:[Su.map(u=>D.jsx("a",{href:u.href,onClick:()=>r(!1),className:o===u.id?"is-active":"",children:u.label},u.id)),D.jsx("a",{href:Ln.docs,onClick:()=>r(!1),children:"Docs"})]})})]})}function ZC(){const a=Xe.useRef(null),e=jp(a,{amount:.35});return D.jsx("section",{className:"thesis section","aria-label":"Thesis",children:D.jsxs("div",{className:"container thesis__inner",children:[D.jsx("p",{ref:a,className:"thesis__close",children:e?D.jsxs(qp,{text:F_.close,className:"thesis__close-type",speed:36,multiline:"auto",active:!0,holdCursor:!0,children:["The Agent-native"," ",D.jsx("span",{className:"thesis__close-accent",children:"L1 DEX"})," — ",D.jsx("span",{className:"thesis__close-phrase",children:"faster, safer trades."})]}):D.jsxs("span",{className:"thesis__close-type","aria-hidden":!0,children:["The Agent-native"," ",D.jsx("span",{className:"thesis__close-accent",children:"L1 DEX"})," — ",D.jsx("span",{className:"thesis__close-phrase",children:"faster, safer trades."})]})}),D.jsx("p",{className:"section-kicker",children:"Two Risks in Agentic Economy"}),D.jsx("div",{className:"thesis__risks",children:F_.risks.map(i=>D.jsxs("article",{className:"thesis__pair",children:[D.jsxs("div",{className:"thesis__risk",children:[D.jsx("p",{className:"thesis__label",children:"Risk"}),D.jsx("h3",{className:"thesis__risk-title",children:i.risk}),D.jsxs("p",{className:"thesis__failure",children:[D.jsx("span",{"aria-hidden":!0,children:"> "}),i.failure]})]}),D.jsxs("div",{className:"thesis__solve",children:[D.jsx("p",{className:"thesis__label thesis__label--solve",children:"Solution"}),D.jsx("p",{className:"thesis__solve-body",children:i.solve})]})]},i.risk))})]})})}function KC(){return D.jsxs("div",{className:"page",children:[D.jsx("a",{className:"skip-link",href:"#hero",children:"Skip to content"}),D.jsx(BC,{}),D.jsx(jC,{}),D.jsxs("main",{className:"page__main",children:[D.jsx(iC,{cardAlpha:0,modalChassisAlpha:.8,cardSize:.8}),D.jsx(FC,{contentOffsetY:0,maskAlpha:.5}),D.jsx(ZC,{}),D.jsx(Ay,{}),D.jsx(qC,{}),D.jsx(CC,{}),D.jsx(Cy,{}),D.jsx(Ty,{})]}),D.jsx(wC,{})]})}Ey.createRoot(document.getElementById("root")).render(D.jsx(Xe.StrictMode,{children:D.jsx(KC,{})}));
